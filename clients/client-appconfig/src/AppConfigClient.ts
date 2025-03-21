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
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultAppConfigHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import {
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
} from "./commands/CreateConfigurationProfileCommand";
import {
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
} from "./commands/CreateDeploymentStrategyCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand";
import {
  CreateExtensionAssociationCommandInput,
  CreateExtensionAssociationCommandOutput,
} from "./commands/CreateExtensionAssociationCommand";
import { CreateExtensionCommandInput, CreateExtensionCommandOutput } from "./commands/CreateExtensionCommand";
import {
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
} from "./commands/CreateHostedConfigurationVersionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import {
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
} from "./commands/DeleteConfigurationProfileCommand";
import {
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
} from "./commands/DeleteDeploymentStrategyCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand";
import {
  DeleteExtensionAssociationCommandInput,
  DeleteExtensionAssociationCommandOutput,
} from "./commands/DeleteExtensionAssociationCommand";
import { DeleteExtensionCommandInput, DeleteExtensionCommandOutput } from "./commands/DeleteExtensionCommand";
import {
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
} from "./commands/DeleteHostedConfigurationVersionCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "./commands/GetConfigurationCommand";
import {
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
} from "./commands/GetConfigurationProfileCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import {
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
} from "./commands/GetDeploymentStrategyCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand";
import {
  GetExtensionAssociationCommandInput,
  GetExtensionAssociationCommandOutput,
} from "./commands/GetExtensionAssociationCommand";
import { GetExtensionCommandInput, GetExtensionCommandOutput } from "./commands/GetExtensionCommand";
import {
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
} from "./commands/GetHostedConfigurationVersionCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import {
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "./commands/ListConfigurationProfilesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import {
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "./commands/ListDeploymentStrategiesCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import {
  ListExtensionAssociationsCommandInput,
  ListExtensionAssociationsCommandOutput,
} from "./commands/ListExtensionAssociationsCommand";
import { ListExtensionsCommandInput, ListExtensionsCommandOutput } from "./commands/ListExtensionsCommand";
import {
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "./commands/ListHostedConfigurationVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "./commands/StartDeploymentCommand";
import { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "./commands/StopDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import {
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput,
} from "./commands/UpdateConfigurationProfileCommand";
import {
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
} from "./commands/UpdateDeploymentStrategyCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import {
  UpdateExtensionAssociationCommandInput,
  UpdateExtensionAssociationCommandOutput,
} from "./commands/UpdateExtensionAssociationCommand";
import { UpdateExtensionCommandInput, UpdateExtensionCommandOutput } from "./commands/UpdateExtensionCommand";
import {
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
} from "./commands/ValidateConfigurationCommand";
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
  | CreateApplicationCommandInput
  | CreateConfigurationProfileCommandInput
  | CreateDeploymentStrategyCommandInput
  | CreateEnvironmentCommandInput
  | CreateExtensionAssociationCommandInput
  | CreateExtensionCommandInput
  | CreateHostedConfigurationVersionCommandInput
  | DeleteApplicationCommandInput
  | DeleteConfigurationProfileCommandInput
  | DeleteDeploymentStrategyCommandInput
  | DeleteEnvironmentCommandInput
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
  | GetExtensionAssociationCommandInput
  | GetExtensionCommandInput
  | GetHostedConfigurationVersionCommandInput
  | ListApplicationsCommandInput
  | ListConfigurationProfilesCommandInput
  | ListDeploymentStrategiesCommandInput
  | ListDeploymentsCommandInput
  | ListEnvironmentsCommandInput
  | ListExtensionAssociationsCommandInput
  | ListExtensionsCommandInput
  | ListHostedConfigurationVersionsCommandInput
  | ListTagsForResourceCommandInput
  | StartDeploymentCommandInput
  | StopDeploymentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateApplicationCommandInput
  | UpdateConfigurationProfileCommandInput
  | UpdateDeploymentStrategyCommandInput
  | UpdateEnvironmentCommandInput
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
  | CreateExtensionAssociationCommandOutput
  | CreateExtensionCommandOutput
  | CreateHostedConfigurationVersionCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteConfigurationProfileCommandOutput
  | DeleteDeploymentStrategyCommandOutput
  | DeleteEnvironmentCommandOutput
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
  | GetExtensionAssociationCommandOutput
  | GetExtensionCommandOutput
  | GetHostedConfigurationVersionCommandOutput
  | ListApplicationsCommandOutput
  | ListConfigurationProfilesCommandOutput
  | ListDeploymentStrategiesCommandOutput
  | ListDeploymentsCommandOutput
  | ListEnvironmentsCommandOutput
  | ListExtensionAssociationsCommandOutput
  | ListExtensionsCommandOutput
  | ListHostedConfigurationVersionsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartDeploymentCommandOutput
  | StopDeploymentCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateConfigurationProfileCommandOutput
  | UpdateDeploymentStrategyCommandOutput
  | UpdateEnvironmentCommandOutput
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
 * <p>AppConfig feature flags and dynamic configurations help software builders
 *          quickly and securely adjust application behavior in production environments without full
 *          code deployments. AppConfig speeds up software release frequency, improves
 *          application resiliency, and helps you address emergent issues more quickly. With feature
 *          flags, you can gradually release new capabilities to users and measure the impact of those
 *          changes before fully deploying the new capabilities to all users. With operational flags
 *          and dynamic configurations, you can update block lists, allow lists, throttling limits,
 *          logging verbosity, and perform other operational tuning to quickly respond to issues in
 *          production environments.</p>
 *          <note>
 *             <p>AppConfig is a capability of Amazon Web Services Systems Manager.</p>
 *          </note>
 *          <p>Despite the fact that application configuration content can vary greatly from
 *          application to application, AppConfig supports the following use cases, which
 *          cover a broad spectrum of customer needs:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Feature flags and toggles</b> - Safely release new
 *                capabilities to your customers in a controlled environment. Instantly roll back
 *                changes if you experience a problem.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b> - Carefully introduce
 *                application changes while testing the impact of those changes with users in
 *                production environments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Allow list or block list</b> - Control access to
 *                premium features or instantly block specific users without deploying new code.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Centralized configuration storage</b> - Keep your
 *                configuration data organized and consistent across all of your workloads. You can use
 *                   AppConfig to deploy configuration data stored in the AppConfig
 *                hosted configuration store, Secrets Manager, Systems Manager, Parameter
 *                Store, or Amazon S3.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>How AppConfig works</b>
 *          </p>
 *          <p>This section provides a high-level description of how AppConfig works and how
 *          you get started.</p>
 *          <dl>
 *             <dt>1. Identify configuration values in code you want to manage in the cloud</dt>
 *             <dd>
 *                <p>Before you start creating AppConfig artifacts, we recommend you
 *                   identify configuration data in your code that you want to dynamically manage using
 *                      AppConfig. Good examples include feature flags or toggles, allow and
 *                   block lists, logging verbosity, service limits, and throttling rules, to name a
 *                   few.</p>
 *                <p>If your configuration data already exists in the cloud, you can take advantage
 *                   of AppConfig validation, deployment, and extension features to further
 *                   streamline configuration data management.</p>
 *             </dd>
 *             <dt>2. Create an application namespace</dt>
 *             <dd>
 *                <p>To create a namespace, you create an AppConfig artifact called an
 *                   application. An application is simply an organizational construct like a
 *                   folder.</p>
 *             </dd>
 *             <dt>3. Create environments</dt>
 *             <dd>
 *                <p>For each AppConfig application, you define one or more environments.
 *                   An environment is a logical grouping of targets, such as applications in a
 *                      <code>Beta</code> or <code>Production</code> environment, Lambda functions,
 *                   or containers. You can also define environments for application subcomponents,
 *                   such as the <code>Web</code>, <code>Mobile</code>, and
 *                   <code>Back-end</code>.</p>
 *                <p>You can configure Amazon CloudWatch alarms for each environment. The system monitors
 *                   alarms during a configuration deployment. If an alarm is triggered, the system
 *                   rolls back the configuration.</p>
 *             </dd>
 *             <dt>4. Create a configuration profile</dt>
 *             <dd>
 *                <p>A configuration profile includes, among other things, a URI that enables
 *                      AppConfig to locate your configuration data in its stored location
 *                   and a profile type. AppConfig supports two configuration profile types:
 *                   feature flags and freeform configurations. Feature flag configuration profiles
 *                   store their data in the AppConfig hosted configuration store and the URI
 *                   is simply <code>hosted</code>. For freeform configuration profiles, you can store
 *                   your data in the AppConfig hosted configuration store or any Amazon Web Services
 *                   service that integrates with AppConfig, as described in <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-free-form-configurations-creating.html">Creating
 *                      a free form configuration profile</a> in the the <i>AppConfig User Guide</i>.</p>
 *                <p>A configuration profile can also include optional validators to ensure your
 *                   configuration data is syntactically and semantically correct. AppConfig
 *                   performs a check using the validators when you start a deployment. If any errors
 *                   are detected, the deployment rolls back to the previous configuration data.</p>
 *             </dd>
 *             <dt>5. Deploy configuration data</dt>
 *             <dd>
 *                <p>When you create a new deployment, you specify the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>An application ID</p>
 *                   </li>
 *                   <li>
 *                      <p>A configuration profile ID</p>
 *                   </li>
 *                   <li>
 *                      <p>A configuration version</p>
 *                   </li>
 *                   <li>
 *                      <p>An environment ID where you want to deploy the configuration data</p>
 *                   </li>
 *                   <li>
 *                      <p>A deployment strategy ID that defines how fast you want the changes to
 *                         take effect</p>
 *                   </li>
 *                </ul>
 *                <p>When you call the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StartDeployment.html">StartDeployment</a> API action, AppConfig performs the following
 *                   tasks:</p>
 *                <ol>
 *                   <li>
 *                      <p>Retrieves the configuration data from the underlying data store by using
 *                         the location URI in the configuration profile.</p>
 *                   </li>
 *                   <li>
 *                      <p>Verifies the configuration data is syntactically and semantically correct
 *                         by using the validators you specified when you created your configuration
 *                         profile.</p>
 *                   </li>
 *                   <li>
 *                      <p>Caches a copy of the data so it is ready to be retrieved by your
 *                         application. This cached copy is called the <i>deployed
 *                            data</i>.</p>
 *                   </li>
 *                </ol>
 *             </dd>
 *             <dt>6. Retrieve the configuration</dt>
 *             <dd>
 *                <p>You can configure AppConfig Agent as a local host and have the agent
 *                   poll AppConfig for configuration updates. The agent calls the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> API actions and caches your configuration data
 *                   locally. To retrieve the data, your application makes an HTTP call to the
 *                   localhost server. AppConfig Agent supports several use cases, as
 *                   described in <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-simplified-methods.html">Simplified
 *                      retrieval methods</a> in the the <i>AppConfig User
 *                      Guide</i>.</p>
 *                <p>If AppConfig Agent isn't supported for your use case, you can
 *                   configure your application to poll AppConfig for configuration updates
 *                   by directly calling the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> API actions. </p>
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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
