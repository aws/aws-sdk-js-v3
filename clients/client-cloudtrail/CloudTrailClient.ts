import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CreateTrailCommandInput, CreateTrailCommandOutput } from "./commands/CreateTrailCommand";
import { DeleteTrailCommandInput, DeleteTrailCommandOutput } from "./commands/DeleteTrailCommand";
import { DescribeTrailsCommandInput, DescribeTrailsCommandOutput } from "./commands/DescribeTrailsCommand";
import { GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput } from "./commands/GetEventSelectorsCommand";
import {
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput,
} from "./commands/GetInsightSelectorsCommand";
import { GetTrailCommandInput, GetTrailCommandOutput } from "./commands/GetTrailCommand";
import { GetTrailStatusCommandInput, GetTrailStatusCommandOutput } from "./commands/GetTrailStatusCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "./commands/ListPublicKeysCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListTrailsCommandInput, ListTrailsCommandOutput } from "./commands/ListTrailsCommand";
import { LookupEventsCommandInput, LookupEventsCommandOutput } from "./commands/LookupEventsCommand";
import { PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput } from "./commands/PutEventSelectorsCommand";
import {
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput,
} from "./commands/PutInsightSelectorsCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import { StartLoggingCommandInput, StartLoggingCommandOutput } from "./commands/StartLoggingCommand";
import { StopLoggingCommandInput, StopLoggingCommandOutput } from "./commands/StopLoggingCommand";
import { UpdateTrailCommandInput, UpdateTrailCommandOutput } from "./commands/UpdateTrailCommand";
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
  | AddTagsCommandInput
  | CreateTrailCommandInput
  | DeleteTrailCommandInput
  | DescribeTrailsCommandInput
  | GetEventSelectorsCommandInput
  | GetInsightSelectorsCommandInput
  | GetTrailCommandInput
  | GetTrailStatusCommandInput
  | ListPublicKeysCommandInput
  | ListTagsCommandInput
  | ListTrailsCommandInput
  | LookupEventsCommandInput
  | PutEventSelectorsCommandInput
  | PutInsightSelectorsCommandInput
  | RemoveTagsCommandInput
  | StartLoggingCommandInput
  | StopLoggingCommandInput
  | UpdateTrailCommandInput;

export type ServiceOutputTypes =
  | AddTagsCommandOutput
  | CreateTrailCommandOutput
  | DeleteTrailCommandOutput
  | DescribeTrailsCommandOutput
  | GetEventSelectorsCommandOutput
  | GetInsightSelectorsCommandOutput
  | GetTrailCommandOutput
  | GetTrailStatusCommandOutput
  | ListPublicKeysCommandOutput
  | ListTagsCommandOutput
  | ListTrailsCommandOutput
  | LookupEventsCommandOutput
  | PutEventSelectorsCommandOutput
  | PutInsightSelectorsCommandOutput
  | RemoveTagsCommandOutput
  | StartLoggingCommandOutput
  | StopLoggingCommandOutput
  | UpdateTrailCommandOutput;

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

type CloudTrailClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CloudTrailClient class constructor that set the region, credentials and other options.
 */
export interface CloudTrailClientConfig extends CloudTrailClientConfigType {}

type CloudTrailClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CloudTrailClient class. This is resolved and normalized from the {@link CloudTrailClientConfig | constructor configuration interface}.
 */
export interface CloudTrailClientResolvedConfig extends CloudTrailClientResolvedConfigType {}

/**
 * <fullname>AWS CloudTrail</fullname>
 *          <p>This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail.</p>
 *          <p>CloudTrail is a web service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the AWS API call, the source IP address, the request parameters, and the response elements returned by the service.</p>
 *
 *          <note>
 *             <p>As an alternative to the API,
 *          you can use one of the AWS SDKs, which consist of libraries and sample code for various
 *          programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs
 *          provide a convenient way to create programmatic access to AWSCloudTrail. For example, the SDKs
 *          take care of cryptographically signing requests, managing errors, and retrying requests
 *          automatically. For information about the AWS SDKs, including how to download and install
 *          them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services
 *             page</a>.</p>
 *          </note>
 *          <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">AWS CloudTrail User Guide</a> for information about the data that is included with each AWS API call listed in the log files.</p>
 */
export class CloudTrailClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudTrailClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudTrailClient class. This is resolved and normalized from the {@link CloudTrailClientConfig | constructor configuration interface}.
   */
  readonly config: CloudTrailClientResolvedConfig;

  constructor(configuration: CloudTrailClientConfig) {
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
