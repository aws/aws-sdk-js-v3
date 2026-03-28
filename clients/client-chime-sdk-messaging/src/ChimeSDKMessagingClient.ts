// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultChimeSDKMessagingHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateChannelFlowCommandInput,
  AssociateChannelFlowCommandOutput,
} from "./commands/AssociateChannelFlowCommand";
import type {
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "./commands/BatchCreateChannelMembershipCommand";
import type {
  ChannelFlowCallbackCommandInput,
  ChannelFlowCallbackCommandOutput,
} from "./commands/ChannelFlowCallbackCommand";
import type { CreateChannelBanCommandInput, CreateChannelBanCommandOutput } from "./commands/CreateChannelBanCommand";
import type { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import type {
  CreateChannelFlowCommandInput,
  CreateChannelFlowCommandOutput,
} from "./commands/CreateChannelFlowCommand";
import type {
  CreateChannelMembershipCommandInput,
  CreateChannelMembershipCommandOutput,
} from "./commands/CreateChannelMembershipCommand";
import type {
  CreateChannelModeratorCommandInput,
  CreateChannelModeratorCommandOutput,
} from "./commands/CreateChannelModeratorCommand";
import type { DeleteChannelBanCommandInput, DeleteChannelBanCommandOutput } from "./commands/DeleteChannelBanCommand";
import type { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import type {
  DeleteChannelFlowCommandInput,
  DeleteChannelFlowCommandOutput,
} from "./commands/DeleteChannelFlowCommand";
import type {
  DeleteChannelMembershipCommandInput,
  DeleteChannelMembershipCommandOutput,
} from "./commands/DeleteChannelMembershipCommand";
import type {
  DeleteChannelMessageCommandInput,
  DeleteChannelMessageCommandOutput,
} from "./commands/DeleteChannelMessageCommand";
import type {
  DeleteChannelModeratorCommandInput,
  DeleteChannelModeratorCommandOutput,
} from "./commands/DeleteChannelModeratorCommand";
import type {
  DeleteMessagingStreamingConfigurationsCommandInput,
  DeleteMessagingStreamingConfigurationsCommandOutput,
} from "./commands/DeleteMessagingStreamingConfigurationsCommand";
import type {
  DescribeChannelBanCommandInput,
  DescribeChannelBanCommandOutput,
} from "./commands/DescribeChannelBanCommand";
import type { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import type {
  DescribeChannelFlowCommandInput,
  DescribeChannelFlowCommandOutput,
} from "./commands/DescribeChannelFlowCommand";
import type {
  DescribeChannelMembershipCommandInput,
  DescribeChannelMembershipCommandOutput,
} from "./commands/DescribeChannelMembershipCommand";
import type {
  DescribeChannelMembershipForAppInstanceUserCommandInput,
  DescribeChannelMembershipForAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelMembershipForAppInstanceUserCommand";
import type {
  DescribeChannelModeratedByAppInstanceUserCommandInput,
  DescribeChannelModeratedByAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelModeratedByAppInstanceUserCommand";
import type {
  DescribeChannelModeratorCommandInput,
  DescribeChannelModeratorCommandOutput,
} from "./commands/DescribeChannelModeratorCommand";
import type {
  DisassociateChannelFlowCommandInput,
  DisassociateChannelFlowCommandOutput,
} from "./commands/DisassociateChannelFlowCommand";
import type {
  GetChannelMembershipPreferencesCommandInput,
  GetChannelMembershipPreferencesCommandOutput,
} from "./commands/GetChannelMembershipPreferencesCommand";
import type {
  GetChannelMessageCommandInput,
  GetChannelMessageCommandOutput,
} from "./commands/GetChannelMessageCommand";
import type {
  GetChannelMessageStatusCommandInput,
  GetChannelMessageStatusCommandOutput,
} from "./commands/GetChannelMessageStatusCommand";
import type {
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "./commands/GetMessagingSessionEndpointCommand";
import type {
  GetMessagingStreamingConfigurationsCommandInput,
  GetMessagingStreamingConfigurationsCommandOutput,
} from "./commands/GetMessagingStreamingConfigurationsCommand";
import type { ListChannelBansCommandInput, ListChannelBansCommandOutput } from "./commands/ListChannelBansCommand";
import type { ListChannelFlowsCommandInput, ListChannelFlowsCommandOutput } from "./commands/ListChannelFlowsCommand";
import type {
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "./commands/ListChannelMembershipsCommand";
import type {
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "./commands/ListChannelMembershipsForAppInstanceUserCommand";
import type {
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "./commands/ListChannelMessagesCommand";
import type {
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "./commands/ListChannelModeratorsCommand";
import type {
  ListChannelsAssociatedWithChannelFlowCommandInput,
  ListChannelsAssociatedWithChannelFlowCommandOutput,
} from "./commands/ListChannelsAssociatedWithChannelFlowCommand";
import type { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import type {
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "./commands/ListChannelsModeratedByAppInstanceUserCommand";
import type { ListSubChannelsCommandInput, ListSubChannelsCommandOutput } from "./commands/ListSubChannelsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  PutChannelExpirationSettingsCommandInput,
  PutChannelExpirationSettingsCommandOutput,
} from "./commands/PutChannelExpirationSettingsCommand";
import type {
  PutChannelMembershipPreferencesCommandInput,
  PutChannelMembershipPreferencesCommandOutput,
} from "./commands/PutChannelMembershipPreferencesCommand";
import type {
  PutMessagingStreamingConfigurationsCommandInput,
  PutMessagingStreamingConfigurationsCommandOutput,
} from "./commands/PutMessagingStreamingConfigurationsCommand";
import type {
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "./commands/RedactChannelMessageCommand";
import type { SearchChannelsCommandInput, SearchChannelsCommandOutput } from "./commands/SearchChannelsCommand";
import type {
  SendChannelMessageCommandInput,
  SendChannelMessageCommandOutput,
} from "./commands/SendChannelMessageCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import type {
  UpdateChannelFlowCommandInput,
  UpdateChannelFlowCommandOutput,
} from "./commands/UpdateChannelFlowCommand";
import type {
  UpdateChannelMessageCommandInput,
  UpdateChannelMessageCommandOutput,
} from "./commands/UpdateChannelMessageCommand";
import type {
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
} from "./commands/UpdateChannelReadMarkerCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
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
  | DeleteMessagingStreamingConfigurationsCommandInput
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
  | GetMessagingStreamingConfigurationsCommandInput
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
  | PutChannelExpirationSettingsCommandInput
  | PutChannelMembershipPreferencesCommandInput
  | PutMessagingStreamingConfigurationsCommandInput
  | RedactChannelMessageCommandInput
  | SearchChannelsCommandInput
  | SendChannelMessageCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateChannelCommandInput
  | UpdateChannelFlowCommandInput
  | UpdateChannelMessageCommandInput
  | UpdateChannelReadMarkerCommandInput;

/**
 * @public
 */
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
  | DeleteMessagingStreamingConfigurationsCommandOutput
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
  | GetMessagingStreamingConfigurationsCommandOutput
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
  | PutChannelExpirationSettingsCommandOutput
  | PutChannelMembershipPreferencesCommandOutput
  | PutMessagingStreamingConfigurationsCommandOutput
  | RedactChannelMessageCommandOutput
  | SearchChannelsCommandOutput
  | SendChannelMessageCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateChannelCommandOutput
  | UpdateChannelFlowCommandOutput
  | UpdateChannelMessageCommandOutput
  | UpdateChannelReadMarkerCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

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
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

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
export type ChimeSDKMessagingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of ChimeSDKMessagingClient class constructor that set the region, credentials and other options.
 */
export interface ChimeSDKMessagingClientConfig extends ChimeSDKMessagingClientConfigType {}

/**
 * @public
 */
export type ChimeSDKMessagingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of ChimeSDKMessagingClient class. This is resolved and normalized from the {@link ChimeSDKMessagingClientConfig | constructor configuration interface}.
 */
export interface ChimeSDKMessagingClientResolvedConfig extends ChimeSDKMessagingClientResolvedConfigType {}

/**
 * <p>The Amazon Chime SDK messaging APIs in this section allow software developers to send
 *          and receive messages in custom messaging applications. These APIs depend on the frameworks
 *          provided by the Amazon Chime SDK identity APIs. For more information about the messaging
 *          APIs, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_Operations_Amazon_Chime_SDK_Messaging.html">Amazon Chime SDK messaging</a>.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<ChimeSDKMessagingClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultChimeSDKMessagingHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ChimeSDKMessagingClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
