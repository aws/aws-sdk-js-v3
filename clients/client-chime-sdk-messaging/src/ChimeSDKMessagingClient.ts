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

import {
  AssociateChannelFlowCommandInput,
  AssociateChannelFlowCommandOutput,
} from "./commands/AssociateChannelFlowCommand";
import {
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "./commands/BatchCreateChannelMembershipCommand";
import {
  ChannelFlowCallbackCommandInput,
  ChannelFlowCallbackCommandOutput,
} from "./commands/ChannelFlowCallbackCommand";
import { CreateChannelBanCommandInput, CreateChannelBanCommandOutput } from "./commands/CreateChannelBanCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateChannelFlowCommandInput, CreateChannelFlowCommandOutput } from "./commands/CreateChannelFlowCommand";
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
import { DeleteChannelFlowCommandInput, DeleteChannelFlowCommandOutput } from "./commands/DeleteChannelFlowCommand";
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
  DescribeChannelFlowCommandInput,
  DescribeChannelFlowCommandOutput,
} from "./commands/DescribeChannelFlowCommand";
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
import {
  DisassociateChannelFlowCommandInput,
  DisassociateChannelFlowCommandOutput,
} from "./commands/DisassociateChannelFlowCommand";
import {
  GetChannelMembershipPreferencesCommandInput,
  GetChannelMembershipPreferencesCommandOutput,
} from "./commands/GetChannelMembershipPreferencesCommand";
import { GetChannelMessageCommandInput, GetChannelMessageCommandOutput } from "./commands/GetChannelMessageCommand";
import {
  GetChannelMessageStatusCommandInput,
  GetChannelMessageStatusCommandOutput,
} from "./commands/GetChannelMessageStatusCommand";
import {
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "./commands/GetMessagingSessionEndpointCommand";
import { ListChannelBansCommandInput, ListChannelBansCommandOutput } from "./commands/ListChannelBansCommand";
import { ListChannelFlowsCommandInput, ListChannelFlowsCommandOutput } from "./commands/ListChannelFlowsCommand";
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
import {
  ListChannelsAssociatedWithChannelFlowCommandInput,
  ListChannelsAssociatedWithChannelFlowCommandOutput,
} from "./commands/ListChannelsAssociatedWithChannelFlowCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import {
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "./commands/ListChannelsModeratedByAppInstanceUserCommand";
import { ListSubChannelsCommandInput, ListSubChannelsCommandOutput } from "./commands/ListSubChannelsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutChannelMembershipPreferencesCommandInput,
  PutChannelMembershipPreferencesCommandOutput,
} from "./commands/PutChannelMembershipPreferencesCommand";
import {
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "./commands/RedactChannelMessageCommand";
import { SearchChannelsCommandInput, SearchChannelsCommandOutput } from "./commands/SearchChannelsCommand";
import { SendChannelMessageCommandInput, SendChannelMessageCommandOutput } from "./commands/SendChannelMessageCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { UpdateChannelFlowCommandInput, UpdateChannelFlowCommandOutput } from "./commands/UpdateChannelFlowCommand";
import {
  UpdateChannelMessageCommandInput,
  UpdateChannelMessageCommandOutput,
} from "./commands/UpdateChannelMessageCommand";
import {
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
} from "./commands/UpdateChannelReadMarkerCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateChannelFlowCommandInput
  | BatchCreateChannelMembershipCommandInput
  | ChannelFlowCallbackCommandInput
  | CreateChannelBanCommandInput
  | CreateChannelCommandInput
  | CreateChannelFlowCommandInput
  | CreateChannelMembershipCommandInput
  | CreateChannelModeratorCommandInput
  | DeleteChannelBanCommandInput
  | DeleteChannelCommandInput
  | DeleteChannelFlowCommandInput
  | DeleteChannelMembershipCommandInput
  | DeleteChannelMessageCommandInput
  | DeleteChannelModeratorCommandInput
  | DescribeChannelBanCommandInput
  | DescribeChannelCommandInput
  | DescribeChannelFlowCommandInput
  | DescribeChannelMembershipCommandInput
  | DescribeChannelMembershipForAppInstanceUserCommandInput
  | DescribeChannelModeratedByAppInstanceUserCommandInput
  | DescribeChannelModeratorCommandInput
  | DisassociateChannelFlowCommandInput
  | GetChannelMembershipPreferencesCommandInput
  | GetChannelMessageCommandInput
  | GetChannelMessageStatusCommandInput
  | GetMessagingSessionEndpointCommandInput
  | ListChannelBansCommandInput
  | ListChannelFlowsCommandInput
  | ListChannelMembershipsCommandInput
  | ListChannelMembershipsForAppInstanceUserCommandInput
  | ListChannelMessagesCommandInput
  | ListChannelModeratorsCommandInput
  | ListChannelsAssociatedWithChannelFlowCommandInput
  | ListChannelsCommandInput
  | ListChannelsModeratedByAppInstanceUserCommandInput
  | ListSubChannelsCommandInput
  | ListTagsForResourceCommandInput
  | PutChannelMembershipPreferencesCommandInput
  | RedactChannelMessageCommandInput
  | SearchChannelsCommandInput
  | SendChannelMessageCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateChannelCommandInput
  | UpdateChannelFlowCommandInput
  | UpdateChannelMessageCommandInput
  | UpdateChannelReadMarkerCommandInput;

export type ServiceOutputTypes =
  | AssociateChannelFlowCommandOutput
  | BatchCreateChannelMembershipCommandOutput
  | ChannelFlowCallbackCommandOutput
  | CreateChannelBanCommandOutput
  | CreateChannelCommandOutput
  | CreateChannelFlowCommandOutput
  | CreateChannelMembershipCommandOutput
  | CreateChannelModeratorCommandOutput
  | DeleteChannelBanCommandOutput
  | DeleteChannelCommandOutput
  | DeleteChannelFlowCommandOutput
  | DeleteChannelMembershipCommandOutput
  | DeleteChannelMessageCommandOutput
  | DeleteChannelModeratorCommandOutput
  | DescribeChannelBanCommandOutput
  | DescribeChannelCommandOutput
  | DescribeChannelFlowCommandOutput
  | DescribeChannelMembershipCommandOutput
  | DescribeChannelMembershipForAppInstanceUserCommandOutput
  | DescribeChannelModeratedByAppInstanceUserCommandOutput
  | DescribeChannelModeratorCommandOutput
  | DisassociateChannelFlowCommandOutput
  | GetChannelMembershipPreferencesCommandOutput
  | GetChannelMessageCommandOutput
  | GetChannelMessageStatusCommandOutput
  | GetMessagingSessionEndpointCommandOutput
  | ListChannelBansCommandOutput
  | ListChannelFlowsCommandOutput
  | ListChannelMembershipsCommandOutput
  | ListChannelMembershipsForAppInstanceUserCommandOutput
  | ListChannelMessagesCommandOutput
  | ListChannelModeratorsCommandOutput
  | ListChannelsAssociatedWithChannelFlowCommandOutput
  | ListChannelsCommandOutput
  | ListChannelsModeratedByAppInstanceUserCommandOutput
  | ListSubChannelsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutChannelMembershipPreferencesCommandOutput
  | RedactChannelMessageCommandOutput
  | SearchChannelsCommandOutput
  | SendChannelMessageCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateChannelCommandOutput
  | UpdateChannelFlowCommandOutput
  | UpdateChannelMessageCommandOutput
  | UpdateChannelReadMarkerCommandOutput;

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

type ChimeSDKMessagingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ChimeSDKMessagingClient class constructor that set the region, credentials and other options.
 */
export interface ChimeSDKMessagingClientConfig extends ChimeSDKMessagingClientConfigType {}

type ChimeSDKMessagingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ChimeSDKMessagingClient class. This is resolved and normalized from the {@link ChimeSDKMessagingClientConfig | constructor configuration interface}.
 */
export interface ChimeSDKMessagingClientResolvedConfig extends ChimeSDKMessagingClientResolvedConfigType {}

/**
 * <p>The Amazon Chime SDK Messaging APIs in this section allow software developers to send
 *          and receive messages in custom messaging applications. These APIs depend on the frameworks
 *          provided by the Amazon Chime SDK Identity APIs. For more information about the messaging
 *          APIs, see <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Messaging.html">Amazon Chime SDK messaging</a>.</p>
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
