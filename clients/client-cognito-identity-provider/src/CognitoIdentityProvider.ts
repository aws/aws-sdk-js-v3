// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CognitoIdentityProviderClient, CognitoIdentityProviderClientConfig } from "./CognitoIdentityProviderClient";
import {
  AddCustomAttributesCommand,
  AddCustomAttributesCommandInput,
  AddCustomAttributesCommandOutput,
} from "./commands/AddCustomAttributesCommand";
import {
  AdminAddUserToGroupCommand,
  AdminAddUserToGroupCommandInput,
  AdminAddUserToGroupCommandOutput,
} from "./commands/AdminAddUserToGroupCommand";
import {
  AdminConfirmSignUpCommand,
  AdminConfirmSignUpCommandInput,
  AdminConfirmSignUpCommandOutput,
} from "./commands/AdminConfirmSignUpCommand";
import {
  AdminCreateUserCommand,
  AdminCreateUserCommandInput,
  AdminCreateUserCommandOutput,
} from "./commands/AdminCreateUserCommand";
import {
  AdminDeleteUserAttributesCommand,
  AdminDeleteUserAttributesCommandInput,
  AdminDeleteUserAttributesCommandOutput,
} from "./commands/AdminDeleteUserAttributesCommand";
import {
  AdminDeleteUserCommand,
  AdminDeleteUserCommandInput,
  AdminDeleteUserCommandOutput,
} from "./commands/AdminDeleteUserCommand";
import {
  AdminDisableProviderForUserCommand,
  AdminDisableProviderForUserCommandInput,
  AdminDisableProviderForUserCommandOutput,
} from "./commands/AdminDisableProviderForUserCommand";
import {
  AdminDisableUserCommand,
  AdminDisableUserCommandInput,
  AdminDisableUserCommandOutput,
} from "./commands/AdminDisableUserCommand";
import {
  AdminEnableUserCommand,
  AdminEnableUserCommandInput,
  AdminEnableUserCommandOutput,
} from "./commands/AdminEnableUserCommand";
import {
  AdminForgetDeviceCommand,
  AdminForgetDeviceCommandInput,
  AdminForgetDeviceCommandOutput,
} from "./commands/AdminForgetDeviceCommand";
import {
  AdminGetDeviceCommand,
  AdminGetDeviceCommandInput,
  AdminGetDeviceCommandOutput,
} from "./commands/AdminGetDeviceCommand";
import {
  AdminGetUserCommand,
  AdminGetUserCommandInput,
  AdminGetUserCommandOutput,
} from "./commands/AdminGetUserCommand";
import {
  AdminInitiateAuthCommand,
  AdminInitiateAuthCommandInput,
  AdminInitiateAuthCommandOutput,
} from "./commands/AdminInitiateAuthCommand";
import {
  AdminLinkProviderForUserCommand,
  AdminLinkProviderForUserCommandInput,
  AdminLinkProviderForUserCommandOutput,
} from "./commands/AdminLinkProviderForUserCommand";
import {
  AdminListDevicesCommand,
  AdminListDevicesCommandInput,
  AdminListDevicesCommandOutput,
} from "./commands/AdminListDevicesCommand";
import {
  AdminListGroupsForUserCommand,
  AdminListGroupsForUserCommandInput,
  AdminListGroupsForUserCommandOutput,
} from "./commands/AdminListGroupsForUserCommand";
import {
  AdminListUserAuthEventsCommand,
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput,
} from "./commands/AdminListUserAuthEventsCommand";
import {
  AdminRemoveUserFromGroupCommand,
  AdminRemoveUserFromGroupCommandInput,
  AdminRemoveUserFromGroupCommandOutput,
} from "./commands/AdminRemoveUserFromGroupCommand";
import {
  AdminResetUserPasswordCommand,
  AdminResetUserPasswordCommandInput,
  AdminResetUserPasswordCommandOutput,
} from "./commands/AdminResetUserPasswordCommand";
import {
  AdminRespondToAuthChallengeCommand,
  AdminRespondToAuthChallengeCommandInput,
  AdminRespondToAuthChallengeCommandOutput,
} from "./commands/AdminRespondToAuthChallengeCommand";
import {
  AdminSetUserMFAPreferenceCommand,
  AdminSetUserMFAPreferenceCommandInput,
  AdminSetUserMFAPreferenceCommandOutput,
} from "./commands/AdminSetUserMFAPreferenceCommand";
import {
  AdminSetUserPasswordCommand,
  AdminSetUserPasswordCommandInput,
  AdminSetUserPasswordCommandOutput,
} from "./commands/AdminSetUserPasswordCommand";
import {
  AdminSetUserSettingsCommand,
  AdminSetUserSettingsCommandInput,
  AdminSetUserSettingsCommandOutput,
} from "./commands/AdminSetUserSettingsCommand";
import {
  AdminUpdateAuthEventFeedbackCommand,
  AdminUpdateAuthEventFeedbackCommandInput,
  AdminUpdateAuthEventFeedbackCommandOutput,
} from "./commands/AdminUpdateAuthEventFeedbackCommand";
import {
  AdminUpdateDeviceStatusCommand,
  AdminUpdateDeviceStatusCommandInput,
  AdminUpdateDeviceStatusCommandOutput,
} from "./commands/AdminUpdateDeviceStatusCommand";
import {
  AdminUpdateUserAttributesCommand,
  AdminUpdateUserAttributesCommandInput,
  AdminUpdateUserAttributesCommandOutput,
} from "./commands/AdminUpdateUserAttributesCommand";
import {
  AdminUserGlobalSignOutCommand,
  AdminUserGlobalSignOutCommandInput,
  AdminUserGlobalSignOutCommandOutput,
} from "./commands/AdminUserGlobalSignOutCommand";
import {
  AssociateSoftwareTokenCommand,
  AssociateSoftwareTokenCommandInput,
  AssociateSoftwareTokenCommandOutput,
} from "./commands/AssociateSoftwareTokenCommand";
import {
  ChangePasswordCommand,
  ChangePasswordCommandInput,
  ChangePasswordCommandOutput,
} from "./commands/ChangePasswordCommand";
import {
  CompleteWebAuthnRegistrationCommand,
  CompleteWebAuthnRegistrationCommandInput,
  CompleteWebAuthnRegistrationCommandOutput,
} from "./commands/CompleteWebAuthnRegistrationCommand";
import {
  ConfirmDeviceCommand,
  ConfirmDeviceCommandInput,
  ConfirmDeviceCommandOutput,
} from "./commands/ConfirmDeviceCommand";
import {
  ConfirmForgotPasswordCommand,
  ConfirmForgotPasswordCommandInput,
  ConfirmForgotPasswordCommandOutput,
} from "./commands/ConfirmForgotPasswordCommand";
import {
  ConfirmSignUpCommand,
  ConfirmSignUpCommandInput,
  ConfirmSignUpCommandOutput,
} from "./commands/ConfirmSignUpCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateIdentityProviderCommand,
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "./commands/CreateIdentityProviderCommand";
import {
  CreateManagedLoginBrandingCommand,
  CreateManagedLoginBrandingCommandInput,
  CreateManagedLoginBrandingCommandOutput,
} from "./commands/CreateManagedLoginBrandingCommand";
import {
  CreateResourceServerCommand,
  CreateResourceServerCommandInput,
  CreateResourceServerCommandOutput,
} from "./commands/CreateResourceServerCommand";
import { CreateTermsCommand, CreateTermsCommandInput, CreateTermsCommandOutput } from "./commands/CreateTermsCommand";
import {
  CreateUserImportJobCommand,
  CreateUserImportJobCommandInput,
  CreateUserImportJobCommandOutput,
} from "./commands/CreateUserImportJobCommand";
import {
  CreateUserPoolClientCommand,
  CreateUserPoolClientCommandInput,
  CreateUserPoolClientCommandOutput,
} from "./commands/CreateUserPoolClientCommand";
import {
  CreateUserPoolCommand,
  CreateUserPoolCommandInput,
  CreateUserPoolCommandOutput,
} from "./commands/CreateUserPoolCommand";
import {
  CreateUserPoolDomainCommand,
  CreateUserPoolDomainCommandInput,
  CreateUserPoolDomainCommandOutput,
} from "./commands/CreateUserPoolDomainCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteIdentityProviderCommand,
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "./commands/DeleteIdentityProviderCommand";
import {
  DeleteManagedLoginBrandingCommand,
  DeleteManagedLoginBrandingCommandInput,
  DeleteManagedLoginBrandingCommandOutput,
} from "./commands/DeleteManagedLoginBrandingCommand";
import {
  DeleteResourceServerCommand,
  DeleteResourceServerCommandInput,
  DeleteResourceServerCommandOutput,
} from "./commands/DeleteResourceServerCommand";
import { DeleteTermsCommand, DeleteTermsCommandInput, DeleteTermsCommandOutput } from "./commands/DeleteTermsCommand";
import {
  DeleteUserAttributesCommand,
  DeleteUserAttributesCommandInput,
  DeleteUserAttributesCommandOutput,
} from "./commands/DeleteUserAttributesCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserPoolClientCommand,
  DeleteUserPoolClientCommandInput,
  DeleteUserPoolClientCommandOutput,
} from "./commands/DeleteUserPoolClientCommand";
import {
  DeleteUserPoolCommand,
  DeleteUserPoolCommandInput,
  DeleteUserPoolCommandOutput,
} from "./commands/DeleteUserPoolCommand";
import {
  DeleteUserPoolDomainCommand,
  DeleteUserPoolDomainCommandInput,
  DeleteUserPoolDomainCommandOutput,
} from "./commands/DeleteUserPoolDomainCommand";
import {
  DeleteWebAuthnCredentialCommand,
  DeleteWebAuthnCredentialCommandInput,
  DeleteWebAuthnCredentialCommandOutput,
} from "./commands/DeleteWebAuthnCredentialCommand";
import {
  DescribeIdentityProviderCommand,
  DescribeIdentityProviderCommandInput,
  DescribeIdentityProviderCommandOutput,
} from "./commands/DescribeIdentityProviderCommand";
import {
  DescribeManagedLoginBrandingByClientCommand,
  DescribeManagedLoginBrandingByClientCommandInput,
  DescribeManagedLoginBrandingByClientCommandOutput,
} from "./commands/DescribeManagedLoginBrandingByClientCommand";
import {
  DescribeManagedLoginBrandingCommand,
  DescribeManagedLoginBrandingCommandInput,
  DescribeManagedLoginBrandingCommandOutput,
} from "./commands/DescribeManagedLoginBrandingCommand";
import {
  DescribeResourceServerCommand,
  DescribeResourceServerCommandInput,
  DescribeResourceServerCommandOutput,
} from "./commands/DescribeResourceServerCommand";
import {
  DescribeRiskConfigurationCommand,
  DescribeRiskConfigurationCommandInput,
  DescribeRiskConfigurationCommandOutput,
} from "./commands/DescribeRiskConfigurationCommand";
import {
  DescribeTermsCommand,
  DescribeTermsCommandInput,
  DescribeTermsCommandOutput,
} from "./commands/DescribeTermsCommand";
import {
  DescribeUserImportJobCommand,
  DescribeUserImportJobCommandInput,
  DescribeUserImportJobCommandOutput,
} from "./commands/DescribeUserImportJobCommand";
import {
  DescribeUserPoolClientCommand,
  DescribeUserPoolClientCommandInput,
  DescribeUserPoolClientCommandOutput,
} from "./commands/DescribeUserPoolClientCommand";
import {
  DescribeUserPoolCommand,
  DescribeUserPoolCommandInput,
  DescribeUserPoolCommandOutput,
} from "./commands/DescribeUserPoolCommand";
import {
  DescribeUserPoolDomainCommand,
  DescribeUserPoolDomainCommandInput,
  DescribeUserPoolDomainCommandOutput,
} from "./commands/DescribeUserPoolDomainCommand";
import {
  ForgetDeviceCommand,
  ForgetDeviceCommandInput,
  ForgetDeviceCommandOutput,
} from "./commands/ForgetDeviceCommand";
import {
  ForgotPasswordCommand,
  ForgotPasswordCommandInput,
  ForgotPasswordCommandOutput,
} from "./commands/ForgotPasswordCommand";
import {
  GetCSVHeaderCommand,
  GetCSVHeaderCommandInput,
  GetCSVHeaderCommandOutput,
} from "./commands/GetCSVHeaderCommand";
import { GetDeviceCommand, GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import {
  GetIdentityProviderByIdentifierCommand,
  GetIdentityProviderByIdentifierCommandInput,
  GetIdentityProviderByIdentifierCommandOutput,
} from "./commands/GetIdentityProviderByIdentifierCommand";
import {
  GetLogDeliveryConfigurationCommand,
  GetLogDeliveryConfigurationCommandInput,
  GetLogDeliveryConfigurationCommandOutput,
} from "./commands/GetLogDeliveryConfigurationCommand";
import {
  GetSigningCertificateCommand,
  GetSigningCertificateCommandInput,
  GetSigningCertificateCommandOutput,
} from "./commands/GetSigningCertificateCommand";
import {
  GetTokensFromRefreshTokenCommand,
  GetTokensFromRefreshTokenCommandInput,
  GetTokensFromRefreshTokenCommandOutput,
} from "./commands/GetTokensFromRefreshTokenCommand";
import {
  GetUICustomizationCommand,
  GetUICustomizationCommandInput,
  GetUICustomizationCommandOutput,
} from "./commands/GetUICustomizationCommand";
import {
  GetUserAttributeVerificationCodeCommand,
  GetUserAttributeVerificationCodeCommandInput,
  GetUserAttributeVerificationCodeCommandOutput,
} from "./commands/GetUserAttributeVerificationCodeCommand";
import {
  GetUserAuthFactorsCommand,
  GetUserAuthFactorsCommandInput,
  GetUserAuthFactorsCommandOutput,
} from "./commands/GetUserAuthFactorsCommand";
import { GetUserCommand, GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import {
  GetUserPoolMfaConfigCommand,
  GetUserPoolMfaConfigCommandInput,
  GetUserPoolMfaConfigCommandOutput,
} from "./commands/GetUserPoolMfaConfigCommand";
import {
  GlobalSignOutCommand,
  GlobalSignOutCommandInput,
  GlobalSignOutCommandOutput,
} from "./commands/GlobalSignOutCommand";
import {
  InitiateAuthCommand,
  InitiateAuthCommandInput,
  InitiateAuthCommandOutput,
} from "./commands/InitiateAuthCommand";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListIdentityProvidersCommand,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "./commands/ListIdentityProvidersCommand";
import {
  ListResourceServersCommand,
  ListResourceServersCommandInput,
  ListResourceServersCommandOutput,
} from "./commands/ListResourceServersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTermsCommand, ListTermsCommandInput, ListTermsCommandOutput } from "./commands/ListTermsCommand";
import {
  ListUserImportJobsCommand,
  ListUserImportJobsCommandInput,
  ListUserImportJobsCommandOutput,
} from "./commands/ListUserImportJobsCommand";
import {
  ListUserPoolClientsCommand,
  ListUserPoolClientsCommandInput,
  ListUserPoolClientsCommandOutput,
} from "./commands/ListUserPoolClientsCommand";
import {
  ListUserPoolsCommand,
  ListUserPoolsCommandInput,
  ListUserPoolsCommandOutput,
} from "./commands/ListUserPoolsCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ListUsersInGroupCommand,
  ListUsersInGroupCommandInput,
  ListUsersInGroupCommandOutput,
} from "./commands/ListUsersInGroupCommand";
import {
  ListWebAuthnCredentialsCommand,
  ListWebAuthnCredentialsCommandInput,
  ListWebAuthnCredentialsCommandOutput,
} from "./commands/ListWebAuthnCredentialsCommand";
import {
  ResendConfirmationCodeCommand,
  ResendConfirmationCodeCommandInput,
  ResendConfirmationCodeCommandOutput,
} from "./commands/ResendConfirmationCodeCommand";
import {
  RespondToAuthChallengeCommand,
  RespondToAuthChallengeCommandInput,
  RespondToAuthChallengeCommandOutput,
} from "./commands/RespondToAuthChallengeCommand";
import { RevokeTokenCommand, RevokeTokenCommandInput, RevokeTokenCommandOutput } from "./commands/RevokeTokenCommand";
import {
  SetLogDeliveryConfigurationCommand,
  SetLogDeliveryConfigurationCommandInput,
  SetLogDeliveryConfigurationCommandOutput,
} from "./commands/SetLogDeliveryConfigurationCommand";
import {
  SetRiskConfigurationCommand,
  SetRiskConfigurationCommandInput,
  SetRiskConfigurationCommandOutput,
} from "./commands/SetRiskConfigurationCommand";
import {
  SetUICustomizationCommand,
  SetUICustomizationCommandInput,
  SetUICustomizationCommandOutput,
} from "./commands/SetUICustomizationCommand";
import {
  SetUserMFAPreferenceCommand,
  SetUserMFAPreferenceCommandInput,
  SetUserMFAPreferenceCommandOutput,
} from "./commands/SetUserMFAPreferenceCommand";
import {
  SetUserPoolMfaConfigCommand,
  SetUserPoolMfaConfigCommandInput,
  SetUserPoolMfaConfigCommandOutput,
} from "./commands/SetUserPoolMfaConfigCommand";
import {
  SetUserSettingsCommand,
  SetUserSettingsCommandInput,
  SetUserSettingsCommandOutput,
} from "./commands/SetUserSettingsCommand";
import { SignUpCommand, SignUpCommandInput, SignUpCommandOutput } from "./commands/SignUpCommand";
import {
  StartUserImportJobCommand,
  StartUserImportJobCommandInput,
  StartUserImportJobCommandOutput,
} from "./commands/StartUserImportJobCommand";
import {
  StartWebAuthnRegistrationCommand,
  StartWebAuthnRegistrationCommandInput,
  StartWebAuthnRegistrationCommandOutput,
} from "./commands/StartWebAuthnRegistrationCommand";
import {
  StopUserImportJobCommand,
  StopUserImportJobCommandInput,
  StopUserImportJobCommandOutput,
} from "./commands/StopUserImportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAuthEventFeedbackCommand,
  UpdateAuthEventFeedbackCommandInput,
  UpdateAuthEventFeedbackCommandOutput,
} from "./commands/UpdateAuthEventFeedbackCommand";
import {
  UpdateDeviceStatusCommand,
  UpdateDeviceStatusCommandInput,
  UpdateDeviceStatusCommandOutput,
} from "./commands/UpdateDeviceStatusCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateIdentityProviderCommand,
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "./commands/UpdateIdentityProviderCommand";
import {
  UpdateManagedLoginBrandingCommand,
  UpdateManagedLoginBrandingCommandInput,
  UpdateManagedLoginBrandingCommandOutput,
} from "./commands/UpdateManagedLoginBrandingCommand";
import {
  UpdateResourceServerCommand,
  UpdateResourceServerCommandInput,
  UpdateResourceServerCommandOutput,
} from "./commands/UpdateResourceServerCommand";
import { UpdateTermsCommand, UpdateTermsCommandInput, UpdateTermsCommandOutput } from "./commands/UpdateTermsCommand";
import {
  UpdateUserAttributesCommand,
  UpdateUserAttributesCommandInput,
  UpdateUserAttributesCommandOutput,
} from "./commands/UpdateUserAttributesCommand";
import {
  UpdateUserPoolClientCommand,
  UpdateUserPoolClientCommandInput,
  UpdateUserPoolClientCommandOutput,
} from "./commands/UpdateUserPoolClientCommand";
import {
  UpdateUserPoolCommand,
  UpdateUserPoolCommandInput,
  UpdateUserPoolCommandOutput,
} from "./commands/UpdateUserPoolCommand";
import {
  UpdateUserPoolDomainCommand,
  UpdateUserPoolDomainCommandInput,
  UpdateUserPoolDomainCommandOutput,
} from "./commands/UpdateUserPoolDomainCommand";
import {
  VerifySoftwareTokenCommand,
  VerifySoftwareTokenCommandInput,
  VerifySoftwareTokenCommandOutput,
} from "./commands/VerifySoftwareTokenCommand";
import {
  VerifyUserAttributeCommand,
  VerifyUserAttributeCommandInput,
  VerifyUserAttributeCommandOutput,
} from "./commands/VerifyUserAttributeCommand";

const commands = {
  AddCustomAttributesCommand,
  AdminAddUserToGroupCommand,
  AdminConfirmSignUpCommand,
  AdminCreateUserCommand,
  AdminDeleteUserCommand,
  AdminDeleteUserAttributesCommand,
  AdminDisableProviderForUserCommand,
  AdminDisableUserCommand,
  AdminEnableUserCommand,
  AdminForgetDeviceCommand,
  AdminGetDeviceCommand,
  AdminGetUserCommand,
  AdminInitiateAuthCommand,
  AdminLinkProviderForUserCommand,
  AdminListDevicesCommand,
  AdminListGroupsForUserCommand,
  AdminListUserAuthEventsCommand,
  AdminRemoveUserFromGroupCommand,
  AdminResetUserPasswordCommand,
  AdminRespondToAuthChallengeCommand,
  AdminSetUserMFAPreferenceCommand,
  AdminSetUserPasswordCommand,
  AdminSetUserSettingsCommand,
  AdminUpdateAuthEventFeedbackCommand,
  AdminUpdateDeviceStatusCommand,
  AdminUpdateUserAttributesCommand,
  AdminUserGlobalSignOutCommand,
  AssociateSoftwareTokenCommand,
  ChangePasswordCommand,
  CompleteWebAuthnRegistrationCommand,
  ConfirmDeviceCommand,
  ConfirmForgotPasswordCommand,
  ConfirmSignUpCommand,
  CreateGroupCommand,
  CreateIdentityProviderCommand,
  CreateManagedLoginBrandingCommand,
  CreateResourceServerCommand,
  CreateTermsCommand,
  CreateUserImportJobCommand,
  CreateUserPoolCommand,
  CreateUserPoolClientCommand,
  CreateUserPoolDomainCommand,
  DeleteGroupCommand,
  DeleteIdentityProviderCommand,
  DeleteManagedLoginBrandingCommand,
  DeleteResourceServerCommand,
  DeleteTermsCommand,
  DeleteUserCommand,
  DeleteUserAttributesCommand,
  DeleteUserPoolCommand,
  DeleteUserPoolClientCommand,
  DeleteUserPoolDomainCommand,
  DeleteWebAuthnCredentialCommand,
  DescribeIdentityProviderCommand,
  DescribeManagedLoginBrandingCommand,
  DescribeManagedLoginBrandingByClientCommand,
  DescribeResourceServerCommand,
  DescribeRiskConfigurationCommand,
  DescribeTermsCommand,
  DescribeUserImportJobCommand,
  DescribeUserPoolCommand,
  DescribeUserPoolClientCommand,
  DescribeUserPoolDomainCommand,
  ForgetDeviceCommand,
  ForgotPasswordCommand,
  GetCSVHeaderCommand,
  GetDeviceCommand,
  GetGroupCommand,
  GetIdentityProviderByIdentifierCommand,
  GetLogDeliveryConfigurationCommand,
  GetSigningCertificateCommand,
  GetTokensFromRefreshTokenCommand,
  GetUICustomizationCommand,
  GetUserCommand,
  GetUserAttributeVerificationCodeCommand,
  GetUserAuthFactorsCommand,
  GetUserPoolMfaConfigCommand,
  GlobalSignOutCommand,
  InitiateAuthCommand,
  ListDevicesCommand,
  ListGroupsCommand,
  ListIdentityProvidersCommand,
  ListResourceServersCommand,
  ListTagsForResourceCommand,
  ListTermsCommand,
  ListUserImportJobsCommand,
  ListUserPoolClientsCommand,
  ListUserPoolsCommand,
  ListUsersCommand,
  ListUsersInGroupCommand,
  ListWebAuthnCredentialsCommand,
  ResendConfirmationCodeCommand,
  RespondToAuthChallengeCommand,
  RevokeTokenCommand,
  SetLogDeliveryConfigurationCommand,
  SetRiskConfigurationCommand,
  SetUICustomizationCommand,
  SetUserMFAPreferenceCommand,
  SetUserPoolMfaConfigCommand,
  SetUserSettingsCommand,
  SignUpCommand,
  StartUserImportJobCommand,
  StartWebAuthnRegistrationCommand,
  StopUserImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAuthEventFeedbackCommand,
  UpdateDeviceStatusCommand,
  UpdateGroupCommand,
  UpdateIdentityProviderCommand,
  UpdateManagedLoginBrandingCommand,
  UpdateResourceServerCommand,
  UpdateTermsCommand,
  UpdateUserAttributesCommand,
  UpdateUserPoolCommand,
  UpdateUserPoolClientCommand,
  UpdateUserPoolDomainCommand,
  VerifySoftwareTokenCommand,
  VerifyUserAttributeCommand,
};

export interface CognitoIdentityProvider {
  /**
   * @see {@link AddCustomAttributesCommand}
   */
  addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddCustomAttributesCommandOutput>;
  addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    cb: (err: any, data?: AddCustomAttributesCommandOutput) => void
  ): void;
  addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddCustomAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminAddUserToGroupCommand}
   */
  adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminAddUserToGroupCommandOutput>;
  adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    cb: (err: any, data?: AdminAddUserToGroupCommandOutput) => void
  ): void;
  adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminAddUserToGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminConfirmSignUpCommand}
   */
  adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminConfirmSignUpCommandOutput>;
  adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    cb: (err: any, data?: AdminConfirmSignUpCommandOutput) => void
  ): void;
  adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminConfirmSignUpCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminCreateUserCommand}
   */
  adminCreateUser(
    args: AdminCreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminCreateUserCommandOutput>;
  adminCreateUser(args: AdminCreateUserCommandInput, cb: (err: any, data?: AdminCreateUserCommandOutput) => void): void;
  adminCreateUser(
    args: AdminCreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminCreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDeleteUserCommand}
   */
  adminDeleteUser(
    args: AdminDeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminDeleteUserCommandOutput>;
  adminDeleteUser(args: AdminDeleteUserCommandInput, cb: (err: any, data?: AdminDeleteUserCommandOutput) => void): void;
  adminDeleteUser(
    args: AdminDeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDeleteUserAttributesCommand}
   */
  adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminDeleteUserAttributesCommandOutput>;
  adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    cb: (err: any, data?: AdminDeleteUserAttributesCommandOutput) => void
  ): void;
  adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDeleteUserAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDisableProviderForUserCommand}
   */
  adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminDisableProviderForUserCommandOutput>;
  adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    cb: (err: any, data?: AdminDisableProviderForUserCommandOutput) => void
  ): void;
  adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDisableProviderForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDisableUserCommand}
   */
  adminDisableUser(
    args: AdminDisableUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminDisableUserCommandOutput>;
  adminDisableUser(
    args: AdminDisableUserCommandInput,
    cb: (err: any, data?: AdminDisableUserCommandOutput) => void
  ): void;
  adminDisableUser(
    args: AdminDisableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDisableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminEnableUserCommand}
   */
  adminEnableUser(
    args: AdminEnableUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminEnableUserCommandOutput>;
  adminEnableUser(args: AdminEnableUserCommandInput, cb: (err: any, data?: AdminEnableUserCommandOutput) => void): void;
  adminEnableUser(
    args: AdminEnableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminEnableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminForgetDeviceCommand}
   */
  adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminForgetDeviceCommandOutput>;
  adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    cb: (err: any, data?: AdminForgetDeviceCommandOutput) => void
  ): void;
  adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminForgetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminGetDeviceCommand}
   */
  adminGetDevice(
    args: AdminGetDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminGetDeviceCommandOutput>;
  adminGetDevice(args: AdminGetDeviceCommandInput, cb: (err: any, data?: AdminGetDeviceCommandOutput) => void): void;
  adminGetDevice(
    args: AdminGetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminGetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminGetUserCommand}
   */
  adminGetUser(args: AdminGetUserCommandInput, options?: __HttpHandlerOptions): Promise<AdminGetUserCommandOutput>;
  adminGetUser(args: AdminGetUserCommandInput, cb: (err: any, data?: AdminGetUserCommandOutput) => void): void;
  adminGetUser(
    args: AdminGetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminGetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminInitiateAuthCommand}
   */
  adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminInitiateAuthCommandOutput>;
  adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    cb: (err: any, data?: AdminInitiateAuthCommandOutput) => void
  ): void;
  adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminInitiateAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminLinkProviderForUserCommand}
   */
  adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminLinkProviderForUserCommandOutput>;
  adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    cb: (err: any, data?: AdminLinkProviderForUserCommandOutput) => void
  ): void;
  adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminLinkProviderForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListDevicesCommand}
   */
  adminListDevices(
    args: AdminListDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminListDevicesCommandOutput>;
  adminListDevices(
    args: AdminListDevicesCommandInput,
    cb: (err: any, data?: AdminListDevicesCommandOutput) => void
  ): void;
  adminListDevices(
    args: AdminListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListGroupsForUserCommand}
   */
  adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminListGroupsForUserCommandOutput>;
  adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    cb: (err: any, data?: AdminListGroupsForUserCommandOutput) => void
  ): void;
  adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListGroupsForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListUserAuthEventsCommand}
   */
  adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminListUserAuthEventsCommandOutput>;
  adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    cb: (err: any, data?: AdminListUserAuthEventsCommandOutput) => void
  ): void;
  adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListUserAuthEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminRemoveUserFromGroupCommand}
   */
  adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminRemoveUserFromGroupCommandOutput>;
  adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    cb: (err: any, data?: AdminRemoveUserFromGroupCommandOutput) => void
  ): void;
  adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminRemoveUserFromGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminResetUserPasswordCommand}
   */
  adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminResetUserPasswordCommandOutput>;
  adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    cb: (err: any, data?: AdminResetUserPasswordCommandOutput) => void
  ): void;
  adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminResetUserPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminRespondToAuthChallengeCommand}
   */
  adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminRespondToAuthChallengeCommandOutput>;
  adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    cb: (err: any, data?: AdminRespondToAuthChallengeCommandOutput) => void
  ): void;
  adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminRespondToAuthChallengeCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminSetUserMFAPreferenceCommand}
   */
  adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminSetUserMFAPreferenceCommandOutput>;
  adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    cb: (err: any, data?: AdminSetUserMFAPreferenceCommandOutput) => void
  ): void;
  adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminSetUserMFAPreferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminSetUserPasswordCommand}
   */
  adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminSetUserPasswordCommandOutput>;
  adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    cb: (err: any, data?: AdminSetUserPasswordCommandOutput) => void
  ): void;
  adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminSetUserPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminSetUserSettingsCommand}
   */
  adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminSetUserSettingsCommandOutput>;
  adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    cb: (err: any, data?: AdminSetUserSettingsCommandOutput) => void
  ): void;
  adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminSetUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUpdateAuthEventFeedbackCommand}
   */
  adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminUpdateAuthEventFeedbackCommandOutput>;
  adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    cb: (err: any, data?: AdminUpdateAuthEventFeedbackCommandOutput) => void
  ): void;
  adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUpdateAuthEventFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUpdateDeviceStatusCommand}
   */
  adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminUpdateDeviceStatusCommandOutput>;
  adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    cb: (err: any, data?: AdminUpdateDeviceStatusCommandOutput) => void
  ): void;
  adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUpdateDeviceStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUpdateUserAttributesCommand}
   */
  adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminUpdateUserAttributesCommandOutput>;
  adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    cb: (err: any, data?: AdminUpdateUserAttributesCommandOutput) => void
  ): void;
  adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUpdateUserAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUserGlobalSignOutCommand}
   */
  adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminUserGlobalSignOutCommandOutput>;
  adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    cb: (err: any, data?: AdminUserGlobalSignOutCommandOutput) => void
  ): void;
  adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUserGlobalSignOutCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSoftwareTokenCommand}
   */
  associateSoftwareToken(): Promise<AssociateSoftwareTokenCommandOutput>;
  associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSoftwareTokenCommandOutput>;
  associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    cb: (err: any, data?: AssociateSoftwareTokenCommandOutput) => void
  ): void;
  associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSoftwareTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangePasswordCommand}
   */
  changePassword(
    args: ChangePasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangePasswordCommandOutput>;
  changePassword(args: ChangePasswordCommandInput, cb: (err: any, data?: ChangePasswordCommandOutput) => void): void;
  changePassword(
    args: ChangePasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangePasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteWebAuthnRegistrationCommand}
   */
  completeWebAuthnRegistration(
    args: CompleteWebAuthnRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteWebAuthnRegistrationCommandOutput>;
  completeWebAuthnRegistration(
    args: CompleteWebAuthnRegistrationCommandInput,
    cb: (err: any, data?: CompleteWebAuthnRegistrationCommandOutput) => void
  ): void;
  completeWebAuthnRegistration(
    args: CompleteWebAuthnRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteWebAuthnRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmDeviceCommand}
   */
  confirmDevice(args: ConfirmDeviceCommandInput, options?: __HttpHandlerOptions): Promise<ConfirmDeviceCommandOutput>;
  confirmDevice(args: ConfirmDeviceCommandInput, cb: (err: any, data?: ConfirmDeviceCommandOutput) => void): void;
  confirmDevice(
    args: ConfirmDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmForgotPasswordCommand}
   */
  confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmForgotPasswordCommandOutput>;
  confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    cb: (err: any, data?: ConfirmForgotPasswordCommandOutput) => void
  ): void;
  confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmForgotPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmSignUpCommand}
   */
  confirmSignUp(args: ConfirmSignUpCommandInput, options?: __HttpHandlerOptions): Promise<ConfirmSignUpCommandOutput>;
  confirmSignUp(args: ConfirmSignUpCommandInput, cb: (err: any, data?: ConfirmSignUpCommandOutput) => void): void;
  confirmSignUp(
    args: ConfirmSignUpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmSignUpCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIdentityProviderCommand}
   */
  createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIdentityProviderCommandOutput>;
  createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): void;
  createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateManagedLoginBrandingCommand}
   */
  createManagedLoginBranding(
    args: CreateManagedLoginBrandingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateManagedLoginBrandingCommandOutput>;
  createManagedLoginBranding(
    args: CreateManagedLoginBrandingCommandInput,
    cb: (err: any, data?: CreateManagedLoginBrandingCommandOutput) => void
  ): void;
  createManagedLoginBranding(
    args: CreateManagedLoginBrandingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateManagedLoginBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceServerCommand}
   */
  createResourceServer(
    args: CreateResourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceServerCommandOutput>;
  createResourceServer(
    args: CreateResourceServerCommandInput,
    cb: (err: any, data?: CreateResourceServerCommandOutput) => void
  ): void;
  createResourceServer(
    args: CreateResourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTermsCommand}
   */
  createTerms(args: CreateTermsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTermsCommandOutput>;
  createTerms(args: CreateTermsCommandInput, cb: (err: any, data?: CreateTermsCommandOutput) => void): void;
  createTerms(
    args: CreateTermsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserImportJobCommand}
   */
  createUserImportJob(
    args: CreateUserImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserImportJobCommandOutput>;
  createUserImportJob(
    args: CreateUserImportJobCommandInput,
    cb: (err: any, data?: CreateUserImportJobCommandOutput) => void
  ): void;
  createUserImportJob(
    args: CreateUserImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserPoolCommand}
   */
  createUserPool(
    args: CreateUserPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserPoolCommandOutput>;
  createUserPool(args: CreateUserPoolCommandInput, cb: (err: any, data?: CreateUserPoolCommandOutput) => void): void;
  createUserPool(
    args: CreateUserPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserPoolClientCommand}
   */
  createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserPoolClientCommandOutput>;
  createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    cb: (err: any, data?: CreateUserPoolClientCommandOutput) => void
  ): void;
  createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserPoolClientCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserPoolDomainCommand}
   */
  createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserPoolDomainCommandOutput>;
  createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    cb: (err: any, data?: CreateUserPoolDomainCommandOutput) => void
  ): void;
  createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserPoolDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdentityProviderCommand}
   */
  deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdentityProviderCommandOutput>;
  deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): void;
  deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteManagedLoginBrandingCommand}
   */
  deleteManagedLoginBranding(
    args: DeleteManagedLoginBrandingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteManagedLoginBrandingCommandOutput>;
  deleteManagedLoginBranding(
    args: DeleteManagedLoginBrandingCommandInput,
    cb: (err: any, data?: DeleteManagedLoginBrandingCommandOutput) => void
  ): void;
  deleteManagedLoginBranding(
    args: DeleteManagedLoginBrandingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteManagedLoginBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceServerCommand}
   */
  deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceServerCommandOutput>;
  deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    cb: (err: any, data?: DeleteResourceServerCommandOutput) => void
  ): void;
  deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTermsCommand}
   */
  deleteTerms(args: DeleteTermsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTermsCommandOutput>;
  deleteTerms(args: DeleteTermsCommandInput, cb: (err: any, data?: DeleteTermsCommandOutput) => void): void;
  deleteTerms(
    args: DeleteTermsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserAttributesCommand}
   */
  deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserAttributesCommandOutput>;
  deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    cb: (err: any, data?: DeleteUserAttributesCommandOutput) => void
  ): void;
  deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserPoolCommand}
   */
  deleteUserPool(
    args: DeleteUserPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPoolCommandOutput>;
  deleteUserPool(args: DeleteUserPoolCommandInput, cb: (err: any, data?: DeleteUserPoolCommandOutput) => void): void;
  deleteUserPool(
    args: DeleteUserPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserPoolClientCommand}
   */
  deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPoolClientCommandOutput>;
  deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    cb: (err: any, data?: DeleteUserPoolClientCommandOutput) => void
  ): void;
  deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPoolClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserPoolDomainCommand}
   */
  deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPoolDomainCommandOutput>;
  deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    cb: (err: any, data?: DeleteUserPoolDomainCommandOutput) => void
  ): void;
  deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPoolDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebAuthnCredentialCommand}
   */
  deleteWebAuthnCredential(
    args: DeleteWebAuthnCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWebAuthnCredentialCommandOutput>;
  deleteWebAuthnCredential(
    args: DeleteWebAuthnCredentialCommandInput,
    cb: (err: any, data?: DeleteWebAuthnCredentialCommandOutput) => void
  ): void;
  deleteWebAuthnCredential(
    args: DeleteWebAuthnCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebAuthnCredentialCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIdentityProviderCommand}
   */
  describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityProviderCommandOutput>;
  describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    cb: (err: any, data?: DescribeIdentityProviderCommandOutput) => void
  ): void;
  describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeManagedLoginBrandingCommand}
   */
  describeManagedLoginBranding(
    args: DescribeManagedLoginBrandingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedLoginBrandingCommandOutput>;
  describeManagedLoginBranding(
    args: DescribeManagedLoginBrandingCommandInput,
    cb: (err: any, data?: DescribeManagedLoginBrandingCommandOutput) => void
  ): void;
  describeManagedLoginBranding(
    args: DescribeManagedLoginBrandingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedLoginBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeManagedLoginBrandingByClientCommand}
   */
  describeManagedLoginBrandingByClient(
    args: DescribeManagedLoginBrandingByClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedLoginBrandingByClientCommandOutput>;
  describeManagedLoginBrandingByClient(
    args: DescribeManagedLoginBrandingByClientCommandInput,
    cb: (err: any, data?: DescribeManagedLoginBrandingByClientCommandOutput) => void
  ): void;
  describeManagedLoginBrandingByClient(
    args: DescribeManagedLoginBrandingByClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedLoginBrandingByClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourceServerCommand}
   */
  describeResourceServer(
    args: DescribeResourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceServerCommandOutput>;
  describeResourceServer(
    args: DescribeResourceServerCommandInput,
    cb: (err: any, data?: DescribeResourceServerCommandOutput) => void
  ): void;
  describeResourceServer(
    args: DescribeResourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRiskConfigurationCommand}
   */
  describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRiskConfigurationCommandOutput>;
  describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    cb: (err: any, data?: DescribeRiskConfigurationCommandOutput) => void
  ): void;
  describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRiskConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTermsCommand}
   */
  describeTerms(args: DescribeTermsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTermsCommandOutput>;
  describeTerms(args: DescribeTermsCommandInput, cb: (err: any, data?: DescribeTermsCommandOutput) => void): void;
  describeTerms(
    args: DescribeTermsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserImportJobCommand}
   */
  describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserImportJobCommandOutput>;
  describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    cb: (err: any, data?: DescribeUserImportJobCommandOutput) => void
  ): void;
  describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserPoolCommand}
   */
  describeUserPool(
    args: DescribeUserPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserPoolCommandOutput>;
  describeUserPool(
    args: DescribeUserPoolCommandInput,
    cb: (err: any, data?: DescribeUserPoolCommandOutput) => void
  ): void;
  describeUserPool(
    args: DescribeUserPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserPoolClientCommand}
   */
  describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserPoolClientCommandOutput>;
  describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    cb: (err: any, data?: DescribeUserPoolClientCommandOutput) => void
  ): void;
  describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserPoolClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserPoolDomainCommand}
   */
  describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserPoolDomainCommandOutput>;
  describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    cb: (err: any, data?: DescribeUserPoolDomainCommandOutput) => void
  ): void;
  describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserPoolDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ForgetDeviceCommand}
   */
  forgetDevice(args: ForgetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<ForgetDeviceCommandOutput>;
  forgetDevice(args: ForgetDeviceCommandInput, cb: (err: any, data?: ForgetDeviceCommandOutput) => void): void;
  forgetDevice(
    args: ForgetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ForgetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link ForgotPasswordCommand}
   */
  forgotPassword(
    args: ForgotPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ForgotPasswordCommandOutput>;
  forgotPassword(args: ForgotPasswordCommandInput, cb: (err: any, data?: ForgotPasswordCommandOutput) => void): void;
  forgotPassword(
    args: ForgotPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ForgotPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCSVHeaderCommand}
   */
  getCSVHeader(args: GetCSVHeaderCommandInput, options?: __HttpHandlerOptions): Promise<GetCSVHeaderCommandOutput>;
  getCSVHeader(args: GetCSVHeaderCommandInput, cb: (err: any, data?: GetCSVHeaderCommandOutput) => void): void;
  getCSVHeader(
    args: GetCSVHeaderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCSVHeaderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceCommand}
   */
  getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
  getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
  getDevice(
    args: GetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
  getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
  getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityProviderByIdentifierCommand}
   */
  getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityProviderByIdentifierCommandOutput>;
  getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    cb: (err: any, data?: GetIdentityProviderByIdentifierCommandOutput) => void
  ): void;
  getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityProviderByIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogDeliveryConfigurationCommand}
   */
  getLogDeliveryConfiguration(
    args: GetLogDeliveryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogDeliveryConfigurationCommandOutput>;
  getLogDeliveryConfiguration(
    args: GetLogDeliveryConfigurationCommandInput,
    cb: (err: any, data?: GetLogDeliveryConfigurationCommandOutput) => void
  ): void;
  getLogDeliveryConfiguration(
    args: GetLogDeliveryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogDeliveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSigningCertificateCommand}
   */
  getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSigningCertificateCommandOutput>;
  getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    cb: (err: any, data?: GetSigningCertificateCommandOutput) => void
  ): void;
  getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSigningCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTokensFromRefreshTokenCommand}
   */
  getTokensFromRefreshToken(
    args: GetTokensFromRefreshTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTokensFromRefreshTokenCommandOutput>;
  getTokensFromRefreshToken(
    args: GetTokensFromRefreshTokenCommandInput,
    cb: (err: any, data?: GetTokensFromRefreshTokenCommandOutput) => void
  ): void;
  getTokensFromRefreshToken(
    args: GetTokensFromRefreshTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTokensFromRefreshTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUICustomizationCommand}
   */
  getUICustomization(
    args: GetUICustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUICustomizationCommandOutput>;
  getUICustomization(
    args: GetUICustomizationCommandInput,
    cb: (err: any, data?: GetUICustomizationCommandOutput) => void
  ): void;
  getUICustomization(
    args: GetUICustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUICustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(args: GetUserCommandInput, options?: __HttpHandlerOptions): Promise<GetUserCommandOutput>;
  getUser(args: GetUserCommandInput, cb: (err: any, data?: GetUserCommandOutput) => void): void;
  getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserAttributeVerificationCodeCommand}
   */
  getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserAttributeVerificationCodeCommandOutput>;
  getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    cb: (err: any, data?: GetUserAttributeVerificationCodeCommandOutput) => void
  ): void;
  getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserAttributeVerificationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserAuthFactorsCommand}
   */
  getUserAuthFactors(
    args: GetUserAuthFactorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserAuthFactorsCommandOutput>;
  getUserAuthFactors(
    args: GetUserAuthFactorsCommandInput,
    cb: (err: any, data?: GetUserAuthFactorsCommandOutput) => void
  ): void;
  getUserAuthFactors(
    args: GetUserAuthFactorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserAuthFactorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserPoolMfaConfigCommand}
   */
  getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserPoolMfaConfigCommandOutput>;
  getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    cb: (err: any, data?: GetUserPoolMfaConfigCommandOutput) => void
  ): void;
  getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserPoolMfaConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GlobalSignOutCommand}
   */
  globalSignOut(args: GlobalSignOutCommandInput, options?: __HttpHandlerOptions): Promise<GlobalSignOutCommandOutput>;
  globalSignOut(args: GlobalSignOutCommandInput, cb: (err: any, data?: GlobalSignOutCommandOutput) => void): void;
  globalSignOut(
    args: GlobalSignOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GlobalSignOutCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateAuthCommand}
   */
  initiateAuth(args: InitiateAuthCommandInput, options?: __HttpHandlerOptions): Promise<InitiateAuthCommandOutput>;
  initiateAuth(args: InitiateAuthCommandInput, cb: (err: any, data?: InitiateAuthCommandOutput) => void): void;
  initiateAuth(
    args: InitiateAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityProvidersCommand}
   */
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityProvidersCommandOutput>;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceServersCommand}
   */
  listResourceServers(
    args: ListResourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceServersCommandOutput>;
  listResourceServers(
    args: ListResourceServersCommandInput,
    cb: (err: any, data?: ListResourceServersCommandOutput) => void
  ): void;
  listResourceServers(
    args: ListResourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceServersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTermsCommand}
   */
  listTerms(args: ListTermsCommandInput, options?: __HttpHandlerOptions): Promise<ListTermsCommandOutput>;
  listTerms(args: ListTermsCommandInput, cb: (err: any, data?: ListTermsCommandOutput) => void): void;
  listTerms(
    args: ListTermsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserImportJobsCommand}
   */
  listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserImportJobsCommandOutput>;
  listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    cb: (err: any, data?: ListUserImportJobsCommandOutput) => void
  ): void;
  listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserPoolClientsCommand}
   */
  listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserPoolClientsCommandOutput>;
  listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    cb: (err: any, data?: ListUserPoolClientsCommandOutput) => void
  ): void;
  listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserPoolClientsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserPoolsCommand}
   */
  listUserPools(args: ListUserPoolsCommandInput, options?: __HttpHandlerOptions): Promise<ListUserPoolsCommandOutput>;
  listUserPools(args: ListUserPoolsCommandInput, cb: (err: any, data?: ListUserPoolsCommandOutput) => void): void;
  listUserPools(
    args: ListUserPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserPoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersInGroupCommand}
   */
  listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersInGroupCommandOutput>;
  listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    cb: (err: any, data?: ListUsersInGroupCommandOutput) => void
  ): void;
  listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersInGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebAuthnCredentialsCommand}
   */
  listWebAuthnCredentials(
    args: ListWebAuthnCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWebAuthnCredentialsCommandOutput>;
  listWebAuthnCredentials(
    args: ListWebAuthnCredentialsCommandInput,
    cb: (err: any, data?: ListWebAuthnCredentialsCommandOutput) => void
  ): void;
  listWebAuthnCredentials(
    args: ListWebAuthnCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebAuthnCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResendConfirmationCodeCommand}
   */
  resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResendConfirmationCodeCommandOutput>;
  resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    cb: (err: any, data?: ResendConfirmationCodeCommandOutput) => void
  ): void;
  resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResendConfirmationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link RespondToAuthChallengeCommand}
   */
  respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RespondToAuthChallengeCommandOutput>;
  respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    cb: (err: any, data?: RespondToAuthChallengeCommandOutput) => void
  ): void;
  respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RespondToAuthChallengeCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeTokenCommand}
   */
  revokeToken(args: RevokeTokenCommandInput, options?: __HttpHandlerOptions): Promise<RevokeTokenCommandOutput>;
  revokeToken(args: RevokeTokenCommandInput, cb: (err: any, data?: RevokeTokenCommandOutput) => void): void;
  revokeToken(
    args: RevokeTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link SetLogDeliveryConfigurationCommand}
   */
  setLogDeliveryConfiguration(
    args: SetLogDeliveryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetLogDeliveryConfigurationCommandOutput>;
  setLogDeliveryConfiguration(
    args: SetLogDeliveryConfigurationCommandInput,
    cb: (err: any, data?: SetLogDeliveryConfigurationCommandOutput) => void
  ): void;
  setLogDeliveryConfiguration(
    args: SetLogDeliveryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLogDeliveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SetRiskConfigurationCommand}
   */
  setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetRiskConfigurationCommandOutput>;
  setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    cb: (err: any, data?: SetRiskConfigurationCommandOutput) => void
  ): void;
  setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetRiskConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SetUICustomizationCommand}
   */
  setUICustomization(
    args: SetUICustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetUICustomizationCommandOutput>;
  setUICustomization(
    args: SetUICustomizationCommandInput,
    cb: (err: any, data?: SetUICustomizationCommandOutput) => void
  ): void;
  setUICustomization(
    args: SetUICustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetUICustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link SetUserMFAPreferenceCommand}
   */
  setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetUserMFAPreferenceCommandOutput>;
  setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    cb: (err: any, data?: SetUserMFAPreferenceCommandOutput) => void
  ): void;
  setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetUserMFAPreferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link SetUserPoolMfaConfigCommand}
   */
  setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetUserPoolMfaConfigCommandOutput>;
  setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    cb: (err: any, data?: SetUserPoolMfaConfigCommandOutput) => void
  ): void;
  setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetUserPoolMfaConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link SetUserSettingsCommand}
   */
  setUserSettings(
    args: SetUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetUserSettingsCommandOutput>;
  setUserSettings(args: SetUserSettingsCommandInput, cb: (err: any, data?: SetUserSettingsCommandOutput) => void): void;
  setUserSettings(
    args: SetUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link SignUpCommand}
   */
  signUp(args: SignUpCommandInput, options?: __HttpHandlerOptions): Promise<SignUpCommandOutput>;
  signUp(args: SignUpCommandInput, cb: (err: any, data?: SignUpCommandOutput) => void): void;
  signUp(
    args: SignUpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignUpCommandOutput) => void
  ): void;

  /**
   * @see {@link StartUserImportJobCommand}
   */
  startUserImportJob(
    args: StartUserImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartUserImportJobCommandOutput>;
  startUserImportJob(
    args: StartUserImportJobCommandInput,
    cb: (err: any, data?: StartUserImportJobCommandOutput) => void
  ): void;
  startUserImportJob(
    args: StartUserImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartUserImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWebAuthnRegistrationCommand}
   */
  startWebAuthnRegistration(
    args: StartWebAuthnRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWebAuthnRegistrationCommandOutput>;
  startWebAuthnRegistration(
    args: StartWebAuthnRegistrationCommandInput,
    cb: (err: any, data?: StartWebAuthnRegistrationCommandOutput) => void
  ): void;
  startWebAuthnRegistration(
    args: StartWebAuthnRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWebAuthnRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopUserImportJobCommand}
   */
  stopUserImportJob(
    args: StopUserImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopUserImportJobCommandOutput>;
  stopUserImportJob(
    args: StopUserImportJobCommandInput,
    cb: (err: any, data?: StopUserImportJobCommandOutput) => void
  ): void;
  stopUserImportJob(
    args: StopUserImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopUserImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAuthEventFeedbackCommand}
   */
  updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuthEventFeedbackCommandOutput>;
  updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    cb: (err: any, data?: UpdateAuthEventFeedbackCommandOutput) => void
  ): void;
  updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuthEventFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeviceStatusCommand}
   */
  updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceStatusCommandOutput>;
  updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    cb: (err: any, data?: UpdateDeviceStatusCommandOutput) => void
  ): void;
  updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentityProviderCommand}
   */
  updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdentityProviderCommandOutput>;
  updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): void;
  updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateManagedLoginBrandingCommand}
   */
  updateManagedLoginBranding(): Promise<UpdateManagedLoginBrandingCommandOutput>;
  updateManagedLoginBranding(
    args: UpdateManagedLoginBrandingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateManagedLoginBrandingCommandOutput>;
  updateManagedLoginBranding(
    args: UpdateManagedLoginBrandingCommandInput,
    cb: (err: any, data?: UpdateManagedLoginBrandingCommandOutput) => void
  ): void;
  updateManagedLoginBranding(
    args: UpdateManagedLoginBrandingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateManagedLoginBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceServerCommand}
   */
  updateResourceServer(
    args: UpdateResourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceServerCommandOutput>;
  updateResourceServer(
    args: UpdateResourceServerCommandInput,
    cb: (err: any, data?: UpdateResourceServerCommandOutput) => void
  ): void;
  updateResourceServer(
    args: UpdateResourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTermsCommand}
   */
  updateTerms(args: UpdateTermsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTermsCommandOutput>;
  updateTerms(args: UpdateTermsCommandInput, cb: (err: any, data?: UpdateTermsCommandOutput) => void): void;
  updateTerms(
    args: UpdateTermsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserAttributesCommand}
   */
  updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserAttributesCommandOutput>;
  updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    cb: (err: any, data?: UpdateUserAttributesCommandOutput) => void
  ): void;
  updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserPoolCommand}
   */
  updateUserPool(
    args: UpdateUserPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserPoolCommandOutput>;
  updateUserPool(args: UpdateUserPoolCommandInput, cb: (err: any, data?: UpdateUserPoolCommandOutput) => void): void;
  updateUserPool(
    args: UpdateUserPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserPoolClientCommand}
   */
  updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserPoolClientCommandOutput>;
  updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    cb: (err: any, data?: UpdateUserPoolClientCommandOutput) => void
  ): void;
  updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserPoolClientCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserPoolDomainCommand}
   */
  updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserPoolDomainCommandOutput>;
  updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    cb: (err: any, data?: UpdateUserPoolDomainCommandOutput) => void
  ): void;
  updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserPoolDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifySoftwareTokenCommand}
   */
  verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifySoftwareTokenCommandOutput>;
  verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    cb: (err: any, data?: VerifySoftwareTokenCommandOutput) => void
  ): void;
  verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifySoftwareTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyUserAttributeCommand}
   */
  verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyUserAttributeCommandOutput>;
  verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    cb: (err: any, data?: VerifyUserAttributeCommandOutput) => void
  ): void;
  verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyUserAttributeCommandOutput) => void
  ): void;
}

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
export class CognitoIdentityProvider extends CognitoIdentityProviderClient implements CognitoIdentityProvider {}
createAggregatedClient(commands, CognitoIdentityProvider);
