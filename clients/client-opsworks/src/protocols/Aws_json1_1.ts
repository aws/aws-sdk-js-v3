// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AssignInstanceCommandInput, AssignInstanceCommandOutput } from "../commands/AssignInstanceCommand";
import { AssignVolumeCommandInput, AssignVolumeCommandOutput } from "../commands/AssignVolumeCommand";
import { AssociateElasticIpCommandInput, AssociateElasticIpCommandOutput } from "../commands/AssociateElasticIpCommand";
import {
  AttachElasticLoadBalancerCommandInput,
  AttachElasticLoadBalancerCommandOutput,
} from "../commands/AttachElasticLoadBalancerCommand";
import { CloneStackCommandInput, CloneStackCommandOutput } from "../commands/CloneStackCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "../commands/CreateInstanceCommand";
import { CreateLayerCommandInput, CreateLayerCommandOutput } from "../commands/CreateLayerCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "../commands/CreateStackCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "../commands/CreateUserProfileCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "../commands/DeleteAppCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "../commands/DeleteInstanceCommand";
import { DeleteLayerCommandInput, DeleteLayerCommandOutput } from "../commands/DeleteLayerCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "../commands/DeleteStackCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "../commands/DeleteUserProfileCommand";
import {
  DeregisterEcsClusterCommandInput,
  DeregisterEcsClusterCommandOutput,
} from "../commands/DeregisterEcsClusterCommand";
import {
  DeregisterElasticIpCommandInput,
  DeregisterElasticIpCommandOutput,
} from "../commands/DeregisterElasticIpCommand";
import { DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput } from "../commands/DeregisterInstanceCommand";
import {
  DeregisterRdsDbInstanceCommandInput,
  DeregisterRdsDbInstanceCommandOutput,
} from "../commands/DeregisterRdsDbInstanceCommand";
import { DeregisterVolumeCommandInput, DeregisterVolumeCommandOutput } from "../commands/DeregisterVolumeCommand";
import {
  DescribeAgentVersionsCommandInput,
  DescribeAgentVersionsCommandOutput,
} from "../commands/DescribeAgentVersionsCommand";
import { DescribeAppsCommandInput, DescribeAppsCommandOutput } from "../commands/DescribeAppsCommand";
import { DescribeCommandsCommandInput, DescribeCommandsCommandOutput } from "../commands/DescribeCommandsCommand";
import {
  DescribeDeploymentsCommandInput,
  DescribeDeploymentsCommandOutput,
} from "../commands/DescribeDeploymentsCommand";
import {
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput,
} from "../commands/DescribeEcsClustersCommand";
import { DescribeElasticIpsCommandInput, DescribeElasticIpsCommandOutput } from "../commands/DescribeElasticIpsCommand";
import {
  DescribeElasticLoadBalancersCommandInput,
  DescribeElasticLoadBalancersCommandOutput,
} from "../commands/DescribeElasticLoadBalancersCommand";
import { DescribeInstancesCommandInput, DescribeInstancesCommandOutput } from "../commands/DescribeInstancesCommand";
import { DescribeLayersCommandInput, DescribeLayersCommandOutput } from "../commands/DescribeLayersCommand";
import {
  DescribeLoadBasedAutoScalingCommandInput,
  DescribeLoadBasedAutoScalingCommandOutput,
} from "../commands/DescribeLoadBasedAutoScalingCommand";
import {
  DescribeMyUserProfileCommandInput,
  DescribeMyUserProfileCommandOutput,
} from "../commands/DescribeMyUserProfileCommand";
import {
  DescribeOperatingSystemsCommandInput,
  DescribeOperatingSystemsCommandOutput,
} from "../commands/DescribeOperatingSystemsCommand";
import {
  DescribePermissionsCommandInput,
  DescribePermissionsCommandOutput,
} from "../commands/DescribePermissionsCommand";
import { DescribeRaidArraysCommandInput, DescribeRaidArraysCommandOutput } from "../commands/DescribeRaidArraysCommand";
import {
  DescribeRdsDbInstancesCommandInput,
  DescribeRdsDbInstancesCommandOutput,
} from "../commands/DescribeRdsDbInstancesCommand";
import {
  DescribeServiceErrorsCommandInput,
  DescribeServiceErrorsCommandOutput,
} from "../commands/DescribeServiceErrorsCommand";
import {
  DescribeStackProvisioningParametersCommandInput,
  DescribeStackProvisioningParametersCommandOutput,
} from "../commands/DescribeStackProvisioningParametersCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "../commands/DescribeStacksCommand";
import {
  DescribeStackSummaryCommandInput,
  DescribeStackSummaryCommandOutput,
} from "../commands/DescribeStackSummaryCommand";
import {
  DescribeTimeBasedAutoScalingCommandInput,
  DescribeTimeBasedAutoScalingCommandOutput,
} from "../commands/DescribeTimeBasedAutoScalingCommand";
import {
  DescribeUserProfilesCommandInput,
  DescribeUserProfilesCommandOutput,
} from "../commands/DescribeUserProfilesCommand";
import { DescribeVolumesCommandInput, DescribeVolumesCommandOutput } from "../commands/DescribeVolumesCommand";
import {
  DetachElasticLoadBalancerCommandInput,
  DetachElasticLoadBalancerCommandOutput,
} from "../commands/DetachElasticLoadBalancerCommand";
import {
  DisassociateElasticIpCommandInput,
  DisassociateElasticIpCommandOutput,
} from "../commands/DisassociateElasticIpCommand";
import {
  GetHostnameSuggestionCommandInput,
  GetHostnameSuggestionCommandOutput,
} from "../commands/GetHostnameSuggestionCommand";
import { GrantAccessCommandInput, GrantAccessCommandOutput } from "../commands/GrantAccessCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "../commands/RebootInstanceCommand";
import { RegisterEcsClusterCommandInput, RegisterEcsClusterCommandOutput } from "../commands/RegisterEcsClusterCommand";
import { RegisterElasticIpCommandInput, RegisterElasticIpCommandOutput } from "../commands/RegisterElasticIpCommand";
import { RegisterInstanceCommandInput, RegisterInstanceCommandOutput } from "../commands/RegisterInstanceCommand";
import {
  RegisterRdsDbInstanceCommandInput,
  RegisterRdsDbInstanceCommandOutput,
} from "../commands/RegisterRdsDbInstanceCommand";
import { RegisterVolumeCommandInput, RegisterVolumeCommandOutput } from "../commands/RegisterVolumeCommand";
import {
  SetLoadBasedAutoScalingCommandInput,
  SetLoadBasedAutoScalingCommandOutput,
} from "../commands/SetLoadBasedAutoScalingCommand";
import { SetPermissionCommandInput, SetPermissionCommandOutput } from "../commands/SetPermissionCommand";
import {
  SetTimeBasedAutoScalingCommandInput,
  SetTimeBasedAutoScalingCommandOutput,
} from "../commands/SetTimeBasedAutoScalingCommand";
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "../commands/StartInstanceCommand";
import { StartStackCommandInput, StartStackCommandOutput } from "../commands/StartStackCommand";
import { StopInstanceCommandInput, StopInstanceCommandOutput } from "../commands/StopInstanceCommand";
import { StopStackCommandInput, StopStackCommandOutput } from "../commands/StopStackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UnassignInstanceCommandInput, UnassignInstanceCommandOutput } from "../commands/UnassignInstanceCommand";
import { UnassignVolumeCommandInput, UnassignVolumeCommandOutput } from "../commands/UnassignVolumeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "../commands/UpdateAppCommand";
import { UpdateElasticIpCommandInput, UpdateElasticIpCommandOutput } from "../commands/UpdateElasticIpCommand";
import { UpdateInstanceCommandInput, UpdateInstanceCommandOutput } from "../commands/UpdateInstanceCommand";
import { UpdateLayerCommandInput, UpdateLayerCommandOutput } from "../commands/UpdateLayerCommand";
import {
  UpdateMyUserProfileCommandInput,
  UpdateMyUserProfileCommandOutput,
} from "../commands/UpdateMyUserProfileCommand";
import {
  UpdateRdsDbInstanceCommandInput,
  UpdateRdsDbInstanceCommandOutput,
} from "../commands/UpdateRdsDbInstanceCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "../commands/UpdateStackCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "../commands/UpdateUserProfileCommand";
import { UpdateVolumeCommandInput, UpdateVolumeCommandOutput } from "../commands/UpdateVolumeCommand";
import {
  AgentVersion,
  App,
  AppAttributesKeys,
  AssignInstanceRequest,
  AssignVolumeRequest,
  AssociateElasticIpRequest,
  AttachElasticLoadBalancerRequest,
  AutoScalingThresholds,
  BlockDeviceMapping,
  ChefConfiguration,
  CloneStackRequest,
  CloneStackResult,
  CloudWatchLogsConfiguration,
  CloudWatchLogsLogStream,
  Command,
  CreateAppRequest,
  CreateAppResult,
  CreateDeploymentRequest,
  CreateDeploymentResult,
  CreateInstanceRequest,
  CreateInstanceResult,
  CreateLayerRequest,
  CreateLayerResult,
  CreateStackRequest,
  CreateStackResult,
  CreateUserProfileRequest,
  CreateUserProfileResult,
  DataSource,
  DeleteAppRequest,
  DeleteInstanceRequest,
  DeleteLayerRequest,
  DeleteStackRequest,
  DeleteUserProfileRequest,
  Deployment,
  DeploymentCommand,
  DeregisterEcsClusterRequest,
  DeregisterElasticIpRequest,
  DeregisterInstanceRequest,
  DeregisterRdsDbInstanceRequest,
  DeregisterVolumeRequest,
  DescribeAgentVersionsRequest,
  DescribeAgentVersionsResult,
  DescribeAppsRequest,
  DescribeAppsResult,
  DescribeCommandsRequest,
  DescribeCommandsResult,
  DescribeDeploymentsRequest,
  DescribeDeploymentsResult,
  DescribeEcsClustersRequest,
  DescribeEcsClustersResult,
  DescribeElasticIpsRequest,
  DescribeElasticIpsResult,
  DescribeElasticLoadBalancersRequest,
  DescribeElasticLoadBalancersResult,
  DescribeInstancesRequest,
  DescribeInstancesResult,
  DescribeLayersRequest,
  DescribeLayersResult,
  DescribeLoadBasedAutoScalingRequest,
  DescribeLoadBasedAutoScalingResult,
  DescribeMyUserProfileResult,
  DescribeOperatingSystemsResponse,
  DescribePermissionsRequest,
  DescribePermissionsResult,
  DescribeRaidArraysRequest,
  DescribeRaidArraysResult,
  DescribeRdsDbInstancesRequest,
  DescribeRdsDbInstancesResult,
  DescribeServiceErrorsRequest,
  DescribeServiceErrorsResult,
  DescribeStackProvisioningParametersRequest,
  DescribeStackProvisioningParametersResult,
  DescribeStacksRequest,
  DescribeStacksResult,
  DescribeStackSummaryRequest,
  DescribeStackSummaryResult,
  DescribeTimeBasedAutoScalingRequest,
  DescribeTimeBasedAutoScalingResult,
  DescribeUserProfilesRequest,
  DescribeUserProfilesResult,
  DescribeVolumesRequest,
  DescribeVolumesResult,
  DetachElasticLoadBalancerRequest,
  DisassociateElasticIpRequest,
  EbsBlockDevice,
  EcsCluster,
  ElasticIp,
  ElasticLoadBalancer,
  EnvironmentVariable,
  GetHostnameSuggestionRequest,
  GetHostnameSuggestionResult,
  GrantAccessRequest,
  GrantAccessResult,
  Instance,
  InstanceIdentity,
  InstancesCount,
  Layer,
  LayerAttributesKeys,
  LifecycleEventConfiguration,
  ListTagsRequest,
  ListTagsResult,
  LoadBasedAutoScalingConfiguration,
  OperatingSystem,
  OperatingSystemConfigurationManager,
  Permission,
  RaidArray,
  RdsDbInstance,
  RebootInstanceRequest,
  Recipes,
  RegisterEcsClusterRequest,
  RegisterEcsClusterResult,
  RegisterElasticIpRequest,
  RegisterElasticIpResult,
  RegisterInstanceRequest,
  RegisterInstanceResult,
  RegisterRdsDbInstanceRequest,
  RegisterVolumeRequest,
  RegisterVolumeResult,
  ReportedOs,
  ResourceNotFoundException,
  SelfUserProfile,
  ServiceError,
  SetLoadBasedAutoScalingRequest,
  SetPermissionRequest,
  SetTimeBasedAutoScalingRequest,
  ShutdownEventConfiguration,
  Source,
  SslConfiguration,
  Stack,
  StackAttributesKeys,
  StackConfigurationManager,
  StackSummary,
  StartInstanceRequest,
  StartStackRequest,
  StopInstanceRequest,
  StopStackRequest,
  TagResourceRequest,
  TemporaryCredential,
  TimeBasedAutoScalingConfiguration,
  UnassignInstanceRequest,
  UnassignVolumeRequest,
  UntagResourceRequest,
  UpdateAppRequest,
  UpdateElasticIpRequest,
  UpdateInstanceRequest,
  UpdateLayerRequest,
  UpdateMyUserProfileRequest,
  UpdateRdsDbInstanceRequest,
  UpdateStackRequest,
  UpdateUserProfileRequest,
  UpdateVolumeRequest,
  UserProfile,
  ValidationException,
  Volume,
  VolumeConfiguration,
  WeeklyAutoScalingSchedule,
} from "../models/models_0";
import { OpsWorksServiceException as __BaseException } from "../models/OpsWorksServiceException";

export const serializeAws_json1_1AssignInstanceCommand = async (
  input: AssignInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.AssignInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssignInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssignVolumeCommand = async (
  input: AssignVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.AssignVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssignVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateElasticIpCommand = async (
  input: AssociateElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.AssociateElasticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateElasticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachElasticLoadBalancerCommand = async (
  input: AttachElasticLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.AttachElasticLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachElasticLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CloneStackCommand = async (
  input: CloneStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.CloneStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CloneStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.CreateApp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.CreateDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDeploymentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateInstanceCommand = async (
  input: CreateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.CreateInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLayerCommand = async (
  input: CreateLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.CreateLayer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLayerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStackCommand = async (
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.CreateStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserProfileCommand = async (
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.CreateUserProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DeleteApp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteInstanceCommand = async (
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DeleteInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLayerCommand = async (
  input: DeleteLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DeleteLayer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLayerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStackCommand = async (
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DeleteStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserProfileCommand = async (
  input: DeleteUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DeleteUserProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterEcsClusterCommand = async (
  input: DeregisterEcsClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DeregisterEcsCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterEcsClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterElasticIpCommand = async (
  input: DeregisterElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DeregisterElasticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterElasticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterInstanceCommand = async (
  input: DeregisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DeregisterInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterRdsDbInstanceCommand = async (
  input: DeregisterRdsDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DeregisterRdsDbInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterRdsDbInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterVolumeCommand = async (
  input: DeregisterVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DeregisterVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAgentVersionsCommand = async (
  input: DescribeAgentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeAgentVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAgentVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAppsCommand = async (
  input: DescribeAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeApps",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAppsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCommandsCommand = async (
  input: DescribeCommandsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeCommands",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCommandsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDeploymentsCommand = async (
  input: DescribeDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeDeployments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDeploymentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEcsClustersCommand = async (
  input: DescribeEcsClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeEcsClusters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEcsClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeElasticIpsCommand = async (
  input: DescribeElasticIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeElasticIps",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeElasticIpsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeElasticLoadBalancersCommand = async (
  input: DescribeElasticLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeElasticLoadBalancers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeElasticLoadBalancersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInstancesCommand = async (
  input: DescribeInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLayersCommand = async (
  input: DescribeLayersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeLayers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLayersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLoadBasedAutoScalingCommand = async (
  input: DescribeLoadBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeLoadBasedAutoScaling",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLoadBasedAutoScalingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMyUserProfileCommand = async (
  input: DescribeMyUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeMyUserProfile",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOperatingSystemsCommand = async (
  input: DescribeOperatingSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeOperatingSystems",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePermissionsCommand = async (
  input: DescribePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribePermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRaidArraysCommand = async (
  input: DescribeRaidArraysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeRaidArrays",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRaidArraysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRdsDbInstancesCommand = async (
  input: DescribeRdsDbInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeRdsDbInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRdsDbInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeServiceErrorsCommand = async (
  input: DescribeServiceErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeServiceErrors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeServiceErrorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStackProvisioningParametersCommand = async (
  input: DescribeStackProvisioningParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeStackProvisioningParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStackProvisioningParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStacksCommand = async (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeStacks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStackSummaryCommand = async (
  input: DescribeStackSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeStackSummary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStackSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTimeBasedAutoScalingCommand = async (
  input: DescribeTimeBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeTimeBasedAutoScaling",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTimeBasedAutoScalingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUserProfilesCommand = async (
  input: DescribeUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeUserProfiles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUserProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeVolumesCommand = async (
  input: DescribeVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DescribeVolumes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeVolumesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachElasticLoadBalancerCommand = async (
  input: DetachElasticLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DetachElasticLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachElasticLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateElasticIpCommand = async (
  input: DisassociateElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.DisassociateElasticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateElasticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetHostnameSuggestionCommand = async (
  input: GetHostnameSuggestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.GetHostnameSuggestion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetHostnameSuggestionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GrantAccessCommand = async (
  input: GrantAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.GrantAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GrantAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.ListTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RebootInstanceCommand = async (
  input: RebootInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.RebootInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RebootInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterEcsClusterCommand = async (
  input: RegisterEcsClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.RegisterEcsCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterEcsClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterElasticIpCommand = async (
  input: RegisterElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.RegisterElasticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterElasticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterInstanceCommand = async (
  input: RegisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.RegisterInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterRdsDbInstanceCommand = async (
  input: RegisterRdsDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.RegisterRdsDbInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterRdsDbInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterVolumeCommand = async (
  input: RegisterVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.RegisterVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetLoadBasedAutoScalingCommand = async (
  input: SetLoadBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.SetLoadBasedAutoScaling",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetLoadBasedAutoScalingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetPermissionCommand = async (
  input: SetPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.SetPermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetTimeBasedAutoScalingCommand = async (
  input: SetTimeBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.SetTimeBasedAutoScaling",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetTimeBasedAutoScalingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartInstanceCommand = async (
  input: StartInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.StartInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartStackCommand = async (
  input: StartStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.StartStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopInstanceCommand = async (
  input: StopInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.StopInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopStackCommand = async (
  input: StopStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.StopStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UnassignInstanceCommand = async (
  input: UnassignInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UnassignInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UnassignInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UnassignVolumeCommand = async (
  input: UnassignVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UnassignVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UnassignVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAppCommand = async (
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UpdateApp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateElasticIpCommand = async (
  input: UpdateElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UpdateElasticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateElasticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateInstanceCommand = async (
  input: UpdateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UpdateInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLayerCommand = async (
  input: UpdateLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UpdateLayer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLayerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMyUserProfileCommand = async (
  input: UpdateMyUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UpdateMyUserProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMyUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRdsDbInstanceCommand = async (
  input: UpdateRdsDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UpdateRdsDbInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRdsDbInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateStackCommand = async (
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UpdateStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateUserProfileCommand = async (
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UpdateUserProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVolumeCommand = async (
  input: UpdateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorks_20130218.UpdateVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssignInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssignInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssignInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssignInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssignVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssignVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssignVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssignVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateElasticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateElasticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AttachElasticLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachElasticLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AttachElasticLoadBalancerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachElasticLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachElasticLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachElasticLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CloneStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CloneStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CloneStackResult(data, context);
  const response: CloneStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CloneStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAppResult(data, context);
  const response: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeploymentResult(data, context);
  const response: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstanceResult(data, context);
  const response: CreateInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLayerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLayerResult(data, context);
  const response: CreateLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLayerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLayerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStackResult(data, context);
  const response: CreateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserProfileResult(data, context);
  const response: CreateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAppCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLayerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLayerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterEcsClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterEcsClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterEcsClusterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterEcsClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterEcsClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterEcsClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterElasticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterElasticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterRdsDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRdsDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterRdsDbInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterRdsDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterRdsDbInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRdsDbInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAgentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAgentVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAgentVersionsResult(data, context);
  const response: DescribeAgentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAgentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAppsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAppsResult(data, context);
  const response: DescribeAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAppsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeCommandsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommandsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCommandsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCommandsResult(data, context);
  const response: DescribeCommandsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCommandsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommandsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDeploymentsResult(data, context);
  const response: DescribeDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEcsClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEcsClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEcsClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEcsClustersResult(data, context);
  const response: DescribeEcsClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEcsClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEcsClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeElasticIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticIpsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeElasticIpsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeElasticIpsResult(data, context);
  const response: DescribeElasticIpsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeElasticIpsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticIpsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeElasticLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeElasticLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeElasticLoadBalancersResult(data, context);
  const response: DescribeElasticLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeElasticLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeInstancesResult(data, context);
  const response: DescribeInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLayersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLayersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLayersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLayersResult(data, context);
  const response: DescribeLayersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLayersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLayersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLoadBasedAutoScalingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLoadBasedAutoScalingResult(data, context);
  const response: DescribeLoadBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLoadBasedAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBasedAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMyUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMyUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMyUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMyUserProfileResult(data, context);
  const response: DescribeMyUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMyUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMyUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1DescribeOperatingSystemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOperatingSystemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeOperatingSystemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOperatingSystemsResponse(data, context);
  const response: DescribeOperatingSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOperatingSystemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOperatingSystemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1DescribePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePermissionsResult(data, context);
  const response: DescribePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRaidArraysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRaidArraysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRaidArraysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRaidArraysResult(data, context);
  const response: DescribeRaidArraysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRaidArraysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRaidArraysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRdsDbInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRdsDbInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRdsDbInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRdsDbInstancesResult(data, context);
  const response: DescribeRdsDbInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRdsDbInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRdsDbInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeServiceErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceErrorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeServiceErrorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServiceErrorsResult(data, context);
  const response: DescribeServiceErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeServiceErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeStackProvisioningParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackProvisioningParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStackProvisioningParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStackProvisioningParametersResult(data, context);
  const response: DescribeStackProvisioningParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStackProvisioningParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackProvisioningParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStacksResult(data, context);
  const response: DescribeStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeStackSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStackSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStackSummaryResult(data, context);
  const response: DescribeStackSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStackSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTimeBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTimeBasedAutoScalingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTimeBasedAutoScalingResult(data, context);
  const response: DescribeTimeBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTimeBasedAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeBasedAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeUserProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUserProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserProfilesResult(data, context);
  const response: DescribeUserProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUserProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeVolumesResult(data, context);
  const response: DescribeVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetachElasticLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachElasticLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetachElasticLoadBalancerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachElasticLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachElasticLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachElasticLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateElasticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateElasticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetHostnameSuggestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostnameSuggestionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetHostnameSuggestionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetHostnameSuggestionResult(data, context);
  const response: GetHostnameSuggestionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetHostnameSuggestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostnameSuggestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GrantAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GrantAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GrantAccessResult(data, context);
  const response: GrantAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GrantAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResult(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RebootInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RebootInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RebootInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RebootInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterEcsClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterEcsClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterEcsClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterEcsClusterResult(data, context);
  const response: RegisterEcsClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterEcsClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterEcsClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterElasticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterElasticIpResult(data, context);
  const response: RegisterElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterElasticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterElasticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterInstanceResult(data, context);
  const response: RegisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterRdsDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRdsDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterRdsDbInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterRdsDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterRdsDbInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRdsDbInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterVolumeResult(data, context);
  const response: RegisterVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SetLoadBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetLoadBasedAutoScalingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetLoadBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetLoadBasedAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBasedAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SetPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetPermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SetTimeBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTimeBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetTimeBasedAutoScalingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTimeBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetTimeBasedAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTimeBasedAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UnassignInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnassignInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UnassignInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnassignInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UnassignInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnassignInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UnassignVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnassignVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UnassignVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnassignVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UnassignVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnassignVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAppCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateElasticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLayerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLayerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLayerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateMyUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMyUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMyUserProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateMyUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMyUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMyUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateRdsDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRdsDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRdsDbInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateRdsDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRdsDbInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRdsDbInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateUserProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AppAttributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [AppAttributesKeys | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1AssignInstanceRequest = (input: AssignInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.LayerIds != null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
  };
};

const serializeAws_json1_1AssignVolumeRequest = (input: AssignVolumeRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1AssociateElasticIpRequest = (
  input: AssociateElasticIpRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1AttachElasticLoadBalancerRequest = (
  input: AttachElasticLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ElasticLoadBalancerName != null && { ElasticLoadBalancerName: input.ElasticLoadBalancerName }),
    ...(input.LayerId != null && { LayerId: input.LayerId }),
  };
};

const serializeAws_json1_1AutoScalingThresholds = (input: AutoScalingThresholds, context: __SerdeContext): any => {
  return {
    ...(input.Alarms != null && { Alarms: serializeAws_json1_1Strings(input.Alarms, context) }),
    ...(input.CpuThreshold != null && { CpuThreshold: __serializeFloat(input.CpuThreshold) }),
    ...(input.IgnoreMetricsTime != null && { IgnoreMetricsTime: input.IgnoreMetricsTime }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.LoadThreshold != null && { LoadThreshold: __serializeFloat(input.LoadThreshold) }),
    ...(input.MemoryThreshold != null && { MemoryThreshold: __serializeFloat(input.MemoryThreshold) }),
    ...(input.ThresholdsWaitTime != null && { ThresholdsWaitTime: input.ThresholdsWaitTime }),
  };
};

const serializeAws_json1_1BlockDeviceMapping = (input: BlockDeviceMapping, context: __SerdeContext): any => {
  return {
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
    ...(input.Ebs != null && { Ebs: serializeAws_json1_1EbsBlockDevice(input.Ebs, context) }),
    ...(input.NoDevice != null && { NoDevice: input.NoDevice }),
    ...(input.VirtualName != null && { VirtualName: input.VirtualName }),
  };
};

const serializeAws_json1_1BlockDeviceMappings = (input: BlockDeviceMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1BlockDeviceMapping(entry, context);
    });
};

const serializeAws_json1_1ChefConfiguration = (input: ChefConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BerkshelfVersion != null && { BerkshelfVersion: input.BerkshelfVersion }),
    ...(input.ManageBerkshelf != null && { ManageBerkshelf: input.ManageBerkshelf }),
  };
};

const serializeAws_json1_1CloneStackRequest = (input: CloneStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.Attributes != null && { Attributes: serializeAws_json1_1StackAttributes(input.Attributes, context) }),
    ...(input.ChefConfiguration != null && {
      ChefConfiguration: serializeAws_json1_1ChefConfiguration(input.ChefConfiguration, context),
    }),
    ...(input.CloneAppIds != null && { CloneAppIds: serializeAws_json1_1Strings(input.CloneAppIds, context) }),
    ...(input.ClonePermissions != null && { ClonePermissions: input.ClonePermissions }),
    ...(input.ConfigurationManager != null && {
      ConfigurationManager: serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context),
    }),
    ...(input.CustomCookbooksSource != null && {
      CustomCookbooksSource: serializeAws_json1_1Source(input.CustomCookbooksSource, context),
    }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.DefaultAvailabilityZone != null && { DefaultAvailabilityZone: input.DefaultAvailabilityZone }),
    ...(input.DefaultInstanceProfileArn != null && { DefaultInstanceProfileArn: input.DefaultInstanceProfileArn }),
    ...(input.DefaultOs != null && { DefaultOs: input.DefaultOs }),
    ...(input.DefaultRootDeviceType != null && { DefaultRootDeviceType: input.DefaultRootDeviceType }),
    ...(input.DefaultSshKeyName != null && { DefaultSshKeyName: input.DefaultSshKeyName }),
    ...(input.DefaultSubnetId != null && { DefaultSubnetId: input.DefaultSubnetId }),
    ...(input.HostnameTheme != null && { HostnameTheme: input.HostnameTheme }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.SourceStackId != null && { SourceStackId: input.SourceStackId }),
    ...(input.UseCustomCookbooks != null && { UseCustomCookbooks: input.UseCustomCookbooks }),
    ...(input.UseOpsworksSecurityGroups != null && { UseOpsworksSecurityGroups: input.UseOpsworksSecurityGroups }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_json1_1CloudWatchLogsConfiguration = (
  input: CloudWatchLogsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.LogStreams != null && {
      LogStreams: serializeAws_json1_1CloudWatchLogsLogStreams(input.LogStreams, context),
    }),
  };
};

const serializeAws_json1_1CloudWatchLogsLogStream = (input: CloudWatchLogsLogStream, context: __SerdeContext): any => {
  return {
    ...(input.BatchCount != null && { BatchCount: input.BatchCount }),
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.BufferDuration != null && { BufferDuration: input.BufferDuration }),
    ...(input.DatetimeFormat != null && { DatetimeFormat: input.DatetimeFormat }),
    ...(input.Encoding != null && { Encoding: input.Encoding }),
    ...(input.File != null && { File: input.File }),
    ...(input.FileFingerprintLines != null && { FileFingerprintLines: input.FileFingerprintLines }),
    ...(input.InitialPosition != null && { InitialPosition: input.InitialPosition }),
    ...(input.LogGroupName != null && { LogGroupName: input.LogGroupName }),
    ...(input.MultiLineStartPattern != null && { MultiLineStartPattern: input.MultiLineStartPattern }),
    ...(input.TimeZone != null && { TimeZone: input.TimeZone }),
  };
};

const serializeAws_json1_1CloudWatchLogsLogStreams = (
  input: CloudWatchLogsLogStream[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CloudWatchLogsLogStream(entry, context);
    });
};

const serializeAws_json1_1CreateAppRequest = (input: CreateAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppSource != null && { AppSource: serializeAws_json1_1Source(input.AppSource, context) }),
    ...(input.Attributes != null && { Attributes: serializeAws_json1_1AppAttributes(input.Attributes, context) }),
    ...(input.DataSources != null && { DataSources: serializeAws_json1_1DataSources(input.DataSources, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Domains != null && { Domains: serializeAws_json1_1Strings(input.Domains, context) }),
    ...(input.EnableSsl != null && { EnableSsl: input.EnableSsl }),
    ...(input.Environment != null && {
      Environment: serializeAws_json1_1EnvironmentVariables(input.Environment, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Shortname != null && { Shortname: input.Shortname }),
    ...(input.SslConfiguration != null && {
      SslConfiguration: serializeAws_json1_1SslConfiguration(input.SslConfiguration, context),
    }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1CreateDeploymentRequest = (input: CreateDeploymentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppId != null && { AppId: input.AppId }),
    ...(input.Command != null && { Command: serializeAws_json1_1DeploymentCommand(input.Command, context) }),
    ...(input.Comment != null && { Comment: input.Comment }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.InstanceIds != null && { InstanceIds: serializeAws_json1_1Strings(input.InstanceIds, context) }),
    ...(input.LayerIds != null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1CreateInstanceRequest = (input: CreateInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.AmiId != null && { AmiId: input.AmiId }),
    ...(input.Architecture != null && { Architecture: input.Architecture }),
    ...(input.AutoScalingType != null && { AutoScalingType: input.AutoScalingType }),
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.BlockDeviceMappings != null && {
      BlockDeviceMappings: serializeAws_json1_1BlockDeviceMappings(input.BlockDeviceMappings, context),
    }),
    ...(input.EbsOptimized != null && { EbsOptimized: input.EbsOptimized }),
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.InstallUpdatesOnBoot != null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.LayerIds != null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
    ...(input.Os != null && { Os: input.Os }),
    ...(input.RootDeviceType != null && { RootDeviceType: input.RootDeviceType }),
    ...(input.SshKeyName != null && { SshKeyName: input.SshKeyName }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
    ...(input.Tenancy != null && { Tenancy: input.Tenancy }),
    ...(input.VirtualizationType != null && { VirtualizationType: input.VirtualizationType }),
  };
};

const serializeAws_json1_1CreateLayerRequest = (input: CreateLayerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: serializeAws_json1_1LayerAttributes(input.Attributes, context) }),
    ...(input.AutoAssignElasticIps != null && { AutoAssignElasticIps: input.AutoAssignElasticIps }),
    ...(input.AutoAssignPublicIps != null && { AutoAssignPublicIps: input.AutoAssignPublicIps }),
    ...(input.CloudWatchLogsConfiguration != null && {
      CloudWatchLogsConfiguration: serializeAws_json1_1CloudWatchLogsConfiguration(
        input.CloudWatchLogsConfiguration,
        context
      ),
    }),
    ...(input.CustomInstanceProfileArn != null && { CustomInstanceProfileArn: input.CustomInstanceProfileArn }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.CustomRecipes != null && { CustomRecipes: serializeAws_json1_1Recipes(input.CustomRecipes, context) }),
    ...(input.CustomSecurityGroupIds != null && {
      CustomSecurityGroupIds: serializeAws_json1_1Strings(input.CustomSecurityGroupIds, context),
    }),
    ...(input.EnableAutoHealing != null && { EnableAutoHealing: input.EnableAutoHealing }),
    ...(input.InstallUpdatesOnBoot != null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
    ...(input.LifecycleEventConfiguration != null && {
      LifecycleEventConfiguration: serializeAws_json1_1LifecycleEventConfiguration(
        input.LifecycleEventConfiguration,
        context
      ),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Packages != null && { Packages: serializeAws_json1_1Strings(input.Packages, context) }),
    ...(input.Shortname != null && { Shortname: input.Shortname }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.UseEbsOptimizedInstances != null && { UseEbsOptimizedInstances: input.UseEbsOptimizedInstances }),
    ...(input.VolumeConfigurations != null && {
      VolumeConfigurations: serializeAws_json1_1VolumeConfigurations(input.VolumeConfigurations, context),
    }),
  };
};

const serializeAws_json1_1CreateStackRequest = (input: CreateStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.Attributes != null && { Attributes: serializeAws_json1_1StackAttributes(input.Attributes, context) }),
    ...(input.ChefConfiguration != null && {
      ChefConfiguration: serializeAws_json1_1ChefConfiguration(input.ChefConfiguration, context),
    }),
    ...(input.ConfigurationManager != null && {
      ConfigurationManager: serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context),
    }),
    ...(input.CustomCookbooksSource != null && {
      CustomCookbooksSource: serializeAws_json1_1Source(input.CustomCookbooksSource, context),
    }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.DefaultAvailabilityZone != null && { DefaultAvailabilityZone: input.DefaultAvailabilityZone }),
    ...(input.DefaultInstanceProfileArn != null && { DefaultInstanceProfileArn: input.DefaultInstanceProfileArn }),
    ...(input.DefaultOs != null && { DefaultOs: input.DefaultOs }),
    ...(input.DefaultRootDeviceType != null && { DefaultRootDeviceType: input.DefaultRootDeviceType }),
    ...(input.DefaultSshKeyName != null && { DefaultSshKeyName: input.DefaultSshKeyName }),
    ...(input.DefaultSubnetId != null && { DefaultSubnetId: input.DefaultSubnetId }),
    ...(input.HostnameTheme != null && { HostnameTheme: input.HostnameTheme }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.UseCustomCookbooks != null && { UseCustomCookbooks: input.UseCustomCookbooks }),
    ...(input.UseOpsworksSecurityGroups != null && { UseOpsworksSecurityGroups: input.UseOpsworksSecurityGroups }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_json1_1CreateUserProfileRequest = (
  input: CreateUserProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowSelfManagement != null && { AllowSelfManagement: input.AllowSelfManagement }),
    ...(input.IamUserArn != null && { IamUserArn: input.IamUserArn }),
    ...(input.SshPublicKey != null && { SshPublicKey: input.SshPublicKey }),
    ...(input.SshUsername != null && { SshUsername: input.SshUsername }),
  };
};

const serializeAws_json1_1DailyAutoScalingSchedule = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1DataSource = (input: DataSource, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DataSources = (input: DataSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DataSource(entry, context);
    });
};

const serializeAws_json1_1DeleteAppRequest = (input: DeleteAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppId != null && { AppId: input.AppId }),
  };
};

const serializeAws_json1_1DeleteInstanceRequest = (input: DeleteInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteElasticIp != null && { DeleteElasticIp: input.DeleteElasticIp }),
    ...(input.DeleteVolumes != null && { DeleteVolumes: input.DeleteVolumes }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1DeleteLayerRequest = (input: DeleteLayerRequest, context: __SerdeContext): any => {
  return {
    ...(input.LayerId != null && { LayerId: input.LayerId }),
  };
};

const serializeAws_json1_1DeleteStackRequest = (input: DeleteStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DeleteUserProfileRequest = (
  input: DeleteUserProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IamUserArn != null && { IamUserArn: input.IamUserArn }),
  };
};

const serializeAws_json1_1DeploymentCommand = (input: DeploymentCommand, context: __SerdeContext): any => {
  return {
    ...(input.Args != null && { Args: serializeAws_json1_1DeploymentCommandArgs(input.Args, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeploymentCommandArgs = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1Strings(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1DeregisterEcsClusterRequest = (
  input: DeregisterEcsClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EcsClusterArn != null && { EcsClusterArn: input.EcsClusterArn }),
  };
};

const serializeAws_json1_1DeregisterElasticIpRequest = (
  input: DeregisterElasticIpRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
  };
};

const serializeAws_json1_1DeregisterInstanceRequest = (
  input: DeregisterInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1DeregisterRdsDbInstanceRequest = (
  input: DeregisterRdsDbInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RdsDbInstanceArn != null && { RdsDbInstanceArn: input.RdsDbInstanceArn }),
  };
};

const serializeAws_json1_1DeregisterVolumeRequest = (input: DeregisterVolumeRequest, context: __SerdeContext): any => {
  return {
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1DescribeAgentVersionsRequest = (
  input: DescribeAgentVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationManager != null && {
      ConfigurationManager: serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context),
    }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeAppsRequest = (input: DescribeAppsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppIds != null && { AppIds: serializeAws_json1_1Strings(input.AppIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeCommandsRequest = (input: DescribeCommandsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CommandIds != null && { CommandIds: serializeAws_json1_1Strings(input.CommandIds, context) }),
    ...(input.DeploymentId != null && { DeploymentId: input.DeploymentId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1DescribeDeploymentsRequest = (
  input: DescribeDeploymentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppId != null && { AppId: input.AppId }),
    ...(input.DeploymentIds != null && { DeploymentIds: serializeAws_json1_1Strings(input.DeploymentIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeEcsClustersRequest = (
  input: DescribeEcsClustersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EcsClusterArns != null && { EcsClusterArns: serializeAws_json1_1Strings(input.EcsClusterArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeElasticIpsRequest = (
  input: DescribeElasticIpsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Ips != null && { Ips: serializeAws_json1_1Strings(input.Ips, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeElasticLoadBalancersRequest = (
  input: DescribeElasticLoadBalancersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LayerIds != null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeInstancesRequest = (
  input: DescribeInstancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceIds != null && { InstanceIds: serializeAws_json1_1Strings(input.InstanceIds, context) }),
    ...(input.LayerId != null && { LayerId: input.LayerId }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeLayersRequest = (input: DescribeLayersRequest, context: __SerdeContext): any => {
  return {
    ...(input.LayerIds != null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeLoadBasedAutoScalingRequest = (
  input: DescribeLoadBasedAutoScalingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LayerIds != null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
  };
};

const serializeAws_json1_1DescribePermissionsRequest = (
  input: DescribePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IamUserArn != null && { IamUserArn: input.IamUserArn }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeRaidArraysRequest = (
  input: DescribeRaidArraysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.RaidArrayIds != null && { RaidArrayIds: serializeAws_json1_1Strings(input.RaidArrayIds, context) }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeRdsDbInstancesRequest = (
  input: DescribeRdsDbInstancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RdsDbInstanceArns != null && {
      RdsDbInstanceArns: serializeAws_json1_1Strings(input.RdsDbInstanceArns, context),
    }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeServiceErrorsRequest = (
  input: DescribeServiceErrorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ServiceErrorIds != null && {
      ServiceErrorIds: serializeAws_json1_1Strings(input.ServiceErrorIds, context),
    }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeStackProvisioningParametersRequest = (
  input: DescribeStackProvisioningParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeStacksRequest = (input: DescribeStacksRequest, context: __SerdeContext): any => {
  return {
    ...(input.StackIds != null && { StackIds: serializeAws_json1_1Strings(input.StackIds, context) }),
  };
};

const serializeAws_json1_1DescribeStackSummaryRequest = (
  input: DescribeStackSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1DescribeTimeBasedAutoScalingRequest = (
  input: DescribeTimeBasedAutoScalingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceIds != null && { InstanceIds: serializeAws_json1_1Strings(input.InstanceIds, context) }),
  };
};

const serializeAws_json1_1DescribeUserProfilesRequest = (
  input: DescribeUserProfilesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IamUserArns != null && { IamUserArns: serializeAws_json1_1Strings(input.IamUserArns, context) }),
  };
};

const serializeAws_json1_1DescribeVolumesRequest = (input: DescribeVolumesRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.RaidArrayId != null && { RaidArrayId: input.RaidArrayId }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.VolumeIds != null && { VolumeIds: serializeAws_json1_1Strings(input.VolumeIds, context) }),
  };
};

const serializeAws_json1_1DetachElasticLoadBalancerRequest = (
  input: DetachElasticLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ElasticLoadBalancerName != null && { ElasticLoadBalancerName: input.ElasticLoadBalancerName }),
    ...(input.LayerId != null && { LayerId: input.LayerId }),
  };
};

const serializeAws_json1_1DisassociateElasticIpRequest = (
  input: DisassociateElasticIpRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
  };
};

const serializeAws_json1_1EbsBlockDevice = (input: EbsBlockDevice, context: __SerdeContext): any => {
  return {
    ...(input.DeleteOnTermination != null && { DeleteOnTermination: input.DeleteOnTermination }),
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
    ...(input.VolumeSize != null && { VolumeSize: input.VolumeSize }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_json1_1EnvironmentVariable = (input: EnvironmentVariable, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Secure != null && { Secure: input.Secure }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1EnvironmentVariables = (input: EnvironmentVariable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EnvironmentVariable(entry, context);
    });
};

const serializeAws_json1_1GetHostnameSuggestionRequest = (
  input: GetHostnameSuggestionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LayerId != null && { LayerId: input.LayerId }),
  };
};

const serializeAws_json1_1GrantAccessRequest = (input: GrantAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ValidForInMinutes != null && { ValidForInMinutes: input.ValidForInMinutes }),
  };
};

const serializeAws_json1_1InstanceIdentity = (input: InstanceIdentity, context: __SerdeContext): any => {
  return {
    ...(input.Document != null && { Document: input.Document }),
    ...(input.Signature != null && { Signature: input.Signature }),
  };
};

const serializeAws_json1_1LayerAttributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [LayerAttributesKeys | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1LifecycleEventConfiguration = (
  input: LifecycleEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Shutdown != null && {
      Shutdown: serializeAws_json1_1ShutdownEventConfiguration(input.Shutdown, context),
    }),
  };
};

const serializeAws_json1_1ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1RebootInstanceRequest = (input: RebootInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1Recipes = (input: Recipes, context: __SerdeContext): any => {
  return {
    ...(input.Configure != null && { Configure: serializeAws_json1_1Strings(input.Configure, context) }),
    ...(input.Deploy != null && { Deploy: serializeAws_json1_1Strings(input.Deploy, context) }),
    ...(input.Setup != null && { Setup: serializeAws_json1_1Strings(input.Setup, context) }),
    ...(input.Shutdown != null && { Shutdown: serializeAws_json1_1Strings(input.Shutdown, context) }),
    ...(input.Undeploy != null && { Undeploy: serializeAws_json1_1Strings(input.Undeploy, context) }),
  };
};

const serializeAws_json1_1RegisterEcsClusterRequest = (
  input: RegisterEcsClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EcsClusterArn != null && { EcsClusterArn: input.EcsClusterArn }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1RegisterElasticIpRequest = (
  input: RegisterElasticIpRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1RegisterInstanceRequest = (input: RegisterInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.InstanceIdentity != null && {
      InstanceIdentity: serializeAws_json1_1InstanceIdentity(input.InstanceIdentity, context),
    }),
    ...(input.PrivateIp != null && { PrivateIp: input.PrivateIp }),
    ...(input.PublicIp != null && { PublicIp: input.PublicIp }),
    ...(input.RsaPublicKey != null && { RsaPublicKey: input.RsaPublicKey }),
    ...(input.RsaPublicKeyFingerprint != null && { RsaPublicKeyFingerprint: input.RsaPublicKeyFingerprint }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1RegisterRdsDbInstanceRequest = (
  input: RegisterRdsDbInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DbPassword != null && { DbPassword: input.DbPassword }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.RdsDbInstanceArn != null && { RdsDbInstanceArn: input.RdsDbInstanceArn }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1RegisterVolumeRequest = (input: RegisterVolumeRequest, context: __SerdeContext): any => {
  return {
    ...(input.Ec2VolumeId != null && { Ec2VolumeId: input.Ec2VolumeId }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1SetLoadBasedAutoScalingRequest = (
  input: SetLoadBasedAutoScalingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DownScaling != null && {
      DownScaling: serializeAws_json1_1AutoScalingThresholds(input.DownScaling, context),
    }),
    ...(input.Enable != null && { Enable: input.Enable }),
    ...(input.LayerId != null && { LayerId: input.LayerId }),
    ...(input.UpScaling != null && { UpScaling: serializeAws_json1_1AutoScalingThresholds(input.UpScaling, context) }),
  };
};

const serializeAws_json1_1SetPermissionRequest = (input: SetPermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowSsh != null && { AllowSsh: input.AllowSsh }),
    ...(input.AllowSudo != null && { AllowSudo: input.AllowSudo }),
    ...(input.IamUserArn != null && { IamUserArn: input.IamUserArn }),
    ...(input.Level != null && { Level: input.Level }),
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1SetTimeBasedAutoScalingRequest = (
  input: SetTimeBasedAutoScalingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingSchedule != null && {
      AutoScalingSchedule: serializeAws_json1_1WeeklyAutoScalingSchedule(input.AutoScalingSchedule, context),
    }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1ShutdownEventConfiguration = (
  input: ShutdownEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DelayUntilElbConnectionsDrained != null && {
      DelayUntilElbConnectionsDrained: input.DelayUntilElbConnectionsDrained,
    }),
    ...(input.ExecutionTimeout != null && { ExecutionTimeout: input.ExecutionTimeout }),
  };
};

const serializeAws_json1_1Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Revision != null && { Revision: input.Revision }),
    ...(input.SshKey != null && { SshKey: input.SshKey }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Url != null && { Url: input.Url }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_json1_1SslConfiguration = (input: SslConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.Chain != null && { Chain: input.Chain }),
    ...(input.PrivateKey != null && { PrivateKey: input.PrivateKey }),
  };
};

const serializeAws_json1_1StackAttributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [StackAttributesKeys | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1StackConfigurationManager = (
  input: StackConfigurationManager,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1StartInstanceRequest = (input: StartInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1StartStackRequest = (input: StartStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1StopInstanceRequest = (input: StopInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Force != null && { Force: input.Force }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1StopStackRequest = (input: StopStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.StackId != null && { StackId: input.StackId }),
  };
};

const serializeAws_json1_1Strings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1UnassignInstanceRequest = (input: UnassignInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1UnassignVolumeRequest = (input: UnassignVolumeRequest, context: __SerdeContext): any => {
  return {
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAppRequest = (input: UpdateAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppId != null && { AppId: input.AppId }),
    ...(input.AppSource != null && { AppSource: serializeAws_json1_1Source(input.AppSource, context) }),
    ...(input.Attributes != null && { Attributes: serializeAws_json1_1AppAttributes(input.Attributes, context) }),
    ...(input.DataSources != null && { DataSources: serializeAws_json1_1DataSources(input.DataSources, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Domains != null && { Domains: serializeAws_json1_1Strings(input.Domains, context) }),
    ...(input.EnableSsl != null && { EnableSsl: input.EnableSsl }),
    ...(input.Environment != null && {
      Environment: serializeAws_json1_1EnvironmentVariables(input.Environment, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SslConfiguration != null && {
      SslConfiguration: serializeAws_json1_1SslConfiguration(input.SslConfiguration, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1UpdateElasticIpRequest = (input: UpdateElasticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateInstanceRequest = (input: UpdateInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.AmiId != null && { AmiId: input.AmiId }),
    ...(input.Architecture != null && { Architecture: input.Architecture }),
    ...(input.AutoScalingType != null && { AutoScalingType: input.AutoScalingType }),
    ...(input.EbsOptimized != null && { EbsOptimized: input.EbsOptimized }),
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.InstallUpdatesOnBoot != null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.LayerIds != null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
    ...(input.Os != null && { Os: input.Os }),
    ...(input.SshKeyName != null && { SshKeyName: input.SshKeyName }),
  };
};

const serializeAws_json1_1UpdateLayerRequest = (input: UpdateLayerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: serializeAws_json1_1LayerAttributes(input.Attributes, context) }),
    ...(input.AutoAssignElasticIps != null && { AutoAssignElasticIps: input.AutoAssignElasticIps }),
    ...(input.AutoAssignPublicIps != null && { AutoAssignPublicIps: input.AutoAssignPublicIps }),
    ...(input.CloudWatchLogsConfiguration != null && {
      CloudWatchLogsConfiguration: serializeAws_json1_1CloudWatchLogsConfiguration(
        input.CloudWatchLogsConfiguration,
        context
      ),
    }),
    ...(input.CustomInstanceProfileArn != null && { CustomInstanceProfileArn: input.CustomInstanceProfileArn }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.CustomRecipes != null && { CustomRecipes: serializeAws_json1_1Recipes(input.CustomRecipes, context) }),
    ...(input.CustomSecurityGroupIds != null && {
      CustomSecurityGroupIds: serializeAws_json1_1Strings(input.CustomSecurityGroupIds, context),
    }),
    ...(input.EnableAutoHealing != null && { EnableAutoHealing: input.EnableAutoHealing }),
    ...(input.InstallUpdatesOnBoot != null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
    ...(input.LayerId != null && { LayerId: input.LayerId }),
    ...(input.LifecycleEventConfiguration != null && {
      LifecycleEventConfiguration: serializeAws_json1_1LifecycleEventConfiguration(
        input.LifecycleEventConfiguration,
        context
      ),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Packages != null && { Packages: serializeAws_json1_1Strings(input.Packages, context) }),
    ...(input.Shortname != null && { Shortname: input.Shortname }),
    ...(input.UseEbsOptimizedInstances != null && { UseEbsOptimizedInstances: input.UseEbsOptimizedInstances }),
    ...(input.VolumeConfigurations != null && {
      VolumeConfigurations: serializeAws_json1_1VolumeConfigurations(input.VolumeConfigurations, context),
    }),
  };
};

const serializeAws_json1_1UpdateMyUserProfileRequest = (
  input: UpdateMyUserProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SshPublicKey != null && { SshPublicKey: input.SshPublicKey }),
  };
};

const serializeAws_json1_1UpdateRdsDbInstanceRequest = (
  input: UpdateRdsDbInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DbPassword != null && { DbPassword: input.DbPassword }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.RdsDbInstanceArn != null && { RdsDbInstanceArn: input.RdsDbInstanceArn }),
  };
};

const serializeAws_json1_1UpdateStackRequest = (input: UpdateStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.Attributes != null && { Attributes: serializeAws_json1_1StackAttributes(input.Attributes, context) }),
    ...(input.ChefConfiguration != null && {
      ChefConfiguration: serializeAws_json1_1ChefConfiguration(input.ChefConfiguration, context),
    }),
    ...(input.ConfigurationManager != null && {
      ConfigurationManager: serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context),
    }),
    ...(input.CustomCookbooksSource != null && {
      CustomCookbooksSource: serializeAws_json1_1Source(input.CustomCookbooksSource, context),
    }),
    ...(input.CustomJson != null && { CustomJson: input.CustomJson }),
    ...(input.DefaultAvailabilityZone != null && { DefaultAvailabilityZone: input.DefaultAvailabilityZone }),
    ...(input.DefaultInstanceProfileArn != null && { DefaultInstanceProfileArn: input.DefaultInstanceProfileArn }),
    ...(input.DefaultOs != null && { DefaultOs: input.DefaultOs }),
    ...(input.DefaultRootDeviceType != null && { DefaultRootDeviceType: input.DefaultRootDeviceType }),
    ...(input.DefaultSshKeyName != null && { DefaultSshKeyName: input.DefaultSshKeyName }),
    ...(input.DefaultSubnetId != null && { DefaultSubnetId: input.DefaultSubnetId }),
    ...(input.HostnameTheme != null && { HostnameTheme: input.HostnameTheme }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.UseCustomCookbooks != null && { UseCustomCookbooks: input.UseCustomCookbooks }),
    ...(input.UseOpsworksSecurityGroups != null && { UseOpsworksSecurityGroups: input.UseOpsworksSecurityGroups }),
  };
};

const serializeAws_json1_1UpdateUserProfileRequest = (
  input: UpdateUserProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowSelfManagement != null && { AllowSelfManagement: input.AllowSelfManagement }),
    ...(input.IamUserArn != null && { IamUserArn: input.IamUserArn }),
    ...(input.SshPublicKey != null && { SshPublicKey: input.SshPublicKey }),
    ...(input.SshUsername != null && { SshUsername: input.SshUsername }),
  };
};

const serializeAws_json1_1UpdateVolumeRequest = (input: UpdateVolumeRequest, context: __SerdeContext): any => {
  return {
    ...(input.MountPoint != null && { MountPoint: input.MountPoint }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1VolumeConfiguration = (input: VolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.MountPoint != null && { MountPoint: input.MountPoint }),
    ...(input.NumberOfDisks != null && { NumberOfDisks: input.NumberOfDisks }),
    ...(input.RaidLevel != null && { RaidLevel: input.RaidLevel }),
    ...(input.Size != null && { Size: input.Size }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_json1_1VolumeConfigurations = (input: VolumeConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1VolumeConfiguration(entry, context);
    });
};

const serializeAws_json1_1WeeklyAutoScalingSchedule = (
  input: WeeklyAutoScalingSchedule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Friday != null && { Friday: serializeAws_json1_1DailyAutoScalingSchedule(input.Friday, context) }),
    ...(input.Monday != null && { Monday: serializeAws_json1_1DailyAutoScalingSchedule(input.Monday, context) }),
    ...(input.Saturday != null && { Saturday: serializeAws_json1_1DailyAutoScalingSchedule(input.Saturday, context) }),
    ...(input.Sunday != null && { Sunday: serializeAws_json1_1DailyAutoScalingSchedule(input.Sunday, context) }),
    ...(input.Thursday != null && { Thursday: serializeAws_json1_1DailyAutoScalingSchedule(input.Thursday, context) }),
    ...(input.Tuesday != null && { Tuesday: serializeAws_json1_1DailyAutoScalingSchedule(input.Tuesday, context) }),
    ...(input.Wednesday != null && {
      Wednesday: serializeAws_json1_1DailyAutoScalingSchedule(input.Wednesday, context),
    }),
  };
};

const deserializeAws_json1_1AgentVersion = (output: any, context: __SerdeContext): AgentVersion => {
  return {
    ConfigurationManager:
      output.ConfigurationManager != null
        ? deserializeAws_json1_1StackConfigurationManager(output.ConfigurationManager, context)
        : undefined,
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1AgentVersions = (output: any, context: __SerdeContext): AgentVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AgentVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1App = (output: any, context: __SerdeContext): App => {
  return {
    AppId: __expectString(output.AppId),
    AppSource: output.AppSource != null ? deserializeAws_json1_1Source(output.AppSource, context) : undefined,
    Attributes: output.Attributes != null ? deserializeAws_json1_1AppAttributes(output.Attributes, context) : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    DataSources:
      output.DataSources != null ? deserializeAws_json1_1DataSources(output.DataSources, context) : undefined,
    Description: __expectString(output.Description),
    Domains: output.Domains != null ? deserializeAws_json1_1Strings(output.Domains, context) : undefined,
    EnableSsl: __expectBoolean(output.EnableSsl),
    Environment:
      output.Environment != null ? deserializeAws_json1_1EnvironmentVariables(output.Environment, context) : undefined,
    Name: __expectString(output.Name),
    Shortname: __expectString(output.Shortname),
    SslConfiguration:
      output.SslConfiguration != null
        ? deserializeAws_json1_1SslConfiguration(output.SslConfiguration, context)
        : undefined,
    StackId: __expectString(output.StackId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1AppAttributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [AppAttributesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1Apps = (output: any, context: __SerdeContext): App[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1App(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AutoScalingThresholds = (output: any, context: __SerdeContext): AutoScalingThresholds => {
  return {
    Alarms: output.Alarms != null ? deserializeAws_json1_1Strings(output.Alarms, context) : undefined,
    CpuThreshold: __limitedParseDouble(output.CpuThreshold),
    IgnoreMetricsTime: __expectInt32(output.IgnoreMetricsTime),
    InstanceCount: __expectInt32(output.InstanceCount),
    LoadThreshold: __limitedParseDouble(output.LoadThreshold),
    MemoryThreshold: __limitedParseDouble(output.MemoryThreshold),
    ThresholdsWaitTime: __expectInt32(output.ThresholdsWaitTime),
  } as any;
};

const deserializeAws_json1_1BlockDeviceMapping = (output: any, context: __SerdeContext): BlockDeviceMapping => {
  return {
    DeviceName: __expectString(output.DeviceName),
    Ebs: output.Ebs != null ? deserializeAws_json1_1EbsBlockDevice(output.Ebs, context) : undefined,
    NoDevice: __expectString(output.NoDevice),
    VirtualName: __expectString(output.VirtualName),
  } as any;
};

const deserializeAws_json1_1BlockDeviceMappings = (output: any, context: __SerdeContext): BlockDeviceMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BlockDeviceMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ChefConfiguration = (output: any, context: __SerdeContext): ChefConfiguration => {
  return {
    BerkshelfVersion: __expectString(output.BerkshelfVersion),
    ManageBerkshelf: __expectBoolean(output.ManageBerkshelf),
  } as any;
};

const deserializeAws_json1_1CloneStackResult = (output: any, context: __SerdeContext): CloneStackResult => {
  return {
    StackId: __expectString(output.StackId),
  } as any;
};

const deserializeAws_json1_1CloudWatchLogsConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    LogStreams:
      output.LogStreams != null
        ? deserializeAws_json1_1CloudWatchLogsLogStreams(output.LogStreams, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CloudWatchLogsLogStream = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsLogStream => {
  return {
    BatchCount: __expectInt32(output.BatchCount),
    BatchSize: __expectInt32(output.BatchSize),
    BufferDuration: __expectInt32(output.BufferDuration),
    DatetimeFormat: __expectString(output.DatetimeFormat),
    Encoding: __expectString(output.Encoding),
    File: __expectString(output.File),
    FileFingerprintLines: __expectString(output.FileFingerprintLines),
    InitialPosition: __expectString(output.InitialPosition),
    LogGroupName: __expectString(output.LogGroupName),
    MultiLineStartPattern: __expectString(output.MultiLineStartPattern),
    TimeZone: __expectString(output.TimeZone),
  } as any;
};

const deserializeAws_json1_1CloudWatchLogsLogStreams = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsLogStream[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CloudWatchLogsLogStream(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Command = (output: any, context: __SerdeContext): Command => {
  return {
    AcknowledgedAt: __expectString(output.AcknowledgedAt),
    CommandId: __expectString(output.CommandId),
    CompletedAt: __expectString(output.CompletedAt),
    CreatedAt: __expectString(output.CreatedAt),
    DeploymentId: __expectString(output.DeploymentId),
    ExitCode: __expectInt32(output.ExitCode),
    InstanceId: __expectString(output.InstanceId),
    LogUrl: __expectString(output.LogUrl),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1Commands = (output: any, context: __SerdeContext): Command[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Command(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateAppResult = (output: any, context: __SerdeContext): CreateAppResult => {
  return {
    AppId: __expectString(output.AppId),
  } as any;
};

const deserializeAws_json1_1CreateDeploymentResult = (output: any, context: __SerdeContext): CreateDeploymentResult => {
  return {
    DeploymentId: __expectString(output.DeploymentId),
  } as any;
};

const deserializeAws_json1_1CreateInstanceResult = (output: any, context: __SerdeContext): CreateInstanceResult => {
  return {
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

const deserializeAws_json1_1CreateLayerResult = (output: any, context: __SerdeContext): CreateLayerResult => {
  return {
    LayerId: __expectString(output.LayerId),
  } as any;
};

const deserializeAws_json1_1CreateStackResult = (output: any, context: __SerdeContext): CreateStackResult => {
  return {
    StackId: __expectString(output.StackId),
  } as any;
};

const deserializeAws_json1_1CreateUserProfileResult = (
  output: any,
  context: __SerdeContext
): CreateUserProfileResult => {
  return {
    IamUserArn: __expectString(output.IamUserArn),
  } as any;
};

const deserializeAws_json1_1DailyAutoScalingSchedule = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    Arn: __expectString(output.Arn),
    DatabaseName: __expectString(output.DatabaseName),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataSource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    AppId: __expectString(output.AppId),
    Command: output.Command != null ? deserializeAws_json1_1DeploymentCommand(output.Command, context) : undefined,
    Comment: __expectString(output.Comment),
    CompletedAt: __expectString(output.CompletedAt),
    CreatedAt: __expectString(output.CreatedAt),
    CustomJson: __expectString(output.CustomJson),
    DeploymentId: __expectString(output.DeploymentId),
    Duration: __expectInt32(output.Duration),
    IamUserArn: __expectString(output.IamUserArn),
    InstanceIds: output.InstanceIds != null ? deserializeAws_json1_1Strings(output.InstanceIds, context) : undefined,
    StackId: __expectString(output.StackId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeploymentCommand = (output: any, context: __SerdeContext): DeploymentCommand => {
  return {
    Args: output.Args != null ? deserializeAws_json1_1DeploymentCommandArgs(output.Args, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DeploymentCommandArgs = (
  output: any,
  context: __SerdeContext
): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1Strings(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1Deployments = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Deployment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DescribeAgentVersionsResult = (
  output: any,
  context: __SerdeContext
): DescribeAgentVersionsResult => {
  return {
    AgentVersions:
      output.AgentVersions != null ? deserializeAws_json1_1AgentVersions(output.AgentVersions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAppsResult = (output: any, context: __SerdeContext): DescribeAppsResult => {
  return {
    Apps: output.Apps != null ? deserializeAws_json1_1Apps(output.Apps, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCommandsResult = (output: any, context: __SerdeContext): DescribeCommandsResult => {
  return {
    Commands: output.Commands != null ? deserializeAws_json1_1Commands(output.Commands, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDeploymentsResult = (
  output: any,
  context: __SerdeContext
): DescribeDeploymentsResult => {
  return {
    Deployments:
      output.Deployments != null ? deserializeAws_json1_1Deployments(output.Deployments, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEcsClustersResult = (
  output: any,
  context: __SerdeContext
): DescribeEcsClustersResult => {
  return {
    EcsClusters:
      output.EcsClusters != null ? deserializeAws_json1_1EcsClusters(output.EcsClusters, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeElasticIpsResult = (
  output: any,
  context: __SerdeContext
): DescribeElasticIpsResult => {
  return {
    ElasticIps: output.ElasticIps != null ? deserializeAws_json1_1ElasticIps(output.ElasticIps, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeElasticLoadBalancersResult = (
  output: any,
  context: __SerdeContext
): DescribeElasticLoadBalancersResult => {
  return {
    ElasticLoadBalancers:
      output.ElasticLoadBalancers != null
        ? deserializeAws_json1_1ElasticLoadBalancers(output.ElasticLoadBalancers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeInstancesResult = (
  output: any,
  context: __SerdeContext
): DescribeInstancesResult => {
  return {
    Instances: output.Instances != null ? deserializeAws_json1_1Instances(output.Instances, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeLayersResult = (output: any, context: __SerdeContext): DescribeLayersResult => {
  return {
    Layers: output.Layers != null ? deserializeAws_json1_1Layers(output.Layers, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeLoadBasedAutoScalingResult = (
  output: any,
  context: __SerdeContext
): DescribeLoadBasedAutoScalingResult => {
  return {
    LoadBasedAutoScalingConfigurations:
      output.LoadBasedAutoScalingConfigurations != null
        ? deserializeAws_json1_1LoadBasedAutoScalingConfigurations(output.LoadBasedAutoScalingConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMyUserProfileResult = (
  output: any,
  context: __SerdeContext
): DescribeMyUserProfileResult => {
  return {
    UserProfile:
      output.UserProfile != null ? deserializeAws_json1_1SelfUserProfile(output.UserProfile, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeOperatingSystemsResponse = (
  output: any,
  context: __SerdeContext
): DescribeOperatingSystemsResponse => {
  return {
    OperatingSystems:
      output.OperatingSystems != null
        ? deserializeAws_json1_1OperatingSystems(output.OperatingSystems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePermissionsResult = (
  output: any,
  context: __SerdeContext
): DescribePermissionsResult => {
  return {
    Permissions:
      output.Permissions != null ? deserializeAws_json1_1Permissions(output.Permissions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRaidArraysResult = (
  output: any,
  context: __SerdeContext
): DescribeRaidArraysResult => {
  return {
    RaidArrays: output.RaidArrays != null ? deserializeAws_json1_1RaidArrays(output.RaidArrays, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRdsDbInstancesResult = (
  output: any,
  context: __SerdeContext
): DescribeRdsDbInstancesResult => {
  return {
    RdsDbInstances:
      output.RdsDbInstances != null ? deserializeAws_json1_1RdsDbInstances(output.RdsDbInstances, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeServiceErrorsResult = (
  output: any,
  context: __SerdeContext
): DescribeServiceErrorsResult => {
  return {
    ServiceErrors:
      output.ServiceErrors != null ? deserializeAws_json1_1ServiceErrors(output.ServiceErrors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStackProvisioningParametersResult = (
  output: any,
  context: __SerdeContext
): DescribeStackProvisioningParametersResult => {
  return {
    AgentInstallerUrl: __expectString(output.AgentInstallerUrl),
    Parameters: output.Parameters != null ? deserializeAws_json1_1Parameters(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStacksResult = (output: any, context: __SerdeContext): DescribeStacksResult => {
  return {
    Stacks: output.Stacks != null ? deserializeAws_json1_1Stacks(output.Stacks, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStackSummaryResult = (
  output: any,
  context: __SerdeContext
): DescribeStackSummaryResult => {
  return {
    StackSummary:
      output.StackSummary != null ? deserializeAws_json1_1StackSummary(output.StackSummary, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTimeBasedAutoScalingResult = (
  output: any,
  context: __SerdeContext
): DescribeTimeBasedAutoScalingResult => {
  return {
    TimeBasedAutoScalingConfigurations:
      output.TimeBasedAutoScalingConfigurations != null
        ? deserializeAws_json1_1TimeBasedAutoScalingConfigurations(output.TimeBasedAutoScalingConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeUserProfilesResult = (
  output: any,
  context: __SerdeContext
): DescribeUserProfilesResult => {
  return {
    UserProfiles:
      output.UserProfiles != null ? deserializeAws_json1_1UserProfiles(output.UserProfiles, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeVolumesResult = (output: any, context: __SerdeContext): DescribeVolumesResult => {
  return {
    Volumes: output.Volumes != null ? deserializeAws_json1_1Volumes(output.Volumes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EbsBlockDevice = (output: any, context: __SerdeContext): EbsBlockDevice => {
  return {
    DeleteOnTermination: __expectBoolean(output.DeleteOnTermination),
    Iops: __expectInt32(output.Iops),
    SnapshotId: __expectString(output.SnapshotId),
    VolumeSize: __expectInt32(output.VolumeSize),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_json1_1EcsCluster = (output: any, context: __SerdeContext): EcsCluster => {
  return {
    EcsClusterArn: __expectString(output.EcsClusterArn),
    EcsClusterName: __expectString(output.EcsClusterName),
    RegisteredAt: __expectString(output.RegisteredAt),
    StackId: __expectString(output.StackId),
  } as any;
};

const deserializeAws_json1_1EcsClusters = (output: any, context: __SerdeContext): EcsCluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EcsCluster(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ElasticIp = (output: any, context: __SerdeContext): ElasticIp => {
  return {
    Domain: __expectString(output.Domain),
    InstanceId: __expectString(output.InstanceId),
    Ip: __expectString(output.Ip),
    Name: __expectString(output.Name),
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_json1_1ElasticIps = (output: any, context: __SerdeContext): ElasticIp[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ElasticIp(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ElasticLoadBalancer = (output: any, context: __SerdeContext): ElasticLoadBalancer => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null ? deserializeAws_json1_1Strings(output.AvailabilityZones, context) : undefined,
    DnsName: __expectString(output.DnsName),
    Ec2InstanceIds:
      output.Ec2InstanceIds != null ? deserializeAws_json1_1Strings(output.Ec2InstanceIds, context) : undefined,
    ElasticLoadBalancerName: __expectString(output.ElasticLoadBalancerName),
    LayerId: __expectString(output.LayerId),
    Region: __expectString(output.Region),
    StackId: __expectString(output.StackId),
    SubnetIds: output.SubnetIds != null ? deserializeAws_json1_1Strings(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1ElasticLoadBalancers = (output: any, context: __SerdeContext): ElasticLoadBalancer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ElasticLoadBalancer(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EnvironmentVariable = (output: any, context: __SerdeContext): EnvironmentVariable => {
  return {
    Key: __expectString(output.Key),
    Secure: __expectBoolean(output.Secure),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1EnvironmentVariables = (output: any, context: __SerdeContext): EnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnvironmentVariable(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetHostnameSuggestionResult = (
  output: any,
  context: __SerdeContext
): GetHostnameSuggestionResult => {
  return {
    Hostname: __expectString(output.Hostname),
    LayerId: __expectString(output.LayerId),
  } as any;
};

const deserializeAws_json1_1GrantAccessResult = (output: any, context: __SerdeContext): GrantAccessResult => {
  return {
    TemporaryCredential:
      output.TemporaryCredential != null
        ? deserializeAws_json1_1TemporaryCredential(output.TemporaryCredential, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    AgentVersion: __expectString(output.AgentVersion),
    AmiId: __expectString(output.AmiId),
    Architecture: __expectString(output.Architecture),
    Arn: __expectString(output.Arn),
    AutoScalingType: __expectString(output.AutoScalingType),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    BlockDeviceMappings:
      output.BlockDeviceMappings != null
        ? deserializeAws_json1_1BlockDeviceMappings(output.BlockDeviceMappings, context)
        : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    EbsOptimized: __expectBoolean(output.EbsOptimized),
    Ec2InstanceId: __expectString(output.Ec2InstanceId),
    EcsClusterArn: __expectString(output.EcsClusterArn),
    EcsContainerInstanceArn: __expectString(output.EcsContainerInstanceArn),
    ElasticIp: __expectString(output.ElasticIp),
    Hostname: __expectString(output.Hostname),
    InfrastructureClass: __expectString(output.InfrastructureClass),
    InstallUpdatesOnBoot: __expectBoolean(output.InstallUpdatesOnBoot),
    InstanceId: __expectString(output.InstanceId),
    InstanceProfileArn: __expectString(output.InstanceProfileArn),
    InstanceType: __expectString(output.InstanceType),
    LastServiceErrorId: __expectString(output.LastServiceErrorId),
    LayerIds: output.LayerIds != null ? deserializeAws_json1_1Strings(output.LayerIds, context) : undefined,
    Os: __expectString(output.Os),
    Platform: __expectString(output.Platform),
    PrivateDns: __expectString(output.PrivateDns),
    PrivateIp: __expectString(output.PrivateIp),
    PublicDns: __expectString(output.PublicDns),
    PublicIp: __expectString(output.PublicIp),
    RegisteredBy: __expectString(output.RegisteredBy),
    ReportedAgentVersion: __expectString(output.ReportedAgentVersion),
    ReportedOs: output.ReportedOs != null ? deserializeAws_json1_1ReportedOs(output.ReportedOs, context) : undefined,
    RootDeviceType: __expectString(output.RootDeviceType),
    RootDeviceVolumeId: __expectString(output.RootDeviceVolumeId),
    SecurityGroupIds:
      output.SecurityGroupIds != null ? deserializeAws_json1_1Strings(output.SecurityGroupIds, context) : undefined,
    SshHostDsaKeyFingerprint: __expectString(output.SshHostDsaKeyFingerprint),
    SshHostRsaKeyFingerprint: __expectString(output.SshHostRsaKeyFingerprint),
    SshKeyName: __expectString(output.SshKeyName),
    StackId: __expectString(output.StackId),
    Status: __expectString(output.Status),
    SubnetId: __expectString(output.SubnetId),
    Tenancy: __expectString(output.Tenancy),
    VirtualizationType: __expectString(output.VirtualizationType),
  } as any;
};

const deserializeAws_json1_1Instances = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Instance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstancesCount = (output: any, context: __SerdeContext): InstancesCount => {
  return {
    Assigning: __expectInt32(output.Assigning),
    Booting: __expectInt32(output.Booting),
    ConnectionLost: __expectInt32(output.ConnectionLost),
    Deregistering: __expectInt32(output.Deregistering),
    Online: __expectInt32(output.Online),
    Pending: __expectInt32(output.Pending),
    Rebooting: __expectInt32(output.Rebooting),
    Registered: __expectInt32(output.Registered),
    Registering: __expectInt32(output.Registering),
    Requested: __expectInt32(output.Requested),
    RunningSetup: __expectInt32(output.RunningSetup),
    SetupFailed: __expectInt32(output.SetupFailed),
    ShuttingDown: __expectInt32(output.ShuttingDown),
    StartFailed: __expectInt32(output.StartFailed),
    StopFailed: __expectInt32(output.StopFailed),
    Stopped: __expectInt32(output.Stopped),
    Stopping: __expectInt32(output.Stopping),
    Terminated: __expectInt32(output.Terminated),
    Terminating: __expectInt32(output.Terminating),
    Unassigning: __expectInt32(output.Unassigning),
  } as any;
};

const deserializeAws_json1_1Layer = (output: any, context: __SerdeContext): Layer => {
  return {
    Arn: __expectString(output.Arn),
    Attributes:
      output.Attributes != null ? deserializeAws_json1_1LayerAttributes(output.Attributes, context) : undefined,
    AutoAssignElasticIps: __expectBoolean(output.AutoAssignElasticIps),
    AutoAssignPublicIps: __expectBoolean(output.AutoAssignPublicIps),
    CloudWatchLogsConfiguration:
      output.CloudWatchLogsConfiguration != null
        ? deserializeAws_json1_1CloudWatchLogsConfiguration(output.CloudWatchLogsConfiguration, context)
        : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    CustomInstanceProfileArn: __expectString(output.CustomInstanceProfileArn),
    CustomJson: __expectString(output.CustomJson),
    CustomRecipes:
      output.CustomRecipes != null ? deserializeAws_json1_1Recipes(output.CustomRecipes, context) : undefined,
    CustomSecurityGroupIds:
      output.CustomSecurityGroupIds != null
        ? deserializeAws_json1_1Strings(output.CustomSecurityGroupIds, context)
        : undefined,
    DefaultRecipes:
      output.DefaultRecipes != null ? deserializeAws_json1_1Recipes(output.DefaultRecipes, context) : undefined,
    DefaultSecurityGroupNames:
      output.DefaultSecurityGroupNames != null
        ? deserializeAws_json1_1Strings(output.DefaultSecurityGroupNames, context)
        : undefined,
    EnableAutoHealing: __expectBoolean(output.EnableAutoHealing),
    InstallUpdatesOnBoot: __expectBoolean(output.InstallUpdatesOnBoot),
    LayerId: __expectString(output.LayerId),
    LifecycleEventConfiguration:
      output.LifecycleEventConfiguration != null
        ? deserializeAws_json1_1LifecycleEventConfiguration(output.LifecycleEventConfiguration, context)
        : undefined,
    Name: __expectString(output.Name),
    Packages: output.Packages != null ? deserializeAws_json1_1Strings(output.Packages, context) : undefined,
    Shortname: __expectString(output.Shortname),
    StackId: __expectString(output.StackId),
    Type: __expectString(output.Type),
    UseEbsOptimizedInstances: __expectBoolean(output.UseEbsOptimizedInstances),
    VolumeConfigurations:
      output.VolumeConfigurations != null
        ? deserializeAws_json1_1VolumeConfigurations(output.VolumeConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LayerAttributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [LayerAttributesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1Layers = (output: any, context: __SerdeContext): Layer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Layer(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LifecycleEventConfiguration = (
  output: any,
  context: __SerdeContext
): LifecycleEventConfiguration => {
  return {
    Shutdown:
      output.Shutdown != null ? deserializeAws_json1_1ShutdownEventConfiguration(output.Shutdown, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsResult = (output: any, context: __SerdeContext): ListTagsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBasedAutoScalingConfiguration = (
  output: any,
  context: __SerdeContext
): LoadBasedAutoScalingConfiguration => {
  return {
    DownScaling:
      output.DownScaling != null ? deserializeAws_json1_1AutoScalingThresholds(output.DownScaling, context) : undefined,
    Enable: __expectBoolean(output.Enable),
    LayerId: __expectString(output.LayerId),
    UpScaling:
      output.UpScaling != null ? deserializeAws_json1_1AutoScalingThresholds(output.UpScaling, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBasedAutoScalingConfigurations = (
  output: any,
  context: __SerdeContext
): LoadBasedAutoScalingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LoadBasedAutoScalingConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OperatingSystem = (output: any, context: __SerdeContext): OperatingSystem => {
  return {
    ConfigurationManagers:
      output.ConfigurationManagers != null
        ? deserializeAws_json1_1OperatingSystemConfigurationManagers(output.ConfigurationManagers, context)
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ReportedName: __expectString(output.ReportedName),
    ReportedVersion: __expectString(output.ReportedVersion),
    Supported: __expectBoolean(output.Supported),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1OperatingSystemConfigurationManager = (
  output: any,
  context: __SerdeContext
): OperatingSystemConfigurationManager => {
  return {
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1OperatingSystemConfigurationManagers = (
  output: any,
  context: __SerdeContext
): OperatingSystemConfigurationManager[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OperatingSystemConfigurationManager(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OperatingSystems = (output: any, context: __SerdeContext): OperatingSystem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OperatingSystem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Parameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    AllowSsh: __expectBoolean(output.AllowSsh),
    AllowSudo: __expectBoolean(output.AllowSudo),
    IamUserArn: __expectString(output.IamUserArn),
    Level: __expectString(output.Level),
    StackId: __expectString(output.StackId),
  } as any;
};

const deserializeAws_json1_1Permissions = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Permission(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RaidArray = (output: any, context: __SerdeContext): RaidArray => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreatedAt: __expectString(output.CreatedAt),
    Device: __expectString(output.Device),
    InstanceId: __expectString(output.InstanceId),
    Iops: __expectInt32(output.Iops),
    MountPoint: __expectString(output.MountPoint),
    Name: __expectString(output.Name),
    NumberOfDisks: __expectInt32(output.NumberOfDisks),
    RaidArrayId: __expectString(output.RaidArrayId),
    RaidLevel: __expectInt32(output.RaidLevel),
    Size: __expectInt32(output.Size),
    StackId: __expectString(output.StackId),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_json1_1RaidArrays = (output: any, context: __SerdeContext): RaidArray[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RaidArray(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RdsDbInstance = (output: any, context: __SerdeContext): RdsDbInstance => {
  return {
    Address: __expectString(output.Address),
    DbInstanceIdentifier: __expectString(output.DbInstanceIdentifier),
    DbPassword: __expectString(output.DbPassword),
    DbUser: __expectString(output.DbUser),
    Engine: __expectString(output.Engine),
    MissingOnRds: __expectBoolean(output.MissingOnRds),
    RdsDbInstanceArn: __expectString(output.RdsDbInstanceArn),
    Region: __expectString(output.Region),
    StackId: __expectString(output.StackId),
  } as any;
};

const deserializeAws_json1_1RdsDbInstances = (output: any, context: __SerdeContext): RdsDbInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RdsDbInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Recipes = (output: any, context: __SerdeContext): Recipes => {
  return {
    Configure: output.Configure != null ? deserializeAws_json1_1Strings(output.Configure, context) : undefined,
    Deploy: output.Deploy != null ? deserializeAws_json1_1Strings(output.Deploy, context) : undefined,
    Setup: output.Setup != null ? deserializeAws_json1_1Strings(output.Setup, context) : undefined,
    Shutdown: output.Shutdown != null ? deserializeAws_json1_1Strings(output.Shutdown, context) : undefined,
    Undeploy: output.Undeploy != null ? deserializeAws_json1_1Strings(output.Undeploy, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RegisterEcsClusterResult = (
  output: any,
  context: __SerdeContext
): RegisterEcsClusterResult => {
  return {
    EcsClusterArn: __expectString(output.EcsClusterArn),
  } as any;
};

const deserializeAws_json1_1RegisterElasticIpResult = (
  output: any,
  context: __SerdeContext
): RegisterElasticIpResult => {
  return {
    ElasticIp: __expectString(output.ElasticIp),
  } as any;
};

const deserializeAws_json1_1RegisterInstanceResult = (output: any, context: __SerdeContext): RegisterInstanceResult => {
  return {
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

const deserializeAws_json1_1RegisterVolumeResult = (output: any, context: __SerdeContext): RegisterVolumeResult => {
  return {
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

const deserializeAws_json1_1ReportedOs = (output: any, context: __SerdeContext): ReportedOs => {
  return {
    Family: __expectString(output.Family),
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SelfUserProfile = (output: any, context: __SerdeContext): SelfUserProfile => {
  return {
    IamUserArn: __expectString(output.IamUserArn),
    Name: __expectString(output.Name),
    SshPublicKey: __expectString(output.SshPublicKey),
    SshUsername: __expectString(output.SshUsername),
  } as any;
};

const deserializeAws_json1_1ServiceError = (output: any, context: __SerdeContext): ServiceError => {
  return {
    CreatedAt: __expectString(output.CreatedAt),
    InstanceId: __expectString(output.InstanceId),
    Message: __expectString(output.Message),
    ServiceErrorId: __expectString(output.ServiceErrorId),
    StackId: __expectString(output.StackId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ServiceErrors = (output: any, context: __SerdeContext): ServiceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServiceError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ShutdownEventConfiguration = (
  output: any,
  context: __SerdeContext
): ShutdownEventConfiguration => {
  return {
    DelayUntilElbConnectionsDrained: __expectBoolean(output.DelayUntilElbConnectionsDrained),
    ExecutionTimeout: __expectInt32(output.ExecutionTimeout),
  } as any;
};

const deserializeAws_json1_1Source = (output: any, context: __SerdeContext): Source => {
  return {
    Password: __expectString(output.Password),
    Revision: __expectString(output.Revision),
    SshKey: __expectString(output.SshKey),
    Type: __expectString(output.Type),
    Url: __expectString(output.Url),
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_json1_1SslConfiguration = (output: any, context: __SerdeContext): SslConfiguration => {
  return {
    Certificate: __expectString(output.Certificate),
    Chain: __expectString(output.Chain),
    PrivateKey: __expectString(output.PrivateKey),
  } as any;
};

const deserializeAws_json1_1Stack = (output: any, context: __SerdeContext): Stack => {
  return {
    AgentVersion: __expectString(output.AgentVersion),
    Arn: __expectString(output.Arn),
    Attributes:
      output.Attributes != null ? deserializeAws_json1_1StackAttributes(output.Attributes, context) : undefined,
    ChefConfiguration:
      output.ChefConfiguration != null
        ? deserializeAws_json1_1ChefConfiguration(output.ChefConfiguration, context)
        : undefined,
    ConfigurationManager:
      output.ConfigurationManager != null
        ? deserializeAws_json1_1StackConfigurationManager(output.ConfigurationManager, context)
        : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    CustomCookbooksSource:
      output.CustomCookbooksSource != null
        ? deserializeAws_json1_1Source(output.CustomCookbooksSource, context)
        : undefined,
    CustomJson: __expectString(output.CustomJson),
    DefaultAvailabilityZone: __expectString(output.DefaultAvailabilityZone),
    DefaultInstanceProfileArn: __expectString(output.DefaultInstanceProfileArn),
    DefaultOs: __expectString(output.DefaultOs),
    DefaultRootDeviceType: __expectString(output.DefaultRootDeviceType),
    DefaultSshKeyName: __expectString(output.DefaultSshKeyName),
    DefaultSubnetId: __expectString(output.DefaultSubnetId),
    HostnameTheme: __expectString(output.HostnameTheme),
    Name: __expectString(output.Name),
    Region: __expectString(output.Region),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    StackId: __expectString(output.StackId),
    UseCustomCookbooks: __expectBoolean(output.UseCustomCookbooks),
    UseOpsworksSecurityGroups: __expectBoolean(output.UseOpsworksSecurityGroups),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1StackAttributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [StackAttributesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1StackConfigurationManager = (
  output: any,
  context: __SerdeContext
): StackConfigurationManager => {
  return {
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1Stacks = (output: any, context: __SerdeContext): Stack[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Stack(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StackSummary = (output: any, context: __SerdeContext): StackSummary => {
  return {
    AppsCount: __expectInt32(output.AppsCount),
    Arn: __expectString(output.Arn),
    InstancesCount:
      output.InstancesCount != null ? deserializeAws_json1_1InstancesCount(output.InstancesCount, context) : undefined,
    LayersCount: __expectInt32(output.LayersCount),
    Name: __expectString(output.Name),
    StackId: __expectString(output.StackId),
  } as any;
};

const deserializeAws_json1_1Strings = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1TemporaryCredential = (output: any, context: __SerdeContext): TemporaryCredential => {
  return {
    InstanceId: __expectString(output.InstanceId),
    Password: __expectString(output.Password),
    Username: __expectString(output.Username),
    ValidForInMinutes: __expectInt32(output.ValidForInMinutes),
  } as any;
};

const deserializeAws_json1_1TimeBasedAutoScalingConfiguration = (
  output: any,
  context: __SerdeContext
): TimeBasedAutoScalingConfiguration => {
  return {
    AutoScalingSchedule:
      output.AutoScalingSchedule != null
        ? deserializeAws_json1_1WeeklyAutoScalingSchedule(output.AutoScalingSchedule, context)
        : undefined,
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

const deserializeAws_json1_1TimeBasedAutoScalingConfigurations = (
  output: any,
  context: __SerdeContext
): TimeBasedAutoScalingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TimeBasedAutoScalingConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UserProfile = (output: any, context: __SerdeContext): UserProfile => {
  return {
    AllowSelfManagement: __expectBoolean(output.AllowSelfManagement),
    IamUserArn: __expectString(output.IamUserArn),
    Name: __expectString(output.Name),
    SshPublicKey: __expectString(output.SshPublicKey),
    SshUsername: __expectString(output.SshUsername),
  } as any;
};

const deserializeAws_json1_1UserProfiles = (output: any, context: __SerdeContext): UserProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UserProfile(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    Device: __expectString(output.Device),
    Ec2VolumeId: __expectString(output.Ec2VolumeId),
    Encrypted: __expectBoolean(output.Encrypted),
    InstanceId: __expectString(output.InstanceId),
    Iops: __expectInt32(output.Iops),
    MountPoint: __expectString(output.MountPoint),
    Name: __expectString(output.Name),
    RaidArrayId: __expectString(output.RaidArrayId),
    Region: __expectString(output.Region),
    Size: __expectInt32(output.Size),
    Status: __expectString(output.Status),
    VolumeId: __expectString(output.VolumeId),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_json1_1VolumeConfiguration = (output: any, context: __SerdeContext): VolumeConfiguration => {
  return {
    Encrypted: __expectBoolean(output.Encrypted),
    Iops: __expectInt32(output.Iops),
    MountPoint: __expectString(output.MountPoint),
    NumberOfDisks: __expectInt32(output.NumberOfDisks),
    RaidLevel: __expectInt32(output.RaidLevel),
    Size: __expectInt32(output.Size),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_json1_1VolumeConfigurations = (output: any, context: __SerdeContext): VolumeConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VolumeConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Volumes = (output: any, context: __SerdeContext): Volume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Volume(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WeeklyAutoScalingSchedule = (
  output: any,
  context: __SerdeContext
): WeeklyAutoScalingSchedule => {
  return {
    Friday: output.Friday != null ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Friday, context) : undefined,
    Monday: output.Monday != null ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Monday, context) : undefined,
    Saturday:
      output.Saturday != null ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Saturday, context) : undefined,
    Sunday: output.Sunday != null ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Sunday, context) : undefined,
    Thursday:
      output.Thursday != null ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Thursday, context) : undefined,
    Tuesday:
      output.Tuesday != null ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Tuesday, context) : undefined,
    Wednesday:
      output.Wednesday != null ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Wednesday, context) : undefined,
  } as any;
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
