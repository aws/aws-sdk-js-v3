// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
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
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import {
  CreateInferenceSchedulerCommandInput,
  CreateInferenceSchedulerCommandOutput,
} from "./commands/CreateInferenceSchedulerCommand";
import { CreateLabelCommandInput, CreateLabelCommandOutput } from "./commands/CreateLabelCommand";
import { CreateLabelGroupCommandInput, CreateLabelGroupCommandOutput } from "./commands/CreateLabelGroupCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  CreateRetrainingSchedulerCommandInput,
  CreateRetrainingSchedulerCommandOutput,
} from "./commands/CreateRetrainingSchedulerCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import {
  DeleteInferenceSchedulerCommandInput,
  DeleteInferenceSchedulerCommandOutput,
} from "./commands/DeleteInferenceSchedulerCommand";
import { DeleteLabelCommandInput, DeleteLabelCommandOutput } from "./commands/DeleteLabelCommand";
import { DeleteLabelGroupCommandInput, DeleteLabelGroupCommandOutput } from "./commands/DeleteLabelGroupCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteRetrainingSchedulerCommandInput,
  DeleteRetrainingSchedulerCommandOutput,
} from "./commands/DeleteRetrainingSchedulerCommand";
import {
  DescribeDataIngestionJobCommandInput,
  DescribeDataIngestionJobCommandOutput,
} from "./commands/DescribeDataIngestionJobCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import {
  DescribeInferenceSchedulerCommandInput,
  DescribeInferenceSchedulerCommandOutput,
} from "./commands/DescribeInferenceSchedulerCommand";
import { DescribeLabelCommandInput, DescribeLabelCommandOutput } from "./commands/DescribeLabelCommand";
import { DescribeLabelGroupCommandInput, DescribeLabelGroupCommandOutput } from "./commands/DescribeLabelGroupCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "./commands/DescribeModelCommand";
import {
  DescribeModelVersionCommandInput,
  DescribeModelVersionCommandOutput,
} from "./commands/DescribeModelVersionCommand";
import {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DescribeRetrainingSchedulerCommandInput,
  DescribeRetrainingSchedulerCommandOutput,
} from "./commands/DescribeRetrainingSchedulerCommand";
import { ImportDatasetCommandInput, ImportDatasetCommandOutput } from "./commands/ImportDatasetCommand";
import { ImportModelVersionCommandInput, ImportModelVersionCommandOutput } from "./commands/ImportModelVersionCommand";
import {
  ListDataIngestionJobsCommandInput,
  ListDataIngestionJobsCommandOutput,
} from "./commands/ListDataIngestionJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import {
  ListInferenceEventsCommandInput,
  ListInferenceEventsCommandOutput,
} from "./commands/ListInferenceEventsCommand";
import {
  ListInferenceExecutionsCommandInput,
  ListInferenceExecutionsCommandOutput,
} from "./commands/ListInferenceExecutionsCommand";
import {
  ListInferenceSchedulersCommandInput,
  ListInferenceSchedulersCommandOutput,
} from "./commands/ListInferenceSchedulersCommand";
import { ListLabelGroupsCommandInput, ListLabelGroupsCommandOutput } from "./commands/ListLabelGroupsCommand";
import { ListLabelsCommandInput, ListLabelsCommandOutput } from "./commands/ListLabelsCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import { ListModelVersionsCommandInput, ListModelVersionsCommandOutput } from "./commands/ListModelVersionsCommand";
import {
  ListRetrainingSchedulersCommandInput,
  ListRetrainingSchedulersCommandOutput,
} from "./commands/ListRetrainingSchedulersCommand";
import {
  ListSensorStatisticsCommandInput,
  ListSensorStatisticsCommandOutput,
} from "./commands/ListSensorStatisticsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  StartDataIngestionJobCommandInput,
  StartDataIngestionJobCommandOutput,
} from "./commands/StartDataIngestionJobCommand";
import {
  StartInferenceSchedulerCommandInput,
  StartInferenceSchedulerCommandOutput,
} from "./commands/StartInferenceSchedulerCommand";
import {
  StartRetrainingSchedulerCommandInput,
  StartRetrainingSchedulerCommandOutput,
} from "./commands/StartRetrainingSchedulerCommand";
import {
  StopInferenceSchedulerCommandInput,
  StopInferenceSchedulerCommandOutput,
} from "./commands/StopInferenceSchedulerCommand";
import {
  StopRetrainingSchedulerCommandInput,
  StopRetrainingSchedulerCommandOutput,
} from "./commands/StopRetrainingSchedulerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateActiveModelVersionCommandInput,
  UpdateActiveModelVersionCommandOutput,
} from "./commands/UpdateActiveModelVersionCommand";
import {
  UpdateInferenceSchedulerCommandInput,
  UpdateInferenceSchedulerCommandOutput,
} from "./commands/UpdateInferenceSchedulerCommand";
import { UpdateLabelGroupCommandInput, UpdateLabelGroupCommandOutput } from "./commands/UpdateLabelGroupCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import {
  UpdateRetrainingSchedulerCommandInput,
  UpdateRetrainingSchedulerCommandOutput,
} from "./commands/UpdateRetrainingSchedulerCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateDatasetCommandInput
  | CreateInferenceSchedulerCommandInput
  | CreateLabelCommandInput
  | CreateLabelGroupCommandInput
  | CreateModelCommandInput
  | CreateRetrainingSchedulerCommandInput
  | DeleteDatasetCommandInput
  | DeleteInferenceSchedulerCommandInput
  | DeleteLabelCommandInput
  | DeleteLabelGroupCommandInput
  | DeleteModelCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteRetrainingSchedulerCommandInput
  | DescribeDataIngestionJobCommandInput
  | DescribeDatasetCommandInput
  | DescribeInferenceSchedulerCommandInput
  | DescribeLabelCommandInput
  | DescribeLabelGroupCommandInput
  | DescribeModelCommandInput
  | DescribeModelVersionCommandInput
  | DescribeResourcePolicyCommandInput
  | DescribeRetrainingSchedulerCommandInput
  | ImportDatasetCommandInput
  | ImportModelVersionCommandInput
  | ListDataIngestionJobsCommandInput
  | ListDatasetsCommandInput
  | ListInferenceEventsCommandInput
  | ListInferenceExecutionsCommandInput
  | ListInferenceSchedulersCommandInput
  | ListLabelGroupsCommandInput
  | ListLabelsCommandInput
  | ListModelVersionsCommandInput
  | ListModelsCommandInput
  | ListRetrainingSchedulersCommandInput
  | ListSensorStatisticsCommandInput
  | ListTagsForResourceCommandInput
  | PutResourcePolicyCommandInput
  | StartDataIngestionJobCommandInput
  | StartInferenceSchedulerCommandInput
  | StartRetrainingSchedulerCommandInput
  | StopInferenceSchedulerCommandInput
  | StopRetrainingSchedulerCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateActiveModelVersionCommandInput
  | UpdateInferenceSchedulerCommandInput
  | UpdateLabelGroupCommandInput
  | UpdateModelCommandInput
  | UpdateRetrainingSchedulerCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateDatasetCommandOutput
  | CreateInferenceSchedulerCommandOutput
  | CreateLabelCommandOutput
  | CreateLabelGroupCommandOutput
  | CreateModelCommandOutput
  | CreateRetrainingSchedulerCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteInferenceSchedulerCommandOutput
  | DeleteLabelCommandOutput
  | DeleteLabelGroupCommandOutput
  | DeleteModelCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteRetrainingSchedulerCommandOutput
  | DescribeDataIngestionJobCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeInferenceSchedulerCommandOutput
  | DescribeLabelCommandOutput
  | DescribeLabelGroupCommandOutput
  | DescribeModelCommandOutput
  | DescribeModelVersionCommandOutput
  | DescribeResourcePolicyCommandOutput
  | DescribeRetrainingSchedulerCommandOutput
  | ImportDatasetCommandOutput
  | ImportModelVersionCommandOutput
  | ListDataIngestionJobsCommandOutput
  | ListDatasetsCommandOutput
  | ListInferenceEventsCommandOutput
  | ListInferenceExecutionsCommandOutput
  | ListInferenceSchedulersCommandOutput
  | ListLabelGroupsCommandOutput
  | ListLabelsCommandOutput
  | ListModelVersionsCommandOutput
  | ListModelsCommandOutput
  | ListRetrainingSchedulersCommandOutput
  | ListSensorStatisticsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutResourcePolicyCommandOutput
  | StartDataIngestionJobCommandOutput
  | StartInferenceSchedulerCommandOutput
  | StartRetrainingSchedulerCommandOutput
  | StopInferenceSchedulerCommandOutput
  | StopRetrainingSchedulerCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateActiveModelVersionCommandOutput
  | UpdateInferenceSchedulerCommandOutput
  | UpdateLabelGroupCommandOutput
  | UpdateModelCommandOutput
  | UpdateRetrainingSchedulerCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
export type LookoutEquipmentClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of LookoutEquipmentClient class constructor that set the region, credentials and other options.
 */
export interface LookoutEquipmentClientConfig extends LookoutEquipmentClientConfigType {}

/**
 * @public
 */
export type LookoutEquipmentClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of LookoutEquipmentClient class. This is resolved and normalized from the {@link LookoutEquipmentClientConfig | constructor configuration interface}.
 */
export interface LookoutEquipmentClientResolvedConfig extends LookoutEquipmentClientResolvedConfigType {}

/**
 * @public
 * <p>Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify
 *          anomalies in machines from sensor data for use in predictive maintenance. </p>
 */
export class LookoutEquipmentClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LookoutEquipmentClientResolvedConfig
> {
  /**
   * The resolved configuration of LookoutEquipmentClient class. This is resolved and normalized from the {@link LookoutEquipmentClientConfig | constructor configuration interface}.
   */
  readonly config: LookoutEquipmentClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<LookoutEquipmentClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
