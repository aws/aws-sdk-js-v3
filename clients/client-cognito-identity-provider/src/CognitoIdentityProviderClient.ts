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
  defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AddCustomAttributesCommandInput,
  AddCustomAttributesCommandOutput,
} from "./commands/AddCustomAttributesCommand";
import type {
  AddUserPoolClientSecretCommandInput,
  AddUserPoolClientSecretCommandOutput,
} from "./commands/AddUserPoolClientSecretCommand";
import type {
  AdminAddUserToGroupCommandInput,
  AdminAddUserToGroupCommandOutput,
} from "./commands/AdminAddUserToGroupCommand";
import type {
  AdminConfirmSignUpCommandInput,
  AdminConfirmSignUpCommandOutput,
} from "./commands/AdminConfirmSignUpCommand";
import type { AdminCreateUserCommandInput, AdminCreateUserCommandOutput } from "./commands/AdminCreateUserCommand";
import type {
  AdminDeleteUserAttributesCommandInput,
  AdminDeleteUserAttributesCommandOutput,
} from "./commands/AdminDeleteUserAttributesCommand";
import type { AdminDeleteUserCommandInput, AdminDeleteUserCommandOutput } from "./commands/AdminDeleteUserCommand";
import type {
  AdminDisableProviderForUserCommandInput,
  AdminDisableProviderForUserCommandOutput,
} from "./commands/AdminDisableProviderForUserCommand";
import type { AdminDisableUserCommandInput, AdminDisableUserCommandOutput } from "./commands/AdminDisableUserCommand";
import type { AdminEnableUserCommandInput, AdminEnableUserCommandOutput } from "./commands/AdminEnableUserCommand";
import type {
  AdminForgetDeviceCommandInput,
  AdminForgetDeviceCommandOutput,
} from "./commands/AdminForgetDeviceCommand";
import type { AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput } from "./commands/AdminGetDeviceCommand";
import type { AdminGetUserCommandInput, AdminGetUserCommandOutput } from "./commands/AdminGetUserCommand";
import type {
  AdminInitiateAuthCommandInput,
  AdminInitiateAuthCommandOutput,
} from "./commands/AdminInitiateAuthCommand";
import type {
  AdminLinkProviderForUserCommandInput,
  AdminLinkProviderForUserCommandOutput,
} from "./commands/AdminLinkProviderForUserCommand";
import type { AdminListDevicesCommandInput, AdminListDevicesCommandOutput } from "./commands/AdminListDevicesCommand";
import type {
  AdminListGroupsForUserCommandInput,
  AdminListGroupsForUserCommandOutput,
} from "./commands/AdminListGroupsForUserCommand";
import type {
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput,
} from "./commands/AdminListUserAuthEventsCommand";
import type {
  AdminRemoveUserFromGroupCommandInput,
  AdminRemoveUserFromGroupCommandOutput,
} from "./commands/AdminRemoveUserFromGroupCommand";
import type {
  AdminResetUserPasswordCommandInput,
  AdminResetUserPasswordCommandOutput,
} from "./commands/AdminResetUserPasswordCommand";
import type {
  AdminRespondToAuthChallengeCommandInput,
  AdminRespondToAuthChallengeCommandOutput,
} from "./commands/AdminRespondToAuthChallengeCommand";
import type {
  AdminSetUserMFAPreferenceCommandInput,
  AdminSetUserMFAPreferenceCommandOutput,
} from "./commands/AdminSetUserMFAPreferenceCommand";
import type {
  AdminSetUserPasswordCommandInput,
  AdminSetUserPasswordCommandOutput,
} from "./commands/AdminSetUserPasswordCommand";
import type {
  AdminSetUserSettingsCommandInput,
  AdminSetUserSettingsCommandOutput,
} from "./commands/AdminSetUserSettingsCommand";
import type {
  AdminUpdateAuthEventFeedbackCommandInput,
  AdminUpdateAuthEventFeedbackCommandOutput,
} from "./commands/AdminUpdateAuthEventFeedbackCommand";
import type {
  AdminUpdateDeviceStatusCommandInput,
  AdminUpdateDeviceStatusCommandOutput,
} from "./commands/AdminUpdateDeviceStatusCommand";
import type {
  AdminUpdateUserAttributesCommandInput,
  AdminUpdateUserAttributesCommandOutput,
} from "./commands/AdminUpdateUserAttributesCommand";
import type {
  AdminUserGlobalSignOutCommandInput,
  AdminUserGlobalSignOutCommandOutput,
} from "./commands/AdminUserGlobalSignOutCommand";
import type {
  AssociateSoftwareTokenCommandInput,
  AssociateSoftwareTokenCommandOutput,
} from "./commands/AssociateSoftwareTokenCommand";
import type { ChangePasswordCommandInput, ChangePasswordCommandOutput } from "./commands/ChangePasswordCommand";
import type {
  CompleteWebAuthnRegistrationCommandInput,
  CompleteWebAuthnRegistrationCommandOutput,
} from "./commands/CompleteWebAuthnRegistrationCommand";
import type { ConfirmDeviceCommandInput, ConfirmDeviceCommandOutput } from "./commands/ConfirmDeviceCommand";
import type {
  ConfirmForgotPasswordCommandInput,
  ConfirmForgotPasswordCommandOutput,
} from "./commands/ConfirmForgotPasswordCommand";
import type { ConfirmSignUpCommandInput, ConfirmSignUpCommandOutput } from "./commands/ConfirmSignUpCommand";
import type { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import type {
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "./commands/CreateIdentityProviderCommand";
import type {
  CreateManagedLoginBrandingCommandInput,
  CreateManagedLoginBrandingCommandOutput,
} from "./commands/CreateManagedLoginBrandingCommand";
import type {
  CreateResourceServerCommandInput,
  CreateResourceServerCommandOutput,
} from "./commands/CreateResourceServerCommand";
import type { CreateTermsCommandInput, CreateTermsCommandOutput } from "./commands/CreateTermsCommand";
import type {
  CreateUserImportJobCommandInput,
  CreateUserImportJobCommandOutput,
} from "./commands/CreateUserImportJobCommand";
import type {
  CreateUserPoolClientCommandInput,
  CreateUserPoolClientCommandOutput,
} from "./commands/CreateUserPoolClientCommand";
import type { CreateUserPoolCommandInput, CreateUserPoolCommandOutput } from "./commands/CreateUserPoolCommand";
import type {
  CreateUserPoolDomainCommandInput,
  CreateUserPoolDomainCommandOutput,
} from "./commands/CreateUserPoolDomainCommand";
import type { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import type {
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "./commands/DeleteIdentityProviderCommand";
import type {
  DeleteManagedLoginBrandingCommandInput,
  DeleteManagedLoginBrandingCommandOutput,
} from "./commands/DeleteManagedLoginBrandingCommand";
import type {
  DeleteResourceServerCommandInput,
  DeleteResourceServerCommandOutput,
} from "./commands/DeleteResourceServerCommand";
import type { DeleteTermsCommandInput, DeleteTermsCommandOutput } from "./commands/DeleteTermsCommand";
import type {
  DeleteUserAttributesCommandInput,
  DeleteUserAttributesCommandOutput,
} from "./commands/DeleteUserAttributesCommand";
import type { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import type {
  DeleteUserPoolClientCommandInput,
  DeleteUserPoolClientCommandOutput,
} from "./commands/DeleteUserPoolClientCommand";
import type {
  DeleteUserPoolClientSecretCommandInput,
  DeleteUserPoolClientSecretCommandOutput,
} from "./commands/DeleteUserPoolClientSecretCommand";
import type { DeleteUserPoolCommandInput, DeleteUserPoolCommandOutput } from "./commands/DeleteUserPoolCommand";
import type {
  DeleteUserPoolDomainCommandInput,
  DeleteUserPoolDomainCommandOutput,
} from "./commands/DeleteUserPoolDomainCommand";
import type {
  DeleteWebAuthnCredentialCommandInput,
  DeleteWebAuthnCredentialCommandOutput,
} from "./commands/DeleteWebAuthnCredentialCommand";
import type {
  DescribeIdentityProviderCommandInput,
  DescribeIdentityProviderCommandOutput,
} from "./commands/DescribeIdentityProviderCommand";
import type {
  DescribeManagedLoginBrandingByClientCommandInput,
  DescribeManagedLoginBrandingByClientCommandOutput,
} from "./commands/DescribeManagedLoginBrandingByClientCommand";
import type {
  DescribeManagedLoginBrandingCommandInput,
  DescribeManagedLoginBrandingCommandOutput,
} from "./commands/DescribeManagedLoginBrandingCommand";
import type {
  DescribeResourceServerCommandInput,
  DescribeResourceServerCommandOutput,
} from "./commands/DescribeResourceServerCommand";
import type {
  DescribeRiskConfigurationCommandInput,
  DescribeRiskConfigurationCommandOutput,
} from "./commands/DescribeRiskConfigurationCommand";
import type { DescribeTermsCommandInput, DescribeTermsCommandOutput } from "./commands/DescribeTermsCommand";
import type {
  DescribeUserImportJobCommandInput,
  DescribeUserImportJobCommandOutput,
} from "./commands/DescribeUserImportJobCommand";
import type {
  DescribeUserPoolClientCommandInput,
  DescribeUserPoolClientCommandOutput,
} from "./commands/DescribeUserPoolClientCommand";
import type { DescribeUserPoolCommandInput, DescribeUserPoolCommandOutput } from "./commands/DescribeUserPoolCommand";
import type {
  DescribeUserPoolDomainCommandInput,
  DescribeUserPoolDomainCommandOutput,
} from "./commands/DescribeUserPoolDomainCommand";
import type { ForgetDeviceCommandInput, ForgetDeviceCommandOutput } from "./commands/ForgetDeviceCommand";
import type { ForgotPasswordCommandInput, ForgotPasswordCommandOutput } from "./commands/ForgotPasswordCommand";
import type { GetCSVHeaderCommandInput, GetCSVHeaderCommandOutput } from "./commands/GetCSVHeaderCommand";
import type { GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import type { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import type {
  GetIdentityProviderByIdentifierCommandInput,
  GetIdentityProviderByIdentifierCommandOutput,
} from "./commands/GetIdentityProviderByIdentifierCommand";
import type {
  GetLogDeliveryConfigurationCommandInput,
  GetLogDeliveryConfigurationCommandOutput,
} from "./commands/GetLogDeliveryConfigurationCommand";
import type {
  GetSigningCertificateCommandInput,
  GetSigningCertificateCommandOutput,
} from "./commands/GetSigningCertificateCommand";
import type {
  GetTokensFromRefreshTokenCommandInput,
  GetTokensFromRefreshTokenCommandOutput,
} from "./commands/GetTokensFromRefreshTokenCommand";
import type {
  GetUICustomizationCommandInput,
  GetUICustomizationCommandOutput,
} from "./commands/GetUICustomizationCommand";
import type {
  GetUserAttributeVerificationCodeCommandInput,
  GetUserAttributeVerificationCodeCommandOutput,
} from "./commands/GetUserAttributeVerificationCodeCommand";
import type {
  GetUserAuthFactorsCommandInput,
  GetUserAuthFactorsCommandOutput,
} from "./commands/GetUserAuthFactorsCommand";
import type { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import type {
  GetUserPoolMfaConfigCommandInput,
  GetUserPoolMfaConfigCommandOutput,
} from "./commands/GetUserPoolMfaConfigCommand";
import type { GlobalSignOutCommandInput, GlobalSignOutCommandOutput } from "./commands/GlobalSignOutCommand";
import type { InitiateAuthCommandInput, InitiateAuthCommandOutput } from "./commands/InitiateAuthCommand";
import type { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import type { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import type {
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "./commands/ListIdentityProvidersCommand";
import type {
  ListResourceServersCommandInput,
  ListResourceServersCommandOutput,
} from "./commands/ListResourceServersCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListTermsCommandInput, ListTermsCommandOutput } from "./commands/ListTermsCommand";
import type {
  ListUserImportJobsCommandInput,
  ListUserImportJobsCommandOutput,
} from "./commands/ListUserImportJobsCommand";
import type {
  ListUserPoolClientsCommandInput,
  ListUserPoolClientsCommandOutput,
} from "./commands/ListUserPoolClientsCommand";
import type {
  ListUserPoolClientSecretsCommandInput,
  ListUserPoolClientSecretsCommandOutput,
} from "./commands/ListUserPoolClientSecretsCommand";
import type { ListUserPoolsCommandInput, ListUserPoolsCommandOutput } from "./commands/ListUserPoolsCommand";
import type { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import type { ListUsersInGroupCommandInput, ListUsersInGroupCommandOutput } from "./commands/ListUsersInGroupCommand";
import type {
  ListWebAuthnCredentialsCommandInput,
  ListWebAuthnCredentialsCommandOutput,
} from "./commands/ListWebAuthnCredentialsCommand";
import type {
  ResendConfirmationCodeCommandInput,
  ResendConfirmationCodeCommandOutput,
} from "./commands/ResendConfirmationCodeCommand";
import type {
  RespondToAuthChallengeCommandInput,
  RespondToAuthChallengeCommandOutput,
} from "./commands/RespondToAuthChallengeCommand";
import type { RevokeTokenCommandInput, RevokeTokenCommandOutput } from "./commands/RevokeTokenCommand";
import type {
  SetLogDeliveryConfigurationCommandInput,
  SetLogDeliveryConfigurationCommandOutput,
} from "./commands/SetLogDeliveryConfigurationCommand";
import type {
  SetRiskConfigurationCommandInput,
  SetRiskConfigurationCommandOutput,
} from "./commands/SetRiskConfigurationCommand";
import type {
  SetUICustomizationCommandInput,
  SetUICustomizationCommandOutput,
} from "./commands/SetUICustomizationCommand";
import type {
  SetUserMFAPreferenceCommandInput,
  SetUserMFAPreferenceCommandOutput,
} from "./commands/SetUserMFAPreferenceCommand";
import type {
  SetUserPoolMfaConfigCommandInput,
  SetUserPoolMfaConfigCommandOutput,
} from "./commands/SetUserPoolMfaConfigCommand";
import type { SetUserSettingsCommandInput, SetUserSettingsCommandOutput } from "./commands/SetUserSettingsCommand";
import type { SignUpCommandInput, SignUpCommandOutput } from "./commands/SignUpCommand";
import type {
  StartUserImportJobCommandInput,
  StartUserImportJobCommandOutput,
} from "./commands/StartUserImportJobCommand";
import type {
  StartWebAuthnRegistrationCommandInput,
  StartWebAuthnRegistrationCommandOutput,
} from "./commands/StartWebAuthnRegistrationCommand";
import type {
  StopUserImportJobCommandInput,
  StopUserImportJobCommandOutput,
} from "./commands/StopUserImportJobCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAuthEventFeedbackCommandInput,
  UpdateAuthEventFeedbackCommandOutput,
} from "./commands/UpdateAuthEventFeedbackCommand";
import type {
  UpdateDeviceStatusCommandInput,
  UpdateDeviceStatusCommandOutput,
} from "./commands/UpdateDeviceStatusCommand";
import type { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import type {
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "./commands/UpdateIdentityProviderCommand";
import type {
  UpdateManagedLoginBrandingCommandInput,
  UpdateManagedLoginBrandingCommandOutput,
} from "./commands/UpdateManagedLoginBrandingCommand";
import type {
  UpdateResourceServerCommandInput,
  UpdateResourceServerCommandOutput,
} from "./commands/UpdateResourceServerCommand";
import type { UpdateTermsCommandInput, UpdateTermsCommandOutput } from "./commands/UpdateTermsCommand";
import type {
  UpdateUserAttributesCommandInput,
  UpdateUserAttributesCommandOutput,
} from "./commands/UpdateUserAttributesCommand";
import type {
  UpdateUserPoolClientCommandInput,
  UpdateUserPoolClientCommandOutput,
} from "./commands/UpdateUserPoolClientCommand";
import type { UpdateUserPoolCommandInput, UpdateUserPoolCommandOutput } from "./commands/UpdateUserPoolCommand";
import type {
  UpdateUserPoolDomainCommandInput,
  UpdateUserPoolDomainCommandOutput,
} from "./commands/UpdateUserPoolDomainCommand";
import type {
  VerifySoftwareTokenCommandInput,
  VerifySoftwareTokenCommandOutput,
} from "./commands/VerifySoftwareTokenCommand";
import type {
  VerifyUserAttributeCommandInput,
  VerifyUserAttributeCommandOutput,
} from "./commands/VerifyUserAttributeCommand";
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
  | AddCustomAttributesCommandInput
  | AddUserPoolClientSecretCommandInput
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
  | CreateTermsCommandInput
  | CreateUserImportJobCommandInput
  | CreateUserPoolClientCommandInput
  | CreateUserPoolCommandInput
  | CreateUserPoolDomainCommandInput
  | DeleteGroupCommandInput
  | DeleteIdentityProviderCommandInput
  | DeleteManagedLoginBrandingCommandInput
  | DeleteResourceServerCommandInput
  | DeleteTermsCommandInput
  | DeleteUserAttributesCommandInput
  | DeleteUserCommandInput
  | DeleteUserPoolClientCommandInput
  | DeleteUserPoolClientSecretCommandInput
  | DeleteUserPoolCommandInput
  | DeleteUserPoolDomainCommandInput
  | DeleteWebAuthnCredentialCommandInput
  | DescribeIdentityProviderCommandInput
  | DescribeManagedLoginBrandingByClientCommandInput
  | DescribeManagedLoginBrandingCommandInput
  | DescribeResourceServerCommandInput
  | DescribeRiskConfigurationCommandInput
  | DescribeTermsCommandInput
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
  | ListTermsCommandInput
  | ListUserImportJobsCommandInput
  | ListUserPoolClientSecretsCommandInput
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
  | UpdateTermsCommandInput
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
  | AddUserPoolClientSecretCommandOutput
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
  | CreateTermsCommandOutput
  | CreateUserImportJobCommandOutput
  | CreateUserPoolClientCommandOutput
  | CreateUserPoolCommandOutput
  | CreateUserPoolDomainCommandOutput
  | DeleteGroupCommandOutput
  | DeleteIdentityProviderCommandOutput
  | DeleteManagedLoginBrandingCommandOutput
  | DeleteResourceServerCommandOutput
  | DeleteTermsCommandOutput
  | DeleteUserAttributesCommandOutput
  | DeleteUserCommandOutput
  | DeleteUserPoolClientCommandOutput
  | DeleteUserPoolClientSecretCommandOutput
  | DeleteUserPoolCommandOutput
  | DeleteUserPoolDomainCommandOutput
  | DeleteWebAuthnCredentialCommandOutput
  | DescribeIdentityProviderCommandOutput
  | DescribeManagedLoginBrandingByClientCommandOutput
  | DescribeManagedLoginBrandingCommandOutput
  | DescribeResourceServerCommandOutput
  | DescribeRiskConfigurationCommandOutput
  | DescribeTermsCommandOutput
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
  | ListTermsCommandOutput
  | ListUserImportJobsCommandOutput
  | ListUserPoolClientSecretsCommandOutput
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
  | UpdateTermsCommandOutput
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
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
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
