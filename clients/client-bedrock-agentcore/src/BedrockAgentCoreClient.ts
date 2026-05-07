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
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultBedrockAgentCoreHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchCreateMemoryRecordsCommandInput,
  BatchCreateMemoryRecordsCommandOutput,
} from "./commands/BatchCreateMemoryRecordsCommand";
import type {
  BatchDeleteMemoryRecordsCommandInput,
  BatchDeleteMemoryRecordsCommandOutput,
} from "./commands/BatchDeleteMemoryRecordsCommand";
import type {
  BatchUpdateMemoryRecordsCommandInput,
  BatchUpdateMemoryRecordsCommandOutput,
} from "./commands/BatchUpdateMemoryRecordsCommand";
import type {
  CompleteResourceTokenAuthCommandInput,
  CompleteResourceTokenAuthCommandOutput,
} from "./commands/CompleteResourceTokenAuthCommand";
import type { CreateABTestCommandInput, CreateABTestCommandOutput } from "./commands/CreateABTestCommand";
import type { CreateEventCommandInput, CreateEventCommandOutput } from "./commands/CreateEventCommand";
import type {
  CreatePaymentInstrumentCommandInput,
  CreatePaymentInstrumentCommandOutput,
} from "./commands/CreatePaymentInstrumentCommand";
import type {
  CreatePaymentSessionCommandInput,
  CreatePaymentSessionCommandOutput,
} from "./commands/CreatePaymentSessionCommand";
import type { DeleteABTestCommandInput, DeleteABTestCommandOutput } from "./commands/DeleteABTestCommand";
import type {
  DeleteBatchEvaluationCommandInput,
  DeleteBatchEvaluationCommandOutput,
} from "./commands/DeleteBatchEvaluationCommand";
import type { DeleteEventCommandInput, DeleteEventCommandOutput } from "./commands/DeleteEventCommand";
import type {
  DeleteMemoryRecordCommandInput,
  DeleteMemoryRecordCommandOutput,
} from "./commands/DeleteMemoryRecordCommand";
import type {
  DeletePaymentInstrumentCommandInput,
  DeletePaymentInstrumentCommandOutput,
} from "./commands/DeletePaymentInstrumentCommand";
import type {
  DeletePaymentSessionCommandInput,
  DeletePaymentSessionCommandOutput,
} from "./commands/DeletePaymentSessionCommand";
import type {
  DeleteRecommendationCommandInput,
  DeleteRecommendationCommandOutput,
} from "./commands/DeleteRecommendationCommand";
import type { EvaluateCommandInput, EvaluateCommandOutput } from "./commands/EvaluateCommand";
import type { GetABTestCommandInput, GetABTestCommandOutput } from "./commands/GetABTestCommand";
import type { GetAgentCardCommandInput, GetAgentCardCommandOutput } from "./commands/GetAgentCardCommand";
import type {
  GetBatchEvaluationCommandInput,
  GetBatchEvaluationCommandOutput,
} from "./commands/GetBatchEvaluationCommand";
import type {
  GetBrowserSessionCommandInput,
  GetBrowserSessionCommandOutput,
} from "./commands/GetBrowserSessionCommand";
import type {
  GetCodeInterpreterSessionCommandInput,
  GetCodeInterpreterSessionCommandOutput,
} from "./commands/GetCodeInterpreterSessionCommand";
import type { GetEventCommandInput, GetEventCommandOutput } from "./commands/GetEventCommand";
import type { GetMemoryRecordCommandInput, GetMemoryRecordCommandOutput } from "./commands/GetMemoryRecordCommand";
import type {
  GetPaymentInstrumentBalanceCommandInput,
  GetPaymentInstrumentBalanceCommandOutput,
} from "./commands/GetPaymentInstrumentBalanceCommand";
import type {
  GetPaymentInstrumentCommandInput,
  GetPaymentInstrumentCommandOutput,
} from "./commands/GetPaymentInstrumentCommand";
import type {
  GetPaymentSessionCommandInput,
  GetPaymentSessionCommandOutput,
} from "./commands/GetPaymentSessionCommand";
import type {
  GetRecommendationCommandInput,
  GetRecommendationCommandOutput,
} from "./commands/GetRecommendationCommand";
import type {
  GetResourceApiKeyCommandInput,
  GetResourceApiKeyCommandOutput,
} from "./commands/GetResourceApiKeyCommand";
import type {
  GetResourceOauth2TokenCommandInput,
  GetResourceOauth2TokenCommandOutput,
} from "./commands/GetResourceOauth2TokenCommand";
import type {
  GetResourcePaymentTokenCommandInput,
  GetResourcePaymentTokenCommandOutput,
} from "./commands/GetResourcePaymentTokenCommand";
import type {
  GetWorkloadAccessTokenCommandInput,
  GetWorkloadAccessTokenCommandOutput,
} from "./commands/GetWorkloadAccessTokenCommand";
import type {
  GetWorkloadAccessTokenForJWTCommandInput,
  GetWorkloadAccessTokenForJWTCommandOutput,
} from "./commands/GetWorkloadAccessTokenForJWTCommand";
import type {
  GetWorkloadAccessTokenForUserIdCommandInput,
  GetWorkloadAccessTokenForUserIdCommandOutput,
} from "./commands/GetWorkloadAccessTokenForUserIdCommand";
import type {
  InvokeAgentRuntimeCommandInput,
  InvokeAgentRuntimeCommandOutput,
} from "./commands/InvokeAgentRuntimeCommand";
import type {
  InvokeAgentRuntimeCommandCommandInput,
  InvokeAgentRuntimeCommandCommandOutput,
} from "./commands/InvokeAgentRuntimeCommandCommand";
import type { InvokeBrowserCommandInput, InvokeBrowserCommandOutput } from "./commands/InvokeBrowserCommand";
import type {
  InvokeCodeInterpreterCommandInput,
  InvokeCodeInterpreterCommandOutput,
} from "./commands/InvokeCodeInterpreterCommand";
import type { InvokeHarnessCommandInput, InvokeHarnessCommandOutput } from "./commands/InvokeHarnessCommand";
import type { ListABTestsCommandInput, ListABTestsCommandOutput } from "./commands/ListABTestsCommand";
import type { ListActorsCommandInput, ListActorsCommandOutput } from "./commands/ListActorsCommand";
import type {
  ListBatchEvaluationsCommandInput,
  ListBatchEvaluationsCommandOutput,
} from "./commands/ListBatchEvaluationsCommand";
import type {
  ListBrowserSessionsCommandInput,
  ListBrowserSessionsCommandOutput,
} from "./commands/ListBrowserSessionsCommand";
import type {
  ListCodeInterpreterSessionsCommandInput,
  ListCodeInterpreterSessionsCommandOutput,
} from "./commands/ListCodeInterpreterSessionsCommand";
import type { ListEventsCommandInput, ListEventsCommandOutput } from "./commands/ListEventsCommand";
import type {
  ListMemoryExtractionJobsCommandInput,
  ListMemoryExtractionJobsCommandOutput,
} from "./commands/ListMemoryExtractionJobsCommand";
import type {
  ListMemoryRecordsCommandInput,
  ListMemoryRecordsCommandOutput,
} from "./commands/ListMemoryRecordsCommand";
import type {
  ListPaymentInstrumentsCommandInput,
  ListPaymentInstrumentsCommandOutput,
} from "./commands/ListPaymentInstrumentsCommand";
import type {
  ListPaymentSessionsCommandInput,
  ListPaymentSessionsCommandOutput,
} from "./commands/ListPaymentSessionsCommand";
import type {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import type { ListSessionsCommandInput, ListSessionsCommandOutput } from "./commands/ListSessionsCommand";
import type { ProcessPaymentCommandInput, ProcessPaymentCommandOutput } from "./commands/ProcessPaymentCommand";
import type {
  RetrieveMemoryRecordsCommandInput,
  RetrieveMemoryRecordsCommandOutput,
} from "./commands/RetrieveMemoryRecordsCommand";
import type {
  SaveBrowserSessionProfileCommandInput,
  SaveBrowserSessionProfileCommandOutput,
} from "./commands/SaveBrowserSessionProfileCommand";
import type {
  SearchRegistryRecordsCommandInput,
  SearchRegistryRecordsCommandOutput,
} from "./commands/SearchRegistryRecordsCommand";
import type {
  StartBatchEvaluationCommandInput,
  StartBatchEvaluationCommandOutput,
} from "./commands/StartBatchEvaluationCommand";
import type {
  StartBrowserSessionCommandInput,
  StartBrowserSessionCommandOutput,
} from "./commands/StartBrowserSessionCommand";
import type {
  StartCodeInterpreterSessionCommandInput,
  StartCodeInterpreterSessionCommandOutput,
} from "./commands/StartCodeInterpreterSessionCommand";
import type {
  StartMemoryExtractionJobCommandInput,
  StartMemoryExtractionJobCommandOutput,
} from "./commands/StartMemoryExtractionJobCommand";
import type {
  StartRecommendationCommandInput,
  StartRecommendationCommandOutput,
} from "./commands/StartRecommendationCommand";
import type {
  StopBatchEvaluationCommandInput,
  StopBatchEvaluationCommandOutput,
} from "./commands/StopBatchEvaluationCommand";
import type {
  StopBrowserSessionCommandInput,
  StopBrowserSessionCommandOutput,
} from "./commands/StopBrowserSessionCommand";
import type {
  StopCodeInterpreterSessionCommandInput,
  StopCodeInterpreterSessionCommandOutput,
} from "./commands/StopCodeInterpreterSessionCommand";
import type {
  StopRuntimeSessionCommandInput,
  StopRuntimeSessionCommandOutput,
} from "./commands/StopRuntimeSessionCommand";
import type { UpdateABTestCommandInput, UpdateABTestCommandOutput } from "./commands/UpdateABTestCommand";
import type {
  UpdateBrowserStreamCommandInput,
  UpdateBrowserStreamCommandOutput,
} from "./commands/UpdateBrowserStreamCommand";
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
  | BatchCreateMemoryRecordsCommandInput
  | BatchDeleteMemoryRecordsCommandInput
  | BatchUpdateMemoryRecordsCommandInput
  | CompleteResourceTokenAuthCommandInput
  | CreateABTestCommandInput
  | CreateEventCommandInput
  | CreatePaymentInstrumentCommandInput
  | CreatePaymentSessionCommandInput
  | DeleteABTestCommandInput
  | DeleteBatchEvaluationCommandInput
  | DeleteEventCommandInput
  | DeleteMemoryRecordCommandInput
  | DeletePaymentInstrumentCommandInput
  | DeletePaymentSessionCommandInput
  | DeleteRecommendationCommandInput
  | EvaluateCommandInput
  | GetABTestCommandInput
  | GetAgentCardCommandInput
  | GetBatchEvaluationCommandInput
  | GetBrowserSessionCommandInput
  | GetCodeInterpreterSessionCommandInput
  | GetEventCommandInput
  | GetMemoryRecordCommandInput
  | GetPaymentInstrumentBalanceCommandInput
  | GetPaymentInstrumentCommandInput
  | GetPaymentSessionCommandInput
  | GetRecommendationCommandInput
  | GetResourceApiKeyCommandInput
  | GetResourceOauth2TokenCommandInput
  | GetResourcePaymentTokenCommandInput
  | GetWorkloadAccessTokenCommandInput
  | GetWorkloadAccessTokenForJWTCommandInput
  | GetWorkloadAccessTokenForUserIdCommandInput
  | InvokeAgentRuntimeCommandCommandInput
  | InvokeAgentRuntimeCommandInput
  | InvokeBrowserCommandInput
  | InvokeCodeInterpreterCommandInput
  | InvokeHarnessCommandInput
  | ListABTestsCommandInput
  | ListActorsCommandInput
  | ListBatchEvaluationsCommandInput
  | ListBrowserSessionsCommandInput
  | ListCodeInterpreterSessionsCommandInput
  | ListEventsCommandInput
  | ListMemoryExtractionJobsCommandInput
  | ListMemoryRecordsCommandInput
  | ListPaymentInstrumentsCommandInput
  | ListPaymentSessionsCommandInput
  | ListRecommendationsCommandInput
  | ListSessionsCommandInput
  | ProcessPaymentCommandInput
  | RetrieveMemoryRecordsCommandInput
  | SaveBrowserSessionProfileCommandInput
  | SearchRegistryRecordsCommandInput
  | StartBatchEvaluationCommandInput
  | StartBrowserSessionCommandInput
  | StartCodeInterpreterSessionCommandInput
  | StartMemoryExtractionJobCommandInput
  | StartRecommendationCommandInput
  | StopBatchEvaluationCommandInput
  | StopBrowserSessionCommandInput
  | StopCodeInterpreterSessionCommandInput
  | StopRuntimeSessionCommandInput
  | UpdateABTestCommandInput
  | UpdateBrowserStreamCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchCreateMemoryRecordsCommandOutput
  | BatchDeleteMemoryRecordsCommandOutput
  | BatchUpdateMemoryRecordsCommandOutput
  | CompleteResourceTokenAuthCommandOutput
  | CreateABTestCommandOutput
  | CreateEventCommandOutput
  | CreatePaymentInstrumentCommandOutput
  | CreatePaymentSessionCommandOutput
  | DeleteABTestCommandOutput
  | DeleteBatchEvaluationCommandOutput
  | DeleteEventCommandOutput
  | DeleteMemoryRecordCommandOutput
  | DeletePaymentInstrumentCommandOutput
  | DeletePaymentSessionCommandOutput
  | DeleteRecommendationCommandOutput
  | EvaluateCommandOutput
  | GetABTestCommandOutput
  | GetAgentCardCommandOutput
  | GetBatchEvaluationCommandOutput
  | GetBrowserSessionCommandOutput
  | GetCodeInterpreterSessionCommandOutput
  | GetEventCommandOutput
  | GetMemoryRecordCommandOutput
  | GetPaymentInstrumentBalanceCommandOutput
  | GetPaymentInstrumentCommandOutput
  | GetPaymentSessionCommandOutput
  | GetRecommendationCommandOutput
  | GetResourceApiKeyCommandOutput
  | GetResourceOauth2TokenCommandOutput
  | GetResourcePaymentTokenCommandOutput
  | GetWorkloadAccessTokenCommandOutput
  | GetWorkloadAccessTokenForJWTCommandOutput
  | GetWorkloadAccessTokenForUserIdCommandOutput
  | InvokeAgentRuntimeCommandCommandOutput
  | InvokeAgentRuntimeCommandOutput
  | InvokeBrowserCommandOutput
  | InvokeCodeInterpreterCommandOutput
  | InvokeHarnessCommandOutput
  | ListABTestsCommandOutput
  | ListActorsCommandOutput
  | ListBatchEvaluationsCommandOutput
  | ListBrowserSessionsCommandOutput
  | ListCodeInterpreterSessionsCommandOutput
  | ListEventsCommandOutput
  | ListMemoryExtractionJobsCommandOutput
  | ListMemoryRecordsCommandOutput
  | ListPaymentInstrumentsCommandOutput
  | ListPaymentSessionsCommandOutput
  | ListRecommendationsCommandOutput
  | ListSessionsCommandOutput
  | ProcessPaymentCommandOutput
  | RetrieveMemoryRecordsCommandOutput
  | SaveBrowserSessionProfileCommandOutput
  | SearchRegistryRecordsCommandOutput
  | StartBatchEvaluationCommandOutput
  | StartBrowserSessionCommandOutput
  | StartCodeInterpreterSessionCommandOutput
  | StartMemoryExtractionJobCommandOutput
  | StartRecommendationCommandOutput
  | StopBatchEvaluationCommandOutput
  | StopBrowserSessionCommandOutput
  | StopCodeInterpreterSessionCommandOutput
  | StopRuntimeSessionCommandOutput
  | UpdateABTestCommandOutput
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
