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
  limitedParseFloat32 as __limitedParseFloat32,
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
  AcceptMatchOutput,
  Alias,
  AnywhereConfiguration,
  AttributeValue,
  AwsCredentials,
  Build,
  CertificateConfiguration,
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
  CreateFleetLocationsOutput,
  CreateFleetOutput,
  CreateGameServerGroupInput,
  CreateGameServerGroupOutput,
  CreateGameSessionInput,
  CreateGameSessionOutput,
  CreateGameSessionQueueInput,
  CreateGameSessionQueueOutput,
  CreateLocationInput,
  CreateLocationOutput,
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
  CreateVpcPeeringConnectionOutput,
  DeleteAliasInput,
  DeleteBuildInput,
  DeleteFleetInput,
  DeleteFleetLocationsInput,
  DeleteFleetLocationsOutput,
  DeleteGameServerGroupInput,
  DeleteGameServerGroupOutput,
  DeleteGameSessionQueueInput,
  DeleteGameSessionQueueOutput,
  DeleteLocationInput,
  DeleteLocationOutput,
  DeleteMatchmakingConfigurationInput,
  DeleteMatchmakingConfigurationOutput,
  DeleteMatchmakingRuleSetInput,
  DeleteMatchmakingRuleSetOutput,
  DeleteScalingPolicyInput,
  DeleteScriptInput,
  DeleteVpcPeeringAuthorizationInput,
  DeleteVpcPeeringAuthorizationOutput,
  DeleteVpcPeeringConnectionInput,
  DeleteVpcPeeringConnectionOutput,
  DeregisterComputeInput,
  DeregisterComputeOutput,
  DeregisterGameServerInput,
  DescribeAliasInput,
  DescribeAliasOutput,
  DescribeBuildInput,
  DescribeBuildOutput,
  DescribeComputeInput,
  DescribeComputeOutput,
  DescribeEC2InstanceLimitsInput,
  DescribeEC2InstanceLimitsOutput,
  DescribeFleetAttributesInput,
  DescribeFleetAttributesOutput,
  DescribeFleetCapacityInput,
  DescribeFleetCapacityOutput,
  DescribeFleetEventsInput,
  DescribeFleetEventsOutput,
  DescribeFleetLocationAttributesInput,
  DescribeFleetLocationAttributesOutput,
  DescribeFleetLocationCapacityInput,
  DescribeFleetLocationCapacityOutput,
  DescribeFleetLocationUtilizationInput,
  DescribeFleetLocationUtilizationOutput,
  DescribeFleetPortSettingsInput,
  DescribeFleetPortSettingsOutput,
  DescribeFleetUtilizationInput,
  DescribeFleetUtilizationOutput,
  DescribeGameServerGroupInput,
  DescribeGameServerGroupOutput,
  DescribeGameServerInput,
  DescribeGameServerInstancesInput,
  DescribeGameServerInstancesOutput,
  DescribeGameServerOutput,
  DescribeGameSessionDetailsInput,
  DescribeGameSessionDetailsOutput,
  DescribeGameSessionPlacementInput,
  DescribeGameSessionPlacementOutput,
  DescribeGameSessionQueuesInput,
  DescribeGameSessionQueuesOutput,
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
  DescribeRuntimeConfigurationOutput,
  DescribeScalingPoliciesInput,
  DescribeScalingPoliciesOutput,
  DescribeScriptInput,
  DescribeScriptOutput,
  DescribeVpcPeeringAuthorizationsInput,
  DescribeVpcPeeringAuthorizationsOutput,
  DescribeVpcPeeringConnectionsInput,
  DescribeVpcPeeringConnectionsOutput,
  DesiredPlayerSession,
  EC2InstanceCounts,
  EC2InstanceLimit,
  Event,
  FilterConfiguration,
  FleetAction,
  FleetAttributes,
  FleetCapacity,
  FleetCapacityExceededException,
  FleetUtilization,
  GameProperty,
  GameServer,
  GameServerGroup,
  GameServerGroupAction,
  GameServerGroupAutoScalingPolicy,
  GameServerInstance,
  GameSession,
  GameSessionConnectionInfo,
  GameSessionDetail,
  GameSessionFullException,
  GameSessionPlacement,
  GameSessionQueue,
  GameSessionQueueDestination,
  GetComputeAccessInput,
  GetComputeAccessOutput,
  GetComputeAuthTokenInput,
  GetComputeAuthTokenOutput,
  GetGameSessionLogUrlInput,
  GetGameSessionLogUrlOutput,
  GetInstanceAccessInput,
  GetInstanceAccessOutput,
  IdempotentParameterMismatchException,
  Instance,
  InstanceAccess,
  InstanceCredentials,
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
  ListFleetsOutput,
  ListGameServerGroupsInput,
  ListGameServerGroupsOutput,
  ListGameServersInput,
  ListGameServersOutput,
  ListLocationsInput,
  ListLocationsOutput,
  ListScriptsInput,
  ListScriptsOutput,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  LocationAttributes,
  LocationConfiguration,
  LocationFilter,
  LocationModel,
  LocationState,
  MatchedPlayerSession,
  MatchmakingConfiguration,
  MatchmakingRuleSet,
  MatchmakingTicket,
  NotFoundException,
  OutOfCapacityException,
  PlacedPlayerSession,
  Player,
  PlayerLatency,
  PlayerLatencyPolicy,
  PlayerSession,
  PriorityConfiguration,
  PriorityType,
  PutScalingPolicyInput,
  PutScalingPolicyOutput,
  RegisterComputeInput,
  RegisterComputeOutput,
  RegisterGameServerInput,
  RegisterGameServerOutput,
  RequestUploadCredentialsInput,
  RequestUploadCredentialsOutput,
  ResolveAliasInput,
  ResolveAliasOutput,
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
  StartFleetActionsOutput,
  StartGameSessionPlacementInput,
  StartGameSessionPlacementOutput,
  StartMatchBackfillInput,
  StartMatchBackfillOutput,
  StartMatchmakingInput,
  StartMatchmakingOutput,
  StopFleetActionsInput,
  StopFleetActionsOutput,
  StopGameSessionPlacementInput,
  StopGameSessionPlacementOutput,
  StopMatchmakingInput,
  StopMatchmakingOutput,
  SuspendGameServerGroupInput,
  SuspendGameServerGroupOutput,
  Tag,
  TaggingFailedException,
  TagResourceRequest,
  TagResourceResponse,
  TargetConfiguration,
  TargetTrackingConfiguration,
  TerminalRoutingStrategyException,
  UnauthorizedException,
  UnsupportedRegionException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAliasInput,
  UpdateAliasOutput,
  UpdateBuildInput,
  UpdateBuildOutput,
  UpdateFleetAttributesInput,
  UpdateFleetAttributesOutput,
  UpdateFleetCapacityInput,
  UpdateFleetCapacityOutput,
  UpdateFleetPortSettingsInput,
  VpcPeeringAuthorization,
  VpcPeeringConnection,
  VpcPeeringConnectionStatus,
} from "../models/models_0";
import {
  UpdateFleetPortSettingsOutput,
  UpdateGameServerGroupInput,
  UpdateGameServerGroupOutput,
  UpdateGameServerInput,
  UpdateGameServerOutput,
  UpdateGameSessionInput,
  UpdateGameSessionOutput,
  UpdateGameSessionQueueInput,
  UpdateGameSessionQueueOutput,
  UpdateMatchmakingConfigurationInput,
  UpdateMatchmakingConfigurationOutput,
  UpdateRuntimeConfigurationInput,
  UpdateRuntimeConfigurationOutput,
  UpdateScriptInput,
  UpdateScriptOutput,
  ValidateMatchmakingRuleSetInput,
  ValidateMatchmakingRuleSetOutput,
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
  body = JSON.stringify(se_AcceptMatchInput(input, context));
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
  body = JSON.stringify(se_ClaimGameServerInput(input, context));
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
  body = JSON.stringify(se_CreateAliasInput(input, context));
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
  body = JSON.stringify(se_CreateBuildInput(input, context));
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
  body = JSON.stringify(se_CreateFleetInput(input, context));
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
  body = JSON.stringify(se_CreateFleetLocationsInput(input, context));
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
  body = JSON.stringify(se_CreateGameSessionInput(input, context));
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
  body = JSON.stringify(se_CreateGameSessionQueueInput(input, context));
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
  body = JSON.stringify(se_CreateLocationInput(input, context));
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
  body = JSON.stringify(se_CreateMatchmakingConfigurationInput(input, context));
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
  body = JSON.stringify(se_CreateMatchmakingRuleSetInput(input, context));
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
  body = JSON.stringify(se_CreatePlayerSessionInput(input, context));
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
  body = JSON.stringify(se_CreatePlayerSessionsInput(input, context));
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
  body = JSON.stringify(se_CreateVpcPeeringAuthorizationInput(input, context));
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
  body = JSON.stringify(se_CreateVpcPeeringConnectionInput(input, context));
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
  body = JSON.stringify(se_DeleteAliasInput(input, context));
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
  body = JSON.stringify(se_DeleteBuildInput(input, context));
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
  body = JSON.stringify(se_DeleteFleetInput(input, context));
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
  body = JSON.stringify(se_DeleteFleetLocationsInput(input, context));
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
  body = JSON.stringify(se_DeleteGameServerGroupInput(input, context));
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
  body = JSON.stringify(se_DeleteGameSessionQueueInput(input, context));
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
  body = JSON.stringify(se_DeleteLocationInput(input, context));
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
  body = JSON.stringify(se_DeleteMatchmakingConfigurationInput(input, context));
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
  body = JSON.stringify(se_DeleteMatchmakingRuleSetInput(input, context));
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
  body = JSON.stringify(se_DeleteScalingPolicyInput(input, context));
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
  body = JSON.stringify(se_DeleteScriptInput(input, context));
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
  body = JSON.stringify(se_DeleteVpcPeeringAuthorizationInput(input, context));
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
  body = JSON.stringify(se_DeleteVpcPeeringConnectionInput(input, context));
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
  body = JSON.stringify(se_DeregisterComputeInput(input, context));
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
  body = JSON.stringify(se_DeregisterGameServerInput(input, context));
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
  body = JSON.stringify(se_DescribeAliasInput(input, context));
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
  body = JSON.stringify(se_DescribeBuildInput(input, context));
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
  body = JSON.stringify(se_DescribeComputeInput(input, context));
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
  body = JSON.stringify(se_DescribeEC2InstanceLimitsInput(input, context));
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
  body = JSON.stringify(se_DescribeFleetAttributesInput(input, context));
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
  body = JSON.stringify(se_DescribeFleetCapacityInput(input, context));
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
  body = JSON.stringify(se_DescribeFleetLocationAttributesInput(input, context));
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
  body = JSON.stringify(se_DescribeFleetLocationCapacityInput(input, context));
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
  body = JSON.stringify(se_DescribeFleetLocationUtilizationInput(input, context));
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
  body = JSON.stringify(se_DescribeFleetPortSettingsInput(input, context));
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
  body = JSON.stringify(se_DescribeFleetUtilizationInput(input, context));
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
  body = JSON.stringify(se_DescribeGameServerInput(input, context));
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
  body = JSON.stringify(se_DescribeGameServerGroupInput(input, context));
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
  body = JSON.stringify(se_DescribeGameServerInstancesInput(input, context));
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
  body = JSON.stringify(se_DescribeGameSessionDetailsInput(input, context));
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
  body = JSON.stringify(se_DescribeGameSessionPlacementInput(input, context));
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
  body = JSON.stringify(se_DescribeGameSessionQueuesInput(input, context));
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
  body = JSON.stringify(se_DescribeGameSessionsInput(input, context));
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
  body = JSON.stringify(se_DescribeInstancesInput(input, context));
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
  body = JSON.stringify(se_DescribeMatchmakingInput(input, context));
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
  body = JSON.stringify(se_DescribeMatchmakingConfigurationsInput(input, context));
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
  body = JSON.stringify(se_DescribeMatchmakingRuleSetsInput(input, context));
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
  body = JSON.stringify(se_DescribePlayerSessionsInput(input, context));
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
  body = JSON.stringify(se_DescribeRuntimeConfigurationInput(input, context));
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
  body = JSON.stringify(se_DescribeScalingPoliciesInput(input, context));
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
  body = JSON.stringify(se_DescribeScriptInput(input, context));
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
  body = JSON.stringify(se_DescribeVpcPeeringAuthorizationsInput(input, context));
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
  body = JSON.stringify(se_DescribeVpcPeeringConnectionsInput(input, context));
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
  body = JSON.stringify(se_GetComputeAccessInput(input, context));
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
  body = JSON.stringify(se_GetComputeAuthTokenInput(input, context));
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
  body = JSON.stringify(se_GetGameSessionLogUrlInput(input, context));
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
  body = JSON.stringify(se_GetInstanceAccessInput(input, context));
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
  body = JSON.stringify(se_ListAliasesInput(input, context));
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
  body = JSON.stringify(se_ListBuildsInput(input, context));
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
  body = JSON.stringify(se_ListComputeInput(input, context));
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
  body = JSON.stringify(se_ListFleetsInput(input, context));
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
  body = JSON.stringify(se_ListGameServerGroupsInput(input, context));
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
  body = JSON.stringify(se_ListGameServersInput(input, context));
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
  body = JSON.stringify(se_ListLocationsInput(input, context));
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
  body = JSON.stringify(se_ListScriptsInput(input, context));
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
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
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
  body = JSON.stringify(se_RegisterComputeInput(input, context));
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
  body = JSON.stringify(se_RegisterGameServerInput(input, context));
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
  body = JSON.stringify(se_RequestUploadCredentialsInput(input, context));
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
  body = JSON.stringify(se_ResolveAliasInput(input, context));
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
  body = JSON.stringify(se_ResumeGameServerGroupInput(input, context));
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
  body = JSON.stringify(se_SearchGameSessionsInput(input, context));
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
  body = JSON.stringify(se_StartFleetActionsInput(input, context));
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
  body = JSON.stringify(se_StopFleetActionsInput(input, context));
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
  body = JSON.stringify(se_StopGameSessionPlacementInput(input, context));
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
  body = JSON.stringify(se_StopMatchmakingInput(input, context));
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
  body = JSON.stringify(se_SuspendGameServerGroupInput(input, context));
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
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
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
  body = JSON.stringify(se_UpdateAliasInput(input, context));
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
  body = JSON.stringify(se_UpdateBuildInput(input, context));
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
  body = JSON.stringify(se_UpdateFleetAttributesInput(input, context));
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
  body = JSON.stringify(se_UpdateFleetCapacityInput(input, context));
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
  body = JSON.stringify(se_UpdateFleetPortSettingsInput(input, context));
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
  body = JSON.stringify(se_UpdateGameServerInput(input, context));
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
  body = JSON.stringify(se_UpdateGameServerGroupInput(input, context));
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
  body = JSON.stringify(se_UpdateGameSessionInput(input, context));
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
  body = JSON.stringify(se_UpdateGameSessionQueueInput(input, context));
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
  body = JSON.stringify(se_UpdateMatchmakingConfigurationInput(input, context));
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
  body = JSON.stringify(se_UpdateRuntimeConfigurationInput(input, context));
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
  body = JSON.stringify(se_ValidateMatchmakingRuleSetInput(input, context));
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
  contents = de_AcceptMatchOutput(data, context);
  const response: AcceptMatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateFleetLocationsOutput(data, context);
  const response: CreateFleetLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateGameSessionQueueOutput(data, context);
  const response: CreateGameSessionQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateLocationOutput(data, context);
  const response: CreateLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateVpcPeeringConnectionOutput(data, context);
  const response: CreateVpcPeeringConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteFleetLocationsOutput(data, context);
  const response: DeleteFleetLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteGameSessionQueueOutput(data, context);
  const response: DeleteGameSessionQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteLocationOutput(data, context);
  const response: DeleteLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteMatchmakingConfigurationOutput(data, context);
  const response: DeleteMatchmakingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteMatchmakingRuleSetOutput(data, context);
  const response: DeleteMatchmakingRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteVpcPeeringAuthorizationOutput(data, context);
  const response: DeleteVpcPeeringAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteVpcPeeringConnectionOutput(data, context);
  const response: DeleteVpcPeeringConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeregisterComputeOutput(data, context);
  const response: DeregisterComputeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeEC2InstanceLimitsOutput(data, context);
  const response: DescribeEC2InstanceLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFleetCapacityOutput(data, context);
  const response: DescribeFleetCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFleetLocationAttributesOutput(data, context);
  const response: DescribeFleetLocationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFleetLocationCapacityOutput(data, context);
  const response: DescribeFleetLocationCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFleetLocationUtilizationOutput(data, context);
  const response: DescribeFleetLocationUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFleetPortSettingsOutput(data, context);
  const response: DescribeFleetPortSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFleetUtilizationOutput(data, context);
  const response: DescribeFleetUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeGameServerInstancesOutput(data, context);
  const response: DescribeGameServerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeGameSessionQueuesOutput(data, context);
  const response: DescribeGameSessionQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeRuntimeConfigurationOutput(data, context);
  const response: DescribeRuntimeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeVpcPeeringConnectionsOutput(data, context);
  const response: DescribeVpcPeeringConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetComputeAccessOutput(data, context);
  const response: GetComputeAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetGameSessionLogUrlOutput(data, context);
  const response: GetGameSessionLogUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetInstanceAccessOutput(data, context);
  const response: GetInstanceAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListFleetsOutput(data, context);
  const response: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListLocationsOutput(data, context);
  const response: ListLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PutScalingPolicyOutput(data, context);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_RequestUploadCredentialsOutput(data, context);
  const response: RequestUploadCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ResolveAliasOutput(data, context);
  const response: ResolveAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartFleetActionsOutput(data, context);
  const response: StartFleetActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopFleetActionsOutput(data, context);
  const response: StopFleetActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopMatchmakingOutput(data, context);
  const response: StopMatchmakingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateFleetAttributesOutput(data, context);
  const response: UpdateFleetAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateFleetCapacityOutput(data, context);
  const response: UpdateFleetCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateFleetPortSettingsOutput(data, context);
  const response: UpdateFleetPortSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateGameSessionQueueOutput(data, context);
  const response: UpdateGameSessionQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateRuntimeConfigurationOutput(data, context);
  const response: UpdateRuntimeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ValidateMatchmakingRuleSetOutput(data, context);
  const response: ValidateMatchmakingRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
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
  const deserialized: any = de_FleetCapacityExceededException(body, context);
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
  const deserialized: any = de_GameSessionFullException(body, context);
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
  const deserialized: any = de_IdempotentParameterMismatchException(body, context);
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
  const deserialized: any = de_InternalServiceException(body, context);
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
  const deserialized: any = de_InvalidFleetStatusException(body, context);
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
  const deserialized: any = de_InvalidGameSessionStatusException(body, context);
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
  const deserialized: any = de_InvalidRequestException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
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
  const deserialized: any = de_NotFoundException(body, context);
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
  const deserialized: any = de_OutOfCapacityException(body, context);
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
  const deserialized: any = de_TaggingFailedException(body, context);
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
  const deserialized: any = de_TerminalRoutingStrategyException(body, context);
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
  const deserialized: any = de_UnauthorizedException(body, context);
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
  const deserialized: any = de_UnsupportedRegionException(body, context);
  const exception = new UnsupportedRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AcceptMatchInput
 */
const se_AcceptMatchInput = (input: AcceptMatchInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptanceType != null && { AcceptanceType: input.AcceptanceType }),
    ...(input.PlayerIds != null && { PlayerIds: se_StringList(input.PlayerIds, context) }),
    ...(input.TicketId != null && { TicketId: input.TicketId }),
  };
};

/**
 * serializeAws_json1_1AnywhereConfiguration
 */
const se_AnywhereConfiguration = (input: AnywhereConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Cost != null && { Cost: input.Cost }),
  };
};

/**
 * serializeAws_json1_1AttributeValue
 */
const se_AttributeValue = (input: AttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.N != null && { N: __serializeFloat(input.N) }),
    ...(input.S != null && { S: input.S }),
    ...(input.SDM != null && { SDM: se_PlayerAttributeStringDoubleMap(input.SDM, context) }),
    ...(input.SL != null && { SL: se_PlayerAttributeStringList(input.SL, context) }),
  };
};

/**
 * serializeAws_json1_1CertificateConfiguration
 */
const se_CertificateConfiguration = (input: CertificateConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CertificateType != null && { CertificateType: input.CertificateType }),
  };
};

/**
 * serializeAws_json1_1ClaimGameServerInput
 */
const se_ClaimGameServerInput = (input: ClaimGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerData != null && { GameServerData: input.GameServerData }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId != null && { GameServerId: input.GameServerId }),
  };
};

/**
 * serializeAws_json1_1CreateAliasInput
 */
const se_CreateAliasInput = (input: CreateAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoutingStrategy != null && { RoutingStrategy: se_RoutingStrategy(input.RoutingStrategy, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateBuildInput
 */
const se_CreateBuildInput = (input: CreateBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
    ...(input.ServerSdkVersion != null && { ServerSdkVersion: input.ServerSdkVersion }),
    ...(input.StorageLocation != null && { StorageLocation: se_S3Location(input.StorageLocation, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1CreateFleetInput
 */
const se_CreateFleetInput = (input: CreateFleetInput, context: __SerdeContext): any => {
  return {
    ...(input.AnywhereConfiguration != null && {
      AnywhereConfiguration: se_AnywhereConfiguration(input.AnywhereConfiguration, context),
    }),
    ...(input.BuildId != null && { BuildId: input.BuildId }),
    ...(input.CertificateConfiguration != null && {
      CertificateConfiguration: se_CertificateConfiguration(input.CertificateConfiguration, context),
    }),
    ...(input.ComputeType != null && { ComputeType: input.ComputeType }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EC2InboundPermissions != null && {
      EC2InboundPermissions: se_IpPermissionsList(input.EC2InboundPermissions, context),
    }),
    ...(input.EC2InstanceType != null && { EC2InstanceType: input.EC2InstanceType }),
    ...(input.FleetType != null && { FleetType: input.FleetType }),
    ...(input.InstanceRoleArn != null && { InstanceRoleArn: input.InstanceRoleArn }),
    ...(input.Locations != null && { Locations: se_LocationConfigurationList(input.Locations, context) }),
    ...(input.LogPaths != null && { LogPaths: se_StringList(input.LogPaths, context) }),
    ...(input.MetricGroups != null && { MetricGroups: se_MetricGroupList(input.MetricGroups, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NewGameSessionProtectionPolicy != null && {
      NewGameSessionProtectionPolicy: input.NewGameSessionProtectionPolicy,
    }),
    ...(input.PeerVpcAwsAccountId != null && { PeerVpcAwsAccountId: input.PeerVpcAwsAccountId }),
    ...(input.PeerVpcId != null && { PeerVpcId: input.PeerVpcId }),
    ...(input.ResourceCreationLimitPolicy != null && {
      ResourceCreationLimitPolicy: se_ResourceCreationLimitPolicy(input.ResourceCreationLimitPolicy, context),
    }),
    ...(input.RuntimeConfiguration != null && {
      RuntimeConfiguration: se_RuntimeConfiguration(input.RuntimeConfiguration, context),
    }),
    ...(input.ScriptId != null && { ScriptId: input.ScriptId }),
    ...(input.ServerLaunchParameters != null && { ServerLaunchParameters: input.ServerLaunchParameters }),
    ...(input.ServerLaunchPath != null && { ServerLaunchPath: input.ServerLaunchPath }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateFleetLocationsInput
 */
const se_CreateFleetLocationsInput = (input: CreateFleetLocationsInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Locations != null && { Locations: se_LocationConfigurationList(input.Locations, context) }),
  };
};

/**
 * serializeAws_json1_1CreateGameServerGroupInput
 */
const se_CreateGameServerGroupInput = (input: CreateGameServerGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingPolicy != null && {
      AutoScalingPolicy: se_GameServerGroupAutoScalingPolicy(input.AutoScalingPolicy, context),
    }),
    ...(input.BalancingStrategy != null && { BalancingStrategy: input.BalancingStrategy }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerProtectionPolicy != null && { GameServerProtectionPolicy: input.GameServerProtectionPolicy }),
    ...(input.InstanceDefinitions != null && {
      InstanceDefinitions: se_InstanceDefinitions(input.InstanceDefinitions, context),
    }),
    ...(input.LaunchTemplate != null && {
      LaunchTemplate: se_LaunchTemplateSpecification(input.LaunchTemplate, context),
    }),
    ...(input.MaxSize != null && { MaxSize: input.MaxSize }),
    ...(input.MinSize != null && { MinSize: input.MinSize }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VpcSubnets != null && { VpcSubnets: se_VpcSubnets(input.VpcSubnets, context) }),
  };
};

/**
 * serializeAws_json1_1CreateGameSessionInput
 */
const se_CreateGameSessionInput = (input: CreateGameSessionInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.CreatorId != null && { CreatorId: input.CreatorId }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.GameProperties != null && { GameProperties: se_GamePropertyList(input.GameProperties, context) }),
    ...(input.GameSessionData != null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.MaximumPlayerSessionCount != null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateGameSessionQueueInput
 */
const se_CreateGameSessionQueueInput = (input: CreateGameSessionQueueInput, context: __SerdeContext): any => {
  return {
    ...(input.CustomEventData != null && { CustomEventData: input.CustomEventData }),
    ...(input.Destinations != null && {
      Destinations: se_GameSessionQueueDestinationList(input.Destinations, context),
    }),
    ...(input.FilterConfiguration != null && {
      FilterConfiguration: se_FilterConfiguration(input.FilterConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationTarget != null && { NotificationTarget: input.NotificationTarget }),
    ...(input.PlayerLatencyPolicies != null && {
      PlayerLatencyPolicies: se_PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context),
    }),
    ...(input.PriorityConfiguration != null && {
      PriorityConfiguration: se_PriorityConfiguration(input.PriorityConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TimeoutInSeconds != null && { TimeoutInSeconds: input.TimeoutInSeconds }),
  };
};

/**
 * serializeAws_json1_1CreateLocationInput
 */
const se_CreateLocationInput = (input: CreateLocationInput, context: __SerdeContext): any => {
  return {
    ...(input.LocationName != null && { LocationName: input.LocationName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateMatchmakingConfigurationInput
 */
const se_CreateMatchmakingConfigurationInput = (
  input: CreateMatchmakingConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptanceRequired != null && { AcceptanceRequired: input.AcceptanceRequired }),
    ...(input.AcceptanceTimeoutSeconds != null && { AcceptanceTimeoutSeconds: input.AcceptanceTimeoutSeconds }),
    ...(input.AdditionalPlayerCount != null && { AdditionalPlayerCount: input.AdditionalPlayerCount }),
    ...(input.BackfillMode != null && { BackfillMode: input.BackfillMode }),
    ...(input.CustomEventData != null && { CustomEventData: input.CustomEventData }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FlexMatchMode != null && { FlexMatchMode: input.FlexMatchMode }),
    ...(input.GameProperties != null && { GameProperties: se_GamePropertyList(input.GameProperties, context) }),
    ...(input.GameSessionData != null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionQueueArns != null && {
      GameSessionQueueArns: se_QueueArnsList(input.GameSessionQueueArns, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationTarget != null && { NotificationTarget: input.NotificationTarget }),
    ...(input.RequestTimeoutSeconds != null && { RequestTimeoutSeconds: input.RequestTimeoutSeconds }),
    ...(input.RuleSetName != null && { RuleSetName: input.RuleSetName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateMatchmakingRuleSetInput
 */
const se_CreateMatchmakingRuleSetInput = (input: CreateMatchmakingRuleSetInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RuleSetBody != null && { RuleSetBody: input.RuleSetBody }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreatePlayerSessionInput
 */
const se_CreatePlayerSessionInput = (input: CreatePlayerSessionInput, context: __SerdeContext): any => {
  return {
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.PlayerData != null && { PlayerData: input.PlayerData }),
    ...(input.PlayerId != null && { PlayerId: input.PlayerId }),
  };
};

/**
 * serializeAws_json1_1CreatePlayerSessionsInput
 */
const se_CreatePlayerSessionsInput = (input: CreatePlayerSessionsInput, context: __SerdeContext): any => {
  return {
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.PlayerDataMap != null && { PlayerDataMap: se_PlayerDataMap(input.PlayerDataMap, context) }),
    ...(input.PlayerIds != null && { PlayerIds: se_PlayerIdList(input.PlayerIds, context) }),
  };
};

/**
 * serializeAws_json1_1CreateScriptInput
 */
const se_CreateScriptInput = (input: CreateScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StorageLocation != null && { StorageLocation: se_S3Location(input.StorageLocation, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Version != null && { Version: input.Version }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

/**
 * serializeAws_json1_1CreateVpcPeeringAuthorizationInput
 */
const se_CreateVpcPeeringAuthorizationInput = (
  input: CreateVpcPeeringAuthorizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameLiftAwsAccountId != null && { GameLiftAwsAccountId: input.GameLiftAwsAccountId }),
    ...(input.PeerVpcId != null && { PeerVpcId: input.PeerVpcId }),
  };
};

/**
 * serializeAws_json1_1CreateVpcPeeringConnectionInput
 */
const se_CreateVpcPeeringConnectionInput = (input: CreateVpcPeeringConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.PeerVpcAwsAccountId != null && { PeerVpcAwsAccountId: input.PeerVpcAwsAccountId }),
    ...(input.PeerVpcId != null && { PeerVpcId: input.PeerVpcId }),
  };
};

/**
 * serializeAws_json1_1DeleteAliasInput
 */
const se_DeleteAliasInput = (input: DeleteAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
  };
};

/**
 * serializeAws_json1_1DeleteBuildInput
 */
const se_DeleteBuildInput = (input: DeleteBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId != null && { BuildId: input.BuildId }),
  };
};

/**
 * serializeAws_json1_1DeleteFleetInput
 */
const se_DeleteFleetInput = (input: DeleteFleetInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

/**
 * serializeAws_json1_1DeleteFleetLocationsInput
 */
const se_DeleteFleetLocationsInput = (input: DeleteFleetLocationsInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Locations != null && { Locations: se_LocationList(input.Locations, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteGameServerGroupInput
 */
const se_DeleteGameServerGroupInput = (input: DeleteGameServerGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.DeleteOption != null && { DeleteOption: input.DeleteOption }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
  };
};

/**
 * serializeAws_json1_1DeleteGameSessionQueueInput
 */
const se_DeleteGameSessionQueueInput = (input: DeleteGameSessionQueueInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteLocationInput
 */
const se_DeleteLocationInput = (input: DeleteLocationInput, context: __SerdeContext): any => {
  return {
    ...(input.LocationName != null && { LocationName: input.LocationName }),
  };
};

/**
 * serializeAws_json1_1DeleteMatchmakingConfigurationInput
 */
const se_DeleteMatchmakingConfigurationInput = (
  input: DeleteMatchmakingConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteMatchmakingRuleSetInput
 */
const se_DeleteMatchmakingRuleSetInput = (input: DeleteMatchmakingRuleSetInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteScalingPolicyInput
 */
const se_DeleteScalingPolicyInput = (input: DeleteScalingPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteScriptInput
 */
const se_DeleteScriptInput = (input: DeleteScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.ScriptId != null && { ScriptId: input.ScriptId }),
  };
};

/**
 * serializeAws_json1_1DeleteVpcPeeringAuthorizationInput
 */
const se_DeleteVpcPeeringAuthorizationInput = (
  input: DeleteVpcPeeringAuthorizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameLiftAwsAccountId != null && { GameLiftAwsAccountId: input.GameLiftAwsAccountId }),
    ...(input.PeerVpcId != null && { PeerVpcId: input.PeerVpcId }),
  };
};

/**
 * serializeAws_json1_1DeleteVpcPeeringConnectionInput
 */
const se_DeleteVpcPeeringConnectionInput = (input: DeleteVpcPeeringConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.VpcPeeringConnectionId != null && { VpcPeeringConnectionId: input.VpcPeeringConnectionId }),
  };
};

/**
 * serializeAws_json1_1DeregisterComputeInput
 */
const se_DeregisterComputeInput = (input: DeregisterComputeInput, context: __SerdeContext): any => {
  return {
    ...(input.ComputeName != null && { ComputeName: input.ComputeName }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

/**
 * serializeAws_json1_1DeregisterGameServerInput
 */
const se_DeregisterGameServerInput = (input: DeregisterGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId != null && { GameServerId: input.GameServerId }),
  };
};

/**
 * serializeAws_json1_1DescribeAliasInput
 */
const se_DescribeAliasInput = (input: DescribeAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
  };
};

/**
 * serializeAws_json1_1DescribeBuildInput
 */
const se_DescribeBuildInput = (input: DescribeBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId != null && { BuildId: input.BuildId }),
  };
};

/**
 * serializeAws_json1_1DescribeComputeInput
 */
const se_DescribeComputeInput = (input: DescribeComputeInput, context: __SerdeContext): any => {
  return {
    ...(input.ComputeName != null && { ComputeName: input.ComputeName }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

/**
 * serializeAws_json1_1DescribeEC2InstanceLimitsInput
 */
const se_DescribeEC2InstanceLimitsInput = (input: DescribeEC2InstanceLimitsInput, context: __SerdeContext): any => {
  return {
    ...(input.EC2InstanceType != null && { EC2InstanceType: input.EC2InstanceType }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetAttributesInput
 */
const se_DescribeFleetAttributesInput = (input: DescribeFleetAttributesInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetIds != null && { FleetIds: se_FleetIdOrArnList(input.FleetIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetCapacityInput
 */
const se_DescribeFleetCapacityInput = (input: DescribeFleetCapacityInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetIds != null && { FleetIds: se_FleetIdOrArnList(input.FleetIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetEventsInput
 */
const se_DescribeFleetEventsInput = (input: DescribeFleetEventsInput, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetLocationAttributesInput
 */
const se_DescribeFleetLocationAttributesInput = (
  input: DescribeFleetLocationAttributesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Locations != null && { Locations: se_LocationList(input.Locations, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetLocationCapacityInput
 */
const se_DescribeFleetLocationCapacityInput = (
  input: DescribeFleetLocationCapacityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetLocationUtilizationInput
 */
const se_DescribeFleetLocationUtilizationInput = (
  input: DescribeFleetLocationUtilizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetPortSettingsInput
 */
const se_DescribeFleetPortSettingsInput = (input: DescribeFleetPortSettingsInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetUtilizationInput
 */
const se_DescribeFleetUtilizationInput = (input: DescribeFleetUtilizationInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetIds != null && { FleetIds: se_FleetIdOrArnList(input.FleetIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeGameServerGroupInput
 */
const se_DescribeGameServerGroupInput = (input: DescribeGameServerGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
  };
};

/**
 * serializeAws_json1_1DescribeGameServerInput
 */
const se_DescribeGameServerInput = (input: DescribeGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId != null && { GameServerId: input.GameServerId }),
  };
};

/**
 * serializeAws_json1_1DescribeGameServerInstancesInput
 */
const se_DescribeGameServerInstancesInput = (input: DescribeGameServerInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.InstanceIds != null && { InstanceIds: se_GameServerInstanceIds(input.InstanceIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeGameSessionDetailsInput
 */
const se_DescribeGameSessionDetailsInput = (input: DescribeGameSessionDetailsInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StatusFilter != null && { StatusFilter: input.StatusFilter }),
  };
};

/**
 * serializeAws_json1_1DescribeGameSessionPlacementInput
 */
const se_DescribeGameSessionPlacementInput = (
  input: DescribeGameSessionPlacementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PlacementId != null && { PlacementId: input.PlacementId }),
  };
};

/**
 * serializeAws_json1_1DescribeGameSessionQueuesInput
 */
const se_DescribeGameSessionQueuesInput = (input: DescribeGameSessionQueuesInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Names != null && { Names: se_GameSessionQueueNameOrArnList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeGameSessionsInput
 */
const se_DescribeGameSessionsInput = (input: DescribeGameSessionsInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StatusFilter != null && { StatusFilter: input.StatusFilter }),
  };
};

/**
 * serializeAws_json1_1DescribeInstancesInput
 */
const se_DescribeInstancesInput = (input: DescribeInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeMatchmakingConfigurationsInput
 */
const se_DescribeMatchmakingConfigurationsInput = (
  input: DescribeMatchmakingConfigurationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Names != null && { Names: se_MatchmakingConfigurationNameList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RuleSetName != null && { RuleSetName: input.RuleSetName }),
  };
};

/**
 * serializeAws_json1_1DescribeMatchmakingInput
 */
const se_DescribeMatchmakingInput = (input: DescribeMatchmakingInput, context: __SerdeContext): any => {
  return {
    ...(input.TicketIds != null && { TicketIds: se_MatchmakingIdList(input.TicketIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeMatchmakingRuleSetsInput
 */
const se_DescribeMatchmakingRuleSetsInput = (input: DescribeMatchmakingRuleSetsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Names != null && { Names: se_MatchmakingRuleSetNameList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribePlayerSessionsInput
 */
const se_DescribePlayerSessionsInput = (input: DescribePlayerSessionsInput, context: __SerdeContext): any => {
  return {
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PlayerId != null && { PlayerId: input.PlayerId }),
    ...(input.PlayerSessionId != null && { PlayerSessionId: input.PlayerSessionId }),
    ...(input.PlayerSessionStatusFilter != null && { PlayerSessionStatusFilter: input.PlayerSessionStatusFilter }),
  };
};

/**
 * serializeAws_json1_1DescribeRuntimeConfigurationInput
 */
const se_DescribeRuntimeConfigurationInput = (
  input: DescribeRuntimeConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

/**
 * serializeAws_json1_1DescribeScalingPoliciesInput
 */
const se_DescribeScalingPoliciesInput = (input: DescribeScalingPoliciesInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StatusFilter != null && { StatusFilter: input.StatusFilter }),
  };
};

/**
 * serializeAws_json1_1DescribeScriptInput
 */
const se_DescribeScriptInput = (input: DescribeScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.ScriptId != null && { ScriptId: input.ScriptId }),
  };
};

/**
 * serializeAws_json1_1DescribeVpcPeeringAuthorizationsInput
 */
const se_DescribeVpcPeeringAuthorizationsInput = (
  input: DescribeVpcPeeringAuthorizationsInput,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1DescribeVpcPeeringConnectionsInput
 */
const se_DescribeVpcPeeringConnectionsInput = (
  input: DescribeVpcPeeringConnectionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

/**
 * serializeAws_json1_1DesiredPlayerSession
 */
const se_DesiredPlayerSession = (input: DesiredPlayerSession, context: __SerdeContext): any => {
  return {
    ...(input.PlayerData != null && { PlayerData: input.PlayerData }),
    ...(input.PlayerId != null && { PlayerId: input.PlayerId }),
  };
};

/**
 * serializeAws_json1_1DesiredPlayerSessionList
 */
const se_DesiredPlayerSessionList = (input: DesiredPlayerSession[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DesiredPlayerSession(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterConfiguration
 */
const se_FilterConfiguration = (input: FilterConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowedLocations != null && { AllowedLocations: se_LocationList(input.AllowedLocations, context) }),
  };
};

/**
 * serializeAws_json1_1FleetActionList
 */
const se_FleetActionList = (input: (FleetAction | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FleetIdOrArnList
 */
const se_FleetIdOrArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GameProperty
 */
const se_GameProperty = (input: GameProperty, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1GamePropertyList
 */
const se_GamePropertyList = (input: GameProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GameProperty(entry, context);
    });
};

/**
 * serializeAws_json1_1GameServerGroupActions
 */
const se_GameServerGroupActions = (input: (GameServerGroupAction | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GameServerGroupAutoScalingPolicy
 */
const se_GameServerGroupAutoScalingPolicy = (input: GameServerGroupAutoScalingPolicy, context: __SerdeContext): any => {
  return {
    ...(input.EstimatedInstanceWarmup != null && { EstimatedInstanceWarmup: input.EstimatedInstanceWarmup }),
    ...(input.TargetTrackingConfiguration != null && {
      TargetTrackingConfiguration: se_TargetTrackingConfiguration(input.TargetTrackingConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1GameServerInstanceIds
 */
const se_GameServerInstanceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GameSessionQueueDestination
 */
const se_GameSessionQueueDestination = (input: GameSessionQueueDestination, context: __SerdeContext): any => {
  return {
    ...(input.DestinationArn != null && { DestinationArn: input.DestinationArn }),
  };
};

/**
 * serializeAws_json1_1GameSessionQueueDestinationList
 */
const se_GameSessionQueueDestinationList = (input: GameSessionQueueDestination[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GameSessionQueueDestination(entry, context);
    });
};

/**
 * serializeAws_json1_1GameSessionQueueNameOrArnList
 */
const se_GameSessionQueueNameOrArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetComputeAccessInput
 */
const se_GetComputeAccessInput = (input: GetComputeAccessInput, context: __SerdeContext): any => {
  return {
    ...(input.ComputeName != null && { ComputeName: input.ComputeName }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

/**
 * serializeAws_json1_1GetComputeAuthTokenInput
 */
const se_GetComputeAuthTokenInput = (input: GetComputeAuthTokenInput, context: __SerdeContext): any => {
  return {
    ...(input.ComputeName != null && { ComputeName: input.ComputeName }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

/**
 * serializeAws_json1_1GetGameSessionLogUrlInput
 */
const se_GetGameSessionLogUrlInput = (input: GetGameSessionLogUrlInput, context: __SerdeContext): any => {
  return {
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
  };
};

/**
 * serializeAws_json1_1GetInstanceAccessInput
 */
const se_GetInstanceAccessInput = (input: GetInstanceAccessInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1InstanceDefinition
 */
const se_InstanceDefinition = (input: InstanceDefinition, context: __SerdeContext): any => {
  return {
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.WeightedCapacity != null && { WeightedCapacity: input.WeightedCapacity }),
  };
};

/**
 * serializeAws_json1_1InstanceDefinitions
 */
const se_InstanceDefinitions = (input: InstanceDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InstanceDefinition(entry, context);
    });
};

/**
 * serializeAws_json1_1IpPermission
 */
const se_IpPermission = (input: IpPermission, context: __SerdeContext): any => {
  return {
    ...(input.FromPort != null && { FromPort: input.FromPort }),
    ...(input.IpRange != null && { IpRange: input.IpRange }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.ToPort != null && { ToPort: input.ToPort }),
  };
};

/**
 * serializeAws_json1_1IpPermissionsList
 */
const se_IpPermissionsList = (input: IpPermission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IpPermission(entry, context);
    });
};

/**
 * serializeAws_json1_1LatencyMap
 */
const se_LatencyMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1LaunchTemplateSpecification
 */
const se_LaunchTemplateSpecification = (input: LaunchTemplateSpecification, context: __SerdeContext): any => {
  return {
    ...(input.LaunchTemplateId != null && { LaunchTemplateId: input.LaunchTemplateId }),
    ...(input.LaunchTemplateName != null && { LaunchTemplateName: input.LaunchTemplateName }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1ListAliasesInput
 */
const se_ListAliasesInput = (input: ListAliasesInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RoutingStrategyType != null && { RoutingStrategyType: input.RoutingStrategyType }),
  };
};

/**
 * serializeAws_json1_1ListBuildsInput
 */
const se_ListBuildsInput = (input: ListBuildsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1ListComputeInput
 */
const se_ListComputeInput = (input: ListComputeInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFleetsInput
 */
const se_ListFleetsInput = (input: ListFleetsInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId != null && { BuildId: input.BuildId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ScriptId != null && { ScriptId: input.ScriptId }),
  };
};

/**
 * serializeAws_json1_1ListGameServerGroupsInput
 */
const se_ListGameServerGroupsInput = (input: ListGameServerGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListGameServersInput
 */
const se_ListGameServersInput = (input: ListGameServersInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1ListLocationsInput
 */
const se_ListLocationsInput = (input: ListLocationsInput, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_LocationFilterList(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListScriptsInput
 */
const se_ListScriptsInput = (input: ListScriptsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1LocationConfiguration
 */
const se_LocationConfiguration = (input: LocationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Location != null && { Location: input.Location }),
  };
};

/**
 * serializeAws_json1_1LocationConfigurationList
 */
const se_LocationConfigurationList = (input: LocationConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LocationConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1LocationFilterList
 */
const se_LocationFilterList = (input: (LocationFilter | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1LocationList
 */
const se_LocationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MatchmakingConfigurationNameList
 */
const se_MatchmakingConfigurationNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MatchmakingIdList
 */
const se_MatchmakingIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MatchmakingRuleSetNameList
 */
const se_MatchmakingRuleSetNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MetricGroupList
 */
const se_MetricGroupList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Player
 */
const se_Player = (input: Player, context: __SerdeContext): any => {
  return {
    ...(input.LatencyInMs != null && { LatencyInMs: se_LatencyMap(input.LatencyInMs, context) }),
    ...(input.PlayerAttributes != null && { PlayerAttributes: se_PlayerAttributeMap(input.PlayerAttributes, context) }),
    ...(input.PlayerId != null && { PlayerId: input.PlayerId }),
    ...(input.Team != null && { Team: input.Team }),
  };
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

/**
 * serializeAws_json1_1PlayerAttributeStringList
 */
const se_PlayerAttributeStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PlayerDataMap
 */
const se_PlayerDataMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1PlayerIdList
 */
const se_PlayerIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PlayerLatency
 */
const se_PlayerLatency = (input: PlayerLatency, context: __SerdeContext): any => {
  return {
    ...(input.LatencyInMilliseconds != null && {
      LatencyInMilliseconds: __serializeFloat(input.LatencyInMilliseconds),
    }),
    ...(input.PlayerId != null && { PlayerId: input.PlayerId }),
    ...(input.RegionIdentifier != null && { RegionIdentifier: input.RegionIdentifier }),
  };
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

/**
 * serializeAws_json1_1PlayerLatencyPolicy
 */
const se_PlayerLatencyPolicy = (input: PlayerLatencyPolicy, context: __SerdeContext): any => {
  return {
    ...(input.MaximumIndividualPlayerLatencyMilliseconds != null && {
      MaximumIndividualPlayerLatencyMilliseconds: input.MaximumIndividualPlayerLatencyMilliseconds,
    }),
    ...(input.PolicyDurationSeconds != null && { PolicyDurationSeconds: input.PolicyDurationSeconds }),
  };
};

/**
 * serializeAws_json1_1PlayerLatencyPolicyList
 */
const se_PlayerLatencyPolicyList = (input: PlayerLatencyPolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlayerLatencyPolicy(entry, context);
    });
};

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

/**
 * serializeAws_json1_1PriorityConfiguration
 */
const se_PriorityConfiguration = (input: PriorityConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LocationOrder != null && { LocationOrder: se_LocationList(input.LocationOrder, context) }),
    ...(input.PriorityOrder != null && { PriorityOrder: se_PriorityTypeList(input.PriorityOrder, context) }),
  };
};

/**
 * serializeAws_json1_1PriorityTypeList
 */
const se_PriorityTypeList = (input: (PriorityType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PutScalingPolicyInput
 */
const se_PutScalingPolicyInput = (input: PutScalingPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.EvaluationPeriods != null && { EvaluationPeriods: input.EvaluationPeriods }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.ScalingAdjustment != null && { ScalingAdjustment: input.ScalingAdjustment }),
    ...(input.ScalingAdjustmentType != null && { ScalingAdjustmentType: input.ScalingAdjustmentType }),
    ...(input.TargetConfiguration != null && {
      TargetConfiguration: se_TargetConfiguration(input.TargetConfiguration, context),
    }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
  };
};

/**
 * serializeAws_json1_1QueueArnsList
 */
const se_QueueArnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RegisterComputeInput
 */
const se_RegisterComputeInput = (input: RegisterComputeInput, context: __SerdeContext): any => {
  return {
    ...(input.CertificatePath != null && { CertificatePath: input.CertificatePath }),
    ...(input.ComputeName != null && { ComputeName: input.ComputeName }),
    ...(input.DnsName != null && { DnsName: input.DnsName }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

/**
 * serializeAws_json1_1RegisterGameServerInput
 */
const se_RegisterGameServerInput = (input: RegisterGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionInfo != null && { ConnectionInfo: input.ConnectionInfo }),
    ...(input.GameServerData != null && { GameServerData: input.GameServerData }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId != null && { GameServerId: input.GameServerId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

/**
 * serializeAws_json1_1RequestUploadCredentialsInput
 */
const se_RequestUploadCredentialsInput = (input: RequestUploadCredentialsInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId != null && { BuildId: input.BuildId }),
  };
};

/**
 * serializeAws_json1_1ResolveAliasInput
 */
const se_ResolveAliasInput = (input: ResolveAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
  };
};

/**
 * serializeAws_json1_1ResourceCreationLimitPolicy
 */
const se_ResourceCreationLimitPolicy = (input: ResourceCreationLimitPolicy, context: __SerdeContext): any => {
  return {
    ...(input.NewGameSessionsPerCreator != null && { NewGameSessionsPerCreator: input.NewGameSessionsPerCreator }),
    ...(input.PolicyPeriodInMinutes != null && { PolicyPeriodInMinutes: input.PolicyPeriodInMinutes }),
  };
};

/**
 * serializeAws_json1_1ResumeGameServerGroupInput
 */
const se_ResumeGameServerGroupInput = (input: ResumeGameServerGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.ResumeActions != null && { ResumeActions: se_GameServerGroupActions(input.ResumeActions, context) }),
  };
};

/**
 * serializeAws_json1_1RoutingStrategy
 */
const se_RoutingStrategy = (input: RoutingStrategy, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Message != null && { Message: input.Message }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1RuntimeConfiguration
 */
const se_RuntimeConfiguration = (input: RuntimeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.GameSessionActivationTimeoutSeconds != null && {
      GameSessionActivationTimeoutSeconds: input.GameSessionActivationTimeoutSeconds,
    }),
    ...(input.MaxConcurrentGameSessionActivations != null && {
      MaxConcurrentGameSessionActivations: input.MaxConcurrentGameSessionActivations,
    }),
    ...(input.ServerProcesses != null && { ServerProcesses: se_ServerProcessList(input.ServerProcesses, context) }),
  };
};

/**
 * serializeAws_json1_1S3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.ObjectVersion != null && { ObjectVersion: input.ObjectVersion }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1SearchGameSessionsInput
 */
const se_SearchGameSessionsInput = (input: SearchGameSessionsInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.FilterExpression != null && { FilterExpression: input.FilterExpression }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortExpression != null && { SortExpression: input.SortExpression }),
  };
};

/**
 * serializeAws_json1_1ServerProcess
 */
const se_ServerProcess = (input: ServerProcess, context: __SerdeContext): any => {
  return {
    ...(input.ConcurrentExecutions != null && { ConcurrentExecutions: input.ConcurrentExecutions }),
    ...(input.LaunchPath != null && { LaunchPath: input.LaunchPath }),
    ...(input.Parameters != null && { Parameters: input.Parameters }),
  };
};

/**
 * serializeAws_json1_1ServerProcessList
 */
const se_ServerProcessList = (input: ServerProcess[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerProcess(entry, context);
    });
};

/**
 * serializeAws_json1_1StartFleetActionsInput
 */
const se_StartFleetActionsInput = (input: StartFleetActionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: se_FleetActionList(input.Actions, context) }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

/**
 * serializeAws_json1_1StartGameSessionPlacementInput
 */
const se_StartGameSessionPlacementInput = (input: StartGameSessionPlacementInput, context: __SerdeContext): any => {
  return {
    ...(input.DesiredPlayerSessions != null && {
      DesiredPlayerSessions: se_DesiredPlayerSessionList(input.DesiredPlayerSessions, context),
    }),
    ...(input.GameProperties != null && { GameProperties: se_GamePropertyList(input.GameProperties, context) }),
    ...(input.GameSessionData != null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionName != null && { GameSessionName: input.GameSessionName }),
    ...(input.GameSessionQueueName != null && { GameSessionQueueName: input.GameSessionQueueName }),
    ...(input.MaximumPlayerSessionCount != null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
    ...(input.PlacementId != null && { PlacementId: input.PlacementId }),
    ...(input.PlayerLatencies != null && { PlayerLatencies: se_PlayerLatencyList(input.PlayerLatencies, context) }),
  };
};

/**
 * serializeAws_json1_1StartMatchBackfillInput
 */
const se_StartMatchBackfillInput = (input: StartMatchBackfillInput, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationName != null && { ConfigurationName: input.ConfigurationName }),
    ...(input.GameSessionArn != null && { GameSessionArn: input.GameSessionArn }),
    ...(input.Players != null && { Players: se_PlayerList(input.Players, context) }),
    ...(input.TicketId != null && { TicketId: input.TicketId }),
  };
};

/**
 * serializeAws_json1_1StartMatchmakingInput
 */
const se_StartMatchmakingInput = (input: StartMatchmakingInput, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationName != null && { ConfigurationName: input.ConfigurationName }),
    ...(input.Players != null && { Players: se_PlayerList(input.Players, context) }),
    ...(input.TicketId != null && { TicketId: input.TicketId }),
  };
};

/**
 * serializeAws_json1_1StopFleetActionsInput
 */
const se_StopFleetActionsInput = (input: StopFleetActionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: se_FleetActionList(input.Actions, context) }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

/**
 * serializeAws_json1_1StopGameSessionPlacementInput
 */
const se_StopGameSessionPlacementInput = (input: StopGameSessionPlacementInput, context: __SerdeContext): any => {
  return {
    ...(input.PlacementId != null && { PlacementId: input.PlacementId }),
  };
};

/**
 * serializeAws_json1_1StopMatchmakingInput
 */
const se_StopMatchmakingInput = (input: StopMatchmakingInput, context: __SerdeContext): any => {
  return {
    ...(input.TicketId != null && { TicketId: input.TicketId }),
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
 * serializeAws_json1_1SuspendGameServerGroupInput
 */
const se_SuspendGameServerGroupInput = (input: SuspendGameServerGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.SuspendActions != null && { SuspendActions: se_GameServerGroupActions(input.SuspendActions, context) }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TargetConfiguration
 */
const se_TargetConfiguration = (input: TargetConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.TargetValue != null && { TargetValue: __serializeFloat(input.TargetValue) }),
  };
};

/**
 * serializeAws_json1_1TargetTrackingConfiguration
 */
const se_TargetTrackingConfiguration = (input: TargetTrackingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.TargetValue != null && { TargetValue: __serializeFloat(input.TargetValue) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAliasInput
 */
const se_UpdateAliasInput = (input: UpdateAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoutingStrategy != null && { RoutingStrategy: se_RoutingStrategy(input.RoutingStrategy, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateBuildInput
 */
const se_UpdateBuildInput = (input: UpdateBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId != null && { BuildId: input.BuildId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1UpdateFleetAttributesInput
 */
const se_UpdateFleetAttributesInput = (input: UpdateFleetAttributesInput, context: __SerdeContext): any => {
  return {
    ...(input.AnywhereConfiguration != null && {
      AnywhereConfiguration: se_AnywhereConfiguration(input.AnywhereConfiguration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.MetricGroups != null && { MetricGroups: se_MetricGroupList(input.MetricGroups, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NewGameSessionProtectionPolicy != null && {
      NewGameSessionProtectionPolicy: input.NewGameSessionProtectionPolicy,
    }),
    ...(input.ResourceCreationLimitPolicy != null && {
      ResourceCreationLimitPolicy: se_ResourceCreationLimitPolicy(input.ResourceCreationLimitPolicy, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateFleetCapacityInput
 */
const se_UpdateFleetCapacityInput = (input: UpdateFleetCapacityInput, context: __SerdeContext): any => {
  return {
    ...(input.DesiredInstances != null && { DesiredInstances: input.DesiredInstances }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.MaxSize != null && { MaxSize: input.MaxSize }),
    ...(input.MinSize != null && { MinSize: input.MinSize }),
  };
};

/**
 * serializeAws_json1_1UpdateFleetPortSettingsInput
 */
const se_UpdateFleetPortSettingsInput = (input: UpdateFleetPortSettingsInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.InboundPermissionAuthorizations != null && {
      InboundPermissionAuthorizations: se_IpPermissionsList(input.InboundPermissionAuthorizations, context),
    }),
    ...(input.InboundPermissionRevocations != null && {
      InboundPermissionRevocations: se_IpPermissionsList(input.InboundPermissionRevocations, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateGameServerGroupInput
 */
const se_UpdateGameServerGroupInput = (input: UpdateGameServerGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.BalancingStrategy != null && { BalancingStrategy: input.BalancingStrategy }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerProtectionPolicy != null && { GameServerProtectionPolicy: input.GameServerProtectionPolicy }),
    ...(input.InstanceDefinitions != null && {
      InstanceDefinitions: se_InstanceDefinitions(input.InstanceDefinitions, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1UpdateGameServerInput
 */
const se_UpdateGameServerInput = (input: UpdateGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerData != null && { GameServerData: input.GameServerData }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId != null && { GameServerId: input.GameServerId }),
    ...(input.HealthCheck != null && { HealthCheck: input.HealthCheck }),
    ...(input.UtilizationStatus != null && { UtilizationStatus: input.UtilizationStatus }),
  };
};

/**
 * serializeAws_json1_1UpdateGameSessionInput
 */
const se_UpdateGameSessionInput = (input: UpdateGameSessionInput, context: __SerdeContext): any => {
  return {
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.MaximumPlayerSessionCount != null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PlayerSessionCreationPolicy != null && {
      PlayerSessionCreationPolicy: input.PlayerSessionCreationPolicy,
    }),
    ...(input.ProtectionPolicy != null && { ProtectionPolicy: input.ProtectionPolicy }),
  };
};

/**
 * serializeAws_json1_1UpdateGameSessionQueueInput
 */
const se_UpdateGameSessionQueueInput = (input: UpdateGameSessionQueueInput, context: __SerdeContext): any => {
  return {
    ...(input.CustomEventData != null && { CustomEventData: input.CustomEventData }),
    ...(input.Destinations != null && {
      Destinations: se_GameSessionQueueDestinationList(input.Destinations, context),
    }),
    ...(input.FilterConfiguration != null && {
      FilterConfiguration: se_FilterConfiguration(input.FilterConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationTarget != null && { NotificationTarget: input.NotificationTarget }),
    ...(input.PlayerLatencyPolicies != null && {
      PlayerLatencyPolicies: se_PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context),
    }),
    ...(input.PriorityConfiguration != null && {
      PriorityConfiguration: se_PriorityConfiguration(input.PriorityConfiguration, context),
    }),
    ...(input.TimeoutInSeconds != null && { TimeoutInSeconds: input.TimeoutInSeconds }),
  };
};

/**
 * serializeAws_json1_1UpdateMatchmakingConfigurationInput
 */
const se_UpdateMatchmakingConfigurationInput = (
  input: UpdateMatchmakingConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptanceRequired != null && { AcceptanceRequired: input.AcceptanceRequired }),
    ...(input.AcceptanceTimeoutSeconds != null && { AcceptanceTimeoutSeconds: input.AcceptanceTimeoutSeconds }),
    ...(input.AdditionalPlayerCount != null && { AdditionalPlayerCount: input.AdditionalPlayerCount }),
    ...(input.BackfillMode != null && { BackfillMode: input.BackfillMode }),
    ...(input.CustomEventData != null && { CustomEventData: input.CustomEventData }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FlexMatchMode != null && { FlexMatchMode: input.FlexMatchMode }),
    ...(input.GameProperties != null && { GameProperties: se_GamePropertyList(input.GameProperties, context) }),
    ...(input.GameSessionData != null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionQueueArns != null && {
      GameSessionQueueArns: se_QueueArnsList(input.GameSessionQueueArns, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationTarget != null && { NotificationTarget: input.NotificationTarget }),
    ...(input.RequestTimeoutSeconds != null && { RequestTimeoutSeconds: input.RequestTimeoutSeconds }),
    ...(input.RuleSetName != null && { RuleSetName: input.RuleSetName }),
  };
};

/**
 * serializeAws_json1_1UpdateRuntimeConfigurationInput
 */
const se_UpdateRuntimeConfigurationInput = (input: UpdateRuntimeConfigurationInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.RuntimeConfiguration != null && {
      RuntimeConfiguration: se_RuntimeConfiguration(input.RuntimeConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateScriptInput
 */
const se_UpdateScriptInput = (input: UpdateScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ScriptId != null && { ScriptId: input.ScriptId }),
    ...(input.StorageLocation != null && { StorageLocation: se_S3Location(input.StorageLocation, context) }),
    ...(input.Version != null && { Version: input.Version }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

/**
 * serializeAws_json1_1ValidateMatchmakingRuleSetInput
 */
const se_ValidateMatchmakingRuleSetInput = (input: ValidateMatchmakingRuleSetInput, context: __SerdeContext): any => {
  return {
    ...(input.RuleSetBody != null && { RuleSetBody: input.RuleSetBody }),
  };
};

/**
 * serializeAws_json1_1VpcSubnets
 */
const se_VpcSubnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AcceptMatchOutput
 */
const de_AcceptMatchOutput = (output: any, context: __SerdeContext): AcceptMatchOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Alias
 */
const de_Alias = (output: any, context: __SerdeContext): Alias => {
  return {
    AliasArn: __expectString(output.AliasArn),
    AliasId: __expectString(output.AliasId),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    RoutingStrategy: output.RoutingStrategy != null ? de_RoutingStrategy(output.RoutingStrategy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AliasList
 */
const de_AliasList = (output: any, context: __SerdeContext): Alias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Alias(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AnywhereConfiguration
 */
const de_AnywhereConfiguration = (output: any, context: __SerdeContext): AnywhereConfiguration => {
  return {
    Cost: __expectString(output.Cost),
  } as any;
};

/**
 * deserializeAws_json1_1AttributeValue
 */
const de_AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  return {
    N: __limitedParseDouble(output.N),
    S: __expectString(output.S),
    SDM: output.SDM != null ? de_PlayerAttributeStringDoubleMap(output.SDM, context) : undefined,
    SL: output.SL != null ? de_PlayerAttributeStringList(output.SL, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AwsCredentials
 */
const de_AwsCredentials = (output: any, context: __SerdeContext): AwsCredentials => {
  return {
    AccessKeyId: __expectString(output.AccessKeyId),
    SecretAccessKey: __expectString(output.SecretAccessKey),
    SessionToken: __expectString(output.SessionToken),
  } as any;
};

/**
 * deserializeAws_json1_1Build
 */
const de_Build = (output: any, context: __SerdeContext): Build => {
  return {
    BuildArn: __expectString(output.BuildArn),
    BuildId: __expectString(output.BuildId),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Name: __expectString(output.Name),
    OperatingSystem: __expectString(output.OperatingSystem),
    ServerSdkVersion: __expectString(output.ServerSdkVersion),
    SizeOnDisk: __expectLong(output.SizeOnDisk),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1BuildList
 */
const de_BuildList = (output: any, context: __SerdeContext): Build[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Build(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CertificateConfiguration
 */
const de_CertificateConfiguration = (output: any, context: __SerdeContext): CertificateConfiguration => {
  return {
    CertificateType: __expectString(output.CertificateType),
  } as any;
};

/**
 * deserializeAws_json1_1ClaimGameServerOutput
 */
const de_ClaimGameServerOutput = (output: any, context: __SerdeContext): ClaimGameServerOutput => {
  return {
    GameServer: output.GameServer != null ? de_GameServer(output.GameServer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Compute
 */
const de_Compute = (output: any, context: __SerdeContext): Compute => {
  return {
    ComputeArn: __expectString(output.ComputeArn),
    ComputeName: __expectString(output.ComputeName),
    ComputeStatus: __expectString(output.ComputeStatus),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DnsName: __expectString(output.DnsName),
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    GameLiftServiceSdkEndpoint: __expectString(output.GameLiftServiceSdkEndpoint),
    IpAddress: __expectString(output.IpAddress),
    Location: __expectString(output.Location),
    OperatingSystem: __expectString(output.OperatingSystem),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ComputeList
 */
const de_ComputeList = (output: any, context: __SerdeContext): Compute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Compute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAliasOutput
 */
const de_CreateAliasOutput = (output: any, context: __SerdeContext): CreateAliasOutput => {
  return {
    Alias: output.Alias != null ? de_Alias(output.Alias, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateBuildOutput
 */
const de_CreateBuildOutput = (output: any, context: __SerdeContext): CreateBuildOutput => {
  return {
    Build: output.Build != null ? de_Build(output.Build, context) : undefined,
    StorageLocation: output.StorageLocation != null ? de_S3Location(output.StorageLocation, context) : undefined,
    UploadCredentials:
      output.UploadCredentials != null ? de_AwsCredentials(output.UploadCredentials, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateFleetLocationsOutput
 */
const de_CreateFleetLocationsOutput = (output: any, context: __SerdeContext): CreateFleetLocationsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    LocationStates: output.LocationStates != null ? de_LocationStateList(output.LocationStates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateFleetOutput
 */
const de_CreateFleetOutput = (output: any, context: __SerdeContext): CreateFleetOutput => {
  return {
    FleetAttributes: output.FleetAttributes != null ? de_FleetAttributes(output.FleetAttributes, context) : undefined,
    LocationStates: output.LocationStates != null ? de_LocationStateList(output.LocationStates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateGameServerGroupOutput
 */
const de_CreateGameServerGroupOutput = (output: any, context: __SerdeContext): CreateGameServerGroupOutput => {
  return {
    GameServerGroup: output.GameServerGroup != null ? de_GameServerGroup(output.GameServerGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateGameSessionOutput
 */
const de_CreateGameSessionOutput = (output: any, context: __SerdeContext): CreateGameSessionOutput => {
  return {
    GameSession: output.GameSession != null ? de_GameSession(output.GameSession, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateGameSessionQueueOutput
 */
const de_CreateGameSessionQueueOutput = (output: any, context: __SerdeContext): CreateGameSessionQueueOutput => {
  return {
    GameSessionQueue:
      output.GameSessionQueue != null ? de_GameSessionQueue(output.GameSessionQueue, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateLocationOutput
 */
const de_CreateLocationOutput = (output: any, context: __SerdeContext): CreateLocationOutput => {
  return {
    Location: output.Location != null ? de_LocationModel(output.Location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateMatchmakingConfigurationOutput
 */
const de_CreateMatchmakingConfigurationOutput = (
  output: any,
  context: __SerdeContext
): CreateMatchmakingConfigurationOutput => {
  return {
    Configuration:
      output.Configuration != null ? de_MatchmakingConfiguration(output.Configuration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateMatchmakingRuleSetOutput
 */
const de_CreateMatchmakingRuleSetOutput = (output: any, context: __SerdeContext): CreateMatchmakingRuleSetOutput => {
  return {
    RuleSet: output.RuleSet != null ? de_MatchmakingRuleSet(output.RuleSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreatePlayerSessionOutput
 */
const de_CreatePlayerSessionOutput = (output: any, context: __SerdeContext): CreatePlayerSessionOutput => {
  return {
    PlayerSession: output.PlayerSession != null ? de_PlayerSession(output.PlayerSession, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreatePlayerSessionsOutput
 */
const de_CreatePlayerSessionsOutput = (output: any, context: __SerdeContext): CreatePlayerSessionsOutput => {
  return {
    PlayerSessions: output.PlayerSessions != null ? de_PlayerSessionList(output.PlayerSessions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateScriptOutput
 */
const de_CreateScriptOutput = (output: any, context: __SerdeContext): CreateScriptOutput => {
  return {
    Script: output.Script != null ? de_Script(output.Script, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput
 */
const de_CreateVpcPeeringAuthorizationOutput = (
  output: any,
  context: __SerdeContext
): CreateVpcPeeringAuthorizationOutput => {
  return {
    VpcPeeringAuthorization:
      output.VpcPeeringAuthorization != null
        ? de_VpcPeeringAuthorization(output.VpcPeeringAuthorization, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateVpcPeeringConnectionOutput
 */
const de_CreateVpcPeeringConnectionOutput = (
  output: any,
  context: __SerdeContext
): CreateVpcPeeringConnectionOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteFleetLocationsOutput
 */
const de_DeleteFleetLocationsOutput = (output: any, context: __SerdeContext): DeleteFleetLocationsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    LocationStates: output.LocationStates != null ? de_LocationStateList(output.LocationStates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteGameServerGroupOutput
 */
const de_DeleteGameServerGroupOutput = (output: any, context: __SerdeContext): DeleteGameServerGroupOutput => {
  return {
    GameServerGroup: output.GameServerGroup != null ? de_GameServerGroup(output.GameServerGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteGameSessionQueueOutput
 */
const de_DeleteGameSessionQueueOutput = (output: any, context: __SerdeContext): DeleteGameSessionQueueOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteLocationOutput
 */
const de_DeleteLocationOutput = (output: any, context: __SerdeContext): DeleteLocationOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteMatchmakingConfigurationOutput
 */
const de_DeleteMatchmakingConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DeleteMatchmakingConfigurationOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteMatchmakingRuleSetOutput
 */
const de_DeleteMatchmakingRuleSetOutput = (output: any, context: __SerdeContext): DeleteMatchmakingRuleSetOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteVpcPeeringAuthorizationOutput
 */
const de_DeleteVpcPeeringAuthorizationOutput = (
  output: any,
  context: __SerdeContext
): DeleteVpcPeeringAuthorizationOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteVpcPeeringConnectionOutput
 */
const de_DeleteVpcPeeringConnectionOutput = (
  output: any,
  context: __SerdeContext
): DeleteVpcPeeringConnectionOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterComputeOutput
 */
const de_DeregisterComputeOutput = (output: any, context: __SerdeContext): DeregisterComputeOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeAliasOutput
 */
const de_DescribeAliasOutput = (output: any, context: __SerdeContext): DescribeAliasOutput => {
  return {
    Alias: output.Alias != null ? de_Alias(output.Alias, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBuildOutput
 */
const de_DescribeBuildOutput = (output: any, context: __SerdeContext): DescribeBuildOutput => {
  return {
    Build: output.Build != null ? de_Build(output.Build, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeComputeOutput
 */
const de_DescribeComputeOutput = (output: any, context: __SerdeContext): DescribeComputeOutput => {
  return {
    Compute: output.Compute != null ? de_Compute(output.Compute, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEC2InstanceLimitsOutput
 */
const de_DescribeEC2InstanceLimitsOutput = (output: any, context: __SerdeContext): DescribeEC2InstanceLimitsOutput => {
  return {
    EC2InstanceLimits:
      output.EC2InstanceLimits != null ? de_EC2InstanceLimitList(output.EC2InstanceLimits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetAttributesOutput
 */
const de_DescribeFleetAttributesOutput = (output: any, context: __SerdeContext): DescribeFleetAttributesOutput => {
  return {
    FleetAttributes:
      output.FleetAttributes != null ? de_FleetAttributesList(output.FleetAttributes, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetCapacityOutput
 */
const de_DescribeFleetCapacityOutput = (output: any, context: __SerdeContext): DescribeFleetCapacityOutput => {
  return {
    FleetCapacity: output.FleetCapacity != null ? de_FleetCapacityList(output.FleetCapacity, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetEventsOutput
 */
const de_DescribeFleetEventsOutput = (output: any, context: __SerdeContext): DescribeFleetEventsOutput => {
  return {
    Events: output.Events != null ? de_EventList(output.Events, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetLocationAttributesOutput
 */
const de_DescribeFleetLocationAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetLocationAttributesOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    LocationAttributes:
      output.LocationAttributes != null ? de_LocationAttributesList(output.LocationAttributes, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetLocationCapacityOutput
 */
const de_DescribeFleetLocationCapacityOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetLocationCapacityOutput => {
  return {
    FleetCapacity: output.FleetCapacity != null ? de_FleetCapacity(output.FleetCapacity, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetLocationUtilizationOutput
 */
const de_DescribeFleetLocationUtilizationOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetLocationUtilizationOutput => {
  return {
    FleetUtilization:
      output.FleetUtilization != null ? de_FleetUtilization(output.FleetUtilization, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetPortSettingsOutput
 */
const de_DescribeFleetPortSettingsOutput = (output: any, context: __SerdeContext): DescribeFleetPortSettingsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    InboundPermissions:
      output.InboundPermissions != null ? de_IpPermissionsList(output.InboundPermissions, context) : undefined,
    Location: __expectString(output.Location),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetUtilizationOutput
 */
const de_DescribeFleetUtilizationOutput = (output: any, context: __SerdeContext): DescribeFleetUtilizationOutput => {
  return {
    FleetUtilization:
      output.FleetUtilization != null ? de_FleetUtilizationList(output.FleetUtilization, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeGameServerGroupOutput
 */
const de_DescribeGameServerGroupOutput = (output: any, context: __SerdeContext): DescribeGameServerGroupOutput => {
  return {
    GameServerGroup: output.GameServerGroup != null ? de_GameServerGroup(output.GameServerGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeGameServerInstancesOutput
 */
const de_DescribeGameServerInstancesOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameServerInstancesOutput => {
  return {
    GameServerInstances:
      output.GameServerInstances != null ? de_GameServerInstances(output.GameServerInstances, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeGameServerOutput
 */
const de_DescribeGameServerOutput = (output: any, context: __SerdeContext): DescribeGameServerOutput => {
  return {
    GameServer: output.GameServer != null ? de_GameServer(output.GameServer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeGameSessionDetailsOutput
 */
const de_DescribeGameSessionDetailsOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameSessionDetailsOutput => {
  return {
    GameSessionDetails:
      output.GameSessionDetails != null ? de_GameSessionDetailList(output.GameSessionDetails, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeGameSessionPlacementOutput
 */
const de_DescribeGameSessionPlacementOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameSessionPlacementOutput => {
  return {
    GameSessionPlacement:
      output.GameSessionPlacement != null ? de_GameSessionPlacement(output.GameSessionPlacement, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeGameSessionQueuesOutput
 */
const de_DescribeGameSessionQueuesOutput = (output: any, context: __SerdeContext): DescribeGameSessionQueuesOutput => {
  return {
    GameSessionQueues:
      output.GameSessionQueues != null ? de_GameSessionQueueList(output.GameSessionQueues, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeGameSessionsOutput
 */
const de_DescribeGameSessionsOutput = (output: any, context: __SerdeContext): DescribeGameSessionsOutput => {
  return {
    GameSessions: output.GameSessions != null ? de_GameSessionList(output.GameSessions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInstancesOutput
 */
const de_DescribeInstancesOutput = (output: any, context: __SerdeContext): DescribeInstancesOutput => {
  return {
    Instances: output.Instances != null ? de_InstanceList(output.Instances, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput
 */
const de_DescribeMatchmakingConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMatchmakingConfigurationsOutput => {
  return {
    Configurations:
      output.Configurations != null ? de_MatchmakingConfigurationList(output.Configurations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMatchmakingOutput
 */
const de_DescribeMatchmakingOutput = (output: any, context: __SerdeContext): DescribeMatchmakingOutput => {
  return {
    TicketList: output.TicketList != null ? de_MatchmakingTicketList(output.TicketList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput
 */
const de_DescribeMatchmakingRuleSetsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMatchmakingRuleSetsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    RuleSets: output.RuleSets != null ? de_MatchmakingRuleSetList(output.RuleSets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePlayerSessionsOutput
 */
const de_DescribePlayerSessionsOutput = (output: any, context: __SerdeContext): DescribePlayerSessionsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    PlayerSessions: output.PlayerSessions != null ? de_PlayerSessionList(output.PlayerSessions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRuntimeConfigurationOutput
 */
const de_DescribeRuntimeConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DescribeRuntimeConfigurationOutput => {
  return {
    RuntimeConfiguration:
      output.RuntimeConfiguration != null ? de_RuntimeConfiguration(output.RuntimeConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeScalingPoliciesOutput
 */
const de_DescribeScalingPoliciesOutput = (output: any, context: __SerdeContext): DescribeScalingPoliciesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalingPolicies: output.ScalingPolicies != null ? de_ScalingPolicyList(output.ScalingPolicies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeScriptOutput
 */
const de_DescribeScriptOutput = (output: any, context: __SerdeContext): DescribeScriptOutput => {
  return {
    Script: output.Script != null ? de_Script(output.Script, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput
 */
const de_DescribeVpcPeeringAuthorizationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeVpcPeeringAuthorizationsOutput => {
  return {
    VpcPeeringAuthorizations:
      output.VpcPeeringAuthorizations != null
        ? de_VpcPeeringAuthorizationList(output.VpcPeeringAuthorizations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeVpcPeeringConnectionsOutput
 */
const de_DescribeVpcPeeringConnectionsOutput = (
  output: any,
  context: __SerdeContext
): DescribeVpcPeeringConnectionsOutput => {
  return {
    VpcPeeringConnections:
      output.VpcPeeringConnections != null
        ? de_VpcPeeringConnectionList(output.VpcPeeringConnections, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EC2InstanceCounts
 */
const de_EC2InstanceCounts = (output: any, context: __SerdeContext): EC2InstanceCounts => {
  return {
    ACTIVE: __expectInt32(output.ACTIVE),
    DESIRED: __expectInt32(output.DESIRED),
    IDLE: __expectInt32(output.IDLE),
    MAXIMUM: __expectInt32(output.MAXIMUM),
    MINIMUM: __expectInt32(output.MINIMUM),
    PENDING: __expectInt32(output.PENDING),
    TERMINATING: __expectInt32(output.TERMINATING),
  } as any;
};

/**
 * deserializeAws_json1_1EC2InstanceLimit
 */
const de_EC2InstanceLimit = (output: any, context: __SerdeContext): EC2InstanceLimit => {
  return {
    CurrentInstances: __expectInt32(output.CurrentInstances),
    EC2InstanceType: __expectString(output.EC2InstanceType),
    InstanceLimit: __expectInt32(output.InstanceLimit),
    Location: __expectString(output.Location),
  } as any;
};

/**
 * deserializeAws_json1_1EC2InstanceLimitList
 */
const de_EC2InstanceLimitList = (output: any, context: __SerdeContext): EC2InstanceLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EC2InstanceLimit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return {
    EventCode: __expectString(output.EventCode),
    EventId: __expectString(output.EventId),
    EventTime:
      output.EventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventTime))) : undefined,
    Message: __expectString(output.Message),
    PreSignedLogUrl: __expectString(output.PreSignedLogUrl),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_json1_1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Event(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FilterConfiguration
 */
const de_FilterConfiguration = (output: any, context: __SerdeContext): FilterConfiguration => {
  return {
    AllowedLocations: output.AllowedLocations != null ? de_LocationList(output.AllowedLocations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FleetActionList
 */
const de_FleetActionList = (output: any, context: __SerdeContext): (FleetAction | string)[] => {
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
 * deserializeAws_json1_1FleetAttributes
 */
const de_FleetAttributes = (output: any, context: __SerdeContext): FleetAttributes => {
  return {
    AnywhereConfiguration:
      output.AnywhereConfiguration != null
        ? de_AnywhereConfiguration(output.AnywhereConfiguration, context)
        : undefined,
    BuildArn: __expectString(output.BuildArn),
    BuildId: __expectString(output.BuildId),
    CertificateConfiguration:
      output.CertificateConfiguration != null
        ? de_CertificateConfiguration(output.CertificateConfiguration, context)
        : undefined,
    ComputeType: __expectString(output.ComputeType),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    FleetType: __expectString(output.FleetType),
    InstanceRoleArn: __expectString(output.InstanceRoleArn),
    InstanceType: __expectString(output.InstanceType),
    LogPaths: output.LogPaths != null ? de_StringList(output.LogPaths, context) : undefined,
    MetricGroups: output.MetricGroups != null ? de_MetricGroupList(output.MetricGroups, context) : undefined,
    Name: __expectString(output.Name),
    NewGameSessionProtectionPolicy: __expectString(output.NewGameSessionProtectionPolicy),
    OperatingSystem: __expectString(output.OperatingSystem),
    ResourceCreationLimitPolicy:
      output.ResourceCreationLimitPolicy != null
        ? de_ResourceCreationLimitPolicy(output.ResourceCreationLimitPolicy, context)
        : undefined,
    ScriptArn: __expectString(output.ScriptArn),
    ScriptId: __expectString(output.ScriptId),
    ServerLaunchParameters: __expectString(output.ServerLaunchParameters),
    ServerLaunchPath: __expectString(output.ServerLaunchPath),
    Status: __expectString(output.Status),
    StoppedActions: output.StoppedActions != null ? de_FleetActionList(output.StoppedActions, context) : undefined,
    TerminationTime:
      output.TerminationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TerminationTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FleetAttributesList
 */
const de_FleetAttributesList = (output: any, context: __SerdeContext): FleetAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FleetAttributes(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FleetCapacity
 */
const de_FleetCapacity = (output: any, context: __SerdeContext): FleetCapacity => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    InstanceCounts: output.InstanceCounts != null ? de_EC2InstanceCounts(output.InstanceCounts, context) : undefined,
    InstanceType: __expectString(output.InstanceType),
    Location: __expectString(output.Location),
  } as any;
};

/**
 * deserializeAws_json1_1FleetCapacityExceededException
 */
const de_FleetCapacityExceededException = (output: any, context: __SerdeContext): FleetCapacityExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1FleetCapacityList
 */
const de_FleetCapacityList = (output: any, context: __SerdeContext): FleetCapacity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FleetCapacity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FleetIdList
 */
const de_FleetIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1FleetUtilization
 */
const de_FleetUtilization = (output: any, context: __SerdeContext): FleetUtilization => {
  return {
    ActiveGameSessionCount: __expectInt32(output.ActiveGameSessionCount),
    ActiveServerProcessCount: __expectInt32(output.ActiveServerProcessCount),
    CurrentPlayerSessionCount: __expectInt32(output.CurrentPlayerSessionCount),
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    Location: __expectString(output.Location),
    MaximumPlayerSessionCount: __expectInt32(output.MaximumPlayerSessionCount),
  } as any;
};

/**
 * deserializeAws_json1_1FleetUtilizationList
 */
const de_FleetUtilizationList = (output: any, context: __SerdeContext): FleetUtilization[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FleetUtilization(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GameProperty
 */
const de_GameProperty = (output: any, context: __SerdeContext): GameProperty => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1GamePropertyList
 */
const de_GamePropertyList = (output: any, context: __SerdeContext): GameProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GameProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GameServer
 */
const de_GameServer = (output: any, context: __SerdeContext): GameServer => {
  return {
    ClaimStatus: __expectString(output.ClaimStatus),
    ConnectionInfo: __expectString(output.ConnectionInfo),
    GameServerData: __expectString(output.GameServerData),
    GameServerGroupArn: __expectString(output.GameServerGroupArn),
    GameServerGroupName: __expectString(output.GameServerGroupName),
    GameServerId: __expectString(output.GameServerId),
    InstanceId: __expectString(output.InstanceId),
    LastClaimTime:
      output.LastClaimTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastClaimTime)))
        : undefined,
    LastHealthCheckTime:
      output.LastHealthCheckTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastHealthCheckTime)))
        : undefined,
    RegistrationTime:
      output.RegistrationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RegistrationTime)))
        : undefined,
    UtilizationStatus: __expectString(output.UtilizationStatus),
  } as any;
};

/**
 * deserializeAws_json1_1GameServerGroup
 */
const de_GameServerGroup = (output: any, context: __SerdeContext): GameServerGroup => {
  return {
    AutoScalingGroupArn: __expectString(output.AutoScalingGroupArn),
    BalancingStrategy: __expectString(output.BalancingStrategy),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    GameServerGroupArn: __expectString(output.GameServerGroupArn),
    GameServerGroupName: __expectString(output.GameServerGroupName),
    GameServerProtectionPolicy: __expectString(output.GameServerProtectionPolicy),
    InstanceDefinitions:
      output.InstanceDefinitions != null ? de_InstanceDefinitions(output.InstanceDefinitions, context) : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
    SuspendedActions:
      output.SuspendedActions != null ? de_GameServerGroupActions(output.SuspendedActions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GameServerGroupActions
 */
const de_GameServerGroupActions = (output: any, context: __SerdeContext): (GameServerGroupAction | string)[] => {
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
 * deserializeAws_json1_1GameServerGroups
 */
const de_GameServerGroups = (output: any, context: __SerdeContext): GameServerGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GameServerGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GameServerInstance
 */
const de_GameServerInstance = (output: any, context: __SerdeContext): GameServerInstance => {
  return {
    GameServerGroupArn: __expectString(output.GameServerGroupArn),
    GameServerGroupName: __expectString(output.GameServerGroupName),
    InstanceId: __expectString(output.InstanceId),
    InstanceStatus: __expectString(output.InstanceStatus),
  } as any;
};

/**
 * deserializeAws_json1_1GameServerInstances
 */
const de_GameServerInstances = (output: any, context: __SerdeContext): GameServerInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GameServerInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GameServers
 */
const de_GameServers = (output: any, context: __SerdeContext): GameServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GameServer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GameSession
 */
const de_GameSession = (output: any, context: __SerdeContext): GameSession => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    CreatorId: __expectString(output.CreatorId),
    CurrentPlayerSessionCount: __expectInt32(output.CurrentPlayerSessionCount),
    DnsName: __expectString(output.DnsName),
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    GameProperties: output.GameProperties != null ? de_GamePropertyList(output.GameProperties, context) : undefined,
    GameSessionData: __expectString(output.GameSessionData),
    GameSessionId: __expectString(output.GameSessionId),
    IpAddress: __expectString(output.IpAddress),
    Location: __expectString(output.Location),
    MatchmakerData: __expectString(output.MatchmakerData),
    MaximumPlayerSessionCount: __expectInt32(output.MaximumPlayerSessionCount),
    Name: __expectString(output.Name),
    PlayerSessionCreationPolicy: __expectString(output.PlayerSessionCreationPolicy),
    Port: __expectInt32(output.Port),
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
    TerminationTime:
      output.TerminationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TerminationTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GameSessionConnectionInfo
 */
const de_GameSessionConnectionInfo = (output: any, context: __SerdeContext): GameSessionConnectionInfo => {
  return {
    DnsName: __expectString(output.DnsName),
    GameSessionArn: __expectString(output.GameSessionArn),
    IpAddress: __expectString(output.IpAddress),
    MatchedPlayerSessions:
      output.MatchedPlayerSessions != null
        ? de_MatchedPlayerSessionList(output.MatchedPlayerSessions, context)
        : undefined,
    Port: __expectInt32(output.Port),
  } as any;
};

/**
 * deserializeAws_json1_1GameSessionDetail
 */
const de_GameSessionDetail = (output: any, context: __SerdeContext): GameSessionDetail => {
  return {
    GameSession: output.GameSession != null ? de_GameSession(output.GameSession, context) : undefined,
    ProtectionPolicy: __expectString(output.ProtectionPolicy),
  } as any;
};

/**
 * deserializeAws_json1_1GameSessionDetailList
 */
const de_GameSessionDetailList = (output: any, context: __SerdeContext): GameSessionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GameSessionDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GameSessionFullException
 */
const de_GameSessionFullException = (output: any, context: __SerdeContext): GameSessionFullException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1GameSessionList
 */
const de_GameSessionList = (output: any, context: __SerdeContext): GameSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GameSession(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GameSessionPlacement
 */
const de_GameSessionPlacement = (output: any, context: __SerdeContext): GameSessionPlacement => {
  return {
    DnsName: __expectString(output.DnsName),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    GameProperties: output.GameProperties != null ? de_GamePropertyList(output.GameProperties, context) : undefined,
    GameSessionArn: __expectString(output.GameSessionArn),
    GameSessionData: __expectString(output.GameSessionData),
    GameSessionId: __expectString(output.GameSessionId),
    GameSessionName: __expectString(output.GameSessionName),
    GameSessionQueueName: __expectString(output.GameSessionQueueName),
    GameSessionRegion: __expectString(output.GameSessionRegion),
    IpAddress: __expectString(output.IpAddress),
    MatchmakerData: __expectString(output.MatchmakerData),
    MaximumPlayerSessionCount: __expectInt32(output.MaximumPlayerSessionCount),
    PlacedPlayerSessions:
      output.PlacedPlayerSessions != null
        ? de_PlacedPlayerSessionList(output.PlacedPlayerSessions, context)
        : undefined,
    PlacementId: __expectString(output.PlacementId),
    PlayerLatencies: output.PlayerLatencies != null ? de_PlayerLatencyList(output.PlayerLatencies, context) : undefined,
    Port: __expectInt32(output.Port),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1GameSessionQueue
 */
const de_GameSessionQueue = (output: any, context: __SerdeContext): GameSessionQueue => {
  return {
    CustomEventData: __expectString(output.CustomEventData),
    Destinations:
      output.Destinations != null ? de_GameSessionQueueDestinationList(output.Destinations, context) : undefined,
    FilterConfiguration:
      output.FilterConfiguration != null ? de_FilterConfiguration(output.FilterConfiguration, context) : undefined,
    GameSessionQueueArn: __expectString(output.GameSessionQueueArn),
    Name: __expectString(output.Name),
    NotificationTarget: __expectString(output.NotificationTarget),
    PlayerLatencyPolicies:
      output.PlayerLatencyPolicies != null
        ? de_PlayerLatencyPolicyList(output.PlayerLatencyPolicies, context)
        : undefined,
    PriorityConfiguration:
      output.PriorityConfiguration != null
        ? de_PriorityConfiguration(output.PriorityConfiguration, context)
        : undefined,
    TimeoutInSeconds: __expectInt32(output.TimeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1GameSessionQueueDestination
 */
const de_GameSessionQueueDestination = (output: any, context: __SerdeContext): GameSessionQueueDestination => {
  return {
    DestinationArn: __expectString(output.DestinationArn),
  } as any;
};

/**
 * deserializeAws_json1_1GameSessionQueueDestinationList
 */
const de_GameSessionQueueDestinationList = (output: any, context: __SerdeContext): GameSessionQueueDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GameSessionQueueDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GameSessionQueueList
 */
const de_GameSessionQueueList = (output: any, context: __SerdeContext): GameSessionQueue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GameSessionQueue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetComputeAccessOutput
 */
const de_GetComputeAccessOutput = (output: any, context: __SerdeContext): GetComputeAccessOutput => {
  return {
    ComputeArn: __expectString(output.ComputeArn),
    ComputeName: __expectString(output.ComputeName),
    Credentials: output.Credentials != null ? de_AwsCredentials(output.Credentials, context) : undefined,
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

/**
 * deserializeAws_json1_1GetComputeAuthTokenOutput
 */
const de_GetComputeAuthTokenOutput = (output: any, context: __SerdeContext): GetComputeAuthTokenOutput => {
  return {
    AuthToken: __expectString(output.AuthToken),
    ComputeArn: __expectString(output.ComputeArn),
    ComputeName: __expectString(output.ComputeName),
    ExpirationTimestamp:
      output.ExpirationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTimestamp)))
        : undefined,
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

/**
 * deserializeAws_json1_1GetGameSessionLogUrlOutput
 */
const de_GetGameSessionLogUrlOutput = (output: any, context: __SerdeContext): GetGameSessionLogUrlOutput => {
  return {
    PreSignedUrl: __expectString(output.PreSignedUrl),
  } as any;
};

/**
 * deserializeAws_json1_1GetInstanceAccessOutput
 */
const de_GetInstanceAccessOutput = (output: any, context: __SerdeContext): GetInstanceAccessOutput => {
  return {
    InstanceAccess: output.InstanceAccess != null ? de_InstanceAccess(output.InstanceAccess, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchException
 */
const de_IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DnsName: __expectString(output.DnsName),
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    InstanceId: __expectString(output.InstanceId),
    IpAddress: __expectString(output.IpAddress),
    Location: __expectString(output.Location),
    OperatingSystem: __expectString(output.OperatingSystem),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceAccess
 */
const de_InstanceAccess = (output: any, context: __SerdeContext): InstanceAccess => {
  return {
    Credentials: output.Credentials != null ? de_InstanceCredentials(output.Credentials, context) : undefined,
    FleetId: __expectString(output.FleetId),
    InstanceId: __expectString(output.InstanceId),
    IpAddress: __expectString(output.IpAddress),
    OperatingSystem: __expectString(output.OperatingSystem),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceCredentials
 */
const de_InstanceCredentials = (output: any, context: __SerdeContext): InstanceCredentials => {
  return {
    Secret: __expectString(output.Secret),
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceDefinition
 */
const de_InstanceDefinition = (output: any, context: __SerdeContext): InstanceDefinition => {
  return {
    InstanceType: __expectString(output.InstanceType),
    WeightedCapacity: __expectString(output.WeightedCapacity),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceDefinitions
 */
const de_InstanceDefinitions = (output: any, context: __SerdeContext): InstanceDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceList
 */
const de_InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Instance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InternalServiceException
 */
const de_InternalServiceException = (output: any, context: __SerdeContext): InternalServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidFleetStatusException
 */
const de_InvalidFleetStatusException = (output: any, context: __SerdeContext): InvalidFleetStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidGameSessionStatusException
 */
const de_InvalidGameSessionStatusException = (
  output: any,
  context: __SerdeContext
): InvalidGameSessionStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IpPermission
 */
const de_IpPermission = (output: any, context: __SerdeContext): IpPermission => {
  return {
    FromPort: __expectInt32(output.FromPort),
    IpRange: __expectString(output.IpRange),
    Protocol: __expectString(output.Protocol),
    ToPort: __expectInt32(output.ToPort),
  } as any;
};

/**
 * deserializeAws_json1_1IpPermissionsList
 */
const de_IpPermissionsList = (output: any, context: __SerdeContext): IpPermission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IpPermission(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LatencyMap
 */
const de_LatencyMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAliasesOutput
 */
const de_ListAliasesOutput = (output: any, context: __SerdeContext): ListAliasesOutput => {
  return {
    Aliases: output.Aliases != null ? de_AliasList(output.Aliases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListBuildsOutput
 */
const de_ListBuildsOutput = (output: any, context: __SerdeContext): ListBuildsOutput => {
  return {
    Builds: output.Builds != null ? de_BuildList(output.Builds, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListComputeOutput
 */
const de_ListComputeOutput = (output: any, context: __SerdeContext): ListComputeOutput => {
  return {
    ComputeList: output.ComputeList != null ? de_ComputeList(output.ComputeList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFleetsOutput
 */
const de_ListFleetsOutput = (output: any, context: __SerdeContext): ListFleetsOutput => {
  return {
    FleetIds: output.FleetIds != null ? de_FleetIdList(output.FleetIds, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListGameServerGroupsOutput
 */
const de_ListGameServerGroupsOutput = (output: any, context: __SerdeContext): ListGameServerGroupsOutput => {
  return {
    GameServerGroups:
      output.GameServerGroups != null ? de_GameServerGroups(output.GameServerGroups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListGameServersOutput
 */
const de_ListGameServersOutput = (output: any, context: __SerdeContext): ListGameServersOutput => {
  return {
    GameServers: output.GameServers != null ? de_GameServers(output.GameServers, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLocationsOutput
 */
const de_ListLocationsOutput = (output: any, context: __SerdeContext): ListLocationsOutput => {
  return {
    Locations: output.Locations != null ? de_LocationModelList(output.Locations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListScriptsOutput
 */
const de_ListScriptsOutput = (output: any, context: __SerdeContext): ListScriptsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Scripts: output.Scripts != null ? de_ScriptList(output.Scripts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LocationAttributes
 */
const de_LocationAttributes = (output: any, context: __SerdeContext): LocationAttributes => {
  return {
    LocationState: output.LocationState != null ? de_LocationState(output.LocationState, context) : undefined,
    StoppedActions: output.StoppedActions != null ? de_FleetActionList(output.StoppedActions, context) : undefined,
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

/**
 * deserializeAws_json1_1LocationAttributesList
 */
const de_LocationAttributesList = (output: any, context: __SerdeContext): LocationAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LocationAttributes(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LocationList
 */
const de_LocationList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1LocationModel
 */
const de_LocationModel = (output: any, context: __SerdeContext): LocationModel => {
  return {
    LocationArn: __expectString(output.LocationArn),
    LocationName: __expectString(output.LocationName),
  } as any;
};

/**
 * deserializeAws_json1_1LocationModelList
 */
const de_LocationModelList = (output: any, context: __SerdeContext): LocationModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LocationModel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LocationState
 */
const de_LocationState = (output: any, context: __SerdeContext): LocationState => {
  return {
    Location: __expectString(output.Location),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1LocationStateList
 */
const de_LocationStateList = (output: any, context: __SerdeContext): LocationState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LocationState(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MatchedPlayerSession
 */
const de_MatchedPlayerSession = (output: any, context: __SerdeContext): MatchedPlayerSession => {
  return {
    PlayerId: __expectString(output.PlayerId),
    PlayerSessionId: __expectString(output.PlayerSessionId),
  } as any;
};

/**
 * deserializeAws_json1_1MatchedPlayerSessionList
 */
const de_MatchedPlayerSessionList = (output: any, context: __SerdeContext): MatchedPlayerSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MatchedPlayerSession(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MatchmakingConfiguration
 */
const de_MatchmakingConfiguration = (output: any, context: __SerdeContext): MatchmakingConfiguration => {
  return {
    AcceptanceRequired: __expectBoolean(output.AcceptanceRequired),
    AcceptanceTimeoutSeconds: __expectInt32(output.AcceptanceTimeoutSeconds),
    AdditionalPlayerCount: __expectInt32(output.AdditionalPlayerCount),
    BackfillMode: __expectString(output.BackfillMode),
    ConfigurationArn: __expectString(output.ConfigurationArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    CustomEventData: __expectString(output.CustomEventData),
    Description: __expectString(output.Description),
    FlexMatchMode: __expectString(output.FlexMatchMode),
    GameProperties: output.GameProperties != null ? de_GamePropertyList(output.GameProperties, context) : undefined,
    GameSessionData: __expectString(output.GameSessionData),
    GameSessionQueueArns:
      output.GameSessionQueueArns != null ? de_QueueArnsList(output.GameSessionQueueArns, context) : undefined,
    Name: __expectString(output.Name),
    NotificationTarget: __expectString(output.NotificationTarget),
    RequestTimeoutSeconds: __expectInt32(output.RequestTimeoutSeconds),
    RuleSetArn: __expectString(output.RuleSetArn),
    RuleSetName: __expectString(output.RuleSetName),
  } as any;
};

/**
 * deserializeAws_json1_1MatchmakingConfigurationList
 */
const de_MatchmakingConfigurationList = (output: any, context: __SerdeContext): MatchmakingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MatchmakingConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MatchmakingRuleSet
 */
const de_MatchmakingRuleSet = (output: any, context: __SerdeContext): MatchmakingRuleSet => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    RuleSetArn: __expectString(output.RuleSetArn),
    RuleSetBody: __expectString(output.RuleSetBody),
    RuleSetName: __expectString(output.RuleSetName),
  } as any;
};

/**
 * deserializeAws_json1_1MatchmakingRuleSetList
 */
const de_MatchmakingRuleSetList = (output: any, context: __SerdeContext): MatchmakingRuleSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MatchmakingRuleSet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MatchmakingTicket
 */
const de_MatchmakingTicket = (output: any, context: __SerdeContext): MatchmakingTicket => {
  return {
    ConfigurationArn: __expectString(output.ConfigurationArn),
    ConfigurationName: __expectString(output.ConfigurationName),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    EstimatedWaitTime: __expectInt32(output.EstimatedWaitTime),
    GameSessionConnectionInfo:
      output.GameSessionConnectionInfo != null
        ? de_GameSessionConnectionInfo(output.GameSessionConnectionInfo, context)
        : undefined,
    Players: output.Players != null ? de_PlayerList(output.Players, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    StatusReason: __expectString(output.StatusReason),
    TicketId: __expectString(output.TicketId),
  } as any;
};

/**
 * deserializeAws_json1_1MatchmakingTicketList
 */
const de_MatchmakingTicketList = (output: any, context: __SerdeContext): MatchmakingTicket[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MatchmakingTicket(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricGroupList
 */
const de_MetricGroupList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1NotFoundException
 */
const de_NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OutOfCapacityException
 */
const de_OutOfCapacityException = (output: any, context: __SerdeContext): OutOfCapacityException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PlacedPlayerSession
 */
const de_PlacedPlayerSession = (output: any, context: __SerdeContext): PlacedPlayerSession => {
  return {
    PlayerId: __expectString(output.PlayerId),
    PlayerSessionId: __expectString(output.PlayerSessionId),
  } as any;
};

/**
 * deserializeAws_json1_1PlacedPlayerSessionList
 */
const de_PlacedPlayerSessionList = (output: any, context: __SerdeContext): PlacedPlayerSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlacedPlayerSession(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Player
 */
const de_Player = (output: any, context: __SerdeContext): Player => {
  return {
    LatencyInMs: output.LatencyInMs != null ? de_LatencyMap(output.LatencyInMs, context) : undefined,
    PlayerAttributes:
      output.PlayerAttributes != null ? de_PlayerAttributeMap(output.PlayerAttributes, context) : undefined,
    PlayerId: __expectString(output.PlayerId),
    Team: __expectString(output.Team),
  } as any;
};

/**
 * deserializeAws_json1_1PlayerAttributeMap
 */
const de_PlayerAttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1PlayerAttributeStringDoubleMap
 */
const de_PlayerAttributeStringDoubleMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1PlayerAttributeStringList
 */
const de_PlayerAttributeStringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1PlayerLatency
 */
const de_PlayerLatency = (output: any, context: __SerdeContext): PlayerLatency => {
  return {
    LatencyInMilliseconds: __limitedParseFloat32(output.LatencyInMilliseconds),
    PlayerId: __expectString(output.PlayerId),
    RegionIdentifier: __expectString(output.RegionIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1PlayerLatencyList
 */
const de_PlayerLatencyList = (output: any, context: __SerdeContext): PlayerLatency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlayerLatency(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlayerLatencyPolicy
 */
const de_PlayerLatencyPolicy = (output: any, context: __SerdeContext): PlayerLatencyPolicy => {
  return {
    MaximumIndividualPlayerLatencyMilliseconds: __expectInt32(output.MaximumIndividualPlayerLatencyMilliseconds),
    PolicyDurationSeconds: __expectInt32(output.PolicyDurationSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1PlayerLatencyPolicyList
 */
const de_PlayerLatencyPolicyList = (output: any, context: __SerdeContext): PlayerLatencyPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlayerLatencyPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlayerList
 */
const de_PlayerList = (output: any, context: __SerdeContext): Player[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Player(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlayerSession
 */
const de_PlayerSession = (output: any, context: __SerdeContext): PlayerSession => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DnsName: __expectString(output.DnsName),
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    GameSessionId: __expectString(output.GameSessionId),
    IpAddress: __expectString(output.IpAddress),
    PlayerData: __expectString(output.PlayerData),
    PlayerId: __expectString(output.PlayerId),
    PlayerSessionId: __expectString(output.PlayerSessionId),
    Port: __expectInt32(output.Port),
    Status: __expectString(output.Status),
    TerminationTime:
      output.TerminationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TerminationTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PlayerSessionList
 */
const de_PlayerSessionList = (output: any, context: __SerdeContext): PlayerSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlayerSession(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PriorityConfiguration
 */
const de_PriorityConfiguration = (output: any, context: __SerdeContext): PriorityConfiguration => {
  return {
    LocationOrder: output.LocationOrder != null ? de_LocationList(output.LocationOrder, context) : undefined,
    PriorityOrder: output.PriorityOrder != null ? de_PriorityTypeList(output.PriorityOrder, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PriorityTypeList
 */
const de_PriorityTypeList = (output: any, context: __SerdeContext): (PriorityType | string)[] => {
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
 * deserializeAws_json1_1PutScalingPolicyOutput
 */
const de_PutScalingPolicyOutput = (output: any, context: __SerdeContext): PutScalingPolicyOutput => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1QueueArnsList
 */
const de_QueueArnsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1RegisterComputeOutput
 */
const de_RegisterComputeOutput = (output: any, context: __SerdeContext): RegisterComputeOutput => {
  return {
    Compute: output.Compute != null ? de_Compute(output.Compute, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegisterGameServerOutput
 */
const de_RegisterGameServerOutput = (output: any, context: __SerdeContext): RegisterGameServerOutput => {
  return {
    GameServer: output.GameServer != null ? de_GameServer(output.GameServer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RequestUploadCredentialsOutput
 */
const de_RequestUploadCredentialsOutput = (output: any, context: __SerdeContext): RequestUploadCredentialsOutput => {
  return {
    StorageLocation: output.StorageLocation != null ? de_S3Location(output.StorageLocation, context) : undefined,
    UploadCredentials:
      output.UploadCredentials != null ? de_AwsCredentials(output.UploadCredentials, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResolveAliasOutput
 */
const de_ResolveAliasOutput = (output: any, context: __SerdeContext): ResolveAliasOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceCreationLimitPolicy
 */
const de_ResourceCreationLimitPolicy = (output: any, context: __SerdeContext): ResourceCreationLimitPolicy => {
  return {
    NewGameSessionsPerCreator: __expectInt32(output.NewGameSessionsPerCreator),
    PolicyPeriodInMinutes: __expectInt32(output.PolicyPeriodInMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1ResumeGameServerGroupOutput
 */
const de_ResumeGameServerGroupOutput = (output: any, context: __SerdeContext): ResumeGameServerGroupOutput => {
  return {
    GameServerGroup: output.GameServerGroup != null ? de_GameServerGroup(output.GameServerGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RoutingStrategy
 */
const de_RoutingStrategy = (output: any, context: __SerdeContext): RoutingStrategy => {
  return {
    FleetId: __expectString(output.FleetId),
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1RuntimeConfiguration
 */
const de_RuntimeConfiguration = (output: any, context: __SerdeContext): RuntimeConfiguration => {
  return {
    GameSessionActivationTimeoutSeconds: __expectInt32(output.GameSessionActivationTimeoutSeconds),
    MaxConcurrentGameSessionActivations: __expectInt32(output.MaxConcurrentGameSessionActivations),
    ServerProcesses: output.ServerProcesses != null ? de_ServerProcessList(output.ServerProcesses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1S3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
    ObjectVersion: __expectString(output.ObjectVersion),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1ScalingPolicy
 */
const de_ScalingPolicy = (output: any, context: __SerdeContext): ScalingPolicy => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    EvaluationPeriods: __expectInt32(output.EvaluationPeriods),
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    Location: __expectString(output.Location),
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    PolicyType: __expectString(output.PolicyType),
    ScalingAdjustment: __expectInt32(output.ScalingAdjustment),
    ScalingAdjustmentType: __expectString(output.ScalingAdjustmentType),
    Status: __expectString(output.Status),
    TargetConfiguration:
      output.TargetConfiguration != null ? de_TargetConfiguration(output.TargetConfiguration, context) : undefined,
    Threshold: __limitedParseDouble(output.Threshold),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

/**
 * deserializeAws_json1_1ScalingPolicyList
 */
const de_ScalingPolicyList = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScalingPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Script
 */
const de_Script = (output: any, context: __SerdeContext): Script => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Name: __expectString(output.Name),
    ScriptArn: __expectString(output.ScriptArn),
    ScriptId: __expectString(output.ScriptId),
    SizeOnDisk: __expectLong(output.SizeOnDisk),
    StorageLocation: output.StorageLocation != null ? de_S3Location(output.StorageLocation, context) : undefined,
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1ScriptList
 */
const de_ScriptList = (output: any, context: __SerdeContext): Script[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Script(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SearchGameSessionsOutput
 */
const de_SearchGameSessionsOutput = (output: any, context: __SerdeContext): SearchGameSessionsOutput => {
  return {
    GameSessions: output.GameSessions != null ? de_GameSessionList(output.GameSessions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ServerProcess
 */
const de_ServerProcess = (output: any, context: __SerdeContext): ServerProcess => {
  return {
    ConcurrentExecutions: __expectInt32(output.ConcurrentExecutions),
    LaunchPath: __expectString(output.LaunchPath),
    Parameters: __expectString(output.Parameters),
  } as any;
};

/**
 * deserializeAws_json1_1ServerProcessList
 */
const de_ServerProcessList = (output: any, context: __SerdeContext): ServerProcess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerProcess(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartFleetActionsOutput
 */
const de_StartFleetActionsOutput = (output: any, context: __SerdeContext): StartFleetActionsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

/**
 * deserializeAws_json1_1StartGameSessionPlacementOutput
 */
const de_StartGameSessionPlacementOutput = (output: any, context: __SerdeContext): StartGameSessionPlacementOutput => {
  return {
    GameSessionPlacement:
      output.GameSessionPlacement != null ? de_GameSessionPlacement(output.GameSessionPlacement, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartMatchBackfillOutput
 */
const de_StartMatchBackfillOutput = (output: any, context: __SerdeContext): StartMatchBackfillOutput => {
  return {
    MatchmakingTicket:
      output.MatchmakingTicket != null ? de_MatchmakingTicket(output.MatchmakingTicket, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartMatchmakingOutput
 */
const de_StartMatchmakingOutput = (output: any, context: __SerdeContext): StartMatchmakingOutput => {
  return {
    MatchmakingTicket:
      output.MatchmakingTicket != null ? de_MatchmakingTicket(output.MatchmakingTicket, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopFleetActionsOutput
 */
const de_StopFleetActionsOutput = (output: any, context: __SerdeContext): StopFleetActionsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

/**
 * deserializeAws_json1_1StopGameSessionPlacementOutput
 */
const de_StopGameSessionPlacementOutput = (output: any, context: __SerdeContext): StopGameSessionPlacementOutput => {
  return {
    GameSessionPlacement:
      output.GameSessionPlacement != null ? de_GameSessionPlacement(output.GameSessionPlacement, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopMatchmakingOutput
 */
const de_StopMatchmakingOutput = (output: any, context: __SerdeContext): StopMatchmakingOutput => {
  return {} as any;
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
 * deserializeAws_json1_1SuspendGameServerGroupOutput
 */
const de_SuspendGameServerGroupOutput = (output: any, context: __SerdeContext): SuspendGameServerGroupOutput => {
  return {
    GameServerGroup: output.GameServerGroup != null ? de_GameServerGroup(output.GameServerGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TaggingFailedException
 */
const de_TaggingFailedException = (output: any, context: __SerdeContext): TaggingFailedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TargetConfiguration
 */
const de_TargetConfiguration = (output: any, context: __SerdeContext): TargetConfiguration => {
  return {
    TargetValue: __limitedParseDouble(output.TargetValue),
  } as any;
};

/**
 * deserializeAws_json1_1TerminalRoutingStrategyException
 */
const de_TerminalRoutingStrategyException = (
  output: any,
  context: __SerdeContext
): TerminalRoutingStrategyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnauthorizedException
 */
const de_UnauthorizedException = (output: any, context: __SerdeContext): UnauthorizedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedRegionException
 */
const de_UnsupportedRegionException = (output: any, context: __SerdeContext): UnsupportedRegionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateAliasOutput
 */
const de_UpdateAliasOutput = (output: any, context: __SerdeContext): UpdateAliasOutput => {
  return {
    Alias: output.Alias != null ? de_Alias(output.Alias, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateBuildOutput
 */
const de_UpdateBuildOutput = (output: any, context: __SerdeContext): UpdateBuildOutput => {
  return {
    Build: output.Build != null ? de_Build(output.Build, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFleetAttributesOutput
 */
const de_UpdateFleetAttributesOutput = (output: any, context: __SerdeContext): UpdateFleetAttributesOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFleetCapacityOutput
 */
const de_UpdateFleetCapacityOutput = (output: any, context: __SerdeContext): UpdateFleetCapacityOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    Location: __expectString(output.Location),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFleetPortSettingsOutput
 */
const de_UpdateFleetPortSettingsOutput = (output: any, context: __SerdeContext): UpdateFleetPortSettingsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateGameServerGroupOutput
 */
const de_UpdateGameServerGroupOutput = (output: any, context: __SerdeContext): UpdateGameServerGroupOutput => {
  return {
    GameServerGroup: output.GameServerGroup != null ? de_GameServerGroup(output.GameServerGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateGameServerOutput
 */
const de_UpdateGameServerOutput = (output: any, context: __SerdeContext): UpdateGameServerOutput => {
  return {
    GameServer: output.GameServer != null ? de_GameServer(output.GameServer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateGameSessionOutput
 */
const de_UpdateGameSessionOutput = (output: any, context: __SerdeContext): UpdateGameSessionOutput => {
  return {
    GameSession: output.GameSession != null ? de_GameSession(output.GameSession, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateGameSessionQueueOutput
 */
const de_UpdateGameSessionQueueOutput = (output: any, context: __SerdeContext): UpdateGameSessionQueueOutput => {
  return {
    GameSessionQueue:
      output.GameSessionQueue != null ? de_GameSessionQueue(output.GameSessionQueue, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateMatchmakingConfigurationOutput
 */
const de_UpdateMatchmakingConfigurationOutput = (
  output: any,
  context: __SerdeContext
): UpdateMatchmakingConfigurationOutput => {
  return {
    Configuration:
      output.Configuration != null ? de_MatchmakingConfiguration(output.Configuration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRuntimeConfigurationOutput
 */
const de_UpdateRuntimeConfigurationOutput = (
  output: any,
  context: __SerdeContext
): UpdateRuntimeConfigurationOutput => {
  return {
    RuntimeConfiguration:
      output.RuntimeConfiguration != null ? de_RuntimeConfiguration(output.RuntimeConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateScriptOutput
 */
const de_UpdateScriptOutput = (output: any, context: __SerdeContext): UpdateScriptOutput => {
  return {
    Script: output.Script != null ? de_Script(output.Script, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ValidateMatchmakingRuleSetOutput
 */
const de_ValidateMatchmakingRuleSetOutput = (
  output: any,
  context: __SerdeContext
): ValidateMatchmakingRuleSetOutput => {
  return {
    Valid: __expectBoolean(output.Valid),
  } as any;
};

/**
 * deserializeAws_json1_1VpcPeeringAuthorization
 */
const de_VpcPeeringAuthorization = (output: any, context: __SerdeContext): VpcPeeringAuthorization => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ExpirationTime:
      output.ExpirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTime)))
        : undefined,
    GameLiftAwsAccountId: __expectString(output.GameLiftAwsAccountId),
    PeerVpcAwsAccountId: __expectString(output.PeerVpcAwsAccountId),
    PeerVpcId: __expectString(output.PeerVpcId),
  } as any;
};

/**
 * deserializeAws_json1_1VpcPeeringAuthorizationList
 */
const de_VpcPeeringAuthorizationList = (output: any, context: __SerdeContext): VpcPeeringAuthorization[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcPeeringAuthorization(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VpcPeeringConnection
 */
const de_VpcPeeringConnection = (output: any, context: __SerdeContext): VpcPeeringConnection => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    GameLiftVpcId: __expectString(output.GameLiftVpcId),
    IpV4CidrBlock: __expectString(output.IpV4CidrBlock),
    PeerVpcId: __expectString(output.PeerVpcId),
    Status: output.Status != null ? de_VpcPeeringConnectionStatus(output.Status, context) : undefined,
    VpcPeeringConnectionId: __expectString(output.VpcPeeringConnectionId),
  } as any;
};

/**
 * deserializeAws_json1_1VpcPeeringConnectionList
 */
const de_VpcPeeringConnectionList = (output: any, context: __SerdeContext): VpcPeeringConnection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcPeeringConnection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VpcPeeringConnectionStatus
 */
const de_VpcPeeringConnectionStatus = (output: any, context: __SerdeContext): VpcPeeringConnectionStatus => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
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
