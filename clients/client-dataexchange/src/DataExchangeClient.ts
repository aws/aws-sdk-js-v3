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

import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "./commands/CreateDataSetCommand";
import { CreateEventActionCommandInput, CreateEventActionCommandOutput } from "./commands/CreateEventActionCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { CreateRevisionCommandInput, CreateRevisionCommandOutput } from "./commands/CreateRevisionCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "./commands/DeleteDataSetCommand";
import { DeleteEventActionCommandInput, DeleteEventActionCommandOutput } from "./commands/DeleteEventActionCommand";
import { DeleteRevisionCommandInput, DeleteRevisionCommandOutput } from "./commands/DeleteRevisionCommand";
import { GetAssetCommandInput, GetAssetCommandOutput } from "./commands/GetAssetCommand";
import { GetDataSetCommandInput, GetDataSetCommandOutput } from "./commands/GetDataSetCommand";
import { GetEventActionCommandInput, GetEventActionCommandOutput } from "./commands/GetEventActionCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "./commands/GetRevisionCommand";
import {
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput,
} from "./commands/ListDataSetRevisionsCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "./commands/ListDataSetsCommand";
import { ListEventActionsCommandInput, ListEventActionsCommandOutput } from "./commands/ListEventActionsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput } from "./commands/ListRevisionAssetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RevokeRevisionCommandInput, RevokeRevisionCommandOutput } from "./commands/RevokeRevisionCommand";
import { SendApiAssetCommandInput, SendApiAssetCommandOutput } from "./commands/SendApiAssetCommand";
import { StartJobCommandInput, StartJobCommandOutput } from "./commands/StartJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "./commands/UpdateAssetCommand";
import { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "./commands/UpdateDataSetCommand";
import { UpdateEventActionCommandInput, UpdateEventActionCommandOutput } from "./commands/UpdateEventActionCommand";
import { UpdateRevisionCommandInput, UpdateRevisionCommandOutput } from "./commands/UpdateRevisionCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CancelJobCommandInput
  | CreateDataSetCommandInput
  | CreateEventActionCommandInput
  | CreateJobCommandInput
  | CreateRevisionCommandInput
  | DeleteAssetCommandInput
  | DeleteDataSetCommandInput
  | DeleteEventActionCommandInput
  | DeleteRevisionCommandInput
  | GetAssetCommandInput
  | GetDataSetCommandInput
  | GetEventActionCommandInput
  | GetJobCommandInput
  | GetRevisionCommandInput
  | ListDataSetRevisionsCommandInput
  | ListDataSetsCommandInput
  | ListEventActionsCommandInput
  | ListJobsCommandInput
  | ListRevisionAssetsCommandInput
  | ListTagsForResourceCommandInput
  | RevokeRevisionCommandInput
  | SendApiAssetCommandInput
  | StartJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAssetCommandInput
  | UpdateDataSetCommandInput
  | UpdateEventActionCommandInput
  | UpdateRevisionCommandInput;

export type ServiceOutputTypes =
  | CancelJobCommandOutput
  | CreateDataSetCommandOutput
  | CreateEventActionCommandOutput
  | CreateJobCommandOutput
  | CreateRevisionCommandOutput
  | DeleteAssetCommandOutput
  | DeleteDataSetCommandOutput
  | DeleteEventActionCommandOutput
  | DeleteRevisionCommandOutput
  | GetAssetCommandOutput
  | GetDataSetCommandOutput
  | GetEventActionCommandOutput
  | GetJobCommandOutput
  | GetRevisionCommandOutput
  | ListDataSetRevisionsCommandOutput
  | ListDataSetsCommandOutput
  | ListEventActionsCommandOutput
  | ListJobsCommandOutput
  | ListRevisionAssetsCommandOutput
  | ListTagsForResourceCommandOutput
  | RevokeRevisionCommandOutput
  | SendApiAssetCommandOutput
  | StartJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAssetCommandOutput
  | UpdateDataSetCommandOutput
  | UpdateEventActionCommandOutput
  | UpdateRevisionCommandOutput;

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

type DataExchangeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of DataExchangeClient class constructor that set the region, credentials and other options.
 */
export interface DataExchangeClientConfig extends DataExchangeClientConfigType {}

type DataExchangeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of DataExchangeClient class. This is resolved and normalized from the {@link DataExchangeClientConfig | constructor configuration interface}.
 */
export interface DataExchangeClientResolvedConfig extends DataExchangeClientResolvedConfigType {}

/**
 * <p>AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access file-based data set in the AWS Cloud.</p>
 *          <p>As a subscriber, you can view and access the data sets that you have an entitlement to through
 *          a subscription. You can use the APIs to download or copy your entitled data sets to Amazon
 *          Simple Storage Service (Amazon S3) for use across a variety of AWS analytics and machine
 *          learning services.</p>
 *          <p>As a provider, you can create and manage your data sets that you would like to publish to a
 *          product. Being able to package and provide your data sets into products requires a few
 *          steps to determine eligibility. For more information, visit the <i>AWS Data Exchange
 *             User Guide</i>.</p>
 *          <p>A data set is a collection of data that can be changed or updated over time. Data sets can be
 *          updated using revisions, which represent a new version or incremental change to a data set.
 *          A revision contains one or more assets. An asset in AWS Data Exchange is a piece of data
 *          that can be stored as an Amazon S3 object, Redshift datashare, API Gateway API, AWS Lake
 *          Formation data permission, or Amazon S3 data access. The asset can be a structured data
 *          file, an image file, or some other data file. Jobs are asynchronous import or export
 *          operations used to create or copy assets.</p>
 */
export class DataExchangeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataExchangeClientResolvedConfig
> {
  /**
   * The resolved configuration of DataExchangeClient class. This is resolved and normalized from the {@link DataExchangeClientConfig | constructor configuration interface}.
   */
  readonly config: DataExchangeClientResolvedConfig;

  constructor(configuration: DataExchangeClientConfig) {
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
