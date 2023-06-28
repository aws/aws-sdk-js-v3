// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AcceptMatchCommand, AcceptMatchCommandInput, AcceptMatchCommandOutput } from "./commands/AcceptMatchCommand";
import {
  ClaimGameServerCommand,
  ClaimGameServerCommandInput,
  ClaimGameServerCommandOutput,
} from "./commands/ClaimGameServerCommand";
import { CreateAliasCommand, CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateBuildCommand, CreateBuildCommandInput, CreateBuildCommandOutput } from "./commands/CreateBuildCommand";
import { CreateFleetCommand, CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateFleetLocationsCommand,
  CreateFleetLocationsCommandInput,
  CreateFleetLocationsCommandOutput,
} from "./commands/CreateFleetLocationsCommand";
import {
  CreateGameServerGroupCommand,
  CreateGameServerGroupCommandInput,
  CreateGameServerGroupCommandOutput,
} from "./commands/CreateGameServerGroupCommand";
import {
  CreateGameSessionCommand,
  CreateGameSessionCommandInput,
  CreateGameSessionCommandOutput,
} from "./commands/CreateGameSessionCommand";
import {
  CreateGameSessionQueueCommand,
  CreateGameSessionQueueCommandInput,
  CreateGameSessionQueueCommandOutput,
} from "./commands/CreateGameSessionQueueCommand";
import {
  CreateLocationCommand,
  CreateLocationCommandInput,
  CreateLocationCommandOutput,
} from "./commands/CreateLocationCommand";
import {
  CreateMatchmakingConfigurationCommand,
  CreateMatchmakingConfigurationCommandInput,
  CreateMatchmakingConfigurationCommandOutput,
} from "./commands/CreateMatchmakingConfigurationCommand";
import {
  CreateMatchmakingRuleSetCommand,
  CreateMatchmakingRuleSetCommandInput,
  CreateMatchmakingRuleSetCommandOutput,
} from "./commands/CreateMatchmakingRuleSetCommand";
import {
  CreatePlayerSessionCommand,
  CreatePlayerSessionCommandInput,
  CreatePlayerSessionCommandOutput,
} from "./commands/CreatePlayerSessionCommand";
import {
  CreatePlayerSessionsCommand,
  CreatePlayerSessionsCommandInput,
  CreatePlayerSessionsCommandOutput,
} from "./commands/CreatePlayerSessionsCommand";
import {
  CreateScriptCommand,
  CreateScriptCommandInput,
  CreateScriptCommandOutput,
} from "./commands/CreateScriptCommand";
import {
  CreateVpcPeeringAuthorizationCommand,
  CreateVpcPeeringAuthorizationCommandInput,
  CreateVpcPeeringAuthorizationCommandOutput,
} from "./commands/CreateVpcPeeringAuthorizationCommand";
import {
  CreateVpcPeeringConnectionCommand,
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
} from "./commands/CreateVpcPeeringConnectionCommand";
import { DeleteAliasCommand, DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteBuildCommand, DeleteBuildCommandInput, DeleteBuildCommandOutput } from "./commands/DeleteBuildCommand";
import { DeleteFleetCommand, DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteFleetLocationsCommand,
  DeleteFleetLocationsCommandInput,
  DeleteFleetLocationsCommandOutput,
} from "./commands/DeleteFleetLocationsCommand";
import {
  DeleteGameServerGroupCommand,
  DeleteGameServerGroupCommandInput,
  DeleteGameServerGroupCommandOutput,
} from "./commands/DeleteGameServerGroupCommand";
import {
  DeleteGameSessionQueueCommand,
  DeleteGameSessionQueueCommandInput,
  DeleteGameSessionQueueCommandOutput,
} from "./commands/DeleteGameSessionQueueCommand";
import {
  DeleteLocationCommand,
  DeleteLocationCommandInput,
  DeleteLocationCommandOutput,
} from "./commands/DeleteLocationCommand";
import {
  DeleteMatchmakingConfigurationCommand,
  DeleteMatchmakingConfigurationCommandInput,
  DeleteMatchmakingConfigurationCommandOutput,
} from "./commands/DeleteMatchmakingConfigurationCommand";
import {
  DeleteMatchmakingRuleSetCommand,
  DeleteMatchmakingRuleSetCommandInput,
  DeleteMatchmakingRuleSetCommandOutput,
} from "./commands/DeleteMatchmakingRuleSetCommand";
import {
  DeleteScalingPolicyCommand,
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "./commands/DeleteScalingPolicyCommand";
import {
  DeleteScriptCommand,
  DeleteScriptCommandInput,
  DeleteScriptCommandOutput,
} from "./commands/DeleteScriptCommand";
import {
  DeleteVpcPeeringAuthorizationCommand,
  DeleteVpcPeeringAuthorizationCommandInput,
  DeleteVpcPeeringAuthorizationCommandOutput,
} from "./commands/DeleteVpcPeeringAuthorizationCommand";
import {
  DeleteVpcPeeringConnectionCommand,
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
} from "./commands/DeleteVpcPeeringConnectionCommand";
import {
  DeregisterComputeCommand,
  DeregisterComputeCommandInput,
  DeregisterComputeCommandOutput,
} from "./commands/DeregisterComputeCommand";
import {
  DeregisterGameServerCommand,
  DeregisterGameServerCommandInput,
  DeregisterGameServerCommandOutput,
} from "./commands/DeregisterGameServerCommand";
import {
  DescribeAliasCommand,
  DescribeAliasCommandInput,
  DescribeAliasCommandOutput,
} from "./commands/DescribeAliasCommand";
import {
  DescribeBuildCommand,
  DescribeBuildCommandInput,
  DescribeBuildCommandOutput,
} from "./commands/DescribeBuildCommand";
import {
  DescribeComputeCommand,
  DescribeComputeCommandInput,
  DescribeComputeCommandOutput,
} from "./commands/DescribeComputeCommand";
import {
  DescribeEC2InstanceLimitsCommand,
  DescribeEC2InstanceLimitsCommandInput,
  DescribeEC2InstanceLimitsCommandOutput,
} from "./commands/DescribeEC2InstanceLimitsCommand";
import {
  DescribeFleetAttributesCommand,
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput,
} from "./commands/DescribeFleetAttributesCommand";
import {
  DescribeFleetCapacityCommand,
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
} from "./commands/DescribeFleetCapacityCommand";
import {
  DescribeFleetEventsCommand,
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput,
} from "./commands/DescribeFleetEventsCommand";
import {
  DescribeFleetLocationAttributesCommand,
  DescribeFleetLocationAttributesCommandInput,
  DescribeFleetLocationAttributesCommandOutput,
} from "./commands/DescribeFleetLocationAttributesCommand";
import {
  DescribeFleetLocationCapacityCommand,
  DescribeFleetLocationCapacityCommandInput,
  DescribeFleetLocationCapacityCommandOutput,
} from "./commands/DescribeFleetLocationCapacityCommand";
import {
  DescribeFleetLocationUtilizationCommand,
  DescribeFleetLocationUtilizationCommandInput,
  DescribeFleetLocationUtilizationCommandOutput,
} from "./commands/DescribeFleetLocationUtilizationCommand";
import {
  DescribeFleetPortSettingsCommand,
  DescribeFleetPortSettingsCommandInput,
  DescribeFleetPortSettingsCommandOutput,
} from "./commands/DescribeFleetPortSettingsCommand";
import {
  DescribeFleetUtilizationCommand,
  DescribeFleetUtilizationCommandInput,
  DescribeFleetUtilizationCommandOutput,
} from "./commands/DescribeFleetUtilizationCommand";
import {
  DescribeGameServerCommand,
  DescribeGameServerCommandInput,
  DescribeGameServerCommandOutput,
} from "./commands/DescribeGameServerCommand";
import {
  DescribeGameServerGroupCommand,
  DescribeGameServerGroupCommandInput,
  DescribeGameServerGroupCommandOutput,
} from "./commands/DescribeGameServerGroupCommand";
import {
  DescribeGameServerInstancesCommand,
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
} from "./commands/DescribeGameServerInstancesCommand";
import {
  DescribeGameSessionDetailsCommand,
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput,
} from "./commands/DescribeGameSessionDetailsCommand";
import {
  DescribeGameSessionPlacementCommand,
  DescribeGameSessionPlacementCommandInput,
  DescribeGameSessionPlacementCommandOutput,
} from "./commands/DescribeGameSessionPlacementCommand";
import {
  DescribeGameSessionQueuesCommand,
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
} from "./commands/DescribeGameSessionQueuesCommand";
import {
  DescribeGameSessionsCommand,
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput,
} from "./commands/DescribeGameSessionsCommand";
import {
  DescribeInstancesCommand,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "./commands/DescribeInstancesCommand";
import {
  DescribeMatchmakingCommand,
  DescribeMatchmakingCommandInput,
  DescribeMatchmakingCommandOutput,
} from "./commands/DescribeMatchmakingCommand";
import {
  DescribeMatchmakingConfigurationsCommand,
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
} from "./commands/DescribeMatchmakingConfigurationsCommand";
import {
  DescribeMatchmakingRuleSetsCommand,
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput,
} from "./commands/DescribeMatchmakingRuleSetsCommand";
import {
  DescribePlayerSessionsCommand,
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
} from "./commands/DescribePlayerSessionsCommand";
import {
  DescribeRuntimeConfigurationCommand,
  DescribeRuntimeConfigurationCommandInput,
  DescribeRuntimeConfigurationCommandOutput,
} from "./commands/DescribeRuntimeConfigurationCommand";
import {
  DescribeScalingPoliciesCommand,
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "./commands/DescribeScalingPoliciesCommand";
import {
  DescribeScriptCommand,
  DescribeScriptCommandInput,
  DescribeScriptCommandOutput,
} from "./commands/DescribeScriptCommand";
import {
  DescribeVpcPeeringAuthorizationsCommand,
  DescribeVpcPeeringAuthorizationsCommandInput,
  DescribeVpcPeeringAuthorizationsCommandOutput,
} from "./commands/DescribeVpcPeeringAuthorizationsCommand";
import {
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
} from "./commands/DescribeVpcPeeringConnectionsCommand";
import {
  GetComputeAccessCommand,
  GetComputeAccessCommandInput,
  GetComputeAccessCommandOutput,
} from "./commands/GetComputeAccessCommand";
import {
  GetComputeAuthTokenCommand,
  GetComputeAuthTokenCommandInput,
  GetComputeAuthTokenCommandOutput,
} from "./commands/GetComputeAuthTokenCommand";
import {
  GetGameSessionLogUrlCommand,
  GetGameSessionLogUrlCommandInput,
  GetGameSessionLogUrlCommandOutput,
} from "./commands/GetGameSessionLogUrlCommand";
import {
  GetInstanceAccessCommand,
  GetInstanceAccessCommandInput,
  GetInstanceAccessCommandOutput,
} from "./commands/GetInstanceAccessCommand";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListBuildsCommand, ListBuildsCommandInput, ListBuildsCommandOutput } from "./commands/ListBuildsCommand";
import { ListComputeCommand, ListComputeCommandInput, ListComputeCommandOutput } from "./commands/ListComputeCommand";
import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListGameServerGroupsCommand,
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
} from "./commands/ListGameServerGroupsCommand";
import {
  ListGameServersCommand,
  ListGameServersCommandInput,
  ListGameServersCommandOutput,
} from "./commands/ListGameServersCommand";
import {
  ListLocationsCommand,
  ListLocationsCommandInput,
  ListLocationsCommandOutput,
} from "./commands/ListLocationsCommand";
import { ListScriptsCommand, ListScriptsCommandInput, ListScriptsCommandOutput } from "./commands/ListScriptsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutScalingPolicyCommand,
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
} from "./commands/PutScalingPolicyCommand";
import {
  RegisterComputeCommand,
  RegisterComputeCommandInput,
  RegisterComputeCommandOutput,
} from "./commands/RegisterComputeCommand";
import {
  RegisterGameServerCommand,
  RegisterGameServerCommandInput,
  RegisterGameServerCommandOutput,
} from "./commands/RegisterGameServerCommand";
import {
  RequestUploadCredentialsCommand,
  RequestUploadCredentialsCommandInput,
  RequestUploadCredentialsCommandOutput,
} from "./commands/RequestUploadCredentialsCommand";
import {
  ResolveAliasCommand,
  ResolveAliasCommandInput,
  ResolveAliasCommandOutput,
} from "./commands/ResolveAliasCommand";
import {
  ResumeGameServerGroupCommand,
  ResumeGameServerGroupCommandInput,
  ResumeGameServerGroupCommandOutput,
} from "./commands/ResumeGameServerGroupCommand";
import {
  SearchGameSessionsCommand,
  SearchGameSessionsCommandInput,
  SearchGameSessionsCommandOutput,
} from "./commands/SearchGameSessionsCommand";
import {
  StartFleetActionsCommand,
  StartFleetActionsCommandInput,
  StartFleetActionsCommandOutput,
} from "./commands/StartFleetActionsCommand";
import {
  StartGameSessionPlacementCommand,
  StartGameSessionPlacementCommandInput,
  StartGameSessionPlacementCommandOutput,
} from "./commands/StartGameSessionPlacementCommand";
import {
  StartMatchBackfillCommand,
  StartMatchBackfillCommandInput,
  StartMatchBackfillCommandOutput,
} from "./commands/StartMatchBackfillCommand";
import {
  StartMatchmakingCommand,
  StartMatchmakingCommandInput,
  StartMatchmakingCommandOutput,
} from "./commands/StartMatchmakingCommand";
import {
  StopFleetActionsCommand,
  StopFleetActionsCommandInput,
  StopFleetActionsCommandOutput,
} from "./commands/StopFleetActionsCommand";
import {
  StopGameSessionPlacementCommand,
  StopGameSessionPlacementCommandInput,
  StopGameSessionPlacementCommandOutput,
} from "./commands/StopGameSessionPlacementCommand";
import {
  StopMatchmakingCommand,
  StopMatchmakingCommandInput,
  StopMatchmakingCommandOutput,
} from "./commands/StopMatchmakingCommand";
import {
  SuspendGameServerGroupCommand,
  SuspendGameServerGroupCommandInput,
  SuspendGameServerGroupCommandOutput,
} from "./commands/SuspendGameServerGroupCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAliasCommand, UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import { UpdateBuildCommand, UpdateBuildCommandInput, UpdateBuildCommandOutput } from "./commands/UpdateBuildCommand";
import {
  UpdateFleetAttributesCommand,
  UpdateFleetAttributesCommandInput,
  UpdateFleetAttributesCommandOutput,
} from "./commands/UpdateFleetAttributesCommand";
import {
  UpdateFleetCapacityCommand,
  UpdateFleetCapacityCommandInput,
  UpdateFleetCapacityCommandOutput,
} from "./commands/UpdateFleetCapacityCommand";
import {
  UpdateFleetPortSettingsCommand,
  UpdateFleetPortSettingsCommandInput,
  UpdateFleetPortSettingsCommandOutput,
} from "./commands/UpdateFleetPortSettingsCommand";
import {
  UpdateGameServerCommand,
  UpdateGameServerCommandInput,
  UpdateGameServerCommandOutput,
} from "./commands/UpdateGameServerCommand";
import {
  UpdateGameServerGroupCommand,
  UpdateGameServerGroupCommandInput,
  UpdateGameServerGroupCommandOutput,
} from "./commands/UpdateGameServerGroupCommand";
import {
  UpdateGameSessionCommand,
  UpdateGameSessionCommandInput,
  UpdateGameSessionCommandOutput,
} from "./commands/UpdateGameSessionCommand";
import {
  UpdateGameSessionQueueCommand,
  UpdateGameSessionQueueCommandInput,
  UpdateGameSessionQueueCommandOutput,
} from "./commands/UpdateGameSessionQueueCommand";
import {
  UpdateMatchmakingConfigurationCommand,
  UpdateMatchmakingConfigurationCommandInput,
  UpdateMatchmakingConfigurationCommandOutput,
} from "./commands/UpdateMatchmakingConfigurationCommand";
import {
  UpdateRuntimeConfigurationCommand,
  UpdateRuntimeConfigurationCommandInput,
  UpdateRuntimeConfigurationCommandOutput,
} from "./commands/UpdateRuntimeConfigurationCommand";
import {
  UpdateScriptCommand,
  UpdateScriptCommandInput,
  UpdateScriptCommandOutput,
} from "./commands/UpdateScriptCommand";
import {
  ValidateMatchmakingRuleSetCommand,
  ValidateMatchmakingRuleSetCommandInput,
  ValidateMatchmakingRuleSetCommandOutput,
} from "./commands/ValidateMatchmakingRuleSetCommand";
import { GameLiftClient, GameLiftClientConfig } from "./GameLiftClient";

const commands = {
  AcceptMatchCommand,
  ClaimGameServerCommand,
  CreateAliasCommand,
  CreateBuildCommand,
  CreateFleetCommand,
  CreateFleetLocationsCommand,
  CreateGameServerGroupCommand,
  CreateGameSessionCommand,
  CreateGameSessionQueueCommand,
  CreateLocationCommand,
  CreateMatchmakingConfigurationCommand,
  CreateMatchmakingRuleSetCommand,
  CreatePlayerSessionCommand,
  CreatePlayerSessionsCommand,
  CreateScriptCommand,
  CreateVpcPeeringAuthorizationCommand,
  CreateVpcPeeringConnectionCommand,
  DeleteAliasCommand,
  DeleteBuildCommand,
  DeleteFleetCommand,
  DeleteFleetLocationsCommand,
  DeleteGameServerGroupCommand,
  DeleteGameSessionQueueCommand,
  DeleteLocationCommand,
  DeleteMatchmakingConfigurationCommand,
  DeleteMatchmakingRuleSetCommand,
  DeleteScalingPolicyCommand,
  DeleteScriptCommand,
  DeleteVpcPeeringAuthorizationCommand,
  DeleteVpcPeeringConnectionCommand,
  DeregisterComputeCommand,
  DeregisterGameServerCommand,
  DescribeAliasCommand,
  DescribeBuildCommand,
  DescribeComputeCommand,
  DescribeEC2InstanceLimitsCommand,
  DescribeFleetAttributesCommand,
  DescribeFleetCapacityCommand,
  DescribeFleetEventsCommand,
  DescribeFleetLocationAttributesCommand,
  DescribeFleetLocationCapacityCommand,
  DescribeFleetLocationUtilizationCommand,
  DescribeFleetPortSettingsCommand,
  DescribeFleetUtilizationCommand,
  DescribeGameServerCommand,
  DescribeGameServerGroupCommand,
  DescribeGameServerInstancesCommand,
  DescribeGameSessionDetailsCommand,
  DescribeGameSessionPlacementCommand,
  DescribeGameSessionQueuesCommand,
  DescribeGameSessionsCommand,
  DescribeInstancesCommand,
  DescribeMatchmakingCommand,
  DescribeMatchmakingConfigurationsCommand,
  DescribeMatchmakingRuleSetsCommand,
  DescribePlayerSessionsCommand,
  DescribeRuntimeConfigurationCommand,
  DescribeScalingPoliciesCommand,
  DescribeScriptCommand,
  DescribeVpcPeeringAuthorizationsCommand,
  DescribeVpcPeeringConnectionsCommand,
  GetComputeAccessCommand,
  GetComputeAuthTokenCommand,
  GetGameSessionLogUrlCommand,
  GetInstanceAccessCommand,
  ListAliasesCommand,
  ListBuildsCommand,
  ListComputeCommand,
  ListFleetsCommand,
  ListGameServerGroupsCommand,
  ListGameServersCommand,
  ListLocationsCommand,
  ListScriptsCommand,
  ListTagsForResourceCommand,
  PutScalingPolicyCommand,
  RegisterComputeCommand,
  RegisterGameServerCommand,
  RequestUploadCredentialsCommand,
  ResolveAliasCommand,
  ResumeGameServerGroupCommand,
  SearchGameSessionsCommand,
  StartFleetActionsCommand,
  StartGameSessionPlacementCommand,
  StartMatchBackfillCommand,
  StartMatchmakingCommand,
  StopFleetActionsCommand,
  StopGameSessionPlacementCommand,
  StopMatchmakingCommand,
  SuspendGameServerGroupCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateBuildCommand,
  UpdateFleetAttributesCommand,
  UpdateFleetCapacityCommand,
  UpdateFleetPortSettingsCommand,
  UpdateGameServerCommand,
  UpdateGameServerGroupCommand,
  UpdateGameSessionCommand,
  UpdateGameSessionQueueCommand,
  UpdateMatchmakingConfigurationCommand,
  UpdateRuntimeConfigurationCommand,
  UpdateScriptCommand,
  ValidateMatchmakingRuleSetCommand,
};

export interface GameLift {
  /**
   * @see {@link AcceptMatchCommand}
   */
  acceptMatch(args: AcceptMatchCommandInput, options?: __HttpHandlerOptions): Promise<AcceptMatchCommandOutput>;
  acceptMatch(args: AcceptMatchCommandInput, cb: (err: any, data?: AcceptMatchCommandOutput) => void): void;
  acceptMatch(
    args: AcceptMatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptMatchCommandOutput) => void
  ): void;

  /**
   * @see {@link ClaimGameServerCommand}
   */
  claimGameServer(
    args: ClaimGameServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ClaimGameServerCommandOutput>;
  claimGameServer(args: ClaimGameServerCommandInput, cb: (err: any, data?: ClaimGameServerCommandOutput) => void): void;
  claimGameServer(
    args: ClaimGameServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ClaimGameServerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
  createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
  createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBuildCommand}
   */
  createBuild(args: CreateBuildCommandInput, options?: __HttpHandlerOptions): Promise<CreateBuildCommandOutput>;
  createBuild(args: CreateBuildCommandInput, cb: (err: any, data?: CreateBuildCommandOutput) => void): void;
  createBuild(
    args: CreateBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetLocationsCommand}
   */
  createFleetLocations(
    args: CreateFleetLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFleetLocationsCommandOutput>;
  createFleetLocations(
    args: CreateFleetLocationsCommandInput,
    cb: (err: any, data?: CreateFleetLocationsCommandOutput) => void
  ): void;
  createFleetLocations(
    args: CreateFleetLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGameServerGroupCommand}
   */
  createGameServerGroup(
    args: CreateGameServerGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGameServerGroupCommandOutput>;
  createGameServerGroup(
    args: CreateGameServerGroupCommandInput,
    cb: (err: any, data?: CreateGameServerGroupCommandOutput) => void
  ): void;
  createGameServerGroup(
    args: CreateGameServerGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGameServerGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGameSessionCommand}
   */
  createGameSession(
    args: CreateGameSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGameSessionCommandOutput>;
  createGameSession(
    args: CreateGameSessionCommandInput,
    cb: (err: any, data?: CreateGameSessionCommandOutput) => void
  ): void;
  createGameSession(
    args: CreateGameSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGameSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGameSessionQueueCommand}
   */
  createGameSessionQueue(
    args: CreateGameSessionQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGameSessionQueueCommandOutput>;
  createGameSessionQueue(
    args: CreateGameSessionQueueCommandInput,
    cb: (err: any, data?: CreateGameSessionQueueCommandOutput) => void
  ): void;
  createGameSessionQueue(
    args: CreateGameSessionQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGameSessionQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationCommand}
   */
  createLocation(
    args: CreateLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationCommandOutput>;
  createLocation(args: CreateLocationCommandInput, cb: (err: any, data?: CreateLocationCommandOutput) => void): void;
  createLocation(
    args: CreateLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMatchmakingConfigurationCommand}
   */
  createMatchmakingConfiguration(
    args: CreateMatchmakingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMatchmakingConfigurationCommandOutput>;
  createMatchmakingConfiguration(
    args: CreateMatchmakingConfigurationCommandInput,
    cb: (err: any, data?: CreateMatchmakingConfigurationCommandOutput) => void
  ): void;
  createMatchmakingConfiguration(
    args: CreateMatchmakingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMatchmakingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMatchmakingRuleSetCommand}
   */
  createMatchmakingRuleSet(
    args: CreateMatchmakingRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMatchmakingRuleSetCommandOutput>;
  createMatchmakingRuleSet(
    args: CreateMatchmakingRuleSetCommandInput,
    cb: (err: any, data?: CreateMatchmakingRuleSetCommandOutput) => void
  ): void;
  createMatchmakingRuleSet(
    args: CreateMatchmakingRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMatchmakingRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlayerSessionCommand}
   */
  createPlayerSession(
    args: CreatePlayerSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlayerSessionCommandOutput>;
  createPlayerSession(
    args: CreatePlayerSessionCommandInput,
    cb: (err: any, data?: CreatePlayerSessionCommandOutput) => void
  ): void;
  createPlayerSession(
    args: CreatePlayerSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlayerSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlayerSessionsCommand}
   */
  createPlayerSessions(
    args: CreatePlayerSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlayerSessionsCommandOutput>;
  createPlayerSessions(
    args: CreatePlayerSessionsCommandInput,
    cb: (err: any, data?: CreatePlayerSessionsCommandOutput) => void
  ): void;
  createPlayerSessions(
    args: CreatePlayerSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlayerSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScriptCommand}
   */
  createScript(args: CreateScriptCommandInput, options?: __HttpHandlerOptions): Promise<CreateScriptCommandOutput>;
  createScript(args: CreateScriptCommandInput, cb: (err: any, data?: CreateScriptCommandOutput) => void): void;
  createScript(
    args: CreateScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScriptCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcPeeringAuthorizationCommand}
   */
  createVpcPeeringAuthorization(
    args: CreateVpcPeeringAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcPeeringAuthorizationCommandOutput>;
  createVpcPeeringAuthorization(
    args: CreateVpcPeeringAuthorizationCommandInput,
    cb: (err: any, data?: CreateVpcPeeringAuthorizationCommandOutput) => void
  ): void;
  createVpcPeeringAuthorization(
    args: CreateVpcPeeringAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcPeeringAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcPeeringConnectionCommand}
   */
  createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcPeeringConnectionCommandOutput>;
  createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void
  ): void;
  createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
  deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
  deleteAlias(
    args: DeleteAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBuildCommand}
   */
  deleteBuild(args: DeleteBuildCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBuildCommandOutput>;
  deleteBuild(args: DeleteBuildCommandInput, cb: (err: any, data?: DeleteBuildCommandOutput) => void): void;
  deleteBuild(
    args: DeleteBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetCommand}
   */
  deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
  deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
  deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetLocationsCommand}
   */
  deleteFleetLocations(
    args: DeleteFleetLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetLocationsCommandOutput>;
  deleteFleetLocations(
    args: DeleteFleetLocationsCommandInput,
    cb: (err: any, data?: DeleteFleetLocationsCommandOutput) => void
  ): void;
  deleteFleetLocations(
    args: DeleteFleetLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGameServerGroupCommand}
   */
  deleteGameServerGroup(
    args: DeleteGameServerGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGameServerGroupCommandOutput>;
  deleteGameServerGroup(
    args: DeleteGameServerGroupCommandInput,
    cb: (err: any, data?: DeleteGameServerGroupCommandOutput) => void
  ): void;
  deleteGameServerGroup(
    args: DeleteGameServerGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGameServerGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGameSessionQueueCommand}
   */
  deleteGameSessionQueue(
    args: DeleteGameSessionQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGameSessionQueueCommandOutput>;
  deleteGameSessionQueue(
    args: DeleteGameSessionQueueCommandInput,
    cb: (err: any, data?: DeleteGameSessionQueueCommandOutput) => void
  ): void;
  deleteGameSessionQueue(
    args: DeleteGameSessionQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGameSessionQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLocationCommand}
   */
  deleteLocation(
    args: DeleteLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocationCommandOutput>;
  deleteLocation(args: DeleteLocationCommandInput, cb: (err: any, data?: DeleteLocationCommandOutput) => void): void;
  deleteLocation(
    args: DeleteLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMatchmakingConfigurationCommand}
   */
  deleteMatchmakingConfiguration(
    args: DeleteMatchmakingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMatchmakingConfigurationCommandOutput>;
  deleteMatchmakingConfiguration(
    args: DeleteMatchmakingConfigurationCommandInput,
    cb: (err: any, data?: DeleteMatchmakingConfigurationCommandOutput) => void
  ): void;
  deleteMatchmakingConfiguration(
    args: DeleteMatchmakingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMatchmakingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMatchmakingRuleSetCommand}
   */
  deleteMatchmakingRuleSet(
    args: DeleteMatchmakingRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMatchmakingRuleSetCommandOutput>;
  deleteMatchmakingRuleSet(
    args: DeleteMatchmakingRuleSetCommandInput,
    cb: (err: any, data?: DeleteMatchmakingRuleSetCommandOutput) => void
  ): void;
  deleteMatchmakingRuleSet(
    args: DeleteMatchmakingRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMatchmakingRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScalingPolicyCommand}
   */
  deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScalingPolicyCommandOutput>;
  deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    cb: (err: any, data?: DeleteScalingPolicyCommandOutput) => void
  ): void;
  deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScriptCommand}
   */
  deleteScript(args: DeleteScriptCommandInput, options?: __HttpHandlerOptions): Promise<DeleteScriptCommandOutput>;
  deleteScript(args: DeleteScriptCommandInput, cb: (err: any, data?: DeleteScriptCommandOutput) => void): void;
  deleteScript(
    args: DeleteScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScriptCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcPeeringAuthorizationCommand}
   */
  deleteVpcPeeringAuthorization(
    args: DeleteVpcPeeringAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcPeeringAuthorizationCommandOutput>;
  deleteVpcPeeringAuthorization(
    args: DeleteVpcPeeringAuthorizationCommandInput,
    cb: (err: any, data?: DeleteVpcPeeringAuthorizationCommandOutput) => void
  ): void;
  deleteVpcPeeringAuthorization(
    args: DeleteVpcPeeringAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcPeeringAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcPeeringConnectionCommand}
   */
  deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcPeeringConnectionCommandOutput>;
  deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void
  ): void;
  deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterComputeCommand}
   */
  deregisterCompute(
    args: DeregisterComputeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterComputeCommandOutput>;
  deregisterCompute(
    args: DeregisterComputeCommandInput,
    cb: (err: any, data?: DeregisterComputeCommandOutput) => void
  ): void;
  deregisterCompute(
    args: DeregisterComputeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterComputeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterGameServerCommand}
   */
  deregisterGameServer(
    args: DeregisterGameServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterGameServerCommandOutput>;
  deregisterGameServer(
    args: DeregisterGameServerCommandInput,
    cb: (err: any, data?: DeregisterGameServerCommandOutput) => void
  ): void;
  deregisterGameServer(
    args: DeregisterGameServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterGameServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAliasCommand}
   */
  describeAlias(args: DescribeAliasCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAliasCommandOutput>;
  describeAlias(args: DescribeAliasCommandInput, cb: (err: any, data?: DescribeAliasCommandOutput) => void): void;
  describeAlias(
    args: DescribeAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBuildCommand}
   */
  describeBuild(args: DescribeBuildCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBuildCommandOutput>;
  describeBuild(args: DescribeBuildCommandInput, cb: (err: any, data?: DescribeBuildCommandOutput) => void): void;
  describeBuild(
    args: DescribeBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComputeCommand}
   */
  describeCompute(
    args: DescribeComputeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComputeCommandOutput>;
  describeCompute(args: DescribeComputeCommandInput, cb: (err: any, data?: DescribeComputeCommandOutput) => void): void;
  describeCompute(
    args: DescribeComputeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComputeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEC2InstanceLimitsCommand}
   */
  describeEC2InstanceLimits(
    args: DescribeEC2InstanceLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEC2InstanceLimitsCommandOutput>;
  describeEC2InstanceLimits(
    args: DescribeEC2InstanceLimitsCommandInput,
    cb: (err: any, data?: DescribeEC2InstanceLimitsCommandOutput) => void
  ): void;
  describeEC2InstanceLimits(
    args: DescribeEC2InstanceLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEC2InstanceLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetAttributesCommand}
   */
  describeFleetAttributes(
    args: DescribeFleetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAttributesCommandOutput>;
  describeFleetAttributes(
    args: DescribeFleetAttributesCommandInput,
    cb: (err: any, data?: DescribeFleetAttributesCommandOutput) => void
  ): void;
  describeFleetAttributes(
    args: DescribeFleetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetCapacityCommand}
   */
  describeFleetCapacity(
    args: DescribeFleetCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetCapacityCommandOutput>;
  describeFleetCapacity(
    args: DescribeFleetCapacityCommandInput,
    cb: (err: any, data?: DescribeFleetCapacityCommandOutput) => void
  ): void;
  describeFleetCapacity(
    args: DescribeFleetCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetEventsCommand}
   */
  describeFleetEvents(
    args: DescribeFleetEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetEventsCommandOutput>;
  describeFleetEvents(
    args: DescribeFleetEventsCommandInput,
    cb: (err: any, data?: DescribeFleetEventsCommandOutput) => void
  ): void;
  describeFleetEvents(
    args: DescribeFleetEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetLocationAttributesCommand}
   */
  describeFleetLocationAttributes(
    args: DescribeFleetLocationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetLocationAttributesCommandOutput>;
  describeFleetLocationAttributes(
    args: DescribeFleetLocationAttributesCommandInput,
    cb: (err: any, data?: DescribeFleetLocationAttributesCommandOutput) => void
  ): void;
  describeFleetLocationAttributes(
    args: DescribeFleetLocationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetLocationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetLocationCapacityCommand}
   */
  describeFleetLocationCapacity(
    args: DescribeFleetLocationCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetLocationCapacityCommandOutput>;
  describeFleetLocationCapacity(
    args: DescribeFleetLocationCapacityCommandInput,
    cb: (err: any, data?: DescribeFleetLocationCapacityCommandOutput) => void
  ): void;
  describeFleetLocationCapacity(
    args: DescribeFleetLocationCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetLocationCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetLocationUtilizationCommand}
   */
  describeFleetLocationUtilization(
    args: DescribeFleetLocationUtilizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetLocationUtilizationCommandOutput>;
  describeFleetLocationUtilization(
    args: DescribeFleetLocationUtilizationCommandInput,
    cb: (err: any, data?: DescribeFleetLocationUtilizationCommandOutput) => void
  ): void;
  describeFleetLocationUtilization(
    args: DescribeFleetLocationUtilizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetLocationUtilizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetPortSettingsCommand}
   */
  describeFleetPortSettings(
    args: DescribeFleetPortSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetPortSettingsCommandOutput>;
  describeFleetPortSettings(
    args: DescribeFleetPortSettingsCommandInput,
    cb: (err: any, data?: DescribeFleetPortSettingsCommandOutput) => void
  ): void;
  describeFleetPortSettings(
    args: DescribeFleetPortSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetPortSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetUtilizationCommand}
   */
  describeFleetUtilization(
    args: DescribeFleetUtilizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetUtilizationCommandOutput>;
  describeFleetUtilization(
    args: DescribeFleetUtilizationCommandInput,
    cb: (err: any, data?: DescribeFleetUtilizationCommandOutput) => void
  ): void;
  describeFleetUtilization(
    args: DescribeFleetUtilizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetUtilizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGameServerCommand}
   */
  describeGameServer(
    args: DescribeGameServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameServerCommandOutput>;
  describeGameServer(
    args: DescribeGameServerCommandInput,
    cb: (err: any, data?: DescribeGameServerCommandOutput) => void
  ): void;
  describeGameServer(
    args: DescribeGameServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGameServerGroupCommand}
   */
  describeGameServerGroup(
    args: DescribeGameServerGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameServerGroupCommandOutput>;
  describeGameServerGroup(
    args: DescribeGameServerGroupCommandInput,
    cb: (err: any, data?: DescribeGameServerGroupCommandOutput) => void
  ): void;
  describeGameServerGroup(
    args: DescribeGameServerGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameServerGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGameServerInstancesCommand}
   */
  describeGameServerInstances(
    args: DescribeGameServerInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameServerInstancesCommandOutput>;
  describeGameServerInstances(
    args: DescribeGameServerInstancesCommandInput,
    cb: (err: any, data?: DescribeGameServerInstancesCommandOutput) => void
  ): void;
  describeGameServerInstances(
    args: DescribeGameServerInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameServerInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGameSessionDetailsCommand}
   */
  describeGameSessionDetails(
    args: DescribeGameSessionDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameSessionDetailsCommandOutput>;
  describeGameSessionDetails(
    args: DescribeGameSessionDetailsCommandInput,
    cb: (err: any, data?: DescribeGameSessionDetailsCommandOutput) => void
  ): void;
  describeGameSessionDetails(
    args: DescribeGameSessionDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameSessionDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGameSessionPlacementCommand}
   */
  describeGameSessionPlacement(
    args: DescribeGameSessionPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameSessionPlacementCommandOutput>;
  describeGameSessionPlacement(
    args: DescribeGameSessionPlacementCommandInput,
    cb: (err: any, data?: DescribeGameSessionPlacementCommandOutput) => void
  ): void;
  describeGameSessionPlacement(
    args: DescribeGameSessionPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameSessionPlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGameSessionQueuesCommand}
   */
  describeGameSessionQueues(
    args: DescribeGameSessionQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameSessionQueuesCommandOutput>;
  describeGameSessionQueues(
    args: DescribeGameSessionQueuesCommandInput,
    cb: (err: any, data?: DescribeGameSessionQueuesCommandOutput) => void
  ): void;
  describeGameSessionQueues(
    args: DescribeGameSessionQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameSessionQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGameSessionsCommand}
   */
  describeGameSessions(
    args: DescribeGameSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameSessionsCommandOutput>;
  describeGameSessions(
    args: DescribeGameSessionsCommandInput,
    cb: (err: any, data?: DescribeGameSessionsCommandOutput) => void
  ): void;
  describeGameSessions(
    args: DescribeGameSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameSessionsCommandOutput) => void
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
   * @see {@link DescribeMatchmakingCommand}
   */
  describeMatchmaking(
    args: DescribeMatchmakingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMatchmakingCommandOutput>;
  describeMatchmaking(
    args: DescribeMatchmakingCommandInput,
    cb: (err: any, data?: DescribeMatchmakingCommandOutput) => void
  ): void;
  describeMatchmaking(
    args: DescribeMatchmakingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMatchmakingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMatchmakingConfigurationsCommand}
   */
  describeMatchmakingConfigurations(
    args: DescribeMatchmakingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMatchmakingConfigurationsCommandOutput>;
  describeMatchmakingConfigurations(
    args: DescribeMatchmakingConfigurationsCommandInput,
    cb: (err: any, data?: DescribeMatchmakingConfigurationsCommandOutput) => void
  ): void;
  describeMatchmakingConfigurations(
    args: DescribeMatchmakingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMatchmakingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMatchmakingRuleSetsCommand}
   */
  describeMatchmakingRuleSets(
    args: DescribeMatchmakingRuleSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMatchmakingRuleSetsCommandOutput>;
  describeMatchmakingRuleSets(
    args: DescribeMatchmakingRuleSetsCommandInput,
    cb: (err: any, data?: DescribeMatchmakingRuleSetsCommandOutput) => void
  ): void;
  describeMatchmakingRuleSets(
    args: DescribeMatchmakingRuleSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMatchmakingRuleSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePlayerSessionsCommand}
   */
  describePlayerSessions(
    args: DescribePlayerSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePlayerSessionsCommandOutput>;
  describePlayerSessions(
    args: DescribePlayerSessionsCommandInput,
    cb: (err: any, data?: DescribePlayerSessionsCommandOutput) => void
  ): void;
  describePlayerSessions(
    args: DescribePlayerSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePlayerSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuntimeConfigurationCommand}
   */
  describeRuntimeConfiguration(
    args: DescribeRuntimeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuntimeConfigurationCommandOutput>;
  describeRuntimeConfiguration(
    args: DescribeRuntimeConfigurationCommandInput,
    cb: (err: any, data?: DescribeRuntimeConfigurationCommandOutput) => void
  ): void;
  describeRuntimeConfiguration(
    args: DescribeRuntimeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuntimeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingPoliciesCommand}
   */
  describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingPoliciesCommandOutput>;
  describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    cb: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void
  ): void;
  describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScriptCommand}
   */
  describeScript(
    args: DescribeScriptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScriptCommandOutput>;
  describeScript(args: DescribeScriptCommandInput, cb: (err: any, data?: DescribeScriptCommandOutput) => void): void;
  describeScript(
    args: DescribeScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScriptCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcPeeringAuthorizationsCommand}
   */
  describeVpcPeeringAuthorizations(
    args: DescribeVpcPeeringAuthorizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcPeeringAuthorizationsCommandOutput>;
  describeVpcPeeringAuthorizations(
    args: DescribeVpcPeeringAuthorizationsCommandInput,
    cb: (err: any, data?: DescribeVpcPeeringAuthorizationsCommandOutput) => void
  ): void;
  describeVpcPeeringAuthorizations(
    args: DescribeVpcPeeringAuthorizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcPeeringAuthorizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcPeeringConnectionsCommand}
   */
  describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcPeeringConnectionsCommandOutput>;
  describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    cb: (err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void
  ): void;
  describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComputeAccessCommand}
   */
  getComputeAccess(
    args: GetComputeAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComputeAccessCommandOutput>;
  getComputeAccess(
    args: GetComputeAccessCommandInput,
    cb: (err: any, data?: GetComputeAccessCommandOutput) => void
  ): void;
  getComputeAccess(
    args: GetComputeAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComputeAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComputeAuthTokenCommand}
   */
  getComputeAuthToken(
    args: GetComputeAuthTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComputeAuthTokenCommandOutput>;
  getComputeAuthToken(
    args: GetComputeAuthTokenCommandInput,
    cb: (err: any, data?: GetComputeAuthTokenCommandOutput) => void
  ): void;
  getComputeAuthToken(
    args: GetComputeAuthTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComputeAuthTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGameSessionLogUrlCommand}
   */
  getGameSessionLogUrl(
    args: GetGameSessionLogUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGameSessionLogUrlCommandOutput>;
  getGameSessionLogUrl(
    args: GetGameSessionLogUrlCommandInput,
    cb: (err: any, data?: GetGameSessionLogUrlCommandOutput) => void
  ): void;
  getGameSessionLogUrl(
    args: GetGameSessionLogUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGameSessionLogUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceAccessCommand}
   */
  getInstanceAccess(
    args: GetInstanceAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceAccessCommandOutput>;
  getInstanceAccess(
    args: GetInstanceAccessCommandInput,
    cb: (err: any, data?: GetInstanceAccessCommandOutput) => void
  ): void;
  getInstanceAccess(
    args: GetInstanceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
  listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
  listAliases(
    args: ListAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBuildsCommand}
   */
  listBuilds(args: ListBuildsCommandInput, options?: __HttpHandlerOptions): Promise<ListBuildsCommandOutput>;
  listBuilds(args: ListBuildsCommandInput, cb: (err: any, data?: ListBuildsCommandOutput) => void): void;
  listBuilds(
    args: ListBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComputeCommand}
   */
  listCompute(args: ListComputeCommandInput, options?: __HttpHandlerOptions): Promise<ListComputeCommandOutput>;
  listCompute(args: ListComputeCommandInput, cb: (err: any, data?: ListComputeCommandOutput) => void): void;
  listCompute(
    args: ListComputeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComputeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetsCommand}
   */
  listFleets(args: ListFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListFleetsCommandOutput>;
  listFleets(args: ListFleetsCommandInput, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
  listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGameServerGroupsCommand}
   */
  listGameServerGroups(
    args: ListGameServerGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGameServerGroupsCommandOutput>;
  listGameServerGroups(
    args: ListGameServerGroupsCommandInput,
    cb: (err: any, data?: ListGameServerGroupsCommandOutput) => void
  ): void;
  listGameServerGroups(
    args: ListGameServerGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGameServerGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGameServersCommand}
   */
  listGameServers(
    args: ListGameServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGameServersCommandOutput>;
  listGameServers(args: ListGameServersCommandInput, cb: (err: any, data?: ListGameServersCommandOutput) => void): void;
  listGameServers(
    args: ListGameServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGameServersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLocationsCommand}
   */
  listLocations(args: ListLocationsCommandInput, options?: __HttpHandlerOptions): Promise<ListLocationsCommandOutput>;
  listLocations(args: ListLocationsCommandInput, cb: (err: any, data?: ListLocationsCommandOutput) => void): void;
  listLocations(
    args: ListLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScriptsCommand}
   */
  listScripts(args: ListScriptsCommandInput, options?: __HttpHandlerOptions): Promise<ListScriptsCommandOutput>;
  listScripts(args: ListScriptsCommandInput, cb: (err: any, data?: ListScriptsCommandOutput) => void): void;
  listScripts(
    args: ListScriptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScriptsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutScalingPolicyCommand}
   */
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutScalingPolicyCommandOutput>;
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterComputeCommand}
   */
  registerCompute(
    args: RegisterComputeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterComputeCommandOutput>;
  registerCompute(args: RegisterComputeCommandInput, cb: (err: any, data?: RegisterComputeCommandOutput) => void): void;
  registerCompute(
    args: RegisterComputeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterComputeCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterGameServerCommand}
   */
  registerGameServer(
    args: RegisterGameServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterGameServerCommandOutput>;
  registerGameServer(
    args: RegisterGameServerCommandInput,
    cb: (err: any, data?: RegisterGameServerCommandOutput) => void
  ): void;
  registerGameServer(
    args: RegisterGameServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterGameServerCommandOutput) => void
  ): void;

  /**
   * @see {@link RequestUploadCredentialsCommand}
   */
  requestUploadCredentials(
    args: RequestUploadCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestUploadCredentialsCommandOutput>;
  requestUploadCredentials(
    args: RequestUploadCredentialsCommandInput,
    cb: (err: any, data?: RequestUploadCredentialsCommandOutput) => void
  ): void;
  requestUploadCredentials(
    args: RequestUploadCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestUploadCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResolveAliasCommand}
   */
  resolveAlias(args: ResolveAliasCommandInput, options?: __HttpHandlerOptions): Promise<ResolveAliasCommandOutput>;
  resolveAlias(args: ResolveAliasCommandInput, cb: (err: any, data?: ResolveAliasCommandOutput) => void): void;
  resolveAlias(
    args: ResolveAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeGameServerGroupCommand}
   */
  resumeGameServerGroup(
    args: ResumeGameServerGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeGameServerGroupCommandOutput>;
  resumeGameServerGroup(
    args: ResumeGameServerGroupCommandInput,
    cb: (err: any, data?: ResumeGameServerGroupCommandOutput) => void
  ): void;
  resumeGameServerGroup(
    args: ResumeGameServerGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeGameServerGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchGameSessionsCommand}
   */
  searchGameSessions(
    args: SearchGameSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchGameSessionsCommandOutput>;
  searchGameSessions(
    args: SearchGameSessionsCommandInput,
    cb: (err: any, data?: SearchGameSessionsCommandOutput) => void
  ): void;
  searchGameSessions(
    args: SearchGameSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchGameSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFleetActionsCommand}
   */
  startFleetActions(
    args: StartFleetActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFleetActionsCommandOutput>;
  startFleetActions(
    args: StartFleetActionsCommandInput,
    cb: (err: any, data?: StartFleetActionsCommandOutput) => void
  ): void;
  startFleetActions(
    args: StartFleetActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFleetActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartGameSessionPlacementCommand}
   */
  startGameSessionPlacement(
    args: StartGameSessionPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartGameSessionPlacementCommandOutput>;
  startGameSessionPlacement(
    args: StartGameSessionPlacementCommandInput,
    cb: (err: any, data?: StartGameSessionPlacementCommandOutput) => void
  ): void;
  startGameSessionPlacement(
    args: StartGameSessionPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartGameSessionPlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMatchBackfillCommand}
   */
  startMatchBackfill(
    args: StartMatchBackfillCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMatchBackfillCommandOutput>;
  startMatchBackfill(
    args: StartMatchBackfillCommandInput,
    cb: (err: any, data?: StartMatchBackfillCommandOutput) => void
  ): void;
  startMatchBackfill(
    args: StartMatchBackfillCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMatchBackfillCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMatchmakingCommand}
   */
  startMatchmaking(
    args: StartMatchmakingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMatchmakingCommandOutput>;
  startMatchmaking(
    args: StartMatchmakingCommandInput,
    cb: (err: any, data?: StartMatchmakingCommandOutput) => void
  ): void;
  startMatchmaking(
    args: StartMatchmakingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMatchmakingCommandOutput) => void
  ): void;

  /**
   * @see {@link StopFleetActionsCommand}
   */
  stopFleetActions(
    args: StopFleetActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopFleetActionsCommandOutput>;
  stopFleetActions(
    args: StopFleetActionsCommandInput,
    cb: (err: any, data?: StopFleetActionsCommandOutput) => void
  ): void;
  stopFleetActions(
    args: StopFleetActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFleetActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link StopGameSessionPlacementCommand}
   */
  stopGameSessionPlacement(
    args: StopGameSessionPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopGameSessionPlacementCommandOutput>;
  stopGameSessionPlacement(
    args: StopGameSessionPlacementCommandInput,
    cb: (err: any, data?: StopGameSessionPlacementCommandOutput) => void
  ): void;
  stopGameSessionPlacement(
    args: StopGameSessionPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopGameSessionPlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link StopMatchmakingCommand}
   */
  stopMatchmaking(
    args: StopMatchmakingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMatchmakingCommandOutput>;
  stopMatchmaking(args: StopMatchmakingCommandInput, cb: (err: any, data?: StopMatchmakingCommandOutput) => void): void;
  stopMatchmaking(
    args: StopMatchmakingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMatchmakingCommandOutput) => void
  ): void;

  /**
   * @see {@link SuspendGameServerGroupCommand}
   */
  suspendGameServerGroup(
    args: SuspendGameServerGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SuspendGameServerGroupCommandOutput>;
  suspendGameServerGroup(
    args: SuspendGameServerGroupCommandInput,
    cb: (err: any, data?: SuspendGameServerGroupCommandOutput) => void
  ): void;
  suspendGameServerGroup(
    args: SuspendGameServerGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SuspendGameServerGroupCommandOutput) => void
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
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(args: UpdateAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAliasCommandOutput>;
  updateAlias(args: UpdateAliasCommandInput, cb: (err: any, data?: UpdateAliasCommandOutput) => void): void;
  updateAlias(
    args: UpdateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBuildCommand}
   */
  updateBuild(args: UpdateBuildCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBuildCommandOutput>;
  updateBuild(args: UpdateBuildCommandInput, cb: (err: any, data?: UpdateBuildCommandOutput) => void): void;
  updateBuild(
    args: UpdateBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetAttributesCommand}
   */
  updateFleetAttributes(
    args: UpdateFleetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetAttributesCommandOutput>;
  updateFleetAttributes(
    args: UpdateFleetAttributesCommandInput,
    cb: (err: any, data?: UpdateFleetAttributesCommandOutput) => void
  ): void;
  updateFleetAttributes(
    args: UpdateFleetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetCapacityCommand}
   */
  updateFleetCapacity(
    args: UpdateFleetCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetCapacityCommandOutput>;
  updateFleetCapacity(
    args: UpdateFleetCapacityCommandInput,
    cb: (err: any, data?: UpdateFleetCapacityCommandOutput) => void
  ): void;
  updateFleetCapacity(
    args: UpdateFleetCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetPortSettingsCommand}
   */
  updateFleetPortSettings(
    args: UpdateFleetPortSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetPortSettingsCommandOutput>;
  updateFleetPortSettings(
    args: UpdateFleetPortSettingsCommandInput,
    cb: (err: any, data?: UpdateFleetPortSettingsCommandOutput) => void
  ): void;
  updateFleetPortSettings(
    args: UpdateFleetPortSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetPortSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGameServerCommand}
   */
  updateGameServer(
    args: UpdateGameServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGameServerCommandOutput>;
  updateGameServer(
    args: UpdateGameServerCommandInput,
    cb: (err: any, data?: UpdateGameServerCommandOutput) => void
  ): void;
  updateGameServer(
    args: UpdateGameServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGameServerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGameServerGroupCommand}
   */
  updateGameServerGroup(
    args: UpdateGameServerGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGameServerGroupCommandOutput>;
  updateGameServerGroup(
    args: UpdateGameServerGroupCommandInput,
    cb: (err: any, data?: UpdateGameServerGroupCommandOutput) => void
  ): void;
  updateGameServerGroup(
    args: UpdateGameServerGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGameServerGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGameSessionCommand}
   */
  updateGameSession(
    args: UpdateGameSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGameSessionCommandOutput>;
  updateGameSession(
    args: UpdateGameSessionCommandInput,
    cb: (err: any, data?: UpdateGameSessionCommandOutput) => void
  ): void;
  updateGameSession(
    args: UpdateGameSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGameSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGameSessionQueueCommand}
   */
  updateGameSessionQueue(
    args: UpdateGameSessionQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGameSessionQueueCommandOutput>;
  updateGameSessionQueue(
    args: UpdateGameSessionQueueCommandInput,
    cb: (err: any, data?: UpdateGameSessionQueueCommandOutput) => void
  ): void;
  updateGameSessionQueue(
    args: UpdateGameSessionQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGameSessionQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMatchmakingConfigurationCommand}
   */
  updateMatchmakingConfiguration(
    args: UpdateMatchmakingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMatchmakingConfigurationCommandOutput>;
  updateMatchmakingConfiguration(
    args: UpdateMatchmakingConfigurationCommandInput,
    cb: (err: any, data?: UpdateMatchmakingConfigurationCommandOutput) => void
  ): void;
  updateMatchmakingConfiguration(
    args: UpdateMatchmakingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMatchmakingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuntimeConfigurationCommand}
   */
  updateRuntimeConfiguration(
    args: UpdateRuntimeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuntimeConfigurationCommandOutput>;
  updateRuntimeConfiguration(
    args: UpdateRuntimeConfigurationCommandInput,
    cb: (err: any, data?: UpdateRuntimeConfigurationCommandOutput) => void
  ): void;
  updateRuntimeConfiguration(
    args: UpdateRuntimeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuntimeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScriptCommand}
   */
  updateScript(args: UpdateScriptCommandInput, options?: __HttpHandlerOptions): Promise<UpdateScriptCommandOutput>;
  updateScript(args: UpdateScriptCommandInput, cb: (err: any, data?: UpdateScriptCommandOutput) => void): void;
  updateScript(
    args: UpdateScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScriptCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateMatchmakingRuleSetCommand}
   */
  validateMatchmakingRuleSet(
    args: ValidateMatchmakingRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateMatchmakingRuleSetCommandOutput>;
  validateMatchmakingRuleSet(
    args: ValidateMatchmakingRuleSetCommandInput,
    cb: (err: any, data?: ValidateMatchmakingRuleSetCommandOutput) => void
  ): void;
  validateMatchmakingRuleSet(
    args: ValidateMatchmakingRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateMatchmakingRuleSetCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon GameLift provides solutions for hosting session-based multiplayer game servers in the
 *             cloud, including tools for deploying, operating, and scaling game servers. Built on
 *             Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance,
 *             high-reliability, low-cost game servers while dynamically scaling your resource usage to
 *             meet player demand. </p>
 *          <p>
 *             <b>About Amazon GameLift solutions</b>
 *          </p>
 *          <p>Get more information on these Amazon GameLift solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">Amazon GameLift Developer Guide</a>.</p>
 *          <ul>
 *             <li>
 *                <p>Amazon GameLift managed hosting -- Amazon GameLift offers a fully managed service to set up
 *                     and maintain computing machines for hosting, manage game session and player
 *                     session life cycle, and handle security, storage, and performance tracking. You
 *                     can use automatic scaling tools to balance player demand and hosting costs,
 *                     configure your game session management to minimize player latency, and add
 *                     FlexMatch for matchmaking.</p>
 *             </li>
 *             <li>
 *                <p>Managed hosting with Realtime Servers -- With Amazon GameLift Realtime Servers, you can quickly configure
 *                     and set up ready-to-go game servers for your game. Realtime Servers provides a game server
 *                     framework with core Amazon GameLift infrastructure already built in. Then use the full
 *                     range of Amazon GameLift managed hosting features, including FlexMatch, for your
 *                     game.</p>
 *             </li>
 *             <li>
 *                <p>Amazon GameLift FleetIQ -- Use Amazon GameLift FleetIQ as a standalone service while hosting your games using EC2
 *                     instances and Auto Scaling groups. Amazon GameLift FleetIQ provides optimizations for game
 *                     hosting, including boosting the viability of low-cost Spot Instances gaming. For
 *                     a complete solution, pair the Amazon GameLift FleetIQ and FlexMatch standalone services.</p>
 *             </li>
 *             <li>
 *                <p>Amazon GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a
 *                     customizable matchmaking service for multiplayer games. Use FlexMatch as
 *                     integrated with Amazon GameLift managed hosting or incorporate FlexMatch as a standalone
 *                     service into your own hosting solution.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>About this API Reference</b>
 *          </p>
 *          <p>This reference guide describes the low-level service API for Amazon GameLift. With each topic
 *             in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI
 *             reference. Useful links:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">Amazon GameLift API
 *                         operations listed by tasks</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> Amazon GameLift tools
 *                         and resources</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class GameLift extends GameLiftClient implements GameLift {}
createAggregatedClient(commands, GameLift);
