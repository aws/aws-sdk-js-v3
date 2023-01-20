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
  | UpdateApplicationCommandInput
  | UpdateConfigurationProfileCommandInput
  | UpdateDeploymentStrategyCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateExtensionAssociationCommandInput
  | UpdateExtensionCommandInput
  | ValidateConfigurationCommandInput;

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
  | UpdateApplicationCommandOutput
  | UpdateConfigurationProfileCommandOutput
  | UpdateDeploymentStrategyCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateExtensionAssociationCommandOutput
  | UpdateExtensionCommandOutput
  | ValidateConfigurationCommandOutput;

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

type AppConfigClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of AppConfigClient class constructor that set the region, credentials and other options.
 */
export interface AppConfigClientConfig extends AppConfigClientConfigType {}

type AppConfigClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of AppConfigClient class. This is resolved and normalized from the {@link AppConfigClientConfig | constructor configuration interface}.
 */
export interface AppConfigClientResolvedConfig extends AppConfigClientResolvedConfigType {}

/**
 * <p>Use AppConfig, a capability of Amazon Web Services Systems Manager, to create, manage, and quickly
 *          deploy application configurations. AppConfig supports controlled deployments to
 *          applications of any size and includes built-in validation checks and monitoring. You can
 *          use AppConfig with applications hosted on Amazon EC2 instances, Lambda, containers,
 *          mobile applications, or IoT devices.</p>
 *          <p>To prevent errors when deploying application configurations, especially for production
 *          systems where a simple typo could cause an unexpected outage, AppConfig includes
 *          validators. A validator provides a syntactic or semantic check to ensure that the
 *          configuration you want to deploy works as intended. To validate your application
 *          configuration data, you provide a schema or an Amazon Web Services Lambda function that runs against
 *          the configuration. The configuration deployment or update can only proceed when the
 *          configuration data is valid.</p>
 *          <p>During a configuration deployment, AppConfig monitors the application to
 *          ensure that the deployment is successful. If the system encounters an error, AppConfig rolls back the change to minimize impact for your application users. You can
 *          configure a deployment strategy for each application or environment that includes
 *          deployment criteria, including velocity, bake time, and alarms to monitor. Similar to error
 *          monitoring, if a deployment triggers an alarm, AppConfig automatically rolls back
 *          to the previous version. </p>
 *          <p>AppConfig supports multiple use cases. Here are some examples:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Feature flags</b>: Use AppConfig to turn on
 *                new features that require a timely deployment, such as a product launch or
 *                announcement. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b>: Use AppConfig to
 *                carefully introduce changes to your application that can only be tested with
 *                production traffic.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Allow list</b>: Use AppConfig to allow
 *                premium subscribers to access paid content. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Operational issues</b>: Use AppConfig to
 *                reduce stress on your application when a dependency or other external factor impacts
 *                the system.</p>
 *             </li>
 *          </ul>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">AppConfig User
 *          Guide</a>.</p>
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

  constructor(configuration: AppConfigClientConfig) {
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
