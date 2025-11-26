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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultEventBridgeHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
import { UpdateEventBusCommandInput, UpdateEventBusCommandOutput } from "./commands/UpdateEventBusCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
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
  | UpdateEndpointCommandInput
  | UpdateEventBusCommandInput;

/**
 * @public
 */
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
  | UpdateEndpointCommandOutput
  | UpdateEventBusCommandOutput;

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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type EventBridgeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of EventBridgeClient class constructor that set the region, credentials and other options.
 */
export interface EventBridgeClientConfig extends EventBridgeClientConfigType {}

/**
 * @public
 */
export type EventBridgeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of EventBridgeClient class. This is resolved and normalized from the {@link EventBridgeClientConfig | constructor configuration interface}.
 */
export interface EventBridgeClientResolvedConfig extends EventBridgeClientResolvedConfigType {}

/**
 * <p>Amazon EventBridge helps you to respond to state changes in your Amazon Web Services
 *       resources. When your resources change state, they automatically send events to an event
 *       stream. You can create rules that match selected events in the stream and route them to
 *       targets to take action. You can also use rules to take action on a predetermined schedule. For
 *       example, you can configure rules to:</p>
 *          <ul>
 *             <li>
 *                <p>Automatically invoke an Lambda function to update DNS entries when an
 *           event notifies you that Amazon EC2 instance enters the running state.</p>
 *             </li>
 *             <li>
 *                <p>Direct specific API records from CloudTrail to an Amazon Kinesis
 *           data stream for detailed analysis of potential security or availability risks.</p>
 *             </li>
 *             <li>
 *                <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS
 *           volume.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about the features of Amazon EventBridge, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide">Amazon EventBridge User
 *         Guide</a>.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<EventBridgeClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultEventBridgeHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: EventBridgeClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
            "aws.auth#sigv4a": config.credentials,
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
