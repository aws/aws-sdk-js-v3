// smithy-typescript generated code
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
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
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

import { AcceptMatchCommandInput, AcceptMatchCommandOutput } from "../commands/AcceptMatchCommand";
import { ClaimGameServerCommandInput, ClaimGameServerCommandOutput } from "../commands/ClaimGameServerCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "../commands/CreateAliasCommand";
import { CreateBuildCommandInput, CreateBuildCommandOutput } from "../commands/CreateBuildCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "../commands/CreateFleetCommand";
import {
  CreateFleetLocationsCommandInput,
  CreateFleetLocationsCommandOutput,
} from "../commands/CreateFleetLocationsCommand";
import {
  CreateGameServerGroupCommandInput,
  CreateGameServerGroupCommandOutput,
} from "../commands/CreateGameServerGroupCommand";
import { CreateGameSessionCommandInput, CreateGameSessionCommandOutput } from "../commands/CreateGameSessionCommand";
import {
  CreateGameSessionQueueCommandInput,
  CreateGameSessionQueueCommandOutput,
} from "../commands/CreateGameSessionQueueCommand";
import { CreateLocationCommandInput, CreateLocationCommandOutput } from "../commands/CreateLocationCommand";
import {
  CreateMatchmakingConfigurationCommandInput,
  CreateMatchmakingConfigurationCommandOutput,
} from "../commands/CreateMatchmakingConfigurationCommand";
import {
  CreateMatchmakingRuleSetCommandInput,
  CreateMatchmakingRuleSetCommandOutput,
} from "../commands/CreateMatchmakingRuleSetCommand";
import {
  CreatePlayerSessionCommandInput,
  CreatePlayerSessionCommandOutput,
} from "../commands/CreatePlayerSessionCommand";
import {
  CreatePlayerSessionsCommandInput,
  CreatePlayerSessionsCommandOutput,
} from "../commands/CreatePlayerSessionsCommand";
import { CreateScriptCommandInput, CreateScriptCommandOutput } from "../commands/CreateScriptCommand";
import {
  CreateVpcPeeringAuthorizationCommandInput,
  CreateVpcPeeringAuthorizationCommandOutput,
} from "../commands/CreateVpcPeeringAuthorizationCommand";
import {
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
} from "../commands/CreateVpcPeeringConnectionCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "../commands/DeleteAliasCommand";
import { DeleteBuildCommandInput, DeleteBuildCommandOutput } from "../commands/DeleteBuildCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "../commands/DeleteFleetCommand";
import {
  DeleteFleetLocationsCommandInput,
  DeleteFleetLocationsCommandOutput,
} from "../commands/DeleteFleetLocationsCommand";
import {
  DeleteGameServerGroupCommandInput,
  DeleteGameServerGroupCommandOutput,
} from "../commands/DeleteGameServerGroupCommand";
import {
  DeleteGameSessionQueueCommandInput,
  DeleteGameSessionQueueCommandOutput,
} from "../commands/DeleteGameSessionQueueCommand";
import { DeleteLocationCommandInput, DeleteLocationCommandOutput } from "../commands/DeleteLocationCommand";
import {
  DeleteMatchmakingConfigurationCommandInput,
  DeleteMatchmakingConfigurationCommandOutput,
} from "../commands/DeleteMatchmakingConfigurationCommand";
import {
  DeleteMatchmakingRuleSetCommandInput,
  DeleteMatchmakingRuleSetCommandOutput,
} from "../commands/DeleteMatchmakingRuleSetCommand";
import {
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "../commands/DeleteScalingPolicyCommand";
import { DeleteScriptCommandInput, DeleteScriptCommandOutput } from "../commands/DeleteScriptCommand";
import {
  DeleteVpcPeeringAuthorizationCommandInput,
  DeleteVpcPeeringAuthorizationCommandOutput,
} from "../commands/DeleteVpcPeeringAuthorizationCommand";
import {
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
} from "../commands/DeleteVpcPeeringConnectionCommand";
import { DeregisterComputeCommandInput, DeregisterComputeCommandOutput } from "../commands/DeregisterComputeCommand";
import {
  DeregisterGameServerCommandInput,
  DeregisterGameServerCommandOutput,
} from "../commands/DeregisterGameServerCommand";
import { DescribeAliasCommandInput, DescribeAliasCommandOutput } from "../commands/DescribeAliasCommand";
import { DescribeBuildCommandInput, DescribeBuildCommandOutput } from "../commands/DescribeBuildCommand";
import { DescribeComputeCommandInput, DescribeComputeCommandOutput } from "../commands/DescribeComputeCommand";
import {
  DescribeEC2InstanceLimitsCommandInput,
  DescribeEC2InstanceLimitsCommandOutput,
} from "../commands/DescribeEC2InstanceLimitsCommand";
import {
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput,
} from "../commands/DescribeFleetAttributesCommand";
import {
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
} from "../commands/DescribeFleetCapacityCommand";
import {
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput,
} from "../commands/DescribeFleetEventsCommand";
import {
  DescribeFleetLocationAttributesCommandInput,
  DescribeFleetLocationAttributesCommandOutput,
} from "../commands/DescribeFleetLocationAttributesCommand";
import {
  DescribeFleetLocationCapacityCommandInput,
  DescribeFleetLocationCapacityCommandOutput,
} from "../commands/DescribeFleetLocationCapacityCommand";
import {
  DescribeFleetLocationUtilizationCommandInput,
  DescribeFleetLocationUtilizationCommandOutput,
} from "../commands/DescribeFleetLocationUtilizationCommand";
import {
  DescribeFleetPortSettingsCommandInput,
  DescribeFleetPortSettingsCommandOutput,
} from "../commands/DescribeFleetPortSettingsCommand";
import {
  DescribeFleetUtilizationCommandInput,
  DescribeFleetUtilizationCommandOutput,
} from "../commands/DescribeFleetUtilizationCommand";
import { DescribeGameServerCommandInput, DescribeGameServerCommandOutput } from "../commands/DescribeGameServerCommand";
import {
  DescribeGameServerGroupCommandInput,
  DescribeGameServerGroupCommandOutput,
} from "../commands/DescribeGameServerGroupCommand";
import {
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
} from "../commands/DescribeGameServerInstancesCommand";
import {
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput,
} from "../commands/DescribeGameSessionDetailsCommand";
import {
  DescribeGameSessionPlacementCommandInput,
  DescribeGameSessionPlacementCommandOutput,
} from "../commands/DescribeGameSessionPlacementCommand";
import {
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
} from "../commands/DescribeGameSessionQueuesCommand";
import {
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput,
} from "../commands/DescribeGameSessionsCommand";
import { DescribeInstancesCommandInput, DescribeInstancesCommandOutput } from "../commands/DescribeInstancesCommand";
import {
  DescribeMatchmakingCommandInput,
  DescribeMatchmakingCommandOutput,
} from "../commands/DescribeMatchmakingCommand";
import {
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
} from "../commands/DescribeMatchmakingConfigurationsCommand";
import {
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput,
} from "../commands/DescribeMatchmakingRuleSetsCommand";
import {
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
} from "../commands/DescribePlayerSessionsCommand";
import {
  DescribeRuntimeConfigurationCommandInput,
  DescribeRuntimeConfigurationCommandOutput,
} from "../commands/DescribeRuntimeConfigurationCommand";
import {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "../commands/DescribeScalingPoliciesCommand";
import { DescribeScriptCommandInput, DescribeScriptCommandOutput } from "../commands/DescribeScriptCommand";
import {
  DescribeVpcPeeringAuthorizationsCommandInput,
  DescribeVpcPeeringAuthorizationsCommandOutput,
} from "../commands/DescribeVpcPeeringAuthorizationsCommand";
import {
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
} from "../commands/DescribeVpcPeeringConnectionsCommand";
import { GetComputeAccessCommandInput, GetComputeAccessCommandOutput } from "../commands/GetComputeAccessCommand";
import {
  GetComputeAuthTokenCommandInput,
  GetComputeAuthTokenCommandOutput,
} from "../commands/GetComputeAuthTokenCommand";
import {
  GetGameSessionLogUrlCommandInput,
  GetGameSessionLogUrlCommandOutput,
} from "../commands/GetGameSessionLogUrlCommand";
import { GetInstanceAccessCommandInput, GetInstanceAccessCommandOutput } from "../commands/GetInstanceAccessCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import { ListComputeCommandInput, ListComputeCommandOutput } from "../commands/ListComputeCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import {
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
} from "../commands/ListGameServerGroupsCommand";
import { ListGameServersCommandInput, ListGameServersCommandOutput } from "../commands/ListGameServersCommand";
import { ListLocationsCommandInput, ListLocationsCommandOutput } from "../commands/ListLocationsCommand";
import { ListScriptsCommandInput, ListScriptsCommandOutput } from "../commands/ListScriptsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "../commands/PutScalingPolicyCommand";
import { RegisterComputeCommandInput, RegisterComputeCommandOutput } from "../commands/RegisterComputeCommand";
import { RegisterGameServerCommandInput, RegisterGameServerCommandOutput } from "../commands/RegisterGameServerCommand";
import {
  RequestUploadCredentialsCommandInput,
  RequestUploadCredentialsCommandOutput,
} from "../commands/RequestUploadCredentialsCommand";
import { ResolveAliasCommandInput, ResolveAliasCommandOutput } from "../commands/ResolveAliasCommand";
import {
  ResumeGameServerGroupCommandInput,
  ResumeGameServerGroupCommandOutput,
} from "../commands/ResumeGameServerGroupCommand";
import { SearchGameSessionsCommandInput, SearchGameSessionsCommandOutput } from "../commands/SearchGameSessionsCommand";
import { StartFleetActionsCommandInput, StartFleetActionsCommandOutput } from "../commands/StartFleetActionsCommand";
import {
  StartGameSessionPlacementCommandInput,
  StartGameSessionPlacementCommandOutput,
} from "../commands/StartGameSessionPlacementCommand";
import { StartMatchBackfillCommandInput, StartMatchBackfillCommandOutput } from "../commands/StartMatchBackfillCommand";
import { StartMatchmakingCommandInput, StartMatchmakingCommandOutput } from "../commands/StartMatchmakingCommand";
import { StopFleetActionsCommandInput, StopFleetActionsCommandOutput } from "../commands/StopFleetActionsCommand";
import {
  StopGameSessionPlacementCommandInput,
  StopGameSessionPlacementCommandOutput,
} from "../commands/StopGameSessionPlacementCommand";
import { StopMatchmakingCommandInput, StopMatchmakingCommandOutput } from "../commands/StopMatchmakingCommand";
import {
  SuspendGameServerGroupCommandInput,
  SuspendGameServerGroupCommandOutput,
} from "../commands/SuspendGameServerGroupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "../commands/UpdateAliasCommand";
import { UpdateBuildCommandInput, UpdateBuildCommandOutput } from "../commands/UpdateBuildCommand";
import {
  UpdateFleetAttributesCommandInput,
  UpdateFleetAttributesCommandOutput,
} from "../commands/UpdateFleetAttributesCommand";
import {
  UpdateFleetCapacityCommandInput,
  UpdateFleetCapacityCommandOutput,
} from "../commands/UpdateFleetCapacityCommand";
import {
  UpdateFleetPortSettingsCommandInput,
  UpdateFleetPortSettingsCommandOutput,
} from "../commands/UpdateFleetPortSettingsCommand";
import { UpdateGameServerCommandInput, UpdateGameServerCommandOutput } from "../commands/UpdateGameServerCommand";
import {
  UpdateGameServerGroupCommandInput,
  UpdateGameServerGroupCommandOutput,
} from "../commands/UpdateGameServerGroupCommand";
import { UpdateGameSessionCommandInput, UpdateGameSessionCommandOutput } from "../commands/UpdateGameSessionCommand";
import {
  UpdateGameSessionQueueCommandInput,
  UpdateGameSessionQueueCommandOutput,
} from "../commands/UpdateGameSessionQueueCommand";
import {
  UpdateMatchmakingConfigurationCommandInput,
  UpdateMatchmakingConfigurationCommandOutput,
} from "../commands/UpdateMatchmakingConfigurationCommand";
import {
  UpdateRuntimeConfigurationCommandInput,
  UpdateRuntimeConfigurationCommandOutput,
} from "../commands/UpdateRuntimeConfigurationCommand";
import { UpdateScriptCommandInput, UpdateScriptCommandOutput } from "../commands/UpdateScriptCommand";
import {
  ValidateMatchmakingRuleSetCommandInput,
  ValidateMatchmakingRuleSetCommandOutput,
} from "../commands/ValidateMatchmakingRuleSetCommand";
import { GameLiftServiceException as __BaseException } from "../models/GameLiftServiceException";
import {
  AcceptMatchInput,
  Alias,
  AnywhereConfiguration,
  AttributeValue,
  Build,
  CertificateConfiguration,
  ClaimFilterOption,
  ClaimGameServerInput,
  ClaimGameServerOutput,
  Compute,
  ConflictException,
  CreateAliasInput,
  CreateAliasOutput,
  CreateBuildInput,
  CreateBuildOutput,
  CreateFleetInput,
  CreateFleetLocationsInput,
  CreateFleetOutput,
  CreateGameServerGroupInput,
  CreateGameServerGroupOutput,
  CreateGameSessionInput,
  CreateGameSessionOutput,
  CreateGameSessionQueueInput,
  CreateLocationInput,
  CreateMatchmakingConfigurationInput,
  CreateMatchmakingConfigurationOutput,
  CreateMatchmakingRuleSetInput,
  CreateMatchmakingRuleSetOutput,
  CreatePlayerSessionInput,
  CreatePlayerSessionOutput,
  CreatePlayerSessionsInput,
  CreatePlayerSessionsOutput,
  CreateScriptInput,
  CreateScriptOutput,
  CreateVpcPeeringAuthorizationInput,
  CreateVpcPeeringAuthorizationOutput,
  CreateVpcPeeringConnectionInput,
  DeleteAliasInput,
  DeleteBuildInput,
  DeleteFleetInput,
  DeleteFleetLocationsInput,
  DeleteGameServerGroupInput,
  DeleteGameServerGroupOutput,
  DeleteGameSessionQueueInput,
  DeleteLocationInput,
  DeleteMatchmakingConfigurationInput,
  DeleteMatchmakingRuleSetInput,
  DeleteScalingPolicyInput,
  DeleteScriptInput,
  DeleteVpcPeeringAuthorizationInput,
  DeleteVpcPeeringConnectionInput,
  DeregisterComputeInput,
  DeregisterGameServerInput,
  DescribeAliasInput,
  DescribeAliasOutput,
  DescribeBuildInput,
  DescribeBuildOutput,
  DescribeComputeInput,
  DescribeComputeOutput,
  DescribeEC2InstanceLimitsInput,
  DescribeFleetAttributesInput,
  DescribeFleetAttributesOutput,
  DescribeFleetCapacityInput,
  DescribeFleetEventsInput,
  DescribeFleetEventsOutput,
  DescribeFleetLocationAttributesInput,
  DescribeFleetLocationCapacityInput,
  DescribeFleetLocationUtilizationInput,
  DescribeFleetPortSettingsInput,
  DescribeFleetUtilizationInput,
  DescribeGameServerGroupInput,
  DescribeGameServerGroupOutput,
  DescribeGameServerInput,
  DescribeGameServerInstancesInput,
  DescribeGameServerOutput,
  DescribeGameSessionDetailsInput,
  DescribeGameSessionDetailsOutput,
  DescribeGameSessionPlacementInput,
  DescribeGameSessionPlacementOutput,
  DescribeGameSessionQueuesInput,
  DescribeGameSessionsInput,
  DescribeGameSessionsOutput,
  DescribeInstancesInput,
  DescribeInstancesOutput,
  DescribeMatchmakingConfigurationsInput,
  DescribeMatchmakingConfigurationsOutput,
  DescribeMatchmakingInput,
  DescribeMatchmakingOutput,
  DescribeMatchmakingRuleSetsInput,
  DescribeMatchmakingRuleSetsOutput,
  DescribePlayerSessionsInput,
  DescribePlayerSessionsOutput,
  DescribeRuntimeConfigurationInput,
  DescribeScalingPoliciesInput,
  DescribeScalingPoliciesOutput,
  DescribeScriptInput,
  DescribeScriptOutput,
  DescribeVpcPeeringAuthorizationsInput,
  DescribeVpcPeeringAuthorizationsOutput,
  DescribeVpcPeeringConnectionsInput,
  DesiredPlayerSession,
  Event,
  FilterConfiguration,
  FilterInstanceStatus,
  FleetAction,
  FleetAttributes,
  FleetCapacityExceededException,
  GameProperty,
  GameServer,
  GameServerGroup,
  GameServerGroupAction,
  GameServerGroupAutoScalingPolicy,
  GameSession,
  GameSessionDetail,
  GameSessionFullException,
  GameSessionPlacement,
  GameSessionQueueDestination,
  GetComputeAccessInput,
  GetComputeAuthTokenInput,
  GetComputeAuthTokenOutput,
  GetGameSessionLogUrlInput,
  GetInstanceAccessInput,
  IdempotentParameterMismatchException,
  Instance,
  InstanceDefinition,
  InternalServiceException,
  InvalidFleetStatusException,
  InvalidGameSessionStatusException,
  InvalidRequestException,
  IpPermission,
  LaunchTemplateSpecification,
  LimitExceededException,
  ListAliasesInput,
  ListAliasesOutput,
  ListBuildsInput,
  ListBuildsOutput,
  ListComputeInput,
  ListComputeOutput,
  ListFleetsInput,
  ListGameServerGroupsInput,
  ListGameServerGroupsOutput,
  ListGameServersInput,
  ListGameServersOutput,
  ListLocationsInput,
  ListScriptsInput,
  ListScriptsOutput,
  ListTagsForResourceRequest,
  LocationConfiguration,
  LocationFilter,
  MatchmakingConfiguration,
  MatchmakingRuleSet,
  MatchmakingTicket,
  NotFoundException,
  OutOfCapacityException,
  Player,
  PlayerLatency,
  PlayerLatencyPolicy,
  PlayerSession,
  PriorityConfiguration,
  PriorityType,
  PutScalingPolicyInput,
  RegisterComputeInput,
  RegisterComputeOutput,
  RegisterGameServerInput,
  RegisterGameServerOutput,
  RequestUploadCredentialsInput,
  ResolveAliasInput,
  ResourceCreationLimitPolicy,
  ResumeGameServerGroupInput,
  ResumeGameServerGroupOutput,
  RoutingStrategy,
  RuntimeConfiguration,
  S3Location,
  ScalingPolicy,
  Script,
  SearchGameSessionsInput,
  SearchGameSessionsOutput,
  ServerProcess,
  StartFleetActionsInput,
  StartGameSessionPlacementInput,
  StartGameSessionPlacementOutput,
  StartMatchBackfillInput,
  StartMatchBackfillOutput,
  StartMatchmakingInput,
  StartMatchmakingOutput,
  StopFleetActionsInput,
  StopGameSessionPlacementInput,
  StopGameSessionPlacementOutput,
  StopMatchmakingInput,
  SuspendGameServerGroupInput,
  SuspendGameServerGroupOutput,
  Tag,
  TaggingFailedException,
  TagResourceRequest,
  TargetConfiguration,
  TargetTrackingConfiguration,
  TerminalRoutingStrategyException,
  UnauthorizedException,
  UnsupportedRegionException,
  UntagResourceRequest,
  UpdateAliasInput,
  UpdateAliasOutput,
  UpdateBuildInput,
  UpdateBuildOutput,
  UpdateFleetAttributesInput,
  UpdateFleetCapacityInput,
  VpcPeeringAuthorization,
} from "../models/models_0";
import {
  UpdateFleetPortSettingsInput,
  UpdateGameServerGroupInput,
  UpdateGameServerGroupOutput,
  UpdateGameServerInput,
  UpdateGameServerOutput,
  UpdateGameSessionInput,
  UpdateGameSessionOutput,
  UpdateGameSessionQueueInput,
  UpdateMatchmakingConfigurationInput,
  UpdateMatchmakingConfigurationOutput,
  UpdateRuntimeConfigurationInput,
  UpdateScriptInput,
  UpdateScriptOutput,
  ValidateMatchmakingRuleSetInput,
} from "../models/models_1";

/**
 * serializeAws_json1_1AcceptMatchCommand
 */
export const se_AcceptMatchCommand = async (
  input: AcceptMatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptMatch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ClaimGameServerCommand
 */
export const se_ClaimGameServerCommand = async (
  input: ClaimGameServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ClaimGameServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAliasCommand
 */
export const se_CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBuildCommand
 */
export const se_CreateBuildCommand = async (
  input: CreateBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBuild");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFleetCommand
 */
export const se_CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFleetLocationsCommand
 */
export const se_CreateFleetLocationsCommand = async (
  input: CreateFleetLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFleetLocations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGameServerGroupCommand
 */
export const se_CreateGameServerGroupCommand = async (
  input: CreateGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGameServerGroup");
  let body: any;
  body = JSON.stringify(se_CreateGameServerGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGameSessionCommand
 */
export const se_CreateGameSessionCommand = async (
  input: CreateGameSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGameSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGameSessionQueueCommand
 */
export const se_CreateGameSessionQueueCommand = async (
  input: CreateGameSessionQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGameSessionQueue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLocationCommand
 */
export const se_CreateLocationCommand = async (
  input: CreateLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLocation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMatchmakingConfigurationCommand
 */
export const se_CreateMatchmakingConfigurationCommand = async (
  input: CreateMatchmakingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMatchmakingConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMatchmakingRuleSetCommand
 */
export const se_CreateMatchmakingRuleSetCommand = async (
  input: CreateMatchmakingRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMatchmakingRuleSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePlayerSessionCommand
 */
export const se_CreatePlayerSessionCommand = async (
  input: CreatePlayerSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePlayerSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePlayerSessionsCommand
 */
export const se_CreatePlayerSessionsCommand = async (
  input: CreatePlayerSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePlayerSessions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateScriptCommand
 */
export const se_CreateScriptCommand = async (
  input: CreateScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateScript");
  let body: any;
  body = JSON.stringify(se_CreateScriptInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVpcPeeringAuthorizationCommand
 */
export const se_CreateVpcPeeringAuthorizationCommand = async (
  input: CreateVpcPeeringAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVpcPeeringAuthorization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVpcPeeringConnectionCommand
 */
export const se_CreateVpcPeeringConnectionCommand = async (
  input: CreateVpcPeeringConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVpcPeeringConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAliasCommand
 */
export const se_DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBuildCommand
 */
export const se_DeleteBuildCommand = async (
  input: DeleteBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBuild");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFleetCommand
 */
export const se_DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFleetLocationsCommand
 */
export const se_DeleteFleetLocationsCommand = async (
  input: DeleteFleetLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFleetLocations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGameServerGroupCommand
 */
export const se_DeleteGameServerGroupCommand = async (
  input: DeleteGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGameServerGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGameSessionQueueCommand
 */
export const se_DeleteGameSessionQueueCommand = async (
  input: DeleteGameSessionQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGameSessionQueue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLocationCommand
 */
export const se_DeleteLocationCommand = async (
  input: DeleteLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLocation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMatchmakingConfigurationCommand
 */
export const se_DeleteMatchmakingConfigurationCommand = async (
  input: DeleteMatchmakingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMatchmakingConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMatchmakingRuleSetCommand
 */
export const se_DeleteMatchmakingRuleSetCommand = async (
  input: DeleteMatchmakingRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMatchmakingRuleSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteScalingPolicyCommand
 */
export const se_DeleteScalingPolicyCommand = async (
  input: DeleteScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteScalingPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteScriptCommand
 */
export const se_DeleteScriptCommand = async (
  input: DeleteScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteScript");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand
 */
export const se_DeleteVpcPeeringAuthorizationCommand = async (
  input: DeleteVpcPeeringAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVpcPeeringAuthorization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVpcPeeringConnectionCommand
 */
export const se_DeleteVpcPeeringConnectionCommand = async (
  input: DeleteVpcPeeringConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVpcPeeringConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterComputeCommand
 */
export const se_DeregisterComputeCommand = async (
  input: DeregisterComputeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterCompute");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterGameServerCommand
 */
export const se_DeregisterGameServerCommand = async (
  input: DeregisterGameServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterGameServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAliasCommand
 */
export const se_DescribeAliasCommand = async (
  input: DescribeAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBuildCommand
 */
export const se_DescribeBuildCommand = async (
  input: DescribeBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBuild");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeComputeCommand
 */
export const se_DescribeComputeCommand = async (
  input: DescribeComputeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCompute");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEC2InstanceLimitsCommand
 */
export const se_DescribeEC2InstanceLimitsCommand = async (
  input: DescribeEC2InstanceLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEC2InstanceLimits");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetAttributesCommand
 */
export const se_DescribeFleetAttributesCommand = async (
  input: DescribeFleetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetCapacityCommand
 */
export const se_DescribeFleetCapacityCommand = async (
  input: DescribeFleetCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetCapacity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetEventsCommand
 */
export const se_DescribeFleetEventsCommand = async (
  input: DescribeFleetEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetEvents");
  let body: any;
  body = JSON.stringify(se_DescribeFleetEventsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetLocationAttributesCommand
 */
export const se_DescribeFleetLocationAttributesCommand = async (
  input: DescribeFleetLocationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetLocationAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetLocationCapacityCommand
 */
export const se_DescribeFleetLocationCapacityCommand = async (
  input: DescribeFleetLocationCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetLocationCapacity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetLocationUtilizationCommand
 */
export const se_DescribeFleetLocationUtilizationCommand = async (
  input: DescribeFleetLocationUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetLocationUtilization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetPortSettingsCommand
 */
export const se_DescribeFleetPortSettingsCommand = async (
  input: DescribeFleetPortSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetPortSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetUtilizationCommand
 */
export const se_DescribeFleetUtilizationCommand = async (
  input: DescribeFleetUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetUtilization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGameServerCommand
 */
export const se_DescribeGameServerCommand = async (
  input: DescribeGameServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGameServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGameServerGroupCommand
 */
export const se_DescribeGameServerGroupCommand = async (
  input: DescribeGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGameServerGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGameServerInstancesCommand
 */
export const se_DescribeGameServerInstancesCommand = async (
  input: DescribeGameServerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGameServerInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGameSessionDetailsCommand
 */
export const se_DescribeGameSessionDetailsCommand = async (
  input: DescribeGameSessionDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGameSessionDetails");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGameSessionPlacementCommand
 */
export const se_DescribeGameSessionPlacementCommand = async (
  input: DescribeGameSessionPlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGameSessionPlacement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGameSessionQueuesCommand
 */
export const se_DescribeGameSessionQueuesCommand = async (
  input: DescribeGameSessionQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGameSessionQueues");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGameSessionsCommand
 */
export const se_DescribeGameSessionsCommand = async (
  input: DescribeGameSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGameSessions");
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
 * serializeAws_json1_1DescribeMatchmakingCommand
 */
export const se_DescribeMatchmakingCommand = async (
  input: DescribeMatchmakingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMatchmaking");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMatchmakingConfigurationsCommand
 */
export const se_DescribeMatchmakingConfigurationsCommand = async (
  input: DescribeMatchmakingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMatchmakingConfigurations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMatchmakingRuleSetsCommand
 */
export const se_DescribeMatchmakingRuleSetsCommand = async (
  input: DescribeMatchmakingRuleSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMatchmakingRuleSets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePlayerSessionsCommand
 */
export const se_DescribePlayerSessionsCommand = async (
  input: DescribePlayerSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePlayerSessions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRuntimeConfigurationCommand
 */
export const se_DescribeRuntimeConfigurationCommand = async (
  input: DescribeRuntimeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRuntimeConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeScalingPoliciesCommand
 */
export const se_DescribeScalingPoliciesCommand = async (
  input: DescribeScalingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeScalingPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeScriptCommand
 */
export const se_DescribeScriptCommand = async (
  input: DescribeScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeScript");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand
 */
export const se_DescribeVpcPeeringAuthorizationsCommand = async (
  input: DescribeVpcPeeringAuthorizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVpcPeeringAuthorizations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeVpcPeeringConnectionsCommand
 */
export const se_DescribeVpcPeeringConnectionsCommand = async (
  input: DescribeVpcPeeringConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVpcPeeringConnections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetComputeAccessCommand
 */
export const se_GetComputeAccessCommand = async (
  input: GetComputeAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComputeAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetComputeAuthTokenCommand
 */
export const se_GetComputeAuthTokenCommand = async (
  input: GetComputeAuthTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComputeAuthToken");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGameSessionLogUrlCommand
 */
export const se_GetGameSessionLogUrlCommand = async (
  input: GetGameSessionLogUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetGameSessionLogUrl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceAccessCommand
 */
export const se_GetInstanceAccessCommand = async (
  input: GetInstanceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInstanceAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAliasesCommand
 */
export const se_ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAliases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBuildsCommand
 */
export const se_ListBuildsCommand = async (
  input: ListBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBuilds");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListComputeCommand
 */
export const se_ListComputeCommand = async (
  input: ListComputeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCompute");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFleetsCommand
 */
export const se_ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFleets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGameServerGroupsCommand
 */
export const se_ListGameServerGroupsCommand = async (
  input: ListGameServerGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGameServerGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGameServersCommand
 */
export const se_ListGameServersCommand = async (
  input: ListGameServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGameServers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLocationsCommand
 */
export const se_ListLocationsCommand = async (
  input: ListLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLocations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListScriptsCommand
 */
export const se_ListScriptsCommand = async (
  input: ListScriptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListScripts");
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
 * serializeAws_json1_1PutScalingPolicyCommand
 */
export const se_PutScalingPolicyCommand = async (
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutScalingPolicy");
  let body: any;
  body = JSON.stringify(se_PutScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterComputeCommand
 */
export const se_RegisterComputeCommand = async (
  input: RegisterComputeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterCompute");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterGameServerCommand
 */
export const se_RegisterGameServerCommand = async (
  input: RegisterGameServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterGameServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RequestUploadCredentialsCommand
 */
export const se_RequestUploadCredentialsCommand = async (
  input: RequestUploadCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RequestUploadCredentials");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResolveAliasCommand
 */
export const se_ResolveAliasCommand = async (
  input: ResolveAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResolveAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResumeGameServerGroupCommand
 */
export const se_ResumeGameServerGroupCommand = async (
  input: ResumeGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResumeGameServerGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchGameSessionsCommand
 */
export const se_SearchGameSessionsCommand = async (
  input: SearchGameSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchGameSessions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartFleetActionsCommand
 */
export const se_StartFleetActionsCommand = async (
  input: StartFleetActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartFleetActions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartGameSessionPlacementCommand
 */
export const se_StartGameSessionPlacementCommand = async (
  input: StartGameSessionPlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartGameSessionPlacement");
  let body: any;
  body = JSON.stringify(se_StartGameSessionPlacementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMatchBackfillCommand
 */
export const se_StartMatchBackfillCommand = async (
  input: StartMatchBackfillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMatchBackfill");
  let body: any;
  body = JSON.stringify(se_StartMatchBackfillInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMatchmakingCommand
 */
export const se_StartMatchmakingCommand = async (
  input: StartMatchmakingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMatchmaking");
  let body: any;
  body = JSON.stringify(se_StartMatchmakingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopFleetActionsCommand
 */
export const se_StopFleetActionsCommand = async (
  input: StopFleetActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopFleetActions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopGameSessionPlacementCommand
 */
export const se_StopGameSessionPlacementCommand = async (
  input: StopGameSessionPlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopGameSessionPlacement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopMatchmakingCommand
 */
export const se_StopMatchmakingCommand = async (
  input: StopMatchmakingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopMatchmaking");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SuspendGameServerGroupCommand
 */
export const se_SuspendGameServerGroupCommand = async (
  input: SuspendGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SuspendGameServerGroup");
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
 * serializeAws_json1_1UpdateAliasCommand
 */
export const se_UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBuildCommand
 */
export const se_UpdateBuildCommand = async (
  input: UpdateBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBuild");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFleetAttributesCommand
 */
export const se_UpdateFleetAttributesCommand = async (
  input: UpdateFleetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFleetAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFleetCapacityCommand
 */
export const se_UpdateFleetCapacityCommand = async (
  input: UpdateFleetCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFleetCapacity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFleetPortSettingsCommand
 */
export const se_UpdateFleetPortSettingsCommand = async (
  input: UpdateFleetPortSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFleetPortSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGameServerCommand
 */
export const se_UpdateGameServerCommand = async (
  input: UpdateGameServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGameServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGameServerGroupCommand
 */
export const se_UpdateGameServerGroupCommand = async (
  input: UpdateGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGameServerGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGameSessionCommand
 */
export const se_UpdateGameSessionCommand = async (
  input: UpdateGameSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGameSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGameSessionQueueCommand
 */
export const se_UpdateGameSessionQueueCommand = async (
  input: UpdateGameSessionQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGameSessionQueue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMatchmakingConfigurationCommand
 */
export const se_UpdateMatchmakingConfigurationCommand = async (
  input: UpdateMatchmakingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMatchmakingConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRuntimeConfigurationCommand
 */
export const se_UpdateRuntimeConfigurationCommand = async (
  input: UpdateRuntimeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRuntimeConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateScriptCommand
 */
export const se_UpdateScriptCommand = async (
  input: UpdateScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateScript");
  let body: any;
  body = JSON.stringify(se_UpdateScriptInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ValidateMatchmakingRuleSetCommand
 */
export const se_ValidateMatchmakingRuleSetCommand = async (
  input: ValidateMatchmakingRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ValidateMatchmakingRuleSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcceptMatchCommand
 */
export const de_AcceptMatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptMatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptMatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AcceptMatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AcceptMatchCommandError
 */
const de_AcceptMatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptMatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ClaimGameServerCommand
 */
export const de_ClaimGameServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimGameServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ClaimGameServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ClaimGameServerOutput(data, context);
  const response: ClaimGameServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ClaimGameServerCommandError
 */
const de_ClaimGameServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimGameServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OutOfCapacityException":
    case "com.amazonaws.gamelift#OutOfCapacityException":
      throw await de_OutOfCapacityExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateAliasCommand
 */
export const de_CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAliasOutput(data, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAliasCommandError
 */
const de_CreateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateBuildCommand
 */
export const de_CreateBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBuildOutput(data, context);
  const response: CreateBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateBuildCommandError
 */
const de_CreateBuildCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBuildCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateFleetCommand
 */
export const de_CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFleetOutput(data, context);
  const response: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFleetCommandError
 */
const de_CreateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateFleetLocationsCommand
 */
export const de_CreateFleetLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFleetLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFleetLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFleetLocationsCommandError
 */
const de_CreateFleetLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await de_InvalidFleetStatusExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateGameServerGroupCommand
 */
export const de_CreateGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGameServerGroupOutput(data, context);
  const response: CreateGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateGameServerGroupCommandError
 */
const de_CreateGameServerGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameServerGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateGameSessionCommand
 */
export const de_CreateGameSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGameSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGameSessionOutput(data, context);
  const response: CreateGameSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateGameSessionCommandError
 */
const de_CreateGameSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "FleetCapacityExceededException":
    case "com.amazonaws.gamelift#FleetCapacityExceededException":
      throw await de_FleetCapacityExceededExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.gamelift#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await de_InvalidFleetStatusExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await de_TerminalRoutingStrategyExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateGameSessionQueueCommand
 */
export const de_CreateGameSessionQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameSessionQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGameSessionQueueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateGameSessionQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateGameSessionQueueCommandError
 */
const de_CreateGameSessionQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameSessionQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateLocationCommand
 */
export const de_CreateLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLocationCommandError
 */
const de_CreateLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateMatchmakingConfigurationCommand
 */
export const de_CreateMatchmakingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMatchmakingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMatchmakingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMatchmakingConfigurationOutput(data, context);
  const response: CreateMatchmakingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateMatchmakingConfigurationCommandError
 */
const de_CreateMatchmakingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMatchmakingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateMatchmakingRuleSetCommand
 */
export const de_CreateMatchmakingRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMatchmakingRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMatchmakingRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMatchmakingRuleSetOutput(data, context);
  const response: CreateMatchmakingRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateMatchmakingRuleSetCommandError
 */
const de_CreateMatchmakingRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMatchmakingRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreatePlayerSessionCommand
 */
export const de_CreatePlayerSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlayerSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePlayerSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePlayerSessionOutput(data, context);
  const response: CreatePlayerSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePlayerSessionCommandError
 */
const de_CreatePlayerSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlayerSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GameSessionFullException":
    case "com.amazonaws.gamelift#GameSessionFullException":
      throw await de_GameSessionFullExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidGameSessionStatusException":
    case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
      throw await de_InvalidGameSessionStatusExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await de_TerminalRoutingStrategyExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreatePlayerSessionsCommand
 */
export const de_CreatePlayerSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlayerSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePlayerSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePlayerSessionsOutput(data, context);
  const response: CreatePlayerSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePlayerSessionsCommandError
 */
const de_CreatePlayerSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlayerSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GameSessionFullException":
    case "com.amazonaws.gamelift#GameSessionFullException":
      throw await de_GameSessionFullExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidGameSessionStatusException":
    case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
      throw await de_InvalidGameSessionStatusExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await de_TerminalRoutingStrategyExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateScriptCommand
 */
export const de_CreateScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateScriptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateScriptOutput(data, context);
  const response: CreateScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateScriptCommandError
 */
const de_CreateScriptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScriptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand
 */
export const de_CreateVpcPeeringAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcPeeringAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVpcPeeringAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVpcPeeringAuthorizationOutput(data, context);
  const response: CreateVpcPeeringAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateVpcPeeringAuthorizationCommandError
 */
const de_CreateVpcPeeringAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcPeeringAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateVpcPeeringConnectionCommand
 */
export const de_CreateVpcPeeringConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcPeeringConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVpcPeeringConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateVpcPeeringConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateVpcPeeringConnectionCommandError
 */
const de_CreateVpcPeeringConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcPeeringConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAliasCommand
 */
export const de_DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAliasCommandError
 */
const de_DeleteAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteBuildCommand
 */
export const de_DeleteBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBuildCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBuildCommandError
 */
const de_DeleteBuildCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBuildCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteFleetCommand
 */
export const de_DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFleetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFleetCommandError
 */
const de_DeleteFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await de_InvalidFleetStatusExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteFleetLocationsCommand
 */
export const de_DeleteFleetLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFleetLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFleetLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFleetLocationsCommandError
 */
const de_DeleteFleetLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteGameServerGroupCommand
 */
export const de_DeleteGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGameServerGroupOutput(data, context);
  const response: DeleteGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteGameServerGroupCommandError
 */
const de_DeleteGameServerGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGameServerGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteGameSessionQueueCommand
 */
export const de_DeleteGameSessionQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGameSessionQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGameSessionQueueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteGameSessionQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteGameSessionQueueCommandError
 */
const de_DeleteGameSessionQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGameSessionQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteLocationCommand
 */
export const de_DeleteLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteLocationCommandError
 */
const de_DeleteLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteMatchmakingConfigurationCommand
 */
export const de_DeleteMatchmakingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMatchmakingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMatchmakingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteMatchmakingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteMatchmakingConfigurationCommandError
 */
const de_DeleteMatchmakingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMatchmakingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteMatchmakingRuleSetCommand
 */
export const de_DeleteMatchmakingRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMatchmakingRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMatchmakingRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteMatchmakingRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteMatchmakingRuleSetCommandError
 */
const de_DeleteMatchmakingRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMatchmakingRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteScalingPolicyCommand
 */
export const de_DeleteScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteScalingPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteScalingPolicyCommandError
 */
const de_DeleteScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteScriptCommand
 */
export const de_DeleteScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteScriptCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteScriptCommandError
 */
const de_DeleteScriptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScriptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand
 */
export const de_DeleteVpcPeeringAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcPeeringAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVpcPeeringAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteVpcPeeringAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommandError
 */
const de_DeleteVpcPeeringAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcPeeringAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteVpcPeeringConnectionCommand
 */
export const de_DeleteVpcPeeringConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcPeeringConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVpcPeeringConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteVpcPeeringConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteVpcPeeringConnectionCommandError
 */
const de_DeleteVpcPeeringConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcPeeringConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeregisterComputeCommand
 */
export const de_DeregisterComputeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterComputeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterComputeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeregisterComputeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterComputeCommandError
 */
const de_DeregisterComputeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterComputeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeregisterGameServerCommand
 */
export const de_DeregisterGameServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterGameServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterGameServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterGameServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterGameServerCommandError
 */
const de_DeregisterGameServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterGameServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAliasCommand
 */
export const de_DescribeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAliasOutput(data, context);
  const response: DescribeAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAliasCommandError
 */
const de_DescribeAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeBuildCommand
 */
export const de_DescribeBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBuildOutput(data, context);
  const response: DescribeBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBuildCommandError
 */
const de_DescribeBuildCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBuildCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeComputeCommand
 */
export const de_DescribeComputeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeComputeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeComputeOutput(data, context);
  const response: DescribeComputeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeComputeCommandError
 */
const de_DescribeComputeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEC2InstanceLimitsCommand
 */
export const de_DescribeEC2InstanceLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEC2InstanceLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEC2InstanceLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEC2InstanceLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEC2InstanceLimitsCommandError
 */
const de_DescribeEC2InstanceLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEC2InstanceLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeFleetAttributesCommand
 */
export const de_DescribeFleetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFleetAttributesOutput(data, context);
  const response: DescribeFleetAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetAttributesCommandError
 */
const de_DescribeFleetAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeFleetCapacityCommand
 */
export const de_DescribeFleetCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetCapacityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFleetCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetCapacityCommandError
 */
const de_DescribeFleetCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeFleetEventsCommand
 */
export const de_DescribeFleetEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFleetEventsOutput(data, context);
  const response: DescribeFleetEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetEventsCommandError
 */
const de_DescribeFleetEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeFleetLocationAttributesCommand
 */
export const de_DescribeFleetLocationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetLocationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetLocationAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFleetLocationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetLocationAttributesCommandError
 */
const de_DescribeFleetLocationAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetLocationAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeFleetLocationCapacityCommand
 */
export const de_DescribeFleetLocationCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetLocationCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetLocationCapacityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFleetLocationCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetLocationCapacityCommandError
 */
const de_DescribeFleetLocationCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetLocationCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeFleetLocationUtilizationCommand
 */
export const de_DescribeFleetLocationUtilizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetLocationUtilizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetLocationUtilizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFleetLocationUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetLocationUtilizationCommandError
 */
const de_DescribeFleetLocationUtilizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetLocationUtilizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeFleetPortSettingsCommand
 */
export const de_DescribeFleetPortSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetPortSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetPortSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFleetPortSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetPortSettingsCommandError
 */
const de_DescribeFleetPortSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetPortSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeFleetUtilizationCommand
 */
export const de_DescribeFleetUtilizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetUtilizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetUtilizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFleetUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetUtilizationCommandError
 */
const de_DescribeFleetUtilizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetUtilizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeGameServerCommand
 */
export const de_DescribeGameServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGameServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGameServerOutput(data, context);
  const response: DescribeGameServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeGameServerCommandError
 */
const de_DescribeGameServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeGameServerGroupCommand
 */
export const de_DescribeGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGameServerGroupOutput(data, context);
  const response: DescribeGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeGameServerGroupCommandError
 */
const de_DescribeGameServerGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameServerGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeGameServerInstancesCommand
 */
export const de_DescribeGameServerInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameServerInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGameServerInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeGameServerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeGameServerInstancesCommandError
 */
const de_DescribeGameServerInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameServerInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeGameSessionDetailsCommand
 */
export const de_DescribeGameSessionDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGameSessionDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGameSessionDetailsOutput(data, context);
  const response: DescribeGameSessionDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeGameSessionDetailsCommandError
 */
const de_DescribeGameSessionDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await de_TerminalRoutingStrategyExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeGameSessionPlacementCommand
 */
export const de_DescribeGameSessionPlacementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionPlacementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGameSessionPlacementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGameSessionPlacementOutput(data, context);
  const response: DescribeGameSessionPlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeGameSessionPlacementCommandError
 */
const de_DescribeGameSessionPlacementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionPlacementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeGameSessionQueuesCommand
 */
export const de_DescribeGameSessionQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionQueuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGameSessionQueuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeGameSessionQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeGameSessionQueuesCommandError
 */
const de_DescribeGameSessionQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeGameSessionsCommand
 */
export const de_DescribeGameSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGameSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGameSessionsOutput(data, context);
  const response: DescribeGameSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeGameSessionsCommandError
 */
const de_DescribeGameSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await de_TerminalRoutingStrategyExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
  contents = de_DescribeInstancesOutput(data, context);
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
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeMatchmakingCommand
 */
export const de_DescribeMatchmakingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMatchmakingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMatchmakingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMatchmakingOutput(data, context);
  const response: DescribeMatchmakingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeMatchmakingCommandError
 */
const de_DescribeMatchmakingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMatchmakingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand
 */
export const de_DescribeMatchmakingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMatchmakingConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMatchmakingConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMatchmakingConfigurationsOutput(data, context);
  const response: DescribeMatchmakingConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeMatchmakingConfigurationsCommandError
 */
const de_DescribeMatchmakingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMatchmakingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand
 */
export const de_DescribeMatchmakingRuleSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMatchmakingRuleSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMatchmakingRuleSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMatchmakingRuleSetsOutput(data, context);
  const response: DescribeMatchmakingRuleSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeMatchmakingRuleSetsCommandError
 */
const de_DescribeMatchmakingRuleSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMatchmakingRuleSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribePlayerSessionsCommand
 */
export const de_DescribePlayerSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlayerSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePlayerSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePlayerSessionsOutput(data, context);
  const response: DescribePlayerSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePlayerSessionsCommandError
 */
const de_DescribePlayerSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlayerSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeRuntimeConfigurationCommand
 */
export const de_DescribeRuntimeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuntimeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRuntimeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeRuntimeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeRuntimeConfigurationCommandError
 */
const de_DescribeRuntimeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuntimeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeScalingPoliciesCommand
 */
export const de_DescribeScalingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScalingPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScalingPoliciesOutput(data, context);
  const response: DescribeScalingPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeScalingPoliciesCommandError
 */
const de_DescribeScalingPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeScriptCommand
 */
export const de_DescribeScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScriptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScriptOutput(data, context);
  const response: DescribeScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeScriptCommandError
 */
const de_DescribeScriptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScriptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand
 */
export const de_DescribeVpcPeeringAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcPeeringAuthorizationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeVpcPeeringAuthorizationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeVpcPeeringAuthorizationsOutput(data, context);
  const response: DescribeVpcPeeringAuthorizationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommandError
 */
const de_DescribeVpcPeeringAuthorizationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcPeeringAuthorizationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand
 */
export const de_DescribeVpcPeeringConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcPeeringConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeVpcPeeringConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeVpcPeeringConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeVpcPeeringConnectionsCommandError
 */
const de_DescribeVpcPeeringConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcPeeringConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetComputeAccessCommand
 */
export const de_GetComputeAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComputeAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetComputeAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetComputeAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetComputeAccessCommandError
 */
const de_GetComputeAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComputeAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetComputeAuthTokenCommand
 */
export const de_GetComputeAuthTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComputeAuthTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetComputeAuthTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetComputeAuthTokenOutput(data, context);
  const response: GetComputeAuthTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetComputeAuthTokenCommandError
 */
const de_GetComputeAuthTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComputeAuthTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetGameSessionLogUrlCommand
 */
export const de_GetGameSessionLogUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameSessionLogUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGameSessionLogUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetGameSessionLogUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetGameSessionLogUrlCommandError
 */
const de_GetGameSessionLogUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameSessionLogUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetInstanceAccessCommand
 */
export const de_GetInstanceAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstanceAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetInstanceAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetInstanceAccessCommandError
 */
const de_GetInstanceAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAliasesCommand
 */
export const de_ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAliasesOutput(data, context);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAliasesCommandError
 */
const de_ListAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListBuildsCommand
 */
export const de_ListBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBuildsOutput(data, context);
  const response: ListBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListBuildsCommandError
 */
const de_ListBuildsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListComputeCommand
 */
export const de_ListComputeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComputeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListComputeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListComputeOutput(data, context);
  const response: ListComputeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListComputeCommandError
 */
const de_ListComputeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComputeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListFleetsCommand
 */
export const de_ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFleetsCommandError
 */
const de_ListFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListGameServerGroupsCommand
 */
export const de_ListGameServerGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGameServerGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGameServerGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGameServerGroupsOutput(data, context);
  const response: ListGameServerGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListGameServerGroupsCommandError
 */
const de_ListGameServerGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGameServerGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListGameServersCommand
 */
export const de_ListGameServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGameServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGameServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGameServersOutput(data, context);
  const response: ListGameServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListGameServersCommandError
 */
const de_ListGameServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGameServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListLocationsCommand
 */
export const de_ListLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLocationsCommandError
 */
const de_ListLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListScriptsCommand
 */
export const de_ListScriptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScriptsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListScriptsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListScriptsOutput(data, context);
  const response: ListScriptsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListScriptsCommandError
 */
const de_ListScriptsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScriptsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutScalingPolicyCommand
 */
export const de_PutScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutScalingPolicyCommandError
 */
const de_PutScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RegisterComputeCommand
 */
export const de_RegisterComputeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterComputeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterComputeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterComputeOutput(data, context);
  const response: RegisterComputeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterComputeCommandError
 */
const de_RegisterComputeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterComputeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RegisterGameServerCommand
 */
export const de_RegisterGameServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterGameServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterGameServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterGameServerOutput(data, context);
  const response: RegisterGameServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterGameServerCommandError
 */
const de_RegisterGameServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterGameServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RequestUploadCredentialsCommand
 */
export const de_RequestUploadCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestUploadCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RequestUploadCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RequestUploadCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RequestUploadCredentialsCommandError
 */
const de_RequestUploadCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestUploadCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ResolveAliasCommand
 */
export const de_ResolveAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResolveAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ResolveAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ResolveAliasCommandError
 */
const de_ResolveAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await de_TerminalRoutingStrategyExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ResumeGameServerGroupCommand
 */
export const de_ResumeGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResumeGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResumeGameServerGroupOutput(data, context);
  const response: ResumeGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ResumeGameServerGroupCommandError
 */
const de_ResumeGameServerGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeGameServerGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SearchGameSessionsCommand
 */
export const de_SearchGameSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchGameSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchGameSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchGameSessionsOutput(data, context);
  const response: SearchGameSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SearchGameSessionsCommandError
 */
const de_SearchGameSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchGameSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await de_TerminalRoutingStrategyExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartFleetActionsCommand
 */
export const de_StartFleetActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFleetActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartFleetActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartFleetActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartFleetActionsCommandError
 */
const de_StartFleetActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFleetActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartGameSessionPlacementCommand
 */
export const de_StartGameSessionPlacementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGameSessionPlacementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartGameSessionPlacementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartGameSessionPlacementOutput(data, context);
  const response: StartGameSessionPlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartGameSessionPlacementCommandError
 */
const de_StartGameSessionPlacementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGameSessionPlacementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartMatchBackfillCommand
 */
export const de_StartMatchBackfillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMatchBackfillCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMatchBackfillCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartMatchBackfillOutput(data, context);
  const response: StartMatchBackfillCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartMatchBackfillCommandError
 */
const de_StartMatchBackfillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMatchBackfillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartMatchmakingCommand
 */
export const de_StartMatchmakingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMatchmakingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMatchmakingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartMatchmakingOutput(data, context);
  const response: StartMatchmakingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartMatchmakingCommandError
 */
const de_StartMatchmakingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMatchmakingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopFleetActionsCommand
 */
export const de_StopFleetActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFleetActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopFleetActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopFleetActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopFleetActionsCommandError
 */
const de_StopFleetActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFleetActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopGameSessionPlacementCommand
 */
export const de_StopGameSessionPlacementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopGameSessionPlacementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopGameSessionPlacementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopGameSessionPlacementOutput(data, context);
  const response: StopGameSessionPlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopGameSessionPlacementCommandError
 */
const de_StopGameSessionPlacementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopGameSessionPlacementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopMatchmakingCommand
 */
export const de_StopMatchmakingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMatchmakingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopMatchmakingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopMatchmakingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopMatchmakingCommandError
 */
const de_StopMatchmakingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMatchmakingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SuspendGameServerGroupCommand
 */
export const de_SuspendGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SuspendGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SuspendGameServerGroupOutput(data, context);
  const response: SuspendGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SuspendGameServerGroupCommandError
 */
const de_SuspendGameServerGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendGameServerGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
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
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await de_TaggingFailedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateAliasCommand
 */
export const de_UpdateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAliasOutput(data, context);
  const response: UpdateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAliasCommandError
 */
const de_UpdateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateBuildCommand
 */
export const de_UpdateBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBuildOutput(data, context);
  const response: UpdateBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateBuildCommandError
 */
const de_UpdateBuildCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBuildCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateFleetAttributesCommand
 */
export const de_UpdateFleetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFleetAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFleetAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFleetAttributesCommandError
 */
const de_UpdateFleetAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await de_InvalidFleetStatusExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateFleetCapacityCommand
 */
export const de_UpdateFleetCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFleetCapacityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFleetCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFleetCapacityCommandError
 */
const de_UpdateFleetCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await de_InvalidFleetStatusExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateFleetPortSettingsCommand
 */
export const de_UpdateFleetPortSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetPortSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFleetPortSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFleetPortSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFleetPortSettingsCommandError
 */
const de_UpdateFleetPortSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetPortSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await de_InvalidFleetStatusExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateGameServerCommand
 */
export const de_UpdateGameServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGameServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGameServerOutput(data, context);
  const response: UpdateGameServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateGameServerCommandError
 */
const de_UpdateGameServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateGameServerGroupCommand
 */
export const de_UpdateGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGameServerGroupOutput(data, context);
  const response: UpdateGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateGameServerGroupCommandError
 */
const de_UpdateGameServerGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameServerGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateGameSessionCommand
 */
export const de_UpdateGameSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGameSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGameSessionOutput(data, context);
  const response: UpdateGameSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateGameSessionCommandError
 */
const de_UpdateGameSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidGameSessionStatusException":
    case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
      throw await de_InvalidGameSessionStatusExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateGameSessionQueueCommand
 */
export const de_UpdateGameSessionQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameSessionQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGameSessionQueueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateGameSessionQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateGameSessionQueueCommandError
 */
const de_UpdateGameSessionQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameSessionQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateMatchmakingConfigurationCommand
 */
export const de_UpdateMatchmakingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMatchmakingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMatchmakingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMatchmakingConfigurationOutput(data, context);
  const response: UpdateMatchmakingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateMatchmakingConfigurationCommandError
 */
const de_UpdateMatchmakingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMatchmakingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateRuntimeConfigurationCommand
 */
export const de_UpdateRuntimeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuntimeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRuntimeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateRuntimeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateRuntimeConfigurationCommandError
 */
const de_UpdateRuntimeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuntimeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await de_InvalidFleetStatusExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateScriptCommand
 */
export const de_UpdateScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateScriptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateScriptOutput(data, context);
  const response: UpdateScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateScriptCommandError
 */
const de_UpdateScriptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScriptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ValidateMatchmakingRuleSetCommand
 */
export const de_ValidateMatchmakingRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateMatchmakingRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ValidateMatchmakingRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ValidateMatchmakingRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ValidateMatchmakingRuleSetCommandError
 */
const de_ValidateMatchmakingRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateMatchmakingRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await de_UnsupportedRegionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1FleetCapacityExceededExceptionRes
 */
const de_FleetCapacityExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FleetCapacityExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FleetCapacityExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1GameSessionFullExceptionRes
 */
const de_GameSessionFullExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GameSessionFullException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new GameSessionFullException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchExceptionRes
 */
const de_IdempotentParameterMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidFleetStatusExceptionRes
 */
const de_InvalidFleetStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFleetStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidFleetStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidGameSessionStatusExceptionRes
 */
const de_InvalidGameSessionStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGameSessionStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidGameSessionStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRequestException({
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
 * deserializeAws_json1_1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OutOfCapacityExceptionRes
 */
const de_OutOfCapacityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OutOfCapacityException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OutOfCapacityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TaggingFailedExceptionRes
 */
const de_TaggingFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaggingFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TaggingFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TerminalRoutingStrategyExceptionRes
 */
const de_TerminalRoutingStrategyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TerminalRoutingStrategyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TerminalRoutingStrategyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedRegionExceptionRes
 */
const de_UnsupportedRegionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcceptMatchInput omitted.

// se_AnywhereConfiguration omitted.

/**
 * serializeAws_json1_1AttributeValue
 */
const se_AttributeValue = (input: AttributeValue, context: __SerdeContext): any => {
  return take(input, {
    N: __serializeFloat,
    S: [],
    SDM: (_) => se_PlayerAttributeStringDoubleMap(_, context),
    SL: _json,
  });
};

// se_CertificateConfiguration omitted.

// se_ClaimFilterOption omitted.

// se_ClaimGameServerInput omitted.

// se_CreateAliasInput omitted.

// se_CreateBuildInput omitted.

// se_CreateFleetInput omitted.

// se_CreateFleetLocationsInput omitted.

/**
 * serializeAws_json1_1CreateGameServerGroupInput
 */
const se_CreateGameServerGroupInput = (input: CreateGameServerGroupInput, context: __SerdeContext): any => {
  return take(input, {
    AutoScalingPolicy: (_) => se_GameServerGroupAutoScalingPolicy(_, context),
    BalancingStrategy: [],
    GameServerGroupName: [],
    GameServerProtectionPolicy: [],
    InstanceDefinitions: _json,
    LaunchTemplate: _json,
    MaxSize: [],
    MinSize: [],
    RoleArn: [],
    Tags: _json,
    VpcSubnets: _json,
  });
};

// se_CreateGameSessionInput omitted.

// se_CreateGameSessionQueueInput omitted.

// se_CreateLocationInput omitted.

// se_CreateMatchmakingConfigurationInput omitted.

// se_CreateMatchmakingRuleSetInput omitted.

// se_CreatePlayerSessionInput omitted.

// se_CreatePlayerSessionsInput omitted.

/**
 * serializeAws_json1_1CreateScriptInput
 */
const se_CreateScriptInput = (input: CreateScriptInput, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    StorageLocation: _json,
    Tags: _json,
    Version: [],
    ZipFile: context.base64Encoder,
  });
};

// se_CreateVpcPeeringAuthorizationInput omitted.

// se_CreateVpcPeeringConnectionInput omitted.

// se_DeleteAliasInput omitted.

// se_DeleteBuildInput omitted.

// se_DeleteFleetInput omitted.

// se_DeleteFleetLocationsInput omitted.

// se_DeleteGameServerGroupInput omitted.

// se_DeleteGameSessionQueueInput omitted.

// se_DeleteLocationInput omitted.

// se_DeleteMatchmakingConfigurationInput omitted.

// se_DeleteMatchmakingRuleSetInput omitted.

// se_DeleteScalingPolicyInput omitted.

// se_DeleteScriptInput omitted.

// se_DeleteVpcPeeringAuthorizationInput omitted.

// se_DeleteVpcPeeringConnectionInput omitted.

// se_DeregisterComputeInput omitted.

// se_DeregisterGameServerInput omitted.

// se_DescribeAliasInput omitted.

// se_DescribeBuildInput omitted.

// se_DescribeComputeInput omitted.

// se_DescribeEC2InstanceLimitsInput omitted.

// se_DescribeFleetAttributesInput omitted.

// se_DescribeFleetCapacityInput omitted.

/**
 * serializeAws_json1_1DescribeFleetEventsInput
 */
const se_DescribeFleetEventsInput = (input: DescribeFleetEventsInput, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    FleetId: [],
    Limit: [],
    NextToken: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_DescribeFleetLocationAttributesInput omitted.

// se_DescribeFleetLocationCapacityInput omitted.

// se_DescribeFleetLocationUtilizationInput omitted.

// se_DescribeFleetPortSettingsInput omitted.

// se_DescribeFleetUtilizationInput omitted.

// se_DescribeGameServerGroupInput omitted.

// se_DescribeGameServerInput omitted.

// se_DescribeGameServerInstancesInput omitted.

// se_DescribeGameSessionDetailsInput omitted.

// se_DescribeGameSessionPlacementInput omitted.

// se_DescribeGameSessionQueuesInput omitted.

// se_DescribeGameSessionsInput omitted.

// se_DescribeInstancesInput omitted.

// se_DescribeMatchmakingConfigurationsInput omitted.

// se_DescribeMatchmakingInput omitted.

// se_DescribeMatchmakingRuleSetsInput omitted.

// se_DescribePlayerSessionsInput omitted.

// se_DescribeRuntimeConfigurationInput omitted.

// se_DescribeScalingPoliciesInput omitted.

// se_DescribeScriptInput omitted.

// se_DescribeVpcPeeringAuthorizationsInput omitted.

// se_DescribeVpcPeeringConnectionsInput omitted.

// se_DesiredPlayerSession omitted.

// se_DesiredPlayerSessionList omitted.

// se_FilterConfiguration omitted.

// se_FilterInstanceStatuses omitted.

// se_FleetActionList omitted.

// se_FleetIdOrArnList omitted.

// se_GameProperty omitted.

// se_GamePropertyList omitted.

// se_GameServerGroupActions omitted.

/**
 * serializeAws_json1_1GameServerGroupAutoScalingPolicy
 */
const se_GameServerGroupAutoScalingPolicy = (input: GameServerGroupAutoScalingPolicy, context: __SerdeContext): any => {
  return take(input, {
    EstimatedInstanceWarmup: [],
    TargetTrackingConfiguration: (_) => se_TargetTrackingConfiguration(_, context),
  });
};

// se_GameServerInstanceIds omitted.

// se_GameSessionQueueDestination omitted.

// se_GameSessionQueueDestinationList omitted.

// se_GameSessionQueueNameOrArnList omitted.

// se_GetComputeAccessInput omitted.

// se_GetComputeAuthTokenInput omitted.

// se_GetGameSessionLogUrlInput omitted.

// se_GetInstanceAccessInput omitted.

// se_InstanceDefinition omitted.

// se_InstanceDefinitions omitted.

// se_IpPermission omitted.

// se_IpPermissionsList omitted.

// se_LatencyMap omitted.

// se_LaunchTemplateSpecification omitted.

// se_ListAliasesInput omitted.

// se_ListBuildsInput omitted.

// se_ListComputeInput omitted.

// se_ListFleetsInput omitted.

// se_ListGameServerGroupsInput omitted.

// se_ListGameServersInput omitted.

// se_ListLocationsInput omitted.

// se_ListScriptsInput omitted.

// se_ListTagsForResourceRequest omitted.

// se_LocationConfiguration omitted.

// se_LocationConfigurationList omitted.

// se_LocationFilterList omitted.

// se_LocationList omitted.

// se_MatchmakingConfigurationNameList omitted.

// se_MatchmakingIdList omitted.

// se_MatchmakingRuleSetNameList omitted.

// se_MetricGroupList omitted.

/**
 * serializeAws_json1_1Player
 */
const se_Player = (input: Player, context: __SerdeContext): any => {
  return take(input, {
    LatencyInMs: _json,
    PlayerAttributes: (_) => se_PlayerAttributeMap(_, context),
    PlayerId: [],
    Team: [],
  });
};

/**
 * serializeAws_json1_1PlayerAttributeMap
 */
const se_PlayerAttributeMap = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1PlayerAttributeStringDoubleMap
 */
const se_PlayerAttributeStringDoubleMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __serializeFloat(value);
    return acc;
  }, {});
};

// se_PlayerAttributeStringList omitted.

// se_PlayerDataMap omitted.

// se_PlayerIdList omitted.

/**
 * serializeAws_json1_1PlayerLatency
 */
const se_PlayerLatency = (input: PlayerLatency, context: __SerdeContext): any => {
  return take(input, {
    LatencyInMilliseconds: __serializeFloat,
    PlayerId: [],
    RegionIdentifier: [],
  });
};

/**
 * serializeAws_json1_1PlayerLatencyList
 */
const se_PlayerLatencyList = (input: PlayerLatency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlayerLatency(entry, context);
    });
};

// se_PlayerLatencyPolicy omitted.

// se_PlayerLatencyPolicyList omitted.

/**
 * serializeAws_json1_1PlayerList
 */
const se_PlayerList = (input: Player[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Player(entry, context);
    });
};

// se_PriorityConfiguration omitted.

// se_PriorityTypeList omitted.

/**
 * serializeAws_json1_1PutScalingPolicyInput
 */
const se_PutScalingPolicyInput = (input: PutScalingPolicyInput, context: __SerdeContext): any => {
  return take(input, {
    ComparisonOperator: [],
    EvaluationPeriods: [],
    FleetId: [],
    MetricName: [],
    Name: [],
    PolicyType: [],
    ScalingAdjustment: [],
    ScalingAdjustmentType: [],
    TargetConfiguration: (_) => se_TargetConfiguration(_, context),
    Threshold: __serializeFloat,
  });
};

// se_QueueArnsList omitted.

// se_RegisterComputeInput omitted.

// se_RegisterGameServerInput omitted.

// se_RequestUploadCredentialsInput omitted.

// se_ResolveAliasInput omitted.

// se_ResourceCreationLimitPolicy omitted.

// se_ResumeGameServerGroupInput omitted.

// se_RoutingStrategy omitted.

// se_RuntimeConfiguration omitted.

// se_S3Location omitted.

// se_SearchGameSessionsInput omitted.

// se_ServerProcess omitted.

// se_ServerProcessList omitted.

// se_StartFleetActionsInput omitted.

/**
 * serializeAws_json1_1StartGameSessionPlacementInput
 */
const se_StartGameSessionPlacementInput = (input: StartGameSessionPlacementInput, context: __SerdeContext): any => {
  return take(input, {
    DesiredPlayerSessions: _json,
    GameProperties: _json,
    GameSessionData: [],
    GameSessionName: [],
    GameSessionQueueName: [],
    MaximumPlayerSessionCount: [],
    PlacementId: [],
    PlayerLatencies: (_) => se_PlayerLatencyList(_, context),
  });
};

/**
 * serializeAws_json1_1StartMatchBackfillInput
 */
const se_StartMatchBackfillInput = (input: StartMatchBackfillInput, context: __SerdeContext): any => {
  return take(input, {
    ConfigurationName: [],
    GameSessionArn: [],
    Players: (_) => se_PlayerList(_, context),
    TicketId: [],
  });
};

/**
 * serializeAws_json1_1StartMatchmakingInput
 */
const se_StartMatchmakingInput = (input: StartMatchmakingInput, context: __SerdeContext): any => {
  return take(input, {
    ConfigurationName: [],
    Players: (_) => se_PlayerList(_, context),
    TicketId: [],
  });
};

// se_StopFleetActionsInput omitted.

// se_StopGameSessionPlacementInput omitted.

// se_StopMatchmakingInput omitted.

// se_StringList omitted.

// se_SuspendGameServerGroupInput omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

/**
 * serializeAws_json1_1TargetConfiguration
 */
const se_TargetConfiguration = (input: TargetConfiguration, context: __SerdeContext): any => {
  return take(input, {
    TargetValue: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1TargetTrackingConfiguration
 */
const se_TargetTrackingConfiguration = (input: TargetTrackingConfiguration, context: __SerdeContext): any => {
  return take(input, {
    TargetValue: __serializeFloat,
  });
};

// se_UntagResourceRequest omitted.

// se_UpdateAliasInput omitted.

// se_UpdateBuildInput omitted.

// se_UpdateFleetAttributesInput omitted.

// se_UpdateFleetCapacityInput omitted.

// se_UpdateFleetPortSettingsInput omitted.

// se_UpdateGameServerGroupInput omitted.

// se_UpdateGameServerInput omitted.

// se_UpdateGameSessionInput omitted.

// se_UpdateGameSessionQueueInput omitted.

// se_UpdateMatchmakingConfigurationInput omitted.

// se_UpdateRuntimeConfigurationInput omitted.

/**
 * serializeAws_json1_1UpdateScriptInput
 */
const se_UpdateScriptInput = (input: UpdateScriptInput, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    ScriptId: [],
    StorageLocation: _json,
    Version: [],
    ZipFile: context.base64Encoder,
  });
};

// se_ValidateMatchmakingRuleSetInput omitted.

// se_VpcSubnets omitted.

// de_AcceptMatchOutput omitted.

/**
 * deserializeAws_json1_1Alias
 */
const de_Alias = (output: any, context: __SerdeContext): Alias => {
  return take(output, {
    AliasArn: __expectString,
    AliasId: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    RoutingStrategy: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1AliasList
 */
const de_AliasList = (output: any, context: __SerdeContext): Alias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Alias(entry, context);
    });
  return retVal;
};

// de_AnywhereConfiguration omitted.

/**
 * deserializeAws_json1_1AttributeValue
 */
const de_AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  return take(output, {
    N: __limitedParseDouble,
    S: __expectString,
    SDM: (_: any) => de_PlayerAttributeStringDoubleMap(_, context),
    SL: _json,
  }) as any;
};

// de_AwsCredentials omitted.

/**
 * deserializeAws_json1_1Build
 */
const de_Build = (output: any, context: __SerdeContext): Build => {
  return take(output, {
    BuildArn: __expectString,
    BuildId: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OperatingSystem: __expectString,
    ServerSdkVersion: __expectString,
    SizeOnDisk: __expectLong,
    Status: __expectString,
    Version: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BuildList
 */
const de_BuildList = (output: any, context: __SerdeContext): Build[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Build(entry, context);
    });
  return retVal;
};

// de_CertificateConfiguration omitted.

/**
 * deserializeAws_json1_1ClaimGameServerOutput
 */
const de_ClaimGameServerOutput = (output: any, context: __SerdeContext): ClaimGameServerOutput => {
  return take(output, {
    GameServer: (_: any) => de_GameServer(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Compute
 */
const de_Compute = (output: any, context: __SerdeContext): Compute => {
  return take(output, {
    ComputeArn: __expectString,
    ComputeName: __expectString,
    ComputeStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DnsName: __expectString,
    FleetArn: __expectString,
    FleetId: __expectString,
    GameLiftServiceSdkEndpoint: __expectString,
    IpAddress: __expectString,
    Location: __expectString,
    OperatingSystem: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ComputeList
 */
const de_ComputeList = (output: any, context: __SerdeContext): Compute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Compute(entry, context);
    });
  return retVal;
};

// de_ConflictException omitted.

/**
 * deserializeAws_json1_1CreateAliasOutput
 */
const de_CreateAliasOutput = (output: any, context: __SerdeContext): CreateAliasOutput => {
  return take(output, {
    Alias: (_: any) => de_Alias(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateBuildOutput
 */
const de_CreateBuildOutput = (output: any, context: __SerdeContext): CreateBuildOutput => {
  return take(output, {
    Build: (_: any) => de_Build(_, context),
    StorageLocation: _json,
    UploadCredentials: _json,
  }) as any;
};

// de_CreateFleetLocationsOutput omitted.

/**
 * deserializeAws_json1_1CreateFleetOutput
 */
const de_CreateFleetOutput = (output: any, context: __SerdeContext): CreateFleetOutput => {
  return take(output, {
    FleetAttributes: (_: any) => de_FleetAttributes(_, context),
    LocationStates: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateGameServerGroupOutput
 */
const de_CreateGameServerGroupOutput = (output: any, context: __SerdeContext): CreateGameServerGroupOutput => {
  return take(output, {
    GameServerGroup: (_: any) => de_GameServerGroup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateGameSessionOutput
 */
const de_CreateGameSessionOutput = (output: any, context: __SerdeContext): CreateGameSessionOutput => {
  return take(output, {
    GameSession: (_: any) => de_GameSession(_, context),
  }) as any;
};

// de_CreateGameSessionQueueOutput omitted.

// de_CreateLocationOutput omitted.

/**
 * deserializeAws_json1_1CreateMatchmakingConfigurationOutput
 */
const de_CreateMatchmakingConfigurationOutput = (
  output: any,
  context: __SerdeContext
): CreateMatchmakingConfigurationOutput => {
  return take(output, {
    Configuration: (_: any) => de_MatchmakingConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateMatchmakingRuleSetOutput
 */
const de_CreateMatchmakingRuleSetOutput = (output: any, context: __SerdeContext): CreateMatchmakingRuleSetOutput => {
  return take(output, {
    RuleSet: (_: any) => de_MatchmakingRuleSet(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreatePlayerSessionOutput
 */
const de_CreatePlayerSessionOutput = (output: any, context: __SerdeContext): CreatePlayerSessionOutput => {
  return take(output, {
    PlayerSession: (_: any) => de_PlayerSession(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreatePlayerSessionsOutput
 */
const de_CreatePlayerSessionsOutput = (output: any, context: __SerdeContext): CreatePlayerSessionsOutput => {
  return take(output, {
    PlayerSessions: (_: any) => de_PlayerSessionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateScriptOutput
 */
const de_CreateScriptOutput = (output: any, context: __SerdeContext): CreateScriptOutput => {
  return take(output, {
    Script: (_: any) => de_Script(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput
 */
const de_CreateVpcPeeringAuthorizationOutput = (
  output: any,
  context: __SerdeContext
): CreateVpcPeeringAuthorizationOutput => {
  return take(output, {
    VpcPeeringAuthorization: (_: any) => de_VpcPeeringAuthorization(_, context),
  }) as any;
};

// de_CreateVpcPeeringConnectionOutput omitted.

// de_DeleteFleetLocationsOutput omitted.

/**
 * deserializeAws_json1_1DeleteGameServerGroupOutput
 */
const de_DeleteGameServerGroupOutput = (output: any, context: __SerdeContext): DeleteGameServerGroupOutput => {
  return take(output, {
    GameServerGroup: (_: any) => de_GameServerGroup(_, context),
  }) as any;
};

// de_DeleteGameSessionQueueOutput omitted.

// de_DeleteLocationOutput omitted.

// de_DeleteMatchmakingConfigurationOutput omitted.

// de_DeleteMatchmakingRuleSetOutput omitted.

// de_DeleteVpcPeeringAuthorizationOutput omitted.

// de_DeleteVpcPeeringConnectionOutput omitted.

// de_DeregisterComputeOutput omitted.

/**
 * deserializeAws_json1_1DescribeAliasOutput
 */
const de_DescribeAliasOutput = (output: any, context: __SerdeContext): DescribeAliasOutput => {
  return take(output, {
    Alias: (_: any) => de_Alias(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBuildOutput
 */
const de_DescribeBuildOutput = (output: any, context: __SerdeContext): DescribeBuildOutput => {
  return take(output, {
    Build: (_: any) => de_Build(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeComputeOutput
 */
const de_DescribeComputeOutput = (output: any, context: __SerdeContext): DescribeComputeOutput => {
  return take(output, {
    Compute: (_: any) => de_Compute(_, context),
  }) as any;
};

// de_DescribeEC2InstanceLimitsOutput omitted.

/**
 * deserializeAws_json1_1DescribeFleetAttributesOutput
 */
const de_DescribeFleetAttributesOutput = (output: any, context: __SerdeContext): DescribeFleetAttributesOutput => {
  return take(output, {
    FleetAttributes: (_: any) => de_FleetAttributesList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeFleetCapacityOutput omitted.

/**
 * deserializeAws_json1_1DescribeFleetEventsOutput
 */
const de_DescribeFleetEventsOutput = (output: any, context: __SerdeContext): DescribeFleetEventsOutput => {
  return take(output, {
    Events: (_: any) => de_EventList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeFleetLocationAttributesOutput omitted.

// de_DescribeFleetLocationCapacityOutput omitted.

// de_DescribeFleetLocationUtilizationOutput omitted.

// de_DescribeFleetPortSettingsOutput omitted.

// de_DescribeFleetUtilizationOutput omitted.

/**
 * deserializeAws_json1_1DescribeGameServerGroupOutput
 */
const de_DescribeGameServerGroupOutput = (output: any, context: __SerdeContext): DescribeGameServerGroupOutput => {
  return take(output, {
    GameServerGroup: (_: any) => de_GameServerGroup(_, context),
  }) as any;
};

// de_DescribeGameServerInstancesOutput omitted.

/**
 * deserializeAws_json1_1DescribeGameServerOutput
 */
const de_DescribeGameServerOutput = (output: any, context: __SerdeContext): DescribeGameServerOutput => {
  return take(output, {
    GameServer: (_: any) => de_GameServer(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeGameSessionDetailsOutput
 */
const de_DescribeGameSessionDetailsOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameSessionDetailsOutput => {
  return take(output, {
    GameSessionDetails: (_: any) => de_GameSessionDetailList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeGameSessionPlacementOutput
 */
const de_DescribeGameSessionPlacementOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameSessionPlacementOutput => {
  return take(output, {
    GameSessionPlacement: (_: any) => de_GameSessionPlacement(_, context),
  }) as any;
};

// de_DescribeGameSessionQueuesOutput omitted.

/**
 * deserializeAws_json1_1DescribeGameSessionsOutput
 */
const de_DescribeGameSessionsOutput = (output: any, context: __SerdeContext): DescribeGameSessionsOutput => {
  return take(output, {
    GameSessions: (_: any) => de_GameSessionList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInstancesOutput
 */
const de_DescribeInstancesOutput = (output: any, context: __SerdeContext): DescribeInstancesOutput => {
  return take(output, {
    Instances: (_: any) => de_InstanceList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput
 */
const de_DescribeMatchmakingConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMatchmakingConfigurationsOutput => {
  return take(output, {
    Configurations: (_: any) => de_MatchmakingConfigurationList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMatchmakingOutput
 */
const de_DescribeMatchmakingOutput = (output: any, context: __SerdeContext): DescribeMatchmakingOutput => {
  return take(output, {
    TicketList: (_: any) => de_MatchmakingTicketList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput
 */
const de_DescribeMatchmakingRuleSetsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMatchmakingRuleSetsOutput => {
  return take(output, {
    NextToken: __expectString,
    RuleSets: (_: any) => de_MatchmakingRuleSetList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePlayerSessionsOutput
 */
const de_DescribePlayerSessionsOutput = (output: any, context: __SerdeContext): DescribePlayerSessionsOutput => {
  return take(output, {
    NextToken: __expectString,
    PlayerSessions: (_: any) => de_PlayerSessionList(_, context),
  }) as any;
};

// de_DescribeRuntimeConfigurationOutput omitted.

/**
 * deserializeAws_json1_1DescribeScalingPoliciesOutput
 */
const de_DescribeScalingPoliciesOutput = (output: any, context: __SerdeContext): DescribeScalingPoliciesOutput => {
  return take(output, {
    NextToken: __expectString,
    ScalingPolicies: (_: any) => de_ScalingPolicyList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeScriptOutput
 */
const de_DescribeScriptOutput = (output: any, context: __SerdeContext): DescribeScriptOutput => {
  return take(output, {
    Script: (_: any) => de_Script(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput
 */
const de_DescribeVpcPeeringAuthorizationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeVpcPeeringAuthorizationsOutput => {
  return take(output, {
    VpcPeeringAuthorizations: (_: any) => de_VpcPeeringAuthorizationList(_, context),
  }) as any;
};

// de_DescribeVpcPeeringConnectionsOutput omitted.

// de_EC2InstanceCounts omitted.

// de_EC2InstanceLimit omitted.

// de_EC2InstanceLimitList omitted.

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return take(output, {
    EventCode: __expectString,
    EventId: __expectString,
    EventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    PreSignedLogUrl: __expectString,
    ResourceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Event(entry, context);
    });
  return retVal;
};

// de_FilterConfiguration omitted.

// de_FleetActionList omitted.

/**
 * deserializeAws_json1_1FleetAttributes
 */
const de_FleetAttributes = (output: any, context: __SerdeContext): FleetAttributes => {
  return take(output, {
    AnywhereConfiguration: _json,
    BuildArn: __expectString,
    BuildId: __expectString,
    CertificateConfiguration: _json,
    ComputeType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    FleetArn: __expectString,
    FleetId: __expectString,
    FleetType: __expectString,
    InstanceRoleArn: __expectString,
    InstanceType: __expectString,
    LogPaths: _json,
    MetricGroups: _json,
    Name: __expectString,
    NewGameSessionProtectionPolicy: __expectString,
    OperatingSystem: __expectString,
    ResourceCreationLimitPolicy: _json,
    ScriptArn: __expectString,
    ScriptId: __expectString,
    ServerLaunchParameters: __expectString,
    ServerLaunchPath: __expectString,
    Status: __expectString,
    StoppedActions: _json,
    TerminationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1FleetAttributesList
 */
const de_FleetAttributesList = (output: any, context: __SerdeContext): FleetAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FleetAttributes(entry, context);
    });
  return retVal;
};

// de_FleetCapacity omitted.

// de_FleetCapacityExceededException omitted.

// de_FleetCapacityList omitted.

// de_FleetIdList omitted.

// de_FleetUtilization omitted.

// de_FleetUtilizationList omitted.

// de_GameProperty omitted.

// de_GamePropertyList omitted.

/**
 * deserializeAws_json1_1GameServer
 */
const de_GameServer = (output: any, context: __SerdeContext): GameServer => {
  return take(output, {
    ClaimStatus: __expectString,
    ConnectionInfo: __expectString,
    GameServerData: __expectString,
    GameServerGroupArn: __expectString,
    GameServerGroupName: __expectString,
    GameServerId: __expectString,
    InstanceId: __expectString,
    LastClaimTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastHealthCheckTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RegistrationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UtilizationStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GameServerGroup
 */
const de_GameServerGroup = (output: any, context: __SerdeContext): GameServerGroup => {
  return take(output, {
    AutoScalingGroupArn: __expectString,
    BalancingStrategy: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GameServerGroupArn: __expectString,
    GameServerGroupName: __expectString,
    GameServerProtectionPolicy: __expectString,
    InstanceDefinitions: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RoleArn: __expectString,
    Status: __expectString,
    StatusReason: __expectString,
    SuspendedActions: _json,
  }) as any;
};

// de_GameServerGroupActions omitted.

/**
 * deserializeAws_json1_1GameServerGroups
 */
const de_GameServerGroups = (output: any, context: __SerdeContext): GameServerGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GameServerGroup(entry, context);
    });
  return retVal;
};

// de_GameServerInstance omitted.

// de_GameServerInstances omitted.

/**
 * deserializeAws_json1_1GameServers
 */
const de_GameServers = (output: any, context: __SerdeContext): GameServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GameServer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GameSession
 */
const de_GameSession = (output: any, context: __SerdeContext): GameSession => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorId: __expectString,
    CurrentPlayerSessionCount: __expectInt32,
    DnsName: __expectString,
    FleetArn: __expectString,
    FleetId: __expectString,
    GameProperties: _json,
    GameSessionData: __expectString,
    GameSessionId: __expectString,
    IpAddress: __expectString,
    Location: __expectString,
    MatchmakerData: __expectString,
    MaximumPlayerSessionCount: __expectInt32,
    Name: __expectString,
    PlayerSessionCreationPolicy: __expectString,
    Port: __expectInt32,
    Status: __expectString,
    StatusReason: __expectString,
    TerminationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_GameSessionConnectionInfo omitted.

/**
 * deserializeAws_json1_1GameSessionDetail
 */
const de_GameSessionDetail = (output: any, context: __SerdeContext): GameSessionDetail => {
  return take(output, {
    GameSession: (_: any) => de_GameSession(_, context),
    ProtectionPolicy: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GameSessionDetailList
 */
const de_GameSessionDetailList = (output: any, context: __SerdeContext): GameSessionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GameSessionDetail(entry, context);
    });
  return retVal;
};

// de_GameSessionFullException omitted.

/**
 * deserializeAws_json1_1GameSessionList
 */
const de_GameSessionList = (output: any, context: __SerdeContext): GameSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GameSession(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GameSessionPlacement
 */
const de_GameSessionPlacement = (output: any, context: __SerdeContext): GameSessionPlacement => {
  return take(output, {
    DnsName: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GameProperties: _json,
    GameSessionArn: __expectString,
    GameSessionData: __expectString,
    GameSessionId: __expectString,
    GameSessionName: __expectString,
    GameSessionQueueName: __expectString,
    GameSessionRegion: __expectString,
    IpAddress: __expectString,
    MatchmakerData: __expectString,
    MaximumPlayerSessionCount: __expectInt32,
    PlacedPlayerSessions: _json,
    PlacementId: __expectString,
    PlayerLatencies: (_: any) => de_PlayerLatencyList(_, context),
    Port: __expectInt32,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

// de_GameSessionQueue omitted.

// de_GameSessionQueueDestination omitted.

// de_GameSessionQueueDestinationList omitted.

// de_GameSessionQueueList omitted.

// de_GetComputeAccessOutput omitted.

/**
 * deserializeAws_json1_1GetComputeAuthTokenOutput
 */
const de_GetComputeAuthTokenOutput = (output: any, context: __SerdeContext): GetComputeAuthTokenOutput => {
  return take(output, {
    AuthToken: __expectString,
    ComputeArn: __expectString,
    ComputeName: __expectString,
    ExpirationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FleetArn: __expectString,
    FleetId: __expectString,
  }) as any;
};

// de_GetGameSessionLogUrlOutput omitted.

// de_GetInstanceAccessOutput omitted.

// de_IdempotentParameterMismatchException omitted.

/**
 * deserializeAws_json1_1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DnsName: __expectString,
    FleetArn: __expectString,
    FleetId: __expectString,
    InstanceId: __expectString,
    IpAddress: __expectString,
    Location: __expectString,
    OperatingSystem: __expectString,
    Status: __expectString,
    Type: __expectString,
  }) as any;
};

// de_InstanceAccess omitted.

// de_InstanceCredentials omitted.

// de_InstanceDefinition omitted.

// de_InstanceDefinitions omitted.

/**
 * deserializeAws_json1_1InstanceList
 */
const de_InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Instance(entry, context);
    });
  return retVal;
};

// de_InternalServiceException omitted.

// de_InvalidFleetStatusException omitted.

// de_InvalidGameSessionStatusException omitted.

// de_InvalidRequestException omitted.

// de_IpPermission omitted.

// de_IpPermissionsList omitted.

// de_LatencyMap omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListAliasesOutput
 */
const de_ListAliasesOutput = (output: any, context: __SerdeContext): ListAliasesOutput => {
  return take(output, {
    Aliases: (_: any) => de_AliasList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListBuildsOutput
 */
const de_ListBuildsOutput = (output: any, context: __SerdeContext): ListBuildsOutput => {
  return take(output, {
    Builds: (_: any) => de_BuildList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListComputeOutput
 */
const de_ListComputeOutput = (output: any, context: __SerdeContext): ListComputeOutput => {
  return take(output, {
    ComputeList: (_: any) => de_ComputeList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListFleetsOutput omitted.

/**
 * deserializeAws_json1_1ListGameServerGroupsOutput
 */
const de_ListGameServerGroupsOutput = (output: any, context: __SerdeContext): ListGameServerGroupsOutput => {
  return take(output, {
    GameServerGroups: (_: any) => de_GameServerGroups(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListGameServersOutput
 */
const de_ListGameServersOutput = (output: any, context: __SerdeContext): ListGameServersOutput => {
  return take(output, {
    GameServers: (_: any) => de_GameServers(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListLocationsOutput omitted.

/**
 * deserializeAws_json1_1ListScriptsOutput
 */
const de_ListScriptsOutput = (output: any, context: __SerdeContext): ListScriptsOutput => {
  return take(output, {
    NextToken: __expectString,
    Scripts: (_: any) => de_ScriptList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_LocationAttributes omitted.

// de_LocationAttributesList omitted.

// de_LocationList omitted.

// de_LocationModel omitted.

// de_LocationModelList omitted.

// de_LocationState omitted.

// de_LocationStateList omitted.

// de_MatchedPlayerSession omitted.

// de_MatchedPlayerSessionList omitted.

/**
 * deserializeAws_json1_1MatchmakingConfiguration
 */
const de_MatchmakingConfiguration = (output: any, context: __SerdeContext): MatchmakingConfiguration => {
  return take(output, {
    AcceptanceRequired: __expectBoolean,
    AcceptanceTimeoutSeconds: __expectInt32,
    AdditionalPlayerCount: __expectInt32,
    BackfillMode: __expectString,
    ConfigurationArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomEventData: __expectString,
    Description: __expectString,
    FlexMatchMode: __expectString,
    GameProperties: _json,
    GameSessionData: __expectString,
    GameSessionQueueArns: _json,
    Name: __expectString,
    NotificationTarget: __expectString,
    RequestTimeoutSeconds: __expectInt32,
    RuleSetArn: __expectString,
    RuleSetName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MatchmakingConfigurationList
 */
const de_MatchmakingConfigurationList = (output: any, context: __SerdeContext): MatchmakingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MatchmakingConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MatchmakingRuleSet
 */
const de_MatchmakingRuleSet = (output: any, context: __SerdeContext): MatchmakingRuleSet => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuleSetArn: __expectString,
    RuleSetBody: __expectString,
    RuleSetName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MatchmakingRuleSetList
 */
const de_MatchmakingRuleSetList = (output: any, context: __SerdeContext): MatchmakingRuleSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MatchmakingRuleSet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MatchmakingTicket
 */
const de_MatchmakingTicket = (output: any, context: __SerdeContext): MatchmakingTicket => {
  return take(output, {
    ConfigurationArn: __expectString,
    ConfigurationName: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EstimatedWaitTime: __expectInt32,
    GameSessionConnectionInfo: _json,
    Players: (_: any) => de_PlayerList(_, context),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusMessage: __expectString,
    StatusReason: __expectString,
    TicketId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MatchmakingTicketList
 */
const de_MatchmakingTicketList = (output: any, context: __SerdeContext): MatchmakingTicket[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MatchmakingTicket(entry, context);
    });
  return retVal;
};

// de_MetricGroupList omitted.

// de_NotFoundException omitted.

// de_OutOfCapacityException omitted.

// de_PlacedPlayerSession omitted.

// de_PlacedPlayerSessionList omitted.

/**
 * deserializeAws_json1_1Player
 */
const de_Player = (output: any, context: __SerdeContext): Player => {
  return take(output, {
    LatencyInMs: _json,
    PlayerAttributes: (_: any) => de_PlayerAttributeMap(_, context),
    PlayerId: __expectString,
    Team: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PlayerAttributeMap
 */
const de_PlayerAttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_AttributeValue(value, context);
    return acc;
  }, {} as Record<string, AttributeValue>);
};

/**
 * deserializeAws_json1_1PlayerAttributeStringDoubleMap
 */
const de_PlayerAttributeStringDoubleMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __limitedParseDouble(value) as any;
    return acc;
  }, {} as Record<string, number>);
};

// de_PlayerAttributeStringList omitted.

/**
 * deserializeAws_json1_1PlayerLatency
 */
const de_PlayerLatency = (output: any, context: __SerdeContext): PlayerLatency => {
  return take(output, {
    LatencyInMilliseconds: __limitedParseFloat32,
    PlayerId: __expectString,
    RegionIdentifier: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PlayerLatencyList
 */
const de_PlayerLatencyList = (output: any, context: __SerdeContext): PlayerLatency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PlayerLatency(entry, context);
    });
  return retVal;
};

// de_PlayerLatencyPolicy omitted.

// de_PlayerLatencyPolicyList omitted.

/**
 * deserializeAws_json1_1PlayerList
 */
const de_PlayerList = (output: any, context: __SerdeContext): Player[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Player(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlayerSession
 */
const de_PlayerSession = (output: any, context: __SerdeContext): PlayerSession => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DnsName: __expectString,
    FleetArn: __expectString,
    FleetId: __expectString,
    GameSessionId: __expectString,
    IpAddress: __expectString,
    PlayerData: __expectString,
    PlayerId: __expectString,
    PlayerSessionId: __expectString,
    Port: __expectInt32,
    Status: __expectString,
    TerminationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1PlayerSessionList
 */
const de_PlayerSessionList = (output: any, context: __SerdeContext): PlayerSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PlayerSession(entry, context);
    });
  return retVal;
};

// de_PriorityConfiguration omitted.

// de_PriorityTypeList omitted.

// de_PutScalingPolicyOutput omitted.

// de_QueueArnsList omitted.

/**
 * deserializeAws_json1_1RegisterComputeOutput
 */
const de_RegisterComputeOutput = (output: any, context: __SerdeContext): RegisterComputeOutput => {
  return take(output, {
    Compute: (_: any) => de_Compute(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RegisterGameServerOutput
 */
const de_RegisterGameServerOutput = (output: any, context: __SerdeContext): RegisterGameServerOutput => {
  return take(output, {
    GameServer: (_: any) => de_GameServer(_, context),
  }) as any;
};

// de_RequestUploadCredentialsOutput omitted.

// de_ResolveAliasOutput omitted.

// de_ResourceCreationLimitPolicy omitted.

/**
 * deserializeAws_json1_1ResumeGameServerGroupOutput
 */
const de_ResumeGameServerGroupOutput = (output: any, context: __SerdeContext): ResumeGameServerGroupOutput => {
  return take(output, {
    GameServerGroup: (_: any) => de_GameServerGroup(_, context),
  }) as any;
};

// de_RoutingStrategy omitted.

// de_RuntimeConfiguration omitted.

// de_S3Location omitted.

/**
 * deserializeAws_json1_1ScalingPolicy
 */
const de_ScalingPolicy = (output: any, context: __SerdeContext): ScalingPolicy => {
  return take(output, {
    ComparisonOperator: __expectString,
    EvaluationPeriods: __expectInt32,
    FleetArn: __expectString,
    FleetId: __expectString,
    Location: __expectString,
    MetricName: __expectString,
    Name: __expectString,
    PolicyType: __expectString,
    ScalingAdjustment: __expectInt32,
    ScalingAdjustmentType: __expectString,
    Status: __expectString,
    TargetConfiguration: (_: any) => de_TargetConfiguration(_, context),
    Threshold: __limitedParseDouble,
    UpdateStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ScalingPolicyList
 */
const de_ScalingPolicyList = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScalingPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Script
 */
const de_Script = (output: any, context: __SerdeContext): Script => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    ScriptArn: __expectString,
    ScriptId: __expectString,
    SizeOnDisk: __expectLong,
    StorageLocation: _json,
    Version: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ScriptList
 */
const de_ScriptList = (output: any, context: __SerdeContext): Script[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Script(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SearchGameSessionsOutput
 */
const de_SearchGameSessionsOutput = (output: any, context: __SerdeContext): SearchGameSessionsOutput => {
  return take(output, {
    GameSessions: (_: any) => de_GameSessionList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ServerProcess omitted.

// de_ServerProcessList omitted.

// de_StartFleetActionsOutput omitted.

/**
 * deserializeAws_json1_1StartGameSessionPlacementOutput
 */
const de_StartGameSessionPlacementOutput = (output: any, context: __SerdeContext): StartGameSessionPlacementOutput => {
  return take(output, {
    GameSessionPlacement: (_: any) => de_GameSessionPlacement(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartMatchBackfillOutput
 */
const de_StartMatchBackfillOutput = (output: any, context: __SerdeContext): StartMatchBackfillOutput => {
  return take(output, {
    MatchmakingTicket: (_: any) => de_MatchmakingTicket(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartMatchmakingOutput
 */
const de_StartMatchmakingOutput = (output: any, context: __SerdeContext): StartMatchmakingOutput => {
  return take(output, {
    MatchmakingTicket: (_: any) => de_MatchmakingTicket(_, context),
  }) as any;
};

// de_StopFleetActionsOutput omitted.

/**
 * deserializeAws_json1_1StopGameSessionPlacementOutput
 */
const de_StopGameSessionPlacementOutput = (output: any, context: __SerdeContext): StopGameSessionPlacementOutput => {
  return take(output, {
    GameSessionPlacement: (_: any) => de_GameSessionPlacement(_, context),
  }) as any;
};

// de_StopMatchmakingOutput omitted.

// de_StringList omitted.

/**
 * deserializeAws_json1_1SuspendGameServerGroupOutput
 */
const de_SuspendGameServerGroupOutput = (output: any, context: __SerdeContext): SuspendGameServerGroupOutput => {
  return take(output, {
    GameServerGroup: (_: any) => de_GameServerGroup(_, context),
  }) as any;
};

// de_Tag omitted.

// de_TaggingFailedException omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

/**
 * deserializeAws_json1_1TargetConfiguration
 */
const de_TargetConfiguration = (output: any, context: __SerdeContext): TargetConfiguration => {
  return take(output, {
    TargetValue: __limitedParseDouble,
  }) as any;
};

// de_TerminalRoutingStrategyException omitted.

// de_UnauthorizedException omitted.

// de_UnsupportedRegionException omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_1UpdateAliasOutput
 */
const de_UpdateAliasOutput = (output: any, context: __SerdeContext): UpdateAliasOutput => {
  return take(output, {
    Alias: (_: any) => de_Alias(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateBuildOutput
 */
const de_UpdateBuildOutput = (output: any, context: __SerdeContext): UpdateBuildOutput => {
  return take(output, {
    Build: (_: any) => de_Build(_, context),
  }) as any;
};

// de_UpdateFleetAttributesOutput omitted.

// de_UpdateFleetCapacityOutput omitted.

// de_UpdateFleetPortSettingsOutput omitted.

/**
 * deserializeAws_json1_1UpdateGameServerGroupOutput
 */
const de_UpdateGameServerGroupOutput = (output: any, context: __SerdeContext): UpdateGameServerGroupOutput => {
  return take(output, {
    GameServerGroup: (_: any) => de_GameServerGroup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateGameServerOutput
 */
const de_UpdateGameServerOutput = (output: any, context: __SerdeContext): UpdateGameServerOutput => {
  return take(output, {
    GameServer: (_: any) => de_GameServer(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateGameSessionOutput
 */
const de_UpdateGameSessionOutput = (output: any, context: __SerdeContext): UpdateGameSessionOutput => {
  return take(output, {
    GameSession: (_: any) => de_GameSession(_, context),
  }) as any;
};

// de_UpdateGameSessionQueueOutput omitted.

/**
 * deserializeAws_json1_1UpdateMatchmakingConfigurationOutput
 */
const de_UpdateMatchmakingConfigurationOutput = (
  output: any,
  context: __SerdeContext
): UpdateMatchmakingConfigurationOutput => {
  return take(output, {
    Configuration: (_: any) => de_MatchmakingConfiguration(_, context),
  }) as any;
};

// de_UpdateRuntimeConfigurationOutput omitted.

/**
 * deserializeAws_json1_1UpdateScriptOutput
 */
const de_UpdateScriptOutput = (output: any, context: __SerdeContext): UpdateScriptOutput => {
  return take(output, {
    Script: (_: any) => de_Script(_, context),
  }) as any;
};

// de_ValidateMatchmakingRuleSetOutput omitted.

/**
 * deserializeAws_json1_1VpcPeeringAuthorization
 */
const de_VpcPeeringAuthorization = (output: any, context: __SerdeContext): VpcPeeringAuthorization => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExpirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GameLiftAwsAccountId: __expectString,
    PeerVpcAwsAccountId: __expectString,
    PeerVpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1VpcPeeringAuthorizationList
 */
const de_VpcPeeringAuthorizationList = (output: any, context: __SerdeContext): VpcPeeringAuthorization[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VpcPeeringAuthorization(entry, context);
    });
  return retVal;
};

// de_VpcPeeringConnection omitted.

// de_VpcPeeringConnectionList omitted.

// de_VpcPeeringConnectionStatus omitted.

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
    "x-amz-target": `GameLift.${operation}`,
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
