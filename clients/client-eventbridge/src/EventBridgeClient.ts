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

import {
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput,
} from "./commands/ActivateEventSourceCommand";
import { CancelReplayCommandInput, CancelReplayCommandOutput } from "./commands/CancelReplayCommand";
import {
  CreateApiDestinationCommandInput,
  CreateApiDestinationCommandOutput,
} from "./commands/CreateApiDestinationCommand";
import { CreateArchiveCommandInput, CreateArchiveCommandOutput } from "./commands/CreateArchiveCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import { CreateEventBusCommandInput, CreateEventBusCommandOutput } from "./commands/CreateEventBusCommand";
import {
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
} from "./commands/CreatePartnerEventSourceCommand";
import {
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput,
} from "./commands/DeactivateEventSourceCommand";
import {
  DeauthorizeConnectionCommandInput,
  DeauthorizeConnectionCommandOutput,
} from "./commands/DeauthorizeConnectionCommand";
import {
  DeleteApiDestinationCommandInput,
  DeleteApiDestinationCommandOutput,
} from "./commands/DeleteApiDestinationCommand";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "./commands/DeleteArchiveCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import { DeleteEventBusCommandInput, DeleteEventBusCommandOutput } from "./commands/DeleteEventBusCommand";
import {
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput,
} from "./commands/DeletePartnerEventSourceCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DescribeApiDestinationCommandInput,
  DescribeApiDestinationCommandOutput,
} from "./commands/DescribeApiDestinationCommand";
import { DescribeArchiveCommandInput, DescribeArchiveCommandOutput } from "./commands/DescribeArchiveCommand";
import { DescribeConnectionCommandInput, DescribeConnectionCommandOutput } from "./commands/DescribeConnectionCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "./commands/DescribeEndpointCommand";
import { DescribeEventBusCommandInput, DescribeEventBusCommandOutput } from "./commands/DescribeEventBusCommand";
import {
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
} from "./commands/DescribeEventSourceCommand";
import {
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
} from "./commands/DescribePartnerEventSourceCommand";
import { DescribeReplayCommandInput, DescribeReplayCommandOutput } from "./commands/DescribeReplayCommand";
import { DescribeRuleCommandInput, DescribeRuleCommandOutput } from "./commands/DescribeRuleCommand";
import { DisableRuleCommandInput, DisableRuleCommandOutput } from "./commands/DisableRuleCommand";
import { EnableRuleCommandInput, EnableRuleCommandOutput } from "./commands/EnableRuleCommand";
import {
  ListApiDestinationsCommandInput,
  ListApiDestinationsCommandOutput,
} from "./commands/ListApiDestinationsCommand";
import { ListArchivesCommandInput, ListArchivesCommandOutput } from "./commands/ListArchivesCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "./commands/ListConnectionsCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "./commands/ListEndpointsCommand";
import { ListEventBusesCommandInput, ListEventBusesCommandOutput } from "./commands/ListEventBusesCommand";
import { ListEventSourcesCommandInput, ListEventSourcesCommandOutput } from "./commands/ListEventSourcesCommand";
import {
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
} from "./commands/ListPartnerEventSourceAccountsCommand";
import {
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput,
} from "./commands/ListPartnerEventSourcesCommand";
import { ListReplaysCommandInput, ListReplaysCommandOutput } from "./commands/ListReplaysCommand";
import {
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
} from "./commands/ListRuleNamesByTargetCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput } from "./commands/ListTargetsByRuleCommand";
import { PutEventsCommandInput, PutEventsCommandOutput } from "./commands/PutEventsCommand";
import { PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput } from "./commands/PutPartnerEventsCommand";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "./commands/PutPermissionCommand";
import { PutRuleCommandInput, PutRuleCommandOutput } from "./commands/PutRuleCommand";
import { PutTargetsCommandInput, PutTargetsCommandOutput } from "./commands/PutTargetsCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand";
import { RemoveTargetsCommandInput, RemoveTargetsCommandOutput } from "./commands/RemoveTargetsCommand";
import { StartReplayCommandInput, StartReplayCommandOutput } from "./commands/StartReplayCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestEventPatternCommandInput, TestEventPatternCommandOutput } from "./commands/TestEventPatternCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateApiDestinationCommandInput,
  UpdateApiDestinationCommandOutput,
} from "./commands/UpdateApiDestinationCommand";
import { UpdateArchiveCommandInput, UpdateArchiveCommandOutput } from "./commands/UpdateArchiveCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "./commands/UpdateEndpointCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | ActivateEventSourceCommandInput
  | CancelReplayCommandInput
  | CreateApiDestinationCommandInput
  | CreateArchiveCommandInput
  | CreateConnectionCommandInput
  | CreateEndpointCommandInput
  | CreateEventBusCommandInput
  | CreatePartnerEventSourceCommandInput
  | DeactivateEventSourceCommandInput
  | DeauthorizeConnectionCommandInput
  | DeleteApiDestinationCommandInput
  | DeleteArchiveCommandInput
  | DeleteConnectionCommandInput
  | DeleteEndpointCommandInput
  | DeleteEventBusCommandInput
  | DeletePartnerEventSourceCommandInput
  | DeleteRuleCommandInput
  | DescribeApiDestinationCommandInput
  | DescribeArchiveCommandInput
  | DescribeConnectionCommandInput
  | DescribeEndpointCommandInput
  | DescribeEventBusCommandInput
  | DescribeEventSourceCommandInput
  | DescribePartnerEventSourceCommandInput
  | DescribeReplayCommandInput
  | DescribeRuleCommandInput
  | DisableRuleCommandInput
  | EnableRuleCommandInput
  | ListApiDestinationsCommandInput
  | ListArchivesCommandInput
  | ListConnectionsCommandInput
  | ListEndpointsCommandInput
  | ListEventBusesCommandInput
  | ListEventSourcesCommandInput
  | ListPartnerEventSourceAccountsCommandInput
  | ListPartnerEventSourcesCommandInput
  | ListReplaysCommandInput
  | ListRuleNamesByTargetCommandInput
  | ListRulesCommandInput
  | ListTagsForResourceCommandInput
  | ListTargetsByRuleCommandInput
  | PutEventsCommandInput
  | PutPartnerEventsCommandInput
  | PutPermissionCommandInput
  | PutRuleCommandInput
  | PutTargetsCommandInput
  | RemovePermissionCommandInput
  | RemoveTargetsCommandInput
  | StartReplayCommandInput
  | TagResourceCommandInput
  | TestEventPatternCommandInput
  | UntagResourceCommandInput
  | UpdateApiDestinationCommandInput
  | UpdateArchiveCommandInput
  | UpdateConnectionCommandInput
  | UpdateEndpointCommandInput;

export type ServiceOutputTypes =
  | ActivateEventSourceCommandOutput
  | CancelReplayCommandOutput
  | CreateApiDestinationCommandOutput
  | CreateArchiveCommandOutput
  | CreateConnectionCommandOutput
  | CreateEndpointCommandOutput
  | CreateEventBusCommandOutput
  | CreatePartnerEventSourceCommandOutput
  | DeactivateEventSourceCommandOutput
  | DeauthorizeConnectionCommandOutput
  | DeleteApiDestinationCommandOutput
  | DeleteArchiveCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteEndpointCommandOutput
  | DeleteEventBusCommandOutput
  | DeletePartnerEventSourceCommandOutput
  | DeleteRuleCommandOutput
  | DescribeApiDestinationCommandOutput
  | DescribeArchiveCommandOutput
  | DescribeConnectionCommandOutput
  | DescribeEndpointCommandOutput
  | DescribeEventBusCommandOutput
  | DescribeEventSourceCommandOutput
  | DescribePartnerEventSourceCommandOutput
  | DescribeReplayCommandOutput
  | DescribeRuleCommandOutput
  | DisableRuleCommandOutput
  | EnableRuleCommandOutput
  | ListApiDestinationsCommandOutput
  | ListArchivesCommandOutput
  | ListConnectionsCommandOutput
  | ListEndpointsCommandOutput
  | ListEventBusesCommandOutput
  | ListEventSourcesCommandOutput
  | ListPartnerEventSourceAccountsCommandOutput
  | ListPartnerEventSourcesCommandOutput
  | ListReplaysCommandOutput
  | ListRuleNamesByTargetCommandOutput
  | ListRulesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTargetsByRuleCommandOutput
  | PutEventsCommandOutput
  | PutPartnerEventsCommandOutput
  | PutPermissionCommandOutput
  | PutRuleCommandOutput
  | PutTargetsCommandOutput
  | RemovePermissionCommandOutput
  | RemoveTargetsCommandOutput
  | StartReplayCommandOutput
  | TagResourceCommandOutput
  | TestEventPatternCommandOutput
  | UntagResourceCommandOutput
  | UpdateApiDestinationCommandOutput
  | UpdateArchiveCommandOutput
  | UpdateConnectionCommandOutput
  | UpdateEndpointCommandOutput;

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

type EventBridgeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of EventBridgeClient class constructor that set the region, credentials and other options.
 */
export interface EventBridgeClientConfig extends EventBridgeClientConfigType {}

type EventBridgeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of EventBridgeClient class. This is resolved and normalized from the {@link EventBridgeClientConfig | constructor configuration interface}.
 */
export interface EventBridgeClientResolvedConfig extends EventBridgeClientResolvedConfigType {}

/**
 * <p>Amazon EventBridge helps you to respond to state changes in your Amazon Web Services resources. When your
 *       resources change state, they automatically send events to an event stream. You can create
 *       rules that match selected events in the stream and route them to targets to take action. You
 *       can also use rules to take action on a predetermined schedule. For example, you can configure
 *       rules to:</p>
 *          <ul>
 *             <li>
 *                <p>Automatically invoke an Lambda function to update DNS entries when an event
 *           notifies you that Amazon EC2 instance enters the running state.</p>
 *             </li>
 *             <li>
 *                <p>Direct specific API records from CloudTrail to an Amazon Kinesis data stream for
 *           detailed analysis of potential security or availability risks.</p>
 *             </li>
 *             <li>
 *                <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS
 *           volume.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about the features of Amazon EventBridge, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide">Amazon EventBridge User
 *         Guide</a>.</p>
 */
export class EventBridgeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EventBridgeClientResolvedConfig
> {
  /**
   * The resolved configuration of EventBridgeClient class. This is resolved and normalized from the {@link EventBridgeClientConfig | constructor configuration interface}.
   */
  readonly config: EventBridgeClientResolvedConfig;

  constructor(configuration: EventBridgeClientConfig) {
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
