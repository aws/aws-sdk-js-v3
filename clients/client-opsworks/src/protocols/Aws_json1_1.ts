// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AppAttributesKeys,
  AssignInstanceRequest,
  AssignVolumeRequest,
  AssociateElasticIpRequest,
  AttachElasticLoadBalancerRequest,
  AutoScalingThresholds,
  BlockDeviceMapping,
  ChefConfiguration,
  CloneStackRequest,
  CloudWatchLogsConfiguration,
  CloudWatchLogsLogStream,
  CreateAppRequest,
  CreateDeploymentRequest,
  CreateInstanceRequest,
  CreateLayerRequest,
  CreateStackRequest,
  CreateUserProfileRequest,
  DataSource,
  DeleteAppRequest,
  DeleteInstanceRequest,
  DeleteLayerRequest,
  DeleteStackRequest,
  DeleteUserProfileRequest,
  DeploymentCommand,
  DeregisterEcsClusterRequest,
  DeregisterElasticIpRequest,
  DeregisterInstanceRequest,
  DeregisterRdsDbInstanceRequest,
  DeregisterVolumeRequest,
  DescribeAgentVersionsRequest,
  DescribeAppsRequest,
  DescribeCommandsRequest,
  DescribeDeploymentsRequest,
  DescribeEcsClustersRequest,
  DescribeElasticIpsRequest,
  DescribeElasticLoadBalancersRequest,
  DescribeInstancesRequest,
  DescribeLayersRequest,
  DescribeLoadBasedAutoScalingRequest,
  DescribeLoadBasedAutoScalingResult,
  DescribePermissionsRequest,
  DescribeRaidArraysRequest,
  DescribeRdsDbInstancesRequest,
  DescribeServiceErrorsRequest,
  DescribeStackProvisioningParametersRequest,
  DescribeStacksRequest,
  DescribeStackSummaryRequest,
  DescribeTimeBasedAutoScalingRequest,
  DescribeUserProfilesRequest,
  DescribeVolumesRequest,
  DetachElasticLoadBalancerRequest,
  DisassociateElasticIpRequest,
  EbsBlockDevice,
  EnvironmentVariable,
  GetHostnameSuggestionRequest,
  GrantAccessRequest,
  InstanceIdentity,
  LayerAttributesKeys,
  LifecycleEventConfiguration,
  ListTagsRequest,
  LoadBasedAutoScalingConfiguration,
  RebootInstanceRequest,
  Recipes,
  RegisterEcsClusterRequest,
  RegisterElasticIpRequest,
  RegisterInstanceRequest,
  RegisterRdsDbInstanceRequest,
  RegisterVolumeRequest,
  ResourceNotFoundException,
  SetLoadBasedAutoScalingRequest,
  SetPermissionRequest,
  SetTimeBasedAutoScalingRequest,
  ShutdownEventConfiguration,
  Source,
  SslConfiguration,
  StackAttributesKeys,
  StackConfigurationManager,
  StartInstanceRequest,
  StartStackRequest,
  StopInstanceRequest,
  StopStackRequest,
  TagResourceRequest,
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
  ValidationException,
  VolumeConfiguration,
  WeeklyAutoScalingSchedule,
} from "../models/models_0";
import { OpsWorksServiceException as __BaseException } from "../models/OpsWorksServiceException";

/**
 * serializeAws_json1_1AssignInstanceCommand
 */
export const se_AssignInstanceCommand = async (
  input: AssignInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssignInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssignVolumeCommand
 */
export const se_AssignVolumeCommand = async (
  input: AssignVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssignVolume");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateElasticIpCommand
 */
export const se_AssociateElasticIpCommand = async (
  input: AssociateElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateElasticIp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachElasticLoadBalancerCommand
 */
export const se_AttachElasticLoadBalancerCommand = async (
  input: AttachElasticLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachElasticLoadBalancer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CloneStackCommand
 */
export const se_CloneStackCommand = async (
  input: CloneStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CloneStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAppCommand
 */
export const se_CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDeploymentCommand
 */
export const se_CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDeployment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstanceCommand
 */
export const se_CreateInstanceCommand = async (
  input: CreateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLayerCommand
 */
export const se_CreateLayerCommand = async (
  input: CreateLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLayer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStackCommand
 */
export const se_CreateStackCommand = async (
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserProfileCommand
 */
export const se_CreateUserProfileCommand = async (
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppCommand
 */
export const se_DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInstanceCommand
 */
export const se_DeleteInstanceCommand = async (
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLayerCommand
 */
export const se_DeleteLayerCommand = async (
  input: DeleteLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLayer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStackCommand
 */
export const se_DeleteStackCommand = async (
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserProfileCommand
 */
export const se_DeleteUserProfileCommand = async (
  input: DeleteUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterEcsClusterCommand
 */
export const se_DeregisterEcsClusterCommand = async (
  input: DeregisterEcsClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterEcsCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterElasticIpCommand
 */
export const se_DeregisterElasticIpCommand = async (
  input: DeregisterElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterElasticIp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterInstanceCommand
 */
export const se_DeregisterInstanceCommand = async (
  input: DeregisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterRdsDbInstanceCommand
 */
export const se_DeregisterRdsDbInstanceCommand = async (
  input: DeregisterRdsDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterRdsDbInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterVolumeCommand
 */
export const se_DeregisterVolumeCommand = async (
  input: DeregisterVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterVolume");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAgentVersionsCommand
 */
export const se_DescribeAgentVersionsCommand = async (
  input: DescribeAgentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAgentVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAppsCommand
 */
export const se_DescribeAppsCommand = async (
  input: DescribeAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCommandsCommand
 */
export const se_DescribeCommandsCommand = async (
  input: DescribeCommandsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCommands");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeploymentsCommand
 */
export const se_DescribeDeploymentsCommand = async (
  input: DescribeDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeployments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEcsClustersCommand
 */
export const se_DescribeEcsClustersCommand = async (
  input: DescribeEcsClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEcsClusters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeElasticIpsCommand
 */
export const se_DescribeElasticIpsCommand = async (
  input: DescribeElasticIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeElasticIps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeElasticLoadBalancersCommand
 */
export const se_DescribeElasticLoadBalancersCommand = async (
  input: DescribeElasticLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeElasticLoadBalancers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstancesCommand
 */
export const se_DescribeInstancesCommand = async (
  input: DescribeInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLayersCommand
 */
export const se_DescribeLayersCommand = async (
  input: DescribeLayersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLayers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLoadBasedAutoScalingCommand
 */
export const se_DescribeLoadBasedAutoScalingCommand = async (
  input: DescribeLoadBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLoadBasedAutoScaling");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMyUserProfileCommand
 */
export const se_DescribeMyUserProfileCommand = async (
  input: DescribeMyUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMyUserProfile");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOperatingSystemsCommand
 */
export const se_DescribeOperatingSystemsCommand = async (
  input: DescribeOperatingSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOperatingSystems");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePermissionsCommand
 */
export const se_DescribePermissionsCommand = async (
  input: DescribePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePermissions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRaidArraysCommand
 */
export const se_DescribeRaidArraysCommand = async (
  input: DescribeRaidArraysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRaidArrays");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRdsDbInstancesCommand
 */
export const se_DescribeRdsDbInstancesCommand = async (
  input: DescribeRdsDbInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRdsDbInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServiceErrorsCommand
 */
export const se_DescribeServiceErrorsCommand = async (
  input: DescribeServiceErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServiceErrors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStackProvisioningParametersCommand
 */
export const se_DescribeStackProvisioningParametersCommand = async (
  input: DescribeStackProvisioningParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStackProvisioningParameters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStacksCommand
 */
export const se_DescribeStacksCommand = async (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStacks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStackSummaryCommand
 */
export const se_DescribeStackSummaryCommand = async (
  input: DescribeStackSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStackSummary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTimeBasedAutoScalingCommand
 */
export const se_DescribeTimeBasedAutoScalingCommand = async (
  input: DescribeTimeBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTimeBasedAutoScaling");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserProfilesCommand
 */
export const se_DescribeUserProfilesCommand = async (
  input: DescribeUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUserProfiles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeVolumesCommand
 */
export const se_DescribeVolumesCommand = async (
  input: DescribeVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVolumes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachElasticLoadBalancerCommand
 */
export const se_DetachElasticLoadBalancerCommand = async (
  input: DetachElasticLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetachElasticLoadBalancer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateElasticIpCommand
 */
export const se_DisassociateElasticIpCommand = async (
  input: DisassociateElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateElasticIp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetHostnameSuggestionCommand
 */
export const se_GetHostnameSuggestionCommand = async (
  input: GetHostnameSuggestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetHostnameSuggestion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GrantAccessCommand
 */
export const se_GrantAccessCommand = async (
  input: GrantAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GrantAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebootInstanceCommand
 */
export const se_RebootInstanceCommand = async (
  input: RebootInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RebootInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterEcsClusterCommand
 */
export const se_RegisterEcsClusterCommand = async (
  input: RegisterEcsClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterEcsCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterElasticIpCommand
 */
export const se_RegisterElasticIpCommand = async (
  input: RegisterElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterElasticIp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterInstanceCommand
 */
export const se_RegisterInstanceCommand = async (
  input: RegisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterRdsDbInstanceCommand
 */
export const se_RegisterRdsDbInstanceCommand = async (
  input: RegisterRdsDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterRdsDbInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterVolumeCommand
 */
export const se_RegisterVolumeCommand = async (
  input: RegisterVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterVolume");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetLoadBasedAutoScalingCommand
 */
export const se_SetLoadBasedAutoScalingCommand = async (
  input: SetLoadBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetLoadBasedAutoScaling");
  let body: any;
  body = JSON.stringify(se_SetLoadBasedAutoScalingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetPermissionCommand
 */
export const se_SetPermissionCommand = async (
  input: SetPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetPermission");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetTimeBasedAutoScalingCommand
 */
export const se_SetTimeBasedAutoScalingCommand = async (
  input: SetTimeBasedAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetTimeBasedAutoScaling");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartInstanceCommand
 */
export const se_StartInstanceCommand = async (
  input: StartInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartStackCommand
 */
export const se_StartStackCommand = async (
  input: StartStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopInstanceCommand
 */
export const se_StopInstanceCommand = async (
  input: StopInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopStackCommand
 */
export const se_StopStackCommand = async (
  input: StopStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopStack");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1UnassignInstanceCommand
 */
export const se_UnassignInstanceCommand = async (
  input: UnassignInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UnassignInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnassignVolumeCommand
 */
export const se_UnassignVolumeCommand = async (
  input: UnassignVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UnassignVolume");
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
 * serializeAws_json1_1UpdateAppCommand
 */
export const se_UpdateAppCommand = async (
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateElasticIpCommand
 */
export const se_UpdateElasticIpCommand = async (
  input: UpdateElasticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateElasticIp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInstanceCommand
 */
export const se_UpdateInstanceCommand = async (
  input: UpdateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLayerCommand
 */
export const se_UpdateLayerCommand = async (
  input: UpdateLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLayer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMyUserProfileCommand
 */
export const se_UpdateMyUserProfileCommand = async (
  input: UpdateMyUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMyUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRdsDbInstanceCommand
 */
export const se_UpdateRdsDbInstanceCommand = async (
  input: UpdateRdsDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRdsDbInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStackCommand
 */
export const se_UpdateStackCommand = async (
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserProfileCommand
 */
export const se_UpdateUserProfileCommand = async (
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVolumeCommand
 */
export const se_UpdateVolumeCommand = async (
  input: UpdateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVolume");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssignInstanceCommand
 */
export const de_AssignInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssignInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssignInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AssignInstanceCommandError
 */
const de_AssignInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssignVolumeCommand
 */
export const de_AssignVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssignVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssignVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AssignVolumeCommandError
 */
const de_AssignVolumeCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateElasticIpCommand
 */
export const de_AssociateElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateElasticIpCommandError
 */
const de_AssociateElasticIpCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AttachElasticLoadBalancerCommand
 */
export const de_AttachElasticLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachElasticLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachElasticLoadBalancerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachElasticLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AttachElasticLoadBalancerCommandError
 */
const de_AttachElasticLoadBalancerCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CloneStackCommand
 */
export const de_CloneStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CloneStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CloneStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CloneStackCommandError
 */
const de_CloneStackCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAppCommand
 */
export const de_CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAppCommandError
 */
const de_CreateAppCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDeploymentCommand
 */
export const de_CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDeploymentCommandError
 */
const de_CreateDeploymentCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateInstanceCommand
 */
export const de_CreateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateInstanceCommandError
 */
const de_CreateInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLayerCommand
 */
export const de_CreateLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLayerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLayerCommandError
 */
const de_CreateLayerCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateStackCommand
 */
export const de_CreateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateStackCommandError
 */
const de_CreateStackCommandError = async (
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
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserProfileCommand
 */
export const de_CreateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserProfileCommandError
 */
const de_CreateUserProfileCommandError = async (
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
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAppCommand
 */
export const de_DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAppCommandError
 */
const de_DeleteAppCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteInstanceCommand
 */
export const de_DeleteInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteInstanceCommandError
 */
const de_DeleteInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteLayerCommand
 */
export const de_DeleteLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLayerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteLayerCommandError
 */
const de_DeleteLayerCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteStackCommand
 */
export const de_DeleteStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteStackCommandError
 */
const de_DeleteStackCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserProfileCommand
 */
export const de_DeleteUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserProfileCommandError
 */
const de_DeleteUserProfileCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterEcsClusterCommand
 */
export const de_DeregisterEcsClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterEcsClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterEcsClusterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterEcsClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterEcsClusterCommandError
 */
const de_DeregisterEcsClusterCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterElasticIpCommand
 */
export const de_DeregisterElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterElasticIpCommandError
 */
const de_DeregisterElasticIpCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterInstanceCommand
 */
export const de_DeregisterInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterInstanceCommandError
 */
const de_DeregisterInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterRdsDbInstanceCommand
 */
export const de_DeregisterRdsDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRdsDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterRdsDbInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterRdsDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterRdsDbInstanceCommandError
 */
const de_DeregisterRdsDbInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterVolumeCommand
 */
export const de_DeregisterVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterVolumeCommandError
 */
const de_DeregisterVolumeCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAgentVersionsCommand
 */
export const de_DescribeAgentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAgentVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAgentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAgentVersionsCommandError
 */
const de_DescribeAgentVersionsCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAppsCommand
 */
export const de_DescribeAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAppsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAppsCommandError
 */
const de_DescribeAppsCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCommandsCommand
 */
export const de_DescribeCommandsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommandsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCommandsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeCommandsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCommandsCommandError
 */
const de_DescribeCommandsCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDeploymentsCommand
 */
export const de_DescribeDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDeploymentsCommandError
 */
const de_DescribeDeploymentsCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEcsClustersCommand
 */
export const de_DescribeEcsClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEcsClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEcsClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEcsClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEcsClustersCommandError
 */
const de_DescribeEcsClustersCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeElasticIpsCommand
 */
export const de_DescribeElasticIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticIpsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeElasticIpsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeElasticIpsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeElasticIpsCommandError
 */
const de_DescribeElasticIpsCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeElasticLoadBalancersCommand
 */
export const de_DescribeElasticLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeElasticLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeElasticLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeElasticLoadBalancersCommandError
 */
const de_DescribeElasticLoadBalancersCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInstancesCommand
 */
export const de_DescribeInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeInstancesCommandError
 */
const de_DescribeInstancesCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLayersCommand
 */
export const de_DescribeLayersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLayersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLayersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeLayersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLayersCommandError
 */
const de_DescribeLayersCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand
 */
export const de_DescribeLoadBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoadBasedAutoScalingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLoadBasedAutoScalingResult(data, context);
  const response: DescribeLoadBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLoadBasedAutoScalingCommandError
 */
const de_DescribeLoadBasedAutoScalingCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMyUserProfileCommand
 */
export const de_DescribeMyUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMyUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMyUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeMyUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeMyUserProfileCommandError
 */
const de_DescribeMyUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMyUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeOperatingSystemsCommand
 */
export const de_DescribeOperatingSystemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOperatingSystemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOperatingSystemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeOperatingSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeOperatingSystemsCommandError
 */
const de_DescribeOperatingSystemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOperatingSystemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribePermissionsCommand
 */
export const de_DescribePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePermissionsCommandError
 */
const de_DescribePermissionsCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRaidArraysCommand
 */
export const de_DescribeRaidArraysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRaidArraysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRaidArraysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeRaidArraysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeRaidArraysCommandError
 */
const de_DescribeRaidArraysCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRdsDbInstancesCommand
 */
export const de_DescribeRdsDbInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRdsDbInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRdsDbInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeRdsDbInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeRdsDbInstancesCommandError
 */
const de_DescribeRdsDbInstancesCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeServiceErrorsCommand
 */
export const de_DescribeServiceErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceErrorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServiceErrorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeServiceErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeServiceErrorsCommandError
 */
const de_DescribeServiceErrorsCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStackProvisioningParametersCommand
 */
export const de_DescribeStackProvisioningParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackProvisioningParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackProvisioningParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeStackProvisioningParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeStackProvisioningParametersCommandError
 */
const de_DescribeStackProvisioningParametersCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStacksCommand
 */
export const de_DescribeStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeStacksCommandError
 */
const de_DescribeStacksCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStackSummaryCommand
 */
export const de_DescribeStackSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStackSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStackSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeStackSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeStackSummaryCommandError
 */
const de_DescribeStackSummaryCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTimeBasedAutoScalingCommand
 */
export const de_DescribeTimeBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTimeBasedAutoScalingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeTimeBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTimeBasedAutoScalingCommandError
 */
const de_DescribeTimeBasedAutoScalingCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUserProfilesCommand
 */
export const de_DescribeUserProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeUserProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeUserProfilesCommandError
 */
const de_DescribeUserProfilesCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeVolumesCommand
 */
export const de_DescribeVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeVolumesCommandError
 */
const de_DescribeVolumesCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetachElasticLoadBalancerCommand
 */
export const de_DetachElasticLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachElasticLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachElasticLoadBalancerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachElasticLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DetachElasticLoadBalancerCommandError
 */
const de_DetachElasticLoadBalancerCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateElasticIpCommand
 */
export const de_DisassociateElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateElasticIpCommandError
 */
const de_DisassociateElasticIpCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetHostnameSuggestionCommand
 */
export const de_GetHostnameSuggestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostnameSuggestionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetHostnameSuggestionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetHostnameSuggestionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetHostnameSuggestionCommandError
 */
const de_GetHostnameSuggestionCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GrantAccessCommand
 */
export const de_GrantAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GrantAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GrantAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GrantAccessCommandError
 */
const de_GrantAccessCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RebootInstanceCommand
 */
export const de_RebootInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RebootInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1RebootInstanceCommandError
 */
const de_RebootInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterEcsClusterCommand
 */
export const de_RegisterEcsClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterEcsClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterEcsClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RegisterEcsClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterEcsClusterCommandError
 */
const de_RegisterEcsClusterCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterElasticIpCommand
 */
export const de_RegisterElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterElasticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RegisterElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterElasticIpCommandError
 */
const de_RegisterElasticIpCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterInstanceCommand
 */
export const de_RegisterInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RegisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterInstanceCommandError
 */
const de_RegisterInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterRdsDbInstanceCommand
 */
export const de_RegisterRdsDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRdsDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterRdsDbInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterRdsDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterRdsDbInstanceCommandError
 */
const de_RegisterRdsDbInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterVolumeCommand
 */
export const de_RegisterVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RegisterVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterVolumeCommandError
 */
const de_RegisterVolumeCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetLoadBasedAutoScalingCommand
 */
export const de_SetLoadBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetLoadBasedAutoScalingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetLoadBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1SetLoadBasedAutoScalingCommandError
 */
const de_SetLoadBasedAutoScalingCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetPermissionCommand
 */
export const de_SetPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetPermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1SetPermissionCommandError
 */
const de_SetPermissionCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetTimeBasedAutoScalingCommand
 */
export const de_SetTimeBasedAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTimeBasedAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetTimeBasedAutoScalingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTimeBasedAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1SetTimeBasedAutoScalingCommandError
 */
const de_SetTimeBasedAutoScalingCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartInstanceCommand
 */
export const de_StartInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StartInstanceCommandError
 */
const de_StartInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartStackCommand
 */
export const de_StartStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StartStackCommandError
 */
const de_StartStackCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopInstanceCommand
 */
export const de_StopInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopInstanceCommandError
 */
const de_StopInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopStackCommand
 */
export const de_StopStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopStackCommandError
 */
const de_StopStackCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
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
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UnassignInstanceCommand
 */
export const de_UnassignInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnassignInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnassignInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnassignInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UnassignInstanceCommandError
 */
const de_UnassignInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UnassignVolumeCommand
 */
export const de_UnassignVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnassignVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnassignVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnassignVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UnassignVolumeCommandError
 */
const de_UnassignVolumeCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
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
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAppCommand
 */
export const de_UpdateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAppCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAppCommandError
 */
const de_UpdateAppCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateElasticIpCommand
 */
export const de_UpdateElasticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateElasticIpCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateElasticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateElasticIpCommandError
 */
const de_UpdateElasticIpCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateInstanceCommand
 */
export const de_UpdateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateInstanceCommandError
 */
const de_UpdateInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateLayerCommand
 */
export const de_UpdateLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLayerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLayerCommandError
 */
const de_UpdateLayerCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateMyUserProfileCommand
 */
export const de_UpdateMyUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMyUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMyUserProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateMyUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateMyUserProfileCommandError
 */
const de_UpdateMyUserProfileCommandError = async (
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
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateRdsDbInstanceCommand
 */
export const de_UpdateRdsDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRdsDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRdsDbInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateRdsDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateRdsDbInstanceCommandError
 */
const de_UpdateRdsDbInstanceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateStackCommand
 */
export const de_UpdateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateStackCommandError
 */
const de_UpdateStackCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateUserProfileCommand
 */
export const de_UpdateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserProfileCommandError
 */
const de_UpdateUserProfileCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateVolumeCommand
 */
export const de_UpdateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVolumeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateVolumeCommandError
 */
const de_UpdateVolumeCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
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
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AppAttributes omitted.

// se_AssignInstanceRequest omitted.

// se_AssignVolumeRequest omitted.

// se_AssociateElasticIpRequest omitted.

// se_AttachElasticLoadBalancerRequest omitted.

/**
 * serializeAws_json1_1AutoScalingThresholds
 */
const se_AutoScalingThresholds = (input: AutoScalingThresholds, context: __SerdeContext): any => {
  return take(input, {
    Alarms: _json,
    CpuThreshold: __serializeFloat,
    IgnoreMetricsTime: [],
    InstanceCount: [],
    LoadThreshold: __serializeFloat,
    MemoryThreshold: __serializeFloat,
    ThresholdsWaitTime: [],
  });
};

// se_BlockDeviceMapping omitted.

// se_BlockDeviceMappings omitted.

// se_ChefConfiguration omitted.

// se_CloneStackRequest omitted.

// se_CloudWatchLogsConfiguration omitted.

// se_CloudWatchLogsLogStream omitted.

// se_CloudWatchLogsLogStreams omitted.

// se_CreateAppRequest omitted.

// se_CreateDeploymentRequest omitted.

// se_CreateInstanceRequest omitted.

// se_CreateLayerRequest omitted.

// se_CreateStackRequest omitted.

// se_CreateUserProfileRequest omitted.

// se_DailyAutoScalingSchedule omitted.

// se_DataSource omitted.

// se_DataSources omitted.

// se_DeleteAppRequest omitted.

// se_DeleteInstanceRequest omitted.

// se_DeleteLayerRequest omitted.

// se_DeleteStackRequest omitted.

// se_DeleteUserProfileRequest omitted.

// se_DeploymentCommand omitted.

// se_DeploymentCommandArgs omitted.

// se_DeregisterEcsClusterRequest omitted.

// se_DeregisterElasticIpRequest omitted.

// se_DeregisterInstanceRequest omitted.

// se_DeregisterRdsDbInstanceRequest omitted.

// se_DeregisterVolumeRequest omitted.

// se_DescribeAgentVersionsRequest omitted.

// se_DescribeAppsRequest omitted.

// se_DescribeCommandsRequest omitted.

// se_DescribeDeploymentsRequest omitted.

// se_DescribeEcsClustersRequest omitted.

// se_DescribeElasticIpsRequest omitted.

// se_DescribeElasticLoadBalancersRequest omitted.

// se_DescribeInstancesRequest omitted.

// se_DescribeLayersRequest omitted.

// se_DescribeLoadBasedAutoScalingRequest omitted.

// se_DescribePermissionsRequest omitted.

// se_DescribeRaidArraysRequest omitted.

// se_DescribeRdsDbInstancesRequest omitted.

// se_DescribeServiceErrorsRequest omitted.

// se_DescribeStackProvisioningParametersRequest omitted.

// se_DescribeStacksRequest omitted.

// se_DescribeStackSummaryRequest omitted.

// se_DescribeTimeBasedAutoScalingRequest omitted.

// se_DescribeUserProfilesRequest omitted.

// se_DescribeVolumesRequest omitted.

// se_DetachElasticLoadBalancerRequest omitted.

// se_DisassociateElasticIpRequest omitted.

// se_EbsBlockDevice omitted.

// se_EnvironmentVariable omitted.

// se_EnvironmentVariables omitted.

// se_GetHostnameSuggestionRequest omitted.

// se_GrantAccessRequest omitted.

// se_InstanceIdentity omitted.

// se_LayerAttributes omitted.

// se_LifecycleEventConfiguration omitted.

// se_ListTagsRequest omitted.

// se_RebootInstanceRequest omitted.

// se_Recipes omitted.

// se_RegisterEcsClusterRequest omitted.

// se_RegisterElasticIpRequest omitted.

// se_RegisterInstanceRequest omitted.

// se_RegisterRdsDbInstanceRequest omitted.

// se_RegisterVolumeRequest omitted.

/**
 * serializeAws_json1_1SetLoadBasedAutoScalingRequest
 */
const se_SetLoadBasedAutoScalingRequest = (input: SetLoadBasedAutoScalingRequest, context: __SerdeContext): any => {
  return take(input, {
    DownScaling: (_) => se_AutoScalingThresholds(_, context),
    Enable: [],
    LayerId: [],
    UpScaling: (_) => se_AutoScalingThresholds(_, context),
  });
};

// se_SetPermissionRequest omitted.

// se_SetTimeBasedAutoScalingRequest omitted.

// se_ShutdownEventConfiguration omitted.

// se_Source omitted.

// se_SslConfiguration omitted.

// se_StackAttributes omitted.

// se_StackConfigurationManager omitted.

// se_StartInstanceRequest omitted.

// se_StartStackRequest omitted.

// se_StopInstanceRequest omitted.

// se_StopStackRequest omitted.

// se_Strings omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_UnassignInstanceRequest omitted.

// se_UnassignVolumeRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAppRequest omitted.

// se_UpdateElasticIpRequest omitted.

// se_UpdateInstanceRequest omitted.

// se_UpdateLayerRequest omitted.

// se_UpdateMyUserProfileRequest omitted.

// se_UpdateRdsDbInstanceRequest omitted.

// se_UpdateStackRequest omitted.

// se_UpdateUserProfileRequest omitted.

// se_UpdateVolumeRequest omitted.

// se_VolumeConfiguration omitted.

// se_VolumeConfigurations omitted.

// se_WeeklyAutoScalingSchedule omitted.

// de_AgentVersion omitted.

// de_AgentVersions omitted.

// de_App omitted.

// de_AppAttributes omitted.

// de_Apps omitted.

/**
 * deserializeAws_json1_1AutoScalingThresholds
 */
const de_AutoScalingThresholds = (output: any, context: __SerdeContext): AutoScalingThresholds => {
  return take(output, {
    Alarms: _json,
    CpuThreshold: __limitedParseDouble,
    IgnoreMetricsTime: __expectInt32,
    InstanceCount: __expectInt32,
    LoadThreshold: __limitedParseDouble,
    MemoryThreshold: __limitedParseDouble,
    ThresholdsWaitTime: __expectInt32,
  }) as any;
};

// de_BlockDeviceMapping omitted.

// de_BlockDeviceMappings omitted.

// de_ChefConfiguration omitted.

// de_CloneStackResult omitted.

// de_CloudWatchLogsConfiguration omitted.

// de_CloudWatchLogsLogStream omitted.

// de_CloudWatchLogsLogStreams omitted.

// de_Command omitted.

// de_Commands omitted.

// de_CreateAppResult omitted.

// de_CreateDeploymentResult omitted.

// de_CreateInstanceResult omitted.

// de_CreateLayerResult omitted.

// de_CreateStackResult omitted.

// de_CreateUserProfileResult omitted.

// de_DailyAutoScalingSchedule omitted.

// de_DataSource omitted.

// de_DataSources omitted.

// de_Deployment omitted.

// de_DeploymentCommand omitted.

// de_DeploymentCommandArgs omitted.

// de_Deployments omitted.

// de_DescribeAgentVersionsResult omitted.

// de_DescribeAppsResult omitted.

// de_DescribeCommandsResult omitted.

// de_DescribeDeploymentsResult omitted.

// de_DescribeEcsClustersResult omitted.

// de_DescribeElasticIpsResult omitted.

// de_DescribeElasticLoadBalancersResult omitted.

// de_DescribeInstancesResult omitted.

// de_DescribeLayersResult omitted.

/**
 * deserializeAws_json1_1DescribeLoadBasedAutoScalingResult
 */
const de_DescribeLoadBasedAutoScalingResult = (
  output: any,
  context: __SerdeContext
): DescribeLoadBasedAutoScalingResult => {
  return take(output, {
    LoadBasedAutoScalingConfigurations: (_: any) => de_LoadBasedAutoScalingConfigurations(_, context),
  }) as any;
};

// de_DescribeMyUserProfileResult omitted.

// de_DescribeOperatingSystemsResponse omitted.

// de_DescribePermissionsResult omitted.

// de_DescribeRaidArraysResult omitted.

// de_DescribeRdsDbInstancesResult omitted.

// de_DescribeServiceErrorsResult omitted.

// de_DescribeStackProvisioningParametersResult omitted.

// de_DescribeStacksResult omitted.

// de_DescribeStackSummaryResult omitted.

// de_DescribeTimeBasedAutoScalingResult omitted.

// de_DescribeUserProfilesResult omitted.

// de_DescribeVolumesResult omitted.

// de_EbsBlockDevice omitted.

// de_EcsCluster omitted.

// de_EcsClusters omitted.

// de_ElasticIp omitted.

// de_ElasticIps omitted.

// de_ElasticLoadBalancer omitted.

// de_ElasticLoadBalancers omitted.

// de_EnvironmentVariable omitted.

// de_EnvironmentVariables omitted.

// de_GetHostnameSuggestionResult omitted.

// de_GrantAccessResult omitted.

// de_Instance omitted.

// de_Instances omitted.

// de_InstancesCount omitted.

// de_Layer omitted.

// de_LayerAttributes omitted.

// de_Layers omitted.

// de_LifecycleEventConfiguration omitted.

// de_ListTagsResult omitted.

/**
 * deserializeAws_json1_1LoadBasedAutoScalingConfiguration
 */
const de_LoadBasedAutoScalingConfiguration = (
  output: any,
  context: __SerdeContext
): LoadBasedAutoScalingConfiguration => {
  return take(output, {
    DownScaling: (_: any) => de_AutoScalingThresholds(_, context),
    Enable: __expectBoolean,
    LayerId: __expectString,
    UpScaling: (_: any) => de_AutoScalingThresholds(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LoadBasedAutoScalingConfigurations
 */
const de_LoadBasedAutoScalingConfigurations = (
  output: any,
  context: __SerdeContext
): LoadBasedAutoScalingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBasedAutoScalingConfiguration(entry, context);
    });
  return retVal;
};

// de_OperatingSystem omitted.

// de_OperatingSystemConfigurationManager omitted.

// de_OperatingSystemConfigurationManagers omitted.

// de_OperatingSystems omitted.

// de_Parameters omitted.

// de_Permission omitted.

// de_Permissions omitted.

// de_RaidArray omitted.

// de_RaidArrays omitted.

// de_RdsDbInstance omitted.

// de_RdsDbInstances omitted.

// de_Recipes omitted.

// de_RegisterEcsClusterResult omitted.

// de_RegisterElasticIpResult omitted.

// de_RegisterInstanceResult omitted.

// de_RegisterVolumeResult omitted.

// de_ReportedOs omitted.

// de_ResourceNotFoundException omitted.

// de_SelfUserProfile omitted.

// de_ServiceError omitted.

// de_ServiceErrors omitted.

// de_ShutdownEventConfiguration omitted.

// de_Source omitted.

// de_SslConfiguration omitted.

// de_Stack omitted.

// de_StackAttributes omitted.

// de_StackConfigurationManager omitted.

// de_Stacks omitted.

// de_StackSummary omitted.

// de_Strings omitted.

// de_Tags omitted.

// de_TemporaryCredential omitted.

// de_TimeBasedAutoScalingConfiguration omitted.

// de_TimeBasedAutoScalingConfigurations omitted.

// de_UserProfile omitted.

// de_UserProfiles omitted.

// de_ValidationException omitted.

// de_Volume omitted.

// de_VolumeConfiguration omitted.

// de_VolumeConfigurations omitted.

// de_Volumes omitted.

// de_WeeklyAutoScalingSchedule omitted.

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
    "x-amz-target": `OpsWorks_20130218.${operation}`,
  };
}

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
