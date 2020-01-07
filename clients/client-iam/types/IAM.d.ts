import { IAMClient } from "./IAMClient";
import { AddClientIDToOpenIDConnectProviderCommandInput, AddClientIDToOpenIDConnectProviderCommandOutput } from "./commands/AddClientIDToOpenIDConnectProviderCommand";
import { AddRoleToInstanceProfileCommandInput, AddRoleToInstanceProfileCommandOutput } from "./commands/AddRoleToInstanceProfileCommand";
import { AddUserToGroupCommandInput, AddUserToGroupCommandOutput } from "./commands/AddUserToGroupCommand";
import { AttachGroupPolicyCommandInput, AttachGroupPolicyCommandOutput } from "./commands/AttachGroupPolicyCommand";
import { AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput } from "./commands/AttachRolePolicyCommand";
import { AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput } from "./commands/AttachUserPolicyCommand";
import { ChangePasswordCommandInput, ChangePasswordCommandOutput } from "./commands/ChangePasswordCommand";
import { CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput } from "./commands/CreateAccessKeyCommand";
import { CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput } from "./commands/CreateAccountAliasCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput } from "./commands/CreateInstanceProfileCommand";
import { CreateLoginProfileCommandInput, CreateLoginProfileCommandOutput } from "./commands/CreateLoginProfileCommand";
import { CreateOpenIDConnectProviderCommandInput, CreateOpenIDConnectProviderCommandOutput } from "./commands/CreateOpenIDConnectProviderCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import { CreatePolicyVersionCommandInput, CreatePolicyVersionCommandOutput } from "./commands/CreatePolicyVersionCommand";
import { CreateRoleCommandInput, CreateRoleCommandOutput } from "./commands/CreateRoleCommand";
import { CreateSAMLProviderCommandInput, CreateSAMLProviderCommandOutput } from "./commands/CreateSAMLProviderCommand";
import { CreateServiceLinkedRoleCommandInput, CreateServiceLinkedRoleCommandOutput } from "./commands/CreateServiceLinkedRoleCommand";
import { CreateServiceSpecificCredentialCommandInput, CreateServiceSpecificCredentialCommandOutput } from "./commands/CreateServiceSpecificCredentialCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { CreateVirtualMFADeviceCommandInput, CreateVirtualMFADeviceCommandOutput } from "./commands/CreateVirtualMFADeviceCommand";
import { DeactivateMFADeviceCommandInput, DeactivateMFADeviceCommandOutput } from "./commands/DeactivateMFADeviceCommand";
import { DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput } from "./commands/DeleteAccessKeyCommand";
import { DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput } from "./commands/DeleteAccountAliasCommand";
import { DeleteAccountPasswordPolicyCommandInput, DeleteAccountPasswordPolicyCommandOutput } from "./commands/DeleteAccountPasswordPolicyCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput } from "./commands/DeleteGroupPolicyCommand";
import { DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput } from "./commands/DeleteInstanceProfileCommand";
import { DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput } from "./commands/DeleteLoginProfileCommand";
import { DeleteOpenIDConnectProviderCommandInput, DeleteOpenIDConnectProviderCommandOutput } from "./commands/DeleteOpenIDConnectProviderCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import { DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput } from "./commands/DeletePolicyVersionCommand";
import { DeleteRoleCommandInput, DeleteRoleCommandOutput } from "./commands/DeleteRoleCommand";
import { DeleteRolePermissionsBoundaryCommandInput, DeleteRolePermissionsBoundaryCommandOutput } from "./commands/DeleteRolePermissionsBoundaryCommand";
import { DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput } from "./commands/DeleteRolePolicyCommand";
import { DeleteSAMLProviderCommandInput, DeleteSAMLProviderCommandOutput } from "./commands/DeleteSAMLProviderCommand";
import { DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput } from "./commands/DeleteSSHPublicKeyCommand";
import { DeleteServerCertificateCommandInput, DeleteServerCertificateCommandOutput } from "./commands/DeleteServerCertificateCommand";
import { DeleteServiceLinkedRoleCommandInput, DeleteServiceLinkedRoleCommandOutput } from "./commands/DeleteServiceLinkedRoleCommand";
import { DeleteServiceSpecificCredentialCommandInput, DeleteServiceSpecificCredentialCommandOutput } from "./commands/DeleteServiceSpecificCredentialCommand";
import { DeleteSigningCertificateCommandInput, DeleteSigningCertificateCommandOutput } from "./commands/DeleteSigningCertificateCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DeleteUserPermissionsBoundaryCommandInput, DeleteUserPermissionsBoundaryCommandOutput } from "./commands/DeleteUserPermissionsBoundaryCommand";
import { DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput } from "./commands/DeleteUserPolicyCommand";
import { DeleteVirtualMFADeviceCommandInput, DeleteVirtualMFADeviceCommandOutput } from "./commands/DeleteVirtualMFADeviceCommand";
import { DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput } from "./commands/DetachGroupPolicyCommand";
import { DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput } from "./commands/DetachRolePolicyCommand";
import { DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput } from "./commands/DetachUserPolicyCommand";
import { EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput } from "./commands/EnableMFADeviceCommand";
import { GenerateCredentialReportCommandInput, GenerateCredentialReportCommandOutput } from "./commands/GenerateCredentialReportCommand";
import { GenerateOrganizationsAccessReportCommandInput, GenerateOrganizationsAccessReportCommandOutput } from "./commands/GenerateOrganizationsAccessReportCommand";
import { GenerateServiceLastAccessedDetailsCommandInput, GenerateServiceLastAccessedDetailsCommandOutput } from "./commands/GenerateServiceLastAccessedDetailsCommand";
import { GetAccessKeyLastUsedCommandInput, GetAccessKeyLastUsedCommandOutput } from "./commands/GetAccessKeyLastUsedCommand";
import { GetAccountAuthorizationDetailsCommandInput, GetAccountAuthorizationDetailsCommandOutput } from "./commands/GetAccountAuthorizationDetailsCommand";
import { GetAccountPasswordPolicyCommandInput, GetAccountPasswordPolicyCommandOutput } from "./commands/GetAccountPasswordPolicyCommand";
import { GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput } from "./commands/GetAccountSummaryCommand";
import { GetContextKeysForCustomPolicyCommandInput, GetContextKeysForCustomPolicyCommandOutput } from "./commands/GetContextKeysForCustomPolicyCommand";
import { GetContextKeysForPrincipalPolicyCommandInput, GetContextKeysForPrincipalPolicyCommandOutput } from "./commands/GetContextKeysForPrincipalPolicyCommand";
import { GetCredentialReportCommandInput, GetCredentialReportCommandOutput } from "./commands/GetCredentialReportCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetGroupPolicyCommandInput, GetGroupPolicyCommandOutput } from "./commands/GetGroupPolicyCommand";
import { GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput } from "./commands/GetInstanceProfileCommand";
import { GetLoginProfileCommandInput, GetLoginProfileCommandOutput } from "./commands/GetLoginProfileCommand";
import { GetOpenIDConnectProviderCommandInput, GetOpenIDConnectProviderCommandOutput } from "./commands/GetOpenIDConnectProviderCommand";
import { GetOrganizationsAccessReportCommandInput, GetOrganizationsAccessReportCommandOutput } from "./commands/GetOrganizationsAccessReportCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput } from "./commands/GetPolicyVersionCommand";
import { GetRoleCommandInput, GetRoleCommandOutput } from "./commands/GetRoleCommand";
import { GetRolePolicyCommandInput, GetRolePolicyCommandOutput } from "./commands/GetRolePolicyCommand";
import { GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput } from "./commands/GetSAMLProviderCommand";
import { GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput } from "./commands/GetSSHPublicKeyCommand";
import { GetServerCertificateCommandInput, GetServerCertificateCommandOutput } from "./commands/GetServerCertificateCommand";
import { GetServiceLastAccessedDetailsCommandInput, GetServiceLastAccessedDetailsCommandOutput } from "./commands/GetServiceLastAccessedDetailsCommand";
import { GetServiceLastAccessedDetailsWithEntitiesCommandInput, GetServiceLastAccessedDetailsWithEntitiesCommandOutput } from "./commands/GetServiceLastAccessedDetailsWithEntitiesCommand";
import { GetServiceLinkedRoleDeletionStatusCommandInput, GetServiceLinkedRoleDeletionStatusCommandOutput } from "./commands/GetServiceLinkedRoleDeletionStatusCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import { GetUserPolicyCommandInput, GetUserPolicyCommandOutput } from "./commands/GetUserPolicyCommand";
import { ListAccessKeysCommandInput, ListAccessKeysCommandOutput } from "./commands/ListAccessKeysCommand";
import { ListAccountAliasesCommandInput, ListAccountAliasesCommandOutput } from "./commands/ListAccountAliasesCommand";
import { ListAttachedGroupPoliciesCommandInput, ListAttachedGroupPoliciesCommandOutput } from "./commands/ListAttachedGroupPoliciesCommand";
import { ListAttachedRolePoliciesCommandInput, ListAttachedRolePoliciesCommandOutput } from "./commands/ListAttachedRolePoliciesCommand";
import { ListAttachedUserPoliciesCommandInput, ListAttachedUserPoliciesCommandOutput } from "./commands/ListAttachedUserPoliciesCommand";
import { ListEntitiesForPolicyCommandInput, ListEntitiesForPolicyCommandOutput } from "./commands/ListEntitiesForPolicyCommand";
import { ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput } from "./commands/ListGroupPoliciesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput } from "./commands/ListGroupsForUserCommand";
import { ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput } from "./commands/ListInstanceProfilesCommand";
import { ListInstanceProfilesForRoleCommandInput, ListInstanceProfilesForRoleCommandOutput } from "./commands/ListInstanceProfilesForRoleCommand";
import { ListMFADevicesCommandInput, ListMFADevicesCommandOutput } from "./commands/ListMFADevicesCommand";
import { ListOpenIDConnectProvidersCommandInput, ListOpenIDConnectProvidersCommandOutput } from "./commands/ListOpenIDConnectProvidersCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import { ListPoliciesGrantingServiceAccessCommandInput, ListPoliciesGrantingServiceAccessCommandOutput } from "./commands/ListPoliciesGrantingServiceAccessCommand";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "./commands/ListPolicyVersionsCommand";
import { ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput } from "./commands/ListRolePoliciesCommand";
import { ListRoleTagsCommandInput, ListRoleTagsCommandOutput } from "./commands/ListRoleTagsCommand";
import { ListRolesCommandInput, ListRolesCommandOutput } from "./commands/ListRolesCommand";
import { ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput } from "./commands/ListSAMLProvidersCommand";
import { ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput } from "./commands/ListSSHPublicKeysCommand";
import { ListServerCertificatesCommandInput, ListServerCertificatesCommandOutput } from "./commands/ListServerCertificatesCommand";
import { ListServiceSpecificCredentialsCommandInput, ListServiceSpecificCredentialsCommandOutput } from "./commands/ListServiceSpecificCredentialsCommand";
import { ListSigningCertificatesCommandInput, ListSigningCertificatesCommandOutput } from "./commands/ListSigningCertificatesCommand";
import { ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput } from "./commands/ListUserPoliciesCommand";
import { ListUserTagsCommandInput, ListUserTagsCommandOutput } from "./commands/ListUserTagsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { ListVirtualMFADevicesCommandInput, ListVirtualMFADevicesCommandOutput } from "./commands/ListVirtualMFADevicesCommand";
import { PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput } from "./commands/PutGroupPolicyCommand";
import { PutRolePermissionsBoundaryCommandInput, PutRolePermissionsBoundaryCommandOutput } from "./commands/PutRolePermissionsBoundaryCommand";
import { PutRolePolicyCommandInput, PutRolePolicyCommandOutput } from "./commands/PutRolePolicyCommand";
import { PutUserPermissionsBoundaryCommandInput, PutUserPermissionsBoundaryCommandOutput } from "./commands/PutUserPermissionsBoundaryCommand";
import { PutUserPolicyCommandInput, PutUserPolicyCommandOutput } from "./commands/PutUserPolicyCommand";
import { RemoveClientIDFromOpenIDConnectProviderCommandInput, RemoveClientIDFromOpenIDConnectProviderCommandOutput } from "./commands/RemoveClientIDFromOpenIDConnectProviderCommand";
import { RemoveRoleFromInstanceProfileCommandInput, RemoveRoleFromInstanceProfileCommandOutput } from "./commands/RemoveRoleFromInstanceProfileCommand";
import { RemoveUserFromGroupCommandInput, RemoveUserFromGroupCommandOutput } from "./commands/RemoveUserFromGroupCommand";
import { ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput } from "./commands/ResetServiceSpecificCredentialCommand";
import { ResyncMFADeviceCommandInput, ResyncMFADeviceCommandOutput } from "./commands/ResyncMFADeviceCommand";
import { SetDefaultPolicyVersionCommandInput, SetDefaultPolicyVersionCommandOutput } from "./commands/SetDefaultPolicyVersionCommand";
import { SetSecurityTokenServicePreferencesCommandInput, SetSecurityTokenServicePreferencesCommandOutput } from "./commands/SetSecurityTokenServicePreferencesCommand";
import { SimulateCustomPolicyCommandInput, SimulateCustomPolicyCommandOutput } from "./commands/SimulateCustomPolicyCommand";
import { SimulatePrincipalPolicyCommandInput, SimulatePrincipalPolicyCommandOutput } from "./commands/SimulatePrincipalPolicyCommand";
import { TagRoleCommandInput, TagRoleCommandOutput } from "./commands/TagRoleCommand";
import { TagUserCommandInput, TagUserCommandOutput } from "./commands/TagUserCommand";
import { UntagRoleCommandInput, UntagRoleCommandOutput } from "./commands/UntagRoleCommand";
import { UntagUserCommandInput, UntagUserCommandOutput } from "./commands/UntagUserCommand";
import { UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput } from "./commands/UpdateAccessKeyCommand";
import { UpdateAccountPasswordPolicyCommandInput, UpdateAccountPasswordPolicyCommandOutput } from "./commands/UpdateAccountPasswordPolicyCommand";
import { UpdateAssumeRolePolicyCommandInput, UpdateAssumeRolePolicyCommandOutput } from "./commands/UpdateAssumeRolePolicyCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput } from "./commands/UpdateLoginProfileCommand";
import { UpdateOpenIDConnectProviderThumbprintCommandInput, UpdateOpenIDConnectProviderThumbprintCommandOutput } from "./commands/UpdateOpenIDConnectProviderThumbprintCommand";
import { UpdateRoleCommandInput, UpdateRoleCommandOutput } from "./commands/UpdateRoleCommand";
import { UpdateRoleDescriptionCommandInput, UpdateRoleDescriptionCommandOutput } from "./commands/UpdateRoleDescriptionCommand";
import { UpdateSAMLProviderCommandInput, UpdateSAMLProviderCommandOutput } from "./commands/UpdateSAMLProviderCommand";
import { UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput } from "./commands/UpdateSSHPublicKeyCommand";
import { UpdateServerCertificateCommandInput, UpdateServerCertificateCommandOutput } from "./commands/UpdateServerCertificateCommand";
import { UpdateServiceSpecificCredentialCommandInput, UpdateServiceSpecificCredentialCommandOutput } from "./commands/UpdateServiceSpecificCredentialCommand";
import { UpdateSigningCertificateCommandInput, UpdateSigningCertificateCommandOutput } from "./commands/UpdateSigningCertificateCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput } from "./commands/UploadSSHPublicKeyCommand";
import { UploadServerCertificateCommandInput, UploadServerCertificateCommandOutput } from "./commands/UploadServerCertificateCommand";
import { UploadSigningCertificateCommandInput, UploadSigningCertificateCommandOutput } from "./commands/UploadSigningCertificateCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class IAM extends IAMClient {
    /**
     * <p>Adds a new client ID (also known as audience) to the list of client IDs already
     *          registered for the specified IAM OpenID Connect (OIDC) provider resource.</p>
     *          <p>This operation is idempotent; it does not fail or return an error if you add an existing
     *          client ID to the provider.</p>
     */
    addClientIDToOpenIDConnectProvider(args: AddClientIDToOpenIDConnectProviderCommandInput, options?: __HttpHandlerOptions): Promise<AddClientIDToOpenIDConnectProviderCommandOutput>;
    addClientIDToOpenIDConnectProvider(args: AddClientIDToOpenIDConnectProviderCommandInput, cb: (err: any, data?: AddClientIDToOpenIDConnectProviderCommandOutput) => void): void;
    addClientIDToOpenIDConnectProvider(args: AddClientIDToOpenIDConnectProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddClientIDToOpenIDConnectProviderCommandOutput) => void): void;
    /**
     * <p>Adds the specified IAM role to the specified instance profile. An instance profile can
     *          contain only one role, and this limit cannot be increased. You can remove the existing role
     *          and then add a different role to an instance profile. You must then wait for the change to
     *          appear across all of AWS because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>.
     *          To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate
     *             the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the
     *             instance profile</a>, or you can stop your instance and then restart it.</p>
     *          <note>
     *             <p>The caller of this API must be granted the <code>PassRole</code> permission on the
     *             IAM role by a permissions policy.</p>
     *          </note>
     *          <p>For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>. For more
     *          information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p>
     */
    addRoleToInstanceProfile(args: AddRoleToInstanceProfileCommandInput, options?: __HttpHandlerOptions): Promise<AddRoleToInstanceProfileCommandOutput>;
    addRoleToInstanceProfile(args: AddRoleToInstanceProfileCommandInput, cb: (err: any, data?: AddRoleToInstanceProfileCommandOutput) => void): void;
    addRoleToInstanceProfile(args: AddRoleToInstanceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddRoleToInstanceProfileCommandOutput) => void): void;
    /**
     * <p>Adds the specified user to the specified group.</p>
     */
    addUserToGroup(args: AddUserToGroupCommandInput, options?: __HttpHandlerOptions): Promise<AddUserToGroupCommandOutput>;
    addUserToGroup(args: AddUserToGroupCommandInput, cb: (err: any, data?: AddUserToGroupCommandOutput) => void): void;
    addUserToGroup(args: AddUserToGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddUserToGroupCommandOutput) => void): void;
    /**
     * <p>Attaches the specified managed policy to the specified IAM group.</p>
     *          <p>You use this API to attach a managed policy to a group. To embed an inline policy in a
     *          group, use <a>PutGroupPolicy</a>.</p>
     *          <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    attachGroupPolicy(args: AttachGroupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<AttachGroupPolicyCommandOutput>;
    attachGroupPolicy(args: AttachGroupPolicyCommandInput, cb: (err: any, data?: AttachGroupPolicyCommandOutput) => void): void;
    attachGroupPolicy(args: AttachGroupPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachGroupPolicyCommandOutput) => void): void;
    /**
     * <p>Attaches the specified managed policy to the specified IAM role. When you attach a
     *          managed policy to a role, the managed policy becomes part of the role's permission (access)
     *          policy.</p>
     *          <note>
     *             <p>You cannot use a managed policy as the role's trust policy. The role's trust policy
     *             is created at the same time as the role, using <a>CreateRole</a>. You can
     *             update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p>
     *          </note>
     *          <p>Use this API to attach a <i>managed</i> policy to a role. To embed an
     *          inline policy in a role, use <a>PutRolePolicy</a>. For more information about
     *          policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    attachRolePolicy(args: AttachRolePolicyCommandInput, options?: __HttpHandlerOptions): Promise<AttachRolePolicyCommandOutput>;
    attachRolePolicy(args: AttachRolePolicyCommandInput, cb: (err: any, data?: AttachRolePolicyCommandOutput) => void): void;
    attachRolePolicy(args: AttachRolePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachRolePolicyCommandOutput) => void): void;
    /**
     * <p>Attaches the specified managed policy to the specified user.</p>
     *          <p>You use this API to attach a <i>managed</i> policy to a user. To embed an
     *          inline policy in a user, use <a>PutUserPolicy</a>.</p>
     *          <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    attachUserPolicy(args: AttachUserPolicyCommandInput, options?: __HttpHandlerOptions): Promise<AttachUserPolicyCommandOutput>;
    attachUserPolicy(args: AttachUserPolicyCommandInput, cb: (err: any, data?: AttachUserPolicyCommandOutput) => void): void;
    attachUserPolicy(args: AttachUserPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachUserPolicyCommandOutput) => void): void;
    /**
     * <p>Changes the password of the IAM user who is calling this operation. The AWS account
     *          root user password is not affected by this operation.</p>
     *          <p>To change the password for a different user, see <a>UpdateLoginProfile</a>.
     *          For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing Passwords</a> in the
     *             <i>IAM User Guide</i>.</p>
     */
    changePassword(args: ChangePasswordCommandInput, options?: __HttpHandlerOptions): Promise<ChangePasswordCommandOutput>;
    changePassword(args: ChangePasswordCommandInput, cb: (err: any, data?: ChangePasswordCommandOutput) => void): void;
    changePassword(args: ChangePasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ChangePasswordCommandOutput) => void): void;
    /**
     * <p> Creates a new AWS secret access key and corresponding AWS access key ID for the
     *          specified user. The default status for new keys is <code>Active</code>.</p>
     *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
     *          the AWS access key ID signing the request. This operation works for access keys under the
     *          AWS account. Consequently, you can use this operation to manage AWS account root user
     *          credentials. This is true even if the AWS account has no associated users.</p>
     *          <p> For information about limits on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on
     *             IAM Entities</a> in the <i>IAM User Guide</i>.</p>
     *          <important>
     *             <p>To ensure the security of your AWS account, the secret access key is accessible
     *             only during key and user creation. You must save the key (for example, in a text file)
     *             if you want to be able to access it again. If a secret key is lost, you can delete the
     *             access keys for the associated user and then create new keys.</p>
     *          </important>
     */
    createAccessKey(args: CreateAccessKeyCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccessKeyCommandOutput>;
    createAccessKey(args: CreateAccessKeyCommandInput, cb: (err: any, data?: CreateAccessKeyCommandOutput) => void): void;
    createAccessKey(args: CreateAccessKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAccessKeyCommandOutput) => void): void;
    /**
     * <p>Creates an alias for your AWS account. For information about using an AWS account
     *          alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an
     *             Alias for Your AWS Account ID</a> in the
     *          <i>IAM User Guide</i>.</p>
     */
    createAccountAlias(args: CreateAccountAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccountAliasCommandOutput>;
    createAccountAlias(args: CreateAccountAliasCommandInput, cb: (err: any, data?: CreateAccountAliasCommandOutput) => void): void;
    createAccountAlias(args: CreateAccountAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAccountAliasCommandOutput) => void): void;
    /**
     * <p>Creates a new group.</p>
     *          <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on
     *             IAM Entities</a> in the <i>IAM User Guide</i>.</p>
     */
    createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
    createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    createGroup(args: CreateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    /**
     * <p> Creates a new instance profile. For information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance
     *             Profiles</a>.</p>
     *          <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on
     *             IAM Entities</a> in the <i>IAM User Guide</i>.</p>
     */
    createInstanceProfile(args: CreateInstanceProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstanceProfileCommandOutput>;
    createInstanceProfile(args: CreateInstanceProfileCommandInput, cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void): void;
    createInstanceProfile(args: CreateInstanceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void): void;
    /**
     * <p> Creates a password for the specified user, giving the user the ability to access AWS
     *          services through the AWS Management Console. For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing
     *             Passwords</a> in the <i>IAM User Guide</i>.</p>
     */
    createLoginProfile(args: CreateLoginProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateLoginProfileCommandOutput>;
    createLoginProfile(args: CreateLoginProfileCommandInput, cb: (err: any, data?: CreateLoginProfileCommandOutput) => void): void;
    createLoginProfile(args: CreateLoginProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLoginProfileCommandOutput) => void): void;
    /**
     * <p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p>
     *          <p>The OIDC provider that you create with this operation can be used as a principal in a
     *          role's trust policy. Such a policy establishes a trust relationship between AWS and the
     *          OIDC provider.</p>
     *          <p>When you create the IAM OIDC provider, you specify the following:</p>
     *          <ul>
     *             <li>
     *                <p>The URL of the OIDC identity provider (IdP) to trust</p>
     *             </li>
     *             <li>
     *                <p>A list of client IDs (also known as audiences) that identify the application or
     *                applications that are allowed to authenticate using the OIDC provider</p>
     *             </li>
     *             <li>
     *                <p>A list of thumbprints of the server certificate(s) that the IdP uses</p>
     *             </li>
     *          </ul>
     *          <p>You get all of this information from the OIDC IdP that you want to use to access
     *          AWS.</p>
     *          <note>
     *             <p>The trust for the OIDC provider is derived from the IAM provider that this
     *             operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged users.</p>
     *          </note>
     */
    createOpenIDConnectProvider(args: CreateOpenIDConnectProviderCommandInput, options?: __HttpHandlerOptions): Promise<CreateOpenIDConnectProviderCommandOutput>;
    createOpenIDConnectProvider(args: CreateOpenIDConnectProviderCommandInput, cb: (err: any, data?: CreateOpenIDConnectProviderCommandOutput) => void): void;
    createOpenIDConnectProvider(args: CreateOpenIDConnectProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOpenIDConnectProviderCommandOutput) => void): void;
    /**
     * <p>Creates a new managed policy for your AWS account.</p>
     *          <p>This operation creates a policy version with a version identifier of <code>v1</code> and
     *          sets v1 as the policy's default version. For more information about policy versions, see
     *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     *          <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    createPolicy(args: CreatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreatePolicyCommandOutput>;
    createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
    createPolicy(args: CreatePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
    /**
     * <p>Creates a new version of the specified managed policy. To update a managed policy, you
     *          create a new policy version. A managed policy can have up to five versions. If the policy
     *          has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p>
     *          <p>Optionally, you can set the new version as the policy's default version. The default
     *          version is the version that is in effect for the IAM users, groups, and roles to which
     *          the policy is attached.</p>
     *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    createPolicyVersion(args: CreatePolicyVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreatePolicyVersionCommandOutput>;
    createPolicyVersion(args: CreatePolicyVersionCommandInput, cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void): void;
    createPolicyVersion(args: CreatePolicyVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void): void;
    /**
     * <p>Creates a new role for your AWS account. For more information about roles, go to
     *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM
     *             Roles</a>. For information about limitations on role names and the number of roles
     *          you can create, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in
     *          the <i>IAM User Guide</i>.</p>
     */
    createRole(args: CreateRoleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoleCommandOutput>;
    createRole(args: CreateRoleCommandInput, cb: (err: any, data?: CreateRoleCommandOutput) => void): void;
    createRole(args: CreateRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRoleCommandOutput) => void): void;
    /**
     * <p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML
     *          2.0.</p>
     *          <p>The SAML provider resource that you create with this operation can be used as a
     *          principal in an IAM role's trust policy. Such a policy can enable federated users who
     *          sign in using the SAML IdP to assume the role. You can create an IAM role that supports
     *          Web-based single sign-on (SSO) to the AWS Management Console or one that supports API access to
     *          AWS.</p>
     *          <p>When you create the SAML provider resource, you upload a SAML metadata document that you
     *          get from your IdP. That document includes the issuer's name, expiration information, and
     *          keys that can be used to validate the SAML authentication response (assertions) that the
     *          IdP sends. You must generate the metadata document using the identity management software
     *          that is used as your organization's IdP.</p>
     *          <note>
     *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
     *          </note>
     *          <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0
     *             Federated Users to Access the AWS Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
     *             Federation</a> in the <i>IAM User Guide</i>.</p>
     */
    createSAMLProvider(args: CreateSAMLProviderCommandInput, options?: __HttpHandlerOptions): Promise<CreateSAMLProviderCommandOutput>;
    createSAMLProvider(args: CreateSAMLProviderCommandInput, cb: (err: any, data?: CreateSAMLProviderCommandOutput) => void): void;
    createSAMLProvider(args: CreateSAMLProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSAMLProviderCommandOutput) => void): void;
    /**
     * <p>Creates an IAM role that is linked to a specific AWS service. The service controls
     *          the attached policies and when the role can be deleted. This helps ensure that the service
     *          is not broken by an unexpectedly changed or deleted role, which could put your AWS
     *          resources into an unknown state. Allowing the service to control the role helps improve
     *          service stability and proper cleanup when a service and its role are no longer needed. For
     *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using Service-Linked Roles</a>
     *          in the <i>IAM User Guide</i>. </p>
     *          <p>To attach a policy to this service-linked role, you must make the request using the
     *          AWS service that depends on this role.</p>
     */
    createServiceLinkedRole(args: CreateServiceLinkedRoleCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceLinkedRoleCommandOutput>;
    createServiceLinkedRole(args: CreateServiceLinkedRoleCommandInput, cb: (err: any, data?: CreateServiceLinkedRoleCommandOutput) => void): void;
    createServiceLinkedRole(args: CreateServiceLinkedRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateServiceLinkedRoleCommandOutput) => void): void;
    /**
     * <p>Generates a set of credentials consisting of a user name and password that can be used
     *          to access the service specified in the request. These credentials are generated by IAM,
     *          and can be used only for the specified service. </p>
     *          <p>You can have a maximum of two sets of service-specific credentials for each supported
     *          service per user.</p>
     *          <p>The only supported service at this time is AWS CodeCommit.</p>
     *          <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p>
     *          <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with AWS CodeCommit: Git
     *             Credentials, SSH Keys, and AWS Access Keys</a> in the
     *             <i>IAM User Guide</i>.</p>
     */
    createServiceSpecificCredential(args: CreateServiceSpecificCredentialCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceSpecificCredentialCommandOutput>;
    createServiceSpecificCredential(args: CreateServiceSpecificCredentialCommandInput, cb: (err: any, data?: CreateServiceSpecificCredentialCommandOutput) => void): void;
    createServiceSpecificCredential(args: CreateServiceSpecificCredentialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateServiceSpecificCredentialCommandOutput) => void): void;
    /**
     * <p>Creates a new IAM user for your AWS account.</p>
     *          <p> For information about limitations on the number of IAM users you can create, see
     *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations
     *             on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
     */
    createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
    createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    createUser(args: CreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    /**
     * <p>Creates a new virtual MFA device for the AWS account. After creating the virtual MFA,
     *          use <a>EnableMFADevice</a> to attach the MFA device to an IAM user. For more
     *          information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a Virtual MFA
     *             Device</a> in the <i>IAM User Guide</i>.</p>
     *          <p>For information about limits on the number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on
     *             Entities</a> in the <i>IAM User Guide</i>.</p>
     *          <important>
     *             <p>The seed information contained in the QR code and the Base32 string should be treated
     *             like any other secret access information. In other words, protect the seed information
     *             as you would your AWS access keys or your passwords. After you provision your virtual
     *             device, you should ensure that the information is destroyed following secure
     *             procedures.</p>
     *          </important>
     */
    createVirtualMFADevice(args: CreateVirtualMFADeviceCommandInput, options?: __HttpHandlerOptions): Promise<CreateVirtualMFADeviceCommandOutput>;
    createVirtualMFADevice(args: CreateVirtualMFADeviceCommandInput, cb: (err: any, data?: CreateVirtualMFADeviceCommandOutput) => void): void;
    createVirtualMFADevice(args: CreateVirtualMFADeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVirtualMFADeviceCommandOutput) => void): void;
    /**
     * <p>Deactivates the specified MFA device and removes it from association with the user name
     *          for which it was originally enabled.</p>
     *          <p>For more information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a Virtual
     *             Multi-factor Authentication (MFA) Device</a> in the
     *             <i>IAM User Guide</i>.</p>
     */
    deactivateMFADevice(args: DeactivateMFADeviceCommandInput, options?: __HttpHandlerOptions): Promise<DeactivateMFADeviceCommandOutput>;
    deactivateMFADevice(args: DeactivateMFADeviceCommandInput, cb: (err: any, data?: DeactivateMFADeviceCommandOutput) => void): void;
    deactivateMFADevice(args: DeactivateMFADeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeactivateMFADeviceCommandOutput) => void): void;
    /**
     * <p>Deletes the access key pair associated with the specified IAM user.</p>
     *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
     *          the AWS access key ID signing the request. This operation works for access keys under the
     *          AWS account. Consequently, you can use this operation to manage AWS account root user
     *          credentials even if the AWS account has no associated users.</p>
     */
    deleteAccessKey(args: DeleteAccessKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessKeyCommandOutput>;
    deleteAccessKey(args: DeleteAccessKeyCommandInput, cb: (err: any, data?: DeleteAccessKeyCommandOutput) => void): void;
    deleteAccessKey(args: DeleteAccessKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccessKeyCommandOutput) => void): void;
    /**
     * <p> Deletes the specified AWS account alias. For information about using an AWS account
     *          alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an
     *             Alias for Your AWS Account ID</a> in the
     *          <i>IAM User Guide</i>.</p>
     */
    deleteAccountAlias(args: DeleteAccountAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccountAliasCommandOutput>;
    deleteAccountAlias(args: DeleteAccountAliasCommandInput, cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void): void;
    deleteAccountAlias(args: DeleteAccountAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void): void;
    /**
     * <p>Deletes the password policy for the AWS account. There are no parameters.</p>
     */
    deleteAccountPasswordPolicy(args: DeleteAccountPasswordPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccountPasswordPolicyCommandOutput>;
    deleteAccountPasswordPolicy(args: DeleteAccountPasswordPolicyCommandInput, cb: (err: any, data?: DeleteAccountPasswordPolicyCommandOutput) => void): void;
    deleteAccountPasswordPolicy(args: DeleteAccountPasswordPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccountPasswordPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified IAM group. The group must not contain any users or have any
     *          attached policies.</p>
     */
    deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
    deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    deleteGroup(args: DeleteGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified inline policy that is embedded in the specified IAM
     *          group.</p>
     *          <p>A group can also have managed policies attached to it. To detach a managed policy from a
     *          group, use <a>DetachGroupPolicy</a>. For more information about policies, refer
     *          to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
     *             Policies and Inline Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     */
    deleteGroupPolicy(args: DeleteGroupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupPolicyCommandOutput>;
    deleteGroupPolicy(args: DeleteGroupPolicyCommandInput, cb: (err: any, data?: DeleteGroupPolicyCommandOutput) => void): void;
    deleteGroupPolicy(args: DeleteGroupPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGroupPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified instance profile. The instance profile must not have an associated
     *          role.</p>
     *          <important>
     *             <p>Make sure that you do not have any Amazon EC2 instances running with the instance
     *             profile you are about to delete. Deleting a role or instance profile that is associated
     *             with a running instance will break any applications running on the instance.</p>
     *          </important>
     *          <p>For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p>
     */
    deleteInstanceProfile(args: DeleteInstanceProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInstanceProfileCommandOutput>;
    deleteInstanceProfile(args: DeleteInstanceProfileCommandInput, cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void): void;
    deleteInstanceProfile(args: DeleteInstanceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void): void;
    /**
     * <p>Deletes the password for the specified IAM user, which terminates the user's ability
     *          to access AWS services through the AWS Management Console.</p>
     *          <important>
     *             <p> Deleting a user's password does not prevent a user from accessing AWS through the
     *             command line interface or the API. To prevent all user access, you must also either make
     *             any access keys inactive or delete them. For more information about making keys inactive
     *             or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>. </p>
     *          </important>
     */
    deleteLoginProfile(args: DeleteLoginProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLoginProfileCommandOutput>;
    deleteLoginProfile(args: DeleteLoginProfileCommandInput, cb: (err: any, data?: DeleteLoginProfileCommandOutput) => void): void;
    deleteLoginProfile(args: DeleteLoginProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLoginProfileCommandOutput) => void): void;
    /**
     * <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p>
     *          <p>Deleting an IAM OIDC provider resource does not update any roles that reference the
     *          provider as a principal in their trust policies. Any attempt to assume a role that
     *          references a deleted provider fails.</p>
     *          <p>This operation is idempotent; it does not fail or return an error if you call the
     *          operation for a provider that does not exist.</p>
     */
    deleteOpenIDConnectProvider(args: DeleteOpenIDConnectProviderCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOpenIDConnectProviderCommandOutput>;
    deleteOpenIDConnectProvider(args: DeleteOpenIDConnectProviderCommandInput, cb: (err: any, data?: DeleteOpenIDConnectProviderCommandOutput) => void): void;
    deleteOpenIDConnectProvider(args: DeleteOpenIDConnectProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOpenIDConnectProviderCommandOutput) => void): void;
    /**
     * <p>Deletes the specified managed policy.</p>
     *          <p>Before you can delete a managed policy, you must first detach the policy from all users,
     *          groups, and roles that it is attached to. In addition, you must delete all the policy's
     *          versions. The following steps describe the process for deleting a managed policy:</p>
     *          <ul>
     *             <li>
     *                <p>Detach the policy from all users, groups, and roles that the policy is attached
     *                to, using the <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a> API operations. To list all the users,
     *                groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p>
     *             </li>
     *             <li>
     *                <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To
     *                list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use
     *                   <a>DeletePolicyVersion</a> to delete the version that is marked as the
     *                default version. You delete the policy's default version in the next step of the
     *                process.</p>
     *             </li>
     *             <li>
     *                <p>Delete the policy (this automatically deletes the policy's default version) using
     *                this API.</p>
     *             </li>
     *          </ul>
     *          <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
    deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
    deletePolicy(args: DeletePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified version from the specified managed policy.</p>
     *          <p>You cannot delete the default version from a policy using this API. To delete the
     *          default version from a policy, use <a>DeletePolicy</a>. To find out which
     *          version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p>
     *          <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    deletePolicyVersion(args: DeletePolicyVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyVersionCommandOutput>;
    deletePolicyVersion(args: DeletePolicyVersionCommandInput, cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void): void;
    deletePolicyVersion(args: DeletePolicyVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified role. The role must not have any policies attached. For more
     *          information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>.</p>
     *          <important>
     *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you are
     *             about to delete. Deleting a role or instance profile that is associated with a running
     *             instance will break any applications running on the instance.</p>
     *          </important>
     */
    deleteRole(args: DeleteRoleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoleCommandOutput>;
    deleteRole(args: DeleteRoleCommandInput, cb: (err: any, data?: DeleteRoleCommandOutput) => void): void;
    deleteRole(args: DeleteRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRoleCommandOutput) => void): void;
    /**
     * <p>Deletes the permissions boundary for the specified IAM role. </p>
     *          <important>
     *             <p>Deleting the permissions boundary for a role might increase its permissions. For
     *             example, it might allow anyone who assumes the role to perform all the actions granted
     *             in its permissions policies. </p>
     *          </important>
     */
    deleteRolePermissionsBoundary(args: DeleteRolePermissionsBoundaryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRolePermissionsBoundaryCommandOutput>;
    deleteRolePermissionsBoundary(args: DeleteRolePermissionsBoundaryCommandInput, cb: (err: any, data?: DeleteRolePermissionsBoundaryCommandOutput) => void): void;
    deleteRolePermissionsBoundary(args: DeleteRolePermissionsBoundaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRolePermissionsBoundaryCommandOutput) => void): void;
    /**
     * <p>Deletes the specified inline policy that is embedded in the specified IAM role.</p>
     *          <p>A role can also have managed policies attached to it. To detach a managed policy from a
     *          role, use <a>DetachRolePolicy</a>. For more information about policies, refer to
     *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
     *             Policies and Inline Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     */
    deleteRolePolicy(args: DeleteRolePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRolePolicyCommandOutput>;
    deleteRolePolicy(args: DeleteRolePolicyCommandInput, cb: (err: any, data?: DeleteRolePolicyCommandOutput) => void): void;
    deleteRolePolicy(args: DeleteRolePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRolePolicyCommandOutput) => void): void;
    /**
     * <p>Deletes a SAML provider resource in IAM.</p>
     *          <p>Deleting the provider resource from IAM does not update any roles that reference the
     *          SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume
     *          a role that references a non-existent provider resource ARN fails.</p>
     *          <note>
     *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
     *          </note>
     */
    deleteSAMLProvider(args: DeleteSAMLProviderCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSAMLProviderCommandOutput>;
    deleteSAMLProvider(args: DeleteSAMLProviderCommandInput, cb: (err: any, data?: DeleteSAMLProviderCommandOutput) => void): void;
    deleteSAMLProvider(args: DeleteSAMLProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSAMLProviderCommandOutput) => void): void;
    /**
     * <p>Deletes the specified SSH public key.</p>
     *          <p>The SSH public key deleted by this operation is used only for authenticating the
     *          associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to
     *          authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH
     *             Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
     */
    deleteSSHPublicKey(args: DeleteSSHPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSSHPublicKeyCommandOutput>;
    deleteSSHPublicKey(args: DeleteSSHPublicKeyCommandInput, cb: (err: any, data?: DeleteSSHPublicKeyCommandOutput) => void): void;
    deleteSSHPublicKey(args: DeleteSSHPublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSSHPublicKeyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified server certificate.</p>
     *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with
     *             Server Certificates</a> in the <i>IAM User Guide</i>. This topic
     *          also includes a list of AWS services that can use the server certificates that you manage
     *          with IAM.</p>
     *          <important>
     *             <p> If you are using a server certificate with Elastic Load Balancing, deleting the
     *             certificate could have implications for your application. If Elastic Load Balancing
     *             doesn't detect the deletion of bound certificates, it may continue to use the
     *             certificates. This could cause Elastic Load Balancing to stop accepting traffic. We
     *             recommend that you remove the reference to the certificate from Elastic Load Balancing
     *             before using this command to delete the certificate. For more information, go to <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API
     *                Reference</i>.</p>
     *          </important>
     */
    deleteServerCertificate(args: DeleteServerCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServerCertificateCommandOutput>;
    deleteServerCertificate(args: DeleteServerCertificateCommandInput, cb: (err: any, data?: DeleteServerCertificateCommandOutput) => void): void;
    deleteServerCertificate(args: DeleteServerCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServerCertificateCommandOutput) => void): void;
    /**
     * <p>Submits a service-linked role deletion request and returns a
     *          <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before
     *          you call this operation, confirm that the role has no active sessions and that any
     *          resources used by the role in the linked service are deleted. If you call this operation
     *          more than once for the same service-linked role and an earlier deletion task is not
     *          complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p>
     *          <p>If you submit a deletion request for a service-linked role whose linked service is still
     *          accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> API operation returns the reason for the
     *          failure, usually including the resources that must be deleted. To delete the service-linked
     *          role, you must first remove those resources from the linked service and then submit the
     *          deletion request again. Resources are specific to the service that is linked to the role.
     *          For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">AWS documentation</a> for your service.</p>
     *          <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles
     *             Terms and Concepts: AWS Service-Linked Role</a> in the
     *             <i>IAM User Guide</i>.</p>
     */
    deleteServiceLinkedRole(args: DeleteServiceLinkedRoleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceLinkedRoleCommandOutput>;
    deleteServiceLinkedRole(args: DeleteServiceLinkedRoleCommandInput, cb: (err: any, data?: DeleteServiceLinkedRoleCommandOutput) => void): void;
    deleteServiceLinkedRole(args: DeleteServiceLinkedRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServiceLinkedRoleCommandOutput) => void): void;
    /**
     * <p>Deletes the specified service-specific credential.</p>
     */
    deleteServiceSpecificCredential(args: DeleteServiceSpecificCredentialCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceSpecificCredentialCommandOutput>;
    deleteServiceSpecificCredential(args: DeleteServiceSpecificCredentialCommandInput, cb: (err: any, data?: DeleteServiceSpecificCredentialCommandOutput) => void): void;
    deleteServiceSpecificCredential(args: DeleteServiceSpecificCredentialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServiceSpecificCredentialCommandOutput) => void): void;
    /**
     * <p>Deletes a signing certificate associated with the specified IAM user.</p>
     *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
     *          the AWS access key ID signing the request. This operation works for access keys under the
     *          AWS account. Consequently, you can use this operation to manage AWS account root user
     *          credentials even if the AWS account has no associated IAM users.</p>
     */
    deleteSigningCertificate(args: DeleteSigningCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSigningCertificateCommandOutput>;
    deleteSigningCertificate(args: DeleteSigningCertificateCommandInput, cb: (err: any, data?: DeleteSigningCertificateCommandOutput) => void): void;
    deleteSigningCertificate(args: DeleteSigningCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSigningCertificateCommandOutput) => void): void;
    /**
     * <p>Deletes the specified IAM user. Unlike the AWS Management Console, when you delete a user
     *          programmatically, you must delete the items attached to the user manually, or the deletion
     *          fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM
     *             User</a>. Before attempting to delete a user, remove the following items:</p>
     *          <ul>
     *             <li>
     *                <p>Password (<a>DeleteLoginProfile</a>)</p>
     *             </li>
     *             <li>
     *                <p>Access keys (<a>DeleteAccessKey</a>)</p>
     *             </li>
     *             <li>
     *                <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p>
     *             </li>
     *             <li>
     *                <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p>
     *             </li>
     *             <li>
     *                <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p>
     *             </li>
     *             <li>
     *                <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>,
     *                   <a>DeleteVirtualMFADevice</a>)</p>
     *             </li>
     *             <li>
     *                <p>Inline policies (<a>DeleteUserPolicy</a>)</p>
     *             </li>
     *             <li>
     *                <p>Attached managed policies (<a>DetachUserPolicy</a>)</p>
     *             </li>
     *             <li>
     *                <p>Group memberships (<a>RemoveUserFromGroup</a>)</p>
     *             </li>
     *          </ul>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>Deletes the permissions boundary for the specified IAM user.</p>
     *          <important>
     *             <p>Deleting the permissions boundary for a user might increase its permissions by
     *             allowing the user to perform all the actions granted in its permissions policies.
     *          </p>
     *          </important>
     */
    deleteUserPermissionsBoundary(args: DeleteUserPermissionsBoundaryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserPermissionsBoundaryCommandOutput>;
    deleteUserPermissionsBoundary(args: DeleteUserPermissionsBoundaryCommandInput, cb: (err: any, data?: DeleteUserPermissionsBoundaryCommandOutput) => void): void;
    deleteUserPermissionsBoundary(args: DeleteUserPermissionsBoundaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserPermissionsBoundaryCommandOutput) => void): void;
    /**
     * <p>Deletes the specified inline policy that is embedded in the specified IAM user.</p>
     *          <p>A user can also have managed policies attached to it. To detach a managed policy from a
     *          user, use <a>DetachUserPolicy</a>. For more information about policies, refer to
     *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
     *             Policies and Inline Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     */
    deleteUserPolicy(args: DeleteUserPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserPolicyCommandOutput>;
    deleteUserPolicy(args: DeleteUserPolicyCommandInput, cb: (err: any, data?: DeleteUserPolicyCommandOutput) => void): void;
    deleteUserPolicy(args: DeleteUserPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes a virtual MFA device.</p>
     *          <note>
     *             <p> You must deactivate a user's virtual MFA device before you can delete it. For
     *             information about deactivating MFA devices, see <a>DeactivateMFADevice</a>.
     *          </p>
     *          </note>
     */
    deleteVirtualMFADevice(args: DeleteVirtualMFADeviceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVirtualMFADeviceCommandOutput>;
    deleteVirtualMFADevice(args: DeleteVirtualMFADeviceCommandInput, cb: (err: any, data?: DeleteVirtualMFADeviceCommandOutput) => void): void;
    deleteVirtualMFADevice(args: DeleteVirtualMFADeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVirtualMFADeviceCommandOutput) => void): void;
    /**
     * <p>Removes the specified managed policy from the specified IAM group.</p>
     *          <p>A group can also have inline policies embedded with it. To delete an inline policy, use
     *          the <a>DeleteGroupPolicy</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
     *             Policies and Inline Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     */
    detachGroupPolicy(args: DetachGroupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DetachGroupPolicyCommandOutput>;
    detachGroupPolicy(args: DetachGroupPolicyCommandInput, cb: (err: any, data?: DetachGroupPolicyCommandOutput) => void): void;
    detachGroupPolicy(args: DetachGroupPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachGroupPolicyCommandOutput) => void): void;
    /**
     * <p>Removes the specified managed policy from the specified role.</p>
     *          <p>A role can also have inline policies embedded with it. To delete an inline policy, use
     *          the <a>DeleteRolePolicy</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
     *             Policies and Inline Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     */
    detachRolePolicy(args: DetachRolePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DetachRolePolicyCommandOutput>;
    detachRolePolicy(args: DetachRolePolicyCommandInput, cb: (err: any, data?: DetachRolePolicyCommandOutput) => void): void;
    detachRolePolicy(args: DetachRolePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachRolePolicyCommandOutput) => void): void;
    /**
     * <p>Removes the specified managed policy from the specified user.</p>
     *          <p>A user can also have inline policies embedded with it. To delete an inline policy, use
     *          the <a>DeleteUserPolicy</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
     *             Policies and Inline Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     */
    detachUserPolicy(args: DetachUserPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DetachUserPolicyCommandOutput>;
    detachUserPolicy(args: DetachUserPolicyCommandInput, cb: (err: any, data?: DetachUserPolicyCommandOutput) => void): void;
    detachUserPolicy(args: DetachUserPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachUserPolicyCommandOutput) => void): void;
    /**
     * <p>Enables the specified MFA device and associates it with the specified IAM user. When
     *          enabled, the MFA device is required for every subsequent login by the IAM user associated
     *          with the device.</p>
     */
    enableMFADevice(args: EnableMFADeviceCommandInput, options?: __HttpHandlerOptions): Promise<EnableMFADeviceCommandOutput>;
    enableMFADevice(args: EnableMFADeviceCommandInput, cb: (err: any, data?: EnableMFADeviceCommandOutput) => void): void;
    enableMFADevice(args: EnableMFADeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableMFADeviceCommandOutput) => void): void;
    /**
     * <p> Generates a credential report for the AWS account. For more information about the
     *          credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the
     *             <i>IAM User Guide</i>.</p>
     */
    generateCredentialReport(args: GenerateCredentialReportCommandInput, options?: __HttpHandlerOptions): Promise<GenerateCredentialReportCommandOutput>;
    generateCredentialReport(args: GenerateCredentialReportCommandInput, cb: (err: any, data?: GenerateCredentialReportCommandOutput) => void): void;
    generateCredentialReport(args: GenerateCredentialReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GenerateCredentialReportCommandOutput) => void): void;
    /**
     * <p>Generates a report for service last accessed data for AWS Organizations. You can generate a report
     *          for any entities (organization root, organizational unit, or account) or policies in your
     *          organization.</p>
     *          <p>To call this operation, you must be signed in using your AWS Organizations master account
     *          credentials. You can use your long-term IAM user or root user credentials, or temporary
     *          credentials from assuming an IAM role. SCPs must be enabled for your organization root.
     *          You must have the required IAM and AWS Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining
     *             Permissions Using Service Last Accessed Data</a> in the
     *             <i>IAM User Guide</i>.</p>
     *          <p>You can generate a service last accessed data report for entities by specifying only the
     *          entity's path. This data includes a list of services that are allowed by any service
     *          control policies (SCPs) that apply to the entity.</p>
     *          <p>You can generate a service last accessed data report for a policy by specifying an
     *          entity's path and an optional AWS Organizations policy ID. This data includes a list of services that
     *          are allowed by the specified SCP.</p>
     *          <p>For each service in both report types, the data includes the most recent account
     *          activity that the policy allows to account principals in the entity or the entity's
     *          children. For important information about the data, reporting period, permissions required,
     *          troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing Permissions Using
     *             Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p>
     *          <important>
     *             <p>The data includes all attempts to access AWS, not just the successful ones. This
     *             includes all attempts that were made using the AWS Management Console, the AWS API through any of
     *             the SDKs, or any of the command line tools. An unexpected entry in the service last
     *             accessed data does not mean that an account has been compromised, because the request
     *             might have been denied. Refer to your CloudTrail logs as the authoritative source for
     *             information about all API calls and whether they were successful or denied access. For
     *             more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM Events with
     *                CloudTrail</a> in the <i>IAM User Guide</i>.</p>
     *          </important>
     *          <p>This operation returns a <code>JobId</code>. Use this parameter in the <code>
     *                <a>GetOrganizationsAccessReport</a>
     *             </code> operation to check the status of the
     *          report generation. To check the status of this request, use the <code>JobId</code>
     *          parameter in the <code>
     *                <a>GetOrganizationsAccessReport</a>
     *             </code> operation and
     *          test the <code>JobStatus</code> response parameter. When the job is complete, you can
     *          retrieve the report.</p>
     *          <p>To generate a service last accessed data report for entities, specify an entity path
     *          without specifying the optional AWS Organizations policy ID. The type of entity that you specify
     *          determines the data returned in the report.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Root</b> – When you specify the organizations
     *                root as the entity, the resulting report lists all of the services allowed by SCPs
     *                that are attached to your root. For each service, the report includes data for all
     *                accounts in your organization except the master account, because the master account
     *                is not limited by SCPs.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>OU</b> – When you specify an organizational
     *                unit (OU) as the entity, the resulting report lists all of the services allowed by
     *                SCPs that are attached to the OU and its parents. For each service, the report
     *                includes data for all accounts in the OU or its children. This data excludes the
     *                master account, because the master account is not limited by SCPs.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Master account</b> – When you specify the
     *                master account, the resulting report lists all AWS services, because the master
     *                account is not limited by SCPs. For each service, the report includes data for only
     *                the master account.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Account</b> – When you specify another account
     *                as the entity, the resulting report lists all of the services allowed by SCPs that
     *                are attached to the account and its parents. For each service, the report includes
     *                data for only the specified account.</p>
     *             </li>
     *          </ul>
     *          <p>To generate a service last accessed data report for policies, specify an entity path and
     *          the optional AWS Organizations policy ID. The type of entity that you specify determines the data
     *          returned for each service.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Root</b> – When you specify the root entity
     *                and a policy ID, the resulting report lists all of the services that are allowed by
     *                the specified SCP. For each service, the report includes data for all accounts in
     *                your organization to which the SCP applies. This data excludes the master account,
     *                because the master account is not limited by SCPs. If the SCP is not attached to any
     *                entities in the organization, then the report will return a list of services with no
     *                data.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>OU</b> – When you specify an OU entity and a
     *                policy ID, the resulting report lists all of the services that are allowed by the
     *                specified SCP. For each service, the report includes data for all accounts in the OU
     *                or its children to which the SCP applies. This means that other accounts outside the
     *                OU that are affected by the SCP might not be included in the data. This data excludes
     *                the master account, because the master account is not limited by SCPs. If the SCP is
     *                not attached to the OU or one of its children, the report will return a list of
     *                services with no data.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Master account</b> – When you specify the
     *                master account, the resulting report lists all AWS services, because the master
     *                account is not limited by SCPs. If you specify a policy ID in the CLI or API, the
     *                policy is ignored. For each service, the report includes data for only the master
     *                account.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Account</b> – When you specify another account
     *                entity and a policy ID, the resulting report lists all of the services that are
     *                allowed by the specified SCP. For each service, the report includes data for only the
     *                specified account. This means that other accounts in the organization that are
     *                affected by the SCP might not be included in the data. If the SCP is not attached to
     *                the account, the report will return a list of services with no data.</p>
     *             </li>
     *          </ul>
     *          <note>
     *             <p>Service last accessed data does not use other policy types when determining whether a
     *             principal could access a service. These other policy types include identity-based
     *             policies, resource-based policies, access control lists, IAM permissions boundaries,
     *             and STS assume role policies. It only applies SCP logic. For more about the evaluation
     *             of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p>
     *          </note>
     *          <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing Policy Scope by
     *             Viewing User Activity</a> in the <i>IAM User Guide</i>.</p>
     */
    generateOrganizationsAccessReport(args: GenerateOrganizationsAccessReportCommandInput, options?: __HttpHandlerOptions): Promise<GenerateOrganizationsAccessReportCommandOutput>;
    generateOrganizationsAccessReport(args: GenerateOrganizationsAccessReportCommandInput, cb: (err: any, data?: GenerateOrganizationsAccessReportCommandOutput) => void): void;
    generateOrganizationsAccessReport(args: GenerateOrganizationsAccessReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GenerateOrganizationsAccessReportCommandOutput) => void): void;
    /**
     * <p>Generates a report that includes details about when an IAM resource (user, group,
     *          role, or policy) was last used in an attempt to access AWS services. Recent activity
     *          usually appears within four hours. IAM reports activity for the last 365 days, or less if
     *          your Region began supporting this feature within the last year. For more information, see
     *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a>.</p>
     *          <important>
     *             <p>The service last accessed data includes all attempts to access an AWS API, not just
     *             the successful ones. This includes all attempts that were made using the AWS Management Console, the
     *             AWS API through any of the SDKs, or any of the command line tools. An unexpected entry
     *             in the service last accessed data does not mean that your account has been compromised,
     *             because the request might have been denied. Refer to your CloudTrail logs as the
     *             authoritative source for information about all API calls and whether they were
     *             successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM Events with
     *                CloudTrail</a> in the <i>IAM User Guide</i>.</p>
     *          </important>
     *          <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a
     *             <code>JobId</code>. Use this parameter in the following operations to retrieve the
     *          following details from your report: </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a>GetServiceLastAccessedDetails</a> – Use this operation for
     *                users, groups, roles, or policies to list every AWS service that the resource could
     *                access using permissions policies. For each service, the response includes
     *                information about the most recent access attempt. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this
     *                operation for groups and policies to list information about the associated entities
     *                (users or roles) that attempted to access a specific AWS service. </p>
     *             </li>
     *          </ul>
     *          <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use
     *          the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code>
     *          response parameter.</p>
     *          <p>For additional information about the permissions policies that allow an identity (user,
     *          group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
     *          <note>
     *             <p>Service last accessed data does not use other policy types when determining whether a
     *             resource could access a service. These other policy types include resource-based
     *             policies, access control lists, AWS Organizations policies, IAM permissions boundaries,
     *             and AWS STS assume role policies. It only applies permissions policy logic. For more
     *             about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p>
     *          </note>
     *          <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing Policy Scope by
     *             Viewing User Activity</a> in the <i>IAM User Guide</i>.</p>
     */
    generateServiceLastAccessedDetails(args: GenerateServiceLastAccessedDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GenerateServiceLastAccessedDetailsCommandOutput>;
    generateServiceLastAccessedDetails(args: GenerateServiceLastAccessedDetailsCommandInput, cb: (err: any, data?: GenerateServiceLastAccessedDetailsCommandOutput) => void): void;
    generateServiceLastAccessedDetails(args: GenerateServiceLastAccessedDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GenerateServiceLastAccessedDetailsCommandOutput) => void): void;
    /**
     * <p>Retrieves information about when the specified access key was last used. The information
     *          includes the date and time of last use, along with the AWS service and Region that were
     *          specified in the last request made with that key.</p>
     */
    getAccessKeyLastUsed(args: GetAccessKeyLastUsedCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessKeyLastUsedCommandOutput>;
    getAccessKeyLastUsed(args: GetAccessKeyLastUsedCommandInput, cb: (err: any, data?: GetAccessKeyLastUsedCommandOutput) => void): void;
    getAccessKeyLastUsed(args: GetAccessKeyLastUsedCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessKeyLastUsedCommandOutput) => void): void;
    /**
     * <p>Retrieves information about all IAM users, groups, roles, and policies in your AWS
     *          account, including their relationships to one another. Use this API to obtain a snapshot of
     *          the configuration of IAM permissions (users, groups, roles, and policies) in your
     *          account.</p>
     *          <note>
     *             <p>Policies returned by this API are URL-encoded compliant
     *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
     *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
     *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
     *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
     *          </note>
     *          <p>You can optionally filter the results using the
     *             <code>Filter</code> parameter. You can paginate the results using the
     *             <code>MaxItems</code> and <code>Marker</code> parameters.</p>
     */
    getAccountAuthorizationDetails(args: GetAccountAuthorizationDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountAuthorizationDetailsCommandOutput>;
    getAccountAuthorizationDetails(args: GetAccountAuthorizationDetailsCommandInput, cb: (err: any, data?: GetAccountAuthorizationDetailsCommandOutput) => void): void;
    getAccountAuthorizationDetails(args: GetAccountAuthorizationDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccountAuthorizationDetailsCommandOutput) => void): void;
    /**
     * <p>Retrieves the password policy for the AWS account. For more information about using a
     *          password policy, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM Password
     *             Policy</a>.</p>
     */
    getAccountPasswordPolicy(args: GetAccountPasswordPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountPasswordPolicyCommandOutput>;
    getAccountPasswordPolicy(args: GetAccountPasswordPolicyCommandInput, cb: (err: any, data?: GetAccountPasswordPolicyCommandOutput) => void): void;
    getAccountPasswordPolicy(args: GetAccountPasswordPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccountPasswordPolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves information about IAM entity usage and IAM quotas in the AWS
     *          account.</p>
     *          <p> For information about limitations on IAM entities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in
     *          the <i>IAM User Guide</i>.</p>
     */
    getAccountSummary(args: GetAccountSummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountSummaryCommandOutput>;
    getAccountSummary(args: GetAccountSummaryCommandInput, cb: (err: any, data?: GetAccountSummaryCommandOutput) => void): void;
    getAccountSummary(args: GetAccountSummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccountSummaryCommandOutput) => void): void;
    /**
     * <p>Gets a list of all of the context keys referenced in the input policies. The policies
     *          are supplied as a list of one or more strings. To get the context keys from policies
     *          associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
     *          <p>Context keys are variables maintained by AWS and its services that provide details
     *          about the context of an API query request. Context keys can be evaluated by testing against
     *          a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to
     *          understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form
     *          here for clarity but must be URL encoded to be included as a part of a real HTML
     *          request.</p>
     */
    getContextKeysForCustomPolicy(args: GetContextKeysForCustomPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetContextKeysForCustomPolicyCommandOutput>;
    getContextKeysForCustomPolicy(args: GetContextKeysForCustomPolicyCommandInput, cb: (err: any, data?: GetContextKeysForCustomPolicyCommandOutput) => void): void;
    getContextKeysForCustomPolicy(args: GetContextKeysForCustomPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContextKeysForCustomPolicyCommandOutput) => void): void;
    /**
     * <p>Gets a list of all of the context keys referenced in all the IAM policies that are
     *          attached to the specified IAM entity. The entity can be an IAM user, group, or role. If
     *          you specify a user, then the request also includes all of the policies attached to groups
     *          that the user is a member of.</p>
     *          <p>You can optionally include a list of one or more additional policies, specified as
     *          strings. If you want to include <i>only</i> a list of policies by string, use
     *             <a>GetContextKeysForCustomPolicy</a> instead.</p>
     *          <p>
     *             <b>Note:</b> This API discloses information about the permissions
     *          granted to other users. If you do not want users to see other user's permissions, then
     *          consider allowing them to use <a>GetContextKeysForCustomPolicy</a>
     *          instead.</p>
     *          <p>Context keys are variables maintained by AWS and its services that provide details
     *          about the context of an API query request. Context keys can be evaluated by testing against
     *          a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to
     *          understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
     */
    getContextKeysForPrincipalPolicy(args: GetContextKeysForPrincipalPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetContextKeysForPrincipalPolicyCommandOutput>;
    getContextKeysForPrincipalPolicy(args: GetContextKeysForPrincipalPolicyCommandInput, cb: (err: any, data?: GetContextKeysForPrincipalPolicyCommandOutput) => void): void;
    getContextKeysForPrincipalPolicy(args: GetContextKeysForPrincipalPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContextKeysForPrincipalPolicyCommandOutput) => void): void;
    /**
     * <p> Retrieves a credential report for the AWS account. For more information about the
     *          credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the
     *             <i>IAM User Guide</i>.</p>
     */
    getCredentialReport(args: GetCredentialReportCommandInput, options?: __HttpHandlerOptions): Promise<GetCredentialReportCommandOutput>;
    getCredentialReport(args: GetCredentialReportCommandInput, cb: (err: any, data?: GetCredentialReportCommandOutput) => void): void;
    getCredentialReport(args: GetCredentialReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCredentialReportCommandOutput) => void): void;
    /**
     * <p> Returns a list of IAM users that are in the specified IAM group. You can paginate
     *          the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
     */
    getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
    getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
    getGroup(args: GetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
    /**
     * <p>Retrieves the specified inline policy document that is embedded in the specified IAM
     *          group.</p>
     *          <note>
     *             <p>Policies returned by this API are URL-encoded compliant
     *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
     *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
     *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
     *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
     *          </note>
     *          <p>An IAM group can also have managed policies
     *          attached to it. To retrieve a managed policy document that is attached to a group, use
     *             <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p>
     *          <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    getGroupPolicy(args: GetGroupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupPolicyCommandOutput>;
    getGroupPolicy(args: GetGroupPolicyCommandInput, cb: (err: any, data?: GetGroupPolicyCommandOutput) => void): void;
    getGroupPolicy(args: GetGroupPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupPolicyCommandOutput) => void): void;
    /**
     * <p> Retrieves information about the specified instance profile, including the instance
     *          profile's path, GUID, ARN, and role. For more information about instance profiles, see
     *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
     *             Instance Profiles</a> in the <i>IAM User Guide</i>.</p>
     */
    getInstanceProfile(args: GetInstanceProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceProfileCommandOutput>;
    getInstanceProfile(args: GetInstanceProfileCommandInput, cb: (err: any, data?: GetInstanceProfileCommandOutput) => void): void;
    getInstanceProfile(args: GetInstanceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceProfileCommandOutput) => void): void;
    /**
     * <p>Retrieves the user name and password-creation date for the specified IAM user. If the
     *          user has not been assigned a password, the operation returns a 404
     *             (<code>NoSuchEntity</code>) error.</p>
     */
    getLoginProfile(args: GetLoginProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetLoginProfileCommandOutput>;
    getLoginProfile(args: GetLoginProfileCommandInput, cb: (err: any, data?: GetLoginProfileCommandOutput) => void): void;
    getLoginProfile(args: GetLoginProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoginProfileCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified OpenID Connect (OIDC) provider resource object
     *          in IAM.</p>
     */
    getOpenIDConnectProvider(args: GetOpenIDConnectProviderCommandInput, options?: __HttpHandlerOptions): Promise<GetOpenIDConnectProviderCommandOutput>;
    getOpenIDConnectProvider(args: GetOpenIDConnectProviderCommandInput, cb: (err: any, data?: GetOpenIDConnectProviderCommandOutput) => void): void;
    getOpenIDConnectProvider(args: GetOpenIDConnectProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOpenIDConnectProviderCommandOutput) => void): void;
    /**
     * <p>Retrieves the service last accessed data report for AWS Organizations that was previously generated
     *          using the <code>
     *                <a>GenerateOrganizationsAccessReport</a>
     *             </code> operation. This
     *          operation retrieves the status of your report job and the report contents.</p>
     *          <p>Depending on the parameters that you passed when you generated the report, the data
     *          returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p>
     *          <p>To call this operation, you must be signed in to the master account in your
     *          organization. SCPs must be enabled for your organization root. You must have permissions to
     *          perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining Permissions Using
     *             Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p>
     *          <p>For each service that principals in an account (root users, IAM users, or IAM roles)
     *          could access using SCPs, the operation returns details about the most recent access
     *          attempt. If there was no attempt, the service is listed without details about the most
     *          recent attempt to access the service. If the operation fails, it returns the reason that it
     *          failed.</p>
     *          <p>By default, the list is sorted by service namespace.</p>
     */
    getOrganizationsAccessReport(args: GetOrganizationsAccessReportCommandInput, options?: __HttpHandlerOptions): Promise<GetOrganizationsAccessReportCommandOutput>;
    getOrganizationsAccessReport(args: GetOrganizationsAccessReportCommandInput, cb: (err: any, data?: GetOrganizationsAccessReportCommandOutput) => void): void;
    getOrganizationsAccessReport(args: GetOrganizationsAccessReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOrganizationsAccessReportCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the specified managed policy, including the policy's default
     *          version and the total number of IAM users, groups, and roles to which the policy is
     *          attached. To retrieve the list of the specific users, groups, and roles that the policy is
     *          attached to, use the <a>ListEntitiesForPolicy</a> API. This API returns metadata
     *          about the policy. To retrieve the actual policy document for a specific version of the
     *          policy, use <a>GetPolicyVersion</a>.</p>
     *          <p>This API retrieves information about managed policies. To retrieve information about an
     *          inline policy that is embedded with an IAM user, group, or role, use the <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a> API.</p>
     *          <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
    getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
    getPolicy(args: GetPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the specified version of the specified managed policy,
     *          including the policy document.</p>
     *          <note>
     *             <p>Policies returned by this API are URL-encoded compliant
     *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
     *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
     *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
     *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
     *          </note>
     *          <p>To list the available
     *          versions for a policy, use <a>ListPolicyVersions</a>.</p>
     *          <p>This API retrieves information about managed policies. To retrieve information about an
     *          inline policy that is embedded in a user, group, or role, use the <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a> API.</p>
     *          <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    getPolicyVersion(args: GetPolicyVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyVersionCommandOutput>;
    getPolicyVersion(args: GetPolicyVersionCommandInput, cb: (err: any, data?: GetPolicyVersionCommandOutput) => void): void;
    getPolicyVersion(args: GetPolicyVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPolicyVersionCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the specified role, including the role's path, GUID, ARN,
     *          and the role's trust policy that grants permission to assume the role. For more information
     *          about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>.</p>
     *          <note>
     *             <p>Policies returned by this API are URL-encoded compliant
     *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
     *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
     *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
     *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
     *          </note>
     */
    getRole(args: GetRoleCommandInput, options?: __HttpHandlerOptions): Promise<GetRoleCommandOutput>;
    getRole(args: GetRoleCommandInput, cb: (err: any, data?: GetRoleCommandOutput) => void): void;
    getRole(args: GetRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRoleCommandOutput) => void): void;
    /**
     * <p>Retrieves the specified inline policy document that is embedded with the specified IAM
     *          role.</p>
     *          <note>
     *             <p>Policies returned by this API are URL-encoded compliant
     *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
     *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
     *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
     *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
     *          </note>
     *          <p>An IAM role can also have managed policies
     *          attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p>
     *          <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     *          <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using Roles to Delegate Permissions and
     *             Federate Identities</a>.</p>
     */
    getRolePolicy(args: GetRolePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetRolePolicyCommandOutput>;
    getRolePolicy(args: GetRolePolicyCommandInput, cb: (err: any, data?: GetRolePolicyCommandOutput) => void): void;
    getRolePolicy(args: GetRolePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRolePolicyCommandOutput) => void): void;
    /**
     * <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider
     *          resource object was created or updated.</p>
     *          <note>
     *             <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
     *          </note>
     */
    getSAMLProvider(args: GetSAMLProviderCommandInput, options?: __HttpHandlerOptions): Promise<GetSAMLProviderCommandOutput>;
    getSAMLProvider(args: GetSAMLProviderCommandInput, cb: (err: any, data?: GetSAMLProviderCommandOutput) => void): void;
    getSAMLProvider(args: GetSAMLProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSAMLProviderCommandOutput) => void): void;
    /**
     * <p>Retrieves the specified SSH public key, including metadata about the key.</p>
     *          <p>The SSH public key retrieved by this operation is used only for authenticating the
     *          associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to
     *          authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH
     *             Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
     */
    getSSHPublicKey(args: GetSSHPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetSSHPublicKeyCommandOutput>;
    getSSHPublicKey(args: GetSSHPublicKeyCommandInput, cb: (err: any, data?: GetSSHPublicKeyCommandOutput) => void): void;
    getSSHPublicKey(args: GetSSHPublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSSHPublicKeyCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the specified server certificate stored in IAM.</p>
     *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with
     *             Server Certificates</a> in the <i>IAM User Guide</i>. This topic
     *          includes a list of AWS services that can use the server certificates that you manage with
     *          IAM.</p>
     */
    getServerCertificate(args: GetServerCertificateCommandInput, options?: __HttpHandlerOptions): Promise<GetServerCertificateCommandOutput>;
    getServerCertificate(args: GetServerCertificateCommandInput, cb: (err: any, data?: GetServerCertificateCommandOutput) => void): void;
    getServerCertificate(args: GetServerCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServerCertificateCommandOutput) => void): void;
    /**
     * <p>Retrieves a service last accessed report that was created using the
     *             <code>GenerateServiceLastAccessedDetails</code> operation. You can use the
     *             <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve
     *          the status of your report job. When the report is complete, you can retrieve the generated
     *          report. The report includes a list of AWS services that the resource (user, group, role,
     *          or managed policy) can access.</p>
     *          <note>
     *             <p>Service last accessed data does not use other policy types when determining whether a
     *             resource could access a service. These other policy types include resource-based
     *             policies, access control lists, AWS Organizations policies, IAM permissions boundaries,
     *             and AWS STS assume role policies. It only applies permissions policy logic. For more
     *             about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p>
     *          </note>
     *          <p>For each service that the resource could access using permissions policies, the
     *          operation returns details about the most recent access attempt. If there was no attempt,
     *          the service is listed without details about the most recent attempt to access the service.
     *          If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns
     *          the reason that it failed.</p>
     *          <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services.
     *          This list includes the number of entities that have attempted to access the service and the
     *          date and time of the last attempt. It also returns the ARN of the following entity,
     *          depending on the resource ARN that you used to generate the report:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>User</b> – Returns the user ARN that you used
     *                to generate the report</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Group</b> – Returns the ARN of the group
     *                member (user) that last attempted to access the service</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Role</b> – Returns the role ARN that you used
     *                to generate the report</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Policy</b> – Returns the ARN of the user or
     *                role that last used the policy to attempt to access the service</p>
     *             </li>
     *          </ul>
     *          <p>By default, the list is sorted by service namespace.</p>
     */
    getServiceLastAccessedDetails(args: GetServiceLastAccessedDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceLastAccessedDetailsCommandOutput>;
    getServiceLastAccessedDetails(args: GetServiceLastAccessedDetailsCommandInput, cb: (err: any, data?: GetServiceLastAccessedDetailsCommandOutput) => void): void;
    getServiceLastAccessedDetails(args: GetServiceLastAccessedDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceLastAccessedDetailsCommandOutput) => void): void;
    /**
     * <p>After you generate a group or policy report using the
     *             <code>GenerateServiceLastAccessedDetails</code> operation, you can use the
     *             <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>.
     *          This operation retrieves the status of your report job and a list of entities that could
     *          have used group or policy permissions to access the specified service.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Group</b> – For a group report, this operation
     *                returns a list of users in the group that could have used the group’s policies in an
     *                attempt to access the service.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Policy</b> – For a policy report, this
     *                operation returns a list of entities (users or roles) that could have used the policy
     *                in an attempt to access the service.</p>
     *             </li>
     *          </ul>
     *          <p>You can also use this operation for user or role reports to retrieve details about those
     *          entities.</p>
     *          <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code>
     *          operation returns the reason that it failed.</p>
     *          <p>By default, the list of associated entities is sorted by date, with the most recent
     *          access listed first.</p>
     */
    getServiceLastAccessedDetailsWithEntities(args: GetServiceLastAccessedDetailsWithEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput>;
    getServiceLastAccessedDetailsWithEntities(args: GetServiceLastAccessedDetailsWithEntitiesCommandInput, cb: (err: any, data?: GetServiceLastAccessedDetailsWithEntitiesCommandOutput) => void): void;
    getServiceLastAccessedDetailsWithEntities(args: GetServiceLastAccessedDetailsWithEntitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceLastAccessedDetailsWithEntitiesCommandOutput) => void): void;
    /**
     * <p>Retrieves the status of your service-linked role deletion. After you use the <a>DeleteServiceLinkedRole</a> API operation to submit a service-linked role for
     *          deletion, you can use the <code>DeletionTaskId</code> parameter in
     *             <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If
     *          the deletion fails, this operation returns the reason that it failed, if that information
     *          is returned by the service.</p>
     */
    getServiceLinkedRoleDeletionStatus(args: GetServiceLinkedRoleDeletionStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput>;
    getServiceLinkedRoleDeletionStatus(args: GetServiceLinkedRoleDeletionStatusCommandInput, cb: (err: any, data?: GetServiceLinkedRoleDeletionStatusCommandOutput) => void): void;
    getServiceLinkedRoleDeletionStatus(args: GetServiceLinkedRoleDeletionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceLinkedRoleDeletionStatusCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the specified IAM user, including the user's creation
     *          date, path, unique ID, and ARN.</p>
     *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
     *          the AWS access key ID used to sign the request to this API.</p>
     */
    getUser(args: GetUserCommandInput, options?: __HttpHandlerOptions): Promise<GetUserCommandOutput>;
    getUser(args: GetUserCommandInput, cb: (err: any, data?: GetUserCommandOutput) => void): void;
    getUser(args: GetUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUserCommandOutput) => void): void;
    /**
     * <p>Retrieves the specified inline policy document that is embedded in the specified IAM
     *          user.</p>
     *          <note>
     *             <p>Policies returned by this API are URL-encoded compliant
     *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
     *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
     *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
     *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
     *          </note>
     *          <p>An IAM user can also have managed policies
     *          attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p>
     *          <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    getUserPolicy(args: GetUserPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetUserPolicyCommandOutput>;
    getUserPolicy(args: GetUserPolicyCommandInput, cb: (err: any, data?: GetUserPolicyCommandOutput) => void): void;
    getUserPolicy(args: GetUserPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUserPolicyCommandOutput) => void): void;
    /**
     * <p>Returns information about the access key IDs associated with the specified IAM user.
     *          If there is none, the operation returns an empty list.</p>
     *          <p>Although each user is limited to a small number of keys, you can still paginate the
     *          results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
     *          <p>If the <code>UserName</code> field is not specified, the user name is determined
     *          implicitly based on the AWS access key ID used to sign the request. This operation works
     *          for access keys under the AWS account. Consequently, you can use this operation to manage
     *          AWS account root user credentials even if the AWS account has no associated
     *          users.</p>
     *          <note>
     *             <p>To ensure the security of your AWS account, the secret access key is accessible
     *             only during key and user creation.</p>
     *          </note>
     */
    listAccessKeys(args: ListAccessKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListAccessKeysCommandOutput>;
    listAccessKeys(args: ListAccessKeysCommandInput, cb: (err: any, data?: ListAccessKeysCommandOutput) => void): void;
    listAccessKeys(args: ListAccessKeysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccessKeysCommandOutput) => void): void;
    /**
     * <p>Lists the account alias associated with the AWS account (Note: you can have only one).
     *          For information about using an AWS account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an Alias for Your AWS Account ID</a>
     *          in the <i>IAM User Guide</i>.</p>
     */
    listAccountAliases(args: ListAccountAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountAliasesCommandOutput>;
    listAccountAliases(args: ListAccountAliasesCommandInput, cb: (err: any, data?: ListAccountAliasesCommandOutput) => void): void;
    listAccountAliases(args: ListAccountAliasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountAliasesCommandOutput) => void): void;
    /**
     * <p>Lists all managed policies that are attached to the specified IAM group.</p>
     *          <p>An IAM group can also have inline policies embedded with it. To list the inline
     *          policies for a group, use the <a>ListGroupPolicies</a> API. For information
     *          about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies
     *          to only those matching the specified path prefix. If there are no policies attached to the
     *          specified group (or none that match the specified path prefix), the operation returns an
     *          empty list.</p>
     */
    listAttachedGroupPolicies(args: ListAttachedGroupPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListAttachedGroupPoliciesCommandOutput>;
    listAttachedGroupPolicies(args: ListAttachedGroupPoliciesCommandInput, cb: (err: any, data?: ListAttachedGroupPoliciesCommandOutput) => void): void;
    listAttachedGroupPolicies(args: ListAttachedGroupPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAttachedGroupPoliciesCommandOutput) => void): void;
    /**
     * <p>Lists all managed policies that are attached to the specified IAM role.</p>
     *          <p>An IAM role can also have inline policies embedded with it. To list the inline
     *          policies for a role, use the <a>ListRolePolicies</a> API. For information about
     *          policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies
     *          to only those matching the specified path prefix. If there are no policies attached to the
     *          specified role (or none that match the specified path prefix), the operation returns an
     *          empty list.</p>
     */
    listAttachedRolePolicies(args: ListAttachedRolePoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListAttachedRolePoliciesCommandOutput>;
    listAttachedRolePolicies(args: ListAttachedRolePoliciesCommandInput, cb: (err: any, data?: ListAttachedRolePoliciesCommandOutput) => void): void;
    listAttachedRolePolicies(args: ListAttachedRolePoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAttachedRolePoliciesCommandOutput) => void): void;
    /**
     * <p>Lists all managed policies that are attached to the specified IAM user.</p>
     *          <p>An IAM user can also have inline policies embedded with it. To list the inline
     *          policies for a user, use the <a>ListUserPolicies</a> API. For information about
     *          policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies
     *          to only those matching the specified path prefix. If there are no policies attached to the
     *          specified group (or none that match the specified path prefix), the operation returns an
     *          empty list.</p>
     */
    listAttachedUserPolicies(args: ListAttachedUserPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListAttachedUserPoliciesCommandOutput>;
    listAttachedUserPolicies(args: ListAttachedUserPoliciesCommandInput, cb: (err: any, data?: ListAttachedUserPoliciesCommandOutput) => void): void;
    listAttachedUserPolicies(args: ListAttachedUserPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAttachedUserPoliciesCommandOutput) => void): void;
    /**
     * <p>Lists all IAM users, groups, and roles that the specified managed policy is attached
     *          to.</p>
     *          <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a
     *          particular type of entity (users, groups, or roles). For example, to list only the roles
     *          that are attached to the specified policy, set <code>EntityFilter</code> to
     *             <code>Role</code>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     */
    listEntitiesForPolicy(args: ListEntitiesForPolicyCommandInput, options?: __HttpHandlerOptions): Promise<ListEntitiesForPolicyCommandOutput>;
    listEntitiesForPolicy(args: ListEntitiesForPolicyCommandInput, cb: (err: any, data?: ListEntitiesForPolicyCommandOutput) => void): void;
    listEntitiesForPolicy(args: ListEntitiesForPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEntitiesForPolicyCommandOutput) => void): void;
    /**
     * <p>Lists the names of the inline policies that are embedded in the specified IAM
     *          group.</p>
     *          <p>An IAM group can also have managed policies attached to it. To list the managed
     *          policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For
     *          more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters. If there are no inline policies embedded with the specified group, the
     *          operation returns an empty list.</p>
     */
    listGroupPolicies(args: ListGroupPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupPoliciesCommandOutput>;
    listGroupPolicies(args: ListGroupPoliciesCommandInput, cb: (err: any, data?: ListGroupPoliciesCommandOutput) => void): void;
    listGroupPolicies(args: ListGroupPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupPoliciesCommandOutput) => void): void;
    /**
     * <p>Lists the IAM groups that have the specified path prefix.</p>
     *          <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     */
    listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
    listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    listGroups(args: ListGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
    /**
     * <p>Lists the IAM groups that the specified IAM user belongs to.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     */
    listGroupsForUser(args: ListGroupsForUserCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsForUserCommandOutput>;
    listGroupsForUser(args: ListGroupsForUserCommandInput, cb: (err: any, data?: ListGroupsForUserCommandOutput) => void): void;
    listGroupsForUser(args: ListGroupsForUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroupsForUserCommandOutput) => void): void;
    /**
     * <p>Lists the instance profiles that have the specified path prefix. If there are none, the
     *          operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance
     *             Profiles</a>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     */
    listInstanceProfiles(args: ListInstanceProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstanceProfilesCommandOutput>;
    listInstanceProfiles(args: ListInstanceProfilesCommandInput, cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void): void;
    listInstanceProfiles(args: ListInstanceProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void): void;
    /**
     * <p>Lists the instance profiles that have the specified associated IAM role. If there are
     *          none, the operation returns an empty list. For more information about instance profiles, go
     *          to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
     *             Instance Profiles</a>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     */
    listInstanceProfilesForRole(args: ListInstanceProfilesForRoleCommandInput, options?: __HttpHandlerOptions): Promise<ListInstanceProfilesForRoleCommandOutput>;
    listInstanceProfilesForRole(args: ListInstanceProfilesForRoleCommandInput, cb: (err: any, data?: ListInstanceProfilesForRoleCommandOutput) => void): void;
    listInstanceProfilesForRole(args: ListInstanceProfilesForRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstanceProfilesForRoleCommandOutput) => void): void;
    /**
     * <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then
     *          this operation lists all the MFA devices associated with the specified user. If you do not
     *          specify a user name, IAM determines the user name implicitly based on the AWS access
     *          key ID signing the request for this API.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     */
    listMFADevices(args: ListMFADevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListMFADevicesCommandOutput>;
    listMFADevices(args: ListMFADevicesCommandInput, cb: (err: any, data?: ListMFADevicesCommandOutput) => void): void;
    listMFADevices(args: ListMFADevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMFADevicesCommandOutput) => void): void;
    /**
     * <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects
     *          defined in the AWS account.</p>
     */
    listOpenIDConnectProviders(args: ListOpenIDConnectProvidersCommandInput, options?: __HttpHandlerOptions): Promise<ListOpenIDConnectProvidersCommandOutput>;
    listOpenIDConnectProviders(args: ListOpenIDConnectProvidersCommandInput, cb: (err: any, data?: ListOpenIDConnectProvidersCommandOutput) => void): void;
    listOpenIDConnectProviders(args: ListOpenIDConnectProvidersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOpenIDConnectProvidersCommandOutput) => void): void;
    /**
     * <p>Lists all the managed policies that are available in your AWS account, including your
     *          own customer-defined managed policies and all AWS managed policies.</p>
     *          <p>You can filter the list of policies that is returned using the optional
     *             <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters.
     *          For example, to list only the customer managed policies in your AWS account, set
     *             <code>Scope</code> to <code>Local</code>. To list only AWS managed policies, set
     *             <code>Scope</code> to <code>AWS</code>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     *          <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
    listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
    listPolicies(args: ListPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to
     *          access each specified service.</p>
     *          <note>
     *             <p>This operation does not use other policy types when determining whether a resource
     *             could access a service. These other policy types include resource-based policies, access
     *             control lists, AWS Organizations policies, IAM permissions boundaries, and AWS STS
     *             assume role policies. It only applies permissions policy logic. For more about the
     *             evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p>
     *          </note>
     *          <p>The list of policies returned by the operation depends on the ARN of the identity that
     *          you provide.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>User</b> – The list of policies includes the
     *                managed and inline policies that are attached to the user directly. The list also
     *                includes any additional managed and inline policies that are attached to the group to
     *                which the user belongs. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Group</b> – The list of policies includes only
     *                the managed and inline policies that are attached to the group directly. Policies
     *                that are attached to the group’s user are not included.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Role</b> – The list of policies includes only
     *                the managed and inline policies that are attached to the role.</p>
     *             </li>
     *          </ul>
     *          <p>For each managed policy, this operation returns the ARN and policy name. For each inline
     *          policy, it returns the policy name and the entity to which it is attached. Inline policies
     *          do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed
     *             Policies and Inline Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     *          <p>Policies that are attached to users and roles as permissions boundaries are not
     *          returned. To view which managed policy is currently used to set the permissions boundary
     *          for a user or role, use the <a>GetUser</a> or <a>GetRole</a>
     *          operations.</p>
     */
    listPoliciesGrantingServiceAccess(args: ListPoliciesGrantingServiceAccessCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesGrantingServiceAccessCommandOutput>;
    listPoliciesGrantingServiceAccess(args: ListPoliciesGrantingServiceAccessCommandInput, cb: (err: any, data?: ListPoliciesGrantingServiceAccessCommandOutput) => void): void;
    listPoliciesGrantingServiceAccess(args: ListPoliciesGrantingServiceAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPoliciesGrantingServiceAccessCommandOutput) => void): void;
    /**
     * <p>Lists information about the versions of the specified managed policy, including the
     *          version that is currently set as the policy's default version.</p>
     *          <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    listPolicyVersions(args: ListPolicyVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListPolicyVersionsCommandOutput>;
    listPolicyVersions(args: ListPolicyVersionsCommandInput, cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void): void;
    listPolicyVersions(args: ListPolicyVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void): void;
    /**
     * <p>Lists the names of the inline policies that are embedded in the specified IAM
     *          role.</p>
     *          <p>An IAM role can also have managed policies attached to it. To list the managed
     *          policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For
     *          more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters. If there are no inline policies embedded with the specified role, the operation
     *          returns an empty list.</p>
     */
    listRolePolicies(args: ListRolePoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListRolePoliciesCommandOutput>;
    listRolePolicies(args: ListRolePoliciesCommandInput, cb: (err: any, data?: ListRolePoliciesCommandOutput) => void): void;
    listRolePolicies(args: ListRolePoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRolePoliciesCommandOutput) => void): void;
    /**
     * <p>Lists the tags that are attached to the specified role. The returned list of tags is
     *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
     *         <i>IAM User Guide</i>.</p>
     */
    listRoleTags(args: ListRoleTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListRoleTagsCommandOutput>;
    listRoleTags(args: ListRoleTagsCommandInput, cb: (err: any, data?: ListRoleTagsCommandOutput) => void): void;
    listRoleTags(args: ListRoleTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRoleTagsCommandOutput) => void): void;
    /**
     * <p>Lists the IAM roles that have the specified path prefix. If there are none, the
     *          operation returns an empty list. For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with
     *             Roles</a>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     */
    listRoles(args: ListRolesCommandInput, options?: __HttpHandlerOptions): Promise<ListRolesCommandOutput>;
    listRoles(args: ListRolesCommandInput, cb: (err: any, data?: ListRolesCommandOutput) => void): void;
    listRoles(args: ListRolesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRolesCommandOutput) => void): void;
    /**
     * <p>Lists the SAML provider resource objects defined in IAM in the account.</p>
     *          <note>
     *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
     *          </note>
     */
    listSAMLProviders(args: ListSAMLProvidersCommandInput, options?: __HttpHandlerOptions): Promise<ListSAMLProvidersCommandOutput>;
    listSAMLProviders(args: ListSAMLProvidersCommandInput, cb: (err: any, data?: ListSAMLProvidersCommandOutput) => void): void;
    listSAMLProviders(args: ListSAMLProvidersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSAMLProvidersCommandOutput) => void): void;
    /**
     * <p>Returns information about the SSH public keys associated with the specified IAM user.
     *          If none exists, the operation returns an empty list.</p>
     *          <p>The SSH public keys returned by this operation are used only for authenticating the
     *          IAM user to an AWS CodeCommit repository. For more information about using SSH keys to
     *          authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH
     *             Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
     *          <p>Although each user is limited to a small number of keys, you can still paginate the
     *          results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
     */
    listSSHPublicKeys(args: ListSSHPublicKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListSSHPublicKeysCommandOutput>;
    listSSHPublicKeys(args: ListSSHPublicKeysCommandInput, cb: (err: any, data?: ListSSHPublicKeysCommandOutput) => void): void;
    listSSHPublicKeys(args: ListSSHPublicKeysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSSHPublicKeysCommandOutput) => void): void;
    /**
     * <p>Lists the server certificates stored in IAM that have the specified path prefix. If
     *          none exist, the operation returns an empty list.</p>
     *          <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with
     *             Server Certificates</a> in the <i>IAM User Guide</i>. This topic
     *          also includes a list of AWS services that can use the server certificates that you manage
     *          with IAM.</p>
     */
    listServerCertificates(args: ListServerCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<ListServerCertificatesCommandOutput>;
    listServerCertificates(args: ListServerCertificatesCommandInput, cb: (err: any, data?: ListServerCertificatesCommandOutput) => void): void;
    listServerCertificates(args: ListServerCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServerCertificatesCommandOutput) => void): void;
    /**
     * <p>Returns information about the service-specific credentials associated with the specified
     *          IAM user. If none exists, the operation returns an empty list. The service-specific
     *          credentials returned by this operation are used only for authenticating the IAM user to a
     *          specific service. For more information about using service-specific credentials to
     *          authenticate to an AWS service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set Up service-specific credentials</a> in
     *          the AWS CodeCommit User Guide.</p>
     */
    listServiceSpecificCredentials(args: ListServiceSpecificCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<ListServiceSpecificCredentialsCommandOutput>;
    listServiceSpecificCredentials(args: ListServiceSpecificCredentialsCommandInput, cb: (err: any, data?: ListServiceSpecificCredentialsCommandOutput) => void): void;
    listServiceSpecificCredentials(args: ListServiceSpecificCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServiceSpecificCredentialsCommandOutput) => void): void;
    /**
     * <p>Returns information about the signing certificates associated with the specified IAM
     *          user. If none exists, the operation returns an empty list.</p>
     *          <p>Although each user is limited to a small number of signing certificates, you can still
     *          paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     *          <p>If the <code>UserName</code> field is not specified, the user name is determined
     *          implicitly based on the AWS access key ID used to sign the request for this API. This
     *          operation works for access keys under the AWS account. Consequently, you can use this
     *          operation to manage AWS account root user credentials even if the AWS account has no
     *          associated users.</p>
     */
    listSigningCertificates(args: ListSigningCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<ListSigningCertificatesCommandOutput>;
    listSigningCertificates(args: ListSigningCertificatesCommandInput, cb: (err: any, data?: ListSigningCertificatesCommandOutput) => void): void;
    listSigningCertificates(args: ListSigningCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSigningCertificatesCommandOutput) => void): void;
    /**
     * <p>Lists the names of the inline policies embedded in the specified IAM user.</p>
     *          <p>An IAM user can also have managed policies attached to it. To list the managed
     *          policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For
     *          more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters. If there are no inline policies embedded with the specified user, the operation
     *          returns an empty list.</p>
     */
    listUserPolicies(args: ListUserPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListUserPoliciesCommandOutput>;
    listUserPolicies(args: ListUserPoliciesCommandInput, cb: (err: any, data?: ListUserPoliciesCommandOutput) => void): void;
    listUserPolicies(args: ListUserPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUserPoliciesCommandOutput) => void): void;
    /**
     * <p>Lists the tags that are attached to the specified user. The returned list of tags is
     *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
     *         <i>IAM User Guide</i>.</p>
     */
    listUserTags(args: ListUserTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListUserTagsCommandOutput>;
    listUserTags(args: ListUserTagsCommandInput, cb: (err: any, data?: ListUserTagsCommandOutput) => void): void;
    listUserTags(args: ListUserTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUserTagsCommandOutput) => void): void;
    /**
     * <p>Lists the IAM users that have the specified path prefix. If no path prefix is
     *          specified, the operation returns all users in the AWS account. If there are none, the
     *          operation returns an empty list.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     */
    listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
    listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    listUsers(args: ListUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    /**
     * <p>Lists the virtual MFA devices defined in the AWS account by assignment status. If you
     *          do not specify an assignment status, the operation returns a list of all virtual MFA
     *          devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or
     *             <code>Any</code>.</p>
     *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
     *          parameters.</p>
     */
    listVirtualMFADevices(args: ListVirtualMFADevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListVirtualMFADevicesCommandOutput>;
    listVirtualMFADevices(args: ListVirtualMFADevicesCommandInput, cb: (err: any, data?: ListVirtualMFADevicesCommandOutput) => void): void;
    listVirtualMFADevices(args: ListVirtualMFADevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVirtualMFADevicesCommandOutput) => void): void;
    /**
     * <p>Adds or updates an inline policy document that is embedded in the specified IAM
     *          group.</p>
     *          <p>A user can also have managed policies attached to it. To attach a managed policy to a
     *          group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
     *             Policies and Inline Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     *          <p>For information about limits on the number of inline policies that you can embed in a
     *          group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the
     *          <i>IAM User Guide</i>.</p>
     *          <note>
     *             <p>Because policy documents can be large, you should use POST rather than GET when
     *             calling <code>PutGroupPolicy</code>. For general information about using the Query API
     *             with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the
     *                <i>IAM User Guide</i>.</p>
     *          </note>
     */
    putGroupPolicy(args: PutGroupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutGroupPolicyCommandOutput>;
    putGroupPolicy(args: PutGroupPolicyCommandInput, cb: (err: any, data?: PutGroupPolicyCommandOutput) => void): void;
    putGroupPolicy(args: PutGroupPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutGroupPolicyCommandOutput) => void): void;
    /**
     * <p>Adds or updates the policy that is specified as the IAM role's permissions boundary.
     *          You can use an AWS managed policy or a customer managed policy to set the boundary for a
     *          role. Use the boundary to control the maximum permissions that the role can have. Setting a
     *          permissions boundary is an advanced feature that can affect the permissions for the
     *          role.</p>
     *          <p>You cannot set the boundary for a service-linked role. </p>
     *          <important>
     *             <p>Policies used as permissions boundaries do not provide permissions. You must also
     *             attach a permissions policy to the role. To learn how the effective permissions for a
     *             role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON Policy
     *                Evaluation Logic</a> in the IAM User Guide. </p>
     *          </important>
     */
    putRolePermissionsBoundary(args: PutRolePermissionsBoundaryCommandInput, options?: __HttpHandlerOptions): Promise<PutRolePermissionsBoundaryCommandOutput>;
    putRolePermissionsBoundary(args: PutRolePermissionsBoundaryCommandInput, cb: (err: any, data?: PutRolePermissionsBoundaryCommandOutput) => void): void;
    putRolePermissionsBoundary(args: PutRolePermissionsBoundaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRolePermissionsBoundaryCommandOutput) => void): void;
    /**
     * <p>Adds or updates an inline policy document that is embedded in the specified IAM
     *          role.</p>
     *          <p>When you embed an inline policy in a role, the inline policy is used as part of the
     *          role's access (permissions) policy. The role's trust policy is created at the same time as
     *          the role, using <a>CreateRole</a>. You can update a role's trust policy using
     *             <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, go to
     *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using Roles to
     *             Delegate Permissions and Federate Identities</a>.</p>
     *          <p>A role can also have a managed policy attached to it. To attach a managed policy to a
     *          role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
     *             Policies and Inline Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     *          <p>For information about limits on the number of inline policies that you can embed with a
     *          role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the
     *          <i>IAM User Guide</i>.</p>
     *          <note>
     *             <p>Because policy documents can be large, you should use POST rather than GET when
     *             calling <code>PutRolePolicy</code>. For general information about using the Query API
     *             with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the
     *                <i>IAM User Guide</i>.</p>
     *          </note>
     */
    putRolePolicy(args: PutRolePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutRolePolicyCommandOutput>;
    putRolePolicy(args: PutRolePolicyCommandInput, cb: (err: any, data?: PutRolePolicyCommandOutput) => void): void;
    putRolePolicy(args: PutRolePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRolePolicyCommandOutput) => void): void;
    /**
     * <p>Adds or updates the policy that is specified as the IAM user's permissions boundary.
     *          You can use an AWS managed policy or a customer managed policy to set the boundary for a
     *          user. Use the boundary to control the maximum permissions that the user can have. Setting a
     *          permissions boundary is an advanced feature that can affect the permissions for the
     *          user.</p>
     *          <important>
     *             <p>Policies that are used as permissions boundaries do not provide permissions. You must
     *             also attach a permissions policy to the user. To learn how the effective permissions for
     *             a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON Policy
     *                Evaluation Logic</a> in the IAM User Guide. </p>
     *          </important>
     */
    putUserPermissionsBoundary(args: PutUserPermissionsBoundaryCommandInput, options?: __HttpHandlerOptions): Promise<PutUserPermissionsBoundaryCommandOutput>;
    putUserPermissionsBoundary(args: PutUserPermissionsBoundaryCommandInput, cb: (err: any, data?: PutUserPermissionsBoundaryCommandOutput) => void): void;
    putUserPermissionsBoundary(args: PutUserPermissionsBoundaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutUserPermissionsBoundaryCommandOutput) => void): void;
    /**
     * <p>Adds or updates an inline policy document that is embedded in the specified IAM
     *          user.</p>
     *          <p>An IAM user can also have a managed policy attached to it. To attach a managed policy
     *          to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use
     *             <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
     *             Policies and Inline Policies</a> in the
     *          <i>IAM User Guide</i>.</p>
     *          <p>For information about limits on the number of inline policies that you can embed in a
     *          user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the
     *          <i>IAM User Guide</i>.</p>
     *          <note>
     *             <p>Because policy documents can be large, you should use POST rather than GET when
     *             calling <code>PutUserPolicy</code>. For general information about using the Query API
     *             with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the
     *                <i>IAM User Guide</i>.</p>
     *          </note>
     */
    putUserPolicy(args: PutUserPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutUserPolicyCommandOutput>;
    putUserPolicy(args: PutUserPolicyCommandInput, cb: (err: any, data?: PutUserPolicyCommandOutput) => void): void;
    putUserPolicy(args: PutUserPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutUserPolicyCommandOutput) => void): void;
    /**
     * <p>Removes the specified client ID (also known as audience) from the list of client IDs
     *          registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p>
     *          <p>This operation is idempotent; it does not fail or return an error if you try to remove a
     *          client ID that does not exist.</p>
     */
    removeClientIDFromOpenIDConnectProvider(args: RemoveClientIDFromOpenIDConnectProviderCommandInput, options?: __HttpHandlerOptions): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput>;
    removeClientIDFromOpenIDConnectProvider(args: RemoveClientIDFromOpenIDConnectProviderCommandInput, cb: (err: any, data?: RemoveClientIDFromOpenIDConnectProviderCommandOutput) => void): void;
    removeClientIDFromOpenIDConnectProvider(args: RemoveClientIDFromOpenIDConnectProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveClientIDFromOpenIDConnectProviderCommandOutput) => void): void;
    /**
     * <p>Removes the specified IAM role from the specified EC2 instance profile.</p>
     *          <important>
     *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you are
     *             about to remove from the instance profile. Removing a role from an instance profile that
     *             is associated with a running instance might break any applications running on the
     *             instance.</p>
     *          </important>
     *          <p> For more information about IAM roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>. For more
     *          information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p>
     */
    removeRoleFromInstanceProfile(args: RemoveRoleFromInstanceProfileCommandInput, options?: __HttpHandlerOptions): Promise<RemoveRoleFromInstanceProfileCommandOutput>;
    removeRoleFromInstanceProfile(args: RemoveRoleFromInstanceProfileCommandInput, cb: (err: any, data?: RemoveRoleFromInstanceProfileCommandOutput) => void): void;
    removeRoleFromInstanceProfile(args: RemoveRoleFromInstanceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveRoleFromInstanceProfileCommandOutput) => void): void;
    /**
     * <p>Removes the specified user from the specified group.</p>
     */
    removeUserFromGroup(args: RemoveUserFromGroupCommandInput, options?: __HttpHandlerOptions): Promise<RemoveUserFromGroupCommandOutput>;
    removeUserFromGroup(args: RemoveUserFromGroupCommandInput, cb: (err: any, data?: RemoveUserFromGroupCommandOutput) => void): void;
    removeUserFromGroup(args: RemoveUserFromGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveUserFromGroupCommandOutput) => void): void;
    /**
     * <p>Resets the password for a service-specific credential. The new password is AWS
     *          generated and cryptographically strong. It cannot be configured by the user. Resetting the
     *          password immediately invalidates the previous password associated with this user.</p>
     */
    resetServiceSpecificCredential(args: ResetServiceSpecificCredentialCommandInput, options?: __HttpHandlerOptions): Promise<ResetServiceSpecificCredentialCommandOutput>;
    resetServiceSpecificCredential(args: ResetServiceSpecificCredentialCommandInput, cb: (err: any, data?: ResetServiceSpecificCredentialCommandOutput) => void): void;
    resetServiceSpecificCredential(args: ResetServiceSpecificCredentialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetServiceSpecificCredentialCommandOutput) => void): void;
    /**
     * <p>Synchronizes the specified MFA device with its IAM resource object on the AWS
     *          servers.</p>
     *          <p>For more information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a Virtual MFA
     *             Device</a> in the <i>IAM User Guide</i>.</p>
     */
    resyncMFADevice(args: ResyncMFADeviceCommandInput, options?: __HttpHandlerOptions): Promise<ResyncMFADeviceCommandOutput>;
    resyncMFADevice(args: ResyncMFADeviceCommandInput, cb: (err: any, data?: ResyncMFADeviceCommandOutput) => void): void;
    resyncMFADevice(args: ResyncMFADeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResyncMFADeviceCommandOutput) => void): void;
    /**
     * <p>Sets the specified version of the specified policy as the policy's default (operative)
     *          version.</p>
     *          <p>This operation affects all users, groups, and roles that the policy is attached to. To
     *          list the users, groups, and roles that the policy is attached to, use the <a>ListEntitiesForPolicy</a> API.</p>
     *          <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
     *             Policies</a> in the <i>IAM User Guide</i>.</p>
     */
    setDefaultPolicyVersion(args: SetDefaultPolicyVersionCommandInput, options?: __HttpHandlerOptions): Promise<SetDefaultPolicyVersionCommandOutput>;
    setDefaultPolicyVersion(args: SetDefaultPolicyVersionCommandInput, cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void): void;
    setDefaultPolicyVersion(args: SetDefaultPolicyVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void): void;
    /**
     * <p>Sets the specified version of the global endpoint token as the token version used for
     *          the AWS account.</p>
     *          <p>By default, AWS Security Token Service (STS) is available as a global service, and all STS requests
     *          go to a single endpoint at <code>https://sts.amazonaws.com</code>. AWS recommends using
     *          Regional STS endpoints to reduce latency, build in redundancy, and increase session token
     *          availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sts_region">AWS Regions and
     *             Endpoints</a> in the <i>AWS General Reference</i>.</p>
     *          <p>If you make an STS call to the global endpoint, the resulting session tokens might be
     *          valid in some Regions but not others. It depends on the version that is set in this
     *          operation. Version 1 tokens are valid only in AWS Regions that are available by default.
     *          These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong).
     *          Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might
     *          affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating STS in an AWS Region</a> in the
     *             <i>IAM User Guide</i>.</p>
     *          <p>To view the current session token version, see the
     *             <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>
     */
    setSecurityTokenServicePreferences(args: SetSecurityTokenServicePreferencesCommandInput, options?: __HttpHandlerOptions): Promise<SetSecurityTokenServicePreferencesCommandOutput>;
    setSecurityTokenServicePreferences(args: SetSecurityTokenServicePreferencesCommandInput, cb: (err: any, data?: SetSecurityTokenServicePreferencesCommandOutput) => void): void;
    setSecurityTokenServicePreferences(args: SetSecurityTokenServicePreferencesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetSecurityTokenServicePreferencesCommandOutput) => void): void;
    /**
     * <p>Simulate how a set of IAM policies and optionally a resource-based policy works with a
     *          list of API operations and AWS resources to determine the policies' effective
     *          permissions. The policies are provided as strings.</p>
     *          <p>The simulation does not perform the API operations; it only checks the authorization to
     *          determine if the simulated policies allow or deny the operations.</p>
     *          <p>If you want to simulate existing policies attached to an IAM user, group, or role, use
     *             <a>SimulatePrincipalPolicy</a> instead.</p>
     *          <p>Context keys are variables maintained by AWS and its services that provide details
     *          about the context of an API query request. You can use the <code>Condition</code> element
     *          of an IAM policy to evaluate context keys. To get the list of context keys that the
     *          policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p>
     *          <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code>
     *          parameters to paginate the results.</p>
     */
    simulateCustomPolicy(args: SimulateCustomPolicyCommandInput, options?: __HttpHandlerOptions): Promise<SimulateCustomPolicyCommandOutput>;
    simulateCustomPolicy(args: SimulateCustomPolicyCommandInput, cb: (err: any, data?: SimulateCustomPolicyCommandOutput) => void): void;
    simulateCustomPolicy(args: SimulateCustomPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SimulateCustomPolicyCommandOutput) => void): void;
    /**
     * <p>Simulate how a set of IAM policies attached to an IAM entity works with a list of
     *          API operations and AWS resources to determine the policies' effective permissions. The
     *          entity can be an IAM user, group, or role. If you specify a user, then the simulation
     *          also includes all of the policies that are attached to groups that the user belongs
     *          to.</p>
     *          <p>You can optionally include a list of one or more additional policies specified as
     *          strings to include in the simulation. If you want to simulate only policies specified as
     *          strings, use <a>SimulateCustomPolicy</a> instead.</p>
     *          <p>You can also optionally include one resource-based policy to be evaluated with each of
     *          the resources included in the simulation.</p>
     *          <p>The simulation does not perform the API operations; it only checks the authorization to
     *          determine if the simulated policies allow or deny the operations.</p>
     *          <p>
     *             <b>Note:</b> This API discloses information about the permissions
     *          granted to other users. If you do not want users to see other user's permissions, then
     *          consider allowing them to use <a>SimulateCustomPolicy</a> instead.</p>
     *          <p>Context keys are variables maintained by AWS and its services that provide details
     *          about the context of an API query request. You can use the <code>Condition</code> element
     *          of an IAM policy to evaluate context keys. To get the list of context keys that the
     *          policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
     *          <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code>
     *          parameters to paginate the results.</p>
     */
    simulatePrincipalPolicy(args: SimulatePrincipalPolicyCommandInput, options?: __HttpHandlerOptions): Promise<SimulatePrincipalPolicyCommandOutput>;
    simulatePrincipalPolicy(args: SimulatePrincipalPolicyCommandInput, cb: (err: any, data?: SimulatePrincipalPolicyCommandOutput) => void): void;
    simulatePrincipalPolicy(args: SimulatePrincipalPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SimulatePrincipalPolicyCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to an IAM role. The role can be a regular role or a
     *       service-linked role. If a tag with the same key name already exists, then that tag is
     *       overwritten with the new value.</p>
     *          <p>A tag consists of a key name and an associated value. By assigning tags to your
     *       resources, you can do the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Administrative grouping and discovery</b> - Attach
     *           tags to resources to aid in organization and search. For example, you could search for all
     *           resources with the key name <i>Project</i> and the value
     *             <i>MyImportantProject</i>. Or search for all resources with the key name
     *             <i>Cost Center</i> and the value <i>41200</i>. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Access control</b> - Reference tags in IAM
     *           user-based and resource-based policies. You can use tags to restrict access to only an
     *           IAM user or role that has a specified tag attached. You can also restrict access to only
     *           those resources that have a certain tag attached. For examples of policies that show how
     *           to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control Access Using IAM Tags</a> in the
     *             <i>IAM User Guide</i>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Cost allocation</b> - Use tags to help track which
     *           individuals and teams are using which AWS resources.</p>
     *             </li>
     *          </ul>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>Make sure that you have no invalid tags and that you do not exceed the allowed
     *             number of tags per role. In either case, the entire request fails and
     *               <i>no</i> tags are added to the role.</p>
     *                </li>
     *                <li>
     *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
     *             need to store an array, you can store comma-separated values in the string. However, you
     *             must interpret the value in your code.</p>
     *                </li>
     *             </ul>
     *          </note>
     *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
     *         <i>IAM User Guide</i>.</p>
     */
    tagRole(args: TagRoleCommandInput, options?: __HttpHandlerOptions): Promise<TagRoleCommandOutput>;
    tagRole(args: TagRoleCommandInput, cb: (err: any, data?: TagRoleCommandOutput) => void): void;
    tagRole(args: TagRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagRoleCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to an IAM user. If a tag with the same key name already exists,
     *       then that tag is overwritten with the new value.</p>
     *
     *          <p>A tag consists of a key name and an associated value. By assigning tags to your
     *       resources, you can do the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Administrative grouping and discovery</b> - Attach
     *           tags to resources to aid in organization and search. For example, you could search for all
     *           resources with the key name <i>Project</i> and the value
     *             <i>MyImportantProject</i>. Or search for all resources with the key name
     *             <i>Cost Center</i> and the value <i>41200</i>. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Access control</b> - Reference tags in IAM
     *           user-based and resource-based policies. You can use tags to restrict access to only an
     *           IAM requesting user or to a role that has a specified tag attached. You can also
     *           restrict access to only those resources that have a certain tag attached. For examples of
     *           policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control Access Using IAM Tags</a> in the
     *             <i>IAM User Guide</i>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Cost allocation</b> - Use tags to help track which
     *           individuals and teams are using which AWS resources.</p>
     *             </li>
     *          </ul>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>Make sure that you have no invalid tags and that you do not exceed the allowed
     *             number of tags per role. In either case, the entire request fails and
     *               <i>no</i> tags are added to the role.</p>
     *                </li>
     *                <li>
     *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
     *             need to store an array, you can store comma-separated values in the string. However, you
     *             must interpret the value in your code.</p>
     *                </li>
     *             </ul>
     *          </note>
     *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
     *         <i>IAM User Guide</i>.</p>
     */
    tagUser(args: TagUserCommandInput, options?: __HttpHandlerOptions): Promise<TagUserCommandOutput>;
    tagUser(args: TagUserCommandInput, cb: (err: any, data?: TagUserCommandOutput) => void): void;
    tagUser(args: TagUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagUserCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the role. For more information about tagging, see
     *         <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a>
     *       in the <i>IAM User Guide</i>.</p>
     */
    untagRole(args: UntagRoleCommandInput, options?: __HttpHandlerOptions): Promise<UntagRoleCommandOutput>;
    untagRole(args: UntagRoleCommandInput, cb: (err: any, data?: UntagRoleCommandOutput) => void): void;
    untagRole(args: UntagRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagRoleCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the user. For more information about tagging, see
     *         <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a>
     *       in the <i>IAM User Guide</i>.</p>
     */
    untagUser(args: UntagUserCommandInput, options?: __HttpHandlerOptions): Promise<UntagUserCommandOutput>;
    untagUser(args: UntagUserCommandInput, cb: (err: any, data?: UntagUserCommandOutput) => void): void;
    untagUser(args: UntagUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagUserCommandOutput) => void): void;
    /**
     * <p>Changes the status of the specified access key from Active to Inactive, or vice versa.
     *          This operation can be used to disable a user's key as part of a key rotation
     *          workflow.</p>
     *          <p>If the <code>UserName</code> is not specified, the user name is determined implicitly
     *          based on the AWS access key ID used to sign the request. This operation works for access
     *          keys under the AWS account. Consequently, you can use this operation to manage AWS
     *          account root user credentials even if the AWS account has no associated users.</p>
     *          <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing Keys and Certificates</a> in
     *          the <i>IAM User Guide</i>.</p>
     */
    updateAccessKey(args: UpdateAccessKeyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccessKeyCommandOutput>;
    updateAccessKey(args: UpdateAccessKeyCommandInput, cb: (err: any, data?: UpdateAccessKeyCommandOutput) => void): void;
    updateAccessKey(args: UpdateAccessKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAccessKeyCommandOutput) => void): void;
    /**
     * <p>Updates the password policy settings for the AWS account.</p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>This operation does not support partial updates. No parameters are required,
     *                   but if you do not specify a parameter, that parameter's value reverts to its
     *                   default value. See the <b>Request Parameters</b> section
     *                   for each parameter's default value. Also note that some parameters do not allow
     *                   the default parameter to be explicitly set. Instead, to invoke the default value,
     *                   do not include that parameter when you invoke the operation.</p>
     *                </li>
     *             </ul>
     *          </note>
     *          <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM Password
     *             Policy</a> in the <i>IAM User Guide</i>.</p>
     */
    updateAccountPasswordPolicy(args: UpdateAccountPasswordPolicyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccountPasswordPolicyCommandOutput>;
    updateAccountPasswordPolicy(args: UpdateAccountPasswordPolicyCommandInput, cb: (err: any, data?: UpdateAccountPasswordPolicyCommandOutput) => void): void;
    updateAccountPasswordPolicy(args: UpdateAccountPasswordPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAccountPasswordPolicyCommandOutput) => void): void;
    /**
     * <p>Updates the policy that grants an IAM entity permission to assume a role. This is
     *          typically referred to as the "role trust policy". For more information about roles, go to
     *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using Roles to
     *             Delegate Permissions and Federate Identities</a>.</p>
     */
    updateAssumeRolePolicy(args: UpdateAssumeRolePolicyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssumeRolePolicyCommandOutput>;
    updateAssumeRolePolicy(args: UpdateAssumeRolePolicyCommandInput, cb: (err: any, data?: UpdateAssumeRolePolicyCommandOutput) => void): void;
    updateAssumeRolePolicy(args: UpdateAssumeRolePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAssumeRolePolicyCommandOutput) => void): void;
    /**
     * <p>Updates the name and/or the path of the specified IAM group.</p>
     *          <important>
     *             <p> You should understand the implications of changing a group's path or name. For more
     *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming Users and
     *                Groups</a> in the <i>IAM User Guide</i>.</p>
     *          </important>
     *          <note>
     *             <p>The person making the request (the principal), must have permission to change the
     *             role group with the old name and the new name. For example, to change the group named
     *                <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that
     *             allows them to update both groups. If the principal has permission to update the
     *                <code>Managers</code> group, but not the <code>MGRs</code> group, then the update
     *             fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a>. </p>
     *          </note>
     */
    updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
    updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    updateGroup(args: UpdateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    /**
     * <p>Changes the password for the specified IAM user.</p>
     *          <p>IAM users can change their own passwords by calling <a>ChangePassword</a>.
     *          For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing Passwords</a> in the
     *             <i>IAM User Guide</i>.</p>
     */
    updateLoginProfile(args: UpdateLoginProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLoginProfileCommandOutput>;
    updateLoginProfile(args: UpdateLoginProfileCommandInput, cb: (err: any, data?: UpdateLoginProfileCommandOutput) => void): void;
    updateLoginProfile(args: UpdateLoginProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLoginProfileCommandOutput) => void): void;
    /**
     * <p>Replaces the existing list of server certificate thumbprints associated with an OpenID
     *          Connect (OIDC) provider resource object with a new list of thumbprints.</p>
     *          <p>The list that you pass with this operation completely replaces the existing list of
     *          thumbprints. (The lists are not merged.)</p>
     *          <p>Typically, you need to update a thumbprint only when the identity provider's certificate
     *          changes, which occurs rarely. However, if the provider's certificate
     *             <i>does</i> change, any attempt to assume an IAM role that specifies the
     *          OIDC provider as a principal fails until the certificate thumbprint is updated.</p>
     *          <note>
     *             <p>Trust for the OIDC provider is derived from the provider's certificate and is
     *             validated by the thumbprint. Therefore, it is best to limit access to the
     *                <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged
     *             users.</p>
     *          </note>
     */
    updateOpenIDConnectProviderThumbprint(args: UpdateOpenIDConnectProviderThumbprintCommandInput, options?: __HttpHandlerOptions): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput>;
    updateOpenIDConnectProviderThumbprint(args: UpdateOpenIDConnectProviderThumbprintCommandInput, cb: (err: any, data?: UpdateOpenIDConnectProviderThumbprintCommandOutput) => void): void;
    updateOpenIDConnectProviderThumbprint(args: UpdateOpenIDConnectProviderThumbprintCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateOpenIDConnectProviderThumbprintCommandOutput) => void): void;
    /**
     * <p>Updates the description or maximum session duration setting of a role.</p>
     */
    updateRole(args: UpdateRoleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoleCommandOutput>;
    updateRole(args: UpdateRoleCommandInput, cb: (err: any, data?: UpdateRoleCommandOutput) => void): void;
    updateRole(args: UpdateRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRoleCommandOutput) => void): void;
    /**
     * <p>Use <a>UpdateRole</a> instead.</p>
     *          <p>Modifies only the description of a role. This operation performs the same function as
     *          the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
     */
    updateRoleDescription(args: UpdateRoleDescriptionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoleDescriptionCommandOutput>;
    updateRoleDescription(args: UpdateRoleDescriptionCommandInput, cb: (err: any, data?: UpdateRoleDescriptionCommandOutput) => void): void;
    updateRoleDescription(args: UpdateRoleDescriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRoleDescriptionCommandOutput) => void): void;
    /**
     * <p>Updates the metadata document for an existing SAML provider resource object.</p>
     *          <note>
     *             <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
     *          </note>
     */
    updateSAMLProvider(args: UpdateSAMLProviderCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSAMLProviderCommandOutput>;
    updateSAMLProvider(args: UpdateSAMLProviderCommandInput, cb: (err: any, data?: UpdateSAMLProviderCommandOutput) => void): void;
    updateSAMLProvider(args: UpdateSAMLProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSAMLProviderCommandOutput) => void): void;
    /**
     * <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys
     *          that are inactive cannot be used for authentication. This operation can be used to disable
     *          a user's SSH public key as part of a key rotation work flow.</p>
     *          <p>The SSH public key affected by this operation is used only for authenticating the
     *          associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to
     *          authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH
     *             Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
     */
    updateSSHPublicKey(args: UpdateSSHPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSSHPublicKeyCommandOutput>;
    updateSSHPublicKey(args: UpdateSSHPublicKeyCommandInput, cb: (err: any, data?: UpdateSSHPublicKeyCommandOutput) => void): void;
    updateSSHPublicKey(args: UpdateSSHPublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSSHPublicKeyCommandOutput) => void): void;
    /**
     * <p>Updates the name and/or the path of the specified server certificate stored in
     *          IAM.</p>
     *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with
     *             Server Certificates</a> in the <i>IAM User Guide</i>. This topic
     *          also includes a list of AWS services that can use the server certificates that you manage
     *          with IAM.</p>
     *          <important>
     *             <p>You should understand the implications of changing a server certificate's path or
     *             name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a Server Certificate</a> in the
     *             <i>IAM User Guide</i>.</p>
     *          </important>
     *          <note>
     *             <p>The person making the request (the principal), must have permission to change the
     *             server certificate with the old name and the new name. For example, to change the
     *             certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal
     *             must have a policy that allows them to update both certificates. If the principal has
     *             permission to update the <code>ProductionCert</code> group, but not the
     *                <code>ProdCert</code> certificate, then the update fails. For more information about
     *             permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access
     *                Management</a> in the <i>IAM User Guide</i>.</p>
     *          </note>
     */
    updateServerCertificate(args: UpdateServerCertificateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServerCertificateCommandOutput>;
    updateServerCertificate(args: UpdateServerCertificateCommandInput, cb: (err: any, data?: UpdateServerCertificateCommandOutput) => void): void;
    updateServerCertificate(args: UpdateServerCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServerCertificateCommandOutput) => void): void;
    /**
     * <p>Sets the status of a service-specific credential to <code>Active</code> or
     *             <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for
     *          authentication to the service. This operation can be used to disable a user's
     *          service-specific credential as part of a credential rotation work flow.</p>
     */
    updateServiceSpecificCredential(args: UpdateServiceSpecificCredentialCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceSpecificCredentialCommandOutput>;
    updateServiceSpecificCredential(args: UpdateServiceSpecificCredentialCommandInput, cb: (err: any, data?: UpdateServiceSpecificCredentialCommandOutput) => void): void;
    updateServiceSpecificCredential(args: UpdateServiceSpecificCredentialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServiceSpecificCredentialCommandOutput) => void): void;
    /**
     * <p>Changes the status of the specified user signing certificate from active to disabled, or
     *          vice versa. This operation can be used to disable an IAM user's signing certificate as
     *          part of a certificate rotation work flow.</p>
     *          <p>If the <code>UserName</code> field is not specified, the user name is determined
     *          implicitly based on the AWS access key ID used to sign the request. This operation works
     *          for access keys under the AWS account. Consequently, you can use this operation to manage
     *          AWS account root user credentials even if the AWS account has no associated
     *          users.</p>
     */
    updateSigningCertificate(args: UpdateSigningCertificateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSigningCertificateCommandOutput>;
    updateSigningCertificate(args: UpdateSigningCertificateCommandInput, cb: (err: any, data?: UpdateSigningCertificateCommandOutput) => void): void;
    updateSigningCertificate(args: UpdateSigningCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSigningCertificateCommandOutput) => void): void;
    /**
     * <p>Updates the name and/or the path of the specified IAM user.</p>
     *          <important>
     *             <p> You should understand the implications of changing an IAM user's path or name. For
     *             more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM
     *                User</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM Group</a> in
     *             the <i>IAM User Guide</i>.</p>
     *          </important>
     *          <note>
     *             <p> To change a user name, the requester must have appropriate permissions on both the
     *             source object and the target object. For example, to change Bob to Robert, the entity
     *             making the request must have permission on Bob and Robert, or must have permission on
     *             all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and Policies</a>.
     *          </p>
     *          </note>
     */
    updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
    updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
    updateUser(args: UpdateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
    /**
     * <p>Uploads an SSH public key and associates it with the specified IAM user.</p>
     *          <p>The SSH public key uploaded by this operation can be used only for authenticating the
     *          associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to
     *          authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH
     *             Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
     */
    uploadSSHPublicKey(args: UploadSSHPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<UploadSSHPublicKeyCommandOutput>;
    uploadSSHPublicKey(args: UploadSSHPublicKeyCommandInput, cb: (err: any, data?: UploadSSHPublicKeyCommandOutput) => void): void;
    uploadSSHPublicKey(args: UploadSSHPublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UploadSSHPublicKeyCommandOutput) => void): void;
    /**
     * <p>Uploads a server certificate entity for the AWS account. The server certificate entity
     *          includes a public key certificate, a private key, and an optional certificate chain, which
     *          should all be PEM-encoded.</p>
     *          <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">AWS Certificate
     *             Manager</a> to provision, manage, and deploy your server certificates. With ACM you
     *          can request a certificate, deploy it to AWS resources, and let ACM handle certificate
     *          renewals for you. Certificates provided by ACM are free. For more information about using
     *          ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate
     *             Manager User Guide</a>.</p>
     *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with
     *             Server Certificates</a> in the <i>IAM User Guide</i>. This topic
     *          includes a list of AWS services that can use the server certificates that you manage with
     *          IAM.</p>
     *          <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html">Limitations on IAM
     *             Entities and Objects</a> in the <i>IAM User Guide</i>.</p>
     *          <note>
     *             <p>Because the body of the public key certificate, private key, and the certificate
     *             chain can be large, you should use POST rather than GET when calling
     *                <code>UploadServerCertificate</code>. For information about setting up signatures and
     *             authorization through the API, go to <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API Requests</a>
     *             in the <i>AWS General Reference</i>. For general information about using the
     *             Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by Making HTTP Query
     *                Requests</a> in the <i>IAM User Guide</i>.</p>
     *          </note>
     */
    uploadServerCertificate(args: UploadServerCertificateCommandInput, options?: __HttpHandlerOptions): Promise<UploadServerCertificateCommandOutput>;
    uploadServerCertificate(args: UploadServerCertificateCommandInput, cb: (err: any, data?: UploadServerCertificateCommandOutput) => void): void;
    uploadServerCertificate(args: UploadServerCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UploadServerCertificateCommandOutput) => void): void;
    /**
     * <p>Uploads an X.509 signing certificate and associates it with the specified IAM user.
     *          Some AWS services use X.509 signing certificates to validate requests that are signed
     *          with a corresponding private key. When you upload the certificate, its default status is
     *             <code>Active</code>.</p>
     *          <p>If the <code>UserName</code> is not specified, the IAM user name is determined
     *          implicitly based on the AWS access key ID used to sign the request. This operation works
     *          for access keys under the AWS account. Consequently, you can use this operation to manage
     *          AWS account root user credentials even if the AWS account has no associated
     *          users.</p>
     *          <note>
     *             <p>Because the body of an X.509 certificate can be large, you should use POST rather
     *             than GET when calling <code>UploadSigningCertificate</code>. For information about
     *             setting up signatures and authorization through the API, go to <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS
     *                API Requests</a> in the <i>AWS General Reference</i>. For general
     *             information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the
     *                <i>IAM User Guide</i>.</p>
     *          </note>
     */
    uploadSigningCertificate(args: UploadSigningCertificateCommandInput, options?: __HttpHandlerOptions): Promise<UploadSigningCertificateCommandOutput>;
    uploadSigningCertificate(args: UploadSigningCertificateCommandInput, cb: (err: any, data?: UploadSigningCertificateCommandOutput) => void): void;
    uploadSigningCertificate(args: UploadSigningCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UploadSigningCertificateCommandOutput) => void): void;
}
