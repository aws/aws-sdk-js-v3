import { DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput } from "./commands/DeleteAlarmsCommand";
import {
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
} from "./commands/DeleteAnomalyDetectorCommand";
import { DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput } from "./commands/DeleteDashboardsCommand";
import { DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput } from "./commands/DeleteInsightRulesCommand";
import { DeleteMetricStreamCommandInput, DeleteMetricStreamCommandOutput } from "./commands/DeleteMetricStreamCommand";
import {
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput,
} from "./commands/DescribeAlarmHistoryCommand";
import { DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput } from "./commands/DescribeAlarmsCommand";
import {
  DescribeAlarmsForMetricCommandInput,
  DescribeAlarmsForMetricCommandOutput,
} from "./commands/DescribeAlarmsForMetricCommand";
import {
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput,
} from "./commands/DescribeAnomalyDetectorsCommand";
import {
  DescribeInsightRulesCommandInput,
  DescribeInsightRulesCommandOutput,
} from "./commands/DescribeInsightRulesCommand";
import {
  DisableAlarmActionsCommandInput,
  DisableAlarmActionsCommandOutput,
} from "./commands/DisableAlarmActionsCommand";
import {
  DisableInsightRulesCommandInput,
  DisableInsightRulesCommandOutput,
} from "./commands/DisableInsightRulesCommand";
import { EnableAlarmActionsCommandInput, EnableAlarmActionsCommandOutput } from "./commands/EnableAlarmActionsCommand";
import { EnableInsightRulesCommandInput, EnableInsightRulesCommandOutput } from "./commands/EnableInsightRulesCommand";
import { GetDashboardCommandInput, GetDashboardCommandOutput } from "./commands/GetDashboardCommand";
import {
  GetInsightRuleReportCommandInput,
  GetInsightRuleReportCommandOutput,
} from "./commands/GetInsightRuleReportCommand";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "./commands/GetMetricDataCommand";
import {
  GetMetricStatisticsCommandInput,
  GetMetricStatisticsCommandOutput,
} from "./commands/GetMetricStatisticsCommand";
import { GetMetricStreamCommandInput, GetMetricStreamCommandOutput } from "./commands/GetMetricStreamCommand";
import {
  GetMetricWidgetImageCommandInput,
  GetMetricWidgetImageCommandOutput,
} from "./commands/GetMetricWidgetImageCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import { ListMetricStreamsCommandInput, ListMetricStreamsCommandOutput } from "./commands/ListMetricStreamsCommand";
import { ListMetricsCommandInput, ListMetricsCommandOutput } from "./commands/ListMetricsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput } from "./commands/PutAnomalyDetectorCommand";
import { PutCompositeAlarmCommandInput, PutCompositeAlarmCommandOutput } from "./commands/PutCompositeAlarmCommand";
import { PutDashboardCommandInput, PutDashboardCommandOutput } from "./commands/PutDashboardCommand";
import { PutInsightRuleCommandInput, PutInsightRuleCommandOutput } from "./commands/PutInsightRuleCommand";
import { PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput } from "./commands/PutMetricAlarmCommand";
import { PutMetricDataCommandInput, PutMetricDataCommandOutput } from "./commands/PutMetricDataCommand";
import { PutMetricStreamCommandInput, PutMetricStreamCommandOutput } from "./commands/PutMetricStreamCommand";
import { SetAlarmStateCommandInput, SetAlarmStateCommandOutput } from "./commands/SetAlarmStateCommand";
import { StartMetricStreamsCommandInput, StartMetricStreamsCommandOutput } from "./commands/StartMetricStreamsCommand";
import { StopMetricStreamsCommandInput, StopMetricStreamsCommandOutput } from "./commands/StopMetricStreamsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
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
  | DeleteAlarmsCommandInput
  | DeleteAnomalyDetectorCommandInput
  | DeleteDashboardsCommandInput
  | DeleteInsightRulesCommandInput
  | DeleteMetricStreamCommandInput
  | DescribeAlarmHistoryCommandInput
  | DescribeAlarmsCommandInput
  | DescribeAlarmsForMetricCommandInput
  | DescribeAnomalyDetectorsCommandInput
  | DescribeInsightRulesCommandInput
  | DisableAlarmActionsCommandInput
  | DisableInsightRulesCommandInput
  | EnableAlarmActionsCommandInput
  | EnableInsightRulesCommandInput
  | GetDashboardCommandInput
  | GetInsightRuleReportCommandInput
  | GetMetricDataCommandInput
  | GetMetricStatisticsCommandInput
  | GetMetricStreamCommandInput
  | GetMetricWidgetImageCommandInput
  | ListDashboardsCommandInput
  | ListMetricStreamsCommandInput
  | ListMetricsCommandInput
  | ListTagsForResourceCommandInput
  | PutAnomalyDetectorCommandInput
  | PutCompositeAlarmCommandInput
  | PutDashboardCommandInput
  | PutInsightRuleCommandInput
  | PutMetricAlarmCommandInput
  | PutMetricDataCommandInput
  | PutMetricStreamCommandInput
  | SetAlarmStateCommandInput
  | StartMetricStreamsCommandInput
  | StopMetricStreamsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | DeleteAlarmsCommandOutput
  | DeleteAnomalyDetectorCommandOutput
  | DeleteDashboardsCommandOutput
  | DeleteInsightRulesCommandOutput
  | DeleteMetricStreamCommandOutput
  | DescribeAlarmHistoryCommandOutput
  | DescribeAlarmsCommandOutput
  | DescribeAlarmsForMetricCommandOutput
  | DescribeAnomalyDetectorsCommandOutput
  | DescribeInsightRulesCommandOutput
  | DisableAlarmActionsCommandOutput
  | DisableInsightRulesCommandOutput
  | EnableAlarmActionsCommandOutput
  | EnableInsightRulesCommandOutput
  | GetDashboardCommandOutput
  | GetInsightRuleReportCommandOutput
  | GetMetricDataCommandOutput
  | GetMetricStatisticsCommandOutput
  | GetMetricStreamCommandOutput
  | GetMetricWidgetImageCommandOutput
  | ListDashboardsCommandOutput
  | ListMetricStreamsCommandOutput
  | ListMetricsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutAnomalyDetectorCommandOutput
  | PutCompositeAlarmCommandOutput
  | PutDashboardCommandOutput
  | PutInsightRuleCommandOutput
  | PutMetricAlarmCommandOutput
  | PutMetricDataCommandOutput
  | PutMetricStreamCommandOutput
  | SetAlarmStateCommandOutput
  | StartMetricStreamsCommandOutput
  | StopMetricStreamsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

type CloudWatchClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CloudWatchClient class constructor that set the region, credentials and other options.
 */
export interface CloudWatchClientConfig extends CloudWatchClientConfigType {}

type CloudWatchClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CloudWatchClient class. This is resolved and normalized from the {@link CloudWatchClientConfig | constructor configuration interface}.
 */
export interface CloudWatchClientResolvedConfig extends CloudWatchClientResolvedConfigType {}

/**
 * <p>Amazon CloudWatch monitors your Amazon Web Services (Amazon Web Services) resources and the
 * 			applications you run on Amazon Web Services in real time. You can use CloudWatch to collect and track
 * 			metrics, which are the variables you want to measure for your resources and
 * 			applications.</p>
 *
 * 		       <p>CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules
 * 			that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2
 * 			instances. Then, use this data to determine whether you should launch
 * 			additional instances to handle increased load. You can also use this data to stop
 * 			under-used instances to save
 * 			money.</p>
 *
 * 		       <p>In addition to monitoring the built-in metrics that come with Amazon Web Services, you can monitor
 * 			your own custom metrics. With CloudWatch, you gain system-wide visibility into resource
 * 			utilization, application performance, and operational health.</p>
 */
export class CloudWatchClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudWatchClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudWatchClient class. This is resolved and normalized from the {@link CloudWatchClientConfig | constructor configuration interface}.
   */
  readonly config: CloudWatchClientResolvedConfig;

  constructor(configuration: CloudWatchClientConfig) {
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
