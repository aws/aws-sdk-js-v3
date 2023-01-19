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

export const serializeAws_json1_1AcceptMatchCommand = async (
  input: AcceptMatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.AcceptMatch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcceptMatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ClaimGameServerCommand = async (
  input: ClaimGameServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ClaimGameServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ClaimGameServerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAliasInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBuildCommand = async (
  input: CreateBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateBuild",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFleetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFleetLocationsCommand = async (
  input: CreateFleetLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateFleetLocations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFleetLocationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGameServerGroupCommand = async (
  input: CreateGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateGameServerGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGameServerGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGameSessionCommand = async (
  input: CreateGameSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateGameSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGameSessionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGameSessionQueueCommand = async (
  input: CreateGameSessionQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateGameSessionQueue",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGameSessionQueueInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationCommand = async (
  input: CreateLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateLocation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLocationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMatchmakingConfigurationCommand = async (
  input: CreateMatchmakingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateMatchmakingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMatchmakingConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMatchmakingRuleSetCommand = async (
  input: CreateMatchmakingRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateMatchmakingRuleSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMatchmakingRuleSetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePlayerSessionCommand = async (
  input: CreatePlayerSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreatePlayerSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePlayerSessionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePlayerSessionsCommand = async (
  input: CreatePlayerSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreatePlayerSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePlayerSessionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateScriptCommand = async (
  input: CreateScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateScript",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateScriptInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVpcPeeringAuthorizationCommand = async (
  input: CreateVpcPeeringAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateVpcPeeringAuthorization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVpcPeeringAuthorizationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVpcPeeringConnectionCommand = async (
  input: CreateVpcPeeringConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.CreateVpcPeeringConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVpcPeeringConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAliasInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBuildCommand = async (
  input: DeleteBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteBuild",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFleetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFleetLocationsCommand = async (
  input: DeleteFleetLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteFleetLocations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFleetLocationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGameServerGroupCommand = async (
  input: DeleteGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteGameServerGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGameServerGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGameSessionQueueCommand = async (
  input: DeleteGameSessionQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteGameSessionQueue",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGameSessionQueueInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLocationCommand = async (
  input: DeleteLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteLocation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLocationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMatchmakingConfigurationCommand = async (
  input: DeleteMatchmakingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteMatchmakingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMatchmakingConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMatchmakingRuleSetCommand = async (
  input: DeleteMatchmakingRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteMatchmakingRuleSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMatchmakingRuleSetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteScalingPolicyCommand = async (
  input: DeleteScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteScriptCommand = async (
  input: DeleteScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteScript",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteScriptInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = async (
  input: DeleteVpcPeeringAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteVpcPeeringAuthorization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVpcPeeringAuthorizationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVpcPeeringConnectionCommand = async (
  input: DeleteVpcPeeringConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeleteVpcPeeringConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVpcPeeringConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterComputeCommand = async (
  input: DeregisterComputeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeregisterCompute",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterComputeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterGameServerCommand = async (
  input: DeregisterGameServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DeregisterGameServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterGameServerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAliasCommand = async (
  input: DescribeAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAliasInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBuildCommand = async (
  input: DescribeBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeBuild",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeComputeCommand = async (
  input: DescribeComputeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeCompute",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeComputeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEC2InstanceLimitsCommand = async (
  input: DescribeEC2InstanceLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeEC2InstanceLimits",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEC2InstanceLimitsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetAttributesCommand = async (
  input: DescribeFleetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeFleetAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetAttributesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetCapacityCommand = async (
  input: DescribeFleetCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeFleetCapacity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetCapacityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetEventsCommand = async (
  input: DescribeFleetEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeFleetEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetEventsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetLocationAttributesCommand = async (
  input: DescribeFleetLocationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeFleetLocationAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetLocationAttributesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetLocationCapacityCommand = async (
  input: DescribeFleetLocationCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeFleetLocationCapacity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetLocationCapacityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetLocationUtilizationCommand = async (
  input: DescribeFleetLocationUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeFleetLocationUtilization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetLocationUtilizationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetPortSettingsCommand = async (
  input: DescribeFleetPortSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeFleetPortSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetPortSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetUtilizationCommand = async (
  input: DescribeFleetUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeFleetUtilization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetUtilizationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGameServerCommand = async (
  input: DescribeGameServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeGameServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGameServerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGameServerGroupCommand = async (
  input: DescribeGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeGameServerGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGameServerGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGameServerInstancesCommand = async (
  input: DescribeGameServerInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeGameServerInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGameServerInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGameSessionDetailsCommand = async (
  input: DescribeGameSessionDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeGameSessionDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGameSessionDetailsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGameSessionPlacementCommand = async (
  input: DescribeGameSessionPlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeGameSessionPlacement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGameSessionPlacementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGameSessionQueuesCommand = async (
  input: DescribeGameSessionQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeGameSessionQueues",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGameSessionQueuesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGameSessionsCommand = async (
  input: DescribeGameSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeGameSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGameSessionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInstancesCommand = async (
  input: DescribeInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMatchmakingCommand = async (
  input: DescribeMatchmakingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeMatchmaking",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMatchmakingConfigurationsCommand = async (
  input: DescribeMatchmakingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeMatchmakingConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingConfigurationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMatchmakingRuleSetsCommand = async (
  input: DescribeMatchmakingRuleSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeMatchmakingRuleSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingRuleSetsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePlayerSessionsCommand = async (
  input: DescribePlayerSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribePlayerSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePlayerSessionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRuntimeConfigurationCommand = async (
  input: DescribeRuntimeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeRuntimeConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRuntimeConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalingPoliciesCommand = async (
  input: DescribeScalingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeScalingPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingPoliciesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScriptCommand = async (
  input: DescribeScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeScript",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScriptInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = async (
  input: DescribeVpcPeeringAuthorizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeVpcPeeringAuthorizations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeVpcPeeringAuthorizationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeVpcPeeringConnectionsCommand = async (
  input: DescribeVpcPeeringConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.DescribeVpcPeeringConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeVpcPeeringConnectionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetComputeAccessCommand = async (
  input: GetComputeAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.GetComputeAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetComputeAccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetComputeAuthTokenCommand = async (
  input: GetComputeAuthTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.GetComputeAuthToken",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetComputeAuthTokenInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetGameSessionLogUrlCommand = async (
  input: GetGameSessionLogUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.GetGameSessionLogUrl",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetGameSessionLogUrlInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceAccessCommand = async (
  input: GetInstanceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.GetInstanceAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceAccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ListAliases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAliasesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBuildsCommand = async (
  input: ListBuildsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ListBuilds",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBuildsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListComputeCommand = async (
  input: ListComputeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ListCompute",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListComputeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ListFleets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFleetsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGameServerGroupsCommand = async (
  input: ListGameServerGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ListGameServerGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGameServerGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGameServersCommand = async (
  input: ListGameServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ListGameServers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGameServersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLocationsCommand = async (
  input: ListLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ListLocations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLocationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListScriptsCommand = async (
  input: ListScriptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ListScripts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListScriptsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutScalingPolicyCommand = async (
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.PutScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterComputeCommand = async (
  input: RegisterComputeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.RegisterCompute",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterComputeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterGameServerCommand = async (
  input: RegisterGameServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.RegisterGameServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterGameServerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RequestUploadCredentialsCommand = async (
  input: RequestUploadCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.RequestUploadCredentials",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RequestUploadCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResolveAliasCommand = async (
  input: ResolveAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ResolveAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResolveAliasInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResumeGameServerGroupCommand = async (
  input: ResumeGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ResumeGameServerGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResumeGameServerGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchGameSessionsCommand = async (
  input: SearchGameSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.SearchGameSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchGameSessionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartFleetActionsCommand = async (
  input: StartFleetActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.StartFleetActions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartFleetActionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartGameSessionPlacementCommand = async (
  input: StartGameSessionPlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.StartGameSessionPlacement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartGameSessionPlacementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartMatchBackfillCommand = async (
  input: StartMatchBackfillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.StartMatchBackfill",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartMatchBackfillInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartMatchmakingCommand = async (
  input: StartMatchmakingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.StartMatchmaking",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartMatchmakingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopFleetActionsCommand = async (
  input: StopFleetActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.StopFleetActions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopFleetActionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopGameSessionPlacementCommand = async (
  input: StopGameSessionPlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.StopGameSessionPlacement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopGameSessionPlacementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopMatchmakingCommand = async (
  input: StopMatchmakingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.StopMatchmaking",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopMatchmakingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SuspendGameServerGroupCommand = async (
  input: SuspendGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.SuspendGameServerGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SuspendGameServerGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.TagResource",
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
    "x-amz-target": "GameLift.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAliasInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBuildCommand = async (
  input: UpdateBuildCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateBuild",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBuildInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateFleetAttributesCommand = async (
  input: UpdateFleetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateFleetAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateFleetAttributesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateFleetCapacityCommand = async (
  input: UpdateFleetCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateFleetCapacity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateFleetCapacityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateFleetPortSettingsCommand = async (
  input: UpdateFleetPortSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateFleetPortSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateFleetPortSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGameServerCommand = async (
  input: UpdateGameServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateGameServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateGameServerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGameServerGroupCommand = async (
  input: UpdateGameServerGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateGameServerGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateGameServerGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGameSessionCommand = async (
  input: UpdateGameSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateGameSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateGameSessionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGameSessionQueueCommand = async (
  input: UpdateGameSessionQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateGameSessionQueue",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateGameSessionQueueInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMatchmakingConfigurationCommand = async (
  input: UpdateMatchmakingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateMatchmakingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMatchmakingConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRuntimeConfigurationCommand = async (
  input: UpdateRuntimeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateRuntimeConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRuntimeConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateScriptCommand = async (
  input: UpdateScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.UpdateScript",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateScriptInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ValidateMatchmakingRuleSetCommand = async (
  input: ValidateMatchmakingRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GameLift.ValidateMatchmakingRuleSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ValidateMatchmakingRuleSetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptMatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptMatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AcceptMatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptMatchOutput(data, context);
  const response: AcceptMatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcceptMatchCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ClaimGameServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimGameServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ClaimGameServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ClaimGameServerOutput(data, context);
  const response: ClaimGameServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ClaimGameServerCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OutOfCapacityException":
    case "com.amazonaws.gamelift#OutOfCapacityException":
      throw await deserializeAws_json1_1OutOfCapacityExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAliasOutput(data, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAliasCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBuildOutput(data, context);
  const response: CreateBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBuildCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFleetOutput(data, context);
  const response: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFleetCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateFleetLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFleetLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFleetLocationsOutput(data, context);
  const response: CreateFleetLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFleetLocationsCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGameServerGroupOutput(data, context);
  const response: CreateGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGameServerGroupCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateGameSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGameSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGameSessionOutput(data, context);
  const response: CreateGameSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGameSessionCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "FleetCapacityExceededException":
    case "com.amazonaws.gamelift#FleetCapacityExceededException":
      throw await deserializeAws_json1_1FleetCapacityExceededExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.gamelift#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateGameSessionQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameSessionQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGameSessionQueueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGameSessionQueueOutput(data, context);
  const response: CreateGameSessionQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGameSessionQueueCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationOutput(data, context);
  const response: CreateLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateMatchmakingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMatchmakingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMatchmakingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMatchmakingConfigurationOutput(data, context);
  const response: CreateMatchmakingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMatchmakingConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateMatchmakingRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMatchmakingRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMatchmakingRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMatchmakingRuleSetOutput(data, context);
  const response: CreateMatchmakingRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMatchmakingRuleSetCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePlayerSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlayerSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePlayerSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePlayerSessionOutput(data, context);
  const response: CreatePlayerSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePlayerSessionCommandError = async (
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
      throw await deserializeAws_json1_1GameSessionFullExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidGameSessionStatusException":
    case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
      throw await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePlayerSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlayerSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePlayerSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePlayerSessionsOutput(data, context);
  const response: CreatePlayerSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePlayerSessionsCommandError = async (
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
      throw await deserializeAws_json1_1GameSessionFullExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidGameSessionStatusException":
    case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
      throw await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateScriptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateScriptOutput(data, context);
  const response: CreateScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateScriptCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcPeeringAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateVpcPeeringAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput(data, context);
  const response: CreateVpcPeeringAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVpcPeeringAuthorizationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateVpcPeeringConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcPeeringConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateVpcPeeringConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVpcPeeringConnectionOutput(data, context);
  const response: CreateVpcPeeringConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVpcPeeringConnectionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAliasCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBuildCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBuildCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFleetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFleetCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteFleetLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFleetLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFleetLocationsOutput(data, context);
  const response: DeleteFleetLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFleetLocationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGameServerGroupOutput(data, context);
  const response: DeleteGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGameServerGroupCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteGameSessionQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGameSessionQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGameSessionQueueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGameSessionQueueOutput(data, context);
  const response: DeleteGameSessionQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGameSessionQueueCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLocationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLocationOutput(data, context);
  const response: DeleteLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLocationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteMatchmakingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMatchmakingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMatchmakingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMatchmakingConfigurationOutput(data, context);
  const response: DeleteMatchmakingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMatchmakingConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteMatchmakingRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMatchmakingRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMatchmakingRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMatchmakingRuleSetOutput(data, context);
  const response: DeleteMatchmakingRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMatchmakingRuleSetCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteScalingPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteScriptCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteScriptCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcPeeringAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteVpcPeeringAuthorizationOutput(data, context);
  const response: DeleteVpcPeeringAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteVpcPeeringConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcPeeringConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteVpcPeeringConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteVpcPeeringConnectionOutput(data, context);
  const response: DeleteVpcPeeringConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVpcPeeringConnectionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterComputeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterComputeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterComputeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterComputeOutput(data, context);
  const response: DeregisterComputeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterComputeCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterGameServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterGameServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterGameServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterGameServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterGameServerCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAliasOutput(data, context);
  const response: DescribeAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAliasCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBuildOutput(data, context);
  const response: DescribeBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBuildCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeComputeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeComputeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeComputeOutput(data, context);
  const response: DescribeComputeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeComputeCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEC2InstanceLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEC2InstanceLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEC2InstanceLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEC2InstanceLimitsOutput(data, context);
  const response: DescribeEC2InstanceLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEC2InstanceLimitsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetAttributesOutput(data, context);
  const response: DescribeFleetAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetAttributesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetCapacityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetCapacityOutput(data, context);
  const response: DescribeFleetCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetCapacityCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetEventsOutput(data, context);
  const response: DescribeFleetEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetEventsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetLocationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetLocationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetLocationAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetLocationAttributesOutput(data, context);
  const response: DescribeFleetLocationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetLocationAttributesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetLocationCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetLocationCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetLocationCapacityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetLocationCapacityOutput(data, context);
  const response: DescribeFleetLocationCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetLocationCapacityCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetLocationUtilizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetLocationUtilizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetLocationUtilizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetLocationUtilizationOutput(data, context);
  const response: DescribeFleetLocationUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetLocationUtilizationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetPortSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetPortSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetPortSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetPortSettingsOutput(data, context);
  const response: DescribeFleetPortSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetPortSettingsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetUtilizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetUtilizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetUtilizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetUtilizationOutput(data, context);
  const response: DescribeFleetUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetUtilizationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeGameServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGameServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGameServerOutput(data, context);
  const response: DescribeGameServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGameServerCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGameServerGroupOutput(data, context);
  const response: DescribeGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGameServerGroupCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeGameServerInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameServerInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGameServerInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGameServerInstancesOutput(data, context);
  const response: DescribeGameServerInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGameServerInstancesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeGameSessionDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGameSessionDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGameSessionDetailsOutput(data, context);
  const response: DescribeGameSessionDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGameSessionDetailsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeGameSessionPlacementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionPlacementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGameSessionPlacementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGameSessionPlacementOutput(data, context);
  const response: DescribeGameSessionPlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGameSessionPlacementCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeGameSessionQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionQueuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGameSessionQueuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGameSessionQueuesOutput(data, context);
  const response: DescribeGameSessionQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGameSessionQueuesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeGameSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGameSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGameSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGameSessionsOutput(data, context);
  const response: DescribeGameSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGameSessionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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
  contents = deserializeAws_json1_1DescribeInstancesOutput(data, context);
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
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMatchmakingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMatchmakingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMatchmakingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMatchmakingOutput(data, context);
  const response: DescribeMatchmakingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMatchmakingCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMatchmakingConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMatchmakingConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput(data, context);
  const response: DescribeMatchmakingConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMatchmakingConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMatchmakingRuleSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMatchmakingRuleSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput(data, context);
  const response: DescribeMatchmakingRuleSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMatchmakingRuleSetsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePlayerSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlayerSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePlayerSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePlayerSessionsOutput(data, context);
  const response: DescribePlayerSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePlayerSessionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRuntimeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuntimeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRuntimeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRuntimeConfigurationOutput(data, context);
  const response: DescribeRuntimeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRuntimeConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeScalingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingPoliciesOutput(data, context);
  const response: DescribeScalingPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalingPoliciesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScriptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScriptOutput(data, context);
  const response: DescribeScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScriptCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcPeeringAuthorizationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput(data, context);
  const response: DescribeVpcPeeringAuthorizationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcPeeringConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeVpcPeeringConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeVpcPeeringConnectionsOutput(data, context);
  const response: DescribeVpcPeeringConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeVpcPeeringConnectionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetComputeAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComputeAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetComputeAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetComputeAccessOutput(data, context);
  const response: GetComputeAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetComputeAccessCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetComputeAuthTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComputeAuthTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetComputeAuthTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetComputeAuthTokenOutput(data, context);
  const response: GetComputeAuthTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetComputeAuthTokenCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetGameSessionLogUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameSessionLogUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetGameSessionLogUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetGameSessionLogUrlOutput(data, context);
  const response: GetGameSessionLogUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetGameSessionLogUrlCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInstanceAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstanceAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceAccessOutput(data, context);
  const response: GetInstanceAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceAccessCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAliasesOutput(data, context);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAliasesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBuildsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuildsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBuildsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBuildsOutput(data, context);
  const response: ListBuildsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBuildsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListComputeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComputeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListComputeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListComputeOutput(data, context);
  const response: ListComputeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListComputeCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFleetsOutput(data, context);
  const response: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFleetsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListGameServerGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGameServerGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGameServerGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGameServerGroupsOutput(data, context);
  const response: ListGameServerGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGameServerGroupsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListGameServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGameServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGameServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGameServersOutput(data, context);
  const response: ListGameServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGameServersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLocationsOutput(data, context);
  const response: ListLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLocationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListScriptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScriptsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListScriptsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListScriptsOutput(data, context);
  const response: ListScriptsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListScriptsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutScalingPolicyOutput(data, context);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutScalingPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterComputeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterComputeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterComputeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterComputeOutput(data, context);
  const response: RegisterComputeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterComputeCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterGameServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterGameServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterGameServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterGameServerOutput(data, context);
  const response: RegisterGameServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterGameServerCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RequestUploadCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestUploadCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RequestUploadCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RequestUploadCredentialsOutput(data, context);
  const response: RequestUploadCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RequestUploadCredentialsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ResolveAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResolveAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResolveAliasOutput(data, context);
  const response: ResolveAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResolveAliasCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ResumeGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResumeGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResumeGameServerGroupOutput(data, context);
  const response: ResumeGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResumeGameServerGroupCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SearchGameSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchGameSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchGameSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchGameSessionsOutput(data, context);
  const response: SearchGameSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchGameSessionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      throw await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartFleetActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFleetActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartFleetActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartFleetActionsOutput(data, context);
  const response: StartFleetActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartFleetActionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartGameSessionPlacementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGameSessionPlacementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartGameSessionPlacementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartGameSessionPlacementOutput(data, context);
  const response: StartGameSessionPlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartGameSessionPlacementCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartMatchBackfillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMatchBackfillCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartMatchBackfillCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMatchBackfillOutput(data, context);
  const response: StartMatchBackfillCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartMatchBackfillCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartMatchmakingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMatchmakingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartMatchmakingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMatchmakingOutput(data, context);
  const response: StartMatchmakingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartMatchmakingCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopFleetActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFleetActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopFleetActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopFleetActionsOutput(data, context);
  const response: StopFleetActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopFleetActionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopGameSessionPlacementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopGameSessionPlacementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopGameSessionPlacementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopGameSessionPlacementOutput(data, context);
  const response: StopGameSessionPlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopGameSessionPlacementCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopMatchmakingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMatchmakingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopMatchmakingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopMatchmakingOutput(data, context);
  const response: StopMatchmakingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopMatchmakingCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SuspendGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SuspendGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SuspendGameServerGroupOutput(data, context);
  const response: SuspendGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SuspendGameServerGroupCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      throw await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAliasOutput(data, context);
  const response: UpdateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAliasCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateBuildCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBuildCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBuildCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBuildOutput(data, context);
  const response: UpdateBuildCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBuildCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateFleetAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateFleetAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFleetAttributesOutput(data, context);
  const response: UpdateFleetAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateFleetAttributesCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateFleetCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateFleetCapacityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFleetCapacityOutput(data, context);
  const response: UpdateFleetCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateFleetCapacityCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateFleetPortSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetPortSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateFleetPortSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFleetPortSettingsOutput(data, context);
  const response: UpdateFleetPortSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateFleetPortSettingsCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateGameServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGameServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGameServerOutput(data, context);
  const response: UpdateGameServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGameServerCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateGameServerGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameServerGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGameServerGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGameServerGroupOutput(data, context);
  const response: UpdateGameServerGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGameServerGroupCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateGameSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGameSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGameSessionOutput(data, context);
  const response: UpdateGameSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGameSessionCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidGameSessionStatusException":
    case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
      throw await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateGameSessionQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameSessionQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGameSessionQueueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGameSessionQueueOutput(data, context);
  const response: UpdateGameSessionQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGameSessionQueueCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateMatchmakingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMatchmakingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMatchmakingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMatchmakingConfigurationOutput(data, context);
  const response: UpdateMatchmakingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMatchmakingConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateRuntimeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuntimeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRuntimeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRuntimeConfigurationOutput(data, context);
  const response: UpdateRuntimeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRuntimeConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      throw await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateScriptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateScriptOutput(data, context);
  const response: UpdateScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateScriptCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      throw await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ValidateMatchmakingRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateMatchmakingRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ValidateMatchmakingRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ValidateMatchmakingRuleSetOutput(data, context);
  const response: ValidateMatchmakingRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ValidateMatchmakingRuleSetCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      throw await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FleetCapacityExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FleetCapacityExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FleetCapacityExceededException(body, context);
  const exception = new FleetCapacityExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1GameSessionFullExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GameSessionFullException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GameSessionFullException(body, context);
  const exception = new GameSessionFullException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidFleetStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFleetStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFleetStatusException(body, context);
  const exception = new InvalidFleetStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGameSessionStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGameSessionStatusException(body, context);
  const exception = new InvalidGameSessionStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OutOfCapacityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OutOfCapacityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OutOfCapacityException(body, context);
  const exception = new OutOfCapacityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TaggingFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaggingFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TaggingFailedException(body, context);
  const exception = new TaggingFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TerminalRoutingStrategyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TerminalRoutingStrategyException(body, context);
  const exception = new TerminalRoutingStrategyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnauthorizedException(body, context);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedRegionException(body, context);
  const exception = new UnsupportedRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AcceptMatchInput = (input: AcceptMatchInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptanceType != null && { AcceptanceType: input.AcceptanceType }),
    ...(input.PlayerIds != null && { PlayerIds: serializeAws_json1_1StringList(input.PlayerIds, context) }),
    ...(input.TicketId != null && { TicketId: input.TicketId }),
  };
};

const serializeAws_json1_1AnywhereConfiguration = (input: AnywhereConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Cost != null && { Cost: input.Cost }),
  };
};

const serializeAws_json1_1AttributeValue = (input: AttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.N != null && { N: __serializeFloat(input.N) }),
    ...(input.S != null && { S: input.S }),
    ...(input.SDM != null && { SDM: serializeAws_json1_1PlayerAttributeStringDoubleMap(input.SDM, context) }),
    ...(input.SL != null && { SL: serializeAws_json1_1PlayerAttributeStringList(input.SL, context) }),
  };
};

const serializeAws_json1_1CertificateConfiguration = (
  input: CertificateConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateType != null && { CertificateType: input.CertificateType }),
  };
};

const serializeAws_json1_1ClaimGameServerInput = (input: ClaimGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerData != null && { GameServerData: input.GameServerData }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId != null && { GameServerId: input.GameServerId }),
  };
};

const serializeAws_json1_1CreateAliasInput = (input: CreateAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoutingStrategy != null && {
      RoutingStrategy: serializeAws_json1_1RoutingStrategy(input.RoutingStrategy, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateBuildInput = (input: CreateBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OperatingSystem != null && { OperatingSystem: input.OperatingSystem }),
    ...(input.ServerSdkVersion != null && { ServerSdkVersion: input.ServerSdkVersion }),
    ...(input.StorageLocation != null && {
      StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1CreateFleetInput = (input: CreateFleetInput, context: __SerdeContext): any => {
  return {
    ...(input.AnywhereConfiguration != null && {
      AnywhereConfiguration: serializeAws_json1_1AnywhereConfiguration(input.AnywhereConfiguration, context),
    }),
    ...(input.BuildId != null && { BuildId: input.BuildId }),
    ...(input.CertificateConfiguration != null && {
      CertificateConfiguration: serializeAws_json1_1CertificateConfiguration(input.CertificateConfiguration, context),
    }),
    ...(input.ComputeType != null && { ComputeType: input.ComputeType }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EC2InboundPermissions != null && {
      EC2InboundPermissions: serializeAws_json1_1IpPermissionsList(input.EC2InboundPermissions, context),
    }),
    ...(input.EC2InstanceType != null && { EC2InstanceType: input.EC2InstanceType }),
    ...(input.FleetType != null && { FleetType: input.FleetType }),
    ...(input.InstanceRoleArn != null && { InstanceRoleArn: input.InstanceRoleArn }),
    ...(input.Locations != null && {
      Locations: serializeAws_json1_1LocationConfigurationList(input.Locations, context),
    }),
    ...(input.LogPaths != null && { LogPaths: serializeAws_json1_1StringList(input.LogPaths, context) }),
    ...(input.MetricGroups != null && {
      MetricGroups: serializeAws_json1_1MetricGroupList(input.MetricGroups, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NewGameSessionProtectionPolicy != null && {
      NewGameSessionProtectionPolicy: input.NewGameSessionProtectionPolicy,
    }),
    ...(input.PeerVpcAwsAccountId != null && { PeerVpcAwsAccountId: input.PeerVpcAwsAccountId }),
    ...(input.PeerVpcId != null && { PeerVpcId: input.PeerVpcId }),
    ...(input.ResourceCreationLimitPolicy != null && {
      ResourceCreationLimitPolicy: serializeAws_json1_1ResourceCreationLimitPolicy(
        input.ResourceCreationLimitPolicy,
        context
      ),
    }),
    ...(input.RuntimeConfiguration != null && {
      RuntimeConfiguration: serializeAws_json1_1RuntimeConfiguration(input.RuntimeConfiguration, context),
    }),
    ...(input.ScriptId != null && { ScriptId: input.ScriptId }),
    ...(input.ServerLaunchParameters != null && { ServerLaunchParameters: input.ServerLaunchParameters }),
    ...(input.ServerLaunchPath != null && { ServerLaunchPath: input.ServerLaunchPath }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateFleetLocationsInput = (
  input: CreateFleetLocationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Locations != null && {
      Locations: serializeAws_json1_1LocationConfigurationList(input.Locations, context),
    }),
  };
};

const serializeAws_json1_1CreateGameServerGroupInput = (
  input: CreateGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingPolicy != null && {
      AutoScalingPolicy: serializeAws_json1_1GameServerGroupAutoScalingPolicy(input.AutoScalingPolicy, context),
    }),
    ...(input.BalancingStrategy != null && { BalancingStrategy: input.BalancingStrategy }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerProtectionPolicy != null && { GameServerProtectionPolicy: input.GameServerProtectionPolicy }),
    ...(input.InstanceDefinitions != null && {
      InstanceDefinitions: serializeAws_json1_1InstanceDefinitions(input.InstanceDefinitions, context),
    }),
    ...(input.LaunchTemplate != null && {
      LaunchTemplate: serializeAws_json1_1LaunchTemplateSpecification(input.LaunchTemplate, context),
    }),
    ...(input.MaxSize != null && { MaxSize: input.MaxSize }),
    ...(input.MinSize != null && { MinSize: input.MinSize }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VpcSubnets != null && { VpcSubnets: serializeAws_json1_1VpcSubnets(input.VpcSubnets, context) }),
  };
};

const serializeAws_json1_1CreateGameSessionInput = (input: CreateGameSessionInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.CreatorId != null && { CreatorId: input.CreatorId }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.GameProperties != null && {
      GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
    }),
    ...(input.GameSessionData != null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.MaximumPlayerSessionCount != null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateGameSessionQueueInput = (
  input: CreateGameSessionQueueInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomEventData != null && { CustomEventData: input.CustomEventData }),
    ...(input.Destinations != null && {
      Destinations: serializeAws_json1_1GameSessionQueueDestinationList(input.Destinations, context),
    }),
    ...(input.FilterConfiguration != null && {
      FilterConfiguration: serializeAws_json1_1FilterConfiguration(input.FilterConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationTarget != null && { NotificationTarget: input.NotificationTarget }),
    ...(input.PlayerLatencyPolicies != null && {
      PlayerLatencyPolicies: serializeAws_json1_1PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context),
    }),
    ...(input.PriorityConfiguration != null && {
      PriorityConfiguration: serializeAws_json1_1PriorityConfiguration(input.PriorityConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TimeoutInSeconds != null && { TimeoutInSeconds: input.TimeoutInSeconds }),
  };
};

const serializeAws_json1_1CreateLocationInput = (input: CreateLocationInput, context: __SerdeContext): any => {
  return {
    ...(input.LocationName != null && { LocationName: input.LocationName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateMatchmakingConfigurationInput = (
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
    ...(input.GameProperties != null && {
      GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
    }),
    ...(input.GameSessionData != null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionQueueArns != null && {
      GameSessionQueueArns: serializeAws_json1_1QueueArnsList(input.GameSessionQueueArns, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationTarget != null && { NotificationTarget: input.NotificationTarget }),
    ...(input.RequestTimeoutSeconds != null && { RequestTimeoutSeconds: input.RequestTimeoutSeconds }),
    ...(input.RuleSetName != null && { RuleSetName: input.RuleSetName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateMatchmakingRuleSetInput = (
  input: CreateMatchmakingRuleSetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RuleSetBody != null && { RuleSetBody: input.RuleSetBody }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreatePlayerSessionInput = (
  input: CreatePlayerSessionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.PlayerData != null && { PlayerData: input.PlayerData }),
    ...(input.PlayerId != null && { PlayerId: input.PlayerId }),
  };
};

const serializeAws_json1_1CreatePlayerSessionsInput = (
  input: CreatePlayerSessionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.PlayerDataMap != null && {
      PlayerDataMap: serializeAws_json1_1PlayerDataMap(input.PlayerDataMap, context),
    }),
    ...(input.PlayerIds != null && { PlayerIds: serializeAws_json1_1PlayerIdList(input.PlayerIds, context) }),
  };
};

const serializeAws_json1_1CreateScriptInput = (input: CreateScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StorageLocation != null && {
      StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Version != null && { Version: input.Version }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

const serializeAws_json1_1CreateVpcPeeringAuthorizationInput = (
  input: CreateVpcPeeringAuthorizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameLiftAwsAccountId != null && { GameLiftAwsAccountId: input.GameLiftAwsAccountId }),
    ...(input.PeerVpcId != null && { PeerVpcId: input.PeerVpcId }),
  };
};

const serializeAws_json1_1CreateVpcPeeringConnectionInput = (
  input: CreateVpcPeeringConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.PeerVpcAwsAccountId != null && { PeerVpcAwsAccountId: input.PeerVpcAwsAccountId }),
    ...(input.PeerVpcId != null && { PeerVpcId: input.PeerVpcId }),
  };
};

const serializeAws_json1_1DeleteAliasInput = (input: DeleteAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
  };
};

const serializeAws_json1_1DeleteBuildInput = (input: DeleteBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId != null && { BuildId: input.BuildId }),
  };
};

const serializeAws_json1_1DeleteFleetInput = (input: DeleteFleetInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

const serializeAws_json1_1DeleteFleetLocationsInput = (
  input: DeleteFleetLocationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Locations != null && { Locations: serializeAws_json1_1LocationList(input.Locations, context) }),
  };
};

const serializeAws_json1_1DeleteGameServerGroupInput = (
  input: DeleteGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeleteOption != null && { DeleteOption: input.DeleteOption }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
  };
};

const serializeAws_json1_1DeleteGameSessionQueueInput = (
  input: DeleteGameSessionQueueInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteLocationInput = (input: DeleteLocationInput, context: __SerdeContext): any => {
  return {
    ...(input.LocationName != null && { LocationName: input.LocationName }),
  };
};

const serializeAws_json1_1DeleteMatchmakingConfigurationInput = (
  input: DeleteMatchmakingConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteMatchmakingRuleSetInput = (
  input: DeleteMatchmakingRuleSetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteScalingPolicyInput = (
  input: DeleteScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteScriptInput = (input: DeleteScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.ScriptId != null && { ScriptId: input.ScriptId }),
  };
};

const serializeAws_json1_1DeleteVpcPeeringAuthorizationInput = (
  input: DeleteVpcPeeringAuthorizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameLiftAwsAccountId != null && { GameLiftAwsAccountId: input.GameLiftAwsAccountId }),
    ...(input.PeerVpcId != null && { PeerVpcId: input.PeerVpcId }),
  };
};

const serializeAws_json1_1DeleteVpcPeeringConnectionInput = (
  input: DeleteVpcPeeringConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.VpcPeeringConnectionId != null && { VpcPeeringConnectionId: input.VpcPeeringConnectionId }),
  };
};

const serializeAws_json1_1DeregisterComputeInput = (input: DeregisterComputeInput, context: __SerdeContext): any => {
  return {
    ...(input.ComputeName != null && { ComputeName: input.ComputeName }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

const serializeAws_json1_1DeregisterGameServerInput = (
  input: DeregisterGameServerInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId != null && { GameServerId: input.GameServerId }),
  };
};

const serializeAws_json1_1DescribeAliasInput = (input: DescribeAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
  };
};

const serializeAws_json1_1DescribeBuildInput = (input: DescribeBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId != null && { BuildId: input.BuildId }),
  };
};

const serializeAws_json1_1DescribeComputeInput = (input: DescribeComputeInput, context: __SerdeContext): any => {
  return {
    ...(input.ComputeName != null && { ComputeName: input.ComputeName }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

const serializeAws_json1_1DescribeEC2InstanceLimitsInput = (
  input: DescribeEC2InstanceLimitsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EC2InstanceType != null && { EC2InstanceType: input.EC2InstanceType }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

const serializeAws_json1_1DescribeFleetAttributesInput = (
  input: DescribeFleetAttributesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetIds != null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFleetCapacityInput = (
  input: DescribeFleetCapacityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetIds != null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFleetEventsInput = (
  input: DescribeFleetEventsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DescribeFleetLocationAttributesInput = (
  input: DescribeFleetLocationAttributesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Locations != null && { Locations: serializeAws_json1_1LocationList(input.Locations, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFleetLocationCapacityInput = (
  input: DescribeFleetLocationCapacityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

const serializeAws_json1_1DescribeFleetLocationUtilizationInput = (
  input: DescribeFleetLocationUtilizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

const serializeAws_json1_1DescribeFleetPortSettingsInput = (
  input: DescribeFleetPortSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

const serializeAws_json1_1DescribeFleetUtilizationInput = (
  input: DescribeFleetUtilizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetIds != null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeGameServerGroupInput = (
  input: DescribeGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
  };
};

const serializeAws_json1_1DescribeGameServerInput = (input: DescribeGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId != null && { GameServerId: input.GameServerId }),
  };
};

const serializeAws_json1_1DescribeGameServerInstancesInput = (
  input: DescribeGameServerInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.InstanceIds != null && {
      InstanceIds: serializeAws_json1_1GameServerInstanceIds(input.InstanceIds, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeGameSessionDetailsInput = (
  input: DescribeGameSessionDetailsInput,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1DescribeGameSessionPlacementInput = (
  input: DescribeGameSessionPlacementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PlacementId != null && { PlacementId: input.PlacementId }),
  };
};

const serializeAws_json1_1DescribeGameSessionQueuesInput = (
  input: DescribeGameSessionQueuesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Names != null && { Names: serializeAws_json1_1GameSessionQueueNameOrArnList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeGameSessionsInput = (
  input: DescribeGameSessionsInput,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1DescribeInstancesInput = (input: DescribeInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeMatchmakingConfigurationsInput = (
  input: DescribeMatchmakingConfigurationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Names != null && { Names: serializeAws_json1_1MatchmakingConfigurationNameList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RuleSetName != null && { RuleSetName: input.RuleSetName }),
  };
};

const serializeAws_json1_1DescribeMatchmakingInput = (
  input: DescribeMatchmakingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TicketIds != null && { TicketIds: serializeAws_json1_1MatchmakingIdList(input.TicketIds, context) }),
  };
};

const serializeAws_json1_1DescribeMatchmakingRuleSetsInput = (
  input: DescribeMatchmakingRuleSetsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Names != null && { Names: serializeAws_json1_1MatchmakingRuleSetNameList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribePlayerSessionsInput = (
  input: DescribePlayerSessionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PlayerId != null && { PlayerId: input.PlayerId }),
    ...(input.PlayerSessionId != null && { PlayerSessionId: input.PlayerSessionId }),
    ...(input.PlayerSessionStatusFilter != null && { PlayerSessionStatusFilter: input.PlayerSessionStatusFilter }),
  };
};

const serializeAws_json1_1DescribeRuntimeConfigurationInput = (
  input: DescribeRuntimeConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

const serializeAws_json1_1DescribeScalingPoliciesInput = (
  input: DescribeScalingPoliciesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StatusFilter != null && { StatusFilter: input.StatusFilter }),
  };
};

const serializeAws_json1_1DescribeScriptInput = (input: DescribeScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.ScriptId != null && { ScriptId: input.ScriptId }),
  };
};

const serializeAws_json1_1DescribeVpcPeeringAuthorizationsInput = (
  input: DescribeVpcPeeringAuthorizationsInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DescribeVpcPeeringConnectionsInput = (
  input: DescribeVpcPeeringConnectionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

const serializeAws_json1_1DesiredPlayerSession = (input: DesiredPlayerSession, context: __SerdeContext): any => {
  return {
    ...(input.PlayerData != null && { PlayerData: input.PlayerData }),
    ...(input.PlayerId != null && { PlayerId: input.PlayerId }),
  };
};

const serializeAws_json1_1DesiredPlayerSessionList = (input: DesiredPlayerSession[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DesiredPlayerSession(entry, context);
    });
};

const serializeAws_json1_1FilterConfiguration = (input: FilterConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowedLocations != null && {
      AllowedLocations: serializeAws_json1_1LocationList(input.AllowedLocations, context),
    }),
  };
};

const serializeAws_json1_1FleetActionList = (input: (FleetAction | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1FleetIdOrArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GameProperty = (input: GameProperty, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1GamePropertyList = (input: GameProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1GameProperty(entry, context);
    });
};

const serializeAws_json1_1GameServerGroupActions = (
  input: (GameServerGroupAction | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GameServerGroupAutoScalingPolicy = (
  input: GameServerGroupAutoScalingPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.EstimatedInstanceWarmup != null && { EstimatedInstanceWarmup: input.EstimatedInstanceWarmup }),
    ...(input.TargetTrackingConfiguration != null && {
      TargetTrackingConfiguration: serializeAws_json1_1TargetTrackingConfiguration(
        input.TargetTrackingConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1GameServerInstanceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GameSessionQueueDestination = (
  input: GameSessionQueueDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationArn != null && { DestinationArn: input.DestinationArn }),
  };
};

const serializeAws_json1_1GameSessionQueueDestinationList = (
  input: GameSessionQueueDestination[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1GameSessionQueueDestination(entry, context);
    });
};

const serializeAws_json1_1GameSessionQueueNameOrArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GetComputeAccessInput = (input: GetComputeAccessInput, context: __SerdeContext): any => {
  return {
    ...(input.ComputeName != null && { ComputeName: input.ComputeName }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

const serializeAws_json1_1GetComputeAuthTokenInput = (
  input: GetComputeAuthTokenInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComputeName != null && { ComputeName: input.ComputeName }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
  };
};

const serializeAws_json1_1GetGameSessionLogUrlInput = (
  input: GetGameSessionLogUrlInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameSessionId != null && { GameSessionId: input.GameSessionId }),
  };
};

const serializeAws_json1_1GetInstanceAccessInput = (input: GetInstanceAccessInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1InstanceDefinition = (input: InstanceDefinition, context: __SerdeContext): any => {
  return {
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.WeightedCapacity != null && { WeightedCapacity: input.WeightedCapacity }),
  };
};

const serializeAws_json1_1InstanceDefinitions = (input: InstanceDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InstanceDefinition(entry, context);
    });
};

const serializeAws_json1_1IpPermission = (input: IpPermission, context: __SerdeContext): any => {
  return {
    ...(input.FromPort != null && { FromPort: input.FromPort }),
    ...(input.IpRange != null && { IpRange: input.IpRange }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.ToPort != null && { ToPort: input.ToPort }),
  };
};

const serializeAws_json1_1IpPermissionsList = (input: IpPermission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1IpPermission(entry, context);
    });
};

const serializeAws_json1_1LatencyMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1LaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.LaunchTemplateId != null && { LaunchTemplateId: input.LaunchTemplateId }),
    ...(input.LaunchTemplateName != null && { LaunchTemplateName: input.LaunchTemplateName }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1ListAliasesInput = (input: ListAliasesInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RoutingStrategyType != null && { RoutingStrategyType: input.RoutingStrategyType }),
  };
};

const serializeAws_json1_1ListBuildsInput = (input: ListBuildsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_1ListComputeInput = (input: ListComputeInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListFleetsInput = (input: ListFleetsInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId != null && { BuildId: input.BuildId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ScriptId != null && { ScriptId: input.ScriptId }),
  };
};

const serializeAws_json1_1ListGameServerGroupsInput = (
  input: ListGameServerGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListGameServersInput = (input: ListGameServersInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1ListLocationsInput = (input: ListLocationsInput, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1LocationFilterList(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListScriptsInput = (input: ListScriptsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1LocationConfiguration = (input: LocationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Location != null && { Location: input.Location }),
  };
};

const serializeAws_json1_1LocationConfigurationList = (
  input: LocationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1LocationConfiguration(entry, context);
    });
};

const serializeAws_json1_1LocationFilterList = (input: (LocationFilter | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1LocationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MatchmakingConfigurationNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MatchmakingIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MatchmakingRuleSetNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MetricGroupList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Player = (input: Player, context: __SerdeContext): any => {
  return {
    ...(input.LatencyInMs != null && { LatencyInMs: serializeAws_json1_1LatencyMap(input.LatencyInMs, context) }),
    ...(input.PlayerAttributes != null && {
      PlayerAttributes: serializeAws_json1_1PlayerAttributeMap(input.PlayerAttributes, context),
    }),
    ...(input.PlayerId != null && { PlayerId: input.PlayerId }),
    ...(input.Team != null && { Team: input.Team }),
  };
};

const serializeAws_json1_1PlayerAttributeMap = (
  input: Record<string, AttributeValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1AttributeValue(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1PlayerAttributeStringDoubleMap = (
  input: Record<string, number>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __serializeFloat(value);
    return acc;
  }, {});
};

const serializeAws_json1_1PlayerAttributeStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PlayerDataMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1PlayerIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PlayerLatency = (input: PlayerLatency, context: __SerdeContext): any => {
  return {
    ...(input.LatencyInMilliseconds != null && {
      LatencyInMilliseconds: __serializeFloat(input.LatencyInMilliseconds),
    }),
    ...(input.PlayerId != null && { PlayerId: input.PlayerId }),
    ...(input.RegionIdentifier != null && { RegionIdentifier: input.RegionIdentifier }),
  };
};

const serializeAws_json1_1PlayerLatencyList = (input: PlayerLatency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PlayerLatency(entry, context);
    });
};

const serializeAws_json1_1PlayerLatencyPolicy = (input: PlayerLatencyPolicy, context: __SerdeContext): any => {
  return {
    ...(input.MaximumIndividualPlayerLatencyMilliseconds != null && {
      MaximumIndividualPlayerLatencyMilliseconds: input.MaximumIndividualPlayerLatencyMilliseconds,
    }),
    ...(input.PolicyDurationSeconds != null && { PolicyDurationSeconds: input.PolicyDurationSeconds }),
  };
};

const serializeAws_json1_1PlayerLatencyPolicyList = (input: PlayerLatencyPolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PlayerLatencyPolicy(entry, context);
    });
};

const serializeAws_json1_1PlayerList = (input: Player[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Player(entry, context);
    });
};

const serializeAws_json1_1PriorityConfiguration = (input: PriorityConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LocationOrder != null && {
      LocationOrder: serializeAws_json1_1LocationList(input.LocationOrder, context),
    }),
    ...(input.PriorityOrder != null && {
      PriorityOrder: serializeAws_json1_1PriorityTypeList(input.PriorityOrder, context),
    }),
  };
};

const serializeAws_json1_1PriorityTypeList = (input: (PriorityType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PutScalingPolicyInput = (input: PutScalingPolicyInput, context: __SerdeContext): any => {
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
      TargetConfiguration: serializeAws_json1_1TargetConfiguration(input.TargetConfiguration, context),
    }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
  };
};

const serializeAws_json1_1QueueArnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RegisterComputeInput = (input: RegisterComputeInput, context: __SerdeContext): any => {
  return {
    ...(input.CertificatePath != null && { CertificatePath: input.CertificatePath }),
    ...(input.ComputeName != null && { ComputeName: input.ComputeName }),
    ...(input.DnsName != null && { DnsName: input.DnsName }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

const serializeAws_json1_1RegisterGameServerInput = (input: RegisterGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionInfo != null && { ConnectionInfo: input.ConnectionInfo }),
    ...(input.GameServerData != null && { GameServerData: input.GameServerData }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId != null && { GameServerId: input.GameServerId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1RequestUploadCredentialsInput = (
  input: RequestUploadCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BuildId != null && { BuildId: input.BuildId }),
  };
};

const serializeAws_json1_1ResolveAliasInput = (input: ResolveAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
  };
};

const serializeAws_json1_1ResourceCreationLimitPolicy = (
  input: ResourceCreationLimitPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.NewGameSessionsPerCreator != null && { NewGameSessionsPerCreator: input.NewGameSessionsPerCreator }),
    ...(input.PolicyPeriodInMinutes != null && { PolicyPeriodInMinutes: input.PolicyPeriodInMinutes }),
  };
};

const serializeAws_json1_1ResumeGameServerGroupInput = (
  input: ResumeGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.ResumeActions != null && {
      ResumeActions: serializeAws_json1_1GameServerGroupActions(input.ResumeActions, context),
    }),
  };
};

const serializeAws_json1_1RoutingStrategy = (input: RoutingStrategy, context: __SerdeContext): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Message != null && { Message: input.Message }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1RuntimeConfiguration = (input: RuntimeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.GameSessionActivationTimeoutSeconds != null && {
      GameSessionActivationTimeoutSeconds: input.GameSessionActivationTimeoutSeconds,
    }),
    ...(input.MaxConcurrentGameSessionActivations != null && {
      MaxConcurrentGameSessionActivations: input.MaxConcurrentGameSessionActivations,
    }),
    ...(input.ServerProcesses != null && {
      ServerProcesses: serializeAws_json1_1ServerProcessList(input.ServerProcesses, context),
    }),
  };
};

const serializeAws_json1_1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.ObjectVersion != null && { ObjectVersion: input.ObjectVersion }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1SearchGameSessionsInput = (input: SearchGameSessionsInput, context: __SerdeContext): any => {
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

const serializeAws_json1_1ServerProcess = (input: ServerProcess, context: __SerdeContext): any => {
  return {
    ...(input.ConcurrentExecutions != null && { ConcurrentExecutions: input.ConcurrentExecutions }),
    ...(input.LaunchPath != null && { LaunchPath: input.LaunchPath }),
    ...(input.Parameters != null && { Parameters: input.Parameters }),
  };
};

const serializeAws_json1_1ServerProcessList = (input: ServerProcess[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ServerProcess(entry, context);
    });
};

const serializeAws_json1_1StartFleetActionsInput = (input: StartFleetActionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: serializeAws_json1_1FleetActionList(input.Actions, context) }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

const serializeAws_json1_1StartGameSessionPlacementInput = (
  input: StartGameSessionPlacementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DesiredPlayerSessions != null && {
      DesiredPlayerSessions: serializeAws_json1_1DesiredPlayerSessionList(input.DesiredPlayerSessions, context),
    }),
    ...(input.GameProperties != null && {
      GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
    }),
    ...(input.GameSessionData != null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionName != null && { GameSessionName: input.GameSessionName }),
    ...(input.GameSessionQueueName != null && { GameSessionQueueName: input.GameSessionQueueName }),
    ...(input.MaximumPlayerSessionCount != null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
    ...(input.PlacementId != null && { PlacementId: input.PlacementId }),
    ...(input.PlayerLatencies != null && {
      PlayerLatencies: serializeAws_json1_1PlayerLatencyList(input.PlayerLatencies, context),
    }),
  };
};

const serializeAws_json1_1StartMatchBackfillInput = (input: StartMatchBackfillInput, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationName != null && { ConfigurationName: input.ConfigurationName }),
    ...(input.GameSessionArn != null && { GameSessionArn: input.GameSessionArn }),
    ...(input.Players != null && { Players: serializeAws_json1_1PlayerList(input.Players, context) }),
    ...(input.TicketId != null && { TicketId: input.TicketId }),
  };
};

const serializeAws_json1_1StartMatchmakingInput = (input: StartMatchmakingInput, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationName != null && { ConfigurationName: input.ConfigurationName }),
    ...(input.Players != null && { Players: serializeAws_json1_1PlayerList(input.Players, context) }),
    ...(input.TicketId != null && { TicketId: input.TicketId }),
  };
};

const serializeAws_json1_1StopFleetActionsInput = (input: StopFleetActionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: serializeAws_json1_1FleetActionList(input.Actions, context) }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

const serializeAws_json1_1StopGameSessionPlacementInput = (
  input: StopGameSessionPlacementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PlacementId != null && { PlacementId: input.PlacementId }),
  };
};

const serializeAws_json1_1StopMatchmakingInput = (input: StopMatchmakingInput, context: __SerdeContext): any => {
  return {
    ...(input.TicketId != null && { TicketId: input.TicketId }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SuspendGameServerGroupInput = (
  input: SuspendGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.SuspendActions != null && {
      SuspendActions: serializeAws_json1_1GameServerGroupActions(input.SuspendActions, context),
    }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TargetConfiguration = (input: TargetConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.TargetValue != null && { TargetValue: __serializeFloat(input.TargetValue) }),
  };
};

const serializeAws_json1_1TargetTrackingConfiguration = (
  input: TargetTrackingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetValue != null && { TargetValue: __serializeFloat(input.TargetValue) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAliasInput = (input: UpdateAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoutingStrategy != null && {
      RoutingStrategy: serializeAws_json1_1RoutingStrategy(input.RoutingStrategy, context),
    }),
  };
};

const serializeAws_json1_1UpdateBuildInput = (input: UpdateBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId != null && { BuildId: input.BuildId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1UpdateFleetAttributesInput = (
  input: UpdateFleetAttributesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnywhereConfiguration != null && {
      AnywhereConfiguration: serializeAws_json1_1AnywhereConfiguration(input.AnywhereConfiguration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.MetricGroups != null && {
      MetricGroups: serializeAws_json1_1MetricGroupList(input.MetricGroups, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NewGameSessionProtectionPolicy != null && {
      NewGameSessionProtectionPolicy: input.NewGameSessionProtectionPolicy,
    }),
    ...(input.ResourceCreationLimitPolicy != null && {
      ResourceCreationLimitPolicy: serializeAws_json1_1ResourceCreationLimitPolicy(
        input.ResourceCreationLimitPolicy,
        context
      ),
    }),
  };
};

const serializeAws_json1_1UpdateFleetCapacityInput = (
  input: UpdateFleetCapacityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DesiredInstances != null && { DesiredInstances: input.DesiredInstances }),
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.MaxSize != null && { MaxSize: input.MaxSize }),
    ...(input.MinSize != null && { MinSize: input.MinSize }),
  };
};

const serializeAws_json1_1UpdateFleetPortSettingsInput = (
  input: UpdateFleetPortSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.InboundPermissionAuthorizations != null && {
      InboundPermissionAuthorizations: serializeAws_json1_1IpPermissionsList(
        input.InboundPermissionAuthorizations,
        context
      ),
    }),
    ...(input.InboundPermissionRevocations != null && {
      InboundPermissionRevocations: serializeAws_json1_1IpPermissionsList(input.InboundPermissionRevocations, context),
    }),
  };
};

const serializeAws_json1_1UpdateGameServerGroupInput = (
  input: UpdateGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BalancingStrategy != null && { BalancingStrategy: input.BalancingStrategy }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerProtectionPolicy != null && { GameServerProtectionPolicy: input.GameServerProtectionPolicy }),
    ...(input.InstanceDefinitions != null && {
      InstanceDefinitions: serializeAws_json1_1InstanceDefinitions(input.InstanceDefinitions, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1UpdateGameServerInput = (input: UpdateGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerData != null && { GameServerData: input.GameServerData }),
    ...(input.GameServerGroupName != null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId != null && { GameServerId: input.GameServerId }),
    ...(input.HealthCheck != null && { HealthCheck: input.HealthCheck }),
    ...(input.UtilizationStatus != null && { UtilizationStatus: input.UtilizationStatus }),
  };
};

const serializeAws_json1_1UpdateGameSessionInput = (input: UpdateGameSessionInput, context: __SerdeContext): any => {
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

const serializeAws_json1_1UpdateGameSessionQueueInput = (
  input: UpdateGameSessionQueueInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomEventData != null && { CustomEventData: input.CustomEventData }),
    ...(input.Destinations != null && {
      Destinations: serializeAws_json1_1GameSessionQueueDestinationList(input.Destinations, context),
    }),
    ...(input.FilterConfiguration != null && {
      FilterConfiguration: serializeAws_json1_1FilterConfiguration(input.FilterConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationTarget != null && { NotificationTarget: input.NotificationTarget }),
    ...(input.PlayerLatencyPolicies != null && {
      PlayerLatencyPolicies: serializeAws_json1_1PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context),
    }),
    ...(input.PriorityConfiguration != null && {
      PriorityConfiguration: serializeAws_json1_1PriorityConfiguration(input.PriorityConfiguration, context),
    }),
    ...(input.TimeoutInSeconds != null && { TimeoutInSeconds: input.TimeoutInSeconds }),
  };
};

const serializeAws_json1_1UpdateMatchmakingConfigurationInput = (
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
    ...(input.GameProperties != null && {
      GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
    }),
    ...(input.GameSessionData != null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionQueueArns != null && {
      GameSessionQueueArns: serializeAws_json1_1QueueArnsList(input.GameSessionQueueArns, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationTarget != null && { NotificationTarget: input.NotificationTarget }),
    ...(input.RequestTimeoutSeconds != null && { RequestTimeoutSeconds: input.RequestTimeoutSeconds }),
    ...(input.RuleSetName != null && { RuleSetName: input.RuleSetName }),
  };
};

const serializeAws_json1_1UpdateRuntimeConfigurationInput = (
  input: UpdateRuntimeConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId != null && { FleetId: input.FleetId }),
    ...(input.RuntimeConfiguration != null && {
      RuntimeConfiguration: serializeAws_json1_1RuntimeConfiguration(input.RuntimeConfiguration, context),
    }),
  };
};

const serializeAws_json1_1UpdateScriptInput = (input: UpdateScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ScriptId != null && { ScriptId: input.ScriptId }),
    ...(input.StorageLocation != null && {
      StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
    }),
    ...(input.Version != null && { Version: input.Version }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

const serializeAws_json1_1ValidateMatchmakingRuleSetInput = (
  input: ValidateMatchmakingRuleSetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RuleSetBody != null && { RuleSetBody: input.RuleSetBody }),
  };
};

const serializeAws_json1_1VpcSubnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_1AcceptMatchOutput = (output: any, context: __SerdeContext): AcceptMatchOutput => {
  return {} as any;
};

const deserializeAws_json1_1Alias = (output: any, context: __SerdeContext): Alias => {
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
    RoutingStrategy:
      output.RoutingStrategy != null
        ? deserializeAws_json1_1RoutingStrategy(output.RoutingStrategy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AliasList = (output: any, context: __SerdeContext): Alias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Alias(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AnywhereConfiguration = (output: any, context: __SerdeContext): AnywhereConfiguration => {
  return {
    Cost: __expectString(output.Cost),
  } as any;
};

const deserializeAws_json1_1AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  return {
    N: __limitedParseDouble(output.N),
    S: __expectString(output.S),
    SDM: output.SDM != null ? deserializeAws_json1_1PlayerAttributeStringDoubleMap(output.SDM, context) : undefined,
    SL: output.SL != null ? deserializeAws_json1_1PlayerAttributeStringList(output.SL, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AwsCredentials = (output: any, context: __SerdeContext): AwsCredentials => {
  return {
    AccessKeyId: __expectString(output.AccessKeyId),
    SecretAccessKey: __expectString(output.SecretAccessKey),
    SessionToken: __expectString(output.SessionToken),
  } as any;
};

const deserializeAws_json1_1Build = (output: any, context: __SerdeContext): Build => {
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

const deserializeAws_json1_1BuildList = (output: any, context: __SerdeContext): Build[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Build(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CertificateConfiguration = (
  output: any,
  context: __SerdeContext
): CertificateConfiguration => {
  return {
    CertificateType: __expectString(output.CertificateType),
  } as any;
};

const deserializeAws_json1_1ClaimGameServerOutput = (output: any, context: __SerdeContext): ClaimGameServerOutput => {
  return {
    GameServer: output.GameServer != null ? deserializeAws_json1_1GameServer(output.GameServer, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Compute = (output: any, context: __SerdeContext): Compute => {
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

const deserializeAws_json1_1ComputeList = (output: any, context: __SerdeContext): Compute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Compute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateAliasOutput = (output: any, context: __SerdeContext): CreateAliasOutput => {
  return {
    Alias: output.Alias != null ? deserializeAws_json1_1Alias(output.Alias, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateBuildOutput = (output: any, context: __SerdeContext): CreateBuildOutput => {
  return {
    Build: output.Build != null ? deserializeAws_json1_1Build(output.Build, context) : undefined,
    StorageLocation:
      output.StorageLocation != null ? deserializeAws_json1_1S3Location(output.StorageLocation, context) : undefined,
    UploadCredentials:
      output.UploadCredentials != null
        ? deserializeAws_json1_1AwsCredentials(output.UploadCredentials, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFleetLocationsOutput = (
  output: any,
  context: __SerdeContext
): CreateFleetLocationsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    LocationStates:
      output.LocationStates != null
        ? deserializeAws_json1_1LocationStateList(output.LocationStates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFleetOutput = (output: any, context: __SerdeContext): CreateFleetOutput => {
  return {
    FleetAttributes:
      output.FleetAttributes != null
        ? deserializeAws_json1_1FleetAttributes(output.FleetAttributes, context)
        : undefined,
    LocationStates:
      output.LocationStates != null
        ? deserializeAws_json1_1LocationStateList(output.LocationStates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateGameServerGroupOutput = (
  output: any,
  context: __SerdeContext
): CreateGameServerGroupOutput => {
  return {
    GameServerGroup:
      output.GameServerGroup != null
        ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateGameSessionOutput = (
  output: any,
  context: __SerdeContext
): CreateGameSessionOutput => {
  return {
    GameSession:
      output.GameSession != null ? deserializeAws_json1_1GameSession(output.GameSession, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateGameSessionQueueOutput = (
  output: any,
  context: __SerdeContext
): CreateGameSessionQueueOutput => {
  return {
    GameSessionQueue:
      output.GameSessionQueue != null
        ? deserializeAws_json1_1GameSessionQueue(output.GameSessionQueue, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateLocationOutput = (output: any, context: __SerdeContext): CreateLocationOutput => {
  return {
    Location: output.Location != null ? deserializeAws_json1_1LocationModel(output.Location, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateMatchmakingConfigurationOutput = (
  output: any,
  context: __SerdeContext
): CreateMatchmakingConfigurationOutput => {
  return {
    Configuration:
      output.Configuration != null
        ? deserializeAws_json1_1MatchmakingConfiguration(output.Configuration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateMatchmakingRuleSetOutput = (
  output: any,
  context: __SerdeContext
): CreateMatchmakingRuleSetOutput => {
  return {
    RuleSet: output.RuleSet != null ? deserializeAws_json1_1MatchmakingRuleSet(output.RuleSet, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreatePlayerSessionOutput = (
  output: any,
  context: __SerdeContext
): CreatePlayerSessionOutput => {
  return {
    PlayerSession:
      output.PlayerSession != null ? deserializeAws_json1_1PlayerSession(output.PlayerSession, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreatePlayerSessionsOutput = (
  output: any,
  context: __SerdeContext
): CreatePlayerSessionsOutput => {
  return {
    PlayerSessions:
      output.PlayerSessions != null
        ? deserializeAws_json1_1PlayerSessionList(output.PlayerSessions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateScriptOutput = (output: any, context: __SerdeContext): CreateScriptOutput => {
  return {
    Script: output.Script != null ? deserializeAws_json1_1Script(output.Script, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput = (
  output: any,
  context: __SerdeContext
): CreateVpcPeeringAuthorizationOutput => {
  return {
    VpcPeeringAuthorization:
      output.VpcPeeringAuthorization != null
        ? deserializeAws_json1_1VpcPeeringAuthorization(output.VpcPeeringAuthorization, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVpcPeeringConnectionOutput = (
  output: any,
  context: __SerdeContext
): CreateVpcPeeringConnectionOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteFleetLocationsOutput = (
  output: any,
  context: __SerdeContext
): DeleteFleetLocationsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    LocationStates:
      output.LocationStates != null
        ? deserializeAws_json1_1LocationStateList(output.LocationStates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteGameServerGroupOutput = (
  output: any,
  context: __SerdeContext
): DeleteGameServerGroupOutput => {
  return {
    GameServerGroup:
      output.GameServerGroup != null
        ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteGameSessionQueueOutput = (
  output: any,
  context: __SerdeContext
): DeleteGameSessionQueueOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteLocationOutput = (output: any, context: __SerdeContext): DeleteLocationOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteMatchmakingConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DeleteMatchmakingConfigurationOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteMatchmakingRuleSetOutput = (
  output: any,
  context: __SerdeContext
): DeleteMatchmakingRuleSetOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteVpcPeeringAuthorizationOutput = (
  output: any,
  context: __SerdeContext
): DeleteVpcPeeringAuthorizationOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteVpcPeeringConnectionOutput = (
  output: any,
  context: __SerdeContext
): DeleteVpcPeeringConnectionOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterComputeOutput = (
  output: any,
  context: __SerdeContext
): DeregisterComputeOutput => {
  return {} as any;
};

const deserializeAws_json1_1DescribeAliasOutput = (output: any, context: __SerdeContext): DescribeAliasOutput => {
  return {
    Alias: output.Alias != null ? deserializeAws_json1_1Alias(output.Alias, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeBuildOutput = (output: any, context: __SerdeContext): DescribeBuildOutput => {
  return {
    Build: output.Build != null ? deserializeAws_json1_1Build(output.Build, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeComputeOutput = (output: any, context: __SerdeContext): DescribeComputeOutput => {
  return {
    Compute: output.Compute != null ? deserializeAws_json1_1Compute(output.Compute, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEC2InstanceLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeEC2InstanceLimitsOutput => {
  return {
    EC2InstanceLimits:
      output.EC2InstanceLimits != null
        ? deserializeAws_json1_1EC2InstanceLimitList(output.EC2InstanceLimits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFleetAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetAttributesOutput => {
  return {
    FleetAttributes:
      output.FleetAttributes != null
        ? deserializeAws_json1_1FleetAttributesList(output.FleetAttributes, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFleetCapacityOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetCapacityOutput => {
  return {
    FleetCapacity:
      output.FleetCapacity != null ? deserializeAws_json1_1FleetCapacityList(output.FleetCapacity, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFleetEventsOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetEventsOutput => {
  return {
    Events: output.Events != null ? deserializeAws_json1_1EventList(output.Events, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFleetLocationAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetLocationAttributesOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    LocationAttributes:
      output.LocationAttributes != null
        ? deserializeAws_json1_1LocationAttributesList(output.LocationAttributes, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFleetLocationCapacityOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetLocationCapacityOutput => {
  return {
    FleetCapacity:
      output.FleetCapacity != null ? deserializeAws_json1_1FleetCapacity(output.FleetCapacity, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFleetLocationUtilizationOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetLocationUtilizationOutput => {
  return {
    FleetUtilization:
      output.FleetUtilization != null
        ? deserializeAws_json1_1FleetUtilization(output.FleetUtilization, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFleetPortSettingsOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetPortSettingsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    InboundPermissions:
      output.InboundPermissions != null
        ? deserializeAws_json1_1IpPermissionsList(output.InboundPermissions, context)
        : undefined,
    Location: __expectString(output.Location),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

const deserializeAws_json1_1DescribeFleetUtilizationOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetUtilizationOutput => {
  return {
    FleetUtilization:
      output.FleetUtilization != null
        ? deserializeAws_json1_1FleetUtilizationList(output.FleetUtilization, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeGameServerGroupOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameServerGroupOutput => {
  return {
    GameServerGroup:
      output.GameServerGroup != null
        ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeGameServerInstancesOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameServerInstancesOutput => {
  return {
    GameServerInstances:
      output.GameServerInstances != null
        ? deserializeAws_json1_1GameServerInstances(output.GameServerInstances, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeGameServerOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameServerOutput => {
  return {
    GameServer: output.GameServer != null ? deserializeAws_json1_1GameServer(output.GameServer, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeGameSessionDetailsOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameSessionDetailsOutput => {
  return {
    GameSessionDetails:
      output.GameSessionDetails != null
        ? deserializeAws_json1_1GameSessionDetailList(output.GameSessionDetails, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeGameSessionPlacementOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameSessionPlacementOutput => {
  return {
    GameSessionPlacement:
      output.GameSessionPlacement != null
        ? deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeGameSessionQueuesOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameSessionQueuesOutput => {
  return {
    GameSessionQueues:
      output.GameSessionQueues != null
        ? deserializeAws_json1_1GameSessionQueueList(output.GameSessionQueues, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeGameSessionsOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameSessionsOutput => {
  return {
    GameSessions:
      output.GameSessions != null ? deserializeAws_json1_1GameSessionList(output.GameSessions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeInstancesOutput = (
  output: any,
  context: __SerdeContext
): DescribeInstancesOutput => {
  return {
    Instances: output.Instances != null ? deserializeAws_json1_1InstanceList(output.Instances, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMatchmakingConfigurationsOutput => {
  return {
    Configurations:
      output.Configurations != null
        ? deserializeAws_json1_1MatchmakingConfigurationList(output.Configurations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeMatchmakingOutput = (
  output: any,
  context: __SerdeContext
): DescribeMatchmakingOutput => {
  return {
    TicketList:
      output.TicketList != null ? deserializeAws_json1_1MatchmakingTicketList(output.TicketList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMatchmakingRuleSetsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    RuleSets:
      output.RuleSets != null ? deserializeAws_json1_1MatchmakingRuleSetList(output.RuleSets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePlayerSessionsOutput = (
  output: any,
  context: __SerdeContext
): DescribePlayerSessionsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    PlayerSessions:
      output.PlayerSessions != null
        ? deserializeAws_json1_1PlayerSessionList(output.PlayerSessions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRuntimeConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DescribeRuntimeConfigurationOutput => {
  return {
    RuntimeConfiguration:
      output.RuntimeConfiguration != null
        ? deserializeAws_json1_1RuntimeConfiguration(output.RuntimeConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeScalingPoliciesOutput = (
  output: any,
  context: __SerdeContext
): DescribeScalingPoliciesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalingPolicies:
      output.ScalingPolicies != null
        ? deserializeAws_json1_1ScalingPolicyList(output.ScalingPolicies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeScriptOutput = (output: any, context: __SerdeContext): DescribeScriptOutput => {
  return {
    Script: output.Script != null ? deserializeAws_json1_1Script(output.Script, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeVpcPeeringAuthorizationsOutput => {
  return {
    VpcPeeringAuthorizations:
      output.VpcPeeringAuthorizations != null
        ? deserializeAws_json1_1VpcPeeringAuthorizationList(output.VpcPeeringAuthorizations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeVpcPeeringConnectionsOutput = (
  output: any,
  context: __SerdeContext
): DescribeVpcPeeringConnectionsOutput => {
  return {
    VpcPeeringConnections:
      output.VpcPeeringConnections != null
        ? deserializeAws_json1_1VpcPeeringConnectionList(output.VpcPeeringConnections, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2InstanceCounts = (output: any, context: __SerdeContext): EC2InstanceCounts => {
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

const deserializeAws_json1_1EC2InstanceLimit = (output: any, context: __SerdeContext): EC2InstanceLimit => {
  return {
    CurrentInstances: __expectInt32(output.CurrentInstances),
    EC2InstanceType: __expectString(output.EC2InstanceType),
    InstanceLimit: __expectInt32(output.InstanceLimit),
    Location: __expectString(output.Location),
  } as any;
};

const deserializeAws_json1_1EC2InstanceLimitList = (output: any, context: __SerdeContext): EC2InstanceLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EC2InstanceLimit(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Event = (output: any, context: __SerdeContext): Event => {
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

const deserializeAws_json1_1EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Event(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FilterConfiguration = (output: any, context: __SerdeContext): FilterConfiguration => {
  return {
    AllowedLocations:
      output.AllowedLocations != null
        ? deserializeAws_json1_1LocationList(output.AllowedLocations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FleetActionList = (output: any, context: __SerdeContext): (FleetAction | string)[] => {
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

const deserializeAws_json1_1FleetAttributes = (output: any, context: __SerdeContext): FleetAttributes => {
  return {
    AnywhereConfiguration:
      output.AnywhereConfiguration != null
        ? deserializeAws_json1_1AnywhereConfiguration(output.AnywhereConfiguration, context)
        : undefined,
    BuildArn: __expectString(output.BuildArn),
    BuildId: __expectString(output.BuildId),
    CertificateConfiguration:
      output.CertificateConfiguration != null
        ? deserializeAws_json1_1CertificateConfiguration(output.CertificateConfiguration, context)
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
    LogPaths: output.LogPaths != null ? deserializeAws_json1_1StringList(output.LogPaths, context) : undefined,
    MetricGroups:
      output.MetricGroups != null ? deserializeAws_json1_1MetricGroupList(output.MetricGroups, context) : undefined,
    Name: __expectString(output.Name),
    NewGameSessionProtectionPolicy: __expectString(output.NewGameSessionProtectionPolicy),
    OperatingSystem: __expectString(output.OperatingSystem),
    ResourceCreationLimitPolicy:
      output.ResourceCreationLimitPolicy != null
        ? deserializeAws_json1_1ResourceCreationLimitPolicy(output.ResourceCreationLimitPolicy, context)
        : undefined,
    ScriptArn: __expectString(output.ScriptArn),
    ScriptId: __expectString(output.ScriptId),
    ServerLaunchParameters: __expectString(output.ServerLaunchParameters),
    ServerLaunchPath: __expectString(output.ServerLaunchPath),
    Status: __expectString(output.Status),
    StoppedActions:
      output.StoppedActions != null ? deserializeAws_json1_1FleetActionList(output.StoppedActions, context) : undefined,
    TerminationTime:
      output.TerminationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TerminationTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1FleetAttributesList = (output: any, context: __SerdeContext): FleetAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FleetAttributes(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FleetCapacity = (output: any, context: __SerdeContext): FleetCapacity => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    InstanceCounts:
      output.InstanceCounts != null
        ? deserializeAws_json1_1EC2InstanceCounts(output.InstanceCounts, context)
        : undefined,
    InstanceType: __expectString(output.InstanceType),
    Location: __expectString(output.Location),
  } as any;
};

const deserializeAws_json1_1FleetCapacityExceededException = (
  output: any,
  context: __SerdeContext
): FleetCapacityExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1FleetCapacityList = (output: any, context: __SerdeContext): FleetCapacity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FleetCapacity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FleetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1FleetUtilization = (output: any, context: __SerdeContext): FleetUtilization => {
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

const deserializeAws_json1_1FleetUtilizationList = (output: any, context: __SerdeContext): FleetUtilization[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FleetUtilization(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GameProperty = (output: any, context: __SerdeContext): GameProperty => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1GamePropertyList = (output: any, context: __SerdeContext): GameProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameProperty(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GameServer = (output: any, context: __SerdeContext): GameServer => {
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

const deserializeAws_json1_1GameServerGroup = (output: any, context: __SerdeContext): GameServerGroup => {
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
      output.InstanceDefinitions != null
        ? deserializeAws_json1_1InstanceDefinitions(output.InstanceDefinitions, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
    SuspendedActions:
      output.SuspendedActions != null
        ? deserializeAws_json1_1GameServerGroupActions(output.SuspendedActions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GameServerGroupActions = (
  output: any,
  context: __SerdeContext
): (GameServerGroupAction | string)[] => {
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

const deserializeAws_json1_1GameServerGroups = (output: any, context: __SerdeContext): GameServerGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameServerGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GameServerInstance = (output: any, context: __SerdeContext): GameServerInstance => {
  return {
    GameServerGroupArn: __expectString(output.GameServerGroupArn),
    GameServerGroupName: __expectString(output.GameServerGroupName),
    InstanceId: __expectString(output.InstanceId),
    InstanceStatus: __expectString(output.InstanceStatus),
  } as any;
};

const deserializeAws_json1_1GameServerInstances = (output: any, context: __SerdeContext): GameServerInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameServerInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GameServers = (output: any, context: __SerdeContext): GameServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameServer(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GameSession = (output: any, context: __SerdeContext): GameSession => {
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
    GameProperties:
      output.GameProperties != null
        ? deserializeAws_json1_1GamePropertyList(output.GameProperties, context)
        : undefined,
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

const deserializeAws_json1_1GameSessionConnectionInfo = (
  output: any,
  context: __SerdeContext
): GameSessionConnectionInfo => {
  return {
    DnsName: __expectString(output.DnsName),
    GameSessionArn: __expectString(output.GameSessionArn),
    IpAddress: __expectString(output.IpAddress),
    MatchedPlayerSessions:
      output.MatchedPlayerSessions != null
        ? deserializeAws_json1_1MatchedPlayerSessionList(output.MatchedPlayerSessions, context)
        : undefined,
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_json1_1GameSessionDetail = (output: any, context: __SerdeContext): GameSessionDetail => {
  return {
    GameSession:
      output.GameSession != null ? deserializeAws_json1_1GameSession(output.GameSession, context) : undefined,
    ProtectionPolicy: __expectString(output.ProtectionPolicy),
  } as any;
};

const deserializeAws_json1_1GameSessionDetailList = (output: any, context: __SerdeContext): GameSessionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameSessionDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GameSessionFullException = (
  output: any,
  context: __SerdeContext
): GameSessionFullException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GameSessionList = (output: any, context: __SerdeContext): GameSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameSession(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GameSessionPlacement = (output: any, context: __SerdeContext): GameSessionPlacement => {
  return {
    DnsName: __expectString(output.DnsName),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    GameProperties:
      output.GameProperties != null
        ? deserializeAws_json1_1GamePropertyList(output.GameProperties, context)
        : undefined,
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
        ? deserializeAws_json1_1PlacedPlayerSessionList(output.PlacedPlayerSessions, context)
        : undefined,
    PlacementId: __expectString(output.PlacementId),
    PlayerLatencies:
      output.PlayerLatencies != null
        ? deserializeAws_json1_1PlayerLatencyList(output.PlayerLatencies, context)
        : undefined,
    Port: __expectInt32(output.Port),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1GameSessionQueue = (output: any, context: __SerdeContext): GameSessionQueue => {
  return {
    CustomEventData: __expectString(output.CustomEventData),
    Destinations:
      output.Destinations != null
        ? deserializeAws_json1_1GameSessionQueueDestinationList(output.Destinations, context)
        : undefined,
    FilterConfiguration:
      output.FilterConfiguration != null
        ? deserializeAws_json1_1FilterConfiguration(output.FilterConfiguration, context)
        : undefined,
    GameSessionQueueArn: __expectString(output.GameSessionQueueArn),
    Name: __expectString(output.Name),
    NotificationTarget: __expectString(output.NotificationTarget),
    PlayerLatencyPolicies:
      output.PlayerLatencyPolicies != null
        ? deserializeAws_json1_1PlayerLatencyPolicyList(output.PlayerLatencyPolicies, context)
        : undefined,
    PriorityConfiguration:
      output.PriorityConfiguration != null
        ? deserializeAws_json1_1PriorityConfiguration(output.PriorityConfiguration, context)
        : undefined,
    TimeoutInSeconds: __expectInt32(output.TimeoutInSeconds),
  } as any;
};

const deserializeAws_json1_1GameSessionQueueDestination = (
  output: any,
  context: __SerdeContext
): GameSessionQueueDestination => {
  return {
    DestinationArn: __expectString(output.DestinationArn),
  } as any;
};

const deserializeAws_json1_1GameSessionQueueDestinationList = (
  output: any,
  context: __SerdeContext
): GameSessionQueueDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameSessionQueueDestination(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GameSessionQueueList = (output: any, context: __SerdeContext): GameSessionQueue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameSessionQueue(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetComputeAccessOutput = (output: any, context: __SerdeContext): GetComputeAccessOutput => {
  return {
    ComputeArn: __expectString(output.ComputeArn),
    ComputeName: __expectString(output.ComputeName),
    Credentials:
      output.Credentials != null ? deserializeAws_json1_1AwsCredentials(output.Credentials, context) : undefined,
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

const deserializeAws_json1_1GetComputeAuthTokenOutput = (
  output: any,
  context: __SerdeContext
): GetComputeAuthTokenOutput => {
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

const deserializeAws_json1_1GetGameSessionLogUrlOutput = (
  output: any,
  context: __SerdeContext
): GetGameSessionLogUrlOutput => {
  return {
    PreSignedUrl: __expectString(output.PreSignedUrl),
  } as any;
};

const deserializeAws_json1_1GetInstanceAccessOutput = (
  output: any,
  context: __SerdeContext
): GetInstanceAccessOutput => {
  return {
    InstanceAccess:
      output.InstanceAccess != null ? deserializeAws_json1_1InstanceAccess(output.InstanceAccess, context) : undefined,
  } as any;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Instance = (output: any, context: __SerdeContext): Instance => {
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

const deserializeAws_json1_1InstanceAccess = (output: any, context: __SerdeContext): InstanceAccess => {
  return {
    Credentials:
      output.Credentials != null ? deserializeAws_json1_1InstanceCredentials(output.Credentials, context) : undefined,
    FleetId: __expectString(output.FleetId),
    InstanceId: __expectString(output.InstanceId),
    IpAddress: __expectString(output.IpAddress),
    OperatingSystem: __expectString(output.OperatingSystem),
  } as any;
};

const deserializeAws_json1_1InstanceCredentials = (output: any, context: __SerdeContext): InstanceCredentials => {
  return {
    Secret: __expectString(output.Secret),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1InstanceDefinition = (output: any, context: __SerdeContext): InstanceDefinition => {
  return {
    InstanceType: __expectString(output.InstanceType),
    WeightedCapacity: __expectString(output.WeightedCapacity),
  } as any;
};

const deserializeAws_json1_1InstanceDefinitions = (output: any, context: __SerdeContext): InstanceDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceList = (output: any, context: __SerdeContext): Instance[] => {
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

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidFleetStatusException = (
  output: any,
  context: __SerdeContext
): InvalidFleetStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidGameSessionStatusException = (
  output: any,
  context: __SerdeContext
): InvalidGameSessionStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IpPermission = (output: any, context: __SerdeContext): IpPermission => {
  return {
    FromPort: __expectInt32(output.FromPort),
    IpRange: __expectString(output.IpRange),
    Protocol: __expectString(output.Protocol),
    ToPort: __expectInt32(output.ToPort),
  } as any;
};

const deserializeAws_json1_1IpPermissionsList = (output: any, context: __SerdeContext): IpPermission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IpPermission(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LatencyMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAliasesOutput = (output: any, context: __SerdeContext): ListAliasesOutput => {
  return {
    Aliases: output.Aliases != null ? deserializeAws_json1_1AliasList(output.Aliases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListBuildsOutput = (output: any, context: __SerdeContext): ListBuildsOutput => {
  return {
    Builds: output.Builds != null ? deserializeAws_json1_1BuildList(output.Builds, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListComputeOutput = (output: any, context: __SerdeContext): ListComputeOutput => {
  return {
    ComputeList:
      output.ComputeList != null ? deserializeAws_json1_1ComputeList(output.ComputeList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListFleetsOutput = (output: any, context: __SerdeContext): ListFleetsOutput => {
  return {
    FleetIds: output.FleetIds != null ? deserializeAws_json1_1FleetIdList(output.FleetIds, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGameServerGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListGameServerGroupsOutput => {
  return {
    GameServerGroups:
      output.GameServerGroups != null
        ? deserializeAws_json1_1GameServerGroups(output.GameServerGroups, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGameServersOutput = (output: any, context: __SerdeContext): ListGameServersOutput => {
  return {
    GameServers:
      output.GameServers != null ? deserializeAws_json1_1GameServers(output.GameServers, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLocationsOutput = (output: any, context: __SerdeContext): ListLocationsOutput => {
  return {
    Locations:
      output.Locations != null ? deserializeAws_json1_1LocationModelList(output.Locations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListScriptsOutput = (output: any, context: __SerdeContext): ListScriptsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Scripts: output.Scripts != null ? deserializeAws_json1_1ScriptList(output.Scripts, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LocationAttributes = (output: any, context: __SerdeContext): LocationAttributes => {
  return {
    LocationState:
      output.LocationState != null ? deserializeAws_json1_1LocationState(output.LocationState, context) : undefined,
    StoppedActions:
      output.StoppedActions != null ? deserializeAws_json1_1FleetActionList(output.StoppedActions, context) : undefined,
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

const deserializeAws_json1_1LocationAttributesList = (output: any, context: __SerdeContext): LocationAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LocationAttributes(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LocationList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1LocationModel = (output: any, context: __SerdeContext): LocationModel => {
  return {
    LocationArn: __expectString(output.LocationArn),
    LocationName: __expectString(output.LocationName),
  } as any;
};

const deserializeAws_json1_1LocationModelList = (output: any, context: __SerdeContext): LocationModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LocationModel(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LocationState = (output: any, context: __SerdeContext): LocationState => {
  return {
    Location: __expectString(output.Location),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1LocationStateList = (output: any, context: __SerdeContext): LocationState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LocationState(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MatchedPlayerSession = (output: any, context: __SerdeContext): MatchedPlayerSession => {
  return {
    PlayerId: __expectString(output.PlayerId),
    PlayerSessionId: __expectString(output.PlayerSessionId),
  } as any;
};

const deserializeAws_json1_1MatchedPlayerSessionList = (
  output: any,
  context: __SerdeContext
): MatchedPlayerSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MatchedPlayerSession(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MatchmakingConfiguration = (
  output: any,
  context: __SerdeContext
): MatchmakingConfiguration => {
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
    GameProperties:
      output.GameProperties != null
        ? deserializeAws_json1_1GamePropertyList(output.GameProperties, context)
        : undefined,
    GameSessionData: __expectString(output.GameSessionData),
    GameSessionQueueArns:
      output.GameSessionQueueArns != null
        ? deserializeAws_json1_1QueueArnsList(output.GameSessionQueueArns, context)
        : undefined,
    Name: __expectString(output.Name),
    NotificationTarget: __expectString(output.NotificationTarget),
    RequestTimeoutSeconds: __expectInt32(output.RequestTimeoutSeconds),
    RuleSetArn: __expectString(output.RuleSetArn),
    RuleSetName: __expectString(output.RuleSetName),
  } as any;
};

const deserializeAws_json1_1MatchmakingConfigurationList = (
  output: any,
  context: __SerdeContext
): MatchmakingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MatchmakingConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MatchmakingRuleSet = (output: any, context: __SerdeContext): MatchmakingRuleSet => {
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

const deserializeAws_json1_1MatchmakingRuleSetList = (output: any, context: __SerdeContext): MatchmakingRuleSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MatchmakingRuleSet(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MatchmakingTicket = (output: any, context: __SerdeContext): MatchmakingTicket => {
  return {
    ConfigurationArn: __expectString(output.ConfigurationArn),
    ConfigurationName: __expectString(output.ConfigurationName),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    EstimatedWaitTime: __expectInt32(output.EstimatedWaitTime),
    GameSessionConnectionInfo:
      output.GameSessionConnectionInfo != null
        ? deserializeAws_json1_1GameSessionConnectionInfo(output.GameSessionConnectionInfo, context)
        : undefined,
    Players: output.Players != null ? deserializeAws_json1_1PlayerList(output.Players, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    StatusReason: __expectString(output.StatusReason),
    TicketId: __expectString(output.TicketId),
  } as any;
};

const deserializeAws_json1_1MatchmakingTicketList = (output: any, context: __SerdeContext): MatchmakingTicket[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MatchmakingTicket(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MetricGroupList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OutOfCapacityException = (output: any, context: __SerdeContext): OutOfCapacityException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PlacedPlayerSession = (output: any, context: __SerdeContext): PlacedPlayerSession => {
  return {
    PlayerId: __expectString(output.PlayerId),
    PlayerSessionId: __expectString(output.PlayerSessionId),
  } as any;
};

const deserializeAws_json1_1PlacedPlayerSessionList = (output: any, context: __SerdeContext): PlacedPlayerSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlacedPlayerSession(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Player = (output: any, context: __SerdeContext): Player => {
  return {
    LatencyInMs: output.LatencyInMs != null ? deserializeAws_json1_1LatencyMap(output.LatencyInMs, context) : undefined,
    PlayerAttributes:
      output.PlayerAttributes != null
        ? deserializeAws_json1_1PlayerAttributeMap(output.PlayerAttributes, context)
        : undefined,
    PlayerId: __expectString(output.PlayerId),
    Team: __expectString(output.Team),
  } as any;
};

const deserializeAws_json1_1PlayerAttributeMap = (
  output: any,
  context: __SerdeContext
): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1AttributeValue(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1PlayerAttributeStringDoubleMap = (
  output: any,
  context: __SerdeContext
): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1PlayerAttributeStringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PlayerLatency = (output: any, context: __SerdeContext): PlayerLatency => {
  return {
    LatencyInMilliseconds: __limitedParseFloat32(output.LatencyInMilliseconds),
    PlayerId: __expectString(output.PlayerId),
    RegionIdentifier: __expectString(output.RegionIdentifier),
  } as any;
};

const deserializeAws_json1_1PlayerLatencyList = (output: any, context: __SerdeContext): PlayerLatency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlayerLatency(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PlayerLatencyPolicy = (output: any, context: __SerdeContext): PlayerLatencyPolicy => {
  return {
    MaximumIndividualPlayerLatencyMilliseconds: __expectInt32(output.MaximumIndividualPlayerLatencyMilliseconds),
    PolicyDurationSeconds: __expectInt32(output.PolicyDurationSeconds),
  } as any;
};

const deserializeAws_json1_1PlayerLatencyPolicyList = (output: any, context: __SerdeContext): PlayerLatencyPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlayerLatencyPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PlayerList = (output: any, context: __SerdeContext): Player[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Player(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PlayerSession = (output: any, context: __SerdeContext): PlayerSession => {
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

const deserializeAws_json1_1PlayerSessionList = (output: any, context: __SerdeContext): PlayerSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlayerSession(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PriorityConfiguration = (output: any, context: __SerdeContext): PriorityConfiguration => {
  return {
    LocationOrder:
      output.LocationOrder != null ? deserializeAws_json1_1LocationList(output.LocationOrder, context) : undefined,
    PriorityOrder:
      output.PriorityOrder != null ? deserializeAws_json1_1PriorityTypeList(output.PriorityOrder, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PriorityTypeList = (output: any, context: __SerdeContext): (PriorityType | string)[] => {
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

const deserializeAws_json1_1PutScalingPolicyOutput = (output: any, context: __SerdeContext): PutScalingPolicyOutput => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1QueueArnsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1RegisterComputeOutput = (output: any, context: __SerdeContext): RegisterComputeOutput => {
  return {
    Compute: output.Compute != null ? deserializeAws_json1_1Compute(output.Compute, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RegisterGameServerOutput = (
  output: any,
  context: __SerdeContext
): RegisterGameServerOutput => {
  return {
    GameServer: output.GameServer != null ? deserializeAws_json1_1GameServer(output.GameServer, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RequestUploadCredentialsOutput = (
  output: any,
  context: __SerdeContext
): RequestUploadCredentialsOutput => {
  return {
    StorageLocation:
      output.StorageLocation != null ? deserializeAws_json1_1S3Location(output.StorageLocation, context) : undefined,
    UploadCredentials:
      output.UploadCredentials != null
        ? deserializeAws_json1_1AwsCredentials(output.UploadCredentials, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResolveAliasOutput = (output: any, context: __SerdeContext): ResolveAliasOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

const deserializeAws_json1_1ResourceCreationLimitPolicy = (
  output: any,
  context: __SerdeContext
): ResourceCreationLimitPolicy => {
  return {
    NewGameSessionsPerCreator: __expectInt32(output.NewGameSessionsPerCreator),
    PolicyPeriodInMinutes: __expectInt32(output.PolicyPeriodInMinutes),
  } as any;
};

const deserializeAws_json1_1ResumeGameServerGroupOutput = (
  output: any,
  context: __SerdeContext
): ResumeGameServerGroupOutput => {
  return {
    GameServerGroup:
      output.GameServerGroup != null
        ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RoutingStrategy = (output: any, context: __SerdeContext): RoutingStrategy => {
  return {
    FleetId: __expectString(output.FleetId),
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1RuntimeConfiguration = (output: any, context: __SerdeContext): RuntimeConfiguration => {
  return {
    GameSessionActivationTimeoutSeconds: __expectInt32(output.GameSessionActivationTimeoutSeconds),
    MaxConcurrentGameSessionActivations: __expectInt32(output.MaxConcurrentGameSessionActivations),
    ServerProcesses:
      output.ServerProcesses != null
        ? deserializeAws_json1_1ServerProcessList(output.ServerProcesses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
    ObjectVersion: __expectString(output.ObjectVersion),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_json1_1ScalingPolicy = (output: any, context: __SerdeContext): ScalingPolicy => {
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
      output.TargetConfiguration != null
        ? deserializeAws_json1_1TargetConfiguration(output.TargetConfiguration, context)
        : undefined,
    Threshold: __limitedParseDouble(output.Threshold),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

const deserializeAws_json1_1ScalingPolicyList = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Script = (output: any, context: __SerdeContext): Script => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Name: __expectString(output.Name),
    ScriptArn: __expectString(output.ScriptArn),
    ScriptId: __expectString(output.ScriptId),
    SizeOnDisk: __expectLong(output.SizeOnDisk),
    StorageLocation:
      output.StorageLocation != null ? deserializeAws_json1_1S3Location(output.StorageLocation, context) : undefined,
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1ScriptList = (output: any, context: __SerdeContext): Script[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Script(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SearchGameSessionsOutput = (
  output: any,
  context: __SerdeContext
): SearchGameSessionsOutput => {
  return {
    GameSessions:
      output.GameSessions != null ? deserializeAws_json1_1GameSessionList(output.GameSessions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ServerProcess = (output: any, context: __SerdeContext): ServerProcess => {
  return {
    ConcurrentExecutions: __expectInt32(output.ConcurrentExecutions),
    LaunchPath: __expectString(output.LaunchPath),
    Parameters: __expectString(output.Parameters),
  } as any;
};

const deserializeAws_json1_1ServerProcessList = (output: any, context: __SerdeContext): ServerProcess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServerProcess(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartFleetActionsOutput = (
  output: any,
  context: __SerdeContext
): StartFleetActionsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

const deserializeAws_json1_1StartGameSessionPlacementOutput = (
  output: any,
  context: __SerdeContext
): StartGameSessionPlacementOutput => {
  return {
    GameSessionPlacement:
      output.GameSessionPlacement != null
        ? deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartMatchBackfillOutput = (
  output: any,
  context: __SerdeContext
): StartMatchBackfillOutput => {
  return {
    MatchmakingTicket:
      output.MatchmakingTicket != null
        ? deserializeAws_json1_1MatchmakingTicket(output.MatchmakingTicket, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartMatchmakingOutput = (output: any, context: __SerdeContext): StartMatchmakingOutput => {
  return {
    MatchmakingTicket:
      output.MatchmakingTicket != null
        ? deserializeAws_json1_1MatchmakingTicket(output.MatchmakingTicket, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StopFleetActionsOutput = (output: any, context: __SerdeContext): StopFleetActionsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

const deserializeAws_json1_1StopGameSessionPlacementOutput = (
  output: any,
  context: __SerdeContext
): StopGameSessionPlacementOutput => {
  return {
    GameSessionPlacement:
      output.GameSessionPlacement != null
        ? deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StopMatchmakingOutput = (output: any, context: __SerdeContext): StopMatchmakingOutput => {
  return {} as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SuspendGameServerGroupOutput = (
  output: any,
  context: __SerdeContext
): SuspendGameServerGroupOutput => {
  return {
    GameServerGroup:
      output.GameServerGroup != null
        ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TaggingFailedException = (output: any, context: __SerdeContext): TaggingFailedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TargetConfiguration = (output: any, context: __SerdeContext): TargetConfiguration => {
  return {
    TargetValue: __limitedParseDouble(output.TargetValue),
  } as any;
};

const deserializeAws_json1_1TerminalRoutingStrategyException = (
  output: any,
  context: __SerdeContext
): TerminalRoutingStrategyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnauthorizedException = (output: any, context: __SerdeContext): UnauthorizedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnsupportedRegionException = (
  output: any,
  context: __SerdeContext
): UnsupportedRegionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateAliasOutput = (output: any, context: __SerdeContext): UpdateAliasOutput => {
  return {
    Alias: output.Alias != null ? deserializeAws_json1_1Alias(output.Alias, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateBuildOutput = (output: any, context: __SerdeContext): UpdateBuildOutput => {
  return {
    Build: output.Build != null ? deserializeAws_json1_1Build(output.Build, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateFleetAttributesOutput = (
  output: any,
  context: __SerdeContext
): UpdateFleetAttributesOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

const deserializeAws_json1_1UpdateFleetCapacityOutput = (
  output: any,
  context: __SerdeContext
): UpdateFleetCapacityOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    Location: __expectString(output.Location),
  } as any;
};

const deserializeAws_json1_1UpdateFleetPortSettingsOutput = (
  output: any,
  context: __SerdeContext
): UpdateFleetPortSettingsOutput => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
  } as any;
};

const deserializeAws_json1_1UpdateGameServerGroupOutput = (
  output: any,
  context: __SerdeContext
): UpdateGameServerGroupOutput => {
  return {
    GameServerGroup:
      output.GameServerGroup != null
        ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateGameServerOutput = (output: any, context: __SerdeContext): UpdateGameServerOutput => {
  return {
    GameServer: output.GameServer != null ? deserializeAws_json1_1GameServer(output.GameServer, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateGameSessionOutput = (
  output: any,
  context: __SerdeContext
): UpdateGameSessionOutput => {
  return {
    GameSession:
      output.GameSession != null ? deserializeAws_json1_1GameSession(output.GameSession, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateGameSessionQueueOutput = (
  output: any,
  context: __SerdeContext
): UpdateGameSessionQueueOutput => {
  return {
    GameSessionQueue:
      output.GameSessionQueue != null
        ? deserializeAws_json1_1GameSessionQueue(output.GameSessionQueue, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateMatchmakingConfigurationOutput = (
  output: any,
  context: __SerdeContext
): UpdateMatchmakingConfigurationOutput => {
  return {
    Configuration:
      output.Configuration != null
        ? deserializeAws_json1_1MatchmakingConfiguration(output.Configuration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateRuntimeConfigurationOutput = (
  output: any,
  context: __SerdeContext
): UpdateRuntimeConfigurationOutput => {
  return {
    RuntimeConfiguration:
      output.RuntimeConfiguration != null
        ? deserializeAws_json1_1RuntimeConfiguration(output.RuntimeConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateScriptOutput = (output: any, context: __SerdeContext): UpdateScriptOutput => {
  return {
    Script: output.Script != null ? deserializeAws_json1_1Script(output.Script, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ValidateMatchmakingRuleSetOutput = (
  output: any,
  context: __SerdeContext
): ValidateMatchmakingRuleSetOutput => {
  return {
    Valid: __expectBoolean(output.Valid),
  } as any;
};

const deserializeAws_json1_1VpcPeeringAuthorization = (
  output: any,
  context: __SerdeContext
): VpcPeeringAuthorization => {
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

const deserializeAws_json1_1VpcPeeringAuthorizationList = (
  output: any,
  context: __SerdeContext
): VpcPeeringAuthorization[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VpcPeeringAuthorization(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1VpcPeeringConnection = (output: any, context: __SerdeContext): VpcPeeringConnection => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    GameLiftVpcId: __expectString(output.GameLiftVpcId),
    IpV4CidrBlock: __expectString(output.IpV4CidrBlock),
    PeerVpcId: __expectString(output.PeerVpcId),
    Status:
      output.Status != null ? deserializeAws_json1_1VpcPeeringConnectionStatus(output.Status, context) : undefined,
    VpcPeeringConnectionId: __expectString(output.VpcPeeringConnectionId),
  } as any;
};

const deserializeAws_json1_1VpcPeeringConnectionList = (
  output: any,
  context: __SerdeContext
): VpcPeeringConnection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VpcPeeringConnection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1VpcPeeringConnectionStatus = (
  output: any,
  context: __SerdeContext
): VpcPeeringConnectionStatus => {
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
