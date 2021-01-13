import {
  CreateCapacityProviderCommandInput,
  CreateCapacityProviderCommandOutput,
} from "../commands/CreateCapacityProviderCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "../commands/CreateServiceCommand";
import { CreateTaskSetCommandInput, CreateTaskSetCommandOutput } from "../commands/CreateTaskSetCommand";
import {
  DeleteAccountSettingCommandInput,
  DeleteAccountSettingCommandOutput,
} from "../commands/DeleteAccountSettingCommand";
import { DeleteAttributesCommandInput, DeleteAttributesCommandOutput } from "../commands/DeleteAttributesCommand";
import {
  DeleteCapacityProviderCommandInput,
  DeleteCapacityProviderCommandOutput,
} from "../commands/DeleteCapacityProviderCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "../commands/DeleteServiceCommand";
import { DeleteTaskSetCommandInput, DeleteTaskSetCommandOutput } from "../commands/DeleteTaskSetCommand";
import {
  DeregisterContainerInstanceCommandInput,
  DeregisterContainerInstanceCommandOutput,
} from "../commands/DeregisterContainerInstanceCommand";
import {
  DeregisterTaskDefinitionCommandInput,
  DeregisterTaskDefinitionCommandOutput,
} from "../commands/DeregisterTaskDefinitionCommand";
import {
  DescribeCapacityProvidersCommandInput,
  DescribeCapacityProvidersCommandOutput,
} from "../commands/DescribeCapacityProvidersCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "../commands/DescribeClustersCommand";
import {
  DescribeContainerInstancesCommandInput,
  DescribeContainerInstancesCommandOutput,
} from "../commands/DescribeContainerInstancesCommand";
import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "../commands/DescribeServicesCommand";
import {
  DescribeTaskDefinitionCommandInput,
  DescribeTaskDefinitionCommandOutput,
} from "../commands/DescribeTaskDefinitionCommand";
import { DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput } from "../commands/DescribeTaskSetsCommand";
import { DescribeTasksCommandInput, DescribeTasksCommandOutput } from "../commands/DescribeTasksCommand";
import {
  DiscoverPollEndpointCommandInput,
  DiscoverPollEndpointCommandOutput,
} from "../commands/DiscoverPollEndpointCommand";
import {
  ListAccountSettingsCommandInput,
  ListAccountSettingsCommandOutput,
} from "../commands/ListAccountSettingsCommand";
import { ListAttributesCommandInput, ListAttributesCommandOutput } from "../commands/ListAttributesCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import {
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput,
} from "../commands/ListContainerInstancesCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTaskDefinitionFamiliesCommandInput,
  ListTaskDefinitionFamiliesCommandOutput,
} from "../commands/ListTaskDefinitionFamiliesCommand";
import {
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput,
} from "../commands/ListTaskDefinitionsCommand";
import { ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { PutAccountSettingCommandInput, PutAccountSettingCommandOutput } from "../commands/PutAccountSettingCommand";
import {
  PutAccountSettingDefaultCommandInput,
  PutAccountSettingDefaultCommandOutput,
} from "../commands/PutAccountSettingDefaultCommand";
import { PutAttributesCommandInput, PutAttributesCommandOutput } from "../commands/PutAttributesCommand";
import {
  PutClusterCapacityProvidersCommandInput,
  PutClusterCapacityProvidersCommandOutput,
} from "../commands/PutClusterCapacityProvidersCommand";
import {
  RegisterContainerInstanceCommandInput,
  RegisterContainerInstanceCommandOutput,
} from "../commands/RegisterContainerInstanceCommand";
import {
  RegisterTaskDefinitionCommandInput,
  RegisterTaskDefinitionCommandOutput,
} from "../commands/RegisterTaskDefinitionCommand";
import { RunTaskCommandInput, RunTaskCommandOutput } from "../commands/RunTaskCommand";
import { StartTaskCommandInput, StartTaskCommandOutput } from "../commands/StartTaskCommand";
import { StopTaskCommandInput, StopTaskCommandOutput } from "../commands/StopTaskCommand";
import {
  SubmitAttachmentStateChangesCommandInput,
  SubmitAttachmentStateChangesCommandOutput,
} from "../commands/SubmitAttachmentStateChangesCommand";
import {
  SubmitContainerStateChangeCommandInput,
  SubmitContainerStateChangeCommandOutput,
} from "../commands/SubmitContainerStateChangeCommand";
import {
  SubmitTaskStateChangeCommandInput,
  SubmitTaskStateChangeCommandOutput,
} from "../commands/SubmitTaskStateChangeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCapacityProviderCommandInput,
  UpdateCapacityProviderCommandOutput,
} from "../commands/UpdateCapacityProviderCommand";
import {
  UpdateClusterSettingsCommandInput,
  UpdateClusterSettingsCommandOutput,
} from "../commands/UpdateClusterSettingsCommand";
import {
  UpdateContainerAgentCommandInput,
  UpdateContainerAgentCommandOutput,
} from "../commands/UpdateContainerAgentCommand";
import {
  UpdateContainerInstancesStateCommandInput,
  UpdateContainerInstancesStateCommandOutput,
} from "../commands/UpdateContainerInstancesStateCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "../commands/UpdateServiceCommand";
import {
  UpdateServicePrimaryTaskSetCommandInput,
  UpdateServicePrimaryTaskSetCommandOutput,
} from "../commands/UpdateServicePrimaryTaskSetCommand";
import { UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput } from "../commands/UpdateTaskSetCommand";
import {
  AccessDeniedException,
  Attachment,
  AttachmentStateChange,
  Attribute,
  AttributeLimitExceededException,
  AutoScalingGroupProvider,
  AutoScalingGroupProviderUpdate,
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
  DeleteCapacityProviderRequest,
  DeleteCapacityProviderResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteServiceRequest,
  DeleteServiceResponse,
  DeleteTaskSetRequest,
  DeleteTaskSetResponse,
  Deployment,
  DeploymentCircuitBreaker,
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
  EFSAuthorizationConfig,
  EFSVolumeConfiguration,
  EnvironmentFile,
  FSxWindowsFileServerAuthorizationConfig,
  FSxWindowsFileServerVolumeConfiguration,
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
  TaskSetField,
  TaskSetNotFoundException,
  Tmpfs,
  Ulimit,
  UnsupportedFeatureException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateCapacityProviderRequest,
  UpdateCapacityProviderResponse,
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
  VolumeFrom,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateCapacityProviderCommand = async (
  input: CreateCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCapacityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTaskSetCommand = async (
  input: CreateTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateTaskSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTaskSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAccountSettingCommand = async (
  input: DeleteAccountSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteAccountSetting",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAccountSettingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAttributesCommand = async (
  input: DeleteAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCapacityProviderCommand = async (
  input: DeleteCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCapacityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTaskSetCommand = async (
  input: DeleteTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteTaskSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTaskSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterContainerInstanceCommand = async (
  input: DeregisterContainerInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterContainerInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterTaskDefinitionCommand = async (
  input: DeregisterTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterTaskDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCapacityProvidersCommand = async (
  input: DescribeCapacityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCapacityProvidersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeClusters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeContainerInstancesCommand = async (
  input: DescribeContainerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeContainerInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeServicesCommand = async (
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeServices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTaskDefinitionCommand = async (
  input: DescribeTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTaskDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTasksCommand = async (
  input: DescribeTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTaskSetsCommand = async (
  input: DescribeTaskSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTaskSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTaskSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DiscoverPollEndpointCommand = async (
  input: DiscoverPollEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DiscoverPollEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccountSettingsCommand = async (
  input: ListAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListAccountSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccountSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAttributesCommand = async (
  input: ListAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListClusters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListContainerInstancesCommand = async (
  input: ListContainerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListContainerInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListContainerInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListServices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTaskDefinitionFamiliesCommand = async (
  input: ListTaskDefinitionFamiliesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTaskDefinitionFamiliesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTaskDefinitionsCommand = async (
  input: ListTaskDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTaskDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTasksCommand = async (
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAccountSettingCommand = async (
  input: PutAccountSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAccountSetting",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAccountSettingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAccountSettingDefaultCommand = async (
  input: PutAccountSettingDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAccountSettingDefaultRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAttributesCommand = async (
  input: PutAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutClusterCapacityProvidersCommand = async (
  input: PutClusterCapacityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutClusterCapacityProvidersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterContainerInstanceCommand = async (
  input: RegisterContainerInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterContainerInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterTaskDefinitionCommand = async (
  input: RegisterTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterTaskDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RunTaskCommand = async (
  input: RunTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.RunTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RunTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTaskCommand = async (
  input: StartTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.StartTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopTaskCommand = async (
  input: StopTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.StopTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SubmitAttachmentStateChangesCommand = async (
  input: SubmitAttachmentStateChangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SubmitAttachmentStateChangesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SubmitContainerStateChangeCommand = async (
  input: SubmitContainerStateChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SubmitContainerStateChangeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SubmitTaskStateChangeCommand = async (
  input: SubmitTaskStateChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SubmitTaskStateChangeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCapacityProviderCommand = async (
  input: UpdateCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCapacityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateClusterSettingsCommand = async (
  input: UpdateClusterSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateClusterSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateClusterSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateContainerAgentCommand = async (
  input: UpdateContainerAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateContainerAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateContainerInstancesStateCommand = async (
  input: UpdateContainerInstancesStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateContainerInstancesStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServicePrimaryTaskSetCommand = async (
  input: UpdateServicePrimaryTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateServicePrimaryTaskSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTaskSetCommand = async (
  input: UpdateTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateTaskSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTaskSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateCapacityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapacityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCapacityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCapacityProviderResponse(data, context);
  const response: CreateCapacityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCapacityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapacityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ecs#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      response = {
        ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServiceResponse(data, context);
  const response: CreateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      response = {
        ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      response = {
        ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTaskSetResponse(data, context);
  const response: CreateTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      response = {
        ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      response = {
        ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteAccountSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAccountSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAccountSettingResponse(data, context);
  const response: DeleteAccountSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAccountSettingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSettingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAttributesResponse(data, context);
  const response: DeleteAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetNotFoundException":
    case "com.amazonaws.ecs#TargetNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteCapacityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCapacityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCapacityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCapacityProviderResponse(data, context);
  const response: DeleteCapacityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCapacityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCapacityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterContainsContainerInstancesException":
    case "com.amazonaws.ecs#ClusterContainsContainerInstancesException":
      response = {
        ...(await deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterContainsServicesException":
    case "com.amazonaws.ecs#ClusterContainsServicesException":
      response = {
        ...(await deserializeAws_json1_1ClusterContainsServicesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterContainsTasksException":
    case "com.amazonaws.ecs#ClusterContainsTasksException":
      response = {
        ...(await deserializeAws_json1_1ClusterContainsTasksExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      response = {
        ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServiceResponse(data, context);
  const response: DeleteServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTaskSetResponse(data, context);
  const response: DeleteTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaskSetNotFoundException":
    case "com.amazonaws.ecs#TaskSetNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeregisterContainerInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterContainerInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterContainerInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterContainerInstanceResponse(data, context);
  const response: DeregisterContainerInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterContainerInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterContainerInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeregisterTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterTaskDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterTaskDefinitionResponse(data, context);
  const response: DeregisterTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeCapacityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCapacityProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCapacityProvidersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCapacityProvidersResponse(data, context);
  const response: DescribeCapacityProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCapacityProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCapacityProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeContainerInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeContainerInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeContainerInstancesResponse(data, context);
  const response: DescribeContainerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeContainerInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTaskDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTaskDefinitionResponse(data, context);
  const response: DescribeTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTasksResponse(data, context);
  const response: DescribeTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeTaskSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTaskSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTaskSetsResponse(data, context);
  const response: DescribeTaskSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTaskSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DiscoverPollEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverPollEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DiscoverPollEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DiscoverPollEndpointResponse(data, context);
  const response: DiscoverPollEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DiscoverPollEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverPollEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccountSettingsResponse(data, context);
  const response: ListAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAttributesResponse(data, context);
  const response: ListAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListClustersResponse(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListContainerInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListContainerInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListContainerInstancesResponse(data, context);
  const response: ListContainerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListContainerInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTaskDefinitionFamiliesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionFamiliesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTaskDefinitionFamiliesResponse(data, context);
  const response: ListTaskDefinitionFamiliesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionFamiliesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTaskDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTaskDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTaskDefinitionsResponse(data, context);
  const response: ListTaskDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTaskDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTasksResponse(data, context);
  const response: ListTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutAccountSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAccountSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAccountSettingResponse(data, context);
  const response: PutAccountSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAccountSettingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutAccountSettingDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingDefaultCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAccountSettingDefaultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAccountSettingDefaultResponse(data, context);
  const response: PutAccountSettingDefaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAccountSettingDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAttributesResponse(data, context);
  const response: PutAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AttributeLimitExceededException":
    case "com.amazonaws.ecs#AttributeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1AttributeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetNotFoundException":
    case "com.amazonaws.ecs#TargetNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutClusterCapacityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClusterCapacityProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutClusterCapacityProvidersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutClusterCapacityProvidersResponse(data, context);
  const response: PutClusterCapacityProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutClusterCapacityProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClusterCapacityProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.ecs#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      response = {
        ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RegisterContainerInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterContainerInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterContainerInstanceResponse(data, context);
  const response: RegisterContainerInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterContainerInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RegisterTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterTaskDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterTaskDefinitionResponse(data, context);
  const response: RegisterTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RunTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RunTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RunTaskResponse(data, context);
  const response: RunTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RunTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BlockedException":
    case "com.amazonaws.ecs#BlockedException":
      response = {
        ...(await deserializeAws_json1_1BlockedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      response = {
        ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      response = {
        ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTaskResponse(data, context);
  const response: StartTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTaskResponse(data, context);
  const response: StopTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SubmitAttachmentStateChangesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitAttachmentStateChangesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SubmitAttachmentStateChangesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SubmitAttachmentStateChangesResponse(data, context);
  const response: SubmitAttachmentStateChangesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SubmitAttachmentStateChangesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitAttachmentStateChangesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SubmitContainerStateChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitContainerStateChangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SubmitContainerStateChangeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SubmitContainerStateChangeResponse(data, context);
  const response: SubmitContainerStateChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SubmitContainerStateChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitContainerStateChangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SubmitTaskStateChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitTaskStateChangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SubmitTaskStateChangeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SubmitTaskStateChangeResponse(data, context);
  const response: SubmitTaskStateChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SubmitTaskStateChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitTaskStateChangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ecs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ecs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateCapacityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCapacityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCapacityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCapacityProviderResponse(data, context);
  const response: UpdateCapacityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCapacityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCapacityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateClusterSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateClusterSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateClusterSettingsResponse(data, context);
  const response: UpdateClusterSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateClusterSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateContainerAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateContainerAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateContainerAgentResponse(data, context);
  const response: UpdateContainerAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateContainerAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingVersionException":
    case "com.amazonaws.ecs#MissingVersionException":
      response = {
        ...(await deserializeAws_json1_1MissingVersionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoUpdateAvailableException":
    case "com.amazonaws.ecs#NoUpdateAvailableException":
      response = {
        ...(await deserializeAws_json1_1NoUpdateAvailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      response = {
        ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateContainerInstancesStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerInstancesStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateContainerInstancesStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateContainerInstancesStateResponse(data, context);
  const response: UpdateContainerInstancesStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateContainerInstancesStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerInstancesStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServiceResponse(data, context);
  const response: UpdateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      response = {
        ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      response = {
        ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePrimaryTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse(data, context);
  const response: UpdateServicePrimaryTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePrimaryTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaskSetNotFoundException":
    case "com.amazonaws.ecs#TaskSetNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTaskSetResponse(data, context);
  const response: UpdateTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaskSetNotFoundException":
    case "com.amazonaws.ecs#TaskSetNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AttributeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttributeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttributeLimitExceededException(body, context);
  const contents: AttributeLimitExceededException = {
    name: "AttributeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BlockedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlockedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BlockedException(body, context);
  const contents: BlockedException = {
    name: "BlockedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClientException(body, context);
  const contents: ClientException = {
    name: "ClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterContainsContainerInstancesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterContainsContainerInstancesException(body, context);
  const contents: ClusterContainsContainerInstancesException = {
    name: "ClusterContainsContainerInstancesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ClusterContainsServicesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterContainsServicesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterContainsServicesException(body, context);
  const contents: ClusterContainsServicesException = {
    name: "ClusterContainsServicesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ClusterContainsTasksExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterContainsTasksException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterContainsTasksException(body, context);
  const contents: ClusterContainsTasksException = {
    name: "ClusterContainsTasksException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ClusterNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterNotFoundException(body, context);
  const contents: ClusterNotFoundException = {
    name: "ClusterNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MissingVersionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingVersionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MissingVersionException(body, context);
  const contents: MissingVersionException = {
    name: "MissingVersionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NoUpdateAvailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoUpdateAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoUpdateAvailableException(body, context);
  const contents: NoUpdateAvailableException = {
    name: "NoUpdateAvailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformTaskDefinitionIncompatibilityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException(body, context);
  const contents: PlatformTaskDefinitionIncompatibilityException = {
    name: "PlatformTaskDefinitionIncompatibilityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PlatformUnknownExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformUnknownException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PlatformUnknownException(body, context);
  const contents: PlatformUnknownException = {
    name: "PlatformUnknownException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerException(body, context);
  const contents: ServerException = {
    name: "ServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceNotActiveExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceNotActiveException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceNotActiveException(body, context);
  const contents: ServiceNotActiveException = {
    name: "ServiceNotActiveException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceNotFoundException(body, context);
  const contents: ServiceNotFoundException = {
    name: "ServiceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TargetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TargetNotFoundException(body, context);
  const contents: TargetNotFoundException = {
    name: "TargetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TaskSetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskSetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TaskSetNotFoundException(body, context);
  const contents: TaskSetNotFoundException = {
    name: "TaskSetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedFeatureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedFeatureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedFeatureException(body, context);
  const contents: UnsupportedFeatureException = {
    name: "UnsupportedFeatureException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UpdateInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UpdateInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UpdateInProgressException(body, context);
  const contents: UpdateInProgressException = {
    name: "UpdateInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AttachmentStateChange = (input: AttachmentStateChange, context: __SerdeContext): any => {
  return {
    ...(input.attachmentArn !== undefined && input.attachmentArn !== null && { attachmentArn: input.attachmentArn }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  };
};

const serializeAws_json1_1AttachmentStateChanges = (input: AttachmentStateChange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1AttachmentStateChange(entry, context);
    });
};

const serializeAws_json1_1Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.targetId !== undefined && input.targetId !== null && { targetId: input.targetId }),
    ...(input.targetType !== undefined && input.targetType !== null && { targetType: input.targetType }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1Attributes = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Attribute(entry, context);
    });
};

const serializeAws_json1_1AutoScalingGroupProvider = (
  input: AutoScalingGroupProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.autoScalingGroupArn !== undefined &&
      input.autoScalingGroupArn !== null && { autoScalingGroupArn: input.autoScalingGroupArn }),
    ...(input.managedScaling !== undefined &&
      input.managedScaling !== null && {
        managedScaling: serializeAws_json1_1ManagedScaling(input.managedScaling, context),
      }),
    ...(input.managedTerminationProtection !== undefined &&
      input.managedTerminationProtection !== null && {
        managedTerminationProtection: input.managedTerminationProtection,
      }),
  };
};

const serializeAws_json1_1AutoScalingGroupProviderUpdate = (
  input: AutoScalingGroupProviderUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.managedScaling !== undefined &&
      input.managedScaling !== null && {
        managedScaling: serializeAws_json1_1ManagedScaling(input.managedScaling, context),
      }),
    ...(input.managedTerminationProtection !== undefined &&
      input.managedTerminationProtection !== null && {
        managedTerminationProtection: input.managedTerminationProtection,
      }),
  };
};

const serializeAws_json1_1AwsVpcConfiguration = (input: AwsVpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.assignPublicIp !== undefined &&
      input.assignPublicIp !== null && { assignPublicIp: input.assignPublicIp }),
    ...(input.securityGroups !== undefined &&
      input.securityGroups !== null && {
        securityGroups: serializeAws_json1_1StringList(input.securityGroups, context),
      }),
    ...(input.subnets !== undefined &&
      input.subnets !== null && { subnets: serializeAws_json1_1StringList(input.subnets, context) }),
  };
};

const serializeAws_json1_1CapacityProviderFieldList = (
  input: (CapacityProviderField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CapacityProviderStrategy = (
  input: CapacityProviderStrategyItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CapacityProviderStrategyItem(entry, context);
    });
};

const serializeAws_json1_1CapacityProviderStrategyItem = (
  input: CapacityProviderStrategyItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.base !== undefined && input.base !== null && { base: input.base }),
    ...(input.capacityProvider !== undefined &&
      input.capacityProvider !== null && { capacityProvider: input.capacityProvider }),
    ...(input.weight !== undefined && input.weight !== null && { weight: input.weight }),
  };
};

const serializeAws_json1_1ClusterFieldList = (input: (ClusterField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ClusterSetting = (input: ClusterSetting, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1ClusterSettings = (input: ClusterSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ClusterSetting(entry, context);
    });
};

const serializeAws_json1_1CompatibilityList = (input: (Compatibility | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ContainerDefinition = (input: ContainerDefinition, context: __SerdeContext): any => {
  return {
    ...(input.command !== undefined &&
      input.command !== null && { command: serializeAws_json1_1StringList(input.command, context) }),
    ...(input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu }),
    ...(input.dependsOn !== undefined &&
      input.dependsOn !== null && { dependsOn: serializeAws_json1_1ContainerDependencies(input.dependsOn, context) }),
    ...(input.disableNetworking !== undefined &&
      input.disableNetworking !== null && { disableNetworking: input.disableNetworking }),
    ...(input.dnsSearchDomains !== undefined &&
      input.dnsSearchDomains !== null && {
        dnsSearchDomains: serializeAws_json1_1StringList(input.dnsSearchDomains, context),
      }),
    ...(input.dnsServers !== undefined &&
      input.dnsServers !== null && { dnsServers: serializeAws_json1_1StringList(input.dnsServers, context) }),
    ...(input.dockerLabels !== undefined &&
      input.dockerLabels !== null && {
        dockerLabels: serializeAws_json1_1DockerLabelsMap(input.dockerLabels, context),
      }),
    ...(input.dockerSecurityOptions !== undefined &&
      input.dockerSecurityOptions !== null && {
        dockerSecurityOptions: serializeAws_json1_1StringList(input.dockerSecurityOptions, context),
      }),
    ...(input.entryPoint !== undefined &&
      input.entryPoint !== null && { entryPoint: serializeAws_json1_1StringList(input.entryPoint, context) }),
    ...(input.environment !== undefined &&
      input.environment !== null && {
        environment: serializeAws_json1_1EnvironmentVariables(input.environment, context),
      }),
    ...(input.environmentFiles !== undefined &&
      input.environmentFiles !== null && {
        environmentFiles: serializeAws_json1_1EnvironmentFiles(input.environmentFiles, context),
      }),
    ...(input.essential !== undefined && input.essential !== null && { essential: input.essential }),
    ...(input.extraHosts !== undefined &&
      input.extraHosts !== null && { extraHosts: serializeAws_json1_1HostEntryList(input.extraHosts, context) }),
    ...(input.firelensConfiguration !== undefined &&
      input.firelensConfiguration !== null && {
        firelensConfiguration: serializeAws_json1_1FirelensConfiguration(input.firelensConfiguration, context),
      }),
    ...(input.healthCheck !== undefined &&
      input.healthCheck !== null && { healthCheck: serializeAws_json1_1HealthCheck(input.healthCheck, context) }),
    ...(input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname }),
    ...(input.image !== undefined && input.image !== null && { image: input.image }),
    ...(input.interactive !== undefined && input.interactive !== null && { interactive: input.interactive }),
    ...(input.links !== undefined &&
      input.links !== null && { links: serializeAws_json1_1StringList(input.links, context) }),
    ...(input.linuxParameters !== undefined &&
      input.linuxParameters !== null && {
        linuxParameters: serializeAws_json1_1LinuxParameters(input.linuxParameters, context),
      }),
    ...(input.logConfiguration !== undefined &&
      input.logConfiguration !== null && {
        logConfiguration: serializeAws_json1_1LogConfiguration(input.logConfiguration, context),
      }),
    ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
    ...(input.memoryReservation !== undefined &&
      input.memoryReservation !== null && { memoryReservation: input.memoryReservation }),
    ...(input.mountPoints !== undefined &&
      input.mountPoints !== null && { mountPoints: serializeAws_json1_1MountPointList(input.mountPoints, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.portMappings !== undefined &&
      input.portMappings !== null && {
        portMappings: serializeAws_json1_1PortMappingList(input.portMappings, context),
      }),
    ...(input.privileged !== undefined && input.privileged !== null && { privileged: input.privileged }),
    ...(input.pseudoTerminal !== undefined &&
      input.pseudoTerminal !== null && { pseudoTerminal: input.pseudoTerminal }),
    ...(input.readonlyRootFilesystem !== undefined &&
      input.readonlyRootFilesystem !== null && { readonlyRootFilesystem: input.readonlyRootFilesystem }),
    ...(input.repositoryCredentials !== undefined &&
      input.repositoryCredentials !== null && {
        repositoryCredentials: serializeAws_json1_1RepositoryCredentials(input.repositoryCredentials, context),
      }),
    ...(input.resourceRequirements !== undefined &&
      input.resourceRequirements !== null && {
        resourceRequirements: serializeAws_json1_1ResourceRequirements(input.resourceRequirements, context),
      }),
    ...(input.secrets !== undefined &&
      input.secrets !== null && { secrets: serializeAws_json1_1SecretList(input.secrets, context) }),
    ...(input.startTimeout !== undefined && input.startTimeout !== null && { startTimeout: input.startTimeout }),
    ...(input.stopTimeout !== undefined && input.stopTimeout !== null && { stopTimeout: input.stopTimeout }),
    ...(input.systemControls !== undefined &&
      input.systemControls !== null && {
        systemControls: serializeAws_json1_1SystemControls(input.systemControls, context),
      }),
    ...(input.ulimits !== undefined &&
      input.ulimits !== null && { ulimits: serializeAws_json1_1UlimitList(input.ulimits, context) }),
    ...(input.user !== undefined && input.user !== null && { user: input.user }),
    ...(input.volumesFrom !== undefined &&
      input.volumesFrom !== null && { volumesFrom: serializeAws_json1_1VolumeFromList(input.volumesFrom, context) }),
    ...(input.workingDirectory !== undefined &&
      input.workingDirectory !== null && { workingDirectory: input.workingDirectory }),
  };
};

const serializeAws_json1_1ContainerDefinitions = (input: ContainerDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ContainerDefinition(entry, context);
    });
};

const serializeAws_json1_1ContainerDependencies = (input: ContainerDependency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ContainerDependency(entry, context);
    });
};

const serializeAws_json1_1ContainerDependency = (input: ContainerDependency, context: __SerdeContext): any => {
  return {
    ...(input.condition !== undefined && input.condition !== null && { condition: input.condition }),
    ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
  };
};

const serializeAws_json1_1ContainerInstanceFieldList = (
  input: (ContainerInstanceField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ContainerOverride = (input: ContainerOverride, context: __SerdeContext): any => {
  return {
    ...(input.command !== undefined &&
      input.command !== null && { command: serializeAws_json1_1StringList(input.command, context) }),
    ...(input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu }),
    ...(input.environment !== undefined &&
      input.environment !== null && {
        environment: serializeAws_json1_1EnvironmentVariables(input.environment, context),
      }),
    ...(input.environmentFiles !== undefined &&
      input.environmentFiles !== null && {
        environmentFiles: serializeAws_json1_1EnvironmentFiles(input.environmentFiles, context),
      }),
    ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
    ...(input.memoryReservation !== undefined &&
      input.memoryReservation !== null && { memoryReservation: input.memoryReservation }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.resourceRequirements !== undefined &&
      input.resourceRequirements !== null && {
        resourceRequirements: serializeAws_json1_1ResourceRequirements(input.resourceRequirements, context),
      }),
  };
};

const serializeAws_json1_1ContainerOverrides = (input: ContainerOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ContainerOverride(entry, context);
    });
};

const serializeAws_json1_1ContainerStateChange = (input: ContainerStateChange, context: __SerdeContext): any => {
  return {
    ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
    ...(input.exitCode !== undefined && input.exitCode !== null && { exitCode: input.exitCode }),
    ...(input.imageDigest !== undefined && input.imageDigest !== null && { imageDigest: input.imageDigest }),
    ...(input.networkBindings !== undefined &&
      input.networkBindings !== null && {
        networkBindings: serializeAws_json1_1NetworkBindings(input.networkBindings, context),
      }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
    ...(input.runtimeId !== undefined && input.runtimeId !== null && { runtimeId: input.runtimeId }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  };
};

const serializeAws_json1_1ContainerStateChanges = (input: ContainerStateChange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ContainerStateChange(entry, context);
    });
};

const serializeAws_json1_1CreateCapacityProviderRequest = (
  input: CreateCapacityProviderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.autoScalingGroupProvider !== undefined &&
      input.autoScalingGroupProvider !== null && {
        autoScalingGroupProvider: serializeAws_json1_1AutoScalingGroupProvider(input.autoScalingGroupProvider, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviders !== undefined &&
      input.capacityProviders !== null && {
        capacityProviders: serializeAws_json1_1StringList(input.capacityProviders, context),
      }),
    ...(input.clusterName !== undefined && input.clusterName !== null && { clusterName: input.clusterName }),
    ...(input.defaultCapacityProviderStrategy !== undefined &&
      input.defaultCapacityProviderStrategy !== null && {
        defaultCapacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(
          input.defaultCapacityProviderStrategy,
          context
        ),
      }),
    ...(input.settings !== undefined &&
      input.settings !== null && { settings: serializeAws_json1_1ClusterSettings(input.settings, context) }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateServiceRequest = (input: CreateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviderStrategy !== undefined &&
      input.capacityProviderStrategy !== null && {
        capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
      }),
    ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.deploymentConfiguration !== undefined &&
      input.deploymentConfiguration !== null && {
        deploymentConfiguration: serializeAws_json1_1DeploymentConfiguration(input.deploymentConfiguration, context),
      }),
    ...(input.deploymentController !== undefined &&
      input.deploymentController !== null && {
        deploymentController: serializeAws_json1_1DeploymentController(input.deploymentController, context),
      }),
    ...(input.desiredCount !== undefined && input.desiredCount !== null && { desiredCount: input.desiredCount }),
    ...(input.enableECSManagedTags !== undefined &&
      input.enableECSManagedTags !== null && { enableECSManagedTags: input.enableECSManagedTags }),
    ...(input.healthCheckGracePeriodSeconds !== undefined &&
      input.healthCheckGracePeriodSeconds !== null && {
        healthCheckGracePeriodSeconds: input.healthCheckGracePeriodSeconds,
      }),
    ...(input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType }),
    ...(input.loadBalancers !== undefined &&
      input.loadBalancers !== null && {
        loadBalancers: serializeAws_json1_1LoadBalancers(input.loadBalancers, context),
      }),
    ...(input.networkConfiguration !== undefined &&
      input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
      }),
    ...(input.placementConstraints !== undefined &&
      input.placementConstraints !== null && {
        placementConstraints: serializeAws_json1_1PlacementConstraints(input.placementConstraints, context),
      }),
    ...(input.placementStrategy !== undefined &&
      input.placementStrategy !== null && {
        placementStrategy: serializeAws_json1_1PlacementStrategies(input.placementStrategy, context),
      }),
    ...(input.platformVersion !== undefined &&
      input.platformVersion !== null && { platformVersion: input.platformVersion }),
    ...(input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags }),
    ...(input.role !== undefined && input.role !== null && { role: input.role }),
    ...(input.schedulingStrategy !== undefined &&
      input.schedulingStrategy !== null && { schedulingStrategy: input.schedulingStrategy }),
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    ...(input.serviceRegistries !== undefined &&
      input.serviceRegistries !== null && {
        serviceRegistries: serializeAws_json1_1ServiceRegistries(input.serviceRegistries, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    ...(input.taskDefinition !== undefined &&
      input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
  };
};

const serializeAws_json1_1CreateTaskSetRequest = (input: CreateTaskSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviderStrategy !== undefined &&
      input.capacityProviderStrategy !== null && {
        capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
      }),
    ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.externalId !== undefined && input.externalId !== null && { externalId: input.externalId }),
    ...(input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType }),
    ...(input.loadBalancers !== undefined &&
      input.loadBalancers !== null && {
        loadBalancers: serializeAws_json1_1LoadBalancers(input.loadBalancers, context),
      }),
    ...(input.networkConfiguration !== undefined &&
      input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
      }),
    ...(input.platformVersion !== undefined &&
      input.platformVersion !== null && { platformVersion: input.platformVersion }),
    ...(input.scale !== undefined &&
      input.scale !== null && { scale: serializeAws_json1_1Scale(input.scale, context) }),
    ...(input.service !== undefined && input.service !== null && { service: input.service }),
    ...(input.serviceRegistries !== undefined &&
      input.serviceRegistries !== null && {
        serviceRegistries: serializeAws_json1_1ServiceRegistries(input.serviceRegistries, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    ...(input.taskDefinition !== undefined &&
      input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
  };
};

const serializeAws_json1_1DeleteAccountSettingRequest = (
  input: DeleteAccountSettingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn }),
  };
};

const serializeAws_json1_1DeleteAttributesRequest = (input: DeleteAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributes !== undefined &&
      input.attributes !== null && { attributes: serializeAws_json1_1Attributes(input.attributes, context) }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
  };
};

const serializeAws_json1_1DeleteCapacityProviderRequest = (
  input: DeleteCapacityProviderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProvider !== undefined &&
      input.capacityProvider !== null && { capacityProvider: input.capacityProvider }),
  };
};

const serializeAws_json1_1DeleteClusterRequest = (input: DeleteClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
  };
};

const serializeAws_json1_1DeleteServiceRequest = (input: DeleteServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.force !== undefined && input.force !== null && { force: input.force }),
    ...(input.service !== undefined && input.service !== null && { service: input.service }),
  };
};

const serializeAws_json1_1DeleteTaskSetRequest = (input: DeleteTaskSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.force !== undefined && input.force !== null && { force: input.force }),
    ...(input.service !== undefined && input.service !== null && { service: input.service }),
    ...(input.taskSet !== undefined && input.taskSet !== null && { taskSet: input.taskSet }),
  };
};

const serializeAws_json1_1DeploymentCircuitBreaker = (
  input: DeploymentCircuitBreaker,
  context: __SerdeContext
): any => {
  return {
    ...(input.enable !== undefined && input.enable !== null && { enable: input.enable }),
    ...(input.rollback !== undefined && input.rollback !== null && { rollback: input.rollback }),
  };
};

const serializeAws_json1_1DeploymentConfiguration = (input: DeploymentConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.deploymentCircuitBreaker !== undefined &&
      input.deploymentCircuitBreaker !== null && {
        deploymentCircuitBreaker: serializeAws_json1_1DeploymentCircuitBreaker(input.deploymentCircuitBreaker, context),
      }),
    ...(input.maximumPercent !== undefined &&
      input.maximumPercent !== null && { maximumPercent: input.maximumPercent }),
    ...(input.minimumHealthyPercent !== undefined &&
      input.minimumHealthyPercent !== null && { minimumHealthyPercent: input.minimumHealthyPercent }),
  };
};

const serializeAws_json1_1DeploymentController = (input: DeploymentController, context: __SerdeContext): any => {
  return {
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1DeregisterContainerInstanceRequest = (
  input: DeregisterContainerInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.containerInstance !== undefined &&
      input.containerInstance !== null && { containerInstance: input.containerInstance }),
    ...(input.force !== undefined && input.force !== null && { force: input.force }),
  };
};

const serializeAws_json1_1DeregisterTaskDefinitionRequest = (
  input: DeregisterTaskDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.taskDefinition !== undefined &&
      input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
  };
};

const serializeAws_json1_1DescribeCapacityProvidersRequest = (
  input: DescribeCapacityProvidersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProviders !== undefined &&
      input.capacityProviders !== null && {
        capacityProviders: serializeAws_json1_1StringList(input.capacityProviders, context),
      }),
    ...(input.include !== undefined &&
      input.include !== null && { include: serializeAws_json1_1CapacityProviderFieldList(input.include, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeClustersRequest = (input: DescribeClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.clusters !== undefined &&
      input.clusters !== null && { clusters: serializeAws_json1_1StringList(input.clusters, context) }),
    ...(input.include !== undefined &&
      input.include !== null && { include: serializeAws_json1_1ClusterFieldList(input.include, context) }),
  };
};

const serializeAws_json1_1DescribeContainerInstancesRequest = (
  input: DescribeContainerInstancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.containerInstances !== undefined &&
      input.containerInstances !== null && {
        containerInstances: serializeAws_json1_1StringList(input.containerInstances, context),
      }),
    ...(input.include !== undefined &&
      input.include !== null && { include: serializeAws_json1_1ContainerInstanceFieldList(input.include, context) }),
  };
};

const serializeAws_json1_1DescribeServicesRequest = (input: DescribeServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.include !== undefined &&
      input.include !== null && { include: serializeAws_json1_1ServiceFieldList(input.include, context) }),
    ...(input.services !== undefined &&
      input.services !== null && { services: serializeAws_json1_1StringList(input.services, context) }),
  };
};

const serializeAws_json1_1DescribeTaskDefinitionRequest = (
  input: DescribeTaskDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.include !== undefined &&
      input.include !== null && { include: serializeAws_json1_1TaskDefinitionFieldList(input.include, context) }),
    ...(input.taskDefinition !== undefined &&
      input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
  };
};

const serializeAws_json1_1DescribeTaskSetsRequest = (input: DescribeTaskSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.include !== undefined &&
      input.include !== null && { include: serializeAws_json1_1TaskSetFieldList(input.include, context) }),
    ...(input.service !== undefined && input.service !== null && { service: input.service }),
    ...(input.taskSets !== undefined &&
      input.taskSets !== null && { taskSets: serializeAws_json1_1StringList(input.taskSets, context) }),
  };
};

const serializeAws_json1_1DescribeTasksRequest = (input: DescribeTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.include !== undefined &&
      input.include !== null && { include: serializeAws_json1_1TaskFieldList(input.include, context) }),
    ...(input.tasks !== undefined &&
      input.tasks !== null && { tasks: serializeAws_json1_1StringList(input.tasks, context) }),
  };
};

const serializeAws_json1_1Device = (input: Device, context: __SerdeContext): any => {
  return {
    ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
    ...(input.hostPath !== undefined && input.hostPath !== null && { hostPath: input.hostPath }),
    ...(input.permissions !== undefined &&
      input.permissions !== null && {
        permissions: serializeAws_json1_1DeviceCgroupPermissions(input.permissions, context),
      }),
  };
};

const serializeAws_json1_1DeviceCgroupPermissions = (
  input: (DeviceCgroupPermission | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DevicesList = (input: Device[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Device(entry, context);
    });
};

const serializeAws_json1_1DiscoverPollEndpointRequest = (
  input: DiscoverPollEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.containerInstance !== undefined &&
      input.containerInstance !== null && { containerInstance: input.containerInstance }),
  };
};

const serializeAws_json1_1DockerLabelsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1DockerVolumeConfiguration = (
  input: DockerVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.autoprovision !== undefined && input.autoprovision !== null && { autoprovision: input.autoprovision }),
    ...(input.driver !== undefined && input.driver !== null && { driver: input.driver }),
    ...(input.driverOpts !== undefined &&
      input.driverOpts !== null && { driverOpts: serializeAws_json1_1StringMap(input.driverOpts, context) }),
    ...(input.labels !== undefined &&
      input.labels !== null && { labels: serializeAws_json1_1StringMap(input.labels, context) }),
    ...(input.scope !== undefined && input.scope !== null && { scope: input.scope }),
  };
};

const serializeAws_json1_1EFSAuthorizationConfig = (input: EFSAuthorizationConfig, context: __SerdeContext): any => {
  return {
    ...(input.accessPointId !== undefined && input.accessPointId !== null && { accessPointId: input.accessPointId }),
    ...(input.iam !== undefined && input.iam !== null && { iam: input.iam }),
  };
};

const serializeAws_json1_1EFSVolumeConfiguration = (input: EFSVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.authorizationConfig !== undefined &&
      input.authorizationConfig !== null && {
        authorizationConfig: serializeAws_json1_1EFSAuthorizationConfig(input.authorizationConfig, context),
      }),
    ...(input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId }),
    ...(input.rootDirectory !== undefined && input.rootDirectory !== null && { rootDirectory: input.rootDirectory }),
    ...(input.transitEncryption !== undefined &&
      input.transitEncryption !== null && { transitEncryption: input.transitEncryption }),
    ...(input.transitEncryptionPort !== undefined &&
      input.transitEncryptionPort !== null && { transitEncryptionPort: input.transitEncryptionPort }),
  };
};

const serializeAws_json1_1EnvironmentFile = (input: EnvironmentFile, context: __SerdeContext): any => {
  return {
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1EnvironmentFiles = (input: EnvironmentFile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EnvironmentFile(entry, context);
    });
};

const serializeAws_json1_1EnvironmentVariables = (input: KeyValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1KeyValuePair(entry, context);
    });
};

const serializeAws_json1_1FirelensConfiguration = (input: FirelensConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.options !== undefined &&
      input.options !== null && {
        options: serializeAws_json1_1FirelensConfigurationOptionsMap(input.options, context),
      }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1FirelensConfigurationOptionsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1FSxWindowsFileServerAuthorizationConfig = (
  input: FSxWindowsFileServerAuthorizationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.credentialsParameter !== undefined &&
      input.credentialsParameter !== null && { credentialsParameter: input.credentialsParameter }),
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
  };
};

const serializeAws_json1_1FSxWindowsFileServerVolumeConfiguration = (
  input: FSxWindowsFileServerVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorizationConfig !== undefined &&
      input.authorizationConfig !== null && {
        authorizationConfig: serializeAws_json1_1FSxWindowsFileServerAuthorizationConfig(
          input.authorizationConfig,
          context
        ),
      }),
    ...(input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId }),
    ...(input.rootDirectory !== undefined && input.rootDirectory !== null && { rootDirectory: input.rootDirectory }),
  };
};

const serializeAws_json1_1HealthCheck = (input: HealthCheck, context: __SerdeContext): any => {
  return {
    ...(input.command !== undefined &&
      input.command !== null && { command: serializeAws_json1_1StringList(input.command, context) }),
    ...(input.interval !== undefined && input.interval !== null && { interval: input.interval }),
    ...(input.retries !== undefined && input.retries !== null && { retries: input.retries }),
    ...(input.startPeriod !== undefined && input.startPeriod !== null && { startPeriod: input.startPeriod }),
    ...(input.timeout !== undefined && input.timeout !== null && { timeout: input.timeout }),
  };
};

const serializeAws_json1_1HostEntry = (input: HostEntry, context: __SerdeContext): any => {
  return {
    ...(input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname }),
    ...(input.ipAddress !== undefined && input.ipAddress !== null && { ipAddress: input.ipAddress }),
  };
};

const serializeAws_json1_1HostEntryList = (input: HostEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1HostEntry(entry, context);
    });
};

const serializeAws_json1_1HostVolumeProperties = (input: HostVolumeProperties, context: __SerdeContext): any => {
  return {
    ...(input.sourcePath !== undefined && input.sourcePath !== null && { sourcePath: input.sourcePath }),
  };
};

const serializeAws_json1_1InferenceAccelerator = (input: InferenceAccelerator, context: __SerdeContext): any => {
  return {
    ...(input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName }),
    ...(input.deviceType !== undefined && input.deviceType !== null && { deviceType: input.deviceType }),
  };
};

const serializeAws_json1_1InferenceAcceleratorOverride = (
  input: InferenceAcceleratorOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName }),
    ...(input.deviceType !== undefined && input.deviceType !== null && { deviceType: input.deviceType }),
  };
};

const serializeAws_json1_1InferenceAcceleratorOverrides = (
  input: InferenceAcceleratorOverride[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1InferenceAcceleratorOverride(entry, context);
    });
};

const serializeAws_json1_1InferenceAccelerators = (input: InferenceAccelerator[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1InferenceAccelerator(entry, context);
    });
};

const serializeAws_json1_1KernelCapabilities = (input: KernelCapabilities, context: __SerdeContext): any => {
  return {
    ...(input.add !== undefined && input.add !== null && { add: serializeAws_json1_1StringList(input.add, context) }),
    ...(input.drop !== undefined &&
      input.drop !== null && { drop: serializeAws_json1_1StringList(input.drop, context) }),
  };
};

const serializeAws_json1_1KeyValuePair = (input: KeyValuePair, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1LinuxParameters = (input: LinuxParameters, context: __SerdeContext): any => {
  return {
    ...(input.capabilities !== undefined &&
      input.capabilities !== null && {
        capabilities: serializeAws_json1_1KernelCapabilities(input.capabilities, context),
      }),
    ...(input.devices !== undefined &&
      input.devices !== null && { devices: serializeAws_json1_1DevicesList(input.devices, context) }),
    ...(input.initProcessEnabled !== undefined &&
      input.initProcessEnabled !== null && { initProcessEnabled: input.initProcessEnabled }),
    ...(input.maxSwap !== undefined && input.maxSwap !== null && { maxSwap: input.maxSwap }),
    ...(input.sharedMemorySize !== undefined &&
      input.sharedMemorySize !== null && { sharedMemorySize: input.sharedMemorySize }),
    ...(input.swappiness !== undefined && input.swappiness !== null && { swappiness: input.swappiness }),
    ...(input.tmpfs !== undefined &&
      input.tmpfs !== null && { tmpfs: serializeAws_json1_1TmpfsList(input.tmpfs, context) }),
  };
};

const serializeAws_json1_1ListAccountSettingsRequest = (
  input: ListAccountSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.effectiveSettings !== undefined &&
      input.effectiveSettings !== null && { effectiveSettings: input.effectiveSettings }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1ListAttributesRequest = (input: ListAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
    ...(input.attributeValue !== undefined &&
      input.attributeValue !== null && { attributeValue: input.attributeValue }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.targetType !== undefined && input.targetType !== null && { targetType: input.targetType }),
  };
};

const serializeAws_json1_1ListClustersRequest = (input: ListClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListContainerInstancesRequest = (
  input: ListContainerInstancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.filter !== undefined && input.filter !== null && { filter: input.filter }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  };
};

const serializeAws_json1_1ListServicesRequest = (input: ListServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.schedulingStrategy !== undefined &&
      input.schedulingStrategy !== null && { schedulingStrategy: input.schedulingStrategy }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1ListTaskDefinitionFamiliesRequest = (
  input: ListTaskDefinitionFamiliesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.familyPrefix !== undefined && input.familyPrefix !== null && { familyPrefix: input.familyPrefix }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  };
};

const serializeAws_json1_1ListTaskDefinitionsRequest = (
  input: ListTaskDefinitionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.familyPrefix !== undefined && input.familyPrefix !== null && { familyPrefix: input.familyPrefix }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sort !== undefined && input.sort !== null && { sort: input.sort }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  };
};

const serializeAws_json1_1ListTasksRequest = (input: ListTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.containerInstance !== undefined &&
      input.containerInstance !== null && { containerInstance: input.containerInstance }),
    ...(input.desiredStatus !== undefined && input.desiredStatus !== null && { desiredStatus: input.desiredStatus }),
    ...(input.family !== undefined && input.family !== null && { family: input.family }),
    ...(input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    ...(input.startedBy !== undefined && input.startedBy !== null && { startedBy: input.startedBy }),
  };
};

const serializeAws_json1_1LoadBalancer = (input: LoadBalancer, context: __SerdeContext): any => {
  return {
    ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
    ...(input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort }),
    ...(input.loadBalancerName !== undefined &&
      input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
    ...(input.targetGroupArn !== undefined &&
      input.targetGroupArn !== null && { targetGroupArn: input.targetGroupArn }),
  };
};

const serializeAws_json1_1LoadBalancers = (input: LoadBalancer[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1LoadBalancer(entry, context);
    });
};

const serializeAws_json1_1LogConfiguration = (input: LogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.logDriver !== undefined && input.logDriver !== null && { logDriver: input.logDriver }),
    ...(input.options !== undefined &&
      input.options !== null && { options: serializeAws_json1_1LogConfigurationOptionsMap(input.options, context) }),
    ...(input.secretOptions !== undefined &&
      input.secretOptions !== null && { secretOptions: serializeAws_json1_1SecretList(input.secretOptions, context) }),
  };
};

const serializeAws_json1_1LogConfigurationOptionsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1ManagedScaling = (input: ManagedScaling, context: __SerdeContext): any => {
  return {
    ...(input.instanceWarmupPeriod !== undefined &&
      input.instanceWarmupPeriod !== null && { instanceWarmupPeriod: input.instanceWarmupPeriod }),
    ...(input.maximumScalingStepSize !== undefined &&
      input.maximumScalingStepSize !== null && { maximumScalingStepSize: input.maximumScalingStepSize }),
    ...(input.minimumScalingStepSize !== undefined &&
      input.minimumScalingStepSize !== null && { minimumScalingStepSize: input.minimumScalingStepSize }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
    ...(input.targetCapacity !== undefined &&
      input.targetCapacity !== null && { targetCapacity: input.targetCapacity }),
  };
};

const serializeAws_json1_1MountPoint = (input: MountPoint, context: __SerdeContext): any => {
  return {
    ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
    ...(input.readOnly !== undefined && input.readOnly !== null && { readOnly: input.readOnly }),
    ...(input.sourceVolume !== undefined && input.sourceVolume !== null && { sourceVolume: input.sourceVolume }),
  };
};

const serializeAws_json1_1MountPointList = (input: MountPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MountPoint(entry, context);
    });
};

const serializeAws_json1_1NetworkBinding = (input: NetworkBinding, context: __SerdeContext): any => {
  return {
    ...(input.bindIP !== undefined && input.bindIP !== null && { bindIP: input.bindIP }),
    ...(input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort }),
    ...(input.hostPort !== undefined && input.hostPort !== null && { hostPort: input.hostPort }),
    ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
  };
};

const serializeAws_json1_1NetworkBindings = (input: NetworkBinding[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1NetworkBinding(entry, context);
    });
};

const serializeAws_json1_1NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.awsvpcConfiguration !== undefined &&
      input.awsvpcConfiguration !== null && {
        awsvpcConfiguration: serializeAws_json1_1AwsVpcConfiguration(input.awsvpcConfiguration, context),
      }),
  };
};

const serializeAws_json1_1PlacementConstraint = (input: PlacementConstraint, context: __SerdeContext): any => {
  return {
    ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1PlacementConstraints = (input: PlacementConstraint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PlacementConstraint(entry, context);
    });
};

const serializeAws_json1_1PlacementStrategies = (input: PlacementStrategy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PlacementStrategy(entry, context);
    });
};

const serializeAws_json1_1PlacementStrategy = (input: PlacementStrategy, context: __SerdeContext): any => {
  return {
    ...(input.field !== undefined && input.field !== null && { field: input.field }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1PlatformDevice = (input: PlatformDevice, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1PlatformDevices = (input: PlatformDevice[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PlatformDevice(entry, context);
    });
};

const serializeAws_json1_1PortMapping = (input: PortMapping, context: __SerdeContext): any => {
  return {
    ...(input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort }),
    ...(input.hostPort !== undefined && input.hostPort !== null && { hostPort: input.hostPort }),
    ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
  };
};

const serializeAws_json1_1PortMappingList = (input: PortMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PortMapping(entry, context);
    });
};

const serializeAws_json1_1ProxyConfiguration = (input: ProxyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
    ...(input.properties !== undefined &&
      input.properties !== null && {
        properties: serializeAws_json1_1ProxyConfigurationProperties(input.properties, context),
      }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1ProxyConfigurationProperties = (input: KeyValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1KeyValuePair(entry, context);
    });
};

const serializeAws_json1_1PutAccountSettingDefaultRequest = (
  input: PutAccountSettingDefaultRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1PutAccountSettingRequest = (
  input: PutAccountSettingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1PutAttributesRequest = (input: PutAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributes !== undefined &&
      input.attributes !== null && { attributes: serializeAws_json1_1Attributes(input.attributes, context) }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
  };
};

const serializeAws_json1_1PutClusterCapacityProvidersRequest = (
  input: PutClusterCapacityProvidersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProviders !== undefined &&
      input.capacityProviders !== null && {
        capacityProviders: serializeAws_json1_1StringList(input.capacityProviders, context),
      }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.defaultCapacityProviderStrategy !== undefined &&
      input.defaultCapacityProviderStrategy !== null && {
        defaultCapacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(
          input.defaultCapacityProviderStrategy,
          context
        ),
      }),
  };
};

const serializeAws_json1_1RegisterContainerInstanceRequest = (
  input: RegisterContainerInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes !== undefined &&
      input.attributes !== null && { attributes: serializeAws_json1_1Attributes(input.attributes, context) }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.containerInstanceArn !== undefined &&
      input.containerInstanceArn !== null && { containerInstanceArn: input.containerInstanceArn }),
    ...(input.instanceIdentityDocument !== undefined &&
      input.instanceIdentityDocument !== null && { instanceIdentityDocument: input.instanceIdentityDocument }),
    ...(input.instanceIdentityDocumentSignature !== undefined &&
      input.instanceIdentityDocumentSignature !== null && {
        instanceIdentityDocumentSignature: input.instanceIdentityDocumentSignature,
      }),
    ...(input.platformDevices !== undefined &&
      input.platformDevices !== null && {
        platformDevices: serializeAws_json1_1PlatformDevices(input.platformDevices, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    ...(input.totalResources !== undefined &&
      input.totalResources !== null && {
        totalResources: serializeAws_json1_1Resources(input.totalResources, context),
      }),
    ...(input.versionInfo !== undefined &&
      input.versionInfo !== null && { versionInfo: serializeAws_json1_1VersionInfo(input.versionInfo, context) }),
  };
};

const serializeAws_json1_1RegisterTaskDefinitionRequest = (
  input: RegisterTaskDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerDefinitions !== undefined &&
      input.containerDefinitions !== null && {
        containerDefinitions: serializeAws_json1_1ContainerDefinitions(input.containerDefinitions, context),
      }),
    ...(input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu }),
    ...(input.executionRoleArn !== undefined &&
      input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
    ...(input.family !== undefined && input.family !== null && { family: input.family }),
    ...(input.inferenceAccelerators !== undefined &&
      input.inferenceAccelerators !== null && {
        inferenceAccelerators: serializeAws_json1_1InferenceAccelerators(input.inferenceAccelerators, context),
      }),
    ...(input.ipcMode !== undefined && input.ipcMode !== null && { ipcMode: input.ipcMode }),
    ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
    ...(input.networkMode !== undefined && input.networkMode !== null && { networkMode: input.networkMode }),
    ...(input.pidMode !== undefined && input.pidMode !== null && { pidMode: input.pidMode }),
    ...(input.placementConstraints !== undefined &&
      input.placementConstraints !== null && {
        placementConstraints: serializeAws_json1_1TaskDefinitionPlacementConstraints(
          input.placementConstraints,
          context
        ),
      }),
    ...(input.proxyConfiguration !== undefined &&
      input.proxyConfiguration !== null && {
        proxyConfiguration: serializeAws_json1_1ProxyConfiguration(input.proxyConfiguration, context),
      }),
    ...(input.requiresCompatibilities !== undefined &&
      input.requiresCompatibilities !== null && {
        requiresCompatibilities: serializeAws_json1_1CompatibilityList(input.requiresCompatibilities, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    ...(input.taskRoleArn !== undefined && input.taskRoleArn !== null && { taskRoleArn: input.taskRoleArn }),
    ...(input.volumes !== undefined &&
      input.volumes !== null && { volumes: serializeAws_json1_1VolumeList(input.volumes, context) }),
  };
};

const serializeAws_json1_1RepositoryCredentials = (input: RepositoryCredentials, context: __SerdeContext): any => {
  return {
    ...(input.credentialsParameter !== undefined &&
      input.credentialsParameter !== null && { credentialsParameter: input.credentialsParameter }),
  };
};

const serializeAws_json1_1Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.doubleValue !== undefined && input.doubleValue !== null && { doubleValue: input.doubleValue }),
    ...(input.integerValue !== undefined && input.integerValue !== null && { integerValue: input.integerValue }),
    ...(input.longValue !== undefined && input.longValue !== null && { longValue: input.longValue }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.stringSetValue !== undefined &&
      input.stringSetValue !== null && {
        stringSetValue: serializeAws_json1_1StringList(input.stringSetValue, context),
      }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1ResourceRequirement = (input: ResourceRequirement, context: __SerdeContext): any => {
  return {
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1ResourceRequirements = (input: ResourceRequirement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ResourceRequirement(entry, context);
    });
};

const serializeAws_json1_1Resources = (input: Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Resource(entry, context);
    });
};

const serializeAws_json1_1RunTaskRequest = (input: RunTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviderStrategy !== undefined &&
      input.capacityProviderStrategy !== null && {
        capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
      }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.count !== undefined && input.count !== null && { count: input.count }),
    ...(input.enableECSManagedTags !== undefined &&
      input.enableECSManagedTags !== null && { enableECSManagedTags: input.enableECSManagedTags }),
    ...(input.group !== undefined && input.group !== null && { group: input.group }),
    ...(input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType }),
    ...(input.networkConfiguration !== undefined &&
      input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
      }),
    ...(input.overrides !== undefined &&
      input.overrides !== null && { overrides: serializeAws_json1_1TaskOverride(input.overrides, context) }),
    ...(input.placementConstraints !== undefined &&
      input.placementConstraints !== null && {
        placementConstraints: serializeAws_json1_1PlacementConstraints(input.placementConstraints, context),
      }),
    ...(input.placementStrategy !== undefined &&
      input.placementStrategy !== null && {
        placementStrategy: serializeAws_json1_1PlacementStrategies(input.placementStrategy, context),
      }),
    ...(input.platformVersion !== undefined &&
      input.platformVersion !== null && { platformVersion: input.platformVersion }),
    ...(input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags }),
    ...(input.referenceId !== undefined && input.referenceId !== null && { referenceId: input.referenceId }),
    ...(input.startedBy !== undefined && input.startedBy !== null && { startedBy: input.startedBy }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    ...(input.taskDefinition !== undefined &&
      input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
  };
};

const serializeAws_json1_1Scale = (input: Scale, context: __SerdeContext): any => {
  return {
    ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1Secret = (input: Secret, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.valueFrom !== undefined && input.valueFrom !== null && { valueFrom: input.valueFrom }),
  };
};

const serializeAws_json1_1SecretList = (input: Secret[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Secret(entry, context);
    });
};

const serializeAws_json1_1ServiceFieldList = (input: (ServiceField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ServiceRegistries = (input: ServiceRegistry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ServiceRegistry(entry, context);
    });
};

const serializeAws_json1_1ServiceRegistry = (input: ServiceRegistry, context: __SerdeContext): any => {
  return {
    ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
    ...(input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort }),
    ...(input.port !== undefined && input.port !== null && { port: input.port }),
    ...(input.registryArn !== undefined && input.registryArn !== null && { registryArn: input.registryArn }),
  };
};

const serializeAws_json1_1StartTaskRequest = (input: StartTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.containerInstances !== undefined &&
      input.containerInstances !== null && {
        containerInstances: serializeAws_json1_1StringList(input.containerInstances, context),
      }),
    ...(input.enableECSManagedTags !== undefined &&
      input.enableECSManagedTags !== null && { enableECSManagedTags: input.enableECSManagedTags }),
    ...(input.group !== undefined && input.group !== null && { group: input.group }),
    ...(input.networkConfiguration !== undefined &&
      input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
      }),
    ...(input.overrides !== undefined &&
      input.overrides !== null && { overrides: serializeAws_json1_1TaskOverride(input.overrides, context) }),
    ...(input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags }),
    ...(input.referenceId !== undefined && input.referenceId !== null && { referenceId: input.referenceId }),
    ...(input.startedBy !== undefined && input.startedBy !== null && { startedBy: input.startedBy }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    ...(input.taskDefinition !== undefined &&
      input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
  };
};

const serializeAws_json1_1StopTaskRequest = (input: StopTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
    ...(input.task !== undefined && input.task !== null && { task: input.task }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StringMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1SubmitAttachmentStateChangesRequest = (
  input: SubmitAttachmentStateChangesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attachments !== undefined &&
      input.attachments !== null && {
        attachments: serializeAws_json1_1AttachmentStateChanges(input.attachments, context),
      }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
  };
};

const serializeAws_json1_1SubmitContainerStateChangeRequest = (
  input: SubmitContainerStateChangeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
    ...(input.exitCode !== undefined && input.exitCode !== null && { exitCode: input.exitCode }),
    ...(input.networkBindings !== undefined &&
      input.networkBindings !== null && {
        networkBindings: serializeAws_json1_1NetworkBindings(input.networkBindings, context),
      }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
    ...(input.runtimeId !== undefined && input.runtimeId !== null && { runtimeId: input.runtimeId }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
    ...(input.task !== undefined && input.task !== null && { task: input.task }),
  };
};

const serializeAws_json1_1SubmitTaskStateChangeRequest = (
  input: SubmitTaskStateChangeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attachments !== undefined &&
      input.attachments !== null && {
        attachments: serializeAws_json1_1AttachmentStateChanges(input.attachments, context),
      }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.containers !== undefined &&
      input.containers !== null && {
        containers: serializeAws_json1_1ContainerStateChanges(input.containers, context),
      }),
    ...(input.executionStoppedAt !== undefined &&
      input.executionStoppedAt !== null && {
        executionStoppedAt: Math.round(input.executionStoppedAt.getTime() / 1000),
      }),
    ...(input.pullStartedAt !== undefined &&
      input.pullStartedAt !== null && { pullStartedAt: Math.round(input.pullStartedAt.getTime() / 1000) }),
    ...(input.pullStoppedAt !== undefined &&
      input.pullStoppedAt !== null && { pullStoppedAt: Math.round(input.pullStoppedAt.getTime() / 1000) }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
    ...(input.task !== undefined && input.task !== null && { task: input.task }),
  };
};

const serializeAws_json1_1SystemControl = (input: SystemControl, context: __SerdeContext): any => {
  return {
    ...(input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1SystemControls = (input: SystemControl[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SystemControl(entry, context);
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TaskDefinitionFieldList = (
  input: (TaskDefinitionField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TaskDefinitionPlacementConstraint = (
  input: TaskDefinitionPlacementConstraint,
  context: __SerdeContext
): any => {
  return {
    ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1TaskDefinitionPlacementConstraints = (
  input: TaskDefinitionPlacementConstraint[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context);
    });
};

const serializeAws_json1_1TaskFieldList = (input: (TaskField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TaskOverride = (input: TaskOverride, context: __SerdeContext): any => {
  return {
    ...(input.containerOverrides !== undefined &&
      input.containerOverrides !== null && {
        containerOverrides: serializeAws_json1_1ContainerOverrides(input.containerOverrides, context),
      }),
    ...(input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu }),
    ...(input.executionRoleArn !== undefined &&
      input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
    ...(input.inferenceAcceleratorOverrides !== undefined &&
      input.inferenceAcceleratorOverrides !== null && {
        inferenceAcceleratorOverrides: serializeAws_json1_1InferenceAcceleratorOverrides(
          input.inferenceAcceleratorOverrides,
          context
        ),
      }),
    ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
    ...(input.taskRoleArn !== undefined && input.taskRoleArn !== null && { taskRoleArn: input.taskRoleArn }),
  };
};

const serializeAws_json1_1TaskSetFieldList = (input: (TaskSetField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tmpfs = (input: Tmpfs, context: __SerdeContext): any => {
  return {
    ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
    ...(input.mountOptions !== undefined &&
      input.mountOptions !== null && { mountOptions: serializeAws_json1_1StringList(input.mountOptions, context) }),
    ...(input.size !== undefined && input.size !== null && { size: input.size }),
  };
};

const serializeAws_json1_1TmpfsList = (input: Tmpfs[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tmpfs(entry, context);
    });
};

const serializeAws_json1_1Ulimit = (input: Ulimit, context: __SerdeContext): any => {
  return {
    ...(input.hardLimit !== undefined && input.hardLimit !== null && { hardLimit: input.hardLimit }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.softLimit !== undefined && input.softLimit !== null && { softLimit: input.softLimit }),
  };
};

const serializeAws_json1_1UlimitList = (input: Ulimit[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Ulimit(entry, context);
    });
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined &&
      input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeys(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateCapacityProviderRequest = (
  input: UpdateCapacityProviderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.autoScalingGroupProvider !== undefined &&
      input.autoScalingGroupProvider !== null && {
        autoScalingGroupProvider: serializeAws_json1_1AutoScalingGroupProviderUpdate(
          input.autoScalingGroupProvider,
          context
        ),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1UpdateClusterSettingsRequest = (
  input: UpdateClusterSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.settings !== undefined &&
      input.settings !== null && { settings: serializeAws_json1_1ClusterSettings(input.settings, context) }),
  };
};

const serializeAws_json1_1UpdateContainerAgentRequest = (
  input: UpdateContainerAgentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.containerInstance !== undefined &&
      input.containerInstance !== null && { containerInstance: input.containerInstance }),
  };
};

const serializeAws_json1_1UpdateContainerInstancesStateRequest = (
  input: UpdateContainerInstancesStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.containerInstances !== undefined &&
      input.containerInstances !== null && {
        containerInstances: serializeAws_json1_1StringList(input.containerInstances, context),
      }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  };
};

const serializeAws_json1_1UpdateServicePrimaryTaskSetRequest = (
  input: UpdateServicePrimaryTaskSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.primaryTaskSet !== undefined &&
      input.primaryTaskSet !== null && { primaryTaskSet: input.primaryTaskSet }),
    ...(input.service !== undefined && input.service !== null && { service: input.service }),
  };
};

const serializeAws_json1_1UpdateServiceRequest = (input: UpdateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviderStrategy !== undefined &&
      input.capacityProviderStrategy !== null && {
        capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
      }),
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.deploymentConfiguration !== undefined &&
      input.deploymentConfiguration !== null && {
        deploymentConfiguration: serializeAws_json1_1DeploymentConfiguration(input.deploymentConfiguration, context),
      }),
    ...(input.desiredCount !== undefined && input.desiredCount !== null && { desiredCount: input.desiredCount }),
    ...(input.forceNewDeployment !== undefined &&
      input.forceNewDeployment !== null && { forceNewDeployment: input.forceNewDeployment }),
    ...(input.healthCheckGracePeriodSeconds !== undefined &&
      input.healthCheckGracePeriodSeconds !== null && {
        healthCheckGracePeriodSeconds: input.healthCheckGracePeriodSeconds,
      }),
    ...(input.networkConfiguration !== undefined &&
      input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
      }),
    ...(input.placementConstraints !== undefined &&
      input.placementConstraints !== null && {
        placementConstraints: serializeAws_json1_1PlacementConstraints(input.placementConstraints, context),
      }),
    ...(input.placementStrategy !== undefined &&
      input.placementStrategy !== null && {
        placementStrategy: serializeAws_json1_1PlacementStrategies(input.placementStrategy, context),
      }),
    ...(input.platformVersion !== undefined &&
      input.platformVersion !== null && { platformVersion: input.platformVersion }),
    ...(input.service !== undefined && input.service !== null && { service: input.service }),
    ...(input.taskDefinition !== undefined &&
      input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
  };
};

const serializeAws_json1_1UpdateTaskSetRequest = (input: UpdateTaskSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    ...(input.scale !== undefined &&
      input.scale !== null && { scale: serializeAws_json1_1Scale(input.scale, context) }),
    ...(input.service !== undefined && input.service !== null && { service: input.service }),
    ...(input.taskSet !== undefined && input.taskSet !== null && { taskSet: input.taskSet }),
  };
};

const serializeAws_json1_1VersionInfo = (input: VersionInfo, context: __SerdeContext): any => {
  return {
    ...(input.agentHash !== undefined && input.agentHash !== null && { agentHash: input.agentHash }),
    ...(input.agentVersion !== undefined && input.agentVersion !== null && { agentVersion: input.agentVersion }),
    ...(input.dockerVersion !== undefined && input.dockerVersion !== null && { dockerVersion: input.dockerVersion }),
  };
};

const serializeAws_json1_1Volume = (input: Volume, context: __SerdeContext): any => {
  return {
    ...(input.dockerVolumeConfiguration !== undefined &&
      input.dockerVolumeConfiguration !== null && {
        dockerVolumeConfiguration: serializeAws_json1_1DockerVolumeConfiguration(
          input.dockerVolumeConfiguration,
          context
        ),
      }),
    ...(input.efsVolumeConfiguration !== undefined &&
      input.efsVolumeConfiguration !== null && {
        efsVolumeConfiguration: serializeAws_json1_1EFSVolumeConfiguration(input.efsVolumeConfiguration, context),
      }),
    ...(input.fsxWindowsFileServerVolumeConfiguration !== undefined &&
      input.fsxWindowsFileServerVolumeConfiguration !== null && {
        fsxWindowsFileServerVolumeConfiguration: serializeAws_json1_1FSxWindowsFileServerVolumeConfiguration(
          input.fsxWindowsFileServerVolumeConfiguration,
          context
        ),
      }),
    ...(input.host !== undefined &&
      input.host !== null && { host: serializeAws_json1_1HostVolumeProperties(input.host, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1VolumeFrom = (input: VolumeFrom, context: __SerdeContext): any => {
  return {
    ...(input.readOnly !== undefined && input.readOnly !== null && { readOnly: input.readOnly }),
    ...(input.sourceContainer !== undefined &&
      input.sourceContainer !== null && { sourceContainer: input.sourceContainer }),
  };
};

const serializeAws_json1_1VolumeFromList = (input: VolumeFrom[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1VolumeFrom(entry, context);
    });
};

const serializeAws_json1_1VolumeList = (input: Volume[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Volume(entry, context);
    });
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Attachment = (output: any, context: __SerdeContext): Attachment => {
  return {
    details:
      output.details !== undefined && output.details !== null
        ? deserializeAws_json1_1AttachmentDetails(output.details, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1AttachmentDetails = (output: any, context: __SerdeContext): KeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};

const deserializeAws_json1_1Attachments = (output: any, context: __SerdeContext): Attachment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Attachment(entry, context);
    });
};

const deserializeAws_json1_1Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    targetId: output.targetId !== undefined && output.targetId !== null ? output.targetId : undefined,
    targetType: output.targetType !== undefined && output.targetType !== null ? output.targetType : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1AttributeLimitExceededException = (
  output: any,
  context: __SerdeContext
): AttributeLimitExceededException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Attributes = (output: any, context: __SerdeContext): Attribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Attribute(entry, context);
    });
};

const deserializeAws_json1_1AutoScalingGroupProvider = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupProvider => {
  return {
    autoScalingGroupArn:
      output.autoScalingGroupArn !== undefined && output.autoScalingGroupArn !== null
        ? output.autoScalingGroupArn
        : undefined,
    managedScaling:
      output.managedScaling !== undefined && output.managedScaling !== null
        ? deserializeAws_json1_1ManagedScaling(output.managedScaling, context)
        : undefined,
    managedTerminationProtection:
      output.managedTerminationProtection !== undefined && output.managedTerminationProtection !== null
        ? output.managedTerminationProtection
        : undefined,
  } as any;
};

const deserializeAws_json1_1AwsVpcConfiguration = (output: any, context: __SerdeContext): AwsVpcConfiguration => {
  return {
    assignPublicIp:
      output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
    securityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_json1_1StringList(output.securityGroups, context)
        : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_json1_1StringList(output.subnets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BlockedException = (output: any, context: __SerdeContext): BlockedException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CapacityProvider = (output: any, context: __SerdeContext): CapacityProvider => {
  return {
    autoScalingGroupProvider:
      output.autoScalingGroupProvider !== undefined && output.autoScalingGroupProvider !== null
        ? deserializeAws_json1_1AutoScalingGroupProvider(output.autoScalingGroupProvider, context)
        : undefined,
    capacityProviderArn:
      output.capacityProviderArn !== undefined && output.capacityProviderArn !== null
        ? output.capacityProviderArn
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    updateStatus: output.updateStatus !== undefined && output.updateStatus !== null ? output.updateStatus : undefined,
    updateStatusReason:
      output.updateStatusReason !== undefined && output.updateStatusReason !== null
        ? output.updateStatusReason
        : undefined,
  } as any;
};

const deserializeAws_json1_1CapacityProviders = (output: any, context: __SerdeContext): CapacityProvider[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CapacityProvider(entry, context);
    });
};

const deserializeAws_json1_1CapacityProviderStrategy = (
  output: any,
  context: __SerdeContext
): CapacityProviderStrategyItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CapacityProviderStrategyItem(entry, context);
    });
};

const deserializeAws_json1_1CapacityProviderStrategyItem = (
  output: any,
  context: __SerdeContext
): CapacityProviderStrategyItem => {
  return {
    base: output.base !== undefined && output.base !== null ? output.base : undefined,
    capacityProvider:
      output.capacityProvider !== undefined && output.capacityProvider !== null ? output.capacityProvider : undefined,
    weight: output.weight !== undefined && output.weight !== null ? output.weight : undefined,
  } as any;
};

const deserializeAws_json1_1ClientException = (output: any, context: __SerdeContext): ClientException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    activeServicesCount:
      output.activeServicesCount !== undefined && output.activeServicesCount !== null
        ? output.activeServicesCount
        : undefined,
    attachments:
      output.attachments !== undefined && output.attachments !== null
        ? deserializeAws_json1_1Attachments(output.attachments, context)
        : undefined,
    attachmentsStatus:
      output.attachmentsStatus !== undefined && output.attachmentsStatus !== null
        ? output.attachmentsStatus
        : undefined,
    capacityProviders:
      output.capacityProviders !== undefined && output.capacityProviders !== null
        ? deserializeAws_json1_1StringList(output.capacityProviders, context)
        : undefined,
    clusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
    clusterName: output.clusterName !== undefined && output.clusterName !== null ? output.clusterName : undefined,
    defaultCapacityProviderStrategy:
      output.defaultCapacityProviderStrategy !== undefined && output.defaultCapacityProviderStrategy !== null
        ? deserializeAws_json1_1CapacityProviderStrategy(output.defaultCapacityProviderStrategy, context)
        : undefined,
    pendingTasksCount:
      output.pendingTasksCount !== undefined && output.pendingTasksCount !== null
        ? output.pendingTasksCount
        : undefined,
    registeredContainerInstancesCount:
      output.registeredContainerInstancesCount !== undefined && output.registeredContainerInstancesCount !== null
        ? output.registeredContainerInstancesCount
        : undefined,
    runningTasksCount:
      output.runningTasksCount !== undefined && output.runningTasksCount !== null
        ? output.runningTasksCount
        : undefined,
    settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_json1_1ClusterSettings(output.settings, context)
        : undefined,
    statistics:
      output.statistics !== undefined && output.statistics !== null
        ? deserializeAws_json1_1Statistics(output.statistics, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterContainsContainerInstancesException = (
  output: any,
  context: __SerdeContext
): ClusterContainsContainerInstancesException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterContainsServicesException = (
  output: any,
  context: __SerdeContext
): ClusterContainsServicesException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterContainsTasksException = (
  output: any,
  context: __SerdeContext
): ClusterContainsTasksException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterNotFoundException = (
  output: any,
  context: __SerdeContext
): ClusterNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Clusters = (output: any, context: __SerdeContext): Cluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Cluster(entry, context);
    });
};

const deserializeAws_json1_1ClusterSetting = (output: any, context: __SerdeContext): ClusterSetting => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterSettings = (output: any, context: __SerdeContext): ClusterSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ClusterSetting(entry, context);
    });
};

const deserializeAws_json1_1CompatibilityList = (output: any, context: __SerdeContext): (Compatibility | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1Container = (output: any, context: __SerdeContext): Container => {
  return {
    containerArn: output.containerArn !== undefined && output.containerArn !== null ? output.containerArn : undefined,
    cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    exitCode: output.exitCode !== undefined && output.exitCode !== null ? output.exitCode : undefined,
    gpuIds:
      output.gpuIds !== undefined && output.gpuIds !== null
        ? deserializeAws_json1_1GpuIds(output.gpuIds, context)
        : undefined,
    healthStatus: output.healthStatus !== undefined && output.healthStatus !== null ? output.healthStatus : undefined,
    image: output.image !== undefined && output.image !== null ? output.image : undefined,
    imageDigest: output.imageDigest !== undefined && output.imageDigest !== null ? output.imageDigest : undefined,
    lastStatus: output.lastStatus !== undefined && output.lastStatus !== null ? output.lastStatus : undefined,
    memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
    memoryReservation:
      output.memoryReservation !== undefined && output.memoryReservation !== null
        ? output.memoryReservation
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    networkBindings:
      output.networkBindings !== undefined && output.networkBindings !== null
        ? deserializeAws_json1_1NetworkBindings(output.networkBindings, context)
        : undefined,
    networkInterfaces:
      output.networkInterfaces !== undefined && output.networkInterfaces !== null
        ? deserializeAws_json1_1NetworkInterfaces(output.networkInterfaces, context)
        : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    runtimeId: output.runtimeId !== undefined && output.runtimeId !== null ? output.runtimeId : undefined,
    taskArn: output.taskArn !== undefined && output.taskArn !== null ? output.taskArn : undefined,
  } as any;
};

const deserializeAws_json1_1ContainerDefinition = (output: any, context: __SerdeContext): ContainerDefinition => {
  return {
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_json1_1StringList(output.command, context)
        : undefined,
    cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    dependsOn:
      output.dependsOn !== undefined && output.dependsOn !== null
        ? deserializeAws_json1_1ContainerDependencies(output.dependsOn, context)
        : undefined,
    disableNetworking:
      output.disableNetworking !== undefined && output.disableNetworking !== null
        ? output.disableNetworking
        : undefined,
    dnsSearchDomains:
      output.dnsSearchDomains !== undefined && output.dnsSearchDomains !== null
        ? deserializeAws_json1_1StringList(output.dnsSearchDomains, context)
        : undefined,
    dnsServers:
      output.dnsServers !== undefined && output.dnsServers !== null
        ? deserializeAws_json1_1StringList(output.dnsServers, context)
        : undefined,
    dockerLabels:
      output.dockerLabels !== undefined && output.dockerLabels !== null
        ? deserializeAws_json1_1DockerLabelsMap(output.dockerLabels, context)
        : undefined,
    dockerSecurityOptions:
      output.dockerSecurityOptions !== undefined && output.dockerSecurityOptions !== null
        ? deserializeAws_json1_1StringList(output.dockerSecurityOptions, context)
        : undefined,
    entryPoint:
      output.entryPoint !== undefined && output.entryPoint !== null
        ? deserializeAws_json1_1StringList(output.entryPoint, context)
        : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_json1_1EnvironmentVariables(output.environment, context)
        : undefined,
    environmentFiles:
      output.environmentFiles !== undefined && output.environmentFiles !== null
        ? deserializeAws_json1_1EnvironmentFiles(output.environmentFiles, context)
        : undefined,
    essential: output.essential !== undefined && output.essential !== null ? output.essential : undefined,
    extraHosts:
      output.extraHosts !== undefined && output.extraHosts !== null
        ? deserializeAws_json1_1HostEntryList(output.extraHosts, context)
        : undefined,
    firelensConfiguration:
      output.firelensConfiguration !== undefined && output.firelensConfiguration !== null
        ? deserializeAws_json1_1FirelensConfiguration(output.firelensConfiguration, context)
        : undefined,
    healthCheck:
      output.healthCheck !== undefined && output.healthCheck !== null
        ? deserializeAws_json1_1HealthCheck(output.healthCheck, context)
        : undefined,
    hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
    image: output.image !== undefined && output.image !== null ? output.image : undefined,
    interactive: output.interactive !== undefined && output.interactive !== null ? output.interactive : undefined,
    links:
      output.links !== undefined && output.links !== null
        ? deserializeAws_json1_1StringList(output.links, context)
        : undefined,
    linuxParameters:
      output.linuxParameters !== undefined && output.linuxParameters !== null
        ? deserializeAws_json1_1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration !== undefined && output.logConfiguration !== null
        ? deserializeAws_json1_1LogConfiguration(output.logConfiguration, context)
        : undefined,
    memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
    memoryReservation:
      output.memoryReservation !== undefined && output.memoryReservation !== null
        ? output.memoryReservation
        : undefined,
    mountPoints:
      output.mountPoints !== undefined && output.mountPoints !== null
        ? deserializeAws_json1_1MountPointList(output.mountPoints, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    portMappings:
      output.portMappings !== undefined && output.portMappings !== null
        ? deserializeAws_json1_1PortMappingList(output.portMappings, context)
        : undefined,
    privileged: output.privileged !== undefined && output.privileged !== null ? output.privileged : undefined,
    pseudoTerminal:
      output.pseudoTerminal !== undefined && output.pseudoTerminal !== null ? output.pseudoTerminal : undefined,
    readonlyRootFilesystem:
      output.readonlyRootFilesystem !== undefined && output.readonlyRootFilesystem !== null
        ? output.readonlyRootFilesystem
        : undefined,
    repositoryCredentials:
      output.repositoryCredentials !== undefined && output.repositoryCredentials !== null
        ? deserializeAws_json1_1RepositoryCredentials(output.repositoryCredentials, context)
        : undefined,
    resourceRequirements:
      output.resourceRequirements !== undefined && output.resourceRequirements !== null
        ? deserializeAws_json1_1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
    secrets:
      output.secrets !== undefined && output.secrets !== null
        ? deserializeAws_json1_1SecretList(output.secrets, context)
        : undefined,
    startTimeout: output.startTimeout !== undefined && output.startTimeout !== null ? output.startTimeout : undefined,
    stopTimeout: output.stopTimeout !== undefined && output.stopTimeout !== null ? output.stopTimeout : undefined,
    systemControls:
      output.systemControls !== undefined && output.systemControls !== null
        ? deserializeAws_json1_1SystemControls(output.systemControls, context)
        : undefined,
    ulimits:
      output.ulimits !== undefined && output.ulimits !== null
        ? deserializeAws_json1_1UlimitList(output.ulimits, context)
        : undefined,
    user: output.user !== undefined && output.user !== null ? output.user : undefined,
    volumesFrom:
      output.volumesFrom !== undefined && output.volumesFrom !== null
        ? deserializeAws_json1_1VolumeFromList(output.volumesFrom, context)
        : undefined,
    workingDirectory:
      output.workingDirectory !== undefined && output.workingDirectory !== null ? output.workingDirectory : undefined,
  } as any;
};

const deserializeAws_json1_1ContainerDefinitions = (output: any, context: __SerdeContext): ContainerDefinition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContainerDefinition(entry, context);
    });
};

const deserializeAws_json1_1ContainerDependencies = (output: any, context: __SerdeContext): ContainerDependency[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContainerDependency(entry, context);
    });
};

const deserializeAws_json1_1ContainerDependency = (output: any, context: __SerdeContext): ContainerDependency => {
  return {
    condition: output.condition !== undefined && output.condition !== null ? output.condition : undefined,
    containerName:
      output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
  } as any;
};

const deserializeAws_json1_1ContainerInstance = (output: any, context: __SerdeContext): ContainerInstance => {
  return {
    agentConnected:
      output.agentConnected !== undefined && output.agentConnected !== null ? output.agentConnected : undefined,
    agentUpdateStatus:
      output.agentUpdateStatus !== undefined && output.agentUpdateStatus !== null
        ? output.agentUpdateStatus
        : undefined,
    attachments:
      output.attachments !== undefined && output.attachments !== null
        ? deserializeAws_json1_1Attachments(output.attachments, context)
        : undefined,
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1Attributes(output.attributes, context)
        : undefined,
    capacityProviderName:
      output.capacityProviderName !== undefined && output.capacityProviderName !== null
        ? output.capacityProviderName
        : undefined,
    containerInstanceArn:
      output.containerInstanceArn !== undefined && output.containerInstanceArn !== null
        ? output.containerInstanceArn
        : undefined,
    ec2InstanceId:
      output.ec2InstanceId !== undefined && output.ec2InstanceId !== null ? output.ec2InstanceId : undefined,
    pendingTasksCount:
      output.pendingTasksCount !== undefined && output.pendingTasksCount !== null
        ? output.pendingTasksCount
        : undefined,
    registeredAt:
      output.registeredAt !== undefined && output.registeredAt !== null
        ? new Date(Math.round(output.registeredAt * 1000))
        : undefined,
    registeredResources:
      output.registeredResources !== undefined && output.registeredResources !== null
        ? deserializeAws_json1_1Resources(output.registeredResources, context)
        : undefined,
    remainingResources:
      output.remainingResources !== undefined && output.remainingResources !== null
        ? deserializeAws_json1_1Resources(output.remainingResources, context)
        : undefined,
    runningTasksCount:
      output.runningTasksCount !== undefined && output.runningTasksCount !== null
        ? output.runningTasksCount
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    versionInfo:
      output.versionInfo !== undefined && output.versionInfo !== null
        ? deserializeAws_json1_1VersionInfo(output.versionInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ContainerInstances = (output: any, context: __SerdeContext): ContainerInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContainerInstance(entry, context);
    });
};

const deserializeAws_json1_1ContainerOverride = (output: any, context: __SerdeContext): ContainerOverride => {
  return {
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_json1_1StringList(output.command, context)
        : undefined,
    cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_json1_1EnvironmentVariables(output.environment, context)
        : undefined,
    environmentFiles:
      output.environmentFiles !== undefined && output.environmentFiles !== null
        ? deserializeAws_json1_1EnvironmentFiles(output.environmentFiles, context)
        : undefined,
    memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
    memoryReservation:
      output.memoryReservation !== undefined && output.memoryReservation !== null
        ? output.memoryReservation
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    resourceRequirements:
      output.resourceRequirements !== undefined && output.resourceRequirements !== null
        ? deserializeAws_json1_1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ContainerOverrides = (output: any, context: __SerdeContext): ContainerOverride[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContainerOverride(entry, context);
    });
};

const deserializeAws_json1_1Containers = (output: any, context: __SerdeContext): Container[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Container(entry, context);
    });
};

const deserializeAws_json1_1CreateCapacityProviderResponse = (
  output: any,
  context: __SerdeContext
): CreateCapacityProviderResponse => {
  return {
    capacityProvider:
      output.capacityProvider !== undefined && output.capacityProvider !== null
        ? deserializeAws_json1_1CapacityProvider(output.capacityProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return {
    cluster:
      output.cluster !== undefined && output.cluster !== null
        ? deserializeAws_json1_1Cluster(output.cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateServiceResponse = (output: any, context: __SerdeContext): CreateServiceResponse => {
  return {
    service:
      output.service !== undefined && output.service !== null
        ? deserializeAws_json1_1Service(output.service, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTaskSetResponse = (output: any, context: __SerdeContext): CreateTaskSetResponse => {
  return {
    taskSet:
      output.taskSet !== undefined && output.taskSet !== null
        ? deserializeAws_json1_1TaskSet(output.taskSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteAccountSettingResponse = (
  output: any,
  context: __SerdeContext
): DeleteAccountSettingResponse => {
  return {
    setting:
      output.setting !== undefined && output.setting !== null
        ? deserializeAws_json1_1Setting(output.setting, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteAttributesResponse = (
  output: any,
  context: __SerdeContext
): DeleteAttributesResponse => {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1Attributes(output.attributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteCapacityProviderResponse = (
  output: any,
  context: __SerdeContext
): DeleteCapacityProviderResponse => {
  return {
    capacityProvider:
      output.capacityProvider !== undefined && output.capacityProvider !== null
        ? deserializeAws_json1_1CapacityProvider(output.capacityProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return {
    cluster:
      output.cluster !== undefined && output.cluster !== null
        ? deserializeAws_json1_1Cluster(output.cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteServiceResponse = (output: any, context: __SerdeContext): DeleteServiceResponse => {
  return {
    service:
      output.service !== undefined && output.service !== null
        ? deserializeAws_json1_1Service(output.service, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteTaskSetResponse = (output: any, context: __SerdeContext): DeleteTaskSetResponse => {
  return {
    taskSet:
      output.taskSet !== undefined && output.taskSet !== null
        ? deserializeAws_json1_1TaskSet(output.taskSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    capacityProviderStrategy:
      output.capacityProviderStrategy !== undefined && output.capacityProviderStrategy !== null
        ? deserializeAws_json1_1CapacityProviderStrategy(output.capacityProviderStrategy, context)
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    desiredCount: output.desiredCount !== undefined && output.desiredCount !== null ? output.desiredCount : undefined,
    failedTasks: output.failedTasks !== undefined && output.failedTasks !== null ? output.failedTasks : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    launchType: output.launchType !== undefined && output.launchType !== null ? output.launchType : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined && output.networkConfiguration !== null
        ? deserializeAws_json1_1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    pendingCount: output.pendingCount !== undefined && output.pendingCount !== null ? output.pendingCount : undefined,
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
    rolloutState: output.rolloutState !== undefined && output.rolloutState !== null ? output.rolloutState : undefined,
    rolloutStateReason:
      output.rolloutStateReason !== undefined && output.rolloutStateReason !== null
        ? output.rolloutStateReason
        : undefined,
    runningCount: output.runningCount !== undefined && output.runningCount !== null ? output.runningCount : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null ? output.taskDefinition : undefined,
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? new Date(Math.round(output.updatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeploymentCircuitBreaker = (
  output: any,
  context: __SerdeContext
): DeploymentCircuitBreaker => {
  return {
    enable: output.enable !== undefined && output.enable !== null ? output.enable : undefined,
    rollback: output.rollback !== undefined && output.rollback !== null ? output.rollback : undefined,
  } as any;
};

const deserializeAws_json1_1DeploymentConfiguration = (
  output: any,
  context: __SerdeContext
): DeploymentConfiguration => {
  return {
    deploymentCircuitBreaker:
      output.deploymentCircuitBreaker !== undefined && output.deploymentCircuitBreaker !== null
        ? deserializeAws_json1_1DeploymentCircuitBreaker(output.deploymentCircuitBreaker, context)
        : undefined,
    maximumPercent:
      output.maximumPercent !== undefined && output.maximumPercent !== null ? output.maximumPercent : undefined,
    minimumHealthyPercent:
      output.minimumHealthyPercent !== undefined && output.minimumHealthyPercent !== null
        ? output.minimumHealthyPercent
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeploymentController = (output: any, context: __SerdeContext): DeploymentController => {
  return {
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1Deployments = (output: any, context: __SerdeContext): Deployment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Deployment(entry, context);
    });
};

const deserializeAws_json1_1DeregisterContainerInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeregisterContainerInstanceResponse => {
  return {
    containerInstance:
      output.containerInstance !== undefined && output.containerInstance !== null
        ? deserializeAws_json1_1ContainerInstance(output.containerInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeregisterTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeregisterTaskDefinitionResponse => {
  return {
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null
        ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCapacityProvidersResponse = (
  output: any,
  context: __SerdeContext
): DescribeCapacityProvidersResponse => {
  return {
    capacityProviders:
      output.capacityProviders !== undefined && output.capacityProviders !== null
        ? deserializeAws_json1_1CapacityProviders(output.capacityProviders, context)
        : undefined,
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  return {
    clusters:
      output.clusters !== undefined && output.clusters !== null
        ? deserializeAws_json1_1Clusters(output.clusters, context)
        : undefined,
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeContainerInstancesResponse = (
  output: any,
  context: __SerdeContext
): DescribeContainerInstancesResponse => {
  return {
    containerInstances:
      output.containerInstances !== undefined && output.containerInstances !== null
        ? deserializeAws_json1_1ContainerInstances(output.containerInstances, context)
        : undefined,
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeServicesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServicesResponse => {
  return {
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    services:
      output.services !== undefined && output.services !== null
        ? deserializeAws_json1_1Services(output.services, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeTaskDefinitionResponse => {
  return {
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null
        ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTaskSetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeTaskSetsResponse => {
  return {
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    taskSets:
      output.taskSets !== undefined && output.taskSets !== null
        ? deserializeAws_json1_1TaskSets(output.taskSets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTasksResponse = (output: any, context: __SerdeContext): DescribeTasksResponse => {
  return {
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    tasks:
      output.tasks !== undefined && output.tasks !== null
        ? deserializeAws_json1_1Tasks(output.tasks, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Device = (output: any, context: __SerdeContext): Device => {
  return {
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
    hostPath: output.hostPath !== undefined && output.hostPath !== null ? output.hostPath : undefined,
    permissions:
      output.permissions !== undefined && output.permissions !== null
        ? deserializeAws_json1_1DeviceCgroupPermissions(output.permissions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeviceCgroupPermissions = (
  output: any,
  context: __SerdeContext
): (DeviceCgroupPermission | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1DevicesList = (output: any, context: __SerdeContext): Device[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Device(entry, context);
    });
};

const deserializeAws_json1_1DiscoverPollEndpointResponse = (
  output: any,
  context: __SerdeContext
): DiscoverPollEndpointResponse => {
  return {
    endpoint: output.endpoint !== undefined && output.endpoint !== null ? output.endpoint : undefined,
    telemetryEndpoint:
      output.telemetryEndpoint !== undefined && output.telemetryEndpoint !== null
        ? output.telemetryEndpoint
        : undefined,
  } as any;
};

const deserializeAws_json1_1DockerLabelsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1DockerVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): DockerVolumeConfiguration => {
  return {
    autoprovision:
      output.autoprovision !== undefined && output.autoprovision !== null ? output.autoprovision : undefined,
    driver: output.driver !== undefined && output.driver !== null ? output.driver : undefined,
    driverOpts:
      output.driverOpts !== undefined && output.driverOpts !== null
        ? deserializeAws_json1_1StringMap(output.driverOpts, context)
        : undefined,
    labels:
      output.labels !== undefined && output.labels !== null
        ? deserializeAws_json1_1StringMap(output.labels, context)
        : undefined,
    scope: output.scope !== undefined && output.scope !== null ? output.scope : undefined,
  } as any;
};

const deserializeAws_json1_1EFSAuthorizationConfig = (output: any, context: __SerdeContext): EFSAuthorizationConfig => {
  return {
    accessPointId:
      output.accessPointId !== undefined && output.accessPointId !== null ? output.accessPointId : undefined,
    iam: output.iam !== undefined && output.iam !== null ? output.iam : undefined,
  } as any;
};

const deserializeAws_json1_1EFSVolumeConfiguration = (output: any, context: __SerdeContext): EFSVolumeConfiguration => {
  return {
    authorizationConfig:
      output.authorizationConfig !== undefined && output.authorizationConfig !== null
        ? deserializeAws_json1_1EFSAuthorizationConfig(output.authorizationConfig, context)
        : undefined,
    fileSystemId: output.fileSystemId !== undefined && output.fileSystemId !== null ? output.fileSystemId : undefined,
    rootDirectory:
      output.rootDirectory !== undefined && output.rootDirectory !== null ? output.rootDirectory : undefined,
    transitEncryption:
      output.transitEncryption !== undefined && output.transitEncryption !== null
        ? output.transitEncryption
        : undefined,
    transitEncryptionPort:
      output.transitEncryptionPort !== undefined && output.transitEncryptionPort !== null
        ? output.transitEncryptionPort
        : undefined,
  } as any;
};

const deserializeAws_json1_1EnvironmentFile = (output: any, context: __SerdeContext): EnvironmentFile => {
  return {
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1EnvironmentFiles = (output: any, context: __SerdeContext): EnvironmentFile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnvironmentFile(entry, context);
    });
};

const deserializeAws_json1_1EnvironmentVariables = (output: any, context: __SerdeContext): KeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};

const deserializeAws_json1_1Failure = (output: any, context: __SerdeContext): Failure => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    detail: output.detail !== undefined && output.detail !== null ? output.detail : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
  } as any;
};

const deserializeAws_json1_1Failures = (output: any, context: __SerdeContext): Failure[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Failure(entry, context);
    });
};

const deserializeAws_json1_1FirelensConfiguration = (output: any, context: __SerdeContext): FirelensConfiguration => {
  return {
    options:
      output.options !== undefined && output.options !== null
        ? deserializeAws_json1_1FirelensConfigurationOptionsMap(output.options, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1FirelensConfigurationOptionsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1FSxWindowsFileServerAuthorizationConfig = (
  output: any,
  context: __SerdeContext
): FSxWindowsFileServerAuthorizationConfig => {
  return {
    credentialsParameter:
      output.credentialsParameter !== undefined && output.credentialsParameter !== null
        ? output.credentialsParameter
        : undefined,
    domain: output.domain !== undefined && output.domain !== null ? output.domain : undefined,
  } as any;
};

const deserializeAws_json1_1FSxWindowsFileServerVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): FSxWindowsFileServerVolumeConfiguration => {
  return {
    authorizationConfig:
      output.authorizationConfig !== undefined && output.authorizationConfig !== null
        ? deserializeAws_json1_1FSxWindowsFileServerAuthorizationConfig(output.authorizationConfig, context)
        : undefined,
    fileSystemId: output.fileSystemId !== undefined && output.fileSystemId !== null ? output.fileSystemId : undefined,
    rootDirectory:
      output.rootDirectory !== undefined && output.rootDirectory !== null ? output.rootDirectory : undefined,
  } as any;
};

const deserializeAws_json1_1GpuIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1HealthCheck = (output: any, context: __SerdeContext): HealthCheck => {
  return {
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_json1_1StringList(output.command, context)
        : undefined,
    interval: output.interval !== undefined && output.interval !== null ? output.interval : undefined,
    retries: output.retries !== undefined && output.retries !== null ? output.retries : undefined,
    startPeriod: output.startPeriod !== undefined && output.startPeriod !== null ? output.startPeriod : undefined,
    timeout: output.timeout !== undefined && output.timeout !== null ? output.timeout : undefined,
  } as any;
};

const deserializeAws_json1_1HostEntry = (output: any, context: __SerdeContext): HostEntry => {
  return {
    hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
    ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
  } as any;
};

const deserializeAws_json1_1HostEntryList = (output: any, context: __SerdeContext): HostEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HostEntry(entry, context);
    });
};

const deserializeAws_json1_1HostVolumeProperties = (output: any, context: __SerdeContext): HostVolumeProperties => {
  return {
    sourcePath: output.sourcePath !== undefined && output.sourcePath !== null ? output.sourcePath : undefined,
  } as any;
};

const deserializeAws_json1_1InferenceAccelerator = (output: any, context: __SerdeContext): InferenceAccelerator => {
  return {
    deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
    deviceType: output.deviceType !== undefined && output.deviceType !== null ? output.deviceType : undefined,
  } as any;
};

const deserializeAws_json1_1InferenceAcceleratorOverride = (
  output: any,
  context: __SerdeContext
): InferenceAcceleratorOverride => {
  return {
    deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
    deviceType: output.deviceType !== undefined && output.deviceType !== null ? output.deviceType : undefined,
  } as any;
};

const deserializeAws_json1_1InferenceAcceleratorOverrides = (
  output: any,
  context: __SerdeContext
): InferenceAcceleratorOverride[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InferenceAcceleratorOverride(entry, context);
    });
};

const deserializeAws_json1_1InferenceAccelerators = (output: any, context: __SerdeContext): InferenceAccelerator[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InferenceAccelerator(entry, context);
    });
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1KernelCapabilities = (output: any, context: __SerdeContext): KernelCapabilities => {
  return {
    add:
      output.add !== undefined && output.add !== null
        ? deserializeAws_json1_1StringList(output.add, context)
        : undefined,
    drop:
      output.drop !== undefined && output.drop !== null
        ? deserializeAws_json1_1StringList(output.drop, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1KeyValuePair = (output: any, context: __SerdeContext): KeyValuePair => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LinuxParameters = (output: any, context: __SerdeContext): LinuxParameters => {
  return {
    capabilities:
      output.capabilities !== undefined && output.capabilities !== null
        ? deserializeAws_json1_1KernelCapabilities(output.capabilities, context)
        : undefined,
    devices:
      output.devices !== undefined && output.devices !== null
        ? deserializeAws_json1_1DevicesList(output.devices, context)
        : undefined,
    initProcessEnabled:
      output.initProcessEnabled !== undefined && output.initProcessEnabled !== null
        ? output.initProcessEnabled
        : undefined,
    maxSwap: output.maxSwap !== undefined && output.maxSwap !== null ? output.maxSwap : undefined,
    sharedMemorySize:
      output.sharedMemorySize !== undefined && output.sharedMemorySize !== null ? output.sharedMemorySize : undefined,
    swappiness: output.swappiness !== undefined && output.swappiness !== null ? output.swappiness : undefined,
    tmpfs:
      output.tmpfs !== undefined && output.tmpfs !== null
        ? deserializeAws_json1_1TmpfsList(output.tmpfs, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListAccountSettingsResponse = (
  output: any,
  context: __SerdeContext
): ListAccountSettingsResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_json1_1Settings(output.settings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListAttributesResponse = (output: any, context: __SerdeContext): ListAttributesResponse => {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1Attributes(output.attributes, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListClustersResponse = (output: any, context: __SerdeContext): ListClustersResponse => {
  return {
    clusterArns:
      output.clusterArns !== undefined && output.clusterArns !== null
        ? deserializeAws_json1_1StringList(output.clusterArns, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListContainerInstancesResponse = (
  output: any,
  context: __SerdeContext
): ListContainerInstancesResponse => {
  return {
    containerInstanceArns:
      output.containerInstanceArns !== undefined && output.containerInstanceArns !== null
        ? deserializeAws_json1_1StringList(output.containerInstanceArns, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    serviceArns:
      output.serviceArns !== undefined && output.serviceArns !== null
        ? deserializeAws_json1_1StringList(output.serviceArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTaskDefinitionFamiliesResponse = (
  output: any,
  context: __SerdeContext
): ListTaskDefinitionFamiliesResponse => {
  return {
    families:
      output.families !== undefined && output.families !== null
        ? deserializeAws_json1_1StringList(output.families, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListTaskDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListTaskDefinitionsResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    taskDefinitionArns:
      output.taskDefinitionArns !== undefined && output.taskDefinitionArns !== null
        ? deserializeAws_json1_1StringList(output.taskDefinitionArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTasksResponse = (output: any, context: __SerdeContext): ListTasksResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    taskArns:
      output.taskArns !== undefined && output.taskArns !== null
        ? deserializeAws_json1_1StringList(output.taskArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  return {
    containerName:
      output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
    containerPort:
      output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
    loadBalancerName:
      output.loadBalancerName !== undefined && output.loadBalancerName !== null ? output.loadBalancerName : undefined,
    targetGroupArn:
      output.targetGroupArn !== undefined && output.targetGroupArn !== null ? output.targetGroupArn : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancers = (output: any, context: __SerdeContext): LoadBalancer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LoadBalancer(entry, context);
    });
};

const deserializeAws_json1_1LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    logDriver: output.logDriver !== undefined && output.logDriver !== null ? output.logDriver : undefined,
    options:
      output.options !== undefined && output.options !== null
        ? deserializeAws_json1_1LogConfigurationOptionsMap(output.options, context)
        : undefined,
    secretOptions:
      output.secretOptions !== undefined && output.secretOptions !== null
        ? deserializeAws_json1_1SecretList(output.secretOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LogConfigurationOptionsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1ManagedScaling = (output: any, context: __SerdeContext): ManagedScaling => {
  return {
    instanceWarmupPeriod:
      output.instanceWarmupPeriod !== undefined && output.instanceWarmupPeriod !== null
        ? output.instanceWarmupPeriod
        : undefined,
    maximumScalingStepSize:
      output.maximumScalingStepSize !== undefined && output.maximumScalingStepSize !== null
        ? output.maximumScalingStepSize
        : undefined,
    minimumScalingStepSize:
      output.minimumScalingStepSize !== undefined && output.minimumScalingStepSize !== null
        ? output.minimumScalingStepSize
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    targetCapacity:
      output.targetCapacity !== undefined && output.targetCapacity !== null ? output.targetCapacity : undefined,
  } as any;
};

const deserializeAws_json1_1MissingVersionException = (
  output: any,
  context: __SerdeContext
): MissingVersionException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1MountPoint = (output: any, context: __SerdeContext): MountPoint => {
  return {
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
    readOnly: output.readOnly !== undefined && output.readOnly !== null ? output.readOnly : undefined,
    sourceVolume: output.sourceVolume !== undefined && output.sourceVolume !== null ? output.sourceVolume : undefined,
  } as any;
};

const deserializeAws_json1_1MountPointList = (output: any, context: __SerdeContext): MountPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MountPoint(entry, context);
    });
};

const deserializeAws_json1_1NetworkBinding = (output: any, context: __SerdeContext): NetworkBinding => {
  return {
    bindIP: output.bindIP !== undefined && output.bindIP !== null ? output.bindIP : undefined,
    containerPort:
      output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
    hostPort: output.hostPort !== undefined && output.hostPort !== null ? output.hostPort : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
  } as any;
};

const deserializeAws_json1_1NetworkBindings = (output: any, context: __SerdeContext): NetworkBinding[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NetworkBinding(entry, context);
    });
};

const deserializeAws_json1_1NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    awsvpcConfiguration:
      output.awsvpcConfiguration !== undefined && output.awsvpcConfiguration !== null
        ? deserializeAws_json1_1AwsVpcConfiguration(output.awsvpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    attachmentId: output.attachmentId !== undefined && output.attachmentId !== null ? output.attachmentId : undefined,
    ipv6Address: output.ipv6Address !== undefined && output.ipv6Address !== null ? output.ipv6Address : undefined,
    privateIpv4Address:
      output.privateIpv4Address !== undefined && output.privateIpv4Address !== null
        ? output.privateIpv4Address
        : undefined,
  } as any;
};

const deserializeAws_json1_1NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NetworkInterface(entry, context);
    });
};

const deserializeAws_json1_1NoUpdateAvailableException = (
  output: any,
  context: __SerdeContext
): NoUpdateAvailableException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1PlacementConstraint = (output: any, context: __SerdeContext): PlacementConstraint => {
  return {
    expression: output.expression !== undefined && output.expression !== null ? output.expression : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1PlacementConstraints = (output: any, context: __SerdeContext): PlacementConstraint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlacementConstraint(entry, context);
    });
};

const deserializeAws_json1_1PlacementStrategies = (output: any, context: __SerdeContext): PlacementStrategy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlacementStrategy(entry, context);
    });
};

const deserializeAws_json1_1PlacementStrategy = (output: any, context: __SerdeContext): PlacementStrategy => {
  return {
    field: output.field !== undefined && output.field !== null ? output.field : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException = (
  output: any,
  context: __SerdeContext
): PlatformTaskDefinitionIncompatibilityException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1PlatformUnknownException = (
  output: any,
  context: __SerdeContext
): PlatformUnknownException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1PortMapping = (output: any, context: __SerdeContext): PortMapping => {
  return {
    containerPort:
      output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
    hostPort: output.hostPort !== undefined && output.hostPort !== null ? output.hostPort : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
  } as any;
};

const deserializeAws_json1_1PortMappingList = (output: any, context: __SerdeContext): PortMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PortMapping(entry, context);
    });
};

const deserializeAws_json1_1ProxyConfiguration = (output: any, context: __SerdeContext): ProxyConfiguration => {
  return {
    containerName:
      output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
    properties:
      output.properties !== undefined && output.properties !== null
        ? deserializeAws_json1_1ProxyConfigurationProperties(output.properties, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1ProxyConfigurationProperties = (output: any, context: __SerdeContext): KeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};

const deserializeAws_json1_1PutAccountSettingDefaultResponse = (
  output: any,
  context: __SerdeContext
): PutAccountSettingDefaultResponse => {
  return {
    setting:
      output.setting !== undefined && output.setting !== null
        ? deserializeAws_json1_1Setting(output.setting, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutAccountSettingResponse = (
  output: any,
  context: __SerdeContext
): PutAccountSettingResponse => {
  return {
    setting:
      output.setting !== undefined && output.setting !== null
        ? deserializeAws_json1_1Setting(output.setting, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutAttributesResponse = (output: any, context: __SerdeContext): PutAttributesResponse => {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1Attributes(output.attributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutClusterCapacityProvidersResponse = (
  output: any,
  context: __SerdeContext
): PutClusterCapacityProvidersResponse => {
  return {
    cluster:
      output.cluster !== undefined && output.cluster !== null
        ? deserializeAws_json1_1Cluster(output.cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegisterContainerInstanceResponse = (
  output: any,
  context: __SerdeContext
): RegisterContainerInstanceResponse => {
  return {
    containerInstance:
      output.containerInstance !== undefined && output.containerInstance !== null
        ? deserializeAws_json1_1ContainerInstance(output.containerInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegisterTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): RegisterTaskDefinitionResponse => {
  return {
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null
        ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RepositoryCredentials = (output: any, context: __SerdeContext): RepositoryCredentials => {
  return {
    credentialsParameter:
      output.credentialsParameter !== undefined && output.credentialsParameter !== null
        ? output.credentialsParameter
        : undefined,
  } as any;
};

const deserializeAws_json1_1RequiresAttributes = (output: any, context: __SerdeContext): Attribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Attribute(entry, context);
    });
};

const deserializeAws_json1_1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    doubleValue: output.doubleValue !== undefined && output.doubleValue !== null ? output.doubleValue : undefined,
    integerValue: output.integerValue !== undefined && output.integerValue !== null ? output.integerValue : undefined,
    longValue: output.longValue !== undefined && output.longValue !== null ? output.longValue : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    stringSetValue:
      output.stringSetValue !== undefined && output.stringSetValue !== null
        ? deserializeAws_json1_1StringList(output.stringSetValue, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceRequirement = (output: any, context: __SerdeContext): ResourceRequirement => {
  return {
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceRequirements = (output: any, context: __SerdeContext): ResourceRequirement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceRequirement(entry, context);
    });
};

const deserializeAws_json1_1Resources = (output: any, context: __SerdeContext): Resource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Resource(entry, context);
    });
};

const deserializeAws_json1_1RunTaskResponse = (output: any, context: __SerdeContext): RunTaskResponse => {
  return {
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    tasks:
      output.tasks !== undefined && output.tasks !== null
        ? deserializeAws_json1_1Tasks(output.tasks, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Scale = (output: any, context: __SerdeContext): Scale => {
  return {
    unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1Secret = (output: any, context: __SerdeContext): Secret => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    valueFrom: output.valueFrom !== undefined && output.valueFrom !== null ? output.valueFrom : undefined,
  } as any;
};

const deserializeAws_json1_1SecretList = (output: any, context: __SerdeContext): Secret[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Secret(entry, context);
    });
};

const deserializeAws_json1_1ServerException = (output: any, context: __SerdeContext): ServerException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Service = (output: any, context: __SerdeContext): Service => {
  return {
    capacityProviderStrategy:
      output.capacityProviderStrategy !== undefined && output.capacityProviderStrategy !== null
        ? deserializeAws_json1_1CapacityProviderStrategy(output.capacityProviderStrategy, context)
        : undefined,
    clusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    deploymentConfiguration:
      output.deploymentConfiguration !== undefined && output.deploymentConfiguration !== null
        ? deserializeAws_json1_1DeploymentConfiguration(output.deploymentConfiguration, context)
        : undefined,
    deploymentController:
      output.deploymentController !== undefined && output.deploymentController !== null
        ? deserializeAws_json1_1DeploymentController(output.deploymentController, context)
        : undefined,
    deployments:
      output.deployments !== undefined && output.deployments !== null
        ? deserializeAws_json1_1Deployments(output.deployments, context)
        : undefined,
    desiredCount: output.desiredCount !== undefined && output.desiredCount !== null ? output.desiredCount : undefined,
    enableECSManagedTags:
      output.enableECSManagedTags !== undefined && output.enableECSManagedTags !== null
        ? output.enableECSManagedTags
        : undefined,
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1ServiceEvents(output.events, context)
        : undefined,
    healthCheckGracePeriodSeconds:
      output.healthCheckGracePeriodSeconds !== undefined && output.healthCheckGracePeriodSeconds !== null
        ? output.healthCheckGracePeriodSeconds
        : undefined,
    launchType: output.launchType !== undefined && output.launchType !== null ? output.launchType : undefined,
    loadBalancers:
      output.loadBalancers !== undefined && output.loadBalancers !== null
        ? deserializeAws_json1_1LoadBalancers(output.loadBalancers, context)
        : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined && output.networkConfiguration !== null
        ? deserializeAws_json1_1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    pendingCount: output.pendingCount !== undefined && output.pendingCount !== null ? output.pendingCount : undefined,
    placementConstraints:
      output.placementConstraints !== undefined && output.placementConstraints !== null
        ? deserializeAws_json1_1PlacementConstraints(output.placementConstraints, context)
        : undefined,
    placementStrategy:
      output.placementStrategy !== undefined && output.placementStrategy !== null
        ? deserializeAws_json1_1PlacementStrategies(output.placementStrategy, context)
        : undefined,
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
    propagateTags:
      output.propagateTags !== undefined && output.propagateTags !== null ? output.propagateTags : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    runningCount: output.runningCount !== undefined && output.runningCount !== null ? output.runningCount : undefined,
    schedulingStrategy:
      output.schedulingStrategy !== undefined && output.schedulingStrategy !== null
        ? output.schedulingStrategy
        : undefined,
    serviceArn: output.serviceArn !== undefined && output.serviceArn !== null ? output.serviceArn : undefined,
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
    serviceRegistries:
      output.serviceRegistries !== undefined && output.serviceRegistries !== null
        ? deserializeAws_json1_1ServiceRegistries(output.serviceRegistries, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null ? output.taskDefinition : undefined,
    taskSets:
      output.taskSets !== undefined && output.taskSets !== null
        ? deserializeAws_json1_1TaskSets(output.taskSets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceEvent = (output: any, context: __SerdeContext): ServiceEvent => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceEvents = (output: any, context: __SerdeContext): ServiceEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServiceEvent(entry, context);
    });
};

const deserializeAws_json1_1ServiceNotActiveException = (
  output: any,
  context: __SerdeContext
): ServiceNotActiveException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceNotFoundException = (
  output: any,
  context: __SerdeContext
): ServiceNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceRegistries = (output: any, context: __SerdeContext): ServiceRegistry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServiceRegistry(entry, context);
    });
};

const deserializeAws_json1_1ServiceRegistry = (output: any, context: __SerdeContext): ServiceRegistry => {
  return {
    containerName:
      output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
    containerPort:
      output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    registryArn: output.registryArn !== undefined && output.registryArn !== null ? output.registryArn : undefined,
  } as any;
};

const deserializeAws_json1_1Services = (output: any, context: __SerdeContext): Service[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Service(entry, context);
    });
};

const deserializeAws_json1_1Setting = (output: any, context: __SerdeContext): Setting => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    principalArn: output.principalArn !== undefined && output.principalArn !== null ? output.principalArn : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1Settings = (output: any, context: __SerdeContext): Setting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Setting(entry, context);
    });
};

const deserializeAws_json1_1StartTaskResponse = (output: any, context: __SerdeContext): StartTaskResponse => {
  return {
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    tasks:
      output.tasks !== undefined && output.tasks !== null
        ? deserializeAws_json1_1Tasks(output.tasks, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Statistics = (output: any, context: __SerdeContext): KeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};

const deserializeAws_json1_1StopTaskResponse = (output: any, context: __SerdeContext): StopTaskResponse => {
  return {
    task:
      output.task !== undefined && output.task !== null ? deserializeAws_json1_1Task(output.task, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1StringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1SubmitAttachmentStateChangesResponse = (
  output: any,
  context: __SerdeContext
): SubmitAttachmentStateChangesResponse => {
  return {
    acknowledgment:
      output.acknowledgment !== undefined && output.acknowledgment !== null ? output.acknowledgment : undefined,
  } as any;
};

const deserializeAws_json1_1SubmitContainerStateChangeResponse = (
  output: any,
  context: __SerdeContext
): SubmitContainerStateChangeResponse => {
  return {
    acknowledgment:
      output.acknowledgment !== undefined && output.acknowledgment !== null ? output.acknowledgment : undefined,
  } as any;
};

const deserializeAws_json1_1SubmitTaskStateChangeResponse = (
  output: any,
  context: __SerdeContext
): SubmitTaskStateChangeResponse => {
  return {
    acknowledgment:
      output.acknowledgment !== undefined && output.acknowledgment !== null ? output.acknowledgment : undefined,
  } as any;
};

const deserializeAws_json1_1SystemControl = (output: any, context: __SerdeContext): SystemControl => {
  return {
    namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1SystemControls = (output: any, context: __SerdeContext): SystemControl[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SystemControl(entry, context);
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TargetNotFoundException = (
  output: any,
  context: __SerdeContext
): TargetNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Task = (output: any, context: __SerdeContext): Task => {
  return {
    attachments:
      output.attachments !== undefined && output.attachments !== null
        ? deserializeAws_json1_1Attachments(output.attachments, context)
        : undefined,
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1Attributes(output.attributes, context)
        : undefined,
    availabilityZone:
      output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
    capacityProviderName:
      output.capacityProviderName !== undefined && output.capacityProviderName !== null
        ? output.capacityProviderName
        : undefined,
    clusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
    connectivity: output.connectivity !== undefined && output.connectivity !== null ? output.connectivity : undefined,
    connectivityAt:
      output.connectivityAt !== undefined && output.connectivityAt !== null
        ? new Date(Math.round(output.connectivityAt * 1000))
        : undefined,
    containerInstanceArn:
      output.containerInstanceArn !== undefined && output.containerInstanceArn !== null
        ? output.containerInstanceArn
        : undefined,
    containers:
      output.containers !== undefined && output.containers !== null
        ? deserializeAws_json1_1Containers(output.containers, context)
        : undefined,
    cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    desiredStatus:
      output.desiredStatus !== undefined && output.desiredStatus !== null ? output.desiredStatus : undefined,
    executionStoppedAt:
      output.executionStoppedAt !== undefined && output.executionStoppedAt !== null
        ? new Date(Math.round(output.executionStoppedAt * 1000))
        : undefined,
    group: output.group !== undefined && output.group !== null ? output.group : undefined,
    healthStatus: output.healthStatus !== undefined && output.healthStatus !== null ? output.healthStatus : undefined,
    inferenceAccelerators:
      output.inferenceAccelerators !== undefined && output.inferenceAccelerators !== null
        ? deserializeAws_json1_1InferenceAccelerators(output.inferenceAccelerators, context)
        : undefined,
    lastStatus: output.lastStatus !== undefined && output.lastStatus !== null ? output.lastStatus : undefined,
    launchType: output.launchType !== undefined && output.launchType !== null ? output.launchType : undefined,
    memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
    overrides:
      output.overrides !== undefined && output.overrides !== null
        ? deserializeAws_json1_1TaskOverride(output.overrides, context)
        : undefined,
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
    pullStartedAt:
      output.pullStartedAt !== undefined && output.pullStartedAt !== null
        ? new Date(Math.round(output.pullStartedAt * 1000))
        : undefined,
    pullStoppedAt:
      output.pullStoppedAt !== undefined && output.pullStoppedAt !== null
        ? new Date(Math.round(output.pullStoppedAt * 1000))
        : undefined,
    startedAt:
      output.startedAt !== undefined && output.startedAt !== null
        ? new Date(Math.round(output.startedAt * 1000))
        : undefined,
    startedBy: output.startedBy !== undefined && output.startedBy !== null ? output.startedBy : undefined,
    stopCode: output.stopCode !== undefined && output.stopCode !== null ? output.stopCode : undefined,
    stoppedAt:
      output.stoppedAt !== undefined && output.stoppedAt !== null
        ? new Date(Math.round(output.stoppedAt * 1000))
        : undefined,
    stoppedReason:
      output.stoppedReason !== undefined && output.stoppedReason !== null ? output.stoppedReason : undefined,
    stoppingAt:
      output.stoppingAt !== undefined && output.stoppingAt !== null
        ? new Date(Math.round(output.stoppingAt * 1000))
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    taskArn: output.taskArn !== undefined && output.taskArn !== null ? output.taskArn : undefined,
    taskDefinitionArn:
      output.taskDefinitionArn !== undefined && output.taskDefinitionArn !== null
        ? output.taskDefinitionArn
        : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_json1_1TaskDefinition = (output: any, context: __SerdeContext): TaskDefinition => {
  return {
    compatibilities:
      output.compatibilities !== undefined && output.compatibilities !== null
        ? deserializeAws_json1_1CompatibilityList(output.compatibilities, context)
        : undefined,
    containerDefinitions:
      output.containerDefinitions !== undefined && output.containerDefinitions !== null
        ? deserializeAws_json1_1ContainerDefinitions(output.containerDefinitions, context)
        : undefined,
    cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    executionRoleArn:
      output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
    family: output.family !== undefined && output.family !== null ? output.family : undefined,
    inferenceAccelerators:
      output.inferenceAccelerators !== undefined && output.inferenceAccelerators !== null
        ? deserializeAws_json1_1InferenceAccelerators(output.inferenceAccelerators, context)
        : undefined,
    ipcMode: output.ipcMode !== undefined && output.ipcMode !== null ? output.ipcMode : undefined,
    memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
    networkMode: output.networkMode !== undefined && output.networkMode !== null ? output.networkMode : undefined,
    pidMode: output.pidMode !== undefined && output.pidMode !== null ? output.pidMode : undefined,
    placementConstraints:
      output.placementConstraints !== undefined && output.placementConstraints !== null
        ? deserializeAws_json1_1TaskDefinitionPlacementConstraints(output.placementConstraints, context)
        : undefined,
    proxyConfiguration:
      output.proxyConfiguration !== undefined && output.proxyConfiguration !== null
        ? deserializeAws_json1_1ProxyConfiguration(output.proxyConfiguration, context)
        : undefined,
    requiresAttributes:
      output.requiresAttributes !== undefined && output.requiresAttributes !== null
        ? deserializeAws_json1_1RequiresAttributes(output.requiresAttributes, context)
        : undefined,
    requiresCompatibilities:
      output.requiresCompatibilities !== undefined && output.requiresCompatibilities !== null
        ? deserializeAws_json1_1CompatibilityList(output.requiresCompatibilities, context)
        : undefined,
    revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    taskDefinitionArn:
      output.taskDefinitionArn !== undefined && output.taskDefinitionArn !== null
        ? output.taskDefinitionArn
        : undefined,
    taskRoleArn: output.taskRoleArn !== undefined && output.taskRoleArn !== null ? output.taskRoleArn : undefined,
    volumes:
      output.volumes !== undefined && output.volumes !== null
        ? deserializeAws_json1_1VolumeList(output.volumes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TaskDefinitionPlacementConstraint = (
  output: any,
  context: __SerdeContext
): TaskDefinitionPlacementConstraint => {
  return {
    expression: output.expression !== undefined && output.expression !== null ? output.expression : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1TaskDefinitionPlacementConstraints = (
  output: any,
  context: __SerdeContext
): TaskDefinitionPlacementConstraint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context);
    });
};

const deserializeAws_json1_1TaskOverride = (output: any, context: __SerdeContext): TaskOverride => {
  return {
    containerOverrides:
      output.containerOverrides !== undefined && output.containerOverrides !== null
        ? deserializeAws_json1_1ContainerOverrides(output.containerOverrides, context)
        : undefined,
    cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    executionRoleArn:
      output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
    inferenceAcceleratorOverrides:
      output.inferenceAcceleratorOverrides !== undefined && output.inferenceAcceleratorOverrides !== null
        ? deserializeAws_json1_1InferenceAcceleratorOverrides(output.inferenceAcceleratorOverrides, context)
        : undefined,
    memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
    taskRoleArn: output.taskRoleArn !== undefined && output.taskRoleArn !== null ? output.taskRoleArn : undefined,
  } as any;
};

const deserializeAws_json1_1Tasks = (output: any, context: __SerdeContext): Task[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Task(entry, context);
    });
};

const deserializeAws_json1_1TaskSet = (output: any, context: __SerdeContext): TaskSet => {
  return {
    capacityProviderStrategy:
      output.capacityProviderStrategy !== undefined && output.capacityProviderStrategy !== null
        ? deserializeAws_json1_1CapacityProviderStrategy(output.capacityProviderStrategy, context)
        : undefined,
    clusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
    computedDesiredCount:
      output.computedDesiredCount !== undefined && output.computedDesiredCount !== null
        ? output.computedDesiredCount
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    externalId: output.externalId !== undefined && output.externalId !== null ? output.externalId : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    launchType: output.launchType !== undefined && output.launchType !== null ? output.launchType : undefined,
    loadBalancers:
      output.loadBalancers !== undefined && output.loadBalancers !== null
        ? deserializeAws_json1_1LoadBalancers(output.loadBalancers, context)
        : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined && output.networkConfiguration !== null
        ? deserializeAws_json1_1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    pendingCount: output.pendingCount !== undefined && output.pendingCount !== null ? output.pendingCount : undefined,
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
    runningCount: output.runningCount !== undefined && output.runningCount !== null ? output.runningCount : undefined,
    scale:
      output.scale !== undefined && output.scale !== null
        ? deserializeAws_json1_1Scale(output.scale, context)
        : undefined,
    serviceArn: output.serviceArn !== undefined && output.serviceArn !== null ? output.serviceArn : undefined,
    serviceRegistries:
      output.serviceRegistries !== undefined && output.serviceRegistries !== null
        ? deserializeAws_json1_1ServiceRegistries(output.serviceRegistries, context)
        : undefined,
    stabilityStatus:
      output.stabilityStatus !== undefined && output.stabilityStatus !== null ? output.stabilityStatus : undefined,
    stabilityStatusAt:
      output.stabilityStatusAt !== undefined && output.stabilityStatusAt !== null
        ? new Date(Math.round(output.stabilityStatusAt * 1000))
        : undefined,
    startedBy: output.startedBy !== undefined && output.startedBy !== null ? output.startedBy : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null ? output.taskDefinition : undefined,
    taskSetArn: output.taskSetArn !== undefined && output.taskSetArn !== null ? output.taskSetArn : undefined,
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? new Date(Math.round(output.updatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1TaskSetNotFoundException = (
  output: any,
  context: __SerdeContext
): TaskSetNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1TaskSets = (output: any, context: __SerdeContext): TaskSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TaskSet(entry, context);
    });
};

const deserializeAws_json1_1Tmpfs = (output: any, context: __SerdeContext): Tmpfs => {
  return {
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
    mountOptions:
      output.mountOptions !== undefined && output.mountOptions !== null
        ? deserializeAws_json1_1StringList(output.mountOptions, context)
        : undefined,
    size: output.size !== undefined && output.size !== null ? output.size : undefined,
  } as any;
};

const deserializeAws_json1_1TmpfsList = (output: any, context: __SerdeContext): Tmpfs[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tmpfs(entry, context);
    });
};

const deserializeAws_json1_1Ulimit = (output: any, context: __SerdeContext): Ulimit => {
  return {
    hardLimit: output.hardLimit !== undefined && output.hardLimit !== null ? output.hardLimit : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    softLimit: output.softLimit !== undefined && output.softLimit !== null ? output.softLimit : undefined,
  } as any;
};

const deserializeAws_json1_1UlimitList = (output: any, context: __SerdeContext): Ulimit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Ulimit(entry, context);
    });
};

const deserializeAws_json1_1UnsupportedFeatureException = (
  output: any,
  context: __SerdeContext
): UnsupportedFeatureException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateCapacityProviderResponse = (
  output: any,
  context: __SerdeContext
): UpdateCapacityProviderResponse => {
  return {
    capacityProvider:
      output.capacityProvider !== undefined && output.capacityProvider !== null
        ? deserializeAws_json1_1CapacityProvider(output.capacityProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateClusterSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateClusterSettingsResponse => {
  return {
    cluster:
      output.cluster !== undefined && output.cluster !== null
        ? deserializeAws_json1_1Cluster(output.cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateContainerAgentResponse = (
  output: any,
  context: __SerdeContext
): UpdateContainerAgentResponse => {
  return {
    containerInstance:
      output.containerInstance !== undefined && output.containerInstance !== null
        ? deserializeAws_json1_1ContainerInstance(output.containerInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateContainerInstancesStateResponse = (
  output: any,
  context: __SerdeContext
): UpdateContainerInstancesStateResponse => {
  return {
    containerInstances:
      output.containerInstances !== undefined && output.containerInstances !== null
        ? deserializeAws_json1_1ContainerInstances(output.containerInstances, context)
        : undefined,
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateInProgressException = (
  output: any,
  context: __SerdeContext
): UpdateInProgressException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateServicePrimaryTaskSetResponse => {
  return {
    taskSet:
      output.taskSet !== undefined && output.taskSet !== null
        ? deserializeAws_json1_1TaskSet(output.taskSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateServiceResponse = (output: any, context: __SerdeContext): UpdateServiceResponse => {
  return {
    service:
      output.service !== undefined && output.service !== null
        ? deserializeAws_json1_1Service(output.service, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateTaskSetResponse = (output: any, context: __SerdeContext): UpdateTaskSetResponse => {
  return {
    taskSet:
      output.taskSet !== undefined && output.taskSet !== null
        ? deserializeAws_json1_1TaskSet(output.taskSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1VersionInfo = (output: any, context: __SerdeContext): VersionInfo => {
  return {
    agentHash: output.agentHash !== undefined && output.agentHash !== null ? output.agentHash : undefined,
    agentVersion: output.agentVersion !== undefined && output.agentVersion !== null ? output.agentVersion : undefined,
    dockerVersion:
      output.dockerVersion !== undefined && output.dockerVersion !== null ? output.dockerVersion : undefined,
  } as any;
};

const deserializeAws_json1_1Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    dockerVolumeConfiguration:
      output.dockerVolumeConfiguration !== undefined && output.dockerVolumeConfiguration !== null
        ? deserializeAws_json1_1DockerVolumeConfiguration(output.dockerVolumeConfiguration, context)
        : undefined,
    efsVolumeConfiguration:
      output.efsVolumeConfiguration !== undefined && output.efsVolumeConfiguration !== null
        ? deserializeAws_json1_1EFSVolumeConfiguration(output.efsVolumeConfiguration, context)
        : undefined,
    fsxWindowsFileServerVolumeConfiguration:
      output.fsxWindowsFileServerVolumeConfiguration !== undefined &&
      output.fsxWindowsFileServerVolumeConfiguration !== null
        ? deserializeAws_json1_1FSxWindowsFileServerVolumeConfiguration(
            output.fsxWindowsFileServerVolumeConfiguration,
            context
          )
        : undefined,
    host:
      output.host !== undefined && output.host !== null
        ? deserializeAws_json1_1HostVolumeProperties(output.host, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_json1_1VolumeFrom = (output: any, context: __SerdeContext): VolumeFrom => {
  return {
    readOnly: output.readOnly !== undefined && output.readOnly !== null ? output.readOnly : undefined,
    sourceContainer:
      output.sourceContainer !== undefined && output.sourceContainer !== null ? output.sourceContainer : undefined,
  } as any;
};

const deserializeAws_json1_1VolumeFromList = (output: any, context: __SerdeContext): VolumeFrom[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VolumeFrom(entry, context);
    });
};

const deserializeAws_json1_1VolumeList = (output: any, context: __SerdeContext): Volume[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Volume(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
