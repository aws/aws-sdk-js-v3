"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddCustomAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AddCustomAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddCustomAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddCustomAttributesCommand = serializeAws_json1_1AddCustomAttributesCommand;
async function serializeAws_json1_1AdminAddUserToGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminAddUserToGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminAddUserToGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminAddUserToGroupCommand = serializeAws_json1_1AdminAddUserToGroupCommand;
async function serializeAws_json1_1AdminConfirmSignUpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminConfirmSignUp";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminConfirmSignUpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminConfirmSignUpCommand = serializeAws_json1_1AdminConfirmSignUpCommand;
async function serializeAws_json1_1AdminCreateUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.AdminCreateUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminCreateUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminCreateUserCommand = serializeAws_json1_1AdminCreateUserCommand;
async function serializeAws_json1_1AdminDeleteUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.AdminDeleteUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminDeleteUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminDeleteUserCommand = serializeAws_json1_1AdminDeleteUserCommand;
async function serializeAws_json1_1AdminDeleteUserAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminDeleteUserAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminDeleteUserAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminDeleteUserAttributesCommand = serializeAws_json1_1AdminDeleteUserAttributesCommand;
async function serializeAws_json1_1AdminDisableProviderForUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminDisableProviderForUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminDisableProviderForUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminDisableProviderForUserCommand = serializeAws_json1_1AdminDisableProviderForUserCommand;
async function serializeAws_json1_1AdminDisableUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminDisableUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminDisableUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminDisableUserCommand = serializeAws_json1_1AdminDisableUserCommand;
async function serializeAws_json1_1AdminEnableUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.AdminEnableUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminEnableUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminEnableUserCommand = serializeAws_json1_1AdminEnableUserCommand;
async function serializeAws_json1_1AdminForgetDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminForgetDevice";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminForgetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminForgetDeviceCommand = serializeAws_json1_1AdminForgetDeviceCommand;
async function serializeAws_json1_1AdminGetDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.AdminGetDevice";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminGetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminGetDeviceCommand = serializeAws_json1_1AdminGetDeviceCommand;
async function serializeAws_json1_1AdminGetUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.AdminGetUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminGetUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminGetUserCommand = serializeAws_json1_1AdminGetUserCommand;
async function serializeAws_json1_1AdminInitiateAuthCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminInitiateAuth";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminInitiateAuthRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminInitiateAuthCommand = serializeAws_json1_1AdminInitiateAuthCommand;
async function serializeAws_json1_1AdminLinkProviderForUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminLinkProviderForUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminLinkProviderForUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminLinkProviderForUserCommand = serializeAws_json1_1AdminLinkProviderForUserCommand;
async function serializeAws_json1_1AdminListDevicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminListDevices";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminListDevicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminListDevicesCommand = serializeAws_json1_1AdminListDevicesCommand;
async function serializeAws_json1_1AdminListGroupsForUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminListGroupsForUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminListGroupsForUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminListGroupsForUserCommand = serializeAws_json1_1AdminListGroupsForUserCommand;
async function serializeAws_json1_1AdminListUserAuthEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminListUserAuthEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminListUserAuthEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminListUserAuthEventsCommand = serializeAws_json1_1AdminListUserAuthEventsCommand;
async function serializeAws_json1_1AdminRemoveUserFromGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminRemoveUserFromGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminRemoveUserFromGroupCommand = serializeAws_json1_1AdminRemoveUserFromGroupCommand;
async function serializeAws_json1_1AdminResetUserPasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminResetUserPassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminResetUserPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminResetUserPasswordCommand = serializeAws_json1_1AdminResetUserPasswordCommand;
async function serializeAws_json1_1AdminRespondToAuthChallengeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminRespondToAuthChallengeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminRespondToAuthChallengeCommand = serializeAws_json1_1AdminRespondToAuthChallengeCommand;
async function serializeAws_json1_1AdminSetUserMFAPreferenceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminSetUserMFAPreference";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminSetUserMFAPreferenceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminSetUserMFAPreferenceCommand = serializeAws_json1_1AdminSetUserMFAPreferenceCommand;
async function serializeAws_json1_1AdminSetUserPasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminSetUserPassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminSetUserPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminSetUserPasswordCommand = serializeAws_json1_1AdminSetUserPasswordCommand;
async function serializeAws_json1_1AdminSetUserSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminSetUserSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminSetUserSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminSetUserSettingsCommand = serializeAws_json1_1AdminSetUserSettingsCommand;
async function serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminUpdateAuthEventFeedbackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand = serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand;
async function serializeAws_json1_1AdminUpdateDeviceStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminUpdateDeviceStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminUpdateDeviceStatusCommand = serializeAws_json1_1AdminUpdateDeviceStatusCommand;
async function serializeAws_json1_1AdminUpdateUserAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminUpdateUserAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminUpdateUserAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminUpdateUserAttributesCommand = serializeAws_json1_1AdminUpdateUserAttributesCommand;
async function serializeAws_json1_1AdminUserGlobalSignOutCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AdminUserGlobalSignOut";
    let body;
    body = JSON.stringify(serializeAws_json1_1AdminUserGlobalSignOutRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AdminUserGlobalSignOutCommand = serializeAws_json1_1AdminUserGlobalSignOutCommand;
async function serializeAws_json1_1AssociateSoftwareTokenCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.AssociateSoftwareToken";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateSoftwareTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateSoftwareTokenCommand = serializeAws_json1_1AssociateSoftwareTokenCommand;
async function serializeAws_json1_1ChangePasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.ChangePassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1ChangePasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ChangePasswordCommand = serializeAws_json1_1ChangePasswordCommand;
async function serializeAws_json1_1ConfirmDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.ConfirmDevice";
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ConfirmDeviceCommand = serializeAws_json1_1ConfirmDeviceCommand;
async function serializeAws_json1_1ConfirmForgotPasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.ConfirmForgotPassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmForgotPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ConfirmForgotPasswordCommand = serializeAws_json1_1ConfirmForgotPasswordCommand;
async function serializeAws_json1_1ConfirmSignUpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.ConfirmSignUp";
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmSignUpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ConfirmSignUpCommand = serializeAws_json1_1ConfirmSignUpCommand;
async function serializeAws_json1_1CreateGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.CreateGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateGroupCommand = serializeAws_json1_1CreateGroupCommand;
async function serializeAws_json1_1CreateIdentityProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.CreateIdentityProvider";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIdentityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateIdentityProviderCommand = serializeAws_json1_1CreateIdentityProviderCommand;
async function serializeAws_json1_1CreateResourceServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.CreateResourceServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResourceServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateResourceServerCommand = serializeAws_json1_1CreateResourceServerCommand;
async function serializeAws_json1_1CreateUserImportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.CreateUserImportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserImportJobCommand = serializeAws_json1_1CreateUserImportJobCommand;
async function serializeAws_json1_1CreateUserPoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.CreateUserPool";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserPoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserPoolCommand = serializeAws_json1_1CreateUserPoolCommand;
async function serializeAws_json1_1CreateUserPoolClientCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.CreateUserPoolClient";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserPoolClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserPoolClientCommand = serializeAws_json1_1CreateUserPoolClientCommand;
async function serializeAws_json1_1CreateUserPoolDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.CreateUserPoolDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserPoolDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserPoolDomainCommand = serializeAws_json1_1CreateUserPoolDomainCommand;
async function serializeAws_json1_1DeleteGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.DeleteGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteGroupCommand = serializeAws_json1_1DeleteGroupCommand;
async function serializeAws_json1_1DeleteIdentityProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DeleteIdentityProvider";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIdentityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteIdentityProviderCommand = serializeAws_json1_1DeleteIdentityProviderCommand;
async function serializeAws_json1_1DeleteResourceServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DeleteResourceServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourceServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteResourceServerCommand = serializeAws_json1_1DeleteResourceServerCommand;
async function serializeAws_json1_1DeleteUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.DeleteUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserCommand = serializeAws_json1_1DeleteUserCommand;
async function serializeAws_json1_1DeleteUserAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DeleteUserAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserAttributesCommand = serializeAws_json1_1DeleteUserAttributesCommand;
async function serializeAws_json1_1DeleteUserPoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.DeleteUserPool";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserPoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserPoolCommand = serializeAws_json1_1DeleteUserPoolCommand;
async function serializeAws_json1_1DeleteUserPoolClientCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DeleteUserPoolClient";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserPoolClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserPoolClientCommand = serializeAws_json1_1DeleteUserPoolClientCommand;
async function serializeAws_json1_1DeleteUserPoolDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DeleteUserPoolDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserPoolDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserPoolDomainCommand = serializeAws_json1_1DeleteUserPoolDomainCommand;
async function serializeAws_json1_1DescribeIdentityProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DescribeIdentityProvider";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIdentityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeIdentityProviderCommand = serializeAws_json1_1DescribeIdentityProviderCommand;
async function serializeAws_json1_1DescribeResourceServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DescribeResourceServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeResourceServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeResourceServerCommand = serializeAws_json1_1DescribeResourceServerCommand;
async function serializeAws_json1_1DescribeRiskConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DescribeRiskConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRiskConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRiskConfigurationCommand = serializeAws_json1_1DescribeRiskConfigurationCommand;
async function serializeAws_json1_1DescribeUserImportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DescribeUserImportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUserImportJobCommand = serializeAws_json1_1DescribeUserImportJobCommand;
async function serializeAws_json1_1DescribeUserPoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DescribeUserPool";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserPoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUserPoolCommand = serializeAws_json1_1DescribeUserPoolCommand;
async function serializeAws_json1_1DescribeUserPoolClientCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DescribeUserPoolClient";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserPoolClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUserPoolClientCommand = serializeAws_json1_1DescribeUserPoolClientCommand;
async function serializeAws_json1_1DescribeUserPoolDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.DescribeUserPoolDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserPoolDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUserPoolDomainCommand = serializeAws_json1_1DescribeUserPoolDomainCommand;
async function serializeAws_json1_1ForgetDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.ForgetDevice";
    let body;
    body = JSON.stringify(serializeAws_json1_1ForgetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ForgetDeviceCommand = serializeAws_json1_1ForgetDeviceCommand;
async function serializeAws_json1_1ForgotPasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.ForgotPassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1ForgotPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ForgotPasswordCommand = serializeAws_json1_1ForgotPasswordCommand;
async function serializeAws_json1_1GetCSVHeaderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.GetCSVHeader";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCSVHeaderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCSVHeaderCommand = serializeAws_json1_1GetCSVHeaderCommand;
async function serializeAws_json1_1GetDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.GetDevice";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDeviceCommand = serializeAws_json1_1GetDeviceCommand;
async function serializeAws_json1_1GetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.GetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetGroupCommand = serializeAws_json1_1GetGroupCommand;
async function serializeAws_json1_1GetIdentityProviderByIdentifierCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIdentityProviderByIdentifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetIdentityProviderByIdentifierCommand = serializeAws_json1_1GetIdentityProviderByIdentifierCommand;
async function serializeAws_json1_1GetSigningCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.GetSigningCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSigningCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSigningCertificateCommand = serializeAws_json1_1GetSigningCertificateCommand;
async function serializeAws_json1_1GetUICustomizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.GetUICustomization";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUICustomizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetUICustomizationCommand = serializeAws_json1_1GetUICustomizationCommand;
async function serializeAws_json1_1GetUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.GetUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetUserCommand = serializeAws_json1_1GetUserCommand;
async function serializeAws_json1_1GetUserAttributeVerificationCodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUserAttributeVerificationCodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetUserAttributeVerificationCodeCommand = serializeAws_json1_1GetUserAttributeVerificationCodeCommand;
async function serializeAws_json1_1GetUserPoolMfaConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.GetUserPoolMfaConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUserPoolMfaConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetUserPoolMfaConfigCommand = serializeAws_json1_1GetUserPoolMfaConfigCommand;
async function serializeAws_json1_1GlobalSignOutCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.GlobalSignOut";
    let body;
    body = JSON.stringify(serializeAws_json1_1GlobalSignOutRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GlobalSignOutCommand = serializeAws_json1_1GlobalSignOutCommand;
async function serializeAws_json1_1InitiateAuthCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.InitiateAuth";
    let body;
    body = JSON.stringify(serializeAws_json1_1InitiateAuthRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1InitiateAuthCommand = serializeAws_json1_1InitiateAuthCommand;
async function serializeAws_json1_1ListDevicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.ListDevices";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDevicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDevicesCommand = serializeAws_json1_1ListDevicesCommand;
async function serializeAws_json1_1ListGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.ListGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListGroupsCommand = serializeAws_json1_1ListGroupsCommand;
async function serializeAws_json1_1ListIdentityProvidersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.ListIdentityProviders";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIdentityProvidersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListIdentityProvidersCommand = serializeAws_json1_1ListIdentityProvidersCommand;
async function serializeAws_json1_1ListResourceServersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.ListResourceServers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceServersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourceServersCommand = serializeAws_json1_1ListResourceServersCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListUserImportJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.ListUserImportJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUserImportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUserImportJobsCommand = serializeAws_json1_1ListUserImportJobsCommand;
async function serializeAws_json1_1ListUserPoolClientsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.ListUserPoolClients";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUserPoolClientsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUserPoolClientsCommand = serializeAws_json1_1ListUserPoolClientsCommand;
async function serializeAws_json1_1ListUserPoolsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.ListUserPools";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUserPoolsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUserPoolsCommand = serializeAws_json1_1ListUserPoolsCommand;
async function serializeAws_json1_1ListUsersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.ListUsers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUsersCommand = serializeAws_json1_1ListUsersCommand;
async function serializeAws_json1_1ListUsersInGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.ListUsersInGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUsersInGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUsersInGroupCommand = serializeAws_json1_1ListUsersInGroupCommand;
async function serializeAws_json1_1ResendConfirmationCodeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.ResendConfirmationCode";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResendConfirmationCodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResendConfirmationCodeCommand = serializeAws_json1_1ResendConfirmationCodeCommand;
async function serializeAws_json1_1RespondToAuthChallengeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.RespondToAuthChallenge";
    let body;
    body = JSON.stringify(serializeAws_json1_1RespondToAuthChallengeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RespondToAuthChallengeCommand = serializeAws_json1_1RespondToAuthChallengeCommand;
async function serializeAws_json1_1SetRiskConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.SetRiskConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetRiskConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetRiskConfigurationCommand = serializeAws_json1_1SetRiskConfigurationCommand;
async function serializeAws_json1_1SetUICustomizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.SetUICustomization";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetUICustomizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetUICustomizationCommand = serializeAws_json1_1SetUICustomizationCommand;
async function serializeAws_json1_1SetUserMFAPreferenceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.SetUserMFAPreference";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetUserMFAPreferenceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetUserMFAPreferenceCommand = serializeAws_json1_1SetUserMFAPreferenceCommand;
async function serializeAws_json1_1SetUserPoolMfaConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.SetUserPoolMfaConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetUserPoolMfaConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetUserPoolMfaConfigCommand = serializeAws_json1_1SetUserPoolMfaConfigCommand;
async function serializeAws_json1_1SetUserSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.SetUserSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetUserSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetUserSettingsCommand = serializeAws_json1_1SetUserSettingsCommand;
async function serializeAws_json1_1SignUpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.SignUp";
    let body;
    body = JSON.stringify(serializeAws_json1_1SignUpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SignUpCommand = serializeAws_json1_1SignUpCommand;
async function serializeAws_json1_1StartUserImportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.StartUserImportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartUserImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartUserImportJobCommand = serializeAws_json1_1StartUserImportJobCommand;
async function serializeAws_json1_1StopUserImportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.StopUserImportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopUserImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopUserImportJobCommand = serializeAws_json1_1StopUserImportJobCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateAuthEventFeedbackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.UpdateAuthEventFeedback";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAuthEventFeedbackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAuthEventFeedbackCommand = serializeAws_json1_1UpdateAuthEventFeedbackCommand;
async function serializeAws_json1_1UpdateDeviceStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.UpdateDeviceStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDeviceStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDeviceStatusCommand = serializeAws_json1_1UpdateDeviceStatusCommand;
async function serializeAws_json1_1UpdateGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.UpdateGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateGroupCommand = serializeAws_json1_1UpdateGroupCommand;
async function serializeAws_json1_1UpdateIdentityProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.UpdateIdentityProvider";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateIdentityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateIdentityProviderCommand = serializeAws_json1_1UpdateIdentityProviderCommand;
async function serializeAws_json1_1UpdateResourceServerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.UpdateResourceServer";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResourceServerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateResourceServerCommand = serializeAws_json1_1UpdateResourceServerCommand;
async function serializeAws_json1_1UpdateUserAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.UpdateUserAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateUserAttributesCommand = serializeAws_json1_1UpdateUserAttributesCommand;
async function serializeAws_json1_1UpdateUserPoolCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService.UpdateUserPool";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserPoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateUserPoolCommand = serializeAws_json1_1UpdateUserPoolCommand;
async function serializeAws_json1_1UpdateUserPoolClientCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.UpdateUserPoolClient";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserPoolClientRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateUserPoolClientCommand = serializeAws_json1_1UpdateUserPoolClientCommand;
async function serializeAws_json1_1UpdateUserPoolDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.UpdateUserPoolDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserPoolDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateUserPoolDomainCommand = serializeAws_json1_1UpdateUserPoolDomainCommand;
async function serializeAws_json1_1VerifySoftwareTokenCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.VerifySoftwareToken";
    let body;
    body = JSON.stringify(serializeAws_json1_1VerifySoftwareTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1VerifySoftwareTokenCommand = serializeAws_json1_1VerifySoftwareTokenCommand;
async function serializeAws_json1_1VerifyUserAttributeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSCognitoIdentityProviderService.VerifyUserAttribute";
    let body;
    body = JSON.stringify(serializeAws_json1_1VerifyUserAttributeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1VerifyUserAttributeCommand = serializeAws_json1_1VerifyUserAttributeCommand;
async function deserializeAws_json1_1AddCustomAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddCustomAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddCustomAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddCustomAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddCustomAttributesCommand = deserializeAws_json1_1AddCustomAttributesCommand;
async function deserializeAws_json1_1AddCustomAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserImportInProgressException":
        case "com.amazonaws.cognito.identity.idp.model#UserImportInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserImportInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminAddUserToGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminAddUserToGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminAddUserToGroupCommand = deserializeAws_json1_1AdminAddUserToGroupCommand;
async function deserializeAws_json1_1AdminAddUserToGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminConfirmSignUpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminConfirmSignUpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminConfirmSignUpResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminConfirmSignUpResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminConfirmSignUpCommand = deserializeAws_json1_1AdminConfirmSignUpCommand;
async function deserializeAws_json1_1AdminConfirmSignUpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFailedAttemptsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyFailedAttemptsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminCreateUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminCreateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminCreateUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminCreateUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminCreateUserCommand = deserializeAws_json1_1AdminCreateUserCommand;
async function deserializeAws_json1_1AdminCreateUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognito.identity.idp.model#CodeDeliveryFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.cognito.identity.idp.model#PreconditionNotMetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedUserStateException":
        case "com.amazonaws.cognito.identity.idp.model#UnsupportedUserStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedUserStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UsernameExistsException":
        case "com.amazonaws.cognito.identity.idp.model#UsernameExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UsernameExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminDeleteUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminDeleteUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminDeleteUserCommand = deserializeAws_json1_1AdminDeleteUserCommand;
async function deserializeAws_json1_1AdminDeleteUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminDeleteUserAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminDeleteUserAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminDeleteUserAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminDeleteUserAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminDeleteUserAttributesCommand = deserializeAws_json1_1AdminDeleteUserAttributesCommand;
async function deserializeAws_json1_1AdminDeleteUserAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminDisableProviderForUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminDisableProviderForUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminDisableProviderForUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminDisableProviderForUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminDisableProviderForUserCommand = deserializeAws_json1_1AdminDisableProviderForUserCommand;
async function deserializeAws_json1_1AdminDisableProviderForUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognito.identity.idp.model#AliasExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminDisableUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminDisableUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminDisableUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminDisableUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminDisableUserCommand = deserializeAws_json1_1AdminDisableUserCommand;
async function deserializeAws_json1_1AdminDisableUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminEnableUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminEnableUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminEnableUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminEnableUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminEnableUserCommand = deserializeAws_json1_1AdminEnableUserCommand;
async function deserializeAws_json1_1AdminEnableUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminForgetDeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminForgetDeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminForgetDeviceCommand = deserializeAws_json1_1AdminForgetDeviceCommand;
async function deserializeAws_json1_1AdminForgetDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminGetDeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminGetDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminGetDeviceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminGetDeviceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminGetDeviceCommand = deserializeAws_json1_1AdminGetDeviceCommand;
async function deserializeAws_json1_1AdminGetDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminGetUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminGetUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminGetUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminGetUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminGetUserCommand = deserializeAws_json1_1AdminGetUserCommand;
async function deserializeAws_json1_1AdminGetUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminInitiateAuthCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminInitiateAuthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminInitiateAuthResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminInitiateAuthResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminInitiateAuthCommand = deserializeAws_json1_1AdminInitiateAuthCommand;
async function deserializeAws_json1_1AdminInitiateAuthCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MFAMethodNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#MFAMethodNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MFAMethodNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminLinkProviderForUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminLinkProviderForUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminLinkProviderForUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminLinkProviderForUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminLinkProviderForUserCommand = deserializeAws_json1_1AdminLinkProviderForUserCommand;
async function deserializeAws_json1_1AdminLinkProviderForUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognito.identity.idp.model#AliasExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminListDevicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminListDevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminListDevicesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminListDevicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminListDevicesCommand = deserializeAws_json1_1AdminListDevicesCommand;
async function deserializeAws_json1_1AdminListDevicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminListGroupsForUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminListGroupsForUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminListGroupsForUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminListGroupsForUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminListGroupsForUserCommand = deserializeAws_json1_1AdminListGroupsForUserCommand;
async function deserializeAws_json1_1AdminListGroupsForUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminListUserAuthEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminListUserAuthEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminListUserAuthEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminListUserAuthEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminListUserAuthEventsCommand = deserializeAws_json1_1AdminListUserAuthEventsCommand;
async function deserializeAws_json1_1AdminListUserAuthEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognito.identity.idp.model#UserPoolAddOnNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminRemoveUserFromGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminRemoveUserFromGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminRemoveUserFromGroupCommand = deserializeAws_json1_1AdminRemoveUserFromGroupCommand;
async function deserializeAws_json1_1AdminRemoveUserFromGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminResetUserPasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminResetUserPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminResetUserPasswordResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminResetUserPasswordResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminResetUserPasswordCommand = deserializeAws_json1_1AdminResetUserPasswordCommand;
async function deserializeAws_json1_1AdminResetUserPasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidEmailRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminRespondToAuthChallengeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminRespondToAuthChallengeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminRespondToAuthChallengeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminRespondToAuthChallengeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminRespondToAuthChallengeCommand = deserializeAws_json1_1AdminRespondToAuthChallengeCommand;
async function deserializeAws_json1_1AdminRespondToAuthChallengeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognito.identity.idp.model#AliasExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CodeMismatchException":
        case "com.amazonaws.cognito.identity.idp.model#CodeMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognito.identity.idp.model#ExpiredCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MFAMethodNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#MFAMethodNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MFAMethodNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SoftwareTokenMFANotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#SoftwareTokenMFANotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminSetUserMFAPreferenceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminSetUserMFAPreferenceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminSetUserMFAPreferenceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminSetUserMFAPreferenceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminSetUserMFAPreferenceCommand = deserializeAws_json1_1AdminSetUserMFAPreferenceCommand;
async function deserializeAws_json1_1AdminSetUserMFAPreferenceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminSetUserPasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminSetUserPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminSetUserPasswordResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminSetUserPasswordResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminSetUserPasswordCommand = deserializeAws_json1_1AdminSetUserPasswordCommand;
async function deserializeAws_json1_1AdminSetUserPasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminSetUserSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminSetUserSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminSetUserSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminSetUserSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminSetUserSettingsCommand = deserializeAws_json1_1AdminSetUserSettingsCommand;
async function deserializeAws_json1_1AdminSetUserSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminUpdateAuthEventFeedbackResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminUpdateAuthEventFeedbackResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand = deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand;
async function deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognito.identity.idp.model#UserPoolAddOnNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminUpdateDeviceStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminUpdateDeviceStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminUpdateDeviceStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminUpdateDeviceStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminUpdateDeviceStatusCommand = deserializeAws_json1_1AdminUpdateDeviceStatusCommand;
async function deserializeAws_json1_1AdminUpdateDeviceStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminUpdateUserAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminUpdateUserAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminUpdateUserAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminUpdateUserAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminUpdateUserAttributesCommand = deserializeAws_json1_1AdminUpdateUserAttributesCommand;
async function deserializeAws_json1_1AdminUpdateUserAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognito.identity.idp.model#AliasExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidEmailRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AdminUserGlobalSignOutCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AdminUserGlobalSignOutCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AdminUserGlobalSignOutResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AdminUserGlobalSignOutResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AdminUserGlobalSignOutCommand = deserializeAws_json1_1AdminUserGlobalSignOutCommand;
async function deserializeAws_json1_1AdminUserGlobalSignOutCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateSoftwareTokenCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateSoftwareTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateSoftwareTokenResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateSoftwareTokenResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateSoftwareTokenCommand = deserializeAws_json1_1AssociateSoftwareTokenCommand;
async function deserializeAws_json1_1AssociateSoftwareTokenCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SoftwareTokenMFANotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#SoftwareTokenMFANotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ChangePasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ChangePasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ChangePasswordResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ChangePasswordResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ChangePasswordCommand = deserializeAws_json1_1ChangePasswordCommand;
async function deserializeAws_json1_1ChangePasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ConfirmDeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ConfirmDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmDeviceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfirmDeviceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ConfirmDeviceCommand = deserializeAws_json1_1ConfirmDeviceCommand;
async function deserializeAws_json1_1ConfirmDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UsernameExistsException":
        case "com.amazonaws.cognito.identity.idp.model#UsernameExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UsernameExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ConfirmForgotPasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ConfirmForgotPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmForgotPasswordResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfirmForgotPasswordResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ConfirmForgotPasswordCommand = deserializeAws_json1_1ConfirmForgotPasswordCommand;
async function deserializeAws_json1_1ConfirmForgotPasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeMismatchException":
        case "com.amazonaws.cognito.identity.idp.model#CodeMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognito.identity.idp.model#ExpiredCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFailedAttemptsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyFailedAttemptsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ConfirmSignUpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ConfirmSignUpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmSignUpResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfirmSignUpResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ConfirmSignUpCommand = deserializeAws_json1_1ConfirmSignUpCommand;
async function deserializeAws_json1_1ConfirmSignUpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognito.identity.idp.model#AliasExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CodeMismatchException":
        case "com.amazonaws.cognito.identity.idp.model#CodeMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognito.identity.idp.model#ExpiredCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyFailedAttemptsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyFailedAttemptsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateGroupCommand = deserializeAws_json1_1CreateGroupCommand;
async function deserializeAws_json1_1CreateGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "GroupExistsException":
        case "com.amazonaws.cognito.identity.idp.model#GroupExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GroupExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateIdentityProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateIdentityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateIdentityProviderResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateIdentityProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateIdentityProviderCommand = deserializeAws_json1_1CreateIdentityProviderCommand;
async function deserializeAws_json1_1CreateIdentityProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateProviderException":
        case "com.amazonaws.cognito.identity.idp.model#DuplicateProviderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateProviderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateResourceServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateResourceServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResourceServerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateResourceServerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateResourceServerCommand = deserializeAws_json1_1CreateResourceServerCommand;
async function deserializeAws_json1_1CreateResourceServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateUserImportJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUserImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserImportJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserImportJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUserImportJobCommand = deserializeAws_json1_1CreateUserImportJobCommand;
async function deserializeAws_json1_1CreateUserImportJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.cognito.identity.idp.model#PreconditionNotMetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateUserPoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUserPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserPoolResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserPoolResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUserPoolCommand = deserializeAws_json1_1CreateUserPoolCommand;
async function deserializeAws_json1_1CreateUserPoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidEmailRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserPoolTaggingException":
        case "com.amazonaws.cognito.identity.idp.model#UserPoolTaggingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserPoolTaggingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateUserPoolClientCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUserPoolClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserPoolClientResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserPoolClientResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUserPoolClientCommand = deserializeAws_json1_1CreateUserPoolClientCommand;
async function deserializeAws_json1_1CreateUserPoolClientCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOAuthFlowException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidOAuthFlowException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOAuthFlowExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScopeDoesNotExistException":
        case "com.amazonaws.cognito.identity.idp.model#ScopeDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ScopeDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateUserPoolDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUserPoolDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserPoolDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserPoolDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUserPoolDomainCommand = deserializeAws_json1_1CreateUserPoolDomainCommand;
async function deserializeAws_json1_1CreateUserPoolDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteGroupCommand = deserializeAws_json1_1DeleteGroupCommand;
async function deserializeAws_json1_1DeleteGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteIdentityProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteIdentityProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteIdentityProviderCommand = deserializeAws_json1_1DeleteIdentityProviderCommand;
async function deserializeAws_json1_1DeleteIdentityProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedIdentityProviderException":
        case "com.amazonaws.cognito.identity.idp.model#UnsupportedIdentityProviderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedIdentityProviderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteResourceServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteResourceServerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteResourceServerCommand = deserializeAws_json1_1DeleteResourceServerCommand;
async function deserializeAws_json1_1DeleteResourceServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserCommand = deserializeAws_json1_1DeleteUserCommand;
async function deserializeAws_json1_1DeleteUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteUserAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteUserAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserAttributesCommand = deserializeAws_json1_1DeleteUserAttributesCommand;
async function deserializeAws_json1_1DeleteUserAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteUserPoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserPoolCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserPoolCommand = deserializeAws_json1_1DeleteUserPoolCommand;
async function deserializeAws_json1_1DeleteUserPoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserImportInProgressException":
        case "com.amazonaws.cognito.identity.idp.model#UserImportInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserImportInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteUserPoolClientCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserPoolClientCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserPoolClientCommand = deserializeAws_json1_1DeleteUserPoolClientCommand;
async function deserializeAws_json1_1DeleteUserPoolClientCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteUserPoolDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserPoolDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserPoolDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteUserPoolDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserPoolDomainCommand = deserializeAws_json1_1DeleteUserPoolDomainCommand;
async function deserializeAws_json1_1DeleteUserPoolDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeIdentityProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeIdentityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeIdentityProviderResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeIdentityProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeIdentityProviderCommand = deserializeAws_json1_1DescribeIdentityProviderCommand;
async function deserializeAws_json1_1DescribeIdentityProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeResourceServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeResourceServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeResourceServerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeResourceServerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeResourceServerCommand = deserializeAws_json1_1DescribeResourceServerCommand;
async function deserializeAws_json1_1DescribeResourceServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeRiskConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRiskConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRiskConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRiskConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRiskConfigurationCommand = deserializeAws_json1_1DescribeRiskConfigurationCommand;
async function deserializeAws_json1_1DescribeRiskConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognito.identity.idp.model#UserPoolAddOnNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUserImportJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUserImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserImportJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUserImportJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUserImportJobCommand = deserializeAws_json1_1DescribeUserImportJobCommand;
async function deserializeAws_json1_1DescribeUserImportJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUserPoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUserPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserPoolResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUserPoolResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUserPoolCommand = deserializeAws_json1_1DescribeUserPoolCommand;
async function deserializeAws_json1_1DescribeUserPoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserPoolTaggingException":
        case "com.amazonaws.cognito.identity.idp.model#UserPoolTaggingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserPoolTaggingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUserPoolClientCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUserPoolClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserPoolClientResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUserPoolClientResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUserPoolClientCommand = deserializeAws_json1_1DescribeUserPoolClientCommand;
async function deserializeAws_json1_1DescribeUserPoolClientCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUserPoolDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUserPoolDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserPoolDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUserPoolDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUserPoolDomainCommand = deserializeAws_json1_1DescribeUserPoolDomainCommand;
async function deserializeAws_json1_1DescribeUserPoolDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ForgetDeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ForgetDeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ForgetDeviceCommand = deserializeAws_json1_1ForgetDeviceCommand;
async function deserializeAws_json1_1ForgetDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ForgotPasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ForgotPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ForgotPasswordResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ForgotPasswordResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ForgotPasswordCommand = deserializeAws_json1_1ForgotPasswordCommand;
async function deserializeAws_json1_1ForgotPasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognito.identity.idp.model#CodeDeliveryFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidEmailRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetCSVHeaderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCSVHeaderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCSVHeaderResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCSVHeaderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCSVHeaderCommand = deserializeAws_json1_1GetCSVHeaderCommand;
async function deserializeAws_json1_1GetCSVHeaderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetDeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeviceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDeviceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDeviceCommand = deserializeAws_json1_1GetDeviceCommand;
async function deserializeAws_json1_1GetDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetGroupCommand = deserializeAws_json1_1GetGroupCommand;
async function deserializeAws_json1_1GetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetIdentityProviderByIdentifierCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetIdentityProviderByIdentifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetIdentityProviderByIdentifierResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetIdentityProviderByIdentifierResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetIdentityProviderByIdentifierCommand = deserializeAws_json1_1GetIdentityProviderByIdentifierCommand;
async function deserializeAws_json1_1GetIdentityProviderByIdentifierCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetSigningCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSigningCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSigningCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSigningCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSigningCertificateCommand = deserializeAws_json1_1GetSigningCertificateCommand;
async function deserializeAws_json1_1GetSigningCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetUICustomizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetUICustomizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUICustomizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUICustomizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetUICustomizationCommand = deserializeAws_json1_1GetUICustomizationCommand;
async function deserializeAws_json1_1GetUICustomizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetUserCommand = deserializeAws_json1_1GetUserCommand;
async function deserializeAws_json1_1GetUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetUserAttributeVerificationCodeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetUserAttributeVerificationCodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUserAttributeVerificationCodeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUserAttributeVerificationCodeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetUserAttributeVerificationCodeCommand = deserializeAws_json1_1GetUserAttributeVerificationCodeCommand;
async function deserializeAws_json1_1GetUserAttributeVerificationCodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognito.identity.idp.model#CodeDeliveryFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidEmailRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetUserPoolMfaConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetUserPoolMfaConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUserPoolMfaConfigResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUserPoolMfaConfigResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetUserPoolMfaConfigCommand = deserializeAws_json1_1GetUserPoolMfaConfigCommand;
async function deserializeAws_json1_1GetUserPoolMfaConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GlobalSignOutCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GlobalSignOutCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GlobalSignOutResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GlobalSignOutResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GlobalSignOutCommand = deserializeAws_json1_1GlobalSignOutCommand;
async function deserializeAws_json1_1GlobalSignOutCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1InitiateAuthCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1InitiateAuthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InitiateAuthResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InitiateAuthResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1InitiateAuthCommand = deserializeAws_json1_1InitiateAuthCommand;
async function deserializeAws_json1_1InitiateAuthCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListDevicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDevicesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDevicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDevicesCommand = deserializeAws_json1_1ListDevicesCommand;
async function deserializeAws_json1_1ListDevicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListGroupsCommand = deserializeAws_json1_1ListGroupsCommand;
async function deserializeAws_json1_1ListGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListIdentityProvidersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListIdentityProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIdentityProvidersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListIdentityProvidersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListIdentityProvidersCommand = deserializeAws_json1_1ListIdentityProvidersCommand;
async function deserializeAws_json1_1ListIdentityProvidersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListResourceServersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResourceServersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceServersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResourceServersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResourceServersCommand = deserializeAws_json1_1ListResourceServersCommand;
async function deserializeAws_json1_1ListResourceServersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
async function deserializeAws_json1_1ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListUserImportJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUserImportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUserImportJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUserImportJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUserImportJobsCommand = deserializeAws_json1_1ListUserImportJobsCommand;
async function deserializeAws_json1_1ListUserImportJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListUserPoolClientsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUserPoolClientsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUserPoolClientsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUserPoolClientsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUserPoolClientsCommand = deserializeAws_json1_1ListUserPoolClientsCommand;
async function deserializeAws_json1_1ListUserPoolClientsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListUserPoolsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUserPoolsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUserPoolsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUserPoolsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUserPoolsCommand = deserializeAws_json1_1ListUserPoolsCommand;
async function deserializeAws_json1_1ListUserPoolsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListUsersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUsersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUsersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUsersCommand = deserializeAws_json1_1ListUsersCommand;
async function deserializeAws_json1_1ListUsersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListUsersInGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUsersInGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUsersInGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUsersInGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUsersInGroupCommand = deserializeAws_json1_1ListUsersInGroupCommand;
async function deserializeAws_json1_1ListUsersInGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ResendConfirmationCodeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResendConfirmationCodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResendConfirmationCodeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResendConfirmationCodeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResendConfirmationCodeCommand = deserializeAws_json1_1ResendConfirmationCodeCommand;
async function deserializeAws_json1_1ResendConfirmationCodeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognito.identity.idp.model#CodeDeliveryFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidEmailRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RespondToAuthChallengeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RespondToAuthChallengeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RespondToAuthChallengeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RespondToAuthChallengeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RespondToAuthChallengeCommand = deserializeAws_json1_1RespondToAuthChallengeCommand;
async function deserializeAws_json1_1RespondToAuthChallengeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognito.identity.idp.model#AliasExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CodeMismatchException":
        case "com.amazonaws.cognito.identity.idp.model#CodeMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognito.identity.idp.model#ExpiredCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MFAMethodNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#MFAMethodNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MFAMethodNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SoftwareTokenMFANotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#SoftwareTokenMFANotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SetRiskConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetRiskConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetRiskConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetRiskConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetRiskConfigurationCommand = deserializeAws_json1_1SetRiskConfigurationCommand;
async function deserializeAws_json1_1SetRiskConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognito.identity.idp.model#CodeDeliveryFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidEmailRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognito.identity.idp.model#UserPoolAddOnNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SetUICustomizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetUICustomizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetUICustomizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetUICustomizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetUICustomizationCommand = deserializeAws_json1_1SetUICustomizationCommand;
async function deserializeAws_json1_1SetUICustomizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SetUserMFAPreferenceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetUserMFAPreferenceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetUserMFAPreferenceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetUserMFAPreferenceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetUserMFAPreferenceCommand = deserializeAws_json1_1SetUserMFAPreferenceCommand;
async function deserializeAws_json1_1SetUserMFAPreferenceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SetUserPoolMfaConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetUserPoolMfaConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetUserPoolMfaConfigResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetUserPoolMfaConfigResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetUserPoolMfaConfigCommand = deserializeAws_json1_1SetUserPoolMfaConfigCommand;
async function deserializeAws_json1_1SetUserPoolMfaConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SetUserSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetUserSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetUserSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetUserSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetUserSettingsCommand = deserializeAws_json1_1SetUserSettingsCommand;
async function deserializeAws_json1_1SetUserSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SignUpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SignUpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SignUpResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SignUpResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SignUpCommand = deserializeAws_json1_1SignUpCommand;
async function deserializeAws_json1_1SignUpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognito.identity.idp.model#CodeDeliveryFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidEmailRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidPasswordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UsernameExistsException":
        case "com.amazonaws.cognito.identity.idp.model#UsernameExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UsernameExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartUserImportJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartUserImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartUserImportJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartUserImportJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartUserImportJobCommand = deserializeAws_json1_1StartUserImportJobCommand;
async function deserializeAws_json1_1StartUserImportJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.cognito.identity.idp.model#PreconditionNotMetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopUserImportJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopUserImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopUserImportJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopUserImportJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopUserImportJobCommand = deserializeAws_json1_1StopUserImportJobCommand;
async function deserializeAws_json1_1StopUserImportJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.cognito.identity.idp.model#PreconditionNotMetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1TagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
async function deserializeAws_json1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateAuthEventFeedbackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAuthEventFeedbackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAuthEventFeedbackResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateAuthEventFeedbackResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAuthEventFeedbackCommand = deserializeAws_json1_1UpdateAuthEventFeedbackCommand;
async function deserializeAws_json1_1UpdateAuthEventFeedbackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognito.identity.idp.model#UserPoolAddOnNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateDeviceStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDeviceStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDeviceStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDeviceStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDeviceStatusCommand = deserializeAws_json1_1UpdateDeviceStatusCommand;
async function deserializeAws_json1_1UpdateDeviceStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateGroupCommand = deserializeAws_json1_1UpdateGroupCommand;
async function deserializeAws_json1_1UpdateGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateIdentityProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateIdentityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateIdentityProviderResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateIdentityProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateIdentityProviderCommand = deserializeAws_json1_1UpdateIdentityProviderCommand;
async function deserializeAws_json1_1UpdateIdentityProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedIdentityProviderException":
        case "com.amazonaws.cognito.identity.idp.model#UnsupportedIdentityProviderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedIdentityProviderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateResourceServerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateResourceServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResourceServerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateResourceServerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateResourceServerCommand = deserializeAws_json1_1UpdateResourceServerCommand;
async function deserializeAws_json1_1UpdateResourceServerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateUserAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateUserAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateUserAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateUserAttributesCommand = deserializeAws_json1_1UpdateUserAttributesCommand;
async function deserializeAws_json1_1UpdateUserAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AliasExistsException":
        case "com.amazonaws.cognito.identity.idp.model#AliasExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AliasExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognito.identity.idp.model#CodeDeliveryFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeDeliveryFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CodeMismatchException":
        case "com.amazonaws.cognito.identity.idp.model#CodeMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognito.identity.idp.model#ExpiredCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidEmailRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidLambdaResponseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLambdaResponseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognito.identity.idp.model#UnexpectedLambdaException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnexpectedLambdaExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserLambdaValidationException":
        case "com.amazonaws.cognito.identity.idp.model#UserLambdaValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserLambdaValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateUserPoolCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateUserPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserPoolResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateUserPoolResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateUserPoolCommand = deserializeAws_json1_1UpdateUserPoolCommand;
async function deserializeAws_json1_1UpdateUserPoolCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognito.identity.idp.model#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidEmailRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleAccessPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidSmsRoleTrustRelationshipException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserImportInProgressException":
        case "com.amazonaws.cognito.identity.idp.model#UserImportInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserImportInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserPoolTaggingException":
        case "com.amazonaws.cognito.identity.idp.model#UserPoolTaggingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserPoolTaggingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateUserPoolClientCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateUserPoolClientCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserPoolClientResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateUserPoolClientResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateUserPoolClientCommand = deserializeAws_json1_1UpdateUserPoolClientCommand;
async function deserializeAws_json1_1UpdateUserPoolClientCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognito.identity.idp.model#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOAuthFlowException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidOAuthFlowException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOAuthFlowExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ScopeDoesNotExistException":
        case "com.amazonaws.cognito.identity.idp.model#ScopeDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ScopeDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateUserPoolDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateUserPoolDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserPoolDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateUserPoolDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateUserPoolDomainCommand = deserializeAws_json1_1UpdateUserPoolDomainCommand;
async function deserializeAws_json1_1UpdateUserPoolDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1VerifySoftwareTokenCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1VerifySoftwareTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VerifySoftwareTokenResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VerifySoftwareTokenResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1VerifySoftwareTokenCommand = deserializeAws_json1_1VerifySoftwareTokenCommand;
async function deserializeAws_json1_1VerifySoftwareTokenCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeMismatchException":
        case "com.amazonaws.cognito.identity.idp.model#CodeMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EnableSoftwareTokenMFAException":
        case "com.amazonaws.cognito.identity.idp.model#EnableSoftwareTokenMFAException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EnableSoftwareTokenMFAExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidUserPoolConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SoftwareTokenMFANotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#SoftwareTokenMFANotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1VerifyUserAttributeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1VerifyUserAttributeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VerifyUserAttributeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VerifyUserAttributeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1VerifyUserAttributeCommand = deserializeAws_json1_1VerifyUserAttributeCommand;
async function deserializeAws_json1_1VerifyUserAttributeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CodeMismatchException":
        case "com.amazonaws.cognito.identity.idp.model#CodeMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CodeMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredCodeException":
        case "com.amazonaws.cognito.identity.idp.model#ExpiredCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognito.identity.idp.model#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognito.identity.idp.model#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognito.identity.idp.model#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognito.identity.idp.model#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognito.identity.idp.model#PasswordResetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PasswordResetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognito.identity.idp.model#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotConfirmedException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotConfirmedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotConfirmedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UserNotFoundException":
        case "com.amazonaws.cognito.identity.idp.model#UserNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UserNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1AliasExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AliasExistsException(body, context);
    const contents = Object.assign({ name: "AliasExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CodeDeliveryFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CodeDeliveryFailureException(body, context);
    const contents = Object.assign({ name: "CodeDeliveryFailureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CodeMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CodeMismatchException(body, context);
    const contents = Object.assign({ name: "CodeMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateProviderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateProviderException(body, context);
    const contents = Object.assign({ name: "DuplicateProviderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EnableSoftwareTokenMFAExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EnableSoftwareTokenMFAException(body, context);
    const contents = Object.assign({ name: "EnableSoftwareTokenMFAException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ExpiredCodeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredCodeException(body, context);
    const contents = Object.assign({ name: "ExpiredCodeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1GroupExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GroupExistsException(body, context);
    const contents = Object.assign({ name: "GroupExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = Object.assign({ name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEmailRoleAccessPolicyException(body, context);
    const contents = Object.assign({ name: "InvalidEmailRoleAccessPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidLambdaResponseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLambdaResponseException(body, context);
    const contents = Object.assign({ name: "InvalidLambdaResponseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOAuthFlowExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOAuthFlowException(body, context);
    const contents = Object.assign({ name: "InvalidOAuthFlowException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPasswordExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPasswordException(body, context);
    const contents = Object.assign({ name: "InvalidPasswordException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSmsRoleAccessPolicyException(body, context);
    const contents = Object.assign({ name: "InvalidSmsRoleAccessPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSmsRoleTrustRelationshipException(body, context);
    const contents = Object.assign({ name: "InvalidSmsRoleTrustRelationshipException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidUserPoolConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidUserPoolConfigurationException(body, context);
    const contents = Object.assign({ name: "InvalidUserPoolConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MFAMethodNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MFAMethodNotFoundException(body, context);
    const contents = Object.assign({ name: "MFAMethodNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotAuthorizedException(body, context);
    const contents = Object.assign({ name: "NotAuthorizedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PasswordResetRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PasswordResetRequiredException(body, context);
    const contents = Object.assign({ name: "PasswordResetRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PreconditionNotMetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PreconditionNotMetException(body, context);
    const contents = Object.assign({ name: "PreconditionNotMetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ScopeDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ScopeDoesNotExistException(body, context);
    const contents = Object.assign({ name: "ScopeDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SoftwareTokenMFANotFoundException(body, context);
    const contents = Object.assign({ name: "SoftwareTokenMFANotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyFailedAttemptsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyFailedAttemptsException(body, context);
    const contents = Object.assign({ name: "TooManyFailedAttemptsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = Object.assign({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnexpectedLambdaExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnexpectedLambdaException(body, context);
    const contents = Object.assign({ name: "UnexpectedLambdaException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedIdentityProviderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedIdentityProviderException(body, context);
    const contents = Object.assign({ name: "UnsupportedIdentityProviderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedUserStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedUserStateException(body, context);
    const contents = Object.assign({ name: "UnsupportedUserStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UserImportInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserImportInProgressException(body, context);
    const contents = Object.assign({ name: "UserImportInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UserLambdaValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserLambdaValidationException(body, context);
    const contents = Object.assign({ name: "UserLambdaValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UserNotConfirmedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserNotConfirmedException(body, context);
    const contents = Object.assign({ name: "UserNotConfirmedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UserNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserNotFoundException(body, context);
    const contents = Object.assign({ name: "UserNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserPoolAddOnNotEnabledException(body, context);
    const contents = Object.assign({ name: "UserPoolAddOnNotEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UserPoolTaggingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserPoolTaggingException(body, context);
    const contents = Object.assign({ name: "UserPoolTaggingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UsernameExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UsernameExistsException(body, context);
    const contents = Object.assign({ name: "UsernameExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AccountRecoverySettingType = (input, context) => {
    const bodyParams = {};
    if (input.RecoveryMechanisms !== undefined) {
        bodyParams["RecoveryMechanisms"] = serializeAws_json1_1RecoveryMechanismsType(input.RecoveryMechanisms, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AccountTakeoverActionType = (input, context) => {
    const bodyParams = {};
    if (input.EventAction !== undefined) {
        bodyParams["EventAction"] = input.EventAction;
    }
    if (input.Notify !== undefined) {
        bodyParams["Notify"] = input.Notify;
    }
    return bodyParams;
};
const serializeAws_json1_1AccountTakeoverActionsType = (input, context) => {
    const bodyParams = {};
    if (input.HighAction !== undefined) {
        bodyParams["HighAction"] = serializeAws_json1_1AccountTakeoverActionType(input.HighAction, context);
    }
    if (input.LowAction !== undefined) {
        bodyParams["LowAction"] = serializeAws_json1_1AccountTakeoverActionType(input.LowAction, context);
    }
    if (input.MediumAction !== undefined) {
        bodyParams["MediumAction"] = serializeAws_json1_1AccountTakeoverActionType(input.MediumAction, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AccountTakeoverRiskConfigurationType = (input, context) => {
    const bodyParams = {};
    if (input.Actions !== undefined) {
        bodyParams["Actions"] = serializeAws_json1_1AccountTakeoverActionsType(input.Actions, context);
    }
    if (input.NotifyConfiguration !== undefined) {
        bodyParams["NotifyConfiguration"] = serializeAws_json1_1NotifyConfigurationType(input.NotifyConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AddCustomAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CustomAttributes !== undefined) {
        bodyParams["CustomAttributes"] = serializeAws_json1_1CustomAttributesListType(input.CustomAttributes, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminAddUserToGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupName !== undefined) {
        bodyParams["GroupName"] = input.GroupName;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminConfirmSignUpRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminCreateUserConfigType = (input, context) => {
    const bodyParams = {};
    if (input.AllowAdminCreateUserOnly !== undefined) {
        bodyParams["AllowAdminCreateUserOnly"] = input.AllowAdminCreateUserOnly;
    }
    if (input.InviteMessageTemplate !== undefined) {
        bodyParams["InviteMessageTemplate"] = serializeAws_json1_1MessageTemplateType(input.InviteMessageTemplate, context);
    }
    if (input.UnusedAccountValidityDays !== undefined) {
        bodyParams["UnusedAccountValidityDays"] = input.UnusedAccountValidityDays;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminCreateUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.DesiredDeliveryMediums !== undefined) {
        bodyParams["DesiredDeliveryMediums"] = serializeAws_json1_1DeliveryMediumListType(input.DesiredDeliveryMediums, context);
    }
    if (input.ForceAliasCreation !== undefined) {
        bodyParams["ForceAliasCreation"] = input.ForceAliasCreation;
    }
    if (input.MessageAction !== undefined) {
        bodyParams["MessageAction"] = input.MessageAction;
    }
    if (input.TemporaryPassword !== undefined) {
        bodyParams["TemporaryPassword"] = input.TemporaryPassword;
    }
    if (input.UserAttributes !== undefined) {
        bodyParams["UserAttributes"] = serializeAws_json1_1AttributeListType(input.UserAttributes, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    if (input.ValidationData !== undefined) {
        bodyParams["ValidationData"] = serializeAws_json1_1AttributeListType(input.ValidationData, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AdminDeleteUserAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserAttributeNames !== undefined) {
        bodyParams["UserAttributeNames"] = serializeAws_json1_1AttributeNameListType(input.UserAttributeNames, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminDeleteUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminDisableProviderForUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.User !== undefined) {
        bodyParams["User"] = serializeAws_json1_1ProviderUserIdentifierType(input.User, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminDisableUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminEnableUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminForgetDeviceRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceKey !== undefined) {
        bodyParams["DeviceKey"] = input.DeviceKey;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminGetDeviceRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceKey !== undefined) {
        bodyParams["DeviceKey"] = input.DeviceKey;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminGetUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminInitiateAuthRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnalyticsMetadata !== undefined) {
        bodyParams["AnalyticsMetadata"] = serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context);
    }
    if (input.AuthFlow !== undefined) {
        bodyParams["AuthFlow"] = input.AuthFlow;
    }
    if (input.AuthParameters !== undefined) {
        bodyParams["AuthParameters"] = serializeAws_json1_1AuthParametersType(input.AuthParameters, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.ContextData !== undefined) {
        bodyParams["ContextData"] = serializeAws_json1_1ContextDataType(input.ContextData, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminLinkProviderForUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.DestinationUser !== undefined) {
        bodyParams["DestinationUser"] = serializeAws_json1_1ProviderUserIdentifierType(input.DestinationUser, context);
    }
    if (input.SourceUser !== undefined) {
        bodyParams["SourceUser"] = serializeAws_json1_1ProviderUserIdentifierType(input.SourceUser, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminListDevicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.PaginationToken !== undefined) {
        bodyParams["PaginationToken"] = input.PaginationToken;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminListGroupsForUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminListUserAuthEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminRemoveUserFromGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupName !== undefined) {
        bodyParams["GroupName"] = input.GroupName;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminResetUserPasswordRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminRespondToAuthChallengeRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnalyticsMetadata !== undefined) {
        bodyParams["AnalyticsMetadata"] = serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context);
    }
    if (input.ChallengeName !== undefined) {
        bodyParams["ChallengeName"] = input.ChallengeName;
    }
    if (input.ChallengeResponses !== undefined) {
        bodyParams["ChallengeResponses"] = serializeAws_json1_1ChallengeResponsesType(input.ChallengeResponses, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.ContextData !== undefined) {
        bodyParams["ContextData"] = serializeAws_json1_1ContextDataType(input.ContextData, context);
    }
    if (input.Session !== undefined) {
        bodyParams["Session"] = input.Session;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminSetUserMFAPreferenceRequest = (input, context) => {
    const bodyParams = {};
    if (input.SMSMfaSettings !== undefined) {
        bodyParams["SMSMfaSettings"] = serializeAws_json1_1SMSMfaSettingsType(input.SMSMfaSettings, context);
    }
    if (input.SoftwareTokenMfaSettings !== undefined) {
        bodyParams["SoftwareTokenMfaSettings"] = serializeAws_json1_1SoftwareTokenMfaSettingsType(input.SoftwareTokenMfaSettings, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminSetUserPasswordRequest = (input, context) => {
    const bodyParams = {};
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.Permanent !== undefined) {
        bodyParams["Permanent"] = input.Permanent;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminSetUserSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MFAOptions !== undefined) {
        bodyParams["MFAOptions"] = serializeAws_json1_1MFAOptionListType(input.MFAOptions, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminUpdateAuthEventFeedbackRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventId !== undefined) {
        bodyParams["EventId"] = input.EventId;
    }
    if (input.FeedbackValue !== undefined) {
        bodyParams["FeedbackValue"] = input.FeedbackValue;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminUpdateDeviceStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceKey !== undefined) {
        bodyParams["DeviceKey"] = input.DeviceKey;
    }
    if (input.DeviceRememberedStatus !== undefined) {
        bodyParams["DeviceRememberedStatus"] = input.DeviceRememberedStatus;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminUpdateUserAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.UserAttributes !== undefined) {
        bodyParams["UserAttributes"] = serializeAws_json1_1AttributeListType(input.UserAttributes, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AdminUserGlobalSignOutRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1AliasAttributesListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AnalyticsConfigurationType = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationId !== undefined) {
        bodyParams["ApplicationId"] = input.ApplicationId;
    }
    if (input.ExternalId !== undefined) {
        bodyParams["ExternalId"] = input.ExternalId;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.UserDataShared !== undefined) {
        bodyParams["UserDataShared"] = input.UserDataShared;
    }
    return bodyParams;
};
const serializeAws_json1_1AnalyticsMetadataType = (input, context) => {
    const bodyParams = {};
    if (input.AnalyticsEndpointId !== undefined) {
        bodyParams["AnalyticsEndpointId"] = input.AnalyticsEndpointId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateSoftwareTokenRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.Session !== undefined) {
        bodyParams["Session"] = input.Session;
    }
    return bodyParams;
};
const serializeAws_json1_1AttributeListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AttributeType(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AttributeMappingType = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1AttributeNameListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AttributeType = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1AuthParametersType = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1BlockedIPRangeListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CallbackURLsListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ChallengeResponsesType = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ChangePasswordRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.PreviousPassword !== undefined) {
        bodyParams["PreviousPassword"] = input.PreviousPassword;
    }
    if (input.ProposedPassword !== undefined) {
        bodyParams["ProposedPassword"] = input.ProposedPassword;
    }
    return bodyParams;
};
const serializeAws_json1_1ClientMetadataType = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ClientPermissionListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CompromisedCredentialsActionsType = (input, context) => {
    const bodyParams = {};
    if (input.EventAction !== undefined) {
        bodyParams["EventAction"] = input.EventAction;
    }
    return bodyParams;
};
const serializeAws_json1_1CompromisedCredentialsRiskConfigurationType = (input, context) => {
    const bodyParams = {};
    if (input.Actions !== undefined) {
        bodyParams["Actions"] = serializeAws_json1_1CompromisedCredentialsActionsType(input.Actions, context);
    }
    if (input.EventFilter !== undefined) {
        bodyParams["EventFilter"] = serializeAws_json1_1EventFiltersType(input.EventFilter, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ConfirmDeviceRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.DeviceKey !== undefined) {
        bodyParams["DeviceKey"] = input.DeviceKey;
    }
    if (input.DeviceName !== undefined) {
        bodyParams["DeviceName"] = input.DeviceName;
    }
    if (input.DeviceSecretVerifierConfig !== undefined) {
        bodyParams["DeviceSecretVerifierConfig"] = serializeAws_json1_1DeviceSecretVerifierConfigType(input.DeviceSecretVerifierConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ConfirmForgotPasswordRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnalyticsMetadata !== undefined) {
        bodyParams["AnalyticsMetadata"] = serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.ConfirmationCode !== undefined) {
        bodyParams["ConfirmationCode"] = input.ConfirmationCode;
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.SecretHash !== undefined) {
        bodyParams["SecretHash"] = input.SecretHash;
    }
    if (input.UserContextData !== undefined) {
        bodyParams["UserContextData"] = serializeAws_json1_1UserContextDataType(input.UserContextData, context);
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1ConfirmSignUpRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnalyticsMetadata !== undefined) {
        bodyParams["AnalyticsMetadata"] = serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.ConfirmationCode !== undefined) {
        bodyParams["ConfirmationCode"] = input.ConfirmationCode;
    }
    if (input.ForceAliasCreation !== undefined) {
        bodyParams["ForceAliasCreation"] = input.ForceAliasCreation;
    }
    if (input.SecretHash !== undefined) {
        bodyParams["SecretHash"] = input.SecretHash;
    }
    if (input.UserContextData !== undefined) {
        bodyParams["UserContextData"] = serializeAws_json1_1UserContextDataType(input.UserContextData, context);
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1ContextDataType = (input, context) => {
    const bodyParams = {};
    if (input.EncodedData !== undefined) {
        bodyParams["EncodedData"] = input.EncodedData;
    }
    if (input.HttpHeaders !== undefined) {
        bodyParams["HttpHeaders"] = serializeAws_json1_1HttpHeaderList(input.HttpHeaders, context);
    }
    if (input.IpAddress !== undefined) {
        bodyParams["IpAddress"] = input.IpAddress;
    }
    if (input.ServerName !== undefined) {
        bodyParams["ServerName"] = input.ServerName;
    }
    if (input.ServerPath !== undefined) {
        bodyParams["ServerPath"] = input.ServerPath;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.GroupName !== undefined) {
        bodyParams["GroupName"] = input.GroupName;
    }
    if (input.Precedence !== undefined) {
        bodyParams["Precedence"] = input.Precedence;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateIdentityProviderRequest = (input, context) => {
    const bodyParams = {};
    if (input.AttributeMapping !== undefined) {
        bodyParams["AttributeMapping"] = serializeAws_json1_1AttributeMappingType(input.AttributeMapping, context);
    }
    if (input.IdpIdentifiers !== undefined) {
        bodyParams["IdpIdentifiers"] = serializeAws_json1_1IdpIdentifiersListType(input.IdpIdentifiers, context);
    }
    if (input.ProviderDetails !== undefined) {
        bodyParams["ProviderDetails"] = serializeAws_json1_1ProviderDetailsType(input.ProviderDetails, context);
    }
    if (input.ProviderName !== undefined) {
        bodyParams["ProviderName"] = input.ProviderName;
    }
    if (input.ProviderType !== undefined) {
        bodyParams["ProviderType"] = input.ProviderType;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateResourceServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Identifier !== undefined) {
        bodyParams["Identifier"] = input.Identifier;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scopes !== undefined) {
        bodyParams["Scopes"] = serializeAws_json1_1ResourceServerScopeListType(input.Scopes, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserImportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLogsRoleArn !== undefined) {
        bodyParams["CloudWatchLogsRoleArn"] = input.CloudWatchLogsRoleArn;
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserPoolClientRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllowedOAuthFlows !== undefined) {
        bodyParams["AllowedOAuthFlows"] = serializeAws_json1_1OAuthFlowsType(input.AllowedOAuthFlows, context);
    }
    if (input.AllowedOAuthFlowsUserPoolClient !== undefined) {
        bodyParams["AllowedOAuthFlowsUserPoolClient"] =
            input.AllowedOAuthFlowsUserPoolClient;
    }
    if (input.AllowedOAuthScopes !== undefined) {
        bodyParams["AllowedOAuthScopes"] = serializeAws_json1_1ScopeListType(input.AllowedOAuthScopes, context);
    }
    if (input.AnalyticsConfiguration !== undefined) {
        bodyParams["AnalyticsConfiguration"] = serializeAws_json1_1AnalyticsConfigurationType(input.AnalyticsConfiguration, context);
    }
    if (input.CallbackURLs !== undefined) {
        bodyParams["CallbackURLs"] = serializeAws_json1_1CallbackURLsListType(input.CallbackURLs, context);
    }
    if (input.ClientName !== undefined) {
        bodyParams["ClientName"] = input.ClientName;
    }
    if (input.DefaultRedirectURI !== undefined) {
        bodyParams["DefaultRedirectURI"] = input.DefaultRedirectURI;
    }
    if (input.ExplicitAuthFlows !== undefined) {
        bodyParams["ExplicitAuthFlows"] = serializeAws_json1_1ExplicitAuthFlowsListType(input.ExplicitAuthFlows, context);
    }
    if (input.GenerateSecret !== undefined) {
        bodyParams["GenerateSecret"] = input.GenerateSecret;
    }
    if (input.LogoutURLs !== undefined) {
        bodyParams["LogoutURLs"] = serializeAws_json1_1LogoutURLsListType(input.LogoutURLs, context);
    }
    if (input.PreventUserExistenceErrors !== undefined) {
        bodyParams["PreventUserExistenceErrors"] = input.PreventUserExistenceErrors;
    }
    if (input.ReadAttributes !== undefined) {
        bodyParams["ReadAttributes"] = serializeAws_json1_1ClientPermissionListType(input.ReadAttributes, context);
    }
    if (input.RefreshTokenValidity !== undefined) {
        bodyParams["RefreshTokenValidity"] = input.RefreshTokenValidity;
    }
    if (input.SupportedIdentityProviders !== undefined) {
        bodyParams["SupportedIdentityProviders"] = serializeAws_json1_1SupportedIdentityProvidersListType(input.SupportedIdentityProviders, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.WriteAttributes !== undefined) {
        bodyParams["WriteAttributes"] = serializeAws_json1_1ClientPermissionListType(input.WriteAttributes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserPoolDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.CustomDomainConfig !== undefined) {
        bodyParams["CustomDomainConfig"] = serializeAws_json1_1CustomDomainConfigType(input.CustomDomainConfig, context);
    }
    if (input.Domain !== undefined) {
        bodyParams["Domain"] = input.Domain;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserPoolRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountRecoverySetting !== undefined) {
        bodyParams["AccountRecoverySetting"] = serializeAws_json1_1AccountRecoverySettingType(input.AccountRecoverySetting, context);
    }
    if (input.AdminCreateUserConfig !== undefined) {
        bodyParams["AdminCreateUserConfig"] = serializeAws_json1_1AdminCreateUserConfigType(input.AdminCreateUserConfig, context);
    }
    if (input.AliasAttributes !== undefined) {
        bodyParams["AliasAttributes"] = serializeAws_json1_1AliasAttributesListType(input.AliasAttributes, context);
    }
    if (input.AutoVerifiedAttributes !== undefined) {
        bodyParams["AutoVerifiedAttributes"] = serializeAws_json1_1VerifiedAttributesListType(input.AutoVerifiedAttributes, context);
    }
    if (input.DeviceConfiguration !== undefined) {
        bodyParams["DeviceConfiguration"] = serializeAws_json1_1DeviceConfigurationType(input.DeviceConfiguration, context);
    }
    if (input.EmailConfiguration !== undefined) {
        bodyParams["EmailConfiguration"] = serializeAws_json1_1EmailConfigurationType(input.EmailConfiguration, context);
    }
    if (input.EmailVerificationMessage !== undefined) {
        bodyParams["EmailVerificationMessage"] = input.EmailVerificationMessage;
    }
    if (input.EmailVerificationSubject !== undefined) {
        bodyParams["EmailVerificationSubject"] = input.EmailVerificationSubject;
    }
    if (input.LambdaConfig !== undefined) {
        bodyParams["LambdaConfig"] = serializeAws_json1_1LambdaConfigType(input.LambdaConfig, context);
    }
    if (input.MfaConfiguration !== undefined) {
        bodyParams["MfaConfiguration"] = input.MfaConfiguration;
    }
    if (input.Policies !== undefined) {
        bodyParams["Policies"] = serializeAws_json1_1UserPoolPolicyType(input.Policies, context);
    }
    if (input.PoolName !== undefined) {
        bodyParams["PoolName"] = input.PoolName;
    }
    if (input.Schema !== undefined) {
        bodyParams["Schema"] = serializeAws_json1_1SchemaAttributesListType(input.Schema, context);
    }
    if (input.SmsAuthenticationMessage !== undefined) {
        bodyParams["SmsAuthenticationMessage"] = input.SmsAuthenticationMessage;
    }
    if (input.SmsConfiguration !== undefined) {
        bodyParams["SmsConfiguration"] = serializeAws_json1_1SmsConfigurationType(input.SmsConfiguration, context);
    }
    if (input.SmsVerificationMessage !== undefined) {
        bodyParams["SmsVerificationMessage"] = input.SmsVerificationMessage;
    }
    if (input.UserPoolAddOns !== undefined) {
        bodyParams["UserPoolAddOns"] = serializeAws_json1_1UserPoolAddOnsType(input.UserPoolAddOns, context);
    }
    if (input.UserPoolTags !== undefined) {
        bodyParams["UserPoolTags"] = serializeAws_json1_1UserPoolTagsType(input.UserPoolTags, context);
    }
    if (input.UsernameAttributes !== undefined) {
        bodyParams["UsernameAttributes"] = serializeAws_json1_1UsernameAttributesListType(input.UsernameAttributes, context);
    }
    if (input.VerificationMessageTemplate !== undefined) {
        bodyParams["VerificationMessageTemplate"] = serializeAws_json1_1VerificationMessageTemplateType(input.VerificationMessageTemplate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CustomAttributesListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SchemaAttributeType(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CustomDomainConfigType = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupName !== undefined) {
        bodyParams["GroupName"] = input.GroupName;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteIdentityProviderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProviderName !== undefined) {
        bodyParams["ProviderName"] = input.ProviderName;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteResourceServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Identifier !== undefined) {
        bodyParams["Identifier"] = input.Identifier;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.UserAttributeNames !== undefined) {
        bodyParams["UserAttributeNames"] = serializeAws_json1_1AttributeNameListType(input.UserAttributeNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserPoolClientRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserPoolDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.Domain !== undefined) {
        bodyParams["Domain"] = input.Domain;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserPoolRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DeliveryMediumListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DescribeIdentityProviderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProviderName !== undefined) {
        bodyParams["ProviderName"] = input.ProviderName;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeResourceServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Identifier !== undefined) {
        bodyParams["Identifier"] = input.Identifier;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRiskConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUserImportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUserPoolClientRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUserPoolDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.Domain !== undefined) {
        bodyParams["Domain"] = input.Domain;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUserPoolRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeviceConfigurationType = (input, context) => {
    const bodyParams = {};
    if (input.ChallengeRequiredOnNewDevice !== undefined) {
        bodyParams["ChallengeRequiredOnNewDevice"] =
            input.ChallengeRequiredOnNewDevice;
    }
    if (input.DeviceOnlyRememberedOnUserPrompt !== undefined) {
        bodyParams["DeviceOnlyRememberedOnUserPrompt"] =
            input.DeviceOnlyRememberedOnUserPrompt;
    }
    return bodyParams;
};
const serializeAws_json1_1DeviceSecretVerifierConfigType = (input, context) => {
    const bodyParams = {};
    if (input.PasswordVerifier !== undefined) {
        bodyParams["PasswordVerifier"] = input.PasswordVerifier;
    }
    if (input.Salt !== undefined) {
        bodyParams["Salt"] = input.Salt;
    }
    return bodyParams;
};
const serializeAws_json1_1EmailConfigurationType = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationSet !== undefined) {
        bodyParams["ConfigurationSet"] = input.ConfigurationSet;
    }
    if (input.EmailSendingAccount !== undefined) {
        bodyParams["EmailSendingAccount"] = input.EmailSendingAccount;
    }
    if (input.From !== undefined) {
        bodyParams["From"] = input.From;
    }
    if (input.ReplyToEmailAddress !== undefined) {
        bodyParams["ReplyToEmailAddress"] = input.ReplyToEmailAddress;
    }
    if (input.SourceArn !== undefined) {
        bodyParams["SourceArn"] = input.SourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1EventFiltersType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ExplicitAuthFlowsListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ForgetDeviceRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.DeviceKey !== undefined) {
        bodyParams["DeviceKey"] = input.DeviceKey;
    }
    return bodyParams;
};
const serializeAws_json1_1ForgotPasswordRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnalyticsMetadata !== undefined) {
        bodyParams["AnalyticsMetadata"] = serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.SecretHash !== undefined) {
        bodyParams["SecretHash"] = input.SecretHash;
    }
    if (input.UserContextData !== undefined) {
        bodyParams["UserContextData"] = serializeAws_json1_1UserContextDataType(input.UserContextData, context);
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCSVHeaderRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDeviceRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.DeviceKey !== undefined) {
        bodyParams["DeviceKey"] = input.DeviceKey;
    }
    return bodyParams;
};
const serializeAws_json1_1GetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupName !== undefined) {
        bodyParams["GroupName"] = input.GroupName;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetIdentityProviderByIdentifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.IdpIdentifier !== undefined) {
        bodyParams["IdpIdentifier"] = input.IdpIdentifier;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSigningCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetUICustomizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetUserAttributeVerificationCodeRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetUserPoolMfaConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GlobalSignOutRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    return bodyParams;
};
const serializeAws_json1_1HttpHeader = (input, context) => {
    const bodyParams = {};
    if (input.headerName !== undefined) {
        bodyParams["headerName"] = input.headerName;
    }
    if (input.headerValue !== undefined) {
        bodyParams["headerValue"] = input.headerValue;
    }
    return bodyParams;
};
const serializeAws_json1_1HttpHeaderList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1HttpHeader(entry, context));
    }
    return contents;
};
const serializeAws_json1_1IdpIdentifiersListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InitiateAuthRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnalyticsMetadata !== undefined) {
        bodyParams["AnalyticsMetadata"] = serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context);
    }
    if (input.AuthFlow !== undefined) {
        bodyParams["AuthFlow"] = input.AuthFlow;
    }
    if (input.AuthParameters !== undefined) {
        bodyParams["AuthParameters"] = serializeAws_json1_1AuthParametersType(input.AuthParameters, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.UserContextData !== undefined) {
        bodyParams["UserContextData"] = serializeAws_json1_1UserContextDataType(input.UserContextData, context);
    }
    return bodyParams;
};
const serializeAws_json1_1LambdaConfigType = (input, context) => {
    const bodyParams = {};
    if (input.CreateAuthChallenge !== undefined) {
        bodyParams["CreateAuthChallenge"] = input.CreateAuthChallenge;
    }
    if (input.CustomMessage !== undefined) {
        bodyParams["CustomMessage"] = input.CustomMessage;
    }
    if (input.DefineAuthChallenge !== undefined) {
        bodyParams["DefineAuthChallenge"] = input.DefineAuthChallenge;
    }
    if (input.PostAuthentication !== undefined) {
        bodyParams["PostAuthentication"] = input.PostAuthentication;
    }
    if (input.PostConfirmation !== undefined) {
        bodyParams["PostConfirmation"] = input.PostConfirmation;
    }
    if (input.PreAuthentication !== undefined) {
        bodyParams["PreAuthentication"] = input.PreAuthentication;
    }
    if (input.PreSignUp !== undefined) {
        bodyParams["PreSignUp"] = input.PreSignUp;
    }
    if (input.PreTokenGeneration !== undefined) {
        bodyParams["PreTokenGeneration"] = input.PreTokenGeneration;
    }
    if (input.UserMigration !== undefined) {
        bodyParams["UserMigration"] = input.UserMigration;
    }
    if (input.VerifyAuthChallengeResponse !== undefined) {
        bodyParams["VerifyAuthChallengeResponse"] =
            input.VerifyAuthChallengeResponse;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDevicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.PaginationToken !== undefined) {
        bodyParams["PaginationToken"] = input.PaginationToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListIdentityProvidersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourceServersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListUserImportJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.PaginationToken !== undefined) {
        bodyParams["PaginationToken"] = input.PaginationToken;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListUserPoolClientsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListUserPoolsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListUsersInGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GroupName !== undefined) {
        bodyParams["GroupName"] = input.GroupName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListUsersRequest = (input, context) => {
    const bodyParams = {};
    if (input.AttributesToGet !== undefined) {
        bodyParams["AttributesToGet"] = serializeAws_json1_1SearchedAttributeNamesListType(input.AttributesToGet, context);
    }
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = input.Filter;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.PaginationToken !== undefined) {
        bodyParams["PaginationToken"] = input.PaginationToken;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1LogoutURLsListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1MFAOptionListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MFAOptionType(entry, context));
    }
    return contents;
};
const serializeAws_json1_1MFAOptionType = (input, context) => {
    const bodyParams = {};
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.DeliveryMedium !== undefined) {
        bodyParams["DeliveryMedium"] = input.DeliveryMedium;
    }
    return bodyParams;
};
const serializeAws_json1_1MessageTemplateType = (input, context) => {
    const bodyParams = {};
    if (input.EmailMessage !== undefined) {
        bodyParams["EmailMessage"] = input.EmailMessage;
    }
    if (input.EmailSubject !== undefined) {
        bodyParams["EmailSubject"] = input.EmailSubject;
    }
    if (input.SMSMessage !== undefined) {
        bodyParams["SMSMessage"] = input.SMSMessage;
    }
    return bodyParams;
};
const serializeAws_json1_1NotifyConfigurationType = (input, context) => {
    const bodyParams = {};
    if (input.BlockEmail !== undefined) {
        bodyParams["BlockEmail"] = serializeAws_json1_1NotifyEmailType(input.BlockEmail, context);
    }
    if (input.From !== undefined) {
        bodyParams["From"] = input.From;
    }
    if (input.MfaEmail !== undefined) {
        bodyParams["MfaEmail"] = serializeAws_json1_1NotifyEmailType(input.MfaEmail, context);
    }
    if (input.NoActionEmail !== undefined) {
        bodyParams["NoActionEmail"] = serializeAws_json1_1NotifyEmailType(input.NoActionEmail, context);
    }
    if (input.ReplyTo !== undefined) {
        bodyParams["ReplyTo"] = input.ReplyTo;
    }
    if (input.SourceArn !== undefined) {
        bodyParams["SourceArn"] = input.SourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1NotifyEmailType = (input, context) => {
    const bodyParams = {};
    if (input.HtmlBody !== undefined) {
        bodyParams["HtmlBody"] = input.HtmlBody;
    }
    if (input.Subject !== undefined) {
        bodyParams["Subject"] = input.Subject;
    }
    if (input.TextBody !== undefined) {
        bodyParams["TextBody"] = input.TextBody;
    }
    return bodyParams;
};
const serializeAws_json1_1NumberAttributeConstraintsType = (input, context) => {
    const bodyParams = {};
    if (input.MaxValue !== undefined) {
        bodyParams["MaxValue"] = input.MaxValue;
    }
    if (input.MinValue !== undefined) {
        bodyParams["MinValue"] = input.MinValue;
    }
    return bodyParams;
};
const serializeAws_json1_1OAuthFlowsType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PasswordPolicyType = (input, context) => {
    const bodyParams = {};
    if (input.MinimumLength !== undefined) {
        bodyParams["MinimumLength"] = input.MinimumLength;
    }
    if (input.RequireLowercase !== undefined) {
        bodyParams["RequireLowercase"] = input.RequireLowercase;
    }
    if (input.RequireNumbers !== undefined) {
        bodyParams["RequireNumbers"] = input.RequireNumbers;
    }
    if (input.RequireSymbols !== undefined) {
        bodyParams["RequireSymbols"] = input.RequireSymbols;
    }
    if (input.RequireUppercase !== undefined) {
        bodyParams["RequireUppercase"] = input.RequireUppercase;
    }
    if (input.TemporaryPasswordValidityDays !== undefined) {
        bodyParams["TemporaryPasswordValidityDays"] =
            input.TemporaryPasswordValidityDays;
    }
    return bodyParams;
};
const serializeAws_json1_1ProviderDetailsType = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ProviderUserIdentifierType = (input, context) => {
    const bodyParams = {};
    if (input.ProviderAttributeName !== undefined) {
        bodyParams["ProviderAttributeName"] = input.ProviderAttributeName;
    }
    if (input.ProviderAttributeValue !== undefined) {
        bodyParams["ProviderAttributeValue"] = input.ProviderAttributeValue;
    }
    if (input.ProviderName !== undefined) {
        bodyParams["ProviderName"] = input.ProviderName;
    }
    return bodyParams;
};
const serializeAws_json1_1RecoveryMechanismsType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RecoveryOptionType(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RecoveryOptionType = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Priority !== undefined) {
        bodyParams["Priority"] = input.Priority;
    }
    return bodyParams;
};
const serializeAws_json1_1ResendConfirmationCodeRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnalyticsMetadata !== undefined) {
        bodyParams["AnalyticsMetadata"] = serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.SecretHash !== undefined) {
        bodyParams["SecretHash"] = input.SecretHash;
    }
    if (input.UserContextData !== undefined) {
        bodyParams["UserContextData"] = serializeAws_json1_1UserContextDataType(input.UserContextData, context);
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceServerScopeListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ResourceServerScopeType(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ResourceServerScopeType = (input, context) => {
    const bodyParams = {};
    if (input.ScopeDescription !== undefined) {
        bodyParams["ScopeDescription"] = input.ScopeDescription;
    }
    if (input.ScopeName !== undefined) {
        bodyParams["ScopeName"] = input.ScopeName;
    }
    return bodyParams;
};
const serializeAws_json1_1RespondToAuthChallengeRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnalyticsMetadata !== undefined) {
        bodyParams["AnalyticsMetadata"] = serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context);
    }
    if (input.ChallengeName !== undefined) {
        bodyParams["ChallengeName"] = input.ChallengeName;
    }
    if (input.ChallengeResponses !== undefined) {
        bodyParams["ChallengeResponses"] = serializeAws_json1_1ChallengeResponsesType(input.ChallengeResponses, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.Session !== undefined) {
        bodyParams["Session"] = input.Session;
    }
    if (input.UserContextData !== undefined) {
        bodyParams["UserContextData"] = serializeAws_json1_1UserContextDataType(input.UserContextData, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RiskExceptionConfigurationType = (input, context) => {
    const bodyParams = {};
    if (input.BlockedIPRangeList !== undefined) {
        bodyParams["BlockedIPRangeList"] = serializeAws_json1_1BlockedIPRangeListType(input.BlockedIPRangeList, context);
    }
    if (input.SkippedIPRangeList !== undefined) {
        bodyParams["SkippedIPRangeList"] = serializeAws_json1_1SkippedIPRangeListType(input.SkippedIPRangeList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SMSMfaSettingsType = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.PreferredMfa !== undefined) {
        bodyParams["PreferredMfa"] = input.PreferredMfa;
    }
    return bodyParams;
};
const serializeAws_json1_1SchemaAttributeType = (input, context) => {
    const bodyParams = {};
    if (input.AttributeDataType !== undefined) {
        bodyParams["AttributeDataType"] = input.AttributeDataType;
    }
    if (input.DeveloperOnlyAttribute !== undefined) {
        bodyParams["DeveloperOnlyAttribute"] = input.DeveloperOnlyAttribute;
    }
    if (input.Mutable !== undefined) {
        bodyParams["Mutable"] = input.Mutable;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NumberAttributeConstraints !== undefined) {
        bodyParams["NumberAttributeConstraints"] = serializeAws_json1_1NumberAttributeConstraintsType(input.NumberAttributeConstraints, context);
    }
    if (input.Required !== undefined) {
        bodyParams["Required"] = input.Required;
    }
    if (input.StringAttributeConstraints !== undefined) {
        bodyParams["StringAttributeConstraints"] = serializeAws_json1_1StringAttributeConstraintsType(input.StringAttributeConstraints, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SchemaAttributesListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SchemaAttributeType(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ScopeListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SearchedAttributeNamesListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SetRiskConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountTakeoverRiskConfiguration !== undefined) {
        bodyParams["AccountTakeoverRiskConfiguration"] = serializeAws_json1_1AccountTakeoverRiskConfigurationType(input.AccountTakeoverRiskConfiguration, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.CompromisedCredentialsRiskConfiguration !== undefined) {
        bodyParams["CompromisedCredentialsRiskConfiguration"] = serializeAws_json1_1CompromisedCredentialsRiskConfigurationType(input.CompromisedCredentialsRiskConfiguration, context);
    }
    if (input.RiskExceptionConfiguration !== undefined) {
        bodyParams["RiskExceptionConfiguration"] = serializeAws_json1_1RiskExceptionConfigurationType(input.RiskExceptionConfiguration, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1SetUICustomizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.CSS !== undefined) {
        bodyParams["CSS"] = input.CSS;
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ImageFile !== undefined) {
        bodyParams["ImageFile"] = Buffer.from(input.ImageFile).toString("utf-8");
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1SetUserMFAPreferenceRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.SMSMfaSettings !== undefined) {
        bodyParams["SMSMfaSettings"] = serializeAws_json1_1SMSMfaSettingsType(input.SMSMfaSettings, context);
    }
    if (input.SoftwareTokenMfaSettings !== undefined) {
        bodyParams["SoftwareTokenMfaSettings"] = serializeAws_json1_1SoftwareTokenMfaSettingsType(input.SoftwareTokenMfaSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SetUserPoolMfaConfigRequest = (input, context) => {
    const bodyParams = {};
    if (input.MfaConfiguration !== undefined) {
        bodyParams["MfaConfiguration"] = input.MfaConfiguration;
    }
    if (input.SmsMfaConfiguration !== undefined) {
        bodyParams["SmsMfaConfiguration"] = serializeAws_json1_1SmsMfaConfigType(input.SmsMfaConfiguration, context);
    }
    if (input.SoftwareTokenMfaConfiguration !== undefined) {
        bodyParams["SoftwareTokenMfaConfiguration"] = serializeAws_json1_1SoftwareTokenMfaConfigType(input.SoftwareTokenMfaConfiguration, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1SetUserSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.MFAOptions !== undefined) {
        bodyParams["MFAOptions"] = serializeAws_json1_1MFAOptionListType(input.MFAOptions, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SignUpRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnalyticsMetadata !== undefined) {
        bodyParams["AnalyticsMetadata"] = serializeAws_json1_1AnalyticsMetadataType(input.AnalyticsMetadata, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.SecretHash !== undefined) {
        bodyParams["SecretHash"] = input.SecretHash;
    }
    if (input.UserAttributes !== undefined) {
        bodyParams["UserAttributes"] = serializeAws_json1_1AttributeListType(input.UserAttributes, context);
    }
    if (input.UserContextData !== undefined) {
        bodyParams["UserContextData"] = serializeAws_json1_1UserContextDataType(input.UserContextData, context);
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    if (input.ValidationData !== undefined) {
        bodyParams["ValidationData"] = serializeAws_json1_1AttributeListType(input.ValidationData, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SkippedIPRangeListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SmsConfigurationType = (input, context) => {
    const bodyParams = {};
    if (input.ExternalId !== undefined) {
        bodyParams["ExternalId"] = input.ExternalId;
    }
    if (input.SnsCallerArn !== undefined) {
        bodyParams["SnsCallerArn"] = input.SnsCallerArn;
    }
    return bodyParams;
};
const serializeAws_json1_1SmsMfaConfigType = (input, context) => {
    const bodyParams = {};
    if (input.SmsAuthenticationMessage !== undefined) {
        bodyParams["SmsAuthenticationMessage"] = input.SmsAuthenticationMessage;
    }
    if (input.SmsConfiguration !== undefined) {
        bodyParams["SmsConfiguration"] = serializeAws_json1_1SmsConfigurationType(input.SmsConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SoftwareTokenMfaConfigType = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    return bodyParams;
};
const serializeAws_json1_1SoftwareTokenMfaSettingsType = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.PreferredMfa !== undefined) {
        bodyParams["PreferredMfa"] = input.PreferredMfa;
    }
    return bodyParams;
};
const serializeAws_json1_1StartUserImportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopUserImportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1StringAttributeConstraintsType = (input, context) => {
    const bodyParams = {};
    if (input.MaxLength !== undefined) {
        bodyParams["MaxLength"] = input.MaxLength;
    }
    if (input.MinLength !== undefined) {
        bodyParams["MinLength"] = input.MinLength;
    }
    return bodyParams;
};
const serializeAws_json1_1SupportedIdentityProvidersListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1UserPoolTagsType(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1UserPoolTagsListType(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAuthEventFeedbackRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventId !== undefined) {
        bodyParams["EventId"] = input.EventId;
    }
    if (input.FeedbackToken !== undefined) {
        bodyParams["FeedbackToken"] = input.FeedbackToken;
    }
    if (input.FeedbackValue !== undefined) {
        bodyParams["FeedbackValue"] = input.FeedbackValue;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDeviceStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.DeviceKey !== undefined) {
        bodyParams["DeviceKey"] = input.DeviceKey;
    }
    if (input.DeviceRememberedStatus !== undefined) {
        bodyParams["DeviceRememberedStatus"] = input.DeviceRememberedStatus;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.GroupName !== undefined) {
        bodyParams["GroupName"] = input.GroupName;
    }
    if (input.Precedence !== undefined) {
        bodyParams["Precedence"] = input.Precedence;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateIdentityProviderRequest = (input, context) => {
    const bodyParams = {};
    if (input.AttributeMapping !== undefined) {
        bodyParams["AttributeMapping"] = serializeAws_json1_1AttributeMappingType(input.AttributeMapping, context);
    }
    if (input.IdpIdentifiers !== undefined) {
        bodyParams["IdpIdentifiers"] = serializeAws_json1_1IdpIdentifiersListType(input.IdpIdentifiers, context);
    }
    if (input.ProviderDetails !== undefined) {
        bodyParams["ProviderDetails"] = serializeAws_json1_1ProviderDetailsType(input.ProviderDetails, context);
    }
    if (input.ProviderName !== undefined) {
        bodyParams["ProviderName"] = input.ProviderName;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateResourceServerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Identifier !== undefined) {
        bodyParams["Identifier"] = input.Identifier;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Scopes !== undefined) {
        bodyParams["Scopes"] = serializeAws_json1_1ResourceServerScopeListType(input.Scopes, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateUserAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.ClientMetadata !== undefined) {
        bodyParams["ClientMetadata"] = serializeAws_json1_1ClientMetadataType(input.ClientMetadata, context);
    }
    if (input.UserAttributes !== undefined) {
        bodyParams["UserAttributes"] = serializeAws_json1_1AttributeListType(input.UserAttributes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateUserPoolClientRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllowedOAuthFlows !== undefined) {
        bodyParams["AllowedOAuthFlows"] = serializeAws_json1_1OAuthFlowsType(input.AllowedOAuthFlows, context);
    }
    if (input.AllowedOAuthFlowsUserPoolClient !== undefined) {
        bodyParams["AllowedOAuthFlowsUserPoolClient"] =
            input.AllowedOAuthFlowsUserPoolClient;
    }
    if (input.AllowedOAuthScopes !== undefined) {
        bodyParams["AllowedOAuthScopes"] = serializeAws_json1_1ScopeListType(input.AllowedOAuthScopes, context);
    }
    if (input.AnalyticsConfiguration !== undefined) {
        bodyParams["AnalyticsConfiguration"] = serializeAws_json1_1AnalyticsConfigurationType(input.AnalyticsConfiguration, context);
    }
    if (input.CallbackURLs !== undefined) {
        bodyParams["CallbackURLs"] = serializeAws_json1_1CallbackURLsListType(input.CallbackURLs, context);
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.ClientName !== undefined) {
        bodyParams["ClientName"] = input.ClientName;
    }
    if (input.DefaultRedirectURI !== undefined) {
        bodyParams["DefaultRedirectURI"] = input.DefaultRedirectURI;
    }
    if (input.ExplicitAuthFlows !== undefined) {
        bodyParams["ExplicitAuthFlows"] = serializeAws_json1_1ExplicitAuthFlowsListType(input.ExplicitAuthFlows, context);
    }
    if (input.LogoutURLs !== undefined) {
        bodyParams["LogoutURLs"] = serializeAws_json1_1LogoutURLsListType(input.LogoutURLs, context);
    }
    if (input.PreventUserExistenceErrors !== undefined) {
        bodyParams["PreventUserExistenceErrors"] = input.PreventUserExistenceErrors;
    }
    if (input.ReadAttributes !== undefined) {
        bodyParams["ReadAttributes"] = serializeAws_json1_1ClientPermissionListType(input.ReadAttributes, context);
    }
    if (input.RefreshTokenValidity !== undefined) {
        bodyParams["RefreshTokenValidity"] = input.RefreshTokenValidity;
    }
    if (input.SupportedIdentityProviders !== undefined) {
        bodyParams["SupportedIdentityProviders"] = serializeAws_json1_1SupportedIdentityProvidersListType(input.SupportedIdentityProviders, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.WriteAttributes !== undefined) {
        bodyParams["WriteAttributes"] = serializeAws_json1_1ClientPermissionListType(input.WriteAttributes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateUserPoolDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.CustomDomainConfig !== undefined) {
        bodyParams["CustomDomainConfig"] = serializeAws_json1_1CustomDomainConfigType(input.CustomDomainConfig, context);
    }
    if (input.Domain !== undefined) {
        bodyParams["Domain"] = input.Domain;
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateUserPoolRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountRecoverySetting !== undefined) {
        bodyParams["AccountRecoverySetting"] = serializeAws_json1_1AccountRecoverySettingType(input.AccountRecoverySetting, context);
    }
    if (input.AdminCreateUserConfig !== undefined) {
        bodyParams["AdminCreateUserConfig"] = serializeAws_json1_1AdminCreateUserConfigType(input.AdminCreateUserConfig, context);
    }
    if (input.AutoVerifiedAttributes !== undefined) {
        bodyParams["AutoVerifiedAttributes"] = serializeAws_json1_1VerifiedAttributesListType(input.AutoVerifiedAttributes, context);
    }
    if (input.DeviceConfiguration !== undefined) {
        bodyParams["DeviceConfiguration"] = serializeAws_json1_1DeviceConfigurationType(input.DeviceConfiguration, context);
    }
    if (input.EmailConfiguration !== undefined) {
        bodyParams["EmailConfiguration"] = serializeAws_json1_1EmailConfigurationType(input.EmailConfiguration, context);
    }
    if (input.EmailVerificationMessage !== undefined) {
        bodyParams["EmailVerificationMessage"] = input.EmailVerificationMessage;
    }
    if (input.EmailVerificationSubject !== undefined) {
        bodyParams["EmailVerificationSubject"] = input.EmailVerificationSubject;
    }
    if (input.LambdaConfig !== undefined) {
        bodyParams["LambdaConfig"] = serializeAws_json1_1LambdaConfigType(input.LambdaConfig, context);
    }
    if (input.MfaConfiguration !== undefined) {
        bodyParams["MfaConfiguration"] = input.MfaConfiguration;
    }
    if (input.Policies !== undefined) {
        bodyParams["Policies"] = serializeAws_json1_1UserPoolPolicyType(input.Policies, context);
    }
    if (input.SmsAuthenticationMessage !== undefined) {
        bodyParams["SmsAuthenticationMessage"] = input.SmsAuthenticationMessage;
    }
    if (input.SmsConfiguration !== undefined) {
        bodyParams["SmsConfiguration"] = serializeAws_json1_1SmsConfigurationType(input.SmsConfiguration, context);
    }
    if (input.SmsVerificationMessage !== undefined) {
        bodyParams["SmsVerificationMessage"] = input.SmsVerificationMessage;
    }
    if (input.UserPoolAddOns !== undefined) {
        bodyParams["UserPoolAddOns"] = serializeAws_json1_1UserPoolAddOnsType(input.UserPoolAddOns, context);
    }
    if (input.UserPoolId !== undefined) {
        bodyParams["UserPoolId"] = input.UserPoolId;
    }
    if (input.UserPoolTags !== undefined) {
        bodyParams["UserPoolTags"] = serializeAws_json1_1UserPoolTagsType(input.UserPoolTags, context);
    }
    if (input.VerificationMessageTemplate !== undefined) {
        bodyParams["VerificationMessageTemplate"] = serializeAws_json1_1VerificationMessageTemplateType(input.VerificationMessageTemplate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UserContextDataType = (input, context) => {
    const bodyParams = {};
    if (input.EncodedData !== undefined) {
        bodyParams["EncodedData"] = input.EncodedData;
    }
    return bodyParams;
};
const serializeAws_json1_1UserPoolAddOnsType = (input, context) => {
    const bodyParams = {};
    if (input.AdvancedSecurityMode !== undefined) {
        bodyParams["AdvancedSecurityMode"] = input.AdvancedSecurityMode;
    }
    return bodyParams;
};
const serializeAws_json1_1UserPoolPolicyType = (input, context) => {
    const bodyParams = {};
    if (input.PasswordPolicy !== undefined) {
        bodyParams["PasswordPolicy"] = serializeAws_json1_1PasswordPolicyType(input.PasswordPolicy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UserPoolTagsListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UserPoolTagsType = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1UsernameAttributesListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1VerificationMessageTemplateType = (input, context) => {
    const bodyParams = {};
    if (input.DefaultEmailOption !== undefined) {
        bodyParams["DefaultEmailOption"] = input.DefaultEmailOption;
    }
    if (input.EmailMessage !== undefined) {
        bodyParams["EmailMessage"] = input.EmailMessage;
    }
    if (input.EmailMessageByLink !== undefined) {
        bodyParams["EmailMessageByLink"] = input.EmailMessageByLink;
    }
    if (input.EmailSubject !== undefined) {
        bodyParams["EmailSubject"] = input.EmailSubject;
    }
    if (input.EmailSubjectByLink !== undefined) {
        bodyParams["EmailSubjectByLink"] = input.EmailSubjectByLink;
    }
    if (input.SmsMessage !== undefined) {
        bodyParams["SmsMessage"] = input.SmsMessage;
    }
    return bodyParams;
};
const serializeAws_json1_1VerifiedAttributesListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1VerifySoftwareTokenRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.FriendlyDeviceName !== undefined) {
        bodyParams["FriendlyDeviceName"] = input.FriendlyDeviceName;
    }
    if (input.Session !== undefined) {
        bodyParams["Session"] = input.Session;
    }
    if (input.UserCode !== undefined) {
        bodyParams["UserCode"] = input.UserCode;
    }
    return bodyParams;
};
const serializeAws_json1_1VerifyUserAttributeRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccessToken !== undefined) {
        bodyParams["AccessToken"] = input.AccessToken;
    }
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.Code !== undefined) {
        bodyParams["Code"] = input.Code;
    }
    return bodyParams;
};
const deserializeAws_json1_1AccountRecoverySettingType = (output, context) => {
    let contents = {
        __type: "AccountRecoverySettingType",
        RecoveryMechanisms: undefined
    };
    if (output.RecoveryMechanisms !== undefined &&
        output.RecoveryMechanisms !== null) {
        contents.RecoveryMechanisms = deserializeAws_json1_1RecoveryMechanismsType(output.RecoveryMechanisms, context);
    }
    return contents;
};
const deserializeAws_json1_1AccountTakeoverActionType = (output, context) => {
    let contents = {
        __type: "AccountTakeoverActionType",
        EventAction: undefined,
        Notify: undefined
    };
    if (output.EventAction !== undefined && output.EventAction !== null) {
        contents.EventAction = output.EventAction;
    }
    if (output.Notify !== undefined && output.Notify !== null) {
        contents.Notify = output.Notify;
    }
    return contents;
};
const deserializeAws_json1_1AccountTakeoverActionsType = (output, context) => {
    let contents = {
        __type: "AccountTakeoverActionsType",
        HighAction: undefined,
        LowAction: undefined,
        MediumAction: undefined
    };
    if (output.HighAction !== undefined && output.HighAction !== null) {
        contents.HighAction = deserializeAws_json1_1AccountTakeoverActionType(output.HighAction, context);
    }
    if (output.LowAction !== undefined && output.LowAction !== null) {
        contents.LowAction = deserializeAws_json1_1AccountTakeoverActionType(output.LowAction, context);
    }
    if (output.MediumAction !== undefined && output.MediumAction !== null) {
        contents.MediumAction = deserializeAws_json1_1AccountTakeoverActionType(output.MediumAction, context);
    }
    return contents;
};
const deserializeAws_json1_1AccountTakeoverRiskConfigurationType = (output, context) => {
    let contents = {
        __type: "AccountTakeoverRiskConfigurationType",
        Actions: undefined,
        NotifyConfiguration: undefined
    };
    if (output.Actions !== undefined && output.Actions !== null) {
        contents.Actions = deserializeAws_json1_1AccountTakeoverActionsType(output.Actions, context);
    }
    if (output.NotifyConfiguration !== undefined &&
        output.NotifyConfiguration !== null) {
        contents.NotifyConfiguration = deserializeAws_json1_1NotifyConfigurationType(output.NotifyConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1AddCustomAttributesResponse = (output, context) => {
    let contents = {
        __type: "AddCustomAttributesResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminConfirmSignUpResponse = (output, context) => {
    let contents = {
        __type: "AdminConfirmSignUpResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminCreateUserConfigType = (output, context) => {
    let contents = {
        __type: "AdminCreateUserConfigType",
        AllowAdminCreateUserOnly: undefined,
        InviteMessageTemplate: undefined,
        UnusedAccountValidityDays: undefined
    };
    if (output.AllowAdminCreateUserOnly !== undefined &&
        output.AllowAdminCreateUserOnly !== null) {
        contents.AllowAdminCreateUserOnly = output.AllowAdminCreateUserOnly;
    }
    if (output.InviteMessageTemplate !== undefined &&
        output.InviteMessageTemplate !== null) {
        contents.InviteMessageTemplate = deserializeAws_json1_1MessageTemplateType(output.InviteMessageTemplate, context);
    }
    if (output.UnusedAccountValidityDays !== undefined &&
        output.UnusedAccountValidityDays !== null) {
        contents.UnusedAccountValidityDays = output.UnusedAccountValidityDays;
    }
    return contents;
};
const deserializeAws_json1_1AdminCreateUserResponse = (output, context) => {
    let contents = {
        __type: "AdminCreateUserResponse",
        User: undefined
    };
    if (output.User !== undefined && output.User !== null) {
        contents.User = deserializeAws_json1_1UserType(output.User, context);
    }
    return contents;
};
const deserializeAws_json1_1AdminDeleteUserAttributesResponse = (output, context) => {
    let contents = {
        __type: "AdminDeleteUserAttributesResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminDisableProviderForUserResponse = (output, context) => {
    let contents = {
        __type: "AdminDisableProviderForUserResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminDisableUserResponse = (output, context) => {
    let contents = {
        __type: "AdminDisableUserResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminEnableUserResponse = (output, context) => {
    let contents = {
        __type: "AdminEnableUserResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminGetDeviceResponse = (output, context) => {
    let contents = {
        __type: "AdminGetDeviceResponse",
        Device: undefined
    };
    if (output.Device !== undefined && output.Device !== null) {
        contents.Device = deserializeAws_json1_1DeviceType(output.Device, context);
    }
    return contents;
};
const deserializeAws_json1_1AdminGetUserResponse = (output, context) => {
    let contents = {
        __type: "AdminGetUserResponse",
        Enabled: undefined,
        MFAOptions: undefined,
        PreferredMfaSetting: undefined,
        UserAttributes: undefined,
        UserCreateDate: undefined,
        UserLastModifiedDate: undefined,
        UserMFASettingList: undefined,
        UserStatus: undefined,
        Username: undefined
    };
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.MFAOptions !== undefined && output.MFAOptions !== null) {
        contents.MFAOptions = deserializeAws_json1_1MFAOptionListType(output.MFAOptions, context);
    }
    if (output.PreferredMfaSetting !== undefined &&
        output.PreferredMfaSetting !== null) {
        contents.PreferredMfaSetting = output.PreferredMfaSetting;
    }
    if (output.UserAttributes !== undefined && output.UserAttributes !== null) {
        contents.UserAttributes = deserializeAws_json1_1AttributeListType(output.UserAttributes, context);
    }
    if (output.UserCreateDate !== undefined && output.UserCreateDate !== null) {
        contents.UserCreateDate = new Date(Math.round(output.UserCreateDate * 1000));
    }
    if (output.UserLastModifiedDate !== undefined &&
        output.UserLastModifiedDate !== null) {
        contents.UserLastModifiedDate = new Date(Math.round(output.UserLastModifiedDate * 1000));
    }
    if (output.UserMFASettingList !== undefined &&
        output.UserMFASettingList !== null) {
        contents.UserMFASettingList = deserializeAws_json1_1UserMFASettingListType(output.UserMFASettingList, context);
    }
    if (output.UserStatus !== undefined && output.UserStatus !== null) {
        contents.UserStatus = output.UserStatus;
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    return contents;
};
const deserializeAws_json1_1AdminInitiateAuthResponse = (output, context) => {
    let contents = {
        __type: "AdminInitiateAuthResponse",
        AuthenticationResult: undefined,
        ChallengeName: undefined,
        ChallengeParameters: undefined,
        Session: undefined
    };
    if (output.AuthenticationResult !== undefined &&
        output.AuthenticationResult !== null) {
        contents.AuthenticationResult = deserializeAws_json1_1AuthenticationResultType(output.AuthenticationResult, context);
    }
    if (output.ChallengeName !== undefined && output.ChallengeName !== null) {
        contents.ChallengeName = output.ChallengeName;
    }
    if (output.ChallengeParameters !== undefined &&
        output.ChallengeParameters !== null) {
        contents.ChallengeParameters = deserializeAws_json1_1ChallengeParametersType(output.ChallengeParameters, context);
    }
    if (output.Session !== undefined && output.Session !== null) {
        contents.Session = output.Session;
    }
    return contents;
};
const deserializeAws_json1_1AdminLinkProviderForUserResponse = (output, context) => {
    let contents = {
        __type: "AdminLinkProviderForUserResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminListDevicesResponse = (output, context) => {
    let contents = {
        __type: "AdminListDevicesResponse",
        Devices: undefined,
        PaginationToken: undefined
    };
    if (output.Devices !== undefined && output.Devices !== null) {
        contents.Devices = deserializeAws_json1_1DeviceListType(output.Devices, context);
    }
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    return contents;
};
const deserializeAws_json1_1AdminListGroupsForUserResponse = (output, context) => {
    let contents = {
        __type: "AdminListGroupsForUserResponse",
        Groups: undefined,
        NextToken: undefined
    };
    if (output.Groups !== undefined && output.Groups !== null) {
        contents.Groups = deserializeAws_json1_1GroupListType(output.Groups, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1AdminListUserAuthEventsResponse = (output, context) => {
    let contents = {
        __type: "AdminListUserAuthEventsResponse",
        AuthEvents: undefined,
        NextToken: undefined
    };
    if (output.AuthEvents !== undefined && output.AuthEvents !== null) {
        contents.AuthEvents = deserializeAws_json1_1AuthEventsType(output.AuthEvents, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1AdminResetUserPasswordResponse = (output, context) => {
    let contents = {
        __type: "AdminResetUserPasswordResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminRespondToAuthChallengeResponse = (output, context) => {
    let contents = {
        __type: "AdminRespondToAuthChallengeResponse",
        AuthenticationResult: undefined,
        ChallengeName: undefined,
        ChallengeParameters: undefined,
        Session: undefined
    };
    if (output.AuthenticationResult !== undefined &&
        output.AuthenticationResult !== null) {
        contents.AuthenticationResult = deserializeAws_json1_1AuthenticationResultType(output.AuthenticationResult, context);
    }
    if (output.ChallengeName !== undefined && output.ChallengeName !== null) {
        contents.ChallengeName = output.ChallengeName;
    }
    if (output.ChallengeParameters !== undefined &&
        output.ChallengeParameters !== null) {
        contents.ChallengeParameters = deserializeAws_json1_1ChallengeParametersType(output.ChallengeParameters, context);
    }
    if (output.Session !== undefined && output.Session !== null) {
        contents.Session = output.Session;
    }
    return contents;
};
const deserializeAws_json1_1AdminSetUserMFAPreferenceResponse = (output, context) => {
    let contents = {
        __type: "AdminSetUserMFAPreferenceResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminSetUserPasswordResponse = (output, context) => {
    let contents = {
        __type: "AdminSetUserPasswordResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminSetUserSettingsResponse = (output, context) => {
    let contents = {
        __type: "AdminSetUserSettingsResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminUpdateAuthEventFeedbackResponse = (output, context) => {
    let contents = {
        __type: "AdminUpdateAuthEventFeedbackResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminUpdateDeviceStatusResponse = (output, context) => {
    let contents = {
        __type: "AdminUpdateDeviceStatusResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminUpdateUserAttributesResponse = (output, context) => {
    let contents = {
        __type: "AdminUpdateUserAttributesResponse"
    };
    return contents;
};
const deserializeAws_json1_1AdminUserGlobalSignOutResponse = (output, context) => {
    let contents = {
        __type: "AdminUserGlobalSignOutResponse"
    };
    return contents;
};
const deserializeAws_json1_1AliasAttributesListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AliasExistsException = (output, context) => {
    let contents = {
        __type: "AliasExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AnalyticsConfigurationType = (output, context) => {
    let contents = {
        __type: "AnalyticsConfigurationType",
        ApplicationId: undefined,
        ExternalId: undefined,
        RoleArn: undefined,
        UserDataShared: undefined
    };
    if (output.ApplicationId !== undefined && output.ApplicationId !== null) {
        contents.ApplicationId = output.ApplicationId;
    }
    if (output.ExternalId !== undefined && output.ExternalId !== null) {
        contents.ExternalId = output.ExternalId;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.UserDataShared !== undefined && output.UserDataShared !== null) {
        contents.UserDataShared = output.UserDataShared;
    }
    return contents;
};
const deserializeAws_json1_1AssociateSoftwareTokenResponse = (output, context) => {
    let contents = {
        __type: "AssociateSoftwareTokenResponse",
        SecretCode: undefined,
        Session: undefined
    };
    if (output.SecretCode !== undefined && output.SecretCode !== null) {
        contents.SecretCode = output.SecretCode;
    }
    if (output.Session !== undefined && output.Session !== null) {
        contents.Session = output.Session;
    }
    return contents;
};
const deserializeAws_json1_1AttributeListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AttributeType(entry, context));
};
const deserializeAws_json1_1AttributeMappingType = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1AttributeType = (output, context) => {
    let contents = {
        __type: "AttributeType",
        Name: undefined,
        Value: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1AuthEventType = (output, context) => {
    let contents = {
        __type: "AuthEventType",
        ChallengeResponses: undefined,
        CreationDate: undefined,
        EventContextData: undefined,
        EventFeedback: undefined,
        EventId: undefined,
        EventResponse: undefined,
        EventRisk: undefined,
        EventType: undefined
    };
    if (output.ChallengeResponses !== undefined &&
        output.ChallengeResponses !== null) {
        contents.ChallengeResponses = deserializeAws_json1_1ChallengeResponseListType(output.ChallengeResponses, context);
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.EventContextData !== undefined &&
        output.EventContextData !== null) {
        contents.EventContextData = deserializeAws_json1_1EventContextDataType(output.EventContextData, context);
    }
    if (output.EventFeedback !== undefined && output.EventFeedback !== null) {
        contents.EventFeedback = deserializeAws_json1_1EventFeedbackType(output.EventFeedback, context);
    }
    if (output.EventId !== undefined && output.EventId !== null) {
        contents.EventId = output.EventId;
    }
    if (output.EventResponse !== undefined && output.EventResponse !== null) {
        contents.EventResponse = output.EventResponse;
    }
    if (output.EventRisk !== undefined && output.EventRisk !== null) {
        contents.EventRisk = deserializeAws_json1_1EventRiskType(output.EventRisk, context);
    }
    if (output.EventType !== undefined && output.EventType !== null) {
        contents.EventType = output.EventType;
    }
    return contents;
};
const deserializeAws_json1_1AuthEventsType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AuthEventType(entry, context));
};
const deserializeAws_json1_1AuthenticationResultType = (output, context) => {
    let contents = {
        __type: "AuthenticationResultType",
        AccessToken: undefined,
        ExpiresIn: undefined,
        IdToken: undefined,
        NewDeviceMetadata: undefined,
        RefreshToken: undefined,
        TokenType: undefined
    };
    if (output.AccessToken !== undefined && output.AccessToken !== null) {
        contents.AccessToken = output.AccessToken;
    }
    if (output.ExpiresIn !== undefined && output.ExpiresIn !== null) {
        contents.ExpiresIn = output.ExpiresIn;
    }
    if (output.IdToken !== undefined && output.IdToken !== null) {
        contents.IdToken = output.IdToken;
    }
    if (output.NewDeviceMetadata !== undefined &&
        output.NewDeviceMetadata !== null) {
        contents.NewDeviceMetadata = deserializeAws_json1_1NewDeviceMetadataType(output.NewDeviceMetadata, context);
    }
    if (output.RefreshToken !== undefined && output.RefreshToken !== null) {
        contents.RefreshToken = output.RefreshToken;
    }
    if (output.TokenType !== undefined && output.TokenType !== null) {
        contents.TokenType = output.TokenType;
    }
    return contents;
};
const deserializeAws_json1_1BlockedIPRangeListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CallbackURLsListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ChallengeParametersType = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ChallengeResponseListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ChallengeResponseType(entry, context));
};
const deserializeAws_json1_1ChallengeResponseType = (output, context) => {
    let contents = {
        __type: "ChallengeResponseType",
        ChallengeName: undefined,
        ChallengeResponse: undefined
    };
    if (output.ChallengeName !== undefined && output.ChallengeName !== null) {
        contents.ChallengeName = output.ChallengeName;
    }
    if (output.ChallengeResponse !== undefined &&
        output.ChallengeResponse !== null) {
        contents.ChallengeResponse = output.ChallengeResponse;
    }
    return contents;
};
const deserializeAws_json1_1ChangePasswordResponse = (output, context) => {
    let contents = {
        __type: "ChangePasswordResponse"
    };
    return contents;
};
const deserializeAws_json1_1ClientPermissionListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CodeDeliveryDetailsListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CodeDeliveryDetailsType(entry, context));
};
const deserializeAws_json1_1CodeDeliveryDetailsType = (output, context) => {
    let contents = {
        __type: "CodeDeliveryDetailsType",
        AttributeName: undefined,
        DeliveryMedium: undefined,
        Destination: undefined
    };
    if (output.AttributeName !== undefined && output.AttributeName !== null) {
        contents.AttributeName = output.AttributeName;
    }
    if (output.DeliveryMedium !== undefined && output.DeliveryMedium !== null) {
        contents.DeliveryMedium = output.DeliveryMedium;
    }
    if (output.Destination !== undefined && output.Destination !== null) {
        contents.Destination = output.Destination;
    }
    return contents;
};
const deserializeAws_json1_1CodeDeliveryFailureException = (output, context) => {
    let contents = {
        __type: "CodeDeliveryFailureException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CodeMismatchException = (output, context) => {
    let contents = {
        __type: "CodeMismatchException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CompromisedCredentialsActionsType = (output, context) => {
    let contents = {
        __type: "CompromisedCredentialsActionsType",
        EventAction: undefined
    };
    if (output.EventAction !== undefined && output.EventAction !== null) {
        contents.EventAction = output.EventAction;
    }
    return contents;
};
const deserializeAws_json1_1CompromisedCredentialsRiskConfigurationType = (output, context) => {
    let contents = {
        __type: "CompromisedCredentialsRiskConfigurationType",
        Actions: undefined,
        EventFilter: undefined
    };
    if (output.Actions !== undefined && output.Actions !== null) {
        contents.Actions = deserializeAws_json1_1CompromisedCredentialsActionsType(output.Actions, context);
    }
    if (output.EventFilter !== undefined && output.EventFilter !== null) {
        contents.EventFilter = deserializeAws_json1_1EventFiltersType(output.EventFilter, context);
    }
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ConfirmDeviceResponse = (output, context) => {
    let contents = {
        __type: "ConfirmDeviceResponse",
        UserConfirmationNecessary: undefined
    };
    if (output.UserConfirmationNecessary !== undefined &&
        output.UserConfirmationNecessary !== null) {
        contents.UserConfirmationNecessary = output.UserConfirmationNecessary;
    }
    return contents;
};
const deserializeAws_json1_1ConfirmForgotPasswordResponse = (output, context) => {
    let contents = {
        __type: "ConfirmForgotPasswordResponse"
    };
    return contents;
};
const deserializeAws_json1_1ConfirmSignUpResponse = (output, context) => {
    let contents = {
        __type: "ConfirmSignUpResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateGroupResponse",
        Group: undefined
    };
    if (output.Group !== undefined && output.Group !== null) {
        contents.Group = deserializeAws_json1_1GroupType(output.Group, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateIdentityProviderResponse = (output, context) => {
    let contents = {
        __type: "CreateIdentityProviderResponse",
        IdentityProvider: undefined
    };
    if (output.IdentityProvider !== undefined &&
        output.IdentityProvider !== null) {
        contents.IdentityProvider = deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateResourceServerResponse = (output, context) => {
    let contents = {
        __type: "CreateResourceServerResponse",
        ResourceServer: undefined
    };
    if (output.ResourceServer !== undefined && output.ResourceServer !== null) {
        contents.ResourceServer = deserializeAws_json1_1ResourceServerType(output.ResourceServer, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateUserImportJobResponse = (output, context) => {
    let contents = {
        __type: "CreateUserImportJobResponse",
        UserImportJob: undefined
    };
    if (output.UserImportJob !== undefined && output.UserImportJob !== null) {
        contents.UserImportJob = deserializeAws_json1_1UserImportJobType(output.UserImportJob, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateUserPoolClientResponse = (output, context) => {
    let contents = {
        __type: "CreateUserPoolClientResponse",
        UserPoolClient: undefined
    };
    if (output.UserPoolClient !== undefined && output.UserPoolClient !== null) {
        contents.UserPoolClient = deserializeAws_json1_1UserPoolClientType(output.UserPoolClient, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateUserPoolDomainResponse = (output, context) => {
    let contents = {
        __type: "CreateUserPoolDomainResponse",
        CloudFrontDomain: undefined
    };
    if (output.CloudFrontDomain !== undefined &&
        output.CloudFrontDomain !== null) {
        contents.CloudFrontDomain = output.CloudFrontDomain;
    }
    return contents;
};
const deserializeAws_json1_1CreateUserPoolResponse = (output, context) => {
    let contents = {
        __type: "CreateUserPoolResponse",
        UserPool: undefined
    };
    if (output.UserPool !== undefined && output.UserPool !== null) {
        contents.UserPool = deserializeAws_json1_1UserPoolType(output.UserPool, context);
    }
    return contents;
};
const deserializeAws_json1_1CustomDomainConfigType = (output, context) => {
    let contents = {
        __type: "CustomDomainConfigType",
        CertificateArn: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteUserAttributesResponse = (output, context) => {
    let contents = {
        __type: "DeleteUserAttributesResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteUserPoolDomainResponse = (output, context) => {
    let contents = {
        __type: "DeleteUserPoolDomainResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeIdentityProviderResponse = (output, context) => {
    let contents = {
        __type: "DescribeIdentityProviderResponse",
        IdentityProvider: undefined
    };
    if (output.IdentityProvider !== undefined &&
        output.IdentityProvider !== null) {
        contents.IdentityProvider = deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeResourceServerResponse = (output, context) => {
    let contents = {
        __type: "DescribeResourceServerResponse",
        ResourceServer: undefined
    };
    if (output.ResourceServer !== undefined && output.ResourceServer !== null) {
        contents.ResourceServer = deserializeAws_json1_1ResourceServerType(output.ResourceServer, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRiskConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DescribeRiskConfigurationResponse",
        RiskConfiguration: undefined
    };
    if (output.RiskConfiguration !== undefined &&
        output.RiskConfiguration !== null) {
        contents.RiskConfiguration = deserializeAws_json1_1RiskConfigurationType(output.RiskConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeUserImportJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeUserImportJobResponse",
        UserImportJob: undefined
    };
    if (output.UserImportJob !== undefined && output.UserImportJob !== null) {
        contents.UserImportJob = deserializeAws_json1_1UserImportJobType(output.UserImportJob, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeUserPoolClientResponse = (output, context) => {
    let contents = {
        __type: "DescribeUserPoolClientResponse",
        UserPoolClient: undefined
    };
    if (output.UserPoolClient !== undefined && output.UserPoolClient !== null) {
        contents.UserPoolClient = deserializeAws_json1_1UserPoolClientType(output.UserPoolClient, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeUserPoolDomainResponse = (output, context) => {
    let contents = {
        __type: "DescribeUserPoolDomainResponse",
        DomainDescription: undefined
    };
    if (output.DomainDescription !== undefined &&
        output.DomainDescription !== null) {
        contents.DomainDescription = deserializeAws_json1_1DomainDescriptionType(output.DomainDescription, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeUserPoolResponse = (output, context) => {
    let contents = {
        __type: "DescribeUserPoolResponse",
        UserPool: undefined
    };
    if (output.UserPool !== undefined && output.UserPool !== null) {
        contents.UserPool = deserializeAws_json1_1UserPoolType(output.UserPool, context);
    }
    return contents;
};
const deserializeAws_json1_1DeviceConfigurationType = (output, context) => {
    let contents = {
        __type: "DeviceConfigurationType",
        ChallengeRequiredOnNewDevice: undefined,
        DeviceOnlyRememberedOnUserPrompt: undefined
    };
    if (output.ChallengeRequiredOnNewDevice !== undefined &&
        output.ChallengeRequiredOnNewDevice !== null) {
        contents.ChallengeRequiredOnNewDevice = output.ChallengeRequiredOnNewDevice;
    }
    if (output.DeviceOnlyRememberedOnUserPrompt !== undefined &&
        output.DeviceOnlyRememberedOnUserPrompt !== null) {
        contents.DeviceOnlyRememberedOnUserPrompt =
            output.DeviceOnlyRememberedOnUserPrompt;
    }
    return contents;
};
const deserializeAws_json1_1DeviceListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeviceType(entry, context));
};
const deserializeAws_json1_1DeviceType = (output, context) => {
    let contents = {
        __type: "DeviceType",
        DeviceAttributes: undefined,
        DeviceCreateDate: undefined,
        DeviceKey: undefined,
        DeviceLastAuthenticatedDate: undefined,
        DeviceLastModifiedDate: undefined
    };
    if (output.DeviceAttributes !== undefined &&
        output.DeviceAttributes !== null) {
        contents.DeviceAttributes = deserializeAws_json1_1AttributeListType(output.DeviceAttributes, context);
    }
    if (output.DeviceCreateDate !== undefined &&
        output.DeviceCreateDate !== null) {
        contents.DeviceCreateDate = new Date(Math.round(output.DeviceCreateDate * 1000));
    }
    if (output.DeviceKey !== undefined && output.DeviceKey !== null) {
        contents.DeviceKey = output.DeviceKey;
    }
    if (output.DeviceLastAuthenticatedDate !== undefined &&
        output.DeviceLastAuthenticatedDate !== null) {
        contents.DeviceLastAuthenticatedDate = new Date(Math.round(output.DeviceLastAuthenticatedDate * 1000));
    }
    if (output.DeviceLastModifiedDate !== undefined &&
        output.DeviceLastModifiedDate !== null) {
        contents.DeviceLastModifiedDate = new Date(Math.round(output.DeviceLastModifiedDate * 1000));
    }
    return contents;
};
const deserializeAws_json1_1DomainDescriptionType = (output, context) => {
    let contents = {
        __type: "DomainDescriptionType",
        AWSAccountId: undefined,
        CloudFrontDistribution: undefined,
        CustomDomainConfig: undefined,
        Domain: undefined,
        S3Bucket: undefined,
        Status: undefined,
        UserPoolId: undefined,
        Version: undefined
    };
    if (output.AWSAccountId !== undefined && output.AWSAccountId !== null) {
        contents.AWSAccountId = output.AWSAccountId;
    }
    if (output.CloudFrontDistribution !== undefined &&
        output.CloudFrontDistribution !== null) {
        contents.CloudFrontDistribution = output.CloudFrontDistribution;
    }
    if (output.CustomDomainConfig !== undefined &&
        output.CustomDomainConfig !== null) {
        contents.CustomDomainConfig = deserializeAws_json1_1CustomDomainConfigType(output.CustomDomainConfig, context);
    }
    if (output.Domain !== undefined && output.Domain !== null) {
        contents.Domain = output.Domain;
    }
    if (output.S3Bucket !== undefined && output.S3Bucket !== null) {
        contents.S3Bucket = output.S3Bucket;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
        contents.UserPoolId = output.UserPoolId;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1DuplicateProviderException = (output, context) => {
    let contents = {
        __type: "DuplicateProviderException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1EmailConfigurationType = (output, context) => {
    let contents = {
        __type: "EmailConfigurationType",
        ConfigurationSet: undefined,
        EmailSendingAccount: undefined,
        From: undefined,
        ReplyToEmailAddress: undefined,
        SourceArn: undefined
    };
    if (output.ConfigurationSet !== undefined &&
        output.ConfigurationSet !== null) {
        contents.ConfigurationSet = output.ConfigurationSet;
    }
    if (output.EmailSendingAccount !== undefined &&
        output.EmailSendingAccount !== null) {
        contents.EmailSendingAccount = output.EmailSendingAccount;
    }
    if (output.From !== undefined && output.From !== null) {
        contents.From = output.From;
    }
    if (output.ReplyToEmailAddress !== undefined &&
        output.ReplyToEmailAddress !== null) {
        contents.ReplyToEmailAddress = output.ReplyToEmailAddress;
    }
    if (output.SourceArn !== undefined && output.SourceArn !== null) {
        contents.SourceArn = output.SourceArn;
    }
    return contents;
};
const deserializeAws_json1_1EnableSoftwareTokenMFAException = (output, context) => {
    let contents = {
        __type: "EnableSoftwareTokenMFAException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1EventContextDataType = (output, context) => {
    let contents = {
        __type: "EventContextDataType",
        City: undefined,
        Country: undefined,
        DeviceName: undefined,
        IpAddress: undefined,
        Timezone: undefined
    };
    if (output.City !== undefined && output.City !== null) {
        contents.City = output.City;
    }
    if (output.Country !== undefined && output.Country !== null) {
        contents.Country = output.Country;
    }
    if (output.DeviceName !== undefined && output.DeviceName !== null) {
        contents.DeviceName = output.DeviceName;
    }
    if (output.IpAddress !== undefined && output.IpAddress !== null) {
        contents.IpAddress = output.IpAddress;
    }
    if (output.Timezone !== undefined && output.Timezone !== null) {
        contents.Timezone = output.Timezone;
    }
    return contents;
};
const deserializeAws_json1_1EventFeedbackType = (output, context) => {
    let contents = {
        __type: "EventFeedbackType",
        FeedbackDate: undefined,
        FeedbackValue: undefined,
        Provider: undefined
    };
    if (output.FeedbackDate !== undefined && output.FeedbackDate !== null) {
        contents.FeedbackDate = new Date(Math.round(output.FeedbackDate * 1000));
    }
    if (output.FeedbackValue !== undefined && output.FeedbackValue !== null) {
        contents.FeedbackValue = output.FeedbackValue;
    }
    if (output.Provider !== undefined && output.Provider !== null) {
        contents.Provider = output.Provider;
    }
    return contents;
};
const deserializeAws_json1_1EventFiltersType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1EventRiskType = (output, context) => {
    let contents = {
        __type: "EventRiskType",
        RiskDecision: undefined,
        RiskLevel: undefined
    };
    if (output.RiskDecision !== undefined && output.RiskDecision !== null) {
        contents.RiskDecision = output.RiskDecision;
    }
    if (output.RiskLevel !== undefined && output.RiskLevel !== null) {
        contents.RiskLevel = output.RiskLevel;
    }
    return contents;
};
const deserializeAws_json1_1ExpiredCodeException = (output, context) => {
    let contents = {
        __type: "ExpiredCodeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ExplicitAuthFlowsListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ForgotPasswordResponse = (output, context) => {
    let contents = {
        __type: "ForgotPasswordResponse",
        CodeDeliveryDetails: undefined
    };
    if (output.CodeDeliveryDetails !== undefined &&
        output.CodeDeliveryDetails !== null) {
        contents.CodeDeliveryDetails = deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1GetCSVHeaderResponse = (output, context) => {
    let contents = {
        __type: "GetCSVHeaderResponse",
        CSVHeader: undefined,
        UserPoolId: undefined
    };
    if (output.CSVHeader !== undefined && output.CSVHeader !== null) {
        contents.CSVHeader = deserializeAws_json1_1ListOfStringTypes(output.CSVHeader, context);
    }
    if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
        contents.UserPoolId = output.UserPoolId;
    }
    return contents;
};
const deserializeAws_json1_1GetDeviceResponse = (output, context) => {
    let contents = {
        __type: "GetDeviceResponse",
        Device: undefined
    };
    if (output.Device !== undefined && output.Device !== null) {
        contents.Device = deserializeAws_json1_1DeviceType(output.Device, context);
    }
    return contents;
};
const deserializeAws_json1_1GetGroupResponse = (output, context) => {
    let contents = {
        __type: "GetGroupResponse",
        Group: undefined
    };
    if (output.Group !== undefined && output.Group !== null) {
        contents.Group = deserializeAws_json1_1GroupType(output.Group, context);
    }
    return contents;
};
const deserializeAws_json1_1GetIdentityProviderByIdentifierResponse = (output, context) => {
    let contents = {
        __type: "GetIdentityProviderByIdentifierResponse",
        IdentityProvider: undefined
    };
    if (output.IdentityProvider !== undefined &&
        output.IdentityProvider !== null) {
        contents.IdentityProvider = deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSigningCertificateResponse = (output, context) => {
    let contents = {
        __type: "GetSigningCertificateResponse",
        Certificate: undefined
    };
    if (output.Certificate !== undefined && output.Certificate !== null) {
        contents.Certificate = output.Certificate;
    }
    return contents;
};
const deserializeAws_json1_1GetUICustomizationResponse = (output, context) => {
    let contents = {
        __type: "GetUICustomizationResponse",
        UICustomization: undefined
    };
    if (output.UICustomization !== undefined && output.UICustomization !== null) {
        contents.UICustomization = deserializeAws_json1_1UICustomizationType(output.UICustomization, context);
    }
    return contents;
};
const deserializeAws_json1_1GetUserAttributeVerificationCodeResponse = (output, context) => {
    let contents = {
        __type: "GetUserAttributeVerificationCodeResponse",
        CodeDeliveryDetails: undefined
    };
    if (output.CodeDeliveryDetails !== undefined &&
        output.CodeDeliveryDetails !== null) {
        contents.CodeDeliveryDetails = deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1GetUserPoolMfaConfigResponse = (output, context) => {
    let contents = {
        __type: "GetUserPoolMfaConfigResponse",
        MfaConfiguration: undefined,
        SmsMfaConfiguration: undefined,
        SoftwareTokenMfaConfiguration: undefined
    };
    if (output.MfaConfiguration !== undefined &&
        output.MfaConfiguration !== null) {
        contents.MfaConfiguration = output.MfaConfiguration;
    }
    if (output.SmsMfaConfiguration !== undefined &&
        output.SmsMfaConfiguration !== null) {
        contents.SmsMfaConfiguration = deserializeAws_json1_1SmsMfaConfigType(output.SmsMfaConfiguration, context);
    }
    if (output.SoftwareTokenMfaConfiguration !== undefined &&
        output.SoftwareTokenMfaConfiguration !== null) {
        contents.SoftwareTokenMfaConfiguration = deserializeAws_json1_1SoftwareTokenMfaConfigType(output.SoftwareTokenMfaConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1GetUserResponse = (output, context) => {
    let contents = {
        __type: "GetUserResponse",
        MFAOptions: undefined,
        PreferredMfaSetting: undefined,
        UserAttributes: undefined,
        UserMFASettingList: undefined,
        Username: undefined
    };
    if (output.MFAOptions !== undefined && output.MFAOptions !== null) {
        contents.MFAOptions = deserializeAws_json1_1MFAOptionListType(output.MFAOptions, context);
    }
    if (output.PreferredMfaSetting !== undefined &&
        output.PreferredMfaSetting !== null) {
        contents.PreferredMfaSetting = output.PreferredMfaSetting;
    }
    if (output.UserAttributes !== undefined && output.UserAttributes !== null) {
        contents.UserAttributes = deserializeAws_json1_1AttributeListType(output.UserAttributes, context);
    }
    if (output.UserMFASettingList !== undefined &&
        output.UserMFASettingList !== null) {
        contents.UserMFASettingList = deserializeAws_json1_1UserMFASettingListType(output.UserMFASettingList, context);
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    return contents;
};
const deserializeAws_json1_1GlobalSignOutResponse = (output, context) => {
    let contents = {
        __type: "GlobalSignOutResponse"
    };
    return contents;
};
const deserializeAws_json1_1GroupExistsException = (output, context) => {
    let contents = {
        __type: "GroupExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1GroupListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GroupType(entry, context));
};
const deserializeAws_json1_1GroupType = (output, context) => {
    let contents = {
        __type: "GroupType",
        CreationDate: undefined,
        Description: undefined,
        GroupName: undefined,
        LastModifiedDate: undefined,
        Precedence: undefined,
        RoleArn: undefined,
        UserPoolId: undefined
    };
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.GroupName !== undefined && output.GroupName !== null) {
        contents.GroupName = output.GroupName;
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.Precedence !== undefined && output.Precedence !== null) {
        contents.Precedence = output.Precedence;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
        contents.UserPoolId = output.UserPoolId;
    }
    return contents;
};
const deserializeAws_json1_1IdentityProviderType = (output, context) => {
    let contents = {
        __type: "IdentityProviderType",
        AttributeMapping: undefined,
        CreationDate: undefined,
        IdpIdentifiers: undefined,
        LastModifiedDate: undefined,
        ProviderDetails: undefined,
        ProviderName: undefined,
        ProviderType: undefined,
        UserPoolId: undefined
    };
    if (output.AttributeMapping !== undefined &&
        output.AttributeMapping !== null) {
        contents.AttributeMapping = deserializeAws_json1_1AttributeMappingType(output.AttributeMapping, context);
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.IdpIdentifiers !== undefined && output.IdpIdentifiers !== null) {
        contents.IdpIdentifiers = deserializeAws_json1_1IdpIdentifiersListType(output.IdpIdentifiers, context);
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.ProviderDetails !== undefined && output.ProviderDetails !== null) {
        contents.ProviderDetails = deserializeAws_json1_1ProviderDetailsType(output.ProviderDetails, context);
    }
    if (output.ProviderName !== undefined && output.ProviderName !== null) {
        contents.ProviderName = output.ProviderName;
    }
    if (output.ProviderType !== undefined && output.ProviderType !== null) {
        contents.ProviderType = output.ProviderType;
    }
    if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
        contents.UserPoolId = output.UserPoolId;
    }
    return contents;
};
const deserializeAws_json1_1IdpIdentifiersListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InitiateAuthResponse = (output, context) => {
    let contents = {
        __type: "InitiateAuthResponse",
        AuthenticationResult: undefined,
        ChallengeName: undefined,
        ChallengeParameters: undefined,
        Session: undefined
    };
    if (output.AuthenticationResult !== undefined &&
        output.AuthenticationResult !== null) {
        contents.AuthenticationResult = deserializeAws_json1_1AuthenticationResultType(output.AuthenticationResult, context);
    }
    if (output.ChallengeName !== undefined && output.ChallengeName !== null) {
        contents.ChallengeName = output.ChallengeName;
    }
    if (output.ChallengeParameters !== undefined &&
        output.ChallengeParameters !== null) {
        contents.ChallengeParameters = deserializeAws_json1_1ChallengeParametersType(output.ChallengeParameters, context);
    }
    if (output.Session !== undefined && output.Session !== null) {
        contents.Session = output.Session;
    }
    return contents;
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    let contents = {
        __type: "InternalErrorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidEmailRoleAccessPolicyException = (output, context) => {
    let contents = {
        __type: "InvalidEmailRoleAccessPolicyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidLambdaResponseException = (output, context) => {
    let contents = {
        __type: "InvalidLambdaResponseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidOAuthFlowException = (output, context) => {
    let contents = {
        __type: "InvalidOAuthFlowException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPasswordException = (output, context) => {
    let contents = {
        __type: "InvalidPasswordException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSmsRoleAccessPolicyException = (output, context) => {
    let contents = {
        __type: "InvalidSmsRoleAccessPolicyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSmsRoleTrustRelationshipException = (output, context) => {
    let contents = {
        __type: "InvalidSmsRoleTrustRelationshipException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidUserPoolConfigurationException = (output, context) => {
    let contents = {
        __type: "InvalidUserPoolConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LambdaConfigType = (output, context) => {
    let contents = {
        __type: "LambdaConfigType",
        CreateAuthChallenge: undefined,
        CustomMessage: undefined,
        DefineAuthChallenge: undefined,
        PostAuthentication: undefined,
        PostConfirmation: undefined,
        PreAuthentication: undefined,
        PreSignUp: undefined,
        PreTokenGeneration: undefined,
        UserMigration: undefined,
        VerifyAuthChallengeResponse: undefined
    };
    if (output.CreateAuthChallenge !== undefined &&
        output.CreateAuthChallenge !== null) {
        contents.CreateAuthChallenge = output.CreateAuthChallenge;
    }
    if (output.CustomMessage !== undefined && output.CustomMessage !== null) {
        contents.CustomMessage = output.CustomMessage;
    }
    if (output.DefineAuthChallenge !== undefined &&
        output.DefineAuthChallenge !== null) {
        contents.DefineAuthChallenge = output.DefineAuthChallenge;
    }
    if (output.PostAuthentication !== undefined &&
        output.PostAuthentication !== null) {
        contents.PostAuthentication = output.PostAuthentication;
    }
    if (output.PostConfirmation !== undefined &&
        output.PostConfirmation !== null) {
        contents.PostConfirmation = output.PostConfirmation;
    }
    if (output.PreAuthentication !== undefined &&
        output.PreAuthentication !== null) {
        contents.PreAuthentication = output.PreAuthentication;
    }
    if (output.PreSignUp !== undefined && output.PreSignUp !== null) {
        contents.PreSignUp = output.PreSignUp;
    }
    if (output.PreTokenGeneration !== undefined &&
        output.PreTokenGeneration !== null) {
        contents.PreTokenGeneration = output.PreTokenGeneration;
    }
    if (output.UserMigration !== undefined && output.UserMigration !== null) {
        contents.UserMigration = output.UserMigration;
    }
    if (output.VerifyAuthChallengeResponse !== undefined &&
        output.VerifyAuthChallengeResponse !== null) {
        contents.VerifyAuthChallengeResponse = output.VerifyAuthChallengeResponse;
    }
    return contents;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListDevicesResponse = (output, context) => {
    let contents = {
        __type: "ListDevicesResponse",
        Devices: undefined,
        PaginationToken: undefined
    };
    if (output.Devices !== undefined && output.Devices !== null) {
        contents.Devices = deserializeAws_json1_1DeviceListType(output.Devices, context);
    }
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    return contents;
};
const deserializeAws_json1_1ListGroupsResponse = (output, context) => {
    let contents = {
        __type: "ListGroupsResponse",
        Groups: undefined,
        NextToken: undefined
    };
    if (output.Groups !== undefined && output.Groups !== null) {
        contents.Groups = deserializeAws_json1_1GroupListType(output.Groups, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListIdentityProvidersResponse = (output, context) => {
    let contents = {
        __type: "ListIdentityProvidersResponse",
        NextToken: undefined,
        Providers: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Providers !== undefined && output.Providers !== null) {
        contents.Providers = deserializeAws_json1_1ProvidersListType(output.Providers, context);
    }
    return contents;
};
const deserializeAws_json1_1ListOfStringTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ListResourceServersResponse = (output, context) => {
    let contents = {
        __type: "ListResourceServersResponse",
        NextToken: undefined,
        ResourceServers: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResourceServers !== undefined && output.ResourceServers !== null) {
        contents.ResourceServers = deserializeAws_json1_1ResourceServersListType(output.ResourceServers, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1UserPoolTagsType(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUserImportJobsResponse = (output, context) => {
    let contents = {
        __type: "ListUserImportJobsResponse",
        PaginationToken: undefined,
        UserImportJobs: undefined
    };
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    if (output.UserImportJobs !== undefined && output.UserImportJobs !== null) {
        contents.UserImportJobs = deserializeAws_json1_1UserImportJobsListType(output.UserImportJobs, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUserPoolClientsResponse = (output, context) => {
    let contents = {
        __type: "ListUserPoolClientsResponse",
        NextToken: undefined,
        UserPoolClients: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.UserPoolClients !== undefined && output.UserPoolClients !== null) {
        contents.UserPoolClients = deserializeAws_json1_1UserPoolClientListType(output.UserPoolClients, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUserPoolsResponse = (output, context) => {
    let contents = {
        __type: "ListUserPoolsResponse",
        NextToken: undefined,
        UserPools: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.UserPools !== undefined && output.UserPools !== null) {
        contents.UserPools = deserializeAws_json1_1UserPoolListType(output.UserPools, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUsersInGroupResponse = (output, context) => {
    let contents = {
        __type: "ListUsersInGroupResponse",
        NextToken: undefined,
        Users: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Users !== undefined && output.Users !== null) {
        contents.Users = deserializeAws_json1_1UsersListType(output.Users, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUsersResponse = (output, context) => {
    let contents = {
        __type: "ListUsersResponse",
        PaginationToken: undefined,
        Users: undefined
    };
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    if (output.Users !== undefined && output.Users !== null) {
        contents.Users = deserializeAws_json1_1UsersListType(output.Users, context);
    }
    return contents;
};
const deserializeAws_json1_1LogoutURLsListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1MFAMethodNotFoundException = (output, context) => {
    let contents = {
        __type: "MFAMethodNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MFAOptionListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MFAOptionType(entry, context));
};
const deserializeAws_json1_1MFAOptionType = (output, context) => {
    let contents = {
        __type: "MFAOptionType",
        AttributeName: undefined,
        DeliveryMedium: undefined
    };
    if (output.AttributeName !== undefined && output.AttributeName !== null) {
        contents.AttributeName = output.AttributeName;
    }
    if (output.DeliveryMedium !== undefined && output.DeliveryMedium !== null) {
        contents.DeliveryMedium = output.DeliveryMedium;
    }
    return contents;
};
const deserializeAws_json1_1MessageTemplateType = (output, context) => {
    let contents = {
        __type: "MessageTemplateType",
        EmailMessage: undefined,
        EmailSubject: undefined,
        SMSMessage: undefined
    };
    if (output.EmailMessage !== undefined && output.EmailMessage !== null) {
        contents.EmailMessage = output.EmailMessage;
    }
    if (output.EmailSubject !== undefined && output.EmailSubject !== null) {
        contents.EmailSubject = output.EmailSubject;
    }
    if (output.SMSMessage !== undefined && output.SMSMessage !== null) {
        contents.SMSMessage = output.SMSMessage;
    }
    return contents;
};
const deserializeAws_json1_1NewDeviceMetadataType = (output, context) => {
    let contents = {
        __type: "NewDeviceMetadataType",
        DeviceGroupKey: undefined,
        DeviceKey: undefined
    };
    if (output.DeviceGroupKey !== undefined && output.DeviceGroupKey !== null) {
        contents.DeviceGroupKey = output.DeviceGroupKey;
    }
    if (output.DeviceKey !== undefined && output.DeviceKey !== null) {
        contents.DeviceKey = output.DeviceKey;
    }
    return contents;
};
const deserializeAws_json1_1NotAuthorizedException = (output, context) => {
    let contents = {
        __type: "NotAuthorizedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NotifyConfigurationType = (output, context) => {
    let contents = {
        __type: "NotifyConfigurationType",
        BlockEmail: undefined,
        From: undefined,
        MfaEmail: undefined,
        NoActionEmail: undefined,
        ReplyTo: undefined,
        SourceArn: undefined
    };
    if (output.BlockEmail !== undefined && output.BlockEmail !== null) {
        contents.BlockEmail = deserializeAws_json1_1NotifyEmailType(output.BlockEmail, context);
    }
    if (output.From !== undefined && output.From !== null) {
        contents.From = output.From;
    }
    if (output.MfaEmail !== undefined && output.MfaEmail !== null) {
        contents.MfaEmail = deserializeAws_json1_1NotifyEmailType(output.MfaEmail, context);
    }
    if (output.NoActionEmail !== undefined && output.NoActionEmail !== null) {
        contents.NoActionEmail = deserializeAws_json1_1NotifyEmailType(output.NoActionEmail, context);
    }
    if (output.ReplyTo !== undefined && output.ReplyTo !== null) {
        contents.ReplyTo = output.ReplyTo;
    }
    if (output.SourceArn !== undefined && output.SourceArn !== null) {
        contents.SourceArn = output.SourceArn;
    }
    return contents;
};
const deserializeAws_json1_1NotifyEmailType = (output, context) => {
    let contents = {
        __type: "NotifyEmailType",
        HtmlBody: undefined,
        Subject: undefined,
        TextBody: undefined
    };
    if (output.HtmlBody !== undefined && output.HtmlBody !== null) {
        contents.HtmlBody = output.HtmlBody;
    }
    if (output.Subject !== undefined && output.Subject !== null) {
        contents.Subject = output.Subject;
    }
    if (output.TextBody !== undefined && output.TextBody !== null) {
        contents.TextBody = output.TextBody;
    }
    return contents;
};
const deserializeAws_json1_1NumberAttributeConstraintsType = (output, context) => {
    let contents = {
        __type: "NumberAttributeConstraintsType",
        MaxValue: undefined,
        MinValue: undefined
    };
    if (output.MaxValue !== undefined && output.MaxValue !== null) {
        contents.MaxValue = output.MaxValue;
    }
    if (output.MinValue !== undefined && output.MinValue !== null) {
        contents.MinValue = output.MinValue;
    }
    return contents;
};
const deserializeAws_json1_1OAuthFlowsType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PasswordPolicyType = (output, context) => {
    let contents = {
        __type: "PasswordPolicyType",
        MinimumLength: undefined,
        RequireLowercase: undefined,
        RequireNumbers: undefined,
        RequireSymbols: undefined,
        RequireUppercase: undefined,
        TemporaryPasswordValidityDays: undefined
    };
    if (output.MinimumLength !== undefined && output.MinimumLength !== null) {
        contents.MinimumLength = output.MinimumLength;
    }
    if (output.RequireLowercase !== undefined &&
        output.RequireLowercase !== null) {
        contents.RequireLowercase = output.RequireLowercase;
    }
    if (output.RequireNumbers !== undefined && output.RequireNumbers !== null) {
        contents.RequireNumbers = output.RequireNumbers;
    }
    if (output.RequireSymbols !== undefined && output.RequireSymbols !== null) {
        contents.RequireSymbols = output.RequireSymbols;
    }
    if (output.RequireUppercase !== undefined &&
        output.RequireUppercase !== null) {
        contents.RequireUppercase = output.RequireUppercase;
    }
    if (output.TemporaryPasswordValidityDays !== undefined &&
        output.TemporaryPasswordValidityDays !== null) {
        contents.TemporaryPasswordValidityDays =
            output.TemporaryPasswordValidityDays;
    }
    return contents;
};
const deserializeAws_json1_1PasswordResetRequiredException = (output, context) => {
    let contents = {
        __type: "PasswordResetRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PreconditionNotMetException = (output, context) => {
    let contents = {
        __type: "PreconditionNotMetException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ProviderDescription = (output, context) => {
    let contents = {
        __type: "ProviderDescription",
        CreationDate: undefined,
        LastModifiedDate: undefined,
        ProviderName: undefined,
        ProviderType: undefined
    };
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.ProviderName !== undefined && output.ProviderName !== null) {
        contents.ProviderName = output.ProviderName;
    }
    if (output.ProviderType !== undefined && output.ProviderType !== null) {
        contents.ProviderType = output.ProviderType;
    }
    return contents;
};
const deserializeAws_json1_1ProviderDetailsType = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ProvidersListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProviderDescription(entry, context));
};
const deserializeAws_json1_1RecoveryMechanismsType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RecoveryOptionType(entry, context));
};
const deserializeAws_json1_1RecoveryOptionType = (output, context) => {
    let contents = {
        __type: "RecoveryOptionType",
        Name: undefined,
        Priority: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Priority !== undefined && output.Priority !== null) {
        contents.Priority = output.Priority;
    }
    return contents;
};
const deserializeAws_json1_1ResendConfirmationCodeResponse = (output, context) => {
    let contents = {
        __type: "ResendConfirmationCodeResponse",
        CodeDeliveryDetails: undefined
    };
    if (output.CodeDeliveryDetails !== undefined &&
        output.CodeDeliveryDetails !== null) {
        contents.CodeDeliveryDetails = deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceServerScopeListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceServerScopeType(entry, context));
};
const deserializeAws_json1_1ResourceServerScopeType = (output, context) => {
    let contents = {
        __type: "ResourceServerScopeType",
        ScopeDescription: undefined,
        ScopeName: undefined
    };
    if (output.ScopeDescription !== undefined &&
        output.ScopeDescription !== null) {
        contents.ScopeDescription = output.ScopeDescription;
    }
    if (output.ScopeName !== undefined && output.ScopeName !== null) {
        contents.ScopeName = output.ScopeName;
    }
    return contents;
};
const deserializeAws_json1_1ResourceServerType = (output, context) => {
    let contents = {
        __type: "ResourceServerType",
        Identifier: undefined,
        Name: undefined,
        Scopes: undefined,
        UserPoolId: undefined
    };
    if (output.Identifier !== undefined && output.Identifier !== null) {
        contents.Identifier = output.Identifier;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Scopes !== undefined && output.Scopes !== null) {
        contents.Scopes = deserializeAws_json1_1ResourceServerScopeListType(output.Scopes, context);
    }
    if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
        contents.UserPoolId = output.UserPoolId;
    }
    return contents;
};
const deserializeAws_json1_1ResourceServersListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceServerType(entry, context));
};
const deserializeAws_json1_1RespondToAuthChallengeResponse = (output, context) => {
    let contents = {
        __type: "RespondToAuthChallengeResponse",
        AuthenticationResult: undefined,
        ChallengeName: undefined,
        ChallengeParameters: undefined,
        Session: undefined
    };
    if (output.AuthenticationResult !== undefined &&
        output.AuthenticationResult !== null) {
        contents.AuthenticationResult = deserializeAws_json1_1AuthenticationResultType(output.AuthenticationResult, context);
    }
    if (output.ChallengeName !== undefined && output.ChallengeName !== null) {
        contents.ChallengeName = output.ChallengeName;
    }
    if (output.ChallengeParameters !== undefined &&
        output.ChallengeParameters !== null) {
        contents.ChallengeParameters = deserializeAws_json1_1ChallengeParametersType(output.ChallengeParameters, context);
    }
    if (output.Session !== undefined && output.Session !== null) {
        contents.Session = output.Session;
    }
    return contents;
};
const deserializeAws_json1_1RiskConfigurationType = (output, context) => {
    let contents = {
        __type: "RiskConfigurationType",
        AccountTakeoverRiskConfiguration: undefined,
        ClientId: undefined,
        CompromisedCredentialsRiskConfiguration: undefined,
        LastModifiedDate: undefined,
        RiskExceptionConfiguration: undefined,
        UserPoolId: undefined
    };
    if (output.AccountTakeoverRiskConfiguration !== undefined &&
        output.AccountTakeoverRiskConfiguration !== null) {
        contents.AccountTakeoverRiskConfiguration = deserializeAws_json1_1AccountTakeoverRiskConfigurationType(output.AccountTakeoverRiskConfiguration, context);
    }
    if (output.ClientId !== undefined && output.ClientId !== null) {
        contents.ClientId = output.ClientId;
    }
    if (output.CompromisedCredentialsRiskConfiguration !== undefined &&
        output.CompromisedCredentialsRiskConfiguration !== null) {
        contents.CompromisedCredentialsRiskConfiguration = deserializeAws_json1_1CompromisedCredentialsRiskConfigurationType(output.CompromisedCredentialsRiskConfiguration, context);
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.RiskExceptionConfiguration !== undefined &&
        output.RiskExceptionConfiguration !== null) {
        contents.RiskExceptionConfiguration = deserializeAws_json1_1RiskExceptionConfigurationType(output.RiskExceptionConfiguration, context);
    }
    if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
        contents.UserPoolId = output.UserPoolId;
    }
    return contents;
};
const deserializeAws_json1_1RiskExceptionConfigurationType = (output, context) => {
    let contents = {
        __type: "RiskExceptionConfigurationType",
        BlockedIPRangeList: undefined,
        SkippedIPRangeList: undefined
    };
    if (output.BlockedIPRangeList !== undefined &&
        output.BlockedIPRangeList !== null) {
        contents.BlockedIPRangeList = deserializeAws_json1_1BlockedIPRangeListType(output.BlockedIPRangeList, context);
    }
    if (output.SkippedIPRangeList !== undefined &&
        output.SkippedIPRangeList !== null) {
        contents.SkippedIPRangeList = deserializeAws_json1_1SkippedIPRangeListType(output.SkippedIPRangeList, context);
    }
    return contents;
};
const deserializeAws_json1_1SchemaAttributeType = (output, context) => {
    let contents = {
        __type: "SchemaAttributeType",
        AttributeDataType: undefined,
        DeveloperOnlyAttribute: undefined,
        Mutable: undefined,
        Name: undefined,
        NumberAttributeConstraints: undefined,
        Required: undefined,
        StringAttributeConstraints: undefined
    };
    if (output.AttributeDataType !== undefined &&
        output.AttributeDataType !== null) {
        contents.AttributeDataType = output.AttributeDataType;
    }
    if (output.DeveloperOnlyAttribute !== undefined &&
        output.DeveloperOnlyAttribute !== null) {
        contents.DeveloperOnlyAttribute = output.DeveloperOnlyAttribute;
    }
    if (output.Mutable !== undefined && output.Mutable !== null) {
        contents.Mutable = output.Mutable;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NumberAttributeConstraints !== undefined &&
        output.NumberAttributeConstraints !== null) {
        contents.NumberAttributeConstraints = deserializeAws_json1_1NumberAttributeConstraintsType(output.NumberAttributeConstraints, context);
    }
    if (output.Required !== undefined && output.Required !== null) {
        contents.Required = output.Required;
    }
    if (output.StringAttributeConstraints !== undefined &&
        output.StringAttributeConstraints !== null) {
        contents.StringAttributeConstraints = deserializeAws_json1_1StringAttributeConstraintsType(output.StringAttributeConstraints, context);
    }
    return contents;
};
const deserializeAws_json1_1SchemaAttributesListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SchemaAttributeType(entry, context));
};
const deserializeAws_json1_1ScopeDoesNotExistException = (output, context) => {
    let contents = {
        __type: "ScopeDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ScopeListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SetRiskConfigurationResponse = (output, context) => {
    let contents = {
        __type: "SetRiskConfigurationResponse",
        RiskConfiguration: undefined
    };
    if (output.RiskConfiguration !== undefined &&
        output.RiskConfiguration !== null) {
        contents.RiskConfiguration = deserializeAws_json1_1RiskConfigurationType(output.RiskConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1SetUICustomizationResponse = (output, context) => {
    let contents = {
        __type: "SetUICustomizationResponse",
        UICustomization: undefined
    };
    if (output.UICustomization !== undefined && output.UICustomization !== null) {
        contents.UICustomization = deserializeAws_json1_1UICustomizationType(output.UICustomization, context);
    }
    return contents;
};
const deserializeAws_json1_1SetUserMFAPreferenceResponse = (output, context) => {
    let contents = {
        __type: "SetUserMFAPreferenceResponse"
    };
    return contents;
};
const deserializeAws_json1_1SetUserPoolMfaConfigResponse = (output, context) => {
    let contents = {
        __type: "SetUserPoolMfaConfigResponse",
        MfaConfiguration: undefined,
        SmsMfaConfiguration: undefined,
        SoftwareTokenMfaConfiguration: undefined
    };
    if (output.MfaConfiguration !== undefined &&
        output.MfaConfiguration !== null) {
        contents.MfaConfiguration = output.MfaConfiguration;
    }
    if (output.SmsMfaConfiguration !== undefined &&
        output.SmsMfaConfiguration !== null) {
        contents.SmsMfaConfiguration = deserializeAws_json1_1SmsMfaConfigType(output.SmsMfaConfiguration, context);
    }
    if (output.SoftwareTokenMfaConfiguration !== undefined &&
        output.SoftwareTokenMfaConfiguration !== null) {
        contents.SoftwareTokenMfaConfiguration = deserializeAws_json1_1SoftwareTokenMfaConfigType(output.SoftwareTokenMfaConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1SetUserSettingsResponse = (output, context) => {
    let contents = {
        __type: "SetUserSettingsResponse"
    };
    return contents;
};
const deserializeAws_json1_1SignUpResponse = (output, context) => {
    let contents = {
        __type: "SignUpResponse",
        CodeDeliveryDetails: undefined,
        UserConfirmed: undefined,
        UserSub: undefined
    };
    if (output.CodeDeliveryDetails !== undefined &&
        output.CodeDeliveryDetails !== null) {
        contents.CodeDeliveryDetails = deserializeAws_json1_1CodeDeliveryDetailsType(output.CodeDeliveryDetails, context);
    }
    if (output.UserConfirmed !== undefined && output.UserConfirmed !== null) {
        contents.UserConfirmed = output.UserConfirmed;
    }
    if (output.UserSub !== undefined && output.UserSub !== null) {
        contents.UserSub = output.UserSub;
    }
    return contents;
};
const deserializeAws_json1_1SkippedIPRangeListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SmsConfigurationType = (output, context) => {
    let contents = {
        __type: "SmsConfigurationType",
        ExternalId: undefined,
        SnsCallerArn: undefined
    };
    if (output.ExternalId !== undefined && output.ExternalId !== null) {
        contents.ExternalId = output.ExternalId;
    }
    if (output.SnsCallerArn !== undefined && output.SnsCallerArn !== null) {
        contents.SnsCallerArn = output.SnsCallerArn;
    }
    return contents;
};
const deserializeAws_json1_1SmsMfaConfigType = (output, context) => {
    let contents = {
        __type: "SmsMfaConfigType",
        SmsAuthenticationMessage: undefined,
        SmsConfiguration: undefined
    };
    if (output.SmsAuthenticationMessage !== undefined &&
        output.SmsAuthenticationMessage !== null) {
        contents.SmsAuthenticationMessage = output.SmsAuthenticationMessage;
    }
    if (output.SmsConfiguration !== undefined &&
        output.SmsConfiguration !== null) {
        contents.SmsConfiguration = deserializeAws_json1_1SmsConfigurationType(output.SmsConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1SoftwareTokenMFANotFoundException = (output, context) => {
    let contents = {
        __type: "SoftwareTokenMFANotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SoftwareTokenMfaConfigType = (output, context) => {
    let contents = {
        __type: "SoftwareTokenMfaConfigType",
        Enabled: undefined
    };
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    return contents;
};
const deserializeAws_json1_1StartUserImportJobResponse = (output, context) => {
    let contents = {
        __type: "StartUserImportJobResponse",
        UserImportJob: undefined
    };
    if (output.UserImportJob !== undefined && output.UserImportJob !== null) {
        contents.UserImportJob = deserializeAws_json1_1UserImportJobType(output.UserImportJob, context);
    }
    return contents;
};
const deserializeAws_json1_1StopUserImportJobResponse = (output, context) => {
    let contents = {
        __type: "StopUserImportJobResponse",
        UserImportJob: undefined
    };
    if (output.UserImportJob !== undefined && output.UserImportJob !== null) {
        contents.UserImportJob = deserializeAws_json1_1UserImportJobType(output.UserImportJob, context);
    }
    return contents;
};
const deserializeAws_json1_1StringAttributeConstraintsType = (output, context) => {
    let contents = {
        __type: "StringAttributeConstraintsType",
        MaxLength: undefined,
        MinLength: undefined
    };
    if (output.MaxLength !== undefined && output.MaxLength !== null) {
        contents.MaxLength = output.MaxLength;
    }
    if (output.MinLength !== undefined && output.MinLength !== null) {
        contents.MinLength = output.MinLength;
    }
    return contents;
};
const deserializeAws_json1_1SupportedIdentityProvidersListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1TooManyFailedAttemptsException = (output, context) => {
    let contents = {
        __type: "TooManyFailedAttemptsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    let contents = {
        __type: "TooManyRequestsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UICustomizationType = (output, context) => {
    let contents = {
        __type: "UICustomizationType",
        CSS: undefined,
        CSSVersion: undefined,
        ClientId: undefined,
        CreationDate: undefined,
        ImageUrl: undefined,
        LastModifiedDate: undefined,
        UserPoolId: undefined
    };
    if (output.CSS !== undefined && output.CSS !== null) {
        contents.CSS = output.CSS;
    }
    if (output.CSSVersion !== undefined && output.CSSVersion !== null) {
        contents.CSSVersion = output.CSSVersion;
    }
    if (output.ClientId !== undefined && output.ClientId !== null) {
        contents.ClientId = output.ClientId;
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.ImageUrl !== undefined && output.ImageUrl !== null) {
        contents.ImageUrl = output.ImageUrl;
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
        contents.UserPoolId = output.UserPoolId;
    }
    return contents;
};
const deserializeAws_json1_1UnexpectedLambdaException = (output, context) => {
    let contents = {
        __type: "UnexpectedLambdaException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedIdentityProviderException = (output, context) => {
    let contents = {
        __type: "UnsupportedIdentityProviderException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedUserStateException = (output, context) => {
    let contents = {
        __type: "UnsupportedUserStateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateAuthEventFeedbackResponse = (output, context) => {
    let contents = {
        __type: "UpdateAuthEventFeedbackResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateDeviceStatusResponse = (output, context) => {
    let contents = {
        __type: "UpdateDeviceStatusResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateGroupResponse = (output, context) => {
    let contents = {
        __type: "UpdateGroupResponse",
        Group: undefined
    };
    if (output.Group !== undefined && output.Group !== null) {
        contents.Group = deserializeAws_json1_1GroupType(output.Group, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateIdentityProviderResponse = (output, context) => {
    let contents = {
        __type: "UpdateIdentityProviderResponse",
        IdentityProvider: undefined
    };
    if (output.IdentityProvider !== undefined &&
        output.IdentityProvider !== null) {
        contents.IdentityProvider = deserializeAws_json1_1IdentityProviderType(output.IdentityProvider, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateResourceServerResponse = (output, context) => {
    let contents = {
        __type: "UpdateResourceServerResponse",
        ResourceServer: undefined
    };
    if (output.ResourceServer !== undefined && output.ResourceServer !== null) {
        contents.ResourceServer = deserializeAws_json1_1ResourceServerType(output.ResourceServer, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateUserAttributesResponse = (output, context) => {
    let contents = {
        __type: "UpdateUserAttributesResponse",
        CodeDeliveryDetailsList: undefined
    };
    if (output.CodeDeliveryDetailsList !== undefined &&
        output.CodeDeliveryDetailsList !== null) {
        contents.CodeDeliveryDetailsList = deserializeAws_json1_1CodeDeliveryDetailsListType(output.CodeDeliveryDetailsList, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateUserPoolClientResponse = (output, context) => {
    let contents = {
        __type: "UpdateUserPoolClientResponse",
        UserPoolClient: undefined
    };
    if (output.UserPoolClient !== undefined && output.UserPoolClient !== null) {
        contents.UserPoolClient = deserializeAws_json1_1UserPoolClientType(output.UserPoolClient, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateUserPoolDomainResponse = (output, context) => {
    let contents = {
        __type: "UpdateUserPoolDomainResponse",
        CloudFrontDomain: undefined
    };
    if (output.CloudFrontDomain !== undefined &&
        output.CloudFrontDomain !== null) {
        contents.CloudFrontDomain = output.CloudFrontDomain;
    }
    return contents;
};
const deserializeAws_json1_1UpdateUserPoolResponse = (output, context) => {
    let contents = {
        __type: "UpdateUserPoolResponse"
    };
    return contents;
};
const deserializeAws_json1_1UserImportInProgressException = (output, context) => {
    let contents = {
        __type: "UserImportInProgressException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UserImportJobType = (output, context) => {
    let contents = {
        __type: "UserImportJobType",
        CloudWatchLogsRoleArn: undefined,
        CompletionDate: undefined,
        CompletionMessage: undefined,
        CreationDate: undefined,
        FailedUsers: undefined,
        ImportedUsers: undefined,
        JobId: undefined,
        JobName: undefined,
        PreSignedUrl: undefined,
        SkippedUsers: undefined,
        StartDate: undefined,
        Status: undefined,
        UserPoolId: undefined
    };
    if (output.CloudWatchLogsRoleArn !== undefined &&
        output.CloudWatchLogsRoleArn !== null) {
        contents.CloudWatchLogsRoleArn = output.CloudWatchLogsRoleArn;
    }
    if (output.CompletionDate !== undefined && output.CompletionDate !== null) {
        contents.CompletionDate = new Date(Math.round(output.CompletionDate * 1000));
    }
    if (output.CompletionMessage !== undefined &&
        output.CompletionMessage !== null) {
        contents.CompletionMessage = output.CompletionMessage;
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.FailedUsers !== undefined && output.FailedUsers !== null) {
        contents.FailedUsers = output.FailedUsers;
    }
    if (output.ImportedUsers !== undefined && output.ImportedUsers !== null) {
        contents.ImportedUsers = output.ImportedUsers;
    }
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.PreSignedUrl !== undefined && output.PreSignedUrl !== null) {
        contents.PreSignedUrl = output.PreSignedUrl;
    }
    if (output.SkippedUsers !== undefined && output.SkippedUsers !== null) {
        contents.SkippedUsers = output.SkippedUsers;
    }
    if (output.StartDate !== undefined && output.StartDate !== null) {
        contents.StartDate = new Date(Math.round(output.StartDate * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
        contents.UserPoolId = output.UserPoolId;
    }
    return contents;
};
const deserializeAws_json1_1UserImportJobsListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserImportJobType(entry, context));
};
const deserializeAws_json1_1UserLambdaValidationException = (output, context) => {
    let contents = {
        __type: "UserLambdaValidationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UserMFASettingListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1UserNotConfirmedException = (output, context) => {
    let contents = {
        __type: "UserNotConfirmedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UserNotFoundException = (output, context) => {
    let contents = {
        __type: "UserNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UserPoolAddOnNotEnabledException = (output, context) => {
    let contents = {
        __type: "UserPoolAddOnNotEnabledException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UserPoolAddOnsType = (output, context) => {
    let contents = {
        __type: "UserPoolAddOnsType",
        AdvancedSecurityMode: undefined
    };
    if (output.AdvancedSecurityMode !== undefined &&
        output.AdvancedSecurityMode !== null) {
        contents.AdvancedSecurityMode = output.AdvancedSecurityMode;
    }
    return contents;
};
const deserializeAws_json1_1UserPoolClientDescription = (output, context) => {
    let contents = {
        __type: "UserPoolClientDescription",
        ClientId: undefined,
        ClientName: undefined,
        UserPoolId: undefined
    };
    if (output.ClientId !== undefined && output.ClientId !== null) {
        contents.ClientId = output.ClientId;
    }
    if (output.ClientName !== undefined && output.ClientName !== null) {
        contents.ClientName = output.ClientName;
    }
    if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
        contents.UserPoolId = output.UserPoolId;
    }
    return contents;
};
const deserializeAws_json1_1UserPoolClientListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserPoolClientDescription(entry, context));
};
const deserializeAws_json1_1UserPoolClientType = (output, context) => {
    let contents = {
        __type: "UserPoolClientType",
        AllowedOAuthFlows: undefined,
        AllowedOAuthFlowsUserPoolClient: undefined,
        AllowedOAuthScopes: undefined,
        AnalyticsConfiguration: undefined,
        CallbackURLs: undefined,
        ClientId: undefined,
        ClientName: undefined,
        ClientSecret: undefined,
        CreationDate: undefined,
        DefaultRedirectURI: undefined,
        ExplicitAuthFlows: undefined,
        LastModifiedDate: undefined,
        LogoutURLs: undefined,
        PreventUserExistenceErrors: undefined,
        ReadAttributes: undefined,
        RefreshTokenValidity: undefined,
        SupportedIdentityProviders: undefined,
        UserPoolId: undefined,
        WriteAttributes: undefined
    };
    if (output.AllowedOAuthFlows !== undefined &&
        output.AllowedOAuthFlows !== null) {
        contents.AllowedOAuthFlows = deserializeAws_json1_1OAuthFlowsType(output.AllowedOAuthFlows, context);
    }
    if (output.AllowedOAuthFlowsUserPoolClient !== undefined &&
        output.AllowedOAuthFlowsUserPoolClient !== null) {
        contents.AllowedOAuthFlowsUserPoolClient =
            output.AllowedOAuthFlowsUserPoolClient;
    }
    if (output.AllowedOAuthScopes !== undefined &&
        output.AllowedOAuthScopes !== null) {
        contents.AllowedOAuthScopes = deserializeAws_json1_1ScopeListType(output.AllowedOAuthScopes, context);
    }
    if (output.AnalyticsConfiguration !== undefined &&
        output.AnalyticsConfiguration !== null) {
        contents.AnalyticsConfiguration = deserializeAws_json1_1AnalyticsConfigurationType(output.AnalyticsConfiguration, context);
    }
    if (output.CallbackURLs !== undefined && output.CallbackURLs !== null) {
        contents.CallbackURLs = deserializeAws_json1_1CallbackURLsListType(output.CallbackURLs, context);
    }
    if (output.ClientId !== undefined && output.ClientId !== null) {
        contents.ClientId = output.ClientId;
    }
    if (output.ClientName !== undefined && output.ClientName !== null) {
        contents.ClientName = output.ClientName;
    }
    if (output.ClientSecret !== undefined && output.ClientSecret !== null) {
        contents.ClientSecret = output.ClientSecret;
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.DefaultRedirectURI !== undefined &&
        output.DefaultRedirectURI !== null) {
        contents.DefaultRedirectURI = output.DefaultRedirectURI;
    }
    if (output.ExplicitAuthFlows !== undefined &&
        output.ExplicitAuthFlows !== null) {
        contents.ExplicitAuthFlows = deserializeAws_json1_1ExplicitAuthFlowsListType(output.ExplicitAuthFlows, context);
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.LogoutURLs !== undefined && output.LogoutURLs !== null) {
        contents.LogoutURLs = deserializeAws_json1_1LogoutURLsListType(output.LogoutURLs, context);
    }
    if (output.PreventUserExistenceErrors !== undefined &&
        output.PreventUserExistenceErrors !== null) {
        contents.PreventUserExistenceErrors = output.PreventUserExistenceErrors;
    }
    if (output.ReadAttributes !== undefined && output.ReadAttributes !== null) {
        contents.ReadAttributes = deserializeAws_json1_1ClientPermissionListType(output.ReadAttributes, context);
    }
    if (output.RefreshTokenValidity !== undefined &&
        output.RefreshTokenValidity !== null) {
        contents.RefreshTokenValidity = output.RefreshTokenValidity;
    }
    if (output.SupportedIdentityProviders !== undefined &&
        output.SupportedIdentityProviders !== null) {
        contents.SupportedIdentityProviders = deserializeAws_json1_1SupportedIdentityProvidersListType(output.SupportedIdentityProviders, context);
    }
    if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
        contents.UserPoolId = output.UserPoolId;
    }
    if (output.WriteAttributes !== undefined && output.WriteAttributes !== null) {
        contents.WriteAttributes = deserializeAws_json1_1ClientPermissionListType(output.WriteAttributes, context);
    }
    return contents;
};
const deserializeAws_json1_1UserPoolDescriptionType = (output, context) => {
    let contents = {
        __type: "UserPoolDescriptionType",
        CreationDate: undefined,
        Id: undefined,
        LambdaConfig: undefined,
        LastModifiedDate: undefined,
        Name: undefined,
        Status: undefined
    };
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LambdaConfig !== undefined && output.LambdaConfig !== null) {
        contents.LambdaConfig = deserializeAws_json1_1LambdaConfigType(output.LambdaConfig, context);
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1UserPoolListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserPoolDescriptionType(entry, context));
};
const deserializeAws_json1_1UserPoolPolicyType = (output, context) => {
    let contents = {
        __type: "UserPoolPolicyType",
        PasswordPolicy: undefined
    };
    if (output.PasswordPolicy !== undefined && output.PasswordPolicy !== null) {
        contents.PasswordPolicy = deserializeAws_json1_1PasswordPolicyType(output.PasswordPolicy, context);
    }
    return contents;
};
const deserializeAws_json1_1UserPoolTaggingException = (output, context) => {
    let contents = {
        __type: "UserPoolTaggingException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UserPoolTagsType = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1UserPoolType = (output, context) => {
    let contents = {
        __type: "UserPoolType",
        AccountRecoverySetting: undefined,
        AdminCreateUserConfig: undefined,
        AliasAttributes: undefined,
        Arn: undefined,
        AutoVerifiedAttributes: undefined,
        CreationDate: undefined,
        CustomDomain: undefined,
        DeviceConfiguration: undefined,
        Domain: undefined,
        EmailConfiguration: undefined,
        EmailConfigurationFailure: undefined,
        EmailVerificationMessage: undefined,
        EmailVerificationSubject: undefined,
        EstimatedNumberOfUsers: undefined,
        Id: undefined,
        LambdaConfig: undefined,
        LastModifiedDate: undefined,
        MfaConfiguration: undefined,
        Name: undefined,
        Policies: undefined,
        SchemaAttributes: undefined,
        SmsAuthenticationMessage: undefined,
        SmsConfiguration: undefined,
        SmsConfigurationFailure: undefined,
        SmsVerificationMessage: undefined,
        Status: undefined,
        UserPoolAddOns: undefined,
        UserPoolTags: undefined,
        UsernameAttributes: undefined,
        VerificationMessageTemplate: undefined
    };
    if (output.AccountRecoverySetting !== undefined &&
        output.AccountRecoverySetting !== null) {
        contents.AccountRecoverySetting = deserializeAws_json1_1AccountRecoverySettingType(output.AccountRecoverySetting, context);
    }
    if (output.AdminCreateUserConfig !== undefined &&
        output.AdminCreateUserConfig !== null) {
        contents.AdminCreateUserConfig = deserializeAws_json1_1AdminCreateUserConfigType(output.AdminCreateUserConfig, context);
    }
    if (output.AliasAttributes !== undefined && output.AliasAttributes !== null) {
        contents.AliasAttributes = deserializeAws_json1_1AliasAttributesListType(output.AliasAttributes, context);
    }
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.AutoVerifiedAttributes !== undefined &&
        output.AutoVerifiedAttributes !== null) {
        contents.AutoVerifiedAttributes = deserializeAws_json1_1VerifiedAttributesListType(output.AutoVerifiedAttributes, context);
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.CustomDomain !== undefined && output.CustomDomain !== null) {
        contents.CustomDomain = output.CustomDomain;
    }
    if (output.DeviceConfiguration !== undefined &&
        output.DeviceConfiguration !== null) {
        contents.DeviceConfiguration = deserializeAws_json1_1DeviceConfigurationType(output.DeviceConfiguration, context);
    }
    if (output.Domain !== undefined && output.Domain !== null) {
        contents.Domain = output.Domain;
    }
    if (output.EmailConfiguration !== undefined &&
        output.EmailConfiguration !== null) {
        contents.EmailConfiguration = deserializeAws_json1_1EmailConfigurationType(output.EmailConfiguration, context);
    }
    if (output.EmailConfigurationFailure !== undefined &&
        output.EmailConfigurationFailure !== null) {
        contents.EmailConfigurationFailure = output.EmailConfigurationFailure;
    }
    if (output.EmailVerificationMessage !== undefined &&
        output.EmailVerificationMessage !== null) {
        contents.EmailVerificationMessage = output.EmailVerificationMessage;
    }
    if (output.EmailVerificationSubject !== undefined &&
        output.EmailVerificationSubject !== null) {
        contents.EmailVerificationSubject = output.EmailVerificationSubject;
    }
    if (output.EstimatedNumberOfUsers !== undefined &&
        output.EstimatedNumberOfUsers !== null) {
        contents.EstimatedNumberOfUsers = output.EstimatedNumberOfUsers;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LambdaConfig !== undefined && output.LambdaConfig !== null) {
        contents.LambdaConfig = deserializeAws_json1_1LambdaConfigType(output.LambdaConfig, context);
    }
    if (output.LastModifiedDate !== undefined &&
        output.LastModifiedDate !== null) {
        contents.LastModifiedDate = new Date(Math.round(output.LastModifiedDate * 1000));
    }
    if (output.MfaConfiguration !== undefined &&
        output.MfaConfiguration !== null) {
        contents.MfaConfiguration = output.MfaConfiguration;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Policies !== undefined && output.Policies !== null) {
        contents.Policies = deserializeAws_json1_1UserPoolPolicyType(output.Policies, context);
    }
    if (output.SchemaAttributes !== undefined &&
        output.SchemaAttributes !== null) {
        contents.SchemaAttributes = deserializeAws_json1_1SchemaAttributesListType(output.SchemaAttributes, context);
    }
    if (output.SmsAuthenticationMessage !== undefined &&
        output.SmsAuthenticationMessage !== null) {
        contents.SmsAuthenticationMessage = output.SmsAuthenticationMessage;
    }
    if (output.SmsConfiguration !== undefined &&
        output.SmsConfiguration !== null) {
        contents.SmsConfiguration = deserializeAws_json1_1SmsConfigurationType(output.SmsConfiguration, context);
    }
    if (output.SmsConfigurationFailure !== undefined &&
        output.SmsConfigurationFailure !== null) {
        contents.SmsConfigurationFailure = output.SmsConfigurationFailure;
    }
    if (output.SmsVerificationMessage !== undefined &&
        output.SmsVerificationMessage !== null) {
        contents.SmsVerificationMessage = output.SmsVerificationMessage;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UserPoolAddOns !== undefined && output.UserPoolAddOns !== null) {
        contents.UserPoolAddOns = deserializeAws_json1_1UserPoolAddOnsType(output.UserPoolAddOns, context);
    }
    if (output.UserPoolTags !== undefined && output.UserPoolTags !== null) {
        contents.UserPoolTags = deserializeAws_json1_1UserPoolTagsType(output.UserPoolTags, context);
    }
    if (output.UsernameAttributes !== undefined &&
        output.UsernameAttributes !== null) {
        contents.UsernameAttributes = deserializeAws_json1_1UsernameAttributesListType(output.UsernameAttributes, context);
    }
    if (output.VerificationMessageTemplate !== undefined &&
        output.VerificationMessageTemplate !== null) {
        contents.VerificationMessageTemplate = deserializeAws_json1_1VerificationMessageTemplateType(output.VerificationMessageTemplate, context);
    }
    return contents;
};
const deserializeAws_json1_1UserType = (output, context) => {
    let contents = {
        __type: "UserType",
        Attributes: undefined,
        Enabled: undefined,
        MFAOptions: undefined,
        UserCreateDate: undefined,
        UserLastModifiedDate: undefined,
        UserStatus: undefined,
        Username: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1AttributeListType(output.Attributes, context);
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.MFAOptions !== undefined && output.MFAOptions !== null) {
        contents.MFAOptions = deserializeAws_json1_1MFAOptionListType(output.MFAOptions, context);
    }
    if (output.UserCreateDate !== undefined && output.UserCreateDate !== null) {
        contents.UserCreateDate = new Date(Math.round(output.UserCreateDate * 1000));
    }
    if (output.UserLastModifiedDate !== undefined &&
        output.UserLastModifiedDate !== null) {
        contents.UserLastModifiedDate = new Date(Math.round(output.UserLastModifiedDate * 1000));
    }
    if (output.UserStatus !== undefined && output.UserStatus !== null) {
        contents.UserStatus = output.UserStatus;
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    return contents;
};
const deserializeAws_json1_1UsernameAttributesListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1UsernameExistsException = (output, context) => {
    let contents = {
        __type: "UsernameExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UsersListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserType(entry, context));
};
const deserializeAws_json1_1VerificationMessageTemplateType = (output, context) => {
    let contents = {
        __type: "VerificationMessageTemplateType",
        DefaultEmailOption: undefined,
        EmailMessage: undefined,
        EmailMessageByLink: undefined,
        EmailSubject: undefined,
        EmailSubjectByLink: undefined,
        SmsMessage: undefined
    };
    if (output.DefaultEmailOption !== undefined &&
        output.DefaultEmailOption !== null) {
        contents.DefaultEmailOption = output.DefaultEmailOption;
    }
    if (output.EmailMessage !== undefined && output.EmailMessage !== null) {
        contents.EmailMessage = output.EmailMessage;
    }
    if (output.EmailMessageByLink !== undefined &&
        output.EmailMessageByLink !== null) {
        contents.EmailMessageByLink = output.EmailMessageByLink;
    }
    if (output.EmailSubject !== undefined && output.EmailSubject !== null) {
        contents.EmailSubject = output.EmailSubject;
    }
    if (output.EmailSubjectByLink !== undefined &&
        output.EmailSubjectByLink !== null) {
        contents.EmailSubjectByLink = output.EmailSubjectByLink;
    }
    if (output.SmsMessage !== undefined && output.SmsMessage !== null) {
        contents.SmsMessage = output.SmsMessage;
    }
    return contents;
};
const deserializeAws_json1_1VerifiedAttributesListType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1VerifySoftwareTokenResponse = (output, context) => {
    let contents = {
        __type: "VerifySoftwareTokenResponse",
        Session: undefined,
        Status: undefined
    };
    if (output.Session !== undefined && output.Session !== null) {
        contents.Session = output.Session;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1VerifyUserAttributeResponse = (output, context) => {
    let contents = {
        __type: "VerifyUserAttributeResponse"
    };
    return contents;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    httpHeaders: output.headers,
    requestId: output.headers["x-amzn-requestid"]
});
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody, context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return (context.streamCollector(streamBody) || Promise.resolve(new Uint8Array()));
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => {
    return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};
const buildHttpRpcRequest = (context, headers, path, resolvedHostname, body) => {
    const contents = Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", path: path, headers: headers });
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
//# sourceMappingURL=Aws_json1_1.js.map