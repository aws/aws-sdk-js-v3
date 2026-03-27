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
  defaultObservabilityAdminHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateCentralizationRuleForOrganizationCommandInput,
  CreateCentralizationRuleForOrganizationCommandOutput,
} from "./commands/CreateCentralizationRuleForOrganizationCommand";
import type {
  CreateS3TableIntegrationCommandInput,
  CreateS3TableIntegrationCommandOutput,
} from "./commands/CreateS3TableIntegrationCommand";
import type {
  CreateTelemetryPipelineCommandInput,
  CreateTelemetryPipelineCommandOutput,
} from "./commands/CreateTelemetryPipelineCommand";
import type {
  CreateTelemetryRuleCommandInput,
  CreateTelemetryRuleCommandOutput,
} from "./commands/CreateTelemetryRuleCommand";
import type {
  CreateTelemetryRuleForOrganizationCommandInput,
  CreateTelemetryRuleForOrganizationCommandOutput,
} from "./commands/CreateTelemetryRuleForOrganizationCommand";
import type {
  DeleteCentralizationRuleForOrganizationCommandInput,
  DeleteCentralizationRuleForOrganizationCommandOutput,
} from "./commands/DeleteCentralizationRuleForOrganizationCommand";
import type {
  DeleteS3TableIntegrationCommandInput,
  DeleteS3TableIntegrationCommandOutput,
} from "./commands/DeleteS3TableIntegrationCommand";
import type {
  DeleteTelemetryPipelineCommandInput,
  DeleteTelemetryPipelineCommandOutput,
} from "./commands/DeleteTelemetryPipelineCommand";
import type {
  DeleteTelemetryRuleCommandInput,
  DeleteTelemetryRuleCommandOutput,
} from "./commands/DeleteTelemetryRuleCommand";
import type {
  DeleteTelemetryRuleForOrganizationCommandInput,
  DeleteTelemetryRuleForOrganizationCommandOutput,
} from "./commands/DeleteTelemetryRuleForOrganizationCommand";
import type {
  GetCentralizationRuleForOrganizationCommandInput,
  GetCentralizationRuleForOrganizationCommandOutput,
} from "./commands/GetCentralizationRuleForOrganizationCommand";
import type {
  GetS3TableIntegrationCommandInput,
  GetS3TableIntegrationCommandOutput,
} from "./commands/GetS3TableIntegrationCommand";
import type {
  GetTelemetryEnrichmentStatusCommandInput,
  GetTelemetryEnrichmentStatusCommandOutput,
} from "./commands/GetTelemetryEnrichmentStatusCommand";
import type {
  GetTelemetryEvaluationStatusCommandInput,
  GetTelemetryEvaluationStatusCommandOutput,
} from "./commands/GetTelemetryEvaluationStatusCommand";
import type {
  GetTelemetryEvaluationStatusForOrganizationCommandInput,
  GetTelemetryEvaluationStatusForOrganizationCommandOutput,
} from "./commands/GetTelemetryEvaluationStatusForOrganizationCommand";
import type {
  GetTelemetryPipelineCommandInput,
  GetTelemetryPipelineCommandOutput,
} from "./commands/GetTelemetryPipelineCommand";
import type { GetTelemetryRuleCommandInput, GetTelemetryRuleCommandOutput } from "./commands/GetTelemetryRuleCommand";
import type {
  GetTelemetryRuleForOrganizationCommandInput,
  GetTelemetryRuleForOrganizationCommandOutput,
} from "./commands/GetTelemetryRuleForOrganizationCommand";
import type {
  ListCentralizationRulesForOrganizationCommandInput,
  ListCentralizationRulesForOrganizationCommandOutput,
} from "./commands/ListCentralizationRulesForOrganizationCommand";
import type {
  ListResourceTelemetryCommandInput,
  ListResourceTelemetryCommandOutput,
} from "./commands/ListResourceTelemetryCommand";
import type {
  ListResourceTelemetryForOrganizationCommandInput,
  ListResourceTelemetryForOrganizationCommandOutput,
} from "./commands/ListResourceTelemetryForOrganizationCommand";
import type {
  ListS3TableIntegrationsCommandInput,
  ListS3TableIntegrationsCommandOutput,
} from "./commands/ListS3TableIntegrationsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTelemetryPipelinesCommandInput,
  ListTelemetryPipelinesCommandOutput,
} from "./commands/ListTelemetryPipelinesCommand";
import type {
  ListTelemetryRulesCommandInput,
  ListTelemetryRulesCommandOutput,
} from "./commands/ListTelemetryRulesCommand";
import type {
  ListTelemetryRulesForOrganizationCommandInput,
  ListTelemetryRulesForOrganizationCommandOutput,
} from "./commands/ListTelemetryRulesForOrganizationCommand";
import type {
  StartTelemetryEnrichmentCommandInput,
  StartTelemetryEnrichmentCommandOutput,
} from "./commands/StartTelemetryEnrichmentCommand";
import type {
  StartTelemetryEvaluationCommandInput,
  StartTelemetryEvaluationCommandOutput,
} from "./commands/StartTelemetryEvaluationCommand";
import type {
  StartTelemetryEvaluationForOrganizationCommandInput,
  StartTelemetryEvaluationForOrganizationCommandOutput,
} from "./commands/StartTelemetryEvaluationForOrganizationCommand";
import type {
  StopTelemetryEnrichmentCommandInput,
  StopTelemetryEnrichmentCommandOutput,
} from "./commands/StopTelemetryEnrichmentCommand";
import type {
  StopTelemetryEvaluationCommandInput,
  StopTelemetryEvaluationCommandOutput,
} from "./commands/StopTelemetryEvaluationCommand";
import type {
  StopTelemetryEvaluationForOrganizationCommandInput,
  StopTelemetryEvaluationForOrganizationCommandOutput,
} from "./commands/StopTelemetryEvaluationForOrganizationCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type {
  TestTelemetryPipelineCommandInput,
  TestTelemetryPipelineCommandOutput,
} from "./commands/TestTelemetryPipelineCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateCentralizationRuleForOrganizationCommandInput,
  UpdateCentralizationRuleForOrganizationCommandOutput,
} from "./commands/UpdateCentralizationRuleForOrganizationCommand";
import type {
  UpdateTelemetryPipelineCommandInput,
  UpdateTelemetryPipelineCommandOutput,
} from "./commands/UpdateTelemetryPipelineCommand";
import type {
  UpdateTelemetryRuleCommandInput,
  UpdateTelemetryRuleCommandOutput,
} from "./commands/UpdateTelemetryRuleCommand";
import type {
  UpdateTelemetryRuleForOrganizationCommandInput,
  UpdateTelemetryRuleForOrganizationCommandOutput,
} from "./commands/UpdateTelemetryRuleForOrganizationCommand";
import type {
  ValidateTelemetryPipelineConfigurationCommandInput,
  ValidateTelemetryPipelineConfigurationCommandOutput,
} from "./commands/ValidateTelemetryPipelineConfigurationCommand";
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
  | CreateCentralizationRuleForOrganizationCommandInput
  | CreateS3TableIntegrationCommandInput
  | CreateTelemetryPipelineCommandInput
  | CreateTelemetryRuleCommandInput
  | CreateTelemetryRuleForOrganizationCommandInput
  | DeleteCentralizationRuleForOrganizationCommandInput
  | DeleteS3TableIntegrationCommandInput
  | DeleteTelemetryPipelineCommandInput
  | DeleteTelemetryRuleCommandInput
  | DeleteTelemetryRuleForOrganizationCommandInput
  | GetCentralizationRuleForOrganizationCommandInput
  | GetS3TableIntegrationCommandInput
  | GetTelemetryEnrichmentStatusCommandInput
  | GetTelemetryEvaluationStatusCommandInput
  | GetTelemetryEvaluationStatusForOrganizationCommandInput
  | GetTelemetryPipelineCommandInput
  | GetTelemetryRuleCommandInput
  | GetTelemetryRuleForOrganizationCommandInput
  | ListCentralizationRulesForOrganizationCommandInput
  | ListResourceTelemetryCommandInput
  | ListResourceTelemetryForOrganizationCommandInput
  | ListS3TableIntegrationsCommandInput
  | ListTagsForResourceCommandInput
  | ListTelemetryPipelinesCommandInput
  | ListTelemetryRulesCommandInput
  | ListTelemetryRulesForOrganizationCommandInput
  | StartTelemetryEnrichmentCommandInput
  | StartTelemetryEvaluationCommandInput
  | StartTelemetryEvaluationForOrganizationCommandInput
  | StopTelemetryEnrichmentCommandInput
  | StopTelemetryEvaluationCommandInput
  | StopTelemetryEvaluationForOrganizationCommandInput
  | TagResourceCommandInput
  | TestTelemetryPipelineCommandInput
  | UntagResourceCommandInput
  | UpdateCentralizationRuleForOrganizationCommandInput
  | UpdateTelemetryPipelineCommandInput
  | UpdateTelemetryRuleCommandInput
  | UpdateTelemetryRuleForOrganizationCommandInput
  | ValidateTelemetryPipelineConfigurationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateCentralizationRuleForOrganizationCommandOutput
  | CreateS3TableIntegrationCommandOutput
  | CreateTelemetryPipelineCommandOutput
  | CreateTelemetryRuleCommandOutput
  | CreateTelemetryRuleForOrganizationCommandOutput
  | DeleteCentralizationRuleForOrganizationCommandOutput
  | DeleteS3TableIntegrationCommandOutput
  | DeleteTelemetryPipelineCommandOutput
  | DeleteTelemetryRuleCommandOutput
  | DeleteTelemetryRuleForOrganizationCommandOutput
  | GetCentralizationRuleForOrganizationCommandOutput
  | GetS3TableIntegrationCommandOutput
  | GetTelemetryEnrichmentStatusCommandOutput
  | GetTelemetryEvaluationStatusCommandOutput
  | GetTelemetryEvaluationStatusForOrganizationCommandOutput
  | GetTelemetryPipelineCommandOutput
  | GetTelemetryRuleCommandOutput
  | GetTelemetryRuleForOrganizationCommandOutput
  | ListCentralizationRulesForOrganizationCommandOutput
  | ListResourceTelemetryCommandOutput
  | ListResourceTelemetryForOrganizationCommandOutput
  | ListS3TableIntegrationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTelemetryPipelinesCommandOutput
  | ListTelemetryRulesCommandOutput
  | ListTelemetryRulesForOrganizationCommandOutput
  | StartTelemetryEnrichmentCommandOutput
  | StartTelemetryEvaluationCommandOutput
  | StartTelemetryEvaluationForOrganizationCommandOutput
  | StopTelemetryEnrichmentCommandOutput
  | StopTelemetryEvaluationCommandOutput
  | StopTelemetryEvaluationForOrganizationCommandOutput
  | TagResourceCommandOutput
  | TestTelemetryPipelineCommandOutput
  | UntagResourceCommandOutput
  | UpdateCentralizationRuleForOrganizationCommandOutput
  | UpdateTelemetryPipelineCommandOutput
  | UpdateTelemetryRuleCommandOutput
  | UpdateTelemetryRuleForOrganizationCommandOutput
  | ValidateTelemetryPipelineConfigurationCommandOutput;

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
export type ObservabilityAdminClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ObservabilityAdminClient class constructor that set the region, credentials and other options.
 */
export interface ObservabilityAdminClientConfig extends ObservabilityAdminClientConfigType {}

/**
 * @public
 */
export type ObservabilityAdminClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ObservabilityAdminClient class. This is resolved and normalized from the {@link ObservabilityAdminClientConfig | constructor configuration interface}.
 */
export interface ObservabilityAdminClientResolvedConfig extends ObservabilityAdminClientResolvedConfigType {}

/**
 * <p> You can use Amazon CloudWatch Observability Admin to discover and understand the state of telemetry configuration in CloudWatch for your Amazon Web Services Organization or account. This simplifies the process of auditing your telemetry collection configurations across multiple resource types within your Amazon Web Services Organization or account. By providing a consolidated view, it allows you to easily review and manage telemetry settings, helping you ensure proper monitoring and data collection across your Amazon Web Services environment. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/telemetry-config-cloudwatch.html">Auditing CloudWatch telemetry conﬁgurations</a> in the CloudWatch User Guide.</p> <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html">Identity and access management for Amazon CloudWatch</a> in the CloudWatch User Guide.</p>
 * @public
 */
export class ObservabilityAdminClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ObservabilityAdminClientResolvedConfig
> {
  /**
   * The resolved configuration of ObservabilityAdminClient class. This is resolved and normalized from the {@link ObservabilityAdminClientConfig | constructor configuration interface}.
   */
  readonly config: ObservabilityAdminClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ObservabilityAdminClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultObservabilityAdminHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ObservabilityAdminClientResolvedConfig) =>
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
