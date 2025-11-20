// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultApplicationSignalsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchGetServiceLevelObjectiveBudgetReportCommandInput,
  BatchGetServiceLevelObjectiveBudgetReportCommandOutput,
} from "./commands/BatchGetServiceLevelObjectiveBudgetReportCommand";
import {
  BatchUpdateExclusionWindowsCommandInput,
  BatchUpdateExclusionWindowsCommandOutput,
} from "./commands/BatchUpdateExclusionWindowsCommand";
import {
  CreateServiceLevelObjectiveCommandInput,
  CreateServiceLevelObjectiveCommandOutput,
} from "./commands/CreateServiceLevelObjectiveCommand";
import {
  DeleteGroupingConfigurationCommandInput,
  DeleteGroupingConfigurationCommandOutput,
} from "./commands/DeleteGroupingConfigurationCommand";
import {
  DeleteServiceLevelObjectiveCommandInput,
  DeleteServiceLevelObjectiveCommandOutput,
} from "./commands/DeleteServiceLevelObjectiveCommand";
import { GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import {
  GetServiceLevelObjectiveCommandInput,
  GetServiceLevelObjectiveCommandOutput,
} from "./commands/GetServiceLevelObjectiveCommand";
import { ListAuditFindingsCommandInput, ListAuditFindingsCommandOutput } from "./commands/ListAuditFindingsCommand";
import { ListEntityEventsCommandInput, ListEntityEventsCommandOutput } from "./commands/ListEntityEventsCommand";
import {
  ListGroupingAttributeDefinitionsCommandInput,
  ListGroupingAttributeDefinitionsCommandOutput,
} from "./commands/ListGroupingAttributeDefinitionsCommand";
import {
  ListServiceDependenciesCommandInput,
  ListServiceDependenciesCommandOutput,
} from "./commands/ListServiceDependenciesCommand";
import {
  ListServiceDependentsCommandInput,
  ListServiceDependentsCommandOutput,
} from "./commands/ListServiceDependentsCommand";
import {
  ListServiceLevelObjectiveExclusionWindowsCommandInput,
  ListServiceLevelObjectiveExclusionWindowsCommandOutput,
} from "./commands/ListServiceLevelObjectiveExclusionWindowsCommand";
import {
  ListServiceLevelObjectivesCommandInput,
  ListServiceLevelObjectivesCommandOutput,
} from "./commands/ListServiceLevelObjectivesCommand";
import {
  ListServiceOperationsCommandInput,
  ListServiceOperationsCommandOutput,
} from "./commands/ListServiceOperationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import { ListServiceStatesCommandInput, ListServiceStatesCommandOutput } from "./commands/ListServiceStatesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutGroupingConfigurationCommandInput,
  PutGroupingConfigurationCommandOutput,
} from "./commands/PutGroupingConfigurationCommand";
import { StartDiscoveryCommandInput, StartDiscoveryCommandOutput } from "./commands/StartDiscoveryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateServiceLevelObjectiveCommandInput,
  UpdateServiceLevelObjectiveCommandOutput,
} from "./commands/UpdateServiceLevelObjectiveCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchGetServiceLevelObjectiveBudgetReportCommandInput
  | BatchUpdateExclusionWindowsCommandInput
  | CreateServiceLevelObjectiveCommandInput
  | DeleteGroupingConfigurationCommandInput
  | DeleteServiceLevelObjectiveCommandInput
  | GetServiceCommandInput
  | GetServiceLevelObjectiveCommandInput
  | ListAuditFindingsCommandInput
  | ListEntityEventsCommandInput
  | ListGroupingAttributeDefinitionsCommandInput
  | ListServiceDependenciesCommandInput
  | ListServiceDependentsCommandInput
  | ListServiceLevelObjectiveExclusionWindowsCommandInput
  | ListServiceLevelObjectivesCommandInput
  | ListServiceOperationsCommandInput
  | ListServiceStatesCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | PutGroupingConfigurationCommandInput
  | StartDiscoveryCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateServiceLevelObjectiveCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetServiceLevelObjectiveBudgetReportCommandOutput
  | BatchUpdateExclusionWindowsCommandOutput
  | CreateServiceLevelObjectiveCommandOutput
  | DeleteGroupingConfigurationCommandOutput
  | DeleteServiceLevelObjectiveCommandOutput
  | GetServiceCommandOutput
  | GetServiceLevelObjectiveCommandOutput
  | ListAuditFindingsCommandOutput
  | ListEntityEventsCommandOutput
  | ListGroupingAttributeDefinitionsCommandOutput
  | ListServiceDependenciesCommandOutput
  | ListServiceDependentsCommandOutput
  | ListServiceLevelObjectiveExclusionWindowsCommandOutput
  | ListServiceLevelObjectivesCommandOutput
  | ListServiceOperationsCommandOutput
  | ListServiceStatesCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutGroupingConfigurationCommandOutput
  | StartDiscoveryCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateServiceLevelObjectiveCommandOutput;

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
export type ApplicationSignalsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ApplicationSignalsClient class constructor that set the region, credentials and other options.
 */
export interface ApplicationSignalsClientConfig extends ApplicationSignalsClientConfigType {}

/**
 * @public
 */
export type ApplicationSignalsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ApplicationSignalsClient class. This is resolved and normalized from the {@link ApplicationSignalsClientConfig | constructor configuration interface}.
 */
export interface ApplicationSignalsClientResolvedConfig extends ApplicationSignalsClientResolvedConfigType {}

/**
 * <p>Use CloudWatch Application Signals for comprehensive observability of your cloud-based applications. It enables real-time service health dashboards and helps you track long-term performance trends against your business goals. The application-centric view provides you with unified visibility across your applications, services, and dependencies, so you can proactively monitor and efficiently triage any issues that may arise, ensuring optimal customer experience.</p> <p>Application Signals provides the following benefits:</p> <ul> <li> <p>Automatically collect metrics and traces from your applications, and display key metrics such as call volume, availability, latency, faults, and errors. </p> </li> <li> <p>Create and monitor service level objectives (SLOs). </p> </li> <li> <p>See a map of your application topology that Application Signals automatically discovers, that gives you a visual representation of your applications, dependencies, and their connectivity.</p> </li> </ul> <p>Application Signals works with CloudWatch RUM, CloudWatch Synthetics canaries, and Amazon Web Services Service Catalog AppRegistry, to display your client pages, Synthetics canaries, and application names within dashboards and maps.</p>
 * @public
 */
export class ApplicationSignalsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ApplicationSignalsClientResolvedConfig
> {
  /**
   * The resolved configuration of ApplicationSignalsClient class. This is resolved and normalized from the {@link ApplicationSignalsClientConfig | constructor configuration interface}.
   */
  readonly config: ApplicationSignalsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ApplicationSignalsClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultApplicationSignalsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ApplicationSignalsClientResolvedConfig) =>
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
