// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
import {
  DescribeServiceDeploymentsCommandInput,
  DescribeServiceDeploymentsCommandOutput,
} from "../commands/DescribeServiceDeploymentsCommand";
import {
  DescribeServiceRevisionsCommandInput,
  DescribeServiceRevisionsCommandOutput,
} from "../commands/DescribeServiceRevisionsCommand";
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
  ListServiceDeploymentsCommandInput,
  ListServiceDeploymentsCommandOutput,
} from "../commands/ListServiceDeploymentsCommand";
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
import {
  StopServiceDeploymentCommandInput,
  StopServiceDeploymentCommandOutput,
} from "../commands/StopServiceDeploymentCommand";
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
  AdvancedConfiguration,
  Attribute,
  AttributeLimitExceededException,
  AutoScalingGroupProvider,
  AwsVpcConfiguration,
  BlockedException,
  CapacityProviderField,
  CapacityProviderStrategyItem,
  ClientException,
  ClusterConfiguration,
  ClusterContainsContainerInstancesException,
  ClusterContainsServicesException,
  ClusterContainsTasksException,
  ClusterField,
  ClusterNotFoundException,
  ClusterServiceConnectDefaultsRequest,
  ClusterSetting,
  Compatibility,
  ConflictException,
  Container,
  ContainerDefinition,
  ContainerDependency,
  ContainerInstance,
  ContainerInstanceField,
  ContainerInstanceHealthStatus,
  ContainerOverride,
  ContainerRestartPolicy,
  CreateCapacityProviderRequest,
  CreateClusterRequest,
  CreatedAt,
  CreateServiceRequest,
  CreateServiceResponse,
  CreateTaskSetRequest,
  CreateTaskSetResponse,
  DeleteAccountSettingRequest,
  DeleteAttributesRequest,
  DeleteCapacityProviderRequest,
  DeleteClusterRequest,
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
  DeploymentLifecycleHook,
  DeploymentLifecycleHookStage,
  DeregisterContainerInstanceRequest,
  DeregisterContainerInstanceResponse,
  DeregisterTaskDefinitionRequest,
  DeregisterTaskDefinitionResponse,
  DescribeCapacityProvidersRequest,
  DescribeClustersRequest,
  DescribeContainerInstancesRequest,
  DescribeContainerInstancesResponse,
  DescribeServiceDeploymentsRequest,
  DescribeServiceDeploymentsResponse,
  DescribeServiceRevisionsRequest,
  DescribeServiceRevisionsResponse,
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
  DockerVolumeConfiguration,
  EBSTagSpecification,
  EFSAuthorizationConfig,
  EFSVolumeConfiguration,
  EnvironmentFile,
  EphemeralStorage,
  ExecuteCommandConfiguration,
  ExecuteCommandLogConfiguration,
  ExecuteCommandRequest,
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
  ListAttributesRequest,
  ListClustersRequest,
  ListContainerInstancesRequest,
  ListServiceDeploymentsRequest,
  ListServiceDeploymentsResponse,
  ListServicesByNamespaceRequest,
  ListServicesRequest,
  ListTagsForResourceRequest,
  ListTaskDefinitionFamiliesRequest,
  ListTaskDefinitionsRequest,
  ListTasksRequest,
  LoadBalancer,
  LogConfiguration,
  ManagedAgent,
  ManagedScaling,
  ManagedStorageConfiguration,
  MountPoint,
  NamespaceNotFoundException,
  NetworkBinding,
  NetworkConfiguration,
  PlacementConstraint,
  PlacementStrategy,
  PlatformDevice,
  PlatformTaskDefinitionIncompatibilityException,
  PlatformUnknownException,
  PortMapping,
  ProtectedTask,
  ProxyConfiguration,
  PutAccountSettingDefaultRequest,
  PutAccountSettingRequest,
  PutAttributesRequest,
  PutClusterCapacityProvidersRequest,
  RegisterContainerInstanceRequest,
  RegisterContainerInstanceResponse,
  RegisterTaskDefinitionRequest,
  RegisterTaskDefinitionResponse,
  RepositoryCredentials,
  Resource,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceRequirement,
  Rollback,
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
  ServiceConnectTestTrafficHeaderMatchRules,
  ServiceConnectTestTrafficHeaderRules,
  ServiceConnectTestTrafficRules,
  ServiceConnectTlsCertificateAuthority,
  ServiceConnectTlsConfiguration,
  ServiceDeployment,
  ServiceDeploymentBrief,
  ServiceDeploymentNotFoundException,
  ServiceDeploymentStatus,
  ServiceEvent,
  ServiceField,
  ServiceManagedEBSVolumeConfiguration,
  ServiceNotActiveException,
  ServiceNotFoundException,
  ServiceRegistry,
  ServiceRevision,
  ServiceVolumeConfiguration,
  StartTaskRequest,
  StartTaskResponse,
  StopServiceDeploymentRequest,
  StopTaskRequest,
  SystemControl,
  Tag,
  TargetNotConnectedException,
  TargetNotFoundException,
  Task,
  TaskDefinition,
  TaskDefinitionField,
  TaskDefinitionPlacementConstraint,
  TaskField,
  TaskManagedEBSVolumeConfiguration,
  TaskManagedEBSVolumeTerminationPolicy,
  TaskOverride,
  TaskSet,
  TaskSetField,
  TaskSetNotFoundException,
  TaskVolumeConfiguration,
  TimeoutConfiguration,
  Tmpfs,
  Ulimit,
  UnsupportedFeatureException,
  UpdateInProgressException,
  VersionInfo,
  Volume,
  VolumeFrom,
  VpcLatticeConfiguration,
} from "../models/models_0";
import {
  AttachmentStateChange,
  AutoScalingGroupProviderUpdate,
  ContainerStateChange,
  ManagedAgentStateChange,
  MissingVersionException,
  NoUpdateAvailableException,
  StopTaskResponse,
  SubmitAttachmentStateChangesRequest,
  SubmitContainerStateChangeRequest,
  SubmitTaskStateChangeRequest,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateCapacityProviderRequest,
  UpdateClusterRequest,
  UpdateClusterSettingsRequest,
  UpdateContainerAgentRequest,
  UpdateContainerAgentResponse,
  UpdateContainerInstancesStateRequest,
  UpdateContainerInstancesStateResponse,
  UpdateServicePrimaryTaskSetRequest,
  UpdateServicePrimaryTaskSetResponse,
  UpdateServiceRequest,
  UpdateServiceResponse,
  UpdateTaskProtectionRequest,
  UpdateTaskProtectionResponse,
  UpdateTaskSetRequest,
  UpdateTaskSetResponse,
} from "../models/models_1";

/**
 * serializeAws_json1_1CreateCapacityProviderCommand
 */
export const se_CreateCapacityProviderCommand = async (
  input: CreateCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCapacityProvider");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateServiceCommand
 */
export const se_CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateService");
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
  const headers: __HeaderBag = sharedHeaders("CreateTaskSet");
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
  const headers: __HeaderBag = sharedHeaders("DeleteAccountSetting");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAttributesCommand
 */
export const se_DeleteAttributesCommand = async (
  input: DeleteAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCapacityProviderCommand
 */
export const se_DeleteCapacityProviderCommand = async (
  input: DeleteCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCapacityProvider");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServiceCommand
 */
export const se_DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTaskDefinitionsCommand
 */
export const se_DeleteTaskDefinitionsCommand = async (
  input: DeleteTaskDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTaskDefinitions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTaskSetCommand
 */
export const se_DeleteTaskSetCommand = async (
  input: DeleteTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTaskSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterContainerInstanceCommand
 */
export const se_DeregisterContainerInstanceCommand = async (
  input: DeregisterContainerInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterContainerInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterTaskDefinitionCommand
 */
export const se_DeregisterTaskDefinitionCommand = async (
  input: DeregisterTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterTaskDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCapacityProvidersCommand
 */
export const se_DescribeCapacityProvidersCommand = async (
  input: DescribeCapacityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCapacityProviders");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClustersCommand
 */
export const se_DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeClusters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeContainerInstancesCommand
 */
export const se_DescribeContainerInstancesCommand = async (
  input: DescribeContainerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeContainerInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServiceDeploymentsCommand
 */
export const se_DescribeServiceDeploymentsCommand = async (
  input: DescribeServiceDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServiceDeployments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServiceRevisionsCommand
 */
export const se_DescribeServiceRevisionsCommand = async (
  input: DescribeServiceRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServiceRevisions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServicesCommand
 */
export const se_DescribeServicesCommand = async (
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTaskDefinitionCommand
 */
export const se_DescribeTaskDefinitionCommand = async (
  input: DescribeTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTaskDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTasksCommand
 */
export const se_DescribeTasksCommand = async (
  input: DescribeTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTaskSetsCommand
 */
export const se_DescribeTaskSetsCommand = async (
  input: DescribeTaskSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTaskSets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DiscoverPollEndpointCommand
 */
export const se_DiscoverPollEndpointCommand = async (
  input: DiscoverPollEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DiscoverPollEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExecuteCommandCommand
 */
export const se_ExecuteCommandCommand = async (
  input: ExecuteCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExecuteCommand");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTaskProtectionCommand
 */
export const se_GetTaskProtectionCommand = async (
  input: GetTaskProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTaskProtection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountSettingsCommand
 */
export const se_ListAccountSettingsCommand = async (
  input: ListAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccountSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAttributesCommand
 */
export const se_ListAttributesCommand = async (
  input: ListAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListClusters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListContainerInstancesCommand
 */
export const se_ListContainerInstancesCommand = async (
  input: ListContainerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListContainerInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServiceDeploymentsCommand
 */
export const se_ListServiceDeploymentsCommand = async (
  input: ListServiceDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceDeployments");
  let body: any;
  body = JSON.stringify(se_ListServiceDeploymentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServicesCommand
 */
export const se_ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServicesByNamespaceCommand
 */
export const se_ListServicesByNamespaceCommand = async (
  input: ListServicesByNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServicesByNamespace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTaskDefinitionFamiliesCommand
 */
export const se_ListTaskDefinitionFamiliesCommand = async (
  input: ListTaskDefinitionFamiliesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTaskDefinitionFamilies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTaskDefinitionsCommand
 */
export const se_ListTaskDefinitionsCommand = async (
  input: ListTaskDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTaskDefinitions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTasksCommand
 */
export const se_ListTasksCommand = async (
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAccountSettingCommand
 */
export const se_PutAccountSettingCommand = async (
  input: PutAccountSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAccountSetting");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAccountSettingDefaultCommand
 */
export const se_PutAccountSettingDefaultCommand = async (
  input: PutAccountSettingDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAccountSettingDefault");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAttributesCommand
 */
export const se_PutAttributesCommand = async (
  input: PutAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutClusterCapacityProvidersCommand
 */
export const se_PutClusterCapacityProvidersCommand = async (
  input: PutClusterCapacityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutClusterCapacityProviders");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterContainerInstanceCommand
 */
export const se_RegisterContainerInstanceCommand = async (
  input: RegisterContainerInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterContainerInstance");
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
  const headers: __HeaderBag = sharedHeaders("RegisterTaskDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RunTaskCommand
 */
export const se_RunTaskCommand = async (
  input: RunTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RunTask");
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
  const headers: __HeaderBag = sharedHeaders("StartTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopServiceDeploymentCommand
 */
export const se_StopServiceDeploymentCommand = async (
  input: StopServiceDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopServiceDeployment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTaskCommand
 */
export const se_StopTaskCommand = async (
  input: StopTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SubmitAttachmentStateChangesCommand
 */
export const se_SubmitAttachmentStateChangesCommand = async (
  input: SubmitAttachmentStateChangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SubmitAttachmentStateChanges");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SubmitContainerStateChangeCommand
 */
export const se_SubmitContainerStateChangeCommand = async (
  input: SubmitContainerStateChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SubmitContainerStateChange");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SubmitTaskStateChangeCommand
 */
export const se_SubmitTaskStateChangeCommand = async (
  input: SubmitTaskStateChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SubmitTaskStateChange");
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
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCapacityProviderCommand
 */
export const se_UpdateCapacityProviderCommand = async (
  input: UpdateCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCapacityProvider");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClusterCommand
 */
export const se_UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClusterSettingsCommand
 */
export const se_UpdateClusterSettingsCommand = async (
  input: UpdateClusterSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateClusterSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContainerAgentCommand
 */
export const se_UpdateContainerAgentCommand = async (
  input: UpdateContainerAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateContainerAgent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContainerInstancesStateCommand
 */
export const se_UpdateContainerInstancesStateCommand = async (
  input: UpdateContainerInstancesStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateContainerInstancesState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServiceCommand
 */
export const se_UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateService");
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
  const headers: __HeaderBag = sharedHeaders("UpdateServicePrimaryTaskSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTaskProtectionCommand
 */
export const se_UpdateTaskProtectionCommand = async (
  input: UpdateTaskProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTaskProtection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTaskSetCommand
 */
export const se_UpdateTaskSetCommand = async (
  input: UpdateTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTaskSet");
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
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCapacityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateServiceCommand
 */
export const de_CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServiceResponse(data, context);
  const response: CreateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTaskSetCommand
 */
export const de_CreateTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTaskSetResponse(data, context);
  const response: CreateTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAccountSettingCommand
 */
export const de_DeleteAccountSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAccountSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAttributesCommand
 */
export const de_DeleteAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCapacityProviderCommand
 */
export const de_DeleteCapacityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCapacityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCapacityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteServiceCommand
 */
export const de_DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServiceResponse(data, context);
  const response: DeleteServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTaskDefinitionsCommand
 */
export const de_DeleteTaskDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTaskDefinitionsResponse(data, context);
  const response: DeleteTaskDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTaskSetCommand
 */
export const de_DeleteTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTaskSetResponse(data, context);
  const response: DeleteTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterContainerInstanceCommand
 */
export const de_DeregisterContainerInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterContainerInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterContainerInstanceResponse(data, context);
  const response: DeregisterContainerInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterTaskDefinitionCommand
 */
export const de_DeregisterTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterTaskDefinitionResponse(data, context);
  const response: DeregisterTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCapacityProvidersCommand
 */
export const de_DescribeCapacityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCapacityProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeCapacityProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeClustersCommand
 */
export const de_DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeContainerInstancesCommand
 */
export const de_DescribeContainerInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeContainerInstancesResponse(data, context);
  const response: DescribeContainerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeServiceDeploymentsCommand
 */
export const de_DescribeServiceDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServiceDeploymentsResponse(data, context);
  const response: DescribeServiceDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeServiceRevisionsCommand
 */
export const de_DescribeServiceRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServiceRevisionsResponse(data, context);
  const response: DescribeServiceRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeServicesCommand
 */
export const de_DescribeServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServicesResponse(data, context);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTaskDefinitionCommand
 */
export const de_DescribeTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTaskDefinitionResponse(data, context);
  const response: DescribeTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTasksCommand
 */
export const de_DescribeTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTasksResponse(data, context);
  const response: DescribeTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTaskSetsCommand
 */
export const de_DescribeTaskSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTaskSetsResponse(data, context);
  const response: DescribeTaskSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DiscoverPollEndpointCommand
 */
export const de_DiscoverPollEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverPollEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DiscoverPollEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ExecuteCommandCommand
 */
export const de_ExecuteCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteCommandCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ExecuteCommandCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTaskProtectionCommand
 */
export const de_GetTaskProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaskProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTaskProtectionResponse(data, context);
  const response: GetTaskProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAccountSettingsCommand
 */
export const de_ListAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAttributesCommand
 */
export const de_ListAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListClustersCommand
 */
export const de_ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListContainerInstancesCommand
 */
export const de_ListContainerInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListContainerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListServiceDeploymentsCommand
 */
export const de_ListServiceDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServiceDeploymentsResponse(data, context);
  const response: ListServiceDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListServicesCommand
 */
export const de_ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListServicesByNamespaceCommand
 */
export const de_ListServicesByNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesByNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListServicesByNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTaskDefinitionFamiliesCommand
 */
export const de_ListTaskDefinitionFamiliesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionFamiliesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTaskDefinitionFamiliesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTaskDefinitionsCommand
 */
export const de_ListTaskDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTaskDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTasksCommand
 */
export const de_ListTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutAccountSettingCommand
 */
export const de_PutAccountSettingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutAccountSettingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutAccountSettingDefaultCommand
 */
export const de_PutAccountSettingDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingDefaultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutAccountSettingDefaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutAttributesCommand
 */
export const de_PutAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutClusterCapacityProvidersCommand
 */
export const de_PutClusterCapacityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClusterCapacityProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutClusterCapacityProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterContainerInstanceCommand
 */
export const de_RegisterContainerInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterContainerInstanceResponse(data, context);
  const response: RegisterContainerInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterTaskDefinitionCommand
 */
export const de_RegisterTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterTaskDefinitionResponse(data, context);
  const response: RegisterTaskDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RunTaskCommand
 */
export const de_RunTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RunTaskResponse(data, context);
  const response: RunTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartTaskCommand
 */
export const de_StartTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartTaskResponse(data, context);
  const response: StartTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopServiceDeploymentCommand
 */
export const de_StopServiceDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServiceDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopServiceDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopTaskCommand
 */
export const de_StopTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopTaskResponse(data, context);
  const response: StopTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SubmitAttachmentStateChangesCommand
 */
export const de_SubmitAttachmentStateChangesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitAttachmentStateChangesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SubmitAttachmentStateChangesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SubmitContainerStateChangeCommand
 */
export const de_SubmitContainerStateChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitContainerStateChangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SubmitContainerStateChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SubmitTaskStateChangeCommand
 */
export const de_SubmitTaskStateChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitTaskStateChangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SubmitTaskStateChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateCapacityProviderCommand
 */
export const de_UpdateCapacityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCapacityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateCapacityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateClusterCommand
 */
export const de_UpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateClusterSettingsCommand
 */
export const de_UpdateClusterSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateClusterSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateContainerAgentCommand
 */
export const de_UpdateContainerAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerAgentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateContainerAgentResponse(data, context);
  const response: UpdateContainerAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateContainerInstancesStateCommand
 */
export const de_UpdateContainerInstancesStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerInstancesStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateContainerInstancesStateResponse(data, context);
  const response: UpdateContainerInstancesStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateServiceCommand
 */
export const de_UpdateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceResponse(data, context);
  const response: UpdateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand
 */
export const de_UpdateServicePrimaryTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePrimaryTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServicePrimaryTaskSetResponse(data, context);
  const response: UpdateServicePrimaryTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTaskProtectionCommand
 */
export const de_UpdateTaskProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTaskProtectionResponse(data, context);
  const response: UpdateTaskProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTaskSetCommand
 */
export const de_UpdateTaskSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTaskSetResponse(data, context);
  const response: UpdateTaskSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "NamespaceNotFoundException":
    case "com.amazonaws.ecs#NamespaceNotFoundException":
      throw await de_NamespaceNotFoundExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      throw await de_ClusterNotFoundExceptionRes(parsedOutput, context);
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      throw await de_PlatformTaskDefinitionIncompatibilityExceptionRes(parsedOutput, context);
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      throw await de_PlatformUnknownExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      throw await de_ServiceNotActiveExceptionRes(parsedOutput, context);
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      throw await de_ServiceNotFoundExceptionRes(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.ecs#TargetNotFoundException":
      throw await de_TargetNotFoundExceptionRes(parsedOutput, context);
    case "ClusterContainsContainerInstancesException":
    case "com.amazonaws.ecs#ClusterContainsContainerInstancesException":
      throw await de_ClusterContainsContainerInstancesExceptionRes(parsedOutput, context);
    case "ClusterContainsServicesException":
    case "com.amazonaws.ecs#ClusterContainsServicesException":
      throw await de_ClusterContainsServicesExceptionRes(parsedOutput, context);
    case "ClusterContainsTasksException":
    case "com.amazonaws.ecs#ClusterContainsTasksException":
      throw await de_ClusterContainsTasksExceptionRes(parsedOutput, context);
    case "TaskSetNotFoundException":
    case "com.amazonaws.ecs#TaskSetNotFoundException":
      throw await de_TaskSetNotFoundExceptionRes(parsedOutput, context);
    case "TargetNotConnectedException":
    case "com.amazonaws.ecs#TargetNotConnectedException":
      throw await de_TargetNotConnectedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ecs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "AttributeLimitExceededException":
    case "com.amazonaws.ecs#AttributeLimitExceededException":
      throw await de_AttributeLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.ecs#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "BlockedException":
    case "com.amazonaws.ecs#BlockedException":
      throw await de_BlockedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ecs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceDeploymentNotFoundException":
    case "com.amazonaws.ecs#ServiceDeploymentNotFoundException":
      throw await de_ServiceDeploymentNotFoundExceptionRes(parsedOutput, context);
    case "MissingVersionException":
    case "com.amazonaws.ecs#MissingVersionException":
      throw await de_MissingVersionExceptionRes(parsedOutput, context);
    case "NoUpdateAvailableException":
    case "com.amazonaws.ecs#NoUpdateAvailableException":
      throw await de_NoUpdateAvailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ClusterNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceDeploymentNotFoundExceptionRes
 */
const de_ServiceDeploymentNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceDeploymentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceDeploymentNotFoundException({
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UpdateInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AdvancedConfiguration omitted.

// se_AttachmentStateChange omitted.

// se_AttachmentStateChanges omitted.

// se_Attribute omitted.

// se_Attributes omitted.

// se_AutoScalingGroupProvider omitted.

// se_AutoScalingGroupProviderUpdate omitted.

// se_AwsVpcConfiguration omitted.

// se_CapacityProviderFieldList omitted.

// se_CapacityProviderStrategy omitted.

// se_CapacityProviderStrategyItem omitted.

// se_ClusterConfiguration omitted.

// se_ClusterFieldList omitted.

// se_ClusterServiceConnectDefaultsRequest omitted.

// se_ClusterSetting omitted.

// se_ClusterSettings omitted.

// se_CompatibilityList omitted.

// se_ContainerDefinition omitted.

// se_ContainerDefinitions omitted.

// se_ContainerDependencies omitted.

// se_ContainerDependency omitted.

// se_ContainerInstanceFieldList omitted.

// se_ContainerOverride omitted.

// se_ContainerOverrides omitted.

// se_ContainerRestartPolicy omitted.

// se_ContainerStateChange omitted.

// se_ContainerStateChanges omitted.

// se_CreateCapacityProviderRequest omitted.

// se_CreateClusterRequest omitted.

/**
 * serializeAws_json1_1CreatedAt
 */
const se_CreatedAt = (input: CreatedAt, context: __SerdeContext): any => {
  return take(input, {
    after: (_) => _.getTime() / 1_000,
    before: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_json1_1CreateServiceRequest
 */
const se_CreateServiceRequest = (input: CreateServiceRequest, context: __SerdeContext): any => {
  return take(input, {
    availabilityZoneRebalancing: [],
    capacityProviderStrategy: _json,
    clientToken: [],
    cluster: [],
    deploymentConfiguration: (_) => se_DeploymentConfiguration(_, context),
    deploymentController: _json,
    desiredCount: [],
    enableECSManagedTags: [],
    enableExecuteCommand: [],
    healthCheckGracePeriodSeconds: [],
    launchType: [],
    loadBalancers: _json,
    networkConfiguration: _json,
    placementConstraints: _json,
    placementStrategy: _json,
    platformVersion: [],
    propagateTags: [],
    role: [],
    schedulingStrategy: [],
    serviceConnectConfiguration: _json,
    serviceName: [],
    serviceRegistries: _json,
    tags: _json,
    taskDefinition: [],
    volumeConfigurations: _json,
    vpcLatticeConfigurations: _json,
  });
};

/**
 * serializeAws_json1_1CreateTaskSetRequest
 */
const se_CreateTaskSetRequest = (input: CreateTaskSetRequest, context: __SerdeContext): any => {
  return take(input, {
    capacityProviderStrategy: _json,
    clientToken: [],
    cluster: [],
    externalId: [],
    launchType: [],
    loadBalancers: _json,
    networkConfiguration: _json,
    platformVersion: [],
    scale: (_) => se_Scale(_, context),
    service: [],
    serviceRegistries: _json,
    tags: _json,
    taskDefinition: [],
  });
};

// se_DeleteAccountSettingRequest omitted.

// se_DeleteAttributesRequest omitted.

// se_DeleteCapacityProviderRequest omitted.

// se_DeleteClusterRequest omitted.

// se_DeleteServiceRequest omitted.

// se_DeleteTaskDefinitionsRequest omitted.

// se_DeleteTaskSetRequest omitted.

// se_DeploymentAlarms omitted.

// se_DeploymentCircuitBreaker omitted.

/**
 * serializeAws_json1_1DeploymentConfiguration
 */
const se_DeploymentConfiguration = (input: DeploymentConfiguration, context: __SerdeContext): any => {
  return take(input, {
    alarms: _json,
    bakeTimeInMinutes: [],
    deploymentCircuitBreaker: _json,
    lifecycleHooks: (_) => se_DeploymentLifecycleHookList(_, context),
    maximumPercent: [],
    minimumHealthyPercent: [],
    strategy: [],
  });
};

// se_DeploymentController omitted.

/**
 * serializeAws_json1_1DeploymentLifecycleHook
 */
const se_DeploymentLifecycleHook = (input: DeploymentLifecycleHook, context: __SerdeContext): any => {
  return take(input, {
    hookDetails: (_) => se_HookDetails(_, context),
    hookTargetArn: [],
    lifecycleStages: _json,
    roleArn: [],
  });
};

/**
 * serializeAws_json1_1DeploymentLifecycleHookList
 */
const se_DeploymentLifecycleHookList = (input: DeploymentLifecycleHook[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DeploymentLifecycleHook(entry, context);
    });
};

// se_DeploymentLifecycleHookStageList omitted.

// se_DeregisterContainerInstanceRequest omitted.

// se_DeregisterTaskDefinitionRequest omitted.

// se_DescribeCapacityProvidersRequest omitted.

// se_DescribeClustersRequest omitted.

// se_DescribeContainerInstancesRequest omitted.

// se_DescribeServiceDeploymentsRequest omitted.

// se_DescribeServiceRevisionsRequest omitted.

// se_DescribeServicesRequest omitted.

// se_DescribeTaskDefinitionRequest omitted.

// se_DescribeTaskSetsRequest omitted.

// se_DescribeTasksRequest omitted.

// se_Device omitted.

// se_DeviceCgroupPermissions omitted.

// se_DevicesList omitted.

// se_DiscoverPollEndpointRequest omitted.

// se_DockerLabelsMap omitted.

// se_DockerVolumeConfiguration omitted.

// se_EBSTagSpecification omitted.

// se_EBSTagSpecifications omitted.

// se_EFSAuthorizationConfig omitted.

// se_EFSVolumeConfiguration omitted.

// se_EnvironmentFile omitted.

// se_EnvironmentFiles omitted.

// se_EnvironmentVariables omitted.

// se_EphemeralStorage omitted.

// se_ExecuteCommandConfiguration omitted.

// se_ExecuteCommandLogConfiguration omitted.

// se_ExecuteCommandRequest omitted.

// se_FirelensConfiguration omitted.

// se_FirelensConfigurationOptionsMap omitted.

// se_FSxWindowsFileServerAuthorizationConfig omitted.

// se_FSxWindowsFileServerVolumeConfiguration omitted.

// se_GetTaskProtectionRequest omitted.

// se_HealthCheck omitted.

/**
 * serializeAws_json1_1HookDetails
 */
const se_HookDetails = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_HostEntry omitted.

// se_HostEntryList omitted.

// se_HostVolumeProperties omitted.

// se_InferenceAccelerator omitted.

// se_InferenceAcceleratorOverride omitted.

// se_InferenceAcceleratorOverrides omitted.

// se_InferenceAccelerators omitted.

// se_IntegerList omitted.

// se_KernelCapabilities omitted.

// se_KeyValuePair omitted.

// se_LinuxParameters omitted.

// se_ListAccountSettingsRequest omitted.

// se_ListAttributesRequest omitted.

// se_ListClustersRequest omitted.

// se_ListContainerInstancesRequest omitted.

/**
 * serializeAws_json1_1ListServiceDeploymentsRequest
 */
const se_ListServiceDeploymentsRequest = (input: ListServiceDeploymentsRequest, context: __SerdeContext): any => {
  return take(input, {
    cluster: [],
    createdAt: (_) => se_CreatedAt(_, context),
    maxResults: [],
    nextToken: [],
    service: [],
    status: _json,
  });
};

// se_ListServicesByNamespaceRequest omitted.

// se_ListServicesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTaskDefinitionFamiliesRequest omitted.

// se_ListTaskDefinitionsRequest omitted.

// se_ListTasksRequest omitted.

// se_LoadBalancer omitted.

// se_LoadBalancers omitted.

// se_LogConfiguration omitted.

// se_LogConfigurationOptionsMap omitted.

// se_ManagedAgentStateChange omitted.

// se_ManagedAgentStateChanges omitted.

// se_ManagedScaling omitted.

// se_ManagedStorageConfiguration omitted.

// se_MountPoint omitted.

// se_MountPointList omitted.

// se_NetworkBinding omitted.

// se_NetworkBindings omitted.

// se_NetworkConfiguration omitted.

// se_PlacementConstraint omitted.

// se_PlacementConstraints omitted.

// se_PlacementStrategies omitted.

// se_PlacementStrategy omitted.

// se_PlatformDevice omitted.

// se_PlatformDevices omitted.

// se_PortMapping omitted.

// se_PortMappingList omitted.

// se_ProxyConfiguration omitted.

// se_ProxyConfigurationProperties omitted.

// se_PutAccountSettingDefaultRequest omitted.

// se_PutAccountSettingRequest omitted.

// se_PutAttributesRequest omitted.

// se_PutClusterCapacityProvidersRequest omitted.

/**
 * serializeAws_json1_1RegisterContainerInstanceRequest
 */
const se_RegisterContainerInstanceRequest = (input: RegisterContainerInstanceRequest, context: __SerdeContext): any => {
  return take(input, {
    attributes: _json,
    cluster: [],
    containerInstanceArn: [],
    instanceIdentityDocument: [],
    instanceIdentityDocumentSignature: [],
    platformDevices: _json,
    tags: _json,
    totalResources: (_) => se_Resources(_, context),
    versionInfo: _json,
  });
};

// se_RegisterTaskDefinitionRequest omitted.

// se_RepositoryCredentials omitted.

/**
 * serializeAws_json1_1Resource
 */
const se_Resource = (input: Resource, context: __SerdeContext): any => {
  return take(input, {
    doubleValue: __serializeFloat,
    integerValue: [],
    longValue: [],
    name: [],
    stringSetValue: _json,
    type: [],
  });
};

// se_ResourceRequirement omitted.

// se_ResourceRequirements omitted.

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
  return take(input, {
    capacityProviderStrategy: _json,
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    cluster: [],
    count: [],
    enableECSManagedTags: [],
    enableExecuteCommand: [],
    group: [],
    launchType: [],
    networkConfiguration: _json,
    overrides: _json,
    placementConstraints: _json,
    placementStrategy: _json,
    platformVersion: [],
    propagateTags: [],
    referenceId: [],
    startedBy: [],
    tags: _json,
    taskDefinition: [],
    volumeConfigurations: _json,
  });
};

// se_RuntimePlatform omitted.

/**
 * serializeAws_json1_1Scale
 */
const se_Scale = (input: Scale, context: __SerdeContext): any => {
  return take(input, {
    unit: [],
    value: __serializeFloat,
  });
};

// se_Secret omitted.

// se_SecretList omitted.

// se_ServiceConnectClientAlias omitted.

// se_ServiceConnectClientAliasList omitted.

// se_ServiceConnectConfiguration omitted.

// se_ServiceConnectService omitted.

// se_ServiceConnectServiceList omitted.

// se_ServiceConnectTestTrafficHeaderMatchRules omitted.

// se_ServiceConnectTestTrafficHeaderRules omitted.

// se_ServiceConnectTestTrafficRules omitted.

// se_ServiceConnectTlsCertificateAuthority omitted.

// se_ServiceConnectTlsConfiguration omitted.

// se_ServiceDeploymentStatusList omitted.

// se_ServiceFieldList omitted.

// se_ServiceManagedEBSVolumeConfiguration omitted.

// se_ServiceRegistries omitted.

// se_ServiceRegistry omitted.

// se_ServiceVolumeConfiguration omitted.

// se_ServiceVolumeConfigurations omitted.

// se_StartTaskRequest omitted.

// se_StopServiceDeploymentRequest omitted.

// se_StopTaskRequest omitted.

// se_StringList omitted.

// se_StringMap omitted.

// se_SubmitAttachmentStateChangesRequest omitted.

// se_SubmitContainerStateChangeRequest omitted.

/**
 * serializeAws_json1_1SubmitTaskStateChangeRequest
 */
const se_SubmitTaskStateChangeRequest = (input: SubmitTaskStateChangeRequest, context: __SerdeContext): any => {
  return take(input, {
    attachments: _json,
    cluster: [],
    containers: _json,
    executionStoppedAt: (_) => _.getTime() / 1_000,
    managedAgents: _json,
    pullStartedAt: (_) => _.getTime() / 1_000,
    pullStoppedAt: (_) => _.getTime() / 1_000,
    reason: [],
    status: [],
    task: [],
  });
};

// se_SystemControl omitted.

// se_SystemControls omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_TaskDefinitionFieldList omitted.

// se_TaskDefinitionPlacementConstraint omitted.

// se_TaskDefinitionPlacementConstraints omitted.

// se_TaskFieldList omitted.

// se_TaskManagedEBSVolumeConfiguration omitted.

// se_TaskManagedEBSVolumeTerminationPolicy omitted.

// se_TaskOverride omitted.

// se_TaskSetFieldList omitted.

// se_TaskVolumeConfiguration omitted.

// se_TaskVolumeConfigurations omitted.

// se_TimeoutConfiguration omitted.

// se_Tmpfs omitted.

// se_TmpfsList omitted.

// se_Ulimit omitted.

// se_UlimitList omitted.

// se_UntagResourceRequest omitted.

// se_UpdateCapacityProviderRequest omitted.

// se_UpdateClusterRequest omitted.

// se_UpdateClusterSettingsRequest omitted.

// se_UpdateContainerAgentRequest omitted.

// se_UpdateContainerInstancesStateRequest omitted.

// se_UpdateServicePrimaryTaskSetRequest omitted.

/**
 * serializeAws_json1_1UpdateServiceRequest
 */
const se_UpdateServiceRequest = (input: UpdateServiceRequest, context: __SerdeContext): any => {
  return take(input, {
    availabilityZoneRebalancing: [],
    capacityProviderStrategy: _json,
    cluster: [],
    deploymentConfiguration: (_) => se_DeploymentConfiguration(_, context),
    deploymentController: _json,
    desiredCount: [],
    enableECSManagedTags: [],
    enableExecuteCommand: [],
    forceNewDeployment: [],
    healthCheckGracePeriodSeconds: [],
    loadBalancers: _json,
    networkConfiguration: _json,
    placementConstraints: _json,
    placementStrategy: _json,
    platformVersion: [],
    propagateTags: [],
    service: [],
    serviceConnectConfiguration: _json,
    serviceRegistries: _json,
    taskDefinition: [],
    volumeConfigurations: _json,
    vpcLatticeConfigurations: _json,
  });
};

// se_UpdateTaskProtectionRequest omitted.

/**
 * serializeAws_json1_1UpdateTaskSetRequest
 */
const se_UpdateTaskSetRequest = (input: UpdateTaskSetRequest, context: __SerdeContext): any => {
  return take(input, {
    cluster: [],
    scale: (_) => se_Scale(_, context),
    service: [],
    taskSet: [],
  });
};

// se_VersionInfo omitted.

// se_Volume omitted.

// se_VolumeFrom omitted.

// se_VolumeFromList omitted.

// se_VolumeList omitted.

// se_VpcLatticeConfiguration omitted.

// se_VpcLatticeConfigurations omitted.

// de_AccessDeniedException omitted.

// de_AdvancedConfiguration omitted.

// de_Attachment omitted.

// de_AttachmentDetails omitted.

// de_Attachments omitted.

// de_Attribute omitted.

// de_AttributeLimitExceededException omitted.

// de_Attributes omitted.

// de_AutoScalingGroupProvider omitted.

// de_AwsVpcConfiguration omitted.

// de_BlockedException omitted.

// de_CapacityProvider omitted.

// de_CapacityProviders omitted.

// de_CapacityProviderStrategy omitted.

// de_CapacityProviderStrategyItem omitted.

// de_ClientException omitted.

// de_Cluster omitted.

// de_ClusterConfiguration omitted.

// de_ClusterContainsContainerInstancesException omitted.

// de_ClusterContainsServicesException omitted.

// de_ClusterContainsTasksException omitted.

// de_ClusterNotFoundException omitted.

// de_Clusters omitted.

// de_ClusterServiceConnectDefaults omitted.

// de_ClusterSetting omitted.

// de_ClusterSettings omitted.

// de_CompatibilityList omitted.

// de_ConflictException omitted.

/**
 * deserializeAws_json1_1Container
 */
const de_Container = (output: any, context: __SerdeContext): Container => {
  return take(output, {
    containerArn: __expectString,
    cpu: __expectString,
    exitCode: __expectInt32,
    gpuIds: _json,
    healthStatus: __expectString,
    image: __expectString,
    imageDigest: __expectString,
    lastStatus: __expectString,
    managedAgents: (_: any) => de_ManagedAgents(_, context),
    memory: __expectString,
    memoryReservation: __expectString,
    name: __expectString,
    networkBindings: _json,
    networkInterfaces: _json,
    reason: __expectString,
    runtimeId: __expectString,
    taskArn: __expectString,
  }) as any;
};

// de_ContainerDefinition omitted.

// de_ContainerDefinitions omitted.

// de_ContainerDependencies omitted.

// de_ContainerDependency omitted.

// de_ContainerImage omitted.

// de_ContainerImages omitted.

/**
 * deserializeAws_json1_1ContainerInstance
 */
const de_ContainerInstance = (output: any, context: __SerdeContext): ContainerInstance => {
  return take(output, {
    agentConnected: __expectBoolean,
    agentUpdateStatus: __expectString,
    attachments: _json,
    attributes: _json,
    capacityProviderName: __expectString,
    containerInstanceArn: __expectString,
    ec2InstanceId: __expectString,
    healthStatus: (_: any) => de_ContainerInstanceHealthStatus(_, context),
    pendingTasksCount: __expectInt32,
    registeredAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    registeredResources: (_: any) => de_Resources(_, context),
    remainingResources: (_: any) => de_Resources(_, context),
    runningTasksCount: __expectInt32,
    status: __expectString,
    statusReason: __expectString,
    tags: _json,
    version: __expectLong,
    versionInfo: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerInstanceHealthStatus
 */
const de_ContainerInstanceHealthStatus = (output: any, context: __SerdeContext): ContainerInstanceHealthStatus => {
  return take(output, {
    details: (_: any) => de_InstanceHealthCheckResultList(_, context),
    overallStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerInstances
 */
const de_ContainerInstances = (output: any, context: __SerdeContext): ContainerInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContainerInstance(entry, context);
    });
  return retVal;
};

// de_ContainerOverride omitted.

// de_ContainerOverrides omitted.

// de_ContainerRestartPolicy omitted.

/**
 * deserializeAws_json1_1Containers
 */
const de_Containers = (output: any, context: __SerdeContext): Container[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Container(entry, context);
    });
  return retVal;
};

// de_CreateCapacityProviderResponse omitted.

// de_CreateClusterResponse omitted.

/**
 * deserializeAws_json1_1CreateServiceResponse
 */
const de_CreateServiceResponse = (output: any, context: __SerdeContext): CreateServiceResponse => {
  return take(output, {
    service: (_: any) => de_Service(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateTaskSetResponse
 */
const de_CreateTaskSetResponse = (output: any, context: __SerdeContext): CreateTaskSetResponse => {
  return take(output, {
    taskSet: (_: any) => de_TaskSet(_, context),
  }) as any;
};

// de_DeleteAccountSettingResponse omitted.

// de_DeleteAttributesResponse omitted.

// de_DeleteCapacityProviderResponse omitted.

// de_DeleteClusterResponse omitted.

/**
 * deserializeAws_json1_1DeleteServiceResponse
 */
const de_DeleteServiceResponse = (output: any, context: __SerdeContext): DeleteServiceResponse => {
  return take(output, {
    service: (_: any) => de_Service(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteTaskDefinitionsResponse
 */
const de_DeleteTaskDefinitionsResponse = (output: any, context: __SerdeContext): DeleteTaskDefinitionsResponse => {
  return take(output, {
    failures: _json,
    taskDefinitions: (_: any) => de_TaskDefinitionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteTaskSetResponse
 */
const de_DeleteTaskSetResponse = (output: any, context: __SerdeContext): DeleteTaskSetResponse => {
  return take(output, {
    taskSet: (_: any) => de_TaskSet(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Deployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  return take(output, {
    capacityProviderStrategy: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    desiredCount: __expectInt32,
    failedTasks: __expectInt32,
    fargateEphemeralStorage: _json,
    id: __expectString,
    launchType: __expectString,
    networkConfiguration: _json,
    pendingCount: __expectInt32,
    platformFamily: __expectString,
    platformVersion: __expectString,
    rolloutState: __expectString,
    rolloutStateReason: __expectString,
    runningCount: __expectInt32,
    serviceConnectConfiguration: _json,
    serviceConnectResources: _json,
    status: __expectString,
    taskDefinition: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    volumeConfigurations: _json,
    vpcLatticeConfigurations: _json,
  }) as any;
};

// de_DeploymentAlarms omitted.

// de_DeploymentCircuitBreaker omitted.

/**
 * deserializeAws_json1_1DeploymentConfiguration
 */
const de_DeploymentConfiguration = (output: any, context: __SerdeContext): DeploymentConfiguration => {
  return take(output, {
    alarms: _json,
    bakeTimeInMinutes: __expectInt32,
    deploymentCircuitBreaker: _json,
    lifecycleHooks: (_: any) => de_DeploymentLifecycleHookList(_, context),
    maximumPercent: __expectInt32,
    minimumHealthyPercent: __expectInt32,
    strategy: __expectString,
  }) as any;
};

// de_DeploymentController omitted.

// de_DeploymentEphemeralStorage omitted.

/**
 * deserializeAws_json1_1DeploymentLifecycleHook
 */
const de_DeploymentLifecycleHook = (output: any, context: __SerdeContext): DeploymentLifecycleHook => {
  return take(output, {
    hookDetails: (_: any) => de_HookDetails(_, context),
    hookTargetArn: __expectString,
    lifecycleStages: _json,
    roleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeploymentLifecycleHookList
 */
const de_DeploymentLifecycleHookList = (output: any, context: __SerdeContext): DeploymentLifecycleHook[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentLifecycleHook(entry, context);
    });
  return retVal;
};

// de_DeploymentLifecycleHookStageList omitted.

/**
 * deserializeAws_json1_1Deployments
 */
const de_Deployments = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    containerInstance: (_: any) => de_ContainerInstance(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeregisterTaskDefinitionResponse
 */
const de_DeregisterTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeregisterTaskDefinitionResponse => {
  return take(output, {
    taskDefinition: (_: any) => de_TaskDefinition(_, context),
  }) as any;
};

// de_DescribeCapacityProvidersResponse omitted.

// de_DescribeClustersResponse omitted.

/**
 * deserializeAws_json1_1DescribeContainerInstancesResponse
 */
const de_DescribeContainerInstancesResponse = (
  output: any,
  context: __SerdeContext
): DescribeContainerInstancesResponse => {
  return take(output, {
    containerInstances: (_: any) => de_ContainerInstances(_, context),
    failures: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeServiceDeploymentsResponse
 */
const de_DescribeServiceDeploymentsResponse = (
  output: any,
  context: __SerdeContext
): DescribeServiceDeploymentsResponse => {
  return take(output, {
    failures: _json,
    serviceDeployments: (_: any) => de_ServiceDeployments(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeServiceRevisionsResponse
 */
const de_DescribeServiceRevisionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeServiceRevisionsResponse => {
  return take(output, {
    failures: _json,
    serviceRevisions: (_: any) => de_ServiceRevisions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeServicesResponse
 */
const de_DescribeServicesResponse = (output: any, context: __SerdeContext): DescribeServicesResponse => {
  return take(output, {
    failures: _json,
    services: (_: any) => de_Services(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTaskDefinitionResponse
 */
const de_DescribeTaskDefinitionResponse = (output: any, context: __SerdeContext): DescribeTaskDefinitionResponse => {
  return take(output, {
    tags: _json,
    taskDefinition: (_: any) => de_TaskDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTaskSetsResponse
 */
const de_DescribeTaskSetsResponse = (output: any, context: __SerdeContext): DescribeTaskSetsResponse => {
  return take(output, {
    failures: _json,
    taskSets: (_: any) => de_TaskSets(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTasksResponse
 */
const de_DescribeTasksResponse = (output: any, context: __SerdeContext): DescribeTasksResponse => {
  return take(output, {
    failures: _json,
    tasks: (_: any) => de_Tasks(_, context),
  }) as any;
};

// de_Device omitted.

// de_DeviceCgroupPermissions omitted.

// de_DevicesList omitted.

// de_DiscoverPollEndpointResponse omitted.

// de_DockerLabelsMap omitted.

// de_DockerVolumeConfiguration omitted.

// de_EBSTagSpecification omitted.

// de_EBSTagSpecifications omitted.

// de_EFSAuthorizationConfig omitted.

// de_EFSVolumeConfiguration omitted.

// de_EnvironmentFile omitted.

// de_EnvironmentFiles omitted.

// de_EnvironmentVariables omitted.

// de_EphemeralStorage omitted.

// de_ExecuteCommandConfiguration omitted.

// de_ExecuteCommandLogConfiguration omitted.

// de_ExecuteCommandResponse omitted.

// de_Failure omitted.

// de_Failures omitted.

// de_FirelensConfiguration omitted.

// de_FirelensConfigurationOptionsMap omitted.

// de_FSxWindowsFileServerAuthorizationConfig omitted.

// de_FSxWindowsFileServerVolumeConfiguration omitted.

/**
 * deserializeAws_json1_1GetTaskProtectionResponse
 */
const de_GetTaskProtectionResponse = (output: any, context: __SerdeContext): GetTaskProtectionResponse => {
  return take(output, {
    failures: _json,
    protectedTasks: (_: any) => de_ProtectedTasks(_, context),
  }) as any;
};

// de_GpuIds omitted.

// de_HealthCheck omitted.

/**
 * deserializeAws_json1_1HookDetails
 */
const de_HookDetails = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_HostEntry omitted.

// de_HostEntryList omitted.

// de_HostVolumeProperties omitted.

// de_InferenceAccelerator omitted.

// de_InferenceAcceleratorOverride omitted.

// de_InferenceAcceleratorOverrides omitted.

// de_InferenceAccelerators omitted.

/**
 * deserializeAws_json1_1InstanceHealthCheckResult
 */
const de_InstanceHealthCheckResult = (output: any, context: __SerdeContext): InstanceHealthCheckResult => {
  return take(output, {
    lastStatusChange: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceHealthCheckResultList
 */
const de_InstanceHealthCheckResultList = (output: any, context: __SerdeContext): InstanceHealthCheckResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceHealthCheckResult(entry, context);
    });
  return retVal;
};

// de_IntegerList omitted.

// de_InvalidParameterException omitted.

// de_KernelCapabilities omitted.

// de_KeyValuePair omitted.

// de_LimitExceededException omitted.

// de_LinuxParameters omitted.

// de_ListAccountSettingsResponse omitted.

// de_ListAttributesResponse omitted.

// de_ListClustersResponse omitted.

// de_ListContainerInstancesResponse omitted.

/**
 * deserializeAws_json1_1ListServiceDeploymentsResponse
 */
const de_ListServiceDeploymentsResponse = (output: any, context: __SerdeContext): ListServiceDeploymentsResponse => {
  return take(output, {
    nextToken: __expectString,
    serviceDeployments: (_: any) => de_ServiceDeploymentsBrief(_, context),
  }) as any;
};

// de_ListServicesByNamespaceResponse omitted.

// de_ListServicesResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListTaskDefinitionFamiliesResponse omitted.

// de_ListTaskDefinitionsResponse omitted.

// de_ListTasksResponse omitted.

// de_LoadBalancer omitted.

// de_LoadBalancers omitted.

// de_LogConfiguration omitted.

// de_LogConfigurationOptionsMap omitted.

/**
 * deserializeAws_json1_1ManagedAgent
 */
const de_ManagedAgent = (output: any, context: __SerdeContext): ManagedAgent => {
  return take(output, {
    lastStartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastStatus: __expectString,
    name: __expectString,
    reason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ManagedAgents
 */
const de_ManagedAgents = (output: any, context: __SerdeContext): ManagedAgent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedAgent(entry, context);
    });
  return retVal;
};

// de_ManagedScaling omitted.

// de_ManagedStorageConfiguration omitted.

// de_MissingVersionException omitted.

// de_MountPoint omitted.

// de_MountPointList omitted.

// de_NamespaceNotFoundException omitted.

// de_NetworkBinding omitted.

// de_NetworkBindings omitted.

// de_NetworkConfiguration omitted.

// de_NetworkInterface omitted.

// de_NetworkInterfaces omitted.

// de_NoUpdateAvailableException omitted.

// de_PlacementConstraint omitted.

// de_PlacementConstraints omitted.

// de_PlacementStrategies omitted.

// de_PlacementStrategy omitted.

// de_PlatformTaskDefinitionIncompatibilityException omitted.

// de_PlatformUnknownException omitted.

// de_PortMapping omitted.

// de_PortMappingList omitted.

/**
 * deserializeAws_json1_1ProtectedTask
 */
const de_ProtectedTask = (output: any, context: __SerdeContext): ProtectedTask => {
  return take(output, {
    expirationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    protectionEnabled: __expectBoolean,
    taskArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProtectedTasks
 */
const de_ProtectedTasks = (output: any, context: __SerdeContext): ProtectedTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProtectedTask(entry, context);
    });
  return retVal;
};

// de_ProxyConfiguration omitted.

// de_ProxyConfigurationProperties omitted.

// de_PutAccountSettingDefaultResponse omitted.

// de_PutAccountSettingResponse omitted.

// de_PutAttributesResponse omitted.

// de_PutClusterCapacityProvidersResponse omitted.

/**
 * deserializeAws_json1_1RegisterContainerInstanceResponse
 */
const de_RegisterContainerInstanceResponse = (
  output: any,
  context: __SerdeContext
): RegisterContainerInstanceResponse => {
  return take(output, {
    containerInstance: (_: any) => de_ContainerInstance(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RegisterTaskDefinitionResponse
 */
const de_RegisterTaskDefinitionResponse = (output: any, context: __SerdeContext): RegisterTaskDefinitionResponse => {
  return take(output, {
    tags: _json,
    taskDefinition: (_: any) => de_TaskDefinition(_, context),
  }) as any;
};

// de_RepositoryCredentials omitted.

// de_RequiresAttributes omitted.

// de_ResolvedConfiguration omitted.

/**
 * deserializeAws_json1_1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return take(output, {
    doubleValue: __limitedParseDouble,
    integerValue: __expectInt32,
    longValue: __expectLong,
    name: __expectString,
    stringSetValue: _json,
    type: __expectString,
  }) as any;
};

// de_ResourceIds omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceRequirement omitted.

// de_ResourceRequirements omitted.

/**
 * deserializeAws_json1_1Resources
 */
const de_Resources = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Rollback
 */
const de_Rollback = (output: any, context: __SerdeContext): Rollback => {
  return take(output, {
    reason: __expectString,
    serviceRevisionArn: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1RunTaskResponse
 */
const de_RunTaskResponse = (output: any, context: __SerdeContext): RunTaskResponse => {
  return take(output, {
    failures: _json,
    tasks: (_: any) => de_Tasks(_, context),
  }) as any;
};

// de_RuntimePlatform omitted.

/**
 * deserializeAws_json1_1Scale
 */
const de_Scale = (output: any, context: __SerdeContext): Scale => {
  return take(output, {
    unit: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

// de_Secret omitted.

// de_SecretList omitted.

// de_ServerException omitted.

/**
 * deserializeAws_json1_1Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return take(output, {
    availabilityZoneRebalancing: __expectString,
    capacityProviderStrategy: _json,
    clusterArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    deploymentConfiguration: (_: any) => de_DeploymentConfiguration(_, context),
    deploymentController: _json,
    deployments: (_: any) => de_Deployments(_, context),
    desiredCount: __expectInt32,
    enableECSManagedTags: __expectBoolean,
    enableExecuteCommand: __expectBoolean,
    events: (_: any) => de_ServiceEvents(_, context),
    healthCheckGracePeriodSeconds: __expectInt32,
    launchType: __expectString,
    loadBalancers: _json,
    networkConfiguration: _json,
    pendingCount: __expectInt32,
    placementConstraints: _json,
    placementStrategy: _json,
    platformFamily: __expectString,
    platformVersion: __expectString,
    propagateTags: __expectString,
    roleArn: __expectString,
    runningCount: __expectInt32,
    schedulingStrategy: __expectString,
    serviceArn: __expectString,
    serviceName: __expectString,
    serviceRegistries: _json,
    status: __expectString,
    tags: _json,
    taskDefinition: __expectString,
    taskSets: (_: any) => de_TaskSets(_, context),
  }) as any;
};

// de_ServiceConnectClientAlias omitted.

// de_ServiceConnectClientAliasList omitted.

// de_ServiceConnectConfiguration omitted.

// de_ServiceConnectService omitted.

// de_ServiceConnectServiceList omitted.

// de_ServiceConnectServiceResource omitted.

// de_ServiceConnectServiceResourceList omitted.

// de_ServiceConnectTestTrafficHeaderMatchRules omitted.

// de_ServiceConnectTestTrafficHeaderRules omitted.

// de_ServiceConnectTestTrafficRules omitted.

// de_ServiceConnectTlsCertificateAuthority omitted.

// de_ServiceConnectTlsConfiguration omitted.

/**
 * deserializeAws_json1_1ServiceDeployment
 */
const de_ServiceDeployment = (output: any, context: __SerdeContext): ServiceDeployment => {
  return take(output, {
    alarms: _json,
    clusterArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentCircuitBreaker: _json,
    deploymentConfiguration: (_: any) => de_DeploymentConfiguration(_, context),
    finishedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecycleStage: __expectString,
    rollback: (_: any) => de_Rollback(_, context),
    serviceArn: __expectString,
    serviceDeploymentArn: __expectString,
    sourceServiceRevisions: _json,
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: __expectString,
    stoppedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    targetServiceRevision: _json,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ServiceDeploymentAlarms omitted.

/**
 * deserializeAws_json1_1ServiceDeploymentBrief
 */
const de_ServiceDeploymentBrief = (output: any, context: __SerdeContext): ServiceDeploymentBrief => {
  return take(output, {
    clusterArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    finishedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    serviceArn: __expectString,
    serviceDeploymentArn: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: __expectString,
    targetServiceRevisionArn: __expectString,
  }) as any;
};

// de_ServiceDeploymentCircuitBreaker omitted.

// de_ServiceDeploymentNotFoundException omitted.

/**
 * deserializeAws_json1_1ServiceDeployments
 */
const de_ServiceDeployments = (output: any, context: __SerdeContext): ServiceDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceDeployment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceDeploymentsBrief
 */
const de_ServiceDeploymentsBrief = (output: any, context: __SerdeContext): ServiceDeploymentBrief[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceDeploymentBrief(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceEvent
 */
const de_ServiceEvent = (output: any, context: __SerdeContext): ServiceEvent => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ServiceEvents
 */
const de_ServiceEvents = (output: any, context: __SerdeContext): ServiceEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceEvent(entry, context);
    });
  return retVal;
};

// de_ServiceManagedEBSVolumeConfiguration omitted.

// de_ServiceNotActiveException omitted.

// de_ServiceNotFoundException omitted.

// de_ServiceRegistries omitted.

// de_ServiceRegistry omitted.

/**
 * deserializeAws_json1_1ServiceRevision
 */
const de_ServiceRevision = (output: any, context: __SerdeContext): ServiceRevision => {
  return take(output, {
    capacityProviderStrategy: _json,
    clusterArn: __expectString,
    containerImages: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fargateEphemeralStorage: _json,
    guardDutyEnabled: __expectBoolean,
    launchType: __expectString,
    loadBalancers: _json,
    networkConfiguration: _json,
    platformFamily: __expectString,
    platformVersion: __expectString,
    resolvedConfiguration: _json,
    serviceArn: __expectString,
    serviceConnectConfiguration: _json,
    serviceRegistries: _json,
    serviceRevisionArn: __expectString,
    taskDefinition: __expectString,
    volumeConfigurations: _json,
    vpcLatticeConfigurations: _json,
  }) as any;
};

// de_ServiceRevisionLoadBalancer omitted.

// de_ServiceRevisionLoadBalancers omitted.

/**
 * deserializeAws_json1_1ServiceRevisions
 */
const de_ServiceRevisions = (output: any, context: __SerdeContext): ServiceRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceRevision(entry, context);
    });
  return retVal;
};

// de_ServiceRevisionsSummaryList omitted.

// de_ServiceRevisionSummary omitted.

/**
 * deserializeAws_json1_1Services
 */
const de_Services = (output: any, context: __SerdeContext): Service[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Service(entry, context);
    });
  return retVal;
};

// de_ServiceVolumeConfiguration omitted.

// de_ServiceVolumeConfigurations omitted.

// de_Session omitted.

// de_Setting omitted.

// de_Settings omitted.

/**
 * deserializeAws_json1_1StartTaskResponse
 */
const de_StartTaskResponse = (output: any, context: __SerdeContext): StartTaskResponse => {
  return take(output, {
    failures: _json,
    tasks: (_: any) => de_Tasks(_, context),
  }) as any;
};

// de_Statistics omitted.

// de_StopServiceDeploymentResponse omitted.

/**
 * deserializeAws_json1_1StopTaskResponse
 */
const de_StopTaskResponse = (output: any, context: __SerdeContext): StopTaskResponse => {
  return take(output, {
    task: (_: any) => de_Task(_, context),
  }) as any;
};

// de_StringList omitted.

// de_StringMap omitted.

// de_SubmitAttachmentStateChangesResponse omitted.

// de_SubmitContainerStateChangeResponse omitted.

// de_SubmitTaskStateChangeResponse omitted.

// de_SystemControl omitted.

// de_SystemControls omitted.

// de_Tag omitted.

// de_TagResourceResponse omitted.

// de_Tags omitted.

// de_TargetNotConnectedException omitted.

// de_TargetNotFoundException omitted.

/**
 * deserializeAws_json1_1Task
 */
const de_Task = (output: any, context: __SerdeContext): Task => {
  return take(output, {
    attachments: _json,
    attributes: _json,
    availabilityZone: __expectString,
    capacityProviderName: __expectString,
    clusterArn: __expectString,
    connectivity: __expectString,
    connectivityAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    containerInstanceArn: __expectString,
    containers: (_: any) => de_Containers(_, context),
    cpu: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    desiredStatus: __expectString,
    enableExecuteCommand: __expectBoolean,
    ephemeralStorage: _json,
    executionStoppedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fargateEphemeralStorage: _json,
    group: __expectString,
    healthStatus: __expectString,
    inferenceAccelerators: _json,
    lastStatus: __expectString,
    launchType: __expectString,
    memory: __expectString,
    overrides: _json,
    platformFamily: __expectString,
    platformVersion: __expectString,
    pullStartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pullStoppedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startedBy: __expectString,
    stopCode: __expectString,
    stoppedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stoppedReason: __expectString,
    stoppingAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tags: _json,
    taskArn: __expectString,
    taskDefinitionArn: __expectString,
    version: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1TaskDefinition
 */
const de_TaskDefinition = (output: any, context: __SerdeContext): TaskDefinition => {
  return take(output, {
    compatibilities: _json,
    containerDefinitions: _json,
    cpu: __expectString,
    deregisteredAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    enableFaultInjection: __expectBoolean,
    ephemeralStorage: _json,
    executionRoleArn: __expectString,
    family: __expectString,
    inferenceAccelerators: _json,
    ipcMode: __expectString,
    memory: __expectString,
    networkMode: __expectString,
    pidMode: __expectString,
    placementConstraints: _json,
    proxyConfiguration: _json,
    registeredAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    registeredBy: __expectString,
    requiresAttributes: _json,
    requiresCompatibilities: _json,
    revision: __expectInt32,
    runtimePlatform: _json,
    status: __expectString,
    taskDefinitionArn: __expectString,
    taskRoleArn: __expectString,
    volumes: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1TaskDefinitionList
 */
const de_TaskDefinitionList = (output: any, context: __SerdeContext): TaskDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TaskDefinition(entry, context);
    });
  return retVal;
};

// de_TaskDefinitionPlacementConstraint omitted.

// de_TaskDefinitionPlacementConstraints omitted.

// de_TaskEphemeralStorage omitted.

// de_TaskOverride omitted.

/**
 * deserializeAws_json1_1Tasks
 */
const de_Tasks = (output: any, context: __SerdeContext): Task[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Task(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TaskSet
 */
const de_TaskSet = (output: any, context: __SerdeContext): TaskSet => {
  return take(output, {
    capacityProviderStrategy: _json,
    clusterArn: __expectString,
    computedDesiredCount: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    externalId: __expectString,
    fargateEphemeralStorage: _json,
    id: __expectString,
    launchType: __expectString,
    loadBalancers: _json,
    networkConfiguration: _json,
    pendingCount: __expectInt32,
    platformFamily: __expectString,
    platformVersion: __expectString,
    runningCount: __expectInt32,
    scale: (_: any) => de_Scale(_, context),
    serviceArn: __expectString,
    serviceRegistries: _json,
    stabilityStatus: __expectString,
    stabilityStatusAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startedBy: __expectString,
    status: __expectString,
    tags: _json,
    taskDefinition: __expectString,
    taskSetArn: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_TaskSetNotFoundException omitted.

/**
 * deserializeAws_json1_1TaskSets
 */
const de_TaskSets = (output: any, context: __SerdeContext): TaskSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TaskSet(entry, context);
    });
  return retVal;
};

// de_TimeoutConfiguration omitted.

// de_Tmpfs omitted.

// de_TmpfsList omitted.

// de_Ulimit omitted.

// de_UlimitList omitted.

// de_UnsupportedFeatureException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateCapacityProviderResponse omitted.

// de_UpdateClusterResponse omitted.

// de_UpdateClusterSettingsResponse omitted.

/**
 * deserializeAws_json1_1UpdateContainerAgentResponse
 */
const de_UpdateContainerAgentResponse = (output: any, context: __SerdeContext): UpdateContainerAgentResponse => {
  return take(output, {
    containerInstance: (_: any) => de_ContainerInstance(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateContainerInstancesStateResponse
 */
const de_UpdateContainerInstancesStateResponse = (
  output: any,
  context: __SerdeContext
): UpdateContainerInstancesStateResponse => {
  return take(output, {
    containerInstances: (_: any) => de_ContainerInstances(_, context),
    failures: _json,
  }) as any;
};

// de_UpdateInProgressException omitted.

/**
 * deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse
 */
const de_UpdateServicePrimaryTaskSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateServicePrimaryTaskSetResponse => {
  return take(output, {
    taskSet: (_: any) => de_TaskSet(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateServiceResponse
 */
const de_UpdateServiceResponse = (output: any, context: __SerdeContext): UpdateServiceResponse => {
  return take(output, {
    service: (_: any) => de_Service(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateTaskProtectionResponse
 */
const de_UpdateTaskProtectionResponse = (output: any, context: __SerdeContext): UpdateTaskProtectionResponse => {
  return take(output, {
    failures: _json,
    protectedTasks: (_: any) => de_ProtectedTasks(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateTaskSetResponse
 */
const de_UpdateTaskSetResponse = (output: any, context: __SerdeContext): UpdateTaskSetResponse => {
  return take(output, {
    taskSet: (_: any) => de_TaskSet(_, context),
  }) as any;
};

// de_VersionInfo omitted.

// de_Volume omitted.

// de_VolumeFrom omitted.

// de_VolumeFromList omitted.

// de_VolumeList omitted.

// de_VpcLatticeConfiguration omitted.

// de_VpcLatticeConfigurations omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AmazonEC2ContainerServiceV20141113.${operation}`,
  };
}
