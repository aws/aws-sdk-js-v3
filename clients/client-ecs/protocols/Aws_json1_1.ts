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
  EFSVolumeConfiguration,
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
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateCapacityProviderCommand = async (
  input: CreateCapacityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCapacityProviderRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.CreateCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.CreateService"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateServiceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTaskSetCommand = async (
  input: CreateTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.CreateTaskSet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateTaskSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAccountSettingCommand = async (
  input: DeleteAccountSettingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DeleteAccountSetting"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteAccountSettingRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAttributesCommand = async (
  input: DeleteAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DeleteAttributes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteAttributesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DeleteCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DeleteService"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteServiceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTaskSetCommand = async (
  input: DeleteTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DeleteTaskSet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteTaskSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterContainerInstanceCommand = async (
  input: DeregisterContainerInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterContainerInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterTaskDefinitionCommand = async (
  input: DeregisterTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterTaskDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCapacityProvidersCommand = async (
  input: DescribeCapacityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCapacityProvidersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DescribeClusters"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeClustersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeContainerInstancesCommand = async (
  input: DescribeContainerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeContainerInstancesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeServicesCommand = async (
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DescribeServices"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeServicesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTaskDefinitionCommand = async (
  input: DescribeTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTaskDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTasksCommand = async (
  input: DescribeTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DescribeTasks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTasksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTaskSetsCommand = async (
  input: DescribeTaskSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DescribeTaskSets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTaskSetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DiscoverPollEndpointCommand = async (
  input: DiscoverPollEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DiscoverPollEndpointRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccountSettingsCommand = async (
  input: ListAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.ListAccountSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAccountSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAttributesCommand = async (
  input: ListAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.ListAttributes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAttributesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.ListClusters"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListClustersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListContainerInstancesCommand = async (
  input: ListContainerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.ListContainerInstances"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListContainerInstancesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.ListServices"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListServicesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTaskDefinitionFamiliesCommand = async (
  input: ListTaskDefinitionFamiliesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTaskDefinitionFamiliesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTaskDefinitionsCommand = async (
  input: ListTaskDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTaskDefinitionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTasksCommand = async (
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.ListTasks"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.PutAccountSetting"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutAccountSettingRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAccountSettingDefaultCommand = async (
  input: PutAccountSettingDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutAccountSettingDefaultRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAttributesCommand = async (
  input: PutAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.PutAttributes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutAttributesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutClusterCapacityProvidersCommand = async (
  input: PutClusterCapacityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutClusterCapacityProvidersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterContainerInstanceCommand = async (
  input: RegisterContainerInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterContainerInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterTaskDefinitionCommand = async (
  input: RegisterTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterTaskDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RunTaskCommand = async (
  input: RunTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.RunTask"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.StartTask"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.StopTask"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SubmitAttachmentStateChangesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SubmitContainerStateChangeCommand = async (
  input: SubmitContainerStateChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SubmitContainerStateChangeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SubmitTaskStateChangeCommand = async (
  input: SubmitTaskStateChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SubmitTaskStateChangeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.TagResource"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateClusterSettingsCommand = async (
  input: UpdateClusterSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.UpdateClusterSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateClusterSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateContainerAgentCommand = async (
  input: UpdateContainerAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateContainerAgentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateContainerInstancesStateCommand = async (
  input: UpdateContainerInstancesStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateContainerInstancesStateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.UpdateService"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateServiceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServicePrimaryTaskSetCommand = async (
  input: UpdateServicePrimaryTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateServicePrimaryTaskSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTaskSetCommand = async (
  input: UpdateTaskSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerServiceV20141113.UpdateTaskSet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateTaskSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateCapacityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapacityProviderCommandOutput> => {
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
};

const deserializeAws_json1_1CreateCapacityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapacityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ecs#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1CreateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      response = {
        ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      response = {
        ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1CreateTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      response = {
        ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      response = {
        ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DeleteAccountSettingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSettingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DeleteAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetNotFoundException":
    case "com.amazonaws.ecs#TargetNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterContainsContainerInstancesException":
    case "com.amazonaws.ecs#ClusterContainsContainerInstancesException":
      response = {
        ...(await deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterContainsServicesException":
    case "com.amazonaws.ecs#ClusterContainsServicesException":
      response = {
        ...(await deserializeAws_json1_1ClusterContainsServicesExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterContainsTasksException":
    case "com.amazonaws.ecs#ClusterContainsTasksException":
      response = {
        ...(await deserializeAws_json1_1ClusterContainsTasksExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      response = {
        ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DeleteServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DeleteTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskSetNotFoundException":
    case "com.amazonaws.ecs#TaskSetNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DeregisterContainerInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterContainerInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DeregisterTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeCapacityProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCapacityProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeContainerInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeTaskSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DiscoverPollEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverPollEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1ListAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1ListAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1ListContainerInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1ListServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionFamiliesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1ListTaskDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1ListTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1PutAccountSettingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1PutAccountSettingDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSettingDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1PutAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AttributeLimitExceededException":
    case "com.amazonaws.ecs#AttributeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1AttributeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetNotFoundException":
    case "com.amazonaws.ecs#TargetNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1PutClusterCapacityProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClusterCapacityProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.ecs#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      response = {
        ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1RegisterContainerInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1RegisterTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1RunTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BlockedException":
    case "com.amazonaws.ecs#BlockedException":
      response = {
        ...(await deserializeAws_json1_1BlockedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      response = {
        ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      response = {
        ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1StartTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1StopTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1SubmitAttachmentStateChangesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitAttachmentStateChangesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1SubmitContainerStateChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitContainerStateChangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1SubmitTaskStateChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitTaskStateChangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ecs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ecs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1UpdateClusterSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1UpdateContainerAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingVersionException":
    case "com.amazonaws.ecs#MissingVersionException":
      response = {
        ...(await deserializeAws_json1_1MissingVersionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoUpdateAvailableException":
    case "com.amazonaws.ecs#NoUpdateAvailableException":
      response = {
        ...(await deserializeAws_json1_1NoUpdateAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UpdateInProgressException":
    case "com.amazonaws.ecs#UpdateInProgressException":
      response = {
        ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1UpdateContainerInstancesStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerInstancesStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1UpdateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformTaskDefinitionIncompatibilityException":
    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
      response = {
        ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformUnknownException":
    case "com.amazonaws.ecs#PlatformUnknownException":
      response = {
        ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePrimaryTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskSetNotFoundException":
    case "com.amazonaws.ecs#TaskSetNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1UpdateTaskSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ecs#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.ecs#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterNotFoundException":
    case "com.amazonaws.ecs#ClusterNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecs#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotActiveException":
    case "com.amazonaws.ecs#ServiceNotActiveException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFoundException":
    case "com.amazonaws.ecs#ServiceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskSetNotFoundException":
    case "com.amazonaws.ecs#TaskSetNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.ecs#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
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
  return {
    ...(input.attachmentArn !== undefined && {
      attachmentArn: input.attachmentArn
    }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1AttachmentStateChanges = (
  input: AttachmentStateChange[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1AttachmentStateChange(entry, context)
  );
};

const serializeAws_json1_1Attribute = (
  input: Attribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.targetId !== undefined && { targetId: input.targetId }),
    ...(input.targetType !== undefined && { targetType: input.targetType }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1Attributes = (
  input: Attribute[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Attribute(entry, context));
};

const serializeAws_json1_1AutoScalingGroupProvider = (
  input: AutoScalingGroupProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.autoScalingGroupArn !== undefined && {
      autoScalingGroupArn: input.autoScalingGroupArn
    }),
    ...(input.managedScaling !== undefined && {
      managedScaling: serializeAws_json1_1ManagedScaling(
        input.managedScaling,
        context
      )
    }),
    ...(input.managedTerminationProtection !== undefined && {
      managedTerminationProtection: input.managedTerminationProtection
    })
  };
};

const serializeAws_json1_1AwsVpcConfiguration = (
  input: AwsVpcConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.assignPublicIp !== undefined && {
      assignPublicIp: input.assignPublicIp
    }),
    ...(input.securityGroups !== undefined && {
      securityGroups: serializeAws_json1_1StringList(
        input.securityGroups,
        context
      )
    }),
    ...(input.subnets !== undefined && {
      subnets: serializeAws_json1_1StringList(input.subnets, context)
    })
  };
};

const serializeAws_json1_1CapacityProviderFieldList = (
  input: (CapacityProviderField | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1CapacityProviderStrategy = (
  input: CapacityProviderStrategyItem[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1CapacityProviderStrategyItem(entry, context)
  );
};

const serializeAws_json1_1CapacityProviderStrategyItem = (
  input: CapacityProviderStrategyItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.base !== undefined && { base: input.base }),
    ...(input.capacityProvider !== undefined && {
      capacityProvider: input.capacityProvider
    }),
    ...(input.weight !== undefined && { weight: input.weight })
  };
};

const serializeAws_json1_1ClusterFieldList = (
  input: (ClusterField | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ClusterSetting = (
  input: ClusterSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1ClusterSettings = (
  input: ClusterSetting[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ClusterSetting(entry, context));
};

const serializeAws_json1_1CompatibilityList = (
  input: (Compatibility | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ContainerDefinition = (
  input: ContainerDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.command !== undefined && {
      command: serializeAws_json1_1StringList(input.command, context)
    }),
    ...(input.cpu !== undefined && { cpu: input.cpu }),
    ...(input.dependsOn !== undefined && {
      dependsOn: serializeAws_json1_1ContainerDependencies(
        input.dependsOn,
        context
      )
    }),
    ...(input.disableNetworking !== undefined && {
      disableNetworking: input.disableNetworking
    }),
    ...(input.dnsSearchDomains !== undefined && {
      dnsSearchDomains: serializeAws_json1_1StringList(
        input.dnsSearchDomains,
        context
      )
    }),
    ...(input.dnsServers !== undefined && {
      dnsServers: serializeAws_json1_1StringList(input.dnsServers, context)
    }),
    ...(input.dockerLabels !== undefined && {
      dockerLabels: serializeAws_json1_1DockerLabelsMap(
        input.dockerLabels,
        context
      )
    }),
    ...(input.dockerSecurityOptions !== undefined && {
      dockerSecurityOptions: serializeAws_json1_1StringList(
        input.dockerSecurityOptions,
        context
      )
    }),
    ...(input.entryPoint !== undefined && {
      entryPoint: serializeAws_json1_1StringList(input.entryPoint, context)
    }),
    ...(input.environment !== undefined && {
      environment: serializeAws_json1_1EnvironmentVariables(
        input.environment,
        context
      )
    }),
    ...(input.essential !== undefined && { essential: input.essential }),
    ...(input.extraHosts !== undefined && {
      extraHosts: serializeAws_json1_1HostEntryList(input.extraHosts, context)
    }),
    ...(input.firelensConfiguration !== undefined && {
      firelensConfiguration: serializeAws_json1_1FirelensConfiguration(
        input.firelensConfiguration,
        context
      )
    }),
    ...(input.healthCheck !== undefined && {
      healthCheck: serializeAws_json1_1HealthCheck(input.healthCheck, context)
    }),
    ...(input.hostname !== undefined && { hostname: input.hostname }),
    ...(input.image !== undefined && { image: input.image }),
    ...(input.interactive !== undefined && { interactive: input.interactive }),
    ...(input.links !== undefined && {
      links: serializeAws_json1_1StringList(input.links, context)
    }),
    ...(input.linuxParameters !== undefined && {
      linuxParameters: serializeAws_json1_1LinuxParameters(
        input.linuxParameters,
        context
      )
    }),
    ...(input.logConfiguration !== undefined && {
      logConfiguration: serializeAws_json1_1LogConfiguration(
        input.logConfiguration,
        context
      )
    }),
    ...(input.memory !== undefined && { memory: input.memory }),
    ...(input.memoryReservation !== undefined && {
      memoryReservation: input.memoryReservation
    }),
    ...(input.mountPoints !== undefined && {
      mountPoints: serializeAws_json1_1MountPointList(
        input.mountPoints,
        context
      )
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.portMappings !== undefined && {
      portMappings: serializeAws_json1_1PortMappingList(
        input.portMappings,
        context
      )
    }),
    ...(input.privileged !== undefined && { privileged: input.privileged }),
    ...(input.pseudoTerminal !== undefined && {
      pseudoTerminal: input.pseudoTerminal
    }),
    ...(input.readonlyRootFilesystem !== undefined && {
      readonlyRootFilesystem: input.readonlyRootFilesystem
    }),
    ...(input.repositoryCredentials !== undefined && {
      repositoryCredentials: serializeAws_json1_1RepositoryCredentials(
        input.repositoryCredentials,
        context
      )
    }),
    ...(input.resourceRequirements !== undefined && {
      resourceRequirements: serializeAws_json1_1ResourceRequirements(
        input.resourceRequirements,
        context
      )
    }),
    ...(input.secrets !== undefined && {
      secrets: serializeAws_json1_1SecretList(input.secrets, context)
    }),
    ...(input.startTimeout !== undefined && {
      startTimeout: input.startTimeout
    }),
    ...(input.stopTimeout !== undefined && { stopTimeout: input.stopTimeout }),
    ...(input.systemControls !== undefined && {
      systemControls: serializeAws_json1_1SystemControls(
        input.systemControls,
        context
      )
    }),
    ...(input.ulimits !== undefined && {
      ulimits: serializeAws_json1_1UlimitList(input.ulimits, context)
    }),
    ...(input.user !== undefined && { user: input.user }),
    ...(input.volumesFrom !== undefined && {
      volumesFrom: serializeAws_json1_1VolumeFromList(
        input.volumesFrom,
        context
      )
    }),
    ...(input.workingDirectory !== undefined && {
      workingDirectory: input.workingDirectory
    })
  };
};

const serializeAws_json1_1ContainerDefinitions = (
  input: ContainerDefinition[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ContainerDefinition(entry, context)
  );
};

const serializeAws_json1_1ContainerDependencies = (
  input: ContainerDependency[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ContainerDependency(entry, context)
  );
};

const serializeAws_json1_1ContainerDependency = (
  input: ContainerDependency,
  context: __SerdeContext
): any => {
  return {
    ...(input.condition !== undefined && { condition: input.condition }),
    ...(input.containerName !== undefined && {
      containerName: input.containerName
    })
  };
};

const serializeAws_json1_1ContainerInstanceFieldList = (
  input: (ContainerInstanceField | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ContainerOverride = (
  input: ContainerOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.command !== undefined && {
      command: serializeAws_json1_1StringList(input.command, context)
    }),
    ...(input.cpu !== undefined && { cpu: input.cpu }),
    ...(input.environment !== undefined && {
      environment: serializeAws_json1_1EnvironmentVariables(
        input.environment,
        context
      )
    }),
    ...(input.memory !== undefined && { memory: input.memory }),
    ...(input.memoryReservation !== undefined && {
      memoryReservation: input.memoryReservation
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.resourceRequirements !== undefined && {
      resourceRequirements: serializeAws_json1_1ResourceRequirements(
        input.resourceRequirements,
        context
      )
    })
  };
};

const serializeAws_json1_1ContainerOverrides = (
  input: ContainerOverride[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ContainerOverride(entry, context)
  );
};

const serializeAws_json1_1ContainerStateChange = (
  input: ContainerStateChange,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerName !== undefined && {
      containerName: input.containerName
    }),
    ...(input.exitCode !== undefined && { exitCode: input.exitCode }),
    ...(input.imageDigest !== undefined && { imageDigest: input.imageDigest }),
    ...(input.networkBindings !== undefined && {
      networkBindings: serializeAws_json1_1NetworkBindings(
        input.networkBindings,
        context
      )
    }),
    ...(input.reason !== undefined && { reason: input.reason }),
    ...(input.runtimeId !== undefined && { runtimeId: input.runtimeId }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1ContainerStateChanges = (
  input: ContainerStateChange[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ContainerStateChange(entry, context)
  );
};

const serializeAws_json1_1CreateCapacityProviderRequest = (
  input: CreateCapacityProviderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.autoScalingGroupProvider !== undefined && {
      autoScalingGroupProvider: serializeAws_json1_1AutoScalingGroupProvider(
        input.autoScalingGroupProvider,
        context
      )
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1Tags(input.tags, context)
    })
  };
};

const serializeAws_json1_1CreateClusterRequest = (
  input: CreateClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProviders !== undefined && {
      capacityProviders: serializeAws_json1_1StringList(
        input.capacityProviders,
        context
      )
    }),
    ...(input.clusterName !== undefined && { clusterName: input.clusterName }),
    ...(input.defaultCapacityProviderStrategy !== undefined && {
      defaultCapacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(
        input.defaultCapacityProviderStrategy,
        context
      )
    }),
    ...(input.settings !== undefined && {
      settings: serializeAws_json1_1ClusterSettings(input.settings, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1Tags(input.tags, context)
    })
  };
};

const serializeAws_json1_1CreateServiceRequest = (
  input: CreateServiceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProviderStrategy !== undefined && {
      capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(
        input.capacityProviderStrategy,
        context
      )
    }),
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.deploymentConfiguration !== undefined && {
      deploymentConfiguration: serializeAws_json1_1DeploymentConfiguration(
        input.deploymentConfiguration,
        context
      )
    }),
    ...(input.deploymentController !== undefined && {
      deploymentController: serializeAws_json1_1DeploymentController(
        input.deploymentController,
        context
      )
    }),
    ...(input.desiredCount !== undefined && {
      desiredCount: input.desiredCount
    }),
    ...(input.enableECSManagedTags !== undefined && {
      enableECSManagedTags: input.enableECSManagedTags
    }),
    ...(input.healthCheckGracePeriodSeconds !== undefined && {
      healthCheckGracePeriodSeconds: input.healthCheckGracePeriodSeconds
    }),
    ...(input.launchType !== undefined && { launchType: input.launchType }),
    ...(input.loadBalancers !== undefined && {
      loadBalancers: serializeAws_json1_1LoadBalancers(
        input.loadBalancers,
        context
      )
    }),
    ...(input.networkConfiguration !== undefined && {
      networkConfiguration: serializeAws_json1_1NetworkConfiguration(
        input.networkConfiguration,
        context
      )
    }),
    ...(input.placementConstraints !== undefined && {
      placementConstraints: serializeAws_json1_1PlacementConstraints(
        input.placementConstraints,
        context
      )
    }),
    ...(input.placementStrategy !== undefined && {
      placementStrategy: serializeAws_json1_1PlacementStrategies(
        input.placementStrategy,
        context
      )
    }),
    ...(input.platformVersion !== undefined && {
      platformVersion: input.platformVersion
    }),
    ...(input.propagateTags !== undefined && {
      propagateTags: input.propagateTags
    }),
    ...(input.role !== undefined && { role: input.role }),
    ...(input.schedulingStrategy !== undefined && {
      schedulingStrategy: input.schedulingStrategy
    }),
    ...(input.serviceName !== undefined && { serviceName: input.serviceName }),
    ...(input.serviceRegistries !== undefined && {
      serviceRegistries: serializeAws_json1_1ServiceRegistries(
        input.serviceRegistries,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1Tags(input.tags, context)
    }),
    ...(input.taskDefinition !== undefined && {
      taskDefinition: input.taskDefinition
    })
  };
};

const serializeAws_json1_1CreateTaskSetRequest = (
  input: CreateTaskSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProviderStrategy !== undefined && {
      capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(
        input.capacityProviderStrategy,
        context
      )
    }),
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.externalId !== undefined && { externalId: input.externalId }),
    ...(input.launchType !== undefined && { launchType: input.launchType }),
    ...(input.loadBalancers !== undefined && {
      loadBalancers: serializeAws_json1_1LoadBalancers(
        input.loadBalancers,
        context
      )
    }),
    ...(input.networkConfiguration !== undefined && {
      networkConfiguration: serializeAws_json1_1NetworkConfiguration(
        input.networkConfiguration,
        context
      )
    }),
    ...(input.platformVersion !== undefined && {
      platformVersion: input.platformVersion
    }),
    ...(input.scale !== undefined && {
      scale: serializeAws_json1_1Scale(input.scale, context)
    }),
    ...(input.service !== undefined && { service: input.service }),
    ...(input.serviceRegistries !== undefined && {
      serviceRegistries: serializeAws_json1_1ServiceRegistries(
        input.serviceRegistries,
        context
      )
    }),
    ...(input.taskDefinition !== undefined && {
      taskDefinition: input.taskDefinition
    })
  };
};

const serializeAws_json1_1DeleteAccountSettingRequest = (
  input: DeleteAccountSettingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.principalArn !== undefined && {
      principalArn: input.principalArn
    })
  };
};

const serializeAws_json1_1DeleteAttributesRequest = (
  input: DeleteAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes !== undefined && {
      attributes: serializeAws_json1_1Attributes(input.attributes, context)
    }),
    ...(input.cluster !== undefined && { cluster: input.cluster })
  };
};

const serializeAws_json1_1DeleteClusterRequest = (
  input: DeleteClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster })
  };
};

const serializeAws_json1_1DeleteServiceRequest = (
  input: DeleteServiceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.force !== undefined && { force: input.force }),
    ...(input.service !== undefined && { service: input.service })
  };
};

const serializeAws_json1_1DeleteTaskSetRequest = (
  input: DeleteTaskSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.force !== undefined && { force: input.force }),
    ...(input.service !== undefined && { service: input.service }),
    ...(input.taskSet !== undefined && { taskSet: input.taskSet })
  };
};

const serializeAws_json1_1DeploymentConfiguration = (
  input: DeploymentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.maximumPercent !== undefined && {
      maximumPercent: input.maximumPercent
    }),
    ...(input.minimumHealthyPercent !== undefined && {
      minimumHealthyPercent: input.minimumHealthyPercent
    })
  };
};

const serializeAws_json1_1DeploymentController = (
  input: DeploymentController,
  context: __SerdeContext
): any => {
  return {
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1DeregisterContainerInstanceRequest = (
  input: DeregisterContainerInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.containerInstance !== undefined && {
      containerInstance: input.containerInstance
    }),
    ...(input.force !== undefined && { force: input.force })
  };
};

const serializeAws_json1_1DeregisterTaskDefinitionRequest = (
  input: DeregisterTaskDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.taskDefinition !== undefined && {
      taskDefinition: input.taskDefinition
    })
  };
};

const serializeAws_json1_1DescribeCapacityProvidersRequest = (
  input: DescribeCapacityProvidersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProviders !== undefined && {
      capacityProviders: serializeAws_json1_1StringList(
        input.capacityProviders,
        context
      )
    }),
    ...(input.include !== undefined && {
      include: serializeAws_json1_1CapacityProviderFieldList(
        input.include,
        context
      )
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeClustersRequest = (
  input: DescribeClustersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.clusters !== undefined && {
      clusters: serializeAws_json1_1StringList(input.clusters, context)
    }),
    ...(input.include !== undefined && {
      include: serializeAws_json1_1ClusterFieldList(input.include, context)
    })
  };
};

const serializeAws_json1_1DescribeContainerInstancesRequest = (
  input: DescribeContainerInstancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.containerInstances !== undefined && {
      containerInstances: serializeAws_json1_1StringList(
        input.containerInstances,
        context
      )
    }),
    ...(input.include !== undefined && {
      include: serializeAws_json1_1ContainerInstanceFieldList(
        input.include,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeServicesRequest = (
  input: DescribeServicesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.include !== undefined && {
      include: serializeAws_json1_1ServiceFieldList(input.include, context)
    }),
    ...(input.services !== undefined && {
      services: serializeAws_json1_1StringList(input.services, context)
    })
  };
};

const serializeAws_json1_1DescribeTaskDefinitionRequest = (
  input: DescribeTaskDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.include !== undefined && {
      include: serializeAws_json1_1TaskDefinitionFieldList(
        input.include,
        context
      )
    }),
    ...(input.taskDefinition !== undefined && {
      taskDefinition: input.taskDefinition
    })
  };
};

const serializeAws_json1_1DescribeTaskSetsRequest = (
  input: DescribeTaskSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.service !== undefined && { service: input.service }),
    ...(input.taskSets !== undefined && {
      taskSets: serializeAws_json1_1StringList(input.taskSets, context)
    })
  };
};

const serializeAws_json1_1DescribeTasksRequest = (
  input: DescribeTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.include !== undefined && {
      include: serializeAws_json1_1TaskFieldList(input.include, context)
    }),
    ...(input.tasks !== undefined && {
      tasks: serializeAws_json1_1StringList(input.tasks, context)
    })
  };
};

const serializeAws_json1_1Device = (
  input: Device,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerPath !== undefined && {
      containerPath: input.containerPath
    }),
    ...(input.hostPath !== undefined && { hostPath: input.hostPath }),
    ...(input.permissions !== undefined && {
      permissions: serializeAws_json1_1DeviceCgroupPermissions(
        input.permissions,
        context
      )
    })
  };
};

const serializeAws_json1_1DeviceCgroupPermissions = (
  input: (DeviceCgroupPermission | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1DevicesList = (
  input: Device[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Device(entry, context));
};

const serializeAws_json1_1DiscoverPollEndpointRequest = (
  input: DiscoverPollEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.containerInstance !== undefined && {
      containerInstance: input.containerInstance
    })
  };
};

const serializeAws_json1_1DockerLabelsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1DockerVolumeConfiguration = (
  input: DockerVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.autoprovision !== undefined && {
      autoprovision: input.autoprovision
    }),
    ...(input.driver !== undefined && { driver: input.driver }),
    ...(input.driverOpts !== undefined && {
      driverOpts: serializeAws_json1_1StringMap(input.driverOpts, context)
    }),
    ...(input.labels !== undefined && {
      labels: serializeAws_json1_1StringMap(input.labels, context)
    }),
    ...(input.scope !== undefined && { scope: input.scope })
  };
};

const serializeAws_json1_1EFSVolumeConfiguration = (
  input: EFSVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.fileSystemId !== undefined && {
      fileSystemId: input.fileSystemId
    }),
    ...(input.rootDirectory !== undefined && {
      rootDirectory: input.rootDirectory
    })
  };
};

const serializeAws_json1_1EnvironmentVariables = (
  input: KeyValuePair[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1KeyValuePair(entry, context));
};

const serializeAws_json1_1FirelensConfiguration = (
  input: FirelensConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.options !== undefined && {
      options: serializeAws_json1_1FirelensConfigurationOptionsMap(
        input.options,
        context
      )
    }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1FirelensConfigurationOptionsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1HealthCheck = (
  input: HealthCheck,
  context: __SerdeContext
): any => {
  return {
    ...(input.command !== undefined && {
      command: serializeAws_json1_1StringList(input.command, context)
    }),
    ...(input.interval !== undefined && { interval: input.interval }),
    ...(input.retries !== undefined && { retries: input.retries }),
    ...(input.startPeriod !== undefined && { startPeriod: input.startPeriod }),
    ...(input.timeout !== undefined && { timeout: input.timeout })
  };
};

const serializeAws_json1_1HostEntry = (
  input: HostEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.hostname !== undefined && { hostname: input.hostname }),
    ...(input.ipAddress !== undefined && { ipAddress: input.ipAddress })
  };
};

const serializeAws_json1_1HostEntryList = (
  input: HostEntry[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1HostEntry(entry, context));
};

const serializeAws_json1_1HostVolumeProperties = (
  input: HostVolumeProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.sourcePath !== undefined && { sourcePath: input.sourcePath })
  };
};

const serializeAws_json1_1InferenceAccelerator = (
  input: InferenceAccelerator,
  context: __SerdeContext
): any => {
  return {
    ...(input.deviceName !== undefined && { deviceName: input.deviceName }),
    ...(input.deviceType !== undefined && { deviceType: input.deviceType })
  };
};

const serializeAws_json1_1InferenceAcceleratorOverride = (
  input: InferenceAcceleratorOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.deviceName !== undefined && { deviceName: input.deviceName }),
    ...(input.deviceType !== undefined && { deviceType: input.deviceType })
  };
};

const serializeAws_json1_1InferenceAcceleratorOverrides = (
  input: InferenceAcceleratorOverride[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1InferenceAcceleratorOverride(entry, context)
  );
};

const serializeAws_json1_1InferenceAccelerators = (
  input: InferenceAccelerator[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1InferenceAccelerator(entry, context)
  );
};

const serializeAws_json1_1KernelCapabilities = (
  input: KernelCapabilities,
  context: __SerdeContext
): any => {
  return {
    ...(input.add !== undefined && {
      add: serializeAws_json1_1StringList(input.add, context)
    }),
    ...(input.drop !== undefined && {
      drop: serializeAws_json1_1StringList(input.drop, context)
    })
  };
};

const serializeAws_json1_1KeyValuePair = (
  input: KeyValuePair,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1LinuxParameters = (
  input: LinuxParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.capabilities !== undefined && {
      capabilities: serializeAws_json1_1KernelCapabilities(
        input.capabilities,
        context
      )
    }),
    ...(input.devices !== undefined && {
      devices: serializeAws_json1_1DevicesList(input.devices, context)
    }),
    ...(input.initProcessEnabled !== undefined && {
      initProcessEnabled: input.initProcessEnabled
    }),
    ...(input.maxSwap !== undefined && { maxSwap: input.maxSwap }),
    ...(input.sharedMemorySize !== undefined && {
      sharedMemorySize: input.sharedMemorySize
    }),
    ...(input.swappiness !== undefined && { swappiness: input.swappiness }),
    ...(input.tmpfs !== undefined && {
      tmpfs: serializeAws_json1_1TmpfsList(input.tmpfs, context)
    })
  };
};

const serializeAws_json1_1ListAccountSettingsRequest = (
  input: ListAccountSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.effectiveSettings !== undefined && {
      effectiveSettings: input.effectiveSettings
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.principalArn !== undefined && {
      principalArn: input.principalArn
    }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1ListAttributesRequest = (
  input: ListAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeName !== undefined && {
      attributeName: input.attributeName
    }),
    ...(input.attributeValue !== undefined && {
      attributeValue: input.attributeValue
    }),
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.targetType !== undefined && { targetType: input.targetType })
  };
};

const serializeAws_json1_1ListClustersRequest = (
  input: ListClustersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListContainerInstancesRequest = (
  input: ListContainerInstancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.filter !== undefined && { filter: input.filter }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1ListServicesRequest = (
  input: ListServicesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.launchType !== undefined && { launchType: input.launchType }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.schedulingStrategy !== undefined && {
      schedulingStrategy: input.schedulingStrategy
    })
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
};

const serializeAws_json1_1ListTaskDefinitionFamiliesRequest = (
  input: ListTaskDefinitionFamiliesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.familyPrefix !== undefined && {
      familyPrefix: input.familyPrefix
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1ListTaskDefinitionsRequest = (
  input: ListTaskDefinitionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.familyPrefix !== undefined && {
      familyPrefix: input.familyPrefix
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.sort !== undefined && { sort: input.sort }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1ListTasksRequest = (
  input: ListTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.containerInstance !== undefined && {
      containerInstance: input.containerInstance
    }),
    ...(input.desiredStatus !== undefined && {
      desiredStatus: input.desiredStatus
    }),
    ...(input.family !== undefined && { family: input.family }),
    ...(input.launchType !== undefined && { launchType: input.launchType }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.serviceName !== undefined && { serviceName: input.serviceName }),
    ...(input.startedBy !== undefined && { startedBy: input.startedBy })
  };
};

const serializeAws_json1_1LoadBalancer = (
  input: LoadBalancer,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerName !== undefined && {
      containerName: input.containerName
    }),
    ...(input.containerPort !== undefined && {
      containerPort: input.containerPort
    }),
    ...(input.loadBalancerName !== undefined && {
      loadBalancerName: input.loadBalancerName
    }),
    ...(input.targetGroupArn !== undefined && {
      targetGroupArn: input.targetGroupArn
    })
  };
};

const serializeAws_json1_1LoadBalancers = (
  input: LoadBalancer[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1LoadBalancer(entry, context));
};

const serializeAws_json1_1LogConfiguration = (
  input: LogConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.logDriver !== undefined && { logDriver: input.logDriver }),
    ...(input.options !== undefined && {
      options: serializeAws_json1_1LogConfigurationOptionsMap(
        input.options,
        context
      )
    }),
    ...(input.secretOptions !== undefined && {
      secretOptions: serializeAws_json1_1SecretList(
        input.secretOptions,
        context
      )
    })
  };
};

const serializeAws_json1_1LogConfigurationOptionsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1ManagedScaling = (
  input: ManagedScaling,
  context: __SerdeContext
): any => {
  return {
    ...(input.maximumScalingStepSize !== undefined && {
      maximumScalingStepSize: input.maximumScalingStepSize
    }),
    ...(input.minimumScalingStepSize !== undefined && {
      minimumScalingStepSize: input.minimumScalingStepSize
    }),
    ...(input.status !== undefined && { status: input.status }),
    ...(input.targetCapacity !== undefined && {
      targetCapacity: input.targetCapacity
    })
  };
};

const serializeAws_json1_1MountPoint = (
  input: MountPoint,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerPath !== undefined && {
      containerPath: input.containerPath
    }),
    ...(input.readOnly !== undefined && { readOnly: input.readOnly }),
    ...(input.sourceVolume !== undefined && {
      sourceVolume: input.sourceVolume
    })
  };
};

const serializeAws_json1_1MountPointList = (
  input: MountPoint[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1MountPoint(entry, context));
};

const serializeAws_json1_1NetworkBinding = (
  input: NetworkBinding,
  context: __SerdeContext
): any => {
  return {
    ...(input.bindIP !== undefined && { bindIP: input.bindIP }),
    ...(input.containerPort !== undefined && {
      containerPort: input.containerPort
    }),
    ...(input.hostPort !== undefined && { hostPort: input.hostPort }),
    ...(input.protocol !== undefined && { protocol: input.protocol })
  };
};

const serializeAws_json1_1NetworkBindings = (
  input: NetworkBinding[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1NetworkBinding(entry, context));
};

const serializeAws_json1_1NetworkConfiguration = (
  input: NetworkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.awsvpcConfiguration !== undefined && {
      awsvpcConfiguration: serializeAws_json1_1AwsVpcConfiguration(
        input.awsvpcConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1PlacementConstraint = (
  input: PlacementConstraint,
  context: __SerdeContext
): any => {
  return {
    ...(input.expression !== undefined && { expression: input.expression }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1PlacementConstraints = (
  input: PlacementConstraint[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1PlacementConstraint(entry, context)
  );
};

const serializeAws_json1_1PlacementStrategies = (
  input: PlacementStrategy[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1PlacementStrategy(entry, context)
  );
};

const serializeAws_json1_1PlacementStrategy = (
  input: PlacementStrategy,
  context: __SerdeContext
): any => {
  return {
    ...(input.field !== undefined && { field: input.field }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1PlatformDevice = (
  input: PlatformDevice,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && { id: input.id }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1PlatformDevices = (
  input: PlatformDevice[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1PlatformDevice(entry, context));
};

const serializeAws_json1_1PortMapping = (
  input: PortMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerPort !== undefined && {
      containerPort: input.containerPort
    }),
    ...(input.hostPort !== undefined && { hostPort: input.hostPort }),
    ...(input.protocol !== undefined && { protocol: input.protocol })
  };
};

const serializeAws_json1_1PortMappingList = (
  input: PortMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1PortMapping(entry, context));
};

const serializeAws_json1_1ProxyConfiguration = (
  input: ProxyConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerName !== undefined && {
      containerName: input.containerName
    }),
    ...(input.properties !== undefined && {
      properties: serializeAws_json1_1ProxyConfigurationProperties(
        input.properties,
        context
      )
    }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1ProxyConfigurationProperties = (
  input: KeyValuePair[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1KeyValuePair(entry, context));
};

const serializeAws_json1_1PutAccountSettingDefaultRequest = (
  input: PutAccountSettingDefaultRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1PutAccountSettingRequest = (
  input: PutAccountSettingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.principalArn !== undefined && {
      principalArn: input.principalArn
    }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1PutAttributesRequest = (
  input: PutAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes !== undefined && {
      attributes: serializeAws_json1_1Attributes(input.attributes, context)
    }),
    ...(input.cluster !== undefined && { cluster: input.cluster })
  };
};

const serializeAws_json1_1PutClusterCapacityProvidersRequest = (
  input: PutClusterCapacityProvidersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProviders !== undefined && {
      capacityProviders: serializeAws_json1_1StringList(
        input.capacityProviders,
        context
      )
    }),
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.defaultCapacityProviderStrategy !== undefined && {
      defaultCapacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(
        input.defaultCapacityProviderStrategy,
        context
      )
    })
  };
};

const serializeAws_json1_1RegisterContainerInstanceRequest = (
  input: RegisterContainerInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes !== undefined && {
      attributes: serializeAws_json1_1Attributes(input.attributes, context)
    }),
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.containerInstanceArn !== undefined && {
      containerInstanceArn: input.containerInstanceArn
    }),
    ...(input.instanceIdentityDocument !== undefined && {
      instanceIdentityDocument: input.instanceIdentityDocument
    }),
    ...(input.instanceIdentityDocumentSignature !== undefined && {
      instanceIdentityDocumentSignature: input.instanceIdentityDocumentSignature
    }),
    ...(input.platformDevices !== undefined && {
      platformDevices: serializeAws_json1_1PlatformDevices(
        input.platformDevices,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1Tags(input.tags, context)
    }),
    ...(input.totalResources !== undefined && {
      totalResources: serializeAws_json1_1Resources(
        input.totalResources,
        context
      )
    }),
    ...(input.versionInfo !== undefined && {
      versionInfo: serializeAws_json1_1VersionInfo(input.versionInfo, context)
    })
  };
};

const serializeAws_json1_1RegisterTaskDefinitionRequest = (
  input: RegisterTaskDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerDefinitions !== undefined && {
      containerDefinitions: serializeAws_json1_1ContainerDefinitions(
        input.containerDefinitions,
        context
      )
    }),
    ...(input.cpu !== undefined && { cpu: input.cpu }),
    ...(input.executionRoleArn !== undefined && {
      executionRoleArn: input.executionRoleArn
    }),
    ...(input.family !== undefined && { family: input.family }),
    ...(input.inferenceAccelerators !== undefined && {
      inferenceAccelerators: serializeAws_json1_1InferenceAccelerators(
        input.inferenceAccelerators,
        context
      )
    }),
    ...(input.ipcMode !== undefined && { ipcMode: input.ipcMode }),
    ...(input.memory !== undefined && { memory: input.memory }),
    ...(input.networkMode !== undefined && { networkMode: input.networkMode }),
    ...(input.pidMode !== undefined && { pidMode: input.pidMode }),
    ...(input.placementConstraints !== undefined && {
      placementConstraints: serializeAws_json1_1TaskDefinitionPlacementConstraints(
        input.placementConstraints,
        context
      )
    }),
    ...(input.proxyConfiguration !== undefined && {
      proxyConfiguration: serializeAws_json1_1ProxyConfiguration(
        input.proxyConfiguration,
        context
      )
    }),
    ...(input.requiresCompatibilities !== undefined && {
      requiresCompatibilities: serializeAws_json1_1CompatibilityList(
        input.requiresCompatibilities,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1Tags(input.tags, context)
    }),
    ...(input.taskRoleArn !== undefined && { taskRoleArn: input.taskRoleArn }),
    ...(input.volumes !== undefined && {
      volumes: serializeAws_json1_1VolumeList(input.volumes, context)
    })
  };
};

const serializeAws_json1_1RepositoryCredentials = (
  input: RepositoryCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.credentialsParameter !== undefined && {
      credentialsParameter: input.credentialsParameter
    })
  };
};

const serializeAws_json1_1Resource = (
  input: Resource,
  context: __SerdeContext
): any => {
  return {
    ...(input.doubleValue !== undefined && { doubleValue: input.doubleValue }),
    ...(input.integerValue !== undefined && {
      integerValue: input.integerValue
    }),
    ...(input.longValue !== undefined && { longValue: input.longValue }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.stringSetValue !== undefined && {
      stringSetValue: serializeAws_json1_1StringList(
        input.stringSetValue,
        context
      )
    }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1ResourceRequirement = (
  input: ResourceRequirement,
  context: __SerdeContext
): any => {
  return {
    ...(input.type !== undefined && { type: input.type }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1ResourceRequirements = (
  input: ResourceRequirement[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ResourceRequirement(entry, context)
  );
};

const serializeAws_json1_1Resources = (
  input: Resource[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Resource(entry, context));
};

const serializeAws_json1_1RunTaskRequest = (
  input: RunTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProviderStrategy !== undefined && {
      capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(
        input.capacityProviderStrategy,
        context
      )
    }),
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.count !== undefined && { count: input.count }),
    ...(input.enableECSManagedTags !== undefined && {
      enableECSManagedTags: input.enableECSManagedTags
    }),
    ...(input.group !== undefined && { group: input.group }),
    ...(input.launchType !== undefined && { launchType: input.launchType }),
    ...(input.networkConfiguration !== undefined && {
      networkConfiguration: serializeAws_json1_1NetworkConfiguration(
        input.networkConfiguration,
        context
      )
    }),
    ...(input.overrides !== undefined && {
      overrides: serializeAws_json1_1TaskOverride(input.overrides, context)
    }),
    ...(input.placementConstraints !== undefined && {
      placementConstraints: serializeAws_json1_1PlacementConstraints(
        input.placementConstraints,
        context
      )
    }),
    ...(input.placementStrategy !== undefined && {
      placementStrategy: serializeAws_json1_1PlacementStrategies(
        input.placementStrategy,
        context
      )
    }),
    ...(input.platformVersion !== undefined && {
      platformVersion: input.platformVersion
    }),
    ...(input.propagateTags !== undefined && {
      propagateTags: input.propagateTags
    }),
    ...(input.referenceId !== undefined && { referenceId: input.referenceId }),
    ...(input.startedBy !== undefined && { startedBy: input.startedBy }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1Tags(input.tags, context)
    }),
    ...(input.taskDefinition !== undefined && {
      taskDefinition: input.taskDefinition
    })
  };
};

const serializeAws_json1_1Scale = (
  input: Scale,
  context: __SerdeContext
): any => {
  return {
    ...(input.unit !== undefined && { unit: input.unit }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1Secret = (
  input: Secret,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.valueFrom !== undefined && { valueFrom: input.valueFrom })
  };
};

const serializeAws_json1_1SecretList = (
  input: Secret[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Secret(entry, context));
};

const serializeAws_json1_1ServiceFieldList = (
  input: (ServiceField | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ServiceRegistries = (
  input: ServiceRegistry[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ServiceRegistry(entry, context)
  );
};

const serializeAws_json1_1ServiceRegistry = (
  input: ServiceRegistry,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerName !== undefined && {
      containerName: input.containerName
    }),
    ...(input.containerPort !== undefined && {
      containerPort: input.containerPort
    }),
    ...(input.port !== undefined && { port: input.port }),
    ...(input.registryArn !== undefined && { registryArn: input.registryArn })
  };
};

const serializeAws_json1_1StartTaskRequest = (
  input: StartTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.containerInstances !== undefined && {
      containerInstances: serializeAws_json1_1StringList(
        input.containerInstances,
        context
      )
    }),
    ...(input.enableECSManagedTags !== undefined && {
      enableECSManagedTags: input.enableECSManagedTags
    }),
    ...(input.group !== undefined && { group: input.group }),
    ...(input.networkConfiguration !== undefined && {
      networkConfiguration: serializeAws_json1_1NetworkConfiguration(
        input.networkConfiguration,
        context
      )
    }),
    ...(input.overrides !== undefined && {
      overrides: serializeAws_json1_1TaskOverride(input.overrides, context)
    }),
    ...(input.propagateTags !== undefined && {
      propagateTags: input.propagateTags
    }),
    ...(input.referenceId !== undefined && { referenceId: input.referenceId }),
    ...(input.startedBy !== undefined && { startedBy: input.startedBy }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1Tags(input.tags, context)
    }),
    ...(input.taskDefinition !== undefined && {
      taskDefinition: input.taskDefinition
    })
  };
};

const serializeAws_json1_1StopTaskRequest = (
  input: StopTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.reason !== undefined && { reason: input.reason }),
    ...(input.task !== undefined && { task: input.task })
  };
};

const serializeAws_json1_1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1StringMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1SubmitAttachmentStateChangesRequest = (
  input: SubmitAttachmentStateChangesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attachments !== undefined && {
      attachments: serializeAws_json1_1AttachmentStateChanges(
        input.attachments,
        context
      )
    }),
    ...(input.cluster !== undefined && { cluster: input.cluster })
  };
};

const serializeAws_json1_1SubmitContainerStateChangeRequest = (
  input: SubmitContainerStateChangeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.containerName !== undefined && {
      containerName: input.containerName
    }),
    ...(input.exitCode !== undefined && { exitCode: input.exitCode }),
    ...(input.networkBindings !== undefined && {
      networkBindings: serializeAws_json1_1NetworkBindings(
        input.networkBindings,
        context
      )
    }),
    ...(input.reason !== undefined && { reason: input.reason }),
    ...(input.runtimeId !== undefined && { runtimeId: input.runtimeId }),
    ...(input.status !== undefined && { status: input.status }),
    ...(input.task !== undefined && { task: input.task })
  };
};

const serializeAws_json1_1SubmitTaskStateChangeRequest = (
  input: SubmitTaskStateChangeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attachments !== undefined && {
      attachments: serializeAws_json1_1AttachmentStateChanges(
        input.attachments,
        context
      )
    }),
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.containers !== undefined && {
      containers: serializeAws_json1_1ContainerStateChanges(
        input.containers,
        context
      )
    }),
    ...(input.executionStoppedAt !== undefined && {
      executionStoppedAt: Math.round(input.executionStoppedAt.getTime() / 1000)
    }),
    ...(input.pullStartedAt !== undefined && {
      pullStartedAt: Math.round(input.pullStartedAt.getTime() / 1000)
    }),
    ...(input.pullStoppedAt !== undefined && {
      pullStoppedAt: Math.round(input.pullStoppedAt.getTime() / 1000)
    }),
    ...(input.reason !== undefined && { reason: input.reason }),
    ...(input.status !== undefined && { status: input.status }),
    ...(input.task !== undefined && { task: input.task })
  };
};

const serializeAws_json1_1SystemControl = (
  input: SystemControl,
  context: __SerdeContext
): any => {
  return {
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1SystemControls = (
  input: SystemControl[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1SystemControl(entry, context));
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1TagKeys = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1Tags(input.tags, context)
    })
  };
};

const serializeAws_json1_1Tags = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TaskDefinitionFieldList = (
  input: (TaskDefinitionField | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TaskDefinitionPlacementConstraint = (
  input: TaskDefinitionPlacementConstraint,
  context: __SerdeContext
): any => {
  return {
    ...(input.expression !== undefined && { expression: input.expression }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1TaskDefinitionPlacementConstraints = (
  input: TaskDefinitionPlacementConstraint[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context)
  );
};

const serializeAws_json1_1TaskFieldList = (
  input: (TaskField | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TaskOverride = (
  input: TaskOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerOverrides !== undefined && {
      containerOverrides: serializeAws_json1_1ContainerOverrides(
        input.containerOverrides,
        context
      )
    }),
    ...(input.cpu !== undefined && { cpu: input.cpu }),
    ...(input.executionRoleArn !== undefined && {
      executionRoleArn: input.executionRoleArn
    }),
    ...(input.inferenceAcceleratorOverrides !== undefined && {
      inferenceAcceleratorOverrides: serializeAws_json1_1InferenceAcceleratorOverrides(
        input.inferenceAcceleratorOverrides,
        context
      )
    }),
    ...(input.memory !== undefined && { memory: input.memory }),
    ...(input.taskRoleArn !== undefined && { taskRoleArn: input.taskRoleArn })
  };
};

const serializeAws_json1_1Tmpfs = (
  input: Tmpfs,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerPath !== undefined && {
      containerPath: input.containerPath
    }),
    ...(input.mountOptions !== undefined && {
      mountOptions: serializeAws_json1_1StringList(input.mountOptions, context)
    }),
    ...(input.size !== undefined && { size: input.size })
  };
};

const serializeAws_json1_1TmpfsList = (
  input: Tmpfs[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tmpfs(entry, context));
};

const serializeAws_json1_1Ulimit = (
  input: Ulimit,
  context: __SerdeContext
): any => {
  return {
    ...(input.hardLimit !== undefined && { hardLimit: input.hardLimit }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.softLimit !== undefined && { softLimit: input.softLimit })
  };
};

const serializeAws_json1_1UlimitList = (
  input: Ulimit[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Ulimit(entry, context));
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined && {
      tagKeys: serializeAws_json1_1TagKeys(input.tagKeys, context)
    })
  };
};

const serializeAws_json1_1UpdateClusterSettingsRequest = (
  input: UpdateClusterSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.settings !== undefined && {
      settings: serializeAws_json1_1ClusterSettings(input.settings, context)
    })
  };
};

const serializeAws_json1_1UpdateContainerAgentRequest = (
  input: UpdateContainerAgentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.containerInstance !== undefined && {
      containerInstance: input.containerInstance
    })
  };
};

const serializeAws_json1_1UpdateContainerInstancesStateRequest = (
  input: UpdateContainerInstancesStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.containerInstances !== undefined && {
      containerInstances: serializeAws_json1_1StringList(
        input.containerInstances,
        context
      )
    }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1UpdateServicePrimaryTaskSetRequest = (
  input: UpdateServicePrimaryTaskSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.primaryTaskSet !== undefined && {
      primaryTaskSet: input.primaryTaskSet
    }),
    ...(input.service !== undefined && { service: input.service })
  };
};

const serializeAws_json1_1UpdateServiceRequest = (
  input: UpdateServiceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityProviderStrategy !== undefined && {
      capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(
        input.capacityProviderStrategy,
        context
      )
    }),
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.deploymentConfiguration !== undefined && {
      deploymentConfiguration: serializeAws_json1_1DeploymentConfiguration(
        input.deploymentConfiguration,
        context
      )
    }),
    ...(input.desiredCount !== undefined && {
      desiredCount: input.desiredCount
    }),
    ...(input.forceNewDeployment !== undefined && {
      forceNewDeployment: input.forceNewDeployment
    }),
    ...(input.healthCheckGracePeriodSeconds !== undefined && {
      healthCheckGracePeriodSeconds: input.healthCheckGracePeriodSeconds
    }),
    ...(input.networkConfiguration !== undefined && {
      networkConfiguration: serializeAws_json1_1NetworkConfiguration(
        input.networkConfiguration,
        context
      )
    }),
    ...(input.platformVersion !== undefined && {
      platformVersion: input.platformVersion
    }),
    ...(input.service !== undefined && { service: input.service }),
    ...(input.taskDefinition !== undefined && {
      taskDefinition: input.taskDefinition
    })
  };
};

const serializeAws_json1_1UpdateTaskSetRequest = (
  input: UpdateTaskSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cluster !== undefined && { cluster: input.cluster }),
    ...(input.scale !== undefined && {
      scale: serializeAws_json1_1Scale(input.scale, context)
    }),
    ...(input.service !== undefined && { service: input.service }),
    ...(input.taskSet !== undefined && { taskSet: input.taskSet })
  };
};

const serializeAws_json1_1VersionInfo = (
  input: VersionInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.agentHash !== undefined && { agentHash: input.agentHash }),
    ...(input.agentVersion !== undefined && {
      agentVersion: input.agentVersion
    }),
    ...(input.dockerVersion !== undefined && {
      dockerVersion: input.dockerVersion
    })
  };
};

const serializeAws_json1_1Volume = (
  input: Volume,
  context: __SerdeContext
): any => {
  return {
    ...(input.dockerVolumeConfiguration !== undefined && {
      dockerVolumeConfiguration: serializeAws_json1_1DockerVolumeConfiguration(
        input.dockerVolumeConfiguration,
        context
      )
    }),
    ...(input.efsVolumeConfiguration !== undefined && {
      efsVolumeConfiguration: serializeAws_json1_1EFSVolumeConfiguration(
        input.efsVolumeConfiguration,
        context
      )
    }),
    ...(input.host !== undefined && {
      host: serializeAws_json1_1HostVolumeProperties(input.host, context)
    }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1VolumeFrom = (
  input: VolumeFrom,
  context: __SerdeContext
): any => {
  return {
    ...(input.readOnly !== undefined && { readOnly: input.readOnly }),
    ...(input.sourceContainer !== undefined && {
      sourceContainer: input.sourceContainer
    })
  };
};

const serializeAws_json1_1VolumeFromList = (
  input: VolumeFrom[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1VolumeFrom(entry, context));
};

const serializeAws_json1_1VolumeList = (
  input: Volume[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Volume(entry, context));
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Attachment = (
  output: any,
  context: __SerdeContext
): Attachment => {
  return {
    __type: "Attachment",
    details:
      output.details !== undefined && output.details !== null
        ? deserializeAws_json1_1AttachmentDetails(output.details, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1AttachmentDetails = (
  output: any,
  context: __SerdeContext
): KeyValuePair[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyValuePair(entry, context)
  );
};

const deserializeAws_json1_1Attachments = (
  output: any,
  context: __SerdeContext
): Attachment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attachment(entry, context)
  );
};

const deserializeAws_json1_1Attribute = (
  output: any,
  context: __SerdeContext
): Attribute => {
  return {
    __type: "Attribute",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    targetId:
      output.targetId !== undefined && output.targetId !== null
        ? output.targetId
        : undefined,
    targetType:
      output.targetType !== undefined && output.targetType !== null
        ? output.targetType
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1AttributeLimitExceededException = (
  output: any,
  context: __SerdeContext
): AttributeLimitExceededException => {
  return {
    __type: "AttributeLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Attributes = (
  output: any,
  context: __SerdeContext
): Attribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attribute(entry, context)
  );
};

const deserializeAws_json1_1AutoScalingGroupProvider = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupProvider => {
  return {
    __type: "AutoScalingGroupProvider",
    autoScalingGroupArn:
      output.autoScalingGroupArn !== undefined &&
      output.autoScalingGroupArn !== null
        ? output.autoScalingGroupArn
        : undefined,
    managedScaling:
      output.managedScaling !== undefined && output.managedScaling !== null
        ? deserializeAws_json1_1ManagedScaling(output.managedScaling, context)
        : undefined,
    managedTerminationProtection:
      output.managedTerminationProtection !== undefined &&
      output.managedTerminationProtection !== null
        ? output.managedTerminationProtection
        : undefined
  } as any;
};

const deserializeAws_json1_1AwsVpcConfiguration = (
  output: any,
  context: __SerdeContext
): AwsVpcConfiguration => {
  return {
    __type: "AwsVpcConfiguration",
    assignPublicIp:
      output.assignPublicIp !== undefined && output.assignPublicIp !== null
        ? output.assignPublicIp
        : undefined,
    securityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_json1_1StringList(output.securityGroups, context)
        : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_json1_1StringList(output.subnets, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1BlockedException = (
  output: any,
  context: __SerdeContext
): BlockedException => {
  return {
    __type: "BlockedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1CapacityProvider = (
  output: any,
  context: __SerdeContext
): CapacityProvider => {
  return {
    __type: "CapacityProvider",
    autoScalingGroupProvider:
      output.autoScalingGroupProvider !== undefined &&
      output.autoScalingGroupProvider !== null
        ? deserializeAws_json1_1AutoScalingGroupProvider(
            output.autoScalingGroupProvider,
            context
          )
        : undefined,
    capacityProviderArn:
      output.capacityProviderArn !== undefined &&
      output.capacityProviderArn !== null
        ? output.capacityProviderArn
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CapacityProviders = (
  output: any,
  context: __SerdeContext
): CapacityProvider[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CapacityProvider(entry, context)
  );
};

const deserializeAws_json1_1CapacityProviderStrategy = (
  output: any,
  context: __SerdeContext
): CapacityProviderStrategyItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CapacityProviderStrategyItem(entry, context)
  );
};

const deserializeAws_json1_1CapacityProviderStrategyItem = (
  output: any,
  context: __SerdeContext
): CapacityProviderStrategyItem => {
  return {
    __type: "CapacityProviderStrategyItem",
    base:
      output.base !== undefined && output.base !== null
        ? output.base
        : undefined,
    capacityProvider:
      output.capacityProvider !== undefined && output.capacityProvider !== null
        ? output.capacityProvider
        : undefined,
    weight:
      output.weight !== undefined && output.weight !== null
        ? output.weight
        : undefined
  } as any;
};

const deserializeAws_json1_1ClientException = (
  output: any,
  context: __SerdeContext
): ClientException => {
  return {
    __type: "ClientException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Cluster = (
  output: any,
  context: __SerdeContext
): Cluster => {
  return {
    __type: "Cluster",
    activeServicesCount:
      output.activeServicesCount !== undefined &&
      output.activeServicesCount !== null
        ? output.activeServicesCount
        : undefined,
    attachments:
      output.attachments !== undefined && output.attachments !== null
        ? deserializeAws_json1_1Attachments(output.attachments, context)
        : undefined,
    attachmentsStatus:
      output.attachmentsStatus !== undefined &&
      output.attachmentsStatus !== null
        ? output.attachmentsStatus
        : undefined,
    capacityProviders:
      output.capacityProviders !== undefined &&
      output.capacityProviders !== null
        ? deserializeAws_json1_1StringList(output.capacityProviders, context)
        : undefined,
    clusterArn:
      output.clusterArn !== undefined && output.clusterArn !== null
        ? output.clusterArn
        : undefined,
    clusterName:
      output.clusterName !== undefined && output.clusterName !== null
        ? output.clusterName
        : undefined,
    defaultCapacityProviderStrategy:
      output.defaultCapacityProviderStrategy !== undefined &&
      output.defaultCapacityProviderStrategy !== null
        ? deserializeAws_json1_1CapacityProviderStrategy(
            output.defaultCapacityProviderStrategy,
            context
          )
        : undefined,
    pendingTasksCount:
      output.pendingTasksCount !== undefined &&
      output.pendingTasksCount !== null
        ? output.pendingTasksCount
        : undefined,
    registeredContainerInstancesCount:
      output.registeredContainerInstancesCount !== undefined &&
      output.registeredContainerInstancesCount !== null
        ? output.registeredContainerInstancesCount
        : undefined,
    runningTasksCount:
      output.runningTasksCount !== undefined &&
      output.runningTasksCount !== null
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
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterContainsContainerInstancesException = (
  output: any,
  context: __SerdeContext
): ClusterContainsContainerInstancesException => {
  return {
    __type: "ClusterContainsContainerInstancesException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterContainsServicesException = (
  output: any,
  context: __SerdeContext
): ClusterContainsServicesException => {
  return {
    __type: "ClusterContainsServicesException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterContainsTasksException = (
  output: any,
  context: __SerdeContext
): ClusterContainsTasksException => {
  return {
    __type: "ClusterContainsTasksException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterNotFoundException = (
  output: any,
  context: __SerdeContext
): ClusterNotFoundException => {
  return {
    __type: "ClusterNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Clusters = (
  output: any,
  context: __SerdeContext
): Cluster[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Cluster(entry, context)
  );
};

const deserializeAws_json1_1ClusterSetting = (
  output: any,
  context: __SerdeContext
): ClusterSetting => {
  return {
    __type: "ClusterSetting",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterSettings = (
  output: any,
  context: __SerdeContext
): ClusterSetting[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ClusterSetting(entry, context)
  );
};

const deserializeAws_json1_1CompatibilityList = (
  output: any,
  context: __SerdeContext
): (Compatibility | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Container = (
  output: any,
  context: __SerdeContext
): Container => {
  return {
    __type: "Container",
    containerArn:
      output.containerArn !== undefined && output.containerArn !== null
        ? output.containerArn
        : undefined,
    cpu:
      output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    exitCode:
      output.exitCode !== undefined && output.exitCode !== null
        ? output.exitCode
        : undefined,
    gpuIds:
      output.gpuIds !== undefined && output.gpuIds !== null
        ? deserializeAws_json1_1GpuIds(output.gpuIds, context)
        : undefined,
    healthStatus:
      output.healthStatus !== undefined && output.healthStatus !== null
        ? output.healthStatus
        : undefined,
    image:
      output.image !== undefined && output.image !== null
        ? output.image
        : undefined,
    imageDigest:
      output.imageDigest !== undefined && output.imageDigest !== null
        ? output.imageDigest
        : undefined,
    lastStatus:
      output.lastStatus !== undefined && output.lastStatus !== null
        ? output.lastStatus
        : undefined,
    memory:
      output.memory !== undefined && output.memory !== null
        ? output.memory
        : undefined,
    memoryReservation:
      output.memoryReservation !== undefined &&
      output.memoryReservation !== null
        ? output.memoryReservation
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    networkBindings:
      output.networkBindings !== undefined && output.networkBindings !== null
        ? deserializeAws_json1_1NetworkBindings(output.networkBindings, context)
        : undefined,
    networkInterfaces:
      output.networkInterfaces !== undefined &&
      output.networkInterfaces !== null
        ? deserializeAws_json1_1NetworkInterfaces(
            output.networkInterfaces,
            context
          )
        : undefined,
    reason:
      output.reason !== undefined && output.reason !== null
        ? output.reason
        : undefined,
    runtimeId:
      output.runtimeId !== undefined && output.runtimeId !== null
        ? output.runtimeId
        : undefined,
    taskArn:
      output.taskArn !== undefined && output.taskArn !== null
        ? output.taskArn
        : undefined
  } as any;
};

const deserializeAws_json1_1ContainerDefinition = (
  output: any,
  context: __SerdeContext
): ContainerDefinition => {
  return {
    __type: "ContainerDefinition",
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_json1_1StringList(output.command, context)
        : undefined,
    cpu:
      output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    dependsOn:
      output.dependsOn !== undefined && output.dependsOn !== null
        ? deserializeAws_json1_1ContainerDependencies(output.dependsOn, context)
        : undefined,
    disableNetworking:
      output.disableNetworking !== undefined &&
      output.disableNetworking !== null
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
      output.dockerSecurityOptions !== undefined &&
      output.dockerSecurityOptions !== null
        ? deserializeAws_json1_1StringList(
            output.dockerSecurityOptions,
            context
          )
        : undefined,
    entryPoint:
      output.entryPoint !== undefined && output.entryPoint !== null
        ? deserializeAws_json1_1StringList(output.entryPoint, context)
        : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_json1_1EnvironmentVariables(
            output.environment,
            context
          )
        : undefined,
    essential:
      output.essential !== undefined && output.essential !== null
        ? output.essential
        : undefined,
    extraHosts:
      output.extraHosts !== undefined && output.extraHosts !== null
        ? deserializeAws_json1_1HostEntryList(output.extraHosts, context)
        : undefined,
    firelensConfiguration:
      output.firelensConfiguration !== undefined &&
      output.firelensConfiguration !== null
        ? deserializeAws_json1_1FirelensConfiguration(
            output.firelensConfiguration,
            context
          )
        : undefined,
    healthCheck:
      output.healthCheck !== undefined && output.healthCheck !== null
        ? deserializeAws_json1_1HealthCheck(output.healthCheck, context)
        : undefined,
    hostname:
      output.hostname !== undefined && output.hostname !== null
        ? output.hostname
        : undefined,
    image:
      output.image !== undefined && output.image !== null
        ? output.image
        : undefined,
    interactive:
      output.interactive !== undefined && output.interactive !== null
        ? output.interactive
        : undefined,
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
        ? deserializeAws_json1_1LogConfiguration(
            output.logConfiguration,
            context
          )
        : undefined,
    memory:
      output.memory !== undefined && output.memory !== null
        ? output.memory
        : undefined,
    memoryReservation:
      output.memoryReservation !== undefined &&
      output.memoryReservation !== null
        ? output.memoryReservation
        : undefined,
    mountPoints:
      output.mountPoints !== undefined && output.mountPoints !== null
        ? deserializeAws_json1_1MountPointList(output.mountPoints, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    portMappings:
      output.portMappings !== undefined && output.portMappings !== null
        ? deserializeAws_json1_1PortMappingList(output.portMappings, context)
        : undefined,
    privileged:
      output.privileged !== undefined && output.privileged !== null
        ? output.privileged
        : undefined,
    pseudoTerminal:
      output.pseudoTerminal !== undefined && output.pseudoTerminal !== null
        ? output.pseudoTerminal
        : undefined,
    readonlyRootFilesystem:
      output.readonlyRootFilesystem !== undefined &&
      output.readonlyRootFilesystem !== null
        ? output.readonlyRootFilesystem
        : undefined,
    repositoryCredentials:
      output.repositoryCredentials !== undefined &&
      output.repositoryCredentials !== null
        ? deserializeAws_json1_1RepositoryCredentials(
            output.repositoryCredentials,
            context
          )
        : undefined,
    resourceRequirements:
      output.resourceRequirements !== undefined &&
      output.resourceRequirements !== null
        ? deserializeAws_json1_1ResourceRequirements(
            output.resourceRequirements,
            context
          )
        : undefined,
    secrets:
      output.secrets !== undefined && output.secrets !== null
        ? deserializeAws_json1_1SecretList(output.secrets, context)
        : undefined,
    startTimeout:
      output.startTimeout !== undefined && output.startTimeout !== null
        ? output.startTimeout
        : undefined,
    stopTimeout:
      output.stopTimeout !== undefined && output.stopTimeout !== null
        ? output.stopTimeout
        : undefined,
    systemControls:
      output.systemControls !== undefined && output.systemControls !== null
        ? deserializeAws_json1_1SystemControls(output.systemControls, context)
        : undefined,
    ulimits:
      output.ulimits !== undefined && output.ulimits !== null
        ? deserializeAws_json1_1UlimitList(output.ulimits, context)
        : undefined,
    user:
      output.user !== undefined && output.user !== null
        ? output.user
        : undefined,
    volumesFrom:
      output.volumesFrom !== undefined && output.volumesFrom !== null
        ? deserializeAws_json1_1VolumeFromList(output.volumesFrom, context)
        : undefined,
    workingDirectory:
      output.workingDirectory !== undefined && output.workingDirectory !== null
        ? output.workingDirectory
        : undefined
  } as any;
};

const deserializeAws_json1_1ContainerDefinitions = (
  output: any,
  context: __SerdeContext
): ContainerDefinition[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContainerDefinition(entry, context)
  );
};

const deserializeAws_json1_1ContainerDependencies = (
  output: any,
  context: __SerdeContext
): ContainerDependency[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContainerDependency(entry, context)
  );
};

const deserializeAws_json1_1ContainerDependency = (
  output: any,
  context: __SerdeContext
): ContainerDependency => {
  return {
    __type: "ContainerDependency",
    condition:
      output.condition !== undefined && output.condition !== null
        ? output.condition
        : undefined,
    containerName:
      output.containerName !== undefined && output.containerName !== null
        ? output.containerName
        : undefined
  } as any;
};

const deserializeAws_json1_1ContainerInstance = (
  output: any,
  context: __SerdeContext
): ContainerInstance => {
  return {
    __type: "ContainerInstance",
    agentConnected:
      output.agentConnected !== undefined && output.agentConnected !== null
        ? output.agentConnected
        : undefined,
    agentUpdateStatus:
      output.agentUpdateStatus !== undefined &&
      output.agentUpdateStatus !== null
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
      output.capacityProviderName !== undefined &&
      output.capacityProviderName !== null
        ? output.capacityProviderName
        : undefined,
    containerInstanceArn:
      output.containerInstanceArn !== undefined &&
      output.containerInstanceArn !== null
        ? output.containerInstanceArn
        : undefined,
    ec2InstanceId:
      output.ec2InstanceId !== undefined && output.ec2InstanceId !== null
        ? output.ec2InstanceId
        : undefined,
    pendingTasksCount:
      output.pendingTasksCount !== undefined &&
      output.pendingTasksCount !== null
        ? output.pendingTasksCount
        : undefined,
    registeredAt:
      output.registeredAt !== undefined && output.registeredAt !== null
        ? new Date(Math.round(output.registeredAt * 1000))
        : undefined,
    registeredResources:
      output.registeredResources !== undefined &&
      output.registeredResources !== null
        ? deserializeAws_json1_1Resources(output.registeredResources, context)
        : undefined,
    remainingResources:
      output.remainingResources !== undefined &&
      output.remainingResources !== null
        ? deserializeAws_json1_1Resources(output.remainingResources, context)
        : undefined,
    runningTasksCount:
      output.runningTasksCount !== undefined &&
      output.runningTasksCount !== null
        ? output.runningTasksCount
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? output.statusReason
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1Tags(output.tags, context)
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined,
    versionInfo:
      output.versionInfo !== undefined && output.versionInfo !== null
        ? deserializeAws_json1_1VersionInfo(output.versionInfo, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ContainerInstances = (
  output: any,
  context: __SerdeContext
): ContainerInstance[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContainerInstance(entry, context)
  );
};

const deserializeAws_json1_1ContainerOverride = (
  output: any,
  context: __SerdeContext
): ContainerOverride => {
  return {
    __type: "ContainerOverride",
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_json1_1StringList(output.command, context)
        : undefined,
    cpu:
      output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_json1_1EnvironmentVariables(
            output.environment,
            context
          )
        : undefined,
    memory:
      output.memory !== undefined && output.memory !== null
        ? output.memory
        : undefined,
    memoryReservation:
      output.memoryReservation !== undefined &&
      output.memoryReservation !== null
        ? output.memoryReservation
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    resourceRequirements:
      output.resourceRequirements !== undefined &&
      output.resourceRequirements !== null
        ? deserializeAws_json1_1ResourceRequirements(
            output.resourceRequirements,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ContainerOverrides = (
  output: any,
  context: __SerdeContext
): ContainerOverride[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContainerOverride(entry, context)
  );
};

const deserializeAws_json1_1Containers = (
  output: any,
  context: __SerdeContext
): Container[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Container(entry, context)
  );
};

const deserializeAws_json1_1CreateCapacityProviderResponse = (
  output: any,
  context: __SerdeContext
): CreateCapacityProviderResponse => {
  return {
    __type: "CreateCapacityProviderResponse",
    capacityProvider:
      output.capacityProvider !== undefined && output.capacityProvider !== null
        ? deserializeAws_json1_1CapacityProvider(
            output.capacityProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateClusterResponse = (
  output: any,
  context: __SerdeContext
): CreateClusterResponse => {
  return {
    __type: "CreateClusterResponse",
    cluster:
      output.cluster !== undefined && output.cluster !== null
        ? deserializeAws_json1_1Cluster(output.cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateServiceResponse = (
  output: any,
  context: __SerdeContext
): CreateServiceResponse => {
  return {
    __type: "CreateServiceResponse",
    service:
      output.service !== undefined && output.service !== null
        ? deserializeAws_json1_1Service(output.service, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateTaskSetResponse = (
  output: any,
  context: __SerdeContext
): CreateTaskSetResponse => {
  return {
    __type: "CreateTaskSetResponse",
    taskSet:
      output.taskSet !== undefined && output.taskSet !== null
        ? deserializeAws_json1_1TaskSet(output.taskSet, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteAccountSettingResponse = (
  output: any,
  context: __SerdeContext
): DeleteAccountSettingResponse => {
  return {
    __type: "DeleteAccountSettingResponse",
    setting:
      output.setting !== undefined && output.setting !== null
        ? deserializeAws_json1_1Setting(output.setting, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteAttributesResponse = (
  output: any,
  context: __SerdeContext
): DeleteAttributesResponse => {
  return {
    __type: "DeleteAttributesResponse",
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1Attributes(output.attributes, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteClusterResponse = (
  output: any,
  context: __SerdeContext
): DeleteClusterResponse => {
  return {
    __type: "DeleteClusterResponse",
    cluster:
      output.cluster !== undefined && output.cluster !== null
        ? deserializeAws_json1_1Cluster(output.cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteServiceResponse = (
  output: any,
  context: __SerdeContext
): DeleteServiceResponse => {
  return {
    __type: "DeleteServiceResponse",
    service:
      output.service !== undefined && output.service !== null
        ? deserializeAws_json1_1Service(output.service, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteTaskSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteTaskSetResponse => {
  return {
    __type: "DeleteTaskSetResponse",
    taskSet:
      output.taskSet !== undefined && output.taskSet !== null
        ? deserializeAws_json1_1TaskSet(output.taskSet, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Deployment = (
  output: any,
  context: __SerdeContext
): Deployment => {
  return {
    __type: "Deployment",
    capacityProviderStrategy:
      output.capacityProviderStrategy !== undefined &&
      output.capacityProviderStrategy !== null
        ? deserializeAws_json1_1CapacityProviderStrategy(
            output.capacityProviderStrategy,
            context
          )
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    desiredCount:
      output.desiredCount !== undefined && output.desiredCount !== null
        ? output.desiredCount
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    launchType:
      output.launchType !== undefined && output.launchType !== null
        ? output.launchType
        : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined &&
      output.networkConfiguration !== null
        ? deserializeAws_json1_1NetworkConfiguration(
            output.networkConfiguration,
            context
          )
        : undefined,
    pendingCount:
      output.pendingCount !== undefined && output.pendingCount !== null
        ? output.pendingCount
        : undefined,
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null
        ? output.platformVersion
        : undefined,
    runningCount:
      output.runningCount !== undefined && output.runningCount !== null
        ? output.runningCount
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null
        ? output.taskDefinition
        : undefined,
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? new Date(Math.round(output.updatedAt * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentConfiguration = (
  output: any,
  context: __SerdeContext
): DeploymentConfiguration => {
  return {
    __type: "DeploymentConfiguration",
    maximumPercent:
      output.maximumPercent !== undefined && output.maximumPercent !== null
        ? output.maximumPercent
        : undefined,
    minimumHealthyPercent:
      output.minimumHealthyPercent !== undefined &&
      output.minimumHealthyPercent !== null
        ? output.minimumHealthyPercent
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentController = (
  output: any,
  context: __SerdeContext
): DeploymentController => {
  return {
    __type: "DeploymentController",
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1Deployments = (
  output: any,
  context: __SerdeContext
): Deployment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Deployment(entry, context)
  );
};

const deserializeAws_json1_1DeregisterContainerInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeregisterContainerInstanceResponse => {
  return {
    __type: "DeregisterContainerInstanceResponse",
    containerInstance:
      output.containerInstance !== undefined &&
      output.containerInstance !== null
        ? deserializeAws_json1_1ContainerInstance(
            output.containerInstance,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DeregisterTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeregisterTaskDefinitionResponse => {
  return {
    __type: "DeregisterTaskDefinitionResponse",
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null
        ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeCapacityProvidersResponse = (
  output: any,
  context: __SerdeContext
): DescribeCapacityProvidersResponse => {
  return {
    __type: "DescribeCapacityProvidersResponse",
    capacityProviders:
      output.capacityProviders !== undefined &&
      output.capacityProviders !== null
        ? deserializeAws_json1_1CapacityProviders(
            output.capacityProviders,
            context
          )
        : undefined,
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  return {
    __type: "DescribeClustersResponse",
    clusters:
      output.clusters !== undefined && output.clusters !== null
        ? deserializeAws_json1_1Clusters(output.clusters, context)
        : undefined,
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeContainerInstancesResponse = (
  output: any,
  context: __SerdeContext
): DescribeContainerInstancesResponse => {
  return {
    __type: "DescribeContainerInstancesResponse",
    containerInstances:
      output.containerInstances !== undefined &&
      output.containerInstances !== null
        ? deserializeAws_json1_1ContainerInstances(
            output.containerInstances,
            context
          )
        : undefined,
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeServicesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServicesResponse => {
  return {
    __type: "DescribeServicesResponse",
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    services:
      output.services !== undefined && output.services !== null
        ? deserializeAws_json1_1Services(output.services, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeTaskDefinitionResponse => {
  return {
    __type: "DescribeTaskDefinitionResponse",
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1Tags(output.tags, context)
        : undefined,
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null
        ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTaskSetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeTaskSetsResponse => {
  return {
    __type: "DescribeTaskSetsResponse",
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    taskSets:
      output.taskSets !== undefined && output.taskSets !== null
        ? deserializeAws_json1_1TaskSets(output.taskSets, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeTasksResponse => {
  return {
    __type: "DescribeTasksResponse",
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    tasks:
      output.tasks !== undefined && output.tasks !== null
        ? deserializeAws_json1_1Tasks(output.tasks, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Device = (
  output: any,
  context: __SerdeContext
): Device => {
  return {
    __type: "Device",
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null
        ? output.containerPath
        : undefined,
    hostPath:
      output.hostPath !== undefined && output.hostPath !== null
        ? output.hostPath
        : undefined,
    permissions:
      output.permissions !== undefined && output.permissions !== null
        ? deserializeAws_json1_1DeviceCgroupPermissions(
            output.permissions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DeviceCgroupPermissions = (
  output: any,
  context: __SerdeContext
): (DeviceCgroupPermission | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DevicesList = (
  output: any,
  context: __SerdeContext
): Device[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Device(entry, context)
  );
};

const deserializeAws_json1_1DiscoverPollEndpointResponse = (
  output: any,
  context: __SerdeContext
): DiscoverPollEndpointResponse => {
  return {
    __type: "DiscoverPollEndpointResponse",
    endpoint:
      output.endpoint !== undefined && output.endpoint !== null
        ? output.endpoint
        : undefined,
    telemetryEndpoint:
      output.telemetryEndpoint !== undefined &&
      output.telemetryEndpoint !== null
        ? output.telemetryEndpoint
        : undefined
  } as any;
};

const deserializeAws_json1_1DockerLabelsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1DockerVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): DockerVolumeConfiguration => {
  return {
    __type: "DockerVolumeConfiguration",
    autoprovision:
      output.autoprovision !== undefined && output.autoprovision !== null
        ? output.autoprovision
        : undefined,
    driver:
      output.driver !== undefined && output.driver !== null
        ? output.driver
        : undefined,
    driverOpts:
      output.driverOpts !== undefined && output.driverOpts !== null
        ? deserializeAws_json1_1StringMap(output.driverOpts, context)
        : undefined,
    labels:
      output.labels !== undefined && output.labels !== null
        ? deserializeAws_json1_1StringMap(output.labels, context)
        : undefined,
    scope:
      output.scope !== undefined && output.scope !== null
        ? output.scope
        : undefined
  } as any;
};

const deserializeAws_json1_1EFSVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): EFSVolumeConfiguration => {
  return {
    __type: "EFSVolumeConfiguration",
    fileSystemId:
      output.fileSystemId !== undefined && output.fileSystemId !== null
        ? output.fileSystemId
        : undefined,
    rootDirectory:
      output.rootDirectory !== undefined && output.rootDirectory !== null
        ? output.rootDirectory
        : undefined
  } as any;
};

const deserializeAws_json1_1EnvironmentVariables = (
  output: any,
  context: __SerdeContext
): KeyValuePair[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyValuePair(entry, context)
  );
};

const deserializeAws_json1_1Failure = (
  output: any,
  context: __SerdeContext
): Failure => {
  return {
    __type: "Failure",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    detail:
      output.detail !== undefined && output.detail !== null
        ? output.detail
        : undefined,
    reason:
      output.reason !== undefined && output.reason !== null
        ? output.reason
        : undefined
  } as any;
};

const deserializeAws_json1_1Failures = (
  output: any,
  context: __SerdeContext
): Failure[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Failure(entry, context)
  );
};

const deserializeAws_json1_1FirelensConfiguration = (
  output: any,
  context: __SerdeContext
): FirelensConfiguration => {
  return {
    __type: "FirelensConfiguration",
    options:
      output.options !== undefined && output.options !== null
        ? deserializeAws_json1_1FirelensConfigurationOptionsMap(
            output.options,
            context
          )
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1FirelensConfigurationOptionsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1GpuIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1HealthCheck = (
  output: any,
  context: __SerdeContext
): HealthCheck => {
  return {
    __type: "HealthCheck",
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_json1_1StringList(output.command, context)
        : undefined,
    interval:
      output.interval !== undefined && output.interval !== null
        ? output.interval
        : undefined,
    retries:
      output.retries !== undefined && output.retries !== null
        ? output.retries
        : undefined,
    startPeriod:
      output.startPeriod !== undefined && output.startPeriod !== null
        ? output.startPeriod
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? output.timeout
        : undefined
  } as any;
};

const deserializeAws_json1_1HostEntry = (
  output: any,
  context: __SerdeContext
): HostEntry => {
  return {
    __type: "HostEntry",
    hostname:
      output.hostname !== undefined && output.hostname !== null
        ? output.hostname
        : undefined,
    ipAddress:
      output.ipAddress !== undefined && output.ipAddress !== null
        ? output.ipAddress
        : undefined
  } as any;
};

const deserializeAws_json1_1HostEntryList = (
  output: any,
  context: __SerdeContext
): HostEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HostEntry(entry, context)
  );
};

const deserializeAws_json1_1HostVolumeProperties = (
  output: any,
  context: __SerdeContext
): HostVolumeProperties => {
  return {
    __type: "HostVolumeProperties",
    sourcePath:
      output.sourcePath !== undefined && output.sourcePath !== null
        ? output.sourcePath
        : undefined
  } as any;
};

const deserializeAws_json1_1InferenceAccelerator = (
  output: any,
  context: __SerdeContext
): InferenceAccelerator => {
  return {
    __type: "InferenceAccelerator",
    deviceName:
      output.deviceName !== undefined && output.deviceName !== null
        ? output.deviceName
        : undefined,
    deviceType:
      output.deviceType !== undefined && output.deviceType !== null
        ? output.deviceType
        : undefined
  } as any;
};

const deserializeAws_json1_1InferenceAcceleratorOverride = (
  output: any,
  context: __SerdeContext
): InferenceAcceleratorOverride => {
  return {
    __type: "InferenceAcceleratorOverride",
    deviceName:
      output.deviceName !== undefined && output.deviceName !== null
        ? output.deviceName
        : undefined,
    deviceType:
      output.deviceType !== undefined && output.deviceType !== null
        ? output.deviceType
        : undefined
  } as any;
};

const deserializeAws_json1_1InferenceAcceleratorOverrides = (
  output: any,
  context: __SerdeContext
): InferenceAcceleratorOverride[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InferenceAcceleratorOverride(entry, context)
  );
};

const deserializeAws_json1_1InferenceAccelerators = (
  output: any,
  context: __SerdeContext
): InferenceAccelerator[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InferenceAccelerator(entry, context)
  );
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1KernelCapabilities = (
  output: any,
  context: __SerdeContext
): KernelCapabilities => {
  return {
    __type: "KernelCapabilities",
    add:
      output.add !== undefined && output.add !== null
        ? deserializeAws_json1_1StringList(output.add, context)
        : undefined,
    drop:
      output.drop !== undefined && output.drop !== null
        ? deserializeAws_json1_1StringList(output.drop, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1KeyValuePair = (
  output: any,
  context: __SerdeContext
): KeyValuePair => {
  return {
    __type: "KeyValuePair",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1LinuxParameters = (
  output: any,
  context: __SerdeContext
): LinuxParameters => {
  return {
    __type: "LinuxParameters",
    capabilities:
      output.capabilities !== undefined && output.capabilities !== null
        ? deserializeAws_json1_1KernelCapabilities(output.capabilities, context)
        : undefined,
    devices:
      output.devices !== undefined && output.devices !== null
        ? deserializeAws_json1_1DevicesList(output.devices, context)
        : undefined,
    initProcessEnabled:
      output.initProcessEnabled !== undefined &&
      output.initProcessEnabled !== null
        ? output.initProcessEnabled
        : undefined,
    maxSwap:
      output.maxSwap !== undefined && output.maxSwap !== null
        ? output.maxSwap
        : undefined,
    sharedMemorySize:
      output.sharedMemorySize !== undefined && output.sharedMemorySize !== null
        ? output.sharedMemorySize
        : undefined,
    swappiness:
      output.swappiness !== undefined && output.swappiness !== null
        ? output.swappiness
        : undefined,
    tmpfs:
      output.tmpfs !== undefined && output.tmpfs !== null
        ? deserializeAws_json1_1TmpfsList(output.tmpfs, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAccountSettingsResponse = (
  output: any,
  context: __SerdeContext
): ListAccountSettingsResponse => {
  return {
    __type: "ListAccountSettingsResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_json1_1Settings(output.settings, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAttributesResponse = (
  output: any,
  context: __SerdeContext
): ListAttributesResponse => {
  return {
    __type: "ListAttributesResponse",
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1Attributes(output.attributes, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListClustersResponse = (
  output: any,
  context: __SerdeContext
): ListClustersResponse => {
  return {
    __type: "ListClustersResponse",
    clusterArns:
      output.clusterArns !== undefined && output.clusterArns !== null
        ? deserializeAws_json1_1StringList(output.clusterArns, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListContainerInstancesResponse = (
  output: any,
  context: __SerdeContext
): ListContainerInstancesResponse => {
  return {
    __type: "ListContainerInstancesResponse",
    containerInstanceArns:
      output.containerInstanceArns !== undefined &&
      output.containerInstanceArns !== null
        ? deserializeAws_json1_1StringList(
            output.containerInstanceArns,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListServicesResponse = (
  output: any,
  context: __SerdeContext
): ListServicesResponse => {
  return {
    __type: "ListServicesResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    serviceArns:
      output.serviceArns !== undefined && output.serviceArns !== null
        ? deserializeAws_json1_1StringList(output.serviceArns, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTaskDefinitionFamiliesResponse = (
  output: any,
  context: __SerdeContext
): ListTaskDefinitionFamiliesResponse => {
  return {
    __type: "ListTaskDefinitionFamiliesResponse",
    families:
      output.families !== undefined && output.families !== null
        ? deserializeAws_json1_1StringList(output.families, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTaskDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListTaskDefinitionsResponse => {
  return {
    __type: "ListTaskDefinitionsResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    taskDefinitionArns:
      output.taskDefinitionArns !== undefined &&
      output.taskDefinitionArns !== null
        ? deserializeAws_json1_1StringList(output.taskDefinitionArns, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTasksResponse = (
  output: any,
  context: __SerdeContext
): ListTasksResponse => {
  return {
    __type: "ListTasksResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    taskArns:
      output.taskArns !== undefined && output.taskArns !== null
        ? deserializeAws_json1_1StringList(output.taskArns, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1LoadBalancer = (
  output: any,
  context: __SerdeContext
): LoadBalancer => {
  return {
    __type: "LoadBalancer",
    containerName:
      output.containerName !== undefined && output.containerName !== null
        ? output.containerName
        : undefined,
    containerPort:
      output.containerPort !== undefined && output.containerPort !== null
        ? output.containerPort
        : undefined,
    loadBalancerName:
      output.loadBalancerName !== undefined && output.loadBalancerName !== null
        ? output.loadBalancerName
        : undefined,
    targetGroupArn:
      output.targetGroupArn !== undefined && output.targetGroupArn !== null
        ? output.targetGroupArn
        : undefined
  } as any;
};

const deserializeAws_json1_1LoadBalancers = (
  output: any,
  context: __SerdeContext
): LoadBalancer[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoadBalancer(entry, context)
  );
};

const deserializeAws_json1_1LogConfiguration = (
  output: any,
  context: __SerdeContext
): LogConfiguration => {
  return {
    __type: "LogConfiguration",
    logDriver:
      output.logDriver !== undefined && output.logDriver !== null
        ? output.logDriver
        : undefined,
    options:
      output.options !== undefined && output.options !== null
        ? deserializeAws_json1_1LogConfigurationOptionsMap(
            output.options,
            context
          )
        : undefined,
    secretOptions:
      output.secretOptions !== undefined && output.secretOptions !== null
        ? deserializeAws_json1_1SecretList(output.secretOptions, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1LogConfigurationOptionsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1ManagedScaling = (
  output: any,
  context: __SerdeContext
): ManagedScaling => {
  return {
    __type: "ManagedScaling",
    maximumScalingStepSize:
      output.maximumScalingStepSize !== undefined &&
      output.maximumScalingStepSize !== null
        ? output.maximumScalingStepSize
        : undefined,
    minimumScalingStepSize:
      output.minimumScalingStepSize !== undefined &&
      output.minimumScalingStepSize !== null
        ? output.minimumScalingStepSize
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    targetCapacity:
      output.targetCapacity !== undefined && output.targetCapacity !== null
        ? output.targetCapacity
        : undefined
  } as any;
};

const deserializeAws_json1_1MissingVersionException = (
  output: any,
  context: __SerdeContext
): MissingVersionException => {
  return {
    __type: "MissingVersionException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1MountPoint = (
  output: any,
  context: __SerdeContext
): MountPoint => {
  return {
    __type: "MountPoint",
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null
        ? output.containerPath
        : undefined,
    readOnly:
      output.readOnly !== undefined && output.readOnly !== null
        ? output.readOnly
        : undefined,
    sourceVolume:
      output.sourceVolume !== undefined && output.sourceVolume !== null
        ? output.sourceVolume
        : undefined
  } as any;
};

const deserializeAws_json1_1MountPointList = (
  output: any,
  context: __SerdeContext
): MountPoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MountPoint(entry, context)
  );
};

const deserializeAws_json1_1NetworkBinding = (
  output: any,
  context: __SerdeContext
): NetworkBinding => {
  return {
    __type: "NetworkBinding",
    bindIP:
      output.bindIP !== undefined && output.bindIP !== null
        ? output.bindIP
        : undefined,
    containerPort:
      output.containerPort !== undefined && output.containerPort !== null
        ? output.containerPort
        : undefined,
    hostPort:
      output.hostPort !== undefined && output.hostPort !== null
        ? output.hostPort
        : undefined,
    protocol:
      output.protocol !== undefined && output.protocol !== null
        ? output.protocol
        : undefined
  } as any;
};

const deserializeAws_json1_1NetworkBindings = (
  output: any,
  context: __SerdeContext
): NetworkBinding[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NetworkBinding(entry, context)
  );
};

const deserializeAws_json1_1NetworkConfiguration = (
  output: any,
  context: __SerdeContext
): NetworkConfiguration => {
  return {
    __type: "NetworkConfiguration",
    awsvpcConfiguration:
      output.awsvpcConfiguration !== undefined &&
      output.awsvpcConfiguration !== null
        ? deserializeAws_json1_1AwsVpcConfiguration(
            output.awsvpcConfiguration,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  return {
    __type: "NetworkInterface",
    attachmentId:
      output.attachmentId !== undefined && output.attachmentId !== null
        ? output.attachmentId
        : undefined,
    ipv6Address:
      output.ipv6Address !== undefined && output.ipv6Address !== null
        ? output.ipv6Address
        : undefined,
    privateIpv4Address:
      output.privateIpv4Address !== undefined &&
      output.privateIpv4Address !== null
        ? output.privateIpv4Address
        : undefined
  } as any;
};

const deserializeAws_json1_1NetworkInterfaces = (
  output: any,
  context: __SerdeContext
): NetworkInterface[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NetworkInterface(entry, context)
  );
};

const deserializeAws_json1_1NoUpdateAvailableException = (
  output: any,
  context: __SerdeContext
): NoUpdateAvailableException => {
  return {
    __type: "NoUpdateAvailableException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PlacementConstraint = (
  output: any,
  context: __SerdeContext
): PlacementConstraint => {
  return {
    __type: "PlacementConstraint",
    expression:
      output.expression !== undefined && output.expression !== null
        ? output.expression
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1PlacementConstraints = (
  output: any,
  context: __SerdeContext
): PlacementConstraint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PlacementConstraint(entry, context)
  );
};

const deserializeAws_json1_1PlacementStrategies = (
  output: any,
  context: __SerdeContext
): PlacementStrategy[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PlacementStrategy(entry, context)
  );
};

const deserializeAws_json1_1PlacementStrategy = (
  output: any,
  context: __SerdeContext
): PlacementStrategy => {
  return {
    __type: "PlacementStrategy",
    field:
      output.field !== undefined && output.field !== null
        ? output.field
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException = (
  output: any,
  context: __SerdeContext
): PlatformTaskDefinitionIncompatibilityException => {
  return {
    __type: "PlatformTaskDefinitionIncompatibilityException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PlatformUnknownException = (
  output: any,
  context: __SerdeContext
): PlatformUnknownException => {
  return {
    __type: "PlatformUnknownException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PortMapping = (
  output: any,
  context: __SerdeContext
): PortMapping => {
  return {
    __type: "PortMapping",
    containerPort:
      output.containerPort !== undefined && output.containerPort !== null
        ? output.containerPort
        : undefined,
    hostPort:
      output.hostPort !== undefined && output.hostPort !== null
        ? output.hostPort
        : undefined,
    protocol:
      output.protocol !== undefined && output.protocol !== null
        ? output.protocol
        : undefined
  } as any;
};

const deserializeAws_json1_1PortMappingList = (
  output: any,
  context: __SerdeContext
): PortMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PortMapping(entry, context)
  );
};

const deserializeAws_json1_1ProxyConfiguration = (
  output: any,
  context: __SerdeContext
): ProxyConfiguration => {
  return {
    __type: "ProxyConfiguration",
    containerName:
      output.containerName !== undefined && output.containerName !== null
        ? output.containerName
        : undefined,
    properties:
      output.properties !== undefined && output.properties !== null
        ? deserializeAws_json1_1ProxyConfigurationProperties(
            output.properties,
            context
          )
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ProxyConfigurationProperties = (
  output: any,
  context: __SerdeContext
): KeyValuePair[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyValuePair(entry, context)
  );
};

const deserializeAws_json1_1PutAccountSettingDefaultResponse = (
  output: any,
  context: __SerdeContext
): PutAccountSettingDefaultResponse => {
  return {
    __type: "PutAccountSettingDefaultResponse",
    setting:
      output.setting !== undefined && output.setting !== null
        ? deserializeAws_json1_1Setting(output.setting, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PutAccountSettingResponse = (
  output: any,
  context: __SerdeContext
): PutAccountSettingResponse => {
  return {
    __type: "PutAccountSettingResponse",
    setting:
      output.setting !== undefined && output.setting !== null
        ? deserializeAws_json1_1Setting(output.setting, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PutAttributesResponse = (
  output: any,
  context: __SerdeContext
): PutAttributesResponse => {
  return {
    __type: "PutAttributesResponse",
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1Attributes(output.attributes, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PutClusterCapacityProvidersResponse = (
  output: any,
  context: __SerdeContext
): PutClusterCapacityProvidersResponse => {
  return {
    __type: "PutClusterCapacityProvidersResponse",
    cluster:
      output.cluster !== undefined && output.cluster !== null
        ? deserializeAws_json1_1Cluster(output.cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1RegisterContainerInstanceResponse = (
  output: any,
  context: __SerdeContext
): RegisterContainerInstanceResponse => {
  return {
    __type: "RegisterContainerInstanceResponse",
    containerInstance:
      output.containerInstance !== undefined &&
      output.containerInstance !== null
        ? deserializeAws_json1_1ContainerInstance(
            output.containerInstance,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1RegisterTaskDefinitionResponse = (
  output: any,
  context: __SerdeContext
): RegisterTaskDefinitionResponse => {
  return {
    __type: "RegisterTaskDefinitionResponse",
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1Tags(output.tags, context)
        : undefined,
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null
        ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1RepositoryCredentials = (
  output: any,
  context: __SerdeContext
): RepositoryCredentials => {
  return {
    __type: "RepositoryCredentials",
    credentialsParameter:
      output.credentialsParameter !== undefined &&
      output.credentialsParameter !== null
        ? output.credentialsParameter
        : undefined
  } as any;
};

const deserializeAws_json1_1RequiresAttributes = (
  output: any,
  context: __SerdeContext
): Attribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attribute(entry, context)
  );
};

const deserializeAws_json1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  return {
    __type: "Resource",
    doubleValue:
      output.doubleValue !== undefined && output.doubleValue !== null
        ? output.doubleValue
        : undefined,
    integerValue:
      output.integerValue !== undefined && output.integerValue !== null
        ? output.integerValue
        : undefined,
    longValue:
      output.longValue !== undefined && output.longValue !== null
        ? output.longValue
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    stringSetValue:
      output.stringSetValue !== undefined && output.stringSetValue !== null
        ? deserializeAws_json1_1StringList(output.stringSetValue, context)
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  return {
    __type: "ResourceInUseException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceRequirement = (
  output: any,
  context: __SerdeContext
): ResourceRequirement => {
  return {
    __type: "ResourceRequirement",
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceRequirements = (
  output: any,
  context: __SerdeContext
): ResourceRequirement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceRequirement(entry, context)
  );
};

const deserializeAws_json1_1Resources = (
  output: any,
  context: __SerdeContext
): Resource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Resource(entry, context)
  );
};

const deserializeAws_json1_1RunTaskResponse = (
  output: any,
  context: __SerdeContext
): RunTaskResponse => {
  return {
    __type: "RunTaskResponse",
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    tasks:
      output.tasks !== undefined && output.tasks !== null
        ? deserializeAws_json1_1Tasks(output.tasks, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Scale = (
  output: any,
  context: __SerdeContext
): Scale => {
  return {
    __type: "Scale",
    unit:
      output.unit !== undefined && output.unit !== null
        ? output.unit
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1Secret = (
  output: any,
  context: __SerdeContext
): Secret => {
  return {
    __type: "Secret",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    valueFrom:
      output.valueFrom !== undefined && output.valueFrom !== null
        ? output.valueFrom
        : undefined
  } as any;
};

const deserializeAws_json1_1SecretList = (
  output: any,
  context: __SerdeContext
): Secret[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Secret(entry, context)
  );
};

const deserializeAws_json1_1ServerException = (
  output: any,
  context: __SerdeContext
): ServerException => {
  return {
    __type: "ServerException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Service = (
  output: any,
  context: __SerdeContext
): Service => {
  return {
    __type: "Service",
    capacityProviderStrategy:
      output.capacityProviderStrategy !== undefined &&
      output.capacityProviderStrategy !== null
        ? deserializeAws_json1_1CapacityProviderStrategy(
            output.capacityProviderStrategy,
            context
          )
        : undefined,
    clusterArn:
      output.clusterArn !== undefined && output.clusterArn !== null
        ? output.clusterArn
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy:
      output.createdBy !== undefined && output.createdBy !== null
        ? output.createdBy
        : undefined,
    deploymentConfiguration:
      output.deploymentConfiguration !== undefined &&
      output.deploymentConfiguration !== null
        ? deserializeAws_json1_1DeploymentConfiguration(
            output.deploymentConfiguration,
            context
          )
        : undefined,
    deploymentController:
      output.deploymentController !== undefined &&
      output.deploymentController !== null
        ? deserializeAws_json1_1DeploymentController(
            output.deploymentController,
            context
          )
        : undefined,
    deployments:
      output.deployments !== undefined && output.deployments !== null
        ? deserializeAws_json1_1Deployments(output.deployments, context)
        : undefined,
    desiredCount:
      output.desiredCount !== undefined && output.desiredCount !== null
        ? output.desiredCount
        : undefined,
    enableECSManagedTags:
      output.enableECSManagedTags !== undefined &&
      output.enableECSManagedTags !== null
        ? output.enableECSManagedTags
        : undefined,
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1ServiceEvents(output.events, context)
        : undefined,
    healthCheckGracePeriodSeconds:
      output.healthCheckGracePeriodSeconds !== undefined &&
      output.healthCheckGracePeriodSeconds !== null
        ? output.healthCheckGracePeriodSeconds
        : undefined,
    launchType:
      output.launchType !== undefined && output.launchType !== null
        ? output.launchType
        : undefined,
    loadBalancers:
      output.loadBalancers !== undefined && output.loadBalancers !== null
        ? deserializeAws_json1_1LoadBalancers(output.loadBalancers, context)
        : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined &&
      output.networkConfiguration !== null
        ? deserializeAws_json1_1NetworkConfiguration(
            output.networkConfiguration,
            context
          )
        : undefined,
    pendingCount:
      output.pendingCount !== undefined && output.pendingCount !== null
        ? output.pendingCount
        : undefined,
    placementConstraints:
      output.placementConstraints !== undefined &&
      output.placementConstraints !== null
        ? deserializeAws_json1_1PlacementConstraints(
            output.placementConstraints,
            context
          )
        : undefined,
    placementStrategy:
      output.placementStrategy !== undefined &&
      output.placementStrategy !== null
        ? deserializeAws_json1_1PlacementStrategies(
            output.placementStrategy,
            context
          )
        : undefined,
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null
        ? output.platformVersion
        : undefined,
    propagateTags:
      output.propagateTags !== undefined && output.propagateTags !== null
        ? output.propagateTags
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    runningCount:
      output.runningCount !== undefined && output.runningCount !== null
        ? output.runningCount
        : undefined,
    schedulingStrategy:
      output.schedulingStrategy !== undefined &&
      output.schedulingStrategy !== null
        ? output.schedulingStrategy
        : undefined,
    serviceArn:
      output.serviceArn !== undefined && output.serviceArn !== null
        ? output.serviceArn
        : undefined,
    serviceName:
      output.serviceName !== undefined && output.serviceName !== null
        ? output.serviceName
        : undefined,
    serviceRegistries:
      output.serviceRegistries !== undefined &&
      output.serviceRegistries !== null
        ? deserializeAws_json1_1ServiceRegistries(
            output.serviceRegistries,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1Tags(output.tags, context)
        : undefined,
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null
        ? output.taskDefinition
        : undefined,
    taskSets:
      output.taskSets !== undefined && output.taskSets !== null
        ? deserializeAws_json1_1TaskSets(output.taskSets, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceEvent = (
  output: any,
  context: __SerdeContext
): ServiceEvent => {
  return {
    __type: "ServiceEvent",
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceEvents = (
  output: any,
  context: __SerdeContext
): ServiceEvent[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceEvent(entry, context)
  );
};

const deserializeAws_json1_1ServiceNotActiveException = (
  output: any,
  context: __SerdeContext
): ServiceNotActiveException => {
  return {
    __type: "ServiceNotActiveException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceNotFoundException = (
  output: any,
  context: __SerdeContext
): ServiceNotFoundException => {
  return {
    __type: "ServiceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceRegistries = (
  output: any,
  context: __SerdeContext
): ServiceRegistry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceRegistry(entry, context)
  );
};

const deserializeAws_json1_1ServiceRegistry = (
  output: any,
  context: __SerdeContext
): ServiceRegistry => {
  return {
    __type: "ServiceRegistry",
    containerName:
      output.containerName !== undefined && output.containerName !== null
        ? output.containerName
        : undefined,
    containerPort:
      output.containerPort !== undefined && output.containerPort !== null
        ? output.containerPort
        : undefined,
    port:
      output.port !== undefined && output.port !== null
        ? output.port
        : undefined,
    registryArn:
      output.registryArn !== undefined && output.registryArn !== null
        ? output.registryArn
        : undefined
  } as any;
};

const deserializeAws_json1_1Services = (
  output: any,
  context: __SerdeContext
): Service[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Service(entry, context)
  );
};

const deserializeAws_json1_1Setting = (
  output: any,
  context: __SerdeContext
): Setting => {
  return {
    __type: "Setting",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    principalArn:
      output.principalArn !== undefined && output.principalArn !== null
        ? output.principalArn
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1Settings = (
  output: any,
  context: __SerdeContext
): Setting[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Setting(entry, context)
  );
};

const deserializeAws_json1_1StartTaskResponse = (
  output: any,
  context: __SerdeContext
): StartTaskResponse => {
  return {
    __type: "StartTaskResponse",
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined,
    tasks:
      output.tasks !== undefined && output.tasks !== null
        ? deserializeAws_json1_1Tasks(output.tasks, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Statistics = (
  output: any,
  context: __SerdeContext
): KeyValuePair[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyValuePair(entry, context)
  );
};

const deserializeAws_json1_1StopTaskResponse = (
  output: any,
  context: __SerdeContext
): StopTaskResponse => {
  return {
    __type: "StopTaskResponse",
    task:
      output.task !== undefined && output.task !== null
        ? deserializeAws_json1_1Task(output.task, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1StringMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1SubmitAttachmentStateChangesResponse = (
  output: any,
  context: __SerdeContext
): SubmitAttachmentStateChangesResponse => {
  return {
    __type: "SubmitAttachmentStateChangesResponse",
    acknowledgment:
      output.acknowledgment !== undefined && output.acknowledgment !== null
        ? output.acknowledgment
        : undefined
  } as any;
};

const deserializeAws_json1_1SubmitContainerStateChangeResponse = (
  output: any,
  context: __SerdeContext
): SubmitContainerStateChangeResponse => {
  return {
    __type: "SubmitContainerStateChangeResponse",
    acknowledgment:
      output.acknowledgment !== undefined && output.acknowledgment !== null
        ? output.acknowledgment
        : undefined
  } as any;
};

const deserializeAws_json1_1SubmitTaskStateChangeResponse = (
  output: any,
  context: __SerdeContext
): SubmitTaskStateChangeResponse => {
  return {
    __type: "SubmitTaskStateChangeResponse",
    acknowledgment:
      output.acknowledgment !== undefined && output.acknowledgment !== null
        ? output.acknowledgment
        : undefined
  } as any;
};

const deserializeAws_json1_1SystemControl = (
  output: any,
  context: __SerdeContext
): SystemControl => {
  return {
    __type: "SystemControl",
    namespace:
      output.namespace !== undefined && output.namespace !== null
        ? output.namespace
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1SystemControls = (
  output: any,
  context: __SerdeContext
): SystemControl[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SystemControl(entry, context)
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  return {
    __type: "TagResourceResponse"
  } as any;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TargetNotFoundException = (
  output: any,
  context: __SerdeContext
): TargetNotFoundException => {
  return {
    __type: "TargetNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Task = (
  output: any,
  context: __SerdeContext
): Task => {
  return {
    __type: "Task",
    attachments:
      output.attachments !== undefined && output.attachments !== null
        ? deserializeAws_json1_1Attachments(output.attachments, context)
        : undefined,
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1Attributes(output.attributes, context)
        : undefined,
    availabilityZone:
      output.availabilityZone !== undefined && output.availabilityZone !== null
        ? output.availabilityZone
        : undefined,
    capacityProviderName:
      output.capacityProviderName !== undefined &&
      output.capacityProviderName !== null
        ? output.capacityProviderName
        : undefined,
    clusterArn:
      output.clusterArn !== undefined && output.clusterArn !== null
        ? output.clusterArn
        : undefined,
    connectivity:
      output.connectivity !== undefined && output.connectivity !== null
        ? output.connectivity
        : undefined,
    connectivityAt:
      output.connectivityAt !== undefined && output.connectivityAt !== null
        ? new Date(Math.round(output.connectivityAt * 1000))
        : undefined,
    containerInstanceArn:
      output.containerInstanceArn !== undefined &&
      output.containerInstanceArn !== null
        ? output.containerInstanceArn
        : undefined,
    containers:
      output.containers !== undefined && output.containers !== null
        ? deserializeAws_json1_1Containers(output.containers, context)
        : undefined,
    cpu:
      output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    desiredStatus:
      output.desiredStatus !== undefined && output.desiredStatus !== null
        ? output.desiredStatus
        : undefined,
    executionStoppedAt:
      output.executionStoppedAt !== undefined &&
      output.executionStoppedAt !== null
        ? new Date(Math.round(output.executionStoppedAt * 1000))
        : undefined,
    group:
      output.group !== undefined && output.group !== null
        ? output.group
        : undefined,
    healthStatus:
      output.healthStatus !== undefined && output.healthStatus !== null
        ? output.healthStatus
        : undefined,
    inferenceAccelerators:
      output.inferenceAccelerators !== undefined &&
      output.inferenceAccelerators !== null
        ? deserializeAws_json1_1InferenceAccelerators(
            output.inferenceAccelerators,
            context
          )
        : undefined,
    lastStatus:
      output.lastStatus !== undefined && output.lastStatus !== null
        ? output.lastStatus
        : undefined,
    launchType:
      output.launchType !== undefined && output.launchType !== null
        ? output.launchType
        : undefined,
    memory:
      output.memory !== undefined && output.memory !== null
        ? output.memory
        : undefined,
    overrides:
      output.overrides !== undefined && output.overrides !== null
        ? deserializeAws_json1_1TaskOverride(output.overrides, context)
        : undefined,
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null
        ? output.platformVersion
        : undefined,
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
    startedBy:
      output.startedBy !== undefined && output.startedBy !== null
        ? output.startedBy
        : undefined,
    stopCode:
      output.stopCode !== undefined && output.stopCode !== null
        ? output.stopCode
        : undefined,
    stoppedAt:
      output.stoppedAt !== undefined && output.stoppedAt !== null
        ? new Date(Math.round(output.stoppedAt * 1000))
        : undefined,
    stoppedReason:
      output.stoppedReason !== undefined && output.stoppedReason !== null
        ? output.stoppedReason
        : undefined,
    stoppingAt:
      output.stoppingAt !== undefined && output.stoppingAt !== null
        ? new Date(Math.round(output.stoppingAt * 1000))
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1Tags(output.tags, context)
        : undefined,
    taskArn:
      output.taskArn !== undefined && output.taskArn !== null
        ? output.taskArn
        : undefined,
    taskDefinitionArn:
      output.taskDefinitionArn !== undefined &&
      output.taskDefinitionArn !== null
        ? output.taskDefinitionArn
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_json1_1TaskDefinition = (
  output: any,
  context: __SerdeContext
): TaskDefinition => {
  return {
    __type: "TaskDefinition",
    compatibilities:
      output.compatibilities !== undefined && output.compatibilities !== null
        ? deserializeAws_json1_1CompatibilityList(
            output.compatibilities,
            context
          )
        : undefined,
    containerDefinitions:
      output.containerDefinitions !== undefined &&
      output.containerDefinitions !== null
        ? deserializeAws_json1_1ContainerDefinitions(
            output.containerDefinitions,
            context
          )
        : undefined,
    cpu:
      output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    executionRoleArn:
      output.executionRoleArn !== undefined && output.executionRoleArn !== null
        ? output.executionRoleArn
        : undefined,
    family:
      output.family !== undefined && output.family !== null
        ? output.family
        : undefined,
    inferenceAccelerators:
      output.inferenceAccelerators !== undefined &&
      output.inferenceAccelerators !== null
        ? deserializeAws_json1_1InferenceAccelerators(
            output.inferenceAccelerators,
            context
          )
        : undefined,
    ipcMode:
      output.ipcMode !== undefined && output.ipcMode !== null
        ? output.ipcMode
        : undefined,
    memory:
      output.memory !== undefined && output.memory !== null
        ? output.memory
        : undefined,
    networkMode:
      output.networkMode !== undefined && output.networkMode !== null
        ? output.networkMode
        : undefined,
    pidMode:
      output.pidMode !== undefined && output.pidMode !== null
        ? output.pidMode
        : undefined,
    placementConstraints:
      output.placementConstraints !== undefined &&
      output.placementConstraints !== null
        ? deserializeAws_json1_1TaskDefinitionPlacementConstraints(
            output.placementConstraints,
            context
          )
        : undefined,
    proxyConfiguration:
      output.proxyConfiguration !== undefined &&
      output.proxyConfiguration !== null
        ? deserializeAws_json1_1ProxyConfiguration(
            output.proxyConfiguration,
            context
          )
        : undefined,
    requiresAttributes:
      output.requiresAttributes !== undefined &&
      output.requiresAttributes !== null
        ? deserializeAws_json1_1RequiresAttributes(
            output.requiresAttributes,
            context
          )
        : undefined,
    requiresCompatibilities:
      output.requiresCompatibilities !== undefined &&
      output.requiresCompatibilities !== null
        ? deserializeAws_json1_1CompatibilityList(
            output.requiresCompatibilities,
            context
          )
        : undefined,
    revision:
      output.revision !== undefined && output.revision !== null
        ? output.revision
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    taskDefinitionArn:
      output.taskDefinitionArn !== undefined &&
      output.taskDefinitionArn !== null
        ? output.taskDefinitionArn
        : undefined,
    taskRoleArn:
      output.taskRoleArn !== undefined && output.taskRoleArn !== null
        ? output.taskRoleArn
        : undefined,
    volumes:
      output.volumes !== undefined && output.volumes !== null
        ? deserializeAws_json1_1VolumeList(output.volumes, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1TaskDefinitionPlacementConstraint = (
  output: any,
  context: __SerdeContext
): TaskDefinitionPlacementConstraint => {
  return {
    __type: "TaskDefinitionPlacementConstraint",
    expression:
      output.expression !== undefined && output.expression !== null
        ? output.expression
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1TaskDefinitionPlacementConstraints = (
  output: any,
  context: __SerdeContext
): TaskDefinitionPlacementConstraint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context)
  );
};

const deserializeAws_json1_1TaskOverride = (
  output: any,
  context: __SerdeContext
): TaskOverride => {
  return {
    __type: "TaskOverride",
    containerOverrides:
      output.containerOverrides !== undefined &&
      output.containerOverrides !== null
        ? deserializeAws_json1_1ContainerOverrides(
            output.containerOverrides,
            context
          )
        : undefined,
    cpu:
      output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
    executionRoleArn:
      output.executionRoleArn !== undefined && output.executionRoleArn !== null
        ? output.executionRoleArn
        : undefined,
    inferenceAcceleratorOverrides:
      output.inferenceAcceleratorOverrides !== undefined &&
      output.inferenceAcceleratorOverrides !== null
        ? deserializeAws_json1_1InferenceAcceleratorOverrides(
            output.inferenceAcceleratorOverrides,
            context
          )
        : undefined,
    memory:
      output.memory !== undefined && output.memory !== null
        ? output.memory
        : undefined,
    taskRoleArn:
      output.taskRoleArn !== undefined && output.taskRoleArn !== null
        ? output.taskRoleArn
        : undefined
  } as any;
};

const deserializeAws_json1_1Tasks = (
  output: any,
  context: __SerdeContext
): Task[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Task(entry, context)
  );
};

const deserializeAws_json1_1TaskSet = (
  output: any,
  context: __SerdeContext
): TaskSet => {
  return {
    __type: "TaskSet",
    capacityProviderStrategy:
      output.capacityProviderStrategy !== undefined &&
      output.capacityProviderStrategy !== null
        ? deserializeAws_json1_1CapacityProviderStrategy(
            output.capacityProviderStrategy,
            context
          )
        : undefined,
    clusterArn:
      output.clusterArn !== undefined && output.clusterArn !== null
        ? output.clusterArn
        : undefined,
    computedDesiredCount:
      output.computedDesiredCount !== undefined &&
      output.computedDesiredCount !== null
        ? output.computedDesiredCount
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    externalId:
      output.externalId !== undefined && output.externalId !== null
        ? output.externalId
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    launchType:
      output.launchType !== undefined && output.launchType !== null
        ? output.launchType
        : undefined,
    loadBalancers:
      output.loadBalancers !== undefined && output.loadBalancers !== null
        ? deserializeAws_json1_1LoadBalancers(output.loadBalancers, context)
        : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined &&
      output.networkConfiguration !== null
        ? deserializeAws_json1_1NetworkConfiguration(
            output.networkConfiguration,
            context
          )
        : undefined,
    pendingCount:
      output.pendingCount !== undefined && output.pendingCount !== null
        ? output.pendingCount
        : undefined,
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null
        ? output.platformVersion
        : undefined,
    runningCount:
      output.runningCount !== undefined && output.runningCount !== null
        ? output.runningCount
        : undefined,
    scale:
      output.scale !== undefined && output.scale !== null
        ? deserializeAws_json1_1Scale(output.scale, context)
        : undefined,
    serviceArn:
      output.serviceArn !== undefined && output.serviceArn !== null
        ? output.serviceArn
        : undefined,
    serviceRegistries:
      output.serviceRegistries !== undefined &&
      output.serviceRegistries !== null
        ? deserializeAws_json1_1ServiceRegistries(
            output.serviceRegistries,
            context
          )
        : undefined,
    stabilityStatus:
      output.stabilityStatus !== undefined && output.stabilityStatus !== null
        ? output.stabilityStatus
        : undefined,
    stabilityStatusAt:
      output.stabilityStatusAt !== undefined &&
      output.stabilityStatusAt !== null
        ? new Date(Math.round(output.stabilityStatusAt * 1000))
        : undefined,
    startedBy:
      output.startedBy !== undefined && output.startedBy !== null
        ? output.startedBy
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    taskDefinition:
      output.taskDefinition !== undefined && output.taskDefinition !== null
        ? output.taskDefinition
        : undefined,
    taskSetArn:
      output.taskSetArn !== undefined && output.taskSetArn !== null
        ? output.taskSetArn
        : undefined,
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? new Date(Math.round(output.updatedAt * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1TaskSetNotFoundException = (
  output: any,
  context: __SerdeContext
): TaskSetNotFoundException => {
  return {
    __type: "TaskSetNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TaskSets = (
  output: any,
  context: __SerdeContext
): TaskSet[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TaskSet(entry, context)
  );
};

const deserializeAws_json1_1Tmpfs = (
  output: any,
  context: __SerdeContext
): Tmpfs => {
  return {
    __type: "Tmpfs",
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null
        ? output.containerPath
        : undefined,
    mountOptions:
      output.mountOptions !== undefined && output.mountOptions !== null
        ? deserializeAws_json1_1StringList(output.mountOptions, context)
        : undefined,
    size:
      output.size !== undefined && output.size !== null
        ? output.size
        : undefined
  } as any;
};

const deserializeAws_json1_1TmpfsList = (
  output: any,
  context: __SerdeContext
): Tmpfs[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tmpfs(entry, context)
  );
};

const deserializeAws_json1_1Ulimit = (
  output: any,
  context: __SerdeContext
): Ulimit => {
  return {
    __type: "Ulimit",
    hardLimit:
      output.hardLimit !== undefined && output.hardLimit !== null
        ? output.hardLimit
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    softLimit:
      output.softLimit !== undefined && output.softLimit !== null
        ? output.softLimit
        : undefined
  } as any;
};

const deserializeAws_json1_1UlimitList = (
  output: any,
  context: __SerdeContext
): Ulimit[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Ulimit(entry, context)
  );
};

const deserializeAws_json1_1UnsupportedFeatureException = (
  output: any,
  context: __SerdeContext
): UnsupportedFeatureException => {
  return {
    __type: "UnsupportedFeatureException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse"
  } as any;
};

const deserializeAws_json1_1UpdateClusterSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateClusterSettingsResponse => {
  return {
    __type: "UpdateClusterSettingsResponse",
    cluster:
      output.cluster !== undefined && output.cluster !== null
        ? deserializeAws_json1_1Cluster(output.cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateContainerAgentResponse = (
  output: any,
  context: __SerdeContext
): UpdateContainerAgentResponse => {
  return {
    __type: "UpdateContainerAgentResponse",
    containerInstance:
      output.containerInstance !== undefined &&
      output.containerInstance !== null
        ? deserializeAws_json1_1ContainerInstance(
            output.containerInstance,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateContainerInstancesStateResponse = (
  output: any,
  context: __SerdeContext
): UpdateContainerInstancesStateResponse => {
  return {
    __type: "UpdateContainerInstancesStateResponse",
    containerInstances:
      output.containerInstances !== undefined &&
      output.containerInstances !== null
        ? deserializeAws_json1_1ContainerInstances(
            output.containerInstances,
            context
          )
        : undefined,
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1Failures(output.failures, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateInProgressException = (
  output: any,
  context: __SerdeContext
): UpdateInProgressException => {
  return {
    __type: "UpdateInProgressException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateServicePrimaryTaskSetResponse => {
  return {
    __type: "UpdateServicePrimaryTaskSetResponse",
    taskSet:
      output.taskSet !== undefined && output.taskSet !== null
        ? deserializeAws_json1_1TaskSet(output.taskSet, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateServiceResponse = (
  output: any,
  context: __SerdeContext
): UpdateServiceResponse => {
  return {
    __type: "UpdateServiceResponse",
    service:
      output.service !== undefined && output.service !== null
        ? deserializeAws_json1_1Service(output.service, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateTaskSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateTaskSetResponse => {
  return {
    __type: "UpdateTaskSetResponse",
    taskSet:
      output.taskSet !== undefined && output.taskSet !== null
        ? deserializeAws_json1_1TaskSet(output.taskSet, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1VersionInfo = (
  output: any,
  context: __SerdeContext
): VersionInfo => {
  return {
    __type: "VersionInfo",
    agentHash:
      output.agentHash !== undefined && output.agentHash !== null
        ? output.agentHash
        : undefined,
    agentVersion:
      output.agentVersion !== undefined && output.agentVersion !== null
        ? output.agentVersion
        : undefined,
    dockerVersion:
      output.dockerVersion !== undefined && output.dockerVersion !== null
        ? output.dockerVersion
        : undefined
  } as any;
};

const deserializeAws_json1_1Volume = (
  output: any,
  context: __SerdeContext
): Volume => {
  return {
    __type: "Volume",
    dockerVolumeConfiguration:
      output.dockerVolumeConfiguration !== undefined &&
      output.dockerVolumeConfiguration !== null
        ? deserializeAws_json1_1DockerVolumeConfiguration(
            output.dockerVolumeConfiguration,
            context
          )
        : undefined,
    efsVolumeConfiguration:
      output.efsVolumeConfiguration !== undefined &&
      output.efsVolumeConfiguration !== null
        ? deserializeAws_json1_1EFSVolumeConfiguration(
            output.efsVolumeConfiguration,
            context
          )
        : undefined,
    host:
      output.host !== undefined && output.host !== null
        ? deserializeAws_json1_1HostVolumeProperties(output.host, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1VolumeFrom = (
  output: any,
  context: __SerdeContext
): VolumeFrom => {
  return {
    __type: "VolumeFrom",
    readOnly:
      output.readOnly !== undefined && output.readOnly !== null
        ? output.readOnly
        : undefined,
    sourceContainer:
      output.sourceContainer !== undefined && output.sourceContainer !== null
        ? output.sourceContainer
        : undefined
  } as any;
};

const deserializeAws_json1_1VolumeFromList = (
  output: any,
  context: __SerdeContext
): VolumeFrom[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VolumeFrom(entry, context)
  );
};

const deserializeAws_json1_1VolumeList = (
  output: any,
  context: __SerdeContext
): Volume[] => {
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
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

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
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
