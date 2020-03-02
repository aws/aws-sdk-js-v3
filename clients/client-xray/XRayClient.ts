import {
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput
} from "./commands/BatchGetTracesCommand";
import {
  CreateGroupCommandInput,
  CreateGroupCommandOutput
} from "./commands/CreateGroupCommand";
import {
  CreateSamplingRuleCommandInput,
  CreateSamplingRuleCommandOutput
} from "./commands/CreateSamplingRuleCommand";
import {
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput
} from "./commands/DeleteGroupCommand";
import {
  DeleteSamplingRuleCommandInput,
  DeleteSamplingRuleCommandOutput
} from "./commands/DeleteSamplingRuleCommand";
import {
  GetEncryptionConfigCommandInput,
  GetEncryptionConfigCommandOutput
} from "./commands/GetEncryptionConfigCommand";
import {
  GetGroupCommandInput,
  GetGroupCommandOutput
} from "./commands/GetGroupCommand";
import {
  GetGroupsCommandInput,
  GetGroupsCommandOutput
} from "./commands/GetGroupsCommand";
import {
  GetSamplingRulesCommandInput,
  GetSamplingRulesCommandOutput
} from "./commands/GetSamplingRulesCommand";
import {
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput
} from "./commands/GetSamplingStatisticSummariesCommand";
import {
  GetSamplingTargetsCommandInput,
  GetSamplingTargetsCommandOutput
} from "./commands/GetSamplingTargetsCommand";
import {
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput
} from "./commands/GetServiceGraphCommand";
import {
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput
} from "./commands/GetTimeSeriesServiceStatisticsCommand";
import {
  GetTraceGraphCommandInput,
  GetTraceGraphCommandOutput
} from "./commands/GetTraceGraphCommand";
import {
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput
} from "./commands/GetTraceSummariesCommand";
import {
  PutEncryptionConfigCommandInput,
  PutEncryptionConfigCommandOutput
} from "./commands/PutEncryptionConfigCommand";
import {
  PutTelemetryRecordsCommandInput,
  PutTelemetryRecordsCommandOutput
} from "./commands/PutTelemetryRecordsCommand";
import {
  PutTraceSegmentsCommandInput,
  PutTraceSegmentsCommandOutput
} from "./commands/PutTraceSegmentsCommand";
import {
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput
} from "./commands/UpdateGroupCommand";
import {
  UpdateSamplingRuleCommandInput,
  UpdateSamplingRuleCommandOutput
} from "./commands/UpdateSamplingRuleCommand";
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
  | BatchGetTracesCommandInput
  | CreateGroupCommandInput
  | CreateSamplingRuleCommandInput
  | DeleteGroupCommandInput
  | DeleteSamplingRuleCommandInput
  | GetEncryptionConfigCommandInput
  | GetGroupCommandInput
  | GetGroupsCommandInput
  | GetSamplingRulesCommandInput
  | GetSamplingStatisticSummariesCommandInput
  | GetSamplingTargetsCommandInput
  | GetServiceGraphCommandInput
  | GetTimeSeriesServiceStatisticsCommandInput
  | GetTraceGraphCommandInput
  | GetTraceSummariesCommandInput
  | PutEncryptionConfigCommandInput
  | PutTelemetryRecordsCommandInput
  | PutTraceSegmentsCommandInput
  | UpdateGroupCommandInput
  | UpdateSamplingRuleCommandInput;

export type ServiceOutputTypes =
  | BatchGetTracesCommandOutput
  | CreateGroupCommandOutput
  | CreateSamplingRuleCommandOutput
  | DeleteGroupCommandOutput
  | DeleteSamplingRuleCommandOutput
  | GetEncryptionConfigCommandOutput
  | GetGroupCommandOutput
  | GetGroupsCommandOutput
  | GetSamplingRulesCommandOutput
  | GetSamplingStatisticSummariesCommandOutput
  | GetSamplingTargetsCommandOutput
  | GetServiceGraphCommandOutput
  | GetTimeSeriesServiceStatisticsCommandOutput
  | GetTraceGraphCommandOutput
  | GetTraceSummariesCommandOutput
  | PutEncryptionConfigCommandOutput
  | PutTelemetryRecordsCommandOutput
  | PutTraceSegmentsCommandOutput
  | UpdateGroupCommandOutput
  | UpdateSamplingRuleCommandOutput;

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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

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

export type XRayClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type XRayClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>AWS X-Ray provides APIs for managing debug traces and retrieving service maps
 *       and other data created by processing those traces.</p>
 */
export class XRayClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  XRayClientResolvedConfig
> {
  readonly config: XRayClientResolvedConfig;

  constructor(configuration: XRayClientConfig) {
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
