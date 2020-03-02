import {
  BatchCreateVariableCommandInput,
  BatchCreateVariableCommandOutput
} from "./commands/BatchCreateVariableCommand";
import {
  BatchGetVariableCommandInput,
  BatchGetVariableCommandOutput
} from "./commands/BatchGetVariableCommand";
import {
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput
} from "./commands/CreateDetectorVersionCommand";
import {
  CreateModelVersionCommandInput,
  CreateModelVersionCommandOutput
} from "./commands/CreateModelVersionCommand";
import {
  CreateRuleCommandInput,
  CreateRuleCommandOutput
} from "./commands/CreateRuleCommand";
import {
  CreateVariableCommandInput,
  CreateVariableCommandOutput
} from "./commands/CreateVariableCommand";
import {
  DeleteDetectorVersionCommandInput,
  DeleteDetectorVersionCommandOutput
} from "./commands/DeleteDetectorVersionCommand";
import {
  DeleteEventCommandInput,
  DeleteEventCommandOutput
} from "./commands/DeleteEventCommand";
import {
  DescribeDetectorCommandInput,
  DescribeDetectorCommandOutput
} from "./commands/DescribeDetectorCommand";
import {
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput
} from "./commands/DescribeModelVersionsCommand";
import {
  GetDetectorVersionCommandInput,
  GetDetectorVersionCommandOutput
} from "./commands/GetDetectorVersionCommand";
import {
  GetDetectorsCommandInput,
  GetDetectorsCommandOutput
} from "./commands/GetDetectorsCommand";
import {
  GetExternalModelsCommandInput,
  GetExternalModelsCommandOutput
} from "./commands/GetExternalModelsCommand";
import {
  GetModelVersionCommandInput,
  GetModelVersionCommandOutput
} from "./commands/GetModelVersionCommand";
import {
  GetModelsCommandInput,
  GetModelsCommandOutput
} from "./commands/GetModelsCommand";
import {
  GetOutcomesCommandInput,
  GetOutcomesCommandOutput
} from "./commands/GetOutcomesCommand";
import {
  GetPredictionCommandInput,
  GetPredictionCommandOutput
} from "./commands/GetPredictionCommand";
import {
  GetRulesCommandInput,
  GetRulesCommandOutput
} from "./commands/GetRulesCommand";
import {
  GetVariablesCommandInput,
  GetVariablesCommandOutput
} from "./commands/GetVariablesCommand";
import {
  PutDetectorCommandInput,
  PutDetectorCommandOutput
} from "./commands/PutDetectorCommand";
import {
  PutExternalModelCommandInput,
  PutExternalModelCommandOutput
} from "./commands/PutExternalModelCommand";
import {
  PutModelCommandInput,
  PutModelCommandOutput
} from "./commands/PutModelCommand";
import {
  PutOutcomeCommandInput,
  PutOutcomeCommandOutput
} from "./commands/PutOutcomeCommand";
import {
  UpdateDetectorVersionCommandInput,
  UpdateDetectorVersionCommandOutput
} from "./commands/UpdateDetectorVersionCommand";
import {
  UpdateDetectorVersionMetadataCommandInput,
  UpdateDetectorVersionMetadataCommandOutput
} from "./commands/UpdateDetectorVersionMetadataCommand";
import {
  UpdateDetectorVersionStatusCommandInput,
  UpdateDetectorVersionStatusCommandOutput
} from "./commands/UpdateDetectorVersionStatusCommand";
import {
  UpdateModelVersionCommandInput,
  UpdateModelVersionCommandOutput
} from "./commands/UpdateModelVersionCommand";
import {
  UpdateRuleMetadataCommandInput,
  UpdateRuleMetadataCommandOutput
} from "./commands/UpdateRuleMetadataCommand";
import {
  UpdateRuleVersionCommandInput,
  UpdateRuleVersionCommandOutput
} from "./commands/UpdateRuleVersionCommand";
import {
  UpdateVariableCommandInput,
  UpdateVariableCommandOutput
} from "./commands/UpdateVariableCommand";
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
  | BatchCreateVariableCommandInput
  | BatchGetVariableCommandInput
  | CreateDetectorVersionCommandInput
  | CreateModelVersionCommandInput
  | CreateRuleCommandInput
  | CreateVariableCommandInput
  | DeleteDetectorVersionCommandInput
  | DeleteEventCommandInput
  | DescribeDetectorCommandInput
  | DescribeModelVersionsCommandInput
  | GetDetectorVersionCommandInput
  | GetDetectorsCommandInput
  | GetExternalModelsCommandInput
  | GetModelVersionCommandInput
  | GetModelsCommandInput
  | GetOutcomesCommandInput
  | GetPredictionCommandInput
  | GetRulesCommandInput
  | GetVariablesCommandInput
  | PutDetectorCommandInput
  | PutExternalModelCommandInput
  | PutModelCommandInput
  | PutOutcomeCommandInput
  | UpdateDetectorVersionCommandInput
  | UpdateDetectorVersionMetadataCommandInput
  | UpdateDetectorVersionStatusCommandInput
  | UpdateModelVersionCommandInput
  | UpdateRuleMetadataCommandInput
  | UpdateRuleVersionCommandInput
  | UpdateVariableCommandInput;

export type ServiceOutputTypes =
  | BatchCreateVariableCommandOutput
  | BatchGetVariableCommandOutput
  | CreateDetectorVersionCommandOutput
  | CreateModelVersionCommandOutput
  | CreateRuleCommandOutput
  | CreateVariableCommandOutput
  | DeleteDetectorVersionCommandOutput
  | DeleteEventCommandOutput
  | DescribeDetectorCommandOutput
  | DescribeModelVersionsCommandOutput
  | GetDetectorVersionCommandOutput
  | GetDetectorsCommandOutput
  | GetExternalModelsCommandOutput
  | GetModelVersionCommandOutput
  | GetModelsCommandOutput
  | GetOutcomesCommandOutput
  | GetPredictionCommandOutput
  | GetRulesCommandOutput
  | GetVariablesCommandOutput
  | PutDetectorCommandOutput
  | PutExternalModelCommandOutput
  | PutModelCommandOutput
  | PutOutcomeCommandOutput
  | UpdateDetectorVersionCommandOutput
  | UpdateDetectorVersionMetadataCommandOutput
  | UpdateDetectorVersionStatusCommandOutput
  | UpdateModelVersionCommandOutput
  | UpdateRuleMetadataCommandOutput
  | UpdateRuleVersionCommandOutput
  | UpdateVariableCommandOutput;

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
 * <p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need
 *             detailed information about Amazon Fraud Detector API actions, data types, and errors. For
 *             more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p>
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
