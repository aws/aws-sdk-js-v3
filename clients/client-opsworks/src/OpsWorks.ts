// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssignInstanceCommand,
  AssignInstanceCommandInput,
  AssignInstanceCommandOutput,
} from "./commands/AssignInstanceCommand";
import {
  AssignVolumeCommand,
  AssignVolumeCommandInput,
  AssignVolumeCommandOutput,
} from "./commands/AssignVolumeCommand";
import {
  AssociateElasticIpCommand,
  AssociateElasticIpCommandInput,
  AssociateElasticIpCommandOutput,
} from "./commands/AssociateElasticIpCommand";
import {
  AttachElasticLoadBalancerCommand,
  AttachElasticLoadBalancerCommandInput,
  AttachElasticLoadBalancerCommandOutput,
} from "./commands/AttachElasticLoadBalancerCommand";
import { CloneStackCommand, CloneStackCommandInput, CloneStackCommandOutput } from "./commands/CloneStackCommand";
import { CreateAppCommand, CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateInstanceCommand,
  CreateInstanceCommandInput,
  CreateInstanceCommandOutput,
} from "./commands/CreateInstanceCommand";
import { CreateLayerCommand, CreateLayerCommandInput, CreateLayerCommandOutput } from "./commands/CreateLayerCommand";
import { CreateStackCommand, CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import {
  CreateUserProfileCommand,
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput,
} from "./commands/CreateUserProfileCommand";
import { DeleteAppCommand, DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteInstanceCommand,
  DeleteInstanceCommandInput,
  DeleteInstanceCommandOutput,
} from "./commands/DeleteInstanceCommand";
import { DeleteLayerCommand, DeleteLayerCommandInput, DeleteLayerCommandOutput } from "./commands/DeleteLayerCommand";
import { DeleteStackCommand, DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import {
  DeleteUserProfileCommand,
  DeleteUserProfileCommandInput,
  DeleteUserProfileCommandOutput,
} from "./commands/DeleteUserProfileCommand";
import {
  DeregisterEcsClusterCommand,
  DeregisterEcsClusterCommandInput,
  DeregisterEcsClusterCommandOutput,
} from "./commands/DeregisterEcsClusterCommand";
import {
  DeregisterElasticIpCommand,
  DeregisterElasticIpCommandInput,
  DeregisterElasticIpCommandOutput,
} from "./commands/DeregisterElasticIpCommand";
import {
  DeregisterInstanceCommand,
  DeregisterInstanceCommandInput,
  DeregisterInstanceCommandOutput,
} from "./commands/DeregisterInstanceCommand";
import {
  DeregisterRdsDbInstanceCommand,
  DeregisterRdsDbInstanceCommandInput,
  DeregisterRdsDbInstanceCommandOutput,
} from "./commands/DeregisterRdsDbInstanceCommand";
import {
  DeregisterVolumeCommand,
  DeregisterVolumeCommandInput,
  DeregisterVolumeCommandOutput,
} from "./commands/DeregisterVolumeCommand";
import {
  DescribeAgentVersionsCommand,
  DescribeAgentVersionsCommandInput,
  DescribeAgentVersionsCommandOutput,
} from "./commands/DescribeAgentVersionsCommand";
import {
  DescribeAppsCommand,
  DescribeAppsCommandInput,
  DescribeAppsCommandOutput,
} from "./commands/DescribeAppsCommand";
import {
  DescribeCommandsCommand,
  DescribeCommandsCommandInput,
  DescribeCommandsCommandOutput,
} from "./commands/DescribeCommandsCommand";
import {
  DescribeDeploymentsCommand,
  DescribeDeploymentsCommandInput,
  DescribeDeploymentsCommandOutput,
} from "./commands/DescribeDeploymentsCommand";
import {
  DescribeEcsClustersCommand,
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput,
} from "./commands/DescribeEcsClustersCommand";
import {
  DescribeElasticIpsCommand,
  DescribeElasticIpsCommandInput,
  DescribeElasticIpsCommandOutput,
} from "./commands/DescribeElasticIpsCommand";
import {
  DescribeElasticLoadBalancersCommand,
  DescribeElasticLoadBalancersCommandInput,
  DescribeElasticLoadBalancersCommandOutput,
} from "./commands/DescribeElasticLoadBalancersCommand";
import {
  DescribeInstancesCommand,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "./commands/DescribeInstancesCommand";
import {
  DescribeLayersCommand,
  DescribeLayersCommandInput,
  DescribeLayersCommandOutput,
} from "./commands/DescribeLayersCommand";
import {
  DescribeLoadBasedAutoScalingCommand,
  DescribeLoadBasedAutoScalingCommandInput,
  DescribeLoadBasedAutoScalingCommandOutput,
} from "./commands/DescribeLoadBasedAutoScalingCommand";
import {
  DescribeMyUserProfileCommand,
  DescribeMyUserProfileCommandInput,
  DescribeMyUserProfileCommandOutput,
} from "./commands/DescribeMyUserProfileCommand";
import {
  DescribeOperatingSystemsCommand,
  DescribeOperatingSystemsCommandInput,
  DescribeOperatingSystemsCommandOutput,
} from "./commands/DescribeOperatingSystemsCommand";
import {
  DescribePermissionsCommand,
  DescribePermissionsCommandInput,
  DescribePermissionsCommandOutput,
} from "./commands/DescribePermissionsCommand";
import {
  DescribeRaidArraysCommand,
  DescribeRaidArraysCommandInput,
  DescribeRaidArraysCommandOutput,
} from "./commands/DescribeRaidArraysCommand";
import {
  DescribeRdsDbInstancesCommand,
  DescribeRdsDbInstancesCommandInput,
  DescribeRdsDbInstancesCommandOutput,
} from "./commands/DescribeRdsDbInstancesCommand";
import {
  DescribeServiceErrorsCommand,
  DescribeServiceErrorsCommandInput,
  DescribeServiceErrorsCommandOutput,
} from "./commands/DescribeServiceErrorsCommand";
import {
  DescribeStackProvisioningParametersCommand,
  DescribeStackProvisioningParametersCommandInput,
  DescribeStackProvisioningParametersCommandOutput,
} from "./commands/DescribeStackProvisioningParametersCommand";
import {
  DescribeStacksCommand,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
} from "./commands/DescribeStacksCommand";
import {
  DescribeStackSummaryCommand,
  DescribeStackSummaryCommandInput,
  DescribeStackSummaryCommandOutput,
} from "./commands/DescribeStackSummaryCommand";
import {
  DescribeTimeBasedAutoScalingCommand,
  DescribeTimeBasedAutoScalingCommandInput,
  DescribeTimeBasedAutoScalingCommandOutput,
} from "./commands/DescribeTimeBasedAutoScalingCommand";
import {
  DescribeUserProfilesCommand,
  DescribeUserProfilesCommandInput,
  DescribeUserProfilesCommandOutput,
} from "./commands/DescribeUserProfilesCommand";
import {
  DescribeVolumesCommand,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
} from "./commands/DescribeVolumesCommand";
import {
  DetachElasticLoadBalancerCommand,
  DetachElasticLoadBalancerCommandInput,
  DetachElasticLoadBalancerCommandOutput,
} from "./commands/DetachElasticLoadBalancerCommand";
import {
  DisassociateElasticIpCommand,
  DisassociateElasticIpCommandInput,
  DisassociateElasticIpCommandOutput,
} from "./commands/DisassociateElasticIpCommand";
import {
  GetHostnameSuggestionCommand,
  GetHostnameSuggestionCommandInput,
  GetHostnameSuggestionCommandOutput,
} from "./commands/GetHostnameSuggestionCommand";
import { GrantAccessCommand, GrantAccessCommandInput, GrantAccessCommandOutput } from "./commands/GrantAccessCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  RebootInstanceCommand,
  RebootInstanceCommandInput,
  RebootInstanceCommandOutput,
} from "./commands/RebootInstanceCommand";
import {
  RegisterEcsClusterCommand,
  RegisterEcsClusterCommandInput,
  RegisterEcsClusterCommandOutput,
} from "./commands/RegisterEcsClusterCommand";
import {
  RegisterElasticIpCommand,
  RegisterElasticIpCommandInput,
  RegisterElasticIpCommandOutput,
} from "./commands/RegisterElasticIpCommand";
import {
  RegisterInstanceCommand,
  RegisterInstanceCommandInput,
  RegisterInstanceCommandOutput,
} from "./commands/RegisterInstanceCommand";
import {
  RegisterRdsDbInstanceCommand,
  RegisterRdsDbInstanceCommandInput,
  RegisterRdsDbInstanceCommandOutput,
} from "./commands/RegisterRdsDbInstanceCommand";
import {
  RegisterVolumeCommand,
  RegisterVolumeCommandInput,
  RegisterVolumeCommandOutput,
} from "./commands/RegisterVolumeCommand";
import {
  SetLoadBasedAutoScalingCommand,
  SetLoadBasedAutoScalingCommandInput,
  SetLoadBasedAutoScalingCommandOutput,
} from "./commands/SetLoadBasedAutoScalingCommand";
import {
  SetPermissionCommand,
  SetPermissionCommandInput,
  SetPermissionCommandOutput,
} from "./commands/SetPermissionCommand";
import {
  SetTimeBasedAutoScalingCommand,
  SetTimeBasedAutoScalingCommandInput,
  SetTimeBasedAutoScalingCommandOutput,
} from "./commands/SetTimeBasedAutoScalingCommand";
import {
  StartInstanceCommand,
  StartInstanceCommandInput,
  StartInstanceCommandOutput,
} from "./commands/StartInstanceCommand";
import { StartStackCommand, StartStackCommandInput, StartStackCommandOutput } from "./commands/StartStackCommand";
import {
  StopInstanceCommand,
  StopInstanceCommandInput,
  StopInstanceCommandOutput,
} from "./commands/StopInstanceCommand";
import { StopStackCommand, StopStackCommandInput, StopStackCommandOutput } from "./commands/StopStackCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UnassignInstanceCommand,
  UnassignInstanceCommandInput,
  UnassignInstanceCommandOutput,
} from "./commands/UnassignInstanceCommand";
import {
  UnassignVolumeCommand,
  UnassignVolumeCommandInput,
  UnassignVolumeCommandOutput,
} from "./commands/UnassignVolumeCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAppCommand, UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import {
  UpdateElasticIpCommand,
  UpdateElasticIpCommandInput,
  UpdateElasticIpCommandOutput,
} from "./commands/UpdateElasticIpCommand";
import {
  UpdateInstanceCommand,
  UpdateInstanceCommandInput,
  UpdateInstanceCommandOutput,
} from "./commands/UpdateInstanceCommand";
import { UpdateLayerCommand, UpdateLayerCommandInput, UpdateLayerCommandOutput } from "./commands/UpdateLayerCommand";
import {
  UpdateMyUserProfileCommand,
  UpdateMyUserProfileCommandInput,
  UpdateMyUserProfileCommandOutput,
} from "./commands/UpdateMyUserProfileCommand";
import {
  UpdateRdsDbInstanceCommand,
  UpdateRdsDbInstanceCommandInput,
  UpdateRdsDbInstanceCommandOutput,
} from "./commands/UpdateRdsDbInstanceCommand";
import { UpdateStackCommand, UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import {
  UpdateUserProfileCommand,
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
} from "./commands/UpdateUserProfileCommand";
import {
  UpdateVolumeCommand,
  UpdateVolumeCommandInput,
  UpdateVolumeCommandOutput,
} from "./commands/UpdateVolumeCommand";
import { OpsWorksClient, OpsWorksClientConfig } from "./OpsWorksClient";

const commands = {
  AssignInstanceCommand,
  AssignVolumeCommand,
  AssociateElasticIpCommand,
  AttachElasticLoadBalancerCommand,
  CloneStackCommand,
  CreateAppCommand,
  CreateDeploymentCommand,
  CreateInstanceCommand,
  CreateLayerCommand,
  CreateStackCommand,
  CreateUserProfileCommand,
  DeleteAppCommand,
  DeleteInstanceCommand,
  DeleteLayerCommand,
  DeleteStackCommand,
  DeleteUserProfileCommand,
  DeregisterEcsClusterCommand,
  DeregisterElasticIpCommand,
  DeregisterInstanceCommand,
  DeregisterRdsDbInstanceCommand,
  DeregisterVolumeCommand,
  DescribeAgentVersionsCommand,
  DescribeAppsCommand,
  DescribeCommandsCommand,
  DescribeDeploymentsCommand,
  DescribeEcsClustersCommand,
  DescribeElasticIpsCommand,
  DescribeElasticLoadBalancersCommand,
  DescribeInstancesCommand,
  DescribeLayersCommand,
  DescribeLoadBasedAutoScalingCommand,
  DescribeMyUserProfileCommand,
  DescribeOperatingSystemsCommand,
  DescribePermissionsCommand,
  DescribeRaidArraysCommand,
  DescribeRdsDbInstancesCommand,
  DescribeServiceErrorsCommand,
  DescribeStackProvisioningParametersCommand,
  DescribeStacksCommand,
  DescribeStackSummaryCommand,
  DescribeTimeBasedAutoScalingCommand,
  DescribeUserProfilesCommand,
  DescribeVolumesCommand,
  DetachElasticLoadBalancerCommand,
  DisassociateElasticIpCommand,
  GetHostnameSuggestionCommand,
  GrantAccessCommand,
  ListTagsCommand,
  RebootInstanceCommand,
  RegisterEcsClusterCommand,
  RegisterElasticIpCommand,
  RegisterInstanceCommand,
  RegisterRdsDbInstanceCommand,
  RegisterVolumeCommand,
  SetLoadBasedAutoScalingCommand,
  SetPermissionCommand,
  SetTimeBasedAutoScalingCommand,
  StartInstanceCommand,
  StartStackCommand,
  StopInstanceCommand,
  StopStackCommand,
  TagResourceCommand,
  UnassignInstanceCommand,
  UnassignVolumeCommand,
  UntagResourceCommand,
  UpdateAppCommand,
  UpdateElasticIpCommand,
  UpdateInstanceCommand,
  UpdateLayerCommand,
  UpdateMyUserProfileCommand,
  UpdateRdsDbInstanceCommand,
  UpdateStackCommand,
  UpdateUserProfileCommand,
  UpdateVolumeCommand,
};

export interface OpsWorks {
  /**
   * @see {@link AssignInstanceCommand}
   */
  assignInstance(
    args: AssignInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignInstanceCommandOutput>;
  assignInstance(args: AssignInstanceCommandInput, cb: (err: any, data?: AssignInstanceCommandOutput) => void): void;
  assignInstance(
    args: AssignInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link AssignVolumeCommand}
   */
  assignVolume(args: AssignVolumeCommandInput, options?: __HttpHandlerOptions): Promise<AssignVolumeCommandOutput>;
  assignVolume(args: AssignVolumeCommandInput, cb: (err: any, data?: AssignVolumeCommandOutput) => void): void;
  assignVolume(
    args: AssignVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateElasticIpCommand}
   */
  associateElasticIp(
    args: AssociateElasticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateElasticIpCommandOutput>;
  associateElasticIp(
    args: AssociateElasticIpCommandInput,
    cb: (err: any, data?: AssociateElasticIpCommandOutput) => void
  ): void;
  associateElasticIp(
    args: AssociateElasticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateElasticIpCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachElasticLoadBalancerCommand}
   */
  attachElasticLoadBalancer(
    args: AttachElasticLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachElasticLoadBalancerCommandOutput>;
  attachElasticLoadBalancer(
    args: AttachElasticLoadBalancerCommandInput,
    cb: (err: any, data?: AttachElasticLoadBalancerCommandOutput) => void
  ): void;
  attachElasticLoadBalancer(
    args: AttachElasticLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachElasticLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link CloneStackCommand}
   */
  cloneStack(args: CloneStackCommandInput, options?: __HttpHandlerOptions): Promise<CloneStackCommandOutput>;
  cloneStack(args: CloneStackCommandInput, cb: (err: any, data?: CloneStackCommandOutput) => void): void;
  cloneStack(
    args: CloneStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloneStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppCommand}
   */
  createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
  createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
  createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceCommand}
   */
  createInstance(
    args: CreateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceCommandOutput>;
  createInstance(args: CreateInstanceCommandInput, cb: (err: any, data?: CreateInstanceCommandOutput) => void): void;
  createInstance(
    args: CreateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLayerCommand}
   */
  createLayer(args: CreateLayerCommandInput, options?: __HttpHandlerOptions): Promise<CreateLayerCommandOutput>;
  createLayer(args: CreateLayerCommandInput, cb: (err: any, data?: CreateLayerCommandOutput) => void): void;
  createLayer(
    args: CreateLayerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLayerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStackCommand}
   */
  createStack(args: CreateStackCommandInput, options?: __HttpHandlerOptions): Promise<CreateStackCommandOutput>;
  createStack(args: CreateStackCommandInput, cb: (err: any, data?: CreateStackCommandOutput) => void): void;
  createStack(
    args: CreateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserProfileCommand}
   */
  createUserProfile(
    args: CreateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserProfileCommandOutput>;
  createUserProfile(
    args: CreateUserProfileCommandInput,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;
  createUserProfile(
    args: CreateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppCommand}
   */
  deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceCommand}
   */
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceCommandOutput>;
  deleteInstance(args: DeleteInstanceCommandInput, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLayerCommand}
   */
  deleteLayer(args: DeleteLayerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLayerCommandOutput>;
  deleteLayer(args: DeleteLayerCommandInput, cb: (err: any, data?: DeleteLayerCommandOutput) => void): void;
  deleteLayer(
    args: DeleteLayerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLayerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStackCommand}
   */
  deleteStack(args: DeleteStackCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStackCommandOutput>;
  deleteStack(args: DeleteStackCommandInput, cb: (err: any, data?: DeleteStackCommandOutput) => void): void;
  deleteStack(
    args: DeleteStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserProfileCommand}
   */
  deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserProfileCommandOutput>;
  deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;
  deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterEcsClusterCommand}
   */
  deregisterEcsCluster(
    args: DeregisterEcsClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterEcsClusterCommandOutput>;
  deregisterEcsCluster(
    args: DeregisterEcsClusterCommandInput,
    cb: (err: any, data?: DeregisterEcsClusterCommandOutput) => void
  ): void;
  deregisterEcsCluster(
    args: DeregisterEcsClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterEcsClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterElasticIpCommand}
   */
  deregisterElasticIp(
    args: DeregisterElasticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterElasticIpCommandOutput>;
  deregisterElasticIp(
    args: DeregisterElasticIpCommandInput,
    cb: (err: any, data?: DeregisterElasticIpCommandOutput) => void
  ): void;
  deregisterElasticIp(
    args: DeregisterElasticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterElasticIpCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterInstanceCommand}
   */
  deregisterInstance(
    args: DeregisterInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterInstanceCommandOutput>;
  deregisterInstance(
    args: DeregisterInstanceCommandInput,
    cb: (err: any, data?: DeregisterInstanceCommandOutput) => void
  ): void;
  deregisterInstance(
    args: DeregisterInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterRdsDbInstanceCommand}
   */
  deregisterRdsDbInstance(
    args: DeregisterRdsDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterRdsDbInstanceCommandOutput>;
  deregisterRdsDbInstance(
    args: DeregisterRdsDbInstanceCommandInput,
    cb: (err: any, data?: DeregisterRdsDbInstanceCommandOutput) => void
  ): void;
  deregisterRdsDbInstance(
    args: DeregisterRdsDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterRdsDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterVolumeCommand}
   */
  deregisterVolume(
    args: DeregisterVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterVolumeCommandOutput>;
  deregisterVolume(
    args: DeregisterVolumeCommandInput,
    cb: (err: any, data?: DeregisterVolumeCommandOutput) => void
  ): void;
  deregisterVolume(
    args: DeregisterVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgentVersionsCommand}
   */
  describeAgentVersions(
    args: DescribeAgentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgentVersionsCommandOutput>;
  describeAgentVersions(
    args: DescribeAgentVersionsCommandInput,
    cb: (err: any, data?: DescribeAgentVersionsCommandOutput) => void
  ): void;
  describeAgentVersions(
    args: DescribeAgentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppsCommand}
   */
  describeApps(args: DescribeAppsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAppsCommandOutput>;
  describeApps(args: DescribeAppsCommandInput, cb: (err: any, data?: DescribeAppsCommandOutput) => void): void;
  describeApps(
    args: DescribeAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCommandsCommand}
   */
  describeCommands(
    args: DescribeCommandsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCommandsCommandOutput>;
  describeCommands(
    args: DescribeCommandsCommandInput,
    cb: (err: any, data?: DescribeCommandsCommandOutput) => void
  ): void;
  describeCommands(
    args: DescribeCommandsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCommandsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeploymentsCommand}
   */
  describeDeployments(
    args: DescribeDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeploymentsCommandOutput>;
  describeDeployments(
    args: DescribeDeploymentsCommandInput,
    cb: (err: any, data?: DescribeDeploymentsCommandOutput) => void
  ): void;
  describeDeployments(
    args: DescribeDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEcsClustersCommand}
   */
  describeEcsClusters(
    args: DescribeEcsClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEcsClustersCommandOutput>;
  describeEcsClusters(
    args: DescribeEcsClustersCommandInput,
    cb: (err: any, data?: DescribeEcsClustersCommandOutput) => void
  ): void;
  describeEcsClusters(
    args: DescribeEcsClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEcsClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeElasticIpsCommand}
   */
  describeElasticIps(
    args: DescribeElasticIpsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticIpsCommandOutput>;
  describeElasticIps(
    args: DescribeElasticIpsCommandInput,
    cb: (err: any, data?: DescribeElasticIpsCommandOutput) => void
  ): void;
  describeElasticIps(
    args: DescribeElasticIpsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticIpsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeElasticLoadBalancersCommand}
   */
  describeElasticLoadBalancers(
    args: DescribeElasticLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticLoadBalancersCommandOutput>;
  describeElasticLoadBalancers(
    args: DescribeElasticLoadBalancersCommandInput,
    cb: (err: any, data?: DescribeElasticLoadBalancersCommandOutput) => void
  ): void;
  describeElasticLoadBalancers(
    args: DescribeElasticLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstancesCommand}
   */
  describeInstances(
    args: DescribeInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancesCommandOutput>;
  describeInstances(
    args: DescribeInstancesCommandInput,
    cb: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): void;
  describeInstances(
    args: DescribeInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLayersCommand}
   */
  describeLayers(
    args: DescribeLayersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLayersCommandOutput>;
  describeLayers(args: DescribeLayersCommandInput, cb: (err: any, data?: DescribeLayersCommandOutput) => void): void;
  describeLayers(
    args: DescribeLayersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLayersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBasedAutoScalingCommand}
   */
  describeLoadBasedAutoScaling(
    args: DescribeLoadBasedAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBasedAutoScalingCommandOutput>;
  describeLoadBasedAutoScaling(
    args: DescribeLoadBasedAutoScalingCommandInput,
    cb: (err: any, data?: DescribeLoadBasedAutoScalingCommandOutput) => void
  ): void;
  describeLoadBasedAutoScaling(
    args: DescribeLoadBasedAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBasedAutoScalingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMyUserProfileCommand}
   */
  describeMyUserProfile(
    args: DescribeMyUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMyUserProfileCommandOutput>;
  describeMyUserProfile(
    args: DescribeMyUserProfileCommandInput,
    cb: (err: any, data?: DescribeMyUserProfileCommandOutput) => void
  ): void;
  describeMyUserProfile(
    args: DescribeMyUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMyUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOperatingSystemsCommand}
   */
  describeOperatingSystems(
    args: DescribeOperatingSystemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOperatingSystemsCommandOutput>;
  describeOperatingSystems(
    args: DescribeOperatingSystemsCommandInput,
    cb: (err: any, data?: DescribeOperatingSystemsCommandOutput) => void
  ): void;
  describeOperatingSystems(
    args: DescribeOperatingSystemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOperatingSystemsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePermissionsCommand}
   */
  describePermissions(
    args: DescribePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePermissionsCommandOutput>;
  describePermissions(
    args: DescribePermissionsCommandInput,
    cb: (err: any, data?: DescribePermissionsCommandOutput) => void
  ): void;
  describePermissions(
    args: DescribePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRaidArraysCommand}
   */
  describeRaidArrays(
    args: DescribeRaidArraysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRaidArraysCommandOutput>;
  describeRaidArrays(
    args: DescribeRaidArraysCommandInput,
    cb: (err: any, data?: DescribeRaidArraysCommandOutput) => void
  ): void;
  describeRaidArrays(
    args: DescribeRaidArraysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRaidArraysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRdsDbInstancesCommand}
   */
  describeRdsDbInstances(
    args: DescribeRdsDbInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRdsDbInstancesCommandOutput>;
  describeRdsDbInstances(
    args: DescribeRdsDbInstancesCommandInput,
    cb: (err: any, data?: DescribeRdsDbInstancesCommandOutput) => void
  ): void;
  describeRdsDbInstances(
    args: DescribeRdsDbInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRdsDbInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServiceErrorsCommand}
   */
  describeServiceErrors(
    args: DescribeServiceErrorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceErrorsCommandOutput>;
  describeServiceErrors(
    args: DescribeServiceErrorsCommandInput,
    cb: (err: any, data?: DescribeServiceErrorsCommandOutput) => void
  ): void;
  describeServiceErrors(
    args: DescribeServiceErrorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceErrorsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStackProvisioningParametersCommand}
   */
  describeStackProvisioningParameters(
    args: DescribeStackProvisioningParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackProvisioningParametersCommandOutput>;
  describeStackProvisioningParameters(
    args: DescribeStackProvisioningParametersCommandInput,
    cb: (err: any, data?: DescribeStackProvisioningParametersCommandOutput) => void
  ): void;
  describeStackProvisioningParameters(
    args: DescribeStackProvisioningParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackProvisioningParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStacksCommand}
   */
  describeStacks(
    args: DescribeStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStacksCommandOutput>;
  describeStacks(args: DescribeStacksCommandInput, cb: (err: any, data?: DescribeStacksCommandOutput) => void): void;
  describeStacks(
    args: DescribeStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStackSummaryCommand}
   */
  describeStackSummary(
    args: DescribeStackSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackSummaryCommandOutput>;
  describeStackSummary(
    args: DescribeStackSummaryCommandInput,
    cb: (err: any, data?: DescribeStackSummaryCommandOutput) => void
  ): void;
  describeStackSummary(
    args: DescribeStackSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTimeBasedAutoScalingCommand}
   */
  describeTimeBasedAutoScaling(
    args: DescribeTimeBasedAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTimeBasedAutoScalingCommandOutput>;
  describeTimeBasedAutoScaling(
    args: DescribeTimeBasedAutoScalingCommandInput,
    cb: (err: any, data?: DescribeTimeBasedAutoScalingCommandOutput) => void
  ): void;
  describeTimeBasedAutoScaling(
    args: DescribeTimeBasedAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTimeBasedAutoScalingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserProfilesCommand}
   */
  describeUserProfiles(
    args: DescribeUserProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserProfilesCommandOutput>;
  describeUserProfiles(
    args: DescribeUserProfilesCommandInput,
    cb: (err: any, data?: DescribeUserProfilesCommandOutput) => void
  ): void;
  describeUserProfiles(
    args: DescribeUserProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVolumesCommand}
   */
  describeVolumes(
    args: DescribeVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumesCommandOutput>;
  describeVolumes(args: DescribeVolumesCommandInput, cb: (err: any, data?: DescribeVolumesCommandOutput) => void): void;
  describeVolumes(
    args: DescribeVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachElasticLoadBalancerCommand}
   */
  detachElasticLoadBalancer(
    args: DetachElasticLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachElasticLoadBalancerCommandOutput>;
  detachElasticLoadBalancer(
    args: DetachElasticLoadBalancerCommandInput,
    cb: (err: any, data?: DetachElasticLoadBalancerCommandOutput) => void
  ): void;
  detachElasticLoadBalancer(
    args: DetachElasticLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachElasticLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateElasticIpCommand}
   */
  disassociateElasticIp(
    args: DisassociateElasticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateElasticIpCommandOutput>;
  disassociateElasticIp(
    args: DisassociateElasticIpCommandInput,
    cb: (err: any, data?: DisassociateElasticIpCommandOutput) => void
  ): void;
  disassociateElasticIp(
    args: DisassociateElasticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateElasticIpCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostnameSuggestionCommand}
   */
  getHostnameSuggestion(
    args: GetHostnameSuggestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostnameSuggestionCommandOutput>;
  getHostnameSuggestion(
    args: GetHostnameSuggestionCommandInput,
    cb: (err: any, data?: GetHostnameSuggestionCommandOutput) => void
  ): void;
  getHostnameSuggestion(
    args: GetHostnameSuggestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostnameSuggestionCommandOutput) => void
  ): void;

  /**
   * @see {@link GrantAccessCommand}
   */
  grantAccess(args: GrantAccessCommandInput, options?: __HttpHandlerOptions): Promise<GrantAccessCommandOutput>;
  grantAccess(args: GrantAccessCommandInput, cb: (err: any, data?: GrantAccessCommandOutput) => void): void;
  grantAccess(
    args: GrantAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GrantAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootInstanceCommand}
   */
  rebootInstance(
    args: RebootInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootInstanceCommandOutput>;
  rebootInstance(args: RebootInstanceCommandInput, cb: (err: any, data?: RebootInstanceCommandOutput) => void): void;
  rebootInstance(
    args: RebootInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterEcsClusterCommand}
   */
  registerEcsCluster(
    args: RegisterEcsClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterEcsClusterCommandOutput>;
  registerEcsCluster(
    args: RegisterEcsClusterCommandInput,
    cb: (err: any, data?: RegisterEcsClusterCommandOutput) => void
  ): void;
  registerEcsCluster(
    args: RegisterEcsClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterEcsClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterElasticIpCommand}
   */
  registerElasticIp(
    args: RegisterElasticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterElasticIpCommandOutput>;
  registerElasticIp(
    args: RegisterElasticIpCommandInput,
    cb: (err: any, data?: RegisterElasticIpCommandOutput) => void
  ): void;
  registerElasticIp(
    args: RegisterElasticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterElasticIpCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterInstanceCommand}
   */
  registerInstance(
    args: RegisterInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterInstanceCommandOutput>;
  registerInstance(
    args: RegisterInstanceCommandInput,
    cb: (err: any, data?: RegisterInstanceCommandOutput) => void
  ): void;
  registerInstance(
    args: RegisterInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterRdsDbInstanceCommand}
   */
  registerRdsDbInstance(
    args: RegisterRdsDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterRdsDbInstanceCommandOutput>;
  registerRdsDbInstance(
    args: RegisterRdsDbInstanceCommandInput,
    cb: (err: any, data?: RegisterRdsDbInstanceCommandOutput) => void
  ): void;
  registerRdsDbInstance(
    args: RegisterRdsDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterRdsDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterVolumeCommand}
   */
  registerVolume(
    args: RegisterVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterVolumeCommandOutput>;
  registerVolume(args: RegisterVolumeCommandInput, cb: (err: any, data?: RegisterVolumeCommandOutput) => void): void;
  registerVolume(
    args: RegisterVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link SetLoadBasedAutoScalingCommand}
   */
  setLoadBasedAutoScaling(
    args: SetLoadBasedAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetLoadBasedAutoScalingCommandOutput>;
  setLoadBasedAutoScaling(
    args: SetLoadBasedAutoScalingCommandInput,
    cb: (err: any, data?: SetLoadBasedAutoScalingCommandOutput) => void
  ): void;
  setLoadBasedAutoScaling(
    args: SetLoadBasedAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLoadBasedAutoScalingCommandOutput) => void
  ): void;

  /**
   * @see {@link SetPermissionCommand}
   */
  setPermission(args: SetPermissionCommandInput, options?: __HttpHandlerOptions): Promise<SetPermissionCommandOutput>;
  setPermission(args: SetPermissionCommandInput, cb: (err: any, data?: SetPermissionCommandOutput) => void): void;
  setPermission(
    args: SetPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link SetTimeBasedAutoScalingCommand}
   */
  setTimeBasedAutoScaling(
    args: SetTimeBasedAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTimeBasedAutoScalingCommandOutput>;
  setTimeBasedAutoScaling(
    args: SetTimeBasedAutoScalingCommandInput,
    cb: (err: any, data?: SetTimeBasedAutoScalingCommandOutput) => void
  ): void;
  setTimeBasedAutoScaling(
    args: SetTimeBasedAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTimeBasedAutoScalingCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInstanceCommand}
   */
  startInstance(args: StartInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StartInstanceCommandOutput>;
  startInstance(args: StartInstanceCommandInput, cb: (err: any, data?: StartInstanceCommandOutput) => void): void;
  startInstance(
    args: StartInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartStackCommand}
   */
  startStack(args: StartStackCommandInput, options?: __HttpHandlerOptions): Promise<StartStackCommandOutput>;
  startStack(args: StartStackCommandInput, cb: (err: any, data?: StartStackCommandOutput) => void): void;
  startStack(
    args: StartStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStackCommandOutput) => void
  ): void;

  /**
   * @see {@link StopInstanceCommand}
   */
  stopInstance(args: StopInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StopInstanceCommandOutput>;
  stopInstance(args: StopInstanceCommandInput, cb: (err: any, data?: StopInstanceCommandOutput) => void): void;
  stopInstance(
    args: StopInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StopStackCommand}
   */
  stopStack(args: StopStackCommandInput, options?: __HttpHandlerOptions): Promise<StopStackCommandOutput>;
  stopStack(args: StopStackCommandInput, cb: (err: any, data?: StopStackCommandOutput) => void): void;
  stopStack(
    args: StopStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopStackCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UnassignInstanceCommand}
   */
  unassignInstance(
    args: UnassignInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnassignInstanceCommandOutput>;
  unassignInstance(
    args: UnassignInstanceCommandInput,
    cb: (err: any, data?: UnassignInstanceCommandOutput) => void
  ): void;
  unassignInstance(
    args: UnassignInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnassignInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UnassignVolumeCommand}
   */
  unassignVolume(
    args: UnassignVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnassignVolumeCommandOutput>;
  unassignVolume(args: UnassignVolumeCommandInput, cb: (err: any, data?: UnassignVolumeCommandOutput) => void): void;
  unassignVolume(
    args: UnassignVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnassignVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppCommand}
   */
  updateApp(args: UpdateAppCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAppCommandOutput>;
  updateApp(args: UpdateAppCommandInput, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
  updateApp(
    args: UpdateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateElasticIpCommand}
   */
  updateElasticIp(
    args: UpdateElasticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateElasticIpCommandOutput>;
  updateElasticIp(args: UpdateElasticIpCommandInput, cb: (err: any, data?: UpdateElasticIpCommandOutput) => void): void;
  updateElasticIp(
    args: UpdateElasticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateElasticIpCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInstanceCommand}
   */
  updateInstance(
    args: UpdateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceCommandOutput>;
  updateInstance(args: UpdateInstanceCommandInput, cb: (err: any, data?: UpdateInstanceCommandOutput) => void): void;
  updateInstance(
    args: UpdateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLayerCommand}
   */
  updateLayer(args: UpdateLayerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLayerCommandOutput>;
  updateLayer(args: UpdateLayerCommandInput, cb: (err: any, data?: UpdateLayerCommandOutput) => void): void;
  updateLayer(
    args: UpdateLayerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLayerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMyUserProfileCommand}
   */
  updateMyUserProfile(
    args: UpdateMyUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMyUserProfileCommandOutput>;
  updateMyUserProfile(
    args: UpdateMyUserProfileCommandInput,
    cb: (err: any, data?: UpdateMyUserProfileCommandOutput) => void
  ): void;
  updateMyUserProfile(
    args: UpdateMyUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMyUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRdsDbInstanceCommand}
   */
  updateRdsDbInstance(
    args: UpdateRdsDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRdsDbInstanceCommandOutput>;
  updateRdsDbInstance(
    args: UpdateRdsDbInstanceCommandInput,
    cb: (err: any, data?: UpdateRdsDbInstanceCommandOutput) => void
  ): void;
  updateRdsDbInstance(
    args: UpdateRdsDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRdsDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStackCommand}
   */
  updateStack(args: UpdateStackCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStackCommandOutput>;
  updateStack(args: UpdateStackCommandInput, cb: (err: any, data?: UpdateStackCommandOutput) => void): void;
  updateStack(
    args: UpdateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserProfileCommand}
   */
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserProfileCommandOutput>;
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVolumeCommand}
   */
  updateVolume(args: UpdateVolumeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVolumeCommandOutput>;
  updateVolume(args: UpdateVolumeCommandInput, cb: (err: any, data?: UpdateVolumeCommandOutput) => void): void;
  updateVolume(
    args: UpdateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVolumeCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>AWS OpsWorks</fullname>
 *          <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and
 *       usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error
 *       codes. </p>
 *          <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for
 *       overseeing the complete application lifecycle. For information about this product, go to the
 *         <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p>
 *
 *          <p>
 *             <b>SDKs and CLI</b>
 *          </p>
 *          <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for
 *           .NET</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS
 *           SDK for PHP 2</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for
 *           Python(Boto)</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks
 *           can only be accessed or managed within the endpoint in which they are created.</p>
 *          <ul>
 *             <li>
 *                <p>opsworks.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-east-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-3.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-central-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-northeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-northeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-south-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-southeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-southeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.sa-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Chef Versions</b>
 *          </p>
 *          <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you
 *       use the <code>ConfigurationManager</code> parameter to specify the Chef version.
 *       The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information,
 *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p>
 *          <note>
 *             <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p>
 *          </note>
 */
export class OpsWorks extends OpsWorksClient implements OpsWorks {}
createAggregatedClient(commands, OpsWorks);
