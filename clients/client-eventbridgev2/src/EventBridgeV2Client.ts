// smithy-typescript generated code
import {
  AccountIdEndpointMode,
  AccountIdEndpointModeInputConfig,
  AccountIdEndpointModeResolvedConfig,
  resolveAccountIdEndpointModeConfig,
} from "@aws-sdk/core/account-id-endpoint";
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  defaultEventBridgeV2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { CreateEventBusCommandInput, CreateEventBusCommandOutput } from "./commands/CreateEventBusCommand";
import type {
  CreateEventSourceCommandInput,
  CreateEventSourceCommandOutput,
} from "./commands/CreateEventSourceCommand";
import type { CreateSubscriberCommandInput, CreateSubscriberCommandOutput } from "./commands/CreateSubscriberCommand";
import type { DeleteEventBusCommandInput, DeleteEventBusCommandOutput } from "./commands/DeleteEventBusCommand";
import type {
  DeleteEventSourceCommandInput,
  DeleteEventSourceCommandOutput,
} from "./commands/DeleteEventSourceCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type { DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput } from "./commands/DeleteSubscriberCommand";
import type { DescribeEventBusCommandInput, DescribeEventBusCommandOutput } from "./commands/DescribeEventBusCommand";
import type {
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
} from "./commands/DescribeEventSourceCommand";
import type {
  DescribeSubscriberCommandInput,
  DescribeSubscriberCommandOutput,
} from "./commands/DescribeSubscriberCommand";
import type {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import type { ListEventBusesCommandInput, ListEventBusesCommandOutput } from "./commands/ListEventBusesCommand";
import type { ListEventSourcesCommandInput, ListEventSourcesCommandOutput } from "./commands/ListEventSourcesCommand";
import type {
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "./commands/ListResourcePoliciesCommand";
import type { ListSubscribersCommandInput, ListSubscribersCommandOutput } from "./commands/ListSubscribersCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { PutEventsCommandInput, PutEventsCommandOutput } from "./commands/PutEventsCommand";
import type { PutRawEventsCommandInput, PutRawEventsCommandOutput } from "./commands/PutRawEventsCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type { RevokeResourceCommandInput, RevokeResourceCommandOutput } from "./commands/RevokeResourceCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateEventBusCommandInput, UpdateEventBusCommandOutput } from "./commands/UpdateEventBusCommand";
import type {
  UpdateEventSourceCommandInput,
  UpdateEventSourceCommandOutput,
} from "./commands/UpdateEventSourceCommand";
import type { UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput } from "./commands/UpdateSubscriberCommand";
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
  | CreateEventBusCommandInput
  | CreateEventSourceCommandInput
  | CreateSubscriberCommandInput
  | DeleteEventBusCommandInput
  | DeleteEventSourceCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSubscriberCommandInput
  | DescribeEventBusCommandInput
  | DescribeEventSourceCommandInput
  | DescribeSubscriberCommandInput
  | GetResourcePolicyCommandInput
  | ListEventBusesCommandInput
  | ListEventSourcesCommandInput
  | ListResourcePoliciesCommandInput
  | ListSubscribersCommandInput
  | ListTagsForResourceCommandInput
  | PutEventsCommandInput
  | PutRawEventsCommandInput
  | PutResourcePolicyCommandInput
  | RevokeResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEventBusCommandInput
  | UpdateEventSourceCommandInput
  | UpdateSubscriberCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateEventBusCommandOutput
  | CreateEventSourceCommandOutput
  | CreateSubscriberCommandOutput
  | DeleteEventBusCommandOutput
  | DeleteEventSourceCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSubscriberCommandOutput
  | DescribeEventBusCommandOutput
  | DescribeEventSourceCommandOutput
  | DescribeSubscriberCommandOutput
  | GetResourcePolicyCommandOutput
  | ListEventBusesCommandOutput
  | ListEventSourcesCommandOutput
  | ListResourcePoliciesCommandOutput
  | ListSubscribersCommandOutput
  | ListTagsForResourceCommandOutput
  | PutEventsCommandOutput
  | PutRawEventsCommandOutput
  | PutResourcePolicyCommandOutput
  | RevokeResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEventBusCommandOutput
  | UpdateEventSourceCommandOutput
  | UpdateSubscriberCommandOutput;

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
   * Defines if the AWS AccountId will be used for endpoint routing.
   */
  accountIdEndpointMode?: AccountIdEndpointMode | __Provider<AccountIdEndpointMode>;

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
export type EventBridgeV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  AccountIdEndpointModeInputConfig &
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
 *  The configuration interface of EventBridgeV2Client class constructor that set the region, credentials and other options.
 */
export interface EventBridgeV2ClientConfig extends EventBridgeV2ClientConfigType {}

/**
 * @public
 */
export type EventBridgeV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  AccountIdEndpointModeResolvedConfig &
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
 *  The resolved configuration interface of EventBridgeV2Client class. This is resolved and normalized from the {@link EventBridgeV2ClientConfig | constructor configuration interface}.
 */
export interface EventBridgeV2ClientResolvedConfig extends EventBridgeV2ClientResolvedConfigType {}

/**
 * Amazon EventBridge event bus API. An event bus receives events published by
 * your applications and AWS services, stores them for a configurable retention
 * period, and delivers them to subscribers. A subscriber filters events,
 * optionally transforms them, and invokes a target such as Lambda, SQS, SNS,
 * Kinesis, Step Functions, or an HTTP endpoint. The API manages event buses,
 * subscribers, event sources, resource policies, and tags, and publishes
 * events through PutEvents and PutRawEvents.
 * @public
 */
export class EventBridgeV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EventBridgeV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of EventBridgeV2Client class. This is resolved and normalized from the {@link EventBridgeV2ClientConfig | constructor configuration interface}.
   */
  readonly config: EventBridgeV2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<EventBridgeV2ClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveAccountIdEndpointModeConfig(_config_1);
    const _config_3 = resolveUserAgentConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveRegionConfig(_config_4);
    const _config_6 = resolveHostHeaderConfig(_config_5);
    const _config_7 = resolveEndpointConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    this.config = _config_9;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultEventBridgeV2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: EventBridgeV2ClientResolvedConfig) =>
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
