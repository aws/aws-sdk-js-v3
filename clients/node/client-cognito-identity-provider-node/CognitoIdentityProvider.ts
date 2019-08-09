import { CognitoIdentityProviderClient } from "./CognitoIdentityProviderClient";
import { AddCustomAttributesInput } from "./types/AddCustomAttributesInput";
import { AddCustomAttributesOutput } from "./types/AddCustomAttributesOutput";
import { AdminAddUserToGroupInput } from "./types/AdminAddUserToGroupInput";
import { AdminAddUserToGroupOutput } from "./types/AdminAddUserToGroupOutput";
import { AdminConfirmSignUpInput } from "./types/AdminConfirmSignUpInput";
import { AdminConfirmSignUpOutput } from "./types/AdminConfirmSignUpOutput";
import { AdminCreateUserInput } from "./types/AdminCreateUserInput";
import { AdminCreateUserOutput } from "./types/AdminCreateUserOutput";
import { AdminDeleteUserAttributesInput } from "./types/AdminDeleteUserAttributesInput";
import { AdminDeleteUserAttributesOutput } from "./types/AdminDeleteUserAttributesOutput";
import { AdminDeleteUserInput } from "./types/AdminDeleteUserInput";
import { AdminDeleteUserOutput } from "./types/AdminDeleteUserOutput";
import { AdminDisableProviderForUserInput } from "./types/AdminDisableProviderForUserInput";
import { AdminDisableProviderForUserOutput } from "./types/AdminDisableProviderForUserOutput";
import { AdminDisableUserInput } from "./types/AdminDisableUserInput";
import { AdminDisableUserOutput } from "./types/AdminDisableUserOutput";
import { AdminEnableUserInput } from "./types/AdminEnableUserInput";
import { AdminEnableUserOutput } from "./types/AdminEnableUserOutput";
import { AdminForgetDeviceInput } from "./types/AdminForgetDeviceInput";
import { AdminForgetDeviceOutput } from "./types/AdminForgetDeviceOutput";
import { AdminGetDeviceInput } from "./types/AdminGetDeviceInput";
import { AdminGetDeviceOutput } from "./types/AdminGetDeviceOutput";
import { AdminGetUserInput } from "./types/AdminGetUserInput";
import { AdminGetUserOutput } from "./types/AdminGetUserOutput";
import { AdminInitiateAuthInput } from "./types/AdminInitiateAuthInput";
import { AdminInitiateAuthOutput } from "./types/AdminInitiateAuthOutput";
import { AdminLinkProviderForUserInput } from "./types/AdminLinkProviderForUserInput";
import { AdminLinkProviderForUserOutput } from "./types/AdminLinkProviderForUserOutput";
import { AdminListDevicesInput } from "./types/AdminListDevicesInput";
import { AdminListDevicesOutput } from "./types/AdminListDevicesOutput";
import { AdminListGroupsForUserInput } from "./types/AdminListGroupsForUserInput";
import { AdminListGroupsForUserOutput } from "./types/AdminListGroupsForUserOutput";
import { AdminListUserAuthEventsInput } from "./types/AdminListUserAuthEventsInput";
import { AdminListUserAuthEventsOutput } from "./types/AdminListUserAuthEventsOutput";
import { AdminRemoveUserFromGroupInput } from "./types/AdminRemoveUserFromGroupInput";
import { AdminRemoveUserFromGroupOutput } from "./types/AdminRemoveUserFromGroupOutput";
import { AdminResetUserPasswordInput } from "./types/AdminResetUserPasswordInput";
import { AdminResetUserPasswordOutput } from "./types/AdminResetUserPasswordOutput";
import { AdminRespondToAuthChallengeInput } from "./types/AdminRespondToAuthChallengeInput";
import { AdminRespondToAuthChallengeOutput } from "./types/AdminRespondToAuthChallengeOutput";
import { AdminSetUserMFAPreferenceInput } from "./types/AdminSetUserMFAPreferenceInput";
import { AdminSetUserMFAPreferenceOutput } from "./types/AdminSetUserMFAPreferenceOutput";
import { AdminSetUserPasswordInput } from "./types/AdminSetUserPasswordInput";
import { AdminSetUserPasswordOutput } from "./types/AdminSetUserPasswordOutput";
import { AdminSetUserSettingsInput } from "./types/AdminSetUserSettingsInput";
import { AdminSetUserSettingsOutput } from "./types/AdminSetUserSettingsOutput";
import { AdminUpdateAuthEventFeedbackInput } from "./types/AdminUpdateAuthEventFeedbackInput";
import { AdminUpdateAuthEventFeedbackOutput } from "./types/AdminUpdateAuthEventFeedbackOutput";
import { AdminUpdateDeviceStatusInput } from "./types/AdminUpdateDeviceStatusInput";
import { AdminUpdateDeviceStatusOutput } from "./types/AdminUpdateDeviceStatusOutput";
import { AdminUpdateUserAttributesInput } from "./types/AdminUpdateUserAttributesInput";
import { AdminUpdateUserAttributesOutput } from "./types/AdminUpdateUserAttributesOutput";
import { AdminUserGlobalSignOutInput } from "./types/AdminUserGlobalSignOutInput";
import { AdminUserGlobalSignOutOutput } from "./types/AdminUserGlobalSignOutOutput";
import { AliasExistsException } from "./types/AliasExistsException";
import { AssociateSoftwareTokenInput } from "./types/AssociateSoftwareTokenInput";
import { AssociateSoftwareTokenOutput } from "./types/AssociateSoftwareTokenOutput";
import { ChangePasswordInput } from "./types/ChangePasswordInput";
import { ChangePasswordOutput } from "./types/ChangePasswordOutput";
import { CodeDeliveryFailureException } from "./types/CodeDeliveryFailureException";
import { CodeMismatchException } from "./types/CodeMismatchException";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { ConfirmDeviceInput } from "./types/ConfirmDeviceInput";
import { ConfirmDeviceOutput } from "./types/ConfirmDeviceOutput";
import { ConfirmForgotPasswordInput } from "./types/ConfirmForgotPasswordInput";
import { ConfirmForgotPasswordOutput } from "./types/ConfirmForgotPasswordOutput";
import { ConfirmSignUpInput } from "./types/ConfirmSignUpInput";
import { ConfirmSignUpOutput } from "./types/ConfirmSignUpOutput";
import { CreateGroupInput } from "./types/CreateGroupInput";
import { CreateGroupOutput } from "./types/CreateGroupOutput";
import { CreateIdentityProviderInput } from "./types/CreateIdentityProviderInput";
import { CreateIdentityProviderOutput } from "./types/CreateIdentityProviderOutput";
import { CreateResourceServerInput } from "./types/CreateResourceServerInput";
import { CreateResourceServerOutput } from "./types/CreateResourceServerOutput";
import { CreateUserImportJobInput } from "./types/CreateUserImportJobInput";
import { CreateUserImportJobOutput } from "./types/CreateUserImportJobOutput";
import { CreateUserPoolClientInput } from "./types/CreateUserPoolClientInput";
import { CreateUserPoolClientOutput } from "./types/CreateUserPoolClientOutput";
import { CreateUserPoolDomainInput } from "./types/CreateUserPoolDomainInput";
import { CreateUserPoolDomainOutput } from "./types/CreateUserPoolDomainOutput";
import { CreateUserPoolInput } from "./types/CreateUserPoolInput";
import { CreateUserPoolOutput } from "./types/CreateUserPoolOutput";
import { DeleteGroupInput } from "./types/DeleteGroupInput";
import { DeleteGroupOutput } from "./types/DeleteGroupOutput";
import { DeleteIdentityProviderInput } from "./types/DeleteIdentityProviderInput";
import { DeleteIdentityProviderOutput } from "./types/DeleteIdentityProviderOutput";
import { DeleteResourceServerInput } from "./types/DeleteResourceServerInput";
import { DeleteResourceServerOutput } from "./types/DeleteResourceServerOutput";
import { DeleteUserAttributesInput } from "./types/DeleteUserAttributesInput";
import { DeleteUserAttributesOutput } from "./types/DeleteUserAttributesOutput";
import { DeleteUserInput } from "./types/DeleteUserInput";
import { DeleteUserOutput } from "./types/DeleteUserOutput";
import { DeleteUserPoolClientInput } from "./types/DeleteUserPoolClientInput";
import { DeleteUserPoolClientOutput } from "./types/DeleteUserPoolClientOutput";
import { DeleteUserPoolDomainInput } from "./types/DeleteUserPoolDomainInput";
import { DeleteUserPoolDomainOutput } from "./types/DeleteUserPoolDomainOutput";
import { DeleteUserPoolInput } from "./types/DeleteUserPoolInput";
import { DeleteUserPoolOutput } from "./types/DeleteUserPoolOutput";
import { DescribeIdentityProviderInput } from "./types/DescribeIdentityProviderInput";
import { DescribeIdentityProviderOutput } from "./types/DescribeIdentityProviderOutput";
import { DescribeResourceServerInput } from "./types/DescribeResourceServerInput";
import { DescribeResourceServerOutput } from "./types/DescribeResourceServerOutput";
import { DescribeRiskConfigurationInput } from "./types/DescribeRiskConfigurationInput";
import { DescribeRiskConfigurationOutput } from "./types/DescribeRiskConfigurationOutput";
import { DescribeUserImportJobInput } from "./types/DescribeUserImportJobInput";
import { DescribeUserImportJobOutput } from "./types/DescribeUserImportJobOutput";
import { DescribeUserPoolClientInput } from "./types/DescribeUserPoolClientInput";
import { DescribeUserPoolClientOutput } from "./types/DescribeUserPoolClientOutput";
import { DescribeUserPoolDomainInput } from "./types/DescribeUserPoolDomainInput";
import { DescribeUserPoolDomainOutput } from "./types/DescribeUserPoolDomainOutput";
import { DescribeUserPoolInput } from "./types/DescribeUserPoolInput";
import { DescribeUserPoolOutput } from "./types/DescribeUserPoolOutput";
import { DuplicateProviderException } from "./types/DuplicateProviderException";
import { EnableSoftwareTokenMFAException } from "./types/EnableSoftwareTokenMFAException";
import { ExpiredCodeException } from "./types/ExpiredCodeException";
import { ForgetDeviceInput } from "./types/ForgetDeviceInput";
import { ForgetDeviceOutput } from "./types/ForgetDeviceOutput";
import { ForgotPasswordInput } from "./types/ForgotPasswordInput";
import { ForgotPasswordOutput } from "./types/ForgotPasswordOutput";
import { GetCSVHeaderInput } from "./types/GetCSVHeaderInput";
import { GetCSVHeaderOutput } from "./types/GetCSVHeaderOutput";
import { GetDeviceInput } from "./types/GetDeviceInput";
import { GetDeviceOutput } from "./types/GetDeviceOutput";
import { GetGroupInput } from "./types/GetGroupInput";
import { GetGroupOutput } from "./types/GetGroupOutput";
import { GetIdentityProviderByIdentifierInput } from "./types/GetIdentityProviderByIdentifierInput";
import { GetIdentityProviderByIdentifierOutput } from "./types/GetIdentityProviderByIdentifierOutput";
import { GetSigningCertificateInput } from "./types/GetSigningCertificateInput";
import { GetSigningCertificateOutput } from "./types/GetSigningCertificateOutput";
import { GetUICustomizationInput } from "./types/GetUICustomizationInput";
import { GetUICustomizationOutput } from "./types/GetUICustomizationOutput";
import { GetUserAttributeVerificationCodeInput } from "./types/GetUserAttributeVerificationCodeInput";
import { GetUserAttributeVerificationCodeOutput } from "./types/GetUserAttributeVerificationCodeOutput";
import { GetUserInput } from "./types/GetUserInput";
import { GetUserOutput } from "./types/GetUserOutput";
import { GetUserPoolMfaConfigInput } from "./types/GetUserPoolMfaConfigInput";
import { GetUserPoolMfaConfigOutput } from "./types/GetUserPoolMfaConfigOutput";
import { GlobalSignOutInput } from "./types/GlobalSignOutInput";
import { GlobalSignOutOutput } from "./types/GlobalSignOutOutput";
import { GroupExistsException } from "./types/GroupExistsException";
import { InitiateAuthInput } from "./types/InitiateAuthInput";
import { InitiateAuthOutput } from "./types/InitiateAuthOutput";
import { InternalErrorException } from "./types/InternalErrorException";
import { InvalidEmailRoleAccessPolicyException } from "./types/InvalidEmailRoleAccessPolicyException";
import { InvalidLambdaResponseException } from "./types/InvalidLambdaResponseException";
import { InvalidOAuthFlowException } from "./types/InvalidOAuthFlowException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidPasswordException } from "./types/InvalidPasswordException";
import { InvalidSmsRoleAccessPolicyException } from "./types/InvalidSmsRoleAccessPolicyException";
import { InvalidSmsRoleTrustRelationshipException } from "./types/InvalidSmsRoleTrustRelationshipException";
import { InvalidUserPoolConfigurationException } from "./types/InvalidUserPoolConfigurationException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListDevicesInput } from "./types/ListDevicesInput";
import { ListDevicesOutput } from "./types/ListDevicesOutput";
import { ListGroupsInput } from "./types/ListGroupsInput";
import { ListGroupsOutput } from "./types/ListGroupsOutput";
import { ListIdentityProvidersInput } from "./types/ListIdentityProvidersInput";
import { ListIdentityProvidersOutput } from "./types/ListIdentityProvidersOutput";
import { ListResourceServersInput } from "./types/ListResourceServersInput";
import { ListResourceServersOutput } from "./types/ListResourceServersOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListUserImportJobsInput } from "./types/ListUserImportJobsInput";
import { ListUserImportJobsOutput } from "./types/ListUserImportJobsOutput";
import { ListUserPoolClientsInput } from "./types/ListUserPoolClientsInput";
import { ListUserPoolClientsOutput } from "./types/ListUserPoolClientsOutput";
import { ListUserPoolsInput } from "./types/ListUserPoolsInput";
import { ListUserPoolsOutput } from "./types/ListUserPoolsOutput";
import { ListUsersInGroupInput } from "./types/ListUsersInGroupInput";
import { ListUsersInGroupOutput } from "./types/ListUsersInGroupOutput";
import { ListUsersInput } from "./types/ListUsersInput";
import { ListUsersOutput } from "./types/ListUsersOutput";
import { MFAMethodNotFoundException } from "./types/MFAMethodNotFoundException";
import { NotAuthorizedException } from "./types/NotAuthorizedException";
import { PasswordResetRequiredException } from "./types/PasswordResetRequiredException";
import { PreconditionNotMetException } from "./types/PreconditionNotMetException";
import { ResendConfirmationCodeInput } from "./types/ResendConfirmationCodeInput";
import { ResendConfirmationCodeOutput } from "./types/ResendConfirmationCodeOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { RespondToAuthChallengeInput } from "./types/RespondToAuthChallengeInput";
import { RespondToAuthChallengeOutput } from "./types/RespondToAuthChallengeOutput";
import { ScopeDoesNotExistException } from "./types/ScopeDoesNotExistException";
import { SetRiskConfigurationInput } from "./types/SetRiskConfigurationInput";
import { SetRiskConfigurationOutput } from "./types/SetRiskConfigurationOutput";
import { SetUICustomizationInput } from "./types/SetUICustomizationInput";
import { SetUICustomizationOutput } from "./types/SetUICustomizationOutput";
import { SetUserMFAPreferenceInput } from "./types/SetUserMFAPreferenceInput";
import { SetUserMFAPreferenceOutput } from "./types/SetUserMFAPreferenceOutput";
import { SetUserPoolMfaConfigInput } from "./types/SetUserPoolMfaConfigInput";
import { SetUserPoolMfaConfigOutput } from "./types/SetUserPoolMfaConfigOutput";
import { SetUserSettingsInput } from "./types/SetUserSettingsInput";
import { SetUserSettingsOutput } from "./types/SetUserSettingsOutput";
import { SignUpInput } from "./types/SignUpInput";
import { SignUpOutput } from "./types/SignUpOutput";
import { SoftwareTokenMFANotFoundException } from "./types/SoftwareTokenMFANotFoundException";
import { StartUserImportJobInput } from "./types/StartUserImportJobInput";
import { StartUserImportJobOutput } from "./types/StartUserImportJobOutput";
import { StopUserImportJobInput } from "./types/StopUserImportJobInput";
import { StopUserImportJobOutput } from "./types/StopUserImportJobOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyFailedAttemptsException } from "./types/TooManyFailedAttemptsException";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnexpectedLambdaException } from "./types/UnexpectedLambdaException";
import { UnsupportedIdentityProviderException } from "./types/UnsupportedIdentityProviderException";
import { UnsupportedUserStateException } from "./types/UnsupportedUserStateException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateAuthEventFeedbackInput } from "./types/UpdateAuthEventFeedbackInput";
import { UpdateAuthEventFeedbackOutput } from "./types/UpdateAuthEventFeedbackOutput";
import { UpdateDeviceStatusInput } from "./types/UpdateDeviceStatusInput";
import { UpdateDeviceStatusOutput } from "./types/UpdateDeviceStatusOutput";
import { UpdateGroupInput } from "./types/UpdateGroupInput";
import { UpdateGroupOutput } from "./types/UpdateGroupOutput";
import { UpdateIdentityProviderInput } from "./types/UpdateIdentityProviderInput";
import { UpdateIdentityProviderOutput } from "./types/UpdateIdentityProviderOutput";
import { UpdateResourceServerInput } from "./types/UpdateResourceServerInput";
import { UpdateResourceServerOutput } from "./types/UpdateResourceServerOutput";
import { UpdateUserAttributesInput } from "./types/UpdateUserAttributesInput";
import { UpdateUserAttributesOutput } from "./types/UpdateUserAttributesOutput";
import { UpdateUserPoolClientInput } from "./types/UpdateUserPoolClientInput";
import { UpdateUserPoolClientOutput } from "./types/UpdateUserPoolClientOutput";
import { UpdateUserPoolDomainInput } from "./types/UpdateUserPoolDomainInput";
import { UpdateUserPoolDomainOutput } from "./types/UpdateUserPoolDomainOutput";
import { UpdateUserPoolInput } from "./types/UpdateUserPoolInput";
import { UpdateUserPoolOutput } from "./types/UpdateUserPoolOutput";
import { UserImportInProgressException } from "./types/UserImportInProgressException";
import { UserLambdaValidationException } from "./types/UserLambdaValidationException";
import { UserNotConfirmedException } from "./types/UserNotConfirmedException";
import { UserNotFoundException } from "./types/UserNotFoundException";
import { UserPoolAddOnNotEnabledException } from "./types/UserPoolAddOnNotEnabledException";
import { UserPoolTaggingException } from "./types/UserPoolTaggingException";
import { UsernameExistsException } from "./types/UsernameExistsException";
import { VerifySoftwareTokenInput } from "./types/VerifySoftwareTokenInput";
import { VerifySoftwareTokenOutput } from "./types/VerifySoftwareTokenOutput";
import { VerifyUserAttributeInput } from "./types/VerifyUserAttributeInput";
import { VerifyUserAttributeOutput } from "./types/VerifyUserAttributeOutput";
import { AddCustomAttributesCommand } from "./commands/AddCustomAttributesCommand";
import { AdminAddUserToGroupCommand } from "./commands/AdminAddUserToGroupCommand";
import { AdminConfirmSignUpCommand } from "./commands/AdminConfirmSignUpCommand";
import { AdminCreateUserCommand } from "./commands/AdminCreateUserCommand";
import { AdminDeleteUserAttributesCommand } from "./commands/AdminDeleteUserAttributesCommand";
import { AdminDeleteUserCommand } from "./commands/AdminDeleteUserCommand";
import { AdminDisableProviderForUserCommand } from "./commands/AdminDisableProviderForUserCommand";
import { AdminDisableUserCommand } from "./commands/AdminDisableUserCommand";
import { AdminEnableUserCommand } from "./commands/AdminEnableUserCommand";
import { AdminForgetDeviceCommand } from "./commands/AdminForgetDeviceCommand";
import { AdminGetDeviceCommand } from "./commands/AdminGetDeviceCommand";
import { AdminGetUserCommand } from "./commands/AdminGetUserCommand";
import { AdminInitiateAuthCommand } from "./commands/AdminInitiateAuthCommand";
import { AdminLinkProviderForUserCommand } from "./commands/AdminLinkProviderForUserCommand";
import { AdminListDevicesCommand } from "./commands/AdminListDevicesCommand";
import { AdminListGroupsForUserCommand } from "./commands/AdminListGroupsForUserCommand";
import { AdminListUserAuthEventsCommand } from "./commands/AdminListUserAuthEventsCommand";
import { AdminRemoveUserFromGroupCommand } from "./commands/AdminRemoveUserFromGroupCommand";
import { AdminResetUserPasswordCommand } from "./commands/AdminResetUserPasswordCommand";
import { AdminRespondToAuthChallengeCommand } from "./commands/AdminRespondToAuthChallengeCommand";
import { AdminSetUserMFAPreferenceCommand } from "./commands/AdminSetUserMFAPreferenceCommand";
import { AdminSetUserPasswordCommand } from "./commands/AdminSetUserPasswordCommand";
import { AdminSetUserSettingsCommand } from "./commands/AdminSetUserSettingsCommand";
import { AdminUpdateAuthEventFeedbackCommand } from "./commands/AdminUpdateAuthEventFeedbackCommand";
import { AdminUpdateDeviceStatusCommand } from "./commands/AdminUpdateDeviceStatusCommand";
import { AdminUpdateUserAttributesCommand } from "./commands/AdminUpdateUserAttributesCommand";
import { AdminUserGlobalSignOutCommand } from "./commands/AdminUserGlobalSignOutCommand";
import { AssociateSoftwareTokenCommand } from "./commands/AssociateSoftwareTokenCommand";
import { ChangePasswordCommand } from "./commands/ChangePasswordCommand";
import { ConfirmDeviceCommand } from "./commands/ConfirmDeviceCommand";
import { ConfirmForgotPasswordCommand } from "./commands/ConfirmForgotPasswordCommand";
import { ConfirmSignUpCommand } from "./commands/ConfirmSignUpCommand";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { CreateIdentityProviderCommand } from "./commands/CreateIdentityProviderCommand";
import { CreateResourceServerCommand } from "./commands/CreateResourceServerCommand";
import { CreateUserImportJobCommand } from "./commands/CreateUserImportJobCommand";
import { CreateUserPoolClientCommand } from "./commands/CreateUserPoolClientCommand";
import { CreateUserPoolCommand } from "./commands/CreateUserPoolCommand";
import { CreateUserPoolDomainCommand } from "./commands/CreateUserPoolDomainCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { DeleteIdentityProviderCommand } from "./commands/DeleteIdentityProviderCommand";
import { DeleteResourceServerCommand } from "./commands/DeleteResourceServerCommand";
import { DeleteUserAttributesCommand } from "./commands/DeleteUserAttributesCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DeleteUserPoolClientCommand } from "./commands/DeleteUserPoolClientCommand";
import { DeleteUserPoolCommand } from "./commands/DeleteUserPoolCommand";
import { DeleteUserPoolDomainCommand } from "./commands/DeleteUserPoolDomainCommand";
import { DescribeIdentityProviderCommand } from "./commands/DescribeIdentityProviderCommand";
import { DescribeResourceServerCommand } from "./commands/DescribeResourceServerCommand";
import { DescribeRiskConfigurationCommand } from "./commands/DescribeRiskConfigurationCommand";
import { DescribeUserImportJobCommand } from "./commands/DescribeUserImportJobCommand";
import { DescribeUserPoolClientCommand } from "./commands/DescribeUserPoolClientCommand";
import { DescribeUserPoolCommand } from "./commands/DescribeUserPoolCommand";
import { DescribeUserPoolDomainCommand } from "./commands/DescribeUserPoolDomainCommand";
import { ForgetDeviceCommand } from "./commands/ForgetDeviceCommand";
import { ForgotPasswordCommand } from "./commands/ForgotPasswordCommand";
import { GetCSVHeaderCommand } from "./commands/GetCSVHeaderCommand";
import { GetDeviceCommand } from "./commands/GetDeviceCommand";
import { GetGroupCommand } from "./commands/GetGroupCommand";
import { GetIdentityProviderByIdentifierCommand } from "./commands/GetIdentityProviderByIdentifierCommand";
import { GetSigningCertificateCommand } from "./commands/GetSigningCertificateCommand";
import { GetUICustomizationCommand } from "./commands/GetUICustomizationCommand";
import { GetUserAttributeVerificationCodeCommand } from "./commands/GetUserAttributeVerificationCodeCommand";
import { GetUserCommand } from "./commands/GetUserCommand";
import { GetUserPoolMfaConfigCommand } from "./commands/GetUserPoolMfaConfigCommand";
import { GlobalSignOutCommand } from "./commands/GlobalSignOutCommand";
import { InitiateAuthCommand } from "./commands/InitiateAuthCommand";
import { ListDevicesCommand } from "./commands/ListDevicesCommand";
import { ListGroupsCommand } from "./commands/ListGroupsCommand";
import { ListIdentityProvidersCommand } from "./commands/ListIdentityProvidersCommand";
import { ListResourceServersCommand } from "./commands/ListResourceServersCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListUserImportJobsCommand } from "./commands/ListUserImportJobsCommand";
import { ListUserPoolClientsCommand } from "./commands/ListUserPoolClientsCommand";
import { ListUserPoolsCommand } from "./commands/ListUserPoolsCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { ListUsersInGroupCommand } from "./commands/ListUsersInGroupCommand";
import { ResendConfirmationCodeCommand } from "./commands/ResendConfirmationCodeCommand";
import { RespondToAuthChallengeCommand } from "./commands/RespondToAuthChallengeCommand";
import { SetRiskConfigurationCommand } from "./commands/SetRiskConfigurationCommand";
import { SetUICustomizationCommand } from "./commands/SetUICustomizationCommand";
import { SetUserMFAPreferenceCommand } from "./commands/SetUserMFAPreferenceCommand";
import { SetUserPoolMfaConfigCommand } from "./commands/SetUserPoolMfaConfigCommand";
import { SetUserSettingsCommand } from "./commands/SetUserSettingsCommand";
import { SignUpCommand } from "./commands/SignUpCommand";
import { StartUserImportJobCommand } from "./commands/StartUserImportJobCommand";
import { StopUserImportJobCommand } from "./commands/StopUserImportJobCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAuthEventFeedbackCommand } from "./commands/UpdateAuthEventFeedbackCommand";
import { UpdateDeviceStatusCommand } from "./commands/UpdateDeviceStatusCommand";
import { UpdateGroupCommand } from "./commands/UpdateGroupCommand";
import { UpdateIdentityProviderCommand } from "./commands/UpdateIdentityProviderCommand";
import { UpdateResourceServerCommand } from "./commands/UpdateResourceServerCommand";
import { UpdateUserAttributesCommand } from "./commands/UpdateUserAttributesCommand";
import { UpdateUserPoolClientCommand } from "./commands/UpdateUserPoolClientCommand";
import { UpdateUserPoolCommand } from "./commands/UpdateUserPoolCommand";
import { UpdateUserPoolDomainCommand } from "./commands/UpdateUserPoolDomainCommand";
import { VerifySoftwareTokenCommand } from "./commands/VerifySoftwareTokenCommand";
import { VerifyUserAttributeCommand } from "./commands/VerifyUserAttributeCommand";

export class CognitoIdentityProvider extends CognitoIdentityProviderClient {
  /**
   * <p>Adds additional user attributes to the user pool schema.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserImportInProgressException} <p>This exception is thrown when you are trying to modify a user pool while a user import job is in progress for that pool.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addCustomAttributes(
    args: AddCustomAttributesInput
  ): Promise<AddCustomAttributesOutput>;
  public addCustomAttributes(
    args: AddCustomAttributesInput,
    cb: (err: any, data?: AddCustomAttributesOutput) => void
  ): void;
  public addCustomAttributes(
    args: AddCustomAttributesInput,
    cb?: (err: any, data?: AddCustomAttributesOutput) => void
  ): Promise<AddCustomAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddCustomAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified user to the specified group.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminAddUserToGroup(
    args: AdminAddUserToGroupInput
  ): Promise<AdminAddUserToGroupOutput>;
  public adminAddUserToGroup(
    args: AdminAddUserToGroupInput,
    cb: (err: any, data?: AdminAddUserToGroupOutput) => void
  ): void;
  public adminAddUserToGroup(
    args: AdminAddUserToGroupInput,
    cb?: (err: any, data?: AdminAddUserToGroupOutput) => void
  ): Promise<AdminAddUserToGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminAddUserToGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyFailedAttemptsException} <p>This exception is thrown when the user has made too many failed attempts for a given action (e.g., sign in).</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminConfirmSignUp(
    args: AdminConfirmSignUpInput
  ): Promise<AdminConfirmSignUpOutput>;
  public adminConfirmSignUp(
    args: AdminConfirmSignUpInput,
    cb: (err: any, data?: AdminConfirmSignUpOutput) => void
  ): void;
  public adminConfirmSignUp(
    args: AdminConfirmSignUpInput,
    cb?: (err: any, data?: AdminConfirmSignUpOutput) => void
  ): Promise<AdminConfirmSignUpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminConfirmSignUpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> is not set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This message is based on a template that you configured in your call to or . This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> </note> <p>Alternatively, you can call AdminCreateUser with “SUPPRESS” for the <code>MessageAction</code> parameter, and Amazon Cognito will not send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <p>AdminCreateUser requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UsernameExistsException} <p>This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.</p>
   *   - {InvalidPasswordException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid password.</p>
   *   - {CodeDeliveryFailureException} <p>This exception is thrown when a verification code fails to deliver successfully.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {PreconditionNotMetException} <p>This exception is thrown when a precondition is not met.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UnsupportedUserStateException} <p>The request failed because the user is in an unsupported state.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminCreateUser(
    args: AdminCreateUserInput
  ): Promise<AdminCreateUserOutput>;
  public adminCreateUser(
    args: AdminCreateUserInput,
    cb: (err: any, data?: AdminCreateUserOutput) => void
  ): void;
  public adminCreateUser(
    args: AdminCreateUserInput,
    cb?: (err: any, data?: AdminCreateUserOutput) => void
  ): Promise<AdminCreateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminCreateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a user as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminDeleteUser(
    args: AdminDeleteUserInput
  ): Promise<AdminDeleteUserOutput>;
  public adminDeleteUser(
    args: AdminDeleteUserInput,
    cb: (err: any, data?: AdminDeleteUserOutput) => void
  ): void;
  public adminDeleteUser(
    args: AdminDeleteUserInput,
    cb?: (err: any, data?: AdminDeleteUserOutput) => void
  ): Promise<AdminDeleteUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminDeleteUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesInput
  ): Promise<AdminDeleteUserAttributesOutput>;
  public adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesInput,
    cb: (err: any, data?: AdminDeleteUserAttributesOutput) => void
  ): void;
  public adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesInput,
    cb?: (err: any, data?: AdminDeleteUserAttributesOutput) => void
  ): Promise<AdminDeleteUserAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminDeleteUserAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the user from signing in with the specified external (SAML or social) identity provider. If the user to disable is a Cognito User Pools native username + password user, they are not permitted to use their password to sign-in. If the user to disable is a linked external IdP user, any link between that user and an existing user is removed. The next time the external user (no longer attached to the previously linked <code>DestinationUser</code>) signs in, they must create a new user account. See .</p> <p>This action is enabled only for admin access and requires developer credentials.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To disable a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>, with the <code>ProviderAttributeValue</code> being the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social identity providers. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign-in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked in the call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {AliasExistsException} <p>This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminDisableProviderForUser(
    args: AdminDisableProviderForUserInput
  ): Promise<AdminDisableProviderForUserOutput>;
  public adminDisableProviderForUser(
    args: AdminDisableProviderForUserInput,
    cb: (err: any, data?: AdminDisableProviderForUserOutput) => void
  ): void;
  public adminDisableProviderForUser(
    args: AdminDisableProviderForUserInput,
    cb?: (err: any, data?: AdminDisableProviderForUserOutput) => void
  ): Promise<AdminDisableProviderForUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminDisableProviderForUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the specified user as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminDisableUser(
    args: AdminDisableUserInput
  ): Promise<AdminDisableUserOutput>;
  public adminDisableUser(
    args: AdminDisableUserInput,
    cb: (err: any, data?: AdminDisableUserOutput) => void
  ): void;
  public adminDisableUser(
    args: AdminDisableUserInput,
    cb?: (err: any, data?: AdminDisableUserOutput) => void
  ): Promise<AdminDisableUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminDisableUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the specified user as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminEnableUser(
    args: AdminEnableUserInput
  ): Promise<AdminEnableUserOutput>;
  public adminEnableUser(
    args: AdminEnableUserInput,
    cb: (err: any, data?: AdminEnableUserOutput) => void
  ): void;
  public adminEnableUser(
    args: AdminEnableUserInput,
    cb?: (err: any, data?: AdminEnableUserOutput) => void
  ): Promise<AdminEnableUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminEnableUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Forgets the device, as an administrator.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminForgetDevice(
    args: AdminForgetDeviceInput
  ): Promise<AdminForgetDeviceOutput>;
  public adminForgetDevice(
    args: AdminForgetDeviceInput,
    cb: (err: any, data?: AdminForgetDeviceOutput) => void
  ): void;
  public adminForgetDevice(
    args: AdminForgetDeviceInput,
    cb?: (err: any, data?: AdminForgetDeviceOutput) => void
  ): Promise<AdminForgetDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminForgetDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the device, as an administrator.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminGetDevice(
    args: AdminGetDeviceInput
  ): Promise<AdminGetDeviceOutput>;
  public adminGetDevice(
    args: AdminGetDeviceInput,
    cb: (err: any, data?: AdminGetDeviceOutput) => void
  ): void;
  public adminGetDevice(
    args: AdminGetDeviceInput,
    cb?: (err: any, data?: AdminGetDeviceOutput) => void
  ): Promise<AdminGetDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminGetDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminGetUser(args: AdminGetUserInput): Promise<AdminGetUserOutput>;
  public adminGetUser(
    args: AdminGetUserInput,
    cb: (err: any, data?: AdminGetUserOutput) => void
  ): void;
  public adminGetUser(
    args: AdminGetUserInput,
    cb?: (err: any, data?: AdminGetUserOutput) => void
  ): Promise<AdminGetUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminGetUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates the authentication flow, as an administrator.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {MFAMethodNotFoundException} <p>This exception is thrown when Amazon Cognito cannot find a multi-factor authentication (MFA) method.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminInitiateAuth(
    args: AdminInitiateAuthInput
  ): Promise<AdminInitiateAuthOutput>;
  public adminInitiateAuth(
    args: AdminInitiateAuthInput,
    cb: (err: any, data?: AdminInitiateAuthOutput) => void
  ): void;
  public adminInitiateAuth(
    args: AdminInitiateAuthInput,
    cb?: (err: any, data?: AdminInitiateAuthOutput) => void
  ): Promise<AdminInitiateAuthOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminInitiateAuthCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external identity provider (<code>SourceUser</code>) based on a specified attribute name and value from the external identity provider. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in, so that the federated user identity can be used to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity, so that when the federated user identity is used, the user signs in as the existing user account. </p> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external identity providers and provider attributes that have been trusted by the application owner.</p> </important> <p>See also .</p> <p>This action is enabled only for admin access and requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {AliasExistsException} <p>This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminLinkProviderForUser(
    args: AdminLinkProviderForUserInput
  ): Promise<AdminLinkProviderForUserOutput>;
  public adminLinkProviderForUser(
    args: AdminLinkProviderForUserInput,
    cb: (err: any, data?: AdminLinkProviderForUserOutput) => void
  ): void;
  public adminLinkProviderForUser(
    args: AdminLinkProviderForUserInput,
    cb?: (err: any, data?: AdminLinkProviderForUserOutput) => void
  ): Promise<AdminLinkProviderForUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminLinkProviderForUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists devices, as an administrator.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminListDevices(
    args: AdminListDevicesInput
  ): Promise<AdminListDevicesOutput>;
  public adminListDevices(
    args: AdminListDevicesInput,
    cb: (err: any, data?: AdminListDevicesOutput) => void
  ): void;
  public adminListDevices(
    args: AdminListDevicesInput,
    cb?: (err: any, data?: AdminListDevicesOutput) => void
  ): Promise<AdminListDevicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminListDevicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the groups that the user belongs to.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminListGroupsForUser(
    args: AdminListGroupsForUserInput
  ): Promise<AdminListGroupsForUserOutput>;
  public adminListGroupsForUser(
    args: AdminListGroupsForUserInput,
    cb: (err: any, data?: AdminListGroupsForUserOutput) => void
  ): void;
  public adminListGroupsForUser(
    args: AdminListGroupsForUserInput,
    cb?: (err: any, data?: AdminListGroupsForUserOutput) => void
  ): Promise<AdminListGroupsForUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminListGroupsForUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists a history of user activity and any risks detected as part of Amazon Cognito advanced security.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserPoolAddOnNotEnabledException} <p>This exception is thrown when user pool add-ons are not enabled.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminListUserAuthEvents(
    args: AdminListUserAuthEventsInput
  ): Promise<AdminListUserAuthEventsOutput>;
  public adminListUserAuthEvents(
    args: AdminListUserAuthEventsInput,
    cb: (err: any, data?: AdminListUserAuthEventsOutput) => void
  ): void;
  public adminListUserAuthEvents(
    args: AdminListUserAuthEventsInput,
    cb?: (err: any, data?: AdminListUserAuthEventsOutput) => void
  ): Promise<AdminListUserAuthEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminListUserAuthEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified user from the specified group.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupInput
  ): Promise<AdminRemoveUserFromGroupOutput>;
  public adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupInput,
    cb: (err: any, data?: AdminRemoveUserFromGroupOutput) => void
  ): void;
  public adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupInput,
    cb?: (err: any, data?: AdminRemoveUserFromGroupOutput) => void
  ): Promise<AdminRemoveUserFromGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminRemoveUserFromGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <p>When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidEmailRoleAccessPolicyException} <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminResetUserPassword(
    args: AdminResetUserPasswordInput
  ): Promise<AdminResetUserPasswordOutput>;
  public adminResetUserPassword(
    args: AdminResetUserPasswordInput,
    cb: (err: any, data?: AdminResetUserPasswordOutput) => void
  ): void;
  public adminResetUserPassword(
    args: AdminResetUserPasswordInput,
    cb?: (err: any, data?: AdminResetUserPasswordOutput) => void
  ): Promise<AdminResetUserPasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminResetUserPasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Responds to an authentication challenge, as an administrator.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {CodeMismatchException} <p>This exception is thrown if the provided code does not match what the server was expecting.</p>
   *   - {ExpiredCodeException} <p>This exception is thrown if a code has expired.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {InvalidPasswordException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid password.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {MFAMethodNotFoundException} <p>This exception is thrown when Amazon Cognito cannot find a multi-factor authentication (MFA) method.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {AliasExistsException} <p>This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {SoftwareTokenMFANotFoundException} <p>This exception is thrown when the software token TOTP multi-factor authentication (MFA) is not enabled for the user pool.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeInput
  ): Promise<AdminRespondToAuthChallengeOutput>;
  public adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeInput,
    cb: (err: any, data?: AdminRespondToAuthChallengeOutput) => void
  ): void;
  public adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeInput,
    cb?: (err: any, data?: AdminRespondToAuthChallengeOutput) => void
  ): Promise<AdminRespondToAuthChallengeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminRespondToAuthChallengeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the user's multi-factor authentication (MFA) preference.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceInput
  ): Promise<AdminSetUserMFAPreferenceOutput>;
  public adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceInput,
    cb: (err: any, data?: AdminSetUserMFAPreferenceOutput) => void
  ): void;
  public adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceInput,
    cb?: (err: any, data?: AdminSetUserMFAPreferenceOutput) => void
  ): Promise<AdminSetUserMFAPreferenceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminSetUserMFAPreferenceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * AdminSetUserPassword operation
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {InvalidPasswordException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid password.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminSetUserPassword(
    args: AdminSetUserPasswordInput
  ): Promise<AdminSetUserPasswordOutput>;
  public adminSetUserPassword(
    args: AdminSetUserPasswordInput,
    cb: (err: any, data?: AdminSetUserPasswordOutput) => void
  ): void;
  public adminSetUserPassword(
    args: AdminSetUserPasswordInput,
    cb?: (err: any, data?: AdminSetUserPasswordOutput) => void
  ): Promise<AdminSetUserPasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminSetUserPasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets all the user settings for a specified user name. Works on any user.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminSetUserSettings(
    args: AdminSetUserSettingsInput
  ): Promise<AdminSetUserSettingsOutput>;
  public adminSetUserSettings(
    args: AdminSetUserSettingsInput,
    cb: (err: any, data?: AdminSetUserSettingsOutput) => void
  ): void;
  public adminSetUserSettings(
    args: AdminSetUserSettingsInput,
    cb?: (err: any, data?: AdminSetUserSettingsOutput) => void
  ): Promise<AdminSetUserSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminSetUserSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides feedback for an authentication event as to whether it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserPoolAddOnNotEnabledException} <p>This exception is thrown when user pool add-ons are not enabled.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackInput
  ): Promise<AdminUpdateAuthEventFeedbackOutput>;
  public adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackInput,
    cb: (err: any, data?: AdminUpdateAuthEventFeedbackOutput) => void
  ): void;
  public adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackInput,
    cb?: (err: any, data?: AdminUpdateAuthEventFeedbackOutput) => void
  ): Promise<AdminUpdateAuthEventFeedbackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminUpdateAuthEventFeedbackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the device status as an administrator.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusInput
  ): Promise<AdminUpdateDeviceStatusOutput>;
  public adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusInput,
    cb: (err: any, data?: AdminUpdateDeviceStatusOutput) => void
  ): void;
  public adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusInput,
    cb?: (err: any, data?: AdminUpdateDeviceStatusOutput) => void
  ): Promise<AdminUpdateDeviceStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminUpdateDeviceStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {AliasExistsException} <p>This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidEmailRoleAccessPolicyException} <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesInput
  ): Promise<AdminUpdateUserAttributesOutput>;
  public adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesInput,
    cb: (err: any, data?: AdminUpdateUserAttributesOutput) => void
  ): void;
  public adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesInput,
    cb?: (err: any, data?: AdminUpdateUserAttributesOutput) => void
  ): Promise<AdminUpdateUserAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminUpdateUserAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Signs out users from all devices, as an administrator.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutInput
  ): Promise<AdminUserGlobalSignOutOutput>;
  public adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutInput,
    cb: (err: any, data?: AdminUserGlobalSignOutOutput) => void
  ): void;
  public adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutInput,
    cb?: (err: any, data?: AdminUserGlobalSignOutOutput) => void
  ): Promise<AdminUserGlobalSignOutOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdminUserGlobalSignOutCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a unique generated shared secret key code for the user account. The request takes an access token or a session string, but not both.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {SoftwareTokenMFANotFoundException} <p>This exception is thrown when the software token TOTP multi-factor authentication (MFA) is not enabled for the user pool.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateSoftwareToken(
    args: AssociateSoftwareTokenInput
  ): Promise<AssociateSoftwareTokenOutput>;
  public associateSoftwareToken(
    args: AssociateSoftwareTokenInput,
    cb: (err: any, data?: AssociateSoftwareTokenOutput) => void
  ): void;
  public associateSoftwareToken(
    args: AssociateSoftwareTokenInput,
    cb?: (err: any, data?: AssociateSoftwareTokenOutput) => void
  ): Promise<AssociateSoftwareTokenOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateSoftwareTokenCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the password for a specified user in a user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {InvalidPasswordException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid password.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public changePassword(
    args: ChangePasswordInput
  ): Promise<ChangePasswordOutput>;
  public changePassword(
    args: ChangePasswordInput,
    cb: (err: any, data?: ChangePasswordOutput) => void
  ): void;
  public changePassword(
    args: ChangePasswordInput,
    cb?: (err: any, data?: ChangePasswordOutput) => void
  ): Promise<ChangePasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ChangePasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Confirms tracking of the device. This API call is the call that begins device tracking.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InvalidPasswordException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid password.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {UsernameExistsException} <p>This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public confirmDevice(args: ConfirmDeviceInput): Promise<ConfirmDeviceOutput>;
  public confirmDevice(
    args: ConfirmDeviceInput,
    cb: (err: any, data?: ConfirmDeviceOutput) => void
  ): void;
  public confirmDevice(
    args: ConfirmDeviceInput,
    cb?: (err: any, data?: ConfirmDeviceOutput) => void
  ): Promise<ConfirmDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConfirmDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows a user to enter a confirmation code to reset a forgotten password.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {InvalidPasswordException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid password.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {CodeMismatchException} <p>This exception is thrown if the provided code does not match what the server was expecting.</p>
   *   - {ExpiredCodeException} <p>This exception is thrown if a code has expired.</p>
   *   - {TooManyFailedAttemptsException} <p>This exception is thrown when the user has made too many failed attempts for a given action (e.g., sign in).</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public confirmForgotPassword(
    args: ConfirmForgotPasswordInput
  ): Promise<ConfirmForgotPasswordOutput>;
  public confirmForgotPassword(
    args: ConfirmForgotPasswordInput,
    cb: (err: any, data?: ConfirmForgotPasswordOutput) => void
  ): void;
  public confirmForgotPassword(
    args: ConfirmForgotPasswordInput,
    cb?: (err: any, data?: ConfirmForgotPasswordOutput) => void
  ): Promise<ConfirmForgotPasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConfirmForgotPasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Confirms registration of a user and handles the existing alias from a previous user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyFailedAttemptsException} <p>This exception is thrown when the user has made too many failed attempts for a given action (e.g., sign in).</p>
   *   - {CodeMismatchException} <p>This exception is thrown if the provided code does not match what the server was expecting.</p>
   *   - {ExpiredCodeException} <p>This exception is thrown if a code has expired.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {AliasExistsException} <p>This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public confirmSignUp(args: ConfirmSignUpInput): Promise<ConfirmSignUpOutput>;
  public confirmSignUp(
    args: ConfirmSignUpInput,
    cb: (err: any, data?: ConfirmSignUpOutput) => void
  ): void;
  public confirmSignUp(
    args: ConfirmSignUpInput,
    cb?: (err: any, data?: ConfirmSignUpOutput) => void
  ): Promise<ConfirmSignUpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConfirmSignUpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new group in the specified user pool.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {GroupExistsException} <p>This exception is thrown when Amazon Cognito encounters a group that already exists in the user pool.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGroup(args: CreateGroupInput): Promise<CreateGroupOutput>;
  public createGroup(
    args: CreateGroupInput,
    cb: (err: any, data?: CreateGroupOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupInput,
    cb?: (err: any, data?: CreateGroupOutput) => void
  ): Promise<CreateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an identity provider for a user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {DuplicateProviderException} <p>This exception is thrown when the provider is already supported by the user pool.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createIdentityProvider(
    args: CreateIdentityProviderInput
  ): Promise<CreateIdentityProviderOutput>;
  public createIdentityProvider(
    args: CreateIdentityProviderInput,
    cb: (err: any, data?: CreateIdentityProviderOutput) => void
  ): void;
  public createIdentityProvider(
    args: CreateIdentityProviderInput,
    cb?: (err: any, data?: CreateIdentityProviderOutput) => void
  ): Promise<CreateIdentityProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateIdentityProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new OAuth2.0 resource server and defines custom scopes in it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResourceServer(
    args: CreateResourceServerInput
  ): Promise<CreateResourceServerOutput>;
  public createResourceServer(
    args: CreateResourceServerInput,
    cb: (err: any, data?: CreateResourceServerOutput) => void
  ): void;
  public createResourceServer(
    args: CreateResourceServerInput,
    cb?: (err: any, data?: CreateResourceServerOutput) => void
  ): Promise<CreateResourceServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResourceServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates the user import job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {PreconditionNotMetException} <p>This exception is thrown when a precondition is not met.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUserImportJob(
    args: CreateUserImportJobInput
  ): Promise<CreateUserImportJobOutput>;
  public createUserImportJob(
    args: CreateUserImportJobInput,
    cb: (err: any, data?: CreateUserImportJobOutput) => void
  ): void;
  public createUserImportJob(
    args: CreateUserImportJobInput,
    cb?: (err: any, data?: CreateUserImportJobOutput) => void
  ): Promise<CreateUserImportJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserImportJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new Amazon Cognito user pool and sets the password policy for the pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {InvalidEmailRoleAccessPolicyException} <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserPoolTaggingException} <p>This exception is thrown when a user pool tag cannot be set or updated.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUserPool(
    args: CreateUserPoolInput
  ): Promise<CreateUserPoolOutput>;
  public createUserPool(
    args: CreateUserPoolInput,
    cb: (err: any, data?: CreateUserPoolOutput) => void
  ): void;
  public createUserPool(
    args: CreateUserPoolInput,
    cb?: (err: any, data?: CreateUserPoolOutput) => void
  ): Promise<CreateUserPoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserPoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates the user pool client.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {ScopeDoesNotExistException} <p>This exception is thrown when the specified scope does not exist.</p>
   *   - {InvalidOAuthFlowException} <p>This exception is thrown when the specified OAuth flow is invalid.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUserPoolClient(
    args: CreateUserPoolClientInput
  ): Promise<CreateUserPoolClientOutput>;
  public createUserPoolClient(
    args: CreateUserPoolClientInput,
    cb: (err: any, data?: CreateUserPoolClientOutput) => void
  ): void;
  public createUserPoolClient(
    args: CreateUserPoolClientInput,
    cb?: (err: any, data?: CreateUserPoolClientOutput) => void
  ): Promise<CreateUserPoolClientOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserPoolClientCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new domain for a user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUserPoolDomain(
    args: CreateUserPoolDomainInput
  ): Promise<CreateUserPoolDomainOutput>;
  public createUserPoolDomain(
    args: CreateUserPoolDomainInput,
    cb: (err: any, data?: CreateUserPoolDomainOutput) => void
  ): void;
  public createUserPoolDomain(
    args: CreateUserPoolDomainInput,
    cb?: (err: any, data?: CreateUserPoolDomainOutput) => void
  ): Promise<CreateUserPoolDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserPoolDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a group. Currently only groups with no members can be deleted.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGroup(args: DeleteGroupInput): Promise<DeleteGroupOutput>;
  public deleteGroup(
    args: DeleteGroupInput,
    cb: (err: any, data?: DeleteGroupOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupInput,
    cb?: (err: any, data?: DeleteGroupOutput) => void
  ): Promise<DeleteGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an identity provider for a user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {UnsupportedIdentityProviderException} <p>This exception is thrown when the specified identifier is not supported.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIdentityProvider(
    args: DeleteIdentityProviderInput
  ): Promise<DeleteIdentityProviderOutput>;
  public deleteIdentityProvider(
    args: DeleteIdentityProviderInput,
    cb: (err: any, data?: DeleteIdentityProviderOutput) => void
  ): void;
  public deleteIdentityProvider(
    args: DeleteIdentityProviderInput,
    cb?: (err: any, data?: DeleteIdentityProviderOutput) => void
  ): Promise<DeleteIdentityProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIdentityProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a resource server.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResourceServer(
    args: DeleteResourceServerInput
  ): Promise<DeleteResourceServerOutput>;
  public deleteResourceServer(
    args: DeleteResourceServerInput,
    cb: (err: any, data?: DeleteResourceServerOutput) => void
  ): void;
  public deleteResourceServer(
    args: DeleteResourceServerInput,
    cb?: (err: any, data?: DeleteResourceServerOutput) => void
  ): Promise<DeleteResourceServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResourceServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows a user to delete himself or herself.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUser(args: DeleteUserInput): Promise<DeleteUserOutput>;
  public deleteUser(
    args: DeleteUserInput,
    cb: (err: any, data?: DeleteUserOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserInput,
    cb?: (err: any, data?: DeleteUserOutput) => void
  ): Promise<DeleteUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the attributes for a user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserAttributes(
    args: DeleteUserAttributesInput
  ): Promise<DeleteUserAttributesOutput>;
  public deleteUserAttributes(
    args: DeleteUserAttributesInput,
    cb: (err: any, data?: DeleteUserAttributesOutput) => void
  ): void;
  public deleteUserAttributes(
    args: DeleteUserAttributesInput,
    cb?: (err: any, data?: DeleteUserAttributesOutput) => void
  ): Promise<DeleteUserAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Amazon Cognito user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserImportInProgressException} <p>This exception is thrown when you are trying to modify a user pool while a user import job is in progress for that pool.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserPool(
    args: DeleteUserPoolInput
  ): Promise<DeleteUserPoolOutput>;
  public deleteUserPool(
    args: DeleteUserPoolInput,
    cb: (err: any, data?: DeleteUserPoolOutput) => void
  ): void;
  public deleteUserPool(
    args: DeleteUserPoolInput,
    cb?: (err: any, data?: DeleteUserPoolOutput) => void
  ): Promise<DeleteUserPoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserPoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows the developer to delete the user pool client.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserPoolClient(
    args: DeleteUserPoolClientInput
  ): Promise<DeleteUserPoolClientOutput>;
  public deleteUserPoolClient(
    args: DeleteUserPoolClientInput,
    cb: (err: any, data?: DeleteUserPoolClientOutput) => void
  ): void;
  public deleteUserPoolClient(
    args: DeleteUserPoolClientInput,
    cb?: (err: any, data?: DeleteUserPoolClientOutput) => void
  ): Promise<DeleteUserPoolClientOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserPoolClientCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a domain for a user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserPoolDomain(
    args: DeleteUserPoolDomainInput
  ): Promise<DeleteUserPoolDomainOutput>;
  public deleteUserPoolDomain(
    args: DeleteUserPoolDomainInput,
    cb: (err: any, data?: DeleteUserPoolDomainOutput) => void
  ): void;
  public deleteUserPoolDomain(
    args: DeleteUserPoolDomainInput,
    cb?: (err: any, data?: DeleteUserPoolDomainOutput) => void
  ): Promise<DeleteUserPoolDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserPoolDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specific identity provider.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeIdentityProvider(
    args: DescribeIdentityProviderInput
  ): Promise<DescribeIdentityProviderOutput>;
  public describeIdentityProvider(
    args: DescribeIdentityProviderInput,
    cb: (err: any, data?: DescribeIdentityProviderOutput) => void
  ): void;
  public describeIdentityProvider(
    args: DescribeIdentityProviderInput,
    cb?: (err: any, data?: DescribeIdentityProviderOutput) => void
  ): Promise<DescribeIdentityProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeIdentityProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a resource server.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeResourceServer(
    args: DescribeResourceServerInput
  ): Promise<DescribeResourceServerOutput>;
  public describeResourceServer(
    args: DescribeResourceServerInput,
    cb: (err: any, data?: DescribeResourceServerOutput) => void
  ): void;
  public describeResourceServer(
    args: DescribeResourceServerInput,
    cb?: (err: any, data?: DescribeResourceServerOutput) => void
  ): Promise<DescribeResourceServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeResourceServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the risk configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserPoolAddOnNotEnabledException} <p>This exception is thrown when user pool add-ons are not enabled.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRiskConfiguration(
    args: DescribeRiskConfigurationInput
  ): Promise<DescribeRiskConfigurationOutput>;
  public describeRiskConfiguration(
    args: DescribeRiskConfigurationInput,
    cb: (err: any, data?: DescribeRiskConfigurationOutput) => void
  ): void;
  public describeRiskConfiguration(
    args: DescribeRiskConfigurationInput,
    cb?: (err: any, data?: DescribeRiskConfigurationOutput) => void
  ): Promise<DescribeRiskConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRiskConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the user import job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUserImportJob(
    args: DescribeUserImportJobInput
  ): Promise<DescribeUserImportJobOutput>;
  public describeUserImportJob(
    args: DescribeUserImportJobInput,
    cb: (err: any, data?: DescribeUserImportJobOutput) => void
  ): void;
  public describeUserImportJob(
    args: DescribeUserImportJobInput,
    cb?: (err: any, data?: DescribeUserImportJobOutput) => void
  ): Promise<DescribeUserImportJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserImportJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the configuration information and metadata of the specified user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserPoolTaggingException} <p>This exception is thrown when a user pool tag cannot be set or updated.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUserPool(
    args: DescribeUserPoolInput
  ): Promise<DescribeUserPoolOutput>;
  public describeUserPool(
    args: DescribeUserPoolInput,
    cb: (err: any, data?: DescribeUserPoolOutput) => void
  ): void;
  public describeUserPool(
    args: DescribeUserPoolInput,
    cb?: (err: any, data?: DescribeUserPoolOutput) => void
  ): Promise<DescribeUserPoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserPoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Client method for returning the configuration information and metadata of the specified user pool app client.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUserPoolClient(
    args: DescribeUserPoolClientInput
  ): Promise<DescribeUserPoolClientOutput>;
  public describeUserPoolClient(
    args: DescribeUserPoolClientInput,
    cb: (err: any, data?: DescribeUserPoolClientOutput) => void
  ): void;
  public describeUserPoolClient(
    args: DescribeUserPoolClientInput,
    cb?: (err: any, data?: DescribeUserPoolClientOutput) => void
  ): Promise<DescribeUserPoolClientOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserPoolClientCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUserPoolDomain(
    args: DescribeUserPoolDomainInput
  ): Promise<DescribeUserPoolDomainOutput>;
  public describeUserPoolDomain(
    args: DescribeUserPoolDomainInput,
    cb: (err: any, data?: DescribeUserPoolDomainOutput) => void
  ): void;
  public describeUserPoolDomain(
    args: DescribeUserPoolDomainInput,
    cb?: (err: any, data?: DescribeUserPoolDomainOutput) => void
  ): Promise<DescribeUserPoolDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserPoolDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Forgets the specified device.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public forgetDevice(args: ForgetDeviceInput): Promise<ForgetDeviceOutput>;
  public forgetDevice(
    args: ForgetDeviceInput,
    cb: (err: any, data?: ForgetDeviceOutput) => void
  ): void;
  public forgetDevice(
    args: ForgetDeviceInput,
    cb?: (err: any, data?: ForgetDeviceOutput) => void
  ): Promise<ForgetDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ForgetDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. If a verified phone number exists for the user, the confirmation code is sent to the phone number. Otherwise, if a verified email exists, the confirmation code is sent to the email. If neither a verified phone number nor a verified email exists, <code>InvalidParameterException</code> is thrown. To use the confirmation code for resetting the password, call .</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {InvalidEmailRoleAccessPolicyException} <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
   *   - {CodeDeliveryFailureException} <p>This exception is thrown when a verification code fails to deliver successfully.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public forgotPassword(
    args: ForgotPasswordInput
  ): Promise<ForgotPasswordOutput>;
  public forgotPassword(
    args: ForgotPasswordInput,
    cb: (err: any, data?: ForgotPasswordOutput) => void
  ): void;
  public forgotPassword(
    args: ForgotPasswordInput,
    cb?: (err: any, data?: ForgotPasswordOutput) => void
  ): Promise<ForgotPasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ForgotPasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the header information for the .csv file to be used as input for the user import job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCSVHeader(args: GetCSVHeaderInput): Promise<GetCSVHeaderOutput>;
  public getCSVHeader(
    args: GetCSVHeaderInput,
    cb: (err: any, data?: GetCSVHeaderOutput) => void
  ): void;
  public getCSVHeader(
    args: GetCSVHeaderInput,
    cb?: (err: any, data?: GetCSVHeaderOutput) => void
  ): Promise<GetCSVHeaderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCSVHeaderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the device.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDevice(args: GetDeviceInput): Promise<GetDeviceOutput>;
  public getDevice(
    args: GetDeviceInput,
    cb: (err: any, data?: GetDeviceOutput) => void
  ): void;
  public getDevice(
    args: GetDeviceInput,
    cb?: (err: any, data?: GetDeviceOutput) => void
  ): Promise<GetDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a group.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroup(args: GetGroupInput): Promise<GetGroupOutput>;
  public getGroup(
    args: GetGroupInput,
    cb: (err: any, data?: GetGroupOutput) => void
  ): void;
  public getGroup(
    args: GetGroupInput,
    cb?: (err: any, data?: GetGroupOutput) => void
  ): Promise<GetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the specified identity provider.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierInput
  ): Promise<GetIdentityProviderByIdentifierOutput>;
  public getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierInput,
    cb: (err: any, data?: GetIdentityProviderByIdentifierOutput) => void
  ): void;
  public getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierInput,
    cb?: (err: any, data?: GetIdentityProviderByIdentifierOutput) => void
  ): Promise<GetIdentityProviderByIdentifierOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIdentityProviderByIdentifierCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This method takes a user pool ID, and returns the signing certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSigningCertificate(
    args: GetSigningCertificateInput
  ): Promise<GetSigningCertificateOutput>;
  public getSigningCertificate(
    args: GetSigningCertificateInput,
    cb: (err: any, data?: GetSigningCertificateOutput) => void
  ): void;
  public getSigningCertificate(
    args: GetSigningCertificateInput,
    cb?: (err: any, data?: GetSigningCertificateOutput) => void
  ): Promise<GetSigningCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSigningCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the UI Customization information for a particular app client's app UI, if there is something set. If nothing is set for the particular client, but there is an existing pool level customization (app <code>clientId</code> will be <code>ALL</code>), then that is returned. If nothing is present, then an empty shape is returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUICustomization(
    args: GetUICustomizationInput
  ): Promise<GetUICustomizationOutput>;
  public getUICustomization(
    args: GetUICustomizationInput,
    cb: (err: any, data?: GetUICustomizationOutput) => void
  ): void;
  public getUICustomization(
    args: GetUICustomizationInput,
    cb?: (err: any, data?: GetUICustomizationOutput) => void
  ): Promise<GetUICustomizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUICustomizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the user attributes and metadata for a user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUser(args: GetUserInput): Promise<GetUserOutput>;
  public getUser(
    args: GetUserInput,
    cb: (err: any, data?: GetUserOutput) => void
  ): void;
  public getUser(
    args: GetUserInput,
    cb?: (err: any, data?: GetUserOutput) => void
  ): Promise<GetUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the user attribute verification code for the specified attribute name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {InvalidEmailRoleAccessPolicyException} <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
   *   - {CodeDeliveryFailureException} <p>This exception is thrown when a verification code fails to deliver successfully.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeInput
  ): Promise<GetUserAttributeVerificationCodeOutput>;
  public getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeInput,
    cb: (err: any, data?: GetUserAttributeVerificationCodeOutput) => void
  ): void;
  public getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeInput,
    cb?: (err: any, data?: GetUserAttributeVerificationCodeOutput) => void
  ): Promise<GetUserAttributeVerificationCodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUserAttributeVerificationCodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the user pool multi-factor authentication (MFA) configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigInput
  ): Promise<GetUserPoolMfaConfigOutput>;
  public getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigInput,
    cb: (err: any, data?: GetUserPoolMfaConfigOutput) => void
  ): void;
  public getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigInput,
    cb?: (err: any, data?: GetUserPoolMfaConfigOutput) => void
  ): Promise<GetUserPoolMfaConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUserPoolMfaConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Signs out users from all devices.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public globalSignOut(args: GlobalSignOutInput): Promise<GlobalSignOutOutput>;
  public globalSignOut(
    args: GlobalSignOutInput,
    cb: (err: any, data?: GlobalSignOutOutput) => void
  ): void;
  public globalSignOut(
    args: GlobalSignOutInput,
    cb?: (err: any, data?: GlobalSignOutOutput) => void
  ): Promise<GlobalSignOutOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GlobalSignOutCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates the authentication flow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public initiateAuth(args: InitiateAuthInput): Promise<InitiateAuthOutput>;
  public initiateAuth(
    args: InitiateAuthInput,
    cb: (err: any, data?: InitiateAuthOutput) => void
  ): void;
  public initiateAuth(
    args: InitiateAuthInput,
    cb?: (err: any, data?: InitiateAuthOutput) => void
  ): Promise<InitiateAuthOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InitiateAuthCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the devices.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDevices(args: ListDevicesInput): Promise<ListDevicesOutput>;
  public listDevices(
    args: ListDevicesInput,
    cb: (err: any, data?: ListDevicesOutput) => void
  ): void;
  public listDevices(
    args: ListDevicesInput,
    cb?: (err: any, data?: ListDevicesOutput) => void
  ): Promise<ListDevicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDevicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the groups associated with a user pool.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroups(args: ListGroupsInput): Promise<ListGroupsOutput>;
  public listGroups(
    args: ListGroupsInput,
    cb: (err: any, data?: ListGroupsOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsInput,
    cb?: (err: any, data?: ListGroupsOutput) => void
  ): Promise<ListGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists information about all identity providers for a user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listIdentityProviders(
    args: ListIdentityProvidersInput
  ): Promise<ListIdentityProvidersOutput>;
  public listIdentityProviders(
    args: ListIdentityProvidersInput,
    cb: (err: any, data?: ListIdentityProvidersOutput) => void
  ): void;
  public listIdentityProviders(
    args: ListIdentityProvidersInput,
    cb?: (err: any, data?: ListIdentityProvidersOutput) => void
  ): Promise<ListIdentityProvidersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListIdentityProvidersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the resource servers for a user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResourceServers(
    args: ListResourceServersInput
  ): Promise<ListResourceServersOutput>;
  public listResourceServers(
    args: ListResourceServersInput,
    cb: (err: any, data?: ListResourceServersOutput) => void
  ): void;
  public listResourceServers(
    args: ListResourceServersInput,
    cb?: (err: any, data?: ListResourceServersOutput) => void
  ): Promise<ListResourceServersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResourceServersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the user import jobs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUserImportJobs(
    args: ListUserImportJobsInput
  ): Promise<ListUserImportJobsOutput>;
  public listUserImportJobs(
    args: ListUserImportJobsInput,
    cb: (err: any, data?: ListUserImportJobsOutput) => void
  ): void;
  public listUserImportJobs(
    args: ListUserImportJobsInput,
    cb?: (err: any, data?: ListUserImportJobsOutput) => void
  ): Promise<ListUserImportJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUserImportJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the clients that have been created for the specified user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUserPoolClients(
    args: ListUserPoolClientsInput
  ): Promise<ListUserPoolClientsOutput>;
  public listUserPoolClients(
    args: ListUserPoolClientsInput,
    cb: (err: any, data?: ListUserPoolClientsOutput) => void
  ): void;
  public listUserPoolClients(
    args: ListUserPoolClientsInput,
    cb?: (err: any, data?: ListUserPoolClientsOutput) => void
  ): Promise<ListUserPoolClientsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUserPoolClientsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the user pools associated with an AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUserPools(args: ListUserPoolsInput): Promise<ListUserPoolsOutput>;
  public listUserPools(
    args: ListUserPoolsInput,
    cb: (err: any, data?: ListUserPoolsOutput) => void
  ): void;
  public listUserPools(
    args: ListUserPoolsInput,
    cb?: (err: any, data?: ListUserPoolsOutput) => void
  ): Promise<ListUserPoolsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUserPoolsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the users in the Amazon Cognito user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUsers(args: ListUsersInput): Promise<ListUsersOutput>;
  public listUsers(
    args: ListUsersInput,
    cb: (err: any, data?: ListUsersOutput) => void
  ): void;
  public listUsers(
    args: ListUsersInput,
    cb?: (err: any, data?: ListUsersOutput) => void
  ): Promise<ListUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the users in the specified group.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUsersInGroup(
    args: ListUsersInGroupInput
  ): Promise<ListUsersInGroupOutput>;
  public listUsersInGroup(
    args: ListUsersInGroupInput,
    cb: (err: any, data?: ListUsersInGroupOutput) => void
  ): void;
  public listUsersInGroup(
    args: ListUsersInGroupInput,
    cb?: (err: any, data?: ListUsersInGroupOutput) => void
  ): Promise<ListUsersInGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUsersInGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resends the confirmation (for confirmation of registration) to a specific user in the user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {InvalidEmailRoleAccessPolicyException} <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
   *   - {CodeDeliveryFailureException} <p>This exception is thrown when a verification code fails to deliver successfully.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resendConfirmationCode(
    args: ResendConfirmationCodeInput
  ): Promise<ResendConfirmationCodeOutput>;
  public resendConfirmationCode(
    args: ResendConfirmationCodeInput,
    cb: (err: any, data?: ResendConfirmationCodeOutput) => void
  ): void;
  public resendConfirmationCode(
    args: ResendConfirmationCodeInput,
    cb?: (err: any, data?: ResendConfirmationCodeOutput) => void
  ): Promise<ResendConfirmationCodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResendConfirmationCodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Responds to the authentication challenge.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {CodeMismatchException} <p>This exception is thrown if the provided code does not match what the server was expecting.</p>
   *   - {ExpiredCodeException} <p>This exception is thrown if a code has expired.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {InvalidPasswordException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid password.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {MFAMethodNotFoundException} <p>This exception is thrown when Amazon Cognito cannot find a multi-factor authentication (MFA) method.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {AliasExistsException} <p>This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {SoftwareTokenMFANotFoundException} <p>This exception is thrown when the software token TOTP multi-factor authentication (MFA) is not enabled for the user pool.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public respondToAuthChallenge(
    args: RespondToAuthChallengeInput
  ): Promise<RespondToAuthChallengeOutput>;
  public respondToAuthChallenge(
    args: RespondToAuthChallengeInput,
    cb: (err: any, data?: RespondToAuthChallengeOutput) => void
  ): void;
  public respondToAuthChallenge(
    args: RespondToAuthChallengeInput,
    cb?: (err: any, data?: RespondToAuthChallengeOutput) => void
  ): Promise<RespondToAuthChallengeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RespondToAuthChallengeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To enable Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p> <p>See .</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserPoolAddOnNotEnabledException} <p>This exception is thrown when user pool add-ons are not enabled.</p>
   *   - {CodeDeliveryFailureException} <p>This exception is thrown when a verification code fails to deliver successfully.</p>
   *   - {InvalidEmailRoleAccessPolicyException} <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setRiskConfiguration(
    args: SetRiskConfigurationInput
  ): Promise<SetRiskConfigurationOutput>;
  public setRiskConfiguration(
    args: SetRiskConfigurationInput,
    cb: (err: any, data?: SetRiskConfigurationOutput) => void
  ): void;
  public setRiskConfiguration(
    args: SetRiskConfigurationInput,
    cb?: (err: any, data?: SetRiskConfigurationOutput) => void
  ): Promise<SetRiskConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetRiskConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the UI customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration will be used for every client that has no UI customization set previously. If you specify UI customization settings for a particular client, it will no longer fall back to the <code>ALL</code> configuration. </p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setUICustomization(
    args: SetUICustomizationInput
  ): Promise<SetUICustomizationOutput>;
  public setUICustomization(
    args: SetUICustomizationInput,
    cb: (err: any, data?: SetUICustomizationOutput) => void
  ): void;
  public setUICustomization(
    args: SetUICustomizationInput,
    cb?: (err: any, data?: SetUICustomizationOutput) => void
  ): Promise<SetUICustomizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetUICustomizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Set the user's multi-factor authentication (MFA) method preference.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setUserMFAPreference(
    args: SetUserMFAPreferenceInput
  ): Promise<SetUserMFAPreferenceOutput>;
  public setUserMFAPreference(
    args: SetUserMFAPreferenceInput,
    cb: (err: any, data?: SetUserMFAPreferenceOutput) => void
  ): void;
  public setUserMFAPreference(
    args: SetUserMFAPreferenceInput,
    cb?: (err: any, data?: SetUserMFAPreferenceOutput) => void
  ): Promise<SetUserMFAPreferenceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetUserMFAPreferenceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Set the user pool MFA configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigInput
  ): Promise<SetUserPoolMfaConfigOutput>;
  public setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigInput,
    cb: (err: any, data?: SetUserPoolMfaConfigOutput) => void
  ): void;
  public setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigInput,
    cb?: (err: any, data?: SetUserPoolMfaConfigOutput) => void
  ): Promise<SetUserPoolMfaConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetUserPoolMfaConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the user settings like multi-factor authentication (MFA). If MFA is to be removed for a particular attribute pass the attribute with code delivery as null. If null list is passed, all MFA options are removed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setUserSettings(
    args: SetUserSettingsInput
  ): Promise<SetUserSettingsOutput>;
  public setUserSettings(
    args: SetUserSettingsInput,
    cb: (err: any, data?: SetUserSettingsOutput) => void
  ): void;
  public setUserSettings(
    args: SetUserSettingsInput,
    cb?: (err: any, data?: SetUserSettingsOutput) => void
  ): Promise<SetUserSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetUserSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers the user in the specified user pool and creates a user name, password, and user attributes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InvalidPasswordException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid password.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {UsernameExistsException} <p>This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {InvalidEmailRoleAccessPolicyException} <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
   *   - {CodeDeliveryFailureException} <p>This exception is thrown when a verification code fails to deliver successfully.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public signUp(args: SignUpInput): Promise<SignUpOutput>;
  public signUp(
    args: SignUpInput,
    cb: (err: any, data?: SignUpOutput) => void
  ): void;
  public signUp(
    args: SignUpInput,
    cb?: (err: any, data?: SignUpOutput) => void
  ): Promise<SignUpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SignUpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the user import.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {PreconditionNotMetException} <p>This exception is thrown when a precondition is not met.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startUserImportJob(
    args: StartUserImportJobInput
  ): Promise<StartUserImportJobOutput>;
  public startUserImportJob(
    args: StartUserImportJobInput,
    cb: (err: any, data?: StartUserImportJobOutput) => void
  ): void;
  public startUserImportJob(
    args: StartUserImportJobInput,
    cb?: (err: any, data?: StartUserImportJobOutput) => void
  ): Promise<StartUserImportJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartUserImportJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops the user import job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {PreconditionNotMetException} <p>This exception is thrown when a precondition is not met.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopUserImportJob(
    args: StopUserImportJobInput
  ): Promise<StopUserImportJobOutput>;
  public stopUserImportJob(
    args: StopUserImportJobInput,
    cb: (err: any, data?: StopUserImportJobOutput) => void
  ): void;
  public stopUserImportJob(
    args: StopUserImportJobInput,
    cb?: (err: any, data?: StopUserImportJobOutput) => void
  ): Promise<StopUserImportJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopUserImportJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an IAM policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides the feedback for an authentication event whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserPoolAddOnNotEnabledException} <p>This exception is thrown when user pool add-ons are not enabled.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackInput
  ): Promise<UpdateAuthEventFeedbackOutput>;
  public updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackInput,
    cb: (err: any, data?: UpdateAuthEventFeedbackOutput) => void
  ): void;
  public updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackInput,
    cb?: (err: any, data?: UpdateAuthEventFeedbackOutput) => void
  ): Promise<UpdateAuthEventFeedbackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAuthEventFeedbackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the device status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDeviceStatus(
    args: UpdateDeviceStatusInput
  ): Promise<UpdateDeviceStatusOutput>;
  public updateDeviceStatus(
    args: UpdateDeviceStatusInput,
    cb: (err: any, data?: UpdateDeviceStatusOutput) => void
  ): void;
  public updateDeviceStatus(
    args: UpdateDeviceStatusInput,
    cb?: (err: any, data?: UpdateDeviceStatusOutput) => void
  ): Promise<UpdateDeviceStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDeviceStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified group with the specified attributes.</p> <p>Requires developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGroup(args: UpdateGroupInput): Promise<UpdateGroupOutput>;
  public updateGroup(
    args: UpdateGroupInput,
    cb: (err: any, data?: UpdateGroupOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupInput,
    cb?: (err: any, data?: UpdateGroupOutput) => void
  ): Promise<UpdateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates identity provider information for a user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {UnsupportedIdentityProviderException} <p>This exception is thrown when the specified identifier is not supported.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateIdentityProvider(
    args: UpdateIdentityProviderInput
  ): Promise<UpdateIdentityProviderOutput>;
  public updateIdentityProvider(
    args: UpdateIdentityProviderInput,
    cb: (err: any, data?: UpdateIdentityProviderOutput) => void
  ): void;
  public updateIdentityProvider(
    args: UpdateIdentityProviderInput,
    cb?: (err: any, data?: UpdateIdentityProviderOutput) => void
  ): Promise<UpdateIdentityProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateIdentityProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the name and scopes of resource server. All other fields are read-only.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateResourceServer(
    args: UpdateResourceServerInput
  ): Promise<UpdateResourceServerOutput>;
  public updateResourceServer(
    args: UpdateResourceServerInput,
    cb: (err: any, data?: UpdateResourceServerOutput) => void
  ): void;
  public updateResourceServer(
    args: UpdateResourceServerInput,
    cb?: (err: any, data?: UpdateResourceServerOutput) => void
  ): Promise<UpdateResourceServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateResourceServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows a user to update a specific attribute (one at a time).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {CodeMismatchException} <p>This exception is thrown if the provided code does not match what the server was expecting.</p>
   *   - {ExpiredCodeException} <p>This exception is thrown if a code has expired.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UnexpectedLambdaException} <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
   *   - {UserLambdaValidationException} <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
   *   - {InvalidLambdaResponseException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {AliasExistsException} <p>This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {InvalidEmailRoleAccessPolicyException} <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
   *   - {CodeDeliveryFailureException} <p>This exception is thrown when a verification code fails to deliver successfully.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserAttributes(
    args: UpdateUserAttributesInput
  ): Promise<UpdateUserAttributesOutput>;
  public updateUserAttributes(
    args: UpdateUserAttributesInput,
    cb: (err: any, data?: UpdateUserAttributesOutput) => void
  ): void;
  public updateUserAttributes(
    args: UpdateUserAttributesInput,
    cb?: (err: any, data?: UpdateUserAttributesOutput) => void
  ): Promise<UpdateUserAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified user pool with the specified attributes. If you don't provide a value for an attribute, it will be set to the default value. You can get a list of the current user pool settings with .</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ConcurrentModificationException} <p>This exception is thrown if two or more modifications are happening concurrently.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {UserImportInProgressException} <p>This exception is thrown when you are trying to modify a user pool while a user import job is in progress for that pool.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {InvalidSmsRoleAccessPolicyException} <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
   *   - {InvalidSmsRoleTrustRelationshipException} <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
   *   - {UserPoolTaggingException} <p>This exception is thrown when a user pool tag cannot be set or updated.</p>
   *   - {InvalidEmailRoleAccessPolicyException} <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserPool(
    args: UpdateUserPoolInput
  ): Promise<UpdateUserPoolOutput>;
  public updateUserPool(
    args: UpdateUserPoolInput,
    cb: (err: any, data?: UpdateUserPoolOutput) => void
  ): void;
  public updateUserPool(
    args: UpdateUserPoolInput,
    cb?: (err: any, data?: UpdateUserPoolOutput) => void
  ): Promise<UpdateUserPoolOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserPoolCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified user pool app client with the specified attributes. If you don't provide a value for an attribute, it will be set to the default value. You can get a list of the current user pool app client settings with .</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ConcurrentModificationException} <p>This exception is thrown if two or more modifications are happening concurrently.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {ScopeDoesNotExistException} <p>This exception is thrown when the specified scope does not exist.</p>
   *   - {InvalidOAuthFlowException} <p>This exception is thrown when the specified OAuth flow is invalid.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserPoolClient(
    args: UpdateUserPoolClientInput
  ): Promise<UpdateUserPoolClientOutput>;
  public updateUserPoolClient(
    args: UpdateUserPoolClientInput,
    cb: (err: any, data?: UpdateUserPoolClientOutput) => void
  ): void;
  public updateUserPoolClient(
    args: UpdateUserPoolClientInput,
    cb?: (err: any, data?: UpdateUserPoolClientOutput) => void
  ): Promise<UpdateUserPoolClientOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserPoolClientCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You cannot use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with AWS Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the AWS Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserPoolDomain(
    args: UpdateUserPoolDomainInput
  ): Promise<UpdateUserPoolDomainOutput>;
  public updateUserPoolDomain(
    args: UpdateUserPoolDomainInput,
    cb: (err: any, data?: UpdateUserPoolDomainOutput) => void
  ): void;
  public updateUserPoolDomain(
    args: UpdateUserPoolDomainInput,
    cb?: (err: any, data?: UpdateUserPoolDomainOutput) => void
  ): Promise<UpdateUserPoolDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserPoolDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Use this API to register a user's entered TOTP code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidUserPoolConfigurationException} <p>This exception is thrown when the user pool configuration is invalid.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {EnableSoftwareTokenMFAException} <p>This exception is thrown when there is a code mismatch and the service fails to configure the software token TOTP multi-factor authentication (MFA).</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {SoftwareTokenMFANotFoundException} <p>This exception is thrown when the software token TOTP multi-factor authentication (MFA) is not enabled for the user pool.</p>
   *   - {CodeMismatchException} <p>This exception is thrown if the provided code does not match what the server was expecting.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public verifySoftwareToken(
    args: VerifySoftwareTokenInput
  ): Promise<VerifySoftwareTokenOutput>;
  public verifySoftwareToken(
    args: VerifySoftwareTokenInput,
    cb: (err: any, data?: VerifySoftwareTokenOutput) => void
  ): void;
  public verifySoftwareToken(
    args: VerifySoftwareTokenInput,
    cb?: (err: any, data?: VerifySoftwareTokenOutput) => void
  ): Promise<VerifySoftwareTokenOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new VerifySoftwareTokenCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Verifies the specified user attributes in the user pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the Amazon Cognito service cannot find the requested resource.</p>
   *   - {InvalidParameterException} <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
   *   - {CodeMismatchException} <p>This exception is thrown if the provided code does not match what the server was expecting.</p>
   *   - {ExpiredCodeException} <p>This exception is thrown if a code has expired.</p>
   *   - {NotAuthorizedException} <p>This exception is thrown when a user is not authorized.</p>
   *   - {TooManyRequestsException} <p>This exception is thrown when the user has made too many requests for a given operation.</p>
   *   - {LimitExceededException} <p>This exception is thrown when a user exceeds the limit for a requested AWS resource.</p>
   *   - {PasswordResetRequiredException} <p>This exception is thrown when a password reset is required.</p>
   *   - {UserNotFoundException} <p>This exception is thrown when a user is not found.</p>
   *   - {UserNotConfirmedException} <p>This exception is thrown when a user is not confirmed successfully.</p>
   *   - {InternalErrorException} <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public verifyUserAttribute(
    args: VerifyUserAttributeInput
  ): Promise<VerifyUserAttributeOutput>;
  public verifyUserAttribute(
    args: VerifyUserAttributeInput,
    cb: (err: any, data?: VerifyUserAttributeOutput) => void
  ): void;
  public verifyUserAttribute(
    args: VerifyUserAttributeInput,
    cb?: (err: any, data?: VerifyUserAttributeOutput) => void
  ): Promise<VerifyUserAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new VerifyUserAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
