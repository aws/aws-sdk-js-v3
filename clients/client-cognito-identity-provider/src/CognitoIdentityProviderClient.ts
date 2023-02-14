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
import { AwsAuthInputConfig, AwsAuthResolvedConfig, resolveAwsAuthConfig } from "@aws-sdk/middleware-signing";
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
  AddCustomAttributesCommandInput,
  AddCustomAttributesCommandOutput,
} from "./commands/AddCustomAttributesCommand";
import {
  AdminAddUserToGroupCommandInput,
  AdminAddUserToGroupCommandOutput,
} from "./commands/AdminAddUserToGroupCommand";
import { AdminConfirmSignUpCommandInput, AdminConfirmSignUpCommandOutput } from "./commands/AdminConfirmSignUpCommand";
import { AdminCreateUserCommandInput, AdminCreateUserCommandOutput } from "./commands/AdminCreateUserCommand";
import {
  AdminDeleteUserAttributesCommandInput,
  AdminDeleteUserAttributesCommandOutput,
} from "./commands/AdminDeleteUserAttributesCommand";
import { AdminDeleteUserCommandInput, AdminDeleteUserCommandOutput } from "./commands/AdminDeleteUserCommand";
import {
  AdminDisableProviderForUserCommandInput,
  AdminDisableProviderForUserCommandOutput,
} from "./commands/AdminDisableProviderForUserCommand";
import { AdminDisableUserCommandInput, AdminDisableUserCommandOutput } from "./commands/AdminDisableUserCommand";
import { AdminEnableUserCommandInput, AdminEnableUserCommandOutput } from "./commands/AdminEnableUserCommand";
import { AdminForgetDeviceCommandInput, AdminForgetDeviceCommandOutput } from "./commands/AdminForgetDeviceCommand";
import { AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput } from "./commands/AdminGetDeviceCommand";
import { AdminGetUserCommandInput, AdminGetUserCommandOutput } from "./commands/AdminGetUserCommand";
import { AdminInitiateAuthCommandInput, AdminInitiateAuthCommandOutput } from "./commands/AdminInitiateAuthCommand";
import {
  AdminLinkProviderForUserCommandInput,
  AdminLinkProviderForUserCommandOutput,
} from "./commands/AdminLinkProviderForUserCommand";
import { AdminListDevicesCommandInput, AdminListDevicesCommandOutput } from "./commands/AdminListDevicesCommand";
import {
  AdminListGroupsForUserCommandInput,
  AdminListGroupsForUserCommandOutput,
} from "./commands/AdminListGroupsForUserCommand";
import {
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput,
} from "./commands/AdminListUserAuthEventsCommand";
import {
  AdminRemoveUserFromGroupCommandInput,
  AdminRemoveUserFromGroupCommandOutput,
} from "./commands/AdminRemoveUserFromGroupCommand";
import {
  AdminResetUserPasswordCommandInput,
  AdminResetUserPasswordCommandOutput,
} from "./commands/AdminResetUserPasswordCommand";
import {
  AdminRespondToAuthChallengeCommandInput,
  AdminRespondToAuthChallengeCommandOutput,
} from "./commands/AdminRespondToAuthChallengeCommand";
import {
  AdminSetUserMFAPreferenceCommandInput,
  AdminSetUserMFAPreferenceCommandOutput,
} from "./commands/AdminSetUserMFAPreferenceCommand";
import {
  AdminSetUserPasswordCommandInput,
  AdminSetUserPasswordCommandOutput,
} from "./commands/AdminSetUserPasswordCommand";
import {
  AdminSetUserSettingsCommandInput,
  AdminSetUserSettingsCommandOutput,
} from "./commands/AdminSetUserSettingsCommand";
import {
  AdminUpdateAuthEventFeedbackCommandInput,
  AdminUpdateAuthEventFeedbackCommandOutput,
} from "./commands/AdminUpdateAuthEventFeedbackCommand";
import {
  AdminUpdateDeviceStatusCommandInput,
  AdminUpdateDeviceStatusCommandOutput,
} from "./commands/AdminUpdateDeviceStatusCommand";
import {
  AdminUpdateUserAttributesCommandInput,
  AdminUpdateUserAttributesCommandOutput,
} from "./commands/AdminUpdateUserAttributesCommand";
import {
  AdminUserGlobalSignOutCommandInput,
  AdminUserGlobalSignOutCommandOutput,
} from "./commands/AdminUserGlobalSignOutCommand";
import {
  AssociateSoftwareTokenCommandInput,
  AssociateSoftwareTokenCommandOutput,
} from "./commands/AssociateSoftwareTokenCommand";
import { ChangePasswordCommandInput, ChangePasswordCommandOutput } from "./commands/ChangePasswordCommand";
import { ConfirmDeviceCommandInput, ConfirmDeviceCommandOutput } from "./commands/ConfirmDeviceCommand";
import {
  ConfirmForgotPasswordCommandInput,
  ConfirmForgotPasswordCommandOutput,
} from "./commands/ConfirmForgotPasswordCommand";
import { ConfirmSignUpCommandInput, ConfirmSignUpCommandOutput } from "./commands/ConfirmSignUpCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "./commands/CreateIdentityProviderCommand";
import {
  CreateResourceServerCommandInput,
  CreateResourceServerCommandOutput,
} from "./commands/CreateResourceServerCommand";
import {
  CreateUserImportJobCommandInput,
  CreateUserImportJobCommandOutput,
} from "./commands/CreateUserImportJobCommand";
import {
  CreateUserPoolClientCommandInput,
  CreateUserPoolClientCommandOutput,
} from "./commands/CreateUserPoolClientCommand";
import { CreateUserPoolCommandInput, CreateUserPoolCommandOutput } from "./commands/CreateUserPoolCommand";
import {
  CreateUserPoolDomainCommandInput,
  CreateUserPoolDomainCommandOutput,
} from "./commands/CreateUserPoolDomainCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "./commands/DeleteIdentityProviderCommand";
import {
  DeleteResourceServerCommandInput,
  DeleteResourceServerCommandOutput,
} from "./commands/DeleteResourceServerCommand";
import {
  DeleteUserAttributesCommandInput,
  DeleteUserAttributesCommandOutput,
} from "./commands/DeleteUserAttributesCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserPoolClientCommandInput,
  DeleteUserPoolClientCommandOutput,
} from "./commands/DeleteUserPoolClientCommand";
import { DeleteUserPoolCommandInput, DeleteUserPoolCommandOutput } from "./commands/DeleteUserPoolCommand";
import {
  DeleteUserPoolDomainCommandInput,
  DeleteUserPoolDomainCommandOutput,
} from "./commands/DeleteUserPoolDomainCommand";
import {
  DescribeIdentityProviderCommandInput,
  DescribeIdentityProviderCommandOutput,
} from "./commands/DescribeIdentityProviderCommand";
import {
  DescribeResourceServerCommandInput,
  DescribeResourceServerCommandOutput,
} from "./commands/DescribeResourceServerCommand";
import {
  DescribeRiskConfigurationCommandInput,
  DescribeRiskConfigurationCommandOutput,
} from "./commands/DescribeRiskConfigurationCommand";
import {
  DescribeUserImportJobCommandInput,
  DescribeUserImportJobCommandOutput,
} from "./commands/DescribeUserImportJobCommand";
import {
  DescribeUserPoolClientCommandInput,
  DescribeUserPoolClientCommandOutput,
} from "./commands/DescribeUserPoolClientCommand";
import { DescribeUserPoolCommandInput, DescribeUserPoolCommandOutput } from "./commands/DescribeUserPoolCommand";
import {
  DescribeUserPoolDomainCommandInput,
  DescribeUserPoolDomainCommandOutput,
} from "./commands/DescribeUserPoolDomainCommand";
import { ForgetDeviceCommandInput, ForgetDeviceCommandOutput } from "./commands/ForgetDeviceCommand";
import { ForgotPasswordCommandInput, ForgotPasswordCommandOutput } from "./commands/ForgotPasswordCommand";
import { GetCSVHeaderCommandInput, GetCSVHeaderCommandOutput } from "./commands/GetCSVHeaderCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import {
  GetIdentityProviderByIdentifierCommandInput,
  GetIdentityProviderByIdentifierCommandOutput,
} from "./commands/GetIdentityProviderByIdentifierCommand";
import {
  GetSigningCertificateCommandInput,
  GetSigningCertificateCommandOutput,
} from "./commands/GetSigningCertificateCommand";
import { GetUICustomizationCommandInput, GetUICustomizationCommandOutput } from "./commands/GetUICustomizationCommand";
import {
  GetUserAttributeVerificationCodeCommandInput,
  GetUserAttributeVerificationCodeCommandOutput,
} from "./commands/GetUserAttributeVerificationCodeCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import {
  GetUserPoolMfaConfigCommandInput,
  GetUserPoolMfaConfigCommandOutput,
} from "./commands/GetUserPoolMfaConfigCommand";
import { GlobalSignOutCommandInput, GlobalSignOutCommandOutput } from "./commands/GlobalSignOutCommand";
import { InitiateAuthCommandInput, InitiateAuthCommandOutput } from "./commands/InitiateAuthCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "./commands/ListIdentityProvidersCommand";
import {
  ListResourceServersCommandInput,
  ListResourceServersCommandOutput,
} from "./commands/ListResourceServersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUserImportJobsCommandInput, ListUserImportJobsCommandOutput } from "./commands/ListUserImportJobsCommand";
import {
  ListUserPoolClientsCommandInput,
  ListUserPoolClientsCommandOutput,
} from "./commands/ListUserPoolClientsCommand";
import { ListUserPoolsCommandInput, ListUserPoolsCommandOutput } from "./commands/ListUserPoolsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { ListUsersInGroupCommandInput, ListUsersInGroupCommandOutput } from "./commands/ListUsersInGroupCommand";
import {
  ResendConfirmationCodeCommandInput,
  ResendConfirmationCodeCommandOutput,
} from "./commands/ResendConfirmationCodeCommand";
import {
  RespondToAuthChallengeCommandInput,
  RespondToAuthChallengeCommandOutput,
} from "./commands/RespondToAuthChallengeCommand";
import { RevokeTokenCommandInput, RevokeTokenCommandOutput } from "./commands/RevokeTokenCommand";
import {
  SetRiskConfigurationCommandInput,
  SetRiskConfigurationCommandOutput,
} from "./commands/SetRiskConfigurationCommand";
import { SetUICustomizationCommandInput, SetUICustomizationCommandOutput } from "./commands/SetUICustomizationCommand";
import {
  SetUserMFAPreferenceCommandInput,
  SetUserMFAPreferenceCommandOutput,
} from "./commands/SetUserMFAPreferenceCommand";
import {
  SetUserPoolMfaConfigCommandInput,
  SetUserPoolMfaConfigCommandOutput,
} from "./commands/SetUserPoolMfaConfigCommand";
import { SetUserSettingsCommandInput, SetUserSettingsCommandOutput } from "./commands/SetUserSettingsCommand";
import { SignUpCommandInput, SignUpCommandOutput } from "./commands/SignUpCommand";
import { StartUserImportJobCommandInput, StartUserImportJobCommandOutput } from "./commands/StartUserImportJobCommand";
import { StopUserImportJobCommandInput, StopUserImportJobCommandOutput } from "./commands/StopUserImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAuthEventFeedbackCommandInput,
  UpdateAuthEventFeedbackCommandOutput,
} from "./commands/UpdateAuthEventFeedbackCommand";
import { UpdateDeviceStatusCommandInput, UpdateDeviceStatusCommandOutput } from "./commands/UpdateDeviceStatusCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "./commands/UpdateIdentityProviderCommand";
import {
  UpdateResourceServerCommandInput,
  UpdateResourceServerCommandOutput,
} from "./commands/UpdateResourceServerCommand";
import {
  UpdateUserAttributesCommandInput,
  UpdateUserAttributesCommandOutput,
} from "./commands/UpdateUserAttributesCommand";
import {
  UpdateUserPoolClientCommandInput,
  UpdateUserPoolClientCommandOutput,
} from "./commands/UpdateUserPoolClientCommand";
import { UpdateUserPoolCommandInput, UpdateUserPoolCommandOutput } from "./commands/UpdateUserPoolCommand";
import {
  UpdateUserPoolDomainCommandInput,
  UpdateUserPoolDomainCommandOutput,
} from "./commands/UpdateUserPoolDomainCommand";
import {
  VerifySoftwareTokenCommandInput,
  VerifySoftwareTokenCommandOutput,
} from "./commands/VerifySoftwareTokenCommand";
import {
  VerifyUserAttributeCommandInput,
  VerifyUserAttributeCommandOutput,
} from "./commands/VerifyUserAttributeCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AddCustomAttributesCommandInput
  | AdminAddUserToGroupCommandInput
  | AdminConfirmSignUpCommandInput
  | AdminCreateUserCommandInput
  | AdminDeleteUserAttributesCommandInput
  | AdminDeleteUserCommandInput
  | AdminDisableProviderForUserCommandInput
  | AdminDisableUserCommandInput
  | AdminEnableUserCommandInput
  | AdminForgetDeviceCommandInput
  | AdminGetDeviceCommandInput
  | AdminGetUserCommandInput
  | AdminInitiateAuthCommandInput
  | AdminLinkProviderForUserCommandInput
  | AdminListDevicesCommandInput
  | AdminListGroupsForUserCommandInput
  | AdminListUserAuthEventsCommandInput
  | AdminRemoveUserFromGroupCommandInput
  | AdminResetUserPasswordCommandInput
  | AdminRespondToAuthChallengeCommandInput
  | AdminSetUserMFAPreferenceCommandInput
  | AdminSetUserPasswordCommandInput
  | AdminSetUserSettingsCommandInput
  | AdminUpdateAuthEventFeedbackCommandInput
  | AdminUpdateDeviceStatusCommandInput
  | AdminUpdateUserAttributesCommandInput
  | AdminUserGlobalSignOutCommandInput
  | AssociateSoftwareTokenCommandInput
  | ChangePasswordCommandInput
  | ConfirmDeviceCommandInput
  | ConfirmForgotPasswordCommandInput
  | ConfirmSignUpCommandInput
  | CreateGroupCommandInput
  | CreateIdentityProviderCommandInput
  | CreateResourceServerCommandInput
  | CreateUserImportJobCommandInput
  | CreateUserPoolClientCommandInput
  | CreateUserPoolCommandInput
  | CreateUserPoolDomainCommandInput
  | DeleteGroupCommandInput
  | DeleteIdentityProviderCommandInput
  | DeleteResourceServerCommandInput
  | DeleteUserAttributesCommandInput
  | DeleteUserCommandInput
  | DeleteUserPoolClientCommandInput
  | DeleteUserPoolCommandInput
  | DeleteUserPoolDomainCommandInput
  | DescribeIdentityProviderCommandInput
  | DescribeResourceServerCommandInput
  | DescribeRiskConfigurationCommandInput
  | DescribeUserImportJobCommandInput
  | DescribeUserPoolClientCommandInput
  | DescribeUserPoolCommandInput
  | DescribeUserPoolDomainCommandInput
  | ForgetDeviceCommandInput
  | ForgotPasswordCommandInput
  | GetCSVHeaderCommandInput
  | GetDeviceCommandInput
  | GetGroupCommandInput
  | GetIdentityProviderByIdentifierCommandInput
  | GetSigningCertificateCommandInput
  | GetUICustomizationCommandInput
  | GetUserAttributeVerificationCodeCommandInput
  | GetUserCommandInput
  | GetUserPoolMfaConfigCommandInput
  | GlobalSignOutCommandInput
  | InitiateAuthCommandInput
  | ListDevicesCommandInput
  | ListGroupsCommandInput
  | ListIdentityProvidersCommandInput
  | ListResourceServersCommandInput
  | ListTagsForResourceCommandInput
  | ListUserImportJobsCommandInput
  | ListUserPoolClientsCommandInput
  | ListUserPoolsCommandInput
  | ListUsersCommandInput
  | ListUsersInGroupCommandInput
  | ResendConfirmationCodeCommandInput
  | RespondToAuthChallengeCommandInput
  | RevokeTokenCommandInput
  | SetRiskConfigurationCommandInput
  | SetUICustomizationCommandInput
  | SetUserMFAPreferenceCommandInput
  | SetUserPoolMfaConfigCommandInput
  | SetUserSettingsCommandInput
  | SignUpCommandInput
  | StartUserImportJobCommandInput
  | StopUserImportJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAuthEventFeedbackCommandInput
  | UpdateDeviceStatusCommandInput
  | UpdateGroupCommandInput
  | UpdateIdentityProviderCommandInput
  | UpdateResourceServerCommandInput
  | UpdateUserAttributesCommandInput
  | UpdateUserPoolClientCommandInput
  | UpdateUserPoolCommandInput
  | UpdateUserPoolDomainCommandInput
  | VerifySoftwareTokenCommandInput
  | VerifyUserAttributeCommandInput;

export type ServiceOutputTypes =
  | AddCustomAttributesCommandOutput
  | AdminAddUserToGroupCommandOutput
  | AdminConfirmSignUpCommandOutput
  | AdminCreateUserCommandOutput
  | AdminDeleteUserAttributesCommandOutput
  | AdminDeleteUserCommandOutput
  | AdminDisableProviderForUserCommandOutput
  | AdminDisableUserCommandOutput
  | AdminEnableUserCommandOutput
  | AdminForgetDeviceCommandOutput
  | AdminGetDeviceCommandOutput
  | AdminGetUserCommandOutput
  | AdminInitiateAuthCommandOutput
  | AdminLinkProviderForUserCommandOutput
  | AdminListDevicesCommandOutput
  | AdminListGroupsForUserCommandOutput
  | AdminListUserAuthEventsCommandOutput
  | AdminRemoveUserFromGroupCommandOutput
  | AdminResetUserPasswordCommandOutput
  | AdminRespondToAuthChallengeCommandOutput
  | AdminSetUserMFAPreferenceCommandOutput
  | AdminSetUserPasswordCommandOutput
  | AdminSetUserSettingsCommandOutput
  | AdminUpdateAuthEventFeedbackCommandOutput
  | AdminUpdateDeviceStatusCommandOutput
  | AdminUpdateUserAttributesCommandOutput
  | AdminUserGlobalSignOutCommandOutput
  | AssociateSoftwareTokenCommandOutput
  | ChangePasswordCommandOutput
  | ConfirmDeviceCommandOutput
  | ConfirmForgotPasswordCommandOutput
  | ConfirmSignUpCommandOutput
  | CreateGroupCommandOutput
  | CreateIdentityProviderCommandOutput
  | CreateResourceServerCommandOutput
  | CreateUserImportJobCommandOutput
  | CreateUserPoolClientCommandOutput
  | CreateUserPoolCommandOutput
  | CreateUserPoolDomainCommandOutput
  | DeleteGroupCommandOutput
  | DeleteIdentityProviderCommandOutput
  | DeleteResourceServerCommandOutput
  | DeleteUserAttributesCommandOutput
  | DeleteUserCommandOutput
  | DeleteUserPoolClientCommandOutput
  | DeleteUserPoolCommandOutput
  | DeleteUserPoolDomainCommandOutput
  | DescribeIdentityProviderCommandOutput
  | DescribeResourceServerCommandOutput
  | DescribeRiskConfigurationCommandOutput
  | DescribeUserImportJobCommandOutput
  | DescribeUserPoolClientCommandOutput
  | DescribeUserPoolCommandOutput
  | DescribeUserPoolDomainCommandOutput
  | ForgetDeviceCommandOutput
  | ForgotPasswordCommandOutput
  | GetCSVHeaderCommandOutput
  | GetDeviceCommandOutput
  | GetGroupCommandOutput
  | GetIdentityProviderByIdentifierCommandOutput
  | GetSigningCertificateCommandOutput
  | GetUICustomizationCommandOutput
  | GetUserAttributeVerificationCodeCommandOutput
  | GetUserCommandOutput
  | GetUserPoolMfaConfigCommandOutput
  | GlobalSignOutCommandOutput
  | InitiateAuthCommandOutput
  | ListDevicesCommandOutput
  | ListGroupsCommandOutput
  | ListIdentityProvidersCommandOutput
  | ListResourceServersCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUserImportJobsCommandOutput
  | ListUserPoolClientsCommandOutput
  | ListUserPoolsCommandOutput
  | ListUsersCommandOutput
  | ListUsersInGroupCommandOutput
  | ResendConfirmationCodeCommandOutput
  | RespondToAuthChallengeCommandOutput
  | RevokeTokenCommandOutput
  | SetRiskConfigurationCommandOutput
  | SetUICustomizationCommandOutput
  | SetUserMFAPreferenceCommandOutput
  | SetUserPoolMfaConfigCommandOutput
  | SetUserSettingsCommandOutput
  | SignUpCommandOutput
  | StartUserImportJobCommandOutput
  | StopUserImportJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAuthEventFeedbackCommandOutput
  | UpdateDeviceStatusCommandOutput
  | UpdateGroupCommandOutput
  | UpdateIdentityProviderCommandOutput
  | UpdateResourceServerCommandOutput
  | UpdateUserAttributesCommandOutput
  | UpdateUserPoolClientCommandOutput
  | UpdateUserPoolCommandOutput
  | UpdateUserPoolDomainCommandOutput
  | VerifySoftwareTokenCommandOutput
  | VerifyUserAttributeCommandOutput;

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

type CognitoIdentityProviderClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of CognitoIdentityProviderClient class constructor that set the region, credentials and other options.
 */
export interface CognitoIdentityProviderClientConfig extends CognitoIdentityProviderClientConfigType {}

type CognitoIdentityProviderClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of CognitoIdentityProviderClient class. This is resolved and normalized from the {@link CognitoIdentityProviderClientConfig | constructor configuration interface}.
 */
export interface CognitoIdentityProviderClientResolvedConfig extends CognitoIdentityProviderClientResolvedConfigType {}

/**
 * <p>Using the Amazon Cognito user pools API, you can create a user pool to manage directories and
 *             users. You can authenticate a user to obtain tokens related to user identity and access
 *             policies.</p>
 *         <p>This API reference provides information about user pools in Amazon Cognito user pools.</p>
 *         <p>For more information, see the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html">Amazon Cognito
 *                 Documentation</a>.</p>
 */
export class CognitoIdentityProviderClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CognitoIdentityProviderClientResolvedConfig
> {
  /**
   * The resolved configuration of CognitoIdentityProviderClient class. This is resolved and normalized from the {@link CognitoIdentityProviderClientConfig | constructor configuration interface}.
   */
  readonly config: CognitoIdentityProviderClientResolvedConfig;

  constructor(configuration: CognitoIdentityProviderClientConfig) {
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
