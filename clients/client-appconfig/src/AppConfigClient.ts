// smithy-typescript generated code
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
  defaultAppConfigHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import type {
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
} from "./commands/CreateConfigurationProfileCommand";
import type {
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
} from "./commands/CreateDeploymentStrategyCommand";
import type {
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import type {
  CreateExperimentDefinitionCommandInput,
  CreateExperimentDefinitionCommandOutput,
} from "./commands/CreateExperimentDefinitionCommand";
import type {
  CreateExtensionAssociationCommandInput,
  CreateExtensionAssociationCommandOutput,
} from "./commands/CreateExtensionAssociationCommand";
import type { CreateExtensionCommandInput, CreateExtensionCommandOutput } from "./commands/CreateExtensionCommand";
import type {
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
} from "./commands/CreateHostedConfigurationVersionCommand";
import type {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import type {
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
} from "./commands/DeleteConfigurationProfileCommand";
import type {
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
} from "./commands/DeleteDeploymentStrategyCommand";
import type {
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import type {
  DeleteExperimentDefinitionCommandInput,
  DeleteExperimentDefinitionCommandOutput,
} from "./commands/DeleteExperimentDefinitionCommand";
import type {
  DeleteExtensionAssociationCommandInput,
  DeleteExtensionAssociationCommandOutput,
} from "./commands/DeleteExtensionAssociationCommand";
import type { DeleteExtensionCommandInput, DeleteExtensionCommandOutput } from "./commands/DeleteExtensionCommand";
import type {
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
} from "./commands/DeleteHostedConfigurationVersionCommand";
import type {
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import type { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import type { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "./commands/GetConfigurationCommand";
import type {
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
} from "./commands/GetConfigurationProfileCommand";
import type { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import type {
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
} from "./commands/GetDeploymentStrategyCommand";
import type { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand";
import type {
  GetExperimentDefinitionCommandInput,
  GetExperimentDefinitionCommandOutput,
} from "./commands/GetExperimentDefinitionCommand";
import type { GetExperimentRunCommandInput, GetExperimentRunCommandOutput } from "./commands/GetExperimentRunCommand";
import type {
  GetExtensionAssociationCommandInput,
  GetExtensionAssociationCommandOutput,
} from "./commands/GetExtensionAssociationCommand";
import type { GetExtensionCommandInput, GetExtensionCommandOutput } from "./commands/GetExtensionCommand";
import type {
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
} from "./commands/GetHostedConfigurationVersionCommand";
import type { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import type {
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "./commands/ListConfigurationProfilesCommand";
import type { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import type {
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "./commands/ListDeploymentStrategiesCommand";
import type { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import type {
  ListExperimentDefinitionsCommandInput,
  ListExperimentDefinitionsCommandOutput,
} from "./commands/ListExperimentDefinitionsCommand";
import type {
  ListExperimentRunEventsCommandInput,
  ListExperimentRunEventsCommandOutput,
} from "./commands/ListExperimentRunEventsCommand";
import type {
  ListExperimentRunsCommandInput,
  ListExperimentRunsCommandOutput,
} from "./commands/ListExperimentRunsCommand";
import type {
  ListExtensionAssociationsCommandInput,
  ListExtensionAssociationsCommandOutput,
} from "./commands/ListExtensionAssociationsCommand";
import type { ListExtensionsCommandInput, ListExtensionsCommandOutput } from "./commands/ListExtensionsCommand";
import type {
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "./commands/ListHostedConfigurationVersionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "./commands/StartDeploymentCommand";
import type {
  StartExperimentRunCommandInput,
  StartExperimentRunCommandOutput,
} from "./commands/StartExperimentRunCommand";
import type { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "./commands/StopDeploymentCommand";
import type {
  StopExperimentRunCommandInput,
  StopExperimentRunCommandOutput,
} from "./commands/StopExperimentRunCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import type {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import type {
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput,
} from "./commands/UpdateConfigurationProfileCommand";
import type {
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
} from "./commands/UpdateDeploymentStrategyCommand";
import type {
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import type {
  UpdateExperimentDefinitionCommandInput,
  UpdateExperimentDefinitionCommandOutput,
} from "./commands/UpdateExperimentDefinitionCommand";
import type {
  UpdateExperimentRunCommandInput,
  UpdateExperimentRunCommandOutput,
} from "./commands/UpdateExperimentRunCommand";
import type {
  UpdateExtensionAssociationCommandInput,
  UpdateExtensionAssociationCommandOutput,
} from "./commands/UpdateExtensionAssociationCommand";
import type { UpdateExtensionCommandInput, UpdateExtensionCommandOutput } from "./commands/UpdateExtensionCommand";
import type {
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
} from "./commands/ValidateConfigurationCommand";
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
  | CreateApplicationCommandInput
  | CreateConfigurationProfileCommandInput
  | CreateDeploymentStrategyCommandInput
  | CreateEnvironmentCommandInput
  | CreateExperimentDefinitionCommandInput
  | CreateExtensionAssociationCommandInput
  | CreateExtensionCommandInput
  | CreateHostedConfigurationVersionCommandInput
  | DeleteApplicationCommandInput
  | DeleteConfigurationProfileCommandInput
  | DeleteDeploymentStrategyCommandInput
  | DeleteEnvironmentCommandInput
  | DeleteExperimentDefinitionCommandInput
  | DeleteExtensionAssociationCommandInput
  | DeleteExtensionCommandInput
  | DeleteHostedConfigurationVersionCommandInput
  | GetAccountSettingsCommandInput
  | GetApplicationCommandInput
  | GetConfigurationCommandInput
  | GetConfigurationProfileCommandInput
  | GetDeploymentCommandInput
  | GetDeploymentStrategyCommandInput
  | GetEnvironmentCommandInput
  | GetExperimentDefinitionCommandInput
  | GetExperimentRunCommandInput
  | GetExtensionAssociationCommandInput
  | GetExtensionCommandInput
  | GetHostedConfigurationVersionCommandInput
  | ListApplicationsCommandInput
  | ListConfigurationProfilesCommandInput
  | ListDeploymentStrategiesCommandInput
  | ListDeploymentsCommandInput
  | ListEnvironmentsCommandInput
  | ListExperimentDefinitionsCommandInput
  | ListExperimentRunEventsCommandInput
  | ListExperimentRunsCommandInput
  | ListExtensionAssociationsCommandInput
  | ListExtensionsCommandInput
  | ListHostedConfigurationVersionsCommandInput
  | ListTagsForResourceCommandInput
  | StartDeploymentCommandInput
  | StartExperimentRunCommandInput
  | StopDeploymentCommandInput
  | StopExperimentRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateApplicationCommandInput
  | UpdateConfigurationProfileCommandInput
  | UpdateDeploymentStrategyCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateExperimentDefinitionCommandInput
  | UpdateExperimentRunCommandInput
  | UpdateExtensionAssociationCommandInput
  | UpdateExtensionCommandInput
  | ValidateConfigurationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateApplicationCommandOutput
  | CreateConfigurationProfileCommandOutput
  | CreateDeploymentStrategyCommandOutput
  | CreateEnvironmentCommandOutput
  | CreateExperimentDefinitionCommandOutput
  | CreateExtensionAssociationCommandOutput
  | CreateExtensionCommandOutput
  | CreateHostedConfigurationVersionCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteConfigurationProfileCommandOutput
  | DeleteDeploymentStrategyCommandOutput
  | DeleteEnvironmentCommandOutput
  | DeleteExperimentDefinitionCommandOutput
  | DeleteExtensionAssociationCommandOutput
  | DeleteExtensionCommandOutput
  | DeleteHostedConfigurationVersionCommandOutput
  | GetAccountSettingsCommandOutput
  | GetApplicationCommandOutput
  | GetConfigurationCommandOutput
  | GetConfigurationProfileCommandOutput
  | GetDeploymentCommandOutput
  | GetDeploymentStrategyCommandOutput
  | GetEnvironmentCommandOutput
  | GetExperimentDefinitionCommandOutput
  | GetExperimentRunCommandOutput
  | GetExtensionAssociationCommandOutput
  | GetExtensionCommandOutput
  | GetHostedConfigurationVersionCommandOutput
  | ListApplicationsCommandOutput
  | ListConfigurationProfilesCommandOutput
  | ListDeploymentStrategiesCommandOutput
  | ListDeploymentsCommandOutput
  | ListEnvironmentsCommandOutput
  | ListExperimentDefinitionsCommandOutput
  | ListExperimentRunEventsCommandOutput
  | ListExperimentRunsCommandOutput
  | ListExtensionAssociationsCommandOutput
  | ListExtensionsCommandOutput
  | ListHostedConfigurationVersionsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartDeploymentCommandOutput
  | StartExperimentRunCommandOutput
  | StopDeploymentCommandOutput
  | StopExperimentRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateConfigurationProfileCommandOutput
  | UpdateDeploymentStrategyCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateExperimentDefinitionCommandOutput
  | UpdateExperimentRunCommandOutput
  | UpdateExtensionAssociationCommandOutput
  | UpdateExtensionCommandOutput
  | ValidateConfigurationCommandOutput;

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
export type AppConfigClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of AppConfigClient class constructor that set the region, credentials and other options.
 */
export interface AppConfigClientConfig extends AppConfigClientConfigType {}

/**
 * @public
 */
export type AppConfigClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of AppConfigClient class. This is resolved and normalized from the {@link AppConfigClientConfig | constructor configuration interface}.
 */
export interface AppConfigClientResolvedConfig extends AppConfigClientResolvedConfigType {}

/**
 * <p>AppConfig helps you safely change application behavior in production without redeploying code. Using feature flags and dynamic free-form configurations, you can control how your application runs in real time. This approach reduces risk, accelerates releases, and enables faster responses to issues. You can gradually roll out new features to specific users, monitor their impact, and expand availability with confidence. You can also update block lists, allow lists, throttling limits, and logging levels instantly, allowing you to mitigate issues and fine-tune performance without a deployment.</p>
 *          <p>AppConfig supports a broad spectrum of use cases:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Feature flags and toggles</b> – Gradually release new capabilities to targeted users, monitor impact, and instantly roll back changes if issues occur.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b> – Introduce changes safely in production, measure their effects, and refine behavior without redeploying code.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Allow list or block list</b> – Control access to features or restrict specific users in real time, without modifying application code. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Centralized configuration storage</b> – Manage configuration data consistently across workloads. AppConfig can deploy configuration from the AppConfig hosted configuration store, Secrets Manager, Systems Manager, Systems Manager Parameter Store, or Amazon S3.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>How AppConfig works</b>
 *          </p>
 *          <p>This section provides a high-level description of how AppConfig works and how
 *          you get started.</p>
 *          <dl>
 *             <dt>1. Identify configuration data to manage in AppConfig</dt>
 *             <dd>
 *                <p>Before creating a configuration profile, identify the configuration data in your code that you want to manage dynamically using AppConfig. Common examples include feature flags, allow and block lists, logging levels, service limits, and throttling rules. These values tend to change frequently and can cause issues if misconfigured.</p>
 *                <p>If your configuration data already exists in cloud services such as Systems Manager Parameter Store or Amazon S3, you can use AppConfig to validate, deploy, and manage that data more effectively.</p>
 *             </dd>
 *             <dt>2. Create a configuration profile in AppConfig</dt>
 *             <dd>
 *                <p>A configuration profile defines how AppConfig locates and manages your configuration data. It includes a URI that points to the data source and a profile type.</p>
 *                <p>AppConfig supports two profile types</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>Feature flags</b> – Enable controlled feature releases, gradual rollouts, and testing in production.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Free-form configurations</b> – Store and retrieve configuration data from external sources and update it without redeploying code.</p>
 *                   </li>
 *                </ul>
 *                <p>Both profile types help decouple configuration from code, support continuous delivery, and reduce deployment risk.</p>
 *                <p>You can also add optional validators to ensure that configuration data is syntactically and semantically correct. During deployment, AppConfig evaluates these validators and automatically rolls back changes if validation fails.</p>
 *                <p>Each configuration profile is associated with an application, which acts as a logical container for your configuration resources. For more information about creating a configuration profile, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-profile.html">Creating a configuration profile in AppConfig</a> in the the <i>AppConfig User Guide</i>.</p>
 *             </dd>
 *             <dt>3. Deploy configuration data</dt>
 *             <dd>
 *                <p>When you start a deployment, AppConfig:</p>
 *                <ol>
 *                   <li>
 *                      <p>Retrieves configuration data from the source defined in the configuration profile</p>
 *                   </li>
 *                   <li>
 *                      <p>Validates the data using the configured validators</p>
 *                   </li>
 *                   <li>
 *                      <p>Delivers the validated configuration to AppConfig Agent</p>
 *                   </li>
 *                </ol>
 *                <p>The delivered configuration becomes the deployed version used by your application. For more information about deploying a configuration, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/deploying-feature-flags.html">Deploying feature flags and configuration data in AppConfig</a>.</p>
 *             </dd>
 *             <dt>4. Retrieve configuration data</dt>
 *             <dd>
 *                <p>Your application retrieves configuration data by calling a local endpoint exposed by AppConfig Agent, which caches the deployed configuration. Retrieving data is a metered event. AppConfig Agent supports a variety of use cases, as described in <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-agent-how-to-use.html">How to use AppConfig Agent to retrieve configuration data</a>.</p>
 *                <p>If the agent is not suitable for your use case, your application can retrieve configuration data directly from AppConfig by calling the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> API actions. </p>
 *                <p>For more information about retrieving a configuration, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/retrieving-feature-flags.html">Retrieving feature flags and configuration data in AppConfig</a>.</p>
 *             </dd>
 *          </dl>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">AppConfig User
 *          Guide</a>.</p>
 * @public
 */
export class AppConfigClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppConfigClientResolvedConfig
> {
  /**
   * The resolved configuration of AppConfigClient class. This is resolved and normalized from the {@link AppConfigClientConfig | constructor configuration interface}.
   */
  readonly config: AppConfigClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<AppConfigClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultAppConfigHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: AppConfigClientResolvedConfig) =>
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
