// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CognitoIdentityProviderClient } from "./CognitoIdentityProviderClient";
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
  CreateResourceServerCommand,
  CreateResourceServerCommandInput,
  CreateResourceServerCommandOutput,
} from "./commands/CreateResourceServerCommand";
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
  DeleteResourceServerCommand,
  DeleteResourceServerCommandInput,
  DeleteResourceServerCommandOutput,
} from "./commands/DeleteResourceServerCommand";
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
  DescribeIdentityProviderCommand,
  DescribeIdentityProviderCommandInput,
  DescribeIdentityProviderCommandOutput,
} from "./commands/DescribeIdentityProviderCommand";
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
  GetSigningCertificateCommand,
  GetSigningCertificateCommandInput,
  GetSigningCertificateCommandOutput,
} from "./commands/GetSigningCertificateCommand";
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
  UpdateResourceServerCommand,
  UpdateResourceServerCommandInput,
  UpdateResourceServerCommandOutput,
} from "./commands/UpdateResourceServerCommand";
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

/**
 * <p>Using the Amazon Cognito user pools API, you can create a user pool to manage directories and
 *             users. You can authenticate a user to obtain tokens related to user identity and access
 *             policies.</p>
 *         <p>This API reference provides information about user pools in Amazon Cognito user pools.</p>
 *         <p>For more information, see the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html">Amazon Cognito
 *                 Documentation</a>.</p>
 */
export class CognitoIdentityProvider extends CognitoIdentityProviderClient {
  /**
   * <p>Adds additional user attributes to the user pool schema.</p>
   */
  public addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddCustomAttributesCommandOutput>;
  public addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    cb: (err: any, data?: AddCustomAttributesCommandOutput) => void
  ): void;
  public addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddCustomAttributesCommandOutput) => void
  ): void;
  public addCustomAttributes(
    args: AddCustomAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddCustomAttributesCommandOutput) => void),
    cb?: (err: any, data?: AddCustomAttributesCommandOutput) => void
  ): Promise<AddCustomAttributesCommandOutput> | void {
    const command = new AddCustomAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds the specified user to the specified group.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminAddUserToGroupCommandOutput>;
  public adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    cb: (err: any, data?: AdminAddUserToGroupCommandOutput) => void
  ): void;
  public adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminAddUserToGroupCommandOutput) => void
  ): void;
  public adminAddUserToGroup(
    args: AdminAddUserToGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminAddUserToGroupCommandOutput) => void),
    cb?: (err: any, data?: AdminAddUserToGroupCommandOutput) => void
  ): Promise<AdminAddUserToGroupCommandOutput> | void {
    const command = new AdminAddUserToGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Confirms user registration as an admin without using a confirmation code. Works on any
   *             user.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminConfirmSignUpCommandOutput>;
  public adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    cb: (err: any, data?: AdminConfirmSignUpCommandOutput) => void
  ): void;
  public adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminConfirmSignUpCommandOutput) => void
  ): void;
  public adminConfirmSignUp(
    args: AdminConfirmSignUpCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminConfirmSignUpCommandOutput) => void),
    cb?: (err: any, data?: AdminConfirmSignUpCommandOutput) => void
  ): Promise<AdminConfirmSignUpCommandOutput> | void {
    const command = new AdminConfirmSignUpCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new user in the specified user pool.</p>
   *         <p>If <code>MessageAction</code> isn't set, the default is to send a welcome message via
   *             email or phone (SMS).</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   *
   *         <p>This message is based on a template that you configured in your call to create or
   *             update a user pool. This template includes your custom sign-up instructions and
   *             placeholders for user name and temporary password.</p>
   *         <p>Alternatively, you can call <code>AdminCreateUser</code> with <code>SUPPRESS</code>
   *             for the <code>MessageAction</code> parameter, and Amazon Cognito won't send any email. </p>
   *         <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until
   *             they sign in and change their password.</p>
   *         <p>
   *             <code>AdminCreateUser</code> requires developer credentials.</p>
   */
  public adminCreateUser(
    args: AdminCreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminCreateUserCommandOutput>;
  public adminCreateUser(
    args: AdminCreateUserCommandInput,
    cb: (err: any, data?: AdminCreateUserCommandOutput) => void
  ): void;
  public adminCreateUser(
    args: AdminCreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminCreateUserCommandOutput) => void
  ): void;
  public adminCreateUser(
    args: AdminCreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminCreateUserCommandOutput) => void),
    cb?: (err: any, data?: AdminCreateUserCommandOutput) => void
  ): Promise<AdminCreateUserCommandOutput> | void {
    const command = new AdminCreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a user as an administrator. Works on any user.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminDeleteUser(
    args: AdminDeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminDeleteUserCommandOutput>;
  public adminDeleteUser(
    args: AdminDeleteUserCommandInput,
    cb: (err: any, data?: AdminDeleteUserCommandOutput) => void
  ): void;
  public adminDeleteUser(
    args: AdminDeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDeleteUserCommandOutput) => void
  ): void;
  public adminDeleteUser(
    args: AdminDeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminDeleteUserCommandOutput) => void),
    cb?: (err: any, data?: AdminDeleteUserCommandOutput) => void
  ): Promise<AdminDeleteUserCommandOutput> | void {
    const command = new AdminDeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the user attributes in a user pool as an administrator. Works on any
   *             user.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminDeleteUserAttributesCommandOutput>;
  public adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    cb: (err: any, data?: AdminDeleteUserAttributesCommandOutput) => void
  ): void;
  public adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDeleteUserAttributesCommandOutput) => void
  ): void;
  public adminDeleteUserAttributes(
    args: AdminDeleteUserAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminDeleteUserAttributesCommandOutput) => void),
    cb?: (err: any, data?: AdminDeleteUserAttributesCommandOutput) => void
  ): Promise<AdminDeleteUserAttributesCommandOutput> | void {
    const command = new AdminDeleteUserAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Prevents the user from signing in with the specified external (SAML or social)
   *             identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools
   *             native username + password user, they can't use their password to sign in. If the user
   *             to deactivate is a linked external IdP user, any link between that user and an existing
   *             user is removed. When the external user signs in again, and the user is no longer
   *             attached to the previously linked <code>DestinationUser</code>, the user must create a
   *             new user account. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p>
   *         <p>This action is enabled only for admin access and requires developer
   *             credentials.</p>
   *         <p>The <code>ProviderName</code> must match the value specified when creating an IdP for
   *             the pool. </p>
   *         <p>To deactivate a native username + password user, the <code>ProviderName</code> value
   *             must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be
   *                 <code>Cognito_Subject</code>. The <code>ProviderAttributeValue</code> must be the
   *             name that is used in the user pool for the user.</p>
   *         <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for
   *             social IdPs. The <code>ProviderAttributeValue</code> must always be the exact subject
   *             that was used when the user was originally linked as a source user.</p>
   *         <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has
   *             not yet been used to sign in, the <code>ProviderAttributeName</code> and
   *                 <code>ProviderAttributeValue</code> must be the same values that were used for the
   *                 <code>SourceUser</code> when the identities were originally linked using <code>
   *                 AdminLinkProviderForUser</code> call. (If the linking was done with
   *                 <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same
   *             applies here). However, if the user has already signed in, the
   *                 <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and
   *                 <code>ProviderAttributeValue</code> must be the subject of the SAML
   *             assertion.</p>
   */
  public adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminDisableProviderForUserCommandOutput>;
  public adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    cb: (err: any, data?: AdminDisableProviderForUserCommandOutput) => void
  ): void;
  public adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDisableProviderForUserCommandOutput) => void
  ): void;
  public adminDisableProviderForUser(
    args: AdminDisableProviderForUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminDisableProviderForUserCommandOutput) => void),
    cb?: (err: any, data?: AdminDisableProviderForUserCommandOutput) => void
  ): Promise<AdminDisableProviderForUserCommandOutput> | void {
    const command = new AdminDisableProviderForUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deactivates a user and revokes all access tokens for the user. A deactivated user can't sign in,
   *             but still appears in the responses to <code>GetUser</code> and <code>ListUsers</code> API requests.</p>
   *         <p>You must make this API request with Amazon Web Services credentials that have <code>cognito-idp:AdminDisableUser</code> permissions.</p>
   */
  public adminDisableUser(
    args: AdminDisableUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminDisableUserCommandOutput>;
  public adminDisableUser(
    args: AdminDisableUserCommandInput,
    cb: (err: any, data?: AdminDisableUserCommandOutput) => void
  ): void;
  public adminDisableUser(
    args: AdminDisableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminDisableUserCommandOutput) => void
  ): void;
  public adminDisableUser(
    args: AdminDisableUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminDisableUserCommandOutput) => void),
    cb?: (err: any, data?: AdminDisableUserCommandOutput) => void
  ): Promise<AdminDisableUserCommandOutput> | void {
    const command = new AdminDisableUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables the specified user as an administrator. Works on any user.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminEnableUser(
    args: AdminEnableUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminEnableUserCommandOutput>;
  public adminEnableUser(
    args: AdminEnableUserCommandInput,
    cb: (err: any, data?: AdminEnableUserCommandOutput) => void
  ): void;
  public adminEnableUser(
    args: AdminEnableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminEnableUserCommandOutput) => void
  ): void;
  public adminEnableUser(
    args: AdminEnableUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminEnableUserCommandOutput) => void),
    cb?: (err: any, data?: AdminEnableUserCommandOutput) => void
  ): Promise<AdminEnableUserCommandOutput> | void {
    const command = new AdminEnableUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Forgets the device, as an administrator.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminForgetDeviceCommandOutput>;
  public adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    cb: (err: any, data?: AdminForgetDeviceCommandOutput) => void
  ): void;
  public adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminForgetDeviceCommandOutput) => void
  ): void;
  public adminForgetDevice(
    args: AdminForgetDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminForgetDeviceCommandOutput) => void),
    cb?: (err: any, data?: AdminForgetDeviceCommandOutput) => void
  ): Promise<AdminForgetDeviceCommandOutput> | void {
    const command = new AdminForgetDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the device, as an administrator.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminGetDevice(
    args: AdminGetDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminGetDeviceCommandOutput>;
  public adminGetDevice(
    args: AdminGetDeviceCommandInput,
    cb: (err: any, data?: AdminGetDeviceCommandOutput) => void
  ): void;
  public adminGetDevice(
    args: AdminGetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminGetDeviceCommandOutput) => void
  ): void;
  public adminGetDevice(
    args: AdminGetDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminGetDeviceCommandOutput) => void),
    cb?: (err: any, data?: AdminGetDeviceCommandOutput) => void
  ): Promise<AdminGetDeviceCommandOutput> | void {
    const command = new AdminGetDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the specified user by user name in a user pool as an administrator. Works on any
   *             user.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminGetUser(
    args: AdminGetUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminGetUserCommandOutput>;
  public adminGetUser(args: AdminGetUserCommandInput, cb: (err: any, data?: AdminGetUserCommandOutput) => void): void;
  public adminGetUser(
    args: AdminGetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminGetUserCommandOutput) => void
  ): void;
  public adminGetUser(
    args: AdminGetUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminGetUserCommandOutput) => void),
    cb?: (err: any, data?: AdminGetUserCommandOutput) => void
  ): Promise<AdminGetUserCommandOutput> | void {
    const command = new AdminGetUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Initiates the authentication flow, as an administrator.</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   *
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminInitiateAuthCommandOutput>;
  public adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    cb: (err: any, data?: AdminInitiateAuthCommandOutput) => void
  ): void;
  public adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminInitiateAuthCommandOutput) => void
  ): void;
  public adminInitiateAuth(
    args: AdminInitiateAuthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminInitiateAuthCommandOutput) => void),
    cb?: (err: any, data?: AdminInitiateAuthCommandOutput) => void
  ): Promise<AdminInitiateAuthCommandOutput> | void {
    const command = new AdminInitiateAuthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an
   *             identity from an external IdP (<code>SourceUser</code>) based on a specified attribute
   *             name and value from the external IdP. This allows you to create a link from the existing
   *             user account to an external federated user identity that has not yet been used to sign
   *             in. You can then use the federated user identity to sign in as the existing user
   *             account. </p>
   *         <p> For example, if there is an existing user with a username and password, this API
   *             links that user to a federated user identity. When the user signs in with a federated
   *             user identity, they sign in as the existing user account.</p>
   *         <note>
   *             <p>The maximum number of federated identities linked to a user is five.</p>
   *         </note>
   *         <important>
   *             <p>Because this API allows a user with an external federated identity to sign in as
   *                 an existing user in the user pool, it is critical that it only be used with external
   *                 IdPs and provider attributes that have been trusted by the application owner.</p>
   *         </important>
   *
   *         <p>This action is administrative and requires developer credentials.</p>
   */
  public adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminLinkProviderForUserCommandOutput>;
  public adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    cb: (err: any, data?: AdminLinkProviderForUserCommandOutput) => void
  ): void;
  public adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminLinkProviderForUserCommandOutput) => void
  ): void;
  public adminLinkProviderForUser(
    args: AdminLinkProviderForUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminLinkProviderForUserCommandOutput) => void),
    cb?: (err: any, data?: AdminLinkProviderForUserCommandOutput) => void
  ): Promise<AdminLinkProviderForUserCommandOutput> | void {
    const command = new AdminLinkProviderForUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists devices, as an administrator.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminListDevices(
    args: AdminListDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminListDevicesCommandOutput>;
  public adminListDevices(
    args: AdminListDevicesCommandInput,
    cb: (err: any, data?: AdminListDevicesCommandOutput) => void
  ): void;
  public adminListDevices(
    args: AdminListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListDevicesCommandOutput) => void
  ): void;
  public adminListDevices(
    args: AdminListDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminListDevicesCommandOutput) => void),
    cb?: (err: any, data?: AdminListDevicesCommandOutput) => void
  ): Promise<AdminListDevicesCommandOutput> | void {
    const command = new AdminListDevicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the groups that the user belongs to.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminListGroupsForUserCommandOutput>;
  public adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    cb: (err: any, data?: AdminListGroupsForUserCommandOutput) => void
  ): void;
  public adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListGroupsForUserCommandOutput) => void
  ): void;
  public adminListGroupsForUser(
    args: AdminListGroupsForUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminListGroupsForUserCommandOutput) => void),
    cb?: (err: any, data?: AdminListGroupsForUserCommandOutput) => void
  ): Promise<AdminListGroupsForUserCommandOutput> | void {
    const command = new AdminListGroupsForUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A history of user activity and any risks detected as part of Amazon Cognito advanced
   *             security.</p>
   */
  public adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminListUserAuthEventsCommandOutput>;
  public adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    cb: (err: any, data?: AdminListUserAuthEventsCommandOutput) => void
  ): void;
  public adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminListUserAuthEventsCommandOutput) => void
  ): void;
  public adminListUserAuthEvents(
    args: AdminListUserAuthEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminListUserAuthEventsCommandOutput) => void),
    cb?: (err: any, data?: AdminListUserAuthEventsCommandOutput) => void
  ): Promise<AdminListUserAuthEventsCommandOutput> | void {
    const command = new AdminListUserAuthEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified user from the specified group.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminRemoveUserFromGroupCommandOutput>;
  public adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    cb: (err: any, data?: AdminRemoveUserFromGroupCommandOutput) => void
  ): void;
  public adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminRemoveUserFromGroupCommandOutput) => void
  ): void;
  public adminRemoveUserFromGroup(
    args: AdminRemoveUserFromGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminRemoveUserFromGroupCommandOutput) => void),
    cb?: (err: any, data?: AdminRemoveUserFromGroupCommandOutput) => void
  ): Promise<AdminRemoveUserFromGroupCommandOutput> | void {
    const command = new AdminRemoveUserFromGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   *
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminResetUserPasswordCommandOutput>;
  public adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    cb: (err: any, data?: AdminResetUserPasswordCommandOutput) => void
  ): void;
  public adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminResetUserPasswordCommandOutput) => void
  ): void;
  public adminResetUserPassword(
    args: AdminResetUserPasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminResetUserPasswordCommandOutput) => void),
    cb?: (err: any, data?: AdminResetUserPasswordCommandOutput) => void
  ): Promise<AdminResetUserPasswordCommandOutput> | void {
    const command = new AdminResetUserPasswordCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Responds to an authentication challenge, as an administrator.</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   *
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminRespondToAuthChallengeCommandOutput>;
  public adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    cb: (err: any, data?: AdminRespondToAuthChallengeCommandOutput) => void
  ): void;
  public adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminRespondToAuthChallengeCommandOutput) => void
  ): void;
  public adminRespondToAuthChallenge(
    args: AdminRespondToAuthChallengeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminRespondToAuthChallengeCommandOutput) => void),
    cb?: (err: any, data?: AdminRespondToAuthChallengeCommandOutput) => void
  ): Promise<AdminRespondToAuthChallengeCommandOutput> | void {
    const command = new AdminRespondToAuthChallengeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The user's multi-factor authentication (MFA) preference, including which MFA options
   *             are activated, and if any are preferred. Only one factor can be set as preferred. The
   *             preferred MFA factor will be used to authenticate a user if multiple factors are
   *             activated. If multiple options are activated and no preference is set, a challenge to
   *             choose an MFA option will be returned during sign-in.</p>
   */
  public adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminSetUserMFAPreferenceCommandOutput>;
  public adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    cb: (err: any, data?: AdminSetUserMFAPreferenceCommandOutput) => void
  ): void;
  public adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminSetUserMFAPreferenceCommandOutput) => void
  ): void;
  public adminSetUserMFAPreference(
    args: AdminSetUserMFAPreferenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminSetUserMFAPreferenceCommandOutput) => void),
    cb?: (err: any, data?: AdminSetUserMFAPreferenceCommandOutput) => void
  ): Promise<AdminSetUserMFAPreferenceCommandOutput> | void {
    const command = new AdminSetUserMFAPreferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the specified user's password in a user pool as an administrator. Works on any
   *             user. </p>
   *         <p>The password can be temporary or permanent. If it is temporary, the user status enters
   *             the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the
   *             InitiateAuth/AdminInitiateAuth response will contain the
   *                 <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn't sign in before it
   *             expires, the user won't be able to sign in, and an administrator must reset their
   *             password. </p>
   *         <p>Once the user has set a new password, or the password is permanent, the user status is
   *             set to <code>Confirmed</code>.</p>
   */
  public adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminSetUserPasswordCommandOutput>;
  public adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    cb: (err: any, data?: AdminSetUserPasswordCommandOutput) => void
  ): void;
  public adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminSetUserPasswordCommandOutput) => void
  ): void;
  public adminSetUserPassword(
    args: AdminSetUserPasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminSetUserPasswordCommandOutput) => void),
    cb?: (err: any, data?: AdminSetUserPasswordCommandOutput) => void
  ): Promise<AdminSetUserPasswordCommandOutput> | void {
    const command = new AdminSetUserPasswordCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <i>This action is no longer supported.</i> You can use it to configure
   *             only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software
   *             token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.</p>
   */
  public adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminSetUserSettingsCommandOutput>;
  public adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    cb: (err: any, data?: AdminSetUserSettingsCommandOutput) => void
  ): void;
  public adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminSetUserSettingsCommandOutput) => void
  ): void;
  public adminSetUserSettings(
    args: AdminSetUserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminSetUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: AdminSetUserSettingsCommandOutput) => void
  ): Promise<AdminSetUserSettingsCommandOutput> | void {
    const command = new AdminSetUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides feedback for an authentication event indicating if it was from a valid user.
   *             This feedback is used for improving the risk evaluation decision for the user pool as
   *             part of Amazon Cognito advanced security.</p>
   */
  public adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminUpdateAuthEventFeedbackCommandOutput>;
  public adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    cb: (err: any, data?: AdminUpdateAuthEventFeedbackCommandOutput) => void
  ): void;
  public adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUpdateAuthEventFeedbackCommandOutput) => void
  ): void;
  public adminUpdateAuthEventFeedback(
    args: AdminUpdateAuthEventFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminUpdateAuthEventFeedbackCommandOutput) => void),
    cb?: (err: any, data?: AdminUpdateAuthEventFeedbackCommandOutput) => void
  ): Promise<AdminUpdateAuthEventFeedbackCommandOutput> | void {
    const command = new AdminUpdateAuthEventFeedbackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the device status as an administrator.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminUpdateDeviceStatusCommandOutput>;
  public adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    cb: (err: any, data?: AdminUpdateDeviceStatusCommandOutput) => void
  ): void;
  public adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUpdateDeviceStatusCommandOutput) => void
  ): void;
  public adminUpdateDeviceStatus(
    args: AdminUpdateDeviceStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminUpdateDeviceStatusCommandOutput) => void),
    cb?: (err: any, data?: AdminUpdateDeviceStatusCommandOutput) => void
  ): Promise<AdminUpdateDeviceStatusCommandOutput> | void {
    const command = new AdminUpdateDeviceStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified user's attributes, including developer attributes, as an
   *             administrator. Works on any user.</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   *         <p>In addition to updating user attributes, this API can also be used to mark phone and
   *             email as verified.</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   *
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminUpdateUserAttributesCommandOutput>;
  public adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    cb: (err: any, data?: AdminUpdateUserAttributesCommandOutput) => void
  ): void;
  public adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUpdateUserAttributesCommandOutput) => void
  ): void;
  public adminUpdateUserAttributes(
    args: AdminUpdateUserAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminUpdateUserAttributesCommandOutput) => void),
    cb?: (err: any, data?: AdminUpdateUserAttributesCommandOutput) => void
  ): Promise<AdminUpdateUserAttributesCommandOutput> | void {
    const command = new AdminUpdateUserAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Signs out a user from all devices. You must sign <code>AdminUserGlobalSignOut</code> requests
   *             with Amazon Web Services credentials. It also invalidates all refresh tokens that Amazon Cognito has issued to
   *             a user. The user's current access and ID tokens remain valid until they expire. By
   *             default, access and ID tokens expire one hour after they're issued. A user can still use
   *             a hosted UI cookie to retrieve new tokens for the duration of the cookie validity period
   *             of 1 hour.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdminUserGlobalSignOutCommandOutput>;
  public adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    cb: (err: any, data?: AdminUserGlobalSignOutCommandOutput) => void
  ): void;
  public adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdminUserGlobalSignOutCommandOutput) => void
  ): void;
  public adminUserGlobalSignOut(
    args: AdminUserGlobalSignOutCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdminUserGlobalSignOutCommandOutput) => void),
    cb?: (err: any, data?: AdminUserGlobalSignOutCommandOutput) => void
  ): Promise<AdminUserGlobalSignOutCommandOutput> | void {
    const command = new AdminUserGlobalSignOutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA)
   *             for a user, with a unique private key that Amazon Cognito generates and returns in the API
   *             response. You can authorize an <code>AssociateSoftwareToken</code> request with either
   *             the user's access token, or a session string from a challenge response that you received
   *             from Amazon Cognito.</p>
   *         <note>
   *             <p>Amazon Cognito disassociates an existing software token when you verify the new token in a
   *                     <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html"> VerifySoftwareToken</a> API request. If you don't verify the software
   *                 token and your user pool doesn't require MFA, the user can then authenticate with
   *                 user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito
   *                 generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge
   *                 each time your user signs. Complete setup with <code>AssociateSoftwareToken</code>
   *                 and <code>VerifySoftwareToken</code>.</p>
   *             <p>After you set up software token MFA for your user, Amazon Cognito generates a
   *                     <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to
   *                 this challenge with your user's TOTP.</p>
   *         </note>
   */
  public associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSoftwareTokenCommandOutput>;
  public associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    cb: (err: any, data?: AssociateSoftwareTokenCommandOutput) => void
  ): void;
  public associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSoftwareTokenCommandOutput) => void
  ): void;
  public associateSoftwareToken(
    args: AssociateSoftwareTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateSoftwareTokenCommandOutput) => void),
    cb?: (err: any, data?: AssociateSoftwareTokenCommandOutput) => void
  ): Promise<AssociateSoftwareTokenCommandOutput> | void {
    const command = new AssociateSoftwareTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the password for a specified user in a user pool.</p>
   */
  public changePassword(
    args: ChangePasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangePasswordCommandOutput>;
  public changePassword(
    args: ChangePasswordCommandInput,
    cb: (err: any, data?: ChangePasswordCommandOutput) => void
  ): void;
  public changePassword(
    args: ChangePasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangePasswordCommandOutput) => void
  ): void;
  public changePassword(
    args: ChangePasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ChangePasswordCommandOutput) => void),
    cb?: (err: any, data?: ChangePasswordCommandOutput) => void
  ): Promise<ChangePasswordCommandOutput> | void {
    const command = new ChangePasswordCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Confirms tracking of the device. This API call is the call that begins device
   *             tracking.</p>
   */
  public confirmDevice(
    args: ConfirmDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmDeviceCommandOutput>;
  public confirmDevice(
    args: ConfirmDeviceCommandInput,
    cb: (err: any, data?: ConfirmDeviceCommandOutput) => void
  ): void;
  public confirmDevice(
    args: ConfirmDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmDeviceCommandOutput) => void
  ): void;
  public confirmDevice(
    args: ConfirmDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmDeviceCommandOutput) => void),
    cb?: (err: any, data?: ConfirmDeviceCommandOutput) => void
  ): Promise<ConfirmDeviceCommandOutput> | void {
    const command = new ConfirmDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows a user to enter a confirmation code to reset a forgotten password.</p>
   */
  public confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmForgotPasswordCommandOutput>;
  public confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    cb: (err: any, data?: ConfirmForgotPasswordCommandOutput) => void
  ): void;
  public confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmForgotPasswordCommandOutput) => void
  ): void;
  public confirmForgotPassword(
    args: ConfirmForgotPasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmForgotPasswordCommandOutput) => void),
    cb?: (err: any, data?: ConfirmForgotPasswordCommandOutput) => void
  ): Promise<ConfirmForgotPasswordCommandOutput> | void {
    const command = new ConfirmForgotPasswordCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Confirms registration of a new user.</p>
   */
  public confirmSignUp(
    args: ConfirmSignUpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmSignUpCommandOutput>;
  public confirmSignUp(
    args: ConfirmSignUpCommandInput,
    cb: (err: any, data?: ConfirmSignUpCommandOutput) => void
  ): void;
  public confirmSignUp(
    args: ConfirmSignUpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmSignUpCommandOutput) => void
  ): void;
  public confirmSignUp(
    args: ConfirmSignUpCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmSignUpCommandOutput) => void),
    cb?: (err: any, data?: ConfirmSignUpCommandOutput) => void
  ): Promise<ConfirmSignUpCommandOutput> | void {
    const command = new ConfirmSignUpCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new group in the specified user pool.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  public createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  public createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupCommandOutput) => void
  ): Promise<CreateGroupCommandOutput> | void {
    const command = new CreateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an IdP for a user pool.</p>
   */
  public createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIdentityProviderCommandOutput>;
  public createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): void;
  public createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): void;
  public createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): Promise<CreateIdentityProviderCommandOutput> | void {
    const command = new CreateIdentityProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new OAuth2.0 resource server and defines custom scopes within it.</p>
   */
  public createResourceServer(
    args: CreateResourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceServerCommandOutput>;
  public createResourceServer(
    args: CreateResourceServerCommandInput,
    cb: (err: any, data?: CreateResourceServerCommandOutput) => void
  ): void;
  public createResourceServer(
    args: CreateResourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceServerCommandOutput) => void
  ): void;
  public createResourceServer(
    args: CreateResourceServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourceServerCommandOutput) => void),
    cb?: (err: any, data?: CreateResourceServerCommandOutput) => void
  ): Promise<CreateResourceServerCommandOutput> | void {
    const command = new CreateResourceServerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates the user import job.</p>
   */
  public createUserImportJob(
    args: CreateUserImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserImportJobCommandOutput>;
  public createUserImportJob(
    args: CreateUserImportJobCommandInput,
    cb: (err: any, data?: CreateUserImportJobCommandOutput) => void
  ): void;
  public createUserImportJob(
    args: CreateUserImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserImportJobCommandOutput) => void
  ): void;
  public createUserImportJob(
    args: CreateUserImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserImportJobCommandOutput) => void),
    cb?: (err: any, data?: CreateUserImportJobCommandOutput) => void
  ): Promise<CreateUserImportJobCommandOutput> | void {
    const command = new CreateUserImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Amazon Cognito user pool and sets the password policy for the
   *             pool.</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   */
  public createUserPool(
    args: CreateUserPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserPoolCommandOutput>;
  public createUserPool(
    args: CreateUserPoolCommandInput,
    cb: (err: any, data?: CreateUserPoolCommandOutput) => void
  ): void;
  public createUserPool(
    args: CreateUserPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserPoolCommandOutput) => void
  ): void;
  public createUserPool(
    args: CreateUserPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserPoolCommandOutput) => void),
    cb?: (err: any, data?: CreateUserPoolCommandOutput) => void
  ): Promise<CreateUserPoolCommandOutput> | void {
    const command = new CreateUserPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates the user pool client.</p>
   *         <p>When you create a new user pool client, token revocation is automatically activated.
   *             For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
   */
  public createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserPoolClientCommandOutput>;
  public createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    cb: (err: any, data?: CreateUserPoolClientCommandOutput) => void
  ): void;
  public createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserPoolClientCommandOutput) => void
  ): void;
  public createUserPoolClient(
    args: CreateUserPoolClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserPoolClientCommandOutput) => void),
    cb?: (err: any, data?: CreateUserPoolClientCommandOutput) => void
  ): Promise<CreateUserPoolClientCommandOutput> | void {
    const command = new CreateUserPoolClientCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new domain for a user pool.</p>
   */
  public createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserPoolDomainCommandOutput>;
  public createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    cb: (err: any, data?: CreateUserPoolDomainCommandOutput) => void
  ): void;
  public createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserPoolDomainCommandOutput) => void
  ): void;
  public createUserPoolDomain(
    args: CreateUserPoolDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserPoolDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateUserPoolDomainCommandOutput) => void
  ): Promise<CreateUserPoolDomainCommandOutput> | void {
    const command = new CreateUserPoolDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a group.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  public deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupCommandOutput) => void
  ): Promise<DeleteGroupCommandOutput> | void {
    const command = new DeleteGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an IdP for a user pool.</p>
   */
  public deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdentityProviderCommandOutput>;
  public deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): void;
  public deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): void;
  public deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): Promise<DeleteIdentityProviderCommandOutput> | void {
    const command = new DeleteIdentityProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a resource server.</p>
   */
  public deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceServerCommandOutput>;
  public deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    cb: (err: any, data?: DeleteResourceServerCommandOutput) => void
  ): void;
  public deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceServerCommandOutput) => void
  ): void;
  public deleteResourceServer(
    args: DeleteResourceServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceServerCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceServerCommandOutput) => void
  ): Promise<DeleteResourceServerCommandOutput> | void {
    const command = new DeleteResourceServerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows a user to delete himself or herself.</p>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the attributes for a user.</p>
   */
  public deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserAttributesCommandOutput>;
  public deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    cb: (err: any, data?: DeleteUserAttributesCommandOutput) => void
  ): void;
  public deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserAttributesCommandOutput) => void
  ): void;
  public deleteUserAttributes(
    args: DeleteUserAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserAttributesCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserAttributesCommandOutput) => void
  ): Promise<DeleteUserAttributesCommandOutput> | void {
    const command = new DeleteUserAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Amazon Cognito user pool.</p>
   */
  public deleteUserPool(
    args: DeleteUserPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPoolCommandOutput>;
  public deleteUserPool(
    args: DeleteUserPoolCommandInput,
    cb: (err: any, data?: DeleteUserPoolCommandOutput) => void
  ): void;
  public deleteUserPool(
    args: DeleteUserPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPoolCommandOutput) => void
  ): void;
  public deleteUserPool(
    args: DeleteUserPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserPoolCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserPoolCommandOutput) => void
  ): Promise<DeleteUserPoolCommandOutput> | void {
    const command = new DeleteUserPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows the developer to delete the user pool client.</p>
   */
  public deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPoolClientCommandOutput>;
  public deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    cb: (err: any, data?: DeleteUserPoolClientCommandOutput) => void
  ): void;
  public deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPoolClientCommandOutput) => void
  ): void;
  public deleteUserPoolClient(
    args: DeleteUserPoolClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserPoolClientCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserPoolClientCommandOutput) => void
  ): Promise<DeleteUserPoolClientCommandOutput> | void {
    const command = new DeleteUserPoolClientCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a domain for a user pool.</p>
   */
  public deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPoolDomainCommandOutput>;
  public deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    cb: (err: any, data?: DeleteUserPoolDomainCommandOutput) => void
  ): void;
  public deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPoolDomainCommandOutput) => void
  ): void;
  public deleteUserPoolDomain(
    args: DeleteUserPoolDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserPoolDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserPoolDomainCommandOutput) => void
  ): Promise<DeleteUserPoolDomainCommandOutput> | void {
    const command = new DeleteUserPoolDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a specific IdP.</p>
   */
  public describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityProviderCommandOutput>;
  public describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    cb: (err: any, data?: DescribeIdentityProviderCommandOutput) => void
  ): void;
  public describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityProviderCommandOutput) => void
  ): void;
  public describeIdentityProvider(
    args: DescribeIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: DescribeIdentityProviderCommandOutput) => void
  ): Promise<DescribeIdentityProviderCommandOutput> | void {
    const command = new DescribeIdentityProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a resource server.</p>
   */
  public describeResourceServer(
    args: DescribeResourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceServerCommandOutput>;
  public describeResourceServer(
    args: DescribeResourceServerCommandInput,
    cb: (err: any, data?: DescribeResourceServerCommandOutput) => void
  ): void;
  public describeResourceServer(
    args: DescribeResourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceServerCommandOutput) => void
  ): void;
  public describeResourceServer(
    args: DescribeResourceServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResourceServerCommandOutput) => void),
    cb?: (err: any, data?: DescribeResourceServerCommandOutput) => void
  ): Promise<DescribeResourceServerCommandOutput> | void {
    const command = new DescribeResourceServerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the risk configuration.</p>
   */
  public describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRiskConfigurationCommandOutput>;
  public describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    cb: (err: any, data?: DescribeRiskConfigurationCommandOutput) => void
  ): void;
  public describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRiskConfigurationCommandOutput) => void
  ): void;
  public describeRiskConfiguration(
    args: DescribeRiskConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRiskConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeRiskConfigurationCommandOutput) => void
  ): Promise<DescribeRiskConfigurationCommandOutput> | void {
    const command = new DescribeRiskConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the user import job.</p>
   */
  public describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserImportJobCommandOutput>;
  public describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    cb: (err: any, data?: DescribeUserImportJobCommandOutput) => void
  ): void;
  public describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserImportJobCommandOutput) => void
  ): void;
  public describeUserImportJob(
    args: DescribeUserImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserImportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserImportJobCommandOutput) => void
  ): Promise<DescribeUserImportJobCommandOutput> | void {
    const command = new DescribeUserImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the configuration information and metadata of the specified user pool.</p>
   */
  public describeUserPool(
    args: DescribeUserPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserPoolCommandOutput>;
  public describeUserPool(
    args: DescribeUserPoolCommandInput,
    cb: (err: any, data?: DescribeUserPoolCommandOutput) => void
  ): void;
  public describeUserPool(
    args: DescribeUserPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserPoolCommandOutput) => void
  ): void;
  public describeUserPool(
    args: DescribeUserPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserPoolCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserPoolCommandOutput) => void
  ): Promise<DescribeUserPoolCommandOutput> | void {
    const command = new DescribeUserPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Client method for returning the configuration information and metadata of the
   *             specified user pool app client.</p>
   */
  public describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserPoolClientCommandOutput>;
  public describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    cb: (err: any, data?: DescribeUserPoolClientCommandOutput) => void
  ): void;
  public describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserPoolClientCommandOutput) => void
  ): void;
  public describeUserPoolClient(
    args: DescribeUserPoolClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserPoolClientCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserPoolClientCommandOutput) => void
  ): Promise<DescribeUserPoolClientCommandOutput> | void {
    const command = new DescribeUserPoolClientCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a domain.</p>
   */
  public describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserPoolDomainCommandOutput>;
  public describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    cb: (err: any, data?: DescribeUserPoolDomainCommandOutput) => void
  ): void;
  public describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserPoolDomainCommandOutput) => void
  ): void;
  public describeUserPoolDomain(
    args: DescribeUserPoolDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserPoolDomainCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserPoolDomainCommandOutput) => void
  ): Promise<DescribeUserPoolDomainCommandOutput> | void {
    const command = new DescribeUserPoolDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Forgets the specified device.</p>
   */
  public forgetDevice(
    args: ForgetDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ForgetDeviceCommandOutput>;
  public forgetDevice(args: ForgetDeviceCommandInput, cb: (err: any, data?: ForgetDeviceCommandOutput) => void): void;
  public forgetDevice(
    args: ForgetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ForgetDeviceCommandOutput) => void
  ): void;
  public forgetDevice(
    args: ForgetDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ForgetDeviceCommandOutput) => void),
    cb?: (err: any, data?: ForgetDeviceCommandOutput) => void
  ): Promise<ForgetDeviceCommandOutput> | void {
    const command = new ForgetDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Calling this API causes a message to be sent to the end user with a confirmation code
   *             that is required to change the user's password. For the <code>Username</code> parameter,
   *             you can use the username or user alias. The method used to send the confirmation code is
   *             sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering
   *                 User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If
   *             neither a verified phone number nor a verified email exists, an
   *                 <code>InvalidParameterException</code> is thrown. To use the confirmation code for
   *             resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>. </p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   */
  public forgotPassword(
    args: ForgotPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ForgotPasswordCommandOutput>;
  public forgotPassword(
    args: ForgotPasswordCommandInput,
    cb: (err: any, data?: ForgotPasswordCommandOutput) => void
  ): void;
  public forgotPassword(
    args: ForgotPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ForgotPasswordCommandOutput) => void
  ): void;
  public forgotPassword(
    args: ForgotPasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ForgotPasswordCommandOutput) => void),
    cb?: (err: any, data?: ForgotPasswordCommandOutput) => void
  ): Promise<ForgotPasswordCommandOutput> | void {
    const command = new ForgotPasswordCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the header information for the comma-separated value (CSV) file to be used as
   *             input for the user import job.</p>
   */
  public getCSVHeader(
    args: GetCSVHeaderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCSVHeaderCommandOutput>;
  public getCSVHeader(args: GetCSVHeaderCommandInput, cb: (err: any, data?: GetCSVHeaderCommandOutput) => void): void;
  public getCSVHeader(
    args: GetCSVHeaderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCSVHeaderCommandOutput) => void
  ): void;
  public getCSVHeader(
    args: GetCSVHeaderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCSVHeaderCommandOutput) => void),
    cb?: (err: any, data?: GetCSVHeaderCommandOutput) => void
  ): Promise<GetCSVHeaderCommandOutput> | void {
    const command = new GetCSVHeaderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the device.</p>
   */
  public getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
  public getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
  public getDevice(
    args: GetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;
  public getDevice(
    args: GetDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceCommandOutput) => void
  ): Promise<GetDeviceCommandOutput> | void {
    const command = new GetDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a group.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
  public getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
  public getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  public getGroup(
    args: GetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupCommandOutput) => void),
    cb?: (err: any, data?: GetGroupCommandOutput) => void
  ): Promise<GetGroupCommandOutput> | void {
    const command = new GetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the specified IdP.</p>
   */
  public getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityProviderByIdentifierCommandOutput>;
  public getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    cb: (err: any, data?: GetIdentityProviderByIdentifierCommandOutput) => void
  ): void;
  public getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityProviderByIdentifierCommandOutput) => void
  ): void;
  public getIdentityProviderByIdentifier(
    args: GetIdentityProviderByIdentifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentityProviderByIdentifierCommandOutput) => void),
    cb?: (err: any, data?: GetIdentityProviderByIdentifierCommandOutput) => void
  ): Promise<GetIdentityProviderByIdentifierCommandOutput> | void {
    const command = new GetIdentityProviderByIdentifierCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>This method takes a user pool ID, and returns the signing certificate. The issued certificate is valid for 10 years from the date of issue.</p>
   *         <p>Amazon Cognito issues and assigns a new signing certificate annually. This process returns a new value in the response to <code>GetSigningCertificate</code>,
   *             but doesn't invalidate the original certificate.</p>
   */
  public getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSigningCertificateCommandOutput>;
  public getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    cb: (err: any, data?: GetSigningCertificateCommandOutput) => void
  ): void;
  public getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSigningCertificateCommandOutput) => void
  ): void;
  public getSigningCertificate(
    args: GetSigningCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSigningCertificateCommandOutput) => void),
    cb?: (err: any, data?: GetSigningCertificateCommandOutput) => void
  ): Promise<GetSigningCertificateCommandOutput> | void {
    const command = new GetSigningCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the user interface (UI) Customization information for a particular app client's
   *             app UI, if any such information exists for the client. If nothing is set for the
   *             particular client, but there is an existing pool level customization (the app
   *                 <code>clientId</code> is <code>ALL</code>), then that information is returned. If
   *             nothing is present, then an empty shape is returned.</p>
   */
  public getUICustomization(
    args: GetUICustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUICustomizationCommandOutput>;
  public getUICustomization(
    args: GetUICustomizationCommandInput,
    cb: (err: any, data?: GetUICustomizationCommandOutput) => void
  ): void;
  public getUICustomization(
    args: GetUICustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUICustomizationCommandOutput) => void
  ): void;
  public getUICustomization(
    args: GetUICustomizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUICustomizationCommandOutput) => void),
    cb?: (err: any, data?: GetUICustomizationCommandOutput) => void
  ): Promise<GetUICustomizationCommandOutput> | void {
    const command = new GetUICustomizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the user attributes and metadata for a user.</p>
   */
  public getUser(args: GetUserCommandInput, options?: __HttpHandlerOptions): Promise<GetUserCommandOutput>;
  public getUser(args: GetUserCommandInput, cb: (err: any, data?: GetUserCommandOutput) => void): void;
  public getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  public getUser(
    args: GetUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserCommandOutput) => void),
    cb?: (err: any, data?: GetUserCommandOutput) => void
  ): Promise<GetUserCommandOutput> | void {
    const command = new GetUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates a user attribute verification code for the specified attribute name. Sends a
   *             message to a user with a code that they must return in a VerifyUserAttribute
   *             request.</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   */
  public getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserAttributeVerificationCodeCommandOutput>;
  public getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    cb: (err: any, data?: GetUserAttributeVerificationCodeCommandOutput) => void
  ): void;
  public getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserAttributeVerificationCodeCommandOutput) => void
  ): void;
  public getUserAttributeVerificationCode(
    args: GetUserAttributeVerificationCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserAttributeVerificationCodeCommandOutput) => void),
    cb?: (err: any, data?: GetUserAttributeVerificationCodeCommandOutput) => void
  ): Promise<GetUserAttributeVerificationCodeCommandOutput> | void {
    const command = new GetUserAttributeVerificationCodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the user pool multi-factor authentication (MFA) configuration.</p>
   */
  public getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserPoolMfaConfigCommandOutput>;
  public getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    cb: (err: any, data?: GetUserPoolMfaConfigCommandOutput) => void
  ): void;
  public getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserPoolMfaConfigCommandOutput) => void
  ): void;
  public getUserPoolMfaConfig(
    args: GetUserPoolMfaConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserPoolMfaConfigCommandOutput) => void),
    cb?: (err: any, data?: GetUserPoolMfaConfigCommandOutput) => void
  ): Promise<GetUserPoolMfaConfigCommandOutput> | void {
    const command = new GetUserPoolMfaConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Signs out users from all devices. It also invalidates all refresh tokens that Amazon Cognito
   *             has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens
   *             for the duration of the 1-hour cookie validity period.</p>
   */
  public globalSignOut(
    args: GlobalSignOutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GlobalSignOutCommandOutput>;
  public globalSignOut(
    args: GlobalSignOutCommandInput,
    cb: (err: any, data?: GlobalSignOutCommandOutput) => void
  ): void;
  public globalSignOut(
    args: GlobalSignOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GlobalSignOutCommandOutput) => void
  ): void;
  public globalSignOut(
    args: GlobalSignOutCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GlobalSignOutCommandOutput) => void),
    cb?: (err: any, data?: GlobalSignOutCommandOutput) => void
  ): Promise<GlobalSignOutCommandOutput> | void {
    const command = new GlobalSignOutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Initiates sign-in for a user in the Amazon Cognito user directory. You can't sign in a user
   *             with a federated IdP with <code>InitiateAuth</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html"> Adding user pool sign-in through a third party</a>.</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   */
  public initiateAuth(
    args: InitiateAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateAuthCommandOutput>;
  public initiateAuth(args: InitiateAuthCommandInput, cb: (err: any, data?: InitiateAuthCommandOutput) => void): void;
  public initiateAuth(
    args: InitiateAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateAuthCommandOutput) => void
  ): void;
  public initiateAuth(
    args: InitiateAuthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InitiateAuthCommandOutput) => void),
    cb?: (err: any, data?: InitiateAuthCommandOutput) => void
  ): Promise<InitiateAuthCommandOutput> | void {
    const command = new InitiateAuthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the sign-in devices that Amazon Cognito has registered to the current user.</p>
   */
  public listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  public listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  public listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;
  public listDevices(
    args: ListDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevicesCommandOutput) => void),
    cb?: (err: any, data?: ListDevicesCommandOutput) => void
  ): Promise<ListDevicesCommandOutput> | void {
    const command = new ListDevicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the groups associated with a user pool.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  public listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  public listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupsCommandOutput) => void
  ): Promise<ListGroupsCommandOutput> | void {
    const command = new ListGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists information about all IdPs for a user pool.</p>
   */
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityProvidersCommandOutput>;
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIdentityProvidersCommandOutput) => void),
    cb?: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): Promise<ListIdentityProvidersCommandOutput> | void {
    const command = new ListIdentityProvidersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the resource servers for a user pool.</p>
   */
  public listResourceServers(
    args: ListResourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceServersCommandOutput>;
  public listResourceServers(
    args: ListResourceServersCommandInput,
    cb: (err: any, data?: ListResourceServersCommandOutput) => void
  ): void;
  public listResourceServers(
    args: ListResourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceServersCommandOutput) => void
  ): void;
  public listResourceServers(
    args: ListResourceServersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceServersCommandOutput) => void),
    cb?: (err: any, data?: ListResourceServersCommandOutput) => void
  ): Promise<ListResourceServersCommandOutput> | void {
    const command = new ListResourceServersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags that are assigned to an Amazon Cognito user pool.</p>
   *         <p>A tag is a label that you can apply to user pools to categorize and manage them in
   *             different ways, such as by purpose, owner, environment, or other criteria.</p>
   *         <p>You can use this action up to 10 times per second, per account.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the user import jobs.</p>
   */
  public listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserImportJobsCommandOutput>;
  public listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    cb: (err: any, data?: ListUserImportJobsCommandOutput) => void
  ): void;
  public listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserImportJobsCommandOutput) => void
  ): void;
  public listUserImportJobs(
    args: ListUserImportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserImportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListUserImportJobsCommandOutput) => void
  ): Promise<ListUserImportJobsCommandOutput> | void {
    const command = new ListUserImportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the clients that have been created for the specified user pool.</p>
   */
  public listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserPoolClientsCommandOutput>;
  public listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    cb: (err: any, data?: ListUserPoolClientsCommandOutput) => void
  ): void;
  public listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserPoolClientsCommandOutput) => void
  ): void;
  public listUserPoolClients(
    args: ListUserPoolClientsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserPoolClientsCommandOutput) => void),
    cb?: (err: any, data?: ListUserPoolClientsCommandOutput) => void
  ): Promise<ListUserPoolClientsCommandOutput> | void {
    const command = new ListUserPoolClientsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the user pools associated with an Amazon Web Services account.</p>
   */
  public listUserPools(
    args: ListUserPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserPoolsCommandOutput>;
  public listUserPools(
    args: ListUserPoolsCommandInput,
    cb: (err: any, data?: ListUserPoolsCommandOutput) => void
  ): void;
  public listUserPools(
    args: ListUserPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserPoolsCommandOutput) => void
  ): void;
  public listUserPools(
    args: ListUserPoolsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserPoolsCommandOutput) => void),
    cb?: (err: any, data?: ListUserPoolsCommandOutput) => void
  ): Promise<ListUserPoolsCommandOutput> | void {
    const command = new ListUserPoolsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the users in the Amazon Cognito user pool.</p>
   */
  public listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  public listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the users in the specified group.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersInGroupCommandOutput>;
  public listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    cb: (err: any, data?: ListUsersInGroupCommandOutput) => void
  ): void;
  public listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersInGroupCommandOutput) => void
  ): void;
  public listUsersInGroup(
    args: ListUsersInGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersInGroupCommandOutput) => void),
    cb?: (err: any, data?: ListUsersInGroupCommandOutput) => void
  ): Promise<ListUsersInGroupCommandOutput> | void {
    const command = new ListUsersInGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resends the confirmation (for confirmation of registration) to a specific user in the
   *             user pool.</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   */
  public resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResendConfirmationCodeCommandOutput>;
  public resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    cb: (err: any, data?: ResendConfirmationCodeCommandOutput) => void
  ): void;
  public resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResendConfirmationCodeCommandOutput) => void
  ): void;
  public resendConfirmationCode(
    args: ResendConfirmationCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResendConfirmationCodeCommandOutput) => void),
    cb?: (err: any, data?: ResendConfirmationCodeCommandOutput) => void
  ): Promise<ResendConfirmationCodeCommandOutput> | void {
    const command = new ResendConfirmationCodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Responds to the authentication challenge.</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   */
  public respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RespondToAuthChallengeCommandOutput>;
  public respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    cb: (err: any, data?: RespondToAuthChallengeCommandOutput) => void
  ): void;
  public respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RespondToAuthChallengeCommandOutput) => void
  ): void;
  public respondToAuthChallenge(
    args: RespondToAuthChallengeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RespondToAuthChallengeCommandOutput) => void),
    cb?: (err: any, data?: RespondToAuthChallengeCommandOutput) => void
  ): Promise<RespondToAuthChallengeCommandOutput> | void {
    const command = new RespondToAuthChallengeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Revokes all of the access tokens generated by, and at the same time as, the specified
   *             refresh token. After a token is revoked, you can't use the revoked token to access
   *             Amazon Cognito user APIs, or to authorize access to your resource server.</p>
   */
  public revokeToken(args: RevokeTokenCommandInput, options?: __HttpHandlerOptions): Promise<RevokeTokenCommandOutput>;
  public revokeToken(args: RevokeTokenCommandInput, cb: (err: any, data?: RevokeTokenCommandOutput) => void): void;
  public revokeToken(
    args: RevokeTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeTokenCommandOutput) => void
  ): void;
  public revokeToken(
    args: RevokeTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeTokenCommandOutput) => void),
    cb?: (err: any, data?: RevokeTokenCommandOutput) => void
  ): Promise<RevokeTokenCommandOutput> | void {
    const command = new RevokeTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures actions on detected risks. To delete the risk configuration for
   *                 <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four
   *             configuration types.</p>
   *         <p>To activate Amazon Cognito advanced security features, update the user pool to include the
   *                 <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
   */
  public setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetRiskConfigurationCommandOutput>;
  public setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    cb: (err: any, data?: SetRiskConfigurationCommandOutput) => void
  ): void;
  public setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetRiskConfigurationCommandOutput) => void
  ): void;
  public setRiskConfiguration(
    args: SetRiskConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetRiskConfigurationCommandOutput) => void),
    cb?: (err: any, data?: SetRiskConfigurationCommandOutput) => void
  ): Promise<SetRiskConfigurationCommandOutput> | void {
    const command = new SetRiskConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the user interface (UI) customization information for a user pool's built-in app
   *             UI.</p>
   *         <p>You can specify app UI customization settings for a single client (with a specific
   *                 <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to
   *                 <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is
   *             used for every client that has no previously set UI customization. If you specify UI
   *             customization settings for a particular client, it will no longer return to the
   *                 <code>ALL</code> configuration.</p>
   *         <note>
   *             <p>To use this API, your user pool must have a domain associated with it. Otherwise,
   *                 there is no place to host the app's pages, and the service will throw an
   *                 error.</p>
   *         </note>
   */
  public setUICustomization(
    args: SetUICustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetUICustomizationCommandOutput>;
  public setUICustomization(
    args: SetUICustomizationCommandInput,
    cb: (err: any, data?: SetUICustomizationCommandOutput) => void
  ): void;
  public setUICustomization(
    args: SetUICustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetUICustomizationCommandOutput) => void
  ): void;
  public setUICustomization(
    args: SetUICustomizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetUICustomizationCommandOutput) => void),
    cb?: (err: any, data?: SetUICustomizationCommandOutput) => void
  ): Promise<SetUICustomizationCommandOutput> | void {
    const command = new SetUICustomizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Set the user's multi-factor authentication (MFA) method preference, including which
   *             MFA factors are activated and if any are preferred. Only one factor can be set as
   *             preferred. The preferred MFA factor will be used to authenticate a user if multiple
   *             factors are activated. If multiple options are activated and no preference is set, a
   *             challenge to choose an MFA option will be returned during sign-in. If an MFA type is
   *             activated for a user, the user will be prompted for MFA during all sign-in attempts
   *             unless device tracking is turned on and the device has been trusted. If you want MFA to
   *             be applied selectively based on the assessed risk level of sign-in attempts, deactivate
   *             MFA for users and turn on Adaptive Authentication for the user pool.</p>
   */
  public setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetUserMFAPreferenceCommandOutput>;
  public setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    cb: (err: any, data?: SetUserMFAPreferenceCommandOutput) => void
  ): void;
  public setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetUserMFAPreferenceCommandOutput) => void
  ): void;
  public setUserMFAPreference(
    args: SetUserMFAPreferenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetUserMFAPreferenceCommandOutput) => void),
    cb?: (err: any, data?: SetUserMFAPreferenceCommandOutput) => void
  ): Promise<SetUserMFAPreferenceCommandOutput> | void {
    const command = new SetUserMFAPreferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the user pool multi-factor authentication (MFA) configuration.</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   */
  public setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetUserPoolMfaConfigCommandOutput>;
  public setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    cb: (err: any, data?: SetUserPoolMfaConfigCommandOutput) => void
  ): void;
  public setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetUserPoolMfaConfigCommandOutput) => void
  ): void;
  public setUserPoolMfaConfig(
    args: SetUserPoolMfaConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetUserPoolMfaConfigCommandOutput) => void),
    cb?: (err: any, data?: SetUserPoolMfaConfigCommandOutput) => void
  ): Promise<SetUserPoolMfaConfigCommandOutput> | void {
    const command = new SetUserPoolMfaConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <i>This action is no longer supported.</i> You can use it to configure
   *             only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software
   *             token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.</p>
   */
  public setUserSettings(
    args: SetUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetUserSettingsCommandOutput>;
  public setUserSettings(
    args: SetUserSettingsCommandInput,
    cb: (err: any, data?: SetUserSettingsCommandOutput) => void
  ): void;
  public setUserSettings(
    args: SetUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetUserSettingsCommandOutput) => void
  ): void;
  public setUserSettings(
    args: SetUserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: SetUserSettingsCommandOutput) => void
  ): Promise<SetUserSettingsCommandOutput> | void {
    const command = new SetUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers the user in the specified user pool and creates a user name, password, and
   *             user attributes.</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   */
  public signUp(args: SignUpCommandInput, options?: __HttpHandlerOptions): Promise<SignUpCommandOutput>;
  public signUp(args: SignUpCommandInput, cb: (err: any, data?: SignUpCommandOutput) => void): void;
  public signUp(
    args: SignUpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignUpCommandOutput) => void
  ): void;
  public signUp(
    args: SignUpCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SignUpCommandOutput) => void),
    cb?: (err: any, data?: SignUpCommandOutput) => void
  ): Promise<SignUpCommandOutput> | void {
    const command = new SignUpCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the user import.</p>
   */
  public startUserImportJob(
    args: StartUserImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartUserImportJobCommandOutput>;
  public startUserImportJob(
    args: StartUserImportJobCommandInput,
    cb: (err: any, data?: StartUserImportJobCommandOutput) => void
  ): void;
  public startUserImportJob(
    args: StartUserImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartUserImportJobCommandOutput) => void
  ): void;
  public startUserImportJob(
    args: StartUserImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartUserImportJobCommandOutput) => void),
    cb?: (err: any, data?: StartUserImportJobCommandOutput) => void
  ): Promise<StartUserImportJobCommandOutput> | void {
    const command = new StartUserImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops the user import job.</p>
   */
  public stopUserImportJob(
    args: StopUserImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopUserImportJobCommandOutput>;
  public stopUserImportJob(
    args: StopUserImportJobCommandInput,
    cb: (err: any, data?: StopUserImportJobCommandOutput) => void
  ): void;
  public stopUserImportJob(
    args: StopUserImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopUserImportJobCommandOutput) => void
  ): void;
  public stopUserImportJob(
    args: StopUserImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopUserImportJobCommandOutput) => void),
    cb?: (err: any, data?: StopUserImportJobCommandOutput) => void
  ): Promise<StopUserImportJobCommandOutput> | void {
    const command = new StopUserImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to
   *             categorize and manage user pools in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   *         <p>Each tag consists of a key and value, both of which you define. A key is a general
   *             category for more specific values. For example, if you have two versions of a user pool,
   *             one for testing and another for production, you might assign an <code>Environment</code>
   *             tag key to both user pools. The value of this key might be <code>Test</code> for one
   *             user pool, and <code>Production</code> for the other.</p>
   *         <p>Tags are useful for cost tracking and access control. You can activate your tags so
   *             that they appear on the Billing and Cost Management console, where you can track the
   *             costs associated with your user pools. In an Identity and Access Management policy, you can constrain
   *             permissions for user pools based on specific tags or tag values.</p>
   *         <p>You can use this action up to 5 times per second, per account. A user pool can have as
   *             many as 50 tags.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5
   *             times per second, per account.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides the feedback for an authentication event, whether it was from a valid user or
   *             not. This feedback is used for improving the risk evaluation decision for the user pool
   *             as part of Amazon Cognito advanced security.</p>
   */
  public updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuthEventFeedbackCommandOutput>;
  public updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    cb: (err: any, data?: UpdateAuthEventFeedbackCommandOutput) => void
  ): void;
  public updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuthEventFeedbackCommandOutput) => void
  ): void;
  public updateAuthEventFeedback(
    args: UpdateAuthEventFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAuthEventFeedbackCommandOutput) => void),
    cb?: (err: any, data?: UpdateAuthEventFeedbackCommandOutput) => void
  ): Promise<UpdateAuthEventFeedbackCommandOutput> | void {
    const command = new UpdateAuthEventFeedbackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the device status.</p>
   */
  public updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceStatusCommandOutput>;
  public updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    cb: (err: any, data?: UpdateDeviceStatusCommandOutput) => void
  ): void;
  public updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceStatusCommandOutput) => void
  ): void;
  public updateDeviceStatus(
    args: UpdateDeviceStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeviceStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeviceStatusCommandOutput) => void
  ): Promise<UpdateDeviceStatusCommandOutput> | void {
    const command = new UpdateDeviceStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified group with the specified attributes.</p>
   *         <p>Calling this action requires developer credentials.</p>
   */
  public updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  public updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupCommandOutput) => void
  ): Promise<UpdateGroupCommandOutput> | void {
    const command = new UpdateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates IdP information for a user pool.</p>
   */
  public updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdentityProviderCommandOutput>;
  public updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): void;
  public updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): void;
  public updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): Promise<UpdateIdentityProviderCommandOutput> | void {
    const command = new UpdateIdentityProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the name and scopes of resource server. All other fields are read-only.</p>
   *         <important>
   *             <p>If you don't provide a value for an attribute, it is set to the default
   *                 value.</p>
   *         </important>
   */
  public updateResourceServer(
    args: UpdateResourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceServerCommandOutput>;
  public updateResourceServer(
    args: UpdateResourceServerCommandInput,
    cb: (err: any, data?: UpdateResourceServerCommandOutput) => void
  ): void;
  public updateResourceServer(
    args: UpdateResourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceServerCommandOutput) => void
  ): void;
  public updateResourceServer(
    args: UpdateResourceServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceServerCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceServerCommandOutput) => void
  ): Promise<UpdateResourceServerCommandOutput> | void {
    const command = new UpdateResourceServerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows a user to update a specific attribute (one at a time).</p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   */
  public updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserAttributesCommandOutput>;
  public updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    cb: (err: any, data?: UpdateUserAttributesCommandOutput) => void
  ): void;
  public updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserAttributesCommandOutput) => void
  ): void;
  public updateUserAttributes(
    args: UpdateUserAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserAttributesCommandOutput) => void
  ): Promise<UpdateUserAttributesCommandOutput> | void {
    const command = new UpdateUserAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified user pool with the specified attributes. You can get a list of
   *             the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>. If you don't provide a value for an attribute, it will be
   *             set to the default value.
   *         </p>
   *
   *          <note>
   *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
   *                 require you to register an origination phone number before you can send SMS messages
   *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
   *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
   *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
   *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
   *                 in.</p>
   *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
   *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
   *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
   *                         mode</a>
   *                </i>, you can send messages only to verified phone
   *                 numbers. After you test your app while in the sandbox environment, you can move out
   *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
   *                     Developer Guide</i>.</p>
   *          </note>
   */
  public updateUserPool(
    args: UpdateUserPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserPoolCommandOutput>;
  public updateUserPool(
    args: UpdateUserPoolCommandInput,
    cb: (err: any, data?: UpdateUserPoolCommandOutput) => void
  ): void;
  public updateUserPool(
    args: UpdateUserPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserPoolCommandOutput) => void
  ): void;
  public updateUserPool(
    args: UpdateUserPoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserPoolCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserPoolCommandOutput) => void
  ): Promise<UpdateUserPoolCommandOutput> | void {
    const command = new UpdateUserPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified user pool app client with the specified attributes. You can get
   *             a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p>
   *         <important>
   *             <p>If you don't provide a value for an attribute, it will be set to the default
   *                 value.</p>
   *         </important>
   *         <p>You can also use this operation to enable token revocation for user pool clients. For
   *             more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
   */
  public updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserPoolClientCommandOutput>;
  public updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    cb: (err: any, data?: UpdateUserPoolClientCommandOutput) => void
  ): void;
  public updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserPoolClientCommandOutput) => void
  ): void;
  public updateUserPoolClient(
    args: UpdateUserPoolClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserPoolClientCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserPoolClientCommandOutput) => void
  ): Promise<UpdateUserPoolClientCommandOutput> | void {
    const command = new UpdateUserPoolClientCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user
   *             pool.</p>
   *         <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new
   *             certificate to Amazon Cognito. You can't use it to change the domain for a user pool.</p>
   *         <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and
   *             sign-in pages for your application. When you set up a custom domain, you provide a
   *             certificate that you manage with Certificate Manager (ACM). When necessary, you can use this
   *             operation to change the certificate that you applied to your custom domain.</p>
   *         <p>Usually, this is unnecessary following routine certificate renewal with ACM. When
   *             you renew your existing certificate in ACM, the ARN for your certificate remains the
   *             same, and your custom domain uses the new certificate automatically.</p>
   *         <p>However, if you replace your existing certificate with a new one, ACM gives the new
   *             certificate a new ARN. To apply the new certificate to your custom domain, you must
   *             provide this ARN to Amazon Cognito.</p>
   *         <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as
   *             the Amazon Web Services Region.</p>
   *         <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new
   *             certificate to your custom domain.</p>
   *         <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
   */
  public updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserPoolDomainCommandOutput>;
  public updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    cb: (err: any, data?: UpdateUserPoolDomainCommandOutput) => void
  ): void;
  public updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserPoolDomainCommandOutput) => void
  ): void;
  public updateUserPoolDomain(
    args: UpdateUserPoolDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserPoolDomainCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserPoolDomainCommandOutput) => void
  ): Promise<UpdateUserPoolDomainCommandOutput> | void {
    const command = new UpdateUserPoolDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use this API to register a user's entered time-based one-time password (TOTP) code and
   *             mark the user's software token MFA status as "verified" if successful. The request takes
   *             an access token or a session string, but not both.</p>
   */
  public verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifySoftwareTokenCommandOutput>;
  public verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    cb: (err: any, data?: VerifySoftwareTokenCommandOutput) => void
  ): void;
  public verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifySoftwareTokenCommandOutput) => void
  ): void;
  public verifySoftwareToken(
    args: VerifySoftwareTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: VerifySoftwareTokenCommandOutput) => void),
    cb?: (err: any, data?: VerifySoftwareTokenCommandOutput) => void
  ): Promise<VerifySoftwareTokenCommandOutput> | void {
    const command = new VerifySoftwareTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Verifies the specified user attributes in the user pool.</p>
   *         <p>
   *             If your user pool requires verification before Amazon Cognito updates the attribute value,
   *             VerifyUserAttribute updates the affected attribute to its pending value. For more information,
   *             see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserAttributeUpdateSettingsType.html">
   *             UserAttributeUpdateSettingsType</a>.
   *         </p>
   */
  public verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyUserAttributeCommandOutput>;
  public verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    cb: (err: any, data?: VerifyUserAttributeCommandOutput) => void
  ): void;
  public verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyUserAttributeCommandOutput) => void
  ): void;
  public verifyUserAttribute(
    args: VerifyUserAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: VerifyUserAttributeCommandOutput) => void),
    cb?: (err: any, data?: VerifyUserAttributeCommandOutput) => void
  ): Promise<VerifyUserAttributeCommandOutput> | void {
    const command = new VerifyUserAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
