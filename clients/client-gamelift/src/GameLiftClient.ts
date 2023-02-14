// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AcceptMatchCommandInput, AcceptMatchCommandOutput } from "./commands/AcceptMatchCommand";
import { ClaimGameServerCommandInput, ClaimGameServerCommandOutput } from "./commands/ClaimGameServerCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateBuildCommandInput, CreateBuildCommandOutput } from "./commands/CreateBuildCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateFleetLocationsCommandInput,
  CreateFleetLocationsCommandOutput,
} from "./commands/CreateFleetLocationsCommand";
import {
  CreateGameServerGroupCommandInput,
  CreateGameServerGroupCommandOutput,
} from "./commands/CreateGameServerGroupCommand";
import { CreateGameSessionCommandInput, CreateGameSessionCommandOutput } from "./commands/CreateGameSessionCommand";
import {
  CreateGameSessionQueueCommandInput,
  CreateGameSessionQueueCommandOutput,
} from "./commands/CreateGameSessionQueueCommand";
import { CreateLocationCommandInput, CreateLocationCommandOutput } from "./commands/CreateLocationCommand";
import {
  CreateMatchmakingConfigurationCommandInput,
  CreateMatchmakingConfigurationCommandOutput,
} from "./commands/CreateMatchmakingConfigurationCommand";
import {
  CreateMatchmakingRuleSetCommandInput,
  CreateMatchmakingRuleSetCommandOutput,
} from "./commands/CreateMatchmakingRuleSetCommand";
import {
  CreatePlayerSessionCommandInput,
  CreatePlayerSessionCommandOutput,
} from "./commands/CreatePlayerSessionCommand";
import {
  CreatePlayerSessionsCommandInput,
  CreatePlayerSessionsCommandOutput,
} from "./commands/CreatePlayerSessionsCommand";
import { CreateScriptCommandInput, CreateScriptCommandOutput } from "./commands/CreateScriptCommand";
import {
  CreateVpcPeeringAuthorizationCommandInput,
  CreateVpcPeeringAuthorizationCommandOutput,
} from "./commands/CreateVpcPeeringAuthorizationCommand";
import {
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
} from "./commands/CreateVpcPeeringConnectionCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteBuildCommandInput, DeleteBuildCommandOutput } from "./commands/DeleteBuildCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteFleetLocationsCommandInput,
  DeleteFleetLocationsCommandOutput,
} from "./commands/DeleteFleetLocationsCommand";
import {
  DeleteGameServerGroupCommandInput,
  DeleteGameServerGroupCommandOutput,
} from "./commands/DeleteGameServerGroupCommand";
import {
  DeleteGameSessionQueueCommandInput,
  DeleteGameSessionQueueCommandOutput,
} from "./commands/DeleteGameSessionQueueCommand";
import { DeleteLocationCommandInput, DeleteLocationCommandOutput } from "./commands/DeleteLocationCommand";
import {
  DeleteMatchmakingConfigurationCommandInput,
  DeleteMatchmakingConfigurationCommandOutput,
} from "./commands/DeleteMatchmakingConfigurationCommand";
import {
  DeleteMatchmakingRuleSetCommandInput,
  DeleteMatchmakingRuleSetCommandOutput,
} from "./commands/DeleteMatchmakingRuleSetCommand";
import {
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "./commands/DeleteScalingPolicyCommand";
import { DeleteScriptCommandInput, DeleteScriptCommandOutput } from "./commands/DeleteScriptCommand";
import {
  DeleteVpcPeeringAuthorizationCommandInput,
  DeleteVpcPeeringAuthorizationCommandOutput,
} from "./commands/DeleteVpcPeeringAuthorizationCommand";
import {
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
} from "./commands/DeleteVpcPeeringConnectionCommand";
import { DeregisterComputeCommandInput, DeregisterComputeCommandOutput } from "./commands/DeregisterComputeCommand";
import {
  DeregisterGameServerCommandInput,
  DeregisterGameServerCommandOutput,
} from "./commands/DeregisterGameServerCommand";
import { DescribeAliasCommandInput, DescribeAliasCommandOutput } from "./commands/DescribeAliasCommand";
import { DescribeBuildCommandInput, DescribeBuildCommandOutput } from "./commands/DescribeBuildCommand";
import { DescribeComputeCommandInput, DescribeComputeCommandOutput } from "./commands/DescribeComputeCommand";
import {
  DescribeEC2InstanceLimitsCommandInput,
  DescribeEC2InstanceLimitsCommandOutput,
} from "./commands/DescribeEC2InstanceLimitsCommand";
import {
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput,
} from "./commands/DescribeFleetAttributesCommand";
import {
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
} from "./commands/DescribeFleetCapacityCommand";
import {
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput,
} from "./commands/DescribeFleetEventsCommand";
import {
  DescribeFleetLocationAttributesCommandInput,
  DescribeFleetLocationAttributesCommandOutput,
} from "./commands/DescribeFleetLocationAttributesCommand";
import {
  DescribeFleetLocationCapacityCommandInput,
  DescribeFleetLocationCapacityCommandOutput,
} from "./commands/DescribeFleetLocationCapacityCommand";
import {
  DescribeFleetLocationUtilizationCommandInput,
  DescribeFleetLocationUtilizationCommandOutput,
} from "./commands/DescribeFleetLocationUtilizationCommand";
import {
  DescribeFleetPortSettingsCommandInput,
  DescribeFleetPortSettingsCommandOutput,
} from "./commands/DescribeFleetPortSettingsCommand";
import {
  DescribeFleetUtilizationCommandInput,
  DescribeFleetUtilizationCommandOutput,
} from "./commands/DescribeFleetUtilizationCommand";
import { DescribeGameServerCommandInput, DescribeGameServerCommandOutput } from "./commands/DescribeGameServerCommand";
import {
  DescribeGameServerGroupCommandInput,
  DescribeGameServerGroupCommandOutput,
} from "./commands/DescribeGameServerGroupCommand";
import {
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
} from "./commands/DescribeGameServerInstancesCommand";
import {
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput,
} from "./commands/DescribeGameSessionDetailsCommand";
import {
  DescribeGameSessionPlacementCommandInput,
  DescribeGameSessionPlacementCommandOutput,
} from "./commands/DescribeGameSessionPlacementCommand";
import {
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
} from "./commands/DescribeGameSessionQueuesCommand";
import {
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput,
} from "./commands/DescribeGameSessionsCommand";
import { DescribeInstancesCommandInput, DescribeInstancesCommandOutput } from "./commands/DescribeInstancesCommand";
import {
  DescribeMatchmakingCommandInput,
  DescribeMatchmakingCommandOutput,
} from "./commands/DescribeMatchmakingCommand";
import {
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
} from "./commands/DescribeMatchmakingConfigurationsCommand";
import {
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput,
} from "./commands/DescribeMatchmakingRuleSetsCommand";
import {
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
} from "./commands/DescribePlayerSessionsCommand";
import {
  DescribeRuntimeConfigurationCommandInput,
  DescribeRuntimeConfigurationCommandOutput,
} from "./commands/DescribeRuntimeConfigurationCommand";
import {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "./commands/DescribeScalingPoliciesCommand";
import { DescribeScriptCommandInput, DescribeScriptCommandOutput } from "./commands/DescribeScriptCommand";
import {
  DescribeVpcPeeringAuthorizationsCommandInput,
  DescribeVpcPeeringAuthorizationsCommandOutput,
} from "./commands/DescribeVpcPeeringAuthorizationsCommand";
import {
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
} from "./commands/DescribeVpcPeeringConnectionsCommand";
import { GetComputeAccessCommandInput, GetComputeAccessCommandOutput } from "./commands/GetComputeAccessCommand";
import {
  GetComputeAuthTokenCommandInput,
  GetComputeAuthTokenCommandOutput,
} from "./commands/GetComputeAuthTokenCommand";
import {
  GetGameSessionLogUrlCommandInput,
  GetGameSessionLogUrlCommandOutput,
} from "./commands/GetGameSessionLogUrlCommand";
import { GetInstanceAccessCommandInput, GetInstanceAccessCommandOutput } from "./commands/GetInstanceAccessCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListBuildsCommandInput, ListBuildsCommandOutput } from "./commands/ListBuildsCommand";
import { ListComputeCommandInput, ListComputeCommandOutput } from "./commands/ListComputeCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
} from "./commands/ListGameServerGroupsCommand";
import { ListGameServersCommandInput, ListGameServersCommandOutput } from "./commands/ListGameServersCommand";
import { ListLocationsCommandInput, ListLocationsCommandOutput } from "./commands/ListLocationsCommand";
import { ListScriptsCommandInput, ListScriptsCommandOutput } from "./commands/ListScriptsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "./commands/PutScalingPolicyCommand";
import { RegisterComputeCommandInput, RegisterComputeCommandOutput } from "./commands/RegisterComputeCommand";
import { RegisterGameServerCommandInput, RegisterGameServerCommandOutput } from "./commands/RegisterGameServerCommand";
import {
  RequestUploadCredentialsCommandInput,
  RequestUploadCredentialsCommandOutput,
} from "./commands/RequestUploadCredentialsCommand";
import { ResolveAliasCommandInput, ResolveAliasCommandOutput } from "./commands/ResolveAliasCommand";
import {
  ResumeGameServerGroupCommandInput,
  ResumeGameServerGroupCommandOutput,
} from "./commands/ResumeGameServerGroupCommand";
import { SearchGameSessionsCommandInput, SearchGameSessionsCommandOutput } from "./commands/SearchGameSessionsCommand";
import { StartFleetActionsCommandInput, StartFleetActionsCommandOutput } from "./commands/StartFleetActionsCommand";
import {
  StartGameSessionPlacementCommandInput,
  StartGameSessionPlacementCommandOutput,
} from "./commands/StartGameSessionPlacementCommand";
import { StartMatchBackfillCommandInput, StartMatchBackfillCommandOutput } from "./commands/StartMatchBackfillCommand";
import { StartMatchmakingCommandInput, StartMatchmakingCommandOutput } from "./commands/StartMatchmakingCommand";
import { StopFleetActionsCommandInput, StopFleetActionsCommandOutput } from "./commands/StopFleetActionsCommand";
import {
  StopGameSessionPlacementCommandInput,
  StopGameSessionPlacementCommandOutput,
} from "./commands/StopGameSessionPlacementCommand";
import { StopMatchmakingCommandInput, StopMatchmakingCommandOutput } from "./commands/StopMatchmakingCommand";
import {
  SuspendGameServerGroupCommandInput,
  SuspendGameServerGroupCommandOutput,
} from "./commands/SuspendGameServerGroupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import { UpdateBuildCommandInput, UpdateBuildCommandOutput } from "./commands/UpdateBuildCommand";
import {
  UpdateFleetAttributesCommandInput,
  UpdateFleetAttributesCommandOutput,
} from "./commands/UpdateFleetAttributesCommand";
import {
  UpdateFleetCapacityCommandInput,
  UpdateFleetCapacityCommandOutput,
} from "./commands/UpdateFleetCapacityCommand";
import {
  UpdateFleetPortSettingsCommandInput,
  UpdateFleetPortSettingsCommandOutput,
} from "./commands/UpdateFleetPortSettingsCommand";
import { UpdateGameServerCommandInput, UpdateGameServerCommandOutput } from "./commands/UpdateGameServerCommand";
import {
  UpdateGameServerGroupCommandInput,
  UpdateGameServerGroupCommandOutput,
} from "./commands/UpdateGameServerGroupCommand";
import { UpdateGameSessionCommandInput, UpdateGameSessionCommandOutput } from "./commands/UpdateGameSessionCommand";
import {
  UpdateGameSessionQueueCommandInput,
  UpdateGameSessionQueueCommandOutput,
} from "./commands/UpdateGameSessionQueueCommand";
import {
  UpdateMatchmakingConfigurationCommandInput,
  UpdateMatchmakingConfigurationCommandOutput,
} from "./commands/UpdateMatchmakingConfigurationCommand";
import {
  UpdateRuntimeConfigurationCommandInput,
  UpdateRuntimeConfigurationCommandOutput,
} from "./commands/UpdateRuntimeConfigurationCommand";
import { UpdateScriptCommandInput, UpdateScriptCommandOutput } from "./commands/UpdateScriptCommand";
import {
  ValidateMatchmakingRuleSetCommandInput,
  ValidateMatchmakingRuleSetCommandOutput,
} from "./commands/ValidateMatchmakingRuleSetCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AcceptMatchCommandInput
  | ClaimGameServerCommandInput
  | CreateAliasCommandInput
  | CreateBuildCommandInput
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
  | DescribeEC2InstanceLimitsCommandInput
  | DescribeFleetAttributesCommandInput
  | DescribeFleetCapacityCommandInput
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
  | ListAliasesCommandInput
  | ListBuildsCommandInput
  | ListComputeCommandInput
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
  | UntagResourceCommandInput
  | UpdateAliasCommandInput
  | UpdateBuildCommandInput
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

export type ServiceOutputTypes =
  | AcceptMatchCommandOutput
  | ClaimGameServerCommandOutput
  | CreateAliasCommandOutput
  | CreateBuildCommandOutput
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
  | DescribeEC2InstanceLimitsCommandOutput
  | DescribeFleetAttributesCommandOutput
  | DescribeFleetCapacityCommandOutput
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
  | ListAliasesCommandOutput
  | ListBuildsCommandOutput
  | ListComputeCommandOutput
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
  | UntagResourceCommandOutput
  | UpdateAliasCommandOutput
  | UpdateBuildCommandOutput
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

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type GameLiftClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of GameLiftClient class constructor that set the region, credentials and other options.
 */
export interface GameLiftClientConfig extends GameLiftClientConfigType {}

type GameLiftClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of GameLiftClient class. This is resolved and normalized from the {@link GameLiftClientConfig | constructor configuration interface}.
 */
export interface GameLiftClientResolvedConfig extends GameLiftClientResolvedConfigType {}

/**
 * <p>Amazon GameLift provides solutions for hosting session-based multiplayer game servers in the
 *             cloud, including tools for deploying, operating, and scaling game servers. Built on
 *             Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance,
 *             high-reliability, low-cost game servers while dynamically scaling your resource usage to
 *             meet player demand. </p>
 *         <p>
 *             <b>About GameLift solutions</b>
 *          </p>
 *         <p>Get more information on these GameLift solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">GameLift Developer Guide</a>.</p>
 *         <ul>
 *             <li>
 *                 <p>GameLift managed hosting -- GameLift offers a fully managed service to set up
 *                     and maintain computing machines for hosting, manage game session and player
 *                     session life cycle, and handle security, storage, and performance tracking. You
 *                     can use automatic scaling tools to balance player demand and hosting costs,
 *                     configure your game session management to minimize player latency, and add
 *                     FlexMatch for matchmaking.</p>
 *             </li>
 *             <li>
 *                 <p>Managed hosting with Realtime Servers -- With GameLift Realtime Servers, you can quickly configure
 *                     and set up ready-to-go game servers for your game. Realtime Servers provides a game server
 *                     framework with core GameLift infrastructure already built in. Then use the full
 *                     range of GameLift managed hosting features, including FlexMatch, for your
 *                     game.</p>
 *             </li>
 *             <li>
 *                 <p>GameLift FleetIQ -- Use GameLift FleetIQ as a standalone service while hosting your games using EC2
 *                     instances and Auto Scaling groups. GameLift FleetIQ provides optimizations for game
 *                     hosting, including boosting the viability of low-cost Spot Instances gaming. For
 *                     a complete solution, pair the GameLift FleetIQ and FlexMatch standalone services.</p>
 *             </li>
 *             <li>
 *                 <p>GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a
 *                     customizable matchmaking service for multiplayer games. Use FlexMatch as
 *                     integrated with GameLift managed hosting or incorporate FlexMatch as a standalone
 *                     service into your own hosting solution.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>About this API Reference</b>
 *          </p>
 *         <p>This reference guide describes the low-level service API for Amazon GameLift. With each topic
 *             in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI
 *             reference. Useful links:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">GameLift API
 *                         operations listed by tasks</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> GameLift tools
 *                         and resources</a>
 *                </p>
 *             </li>
 *          </ul>
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

  constructor(configuration: GameLiftClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
