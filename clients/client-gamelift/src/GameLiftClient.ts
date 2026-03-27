// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultGameLiftHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AcceptMatchCommandInput, AcceptMatchCommandOutput } from "./commands/AcceptMatchCommand";
import type { ClaimGameServerCommandInput, ClaimGameServerCommandOutput } from "./commands/ClaimGameServerCommand";
import type { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import type { CreateBuildCommandInput, CreateBuildCommandOutput } from "./commands/CreateBuildCommand";
import type {
  CreateContainerFleetCommandInput,
  CreateContainerFleetCommandOutput,
} from "./commands/CreateContainerFleetCommand";
import type {
  CreateContainerGroupDefinitionCommandInput,
  CreateContainerGroupDefinitionCommandOutput,
} from "./commands/CreateContainerGroupDefinitionCommand";
import type { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import type {
  CreateFleetLocationsCommandInput,
  CreateFleetLocationsCommandOutput,
} from "./commands/CreateFleetLocationsCommand";
import type {
  CreateGameServerGroupCommandInput,
  CreateGameServerGroupCommandOutput,
} from "./commands/CreateGameServerGroupCommand";
import type {
  CreateGameSessionCommandInput,
  CreateGameSessionCommandOutput,
} from "./commands/CreateGameSessionCommand";
import type {
  CreateGameSessionQueueCommandInput,
  CreateGameSessionQueueCommandOutput,
} from "./commands/CreateGameSessionQueueCommand";
import type { CreateLocationCommandInput, CreateLocationCommandOutput } from "./commands/CreateLocationCommand";
import type {
  CreateMatchmakingConfigurationCommandInput,
  CreateMatchmakingConfigurationCommandOutput,
} from "./commands/CreateMatchmakingConfigurationCommand";
import type {
  CreateMatchmakingRuleSetCommandInput,
  CreateMatchmakingRuleSetCommandOutput,
} from "./commands/CreateMatchmakingRuleSetCommand";
import type {
  CreatePlayerSessionCommandInput,
  CreatePlayerSessionCommandOutput,
} from "./commands/CreatePlayerSessionCommand";
import type {
  CreatePlayerSessionsCommandInput,
  CreatePlayerSessionsCommandOutput,
} from "./commands/CreatePlayerSessionsCommand";
import type { CreateScriptCommandInput, CreateScriptCommandOutput } from "./commands/CreateScriptCommand";
import type {
  CreateVpcPeeringAuthorizationCommandInput,
  CreateVpcPeeringAuthorizationCommandOutput,
} from "./commands/CreateVpcPeeringAuthorizationCommand";
import type {
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
} from "./commands/CreateVpcPeeringConnectionCommand";
import type { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import type { DeleteBuildCommandInput, DeleteBuildCommandOutput } from "./commands/DeleteBuildCommand";
import type {
  DeleteContainerFleetCommandInput,
  DeleteContainerFleetCommandOutput,
} from "./commands/DeleteContainerFleetCommand";
import type {
  DeleteContainerGroupDefinitionCommandInput,
  DeleteContainerGroupDefinitionCommandOutput,
} from "./commands/DeleteContainerGroupDefinitionCommand";
import type { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import type {
  DeleteFleetLocationsCommandInput,
  DeleteFleetLocationsCommandOutput,
} from "./commands/DeleteFleetLocationsCommand";
import type {
  DeleteGameServerGroupCommandInput,
  DeleteGameServerGroupCommandOutput,
} from "./commands/DeleteGameServerGroupCommand";
import type {
  DeleteGameSessionQueueCommandInput,
  DeleteGameSessionQueueCommandOutput,
} from "./commands/DeleteGameSessionQueueCommand";
import type { DeleteLocationCommandInput, DeleteLocationCommandOutput } from "./commands/DeleteLocationCommand";
import type {
  DeleteMatchmakingConfigurationCommandInput,
  DeleteMatchmakingConfigurationCommandOutput,
} from "./commands/DeleteMatchmakingConfigurationCommand";
import type {
  DeleteMatchmakingRuleSetCommandInput,
  DeleteMatchmakingRuleSetCommandOutput,
} from "./commands/DeleteMatchmakingRuleSetCommand";
import type {
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "./commands/DeleteScalingPolicyCommand";
import type { DeleteScriptCommandInput, DeleteScriptCommandOutput } from "./commands/DeleteScriptCommand";
import type {
  DeleteVpcPeeringAuthorizationCommandInput,
  DeleteVpcPeeringAuthorizationCommandOutput,
} from "./commands/DeleteVpcPeeringAuthorizationCommand";
import type {
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
} from "./commands/DeleteVpcPeeringConnectionCommand";
import type {
  DeregisterComputeCommandInput,
  DeregisterComputeCommandOutput,
} from "./commands/DeregisterComputeCommand";
import type {
  DeregisterGameServerCommandInput,
  DeregisterGameServerCommandOutput,
} from "./commands/DeregisterGameServerCommand";
import type { DescribeAliasCommandInput, DescribeAliasCommandOutput } from "./commands/DescribeAliasCommand";
import type { DescribeBuildCommandInput, DescribeBuildCommandOutput } from "./commands/DescribeBuildCommand";
import type { DescribeComputeCommandInput, DescribeComputeCommandOutput } from "./commands/DescribeComputeCommand";
import type {
  DescribeContainerFleetCommandInput,
  DescribeContainerFleetCommandOutput,
} from "./commands/DescribeContainerFleetCommand";
import type {
  DescribeContainerGroupDefinitionCommandInput,
  DescribeContainerGroupDefinitionCommandOutput,
} from "./commands/DescribeContainerGroupDefinitionCommand";
import type {
  DescribeEC2InstanceLimitsCommandInput,
  DescribeEC2InstanceLimitsCommandOutput,
} from "./commands/DescribeEC2InstanceLimitsCommand";
import type {
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput,
} from "./commands/DescribeFleetAttributesCommand";
import type {
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
} from "./commands/DescribeFleetCapacityCommand";
import type {
  DescribeFleetDeploymentCommandInput,
  DescribeFleetDeploymentCommandOutput,
} from "./commands/DescribeFleetDeploymentCommand";
import type {
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput,
} from "./commands/DescribeFleetEventsCommand";
import type {
  DescribeFleetLocationAttributesCommandInput,
  DescribeFleetLocationAttributesCommandOutput,
} from "./commands/DescribeFleetLocationAttributesCommand";
import type {
  DescribeFleetLocationCapacityCommandInput,
  DescribeFleetLocationCapacityCommandOutput,
} from "./commands/DescribeFleetLocationCapacityCommand";
import type {
  DescribeFleetLocationUtilizationCommandInput,
  DescribeFleetLocationUtilizationCommandOutput,
} from "./commands/DescribeFleetLocationUtilizationCommand";
import type {
  DescribeFleetPortSettingsCommandInput,
  DescribeFleetPortSettingsCommandOutput,
} from "./commands/DescribeFleetPortSettingsCommand";
import type {
  DescribeFleetUtilizationCommandInput,
  DescribeFleetUtilizationCommandOutput,
} from "./commands/DescribeFleetUtilizationCommand";
import type {
  DescribeGameServerCommandInput,
  DescribeGameServerCommandOutput,
} from "./commands/DescribeGameServerCommand";
import type {
  DescribeGameServerGroupCommandInput,
  DescribeGameServerGroupCommandOutput,
} from "./commands/DescribeGameServerGroupCommand";
import type {
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
} from "./commands/DescribeGameServerInstancesCommand";
import type {
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput,
} from "./commands/DescribeGameSessionDetailsCommand";
import type {
  DescribeGameSessionPlacementCommandInput,
  DescribeGameSessionPlacementCommandOutput,
} from "./commands/DescribeGameSessionPlacementCommand";
import type {
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
} from "./commands/DescribeGameSessionQueuesCommand";
import type {
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput,
} from "./commands/DescribeGameSessionsCommand";
import type {
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "./commands/DescribeInstancesCommand";
import type {
  DescribeMatchmakingCommandInput,
  DescribeMatchmakingCommandOutput,
} from "./commands/DescribeMatchmakingCommand";
import type {
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
} from "./commands/DescribeMatchmakingConfigurationsCommand";
import type {
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput,
} from "./commands/DescribeMatchmakingRuleSetsCommand";
import type {
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
} from "./commands/DescribePlayerSessionsCommand";
import type {
  DescribeRuntimeConfigurationCommandInput,
  DescribeRuntimeConfigurationCommandOutput,
} from "./commands/DescribeRuntimeConfigurationCommand";
import type {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "./commands/DescribeScalingPoliciesCommand";
import type { DescribeScriptCommandInput, DescribeScriptCommandOutput } from "./commands/DescribeScriptCommand";
import type {
  DescribeVpcPeeringAuthorizationsCommandInput,
  DescribeVpcPeeringAuthorizationsCommandOutput,
} from "./commands/DescribeVpcPeeringAuthorizationsCommand";
import type {
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
} from "./commands/DescribeVpcPeeringConnectionsCommand";
import type { GetComputeAccessCommandInput, GetComputeAccessCommandOutput } from "./commands/GetComputeAccessCommand";
import type {
  GetComputeAuthTokenCommandInput,
  GetComputeAuthTokenCommandOutput,
} from "./commands/GetComputeAuthTokenCommand";
import type {
  GetGameSessionLogUrlCommandInput,
  GetGameSessionLogUrlCommandOutput,
} from "./commands/GetGameSessionLogUrlCommand";
import type {
  GetInstanceAccessCommandInput,
  GetInstanceAccessCommandOutput,
} from "./commands/GetInstanceAccessCommand";
import type {
  GetPlayerConnectionDetailsCommandInput,
  GetPlayerConnectionDetailsCommandOutput,
} from "./commands/GetPlayerConnectionDetailsCommand";
import type { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import type { ListBuildsCommandInput, ListBuildsCommandOutput } from "./commands/ListBuildsCommand";
import type { ListComputeCommandInput, ListComputeCommandOutput } from "./commands/ListComputeCommand";
import type {
  ListContainerFleetsCommandInput,
  ListContainerFleetsCommandOutput,
} from "./commands/ListContainerFleetsCommand";
import type {
  ListContainerGroupDefinitionsCommandInput,
  ListContainerGroupDefinitionsCommandOutput,
} from "./commands/ListContainerGroupDefinitionsCommand";
import type {
  ListContainerGroupDefinitionVersionsCommandInput,
  ListContainerGroupDefinitionVersionsCommandOutput,
} from "./commands/ListContainerGroupDefinitionVersionsCommand";
import type {
  ListFleetDeploymentsCommandInput,
  ListFleetDeploymentsCommandOutput,
} from "./commands/ListFleetDeploymentsCommand";
import type { ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import type {
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
} from "./commands/ListGameServerGroupsCommand";
import type { ListGameServersCommandInput, ListGameServersCommandOutput } from "./commands/ListGameServersCommand";
import type { ListLocationsCommandInput, ListLocationsCommandOutput } from "./commands/ListLocationsCommand";
import type { ListScriptsCommandInput, ListScriptsCommandOutput } from "./commands/ListScriptsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "./commands/PutScalingPolicyCommand";
import type { RegisterComputeCommandInput, RegisterComputeCommandOutput } from "./commands/RegisterComputeCommand";
import type {
  RegisterGameServerCommandInput,
  RegisterGameServerCommandOutput,
} from "./commands/RegisterGameServerCommand";
import type {
  RequestUploadCredentialsCommandInput,
  RequestUploadCredentialsCommandOutput,
} from "./commands/RequestUploadCredentialsCommand";
import type { ResolveAliasCommandInput, ResolveAliasCommandOutput } from "./commands/ResolveAliasCommand";
import type {
  ResumeGameServerGroupCommandInput,
  ResumeGameServerGroupCommandOutput,
} from "./commands/ResumeGameServerGroupCommand";
import type {
  SearchGameSessionsCommandInput,
  SearchGameSessionsCommandOutput,
} from "./commands/SearchGameSessionsCommand";
import type {
  StartFleetActionsCommandInput,
  StartFleetActionsCommandOutput,
} from "./commands/StartFleetActionsCommand";
import type {
  StartGameSessionPlacementCommandInput,
  StartGameSessionPlacementCommandOutput,
} from "./commands/StartGameSessionPlacementCommand";
import type {
  StartMatchBackfillCommandInput,
  StartMatchBackfillCommandOutput,
} from "./commands/StartMatchBackfillCommand";
import type { StartMatchmakingCommandInput, StartMatchmakingCommandOutput } from "./commands/StartMatchmakingCommand";
import type { StopFleetActionsCommandInput, StopFleetActionsCommandOutput } from "./commands/StopFleetActionsCommand";
import type {
  StopGameSessionPlacementCommandInput,
  StopGameSessionPlacementCommandOutput,
} from "./commands/StopGameSessionPlacementCommand";
import type { StopMatchmakingCommandInput, StopMatchmakingCommandOutput } from "./commands/StopMatchmakingCommand";
import type {
  SuspendGameServerGroupCommandInput,
  SuspendGameServerGroupCommandOutput,
} from "./commands/SuspendGameServerGroupCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type {
  TerminateGameSessionCommandInput,
  TerminateGameSessionCommandOutput,
} from "./commands/TerminateGameSessionCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import type { UpdateBuildCommandInput, UpdateBuildCommandOutput } from "./commands/UpdateBuildCommand";
import type {
  UpdateContainerFleetCommandInput,
  UpdateContainerFleetCommandOutput,
} from "./commands/UpdateContainerFleetCommand";
import type {
  UpdateContainerGroupDefinitionCommandInput,
  UpdateContainerGroupDefinitionCommandOutput,
} from "./commands/UpdateContainerGroupDefinitionCommand";
import type {
  UpdateFleetAttributesCommandInput,
  UpdateFleetAttributesCommandOutput,
} from "./commands/UpdateFleetAttributesCommand";
import type {
  UpdateFleetCapacityCommandInput,
  UpdateFleetCapacityCommandOutput,
} from "./commands/UpdateFleetCapacityCommand";
import type {
  UpdateFleetPortSettingsCommandInput,
  UpdateFleetPortSettingsCommandOutput,
} from "./commands/UpdateFleetPortSettingsCommand";
import type { UpdateGameServerCommandInput, UpdateGameServerCommandOutput } from "./commands/UpdateGameServerCommand";
import type {
  UpdateGameServerGroupCommandInput,
  UpdateGameServerGroupCommandOutput,
} from "./commands/UpdateGameServerGroupCommand";
import type {
  UpdateGameSessionCommandInput,
  UpdateGameSessionCommandOutput,
} from "./commands/UpdateGameSessionCommand";
import type {
  UpdateGameSessionQueueCommandInput,
  UpdateGameSessionQueueCommandOutput,
} from "./commands/UpdateGameSessionQueueCommand";
import type {
  UpdateMatchmakingConfigurationCommandInput,
  UpdateMatchmakingConfigurationCommandOutput,
} from "./commands/UpdateMatchmakingConfigurationCommand";
import type {
  UpdateRuntimeConfigurationCommandInput,
  UpdateRuntimeConfigurationCommandOutput,
} from "./commands/UpdateRuntimeConfigurationCommand";
import type { UpdateScriptCommandInput, UpdateScriptCommandOutput } from "./commands/UpdateScriptCommand";
import type {
  ValidateMatchmakingRuleSetCommandInput,
  ValidateMatchmakingRuleSetCommandOutput,
} from "./commands/ValidateMatchmakingRuleSetCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptMatchCommandInput
  | ClaimGameServerCommandInput
  | CreateAliasCommandInput
  | CreateBuildCommandInput
  | CreateContainerFleetCommandInput
  | CreateContainerGroupDefinitionCommandInput
  | CreateFleetCommandInput
  | CreateFleetLocationsCommandInput
  | CreateGameServerGroupCommandInput
  | CreateGameSessionCommandInput
  | CreateGameSessionQueueCommandInput
  | CreateLocationCommandInput
  | CreateMatchmakingConfigurationCommandInput
  | CreateMatchmakingRuleSetCommandInput
  | CreatePlayerSessionCommandInput
  | CreatePlayerSessionsCommandInput
  | CreateScriptCommandInput
  | CreateVpcPeeringAuthorizationCommandInput
  | CreateVpcPeeringConnectionCommandInput
  | DeleteAliasCommandInput
  | DeleteBuildCommandInput
  | DeleteContainerFleetCommandInput
  | DeleteContainerGroupDefinitionCommandInput
  | DeleteFleetCommandInput
  | DeleteFleetLocationsCommandInput
  | DeleteGameServerGroupCommandInput
  | DeleteGameSessionQueueCommandInput
  | DeleteLocationCommandInput
  | DeleteMatchmakingConfigurationCommandInput
  | DeleteMatchmakingRuleSetCommandInput
  | DeleteScalingPolicyCommandInput
  | DeleteScriptCommandInput
  | DeleteVpcPeeringAuthorizationCommandInput
  | DeleteVpcPeeringConnectionCommandInput
  | DeregisterComputeCommandInput
  | DeregisterGameServerCommandInput
  | DescribeAliasCommandInput
  | DescribeBuildCommandInput
  | DescribeComputeCommandInput
  | DescribeContainerFleetCommandInput
  | DescribeContainerGroupDefinitionCommandInput
  | DescribeEC2InstanceLimitsCommandInput
  | DescribeFleetAttributesCommandInput
  | DescribeFleetCapacityCommandInput
  | DescribeFleetDeploymentCommandInput
  | DescribeFleetEventsCommandInput
  | DescribeFleetLocationAttributesCommandInput
  | DescribeFleetLocationCapacityCommandInput
  | DescribeFleetLocationUtilizationCommandInput
  | DescribeFleetPortSettingsCommandInput
  | DescribeFleetUtilizationCommandInput
  | DescribeGameServerCommandInput
  | DescribeGameServerGroupCommandInput
  | DescribeGameServerInstancesCommandInput
  | DescribeGameSessionDetailsCommandInput
  | DescribeGameSessionPlacementCommandInput
  | DescribeGameSessionQueuesCommandInput
  | DescribeGameSessionsCommandInput
  | DescribeInstancesCommandInput
  | DescribeMatchmakingCommandInput
  | DescribeMatchmakingConfigurationsCommandInput
  | DescribeMatchmakingRuleSetsCommandInput
  | DescribePlayerSessionsCommandInput
  | DescribeRuntimeConfigurationCommandInput
  | DescribeScalingPoliciesCommandInput
  | DescribeScriptCommandInput
  | DescribeVpcPeeringAuthorizationsCommandInput
  | DescribeVpcPeeringConnectionsCommandInput
  | GetComputeAccessCommandInput
  | GetComputeAuthTokenCommandInput
  | GetGameSessionLogUrlCommandInput
  | GetInstanceAccessCommandInput
  | GetPlayerConnectionDetailsCommandInput
  | ListAliasesCommandInput
  | ListBuildsCommandInput
  | ListComputeCommandInput
  | ListContainerFleetsCommandInput
  | ListContainerGroupDefinitionVersionsCommandInput
  | ListContainerGroupDefinitionsCommandInput
  | ListFleetDeploymentsCommandInput
  | ListFleetsCommandInput
  | ListGameServerGroupsCommandInput
  | ListGameServersCommandInput
  | ListLocationsCommandInput
  | ListScriptsCommandInput
  | ListTagsForResourceCommandInput
  | PutScalingPolicyCommandInput
  | RegisterComputeCommandInput
  | RegisterGameServerCommandInput
  | RequestUploadCredentialsCommandInput
  | ResolveAliasCommandInput
  | ResumeGameServerGroupCommandInput
  | SearchGameSessionsCommandInput
  | StartFleetActionsCommandInput
  | StartGameSessionPlacementCommandInput
  | StartMatchBackfillCommandInput
  | StartMatchmakingCommandInput
  | StopFleetActionsCommandInput
  | StopGameSessionPlacementCommandInput
  | StopMatchmakingCommandInput
  | SuspendGameServerGroupCommandInput
  | TagResourceCommandInput
  | TerminateGameSessionCommandInput
  | UntagResourceCommandInput
  | UpdateAliasCommandInput
  | UpdateBuildCommandInput
  | UpdateContainerFleetCommandInput
  | UpdateContainerGroupDefinitionCommandInput
  | UpdateFleetAttributesCommandInput
  | UpdateFleetCapacityCommandInput
  | UpdateFleetPortSettingsCommandInput
  | UpdateGameServerCommandInput
  | UpdateGameServerGroupCommandInput
  | UpdateGameSessionCommandInput
  | UpdateGameSessionQueueCommandInput
  | UpdateMatchmakingConfigurationCommandInput
  | UpdateRuntimeConfigurationCommandInput
  | UpdateScriptCommandInput
  | ValidateMatchmakingRuleSetCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptMatchCommandOutput
  | ClaimGameServerCommandOutput
  | CreateAliasCommandOutput
  | CreateBuildCommandOutput
  | CreateContainerFleetCommandOutput
  | CreateContainerGroupDefinitionCommandOutput
  | CreateFleetCommandOutput
  | CreateFleetLocationsCommandOutput
  | CreateGameServerGroupCommandOutput
  | CreateGameSessionCommandOutput
  | CreateGameSessionQueueCommandOutput
  | CreateLocationCommandOutput
  | CreateMatchmakingConfigurationCommandOutput
  | CreateMatchmakingRuleSetCommandOutput
  | CreatePlayerSessionCommandOutput
  | CreatePlayerSessionsCommandOutput
  | CreateScriptCommandOutput
  | CreateVpcPeeringAuthorizationCommandOutput
  | CreateVpcPeeringConnectionCommandOutput
  | DeleteAliasCommandOutput
  | DeleteBuildCommandOutput
  | DeleteContainerFleetCommandOutput
  | DeleteContainerGroupDefinitionCommandOutput
  | DeleteFleetCommandOutput
  | DeleteFleetLocationsCommandOutput
  | DeleteGameServerGroupCommandOutput
  | DeleteGameSessionQueueCommandOutput
  | DeleteLocationCommandOutput
  | DeleteMatchmakingConfigurationCommandOutput
  | DeleteMatchmakingRuleSetCommandOutput
  | DeleteScalingPolicyCommandOutput
  | DeleteScriptCommandOutput
  | DeleteVpcPeeringAuthorizationCommandOutput
  | DeleteVpcPeeringConnectionCommandOutput
  | DeregisterComputeCommandOutput
  | DeregisterGameServerCommandOutput
  | DescribeAliasCommandOutput
  | DescribeBuildCommandOutput
  | DescribeComputeCommandOutput
  | DescribeContainerFleetCommandOutput
  | DescribeContainerGroupDefinitionCommandOutput
  | DescribeEC2InstanceLimitsCommandOutput
  | DescribeFleetAttributesCommandOutput
  | DescribeFleetCapacityCommandOutput
  | DescribeFleetDeploymentCommandOutput
  | DescribeFleetEventsCommandOutput
  | DescribeFleetLocationAttributesCommandOutput
  | DescribeFleetLocationCapacityCommandOutput
  | DescribeFleetLocationUtilizationCommandOutput
  | DescribeFleetPortSettingsCommandOutput
  | DescribeFleetUtilizationCommandOutput
  | DescribeGameServerCommandOutput
  | DescribeGameServerGroupCommandOutput
  | DescribeGameServerInstancesCommandOutput
  | DescribeGameSessionDetailsCommandOutput
  | DescribeGameSessionPlacementCommandOutput
  | DescribeGameSessionQueuesCommandOutput
  | DescribeGameSessionsCommandOutput
  | DescribeInstancesCommandOutput
  | DescribeMatchmakingCommandOutput
  | DescribeMatchmakingConfigurationsCommandOutput
  | DescribeMatchmakingRuleSetsCommandOutput
  | DescribePlayerSessionsCommandOutput
  | DescribeRuntimeConfigurationCommandOutput
  | DescribeScalingPoliciesCommandOutput
  | DescribeScriptCommandOutput
  | DescribeVpcPeeringAuthorizationsCommandOutput
  | DescribeVpcPeeringConnectionsCommandOutput
  | GetComputeAccessCommandOutput
  | GetComputeAuthTokenCommandOutput
  | GetGameSessionLogUrlCommandOutput
  | GetInstanceAccessCommandOutput
  | GetPlayerConnectionDetailsCommandOutput
  | ListAliasesCommandOutput
  | ListBuildsCommandOutput
  | ListComputeCommandOutput
  | ListContainerFleetsCommandOutput
  | ListContainerGroupDefinitionVersionsCommandOutput
  | ListContainerGroupDefinitionsCommandOutput
  | ListFleetDeploymentsCommandOutput
  | ListFleetsCommandOutput
  | ListGameServerGroupsCommandOutput
  | ListGameServersCommandOutput
  | ListLocationsCommandOutput
  | ListScriptsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutScalingPolicyCommandOutput
  | RegisterComputeCommandOutput
  | RegisterGameServerCommandOutput
  | RequestUploadCredentialsCommandOutput
  | ResolveAliasCommandOutput
  | ResumeGameServerGroupCommandOutput
  | SearchGameSessionsCommandOutput
  | StartFleetActionsCommandOutput
  | StartGameSessionPlacementCommandOutput
  | StartMatchBackfillCommandOutput
  | StartMatchmakingCommandOutput
  | StopFleetActionsCommandOutput
  | StopGameSessionPlacementCommandOutput
  | StopMatchmakingCommandOutput
  | SuspendGameServerGroupCommandOutput
  | TagResourceCommandOutput
  | TerminateGameSessionCommandOutput
  | UntagResourceCommandOutput
  | UpdateAliasCommandOutput
  | UpdateBuildCommandOutput
  | UpdateContainerFleetCommandOutput
  | UpdateContainerGroupDefinitionCommandOutput
  | UpdateFleetAttributesCommandOutput
  | UpdateFleetCapacityCommandOutput
  | UpdateFleetPortSettingsCommandOutput
  | UpdateGameServerCommandOutput
  | UpdateGameServerGroupCommandOutput
  | UpdateGameSessionCommandOutput
  | UpdateGameSessionQueueCommandOutput
  | UpdateMatchmakingConfigurationCommandOutput
  | UpdateRuntimeConfigurationCommandOutput
  | UpdateScriptCommandOutput
  | ValidateMatchmakingRuleSetCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type GameLiftClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of GameLiftClient class constructor that set the region, credentials and other options.
 */
export interface GameLiftClientConfig extends GameLiftClientConfigType {}

/**
 * @public
 */
export type GameLiftClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of GameLiftClient class. This is resolved and normalized from the {@link GameLiftClientConfig | constructor configuration interface}.
 */
export interface GameLiftClientResolvedConfig extends GameLiftClientResolvedConfigType {}

/**
 * <p>Amazon GameLift Servers provides solutions for hosting session-based multiplayer game servers in the
 *             cloud, including tools for deploying, operating, and scaling game servers. Built on
 *             Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance,
 *             high-reliability, low-cost game servers while dynamically scaling your resource usage to
 *             meet player demand. </p>
 *          <p>
 *             <b>About Amazon GameLift Servers solutions</b>
 *          </p>
 *          <p>Get more information on these Amazon GameLift Servers solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">Amazon GameLift Servers Developer Guide</a>.</p>
 *          <ul>
 *             <li>
 *                <p>Amazon GameLift Servers managed hosting -- Amazon GameLift Servers offers a fully managed service to set up
 *                     and maintain computing machines for hosting, manage game session and player
 *                     session life cycle, and handle security, storage, and performance tracking. You
 *                     can use automatic scaling tools to balance player demand and hosting costs,
 *                     configure your game session management to minimize player latency, and add
 *                     FlexMatch for matchmaking.</p>
 *             </li>
 *             <li>
 *                <p>Managed hosting with Amazon GameLift Servers Realtime -- With Amazon GameLift Servers Amazon GameLift Servers Realtime, you can quickly configure
 *                     and set up ready-to-go game servers for your game. Amazon GameLift Servers Realtime provides a game server
 *                     framework with core Amazon GameLift Servers infrastructure already built in. Then use the full
 *                     range of Amazon GameLift Servers managed hosting features, including FlexMatch, for your
 *                     game.</p>
 *             </li>
 *             <li>
 *                <p>Amazon GameLift Servers FleetIQ -- Use Amazon GameLift Servers FleetIQ as a standalone service while hosting your games using EC2
 *                     instances and Auto Scaling groups. Amazon GameLift Servers FleetIQ provides optimizations for game
 *                     hosting, including boosting the viability of low-cost Spot Instances gaming. For
 *                     a complete solution, pair the Amazon GameLift Servers FleetIQ and FlexMatch standalone services.</p>
 *             </li>
 *             <li>
 *                <p>Amazon GameLift Servers FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a
 *                     customizable matchmaking service for multiplayer games. Use FlexMatch as
 *                     integrated with Amazon GameLift Servers managed hosting or incorporate FlexMatch as a standalone
 *                     service into your own hosting solution.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>About this API Reference</b>
 *          </p>
 *          <p>This reference guide describes the low-level service API for Amazon GameLift Servers. With each topic
 *             in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI
 *             reference. Useful links:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">Amazon GameLift Servers API
 *                         operations listed by tasks</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> Amazon GameLift Servers tools
 *                         and resources</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class GameLiftClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GameLiftClientResolvedConfig
> {
  /**
   * The resolved configuration of GameLiftClient class. This is resolved and normalized from the {@link GameLiftClientConfig | constructor configuration interface}.
   */
  readonly config: GameLiftClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<GameLiftClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultGameLiftHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: GameLiftClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
