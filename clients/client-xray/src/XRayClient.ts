// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { BatchGetTracesCommandInput, BatchGetTracesCommandOutput } from "./commands/BatchGetTracesCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateSamplingRuleCommandInput, CreateSamplingRuleCommandOutput } from "./commands/CreateSamplingRuleCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteSamplingRuleCommandInput, DeleteSamplingRuleCommandOutput } from "./commands/DeleteSamplingRuleCommand";
import {
  GetEncryptionConfigCommandInput,
  GetEncryptionConfigCommandOutput,
} from "./commands/GetEncryptionConfigCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetGroupsCommandInput, GetGroupsCommandOutput } from "./commands/GetGroupsCommand";
import { GetInsightCommandInput, GetInsightCommandOutput } from "./commands/GetInsightCommand";
import { GetInsightEventsCommandInput, GetInsightEventsCommandOutput } from "./commands/GetInsightEventsCommand";
import {
  GetInsightImpactGraphCommandInput,
  GetInsightImpactGraphCommandOutput,
} from "./commands/GetInsightImpactGraphCommand";
import {
  GetInsightSummariesCommandInput,
  GetInsightSummariesCommandOutput,
} from "./commands/GetInsightSummariesCommand";
import { GetSamplingRulesCommandInput, GetSamplingRulesCommandOutput } from "./commands/GetSamplingRulesCommand";
import {
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput,
} from "./commands/GetSamplingStatisticSummariesCommand";
import { GetSamplingTargetsCommandInput, GetSamplingTargetsCommandOutput } from "./commands/GetSamplingTargetsCommand";
import { GetServiceGraphCommandInput, GetServiceGraphCommandOutput } from "./commands/GetServiceGraphCommand";
import {
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
} from "./commands/GetTimeSeriesServiceStatisticsCommand";
import { GetTraceGraphCommandInput, GetTraceGraphCommandOutput } from "./commands/GetTraceGraphCommand";
import { GetTraceSummariesCommandInput, GetTraceSummariesCommandOutput } from "./commands/GetTraceSummariesCommand";
import {
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "./commands/ListResourcePoliciesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutEncryptionConfigCommandInput,
  PutEncryptionConfigCommandOutput,
} from "./commands/PutEncryptionConfigCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  PutTelemetryRecordsCommandInput,
  PutTelemetryRecordsCommandOutput,
} from "./commands/PutTelemetryRecordsCommand";
import { PutTraceSegmentsCommandInput, PutTraceSegmentsCommandOutput } from "./commands/PutTraceSegmentsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateSamplingRuleCommandInput, UpdateSamplingRuleCommandOutput } from "./commands/UpdateSamplingRuleCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchGetTracesCommandInput
  | CreateGroupCommandInput
  | CreateSamplingRuleCommandInput
  | DeleteGroupCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSamplingRuleCommandInput
  | GetEncryptionConfigCommandInput
  | GetGroupCommandInput
  | GetGroupsCommandInput
  | GetInsightCommandInput
  | GetInsightEventsCommandInput
  | GetInsightImpactGraphCommandInput
  | GetInsightSummariesCommandInput
  | GetSamplingRulesCommandInput
  | GetSamplingStatisticSummariesCommandInput
  | GetSamplingTargetsCommandInput
  | GetServiceGraphCommandInput
  | GetTimeSeriesServiceStatisticsCommandInput
  | GetTraceGraphCommandInput
  | GetTraceSummariesCommandInput
  | ListResourcePoliciesCommandInput
  | ListTagsForResourceCommandInput
  | PutEncryptionConfigCommandInput
  | PutResourcePolicyCommandInput
  | PutTelemetryRecordsCommandInput
  | PutTraceSegmentsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateGroupCommandInput
  | UpdateSamplingRuleCommandInput;

export type ServiceOutputTypes =
  | BatchGetTracesCommandOutput
  | CreateGroupCommandOutput
  | CreateSamplingRuleCommandOutput
  | DeleteGroupCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSamplingRuleCommandOutput
  | GetEncryptionConfigCommandOutput
  | GetGroupCommandOutput
  | GetGroupsCommandOutput
  | GetInsightCommandOutput
  | GetInsightEventsCommandOutput
  | GetInsightImpactGraphCommandOutput
  | GetInsightSummariesCommandOutput
  | GetSamplingRulesCommandOutput
  | GetSamplingStatisticSummariesCommandOutput
  | GetSamplingTargetsCommandOutput
  | GetServiceGraphCommandOutput
  | GetTimeSeriesServiceStatisticsCommandOutput
  | GetTraceGraphCommandOutput
  | GetTraceSummariesCommandOutput
  | ListResourcePoliciesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutEncryptionConfigCommandOutput
  | PutResourcePolicyCommandOutput
  | PutTelemetryRecordsCommandOutput
  | PutTraceSegmentsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateGroupCommandOutput
  | UpdateSamplingRuleCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
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
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type XRayClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of XRayClient class constructor that set the region, credentials and other options.
 */
export interface XRayClientConfig extends XRayClientConfigType {}

type XRayClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of XRayClient class. This is resolved and normalized from the {@link XRayClientConfig | constructor configuration interface}.
 */
export interface XRayClientResolvedConfig extends XRayClientResolvedConfigType {}

/**
 * <p>Amazon Web Services X-Ray provides APIs for managing debug traces and retrieving service maps
 *       and other data created by processing those traces.</p>
 */
export class XRayClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  XRayClientResolvedConfig
> {
  /**
   * The resolved configuration of XRayClient class. This is resolved and normalized from the {@link XRayClientConfig | constructor configuration interface}.
   */
  readonly config: XRayClientResolvedConfig;

  constructor(configuration: XRayClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
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
