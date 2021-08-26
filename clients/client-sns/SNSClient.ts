import { AddPermissionCommandInput, AddPermissionCommandOutput } from "./commands/AddPermissionCommand";
import {
  CheckIfPhoneNumberIsOptedOutCommandInput,
  CheckIfPhoneNumberIsOptedOutCommandOutput,
} from "./commands/CheckIfPhoneNumberIsOptedOutCommand";
import {
  ConfirmSubscriptionCommandInput,
  ConfirmSubscriptionCommandOutput,
} from "./commands/ConfirmSubscriptionCommand";
import {
  CreatePlatformApplicationCommandInput,
  CreatePlatformApplicationCommandOutput,
} from "./commands/CreatePlatformApplicationCommand";
import {
  CreatePlatformEndpointCommandInput,
  CreatePlatformEndpointCommandOutput,
} from "./commands/CreatePlatformEndpointCommand";
import {
  CreateSMSSandboxPhoneNumberCommandInput,
  CreateSMSSandboxPhoneNumberCommandOutput,
} from "./commands/CreateSMSSandboxPhoneNumberCommand";
import { CreateTopicCommandInput, CreateTopicCommandOutput } from "./commands/CreateTopicCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import {
  DeletePlatformApplicationCommandInput,
  DeletePlatformApplicationCommandOutput,
} from "./commands/DeletePlatformApplicationCommand";
import {
  DeleteSMSSandboxPhoneNumberCommandInput,
  DeleteSMSSandboxPhoneNumberCommandOutput,
} from "./commands/DeleteSMSSandboxPhoneNumberCommand";
import { DeleteTopicCommandInput, DeleteTopicCommandOutput } from "./commands/DeleteTopicCommand";
import {
  GetEndpointAttributesCommandInput,
  GetEndpointAttributesCommandOutput,
} from "./commands/GetEndpointAttributesCommand";
import {
  GetPlatformApplicationAttributesCommandInput,
  GetPlatformApplicationAttributesCommandOutput,
} from "./commands/GetPlatformApplicationAttributesCommand";
import { GetSMSAttributesCommandInput, GetSMSAttributesCommandOutput } from "./commands/GetSMSAttributesCommand";
import {
  GetSMSSandboxAccountStatusCommandInput,
  GetSMSSandboxAccountStatusCommandOutput,
} from "./commands/GetSMSSandboxAccountStatusCommand";
import {
  GetSubscriptionAttributesCommandInput,
  GetSubscriptionAttributesCommandOutput,
} from "./commands/GetSubscriptionAttributesCommand";
import { GetTopicAttributesCommandInput, GetTopicAttributesCommandOutput } from "./commands/GetTopicAttributesCommand";
import {
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput,
} from "./commands/ListEndpointsByPlatformApplicationCommand";
import {
  ListOriginationNumbersCommandInput,
  ListOriginationNumbersCommandOutput,
} from "./commands/ListOriginationNumbersCommand";
import {
  ListPhoneNumbersOptedOutCommandInput,
  ListPhoneNumbersOptedOutCommandOutput,
} from "./commands/ListPhoneNumbersOptedOutCommand";
import {
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
} from "./commands/ListPlatformApplicationsCommand";
import {
  ListSMSSandboxPhoneNumbersCommandInput,
  ListSMSSandboxPhoneNumbersCommandOutput,
} from "./commands/ListSMSSandboxPhoneNumbersCommand";
import {
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput,
} from "./commands/ListSubscriptionsByTopicCommand";
import { ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput } from "./commands/ListSubscriptionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTopicsCommandInput, ListTopicsCommandOutput } from "./commands/ListTopicsCommand";
import { OptInPhoneNumberCommandInput, OptInPhoneNumberCommandOutput } from "./commands/OptInPhoneNumberCommand";
import { PublishCommandInput, PublishCommandOutput } from "./commands/PublishCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand";
import {
  SetEndpointAttributesCommandInput,
  SetEndpointAttributesCommandOutput,
} from "./commands/SetEndpointAttributesCommand";
import {
  SetPlatformApplicationAttributesCommandInput,
  SetPlatformApplicationAttributesCommandOutput,
} from "./commands/SetPlatformApplicationAttributesCommand";
import { SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput } from "./commands/SetSMSAttributesCommand";
import {
  SetSubscriptionAttributesCommandInput,
  SetSubscriptionAttributesCommandOutput,
} from "./commands/SetSubscriptionAttributesCommand";
import { SetTopicAttributesCommandInput, SetTopicAttributesCommandOutput } from "./commands/SetTopicAttributesCommand";
import { SubscribeCommandInput, SubscribeCommandOutput } from "./commands/SubscribeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnsubscribeCommandInput, UnsubscribeCommandOutput } from "./commands/UnsubscribeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  VerifySMSSandboxPhoneNumberCommandInput,
  VerifySMSSandboxPhoneNumberCommandOutput,
} from "./commands/VerifySMSSandboxPhoneNumberCommand";
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
  | AddPermissionCommandInput
  | CheckIfPhoneNumberIsOptedOutCommandInput
  | ConfirmSubscriptionCommandInput
  | CreatePlatformApplicationCommandInput
  | CreatePlatformEndpointCommandInput
  | CreateSMSSandboxPhoneNumberCommandInput
  | CreateTopicCommandInput
  | DeleteEndpointCommandInput
  | DeletePlatformApplicationCommandInput
  | DeleteSMSSandboxPhoneNumberCommandInput
  | DeleteTopicCommandInput
  | GetEndpointAttributesCommandInput
  | GetPlatformApplicationAttributesCommandInput
  | GetSMSAttributesCommandInput
  | GetSMSSandboxAccountStatusCommandInput
  | GetSubscriptionAttributesCommandInput
  | GetTopicAttributesCommandInput
  | ListEndpointsByPlatformApplicationCommandInput
  | ListOriginationNumbersCommandInput
  | ListPhoneNumbersOptedOutCommandInput
  | ListPlatformApplicationsCommandInput
  | ListSMSSandboxPhoneNumbersCommandInput
  | ListSubscriptionsByTopicCommandInput
  | ListSubscriptionsCommandInput
  | ListTagsForResourceCommandInput
  | ListTopicsCommandInput
  | OptInPhoneNumberCommandInput
  | PublishCommandInput
  | RemovePermissionCommandInput
  | SetEndpointAttributesCommandInput
  | SetPlatformApplicationAttributesCommandInput
  | SetSMSAttributesCommandInput
  | SetSubscriptionAttributesCommandInput
  | SetTopicAttributesCommandInput
  | SubscribeCommandInput
  | TagResourceCommandInput
  | UnsubscribeCommandInput
  | UntagResourceCommandInput
  | VerifySMSSandboxPhoneNumberCommandInput;

export type ServiceOutputTypes =
  | AddPermissionCommandOutput
  | CheckIfPhoneNumberIsOptedOutCommandOutput
  | ConfirmSubscriptionCommandOutput
  | CreatePlatformApplicationCommandOutput
  | CreatePlatformEndpointCommandOutput
  | CreateSMSSandboxPhoneNumberCommandOutput
  | CreateTopicCommandOutput
  | DeleteEndpointCommandOutput
  | DeletePlatformApplicationCommandOutput
  | DeleteSMSSandboxPhoneNumberCommandOutput
  | DeleteTopicCommandOutput
  | GetEndpointAttributesCommandOutput
  | GetPlatformApplicationAttributesCommandOutput
  | GetSMSAttributesCommandOutput
  | GetSMSSandboxAccountStatusCommandOutput
  | GetSubscriptionAttributesCommandOutput
  | GetTopicAttributesCommandOutput
  | ListEndpointsByPlatformApplicationCommandOutput
  | ListOriginationNumbersCommandOutput
  | ListPhoneNumbersOptedOutCommandOutput
  | ListPlatformApplicationsCommandOutput
  | ListSMSSandboxPhoneNumbersCommandOutput
  | ListSubscriptionsByTopicCommandOutput
  | ListSubscriptionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTopicsCommandOutput
  | OptInPhoneNumberCommandOutput
  | PublishCommandOutput
  | RemovePermissionCommandOutput
  | SetEndpointAttributesCommandOutput
  | SetPlatformApplicationAttributesCommandOutput
  | SetSMSAttributesCommandOutput
  | SetSubscriptionAttributesCommandOutput
  | SetTopicAttributesCommandOutput
  | SubscribeCommandOutput
  | TagResourceCommandOutput
  | UnsubscribeCommandOutput
  | UntagResourceCommandOutput
  | VerifySMSSandboxPhoneNumberCommandOutput;

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

type SNSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of SNSClient class constructor that set the region, credentials and other options.
 */
export interface SNSClientConfig extends SNSClientConfigType {}

type SNSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of SNSClient class. This is resolved and normalized from the {@link SNSClientConfig | constructor configuration interface}.
 */
export interface SNSClientResolvedConfig extends SNSClientResolvedConfigType {}

/**
 * <fullname>Amazon Simple Notification Service</fullname>
 *         <p>Amazon Simple Notification Service (Amazon SNS) is a web service that enables you to build
 *             distributed web-enabled applications. Applications can use Amazon SNS to easily push
 *             real-time notification messages to interested subscribers over multiple delivery
 *             protocols. For more information about this product see the <a href="http://aws.amazon.com/sns/">Amazon SNS product page</a>. For detailed information about Amazon SNS features
 *             and their associated API calls, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/">Amazon SNS Developer Guide</a>. </p>
 *         <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-authentication-and-access-control.html">Identity and access management in Amazon SNS</a> in the <i>Amazon SNS Developer
 *                 Guide.</i>
 *          </p>
 *         <p>We also provide SDKs that enable you to access Amazon SNS from your preferred programming
 *             language. The SDKs contain functionality that automatically takes care of tasks such as:
 *             cryptographically signing your service requests, retrying requests, and handling error
 *             responses. For a list of available SDKs, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p>
 */
export class SNSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SNSClientResolvedConfig
> {
  /**
   * The resolved configuration of SNSClient class. This is resolved and normalized from the {@link SNSClientConfig | constructor configuration interface}.
   */
  readonly config: SNSClientResolvedConfig;

  constructor(configuration: SNSClientConfig) {
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
