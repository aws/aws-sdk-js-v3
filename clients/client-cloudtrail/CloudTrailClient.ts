import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "./commands/AddTagsCommand";
import {
  CreateTrailCommandInput,
  CreateTrailCommandOutput
} from "./commands/CreateTrailCommand";
import {
  DeleteTrailCommandInput,
  DeleteTrailCommandOutput
} from "./commands/DeleteTrailCommand";
import {
  DescribeTrailsCommandInput,
  DescribeTrailsCommandOutput
} from "./commands/DescribeTrailsCommand";
import {
  GetEventSelectorsCommandInput,
  GetEventSelectorsCommandOutput
} from "./commands/GetEventSelectorsCommand";
import {
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput
} from "./commands/GetInsightSelectorsCommand";
import {
  GetTrailCommandInput,
  GetTrailCommandOutput
} from "./commands/GetTrailCommand";
import {
  GetTrailStatusCommandInput,
  GetTrailStatusCommandOutput
} from "./commands/GetTrailStatusCommand";
import {
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput
} from "./commands/ListPublicKeysCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "./commands/ListTagsCommand";
import {
  ListTrailsCommandInput,
  ListTrailsCommandOutput
} from "./commands/ListTrailsCommand";
import {
  LookupEventsCommandInput,
  LookupEventsCommandOutput
} from "./commands/LookupEventsCommand";
import {
  PutEventSelectorsCommandInput,
  PutEventSelectorsCommandOutput
} from "./commands/PutEventSelectorsCommand";
import {
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput
} from "./commands/PutInsightSelectorsCommand";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "./commands/RemoveTagsCommand";
import {
  StartLoggingCommandInput,
  StartLoggingCommandOutput
} from "./commands/StartLoggingCommand";
import {
  StopLoggingCommandInput,
  StopLoggingCommandOutput
} from "./commands/StopLoggingCommand";
import {
  UpdateTrailCommandInput,
  UpdateTrailCommandOutput
} from "./commands/UpdateTrailCommand";
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

export type CloudTrailClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CloudTrailClientResolvedConfig = __SmithyResolvedConfiguration<
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
  readonly config: CloudTrailClientResolvedConfig;

  constructor(configuration: CloudTrailClientConfig) {
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
