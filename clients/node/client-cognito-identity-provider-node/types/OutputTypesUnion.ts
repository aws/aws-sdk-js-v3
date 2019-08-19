import { AddCustomAttributesOutput } from "./AddCustomAttributesOutput";
import { AdminAddUserToGroupOutput } from "./AdminAddUserToGroupOutput";
import { AdminConfirmSignUpOutput } from "./AdminConfirmSignUpOutput";
import { AdminCreateUserOutput } from "./AdminCreateUserOutput";
import { AdminDeleteUserOutput } from "./AdminDeleteUserOutput";
import { AdminDeleteUserAttributesOutput } from "./AdminDeleteUserAttributesOutput";
import { AdminDisableProviderForUserOutput } from "./AdminDisableProviderForUserOutput";
import { AdminDisableUserOutput } from "./AdminDisableUserOutput";
import { AdminEnableUserOutput } from "./AdminEnableUserOutput";
import { AdminForgetDeviceOutput } from "./AdminForgetDeviceOutput";
import { AdminGetDeviceOutput } from "./AdminGetDeviceOutput";
import { AdminGetUserOutput } from "./AdminGetUserOutput";
import { AdminInitiateAuthOutput } from "./AdminInitiateAuthOutput";
import { AdminLinkProviderForUserOutput } from "./AdminLinkProviderForUserOutput";
import { AdminListDevicesOutput } from "./AdminListDevicesOutput";
import { AdminListGroupsForUserOutput } from "./AdminListGroupsForUserOutput";
import { AdminListUserAuthEventsOutput } from "./AdminListUserAuthEventsOutput";
import { AdminRemoveUserFromGroupOutput } from "./AdminRemoveUserFromGroupOutput";
import { AdminResetUserPasswordOutput } from "./AdminResetUserPasswordOutput";
import { AdminRespondToAuthChallengeOutput } from "./AdminRespondToAuthChallengeOutput";
import { AdminSetUserMFAPreferenceOutput } from "./AdminSetUserMFAPreferenceOutput";
import { AdminSetUserPasswordOutput } from "./AdminSetUserPasswordOutput";
import { AdminSetUserSettingsOutput } from "./AdminSetUserSettingsOutput";
import { AdminUpdateAuthEventFeedbackOutput } from "./AdminUpdateAuthEventFeedbackOutput";
import { AdminUpdateDeviceStatusOutput } from "./AdminUpdateDeviceStatusOutput";
import { AdminUpdateUserAttributesOutput } from "./AdminUpdateUserAttributesOutput";
import { AdminUserGlobalSignOutOutput } from "./AdminUserGlobalSignOutOutput";
import { AssociateSoftwareTokenOutput } from "./AssociateSoftwareTokenOutput";
import { ChangePasswordOutput } from "./ChangePasswordOutput";
import { ConfirmDeviceOutput } from "./ConfirmDeviceOutput";
import { ConfirmForgotPasswordOutput } from "./ConfirmForgotPasswordOutput";
import { ConfirmSignUpOutput } from "./ConfirmSignUpOutput";
import { CreateGroupOutput } from "./CreateGroupOutput";
import { CreateIdentityProviderOutput } from "./CreateIdentityProviderOutput";
import { CreateResourceServerOutput } from "./CreateResourceServerOutput";
import { CreateUserImportJobOutput } from "./CreateUserImportJobOutput";
import { CreateUserPoolOutput } from "./CreateUserPoolOutput";
import { CreateUserPoolClientOutput } from "./CreateUserPoolClientOutput";
import { CreateUserPoolDomainOutput } from "./CreateUserPoolDomainOutput";
import { DeleteGroupOutput } from "./DeleteGroupOutput";
import { DeleteIdentityProviderOutput } from "./DeleteIdentityProviderOutput";
import { DeleteResourceServerOutput } from "./DeleteResourceServerOutput";
import { DeleteUserOutput } from "./DeleteUserOutput";
import { DeleteUserAttributesOutput } from "./DeleteUserAttributesOutput";
import { DeleteUserPoolOutput } from "./DeleteUserPoolOutput";
import { DeleteUserPoolClientOutput } from "./DeleteUserPoolClientOutput";
import { DeleteUserPoolDomainOutput } from "./DeleteUserPoolDomainOutput";
import { DescribeIdentityProviderOutput } from "./DescribeIdentityProviderOutput";
import { DescribeResourceServerOutput } from "./DescribeResourceServerOutput";
import { DescribeRiskConfigurationOutput } from "./DescribeRiskConfigurationOutput";
import { DescribeUserImportJobOutput } from "./DescribeUserImportJobOutput";
import { DescribeUserPoolOutput } from "./DescribeUserPoolOutput";
import { DescribeUserPoolClientOutput } from "./DescribeUserPoolClientOutput";
import { DescribeUserPoolDomainOutput } from "./DescribeUserPoolDomainOutput";
import { ForgetDeviceOutput } from "./ForgetDeviceOutput";
import { ForgotPasswordOutput } from "./ForgotPasswordOutput";
import { GetCSVHeaderOutput } from "./GetCSVHeaderOutput";
import { GetDeviceOutput } from "./GetDeviceOutput";
import { GetGroupOutput } from "./GetGroupOutput";
import { GetIdentityProviderByIdentifierOutput } from "./GetIdentityProviderByIdentifierOutput";
import { GetSigningCertificateOutput } from "./GetSigningCertificateOutput";
import { GetUICustomizationOutput } from "./GetUICustomizationOutput";
import { GetUserOutput } from "./GetUserOutput";
import { GetUserAttributeVerificationCodeOutput } from "./GetUserAttributeVerificationCodeOutput";
import { GetUserPoolMfaConfigOutput } from "./GetUserPoolMfaConfigOutput";
import { GlobalSignOutOutput } from "./GlobalSignOutOutput";
import { InitiateAuthOutput } from "./InitiateAuthOutput";
import { ListDevicesOutput } from "./ListDevicesOutput";
import { ListGroupsOutput } from "./ListGroupsOutput";
import { ListIdentityProvidersOutput } from "./ListIdentityProvidersOutput";
import { ListResourceServersOutput } from "./ListResourceServersOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListUserImportJobsOutput } from "./ListUserImportJobsOutput";
import { ListUserPoolClientsOutput } from "./ListUserPoolClientsOutput";
import { ListUserPoolsOutput } from "./ListUserPoolsOutput";
import { ListUsersOutput } from "./ListUsersOutput";
import { ListUsersInGroupOutput } from "./ListUsersInGroupOutput";
import { ResendConfirmationCodeOutput } from "./ResendConfirmationCodeOutput";
import { RespondToAuthChallengeOutput } from "./RespondToAuthChallengeOutput";
import { SetRiskConfigurationOutput } from "./SetRiskConfigurationOutput";
import { SetUICustomizationOutput } from "./SetUICustomizationOutput";
import { SetUserMFAPreferenceOutput } from "./SetUserMFAPreferenceOutput";
import { SetUserPoolMfaConfigOutput } from "./SetUserPoolMfaConfigOutput";
import { SetUserSettingsOutput } from "./SetUserSettingsOutput";
import { SignUpOutput } from "./SignUpOutput";
import { StartUserImportJobOutput } from "./StartUserImportJobOutput";
import { StopUserImportJobOutput } from "./StopUserImportJobOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateAuthEventFeedbackOutput } from "./UpdateAuthEventFeedbackOutput";
import { UpdateDeviceStatusOutput } from "./UpdateDeviceStatusOutput";
import { UpdateGroupOutput } from "./UpdateGroupOutput";
import { UpdateIdentityProviderOutput } from "./UpdateIdentityProviderOutput";
import { UpdateResourceServerOutput } from "./UpdateResourceServerOutput";
import { UpdateUserAttributesOutput } from "./UpdateUserAttributesOutput";
import { UpdateUserPoolOutput } from "./UpdateUserPoolOutput";
import { UpdateUserPoolClientOutput } from "./UpdateUserPoolClientOutput";
import { UpdateUserPoolDomainOutput } from "./UpdateUserPoolDomainOutput";
import { VerifySoftwareTokenOutput } from "./VerifySoftwareTokenOutput";
import { VerifyUserAttributeOutput } from "./VerifyUserAttributeOutput";
export type OutputTypesUnion =
  | AddCustomAttributesOutput
  | AdminAddUserToGroupOutput
  | AdminConfirmSignUpOutput
  | AdminCreateUserOutput
  | AdminDeleteUserOutput
  | AdminDeleteUserAttributesOutput
  | AdminDisableProviderForUserOutput
  | AdminDisableUserOutput
  | AdminEnableUserOutput
  | AdminForgetDeviceOutput
  | AdminGetDeviceOutput
  | AdminGetUserOutput
  | AdminInitiateAuthOutput
  | AdminLinkProviderForUserOutput
  | AdminListDevicesOutput
  | AdminListGroupsForUserOutput
  | AdminListUserAuthEventsOutput
  | AdminRemoveUserFromGroupOutput
  | AdminResetUserPasswordOutput
  | AdminRespondToAuthChallengeOutput
  | AdminSetUserMFAPreferenceOutput
  | AdminSetUserPasswordOutput
  | AdminSetUserSettingsOutput
  | AdminUpdateAuthEventFeedbackOutput
  | AdminUpdateDeviceStatusOutput
  | AdminUpdateUserAttributesOutput
  | AdminUserGlobalSignOutOutput
  | AssociateSoftwareTokenOutput
  | ChangePasswordOutput
  | ConfirmDeviceOutput
  | ConfirmForgotPasswordOutput
  | ConfirmSignUpOutput
  | CreateGroupOutput
  | CreateIdentityProviderOutput
  | CreateResourceServerOutput
  | CreateUserImportJobOutput
  | CreateUserPoolOutput
  | CreateUserPoolClientOutput
  | CreateUserPoolDomainOutput
  | DeleteGroupOutput
  | DeleteIdentityProviderOutput
  | DeleteResourceServerOutput
  | DeleteUserOutput
  | DeleteUserAttributesOutput
  | DeleteUserPoolOutput
  | DeleteUserPoolClientOutput
  | DeleteUserPoolDomainOutput
  | DescribeIdentityProviderOutput
  | DescribeResourceServerOutput
  | DescribeRiskConfigurationOutput
  | DescribeUserImportJobOutput
  | DescribeUserPoolOutput
  | DescribeUserPoolClientOutput
  | DescribeUserPoolDomainOutput
  | ForgetDeviceOutput
  | ForgotPasswordOutput
  | GetCSVHeaderOutput
  | GetDeviceOutput
  | GetGroupOutput
  | GetIdentityProviderByIdentifierOutput
  | GetSigningCertificateOutput
  | GetUICustomizationOutput
  | GetUserOutput
  | GetUserAttributeVerificationCodeOutput
  | GetUserPoolMfaConfigOutput
  | GlobalSignOutOutput
  | InitiateAuthOutput
  | ListDevicesOutput
  | ListGroupsOutput
  | ListIdentityProvidersOutput
  | ListResourceServersOutput
  | ListTagsForResourceOutput
  | ListUserImportJobsOutput
  | ListUserPoolClientsOutput
  | ListUserPoolsOutput
  | ListUsersOutput
  | ListUsersInGroupOutput
  | ResendConfirmationCodeOutput
  | RespondToAuthChallengeOutput
  | SetRiskConfigurationOutput
  | SetUICustomizationOutput
  | SetUserMFAPreferenceOutput
  | SetUserPoolMfaConfigOutput
  | SetUserSettingsOutput
  | SignUpOutput
  | StartUserImportJobOutput
  | StopUserImportJobOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateAuthEventFeedbackOutput
  | UpdateDeviceStatusOutput
  | UpdateGroupOutput
  | UpdateIdentityProviderOutput
  | UpdateResourceServerOutput
  | UpdateUserAttributesOutput
  | UpdateUserPoolOutput
  | UpdateUserPoolClientOutput
  | UpdateUserPoolDomainOutput
  | VerifySoftwareTokenOutput
  | VerifyUserAttributeOutput;
