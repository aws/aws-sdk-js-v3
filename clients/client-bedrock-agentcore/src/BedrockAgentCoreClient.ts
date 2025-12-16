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
import {
  type EventStreamSerdeInputConfig,
  type EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
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
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type EventStreamSerdeProvider as __EventStreamSerdeProvider,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type SdkStreamMixinInjector as __SdkStreamMixinInjector,
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
  defaultBedrockAgentCoreHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchCreateMemoryRecordsCommandInput,
  BatchCreateMemoryRecordsCommandOutput,
} from "./commands/BatchCreateMemoryRecordsCommand";
import {
  BatchDeleteMemoryRecordsCommandInput,
  BatchDeleteMemoryRecordsCommandOutput,
} from "./commands/BatchDeleteMemoryRecordsCommand";
import {
  BatchUpdateMemoryRecordsCommandInput,
  BatchUpdateMemoryRecordsCommandOutput,
} from "./commands/BatchUpdateMemoryRecordsCommand";
import {
  CompleteResourceTokenAuthCommandInput,
  CompleteResourceTokenAuthCommandOutput,
} from "./commands/CompleteResourceTokenAuthCommand";
import { CreateEventCommandInput, CreateEventCommandOutput } from "./commands/CreateEventCommand";
import { DeleteEventCommandInput, DeleteEventCommandOutput } from "./commands/DeleteEventCommand";
import { DeleteMemoryRecordCommandInput, DeleteMemoryRecordCommandOutput } from "./commands/DeleteMemoryRecordCommand";
import { EvaluateCommandInput, EvaluateCommandOutput } from "./commands/EvaluateCommand";
import { GetAgentCardCommandInput, GetAgentCardCommandOutput } from "./commands/GetAgentCardCommand";
import { GetBrowserSessionCommandInput, GetBrowserSessionCommandOutput } from "./commands/GetBrowserSessionCommand";
import {
  GetCodeInterpreterSessionCommandInput,
  GetCodeInterpreterSessionCommandOutput,
} from "./commands/GetCodeInterpreterSessionCommand";
import { GetEventCommandInput, GetEventCommandOutput } from "./commands/GetEventCommand";
import { GetMemoryRecordCommandInput, GetMemoryRecordCommandOutput } from "./commands/GetMemoryRecordCommand";
import { GetResourceApiKeyCommandInput, GetResourceApiKeyCommandOutput } from "./commands/GetResourceApiKeyCommand";
import {
  GetResourceOauth2TokenCommandInput,
  GetResourceOauth2TokenCommandOutput,
} from "./commands/GetResourceOauth2TokenCommand";
import {
  GetWorkloadAccessTokenCommandInput,
  GetWorkloadAccessTokenCommandOutput,
} from "./commands/GetWorkloadAccessTokenCommand";
import {
  GetWorkloadAccessTokenForJWTCommandInput,
  GetWorkloadAccessTokenForJWTCommandOutput,
} from "./commands/GetWorkloadAccessTokenForJWTCommand";
import {
  GetWorkloadAccessTokenForUserIdCommandInput,
  GetWorkloadAccessTokenForUserIdCommandOutput,
} from "./commands/GetWorkloadAccessTokenForUserIdCommand";
import { InvokeAgentRuntimeCommandInput, InvokeAgentRuntimeCommandOutput } from "./commands/InvokeAgentRuntimeCommand";
import {
  InvokeCodeInterpreterCommandInput,
  InvokeCodeInterpreterCommandOutput,
} from "./commands/InvokeCodeInterpreterCommand";
import { ListActorsCommandInput, ListActorsCommandOutput } from "./commands/ListActorsCommand";
import {
  ListBrowserSessionsCommandInput,
  ListBrowserSessionsCommandOutput,
} from "./commands/ListBrowserSessionsCommand";
import {
  ListCodeInterpreterSessionsCommandInput,
  ListCodeInterpreterSessionsCommandOutput,
} from "./commands/ListCodeInterpreterSessionsCommand";
import { ListEventsCommandInput, ListEventsCommandOutput } from "./commands/ListEventsCommand";
import {
  ListMemoryExtractionJobsCommandInput,
  ListMemoryExtractionJobsCommandOutput,
} from "./commands/ListMemoryExtractionJobsCommand";
import { ListMemoryRecordsCommandInput, ListMemoryRecordsCommandOutput } from "./commands/ListMemoryRecordsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "./commands/ListSessionsCommand";
import {
  RetrieveMemoryRecordsCommandInput,
  RetrieveMemoryRecordsCommandOutput,
} from "./commands/RetrieveMemoryRecordsCommand";
import {
  StartBrowserSessionCommandInput,
  StartBrowserSessionCommandOutput,
} from "./commands/StartBrowserSessionCommand";
import {
  StartCodeInterpreterSessionCommandInput,
  StartCodeInterpreterSessionCommandOutput,
} from "./commands/StartCodeInterpreterSessionCommand";
import {
  StartMemoryExtractionJobCommandInput,
  StartMemoryExtractionJobCommandOutput,
} from "./commands/StartMemoryExtractionJobCommand";
import { StopBrowserSessionCommandInput, StopBrowserSessionCommandOutput } from "./commands/StopBrowserSessionCommand";
import {
  StopCodeInterpreterSessionCommandInput,
  StopCodeInterpreterSessionCommandOutput,
} from "./commands/StopCodeInterpreterSessionCommand";
import { StopRuntimeSessionCommandInput, StopRuntimeSessionCommandOutput } from "./commands/StopRuntimeSessionCommand";
import {
  UpdateBrowserStreamCommandInput,
  UpdateBrowserStreamCommandOutput,
} from "./commands/UpdateBrowserStreamCommand";
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
  | BatchCreateMemoryRecordsCommandInput
  | BatchDeleteMemoryRecordsCommandInput
  | BatchUpdateMemoryRecordsCommandInput
  | CompleteResourceTokenAuthCommandInput
  | CreateEventCommandInput
  | DeleteEventCommandInput
  | DeleteMemoryRecordCommandInput
  | EvaluateCommandInput
  | GetAgentCardCommandInput
  | GetBrowserSessionCommandInput
  | GetCodeInterpreterSessionCommandInput
  | GetEventCommandInput
  | GetMemoryRecordCommandInput
  | GetResourceApiKeyCommandInput
  | GetResourceOauth2TokenCommandInput
  | GetWorkloadAccessTokenCommandInput
  | GetWorkloadAccessTokenForJWTCommandInput
  | GetWorkloadAccessTokenForUserIdCommandInput
  | InvokeAgentRuntimeCommandInput
  | InvokeCodeInterpreterCommandInput
  | ListActorsCommandInput
  | ListBrowserSessionsCommandInput
  | ListCodeInterpreterSessionsCommandInput
  | ListEventsCommandInput
  | ListMemoryExtractionJobsCommandInput
  | ListMemoryRecordsCommandInput
  | ListSessionsCommandInput
  | RetrieveMemoryRecordsCommandInput
  | StartBrowserSessionCommandInput
  | StartCodeInterpreterSessionCommandInput
  | StartMemoryExtractionJobCommandInput
  | StopBrowserSessionCommandInput
  | StopCodeInterpreterSessionCommandInput
  | StopRuntimeSessionCommandInput
  | UpdateBrowserStreamCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchCreateMemoryRecordsCommandOutput
  | BatchDeleteMemoryRecordsCommandOutput
  | BatchUpdateMemoryRecordsCommandOutput
  | CompleteResourceTokenAuthCommandOutput
  | CreateEventCommandOutput
  | DeleteEventCommandOutput
  | DeleteMemoryRecordCommandOutput
  | EvaluateCommandOutput
  | GetAgentCardCommandOutput
  | GetBrowserSessionCommandOutput
  | GetCodeInterpreterSessionCommandOutput
  | GetEventCommandOutput
  | GetMemoryRecordCommandOutput
  | GetResourceApiKeyCommandOutput
  | GetResourceOauth2TokenCommandOutput
  | GetWorkloadAccessTokenCommandOutput
  | GetWorkloadAccessTokenForJWTCommandOutput
  | GetWorkloadAccessTokenForUserIdCommandOutput
  | InvokeAgentRuntimeCommandOutput
  | InvokeCodeInterpreterCommandOutput
  | ListActorsCommandOutput
  | ListBrowserSessionsCommandOutput
  | ListCodeInterpreterSessionsCommandOutput
  | ListEventsCommandOutput
  | ListMemoryExtractionJobsCommandOutput
  | ListMemoryRecordsCommandOutput
  | ListSessionsCommandOutput
  | RetrieveMemoryRecordsCommandOutput
  | StartBrowserSessionCommandOutput
  | StartCodeInterpreterSessionCommandOutput
  | StartMemoryExtractionJobCommandOutput
  | StopBrowserSessionCommandOutput
  | StopCodeInterpreterSessionCommandOutput
  | StopRuntimeSessionCommandOutput
  | UpdateBrowserStreamCommandOutput;

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
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
  /**
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;
}

/**
 * @public
 */
export type BedrockAgentCoreClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  EventStreamSerdeInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of BedrockAgentCoreClient class constructor that set the region, credentials and other options.
 */
export interface BedrockAgentCoreClientConfig extends BedrockAgentCoreClientConfigType {}

/**
 * @public
 */
export type BedrockAgentCoreClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  EventStreamSerdeResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of BedrockAgentCoreClient class. This is resolved and normalized from the {@link BedrockAgentCoreClientConfig | constructor configuration interface}.
 */
export interface BedrockAgentCoreClientResolvedConfig extends BedrockAgentCoreClientResolvedConfigType {}

/**
 * <p>Welcome to the Amazon Bedrock AgentCore Data Plane API reference. Data Plane actions process and handle data or workloads within Amazon Web Services services. </p>
 * @public
 */
export class BedrockAgentCoreClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BedrockAgentCoreClientResolvedConfig
> {
  /**
   * The resolved configuration of BedrockAgentCoreClient class. This is resolved and normalized from the {@link BedrockAgentCoreClientConfig | constructor configuration interface}.
   */
  readonly config: BedrockAgentCoreClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BedrockAgentCoreClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveEventStreamSerdeConfig(_config_6);
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
        httpAuthSchemeParametersProvider: defaultBedrockAgentCoreHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BedrockAgentCoreClientResolvedConfig) =>
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
