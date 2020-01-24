import {
  CreateCapacityProviderCommandInput,
  CreateCapacityProviderCommandOutput
} from "../commands/CreateCapacityProviderCommand";
import {
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "../commands/CreateClusterCommand";
import {
  CreateServiceCommandInput,
  CreateServiceCommandOutput
} from "../commands/CreateServiceCommand";
import {
  CreateTaskSetCommandInput,
  CreateTaskSetCommandOutput
} from "../commands/CreateTaskSetCommand";
import {
  DeleteAccountSettingCommandInput,
  DeleteAccountSettingCommandOutput
} from "../commands/DeleteAccountSettingCommand";
import {
  DeleteAttributesCommandInput,
  DeleteAttributesCommandOutput
} from "../commands/DeleteAttributesCommand";
import {
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput
} from "../commands/DeleteClusterCommand";
import {
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput
} from "../commands/DeleteServiceCommand";
import {
  DeleteTaskSetCommandInput,
  DeleteTaskSetCommandOutput
} from "../commands/DeleteTaskSetCommand";
import {
  DeregisterContainerInstanceCommandInput,
  DeregisterContainerInstanceCommandOutput
} from "../commands/DeregisterContainerInstanceCommand";
import {
  DeregisterTaskDefinitionCommandInput,
  DeregisterTaskDefinitionCommandOutput
} from "../commands/DeregisterTaskDefinitionCommand";
import {
  DescribeCapacityProvidersCommandInput,
  DescribeCapacityProvidersCommandOutput
} from "../commands/DescribeCapacityProvidersCommand";
import {
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput
} from "../commands/DescribeClustersCommand";
import {
  DescribeContainerInstancesCommandInput,
  DescribeContainerInstancesCommandOutput
} from "../commands/DescribeContainerInstancesCommand";
import {
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput
} from "../commands/DescribeServicesCommand";
import {
  DescribeTaskDefinitionCommandInput,
  DescribeTaskDefinitionCommandOutput
} from "../commands/DescribeTaskDefinitionCommand";
import {
  DescribeTaskSetsCommandInput,
  DescribeTaskSetsCommandOutput
} from "../commands/DescribeTaskSetsCommand";
import {
  DescribeTasksCommandInput,
  DescribeTasksCommandOutput
} from "../commands/DescribeTasksCommand";
import {
  DiscoverPollEndpointCommandInput,
  DiscoverPollEndpointCommandOutput
} from "../commands/DiscoverPollEndpointCommand";
import {
  ListAccountSettingsCommandInput,
  ListAccountSettingsCommandOutput
} from "../commands/ListAccountSettingsCommand";
import {
  ListAttributesCommandInput,
  ListAttributesCommandOutput
} from "../commands/ListAttributesCommand";
import {
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "../commands/ListClustersCommand";
import {
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput
} from "../commands/ListContainerInstancesCommand";
import {
  ListServicesCommandInput,
  ListServicesCommandOutput
} from "../commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTaskDefinitionFamiliesCommandInput,
  ListTaskDefinitionFamiliesCommandOutput
} from "../commands/ListTaskDefinitionFamiliesCommand";
import {
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput
} from "../commands/ListTaskDefinitionsCommand";
import {
  ListTasksCommandInput,
  ListTasksCommandOutput
} from "../commands/ListTasksCommand";
import {
  PutAccountSettingCommandInput,
  PutAccountSettingCommandOutput
} from "../commands/PutAccountSettingCommand";
import {
  PutAccountSettingDefaultCommandInput,
  PutAccountSettingDefaultCommandOutput
} from "../commands/PutAccountSettingDefaultCommand";
import {
  PutAttributesCommandInput,
  PutAttributesCommandOutput
} from "../commands/PutAttributesCommand";
import {
  PutClusterCapacityProvidersCommandInput,
  PutClusterCapacityProvidersCommandOutput
} from "../commands/PutClusterCapacityProvidersCommand";
import {
  RegisterContainerInstanceCommandInput,
  RegisterContainerInstanceCommandOutput
} from "../commands/RegisterContainerInstanceCommand";
import {
  RegisterTaskDefinitionCommandInput,
  RegisterTaskDefinitionCommandOutput
} from "../commands/RegisterTaskDefinitionCommand";
import {
  RunTaskCommandInput,
  RunTaskCommandOutput
} from "../commands/RunTaskCommand";
import {
  StartTaskCommandInput,
  StartTaskCommandOutput
} from "../commands/StartTaskCommand";
import {
  StopTaskCommandInput,
  StopTaskCommandOutput
} from "../commands/StopTaskCommand";
import {
  SubmitAttachmentStateChangesCommandInput,
  SubmitAttachmentStateChangesCommandOutput
} from "../commands/SubmitAttachmentStateChangesCommand";
import {
  SubmitContainerStateChangeCommandInput,
  SubmitContainerStateChangeCommandOutput
} from "../commands/SubmitContainerStateChangeCommand";
import {
  SubmitTaskStateChangeCommandInput,
  SubmitTaskStateChangeCommandOutput
} from "../commands/SubmitTaskStateChangeCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateClusterSettingsCommandInput,
  UpdateClusterSettingsCommandOutput
} from "../commands/UpdateClusterSettingsCommand";
import {
  UpdateContainerAgentCommandInput,
  UpdateContainerAgentCommandOutput
} from "../commands/UpdateContainerAgentCommand";
import {
  UpdateContainerInstancesStateCommandInput,
  UpdateContainerInstancesStateCommandOutput
} from "../commands/UpdateContainerInstancesStateCommand";
import {
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput
} from "../commands/UpdateServiceCommand";
import {
  UpdateServicePrimaryTaskSetCommandInput,
  UpdateServicePrimaryTaskSetCommandOutput
} from "../commands/UpdateServicePrimaryTaskSetCommand";
import {
  UpdateTaskSetCommandInput,
  UpdateTaskSetCommandOutput
} from "../commands/UpdateTaskSetCommand";
import {
  AccessDeniedException,
  Attachment,
  AttachmentStateChange,
  Attribute,
  AttributeLimitExceededException,
  AutoScalingGroupProvider,
  AwsVpcConfiguration,
  BlockedException,
  CapacityProvider,
  CapacityProviderField,
  CapacityProviderStrategyItem,
  ClientException,
  Cluster,
  ClusterContainsContainerInstancesException,
  ClusterContainsServicesException,
  ClusterContainsTasksException,
  ClusterField,
  ClusterNotFoundException,
  ClusterSetting,
  Compatibility,
  Container,
  ContainerDefinition,
  ContainerDependency,
  ContainerInstance,
  ContainerInstanceField,
  ContainerOverride,
  ContainerStateChange,
  CreateCapacityProviderRequest,
  CreateCapacityProviderResponse,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateServiceRequest,
  CreateServiceResponse,
  CreateTaskSetRequest,
  CreateTaskSetResponse,
  DeleteAccountSettingRequest,
  DeleteAccountSettingResponse,
  DeleteAttributesRequest,
  DeleteAttributesResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteServiceRequest,
  DeleteServiceResponse,
  DeleteTaskSetRequest,
  DeleteTaskSetResponse,
  Deployment,
  DeploymentConfiguration,
  DeploymentController,
  DeregisterContainerInstanceRequest,
  DeregisterContainerInstanceResponse,
  DeregisterTaskDefinitionRequest,
  DeregisterTaskDefinitionResponse,
  DescribeCapacityProvidersRequest,
  DescribeCapacityProvidersResponse,
  DescribeClustersRequest,
  DescribeClustersResponse,
  DescribeContainerInstancesRequest,
  DescribeContainerInstancesResponse,
  DescribeServicesRequest,
  DescribeServicesResponse,
  DescribeTaskDefinitionRequest,
  DescribeTaskDefinitionResponse,
  DescribeTaskSetsRequest,
  DescribeTaskSetsResponse,
  DescribeTasksRequest,
  DescribeTasksResponse,
  Device,
  DeviceCgroupPermission,
  DiscoverPollEndpointRequest,
  DiscoverPollEndpointResponse,
  DockerVolumeConfiguration,
  Failure,
  FirelensConfiguration,
  HealthCheck,
  HostEntry,
  HostVolumeProperties,
  InferenceAccelerator,
  InferenceAcceleratorOverride,
  InvalidParameterException,
  KernelCapabilities,
  KeyValuePair,
  LimitExceededException,
  LinuxParameters,
  ListAccountSettingsRequest,
  ListAccountSettingsResponse,
  ListAttributesRequest,
  ListAttributesResponse,
  ListClustersRequest,
  ListClustersResponse,
  ListContainerInstancesRequest,
  ListContainerInstancesResponse,
  ListServicesRequest,
  ListServicesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTaskDefinitionFamiliesRequest,
  ListTaskDefinitionFamiliesResponse,
  ListTaskDefinitionsRequest,
  ListTaskDefinitionsResponse,
  ListTasksRequest,
  ListTasksResponse,
  LoadBalancer,
  LogConfiguration,
  ManagedScaling,
  MissingVersionException,
  MountPoint,
  NetworkBinding,
  NetworkConfiguration,
  NetworkInterface,
  NoUpdateAvailableException,
  PlacementConstraint,
  PlacementStrategy,
  PlatformDevice,
  PlatformTaskDefinitionIncompatibilityException,
  PlatformUnknownException,
  PortMapping,
  ProxyConfiguration,
  PutAccountSettingDefaultRequest,
  PutAccountSettingDefaultResponse,
  PutAccountSettingRequest,
  PutAccountSettingResponse,
  PutAttributesRequest,
  PutAttributesResponse,
  PutClusterCapacityProvidersRequest,
  PutClusterCapacityProvidersResponse,
  RegisterContainerInstanceRequest,
  RegisterContainerInstanceResponse,
  RegisterTaskDefinitionRequest,
  RegisterTaskDefinitionResponse,
  RepositoryCredentials,
  Resource,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceRequirement,
  RunTaskRequest,
  RunTaskResponse,
  Scale,
  Secret,
  ServerException,
  Service,
  ServiceEvent,
  ServiceField,
  ServiceNotActiveException,
  ServiceNotFoundException,
  ServiceRegistry,
  Setting,
  StartTaskRequest,
  StartTaskResponse,
  StopTaskRequest,
  StopTaskResponse,
  SubmitAttachmentStateChangesRequest,
  SubmitAttachmentStateChangesResponse,
  SubmitContainerStateChangeRequest,
  SubmitContainerStateChangeResponse,
  SubmitTaskStateChangeRequest,
  SubmitTaskStateChangeResponse,
  SystemControl,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TargetNotFoundException,
  Task,
  TaskDefinition,
  TaskDefinitionField,
  TaskDefinitionPlacementConstraint,
  TaskField,
  TaskOverride,
  TaskSet,
  TaskSetNotFoundException,
  Tmpfs,
  Ulimit,
  UnsupportedFeatureException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateClusterSettingsRequest,
  UpdateClusterSettingsResponse,
  UpdateContainerAgentRequest,
  UpdateContainerAgentResponse,
  UpdateContainerInstancesStateRequest,
  UpdateContainerInstancesStateResponse,
  UpdateInProgressException,
  UpdateServicePrimaryTaskSetRequest,
  UpdateServicePrimaryTaskSetResponse,
  UpdateServiceRequest,
  UpdateServiceResponse,
  UpdateTaskSetRequest,
  UpdateTaskSetResponse,
  VersionInfo,
  Volume,
  VolumeFrom
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateCapacityProviderCommand(
  input: CreateCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreateCapacityProviderRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateCapacityProvider",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateClusterCommand(
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.CreateCluster";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreateClusterRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateCluster",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateServiceCommand(
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.CreateService";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreateServiceRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateService",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateTaskSetCommand(
  input: CreateTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.CreateTaskSet";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreateTaskSetRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateTaskSet",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteAccountSettingCommand(
  input: DeleteAccountSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DeleteAccountSetting";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeleteAccountSettingRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteAccountSetting",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteAttributesCommand(
  input: DeleteAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DeleteAttributes";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeleteAttributesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteAttributes",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteClusterCommand(
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.DeleteCluster";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeleteClusterRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteCluster",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteServiceCommand(
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.DeleteService";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeleteServiceRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteService",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteTaskSetCommand(
  input: DeleteTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.DeleteTaskSet";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeleteTaskSetRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteTaskSet",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeregisterContainerInstanceCommand(
  input: DeregisterContainerInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeregisterContainerInstanceRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeregisterContainerInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeregisterTaskDefinitionCommand(
  input: DeregisterTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeregisterTaskDefinitionRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeregisterTaskDefinition",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeCapacityProvidersCommand(
  input: DescribeCapacityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeCapacityProvidersRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeCapacityProviders",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeClustersCommand(
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DescribeClusters";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeClustersRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeClusters",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeContainerInstancesCommand(
  input: DescribeContainerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeContainerInstancesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeContainerInstances",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeServicesCommand(
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DescribeServices";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeServicesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeServices",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeTaskDefinitionCommand(
  input: DescribeTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeTaskDefinitionRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTaskDefinition",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeTaskSetsCommand(
  input: DescribeTaskSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DescribeTaskSets";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeTaskSetsRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTaskSets",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeTasksCommand(
  input: DescribeTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.DescribeTasks";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeTasksRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTasks",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DiscoverPollEndpointCommand(
  input: DiscoverPollEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DiscoverPollEndpointRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DiscoverPollEndpoint",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListAccountSettingsCommand(
  input: ListAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.ListAccountSettings";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListAccountSettingsRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListAccountSettings",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListAttributesCommand(
  input: ListAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.ListAttributes";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListAttributesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListAttributes",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListClustersCommand(
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.ListClusters";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListClustersRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListClusters",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListContainerInstancesCommand(
  input: ListContainerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.ListContainerInstances";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListContainerInstancesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListContainerInstances",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListServicesCommand(
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.ListServices";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListServicesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListServices",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.ListTagsForResource";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTaskDefinitionFamiliesCommand(
  input: ListTaskDefinitionFamiliesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListTaskDefinitionFamiliesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTaskDefinitionFamilies",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTaskDefinitionsCommand(
  input: ListTaskDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListTaskDefinitionsRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTaskDefinitions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTasksCommand(
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.ListTasks";
  let body: any = {};
  body = JSON.stringify(serializeAws_json1_1ListTasksRequest(input, context));
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTasks",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutAccountSettingCommand(
  input: PutAccountSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.PutAccountSetting";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1PutAccountSettingRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutAccountSetting",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutAccountSettingDefaultCommand(
  input: PutAccountSettingDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1PutAccountSettingDefaultRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutAccountSettingDefault",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutAttributesCommand(
  input: PutAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.PutAttributes";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1PutAttributesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutAttributes",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutClusterCapacityProvidersCommand(
  input: PutClusterCapacityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1PutClusterCapacityProvidersRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutClusterCapacityProviders",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RegisterContainerInstanceCommand(
  input: RegisterContainerInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1RegisterContainerInstanceRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterContainerInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RegisterTaskDefinitionCommand(
  input: RegisterTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1RegisterTaskDefinitionRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterTaskDefinition",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RunTaskCommand(
  input: RunTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.RunTask";
  let body: any = {};
  body = JSON.stringify(serializeAws_json1_1RunTaskRequest(input, context));
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RunTask",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartTaskCommand(
  input: StartTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.StartTask";
  let body: any = {};
  body = JSON.stringify(serializeAws_json1_1StartTaskRequest(input, context));
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartTask",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopTaskCommand(
  input: StopTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.StopTask";
  let body: any = {};
  body = JSON.stringify(serializeAws_json1_1StopTaskRequest(input, context));
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopTask",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1SubmitAttachmentStateChangesCommand(
  input: SubmitAttachmentStateChangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1SubmitAttachmentStateChangesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/SubmitAttachmentStateChanges",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1SubmitContainerStateChangeCommand(
  input: SubmitContainerStateChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1SubmitContainerStateChangeRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/SubmitContainerStateChange",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1SubmitTaskStateChangeCommand(
  input: SubmitTaskStateChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1SubmitTaskStateChangeRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/SubmitTaskStateChange",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.TagResource";
  let body: any = {};
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.UntagResource";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateClusterSettingsCommand(
  input: UpdateClusterSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.UpdateClusterSettings";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UpdateClusterSettingsRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateClusterSettings",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateContainerAgentCommand(
  input: UpdateContainerAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UpdateContainerAgentRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateContainerAgent",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateContainerInstancesStateCommand(
  input: UpdateContainerInstancesStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UpdateContainerInstancesStateRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateContainerInstancesState",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateServiceCommand(
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.UpdateService";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UpdateServiceRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateService",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateServicePrimaryTaskSetCommand(
  input: UpdateServicePrimaryTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UpdateServicePrimaryTaskSetRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateServicePrimaryTaskSet",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateTaskSetCommand(
  input: UpdateTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.UpdateTaskSet";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UpdateTaskSetRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateTaskSet",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateCapacityProviderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapacityProviderCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCapacityProviderCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCapacityProviderResponse(
    data,
    context
  );
  const response: CreateCapacityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCapacityProviderResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCapacityProviderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapacityProviderCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.madison.frontend#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServiceResponse(data, context);
  const response: CreateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateServiceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.madison.frontend#PlatformTaskDefinitionIncompatibilityException":
      response = await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.madison.frontend#PlatformUnknownException":
      response = await deserializeAws_json1_1PlatformUnknownExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
      response = await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateTaskSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTaskSetResponse(data, context);
  const response: CreateTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTaskSetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateTaskSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.madison.frontend#PlatformTaskDefinitionIncompatibilityException":
      response = await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.madison.frontend#PlatformUnknownException":
      response = await deserializeAws_json1_1PlatformUnknownExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.madison.frontend#ServiceNotActiveException":
      response = await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.madison.frontend#ServiceNotFoundException":
      response = await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
      response = await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteAccountSettingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSettingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAccountSettingCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAccountSettingResponse(data, context);
  const response: DeleteAccountSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAccountSettingResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAccountSettingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSettingCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAttributesResponse(data, context);
  const response: DeleteAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TargetNotFoundException":
    case "com.amazonaws.madison.frontend#TargetNotFoundException":
      response = await deserializeAws_json1_1TargetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterContainsContainerInstancesException":
    case "com.amazonaws.madison.frontend#ClusterContainsContainerInstancesException":
      response = await deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterContainsServicesException":
    case "com.amazonaws.madison.frontend#ClusterContainsServicesException":
      response = await deserializeAws_json1_1ClusterContainsServicesExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterContainsTasksException":
    case "com.amazonaws.madison.frontend#ClusterContainsTasksException":
      response = await deserializeAws_json1_1ClusterContainsTasksExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UpdateInProgressException":
    case "com.amazonaws.madison.frontend#UpdateInProgressException":
      response = await deserializeAws_json1_1UpdateInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServiceResponse(data, context);
  const response: DeleteServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteServiceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.madison.frontend#ServiceNotFoundException":
      response = await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteTaskSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTaskSetResponse(data, context);
  const response: DeleteTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTaskSetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTaskSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.madison.frontend#ServiceNotActiveException":
      response = await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.madison.frontend#ServiceNotFoundException":
      response = await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TaskSetNotFoundException":
    case "com.amazonaws.madison.frontend#TaskSetNotFoundException":
      response = await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
      response = await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeregisterContainerInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterContainerInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterContainerInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterContainerInstanceResponse(
    data,
    context
  );
  const response: DeregisterContainerInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterContainerInstanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeregisterContainerInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterContainerInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeregisterTaskDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskDefinitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterTaskDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterTaskDefinitionResponse(
    data,
    context
  );
  const response: DeregisterTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterTaskDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeregisterTaskDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskDefinitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeCapacityProvidersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCapacityProvidersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCapacityProvidersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCapacityProvidersResponse(
    data,
    context
  );
  const response: DescribeCapacityProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCapacityProvidersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCapacityProvidersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCapacityProvidersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeClustersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClustersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeClustersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeContainerInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeContainerInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeContainerInstancesResponse(
    data,
    context
  );
  const response: DescribeContainerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeContainerInstancesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeContainerInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeServicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeServicesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeServicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeTaskDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskDefinitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTaskDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTaskDefinitionResponse(
    data,
    context
  );
  const response: DescribeTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTaskDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTaskDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskDefinitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeTaskSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskSetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTaskSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTaskSetsResponse(data, context);
  const response: DescribeTaskSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTaskSetsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTaskSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskSetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.madison.frontend#ServiceNotActiveException":
      response = await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.madison.frontend#ServiceNotFoundException":
      response = await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
      response = await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeTasksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTasksCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTasksResponse(data, context);
  const response: DescribeTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTasksResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTasksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTasksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DiscoverPollEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverPollEndpointCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DiscoverPollEndpointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DiscoverPollEndpointResponse(data, context);
  const response: DiscoverPollEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DiscoverPollEndpointResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DiscoverPollEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverPollEndpointCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListAccountSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountSettingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAccountSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccountSettingsResponse(data, context);
  const response: ListAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccountSettingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAccountSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountSettingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAttributesResponse(data, context);
  const response: ListAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListClustersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListClustersResponse(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListClustersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListClustersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListContainerInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListContainerInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListContainerInstancesResponse(
    data,
    context
  );
  const response: ListContainerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListContainerInstancesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListContainerInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListServicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListServicesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListServicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListTaskDefinitionFamiliesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionFamiliesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTaskDefinitionFamiliesResponse(
    data,
    context
  );
  const response: ListTaskDefinitionFamiliesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTaskDefinitionFamiliesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionFamiliesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListTaskDefinitionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTaskDefinitionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTaskDefinitionsResponse(data, context);
  const response: ListTaskDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTaskDefinitionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTaskDefinitionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListTasksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTasksResponse(data, context);
  const response: ListTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTasksResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTasksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.madison.frontend#ServiceNotFoundException":
      response = await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1PutAccountSettingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutAccountSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAccountSettingResponse(data, context);
  const response: PutAccountSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAccountSettingResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutAccountSettingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1PutAccountSettingDefaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingDefaultCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutAccountSettingDefaultCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAccountSettingDefaultResponse(
    data,
    context
  );
  const response: PutAccountSettingDefaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAccountSettingDefaultResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutAccountSettingDefaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingDefaultCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1PutAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAttributesResponse(data, context);
  const response: PutAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AttributeLimitExceededException":
    case "com.amazonaws.madison.frontend#AttributeLimitExceededException":
      response = await deserializeAws_json1_1AttributeLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TargetNotFoundException":
    case "com.amazonaws.madison.frontend#TargetNotFoundException":
      response = await deserializeAws_json1_1TargetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1PutClusterCapacityProvidersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClusterCapacityProvidersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutClusterCapacityProvidersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutClusterCapacityProvidersResponse(
    data,
    context
  );
  const response: PutClusterCapacityProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutClusterCapacityProvidersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutClusterCapacityProvidersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClusterCapacityProvidersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.madison.frontend#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UpdateInProgressException":
    case "com.amazonaws.madison.frontend#UpdateInProgressException":
      response = await deserializeAws_json1_1UpdateInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1RegisterContainerInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterContainerInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterContainerInstanceResponse(
    data,
    context
  );
  const response: RegisterContainerInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterContainerInstanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterContainerInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1RegisterTaskDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskDefinitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterTaskDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterTaskDefinitionResponse(
    data,
    context
  );
  const response: RegisterTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterTaskDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterTaskDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskDefinitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1RunTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunTaskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RunTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RunTaskResponse(data, context);
  const response: RunTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RunTaskResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RunTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunTaskCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BlockedException":
    case "com.amazonaws.madison.frontend#BlockedException":
      response = await deserializeAws_json1_1BlockedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.madison.frontend#PlatformTaskDefinitionIncompatibilityException":
      response = await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.madison.frontend#PlatformUnknownException":
      response = await deserializeAws_json1_1PlatformUnknownExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
      response = await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1StartTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTaskResponse(data, context);
  const response: StartTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartTaskResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1StopTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTaskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTaskResponse(data, context);
  const response: StopTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopTaskResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTaskCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1SubmitAttachmentStateChangesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitAttachmentStateChangesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SubmitAttachmentStateChangesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SubmitAttachmentStateChangesResponse(
    data,
    context
  );
  const response: SubmitAttachmentStateChangesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SubmitAttachmentStateChangesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SubmitAttachmentStateChangesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitAttachmentStateChangesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1SubmitContainerStateChangeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitContainerStateChangeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SubmitContainerStateChangeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SubmitContainerStateChangeResponse(
    data,
    context
  );
  const response: SubmitContainerStateChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SubmitContainerStateChangeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SubmitContainerStateChangeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitContainerStateChangeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1SubmitTaskStateChangeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitTaskStateChangeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SubmitTaskStateChangeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SubmitTaskStateChangeResponse(data, context);
  const response: SubmitTaskStateChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SubmitTaskStateChangeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SubmitTaskStateChangeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitTaskStateChangeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.madison.frontend#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.madison.frontend#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdateClusterSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterSettingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateClusterSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateClusterSettingsResponse(data, context);
  const response: UpdateClusterSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateClusterSettingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateClusterSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterSettingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdateContainerAgentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerAgentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateContainerAgentCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateContainerAgentResponse(data, context);
  const response: UpdateContainerAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateContainerAgentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateContainerAgentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerAgentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingVersionException":
    case "com.amazonaws.madison.frontend#MissingVersionException":
      response = await deserializeAws_json1_1MissingVersionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NoUpdateAvailableException":
    case "com.amazonaws.madison.frontend#NoUpdateAvailableException":
      response = await deserializeAws_json1_1NoUpdateAvailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UpdateInProgressException":
    case "com.amazonaws.madison.frontend#UpdateInProgressException":
      response = await deserializeAws_json1_1UpdateInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdateContainerInstancesStateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerInstancesStateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateContainerInstancesStateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateContainerInstancesStateResponse(
    data,
    context
  );
  const response: UpdateContainerInstancesStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateContainerInstancesStateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateContainerInstancesStateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerInstancesStateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdateServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServiceResponse(data, context);
  const response: UpdateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateServiceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.madison.frontend#PlatformTaskDefinitionIncompatibilityException":
      response = await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.madison.frontend#PlatformUnknownException":
      response = await deserializeAws_json1_1PlatformUnknownExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.madison.frontend#ServiceNotActiveException":
      response = await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.madison.frontend#ServiceNotFoundException":
      response = await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePrimaryTaskSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse(
    data,
    context
  );
  const response: UpdateServicePrimaryTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateServicePrimaryTaskSetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePrimaryTaskSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.madison.frontend#ServiceNotActiveException":
      response = await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.madison.frontend#ServiceNotFoundException":
      response = await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TaskSetNotFoundException":
    case "com.amazonaws.madison.frontend#TaskSetNotFoundException":
      response = await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
      response = await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdateTaskSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTaskSetResponse(data, context);
  const response: UpdateTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTaskSetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateTaskSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.madison.frontend#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClientException":
    case "com.amazonaws.madison.frontend#ClientException":
      response = await deserializeAws_json1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.madison.frontend#ClusterNotFoundException":
      response = await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.madison.frontend#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.madison.frontend#ServerException":
      response = await deserializeAws_json1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.madison.frontend#ServiceNotActiveException":
      response = await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.madison.frontend#ServiceNotFoundException":
      response = await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TaskSetNotFoundException":
    case "com.amazonaws.madison.frontend#TaskSetNotFoundException":
      response = await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
      response = await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.madison.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AttributeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttributeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttributeLimitExceededException(
    body,
    context
  );
  const contents: AttributeLimitExceededException = {
    name: "AttributeLimitExceededException",
    __type: "AttributeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1BlockedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlockedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BlockedException(
    body,
    context
  );
  const contents: BlockedException = {
    name: "BlockedException",
    __type: "BlockedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClientException(
    body,
    context
  );
  const contents: ClientException = {
    name: "ClientException",
    __type: "ClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterContainsContainerInstancesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterContainsContainerInstancesException(
    body,
    context
  );
  const contents: ClusterContainsContainerInstancesException = {
    name: "ClusterContainsContainerInstancesException",
    __type: "ClusterContainsContainerInstancesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ClusterContainsServicesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterContainsServicesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterContainsServicesException(
    body,
    context
  );
  const contents: ClusterContainsServicesException = {
    name: "ClusterContainsServicesException",
    __type: "ClusterContainsServicesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ClusterContainsTasksExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterContainsTasksException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterContainsTasksException(
    body,
    context
  );
  const contents: ClusterContainsTasksException = {
    name: "ClusterContainsTasksException",
    __type: "ClusterContainsTasksException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ClusterNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterNotFoundException(
    body,
    context
  );
  const contents: ClusterNotFoundException = {
    name: "ClusterNotFoundException",
    __type: "ClusterNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MissingVersionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingVersionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MissingVersionException(
    body,
    context
  );
  const contents: MissingVersionException = {
    name: "MissingVersionException",
    __type: "MissingVersionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NoUpdateAvailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoUpdateAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoUpdateAvailableException(
    body,
    context
  );
  const contents: NoUpdateAvailableException = {
    name: "NoUpdateAvailableException",
    __type: "NoUpdateAvailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformTaskDefinitionIncompatibilityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException(
    body,
    context
  );
  const contents: PlatformTaskDefinitionIncompatibilityException = {
    name: "PlatformTaskDefinitionIncompatibilityException",
    __type: "PlatformTaskDefinitionIncompatibilityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PlatformUnknownExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformUnknownException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PlatformUnknownException(
    body,
    context
  );
  const contents: PlatformUnknownException = {
    name: "PlatformUnknownException",
    __type: "PlatformUnknownException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerException(
    body,
    context
  );
  const contents: ServerException = {
    name: "ServerException",
    __type: "ServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceNotActiveExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceNotActiveException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceNotActiveException(
    body,
    context
  );
  const contents: ServiceNotActiveException = {
    name: "ServiceNotActiveException",
    __type: "ServiceNotActiveException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceNotFoundException(
    body,
    context
  );
  const contents: ServiceNotFoundException = {
    name: "ServiceNotFoundException",
    __type: "ServiceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TargetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TargetNotFoundException(
    body,
    context
  );
  const contents: TargetNotFoundException = {
    name: "TargetNotFoundException",
    __type: "TargetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TaskSetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskSetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TaskSetNotFoundException(
    body,
    context
  );
  const contents: TaskSetNotFoundException = {
    name: "TaskSetNotFoundException",
    __type: "TaskSetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedFeatureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedFeatureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedFeatureException(
    body,
    context
  );
  const contents: UnsupportedFeatureException = {
    name: "UnsupportedFeatureException",
    __type: "UnsupportedFeatureException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UpdateInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UpdateInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UpdateInProgressException(
    body,
    context
  );
  const contents: UpdateInProgressException = {
    name: "UpdateInProgressException",
    __type: "UpdateInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AttachmentStateChange = (
  input: AttachmentStateChange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attachmentArn !== undefined) {
    bodyParams["attachmentArn"] = input.attachmentArn;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const serializeAws_json1_1AttachmentStateChanges = (
  input: Array<AttachmentStateChange>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1AttachmentStateChange(entry, context)
  );
};

const serializeAws_json1_1Attribute = (
  input: Attribute,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1Attributes = (
  input: Array<Attribute>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1Attribute(entry, context)
  );
};

const serializeAws_json1_1AutoScalingGroupProvider = (
  input: AutoScalingGroupProvider,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.autoScalingGroupArn !== undefined) {
    bodyParams["autoScalingGroupArn"] = input.autoScalingGroupArn;
  }
  if (input.managedScaling !== undefined) {
    bodyParams["managedScaling"] = serializeAws_json1_1ManagedScaling(
      input.managedScaling,
      context
    );
  }
  if (input.managedTerminationProtection !== undefined) {
    bodyParams["managedTerminationProtection"] =
      input.managedTerminationProtection;
  }
  return bodyParams;
};

const serializeAws_json1_1AwsVpcConfiguration = (
  input: AwsVpcConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.assignPublicIp !== undefined) {
    bodyParams["assignPublicIp"] = input.assignPublicIp;
  }
  if (input.securityGroups !== undefined) {
    bodyParams["securityGroups"] = serializeAws_json1_1StringList(
      input.securityGroups,
      context
    );
  }
  if (input.subnets !== undefined) {
    bodyParams["subnets"] = serializeAws_json1_1StringList(
      input.subnets,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CapacityProviderFieldList = (
  input: Array<CapacityProviderField | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CapacityProviderStrategy = (
  input: Array<CapacityProviderStrategyItem>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1CapacityProviderStrategyItem(entry, context)
  );
};

const serializeAws_json1_1CapacityProviderStrategyItem = (
  input: CapacityProviderStrategyItem,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1ClusterFieldList = (
  input: Array<ClusterField | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ClusterSetting = (
  input: ClusterSetting,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1ClusterSettings = (
  input: Array<ClusterSetting>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ClusterSetting(entry, context)
  );
};

const serializeAws_json1_1CompatibilityList = (
  input: Array<Compatibility | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ContainerDefinition = (
  input: ContainerDefinition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.command !== undefined) {
    bodyParams["command"] = serializeAws_json1_1StringList(
      input.command,
      context
    );
  }
  if (input.cpu !== undefined) {
    bodyParams["cpu"] = input.cpu;
  }
  if (input.dependsOn !== undefined) {
    bodyParams["dependsOn"] = serializeAws_json1_1ContainerDependencies(
      input.dependsOn,
      context
    );
  }
  if (input.disableNetworking !== undefined) {
    bodyParams["disableNetworking"] = input.disableNetworking;
  }
  if (input.dnsSearchDomains !== undefined) {
    bodyParams["dnsSearchDomains"] = serializeAws_json1_1StringList(
      input.dnsSearchDomains,
      context
    );
  }
  if (input.dnsServers !== undefined) {
    bodyParams["dnsServers"] = serializeAws_json1_1StringList(
      input.dnsServers,
      context
    );
  }
  if (input.dockerLabels !== undefined) {
    bodyParams["dockerLabels"] = serializeAws_json1_1DockerLabelsMap(
      input.dockerLabels,
      context
    );
  }
  if (input.dockerSecurityOptions !== undefined) {
    bodyParams["dockerSecurityOptions"] = serializeAws_json1_1StringList(
      input.dockerSecurityOptions,
      context
    );
  }
  if (input.entryPoint !== undefined) {
    bodyParams["entryPoint"] = serializeAws_json1_1StringList(
      input.entryPoint,
      context
    );
  }
  if (input.environment !== undefined) {
    bodyParams["environment"] = serializeAws_json1_1EnvironmentVariables(
      input.environment,
      context
    );
  }
  if (input.essential !== undefined) {
    bodyParams["essential"] = input.essential;
  }
  if (input.extraHosts !== undefined) {
    bodyParams["extraHosts"] = serializeAws_json1_1HostEntryList(
      input.extraHosts,
      context
    );
  }
  if (input.firelensConfiguration !== undefined) {
    bodyParams[
      "firelensConfiguration"
    ] = serializeAws_json1_1FirelensConfiguration(
      input.firelensConfiguration,
      context
    );
  }
  if (input.healthCheck !== undefined) {
    bodyParams["healthCheck"] = serializeAws_json1_1HealthCheck(
      input.healthCheck,
      context
    );
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
    bodyParams["linuxParameters"] = serializeAws_json1_1LinuxParameters(
      input.linuxParameters,
      context
    );
  }
  if (input.logConfiguration !== undefined) {
    bodyParams["logConfiguration"] = serializeAws_json1_1LogConfiguration(
      input.logConfiguration,
      context
    );
  }
  if (input.memory !== undefined) {
    bodyParams["memory"] = input.memory;
  }
  if (input.memoryReservation !== undefined) {
    bodyParams["memoryReservation"] = input.memoryReservation;
  }
  if (input.mountPoints !== undefined) {
    bodyParams["mountPoints"] = serializeAws_json1_1MountPointList(
      input.mountPoints,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.portMappings !== undefined) {
    bodyParams["portMappings"] = serializeAws_json1_1PortMappingList(
      input.portMappings,
      context
    );
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
    bodyParams[
      "repositoryCredentials"
    ] = serializeAws_json1_1RepositoryCredentials(
      input.repositoryCredentials,
      context
    );
  }
  if (input.resourceRequirements !== undefined) {
    bodyParams[
      "resourceRequirements"
    ] = serializeAws_json1_1ResourceRequirements(
      input.resourceRequirements,
      context
    );
  }
  if (input.secrets !== undefined) {
    bodyParams["secrets"] = serializeAws_json1_1SecretList(
      input.secrets,
      context
    );
  }
  if (input.startTimeout !== undefined) {
    bodyParams["startTimeout"] = input.startTimeout;
  }
  if (input.stopTimeout !== undefined) {
    bodyParams["stopTimeout"] = input.stopTimeout;
  }
  if (input.systemControls !== undefined) {
    bodyParams["systemControls"] = serializeAws_json1_1SystemControls(
      input.systemControls,
      context
    );
  }
  if (input.ulimits !== undefined) {
    bodyParams["ulimits"] = serializeAws_json1_1UlimitList(
      input.ulimits,
      context
    );
  }
  if (input.user !== undefined) {
    bodyParams["user"] = input.user;
  }
  if (input.volumesFrom !== undefined) {
    bodyParams["volumesFrom"] = serializeAws_json1_1VolumeFromList(
      input.volumesFrom,
      context
    );
  }
  if (input.workingDirectory !== undefined) {
    bodyParams["workingDirectory"] = input.workingDirectory;
  }
  return bodyParams;
};

const serializeAws_json1_1ContainerDefinitions = (
  input: Array<ContainerDefinition>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ContainerDefinition(entry, context)
  );
};

const serializeAws_json1_1ContainerDependencies = (
  input: Array<ContainerDependency>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ContainerDependency(entry, context)
  );
};

const serializeAws_json1_1ContainerDependency = (
  input: ContainerDependency,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.condition !== undefined) {
    bodyParams["condition"] = input.condition;
  }
  if (input.containerName !== undefined) {
    bodyParams["containerName"] = input.containerName;
  }
  return bodyParams;
};

const serializeAws_json1_1ContainerInstanceFieldList = (
  input: Array<ContainerInstanceField | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ContainerOverride = (
  input: ContainerOverride,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.command !== undefined) {
    bodyParams["command"] = serializeAws_json1_1StringList(
      input.command,
      context
    );
  }
  if (input.cpu !== undefined) {
    bodyParams["cpu"] = input.cpu;
  }
  if (input.environment !== undefined) {
    bodyParams["environment"] = serializeAws_json1_1EnvironmentVariables(
      input.environment,
      context
    );
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
    bodyParams[
      "resourceRequirements"
    ] = serializeAws_json1_1ResourceRequirements(
      input.resourceRequirements,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ContainerOverrides = (
  input: Array<ContainerOverride>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ContainerOverride(entry, context)
  );
};

const serializeAws_json1_1ContainerStateChange = (
  input: ContainerStateChange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
    bodyParams["networkBindings"] = serializeAws_json1_1NetworkBindings(
      input.networkBindings,
      context
    );
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

const serializeAws_json1_1ContainerStateChanges = (
  input: Array<ContainerStateChange>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ContainerStateChange(entry, context)
  );
};

const serializeAws_json1_1CreateCapacityProviderRequest = (
  input: CreateCapacityProviderRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.autoScalingGroupProvider !== undefined) {
    bodyParams[
      "autoScalingGroupProvider"
    ] = serializeAws_json1_1AutoScalingGroupProvider(
      input.autoScalingGroupProvider,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateClusterRequest = (
  input: CreateClusterRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.capacityProviders !== undefined) {
    bodyParams["capacityProviders"] = serializeAws_json1_1StringList(
      input.capacityProviders,
      context
    );
  }
  if (input.clusterName !== undefined) {
    bodyParams["clusterName"] = input.clusterName;
  }
  if (input.defaultCapacityProviderStrategy !== undefined) {
    bodyParams[
      "defaultCapacityProviderStrategy"
    ] = serializeAws_json1_1CapacityProviderStrategy(
      input.defaultCapacityProviderStrategy,
      context
    );
  }
  if (input.settings !== undefined) {
    bodyParams["settings"] = serializeAws_json1_1ClusterSettings(
      input.settings,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateServiceRequest = (
  input: CreateServiceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.capacityProviderStrategy !== undefined) {
    bodyParams[
      "capacityProviderStrategy"
    ] = serializeAws_json1_1CapacityProviderStrategy(
      input.capacityProviderStrategy,
      context
    );
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.deploymentConfiguration !== undefined) {
    bodyParams[
      "deploymentConfiguration"
    ] = serializeAws_json1_1DeploymentConfiguration(
      input.deploymentConfiguration,
      context
    );
  }
  if (input.deploymentController !== undefined) {
    bodyParams[
      "deploymentController"
    ] = serializeAws_json1_1DeploymentController(
      input.deploymentController,
      context
    );
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
    bodyParams["loadBalancers"] = serializeAws_json1_1LoadBalancers(
      input.loadBalancers,
      context
    );
  }
  if (input.networkConfiguration !== undefined) {
    bodyParams[
      "networkConfiguration"
    ] = serializeAws_json1_1NetworkConfiguration(
      input.networkConfiguration,
      context
    );
  }
  if (input.placementConstraints !== undefined) {
    bodyParams[
      "placementConstraints"
    ] = serializeAws_json1_1PlacementConstraints(
      input.placementConstraints,
      context
    );
  }
  if (input.placementStrategy !== undefined) {
    bodyParams["placementStrategy"] = serializeAws_json1_1PlacementStrategies(
      input.placementStrategy,
      context
    );
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
    bodyParams["serviceRegistries"] = serializeAws_json1_1ServiceRegistries(
      input.serviceRegistries,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  if (input.taskDefinition !== undefined) {
    bodyParams["taskDefinition"] = input.taskDefinition;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateTaskSetRequest = (
  input: CreateTaskSetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.capacityProviderStrategy !== undefined) {
    bodyParams[
      "capacityProviderStrategy"
    ] = serializeAws_json1_1CapacityProviderStrategy(
      input.capacityProviderStrategy,
      context
    );
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
    bodyParams["loadBalancers"] = serializeAws_json1_1LoadBalancers(
      input.loadBalancers,
      context
    );
  }
  if (input.networkConfiguration !== undefined) {
    bodyParams[
      "networkConfiguration"
    ] = serializeAws_json1_1NetworkConfiguration(
      input.networkConfiguration,
      context
    );
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
    bodyParams["serviceRegistries"] = serializeAws_json1_1ServiceRegistries(
      input.serviceRegistries,
      context
    );
  }
  if (input.taskDefinition !== undefined) {
    bodyParams["taskDefinition"] = input.taskDefinition;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAccountSettingRequest = (
  input: DeleteAccountSettingRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.principalArn !== undefined) {
    bodyParams["principalArn"] = input.principalArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAttributesRequest = (
  input: DeleteAttributesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_json1_1Attributes(
      input.attributes,
      context
    );
  }
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteClusterRequest = (
  input: DeleteClusterRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteServiceRequest = (
  input: DeleteServiceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1DeleteTaskSetRequest = (
  input: DeleteTaskSetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1DeploymentConfiguration = (
  input: DeploymentConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maximumPercent !== undefined) {
    bodyParams["maximumPercent"] = input.maximumPercent;
  }
  if (input.minimumHealthyPercent !== undefined) {
    bodyParams["minimumHealthyPercent"] = input.minimumHealthyPercent;
  }
  return bodyParams;
};

const serializeAws_json1_1DeploymentController = (
  input: DeploymentController,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1DeregisterContainerInstanceRequest = (
  input: DeregisterContainerInstanceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1DeregisterTaskDefinitionRequest = (
  input: DeregisterTaskDefinitionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.taskDefinition !== undefined) {
    bodyParams["taskDefinition"] = input.taskDefinition;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCapacityProvidersRequest = (
  input: DescribeCapacityProvidersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.capacityProviders !== undefined) {
    bodyParams["capacityProviders"] = serializeAws_json1_1StringList(
      input.capacityProviders,
      context
    );
  }
  if (input.include !== undefined) {
    bodyParams["include"] = serializeAws_json1_1CapacityProviderFieldList(
      input.include,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeClustersRequest = (
  input: DescribeClustersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.clusters !== undefined) {
    bodyParams["clusters"] = serializeAws_json1_1StringList(
      input.clusters,
      context
    );
  }
  if (input.include !== undefined) {
    bodyParams["include"] = serializeAws_json1_1ClusterFieldList(
      input.include,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeContainerInstancesRequest = (
  input: DescribeContainerInstancesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.containerInstances !== undefined) {
    bodyParams["containerInstances"] = serializeAws_json1_1StringList(
      input.containerInstances,
      context
    );
  }
  if (input.include !== undefined) {
    bodyParams["include"] = serializeAws_json1_1ContainerInstanceFieldList(
      input.include,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeServicesRequest = (
  input: DescribeServicesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.include !== undefined) {
    bodyParams["include"] = serializeAws_json1_1ServiceFieldList(
      input.include,
      context
    );
  }
  if (input.services !== undefined) {
    bodyParams["services"] = serializeAws_json1_1StringList(
      input.services,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTaskDefinitionRequest = (
  input: DescribeTaskDefinitionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.include !== undefined) {
    bodyParams["include"] = serializeAws_json1_1TaskDefinitionFieldList(
      input.include,
      context
    );
  }
  if (input.taskDefinition !== undefined) {
    bodyParams["taskDefinition"] = input.taskDefinition;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTaskSetsRequest = (
  input: DescribeTaskSetsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.service !== undefined) {
    bodyParams["service"] = input.service;
  }
  if (input.taskSets !== undefined) {
    bodyParams["taskSets"] = serializeAws_json1_1StringList(
      input.taskSets,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTasksRequest = (
  input: DescribeTasksRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.include !== undefined) {
    bodyParams["include"] = serializeAws_json1_1TaskFieldList(
      input.include,
      context
    );
  }
  if (input.tasks !== undefined) {
    bodyParams["tasks"] = serializeAws_json1_1StringList(input.tasks, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Device = (
  input: Device,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.containerPath !== undefined) {
    bodyParams["containerPath"] = input.containerPath;
  }
  if (input.hostPath !== undefined) {
    bodyParams["hostPath"] = input.hostPath;
  }
  if (input.permissions !== undefined) {
    bodyParams["permissions"] = serializeAws_json1_1DeviceCgroupPermissions(
      input.permissions,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeviceCgroupPermissions = (
  input: Array<DeviceCgroupPermission | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1DevicesList = (
  input: Array<Device>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Device(entry, context));
};

const serializeAws_json1_1DiscoverPollEndpointRequest = (
  input: DiscoverPollEndpointRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.containerInstance !== undefined) {
    bodyParams["containerInstance"] = input.containerInstance;
  }
  return bodyParams;
};

const serializeAws_json1_1DockerLabelsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1DockerVolumeConfiguration = (
  input: DockerVolumeConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.autoprovision !== undefined) {
    bodyParams["autoprovision"] = input.autoprovision;
  }
  if (input.driver !== undefined) {
    bodyParams["driver"] = input.driver;
  }
  if (input.driverOpts !== undefined) {
    bodyParams["driverOpts"] = serializeAws_json1_1StringMap(
      input.driverOpts,
      context
    );
  }
  if (input.labels !== undefined) {
    bodyParams["labels"] = serializeAws_json1_1StringMap(input.labels, context);
  }
  if (input.scope !== undefined) {
    bodyParams["scope"] = input.scope;
  }
  return bodyParams;
};

const serializeAws_json1_1EnvironmentVariables = (
  input: Array<KeyValuePair>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1KeyValuePair(entry, context)
  );
};

const serializeAws_json1_1FirelensConfiguration = (
  input: FirelensConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.options !== undefined) {
    bodyParams["options"] = serializeAws_json1_1FirelensConfigurationOptionsMap(
      input.options,
      context
    );
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1FirelensConfigurationOptionsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1HealthCheck = (
  input: HealthCheck,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.command !== undefined) {
    bodyParams["command"] = serializeAws_json1_1StringList(
      input.command,
      context
    );
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

const serializeAws_json1_1HostEntry = (
  input: HostEntry,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.hostname !== undefined) {
    bodyParams["hostname"] = input.hostname;
  }
  if (input.ipAddress !== undefined) {
    bodyParams["ipAddress"] = input.ipAddress;
  }
  return bodyParams;
};

const serializeAws_json1_1HostEntryList = (
  input: Array<HostEntry>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1HostEntry(entry, context)
  );
};

const serializeAws_json1_1HostVolumeProperties = (
  input: HostVolumeProperties,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.sourcePath !== undefined) {
    bodyParams["sourcePath"] = input.sourcePath;
  }
  return bodyParams;
};

const serializeAws_json1_1InferenceAccelerator = (
  input: InferenceAccelerator,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.deviceName !== undefined) {
    bodyParams["deviceName"] = input.deviceName;
  }
  if (input.deviceType !== undefined) {
    bodyParams["deviceType"] = input.deviceType;
  }
  return bodyParams;
};

const serializeAws_json1_1InferenceAcceleratorOverride = (
  input: InferenceAcceleratorOverride,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.deviceName !== undefined) {
    bodyParams["deviceName"] = input.deviceName;
  }
  if (input.deviceType !== undefined) {
    bodyParams["deviceType"] = input.deviceType;
  }
  return bodyParams;
};

const serializeAws_json1_1InferenceAcceleratorOverrides = (
  input: Array<InferenceAcceleratorOverride>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1InferenceAcceleratorOverride(entry, context)
  );
};

const serializeAws_json1_1InferenceAccelerators = (
  input: Array<InferenceAccelerator>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1InferenceAccelerator(entry, context)
  );
};

const serializeAws_json1_1KernelCapabilities = (
  input: KernelCapabilities,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.add !== undefined) {
    bodyParams["add"] = serializeAws_json1_1StringList(input.add, context);
  }
  if (input.drop !== undefined) {
    bodyParams["drop"] = serializeAws_json1_1StringList(input.drop, context);
  }
  return bodyParams;
};

const serializeAws_json1_1KeyValuePair = (
  input: KeyValuePair,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1LinuxParameters = (
  input: LinuxParameters,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.capabilities !== undefined) {
    bodyParams["capabilities"] = serializeAws_json1_1KernelCapabilities(
      input.capabilities,
      context
    );
  }
  if (input.devices !== undefined) {
    bodyParams["devices"] = serializeAws_json1_1DevicesList(
      input.devices,
      context
    );
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

const serializeAws_json1_1ListAccountSettingsRequest = (
  input: ListAccountSettingsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1ListAttributesRequest = (
  input: ListAttributesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1ListClustersRequest = (
  input: ListClustersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListContainerInstancesRequest = (
  input: ListContainerInstancesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1ListServicesRequest = (
  input: ListServicesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTaskDefinitionFamiliesRequest = (
  input: ListTaskDefinitionFamiliesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1ListTaskDefinitionsRequest = (
  input: ListTaskDefinitionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1ListTasksRequest = (
  input: ListTasksRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1LoadBalancer = (
  input: LoadBalancer,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1LoadBalancers = (
  input: Array<LoadBalancer>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1LoadBalancer(entry, context)
  );
};

const serializeAws_json1_1LogConfiguration = (
  input: LogConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.logDriver !== undefined) {
    bodyParams["logDriver"] = input.logDriver;
  }
  if (input.options !== undefined) {
    bodyParams["options"] = serializeAws_json1_1LogConfigurationOptionsMap(
      input.options,
      context
    );
  }
  if (input.secretOptions !== undefined) {
    bodyParams["secretOptions"] = serializeAws_json1_1SecretList(
      input.secretOptions,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1LogConfigurationOptionsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1ManagedScaling = (
  input: ManagedScaling,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1MountPoint = (
  input: MountPoint,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1MountPointList = (
  input: Array<MountPoint>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1MountPoint(entry, context)
  );
};

const serializeAws_json1_1NetworkBinding = (
  input: NetworkBinding,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1NetworkBindings = (
  input: Array<NetworkBinding>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1NetworkBinding(entry, context)
  );
};

const serializeAws_json1_1NetworkConfiguration = (
  input: NetworkConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.awsvpcConfiguration !== undefined) {
    bodyParams["awsvpcConfiguration"] = serializeAws_json1_1AwsVpcConfiguration(
      input.awsvpcConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PlacementConstraint = (
  input: PlacementConstraint,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.expression !== undefined) {
    bodyParams["expression"] = input.expression;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1PlacementConstraints = (
  input: Array<PlacementConstraint>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1PlacementConstraint(entry, context)
  );
};

const serializeAws_json1_1PlacementStrategies = (
  input: Array<PlacementStrategy>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1PlacementStrategy(entry, context)
  );
};

const serializeAws_json1_1PlacementStrategy = (
  input: PlacementStrategy,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.field !== undefined) {
    bodyParams["field"] = input.field;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1PlatformDevice = (
  input: PlatformDevice,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1PlatformDevices = (
  input: Array<PlatformDevice>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1PlatformDevice(entry, context)
  );
};

const serializeAws_json1_1PortMapping = (
  input: PortMapping,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1PortMappingList = (
  input: Array<PortMapping>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1PortMapping(entry, context)
  );
};

const serializeAws_json1_1ProxyConfiguration = (
  input: ProxyConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.containerName !== undefined) {
    bodyParams["containerName"] = input.containerName;
  }
  if (input.properties !== undefined) {
    bodyParams["properties"] = serializeAws_json1_1ProxyConfigurationProperties(
      input.properties,
      context
    );
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ProxyConfigurationProperties = (
  input: Array<KeyValuePair>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1KeyValuePair(entry, context)
  );
};

const serializeAws_json1_1PutAccountSettingDefaultRequest = (
  input: PutAccountSettingDefaultRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1PutAccountSettingRequest = (
  input: PutAccountSettingRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1PutAttributesRequest = (
  input: PutAttributesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_json1_1Attributes(
      input.attributes,
      context
    );
  }
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  return bodyParams;
};

const serializeAws_json1_1PutClusterCapacityProvidersRequest = (
  input: PutClusterCapacityProvidersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.capacityProviders !== undefined) {
    bodyParams["capacityProviders"] = serializeAws_json1_1StringList(
      input.capacityProviders,
      context
    );
  }
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.defaultCapacityProviderStrategy !== undefined) {
    bodyParams[
      "defaultCapacityProviderStrategy"
    ] = serializeAws_json1_1CapacityProviderStrategy(
      input.defaultCapacityProviderStrategy,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RegisterContainerInstanceRequest = (
  input: RegisterContainerInstanceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_json1_1Attributes(
      input.attributes,
      context
    );
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
    bodyParams["platformDevices"] = serializeAws_json1_1PlatformDevices(
      input.platformDevices,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  if (input.totalResources !== undefined) {
    bodyParams["totalResources"] = serializeAws_json1_1Resources(
      input.totalResources,
      context
    );
  }
  if (input.versionInfo !== undefined) {
    bodyParams["versionInfo"] = serializeAws_json1_1VersionInfo(
      input.versionInfo,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RegisterTaskDefinitionRequest = (
  input: RegisterTaskDefinitionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.containerDefinitions !== undefined) {
    bodyParams[
      "containerDefinitions"
    ] = serializeAws_json1_1ContainerDefinitions(
      input.containerDefinitions,
      context
    );
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
    bodyParams[
      "inferenceAccelerators"
    ] = serializeAws_json1_1InferenceAccelerators(
      input.inferenceAccelerators,
      context
    );
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
    bodyParams[
      "placementConstraints"
    ] = serializeAws_json1_1TaskDefinitionPlacementConstraints(
      input.placementConstraints,
      context
    );
  }
  if (input.proxyConfiguration !== undefined) {
    bodyParams["proxyConfiguration"] = serializeAws_json1_1ProxyConfiguration(
      input.proxyConfiguration,
      context
    );
  }
  if (input.requiresCompatibilities !== undefined) {
    bodyParams[
      "requiresCompatibilities"
    ] = serializeAws_json1_1CompatibilityList(
      input.requiresCompatibilities,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  if (input.taskRoleArn !== undefined) {
    bodyParams["taskRoleArn"] = input.taskRoleArn;
  }
  if (input.volumes !== undefined) {
    bodyParams["volumes"] = serializeAws_json1_1VolumeList(
      input.volumes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RepositoryCredentials = (
  input: RepositoryCredentials,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.credentialsParameter !== undefined) {
    bodyParams["credentialsParameter"] = input.credentialsParameter;
  }
  return bodyParams;
};

const serializeAws_json1_1Resource = (
  input: Resource,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
    bodyParams["stringSetValue"] = serializeAws_json1_1StringList(
      input.stringSetValue,
      context
    );
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceRequirement = (
  input: ResourceRequirement,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceRequirements = (
  input: Array<ResourceRequirement>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ResourceRequirement(entry, context)
  );
};

const serializeAws_json1_1Resources = (
  input: Array<Resource>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1Resource(entry, context)
  );
};

const serializeAws_json1_1RunTaskRequest = (
  input: RunTaskRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.capacityProviderStrategy !== undefined) {
    bodyParams[
      "capacityProviderStrategy"
    ] = serializeAws_json1_1CapacityProviderStrategy(
      input.capacityProviderStrategy,
      context
    );
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
    bodyParams[
      "networkConfiguration"
    ] = serializeAws_json1_1NetworkConfiguration(
      input.networkConfiguration,
      context
    );
  }
  if (input.overrides !== undefined) {
    bodyParams["overrides"] = serializeAws_json1_1TaskOverride(
      input.overrides,
      context
    );
  }
  if (input.placementConstraints !== undefined) {
    bodyParams[
      "placementConstraints"
    ] = serializeAws_json1_1PlacementConstraints(
      input.placementConstraints,
      context
    );
  }
  if (input.placementStrategy !== undefined) {
    bodyParams["placementStrategy"] = serializeAws_json1_1PlacementStrategies(
      input.placementStrategy,
      context
    );
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

const serializeAws_json1_1Scale = (
  input: Scale,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.unit !== undefined) {
    bodyParams["unit"] = input.unit;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1Secret = (
  input: Secret,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.valueFrom !== undefined) {
    bodyParams["valueFrom"] = input.valueFrom;
  }
  return bodyParams;
};

const serializeAws_json1_1SecretList = (
  input: Array<Secret>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Secret(entry, context));
};

const serializeAws_json1_1ServiceFieldList = (
  input: Array<ServiceField | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ServiceRegistries = (
  input: Array<ServiceRegistry>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ServiceRegistry(entry, context)
  );
};

const serializeAws_json1_1ServiceRegistry = (
  input: ServiceRegistry,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1StartTaskRequest = (
  input: StartTaskRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.containerInstances !== undefined) {
    bodyParams["containerInstances"] = serializeAws_json1_1StringList(
      input.containerInstances,
      context
    );
  }
  if (input.enableECSManagedTags !== undefined) {
    bodyParams["enableECSManagedTags"] = input.enableECSManagedTags;
  }
  if (input.group !== undefined) {
    bodyParams["group"] = input.group;
  }
  if (input.networkConfiguration !== undefined) {
    bodyParams[
      "networkConfiguration"
    ] = serializeAws_json1_1NetworkConfiguration(
      input.networkConfiguration,
      context
    );
  }
  if (input.overrides !== undefined) {
    bodyParams["overrides"] = serializeAws_json1_1TaskOverride(
      input.overrides,
      context
    );
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

const serializeAws_json1_1StopTaskRequest = (
  input: StopTaskRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1StringMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1SubmitAttachmentStateChangesRequest = (
  input: SubmitAttachmentStateChangesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attachments !== undefined) {
    bodyParams["attachments"] = serializeAws_json1_1AttachmentStateChanges(
      input.attachments,
      context
    );
  }
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  return bodyParams;
};

const serializeAws_json1_1SubmitContainerStateChangeRequest = (
  input: SubmitContainerStateChangeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
    bodyParams["networkBindings"] = serializeAws_json1_1NetworkBindings(
      input.networkBindings,
      context
    );
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

const serializeAws_json1_1SubmitTaskStateChangeRequest = (
  input: SubmitTaskStateChangeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attachments !== undefined) {
    bodyParams["attachments"] = serializeAws_json1_1AttachmentStateChanges(
      input.attachments,
      context
    );
  }
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.containers !== undefined) {
    bodyParams["containers"] = serializeAws_json1_1ContainerStateChanges(
      input.containers,
      context
    );
  }
  if (input.executionStoppedAt !== undefined) {
    bodyParams["executionStoppedAt"] = Math.round(
      input.executionStoppedAt.getTime() / 1000
    );
  }
  if (input.pullStartedAt !== undefined) {
    bodyParams["pullStartedAt"] = Math.round(
      input.pullStartedAt.getTime() / 1000
    );
  }
  if (input.pullStoppedAt !== undefined) {
    bodyParams["pullStoppedAt"] = Math.round(
      input.pullStoppedAt.getTime() / 1000
    );
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

const serializeAws_json1_1SystemControl = (
  input: SystemControl,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.namespace !== undefined) {
    bodyParams["namespace"] = input.namespace;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1SystemControls = (
  input: Array<SystemControl>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1SystemControl(entry, context)
  );
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TaskDefinitionFieldList = (
  input: Array<TaskDefinitionField | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TaskDefinitionPlacementConstraint = (
  input: TaskDefinitionPlacementConstraint,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.expression !== undefined) {
    bodyParams["expression"] = input.expression;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1TaskDefinitionPlacementConstraints = (
  input: Array<TaskDefinitionPlacementConstraint>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context)
  );
};

const serializeAws_json1_1TaskFieldList = (
  input: Array<TaskField | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TaskOverride = (
  input: TaskOverride,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.containerOverrides !== undefined) {
    bodyParams["containerOverrides"] = serializeAws_json1_1ContainerOverrides(
      input.containerOverrides,
      context
    );
  }
  if (input.cpu !== undefined) {
    bodyParams["cpu"] = input.cpu;
  }
  if (input.executionRoleArn !== undefined) {
    bodyParams["executionRoleArn"] = input.executionRoleArn;
  }
  if (input.inferenceAcceleratorOverrides !== undefined) {
    bodyParams[
      "inferenceAcceleratorOverrides"
    ] = serializeAws_json1_1InferenceAcceleratorOverrides(
      input.inferenceAcceleratorOverrides,
      context
    );
  }
  if (input.memory !== undefined) {
    bodyParams["memory"] = input.memory;
  }
  if (input.taskRoleArn !== undefined) {
    bodyParams["taskRoleArn"] = input.taskRoleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1Tmpfs = (
  input: Tmpfs,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.containerPath !== undefined) {
    bodyParams["containerPath"] = input.containerPath;
  }
  if (input.mountOptions !== undefined) {
    bodyParams["mountOptions"] = serializeAws_json1_1StringList(
      input.mountOptions,
      context
    );
  }
  if (input.size !== undefined) {
    bodyParams["size"] = input.size;
  }
  return bodyParams;
};

const serializeAws_json1_1TmpfsList = (
  input: Array<Tmpfs>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tmpfs(entry, context));
};

const serializeAws_json1_1Ulimit = (
  input: Ulimit,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1UlimitList = (
  input: Array<Ulimit>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Ulimit(entry, context));
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_json1_1TagKeys(input.tagKeys, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateClusterSettingsRequest = (
  input: UpdateClusterSettingsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.settings !== undefined) {
    bodyParams["settings"] = serializeAws_json1_1ClusterSettings(
      input.settings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateContainerAgentRequest = (
  input: UpdateContainerAgentRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.containerInstance !== undefined) {
    bodyParams["containerInstance"] = input.containerInstance;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateContainerInstancesStateRequest = (
  input: UpdateContainerInstancesStateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.containerInstances !== undefined) {
    bodyParams["containerInstances"] = serializeAws_json1_1StringList(
      input.containerInstances,
      context
    );
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateServicePrimaryTaskSetRequest = (
  input: UpdateServicePrimaryTaskSetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1UpdateServiceRequest = (
  input: UpdateServiceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.capacityProviderStrategy !== undefined) {
    bodyParams[
      "capacityProviderStrategy"
    ] = serializeAws_json1_1CapacityProviderStrategy(
      input.capacityProviderStrategy,
      context
    );
  }
  if (input.cluster !== undefined) {
    bodyParams["cluster"] = input.cluster;
  }
  if (input.deploymentConfiguration !== undefined) {
    bodyParams[
      "deploymentConfiguration"
    ] = serializeAws_json1_1DeploymentConfiguration(
      input.deploymentConfiguration,
      context
    );
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
    bodyParams[
      "networkConfiguration"
    ] = serializeAws_json1_1NetworkConfiguration(
      input.networkConfiguration,
      context
    );
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

const serializeAws_json1_1UpdateTaskSetRequest = (
  input: UpdateTaskSetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1VersionInfo = (
  input: VersionInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const serializeAws_json1_1Volume = (
  input: Volume,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.dockerVolumeConfiguration !== undefined) {
    bodyParams[
      "dockerVolumeConfiguration"
    ] = serializeAws_json1_1DockerVolumeConfiguration(
      input.dockerVolumeConfiguration,
      context
    );
  }
  if (input.host !== undefined) {
    bodyParams["host"] = serializeAws_json1_1HostVolumeProperties(
      input.host,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1VolumeFrom = (
  input: VolumeFrom,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.readOnly !== undefined) {
    bodyParams["readOnly"] = input.readOnly;
  }
  if (input.sourceContainer !== undefined) {
    bodyParams["sourceContainer"] = input.sourceContainer;
  }
  return bodyParams;
};

const serializeAws_json1_1VolumeFromList = (
  input: Array<VolumeFrom>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1VolumeFrom(entry, context)
  );
};

const serializeAws_json1_1VolumeList = (
  input: Array<Volume>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Volume(entry, context));
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Attachment = (
  output: any,
  context: __SerdeContext
): Attachment => {
  let contents: any = {
    __type: "Attachment",
    details: undefined,
    id: undefined,
    status: undefined,
    type: undefined
  };
  if (output.details !== undefined) {
    contents.details = deserializeAws_json1_1AttachmentDetails(
      output.details,
      context
    );
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1AttachmentDetails = (
  output: any,
  context: __SerdeContext
): Array<KeyValuePair> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyValuePair(entry, context)
  );
};

const deserializeAws_json1_1Attachments = (
  output: any,
  context: __SerdeContext
): Array<Attachment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attachment(entry, context)
  );
};

const deserializeAws_json1_1Attribute = (
  output: any,
  context: __SerdeContext
): Attribute => {
  let contents: any = {
    __type: "Attribute",
    name: undefined,
    targetId: undefined,
    targetType: undefined,
    value: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.targetId !== undefined) {
    contents.targetId = output.targetId;
  }
  if (output.targetType !== undefined) {
    contents.targetType = output.targetType;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1AttributeLimitExceededException = (
  output: any,
  context: __SerdeContext
): AttributeLimitExceededException => {
  let contents: any = {
    __type: "AttributeLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Attributes = (
  output: any,
  context: __SerdeContext
): Array<Attribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attribute(entry, context)
  );
};

const deserializeAws_json1_1AutoScalingGroupProvider = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupProvider => {
  let contents: any = {
    __type: "AutoScalingGroupProvider",
    autoScalingGroupArn: undefined,
    managedScaling: undefined,
    managedTerminationProtection: undefined
  };
  if (output.autoScalingGroupArn !== undefined) {
    contents.autoScalingGroupArn = output.autoScalingGroupArn;
  }
  if (output.managedScaling !== undefined) {
    contents.managedScaling = deserializeAws_json1_1ManagedScaling(
      output.managedScaling,
      context
    );
  }
  if (output.managedTerminationProtection !== undefined) {
    contents.managedTerminationProtection = output.managedTerminationProtection;
  }
  return contents;
};

const deserializeAws_json1_1AwsVpcConfiguration = (
  output: any,
  context: __SerdeContext
): AwsVpcConfiguration => {
  let contents: any = {
    __type: "AwsVpcConfiguration",
    assignPublicIp: undefined,
    securityGroups: undefined,
    subnets: undefined
  };
  if (output.assignPublicIp !== undefined) {
    contents.assignPublicIp = output.assignPublicIp;
  }
  if (output.securityGroups !== undefined) {
    contents.securityGroups = deserializeAws_json1_1StringList(
      output.securityGroups,
      context
    );
  }
  if (output.subnets !== undefined) {
    contents.subnets = deserializeAws_json1_1StringList(
      output.subnets,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BlockedException = (
  output: any,
  context: __SerdeContext
): BlockedException => {
  let contents: any = {
    __type: "BlockedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CapacityProvider = (
  output: any,
  context: __SerdeContext
): CapacityProvider => {
  let contents: any = {
    __type: "CapacityProvider",
    autoScalingGroupProvider: undefined,
    capacityProviderArn: undefined,
    name: undefined,
    status: undefined,
    tags: undefined
  };
  if (output.autoScalingGroupProvider !== undefined) {
    contents.autoScalingGroupProvider = deserializeAws_json1_1AutoScalingGroupProvider(
      output.autoScalingGroupProvider,
      context
    );
  }
  if (output.capacityProviderArn !== undefined) {
    contents.capacityProviderArn = output.capacityProviderArn;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1CapacityProviderStrategy = (
  output: any,
  context: __SerdeContext
): Array<CapacityProviderStrategyItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CapacityProviderStrategyItem(entry, context)
  );
};

const deserializeAws_json1_1CapacityProviderStrategyItem = (
  output: any,
  context: __SerdeContext
): CapacityProviderStrategyItem => {
  let contents: any = {
    __type: "CapacityProviderStrategyItem",
    base: undefined,
    capacityProvider: undefined,
    weight: undefined
  };
  if (output.base !== undefined) {
    contents.base = output.base;
  }
  if (output.capacityProvider !== undefined) {
    contents.capacityProvider = output.capacityProvider;
  }
  if (output.weight !== undefined) {
    contents.weight = output.weight;
  }
  return contents;
};

const deserializeAws_json1_1CapacityProviders = (
  output: any,
  context: __SerdeContext
): Array<CapacityProvider> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CapacityProvider(entry, context)
  );
};

const deserializeAws_json1_1ClientException = (
  output: any,
  context: __SerdeContext
): ClientException => {
  let contents: any = {
    __type: "ClientException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Cluster = (
  output: any,
  context: __SerdeContext
): Cluster => {
  let contents: any = {
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
  if (output.activeServicesCount !== undefined) {
    contents.activeServicesCount = output.activeServicesCount;
  }
  if (output.attachments !== undefined) {
    contents.attachments = deserializeAws_json1_1Attachments(
      output.attachments,
      context
    );
  }
  if (output.attachmentsStatus !== undefined) {
    contents.attachmentsStatus = output.attachmentsStatus;
  }
  if (output.capacityProviders !== undefined) {
    contents.capacityProviders = deserializeAws_json1_1StringList(
      output.capacityProviders,
      context
    );
  }
  if (output.clusterArn !== undefined) {
    contents.clusterArn = output.clusterArn;
  }
  if (output.clusterName !== undefined) {
    contents.clusterName = output.clusterName;
  }
  if (output.defaultCapacityProviderStrategy !== undefined) {
    contents.defaultCapacityProviderStrategy = deserializeAws_json1_1CapacityProviderStrategy(
      output.defaultCapacityProviderStrategy,
      context
    );
  }
  if (output.pendingTasksCount !== undefined) {
    contents.pendingTasksCount = output.pendingTasksCount;
  }
  if (output.registeredContainerInstancesCount !== undefined) {
    contents.registeredContainerInstancesCount =
      output.registeredContainerInstancesCount;
  }
  if (output.runningTasksCount !== undefined) {
    contents.runningTasksCount = output.runningTasksCount;
  }
  if (output.settings !== undefined) {
    contents.settings = deserializeAws_json1_1ClusterSettings(
      output.settings,
      context
    );
  }
  if (output.statistics !== undefined) {
    contents.statistics = deserializeAws_json1_1Statistics(
      output.statistics,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ClusterContainsContainerInstancesException = (
  output: any,
  context: __SerdeContext
): ClusterContainsContainerInstancesException => {
  let contents: any = {
    __type: "ClusterContainsContainerInstancesException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ClusterContainsServicesException = (
  output: any,
  context: __SerdeContext
): ClusterContainsServicesException => {
  let contents: any = {
    __type: "ClusterContainsServicesException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ClusterContainsTasksException = (
  output: any,
  context: __SerdeContext
): ClusterContainsTasksException => {
  let contents: any = {
    __type: "ClusterContainsTasksException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ClusterNotFoundException = (
  output: any,
  context: __SerdeContext
): ClusterNotFoundException => {
  let contents: any = {
    __type: "ClusterNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ClusterSetting = (
  output: any,
  context: __SerdeContext
): ClusterSetting => {
  let contents: any = {
    __type: "ClusterSetting",
    name: undefined,
    value: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1ClusterSettings = (
  output: any,
  context: __SerdeContext
): Array<ClusterSetting> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ClusterSetting(entry, context)
  );
};

const deserializeAws_json1_1Clusters = (
  output: any,
  context: __SerdeContext
): Array<Cluster> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Cluster(entry, context)
  );
};

const deserializeAws_json1_1CompatibilityList = (
  output: any,
  context: __SerdeContext
): Array<Compatibility | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Container = (
  output: any,
  context: __SerdeContext
): Container => {
  let contents: any = {
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
  if (output.containerArn !== undefined) {
    contents.containerArn = output.containerArn;
  }
  if (output.cpu !== undefined) {
    contents.cpu = output.cpu;
  }
  if (output.exitCode !== undefined) {
    contents.exitCode = output.exitCode;
  }
  if (output.gpuIds !== undefined) {
    contents.gpuIds = deserializeAws_json1_1GpuIds(output.gpuIds, context);
  }
  if (output.healthStatus !== undefined) {
    contents.healthStatus = output.healthStatus;
  }
  if (output.image !== undefined) {
    contents.image = output.image;
  }
  if (output.imageDigest !== undefined) {
    contents.imageDigest = output.imageDigest;
  }
  if (output.lastStatus !== undefined) {
    contents.lastStatus = output.lastStatus;
  }
  if (output.memory !== undefined) {
    contents.memory = output.memory;
  }
  if (output.memoryReservation !== undefined) {
    contents.memoryReservation = output.memoryReservation;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.networkBindings !== undefined) {
    contents.networkBindings = deserializeAws_json1_1NetworkBindings(
      output.networkBindings,
      context
    );
  }
  if (output.networkInterfaces !== undefined) {
    contents.networkInterfaces = deserializeAws_json1_1NetworkInterfaces(
      output.networkInterfaces,
      context
    );
  }
  if (output.reason !== undefined) {
    contents.reason = output.reason;
  }
  if (output.runtimeId !== undefined) {
    contents.runtimeId = output.runtimeId;
  }
  if (output.taskArn !== undefined) {
    contents.taskArn = output.taskArn;
  }
  return contents;
};

const deserializeAws_json1_1ContainerDefinition = (
  output: any,
  context: __SerdeContext
): ContainerDefinition => {
  let contents: any = {
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
  if (output.command !== undefined) {
    contents.command = deserializeAws_json1_1StringList(
      output.command,
      context
    );
  }
  if (output.cpu !== undefined) {
    contents.cpu = output.cpu;
  }
  if (output.dependsOn !== undefined) {
    contents.dependsOn = deserializeAws_json1_1ContainerDependencies(
      output.dependsOn,
      context
    );
  }
  if (output.disableNetworking !== undefined) {
    contents.disableNetworking = output.disableNetworking;
  }
  if (output.dnsSearchDomains !== undefined) {
    contents.dnsSearchDomains = deserializeAws_json1_1StringList(
      output.dnsSearchDomains,
      context
    );
  }
  if (output.dnsServers !== undefined) {
    contents.dnsServers = deserializeAws_json1_1StringList(
      output.dnsServers,
      context
    );
  }
  if (output.dockerLabels !== undefined) {
    contents.dockerLabels = deserializeAws_json1_1DockerLabelsMap(
      output.dockerLabels,
      context
    );
  }
  if (output.dockerSecurityOptions !== undefined) {
    contents.dockerSecurityOptions = deserializeAws_json1_1StringList(
      output.dockerSecurityOptions,
      context
    );
  }
  if (output.entryPoint !== undefined) {
    contents.entryPoint = deserializeAws_json1_1StringList(
      output.entryPoint,
      context
    );
  }
  if (output.environment !== undefined) {
    contents.environment = deserializeAws_json1_1EnvironmentVariables(
      output.environment,
      context
    );
  }
  if (output.essential !== undefined) {
    contents.essential = output.essential;
  }
  if (output.extraHosts !== undefined) {
    contents.extraHosts = deserializeAws_json1_1HostEntryList(
      output.extraHosts,
      context
    );
  }
  if (output.firelensConfiguration !== undefined) {
    contents.firelensConfiguration = deserializeAws_json1_1FirelensConfiguration(
      output.firelensConfiguration,
      context
    );
  }
  if (output.healthCheck !== undefined) {
    contents.healthCheck = deserializeAws_json1_1HealthCheck(
      output.healthCheck,
      context
    );
  }
  if (output.hostname !== undefined) {
    contents.hostname = output.hostname;
  }
  if (output.image !== undefined) {
    contents.image = output.image;
  }
  if (output.interactive !== undefined) {
    contents.interactive = output.interactive;
  }
  if (output.links !== undefined) {
    contents.links = deserializeAws_json1_1StringList(output.links, context);
  }
  if (output.linuxParameters !== undefined) {
    contents.linuxParameters = deserializeAws_json1_1LinuxParameters(
      output.linuxParameters,
      context
    );
  }
  if (output.logConfiguration !== undefined) {
    contents.logConfiguration = deserializeAws_json1_1LogConfiguration(
      output.logConfiguration,
      context
    );
  }
  if (output.memory !== undefined) {
    contents.memory = output.memory;
  }
  if (output.memoryReservation !== undefined) {
    contents.memoryReservation = output.memoryReservation;
  }
  if (output.mountPoints !== undefined) {
    contents.mountPoints = deserializeAws_json1_1MountPointList(
      output.mountPoints,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.portMappings !== undefined) {
    contents.portMappings = deserializeAws_json1_1PortMappingList(
      output.portMappings,
      context
    );
  }
  if (output.privileged !== undefined) {
    contents.privileged = output.privileged;
  }
  if (output.pseudoTerminal !== undefined) {
    contents.pseudoTerminal = output.pseudoTerminal;
  }
  if (output.readonlyRootFilesystem !== undefined) {
    contents.readonlyRootFilesystem = output.readonlyRootFilesystem;
  }
  if (output.repositoryCredentials !== undefined) {
    contents.repositoryCredentials = deserializeAws_json1_1RepositoryCredentials(
      output.repositoryCredentials,
      context
    );
  }
  if (output.resourceRequirements !== undefined) {
    contents.resourceRequirements = deserializeAws_json1_1ResourceRequirements(
      output.resourceRequirements,
      context
    );
  }
  if (output.secrets !== undefined) {
    contents.secrets = deserializeAws_json1_1SecretList(
      output.secrets,
      context
    );
  }
  if (output.startTimeout !== undefined) {
    contents.startTimeout = output.startTimeout;
  }
  if (output.stopTimeout !== undefined) {
    contents.stopTimeout = output.stopTimeout;
  }
  if (output.systemControls !== undefined) {
    contents.systemControls = deserializeAws_json1_1SystemControls(
      output.systemControls,
      context
    );
  }
  if (output.ulimits !== undefined) {
    contents.ulimits = deserializeAws_json1_1UlimitList(
      output.ulimits,
      context
    );
  }
  if (output.user !== undefined) {
    contents.user = output.user;
  }
  if (output.volumesFrom !== undefined) {
    contents.volumesFrom = deserializeAws_json1_1VolumeFromList(
      output.volumesFrom,
      context
    );
  }
  if (output.workingDirectory !== undefined) {
    contents.workingDirectory = output.workingDirectory;
  }
  return contents;
};

const deserializeAws_json1_1ContainerDefinitions = (
  output: any,
  context: __SerdeContext
): Array<ContainerDefinition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContainerDefinition(entry, context)
  );
};

const deserializeAws_json1_1ContainerDependencies = (
  output: any,
  context: __SerdeContext
): Array<ContainerDependency> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContainerDependency(entry, context)
  );
};

const deserializeAws_json1_1ContainerDependency = (
  output: any,
  context: __SerdeContext
): ContainerDependency => {
  let contents: any = {
    __type: "ContainerDependency",
    condition: undefined,
    containerName: undefined
  };
  if (output.condition !== undefined) {
    contents.condition = output.condition;
  }
  if (output.containerName !== undefined) {
    contents.containerName = output.containerName;
  }
  return contents;
};

const deserializeAws_json1_1ContainerInstance = (
  output: any,
  context: __SerdeContext
): ContainerInstance => {
  let contents: any = {
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
  if (output.agentConnected !== undefined) {
    contents.agentConnected = output.agentConnected;
  }
  if (output.agentUpdateStatus !== undefined) {
    contents.agentUpdateStatus = output.agentUpdateStatus;
  }
  if (output.attachments !== undefined) {
    contents.attachments = deserializeAws_json1_1Attachments(
      output.attachments,
      context
    );
  }
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_json1_1Attributes(
      output.attributes,
      context
    );
  }
  if (output.capacityProviderName !== undefined) {
    contents.capacityProviderName = output.capacityProviderName;
  }
  if (output.containerInstanceArn !== undefined) {
    contents.containerInstanceArn = output.containerInstanceArn;
  }
  if (output.ec2InstanceId !== undefined) {
    contents.ec2InstanceId = output.ec2InstanceId;
  }
  if (output.pendingTasksCount !== undefined) {
    contents.pendingTasksCount = output.pendingTasksCount;
  }
  if (output.registeredAt !== undefined) {
    contents.registeredAt = new Date(
      output.registeredAt % 1 != 0
        ? Math.round(output.registeredAt * 1000)
        : output.registeredAt
    );
  }
  if (output.registeredResources !== undefined) {
    contents.registeredResources = deserializeAws_json1_1Resources(
      output.registeredResources,
      context
    );
  }
  if (output.remainingResources !== undefined) {
    contents.remainingResources = deserializeAws_json1_1Resources(
      output.remainingResources,
      context
    );
  }
  if (output.runningTasksCount !== undefined) {
    contents.runningTasksCount = output.runningTasksCount;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.statusReason !== undefined) {
    contents.statusReason = output.statusReason;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  if (output.version !== undefined) {
    contents.version = output.version;
  }
  if (output.versionInfo !== undefined) {
    contents.versionInfo = deserializeAws_json1_1VersionInfo(
      output.versionInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ContainerInstances = (
  output: any,
  context: __SerdeContext
): Array<ContainerInstance> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContainerInstance(entry, context)
  );
};

const deserializeAws_json1_1ContainerOverride = (
  output: any,
  context: __SerdeContext
): ContainerOverride => {
  let contents: any = {
    __type: "ContainerOverride",
    command: undefined,
    cpu: undefined,
    environment: undefined,
    memory: undefined,
    memoryReservation: undefined,
    name: undefined,
    resourceRequirements: undefined
  };
  if (output.command !== undefined) {
    contents.command = deserializeAws_json1_1StringList(
      output.command,
      context
    );
  }
  if (output.cpu !== undefined) {
    contents.cpu = output.cpu;
  }
  if (output.environment !== undefined) {
    contents.environment = deserializeAws_json1_1EnvironmentVariables(
      output.environment,
      context
    );
  }
  if (output.memory !== undefined) {
    contents.memory = output.memory;
  }
  if (output.memoryReservation !== undefined) {
    contents.memoryReservation = output.memoryReservation;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.resourceRequirements !== undefined) {
    contents.resourceRequirements = deserializeAws_json1_1ResourceRequirements(
      output.resourceRequirements,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ContainerOverrides = (
  output: any,
  context: __SerdeContext
): Array<ContainerOverride> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContainerOverride(entry, context)
  );
};

const deserializeAws_json1_1Containers = (
  output: any,
  context: __SerdeContext
): Array<Container> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Container(entry, context)
  );
};

const deserializeAws_json1_1CreateCapacityProviderResponse = (
  output: any,
  context: __SerdeContext
): CreateCapacityProviderResponse => {
  let contents: any = {
    __type: "CreateCapacityProviderResponse",
    capacityProvider: undefined
  };
  if (output.capacityProvider !== undefined) {
    contents.capacityProvider = deserializeAws_json1_1CapacityProvider(
      output.capacityProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateClusterResponse = (
  output: any,
  context: __SerdeContext
): CreateClusterResponse => {
  let contents: any = {
    __type: "CreateClusterResponse",
    cluster: undefined
  };
  if (output.cluster !== undefined) {
    contents.cluster = deserializeAws_json1_1Cluster(output.cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateServiceResponse = (
  output: any,
  context: __SerdeContext
): CreateServiceResponse => {
  let contents: any = {
    __type: "CreateServiceResponse",
    service: undefined
  };
  if (output.service !== undefined) {
    contents.service = deserializeAws_json1_1Service(output.service, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateTaskSetResponse = (
  output: any,
  context: __SerdeContext
): CreateTaskSetResponse => {
  let contents: any = {
    __type: "CreateTaskSetResponse",
    taskSet: undefined
  };
  if (output.taskSet !== undefined) {
    contents.taskSet = deserializeAws_json1_1TaskSet(output.taskSet, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteAccountSettingResponse = (
  output: any,
  context: __SerdeContext
): DeleteAccountSettingResponse => {
  let contents: any = {
    __type: "DeleteAccountSettingResponse",
    setting: undefined
  };
  if (output.setting !== undefined) {
    contents.setting = deserializeAws_json1_1Setting(output.setting, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteAttributesResponse = (
  output: any,
  context: __SerdeContext
): DeleteAttributesResponse => {
  let contents: any = {
    __type: "DeleteAttributesResponse",
    attributes: undefined
  };
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_json1_1Attributes(
      output.attributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteClusterResponse = (
  output: any,
  context: __SerdeContext
): DeleteClusterResponse => {
  let contents: any = {
    __type: "DeleteClusterResponse",
    cluster: undefined
  };
  if (output.cluster !== undefined) {
    contents.cluster = deserializeAws_json1_1Cluster(output.cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteServiceResponse = (
  output: any,
  context: __SerdeContext
): DeleteServiceResponse => {
  let contents: any = {
    __type: "DeleteServiceResponse",
    service: undefined
  };
  if (output.service !== undefined) {
    contents.service = deserializeAws_json1_1Service(output.service, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteTaskSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteTaskSetResponse => {
  let contents: any = {
    __type: "DeleteTaskSetResponse",
    taskSet: undefined
  };
  if (output.taskSet !== undefined) {
    contents.taskSet = deserializeAws_json1_1TaskSet(output.taskSet, context);
  }
  return contents;
};

const deserializeAws_json1_1Deployment = (
  output: any,
  context: __SerdeContext
): Deployment => {
  let contents: any = {
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
  if (output.capacityProviderStrategy !== undefined) {
    contents.capacityProviderStrategy = deserializeAws_json1_1CapacityProviderStrategy(
      output.capacityProviderStrategy,
      context
    );
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.desiredCount !== undefined) {
    contents.desiredCount = output.desiredCount;
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.launchType !== undefined) {
    contents.launchType = output.launchType;
  }
  if (output.networkConfiguration !== undefined) {
    contents.networkConfiguration = deserializeAws_json1_1NetworkConfiguration(
      output.networkConfiguration,
      context
    );
  }
  if (output.pendingCount !== undefined) {
    contents.pendingCount = output.pendingCount;
  }
  if (output.platformVersion !== undefined) {
    contents.platformVersion = output.platformVersion;
  }
  if (output.runningCount !== undefined) {
    contents.runningCount = output.runningCount;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.taskDefinition !== undefined) {
    contents.taskDefinition = output.taskDefinition;
  }
  if (output.updatedAt !== undefined) {
    contents.updatedAt = new Date(
      output.updatedAt % 1 != 0
        ? Math.round(output.updatedAt * 1000)
        : output.updatedAt
    );
  }
  return contents;
};

const deserializeAws_json1_1DeploymentConfiguration = (
  output: any,
  context: __SerdeContext
): DeploymentConfiguration => {
  let contents: any = {
    __type: "DeploymentConfiguration",
    maximumPercent: undefined,
    minimumHealthyPercent: undefined
  };
  if (output.maximumPercent !== undefined) {
    contents.maximumPercent = output.maximumPercent;
  }
  if (output.minimumHealthyPercent !== undefined) {
    contents.minimumHealthyPercent = output.minimumHealthyPercent;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentController = (
  output: any,
  context: __SerdeContext
): DeploymentController => {
  let contents: any = {
    __type: "DeploymentController",
    type: undefined
  };
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1Deployments = (
  output: any,
  context: __SerdeContext
): Array<Deployment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Deployment(entry, context)
  );
};

const deserializeAws_json1_1DeregisterContainerInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeregisterContainerInstanceResponse => {
  let contents: any = {
    __type: "DeregisterContainerInstanceResponse",
    containerInstance: undefined
  };
  if (output.containerInstance !== undefined) {
    contents.containerInstance = deserializeAws_json1_1ContainerInstance(
      output.containerInstance,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeregisterTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeregisterTaskDefinitionResponse => {
  let contents: any = {
    __type: "DeregisterTaskDefinitionResponse",
    taskDefinition: undefined
  };
  if (output.taskDefinition !== undefined) {
    contents.taskDefinition = deserializeAws_json1_1TaskDefinition(
      output.taskDefinition,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeCapacityProvidersResponse = (
  output: any,
  context: __SerdeContext
): DescribeCapacityProvidersResponse => {
  let contents: any = {
    __type: "DescribeCapacityProvidersResponse",
    capacityProviders: undefined,
    failures: undefined,
    nextToken: undefined
  };
  if (output.capacityProviders !== undefined) {
    contents.capacityProviders = deserializeAws_json1_1CapacityProviders(
      output.capacityProviders,
      context
    );
  }
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1Failures(
      output.failures,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  let contents: any = {
    __type: "DescribeClustersResponse",
    clusters: undefined,
    failures: undefined
  };
  if (output.clusters !== undefined) {
    contents.clusters = deserializeAws_json1_1Clusters(
      output.clusters,
      context
    );
  }
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1Failures(
      output.failures,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeContainerInstancesResponse = (
  output: any,
  context: __SerdeContext
): DescribeContainerInstancesResponse => {
  let contents: any = {
    __type: "DescribeContainerInstancesResponse",
    containerInstances: undefined,
    failures: undefined
  };
  if (output.containerInstances !== undefined) {
    contents.containerInstances = deserializeAws_json1_1ContainerInstances(
      output.containerInstances,
      context
    );
  }
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1Failures(
      output.failures,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeServicesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServicesResponse => {
  let contents: any = {
    __type: "DescribeServicesResponse",
    failures: undefined,
    services: undefined
  };
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1Failures(
      output.failures,
      context
    );
  }
  if (output.services !== undefined) {
    contents.services = deserializeAws_json1_1Services(
      output.services,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeTaskDefinitionResponse => {
  let contents: any = {
    __type: "DescribeTaskDefinitionResponse",
    tags: undefined,
    taskDefinition: undefined
  };
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  if (output.taskDefinition !== undefined) {
    contents.taskDefinition = deserializeAws_json1_1TaskDefinition(
      output.taskDefinition,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTaskSetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeTaskSetsResponse => {
  let contents: any = {
    __type: "DescribeTaskSetsResponse",
    failures: undefined,
    taskSets: undefined
  };
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1Failures(
      output.failures,
      context
    );
  }
  if (output.taskSets !== undefined) {
    contents.taskSets = deserializeAws_json1_1TaskSets(
      output.taskSets,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeTasksResponse => {
  let contents: any = {
    __type: "DescribeTasksResponse",
    failures: undefined,
    tasks: undefined
  };
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1Failures(
      output.failures,
      context
    );
  }
  if (output.tasks !== undefined) {
    contents.tasks = deserializeAws_json1_1Tasks(output.tasks, context);
  }
  return contents;
};

const deserializeAws_json1_1Device = (
  output: any,
  context: __SerdeContext
): Device => {
  let contents: any = {
    __type: "Device",
    containerPath: undefined,
    hostPath: undefined,
    permissions: undefined
  };
  if (output.containerPath !== undefined) {
    contents.containerPath = output.containerPath;
  }
  if (output.hostPath !== undefined) {
    contents.hostPath = output.hostPath;
  }
  if (output.permissions !== undefined) {
    contents.permissions = deserializeAws_json1_1DeviceCgroupPermissions(
      output.permissions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeviceCgroupPermissions = (
  output: any,
  context: __SerdeContext
): Array<DeviceCgroupPermission | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DevicesList = (
  output: any,
  context: __SerdeContext
): Array<Device> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Device(entry, context)
  );
};

const deserializeAws_json1_1DiscoverPollEndpointResponse = (
  output: any,
  context: __SerdeContext
): DiscoverPollEndpointResponse => {
  let contents: any = {
    __type: "DiscoverPollEndpointResponse",
    endpoint: undefined,
    telemetryEndpoint: undefined
  };
  if (output.endpoint !== undefined) {
    contents.endpoint = output.endpoint;
  }
  if (output.telemetryEndpoint !== undefined) {
    contents.telemetryEndpoint = output.telemetryEndpoint;
  }
  return contents;
};

const deserializeAws_json1_1DockerLabelsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1DockerVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): DockerVolumeConfiguration => {
  let contents: any = {
    __type: "DockerVolumeConfiguration",
    autoprovision: undefined,
    driver: undefined,
    driverOpts: undefined,
    labels: undefined,
    scope: undefined
  };
  if (output.autoprovision !== undefined) {
    contents.autoprovision = output.autoprovision;
  }
  if (output.driver !== undefined) {
    contents.driver = output.driver;
  }
  if (output.driverOpts !== undefined) {
    contents.driverOpts = deserializeAws_json1_1StringMap(
      output.driverOpts,
      context
    );
  }
  if (output.labels !== undefined) {
    contents.labels = deserializeAws_json1_1StringMap(output.labels, context);
  }
  if (output.scope !== undefined) {
    contents.scope = output.scope;
  }
  return contents;
};

const deserializeAws_json1_1EnvironmentVariables = (
  output: any,
  context: __SerdeContext
): Array<KeyValuePair> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyValuePair(entry, context)
  );
};

const deserializeAws_json1_1Failure = (
  output: any,
  context: __SerdeContext
): Failure => {
  let contents: any = {
    __type: "Failure",
    arn: undefined,
    detail: undefined,
    reason: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.detail !== undefined) {
    contents.detail = output.detail;
  }
  if (output.reason !== undefined) {
    contents.reason = output.reason;
  }
  return contents;
};

const deserializeAws_json1_1Failures = (
  output: any,
  context: __SerdeContext
): Array<Failure> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Failure(entry, context)
  );
};

const deserializeAws_json1_1FirelensConfiguration = (
  output: any,
  context: __SerdeContext
): FirelensConfiguration => {
  let contents: any = {
    __type: "FirelensConfiguration",
    options: undefined,
    type: undefined
  };
  if (output.options !== undefined) {
    contents.options = deserializeAws_json1_1FirelensConfigurationOptionsMap(
      output.options,
      context
    );
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1FirelensConfigurationOptionsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1GpuIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1HealthCheck = (
  output: any,
  context: __SerdeContext
): HealthCheck => {
  let contents: any = {
    __type: "HealthCheck",
    command: undefined,
    interval: undefined,
    retries: undefined,
    startPeriod: undefined,
    timeout: undefined
  };
  if (output.command !== undefined) {
    contents.command = deserializeAws_json1_1StringList(
      output.command,
      context
    );
  }
  if (output.interval !== undefined) {
    contents.interval = output.interval;
  }
  if (output.retries !== undefined) {
    contents.retries = output.retries;
  }
  if (output.startPeriod !== undefined) {
    contents.startPeriod = output.startPeriod;
  }
  if (output.timeout !== undefined) {
    contents.timeout = output.timeout;
  }
  return contents;
};

const deserializeAws_json1_1HostEntry = (
  output: any,
  context: __SerdeContext
): HostEntry => {
  let contents: any = {
    __type: "HostEntry",
    hostname: undefined,
    ipAddress: undefined
  };
  if (output.hostname !== undefined) {
    contents.hostname = output.hostname;
  }
  if (output.ipAddress !== undefined) {
    contents.ipAddress = output.ipAddress;
  }
  return contents;
};

const deserializeAws_json1_1HostEntryList = (
  output: any,
  context: __SerdeContext
): Array<HostEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HostEntry(entry, context)
  );
};

const deserializeAws_json1_1HostVolumeProperties = (
  output: any,
  context: __SerdeContext
): HostVolumeProperties => {
  let contents: any = {
    __type: "HostVolumeProperties",
    sourcePath: undefined
  };
  if (output.sourcePath !== undefined) {
    contents.sourcePath = output.sourcePath;
  }
  return contents;
};

const deserializeAws_json1_1InferenceAccelerator = (
  output: any,
  context: __SerdeContext
): InferenceAccelerator => {
  let contents: any = {
    __type: "InferenceAccelerator",
    deviceName: undefined,
    deviceType: undefined
  };
  if (output.deviceName !== undefined) {
    contents.deviceName = output.deviceName;
  }
  if (output.deviceType !== undefined) {
    contents.deviceType = output.deviceType;
  }
  return contents;
};

const deserializeAws_json1_1InferenceAcceleratorOverride = (
  output: any,
  context: __SerdeContext
): InferenceAcceleratorOverride => {
  let contents: any = {
    __type: "InferenceAcceleratorOverride",
    deviceName: undefined,
    deviceType: undefined
  };
  if (output.deviceName !== undefined) {
    contents.deviceName = output.deviceName;
  }
  if (output.deviceType !== undefined) {
    contents.deviceType = output.deviceType;
  }
  return contents;
};

const deserializeAws_json1_1InferenceAcceleratorOverrides = (
  output: any,
  context: __SerdeContext
): Array<InferenceAcceleratorOverride> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InferenceAcceleratorOverride(entry, context)
  );
};

const deserializeAws_json1_1InferenceAccelerators = (
  output: any,
  context: __SerdeContext
): Array<InferenceAccelerator> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InferenceAccelerator(entry, context)
  );
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KernelCapabilities = (
  output: any,
  context: __SerdeContext
): KernelCapabilities => {
  let contents: any = {
    __type: "KernelCapabilities",
    add: undefined,
    drop: undefined
  };
  if (output.add !== undefined) {
    contents.add = deserializeAws_json1_1StringList(output.add, context);
  }
  if (output.drop !== undefined) {
    contents.drop = deserializeAws_json1_1StringList(output.drop, context);
  }
  return contents;
};

const deserializeAws_json1_1KeyValuePair = (
  output: any,
  context: __SerdeContext
): KeyValuePair => {
  let contents: any = {
    __type: "KeyValuePair",
    name: undefined,
    value: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LinuxParameters = (
  output: any,
  context: __SerdeContext
): LinuxParameters => {
  let contents: any = {
    __type: "LinuxParameters",
    capabilities: undefined,
    devices: undefined,
    initProcessEnabled: undefined,
    maxSwap: undefined,
    sharedMemorySize: undefined,
    swappiness: undefined,
    tmpfs: undefined
  };
  if (output.capabilities !== undefined) {
    contents.capabilities = deserializeAws_json1_1KernelCapabilities(
      output.capabilities,
      context
    );
  }
  if (output.devices !== undefined) {
    contents.devices = deserializeAws_json1_1DevicesList(
      output.devices,
      context
    );
  }
  if (output.initProcessEnabled !== undefined) {
    contents.initProcessEnabled = output.initProcessEnabled;
  }
  if (output.maxSwap !== undefined) {
    contents.maxSwap = output.maxSwap;
  }
  if (output.sharedMemorySize !== undefined) {
    contents.sharedMemorySize = output.sharedMemorySize;
  }
  if (output.swappiness !== undefined) {
    contents.swappiness = output.swappiness;
  }
  if (output.tmpfs !== undefined) {
    contents.tmpfs = deserializeAws_json1_1TmpfsList(output.tmpfs, context);
  }
  return contents;
};

const deserializeAws_json1_1ListAccountSettingsResponse = (
  output: any,
  context: __SerdeContext
): ListAccountSettingsResponse => {
  let contents: any = {
    __type: "ListAccountSettingsResponse",
    nextToken: undefined,
    settings: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.settings !== undefined) {
    contents.settings = deserializeAws_json1_1Settings(
      output.settings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListAttributesResponse = (
  output: any,
  context: __SerdeContext
): ListAttributesResponse => {
  let contents: any = {
    __type: "ListAttributesResponse",
    attributes: undefined,
    nextToken: undefined
  };
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_json1_1Attributes(
      output.attributes,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListClustersResponse = (
  output: any,
  context: __SerdeContext
): ListClustersResponse => {
  let contents: any = {
    __type: "ListClustersResponse",
    clusterArns: undefined,
    nextToken: undefined
  };
  if (output.clusterArns !== undefined) {
    contents.clusterArns = deserializeAws_json1_1StringList(
      output.clusterArns,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListContainerInstancesResponse = (
  output: any,
  context: __SerdeContext
): ListContainerInstancesResponse => {
  let contents: any = {
    __type: "ListContainerInstancesResponse",
    containerInstanceArns: undefined,
    nextToken: undefined
  };
  if (output.containerInstanceArns !== undefined) {
    contents.containerInstanceArns = deserializeAws_json1_1StringList(
      output.containerInstanceArns,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListServicesResponse = (
  output: any,
  context: __SerdeContext
): ListServicesResponse => {
  let contents: any = {
    __type: "ListServicesResponse",
    nextToken: undefined,
    serviceArns: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.serviceArns !== undefined) {
    contents.serviceArns = deserializeAws_json1_1StringList(
      output.serviceArns,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListTaskDefinitionFamiliesResponse = (
  output: any,
  context: __SerdeContext
): ListTaskDefinitionFamiliesResponse => {
  let contents: any = {
    __type: "ListTaskDefinitionFamiliesResponse",
    families: undefined,
    nextToken: undefined
  };
  if (output.families !== undefined) {
    contents.families = deserializeAws_json1_1StringList(
      output.families,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTaskDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListTaskDefinitionsResponse => {
  let contents: any = {
    __type: "ListTaskDefinitionsResponse",
    nextToken: undefined,
    taskDefinitionArns: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.taskDefinitionArns !== undefined) {
    contents.taskDefinitionArns = deserializeAws_json1_1StringList(
      output.taskDefinitionArns,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTasksResponse = (
  output: any,
  context: __SerdeContext
): ListTasksResponse => {
  let contents: any = {
    __type: "ListTasksResponse",
    nextToken: undefined,
    taskArns: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.taskArns !== undefined) {
    contents.taskArns = deserializeAws_json1_1StringList(
      output.taskArns,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1LoadBalancer = (
  output: any,
  context: __SerdeContext
): LoadBalancer => {
  let contents: any = {
    __type: "LoadBalancer",
    containerName: undefined,
    containerPort: undefined,
    loadBalancerName: undefined,
    targetGroupArn: undefined
  };
  if (output.containerName !== undefined) {
    contents.containerName = output.containerName;
  }
  if (output.containerPort !== undefined) {
    contents.containerPort = output.containerPort;
  }
  if (output.loadBalancerName !== undefined) {
    contents.loadBalancerName = output.loadBalancerName;
  }
  if (output.targetGroupArn !== undefined) {
    contents.targetGroupArn = output.targetGroupArn;
  }
  return contents;
};

const deserializeAws_json1_1LoadBalancers = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoadBalancer(entry, context)
  );
};

const deserializeAws_json1_1LogConfiguration = (
  output: any,
  context: __SerdeContext
): LogConfiguration => {
  let contents: any = {
    __type: "LogConfiguration",
    logDriver: undefined,
    options: undefined,
    secretOptions: undefined
  };
  if (output.logDriver !== undefined) {
    contents.logDriver = output.logDriver;
  }
  if (output.options !== undefined) {
    contents.options = deserializeAws_json1_1LogConfigurationOptionsMap(
      output.options,
      context
    );
  }
  if (output.secretOptions !== undefined) {
    contents.secretOptions = deserializeAws_json1_1SecretList(
      output.secretOptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1LogConfigurationOptionsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1ManagedScaling = (
  output: any,
  context: __SerdeContext
): ManagedScaling => {
  let contents: any = {
    __type: "ManagedScaling",
    maximumScalingStepSize: undefined,
    minimumScalingStepSize: undefined,
    status: undefined,
    targetCapacity: undefined
  };
  if (output.maximumScalingStepSize !== undefined) {
    contents.maximumScalingStepSize = output.maximumScalingStepSize;
  }
  if (output.minimumScalingStepSize !== undefined) {
    contents.minimumScalingStepSize = output.minimumScalingStepSize;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.targetCapacity !== undefined) {
    contents.targetCapacity = output.targetCapacity;
  }
  return contents;
};

const deserializeAws_json1_1MissingVersionException = (
  output: any,
  context: __SerdeContext
): MissingVersionException => {
  let contents: any = {
    __type: "MissingVersionException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1MountPoint = (
  output: any,
  context: __SerdeContext
): MountPoint => {
  let contents: any = {
    __type: "MountPoint",
    containerPath: undefined,
    readOnly: undefined,
    sourceVolume: undefined
  };
  if (output.containerPath !== undefined) {
    contents.containerPath = output.containerPath;
  }
  if (output.readOnly !== undefined) {
    contents.readOnly = output.readOnly;
  }
  if (output.sourceVolume !== undefined) {
    contents.sourceVolume = output.sourceVolume;
  }
  return contents;
};

const deserializeAws_json1_1MountPointList = (
  output: any,
  context: __SerdeContext
): Array<MountPoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MountPoint(entry, context)
  );
};

const deserializeAws_json1_1NetworkBinding = (
  output: any,
  context: __SerdeContext
): NetworkBinding => {
  let contents: any = {
    __type: "NetworkBinding",
    bindIP: undefined,
    containerPort: undefined,
    hostPort: undefined,
    protocol: undefined
  };
  if (output.bindIP !== undefined) {
    contents.bindIP = output.bindIP;
  }
  if (output.containerPort !== undefined) {
    contents.containerPort = output.containerPort;
  }
  if (output.hostPort !== undefined) {
    contents.hostPort = output.hostPort;
  }
  if (output.protocol !== undefined) {
    contents.protocol = output.protocol;
  }
  return contents;
};

const deserializeAws_json1_1NetworkBindings = (
  output: any,
  context: __SerdeContext
): Array<NetworkBinding> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NetworkBinding(entry, context)
  );
};

const deserializeAws_json1_1NetworkConfiguration = (
  output: any,
  context: __SerdeContext
): NetworkConfiguration => {
  let contents: any = {
    __type: "NetworkConfiguration",
    awsvpcConfiguration: undefined
  };
  if (output.awsvpcConfiguration !== undefined) {
    contents.awsvpcConfiguration = deserializeAws_json1_1AwsVpcConfiguration(
      output.awsvpcConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  let contents: any = {
    __type: "NetworkInterface",
    attachmentId: undefined,
    ipv6Address: undefined,
    privateIpv4Address: undefined
  };
  if (output.attachmentId !== undefined) {
    contents.attachmentId = output.attachmentId;
  }
  if (output.ipv6Address !== undefined) {
    contents.ipv6Address = output.ipv6Address;
  }
  if (output.privateIpv4Address !== undefined) {
    contents.privateIpv4Address = output.privateIpv4Address;
  }
  return contents;
};

const deserializeAws_json1_1NetworkInterfaces = (
  output: any,
  context: __SerdeContext
): Array<NetworkInterface> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NetworkInterface(entry, context)
  );
};

const deserializeAws_json1_1NoUpdateAvailableException = (
  output: any,
  context: __SerdeContext
): NoUpdateAvailableException => {
  let contents: any = {
    __type: "NoUpdateAvailableException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PlacementConstraint = (
  output: any,
  context: __SerdeContext
): PlacementConstraint => {
  let contents: any = {
    __type: "PlacementConstraint",
    expression: undefined,
    type: undefined
  };
  if (output.expression !== undefined) {
    contents.expression = output.expression;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1PlacementConstraints = (
  output: any,
  context: __SerdeContext
): Array<PlacementConstraint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PlacementConstraint(entry, context)
  );
};

const deserializeAws_json1_1PlacementStrategies = (
  output: any,
  context: __SerdeContext
): Array<PlacementStrategy> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PlacementStrategy(entry, context)
  );
};

const deserializeAws_json1_1PlacementStrategy = (
  output: any,
  context: __SerdeContext
): PlacementStrategy => {
  let contents: any = {
    __type: "PlacementStrategy",
    field: undefined,
    type: undefined
  };
  if (output.field !== undefined) {
    contents.field = output.field;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException = (
  output: any,
  context: __SerdeContext
): PlatformTaskDefinitionIncompatibilityException => {
  let contents: any = {
    __type: "PlatformTaskDefinitionIncompatibilityException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PlatformUnknownException = (
  output: any,
  context: __SerdeContext
): PlatformUnknownException => {
  let contents: any = {
    __type: "PlatformUnknownException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PortMapping = (
  output: any,
  context: __SerdeContext
): PortMapping => {
  let contents: any = {
    __type: "PortMapping",
    containerPort: undefined,
    hostPort: undefined,
    protocol: undefined
  };
  if (output.containerPort !== undefined) {
    contents.containerPort = output.containerPort;
  }
  if (output.hostPort !== undefined) {
    contents.hostPort = output.hostPort;
  }
  if (output.protocol !== undefined) {
    contents.protocol = output.protocol;
  }
  return contents;
};

const deserializeAws_json1_1PortMappingList = (
  output: any,
  context: __SerdeContext
): Array<PortMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PortMapping(entry, context)
  );
};

const deserializeAws_json1_1ProxyConfiguration = (
  output: any,
  context: __SerdeContext
): ProxyConfiguration => {
  let contents: any = {
    __type: "ProxyConfiguration",
    containerName: undefined,
    properties: undefined,
    type: undefined
  };
  if (output.containerName !== undefined) {
    contents.containerName = output.containerName;
  }
  if (output.properties !== undefined) {
    contents.properties = deserializeAws_json1_1ProxyConfigurationProperties(
      output.properties,
      context
    );
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1ProxyConfigurationProperties = (
  output: any,
  context: __SerdeContext
): Array<KeyValuePair> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyValuePair(entry, context)
  );
};

const deserializeAws_json1_1PutAccountSettingDefaultResponse = (
  output: any,
  context: __SerdeContext
): PutAccountSettingDefaultResponse => {
  let contents: any = {
    __type: "PutAccountSettingDefaultResponse",
    setting: undefined
  };
  if (output.setting !== undefined) {
    contents.setting = deserializeAws_json1_1Setting(output.setting, context);
  }
  return contents;
};

const deserializeAws_json1_1PutAccountSettingResponse = (
  output: any,
  context: __SerdeContext
): PutAccountSettingResponse => {
  let contents: any = {
    __type: "PutAccountSettingResponse",
    setting: undefined
  };
  if (output.setting !== undefined) {
    contents.setting = deserializeAws_json1_1Setting(output.setting, context);
  }
  return contents;
};

const deserializeAws_json1_1PutAttributesResponse = (
  output: any,
  context: __SerdeContext
): PutAttributesResponse => {
  let contents: any = {
    __type: "PutAttributesResponse",
    attributes: undefined
  };
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_json1_1Attributes(
      output.attributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PutClusterCapacityProvidersResponse = (
  output: any,
  context: __SerdeContext
): PutClusterCapacityProvidersResponse => {
  let contents: any = {
    __type: "PutClusterCapacityProvidersResponse",
    cluster: undefined
  };
  if (output.cluster !== undefined) {
    contents.cluster = deserializeAws_json1_1Cluster(output.cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1RegisterContainerInstanceResponse = (
  output: any,
  context: __SerdeContext
): RegisterContainerInstanceResponse => {
  let contents: any = {
    __type: "RegisterContainerInstanceResponse",
    containerInstance: undefined
  };
  if (output.containerInstance !== undefined) {
    contents.containerInstance = deserializeAws_json1_1ContainerInstance(
      output.containerInstance,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RegisterTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): RegisterTaskDefinitionResponse => {
  let contents: any = {
    __type: "RegisterTaskDefinitionResponse",
    tags: undefined,
    taskDefinition: undefined
  };
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  if (output.taskDefinition !== undefined) {
    contents.taskDefinition = deserializeAws_json1_1TaskDefinition(
      output.taskDefinition,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RepositoryCredentials = (
  output: any,
  context: __SerdeContext
): RepositoryCredentials => {
  let contents: any = {
    __type: "RepositoryCredentials",
    credentialsParameter: undefined
  };
  if (output.credentialsParameter !== undefined) {
    contents.credentialsParameter = output.credentialsParameter;
  }
  return contents;
};

const deserializeAws_json1_1RequiresAttributes = (
  output: any,
  context: __SerdeContext
): Array<Attribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attribute(entry, context)
  );
};

const deserializeAws_json1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    doubleValue: undefined,
    integerValue: undefined,
    longValue: undefined,
    name: undefined,
    stringSetValue: undefined,
    type: undefined
  };
  if (output.doubleValue !== undefined) {
    contents.doubleValue = output.doubleValue;
  }
  if (output.integerValue !== undefined) {
    contents.integerValue = output.integerValue;
  }
  if (output.longValue !== undefined) {
    contents.longValue = output.longValue;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.stringSetValue !== undefined) {
    contents.stringSetValue = deserializeAws_json1_1StringList(
      output.stringSetValue,
      context
    );
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceRequirement = (
  output: any,
  context: __SerdeContext
): ResourceRequirement => {
  let contents: any = {
    __type: "ResourceRequirement",
    type: undefined,
    value: undefined
  };
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1ResourceRequirements = (
  output: any,
  context: __SerdeContext
): Array<ResourceRequirement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceRequirement(entry, context)
  );
};

const deserializeAws_json1_1Resources = (
  output: any,
  context: __SerdeContext
): Array<Resource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Resource(entry, context)
  );
};

const deserializeAws_json1_1RunTaskResponse = (
  output: any,
  context: __SerdeContext
): RunTaskResponse => {
  let contents: any = {
    __type: "RunTaskResponse",
    failures: undefined,
    tasks: undefined
  };
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1Failures(
      output.failures,
      context
    );
  }
  if (output.tasks !== undefined) {
    contents.tasks = deserializeAws_json1_1Tasks(output.tasks, context);
  }
  return contents;
};

const deserializeAws_json1_1Scale = (
  output: any,
  context: __SerdeContext
): Scale => {
  let contents: any = {
    __type: "Scale",
    unit: undefined,
    value: undefined
  };
  if (output.unit !== undefined) {
    contents.unit = output.unit;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1Secret = (
  output: any,
  context: __SerdeContext
): Secret => {
  let contents: any = {
    __type: "Secret",
    name: undefined,
    valueFrom: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.valueFrom !== undefined) {
    contents.valueFrom = output.valueFrom;
  }
  return contents;
};

const deserializeAws_json1_1SecretList = (
  output: any,
  context: __SerdeContext
): Array<Secret> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Secret(entry, context)
  );
};

const deserializeAws_json1_1ServerException = (
  output: any,
  context: __SerdeContext
): ServerException => {
  let contents: any = {
    __type: "ServerException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Service = (
  output: any,
  context: __SerdeContext
): Service => {
  let contents: any = {
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
  if (output.capacityProviderStrategy !== undefined) {
    contents.capacityProviderStrategy = deserializeAws_json1_1CapacityProviderStrategy(
      output.capacityProviderStrategy,
      context
    );
  }
  if (output.clusterArn !== undefined) {
    contents.clusterArn = output.clusterArn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.createdBy !== undefined) {
    contents.createdBy = output.createdBy;
  }
  if (output.deploymentConfiguration !== undefined) {
    contents.deploymentConfiguration = deserializeAws_json1_1DeploymentConfiguration(
      output.deploymentConfiguration,
      context
    );
  }
  if (output.deploymentController !== undefined) {
    contents.deploymentController = deserializeAws_json1_1DeploymentController(
      output.deploymentController,
      context
    );
  }
  if (output.deployments !== undefined) {
    contents.deployments = deserializeAws_json1_1Deployments(
      output.deployments,
      context
    );
  }
  if (output.desiredCount !== undefined) {
    contents.desiredCount = output.desiredCount;
  }
  if (output.enableECSManagedTags !== undefined) {
    contents.enableECSManagedTags = output.enableECSManagedTags;
  }
  if (output.events !== undefined) {
    contents.events = deserializeAws_json1_1ServiceEvents(
      output.events,
      context
    );
  }
  if (output.healthCheckGracePeriodSeconds !== undefined) {
    contents.healthCheckGracePeriodSeconds =
      output.healthCheckGracePeriodSeconds;
  }
  if (output.launchType !== undefined) {
    contents.launchType = output.launchType;
  }
  if (output.loadBalancers !== undefined) {
    contents.loadBalancers = deserializeAws_json1_1LoadBalancers(
      output.loadBalancers,
      context
    );
  }
  if (output.networkConfiguration !== undefined) {
    contents.networkConfiguration = deserializeAws_json1_1NetworkConfiguration(
      output.networkConfiguration,
      context
    );
  }
  if (output.pendingCount !== undefined) {
    contents.pendingCount = output.pendingCount;
  }
  if (output.placementConstraints !== undefined) {
    contents.placementConstraints = deserializeAws_json1_1PlacementConstraints(
      output.placementConstraints,
      context
    );
  }
  if (output.placementStrategy !== undefined) {
    contents.placementStrategy = deserializeAws_json1_1PlacementStrategies(
      output.placementStrategy,
      context
    );
  }
  if (output.platformVersion !== undefined) {
    contents.platformVersion = output.platformVersion;
  }
  if (output.propagateTags !== undefined) {
    contents.propagateTags = output.propagateTags;
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  if (output.runningCount !== undefined) {
    contents.runningCount = output.runningCount;
  }
  if (output.schedulingStrategy !== undefined) {
    contents.schedulingStrategy = output.schedulingStrategy;
  }
  if (output.serviceArn !== undefined) {
    contents.serviceArn = output.serviceArn;
  }
  if (output.serviceName !== undefined) {
    contents.serviceName = output.serviceName;
  }
  if (output.serviceRegistries !== undefined) {
    contents.serviceRegistries = deserializeAws_json1_1ServiceRegistries(
      output.serviceRegistries,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  if (output.taskDefinition !== undefined) {
    contents.taskDefinition = output.taskDefinition;
  }
  if (output.taskSets !== undefined) {
    contents.taskSets = deserializeAws_json1_1TaskSets(
      output.taskSets,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ServiceEvent = (
  output: any,
  context: __SerdeContext
): ServiceEvent => {
  let contents: any = {
    __type: "ServiceEvent",
    createdAt: undefined,
    id: undefined,
    message: undefined
  };
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceEvents = (
  output: any,
  context: __SerdeContext
): Array<ServiceEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceEvent(entry, context)
  );
};

const deserializeAws_json1_1ServiceNotActiveException = (
  output: any,
  context: __SerdeContext
): ServiceNotActiveException => {
  let contents: any = {
    __type: "ServiceNotActiveException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceNotFoundException = (
  output: any,
  context: __SerdeContext
): ServiceNotFoundException => {
  let contents: any = {
    __type: "ServiceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceRegistries = (
  output: any,
  context: __SerdeContext
): Array<ServiceRegistry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceRegistry(entry, context)
  );
};

const deserializeAws_json1_1ServiceRegistry = (
  output: any,
  context: __SerdeContext
): ServiceRegistry => {
  let contents: any = {
    __type: "ServiceRegistry",
    containerName: undefined,
    containerPort: undefined,
    port: undefined,
    registryArn: undefined
  };
  if (output.containerName !== undefined) {
    contents.containerName = output.containerName;
  }
  if (output.containerPort !== undefined) {
    contents.containerPort = output.containerPort;
  }
  if (output.port !== undefined) {
    contents.port = output.port;
  }
  if (output.registryArn !== undefined) {
    contents.registryArn = output.registryArn;
  }
  return contents;
};

const deserializeAws_json1_1Services = (
  output: any,
  context: __SerdeContext
): Array<Service> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Service(entry, context)
  );
};

const deserializeAws_json1_1Setting = (
  output: any,
  context: __SerdeContext
): Setting => {
  let contents: any = {
    __type: "Setting",
    name: undefined,
    principalArn: undefined,
    value: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.principalArn !== undefined) {
    contents.principalArn = output.principalArn;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1Settings = (
  output: any,
  context: __SerdeContext
): Array<Setting> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Setting(entry, context)
  );
};

const deserializeAws_json1_1StartTaskResponse = (
  output: any,
  context: __SerdeContext
): StartTaskResponse => {
  let contents: any = {
    __type: "StartTaskResponse",
    failures: undefined,
    tasks: undefined
  };
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1Failures(
      output.failures,
      context
    );
  }
  if (output.tasks !== undefined) {
    contents.tasks = deserializeAws_json1_1Tasks(output.tasks, context);
  }
  return contents;
};

const deserializeAws_json1_1Statistics = (
  output: any,
  context: __SerdeContext
): Array<KeyValuePair> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyValuePair(entry, context)
  );
};

const deserializeAws_json1_1StopTaskResponse = (
  output: any,
  context: __SerdeContext
): StopTaskResponse => {
  let contents: any = {
    __type: "StopTaskResponse",
    task: undefined
  };
  if (output.task !== undefined) {
    contents.task = deserializeAws_json1_1Task(output.task, context);
  }
  return contents;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1StringMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1SubmitAttachmentStateChangesResponse = (
  output: any,
  context: __SerdeContext
): SubmitAttachmentStateChangesResponse => {
  let contents: any = {
    __type: "SubmitAttachmentStateChangesResponse",
    acknowledgment: undefined
  };
  if (output.acknowledgment !== undefined) {
    contents.acknowledgment = output.acknowledgment;
  }
  return contents;
};

const deserializeAws_json1_1SubmitContainerStateChangeResponse = (
  output: any,
  context: __SerdeContext
): SubmitContainerStateChangeResponse => {
  let contents: any = {
    __type: "SubmitContainerStateChangeResponse",
    acknowledgment: undefined
  };
  if (output.acknowledgment !== undefined) {
    contents.acknowledgment = output.acknowledgment;
  }
  return contents;
};

const deserializeAws_json1_1SubmitTaskStateChangeResponse = (
  output: any,
  context: __SerdeContext
): SubmitTaskStateChangeResponse => {
  let contents: any = {
    __type: "SubmitTaskStateChangeResponse",
    acknowledgment: undefined
  };
  if (output.acknowledgment !== undefined) {
    contents.acknowledgment = output.acknowledgment;
  }
  return contents;
};

const deserializeAws_json1_1SystemControl = (
  output: any,
  context: __SerdeContext
): SystemControl => {
  let contents: any = {
    __type: "SystemControl",
    namespace: undefined,
    value: undefined
  };
  if (output.namespace !== undefined) {
    contents.namespace = output.namespace;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1SystemControls = (
  output: any,
  context: __SerdeContext
): Array<SystemControl> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SystemControl(entry, context)
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TargetNotFoundException = (
  output: any,
  context: __SerdeContext
): TargetNotFoundException => {
  let contents: any = {
    __type: "TargetNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Task = (
  output: any,
  context: __SerdeContext
): Task => {
  let contents: any = {
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
  if (output.attachments !== undefined) {
    contents.attachments = deserializeAws_json1_1Attachments(
      output.attachments,
      context
    );
  }
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_json1_1Attributes(
      output.attributes,
      context
    );
  }
  if (output.availabilityZone !== undefined) {
    contents.availabilityZone = output.availabilityZone;
  }
  if (output.capacityProviderName !== undefined) {
    contents.capacityProviderName = output.capacityProviderName;
  }
  if (output.clusterArn !== undefined) {
    contents.clusterArn = output.clusterArn;
  }
  if (output.connectivity !== undefined) {
    contents.connectivity = output.connectivity;
  }
  if (output.connectivityAt !== undefined) {
    contents.connectivityAt = new Date(
      output.connectivityAt % 1 != 0
        ? Math.round(output.connectivityAt * 1000)
        : output.connectivityAt
    );
  }
  if (output.containerInstanceArn !== undefined) {
    contents.containerInstanceArn = output.containerInstanceArn;
  }
  if (output.containers !== undefined) {
    contents.containers = deserializeAws_json1_1Containers(
      output.containers,
      context
    );
  }
  if (output.cpu !== undefined) {
    contents.cpu = output.cpu;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.desiredStatus !== undefined) {
    contents.desiredStatus = output.desiredStatus;
  }
  if (output.executionStoppedAt !== undefined) {
    contents.executionStoppedAt = new Date(
      output.executionStoppedAt % 1 != 0
        ? Math.round(output.executionStoppedAt * 1000)
        : output.executionStoppedAt
    );
  }
  if (output.group !== undefined) {
    contents.group = output.group;
  }
  if (output.healthStatus !== undefined) {
    contents.healthStatus = output.healthStatus;
  }
  if (output.inferenceAccelerators !== undefined) {
    contents.inferenceAccelerators = deserializeAws_json1_1InferenceAccelerators(
      output.inferenceAccelerators,
      context
    );
  }
  if (output.lastStatus !== undefined) {
    contents.lastStatus = output.lastStatus;
  }
  if (output.launchType !== undefined) {
    contents.launchType = output.launchType;
  }
  if (output.memory !== undefined) {
    contents.memory = output.memory;
  }
  if (output.overrides !== undefined) {
    contents.overrides = deserializeAws_json1_1TaskOverride(
      output.overrides,
      context
    );
  }
  if (output.platformVersion !== undefined) {
    contents.platformVersion = output.platformVersion;
  }
  if (output.pullStartedAt !== undefined) {
    contents.pullStartedAt = new Date(
      output.pullStartedAt % 1 != 0
        ? Math.round(output.pullStartedAt * 1000)
        : output.pullStartedAt
    );
  }
  if (output.pullStoppedAt !== undefined) {
    contents.pullStoppedAt = new Date(
      output.pullStoppedAt % 1 != 0
        ? Math.round(output.pullStoppedAt * 1000)
        : output.pullStoppedAt
    );
  }
  if (output.startedAt !== undefined) {
    contents.startedAt = new Date(
      output.startedAt % 1 != 0
        ? Math.round(output.startedAt * 1000)
        : output.startedAt
    );
  }
  if (output.startedBy !== undefined) {
    contents.startedBy = output.startedBy;
  }
  if (output.stopCode !== undefined) {
    contents.stopCode = output.stopCode;
  }
  if (output.stoppedAt !== undefined) {
    contents.stoppedAt = new Date(
      output.stoppedAt % 1 != 0
        ? Math.round(output.stoppedAt * 1000)
        : output.stoppedAt
    );
  }
  if (output.stoppedReason !== undefined) {
    contents.stoppedReason = output.stoppedReason;
  }
  if (output.stoppingAt !== undefined) {
    contents.stoppingAt = new Date(
      output.stoppingAt % 1 != 0
        ? Math.round(output.stoppingAt * 1000)
        : output.stoppingAt
    );
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  if (output.taskArn !== undefined) {
    contents.taskArn = output.taskArn;
  }
  if (output.taskDefinitionArn !== undefined) {
    contents.taskDefinitionArn = output.taskDefinitionArn;
  }
  if (output.version !== undefined) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_json1_1TaskDefinition = (
  output: any,
  context: __SerdeContext
): TaskDefinition => {
  let contents: any = {
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
  if (output.compatibilities !== undefined) {
    contents.compatibilities = deserializeAws_json1_1CompatibilityList(
      output.compatibilities,
      context
    );
  }
  if (output.containerDefinitions !== undefined) {
    contents.containerDefinitions = deserializeAws_json1_1ContainerDefinitions(
      output.containerDefinitions,
      context
    );
  }
  if (output.cpu !== undefined) {
    contents.cpu = output.cpu;
  }
  if (output.executionRoleArn !== undefined) {
    contents.executionRoleArn = output.executionRoleArn;
  }
  if (output.family !== undefined) {
    contents.family = output.family;
  }
  if (output.inferenceAccelerators !== undefined) {
    contents.inferenceAccelerators = deserializeAws_json1_1InferenceAccelerators(
      output.inferenceAccelerators,
      context
    );
  }
  if (output.ipcMode !== undefined) {
    contents.ipcMode = output.ipcMode;
  }
  if (output.memory !== undefined) {
    contents.memory = output.memory;
  }
  if (output.networkMode !== undefined) {
    contents.networkMode = output.networkMode;
  }
  if (output.pidMode !== undefined) {
    contents.pidMode = output.pidMode;
  }
  if (output.placementConstraints !== undefined) {
    contents.placementConstraints = deserializeAws_json1_1TaskDefinitionPlacementConstraints(
      output.placementConstraints,
      context
    );
  }
  if (output.proxyConfiguration !== undefined) {
    contents.proxyConfiguration = deserializeAws_json1_1ProxyConfiguration(
      output.proxyConfiguration,
      context
    );
  }
  if (output.requiresAttributes !== undefined) {
    contents.requiresAttributes = deserializeAws_json1_1RequiresAttributes(
      output.requiresAttributes,
      context
    );
  }
  if (output.requiresCompatibilities !== undefined) {
    contents.requiresCompatibilities = deserializeAws_json1_1CompatibilityList(
      output.requiresCompatibilities,
      context
    );
  }
  if (output.revision !== undefined) {
    contents.revision = output.revision;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.taskDefinitionArn !== undefined) {
    contents.taskDefinitionArn = output.taskDefinitionArn;
  }
  if (output.taskRoleArn !== undefined) {
    contents.taskRoleArn = output.taskRoleArn;
  }
  if (output.volumes !== undefined) {
    contents.volumes = deserializeAws_json1_1VolumeList(
      output.volumes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1TaskDefinitionPlacementConstraint = (
  output: any,
  context: __SerdeContext
): TaskDefinitionPlacementConstraint => {
  let contents: any = {
    __type: "TaskDefinitionPlacementConstraint",
    expression: undefined,
    type: undefined
  };
  if (output.expression !== undefined) {
    contents.expression = output.expression;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1TaskDefinitionPlacementConstraints = (
  output: any,
  context: __SerdeContext
): Array<TaskDefinitionPlacementConstraint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context)
  );
};

const deserializeAws_json1_1TaskOverride = (
  output: any,
  context: __SerdeContext
): TaskOverride => {
  let contents: any = {
    __type: "TaskOverride",
    containerOverrides: undefined,
    cpu: undefined,
    executionRoleArn: undefined,
    inferenceAcceleratorOverrides: undefined,
    memory: undefined,
    taskRoleArn: undefined
  };
  if (output.containerOverrides !== undefined) {
    contents.containerOverrides = deserializeAws_json1_1ContainerOverrides(
      output.containerOverrides,
      context
    );
  }
  if (output.cpu !== undefined) {
    contents.cpu = output.cpu;
  }
  if (output.executionRoleArn !== undefined) {
    contents.executionRoleArn = output.executionRoleArn;
  }
  if (output.inferenceAcceleratorOverrides !== undefined) {
    contents.inferenceAcceleratorOverrides = deserializeAws_json1_1InferenceAcceleratorOverrides(
      output.inferenceAcceleratorOverrides,
      context
    );
  }
  if (output.memory !== undefined) {
    contents.memory = output.memory;
  }
  if (output.taskRoleArn !== undefined) {
    contents.taskRoleArn = output.taskRoleArn;
  }
  return contents;
};

const deserializeAws_json1_1TaskSet = (
  output: any,
  context: __SerdeContext
): TaskSet => {
  let contents: any = {
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
  if (output.capacityProviderStrategy !== undefined) {
    contents.capacityProviderStrategy = deserializeAws_json1_1CapacityProviderStrategy(
      output.capacityProviderStrategy,
      context
    );
  }
  if (output.clusterArn !== undefined) {
    contents.clusterArn = output.clusterArn;
  }
  if (output.computedDesiredCount !== undefined) {
    contents.computedDesiredCount = output.computedDesiredCount;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.externalId !== undefined) {
    contents.externalId = output.externalId;
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.launchType !== undefined) {
    contents.launchType = output.launchType;
  }
  if (output.loadBalancers !== undefined) {
    contents.loadBalancers = deserializeAws_json1_1LoadBalancers(
      output.loadBalancers,
      context
    );
  }
  if (output.networkConfiguration !== undefined) {
    contents.networkConfiguration = deserializeAws_json1_1NetworkConfiguration(
      output.networkConfiguration,
      context
    );
  }
  if (output.pendingCount !== undefined) {
    contents.pendingCount = output.pendingCount;
  }
  if (output.platformVersion !== undefined) {
    contents.platformVersion = output.platformVersion;
  }
  if (output.runningCount !== undefined) {
    contents.runningCount = output.runningCount;
  }
  if (output.scale !== undefined) {
    contents.scale = deserializeAws_json1_1Scale(output.scale, context);
  }
  if (output.serviceArn !== undefined) {
    contents.serviceArn = output.serviceArn;
  }
  if (output.serviceRegistries !== undefined) {
    contents.serviceRegistries = deserializeAws_json1_1ServiceRegistries(
      output.serviceRegistries,
      context
    );
  }
  if (output.stabilityStatus !== undefined) {
    contents.stabilityStatus = output.stabilityStatus;
  }
  if (output.stabilityStatusAt !== undefined) {
    contents.stabilityStatusAt = new Date(
      output.stabilityStatusAt % 1 != 0
        ? Math.round(output.stabilityStatusAt * 1000)
        : output.stabilityStatusAt
    );
  }
  if (output.startedBy !== undefined) {
    contents.startedBy = output.startedBy;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.taskDefinition !== undefined) {
    contents.taskDefinition = output.taskDefinition;
  }
  if (output.taskSetArn !== undefined) {
    contents.taskSetArn = output.taskSetArn;
  }
  if (output.updatedAt !== undefined) {
    contents.updatedAt = new Date(
      output.updatedAt % 1 != 0
        ? Math.round(output.updatedAt * 1000)
        : output.updatedAt
    );
  }
  return contents;
};

const deserializeAws_json1_1TaskSetNotFoundException = (
  output: any,
  context: __SerdeContext
): TaskSetNotFoundException => {
  let contents: any = {
    __type: "TaskSetNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TaskSets = (
  output: any,
  context: __SerdeContext
): Array<TaskSet> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TaskSet(entry, context)
  );
};

const deserializeAws_json1_1Tasks = (
  output: any,
  context: __SerdeContext
): Array<Task> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Task(entry, context)
  );
};

const deserializeAws_json1_1Tmpfs = (
  output: any,
  context: __SerdeContext
): Tmpfs => {
  let contents: any = {
    __type: "Tmpfs",
    containerPath: undefined,
    mountOptions: undefined,
    size: undefined
  };
  if (output.containerPath !== undefined) {
    contents.containerPath = output.containerPath;
  }
  if (output.mountOptions !== undefined) {
    contents.mountOptions = deserializeAws_json1_1StringList(
      output.mountOptions,
      context
    );
  }
  if (output.size !== undefined) {
    contents.size = output.size;
  }
  return contents;
};

const deserializeAws_json1_1TmpfsList = (
  output: any,
  context: __SerdeContext
): Array<Tmpfs> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tmpfs(entry, context)
  );
};

const deserializeAws_json1_1Ulimit = (
  output: any,
  context: __SerdeContext
): Ulimit => {
  let contents: any = {
    __type: "Ulimit",
    hardLimit: undefined,
    name: undefined,
    softLimit: undefined
  };
  if (output.hardLimit !== undefined) {
    contents.hardLimit = output.hardLimit;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.softLimit !== undefined) {
    contents.softLimit = output.softLimit;
  }
  return contents;
};

const deserializeAws_json1_1UlimitList = (
  output: any,
  context: __SerdeContext
): Array<Ulimit> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Ulimit(entry, context)
  );
};

const deserializeAws_json1_1UnsupportedFeatureException = (
  output: any,
  context: __SerdeContext
): UnsupportedFeatureException => {
  let contents: any = {
    __type: "UnsupportedFeatureException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateClusterSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateClusterSettingsResponse => {
  let contents: any = {
    __type: "UpdateClusterSettingsResponse",
    cluster: undefined
  };
  if (output.cluster !== undefined) {
    contents.cluster = deserializeAws_json1_1Cluster(output.cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateContainerAgentResponse = (
  output: any,
  context: __SerdeContext
): UpdateContainerAgentResponse => {
  let contents: any = {
    __type: "UpdateContainerAgentResponse",
    containerInstance: undefined
  };
  if (output.containerInstance !== undefined) {
    contents.containerInstance = deserializeAws_json1_1ContainerInstance(
      output.containerInstance,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateContainerInstancesStateResponse = (
  output: any,
  context: __SerdeContext
): UpdateContainerInstancesStateResponse => {
  let contents: any = {
    __type: "UpdateContainerInstancesStateResponse",
    containerInstances: undefined,
    failures: undefined
  };
  if (output.containerInstances !== undefined) {
    contents.containerInstances = deserializeAws_json1_1ContainerInstances(
      output.containerInstances,
      context
    );
  }
  if (output.failures !== undefined) {
    contents.failures = deserializeAws_json1_1Failures(
      output.failures,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateInProgressException = (
  output: any,
  context: __SerdeContext
): UpdateInProgressException => {
  let contents: any = {
    __type: "UpdateInProgressException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateServicePrimaryTaskSetResponse => {
  let contents: any = {
    __type: "UpdateServicePrimaryTaskSetResponse",
    taskSet: undefined
  };
  if (output.taskSet !== undefined) {
    contents.taskSet = deserializeAws_json1_1TaskSet(output.taskSet, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateServiceResponse = (
  output: any,
  context: __SerdeContext
): UpdateServiceResponse => {
  let contents: any = {
    __type: "UpdateServiceResponse",
    service: undefined
  };
  if (output.service !== undefined) {
    contents.service = deserializeAws_json1_1Service(output.service, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateTaskSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateTaskSetResponse => {
  let contents: any = {
    __type: "UpdateTaskSetResponse",
    taskSet: undefined
  };
  if (output.taskSet !== undefined) {
    contents.taskSet = deserializeAws_json1_1TaskSet(output.taskSet, context);
  }
  return contents;
};

const deserializeAws_json1_1VersionInfo = (
  output: any,
  context: __SerdeContext
): VersionInfo => {
  let contents: any = {
    __type: "VersionInfo",
    agentHash: undefined,
    agentVersion: undefined,
    dockerVersion: undefined
  };
  if (output.agentHash !== undefined) {
    contents.agentHash = output.agentHash;
  }
  if (output.agentVersion !== undefined) {
    contents.agentVersion = output.agentVersion;
  }
  if (output.dockerVersion !== undefined) {
    contents.dockerVersion = output.dockerVersion;
  }
  return contents;
};

const deserializeAws_json1_1Volume = (
  output: any,
  context: __SerdeContext
): Volume => {
  let contents: any = {
    __type: "Volume",
    dockerVolumeConfiguration: undefined,
    host: undefined,
    name: undefined
  };
  if (output.dockerVolumeConfiguration !== undefined) {
    contents.dockerVolumeConfiguration = deserializeAws_json1_1DockerVolumeConfiguration(
      output.dockerVolumeConfiguration,
      context
    );
  }
  if (output.host !== undefined) {
    contents.host = deserializeAws_json1_1HostVolumeProperties(
      output.host,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1VolumeFrom = (
  output: any,
  context: __SerdeContext
): VolumeFrom => {
  let contents: any = {
    __type: "VolumeFrom",
    readOnly: undefined,
    sourceContainer: undefined
  };
  if (output.readOnly !== undefined) {
    contents.readOnly = output.readOnly;
  }
  if (output.sourceContainer !== undefined) {
    contents.sourceContainer = output.sourceContainer;
  }
  return contents;
};

const deserializeAws_json1_1VolumeFromList = (
  output: any,
  context: __SerdeContext
): Array<VolumeFrom> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VolumeFrom(entry, context)
  );
};

const deserializeAws_json1_1VolumeList = (
  output: any,
  context: __SerdeContext
): Array<Volume> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Volume(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
