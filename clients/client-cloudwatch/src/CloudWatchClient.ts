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
import {
  type CompressionInputConfig,
  type CompressionResolvedConfig,
  resolveCompressionConfig,
} from "@smithy/middleware-compression";
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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultCloudWatchHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput } from "./commands/DeleteAlarmsCommand";
import {
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
} from "./commands/DeleteAnomalyDetectorCommand";
import { DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput } from "./commands/DeleteDashboardsCommand";
import { DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput } from "./commands/DeleteInsightRulesCommand";
import { DeleteMetricStreamCommandInput, DeleteMetricStreamCommandOutput } from "./commands/DeleteMetricStreamCommand";
import {
  DescribeAlarmContributorsCommandInput,
  DescribeAlarmContributorsCommandOutput,
} from "./commands/DescribeAlarmContributorsCommand";
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
import {
  ListManagedInsightRulesCommandInput,
  ListManagedInsightRulesCommandOutput,
} from "./commands/ListManagedInsightRulesCommand";
import { ListMetricsCommandInput, ListMetricsCommandOutput } from "./commands/ListMetricsCommand";
import { ListMetricStreamsCommandInput, ListMetricStreamsCommandOutput } from "./commands/ListMetricStreamsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput } from "./commands/PutAnomalyDetectorCommand";
import { PutCompositeAlarmCommandInput, PutCompositeAlarmCommandOutput } from "./commands/PutCompositeAlarmCommand";
import { PutDashboardCommandInput, PutDashboardCommandOutput } from "./commands/PutDashboardCommand";
import { PutInsightRuleCommandInput, PutInsightRuleCommandOutput } from "./commands/PutInsightRuleCommand";
import {
  PutManagedInsightRulesCommandInput,
  PutManagedInsightRulesCommandOutput,
} from "./commands/PutManagedInsightRulesCommand";
import { PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput } from "./commands/PutMetricAlarmCommand";
import { PutMetricDataCommandInput, PutMetricDataCommandOutput } from "./commands/PutMetricDataCommand";
import { PutMetricStreamCommandInput, PutMetricStreamCommandOutput } from "./commands/PutMetricStreamCommand";
import { SetAlarmStateCommandInput, SetAlarmStateCommandOutput } from "./commands/SetAlarmStateCommand";
import { StartMetricStreamsCommandInput, StartMetricStreamsCommandOutput } from "./commands/StartMetricStreamsCommand";
import { StopMetricStreamsCommandInput, StopMetricStreamsCommandOutput } from "./commands/StopMetricStreamsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | DeleteAlarmsCommandInput
  | DeleteAnomalyDetectorCommandInput
  | DeleteDashboardsCommandInput
  | DeleteInsightRulesCommandInput
  | DeleteMetricStreamCommandInput
  | DescribeAlarmContributorsCommandInput
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
  | ListManagedInsightRulesCommandInput
  | ListMetricStreamsCommandInput
  | ListMetricsCommandInput
  | ListTagsForResourceCommandInput
  | PutAnomalyDetectorCommandInput
  | PutCompositeAlarmCommandInput
  | PutDashboardCommandInput
  | PutInsightRuleCommandInput
  | PutManagedInsightRulesCommandInput
  | PutMetricAlarmCommandInput
  | PutMetricDataCommandInput
  | PutMetricStreamCommandInput
  | SetAlarmStateCommandInput
  | StartMetricStreamsCommandInput
  | StopMetricStreamsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | DeleteAlarmsCommandOutput
  | DeleteAnomalyDetectorCommandOutput
  | DeleteDashboardsCommandOutput
  | DeleteInsightRulesCommandOutput
  | DeleteMetricStreamCommandOutput
  | DescribeAlarmContributorsCommandOutput
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
  | ListManagedInsightRulesCommandOutput
  | ListMetricStreamsCommandOutput
  | ListMetricsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutAnomalyDetectorCommandOutput
  | PutCompositeAlarmCommandOutput
  | PutDashboardCommandOutput
  | PutInsightRuleCommandOutput
  | PutManagedInsightRulesCommandOutput
  | PutMetricAlarmCommandOutput
  | PutMetricDataCommandOutput
  | PutMetricStreamCommandOutput
  | SetAlarmStateCommandOutput
  | StartMetricStreamsCommandOutput
  | StopMetricStreamsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type CloudWatchClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  CompressionInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CloudWatchClient class constructor that set the region, credentials and other options.
 */
export interface CloudWatchClientConfig extends CloudWatchClientConfigType {}

/**
 * @public
 */
export type CloudWatchClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  CompressionResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CloudWatchClient class. This is resolved and normalized from the {@link CloudWatchClientConfig | constructor configuration interface}.
 */
export interface CloudWatchClientResolvedConfig extends CloudWatchClientResolvedConfigType {}

/**
 * <p>Amazon CloudWatch monitors your Amazon Web Services (Amazon Web Services)
 *             resources and the applications you run on Amazon Web Services in real time. You can use
 *                 CloudWatch to collect and track metrics, which are the variables you want to
 *             measure for your resources and applications.</p>
 *          <p>CloudWatch alarms send notifications or automatically change the resources you are
 *             monitoring based on rules that you define. For example, you can monitor the CPU usage
 *             and disk reads and writes of your Amazon EC2 instances. Then, use this data to determine
 *             whether you should launch additional instances to handle increased load. You can also
 *             use this data to stop under-used instances to save money.</p>
 *          <p>In addition to monitoring the built-in metrics that come with Amazon Web Services,
 *             you can monitor your own custom metrics. With CloudWatch, you gain system-wide
 *             visibility into resource utilization, application performance, and operational
 *             health.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<CloudWatchClientConfig>) {
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
    const _config_8 = resolveCompressionConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    this.config = _config_9;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCloudWatchHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CloudWatchClientResolvedConfig) =>
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
