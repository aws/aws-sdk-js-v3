"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAddClientIDToOpenIDConnectProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddClientIDToOpenIDConnectProviderRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddClientIDToOpenIDConnectProvider", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddClientIDToOpenIDConnectProviderCommand = serializeAws_queryAddClientIDToOpenIDConnectProviderCommand;
async function serializeAws_queryAddRoleToInstanceProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddRoleToInstanceProfileRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddRoleToInstanceProfile", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddRoleToInstanceProfileCommand = serializeAws_queryAddRoleToInstanceProfileCommand;
async function serializeAws_queryAddUserToGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddUserToGroupRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddUserToGroup", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddUserToGroupCommand = serializeAws_queryAddUserToGroupCommand;
async function serializeAws_queryAttachGroupPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAttachGroupPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AttachGroupPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAttachGroupPolicyCommand = serializeAws_queryAttachGroupPolicyCommand;
async function serializeAws_queryAttachRolePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAttachRolePolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AttachRolePolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAttachRolePolicyCommand = serializeAws_queryAttachRolePolicyCommand;
async function serializeAws_queryAttachUserPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAttachUserPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AttachUserPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAttachUserPolicyCommand = serializeAws_queryAttachUserPolicyCommand;
async function serializeAws_queryChangePasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryChangePasswordRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ChangePassword", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryChangePasswordCommand = serializeAws_queryChangePasswordCommand;
async function serializeAws_queryCreateAccessKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateAccessKeyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateAccessKey", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateAccessKeyCommand = serializeAws_queryCreateAccessKeyCommand;
async function serializeAws_queryCreateAccountAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateAccountAliasRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateAccountAlias", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateAccountAliasCommand = serializeAws_queryCreateAccountAliasCommand;
async function serializeAws_queryCreateGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateGroupRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateGroup", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateGroupCommand = serializeAws_queryCreateGroupCommand;
async function serializeAws_queryCreateInstanceProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateInstanceProfileRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateInstanceProfile", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateInstanceProfileCommand = serializeAws_queryCreateInstanceProfileCommand;
async function serializeAws_queryCreateLoginProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateLoginProfileRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateLoginProfile", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateLoginProfileCommand = serializeAws_queryCreateLoginProfileCommand;
async function serializeAws_queryCreateOpenIDConnectProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateOpenIDConnectProviderRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateOpenIDConnectProvider", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateOpenIDConnectProviderCommand = serializeAws_queryCreateOpenIDConnectProviderCommand;
async function serializeAws_queryCreatePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreatePolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreatePolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreatePolicyCommand = serializeAws_queryCreatePolicyCommand;
async function serializeAws_queryCreatePolicyVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreatePolicyVersionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreatePolicyVersion", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreatePolicyVersionCommand = serializeAws_queryCreatePolicyVersionCommand;
async function serializeAws_queryCreateRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateRoleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateRole", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateRoleCommand = serializeAws_queryCreateRoleCommand;
async function serializeAws_queryCreateSAMLProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateSAMLProviderRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateSAMLProvider", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateSAMLProviderCommand = serializeAws_queryCreateSAMLProviderCommand;
async function serializeAws_queryCreateServiceLinkedRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateServiceLinkedRoleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateServiceLinkedRole", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateServiceLinkedRoleCommand = serializeAws_queryCreateServiceLinkedRoleCommand;
async function serializeAws_queryCreateServiceSpecificCredentialCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateServiceSpecificCredentialRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateServiceSpecificCredential", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateServiceSpecificCredentialCommand = serializeAws_queryCreateServiceSpecificCredentialCommand;
async function serializeAws_queryCreateUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateUserRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateUser", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateUserCommand = serializeAws_queryCreateUserCommand;
async function serializeAws_queryCreateVirtualMFADeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateVirtualMFADeviceRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateVirtualMFADevice", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateVirtualMFADeviceCommand = serializeAws_queryCreateVirtualMFADeviceCommand;
async function serializeAws_queryDeactivateMFADeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeactivateMFADeviceRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeactivateMFADevice", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeactivateMFADeviceCommand = serializeAws_queryDeactivateMFADeviceCommand;
async function serializeAws_queryDeleteAccessKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteAccessKeyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteAccessKey", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteAccessKeyCommand = serializeAws_queryDeleteAccessKeyCommand;
async function serializeAws_queryDeleteAccountAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteAccountAliasRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteAccountAlias", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteAccountAliasCommand = serializeAws_queryDeleteAccountAliasCommand;
async function serializeAws_queryDeleteAccountPasswordPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "DeleteAccountPasswordPolicy",
        Version: "2010-05-08"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteAccountPasswordPolicyCommand = serializeAws_queryDeleteAccountPasswordPolicyCommand;
async function serializeAws_queryDeleteGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteGroupRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteGroup", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteGroupCommand = serializeAws_queryDeleteGroupCommand;
async function serializeAws_queryDeleteGroupPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteGroupPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteGroupPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteGroupPolicyCommand = serializeAws_queryDeleteGroupPolicyCommand;
async function serializeAws_queryDeleteInstanceProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteInstanceProfileRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteInstanceProfile", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteInstanceProfileCommand = serializeAws_queryDeleteInstanceProfileCommand;
async function serializeAws_queryDeleteLoginProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteLoginProfileRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteLoginProfile", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteLoginProfileCommand = serializeAws_queryDeleteLoginProfileCommand;
async function serializeAws_queryDeleteOpenIDConnectProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteOpenIDConnectProviderRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteOpenIDConnectProvider", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteOpenIDConnectProviderCommand = serializeAws_queryDeleteOpenIDConnectProviderCommand;
async function serializeAws_queryDeletePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeletePolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeletePolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeletePolicyCommand = serializeAws_queryDeletePolicyCommand;
async function serializeAws_queryDeletePolicyVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeletePolicyVersionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeletePolicyVersion", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeletePolicyVersionCommand = serializeAws_queryDeletePolicyVersionCommand;
async function serializeAws_queryDeleteRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteRoleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteRole", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteRoleCommand = serializeAws_queryDeleteRoleCommand;
async function serializeAws_queryDeleteRolePermissionsBoundaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteRolePermissionsBoundaryRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteRolePermissionsBoundary", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteRolePermissionsBoundaryCommand = serializeAws_queryDeleteRolePermissionsBoundaryCommand;
async function serializeAws_queryDeleteRolePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteRolePolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteRolePolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteRolePolicyCommand = serializeAws_queryDeleteRolePolicyCommand;
async function serializeAws_queryDeleteSAMLProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteSAMLProviderRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteSAMLProvider", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteSAMLProviderCommand = serializeAws_queryDeleteSAMLProviderCommand;
async function serializeAws_queryDeleteSSHPublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteSSHPublicKeyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteSSHPublicKey", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteSSHPublicKeyCommand = serializeAws_queryDeleteSSHPublicKeyCommand;
async function serializeAws_queryDeleteServerCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteServerCertificateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteServerCertificate", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteServerCertificateCommand = serializeAws_queryDeleteServerCertificateCommand;
async function serializeAws_queryDeleteServiceLinkedRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteServiceLinkedRoleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteServiceLinkedRole", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteServiceLinkedRoleCommand = serializeAws_queryDeleteServiceLinkedRoleCommand;
async function serializeAws_queryDeleteServiceSpecificCredentialCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteServiceSpecificCredentialRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteServiceSpecificCredential", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteServiceSpecificCredentialCommand = serializeAws_queryDeleteServiceSpecificCredentialCommand;
async function serializeAws_queryDeleteSigningCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteSigningCertificateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteSigningCertificate", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteSigningCertificateCommand = serializeAws_queryDeleteSigningCertificateCommand;
async function serializeAws_queryDeleteUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteUserRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteUser", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteUserCommand = serializeAws_queryDeleteUserCommand;
async function serializeAws_queryDeleteUserPermissionsBoundaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteUserPermissionsBoundaryRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteUserPermissionsBoundary", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteUserPermissionsBoundaryCommand = serializeAws_queryDeleteUserPermissionsBoundaryCommand;
async function serializeAws_queryDeleteUserPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteUserPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteUserPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteUserPolicyCommand = serializeAws_queryDeleteUserPolicyCommand;
async function serializeAws_queryDeleteVirtualMFADeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteVirtualMFADeviceRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteVirtualMFADevice", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteVirtualMFADeviceCommand = serializeAws_queryDeleteVirtualMFADeviceCommand;
async function serializeAws_queryDetachGroupPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDetachGroupPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DetachGroupPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDetachGroupPolicyCommand = serializeAws_queryDetachGroupPolicyCommand;
async function serializeAws_queryDetachRolePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDetachRolePolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DetachRolePolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDetachRolePolicyCommand = serializeAws_queryDetachRolePolicyCommand;
async function serializeAws_queryDetachUserPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDetachUserPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DetachUserPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDetachUserPolicyCommand = serializeAws_queryDetachUserPolicyCommand;
async function serializeAws_queryEnableMFADeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryEnableMFADeviceRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "EnableMFADevice", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryEnableMFADeviceCommand = serializeAws_queryEnableMFADeviceCommand;
async function serializeAws_queryGenerateCredentialReportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "GenerateCredentialReport",
        Version: "2010-05-08"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGenerateCredentialReportCommand = serializeAws_queryGenerateCredentialReportCommand;
async function serializeAws_queryGenerateOrganizationsAccessReportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGenerateOrganizationsAccessReportRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GenerateOrganizationsAccessReport", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGenerateOrganizationsAccessReportCommand = serializeAws_queryGenerateOrganizationsAccessReportCommand;
async function serializeAws_queryGenerateServiceLastAccessedDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGenerateServiceLastAccessedDetailsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GenerateServiceLastAccessedDetails", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGenerateServiceLastAccessedDetailsCommand = serializeAws_queryGenerateServiceLastAccessedDetailsCommand;
async function serializeAws_queryGetAccessKeyLastUsedCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetAccessKeyLastUsedRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetAccessKeyLastUsed", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetAccessKeyLastUsedCommand = serializeAws_queryGetAccessKeyLastUsedCommand;
async function serializeAws_queryGetAccountAuthorizationDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetAccountAuthorizationDetailsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetAccountAuthorizationDetails", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetAccountAuthorizationDetailsCommand = serializeAws_queryGetAccountAuthorizationDetailsCommand;
async function serializeAws_queryGetAccountPasswordPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "GetAccountPasswordPolicy",
        Version: "2010-05-08"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetAccountPasswordPolicyCommand = serializeAws_queryGetAccountPasswordPolicyCommand;
async function serializeAws_queryGetAccountSummaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "GetAccountSummary",
        Version: "2010-05-08"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetAccountSummaryCommand = serializeAws_queryGetAccountSummaryCommand;
async function serializeAws_queryGetContextKeysForCustomPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetContextKeysForCustomPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetContextKeysForCustomPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetContextKeysForCustomPolicyCommand = serializeAws_queryGetContextKeysForCustomPolicyCommand;
async function serializeAws_queryGetContextKeysForPrincipalPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetContextKeysForPrincipalPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetContextKeysForPrincipalPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetContextKeysForPrincipalPolicyCommand = serializeAws_queryGetContextKeysForPrincipalPolicyCommand;
async function serializeAws_queryGetCredentialReportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "GetCredentialReport",
        Version: "2010-05-08"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetCredentialReportCommand = serializeAws_queryGetCredentialReportCommand;
async function serializeAws_queryGetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetGroupRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetGroup", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetGroupCommand = serializeAws_queryGetGroupCommand;
async function serializeAws_queryGetGroupPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetGroupPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetGroupPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetGroupPolicyCommand = serializeAws_queryGetGroupPolicyCommand;
async function serializeAws_queryGetInstanceProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetInstanceProfileRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetInstanceProfile", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetInstanceProfileCommand = serializeAws_queryGetInstanceProfileCommand;
async function serializeAws_queryGetLoginProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetLoginProfileRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetLoginProfile", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetLoginProfileCommand = serializeAws_queryGetLoginProfileCommand;
async function serializeAws_queryGetOpenIDConnectProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetOpenIDConnectProviderRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetOpenIDConnectProvider", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetOpenIDConnectProviderCommand = serializeAws_queryGetOpenIDConnectProviderCommand;
async function serializeAws_queryGetOrganizationsAccessReportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetOrganizationsAccessReportRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetOrganizationsAccessReport", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetOrganizationsAccessReportCommand = serializeAws_queryGetOrganizationsAccessReportCommand;
async function serializeAws_queryGetPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetPolicyCommand = serializeAws_queryGetPolicyCommand;
async function serializeAws_queryGetPolicyVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetPolicyVersionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetPolicyVersion", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetPolicyVersionCommand = serializeAws_queryGetPolicyVersionCommand;
async function serializeAws_queryGetRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetRoleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetRole", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetRoleCommand = serializeAws_queryGetRoleCommand;
async function serializeAws_queryGetRolePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetRolePolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetRolePolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetRolePolicyCommand = serializeAws_queryGetRolePolicyCommand;
async function serializeAws_queryGetSAMLProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetSAMLProviderRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetSAMLProvider", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetSAMLProviderCommand = serializeAws_queryGetSAMLProviderCommand;
async function serializeAws_queryGetSSHPublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetSSHPublicKeyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetSSHPublicKey", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetSSHPublicKeyCommand = serializeAws_queryGetSSHPublicKeyCommand;
async function serializeAws_queryGetServerCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetServerCertificateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetServerCertificate", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetServerCertificateCommand = serializeAws_queryGetServerCertificateCommand;
async function serializeAws_queryGetServiceLastAccessedDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetServiceLastAccessedDetailsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetServiceLastAccessedDetails", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetServiceLastAccessedDetailsCommand = serializeAws_queryGetServiceLastAccessedDetailsCommand;
async function serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetServiceLastAccessedDetailsWithEntities", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand;
async function serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetServiceLinkedRoleDeletionStatusRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetServiceLinkedRoleDeletionStatus", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand;
async function serializeAws_queryGetUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetUserRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetUser", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetUserCommand = serializeAws_queryGetUserCommand;
async function serializeAws_queryGetUserPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetUserPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetUserPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetUserPolicyCommand = serializeAws_queryGetUserPolicyCommand;
async function serializeAws_queryListAccessKeysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListAccessKeysRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListAccessKeys", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListAccessKeysCommand = serializeAws_queryListAccessKeysCommand;
async function serializeAws_queryListAccountAliasesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListAccountAliasesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListAccountAliases", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListAccountAliasesCommand = serializeAws_queryListAccountAliasesCommand;
async function serializeAws_queryListAttachedGroupPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListAttachedGroupPoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListAttachedGroupPolicies", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListAttachedGroupPoliciesCommand = serializeAws_queryListAttachedGroupPoliciesCommand;
async function serializeAws_queryListAttachedRolePoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListAttachedRolePoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListAttachedRolePolicies", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListAttachedRolePoliciesCommand = serializeAws_queryListAttachedRolePoliciesCommand;
async function serializeAws_queryListAttachedUserPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListAttachedUserPoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListAttachedUserPolicies", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListAttachedUserPoliciesCommand = serializeAws_queryListAttachedUserPoliciesCommand;
async function serializeAws_queryListEntitiesForPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListEntitiesForPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListEntitiesForPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListEntitiesForPolicyCommand = serializeAws_queryListEntitiesForPolicyCommand;
async function serializeAws_queryListGroupPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListGroupPoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListGroupPolicies", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListGroupPoliciesCommand = serializeAws_queryListGroupPoliciesCommand;
async function serializeAws_queryListGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListGroupsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListGroups", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListGroupsCommand = serializeAws_queryListGroupsCommand;
async function serializeAws_queryListGroupsForUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListGroupsForUserRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListGroupsForUser", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListGroupsForUserCommand = serializeAws_queryListGroupsForUserCommand;
async function serializeAws_queryListInstanceProfilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListInstanceProfilesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListInstanceProfiles", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListInstanceProfilesCommand = serializeAws_queryListInstanceProfilesCommand;
async function serializeAws_queryListInstanceProfilesForRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListInstanceProfilesForRoleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListInstanceProfilesForRole", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListInstanceProfilesForRoleCommand = serializeAws_queryListInstanceProfilesForRoleCommand;
async function serializeAws_queryListMFADevicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListMFADevicesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListMFADevices", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListMFADevicesCommand = serializeAws_queryListMFADevicesCommand;
async function serializeAws_queryListOpenIDConnectProvidersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListOpenIDConnectProvidersRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListOpenIDConnectProviders", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListOpenIDConnectProvidersCommand = serializeAws_queryListOpenIDConnectProvidersCommand;
async function serializeAws_queryListPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListPoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListPolicies", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListPoliciesCommand = serializeAws_queryListPoliciesCommand;
async function serializeAws_queryListPoliciesGrantingServiceAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListPoliciesGrantingServiceAccessRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListPoliciesGrantingServiceAccess", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListPoliciesGrantingServiceAccessCommand = serializeAws_queryListPoliciesGrantingServiceAccessCommand;
async function serializeAws_queryListPolicyVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListPolicyVersionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListPolicyVersions", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListPolicyVersionsCommand = serializeAws_queryListPolicyVersionsCommand;
async function serializeAws_queryListRolePoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListRolePoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListRolePolicies", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListRolePoliciesCommand = serializeAws_queryListRolePoliciesCommand;
async function serializeAws_queryListRoleTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListRoleTagsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListRoleTags", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListRoleTagsCommand = serializeAws_queryListRoleTagsCommand;
async function serializeAws_queryListRolesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListRolesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListRoles", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListRolesCommand = serializeAws_queryListRolesCommand;
async function serializeAws_queryListSAMLProvidersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListSAMLProvidersRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListSAMLProviders", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListSAMLProvidersCommand = serializeAws_queryListSAMLProvidersCommand;
async function serializeAws_queryListSSHPublicKeysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListSSHPublicKeysRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListSSHPublicKeys", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListSSHPublicKeysCommand = serializeAws_queryListSSHPublicKeysCommand;
async function serializeAws_queryListServerCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListServerCertificatesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListServerCertificates", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListServerCertificatesCommand = serializeAws_queryListServerCertificatesCommand;
async function serializeAws_queryListServiceSpecificCredentialsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListServiceSpecificCredentialsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListServiceSpecificCredentials", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListServiceSpecificCredentialsCommand = serializeAws_queryListServiceSpecificCredentialsCommand;
async function serializeAws_queryListSigningCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListSigningCertificatesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListSigningCertificates", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListSigningCertificatesCommand = serializeAws_queryListSigningCertificatesCommand;
async function serializeAws_queryListUserPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListUserPoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListUserPolicies", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListUserPoliciesCommand = serializeAws_queryListUserPoliciesCommand;
async function serializeAws_queryListUserTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListUserTagsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListUserTags", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListUserTagsCommand = serializeAws_queryListUserTagsCommand;
async function serializeAws_queryListUsersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListUsersRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListUsers", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListUsersCommand = serializeAws_queryListUsersCommand;
async function serializeAws_queryListVirtualMFADevicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListVirtualMFADevicesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListVirtualMFADevices", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListVirtualMFADevicesCommand = serializeAws_queryListVirtualMFADevicesCommand;
async function serializeAws_queryPutGroupPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutGroupPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutGroupPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutGroupPolicyCommand = serializeAws_queryPutGroupPolicyCommand;
async function serializeAws_queryPutRolePermissionsBoundaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutRolePermissionsBoundaryRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutRolePermissionsBoundary", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutRolePermissionsBoundaryCommand = serializeAws_queryPutRolePermissionsBoundaryCommand;
async function serializeAws_queryPutRolePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutRolePolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutRolePolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutRolePolicyCommand = serializeAws_queryPutRolePolicyCommand;
async function serializeAws_queryPutUserPermissionsBoundaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutUserPermissionsBoundaryRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutUserPermissionsBoundary", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutUserPermissionsBoundaryCommand = serializeAws_queryPutUserPermissionsBoundaryCommand;
async function serializeAws_queryPutUserPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPutUserPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "PutUserPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPutUserPolicyCommand = serializeAws_queryPutUserPolicyCommand;
async function serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveClientIDFromOpenIDConnectProviderRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveClientIDFromOpenIDConnectProvider", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand;
async function serializeAws_queryRemoveRoleFromInstanceProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveRoleFromInstanceProfileRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveRoleFromInstanceProfile", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveRoleFromInstanceProfileCommand = serializeAws_queryRemoveRoleFromInstanceProfileCommand;
async function serializeAws_queryRemoveUserFromGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemoveUserFromGroupRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemoveUserFromGroup", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemoveUserFromGroupCommand = serializeAws_queryRemoveUserFromGroupCommand;
async function serializeAws_queryResetServiceSpecificCredentialCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryResetServiceSpecificCredentialRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ResetServiceSpecificCredential", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryResetServiceSpecificCredentialCommand = serializeAws_queryResetServiceSpecificCredentialCommand;
async function serializeAws_queryResyncMFADeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryResyncMFADeviceRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ResyncMFADevice", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryResyncMFADeviceCommand = serializeAws_queryResyncMFADeviceCommand;
async function serializeAws_querySetDefaultPolicyVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetDefaultPolicyVersionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetDefaultPolicyVersion", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetDefaultPolicyVersionCommand = serializeAws_querySetDefaultPolicyVersionCommand;
async function serializeAws_querySetSecurityTokenServicePreferencesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetSecurityTokenServicePreferencesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetSecurityTokenServicePreferences", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetSecurityTokenServicePreferencesCommand = serializeAws_querySetSecurityTokenServicePreferencesCommand;
async function serializeAws_querySimulateCustomPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySimulateCustomPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SimulateCustomPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySimulateCustomPolicyCommand = serializeAws_querySimulateCustomPolicyCommand;
async function serializeAws_querySimulatePrincipalPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySimulatePrincipalPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SimulatePrincipalPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySimulatePrincipalPolicyCommand = serializeAws_querySimulatePrincipalPolicyCommand;
async function serializeAws_queryTagRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryTagRoleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "TagRole", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryTagRoleCommand = serializeAws_queryTagRoleCommand;
async function serializeAws_queryTagUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryTagUserRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "TagUser", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryTagUserCommand = serializeAws_queryTagUserCommand;
async function serializeAws_queryUntagRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUntagRoleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UntagRole", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUntagRoleCommand = serializeAws_queryUntagRoleCommand;
async function serializeAws_queryUntagUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUntagUserRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UntagUser", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUntagUserCommand = serializeAws_queryUntagUserCommand;
async function serializeAws_queryUpdateAccessKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateAccessKeyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateAccessKey", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateAccessKeyCommand = serializeAws_queryUpdateAccessKeyCommand;
async function serializeAws_queryUpdateAccountPasswordPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateAccountPasswordPolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateAccountPasswordPolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateAccountPasswordPolicyCommand = serializeAws_queryUpdateAccountPasswordPolicyCommand;
async function serializeAws_queryUpdateAssumeRolePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateAssumeRolePolicyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateAssumeRolePolicy", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateAssumeRolePolicyCommand = serializeAws_queryUpdateAssumeRolePolicyCommand;
async function serializeAws_queryUpdateGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateGroupRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateGroup", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateGroupCommand = serializeAws_queryUpdateGroupCommand;
async function serializeAws_queryUpdateLoginProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateLoginProfileRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateLoginProfile", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateLoginProfileCommand = serializeAws_queryUpdateLoginProfileCommand;
async function serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateOpenIDConnectProviderThumbprintRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateOpenIDConnectProviderThumbprint", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand;
async function serializeAws_queryUpdateRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateRoleRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateRole", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateRoleCommand = serializeAws_queryUpdateRoleCommand;
async function serializeAws_queryUpdateRoleDescriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateRoleDescriptionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateRoleDescription", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateRoleDescriptionCommand = serializeAws_queryUpdateRoleDescriptionCommand;
async function serializeAws_queryUpdateSAMLProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateSAMLProviderRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateSAMLProvider", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateSAMLProviderCommand = serializeAws_queryUpdateSAMLProviderCommand;
async function serializeAws_queryUpdateSSHPublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateSSHPublicKeyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateSSHPublicKey", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateSSHPublicKeyCommand = serializeAws_queryUpdateSSHPublicKeyCommand;
async function serializeAws_queryUpdateServerCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateServerCertificateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateServerCertificate", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateServerCertificateCommand = serializeAws_queryUpdateServerCertificateCommand;
async function serializeAws_queryUpdateServiceSpecificCredentialCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateServiceSpecificCredentialRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateServiceSpecificCredential", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateServiceSpecificCredentialCommand = serializeAws_queryUpdateServiceSpecificCredentialCommand;
async function serializeAws_queryUpdateSigningCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateSigningCertificateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateSigningCertificate", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateSigningCertificateCommand = serializeAws_queryUpdateSigningCertificateCommand;
async function serializeAws_queryUpdateUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateUserRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateUser", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateUserCommand = serializeAws_queryUpdateUserCommand;
async function serializeAws_queryUploadSSHPublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUploadSSHPublicKeyRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UploadSSHPublicKey", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUploadSSHPublicKeyCommand = serializeAws_queryUploadSSHPublicKeyCommand;
async function serializeAws_queryUploadServerCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUploadServerCertificateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UploadServerCertificate", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUploadServerCertificateCommand = serializeAws_queryUploadServerCertificateCommand;
async function serializeAws_queryUploadSigningCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUploadSigningCertificateRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UploadSigningCertificate", Version: "2010-05-08" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUploadSigningCertificateCommand = serializeAws_queryUploadSigningCertificateCommand;
async function deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddClientIDToOpenIDConnectProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand = deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand;
async function deserializeAws_queryAddClientIDToOpenIDConnectProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryAddRoleToInstanceProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddRoleToInstanceProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddRoleToInstanceProfileCommand = deserializeAws_queryAddRoleToInstanceProfileCommand;
async function deserializeAws_queryAddRoleToInstanceProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryAddUserToGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAddUserToGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAddUserToGroupCommand = deserializeAws_queryAddUserToGroupCommand;
async function deserializeAws_queryAddUserToGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryAttachGroupPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAttachGroupPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAttachGroupPolicyCommand = deserializeAws_queryAttachGroupPolicyCommand;
async function deserializeAws_queryAttachGroupPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotAttachableException":
        case "com.amazon.webservices.auth.identity.v20100508#PolicyNotAttachableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryAttachRolePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAttachRolePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAttachRolePolicyCommand = deserializeAws_queryAttachRolePolicyCommand;
async function deserializeAws_queryAttachRolePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotAttachableException":
        case "com.amazon.webservices.auth.identity.v20100508#PolicyNotAttachableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryAttachUserPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryAttachUserPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryAttachUserPolicyCommand = deserializeAws_queryAttachUserPolicyCommand;
async function deserializeAws_queryAttachUserPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotAttachableException":
        case "com.amazon.webservices.auth.identity.v20100508#PolicyNotAttachableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryChangePasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryChangePasswordCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryChangePasswordCommand = deserializeAws_queryChangePasswordCommand;
async function deserializeAws_queryChangePasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityTemporarilyUnmodifiableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserTypeException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidUserTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidUserTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordPolicyViolationException":
        case "com.amazon.webservices.auth.identity.v20100508#PasswordPolicyViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateAccessKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateAccessKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateAccessKeyResponse(data.CreateAccessKeyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAccessKeyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateAccessKeyCommand = deserializeAws_queryCreateAccessKeyCommand;
async function deserializeAws_queryCreateAccessKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateAccountAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateAccountAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateAccountAliasCommand = deserializeAws_queryCreateAccountAliasCommand;
async function deserializeAws_queryCreateAccountAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateGroupResponse(data.CreateGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateGroupCommand = deserializeAws_queryCreateGroupCommand;
async function deserializeAws_queryCreateGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateInstanceProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateInstanceProfileResponse(data.CreateInstanceProfileResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateInstanceProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateInstanceProfileCommand = deserializeAws_queryCreateInstanceProfileCommand;
async function deserializeAws_queryCreateInstanceProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateLoginProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateLoginProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateLoginProfileResponse(data.CreateLoginProfileResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLoginProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateLoginProfileCommand = deserializeAws_queryCreateLoginProfileCommand;
async function deserializeAws_queryCreateLoginProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordPolicyViolationException":
        case "com.amazon.webservices.auth.identity.v20100508#PasswordPolicyViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateOpenIDConnectProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateOpenIDConnectProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateOpenIDConnectProviderResponse(data.CreateOpenIDConnectProviderResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateOpenIDConnectProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateOpenIDConnectProviderCommand = deserializeAws_queryCreateOpenIDConnectProviderCommand;
async function deserializeAws_queryCreateOpenIDConnectProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreatePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreatePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreatePolicyResponse(data.CreatePolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreatePolicyCommand = deserializeAws_queryCreatePolicyCommand;
async function deserializeAws_queryCreatePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.webservices.auth.identity.v20100508#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreatePolicyVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreatePolicyVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreatePolicyVersionResponse(data.CreatePolicyVersionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePolicyVersionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreatePolicyVersionCommand = deserializeAws_queryCreatePolicyVersionCommand;
async function deserializeAws_queryCreatePolicyVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.webservices.auth.identity.v20100508#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateRoleResponse(data.CreateRoleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRoleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateRoleCommand = deserializeAws_queryCreateRoleCommand;
async function deserializeAws_queryCreateRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.webservices.auth.identity.v20100508#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.webservices.auth.identity.v20100508#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateSAMLProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateSAMLProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateSAMLProviderResponse(data.CreateSAMLProviderResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSAMLProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateSAMLProviderCommand = deserializeAws_queryCreateSAMLProviderCommand;
async function deserializeAws_queryCreateSAMLProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateServiceLinkedRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateServiceLinkedRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateServiceLinkedRoleResponse(data.CreateServiceLinkedRoleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateServiceLinkedRoleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateServiceLinkedRoleCommand = deserializeAws_queryCreateServiceLinkedRoleCommand;
async function deserializeAws_queryCreateServiceLinkedRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateServiceSpecificCredentialCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateServiceSpecificCredentialCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateServiceSpecificCredentialResponse(data.CreateServiceSpecificCredentialResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateServiceSpecificCredentialResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateServiceSpecificCredentialCommand = deserializeAws_queryCreateServiceSpecificCredentialCommand;
async function deserializeAws_queryCreateServiceSpecificCredentialCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotSupportedException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateUserResponse(data.CreateUserResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateUserCommand = deserializeAws_queryCreateUserCommand;
async function deserializeAws_queryCreateUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.webservices.auth.identity.v20100508#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateVirtualMFADeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateVirtualMFADeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateVirtualMFADeviceResponse(data.CreateVirtualMFADeviceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateVirtualMFADeviceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateVirtualMFADeviceCommand = deserializeAws_queryCreateVirtualMFADeviceCommand;
async function deserializeAws_queryCreateVirtualMFADeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeactivateMFADeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeactivateMFADeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeactivateMFADeviceCommand = deserializeAws_queryDeactivateMFADeviceCommand;
async function deserializeAws_queryDeactivateMFADeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityTemporarilyUnmodifiableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteAccessKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteAccessKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteAccessKeyCommand = deserializeAws_queryDeleteAccessKeyCommand;
async function deserializeAws_queryDeleteAccessKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteAccountAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteAccountAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteAccountAliasCommand = deserializeAws_queryDeleteAccountAliasCommand;
async function deserializeAws_queryDeleteAccountAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteAccountPasswordPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteAccountPasswordPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteAccountPasswordPolicyCommand = deserializeAws_queryDeleteAccountPasswordPolicyCommand;
async function deserializeAws_queryDeleteAccountPasswordPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteGroupCommand = deserializeAws_queryDeleteGroupCommand;
async function deserializeAws_queryDeleteGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazon.webservices.auth.identity.v20100508#DeleteConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteGroupPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteGroupPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteGroupPolicyCommand = deserializeAws_queryDeleteGroupPolicyCommand;
async function deserializeAws_queryDeleteGroupPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteInstanceProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteInstanceProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteInstanceProfileCommand = deserializeAws_queryDeleteInstanceProfileCommand;
async function deserializeAws_queryDeleteInstanceProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazon.webservices.auth.identity.v20100508#DeleteConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteLoginProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteLoginProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteLoginProfileCommand = deserializeAws_queryDeleteLoginProfileCommand;
async function deserializeAws_queryDeleteLoginProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityTemporarilyUnmodifiableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteOpenIDConnectProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteOpenIDConnectProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteOpenIDConnectProviderCommand = deserializeAws_queryDeleteOpenIDConnectProviderCommand;
async function deserializeAws_queryDeleteOpenIDConnectProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeletePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeletePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeletePolicyCommand = deserializeAws_queryDeletePolicyCommand;
async function deserializeAws_queryDeletePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazon.webservices.auth.identity.v20100508#DeleteConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeletePolicyVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeletePolicyVersionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeletePolicyVersionCommand = deserializeAws_queryDeletePolicyVersionCommand;
async function deserializeAws_queryDeletePolicyVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazon.webservices.auth.identity.v20100508#DeleteConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteRoleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteRoleCommand = deserializeAws_queryDeleteRoleCommand;
async function deserializeAws_queryDeleteRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.webservices.auth.identity.v20100508#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeleteConflictException":
        case "com.amazon.webservices.auth.identity.v20100508#DeleteConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteRolePermissionsBoundaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteRolePermissionsBoundaryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteRolePermissionsBoundaryCommand = deserializeAws_queryDeleteRolePermissionsBoundaryCommand;
async function deserializeAws_queryDeleteRolePermissionsBoundaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteRolePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteRolePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteRolePolicyCommand = deserializeAws_queryDeleteRolePolicyCommand;
async function deserializeAws_queryDeleteRolePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteSAMLProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteSAMLProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteSAMLProviderCommand = deserializeAws_queryDeleteSAMLProviderCommand;
async function deserializeAws_queryDeleteSAMLProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteSSHPublicKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteSSHPublicKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteSSHPublicKeyCommand = deserializeAws_queryDeleteSSHPublicKeyCommand;
async function deserializeAws_queryDeleteSSHPublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteServerCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteServerCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteServerCertificateCommand = deserializeAws_queryDeleteServerCertificateCommand;
async function deserializeAws_queryDeleteServerCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazon.webservices.auth.identity.v20100508#DeleteConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteServiceLinkedRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteServiceLinkedRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteServiceLinkedRoleResponse(data.DeleteServiceLinkedRoleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteServiceLinkedRoleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteServiceLinkedRoleCommand = deserializeAws_queryDeleteServiceLinkedRoleCommand;
async function deserializeAws_queryDeleteServiceLinkedRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteServiceSpecificCredentialCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteServiceSpecificCredentialCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteServiceSpecificCredentialCommand = deserializeAws_queryDeleteServiceSpecificCredentialCommand;
async function deserializeAws_queryDeleteServiceSpecificCredentialCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteSigningCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteSigningCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteSigningCertificateCommand = deserializeAws_queryDeleteSigningCertificateCommand;
async function deserializeAws_queryDeleteSigningCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteUserCommand = deserializeAws_queryDeleteUserCommand;
async function deserializeAws_queryDeleteUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.webservices.auth.identity.v20100508#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeleteConflictException":
        case "com.amazon.webservices.auth.identity.v20100508#DeleteConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteUserPermissionsBoundaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteUserPermissionsBoundaryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteUserPermissionsBoundaryCommand = deserializeAws_queryDeleteUserPermissionsBoundaryCommand;
async function deserializeAws_queryDeleteUserPermissionsBoundaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteUserPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteUserPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteUserPolicyCommand = deserializeAws_queryDeleteUserPolicyCommand;
async function deserializeAws_queryDeleteUserPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteVirtualMFADeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteVirtualMFADeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteVirtualMFADeviceCommand = deserializeAws_queryDeleteVirtualMFADeviceCommand;
async function deserializeAws_queryDeleteVirtualMFADeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeleteConflictException":
        case "com.amazon.webservices.auth.identity.v20100508#DeleteConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDetachGroupPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDetachGroupPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDetachGroupPolicyCommand = deserializeAws_queryDetachGroupPolicyCommand;
async function deserializeAws_queryDetachGroupPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDetachRolePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDetachRolePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDetachRolePolicyCommand = deserializeAws_queryDetachRolePolicyCommand;
async function deserializeAws_queryDetachRolePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDetachUserPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDetachUserPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDetachUserPolicyCommand = deserializeAws_queryDetachUserPolicyCommand;
async function deserializeAws_queryDetachUserPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryEnableMFADeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryEnableMFADeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryEnableMFADeviceCommand = deserializeAws_queryEnableMFADeviceCommand;
async function deserializeAws_queryEnableMFADeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityTemporarilyUnmodifiableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAuthenticationCodeException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidAuthenticationCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidAuthenticationCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGenerateCredentialReportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGenerateCredentialReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGenerateCredentialReportResponse(data.GenerateCredentialReportResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateCredentialReportResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGenerateCredentialReportCommand = deserializeAws_queryGenerateCredentialReportCommand;
async function deserializeAws_queryGenerateCredentialReportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGenerateOrganizationsAccessReportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGenerateOrganizationsAccessReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGenerateOrganizationsAccessReportResponse(data.GenerateOrganizationsAccessReportResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateOrganizationsAccessReportResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGenerateOrganizationsAccessReportCommand = deserializeAws_queryGenerateOrganizationsAccessReportCommand;
async function deserializeAws_queryGenerateOrganizationsAccessReportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ReportGenerationLimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#ReportGenerationLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryReportGenerationLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGenerateServiceLastAccessedDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGenerateServiceLastAccessedDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGenerateServiceLastAccessedDetailsResponse(data.GenerateServiceLastAccessedDetailsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateServiceLastAccessedDetailsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGenerateServiceLastAccessedDetailsCommand = deserializeAws_queryGenerateServiceLastAccessedDetailsCommand;
async function deserializeAws_queryGenerateServiceLastAccessedDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetAccessKeyLastUsedCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetAccessKeyLastUsedCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccessKeyLastUsedResponse(data.GetAccessKeyLastUsedResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAccessKeyLastUsedResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetAccessKeyLastUsedCommand = deserializeAws_queryGetAccessKeyLastUsedCommand;
async function deserializeAws_queryGetAccessKeyLastUsedCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetAccountAuthorizationDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetAccountAuthorizationDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccountAuthorizationDetailsResponse(data.GetAccountAuthorizationDetailsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAccountAuthorizationDetailsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetAccountAuthorizationDetailsCommand = deserializeAws_queryGetAccountAuthorizationDetailsCommand;
async function deserializeAws_queryGetAccountAuthorizationDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetAccountPasswordPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetAccountPasswordPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccountPasswordPolicyResponse(data.GetAccountPasswordPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAccountPasswordPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetAccountPasswordPolicyCommand = deserializeAws_queryGetAccountPasswordPolicyCommand;
async function deserializeAws_queryGetAccountPasswordPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetAccountSummaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetAccountSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccountSummaryResponse(data.GetAccountSummaryResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAccountSummaryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetAccountSummaryCommand = deserializeAws_queryGetAccountSummaryCommand;
async function deserializeAws_queryGetAccountSummaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetContextKeysForCustomPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetContextKeysForCustomPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetContextKeysForPolicyResponse(data.GetContextKeysForCustomPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetContextKeysForPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetContextKeysForCustomPolicyCommand = deserializeAws_queryGetContextKeysForCustomPolicyCommand;
async function deserializeAws_queryGetContextKeysForCustomPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetContextKeysForPrincipalPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetContextKeysForPrincipalPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetContextKeysForPolicyResponse(data.GetContextKeysForPrincipalPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetContextKeysForPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetContextKeysForPrincipalPolicyCommand = deserializeAws_queryGetContextKeysForPrincipalPolicyCommand;
async function deserializeAws_queryGetContextKeysForPrincipalPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetCredentialReportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetCredentialReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetCredentialReportResponse(data.GetCredentialReportResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCredentialReportResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetCredentialReportCommand = deserializeAws_queryGetCredentialReportCommand;
async function deserializeAws_queryGetCredentialReportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CredentialReportExpiredException":
        case "com.amazon.webservices.auth.identity.v20100508#CredentialReportExpiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCredentialReportExpiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CredentialReportNotPresentException":
        case "com.amazon.webservices.auth.identity.v20100508#CredentialReportNotPresentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCredentialReportNotPresentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CredentialReportNotReadyException":
        case "com.amazon.webservices.auth.identity.v20100508#CredentialReportNotReadyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryCredentialReportNotReadyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetGroupResponse(data.GetGroupResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetGroupCommand = deserializeAws_queryGetGroupCommand;
async function deserializeAws_queryGetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetGroupPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetGroupPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetGroupPolicyResponse(data.GetGroupPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetGroupPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetGroupPolicyCommand = deserializeAws_queryGetGroupPolicyCommand;
async function deserializeAws_queryGetGroupPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetInstanceProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetInstanceProfileResponse(data.GetInstanceProfileResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstanceProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetInstanceProfileCommand = deserializeAws_queryGetInstanceProfileCommand;
async function deserializeAws_queryGetInstanceProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetLoginProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetLoginProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetLoginProfileResponse(data.GetLoginProfileResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLoginProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetLoginProfileCommand = deserializeAws_queryGetLoginProfileCommand;
async function deserializeAws_queryGetLoginProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetOpenIDConnectProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetOpenIDConnectProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetOpenIDConnectProviderResponse(data.GetOpenIDConnectProviderResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOpenIDConnectProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetOpenIDConnectProviderCommand = deserializeAws_queryGetOpenIDConnectProviderCommand;
async function deserializeAws_queryGetOpenIDConnectProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetOrganizationsAccessReportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetOrganizationsAccessReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetOrganizationsAccessReportResponse(data.GetOrganizationsAccessReportResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOrganizationsAccessReportResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetOrganizationsAccessReportCommand = deserializeAws_queryGetOrganizationsAccessReportCommand;
async function deserializeAws_queryGetOrganizationsAccessReportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetPolicyResponse(data.GetPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetPolicyCommand = deserializeAws_queryGetPolicyCommand;
async function deserializeAws_queryGetPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetPolicyVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetPolicyVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetPolicyVersionResponse(data.GetPolicyVersionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPolicyVersionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetPolicyVersionCommand = deserializeAws_queryGetPolicyVersionCommand;
async function deserializeAws_queryGetPolicyVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetRoleResponse(data.GetRoleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRoleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetRoleCommand = deserializeAws_queryGetRoleCommand;
async function deserializeAws_queryGetRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetRolePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetRolePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetRolePolicyResponse(data.GetRolePolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRolePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetRolePolicyCommand = deserializeAws_queryGetRolePolicyCommand;
async function deserializeAws_queryGetRolePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetSAMLProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetSAMLProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSAMLProviderResponse(data.GetSAMLProviderResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSAMLProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetSAMLProviderCommand = deserializeAws_queryGetSAMLProviderCommand;
async function deserializeAws_queryGetSAMLProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetSSHPublicKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetSSHPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSSHPublicKeyResponse(data.GetSSHPublicKeyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSSHPublicKeyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetSSHPublicKeyCommand = deserializeAws_queryGetSSHPublicKeyCommand;
async function deserializeAws_queryGetSSHPublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnrecognizedPublicKeyEncodingException":
        case "com.amazon.webservices.auth.identity.v20100508#UnrecognizedPublicKeyEncodingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetServerCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetServerCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetServerCertificateResponse(data.GetServerCertificateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetServerCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetServerCertificateCommand = deserializeAws_queryGetServerCertificateCommand;
async function deserializeAws_queryGetServerCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetServiceLastAccessedDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetServiceLastAccessedDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetServiceLastAccessedDetailsResponse(data.GetServiceLastAccessedDetailsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetServiceLastAccessedDetailsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetServiceLastAccessedDetailsCommand = deserializeAws_queryGetServiceLastAccessedDetailsCommand;
async function deserializeAws_queryGetServiceLastAccessedDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesResponse(data.GetServiceLastAccessedDetailsWithEntitiesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetServiceLastAccessedDetailsWithEntitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand;
async function deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetServiceLinkedRoleDeletionStatusResponse(data.GetServiceLinkedRoleDeletionStatusResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetServiceLinkedRoleDeletionStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand;
async function deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetUserResponse(data.GetUserResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetUserCommand = deserializeAws_queryGetUserCommand;
async function deserializeAws_queryGetUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryGetUserPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetUserPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetUserPolicyResponse(data.GetUserPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUserPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetUserPolicyCommand = deserializeAws_queryGetUserPolicyCommand;
async function deserializeAws_queryGetUserPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListAccessKeysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListAccessKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAccessKeysResponse(data.ListAccessKeysResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAccessKeysResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListAccessKeysCommand = deserializeAws_queryListAccessKeysCommand;
async function deserializeAws_queryListAccessKeysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListAccountAliasesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListAccountAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAccountAliasesResponse(data.ListAccountAliasesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAccountAliasesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListAccountAliasesCommand = deserializeAws_queryListAccountAliasesCommand;
async function deserializeAws_queryListAccountAliasesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListAttachedGroupPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListAttachedGroupPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAttachedGroupPoliciesResponse(data.ListAttachedGroupPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAttachedGroupPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListAttachedGroupPoliciesCommand = deserializeAws_queryListAttachedGroupPoliciesCommand;
async function deserializeAws_queryListAttachedGroupPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListAttachedRolePoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListAttachedRolePoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAttachedRolePoliciesResponse(data.ListAttachedRolePoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAttachedRolePoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListAttachedRolePoliciesCommand = deserializeAws_queryListAttachedRolePoliciesCommand;
async function deserializeAws_queryListAttachedRolePoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListAttachedUserPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListAttachedUserPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAttachedUserPoliciesResponse(data.ListAttachedUserPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAttachedUserPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListAttachedUserPoliciesCommand = deserializeAws_queryListAttachedUserPoliciesCommand;
async function deserializeAws_queryListAttachedUserPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListEntitiesForPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListEntitiesForPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListEntitiesForPolicyResponse(data.ListEntitiesForPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEntitiesForPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListEntitiesForPolicyCommand = deserializeAws_queryListEntitiesForPolicyCommand;
async function deserializeAws_queryListEntitiesForPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListGroupPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListGroupPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListGroupPoliciesResponse(data.ListGroupPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGroupPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListGroupPoliciesCommand = deserializeAws_queryListGroupPoliciesCommand;
async function deserializeAws_queryListGroupPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListGroupsResponse(data.ListGroupsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListGroupsCommand = deserializeAws_queryListGroupsCommand;
async function deserializeAws_queryListGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListGroupsForUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListGroupsForUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListGroupsForUserResponse(data.ListGroupsForUserResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGroupsForUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListGroupsForUserCommand = deserializeAws_queryListGroupsForUserCommand;
async function deserializeAws_queryListGroupsForUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListInstanceProfilesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListInstanceProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListInstanceProfilesResponse(data.ListInstanceProfilesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListInstanceProfilesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListInstanceProfilesCommand = deserializeAws_queryListInstanceProfilesCommand;
async function deserializeAws_queryListInstanceProfilesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListInstanceProfilesForRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListInstanceProfilesForRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListInstanceProfilesForRoleResponse(data.ListInstanceProfilesForRoleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListInstanceProfilesForRoleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListInstanceProfilesForRoleCommand = deserializeAws_queryListInstanceProfilesForRoleCommand;
async function deserializeAws_queryListInstanceProfilesForRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListMFADevicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListMFADevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListMFADevicesResponse(data.ListMFADevicesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListMFADevicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListMFADevicesCommand = deserializeAws_queryListMFADevicesCommand;
async function deserializeAws_queryListMFADevicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListOpenIDConnectProvidersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListOpenIDConnectProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListOpenIDConnectProvidersResponse(data.ListOpenIDConnectProvidersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListOpenIDConnectProvidersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListOpenIDConnectProvidersCommand = deserializeAws_queryListOpenIDConnectProvidersCommand;
async function deserializeAws_queryListOpenIDConnectProvidersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPoliciesResponse(data.ListPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListPoliciesCommand = deserializeAws_queryListPoliciesCommand;
async function deserializeAws_queryListPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListPoliciesGrantingServiceAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListPoliciesGrantingServiceAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPoliciesGrantingServiceAccessResponse(data.ListPoliciesGrantingServiceAccessResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPoliciesGrantingServiceAccessResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListPoliciesGrantingServiceAccessCommand = deserializeAws_queryListPoliciesGrantingServiceAccessCommand;
async function deserializeAws_queryListPoliciesGrantingServiceAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListPolicyVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListPolicyVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPolicyVersionsResponse(data.ListPolicyVersionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPolicyVersionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListPolicyVersionsCommand = deserializeAws_queryListPolicyVersionsCommand;
async function deserializeAws_queryListPolicyVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListRolePoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListRolePoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListRolePoliciesResponse(data.ListRolePoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRolePoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListRolePoliciesCommand = deserializeAws_queryListRolePoliciesCommand;
async function deserializeAws_queryListRolePoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListRoleTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListRoleTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListRoleTagsResponse(data.ListRoleTagsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRoleTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListRoleTagsCommand = deserializeAws_queryListRoleTagsCommand;
async function deserializeAws_queryListRoleTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListRolesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListRolesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListRolesResponse(data.ListRolesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRolesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListRolesCommand = deserializeAws_queryListRolesCommand;
async function deserializeAws_queryListRolesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListSAMLProvidersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListSAMLProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSAMLProvidersResponse(data.ListSAMLProvidersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSAMLProvidersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListSAMLProvidersCommand = deserializeAws_queryListSAMLProvidersCommand;
async function deserializeAws_queryListSAMLProvidersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListSSHPublicKeysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListSSHPublicKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSSHPublicKeysResponse(data.ListSSHPublicKeysResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSSHPublicKeysResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListSSHPublicKeysCommand = deserializeAws_queryListSSHPublicKeysCommand;
async function deserializeAws_queryListSSHPublicKeysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListServerCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListServerCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListServerCertificatesResponse(data.ListServerCertificatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListServerCertificatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListServerCertificatesCommand = deserializeAws_queryListServerCertificatesCommand;
async function deserializeAws_queryListServerCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListServiceSpecificCredentialsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListServiceSpecificCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListServiceSpecificCredentialsResponse(data.ListServiceSpecificCredentialsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListServiceSpecificCredentialsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListServiceSpecificCredentialsCommand = deserializeAws_queryListServiceSpecificCredentialsCommand;
async function deserializeAws_queryListServiceSpecificCredentialsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotSupportedException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListSigningCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListSigningCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSigningCertificatesResponse(data.ListSigningCertificatesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSigningCertificatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListSigningCertificatesCommand = deserializeAws_queryListSigningCertificatesCommand;
async function deserializeAws_queryListSigningCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListUserPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListUserPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListUserPoliciesResponse(data.ListUserPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUserPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListUserPoliciesCommand = deserializeAws_queryListUserPoliciesCommand;
async function deserializeAws_queryListUserPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListUserTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListUserTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListUserTagsResponse(data.ListUserTagsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUserTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListUserTagsCommand = deserializeAws_queryListUserTagsCommand;
async function deserializeAws_queryListUserTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListUsersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListUsersResponse(data.ListUsersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUsersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListUsersCommand = deserializeAws_queryListUsersCommand;
async function deserializeAws_queryListUsersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListVirtualMFADevicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListVirtualMFADevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListVirtualMFADevicesResponse(data.ListVirtualMFADevicesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListVirtualMFADevicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListVirtualMFADevicesCommand = deserializeAws_queryListVirtualMFADevicesCommand;
async function deserializeAws_queryListVirtualMFADevicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutGroupPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutGroupPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutGroupPolicyCommand = deserializeAws_queryPutGroupPolicyCommand;
async function deserializeAws_queryPutGroupPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.webservices.auth.identity.v20100508#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutRolePermissionsBoundaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutRolePermissionsBoundaryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutRolePermissionsBoundaryCommand = deserializeAws_queryPutRolePermissionsBoundaryCommand;
async function deserializeAws_queryPutRolePermissionsBoundaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotAttachableException":
        case "com.amazon.webservices.auth.identity.v20100508#PolicyNotAttachableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutRolePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutRolePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutRolePolicyCommand = deserializeAws_queryPutRolePolicyCommand;
async function deserializeAws_queryPutRolePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.webservices.auth.identity.v20100508#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutUserPermissionsBoundaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutUserPermissionsBoundaryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutUserPermissionsBoundaryCommand = deserializeAws_queryPutUserPermissionsBoundaryCommand;
async function deserializeAws_queryPutUserPermissionsBoundaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyNotAttachableException":
        case "com.amazon.webservices.auth.identity.v20100508#PolicyNotAttachableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryPutUserPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPutUserPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryPutUserPolicyCommand = deserializeAws_queryPutUserPolicyCommand;
async function deserializeAws_queryPutUserPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.webservices.auth.identity.v20100508#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand;
async function deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryRemoveRoleFromInstanceProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemoveRoleFromInstanceProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveRoleFromInstanceProfileCommand = deserializeAws_queryRemoveRoleFromInstanceProfileCommand;
async function deserializeAws_queryRemoveRoleFromInstanceProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryRemoveUserFromGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryRemoveUserFromGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryRemoveUserFromGroupCommand = deserializeAws_queryRemoveUserFromGroupCommand;
async function deserializeAws_queryRemoveUserFromGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryResetServiceSpecificCredentialCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryResetServiceSpecificCredentialCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResetServiceSpecificCredentialResponse(data.ResetServiceSpecificCredentialResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResetServiceSpecificCredentialResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryResetServiceSpecificCredentialCommand = deserializeAws_queryResetServiceSpecificCredentialCommand;
async function deserializeAws_queryResetServiceSpecificCredentialCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryResyncMFADeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryResyncMFADeviceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryResyncMFADeviceCommand = deserializeAws_queryResyncMFADeviceCommand;
async function deserializeAws_queryResyncMFADeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAuthenticationCodeException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidAuthenticationCodeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidAuthenticationCodeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetDefaultPolicyVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetDefaultPolicyVersionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetDefaultPolicyVersionCommand = deserializeAws_querySetDefaultPolicyVersionCommand;
async function deserializeAws_querySetDefaultPolicyVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySetSecurityTokenServicePreferencesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetSecurityTokenServicePreferencesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetSecurityTokenServicePreferencesCommand = deserializeAws_querySetSecurityTokenServicePreferencesCommand;
async function deserializeAws_querySetSecurityTokenServicePreferencesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySimulateCustomPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySimulateCustomPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySimulatePolicyResponse(data.SimulateCustomPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SimulatePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySimulateCustomPolicyCommand = deserializeAws_querySimulateCustomPolicyCommand;
async function deserializeAws_querySimulateCustomPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyEvaluationException":
        case "com.amazon.webservices.auth.identity.v20100508#PolicyEvaluationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyEvaluationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_querySimulatePrincipalPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySimulatePrincipalPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySimulatePolicyResponse(data.SimulatePrincipalPolicyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SimulatePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySimulatePrincipalPolicyCommand = deserializeAws_querySimulatePrincipalPolicyCommand;
async function deserializeAws_querySimulatePrincipalPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyEvaluationException":
        case "com.amazon.webservices.auth.identity.v20100508#PolicyEvaluationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPolicyEvaluationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryTagRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryTagRoleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryTagRoleCommand = deserializeAws_queryTagRoleCommand;
async function deserializeAws_queryTagRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.webservices.auth.identity.v20100508#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryTagUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryTagUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryTagUserCommand = deserializeAws_queryTagUserCommand;
async function deserializeAws_queryTagUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.webservices.auth.identity.v20100508#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUntagRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUntagRoleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUntagRoleCommand = deserializeAws_queryUntagRoleCommand;
async function deserializeAws_queryUntagRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.webservices.auth.identity.v20100508#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUntagUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUntagUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUntagUserCommand = deserializeAws_queryUntagUserCommand;
async function deserializeAws_queryUntagUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.webservices.auth.identity.v20100508#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateAccessKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateAccessKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateAccessKeyCommand = deserializeAws_queryUpdateAccessKeyCommand;
async function deserializeAws_queryUpdateAccessKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateAccountPasswordPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateAccountPasswordPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateAccountPasswordPolicyCommand = deserializeAws_queryUpdateAccountPasswordPolicyCommand;
async function deserializeAws_queryUpdateAccountPasswordPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.webservices.auth.identity.v20100508#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateAssumeRolePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateAssumeRolePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateAssumeRolePolicyCommand = deserializeAws_queryUpdateAssumeRolePolicyCommand;
async function deserializeAws_queryUpdateAssumeRolePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.webservices.auth.identity.v20100508#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateGroupCommand = deserializeAws_queryUpdateGroupCommand;
async function deserializeAws_queryUpdateGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateLoginProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateLoginProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateLoginProfileCommand = deserializeAws_queryUpdateLoginProfileCommand;
async function deserializeAws_queryUpdateLoginProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityTemporarilyUnmodifiableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PasswordPolicyViolationException":
        case "com.amazon.webservices.auth.identity.v20100508#PasswordPolicyViolationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand;
async function deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateRoleResponse(data.UpdateRoleResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRoleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateRoleCommand = deserializeAws_queryUpdateRoleCommand;
async function deserializeAws_queryUpdateRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateRoleDescriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateRoleDescriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateRoleDescriptionResponse(data.UpdateRoleDescriptionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRoleDescriptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateRoleDescriptionCommand = deserializeAws_queryUpdateRoleDescriptionCommand;
async function deserializeAws_queryUpdateRoleDescriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnmodifiableEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#UnmodifiableEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateSAMLProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateSAMLProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateSAMLProviderResponse(data.UpdateSAMLProviderResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSAMLProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateSAMLProviderCommand = deserializeAws_queryUpdateSAMLProviderCommand;
async function deserializeAws_queryUpdateSAMLProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateSSHPublicKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateSSHPublicKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateSSHPublicKeyCommand = deserializeAws_queryUpdateSSHPublicKeyCommand;
async function deserializeAws_queryUpdateSSHPublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateServerCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateServerCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateServerCertificateCommand = deserializeAws_queryUpdateServerCertificateCommand;
async function deserializeAws_queryUpdateServerCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateServiceSpecificCredentialCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateServiceSpecificCredentialCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateServiceSpecificCredentialCommand = deserializeAws_queryUpdateServiceSpecificCredentialCommand;
async function deserializeAws_queryUpdateServiceSpecificCredentialCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateSigningCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateSigningCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateSigningCertificateCommand = deserializeAws_queryUpdateSigningCertificateCommand;
async function deserializeAws_queryUpdateSigningCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateUserCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateUserCommand = deserializeAws_queryUpdateUserCommand;
async function deserializeAws_queryUpdateUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazon.webservices.auth.identity.v20100508#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityTemporarilyUnmodifiableException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityTemporarilyUnmodifiableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUploadSSHPublicKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUploadSSHPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUploadSSHPublicKeyResponse(data.UploadSSHPublicKeyResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UploadSSHPublicKeyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUploadSSHPublicKeyCommand = deserializeAws_queryUploadSSHPublicKeyCommand;
async function deserializeAws_queryUploadSSHPublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateSSHPublicKeyException":
        case "com.amazon.webservices.auth.identity.v20100508#DuplicateSSHPublicKeyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateSSHPublicKeyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPublicKeyException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidPublicKeyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidPublicKeyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnrecognizedPublicKeyEncodingException":
        case "com.amazon.webservices.auth.identity.v20100508#UnrecognizedPublicKeyEncodingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUploadServerCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUploadServerCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUploadServerCertificateResponse(data.UploadServerCertificateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UploadServerCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUploadServerCertificateCommand = deserializeAws_queryUploadServerCertificateCommand;
async function deserializeAws_queryUploadServerCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyPairMismatchException":
        case "com.amazon.webservices.auth.identity.v20100508#KeyPairMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKeyPairMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedCertificateException":
        case "com.amazon.webservices.auth.identity.v20100508#MalformedCertificateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedCertificateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUploadSigningCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUploadSigningCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUploadSigningCertificateResponse(data.UploadSigningCertificateResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UploadSigningCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUploadSigningCertificateCommand = deserializeAws_queryUploadSigningCertificateCommand;
async function deserializeAws_queryUploadSigningCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateCertificateException":
        case "com.amazon.webservices.auth.identity.v20100508#DuplicateCertificateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDuplicateCertificateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityAlreadyExistsException":
        case "com.amazon.webservices.auth.identity.v20100508#EntityAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCertificateException":
        case "com.amazon.webservices.auth.identity.v20100508#InvalidCertificateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidCertificateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.webservices.auth.identity.v20100508#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedCertificateException":
        case "com.amazon.webservices.auth.identity.v20100508#MalformedCertificateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryMalformedCertificateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazon.webservices.auth.identity.v20100508#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFailureException":
        case "com.amazon.webservices.auth.identity.v20100508#ServiceFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_queryConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConcurrentModificationException(body.Error, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCredentialReportExpiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCredentialReportExpiredException(body.Error, context);
    const contents = Object.assign({ name: "CredentialReportExpiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCredentialReportNotPresentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCredentialReportNotPresentException(body.Error, context);
    const contents = Object.assign({ name: "CredentialReportNotPresentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryCredentialReportNotReadyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCredentialReportNotReadyException(body.Error, context);
    const contents = Object.assign({ name: "CredentialReportNotReadyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDeleteConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDeleteConflictException(body.Error, context);
    const contents = Object.assign({ name: "DeleteConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDuplicateCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateCertificateException(body.Error, context);
    const contents = Object.assign({ name: "DuplicateCertificateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDuplicateSSHPublicKeyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateSSHPublicKeyException(body.Error, context);
    const contents = Object.assign({ name: "DuplicateSSHPublicKeyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryEntityAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEntityAlreadyExistsException(body.Error, context);
    const contents = Object.assign({ name: "EntityAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEntityTemporarilyUnmodifiableException(body.Error, context);
    const contents = Object.assign({ name: "EntityTemporarilyUnmodifiableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidAuthenticationCodeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidAuthenticationCodeException(body.Error, context);
    const contents = Object.assign({ name: "InvalidAuthenticationCodeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidCertificateException(body.Error, context);
    const contents = Object.assign({ name: "InvalidCertificateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidInputException(body.Error, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidPublicKeyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidPublicKeyException(body.Error, context);
    const contents = Object.assign({ name: "InvalidPublicKeyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidUserTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidUserTypeException(body.Error, context);
    const contents = Object.assign({ name: "InvalidUserTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryKeyPairMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKeyPairMismatchException(body.Error, context);
    const contents = Object.assign({ name: "KeyPairMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryMalformedCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMalformedCertificateException(body.Error, context);
    const contents = Object.assign({ name: "MalformedCertificateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryMalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMalformedPolicyDocumentException(body.Error, context);
    const contents = Object.assign({ name: "MalformedPolicyDocumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryNoSuchEntityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNoSuchEntityException(body.Error, context);
    const contents = Object.assign({ name: "NoSuchEntityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPasswordPolicyViolationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPasswordPolicyViolationException(body.Error, context);
    const contents = Object.assign({ name: "PasswordPolicyViolationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPolicyEvaluationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPolicyEvaluationException(body.Error, context);
    const contents = Object.assign({ name: "PolicyEvaluationException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPolicyNotAttachableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPolicyNotAttachableException(body.Error, context);
    const contents = Object.assign({ name: "PolicyNotAttachableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryReportGenerationLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReportGenerationLimitExceededException(body.Error, context);
    const contents = Object.assign({ name: "ReportGenerationLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryServiceFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryServiceFailureException(body.Error, context);
    const contents = Object.assign({ name: "ServiceFailureException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryServiceNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryServiceNotSupportedException(body.Error, context);
    const contents = Object.assign({ name: "ServiceNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryUnmodifiableEntityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnmodifiableEntityException(body.Error, context);
    const contents = Object.assign({ name: "UnmodifiableEntityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnrecognizedPublicKeyEncodingException(body.Error, context);
    const contents = Object.assign({ name: "UnrecognizedPublicKeyEncodingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryActionNameListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAddClientIDToOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.ClientID !== undefined) {
        entries["ClientID"] = input.ClientID;
    }
    if (input.OpenIDConnectProviderArn !== undefined) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    return entries;
};
const serializeAws_queryAddRoleToInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryAddUserToGroupRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryAttachGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryAttachRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryAttachUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryChangePasswordRequest = (input, context) => {
    const entries = {};
    if (input.NewPassword !== undefined) {
        entries["NewPassword"] = input.NewPassword;
    }
    if (input.OldPassword !== undefined) {
        entries["OldPassword"] = input.OldPassword;
    }
    return entries;
};
const serializeAws_queryContextEntry = (input, context) => {
    const entries = {};
    if (input.ContextKeyName !== undefined) {
        entries["ContextKeyName"] = input.ContextKeyName;
    }
    if (input.ContextKeyType !== undefined) {
        entries["ContextKeyType"] = input.ContextKeyType;
    }
    if (input.ContextKeyValues !== undefined) {
        const memberEntries = serializeAws_queryContextKeyValueListType(input.ContextKeyValues, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ContextKeyValues.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryContextEntryListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryContextEntry(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryContextKeyValueListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCreateAccessKeyRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryCreateAccountAliasRequest = (input, context) => {
    const entries = {};
    if (input.AccountAlias !== undefined) {
        entries["AccountAlias"] = input.AccountAlias;
    }
    return entries;
};
const serializeAws_queryCreateGroupRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.Path !== undefined) {
        entries["Path"] = input.Path;
    }
    return entries;
};
const serializeAws_queryCreateInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.Path !== undefined) {
        entries["Path"] = input.Path;
    }
    return entries;
};
const serializeAws_queryCreateLoginProfileRequest = (input, context) => {
    const entries = {};
    if (input.Password !== undefined) {
        entries["Password"] = input.Password;
    }
    if (input.PasswordResetRequired !== undefined) {
        entries["PasswordResetRequired"] = input.PasswordResetRequired;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryCreateOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.ClientIDList !== undefined) {
        const memberEntries = serializeAws_queryclientIDListType(input.ClientIDList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ClientIDList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ThumbprintList !== undefined) {
        const memberEntries = serializeAws_querythumbprintListType(input.ThumbprintList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ThumbprintList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Url !== undefined) {
        entries["Url"] = input.Url;
    }
    return entries;
};
const serializeAws_queryCreatePolicyRequest = (input, context) => {
    const entries = {};
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.Path !== undefined) {
        entries["Path"] = input.Path;
    }
    if (input.PolicyDocument !== undefined) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryCreatePolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.PolicyDocument !== undefined) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    if (input.SetAsDefault !== undefined) {
        entries["SetAsDefault"] = input.SetAsDefault;
    }
    return entries;
};
const serializeAws_queryCreateRoleRequest = (input, context) => {
    const entries = {};
    if (input.AssumeRolePolicyDocument !== undefined) {
        entries["AssumeRolePolicyDocument"] = input.AssumeRolePolicyDocument;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.MaxSessionDuration !== undefined) {
        entries["MaxSessionDuration"] = input.MaxSessionDuration;
    }
    if (input.Path !== undefined) {
        entries["Path"] = input.Path;
    }
    if (input.PermissionsBoundary !== undefined) {
        entries["PermissionsBoundary"] = input.PermissionsBoundary;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryCreateSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.SAMLMetadataDocument !== undefined) {
        entries["SAMLMetadataDocument"] = input.SAMLMetadataDocument;
    }
    return entries;
};
const serializeAws_queryCreateServiceLinkedRoleRequest = (input, context) => {
    const entries = {};
    if (input.AWSServiceName !== undefined) {
        entries["AWSServiceName"] = input.AWSServiceName;
    }
    if (input.CustomSuffix !== undefined) {
        entries["CustomSuffix"] = input.CustomSuffix;
    }
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    return entries;
};
const serializeAws_queryCreateServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input.ServiceName !== undefined) {
        entries["ServiceName"] = input.ServiceName;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryCreateUserRequest = (input, context) => {
    const entries = {};
    if (input.Path !== undefined) {
        entries["Path"] = input.Path;
    }
    if (input.PermissionsBoundary !== undefined) {
        entries["PermissionsBoundary"] = input.PermissionsBoundary;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryCreateVirtualMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input.Path !== undefined) {
        entries["Path"] = input.Path;
    }
    if (input.VirtualMFADeviceName !== undefined) {
        entries["VirtualMFADeviceName"] = input.VirtualMFADeviceName;
    }
    return entries;
};
const serializeAws_queryDeactivateMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input.SerialNumber !== undefined) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteAccessKeyRequest = (input, context) => {
    const entries = {};
    if (input.AccessKeyId !== undefined) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteAccountAliasRequest = (input, context) => {
    const entries = {};
    if (input.AccountAlias !== undefined) {
        entries["AccountAlias"] = input.AccountAlias;
    }
    return entries;
};
const serializeAws_queryDeleteGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryDeleteGroupRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    return entries;
};
const serializeAws_queryDeleteInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    return entries;
};
const serializeAws_queryDeleteLoginProfileRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.OpenIDConnectProviderArn !== undefined) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    return entries;
};
const serializeAws_queryDeletePolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryDeletePolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.VersionId !== undefined) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
const serializeAws_queryDeleteRolePermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryDeleteRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryDeleteRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryDeleteSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input.SAMLProviderArn !== undefined) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    return entries;
};
const serializeAws_queryDeleteSSHPublicKeyRequest = (input, context) => {
    const entries = {};
    if (input.SSHPublicKeyId !== undefined) {
        entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input.ServerCertificateName !== undefined) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    return entries;
};
const serializeAws_queryDeleteServiceLinkedRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryDeleteServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input.ServiceSpecificCredentialId !== undefined) {
        entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteSigningCertificateRequest = (input, context) => {
    const entries = {};
    if (input.CertificateId !== undefined) {
        entries["CertificateId"] = input.CertificateId;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteUserPermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteUserRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryDeleteVirtualMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input.SerialNumber !== undefined) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    return entries;
};
const serializeAws_queryDetachGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryDetachRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryDetachUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryEnableMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input.AuthenticationCode1 !== undefined) {
        entries["AuthenticationCode1"] = input.AuthenticationCode1;
    }
    if (input.AuthenticationCode2 !== undefined) {
        entries["AuthenticationCode2"] = input.AuthenticationCode2;
    }
    if (input.SerialNumber !== undefined) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryGenerateOrganizationsAccessReportRequest = (input, context) => {
    const entries = {};
    if (input.EntityPath !== undefined) {
        entries["EntityPath"] = input.EntityPath;
    }
    if (input.OrganizationsPolicyId !== undefined) {
        entries["OrganizationsPolicyId"] = input.OrganizationsPolicyId;
    }
    return entries;
};
const serializeAws_queryGenerateServiceLastAccessedDetailsRequest = (input, context) => {
    const entries = {};
    if (input.Arn !== undefined) {
        entries["Arn"] = input.Arn;
    }
    return entries;
};
const serializeAws_queryGetAccessKeyLastUsedRequest = (input, context) => {
    const entries = {};
    if (input.AccessKeyId !== undefined) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    return entries;
};
const serializeAws_queryGetAccountAuthorizationDetailsRequest = (input, context) => {
    const entries = {};
    if (input.Filter !== undefined) {
        const memberEntries = serializeAws_queryentityListType(input.Filter, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Filter.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryGetContextKeysForCustomPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyInputList !== undefined) {
        const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryGetContextKeysForPrincipalPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyInputList !== undefined) {
        const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PolicySourceArn !== undefined) {
        entries["PolicySourceArn"] = input.PolicySourceArn;
    }
    return entries;
};
const serializeAws_queryGetGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryGetGroupRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryGetInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    return entries;
};
const serializeAws_queryGetLoginProfileRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryGetOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.OpenIDConnectProviderArn !== undefined) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    return entries;
};
const serializeAws_queryGetOrganizationsAccessReportRequest = (input, context) => {
    const entries = {};
    if (input.JobId !== undefined) {
        entries["JobId"] = input.JobId;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.SortKey !== undefined) {
        entries["SortKey"] = input.SortKey;
    }
    return entries;
};
const serializeAws_queryGetPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryGetPolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.VersionId !== undefined) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
const serializeAws_queryGetRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryGetRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryGetSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input.SAMLProviderArn !== undefined) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    return entries;
};
const serializeAws_queryGetSSHPublicKeyRequest = (input, context) => {
    const entries = {};
    if (input.Encoding !== undefined) {
        entries["Encoding"] = input.Encoding;
    }
    if (input.SSHPublicKeyId !== undefined) {
        entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryGetServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input.ServerCertificateName !== undefined) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    return entries;
};
const serializeAws_queryGetServiceLastAccessedDetailsRequest = (input, context) => {
    const entries = {};
    if (input.JobId !== undefined) {
        entries["JobId"] = input.JobId;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesRequest = (input, context) => {
    const entries = {};
    if (input.JobId !== undefined) {
        entries["JobId"] = input.JobId;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.ServiceNamespace !== undefined) {
        entries["ServiceNamespace"] = input.ServiceNamespace;
    }
    return entries;
};
const serializeAws_queryGetServiceLinkedRoleDeletionStatusRequest = (input, context) => {
    const entries = {};
    if (input.DeletionTaskId !== undefined) {
        entries["DeletionTaskId"] = input.DeletionTaskId;
    }
    return entries;
};
const serializeAws_queryGetUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryGetUserRequest = (input, context) => {
    const entries = {};
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListAccessKeysRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListAccountAliasesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryListAttachedGroupPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PathPrefix !== undefined) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    return entries;
};
const serializeAws_queryListAttachedRolePoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PathPrefix !== undefined) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryListAttachedUserPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PathPrefix !== undefined) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListEntitiesForPolicyRequest = (input, context) => {
    const entries = {};
    if (input.EntityFilter !== undefined) {
        entries["EntityFilter"] = input.EntityFilter;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PathPrefix !== undefined) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.PolicyUsageFilter !== undefined) {
        entries["PolicyUsageFilter"] = input.PolicyUsageFilter;
    }
    return entries;
};
const serializeAws_queryListGroupPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryListGroupsForUserRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListGroupsRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PathPrefix !== undefined) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    return entries;
};
const serializeAws_queryListInstanceProfilesForRoleRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryListInstanceProfilesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PathPrefix !== undefined) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    return entries;
};
const serializeAws_queryListMFADevicesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListOpenIDConnectProvidersRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryListPoliciesGrantingServiceAccessRequest = (input, context) => {
    const entries = {};
    if (input.Arn !== undefined) {
        entries["Arn"] = input.Arn;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.ServiceNamespaces !== undefined) {
        const memberEntries = serializeAws_queryserviceNamespaceListType(input.ServiceNamespaces, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ServiceNamespaces.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryListPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.OnlyAttached !== undefined) {
        entries["OnlyAttached"] = input.OnlyAttached;
    }
    if (input.PathPrefix !== undefined) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    if (input.PolicyUsageFilter !== undefined) {
        entries["PolicyUsageFilter"] = input.PolicyUsageFilter;
    }
    if (input.Scope !== undefined) {
        entries["Scope"] = input.Scope;
    }
    return entries;
};
const serializeAws_queryListPolicyVersionsRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    return entries;
};
const serializeAws_queryListRolePoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryListRoleTagsRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryListRolesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PathPrefix !== undefined) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    return entries;
};
const serializeAws_queryListSAMLProvidersRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryListSSHPublicKeysRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListServerCertificatesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PathPrefix !== undefined) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    return entries;
};
const serializeAws_queryListServiceSpecificCredentialsRequest = (input, context) => {
    const entries = {};
    if (input.ServiceName !== undefined) {
        entries["ServiceName"] = input.ServiceName;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListSigningCertificatesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListUserPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListUserTagsRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryListUsersRequest = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PathPrefix !== undefined) {
        entries["PathPrefix"] = input.PathPrefix;
    }
    return entries;
};
const serializeAws_queryListVirtualMFADevicesRequest = (input, context) => {
    const entries = {};
    if (input.AssignmentStatus !== undefined) {
        entries["AssignmentStatus"] = input.AssignmentStatus;
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryPutGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.PolicyDocument !== undefined) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryPutRolePermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input.PermissionsBoundary !== undefined) {
        entries["PermissionsBoundary"] = input.PermissionsBoundary;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryPutRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyDocument !== undefined) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryPutUserPermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input.PermissionsBoundary !== undefined) {
        entries["PermissionsBoundary"] = input.PermissionsBoundary;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryPutUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyDocument !== undefined) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    if (input.PolicyName !== undefined) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryRemoveClientIDFromOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input.ClientID !== undefined) {
        entries["ClientID"] = input.ClientID;
    }
    if (input.OpenIDConnectProviderArn !== undefined) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    return entries;
};
const serializeAws_queryRemoveRoleFromInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input.InstanceProfileName !== undefined) {
        entries["InstanceProfileName"] = input.InstanceProfileName;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryRemoveUserFromGroupRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryResetServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input.ServiceSpecificCredentialId !== undefined) {
        entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryResourceNameListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryResyncMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input.AuthenticationCode1 !== undefined) {
        entries["AuthenticationCode1"] = input.AuthenticationCode1;
    }
    if (input.AuthenticationCode2 !== undefined) {
        entries["AuthenticationCode2"] = input.AuthenticationCode2;
    }
    if (input.SerialNumber !== undefined) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_querySetDefaultPolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input.PolicyArn !== undefined) {
        entries["PolicyArn"] = input.PolicyArn;
    }
    if (input.VersionId !== undefined) {
        entries["VersionId"] = input.VersionId;
    }
    return entries;
};
const serializeAws_querySetSecurityTokenServicePreferencesRequest = (input, context) => {
    const entries = {};
    if (input.GlobalEndpointTokenVersion !== undefined) {
        entries["GlobalEndpointTokenVersion"] = input.GlobalEndpointTokenVersion;
    }
    return entries;
};
const serializeAws_querySimulateCustomPolicyRequest = (input, context) => {
    const entries = {};
    if (input.ActionNames !== undefined) {
        const memberEntries = serializeAws_queryActionNameListType(input.ActionNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ActionNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.CallerArn !== undefined) {
        entries["CallerArn"] = input.CallerArn;
    }
    if (input.ContextEntries !== undefined) {
        const memberEntries = serializeAws_queryContextEntryListType(input.ContextEntries, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ContextEntries.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PolicyInputList !== undefined) {
        const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResourceArns !== undefined) {
        const memberEntries = serializeAws_queryResourceNameListType(input.ResourceArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResourceHandlingOption !== undefined) {
        entries["ResourceHandlingOption"] = input.ResourceHandlingOption;
    }
    if (input.ResourceOwner !== undefined) {
        entries["ResourceOwner"] = input.ResourceOwner;
    }
    if (input.ResourcePolicy !== undefined) {
        entries["ResourcePolicy"] = input.ResourcePolicy;
    }
    return entries;
};
const serializeAws_querySimulatePrincipalPolicyRequest = (input, context) => {
    const entries = {};
    if (input.ActionNames !== undefined) {
        const memberEntries = serializeAws_queryActionNameListType(input.ActionNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ActionNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.CallerArn !== undefined) {
        entries["CallerArn"] = input.CallerArn;
    }
    if (input.ContextEntries !== undefined) {
        const memberEntries = serializeAws_queryContextEntryListType(input.ContextEntries, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ContextEntries.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Marker !== undefined) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxItems !== undefined) {
        entries["MaxItems"] = input.MaxItems;
    }
    if (input.PolicyInputList !== undefined) {
        const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PolicySourceArn !== undefined) {
        entries["PolicySourceArn"] = input.PolicySourceArn;
    }
    if (input.ResourceArns !== undefined) {
        const memberEntries = serializeAws_queryResourceNameListType(input.ResourceArns, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ResourceArns.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ResourceHandlingOption !== undefined) {
        entries["ResourceHandlingOption"] = input.ResourceHandlingOption;
    }
    if (input.ResourceOwner !== undefined) {
        entries["ResourceOwner"] = input.ResourceOwner;
    }
    if (input.ResourcePolicy !== undefined) {
        entries["ResourcePolicy"] = input.ResourcePolicy;
    }
    return entries;
};
const serializeAws_querySimulationPolicyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTagRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryTagUserRequest = (input, context) => {
    const entries = {};
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryUntagRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryUntagUserRequest = (input, context) => {
    const entries = {};
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryUpdateAccessKeyRequest = (input, context) => {
    const entries = {};
    if (input.AccessKeyId !== undefined) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    if (input.Status !== undefined) {
        entries["Status"] = input.Status;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryUpdateAccountPasswordPolicyRequest = (input, context) => {
    const entries = {};
    if (input.AllowUsersToChangePassword !== undefined) {
        entries["AllowUsersToChangePassword"] = input.AllowUsersToChangePassword;
    }
    if (input.HardExpiry !== undefined) {
        entries["HardExpiry"] = input.HardExpiry;
    }
    if (input.MaxPasswordAge !== undefined) {
        entries["MaxPasswordAge"] = input.MaxPasswordAge;
    }
    if (input.MinimumPasswordLength !== undefined) {
        entries["MinimumPasswordLength"] = input.MinimumPasswordLength;
    }
    if (input.PasswordReusePrevention !== undefined) {
        entries["PasswordReusePrevention"] = input.PasswordReusePrevention;
    }
    if (input.RequireLowercaseCharacters !== undefined) {
        entries["RequireLowercaseCharacters"] = input.RequireLowercaseCharacters;
    }
    if (input.RequireNumbers !== undefined) {
        entries["RequireNumbers"] = input.RequireNumbers;
    }
    if (input.RequireSymbols !== undefined) {
        entries["RequireSymbols"] = input.RequireSymbols;
    }
    if (input.RequireUppercaseCharacters !== undefined) {
        entries["RequireUppercaseCharacters"] = input.RequireUppercaseCharacters;
    }
    return entries;
};
const serializeAws_queryUpdateAssumeRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input.PolicyDocument !== undefined) {
        entries["PolicyDocument"] = input.PolicyDocument;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryUpdateGroupRequest = (input, context) => {
    const entries = {};
    if (input.GroupName !== undefined) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.NewGroupName !== undefined) {
        entries["NewGroupName"] = input.NewGroupName;
    }
    if (input.NewPath !== undefined) {
        entries["NewPath"] = input.NewPath;
    }
    return entries;
};
const serializeAws_queryUpdateLoginProfileRequest = (input, context) => {
    const entries = {};
    if (input.Password !== undefined) {
        entries["Password"] = input.Password;
    }
    if (input.PasswordResetRequired !== undefined) {
        entries["PasswordResetRequired"] = input.PasswordResetRequired;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryUpdateOpenIDConnectProviderThumbprintRequest = (input, context) => {
    const entries = {};
    if (input.OpenIDConnectProviderArn !== undefined) {
        entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
    }
    if (input.ThumbprintList !== undefined) {
        const memberEntries = serializeAws_querythumbprintListType(input.ThumbprintList, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ThumbprintList.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryUpdateRoleDescriptionRequest = (input, context) => {
    const entries = {};
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryUpdateRoleRequest = (input, context) => {
    const entries = {};
    if (input.Description !== undefined) {
        entries["Description"] = input.Description;
    }
    if (input.MaxSessionDuration !== undefined) {
        entries["MaxSessionDuration"] = input.MaxSessionDuration;
    }
    if (input.RoleName !== undefined) {
        entries["RoleName"] = input.RoleName;
    }
    return entries;
};
const serializeAws_queryUpdateSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input.SAMLMetadataDocument !== undefined) {
        entries["SAMLMetadataDocument"] = input.SAMLMetadataDocument;
    }
    if (input.SAMLProviderArn !== undefined) {
        entries["SAMLProviderArn"] = input.SAMLProviderArn;
    }
    return entries;
};
const serializeAws_queryUpdateSSHPublicKeyRequest = (input, context) => {
    const entries = {};
    if (input.SSHPublicKeyId !== undefined) {
        entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
    }
    if (input.Status !== undefined) {
        entries["Status"] = input.Status;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryUpdateServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input.NewPath !== undefined) {
        entries["NewPath"] = input.NewPath;
    }
    if (input.NewServerCertificateName !== undefined) {
        entries["NewServerCertificateName"] = input.NewServerCertificateName;
    }
    if (input.ServerCertificateName !== undefined) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    return entries;
};
const serializeAws_queryUpdateServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input.ServiceSpecificCredentialId !== undefined) {
        entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
    }
    if (input.Status !== undefined) {
        entries["Status"] = input.Status;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryUpdateSigningCertificateRequest = (input, context) => {
    const entries = {};
    if (input.CertificateId !== undefined) {
        entries["CertificateId"] = input.CertificateId;
    }
    if (input.Status !== undefined) {
        entries["Status"] = input.Status;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryUpdateUserRequest = (input, context) => {
    const entries = {};
    if (input.NewPath !== undefined) {
        entries["NewPath"] = input.NewPath;
    }
    if (input.NewUserName !== undefined) {
        entries["NewUserName"] = input.NewUserName;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryUploadSSHPublicKeyRequest = (input, context) => {
    const entries = {};
    if (input.SSHPublicKeyBody !== undefined) {
        entries["SSHPublicKeyBody"] = input.SSHPublicKeyBody;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryUploadServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input.CertificateBody !== undefined) {
        entries["CertificateBody"] = input.CertificateBody;
    }
    if (input.CertificateChain !== undefined) {
        entries["CertificateChain"] = input.CertificateChain;
    }
    if (input.Path !== undefined) {
        entries["Path"] = input.Path;
    }
    if (input.PrivateKey !== undefined) {
        entries["PrivateKey"] = input.PrivateKey;
    }
    if (input.ServerCertificateName !== undefined) {
        entries["ServerCertificateName"] = input.ServerCertificateName;
    }
    return entries;
};
const serializeAws_queryUploadSigningCertificateRequest = (input, context) => {
    const entries = {};
    if (input.CertificateBody !== undefined) {
        entries["CertificateBody"] = input.CertificateBody;
    }
    if (input.UserName !== undefined) {
        entries["UserName"] = input.UserName;
    }
    return entries;
};
const serializeAws_queryclientIDListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryentityListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryserviceNamespaceListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querytagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querytagListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_querythumbprintListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const deserializeAws_queryAccessDetail = (output, context) => {
    let contents = {
        __type: "AccessDetail",
        EntityPath: undefined,
        LastAuthenticatedTime: undefined,
        Region: undefined,
        ServiceName: undefined,
        ServiceNamespace: undefined,
        TotalAuthenticatedEntities: undefined
    };
    if (output["EntityPath"] !== undefined) {
        contents.EntityPath = output["EntityPath"];
    }
    if (output["LastAuthenticatedTime"] !== undefined) {
        contents.LastAuthenticatedTime = new Date(output["LastAuthenticatedTime"]);
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["ServiceName"] !== undefined) {
        contents.ServiceName = output["ServiceName"];
    }
    if (output["ServiceNamespace"] !== undefined) {
        contents.ServiceNamespace = output["ServiceNamespace"];
    }
    if (output["TotalAuthenticatedEntities"] !== undefined) {
        contents.TotalAuthenticatedEntities = parseInt(output["TotalAuthenticatedEntities"]);
    }
    return contents;
};
const deserializeAws_queryAccessDetails = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAccessDetail(entry, context));
    });
    return contents;
};
const deserializeAws_queryAccessKey = (output, context) => {
    let contents = {
        __type: "AccessKey",
        AccessKeyId: undefined,
        CreateDate: undefined,
        SecretAccessKey: undefined,
        Status: undefined,
        UserName: undefined
    };
    if (output["AccessKeyId"] !== undefined) {
        contents.AccessKeyId = output["AccessKeyId"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["SecretAccessKey"] !== undefined) {
        contents.SecretAccessKey = output["SecretAccessKey"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryAccessKeyLastUsed = (output, context) => {
    let contents = {
        __type: "AccessKeyLastUsed",
        LastUsedDate: undefined,
        Region: undefined,
        ServiceName: undefined
    };
    if (output["LastUsedDate"] !== undefined) {
        contents.LastUsedDate = new Date(output["LastUsedDate"]);
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["ServiceName"] !== undefined) {
        contents.ServiceName = output["ServiceName"];
    }
    return contents;
};
const deserializeAws_queryAccessKeyMetadata = (output, context) => {
    let contents = {
        __type: "AccessKeyMetadata",
        AccessKeyId: undefined,
        CreateDate: undefined,
        Status: undefined,
        UserName: undefined
    };
    if (output["AccessKeyId"] !== undefined) {
        contents.AccessKeyId = output["AccessKeyId"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryArnListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryAttachedPermissionsBoundary = (output, context) => {
    let contents = {
        __type: "AttachedPermissionsBoundary",
        PermissionsBoundaryArn: undefined,
        PermissionsBoundaryType: undefined
    };
    if (output["PermissionsBoundaryArn"] !== undefined) {
        contents.PermissionsBoundaryArn = output["PermissionsBoundaryArn"];
    }
    if (output["PermissionsBoundaryType"] !== undefined) {
        contents.PermissionsBoundaryType = output["PermissionsBoundaryType"];
    }
    return contents;
};
const deserializeAws_queryAttachedPolicy = (output, context) => {
    let contents = {
        __type: "AttachedPolicy",
        PolicyArn: undefined,
        PolicyName: undefined
    };
    if (output["PolicyArn"] !== undefined) {
        contents.PolicyArn = output["PolicyArn"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    return contents;
};
const deserializeAws_queryConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryContextKeyNamesResultListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryCreateAccessKeyResponse = (output, context) => {
    let contents = {
        __type: "CreateAccessKeyResponse",
        AccessKey: undefined
    };
    if (output["AccessKey"] !== undefined) {
        contents.AccessKey = deserializeAws_queryAccessKey(output["AccessKey"], context);
    }
    return contents;
};
const deserializeAws_queryCreateGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateGroupResponse",
        Group: undefined
    };
    if (output["Group"] !== undefined) {
        contents.Group = deserializeAws_queryGroup(output["Group"], context);
    }
    return contents;
};
const deserializeAws_queryCreateInstanceProfileResponse = (output, context) => {
    let contents = {
        __type: "CreateInstanceProfileResponse",
        InstanceProfile: undefined
    };
    if (output["InstanceProfile"] !== undefined) {
        contents.InstanceProfile = deserializeAws_queryInstanceProfile(output["InstanceProfile"], context);
    }
    return contents;
};
const deserializeAws_queryCreateLoginProfileResponse = (output, context) => {
    let contents = {
        __type: "CreateLoginProfileResponse",
        LoginProfile: undefined
    };
    if (output["LoginProfile"] !== undefined) {
        contents.LoginProfile = deserializeAws_queryLoginProfile(output["LoginProfile"], context);
    }
    return contents;
};
const deserializeAws_queryCreateOpenIDConnectProviderResponse = (output, context) => {
    let contents = {
        __type: "CreateOpenIDConnectProviderResponse",
        OpenIDConnectProviderArn: undefined
    };
    if (output["OpenIDConnectProviderArn"] !== undefined) {
        contents.OpenIDConnectProviderArn = output["OpenIDConnectProviderArn"];
    }
    return contents;
};
const deserializeAws_queryCreatePolicyResponse = (output, context) => {
    let contents = {
        __type: "CreatePolicyResponse",
        Policy: undefined
    };
    if (output["Policy"] !== undefined) {
        contents.Policy = deserializeAws_queryPolicy(output["Policy"], context);
    }
    return contents;
};
const deserializeAws_queryCreatePolicyVersionResponse = (output, context) => {
    let contents = {
        __type: "CreatePolicyVersionResponse",
        PolicyVersion: undefined
    };
    if (output["PolicyVersion"] !== undefined) {
        contents.PolicyVersion = deserializeAws_queryPolicyVersion(output["PolicyVersion"], context);
    }
    return contents;
};
const deserializeAws_queryCreateRoleResponse = (output, context) => {
    let contents = {
        __type: "CreateRoleResponse",
        Role: undefined
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
const deserializeAws_queryCreateSAMLProviderResponse = (output, context) => {
    let contents = {
        __type: "CreateSAMLProviderResponse",
        SAMLProviderArn: undefined
    };
    if (output["SAMLProviderArn"] !== undefined) {
        contents.SAMLProviderArn = output["SAMLProviderArn"];
    }
    return contents;
};
const deserializeAws_queryCreateServiceLinkedRoleResponse = (output, context) => {
    let contents = {
        __type: "CreateServiceLinkedRoleResponse",
        Role: undefined
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
const deserializeAws_queryCreateServiceSpecificCredentialResponse = (output, context) => {
    let contents = {
        __type: "CreateServiceSpecificCredentialResponse",
        ServiceSpecificCredential: undefined
    };
    if (output["ServiceSpecificCredential"] !== undefined) {
        contents.ServiceSpecificCredential = deserializeAws_queryServiceSpecificCredential(output["ServiceSpecificCredential"], context);
    }
    return contents;
};
const deserializeAws_queryCreateUserResponse = (output, context) => {
    let contents = {
        __type: "CreateUserResponse",
        User: undefined
    };
    if (output["User"] !== undefined) {
        contents.User = deserializeAws_queryUser(output["User"], context);
    }
    return contents;
};
const deserializeAws_queryCreateVirtualMFADeviceResponse = (output, context) => {
    let contents = {
        __type: "CreateVirtualMFADeviceResponse",
        VirtualMFADevice: undefined
    };
    if (output["VirtualMFADevice"] !== undefined) {
        contents.VirtualMFADevice = deserializeAws_queryVirtualMFADevice(output["VirtualMFADevice"], context);
    }
    return contents;
};
const deserializeAws_queryCredentialReportExpiredException = (output, context) => {
    let contents = {
        __type: "CredentialReportExpiredException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCredentialReportNotPresentException = (output, context) => {
    let contents = {
        __type: "CredentialReportNotPresentException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCredentialReportNotReadyException = (output, context) => {
    let contents = {
        __type: "CredentialReportNotReadyException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDeleteConflictException = (output, context) => {
    let contents = {
        __type: "DeleteConflictException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDeleteServiceLinkedRoleResponse = (output, context) => {
    let contents = {
        __type: "DeleteServiceLinkedRoleResponse",
        DeletionTaskId: undefined
    };
    if (output["DeletionTaskId"] !== undefined) {
        contents.DeletionTaskId = output["DeletionTaskId"];
    }
    return contents;
};
const deserializeAws_queryDeletionTaskFailureReasonType = (output, context) => {
    let contents = {
        __type: "DeletionTaskFailureReasonType",
        Reason: undefined,
        RoleUsageList: undefined
    };
    if (output["Reason"] !== undefined) {
        contents.Reason = output["Reason"];
    }
    if (output.RoleUsageList === "") {
        contents.RoleUsageList = [];
    }
    if (output["RoleUsageList"] !== undefined &&
        output["RoleUsageList"]["member"] !== undefined) {
        const wrappedItem = output["RoleUsageList"]["member"] instanceof Array
            ? output["RoleUsageList"]["member"]
            : [output["RoleUsageList"]["member"]];
        contents.RoleUsageList = deserializeAws_queryRoleUsageListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDuplicateCertificateException = (output, context) => {
    let contents = {
        __type: "DuplicateCertificateException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDuplicateSSHPublicKeyException = (output, context) => {
    let contents = {
        __type: "DuplicateSSHPublicKeyException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEntityAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "EntityAlreadyExistsException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEntityDetails = (output, context) => {
    let contents = {
        __type: "EntityDetails",
        EntityInfo: undefined,
        LastAuthenticated: undefined
    };
    if (output["EntityInfo"] !== undefined) {
        contents.EntityInfo = deserializeAws_queryEntityInfo(output["EntityInfo"], context);
    }
    if (output["LastAuthenticated"] !== undefined) {
        contents.LastAuthenticated = new Date(output["LastAuthenticated"]);
    }
    return contents;
};
const deserializeAws_queryEntityInfo = (output, context) => {
    let contents = {
        __type: "EntityInfo",
        Arn: undefined,
        Id: undefined,
        Name: undefined,
        Path: undefined,
        Type: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    return contents;
};
const deserializeAws_queryEntityTemporarilyUnmodifiableException = (output, context) => {
    let contents = {
        __type: "EntityTemporarilyUnmodifiableException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryErrorDetails = (output, context) => {
    let contents = {
        __type: "ErrorDetails",
        Code: undefined,
        Message: undefined
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryEvalDecisionDetailsType = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = pair["value"];
    });
    return mapParams;
};
const deserializeAws_queryEvaluationResult = (output, context) => {
    let contents = {
        __type: "EvaluationResult",
        EvalActionName: undefined,
        EvalDecision: undefined,
        EvalDecisionDetails: undefined,
        EvalResourceName: undefined,
        MatchedStatements: undefined,
        MissingContextValues: undefined,
        OrganizationsDecisionDetail: undefined,
        ResourceSpecificResults: undefined
    };
    if (output["EvalActionName"] !== undefined) {
        contents.EvalActionName = output["EvalActionName"];
    }
    if (output["EvalDecision"] !== undefined) {
        contents.EvalDecision = output["EvalDecision"];
    }
    if (output.EvalDecisionDetails === "") {
        contents.EvalDecisionDetails = {};
    }
    if (output["EvalDecisionDetails"] !== undefined &&
        output["EvalDecisionDetails"]["entry"] !== undefined) {
        const wrappedItem = output["EvalDecisionDetails"]["entry"] instanceof Array
            ? output["EvalDecisionDetails"]["entry"]
            : [output["EvalDecisionDetails"]["entry"]];
        contents.EvalDecisionDetails = deserializeAws_queryEvalDecisionDetailsType(wrappedItem, context);
    }
    if (output["EvalResourceName"] !== undefined) {
        contents.EvalResourceName = output["EvalResourceName"];
    }
    if (output.MatchedStatements === "") {
        contents.MatchedStatements = [];
    }
    if (output["MatchedStatements"] !== undefined &&
        output["MatchedStatements"]["member"] !== undefined) {
        const wrappedItem = output["MatchedStatements"]["member"] instanceof Array
            ? output["MatchedStatements"]["member"]
            : [output["MatchedStatements"]["member"]];
        contents.MatchedStatements = deserializeAws_queryStatementListType(wrappedItem, context);
    }
    if (output.MissingContextValues === "") {
        contents.MissingContextValues = [];
    }
    if (output["MissingContextValues"] !== undefined &&
        output["MissingContextValues"]["member"] !== undefined) {
        const wrappedItem = output["MissingContextValues"]["member"] instanceof Array
            ? output["MissingContextValues"]["member"]
            : [output["MissingContextValues"]["member"]];
        contents.MissingContextValues = deserializeAws_queryContextKeyNamesResultListType(wrappedItem, context);
    }
    if (output["OrganizationsDecisionDetail"] !== undefined) {
        contents.OrganizationsDecisionDetail = deserializeAws_queryOrganizationsDecisionDetail(output["OrganizationsDecisionDetail"], context);
    }
    if (output.ResourceSpecificResults === "") {
        contents.ResourceSpecificResults = [];
    }
    if (output["ResourceSpecificResults"] !== undefined &&
        output["ResourceSpecificResults"]["member"] !== undefined) {
        const wrappedItem = output["ResourceSpecificResults"]["member"] instanceof Array
            ? output["ResourceSpecificResults"]["member"]
            : [output["ResourceSpecificResults"]["member"]];
        contents.ResourceSpecificResults = deserializeAws_queryResourceSpecificResultListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryEvaluationResultsListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEvaluationResult(entry, context));
    });
    return contents;
};
const deserializeAws_queryGenerateCredentialReportResponse = (output, context) => {
    let contents = {
        __type: "GenerateCredentialReportResponse",
        Description: undefined,
        State: undefined
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    return contents;
};
const deserializeAws_queryGenerateOrganizationsAccessReportResponse = (output, context) => {
    let contents = {
        __type: "GenerateOrganizationsAccessReportResponse",
        JobId: undefined
    };
    if (output["JobId"] !== undefined) {
        contents.JobId = output["JobId"];
    }
    return contents;
};
const deserializeAws_queryGenerateServiceLastAccessedDetailsResponse = (output, context) => {
    let contents = {
        __type: "GenerateServiceLastAccessedDetailsResponse",
        JobId: undefined
    };
    if (output["JobId"] !== undefined) {
        contents.JobId = output["JobId"];
    }
    return contents;
};
const deserializeAws_queryGetAccessKeyLastUsedResponse = (output, context) => {
    let contents = {
        __type: "GetAccessKeyLastUsedResponse",
        AccessKeyLastUsed: undefined,
        UserName: undefined
    };
    if (output["AccessKeyLastUsed"] !== undefined) {
        contents.AccessKeyLastUsed = deserializeAws_queryAccessKeyLastUsed(output["AccessKeyLastUsed"], context);
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryGetAccountAuthorizationDetailsResponse = (output, context) => {
    let contents = {
        __type: "GetAccountAuthorizationDetailsResponse",
        GroupDetailList: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        Policies: undefined,
        RoleDetailList: undefined,
        UserDetailList: undefined
    };
    if (output.GroupDetailList === "") {
        contents.GroupDetailList = [];
    }
    if (output["GroupDetailList"] !== undefined &&
        output["GroupDetailList"]["member"] !== undefined) {
        const wrappedItem = output["GroupDetailList"]["member"] instanceof Array
            ? output["GroupDetailList"]["member"]
            : [output["GroupDetailList"]["member"]];
        contents.GroupDetailList = deserializeAws_querygroupDetailListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Policies === "") {
        contents.Policies = [];
    }
    if (output["Policies"] !== undefined &&
        output["Policies"]["member"] !== undefined) {
        const wrappedItem = output["Policies"]["member"] instanceof Array
            ? output["Policies"]["member"]
            : [output["Policies"]["member"]];
        contents.Policies = deserializeAws_queryManagedPolicyDetailListType(wrappedItem, context);
    }
    if (output.RoleDetailList === "") {
        contents.RoleDetailList = [];
    }
    if (output["RoleDetailList"] !== undefined &&
        output["RoleDetailList"]["member"] !== undefined) {
        const wrappedItem = output["RoleDetailList"]["member"] instanceof Array
            ? output["RoleDetailList"]["member"]
            : [output["RoleDetailList"]["member"]];
        contents.RoleDetailList = deserializeAws_queryroleDetailListType(wrappedItem, context);
    }
    if (output.UserDetailList === "") {
        contents.UserDetailList = [];
    }
    if (output["UserDetailList"] !== undefined &&
        output["UserDetailList"]["member"] !== undefined) {
        const wrappedItem = output["UserDetailList"]["member"] instanceof Array
            ? output["UserDetailList"]["member"]
            : [output["UserDetailList"]["member"]];
        contents.UserDetailList = deserializeAws_queryuserDetailListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetAccountPasswordPolicyResponse = (output, context) => {
    let contents = {
        __type: "GetAccountPasswordPolicyResponse",
        PasswordPolicy: undefined
    };
    if (output["PasswordPolicy"] !== undefined) {
        contents.PasswordPolicy = deserializeAws_queryPasswordPolicy(output["PasswordPolicy"], context);
    }
    return contents;
};
const deserializeAws_queryGetAccountSummaryResponse = (output, context) => {
    let contents = {
        __type: "GetAccountSummaryResponse",
        SummaryMap: undefined
    };
    if (output.SummaryMap === "") {
        contents.SummaryMap = {};
    }
    if (output["SummaryMap"] !== undefined &&
        output["SummaryMap"]["entry"] !== undefined) {
        const wrappedItem = output["SummaryMap"]["entry"] instanceof Array
            ? output["SummaryMap"]["entry"]
            : [output["SummaryMap"]["entry"]];
        contents.SummaryMap = deserializeAws_querysummaryMapType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetContextKeysForPolicyResponse = (output, context) => {
    let contents = {
        __type: "GetContextKeysForPolicyResponse",
        ContextKeyNames: undefined
    };
    if (output.ContextKeyNames === "") {
        contents.ContextKeyNames = [];
    }
    if (output["ContextKeyNames"] !== undefined &&
        output["ContextKeyNames"]["member"] !== undefined) {
        const wrappedItem = output["ContextKeyNames"]["member"] instanceof Array
            ? output["ContextKeyNames"]["member"]
            : [output["ContextKeyNames"]["member"]];
        contents.ContextKeyNames = deserializeAws_queryContextKeyNamesResultListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetCredentialReportResponse = (output, context) => {
    let contents = {
        __type: "GetCredentialReportResponse",
        Content: undefined,
        GeneratedTime: undefined,
        ReportFormat: undefined
    };
    if (output["Content"] !== undefined) {
        contents.Content = context.base64Decoder(output["Content"]);
    }
    if (output["GeneratedTime"] !== undefined) {
        contents.GeneratedTime = new Date(output["GeneratedTime"]);
    }
    if (output["ReportFormat"] !== undefined) {
        contents.ReportFormat = output["ReportFormat"];
    }
    return contents;
};
const deserializeAws_queryGetGroupPolicyResponse = (output, context) => {
    let contents = {
        __type: "GetGroupPolicyResponse",
        GroupName: undefined,
        PolicyDocument: undefined,
        PolicyName: undefined
    };
    if (output["GroupName"] !== undefined) {
        contents.GroupName = output["GroupName"];
    }
    if (output["PolicyDocument"] !== undefined) {
        contents.PolicyDocument = output["PolicyDocument"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    return contents;
};
const deserializeAws_queryGetGroupResponse = (output, context) => {
    let contents = {
        __type: "GetGroupResponse",
        Group: undefined,
        IsTruncated: undefined,
        Marker: undefined,
        Users: undefined
    };
    if (output["Group"] !== undefined) {
        contents.Group = deserializeAws_queryGroup(output["Group"], context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Users === "") {
        contents.Users = [];
    }
    if (output["Users"] !== undefined &&
        output["Users"]["member"] !== undefined) {
        const wrappedItem = output["Users"]["member"] instanceof Array
            ? output["Users"]["member"]
            : [output["Users"]["member"]];
        contents.Users = deserializeAws_queryuserListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetInstanceProfileResponse = (output, context) => {
    let contents = {
        __type: "GetInstanceProfileResponse",
        InstanceProfile: undefined
    };
    if (output["InstanceProfile"] !== undefined) {
        contents.InstanceProfile = deserializeAws_queryInstanceProfile(output["InstanceProfile"], context);
    }
    return contents;
};
const deserializeAws_queryGetLoginProfileResponse = (output, context) => {
    let contents = {
        __type: "GetLoginProfileResponse",
        LoginProfile: undefined
    };
    if (output["LoginProfile"] !== undefined) {
        contents.LoginProfile = deserializeAws_queryLoginProfile(output["LoginProfile"], context);
    }
    return contents;
};
const deserializeAws_queryGetOpenIDConnectProviderResponse = (output, context) => {
    let contents = {
        __type: "GetOpenIDConnectProviderResponse",
        ClientIDList: undefined,
        CreateDate: undefined,
        ThumbprintList: undefined,
        Url: undefined
    };
    if (output.ClientIDList === "") {
        contents.ClientIDList = [];
    }
    if (output["ClientIDList"] !== undefined &&
        output["ClientIDList"]["member"] !== undefined) {
        const wrappedItem = output["ClientIDList"]["member"] instanceof Array
            ? output["ClientIDList"]["member"]
            : [output["ClientIDList"]["member"]];
        contents.ClientIDList = deserializeAws_queryclientIDListType(wrappedItem, context);
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output.ThumbprintList === "") {
        contents.ThumbprintList = [];
    }
    if (output["ThumbprintList"] !== undefined &&
        output["ThumbprintList"]["member"] !== undefined) {
        const wrappedItem = output["ThumbprintList"]["member"] instanceof Array
            ? output["ThumbprintList"]["member"]
            : [output["ThumbprintList"]["member"]];
        contents.ThumbprintList = deserializeAws_querythumbprintListType(wrappedItem, context);
    }
    if (output["Url"] !== undefined) {
        contents.Url = output["Url"];
    }
    return contents;
};
const deserializeAws_queryGetOrganizationsAccessReportResponse = (output, context) => {
    let contents = {
        __type: "GetOrganizationsAccessReportResponse",
        AccessDetails: undefined,
        ErrorDetails: undefined,
        IsTruncated: undefined,
        JobCompletionDate: undefined,
        JobCreationDate: undefined,
        JobStatus: undefined,
        Marker: undefined,
        NumberOfServicesAccessible: undefined,
        NumberOfServicesNotAccessed: undefined
    };
    if (output.AccessDetails === "") {
        contents.AccessDetails = [];
    }
    if (output["AccessDetails"] !== undefined &&
        output["AccessDetails"]["member"] !== undefined) {
        const wrappedItem = output["AccessDetails"]["member"] instanceof Array
            ? output["AccessDetails"]["member"]
            : [output["AccessDetails"]["member"]];
        contents.AccessDetails = deserializeAws_queryAccessDetails(wrappedItem, context);
    }
    if (output["ErrorDetails"] !== undefined) {
        contents.ErrorDetails = deserializeAws_queryErrorDetails(output["ErrorDetails"], context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["JobCompletionDate"] !== undefined) {
        contents.JobCompletionDate = new Date(output["JobCompletionDate"]);
    }
    if (output["JobCreationDate"] !== undefined) {
        contents.JobCreationDate = new Date(output["JobCreationDate"]);
    }
    if (output["JobStatus"] !== undefined) {
        contents.JobStatus = output["JobStatus"];
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output["NumberOfServicesAccessible"] !== undefined) {
        contents.NumberOfServicesAccessible = parseInt(output["NumberOfServicesAccessible"]);
    }
    if (output["NumberOfServicesNotAccessed"] !== undefined) {
        contents.NumberOfServicesNotAccessed = parseInt(output["NumberOfServicesNotAccessed"]);
    }
    return contents;
};
const deserializeAws_queryGetPolicyResponse = (output, context) => {
    let contents = {
        __type: "GetPolicyResponse",
        Policy: undefined
    };
    if (output["Policy"] !== undefined) {
        contents.Policy = deserializeAws_queryPolicy(output["Policy"], context);
    }
    return contents;
};
const deserializeAws_queryGetPolicyVersionResponse = (output, context) => {
    let contents = {
        __type: "GetPolicyVersionResponse",
        PolicyVersion: undefined
    };
    if (output["PolicyVersion"] !== undefined) {
        contents.PolicyVersion = deserializeAws_queryPolicyVersion(output["PolicyVersion"], context);
    }
    return contents;
};
const deserializeAws_queryGetRolePolicyResponse = (output, context) => {
    let contents = {
        __type: "GetRolePolicyResponse",
        PolicyDocument: undefined,
        PolicyName: undefined,
        RoleName: undefined
    };
    if (output["PolicyDocument"] !== undefined) {
        contents.PolicyDocument = output["PolicyDocument"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["RoleName"] !== undefined) {
        contents.RoleName = output["RoleName"];
    }
    return contents;
};
const deserializeAws_queryGetRoleResponse = (output, context) => {
    let contents = {
        __type: "GetRoleResponse",
        Role: undefined
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
const deserializeAws_queryGetSAMLProviderResponse = (output, context) => {
    let contents = {
        __type: "GetSAMLProviderResponse",
        CreateDate: undefined,
        SAMLMetadataDocument: undefined,
        ValidUntil: undefined
    };
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["SAMLMetadataDocument"] !== undefined) {
        contents.SAMLMetadataDocument = output["SAMLMetadataDocument"];
    }
    if (output["ValidUntil"] !== undefined) {
        contents.ValidUntil = new Date(output["ValidUntil"]);
    }
    return contents;
};
const deserializeAws_queryGetSSHPublicKeyResponse = (output, context) => {
    let contents = {
        __type: "GetSSHPublicKeyResponse",
        SSHPublicKey: undefined
    };
    if (output["SSHPublicKey"] !== undefined) {
        contents.SSHPublicKey = deserializeAws_querySSHPublicKey(output["SSHPublicKey"], context);
    }
    return contents;
};
const deserializeAws_queryGetServerCertificateResponse = (output, context) => {
    let contents = {
        __type: "GetServerCertificateResponse",
        ServerCertificate: undefined
    };
    if (output["ServerCertificate"] !== undefined) {
        contents.ServerCertificate = deserializeAws_queryServerCertificate(output["ServerCertificate"], context);
    }
    return contents;
};
const deserializeAws_queryGetServiceLastAccessedDetailsResponse = (output, context) => {
    let contents = {
        __type: "GetServiceLastAccessedDetailsResponse",
        Error: undefined,
        IsTruncated: undefined,
        JobCompletionDate: undefined,
        JobCreationDate: undefined,
        JobStatus: undefined,
        Marker: undefined,
        ServicesLastAccessed: undefined
    };
    if (output["Error"] !== undefined) {
        contents.Error = deserializeAws_queryErrorDetails(output["Error"], context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["JobCompletionDate"] !== undefined) {
        contents.JobCompletionDate = new Date(output["JobCompletionDate"]);
    }
    if (output["JobCreationDate"] !== undefined) {
        contents.JobCreationDate = new Date(output["JobCreationDate"]);
    }
    if (output["JobStatus"] !== undefined) {
        contents.JobStatus = output["JobStatus"];
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ServicesLastAccessed === "") {
        contents.ServicesLastAccessed = [];
    }
    if (output["ServicesLastAccessed"] !== undefined &&
        output["ServicesLastAccessed"]["member"] !== undefined) {
        const wrappedItem = output["ServicesLastAccessed"]["member"] instanceof Array
            ? output["ServicesLastAccessed"]["member"]
            : [output["ServicesLastAccessed"]["member"]];
        contents.ServicesLastAccessed = deserializeAws_queryServicesLastAccessed(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesResponse = (output, context) => {
    let contents = {
        __type: "GetServiceLastAccessedDetailsWithEntitiesResponse",
        EntityDetailsList: undefined,
        Error: undefined,
        IsTruncated: undefined,
        JobCompletionDate: undefined,
        JobCreationDate: undefined,
        JobStatus: undefined,
        Marker: undefined
    };
    if (output.EntityDetailsList === "") {
        contents.EntityDetailsList = [];
    }
    if (output["EntityDetailsList"] !== undefined &&
        output["EntityDetailsList"]["member"] !== undefined) {
        const wrappedItem = output["EntityDetailsList"]["member"] instanceof Array
            ? output["EntityDetailsList"]["member"]
            : [output["EntityDetailsList"]["member"]];
        contents.EntityDetailsList = deserializeAws_queryentityDetailsListType(wrappedItem, context);
    }
    if (output["Error"] !== undefined) {
        contents.Error = deserializeAws_queryErrorDetails(output["Error"], context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["JobCompletionDate"] !== undefined) {
        contents.JobCompletionDate = new Date(output["JobCompletionDate"]);
    }
    if (output["JobCreationDate"] !== undefined) {
        contents.JobCreationDate = new Date(output["JobCreationDate"]);
    }
    if (output["JobStatus"] !== undefined) {
        contents.JobStatus = output["JobStatus"];
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryGetServiceLinkedRoleDeletionStatusResponse = (output, context) => {
    let contents = {
        __type: "GetServiceLinkedRoleDeletionStatusResponse",
        Reason: undefined,
        Status: undefined
    };
    if (output["Reason"] !== undefined) {
        contents.Reason = deserializeAws_queryDeletionTaskFailureReasonType(output["Reason"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryGetUserPolicyResponse = (output, context) => {
    let contents = {
        __type: "GetUserPolicyResponse",
        PolicyDocument: undefined,
        PolicyName: undefined,
        UserName: undefined
    };
    if (output["PolicyDocument"] !== undefined) {
        contents.PolicyDocument = output["PolicyDocument"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryGetUserResponse = (output, context) => {
    let contents = {
        __type: "GetUserResponse",
        User: undefined
    };
    if (output["User"] !== undefined) {
        contents.User = deserializeAws_queryUser(output["User"], context);
    }
    return contents;
};
const deserializeAws_queryGroup = (output, context) => {
    let contents = {
        __type: "Group",
        Arn: undefined,
        CreateDate: undefined,
        GroupId: undefined,
        GroupName: undefined,
        Path: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["GroupId"] !== undefined) {
        contents.GroupId = output["GroupId"];
    }
    if (output["GroupName"] !== undefined) {
        contents.GroupName = output["GroupName"];
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    return contents;
};
const deserializeAws_queryGroupDetail = (output, context) => {
    let contents = {
        __type: "GroupDetail",
        Arn: undefined,
        AttachedManagedPolicies: undefined,
        CreateDate: undefined,
        GroupId: undefined,
        GroupName: undefined,
        GroupPolicyList: undefined,
        Path: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output.AttachedManagedPolicies === "") {
        contents.AttachedManagedPolicies = [];
    }
    if (output["AttachedManagedPolicies"] !== undefined &&
        output["AttachedManagedPolicies"]["member"] !== undefined) {
        const wrappedItem = output["AttachedManagedPolicies"]["member"] instanceof Array
            ? output["AttachedManagedPolicies"]["member"]
            : [output["AttachedManagedPolicies"]["member"]];
        contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(wrappedItem, context);
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["GroupId"] !== undefined) {
        contents.GroupId = output["GroupId"];
    }
    if (output["GroupName"] !== undefined) {
        contents.GroupName = output["GroupName"];
    }
    if (output.GroupPolicyList === "") {
        contents.GroupPolicyList = [];
    }
    if (output["GroupPolicyList"] !== undefined &&
        output["GroupPolicyList"]["member"] !== undefined) {
        const wrappedItem = output["GroupPolicyList"]["member"] instanceof Array
            ? output["GroupPolicyList"]["member"]
            : [output["GroupPolicyList"]["member"]];
        contents.GroupPolicyList = deserializeAws_querypolicyDetailListType(wrappedItem, context);
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    return contents;
};
const deserializeAws_queryInstanceProfile = (output, context) => {
    let contents = {
        __type: "InstanceProfile",
        Arn: undefined,
        CreateDate: undefined,
        InstanceProfileId: undefined,
        InstanceProfileName: undefined,
        Path: undefined,
        Roles: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["InstanceProfileId"] !== undefined) {
        contents.InstanceProfileId = output["InstanceProfileId"];
    }
    if (output["InstanceProfileName"] !== undefined) {
        contents.InstanceProfileName = output["InstanceProfileName"];
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output.Roles === "") {
        contents.Roles = [];
    }
    if (output["Roles"] !== undefined &&
        output["Roles"]["member"] !== undefined) {
        const wrappedItem = output["Roles"]["member"] instanceof Array
            ? output["Roles"]["member"]
            : [output["Roles"]["member"]];
        contents.Roles = deserializeAws_queryroleListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryInvalidAuthenticationCodeException = (output, context) => {
    let contents = {
        __type: "InvalidAuthenticationCodeException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidCertificateException = (output, context) => {
    let contents = {
        __type: "InvalidCertificateException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidPublicKeyException = (output, context) => {
    let contents = {
        __type: "InvalidPublicKeyException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidUserTypeException = (output, context) => {
    let contents = {
        __type: "InvalidUserTypeException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKeyPairMismatchException = (output, context) => {
    let contents = {
        __type: "KeyPairMismatchException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryLimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryListAccessKeysResponse = (output, context) => {
    let contents = {
        __type: "ListAccessKeysResponse",
        AccessKeyMetadata: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.AccessKeyMetadata === "") {
        contents.AccessKeyMetadata = [];
    }
    if (output["AccessKeyMetadata"] !== undefined &&
        output["AccessKeyMetadata"]["member"] !== undefined) {
        const wrappedItem = output["AccessKeyMetadata"]["member"] instanceof Array
            ? output["AccessKeyMetadata"]["member"]
            : [output["AccessKeyMetadata"]["member"]];
        contents.AccessKeyMetadata = deserializeAws_queryaccessKeyMetadataListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListAccountAliasesResponse = (output, context) => {
    let contents = {
        __type: "ListAccountAliasesResponse",
        AccountAliases: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.AccountAliases === "") {
        contents.AccountAliases = [];
    }
    if (output["AccountAliases"] !== undefined &&
        output["AccountAliases"]["member"] !== undefined) {
        const wrappedItem = output["AccountAliases"]["member"] instanceof Array
            ? output["AccountAliases"]["member"]
            : [output["AccountAliases"]["member"]];
        contents.AccountAliases = deserializeAws_queryaccountAliasListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListAttachedGroupPoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListAttachedGroupPoliciesResponse",
        AttachedPolicies: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.AttachedPolicies === "") {
        contents.AttachedPolicies = [];
    }
    if (output["AttachedPolicies"] !== undefined &&
        output["AttachedPolicies"]["member"] !== undefined) {
        const wrappedItem = output["AttachedPolicies"]["member"] instanceof Array
            ? output["AttachedPolicies"]["member"]
            : [output["AttachedPolicies"]["member"]];
        contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListAttachedRolePoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListAttachedRolePoliciesResponse",
        AttachedPolicies: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.AttachedPolicies === "") {
        contents.AttachedPolicies = [];
    }
    if (output["AttachedPolicies"] !== undefined &&
        output["AttachedPolicies"]["member"] !== undefined) {
        const wrappedItem = output["AttachedPolicies"]["member"] instanceof Array
            ? output["AttachedPolicies"]["member"]
            : [output["AttachedPolicies"]["member"]];
        contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListAttachedUserPoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListAttachedUserPoliciesResponse",
        AttachedPolicies: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.AttachedPolicies === "") {
        contents.AttachedPolicies = [];
    }
    if (output["AttachedPolicies"] !== undefined &&
        output["AttachedPolicies"]["member"] !== undefined) {
        const wrappedItem = output["AttachedPolicies"]["member"] instanceof Array
            ? output["AttachedPolicies"]["member"]
            : [output["AttachedPolicies"]["member"]];
        contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListEntitiesForPolicyResponse = (output, context) => {
    let contents = {
        __type: "ListEntitiesForPolicyResponse",
        IsTruncated: undefined,
        Marker: undefined,
        PolicyGroups: undefined,
        PolicyRoles: undefined,
        PolicyUsers: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.PolicyGroups === "") {
        contents.PolicyGroups = [];
    }
    if (output["PolicyGroups"] !== undefined &&
        output["PolicyGroups"]["member"] !== undefined) {
        const wrappedItem = output["PolicyGroups"]["member"] instanceof Array
            ? output["PolicyGroups"]["member"]
            : [output["PolicyGroups"]["member"]];
        contents.PolicyGroups = deserializeAws_queryPolicyGroupListType(wrappedItem, context);
    }
    if (output.PolicyRoles === "") {
        contents.PolicyRoles = [];
    }
    if (output["PolicyRoles"] !== undefined &&
        output["PolicyRoles"]["member"] !== undefined) {
        const wrappedItem = output["PolicyRoles"]["member"] instanceof Array
            ? output["PolicyRoles"]["member"]
            : [output["PolicyRoles"]["member"]];
        contents.PolicyRoles = deserializeAws_queryPolicyRoleListType(wrappedItem, context);
    }
    if (output.PolicyUsers === "") {
        contents.PolicyUsers = [];
    }
    if (output["PolicyUsers"] !== undefined &&
        output["PolicyUsers"]["member"] !== undefined) {
        const wrappedItem = output["PolicyUsers"]["member"] instanceof Array
            ? output["PolicyUsers"]["member"]
            : [output["PolicyUsers"]["member"]];
        contents.PolicyUsers = deserializeAws_queryPolicyUserListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListGroupPoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListGroupPoliciesResponse",
        IsTruncated: undefined,
        Marker: undefined,
        PolicyNames: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined &&
        output["PolicyNames"]["member"] !== undefined) {
        const wrappedItem = output["PolicyNames"]["member"] instanceof Array
            ? output["PolicyNames"]["member"]
            : [output["PolicyNames"]["member"]];
        contents.PolicyNames = deserializeAws_querypolicyNameListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListGroupsForUserResponse = (output, context) => {
    let contents = {
        __type: "ListGroupsForUserResponse",
        Groups: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.Groups === "") {
        contents.Groups = [];
    }
    if (output["Groups"] !== undefined &&
        output["Groups"]["member"] !== undefined) {
        const wrappedItem = output["Groups"]["member"] instanceof Array
            ? output["Groups"]["member"]
            : [output["Groups"]["member"]];
        contents.Groups = deserializeAws_querygroupListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListGroupsResponse = (output, context) => {
    let contents = {
        __type: "ListGroupsResponse",
        Groups: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.Groups === "") {
        contents.Groups = [];
    }
    if (output["Groups"] !== undefined &&
        output["Groups"]["member"] !== undefined) {
        const wrappedItem = output["Groups"]["member"] instanceof Array
            ? output["Groups"]["member"]
            : [output["Groups"]["member"]];
        contents.Groups = deserializeAws_querygroupListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListInstanceProfilesForRoleResponse = (output, context) => {
    let contents = {
        __type: "ListInstanceProfilesForRoleResponse",
        InstanceProfiles: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.InstanceProfiles === "") {
        contents.InstanceProfiles = [];
    }
    if (output["InstanceProfiles"] !== undefined &&
        output["InstanceProfiles"]["member"] !== undefined) {
        const wrappedItem = output["InstanceProfiles"]["member"] instanceof Array
            ? output["InstanceProfiles"]["member"]
            : [output["InstanceProfiles"]["member"]];
        contents.InstanceProfiles = deserializeAws_queryinstanceProfileListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListInstanceProfilesResponse = (output, context) => {
    let contents = {
        __type: "ListInstanceProfilesResponse",
        InstanceProfiles: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.InstanceProfiles === "") {
        contents.InstanceProfiles = [];
    }
    if (output["InstanceProfiles"] !== undefined &&
        output["InstanceProfiles"]["member"] !== undefined) {
        const wrappedItem = output["InstanceProfiles"]["member"] instanceof Array
            ? output["InstanceProfiles"]["member"]
            : [output["InstanceProfiles"]["member"]];
        contents.InstanceProfiles = deserializeAws_queryinstanceProfileListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListMFADevicesResponse = (output, context) => {
    let contents = {
        __type: "ListMFADevicesResponse",
        IsTruncated: undefined,
        MFADevices: undefined,
        Marker: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output.MFADevices === "") {
        contents.MFADevices = [];
    }
    if (output["MFADevices"] !== undefined &&
        output["MFADevices"]["member"] !== undefined) {
        const wrappedItem = output["MFADevices"]["member"] instanceof Array
            ? output["MFADevices"]["member"]
            : [output["MFADevices"]["member"]];
        contents.MFADevices = deserializeAws_querymfaDeviceListType(wrappedItem, context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListOpenIDConnectProvidersResponse = (output, context) => {
    let contents = {
        __type: "ListOpenIDConnectProvidersResponse",
        OpenIDConnectProviderList: undefined
    };
    if (output.OpenIDConnectProviderList === "") {
        contents.OpenIDConnectProviderList = [];
    }
    if (output["OpenIDConnectProviderList"] !== undefined &&
        output["OpenIDConnectProviderList"]["member"] !== undefined) {
        const wrappedItem = output["OpenIDConnectProviderList"]["member"] instanceof Array
            ? output["OpenIDConnectProviderList"]["member"]
            : [output["OpenIDConnectProviderList"]["member"]];
        contents.OpenIDConnectProviderList = deserializeAws_queryOpenIDConnectProviderListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListPoliciesGrantingServiceAccessEntry = (output, context) => {
    let contents = {
        __type: "ListPoliciesGrantingServiceAccessEntry",
        Policies: undefined,
        ServiceNamespace: undefined
    };
    if (output.Policies === "") {
        contents.Policies = [];
    }
    if (output["Policies"] !== undefined &&
        output["Policies"]["member"] !== undefined) {
        const wrappedItem = output["Policies"]["member"] instanceof Array
            ? output["Policies"]["member"]
            : [output["Policies"]["member"]];
        contents.Policies = deserializeAws_querypolicyGrantingServiceAccessListType(wrappedItem, context);
    }
    if (output["ServiceNamespace"] !== undefined) {
        contents.ServiceNamespace = output["ServiceNamespace"];
    }
    return contents;
};
const deserializeAws_queryListPoliciesGrantingServiceAccessResponse = (output, context) => {
    let contents = {
        __type: "ListPoliciesGrantingServiceAccessResponse",
        IsTruncated: undefined,
        Marker: undefined,
        PoliciesGrantingServiceAccess: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.PoliciesGrantingServiceAccess === "") {
        contents.PoliciesGrantingServiceAccess = [];
    }
    if (output["PoliciesGrantingServiceAccess"] !== undefined &&
        output["PoliciesGrantingServiceAccess"]["member"] !== undefined) {
        const wrappedItem = output["PoliciesGrantingServiceAccess"]["member"] instanceof Array
            ? output["PoliciesGrantingServiceAccess"]["member"]
            : [output["PoliciesGrantingServiceAccess"]["member"]];
        contents.PoliciesGrantingServiceAccess = deserializeAws_querylistPolicyGrantingServiceAccessResponseListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListPoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListPoliciesResponse",
        IsTruncated: undefined,
        Marker: undefined,
        Policies: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Policies === "") {
        contents.Policies = [];
    }
    if (output["Policies"] !== undefined &&
        output["Policies"]["member"] !== undefined) {
        const wrappedItem = output["Policies"]["member"] instanceof Array
            ? output["Policies"]["member"]
            : [output["Policies"]["member"]];
        contents.Policies = deserializeAws_querypolicyListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListPolicyVersionsResponse = (output, context) => {
    let contents = {
        __type: "ListPolicyVersionsResponse",
        IsTruncated: undefined,
        Marker: undefined,
        Versions: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Versions === "") {
        contents.Versions = [];
    }
    if (output["Versions"] !== undefined &&
        output["Versions"]["member"] !== undefined) {
        const wrappedItem = output["Versions"]["member"] instanceof Array
            ? output["Versions"]["member"]
            : [output["Versions"]["member"]];
        contents.Versions = deserializeAws_querypolicyDocumentVersionListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListRolePoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListRolePoliciesResponse",
        IsTruncated: undefined,
        Marker: undefined,
        PolicyNames: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined &&
        output["PolicyNames"]["member"] !== undefined) {
        const wrappedItem = output["PolicyNames"]["member"] instanceof Array
            ? output["PolicyNames"]["member"]
            : [output["PolicyNames"]["member"]];
        contents.PolicyNames = deserializeAws_querypolicyNameListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListRoleTagsResponse = (output, context) => {
    let contents = {
        __type: "ListRoleTagsResponse",
        IsTruncated: undefined,
        Marker: undefined,
        Tags: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_querytagListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListRolesResponse = (output, context) => {
    let contents = {
        __type: "ListRolesResponse",
        IsTruncated: undefined,
        Marker: undefined,
        Roles: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Roles === "") {
        contents.Roles = [];
    }
    if (output["Roles"] !== undefined &&
        output["Roles"]["member"] !== undefined) {
        const wrappedItem = output["Roles"]["member"] instanceof Array
            ? output["Roles"]["member"]
            : [output["Roles"]["member"]];
        contents.Roles = deserializeAws_queryroleListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListSAMLProvidersResponse = (output, context) => {
    let contents = {
        __type: "ListSAMLProvidersResponse",
        SAMLProviderList: undefined
    };
    if (output.SAMLProviderList === "") {
        contents.SAMLProviderList = [];
    }
    if (output["SAMLProviderList"] !== undefined &&
        output["SAMLProviderList"]["member"] !== undefined) {
        const wrappedItem = output["SAMLProviderList"]["member"] instanceof Array
            ? output["SAMLProviderList"]["member"]
            : [output["SAMLProviderList"]["member"]];
        contents.SAMLProviderList = deserializeAws_querySAMLProviderListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListSSHPublicKeysResponse = (output, context) => {
    let contents = {
        __type: "ListSSHPublicKeysResponse",
        IsTruncated: undefined,
        Marker: undefined,
        SSHPublicKeys: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.SSHPublicKeys === "") {
        contents.SSHPublicKeys = [];
    }
    if (output["SSHPublicKeys"] !== undefined &&
        output["SSHPublicKeys"]["member"] !== undefined) {
        const wrappedItem = output["SSHPublicKeys"]["member"] instanceof Array
            ? output["SSHPublicKeys"]["member"]
            : [output["SSHPublicKeys"]["member"]];
        contents.SSHPublicKeys = deserializeAws_querySSHPublicKeyListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListServerCertificatesResponse = (output, context) => {
    let contents = {
        __type: "ListServerCertificatesResponse",
        IsTruncated: undefined,
        Marker: undefined,
        ServerCertificateMetadataList: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ServerCertificateMetadataList === "") {
        contents.ServerCertificateMetadataList = [];
    }
    if (output["ServerCertificateMetadataList"] !== undefined &&
        output["ServerCertificateMetadataList"]["member"] !== undefined) {
        const wrappedItem = output["ServerCertificateMetadataList"]["member"] instanceof Array
            ? output["ServerCertificateMetadataList"]["member"]
            : [output["ServerCertificateMetadataList"]["member"]];
        contents.ServerCertificateMetadataList = deserializeAws_queryserverCertificateMetadataListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListServiceSpecificCredentialsResponse = (output, context) => {
    let contents = {
        __type: "ListServiceSpecificCredentialsResponse",
        ServiceSpecificCredentials: undefined
    };
    if (output.ServiceSpecificCredentials === "") {
        contents.ServiceSpecificCredentials = [];
    }
    if (output["ServiceSpecificCredentials"] !== undefined &&
        output["ServiceSpecificCredentials"]["member"] !== undefined) {
        const wrappedItem = output["ServiceSpecificCredentials"]["member"] instanceof Array
            ? output["ServiceSpecificCredentials"]["member"]
            : [output["ServiceSpecificCredentials"]["member"]];
        contents.ServiceSpecificCredentials = deserializeAws_queryServiceSpecificCredentialsListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListSigningCertificatesResponse = (output, context) => {
    let contents = {
        __type: "ListSigningCertificatesResponse",
        Certificates: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined &&
        output["Certificates"]["member"] !== undefined) {
        const wrappedItem = output["Certificates"]["member"] instanceof Array
            ? output["Certificates"]["member"]
            : [output["Certificates"]["member"]];
        contents.Certificates = deserializeAws_querycertificateListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryListUserPoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListUserPoliciesResponse",
        IsTruncated: undefined,
        Marker: undefined,
        PolicyNames: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined &&
        output["PolicyNames"]["member"] !== undefined) {
        const wrappedItem = output["PolicyNames"]["member"] instanceof Array
            ? output["PolicyNames"]["member"]
            : [output["PolicyNames"]["member"]];
        contents.PolicyNames = deserializeAws_querypolicyNameListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListUserTagsResponse = (output, context) => {
    let contents = {
        __type: "ListUserTagsResponse",
        IsTruncated: undefined,
        Marker: undefined,
        Tags: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_querytagListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListUsersResponse = (output, context) => {
    let contents = {
        __type: "ListUsersResponse",
        IsTruncated: undefined,
        Marker: undefined,
        Users: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Users === "") {
        contents.Users = [];
    }
    if (output["Users"] !== undefined &&
        output["Users"]["member"] !== undefined) {
        const wrappedItem = output["Users"]["member"] instanceof Array
            ? output["Users"]["member"]
            : [output["Users"]["member"]];
        contents.Users = deserializeAws_queryuserListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListVirtualMFADevicesResponse = (output, context) => {
    let contents = {
        __type: "ListVirtualMFADevicesResponse",
        IsTruncated: undefined,
        Marker: undefined,
        VirtualMFADevices: undefined
    };
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.VirtualMFADevices === "") {
        contents.VirtualMFADevices = [];
    }
    if (output["VirtualMFADevices"] !== undefined &&
        output["VirtualMFADevices"]["member"] !== undefined) {
        const wrappedItem = output["VirtualMFADevices"]["member"] instanceof Array
            ? output["VirtualMFADevices"]["member"]
            : [output["VirtualMFADevices"]["member"]];
        contents.VirtualMFADevices = deserializeAws_queryvirtualMFADeviceListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryLoginProfile = (output, context) => {
    let contents = {
        __type: "LoginProfile",
        CreateDate: undefined,
        PasswordResetRequired: undefined,
        UserName: undefined
    };
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["PasswordResetRequired"] !== undefined) {
        contents.PasswordResetRequired = output["PasswordResetRequired"] == "true";
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryMFADevice = (output, context) => {
    let contents = {
        __type: "MFADevice",
        EnableDate: undefined,
        SerialNumber: undefined,
        UserName: undefined
    };
    if (output["EnableDate"] !== undefined) {
        contents.EnableDate = new Date(output["EnableDate"]);
    }
    if (output["SerialNumber"] !== undefined) {
        contents.SerialNumber = output["SerialNumber"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryMalformedCertificateException = (output, context) => {
    let contents = {
        __type: "MalformedCertificateException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryMalformedPolicyDocumentException = (output, context) => {
    let contents = {
        __type: "MalformedPolicyDocumentException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryManagedPolicyDetail = (output, context) => {
    let contents = {
        __type: "ManagedPolicyDetail",
        Arn: undefined,
        AttachmentCount: undefined,
        CreateDate: undefined,
        DefaultVersionId: undefined,
        Description: undefined,
        IsAttachable: undefined,
        Path: undefined,
        PermissionsBoundaryUsageCount: undefined,
        PolicyId: undefined,
        PolicyName: undefined,
        PolicyVersionList: undefined,
        UpdateDate: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["AttachmentCount"] !== undefined) {
        contents.AttachmentCount = parseInt(output["AttachmentCount"]);
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["DefaultVersionId"] !== undefined) {
        contents.DefaultVersionId = output["DefaultVersionId"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["IsAttachable"] !== undefined) {
        contents.IsAttachable = output["IsAttachable"] == "true";
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["PermissionsBoundaryUsageCount"] !== undefined) {
        contents.PermissionsBoundaryUsageCount = parseInt(output["PermissionsBoundaryUsageCount"]);
    }
    if (output["PolicyId"] !== undefined) {
        contents.PolicyId = output["PolicyId"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output.PolicyVersionList === "") {
        contents.PolicyVersionList = [];
    }
    if (output["PolicyVersionList"] !== undefined &&
        output["PolicyVersionList"]["member"] !== undefined) {
        const wrappedItem = output["PolicyVersionList"]["member"] instanceof Array
            ? output["PolicyVersionList"]["member"]
            : [output["PolicyVersionList"]["member"]];
        contents.PolicyVersionList = deserializeAws_querypolicyDocumentVersionListType(wrappedItem, context);
    }
    if (output["UpdateDate"] !== undefined) {
        contents.UpdateDate = new Date(output["UpdateDate"]);
    }
    return contents;
};
const deserializeAws_queryManagedPolicyDetailListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryManagedPolicyDetail(entry, context));
    });
    return contents;
};
const deserializeAws_queryNoSuchEntityException = (output, context) => {
    let contents = {
        __type: "NoSuchEntityException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOpenIDConnectProviderListEntry = (output, context) => {
    let contents = {
        __type: "OpenIDConnectProviderListEntry",
        Arn: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    return contents;
};
const deserializeAws_queryOpenIDConnectProviderListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryOpenIDConnectProviderListEntry(entry, context));
    });
    return contents;
};
const deserializeAws_queryOrganizationsDecisionDetail = (output, context) => {
    let contents = {
        __type: "OrganizationsDecisionDetail",
        AllowedByOrganizations: undefined
    };
    if (output["AllowedByOrganizations"] !== undefined) {
        contents.AllowedByOrganizations =
            output["AllowedByOrganizations"] == "true";
    }
    return contents;
};
const deserializeAws_queryPasswordPolicy = (output, context) => {
    let contents = {
        __type: "PasswordPolicy",
        AllowUsersToChangePassword: undefined,
        ExpirePasswords: undefined,
        HardExpiry: undefined,
        MaxPasswordAge: undefined,
        MinimumPasswordLength: undefined,
        PasswordReusePrevention: undefined,
        RequireLowercaseCharacters: undefined,
        RequireNumbers: undefined,
        RequireSymbols: undefined,
        RequireUppercaseCharacters: undefined
    };
    if (output["AllowUsersToChangePassword"] !== undefined) {
        contents.AllowUsersToChangePassword =
            output["AllowUsersToChangePassword"] == "true";
    }
    if (output["ExpirePasswords"] !== undefined) {
        contents.ExpirePasswords = output["ExpirePasswords"] == "true";
    }
    if (output["HardExpiry"] !== undefined) {
        contents.HardExpiry = output["HardExpiry"] == "true";
    }
    if (output["MaxPasswordAge"] !== undefined) {
        contents.MaxPasswordAge = parseInt(output["MaxPasswordAge"]);
    }
    if (output["MinimumPasswordLength"] !== undefined) {
        contents.MinimumPasswordLength = parseInt(output["MinimumPasswordLength"]);
    }
    if (output["PasswordReusePrevention"] !== undefined) {
        contents.PasswordReusePrevention = parseInt(output["PasswordReusePrevention"]);
    }
    if (output["RequireLowercaseCharacters"] !== undefined) {
        contents.RequireLowercaseCharacters =
            output["RequireLowercaseCharacters"] == "true";
    }
    if (output["RequireNumbers"] !== undefined) {
        contents.RequireNumbers = output["RequireNumbers"] == "true";
    }
    if (output["RequireSymbols"] !== undefined) {
        contents.RequireSymbols = output["RequireSymbols"] == "true";
    }
    if (output["RequireUppercaseCharacters"] !== undefined) {
        contents.RequireUppercaseCharacters =
            output["RequireUppercaseCharacters"] == "true";
    }
    return contents;
};
const deserializeAws_queryPasswordPolicyViolationException = (output, context) => {
    let contents = {
        __type: "PasswordPolicyViolationException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPolicy = (output, context) => {
    let contents = {
        __type: "Policy",
        Arn: undefined,
        AttachmentCount: undefined,
        CreateDate: undefined,
        DefaultVersionId: undefined,
        Description: undefined,
        IsAttachable: undefined,
        Path: undefined,
        PermissionsBoundaryUsageCount: undefined,
        PolicyId: undefined,
        PolicyName: undefined,
        UpdateDate: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["AttachmentCount"] !== undefined) {
        contents.AttachmentCount = parseInt(output["AttachmentCount"]);
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["DefaultVersionId"] !== undefined) {
        contents.DefaultVersionId = output["DefaultVersionId"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["IsAttachable"] !== undefined) {
        contents.IsAttachable = output["IsAttachable"] == "true";
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["PermissionsBoundaryUsageCount"] !== undefined) {
        contents.PermissionsBoundaryUsageCount = parseInt(output["PermissionsBoundaryUsageCount"]);
    }
    if (output["PolicyId"] !== undefined) {
        contents.PolicyId = output["PolicyId"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["UpdateDate"] !== undefined) {
        contents.UpdateDate = new Date(output["UpdateDate"]);
    }
    return contents;
};
const deserializeAws_queryPolicyDetail = (output, context) => {
    let contents = {
        __type: "PolicyDetail",
        PolicyDocument: undefined,
        PolicyName: undefined
    };
    if (output["PolicyDocument"] !== undefined) {
        contents.PolicyDocument = output["PolicyDocument"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    return contents;
};
const deserializeAws_queryPolicyEvaluationException = (output, context) => {
    let contents = {
        __type: "PolicyEvaluationException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPolicyGrantingServiceAccess = (output, context) => {
    let contents = {
        __type: "PolicyGrantingServiceAccess",
        EntityName: undefined,
        EntityType: undefined,
        PolicyArn: undefined,
        PolicyName: undefined,
        PolicyType: undefined
    };
    if (output["EntityName"] !== undefined) {
        contents.EntityName = output["EntityName"];
    }
    if (output["EntityType"] !== undefined) {
        contents.EntityType = output["EntityType"];
    }
    if (output["PolicyArn"] !== undefined) {
        contents.PolicyArn = output["PolicyArn"];
    }
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyType"] !== undefined) {
        contents.PolicyType = output["PolicyType"];
    }
    return contents;
};
const deserializeAws_queryPolicyGroup = (output, context) => {
    let contents = {
        __type: "PolicyGroup",
        GroupId: undefined,
        GroupName: undefined
    };
    if (output["GroupId"] !== undefined) {
        contents.GroupId = output["GroupId"];
    }
    if (output["GroupName"] !== undefined) {
        contents.GroupName = output["GroupName"];
    }
    return contents;
};
const deserializeAws_queryPolicyGroupListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicyGroup(entry, context));
    });
    return contents;
};
const deserializeAws_queryPolicyNotAttachableException = (output, context) => {
    let contents = {
        __type: "PolicyNotAttachableException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPolicyRole = (output, context) => {
    let contents = {
        __type: "PolicyRole",
        RoleId: undefined,
        RoleName: undefined
    };
    if (output["RoleId"] !== undefined) {
        contents.RoleId = output["RoleId"];
    }
    if (output["RoleName"] !== undefined) {
        contents.RoleName = output["RoleName"];
    }
    return contents;
};
const deserializeAws_queryPolicyRoleListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicyRole(entry, context));
    });
    return contents;
};
const deserializeAws_queryPolicyUser = (output, context) => {
    let contents = {
        __type: "PolicyUser",
        UserId: undefined,
        UserName: undefined
    };
    if (output["UserId"] !== undefined) {
        contents.UserId = output["UserId"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryPolicyUserListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicyUser(entry, context));
    });
    return contents;
};
const deserializeAws_queryPolicyVersion = (output, context) => {
    let contents = {
        __type: "PolicyVersion",
        CreateDate: undefined,
        Document: undefined,
        IsDefaultVersion: undefined,
        VersionId: undefined
    };
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["Document"] !== undefined) {
        contents.Document = output["Document"];
    }
    if (output["IsDefaultVersion"] !== undefined) {
        contents.IsDefaultVersion = output["IsDefaultVersion"] == "true";
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = output["VersionId"];
    }
    return contents;
};
const deserializeAws_queryPosition = (output, context) => {
    let contents = {
        __type: "Position",
        Column: undefined,
        Line: undefined
    };
    if (output["Column"] !== undefined) {
        contents.Column = parseInt(output["Column"]);
    }
    if (output["Line"] !== undefined) {
        contents.Line = parseInt(output["Line"]);
    }
    return contents;
};
const deserializeAws_queryReportGenerationLimitExceededException = (output, context) => {
    let contents = {
        __type: "ReportGenerationLimitExceededException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResetServiceSpecificCredentialResponse = (output, context) => {
    let contents = {
        __type: "ResetServiceSpecificCredentialResponse",
        ServiceSpecificCredential: undefined
    };
    if (output["ServiceSpecificCredential"] !== undefined) {
        contents.ServiceSpecificCredential = deserializeAws_queryServiceSpecificCredential(output["ServiceSpecificCredential"], context);
    }
    return contents;
};
const deserializeAws_queryResourceSpecificResult = (output, context) => {
    let contents = {
        __type: "ResourceSpecificResult",
        EvalDecisionDetails: undefined,
        EvalResourceDecision: undefined,
        EvalResourceName: undefined,
        MatchedStatements: undefined,
        MissingContextValues: undefined
    };
    if (output.EvalDecisionDetails === "") {
        contents.EvalDecisionDetails = {};
    }
    if (output["EvalDecisionDetails"] !== undefined &&
        output["EvalDecisionDetails"]["entry"] !== undefined) {
        const wrappedItem = output["EvalDecisionDetails"]["entry"] instanceof Array
            ? output["EvalDecisionDetails"]["entry"]
            : [output["EvalDecisionDetails"]["entry"]];
        contents.EvalDecisionDetails = deserializeAws_queryEvalDecisionDetailsType(wrappedItem, context);
    }
    if (output["EvalResourceDecision"] !== undefined) {
        contents.EvalResourceDecision = output["EvalResourceDecision"];
    }
    if (output["EvalResourceName"] !== undefined) {
        contents.EvalResourceName = output["EvalResourceName"];
    }
    if (output.MatchedStatements === "") {
        contents.MatchedStatements = [];
    }
    if (output["MatchedStatements"] !== undefined &&
        output["MatchedStatements"]["member"] !== undefined) {
        const wrappedItem = output["MatchedStatements"]["member"] instanceof Array
            ? output["MatchedStatements"]["member"]
            : [output["MatchedStatements"]["member"]];
        contents.MatchedStatements = deserializeAws_queryStatementListType(wrappedItem, context);
    }
    if (output.MissingContextValues === "") {
        contents.MissingContextValues = [];
    }
    if (output["MissingContextValues"] !== undefined &&
        output["MissingContextValues"]["member"] !== undefined) {
        const wrappedItem = output["MissingContextValues"]["member"] instanceof Array
            ? output["MissingContextValues"]["member"]
            : [output["MissingContextValues"]["member"]];
        contents.MissingContextValues = deserializeAws_queryContextKeyNamesResultListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryResourceSpecificResultListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryResourceSpecificResult(entry, context));
    });
    return contents;
};
const deserializeAws_queryRole = (output, context) => {
    let contents = {
        __type: "Role",
        Arn: undefined,
        AssumeRolePolicyDocument: undefined,
        CreateDate: undefined,
        Description: undefined,
        MaxSessionDuration: undefined,
        Path: undefined,
        PermissionsBoundary: undefined,
        RoleId: undefined,
        RoleLastUsed: undefined,
        RoleName: undefined,
        Tags: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["AssumeRolePolicyDocument"] !== undefined) {
        contents.AssumeRolePolicyDocument = output["AssumeRolePolicyDocument"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["MaxSessionDuration"] !== undefined) {
        contents.MaxSessionDuration = parseInt(output["MaxSessionDuration"]);
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["PermissionsBoundary"] !== undefined) {
        contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(output["PermissionsBoundary"], context);
    }
    if (output["RoleId"] !== undefined) {
        contents.RoleId = output["RoleId"];
    }
    if (output["RoleLastUsed"] !== undefined) {
        contents.RoleLastUsed = deserializeAws_queryRoleLastUsed(output["RoleLastUsed"], context);
    }
    if (output["RoleName"] !== undefined) {
        contents.RoleName = output["RoleName"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_querytagListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryRoleDetail = (output, context) => {
    let contents = {
        __type: "RoleDetail",
        Arn: undefined,
        AssumeRolePolicyDocument: undefined,
        AttachedManagedPolicies: undefined,
        CreateDate: undefined,
        InstanceProfileList: undefined,
        Path: undefined,
        PermissionsBoundary: undefined,
        RoleId: undefined,
        RoleLastUsed: undefined,
        RoleName: undefined,
        RolePolicyList: undefined,
        Tags: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["AssumeRolePolicyDocument"] !== undefined) {
        contents.AssumeRolePolicyDocument = output["AssumeRolePolicyDocument"];
    }
    if (output.AttachedManagedPolicies === "") {
        contents.AttachedManagedPolicies = [];
    }
    if (output["AttachedManagedPolicies"] !== undefined &&
        output["AttachedManagedPolicies"]["member"] !== undefined) {
        const wrappedItem = output["AttachedManagedPolicies"]["member"] instanceof Array
            ? output["AttachedManagedPolicies"]["member"]
            : [output["AttachedManagedPolicies"]["member"]];
        contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(wrappedItem, context);
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output.InstanceProfileList === "") {
        contents.InstanceProfileList = [];
    }
    if (output["InstanceProfileList"] !== undefined &&
        output["InstanceProfileList"]["member"] !== undefined) {
        const wrappedItem = output["InstanceProfileList"]["member"] instanceof Array
            ? output["InstanceProfileList"]["member"]
            : [output["InstanceProfileList"]["member"]];
        contents.InstanceProfileList = deserializeAws_queryinstanceProfileListType(wrappedItem, context);
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["PermissionsBoundary"] !== undefined) {
        contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(output["PermissionsBoundary"], context);
    }
    if (output["RoleId"] !== undefined) {
        contents.RoleId = output["RoleId"];
    }
    if (output["RoleLastUsed"] !== undefined) {
        contents.RoleLastUsed = deserializeAws_queryRoleLastUsed(output["RoleLastUsed"], context);
    }
    if (output["RoleName"] !== undefined) {
        contents.RoleName = output["RoleName"];
    }
    if (output.RolePolicyList === "") {
        contents.RolePolicyList = [];
    }
    if (output["RolePolicyList"] !== undefined &&
        output["RolePolicyList"]["member"] !== undefined) {
        const wrappedItem = output["RolePolicyList"]["member"] instanceof Array
            ? output["RolePolicyList"]["member"]
            : [output["RolePolicyList"]["member"]];
        contents.RolePolicyList = deserializeAws_querypolicyDetailListType(wrappedItem, context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_querytagListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryRoleLastUsed = (output, context) => {
    let contents = {
        __type: "RoleLastUsed",
        LastUsedDate: undefined,
        Region: undefined
    };
    if (output["LastUsedDate"] !== undefined) {
        contents.LastUsedDate = new Date(output["LastUsedDate"]);
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    return contents;
};
const deserializeAws_queryRoleUsageListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryRoleUsageType(entry, context));
    });
    return contents;
};
const deserializeAws_queryRoleUsageType = (output, context) => {
    let contents = {
        __type: "RoleUsageType",
        Region: undefined,
        Resources: undefined
    };
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output.Resources === "") {
        contents.Resources = [];
    }
    if (output["Resources"] !== undefined &&
        output["Resources"]["member"] !== undefined) {
        const wrappedItem = output["Resources"]["member"] instanceof Array
            ? output["Resources"]["member"]
            : [output["Resources"]["member"]];
        contents.Resources = deserializeAws_queryArnListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_querySAMLProviderListEntry = (output, context) => {
    let contents = {
        __type: "SAMLProviderListEntry",
        Arn: undefined,
        CreateDate: undefined,
        ValidUntil: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["ValidUntil"] !== undefined) {
        contents.ValidUntil = new Date(output["ValidUntil"]);
    }
    return contents;
};
const deserializeAws_querySAMLProviderListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySAMLProviderListEntry(entry, context));
    });
    return contents;
};
const deserializeAws_querySSHPublicKey = (output, context) => {
    let contents = {
        __type: "SSHPublicKey",
        Fingerprint: undefined,
        SSHPublicKeyBody: undefined,
        SSHPublicKeyId: undefined,
        Status: undefined,
        UploadDate: undefined,
        UserName: undefined
    };
    if (output["Fingerprint"] !== undefined) {
        contents.Fingerprint = output["Fingerprint"];
    }
    if (output["SSHPublicKeyBody"] !== undefined) {
        contents.SSHPublicKeyBody = output["SSHPublicKeyBody"];
    }
    if (output["SSHPublicKeyId"] !== undefined) {
        contents.SSHPublicKeyId = output["SSHPublicKeyId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UploadDate"] !== undefined) {
        contents.UploadDate = new Date(output["UploadDate"]);
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_querySSHPublicKeyListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySSHPublicKeyMetadata(entry, context));
    });
    return contents;
};
const deserializeAws_querySSHPublicKeyMetadata = (output, context) => {
    let contents = {
        __type: "SSHPublicKeyMetadata",
        SSHPublicKeyId: undefined,
        Status: undefined,
        UploadDate: undefined,
        UserName: undefined
    };
    if (output["SSHPublicKeyId"] !== undefined) {
        contents.SSHPublicKeyId = output["SSHPublicKeyId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UploadDate"] !== undefined) {
        contents.UploadDate = new Date(output["UploadDate"]);
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryServerCertificate = (output, context) => {
    let contents = {
        __type: "ServerCertificate",
        CertificateBody: undefined,
        CertificateChain: undefined,
        ServerCertificateMetadata: undefined
    };
    if (output["CertificateBody"] !== undefined) {
        contents.CertificateBody = output["CertificateBody"];
    }
    if (output["CertificateChain"] !== undefined) {
        contents.CertificateChain = output["CertificateChain"];
    }
    if (output["ServerCertificateMetadata"] !== undefined) {
        contents.ServerCertificateMetadata = deserializeAws_queryServerCertificateMetadata(output["ServerCertificateMetadata"], context);
    }
    return contents;
};
const deserializeAws_queryServerCertificateMetadata = (output, context) => {
    let contents = {
        __type: "ServerCertificateMetadata",
        Arn: undefined,
        Expiration: undefined,
        Path: undefined,
        ServerCertificateId: undefined,
        ServerCertificateName: undefined,
        UploadDate: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = new Date(output["Expiration"]);
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["ServerCertificateId"] !== undefined) {
        contents.ServerCertificateId = output["ServerCertificateId"];
    }
    if (output["ServerCertificateName"] !== undefined) {
        contents.ServerCertificateName = output["ServerCertificateName"];
    }
    if (output["UploadDate"] !== undefined) {
        contents.UploadDate = new Date(output["UploadDate"]);
    }
    return contents;
};
const deserializeAws_queryServiceFailureException = (output, context) => {
    let contents = {
        __type: "ServiceFailureException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryServiceLastAccessed = (output, context) => {
    let contents = {
        __type: "ServiceLastAccessed",
        LastAuthenticated: undefined,
        LastAuthenticatedEntity: undefined,
        ServiceName: undefined,
        ServiceNamespace: undefined,
        TotalAuthenticatedEntities: undefined
    };
    if (output["LastAuthenticated"] !== undefined) {
        contents.LastAuthenticated = new Date(output["LastAuthenticated"]);
    }
    if (output["LastAuthenticatedEntity"] !== undefined) {
        contents.LastAuthenticatedEntity = output["LastAuthenticatedEntity"];
    }
    if (output["ServiceName"] !== undefined) {
        contents.ServiceName = output["ServiceName"];
    }
    if (output["ServiceNamespace"] !== undefined) {
        contents.ServiceNamespace = output["ServiceNamespace"];
    }
    if (output["TotalAuthenticatedEntities"] !== undefined) {
        contents.TotalAuthenticatedEntities = parseInt(output["TotalAuthenticatedEntities"]);
    }
    return contents;
};
const deserializeAws_queryServiceNotSupportedException = (output, context) => {
    let contents = {
        __type: "ServiceNotSupportedException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryServiceSpecificCredential = (output, context) => {
    let contents = {
        __type: "ServiceSpecificCredential",
        CreateDate: undefined,
        ServiceName: undefined,
        ServicePassword: undefined,
        ServiceSpecificCredentialId: undefined,
        ServiceUserName: undefined,
        Status: undefined,
        UserName: undefined
    };
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["ServiceName"] !== undefined) {
        contents.ServiceName = output["ServiceName"];
    }
    if (output["ServicePassword"] !== undefined) {
        contents.ServicePassword = output["ServicePassword"];
    }
    if (output["ServiceSpecificCredentialId"] !== undefined) {
        contents.ServiceSpecificCredentialId =
            output["ServiceSpecificCredentialId"];
    }
    if (output["ServiceUserName"] !== undefined) {
        contents.ServiceUserName = output["ServiceUserName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryServiceSpecificCredentialMetadata = (output, context) => {
    let contents = {
        __type: "ServiceSpecificCredentialMetadata",
        CreateDate: undefined,
        ServiceName: undefined,
        ServiceSpecificCredentialId: undefined,
        ServiceUserName: undefined,
        Status: undefined,
        UserName: undefined
    };
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["ServiceName"] !== undefined) {
        contents.ServiceName = output["ServiceName"];
    }
    if (output["ServiceSpecificCredentialId"] !== undefined) {
        contents.ServiceSpecificCredentialId =
            output["ServiceSpecificCredentialId"];
    }
    if (output["ServiceUserName"] !== undefined) {
        contents.ServiceUserName = output["ServiceUserName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryServiceSpecificCredentialsListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryServiceSpecificCredentialMetadata(entry, context));
    });
    return contents;
};
const deserializeAws_queryServicesLastAccessed = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryServiceLastAccessed(entry, context));
    });
    return contents;
};
const deserializeAws_querySigningCertificate = (output, context) => {
    let contents = {
        __type: "SigningCertificate",
        CertificateBody: undefined,
        CertificateId: undefined,
        Status: undefined,
        UploadDate: undefined,
        UserName: undefined
    };
    if (output["CertificateBody"] !== undefined) {
        contents.CertificateBody = output["CertificateBody"];
    }
    if (output["CertificateId"] !== undefined) {
        contents.CertificateId = output["CertificateId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["UploadDate"] !== undefined) {
        contents.UploadDate = new Date(output["UploadDate"]);
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_querySimulatePolicyResponse = (output, context) => {
    let contents = {
        __type: "SimulatePolicyResponse",
        EvaluationResults: undefined,
        IsTruncated: undefined,
        Marker: undefined
    };
    if (output.EvaluationResults === "") {
        contents.EvaluationResults = [];
    }
    if (output["EvaluationResults"] !== undefined &&
        output["EvaluationResults"]["member"] !== undefined) {
        const wrappedItem = output["EvaluationResults"]["member"] instanceof Array
            ? output["EvaluationResults"]["member"]
            : [output["EvaluationResults"]["member"]];
        contents.EvaluationResults = deserializeAws_queryEvaluationResultsListType(wrappedItem, context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = output["IsTruncated"] == "true";
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryStatement = (output, context) => {
    let contents = {
        __type: "Statement",
        EndPosition: undefined,
        SourcePolicyId: undefined,
        SourcePolicyType: undefined,
        StartPosition: undefined
    };
    if (output["EndPosition"] !== undefined) {
        contents.EndPosition = deserializeAws_queryPosition(output["EndPosition"], context);
    }
    if (output["SourcePolicyId"] !== undefined) {
        contents.SourcePolicyId = output["SourcePolicyId"];
    }
    if (output["SourcePolicyType"] !== undefined) {
        contents.SourcePolicyType = output["SourcePolicyType"];
    }
    if (output["StartPosition"] !== undefined) {
        contents.StartPosition = deserializeAws_queryPosition(output["StartPosition"], context);
    }
    return contents;
};
const deserializeAws_queryStatementListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryStatement(entry, context));
    });
    return contents;
};
const deserializeAws_queryTag = (output, context) => {
    let contents = {
        __type: "Tag",
        Key: undefined,
        Value: undefined
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryUnmodifiableEntityException = (output, context) => {
    let contents = {
        __type: "UnmodifiableEntityException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUnrecognizedPublicKeyEncodingException = (output, context) => {
    let contents = {
        __type: "UnrecognizedPublicKeyEncodingException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUpdateRoleDescriptionResponse = (output, context) => {
    let contents = {
        __type: "UpdateRoleDescriptionResponse",
        Role: undefined
    };
    if (output["Role"] !== undefined) {
        contents.Role = deserializeAws_queryRole(output["Role"], context);
    }
    return contents;
};
const deserializeAws_queryUpdateRoleResponse = (output, context) => {
    let contents = {
        __type: "UpdateRoleResponse"
    };
    return contents;
};
const deserializeAws_queryUpdateSAMLProviderResponse = (output, context) => {
    let contents = {
        __type: "UpdateSAMLProviderResponse",
        SAMLProviderArn: undefined
    };
    if (output["SAMLProviderArn"] !== undefined) {
        contents.SAMLProviderArn = output["SAMLProviderArn"];
    }
    return contents;
};
const deserializeAws_queryUploadSSHPublicKeyResponse = (output, context) => {
    let contents = {
        __type: "UploadSSHPublicKeyResponse",
        SSHPublicKey: undefined
    };
    if (output["SSHPublicKey"] !== undefined) {
        contents.SSHPublicKey = deserializeAws_querySSHPublicKey(output["SSHPublicKey"], context);
    }
    return contents;
};
const deserializeAws_queryUploadServerCertificateResponse = (output, context) => {
    let contents = {
        __type: "UploadServerCertificateResponse",
        ServerCertificateMetadata: undefined
    };
    if (output["ServerCertificateMetadata"] !== undefined) {
        contents.ServerCertificateMetadata = deserializeAws_queryServerCertificateMetadata(output["ServerCertificateMetadata"], context);
    }
    return contents;
};
const deserializeAws_queryUploadSigningCertificateResponse = (output, context) => {
    let contents = {
        __type: "UploadSigningCertificateResponse",
        Certificate: undefined
    };
    if (output["Certificate"] !== undefined) {
        contents.Certificate = deserializeAws_querySigningCertificate(output["Certificate"], context);
    }
    return contents;
};
const deserializeAws_queryUser = (output, context) => {
    let contents = {
        __type: "User",
        Arn: undefined,
        CreateDate: undefined,
        PasswordLastUsed: undefined,
        Path: undefined,
        PermissionsBoundary: undefined,
        Tags: undefined,
        UserId: undefined,
        UserName: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output["PasswordLastUsed"] !== undefined) {
        contents.PasswordLastUsed = new Date(output["PasswordLastUsed"]);
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["PermissionsBoundary"] !== undefined) {
        contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(output["PermissionsBoundary"], context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_querytagListType(wrappedItem, context);
    }
    if (output["UserId"] !== undefined) {
        contents.UserId = output["UserId"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    return contents;
};
const deserializeAws_queryUserDetail = (output, context) => {
    let contents = {
        __type: "UserDetail",
        Arn: undefined,
        AttachedManagedPolicies: undefined,
        CreateDate: undefined,
        GroupList: undefined,
        Path: undefined,
        PermissionsBoundary: undefined,
        Tags: undefined,
        UserId: undefined,
        UserName: undefined,
        UserPolicyList: undefined
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
    }
    if (output.AttachedManagedPolicies === "") {
        contents.AttachedManagedPolicies = [];
    }
    if (output["AttachedManagedPolicies"] !== undefined &&
        output["AttachedManagedPolicies"]["member"] !== undefined) {
        const wrappedItem = output["AttachedManagedPolicies"]["member"] instanceof Array
            ? output["AttachedManagedPolicies"]["member"]
            : [output["AttachedManagedPolicies"]["member"]];
        contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(wrappedItem, context);
    }
    if (output["CreateDate"] !== undefined) {
        contents.CreateDate = new Date(output["CreateDate"]);
    }
    if (output.GroupList === "") {
        contents.GroupList = [];
    }
    if (output["GroupList"] !== undefined &&
        output["GroupList"]["member"] !== undefined) {
        const wrappedItem = output["GroupList"]["member"] instanceof Array
            ? output["GroupList"]["member"]
            : [output["GroupList"]["member"]];
        contents.GroupList = deserializeAws_querygroupNameListType(wrappedItem, context);
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["PermissionsBoundary"] !== undefined) {
        contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(output["PermissionsBoundary"], context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_querytagListType(wrappedItem, context);
    }
    if (output["UserId"] !== undefined) {
        contents.UserId = output["UserId"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output.UserPolicyList === "") {
        contents.UserPolicyList = [];
    }
    if (output["UserPolicyList"] !== undefined &&
        output["UserPolicyList"]["member"] !== undefined) {
        const wrappedItem = output["UserPolicyList"]["member"] instanceof Array
            ? output["UserPolicyList"]["member"]
            : [output["UserPolicyList"]["member"]];
        contents.UserPolicyList = deserializeAws_querypolicyDetailListType(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryVirtualMFADevice = (output, context) => {
    let contents = {
        __type: "VirtualMFADevice",
        Base32StringSeed: undefined,
        EnableDate: undefined,
        QRCodePNG: undefined,
        SerialNumber: undefined,
        User: undefined
    };
    if (output["Base32StringSeed"] !== undefined) {
        contents.Base32StringSeed = context.base64Decoder(output["Base32StringSeed"]);
    }
    if (output["EnableDate"] !== undefined) {
        contents.EnableDate = new Date(output["EnableDate"]);
    }
    if (output["QRCodePNG"] !== undefined) {
        contents.QRCodePNG = context.base64Decoder(output["QRCodePNG"]);
    }
    if (output["SerialNumber"] !== undefined) {
        contents.SerialNumber = output["SerialNumber"];
    }
    if (output["User"] !== undefined) {
        contents.User = deserializeAws_queryUser(output["User"], context);
    }
    return contents;
};
const deserializeAws_queryaccessKeyMetadataListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAccessKeyMetadata(entry, context));
    });
    return contents;
};
const deserializeAws_queryaccountAliasListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryattachedPoliciesListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAttachedPolicy(entry, context));
    });
    return contents;
};
const deserializeAws_querycertificateListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySigningCertificate(entry, context));
    });
    return contents;
};
const deserializeAws_queryclientIDListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryentityDetailsListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEntityDetails(entry, context));
    });
    return contents;
};
const deserializeAws_querygroupDetailListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryGroupDetail(entry, context));
    });
    return contents;
};
const deserializeAws_querygroupListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryGroup(entry, context));
    });
    return contents;
};
const deserializeAws_querygroupNameListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryinstanceProfileListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryInstanceProfile(entry, context));
    });
    return contents;
};
const deserializeAws_querylistPolicyGrantingServiceAccessResponseListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryListPoliciesGrantingServiceAccessEntry(entry, context));
    });
    return contents;
};
const deserializeAws_querymfaDeviceListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryMFADevice(entry, context));
    });
    return contents;
};
const deserializeAws_querypolicyDetailListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicyDetail(entry, context));
    });
    return contents;
};
const deserializeAws_querypolicyDocumentVersionListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicyVersion(entry, context));
    });
    return contents;
};
const deserializeAws_querypolicyGrantingServiceAccessListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicyGrantingServiceAccess(entry, context));
    });
    return contents;
};
const deserializeAws_querypolicyListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPolicy(entry, context));
    });
    return contents;
};
const deserializeAws_querypolicyNameListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryroleDetailListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryRoleDetail(entry, context));
    });
    return contents;
};
const deserializeAws_queryroleListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryRole(entry, context));
    });
    return contents;
};
const deserializeAws_queryserverCertificateMetadataListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryServerCertificateMetadata(entry, context));
    });
    return contents;
};
const deserializeAws_querysummaryMapType = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = parseInt(pair["value"]);
    });
    return mapParams;
};
const deserializeAws_querytagListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTag(entry, context));
    });
    return contents;
};
const deserializeAws_querythumbprintListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryuserDetailListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryUserDetail(entry, context));
    });
    return contents;
};
const deserializeAws_queryuserListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryUser(entry, context));
    });
    return contents;
};
const deserializeAws_queryvirtualMFADeviceListType = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryVirtualMFADevice(entry, context));
    });
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
const decodeEscapedXML = (str) => {
    return str
        .replace(/&amp;/g, "&")
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<");
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            const parsedObj = fast_xml_parser_1.parse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
            });
            const textNodeName = "#text";
            const key = Object.keys(parsedObj)[0];
            const parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return parsedObjToReturn;
        }
        return {};
    });
};
const buildFormUrlencodedString = (entries) => {
    return Object.keys(entries)
        .map(key => smithy_client_1.extendedEncodeURIComponent(key) +
        "=" +
        smithy_client_1.extendedEncodeURIComponent(entries[key]))
        .join("&");
};
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map