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

import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import {
  CreateInferenceSchedulerCommandInput,
  CreateInferenceSchedulerCommandOutput,
} from "./commands/CreateInferenceSchedulerCommand";
import { CreateLabelCommandInput, CreateLabelCommandOutput } from "./commands/CreateLabelCommand";
import { CreateLabelGroupCommandInput, CreateLabelGroupCommandOutput } from "./commands/CreateLabelGroupCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import {
  DeleteInferenceSchedulerCommandInput,
  DeleteInferenceSchedulerCommandOutput,
} from "./commands/DeleteInferenceSchedulerCommand";
import { DeleteLabelCommandInput, DeleteLabelCommandOutput } from "./commands/DeleteLabelCommand";
import { DeleteLabelGroupCommandInput, DeleteLabelGroupCommandOutput } from "./commands/DeleteLabelGroupCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
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
import {
  ListSensorStatisticsCommandInput,
  ListSensorStatisticsCommandOutput,
} from "./commands/ListSensorStatisticsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartDataIngestionJobCommandInput,
  StartDataIngestionJobCommandOutput,
} from "./commands/StartDataIngestionJobCommand";
import {
  StartInferenceSchedulerCommandInput,
  StartInferenceSchedulerCommandOutput,
} from "./commands/StartInferenceSchedulerCommand";
import {
  StopInferenceSchedulerCommandInput,
  StopInferenceSchedulerCommandOutput,
} from "./commands/StopInferenceSchedulerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateInferenceSchedulerCommandInput,
  UpdateInferenceSchedulerCommandOutput,
} from "./commands/UpdateInferenceSchedulerCommand";
import { UpdateLabelGroupCommandInput, UpdateLabelGroupCommandOutput } from "./commands/UpdateLabelGroupCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateDatasetCommandInput
  | CreateInferenceSchedulerCommandInput
  | CreateLabelCommandInput
  | CreateLabelGroupCommandInput
  | CreateModelCommandInput
  | DeleteDatasetCommandInput
  | DeleteInferenceSchedulerCommandInput
  | DeleteLabelCommandInput
  | DeleteLabelGroupCommandInput
  | DeleteModelCommandInput
  | DescribeDataIngestionJobCommandInput
  | DescribeDatasetCommandInput
  | DescribeInferenceSchedulerCommandInput
  | DescribeLabelCommandInput
  | DescribeLabelGroupCommandInput
  | DescribeModelCommandInput
  | ListDataIngestionJobsCommandInput
  | ListDatasetsCommandInput
  | ListInferenceEventsCommandInput
  | ListInferenceExecutionsCommandInput
  | ListInferenceSchedulersCommandInput
  | ListLabelGroupsCommandInput
  | ListLabelsCommandInput
  | ListModelsCommandInput
  | ListSensorStatisticsCommandInput
  | ListTagsForResourceCommandInput
  | StartDataIngestionJobCommandInput
  | StartInferenceSchedulerCommandInput
  | StopInferenceSchedulerCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateInferenceSchedulerCommandInput
  | UpdateLabelGroupCommandInput;

export type ServiceOutputTypes =
  | CreateDatasetCommandOutput
  | CreateInferenceSchedulerCommandOutput
  | CreateLabelCommandOutput
  | CreateLabelGroupCommandOutput
  | CreateModelCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteInferenceSchedulerCommandOutput
  | DeleteLabelCommandOutput
  | DeleteLabelGroupCommandOutput
  | DeleteModelCommandOutput
  | DescribeDataIngestionJobCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeInferenceSchedulerCommandOutput
  | DescribeLabelCommandOutput
  | DescribeLabelGroupCommandOutput
  | DescribeModelCommandOutput
  | ListDataIngestionJobsCommandOutput
  | ListDatasetsCommandOutput
  | ListInferenceEventsCommandOutput
  | ListInferenceExecutionsCommandOutput
  | ListInferenceSchedulersCommandOutput
  | ListLabelGroupsCommandOutput
  | ListLabelsCommandOutput
  | ListModelsCommandOutput
  | ListSensorStatisticsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartDataIngestionJobCommandOutput
  | StartInferenceSchedulerCommandOutput
  | StopInferenceSchedulerCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateInferenceSchedulerCommandOutput
  | UpdateLabelGroupCommandOutput;

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
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type LookoutEquipmentClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of LookoutEquipmentClient class constructor that set the region, credentials and other options.
 */
export interface LookoutEquipmentClientConfig extends LookoutEquipmentClientConfigType {}

type LookoutEquipmentClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of LookoutEquipmentClient class. This is resolved and normalized from the {@link LookoutEquipmentClientConfig | constructor configuration interface}.
 */
export interface LookoutEquipmentClientResolvedConfig extends LookoutEquipmentClientResolvedConfigType {}

/**
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

  constructor(configuration: LookoutEquipmentClientConfig) {
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
