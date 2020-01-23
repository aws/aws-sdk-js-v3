import {
  AcceptMatchInput,
  AcceptMatchOutput,
  CreateAliasInput,
  CreateAliasOutput,
  CreateBuildInput,
  CreateBuildOutput,
  CreateFleetInput,
  CreateFleetOutput,
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
  DescribeFleetPortSettingsInput,
  DescribeFleetPortSettingsOutput,
  DescribeFleetUtilizationInput,
  DescribeFleetUtilizationOutput,
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
  GetGameSessionLogUrlInput,
  GetGameSessionLogUrlOutput,
  GetInstanceAccessInput,
  GetInstanceAccessOutput,
  ListAliasesInput,
  ListAliasesOutput,
  ListBuildsInput,
  ListBuildsOutput,
  ListFleetsInput,
  ListFleetsOutput,
  ListScriptsInput,
  ListScriptsOutput,
  PutScalingPolicyInput,
  PutScalingPolicyOutput,
  RequestUploadCredentialsInput,
  RequestUploadCredentialsOutput,
  ResolveAliasInput,
  ResolveAliasOutput,
  SearchGameSessionsInput,
  SearchGameSessionsOutput,
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
  ValidateMatchmakingRuleSetOutput
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AcceptMatchInput
  | CreateAliasInput
  | CreateBuildInput
  | CreateFleetInput
  | CreateGameSessionInput
  | CreateGameSessionQueueInput
  | CreateMatchmakingConfigurationInput
  | CreateMatchmakingRuleSetInput
  | CreatePlayerSessionInput
  | CreatePlayerSessionsInput
  | CreateScriptInput
  | CreateVpcPeeringAuthorizationInput
  | CreateVpcPeeringConnectionInput
  | DeleteAliasInput
  | DeleteBuildInput
  | DeleteFleetInput
  | DeleteGameSessionQueueInput
  | DeleteMatchmakingConfigurationInput
  | DeleteMatchmakingRuleSetInput
  | DeleteScalingPolicyInput
  | DeleteScriptInput
  | DeleteVpcPeeringAuthorizationInput
  | DeleteVpcPeeringConnectionInput
  | DescribeAliasInput
  | DescribeBuildInput
  | DescribeEC2InstanceLimitsInput
  | DescribeFleetAttributesInput
  | DescribeFleetCapacityInput
  | DescribeFleetEventsInput
  | DescribeFleetPortSettingsInput
  | DescribeFleetUtilizationInput
  | DescribeGameSessionDetailsInput
  | DescribeGameSessionPlacementInput
  | DescribeGameSessionQueuesInput
  | DescribeGameSessionsInput
  | DescribeInstancesInput
  | DescribeMatchmakingConfigurationsInput
  | DescribeMatchmakingInput
  | DescribeMatchmakingRuleSetsInput
  | DescribePlayerSessionsInput
  | DescribeRuntimeConfigurationInput
  | DescribeScalingPoliciesInput
  | DescribeScriptInput
  | DescribeVpcPeeringAuthorizationsInput
  | DescribeVpcPeeringConnectionsInput
  | GetGameSessionLogUrlInput
  | GetInstanceAccessInput
  | ListAliasesInput
  | ListBuildsInput
  | ListFleetsInput
  | ListScriptsInput
  | PutScalingPolicyInput
  | RequestUploadCredentialsInput
  | ResolveAliasInput
  | SearchGameSessionsInput
  | StartFleetActionsInput
  | StartGameSessionPlacementInput
  | StartMatchBackfillInput
  | StartMatchmakingInput
  | StopFleetActionsInput
  | StopGameSessionPlacementInput
  | StopMatchmakingInput
  | UpdateAliasInput
  | UpdateBuildInput
  | UpdateFleetAttributesInput
  | UpdateFleetCapacityInput
  | UpdateFleetPortSettingsInput
  | UpdateGameSessionInput
  | UpdateGameSessionQueueInput
  | UpdateMatchmakingConfigurationInput
  | UpdateRuntimeConfigurationInput
  | UpdateScriptInput
  | ValidateMatchmakingRuleSetInput;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AcceptMatchOutput
  | CreateAliasOutput
  | CreateBuildOutput
  | CreateFleetOutput
  | CreateGameSessionOutput
  | CreateGameSessionQueueOutput
  | CreateMatchmakingConfigurationOutput
  | CreateMatchmakingRuleSetOutput
  | CreatePlayerSessionOutput
  | CreatePlayerSessionsOutput
  | CreateScriptOutput
  | CreateVpcPeeringAuthorizationOutput
  | CreateVpcPeeringConnectionOutput
  | DeleteGameSessionQueueOutput
  | DeleteMatchmakingConfigurationOutput
  | DeleteMatchmakingRuleSetOutput
  | DeleteVpcPeeringAuthorizationOutput
  | DeleteVpcPeeringConnectionOutput
  | DescribeAliasOutput
  | DescribeBuildOutput
  | DescribeEC2InstanceLimitsOutput
  | DescribeFleetAttributesOutput
  | DescribeFleetCapacityOutput
  | DescribeFleetEventsOutput
  | DescribeFleetPortSettingsOutput
  | DescribeFleetUtilizationOutput
  | DescribeGameSessionDetailsOutput
  | DescribeGameSessionPlacementOutput
  | DescribeGameSessionQueuesOutput
  | DescribeGameSessionsOutput
  | DescribeInstancesOutput
  | DescribeMatchmakingConfigurationsOutput
  | DescribeMatchmakingOutput
  | DescribeMatchmakingRuleSetsOutput
  | DescribePlayerSessionsOutput
  | DescribeRuntimeConfigurationOutput
  | DescribeScalingPoliciesOutput
  | DescribeScriptOutput
  | DescribeVpcPeeringAuthorizationsOutput
  | DescribeVpcPeeringConnectionsOutput
  | GetGameSessionLogUrlOutput
  | GetInstanceAccessOutput
  | ListAliasesOutput
  | ListBuildsOutput
  | ListFleetsOutput
  | ListScriptsOutput
  | PutScalingPolicyOutput
  | RequestUploadCredentialsOutput
  | ResolveAliasOutput
  | SearchGameSessionsOutput
  | StartFleetActionsOutput
  | StartGameSessionPlacementOutput
  | StartMatchBackfillOutput
  | StartMatchmakingOutput
  | StopFleetActionsOutput
  | StopGameSessionPlacementOutput
  | StopMatchmakingOutput
  | UpdateAliasOutput
  | UpdateBuildOutput
  | UpdateFleetAttributesOutput
  | UpdateFleetCapacityOutput
  | UpdateFleetPortSettingsOutput
  | UpdateGameSessionOutput
  | UpdateGameSessionQueueOutput
  | UpdateMatchmakingConfigurationOutput
  | UpdateRuntimeConfigurationOutput
  | UpdateScriptOutput
  | ValidateMatchmakingRuleSetOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type GameLiftClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type GameLiftClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *         <fullname>Amazon GameLift Service</fullname>
 *         <p> Amazon GameLift is a managed service for developers who need a scalable, dedicated server
 *             solution for their multiplayer games. Use Amazon GameLift for these tasks: (1) set up computing
 *             resources and deploy your game servers, (2) run game sessions and get players into
 *             games, (3) automatically scale your resources to meet player demand and manage costs,
 *             and (4) track in-depth metrics on game server performance and player usage.</p>
 *
 *         <p>When setting up hosting resources, you can deploy your custom game server or use the
 *             Amazon GameLift Realtime Servers. Realtime Servers gives you the ability to quickly stand up lightweight, efficient
 *             game servers with the core Amazon GameLift infrastructure already built in.</p>
 *
 *         <p>
 *             <b>Get Amazon GameLift Tools and Resources</b>
 *          </p>
 *         <p>This reference guide describes the low-level service API for Amazon GameLift and provides links to
 *             language-specific SDK reference topics. See also
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html">
 *                 Amazon GameLift Tools and Resources</a>.</p>
 *         <p>
 *             <b>API Summary</b>
 *          </p>
 *         <p>The Amazon GameLift service API includes two key sets of actions:</p>
 *         <ul>
 *             <li>
 *                 <p>Manage game sessions and player access --
 *                     Integrate this functionality into game client services in order to create new game
 *                     sessions, retrieve information on existing game sessions; reserve a player slot
 *                     in a game session, request matchmaking, etc.</p>
 *             </li>
 *             <li>
 *                 <p>Configure and manage game server resources --
 *                     Manage your Amazon GameLift hosting resources, including builds, scripts, fleets, queues,
 *                     and aliases. Set up matchmakers, configure auto-scaling, retrieve game logs, and
 *                     get hosting and game metrics.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>
 *                <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">
 *             Task-based list of API actions</a>
 *             </b>
 *          </p>
 *
 */
export class GameLiftClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GameLiftClientResolvedConfig
> {
  readonly config: GameLiftClientResolvedConfig;

  constructor(configuration: GameLiftClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
