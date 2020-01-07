"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CognitoIdentityProviderClient_1 = require("./CognitoIdentityProviderClient");
const AddCustomAttributesCommand_1 = require("./commands/AddCustomAttributesCommand");
const AdminAddUserToGroupCommand_1 = require("./commands/AdminAddUserToGroupCommand");
const AdminConfirmSignUpCommand_1 = require("./commands/AdminConfirmSignUpCommand");
const AdminCreateUserCommand_1 = require("./commands/AdminCreateUserCommand");
const AdminDeleteUserAttributesCommand_1 = require("./commands/AdminDeleteUserAttributesCommand");
const AdminDeleteUserCommand_1 = require("./commands/AdminDeleteUserCommand");
const AdminDisableProviderForUserCommand_1 = require("./commands/AdminDisableProviderForUserCommand");
const AdminDisableUserCommand_1 = require("./commands/AdminDisableUserCommand");
const AdminEnableUserCommand_1 = require("./commands/AdminEnableUserCommand");
const AdminForgetDeviceCommand_1 = require("./commands/AdminForgetDeviceCommand");
const AdminGetDeviceCommand_1 = require("./commands/AdminGetDeviceCommand");
const AdminGetUserCommand_1 = require("./commands/AdminGetUserCommand");
const AdminInitiateAuthCommand_1 = require("./commands/AdminInitiateAuthCommand");
const AdminLinkProviderForUserCommand_1 = require("./commands/AdminLinkProviderForUserCommand");
const AdminListDevicesCommand_1 = require("./commands/AdminListDevicesCommand");
const AdminListGroupsForUserCommand_1 = require("./commands/AdminListGroupsForUserCommand");
const AdminListUserAuthEventsCommand_1 = require("./commands/AdminListUserAuthEventsCommand");
const AdminRemoveUserFromGroupCommand_1 = require("./commands/AdminRemoveUserFromGroupCommand");
const AdminResetUserPasswordCommand_1 = require("./commands/AdminResetUserPasswordCommand");
const AdminRespondToAuthChallengeCommand_1 = require("./commands/AdminRespondToAuthChallengeCommand");
const AdminSetUserMFAPreferenceCommand_1 = require("./commands/AdminSetUserMFAPreferenceCommand");
const AdminSetUserPasswordCommand_1 = require("./commands/AdminSetUserPasswordCommand");
const AdminSetUserSettingsCommand_1 = require("./commands/AdminSetUserSettingsCommand");
const AdminUpdateAuthEventFeedbackCommand_1 = require("./commands/AdminUpdateAuthEventFeedbackCommand");
const AdminUpdateDeviceStatusCommand_1 = require("./commands/AdminUpdateDeviceStatusCommand");
const AdminUpdateUserAttributesCommand_1 = require("./commands/AdminUpdateUserAttributesCommand");
const AdminUserGlobalSignOutCommand_1 = require("./commands/AdminUserGlobalSignOutCommand");
const AssociateSoftwareTokenCommand_1 = require("./commands/AssociateSoftwareTokenCommand");
const ChangePasswordCommand_1 = require("./commands/ChangePasswordCommand");
const ConfirmDeviceCommand_1 = require("./commands/ConfirmDeviceCommand");
const ConfirmForgotPasswordCommand_1 = require("./commands/ConfirmForgotPasswordCommand");
const ConfirmSignUpCommand_1 = require("./commands/ConfirmSignUpCommand");
const CreateGroupCommand_1 = require("./commands/CreateGroupCommand");
const CreateIdentityProviderCommand_1 = require("./commands/CreateIdentityProviderCommand");
const CreateResourceServerCommand_1 = require("./commands/CreateResourceServerCommand");
const CreateUserImportJobCommand_1 = require("./commands/CreateUserImportJobCommand");
const CreateUserPoolClientCommand_1 = require("./commands/CreateUserPoolClientCommand");
const CreateUserPoolCommand_1 = require("./commands/CreateUserPoolCommand");
const CreateUserPoolDomainCommand_1 = require("./commands/CreateUserPoolDomainCommand");
const DeleteGroupCommand_1 = require("./commands/DeleteGroupCommand");
const DeleteIdentityProviderCommand_1 = require("./commands/DeleteIdentityProviderCommand");
const DeleteResourceServerCommand_1 = require("./commands/DeleteResourceServerCommand");
const DeleteUserAttributesCommand_1 = require("./commands/DeleteUserAttributesCommand");
const DeleteUserCommand_1 = require("./commands/DeleteUserCommand");
const DeleteUserPoolClientCommand_1 = require("./commands/DeleteUserPoolClientCommand");
const DeleteUserPoolCommand_1 = require("./commands/DeleteUserPoolCommand");
const DeleteUserPoolDomainCommand_1 = require("./commands/DeleteUserPoolDomainCommand");
const DescribeIdentityProviderCommand_1 = require("./commands/DescribeIdentityProviderCommand");
const DescribeResourceServerCommand_1 = require("./commands/DescribeResourceServerCommand");
const DescribeRiskConfigurationCommand_1 = require("./commands/DescribeRiskConfigurationCommand");
const DescribeUserImportJobCommand_1 = require("./commands/DescribeUserImportJobCommand");
const DescribeUserPoolClientCommand_1 = require("./commands/DescribeUserPoolClientCommand");
const DescribeUserPoolCommand_1 = require("./commands/DescribeUserPoolCommand");
const DescribeUserPoolDomainCommand_1 = require("./commands/DescribeUserPoolDomainCommand");
const ForgetDeviceCommand_1 = require("./commands/ForgetDeviceCommand");
const ForgotPasswordCommand_1 = require("./commands/ForgotPasswordCommand");
const GetCSVHeaderCommand_1 = require("./commands/GetCSVHeaderCommand");
const GetDeviceCommand_1 = require("./commands/GetDeviceCommand");
const GetGroupCommand_1 = require("./commands/GetGroupCommand");
const GetIdentityProviderByIdentifierCommand_1 = require("./commands/GetIdentityProviderByIdentifierCommand");
const GetSigningCertificateCommand_1 = require("./commands/GetSigningCertificateCommand");
const GetUICustomizationCommand_1 = require("./commands/GetUICustomizationCommand");
const GetUserAttributeVerificationCodeCommand_1 = require("./commands/GetUserAttributeVerificationCodeCommand");
const GetUserCommand_1 = require("./commands/GetUserCommand");
const GetUserPoolMfaConfigCommand_1 = require("./commands/GetUserPoolMfaConfigCommand");
const GlobalSignOutCommand_1 = require("./commands/GlobalSignOutCommand");
const InitiateAuthCommand_1 = require("./commands/InitiateAuthCommand");
const ListDevicesCommand_1 = require("./commands/ListDevicesCommand");
const ListGroupsCommand_1 = require("./commands/ListGroupsCommand");
const ListIdentityProvidersCommand_1 = require("./commands/ListIdentityProvidersCommand");
const ListResourceServersCommand_1 = require("./commands/ListResourceServersCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListUserImportJobsCommand_1 = require("./commands/ListUserImportJobsCommand");
const ListUserPoolClientsCommand_1 = require("./commands/ListUserPoolClientsCommand");
const ListUserPoolsCommand_1 = require("./commands/ListUserPoolsCommand");
const ListUsersCommand_1 = require("./commands/ListUsersCommand");
const ListUsersInGroupCommand_1 = require("./commands/ListUsersInGroupCommand");
const ResendConfirmationCodeCommand_1 = require("./commands/ResendConfirmationCodeCommand");
const RespondToAuthChallengeCommand_1 = require("./commands/RespondToAuthChallengeCommand");
const SetRiskConfigurationCommand_1 = require("./commands/SetRiskConfigurationCommand");
const SetUICustomizationCommand_1 = require("./commands/SetUICustomizationCommand");
const SetUserMFAPreferenceCommand_1 = require("./commands/SetUserMFAPreferenceCommand");
const SetUserPoolMfaConfigCommand_1 = require("./commands/SetUserPoolMfaConfigCommand");
const SetUserSettingsCommand_1 = require("./commands/SetUserSettingsCommand");
const SignUpCommand_1 = require("./commands/SignUpCommand");
const StartUserImportJobCommand_1 = require("./commands/StartUserImportJobCommand");
const StopUserImportJobCommand_1 = require("./commands/StopUserImportJobCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAuthEventFeedbackCommand_1 = require("./commands/UpdateAuthEventFeedbackCommand");
const UpdateDeviceStatusCommand_1 = require("./commands/UpdateDeviceStatusCommand");
const UpdateGroupCommand_1 = require("./commands/UpdateGroupCommand");
const UpdateIdentityProviderCommand_1 = require("./commands/UpdateIdentityProviderCommand");
const UpdateResourceServerCommand_1 = require("./commands/UpdateResourceServerCommand");
const UpdateUserAttributesCommand_1 = require("./commands/UpdateUserAttributesCommand");
const UpdateUserPoolClientCommand_1 = require("./commands/UpdateUserPoolClientCommand");
const UpdateUserPoolCommand_1 = require("./commands/UpdateUserPoolCommand");
const UpdateUserPoolDomainCommand_1 = require("./commands/UpdateUserPoolDomainCommand");
const VerifySoftwareTokenCommand_1 = require("./commands/VerifySoftwareTokenCommand");
const VerifyUserAttributeCommand_1 = require("./commands/VerifyUserAttributeCommand");
/**
 * <p>Using the Amazon Cognito User Pools API, you can create a user pool to manage
 *             directories and users. You can authenticate a user to obtain tokens related to user
 *             identity and access policies.</p>
 *         <p>This API reference provides information about user pools in Amazon Cognito User
 *             Pools.</p>
 *         <p>For more information, see the Amazon Cognito Documentation.</p>
 */
class CognitoIdentityProvider extends CognitoIdentityProviderClient_1.CognitoIdentityProviderClient {
    addCustomAttributes(args, optionsOrCb, cb) {
        const command = new AddCustomAttributesCommand_1.AddCustomAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminAddUserToGroup(args, optionsOrCb, cb) {
        const command = new AdminAddUserToGroupCommand_1.AdminAddUserToGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminConfirmSignUp(args, optionsOrCb, cb) {
        const command = new AdminConfirmSignUpCommand_1.AdminConfirmSignUpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminCreateUser(args, optionsOrCb, cb) {
        const command = new AdminCreateUserCommand_1.AdminCreateUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminDeleteUser(args, optionsOrCb, cb) {
        const command = new AdminDeleteUserCommand_1.AdminDeleteUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminDeleteUserAttributes(args, optionsOrCb, cb) {
        const command = new AdminDeleteUserAttributesCommand_1.AdminDeleteUserAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminDisableProviderForUser(args, optionsOrCb, cb) {
        const command = new AdminDisableProviderForUserCommand_1.AdminDisableProviderForUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminDisableUser(args, optionsOrCb, cb) {
        const command = new AdminDisableUserCommand_1.AdminDisableUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminEnableUser(args, optionsOrCb, cb) {
        const command = new AdminEnableUserCommand_1.AdminEnableUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminForgetDevice(args, optionsOrCb, cb) {
        const command = new AdminForgetDeviceCommand_1.AdminForgetDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminGetDevice(args, optionsOrCb, cb) {
        const command = new AdminGetDeviceCommand_1.AdminGetDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminGetUser(args, optionsOrCb, cb) {
        const command = new AdminGetUserCommand_1.AdminGetUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminInitiateAuth(args, optionsOrCb, cb) {
        const command = new AdminInitiateAuthCommand_1.AdminInitiateAuthCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminLinkProviderForUser(args, optionsOrCb, cb) {
        const command = new AdminLinkProviderForUserCommand_1.AdminLinkProviderForUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminListDevices(args, optionsOrCb, cb) {
        const command = new AdminListDevicesCommand_1.AdminListDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminListGroupsForUser(args, optionsOrCb, cb) {
        const command = new AdminListGroupsForUserCommand_1.AdminListGroupsForUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminListUserAuthEvents(args, optionsOrCb, cb) {
        const command = new AdminListUserAuthEventsCommand_1.AdminListUserAuthEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminRemoveUserFromGroup(args, optionsOrCb, cb) {
        const command = new AdminRemoveUserFromGroupCommand_1.AdminRemoveUserFromGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminResetUserPassword(args, optionsOrCb, cb) {
        const command = new AdminResetUserPasswordCommand_1.AdminResetUserPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminRespondToAuthChallenge(args, optionsOrCb, cb) {
        const command = new AdminRespondToAuthChallengeCommand_1.AdminRespondToAuthChallengeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminSetUserMFAPreference(args, optionsOrCb, cb) {
        const command = new AdminSetUserMFAPreferenceCommand_1.AdminSetUserMFAPreferenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminSetUserPassword(args, optionsOrCb, cb) {
        const command = new AdminSetUserPasswordCommand_1.AdminSetUserPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminSetUserSettings(args, optionsOrCb, cb) {
        const command = new AdminSetUserSettingsCommand_1.AdminSetUserSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminUpdateAuthEventFeedback(args, optionsOrCb, cb) {
        const command = new AdminUpdateAuthEventFeedbackCommand_1.AdminUpdateAuthEventFeedbackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminUpdateDeviceStatus(args, optionsOrCb, cb) {
        const command = new AdminUpdateDeviceStatusCommand_1.AdminUpdateDeviceStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminUpdateUserAttributes(args, optionsOrCb, cb) {
        const command = new AdminUpdateUserAttributesCommand_1.AdminUpdateUserAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    adminUserGlobalSignOut(args, optionsOrCb, cb) {
        const command = new AdminUserGlobalSignOutCommand_1.AdminUserGlobalSignOutCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateSoftwareToken(args, optionsOrCb, cb) {
        const command = new AssociateSoftwareTokenCommand_1.AssociateSoftwareTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    changePassword(args, optionsOrCb, cb) {
        const command = new ChangePasswordCommand_1.ChangePasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    confirmDevice(args, optionsOrCb, cb) {
        const command = new ConfirmDeviceCommand_1.ConfirmDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    confirmForgotPassword(args, optionsOrCb, cb) {
        const command = new ConfirmForgotPasswordCommand_1.ConfirmForgotPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    confirmSignUp(args, optionsOrCb, cb) {
        const command = new ConfirmSignUpCommand_1.ConfirmSignUpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGroup(args, optionsOrCb, cb) {
        const command = new CreateGroupCommand_1.CreateGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createIdentityProvider(args, optionsOrCb, cb) {
        const command = new CreateIdentityProviderCommand_1.CreateIdentityProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createResourceServer(args, optionsOrCb, cb) {
        const command = new CreateResourceServerCommand_1.CreateResourceServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUserImportJob(args, optionsOrCb, cb) {
        const command = new CreateUserImportJobCommand_1.CreateUserImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUserPool(args, optionsOrCb, cb) {
        const command = new CreateUserPoolCommand_1.CreateUserPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUserPoolClient(args, optionsOrCb, cb) {
        const command = new CreateUserPoolClientCommand_1.CreateUserPoolClientCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUserPoolDomain(args, optionsOrCb, cb) {
        const command = new CreateUserPoolDomainCommand_1.CreateUserPoolDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteGroup(args, optionsOrCb, cb) {
        const command = new DeleteGroupCommand_1.DeleteGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteIdentityProvider(args, optionsOrCb, cb) {
        const command = new DeleteIdentityProviderCommand_1.DeleteIdentityProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteResourceServer(args, optionsOrCb, cb) {
        const command = new DeleteResourceServerCommand_1.DeleteResourceServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUser(args, optionsOrCb, cb) {
        const command = new DeleteUserCommand_1.DeleteUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUserAttributes(args, optionsOrCb, cb) {
        const command = new DeleteUserAttributesCommand_1.DeleteUserAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUserPool(args, optionsOrCb, cb) {
        const command = new DeleteUserPoolCommand_1.DeleteUserPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUserPoolClient(args, optionsOrCb, cb) {
        const command = new DeleteUserPoolClientCommand_1.DeleteUserPoolClientCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUserPoolDomain(args, optionsOrCb, cb) {
        const command = new DeleteUserPoolDomainCommand_1.DeleteUserPoolDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeIdentityProvider(args, optionsOrCb, cb) {
        const command = new DescribeIdentityProviderCommand_1.DescribeIdentityProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeResourceServer(args, optionsOrCb, cb) {
        const command = new DescribeResourceServerCommand_1.DescribeResourceServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRiskConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeRiskConfigurationCommand_1.DescribeRiskConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUserImportJob(args, optionsOrCb, cb) {
        const command = new DescribeUserImportJobCommand_1.DescribeUserImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUserPool(args, optionsOrCb, cb) {
        const command = new DescribeUserPoolCommand_1.DescribeUserPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUserPoolClient(args, optionsOrCb, cb) {
        const command = new DescribeUserPoolClientCommand_1.DescribeUserPoolClientCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUserPoolDomain(args, optionsOrCb, cb) {
        const command = new DescribeUserPoolDomainCommand_1.DescribeUserPoolDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    forgetDevice(args, optionsOrCb, cb) {
        const command = new ForgetDeviceCommand_1.ForgetDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    forgotPassword(args, optionsOrCb, cb) {
        const command = new ForgotPasswordCommand_1.ForgotPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCSVHeader(args, optionsOrCb, cb) {
        const command = new GetCSVHeaderCommand_1.GetCSVHeaderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDevice(args, optionsOrCb, cb) {
        const command = new GetDeviceCommand_1.GetDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getGroup(args, optionsOrCb, cb) {
        const command = new GetGroupCommand_1.GetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getIdentityProviderByIdentifier(args, optionsOrCb, cb) {
        const command = new GetIdentityProviderByIdentifierCommand_1.GetIdentityProviderByIdentifierCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSigningCertificate(args, optionsOrCb, cb) {
        const command = new GetSigningCertificateCommand_1.GetSigningCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getUICustomization(args, optionsOrCb, cb) {
        const command = new GetUICustomizationCommand_1.GetUICustomizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getUser(args, optionsOrCb, cb) {
        const command = new GetUserCommand_1.GetUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getUserAttributeVerificationCode(args, optionsOrCb, cb) {
        const command = new GetUserAttributeVerificationCodeCommand_1.GetUserAttributeVerificationCodeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getUserPoolMfaConfig(args, optionsOrCb, cb) {
        const command = new GetUserPoolMfaConfigCommand_1.GetUserPoolMfaConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    globalSignOut(args, optionsOrCb, cb) {
        const command = new GlobalSignOutCommand_1.GlobalSignOutCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    initiateAuth(args, optionsOrCb, cb) {
        const command = new InitiateAuthCommand_1.InitiateAuthCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDevices(args, optionsOrCb, cb) {
        const command = new ListDevicesCommand_1.ListDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGroups(args, optionsOrCb, cb) {
        const command = new ListGroupsCommand_1.ListGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listIdentityProviders(args, optionsOrCb, cb) {
        const command = new ListIdentityProvidersCommand_1.ListIdentityProvidersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResourceServers(args, optionsOrCb, cb) {
        const command = new ListResourceServersCommand_1.ListResourceServersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUserImportJobs(args, optionsOrCb, cb) {
        const command = new ListUserImportJobsCommand_1.ListUserImportJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUserPoolClients(args, optionsOrCb, cb) {
        const command = new ListUserPoolClientsCommand_1.ListUserPoolClientsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUserPools(args, optionsOrCb, cb) {
        const command = new ListUserPoolsCommand_1.ListUserPoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUsers(args, optionsOrCb, cb) {
        const command = new ListUsersCommand_1.ListUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUsersInGroup(args, optionsOrCb, cb) {
        const command = new ListUsersInGroupCommand_1.ListUsersInGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resendConfirmationCode(args, optionsOrCb, cb) {
        const command = new ResendConfirmationCodeCommand_1.ResendConfirmationCodeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    respondToAuthChallenge(args, optionsOrCb, cb) {
        const command = new RespondToAuthChallengeCommand_1.RespondToAuthChallengeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setRiskConfiguration(args, optionsOrCb, cb) {
        const command = new SetRiskConfigurationCommand_1.SetRiskConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setUICustomization(args, optionsOrCb, cb) {
        const command = new SetUICustomizationCommand_1.SetUICustomizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setUserMFAPreference(args, optionsOrCb, cb) {
        const command = new SetUserMFAPreferenceCommand_1.SetUserMFAPreferenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setUserPoolMfaConfig(args, optionsOrCb, cb) {
        const command = new SetUserPoolMfaConfigCommand_1.SetUserPoolMfaConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setUserSettings(args, optionsOrCb, cb) {
        const command = new SetUserSettingsCommand_1.SetUserSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    signUp(args, optionsOrCb, cb) {
        const command = new SignUpCommand_1.SignUpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startUserImportJob(args, optionsOrCb, cb) {
        const command = new StartUserImportJobCommand_1.StartUserImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopUserImportJob(args, optionsOrCb, cb) {
        const command = new StopUserImportJobCommand_1.StopUserImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAuthEventFeedback(args, optionsOrCb, cb) {
        const command = new UpdateAuthEventFeedbackCommand_1.UpdateAuthEventFeedbackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDeviceStatus(args, optionsOrCb, cb) {
        const command = new UpdateDeviceStatusCommand_1.UpdateDeviceStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGroup(args, optionsOrCb, cb) {
        const command = new UpdateGroupCommand_1.UpdateGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateIdentityProvider(args, optionsOrCb, cb) {
        const command = new UpdateIdentityProviderCommand_1.UpdateIdentityProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateResourceServer(args, optionsOrCb, cb) {
        const command = new UpdateResourceServerCommand_1.UpdateResourceServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserAttributes(args, optionsOrCb, cb) {
        const command = new UpdateUserAttributesCommand_1.UpdateUserAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserPool(args, optionsOrCb, cb) {
        const command = new UpdateUserPoolCommand_1.UpdateUserPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserPoolClient(args, optionsOrCb, cb) {
        const command = new UpdateUserPoolClientCommand_1.UpdateUserPoolClientCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserPoolDomain(args, optionsOrCb, cb) {
        const command = new UpdateUserPoolDomainCommand_1.UpdateUserPoolDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    verifySoftwareToken(args, optionsOrCb, cb) {
        const command = new VerifySoftwareTokenCommand_1.VerifySoftwareTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    verifyUserAttribute(args, optionsOrCb, cb) {
        const command = new VerifyUserAttributeCommand_1.VerifyUserAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.CognitoIdentityProvider = CognitoIdentityProvider;
//# sourceMappingURL=CognitoIdentityProvider.js.map