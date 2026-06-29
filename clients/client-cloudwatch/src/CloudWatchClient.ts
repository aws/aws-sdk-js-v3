// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import {
  type CompressionInputConfig,
  type CompressionResolvedConfig,
  resolveCompressionConfig,
} from "@smithy/middleware-compression";
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
  defaultCloudWatchHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateDatasetKmsKeyCommandInput,
  AssociateDatasetKmsKeyCommandOutput,
} from "./commands/AssociateDatasetKmsKeyCommand";
import type {
  DeleteAlarmMuteRuleCommandInput,
  DeleteAlarmMuteRuleCommandOutput,
} from "./commands/DeleteAlarmMuteRuleCommand";
import type { DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput } from "./commands/DeleteAlarmsCommand";
import type {
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
} from "./commands/DeleteAnomalyDetectorCommand";
import type { DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput } from "./commands/DeleteDashboardsCommand";
import type {
  DeleteInsightRulesCommandInput,
  DeleteInsightRulesCommandOutput,
} from "./commands/DeleteInsightRulesCommand";
import type {
  DeleteMetricStreamCommandInput,
  DeleteMetricStreamCommandOutput,
} from "./commands/DeleteMetricStreamCommand";
import type {
  DescribeAlarmContributorsCommandInput,
  DescribeAlarmContributorsCommandOutput,
} from "./commands/DescribeAlarmContributorsCommand";
import type {
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput,
} from "./commands/DescribeAlarmHistoryCommand";
import type { DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput } from "./commands/DescribeAlarmsCommand";
import type {
  DescribeAlarmsForMetricCommandInput,
  DescribeAlarmsForMetricCommandOutput,
} from "./commands/DescribeAlarmsForMetricCommand";
import type {
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput,
} from "./commands/DescribeAnomalyDetectorsCommand";
import type {
  DescribeInsightRulesCommandInput,
  DescribeInsightRulesCommandOutput,
} from "./commands/DescribeInsightRulesCommand";
import type {
  DisableAlarmActionsCommandInput,
  DisableAlarmActionsCommandOutput,
} from "./commands/DisableAlarmActionsCommand";
import type {
  DisableInsightRulesCommandInput,
  DisableInsightRulesCommandOutput,
} from "./commands/DisableInsightRulesCommand";
import type {
  DisassociateDatasetKmsKeyCommandInput,
  DisassociateDatasetKmsKeyCommandOutput,
} from "./commands/DisassociateDatasetKmsKeyCommand";
import type {
  EnableAlarmActionsCommandInput,
  EnableAlarmActionsCommandOutput,
} from "./commands/EnableAlarmActionsCommand";
import type {
  EnableInsightRulesCommandInput,
  EnableInsightRulesCommandOutput,
} from "./commands/EnableInsightRulesCommand";
import type { GetAlarmMuteRuleCommandInput, GetAlarmMuteRuleCommandOutput } from "./commands/GetAlarmMuteRuleCommand";
import type { GetDashboardCommandInput, GetDashboardCommandOutput } from "./commands/GetDashboardCommand";
import type { GetDatasetCommandInput, GetDatasetCommandOutput } from "./commands/GetDatasetCommand";
import type {
  GetInsightRuleReportCommandInput,
  GetInsightRuleReportCommandOutput,
} from "./commands/GetInsightRuleReportCommand";
import type { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "./commands/GetMetricDataCommand";
import type {
  GetMetricStatisticsCommandInput,
  GetMetricStatisticsCommandOutput,
} from "./commands/GetMetricStatisticsCommand";
import type { GetMetricStreamCommandInput, GetMetricStreamCommandOutput } from "./commands/GetMetricStreamCommand";
import type {
  GetMetricWidgetImageCommandInput,
  GetMetricWidgetImageCommandOutput,
} from "./commands/GetMetricWidgetImageCommand";
import type {
  GetOTelEnrichmentCommandInput,
  GetOTelEnrichmentCommandOutput,
} from "./commands/GetOTelEnrichmentCommand";
import type {
  ListAlarmMuteRulesCommandInput,
  ListAlarmMuteRulesCommandOutput,
} from "./commands/ListAlarmMuteRulesCommand";
import type { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import type {
  ListManagedInsightRulesCommandInput,
  ListManagedInsightRulesCommandOutput,
} from "./commands/ListManagedInsightRulesCommand";
import type { ListMetricsCommandInput, ListMetricsCommandOutput } from "./commands/ListMetricsCommand";
import type {
  ListMetricStreamsCommandInput,
  ListMetricStreamsCommandOutput,
} from "./commands/ListMetricStreamsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { PutAlarmMuteRuleCommandInput, PutAlarmMuteRuleCommandOutput } from "./commands/PutAlarmMuteRuleCommand";
import type {
  PutAnomalyDetectorCommandInput,
  PutAnomalyDetectorCommandOutput,
} from "./commands/PutAnomalyDetectorCommand";
import type {
  PutCompositeAlarmCommandInput,
  PutCompositeAlarmCommandOutput,
} from "./commands/PutCompositeAlarmCommand";
import type { PutDashboardCommandInput, PutDashboardCommandOutput } from "./commands/PutDashboardCommand";
import type { PutInsightRuleCommandInput, PutInsightRuleCommandOutput } from "./commands/PutInsightRuleCommand";
import type { PutLogAlarmCommandInput, PutLogAlarmCommandOutput } from "./commands/PutLogAlarmCommand";
import type {
  PutManagedInsightRulesCommandInput,
  PutManagedInsightRulesCommandOutput,
} from "./commands/PutManagedInsightRulesCommand";
import type { PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput } from "./commands/PutMetricAlarmCommand";
import type { PutMetricDataCommandInput, PutMetricDataCommandOutput } from "./commands/PutMetricDataCommand";
import type { PutMetricStreamCommandInput, PutMetricStreamCommandOutput } from "./commands/PutMetricStreamCommand";
import type { SetAlarmStateCommandInput, SetAlarmStateCommandOutput } from "./commands/SetAlarmStateCommand";
import type {
  StartMetricStreamsCommandInput,
  StartMetricStreamsCommandOutput,
} from "./commands/StartMetricStreamsCommand";
import type {
  StartOTelEnrichmentCommandInput,
  StartOTelEnrichmentCommandOutput,
} from "./commands/StartOTelEnrichmentCommand";
import type {
  StopMetricStreamsCommandInput,
  StopMetricStreamsCommandOutput,
} from "./commands/StopMetricStreamsCommand";
import type {
  StopOTelEnrichmentCommandInput,
  StopOTelEnrichmentCommandOutput,
} from "./commands/StopOTelEnrichmentCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
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
  | AssociateDatasetKmsKeyCommandInput
  | DeleteAlarmMuteRuleCommandInput
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
  | DisassociateDatasetKmsKeyCommandInput
  | EnableAlarmActionsCommandInput
  | EnableInsightRulesCommandInput
  | GetAlarmMuteRuleCommandInput
  | GetDashboardCommandInput
  | GetDatasetCommandInput
  | GetInsightRuleReportCommandInput
  | GetMetricDataCommandInput
  | GetMetricStatisticsCommandInput
  | GetMetricStreamCommandInput
  | GetMetricWidgetImageCommandInput
  | GetOTelEnrichmentCommandInput
  | ListAlarmMuteRulesCommandInput
  | ListDashboardsCommandInput
  | ListManagedInsightRulesCommandInput
  | ListMetricStreamsCommandInput
  | ListMetricsCommandInput
  | ListTagsForResourceCommandInput
  | PutAlarmMuteRuleCommandInput
  | PutAnomalyDetectorCommandInput
  | PutCompositeAlarmCommandInput
  | PutDashboardCommandInput
  | PutInsightRuleCommandInput
  | PutLogAlarmCommandInput
  | PutManagedInsightRulesCommandInput
  | PutMetricAlarmCommandInput
  | PutMetricDataCommandInput
  | PutMetricStreamCommandInput
  | SetAlarmStateCommandInput
  | StartMetricStreamsCommandInput
  | StartOTelEnrichmentCommandInput
  | StopMetricStreamsCommandInput
  | StopOTelEnrichmentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateDatasetKmsKeyCommandOutput
  | DeleteAlarmMuteRuleCommandOutput
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
  | DisassociateDatasetKmsKeyCommandOutput
  | EnableAlarmActionsCommandOutput
  | EnableInsightRulesCommandOutput
  | GetAlarmMuteRuleCommandOutput
  | GetDashboardCommandOutput
  | GetDatasetCommandOutput
  | GetInsightRuleReportCommandOutput
  | GetMetricDataCommandOutput
  | GetMetricStatisticsCommandOutput
  | GetMetricStreamCommandOutput
  | GetMetricWidgetImageCommandOutput
  | GetOTelEnrichmentCommandOutput
  | ListAlarmMuteRulesCommandOutput
  | ListDashboardsCommandOutput
  | ListManagedInsightRulesCommandOutput
  | ListMetricStreamsCommandOutput
  | ListMetricsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutAlarmMuteRuleCommandOutput
  | PutAnomalyDetectorCommandOutput
  | PutCompositeAlarmCommandOutput
  | PutDashboardCommandOutput
  | PutInsightRuleCommandOutput
  | PutLogAlarmCommandOutput
  | PutManagedInsightRulesCommandOutput
  | PutMetricAlarmCommandOutput
  | PutMetricDataCommandOutput
  | PutMetricStreamCommandOutput
  | SetAlarmStateCommandOutput
  | StartMetricStreamsCommandOutput
  | StartOTelEnrichmentCommandOutput
  | StopMetricStreamsCommandOutput
  | StopOTelEnrichmentCommandOutput
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
 * <p>Amazon CloudWatch enables you to publish, monitor, and manage various metrics, as well
 *             as configure alarm actions based on data from metrics. This guide provides detailed
 *             information about CloudWatch actions, data types, parameters, and errors. For
 *             more information about CloudWatch features, see <a href="https://aws.amazon.com/cloudwatch">Amazon CloudWatch</a> and the
 *                 <i>Amazon CloudWatch User Guide</i>.</p>
 *          <p>For information about the metrics that other Amazon Web Services products send to
 *                 CloudWatch, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon CloudWatch
 *                 Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User
 *                 Guide</i>.</p>
 *          <p>Use the following links to get started using the CloudWatch Query API:</p>
 *          <p>: An alphabetical list of all CloudWatch
 *             actions.</p>
 *          <p>: An alphabetical list of all CloudWatch data
 *             types.</p>
 *          <p>
 *             <a>CommonParameters</a>: Parameters that all Query actions can use.</p>
 *          <p>
 *             <a>CommonErrors</a>: Client and server errors that all actions can
 *             return.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region">Regions and Endpoints</a>: Supported regions and endpoints for all Amazon Web
 *             Services products.</p>
 *          <p>Alternatively, you can use one of the <a href="https://aws.amazon.com/tools/#sdk">Amazon Web Services SDKs</a> to access CloudWatch using an API tailored
 *             to your programming language or platform.</p>
 *          <p>Developers in the Amazon Web Services developer community also provide their own
 *             libraries, which you can find at the following Amazon Web Services developer
 *             centers:</p>
 *          <p>
 *             <a href="http://aws.amazon.com/java/">Java Developer Center</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/javascript/">JavaScript Developer
 *             Center</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/mobile/">Amazon Web Services Mobile
 *             Services</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/php/">PHP Developer Center</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/python/">Python Developer Center</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/ruby/">Ruby Developer Center</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/net/">Windows and .NET Developer
 *             Center</a>
 *          </p>
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
