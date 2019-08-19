import { AddCustomAttributesInput } from "./AddCustomAttributesInput";
import { AdminAddUserToGroupInput } from "./AdminAddUserToGroupInput";
import { AdminConfirmSignUpInput } from "./AdminConfirmSignUpInput";
import { AdminCreateUserInput } from "./AdminCreateUserInput";
import { AdminDeleteUserInput } from "./AdminDeleteUserInput";
import { AdminDeleteUserAttributesInput } from "./AdminDeleteUserAttributesInput";
import { AdminDisableProviderForUserInput } from "./AdminDisableProviderForUserInput";
import { AdminDisableUserInput } from "./AdminDisableUserInput";
import { AdminEnableUserInput } from "./AdminEnableUserInput";
import { AdminForgetDeviceInput } from "./AdminForgetDeviceInput";
import { AdminGetDeviceInput } from "./AdminGetDeviceInput";
import { AdminGetUserInput } from "./AdminGetUserInput";
import { AdminInitiateAuthInput } from "./AdminInitiateAuthInput";
import { AdminLinkProviderForUserInput } from "./AdminLinkProviderForUserInput";
import { AdminListDevicesInput } from "./AdminListDevicesInput";
import { AdminListGroupsForUserInput } from "./AdminListGroupsForUserInput";
import { AdminListUserAuthEventsInput } from "./AdminListUserAuthEventsInput";
import { AdminRemoveUserFromGroupInput } from "./AdminRemoveUserFromGroupInput";
import { AdminResetUserPasswordInput } from "./AdminResetUserPasswordInput";
import { AdminRespondToAuthChallengeInput } from "./AdminRespondToAuthChallengeInput";
import { AdminSetUserMFAPreferenceInput } from "./AdminSetUserMFAPreferenceInput";
import { AdminSetUserPasswordInput } from "./AdminSetUserPasswordInput";
import { AdminSetUserSettingsInput } from "./AdminSetUserSettingsInput";
import { AdminUpdateAuthEventFeedbackInput } from "./AdminUpdateAuthEventFeedbackInput";
import { AdminUpdateDeviceStatusInput } from "./AdminUpdateDeviceStatusInput";
import { AdminUpdateUserAttributesInput } from "./AdminUpdateUserAttributesInput";
import { AdminUserGlobalSignOutInput } from "./AdminUserGlobalSignOutInput";
import { AssociateSoftwareTokenInput } from "./AssociateSoftwareTokenInput";
import { ChangePasswordInput } from "./ChangePasswordInput";
import { ConfirmDeviceInput } from "./ConfirmDeviceInput";
import { ConfirmForgotPasswordInput } from "./ConfirmForgotPasswordInput";
import { ConfirmSignUpInput } from "./ConfirmSignUpInput";
import { CreateGroupInput } from "./CreateGroupInput";
import { CreateIdentityProviderInput } from "./CreateIdentityProviderInput";
import { CreateResourceServerInput } from "./CreateResourceServerInput";
import { CreateUserImportJobInput } from "./CreateUserImportJobInput";
import { CreateUserPoolInput } from "./CreateUserPoolInput";
import { CreateUserPoolClientInput } from "./CreateUserPoolClientInput";
import { CreateUserPoolDomainInput } from "./CreateUserPoolDomainInput";
import { DeleteGroupInput } from "./DeleteGroupInput";
import { DeleteIdentityProviderInput } from "./DeleteIdentityProviderInput";
import { DeleteResourceServerInput } from "./DeleteResourceServerInput";
import { DeleteUserInput } from "./DeleteUserInput";
import { DeleteUserAttributesInput } from "./DeleteUserAttributesInput";
import { DeleteUserPoolInput } from "./DeleteUserPoolInput";
import { DeleteUserPoolClientInput } from "./DeleteUserPoolClientInput";
import { DeleteUserPoolDomainInput } from "./DeleteUserPoolDomainInput";
import { DescribeIdentityProviderInput } from "./DescribeIdentityProviderInput";
import { DescribeResourceServerInput } from "./DescribeResourceServerInput";
import { DescribeRiskConfigurationInput } from "./DescribeRiskConfigurationInput";
import { DescribeUserImportJobInput } from "./DescribeUserImportJobInput";
import { DescribeUserPoolInput } from "./DescribeUserPoolInput";
import { DescribeUserPoolClientInput } from "./DescribeUserPoolClientInput";
import { DescribeUserPoolDomainInput } from "./DescribeUserPoolDomainInput";
import { ForgetDeviceInput } from "./ForgetDeviceInput";
import { ForgotPasswordInput } from "./ForgotPasswordInput";
import { GetCSVHeaderInput } from "./GetCSVHeaderInput";
import { GetDeviceInput } from "./GetDeviceInput";
import { GetGroupInput } from "./GetGroupInput";
import { GetIdentityProviderByIdentifierInput } from "./GetIdentityProviderByIdentifierInput";
import { GetSigningCertificateInput } from "./GetSigningCertificateInput";
import { GetUICustomizationInput } from "./GetUICustomizationInput";
import { GetUserInput } from "./GetUserInput";
import { GetUserAttributeVerificationCodeInput } from "./GetUserAttributeVerificationCodeInput";
import { GetUserPoolMfaConfigInput } from "./GetUserPoolMfaConfigInput";
import { GlobalSignOutInput } from "./GlobalSignOutInput";
import { InitiateAuthInput } from "./InitiateAuthInput";
import { ListDevicesInput } from "./ListDevicesInput";
import { ListGroupsInput } from "./ListGroupsInput";
import { ListIdentityProvidersInput } from "./ListIdentityProvidersInput";
import { ListResourceServersInput } from "./ListResourceServersInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListUserImportJobsInput } from "./ListUserImportJobsInput";
import { ListUserPoolClientsInput } from "./ListUserPoolClientsInput";
import { ListUserPoolsInput } from "./ListUserPoolsInput";
import { ListUsersInput } from "./ListUsersInput";
import { ListUsersInGroupInput } from "./ListUsersInGroupInput";
import { ResendConfirmationCodeInput } from "./ResendConfirmationCodeInput";
import { RespondToAuthChallengeInput } from "./RespondToAuthChallengeInput";
import { SetRiskConfigurationInput } from "./SetRiskConfigurationInput";
import { SetUICustomizationInput } from "./SetUICustomizationInput";
import { SetUserMFAPreferenceInput } from "./SetUserMFAPreferenceInput";
import { SetUserPoolMfaConfigInput } from "./SetUserPoolMfaConfigInput";
import { SetUserSettingsInput } from "./SetUserSettingsInput";
import { SignUpInput } from "./SignUpInput";
import { StartUserImportJobInput } from "./StartUserImportJobInput";
import { StopUserImportJobInput } from "./StopUserImportJobInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateAuthEventFeedbackInput } from "./UpdateAuthEventFeedbackInput";
import { UpdateDeviceStatusInput } from "./UpdateDeviceStatusInput";
import { UpdateGroupInput } from "./UpdateGroupInput";
import { UpdateIdentityProviderInput } from "./UpdateIdentityProviderInput";
import { UpdateResourceServerInput } from "./UpdateResourceServerInput";
import { UpdateUserAttributesInput } from "./UpdateUserAttributesInput";
import { UpdateUserPoolInput } from "./UpdateUserPoolInput";
import { UpdateUserPoolClientInput } from "./UpdateUserPoolClientInput";
import { UpdateUserPoolDomainInput } from "./UpdateUserPoolDomainInput";
import { VerifySoftwareTokenInput } from "./VerifySoftwareTokenInput";
import { VerifyUserAttributeInput } from "./VerifyUserAttributeInput";
export type InputTypesUnion =
  | AddCustomAttributesInput
  | AdminAddUserToGroupInput
  | AdminConfirmSignUpInput
  | AdminCreateUserInput
  | AdminDeleteUserInput
  | AdminDeleteUserAttributesInput
  | AdminDisableProviderForUserInput
  | AdminDisableUserInput
  | AdminEnableUserInput
  | AdminForgetDeviceInput
  | AdminGetDeviceInput
  | AdminGetUserInput
  | AdminInitiateAuthInput
  | AdminLinkProviderForUserInput
  | AdminListDevicesInput
  | AdminListGroupsForUserInput
  | AdminListUserAuthEventsInput
  | AdminRemoveUserFromGroupInput
  | AdminResetUserPasswordInput
  | AdminRespondToAuthChallengeInput
  | AdminSetUserMFAPreferenceInput
  | AdminSetUserPasswordInput
  | AdminSetUserSettingsInput
  | AdminUpdateAuthEventFeedbackInput
  | AdminUpdateDeviceStatusInput
  | AdminUpdateUserAttributesInput
  | AdminUserGlobalSignOutInput
  | AssociateSoftwareTokenInput
  | ChangePasswordInput
  | ConfirmDeviceInput
  | ConfirmForgotPasswordInput
  | ConfirmSignUpInput
  | CreateGroupInput
  | CreateIdentityProviderInput
  | CreateResourceServerInput
  | CreateUserImportJobInput
  | CreateUserPoolInput
  | CreateUserPoolClientInput
  | CreateUserPoolDomainInput
  | DeleteGroupInput
  | DeleteIdentityProviderInput
  | DeleteResourceServerInput
  | DeleteUserInput
  | DeleteUserAttributesInput
  | DeleteUserPoolInput
  | DeleteUserPoolClientInput
  | DeleteUserPoolDomainInput
  | DescribeIdentityProviderInput
  | DescribeResourceServerInput
  | DescribeRiskConfigurationInput
  | DescribeUserImportJobInput
  | DescribeUserPoolInput
  | DescribeUserPoolClientInput
  | DescribeUserPoolDomainInput
  | ForgetDeviceInput
  | ForgotPasswordInput
  | GetCSVHeaderInput
  | GetDeviceInput
  | GetGroupInput
  | GetIdentityProviderByIdentifierInput
  | GetSigningCertificateInput
  | GetUICustomizationInput
  | GetUserInput
  | GetUserAttributeVerificationCodeInput
  | GetUserPoolMfaConfigInput
  | GlobalSignOutInput
  | InitiateAuthInput
  | ListDevicesInput
  | ListGroupsInput
  | ListIdentityProvidersInput
  | ListResourceServersInput
  | ListTagsForResourceInput
  | ListUserImportJobsInput
  | ListUserPoolClientsInput
  | ListUserPoolsInput
  | ListUsersInput
  | ListUsersInGroupInput
  | ResendConfirmationCodeInput
  | RespondToAuthChallengeInput
  | SetRiskConfigurationInput
  | SetUICustomizationInput
  | SetUserMFAPreferenceInput
  | SetUserPoolMfaConfigInput
  | SetUserSettingsInput
  | SignUpInput
  | StartUserImportJobInput
  | StopUserImportJobInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateAuthEventFeedbackInput
  | UpdateDeviceStatusInput
  | UpdateGroupInput
  | UpdateIdentityProviderInput
  | UpdateResourceServerInput
  | UpdateUserAttributesInput
  | UpdateUserPoolInput
  | UpdateUserPoolClientInput
  | UpdateUserPoolDomainInput
  | VerifySoftwareTokenInput
  | VerifyUserAttributeInput;
