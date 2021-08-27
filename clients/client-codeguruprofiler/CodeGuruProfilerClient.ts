import {
  AddNotificationChannelsCommandInput,
  AddNotificationChannelsCommandOutput,
} from "./commands/AddNotificationChannelsCommand";
import {
  BatchGetFrameMetricDataCommandInput,
  BatchGetFrameMetricDataCommandOutput,
} from "./commands/BatchGetFrameMetricDataCommand";
import { ConfigureAgentCommandInput, ConfigureAgentCommandOutput } from "./commands/ConfigureAgentCommand";
import {
  CreateProfilingGroupCommandInput,
  CreateProfilingGroupCommandOutput,
} from "./commands/CreateProfilingGroupCommand";
import {
  DeleteProfilingGroupCommandInput,
  DeleteProfilingGroupCommandOutput,
} from "./commands/DeleteProfilingGroupCommand";
import {
  DescribeProfilingGroupCommandInput,
  DescribeProfilingGroupCommandOutput,
} from "./commands/DescribeProfilingGroupCommand";
import {
  GetFindingsReportAccountSummaryCommandInput,
  GetFindingsReportAccountSummaryCommandOutput,
} from "./commands/GetFindingsReportAccountSummaryCommand";
import {
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "./commands/GetNotificationConfigurationCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "./commands/GetRecommendationsCommand";
import {
  ListFindingsReportsCommandInput,
  ListFindingsReportsCommandOutput,
} from "./commands/ListFindingsReportsCommand";
import { ListProfileTimesCommandInput, ListProfileTimesCommandOutput } from "./commands/ListProfileTimesCommand";
import {
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput,
} from "./commands/ListProfilingGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PostAgentProfileCommandInput, PostAgentProfileCommandOutput } from "./commands/PostAgentProfileCommand";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "./commands/PutPermissionCommand";
import {
  RemoveNotificationChannelCommandInput,
  RemoveNotificationChannelCommandOutput,
} from "./commands/RemoveNotificationChannelCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand";
import { SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput } from "./commands/SubmitFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput,
} from "./commands/UpdateProfilingGroupCommand";
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
  | AddNotificationChannelsCommandInput
  | BatchGetFrameMetricDataCommandInput
  | ConfigureAgentCommandInput
  | CreateProfilingGroupCommandInput
  | DeleteProfilingGroupCommandInput
  | DescribeProfilingGroupCommandInput
  | GetFindingsReportAccountSummaryCommandInput
  | GetNotificationConfigurationCommandInput
  | GetPolicyCommandInput
  | GetProfileCommandInput
  | GetRecommendationsCommandInput
  | ListFindingsReportsCommandInput
  | ListProfileTimesCommandInput
  | ListProfilingGroupsCommandInput
  | ListTagsForResourceCommandInput
  | PostAgentProfileCommandInput
  | PutPermissionCommandInput
  | RemoveNotificationChannelCommandInput
  | RemovePermissionCommandInput
  | SubmitFeedbackCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateProfilingGroupCommandInput;

export type ServiceOutputTypes =
  | AddNotificationChannelsCommandOutput
  | BatchGetFrameMetricDataCommandOutput
  | ConfigureAgentCommandOutput
  | CreateProfilingGroupCommandOutput
  | DeleteProfilingGroupCommandOutput
  | DescribeProfilingGroupCommandOutput
  | GetFindingsReportAccountSummaryCommandOutput
  | GetNotificationConfigurationCommandOutput
  | GetPolicyCommandOutput
  | GetProfileCommandOutput
  | GetRecommendationsCommandOutput
  | ListFindingsReportsCommandOutput
  | ListProfileTimesCommandOutput
  | ListProfilingGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | PostAgentProfileCommandOutput
  | PutPermissionCommandOutput
  | RemoveNotificationChannelCommandOutput
  | RemovePermissionCommandOutput
  | SubmitFeedbackCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateProfilingGroupCommandOutput;

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

type CodeGuruProfilerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CodeGuruProfilerClient class constructor that set the region, credentials and other options.
 */
export interface CodeGuruProfilerClientConfig extends CodeGuruProfilerClientConfigType {}

type CodeGuruProfilerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CodeGuruProfilerClient class. This is resolved and normalized from the {@link CodeGuruProfilerClientConfig | constructor configuration interface}.
 */
export interface CodeGuruProfilerClientResolvedConfig extends CodeGuruProfilerClientResolvedConfigType {}

/**
 * <p>
 *           This section provides documentation for the Amazon CodeGuru Profiler API operations.
 *       </p>
 *          <p>
 *          Amazon CodeGuru Profiler collects runtime performance data from your live applications, and provides
 *          recommendations that can help you fine-tune your application performance. Using machine learning
 *          algorithms, CodeGuru Profiler can help you find your most expensive lines of code and suggest ways you can
 *          improve efficiency and remove CPU bottlenecks.
 *       </p>
 *          <p>
 *          Amazon CodeGuru Profiler provides different visualizations of profiling data to help you identify what code is
 *          running on the CPU, see how much time is consumed, and suggest ways to reduce CPU utilization.
 *       </p>
 *          <note>
 *             <p>Amazon CodeGuru Profiler currently supports applications written in all Java virtual machine (JVM)
 *             languages and Python. While CodeGuru Profiler supports both visualizations and recommendations for applications
 *             written in Java, it can also generate visualizations and a subset of recommendations for
 *             applications written in other JVM languages and Python.</p>
 *          </note>
 *          <p>
 *          For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/what-is-codeguru-profiler.html">What is Amazon CodeGuru Profiler</a> in
 *          the <i>Amazon CodeGuru Profiler User Guide</i>.
 *       </p>
 */
export class CodeGuruProfilerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeGuruProfilerClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeGuruProfilerClient class. This is resolved and normalized from the {@link CodeGuruProfilerClientConfig | constructor configuration interface}.
   */
  readonly config: CodeGuruProfilerClientResolvedConfig;

  constructor(configuration: CodeGuruProfilerClientConfig) {
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
