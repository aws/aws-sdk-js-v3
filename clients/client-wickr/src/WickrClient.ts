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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultWickrHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { BatchCreateUserCommandInput, BatchCreateUserCommandOutput } from "./commands/BatchCreateUserCommand";
import { BatchDeleteUserCommandInput, BatchDeleteUserCommandOutput } from "./commands/BatchDeleteUserCommand";
import {
  BatchLookupUserUnameCommandInput,
  BatchLookupUserUnameCommandOutput,
} from "./commands/BatchLookupUserUnameCommand";
import { BatchReinviteUserCommandInput, BatchReinviteUserCommandOutput } from "./commands/BatchReinviteUserCommand";
import {
  BatchResetDevicesForUserCommandInput,
  BatchResetDevicesForUserCommandOutput,
} from "./commands/BatchResetDevicesForUserCommand";
import {
  BatchToggleUserSuspendStatusCommandInput,
  BatchToggleUserSuspendStatusCommandOutput,
} from "./commands/BatchToggleUserSuspendStatusCommand";
import { CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand";
import {
  CreateDataRetentionBotChallengeCommandInput,
  CreateDataRetentionBotChallengeCommandOutput,
} from "./commands/CreateDataRetentionBotChallengeCommand";
import {
  CreateDataRetentionBotCommandInput,
  CreateDataRetentionBotCommandOutput,
} from "./commands/CreateDataRetentionBotCommand";
import { CreateNetworkCommandInput, CreateNetworkCommandOutput } from "./commands/CreateNetworkCommand";
import {
  CreateSecurityGroupCommandInput,
  CreateSecurityGroupCommandOutput,
} from "./commands/CreateSecurityGroupCommand";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand";
import {
  DeleteDataRetentionBotCommandInput,
  DeleteDataRetentionBotCommandOutput,
} from "./commands/DeleteDataRetentionBotCommand";
import { DeleteNetworkCommandInput, DeleteNetworkCommandOutput } from "./commands/DeleteNetworkCommand";
import {
  DeleteSecurityGroupCommandInput,
  DeleteSecurityGroupCommandOutput,
} from "./commands/DeleteSecurityGroupCommand";
import { GetBotCommandInput, GetBotCommandOutput } from "./commands/GetBotCommand";
import { GetBotsCountCommandInput, GetBotsCountCommandOutput } from "./commands/GetBotsCountCommand";
import {
  GetDataRetentionBotCommandInput,
  GetDataRetentionBotCommandOutput,
} from "./commands/GetDataRetentionBotCommand";
import {
  GetGuestUserHistoryCountCommandInput,
  GetGuestUserHistoryCountCommandOutput,
} from "./commands/GetGuestUserHistoryCountCommand";
import { GetNetworkCommandInput, GetNetworkCommandOutput } from "./commands/GetNetworkCommand";
import { GetNetworkSettingsCommandInput, GetNetworkSettingsCommandOutput } from "./commands/GetNetworkSettingsCommand";
import { GetOidcInfoCommandInput, GetOidcInfoCommandOutput } from "./commands/GetOidcInfoCommand";
import { GetSecurityGroupCommandInput, GetSecurityGroupCommandOutput } from "./commands/GetSecurityGroupCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import { GetUsersCountCommandInput, GetUsersCountCommandOutput } from "./commands/GetUsersCountCommand";
import {
  ListBlockedGuestUsersCommandInput,
  ListBlockedGuestUsersCommandOutput,
} from "./commands/ListBlockedGuestUsersCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import { ListDevicesForUserCommandInput, ListDevicesForUserCommandOutput } from "./commands/ListDevicesForUserCommand";
import { ListGuestUsersCommandInput, ListGuestUsersCommandOutput } from "./commands/ListGuestUsersCommand";
import { ListNetworksCommandInput, ListNetworksCommandOutput } from "./commands/ListNetworksCommand";
import { ListSecurityGroupsCommandInput, ListSecurityGroupsCommandOutput } from "./commands/ListSecurityGroupsCommand";
import {
  ListSecurityGroupUsersCommandInput,
  ListSecurityGroupUsersCommandOutput,
} from "./commands/ListSecurityGroupUsersCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { RegisterOidcConfigCommandInput, RegisterOidcConfigCommandOutput } from "./commands/RegisterOidcConfigCommand";
import {
  RegisterOidcConfigTestCommandInput,
  RegisterOidcConfigTestCommandOutput,
} from "./commands/RegisterOidcConfigTestCommand";
import { UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand";
import {
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput,
} from "./commands/UpdateDataRetentionCommand";
import { UpdateGuestUserCommandInput, UpdateGuestUserCommandOutput } from "./commands/UpdateGuestUserCommand";
import { UpdateNetworkCommandInput, UpdateNetworkCommandOutput } from "./commands/UpdateNetworkCommand";
import {
  UpdateNetworkSettingsCommandInput,
  UpdateNetworkSettingsCommandOutput,
} from "./commands/UpdateNetworkSettingsCommand";
import {
  UpdateSecurityGroupCommandInput,
  UpdateSecurityGroupCommandOutput,
} from "./commands/UpdateSecurityGroupCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchCreateUserCommandInput
  | BatchDeleteUserCommandInput
  | BatchLookupUserUnameCommandInput
  | BatchReinviteUserCommandInput
  | BatchResetDevicesForUserCommandInput
  | BatchToggleUserSuspendStatusCommandInput
  | CreateBotCommandInput
  | CreateDataRetentionBotChallengeCommandInput
  | CreateDataRetentionBotCommandInput
  | CreateNetworkCommandInput
  | CreateSecurityGroupCommandInput
  | DeleteBotCommandInput
  | DeleteDataRetentionBotCommandInput
  | DeleteNetworkCommandInput
  | DeleteSecurityGroupCommandInput
  | GetBotCommandInput
  | GetBotsCountCommandInput
  | GetDataRetentionBotCommandInput
  | GetGuestUserHistoryCountCommandInput
  | GetNetworkCommandInput
  | GetNetworkSettingsCommandInput
  | GetOidcInfoCommandInput
  | GetSecurityGroupCommandInput
  | GetUserCommandInput
  | GetUsersCountCommandInput
  | ListBlockedGuestUsersCommandInput
  | ListBotsCommandInput
  | ListDevicesForUserCommandInput
  | ListGuestUsersCommandInput
  | ListNetworksCommandInput
  | ListSecurityGroupUsersCommandInput
  | ListSecurityGroupsCommandInput
  | ListUsersCommandInput
  | RegisterOidcConfigCommandInput
  | RegisterOidcConfigTestCommandInput
  | UpdateBotCommandInput
  | UpdateDataRetentionCommandInput
  | UpdateGuestUserCommandInput
  | UpdateNetworkCommandInput
  | UpdateNetworkSettingsCommandInput
  | UpdateSecurityGroupCommandInput
  | UpdateUserCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchCreateUserCommandOutput
  | BatchDeleteUserCommandOutput
  | BatchLookupUserUnameCommandOutput
  | BatchReinviteUserCommandOutput
  | BatchResetDevicesForUserCommandOutput
  | BatchToggleUserSuspendStatusCommandOutput
  | CreateBotCommandOutput
  | CreateDataRetentionBotChallengeCommandOutput
  | CreateDataRetentionBotCommandOutput
  | CreateNetworkCommandOutput
  | CreateSecurityGroupCommandOutput
  | DeleteBotCommandOutput
  | DeleteDataRetentionBotCommandOutput
  | DeleteNetworkCommandOutput
  | DeleteSecurityGroupCommandOutput
  | GetBotCommandOutput
  | GetBotsCountCommandOutput
  | GetDataRetentionBotCommandOutput
  | GetGuestUserHistoryCountCommandOutput
  | GetNetworkCommandOutput
  | GetNetworkSettingsCommandOutput
  | GetOidcInfoCommandOutput
  | GetSecurityGroupCommandOutput
  | GetUserCommandOutput
  | GetUsersCountCommandOutput
  | ListBlockedGuestUsersCommandOutput
  | ListBotsCommandOutput
  | ListDevicesForUserCommandOutput
  | ListGuestUsersCommandOutput
  | ListNetworksCommandOutput
  | ListSecurityGroupUsersCommandOutput
  | ListSecurityGroupsCommandOutput
  | ListUsersCommandOutput
  | RegisterOidcConfigCommandOutput
  | RegisterOidcConfigTestCommandOutput
  | UpdateBotCommandOutput
  | UpdateDataRetentionCommandOutput
  | UpdateGuestUserCommandOutput
  | UpdateNetworkCommandOutput
  | UpdateNetworkSettingsCommandOutput
  | UpdateSecurityGroupCommandOutput
  | UpdateUserCommandOutput;

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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
export type WickrClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of WickrClient class constructor that set the region, credentials and other options.
 */
export interface WickrClientConfig extends WickrClientConfigType {}

/**
 * @public
 */
export type WickrClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of WickrClient class. This is resolved and normalized from the {@link WickrClientConfig | constructor configuration interface}.
 */
export interface WickrClientResolvedConfig extends WickrClientResolvedConfigType {}

/**
 * <p>Welcome to the <i>Amazon Web Services Wickr API Reference</i>.</p> <p>The Amazon Web Services Wickr application programming interface (API) is designed for administrators to perform key tasks, such as creating and managing Amazon Web Services Wickr, networks, users, security groups, bots and more. This guide provides detailed information about the Amazon Web Services Wickr API, including operations, types, inputs and outputs, and error codes. You can use an Amazon Web Services SDK, the Amazon Web Services Command Line Interface (Amazon Web Services CLI, or the REST API to make API calls for Amazon Web Services Wickr. </p> <p> <i>Using Amazon Web Services SDK</i> </p> <p>The SDK clients authenticate your requests by using access keys that you provide. For more information, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/access.html">Authentication and access using Amazon Web Services SDKs and tools</a> in the <i>Amazon Web Services SDKs and Tools Reference Guide</i>. </p> <p> <i>Using Amazon Web Services CLI</i> </p> <p>Use your access keys with the Amazon Web Services CLI to make API calls. For more information about setting up the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html">Getting started with the Amazon Web Services CLI</a> in the <i>Amazon Web Services Command Line Interface User Guide for Version 2</i>. </p> <p> <i>Using REST APIs</i> </p> <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Web Services Wickr supports Signature Version 4. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>. </p> <p>Access and permissions to the APIs can be controlled by Amazon Web Services Identity and Access Management. The managed policy <a href="https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam-awsmanpol.html#security-iam-awsmanpol-AWSWickrFullAccess">Amazon Web ServicesWickrFullAccess</a> grants full administrative permission to the Amazon Web Services Wickr service APIs. For more information on restricting access to specific operations, see <a href="https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html">Identity and access management for Amazon Web Services Wickr </a> in the <i>Amazon Web Services Wickr Administration Guide</i>. </p> <p> <i>Types of Errors</i>:</p> <p>The Amazon Web Services Wickr APIs provide an HTTP interface. HTTP defines ranges of HTTP Status Codes for different types of error responses.</p> <ol> <li> <p>Client errors are indicated by HTTP Status Code class of 4xx</p> </li> <li> <p>Service errors are indicated by HTTP Status Code class of 5xx</p> </li> </ol> <p>In this reference guide, the documentation for each API has an Errors section that includes a brief discussion about HTTP status codes. We recommend looking there as part of your investigation when you get an error.</p>
 * @public
 */
export class WickrClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WickrClientResolvedConfig
> {
  /**
   * The resolved configuration of WickrClient class. This is resolved and normalized from the {@link WickrClientConfig | constructor configuration interface}.
   */
  readonly config: WickrClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<WickrClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultWickrHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: WickrClientResolvedConfig) =>
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
