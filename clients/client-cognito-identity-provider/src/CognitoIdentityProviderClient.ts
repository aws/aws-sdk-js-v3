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
  defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
import {
  CompleteWebAuthnRegistrationCommandInput,
  CompleteWebAuthnRegistrationCommandOutput,
} from "./commands/CompleteWebAuthnRegistrationCommand";
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
  CreateManagedLoginBrandingCommandInput,
  CreateManagedLoginBrandingCommandOutput,
} from "./commands/CreateManagedLoginBrandingCommand";
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
  DeleteManagedLoginBrandingCommandInput,
  DeleteManagedLoginBrandingCommandOutput,
} from "./commands/DeleteManagedLoginBrandingCommand";
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
  DeleteWebAuthnCredentialCommandInput,
  DeleteWebAuthnCredentialCommandOutput,
} from "./commands/DeleteWebAuthnCredentialCommand";
import {
  DescribeIdentityProviderCommandInput,
  DescribeIdentityProviderCommandOutput,
} from "./commands/DescribeIdentityProviderCommand";
import {
  DescribeManagedLoginBrandingByClientCommandInput,
  DescribeManagedLoginBrandingByClientCommandOutput,
} from "./commands/DescribeManagedLoginBrandingByClientCommand";
import {
  DescribeManagedLoginBrandingCommandInput,
  DescribeManagedLoginBrandingCommandOutput,
} from "./commands/DescribeManagedLoginBrandingCommand";
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
  GetLogDeliveryConfigurationCommandInput,
  GetLogDeliveryConfigurationCommandOutput,
} from "./commands/GetLogDeliveryConfigurationCommand";
import {
  GetSigningCertificateCommandInput,
  GetSigningCertificateCommandOutput,
} from "./commands/GetSigningCertificateCommand";
import {
  GetTokensFromRefreshTokenCommandInput,
  GetTokensFromRefreshTokenCommandOutput,
} from "./commands/GetTokensFromRefreshTokenCommand";
import { GetUICustomizationCommandInput, GetUICustomizationCommandOutput } from "./commands/GetUICustomizationCommand";
import {
  GetUserAttributeVerificationCodeCommandInput,
  GetUserAttributeVerificationCodeCommandOutput,
} from "./commands/GetUserAttributeVerificationCodeCommand";
import { GetUserAuthFactorsCommandInput, GetUserAuthFactorsCommandOutput } from "./commands/GetUserAuthFactorsCommand";
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
  ListWebAuthnCredentialsCommandInput,
  ListWebAuthnCredentialsCommandOutput,
} from "./commands/ListWebAuthnCredentialsCommand";
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
  SetLogDeliveryConfigurationCommandInput,
  SetLogDeliveryConfigurationCommandOutput,
} from "./commands/SetLogDeliveryConfigurationCommand";
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
import {
  StartWebAuthnRegistrationCommandInput,
  StartWebAuthnRegistrationCommandOutput,
} from "./commands/StartWebAuthnRegistrationCommand";
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
  UpdateManagedLoginBrandingCommandInput,
  UpdateManagedLoginBrandingCommandOutput,
} from "./commands/UpdateManagedLoginBrandingCommand";
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
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
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
  | CompleteWebAuthnRegistrationCommandInput
  | ConfirmDeviceCommandInput
  | ConfirmForgotPasswordCommandInput
  | ConfirmSignUpCommandInput
  | CreateGroupCommandInput
  | CreateIdentityProviderCommandInput
  | CreateManagedLoginBrandingCommandInput
  | CreateResourceServerCommandInput
  | CreateUserImportJobCommandInput
  | CreateUserPoolClientCommandInput
  | CreateUserPoolCommandInput
  | CreateUserPoolDomainCommandInput
  | DeleteGroupCommandInput
  | DeleteIdentityProviderCommandInput
  | DeleteManagedLoginBrandingCommandInput
  | DeleteResourceServerCommandInput
  | DeleteUserAttributesCommandInput
  | DeleteUserCommandInput
  | DeleteUserPoolClientCommandInput
  | DeleteUserPoolCommandInput
  | DeleteUserPoolDomainCommandInput
  | DeleteWebAuthnCredentialCommandInput
  | DescribeIdentityProviderCommandInput
  | DescribeManagedLoginBrandingByClientCommandInput
  | DescribeManagedLoginBrandingCommandInput
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
  | GetLogDeliveryConfigurationCommandInput
  | GetSigningCertificateCommandInput
  | GetTokensFromRefreshTokenCommandInput
  | GetUICustomizationCommandInput
  | GetUserAttributeVerificationCodeCommandInput
  | GetUserAuthFactorsCommandInput
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
  | ListWebAuthnCredentialsCommandInput
  | ResendConfirmationCodeCommandInput
  | RespondToAuthChallengeCommandInput
  | RevokeTokenCommandInput
  | SetLogDeliveryConfigurationCommandInput
  | SetRiskConfigurationCommandInput
  | SetUICustomizationCommandInput
  | SetUserMFAPreferenceCommandInput
  | SetUserPoolMfaConfigCommandInput
  | SetUserSettingsCommandInput
  | SignUpCommandInput
  | StartUserImportJobCommandInput
  | StartWebAuthnRegistrationCommandInput
  | StopUserImportJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAuthEventFeedbackCommandInput
  | UpdateDeviceStatusCommandInput
  | UpdateGroupCommandInput
  | UpdateIdentityProviderCommandInput
  | UpdateManagedLoginBrandingCommandInput
  | UpdateResourceServerCommandInput
  | UpdateUserAttributesCommandInput
  | UpdateUserPoolClientCommandInput
  | UpdateUserPoolCommandInput
  | UpdateUserPoolDomainCommandInput
  | VerifySoftwareTokenCommandInput
  | VerifyUserAttributeCommandInput;

/**
 * @public
 */
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
  | CompleteWebAuthnRegistrationCommandOutput
  | ConfirmDeviceCommandOutput
  | ConfirmForgotPasswordCommandOutput
  | ConfirmSignUpCommandOutput
  | CreateGroupCommandOutput
  | CreateIdentityProviderCommandOutput
  | CreateManagedLoginBrandingCommandOutput
  | CreateResourceServerCommandOutput
  | CreateUserImportJobCommandOutput
  | CreateUserPoolClientCommandOutput
  | CreateUserPoolCommandOutput
  | CreateUserPoolDomainCommandOutput
  | DeleteGroupCommandOutput
  | DeleteIdentityProviderCommandOutput
  | DeleteManagedLoginBrandingCommandOutput
  | DeleteResourceServerCommandOutput
  | DeleteUserAttributesCommandOutput
  | DeleteUserCommandOutput
  | DeleteUserPoolClientCommandOutput
  | DeleteUserPoolCommandOutput
  | DeleteUserPoolDomainCommandOutput
  | DeleteWebAuthnCredentialCommandOutput
  | DescribeIdentityProviderCommandOutput
  | DescribeManagedLoginBrandingByClientCommandOutput
  | DescribeManagedLoginBrandingCommandOutput
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
  | GetLogDeliveryConfigurationCommandOutput
  | GetSigningCertificateCommandOutput
  | GetTokensFromRefreshTokenCommandOutput
  | GetUICustomizationCommandOutput
  | GetUserAttributeVerificationCodeCommandOutput
  | GetUserAuthFactorsCommandOutput
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
  | ListWebAuthnCredentialsCommandOutput
  | ResendConfirmationCodeCommandOutput
  | RespondToAuthChallengeCommandOutput
  | RevokeTokenCommandOutput
  | SetLogDeliveryConfigurationCommandOutput
  | SetRiskConfigurationCommandOutput
  | SetUICustomizationCommandOutput
  | SetUserMFAPreferenceCommandOutput
  | SetUserPoolMfaConfigCommandOutput
  | SetUserSettingsCommandOutput
  | SignUpCommandOutput
  | StartUserImportJobCommandOutput
  | StartWebAuthnRegistrationCommandOutput
  | StopUserImportJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAuthEventFeedbackCommandOutput
  | UpdateDeviceStatusCommandOutput
  | UpdateGroupCommandOutput
  | UpdateIdentityProviderCommandOutput
  | UpdateManagedLoginBrandingCommandOutput
  | UpdateResourceServerCommandOutput
  | UpdateUserAttributesCommandOutput
  | UpdateUserPoolClientCommandOutput
  | UpdateUserPoolCommandOutput
  | UpdateUserPoolDomainCommandOutput
  | VerifySoftwareTokenCommandOutput
  | VerifyUserAttributeCommandOutput;

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
export type CognitoIdentityProviderClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CognitoIdentityProviderClient class constructor that set the region, credentials and other options.
 */
export interface CognitoIdentityProviderClientConfig extends CognitoIdentityProviderClientConfigType {}

/**
 * @public
 */
export type CognitoIdentityProviderClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CognitoIdentityProviderClient class. This is resolved and normalized from the {@link CognitoIdentityProviderClientConfig | constructor configuration interface}.
 */
export interface CognitoIdentityProviderClientResolvedConfig extends CognitoIdentityProviderClientResolvedConfigType {}

/**
 * <p>With the Amazon Cognito user pools API, you can configure user pools and authenticate users. To
 *             authenticate users from third-party identity providers (IdPs) in this API, you can
 *                 <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html">link IdP users to native user profiles</a>. Learn more
 *             about the authentication and authorization of federated users at <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html">Adding user pool sign-in through a third party</a> and in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-userpools-server-contract-reference.html">User pool federation endpoints and managed login reference</a>.</p>
 *          <p>This API reference provides detailed information about API operations and object types
 *             in Amazon Cognito.</p>
 *          <p>Along with resource management operations, the Amazon Cognito user pools API includes classes
 *             of operations and authorization models for client-side and server-side authentication of
 *             users. You can interact with operations in the Amazon Cognito user pools API as any of the
 *             following subjects.</p>
 *          <ol>
 *             <li>
 *                <p>An administrator who wants to configure user pools, app clients, users,
 *                     groups, or other user pool functions.</p>
 *             </li>
 *             <li>
 *                <p>A server-side app, like a web application, that wants to use its Amazon Web Services
 *                     privileges to manage, authenticate, or authorize a user.</p>
 *             </li>
 *             <li>
 *                <p>A client-side app, like a mobile app, that wants to make unauthenticated
 *                     requests to manage, authenticate, or authorize a user.</p>
 *             </li>
 *          </ol>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-public-server-side.html#user-pools-API-operations">Understanding API, OIDC, and managed login pages
 *                 authentication</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
 *          <p>With your Amazon Web Services SDK, you can build the logic to support operational flows in every use
 *             case for this API. You can also make direct REST API requests to <a href="https://docs.aws.amazon.com/general/latest/gr/cognito_identity.html#cognito_identity_your_user_pools_region">Amazon Cognito user pools service endpoints</a>. The following links can get you started
 *             with the <code>CognitoIdentityProvider</code> client in supported Amazon Web Services SDKs.</p>
 *          <p>To get started with an Amazon Web Services SDK, see <a href="http://aws.amazon.com/developer/tools/">Tools to Build on Amazon Web Services</a>. For example actions and scenarios, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/service_code_examples_cognito-identity-provider.html">Code examples for Amazon Cognito Identity Provider using Amazon Web Services
 *                 SDKs</a>.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<CognitoIdentityProviderClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CognitoIdentityProviderClientResolvedConfig) =>
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
