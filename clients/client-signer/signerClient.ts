import {
  CancelSigningProfileCommandInput,
  CancelSigningProfileCommandOutput
} from "./commands/CancelSigningProfileCommand";
import {
  DescribeSigningJobCommandInput,
  DescribeSigningJobCommandOutput
} from "./commands/DescribeSigningJobCommand";
import {
  GetSigningPlatformCommandInput,
  GetSigningPlatformCommandOutput
} from "./commands/GetSigningPlatformCommand";
import {
  GetSigningProfileCommandInput,
  GetSigningProfileCommandOutput
} from "./commands/GetSigningProfileCommand";
import {
  ListSigningJobsCommandInput,
  ListSigningJobsCommandOutput
} from "./commands/ListSigningJobsCommand";
import {
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput
} from "./commands/ListSigningPlatformsCommand";
import {
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput
} from "./commands/ListSigningProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  PutSigningProfileCommandInput,
  PutSigningProfileCommandOutput
} from "./commands/PutSigningProfileCommand";
import {
  StartSigningJobCommandInput,
  StartSigningJobCommandOutput
} from "./commands/StartSigningJobCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
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
  | CancelSigningProfileCommandInput
  | DescribeSigningJobCommandInput
  | GetSigningPlatformCommandInput
  | GetSigningProfileCommandInput
  | ListSigningJobsCommandInput
  | ListSigningPlatformsCommandInput
  | ListSigningProfilesCommandInput
  | ListTagsForResourceCommandInput
  | PutSigningProfileCommandInput
  | StartSigningJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | CancelSigningProfileCommandOutput
  | DescribeSigningJobCommandOutput
  | GetSigningPlatformCommandOutput
  | GetSigningProfileCommandOutput
  | ListSigningJobsCommandOutput
  | ListSigningPlatformsCommandOutput
  | ListSigningProfilesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutSigningProfileCommandOutput
  | StartSigningJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

export type signerClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type signerClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>With code signing for IoT, you can sign code that you create for any IoT device that is
 * 			supported by Amazon Web Services (AWS). Code signing is available through <a href="http://docs.aws.amazon.com/freertos/latest/userguide/">Amazon FreeRTOS</a> and <a href="http://docs.aws.amazon.com/iot/latest/developerguide/">AWS IoT Device Management</a>, and integrated with <a href="http://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager
 * 				(ACM)</a>. In order to sign code, you import a third-party code signing
 * 			certificate with ACM that is used to sign updates in Amazon FreeRTOS and AWS IoT Device Management. For
 * 			general information about using code signing, see the <a href="http://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">Code Signing for IoT Developer Guide</a>.</p>
 */
export class signerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  signerClientResolvedConfig
> {
  readonly config: signerClientResolvedConfig;

  constructor(configuration: signerClientConfig) {
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
