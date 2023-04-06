// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import {
  DeleteTaskDefinitionsCommandInput,
  DeleteTaskDefinitionsCommandOutput,
} from "../commands/DeleteTaskDefinitionsCommand";
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
import { DescribeTasksCommandInput, DescribeTasksCommandOutput } from "../commands/DescribeTasksCommand";
import { DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput } from "../commands/DescribeTaskSetsCommand";
import {
  DiscoverPollEndpointCommandInput,
  DiscoverPollEndpointCommandOutput,
} from "../commands/DiscoverPollEndpointCommand";
import { ExecuteCommandCommandInput, ExecuteCommandCommandOutput } from "../commands/ExecuteCommandCommand";
import { GetTaskProtectionCommandInput, GetTaskProtectionCommandOutput } from "../commands/GetTaskProtectionCommand";
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
import {
  ListServicesByNamespaceCommandInput,
  ListServicesByNamespaceCommandOutput,
} from "../commands/ListServicesByNamespaceCommand";
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
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "../commands/UpdateClusterCommand";
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
import {
  UpdateTaskProtectionCommandInput,
  UpdateTaskProtectionCommandOutput,
} from "../commands/UpdateTaskProtectionCommand";
import { UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput } from "../commands/UpdateTaskSetCommand";
import { ECSServiceException as __BaseException } from "../models/ECSServiceException";
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
  ClusterConfiguration,
  ClusterContainsContainerInstancesException,
  ClusterContainsServicesException,
  ClusterContainsTasksException,
  ClusterField,
  ClusterNotFoundException,
  ClusterServiceConnectDefaults,
  ClusterServiceConnectDefaultsRequest,
  ClusterSetting,
  Compatibility,
  Container,
  ContainerDefinition,
  ContainerDependency,
  ContainerInstance,
  ContainerInstanceField,
  ContainerInstanceHealthStatus,
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
  DeleteTaskDefinitionsRequest,
  DeleteTaskDefinitionsResponse,
  DeleteTaskSetRequest,
  DeleteTaskSetResponse,
  Deployment,
  DeploymentAlarms,
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
  EphemeralStorage,
  ExecuteCommandConfiguration,
  ExecuteCommandLogConfiguration,
  ExecuteCommandRequest,
  ExecuteCommandResponse,
  Failure,
  FirelensConfiguration,
  FSxWindowsFileServerAuthorizationConfig,
  FSxWindowsFileServerVolumeConfiguration,
  GetTaskProtectionRequest,
  GetTaskProtectionResponse,
  HealthCheck,
  HostEntry,
  HostVolumeProperties,
  InferenceAccelerator,
  InferenceAcceleratorOverride,
  InstanceHealthCheckResult,
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
  ListServicesByNamespaceRequest,
  ListServicesByNamespaceResponse,
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
  ManagedAgent,
  ManagedAgentStateChange,
  ManagedScaling,
  MissingVersionException,
  MountPoint,
  NamespaceNotFoundException,
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
  ProtectedTask,
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
  RuntimePlatform,
  Scale,
  Secret,
  ServerException,
  Service,
  ServiceConnectClientAlias,
  ServiceConnectConfiguration,
  ServiceConnectService,
  ServiceConnectServiceResource,
  ServiceEvent,
  ServiceField,
  ServiceNotActiveException,
  ServiceNotFoundException,
  ServiceRegistry,
  Session,
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
  TargetNotConnectedException,
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
  UpdateClusterRequest,
  UpdateClusterResponse,
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
  UpdateTaskProtectionRequest,
  UpdateTaskProtectionResponse,
  UpdateTaskSetRequest,
  UpdateTaskSetResponse,
  VersionInfo,
  Volume,
  VolumeFrom,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateCapacityProviderCommand
 */
export const se_CreateCapacityProviderCommand = async (
  input: CreateCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
  };
  let body: any;
  body = JSON.stringify(se_CreateCapacityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateCluster",
  };
  let body: any;
  body = JSON.stringify(se_CreateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateServiceCommand
 */
export const se_CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateService",
  };
  let body: any;
  body = JSON.stringify(se_CreateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTaskSetCommand
 */
export const se_CreateTaskSetCommand = async (
  input: CreateTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateTaskSet",
  };
  let body: any;
  body = JSON.stringify(se_CreateTaskSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAccountSettingCommand
 */
export const se_DeleteAccountSettingCommand = async (
  input: DeleteAccountSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteAccountSetting",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAccountSettingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAttributesCommand
 */
export const se_DeleteAttributesCommand = async (
  input: DeleteAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteAttributes",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCapacityProviderCommand
 */
export const se_DeleteCapacityProviderCommand = async (
  input: DeleteCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCapacityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteCluster",
  };
  let body: any;
  body = JSON.stringify(se_DeleteClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServiceCommand
 */
export const se_DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteService",
  };
  let body: any;
  body = JSON.stringify(se_DeleteServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTaskDefinitionsCommand
 */
export const se_DeleteTaskDefinitionsCommand = async (
  input: DeleteTaskDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTaskDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTaskSetCommand
 */
export const se_DeleteTaskSetCommand = async (
  input: DeleteTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteTaskSet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTaskSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterContainerInstanceCommand
 */
export const se_DeregisterContainerInstanceCommand = async (
  input: DeregisterContainerInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterContainerInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterTaskDefinitionCommand
 */
export const se_DeregisterTaskDefinitionCommand = async (
  input: DeregisterTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterTaskDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCapacityProvidersCommand
 */
export const se_DescribeCapacityProvidersCommand = async (
  input: DescribeCapacityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCapacityProvidersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClustersCommand
 */
export const se_DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeClusters",
  };
  let body: any;
  body = JSON.stringify(se_DescribeClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeContainerInstancesCommand
 */
export const se_DescribeContainerInstancesCommand = async (
  input: DescribeContainerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances",
  };
  let body: any;
  body = JSON.stringify(se_DescribeContainerInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServicesCommand
 */
export const se_DescribeServicesCommand = async (
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeServices",
  };
  let body: any;
  body = JSON.stringify(se_DescribeServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTaskDefinitionCommand
 */
export const se_DescribeTaskDefinitionCommand = async (
  input: DescribeTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTaskDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTasksCommand
 */
export const se_DescribeTasksCommand = async (
  input: DescribeTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTasks",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTaskSetsCommand
 */
export const se_DescribeTaskSetsCommand = async (
  input: DescribeTaskSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTaskSets",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTaskSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DiscoverPollEndpointCommand
 */
export const se_DiscoverPollEndpointCommand = async (
  input: DiscoverPollEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_DiscoverPollEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExecuteCommandCommand
 */
export const se_ExecuteCommandCommand = async (
  input: ExecuteCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ExecuteCommand",
  };
  let body: any;
  body = JSON.stringify(se_ExecuteCommandRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTaskProtectionCommand
 */
export const se_GetTaskProtectionCommand = async (
  input: GetTaskProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.GetTaskProtection",
  };
  let body: any;
  body = JSON.stringify(se_GetTaskProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountSettingsCommand
 */
export const se_ListAccountSettingsCommand = async (
  input: ListAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListAccountSettings",
  };
  let body: any;
  body = JSON.stringify(se_ListAccountSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAttributesCommand
 */
export const se_ListAttributesCommand = async (
  input: ListAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListAttributes",
  };
  let body: any;
  body = JSON.stringify(se_ListAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListClusters",
  };
  let body: any;
  body = JSON.stringify(se_ListClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListContainerInstancesCommand
 */
export const se_ListContainerInstancesCommand = async (
  input: ListContainerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListContainerInstances",
  };
  let body: any;
  body = JSON.stringify(se_ListContainerInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServicesCommand
 */
export const se_ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListServices",
  };
  let body: any;
  body = JSON.stringify(se_ListServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServicesByNamespaceCommand
 */
export const se_ListServicesByNamespaceCommand = async (
  input: ListServicesByNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListServicesByNamespace",
  };
  let body: any;
  body = JSON.stringify(se_ListServicesByNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTaskDefinitionFamiliesCommand
 */
export const se_ListTaskDefinitionFamiliesCommand = async (
  input: ListTaskDefinitionFamiliesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies",
  };
  let body: any;
  body = JSON.stringify(se_ListTaskDefinitionFamiliesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTaskDefinitionsCommand
 */
export const se_ListTaskDefinitionsCommand = async (
  input: ListTaskDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions",
  };
  let body: any;
  body = JSON.stringify(se_ListTaskDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTasksCommand
 */
export const se_ListTasksCommand = async (
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTasks",
  };
  let body: any;
  body = JSON.stringify(se_ListTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAccountSettingCommand
 */
export const se_PutAccountSettingCommand = async (
  input: PutAccountSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAccountSetting",
  };
  let body: any;
  body = JSON.stringify(se_PutAccountSettingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAccountSettingDefaultCommand
 */
export const se_PutAccountSettingDefaultCommand = async (
  input: PutAccountSettingDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault",
  };
  let body: any;
  body = JSON.stringify(se_PutAccountSettingDefaultRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAttributesCommand
 */
export const se_PutAttributesCommand = async (
  input: PutAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAttributes",
  };
  let body: any;
  body = JSON.stringify(se_PutAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutClusterCapacityProvidersCommand
 */
export const se_PutClusterCapacityProvidersCommand = async (
  input: PutClusterCapacityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders",
  };
  let body: any;
  body = JSON.stringify(se_PutClusterCapacityProvidersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterContainerInstanceCommand
 */
export const se_RegisterContainerInstanceCommand = async (
  input: RegisterContainerInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance",
  };
  let body: any;
  body = JSON.stringify(se_RegisterContainerInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterTaskDefinitionCommand
 */
export const se_RegisterTaskDefinitionCommand = async (
  input: RegisterTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition",
  };
  let body: any;
  body = JSON.stringify(se_RegisterTaskDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RunTaskCommand
 */
export const se_RunTaskCommand = async (
  input: RunTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.RunTask",
  };
  let body: any;
  body = JSON.stringify(se_RunTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTaskCommand
 */
export const se_StartTaskCommand = async (
  input: StartTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.StartTask",
  };
  let body: any;
  body = JSON.stringify(se_StartTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTaskCommand
 */
export const se_StopTaskCommand = async (
  input: StopTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.StopTask",
  };
  let body: any;
  body = JSON.stringify(se_StopTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SubmitAttachmentStateChangesCommand
 */
export const se_SubmitAttachmentStateChangesCommand = async (
  input: SubmitAttachmentStateChangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges",
  };
  let body: any;
  body = JSON.stringify(se_SubmitAttachmentStateChangesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SubmitContainerStateChangeCommand
 */
export const se_SubmitContainerStateChangeCommand = async (
  input: SubmitContainerStateChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange",
  };
  let body: any;
  body = JSON.stringify(se_SubmitContainerStateChangeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SubmitTaskStateChangeCommand
 */
export const se_SubmitTaskStateChangeCommand = async (
  input: SubmitTaskStateChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange",
  };
  let body: any;
  body = JSON.stringify(se_SubmitTaskStateChangeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCapacityProviderCommand
 */
export const se_UpdateCapacityProviderCommand = async (
  input: UpdateCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCapacityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClusterCommand
 */
export const se_UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateCluster",
  };
  let body: any;
  body = JSON.stringify(se_UpdateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClusterSettingsCommand
 */
export const se_UpdateClusterSettingsCommand = async (
  input: UpdateClusterSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateClusterSettings",
  };
  let body: any;
  body = JSON.stringify(se_UpdateClusterSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContainerAgentCommand
 */
export const se_UpdateContainerAgentCommand = async (
  input: UpdateContainerAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent",
  };
  let body: any;
  body = JSON.stringify(se_UpdateContainerAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContainerInstancesStateCommand
 */
export const se_UpdateContainerInstancesStateCommand = async (
  input: UpdateContainerInstancesStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState",
  };
  let body: any;
  body = JSON.stringify(se_UpdateContainerInstancesStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServiceCommand
 */
export const se_UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateService",
  };
  let body: any;
  body = JSON.stringify(se_UpdateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServicePrimaryTaskSetCommand
 */
export const se_UpdateServicePrimaryTaskSetCommand = async (
  input: UpdateServicePrimaryTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateServicePrimaryTaskSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTaskProtectionCommand
 */
export const se_UpdateTaskProtectionCommand = async (
  input: UpdateTaskProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateTaskProtection",
  };
  let body: any;
  body = JSON.stringify(se_UpdateTaskProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTaskSetCommand
 */
export const se_UpdateTaskSetCommand = async (
  input: UpdateTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateTaskSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateTaskSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateCapacityProviderCommand
 */
export const de_CreateCapacityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapacityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCapacityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCapacityProviderResponse(data, context);
  const response: CreateCapacityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCapacityProviderCommandError
 */
const de_CreateCapacityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapacityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      throw await de_UpdateInProgressExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateClusterCommandError
 */
const de_CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateServiceCommand
 */
export const de_CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServiceResponse(data, context);
  const response: CreateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateServiceCommandError
 */
const de_CreateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NamespaceNotFoundException":
    case "com.amazonaws.ecs#NamespaceNotFoundException":
      throw await de_NamespaceNotFoundExceptionRes(parsedOutput, context);
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      throw await de_PlatformTaskDefinitionIncompatibilityExceptionRes(parsedOutput, context);
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      throw await de_PlatformUnknownExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTaskSetCommand
 */
export const de_CreateTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTaskSetResponse(data, context);
  const response: CreateTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTaskSetCommandError
 */
const de_CreateTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NamespaceNotFoundException":
    case "com.amazonaws.ecs#NamespaceNotFoundException":
      throw await de_NamespaceNotFoundExceptionRes(parsedOutput, context);
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      throw await de_PlatformTaskDefinitionIncompatibilityExceptionRes(parsedOutput, context);
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      throw await de_PlatformUnknownExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      throw await de_ServiceNotActiveExceptionRes(parsedOutput, context);
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      throw await de_ServiceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAccountSettingCommand
 */
export const de_DeleteAccountSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccountSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAccountSettingResponse(data, context);
  const response: DeleteAccountSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAccountSettingCommandError
 */
const de_DeleteAccountSettingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSettingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAttributesCommand
 */
export const de_DeleteAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAttributesResponse(data, context);
  const response: DeleteAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAttributesCommandError
 */
const de_DeleteAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.ecs#TargetNotFoundException":
      throw await de_TargetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCapacityProviderCommand
 */
export const de_DeleteCapacityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCapacityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCapacityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCapacityProviderResponse(data, context);
  const response: DeleteCapacityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCapacityProviderCommandError
 */
const de_DeleteCapacityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCapacityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteClusterCommandError
 */
const de_DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterContainsContainerInstancesException":
    case "com.amazonaws.ecs#ClusterContainsContainerInstancesException":
      throw await de_ClusterContainsContainerInstancesExceptionRes(parsedOutput, context);
    case "ClusterContainsServicesException":
    case "com.amazonaws.ecs#ClusterContainsServicesException":
      throw await de_ClusterContainsServicesExceptionRes(parsedOutput, context);
    case "ClusterContainsTasksException":
    case "com.amazonaws.ecs#ClusterContainsTasksException":
      throw await de_ClusterContainsTasksExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      throw await de_UpdateInProgressExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteServiceCommand
 */
export const de_DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServiceResponse(data, context);
  const response: DeleteServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteServiceCommandError
 */
const de_DeleteServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      throw await de_ServiceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTaskDefinitionsCommand
 */
export const de_DeleteTaskDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTaskDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTaskDefinitionsResponse(data, context);
  const response: DeleteTaskDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTaskDefinitionsCommandError
 */
const de_DeleteTaskDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTaskSetCommand
 */
export const de_DeleteTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTaskSetResponse(data, context);
  const response: DeleteTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTaskSetCommandError
 */
const de_DeleteTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      throw await de_ServiceNotActiveExceptionRes(parsedOutput, context);
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      throw await de_ServiceNotFoundExceptionRes(parsedOutput, context);
    case "TaskSetNotFoundException":
    case "com.amazonaws.ecs#TaskSetNotFoundException":
      throw await de_TaskSetNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterContainerInstanceCommand
 */
export const de_DeregisterContainerInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterContainerInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterContainerInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterContainerInstanceResponse(data, context);
  const response: DeregisterContainerInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterContainerInstanceCommandError
 */
const de_DeregisterContainerInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterContainerInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterTaskDefinitionCommand
 */
export const de_DeregisterTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterTaskDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterTaskDefinitionResponse(data, context);
  const response: DeregisterTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterTaskDefinitionCommandError
 */
const de_DeregisterTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCapacityProvidersCommand
 */
export const de_DescribeCapacityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCapacityProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCapacityProvidersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCapacityProvidersResponse(data, context);
  const response: DescribeCapacityProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCapacityProvidersCommandError
 */
const de_DescribeCapacityProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCapacityProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeClustersCommand
 */
export const de_DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeClustersCommandError
 */
const de_DescribeClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeContainerInstancesCommand
 */
export const de_DescribeContainerInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeContainerInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeContainerInstancesResponse(data, context);
  const response: DescribeContainerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeContainerInstancesCommandError
 */
const de_DescribeContainerInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeServicesCommand
 */
export const de_DescribeServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServicesResponse(data, context);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeServicesCommandError
 */
const de_DescribeServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTaskDefinitionCommand
 */
export const de_DescribeTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTaskDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTaskDefinitionResponse(data, context);
  const response: DescribeTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTaskDefinitionCommandError
 */
const de_DescribeTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTasksCommand
 */
export const de_DescribeTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTasksResponse(data, context);
  const response: DescribeTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTasksCommandError
 */
const de_DescribeTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTaskSetsCommand
 */
export const de_DescribeTaskSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTaskSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTaskSetsResponse(data, context);
  const response: DescribeTaskSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTaskSetsCommandError
 */
const de_DescribeTaskSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      throw await de_ServiceNotActiveExceptionRes(parsedOutput, context);
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      throw await de_ServiceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DiscoverPollEndpointCommand
 */
export const de_DiscoverPollEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverPollEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DiscoverPollEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DiscoverPollEndpointResponse(data, context);
  const response: DiscoverPollEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DiscoverPollEndpointCommandError
 */
const de_DiscoverPollEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverPollEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ExecuteCommandCommand
 */
export const de_ExecuteCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteCommandCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExecuteCommandCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExecuteCommandResponse(data, context);
  const response: ExecuteCommandCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExecuteCommandCommandError
 */
const de_ExecuteCommandCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteCommandCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "TargetNotConnectedException":
    case "com.amazonaws.ecs#TargetNotConnectedException":
      throw await de_TargetNotConnectedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetTaskProtectionCommand
 */
export const de_GetTaskProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaskProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTaskProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTaskProtectionResponse(data, context);
  const response: GetTaskProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetTaskProtectionCommandError
 */
const de_GetTaskProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaskProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ecs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAccountSettingsCommand
 */
export const de_ListAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountSettingsResponse(data, context);
  const response: ListAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAccountSettingsCommandError
 */
const de_ListAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAttributesCommand
 */
export const de_ListAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAttributesResponse(data, context);
  const response: ListAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAttributesCommandError
 */
const de_ListAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListClustersCommand
 */
export const de_ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListClustersResponse(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListClustersCommandError
 */
const de_ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListContainerInstancesCommand
 */
export const de_ListContainerInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListContainerInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListContainerInstancesResponse(data, context);
  const response: ListContainerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListContainerInstancesCommandError
 */
const de_ListContainerInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListServicesCommand
 */
export const de_ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServicesCommandError
 */
const de_ListServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListServicesByNamespaceCommand
 */
export const de_ListServicesByNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesByNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServicesByNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServicesByNamespaceResponse(data, context);
  const response: ListServicesByNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServicesByNamespaceCommandError
 */
const de_ListServicesByNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesByNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NamespaceNotFoundException":
    case "com.amazonaws.ecs#NamespaceNotFoundException":
      throw await de_NamespaceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTaskDefinitionFamiliesCommand
 */
export const de_ListTaskDefinitionFamiliesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionFamiliesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTaskDefinitionFamiliesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTaskDefinitionFamiliesResponse(data, context);
  const response: ListTaskDefinitionFamiliesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError
 */
const de_ListTaskDefinitionFamiliesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionFamiliesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTaskDefinitionsCommand
 */
export const de_ListTaskDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTaskDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTaskDefinitionsResponse(data, context);
  const response: ListTaskDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTaskDefinitionsCommandError
 */
const de_ListTaskDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTasksCommand
 */
export const de_ListTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTasksResponse(data, context);
  const response: ListTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTasksCommandError
 */
const de_ListTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      throw await de_ServiceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutAccountSettingCommand
 */
export const de_PutAccountSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAccountSettingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAccountSettingResponse(data, context);
  const response: PutAccountSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAccountSettingCommandError
 */
const de_PutAccountSettingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutAccountSettingDefaultCommand
 */
export const de_PutAccountSettingDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingDefaultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAccountSettingDefaultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAccountSettingDefaultResponse(data, context);
  const response: PutAccountSettingDefaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAccountSettingDefaultCommandError
 */
const de_PutAccountSettingDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutAttributesCommand
 */
export const de_PutAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAttributesResponse(data, context);
  const response: PutAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAttributesCommandError
 */
const de_PutAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AttributeLimitExceededException":
    case "com.amazonaws.ecs#AttributeLimitExceededException":
      throw await de_AttributeLimitExceededExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.ecs#TargetNotFoundException":
      throw await de_TargetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutClusterCapacityProvidersCommand
 */
export const de_PutClusterCapacityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClusterCapacityProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutClusterCapacityProvidersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutClusterCapacityProvidersResponse(data, context);
  const response: PutClusterCapacityProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutClusterCapacityProvidersCommandError
 */
const de_PutClusterCapacityProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClusterCapacityProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.ecs#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      throw await de_UpdateInProgressExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterContainerInstanceCommand
 */
export const de_RegisterContainerInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterContainerInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterContainerInstanceResponse(data, context);
  const response: RegisterContainerInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterContainerInstanceCommandError
 */
const de_RegisterContainerInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterTaskDefinitionCommand
 */
export const de_RegisterTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterTaskDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterTaskDefinitionResponse(data, context);
  const response: RegisterTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterTaskDefinitionCommandError
 */
const de_RegisterTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RunTaskCommand
 */
export const de_RunTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RunTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RunTaskResponse(data, context);
  const response: RunTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RunTaskCommandError
 */
const de_RunTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BlockedException":
    case "com.amazonaws.ecs#BlockedException":
      throw await de_BlockedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      throw await de_PlatformTaskDefinitionIncompatibilityExceptionRes(parsedOutput, context);
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      throw await de_PlatformUnknownExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartTaskCommand
 */
export const de_StartTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartTaskResponse(data, context);
  const response: StartTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartTaskCommandError
 */
const de_StartTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopTaskCommand
 */
export const de_StopTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopTaskResponse(data, context);
  const response: StopTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopTaskCommandError
 */
const de_StopTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SubmitAttachmentStateChangesCommand
 */
export const de_SubmitAttachmentStateChangesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitAttachmentStateChangesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SubmitAttachmentStateChangesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SubmitAttachmentStateChangesResponse(data, context);
  const response: SubmitAttachmentStateChangesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SubmitAttachmentStateChangesCommandError
 */
const de_SubmitAttachmentStateChangesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitAttachmentStateChangesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SubmitContainerStateChangeCommand
 */
export const de_SubmitContainerStateChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitContainerStateChangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SubmitContainerStateChangeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SubmitContainerStateChangeResponse(data, context);
  const response: SubmitContainerStateChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SubmitContainerStateChangeCommandError
 */
const de_SubmitContainerStateChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitContainerStateChangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SubmitTaskStateChangeCommand
 */
export const de_SubmitTaskStateChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitTaskStateChangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SubmitTaskStateChangeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SubmitTaskStateChangeResponse(data, context);
  const response: SubmitTaskStateChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SubmitTaskStateChangeCommandError
 */
const de_SubmitTaskStateChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitTaskStateChangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ecs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ecs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateCapacityProviderCommand
 */
export const de_UpdateCapacityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCapacityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCapacityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCapacityProviderResponse(data, context);
  const response: UpdateCapacityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCapacityProviderCommandError
 */
const de_UpdateCapacityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCapacityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateClusterCommand
 */
export const de_UpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateClusterResponse(data, context);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateClusterCommandError
 */
const de_UpdateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateClusterSettingsCommand
 */
export const de_UpdateClusterSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateClusterSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateClusterSettingsResponse(data, context);
  const response: UpdateClusterSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateClusterSettingsCommandError
 */
const de_UpdateClusterSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateContainerAgentCommand
 */
export const de_UpdateContainerAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateContainerAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateContainerAgentResponse(data, context);
  const response: UpdateContainerAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateContainerAgentCommandError
 */
const de_UpdateContainerAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingVersionException":
    case "com.amazonaws.ecs#MissingVersionException":
      throw await de_MissingVersionExceptionRes(parsedOutput, context);
    case "NoUpdateAvailableException":
    case "com.amazonaws.ecs#NoUpdateAvailableException":
      throw await de_NoUpdateAvailableExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      throw await de_UpdateInProgressExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateContainerInstancesStateCommand
 */
export const de_UpdateContainerInstancesStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerInstancesStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateContainerInstancesStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateContainerInstancesStateResponse(data, context);
  const response: UpdateContainerInstancesStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateContainerInstancesStateCommandError
 */
const de_UpdateContainerInstancesStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerInstancesStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateServiceCommand
 */
export const de_UpdateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceResponse(data, context);
  const response: UpdateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateServiceCommandError
 */
const de_UpdateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NamespaceNotFoundException":
    case "com.amazonaws.ecs#NamespaceNotFoundException":
      throw await de_NamespaceNotFoundExceptionRes(parsedOutput, context);
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      throw await de_PlatformTaskDefinitionIncompatibilityExceptionRes(parsedOutput, context);
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      throw await de_PlatformUnknownExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      throw await de_ServiceNotActiveExceptionRes(parsedOutput, context);
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      throw await de_ServiceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand
 */
export const de_UpdateServicePrimaryTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePrimaryTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServicePrimaryTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServicePrimaryTaskSetResponse(data, context);
  const response: UpdateServicePrimaryTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError
 */
const de_UpdateServicePrimaryTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePrimaryTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      throw await de_ServiceNotActiveExceptionRes(parsedOutput, context);
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      throw await de_ServiceNotFoundExceptionRes(parsedOutput, context);
    case "TaskSetNotFoundException":
    case "com.amazonaws.ecs#TaskSetNotFoundException":
      throw await de_TaskSetNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateTaskProtectionCommand
 */
export const de_UpdateTaskProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTaskProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTaskProtectionResponse(data, context);
  const response: UpdateTaskProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateTaskProtectionCommandError
 */
const de_UpdateTaskProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ecs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateTaskSetCommand
 */
export const de_UpdateTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTaskSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTaskSetResponse(data, context);
  const response: UpdateTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateTaskSetCommandError
 */
const de_UpdateTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      throw await de_ServiceNotActiveExceptionRes(parsedOutput, context);
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      throw await de_ServiceNotFoundExceptionRes(parsedOutput, context);
    case "TaskSetNotFoundException":
    case "com.amazonaws.ecs#TaskSetNotFoundException":
      throw await de_TaskSetNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AttributeLimitExceededExceptionRes
 */
const de_AttributeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttributeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AttributeLimitExceededException(body, context);
  const exception = new AttributeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BlockedExceptionRes
 */
const de_BlockedExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BlockedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BlockedException(body, context);
  const exception = new BlockedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClientExceptionRes
 */
const de_ClientExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ClientException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClientException(body, context);
  const exception = new ClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClusterContainsContainerInstancesExceptionRes
 */
const de_ClusterContainsContainerInstancesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterContainsContainerInstancesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterContainsContainerInstancesException(body, context);
  const exception = new ClusterContainsContainerInstancesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClusterContainsServicesExceptionRes
 */
const de_ClusterContainsServicesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterContainsServicesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterContainsServicesException(body, context);
  const exception = new ClusterContainsServicesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClusterContainsTasksExceptionRes
 */
const de_ClusterContainsTasksExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterContainsTasksException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterContainsTasksException(body, context);
  const exception = new ClusterContainsTasksException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClusterNotFoundExceptionRes
 */
const de_ClusterNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterNotFoundException(body, context);
  const exception = new ClusterNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MissingVersionExceptionRes
 */
const de_MissingVersionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingVersionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MissingVersionException(body, context);
  const exception = new MissingVersionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NamespaceNotFoundExceptionRes
 */
const de_NamespaceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NamespaceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NamespaceNotFoundException(body, context);
  const exception = new NamespaceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoUpdateAvailableExceptionRes
 */
const de_NoUpdateAvailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoUpdateAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoUpdateAvailableException(body, context);
  const exception = new NoUpdateAvailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionRes
 */
const de_PlatformTaskDefinitionIncompatibilityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformTaskDefinitionIncompatibilityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PlatformTaskDefinitionIncompatibilityException(body, context);
  const exception = new PlatformTaskDefinitionIncompatibilityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PlatformUnknownExceptionRes
 */
const de_PlatformUnknownExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformUnknownException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PlatformUnknownException(body, context);
  const exception = new PlatformUnknownException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServerExceptionRes
 */
const de_ServerExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerException(body, context);
  const exception = new ServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceNotActiveExceptionRes
 */
const de_ServiceNotActiveExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceNotActiveException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceNotActiveException(body, context);
  const exception = new ServiceNotActiveException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceNotFoundExceptionRes
 */
const de_ServiceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceNotFoundException(body, context);
  const exception = new ServiceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TargetNotConnectedExceptionRes
 */
const de_TargetNotConnectedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetNotConnectedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TargetNotConnectedException(body, context);
  const exception = new TargetNotConnectedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TargetNotFoundExceptionRes
 */
const de_TargetNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TargetNotFoundException(body, context);
  const exception = new TargetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TaskSetNotFoundExceptionRes
 */
const de_TaskSetNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskSetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TaskSetNotFoundException(body, context);
  const exception = new TaskSetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedFeatureExceptionRes
 */
const de_UnsupportedFeatureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedFeatureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedFeatureException(body, context);
  const exception = new UnsupportedFeatureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UpdateInProgressExceptionRes
 */
const de_UpdateInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UpdateInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UpdateInProgressException(body, context);
  const exception = new UpdateInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AttachmentStateChange
 */
const se_AttachmentStateChange = (input: AttachmentStateChange, context: __SerdeContext): any => {
  return {
    ...(input.attachmentArn != null && { attachmentArn: input.attachmentArn }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1AttachmentStateChanges
 */
const se_AttachmentStateChanges = (input: AttachmentStateChange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttachmentStateChange(entry, context);
    });
};

/**
 * serializeAws_json1_1Attribute
 */
const se_Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.targetId != null && { targetId: input.targetId }),
    ...(input.targetType != null && { targetType: input.targetType }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1Attributes
 */
const se_Attributes = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Attribute(entry, context);
    });
};

/**
 * serializeAws_json1_1AutoScalingGroupProvider
 */
const se_AutoScalingGroupProvider = (input: AutoScalingGroupProvider, context: __SerdeContext): any => {
  return {
    ...(input.autoScalingGroupArn != null && { autoScalingGroupArn: input.autoScalingGroupArn }),
    ...(input.managedScaling != null && { managedScaling: se_ManagedScaling(input.managedScaling, context) }),
    ...(input.managedTerminationProtection != null && {
      managedTerminationProtection: input.managedTerminationProtection,
    }),
  };
};

/**
 * serializeAws_json1_1AutoScalingGroupProviderUpdate
 */
const se_AutoScalingGroupProviderUpdate = (input: AutoScalingGroupProviderUpdate, context: __SerdeContext): any => {
  return {
    ...(input.managedScaling != null && { managedScaling: se_ManagedScaling(input.managedScaling, context) }),
    ...(input.managedTerminationProtection != null && {
      managedTerminationProtection: input.managedTerminationProtection,
    }),
  };
};

/**
 * serializeAws_json1_1AwsVpcConfiguration
 */
const se_AwsVpcConfiguration = (input: AwsVpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.assignPublicIp != null && { assignPublicIp: input.assignPublicIp }),
    ...(input.securityGroups != null && { securityGroups: se_StringList(input.securityGroups, context) }),
    ...(input.subnets != null && { subnets: se_StringList(input.subnets, context) }),
  };
};

/**
 * serializeAws_json1_1CapacityProviderFieldList
 */
const se_CapacityProviderFieldList = (input: (CapacityProviderField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CapacityProviderStrategy
 */
const se_CapacityProviderStrategy = (input: CapacityProviderStrategyItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CapacityProviderStrategyItem(entry, context);
    });
};

/**
 * serializeAws_json1_1CapacityProviderStrategyItem
 */
const se_CapacityProviderStrategyItem = (input: CapacityProviderStrategyItem, context: __SerdeContext): any => {
  return {
    ...(input.base != null && { base: input.base }),
    ...(input.capacityProvider != null && { capacityProvider: input.capacityProvider }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

/**
 * serializeAws_json1_1ClusterConfiguration
 */
const se_ClusterConfiguration = (input: ClusterConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.executeCommandConfiguration != null && {
      executeCommandConfiguration: se_ExecuteCommandConfiguration(input.executeCommandConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1ClusterFieldList
 */
const se_ClusterFieldList = (input: (ClusterField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ClusterServiceConnectDefaultsRequest
 */
const se_ClusterServiceConnectDefaultsRequest = (
  input: ClusterServiceConnectDefaultsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.namespace != null && { namespace: input.namespace }),
  };
};

/**
 * serializeAws_json1_1ClusterSetting
 */
const se_ClusterSetting = (input: ClusterSetting, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1ClusterSettings
 */
const se_ClusterSettings = (input: ClusterSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ClusterSetting(entry, context);
    });
};

/**
 * serializeAws_json1_1CompatibilityList
 */
const se_CompatibilityList = (input: (Compatibility | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ContainerDefinition
 */
const se_ContainerDefinition = (input: ContainerDefinition, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: se_StringList(input.command, context) }),
    ...(input.cpu != null && { cpu: input.cpu }),
    ...(input.dependsOn != null && { dependsOn: se_ContainerDependencies(input.dependsOn, context) }),
    ...(input.disableNetworking != null && { disableNetworking: input.disableNetworking }),
    ...(input.dnsSearchDomains != null && { dnsSearchDomains: se_StringList(input.dnsSearchDomains, context) }),
    ...(input.dnsServers != null && { dnsServers: se_StringList(input.dnsServers, context) }),
    ...(input.dockerLabels != null && { dockerLabels: se_DockerLabelsMap(input.dockerLabels, context) }),
    ...(input.dockerSecurityOptions != null && {
      dockerSecurityOptions: se_StringList(input.dockerSecurityOptions, context),
    }),
    ...(input.entryPoint != null && { entryPoint: se_StringList(input.entryPoint, context) }),
    ...(input.environment != null && { environment: se_EnvironmentVariables(input.environment, context) }),
    ...(input.environmentFiles != null && { environmentFiles: se_EnvironmentFiles(input.environmentFiles, context) }),
    ...(input.essential != null && { essential: input.essential }),
    ...(input.extraHosts != null && { extraHosts: se_HostEntryList(input.extraHosts, context) }),
    ...(input.firelensConfiguration != null && {
      firelensConfiguration: se_FirelensConfiguration(input.firelensConfiguration, context),
    }),
    ...(input.healthCheck != null && { healthCheck: se_HealthCheck(input.healthCheck, context) }),
    ...(input.hostname != null && { hostname: input.hostname }),
    ...(input.image != null && { image: input.image }),
    ...(input.interactive != null && { interactive: input.interactive }),
    ...(input.links != null && { links: se_StringList(input.links, context) }),
    ...(input.linuxParameters != null && { linuxParameters: se_LinuxParameters(input.linuxParameters, context) }),
    ...(input.logConfiguration != null && { logConfiguration: se_LogConfiguration(input.logConfiguration, context) }),
    ...(input.memory != null && { memory: input.memory }),
    ...(input.memoryReservation != null && { memoryReservation: input.memoryReservation }),
    ...(input.mountPoints != null && { mountPoints: se_MountPointList(input.mountPoints, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.portMappings != null && { portMappings: se_PortMappingList(input.portMappings, context) }),
    ...(input.privileged != null && { privileged: input.privileged }),
    ...(input.pseudoTerminal != null && { pseudoTerminal: input.pseudoTerminal }),
    ...(input.readonlyRootFilesystem != null && { readonlyRootFilesystem: input.readonlyRootFilesystem }),
    ...(input.repositoryCredentials != null && {
      repositoryCredentials: se_RepositoryCredentials(input.repositoryCredentials, context),
    }),
    ...(input.resourceRequirements != null && {
      resourceRequirements: se_ResourceRequirements(input.resourceRequirements, context),
    }),
    ...(input.secrets != null && { secrets: se_SecretList(input.secrets, context) }),
    ...(input.startTimeout != null && { startTimeout: input.startTimeout }),
    ...(input.stopTimeout != null && { stopTimeout: input.stopTimeout }),
    ...(input.systemControls != null && { systemControls: se_SystemControls(input.systemControls, context) }),
    ...(input.ulimits != null && { ulimits: se_UlimitList(input.ulimits, context) }),
    ...(input.user != null && { user: input.user }),
    ...(input.volumesFrom != null && { volumesFrom: se_VolumeFromList(input.volumesFrom, context) }),
    ...(input.workingDirectory != null && { workingDirectory: input.workingDirectory }),
  };
};

/**
 * serializeAws_json1_1ContainerDefinitions
 */
const se_ContainerDefinitions = (input: ContainerDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ContainerDefinition(entry, context);
    });
};

/**
 * serializeAws_json1_1ContainerDependencies
 */
const se_ContainerDependencies = (input: ContainerDependency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ContainerDependency(entry, context);
    });
};

/**
 * serializeAws_json1_1ContainerDependency
 */
const se_ContainerDependency = (input: ContainerDependency, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: input.condition }),
    ...(input.containerName != null && { containerName: input.containerName }),
  };
};

/**
 * serializeAws_json1_1ContainerInstanceFieldList
 */
const se_ContainerInstanceFieldList = (input: (ContainerInstanceField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ContainerOverride
 */
const se_ContainerOverride = (input: ContainerOverride, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: se_StringList(input.command, context) }),
    ...(input.cpu != null && { cpu: input.cpu }),
    ...(input.environment != null && { environment: se_EnvironmentVariables(input.environment, context) }),
    ...(input.environmentFiles != null && { environmentFiles: se_EnvironmentFiles(input.environmentFiles, context) }),
    ...(input.memory != null && { memory: input.memory }),
    ...(input.memoryReservation != null && { memoryReservation: input.memoryReservation }),
    ...(input.name != null && { name: input.name }),
    ...(input.resourceRequirements != null && {
      resourceRequirements: se_ResourceRequirements(input.resourceRequirements, context),
    }),
  };
};

/**
 * serializeAws_json1_1ContainerOverrides
 */
const se_ContainerOverrides = (input: ContainerOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ContainerOverride(entry, context);
    });
};

/**
 * serializeAws_json1_1ContainerStateChange
 */
const se_ContainerStateChange = (input: ContainerStateChange, context: __SerdeContext): any => {
  return {
    ...(input.containerName != null && { containerName: input.containerName }),
    ...(input.exitCode != null && { exitCode: input.exitCode }),
    ...(input.imageDigest != null && { imageDigest: input.imageDigest }),
    ...(input.networkBindings != null && { networkBindings: se_NetworkBindings(input.networkBindings, context) }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.runtimeId != null && { runtimeId: input.runtimeId }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1ContainerStateChanges
 */
const se_ContainerStateChanges = (input: ContainerStateChange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ContainerStateChange(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateCapacityProviderRequest
 */
const se_CreateCapacityProviderRequest = (input: CreateCapacityProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.autoScalingGroupProvider != null && {
      autoScalingGroupProvider: se_AutoScalingGroupProvider(input.autoScalingGroupProvider, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateClusterRequest
 */
const se_CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviders != null && { capacityProviders: se_StringList(input.capacityProviders, context) }),
    ...(input.clusterName != null && { clusterName: input.clusterName }),
    ...(input.configuration != null && { configuration: se_ClusterConfiguration(input.configuration, context) }),
    ...(input.defaultCapacityProviderStrategy != null && {
      defaultCapacityProviderStrategy: se_CapacityProviderStrategy(input.defaultCapacityProviderStrategy, context),
    }),
    ...(input.serviceConnectDefaults != null && {
      serviceConnectDefaults: se_ClusterServiceConnectDefaultsRequest(input.serviceConnectDefaults, context),
    }),
    ...(input.settings != null && { settings: se_ClusterSettings(input.settings, context) }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateServiceRequest
 */
const se_CreateServiceRequest = (input: CreateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviderStrategy != null && {
      capacityProviderStrategy: se_CapacityProviderStrategy(input.capacityProviderStrategy, context),
    }),
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.deploymentConfiguration != null && {
      deploymentConfiguration: se_DeploymentConfiguration(input.deploymentConfiguration, context),
    }),
    ...(input.deploymentController != null && {
      deploymentController: se_DeploymentController(input.deploymentController, context),
    }),
    ...(input.desiredCount != null && { desiredCount: input.desiredCount }),
    ...(input.enableECSManagedTags != null && { enableECSManagedTags: input.enableECSManagedTags }),
    ...(input.enableExecuteCommand != null && { enableExecuteCommand: input.enableExecuteCommand }),
    ...(input.healthCheckGracePeriodSeconds != null && {
      healthCheckGracePeriodSeconds: input.healthCheckGracePeriodSeconds,
    }),
    ...(input.launchType != null && { launchType: input.launchType }),
    ...(input.loadBalancers != null && { loadBalancers: se_LoadBalancers(input.loadBalancers, context) }),
    ...(input.networkConfiguration != null && {
      networkConfiguration: se_NetworkConfiguration(input.networkConfiguration, context),
    }),
    ...(input.placementConstraints != null && {
      placementConstraints: se_PlacementConstraints(input.placementConstraints, context),
    }),
    ...(input.placementStrategy != null && {
      placementStrategy: se_PlacementStrategies(input.placementStrategy, context),
    }),
    ...(input.platformVersion != null && { platformVersion: input.platformVersion }),
    ...(input.propagateTags != null && { propagateTags: input.propagateTags }),
    ...(input.role != null && { role: input.role }),
    ...(input.schedulingStrategy != null && { schedulingStrategy: input.schedulingStrategy }),
    ...(input.serviceConnectConfiguration != null && {
      serviceConnectConfiguration: se_ServiceConnectConfiguration(input.serviceConnectConfiguration, context),
    }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.serviceRegistries != null && {
      serviceRegistries: se_ServiceRegistries(input.serviceRegistries, context),
    }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.taskDefinition != null && { taskDefinition: input.taskDefinition }),
  };
};

/**
 * serializeAws_json1_1CreateTaskSetRequest
 */
const se_CreateTaskSetRequest = (input: CreateTaskSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviderStrategy != null && {
      capacityProviderStrategy: se_CapacityProviderStrategy(input.capacityProviderStrategy, context),
    }),
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.externalId != null && { externalId: input.externalId }),
    ...(input.launchType != null && { launchType: input.launchType }),
    ...(input.loadBalancers != null && { loadBalancers: se_LoadBalancers(input.loadBalancers, context) }),
    ...(input.networkConfiguration != null && {
      networkConfiguration: se_NetworkConfiguration(input.networkConfiguration, context),
    }),
    ...(input.platformVersion != null && { platformVersion: input.platformVersion }),
    ...(input.scale != null && { scale: se_Scale(input.scale, context) }),
    ...(input.service != null && { service: input.service }),
    ...(input.serviceRegistries != null && {
      serviceRegistries: se_ServiceRegistries(input.serviceRegistries, context),
    }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.taskDefinition != null && { taskDefinition: input.taskDefinition }),
  };
};

/**
 * serializeAws_json1_1DeleteAccountSettingRequest
 */
const se_DeleteAccountSettingRequest = (input: DeleteAccountSettingRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.principalArn != null && { principalArn: input.principalArn }),
  };
};

/**
 * serializeAws_json1_1DeleteAttributesRequest
 */
const se_DeleteAttributesRequest = (input: DeleteAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_Attributes(input.attributes, context) }),
    ...(input.cluster != null && { cluster: input.cluster }),
  };
};

/**
 * serializeAws_json1_1DeleteCapacityProviderRequest
 */
const se_DeleteCapacityProviderRequest = (input: DeleteCapacityProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProvider != null && { capacityProvider: input.capacityProvider }),
  };
};

/**
 * serializeAws_json1_1DeleteClusterRequest
 */
const se_DeleteClusterRequest = (input: DeleteClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
  };
};

/**
 * serializeAws_json1_1DeleteServiceRequest
 */
const se_DeleteServiceRequest = (input: DeleteServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.force != null && { force: input.force }),
    ...(input.service != null && { service: input.service }),
  };
};

/**
 * serializeAws_json1_1DeleteTaskDefinitionsRequest
 */
const se_DeleteTaskDefinitionsRequest = (input: DeleteTaskDefinitionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.taskDefinitions != null && { taskDefinitions: se_StringList(input.taskDefinitions, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteTaskSetRequest
 */
const se_DeleteTaskSetRequest = (input: DeleteTaskSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.force != null && { force: input.force }),
    ...(input.service != null && { service: input.service }),
    ...(input.taskSet != null && { taskSet: input.taskSet }),
  };
};

/**
 * serializeAws_json1_1DeploymentAlarms
 */
const se_DeploymentAlarms = (input: DeploymentAlarms, context: __SerdeContext): any => {
  return {
    ...(input.alarmNames != null && { alarmNames: se_StringList(input.alarmNames, context) }),
    ...(input.enable != null && { enable: input.enable }),
    ...(input.rollback != null && { rollback: input.rollback }),
  };
};

/**
 * serializeAws_json1_1DeploymentCircuitBreaker
 */
const se_DeploymentCircuitBreaker = (input: DeploymentCircuitBreaker, context: __SerdeContext): any => {
  return {
    ...(input.enable != null && { enable: input.enable }),
    ...(input.rollback != null && { rollback: input.rollback }),
  };
};

/**
 * serializeAws_json1_1DeploymentConfiguration
 */
const se_DeploymentConfiguration = (input: DeploymentConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.alarms != null && { alarms: se_DeploymentAlarms(input.alarms, context) }),
    ...(input.deploymentCircuitBreaker != null && {
      deploymentCircuitBreaker: se_DeploymentCircuitBreaker(input.deploymentCircuitBreaker, context),
    }),
    ...(input.maximumPercent != null && { maximumPercent: input.maximumPercent }),
    ...(input.minimumHealthyPercent != null && { minimumHealthyPercent: input.minimumHealthyPercent }),
  };
};

/**
 * serializeAws_json1_1DeploymentController
 */
const se_DeploymentController = (input: DeploymentController, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1DeregisterContainerInstanceRequest
 */
const se_DeregisterContainerInstanceRequest = (
  input: DeregisterContainerInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.containerInstance != null && { containerInstance: input.containerInstance }),
    ...(input.force != null && { force: input.force }),
  };
};

/**
 * serializeAws_json1_1DeregisterTaskDefinitionRequest
 */
const se_DeregisterTaskDefinitionRequest = (input: DeregisterTaskDefinitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.taskDefinition != null && { taskDefinition: input.taskDefinition }),
  };
};

/**
 * serializeAws_json1_1DescribeCapacityProvidersRequest
 */
const se_DescribeCapacityProvidersRequest = (input: DescribeCapacityProvidersRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviders != null && { capacityProviders: se_StringList(input.capacityProviders, context) }),
    ...(input.include != null && { include: se_CapacityProviderFieldList(input.include, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeClustersRequest
 */
const se_DescribeClustersRequest = (input: DescribeClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.clusters != null && { clusters: se_StringList(input.clusters, context) }),
    ...(input.include != null && { include: se_ClusterFieldList(input.include, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeContainerInstancesRequest
 */
const se_DescribeContainerInstancesRequest = (
  input: DescribeContainerInstancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.containerInstances != null && { containerInstances: se_StringList(input.containerInstances, context) }),
    ...(input.include != null && { include: se_ContainerInstanceFieldList(input.include, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeServicesRequest
 */
const se_DescribeServicesRequest = (input: DescribeServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.include != null && { include: se_ServiceFieldList(input.include, context) }),
    ...(input.services != null && { services: se_StringList(input.services, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeTaskDefinitionRequest
 */
const se_DescribeTaskDefinitionRequest = (input: DescribeTaskDefinitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.include != null && { include: se_TaskDefinitionFieldList(input.include, context) }),
    ...(input.taskDefinition != null && { taskDefinition: input.taskDefinition }),
  };
};

/**
 * serializeAws_json1_1DescribeTaskSetsRequest
 */
const se_DescribeTaskSetsRequest = (input: DescribeTaskSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.include != null && { include: se_TaskSetFieldList(input.include, context) }),
    ...(input.service != null && { service: input.service }),
    ...(input.taskSets != null && { taskSets: se_StringList(input.taskSets, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeTasksRequest
 */
const se_DescribeTasksRequest = (input: DescribeTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.include != null && { include: se_TaskFieldList(input.include, context) }),
    ...(input.tasks != null && { tasks: se_StringList(input.tasks, context) }),
  };
};

/**
 * serializeAws_json1_1Device
 */
const se_Device = (input: Device, context: __SerdeContext): any => {
  return {
    ...(input.containerPath != null && { containerPath: input.containerPath }),
    ...(input.hostPath != null && { hostPath: input.hostPath }),
    ...(input.permissions != null && { permissions: se_DeviceCgroupPermissions(input.permissions, context) }),
  };
};

/**
 * serializeAws_json1_1DeviceCgroupPermissions
 */
const se_DeviceCgroupPermissions = (input: (DeviceCgroupPermission | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DevicesList
 */
const se_DevicesList = (input: Device[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Device(entry, context);
    });
};

/**
 * serializeAws_json1_1DiscoverPollEndpointRequest
 */
const se_DiscoverPollEndpointRequest = (input: DiscoverPollEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.containerInstance != null && { containerInstance: input.containerInstance }),
  };
};

/**
 * serializeAws_json1_1DockerLabelsMap
 */
const se_DockerLabelsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1DockerVolumeConfiguration
 */
const se_DockerVolumeConfiguration = (input: DockerVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.autoprovision != null && { autoprovision: input.autoprovision }),
    ...(input.driver != null && { driver: input.driver }),
    ...(input.driverOpts != null && { driverOpts: se_StringMap(input.driverOpts, context) }),
    ...(input.labels != null && { labels: se_StringMap(input.labels, context) }),
    ...(input.scope != null && { scope: input.scope }),
  };
};

/**
 * serializeAws_json1_1EFSAuthorizationConfig
 */
const se_EFSAuthorizationConfig = (input: EFSAuthorizationConfig, context: __SerdeContext): any => {
  return {
    ...(input.accessPointId != null && { accessPointId: input.accessPointId }),
    ...(input.iam != null && { iam: input.iam }),
  };
};

/**
 * serializeAws_json1_1EFSVolumeConfiguration
 */
const se_EFSVolumeConfiguration = (input: EFSVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.authorizationConfig != null && {
      authorizationConfig: se_EFSAuthorizationConfig(input.authorizationConfig, context),
    }),
    ...(input.fileSystemId != null && { fileSystemId: input.fileSystemId }),
    ...(input.rootDirectory != null && { rootDirectory: input.rootDirectory }),
    ...(input.transitEncryption != null && { transitEncryption: input.transitEncryption }),
    ...(input.transitEncryptionPort != null && { transitEncryptionPort: input.transitEncryptionPort }),
  };
};

/**
 * serializeAws_json1_1EnvironmentFile
 */
const se_EnvironmentFile = (input: EnvironmentFile, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1EnvironmentFiles
 */
const se_EnvironmentFiles = (input: EnvironmentFile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EnvironmentFile(entry, context);
    });
};

/**
 * serializeAws_json1_1EnvironmentVariables
 */
const se_EnvironmentVariables = (input: KeyValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KeyValuePair(entry, context);
    });
};

/**
 * serializeAws_json1_1EphemeralStorage
 */
const se_EphemeralStorage = (input: EphemeralStorage, context: __SerdeContext): any => {
  return {
    ...(input.sizeInGiB != null && { sizeInGiB: input.sizeInGiB }),
  };
};

/**
 * serializeAws_json1_1ExecuteCommandConfiguration
 */
const se_ExecuteCommandConfiguration = (input: ExecuteCommandConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.logConfiguration != null && {
      logConfiguration: se_ExecuteCommandLogConfiguration(input.logConfiguration, context),
    }),
    ...(input.logging != null && { logging: input.logging }),
  };
};

/**
 * serializeAws_json1_1ExecuteCommandLogConfiguration
 */
const se_ExecuteCommandLogConfiguration = (input: ExecuteCommandLogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchEncryptionEnabled != null && {
      cloudWatchEncryptionEnabled: input.cloudWatchEncryptionEnabled,
    }),
    ...(input.cloudWatchLogGroupName != null && { cloudWatchLogGroupName: input.cloudWatchLogGroupName }),
    ...(input.s3BucketName != null && { s3BucketName: input.s3BucketName }),
    ...(input.s3EncryptionEnabled != null && { s3EncryptionEnabled: input.s3EncryptionEnabled }),
    ...(input.s3KeyPrefix != null && { s3KeyPrefix: input.s3KeyPrefix }),
  };
};

/**
 * serializeAws_json1_1ExecuteCommandRequest
 */
const se_ExecuteCommandRequest = (input: ExecuteCommandRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.command != null && { command: input.command }),
    ...(input.container != null && { container: input.container }),
    ...(input.interactive != null && { interactive: input.interactive }),
    ...(input.task != null && { task: input.task }),
  };
};

/**
 * serializeAws_json1_1FirelensConfiguration
 */
const se_FirelensConfiguration = (input: FirelensConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.options != null && { options: se_FirelensConfigurationOptionsMap(input.options, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1FirelensConfigurationOptionsMap
 */
const se_FirelensConfigurationOptionsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1FSxWindowsFileServerAuthorizationConfig
 */
const se_FSxWindowsFileServerAuthorizationConfig = (
  input: FSxWindowsFileServerAuthorizationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.credentialsParameter != null && { credentialsParameter: input.credentialsParameter }),
    ...(input.domain != null && { domain: input.domain }),
  };
};

/**
 * serializeAws_json1_1FSxWindowsFileServerVolumeConfiguration
 */
const se_FSxWindowsFileServerVolumeConfiguration = (
  input: FSxWindowsFileServerVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorizationConfig != null && {
      authorizationConfig: se_FSxWindowsFileServerAuthorizationConfig(input.authorizationConfig, context),
    }),
    ...(input.fileSystemId != null && { fileSystemId: input.fileSystemId }),
    ...(input.rootDirectory != null && { rootDirectory: input.rootDirectory }),
  };
};

/**
 * serializeAws_json1_1GetTaskProtectionRequest
 */
const se_GetTaskProtectionRequest = (input: GetTaskProtectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.tasks != null && { tasks: se_StringList(input.tasks, context) }),
  };
};

/**
 * serializeAws_json1_1HealthCheck
 */
const se_HealthCheck = (input: HealthCheck, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: se_StringList(input.command, context) }),
    ...(input.interval != null && { interval: input.interval }),
    ...(input.retries != null && { retries: input.retries }),
    ...(input.startPeriod != null && { startPeriod: input.startPeriod }),
    ...(input.timeout != null && { timeout: input.timeout }),
  };
};

/**
 * serializeAws_json1_1HostEntry
 */
const se_HostEntry = (input: HostEntry, context: __SerdeContext): any => {
  return {
    ...(input.hostname != null && { hostname: input.hostname }),
    ...(input.ipAddress != null && { ipAddress: input.ipAddress }),
  };
};

/**
 * serializeAws_json1_1HostEntryList
 */
const se_HostEntryList = (input: HostEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HostEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1HostVolumeProperties
 */
const se_HostVolumeProperties = (input: HostVolumeProperties, context: __SerdeContext): any => {
  return {
    ...(input.sourcePath != null && { sourcePath: input.sourcePath }),
  };
};

/**
 * serializeAws_json1_1InferenceAccelerator
 */
const se_InferenceAccelerator = (input: InferenceAccelerator, context: __SerdeContext): any => {
  return {
    ...(input.deviceName != null && { deviceName: input.deviceName }),
    ...(input.deviceType != null && { deviceType: input.deviceType }),
  };
};

/**
 * serializeAws_json1_1InferenceAcceleratorOverride
 */
const se_InferenceAcceleratorOverride = (input: InferenceAcceleratorOverride, context: __SerdeContext): any => {
  return {
    ...(input.deviceName != null && { deviceName: input.deviceName }),
    ...(input.deviceType != null && { deviceType: input.deviceType }),
  };
};

/**
 * serializeAws_json1_1InferenceAcceleratorOverrides
 */
const se_InferenceAcceleratorOverrides = (input: InferenceAcceleratorOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InferenceAcceleratorOverride(entry, context);
    });
};

/**
 * serializeAws_json1_1InferenceAccelerators
 */
const se_InferenceAccelerators = (input: InferenceAccelerator[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InferenceAccelerator(entry, context);
    });
};

/**
 * serializeAws_json1_1KernelCapabilities
 */
const se_KernelCapabilities = (input: KernelCapabilities, context: __SerdeContext): any => {
  return {
    ...(input.add != null && { add: se_StringList(input.add, context) }),
    ...(input.drop != null && { drop: se_StringList(input.drop, context) }),
  };
};

/**
 * serializeAws_json1_1KeyValuePair
 */
const se_KeyValuePair = (input: KeyValuePair, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1LinuxParameters
 */
const se_LinuxParameters = (input: LinuxParameters, context: __SerdeContext): any => {
  return {
    ...(input.capabilities != null && { capabilities: se_KernelCapabilities(input.capabilities, context) }),
    ...(input.devices != null && { devices: se_DevicesList(input.devices, context) }),
    ...(input.initProcessEnabled != null && { initProcessEnabled: input.initProcessEnabled }),
    ...(input.maxSwap != null && { maxSwap: input.maxSwap }),
    ...(input.sharedMemorySize != null && { sharedMemorySize: input.sharedMemorySize }),
    ...(input.swappiness != null && { swappiness: input.swappiness }),
    ...(input.tmpfs != null && { tmpfs: se_TmpfsList(input.tmpfs, context) }),
  };
};

/**
 * serializeAws_json1_1ListAccountSettingsRequest
 */
const se_ListAccountSettingsRequest = (input: ListAccountSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.effectiveSettings != null && { effectiveSettings: input.effectiveSettings }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.principalArn != null && { principalArn: input.principalArn }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1ListAttributesRequest
 */
const se_ListAttributesRequest = (input: ListAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.attributeValue != null && { attributeValue: input.attributeValue }),
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.targetType != null && { targetType: input.targetType }),
  };
};

/**
 * serializeAws_json1_1ListClustersRequest
 */
const se_ListClustersRequest = (input: ListClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListContainerInstancesRequest
 */
const se_ListContainerInstancesRequest = (input: ListContainerInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.filter != null && { filter: input.filter }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1ListServicesByNamespaceRequest
 */
const se_ListServicesByNamespaceRequest = (input: ListServicesByNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.namespace != null && { namespace: input.namespace }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListServicesRequest
 */
const se_ListServicesRequest = (input: ListServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.launchType != null && { launchType: input.launchType }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.schedulingStrategy != null && { schedulingStrategy: input.schedulingStrategy }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1ListTaskDefinitionFamiliesRequest
 */
const se_ListTaskDefinitionFamiliesRequest = (
  input: ListTaskDefinitionFamiliesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.familyPrefix != null && { familyPrefix: input.familyPrefix }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1ListTaskDefinitionsRequest
 */
const se_ListTaskDefinitionsRequest = (input: ListTaskDefinitionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.familyPrefix != null && { familyPrefix: input.familyPrefix }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sort != null && { sort: input.sort }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1ListTasksRequest
 */
const se_ListTasksRequest = (input: ListTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.containerInstance != null && { containerInstance: input.containerInstance }),
    ...(input.desiredStatus != null && { desiredStatus: input.desiredStatus }),
    ...(input.family != null && { family: input.family }),
    ...(input.launchType != null && { launchType: input.launchType }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.startedBy != null && { startedBy: input.startedBy }),
  };
};

/**
 * serializeAws_json1_1LoadBalancer
 */
const se_LoadBalancer = (input: LoadBalancer, context: __SerdeContext): any => {
  return {
    ...(input.containerName != null && { containerName: input.containerName }),
    ...(input.containerPort != null && { containerPort: input.containerPort }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
    ...(input.targetGroupArn != null && { targetGroupArn: input.targetGroupArn }),
  };
};

/**
 * serializeAws_json1_1LoadBalancers
 */
const se_LoadBalancers = (input: LoadBalancer[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LoadBalancer(entry, context);
    });
};

/**
 * serializeAws_json1_1LogConfiguration
 */
const se_LogConfiguration = (input: LogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.logDriver != null && { logDriver: input.logDriver }),
    ...(input.options != null && { options: se_LogConfigurationOptionsMap(input.options, context) }),
    ...(input.secretOptions != null && { secretOptions: se_SecretList(input.secretOptions, context) }),
  };
};

/**
 * serializeAws_json1_1LogConfigurationOptionsMap
 */
const se_LogConfigurationOptionsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ManagedAgentStateChange
 */
const se_ManagedAgentStateChange = (input: ManagedAgentStateChange, context: __SerdeContext): any => {
  return {
    ...(input.containerName != null && { containerName: input.containerName }),
    ...(input.managedAgentName != null && { managedAgentName: input.managedAgentName }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1ManagedAgentStateChanges
 */
const se_ManagedAgentStateChanges = (input: ManagedAgentStateChange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ManagedAgentStateChange(entry, context);
    });
};

/**
 * serializeAws_json1_1ManagedScaling
 */
const se_ManagedScaling = (input: ManagedScaling, context: __SerdeContext): any => {
  return {
    ...(input.instanceWarmupPeriod != null && { instanceWarmupPeriod: input.instanceWarmupPeriod }),
    ...(input.maximumScalingStepSize != null && { maximumScalingStepSize: input.maximumScalingStepSize }),
    ...(input.minimumScalingStepSize != null && { minimumScalingStepSize: input.minimumScalingStepSize }),
    ...(input.status != null && { status: input.status }),
    ...(input.targetCapacity != null && { targetCapacity: input.targetCapacity }),
  };
};

/**
 * serializeAws_json1_1MountPoint
 */
const se_MountPoint = (input: MountPoint, context: __SerdeContext): any => {
  return {
    ...(input.containerPath != null && { containerPath: input.containerPath }),
    ...(input.readOnly != null && { readOnly: input.readOnly }),
    ...(input.sourceVolume != null && { sourceVolume: input.sourceVolume }),
  };
};

/**
 * serializeAws_json1_1MountPointList
 */
const se_MountPointList = (input: MountPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MountPoint(entry, context);
    });
};

/**
 * serializeAws_json1_1NetworkBinding
 */
const se_NetworkBinding = (input: NetworkBinding, context: __SerdeContext): any => {
  return {
    ...(input.bindIP != null && { bindIP: input.bindIP }),
    ...(input.containerPort != null && { containerPort: input.containerPort }),
    ...(input.containerPortRange != null && { containerPortRange: input.containerPortRange }),
    ...(input.hostPort != null && { hostPort: input.hostPort }),
    ...(input.hostPortRange != null && { hostPortRange: input.hostPortRange }),
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

/**
 * serializeAws_json1_1NetworkBindings
 */
const se_NetworkBindings = (input: NetworkBinding[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NetworkBinding(entry, context);
    });
};

/**
 * serializeAws_json1_1NetworkConfiguration
 */
const se_NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.awsvpcConfiguration != null && {
      awsvpcConfiguration: se_AwsVpcConfiguration(input.awsvpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1PlacementConstraint
 */
const se_PlacementConstraint = (input: PlacementConstraint, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1PlacementConstraints
 */
const se_PlacementConstraints = (input: PlacementConstraint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlacementConstraint(entry, context);
    });
};

/**
 * serializeAws_json1_1PlacementStrategies
 */
const se_PlacementStrategies = (input: PlacementStrategy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlacementStrategy(entry, context);
    });
};

/**
 * serializeAws_json1_1PlacementStrategy
 */
const se_PlacementStrategy = (input: PlacementStrategy, context: __SerdeContext): any => {
  return {
    ...(input.field != null && { field: input.field }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1PlatformDevice
 */
const se_PlatformDevice = (input: PlatformDevice, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1PlatformDevices
 */
const se_PlatformDevices = (input: PlatformDevice[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlatformDevice(entry, context);
    });
};

/**
 * serializeAws_json1_1PortMapping
 */
const se_PortMapping = (input: PortMapping, context: __SerdeContext): any => {
  return {
    ...(input.appProtocol != null && { appProtocol: input.appProtocol }),
    ...(input.containerPort != null && { containerPort: input.containerPort }),
    ...(input.containerPortRange != null && { containerPortRange: input.containerPortRange }),
    ...(input.hostPort != null && { hostPort: input.hostPort }),
    ...(input.name != null && { name: input.name }),
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

/**
 * serializeAws_json1_1PortMappingList
 */
const se_PortMappingList = (input: PortMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PortMapping(entry, context);
    });
};

/**
 * serializeAws_json1_1ProxyConfiguration
 */
const se_ProxyConfiguration = (input: ProxyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.containerName != null && { containerName: input.containerName }),
    ...(input.properties != null && { properties: se_ProxyConfigurationProperties(input.properties, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ProxyConfigurationProperties
 */
const se_ProxyConfigurationProperties = (input: KeyValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KeyValuePair(entry, context);
    });
};

/**
 * serializeAws_json1_1PutAccountSettingDefaultRequest
 */
const se_PutAccountSettingDefaultRequest = (input: PutAccountSettingDefaultRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1PutAccountSettingRequest
 */
const se_PutAccountSettingRequest = (input: PutAccountSettingRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.principalArn != null && { principalArn: input.principalArn }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1PutAttributesRequest
 */
const se_PutAttributesRequest = (input: PutAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_Attributes(input.attributes, context) }),
    ...(input.cluster != null && { cluster: input.cluster }),
  };
};

/**
 * serializeAws_json1_1PutClusterCapacityProvidersRequest
 */
const se_PutClusterCapacityProvidersRequest = (
  input: PutClusterCapacityProvidersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProviders != null && { capacityProviders: se_StringList(input.capacityProviders, context) }),
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.defaultCapacityProviderStrategy != null && {
      defaultCapacityProviderStrategy: se_CapacityProviderStrategy(input.defaultCapacityProviderStrategy, context),
    }),
  };
};

/**
 * serializeAws_json1_1RegisterContainerInstanceRequest
 */
const se_RegisterContainerInstanceRequest = (input: RegisterContainerInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_Attributes(input.attributes, context) }),
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.containerInstanceArn != null && { containerInstanceArn: input.containerInstanceArn }),
    ...(input.instanceIdentityDocument != null && { instanceIdentityDocument: input.instanceIdentityDocument }),
    ...(input.instanceIdentityDocumentSignature != null && {
      instanceIdentityDocumentSignature: input.instanceIdentityDocumentSignature,
    }),
    ...(input.platformDevices != null && { platformDevices: se_PlatformDevices(input.platformDevices, context) }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.totalResources != null && { totalResources: se_Resources(input.totalResources, context) }),
    ...(input.versionInfo != null && { versionInfo: se_VersionInfo(input.versionInfo, context) }),
  };
};

/**
 * serializeAws_json1_1RegisterTaskDefinitionRequest
 */
const se_RegisterTaskDefinitionRequest = (input: RegisterTaskDefinitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.containerDefinitions != null && {
      containerDefinitions: se_ContainerDefinitions(input.containerDefinitions, context),
    }),
    ...(input.cpu != null && { cpu: input.cpu }),
    ...(input.ephemeralStorage != null && { ephemeralStorage: se_EphemeralStorage(input.ephemeralStorage, context) }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.family != null && { family: input.family }),
    ...(input.inferenceAccelerators != null && {
      inferenceAccelerators: se_InferenceAccelerators(input.inferenceAccelerators, context),
    }),
    ...(input.ipcMode != null && { ipcMode: input.ipcMode }),
    ...(input.memory != null && { memory: input.memory }),
    ...(input.networkMode != null && { networkMode: input.networkMode }),
    ...(input.pidMode != null && { pidMode: input.pidMode }),
    ...(input.placementConstraints != null && {
      placementConstraints: se_TaskDefinitionPlacementConstraints(input.placementConstraints, context),
    }),
    ...(input.proxyConfiguration != null && {
      proxyConfiguration: se_ProxyConfiguration(input.proxyConfiguration, context),
    }),
    ...(input.requiresCompatibilities != null && {
      requiresCompatibilities: se_CompatibilityList(input.requiresCompatibilities, context),
    }),
    ...(input.runtimePlatform != null && { runtimePlatform: se_RuntimePlatform(input.runtimePlatform, context) }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.taskRoleArn != null && { taskRoleArn: input.taskRoleArn }),
    ...(input.volumes != null && { volumes: se_VolumeList(input.volumes, context) }),
  };
};

/**
 * serializeAws_json1_1RepositoryCredentials
 */
const se_RepositoryCredentials = (input: RepositoryCredentials, context: __SerdeContext): any => {
  return {
    ...(input.credentialsParameter != null && { credentialsParameter: input.credentialsParameter }),
  };
};

/**
 * serializeAws_json1_1Resource
 */
const se_Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.doubleValue != null && { doubleValue: __serializeFloat(input.doubleValue) }),
    ...(input.integerValue != null && { integerValue: input.integerValue }),
    ...(input.longValue != null && { longValue: input.longValue }),
    ...(input.name != null && { name: input.name }),
    ...(input.stringSetValue != null && { stringSetValue: se_StringList(input.stringSetValue, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ResourceRequirement
 */
const se_ResourceRequirement = (input: ResourceRequirement, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1ResourceRequirements
 */
const se_ResourceRequirements = (input: ResourceRequirement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceRequirement(entry, context);
    });
};

/**
 * serializeAws_json1_1Resources
 */
const se_Resources = (input: Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Resource(entry, context);
    });
};

/**
 * serializeAws_json1_1RunTaskRequest
 */
const se_RunTaskRequest = (input: RunTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviderStrategy != null && {
      capacityProviderStrategy: se_CapacityProviderStrategy(input.capacityProviderStrategy, context),
    }),
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.count != null && { count: input.count }),
    ...(input.enableECSManagedTags != null && { enableECSManagedTags: input.enableECSManagedTags }),
    ...(input.enableExecuteCommand != null && { enableExecuteCommand: input.enableExecuteCommand }),
    ...(input.group != null && { group: input.group }),
    ...(input.launchType != null && { launchType: input.launchType }),
    ...(input.networkConfiguration != null && {
      networkConfiguration: se_NetworkConfiguration(input.networkConfiguration, context),
    }),
    ...(input.overrides != null && { overrides: se_TaskOverride(input.overrides, context) }),
    ...(input.placementConstraints != null && {
      placementConstraints: se_PlacementConstraints(input.placementConstraints, context),
    }),
    ...(input.placementStrategy != null && {
      placementStrategy: se_PlacementStrategies(input.placementStrategy, context),
    }),
    ...(input.platformVersion != null && { platformVersion: input.platformVersion }),
    ...(input.propagateTags != null && { propagateTags: input.propagateTags }),
    ...(input.referenceId != null && { referenceId: input.referenceId }),
    ...(input.startedBy != null && { startedBy: input.startedBy }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.taskDefinition != null && { taskDefinition: input.taskDefinition }),
  };
};

/**
 * serializeAws_json1_1RuntimePlatform
 */
const se_RuntimePlatform = (input: RuntimePlatform, context: __SerdeContext): any => {
  return {
    ...(input.cpuArchitecture != null && { cpuArchitecture: input.cpuArchitecture }),
    ...(input.operatingSystemFamily != null && { operatingSystemFamily: input.operatingSystemFamily }),
  };
};

/**
 * serializeAws_json1_1Scale
 */
const se_Scale = (input: Scale, context: __SerdeContext): any => {
  return {
    ...(input.unit != null && { unit: input.unit }),
    ...(input.value != null && { value: __serializeFloat(input.value) }),
  };
};

/**
 * serializeAws_json1_1Secret
 */
const se_Secret = (input: Secret, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.valueFrom != null && { valueFrom: input.valueFrom }),
  };
};

/**
 * serializeAws_json1_1SecretList
 */
const se_SecretList = (input: Secret[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Secret(entry, context);
    });
};

/**
 * serializeAws_json1_1ServiceConnectClientAlias
 */
const se_ServiceConnectClientAlias = (input: ServiceConnectClientAlias, context: __SerdeContext): any => {
  return {
    ...(input.dnsName != null && { dnsName: input.dnsName }),
    ...(input.port != null && { port: input.port }),
  };
};

/**
 * serializeAws_json1_1ServiceConnectClientAliasList
 */
const se_ServiceConnectClientAliasList = (input: ServiceConnectClientAlias[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServiceConnectClientAlias(entry, context);
    });
};

/**
 * serializeAws_json1_1ServiceConnectConfiguration
 */
const se_ServiceConnectConfiguration = (input: ServiceConnectConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.logConfiguration != null && { logConfiguration: se_LogConfiguration(input.logConfiguration, context) }),
    ...(input.namespace != null && { namespace: input.namespace }),
    ...(input.services != null && { services: se_ServiceConnectServiceList(input.services, context) }),
  };
};

/**
 * serializeAws_json1_1ServiceConnectService
 */
const se_ServiceConnectService = (input: ServiceConnectService, context: __SerdeContext): any => {
  return {
    ...(input.clientAliases != null && {
      clientAliases: se_ServiceConnectClientAliasList(input.clientAliases, context),
    }),
    ...(input.discoveryName != null && { discoveryName: input.discoveryName }),
    ...(input.ingressPortOverride != null && { ingressPortOverride: input.ingressPortOverride }),
    ...(input.portName != null && { portName: input.portName }),
  };
};

/**
 * serializeAws_json1_1ServiceConnectServiceList
 */
const se_ServiceConnectServiceList = (input: ServiceConnectService[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServiceConnectService(entry, context);
    });
};

/**
 * serializeAws_json1_1ServiceFieldList
 */
const se_ServiceFieldList = (input: (ServiceField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ServiceRegistries
 */
const se_ServiceRegistries = (input: ServiceRegistry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServiceRegistry(entry, context);
    });
};

/**
 * serializeAws_json1_1ServiceRegistry
 */
const se_ServiceRegistry = (input: ServiceRegistry, context: __SerdeContext): any => {
  return {
    ...(input.containerName != null && { containerName: input.containerName }),
    ...(input.containerPort != null && { containerPort: input.containerPort }),
    ...(input.port != null && { port: input.port }),
    ...(input.registryArn != null && { registryArn: input.registryArn }),
  };
};

/**
 * serializeAws_json1_1StartTaskRequest
 */
const se_StartTaskRequest = (input: StartTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.containerInstances != null && { containerInstances: se_StringList(input.containerInstances, context) }),
    ...(input.enableECSManagedTags != null && { enableECSManagedTags: input.enableECSManagedTags }),
    ...(input.enableExecuteCommand != null && { enableExecuteCommand: input.enableExecuteCommand }),
    ...(input.group != null && { group: input.group }),
    ...(input.networkConfiguration != null && {
      networkConfiguration: se_NetworkConfiguration(input.networkConfiguration, context),
    }),
    ...(input.overrides != null && { overrides: se_TaskOverride(input.overrides, context) }),
    ...(input.propagateTags != null && { propagateTags: input.propagateTags }),
    ...(input.referenceId != null && { referenceId: input.referenceId }),
    ...(input.startedBy != null && { startedBy: input.startedBy }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.taskDefinition != null && { taskDefinition: input.taskDefinition }),
  };
};

/**
 * serializeAws_json1_1StopTaskRequest
 */
const se_StopTaskRequest = (input: StopTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.task != null && { task: input.task }),
  };
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StringMap
 */
const se_StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1SubmitAttachmentStateChangesRequest
 */
const se_SubmitAttachmentStateChangesRequest = (
  input: SubmitAttachmentStateChangesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attachments != null && { attachments: se_AttachmentStateChanges(input.attachments, context) }),
    ...(input.cluster != null && { cluster: input.cluster }),
  };
};

/**
 * serializeAws_json1_1SubmitContainerStateChangeRequest
 */
const se_SubmitContainerStateChangeRequest = (
  input: SubmitContainerStateChangeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.containerName != null && { containerName: input.containerName }),
    ...(input.exitCode != null && { exitCode: input.exitCode }),
    ...(input.networkBindings != null && { networkBindings: se_NetworkBindings(input.networkBindings, context) }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.runtimeId != null && { runtimeId: input.runtimeId }),
    ...(input.status != null && { status: input.status }),
    ...(input.task != null && { task: input.task }),
  };
};

/**
 * serializeAws_json1_1SubmitTaskStateChangeRequest
 */
const se_SubmitTaskStateChangeRequest = (input: SubmitTaskStateChangeRequest, context: __SerdeContext): any => {
  return {
    ...(input.attachments != null && { attachments: se_AttachmentStateChanges(input.attachments, context) }),
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.containers != null && { containers: se_ContainerStateChanges(input.containers, context) }),
    ...(input.executionStoppedAt != null && {
      executionStoppedAt: Math.round(input.executionStoppedAt.getTime() / 1000),
    }),
    ...(input.managedAgents != null && { managedAgents: se_ManagedAgentStateChanges(input.managedAgents, context) }),
    ...(input.pullStartedAt != null && { pullStartedAt: Math.round(input.pullStartedAt.getTime() / 1000) }),
    ...(input.pullStoppedAt != null && { pullStoppedAt: Math.round(input.pullStoppedAt.getTime() / 1000) }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.status != null && { status: input.status }),
    ...(input.task != null && { task: input.task }),
  };
};

/**
 * serializeAws_json1_1SystemControl
 */
const se_SystemControl = (input: SystemControl, context: __SerdeContext): any => {
  return {
    ...(input.namespace != null && { namespace: input.namespace }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1SystemControls
 */
const se_SystemControls = (input: SystemControl[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SystemControl(entry, context);
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TaskDefinitionFieldList
 */
const se_TaskDefinitionFieldList = (input: (TaskDefinitionField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TaskDefinitionPlacementConstraint
 */
const se_TaskDefinitionPlacementConstraint = (
  input: TaskDefinitionPlacementConstraint,
  context: __SerdeContext
): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1TaskDefinitionPlacementConstraints
 */
const se_TaskDefinitionPlacementConstraints = (
  input: TaskDefinitionPlacementConstraint[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TaskDefinitionPlacementConstraint(entry, context);
    });
};

/**
 * serializeAws_json1_1TaskFieldList
 */
const se_TaskFieldList = (input: (TaskField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TaskOverride
 */
const se_TaskOverride = (input: TaskOverride, context: __SerdeContext): any => {
  return {
    ...(input.containerOverrides != null && {
      containerOverrides: se_ContainerOverrides(input.containerOverrides, context),
    }),
    ...(input.cpu != null && { cpu: input.cpu }),
    ...(input.ephemeralStorage != null && { ephemeralStorage: se_EphemeralStorage(input.ephemeralStorage, context) }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.inferenceAcceleratorOverrides != null && {
      inferenceAcceleratorOverrides: se_InferenceAcceleratorOverrides(input.inferenceAcceleratorOverrides, context),
    }),
    ...(input.memory != null && { memory: input.memory }),
    ...(input.taskRoleArn != null && { taskRoleArn: input.taskRoleArn }),
  };
};

/**
 * serializeAws_json1_1TaskSetFieldList
 */
const se_TaskSetFieldList = (input: (TaskSetField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tmpfs
 */
const se_Tmpfs = (input: Tmpfs, context: __SerdeContext): any => {
  return {
    ...(input.containerPath != null && { containerPath: input.containerPath }),
    ...(input.mountOptions != null && { mountOptions: se_StringList(input.mountOptions, context) }),
    ...(input.size != null && { size: input.size }),
  };
};

/**
 * serializeAws_json1_1TmpfsList
 */
const se_TmpfsList = (input: Tmpfs[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tmpfs(entry, context);
    });
};

/**
 * serializeAws_json1_1Ulimit
 */
const se_Ulimit = (input: Ulimit, context: __SerdeContext): any => {
  return {
    ...(input.hardLimit != null && { hardLimit: input.hardLimit }),
    ...(input.name != null && { name: input.name }),
    ...(input.softLimit != null && { softLimit: input.softLimit }),
  };
};

/**
 * serializeAws_json1_1UlimitList
 */
const se_UlimitList = (input: Ulimit[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Ulimit(entry, context);
    });
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeys(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateCapacityProviderRequest
 */
const se_UpdateCapacityProviderRequest = (input: UpdateCapacityProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.autoScalingGroupProvider != null && {
      autoScalingGroupProvider: se_AutoScalingGroupProviderUpdate(input.autoScalingGroupProvider, context),
    }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1UpdateClusterRequest
 */
const se_UpdateClusterRequest = (input: UpdateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.configuration != null && { configuration: se_ClusterConfiguration(input.configuration, context) }),
    ...(input.serviceConnectDefaults != null && {
      serviceConnectDefaults: se_ClusterServiceConnectDefaultsRequest(input.serviceConnectDefaults, context),
    }),
    ...(input.settings != null && { settings: se_ClusterSettings(input.settings, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateClusterSettingsRequest
 */
const se_UpdateClusterSettingsRequest = (input: UpdateClusterSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.settings != null && { settings: se_ClusterSettings(input.settings, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateContainerAgentRequest
 */
const se_UpdateContainerAgentRequest = (input: UpdateContainerAgentRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.containerInstance != null && { containerInstance: input.containerInstance }),
  };
};

/**
 * serializeAws_json1_1UpdateContainerInstancesStateRequest
 */
const se_UpdateContainerInstancesStateRequest = (
  input: UpdateContainerInstancesStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.containerInstances != null && { containerInstances: se_StringList(input.containerInstances, context) }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1UpdateServicePrimaryTaskSetRequest
 */
const se_UpdateServicePrimaryTaskSetRequest = (
  input: UpdateServicePrimaryTaskSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.primaryTaskSet != null && { primaryTaskSet: input.primaryTaskSet }),
    ...(input.service != null && { service: input.service }),
  };
};

/**
 * serializeAws_json1_1UpdateServiceRequest
 */
const se_UpdateServiceRequest = (input: UpdateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityProviderStrategy != null && {
      capacityProviderStrategy: se_CapacityProviderStrategy(input.capacityProviderStrategy, context),
    }),
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.deploymentConfiguration != null && {
      deploymentConfiguration: se_DeploymentConfiguration(input.deploymentConfiguration, context),
    }),
    ...(input.desiredCount != null && { desiredCount: input.desiredCount }),
    ...(input.enableECSManagedTags != null && { enableECSManagedTags: input.enableECSManagedTags }),
    ...(input.enableExecuteCommand != null && { enableExecuteCommand: input.enableExecuteCommand }),
    ...(input.forceNewDeployment != null && { forceNewDeployment: input.forceNewDeployment }),
    ...(input.healthCheckGracePeriodSeconds != null && {
      healthCheckGracePeriodSeconds: input.healthCheckGracePeriodSeconds,
    }),
    ...(input.loadBalancers != null && { loadBalancers: se_LoadBalancers(input.loadBalancers, context) }),
    ...(input.networkConfiguration != null && {
      networkConfiguration: se_NetworkConfiguration(input.networkConfiguration, context),
    }),
    ...(input.placementConstraints != null && {
      placementConstraints: se_PlacementConstraints(input.placementConstraints, context),
    }),
    ...(input.placementStrategy != null && {
      placementStrategy: se_PlacementStrategies(input.placementStrategy, context),
    }),
    ...(input.platformVersion != null && { platformVersion: input.platformVersion }),
    ...(input.propagateTags != null && { propagateTags: input.propagateTags }),
    ...(input.service != null && { service: input.service }),
    ...(input.serviceConnectConfiguration != null && {
      serviceConnectConfiguration: se_ServiceConnectConfiguration(input.serviceConnectConfiguration, context),
    }),
    ...(input.serviceRegistries != null && {
      serviceRegistries: se_ServiceRegistries(input.serviceRegistries, context),
    }),
    ...(input.taskDefinition != null && { taskDefinition: input.taskDefinition }),
  };
};

/**
 * serializeAws_json1_1UpdateTaskProtectionRequest
 */
const se_UpdateTaskProtectionRequest = (input: UpdateTaskProtectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.expiresInMinutes != null && { expiresInMinutes: input.expiresInMinutes }),
    ...(input.protectionEnabled != null && { protectionEnabled: input.protectionEnabled }),
    ...(input.tasks != null && { tasks: se_StringList(input.tasks, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateTaskSetRequest
 */
const se_UpdateTaskSetRequest = (input: UpdateTaskSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.cluster != null && { cluster: input.cluster }),
    ...(input.scale != null && { scale: se_Scale(input.scale, context) }),
    ...(input.service != null && { service: input.service }),
    ...(input.taskSet != null && { taskSet: input.taskSet }),
  };
};

/**
 * serializeAws_json1_1VersionInfo
 */
const se_VersionInfo = (input: VersionInfo, context: __SerdeContext): any => {
  return {
    ...(input.agentHash != null && { agentHash: input.agentHash }),
    ...(input.agentVersion != null && { agentVersion: input.agentVersion }),
    ...(input.dockerVersion != null && { dockerVersion: input.dockerVersion }),
  };
};

/**
 * serializeAws_json1_1Volume
 */
const se_Volume = (input: Volume, context: __SerdeContext): any => {
  return {
    ...(input.dockerVolumeConfiguration != null && {
      dockerVolumeConfiguration: se_DockerVolumeConfiguration(input.dockerVolumeConfiguration, context),
    }),
    ...(input.efsVolumeConfiguration != null && {
      efsVolumeConfiguration: se_EFSVolumeConfiguration(input.efsVolumeConfiguration, context),
    }),
    ...(input.fsxWindowsFileServerVolumeConfiguration != null && {
      fsxWindowsFileServerVolumeConfiguration: se_FSxWindowsFileServerVolumeConfiguration(
        input.fsxWindowsFileServerVolumeConfiguration,
        context
      ),
    }),
    ...(input.host != null && { host: se_HostVolumeProperties(input.host, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1VolumeFrom
 */
const se_VolumeFrom = (input: VolumeFrom, context: __SerdeContext): any => {
  return {
    ...(input.readOnly != null && { readOnly: input.readOnly }),
    ...(input.sourceContainer != null && { sourceContainer: input.sourceContainer }),
  };
};

/**
 * serializeAws_json1_1VolumeFromList
 */
const se_VolumeFromList = (input: VolumeFrom[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VolumeFrom(entry, context);
    });
};

/**
 * serializeAws_json1_1VolumeList
 */
const se_VolumeList = (input: Volume[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Volume(entry, context);
    });
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Attachment
 */
const de_Attachment = (output: any, context: __SerdeContext): Attachment => {
  return {
    details: output.details != null ? de_AttachmentDetails(output.details, context) : undefined,
    id: __expectString(output.id),
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1AttachmentDetails
 */
const de_AttachmentDetails = (output: any, context: __SerdeContext): KeyValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyValuePair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Attachments
 */
const de_Attachments = (output: any, context: __SerdeContext): Attachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attachment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    name: __expectString(output.name),
    targetId: __expectString(output.targetId),
    targetType: __expectString(output.targetType),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1AttributeLimitExceededException
 */
const de_AttributeLimitExceededException = (output: any, context: __SerdeContext): AttributeLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Attributes
 */
const de_Attributes = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoScalingGroupProvider
 */
const de_AutoScalingGroupProvider = (output: any, context: __SerdeContext): AutoScalingGroupProvider => {
  return {
    autoScalingGroupArn: __expectString(output.autoScalingGroupArn),
    managedScaling: output.managedScaling != null ? de_ManagedScaling(output.managedScaling, context) : undefined,
    managedTerminationProtection: __expectString(output.managedTerminationProtection),
  } as any;
};

/**
 * deserializeAws_json1_1AwsVpcConfiguration
 */
const de_AwsVpcConfiguration = (output: any, context: __SerdeContext): AwsVpcConfiguration => {
  return {
    assignPublicIp: __expectString(output.assignPublicIp),
    securityGroups: output.securityGroups != null ? de_StringList(output.securityGroups, context) : undefined,
    subnets: output.subnets != null ? de_StringList(output.subnets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BlockedException
 */
const de_BlockedException = (output: any, context: __SerdeContext): BlockedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CapacityProvider
 */
const de_CapacityProvider = (output: any, context: __SerdeContext): CapacityProvider => {
  return {
    autoScalingGroupProvider:
      output.autoScalingGroupProvider != null
        ? de_AutoScalingGroupProvider(output.autoScalingGroupProvider, context)
        : undefined,
    capacityProviderArn: __expectString(output.capacityProviderArn),
    name: __expectString(output.name),
    status: __expectString(output.status),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    updateStatus: __expectString(output.updateStatus),
    updateStatusReason: __expectString(output.updateStatusReason),
  } as any;
};

/**
 * deserializeAws_json1_1CapacityProviders
 */
const de_CapacityProviders = (output: any, context: __SerdeContext): CapacityProvider[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CapacityProvider(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CapacityProviderStrategy
 */
const de_CapacityProviderStrategy = (output: any, context: __SerdeContext): CapacityProviderStrategyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CapacityProviderStrategyItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CapacityProviderStrategyItem
 */
const de_CapacityProviderStrategyItem = (output: any, context: __SerdeContext): CapacityProviderStrategyItem => {
  return {
    base: __expectInt32(output.base),
    capacityProvider: __expectString(output.capacityProvider),
    weight: __expectInt32(output.weight),
  } as any;
};

/**
 * deserializeAws_json1_1ClientException
 */
const de_ClientException = (output: any, context: __SerdeContext): ClientException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    activeServicesCount: __expectInt32(output.activeServicesCount),
    attachments: output.attachments != null ? de_Attachments(output.attachments, context) : undefined,
    attachmentsStatus: __expectString(output.attachmentsStatus),
    capacityProviders: output.capacityProviders != null ? de_StringList(output.capacityProviders, context) : undefined,
    clusterArn: __expectString(output.clusterArn),
    clusterName: __expectString(output.clusterName),
    configuration: output.configuration != null ? de_ClusterConfiguration(output.configuration, context) : undefined,
    defaultCapacityProviderStrategy:
      output.defaultCapacityProviderStrategy != null
        ? de_CapacityProviderStrategy(output.defaultCapacityProviderStrategy, context)
        : undefined,
    pendingTasksCount: __expectInt32(output.pendingTasksCount),
    registeredContainerInstancesCount: __expectInt32(output.registeredContainerInstancesCount),
    runningTasksCount: __expectInt32(output.runningTasksCount),
    serviceConnectDefaults:
      output.serviceConnectDefaults != null
        ? de_ClusterServiceConnectDefaults(output.serviceConnectDefaults, context)
        : undefined,
    settings: output.settings != null ? de_ClusterSettings(output.settings, context) : undefined,
    statistics: output.statistics != null ? de_Statistics(output.statistics, context) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ClusterConfiguration
 */
const de_ClusterConfiguration = (output: any, context: __SerdeContext): ClusterConfiguration => {
  return {
    executeCommandConfiguration:
      output.executeCommandConfiguration != null
        ? de_ExecuteCommandConfiguration(output.executeCommandConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ClusterContainsContainerInstancesException
 */
const de_ClusterContainsContainerInstancesException = (
  output: any,
  context: __SerdeContext
): ClusterContainsContainerInstancesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterContainsServicesException
 */
const de_ClusterContainsServicesException = (
  output: any,
  context: __SerdeContext
): ClusterContainsServicesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterContainsTasksException
 */
const de_ClusterContainsTasksException = (output: any, context: __SerdeContext): ClusterContainsTasksException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterNotFoundException
 */
const de_ClusterNotFoundException = (output: any, context: __SerdeContext): ClusterNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Clusters
 */
const de_Clusters = (output: any, context: __SerdeContext): Cluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Cluster(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterServiceConnectDefaults
 */
const de_ClusterServiceConnectDefaults = (output: any, context: __SerdeContext): ClusterServiceConnectDefaults => {
  return {
    namespace: __expectString(output.namespace),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterSetting
 */
const de_ClusterSetting = (output: any, context: __SerdeContext): ClusterSetting => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterSettings
 */
const de_ClusterSettings = (output: any, context: __SerdeContext): ClusterSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClusterSetting(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CompatibilityList
 */
const de_CompatibilityList = (output: any, context: __SerdeContext): (Compatibility | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Container
 */
const de_Container = (output: any, context: __SerdeContext): Container => {
  return {
    containerArn: __expectString(output.containerArn),
    cpu: __expectString(output.cpu),
    exitCode: __expectInt32(output.exitCode),
    gpuIds: output.gpuIds != null ? de_GpuIds(output.gpuIds, context) : undefined,
    healthStatus: __expectString(output.healthStatus),
    image: __expectString(output.image),
    imageDigest: __expectString(output.imageDigest),
    lastStatus: __expectString(output.lastStatus),
    managedAgents: output.managedAgents != null ? de_ManagedAgents(output.managedAgents, context) : undefined,
    memory: __expectString(output.memory),
    memoryReservation: __expectString(output.memoryReservation),
    name: __expectString(output.name),
    networkBindings: output.networkBindings != null ? de_NetworkBindings(output.networkBindings, context) : undefined,
    networkInterfaces:
      output.networkInterfaces != null ? de_NetworkInterfaces(output.networkInterfaces, context) : undefined,
    reason: __expectString(output.reason),
    runtimeId: __expectString(output.runtimeId),
    taskArn: __expectString(output.taskArn),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerDefinition
 */
const de_ContainerDefinition = (output: any, context: __SerdeContext): ContainerDefinition => {
  return {
    command: output.command != null ? de_StringList(output.command, context) : undefined,
    cpu: __expectInt32(output.cpu),
    dependsOn: output.dependsOn != null ? de_ContainerDependencies(output.dependsOn, context) : undefined,
    disableNetworking: __expectBoolean(output.disableNetworking),
    dnsSearchDomains: output.dnsSearchDomains != null ? de_StringList(output.dnsSearchDomains, context) : undefined,
    dnsServers: output.dnsServers != null ? de_StringList(output.dnsServers, context) : undefined,
    dockerLabels: output.dockerLabels != null ? de_DockerLabelsMap(output.dockerLabels, context) : undefined,
    dockerSecurityOptions:
      output.dockerSecurityOptions != null ? de_StringList(output.dockerSecurityOptions, context) : undefined,
    entryPoint: output.entryPoint != null ? de_StringList(output.entryPoint, context) : undefined,
    environment: output.environment != null ? de_EnvironmentVariables(output.environment, context) : undefined,
    environmentFiles:
      output.environmentFiles != null ? de_EnvironmentFiles(output.environmentFiles, context) : undefined,
    essential: __expectBoolean(output.essential),
    extraHosts: output.extraHosts != null ? de_HostEntryList(output.extraHosts, context) : undefined,
    firelensConfiguration:
      output.firelensConfiguration != null
        ? de_FirelensConfiguration(output.firelensConfiguration, context)
        : undefined,
    healthCheck: output.healthCheck != null ? de_HealthCheck(output.healthCheck, context) : undefined,
    hostname: __expectString(output.hostname),
    image: __expectString(output.image),
    interactive: __expectBoolean(output.interactive),
    links: output.links != null ? de_StringList(output.links, context) : undefined,
    linuxParameters: output.linuxParameters != null ? de_LinuxParameters(output.linuxParameters, context) : undefined,
    logConfiguration:
      output.logConfiguration != null ? de_LogConfiguration(output.logConfiguration, context) : undefined,
    memory: __expectInt32(output.memory),
    memoryReservation: __expectInt32(output.memoryReservation),
    mountPoints: output.mountPoints != null ? de_MountPointList(output.mountPoints, context) : undefined,
    name: __expectString(output.name),
    portMappings: output.portMappings != null ? de_PortMappingList(output.portMappings, context) : undefined,
    privileged: __expectBoolean(output.privileged),
    pseudoTerminal: __expectBoolean(output.pseudoTerminal),
    readonlyRootFilesystem: __expectBoolean(output.readonlyRootFilesystem),
    repositoryCredentials:
      output.repositoryCredentials != null
        ? de_RepositoryCredentials(output.repositoryCredentials, context)
        : undefined,
    resourceRequirements:
      output.resourceRequirements != null ? de_ResourceRequirements(output.resourceRequirements, context) : undefined,
    secrets: output.secrets != null ? de_SecretList(output.secrets, context) : undefined,
    startTimeout: __expectInt32(output.startTimeout),
    stopTimeout: __expectInt32(output.stopTimeout),
    systemControls: output.systemControls != null ? de_SystemControls(output.systemControls, context) : undefined,
    ulimits: output.ulimits != null ? de_UlimitList(output.ulimits, context) : undefined,
    user: __expectString(output.user),
    volumesFrom: output.volumesFrom != null ? de_VolumeFromList(output.volumesFrom, context) : undefined,
    workingDirectory: __expectString(output.workingDirectory),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerDefinitions
 */
const de_ContainerDefinitions = (output: any, context: __SerdeContext): ContainerDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerDependencies
 */
const de_ContainerDependencies = (output: any, context: __SerdeContext): ContainerDependency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerDependency(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerDependency
 */
const de_ContainerDependency = (output: any, context: __SerdeContext): ContainerDependency => {
  return {
    condition: __expectString(output.condition),
    containerName: __expectString(output.containerName),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerInstance
 */
const de_ContainerInstance = (output: any, context: __SerdeContext): ContainerInstance => {
  return {
    agentConnected: __expectBoolean(output.agentConnected),
    agentUpdateStatus: __expectString(output.agentUpdateStatus),
    attachments: output.attachments != null ? de_Attachments(output.attachments, context) : undefined,
    attributes: output.attributes != null ? de_Attributes(output.attributes, context) : undefined,
    capacityProviderName: __expectString(output.capacityProviderName),
    containerInstanceArn: __expectString(output.containerInstanceArn),
    ec2InstanceId: __expectString(output.ec2InstanceId),
    healthStatus:
      output.healthStatus != null ? de_ContainerInstanceHealthStatus(output.healthStatus, context) : undefined,
    pendingTasksCount: __expectInt32(output.pendingTasksCount),
    registeredAt:
      output.registeredAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.registeredAt)))
        : undefined,
    registeredResources:
      output.registeredResources != null ? de_Resources(output.registeredResources, context) : undefined,
    remainingResources:
      output.remainingResources != null ? de_Resources(output.remainingResources, context) : undefined,
    runningTasksCount: __expectInt32(output.runningTasksCount),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    version: __expectLong(output.version),
    versionInfo: output.versionInfo != null ? de_VersionInfo(output.versionInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ContainerInstanceHealthStatus
 */
const de_ContainerInstanceHealthStatus = (output: any, context: __SerdeContext): ContainerInstanceHealthStatus => {
  return {
    details: output.details != null ? de_InstanceHealthCheckResultList(output.details, context) : undefined,
    overallStatus: __expectString(output.overallStatus),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerInstances
 */
const de_ContainerInstances = (output: any, context: __SerdeContext): ContainerInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerOverride
 */
const de_ContainerOverride = (output: any, context: __SerdeContext): ContainerOverride => {
  return {
    command: output.command != null ? de_StringList(output.command, context) : undefined,
    cpu: __expectInt32(output.cpu),
    environment: output.environment != null ? de_EnvironmentVariables(output.environment, context) : undefined,
    environmentFiles:
      output.environmentFiles != null ? de_EnvironmentFiles(output.environmentFiles, context) : undefined,
    memory: __expectInt32(output.memory),
    memoryReservation: __expectInt32(output.memoryReservation),
    name: __expectString(output.name),
    resourceRequirements:
      output.resourceRequirements != null ? de_ResourceRequirements(output.resourceRequirements, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ContainerOverrides
 */
const de_ContainerOverrides = (output: any, context: __SerdeContext): ContainerOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerOverride(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Containers
 */
const de_Containers = (output: any, context: __SerdeContext): Container[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Container(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateCapacityProviderResponse
 */
const de_CreateCapacityProviderResponse = (output: any, context: __SerdeContext): CreateCapacityProviderResponse => {
  return {
    capacityProvider:
      output.capacityProvider != null ? de_CapacityProvider(output.capacityProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateClusterResponse
 */
const de_CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return {
    cluster: output.cluster != null ? de_Cluster(output.cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateServiceResponse
 */
const de_CreateServiceResponse = (output: any, context: __SerdeContext): CreateServiceResponse => {
  return {
    service: output.service != null ? de_Service(output.service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateTaskSetResponse
 */
const de_CreateTaskSetResponse = (output: any, context: __SerdeContext): CreateTaskSetResponse => {
  return {
    taskSet: output.taskSet != null ? de_TaskSet(output.taskSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteAccountSettingResponse
 */
const de_DeleteAccountSettingResponse = (output: any, context: __SerdeContext): DeleteAccountSettingResponse => {
  return {
    setting: output.setting != null ? de_Setting(output.setting, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteAttributesResponse
 */
const de_DeleteAttributesResponse = (output: any, context: __SerdeContext): DeleteAttributesResponse => {
  return {
    attributes: output.attributes != null ? de_Attributes(output.attributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteCapacityProviderResponse
 */
const de_DeleteCapacityProviderResponse = (output: any, context: __SerdeContext): DeleteCapacityProviderResponse => {
  return {
    capacityProvider:
      output.capacityProvider != null ? de_CapacityProvider(output.capacityProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteClusterResponse
 */
const de_DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return {
    cluster: output.cluster != null ? de_Cluster(output.cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteServiceResponse
 */
const de_DeleteServiceResponse = (output: any, context: __SerdeContext): DeleteServiceResponse => {
  return {
    service: output.service != null ? de_Service(output.service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteTaskDefinitionsResponse
 */
const de_DeleteTaskDefinitionsResponse = (output: any, context: __SerdeContext): DeleteTaskDefinitionsResponse => {
  return {
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
    taskDefinitions:
      output.taskDefinitions != null ? de_TaskDefinitionList(output.taskDefinitions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteTaskSetResponse
 */
const de_DeleteTaskSetResponse = (output: any, context: __SerdeContext): DeleteTaskSetResponse => {
  return {
    taskSet: output.taskSet != null ? de_TaskSet(output.taskSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Deployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    capacityProviderStrategy:
      output.capacityProviderStrategy != null
        ? de_CapacityProviderStrategy(output.capacityProviderStrategy, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    desiredCount: __expectInt32(output.desiredCount),
    failedTasks: __expectInt32(output.failedTasks),
    id: __expectString(output.id),
    launchType: __expectString(output.launchType),
    networkConfiguration:
      output.networkConfiguration != null ? de_NetworkConfiguration(output.networkConfiguration, context) : undefined,
    pendingCount: __expectInt32(output.pendingCount),
    platformFamily: __expectString(output.platformFamily),
    platformVersion: __expectString(output.platformVersion),
    rolloutState: __expectString(output.rolloutState),
    rolloutStateReason: __expectString(output.rolloutStateReason),
    runningCount: __expectInt32(output.runningCount),
    serviceConnectConfiguration:
      output.serviceConnectConfiguration != null
        ? de_ServiceConnectConfiguration(output.serviceConnectConfiguration, context)
        : undefined,
    serviceConnectResources:
      output.serviceConnectResources != null
        ? de_ServiceConnectServiceResourceList(output.serviceConnectResources, context)
        : undefined,
    status: __expectString(output.status),
    taskDefinition: __expectString(output.taskDefinition),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentAlarms
 */
const de_DeploymentAlarms = (output: any, context: __SerdeContext): DeploymentAlarms => {
  return {
    alarmNames: output.alarmNames != null ? de_StringList(output.alarmNames, context) : undefined,
    enable: __expectBoolean(output.enable),
    rollback: __expectBoolean(output.rollback),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentCircuitBreaker
 */
const de_DeploymentCircuitBreaker = (output: any, context: __SerdeContext): DeploymentCircuitBreaker => {
  return {
    enable: __expectBoolean(output.enable),
    rollback: __expectBoolean(output.rollback),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentConfiguration
 */
const de_DeploymentConfiguration = (output: any, context: __SerdeContext): DeploymentConfiguration => {
  return {
    alarms: output.alarms != null ? de_DeploymentAlarms(output.alarms, context) : undefined,
    deploymentCircuitBreaker:
      output.deploymentCircuitBreaker != null
        ? de_DeploymentCircuitBreaker(output.deploymentCircuitBreaker, context)
        : undefined,
    maximumPercent: __expectInt32(output.maximumPercent),
    minimumHealthyPercent: __expectInt32(output.minimumHealthyPercent),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentController
 */
const de_DeploymentController = (output: any, context: __SerdeContext): DeploymentController => {
  return {
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1Deployments
 */
const de_Deployments = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Deployment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeregisterContainerInstanceResponse
 */
const de_DeregisterContainerInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeregisterContainerInstanceResponse => {
  return {
    containerInstance:
      output.containerInstance != null ? de_ContainerInstance(output.containerInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeregisterTaskDefinitionResponse
 */
const de_DeregisterTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeregisterTaskDefinitionResponse => {
  return {
    taskDefinition: output.taskDefinition != null ? de_TaskDefinition(output.taskDefinition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCapacityProvidersResponse
 */
const de_DescribeCapacityProvidersResponse = (
  output: any,
  context: __SerdeContext
): DescribeCapacityProvidersResponse => {
  return {
    capacityProviders:
      output.capacityProviders != null ? de_CapacityProviders(output.capacityProviders, context) : undefined,
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeClustersResponse
 */
const de_DescribeClustersResponse = (output: any, context: __SerdeContext): DescribeClustersResponse => {
  return {
    clusters: output.clusters != null ? de_Clusters(output.clusters, context) : undefined,
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeContainerInstancesResponse
 */
const de_DescribeContainerInstancesResponse = (
  output: any,
  context: __SerdeContext
): DescribeContainerInstancesResponse => {
  return {
    containerInstances:
      output.containerInstances != null ? de_ContainerInstances(output.containerInstances, context) : undefined,
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeServicesResponse
 */
const de_DescribeServicesResponse = (output: any, context: __SerdeContext): DescribeServicesResponse => {
  return {
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
    services: output.services != null ? de_Services(output.services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTaskDefinitionResponse
 */
const de_DescribeTaskDefinitionResponse = (output: any, context: __SerdeContext): DescribeTaskDefinitionResponse => {
  return {
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    taskDefinition: output.taskDefinition != null ? de_TaskDefinition(output.taskDefinition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTaskSetsResponse
 */
const de_DescribeTaskSetsResponse = (output: any, context: __SerdeContext): DescribeTaskSetsResponse => {
  return {
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
    taskSets: output.taskSets != null ? de_TaskSets(output.taskSets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTasksResponse
 */
const de_DescribeTasksResponse = (output: any, context: __SerdeContext): DescribeTasksResponse => {
  return {
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
    tasks: output.tasks != null ? de_Tasks(output.tasks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return {
    containerPath: __expectString(output.containerPath),
    hostPath: __expectString(output.hostPath),
    permissions: output.permissions != null ? de_DeviceCgroupPermissions(output.permissions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeviceCgroupPermissions
 */
const de_DeviceCgroupPermissions = (output: any, context: __SerdeContext): (DeviceCgroupPermission | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DevicesList
 */
const de_DevicesList = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Device(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DiscoverPollEndpointResponse
 */
const de_DiscoverPollEndpointResponse = (output: any, context: __SerdeContext): DiscoverPollEndpointResponse => {
  return {
    endpoint: __expectString(output.endpoint),
    serviceConnectEndpoint: __expectString(output.serviceConnectEndpoint),
    telemetryEndpoint: __expectString(output.telemetryEndpoint),
  } as any;
};

/**
 * deserializeAws_json1_1DockerLabelsMap
 */
const de_DockerLabelsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1DockerVolumeConfiguration
 */
const de_DockerVolumeConfiguration = (output: any, context: __SerdeContext): DockerVolumeConfiguration => {
  return {
    autoprovision: __expectBoolean(output.autoprovision),
    driver: __expectString(output.driver),
    driverOpts: output.driverOpts != null ? de_StringMap(output.driverOpts, context) : undefined,
    labels: output.labels != null ? de_StringMap(output.labels, context) : undefined,
    scope: __expectString(output.scope),
  } as any;
};

/**
 * deserializeAws_json1_1EFSAuthorizationConfig
 */
const de_EFSAuthorizationConfig = (output: any, context: __SerdeContext): EFSAuthorizationConfig => {
  return {
    accessPointId: __expectString(output.accessPointId),
    iam: __expectString(output.iam),
  } as any;
};

/**
 * deserializeAws_json1_1EFSVolumeConfiguration
 */
const de_EFSVolumeConfiguration = (output: any, context: __SerdeContext): EFSVolumeConfiguration => {
  return {
    authorizationConfig:
      output.authorizationConfig != null ? de_EFSAuthorizationConfig(output.authorizationConfig, context) : undefined,
    fileSystemId: __expectString(output.fileSystemId),
    rootDirectory: __expectString(output.rootDirectory),
    transitEncryption: __expectString(output.transitEncryption),
    transitEncryptionPort: __expectInt32(output.transitEncryptionPort),
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentFile
 */
const de_EnvironmentFile = (output: any, context: __SerdeContext): EnvironmentFile => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentFiles
 */
const de_EnvironmentFiles = (output: any, context: __SerdeContext): EnvironmentFile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentFile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnvironmentVariables
 */
const de_EnvironmentVariables = (output: any, context: __SerdeContext): KeyValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyValuePair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EphemeralStorage
 */
const de_EphemeralStorage = (output: any, context: __SerdeContext): EphemeralStorage => {
  return {
    sizeInGiB: __expectInt32(output.sizeInGiB),
  } as any;
};

/**
 * deserializeAws_json1_1ExecuteCommandConfiguration
 */
const de_ExecuteCommandConfiguration = (output: any, context: __SerdeContext): ExecuteCommandConfiguration => {
  return {
    kmsKeyId: __expectString(output.kmsKeyId),
    logConfiguration:
      output.logConfiguration != null ? de_ExecuteCommandLogConfiguration(output.logConfiguration, context) : undefined,
    logging: __expectString(output.logging),
  } as any;
};

/**
 * deserializeAws_json1_1ExecuteCommandLogConfiguration
 */
const de_ExecuteCommandLogConfiguration = (output: any, context: __SerdeContext): ExecuteCommandLogConfiguration => {
  return {
    cloudWatchEncryptionEnabled: __expectBoolean(output.cloudWatchEncryptionEnabled),
    cloudWatchLogGroupName: __expectString(output.cloudWatchLogGroupName),
    s3BucketName: __expectString(output.s3BucketName),
    s3EncryptionEnabled: __expectBoolean(output.s3EncryptionEnabled),
    s3KeyPrefix: __expectString(output.s3KeyPrefix),
  } as any;
};

/**
 * deserializeAws_json1_1ExecuteCommandResponse
 */
const de_ExecuteCommandResponse = (output: any, context: __SerdeContext): ExecuteCommandResponse => {
  return {
    clusterArn: __expectString(output.clusterArn),
    containerArn: __expectString(output.containerArn),
    containerName: __expectString(output.containerName),
    interactive: __expectBoolean(output.interactive),
    session: output.session != null ? de_Session(output.session, context) : undefined,
    taskArn: __expectString(output.taskArn),
  } as any;
};

/**
 * deserializeAws_json1_1Failure
 */
const de_Failure = (output: any, context: __SerdeContext): Failure => {
  return {
    arn: __expectString(output.arn),
    detail: __expectString(output.detail),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_1Failures
 */
const de_Failures = (output: any, context: __SerdeContext): Failure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Failure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FirelensConfiguration
 */
const de_FirelensConfiguration = (output: any, context: __SerdeContext): FirelensConfiguration => {
  return {
    options: output.options != null ? de_FirelensConfigurationOptionsMap(output.options, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1FirelensConfigurationOptionsMap
 */
const de_FirelensConfigurationOptionsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1FSxWindowsFileServerAuthorizationConfig
 */
const de_FSxWindowsFileServerAuthorizationConfig = (
  output: any,
  context: __SerdeContext
): FSxWindowsFileServerAuthorizationConfig => {
  return {
    credentialsParameter: __expectString(output.credentialsParameter),
    domain: __expectString(output.domain),
  } as any;
};

/**
 * deserializeAws_json1_1FSxWindowsFileServerVolumeConfiguration
 */
const de_FSxWindowsFileServerVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): FSxWindowsFileServerVolumeConfiguration => {
  return {
    authorizationConfig:
      output.authorizationConfig != null
        ? de_FSxWindowsFileServerAuthorizationConfig(output.authorizationConfig, context)
        : undefined,
    fileSystemId: __expectString(output.fileSystemId),
    rootDirectory: __expectString(output.rootDirectory),
  } as any;
};

/**
 * deserializeAws_json1_1GetTaskProtectionResponse
 */
const de_GetTaskProtectionResponse = (output: any, context: __SerdeContext): GetTaskProtectionResponse => {
  return {
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
    protectedTasks: output.protectedTasks != null ? de_ProtectedTasks(output.protectedTasks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GpuIds
 */
const de_GpuIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HealthCheck
 */
const de_HealthCheck = (output: any, context: __SerdeContext): HealthCheck => {
  return {
    command: output.command != null ? de_StringList(output.command, context) : undefined,
    interval: __expectInt32(output.interval),
    retries: __expectInt32(output.retries),
    startPeriod: __expectInt32(output.startPeriod),
    timeout: __expectInt32(output.timeout),
  } as any;
};

/**
 * deserializeAws_json1_1HostEntry
 */
const de_HostEntry = (output: any, context: __SerdeContext): HostEntry => {
  return {
    hostname: __expectString(output.hostname),
    ipAddress: __expectString(output.ipAddress),
  } as any;
};

/**
 * deserializeAws_json1_1HostEntryList
 */
const de_HostEntryList = (output: any, context: __SerdeContext): HostEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HostEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HostVolumeProperties
 */
const de_HostVolumeProperties = (output: any, context: __SerdeContext): HostVolumeProperties => {
  return {
    sourcePath: __expectString(output.sourcePath),
  } as any;
};

/**
 * deserializeAws_json1_1InferenceAccelerator
 */
const de_InferenceAccelerator = (output: any, context: __SerdeContext): InferenceAccelerator => {
  return {
    deviceName: __expectString(output.deviceName),
    deviceType: __expectString(output.deviceType),
  } as any;
};

/**
 * deserializeAws_json1_1InferenceAcceleratorOverride
 */
const de_InferenceAcceleratorOverride = (output: any, context: __SerdeContext): InferenceAcceleratorOverride => {
  return {
    deviceName: __expectString(output.deviceName),
    deviceType: __expectString(output.deviceType),
  } as any;
};

/**
 * deserializeAws_json1_1InferenceAcceleratorOverrides
 */
const de_InferenceAcceleratorOverrides = (output: any, context: __SerdeContext): InferenceAcceleratorOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InferenceAcceleratorOverride(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferenceAccelerators
 */
const de_InferenceAccelerators = (output: any, context: __SerdeContext): InferenceAccelerator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InferenceAccelerator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceHealthCheckResult
 */
const de_InstanceHealthCheckResult = (output: any, context: __SerdeContext): InstanceHealthCheckResult => {
  return {
    lastStatusChange:
      output.lastStatusChange != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStatusChange)))
        : undefined,
    lastUpdated:
      output.lastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceHealthCheckResultList
 */
const de_InstanceHealthCheckResultList = (output: any, context: __SerdeContext): InstanceHealthCheckResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceHealthCheckResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KernelCapabilities
 */
const de_KernelCapabilities = (output: any, context: __SerdeContext): KernelCapabilities => {
  return {
    add: output.add != null ? de_StringList(output.add, context) : undefined,
    drop: output.drop != null ? de_StringList(output.drop, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1KeyValuePair
 */
const de_KeyValuePair = (output: any, context: __SerdeContext): KeyValuePair => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LinuxParameters
 */
const de_LinuxParameters = (output: any, context: __SerdeContext): LinuxParameters => {
  return {
    capabilities: output.capabilities != null ? de_KernelCapabilities(output.capabilities, context) : undefined,
    devices: output.devices != null ? de_DevicesList(output.devices, context) : undefined,
    initProcessEnabled: __expectBoolean(output.initProcessEnabled),
    maxSwap: __expectInt32(output.maxSwap),
    sharedMemorySize: __expectInt32(output.sharedMemorySize),
    swappiness: __expectInt32(output.swappiness),
    tmpfs: output.tmpfs != null ? de_TmpfsList(output.tmpfs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListAccountSettingsResponse
 */
const de_ListAccountSettingsResponse = (output: any, context: __SerdeContext): ListAccountSettingsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    settings: output.settings != null ? de_Settings(output.settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListAttributesResponse
 */
const de_ListAttributesResponse = (output: any, context: __SerdeContext): ListAttributesResponse => {
  return {
    attributes: output.attributes != null ? de_Attributes(output.attributes, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListClustersResponse
 */
const de_ListClustersResponse = (output: any, context: __SerdeContext): ListClustersResponse => {
  return {
    clusterArns: output.clusterArns != null ? de_StringList(output.clusterArns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListContainerInstancesResponse
 */
const de_ListContainerInstancesResponse = (output: any, context: __SerdeContext): ListContainerInstancesResponse => {
  return {
    containerInstanceArns:
      output.containerInstanceArns != null ? de_StringList(output.containerInstanceArns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListServicesByNamespaceResponse
 */
const de_ListServicesByNamespaceResponse = (output: any, context: __SerdeContext): ListServicesByNamespaceResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    serviceArns: output.serviceArns != null ? de_StringList(output.serviceArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListServicesResponse
 */
const de_ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    serviceArns: output.serviceArns != null ? de_StringList(output.serviceArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTaskDefinitionFamiliesResponse
 */
const de_ListTaskDefinitionFamiliesResponse = (
  output: any,
  context: __SerdeContext
): ListTaskDefinitionFamiliesResponse => {
  return {
    families: output.families != null ? de_StringList(output.families, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTaskDefinitionsResponse
 */
const de_ListTaskDefinitionsResponse = (output: any, context: __SerdeContext): ListTaskDefinitionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    taskDefinitionArns:
      output.taskDefinitionArns != null ? de_StringList(output.taskDefinitionArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTasksResponse
 */
const de_ListTasksResponse = (output: any, context: __SerdeContext): ListTasksResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    taskArns: output.taskArns != null ? de_StringList(output.taskArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancer
 */
const de_LoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  return {
    containerName: __expectString(output.containerName),
    containerPort: __expectInt32(output.containerPort),
    loadBalancerName: __expectString(output.loadBalancerName),
    targetGroupArn: __expectString(output.targetGroupArn),
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancers
 */
const de_LoadBalancers = (output: any, context: __SerdeContext): LoadBalancer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoadBalancer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LogConfiguration
 */
const de_LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    logDriver: __expectString(output.logDriver),
    options: output.options != null ? de_LogConfigurationOptionsMap(output.options, context) : undefined,
    secretOptions: output.secretOptions != null ? de_SecretList(output.secretOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LogConfigurationOptionsMap
 */
const de_LogConfigurationOptionsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ManagedAgent
 */
const de_ManagedAgent = (output: any, context: __SerdeContext): ManagedAgent => {
  return {
    lastStartedAt:
      output.lastStartedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStartedAt)))
        : undefined,
    lastStatus: __expectString(output.lastStatus),
    name: __expectString(output.name),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_1ManagedAgents
 */
const de_ManagedAgents = (output: any, context: __SerdeContext): ManagedAgent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ManagedAgent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ManagedScaling
 */
const de_ManagedScaling = (output: any, context: __SerdeContext): ManagedScaling => {
  return {
    instanceWarmupPeriod: __expectInt32(output.instanceWarmupPeriod),
    maximumScalingStepSize: __expectInt32(output.maximumScalingStepSize),
    minimumScalingStepSize: __expectInt32(output.minimumScalingStepSize),
    status: __expectString(output.status),
    targetCapacity: __expectInt32(output.targetCapacity),
  } as any;
};

/**
 * deserializeAws_json1_1MissingVersionException
 */
const de_MissingVersionException = (output: any, context: __SerdeContext): MissingVersionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MountPoint
 */
const de_MountPoint = (output: any, context: __SerdeContext): MountPoint => {
  return {
    containerPath: __expectString(output.containerPath),
    readOnly: __expectBoolean(output.readOnly),
    sourceVolume: __expectString(output.sourceVolume),
  } as any;
};

/**
 * deserializeAws_json1_1MountPointList
 */
const de_MountPointList = (output: any, context: __SerdeContext): MountPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MountPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NamespaceNotFoundException
 */
const de_NamespaceNotFoundException = (output: any, context: __SerdeContext): NamespaceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkBinding
 */
const de_NetworkBinding = (output: any, context: __SerdeContext): NetworkBinding => {
  return {
    bindIP: __expectString(output.bindIP),
    containerPort: __expectInt32(output.containerPort),
    containerPortRange: __expectString(output.containerPortRange),
    hostPort: __expectInt32(output.hostPort),
    hostPortRange: __expectString(output.hostPortRange),
    protocol: __expectString(output.protocol),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkBindings
 */
const de_NetworkBindings = (output: any, context: __SerdeContext): NetworkBinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkBinding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NetworkConfiguration
 */
const de_NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    awsvpcConfiguration:
      output.awsvpcConfiguration != null ? de_AwsVpcConfiguration(output.awsvpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    attachmentId: __expectString(output.attachmentId),
    ipv6Address: __expectString(output.ipv6Address),
    privateIpv4Address: __expectString(output.privateIpv4Address),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkInterfaces
 */
const de_NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NoUpdateAvailableException
 */
const de_NoUpdateAvailableException = (output: any, context: __SerdeContext): NoUpdateAvailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PlacementConstraint
 */
const de_PlacementConstraint = (output: any, context: __SerdeContext): PlacementConstraint => {
  return {
    expression: __expectString(output.expression),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1PlacementConstraints
 */
const de_PlacementConstraints = (output: any, context: __SerdeContext): PlacementConstraint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlacementConstraint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlacementStrategies
 */
const de_PlacementStrategies = (output: any, context: __SerdeContext): PlacementStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlacementStrategy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlacementStrategy
 */
const de_PlacementStrategy = (output: any, context: __SerdeContext): PlacementStrategy => {
  return {
    field: __expectString(output.field),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException
 */
const de_PlatformTaskDefinitionIncompatibilityException = (
  output: any,
  context: __SerdeContext
): PlatformTaskDefinitionIncompatibilityException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PlatformUnknownException
 */
const de_PlatformUnknownException = (output: any, context: __SerdeContext): PlatformUnknownException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PortMapping
 */
const de_PortMapping = (output: any, context: __SerdeContext): PortMapping => {
  return {
    appProtocol: __expectString(output.appProtocol),
    containerPort: __expectInt32(output.containerPort),
    containerPortRange: __expectString(output.containerPortRange),
    hostPort: __expectInt32(output.hostPort),
    name: __expectString(output.name),
    protocol: __expectString(output.protocol),
  } as any;
};

/**
 * deserializeAws_json1_1PortMappingList
 */
const de_PortMappingList = (output: any, context: __SerdeContext): PortMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProtectedTask
 */
const de_ProtectedTask = (output: any, context: __SerdeContext): ProtectedTask => {
  return {
    expirationDate:
      output.expirationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expirationDate)))
        : undefined,
    protectionEnabled: __expectBoolean(output.protectionEnabled),
    taskArn: __expectString(output.taskArn),
  } as any;
};

/**
 * deserializeAws_json1_1ProtectedTasks
 */
const de_ProtectedTasks = (output: any, context: __SerdeContext): ProtectedTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProtectedTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProxyConfiguration
 */
const de_ProxyConfiguration = (output: any, context: __SerdeContext): ProxyConfiguration => {
  return {
    containerName: __expectString(output.containerName),
    properties: output.properties != null ? de_ProxyConfigurationProperties(output.properties, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ProxyConfigurationProperties
 */
const de_ProxyConfigurationProperties = (output: any, context: __SerdeContext): KeyValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyValuePair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutAccountSettingDefaultResponse
 */
const de_PutAccountSettingDefaultResponse = (
  output: any,
  context: __SerdeContext
): PutAccountSettingDefaultResponse => {
  return {
    setting: output.setting != null ? de_Setting(output.setting, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutAccountSettingResponse
 */
const de_PutAccountSettingResponse = (output: any, context: __SerdeContext): PutAccountSettingResponse => {
  return {
    setting: output.setting != null ? de_Setting(output.setting, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutAttributesResponse
 */
const de_PutAttributesResponse = (output: any, context: __SerdeContext): PutAttributesResponse => {
  return {
    attributes: output.attributes != null ? de_Attributes(output.attributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutClusterCapacityProvidersResponse
 */
const de_PutClusterCapacityProvidersResponse = (
  output: any,
  context: __SerdeContext
): PutClusterCapacityProvidersResponse => {
  return {
    cluster: output.cluster != null ? de_Cluster(output.cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegisterContainerInstanceResponse
 */
const de_RegisterContainerInstanceResponse = (
  output: any,
  context: __SerdeContext
): RegisterContainerInstanceResponse => {
  return {
    containerInstance:
      output.containerInstance != null ? de_ContainerInstance(output.containerInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegisterTaskDefinitionResponse
 */
const de_RegisterTaskDefinitionResponse = (output: any, context: __SerdeContext): RegisterTaskDefinitionResponse => {
  return {
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    taskDefinition: output.taskDefinition != null ? de_TaskDefinition(output.taskDefinition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryCredentials
 */
const de_RepositoryCredentials = (output: any, context: __SerdeContext): RepositoryCredentials => {
  return {
    credentialsParameter: __expectString(output.credentialsParameter),
  } as any;
};

/**
 * deserializeAws_json1_1RequiresAttributes
 */
const de_RequiresAttributes = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    doubleValue: __limitedParseDouble(output.doubleValue),
    integerValue: __expectInt32(output.integerValue),
    longValue: __expectLong(output.longValue),
    name: __expectString(output.name),
    stringSetValue: output.stringSetValue != null ? de_StringList(output.stringSetValue, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceRequirement
 */
const de_ResourceRequirement = (output: any, context: __SerdeContext): ResourceRequirement => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceRequirements
 */
const de_ResourceRequirements = (output: any, context: __SerdeContext): ResourceRequirement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceRequirement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Resources
 */
const de_Resources = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RunTaskResponse
 */
const de_RunTaskResponse = (output: any, context: __SerdeContext): RunTaskResponse => {
  return {
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
    tasks: output.tasks != null ? de_Tasks(output.tasks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RuntimePlatform
 */
const de_RuntimePlatform = (output: any, context: __SerdeContext): RuntimePlatform => {
  return {
    cpuArchitecture: __expectString(output.cpuArchitecture),
    operatingSystemFamily: __expectString(output.operatingSystemFamily),
  } as any;
};

/**
 * deserializeAws_json1_1Scale
 */
const de_Scale = (output: any, context: __SerdeContext): Scale => {
  return {
    unit: __expectString(output.unit),
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1Secret
 */
const de_Secret = (output: any, context: __SerdeContext): Secret => {
  return {
    name: __expectString(output.name),
    valueFrom: __expectString(output.valueFrom),
  } as any;
};

/**
 * deserializeAws_json1_1SecretList
 */
const de_SecretList = (output: any, context: __SerdeContext): Secret[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Secret(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerException
 */
const de_ServerException = (output: any, context: __SerdeContext): ServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return {
    capacityProviderStrategy:
      output.capacityProviderStrategy != null
        ? de_CapacityProviderStrategy(output.capacityProviderStrategy, context)
        : undefined,
    clusterArn: __expectString(output.clusterArn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    createdBy: __expectString(output.createdBy),
    deploymentConfiguration:
      output.deploymentConfiguration != null
        ? de_DeploymentConfiguration(output.deploymentConfiguration, context)
        : undefined,
    deploymentController:
      output.deploymentController != null ? de_DeploymentController(output.deploymentController, context) : undefined,
    deployments: output.deployments != null ? de_Deployments(output.deployments, context) : undefined,
    desiredCount: __expectInt32(output.desiredCount),
    enableECSManagedTags: __expectBoolean(output.enableECSManagedTags),
    enableExecuteCommand: __expectBoolean(output.enableExecuteCommand),
    events: output.events != null ? de_ServiceEvents(output.events, context) : undefined,
    healthCheckGracePeriodSeconds: __expectInt32(output.healthCheckGracePeriodSeconds),
    launchType: __expectString(output.launchType),
    loadBalancers: output.loadBalancers != null ? de_LoadBalancers(output.loadBalancers, context) : undefined,
    networkConfiguration:
      output.networkConfiguration != null ? de_NetworkConfiguration(output.networkConfiguration, context) : undefined,
    pendingCount: __expectInt32(output.pendingCount),
    placementConstraints:
      output.placementConstraints != null ? de_PlacementConstraints(output.placementConstraints, context) : undefined,
    placementStrategy:
      output.placementStrategy != null ? de_PlacementStrategies(output.placementStrategy, context) : undefined,
    platformFamily: __expectString(output.platformFamily),
    platformVersion: __expectString(output.platformVersion),
    propagateTags: __expectString(output.propagateTags),
    roleArn: __expectString(output.roleArn),
    runningCount: __expectInt32(output.runningCount),
    schedulingStrategy: __expectString(output.schedulingStrategy),
    serviceArn: __expectString(output.serviceArn),
    serviceName: __expectString(output.serviceName),
    serviceRegistries:
      output.serviceRegistries != null ? de_ServiceRegistries(output.serviceRegistries, context) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    taskDefinition: __expectString(output.taskDefinition),
    taskSets: output.taskSets != null ? de_TaskSets(output.taskSets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServiceConnectClientAlias
 */
const de_ServiceConnectClientAlias = (output: any, context: __SerdeContext): ServiceConnectClientAlias => {
  return {
    dnsName: __expectString(output.dnsName),
    port: __expectInt32(output.port),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceConnectClientAliasList
 */
const de_ServiceConnectClientAliasList = (output: any, context: __SerdeContext): ServiceConnectClientAlias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceConnectClientAlias(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceConnectConfiguration
 */
const de_ServiceConnectConfiguration = (output: any, context: __SerdeContext): ServiceConnectConfiguration => {
  return {
    enabled: __expectBoolean(output.enabled),
    logConfiguration:
      output.logConfiguration != null ? de_LogConfiguration(output.logConfiguration, context) : undefined,
    namespace: __expectString(output.namespace),
    services: output.services != null ? de_ServiceConnectServiceList(output.services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServiceConnectService
 */
const de_ServiceConnectService = (output: any, context: __SerdeContext): ServiceConnectService => {
  return {
    clientAliases:
      output.clientAliases != null ? de_ServiceConnectClientAliasList(output.clientAliases, context) : undefined,
    discoveryName: __expectString(output.discoveryName),
    ingressPortOverride: __expectInt32(output.ingressPortOverride),
    portName: __expectString(output.portName),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceConnectServiceList
 */
const de_ServiceConnectServiceList = (output: any, context: __SerdeContext): ServiceConnectService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceConnectService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceConnectServiceResource
 */
const de_ServiceConnectServiceResource = (output: any, context: __SerdeContext): ServiceConnectServiceResource => {
  return {
    discoveryArn: __expectString(output.discoveryArn),
    discoveryName: __expectString(output.discoveryName),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceConnectServiceResourceList
 */
const de_ServiceConnectServiceResourceList = (
  output: any,
  context: __SerdeContext
): ServiceConnectServiceResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceConnectServiceResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceEvent
 */
const de_ServiceEvent = (output: any, context: __SerdeContext): ServiceEvent => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    id: __expectString(output.id),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceEvents
 */
const de_ServiceEvents = (output: any, context: __SerdeContext): ServiceEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceNotActiveException
 */
const de_ServiceNotActiveException = (output: any, context: __SerdeContext): ServiceNotActiveException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceNotFoundException
 */
const de_ServiceNotFoundException = (output: any, context: __SerdeContext): ServiceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceRegistries
 */
const de_ServiceRegistries = (output: any, context: __SerdeContext): ServiceRegistry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceRegistry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceRegistry
 */
const de_ServiceRegistry = (output: any, context: __SerdeContext): ServiceRegistry => {
  return {
    containerName: __expectString(output.containerName),
    containerPort: __expectInt32(output.containerPort),
    port: __expectInt32(output.port),
    registryArn: __expectString(output.registryArn),
  } as any;
};

/**
 * deserializeAws_json1_1Services
 */
const de_Services = (output: any, context: __SerdeContext): Service[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Service(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Session
 */
const de_Session = (output: any, context: __SerdeContext): Session => {
  return {
    sessionId: __expectString(output.sessionId),
    streamUrl: __expectString(output.streamUrl),
    tokenValue: __expectString(output.tokenValue),
  } as any;
};

/**
 * deserializeAws_json1_1Setting
 */
const de_Setting = (output: any, context: __SerdeContext): Setting => {
  return {
    name: __expectString(output.name),
    principalArn: __expectString(output.principalArn),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1Settings
 */
const de_Settings = (output: any, context: __SerdeContext): Setting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Setting(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartTaskResponse
 */
const de_StartTaskResponse = (output: any, context: __SerdeContext): StartTaskResponse => {
  return {
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
    tasks: output.tasks != null ? de_Tasks(output.tasks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Statistics
 */
const de_Statistics = (output: any, context: __SerdeContext): KeyValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyValuePair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StopTaskResponse
 */
const de_StopTaskResponse = (output: any, context: __SerdeContext): StopTaskResponse => {
  return {
    task: output.task != null ? de_Task(output.task, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StringMap
 */
const de_StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1SubmitAttachmentStateChangesResponse
 */
const de_SubmitAttachmentStateChangesResponse = (
  output: any,
  context: __SerdeContext
): SubmitAttachmentStateChangesResponse => {
  return {
    acknowledgment: __expectString(output.acknowledgment),
  } as any;
};

/**
 * deserializeAws_json1_1SubmitContainerStateChangeResponse
 */
const de_SubmitContainerStateChangeResponse = (
  output: any,
  context: __SerdeContext
): SubmitContainerStateChangeResponse => {
  return {
    acknowledgment: __expectString(output.acknowledgment),
  } as any;
};

/**
 * deserializeAws_json1_1SubmitTaskStateChangeResponse
 */
const de_SubmitTaskStateChangeResponse = (output: any, context: __SerdeContext): SubmitTaskStateChangeResponse => {
  return {
    acknowledgment: __expectString(output.acknowledgment),
  } as any;
};

/**
 * deserializeAws_json1_1SystemControl
 */
const de_SystemControl = (output: any, context: __SerdeContext): SystemControl => {
  return {
    namespace: __expectString(output.namespace),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1SystemControls
 */
const de_SystemControls = (output: any, context: __SerdeContext): SystemControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SystemControl(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetNotConnectedException
 */
const de_TargetNotConnectedException = (output: any, context: __SerdeContext): TargetNotConnectedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TargetNotFoundException
 */
const de_TargetNotFoundException = (output: any, context: __SerdeContext): TargetNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Task
 */
const de_Task = (output: any, context: __SerdeContext): Task => {
  return {
    attachments: output.attachments != null ? de_Attachments(output.attachments, context) : undefined,
    attributes: output.attributes != null ? de_Attributes(output.attributes, context) : undefined,
    availabilityZone: __expectString(output.availabilityZone),
    capacityProviderName: __expectString(output.capacityProviderName),
    clusterArn: __expectString(output.clusterArn),
    connectivity: __expectString(output.connectivity),
    connectivityAt:
      output.connectivityAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.connectivityAt)))
        : undefined,
    containerInstanceArn: __expectString(output.containerInstanceArn),
    containers: output.containers != null ? de_Containers(output.containers, context) : undefined,
    cpu: __expectString(output.cpu),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    desiredStatus: __expectString(output.desiredStatus),
    enableExecuteCommand: __expectBoolean(output.enableExecuteCommand),
    ephemeralStorage:
      output.ephemeralStorage != null ? de_EphemeralStorage(output.ephemeralStorage, context) : undefined,
    executionStoppedAt:
      output.executionStoppedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.executionStoppedAt)))
        : undefined,
    group: __expectString(output.group),
    healthStatus: __expectString(output.healthStatus),
    inferenceAccelerators:
      output.inferenceAccelerators != null
        ? de_InferenceAccelerators(output.inferenceAccelerators, context)
        : undefined,
    lastStatus: __expectString(output.lastStatus),
    launchType: __expectString(output.launchType),
    memory: __expectString(output.memory),
    overrides: output.overrides != null ? de_TaskOverride(output.overrides, context) : undefined,
    platformFamily: __expectString(output.platformFamily),
    platformVersion: __expectString(output.platformVersion),
    pullStartedAt:
      output.pullStartedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.pullStartedAt)))
        : undefined,
    pullStoppedAt:
      output.pullStoppedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.pullStoppedAt)))
        : undefined,
    startedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
    startedBy: __expectString(output.startedBy),
    stopCode: __expectString(output.stopCode),
    stoppedAt:
      output.stoppedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stoppedAt))) : undefined,
    stoppedReason: __expectString(output.stoppedReason),
    stoppingAt:
      output.stoppingAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stoppingAt))) : undefined,
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    taskArn: __expectString(output.taskArn),
    taskDefinitionArn: __expectString(output.taskDefinitionArn),
    version: __expectLong(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1TaskDefinition
 */
const de_TaskDefinition = (output: any, context: __SerdeContext): TaskDefinition => {
  return {
    compatibilities: output.compatibilities != null ? de_CompatibilityList(output.compatibilities, context) : undefined,
    containerDefinitions:
      output.containerDefinitions != null ? de_ContainerDefinitions(output.containerDefinitions, context) : undefined,
    cpu: __expectString(output.cpu),
    deregisteredAt:
      output.deregisteredAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.deregisteredAt)))
        : undefined,
    ephemeralStorage:
      output.ephemeralStorage != null ? de_EphemeralStorage(output.ephemeralStorage, context) : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    family: __expectString(output.family),
    inferenceAccelerators:
      output.inferenceAccelerators != null
        ? de_InferenceAccelerators(output.inferenceAccelerators, context)
        : undefined,
    ipcMode: __expectString(output.ipcMode),
    memory: __expectString(output.memory),
    networkMode: __expectString(output.networkMode),
    pidMode: __expectString(output.pidMode),
    placementConstraints:
      output.placementConstraints != null
        ? de_TaskDefinitionPlacementConstraints(output.placementConstraints, context)
        : undefined,
    proxyConfiguration:
      output.proxyConfiguration != null ? de_ProxyConfiguration(output.proxyConfiguration, context) : undefined,
    registeredAt:
      output.registeredAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.registeredAt)))
        : undefined,
    registeredBy: __expectString(output.registeredBy),
    requiresAttributes:
      output.requiresAttributes != null ? de_RequiresAttributes(output.requiresAttributes, context) : undefined,
    requiresCompatibilities:
      output.requiresCompatibilities != null
        ? de_CompatibilityList(output.requiresCompatibilities, context)
        : undefined,
    revision: __expectInt32(output.revision),
    runtimePlatform: output.runtimePlatform != null ? de_RuntimePlatform(output.runtimePlatform, context) : undefined,
    status: __expectString(output.status),
    taskDefinitionArn: __expectString(output.taskDefinitionArn),
    taskRoleArn: __expectString(output.taskRoleArn),
    volumes: output.volumes != null ? de_VolumeList(output.volumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TaskDefinitionList
 */
const de_TaskDefinitionList = (output: any, context: __SerdeContext): TaskDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaskDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TaskDefinitionPlacementConstraint
 */
const de_TaskDefinitionPlacementConstraint = (
  output: any,
  context: __SerdeContext
): TaskDefinitionPlacementConstraint => {
  return {
    expression: __expectString(output.expression),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1TaskDefinitionPlacementConstraints
 */
const de_TaskDefinitionPlacementConstraints = (
  output: any,
  context: __SerdeContext
): TaskDefinitionPlacementConstraint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaskDefinitionPlacementConstraint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TaskOverride
 */
const de_TaskOverride = (output: any, context: __SerdeContext): TaskOverride => {
  return {
    containerOverrides:
      output.containerOverrides != null ? de_ContainerOverrides(output.containerOverrides, context) : undefined,
    cpu: __expectString(output.cpu),
    ephemeralStorage:
      output.ephemeralStorage != null ? de_EphemeralStorage(output.ephemeralStorage, context) : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    inferenceAcceleratorOverrides:
      output.inferenceAcceleratorOverrides != null
        ? de_InferenceAcceleratorOverrides(output.inferenceAcceleratorOverrides, context)
        : undefined,
    memory: __expectString(output.memory),
    taskRoleArn: __expectString(output.taskRoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1Tasks
 */
const de_Tasks = (output: any, context: __SerdeContext): Task[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Task(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TaskSet
 */
const de_TaskSet = (output: any, context: __SerdeContext): TaskSet => {
  return {
    capacityProviderStrategy:
      output.capacityProviderStrategy != null
        ? de_CapacityProviderStrategy(output.capacityProviderStrategy, context)
        : undefined,
    clusterArn: __expectString(output.clusterArn),
    computedDesiredCount: __expectInt32(output.computedDesiredCount),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    externalId: __expectString(output.externalId),
    id: __expectString(output.id),
    launchType: __expectString(output.launchType),
    loadBalancers: output.loadBalancers != null ? de_LoadBalancers(output.loadBalancers, context) : undefined,
    networkConfiguration:
      output.networkConfiguration != null ? de_NetworkConfiguration(output.networkConfiguration, context) : undefined,
    pendingCount: __expectInt32(output.pendingCount),
    platformFamily: __expectString(output.platformFamily),
    platformVersion: __expectString(output.platformVersion),
    runningCount: __expectInt32(output.runningCount),
    scale: output.scale != null ? de_Scale(output.scale, context) : undefined,
    serviceArn: __expectString(output.serviceArn),
    serviceRegistries:
      output.serviceRegistries != null ? de_ServiceRegistries(output.serviceRegistries, context) : undefined,
    stabilityStatus: __expectString(output.stabilityStatus),
    stabilityStatusAt:
      output.stabilityStatusAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stabilityStatusAt)))
        : undefined,
    startedBy: __expectString(output.startedBy),
    status: __expectString(output.status),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    taskDefinition: __expectString(output.taskDefinition),
    taskSetArn: __expectString(output.taskSetArn),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TaskSetNotFoundException
 */
const de_TaskSetNotFoundException = (output: any, context: __SerdeContext): TaskSetNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TaskSets
 */
const de_TaskSets = (output: any, context: __SerdeContext): TaskSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaskSet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tmpfs
 */
const de_Tmpfs = (output: any, context: __SerdeContext): Tmpfs => {
  return {
    containerPath: __expectString(output.containerPath),
    mountOptions: output.mountOptions != null ? de_StringList(output.mountOptions, context) : undefined,
    size: __expectInt32(output.size),
  } as any;
};

/**
 * deserializeAws_json1_1TmpfsList
 */
const de_TmpfsList = (output: any, context: __SerdeContext): Tmpfs[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tmpfs(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Ulimit
 */
const de_Ulimit = (output: any, context: __SerdeContext): Ulimit => {
  return {
    hardLimit: __expectInt32(output.hardLimit),
    name: __expectString(output.name),
    softLimit: __expectInt32(output.softLimit),
  } as any;
};

/**
 * deserializeAws_json1_1UlimitList
 */
const de_UlimitList = (output: any, context: __SerdeContext): Ulimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Ulimit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnsupportedFeatureException
 */
const de_UnsupportedFeatureException = (output: any, context: __SerdeContext): UnsupportedFeatureException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateCapacityProviderResponse
 */
const de_UpdateCapacityProviderResponse = (output: any, context: __SerdeContext): UpdateCapacityProviderResponse => {
  return {
    capacityProvider:
      output.capacityProvider != null ? de_CapacityProvider(output.capacityProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateClusterResponse
 */
const de_UpdateClusterResponse = (output: any, context: __SerdeContext): UpdateClusterResponse => {
  return {
    cluster: output.cluster != null ? de_Cluster(output.cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateClusterSettingsResponse
 */
const de_UpdateClusterSettingsResponse = (output: any, context: __SerdeContext): UpdateClusterSettingsResponse => {
  return {
    cluster: output.cluster != null ? de_Cluster(output.cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateContainerAgentResponse
 */
const de_UpdateContainerAgentResponse = (output: any, context: __SerdeContext): UpdateContainerAgentResponse => {
  return {
    containerInstance:
      output.containerInstance != null ? de_ContainerInstance(output.containerInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateContainerInstancesStateResponse
 */
const de_UpdateContainerInstancesStateResponse = (
  output: any,
  context: __SerdeContext
): UpdateContainerInstancesStateResponse => {
  return {
    containerInstances:
      output.containerInstances != null ? de_ContainerInstances(output.containerInstances, context) : undefined,
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateInProgressException
 */
const de_UpdateInProgressException = (output: any, context: __SerdeContext): UpdateInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse
 */
const de_UpdateServicePrimaryTaskSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateServicePrimaryTaskSetResponse => {
  return {
    taskSet: output.taskSet != null ? de_TaskSet(output.taskSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateServiceResponse
 */
const de_UpdateServiceResponse = (output: any, context: __SerdeContext): UpdateServiceResponse => {
  return {
    service: output.service != null ? de_Service(output.service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateTaskProtectionResponse
 */
const de_UpdateTaskProtectionResponse = (output: any, context: __SerdeContext): UpdateTaskProtectionResponse => {
  return {
    failures: output.failures != null ? de_Failures(output.failures, context) : undefined,
    protectedTasks: output.protectedTasks != null ? de_ProtectedTasks(output.protectedTasks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateTaskSetResponse
 */
const de_UpdateTaskSetResponse = (output: any, context: __SerdeContext): UpdateTaskSetResponse => {
  return {
    taskSet: output.taskSet != null ? de_TaskSet(output.taskSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1VersionInfo
 */
const de_VersionInfo = (output: any, context: __SerdeContext): VersionInfo => {
  return {
    agentHash: __expectString(output.agentHash),
    agentVersion: __expectString(output.agentVersion),
    dockerVersion: __expectString(output.dockerVersion),
  } as any;
};

/**
 * deserializeAws_json1_1Volume
 */
const de_Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    dockerVolumeConfiguration:
      output.dockerVolumeConfiguration != null
        ? de_DockerVolumeConfiguration(output.dockerVolumeConfiguration, context)
        : undefined,
    efsVolumeConfiguration:
      output.efsVolumeConfiguration != null
        ? de_EFSVolumeConfiguration(output.efsVolumeConfiguration, context)
        : undefined,
    fsxWindowsFileServerVolumeConfiguration:
      output.fsxWindowsFileServerVolumeConfiguration != null
        ? de_FSxWindowsFileServerVolumeConfiguration(output.fsxWindowsFileServerVolumeConfiguration, context)
        : undefined,
    host: output.host != null ? de_HostVolumeProperties(output.host, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1VolumeFrom
 */
const de_VolumeFrom = (output: any, context: __SerdeContext): VolumeFrom => {
  return {
    readOnly: __expectBoolean(output.readOnly),
    sourceContainer: __expectString(output.sourceContainer),
  } as any;
};

/**
 * deserializeAws_json1_1VolumeFromList
 */
const de_VolumeFromList = (output: any, context: __SerdeContext): VolumeFrom[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VolumeFrom(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VolumeList
 */
const de_VolumeList = (output: any, context: __SerdeContext): Volume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Volume(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
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

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
