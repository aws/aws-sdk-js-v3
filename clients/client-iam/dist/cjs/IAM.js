"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IAMClient_1 = require("./IAMClient");
const AddClientIDToOpenIDConnectProviderCommand_1 = require("./commands/AddClientIDToOpenIDConnectProviderCommand");
const AddRoleToInstanceProfileCommand_1 = require("./commands/AddRoleToInstanceProfileCommand");
const AddUserToGroupCommand_1 = require("./commands/AddUserToGroupCommand");
const AttachGroupPolicyCommand_1 = require("./commands/AttachGroupPolicyCommand");
const AttachRolePolicyCommand_1 = require("./commands/AttachRolePolicyCommand");
const AttachUserPolicyCommand_1 = require("./commands/AttachUserPolicyCommand");
const ChangePasswordCommand_1 = require("./commands/ChangePasswordCommand");
const CreateAccessKeyCommand_1 = require("./commands/CreateAccessKeyCommand");
const CreateAccountAliasCommand_1 = require("./commands/CreateAccountAliasCommand");
const CreateGroupCommand_1 = require("./commands/CreateGroupCommand");
const CreateInstanceProfileCommand_1 = require("./commands/CreateInstanceProfileCommand");
const CreateLoginProfileCommand_1 = require("./commands/CreateLoginProfileCommand");
const CreateOpenIDConnectProviderCommand_1 = require("./commands/CreateOpenIDConnectProviderCommand");
const CreatePolicyCommand_1 = require("./commands/CreatePolicyCommand");
const CreatePolicyVersionCommand_1 = require("./commands/CreatePolicyVersionCommand");
const CreateRoleCommand_1 = require("./commands/CreateRoleCommand");
const CreateSAMLProviderCommand_1 = require("./commands/CreateSAMLProviderCommand");
const CreateServiceLinkedRoleCommand_1 = require("./commands/CreateServiceLinkedRoleCommand");
const CreateServiceSpecificCredentialCommand_1 = require("./commands/CreateServiceSpecificCredentialCommand");
const CreateUserCommand_1 = require("./commands/CreateUserCommand");
const CreateVirtualMFADeviceCommand_1 = require("./commands/CreateVirtualMFADeviceCommand");
const DeactivateMFADeviceCommand_1 = require("./commands/DeactivateMFADeviceCommand");
const DeleteAccessKeyCommand_1 = require("./commands/DeleteAccessKeyCommand");
const DeleteAccountAliasCommand_1 = require("./commands/DeleteAccountAliasCommand");
const DeleteAccountPasswordPolicyCommand_1 = require("./commands/DeleteAccountPasswordPolicyCommand");
const DeleteGroupCommand_1 = require("./commands/DeleteGroupCommand");
const DeleteGroupPolicyCommand_1 = require("./commands/DeleteGroupPolicyCommand");
const DeleteInstanceProfileCommand_1 = require("./commands/DeleteInstanceProfileCommand");
const DeleteLoginProfileCommand_1 = require("./commands/DeleteLoginProfileCommand");
const DeleteOpenIDConnectProviderCommand_1 = require("./commands/DeleteOpenIDConnectProviderCommand");
const DeletePolicyCommand_1 = require("./commands/DeletePolicyCommand");
const DeletePolicyVersionCommand_1 = require("./commands/DeletePolicyVersionCommand");
const DeleteRoleCommand_1 = require("./commands/DeleteRoleCommand");
const DeleteRolePermissionsBoundaryCommand_1 = require("./commands/DeleteRolePermissionsBoundaryCommand");
const DeleteRolePolicyCommand_1 = require("./commands/DeleteRolePolicyCommand");
const DeleteSAMLProviderCommand_1 = require("./commands/DeleteSAMLProviderCommand");
const DeleteSSHPublicKeyCommand_1 = require("./commands/DeleteSSHPublicKeyCommand");
const DeleteServerCertificateCommand_1 = require("./commands/DeleteServerCertificateCommand");
const DeleteServiceLinkedRoleCommand_1 = require("./commands/DeleteServiceLinkedRoleCommand");
const DeleteServiceSpecificCredentialCommand_1 = require("./commands/DeleteServiceSpecificCredentialCommand");
const DeleteSigningCertificateCommand_1 = require("./commands/DeleteSigningCertificateCommand");
const DeleteUserCommand_1 = require("./commands/DeleteUserCommand");
const DeleteUserPermissionsBoundaryCommand_1 = require("./commands/DeleteUserPermissionsBoundaryCommand");
const DeleteUserPolicyCommand_1 = require("./commands/DeleteUserPolicyCommand");
const DeleteVirtualMFADeviceCommand_1 = require("./commands/DeleteVirtualMFADeviceCommand");
const DetachGroupPolicyCommand_1 = require("./commands/DetachGroupPolicyCommand");
const DetachRolePolicyCommand_1 = require("./commands/DetachRolePolicyCommand");
const DetachUserPolicyCommand_1 = require("./commands/DetachUserPolicyCommand");
const EnableMFADeviceCommand_1 = require("./commands/EnableMFADeviceCommand");
const GenerateCredentialReportCommand_1 = require("./commands/GenerateCredentialReportCommand");
const GenerateOrganizationsAccessReportCommand_1 = require("./commands/GenerateOrganizationsAccessReportCommand");
const GenerateServiceLastAccessedDetailsCommand_1 = require("./commands/GenerateServiceLastAccessedDetailsCommand");
const GetAccessKeyLastUsedCommand_1 = require("./commands/GetAccessKeyLastUsedCommand");
const GetAccountAuthorizationDetailsCommand_1 = require("./commands/GetAccountAuthorizationDetailsCommand");
const GetAccountPasswordPolicyCommand_1 = require("./commands/GetAccountPasswordPolicyCommand");
const GetAccountSummaryCommand_1 = require("./commands/GetAccountSummaryCommand");
const GetContextKeysForCustomPolicyCommand_1 = require("./commands/GetContextKeysForCustomPolicyCommand");
const GetContextKeysForPrincipalPolicyCommand_1 = require("./commands/GetContextKeysForPrincipalPolicyCommand");
const GetCredentialReportCommand_1 = require("./commands/GetCredentialReportCommand");
const GetGroupCommand_1 = require("./commands/GetGroupCommand");
const GetGroupPolicyCommand_1 = require("./commands/GetGroupPolicyCommand");
const GetInstanceProfileCommand_1 = require("./commands/GetInstanceProfileCommand");
const GetLoginProfileCommand_1 = require("./commands/GetLoginProfileCommand");
const GetOpenIDConnectProviderCommand_1 = require("./commands/GetOpenIDConnectProviderCommand");
const GetOrganizationsAccessReportCommand_1 = require("./commands/GetOrganizationsAccessReportCommand");
const GetPolicyCommand_1 = require("./commands/GetPolicyCommand");
const GetPolicyVersionCommand_1 = require("./commands/GetPolicyVersionCommand");
const GetRoleCommand_1 = require("./commands/GetRoleCommand");
const GetRolePolicyCommand_1 = require("./commands/GetRolePolicyCommand");
const GetSAMLProviderCommand_1 = require("./commands/GetSAMLProviderCommand");
const GetSSHPublicKeyCommand_1 = require("./commands/GetSSHPublicKeyCommand");
const GetServerCertificateCommand_1 = require("./commands/GetServerCertificateCommand");
const GetServiceLastAccessedDetailsCommand_1 = require("./commands/GetServiceLastAccessedDetailsCommand");
const GetServiceLastAccessedDetailsWithEntitiesCommand_1 = require("./commands/GetServiceLastAccessedDetailsWithEntitiesCommand");
const GetServiceLinkedRoleDeletionStatusCommand_1 = require("./commands/GetServiceLinkedRoleDeletionStatusCommand");
const GetUserCommand_1 = require("./commands/GetUserCommand");
const GetUserPolicyCommand_1 = require("./commands/GetUserPolicyCommand");
const ListAccessKeysCommand_1 = require("./commands/ListAccessKeysCommand");
const ListAccountAliasesCommand_1 = require("./commands/ListAccountAliasesCommand");
const ListAttachedGroupPoliciesCommand_1 = require("./commands/ListAttachedGroupPoliciesCommand");
const ListAttachedRolePoliciesCommand_1 = require("./commands/ListAttachedRolePoliciesCommand");
const ListAttachedUserPoliciesCommand_1 = require("./commands/ListAttachedUserPoliciesCommand");
const ListEntitiesForPolicyCommand_1 = require("./commands/ListEntitiesForPolicyCommand");
const ListGroupPoliciesCommand_1 = require("./commands/ListGroupPoliciesCommand");
const ListGroupsCommand_1 = require("./commands/ListGroupsCommand");
const ListGroupsForUserCommand_1 = require("./commands/ListGroupsForUserCommand");
const ListInstanceProfilesCommand_1 = require("./commands/ListInstanceProfilesCommand");
const ListInstanceProfilesForRoleCommand_1 = require("./commands/ListInstanceProfilesForRoleCommand");
const ListMFADevicesCommand_1 = require("./commands/ListMFADevicesCommand");
const ListOpenIDConnectProvidersCommand_1 = require("./commands/ListOpenIDConnectProvidersCommand");
const ListPoliciesCommand_1 = require("./commands/ListPoliciesCommand");
const ListPoliciesGrantingServiceAccessCommand_1 = require("./commands/ListPoliciesGrantingServiceAccessCommand");
const ListPolicyVersionsCommand_1 = require("./commands/ListPolicyVersionsCommand");
const ListRolePoliciesCommand_1 = require("./commands/ListRolePoliciesCommand");
const ListRoleTagsCommand_1 = require("./commands/ListRoleTagsCommand");
const ListRolesCommand_1 = require("./commands/ListRolesCommand");
const ListSAMLProvidersCommand_1 = require("./commands/ListSAMLProvidersCommand");
const ListSSHPublicKeysCommand_1 = require("./commands/ListSSHPublicKeysCommand");
const ListServerCertificatesCommand_1 = require("./commands/ListServerCertificatesCommand");
const ListServiceSpecificCredentialsCommand_1 = require("./commands/ListServiceSpecificCredentialsCommand");
const ListSigningCertificatesCommand_1 = require("./commands/ListSigningCertificatesCommand");
const ListUserPoliciesCommand_1 = require("./commands/ListUserPoliciesCommand");
const ListUserTagsCommand_1 = require("./commands/ListUserTagsCommand");
const ListUsersCommand_1 = require("./commands/ListUsersCommand");
const ListVirtualMFADevicesCommand_1 = require("./commands/ListVirtualMFADevicesCommand");
const PutGroupPolicyCommand_1 = require("./commands/PutGroupPolicyCommand");
const PutRolePermissionsBoundaryCommand_1 = require("./commands/PutRolePermissionsBoundaryCommand");
const PutRolePolicyCommand_1 = require("./commands/PutRolePolicyCommand");
const PutUserPermissionsBoundaryCommand_1 = require("./commands/PutUserPermissionsBoundaryCommand");
const PutUserPolicyCommand_1 = require("./commands/PutUserPolicyCommand");
const RemoveClientIDFromOpenIDConnectProviderCommand_1 = require("./commands/RemoveClientIDFromOpenIDConnectProviderCommand");
const RemoveRoleFromInstanceProfileCommand_1 = require("./commands/RemoveRoleFromInstanceProfileCommand");
const RemoveUserFromGroupCommand_1 = require("./commands/RemoveUserFromGroupCommand");
const ResetServiceSpecificCredentialCommand_1 = require("./commands/ResetServiceSpecificCredentialCommand");
const ResyncMFADeviceCommand_1 = require("./commands/ResyncMFADeviceCommand");
const SetDefaultPolicyVersionCommand_1 = require("./commands/SetDefaultPolicyVersionCommand");
const SetSecurityTokenServicePreferencesCommand_1 = require("./commands/SetSecurityTokenServicePreferencesCommand");
const SimulateCustomPolicyCommand_1 = require("./commands/SimulateCustomPolicyCommand");
const SimulatePrincipalPolicyCommand_1 = require("./commands/SimulatePrincipalPolicyCommand");
const TagRoleCommand_1 = require("./commands/TagRoleCommand");
const TagUserCommand_1 = require("./commands/TagUserCommand");
const UntagRoleCommand_1 = require("./commands/UntagRoleCommand");
const UntagUserCommand_1 = require("./commands/UntagUserCommand");
const UpdateAccessKeyCommand_1 = require("./commands/UpdateAccessKeyCommand");
const UpdateAccountPasswordPolicyCommand_1 = require("./commands/UpdateAccountPasswordPolicyCommand");
const UpdateAssumeRolePolicyCommand_1 = require("./commands/UpdateAssumeRolePolicyCommand");
const UpdateGroupCommand_1 = require("./commands/UpdateGroupCommand");
const UpdateLoginProfileCommand_1 = require("./commands/UpdateLoginProfileCommand");
const UpdateOpenIDConnectProviderThumbprintCommand_1 = require("./commands/UpdateOpenIDConnectProviderThumbprintCommand");
const UpdateRoleCommand_1 = require("./commands/UpdateRoleCommand");
const UpdateRoleDescriptionCommand_1 = require("./commands/UpdateRoleDescriptionCommand");
const UpdateSAMLProviderCommand_1 = require("./commands/UpdateSAMLProviderCommand");
const UpdateSSHPublicKeyCommand_1 = require("./commands/UpdateSSHPublicKeyCommand");
const UpdateServerCertificateCommand_1 = require("./commands/UpdateServerCertificateCommand");
const UpdateServiceSpecificCredentialCommand_1 = require("./commands/UpdateServiceSpecificCredentialCommand");
const UpdateSigningCertificateCommand_1 = require("./commands/UpdateSigningCertificateCommand");
const UpdateUserCommand_1 = require("./commands/UpdateUserCommand");
const UploadSSHPublicKeyCommand_1 = require("./commands/UploadSSHPublicKeyCommand");
const UploadServerCertificateCommand_1 = require("./commands/UploadServerCertificateCommand");
const UploadSigningCertificateCommand_1 = require("./commands/UploadSigningCertificateCommand");
/**
 * <fullname>AWS Identity and Access Management</fullname>
 *          <p>AWS Identity and Access Management (IAM) is a web service that you can use to manage
 *       users and user permissions under your AWS account. This guide provides descriptions of IAM
 *       actions that you can call programmatically. For general information about IAM, see <a href="http://aws.amazon.com/iam/">AWS Identity and Access Management (IAM)</a>. For the user
 *       guide for IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">Using IAM</a>. </p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a
 *         convenient way to create programmatic access to IAM and AWS. For example, the SDKs take care
 *         of tasks such as cryptographically signing requests (see below), managing errors, and
 *         retrying requests automatically. For information about the AWS SDKs, including how to
 *         download and install them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *           Services</a> page. </p>
 *          </note>
 *          <p>We recommend that you use the AWS SDKs to make programmatic API calls to IAM. However,
 *       you can also use the IAM Query API to make direct calls to the IAM web service. To learn more
 *       about the IAM Query API, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the
 *         <i>Using IAM</i> guide. IAM supports GET and POST requests for all actions.
 *       That is, the API does not require you to use GET for some actions and POST for others.
 *       However, GET requests are subject to the limitation size of a URL. Therefore, for operations
 *       that require larger sizes, use a POST request. </p>
 *          <p>
 *             <b>Signing Requests</b>
 *          </p>
 *          <p>Requests must be signed using an access key ID and a secret access key. We strongly
 *       recommend that you do not use your AWS account access key ID and secret access key for
 *       everyday work with IAM. You can use the access key ID and secret access key for an IAM user or
 *       you can use the AWS Security Token Service to generate temporary security credentials and use
 *       those to sign requests.</p>
 *          <p>To sign requests, we recommend that you use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>. If you have an
 *       existing application that uses Signature Version 2, you do not have to update it to use
 *       Signature Version 4. However, some operations now require Signature Version 4. The
 *       documentation for operations that require version 4 indicate this requirement. </p>
 *          <p>
 *             <b>Additional Resources</b>
 *          </p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS
 *             Security Credentials</a>. This topic provides general information about the types of
 *           credentials used for accessing AWS. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAMBestPractices.html">IAM Best
 *             Practices</a>. This topic presents a list of suggestions for using the IAM service
 *           to help secure your AWS resources. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing
 *             AWS API Requests</a>. This set of topics walk you through the process of signing a
 *           request using an access key ID and secret access key. </p>
 *             </li>
 *          </ul>
 */
class IAM extends IAMClient_1.IAMClient {
    addClientIDToOpenIDConnectProvider(args, optionsOrCb, cb) {
        const command = new AddClientIDToOpenIDConnectProviderCommand_1.AddClientIDToOpenIDConnectProviderCommand(args);
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
    addRoleToInstanceProfile(args, optionsOrCb, cb) {
        const command = new AddRoleToInstanceProfileCommand_1.AddRoleToInstanceProfileCommand(args);
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
    addUserToGroup(args, optionsOrCb, cb) {
        const command = new AddUserToGroupCommand_1.AddUserToGroupCommand(args);
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
    attachGroupPolicy(args, optionsOrCb, cb) {
        const command = new AttachGroupPolicyCommand_1.AttachGroupPolicyCommand(args);
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
    attachRolePolicy(args, optionsOrCb, cb) {
        const command = new AttachRolePolicyCommand_1.AttachRolePolicyCommand(args);
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
    attachUserPolicy(args, optionsOrCb, cb) {
        const command = new AttachUserPolicyCommand_1.AttachUserPolicyCommand(args);
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
    createAccessKey(args, optionsOrCb, cb) {
        const command = new CreateAccessKeyCommand_1.CreateAccessKeyCommand(args);
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
    createAccountAlias(args, optionsOrCb, cb) {
        const command = new CreateAccountAliasCommand_1.CreateAccountAliasCommand(args);
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
    createInstanceProfile(args, optionsOrCb, cb) {
        const command = new CreateInstanceProfileCommand_1.CreateInstanceProfileCommand(args);
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
    createLoginProfile(args, optionsOrCb, cb) {
        const command = new CreateLoginProfileCommand_1.CreateLoginProfileCommand(args);
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
    createOpenIDConnectProvider(args, optionsOrCb, cb) {
        const command = new CreateOpenIDConnectProviderCommand_1.CreateOpenIDConnectProviderCommand(args);
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
    createPolicy(args, optionsOrCb, cb) {
        const command = new CreatePolicyCommand_1.CreatePolicyCommand(args);
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
    createPolicyVersion(args, optionsOrCb, cb) {
        const command = new CreatePolicyVersionCommand_1.CreatePolicyVersionCommand(args);
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
    createRole(args, optionsOrCb, cb) {
        const command = new CreateRoleCommand_1.CreateRoleCommand(args);
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
    createSAMLProvider(args, optionsOrCb, cb) {
        const command = new CreateSAMLProviderCommand_1.CreateSAMLProviderCommand(args);
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
    createServiceLinkedRole(args, optionsOrCb, cb) {
        const command = new CreateServiceLinkedRoleCommand_1.CreateServiceLinkedRoleCommand(args);
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
    createServiceSpecificCredential(args, optionsOrCb, cb) {
        const command = new CreateServiceSpecificCredentialCommand_1.CreateServiceSpecificCredentialCommand(args);
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
    createUser(args, optionsOrCb, cb) {
        const command = new CreateUserCommand_1.CreateUserCommand(args);
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
    createVirtualMFADevice(args, optionsOrCb, cb) {
        const command = new CreateVirtualMFADeviceCommand_1.CreateVirtualMFADeviceCommand(args);
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
    deactivateMFADevice(args, optionsOrCb, cb) {
        const command = new DeactivateMFADeviceCommand_1.DeactivateMFADeviceCommand(args);
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
    deleteAccessKey(args, optionsOrCb, cb) {
        const command = new DeleteAccessKeyCommand_1.DeleteAccessKeyCommand(args);
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
    deleteAccountAlias(args, optionsOrCb, cb) {
        const command = new DeleteAccountAliasCommand_1.DeleteAccountAliasCommand(args);
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
    deleteAccountPasswordPolicy(args, optionsOrCb, cb) {
        const command = new DeleteAccountPasswordPolicyCommand_1.DeleteAccountPasswordPolicyCommand(args);
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
    deleteGroupPolicy(args, optionsOrCb, cb) {
        const command = new DeleteGroupPolicyCommand_1.DeleteGroupPolicyCommand(args);
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
    deleteInstanceProfile(args, optionsOrCb, cb) {
        const command = new DeleteInstanceProfileCommand_1.DeleteInstanceProfileCommand(args);
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
    deleteLoginProfile(args, optionsOrCb, cb) {
        const command = new DeleteLoginProfileCommand_1.DeleteLoginProfileCommand(args);
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
    deleteOpenIDConnectProvider(args, optionsOrCb, cb) {
        const command = new DeleteOpenIDConnectProviderCommand_1.DeleteOpenIDConnectProviderCommand(args);
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
    deletePolicy(args, optionsOrCb, cb) {
        const command = new DeletePolicyCommand_1.DeletePolicyCommand(args);
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
    deletePolicyVersion(args, optionsOrCb, cb) {
        const command = new DeletePolicyVersionCommand_1.DeletePolicyVersionCommand(args);
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
    deleteRole(args, optionsOrCb, cb) {
        const command = new DeleteRoleCommand_1.DeleteRoleCommand(args);
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
    deleteRolePermissionsBoundary(args, optionsOrCb, cb) {
        const command = new DeleteRolePermissionsBoundaryCommand_1.DeleteRolePermissionsBoundaryCommand(args);
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
    deleteRolePolicy(args, optionsOrCb, cb) {
        const command = new DeleteRolePolicyCommand_1.DeleteRolePolicyCommand(args);
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
    deleteSAMLProvider(args, optionsOrCb, cb) {
        const command = new DeleteSAMLProviderCommand_1.DeleteSAMLProviderCommand(args);
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
    deleteSSHPublicKey(args, optionsOrCb, cb) {
        const command = new DeleteSSHPublicKeyCommand_1.DeleteSSHPublicKeyCommand(args);
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
    deleteServerCertificate(args, optionsOrCb, cb) {
        const command = new DeleteServerCertificateCommand_1.DeleteServerCertificateCommand(args);
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
    deleteServiceLinkedRole(args, optionsOrCb, cb) {
        const command = new DeleteServiceLinkedRoleCommand_1.DeleteServiceLinkedRoleCommand(args);
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
    deleteServiceSpecificCredential(args, optionsOrCb, cb) {
        const command = new DeleteServiceSpecificCredentialCommand_1.DeleteServiceSpecificCredentialCommand(args);
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
    deleteSigningCertificate(args, optionsOrCb, cb) {
        const command = new DeleteSigningCertificateCommand_1.DeleteSigningCertificateCommand(args);
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
    deleteUserPermissionsBoundary(args, optionsOrCb, cb) {
        const command = new DeleteUserPermissionsBoundaryCommand_1.DeleteUserPermissionsBoundaryCommand(args);
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
    deleteUserPolicy(args, optionsOrCb, cb) {
        const command = new DeleteUserPolicyCommand_1.DeleteUserPolicyCommand(args);
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
    deleteVirtualMFADevice(args, optionsOrCb, cb) {
        const command = new DeleteVirtualMFADeviceCommand_1.DeleteVirtualMFADeviceCommand(args);
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
    detachGroupPolicy(args, optionsOrCb, cb) {
        const command = new DetachGroupPolicyCommand_1.DetachGroupPolicyCommand(args);
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
    detachRolePolicy(args, optionsOrCb, cb) {
        const command = new DetachRolePolicyCommand_1.DetachRolePolicyCommand(args);
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
    detachUserPolicy(args, optionsOrCb, cb) {
        const command = new DetachUserPolicyCommand_1.DetachUserPolicyCommand(args);
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
    enableMFADevice(args, optionsOrCb, cb) {
        const command = new EnableMFADeviceCommand_1.EnableMFADeviceCommand(args);
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
    generateCredentialReport(args, optionsOrCb, cb) {
        const command = new GenerateCredentialReportCommand_1.GenerateCredentialReportCommand(args);
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
    generateOrganizationsAccessReport(args, optionsOrCb, cb) {
        const command = new GenerateOrganizationsAccessReportCommand_1.GenerateOrganizationsAccessReportCommand(args);
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
    generateServiceLastAccessedDetails(args, optionsOrCb, cb) {
        const command = new GenerateServiceLastAccessedDetailsCommand_1.GenerateServiceLastAccessedDetailsCommand(args);
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
    getAccessKeyLastUsed(args, optionsOrCb, cb) {
        const command = new GetAccessKeyLastUsedCommand_1.GetAccessKeyLastUsedCommand(args);
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
    getAccountAuthorizationDetails(args, optionsOrCb, cb) {
        const command = new GetAccountAuthorizationDetailsCommand_1.GetAccountAuthorizationDetailsCommand(args);
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
    getAccountPasswordPolicy(args, optionsOrCb, cb) {
        const command = new GetAccountPasswordPolicyCommand_1.GetAccountPasswordPolicyCommand(args);
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
    getAccountSummary(args, optionsOrCb, cb) {
        const command = new GetAccountSummaryCommand_1.GetAccountSummaryCommand(args);
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
    getContextKeysForCustomPolicy(args, optionsOrCb, cb) {
        const command = new GetContextKeysForCustomPolicyCommand_1.GetContextKeysForCustomPolicyCommand(args);
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
    getContextKeysForPrincipalPolicy(args, optionsOrCb, cb) {
        const command = new GetContextKeysForPrincipalPolicyCommand_1.GetContextKeysForPrincipalPolicyCommand(args);
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
    getCredentialReport(args, optionsOrCb, cb) {
        const command = new GetCredentialReportCommand_1.GetCredentialReportCommand(args);
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
    getGroupPolicy(args, optionsOrCb, cb) {
        const command = new GetGroupPolicyCommand_1.GetGroupPolicyCommand(args);
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
    getInstanceProfile(args, optionsOrCb, cb) {
        const command = new GetInstanceProfileCommand_1.GetInstanceProfileCommand(args);
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
    getLoginProfile(args, optionsOrCb, cb) {
        const command = new GetLoginProfileCommand_1.GetLoginProfileCommand(args);
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
    getOpenIDConnectProvider(args, optionsOrCb, cb) {
        const command = new GetOpenIDConnectProviderCommand_1.GetOpenIDConnectProviderCommand(args);
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
    getOrganizationsAccessReport(args, optionsOrCb, cb) {
        const command = new GetOrganizationsAccessReportCommand_1.GetOrganizationsAccessReportCommand(args);
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
    getPolicy(args, optionsOrCb, cb) {
        const command = new GetPolicyCommand_1.GetPolicyCommand(args);
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
    getPolicyVersion(args, optionsOrCb, cb) {
        const command = new GetPolicyVersionCommand_1.GetPolicyVersionCommand(args);
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
    getRole(args, optionsOrCb, cb) {
        const command = new GetRoleCommand_1.GetRoleCommand(args);
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
    getRolePolicy(args, optionsOrCb, cb) {
        const command = new GetRolePolicyCommand_1.GetRolePolicyCommand(args);
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
    getSAMLProvider(args, optionsOrCb, cb) {
        const command = new GetSAMLProviderCommand_1.GetSAMLProviderCommand(args);
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
    getSSHPublicKey(args, optionsOrCb, cb) {
        const command = new GetSSHPublicKeyCommand_1.GetSSHPublicKeyCommand(args);
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
    getServerCertificate(args, optionsOrCb, cb) {
        const command = new GetServerCertificateCommand_1.GetServerCertificateCommand(args);
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
    getServiceLastAccessedDetails(args, optionsOrCb, cb) {
        const command = new GetServiceLastAccessedDetailsCommand_1.GetServiceLastAccessedDetailsCommand(args);
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
    getServiceLastAccessedDetailsWithEntities(args, optionsOrCb, cb) {
        const command = new GetServiceLastAccessedDetailsWithEntitiesCommand_1.GetServiceLastAccessedDetailsWithEntitiesCommand(args);
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
    getServiceLinkedRoleDeletionStatus(args, optionsOrCb, cb) {
        const command = new GetServiceLinkedRoleDeletionStatusCommand_1.GetServiceLinkedRoleDeletionStatusCommand(args);
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
    getUserPolicy(args, optionsOrCb, cb) {
        const command = new GetUserPolicyCommand_1.GetUserPolicyCommand(args);
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
    listAccessKeys(args, optionsOrCb, cb) {
        const command = new ListAccessKeysCommand_1.ListAccessKeysCommand(args);
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
    listAccountAliases(args, optionsOrCb, cb) {
        const command = new ListAccountAliasesCommand_1.ListAccountAliasesCommand(args);
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
    listAttachedGroupPolicies(args, optionsOrCb, cb) {
        const command = new ListAttachedGroupPoliciesCommand_1.ListAttachedGroupPoliciesCommand(args);
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
    listAttachedRolePolicies(args, optionsOrCb, cb) {
        const command = new ListAttachedRolePoliciesCommand_1.ListAttachedRolePoliciesCommand(args);
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
    listAttachedUserPolicies(args, optionsOrCb, cb) {
        const command = new ListAttachedUserPoliciesCommand_1.ListAttachedUserPoliciesCommand(args);
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
    listEntitiesForPolicy(args, optionsOrCb, cb) {
        const command = new ListEntitiesForPolicyCommand_1.ListEntitiesForPolicyCommand(args);
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
    listGroupPolicies(args, optionsOrCb, cb) {
        const command = new ListGroupPoliciesCommand_1.ListGroupPoliciesCommand(args);
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
    listGroupsForUser(args, optionsOrCb, cb) {
        const command = new ListGroupsForUserCommand_1.ListGroupsForUserCommand(args);
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
    listInstanceProfiles(args, optionsOrCb, cb) {
        const command = new ListInstanceProfilesCommand_1.ListInstanceProfilesCommand(args);
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
    listInstanceProfilesForRole(args, optionsOrCb, cb) {
        const command = new ListInstanceProfilesForRoleCommand_1.ListInstanceProfilesForRoleCommand(args);
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
    listMFADevices(args, optionsOrCb, cb) {
        const command = new ListMFADevicesCommand_1.ListMFADevicesCommand(args);
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
    listOpenIDConnectProviders(args, optionsOrCb, cb) {
        const command = new ListOpenIDConnectProvidersCommand_1.ListOpenIDConnectProvidersCommand(args);
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
    listPolicies(args, optionsOrCb, cb) {
        const command = new ListPoliciesCommand_1.ListPoliciesCommand(args);
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
    listPoliciesGrantingServiceAccess(args, optionsOrCb, cb) {
        const command = new ListPoliciesGrantingServiceAccessCommand_1.ListPoliciesGrantingServiceAccessCommand(args);
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
    listPolicyVersions(args, optionsOrCb, cb) {
        const command = new ListPolicyVersionsCommand_1.ListPolicyVersionsCommand(args);
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
    listRolePolicies(args, optionsOrCb, cb) {
        const command = new ListRolePoliciesCommand_1.ListRolePoliciesCommand(args);
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
    listRoleTags(args, optionsOrCb, cb) {
        const command = new ListRoleTagsCommand_1.ListRoleTagsCommand(args);
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
    listRoles(args, optionsOrCb, cb) {
        const command = new ListRolesCommand_1.ListRolesCommand(args);
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
    listSAMLProviders(args, optionsOrCb, cb) {
        const command = new ListSAMLProvidersCommand_1.ListSAMLProvidersCommand(args);
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
    listSSHPublicKeys(args, optionsOrCb, cb) {
        const command = new ListSSHPublicKeysCommand_1.ListSSHPublicKeysCommand(args);
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
    listServerCertificates(args, optionsOrCb, cb) {
        const command = new ListServerCertificatesCommand_1.ListServerCertificatesCommand(args);
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
    listServiceSpecificCredentials(args, optionsOrCb, cb) {
        const command = new ListServiceSpecificCredentialsCommand_1.ListServiceSpecificCredentialsCommand(args);
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
    listSigningCertificates(args, optionsOrCb, cb) {
        const command = new ListSigningCertificatesCommand_1.ListSigningCertificatesCommand(args);
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
    listUserPolicies(args, optionsOrCb, cb) {
        const command = new ListUserPoliciesCommand_1.ListUserPoliciesCommand(args);
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
    listUserTags(args, optionsOrCb, cb) {
        const command = new ListUserTagsCommand_1.ListUserTagsCommand(args);
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
    listVirtualMFADevices(args, optionsOrCb, cb) {
        const command = new ListVirtualMFADevicesCommand_1.ListVirtualMFADevicesCommand(args);
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
    putGroupPolicy(args, optionsOrCb, cb) {
        const command = new PutGroupPolicyCommand_1.PutGroupPolicyCommand(args);
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
    putRolePermissionsBoundary(args, optionsOrCb, cb) {
        const command = new PutRolePermissionsBoundaryCommand_1.PutRolePermissionsBoundaryCommand(args);
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
    putRolePolicy(args, optionsOrCb, cb) {
        const command = new PutRolePolicyCommand_1.PutRolePolicyCommand(args);
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
    putUserPermissionsBoundary(args, optionsOrCb, cb) {
        const command = new PutUserPermissionsBoundaryCommand_1.PutUserPermissionsBoundaryCommand(args);
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
    putUserPolicy(args, optionsOrCb, cb) {
        const command = new PutUserPolicyCommand_1.PutUserPolicyCommand(args);
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
    removeClientIDFromOpenIDConnectProvider(args, optionsOrCb, cb) {
        const command = new RemoveClientIDFromOpenIDConnectProviderCommand_1.RemoveClientIDFromOpenIDConnectProviderCommand(args);
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
    removeRoleFromInstanceProfile(args, optionsOrCb, cb) {
        const command = new RemoveRoleFromInstanceProfileCommand_1.RemoveRoleFromInstanceProfileCommand(args);
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
    removeUserFromGroup(args, optionsOrCb, cb) {
        const command = new RemoveUserFromGroupCommand_1.RemoveUserFromGroupCommand(args);
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
    resetServiceSpecificCredential(args, optionsOrCb, cb) {
        const command = new ResetServiceSpecificCredentialCommand_1.ResetServiceSpecificCredentialCommand(args);
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
    resyncMFADevice(args, optionsOrCb, cb) {
        const command = new ResyncMFADeviceCommand_1.ResyncMFADeviceCommand(args);
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
    setDefaultPolicyVersion(args, optionsOrCb, cb) {
        const command = new SetDefaultPolicyVersionCommand_1.SetDefaultPolicyVersionCommand(args);
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
    setSecurityTokenServicePreferences(args, optionsOrCb, cb) {
        const command = new SetSecurityTokenServicePreferencesCommand_1.SetSecurityTokenServicePreferencesCommand(args);
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
    simulateCustomPolicy(args, optionsOrCb, cb) {
        const command = new SimulateCustomPolicyCommand_1.SimulateCustomPolicyCommand(args);
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
    simulatePrincipalPolicy(args, optionsOrCb, cb) {
        const command = new SimulatePrincipalPolicyCommand_1.SimulatePrincipalPolicyCommand(args);
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
    tagRole(args, optionsOrCb, cb) {
        const command = new TagRoleCommand_1.TagRoleCommand(args);
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
    tagUser(args, optionsOrCb, cb) {
        const command = new TagUserCommand_1.TagUserCommand(args);
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
    untagRole(args, optionsOrCb, cb) {
        const command = new UntagRoleCommand_1.UntagRoleCommand(args);
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
    untagUser(args, optionsOrCb, cb) {
        const command = new UntagUserCommand_1.UntagUserCommand(args);
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
    updateAccessKey(args, optionsOrCb, cb) {
        const command = new UpdateAccessKeyCommand_1.UpdateAccessKeyCommand(args);
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
    updateAccountPasswordPolicy(args, optionsOrCb, cb) {
        const command = new UpdateAccountPasswordPolicyCommand_1.UpdateAccountPasswordPolicyCommand(args);
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
    updateAssumeRolePolicy(args, optionsOrCb, cb) {
        const command = new UpdateAssumeRolePolicyCommand_1.UpdateAssumeRolePolicyCommand(args);
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
    updateLoginProfile(args, optionsOrCb, cb) {
        const command = new UpdateLoginProfileCommand_1.UpdateLoginProfileCommand(args);
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
    updateOpenIDConnectProviderThumbprint(args, optionsOrCb, cb) {
        const command = new UpdateOpenIDConnectProviderThumbprintCommand_1.UpdateOpenIDConnectProviderThumbprintCommand(args);
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
    updateRole(args, optionsOrCb, cb) {
        const command = new UpdateRoleCommand_1.UpdateRoleCommand(args);
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
    updateRoleDescription(args, optionsOrCb, cb) {
        const command = new UpdateRoleDescriptionCommand_1.UpdateRoleDescriptionCommand(args);
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
    updateSAMLProvider(args, optionsOrCb, cb) {
        const command = new UpdateSAMLProviderCommand_1.UpdateSAMLProviderCommand(args);
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
    updateSSHPublicKey(args, optionsOrCb, cb) {
        const command = new UpdateSSHPublicKeyCommand_1.UpdateSSHPublicKeyCommand(args);
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
    updateServerCertificate(args, optionsOrCb, cb) {
        const command = new UpdateServerCertificateCommand_1.UpdateServerCertificateCommand(args);
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
    updateServiceSpecificCredential(args, optionsOrCb, cb) {
        const command = new UpdateServiceSpecificCredentialCommand_1.UpdateServiceSpecificCredentialCommand(args);
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
    updateSigningCertificate(args, optionsOrCb, cb) {
        const command = new UpdateSigningCertificateCommand_1.UpdateSigningCertificateCommand(args);
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
    updateUser(args, optionsOrCb, cb) {
        const command = new UpdateUserCommand_1.UpdateUserCommand(args);
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
    uploadSSHPublicKey(args, optionsOrCb, cb) {
        const command = new UploadSSHPublicKeyCommand_1.UploadSSHPublicKeyCommand(args);
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
    uploadServerCertificate(args, optionsOrCb, cb) {
        const command = new UploadServerCertificateCommand_1.UploadServerCertificateCommand(args);
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
    uploadSigningCertificate(args, optionsOrCb, cb) {
        const command = new UploadSigningCertificateCommand_1.UploadSigningCertificateCommand(args);
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
exports.IAM = IAM;
//# sourceMappingURL=IAM.js.map