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
  defaultAppRunnerHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateCustomDomainCommandInput,
  AssociateCustomDomainCommandOutput,
} from "./commands/AssociateCustomDomainCommand";
import type {
  CreateAutoScalingConfigurationCommandInput,
  CreateAutoScalingConfigurationCommandOutput,
} from "./commands/CreateAutoScalingConfigurationCommand";
import type { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import type {
  CreateObservabilityConfigurationCommandInput,
  CreateObservabilityConfigurationCommandOutput,
} from "./commands/CreateObservabilityConfigurationCommand";
import type { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import type {
  CreateVpcConnectorCommandInput,
  CreateVpcConnectorCommandOutput,
} from "./commands/CreateVpcConnectorCommand";
import type {
  CreateVpcIngressConnectionCommandInput,
  CreateVpcIngressConnectionCommandOutput,
} from "./commands/CreateVpcIngressConnectionCommand";
import type {
  DeleteAutoScalingConfigurationCommandInput,
  DeleteAutoScalingConfigurationCommandOutput,
} from "./commands/DeleteAutoScalingConfigurationCommand";
import type { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import type {
  DeleteObservabilityConfigurationCommandInput,
  DeleteObservabilityConfigurationCommandOutput,
} from "./commands/DeleteObservabilityConfigurationCommand";
import type { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import type {
  DeleteVpcConnectorCommandInput,
  DeleteVpcConnectorCommandOutput,
} from "./commands/DeleteVpcConnectorCommand";
import type {
  DeleteVpcIngressConnectionCommandInput,
  DeleteVpcIngressConnectionCommandOutput,
} from "./commands/DeleteVpcIngressConnectionCommand";
import type {
  DescribeAutoScalingConfigurationCommandInput,
  DescribeAutoScalingConfigurationCommandOutput,
} from "./commands/DescribeAutoScalingConfigurationCommand";
import type {
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
} from "./commands/DescribeCustomDomainsCommand";
import type {
  DescribeObservabilityConfigurationCommandInput,
  DescribeObservabilityConfigurationCommandOutput,
} from "./commands/DescribeObservabilityConfigurationCommand";
import type { DescribeServiceCommandInput, DescribeServiceCommandOutput } from "./commands/DescribeServiceCommand";
import type {
  DescribeVpcConnectorCommandInput,
  DescribeVpcConnectorCommandOutput,
} from "./commands/DescribeVpcConnectorCommand";
import type {
  DescribeVpcIngressConnectionCommandInput,
  DescribeVpcIngressConnectionCommandOutput,
} from "./commands/DescribeVpcIngressConnectionCommand";
import type {
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
} from "./commands/DisassociateCustomDomainCommand";
import type {
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "./commands/ListAutoScalingConfigurationsCommand";
import type { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "./commands/ListConnectionsCommand";
import type {
  ListObservabilityConfigurationsCommandInput,
  ListObservabilityConfigurationsCommandOutput,
} from "./commands/ListObservabilityConfigurationsCommand";
import type { ListOperationsCommandInput, ListOperationsCommandOutput } from "./commands/ListOperationsCommand";
import type { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import type {
  ListServicesForAutoScalingConfigurationCommandInput,
  ListServicesForAutoScalingConfigurationCommandOutput,
} from "./commands/ListServicesForAutoScalingConfigurationCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListVpcConnectorsCommandInput,
  ListVpcConnectorsCommandOutput,
} from "./commands/ListVpcConnectorsCommand";
import type {
  ListVpcIngressConnectionsCommandInput,
  ListVpcIngressConnectionsCommandOutput,
} from "./commands/ListVpcIngressConnectionsCommand";
import type { PauseServiceCommandInput, PauseServiceCommandOutput } from "./commands/PauseServiceCommand";
import type { ResumeServiceCommandInput, ResumeServiceCommandOutput } from "./commands/ResumeServiceCommand";
import type { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "./commands/StartDeploymentCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateDefaultAutoScalingConfigurationCommandInput,
  UpdateDefaultAutoScalingConfigurationCommandOutput,
} from "./commands/UpdateDefaultAutoScalingConfigurationCommand";
import type { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
import type {
  UpdateVpcIngressConnectionCommandInput,
  UpdateVpcIngressConnectionCommandOutput,
} from "./commands/UpdateVpcIngressConnectionCommand";
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
  | AssociateCustomDomainCommandInput
  | CreateAutoScalingConfigurationCommandInput
  | CreateConnectionCommandInput
  | CreateObservabilityConfigurationCommandInput
  | CreateServiceCommandInput
  | CreateVpcConnectorCommandInput
  | CreateVpcIngressConnectionCommandInput
  | DeleteAutoScalingConfigurationCommandInput
  | DeleteConnectionCommandInput
  | DeleteObservabilityConfigurationCommandInput
  | DeleteServiceCommandInput
  | DeleteVpcConnectorCommandInput
  | DeleteVpcIngressConnectionCommandInput
  | DescribeAutoScalingConfigurationCommandInput
  | DescribeCustomDomainsCommandInput
  | DescribeObservabilityConfigurationCommandInput
  | DescribeServiceCommandInput
  | DescribeVpcConnectorCommandInput
  | DescribeVpcIngressConnectionCommandInput
  | DisassociateCustomDomainCommandInput
  | ListAutoScalingConfigurationsCommandInput
  | ListConnectionsCommandInput
  | ListObservabilityConfigurationsCommandInput
  | ListOperationsCommandInput
  | ListServicesCommandInput
  | ListServicesForAutoScalingConfigurationCommandInput
  | ListTagsForResourceCommandInput
  | ListVpcConnectorsCommandInput
  | ListVpcIngressConnectionsCommandInput
  | PauseServiceCommandInput
  | ResumeServiceCommandInput
  | StartDeploymentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDefaultAutoScalingConfigurationCommandInput
  | UpdateServiceCommandInput
  | UpdateVpcIngressConnectionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateCustomDomainCommandOutput
  | CreateAutoScalingConfigurationCommandOutput
  | CreateConnectionCommandOutput
  | CreateObservabilityConfigurationCommandOutput
  | CreateServiceCommandOutput
  | CreateVpcConnectorCommandOutput
  | CreateVpcIngressConnectionCommandOutput
  | DeleteAutoScalingConfigurationCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteObservabilityConfigurationCommandOutput
  | DeleteServiceCommandOutput
  | DeleteVpcConnectorCommandOutput
  | DeleteVpcIngressConnectionCommandOutput
  | DescribeAutoScalingConfigurationCommandOutput
  | DescribeCustomDomainsCommandOutput
  | DescribeObservabilityConfigurationCommandOutput
  | DescribeServiceCommandOutput
  | DescribeVpcConnectorCommandOutput
  | DescribeVpcIngressConnectionCommandOutput
  | DisassociateCustomDomainCommandOutput
  | ListAutoScalingConfigurationsCommandOutput
  | ListConnectionsCommandOutput
  | ListObservabilityConfigurationsCommandOutput
  | ListOperationsCommandOutput
  | ListServicesCommandOutput
  | ListServicesForAutoScalingConfigurationCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVpcConnectorsCommandOutput
  | ListVpcIngressConnectionsCommandOutput
  | PauseServiceCommandOutput
  | ResumeServiceCommandOutput
  | StartDeploymentCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDefaultAutoScalingConfigurationCommandOutput
  | UpdateServiceCommandOutput
  | UpdateVpcIngressConnectionCommandOutput;

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
export type AppRunnerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of AppRunnerClient class constructor that set the region, credentials and other options.
 */
export interface AppRunnerClientConfig extends AppRunnerClientConfigType {}

/**
 * @public
 */
export type AppRunnerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of AppRunnerClient class. This is resolved and normalized from the {@link AppRunnerClientConfig | constructor configuration interface}.
 */
export interface AppRunnerClientResolvedConfig extends AppRunnerClientResolvedConfigType {}

/**
 * <fullname>App Runner</fullname>
 *          <p>App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code
 *       to a running service in the Amazon Web Services Cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to
 *       provision and configure Amazon Web Services resources.</p>
 *          <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations,
 *       high performance, scalability, and security.</p>
 *          <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">App Runner Developer Guide</a>.
 *       For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">App Runner Release Notes</a>.</p>
 *          <p>
 *        To install the Software Development Kits (SDKs), Integrated
 *       Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for
 *         Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner
 *         endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
 * @public
 */
export class AppRunnerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppRunnerClientResolvedConfig
> {
  /**
   * The resolved configuration of AppRunnerClient class. This is resolved and normalized from the {@link AppRunnerClientConfig | constructor configuration interface}.
   */
  readonly config: AppRunnerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<AppRunnerClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultAppRunnerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: AppRunnerClientResolvedConfig) =>
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
