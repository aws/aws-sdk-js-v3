// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { CognitoIdentityProviderClient } from "./CognitoIdentityProviderClient";
import {
  type AddCustomAttributesCommandInput,
  type AddCustomAttributesCommandOutput,
  AddCustomAttributesCommand,
} from "./commands/AddCustomAttributesCommand";
import {
  type AddUserPoolClientSecretCommandInput,
  type AddUserPoolClientSecretCommandOutput,
  AddUserPoolClientSecretCommand,
} from "./commands/AddUserPoolClientSecretCommand";
import {
  type AdminAddUserToGroupCommandInput,
  type AdminAddUserToGroupCommandOutput,
  AdminAddUserToGroupCommand,
} from "./commands/AdminAddUserToGroupCommand";
import {
  type AdminConfirmSignUpCommandInput,
  type AdminConfirmSignUpCommandOutput,
  AdminConfirmSignUpCommand,
} from "./commands/AdminConfirmSignUpCommand";
import {
  type AdminCreateUserCommandInput,
  type AdminCreateUserCommandOutput,
  AdminCreateUserCommand,
} from "./commands/AdminCreateUserCommand";
import {
  type AdminDeleteSoftwareTokenCommandInput,
  type AdminDeleteSoftwareTokenCommandOutput,
  AdminDeleteSoftwareTokenCommand,
} from "./commands/AdminDeleteSoftwareTokenCommand";
import {
  type AdminDeleteUserAttributesCommandInput,
  type AdminDeleteUserAttributesCommandOutput,
  AdminDeleteUserAttributesCommand,
} from "./commands/AdminDeleteUserAttributesCommand";
import {
  type AdminDeleteUserCommandInput,
  type AdminDeleteUserCommandOutput,
  AdminDeleteUserCommand,
} from "./commands/AdminDeleteUserCommand";
import {
  type AdminDisableProviderForUserCommandInput,
  type AdminDisableProviderForUserCommandOutput,
  AdminDisableProviderForUserCommand,
} from "./commands/AdminDisableProviderForUserCommand";
import {
  type AdminDisableUserCommandInput,
  type AdminDisableUserCommandOutput,
  AdminDisableUserCommand,
} from "./commands/AdminDisableUserCommand";
import {
  type AdminEnableUserCommandInput,
  type AdminEnableUserCommandOutput,
  AdminEnableUserCommand,
} from "./commands/AdminEnableUserCommand";
import {
  type AdminForgetDeviceCommandInput,
  type AdminForgetDeviceCommandOutput,
  AdminForgetDeviceCommand,
} from "./commands/AdminForgetDeviceCommand";
import {
  type AdminGetDeviceCommandInput,
  type AdminGetDeviceCommandOutput,
  AdminGetDeviceCommand,
} from "./commands/AdminGetDeviceCommand";
import {
  type AdminGetUserAuthFactorsCommandInput,
  type AdminGetUserAuthFactorsCommandOutput,
  AdminGetUserAuthFactorsCommand,
} from "./commands/AdminGetUserAuthFactorsCommand";
import {
  type AdminGetUserCommandInput,
  type AdminGetUserCommandOutput,
  AdminGetUserCommand,
} from "./commands/AdminGetUserCommand";
import {
  type AdminInitiateAuthCommandInput,
  type AdminInitiateAuthCommandOutput,
  AdminInitiateAuthCommand,
} from "./commands/AdminInitiateAuthCommand";
import {
  type AdminLinkProviderForUserCommandInput,
  type AdminLinkProviderForUserCommandOutput,
  AdminLinkProviderForUserCommand,
} from "./commands/AdminLinkProviderForUserCommand";
import {
  type AdminListDevicesCommandInput,
  type AdminListDevicesCommandOutput,
  AdminListDevicesCommand,
} from "./commands/AdminListDevicesCommand";
import {
  type AdminListGroupsForUserCommandInput,
  type AdminListGroupsForUserCommandOutput,
  AdminListGroupsForUserCommand,
} from "./commands/AdminListGroupsForUserCommand";
import {
  type AdminListUserAuthEventsCommandInput,
  type AdminListUserAuthEventsCommandOutput,
  AdminListUserAuthEventsCommand,
} from "./commands/AdminListUserAuthEventsCommand";
import {
  type AdminRemoveUserFromGroupCommandInput,
  type AdminRemoveUserFromGroupCommandOutput,
  AdminRemoveUserFromGroupCommand,
} from "./commands/AdminRemoveUserFromGroupCommand";
import {
  type AdminResetUserPasswordCommandInput,
  type AdminResetUserPasswordCommandOutput,
  AdminResetUserPasswordCommand,
} from "./commands/AdminResetUserPasswordCommand";
import {
  type AdminRespondToAuthChallengeCommandInput,
  type AdminRespondToAuthChallengeCommandOutput,
  AdminRespondToAuthChallengeCommand,
} from "./commands/AdminRespondToAuthChallengeCommand";
import {
  type AdminSetUserMFAPreferenceCommandInput,
  type AdminSetUserMFAPreferenceCommandOutput,
  AdminSetUserMFAPreferenceCommand,
} from "./commands/AdminSetUserMFAPreferenceCommand";
import {
  type AdminSetUserPasswordCommandInput,
  type AdminSetUserPasswordCommandOutput,
  AdminSetUserPasswordCommand,
} from "./commands/AdminSetUserPasswordCommand";
import {
  type AdminSetUserSettingsCommandInput,
  type AdminSetUserSettingsCommandOutput,
  AdminSetUserSettingsCommand,
} from "./commands/AdminSetUserSettingsCommand";
import {
  type AdminUpdateAuthEventFeedbackCommandInput,
  type AdminUpdateAuthEventFeedbackCommandOutput,
  AdminUpdateAuthEventFeedbackCommand,
} from "./commands/AdminUpdateAuthEventFeedbackCommand";
import {
  type AdminUpdateDeviceStatusCommandInput,
  type AdminUpdateDeviceStatusCommandOutput,
  AdminUpdateDeviceStatusCommand,
} from "./commands/AdminUpdateDeviceStatusCommand";
import {
  type AdminUpdateUserAttributesCommandInput,
  type AdminUpdateUserAttributesCommandOutput,
  AdminUpdateUserAttributesCommand,
} from "./commands/AdminUpdateUserAttributesCommand";
import {
  type AdminUserGlobalSignOutCommandInput,
  type AdminUserGlobalSignOutCommandOutput,
  AdminUserGlobalSignOutCommand,
} from "./commands/AdminUserGlobalSignOutCommand";
import {
  type AssociateSoftwareTokenCommandInput,
  type AssociateSoftwareTokenCommandOutput,
  AssociateSoftwareTokenCommand,
} from "./commands/AssociateSoftwareTokenCommand";
import {
  type ChangePasswordCommandInput,
  type ChangePasswordCommandOutput,
  ChangePasswordCommand,
} from "./commands/ChangePasswordCommand";
import {
  type CompleteWebAuthnRegistrationCommandInput,
  type CompleteWebAuthnRegistrationCommandOutput,
  CompleteWebAuthnRegistrationCommand,
} from "./commands/CompleteWebAuthnRegistrationCommand";
import {
  type ConfirmDeviceCommandInput,
  type ConfirmDeviceCommandOutput,
  ConfirmDeviceCommand,
} from "./commands/ConfirmDeviceCommand";
import {
  type ConfirmForgotPasswordCommandInput,
  type ConfirmForgotPasswordCommandOutput,
  ConfirmForgotPasswordCommand,
} from "./commands/ConfirmForgotPasswordCommand";
import {
  type ConfirmSignUpCommandInput,
  type ConfirmSignUpCommandOutput,
  ConfirmSignUpCommand,
} from "./commands/ConfirmSignUpCommand";
import {
  type CreateGroupCommandInput,
  type CreateGroupCommandOutput,
  CreateGroupCommand,
} from "./commands/CreateGroupCommand";
import {
  type CreateIdentityProviderCommandInput,
  type CreateIdentityProviderCommandOutput,
  CreateIdentityProviderCommand,
} from "./commands/CreateIdentityProviderCommand";
import {
  type CreateManagedLoginBrandingCommandInput,
  type CreateManagedLoginBrandingCommandOutput,
  CreateManagedLoginBrandingCommand,
} from "./commands/CreateManagedLoginBrandingCommand";
import {
  type CreateResourceServerCommandInput,
  type CreateResourceServerCommandOutput,
  CreateResourceServerCommand,
} from "./commands/CreateResourceServerCommand";
import {
  type CreateTermsCommandInput,
  type CreateTermsCommandOutput,
  CreateTermsCommand,
} from "./commands/CreateTermsCommand";
import {
  type CreateUserImportJobCommandInput,
  type CreateUserImportJobCommandOutput,
  CreateUserImportJobCommand,
} from "./commands/CreateUserImportJobCommand";
import {
  type CreateUserPoolClientCommandInput,
  type CreateUserPoolClientCommandOutput,
  CreateUserPoolClientCommand,
} from "./commands/CreateUserPoolClientCommand";
import {
  type CreateUserPoolCommandInput,
  type CreateUserPoolCommandOutput,
  CreateUserPoolCommand,
} from "./commands/CreateUserPoolCommand";
import {
  type CreateUserPoolDomainCommandInput,
  type CreateUserPoolDomainCommandOutput,
  CreateUserPoolDomainCommand,
} from "./commands/CreateUserPoolDomainCommand";
import {
  type CreateUserPoolReplicaCommandInput,
  type CreateUserPoolReplicaCommandOutput,
  CreateUserPoolReplicaCommand,
} from "./commands/CreateUserPoolReplicaCommand";
import {
  type DeleteGroupCommandInput,
  type DeleteGroupCommandOutput,
  DeleteGroupCommand,
} from "./commands/DeleteGroupCommand";
import {
  type DeleteIdentityProviderCommandInput,
  type DeleteIdentityProviderCommandOutput,
  DeleteIdentityProviderCommand,
} from "./commands/DeleteIdentityProviderCommand";
import {
  type DeleteManagedLoginBrandingCommandInput,
  type DeleteManagedLoginBrandingCommandOutput,
  DeleteManagedLoginBrandingCommand,
} from "./commands/DeleteManagedLoginBrandingCommand";
import {
  type DeleteResourceServerCommandInput,
  type DeleteResourceServerCommandOutput,
  DeleteResourceServerCommand,
} from "./commands/DeleteResourceServerCommand";
import {
  type DeleteTermsCommandInput,
  type DeleteTermsCommandOutput,
  DeleteTermsCommand,
} from "./commands/DeleteTermsCommand";
import {
  type DeleteUserAttributesCommandInput,
  type DeleteUserAttributesCommandOutput,
  DeleteUserAttributesCommand,
} from "./commands/DeleteUserAttributesCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DeleteUserPoolClientCommandInput,
  type DeleteUserPoolClientCommandOutput,
  DeleteUserPoolClientCommand,
} from "./commands/DeleteUserPoolClientCommand";
import {
  type DeleteUserPoolClientSecretCommandInput,
  type DeleteUserPoolClientSecretCommandOutput,
  DeleteUserPoolClientSecretCommand,
} from "./commands/DeleteUserPoolClientSecretCommand";
import {
  type DeleteUserPoolCommandInput,
  type DeleteUserPoolCommandOutput,
  DeleteUserPoolCommand,
} from "./commands/DeleteUserPoolCommand";
import {
  type DeleteUserPoolDomainCommandInput,
  type DeleteUserPoolDomainCommandOutput,
  DeleteUserPoolDomainCommand,
} from "./commands/DeleteUserPoolDomainCommand";
import {
  type DeleteUserPoolReplicaCommandInput,
  type DeleteUserPoolReplicaCommandOutput,
  DeleteUserPoolReplicaCommand,
} from "./commands/DeleteUserPoolReplicaCommand";
import {
  type DeleteWebAuthnCredentialCommandInput,
  type DeleteWebAuthnCredentialCommandOutput,
  DeleteWebAuthnCredentialCommand,
} from "./commands/DeleteWebAuthnCredentialCommand";
import {
  type DescribeIdentityProviderCommandInput,
  type DescribeIdentityProviderCommandOutput,
  DescribeIdentityProviderCommand,
} from "./commands/DescribeIdentityProviderCommand";
import {
  type DescribeManagedLoginBrandingByClientCommandInput,
  type DescribeManagedLoginBrandingByClientCommandOutput,
  DescribeManagedLoginBrandingByClientCommand,
} from "./commands/DescribeManagedLoginBrandingByClientCommand";
import {
  type DescribeManagedLoginBrandingCommandInput,
  type DescribeManagedLoginBrandingCommandOutput,
  DescribeManagedLoginBrandingCommand,
} from "./commands/DescribeManagedLoginBrandingCommand";
import {
  type DescribeResourceServerCommandInput,
  type DescribeResourceServerCommandOutput,
  DescribeResourceServerCommand,
} from "./commands/DescribeResourceServerCommand";
import {
  type DescribeRiskConfigurationCommandInput,
  type DescribeRiskConfigurationCommandOutput,
  DescribeRiskConfigurationCommand,
} from "./commands/DescribeRiskConfigurationCommand";
import {
  type DescribeTermsByClientCommandInput,
  type DescribeTermsByClientCommandOutput,
  DescribeTermsByClientCommand,
} from "./commands/DescribeTermsByClientCommand";
import {
  type DescribeTermsCommandInput,
  type DescribeTermsCommandOutput,
  DescribeTermsCommand,
} from "./commands/DescribeTermsCommand";
import {
  type DescribeUserImportJobCommandInput,
  type DescribeUserImportJobCommandOutput,
  DescribeUserImportJobCommand,
} from "./commands/DescribeUserImportJobCommand";
import {
  type DescribeUserPoolClientCommandInput,
  type DescribeUserPoolClientCommandOutput,
  DescribeUserPoolClientCommand,
} from "./commands/DescribeUserPoolClientCommand";
import {
  type DescribeUserPoolCommandInput,
  type DescribeUserPoolCommandOutput,
  DescribeUserPoolCommand,
} from "./commands/DescribeUserPoolCommand";
import {
  type DescribeUserPoolDomainCommandInput,
  type DescribeUserPoolDomainCommandOutput,
  DescribeUserPoolDomainCommand,
} from "./commands/DescribeUserPoolDomainCommand";
import {
  type ForgetDeviceCommandInput,
  type ForgetDeviceCommandOutput,
  ForgetDeviceCommand,
} from "./commands/ForgetDeviceCommand";
import {
  type ForgotPasswordCommandInput,
  type ForgotPasswordCommandOutput,
  ForgotPasswordCommand,
} from "./commands/ForgotPasswordCommand";
import {
  type GetClientTokenCommandInput,
  type GetClientTokenCommandOutput,
  GetClientTokenCommand,
} from "./commands/GetClientTokenCommand";
import {
  type GetCSVHeaderCommandInput,
  type GetCSVHeaderCommandOutput,
  GetCSVHeaderCommand,
} from "./commands/GetCSVHeaderCommand";
import { type GetDeviceCommandInput, type GetDeviceCommandOutput, GetDeviceCommand } from "./commands/GetDeviceCommand";
import { type GetGroupCommandInput, type GetGroupCommandOutput, GetGroupCommand } from "./commands/GetGroupCommand";
import {
  type GetIdentityProviderByIdentifierCommandInput,
  type GetIdentityProviderByIdentifierCommandOutput,
  GetIdentityProviderByIdentifierCommand,
} from "./commands/GetIdentityProviderByIdentifierCommand";
import {
  type GetLogDeliveryConfigurationCommandInput,
  type GetLogDeliveryConfigurationCommandOutput,
  GetLogDeliveryConfigurationCommand,
} from "./commands/GetLogDeliveryConfigurationCommand";
import {
  type GetProvisionedLimitCommandInput,
  type GetProvisionedLimitCommandOutput,
  GetProvisionedLimitCommand,
} from "./commands/GetProvisionedLimitCommand";
import {
  type GetSigningCertificateCommandInput,
  type GetSigningCertificateCommandOutput,
  GetSigningCertificateCommand,
} from "./commands/GetSigningCertificateCommand";
import {
  type GetTokensFromRefreshTokenCommandInput,
  type GetTokensFromRefreshTokenCommandOutput,
  GetTokensFromRefreshTokenCommand,
} from "./commands/GetTokensFromRefreshTokenCommand";
import {
  type GetUICustomizationCommandInput,
  type GetUICustomizationCommandOutput,
  GetUICustomizationCommand,
} from "./commands/GetUICustomizationCommand";
import {
  type GetUserAttributeVerificationCodeCommandInput,
  type GetUserAttributeVerificationCodeCommandOutput,
  GetUserAttributeVerificationCodeCommand,
} from "./commands/GetUserAttributeVerificationCodeCommand";
import {
  type GetUserAuthFactorsCommandInput,
  type GetUserAuthFactorsCommandOutput,
  GetUserAuthFactorsCommand,
} from "./commands/GetUserAuthFactorsCommand";
import { type GetUserCommandInput, type GetUserCommandOutput, GetUserCommand } from "./commands/GetUserCommand";
import {
  type GetUserPoolMfaConfigCommandInput,
  type GetUserPoolMfaConfigCommandOutput,
  GetUserPoolMfaConfigCommand,
} from "./commands/GetUserPoolMfaConfigCommand";
import {
  type GlobalSignOutCommandInput,
  type GlobalSignOutCommandOutput,
  GlobalSignOutCommand,
} from "./commands/GlobalSignOutCommand";
import {
  type InitiateAuthCommandInput,
  type InitiateAuthCommandOutput,
  InitiateAuthCommand,
} from "./commands/InitiateAuthCommand";
import {
  type ListDevicesCommandInput,
  type ListDevicesCommandOutput,
  ListDevicesCommand,
} from "./commands/ListDevicesCommand";
import {
  type ListGroupsCommandInput,
  type ListGroupsCommandOutput,
  ListGroupsCommand,
} from "./commands/ListGroupsCommand";
import {
  type ListIdentityProvidersCommandInput,
  type ListIdentityProvidersCommandOutput,
  ListIdentityProvidersCommand,
} from "./commands/ListIdentityProvidersCommand";
import {
  type ListResourceServersCommandInput,
  type ListResourceServersCommandOutput,
  ListResourceServersCommand,
} from "./commands/ListResourceServersCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type ListTermsCommandInput, type ListTermsCommandOutput, ListTermsCommand } from "./commands/ListTermsCommand";
import {
  type ListUserImportJobsCommandInput,
  type ListUserImportJobsCommandOutput,
  ListUserImportJobsCommand,
} from "./commands/ListUserImportJobsCommand";
import {
  type ListUserPoolClientsCommandInput,
  type ListUserPoolClientsCommandOutput,
  ListUserPoolClientsCommand,
} from "./commands/ListUserPoolClientsCommand";
import {
  type ListUserPoolClientSecretsCommandInput,
  type ListUserPoolClientSecretsCommandOutput,
  ListUserPoolClientSecretsCommand,
} from "./commands/ListUserPoolClientSecretsCommand";
import {
  type ListUserPoolReplicasCommandInput,
  type ListUserPoolReplicasCommandOutput,
  ListUserPoolReplicasCommand,
} from "./commands/ListUserPoolReplicasCommand";
import {
  type ListUserPoolsCommandInput,
  type ListUserPoolsCommandOutput,
  ListUserPoolsCommand,
} from "./commands/ListUserPoolsCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
import {
  type ListUsersInGroupCommandInput,
  type ListUsersInGroupCommandOutput,
  ListUsersInGroupCommand,
} from "./commands/ListUsersInGroupCommand";
import {
  type ListWebAuthnCredentialsCommandInput,
  type ListWebAuthnCredentialsCommandOutput,
  ListWebAuthnCredentialsCommand,
} from "./commands/ListWebAuthnCredentialsCommand";
import {
  type ResendConfirmationCodeCommandInput,
  type ResendConfirmationCodeCommandOutput,
  ResendConfirmationCodeCommand,
} from "./commands/ResendConfirmationCodeCommand";
import {
  type RespondToAuthChallengeCommandInput,
  type RespondToAuthChallengeCommandOutput,
  RespondToAuthChallengeCommand,
} from "./commands/RespondToAuthChallengeCommand";
import {
  type RevokeTokenCommandInput,
  type RevokeTokenCommandOutput,
  RevokeTokenCommand,
} from "./commands/RevokeTokenCommand";
import {
  type SetLogDeliveryConfigurationCommandInput,
  type SetLogDeliveryConfigurationCommandOutput,
  SetLogDeliveryConfigurationCommand,
} from "./commands/SetLogDeliveryConfigurationCommand";
import {
  type SetRiskConfigurationCommandInput,
  type SetRiskConfigurationCommandOutput,
  SetRiskConfigurationCommand,
} from "./commands/SetRiskConfigurationCommand";
import {
  type SetUICustomizationCommandInput,
  type SetUICustomizationCommandOutput,
  SetUICustomizationCommand,
} from "./commands/SetUICustomizationCommand";
import {
  type SetUserMFAPreferenceCommandInput,
  type SetUserMFAPreferenceCommandOutput,
  SetUserMFAPreferenceCommand,
} from "./commands/SetUserMFAPreferenceCommand";
import {
  type SetUserPoolMfaConfigCommandInput,
  type SetUserPoolMfaConfigCommandOutput,
  SetUserPoolMfaConfigCommand,
} from "./commands/SetUserPoolMfaConfigCommand";
import {
  type SetUserSettingsCommandInput,
  type SetUserSettingsCommandOutput,
  SetUserSettingsCommand,
} from "./commands/SetUserSettingsCommand";
import { type SignUpCommandInput, type SignUpCommandOutput, SignUpCommand } from "./commands/SignUpCommand";
import {
  type StartUserImportJobCommandInput,
  type StartUserImportJobCommandOutput,
  StartUserImportJobCommand,
} from "./commands/StartUserImportJobCommand";
import {
  type StartWebAuthnRegistrationCommandInput,
  type StartWebAuthnRegistrationCommandOutput,
  StartWebAuthnRegistrationCommand,
} from "./commands/StartWebAuthnRegistrationCommand";
import {
  type StopUserImportJobCommandInput,
  type StopUserImportJobCommandOutput,
  StopUserImportJobCommand,
} from "./commands/StopUserImportJobCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAuthEventFeedbackCommandInput,
  type UpdateAuthEventFeedbackCommandOutput,
  UpdateAuthEventFeedbackCommand,
} from "./commands/UpdateAuthEventFeedbackCommand";
import {
  type UpdateDeviceStatusCommandInput,
  type UpdateDeviceStatusCommandOutput,
  UpdateDeviceStatusCommand,
} from "./commands/UpdateDeviceStatusCommand";
import {
  type UpdateGroupCommandInput,
  type UpdateGroupCommandOutput,
  UpdateGroupCommand,
} from "./commands/UpdateGroupCommand";
import {
  type UpdateIdentityProviderCommandInput,
  type UpdateIdentityProviderCommandOutput,
  UpdateIdentityProviderCommand,
} from "./commands/UpdateIdentityProviderCommand";
import {
  type UpdateManagedLoginBrandingCommandInput,
  type UpdateManagedLoginBrandingCommandOutput,
  UpdateManagedLoginBrandingCommand,
} from "./commands/UpdateManagedLoginBrandingCommand";
import {
  type UpdateProvisionedLimitCommandInput,
  type UpdateProvisionedLimitCommandOutput,
  UpdateProvisionedLimitCommand,
} from "./commands/UpdateProvisionedLimitCommand";
import {
  type UpdateResourceServerCommandInput,
  type UpdateResourceServerCommandOutput,
  UpdateResourceServerCommand,
} from "./commands/UpdateResourceServerCommand";
import {
  type UpdateTermsCommandInput,
  type UpdateTermsCommandOutput,
  UpdateTermsCommand,
} from "./commands/UpdateTermsCommand";
import {
  type UpdateUserAttributesCommandInput,
  type UpdateUserAttributesCommandOutput,
  UpdateUserAttributesCommand,
} from "./commands/UpdateUserAttributesCommand";
import {
  type UpdateUserPoolClientCommandInput,
  type UpdateUserPoolClientCommandOutput,
  UpdateUserPoolClientCommand,
} from "./commands/UpdateUserPoolClientCommand";
import {
  type UpdateUserPoolCommandInput,
  type UpdateUserPoolCommandOutput,
  UpdateUserPoolCommand,
} from "./commands/UpdateUserPoolCommand";
import {
  type UpdateUserPoolDomainCommandInput,
  type UpdateUserPoolDomainCommandOutput,
  UpdateUserPoolDomainCommand,
} from "./commands/UpdateUserPoolDomainCommand";
import {
  type UpdateUserPoolReplicaCommandInput,
  type UpdateUserPoolReplicaCommandOutput,
  UpdateUserPoolReplicaCommand,
} from "./commands/UpdateUserPoolReplicaCommand";
import {
  type VerifySoftwareTokenCommandInput,
  type VerifySoftwareTokenCommandOutput,
  VerifySoftwareTokenCommand,
} from "./commands/VerifySoftwareTokenCommand";
import {
  type VerifyUserAttributeCommandInput,
  type VerifyUserAttributeCommandOutput,
  VerifyUserAttributeCommand,
} from "./commands/VerifyUserAttributeCommand";
import { paginateAdminListGroupsForUser } from "./pagination/AdminListGroupsForUserPaginator";
import { paginateAdminListUserAuthEvents } from "./pagination/AdminListUserAuthEventsPaginator";
import { paginateListGroups } from "./pagination/ListGroupsPaginator";
import { paginateListIdentityProviders } from "./pagination/ListIdentityProvidersPaginator";
import { paginateListResourceServers } from "./pagination/ListResourceServersPaginator";
import { paginateListUserPoolClients } from "./pagination/ListUserPoolClientsPaginator";
import { paginateListUserPools } from "./pagination/ListUserPoolsPaginator";
import { paginateListUsersInGroup } from "./pagination/ListUsersInGroupPaginator";
import { paginateListUsers } from "./pagination/ListUsersPaginator";

const commands = {
  AddCustomAttributesCommand,
  AddUserPoolClientSecretCommand,
  AdminAddUserToGroupCommand,
  AdminConfirmSignUpCommand,
  AdminCreateUserCommand,
  AdminDeleteSoftwareTokenCommand,
  AdminDeleteUserCommand,
  AdminDeleteUserAttributesCommand,
  AdminDisableProviderForUserCommand,
  AdminDisableUserCommand,
  AdminEnableUserCommand,
  AdminForgetDeviceCommand,
  AdminGetDeviceCommand,
  AdminGetUserCommand,
  AdminGetUserAuthFactorsCommand,
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
  CreateUserPoolReplicaCommand,
  DeleteGroupCommand,
  DeleteIdentityProviderCommand,
  DeleteManagedLoginBrandingCommand,
  DeleteResourceServerCommand,
  DeleteTermsCommand,
  DeleteUserCommand,
  DeleteUserAttributesCommand,
  DeleteUserPoolCommand,
  DeleteUserPoolClientCommand,
  DeleteUserPoolClientSecretCommand,
  DeleteUserPoolDomainCommand,
  DeleteUserPoolReplicaCommand,
  DeleteWebAuthnCredentialCommand,
  DescribeIdentityProviderCommand,
  DescribeManagedLoginBrandingCommand,
  DescribeManagedLoginBrandingByClientCommand,
  DescribeResourceServerCommand,
  DescribeRiskConfigurationCommand,
  DescribeTermsCommand,
  DescribeTermsByClientCommand,
  DescribeUserImportJobCommand,
  DescribeUserPoolCommand,
  DescribeUserPoolClientCommand,
  DescribeUserPoolDomainCommand,
  ForgetDeviceCommand,
  ForgotPasswordCommand,
  GetClientTokenCommand,
  GetCSVHeaderCommand,
  GetDeviceCommand,
  GetGroupCommand,
  GetIdentityProviderByIdentifierCommand,
  GetLogDeliveryConfigurationCommand,
  GetProvisionedLimitCommand,
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
  ListUserPoolClientSecretsCommand,
  ListUserPoolReplicasCommand,
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
  UpdateProvisionedLimitCommand,
  UpdateResourceServerCommand,
  UpdateTermsCommand,
  UpdateUserAttributesCommand,
  UpdateUserPoolCommand,
  UpdateUserPoolClientCommand,
  UpdateUserPoolDomainCommand,
  UpdateUserPoolReplicaCommand,
  VerifySoftwareTokenCommand,
  VerifyUserAttributeCommand,
};
const paginators = {
  paginateAdminListGroupsForUser,
  paginateAdminListUserAuthEvents,
  paginateListGroups,
  paginateListIdentityProviders,
  paginateListResourceServers,
  paginateListUserPoolClients,
  paginateListUserPools,
  paginateListUsers,
  paginateListUsersInGroup,
};

/**
 * @public
 */
export interface CognitoIdentityProviderRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CognitoIdentityProvider {
  /**
   * @see {@link AddCustomAttributesCommand}
   */
  addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AddCustomAttributesCommandOutput>;
  addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    cb: (err: any, data?: AddCustomAttributesCommandOutput) => void
  ): void;
  addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AddCustomAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link AddUserPoolClientSecretCommand}
   */
  addUserPoolClientSecret(
    args: AddUserPoolClientSecretCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AddUserPoolClientSecretCommandOutput>;
  addUserPoolClientSecret(
    args: AddUserPoolClientSecretCommandInput,
    cb: (err: any, data?: AddUserPoolClientSecretCommandOutput) => void
  ): void;
  addUserPoolClientSecret(
    args: AddUserPoolClientSecretCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AddUserPoolClientSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminAddUserToGroupCommand}
   */
  adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminAddUserToGroupCommandOutput>;
  adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    cb: (err: any, data?: AdminAddUserToGroupCommandOutput) => void
  ): void;
  adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminAddUserToGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminConfirmSignUpCommand}
   */
  adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminConfirmSignUpCommandOutput>;
  adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    cb: (err: any, data?: AdminConfirmSignUpCommandOutput) => void
  ): void;
  adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminConfirmSignUpCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminCreateUserCommand}
   */
  adminCreateUser(
    args: AdminCreateUserCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminCreateUserCommandOutput>;
  adminCreateUser(
    args: AdminCreateUserCommandInput,
    cb: (err: any, data?: AdminCreateUserCommandOutput) => void
  ): void;
  adminCreateUser(
    args: AdminCreateUserCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminCreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDeleteSoftwareTokenCommand}
   */
  adminDeleteSoftwareToken(
    args: AdminDeleteSoftwareTokenCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminDeleteSoftwareTokenCommandOutput>;
  adminDeleteSoftwareToken(
    args: AdminDeleteSoftwareTokenCommandInput,
    cb: (err: any, data?: AdminDeleteSoftwareTokenCommandOutput) => void
  ): void;
  adminDeleteSoftwareToken(
    args: AdminDeleteSoftwareTokenCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminDeleteSoftwareTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDeleteUserCommand}
   */
  adminDeleteUser(
    args: AdminDeleteUserCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminDeleteUserCommandOutput>;
  adminDeleteUser(
    args: AdminDeleteUserCommandInput,
    cb: (err: any, data?: AdminDeleteUserCommandOutput) => void
  ): void;
  adminDeleteUser(
    args: AdminDeleteUserCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminDeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDeleteUserAttributesCommand}
   */
  adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminDeleteUserAttributesCommandOutput>;
  adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    cb: (err: any, data?: AdminDeleteUserAttributesCommandOutput) => void
  ): void;
  adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminDeleteUserAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDisableProviderForUserCommand}
   */
  adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminDisableProviderForUserCommandOutput>;
  adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    cb: (err: any, data?: AdminDisableProviderForUserCommandOutput) => void
  ): void;
  adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminDisableProviderForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminDisableUserCommand}
   */
  adminDisableUser(
    args: AdminDisableUserCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminDisableUserCommandOutput>;
  adminDisableUser(
    args: AdminDisableUserCommandInput,
    cb: (err: any, data?: AdminDisableUserCommandOutput) => void
  ): void;
  adminDisableUser(
    args: AdminDisableUserCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminDisableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminEnableUserCommand}
   */
  adminEnableUser(
    args: AdminEnableUserCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminEnableUserCommandOutput>;
  adminEnableUser(
    args: AdminEnableUserCommandInput,
    cb: (err: any, data?: AdminEnableUserCommandOutput) => void
  ): void;
  adminEnableUser(
    args: AdminEnableUserCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminEnableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminForgetDeviceCommand}
   */
  adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminForgetDeviceCommandOutput>;
  adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    cb: (err: any, data?: AdminForgetDeviceCommandOutput) => void
  ): void;
  adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminForgetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminGetDeviceCommand}
   */
  adminGetDevice(
    args: AdminGetDeviceCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminGetDeviceCommandOutput>;
  adminGetDevice(
    args: AdminGetDeviceCommandInput,
    cb: (err: any, data?: AdminGetDeviceCommandOutput) => void
  ): void;
  adminGetDevice(
    args: AdminGetDeviceCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminGetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminGetUserCommand}
   */
  adminGetUser(
    args: AdminGetUserCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminGetUserCommandOutput>;
  adminGetUser(
    args: AdminGetUserCommandInput,
    cb: (err: any, data?: AdminGetUserCommandOutput) => void
  ): void;
  adminGetUser(
    args: AdminGetUserCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminGetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminGetUserAuthFactorsCommand}
   */
  adminGetUserAuthFactors(
    args: AdminGetUserAuthFactorsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminGetUserAuthFactorsCommandOutput>;
  adminGetUserAuthFactors(
    args: AdminGetUserAuthFactorsCommandInput,
    cb: (err: any, data?: AdminGetUserAuthFactorsCommandOutput) => void
  ): void;
  adminGetUserAuthFactors(
    args: AdminGetUserAuthFactorsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminGetUserAuthFactorsCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminInitiateAuthCommand}
   */
  adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminInitiateAuthCommandOutput>;
  adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    cb: (err: any, data?: AdminInitiateAuthCommandOutput) => void
  ): void;
  adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminInitiateAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminLinkProviderForUserCommand}
   */
  adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminLinkProviderForUserCommandOutput>;
  adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    cb: (err: any, data?: AdminLinkProviderForUserCommandOutput) => void
  ): void;
  adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminLinkProviderForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListDevicesCommand}
   */
  adminListDevices(
    args: AdminListDevicesCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminListDevicesCommandOutput>;
  adminListDevices(
    args: AdminListDevicesCommandInput,
    cb: (err: any, data?: AdminListDevicesCommandOutput) => void
  ): void;
  adminListDevices(
    args: AdminListDevicesCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListGroupsForUserCommand}
   */
  adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminListGroupsForUserCommandOutput>;
  adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    cb: (err: any, data?: AdminListGroupsForUserCommandOutput) => void
  ): void;
  adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminListGroupsForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListUserAuthEventsCommand}
   */
  adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminListUserAuthEventsCommandOutput>;
  adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    cb: (err: any, data?: AdminListUserAuthEventsCommandOutput) => void
  ): void;
  adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminListUserAuthEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminRemoveUserFromGroupCommand}
   */
  adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminRemoveUserFromGroupCommandOutput>;
  adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    cb: (err: any, data?: AdminRemoveUserFromGroupCommandOutput) => void
  ): void;
  adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminRemoveUserFromGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminResetUserPasswordCommand}
   */
  adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminResetUserPasswordCommandOutput>;
  adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    cb: (err: any, data?: AdminResetUserPasswordCommandOutput) => void
  ): void;
  adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminResetUserPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminRespondToAuthChallengeCommand}
   */
  adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminRespondToAuthChallengeCommandOutput>;
  adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    cb: (err: any, data?: AdminRespondToAuthChallengeCommandOutput) => void
  ): void;
  adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminRespondToAuthChallengeCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminSetUserMFAPreferenceCommand}
   */
  adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminSetUserMFAPreferenceCommandOutput>;
  adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    cb: (err: any, data?: AdminSetUserMFAPreferenceCommandOutput) => void
  ): void;
  adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminSetUserMFAPreferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminSetUserPasswordCommand}
   */
  adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminSetUserPasswordCommandOutput>;
  adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    cb: (err: any, data?: AdminSetUserPasswordCommandOutput) => void
  ): void;
  adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminSetUserPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminSetUserSettingsCommand}
   */
  adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminSetUserSettingsCommandOutput>;
  adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    cb: (err: any, data?: AdminSetUserSettingsCommandOutput) => void
  ): void;
  adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminSetUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUpdateAuthEventFeedbackCommand}
   */
  adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminUpdateAuthEventFeedbackCommandOutput>;
  adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    cb: (err: any, data?: AdminUpdateAuthEventFeedbackCommandOutput) => void
  ): void;
  adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminUpdateAuthEventFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUpdateDeviceStatusCommand}
   */
  adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminUpdateDeviceStatusCommandOutput>;
  adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    cb: (err: any, data?: AdminUpdateDeviceStatusCommandOutput) => void
  ): void;
  adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminUpdateDeviceStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUpdateUserAttributesCommand}
   */
  adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminUpdateUserAttributesCommandOutput>;
  adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    cb: (err: any, data?: AdminUpdateUserAttributesCommandOutput) => void
  ): void;
  adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminUpdateUserAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminUserGlobalSignOutCommand}
   */
  adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AdminUserGlobalSignOutCommandOutput>;
  adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    cb: (err: any, data?: AdminUserGlobalSignOutCommandOutput) => void
  ): void;
  adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AdminUserGlobalSignOutCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSoftwareTokenCommand}
   */
  associateSoftwareToken(): Promise<AssociateSoftwareTokenCommandOutput>;
  associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<AssociateSoftwareTokenCommandOutput>;
  associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    cb: (err: any, data?: AssociateSoftwareTokenCommandOutput) => void
  ): void;
  associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: AssociateSoftwareTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangePasswordCommand}
   */
  changePassword(
    args: ChangePasswordCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ChangePasswordCommandOutput>;
  changePassword(
    args: ChangePasswordCommandInput,
    cb: (err: any, data?: ChangePasswordCommandOutput) => void
  ): void;
  changePassword(
    args: ChangePasswordCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ChangePasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteWebAuthnRegistrationCommand}
   */
  completeWebAuthnRegistration(
    args: CompleteWebAuthnRegistrationCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CompleteWebAuthnRegistrationCommandOutput>;
  completeWebAuthnRegistration(
    args: CompleteWebAuthnRegistrationCommandInput,
    cb: (err: any, data?: CompleteWebAuthnRegistrationCommandOutput) => void
  ): void;
  completeWebAuthnRegistration(
    args: CompleteWebAuthnRegistrationCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CompleteWebAuthnRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmDeviceCommand}
   */
  confirmDevice(
    args: ConfirmDeviceCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ConfirmDeviceCommandOutput>;
  confirmDevice(
    args: ConfirmDeviceCommandInput,
    cb: (err: any, data?: ConfirmDeviceCommandOutput) => void
  ): void;
  confirmDevice(
    args: ConfirmDeviceCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ConfirmDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmForgotPasswordCommand}
   */
  confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ConfirmForgotPasswordCommandOutput>;
  confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    cb: (err: any, data?: ConfirmForgotPasswordCommandOutput) => void
  ): void;
  confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ConfirmForgotPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmSignUpCommand}
   */
  confirmSignUp(
    args: ConfirmSignUpCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ConfirmSignUpCommandOutput>;
  confirmSignUp(
    args: ConfirmSignUpCommandInput,
    cb: (err: any, data?: ConfirmSignUpCommandOutput) => void
  ): void;
  confirmSignUp(
    args: ConfirmSignUpCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ConfirmSignUpCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CreateGroupCommandOutput>;
  createGroup(
    args: CreateGroupCommandInput,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIdentityProviderCommand}
   */
  createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CreateIdentityProviderCommandOutput>;
  createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): void;
  createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateManagedLoginBrandingCommand}
   */
  createManagedLoginBranding(
    args: CreateManagedLoginBrandingCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CreateManagedLoginBrandingCommandOutput>;
  createManagedLoginBranding(
    args: CreateManagedLoginBrandingCommandInput,
    cb: (err: any, data?: CreateManagedLoginBrandingCommandOutput) => void
  ): void;
  createManagedLoginBranding(
    args: CreateManagedLoginBrandingCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CreateManagedLoginBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceServerCommand}
   */
  createResourceServer(
    args: CreateResourceServerCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CreateResourceServerCommandOutput>;
  createResourceServer(
    args: CreateResourceServerCommandInput,
    cb: (err: any, data?: CreateResourceServerCommandOutput) => void
  ): void;
  createResourceServer(
    args: CreateResourceServerCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CreateResourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTermsCommand}
   */
  createTerms(
    args: CreateTermsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CreateTermsCommandOutput>;
  createTerms(
    args: CreateTermsCommandInput,
    cb: (err: any, data?: CreateTermsCommandOutput) => void
  ): void;
  createTerms(
    args: CreateTermsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CreateTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserImportJobCommand}
   */
  createUserImportJob(
    args: CreateUserImportJobCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CreateUserImportJobCommandOutput>;
  createUserImportJob(
    args: CreateUserImportJobCommandInput,
    cb: (err: any, data?: CreateUserImportJobCommandOutput) => void
  ): void;
  createUserImportJob(
    args: CreateUserImportJobCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CreateUserImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserPoolCommand}
   */
  createUserPool(
    args: CreateUserPoolCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CreateUserPoolCommandOutput>;
  createUserPool(
    args: CreateUserPoolCommandInput,
    cb: (err: any, data?: CreateUserPoolCommandOutput) => void
  ): void;
  createUserPool(
    args: CreateUserPoolCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CreateUserPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserPoolClientCommand}
   */
  createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CreateUserPoolClientCommandOutput>;
  createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    cb: (err: any, data?: CreateUserPoolClientCommandOutput) => void
  ): void;
  createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CreateUserPoolClientCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserPoolDomainCommand}
   */
  createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CreateUserPoolDomainCommandOutput>;
  createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    cb: (err: any, data?: CreateUserPoolDomainCommandOutput) => void
  ): void;
  createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CreateUserPoolDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserPoolReplicaCommand}
   */
  createUserPoolReplica(
    args: CreateUserPoolReplicaCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<CreateUserPoolReplicaCommandOutput>;
  createUserPoolReplica(
    args: CreateUserPoolReplicaCommandInput,
    cb: (err: any, data?: CreateUserPoolReplicaCommandOutput) => void
  ): void;
  createUserPoolReplica(
    args: CreateUserPoolReplicaCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: CreateUserPoolReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdentityProviderCommand}
   */
  deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteIdentityProviderCommandOutput>;
  deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): void;
  deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteManagedLoginBrandingCommand}
   */
  deleteManagedLoginBranding(
    args: DeleteManagedLoginBrandingCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteManagedLoginBrandingCommandOutput>;
  deleteManagedLoginBranding(
    args: DeleteManagedLoginBrandingCommandInput,
    cb: (err: any, data?: DeleteManagedLoginBrandingCommandOutput) => void
  ): void;
  deleteManagedLoginBranding(
    args: DeleteManagedLoginBrandingCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteManagedLoginBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceServerCommand}
   */
  deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteResourceServerCommandOutput>;
  deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    cb: (err: any, data?: DeleteResourceServerCommandOutput) => void
  ): void;
  deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteResourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTermsCommand}
   */
  deleteTerms(
    args: DeleteTermsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteTermsCommandOutput>;
  deleteTerms(
    args: DeleteTermsCommandInput,
    cb: (err: any, data?: DeleteTermsCommandOutput) => void
  ): void;
  deleteTerms(
    args: DeleteTermsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserAttributesCommand}
   */
  deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteUserAttributesCommandOutput>;
  deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    cb: (err: any, data?: DeleteUserAttributesCommandOutput) => void
  ): void;
  deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteUserAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserPoolCommand}
   */
  deleteUserPool(
    args: DeleteUserPoolCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteUserPoolCommandOutput>;
  deleteUserPool(
    args: DeleteUserPoolCommandInput,
    cb: (err: any, data?: DeleteUserPoolCommandOutput) => void
  ): void;
  deleteUserPool(
    args: DeleteUserPoolCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteUserPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserPoolClientCommand}
   */
  deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteUserPoolClientCommandOutput>;
  deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    cb: (err: any, data?: DeleteUserPoolClientCommandOutput) => void
  ): void;
  deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteUserPoolClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserPoolClientSecretCommand}
   */
  deleteUserPoolClientSecret(
    args: DeleteUserPoolClientSecretCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteUserPoolClientSecretCommandOutput>;
  deleteUserPoolClientSecret(
    args: DeleteUserPoolClientSecretCommandInput,
    cb: (err: any, data?: DeleteUserPoolClientSecretCommandOutput) => void
  ): void;
  deleteUserPoolClientSecret(
    args: DeleteUserPoolClientSecretCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteUserPoolClientSecretCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserPoolDomainCommand}
   */
  deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteUserPoolDomainCommandOutput>;
  deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    cb: (err: any, data?: DeleteUserPoolDomainCommandOutput) => void
  ): void;
  deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteUserPoolDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserPoolReplicaCommand}
   */
  deleteUserPoolReplica(
    args: DeleteUserPoolReplicaCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteUserPoolReplicaCommandOutput>;
  deleteUserPoolReplica(
    args: DeleteUserPoolReplicaCommandInput,
    cb: (err: any, data?: DeleteUserPoolReplicaCommandOutput) => void
  ): void;
  deleteUserPoolReplica(
    args: DeleteUserPoolReplicaCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteUserPoolReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebAuthnCredentialCommand}
   */
  deleteWebAuthnCredential(
    args: DeleteWebAuthnCredentialCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DeleteWebAuthnCredentialCommandOutput>;
  deleteWebAuthnCredential(
    args: DeleteWebAuthnCredentialCommandInput,
    cb: (err: any, data?: DeleteWebAuthnCredentialCommandOutput) => void
  ): void;
  deleteWebAuthnCredential(
    args: DeleteWebAuthnCredentialCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DeleteWebAuthnCredentialCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIdentityProviderCommand}
   */
  describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeIdentityProviderCommandOutput>;
  describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    cb: (err: any, data?: DescribeIdentityProviderCommandOutput) => void
  ): void;
  describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeManagedLoginBrandingCommand}
   */
  describeManagedLoginBranding(
    args: DescribeManagedLoginBrandingCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeManagedLoginBrandingCommandOutput>;
  describeManagedLoginBranding(
    args: DescribeManagedLoginBrandingCommandInput,
    cb: (err: any, data?: DescribeManagedLoginBrandingCommandOutput) => void
  ): void;
  describeManagedLoginBranding(
    args: DescribeManagedLoginBrandingCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeManagedLoginBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeManagedLoginBrandingByClientCommand}
   */
  describeManagedLoginBrandingByClient(
    args: DescribeManagedLoginBrandingByClientCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeManagedLoginBrandingByClientCommandOutput>;
  describeManagedLoginBrandingByClient(
    args: DescribeManagedLoginBrandingByClientCommandInput,
    cb: (err: any, data?: DescribeManagedLoginBrandingByClientCommandOutput) => void
  ): void;
  describeManagedLoginBrandingByClient(
    args: DescribeManagedLoginBrandingByClientCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeManagedLoginBrandingByClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourceServerCommand}
   */
  describeResourceServer(
    args: DescribeResourceServerCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeResourceServerCommandOutput>;
  describeResourceServer(
    args: DescribeResourceServerCommandInput,
    cb: (err: any, data?: DescribeResourceServerCommandOutput) => void
  ): void;
  describeResourceServer(
    args: DescribeResourceServerCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeResourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRiskConfigurationCommand}
   */
  describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeRiskConfigurationCommandOutput>;
  describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    cb: (err: any, data?: DescribeRiskConfigurationCommandOutput) => void
  ): void;
  describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeRiskConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTermsCommand}
   */
  describeTerms(
    args: DescribeTermsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeTermsCommandOutput>;
  describeTerms(
    args: DescribeTermsCommandInput,
    cb: (err: any, data?: DescribeTermsCommandOutput) => void
  ): void;
  describeTerms(
    args: DescribeTermsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTermsByClientCommand}
   */
  describeTermsByClient(
    args: DescribeTermsByClientCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeTermsByClientCommandOutput>;
  describeTermsByClient(
    args: DescribeTermsByClientCommandInput,
    cb: (err: any, data?: DescribeTermsByClientCommandOutput) => void
  ): void;
  describeTermsByClient(
    args: DescribeTermsByClientCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeTermsByClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserImportJobCommand}
   */
  describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeUserImportJobCommandOutput>;
  describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    cb: (err: any, data?: DescribeUserImportJobCommandOutput) => void
  ): void;
  describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeUserImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserPoolCommand}
   */
  describeUserPool(
    args: DescribeUserPoolCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeUserPoolCommandOutput>;
  describeUserPool(
    args: DescribeUserPoolCommandInput,
    cb: (err: any, data?: DescribeUserPoolCommandOutput) => void
  ): void;
  describeUserPool(
    args: DescribeUserPoolCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeUserPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserPoolClientCommand}
   */
  describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeUserPoolClientCommandOutput>;
  describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    cb: (err: any, data?: DescribeUserPoolClientCommandOutput) => void
  ): void;
  describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeUserPoolClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserPoolDomainCommand}
   */
  describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<DescribeUserPoolDomainCommandOutput>;
  describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    cb: (err: any, data?: DescribeUserPoolDomainCommandOutput) => void
  ): void;
  describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: DescribeUserPoolDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ForgetDeviceCommand}
   */
  forgetDevice(
    args: ForgetDeviceCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ForgetDeviceCommandOutput>;
  forgetDevice(
    args: ForgetDeviceCommandInput,
    cb: (err: any, data?: ForgetDeviceCommandOutput) => void
  ): void;
  forgetDevice(
    args: ForgetDeviceCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ForgetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link ForgotPasswordCommand}
   */
  forgotPassword(
    args: ForgotPasswordCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ForgotPasswordCommandOutput>;
  forgotPassword(
    args: ForgotPasswordCommandInput,
    cb: (err: any, data?: ForgotPasswordCommandOutput) => void
  ): void;
  forgotPassword(
    args: ForgotPasswordCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ForgotPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClientTokenCommand}
   */
  getClientToken(
    args: GetClientTokenCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetClientTokenCommandOutput>;
  getClientToken(
    args: GetClientTokenCommandInput,
    cb: (err: any, data?: GetClientTokenCommandOutput) => void
  ): void;
  getClientToken(
    args: GetClientTokenCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetClientTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCSVHeaderCommand}
   */
  getCSVHeader(
    args: GetCSVHeaderCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetCSVHeaderCommandOutput>;
  getCSVHeader(
    args: GetCSVHeaderCommandInput,
    cb: (err: any, data?: GetCSVHeaderCommandOutput) => void
  ): void;
  getCSVHeader(
    args: GetCSVHeaderCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetCSVHeaderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceCommand}
   */
  getDevice(
    args: GetDeviceCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetDeviceCommandOutput>;
  getDevice(
    args: GetDeviceCommandInput,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;
  getDevice(
    args: GetDeviceCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(
    args: GetGroupCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetGroupCommandOutput>;
  getGroup(
    args: GetGroupCommandInput,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  getGroup(
    args: GetGroupCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityProviderByIdentifierCommand}
   */
  getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetIdentityProviderByIdentifierCommandOutput>;
  getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    cb: (err: any, data?: GetIdentityProviderByIdentifierCommandOutput) => void
  ): void;
  getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetIdentityProviderByIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogDeliveryConfigurationCommand}
   */
  getLogDeliveryConfiguration(
    args: GetLogDeliveryConfigurationCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetLogDeliveryConfigurationCommandOutput>;
  getLogDeliveryConfiguration(
    args: GetLogDeliveryConfigurationCommandInput,
    cb: (err: any, data?: GetLogDeliveryConfigurationCommandOutput) => void
  ): void;
  getLogDeliveryConfiguration(
    args: GetLogDeliveryConfigurationCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetLogDeliveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProvisionedLimitCommand}
   */
  getProvisionedLimit(
    args: GetProvisionedLimitCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetProvisionedLimitCommandOutput>;
  getProvisionedLimit(
    args: GetProvisionedLimitCommandInput,
    cb: (err: any, data?: GetProvisionedLimitCommandOutput) => void
  ): void;
  getProvisionedLimit(
    args: GetProvisionedLimitCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetProvisionedLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSigningCertificateCommand}
   */
  getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetSigningCertificateCommandOutput>;
  getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    cb: (err: any, data?: GetSigningCertificateCommandOutput) => void
  ): void;
  getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetSigningCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTokensFromRefreshTokenCommand}
   */
  getTokensFromRefreshToken(
    args: GetTokensFromRefreshTokenCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetTokensFromRefreshTokenCommandOutput>;
  getTokensFromRefreshToken(
    args: GetTokensFromRefreshTokenCommandInput,
    cb: (err: any, data?: GetTokensFromRefreshTokenCommandOutput) => void
  ): void;
  getTokensFromRefreshToken(
    args: GetTokensFromRefreshTokenCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetTokensFromRefreshTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUICustomizationCommand}
   */
  getUICustomization(
    args: GetUICustomizationCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetUICustomizationCommandOutput>;
  getUICustomization(
    args: GetUICustomizationCommandInput,
    cb: (err: any, data?: GetUICustomizationCommandOutput) => void
  ): void;
  getUICustomization(
    args: GetUICustomizationCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetUICustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(
    args: GetUserCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetUserCommandOutput>;
  getUser(
    args: GetUserCommandInput,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  getUser(
    args: GetUserCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserAttributeVerificationCodeCommand}
   */
  getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetUserAttributeVerificationCodeCommandOutput>;
  getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    cb: (err: any, data?: GetUserAttributeVerificationCodeCommandOutput) => void
  ): void;
  getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetUserAttributeVerificationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserAuthFactorsCommand}
   */
  getUserAuthFactors(
    args: GetUserAuthFactorsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetUserAuthFactorsCommandOutput>;
  getUserAuthFactors(
    args: GetUserAuthFactorsCommandInput,
    cb: (err: any, data?: GetUserAuthFactorsCommandOutput) => void
  ): void;
  getUserAuthFactors(
    args: GetUserAuthFactorsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetUserAuthFactorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserPoolMfaConfigCommand}
   */
  getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GetUserPoolMfaConfigCommandOutput>;
  getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    cb: (err: any, data?: GetUserPoolMfaConfigCommandOutput) => void
  ): void;
  getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GetUserPoolMfaConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GlobalSignOutCommand}
   */
  globalSignOut(
    args: GlobalSignOutCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<GlobalSignOutCommandOutput>;
  globalSignOut(
    args: GlobalSignOutCommandInput,
    cb: (err: any, data?: GlobalSignOutCommandOutput) => void
  ): void;
  globalSignOut(
    args: GlobalSignOutCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: GlobalSignOutCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateAuthCommand}
   */
  initiateAuth(
    args: InitiateAuthCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<InitiateAuthCommandOutput>;
  initiateAuth(
    args: InitiateAuthCommandInput,
    cb: (err: any, data?: InitiateAuthCommandOutput) => void
  ): void;
  initiateAuth(
    args: InitiateAuthCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: InitiateAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(
    args: ListDevicesCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListDevicesCommandOutput>;
  listDevices(
    args: ListDevicesCommandInput,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;
  listDevices(
    args: ListDevicesCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(
    args: ListGroupsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityProvidersCommand}
   */
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListIdentityProvidersCommandOutput>;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceServersCommand}
   */
  listResourceServers(
    args: ListResourceServersCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListResourceServersCommandOutput>;
  listResourceServers(
    args: ListResourceServersCommandInput,
    cb: (err: any, data?: ListResourceServersCommandOutput) => void
  ): void;
  listResourceServers(
    args: ListResourceServersCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListResourceServersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTermsCommand}
   */
  listTerms(
    args: ListTermsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListTermsCommandOutput>;
  listTerms(
    args: ListTermsCommandInput,
    cb: (err: any, data?: ListTermsCommandOutput) => void
  ): void;
  listTerms(
    args: ListTermsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserImportJobsCommand}
   */
  listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListUserImportJobsCommandOutput>;
  listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    cb: (err: any, data?: ListUserImportJobsCommandOutput) => void
  ): void;
  listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListUserImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserPoolClientsCommand}
   */
  listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListUserPoolClientsCommandOutput>;
  listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    cb: (err: any, data?: ListUserPoolClientsCommandOutput) => void
  ): void;
  listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListUserPoolClientsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserPoolClientSecretsCommand}
   */
  listUserPoolClientSecrets(
    args: ListUserPoolClientSecretsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListUserPoolClientSecretsCommandOutput>;
  listUserPoolClientSecrets(
    args: ListUserPoolClientSecretsCommandInput,
    cb: (err: any, data?: ListUserPoolClientSecretsCommandOutput) => void
  ): void;
  listUserPoolClientSecrets(
    args: ListUserPoolClientSecretsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListUserPoolClientSecretsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserPoolReplicasCommand}
   */
  listUserPoolReplicas(
    args: ListUserPoolReplicasCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListUserPoolReplicasCommandOutput>;
  listUserPoolReplicas(
    args: ListUserPoolReplicasCommandInput,
    cb: (err: any, data?: ListUserPoolReplicasCommandOutput) => void
  ): void;
  listUserPoolReplicas(
    args: ListUserPoolReplicasCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListUserPoolReplicasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserPoolsCommand}
   */
  listUserPools(
    args: ListUserPoolsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListUserPoolsCommandOutput>;
  listUserPools(
    args: ListUserPoolsCommandInput,
    cb: (err: any, data?: ListUserPoolsCommandOutput) => void
  ): void;
  listUserPools(
    args: ListUserPoolsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListUserPoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersInGroupCommand}
   */
  listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListUsersInGroupCommandOutput>;
  listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    cb: (err: any, data?: ListUsersInGroupCommandOutput) => void
  ): void;
  listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListUsersInGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebAuthnCredentialsCommand}
   */
  listWebAuthnCredentials(
    args: ListWebAuthnCredentialsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ListWebAuthnCredentialsCommandOutput>;
  listWebAuthnCredentials(
    args: ListWebAuthnCredentialsCommandInput,
    cb: (err: any, data?: ListWebAuthnCredentialsCommandOutput) => void
  ): void;
  listWebAuthnCredentials(
    args: ListWebAuthnCredentialsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ListWebAuthnCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResendConfirmationCodeCommand}
   */
  resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<ResendConfirmationCodeCommandOutput>;
  resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    cb: (err: any, data?: ResendConfirmationCodeCommandOutput) => void
  ): void;
  resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: ResendConfirmationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link RespondToAuthChallengeCommand}
   */
  respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<RespondToAuthChallengeCommandOutput>;
  respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    cb: (err: any, data?: RespondToAuthChallengeCommandOutput) => void
  ): void;
  respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: RespondToAuthChallengeCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeTokenCommand}
   */
  revokeToken(
    args: RevokeTokenCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<RevokeTokenCommandOutput>;
  revokeToken(
    args: RevokeTokenCommandInput,
    cb: (err: any, data?: RevokeTokenCommandOutput) => void
  ): void;
  revokeToken(
    args: RevokeTokenCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: RevokeTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link SetLogDeliveryConfigurationCommand}
   */
  setLogDeliveryConfiguration(
    args: SetLogDeliveryConfigurationCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<SetLogDeliveryConfigurationCommandOutput>;
  setLogDeliveryConfiguration(
    args: SetLogDeliveryConfigurationCommandInput,
    cb: (err: any, data?: SetLogDeliveryConfigurationCommandOutput) => void
  ): void;
  setLogDeliveryConfiguration(
    args: SetLogDeliveryConfigurationCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: SetLogDeliveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SetRiskConfigurationCommand}
   */
  setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<SetRiskConfigurationCommandOutput>;
  setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    cb: (err: any, data?: SetRiskConfigurationCommandOutput) => void
  ): void;
  setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: SetRiskConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SetUICustomizationCommand}
   */
  setUICustomization(
    args: SetUICustomizationCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<SetUICustomizationCommandOutput>;
  setUICustomization(
    args: SetUICustomizationCommandInput,
    cb: (err: any, data?: SetUICustomizationCommandOutput) => void
  ): void;
  setUICustomization(
    args: SetUICustomizationCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: SetUICustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link SetUserMFAPreferenceCommand}
   */
  setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<SetUserMFAPreferenceCommandOutput>;
  setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    cb: (err: any, data?: SetUserMFAPreferenceCommandOutput) => void
  ): void;
  setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: SetUserMFAPreferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link SetUserPoolMfaConfigCommand}
   */
  setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<SetUserPoolMfaConfigCommandOutput>;
  setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    cb: (err: any, data?: SetUserPoolMfaConfigCommandOutput) => void
  ): void;
  setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: SetUserPoolMfaConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link SetUserSettingsCommand}
   */
  setUserSettings(
    args: SetUserSettingsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<SetUserSettingsCommandOutput>;
  setUserSettings(
    args: SetUserSettingsCommandInput,
    cb: (err: any, data?: SetUserSettingsCommandOutput) => void
  ): void;
  setUserSettings(
    args: SetUserSettingsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: SetUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link SignUpCommand}
   */
  signUp(
    args: SignUpCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<SignUpCommandOutput>;
  signUp(
    args: SignUpCommandInput,
    cb: (err: any, data?: SignUpCommandOutput) => void
  ): void;
  signUp(
    args: SignUpCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: SignUpCommandOutput) => void
  ): void;

  /**
   * @see {@link StartUserImportJobCommand}
   */
  startUserImportJob(
    args: StartUserImportJobCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<StartUserImportJobCommandOutput>;
  startUserImportJob(
    args: StartUserImportJobCommandInput,
    cb: (err: any, data?: StartUserImportJobCommandOutput) => void
  ): void;
  startUserImportJob(
    args: StartUserImportJobCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: StartUserImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWebAuthnRegistrationCommand}
   */
  startWebAuthnRegistration(
    args: StartWebAuthnRegistrationCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<StartWebAuthnRegistrationCommandOutput>;
  startWebAuthnRegistration(
    args: StartWebAuthnRegistrationCommandInput,
    cb: (err: any, data?: StartWebAuthnRegistrationCommandOutput) => void
  ): void;
  startWebAuthnRegistration(
    args: StartWebAuthnRegistrationCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: StartWebAuthnRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopUserImportJobCommand}
   */
  stopUserImportJob(
    args: StopUserImportJobCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<StopUserImportJobCommandOutput>;
  stopUserImportJob(
    args: StopUserImportJobCommandInput,
    cb: (err: any, data?: StopUserImportJobCommandOutput) => void
  ): void;
  stopUserImportJob(
    args: StopUserImportJobCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: StopUserImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAuthEventFeedbackCommand}
   */
  updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateAuthEventFeedbackCommandOutput>;
  updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    cb: (err: any, data?: UpdateAuthEventFeedbackCommandOutput) => void
  ): void;
  updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateAuthEventFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeviceStatusCommand}
   */
  updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateDeviceStatusCommandOutput>;
  updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    cb: (err: any, data?: UpdateDeviceStatusCommandOutput) => void
  ): void;
  updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateDeviceStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentityProviderCommand}
   */
  updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateIdentityProviderCommandOutput>;
  updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): void;
  updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateManagedLoginBrandingCommand}
   */
  updateManagedLoginBranding(): Promise<UpdateManagedLoginBrandingCommandOutput>;
  updateManagedLoginBranding(
    args: UpdateManagedLoginBrandingCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateManagedLoginBrandingCommandOutput>;
  updateManagedLoginBranding(
    args: UpdateManagedLoginBrandingCommandInput,
    cb: (err: any, data?: UpdateManagedLoginBrandingCommandOutput) => void
  ): void;
  updateManagedLoginBranding(
    args: UpdateManagedLoginBrandingCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateManagedLoginBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProvisionedLimitCommand}
   */
  updateProvisionedLimit(
    args: UpdateProvisionedLimitCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateProvisionedLimitCommandOutput>;
  updateProvisionedLimit(
    args: UpdateProvisionedLimitCommandInput,
    cb: (err: any, data?: UpdateProvisionedLimitCommandOutput) => void
  ): void;
  updateProvisionedLimit(
    args: UpdateProvisionedLimitCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateProvisionedLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceServerCommand}
   */
  updateResourceServer(
    args: UpdateResourceServerCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateResourceServerCommandOutput>;
  updateResourceServer(
    args: UpdateResourceServerCommandInput,
    cb: (err: any, data?: UpdateResourceServerCommandOutput) => void
  ): void;
  updateResourceServer(
    args: UpdateResourceServerCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateResourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTermsCommand}
   */
  updateTerms(
    args: UpdateTermsCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateTermsCommandOutput>;
  updateTerms(
    args: UpdateTermsCommandInput,
    cb: (err: any, data?: UpdateTermsCommandOutput) => void
  ): void;
  updateTerms(
    args: UpdateTermsCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserAttributesCommand}
   */
  updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateUserAttributesCommandOutput>;
  updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    cb: (err: any, data?: UpdateUserAttributesCommandOutput) => void
  ): void;
  updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateUserAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserPoolCommand}
   */
  updateUserPool(
    args: UpdateUserPoolCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateUserPoolCommandOutput>;
  updateUserPool(
    args: UpdateUserPoolCommandInput,
    cb: (err: any, data?: UpdateUserPoolCommandOutput) => void
  ): void;
  updateUserPool(
    args: UpdateUserPoolCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateUserPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserPoolClientCommand}
   */
  updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateUserPoolClientCommandOutput>;
  updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    cb: (err: any, data?: UpdateUserPoolClientCommandOutput) => void
  ): void;
  updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateUserPoolClientCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserPoolDomainCommand}
   */
  updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateUserPoolDomainCommandOutput>;
  updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    cb: (err: any, data?: UpdateUserPoolDomainCommandOutput) => void
  ): void;
  updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateUserPoolDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserPoolReplicaCommand}
   */
  updateUserPoolReplica(
    args: UpdateUserPoolReplicaCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<UpdateUserPoolReplicaCommandOutput>;
  updateUserPoolReplica(
    args: UpdateUserPoolReplicaCommandInput,
    cb: (err: any, data?: UpdateUserPoolReplicaCommandOutput) => void
  ): void;
  updateUserPoolReplica(
    args: UpdateUserPoolReplicaCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: UpdateUserPoolReplicaCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifySoftwareTokenCommand}
   */
  verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<VerifySoftwareTokenCommandOutput>;
  verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    cb: (err: any, data?: VerifySoftwareTokenCommandOutput) => void
  ): void;
  verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: VerifySoftwareTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyUserAttributeCommand}
   */
  verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    options?: CognitoIdentityProviderRequestOptions
  ): Promise<VerifyUserAttributeCommandOutput>;
  verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    cb: (err: any, data?: VerifyUserAttributeCommandOutput) => void
  ): void;
  verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    options: CognitoIdentityProviderRequestOptions,
    cb: (err: any, data?: VerifyUserAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link AdminListGroupsForUserCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link AdminListGroupsForUserCommandOutput}.
   */
  paginateAdminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<AdminListGroupsForUserCommandOutput>;

  /**
   * @see {@link AdminListUserAuthEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link AdminListUserAuthEventsCommandOutput}.
   */
  paginateAdminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<AdminListUserAuthEventsCommandOutput>;

  /**
   * @see {@link ListGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupsCommandOutput}.
   */
  paginateListGroups(
    args: ListGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupsCommandOutput>;

  /**
   * @see {@link ListIdentityProvidersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIdentityProvidersCommandOutput}.
   */
  paginateListIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIdentityProvidersCommandOutput>;

  /**
   * @see {@link ListResourceServersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceServersCommandOutput}.
   */
  paginateListResourceServers(
    args: ListResourceServersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceServersCommandOutput>;

  /**
   * @see {@link ListUserPoolClientsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUserPoolClientsCommandOutput}.
   */
  paginateListUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUserPoolClientsCommandOutput>;

  /**
   * @see {@link ListUserPoolsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUserPoolsCommandOutput}.
   */
  paginateListUserPools(
    args: ListUserPoolsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUserPoolsCommandOutput>;

  /**
   * @see {@link ListUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUsersCommandOutput}.
   */
  paginateListUsers(
    args: ListUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUsersCommandOutput>;

  /**
   * @see {@link ListUsersInGroupCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUsersInGroupCommandOutput}.
   */
  paginateListUsersInGroup(
    args: ListUsersInGroupCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUsersInGroupCommandOutput>;
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
createAggregatedClient(commands, CognitoIdentityProvider, { paginators });
