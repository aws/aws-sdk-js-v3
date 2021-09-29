import {
  AssociateCustomDomainCommandInput,
  AssociateCustomDomainCommandOutput,
} from "./commands/AssociateCustomDomainCommand";
import {
  CreateAutoScalingConfigurationCommandInput,
  CreateAutoScalingConfigurationCommandOutput,
} from "./commands/CreateAutoScalingConfigurationCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import {
  DeleteAutoScalingConfigurationCommandInput,
  DeleteAutoScalingConfigurationCommandOutput,
} from "./commands/DeleteAutoScalingConfigurationCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import {
  DescribeAutoScalingConfigurationCommandInput,
  DescribeAutoScalingConfigurationCommandOutput,
} from "./commands/DescribeAutoScalingConfigurationCommand";
import {
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
} from "./commands/DescribeCustomDomainsCommand";
import { DescribeServiceCommandInput, DescribeServiceCommandOutput } from "./commands/DescribeServiceCommand";
import {
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
} from "./commands/DisassociateCustomDomainCommand";
import {
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "./commands/ListAutoScalingConfigurationsCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "./commands/ListConnectionsCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "./commands/ListOperationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PauseServiceCommandInput, PauseServiceCommandOutput } from "./commands/PauseServiceCommand";
import { ResumeServiceCommandInput, ResumeServiceCommandOutput } from "./commands/ResumeServiceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "./commands/StartDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateCustomDomainCommandInput
  | CreateAutoScalingConfigurationCommandInput
  | CreateConnectionCommandInput
  | CreateServiceCommandInput
  | DeleteAutoScalingConfigurationCommandInput
  | DeleteConnectionCommandInput
  | DeleteServiceCommandInput
  | DescribeAutoScalingConfigurationCommandInput
  | DescribeCustomDomainsCommandInput
  | DescribeServiceCommandInput
  | DisassociateCustomDomainCommandInput
  | ListAutoScalingConfigurationsCommandInput
  | ListConnectionsCommandInput
  | ListOperationsCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | PauseServiceCommandInput
  | ResumeServiceCommandInput
  | StartDeploymentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateServiceCommandInput;

export type ServiceOutputTypes =
  | AssociateCustomDomainCommandOutput
  | CreateAutoScalingConfigurationCommandOutput
  | CreateConnectionCommandOutput
  | CreateServiceCommandOutput
  | DeleteAutoScalingConfigurationCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteServiceCommandOutput
  | DescribeAutoScalingConfigurationCommandOutput
  | DescribeCustomDomainsCommandOutput
  | DescribeServiceCommandOutput
  | DisassociateCustomDomainCommandOutput
  | ListAutoScalingConfigurationsCommandOutput
  | ListConnectionsCommandOutput
  | ListOperationsCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | PauseServiceCommandOutput
  | ResumeServiceCommandOutput
  | StartDeploymentCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateServiceCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type AppRunnerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of AppRunnerClient class constructor that set the region, credentials and other options.
 */
export interface AppRunnerClientConfig extends AppRunnerClientConfigType {}

type AppRunnerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of AppRunnerClient class. This is resolved and normalized from the {@link AppRunnerClientConfig | constructor configuration interface}.
 */
export interface AppRunnerClientResolvedConfig extends AppRunnerClientResolvedConfigType {}

/**
 * <fullname>AWS App Runner</fullname>
 *
 *
 *
 *          <p>AWS App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code
 *       to a running service in the AWS cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to
 *       provision and configure AWS resources.</p>
 *          <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations,
 *       high performance, scalability, and security.</p>
 *          <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">AWS App Runner Developer Guide</a>.
 *       For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">AWS App Runner Release Notes</a>.</p>
 *          <p>
 *        To install the Software Development Kits (SDKs), Integrated
 *       Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for
 *         Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">AWS App Runner
 *         endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
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

  constructor(configuration: AppRunnerClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
