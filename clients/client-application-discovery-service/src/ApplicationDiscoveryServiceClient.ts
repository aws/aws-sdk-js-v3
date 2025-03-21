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
  defaultApplicationDiscoveryServiceHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateConfigurationItemsToApplicationCommandInput,
  AssociateConfigurationItemsToApplicationCommandOutput,
} from "./commands/AssociateConfigurationItemsToApplicationCommand";
import { BatchDeleteAgentsCommandInput, BatchDeleteAgentsCommandOutput } from "./commands/BatchDeleteAgentsCommand";
import {
  BatchDeleteImportDataCommandInput,
  BatchDeleteImportDataCommandOutput,
} from "./commands/BatchDeleteImportDataCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { DeleteApplicationsCommandInput, DeleteApplicationsCommandOutput } from "./commands/DeleteApplicationsCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DescribeAgentsCommandInput, DescribeAgentsCommandOutput } from "./commands/DescribeAgentsCommand";
import {
  DescribeBatchDeleteConfigurationTaskCommandInput,
  DescribeBatchDeleteConfigurationTaskCommandOutput,
} from "./commands/DescribeBatchDeleteConfigurationTaskCommand";
import {
  DescribeConfigurationsCommandInput,
  DescribeConfigurationsCommandOutput,
} from "./commands/DescribeConfigurationsCommand";
import {
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput,
} from "./commands/DescribeContinuousExportsCommand";
import {
  DescribeExportConfigurationsCommandInput,
  DescribeExportConfigurationsCommandOutput,
} from "./commands/DescribeExportConfigurationsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import {
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput,
} from "./commands/DescribeImportTasksCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import {
  DisassociateConfigurationItemsFromApplicationCommandInput,
  DisassociateConfigurationItemsFromApplicationCommandOutput,
} from "./commands/DisassociateConfigurationItemsFromApplicationCommand";
import {
  ExportConfigurationsCommandInput,
  ExportConfigurationsCommandOutput,
} from "./commands/ExportConfigurationsCommand";
import {
  GetDiscoverySummaryCommandInput,
  GetDiscoverySummaryCommandOutput,
} from "./commands/GetDiscoverySummaryCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "./commands/ListConfigurationsCommand";
import {
  ListServerNeighborsCommandInput,
  ListServerNeighborsCommandOutput,
} from "./commands/ListServerNeighborsCommand";
import {
  StartBatchDeleteConfigurationTaskCommandInput,
  StartBatchDeleteConfigurationTaskCommandOutput,
} from "./commands/StartBatchDeleteConfigurationTaskCommand";
import {
  StartContinuousExportCommandInput,
  StartContinuousExportCommandOutput,
} from "./commands/StartContinuousExportCommand";
import {
  StartDataCollectionByAgentIdsCommandInput,
  StartDataCollectionByAgentIdsCommandOutput,
} from "./commands/StartDataCollectionByAgentIdsCommand";
import { StartExportTaskCommandInput, StartExportTaskCommandOutput } from "./commands/StartExportTaskCommand";
import { StartImportTaskCommandInput, StartImportTaskCommandOutput } from "./commands/StartImportTaskCommand";
import {
  StopContinuousExportCommandInput,
  StopContinuousExportCommandOutput,
} from "./commands/StopContinuousExportCommand";
import {
  StopDataCollectionByAgentIdsCommandInput,
  StopDataCollectionByAgentIdsCommandOutput,
} from "./commands/StopDataCollectionByAgentIdsCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
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
  | AssociateConfigurationItemsToApplicationCommandInput
  | BatchDeleteAgentsCommandInput
  | BatchDeleteImportDataCommandInput
  | CreateApplicationCommandInput
  | CreateTagsCommandInput
  | DeleteApplicationsCommandInput
  | DeleteTagsCommandInput
  | DescribeAgentsCommandInput
  | DescribeBatchDeleteConfigurationTaskCommandInput
  | DescribeConfigurationsCommandInput
  | DescribeContinuousExportsCommandInput
  | DescribeExportConfigurationsCommandInput
  | DescribeExportTasksCommandInput
  | DescribeImportTasksCommandInput
  | DescribeTagsCommandInput
  | DisassociateConfigurationItemsFromApplicationCommandInput
  | ExportConfigurationsCommandInput
  | GetDiscoverySummaryCommandInput
  | ListConfigurationsCommandInput
  | ListServerNeighborsCommandInput
  | StartBatchDeleteConfigurationTaskCommandInput
  | StartContinuousExportCommandInput
  | StartDataCollectionByAgentIdsCommandInput
  | StartExportTaskCommandInput
  | StartImportTaskCommandInput
  | StopContinuousExportCommandInput
  | StopDataCollectionByAgentIdsCommandInput
  | UpdateApplicationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateConfigurationItemsToApplicationCommandOutput
  | BatchDeleteAgentsCommandOutput
  | BatchDeleteImportDataCommandOutput
  | CreateApplicationCommandOutput
  | CreateTagsCommandOutput
  | DeleteApplicationsCommandOutput
  | DeleteTagsCommandOutput
  | DescribeAgentsCommandOutput
  | DescribeBatchDeleteConfigurationTaskCommandOutput
  | DescribeConfigurationsCommandOutput
  | DescribeContinuousExportsCommandOutput
  | DescribeExportConfigurationsCommandOutput
  | DescribeExportTasksCommandOutput
  | DescribeImportTasksCommandOutput
  | DescribeTagsCommandOutput
  | DisassociateConfigurationItemsFromApplicationCommandOutput
  | ExportConfigurationsCommandOutput
  | GetDiscoverySummaryCommandOutput
  | ListConfigurationsCommandOutput
  | ListServerNeighborsCommandOutput
  | StartBatchDeleteConfigurationTaskCommandOutput
  | StartContinuousExportCommandOutput
  | StartDataCollectionByAgentIdsCommandOutput
  | StartExportTaskCommandOutput
  | StartImportTaskCommandOutput
  | StopContinuousExportCommandOutput
  | StopDataCollectionByAgentIdsCommandOutput
  | UpdateApplicationCommandOutput;

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
export type ApplicationDiscoveryServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ApplicationDiscoveryServiceClient class constructor that set the region, credentials and other options.
 */
export interface ApplicationDiscoveryServiceClientConfig extends ApplicationDiscoveryServiceClientConfigType {}

/**
 * @public
 */
export type ApplicationDiscoveryServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ApplicationDiscoveryServiceClient class. This is resolved and normalized from the {@link ApplicationDiscoveryServiceClientConfig | constructor configuration interface}.
 */
export interface ApplicationDiscoveryServiceClientResolvedConfig
  extends ApplicationDiscoveryServiceClientResolvedConfigType {}

/**
 * <fullname>Amazon Web Services Application Discovery Service</fullname>
 *          <p>Amazon Web Services Application Discovery Service (Application Discovery Service) helps you plan application migration projects. It automatically
 *       identifies servers, virtual machines (VMs), and network dependencies in your on-premises data
 *       centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">Amazon Web Services Application Discovery Service FAQ</a>. </p>
 *          <p>Application Discovery Service offers three ways of performing discovery and collecting
 *       data about your on-premises servers:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agentless discovery</b> using
 *           Amazon Web Services Application Discovery Service Agentless Collector (Agentless Collector), which doesn't require you
 *           to install an agent on each host.</p>
 *                <ul>
 *                   <li>
 *                      <p>Agentless Collector gathers server information regardless of the
 *               operating systems, which minimizes the time required for initial on-premises
 *               infrastructure assessment.</p>
 *                   </li>
 *                   <li>
 *                      <p>Agentless Collector doesn't collect information about network
 *               dependencies, only agent-based discovery collects that information.
 *               </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agent-based discovery</b> using the Amazon Web Services Application
 *           Discovery Agent (Application Discovery Agent) collects a richer set of data than agentless
 *           discovery, which you install on one or more hosts in your data center.</p>
 *                <ul>
 *                   <li>
 *                      <p> The agent captures infrastructure and application information, including an
 *               inventory of running processes, system performance information, resource utilization,
 *               and network dependencies.</p>
 *                   </li>
 *                   <li>
 *                      <p>The information collected by agents is secured at rest and in transit to the
 *               Application Discovery Service database in the Amazon Web Services cloud. For more information, see
 *                 <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-agent.html">Amazon Web Services Application
 *                 Discovery Agent</a>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Amazon Web Services Partner Network (APN) solutions</b> integrate with
 *           Application Discovery Service, enabling you to import details of your on-premises
 *           environment directly into Amazon Web Services Migration Hub (Migration Hub) without using
 *           Agentless Collector or Application Discovery Agent.</p>
 *                <ul>
 *                   <li>
 *                      <p>Third-party application discovery tools can query Amazon Web Services Application Discovery
 *               Service, and they can write to the Application Discovery Service database using the
 *               public API.</p>
 *                   </li>
 *                   <li>
 *                      <p>In this way, you can import data into Migration Hub and view it, so that you can
 *               associate applications with servers and track migrations.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Working With This Guide</b>
 *          </p>
 *          <p>This API reference provides descriptions, syntax, and usage examples for each of the
 *       actions and data types for Application Discovery Service. The topic for each action shows the
 *       API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to
 *       access an API that is tailored to the programming language or platform that you're using. For
 *       more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Remember that you must set your Migration Hub home Region before you call any of
 *             these APIs.</p>
 *                </li>
 *                <li>
 *                   <p>You must make API calls for write actions (create, notify, associate, disassociate,
 *             import, or put) while in your home Region, or a <code>HomeRegionNotSetException</code>
 *             error is returned.</p>
 *                </li>
 *                <li>
 *                   <p>API calls for read actions (list, describe, stop, and delete) are permitted outside
 *             of your home Region.</p>
 *                </li>
 *                <li>
 *                   <p>Although it is unlikely, the Migration Hub home Region could change. If you call
 *             APIs outside the home Region, an <code>InvalidInputException</code> is returned.</p>
 *                </li>
 *                <li>
 *                   <p>You must call <code>GetHomeRegion</code> to obtain the latest Migration Hub home
 *             Region.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>This guide is intended for use with the <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/">Amazon Web Services Application Discovery Service User
 *         Guide</a>.</p>
 *          <important>
 *             <p>All data is handled according to the <a href="https://aws.amazon.com/privacy/">Amazon Web Services Privacy Policy</a>. You can operate Application Discovery Service offline to
 *         inspect collected data before it is shared with the service.</p>
 *          </important>
 * @public
 */
export class ApplicationDiscoveryServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of ApplicationDiscoveryServiceClient class. This is resolved and normalized from the {@link ApplicationDiscoveryServiceClientConfig | constructor configuration interface}.
   */
  readonly config: ApplicationDiscoveryServiceClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ApplicationDiscoveryServiceClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6, { client: () => this });
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
        httpAuthSchemeParametersProvider: defaultApplicationDiscoveryServiceHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ApplicationDiscoveryServiceClientResolvedConfig) =>
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
