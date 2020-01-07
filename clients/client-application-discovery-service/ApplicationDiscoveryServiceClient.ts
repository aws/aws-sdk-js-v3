import {
  AssociateConfigurationItemsToApplicationRequest,
  AssociateConfigurationItemsToApplicationResponse,
  BatchDeleteImportDataRequest,
  BatchDeleteImportDataResponse,
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateTagsRequest,
  CreateTagsResponse,
  DeleteApplicationsRequest,
  DeleteApplicationsResponse,
  DeleteTagsRequest,
  DeleteTagsResponse,
  DescribeAgentsRequest,
  DescribeAgentsResponse,
  DescribeConfigurationsRequest,
  DescribeConfigurationsResponse,
  DescribeContinuousExportsRequest,
  DescribeContinuousExportsResponse,
  DescribeExportConfigurationsRequest,
  DescribeExportConfigurationsResponse,
  DescribeExportTasksRequest,
  DescribeExportTasksResponse,
  DescribeImportTasksRequest,
  DescribeImportTasksResponse,
  DescribeTagsRequest,
  DescribeTagsResponse,
  DisassociateConfigurationItemsFromApplicationRequest,
  DisassociateConfigurationItemsFromApplicationResponse,
  ExportConfigurationsResponse,
  GetDiscoverySummaryRequest,
  GetDiscoverySummaryResponse,
  ListConfigurationsRequest,
  ListConfigurationsResponse,
  ListServerNeighborsRequest,
  ListServerNeighborsResponse,
  StartContinuousExportRequest,
  StartContinuousExportResponse,
  StartDataCollectionByAgentIdsRequest,
  StartDataCollectionByAgentIdsResponse,
  StartExportTaskRequest,
  StartExportTaskResponse,
  StartImportTaskRequest,
  StartImportTaskResponse,
  StopContinuousExportRequest,
  StopContinuousExportResponse,
  StopDataCollectionByAgentIdsRequest,
  StopDataCollectionByAgentIdsResponse,
  UpdateApplicationRequest,
  UpdateApplicationResponse
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | {}
  | AssociateConfigurationItemsToApplicationRequest
  | BatchDeleteImportDataRequest
  | CreateApplicationRequest
  | CreateTagsRequest
  | DeleteApplicationsRequest
  | DeleteTagsRequest
  | DescribeAgentsRequest
  | DescribeConfigurationsRequest
  | DescribeContinuousExportsRequest
  | DescribeExportConfigurationsRequest
  | DescribeExportTasksRequest
  | DescribeImportTasksRequest
  | DescribeTagsRequest
  | DisassociateConfigurationItemsFromApplicationRequest
  | GetDiscoverySummaryRequest
  | ListConfigurationsRequest
  | ListServerNeighborsRequest
  | StartContinuousExportRequest
  | StartDataCollectionByAgentIdsRequest
  | StartExportTaskRequest
  | StartImportTaskRequest
  | StopContinuousExportRequest
  | StopDataCollectionByAgentIdsRequest
  | UpdateApplicationRequest;

export type ServiceOutputTypes =
  | AssociateConfigurationItemsToApplicationResponse
  | BatchDeleteImportDataResponse
  | CreateApplicationResponse
  | CreateTagsResponse
  | DeleteApplicationsResponse
  | DeleteTagsResponse
  | DescribeAgentsResponse
  | DescribeConfigurationsResponse
  | DescribeContinuousExportsResponse
  | DescribeExportConfigurationsResponse
  | DescribeExportTasksResponse
  | DescribeImportTasksResponse
  | DescribeTagsResponse
  | DisassociateConfigurationItemsFromApplicationResponse
  | ExportConfigurationsResponse
  | GetDiscoverySummaryResponse
  | ListConfigurationsResponse
  | ListServerNeighborsResponse
  | StartContinuousExportResponse
  | StartDataCollectionByAgentIdsResponse
  | StartExportTaskResponse
  | StartImportTaskResponse
  | StopContinuousExportResponse
  | StopDataCollectionByAgentIdsResponse
  | UpdateApplicationResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ApplicationDiscoveryServiceClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ApplicationDiscoveryServiceClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *
 *          <fullname>AWS Application Discovery Service</fullname>
 *
 *          <p>AWS Application Discovery Service helps you plan application migration projects by
 *       automatically identifying servers, virtual machines (VMs), software, and software dependencies
 *       running in your on-premises data centers. Application Discovery Service also collects
 *       application performance data, which can help you assess the outcome of your migration. The
 *       data collected by Application Discovery Service is securely retained in an AWS-hosted and
 *       managed database in the cloud. You can export the data as a CSV or XML file into your
 *       preferred visualization tool or cloud-migration solution to plan your migration. For more
 *       information, see <a href="http://aws.amazon.com/application-discovery/faqs/">AWS
 *         Application Discovery Service FAQ</a>.</p>
 *          <p>Application Discovery Service offers two modes of operation:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agentless discovery</b> mode is recommended for
 *           environments that use VMware vCenter Server. This mode doesn't require you to install an
 *           agent on each host. Agentless discovery gathers server information regardless of the
 *           operating systems, which minimizes the time required for initial on-premises
 *           infrastructure assessment. Agentless discovery doesn't collect information about software
 *           and software dependencies. It also doesn't work in non-VMware environments. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Agent-based discovery</b> mode collects a richer set
 *           of data than agentless discovery by using the AWS Application Discovery Agent, which you
 *           install on one or more hosts in your data center. The agent captures infrastructure and
 *           application information, including an inventory of installed software applications, system
 *           and process performance, resource utilization, and network dependencies between workloads.
 *           The information collected by agents is secured at rest and in transit to the Application
 *           Discovery Service database in the cloud. </p>
 *             </li>
 *          </ul>
 *          <p>We recommend that you use agent-based discovery for non-VMware environments and to
 *       collect information about software and software dependencies. You can also run agent-based and
 *       agentless discovery simultaneously. Use agentless discovery to quickly complete the initial
 *       infrastructure assessment and then install agents on select hosts.</p>
 *          <p>Application Discovery Service integrates with application discovery solutions from AWS
 *       Partner Network (APN) partners. Third-party application discovery tools can query Application
 *       Discovery Service and write to the Application Discovery Service database using a public API.
 *       You can then import the data into either a visualization tool or cloud-migration
 *       solution.</p>
 *          <important>
 *             <p>Application Discovery Service doesn't gather sensitive information. All data is
 *         handled according to the <a href="http://aws.amazon.com/privacy/">AWS Privacy
 *           Policy</a>. You can operate Application Discovery Service offline to inspect collected
 *         data before it is shared with the service.</p>
 *          </important>
 *          <p>This API reference provides descriptions, syntax, and usage examples for each of the
 *       actions and data types for Application Discovery Service. The topic for each action shows the
 *       API request parameters and the response. Alternatively, you can use one of the AWS SDKs to
 *       access an API that is tailored to the programming language or platform that you're using. For
 *       more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS
 *       SDKs</a>.</p>
 *          <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/">
 *                <i>AWS
 *           Application Discovery Service User Guide</i>
 *             </a>.</p>
 *          <note>
 *             <p>Remember that you must set your AWS Migration Hub home region before you call any of
 *       these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you must
 *       make the API calls while in your home region.</p>
 *          </note>
 *
 */
export class ApplicationDiscoveryServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  readonly config: ApplicationDiscoveryServiceClientResolvedConfig;

  constructor(configuration: ApplicationDiscoveryServiceClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
