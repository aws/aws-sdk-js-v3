import {
  BatchCreateVariableRequest,
  BatchCreateVariableResult,
  BatchGetVariableRequest,
  BatchGetVariableResult,
  CreateDetectorVersionRequest,
  CreateDetectorVersionResult,
  CreateModelVersionRequest,
  CreateModelVersionResult,
  CreateRuleRequest,
  CreateRuleResult,
  CreateVariableRequest,
  CreateVariableResult,
  DeleteDetectorVersionRequest,
  DeleteDetectorVersionResult,
  DeleteEventRequest,
  DeleteEventResult,
  DescribeDetectorRequest,
  DescribeDetectorResult,
  DescribeModelVersionsRequest,
  DescribeModelVersionsResult,
  GetDetectorVersionRequest,
  GetDetectorVersionResult,
  GetDetectorsRequest,
  GetDetectorsResult,
  GetExternalModelsRequest,
  GetExternalModelsResult,
  GetModelVersionRequest,
  GetModelVersionResult,
  GetModelsRequest,
  GetModelsResult,
  GetOutcomesRequest,
  GetOutcomesResult,
  GetPredictionRequest,
  GetPredictionResult,
  GetRulesRequest,
  GetRulesResult,
  GetVariablesRequest,
  GetVariablesResult,
  PutDetectorRequest,
  PutDetectorResult,
  PutExternalModelRequest,
  PutExternalModelResult,
  PutModelRequest,
  PutModelResult,
  PutOutcomeRequest,
  PutOutcomeResult,
  UpdateDetectorVersionMetadataRequest,
  UpdateDetectorVersionMetadataResult,
  UpdateDetectorVersionRequest,
  UpdateDetectorVersionResult,
  UpdateDetectorVersionStatusRequest,
  UpdateDetectorVersionStatusResult,
  UpdateModelVersionRequest,
  UpdateModelVersionResult,
  UpdateRuleMetadataRequest,
  UpdateRuleMetadataResult,
  UpdateRuleVersionRequest,
  UpdateRuleVersionResult,
  UpdateVariableRequest,
  UpdateVariableResult
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
  | BatchCreateVariableRequest
  | BatchGetVariableRequest
  | CreateDetectorVersionRequest
  | CreateModelVersionRequest
  | CreateRuleRequest
  | CreateVariableRequest
  | DeleteDetectorVersionRequest
  | DeleteEventRequest
  | DescribeDetectorRequest
  | DescribeModelVersionsRequest
  | GetDetectorVersionRequest
  | GetDetectorsRequest
  | GetExternalModelsRequest
  | GetModelVersionRequest
  | GetModelsRequest
  | GetOutcomesRequest
  | GetPredictionRequest
  | GetRulesRequest
  | GetVariablesRequest
  | PutDetectorRequest
  | PutExternalModelRequest
  | PutModelRequest
  | PutOutcomeRequest
  | UpdateDetectorVersionMetadataRequest
  | UpdateDetectorVersionRequest
  | UpdateDetectorVersionStatusRequest
  | UpdateModelVersionRequest
  | UpdateRuleMetadataRequest
  | UpdateRuleVersionRequest
  | UpdateVariableRequest;

export type ServiceOutputTypes =
  | BatchCreateVariableResult
  | BatchGetVariableResult
  | CreateDetectorVersionResult
  | CreateModelVersionResult
  | CreateRuleResult
  | CreateVariableResult
  | DeleteDetectorVersionResult
  | DeleteEventResult
  | DescribeDetectorResult
  | DescribeModelVersionsResult
  | GetDetectorVersionResult
  | GetDetectorsResult
  | GetExternalModelsResult
  | GetModelVersionResult
  | GetModelsResult
  | GetOutcomesResult
  | GetPredictionResult
  | GetRulesResult
  | GetVariablesResult
  | PutDetectorResult
  | PutExternalModelResult
  | PutModelResult
  | PutOutcomeResult
  | UpdateDetectorVersionMetadataResult
  | UpdateDetectorVersionResult
  | UpdateDetectorVersionStatusResult
  | UpdateModelVersionResult
  | UpdateRuleMetadataResult
  | UpdateRuleVersionResult
  | UpdateVariableResult;

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

export type FraudDetectorClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type FraudDetectorClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *         <p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need
 *             detailed information about Amazon Fraud Detector API actions, data types, and errors. For
 *             more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p>
 *
 */
export class FraudDetectorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  FraudDetectorClientResolvedConfig
> {
  readonly config: FraudDetectorClientResolvedConfig;

  constructor(configuration: FraudDetectorClientConfig) {
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
