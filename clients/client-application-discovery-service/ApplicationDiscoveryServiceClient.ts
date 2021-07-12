import {
  AssociateConfigurationItemsToApplicationCommandInput,
  AssociateConfigurationItemsToApplicationCommandOutput,
} from "./commands/AssociateConfigurationItemsToApplicationCommand";
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
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
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
  | AssociateConfigurationItemsToApplicationCommandInput
  | BatchDeleteImportDataCommandInput
  | CreateApplicationCommandInput
  | CreateTagsCommandInput
  | DeleteApplicationsCommandInput
  | DeleteTagsCommandInput
  | DescribeAgentsCommandInput
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
  | StartContinuousExportCommandInput
  | StartDataCollectionByAgentIdsCommandInput
  | StartExportTaskCommandInput
  | StartImportTaskCommandInput
  | StopContinuousExportCommandInput
  | StopDataCollectionByAgentIdsCommandInput
  | UpdateApplicationCommandInput;

export type ServiceOutputTypes =
  | AssociateConfigurationItemsToApplicationCommandOutput
  | BatchDeleteImportDataCommandOutput
  | CreateApplicationCommandOutput
  | CreateTagsCommandOutput
  | DeleteApplicationsCommandOutput
  | DeleteTagsCommandOutput
  | DescribeAgentsCommandOutput
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
  | StartContinuousExportCommandOutput
  | StartDataCollectionByAgentIdsCommandOutput
  | StartExportTaskCommandOutput
  | StartImportTaskCommandOutput
  | StopContinuousExportCommandOutput
  | StopDataCollectionByAgentIdsCommandOutput
  | UpdateApplicationCommandOutput;

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
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

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

type ApplicationDiscoveryServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ApplicationDiscoveryServiceClient class constructor that set the region, credentials and other options.
 */
export interface ApplicationDiscoveryServiceClientConfig extends ApplicationDiscoveryServiceClientConfigType {}

type ApplicationDiscoveryServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ApplicationDiscoveryServiceClient class. This is resolved and normalized from the {@link ApplicationDiscoveryServiceClientConfig | constructor configuration interface}.
 */
export interface ApplicationDiscoveryServiceClientResolvedConfig
  extends ApplicationDiscoveryServiceClientResolvedConfigType {}

/**
 * <fullname>AWS Application Discovery Service</fullname>
 *
 *          <p>AWS Application Discovery Service helps you plan application migration projects. It
 *       automatically identifies servers, virtual machines (VMs), and network dependencies in your
 *       on-premises data centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">AWS Application Discovery Service
 *         FAQ</a>. Application Discovery Service offers three ways of performing discovery and
 *       collecting data about your on-premises servers:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agentless discovery</b> is recommended for environments
 *           that use VMware vCenter Server. This mode doesn't require you to install an agent on each
 *           host. It does not work in non-VMware environments.</p>
 *
 *                <ul>
 *                   <li>
 *                      <p>Agentless discovery gathers server information regardless of the operating
 *               systems, which minimizes the time required for initial on-premises infrastructure
 *               assessment.</p>
 *                   </li>
 *                   <li>
 *                      <p>Agentless discovery doesn't collect information about network dependencies, only
 *               agent-based discovery collects that information.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agent-based discovery</b> collects a richer set of data
 *           than agentless discovery by using the AWS Application Discovery Agent, which you install
 *           on one or more hosts in your data center.</p>
 *
 *                <ul>
 *                   <li>
 *                      <p> The agent captures infrastructure and application information, including an
 *               inventory of running processes, system performance information, resource utilization,
 *               and network dependencies.</p>
 *                   </li>
 *                   <li>
 *                      <p>The information collected by agents is secured at rest and in transit to the
 *               Application Discovery Service database in the cloud. </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>AWS Partner Network (APN) solutions</b> integrate with
 *           Application Discovery Service, enabling you to import details of your on-premises
 *           environment directly into Migration Hub without using the discovery connector or discovery
 *           agent.</p>
 *
 *                <ul>
 *                   <li>
 *                      <p>Third-party application discovery tools can query AWS Application Discovery
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
 *
 *
 *          <p>
 *             <b>Recommendations</b>
 *          </p>
 *          <p>We recommend that you use agent-based discovery for non-VMware environments, and
 *       whenever you want to collect information about network dependencies. You can run agent-based
 *       and agentless discovery simultaneously. Use agentless discovery to complete the initial
 *       infrastructure assessment quickly, and then install agents on select hosts to collect
 *       additional information.</p>
 *
 *          <p>
 *             <b>Working With This Guide</b>
 *          </p>
 *
 *          <p>This API reference provides descriptions, syntax, and usage examples for each of the
 *       actions and data types for Application Discovery Service. The topic for each action shows the
 *       API request parameters and the response. Alternatively, you can use one of the AWS SDKs to
 *       access an API that is tailored to the programming language or platform that you're using. For
 *       more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS
 *       SDKs</a>.</p>
 *
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Remember that you must set your Migration Hub home region before you call any of
 *             these APIs.</p>
 *                </li>
 *                <li>
 *                   <p>You must make API calls for write actions (create, notify, associate, disassociate,
 *             import, or put) while in your home region, or a <code>HomeRegionNotSetException</code>
 *             error is returned.</p>
 *                </li>
 *                <li>
 *                   <p>API calls for read actions (list, describe, stop, and delete) are permitted outside
 *             of your home region.</p>
 *                </li>
 *                <li>
 *                   <p>Although it is unlikely, the Migration Hub home region could change. If you call
 *             APIs outside the home region, an <code>InvalidInputException</code> is returned.</p>
 *                </li>
 *                <li>
 *                   <p>You must call <code>GetHomeRegion</code> to obtain the latest Migration Hub home
 *             region.</p>
 *                </li>
 *             </ul>
 *          </note>
 *
 *          <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/">AWS Application
 *         Discovery Service User Guide</a>.</p>
 *
 *          <important>
 *             <p>All data is handled according to the <a href="http://aws.amazon.com/privacy/">AWS
 *           Privacy Policy</a>. You can operate Application Discovery Service offline to inspect
 *         collected data before it is shared with the service.</p>
 *          </important>
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

  constructor(configuration: ApplicationDiscoveryServiceClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
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
