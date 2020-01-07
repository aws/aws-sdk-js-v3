import { CognitoIdentityProviderClient } from "./CognitoIdentityProviderClient";
import { AddCustomAttributesCommandInput, AddCustomAttributesCommandOutput } from "./commands/AddCustomAttributesCommand";
import { AdminAddUserToGroupCommandInput, AdminAddUserToGroupCommandOutput } from "./commands/AdminAddUserToGroupCommand";
import { AdminConfirmSignUpCommandInput, AdminConfirmSignUpCommandOutput } from "./commands/AdminConfirmSignUpCommand";
import { AdminCreateUserCommandInput, AdminCreateUserCommandOutput } from "./commands/AdminCreateUserCommand";
import { AdminDeleteUserAttributesCommandInput, AdminDeleteUserAttributesCommandOutput } from "./commands/AdminDeleteUserAttributesCommand";
import { AdminDeleteUserCommandInput, AdminDeleteUserCommandOutput } from "./commands/AdminDeleteUserCommand";
import { AdminDisableProviderForUserCommandInput, AdminDisableProviderForUserCommandOutput } from "./commands/AdminDisableProviderForUserCommand";
import { AdminDisableUserCommandInput, AdminDisableUserCommandOutput } from "./commands/AdminDisableUserCommand";
import { AdminEnableUserCommandInput, AdminEnableUserCommandOutput } from "./commands/AdminEnableUserCommand";
import { AdminForgetDeviceCommandInput, AdminForgetDeviceCommandOutput } from "./commands/AdminForgetDeviceCommand";
import { AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput } from "./commands/AdminGetDeviceCommand";
import { AdminGetUserCommandInput, AdminGetUserCommandOutput } from "./commands/AdminGetUserCommand";
import { AdminInitiateAuthCommandInput, AdminInitiateAuthCommandOutput } from "./commands/AdminInitiateAuthCommand";
import { AdminLinkProviderForUserCommandInput, AdminLinkProviderForUserCommandOutput } from "./commands/AdminLinkProviderForUserCommand";
import { AdminListDevicesCommandInput, AdminListDevicesCommandOutput } from "./commands/AdminListDevicesCommand";
import { AdminListGroupsForUserCommandInput, AdminListGroupsForUserCommandOutput } from "./commands/AdminListGroupsForUserCommand";
import { AdminListUserAuthEventsCommandInput, AdminListUserAuthEventsCommandOutput } from "./commands/AdminListUserAuthEventsCommand";
import { AdminRemoveUserFromGroupCommandInput, AdminRemoveUserFromGroupCommandOutput } from "./commands/AdminRemoveUserFromGroupCommand";
import { AdminResetUserPasswordCommandInput, AdminResetUserPasswordCommandOutput } from "./commands/AdminResetUserPasswordCommand";
import { AdminRespondToAuthChallengeCommandInput, AdminRespondToAuthChallengeCommandOutput } from "./commands/AdminRespondToAuthChallengeCommand";
import { AdminSetUserMFAPreferenceCommandInput, AdminSetUserMFAPreferenceCommandOutput } from "./commands/AdminSetUserMFAPreferenceCommand";
import { AdminSetUserPasswordCommandInput, AdminSetUserPasswordCommandOutput } from "./commands/AdminSetUserPasswordCommand";
import { AdminSetUserSettingsCommandInput, AdminSetUserSettingsCommandOutput } from "./commands/AdminSetUserSettingsCommand";
import { AdminUpdateAuthEventFeedbackCommandInput, AdminUpdateAuthEventFeedbackCommandOutput } from "./commands/AdminUpdateAuthEventFeedbackCommand";
import { AdminUpdateDeviceStatusCommandInput, AdminUpdateDeviceStatusCommandOutput } from "./commands/AdminUpdateDeviceStatusCommand";
import { AdminUpdateUserAttributesCommandInput, AdminUpdateUserAttributesCommandOutput } from "./commands/AdminUpdateUserAttributesCommand";
import { AdminUserGlobalSignOutCommandInput, AdminUserGlobalSignOutCommandOutput } from "./commands/AdminUserGlobalSignOutCommand";
import { AssociateSoftwareTokenCommandInput, AssociateSoftwareTokenCommandOutput } from "./commands/AssociateSoftwareTokenCommand";
import { ChangePasswordCommandInput, ChangePasswordCommandOutput } from "./commands/ChangePasswordCommand";
import { ConfirmDeviceCommandInput, ConfirmDeviceCommandOutput } from "./commands/ConfirmDeviceCommand";
import { ConfirmForgotPasswordCommandInput, ConfirmForgotPasswordCommandOutput } from "./commands/ConfirmForgotPasswordCommand";
import { ConfirmSignUpCommandInput, ConfirmSignUpCommandOutput } from "./commands/ConfirmSignUpCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateIdentityProviderCommandInput, CreateIdentityProviderCommandOutput } from "./commands/CreateIdentityProviderCommand";
import { CreateResourceServerCommandInput, CreateResourceServerCommandOutput } from "./commands/CreateResourceServerCommand";
import { CreateUserImportJobCommandInput, CreateUserImportJobCommandOutput } from "./commands/CreateUserImportJobCommand";
import { CreateUserPoolClientCommandInput, CreateUserPoolClientCommandOutput } from "./commands/CreateUserPoolClientCommand";
import { CreateUserPoolCommandInput, CreateUserPoolCommandOutput } from "./commands/CreateUserPoolCommand";
import { CreateUserPoolDomainCommandInput, CreateUserPoolDomainCommandOutput } from "./commands/CreateUserPoolDomainCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteIdentityProviderCommandInput, DeleteIdentityProviderCommandOutput } from "./commands/DeleteIdentityProviderCommand";
import { DeleteResourceServerCommandInput, DeleteResourceServerCommandOutput } from "./commands/DeleteResourceServerCommand";
import { DeleteUserAttributesCommandInput, DeleteUserAttributesCommandOutput } from "./commands/DeleteUserAttributesCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DeleteUserPoolClientCommandInput, DeleteUserPoolClientCommandOutput } from "./commands/DeleteUserPoolClientCommand";
import { DeleteUserPoolCommandInput, DeleteUserPoolCommandOutput } from "./commands/DeleteUserPoolCommand";
import { DeleteUserPoolDomainCommandInput, DeleteUserPoolDomainCommandOutput } from "./commands/DeleteUserPoolDomainCommand";
import { DescribeIdentityProviderCommandInput, DescribeIdentityProviderCommandOutput } from "./commands/DescribeIdentityProviderCommand";
import { DescribeResourceServerCommandInput, DescribeResourceServerCommandOutput } from "./commands/DescribeResourceServerCommand";
import { DescribeRiskConfigurationCommandInput, DescribeRiskConfigurationCommandOutput } from "./commands/DescribeRiskConfigurationCommand";
import { DescribeUserImportJobCommandInput, DescribeUserImportJobCommandOutput } from "./commands/DescribeUserImportJobCommand";
import { DescribeUserPoolClientCommandInput, DescribeUserPoolClientCommandOutput } from "./commands/DescribeUserPoolClientCommand";
import { DescribeUserPoolCommandInput, DescribeUserPoolCommandOutput } from "./commands/DescribeUserPoolCommand";
import { DescribeUserPoolDomainCommandInput, DescribeUserPoolDomainCommandOutput } from "./commands/DescribeUserPoolDomainCommand";
import { ForgetDeviceCommandInput, ForgetDeviceCommandOutput } from "./commands/ForgetDeviceCommand";
import { ForgotPasswordCommandInput, ForgotPasswordCommandOutput } from "./commands/ForgotPasswordCommand";
import { GetCSVHeaderCommandInput, GetCSVHeaderCommandOutput } from "./commands/GetCSVHeaderCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetIdentityProviderByIdentifierCommandInput, GetIdentityProviderByIdentifierCommandOutput } from "./commands/GetIdentityProviderByIdentifierCommand";
import { GetSigningCertificateCommandInput, GetSigningCertificateCommandOutput } from "./commands/GetSigningCertificateCommand";
import { GetUICustomizationCommandInput, GetUICustomizationCommandOutput } from "./commands/GetUICustomizationCommand";
import { GetUserAttributeVerificationCodeCommandInput, GetUserAttributeVerificationCodeCommandOutput } from "./commands/GetUserAttributeVerificationCodeCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import { GetUserPoolMfaConfigCommandInput, GetUserPoolMfaConfigCommandOutput } from "./commands/GetUserPoolMfaConfigCommand";
import { GlobalSignOutCommandInput, GlobalSignOutCommandOutput } from "./commands/GlobalSignOutCommand";
import { InitiateAuthCommandInput, InitiateAuthCommandOutput } from "./commands/InitiateAuthCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListIdentityProvidersCommandInput, ListIdentityProvidersCommandOutput } from "./commands/ListIdentityProvidersCommand";
import { ListResourceServersCommandInput, ListResourceServersCommandOutput } from "./commands/ListResourceServersCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListUserImportJobsCommandInput, ListUserImportJobsCommandOutput } from "./commands/ListUserImportJobsCommand";
import { ListUserPoolClientsCommandInput, ListUserPoolClientsCommandOutput } from "./commands/ListUserPoolClientsCommand";
import { ListUserPoolsCommandInput, ListUserPoolsCommandOutput } from "./commands/ListUserPoolsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { ListUsersInGroupCommandInput, ListUsersInGroupCommandOutput } from "./commands/ListUsersInGroupCommand";
import { ResendConfirmationCodeCommandInput, ResendConfirmationCodeCommandOutput } from "./commands/ResendConfirmationCodeCommand";
import { RespondToAuthChallengeCommandInput, RespondToAuthChallengeCommandOutput } from "./commands/RespondToAuthChallengeCommand";
import { SetRiskConfigurationCommandInput, SetRiskConfigurationCommandOutput } from "./commands/SetRiskConfigurationCommand";
import { SetUICustomizationCommandInput, SetUICustomizationCommandOutput } from "./commands/SetUICustomizationCommand";
import { SetUserMFAPreferenceCommandInput, SetUserMFAPreferenceCommandOutput } from "./commands/SetUserMFAPreferenceCommand";
import { SetUserPoolMfaConfigCommandInput, SetUserPoolMfaConfigCommandOutput } from "./commands/SetUserPoolMfaConfigCommand";
import { SetUserSettingsCommandInput, SetUserSettingsCommandOutput } from "./commands/SetUserSettingsCommand";
import { SignUpCommandInput, SignUpCommandOutput } from "./commands/SignUpCommand";
import { StartUserImportJobCommandInput, StartUserImportJobCommandOutput } from "./commands/StartUserImportJobCommand";
import { StopUserImportJobCommandInput, StopUserImportJobCommandOutput } from "./commands/StopUserImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAuthEventFeedbackCommandInput, UpdateAuthEventFeedbackCommandOutput } from "./commands/UpdateAuthEventFeedbackCommand";
import { UpdateDeviceStatusCommandInput, UpdateDeviceStatusCommandOutput } from "./commands/UpdateDeviceStatusCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateIdentityProviderCommandInput, UpdateIdentityProviderCommandOutput } from "./commands/UpdateIdentityProviderCommand";
import { UpdateResourceServerCommandInput, UpdateResourceServerCommandOutput } from "./commands/UpdateResourceServerCommand";
import { UpdateUserAttributesCommandInput, UpdateUserAttributesCommandOutput } from "./commands/UpdateUserAttributesCommand";
import { UpdateUserPoolClientCommandInput, UpdateUserPoolClientCommandOutput } from "./commands/UpdateUserPoolClientCommand";
import { UpdateUserPoolCommandInput, UpdateUserPoolCommandOutput } from "./commands/UpdateUserPoolCommand";
import { UpdateUserPoolDomainCommandInput, UpdateUserPoolDomainCommandOutput } from "./commands/UpdateUserPoolDomainCommand";
import { VerifySoftwareTokenCommandInput, VerifySoftwareTokenCommandOutput } from "./commands/VerifySoftwareTokenCommand";
import { VerifyUserAttributeCommandInput, VerifyUserAttributeCommandOutput } from "./commands/VerifyUserAttributeCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Using the Amazon Cognito User Pools API, you can create a user pool to manage
 *             directories and users. You can authenticate a user to obtain tokens related to user
 *             identity and access policies.</p>
 *         <p>This API reference provides information about user pools in Amazon Cognito User
 *             Pools.</p>
 *         <p>For more information, see the Amazon Cognito Documentation.</p>
 */
export declare class CognitoIdentityProvider extends CognitoIdentityProviderClient {
    /**
     * <p>Adds additional user attributes to the user pool schema.</p>
     */
    addCustomAttributes(args: AddCustomAttributesCommandInput, options?: __HttpHandlerOptions): Promise<AddCustomAttributesCommandOutput>;
    addCustomAttributes(args: AddCustomAttributesCommandInput, cb: (err: any, data?: AddCustomAttributesCommandOutput) => void): void;
    addCustomAttributes(args: AddCustomAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddCustomAttributesCommandOutput) => void): void;
    /**
     * <p>Adds the specified user to the specified group.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminAddUserToGroup(args: AdminAddUserToGroupCommandInput, options?: __HttpHandlerOptions): Promise<AdminAddUserToGroupCommandOutput>;
    adminAddUserToGroup(args: AdminAddUserToGroupCommandInput, cb: (err: any, data?: AdminAddUserToGroupCommandOutput) => void): void;
    adminAddUserToGroup(args: AdminAddUserToGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminAddUserToGroupCommandOutput) => void): void;
    /**
     * <p>Confirms user registration as an admin without using a confirmation code. Works on
     *             any user.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminConfirmSignUp(args: AdminConfirmSignUpCommandInput, options?: __HttpHandlerOptions): Promise<AdminConfirmSignUpCommandOutput>;
    adminConfirmSignUp(args: AdminConfirmSignUpCommandInput, cb: (err: any, data?: AdminConfirmSignUpCommandOutput) => void): void;
    adminConfirmSignUp(args: AdminConfirmSignUpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminConfirmSignUpCommandOutput) => void): void;
    /**
     * <p>Creates a new user in the specified user pool.</p>
     *         <p>If <code>MessageAction</code> is not set, the default is to send a welcome message via
     *             email or phone (SMS).</p>
     *         <note>
     *             <p>This message is based on a template that you configured in your call to  or . This
     *                 template includes your custom sign-up instructions and placeholders for user name
     *                 and temporary password.</p>
     *         </note>
     *         <p>Alternatively, you can call AdminCreateUser with “SUPPRESS” for the
     *                 <code>MessageAction</code> parameter, and Amazon Cognito will not send any email. </p>
     *         <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until
     *             they sign in and change their password.</p>
     *         <p>AdminCreateUser requires developer credentials.</p>
     */
    adminCreateUser(args: AdminCreateUserCommandInput, options?: __HttpHandlerOptions): Promise<AdminCreateUserCommandOutput>;
    adminCreateUser(args: AdminCreateUserCommandInput, cb: (err: any, data?: AdminCreateUserCommandOutput) => void): void;
    adminCreateUser(args: AdminCreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminCreateUserCommandOutput) => void): void;
    /**
     * <p>Deletes a user as an administrator. Works on any user.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminDeleteUser(args: AdminDeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<AdminDeleteUserCommandOutput>;
    adminDeleteUser(args: AdminDeleteUserCommandInput, cb: (err: any, data?: AdminDeleteUserCommandOutput) => void): void;
    adminDeleteUser(args: AdminDeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminDeleteUserCommandOutput) => void): void;
    /**
     * <p>Deletes the user attributes in a user pool as an administrator. Works on any
     *             user.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminDeleteUserAttributes(args: AdminDeleteUserAttributesCommandInput, options?: __HttpHandlerOptions): Promise<AdminDeleteUserAttributesCommandOutput>;
    adminDeleteUserAttributes(args: AdminDeleteUserAttributesCommandInput, cb: (err: any, data?: AdminDeleteUserAttributesCommandOutput) => void): void;
    adminDeleteUserAttributes(args: AdminDeleteUserAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminDeleteUserAttributesCommandOutput) => void): void;
    /**
     * <p>Disables the user from signing in with the specified external (SAML or social)
     *             identity provider. If the user to disable is a Cognito User Pools native username +
     *             password user, they are not permitted to use their password to sign-in. If the user to
     *             disable is a linked external IdP user, any link between that user and an existing user
     *             is removed. The next time the external user (no longer attached to the previously linked
     *                 <code>DestinationUser</code>) signs in, they must create a new user account. See
     *                 .</p>
     *         <p>This action is enabled only for admin access and requires developer
     *             credentials.</p>
     *         <p>The <code>ProviderName</code> must match the value specified when creating an IdP for
     *             the pool. </p>
     *         <p>To disable a native username + password user, the <code>ProviderName</code> value must
     *             be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be
     *                 <code>Cognito_Subject</code>, with the <code>ProviderAttributeValue</code> being the
     *             name that is used in the user pool for the user.</p>
     *         <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for
     *             social identity providers. The <code>ProviderAttributeValue</code> must always be the
     *             exact subject that was used when the user was originally linked as a source user.</p>
     *         <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has
     *             not yet been used to sign-in, the <code>ProviderAttributeName</code> and
     *                 <code>ProviderAttributeValue</code> must be the same values that were used for the
     *                 <code>SourceUser</code> when the identities were originally linked in the  call. (If the linking was done with
     *                 <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same
     *             applies here). However, if the user has already signed in, the
     *                 <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and
     *                 <code>ProviderAttributeValue</code> must be the subject of the SAML
     *             assertion.</p>
     */
    adminDisableProviderForUser(args: AdminDisableProviderForUserCommandInput, options?: __HttpHandlerOptions): Promise<AdminDisableProviderForUserCommandOutput>;
    adminDisableProviderForUser(args: AdminDisableProviderForUserCommandInput, cb: (err: any, data?: AdminDisableProviderForUserCommandOutput) => void): void;
    adminDisableProviderForUser(args: AdminDisableProviderForUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminDisableProviderForUserCommandOutput) => void): void;
    /**
     * <p>Disables the specified user.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminDisableUser(args: AdminDisableUserCommandInput, options?: __HttpHandlerOptions): Promise<AdminDisableUserCommandOutput>;
    adminDisableUser(args: AdminDisableUserCommandInput, cb: (err: any, data?: AdminDisableUserCommandOutput) => void): void;
    adminDisableUser(args: AdminDisableUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminDisableUserCommandOutput) => void): void;
    /**
     * <p>Enables the specified user as an administrator. Works on any user.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminEnableUser(args: AdminEnableUserCommandInput, options?: __HttpHandlerOptions): Promise<AdminEnableUserCommandOutput>;
    adminEnableUser(args: AdminEnableUserCommandInput, cb: (err: any, data?: AdminEnableUserCommandOutput) => void): void;
    adminEnableUser(args: AdminEnableUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminEnableUserCommandOutput) => void): void;
    /**
     * <p>Forgets the device, as an administrator.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminForgetDevice(args: AdminForgetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<AdminForgetDeviceCommandOutput>;
    adminForgetDevice(args: AdminForgetDeviceCommandInput, cb: (err: any, data?: AdminForgetDeviceCommandOutput) => void): void;
    adminForgetDevice(args: AdminForgetDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminForgetDeviceCommandOutput) => void): void;
    /**
     * <p>Gets the device, as an administrator.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminGetDevice(args: AdminGetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<AdminGetDeviceCommandOutput>;
    adminGetDevice(args: AdminGetDeviceCommandInput, cb: (err: any, data?: AdminGetDeviceCommandOutput) => void): void;
    adminGetDevice(args: AdminGetDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminGetDeviceCommandOutput) => void): void;
    /**
     * <p>Gets the specified user by user name in a user pool as an administrator. Works on any
     *             user.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminGetUser(args: AdminGetUserCommandInput, options?: __HttpHandlerOptions): Promise<AdminGetUserCommandOutput>;
    adminGetUser(args: AdminGetUserCommandInput, cb: (err: any, data?: AdminGetUserCommandOutput) => void): void;
    adminGetUser(args: AdminGetUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminGetUserCommandOutput) => void): void;
    /**
     * <p>Initiates the authentication flow, as an administrator.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminInitiateAuth(args: AdminInitiateAuthCommandInput, options?: __HttpHandlerOptions): Promise<AdminInitiateAuthCommandOutput>;
    adminInitiateAuth(args: AdminInitiateAuthCommandInput, cb: (err: any, data?: AdminInitiateAuthCommandOutput) => void): void;
    adminInitiateAuth(args: AdminInitiateAuthCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminInitiateAuthCommandOutput) => void): void;
    /**
     * <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an
     *             identity from an external identity provider (<code>SourceUser</code>) based on a
     *             specified attribute name and value from the external identity provider. This allows you
     *             to create a link from the existing user account to an external federated user identity
     *             that has not yet been used to sign in, so that the federated user identity can be used
     *             to sign in as the existing user account. </p>
     *         <p> For example, if there is an existing user with a username and password, this API
     *             links that user to a federated user identity, so that when the federated user identity
     *             is used, the user signs in as the existing user account. </p>
     *         <important>
     *             <p>Because this API allows a user with an external federated identity to sign in as
     *                 an existing user in the user pool, it is critical that it only be used with external
     *                 identity providers and provider attributes that have been trusted by the application
     *                 owner.</p>
     *         </important>
     *         <p>See also .</p>
     *         <p>This action is enabled only for admin access and requires developer
     *             credentials.</p>
     */
    adminLinkProviderForUser(args: AdminLinkProviderForUserCommandInput, options?: __HttpHandlerOptions): Promise<AdminLinkProviderForUserCommandOutput>;
    adminLinkProviderForUser(args: AdminLinkProviderForUserCommandInput, cb: (err: any, data?: AdminLinkProviderForUserCommandOutput) => void): void;
    adminLinkProviderForUser(args: AdminLinkProviderForUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminLinkProviderForUserCommandOutput) => void): void;
    /**
     * <p>Lists devices, as an administrator.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminListDevices(args: AdminListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<AdminListDevicesCommandOutput>;
    adminListDevices(args: AdminListDevicesCommandInput, cb: (err: any, data?: AdminListDevicesCommandOutput) => void): void;
    adminListDevices(args: AdminListDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminListDevicesCommandOutput) => void): void;
    /**
     * <p>Lists the groups that the user belongs to.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminListGroupsForUser(args: AdminListGroupsForUserCommandInput, options?: __HttpHandlerOptions): Promise<AdminListGroupsForUserCommandOutput>;
    adminListGroupsForUser(args: AdminListGroupsForUserCommandInput, cb: (err: any, data?: AdminListGroupsForUserCommandOutput) => void): void;
    adminListGroupsForUser(args: AdminListGroupsForUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminListGroupsForUserCommandOutput) => void): void;
    /**
     * <p>Lists a history of user activity and any risks detected as part of Amazon Cognito
     *             advanced security.</p>
     */
    adminListUserAuthEvents(args: AdminListUserAuthEventsCommandInput, options?: __HttpHandlerOptions): Promise<AdminListUserAuthEventsCommandOutput>;
    adminListUserAuthEvents(args: AdminListUserAuthEventsCommandInput, cb: (err: any, data?: AdminListUserAuthEventsCommandOutput) => void): void;
    adminListUserAuthEvents(args: AdminListUserAuthEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminListUserAuthEventsCommandOutput) => void): void;
    /**
     * <p>Removes the specified user from the specified group.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminRemoveUserFromGroup(args: AdminRemoveUserFromGroupCommandInput, options?: __HttpHandlerOptions): Promise<AdminRemoveUserFromGroupCommandOutput>;
    adminRemoveUserFromGroup(args: AdminRemoveUserFromGroupCommandInput, cb: (err: any, data?: AdminRemoveUserFromGroupCommandOutput) => void): void;
    adminRemoveUserFromGroup(args: AdminRemoveUserFromGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminRemoveUserFromGroupCommandOutput) => void): void;
    /**
     * <p>Resets the specified user's password in a user pool as an administrator. Works on any
     *             user.</p>
     *         <p>When a developer calls this API, the current password is invalidated, so it must be
     *             changed. If a user tries to sign in after the API is called, the app will get a
     *             PasswordResetRequiredException exception back and should direct the user down the flow
     *             to reset the password, which is the same as the forgot password flow. In addition, if
     *             the user pool has phone verification selected and a verified phone number exists for the
     *             user, or if email verification is selected and a verified email exists for the user,
     *             calling this API will also result in sending a message to the end user with the code to
     *             change their password.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminResetUserPassword(args: AdminResetUserPasswordCommandInput, options?: __HttpHandlerOptions): Promise<AdminResetUserPasswordCommandOutput>;
    adminResetUserPassword(args: AdminResetUserPasswordCommandInput, cb: (err: any, data?: AdminResetUserPasswordCommandOutput) => void): void;
    adminResetUserPassword(args: AdminResetUserPasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminResetUserPasswordCommandOutput) => void): void;
    /**
     * <p>Responds to an authentication challenge, as an administrator.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminRespondToAuthChallenge(args: AdminRespondToAuthChallengeCommandInput, options?: __HttpHandlerOptions): Promise<AdminRespondToAuthChallengeCommandOutput>;
    adminRespondToAuthChallenge(args: AdminRespondToAuthChallengeCommandInput, cb: (err: any, data?: AdminRespondToAuthChallengeCommandOutput) => void): void;
    adminRespondToAuthChallenge(args: AdminRespondToAuthChallengeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminRespondToAuthChallengeCommandOutput) => void): void;
    /**
     * <p>Sets the user's multi-factor authentication (MFA) preference, including which MFA options are enabled and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are enabled. If multiple options are enabled and no preference is set, a challenge to choose an MFA option will be returned during sign in.</p>
     */
    adminSetUserMFAPreference(args: AdminSetUserMFAPreferenceCommandInput, options?: __HttpHandlerOptions): Promise<AdminSetUserMFAPreferenceCommandOutput>;
    adminSetUserMFAPreference(args: AdminSetUserMFAPreferenceCommandInput, cb: (err: any, data?: AdminSetUserMFAPreferenceCommandOutput) => void): void;
    adminSetUserMFAPreference(args: AdminSetUserMFAPreferenceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminSetUserMFAPreferenceCommandOutput) => void): void;
    /**
     * <p>Sets the specified user's password in a user pool as an administrator. Works on any
     *             user. </p>
     *         <p>The password can be temporary or permanent. If it is temporary, the user status will
     *             be placed into the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to
     *             sign in, the InitiateAuth/AdminInitiateAuth response will contain the
     *                 <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user does not sign in before it
     *             expires, the user will not be able to sign in and their password will need to be reset
     *             by an administrator. </p>
     *         <p>Once the user has set a new password, or the password is permanent, the user status
     *             will be set to <code>Confirmed</code>.</p>
     */
    adminSetUserPassword(args: AdminSetUserPasswordCommandInput, options?: __HttpHandlerOptions): Promise<AdminSetUserPasswordCommandOutput>;
    adminSetUserPassword(args: AdminSetUserPasswordCommandInput, cb: (err: any, data?: AdminSetUserPasswordCommandOutput) => void): void;
    adminSetUserPassword(args: AdminSetUserPasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminSetUserPasswordCommandOutput) => void): void;
    /**
     * <p>
     *             <i>This action is no longer supported.</i> You can use it to configure
     *             only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either
     *             type of MFA, use the <a>AdminSetUserMFAPreference</a> action instead.</p>
     */
    adminSetUserSettings(args: AdminSetUserSettingsCommandInput, options?: __HttpHandlerOptions): Promise<AdminSetUserSettingsCommandOutput>;
    adminSetUserSettings(args: AdminSetUserSettingsCommandInput, cb: (err: any, data?: AdminSetUserSettingsCommandOutput) => void): void;
    adminSetUserSettings(args: AdminSetUserSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminSetUserSettingsCommandOutput) => void): void;
    /**
     * <p>Provides feedback for an authentication event as to whether it was from a valid user.
     *             This feedback is used for improving the risk evaluation decision for the user pool as
     *             part of Amazon Cognito advanced security.</p>
     */
    adminUpdateAuthEventFeedback(args: AdminUpdateAuthEventFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<AdminUpdateAuthEventFeedbackCommandOutput>;
    adminUpdateAuthEventFeedback(args: AdminUpdateAuthEventFeedbackCommandInput, cb: (err: any, data?: AdminUpdateAuthEventFeedbackCommandOutput) => void): void;
    adminUpdateAuthEventFeedback(args: AdminUpdateAuthEventFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminUpdateAuthEventFeedbackCommandOutput) => void): void;
    /**
     * <p>Updates the device status as an administrator.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminUpdateDeviceStatus(args: AdminUpdateDeviceStatusCommandInput, options?: __HttpHandlerOptions): Promise<AdminUpdateDeviceStatusCommandOutput>;
    adminUpdateDeviceStatus(args: AdminUpdateDeviceStatusCommandInput, cb: (err: any, data?: AdminUpdateDeviceStatusCommandOutput) => void): void;
    adminUpdateDeviceStatus(args: AdminUpdateDeviceStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminUpdateDeviceStatusCommandOutput) => void): void;
    /**
     * <p>Updates the specified user's attributes, including developer attributes, as an
     *             administrator. Works on any user.</p>
     *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
     *             attribute name.</p>
     *         <p>In addition to updating user attributes, this API can also be used to mark phone
     *             and email as verified.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminUpdateUserAttributes(args: AdminUpdateUserAttributesCommandInput, options?: __HttpHandlerOptions): Promise<AdminUpdateUserAttributesCommandOutput>;
    adminUpdateUserAttributes(args: AdminUpdateUserAttributesCommandInput, cb: (err: any, data?: AdminUpdateUserAttributesCommandOutput) => void): void;
    adminUpdateUserAttributes(args: AdminUpdateUserAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminUpdateUserAttributesCommandOutput) => void): void;
    /**
     * <p>Signs out users from all devices, as an administrator. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    adminUserGlobalSignOut(args: AdminUserGlobalSignOutCommandInput, options?: __HttpHandlerOptions): Promise<AdminUserGlobalSignOutCommandOutput>;
    adminUserGlobalSignOut(args: AdminUserGlobalSignOutCommandInput, cb: (err: any, data?: AdminUserGlobalSignOutCommandOutput) => void): void;
    adminUserGlobalSignOut(args: AdminUserGlobalSignOutCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdminUserGlobalSignOutCommandOutput) => void): void;
    /**
     * <p>Returns a unique generated shared secret key code for the user account. The request
     *             takes an access token or a session string, but not both.</p>
     */
    associateSoftwareToken(args: AssociateSoftwareTokenCommandInput, options?: __HttpHandlerOptions): Promise<AssociateSoftwareTokenCommandOutput>;
    associateSoftwareToken(args: AssociateSoftwareTokenCommandInput, cb: (err: any, data?: AssociateSoftwareTokenCommandOutput) => void): void;
    associateSoftwareToken(args: AssociateSoftwareTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateSoftwareTokenCommandOutput) => void): void;
    /**
     * <p>Changes the password for a specified user in a user pool.</p>
     */
    changePassword(args: ChangePasswordCommandInput, options?: __HttpHandlerOptions): Promise<ChangePasswordCommandOutput>;
    changePassword(args: ChangePasswordCommandInput, cb: (err: any, data?: ChangePasswordCommandOutput) => void): void;
    changePassword(args: ChangePasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ChangePasswordCommandOutput) => void): void;
    /**
     * <p>Confirms tracking of the device. This API call is the call that begins device
     *             tracking.</p>
     */
    confirmDevice(args: ConfirmDeviceCommandInput, options?: __HttpHandlerOptions): Promise<ConfirmDeviceCommandOutput>;
    confirmDevice(args: ConfirmDeviceCommandInput, cb: (err: any, data?: ConfirmDeviceCommandOutput) => void): void;
    confirmDevice(args: ConfirmDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfirmDeviceCommandOutput) => void): void;
    /**
     * <p>Allows a user to enter a confirmation code to reset a forgotten password.</p>
     */
    confirmForgotPassword(args: ConfirmForgotPasswordCommandInput, options?: __HttpHandlerOptions): Promise<ConfirmForgotPasswordCommandOutput>;
    confirmForgotPassword(args: ConfirmForgotPasswordCommandInput, cb: (err: any, data?: ConfirmForgotPasswordCommandOutput) => void): void;
    confirmForgotPassword(args: ConfirmForgotPasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfirmForgotPasswordCommandOutput) => void): void;
    /**
     * <p>Confirms registration of a user and handles the existing alias from a previous
     *             user.</p>
     */
    confirmSignUp(args: ConfirmSignUpCommandInput, options?: __HttpHandlerOptions): Promise<ConfirmSignUpCommandOutput>;
    confirmSignUp(args: ConfirmSignUpCommandInput, cb: (err: any, data?: ConfirmSignUpCommandOutput) => void): void;
    confirmSignUp(args: ConfirmSignUpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfirmSignUpCommandOutput) => void): void;
    /**
     * <p>Creates a new group in the specified user pool.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
    createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    createGroup(args: CreateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    /**
     * <p>Creates an identity provider for a user pool.</p>
     */
    createIdentityProvider(args: CreateIdentityProviderCommandInput, options?: __HttpHandlerOptions): Promise<CreateIdentityProviderCommandOutput>;
    createIdentityProvider(args: CreateIdentityProviderCommandInput, cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void): void;
    createIdentityProvider(args: CreateIdentityProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void): void;
    /**
     * <p>Creates a new OAuth2.0 resource server and defines custom scopes in it.</p>
     */
    createResourceServer(args: CreateResourceServerCommandInput, options?: __HttpHandlerOptions): Promise<CreateResourceServerCommandOutput>;
    createResourceServer(args: CreateResourceServerCommandInput, cb: (err: any, data?: CreateResourceServerCommandOutput) => void): void;
    createResourceServer(args: CreateResourceServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResourceServerCommandOutput) => void): void;
    /**
     * <p>Creates the user import job.</p>
     */
    createUserImportJob(args: CreateUserImportJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserImportJobCommandOutput>;
    createUserImportJob(args: CreateUserImportJobCommandInput, cb: (err: any, data?: CreateUserImportJobCommandOutput) => void): void;
    createUserImportJob(args: CreateUserImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserImportJobCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon Cognito user pool and sets the password policy for the
     *             pool.</p>
     */
    createUserPool(args: CreateUserPoolCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserPoolCommandOutput>;
    createUserPool(args: CreateUserPoolCommandInput, cb: (err: any, data?: CreateUserPoolCommandOutput) => void): void;
    createUserPool(args: CreateUserPoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserPoolCommandOutput) => void): void;
    /**
     * <p>Creates the user pool client.</p>
     */
    createUserPoolClient(args: CreateUserPoolClientCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserPoolClientCommandOutput>;
    createUserPoolClient(args: CreateUserPoolClientCommandInput, cb: (err: any, data?: CreateUserPoolClientCommandOutput) => void): void;
    createUserPoolClient(args: CreateUserPoolClientCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserPoolClientCommandOutput) => void): void;
    /**
     * <p>Creates a new domain for a user pool.</p>
     */
    createUserPoolDomain(args: CreateUserPoolDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserPoolDomainCommandOutput>;
    createUserPoolDomain(args: CreateUserPoolDomainCommandInput, cb: (err: any, data?: CreateUserPoolDomainCommandOutput) => void): void;
    createUserPoolDomain(args: CreateUserPoolDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserPoolDomainCommandOutput) => void): void;
    /**
     * <p>Deletes a group. Currently only groups with no members can be deleted.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
    deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    deleteGroup(args: DeleteGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    /**
     * <p>Deletes an identity provider for a user pool.</p>
     */
    deleteIdentityProvider(args: DeleteIdentityProviderCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIdentityProviderCommandOutput>;
    deleteIdentityProvider(args: DeleteIdentityProviderCommandInput, cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void): void;
    deleteIdentityProvider(args: DeleteIdentityProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void): void;
    /**
     * <p>Deletes a resource server.</p>
     */
    deleteResourceServer(args: DeleteResourceServerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourceServerCommandOutput>;
    deleteResourceServer(args: DeleteResourceServerCommandInput, cb: (err: any, data?: DeleteResourceServerCommandOutput) => void): void;
    deleteResourceServer(args: DeleteResourceServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourceServerCommandOutput) => void): void;
    /**
     * <p>Allows a user to delete himself or herself.</p>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>Deletes the attributes for a user.</p>
     */
    deleteUserAttributes(args: DeleteUserAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserAttributesCommandOutput>;
    deleteUserAttributes(args: DeleteUserAttributesCommandInput, cb: (err: any, data?: DeleteUserAttributesCommandOutput) => void): void;
    deleteUserAttributes(args: DeleteUserAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserAttributesCommandOutput) => void): void;
    /**
     * <p>Deletes the specified Amazon Cognito user pool.</p>
     */
    deleteUserPool(args: DeleteUserPoolCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserPoolCommandOutput>;
    deleteUserPool(args: DeleteUserPoolCommandInput, cb: (err: any, data?: DeleteUserPoolCommandOutput) => void): void;
    deleteUserPool(args: DeleteUserPoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserPoolCommandOutput) => void): void;
    /**
     * <p>Allows the developer to delete the user pool client.</p>
     */
    deleteUserPoolClient(args: DeleteUserPoolClientCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserPoolClientCommandOutput>;
    deleteUserPoolClient(args: DeleteUserPoolClientCommandInput, cb: (err: any, data?: DeleteUserPoolClientCommandOutput) => void): void;
    deleteUserPoolClient(args: DeleteUserPoolClientCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserPoolClientCommandOutput) => void): void;
    /**
     * <p>Deletes a domain for a user pool.</p>
     */
    deleteUserPoolDomain(args: DeleteUserPoolDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserPoolDomainCommandOutput>;
    deleteUserPoolDomain(args: DeleteUserPoolDomainCommandInput, cb: (err: any, data?: DeleteUserPoolDomainCommandOutput) => void): void;
    deleteUserPoolDomain(args: DeleteUserPoolDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserPoolDomainCommandOutput) => void): void;
    /**
     * <p>Gets information about a specific identity provider.</p>
     */
    describeIdentityProvider(args: DescribeIdentityProviderCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIdentityProviderCommandOutput>;
    describeIdentityProvider(args: DescribeIdentityProviderCommandInput, cb: (err: any, data?: DescribeIdentityProviderCommandOutput) => void): void;
    describeIdentityProvider(args: DescribeIdentityProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIdentityProviderCommandOutput) => void): void;
    /**
     * <p>Describes a resource server.</p>
     */
    describeResourceServer(args: DescribeResourceServerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResourceServerCommandOutput>;
    describeResourceServer(args: DescribeResourceServerCommandInput, cb: (err: any, data?: DescribeResourceServerCommandOutput) => void): void;
    describeResourceServer(args: DescribeResourceServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResourceServerCommandOutput) => void): void;
    /**
     * <p>Describes the risk configuration.</p>
     */
    describeRiskConfiguration(args: DescribeRiskConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRiskConfigurationCommandOutput>;
    describeRiskConfiguration(args: DescribeRiskConfigurationCommandInput, cb: (err: any, data?: DescribeRiskConfigurationCommandOutput) => void): void;
    describeRiskConfiguration(args: DescribeRiskConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRiskConfigurationCommandOutput) => void): void;
    /**
     * <p>Describes the user import job.</p>
     */
    describeUserImportJob(args: DescribeUserImportJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserImportJobCommandOutput>;
    describeUserImportJob(args: DescribeUserImportJobCommandInput, cb: (err: any, data?: DescribeUserImportJobCommandOutput) => void): void;
    describeUserImportJob(args: DescribeUserImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserImportJobCommandOutput) => void): void;
    /**
     * <p>Returns the configuration information and metadata of the specified user pool.</p>
     */
    describeUserPool(args: DescribeUserPoolCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserPoolCommandOutput>;
    describeUserPool(args: DescribeUserPoolCommandInput, cb: (err: any, data?: DescribeUserPoolCommandOutput) => void): void;
    describeUserPool(args: DescribeUserPoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserPoolCommandOutput) => void): void;
    /**
     * <p>Client method for returning the configuration information and metadata of the
     *             specified user pool app client.</p>
     */
    describeUserPoolClient(args: DescribeUserPoolClientCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserPoolClientCommandOutput>;
    describeUserPoolClient(args: DescribeUserPoolClientCommandInput, cb: (err: any, data?: DescribeUserPoolClientCommandOutput) => void): void;
    describeUserPoolClient(args: DescribeUserPoolClientCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserPoolClientCommandOutput) => void): void;
    /**
     * <p>Gets information about a domain.</p>
     */
    describeUserPoolDomain(args: DescribeUserPoolDomainCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserPoolDomainCommandOutput>;
    describeUserPoolDomain(args: DescribeUserPoolDomainCommandInput, cb: (err: any, data?: DescribeUserPoolDomainCommandOutput) => void): void;
    describeUserPoolDomain(args: DescribeUserPoolDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserPoolDomainCommandOutput) => void): void;
    /**
     * <p>Forgets the specified device.</p>
     */
    forgetDevice(args: ForgetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<ForgetDeviceCommandOutput>;
    forgetDevice(args: ForgetDeviceCommandInput, cb: (err: any, data?: ForgetDeviceCommandOutput) => void): void;
    forgetDevice(args: ForgetDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ForgetDeviceCommandOutput) => void): void;
    /**
     * <p>Calling this API causes a message to be sent to the end user with a confirmation code
     *             that is required to change the user's password. For the <code>Username</code> parameter,
     *             you can use the username or user alias. If a verified phone number exists for the user,
     *             the confirmation code is sent to the phone number. Otherwise, if a verified email
     *             exists, the confirmation code is sent to the email. If neither a verified phone number
     *             nor a verified email exists, <code>InvalidParameterException</code> is thrown. To use
     *             the confirmation code for resetting the password, call .</p>
     */
    forgotPassword(args: ForgotPasswordCommandInput, options?: __HttpHandlerOptions): Promise<ForgotPasswordCommandOutput>;
    forgotPassword(args: ForgotPasswordCommandInput, cb: (err: any, data?: ForgotPasswordCommandOutput) => void): void;
    forgotPassword(args: ForgotPasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ForgotPasswordCommandOutput) => void): void;
    /**
     * <p>Gets the header information for the .csv file to be used as input for the user import
     *             job.</p>
     */
    getCSVHeader(args: GetCSVHeaderCommandInput, options?: __HttpHandlerOptions): Promise<GetCSVHeaderCommandOutput>;
    getCSVHeader(args: GetCSVHeaderCommandInput, cb: (err: any, data?: GetCSVHeaderCommandOutput) => void): void;
    getCSVHeader(args: GetCSVHeaderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCSVHeaderCommandOutput) => void): void;
    /**
     * <p>Gets the device.</p>
     */
    getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
    getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
    getDevice(args: GetDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
    /**
     * <p>Gets a group.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
    getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
    getGroup(args: GetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
    /**
     * <p>Gets the specified identity provider.</p>
     */
    getIdentityProviderByIdentifier(args: GetIdentityProviderByIdentifierCommandInput, options?: __HttpHandlerOptions): Promise<GetIdentityProviderByIdentifierCommandOutput>;
    getIdentityProviderByIdentifier(args: GetIdentityProviderByIdentifierCommandInput, cb: (err: any, data?: GetIdentityProviderByIdentifierCommandOutput) => void): void;
    getIdentityProviderByIdentifier(args: GetIdentityProviderByIdentifierCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIdentityProviderByIdentifierCommandOutput) => void): void;
    /**
     * <p>This method takes a user pool ID, and returns the signing certificate.</p>
     */
    getSigningCertificate(args: GetSigningCertificateCommandInput, options?: __HttpHandlerOptions): Promise<GetSigningCertificateCommandOutput>;
    getSigningCertificate(args: GetSigningCertificateCommandInput, cb: (err: any, data?: GetSigningCertificateCommandOutput) => void): void;
    getSigningCertificate(args: GetSigningCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSigningCertificateCommandOutput) => void): void;
    /**
     * <p>Gets the UI Customization information for a particular app client's app UI, if there
     *             is something set. If nothing is set for the particular client, but there is an existing
     *             pool level customization (app <code>clientId</code> will be <code>ALL</code>), then that
     *             is returned. If nothing is present, then an empty shape is returned.</p>
     */
    getUICustomization(args: GetUICustomizationCommandInput, options?: __HttpHandlerOptions): Promise<GetUICustomizationCommandOutput>;
    getUICustomization(args: GetUICustomizationCommandInput, cb: (err: any, data?: GetUICustomizationCommandOutput) => void): void;
    getUICustomization(args: GetUICustomizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUICustomizationCommandOutput) => void): void;
    /**
     * <p>Gets the user attributes and metadata for a user.</p>
     */
    getUser(args: GetUserCommandInput, options?: __HttpHandlerOptions): Promise<GetUserCommandOutput>;
    getUser(args: GetUserCommandInput, cb: (err: any, data?: GetUserCommandOutput) => void): void;
    getUser(args: GetUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUserCommandOutput) => void): void;
    /**
     * <p>Gets the user attribute verification code for the specified attribute name.</p>
     */
    getUserAttributeVerificationCode(args: GetUserAttributeVerificationCodeCommandInput, options?: __HttpHandlerOptions): Promise<GetUserAttributeVerificationCodeCommandOutput>;
    getUserAttributeVerificationCode(args: GetUserAttributeVerificationCodeCommandInput, cb: (err: any, data?: GetUserAttributeVerificationCodeCommandOutput) => void): void;
    getUserAttributeVerificationCode(args: GetUserAttributeVerificationCodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUserAttributeVerificationCodeCommandOutput) => void): void;
    /**
     * <p>Gets the user pool multi-factor authentication (MFA) configuration.</p>
     */
    getUserPoolMfaConfig(args: GetUserPoolMfaConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetUserPoolMfaConfigCommandOutput>;
    getUserPoolMfaConfig(args: GetUserPoolMfaConfigCommandInput, cb: (err: any, data?: GetUserPoolMfaConfigCommandOutput) => void): void;
    getUserPoolMfaConfig(args: GetUserPoolMfaConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUserPoolMfaConfigCommandOutput) => void): void;
    /**
     * <p>Signs out users from all devices. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued.</p>
     */
    globalSignOut(args: GlobalSignOutCommandInput, options?: __HttpHandlerOptions): Promise<GlobalSignOutCommandOutput>;
    globalSignOut(args: GlobalSignOutCommandInput, cb: (err: any, data?: GlobalSignOutCommandOutput) => void): void;
    globalSignOut(args: GlobalSignOutCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GlobalSignOutCommandOutput) => void): void;
    /**
     * <p>Initiates the authentication flow.</p>
     */
    initiateAuth(args: InitiateAuthCommandInput, options?: __HttpHandlerOptions): Promise<InitiateAuthCommandOutput>;
    initiateAuth(args: InitiateAuthCommandInput, cb: (err: any, data?: InitiateAuthCommandOutput) => void): void;
    initiateAuth(args: InitiateAuthCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InitiateAuthCommandOutput) => void): void;
    /**
     * <p>Lists the devices.</p>
     */
    listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
    listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
    listDevices(args: ListDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
    /**
     * <p>Lists the groups associated with a user pool.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
    listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    listGroups(args: ListGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    /**
     * <p>Lists information about all identity providers for a user pool.</p>
     */
    listIdentityProviders(args: ListIdentityProvidersCommandInput, options?: __HttpHandlerOptions): Promise<ListIdentityProvidersCommandOutput>;
    listIdentityProviders(args: ListIdentityProvidersCommandInput, cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void): void;
    listIdentityProviders(args: ListIdentityProvidersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void): void;
    /**
     * <p>Lists the resource servers for a user pool.</p>
     */
    listResourceServers(args: ListResourceServersCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceServersCommandOutput>;
    listResourceServers(args: ListResourceServersCommandInput, cb: (err: any, data?: ListResourceServersCommandOutput) => void): void;
    listResourceServers(args: ListResourceServersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceServersCommandOutput) => void): void;
    /**
     * <p>Lists the tags that are assigned to an Amazon Cognito user pool.</p>
     *         <p>A tag is a label that you can apply to user pools to categorize and manage them in
     *             different ways, such as by purpose, owner, environment, or other criteria.</p>
     *         <p>You can use this action up to 10 times per second, per account.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists the user import jobs.</p>
     */
    listUserImportJobs(args: ListUserImportJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListUserImportJobsCommandOutput>;
    listUserImportJobs(args: ListUserImportJobsCommandInput, cb: (err: any, data?: ListUserImportJobsCommandOutput) => void): void;
    listUserImportJobs(args: ListUserImportJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUserImportJobsCommandOutput) => void): void;
    /**
     * <p>Lists the clients that have been created for the specified user pool.</p>
     */
    listUserPoolClients(args: ListUserPoolClientsCommandInput, options?: __HttpHandlerOptions): Promise<ListUserPoolClientsCommandOutput>;
    listUserPoolClients(args: ListUserPoolClientsCommandInput, cb: (err: any, data?: ListUserPoolClientsCommandOutput) => void): void;
    listUserPoolClients(args: ListUserPoolClientsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUserPoolClientsCommandOutput) => void): void;
    /**
     * <p>Lists the user pools associated with an AWS account.</p>
     */
    listUserPools(args: ListUserPoolsCommandInput, options?: __HttpHandlerOptions): Promise<ListUserPoolsCommandOutput>;
    listUserPools(args: ListUserPoolsCommandInput, cb: (err: any, data?: ListUserPoolsCommandOutput) => void): void;
    listUserPools(args: ListUserPoolsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUserPoolsCommandOutput) => void): void;
    /**
     * <p>Lists the users in the Amazon Cognito user pool.</p>
     */
    listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
    listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    listUsers(args: ListUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    /**
     * <p>Lists the users in the specified group.</p>
     *         <p>Calling this action requires developer credentials.</p>
     */
    listUsersInGroup(args: ListUsersInGroupCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersInGroupCommandOutput>;
    listUsersInGroup(args: ListUsersInGroupCommandInput, cb: (err: any, data?: ListUsersInGroupCommandOutput) => void): void;
    listUsersInGroup(args: ListUsersInGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsersInGroupCommandOutput) => void): void;
    /**
     * <p>Resends the confirmation (for confirmation of registration) to a specific user in the
     *             user pool.</p>
     */
    resendConfirmationCode(args: ResendConfirmationCodeCommandInput, options?: __HttpHandlerOptions): Promise<ResendConfirmationCodeCommandOutput>;
    resendConfirmationCode(args: ResendConfirmationCodeCommandInput, cb: (err: any, data?: ResendConfirmationCodeCommandOutput) => void): void;
    resendConfirmationCode(args: ResendConfirmationCodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResendConfirmationCodeCommandOutput) => void): void;
    /**
     * <p>Responds to the authentication challenge.</p>
     */
    respondToAuthChallenge(args: RespondToAuthChallengeCommandInput, options?: __HttpHandlerOptions): Promise<RespondToAuthChallengeCommandOutput>;
    respondToAuthChallenge(args: RespondToAuthChallengeCommandInput, cb: (err: any, data?: RespondToAuthChallengeCommandOutput) => void): void;
    respondToAuthChallenge(args: RespondToAuthChallengeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RespondToAuthChallengeCommandOutput) => void): void;
    /**
     * <p>Configures actions on detected risks. To delete the risk configuration for
     *                 <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four
     *             configuration types.</p>
     *         <p>To enable Amazon Cognito advanced security features, update the user pool to include
     *             the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
     *         <p>See .</p>
     */
    setRiskConfiguration(args: SetRiskConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<SetRiskConfigurationCommandOutput>;
    setRiskConfiguration(args: SetRiskConfigurationCommandInput, cb: (err: any, data?: SetRiskConfigurationCommandOutput) => void): void;
    setRiskConfiguration(args: SetRiskConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetRiskConfigurationCommandOutput) => void): void;
    /**
     * <p>Sets the UI customization information for a user pool's built-in app UI.</p>
     *         <p>You can specify app UI customization settings for a single client (with a specific
     *                 <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to
     *                 <code>ALL</code>). If you specify <code>ALL</code>, the default configuration will
     *             be used for every client that has no UI customization set previously. If you specify UI
     *             customization settings for a particular client, it will no longer fall back to the
     *                 <code>ALL</code> configuration. </p>
     *         <note>
     *             <p>To use this API, your user pool must have a domain associated with it. Otherwise,
     *                 there is no place to host the app's pages, and the service will throw an
     *                 error.</p>
     *         </note>
     */
    setUICustomization(args: SetUICustomizationCommandInput, options?: __HttpHandlerOptions): Promise<SetUICustomizationCommandOutput>;
    setUICustomization(args: SetUICustomizationCommandInput, cb: (err: any, data?: SetUICustomizationCommandOutput) => void): void;
    setUICustomization(args: SetUICustomizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetUICustomizationCommandOutput) => void): void;
    /**
     * <p>Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are enabled and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are enabled. If multiple options are enabled and no preference is set, a challenge to choose an MFA option will be returned during sign in.</p>
     */
    setUserMFAPreference(args: SetUserMFAPreferenceCommandInput, options?: __HttpHandlerOptions): Promise<SetUserMFAPreferenceCommandOutput>;
    setUserMFAPreference(args: SetUserMFAPreferenceCommandInput, cb: (err: any, data?: SetUserMFAPreferenceCommandOutput) => void): void;
    setUserMFAPreference(args: SetUserMFAPreferenceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetUserMFAPreferenceCommandOutput) => void): void;
    /**
     * <p>Set the user pool multi-factor authentication (MFA) configuration.</p>
     */
    setUserPoolMfaConfig(args: SetUserPoolMfaConfigCommandInput, options?: __HttpHandlerOptions): Promise<SetUserPoolMfaConfigCommandOutput>;
    setUserPoolMfaConfig(args: SetUserPoolMfaConfigCommandInput, cb: (err: any, data?: SetUserPoolMfaConfigCommandOutput) => void): void;
    setUserPoolMfaConfig(args: SetUserPoolMfaConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetUserPoolMfaConfigCommandOutput) => void): void;
    /**
     * <p>
     *             <i>This action is no longer supported.</i> You can use it to configure
     *             only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either
     *             type of MFA, use the <a>SetUserMFAPreference</a> action instead.</p>
     */
    setUserSettings(args: SetUserSettingsCommandInput, options?: __HttpHandlerOptions): Promise<SetUserSettingsCommandOutput>;
    setUserSettings(args: SetUserSettingsCommandInput, cb: (err: any, data?: SetUserSettingsCommandOutput) => void): void;
    setUserSettings(args: SetUserSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetUserSettingsCommandOutput) => void): void;
    /**
     * <p>Registers the user in the specified user pool and creates a user name, password, and
     *             user attributes.</p>
     */
    signUp(args: SignUpCommandInput, options?: __HttpHandlerOptions): Promise<SignUpCommandOutput>;
    signUp(args: SignUpCommandInput, cb: (err: any, data?: SignUpCommandOutput) => void): void;
    signUp(args: SignUpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SignUpCommandOutput) => void): void;
    /**
     * <p>Starts the user import.</p>
     */
    startUserImportJob(args: StartUserImportJobCommandInput, options?: __HttpHandlerOptions): Promise<StartUserImportJobCommandOutput>;
    startUserImportJob(args: StartUserImportJobCommandInput, cb: (err: any, data?: StartUserImportJobCommandOutput) => void): void;
    startUserImportJob(args: StartUserImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartUserImportJobCommandOutput) => void): void;
    /**
     * <p>Stops the user import job.</p>
     */
    stopUserImportJob(args: StopUserImportJobCommandInput, options?: __HttpHandlerOptions): Promise<StopUserImportJobCommandOutput>;
    stopUserImportJob(args: StopUserImportJobCommandInput, cb: (err: any, data?: StopUserImportJobCommandOutput) => void): void;
    stopUserImportJob(args: StopUserImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopUserImportJobCommandOutput) => void): void;
    /**
     * <p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can
     *             use to categorize and manage user pools in different ways, such as by purpose, owner,
     *             environment, or other criteria.</p>
     *         <p>Each tag consists of a key and value, both of which you define. A key is a general
     *             category for more specific values. For example, if you have two versions of a user pool,
     *             one for testing and another for production, you might assign an <code>Environment</code>
     *             tag key to both user pools. The value of this key might be <code>Test</code> for one
     *             user pool and <code>Production</code> for the other.</p>
     *         <p>Tags are useful for cost tracking and access control. You can activate your tags so
     *             that they appear on the Billing and Cost Management console, where you can track the
     *             costs associated with your user pools. In an IAM policy, you can constrain permissions
     *             for user pools based on specific tags or tag values.</p>
     *         <p>You can use this action up to 5 times per second, per account. A user pool can have as
     *             many as 50 tags.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from an Amazon Cognito user pool. You can use this action
     *             up to 5 times per second, per account</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Provides the feedback for an authentication event whether it was from a valid user or
     *             not. This feedback is used for improving the risk evaluation decision for the user pool
     *             as part of Amazon Cognito advanced security.</p>
     */
    updateAuthEventFeedback(args: UpdateAuthEventFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAuthEventFeedbackCommandOutput>;
    updateAuthEventFeedback(args: UpdateAuthEventFeedbackCommandInput, cb: (err: any, data?: UpdateAuthEventFeedbackCommandOutput) => void): void;
    updateAuthEventFeedback(args: UpdateAuthEventFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAuthEventFeedbackCommandOutput) => void): void;
    /**
     * <p>Updates the device status.</p>
     */
    updateDeviceStatus(args: UpdateDeviceStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeviceStatusCommandOutput>;
    updateDeviceStatus(args: UpdateDeviceStatusCommandInput, cb: (err: any, data?: UpdateDeviceStatusCommandOutput) => void): void;
    updateDeviceStatus(args: UpdateDeviceStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDeviceStatusCommandOutput) => void): void;
    /**
     * <p>Updates the specified group with the specified attributes.</p>
     *         <p>Calling this action requires developer credentials.</p>
     *          <important>
     *             <p>If you don't provide a value for an attribute, it will be set to the default value.</p>
     *          </important>
     */
    updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
    updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    updateGroup(args: UpdateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    /**
     * <p>Updates identity provider information for a user pool.</p>
     */
    updateIdentityProvider(args: UpdateIdentityProviderCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIdentityProviderCommandOutput>;
    updateIdentityProvider(args: UpdateIdentityProviderCommandInput, cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void): void;
    updateIdentityProvider(args: UpdateIdentityProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void): void;
    /**
     * <p>Updates the name and scopes of resource server. All other fields are read-only.</p>
     *          <important>
     *             <p>If you don't provide a value for an attribute, it will be set to the default value.</p>
     *          </important>
     */
    updateResourceServer(args: UpdateResourceServerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResourceServerCommandOutput>;
    updateResourceServer(args: UpdateResourceServerCommandInput, cb: (err: any, data?: UpdateResourceServerCommandOutput) => void): void;
    updateResourceServer(args: UpdateResourceServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResourceServerCommandOutput) => void): void;
    /**
     * <p>Allows a user to update a specific attribute (one at a time).</p>
     */
    updateUserAttributes(args: UpdateUserAttributesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserAttributesCommandOutput>;
    updateUserAttributes(args: UpdateUserAttributesCommandInput, cb: (err: any, data?: UpdateUserAttributesCommandOutput) => void): void;
    updateUserAttributes(args: UpdateUserAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserAttributesCommandOutput) => void): void;
    /**
     * <p>Updates the specified user pool with the specified attributes. You can get a list of the
     *             current user pool settings with .</p>
     *          <important>
     *             <p>If you don't provide a value for an attribute, it will be set to the default value.</p>
     *          </important>
     */
    updateUserPool(args: UpdateUserPoolCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserPoolCommandOutput>;
    updateUserPool(args: UpdateUserPoolCommandInput, cb: (err: any, data?: UpdateUserPoolCommandOutput) => void): void;
    updateUserPool(args: UpdateUserPoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserPoolCommandOutput) => void): void;
    /**
     * <p>Updates the specified user pool app client with the specified attributes. You can get a
     *             list of the current user pool app client settings with .</p>
     *          <important>
     *             <p>If you don't provide a value for an attribute, it will be set to the default value.</p>
     *          </important>
     */
    updateUserPoolClient(args: UpdateUserPoolClientCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserPoolClientCommandOutput>;
    updateUserPoolClient(args: UpdateUserPoolClientCommandInput, cb: (err: any, data?: UpdateUserPoolClientCommandOutput) => void): void;
    updateUserPoolClient(args: UpdateUserPoolClientCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserPoolClientCommandOutput) => void): void;
    /**
     * <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user
     *             pool.</p>
     *         <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new
     *             certificate to Amazon Cognito. You cannot use it to change the domain for a user
     *             pool.</p>
     *         <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up
     *             and sign-in pages for your application. When you set up a custom domain, you provide a
     *             certificate that you manage with AWS Certificate Manager (ACM). When necessary, you can
     *             use this operation to change the certificate that you applied to your custom
     *             domain.</p>
     *         <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you
     *             renew your existing certificate in ACM, the ARN for your certificate remains the same,
     *             and your custom domain uses the new certificate automatically.</p>
     *         <p>However, if you replace your existing certificate with a new one, ACM gives the new
     *             certificate a new ARN. To apply the new certificate to your custom domain, you must
     *             provide this ARN to Amazon Cognito.</p>
     *         <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the
     *             AWS Region.</p>
     *         <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your
     *             new certificate to your custom domain.</p>
     *         <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
     */
    updateUserPoolDomain(args: UpdateUserPoolDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserPoolDomainCommandOutput>;
    updateUserPoolDomain(args: UpdateUserPoolDomainCommandInput, cb: (err: any, data?: UpdateUserPoolDomainCommandOutput) => void): void;
    updateUserPoolDomain(args: UpdateUserPoolDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserPoolDomainCommandOutput) => void): void;
    /**
     * <p>Use this API to register a user's entered TOTP code and mark the user's software token
     *             MFA status as "verified" if successful. The request takes an access token or a session
     *             string, but not both.</p>
     */
    verifySoftwareToken(args: VerifySoftwareTokenCommandInput, options?: __HttpHandlerOptions): Promise<VerifySoftwareTokenCommandOutput>;
    verifySoftwareToken(args: VerifySoftwareTokenCommandInput, cb: (err: any, data?: VerifySoftwareTokenCommandOutput) => void): void;
    verifySoftwareToken(args: VerifySoftwareTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: VerifySoftwareTokenCommandOutput) => void): void;
    /**
     * <p>Verifies the specified user attributes in the user pool.</p>
     */
    verifyUserAttribute(args: VerifyUserAttributeCommandInput, options?: __HttpHandlerOptions): Promise<VerifyUserAttributeCommandOutput>;
    verifyUserAttribute(args: VerifyUserAttributeCommandInput, cb: (err: any, data?: VerifyUserAttributeCommandOutput) => void): void;
    verifyUserAttribute(args: VerifyUserAttributeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: VerifyUserAttributeCommandOutput) => void): void;
}
