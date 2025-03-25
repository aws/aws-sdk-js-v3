// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultChimeHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociatePhoneNumberWithUserCommandInput,
  AssociatePhoneNumberWithUserCommandOutput,
} from "./commands/AssociatePhoneNumberWithUserCommand";
import {
  AssociateSigninDelegateGroupsWithAccountCommandInput,
  AssociateSigninDelegateGroupsWithAccountCommandOutput,
} from "./commands/AssociateSigninDelegateGroupsWithAccountCommand";
import {
  BatchCreateRoomMembershipCommandInput,
  BatchCreateRoomMembershipCommandOutput,
} from "./commands/BatchCreateRoomMembershipCommand";
import {
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput,
} from "./commands/BatchDeletePhoneNumberCommand";
import { BatchSuspendUserCommandInput, BatchSuspendUserCommandOutput } from "./commands/BatchSuspendUserCommand";
import { BatchUnsuspendUserCommandInput, BatchUnsuspendUserCommandOutput } from "./commands/BatchUnsuspendUserCommand";
import {
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
} from "./commands/BatchUpdatePhoneNumberCommand";
import { BatchUpdateUserCommandInput, BatchUpdateUserCommandOutput } from "./commands/BatchUpdateUserCommand";
import { CreateAccountCommandInput, CreateAccountCommandOutput } from "./commands/CreateAccountCommand";
import { CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand";
import {
  CreateMeetingDialOutCommandInput,
  CreateMeetingDialOutCommandOutput,
} from "./commands/CreateMeetingDialOutCommand";
import {
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
} from "./commands/CreatePhoneNumberOrderCommand";
import { CreateRoomCommandInput, CreateRoomCommandOutput } from "./commands/CreateRoomCommand";
import {
  CreateRoomMembershipCommandInput,
  CreateRoomMembershipCommandOutput,
} from "./commands/CreateRoomMembershipCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteAccountCommandInput, DeleteAccountCommandOutput } from "./commands/DeleteAccountCommand";
import {
  DeleteEventsConfigurationCommandInput,
  DeleteEventsConfigurationCommandOutput,
} from "./commands/DeleteEventsConfigurationCommand";
import { DeletePhoneNumberCommandInput, DeletePhoneNumberCommandOutput } from "./commands/DeletePhoneNumberCommand";
import { DeleteRoomCommandInput, DeleteRoomCommandOutput } from "./commands/DeleteRoomCommand";
import {
  DeleteRoomMembershipCommandInput,
  DeleteRoomMembershipCommandOutput,
} from "./commands/DeleteRoomMembershipCommand";
import {
  DisassociatePhoneNumberFromUserCommandInput,
  DisassociatePhoneNumberFromUserCommandOutput,
} from "./commands/DisassociatePhoneNumberFromUserCommand";
import {
  DisassociateSigninDelegateGroupsFromAccountCommandInput,
  DisassociateSigninDelegateGroupsFromAccountCommandOutput,
} from "./commands/DisassociateSigninDelegateGroupsFromAccountCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand";
import { GetBotCommandInput, GetBotCommandOutput } from "./commands/GetBotCommand";
import {
  GetEventsConfigurationCommandInput,
  GetEventsConfigurationCommandOutput,
} from "./commands/GetEventsConfigurationCommand";
import { GetGlobalSettingsCommandInput, GetGlobalSettingsCommandOutput } from "./commands/GetGlobalSettingsCommand";
import { GetPhoneNumberCommandInput, GetPhoneNumberCommandOutput } from "./commands/GetPhoneNumberCommand";
import {
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
} from "./commands/GetPhoneNumberOrderCommand";
import {
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
} from "./commands/GetPhoneNumberSettingsCommand";
import {
  GetRetentionSettingsCommandInput,
  GetRetentionSettingsCommandOutput,
} from "./commands/GetRetentionSettingsCommand";
import { GetRoomCommandInput, GetRoomCommandOutput } from "./commands/GetRoomCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import { GetUserSettingsCommandInput, GetUserSettingsCommandOutput } from "./commands/GetUserSettingsCommand";
import { InviteUsersCommandInput, InviteUsersCommandOutput } from "./commands/InviteUsersCommand";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "./commands/ListAccountsCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import {
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "./commands/ListPhoneNumberOrdersCommand";
import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "./commands/ListPhoneNumbersCommand";
import {
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
} from "./commands/ListRoomMembershipsCommand";
import { ListRoomsCommandInput, ListRoomsCommandOutput } from "./commands/ListRoomsCommand";
import {
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
} from "./commands/ListSupportedPhoneNumberCountriesCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { LogoutUserCommandInput, LogoutUserCommandOutput } from "./commands/LogoutUserCommand";
import {
  PutEventsConfigurationCommandInput,
  PutEventsConfigurationCommandOutput,
} from "./commands/PutEventsConfigurationCommand";
import {
  PutRetentionSettingsCommandInput,
  PutRetentionSettingsCommandOutput,
} from "./commands/PutRetentionSettingsCommand";
import {
  RedactConversationMessageCommandInput,
  RedactConversationMessageCommandOutput,
} from "./commands/RedactConversationMessageCommand";
import { RedactRoomMessageCommandInput, RedactRoomMessageCommandOutput } from "./commands/RedactRoomMessageCommand";
import {
  RegenerateSecurityTokenCommandInput,
  RegenerateSecurityTokenCommandOutput,
} from "./commands/RegenerateSecurityTokenCommand";
import { ResetPersonalPINCommandInput, ResetPersonalPINCommandOutput } from "./commands/ResetPersonalPINCommand";
import { RestorePhoneNumberCommandInput, RestorePhoneNumberCommandOutput } from "./commands/RestorePhoneNumberCommand";
import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import { UpdateAccountCommandInput, UpdateAccountCommandOutput } from "./commands/UpdateAccountCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import { UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "./commands/UpdatePhoneNumberCommand";
import {
  UpdatePhoneNumberSettingsCommandInput,
  UpdatePhoneNumberSettingsCommandOutput,
} from "./commands/UpdatePhoneNumberSettingsCommand";
import { UpdateRoomCommandInput, UpdateRoomCommandOutput } from "./commands/UpdateRoomCommand";
import {
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
} from "./commands/UpdateRoomMembershipCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { UpdateUserSettingsCommandInput, UpdateUserSettingsCommandOutput } from "./commands/UpdateUserSettingsCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociatePhoneNumberWithUserCommandInput
  | AssociateSigninDelegateGroupsWithAccountCommandInput
  | BatchCreateRoomMembershipCommandInput
  | BatchDeletePhoneNumberCommandInput
  | BatchSuspendUserCommandInput
  | BatchUnsuspendUserCommandInput
  | BatchUpdatePhoneNumberCommandInput
  | BatchUpdateUserCommandInput
  | CreateAccountCommandInput
  | CreateBotCommandInput
  | CreateMeetingDialOutCommandInput
  | CreatePhoneNumberOrderCommandInput
  | CreateRoomCommandInput
  | CreateRoomMembershipCommandInput
  | CreateUserCommandInput
  | DeleteAccountCommandInput
  | DeleteEventsConfigurationCommandInput
  | DeletePhoneNumberCommandInput
  | DeleteRoomCommandInput
  | DeleteRoomMembershipCommandInput
  | DisassociatePhoneNumberFromUserCommandInput
  | DisassociateSigninDelegateGroupsFromAccountCommandInput
  | GetAccountCommandInput
  | GetAccountSettingsCommandInput
  | GetBotCommandInput
  | GetEventsConfigurationCommandInput
  | GetGlobalSettingsCommandInput
  | GetPhoneNumberCommandInput
  | GetPhoneNumberOrderCommandInput
  | GetPhoneNumberSettingsCommandInput
  | GetRetentionSettingsCommandInput
  | GetRoomCommandInput
  | GetUserCommandInput
  | GetUserSettingsCommandInput
  | InviteUsersCommandInput
  | ListAccountsCommandInput
  | ListBotsCommandInput
  | ListPhoneNumberOrdersCommandInput
  | ListPhoneNumbersCommandInput
  | ListRoomMembershipsCommandInput
  | ListRoomsCommandInput
  | ListSupportedPhoneNumberCountriesCommandInput
  | ListUsersCommandInput
  | LogoutUserCommandInput
  | PutEventsConfigurationCommandInput
  | PutRetentionSettingsCommandInput
  | RedactConversationMessageCommandInput
  | RedactRoomMessageCommandInput
  | RegenerateSecurityTokenCommandInput
  | ResetPersonalPINCommandInput
  | RestorePhoneNumberCommandInput
  | SearchAvailablePhoneNumbersCommandInput
  | UpdateAccountCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateBotCommandInput
  | UpdateGlobalSettingsCommandInput
  | UpdatePhoneNumberCommandInput
  | UpdatePhoneNumberSettingsCommandInput
  | UpdateRoomCommandInput
  | UpdateRoomMembershipCommandInput
  | UpdateUserCommandInput
  | UpdateUserSettingsCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociatePhoneNumberWithUserCommandOutput
  | AssociateSigninDelegateGroupsWithAccountCommandOutput
  | BatchCreateRoomMembershipCommandOutput
  | BatchDeletePhoneNumberCommandOutput
  | BatchSuspendUserCommandOutput
  | BatchUnsuspendUserCommandOutput
  | BatchUpdatePhoneNumberCommandOutput
  | BatchUpdateUserCommandOutput
  | CreateAccountCommandOutput
  | CreateBotCommandOutput
  | CreateMeetingDialOutCommandOutput
  | CreatePhoneNumberOrderCommandOutput
  | CreateRoomCommandOutput
  | CreateRoomMembershipCommandOutput
  | CreateUserCommandOutput
  | DeleteAccountCommandOutput
  | DeleteEventsConfigurationCommandOutput
  | DeletePhoneNumberCommandOutput
  | DeleteRoomCommandOutput
  | DeleteRoomMembershipCommandOutput
  | DisassociatePhoneNumberFromUserCommandOutput
  | DisassociateSigninDelegateGroupsFromAccountCommandOutput
  | GetAccountCommandOutput
  | GetAccountSettingsCommandOutput
  | GetBotCommandOutput
  | GetEventsConfigurationCommandOutput
  | GetGlobalSettingsCommandOutput
  | GetPhoneNumberCommandOutput
  | GetPhoneNumberOrderCommandOutput
  | GetPhoneNumberSettingsCommandOutput
  | GetRetentionSettingsCommandOutput
  | GetRoomCommandOutput
  | GetUserCommandOutput
  | GetUserSettingsCommandOutput
  | InviteUsersCommandOutput
  | ListAccountsCommandOutput
  | ListBotsCommandOutput
  | ListPhoneNumberOrdersCommandOutput
  | ListPhoneNumbersCommandOutput
  | ListRoomMembershipsCommandOutput
  | ListRoomsCommandOutput
  | ListSupportedPhoneNumberCountriesCommandOutput
  | ListUsersCommandOutput
  | LogoutUserCommandOutput
  | PutEventsConfigurationCommandOutput
  | PutRetentionSettingsCommandOutput
  | RedactConversationMessageCommandOutput
  | RedactRoomMessageCommandOutput
  | RegenerateSecurityTokenCommandOutput
  | ResetPersonalPINCommandOutput
  | RestorePhoneNumberCommandOutput
  | SearchAvailablePhoneNumbersCommandOutput
  | UpdateAccountCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateBotCommandOutput
  | UpdateGlobalSettingsCommandOutput
  | UpdatePhoneNumberCommandOutput
  | UpdatePhoneNumberSettingsCommandOutput
  | UpdateRoomCommandOutput
  | UpdateRoomMembershipCommandOutput
  | UpdateUserCommandOutput
  | UpdateUserSettingsCommandOutput;

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
export type ChimeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ChimeClient class constructor that set the region, credentials and other options.
 */
export interface ChimeClientConfig extends ChimeClientConfigType {}

/**
 * @public
 */
export type ChimeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ChimeClient class. This is resolved and normalized from the {@link ChimeClientConfig | constructor configuration interface}.
 */
export interface ChimeClientResolvedConfig extends ChimeClientResolvedConfigType {}

/**
 * <important>
 *             <p>
 *                <b>Most of these APIs are no longer supported and will not be updated.</b> We recommend using the latest versions in the
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/welcome.html">Amazon Chime SDK API reference</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest versions requires migrating to dedicated namespaces. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *          <p>The Amazon Chime application programming interface (API) is designed so administrators can
 *             perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice
 *             Connectors. This guide provides detailed information about the Amazon Chime API,
 *             including operations, types, inputs and outputs, and error codes.</p>
 *          <p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls for Amazon Chime. We recommend using an AWS SDK or the
 *             AWS CLI. The page for each API action contains a <i>See Also</i> section that includes links to information about using the action with a language-specific
 *             AWS SDK or the AWS CLI.</p>
 *          <dl>
 *             <dt>Using an AWS SDK</dt>
 *             <dd>
 *                <p>
 *                         You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the
 *                         <a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.
 *                     </p>
 *             </dd>
 *             <dt>Using the AWS CLI</dt>
 *             <dd>
 *                <p>Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see
 *                         <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line Interface</a>
 *                         in the <i>AWS Command Line Interface User Guide</i>. For a list of available Amazon Chime commands, see the
 *                         <a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the
 *                         <i>AWS CLI Command Reference</i>.
 *                     </p>
 *             </dd>
 *             <dt>Using REST APIs</dt>
 *             <dd>
 *                <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports Signature Version 4. For more information, see
 *                         <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>
 *                         in the <i>Amazon Web Services General Reference</i>.</p>
 *                <p>When making REST API calls, use the service name <code>chime</code> and REST endpoint <code>https://service.chime.aws.amazon.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see
 *             <a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a>
 *             in the <i>Amazon Chime Administration Guide</i>.</p>
 *
 * @deprecated This namespace has been deprecated
 * @public
 */
export class ChimeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ChimeClientResolvedConfig
> {
  /**
   * The resolved configuration of ChimeClient class. This is resolved and normalized from the {@link ChimeClientConfig | constructor configuration interface}.
   */
  readonly config: ChimeClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ChimeClientConfig>) {
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
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultChimeHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ChimeClientResolvedConfig) =>
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
