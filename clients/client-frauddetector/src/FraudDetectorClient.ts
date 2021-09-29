import {
  BatchCreateVariableCommandInput,
  BatchCreateVariableCommandOutput,
} from "./commands/BatchCreateVariableCommand";
import { BatchGetVariableCommandInput, BatchGetVariableCommandOutput } from "./commands/BatchGetVariableCommand";
import {
  CancelBatchPredictionJobCommandInput,
  CancelBatchPredictionJobCommandOutput,
} from "./commands/CancelBatchPredictionJobCommand";
import {
  CreateBatchPredictionJobCommandInput,
  CreateBatchPredictionJobCommandOutput,
} from "./commands/CreateBatchPredictionJobCommand";
import {
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput,
} from "./commands/CreateDetectorVersionCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateModelVersionCommandInput, CreateModelVersionCommandOutput } from "./commands/CreateModelVersionCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import { CreateVariableCommandInput, CreateVariableCommandOutput } from "./commands/CreateVariableCommand";
import {
  DeleteBatchPredictionJobCommandInput,
  DeleteBatchPredictionJobCommandOutput,
} from "./commands/DeleteBatchPredictionJobCommand";
import { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "./commands/DeleteDetectorCommand";
import {
  DeleteDetectorVersionCommandInput,
  DeleteDetectorVersionCommandOutput,
} from "./commands/DeleteDetectorVersionCommand";
import { DeleteEntityTypeCommandInput, DeleteEntityTypeCommandOutput } from "./commands/DeleteEntityTypeCommand";
import { DeleteEventCommandInput, DeleteEventCommandOutput } from "./commands/DeleteEventCommand";
import { DeleteEventTypeCommandInput, DeleteEventTypeCommandOutput } from "./commands/DeleteEventTypeCommand";
import {
  DeleteExternalModelCommandInput,
  DeleteExternalModelCommandOutput,
} from "./commands/DeleteExternalModelCommand";
import { DeleteLabelCommandInput, DeleteLabelCommandOutput } from "./commands/DeleteLabelCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DeleteModelVersionCommandInput, DeleteModelVersionCommandOutput } from "./commands/DeleteModelVersionCommand";
import { DeleteOutcomeCommandInput, DeleteOutcomeCommandOutput } from "./commands/DeleteOutcomeCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import { DeleteVariableCommandInput, DeleteVariableCommandOutput } from "./commands/DeleteVariableCommand";
import { DescribeDetectorCommandInput, DescribeDetectorCommandOutput } from "./commands/DescribeDetectorCommand";
import {
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
} from "./commands/DescribeModelVersionsCommand";
import {
  GetBatchPredictionJobsCommandInput,
  GetBatchPredictionJobsCommandOutput,
} from "./commands/GetBatchPredictionJobsCommand";
import { GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput } from "./commands/GetDetectorVersionCommand";
import { GetDetectorsCommandInput, GetDetectorsCommandOutput } from "./commands/GetDetectorsCommand";
import { GetEntityTypesCommandInput, GetEntityTypesCommandOutput } from "./commands/GetEntityTypesCommand";
import { GetEventPredictionCommandInput, GetEventPredictionCommandOutput } from "./commands/GetEventPredictionCommand";
import { GetEventTypesCommandInput, GetEventTypesCommandOutput } from "./commands/GetEventTypesCommand";
import { GetExternalModelsCommandInput, GetExternalModelsCommandOutput } from "./commands/GetExternalModelsCommand";
import {
  GetKMSEncryptionKeyCommandInput,
  GetKMSEncryptionKeyCommandOutput,
} from "./commands/GetKMSEncryptionKeyCommand";
import { GetLabelsCommandInput, GetLabelsCommandOutput } from "./commands/GetLabelsCommand";
import { GetModelVersionCommandInput, GetModelVersionCommandOutput } from "./commands/GetModelVersionCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import { GetOutcomesCommandInput, GetOutcomesCommandOutput } from "./commands/GetOutcomesCommand";
import { GetRulesCommandInput, GetRulesCommandOutput } from "./commands/GetRulesCommand";
import { GetVariablesCommandInput, GetVariablesCommandOutput } from "./commands/GetVariablesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutDetectorCommandInput, PutDetectorCommandOutput } from "./commands/PutDetectorCommand";
import { PutEntityTypeCommandInput, PutEntityTypeCommandOutput } from "./commands/PutEntityTypeCommand";
import { PutEventTypeCommandInput, PutEventTypeCommandOutput } from "./commands/PutEventTypeCommand";
import { PutExternalModelCommandInput, PutExternalModelCommandOutput } from "./commands/PutExternalModelCommand";
import {
  PutKMSEncryptionKeyCommandInput,
  PutKMSEncryptionKeyCommandOutput,
} from "./commands/PutKMSEncryptionKeyCommand";
import { PutLabelCommandInput, PutLabelCommandOutput } from "./commands/PutLabelCommand";
import { PutOutcomeCommandInput, PutOutcomeCommandOutput } from "./commands/PutOutcomeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateDetectorVersionCommandInput,
  UpdateDetectorVersionCommandOutput,
} from "./commands/UpdateDetectorVersionCommand";
import {
  UpdateDetectorVersionMetadataCommandInput,
  UpdateDetectorVersionMetadataCommandOutput,
} from "./commands/UpdateDetectorVersionMetadataCommand";
import {
  UpdateDetectorVersionStatusCommandInput,
  UpdateDetectorVersionStatusCommandOutput,
} from "./commands/UpdateDetectorVersionStatusCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import { UpdateModelVersionCommandInput, UpdateModelVersionCommandOutput } from "./commands/UpdateModelVersionCommand";
import {
  UpdateModelVersionStatusCommandInput,
  UpdateModelVersionStatusCommandOutput,
} from "./commands/UpdateModelVersionStatusCommand";
import { UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput } from "./commands/UpdateRuleMetadataCommand";
import { UpdateRuleVersionCommandInput, UpdateRuleVersionCommandOutput } from "./commands/UpdateRuleVersionCommand";
import { UpdateVariableCommandInput, UpdateVariableCommandOutput } from "./commands/UpdateVariableCommand";
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
  | BatchCreateVariableCommandInput
  | BatchGetVariableCommandInput
  | CancelBatchPredictionJobCommandInput
  | CreateBatchPredictionJobCommandInput
  | CreateDetectorVersionCommandInput
  | CreateModelCommandInput
  | CreateModelVersionCommandInput
  | CreateRuleCommandInput
  | CreateVariableCommandInput
  | DeleteBatchPredictionJobCommandInput
  | DeleteDetectorCommandInput
  | DeleteDetectorVersionCommandInput
  | DeleteEntityTypeCommandInput
  | DeleteEventCommandInput
  | DeleteEventTypeCommandInput
  | DeleteExternalModelCommandInput
  | DeleteLabelCommandInput
  | DeleteModelCommandInput
  | DeleteModelVersionCommandInput
  | DeleteOutcomeCommandInput
  | DeleteRuleCommandInput
  | DeleteVariableCommandInput
  | DescribeDetectorCommandInput
  | DescribeModelVersionsCommandInput
  | GetBatchPredictionJobsCommandInput
  | GetDetectorVersionCommandInput
  | GetDetectorsCommandInput
  | GetEntityTypesCommandInput
  | GetEventPredictionCommandInput
  | GetEventTypesCommandInput
  | GetExternalModelsCommandInput
  | GetKMSEncryptionKeyCommandInput
  | GetLabelsCommandInput
  | GetModelVersionCommandInput
  | GetModelsCommandInput
  | GetOutcomesCommandInput
  | GetRulesCommandInput
  | GetVariablesCommandInput
  | ListTagsForResourceCommandInput
  | PutDetectorCommandInput
  | PutEntityTypeCommandInput
  | PutEventTypeCommandInput
  | PutExternalModelCommandInput
  | PutKMSEncryptionKeyCommandInput
  | PutLabelCommandInput
  | PutOutcomeCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDetectorVersionCommandInput
  | UpdateDetectorVersionMetadataCommandInput
  | UpdateDetectorVersionStatusCommandInput
  | UpdateModelCommandInput
  | UpdateModelVersionCommandInput
  | UpdateModelVersionStatusCommandInput
  | UpdateRuleMetadataCommandInput
  | UpdateRuleVersionCommandInput
  | UpdateVariableCommandInput;

export type ServiceOutputTypes =
  | BatchCreateVariableCommandOutput
  | BatchGetVariableCommandOutput
  | CancelBatchPredictionJobCommandOutput
  | CreateBatchPredictionJobCommandOutput
  | CreateDetectorVersionCommandOutput
  | CreateModelCommandOutput
  | CreateModelVersionCommandOutput
  | CreateRuleCommandOutput
  | CreateVariableCommandOutput
  | DeleteBatchPredictionJobCommandOutput
  | DeleteDetectorCommandOutput
  | DeleteDetectorVersionCommandOutput
  | DeleteEntityTypeCommandOutput
  | DeleteEventCommandOutput
  | DeleteEventTypeCommandOutput
  | DeleteExternalModelCommandOutput
  | DeleteLabelCommandOutput
  | DeleteModelCommandOutput
  | DeleteModelVersionCommandOutput
  | DeleteOutcomeCommandOutput
  | DeleteRuleCommandOutput
  | DeleteVariableCommandOutput
  | DescribeDetectorCommandOutput
  | DescribeModelVersionsCommandOutput
  | GetBatchPredictionJobsCommandOutput
  | GetDetectorVersionCommandOutput
  | GetDetectorsCommandOutput
  | GetEntityTypesCommandOutput
  | GetEventPredictionCommandOutput
  | GetEventTypesCommandOutput
  | GetExternalModelsCommandOutput
  | GetKMSEncryptionKeyCommandOutput
  | GetLabelsCommandOutput
  | GetModelVersionCommandOutput
  | GetModelsCommandOutput
  | GetOutcomesCommandOutput
  | GetRulesCommandOutput
  | GetVariablesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutDetectorCommandOutput
  | PutEntityTypeCommandOutput
  | PutEventTypeCommandOutput
  | PutExternalModelCommandOutput
  | PutKMSEncryptionKeyCommandOutput
  | PutLabelCommandOutput
  | PutOutcomeCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDetectorVersionCommandOutput
  | UpdateDetectorVersionMetadataCommandOutput
  | UpdateDetectorVersionStatusCommandOutput
  | UpdateModelCommandOutput
  | UpdateModelVersionCommandOutput
  | UpdateModelVersionStatusCommandOutput
  | UpdateRuleMetadataCommandOutput
  | UpdateRuleVersionCommandOutput
  | UpdateVariableCommandOutput;

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

type FraudDetectorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of FraudDetectorClient class constructor that set the region, credentials and other options.
 */
export interface FraudDetectorClientConfig extends FraudDetectorClientConfigType {}

type FraudDetectorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of FraudDetectorClient class. This is resolved and normalized from the {@link FraudDetectorClientConfig | constructor configuration interface}.
 */
export interface FraudDetectorClientResolvedConfig extends FraudDetectorClientResolvedConfigType {}

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
  /**
   * The resolved configuration of FraudDetectorClient class. This is resolved and normalized from the {@link FraudDetectorClientConfig | constructor configuration interface}.
   */
  readonly config: FraudDetectorClientResolvedConfig;

  constructor(configuration: FraudDetectorClientConfig) {
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
