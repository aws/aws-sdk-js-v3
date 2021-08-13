import {
  AddNotificationChannelCommandInput,
  AddNotificationChannelCommandOutput,
} from "./commands/AddNotificationChannelCommand";
import {
  DescribeAccountHealthCommandInput,
  DescribeAccountHealthCommandOutput,
} from "./commands/DescribeAccountHealthCommand";
import {
  DescribeAccountOverviewCommandInput,
  DescribeAccountOverviewCommandOutput,
} from "./commands/DescribeAccountOverviewCommand";
import { DescribeAnomalyCommandInput, DescribeAnomalyCommandOutput } from "./commands/DescribeAnomalyCommand";
import { DescribeFeedbackCommandInput, DescribeFeedbackCommandOutput } from "./commands/DescribeFeedbackCommand";
import { DescribeInsightCommandInput, DescribeInsightCommandOutput } from "./commands/DescribeInsightCommand";
import {
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput,
} from "./commands/DescribeResourceCollectionHealthCommand";
import {
  DescribeServiceIntegrationCommandInput,
  DescribeServiceIntegrationCommandOutput,
} from "./commands/DescribeServiceIntegrationCommand";
import { GetCostEstimationCommandInput, GetCostEstimationCommandOutput } from "./commands/GetCostEstimationCommand";
import {
  GetResourceCollectionCommandInput,
  GetResourceCollectionCommandOutput,
} from "./commands/GetResourceCollectionCommand";
import {
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
} from "./commands/ListAnomaliesForInsightCommand";
import { ListEventsCommandInput, ListEventsCommandOutput } from "./commands/ListEventsCommand";
import { ListInsightsCommandInput, ListInsightsCommandOutput } from "./commands/ListInsightsCommand";
import {
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
} from "./commands/ListNotificationChannelsCommand";
import {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import {
  RemoveNotificationChannelCommandInput,
  RemoveNotificationChannelCommandOutput,
} from "./commands/RemoveNotificationChannelCommand";
import { SearchInsightsCommandInput, SearchInsightsCommandOutput } from "./commands/SearchInsightsCommand";
import {
  StartCostEstimationCommandInput,
  StartCostEstimationCommandOutput,
} from "./commands/StartCostEstimationCommand";
import {
  UpdateResourceCollectionCommandInput,
  UpdateResourceCollectionCommandOutput,
} from "./commands/UpdateResourceCollectionCommand";
import {
  UpdateServiceIntegrationCommandInput,
  UpdateServiceIntegrationCommandOutput,
} from "./commands/UpdateServiceIntegrationCommand";
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
  | AddNotificationChannelCommandInput
  | DescribeAccountHealthCommandInput
  | DescribeAccountOverviewCommandInput
  | DescribeAnomalyCommandInput
  | DescribeFeedbackCommandInput
  | DescribeInsightCommandInput
  | DescribeResourceCollectionHealthCommandInput
  | DescribeServiceIntegrationCommandInput
  | GetCostEstimationCommandInput
  | GetResourceCollectionCommandInput
  | ListAnomaliesForInsightCommandInput
  | ListEventsCommandInput
  | ListInsightsCommandInput
  | ListNotificationChannelsCommandInput
  | ListRecommendationsCommandInput
  | PutFeedbackCommandInput
  | RemoveNotificationChannelCommandInput
  | SearchInsightsCommandInput
  | StartCostEstimationCommandInput
  | UpdateResourceCollectionCommandInput
  | UpdateServiceIntegrationCommandInput;

export type ServiceOutputTypes =
  | AddNotificationChannelCommandOutput
  | DescribeAccountHealthCommandOutput
  | DescribeAccountOverviewCommandOutput
  | DescribeAnomalyCommandOutput
  | DescribeFeedbackCommandOutput
  | DescribeInsightCommandOutput
  | DescribeResourceCollectionHealthCommandOutput
  | DescribeServiceIntegrationCommandOutput
  | GetCostEstimationCommandOutput
  | GetResourceCollectionCommandOutput
  | ListAnomaliesForInsightCommandOutput
  | ListEventsCommandOutput
  | ListInsightsCommandOutput
  | ListNotificationChannelsCommandOutput
  | ListRecommendationsCommandOutput
  | PutFeedbackCommandOutput
  | RemoveNotificationChannelCommandOutput
  | SearchInsightsCommandOutput
  | StartCostEstimationCommandOutput
  | UpdateResourceCollectionCommandOutput
  | UpdateServiceIntegrationCommandOutput;

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

type DevOpsGuruClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of DevOpsGuruClient class constructor that set the region, credentials and other options.
 */
export interface DevOpsGuruClientConfig extends DevOpsGuruClientConfigType {}

type DevOpsGuruClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of DevOpsGuruClient class. This is resolved and normalized from the {@link DevOpsGuruClientConfig | constructor configuration interface}.
 */
export interface DevOpsGuruClientResolvedConfig extends DevOpsGuruClientResolvedConfigType {}

/**
 * <p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business
 * 			critical operational applications. You specify the AWS resources that you want DevOps Guru to cover,
 * 			then the Amazon CloudWatch metrics and AWS CloudTrail events related to those resources are analyzed. When
 * 			anomalous behavior is detected, DevOps Guru creates an <i>insight</i> that includes
 * 			recommendations, related events, and related metrics that can help you improve your
 * 			operational applications. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p>
 *
 * 		       <p>
 * 			You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate
 * 			an OpsItem in AWS Systems Manager for each insight to help you manage and track your work addressing insights.
 * 		</p>
 *
 * 		       <p>
 * 			To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To
 * 			learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>.
 * 		</p>
 */
export class DevOpsGuruClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DevOpsGuruClientResolvedConfig
> {
  /**
   * The resolved configuration of DevOpsGuruClient class. This is resolved and normalized from the {@link DevOpsGuruClientConfig | constructor configuration interface}.
   */
  readonly config: DevOpsGuruClientResolvedConfig;

  constructor(configuration: DevOpsGuruClientConfig) {
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
