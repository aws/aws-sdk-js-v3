import {
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "./commands/BatchCreateChannelMembershipCommand";
import { CreateChannelBanCommandInput, CreateChannelBanCommandOutput } from "./commands/CreateChannelBanCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import {
  CreateChannelMembershipCommandInput,
  CreateChannelMembershipCommandOutput,
} from "./commands/CreateChannelMembershipCommand";
import {
  CreateChannelModeratorCommandInput,
  CreateChannelModeratorCommandOutput,
} from "./commands/CreateChannelModeratorCommand";
import { DeleteChannelBanCommandInput, DeleteChannelBanCommandOutput } from "./commands/DeleteChannelBanCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import {
  DeleteChannelMembershipCommandInput,
  DeleteChannelMembershipCommandOutput,
} from "./commands/DeleteChannelMembershipCommand";
import {
  DeleteChannelMessageCommandInput,
  DeleteChannelMessageCommandOutput,
} from "./commands/DeleteChannelMessageCommand";
import {
  DeleteChannelModeratorCommandInput,
  DeleteChannelModeratorCommandOutput,
} from "./commands/DeleteChannelModeratorCommand";
import { DescribeChannelBanCommandInput, DescribeChannelBanCommandOutput } from "./commands/DescribeChannelBanCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import {
  DescribeChannelMembershipCommandInput,
  DescribeChannelMembershipCommandOutput,
} from "./commands/DescribeChannelMembershipCommand";
import {
  DescribeChannelMembershipForAppInstanceUserCommandInput,
  DescribeChannelMembershipForAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelMembershipForAppInstanceUserCommand";
import {
  DescribeChannelModeratedByAppInstanceUserCommandInput,
  DescribeChannelModeratedByAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelModeratedByAppInstanceUserCommand";
import {
  DescribeChannelModeratorCommandInput,
  DescribeChannelModeratorCommandOutput,
} from "./commands/DescribeChannelModeratorCommand";
import { GetChannelMessageCommandInput, GetChannelMessageCommandOutput } from "./commands/GetChannelMessageCommand";
import {
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "./commands/GetMessagingSessionEndpointCommand";
import { ListChannelBansCommandInput, ListChannelBansCommandOutput } from "./commands/ListChannelBansCommand";
import {
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "./commands/ListChannelMembershipsCommand";
import {
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "./commands/ListChannelMembershipsForAppInstanceUserCommand";
import {
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "./commands/ListChannelMessagesCommand";
import {
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "./commands/ListChannelModeratorsCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import {
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "./commands/ListChannelsModeratedByAppInstanceUserCommand";
import {
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "./commands/RedactChannelMessageCommand";
import { SendChannelMessageCommandInput, SendChannelMessageCommandOutput } from "./commands/SendChannelMessageCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import {
  UpdateChannelMessageCommandInput,
  UpdateChannelMessageCommandOutput,
} from "./commands/UpdateChannelMessageCommand";
import {
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
} from "./commands/UpdateChannelReadMarkerCommand";
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
  | BatchCreateChannelMembershipCommandInput
  | CreateChannelBanCommandInput
  | CreateChannelCommandInput
  | CreateChannelMembershipCommandInput
  | CreateChannelModeratorCommandInput
  | DeleteChannelBanCommandInput
  | DeleteChannelCommandInput
  | DeleteChannelMembershipCommandInput
  | DeleteChannelMessageCommandInput
  | DeleteChannelModeratorCommandInput
  | DescribeChannelBanCommandInput
  | DescribeChannelCommandInput
  | DescribeChannelMembershipCommandInput
  | DescribeChannelMembershipForAppInstanceUserCommandInput
  | DescribeChannelModeratedByAppInstanceUserCommandInput
  | DescribeChannelModeratorCommandInput
  | GetChannelMessageCommandInput
  | GetMessagingSessionEndpointCommandInput
  | ListChannelBansCommandInput
  | ListChannelMembershipsCommandInput
  | ListChannelMembershipsForAppInstanceUserCommandInput
  | ListChannelMessagesCommandInput
  | ListChannelModeratorsCommandInput
  | ListChannelsCommandInput
  | ListChannelsModeratedByAppInstanceUserCommandInput
  | RedactChannelMessageCommandInput
  | SendChannelMessageCommandInput
  | UpdateChannelCommandInput
  | UpdateChannelMessageCommandInput
  | UpdateChannelReadMarkerCommandInput;

export type ServiceOutputTypes =
  | BatchCreateChannelMembershipCommandOutput
  | CreateChannelBanCommandOutput
  | CreateChannelCommandOutput
  | CreateChannelMembershipCommandOutput
  | CreateChannelModeratorCommandOutput
  | DeleteChannelBanCommandOutput
  | DeleteChannelCommandOutput
  | DeleteChannelMembershipCommandOutput
  | DeleteChannelMessageCommandOutput
  | DeleteChannelModeratorCommandOutput
  | DescribeChannelBanCommandOutput
  | DescribeChannelCommandOutput
  | DescribeChannelMembershipCommandOutput
  | DescribeChannelMembershipForAppInstanceUserCommandOutput
  | DescribeChannelModeratedByAppInstanceUserCommandOutput
  | DescribeChannelModeratorCommandOutput
  | GetChannelMessageCommandOutput
  | GetMessagingSessionEndpointCommandOutput
  | ListChannelBansCommandOutput
  | ListChannelMembershipsCommandOutput
  | ListChannelMembershipsForAppInstanceUserCommandOutput
  | ListChannelMessagesCommandOutput
  | ListChannelModeratorsCommandOutput
  | ListChannelsCommandOutput
  | ListChannelsModeratedByAppInstanceUserCommandOutput
  | RedactChannelMessageCommandOutput
  | SendChannelMessageCommandOutput
  | UpdateChannelCommandOutput
  | UpdateChannelMessageCommandOutput
  | UpdateChannelReadMarkerCommandOutput;

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
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

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

type ChimeSDKMessagingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ChimeSDKMessagingClient class constructor that set the region, credentials and other options.
 */
export interface ChimeSDKMessagingClientConfig extends ChimeSDKMessagingClientConfigType {}

type ChimeSDKMessagingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ChimeSDKMessagingClient class. This is resolved and normalized from the {@link ChimeSDKMessagingClientConfig | constructor configuration interface}.
 */
export interface ChimeSDKMessagingClientResolvedConfig extends ChimeSDKMessagingClientResolvedConfigType {}

/**
 * <p>The Amazon Chime SDK Messaging APIs in this section allow software developers to send
 *          and receive messages in custom messaging applications. These APIs depend on the frameworks
 *          provided by the Amazon Chime SDK Identity APIs. For more information about the messaging
 *          APIs, see .</p>
 */
export class ChimeSDKMessagingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ChimeSDKMessagingClientResolvedConfig
> {
  /**
   * The resolved configuration of ChimeSDKMessagingClient class. This is resolved and normalized from the {@link ChimeSDKMessagingClientConfig | constructor configuration interface}.
   */
  readonly config: ChimeSDKMessagingClientResolvedConfig;

  constructor(configuration: ChimeSDKMessagingClientConfig) {
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
