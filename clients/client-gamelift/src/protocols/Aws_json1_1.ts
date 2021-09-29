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
import {
  DeregisterGameServerCommandInput,
  DeregisterGameServerCommandOutput,
} from "../commands/DeregisterGameServerCommand";
import { DescribeAliasCommandInput, DescribeAliasCommandOutput } from "../commands/DescribeAliasCommand";
import { DescribeBuildCommandInput, DescribeBuildCommandOutput } from "../commands/DescribeBuildCommand";
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
import {
  GetGameSessionLogUrlCommandInput,
  GetGameSessionLogUrlCommandOutput,
} from "../commands/GetGameSessionLogUrlCommand";
import { GetInstanceAccessCommandInput, GetInstanceAccessCommandOutput } from "../commands/GetInstanceAccessCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import {
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
} from "../commands/ListGameServerGroupsCommand";
import { ListGameServersCommandInput, ListGameServersCommandOutput } from "../commands/ListGameServersCommand";
import { ListScriptsCommandInput, ListScriptsCommandOutput } from "../commands/ListScriptsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "../commands/PutScalingPolicyCommand";
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
import {
  AcceptMatchInput,
  AcceptMatchOutput,
  Alias,
  AttributeValue,
  AwsCredentials,
  Build,
  CertificateConfiguration,
  ClaimGameServerInput,
  ClaimGameServerOutput,
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
  DeregisterGameServerInput,
  DescribeAliasInput,
  DescribeAliasOutput,
  DescribeBuildInput,
  DescribeBuildOutput,
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
  ListFleetsInput,
  ListFleetsOutput,
  ListGameServerGroupsInput,
  ListGameServerGroupsOutput,
  ListGameServersInput,
  ListGameServersOutput,
  ListScriptsInput,
  ListScriptsOutput,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  LocationAttributes,
  LocationConfiguration,
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
  TagResourceRequest,
  TagResourceResponse,
  TaggingFailedException,
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
  VpcPeeringAuthorization,
  VpcPeeringConnection,
  VpcPeeringConnectionStatus,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
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
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OutOfCapacityException":
    case "com.amazonaws.gamelift#OutOfCapacityException":
      response = {
        ...(await deserializeAws_json1_1OutOfCapacityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FleetCapacityExceededException":
    case "com.amazonaws.gamelift#FleetCapacityExceededException":
      response = {
        ...(await deserializeAws_json1_1FleetCapacityExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.gamelift#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      response = {
        ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GameSessionFullException":
    case "com.amazonaws.gamelift#GameSessionFullException":
      response = {
        ...(await deserializeAws_json1_1GameSessionFullExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGameSessionStatusException":
    case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      response = {
        ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GameSessionFullException":
    case "com.amazonaws.gamelift#GameSessionFullException":
      response = {
        ...(await deserializeAws_json1_1GameSessionFullExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGameSessionStatusException":
    case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      response = {
        ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      response = {
        ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      response = {
        ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      response = {
        ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TerminalRoutingStrategyException":
    case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
      response = {
        ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaggingFailedException":
    case "com.amazonaws.gamelift#TaggingFailedException":
      response = {
        ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.gamelift#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.gamelift#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGameSessionStatusException":
    case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFleetStatusException":
    case "com.amazonaws.gamelift#InvalidFleetStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.gamelift#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.gamelift#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.gamelift#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.gamelift#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedRegionException":
    case "com.amazonaws.gamelift#UnsupportedRegionException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FleetCapacityExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FleetCapacityExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FleetCapacityExceededException(body, context);
  const contents: FleetCapacityExceededException = {
    name: "FleetCapacityExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1GameSessionFullExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GameSessionFullException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GameSessionFullException(body, context);
  const contents: GameSessionFullException = {
    name: "GameSessionFullException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidFleetStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFleetStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFleetStatusException(body, context);
  const contents: InvalidFleetStatusException = {
    name: "InvalidFleetStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGameSessionStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGameSessionStatusException(body, context);
  const contents: InvalidGameSessionStatusException = {
    name: "InvalidGameSessionStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OutOfCapacityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OutOfCapacityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OutOfCapacityException(body, context);
  const contents: OutOfCapacityException = {
    name: "OutOfCapacityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TaggingFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaggingFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TaggingFailedException(body, context);
  const contents: TaggingFailedException = {
    name: "TaggingFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TerminalRoutingStrategyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TerminalRoutingStrategyException(body, context);
  const contents: TerminalRoutingStrategyException = {
    name: "TerminalRoutingStrategyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnauthorizedException(body, context);
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedRegionException(body, context);
  const contents: UnsupportedRegionException = {
    name: "UnsupportedRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AcceptMatchInput = (input: AcceptMatchInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptanceType !== undefined &&
      input.AcceptanceType !== null && { AcceptanceType: input.AcceptanceType }),
    ...(input.PlayerIds !== undefined &&
      input.PlayerIds !== null && { PlayerIds: serializeAws_json1_1StringList(input.PlayerIds, context) }),
    ...(input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }),
  };
};

const serializeAws_json1_1AttributeValue = (input: AttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.N !== undefined && input.N !== null && { N: __serializeFloat(input.N) }),
    ...(input.S !== undefined && input.S !== null && { S: input.S }),
    ...(input.SDM !== undefined &&
      input.SDM !== null && { SDM: serializeAws_json1_1StringDoubleMap(input.SDM, context) }),
    ...(input.SL !== undefined && input.SL !== null && { SL: serializeAws_json1_1StringList(input.SL, context) }),
  };
};

const serializeAws_json1_1CertificateConfiguration = (
  input: CertificateConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateType !== undefined &&
      input.CertificateType !== null && { CertificateType: input.CertificateType }),
  };
};

const serializeAws_json1_1ClaimGameServerInput = (input: ClaimGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerData !== undefined &&
      input.GameServerData !== null && { GameServerData: input.GameServerData }),
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }),
  };
};

const serializeAws_json1_1CreateAliasInput = (input: CreateAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoutingStrategy !== undefined &&
      input.RoutingStrategy !== null && {
        RoutingStrategy: serializeAws_json1_1RoutingStrategy(input.RoutingStrategy, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateBuildInput = (input: CreateBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.OperatingSystem !== undefined &&
      input.OperatingSystem !== null && { OperatingSystem: input.OperatingSystem }),
    ...(input.StorageLocation !== undefined &&
      input.StorageLocation !== null && {
        StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_json1_1CreateFleetInput = (input: CreateFleetInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
    ...(input.CertificateConfiguration !== undefined &&
      input.CertificateConfiguration !== null && {
        CertificateConfiguration: serializeAws_json1_1CertificateConfiguration(input.CertificateConfiguration, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EC2InboundPermissions !== undefined &&
      input.EC2InboundPermissions !== null && {
        EC2InboundPermissions: serializeAws_json1_1IpPermissionsList(input.EC2InboundPermissions, context),
      }),
    ...(input.EC2InstanceType !== undefined &&
      input.EC2InstanceType !== null && { EC2InstanceType: input.EC2InstanceType }),
    ...(input.FleetType !== undefined && input.FleetType !== null && { FleetType: input.FleetType }),
    ...(input.InstanceRoleArn !== undefined &&
      input.InstanceRoleArn !== null && { InstanceRoleArn: input.InstanceRoleArn }),
    ...(input.Locations !== undefined &&
      input.Locations !== null && {
        Locations: serializeAws_json1_1LocationConfigurationList(input.Locations, context),
      }),
    ...(input.LogPaths !== undefined &&
      input.LogPaths !== null && { LogPaths: serializeAws_json1_1StringList(input.LogPaths, context) }),
    ...(input.MetricGroups !== undefined &&
      input.MetricGroups !== null && {
        MetricGroups: serializeAws_json1_1MetricGroupList(input.MetricGroups, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NewGameSessionProtectionPolicy !== undefined &&
      input.NewGameSessionProtectionPolicy !== null && {
        NewGameSessionProtectionPolicy: input.NewGameSessionProtectionPolicy,
      }),
    ...(input.PeerVpcAwsAccountId !== undefined &&
      input.PeerVpcAwsAccountId !== null && { PeerVpcAwsAccountId: input.PeerVpcAwsAccountId }),
    ...(input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }),
    ...(input.ResourceCreationLimitPolicy !== undefined &&
      input.ResourceCreationLimitPolicy !== null && {
        ResourceCreationLimitPolicy: serializeAws_json1_1ResourceCreationLimitPolicy(
          input.ResourceCreationLimitPolicy,
          context
        ),
      }),
    ...(input.RuntimeConfiguration !== undefined &&
      input.RuntimeConfiguration !== null && {
        RuntimeConfiguration: serializeAws_json1_1RuntimeConfiguration(input.RuntimeConfiguration, context),
      }),
    ...(input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }),
    ...(input.ServerLaunchParameters !== undefined &&
      input.ServerLaunchParameters !== null && { ServerLaunchParameters: input.ServerLaunchParameters }),
    ...(input.ServerLaunchPath !== undefined &&
      input.ServerLaunchPath !== null && { ServerLaunchPath: input.ServerLaunchPath }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateFleetLocationsInput = (
  input: CreateFleetLocationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Locations !== undefined &&
      input.Locations !== null && {
        Locations: serializeAws_json1_1LocationConfigurationList(input.Locations, context),
      }),
  };
};

const serializeAws_json1_1CreateGameServerGroupInput = (
  input: CreateGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingPolicy !== undefined &&
      input.AutoScalingPolicy !== null && {
        AutoScalingPolicy: serializeAws_json1_1GameServerGroupAutoScalingPolicy(input.AutoScalingPolicy, context),
      }),
    ...(input.BalancingStrategy !== undefined &&
      input.BalancingStrategy !== null && { BalancingStrategy: input.BalancingStrategy }),
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerProtectionPolicy !== undefined &&
      input.GameServerProtectionPolicy !== null && { GameServerProtectionPolicy: input.GameServerProtectionPolicy }),
    ...(input.InstanceDefinitions !== undefined &&
      input.InstanceDefinitions !== null && {
        InstanceDefinitions: serializeAws_json1_1InstanceDefinitions(input.InstanceDefinitions, context),
      }),
    ...(input.LaunchTemplate !== undefined &&
      input.LaunchTemplate !== null && {
        LaunchTemplate: serializeAws_json1_1LaunchTemplateSpecification(input.LaunchTemplate, context),
      }),
    ...(input.MaxSize !== undefined && input.MaxSize !== null && { MaxSize: input.MaxSize }),
    ...(input.MinSize !== undefined && input.MinSize !== null && { MinSize: input.MinSize }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VpcSubnets !== undefined &&
      input.VpcSubnets !== null && { VpcSubnets: serializeAws_json1_1VpcSubnets(input.VpcSubnets, context) }),
  };
};

const serializeAws_json1_1CreateGameSessionInput = (input: CreateGameSessionInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    ...(input.CreatorId !== undefined && input.CreatorId !== null && { CreatorId: input.CreatorId }),
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.GameProperties !== undefined &&
      input.GameProperties !== null && {
        GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
      }),
    ...(input.GameSessionData !== undefined &&
      input.GameSessionData !== null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    ...(input.MaximumPlayerSessionCount !== undefined &&
      input.MaximumPlayerSessionCount !== null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateGameSessionQueueInput = (
  input: CreateGameSessionQueueInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomEventData !== undefined &&
      input.CustomEventData !== null && { CustomEventData: input.CustomEventData }),
    ...(input.Destinations !== undefined &&
      input.Destinations !== null && {
        Destinations: serializeAws_json1_1GameSessionQueueDestinationList(input.Destinations, context),
      }),
    ...(input.FilterConfiguration !== undefined &&
      input.FilterConfiguration !== null && {
        FilterConfiguration: serializeAws_json1_1FilterConfiguration(input.FilterConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NotificationTarget !== undefined &&
      input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget }),
    ...(input.PlayerLatencyPolicies !== undefined &&
      input.PlayerLatencyPolicies !== null && {
        PlayerLatencyPolicies: serializeAws_json1_1PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context),
      }),
    ...(input.PriorityConfiguration !== undefined &&
      input.PriorityConfiguration !== null && {
        PriorityConfiguration: serializeAws_json1_1PriorityConfiguration(input.PriorityConfiguration, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TimeoutInSeconds !== undefined &&
      input.TimeoutInSeconds !== null && { TimeoutInSeconds: input.TimeoutInSeconds }),
  };
};

const serializeAws_json1_1CreateMatchmakingConfigurationInput = (
  input: CreateMatchmakingConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptanceRequired !== undefined &&
      input.AcceptanceRequired !== null && { AcceptanceRequired: input.AcceptanceRequired }),
    ...(input.AcceptanceTimeoutSeconds !== undefined &&
      input.AcceptanceTimeoutSeconds !== null && { AcceptanceTimeoutSeconds: input.AcceptanceTimeoutSeconds }),
    ...(input.AdditionalPlayerCount !== undefined &&
      input.AdditionalPlayerCount !== null && { AdditionalPlayerCount: input.AdditionalPlayerCount }),
    ...(input.BackfillMode !== undefined && input.BackfillMode !== null && { BackfillMode: input.BackfillMode }),
    ...(input.CustomEventData !== undefined &&
      input.CustomEventData !== null && { CustomEventData: input.CustomEventData }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.FlexMatchMode !== undefined && input.FlexMatchMode !== null && { FlexMatchMode: input.FlexMatchMode }),
    ...(input.GameProperties !== undefined &&
      input.GameProperties !== null && {
        GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
      }),
    ...(input.GameSessionData !== undefined &&
      input.GameSessionData !== null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionQueueArns !== undefined &&
      input.GameSessionQueueArns !== null && {
        GameSessionQueueArns: serializeAws_json1_1QueueArnsList(input.GameSessionQueueArns, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NotificationTarget !== undefined &&
      input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget }),
    ...(input.RequestTimeoutSeconds !== undefined &&
      input.RequestTimeoutSeconds !== null && { RequestTimeoutSeconds: input.RequestTimeoutSeconds }),
    ...(input.RuleSetName !== undefined && input.RuleSetName !== null && { RuleSetName: input.RuleSetName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateMatchmakingRuleSetInput = (
  input: CreateMatchmakingRuleSetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RuleSetBody !== undefined && input.RuleSetBody !== null && { RuleSetBody: input.RuleSetBody }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreatePlayerSessionInput = (
  input: CreatePlayerSessionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
    ...(input.PlayerData !== undefined && input.PlayerData !== null && { PlayerData: input.PlayerData }),
    ...(input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }),
  };
};

const serializeAws_json1_1CreatePlayerSessionsInput = (
  input: CreatePlayerSessionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
    ...(input.PlayerDataMap !== undefined &&
      input.PlayerDataMap !== null && {
        PlayerDataMap: serializeAws_json1_1PlayerDataMap(input.PlayerDataMap, context),
      }),
    ...(input.PlayerIds !== undefined &&
      input.PlayerIds !== null && { PlayerIds: serializeAws_json1_1PlayerIdList(input.PlayerIds, context) }),
  };
};

const serializeAws_json1_1CreateScriptInput = (input: CreateScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.StorageLocation !== undefined &&
      input.StorageLocation !== null && {
        StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    ...(input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

const serializeAws_json1_1CreateVpcPeeringAuthorizationInput = (
  input: CreateVpcPeeringAuthorizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameLiftAwsAccountId !== undefined &&
      input.GameLiftAwsAccountId !== null && { GameLiftAwsAccountId: input.GameLiftAwsAccountId }),
    ...(input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }),
  };
};

const serializeAws_json1_1CreateVpcPeeringConnectionInput = (
  input: CreateVpcPeeringConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.PeerVpcAwsAccountId !== undefined &&
      input.PeerVpcAwsAccountId !== null && { PeerVpcAwsAccountId: input.PeerVpcAwsAccountId }),
    ...(input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }),
  };
};

const serializeAws_json1_1DeleteAliasInput = (input: DeleteAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
  };
};

const serializeAws_json1_1DeleteBuildInput = (input: DeleteBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
  };
};

const serializeAws_json1_1DeleteFleetInput = (input: DeleteFleetInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
  };
};

const serializeAws_json1_1DeleteFleetLocationsInput = (
  input: DeleteFleetLocationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Locations !== undefined &&
      input.Locations !== null && { Locations: serializeAws_json1_1LocationList(input.Locations, context) }),
  };
};

const serializeAws_json1_1DeleteGameServerGroupInput = (
  input: DeleteGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeleteOption !== undefined && input.DeleteOption !== null && { DeleteOption: input.DeleteOption }),
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
  };
};

const serializeAws_json1_1DeleteGameSessionQueueInput = (
  input: DeleteGameSessionQueueInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteMatchmakingConfigurationInput = (
  input: DeleteMatchmakingConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteMatchmakingRuleSetInput = (
  input: DeleteMatchmakingRuleSetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteScalingPolicyInput = (
  input: DeleteScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteScriptInput = (input: DeleteScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }),
  };
};

const serializeAws_json1_1DeleteVpcPeeringAuthorizationInput = (
  input: DeleteVpcPeeringAuthorizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameLiftAwsAccountId !== undefined &&
      input.GameLiftAwsAccountId !== null && { GameLiftAwsAccountId: input.GameLiftAwsAccountId }),
    ...(input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }),
  };
};

const serializeAws_json1_1DeleteVpcPeeringConnectionInput = (
  input: DeleteVpcPeeringConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.VpcPeeringConnectionId !== undefined &&
      input.VpcPeeringConnectionId !== null && { VpcPeeringConnectionId: input.VpcPeeringConnectionId }),
  };
};

const serializeAws_json1_1DeregisterGameServerInput = (
  input: DeregisterGameServerInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }),
  };
};

const serializeAws_json1_1DescribeAliasInput = (input: DescribeAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
  };
};

const serializeAws_json1_1DescribeBuildInput = (input: DescribeBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
  };
};

const serializeAws_json1_1DescribeEC2InstanceLimitsInput = (
  input: DescribeEC2InstanceLimitsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EC2InstanceType !== undefined &&
      input.EC2InstanceType !== null && { EC2InstanceType: input.EC2InstanceType }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
  };
};

const serializeAws_json1_1DescribeFleetAttributesInput = (
  input: DescribeFleetAttributesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetIds !== undefined &&
      input.FleetIds !== null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFleetCapacityInput = (
  input: DescribeFleetCapacityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetIds !== undefined &&
      input.FleetIds !== null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFleetEventsInput = (
  input: DescribeFleetEventsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DescribeFleetLocationAttributesInput = (
  input: DescribeFleetLocationAttributesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Locations !== undefined &&
      input.Locations !== null && { Locations: serializeAws_json1_1LocationList(input.Locations, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFleetLocationCapacityInput = (
  input: DescribeFleetLocationCapacityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
  };
};

const serializeAws_json1_1DescribeFleetLocationUtilizationInput = (
  input: DescribeFleetLocationUtilizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
  };
};

const serializeAws_json1_1DescribeFleetPortSettingsInput = (
  input: DescribeFleetPortSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
  };
};

const serializeAws_json1_1DescribeFleetUtilizationInput = (
  input: DescribeFleetUtilizationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetIds !== undefined &&
      input.FleetIds !== null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeGameServerGroupInput = (
  input: DescribeGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
  };
};

const serializeAws_json1_1DescribeGameServerInput = (input: DescribeGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }),
  };
};

const serializeAws_json1_1DescribeGameServerInstancesInput = (
  input: DescribeGameServerInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.InstanceIds !== undefined &&
      input.InstanceIds !== null && {
        InstanceIds: serializeAws_json1_1GameServerInstanceIds(input.InstanceIds, context),
      }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeGameSessionDetailsInput = (
  input: DescribeGameSessionDetailsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }),
  };
};

const serializeAws_json1_1DescribeGameSessionPlacementInput = (
  input: DescribeGameSessionPlacementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PlacementId !== undefined && input.PlacementId !== null && { PlacementId: input.PlacementId }),
  };
};

const serializeAws_json1_1DescribeGameSessionQueuesInput = (
  input: DescribeGameSessionQueuesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Names !== undefined &&
      input.Names !== null && { Names: serializeAws_json1_1GameSessionQueueNameOrArnList(input.Names, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeGameSessionsInput = (
  input: DescribeGameSessionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }),
  };
};

const serializeAws_json1_1DescribeInstancesInput = (input: DescribeInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeMatchmakingConfigurationsInput = (
  input: DescribeMatchmakingConfigurationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Names !== undefined &&
      input.Names !== null && { Names: serializeAws_json1_1MatchmakingConfigurationNameList(input.Names, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.RuleSetName !== undefined && input.RuleSetName !== null && { RuleSetName: input.RuleSetName }),
  };
};

const serializeAws_json1_1DescribeMatchmakingInput = (
  input: DescribeMatchmakingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TicketIds !== undefined &&
      input.TicketIds !== null && { TicketIds: serializeAws_json1_1MatchmakingIdList(input.TicketIds, context) }),
  };
};

const serializeAws_json1_1DescribeMatchmakingRuleSetsInput = (
  input: DescribeMatchmakingRuleSetsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Names !== undefined &&
      input.Names !== null && { Names: serializeAws_json1_1MatchmakingRuleSetNameList(input.Names, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribePlayerSessionsInput = (
  input: DescribePlayerSessionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }),
    ...(input.PlayerSessionId !== undefined &&
      input.PlayerSessionId !== null && { PlayerSessionId: input.PlayerSessionId }),
    ...(input.PlayerSessionStatusFilter !== undefined &&
      input.PlayerSessionStatusFilter !== null && { PlayerSessionStatusFilter: input.PlayerSessionStatusFilter }),
  };
};

const serializeAws_json1_1DescribeRuntimeConfigurationInput = (
  input: DescribeRuntimeConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
  };
};

const serializeAws_json1_1DescribeScalingPoliciesInput = (
  input: DescribeScalingPoliciesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }),
  };
};

const serializeAws_json1_1DescribeScriptInput = (input: DescribeScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }),
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
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
  };
};

const serializeAws_json1_1DesiredPlayerSession = (input: DesiredPlayerSession, context: __SerdeContext): any => {
  return {
    ...(input.PlayerData !== undefined && input.PlayerData !== null && { PlayerData: input.PlayerData }),
    ...(input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }),
  };
};

const serializeAws_json1_1DesiredPlayerSessionList = (input: DesiredPlayerSession[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DesiredPlayerSession(entry, context);
    });
};

const serializeAws_json1_1FilterConfiguration = (input: FilterConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowedLocations !== undefined &&
      input.AllowedLocations !== null && {
        AllowedLocations: serializeAws_json1_1LocationList(input.AllowedLocations, context),
      }),
  };
};

const serializeAws_json1_1FleetActionList = (input: (FleetAction | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1FleetIdOrArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GameProperty = (input: GameProperty, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1GamePropertyList = (input: GameProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GameServerGroupAutoScalingPolicy = (
  input: GameServerGroupAutoScalingPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.EstimatedInstanceWarmup !== undefined &&
      input.EstimatedInstanceWarmup !== null && { EstimatedInstanceWarmup: input.EstimatedInstanceWarmup }),
    ...(input.TargetTrackingConfiguration !== undefined &&
      input.TargetTrackingConfiguration !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GameSessionQueueDestination = (
  input: GameSessionQueueDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationArn !== undefined &&
      input.DestinationArn !== null && { DestinationArn: input.DestinationArn }),
  };
};

const serializeAws_json1_1GameSessionQueueDestinationList = (
  input: GameSessionQueueDestination[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1GameSessionQueueDestination(entry, context);
    });
};

const serializeAws_json1_1GameSessionQueueNameOrArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetGameSessionLogUrlInput = (
  input: GetGameSessionLogUrlInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
  };
};

const serializeAws_json1_1GetInstanceAccessInput = (input: GetInstanceAccessInput, context: __SerdeContext): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1InstanceDefinition = (input: InstanceDefinition, context: __SerdeContext): any => {
  return {
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.WeightedCapacity !== undefined &&
      input.WeightedCapacity !== null && { WeightedCapacity: input.WeightedCapacity }),
  };
};

const serializeAws_json1_1InstanceDefinitions = (input: InstanceDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1InstanceDefinition(entry, context);
    });
};

const serializeAws_json1_1IpPermission = (input: IpPermission, context: __SerdeContext): any => {
  return {
    ...(input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort }),
    ...(input.IpRange !== undefined && input.IpRange !== null && { IpRange: input.IpRange }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    ...(input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort }),
  };
};

const serializeAws_json1_1IpPermissionsList = (input: IpPermission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1IpPermission(entry, context);
    });
};

const serializeAws_json1_1LatencyMap = (input: { [key: string]: number }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1LaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.LaunchTemplateId !== undefined &&
      input.LaunchTemplateId !== null && { LaunchTemplateId: input.LaunchTemplateId }),
    ...(input.LaunchTemplateName !== undefined &&
      input.LaunchTemplateName !== null && { LaunchTemplateName: input.LaunchTemplateName }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_json1_1ListAliasesInput = (input: ListAliasesInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.RoutingStrategyType !== undefined &&
      input.RoutingStrategyType !== null && { RoutingStrategyType: input.RoutingStrategyType }),
  };
};

const serializeAws_json1_1ListBuildsInput = (input: ListBuildsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_json1_1ListFleetsInput = (input: ListFleetsInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }),
  };
};

const serializeAws_json1_1ListGameServerGroupsInput = (
  input: ListGameServerGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListGameServersInput = (input: ListGameServersInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1ListScriptsInput = (input: ListScriptsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1LocationConfiguration = (input: LocationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
  };
};

const serializeAws_json1_1LocationConfigurationList = (
  input: LocationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1LocationConfiguration(entry, context);
    });
};

const serializeAws_json1_1LocationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1MatchmakingConfigurationNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1MatchmakingIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1MatchmakingRuleSetNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1MetricGroupList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Player = (input: Player, context: __SerdeContext): any => {
  return {
    ...(input.LatencyInMs !== undefined &&
      input.LatencyInMs !== null && { LatencyInMs: serializeAws_json1_1LatencyMap(input.LatencyInMs, context) }),
    ...(input.PlayerAttributes !== undefined &&
      input.PlayerAttributes !== null && {
        PlayerAttributes: serializeAws_json1_1PlayerAttributeMap(input.PlayerAttributes, context),
      }),
    ...(input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }),
    ...(input.Team !== undefined && input.Team !== null && { Team: input.Team }),
  };
};

const serializeAws_json1_1PlayerAttributeMap = (
  input: { [key: string]: AttributeValue },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1AttributeValue(value, context),
    };
  }, {});
};

const serializeAws_json1_1PlayerDataMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1PlayerIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PlayerLatency = (input: PlayerLatency, context: __SerdeContext): any => {
  return {
    ...(input.LatencyInMilliseconds !== undefined &&
      input.LatencyInMilliseconds !== null && { LatencyInMilliseconds: __serializeFloat(input.LatencyInMilliseconds) }),
    ...(input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }),
    ...(input.RegionIdentifier !== undefined &&
      input.RegionIdentifier !== null && { RegionIdentifier: input.RegionIdentifier }),
  };
};

const serializeAws_json1_1PlayerLatencyList = (input: PlayerLatency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PlayerLatency(entry, context);
    });
};

const serializeAws_json1_1PlayerLatencyPolicy = (input: PlayerLatencyPolicy, context: __SerdeContext): any => {
  return {
    ...(input.MaximumIndividualPlayerLatencyMilliseconds !== undefined &&
      input.MaximumIndividualPlayerLatencyMilliseconds !== null && {
        MaximumIndividualPlayerLatencyMilliseconds: input.MaximumIndividualPlayerLatencyMilliseconds,
      }),
    ...(input.PolicyDurationSeconds !== undefined &&
      input.PolicyDurationSeconds !== null && { PolicyDurationSeconds: input.PolicyDurationSeconds }),
  };
};

const serializeAws_json1_1PlayerLatencyPolicyList = (input: PlayerLatencyPolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PlayerLatencyPolicy(entry, context);
    });
};

const serializeAws_json1_1PlayerList = (input: Player[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Player(entry, context);
    });
};

const serializeAws_json1_1PriorityConfiguration = (input: PriorityConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LocationOrder !== undefined &&
      input.LocationOrder !== null && {
        LocationOrder: serializeAws_json1_1LocationList(input.LocationOrder, context),
      }),
    ...(input.PriorityOrder !== undefined &&
      input.PriorityOrder !== null && {
        PriorityOrder: serializeAws_json1_1PriorityTypeList(input.PriorityOrder, context),
      }),
  };
};

const serializeAws_json1_1PriorityTypeList = (input: (PriorityType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PutScalingPolicyInput = (input: PutScalingPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator !== undefined &&
      input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.EvaluationPeriods !== undefined &&
      input.EvaluationPeriods !== null && { EvaluationPeriods: input.EvaluationPeriods }),
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType }),
    ...(input.ScalingAdjustment !== undefined &&
      input.ScalingAdjustment !== null && { ScalingAdjustment: input.ScalingAdjustment }),
    ...(input.ScalingAdjustmentType !== undefined &&
      input.ScalingAdjustmentType !== null && { ScalingAdjustmentType: input.ScalingAdjustmentType }),
    ...(input.TargetConfiguration !== undefined &&
      input.TargetConfiguration !== null && {
        TargetConfiguration: serializeAws_json1_1TargetConfiguration(input.TargetConfiguration, context),
      }),
    ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: __serializeFloat(input.Threshold) }),
  };
};

const serializeAws_json1_1QueueArnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RegisterGameServerInput = (input: RegisterGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionInfo !== undefined &&
      input.ConnectionInfo !== null && { ConnectionInfo: input.ConnectionInfo }),
    ...(input.GameServerData !== undefined &&
      input.GameServerData !== null && { GameServerData: input.GameServerData }),
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }),
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_json1_1RequestUploadCredentialsInput = (
  input: RequestUploadCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
  };
};

const serializeAws_json1_1ResolveAliasInput = (input: ResolveAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
  };
};

const serializeAws_json1_1ResourceCreationLimitPolicy = (
  input: ResourceCreationLimitPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.NewGameSessionsPerCreator !== undefined &&
      input.NewGameSessionsPerCreator !== null && { NewGameSessionsPerCreator: input.NewGameSessionsPerCreator }),
    ...(input.PolicyPeriodInMinutes !== undefined &&
      input.PolicyPeriodInMinutes !== null && { PolicyPeriodInMinutes: input.PolicyPeriodInMinutes }),
  };
};

const serializeAws_json1_1ResumeGameServerGroupInput = (
  input: ResumeGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.ResumeActions !== undefined &&
      input.ResumeActions !== null && {
        ResumeActions: serializeAws_json1_1GameServerGroupActions(input.ResumeActions, context),
      }),
  };
};

const serializeAws_json1_1RoutingStrategy = (input: RoutingStrategy, context: __SerdeContext): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Message !== undefined && input.Message !== null && { Message: input.Message }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1RuntimeConfiguration = (input: RuntimeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.GameSessionActivationTimeoutSeconds !== undefined &&
      input.GameSessionActivationTimeoutSeconds !== null && {
        GameSessionActivationTimeoutSeconds: input.GameSessionActivationTimeoutSeconds,
      }),
    ...(input.MaxConcurrentGameSessionActivations !== undefined &&
      input.MaxConcurrentGameSessionActivations !== null && {
        MaxConcurrentGameSessionActivations: input.MaxConcurrentGameSessionActivations,
      }),
    ...(input.ServerProcesses !== undefined &&
      input.ServerProcesses !== null && {
        ServerProcesses: serializeAws_json1_1ServerProcessList(input.ServerProcesses, context),
      }),
  };
};

const serializeAws_json1_1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.ObjectVersion !== undefined && input.ObjectVersion !== null && { ObjectVersion: input.ObjectVersion }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1SearchGameSessionsInput = (input: SearchGameSessionsInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    ...(input.FilterExpression !== undefined &&
      input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortExpression !== undefined &&
      input.SortExpression !== null && { SortExpression: input.SortExpression }),
  };
};

const serializeAws_json1_1ServerProcess = (input: ServerProcess, context: __SerdeContext): any => {
  return {
    ...(input.ConcurrentExecutions !== undefined &&
      input.ConcurrentExecutions !== null && { ConcurrentExecutions: input.ConcurrentExecutions }),
    ...(input.LaunchPath !== undefined && input.LaunchPath !== null && { LaunchPath: input.LaunchPath }),
    ...(input.Parameters !== undefined && input.Parameters !== null && { Parameters: input.Parameters }),
  };
};

const serializeAws_json1_1ServerProcessList = (input: ServerProcess[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ServerProcess(entry, context);
    });
};

const serializeAws_json1_1StartFleetActionsInput = (input: StartFleetActionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Actions !== undefined &&
      input.Actions !== null && { Actions: serializeAws_json1_1FleetActionList(input.Actions, context) }),
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
  };
};

const serializeAws_json1_1StartGameSessionPlacementInput = (
  input: StartGameSessionPlacementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DesiredPlayerSessions !== undefined &&
      input.DesiredPlayerSessions !== null && {
        DesiredPlayerSessions: serializeAws_json1_1DesiredPlayerSessionList(input.DesiredPlayerSessions, context),
      }),
    ...(input.GameProperties !== undefined &&
      input.GameProperties !== null && {
        GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
      }),
    ...(input.GameSessionData !== undefined &&
      input.GameSessionData !== null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionName !== undefined &&
      input.GameSessionName !== null && { GameSessionName: input.GameSessionName }),
    ...(input.GameSessionQueueName !== undefined &&
      input.GameSessionQueueName !== null && { GameSessionQueueName: input.GameSessionQueueName }),
    ...(input.MaximumPlayerSessionCount !== undefined &&
      input.MaximumPlayerSessionCount !== null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
    ...(input.PlacementId !== undefined && input.PlacementId !== null && { PlacementId: input.PlacementId }),
    ...(input.PlayerLatencies !== undefined &&
      input.PlayerLatencies !== null && {
        PlayerLatencies: serializeAws_json1_1PlayerLatencyList(input.PlayerLatencies, context),
      }),
  };
};

const serializeAws_json1_1StartMatchBackfillInput = (input: StartMatchBackfillInput, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationName !== undefined &&
      input.ConfigurationName !== null && { ConfigurationName: input.ConfigurationName }),
    ...(input.GameSessionArn !== undefined &&
      input.GameSessionArn !== null && { GameSessionArn: input.GameSessionArn }),
    ...(input.Players !== undefined &&
      input.Players !== null && { Players: serializeAws_json1_1PlayerList(input.Players, context) }),
    ...(input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }),
  };
};

const serializeAws_json1_1StartMatchmakingInput = (input: StartMatchmakingInput, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationName !== undefined &&
      input.ConfigurationName !== null && { ConfigurationName: input.ConfigurationName }),
    ...(input.Players !== undefined &&
      input.Players !== null && { Players: serializeAws_json1_1PlayerList(input.Players, context) }),
    ...(input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }),
  };
};

const serializeAws_json1_1StopFleetActionsInput = (input: StopFleetActionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Actions !== undefined &&
      input.Actions !== null && { Actions: serializeAws_json1_1FleetActionList(input.Actions, context) }),
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
  };
};

const serializeAws_json1_1StopGameSessionPlacementInput = (
  input: StopGameSessionPlacementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PlacementId !== undefined && input.PlacementId !== null && { PlacementId: input.PlacementId }),
  };
};

const serializeAws_json1_1StopMatchmakingInput = (input: StopMatchmakingInput, context: __SerdeContext): any => {
  return {
    ...(input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }),
  };
};

const serializeAws_json1_1StringDoubleMap = (input: { [key: string]: number }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __serializeFloat(value),
    };
  }, {});
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SuspendGameServerGroupInput = (
  input: SuspendGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.SuspendActions !== undefined &&
      input.SuspendActions !== null && {
        SuspendActions: serializeAws_json1_1GameServerGroupActions(input.SuspendActions, context),
      }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TargetConfiguration = (input: TargetConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.TargetValue !== undefined &&
      input.TargetValue !== null && { TargetValue: __serializeFloat(input.TargetValue) }),
  };
};

const serializeAws_json1_1TargetTrackingConfiguration = (
  input: TargetTrackingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetValue !== undefined &&
      input.TargetValue !== null && { TargetValue: __serializeFloat(input.TargetValue) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAliasInput = (input: UpdateAliasInput, context: __SerdeContext): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoutingStrategy !== undefined &&
      input.RoutingStrategy !== null && {
        RoutingStrategy: serializeAws_json1_1RoutingStrategy(input.RoutingStrategy, context),
      }),
  };
};

const serializeAws_json1_1UpdateBuildInput = (input: UpdateBuildInput, context: __SerdeContext): any => {
  return {
    ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_json1_1UpdateFleetAttributesInput = (
  input: UpdateFleetAttributesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.MetricGroups !== undefined &&
      input.MetricGroups !== null && {
        MetricGroups: serializeAws_json1_1MetricGroupList(input.MetricGroups, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NewGameSessionProtectionPolicy !== undefined &&
      input.NewGameSessionProtectionPolicy !== null && {
        NewGameSessionProtectionPolicy: input.NewGameSessionProtectionPolicy,
      }),
    ...(input.ResourceCreationLimitPolicy !== undefined &&
      input.ResourceCreationLimitPolicy !== null && {
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
    ...(input.DesiredInstances !== undefined &&
      input.DesiredInstances !== null && { DesiredInstances: input.DesiredInstances }),
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    ...(input.MaxSize !== undefined && input.MaxSize !== null && { MaxSize: input.MaxSize }),
    ...(input.MinSize !== undefined && input.MinSize !== null && { MinSize: input.MinSize }),
  };
};

const serializeAws_json1_1UpdateFleetPortSettingsInput = (
  input: UpdateFleetPortSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.InboundPermissionAuthorizations !== undefined &&
      input.InboundPermissionAuthorizations !== null && {
        InboundPermissionAuthorizations: serializeAws_json1_1IpPermissionsList(
          input.InboundPermissionAuthorizations,
          context
        ),
      }),
    ...(input.InboundPermissionRevocations !== undefined &&
      input.InboundPermissionRevocations !== null && {
        InboundPermissionRevocations: serializeAws_json1_1IpPermissionsList(
          input.InboundPermissionRevocations,
          context
        ),
      }),
  };
};

const serializeAws_json1_1UpdateGameServerGroupInput = (
  input: UpdateGameServerGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BalancingStrategy !== undefined &&
      input.BalancingStrategy !== null && { BalancingStrategy: input.BalancingStrategy }),
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerProtectionPolicy !== undefined &&
      input.GameServerProtectionPolicy !== null && { GameServerProtectionPolicy: input.GameServerProtectionPolicy }),
    ...(input.InstanceDefinitions !== undefined &&
      input.InstanceDefinitions !== null && {
        InstanceDefinitions: serializeAws_json1_1InstanceDefinitions(input.InstanceDefinitions, context),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1UpdateGameServerInput = (input: UpdateGameServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GameServerData !== undefined &&
      input.GameServerData !== null && { GameServerData: input.GameServerData }),
    ...(input.GameServerGroupName !== undefined &&
      input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    ...(input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }),
    ...(input.HealthCheck !== undefined && input.HealthCheck !== null && { HealthCheck: input.HealthCheck }),
    ...(input.UtilizationStatus !== undefined &&
      input.UtilizationStatus !== null && { UtilizationStatus: input.UtilizationStatus }),
  };
};

const serializeAws_json1_1UpdateGameSessionInput = (input: UpdateGameSessionInput, context: __SerdeContext): any => {
  return {
    ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
    ...(input.MaximumPlayerSessionCount !== undefined &&
      input.MaximumPlayerSessionCount !== null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PlayerSessionCreationPolicy !== undefined &&
      input.PlayerSessionCreationPolicy !== null && { PlayerSessionCreationPolicy: input.PlayerSessionCreationPolicy }),
    ...(input.ProtectionPolicy !== undefined &&
      input.ProtectionPolicy !== null && { ProtectionPolicy: input.ProtectionPolicy }),
  };
};

const serializeAws_json1_1UpdateGameSessionQueueInput = (
  input: UpdateGameSessionQueueInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomEventData !== undefined &&
      input.CustomEventData !== null && { CustomEventData: input.CustomEventData }),
    ...(input.Destinations !== undefined &&
      input.Destinations !== null && {
        Destinations: serializeAws_json1_1GameSessionQueueDestinationList(input.Destinations, context),
      }),
    ...(input.FilterConfiguration !== undefined &&
      input.FilterConfiguration !== null && {
        FilterConfiguration: serializeAws_json1_1FilterConfiguration(input.FilterConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NotificationTarget !== undefined &&
      input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget }),
    ...(input.PlayerLatencyPolicies !== undefined &&
      input.PlayerLatencyPolicies !== null && {
        PlayerLatencyPolicies: serializeAws_json1_1PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context),
      }),
    ...(input.PriorityConfiguration !== undefined &&
      input.PriorityConfiguration !== null && {
        PriorityConfiguration: serializeAws_json1_1PriorityConfiguration(input.PriorityConfiguration, context),
      }),
    ...(input.TimeoutInSeconds !== undefined &&
      input.TimeoutInSeconds !== null && { TimeoutInSeconds: input.TimeoutInSeconds }),
  };
};

const serializeAws_json1_1UpdateMatchmakingConfigurationInput = (
  input: UpdateMatchmakingConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptanceRequired !== undefined &&
      input.AcceptanceRequired !== null && { AcceptanceRequired: input.AcceptanceRequired }),
    ...(input.AcceptanceTimeoutSeconds !== undefined &&
      input.AcceptanceTimeoutSeconds !== null && { AcceptanceTimeoutSeconds: input.AcceptanceTimeoutSeconds }),
    ...(input.AdditionalPlayerCount !== undefined &&
      input.AdditionalPlayerCount !== null && { AdditionalPlayerCount: input.AdditionalPlayerCount }),
    ...(input.BackfillMode !== undefined && input.BackfillMode !== null && { BackfillMode: input.BackfillMode }),
    ...(input.CustomEventData !== undefined &&
      input.CustomEventData !== null && { CustomEventData: input.CustomEventData }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.FlexMatchMode !== undefined && input.FlexMatchMode !== null && { FlexMatchMode: input.FlexMatchMode }),
    ...(input.GameProperties !== undefined &&
      input.GameProperties !== null && {
        GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
      }),
    ...(input.GameSessionData !== undefined &&
      input.GameSessionData !== null && { GameSessionData: input.GameSessionData }),
    ...(input.GameSessionQueueArns !== undefined &&
      input.GameSessionQueueArns !== null && {
        GameSessionQueueArns: serializeAws_json1_1QueueArnsList(input.GameSessionQueueArns, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NotificationTarget !== undefined &&
      input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget }),
    ...(input.RequestTimeoutSeconds !== undefined &&
      input.RequestTimeoutSeconds !== null && { RequestTimeoutSeconds: input.RequestTimeoutSeconds }),
    ...(input.RuleSetName !== undefined && input.RuleSetName !== null && { RuleSetName: input.RuleSetName }),
  };
};

const serializeAws_json1_1UpdateRuntimeConfigurationInput = (
  input: UpdateRuntimeConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    ...(input.RuntimeConfiguration !== undefined &&
      input.RuntimeConfiguration !== null && {
        RuntimeConfiguration: serializeAws_json1_1RuntimeConfiguration(input.RuntimeConfiguration, context),
      }),
  };
};

const serializeAws_json1_1UpdateScriptInput = (input: UpdateScriptInput, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }),
    ...(input.StorageLocation !== undefined &&
      input.StorageLocation !== null && {
        StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
      }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    ...(input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

const serializeAws_json1_1ValidateMatchmakingRuleSetInput = (
  input: ValidateMatchmakingRuleSetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RuleSetBody !== undefined && input.RuleSetBody !== null && { RuleSetBody: input.RuleSetBody }),
  };
};

const serializeAws_json1_1VpcSubnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    RoutingStrategy:
      output.RoutingStrategy !== undefined && output.RoutingStrategy !== null
        ? deserializeAws_json1_1RoutingStrategy(output.RoutingStrategy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AliasList = (output: any, context: __SerdeContext): Alias[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Alias(entry, context);
    });
};

const deserializeAws_json1_1AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  return {
    N: __limitedParseDouble(output.N),
    S: __expectString(output.S),
    SDM:
      output.SDM !== undefined && output.SDM !== null
        ? deserializeAws_json1_1StringDoubleMap(output.SDM, context)
        : undefined,
    SL:
      output.SL !== undefined && output.SL !== null ? deserializeAws_json1_1StringList(output.SL, context) : undefined,
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
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Name: __expectString(output.Name),
    OperatingSystem: __expectString(output.OperatingSystem),
    SizeOnDisk: __expectLong(output.SizeOnDisk),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1BuildList = (output: any, context: __SerdeContext): Build[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Build(entry, context);
    });
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
    GameServer:
      output.GameServer !== undefined && output.GameServer !== null
        ? deserializeAws_json1_1GameServer(output.GameServer, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateAliasOutput = (output: any, context: __SerdeContext): CreateAliasOutput => {
  return {
    Alias:
      output.Alias !== undefined && output.Alias !== null
        ? deserializeAws_json1_1Alias(output.Alias, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateBuildOutput = (output: any, context: __SerdeContext): CreateBuildOutput => {
  return {
    Build:
      output.Build !== undefined && output.Build !== null
        ? deserializeAws_json1_1Build(output.Build, context)
        : undefined,
    StorageLocation:
      output.StorageLocation !== undefined && output.StorageLocation !== null
        ? deserializeAws_json1_1S3Location(output.StorageLocation, context)
        : undefined,
    UploadCredentials:
      output.UploadCredentials !== undefined && output.UploadCredentials !== null
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
      output.LocationStates !== undefined && output.LocationStates !== null
        ? deserializeAws_json1_1LocationStateList(output.LocationStates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFleetOutput = (output: any, context: __SerdeContext): CreateFleetOutput => {
  return {
    FleetAttributes:
      output.FleetAttributes !== undefined && output.FleetAttributes !== null
        ? deserializeAws_json1_1FleetAttributes(output.FleetAttributes, context)
        : undefined,
    LocationStates:
      output.LocationStates !== undefined && output.LocationStates !== null
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
      output.GameServerGroup !== undefined && output.GameServerGroup !== null
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
      output.GameSession !== undefined && output.GameSession !== null
        ? deserializeAws_json1_1GameSession(output.GameSession, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateGameSessionQueueOutput = (
  output: any,
  context: __SerdeContext
): CreateGameSessionQueueOutput => {
  return {
    GameSessionQueue:
      output.GameSessionQueue !== undefined && output.GameSessionQueue !== null
        ? deserializeAws_json1_1GameSessionQueue(output.GameSessionQueue, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateMatchmakingConfigurationOutput = (
  output: any,
  context: __SerdeContext
): CreateMatchmakingConfigurationOutput => {
  return {
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_json1_1MatchmakingConfiguration(output.Configuration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateMatchmakingRuleSetOutput = (
  output: any,
  context: __SerdeContext
): CreateMatchmakingRuleSetOutput => {
  return {
    RuleSet:
      output.RuleSet !== undefined && output.RuleSet !== null
        ? deserializeAws_json1_1MatchmakingRuleSet(output.RuleSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreatePlayerSessionOutput = (
  output: any,
  context: __SerdeContext
): CreatePlayerSessionOutput => {
  return {
    PlayerSession:
      output.PlayerSession !== undefined && output.PlayerSession !== null
        ? deserializeAws_json1_1PlayerSession(output.PlayerSession, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreatePlayerSessionsOutput = (
  output: any,
  context: __SerdeContext
): CreatePlayerSessionsOutput => {
  return {
    PlayerSessions:
      output.PlayerSessions !== undefined && output.PlayerSessions !== null
        ? deserializeAws_json1_1PlayerSessionList(output.PlayerSessions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateScriptOutput = (output: any, context: __SerdeContext): CreateScriptOutput => {
  return {
    Script:
      output.Script !== undefined && output.Script !== null
        ? deserializeAws_json1_1Script(output.Script, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput = (
  output: any,
  context: __SerdeContext
): CreateVpcPeeringAuthorizationOutput => {
  return {
    VpcPeeringAuthorization:
      output.VpcPeeringAuthorization !== undefined && output.VpcPeeringAuthorization !== null
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
      output.LocationStates !== undefined && output.LocationStates !== null
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
      output.GameServerGroup !== undefined && output.GameServerGroup !== null
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

const deserializeAws_json1_1DescribeAliasOutput = (output: any, context: __SerdeContext): DescribeAliasOutput => {
  return {
    Alias:
      output.Alias !== undefined && output.Alias !== null
        ? deserializeAws_json1_1Alias(output.Alias, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeBuildOutput = (output: any, context: __SerdeContext): DescribeBuildOutput => {
  return {
    Build:
      output.Build !== undefined && output.Build !== null
        ? deserializeAws_json1_1Build(output.Build, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEC2InstanceLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeEC2InstanceLimitsOutput => {
  return {
    EC2InstanceLimits:
      output.EC2InstanceLimits !== undefined && output.EC2InstanceLimits !== null
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
      output.FleetAttributes !== undefined && output.FleetAttributes !== null
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
      output.FleetCapacity !== undefined && output.FleetCapacity !== null
        ? deserializeAws_json1_1FleetCapacityList(output.FleetCapacity, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFleetEventsOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetEventsOutput => {
  return {
    Events:
      output.Events !== undefined && output.Events !== null
        ? deserializeAws_json1_1EventList(output.Events, context)
        : undefined,
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
      output.LocationAttributes !== undefined && output.LocationAttributes !== null
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
      output.FleetCapacity !== undefined && output.FleetCapacity !== null
        ? deserializeAws_json1_1FleetCapacity(output.FleetCapacity, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFleetLocationUtilizationOutput = (
  output: any,
  context: __SerdeContext
): DescribeFleetLocationUtilizationOutput => {
  return {
    FleetUtilization:
      output.FleetUtilization !== undefined && output.FleetUtilization !== null
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
      output.InboundPermissions !== undefined && output.InboundPermissions !== null
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
      output.FleetUtilization !== undefined && output.FleetUtilization !== null
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
      output.GameServerGroup !== undefined && output.GameServerGroup !== null
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
      output.GameServerInstances !== undefined && output.GameServerInstances !== null
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
    GameServer:
      output.GameServer !== undefined && output.GameServer !== null
        ? deserializeAws_json1_1GameServer(output.GameServer, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeGameSessionDetailsOutput = (
  output: any,
  context: __SerdeContext
): DescribeGameSessionDetailsOutput => {
  return {
    GameSessionDetails:
      output.GameSessionDetails !== undefined && output.GameSessionDetails !== null
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
      output.GameSessionPlacement !== undefined && output.GameSessionPlacement !== null
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
      output.GameSessionQueues !== undefined && output.GameSessionQueues !== null
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
      output.GameSessions !== undefined && output.GameSessions !== null
        ? deserializeAws_json1_1GameSessionList(output.GameSessions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeInstancesOutput = (
  output: any,
  context: __SerdeContext
): DescribeInstancesOutput => {
  return {
    Instances:
      output.Instances !== undefined && output.Instances !== null
        ? deserializeAws_json1_1InstanceList(output.Instances, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMatchmakingConfigurationsOutput => {
  return {
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
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
      output.TicketList !== undefined && output.TicketList !== null
        ? deserializeAws_json1_1MatchmakingTicketList(output.TicketList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput = (
  output: any,
  context: __SerdeContext
): DescribeMatchmakingRuleSetsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    RuleSets:
      output.RuleSets !== undefined && output.RuleSets !== null
        ? deserializeAws_json1_1MatchmakingRuleSetList(output.RuleSets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePlayerSessionsOutput = (
  output: any,
  context: __SerdeContext
): DescribePlayerSessionsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    PlayerSessions:
      output.PlayerSessions !== undefined && output.PlayerSessions !== null
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
      output.RuntimeConfiguration !== undefined && output.RuntimeConfiguration !== null
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
      output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
        ? deserializeAws_json1_1ScalingPolicyList(output.ScalingPolicies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeScriptOutput = (output: any, context: __SerdeContext): DescribeScriptOutput => {
  return {
    Script:
      output.Script !== undefined && output.Script !== null
        ? deserializeAws_json1_1Script(output.Script, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeVpcPeeringAuthorizationsOutput => {
  return {
    VpcPeeringAuthorizations:
      output.VpcPeeringAuthorizations !== undefined && output.VpcPeeringAuthorizations !== null
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
      output.VpcPeeringConnections !== undefined && output.VpcPeeringConnections !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EC2InstanceLimit(entry, context);
    });
};

const deserializeAws_json1_1Event = (output: any, context: __SerdeContext): Event => {
  return {
    EventCode: __expectString(output.EventCode),
    EventId: __expectString(output.EventId),
    EventTime:
      output.EventTime !== undefined && output.EventTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventTime)))
        : undefined,
    Message: __expectString(output.Message),
    PreSignedLogUrl: __expectString(output.PreSignedLogUrl),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

const deserializeAws_json1_1EventList = (output: any, context: __SerdeContext): Event[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Event(entry, context);
    });
};

const deserializeAws_json1_1FilterConfiguration = (output: any, context: __SerdeContext): FilterConfiguration => {
  return {
    AllowedLocations:
      output.AllowedLocations !== undefined && output.AllowedLocations !== null
        ? deserializeAws_json1_1LocationList(output.AllowedLocations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FleetActionList = (output: any, context: __SerdeContext): (FleetAction | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1FleetAttributes = (output: any, context: __SerdeContext): FleetAttributes => {
  return {
    BuildArn: __expectString(output.BuildArn),
    BuildId: __expectString(output.BuildId),
    CertificateConfiguration:
      output.CertificateConfiguration !== undefined && output.CertificateConfiguration !== null
        ? deserializeAws_json1_1CertificateConfiguration(output.CertificateConfiguration, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    FleetType: __expectString(output.FleetType),
    InstanceRoleArn: __expectString(output.InstanceRoleArn),
    InstanceType: __expectString(output.InstanceType),
    LogPaths:
      output.LogPaths !== undefined && output.LogPaths !== null
        ? deserializeAws_json1_1StringList(output.LogPaths, context)
        : undefined,
    MetricGroups:
      output.MetricGroups !== undefined && output.MetricGroups !== null
        ? deserializeAws_json1_1MetricGroupList(output.MetricGroups, context)
        : undefined,
    Name: __expectString(output.Name),
    NewGameSessionProtectionPolicy: __expectString(output.NewGameSessionProtectionPolicy),
    OperatingSystem: __expectString(output.OperatingSystem),
    ResourceCreationLimitPolicy:
      output.ResourceCreationLimitPolicy !== undefined && output.ResourceCreationLimitPolicy !== null
        ? deserializeAws_json1_1ResourceCreationLimitPolicy(output.ResourceCreationLimitPolicy, context)
        : undefined,
    ScriptArn: __expectString(output.ScriptArn),
    ScriptId: __expectString(output.ScriptId),
    ServerLaunchParameters: __expectString(output.ServerLaunchParameters),
    ServerLaunchPath: __expectString(output.ServerLaunchPath),
    Status: __expectString(output.Status),
    StoppedActions:
      output.StoppedActions !== undefined && output.StoppedActions !== null
        ? deserializeAws_json1_1FleetActionList(output.StoppedActions, context)
        : undefined,
    TerminationTime:
      output.TerminationTime !== undefined && output.TerminationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TerminationTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1FleetAttributesList = (output: any, context: __SerdeContext): FleetAttributes[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FleetAttributes(entry, context);
    });
};

const deserializeAws_json1_1FleetCapacity = (output: any, context: __SerdeContext): FleetCapacity => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    InstanceCounts:
      output.InstanceCounts !== undefined && output.InstanceCounts !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FleetCapacity(entry, context);
    });
};

const deserializeAws_json1_1FleetIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FleetUtilization(entry, context);
    });
};

const deserializeAws_json1_1GameProperty = (output: any, context: __SerdeContext): GameProperty => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1GamePropertyList = (output: any, context: __SerdeContext): GameProperty[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameProperty(entry, context);
    });
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
      output.LastClaimTime !== undefined && output.LastClaimTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastClaimTime)))
        : undefined,
    LastHealthCheckTime:
      output.LastHealthCheckTime !== undefined && output.LastHealthCheckTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastHealthCheckTime)))
        : undefined,
    RegistrationTime:
      output.RegistrationTime !== undefined && output.RegistrationTime !== null
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
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    GameServerGroupArn: __expectString(output.GameServerGroupArn),
    GameServerGroupName: __expectString(output.GameServerGroupName),
    GameServerProtectionPolicy: __expectString(output.GameServerProtectionPolicy),
    InstanceDefinitions:
      output.InstanceDefinitions !== undefined && output.InstanceDefinitions !== null
        ? deserializeAws_json1_1InstanceDefinitions(output.InstanceDefinitions, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
    SuspendedActions:
      output.SuspendedActions !== undefined && output.SuspendedActions !== null
        ? deserializeAws_json1_1GameServerGroupActions(output.SuspendedActions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GameServerGroupActions = (
  output: any,
  context: __SerdeContext
): (GameServerGroupAction | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1GameServerGroups = (output: any, context: __SerdeContext): GameServerGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameServerGroup(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameServerInstance(entry, context);
    });
};

const deserializeAws_json1_1GameServers = (output: any, context: __SerdeContext): GameServer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameServer(entry, context);
    });
};

const deserializeAws_json1_1GameSession = (output: any, context: __SerdeContext): GameSession => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    CreatorId: __expectString(output.CreatorId),
    CurrentPlayerSessionCount: __expectInt32(output.CurrentPlayerSessionCount),
    DnsName: __expectString(output.DnsName),
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    GameProperties:
      output.GameProperties !== undefined && output.GameProperties !== null
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
      output.TerminationTime !== undefined && output.TerminationTime !== null
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
      output.MatchedPlayerSessions !== undefined && output.MatchedPlayerSessions !== null
        ? deserializeAws_json1_1MatchedPlayerSessionList(output.MatchedPlayerSessions, context)
        : undefined,
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_json1_1GameSessionDetail = (output: any, context: __SerdeContext): GameSessionDetail => {
  return {
    GameSession:
      output.GameSession !== undefined && output.GameSession !== null
        ? deserializeAws_json1_1GameSession(output.GameSession, context)
        : undefined,
    ProtectionPolicy: __expectString(output.ProtectionPolicy),
  } as any;
};

const deserializeAws_json1_1GameSessionDetailList = (output: any, context: __SerdeContext): GameSessionDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameSessionDetail(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameSession(entry, context);
    });
};

const deserializeAws_json1_1GameSessionPlacement = (output: any, context: __SerdeContext): GameSessionPlacement => {
  return {
    DnsName: __expectString(output.DnsName),
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime)))
        : undefined,
    GameProperties:
      output.GameProperties !== undefined && output.GameProperties !== null
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
      output.PlacedPlayerSessions !== undefined && output.PlacedPlayerSessions !== null
        ? deserializeAws_json1_1PlacedPlayerSessionList(output.PlacedPlayerSessions, context)
        : undefined,
    PlacementId: __expectString(output.PlacementId),
    PlayerLatencies:
      output.PlayerLatencies !== undefined && output.PlayerLatencies !== null
        ? deserializeAws_json1_1PlayerLatencyList(output.PlayerLatencies, context)
        : undefined,
    Port: __expectInt32(output.Port),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1GameSessionQueue = (output: any, context: __SerdeContext): GameSessionQueue => {
  return {
    CustomEventData: __expectString(output.CustomEventData),
    Destinations:
      output.Destinations !== undefined && output.Destinations !== null
        ? deserializeAws_json1_1GameSessionQueueDestinationList(output.Destinations, context)
        : undefined,
    FilterConfiguration:
      output.FilterConfiguration !== undefined && output.FilterConfiguration !== null
        ? deserializeAws_json1_1FilterConfiguration(output.FilterConfiguration, context)
        : undefined,
    GameSessionQueueArn: __expectString(output.GameSessionQueueArn),
    Name: __expectString(output.Name),
    NotificationTarget: __expectString(output.NotificationTarget),
    PlayerLatencyPolicies:
      output.PlayerLatencyPolicies !== undefined && output.PlayerLatencyPolicies !== null
        ? deserializeAws_json1_1PlayerLatencyPolicyList(output.PlayerLatencyPolicies, context)
        : undefined,
    PriorityConfiguration:
      output.PriorityConfiguration !== undefined && output.PriorityConfiguration !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameSessionQueueDestination(entry, context);
    });
};

const deserializeAws_json1_1GameSessionQueueList = (output: any, context: __SerdeContext): GameSessionQueue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GameSessionQueue(entry, context);
    });
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
      output.InstanceAccess !== undefined && output.InstanceAccess !== null
        ? deserializeAws_json1_1InstanceAccess(output.InstanceAccess, context)
        : undefined,
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
      output.CreationTime !== undefined && output.CreationTime !== null
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
      output.Credentials !== undefined && output.Credentials !== null
        ? deserializeAws_json1_1InstanceCredentials(output.Credentials, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceDefinition(entry, context);
    });
};

const deserializeAws_json1_1InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Instance(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IpPermission(entry, context);
    });
};

const deserializeAws_json1_1LatencyMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectInt32(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAliasesOutput = (output: any, context: __SerdeContext): ListAliasesOutput => {
  return {
    Aliases:
      output.Aliases !== undefined && output.Aliases !== null
        ? deserializeAws_json1_1AliasList(output.Aliases, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListBuildsOutput = (output: any, context: __SerdeContext): ListBuildsOutput => {
  return {
    Builds:
      output.Builds !== undefined && output.Builds !== null
        ? deserializeAws_json1_1BuildList(output.Builds, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListFleetsOutput = (output: any, context: __SerdeContext): ListFleetsOutput => {
  return {
    FleetIds:
      output.FleetIds !== undefined && output.FleetIds !== null
        ? deserializeAws_json1_1FleetIdList(output.FleetIds, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGameServerGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListGameServerGroupsOutput => {
  return {
    GameServerGroups:
      output.GameServerGroups !== undefined && output.GameServerGroups !== null
        ? deserializeAws_json1_1GameServerGroups(output.GameServerGroups, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGameServersOutput = (output: any, context: __SerdeContext): ListGameServersOutput => {
  return {
    GameServers:
      output.GameServers !== undefined && output.GameServers !== null
        ? deserializeAws_json1_1GameServers(output.GameServers, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListScriptsOutput = (output: any, context: __SerdeContext): ListScriptsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Scripts:
      output.Scripts !== undefined && output.Scripts !== null
        ? deserializeAws_json1_1ScriptList(output.Scripts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LocationAttributes = (output: any, context: __SerdeContext): LocationAttributes => {
  return {
    LocationState:
      output.LocationState !== undefined && output.LocationState !== null
        ? deserializeAws_json1_1LocationState(output.LocationState, context)
        : undefined,
    StoppedActions:
      output.StoppedActions !== undefined && output.StoppedActions !== null
        ? deserializeAws_json1_1FleetActionList(output.StoppedActions, context)
        : undefined,
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

const deserializeAws_json1_1LocationAttributesList = (output: any, context: __SerdeContext): LocationAttributes[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LocationAttributes(entry, context);
    });
};

const deserializeAws_json1_1LocationList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1LocationState = (output: any, context: __SerdeContext): LocationState => {
  return {
    Location: __expectString(output.Location),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1LocationStateList = (output: any, context: __SerdeContext): LocationState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LocationState(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MatchedPlayerSession(entry, context);
    });
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
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    CustomEventData: __expectString(output.CustomEventData),
    Description: __expectString(output.Description),
    FlexMatchMode: __expectString(output.FlexMatchMode),
    GameProperties:
      output.GameProperties !== undefined && output.GameProperties !== null
        ? deserializeAws_json1_1GamePropertyList(output.GameProperties, context)
        : undefined,
    GameSessionData: __expectString(output.GameSessionData),
    GameSessionQueueArns:
      output.GameSessionQueueArns !== undefined && output.GameSessionQueueArns !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MatchmakingConfiguration(entry, context);
    });
};

const deserializeAws_json1_1MatchmakingRuleSet = (output: any, context: __SerdeContext): MatchmakingRuleSet => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    RuleSetArn: __expectString(output.RuleSetArn),
    RuleSetBody: __expectString(output.RuleSetBody),
    RuleSetName: __expectString(output.RuleSetName),
  } as any;
};

const deserializeAws_json1_1MatchmakingRuleSetList = (output: any, context: __SerdeContext): MatchmakingRuleSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MatchmakingRuleSet(entry, context);
    });
};

const deserializeAws_json1_1MatchmakingTicket = (output: any, context: __SerdeContext): MatchmakingTicket => {
  return {
    ConfigurationArn: __expectString(output.ConfigurationArn),
    ConfigurationName: __expectString(output.ConfigurationName),
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime)))
        : undefined,
    EstimatedWaitTime: __expectInt32(output.EstimatedWaitTime),
    GameSessionConnectionInfo:
      output.GameSessionConnectionInfo !== undefined && output.GameSessionConnectionInfo !== null
        ? deserializeAws_json1_1GameSessionConnectionInfo(output.GameSessionConnectionInfo, context)
        : undefined,
    Players:
      output.Players !== undefined && output.Players !== null
        ? deserializeAws_json1_1PlayerList(output.Players, context)
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    StatusReason: __expectString(output.StatusReason),
    TicketId: __expectString(output.TicketId),
  } as any;
};

const deserializeAws_json1_1MatchmakingTicketList = (output: any, context: __SerdeContext): MatchmakingTicket[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MatchmakingTicket(entry, context);
    });
};

const deserializeAws_json1_1MetricGroupList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlacedPlayerSession(entry, context);
    });
};

const deserializeAws_json1_1Player = (output: any, context: __SerdeContext): Player => {
  return {
    LatencyInMs:
      output.LatencyInMs !== undefined && output.LatencyInMs !== null
        ? deserializeAws_json1_1LatencyMap(output.LatencyInMs, context)
        : undefined,
    PlayerAttributes:
      output.PlayerAttributes !== undefined && output.PlayerAttributes !== null
        ? deserializeAws_json1_1PlayerAttributeMap(output.PlayerAttributes, context)
        : undefined,
    PlayerId: __expectString(output.PlayerId),
    Team: __expectString(output.Team),
  } as any;
};

const deserializeAws_json1_1PlayerAttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  return Object.entries(output).reduce((acc: { [key: string]: AttributeValue }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1AttributeValue(value, context),
    };
  }, {});
};

const deserializeAws_json1_1PlayerLatency = (output: any, context: __SerdeContext): PlayerLatency => {
  return {
    LatencyInMilliseconds: __limitedParseFloat32(output.LatencyInMilliseconds),
    PlayerId: __expectString(output.PlayerId),
    RegionIdentifier: __expectString(output.RegionIdentifier),
  } as any;
};

const deserializeAws_json1_1PlayerLatencyList = (output: any, context: __SerdeContext): PlayerLatency[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlayerLatency(entry, context);
    });
};

const deserializeAws_json1_1PlayerLatencyPolicy = (output: any, context: __SerdeContext): PlayerLatencyPolicy => {
  return {
    MaximumIndividualPlayerLatencyMilliseconds: __expectInt32(output.MaximumIndividualPlayerLatencyMilliseconds),
    PolicyDurationSeconds: __expectInt32(output.PolicyDurationSeconds),
  } as any;
};

const deserializeAws_json1_1PlayerLatencyPolicyList = (output: any, context: __SerdeContext): PlayerLatencyPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlayerLatencyPolicy(entry, context);
    });
};

const deserializeAws_json1_1PlayerList = (output: any, context: __SerdeContext): Player[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Player(entry, context);
    });
};

const deserializeAws_json1_1PlayerSession = (output: any, context: __SerdeContext): PlayerSession => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
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
      output.TerminationTime !== undefined && output.TerminationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TerminationTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1PlayerSessionList = (output: any, context: __SerdeContext): PlayerSession[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlayerSession(entry, context);
    });
};

const deserializeAws_json1_1PriorityConfiguration = (output: any, context: __SerdeContext): PriorityConfiguration => {
  return {
    LocationOrder:
      output.LocationOrder !== undefined && output.LocationOrder !== null
        ? deserializeAws_json1_1LocationList(output.LocationOrder, context)
        : undefined,
    PriorityOrder:
      output.PriorityOrder !== undefined && output.PriorityOrder !== null
        ? deserializeAws_json1_1PriorityTypeList(output.PriorityOrder, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PriorityTypeList = (output: any, context: __SerdeContext): (PriorityType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1PutScalingPolicyOutput = (output: any, context: __SerdeContext): PutScalingPolicyOutput => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1QueueArnsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1RegisterGameServerOutput = (
  output: any,
  context: __SerdeContext
): RegisterGameServerOutput => {
  return {
    GameServer:
      output.GameServer !== undefined && output.GameServer !== null
        ? deserializeAws_json1_1GameServer(output.GameServer, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RequestUploadCredentialsOutput = (
  output: any,
  context: __SerdeContext
): RequestUploadCredentialsOutput => {
  return {
    StorageLocation:
      output.StorageLocation !== undefined && output.StorageLocation !== null
        ? deserializeAws_json1_1S3Location(output.StorageLocation, context)
        : undefined,
    UploadCredentials:
      output.UploadCredentials !== undefined && output.UploadCredentials !== null
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
      output.GameServerGroup !== undefined && output.GameServerGroup !== null
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
      output.ServerProcesses !== undefined && output.ServerProcesses !== null
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
      output.TargetConfiguration !== undefined && output.TargetConfiguration !== null
        ? deserializeAws_json1_1TargetConfiguration(output.TargetConfiguration, context)
        : undefined,
    Threshold: __limitedParseDouble(output.Threshold),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

const deserializeAws_json1_1ScalingPolicyList = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingPolicy(entry, context);
    });
};

const deserializeAws_json1_1Script = (output: any, context: __SerdeContext): Script => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Name: __expectString(output.Name),
    ScriptArn: __expectString(output.ScriptArn),
    ScriptId: __expectString(output.ScriptId),
    SizeOnDisk: __expectLong(output.SizeOnDisk),
    StorageLocation:
      output.StorageLocation !== undefined && output.StorageLocation !== null
        ? deserializeAws_json1_1S3Location(output.StorageLocation, context)
        : undefined,
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1ScriptList = (output: any, context: __SerdeContext): Script[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Script(entry, context);
    });
};

const deserializeAws_json1_1SearchGameSessionsOutput = (
  output: any,
  context: __SerdeContext
): SearchGameSessionsOutput => {
  return {
    GameSessions:
      output.GameSessions !== undefined && output.GameSessions !== null
        ? deserializeAws_json1_1GameSessionList(output.GameSessions, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServerProcess(entry, context);
    });
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
      output.GameSessionPlacement !== undefined && output.GameSessionPlacement !== null
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
      output.MatchmakingTicket !== undefined && output.MatchmakingTicket !== null
        ? deserializeAws_json1_1MatchmakingTicket(output.MatchmakingTicket, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartMatchmakingOutput = (output: any, context: __SerdeContext): StartMatchmakingOutput => {
  return {
    MatchmakingTicket:
      output.MatchmakingTicket !== undefined && output.MatchmakingTicket !== null
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
      output.GameSessionPlacement !== undefined && output.GameSessionPlacement !== null
        ? deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StopMatchmakingOutput = (output: any, context: __SerdeContext): StopMatchmakingOutput => {
  return {} as any;
};

const deserializeAws_json1_1StringDoubleMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __limitedParseDouble(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SuspendGameServerGroupOutput = (
  output: any,
  context: __SerdeContext
): SuspendGameServerGroupOutput => {
  return {
    GameServerGroup:
      output.GameServerGroup !== undefined && output.GameServerGroup !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
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
    Alias:
      output.Alias !== undefined && output.Alias !== null
        ? deserializeAws_json1_1Alias(output.Alias, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateBuildOutput = (output: any, context: __SerdeContext): UpdateBuildOutput => {
  return {
    Build:
      output.Build !== undefined && output.Build !== null
        ? deserializeAws_json1_1Build(output.Build, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateFleetAttributesOutput = (
  output: any,
  context: __SerdeContext
): UpdateFleetAttributesOutput => {
  return {
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
    FleetId: __expectString(output.FleetId),
  } as any;
};

const deserializeAws_json1_1UpdateGameServerGroupOutput = (
  output: any,
  context: __SerdeContext
): UpdateGameServerGroupOutput => {
  return {
    GameServerGroup:
      output.GameServerGroup !== undefined && output.GameServerGroup !== null
        ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateGameServerOutput = (output: any, context: __SerdeContext): UpdateGameServerOutput => {
  return {
    GameServer:
      output.GameServer !== undefined && output.GameServer !== null
        ? deserializeAws_json1_1GameServer(output.GameServer, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateGameSessionOutput = (
  output: any,
  context: __SerdeContext
): UpdateGameSessionOutput => {
  return {
    GameSession:
      output.GameSession !== undefined && output.GameSession !== null
        ? deserializeAws_json1_1GameSession(output.GameSession, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateGameSessionQueueOutput = (
  output: any,
  context: __SerdeContext
): UpdateGameSessionQueueOutput => {
  return {
    GameSessionQueue:
      output.GameSessionQueue !== undefined && output.GameSessionQueue !== null
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
      output.Configuration !== undefined && output.Configuration !== null
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
      output.RuntimeConfiguration !== undefined && output.RuntimeConfiguration !== null
        ? deserializeAws_json1_1RuntimeConfiguration(output.RuntimeConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateScriptOutput = (output: any, context: __SerdeContext): UpdateScriptOutput => {
  return {
    Script:
      output.Script !== undefined && output.Script !== null
        ? deserializeAws_json1_1Script(output.Script, context)
        : undefined,
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
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VpcPeeringAuthorization(entry, context);
    });
};

const deserializeAws_json1_1VpcPeeringConnection = (output: any, context: __SerdeContext): VpcPeeringConnection => {
  return {
    FleetArn: __expectString(output.FleetArn),
    FleetId: __expectString(output.FleetId),
    GameLiftVpcId: __expectString(output.GameLiftVpcId),
    IpV4CidrBlock: __expectString(output.IpV4CidrBlock),
    PeerVpcId: __expectString(output.PeerVpcId),
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1VpcPeeringConnectionStatus(output.Status, context)
        : undefined,
    VpcPeeringConnectionId: __expectString(output.VpcPeeringConnectionId),
  } as any;
};

const deserializeAws_json1_1VpcPeeringConnectionList = (
  output: any,
  context: __SerdeContext
): VpcPeeringConnection[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VpcPeeringConnection(entry, context);
    });
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
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
