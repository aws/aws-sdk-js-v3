import { IAMClient } from "./IAMClient";
import {
  AddClientIDToOpenIDConnectProviderCommand,
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
} from "./commands/AddClientIDToOpenIDConnectProviderCommand";
import {
  AddRoleToInstanceProfileCommand,
  AddRoleToInstanceProfileCommandInput,
  AddRoleToInstanceProfileCommandOutput,
} from "./commands/AddRoleToInstanceProfileCommand";
import {
  AddUserToGroupCommand,
  AddUserToGroupCommandInput,
  AddUserToGroupCommandOutput,
} from "./commands/AddUserToGroupCommand";
import {
  AttachGroupPolicyCommand,
  AttachGroupPolicyCommandInput,
  AttachGroupPolicyCommandOutput,
} from "./commands/AttachGroupPolicyCommand";
import {
  AttachRolePolicyCommand,
  AttachRolePolicyCommandInput,
  AttachRolePolicyCommandOutput,
} from "./commands/AttachRolePolicyCommand";
import {
  AttachUserPolicyCommand,
  AttachUserPolicyCommandInput,
  AttachUserPolicyCommandOutput,
} from "./commands/AttachUserPolicyCommand";
import {
  ChangePasswordCommand,
  ChangePasswordCommandInput,
  ChangePasswordCommandOutput,
} from "./commands/ChangePasswordCommand";
import {
  CreateAccessKeyCommand,
  CreateAccessKeyCommandInput,
  CreateAccessKeyCommandOutput,
} from "./commands/CreateAccessKeyCommand";
import {
  CreateAccountAliasCommand,
  CreateAccountAliasCommandInput,
  CreateAccountAliasCommandOutput,
} from "./commands/CreateAccountAliasCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateInstanceProfileCommand,
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand";
import {
  CreateLoginProfileCommand,
  CreateLoginProfileCommandInput,
  CreateLoginProfileCommandOutput,
} from "./commands/CreateLoginProfileCommand";
import {
  CreateOpenIDConnectProviderCommand,
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
} from "./commands/CreateOpenIDConnectProviderCommand";
import {
  CreatePolicyCommand,
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput,
} from "./commands/CreatePolicyCommand";
import {
  CreatePolicyVersionCommand,
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "./commands/CreatePolicyVersionCommand";
import { CreateRoleCommand, CreateRoleCommandInput, CreateRoleCommandOutput } from "./commands/CreateRoleCommand";
import {
  CreateSAMLProviderCommand,
  CreateSAMLProviderCommandInput,
  CreateSAMLProviderCommandOutput,
} from "./commands/CreateSAMLProviderCommand";
import {
  CreateServiceLinkedRoleCommand,
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
} from "./commands/CreateServiceLinkedRoleCommand";
import {
  CreateServiceSpecificCredentialCommand,
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
} from "./commands/CreateServiceSpecificCredentialCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateVirtualMFADeviceCommand,
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
} from "./commands/CreateVirtualMFADeviceCommand";
import {
  DeactivateMFADeviceCommand,
  DeactivateMFADeviceCommandInput,
  DeactivateMFADeviceCommandOutput,
} from "./commands/DeactivateMFADeviceCommand";
import {
  DeleteAccessKeyCommand,
  DeleteAccessKeyCommandInput,
  DeleteAccessKeyCommandOutput,
} from "./commands/DeleteAccessKeyCommand";
import {
  DeleteAccountAliasCommand,
  DeleteAccountAliasCommandInput,
  DeleteAccountAliasCommandOutput,
} from "./commands/DeleteAccountAliasCommand";
import {
  DeleteAccountPasswordPolicyCommand,
  DeleteAccountPasswordPolicyCommandInput,
  DeleteAccountPasswordPolicyCommandOutput,
} from "./commands/DeleteAccountPasswordPolicyCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteGroupPolicyCommand,
  DeleteGroupPolicyCommandInput,
  DeleteGroupPolicyCommandOutput,
} from "./commands/DeleteGroupPolicyCommand";
import {
  DeleteInstanceProfileCommand,
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand";
import {
  DeleteLoginProfileCommand,
  DeleteLoginProfileCommandInput,
  DeleteLoginProfileCommandOutput,
} from "./commands/DeleteLoginProfileCommand";
import {
  DeleteOpenIDConnectProviderCommand,
  DeleteOpenIDConnectProviderCommandInput,
  DeleteOpenIDConnectProviderCommandOutput,
} from "./commands/DeleteOpenIDConnectProviderCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeletePolicyVersionCommand,
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "./commands/DeletePolicyVersionCommand";
import { DeleteRoleCommand, DeleteRoleCommandInput, DeleteRoleCommandOutput } from "./commands/DeleteRoleCommand";
import {
  DeleteRolePermissionsBoundaryCommand,
  DeleteRolePermissionsBoundaryCommandInput,
  DeleteRolePermissionsBoundaryCommandOutput,
} from "./commands/DeleteRolePermissionsBoundaryCommand";
import {
  DeleteRolePolicyCommand,
  DeleteRolePolicyCommandInput,
  DeleteRolePolicyCommandOutput,
} from "./commands/DeleteRolePolicyCommand";
import {
  DeleteSAMLProviderCommand,
  DeleteSAMLProviderCommandInput,
  DeleteSAMLProviderCommandOutput,
} from "./commands/DeleteSAMLProviderCommand";
import {
  DeleteSSHPublicKeyCommand,
  DeleteSSHPublicKeyCommandInput,
  DeleteSSHPublicKeyCommandOutput,
} from "./commands/DeleteSSHPublicKeyCommand";
import {
  DeleteServerCertificateCommand,
  DeleteServerCertificateCommandInput,
  DeleteServerCertificateCommandOutput,
} from "./commands/DeleteServerCertificateCommand";
import {
  DeleteServiceLinkedRoleCommand,
  DeleteServiceLinkedRoleCommandInput,
  DeleteServiceLinkedRoleCommandOutput,
} from "./commands/DeleteServiceLinkedRoleCommand";
import {
  DeleteServiceSpecificCredentialCommand,
  DeleteServiceSpecificCredentialCommandInput,
  DeleteServiceSpecificCredentialCommandOutput,
} from "./commands/DeleteServiceSpecificCredentialCommand";
import {
  DeleteSigningCertificateCommand,
  DeleteSigningCertificateCommandInput,
  DeleteSigningCertificateCommandOutput,
} from "./commands/DeleteSigningCertificateCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserPermissionsBoundaryCommand,
  DeleteUserPermissionsBoundaryCommandInput,
  DeleteUserPermissionsBoundaryCommandOutput,
} from "./commands/DeleteUserPermissionsBoundaryCommand";
import {
  DeleteUserPolicyCommand,
  DeleteUserPolicyCommandInput,
  DeleteUserPolicyCommandOutput,
} from "./commands/DeleteUserPolicyCommand";
import {
  DeleteVirtualMFADeviceCommand,
  DeleteVirtualMFADeviceCommandInput,
  DeleteVirtualMFADeviceCommandOutput,
} from "./commands/DeleteVirtualMFADeviceCommand";
import {
  DetachGroupPolicyCommand,
  DetachGroupPolicyCommandInput,
  DetachGroupPolicyCommandOutput,
} from "./commands/DetachGroupPolicyCommand";
import {
  DetachRolePolicyCommand,
  DetachRolePolicyCommandInput,
  DetachRolePolicyCommandOutput,
} from "./commands/DetachRolePolicyCommand";
import {
  DetachUserPolicyCommand,
  DetachUserPolicyCommandInput,
  DetachUserPolicyCommandOutput,
} from "./commands/DetachUserPolicyCommand";
import {
  EnableMFADeviceCommand,
  EnableMFADeviceCommandInput,
  EnableMFADeviceCommandOutput,
} from "./commands/EnableMFADeviceCommand";
import {
  GenerateCredentialReportCommand,
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
} from "./commands/GenerateCredentialReportCommand";
import {
  GenerateOrganizationsAccessReportCommand,
  GenerateOrganizationsAccessReportCommandInput,
  GenerateOrganizationsAccessReportCommandOutput,
} from "./commands/GenerateOrganizationsAccessReportCommand";
import {
  GenerateServiceLastAccessedDetailsCommand,
  GenerateServiceLastAccessedDetailsCommandInput,
  GenerateServiceLastAccessedDetailsCommandOutput,
} from "./commands/GenerateServiceLastAccessedDetailsCommand";
import {
  GetAccessKeyLastUsedCommand,
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
} from "./commands/GetAccessKeyLastUsedCommand";
import {
  GetAccountAuthorizationDetailsCommand,
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "./commands/GetAccountAuthorizationDetailsCommand";
import {
  GetAccountPasswordPolicyCommand,
  GetAccountPasswordPolicyCommandInput,
  GetAccountPasswordPolicyCommandOutput,
} from "./commands/GetAccountPasswordPolicyCommand";
import {
  GetAccountSummaryCommand,
  GetAccountSummaryCommandInput,
  GetAccountSummaryCommandOutput,
} from "./commands/GetAccountSummaryCommand";
import {
  GetContextKeysForCustomPolicyCommand,
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
} from "./commands/GetContextKeysForCustomPolicyCommand";
import {
  GetContextKeysForPrincipalPolicyCommand,
  GetContextKeysForPrincipalPolicyCommandInput,
  GetContextKeysForPrincipalPolicyCommandOutput,
} from "./commands/GetContextKeysForPrincipalPolicyCommand";
import {
  GetCredentialReportCommand,
  GetCredentialReportCommandInput,
  GetCredentialReportCommandOutput,
} from "./commands/GetCredentialReportCommand";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import {
  GetGroupPolicyCommand,
  GetGroupPolicyCommandInput,
  GetGroupPolicyCommandOutput,
} from "./commands/GetGroupPolicyCommand";
import {
  GetInstanceProfileCommand,
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput,
} from "./commands/GetInstanceProfileCommand";
import {
  GetLoginProfileCommand,
  GetLoginProfileCommandInput,
  GetLoginProfileCommandOutput,
} from "./commands/GetLoginProfileCommand";
import {
  GetOpenIDConnectProviderCommand,
  GetOpenIDConnectProviderCommandInput,
  GetOpenIDConnectProviderCommandOutput,
} from "./commands/GetOpenIDConnectProviderCommand";
import {
  GetOrganizationsAccessReportCommand,
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
} from "./commands/GetOrganizationsAccessReportCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetPolicyVersionCommand,
  GetPolicyVersionCommandInput,
  GetPolicyVersionCommandOutput,
} from "./commands/GetPolicyVersionCommand";
import { GetRoleCommand, GetRoleCommandInput, GetRoleCommandOutput } from "./commands/GetRoleCommand";
import {
  GetRolePolicyCommand,
  GetRolePolicyCommandInput,
  GetRolePolicyCommandOutput,
} from "./commands/GetRolePolicyCommand";
import {
  GetSAMLProviderCommand,
  GetSAMLProviderCommandInput,
  GetSAMLProviderCommandOutput,
} from "./commands/GetSAMLProviderCommand";
import {
  GetSSHPublicKeyCommand,
  GetSSHPublicKeyCommandInput,
  GetSSHPublicKeyCommandOutput,
} from "./commands/GetSSHPublicKeyCommand";
import {
  GetServerCertificateCommand,
  GetServerCertificateCommandInput,
  GetServerCertificateCommandOutput,
} from "./commands/GetServerCertificateCommand";
import {
  GetServiceLastAccessedDetailsCommand,
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsCommand";
import {
  GetServiceLastAccessedDetailsWithEntitiesCommand,
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsWithEntitiesCommand";
import {
  GetServiceLinkedRoleDeletionStatusCommand,
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
} from "./commands/GetServiceLinkedRoleDeletionStatusCommand";
import { GetUserCommand, GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import {
  GetUserPolicyCommand,
  GetUserPolicyCommandInput,
  GetUserPolicyCommandOutput,
} from "./commands/GetUserPolicyCommand";
import {
  ListAccessKeysCommand,
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput,
} from "./commands/ListAccessKeysCommand";
import {
  ListAccountAliasesCommand,
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput,
} from "./commands/ListAccountAliasesCommand";
import {
  ListAttachedGroupPoliciesCommand,
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
} from "./commands/ListAttachedGroupPoliciesCommand";
import {
  ListAttachedRolePoliciesCommand,
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "./commands/ListAttachedRolePoliciesCommand";
import {
  ListAttachedUserPoliciesCommand,
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
} from "./commands/ListAttachedUserPoliciesCommand";
import {
  ListEntitiesForPolicyCommand,
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
} from "./commands/ListEntitiesForPolicyCommand";
import {
  ListGroupPoliciesCommand,
  ListGroupPoliciesCommandInput,
  ListGroupPoliciesCommandOutput,
} from "./commands/ListGroupPoliciesCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListGroupsForUserCommand,
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput,
} from "./commands/ListGroupsForUserCommand";
import {
  ListInstanceProfileTagsCommand,
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
} from "./commands/ListInstanceProfileTagsCommand";
import {
  ListInstanceProfilesCommand,
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "./commands/ListInstanceProfilesCommand";
import {
  ListInstanceProfilesForRoleCommand,
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "./commands/ListInstanceProfilesForRoleCommand";
import {
  ListMFADeviceTagsCommand,
  ListMFADeviceTagsCommandInput,
  ListMFADeviceTagsCommandOutput,
} from "./commands/ListMFADeviceTagsCommand";
import {
  ListMFADevicesCommand,
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
} from "./commands/ListMFADevicesCommand";
import {
  ListOpenIDConnectProviderTagsCommand,
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "./commands/ListOpenIDConnectProviderTagsCommand";
import {
  ListOpenIDConnectProvidersCommand,
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
} from "./commands/ListOpenIDConnectProvidersCommand";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "./commands/ListPoliciesCommand";
import {
  ListPoliciesGrantingServiceAccessCommand,
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
} from "./commands/ListPoliciesGrantingServiceAccessCommand";
import {
  ListPolicyTagsCommand,
  ListPolicyTagsCommandInput,
  ListPolicyTagsCommandOutput,
} from "./commands/ListPolicyTagsCommand";
import {
  ListPolicyVersionsCommand,
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "./commands/ListPolicyVersionsCommand";
import {
  ListRolePoliciesCommand,
  ListRolePoliciesCommandInput,
  ListRolePoliciesCommandOutput,
} from "./commands/ListRolePoliciesCommand";
import {
  ListRoleTagsCommand,
  ListRoleTagsCommandInput,
  ListRoleTagsCommandOutput,
} from "./commands/ListRoleTagsCommand";
import { ListRolesCommand, ListRolesCommandInput, ListRolesCommandOutput } from "./commands/ListRolesCommand";
import {
  ListSAMLProviderTagsCommand,
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
} from "./commands/ListSAMLProviderTagsCommand";
import {
  ListSAMLProvidersCommand,
  ListSAMLProvidersCommandInput,
  ListSAMLProvidersCommandOutput,
} from "./commands/ListSAMLProvidersCommand";
import {
  ListSSHPublicKeysCommand,
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput,
} from "./commands/ListSSHPublicKeysCommand";
import {
  ListServerCertificateTagsCommand,
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
} from "./commands/ListServerCertificateTagsCommand";
import {
  ListServerCertificatesCommand,
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "./commands/ListServerCertificatesCommand";
import {
  ListServiceSpecificCredentialsCommand,
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
} from "./commands/ListServiceSpecificCredentialsCommand";
import {
  ListSigningCertificatesCommand,
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "./commands/ListSigningCertificatesCommand";
import {
  ListUserPoliciesCommand,
  ListUserPoliciesCommandInput,
  ListUserPoliciesCommandOutput,
} from "./commands/ListUserPoliciesCommand";
import {
  ListUserTagsCommand,
  ListUserTagsCommandInput,
  ListUserTagsCommandOutput,
} from "./commands/ListUserTagsCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ListVirtualMFADevicesCommand,
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
} from "./commands/ListVirtualMFADevicesCommand";
import {
  PutGroupPolicyCommand,
  PutGroupPolicyCommandInput,
  PutGroupPolicyCommandOutput,
} from "./commands/PutGroupPolicyCommand";
import {
  PutRolePermissionsBoundaryCommand,
  PutRolePermissionsBoundaryCommandInput,
  PutRolePermissionsBoundaryCommandOutput,
} from "./commands/PutRolePermissionsBoundaryCommand";
import {
  PutRolePolicyCommand,
  PutRolePolicyCommandInput,
  PutRolePolicyCommandOutput,
} from "./commands/PutRolePolicyCommand";
import {
  PutUserPermissionsBoundaryCommand,
  PutUserPermissionsBoundaryCommandInput,
  PutUserPermissionsBoundaryCommandOutput,
} from "./commands/PutUserPermissionsBoundaryCommand";
import {
  PutUserPolicyCommand,
  PutUserPolicyCommandInput,
  PutUserPolicyCommandOutput,
} from "./commands/PutUserPolicyCommand";
import {
  RemoveClientIDFromOpenIDConnectProviderCommand,
  RemoveClientIDFromOpenIDConnectProviderCommandInput,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput,
} from "./commands/RemoveClientIDFromOpenIDConnectProviderCommand";
import {
  RemoveRoleFromInstanceProfileCommand,
  RemoveRoleFromInstanceProfileCommandInput,
  RemoveRoleFromInstanceProfileCommandOutput,
} from "./commands/RemoveRoleFromInstanceProfileCommand";
import {
  RemoveUserFromGroupCommand,
  RemoveUserFromGroupCommandInput,
  RemoveUserFromGroupCommandOutput,
} from "./commands/RemoveUserFromGroupCommand";
import {
  ResetServiceSpecificCredentialCommand,
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
} from "./commands/ResetServiceSpecificCredentialCommand";
import {
  ResyncMFADeviceCommand,
  ResyncMFADeviceCommandInput,
  ResyncMFADeviceCommandOutput,
} from "./commands/ResyncMFADeviceCommand";
import {
  SetDefaultPolicyVersionCommand,
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "./commands/SetDefaultPolicyVersionCommand";
import {
  SetSecurityTokenServicePreferencesCommand,
  SetSecurityTokenServicePreferencesCommandInput,
  SetSecurityTokenServicePreferencesCommandOutput,
} from "./commands/SetSecurityTokenServicePreferencesCommand";
import {
  SimulateCustomPolicyCommand,
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "./commands/SimulateCustomPolicyCommand";
import {
  SimulatePrincipalPolicyCommand,
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "./commands/SimulatePrincipalPolicyCommand";
import {
  TagInstanceProfileCommand,
  TagInstanceProfileCommandInput,
  TagInstanceProfileCommandOutput,
} from "./commands/TagInstanceProfileCommand";
import {
  TagMFADeviceCommand,
  TagMFADeviceCommandInput,
  TagMFADeviceCommandOutput,
} from "./commands/TagMFADeviceCommand";
import {
  TagOpenIDConnectProviderCommand,
  TagOpenIDConnectProviderCommandInput,
  TagOpenIDConnectProviderCommandOutput,
} from "./commands/TagOpenIDConnectProviderCommand";
import { TagPolicyCommand, TagPolicyCommandInput, TagPolicyCommandOutput } from "./commands/TagPolicyCommand";
import { TagRoleCommand, TagRoleCommandInput, TagRoleCommandOutput } from "./commands/TagRoleCommand";
import {
  TagSAMLProviderCommand,
  TagSAMLProviderCommandInput,
  TagSAMLProviderCommandOutput,
} from "./commands/TagSAMLProviderCommand";
import {
  TagServerCertificateCommand,
  TagServerCertificateCommandInput,
  TagServerCertificateCommandOutput,
} from "./commands/TagServerCertificateCommand";
import { TagUserCommand, TagUserCommandInput, TagUserCommandOutput } from "./commands/TagUserCommand";
import {
  UntagInstanceProfileCommand,
  UntagInstanceProfileCommandInput,
  UntagInstanceProfileCommandOutput,
} from "./commands/UntagInstanceProfileCommand";
import {
  UntagMFADeviceCommand,
  UntagMFADeviceCommandInput,
  UntagMFADeviceCommandOutput,
} from "./commands/UntagMFADeviceCommand";
import {
  UntagOpenIDConnectProviderCommand,
  UntagOpenIDConnectProviderCommandInput,
  UntagOpenIDConnectProviderCommandOutput,
} from "./commands/UntagOpenIDConnectProviderCommand";
import { UntagPolicyCommand, UntagPolicyCommandInput, UntagPolicyCommandOutput } from "./commands/UntagPolicyCommand";
import { UntagRoleCommand, UntagRoleCommandInput, UntagRoleCommandOutput } from "./commands/UntagRoleCommand";
import {
  UntagSAMLProviderCommand,
  UntagSAMLProviderCommandInput,
  UntagSAMLProviderCommandOutput,
} from "./commands/UntagSAMLProviderCommand";
import {
  UntagServerCertificateCommand,
  UntagServerCertificateCommandInput,
  UntagServerCertificateCommandOutput,
} from "./commands/UntagServerCertificateCommand";
import { UntagUserCommand, UntagUserCommandInput, UntagUserCommandOutput } from "./commands/UntagUserCommand";
import {
  UpdateAccessKeyCommand,
  UpdateAccessKeyCommandInput,
  UpdateAccessKeyCommandOutput,
} from "./commands/UpdateAccessKeyCommand";
import {
  UpdateAccountPasswordPolicyCommand,
  UpdateAccountPasswordPolicyCommandInput,
  UpdateAccountPasswordPolicyCommandOutput,
} from "./commands/UpdateAccountPasswordPolicyCommand";
import {
  UpdateAssumeRolePolicyCommand,
  UpdateAssumeRolePolicyCommandInput,
  UpdateAssumeRolePolicyCommandOutput,
} from "./commands/UpdateAssumeRolePolicyCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateLoginProfileCommand,
  UpdateLoginProfileCommandInput,
  UpdateLoginProfileCommandOutput,
} from "./commands/UpdateLoginProfileCommand";
import {
  UpdateOpenIDConnectProviderThumbprintCommand,
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
} from "./commands/UpdateOpenIDConnectProviderThumbprintCommand";
import { UpdateRoleCommand, UpdateRoleCommandInput, UpdateRoleCommandOutput } from "./commands/UpdateRoleCommand";
import {
  UpdateRoleDescriptionCommand,
  UpdateRoleDescriptionCommandInput,
  UpdateRoleDescriptionCommandOutput,
} from "./commands/UpdateRoleDescriptionCommand";
import {
  UpdateSAMLProviderCommand,
  UpdateSAMLProviderCommandInput,
  UpdateSAMLProviderCommandOutput,
} from "./commands/UpdateSAMLProviderCommand";
import {
  UpdateSSHPublicKeyCommand,
  UpdateSSHPublicKeyCommandInput,
  UpdateSSHPublicKeyCommandOutput,
} from "./commands/UpdateSSHPublicKeyCommand";
import {
  UpdateServerCertificateCommand,
  UpdateServerCertificateCommandInput,
  UpdateServerCertificateCommandOutput,
} from "./commands/UpdateServerCertificateCommand";
import {
  UpdateServiceSpecificCredentialCommand,
  UpdateServiceSpecificCredentialCommandInput,
  UpdateServiceSpecificCredentialCommandOutput,
} from "./commands/UpdateServiceSpecificCredentialCommand";
import {
  UpdateSigningCertificateCommand,
  UpdateSigningCertificateCommandInput,
  UpdateSigningCertificateCommandOutput,
} from "./commands/UpdateSigningCertificateCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  UploadSSHPublicKeyCommand,
  UploadSSHPublicKeyCommandInput,
  UploadSSHPublicKeyCommandOutput,
} from "./commands/UploadSSHPublicKeyCommand";
import {
  UploadServerCertificateCommand,
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
} from "./commands/UploadServerCertificateCommand";
import {
  UploadSigningCertificateCommand,
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
} from "./commands/UploadSigningCertificateCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Identity and Access Management</fullname>
 *          <p>AWS Identity and Access Management (IAM) is a web service for securely controlling
 *       access to AWS services. With IAM, you can centrally manage users, security credentials
 *       such as access keys, and permissions that control which AWS resources users and
 *       applications can access. For more information about IAM, see <a href="http://aws.amazon.com/iam/">AWS Identity and Access Management (IAM)</a> and the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">AWS Identity and Access Management User Guide</a>.</p>
 */
export class IAM extends IAMClient {
  /**
   * <p>Adds a new client ID (also known as audience) to the list of client IDs already
   *             registered for the specified IAM OpenID Connect (OIDC) provider resource.</p>
   *         <p>This operation is idempotent; it does not fail or return an error if you add an
   *             existing client ID to the provider.</p>
   */
  public addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddClientIDToOpenIDConnectProviderCommandOutput>;
  public addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: AddClientIDToOpenIDConnectProviderCommandOutput) => void
  ): void;
  public addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddClientIDToOpenIDConnectProviderCommandOutput) => void
  ): void;
  public addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddClientIDToOpenIDConnectProviderCommandOutput) => void),
    cb?: (err: any, data?: AddClientIDToOpenIDConnectProviderCommandOutput) => void
  ): Promise<AddClientIDToOpenIDConnectProviderCommandOutput> | void {
    const command = new AddClientIDToOpenIDConnectProviderCommand(args);
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
   * <p>Adds the specified IAM role to the specified instance profile. An instance profile
   *             can contain only one role, and this quota cannot be increased. You can remove the
   *             existing role and then add a different role to an instance profile. You must then wait
   *             for the change to appear across all of AWS because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual
   *                 consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the
   *                 instance profile</a>, or you can stop your instance and then restart it.</p>
   *         <note>
   *             <p>The caller of this operation must be granted the <code>PassRole</code> permission
   *                 on the IAM role by a permissions policy.</p>
   *         </note>
   *         <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more
   *             information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
   *             profiles</a>.</p>
   */
  public addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddRoleToInstanceProfileCommandOutput>;
  public addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    cb: (err: any, data?: AddRoleToInstanceProfileCommandOutput) => void
  ): void;
  public addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRoleToInstanceProfileCommandOutput) => void
  ): void;
  public addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddRoleToInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: AddRoleToInstanceProfileCommandOutput) => void
  ): Promise<AddRoleToInstanceProfileCommandOutput> | void {
    const command = new AddRoleToInstanceProfileCommand(args);
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
   */
  public addUserToGroup(
    args: AddUserToGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddUserToGroupCommandOutput>;
  public addUserToGroup(
    args: AddUserToGroupCommandInput,
    cb: (err: any, data?: AddUserToGroupCommandOutput) => void
  ): void;
  public addUserToGroup(
    args: AddUserToGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddUserToGroupCommandOutput) => void
  ): void;
  public addUserToGroup(
    args: AddUserToGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddUserToGroupCommandOutput) => void),
    cb?: (err: any, data?: AddUserToGroupCommandOutput) => void
  ): Promise<AddUserToGroupCommandOutput> | void {
    const command = new AddUserToGroupCommand(args);
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
   * <p>Attaches the specified managed policy to the specified IAM group.</p>
   *         <p>You use this operation to attach a managed policy to a group. To embed an inline
   *             policy in a group, use <a>PutGroupPolicy</a>.</p>
   *         <p>As a best practice, you can validate your IAM policies.
   *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
   *             in the <i>IAM User Guide</i>.</p>
   *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachGroupPolicyCommandOutput>;
  public attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    cb: (err: any, data?: AttachGroupPolicyCommandOutput) => void
  ): void;
  public attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachGroupPolicyCommandOutput) => void
  ): void;
  public attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachGroupPolicyCommandOutput) => void),
    cb?: (err: any, data?: AttachGroupPolicyCommandOutput) => void
  ): Promise<AttachGroupPolicyCommandOutput> | void {
    const command = new AttachGroupPolicyCommand(args);
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
   * <p>Attaches the specified managed policy to the specified IAM role. When you attach a
   *             managed policy to a role, the managed policy becomes part of the role's permission
   *             (access) policy.</p>
   *         <note>
   *             <p>You cannot use a managed policy as the role's trust policy. The role's trust
   *                 policy is created at the same time as the role, using <a>CreateRole</a>.
   *                 You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p>
   *         </note>
   *         <p>Use this operation to attach a <i>managed</i> policy to a role. To embed
   *             an inline policy in a role, use <a>PutRolePolicy</a>. For more information
   *             about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   *         <p>As a best practice, you can validate your IAM policies.
   *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
   *             in the <i>IAM User Guide</i>.</p>
   */
  public attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachRolePolicyCommandOutput>;
  public attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    cb: (err: any, data?: AttachRolePolicyCommandOutput) => void
  ): void;
  public attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachRolePolicyCommandOutput) => void
  ): void;
  public attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachRolePolicyCommandOutput) => void),
    cb?: (err: any, data?: AttachRolePolicyCommandOutput) => void
  ): Promise<AttachRolePolicyCommandOutput> | void {
    const command = new AttachRolePolicyCommand(args);
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
   * <p>Attaches the specified managed policy to the specified user.</p>
   *         <p>You use this operation to attach a <i>managed</i> policy to a user. To
   *             embed an inline policy in a user, use <a>PutUserPolicy</a>.</p>
   *         <p>As a best practice, you can validate your IAM policies.
   *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
   *             in the <i>IAM User Guide</i>.</p>
   *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachUserPolicyCommandOutput>;
  public attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    cb: (err: any, data?: AttachUserPolicyCommandOutput) => void
  ): void;
  public attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachUserPolicyCommandOutput) => void
  ): void;
  public attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachUserPolicyCommandOutput) => void),
    cb?: (err: any, data?: AttachUserPolicyCommandOutput) => void
  ): Promise<AttachUserPolicyCommandOutput> | void {
    const command = new AttachUserPolicyCommand(args);
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
   * <p>Changes the password of the IAM user who is calling this operation. This operation
   *             can be performed using the AWS CLI, the AWS API, or the <b>My
   *                 Security Credentials</b> page in the AWS Management Console. The AWS account root user
   *             password is not affected by this operation.</p>
   *         <p>Use <a>UpdateLoginProfile</a> to use the AWS CLI, the AWS API, or the
   *                 <b>Users</b> page in the IAM console to change the
   *             password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing
   *                 passwords</a> in the <i>IAM User Guide</i>.</p>
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
   * <p> Creates a new AWS secret access key and corresponding AWS access key ID for the
   *             specified user. The default status for new keys is <code>Active</code>.</p>
   *         <p>If you do not specify a user name, IAM determines the user name implicitly based on
   *             the AWS access key ID signing the request. This operation works for access keys under
   *             the AWS account. Consequently, you can use this operation to manage AWS account root
   *             user credentials. This is true even if the AWS account has no associated users.</p>
   *         <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
   *                 quotas</a> in the <i>IAM User Guide</i>.</p>
   *         <important>
   *             <p>To ensure the security of your AWS account, the secret access key is accessible
   *                 only during key and user creation. You must save the key (for example, in a text
   *                 file) if you want to be able to access it again. If a secret key is lost, you can
   *                 delete the access keys for the associated user and then create new keys.</p>
   *         </important>
   */
  public createAccessKey(
    args: CreateAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessKeyCommandOutput>;
  public createAccessKey(
    args: CreateAccessKeyCommandInput,
    cb: (err: any, data?: CreateAccessKeyCommandOutput) => void
  ): void;
  public createAccessKey(
    args: CreateAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessKeyCommandOutput) => void
  ): void;
  public createAccessKey(
    args: CreateAccessKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccessKeyCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessKeyCommandOutput) => void
  ): Promise<CreateAccessKeyCommandOutput> | void {
    const command = new CreateAccessKeyCommand(args);
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
   * <p>Creates an alias for your AWS account. For information about using an AWS account
   *             alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an
   *                 alias for your AWS account ID</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  public createAccountAlias(
    args: CreateAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountAliasCommandOutput>;
  public createAccountAlias(
    args: CreateAccountAliasCommandInput,
    cb: (err: any, data?: CreateAccountAliasCommandOutput) => void
  ): void;
  public createAccountAlias(
    args: CreateAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountAliasCommandOutput) => void
  ): void;
  public createAccountAlias(
    args: CreateAccountAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccountAliasCommandOutput) => void),
    cb?: (err: any, data?: CreateAccountAliasCommandOutput) => void
  ): Promise<CreateAccountAliasCommandOutput> | void {
    const command = new CreateAccountAliasCommand(args);
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
   * <p>Creates a new group.</p>
   *         <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
   *                 quotas</a> in the <i>IAM User Guide</i>.</p>
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
   * <p> Creates a new instance profile. For information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html">Using
   *                 roles for applications on Amazon EC2</a> in the
   *                 <i>IAM User Guide</i>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#ec2-instance-profile">Instance profiles</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *         <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM object
   *                 quotas</a> in the <i>IAM User Guide</i>.</p>
   */
  public createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceProfileCommandOutput>;
  public createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): void;
  public createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): void;
  public createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): Promise<CreateInstanceProfileCommandOutput> | void {
    const command = new CreateInstanceProfileCommand(args);
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
   * <p>Creates a password for the specified IAM user. A password allows an IAM user to
   *             access AWS services through the AWS Management Console.</p>
   *         <p>You can use the AWS CLI, the AWS API, or the <b>Users</b> page in the IAM console to create a password for any IAM user.
   *             Use <a>ChangePassword</a> to update your own existing password in the
   *                 <b>My Security Credentials</b> page in the
   *             AWS Management Console.</p>
   *         <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the
   *                 <i>IAM User Guide</i>.</p>
   */
  public createLoginProfile(
    args: CreateLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoginProfileCommandOutput>;
  public createLoginProfile(
    args: CreateLoginProfileCommandInput,
    cb: (err: any, data?: CreateLoginProfileCommandOutput) => void
  ): void;
  public createLoginProfile(
    args: CreateLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoginProfileCommandOutput) => void
  ): void;
  public createLoginProfile(
    args: CreateLoginProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLoginProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateLoginProfileCommandOutput) => void
  ): Promise<CreateLoginProfileCommandOutput> | void {
    const command = new CreateLoginProfileCommand(args);
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
   * <p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p>
   *         <p>The OIDC provider that you create with this operation can be used as a principal in a
   *             role's trust policy. Such a policy establishes a trust relationship between AWS and
   *             the OIDC provider.</p>
   *         <p>If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito,
   *             you don't need to create a separate IAM identity provider. These OIDC identity
   *             providers are already built-in to AWS and are available for your use. Instead, you can
   *             move directly to creating new roles using your identity provider. To learn more, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html">Creating a role for web identity or OpenID connect federation</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *         <p>When you create the IAM OIDC provider, you specify the following:</p>
   *         <ul>
   *             <li>
   *                 <p>The URL of the OIDC identity provider (IdP) to trust</p>
   *             </li>
   *             <li>
   *                 <p>A list of client IDs (also known as audiences) that identify the application
   *                     or applications that are allowed to authenticate using the OIDC provider</p>
   *             </li>
   *             <li>
   *                 <p>A list of thumbprints of one or more server certificates that the IdP
   *                     uses</p>
   *             </li>
   *          </ul>
   *         <p>You get all of this information from the OIDC IdP that you want to use to access
   *             AWS.</p>
   *         <note>
   *             <p>The trust for the OIDC provider is derived from the IAM provider that this
   *                 operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged
   *                 users.</p>
   *         </note>
   */
  public createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOpenIDConnectProviderCommandOutput>;
  public createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: CreateOpenIDConnectProviderCommandOutput) => void
  ): void;
  public createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOpenIDConnectProviderCommandOutput) => void
  ): void;
  public createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOpenIDConnectProviderCommandOutput) => void),
    cb?: (err: any, data?: CreateOpenIDConnectProviderCommandOutput) => void
  ): Promise<CreateOpenIDConnectProviderCommandOutput> | void {
    const command = new CreateOpenIDConnectProviderCommand(args);
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
   * <p>Creates a new managed policy for your AWS account.</p>
   *         <p>This operation creates a policy version with a version identifier of <code>v1</code>
   *             and sets v1 as the policy's default version. For more information about policy versions,
   *             see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *         <p>As a best practice, you can validate your IAM policies.
   *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
   *             in the <i>IAM User Guide</i>.</p>
   *         <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
   *                 policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  public createPolicy(
    args: CreatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyCommandOutput>;
  public createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
  public createPolicy(
    args: CreatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;
  public createPolicy(
    args: CreatePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePolicyCommandOutput) => void),
    cb?: (err: any, data?: CreatePolicyCommandOutput) => void
  ): Promise<CreatePolicyCommandOutput> | void {
    const command = new CreatePolicyCommand(args);
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
   * <p>Creates a new version of the specified managed policy. To update a managed policy, you
   *             create a new policy version. A managed policy can have up to five versions. If the
   *             policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p>
   *         <p>Optionally, you can set the new version as the policy's default version. The default
   *             version is the version that is in effect for the IAM users, groups, and roles to which
   *             the policy is attached.</p>
   *         <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyVersionCommandOutput>;
  public createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): void;
  public createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): void;
  public createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): Promise<CreatePolicyVersionCommandOutput> | void {
    const command = new CreatePolicyVersionCommand(args);
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
   * <p>Creates a new role for your AWS account. For more information about roles, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM
   *                 roles</a>. For information about quotas for role names and the number of roles
   *             you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the
   *                 <i>IAM User Guide</i>.</p>
   */
  public createRole(args: CreateRoleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoleCommandOutput>;
  public createRole(args: CreateRoleCommandInput, cb: (err: any, data?: CreateRoleCommandOutput) => void): void;
  public createRole(
    args: CreateRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoleCommandOutput) => void
  ): void;
  public createRole(
    args: CreateRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRoleCommandOutput) => void),
    cb?: (err: any, data?: CreateRoleCommandOutput) => void
  ): Promise<CreateRoleCommandOutput> | void {
    const command = new CreateRoleCommand(args);
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
   * <p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML
   *             2.0.</p>
   *         <p>The SAML provider resource that you create with this operation can be used as a
   *             principal in an IAM role's trust policy. Such a policy can enable federated users who
   *             sign in using the SAML IdP to assume the role. You can create an IAM role that
   *             supports Web-based single sign-on (SSO) to the AWS Management Console or one that supports API access
   *             to AWS.</p>
   *         <p>When you create the SAML provider resource, you upload a SAML metadata document that
   *             you get from your IdP. That document includes the issuer's name, expiration information,
   *             and keys that can be used to validate the SAML authentication response (assertions) that
   *             the IdP sends. You must generate the metadata document using the identity management
   *             software that is used as your organization's IdP.</p>
   *         <note>
   *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
   *         </note>
   *         <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0
   *                 federated users to access the AWS Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
   *                 federation</a> in the <i>IAM User Guide</i>.</p>
   */
  public createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSAMLProviderCommandOutput>;
  public createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    cb: (err: any, data?: CreateSAMLProviderCommandOutput) => void
  ): void;
  public createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSAMLProviderCommandOutput) => void
  ): void;
  public createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSAMLProviderCommandOutput) => void),
    cb?: (err: any, data?: CreateSAMLProviderCommandOutput) => void
  ): Promise<CreateSAMLProviderCommandOutput> | void {
    const command = new CreateSAMLProviderCommand(args);
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
   * <p>Creates an IAM role that is linked to a specific AWS service. The service controls
   *             the attached policies and when the role can be deleted. This helps ensure that the
   *             service is not broken by an unexpectedly changed or deleted role, which could put your
   *             AWS resources into an unknown state. Allowing the service to control the role helps
   *             improve service stability and proper cleanup when a service and its role are no longer
   *             needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked
   *                 roles</a> in the <i>IAM User Guide</i>. </p>
   *         <p>To attach a policy to this service-linked role, you must make the request using the
   *             AWS service that depends on this role.</p>
   */
  public createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceLinkedRoleCommandOutput>;
  public createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    cb: (err: any, data?: CreateServiceLinkedRoleCommandOutput) => void
  ): void;
  public createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceLinkedRoleCommandOutput) => void
  ): void;
  public createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceLinkedRoleCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceLinkedRoleCommandOutput) => void
  ): Promise<CreateServiceLinkedRoleCommandOutput> | void {
    const command = new CreateServiceLinkedRoleCommand(args);
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
   * <p>Generates a set of credentials consisting of a user name and password that can be used
   *             to access the service specified in the request. These credentials are generated by
   *             IAM, and can be used only for the specified service. </p>
   *         <p>You can have a maximum of two sets of service-specific credentials for each supported
   *             service per user.</p>
   *         <p>You can create service-specific credentials for AWS CodeCommit and Amazon Keyspaces (for Apache
   *             Cassandra).</p>
   *         <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p>
   *         <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM
   *                 with AWS CodeCommit: Git credentials, SSH keys, and AWS access keys</a> in the
   *                 <i>IAM User Guide</i>.</p>
   */
  public createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceSpecificCredentialCommandOutput>;
  public createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: CreateServiceSpecificCredentialCommandOutput) => void
  ): void;
  public createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceSpecificCredentialCommandOutput) => void
  ): void;
  public createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceSpecificCredentialCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceSpecificCredentialCommandOutput) => void
  ): Promise<CreateServiceSpecificCredentialCommandOutput> | void {
    const command = new CreateServiceSpecificCredentialCommand(args);
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
   * <p>Creates a new IAM user for your AWS account.</p>
   *         <p> For information about quotas for the number of IAM users you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
   *                 quotas</a> in the <i>IAM User Guide</i>.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
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
   * <p>Creates a new virtual MFA device for the AWS account. After creating the virtual
   *             MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user.
   *             For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA
   *                 device</a> in the <i>IAM User Guide</i>.</p>
   *         <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
   *                 quotas</a> in the <i>IAM User Guide</i>.</p>
   *         <important>
   *             <p>The seed information contained in the QR code and the Base32 string should be
   *                 treated like any other secret access information. In other words, protect the seed
   *                 information as you would your AWS access keys or your passwords. After you
   *                 provision your virtual device, you should ensure that the information is destroyed
   *                 following secure procedures.</p>
   *         </important>
   */
  public createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualMFADeviceCommandOutput>;
  public createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    cb: (err: any, data?: CreateVirtualMFADeviceCommandOutput) => void
  ): void;
  public createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualMFADeviceCommandOutput) => void
  ): void;
  public createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVirtualMFADeviceCommandOutput) => void),
    cb?: (err: any, data?: CreateVirtualMFADeviceCommandOutput) => void
  ): Promise<CreateVirtualMFADeviceCommandOutput> | void {
    const command = new CreateVirtualMFADeviceCommand(args);
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
   * <p>Deactivates the specified MFA device and removes it from association with the user
   *             name for which it was originally enabled.</p>
   *         <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual
   *                 multi-factor authentication (MFA) device</a> in the
   *                 <i>IAM User Guide</i>.</p>
   */
  public deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateMFADeviceCommandOutput>;
  public deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    cb: (err: any, data?: DeactivateMFADeviceCommandOutput) => void
  ): void;
  public deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateMFADeviceCommandOutput) => void
  ): void;
  public deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeactivateMFADeviceCommandOutput) => void),
    cb?: (err: any, data?: DeactivateMFADeviceCommandOutput) => void
  ): Promise<DeactivateMFADeviceCommandOutput> | void {
    const command = new DeactivateMFADeviceCommand(args);
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
   * <p>Deletes the access key pair associated with the specified IAM user.</p>
   *         <p>If you do not specify a user name, IAM determines the user name implicitly based on
   *             the AWS access key ID signing the request. This operation works for access keys under
   *             the AWS account. Consequently, you can use this operation to manage AWS account root
   *             user credentials even if the AWS account has no associated users.</p>
   */
  public deleteAccessKey(
    args: DeleteAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessKeyCommandOutput>;
  public deleteAccessKey(
    args: DeleteAccessKeyCommandInput,
    cb: (err: any, data?: DeleteAccessKeyCommandOutput) => void
  ): void;
  public deleteAccessKey(
    args: DeleteAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessKeyCommandOutput) => void
  ): void;
  public deleteAccessKey(
    args: DeleteAccessKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessKeyCommandOutput) => void
  ): Promise<DeleteAccessKeyCommandOutput> | void {
    const command = new DeleteAccessKeyCommand(args);
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
   * <p> Deletes the specified AWS account alias. For information about using an AWS
   *             account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your AWS account ID</a> in the
   *                 <i>IAM User Guide</i>.</p>
   */
  public deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountAliasCommandOutput>;
  public deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): void;
  public deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): void;
  public deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccountAliasCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): Promise<DeleteAccountAliasCommandOutput> | void {
    const command = new DeleteAccountAliasCommand(args);
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
   * <p>Deletes the password policy for the AWS account. There are no parameters.</p>
   */
  public deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountPasswordPolicyCommandOutput>;
  public deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    cb: (err: any, data?: DeleteAccountPasswordPolicyCommandOutput) => void
  ): void;
  public deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountPasswordPolicyCommandOutput) => void
  ): void;
  public deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccountPasswordPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccountPasswordPolicyCommandOutput) => void
  ): Promise<DeleteAccountPasswordPolicyCommandOutput> | void {
    const command = new DeleteAccountPasswordPolicyCommand(args);
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
   * <p>Deletes the specified IAM group. The group must not contain any users or have any
   *             attached policies.</p>
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
   * <p>Deletes the specified inline policy that is embedded in the specified IAM
   *             group.</p>
   *         <p>A group can also have managed policies attached to it. To detach a managed policy from
   *             a group, use <a>DetachGroupPolicy</a>. For more information about policies,
   *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupPolicyCommandOutput>;
  public deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    cb: (err: any, data?: DeleteGroupPolicyCommandOutput) => void
  ): void;
  public deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupPolicyCommandOutput) => void
  ): void;
  public deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupPolicyCommandOutput) => void
  ): Promise<DeleteGroupPolicyCommandOutput> | void {
    const command = new DeleteGroupPolicyCommand(args);
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
   * <p>Deletes the specified instance profile. The instance profile must not have an
   *             associated role.</p>
   *         <important>
   *             <p>Make sure that you do not have any Amazon EC2 instances running with the instance
   *                 profile you are about to delete. Deleting a role or instance profile that is
   *                 associated with a running instance will break any applications running on the
   *                 instance.</p>
   *         </important>
   *         <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
   *             profiles</a>.</p>
   */
  public deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceProfileCommandOutput>;
  public deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): void;
  public deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): void;
  public deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): Promise<DeleteInstanceProfileCommandOutput> | void {
    const command = new DeleteInstanceProfileCommand(args);
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
   * <p>Deletes the password for the specified IAM user, which terminates the user's ability
   *             to access AWS services through the AWS Management Console.</p>
   *         <p>You can use the AWS CLI, the AWS API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user.
   *             You can use <a>ChangePassword</a> to update, but not delete, your own
   *             password in the <b>My Security Credentials</b> page in the
   *             AWS Management Console.</p>
   *         <important>
   *             <p> Deleting a user's password does not prevent a user from accessing AWS through
   *                 the command line interface or the API. To prevent all user access, you must also
   *                 either make any access keys inactive or delete them. For more information about
   *                 making keys inactive or deleting them, see <a>UpdateAccessKey</a> and
   *                     <a>DeleteAccessKey</a>. </p>
   *         </important>
   */
  public deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoginProfileCommandOutput>;
  public deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    cb: (err: any, data?: DeleteLoginProfileCommandOutput) => void
  ): void;
  public deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoginProfileCommandOutput) => void
  ): void;
  public deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLoginProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteLoginProfileCommandOutput) => void
  ): Promise<DeleteLoginProfileCommandOutput> | void {
    const command = new DeleteLoginProfileCommand(args);
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
   * <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p>
   *         <p>Deleting an IAM OIDC provider resource does not update any roles that reference the
   *             provider as a principal in their trust policies. Any attempt to assume a role that
   *             references a deleted provider fails.</p>
   *         <p>This operation is idempotent; it does not fail or return an error if you call the
   *             operation for a provider that does not exist.</p>
   */
  public deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOpenIDConnectProviderCommandOutput>;
  public deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: DeleteOpenIDConnectProviderCommandOutput) => void
  ): void;
  public deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOpenIDConnectProviderCommandOutput) => void
  ): void;
  public deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOpenIDConnectProviderCommandOutput) => void),
    cb?: (err: any, data?: DeleteOpenIDConnectProviderCommandOutput) => void
  ): Promise<DeleteOpenIDConnectProviderCommandOutput> | void {
    const command = new DeleteOpenIDConnectProviderCommand(args);
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
   * <p>Deletes the specified managed policy.</p>
   *         <p>Before you can delete a managed policy, you must first detach the policy from all
   *             users, groups, and roles that it is attached to. In addition, you must delete all the
   *             policy's versions. The following steps describe the process for deleting a managed
   *             policy:</p>
   *         <ul>
   *             <li>
   *                 <p>Detach the policy from all users, groups, and roles that the policy is
   *                     attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To
   *                     list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p>
   *             </li>
   *             <li>
   *                 <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>.
   *                     To list the policy's versions, use <a>ListPolicyVersions</a>. You
   *                     cannot use <a>DeletePolicyVersion</a> to delete the version that is
   *                     marked as the default version. You delete the policy's default version in the
   *                     next step of the process.</p>
   *             </li>
   *             <li>
   *                 <p>Delete the policy (this automatically deletes the policy's default version)
   *                     using this operation.</p>
   *             </li>
   *          </ul>
   *         <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyCommandOutput>;
  public deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeletePolicyCommandOutput) => void
  ): Promise<DeletePolicyCommandOutput> | void {
    const command = new DeletePolicyCommand(args);
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
   * <p>Deletes the specified version from the specified managed policy.</p>
   *         <p>You cannot delete the default version from a policy using this operation. To delete
   *             the default version from a policy, use <a>DeletePolicy</a>. To find out which
   *             version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p>
   *         <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyVersionCommandOutput>;
  public deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): void;
  public deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): void;
  public deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): Promise<DeletePolicyVersionCommandOutput> | void {
    const command = new DeletePolicyVersionCommand(args);
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
   * <p>Deletes the specified role. The role must not have any policies attached. For more
   *             information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p>
   *         <important>
   *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you
   *                 are about to delete. Deleting a role or instance profile that is associated with a
   *                 running instance will break any applications running on the instance.</p>
   *         </important>
   */
  public deleteRole(args: DeleteRoleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoleCommandOutput>;
  public deleteRole(args: DeleteRoleCommandInput, cb: (err: any, data?: DeleteRoleCommandOutput) => void): void;
  public deleteRole(
    args: DeleteRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoleCommandOutput) => void
  ): void;
  public deleteRole(
    args: DeleteRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRoleCommandOutput) => void),
    cb?: (err: any, data?: DeleteRoleCommandOutput) => void
  ): Promise<DeleteRoleCommandOutput> | void {
    const command = new DeleteRoleCommand(args);
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
   * <p>Deletes the permissions boundary for the specified IAM role. </p>
   *         <important>
   *             <p>Deleting the permissions boundary for a role might increase its permissions. For
   *                 example, it might allow anyone who assumes the role to perform all the actions
   *                 granted in its permissions policies. </p>
   *         </important>
   */
  public deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRolePermissionsBoundaryCommandOutput>;
  public deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    cb: (err: any, data?: DeleteRolePermissionsBoundaryCommandOutput) => void
  ): void;
  public deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRolePermissionsBoundaryCommandOutput) => void
  ): void;
  public deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRolePermissionsBoundaryCommandOutput) => void),
    cb?: (err: any, data?: DeleteRolePermissionsBoundaryCommandOutput) => void
  ): Promise<DeleteRolePermissionsBoundaryCommandOutput> | void {
    const command = new DeleteRolePermissionsBoundaryCommand(args);
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
   * <p>Deletes the specified inline policy that is embedded in the specified IAM
   *             role.</p>
   *         <p>A role can also have managed policies attached to it. To detach a managed policy from
   *             a role, use <a>DetachRolePolicy</a>. For more information about policies,
   *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRolePolicyCommandOutput>;
  public deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    cb: (err: any, data?: DeleteRolePolicyCommandOutput) => void
  ): void;
  public deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRolePolicyCommandOutput) => void
  ): void;
  public deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRolePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteRolePolicyCommandOutput) => void
  ): Promise<DeleteRolePolicyCommandOutput> | void {
    const command = new DeleteRolePolicyCommand(args);
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
   * <p>Deletes a SAML provider resource in IAM.</p>
   *         <p>Deleting the provider resource from IAM does not update any roles that reference the
   *             SAML provider resource's ARN as a principal in their trust policies. Any attempt to
   *             assume a role that references a non-existent provider resource ARN fails.</p>
   *         <note>
   *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
   *         </note>
   */
  public deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSAMLProviderCommandOutput>;
  public deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    cb: (err: any, data?: DeleteSAMLProviderCommandOutput) => void
  ): void;
  public deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSAMLProviderCommandOutput) => void
  ): void;
  public deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSAMLProviderCommandOutput) => void),
    cb?: (err: any, data?: DeleteSAMLProviderCommandOutput) => void
  ): Promise<DeleteSAMLProviderCommandOutput> | void {
    const command = new DeleteSAMLProviderCommand(args);
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
   * <p>Deletes the specified server certificate.</p>
   *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
   *                 with server certificates</a> in the <i>IAM User Guide</i>. This
   *             topic also includes a list of AWS services that can use the server certificates that
   *             you manage with IAM.</p>
   *         <important>
   *             <p> If you are using a server certificate with Elastic Load Balancing, deleting the
   *                 certificate could have implications for your application. If Elastic Load Balancing
   *                 doesn't detect the deletion of bound certificates, it may continue to use the
   *                 certificates. This could cause Elastic Load Balancing to stop accepting traffic. We
   *                 recommend that you remove the reference to the certificate from Elastic Load
   *                 Balancing before using this command to delete the certificate. For more information,
   *                 see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API
   *                     Reference</i>.</p>
   *         </important>
   */
  public deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServerCertificateCommandOutput>;
  public deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    cb: (err: any, data?: DeleteServerCertificateCommandOutput) => void
  ): void;
  public deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServerCertificateCommandOutput) => void
  ): void;
  public deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServerCertificateCommandOutput) => void),
    cb?: (err: any, data?: DeleteServerCertificateCommandOutput) => void
  ): Promise<DeleteServerCertificateCommandOutput> | void {
    const command = new DeleteServerCertificateCommand(args);
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
   * <p>Submits a service-linked role deletion request and returns a
   *                 <code>DeletionTaskId</code>, which you can use to check the status of the deletion.
   *             Before you call this operation, confirm that the role has no active sessions and that
   *             any resources used by the role in the linked service are deleted. If you call this
   *             operation more than once for the same service-linked role and an earlier deletion task
   *             is not complete, then the <code>DeletionTaskId</code> of the earlier request is
   *             returned.</p>
   *         <p>If you submit a deletion request for a service-linked role whose linked service is
   *             still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the
   *             failure, usually including the resources that must be deleted. To delete the
   *             service-linked role, you must first remove those resources from the linked service and
   *             then submit the deletion request again. Resources are specific to the service that is
   *             linked to the role. For more information about removing resources from a service, see
   *             the <a href="http://docs.aws.amazon.com/">AWS documentation</a> for your
   *             service.</p>
   *         <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: AWS service-linked role</a> in the
   *                 <i>IAM User Guide</i>.</p>
   */
  public deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceLinkedRoleCommandOutput>;
  public deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    cb: (err: any, data?: DeleteServiceLinkedRoleCommandOutput) => void
  ): void;
  public deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceLinkedRoleCommandOutput) => void
  ): void;
  public deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceLinkedRoleCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceLinkedRoleCommandOutput) => void
  ): Promise<DeleteServiceLinkedRoleCommandOutput> | void {
    const command = new DeleteServiceLinkedRoleCommand(args);
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
   * <p>Deletes the specified service-specific credential.</p>
   */
  public deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceSpecificCredentialCommandOutput>;
  public deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: DeleteServiceSpecificCredentialCommandOutput) => void
  ): void;
  public deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceSpecificCredentialCommandOutput) => void
  ): void;
  public deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceSpecificCredentialCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceSpecificCredentialCommandOutput) => void
  ): Promise<DeleteServiceSpecificCredentialCommandOutput> | void {
    const command = new DeleteServiceSpecificCredentialCommand(args);
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
   * <p>Deletes a signing certificate associated with the specified IAM user.</p>
   *         <p>If you do not specify a user name, IAM determines the user name implicitly based on
   *             the AWS access key ID signing the request. This operation works for access keys under
   *             the AWS account. Consequently, you can use this operation to manage AWS account root
   *             user credentials even if the AWS account has no associated IAM users.</p>
   */
  public deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSigningCertificateCommandOutput>;
  public deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    cb: (err: any, data?: DeleteSigningCertificateCommandOutput) => void
  ): void;
  public deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSigningCertificateCommandOutput) => void
  ): void;
  public deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSigningCertificateCommandOutput) => void),
    cb?: (err: any, data?: DeleteSigningCertificateCommandOutput) => void
  ): Promise<DeleteSigningCertificateCommandOutput> | void {
    const command = new DeleteSigningCertificateCommand(args);
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
   * <p>Deletes the specified SSH public key.</p>
   *         <p>The SSH public key deleted by this operation is used only for authenticating the
   *             associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys
   *             to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for
   *                 SSH connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
   */
  public deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSSHPublicKeyCommandOutput>;
  public deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    cb: (err: any, data?: DeleteSSHPublicKeyCommandOutput) => void
  ): void;
  public deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSSHPublicKeyCommandOutput) => void
  ): void;
  public deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSSHPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteSSHPublicKeyCommandOutput) => void
  ): Promise<DeleteSSHPublicKeyCommandOutput> | void {
    const command = new DeleteSSHPublicKeyCommand(args);
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
   * <p>Deletes the specified IAM user. Unlike the AWS Management Console, when you delete a user
   *             programmatically, you must delete the items attached to the user manually, or the
   *             deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM
   *                 user</a>. Before attempting to delete a user, remove the following items:</p>
   *         <ul>
   *             <li>
   *                 <p>Password (<a>DeleteLoginProfile</a>)</p>
   *             </li>
   *             <li>
   *                 <p>Access keys (<a>DeleteAccessKey</a>)</p>
   *             </li>
   *             <li>
   *                 <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p>
   *             </li>
   *             <li>
   *                 <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p>
   *             </li>
   *             <li>
   *                 <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p>
   *             </li>
   *             <li>
   *                 <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p>
   *             </li>
   *             <li>
   *                 <p>Inline policies (<a>DeleteUserPolicy</a>)</p>
   *             </li>
   *             <li>
   *                 <p>Attached managed policies (<a>DetachUserPolicy</a>)</p>
   *             </li>
   *             <li>
   *                 <p>Group memberships (<a>RemoveUserFromGroup</a>)</p>
   *             </li>
   *          </ul>
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
   * <p>Deletes the permissions boundary for the specified IAM user.</p>
   *         <important>
   *             <p>Deleting the permissions boundary for a user might increase its permissions by
   *                 allowing the user to perform all the actions granted in its permissions policies.
   *             </p>
   *         </important>
   */
  public deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPermissionsBoundaryCommandOutput>;
  public deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    cb: (err: any, data?: DeleteUserPermissionsBoundaryCommandOutput) => void
  ): void;
  public deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPermissionsBoundaryCommandOutput) => void
  ): void;
  public deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserPermissionsBoundaryCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserPermissionsBoundaryCommandOutput) => void
  ): Promise<DeleteUserPermissionsBoundaryCommandOutput> | void {
    const command = new DeleteUserPermissionsBoundaryCommand(args);
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
   * <p>Deletes the specified inline policy that is embedded in the specified IAM
   *             user.</p>
   *         <p>A user can also have managed policies attached to it. To detach a managed policy from
   *             a user, use <a>DetachUserPolicy</a>. For more information about policies,
   *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPolicyCommandOutput>;
  public deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    cb: (err: any, data?: DeleteUserPolicyCommandOutput) => void
  ): void;
  public deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPolicyCommandOutput) => void
  ): void;
  public deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserPolicyCommandOutput) => void
  ): Promise<DeleteUserPolicyCommandOutput> | void {
    const command = new DeleteUserPolicyCommand(args);
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
   * <p>Deletes a virtual MFA device.</p>
   *         <note>
   *             <p> You must deactivate a user's virtual MFA device before you can delete it. For
   *                 information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p>
   *         </note>
   */
  public deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualMFADeviceCommandOutput>;
  public deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    cb: (err: any, data?: DeleteVirtualMFADeviceCommandOutput) => void
  ): void;
  public deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualMFADeviceCommandOutput) => void
  ): void;
  public deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVirtualMFADeviceCommandOutput) => void),
    cb?: (err: any, data?: DeleteVirtualMFADeviceCommandOutput) => void
  ): Promise<DeleteVirtualMFADeviceCommandOutput> | void {
    const command = new DeleteVirtualMFADeviceCommand(args);
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
   * <p>Removes the specified managed policy from the specified IAM group.</p>
   *         <p>A group can also have inline policies embedded with it. To delete an inline policy,
   *             use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
   *                 policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  public detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachGroupPolicyCommandOutput>;
  public detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    cb: (err: any, data?: DetachGroupPolicyCommandOutput) => void
  ): void;
  public detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachGroupPolicyCommandOutput) => void
  ): void;
  public detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachGroupPolicyCommandOutput) => void),
    cb?: (err: any, data?: DetachGroupPolicyCommandOutput) => void
  ): Promise<DetachGroupPolicyCommandOutput> | void {
    const command = new DetachGroupPolicyCommand(args);
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
   * <p>Removes the specified managed policy from the specified role.</p>
   *         <p>A role can also have inline policies embedded with it. To delete an inline policy, use
   *                 <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
   *                 policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  public detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachRolePolicyCommandOutput>;
  public detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    cb: (err: any, data?: DetachRolePolicyCommandOutput) => void
  ): void;
  public detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachRolePolicyCommandOutput) => void
  ): void;
  public detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachRolePolicyCommandOutput) => void),
    cb?: (err: any, data?: DetachRolePolicyCommandOutput) => void
  ): Promise<DetachRolePolicyCommandOutput> | void {
    const command = new DetachRolePolicyCommand(args);
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
   * <p>Removes the specified managed policy from the specified user.</p>
   *         <p>A user can also have inline policies embedded with it. To delete an inline policy, use
   *                 <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
   *                 policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  public detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachUserPolicyCommandOutput>;
  public detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    cb: (err: any, data?: DetachUserPolicyCommandOutput) => void
  ): void;
  public detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachUserPolicyCommandOutput) => void
  ): void;
  public detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachUserPolicyCommandOutput) => void),
    cb?: (err: any, data?: DetachUserPolicyCommandOutput) => void
  ): Promise<DetachUserPolicyCommandOutput> | void {
    const command = new DetachUserPolicyCommand(args);
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
   * <p>Enables the specified MFA device and associates it with the specified IAM user. When
   *             enabled, the MFA device is required for every subsequent login by the IAM user
   *             associated with the device.</p>
   */
  public enableMFADevice(
    args: EnableMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableMFADeviceCommandOutput>;
  public enableMFADevice(
    args: EnableMFADeviceCommandInput,
    cb: (err: any, data?: EnableMFADeviceCommandOutput) => void
  ): void;
  public enableMFADevice(
    args: EnableMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableMFADeviceCommandOutput) => void
  ): void;
  public enableMFADevice(
    args: EnableMFADeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableMFADeviceCommandOutput) => void),
    cb?: (err: any, data?: EnableMFADeviceCommandOutput) => void
  ): Promise<EnableMFADeviceCommandOutput> | void {
    const command = new EnableMFADeviceCommand(args);
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
   * <p> Generates a credential report for the AWS account. For more information about the
   *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
   *             the <i>IAM User Guide</i>.</p>
   */
  public generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateCredentialReportCommandOutput>;
  public generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    cb: (err: any, data?: GenerateCredentialReportCommandOutput) => void
  ): void;
  public generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateCredentialReportCommandOutput) => void
  ): void;
  public generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateCredentialReportCommandOutput) => void),
    cb?: (err: any, data?: GenerateCredentialReportCommandOutput) => void
  ): Promise<GenerateCredentialReportCommandOutput> | void {
    const command = new GenerateCredentialReportCommand(args);
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
   * <p>Generates a report for service last accessed data for AWS Organizations. You can generate a report
   *             for any entities (organization root, organizational unit, or account) or policies in
   *             your organization.</p>
   *         <p>To call this operation, you must be signed in using your AWS Organizations management account
   *             credentials. You can use your long-term IAM user or root user credentials, or
   *             temporary credentials from assuming an IAM role. SCPs must be enabled for your
   *             organization root. You must have the required IAM and AWS Organizations permissions. For more
   *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using
   *                 service last accessed data</a> in the
   *             <i>IAM User Guide</i>.</p>
   *         <p>You can generate a service last accessed data report for entities by specifying only
   *             the entity's path. This data includes a list of services that are allowed by any service
   *             control policies (SCPs) that apply to the entity.</p>
   *         <p>You can generate a service last accessed data report for a policy by specifying an
   *             entity's path and an optional AWS Organizations policy ID. This data includes a list of services that
   *             are allowed by the specified SCP.</p>
   *         <p>For each service in both report types, the data includes the most recent account
   *             activity that the policy allows to account principals in the entity or the entity's
   *             children. For important information about the data, reporting period, permissions
   *             required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using
   *                 service last accessed data</a> in the
   *             <i>IAM User Guide</i>.</p>
   *         <important>
   *             <p>The data includes all attempts to access AWS, not just the successful ones. This
   *                 includes all attempts that were made using the AWS Management Console, the AWS API through any
   *                 of the SDKs, or any of the command line tools. An unexpected entry in the service
   *                 last accessed data does not mean that an account has been compromised, because the
   *                 request might have been denied. Refer to your CloudTrail logs as the authoritative
   *                 source for information about all API calls and whether they were successful or
   *                 denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with
   *                     CloudTrail</a> in the <i>IAM User Guide</i>.</p>
   *         </important>
   *         <p>This operation returns a <code>JobId</code>. Use this parameter in the <code>
   *                <a>GetOrganizationsAccessReport</a>
   *             </code> operation to check the status of
   *             the report generation. To check the status of this request, use the <code>JobId</code>
   *             parameter in the <code>
   *                <a>GetOrganizationsAccessReport</a>
   *             </code> operation
   *             and test the <code>JobStatus</code> response parameter. When the job is complete, you
   *             can retrieve the report.</p>
   *         <p>To generate a service last accessed data report for entities, specify an entity path
   *             without specifying the optional AWS Organizations policy ID. The type of entity that you specify
   *             determines the data returned in the report.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Root</b> – When you specify the
   *                     organizations root as the entity, the resulting report lists all of the services
   *                     allowed by SCPs that are attached to your root. For each service, the report
   *                     includes data for all accounts in your organization except the
   *                     management account, because the management account is not limited by SCPs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>OU</b> – When you specify an
   *                     organizational unit (OU) as the entity, the resulting report lists all of the
   *                     services allowed by SCPs that are attached to the OU and its parents. For each
   *                     service, the report includes data for all accounts in the OU or its children.
   *                     This data excludes the management account, because the management account is not
   *                     limited by SCPs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>management account</b> – When you specify the
   *                     management account, the resulting report lists all AWS services, because the
   *                     management account is not limited by SCPs. For each service, the report includes
   *                     data for only the management account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Account</b> – When you specify another
   *                     account as the entity, the resulting report lists all of the services allowed by
   *                     SCPs that are attached to the account and its parents. For each service, the
   *                     report includes data for only the specified account.</p>
   *             </li>
   *          </ul>
   *         <p>To generate a service last accessed data report for policies, specify an entity path
   *             and the optional AWS Organizations policy ID. The type of entity that you specify determines the data
   *             returned for each service.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Root</b> – When you specify the root
   *                     entity and a policy ID, the resulting report lists all of the services that are
   *                     allowed by the specified SCP. For each service, the report includes data for all
   *                     accounts in your organization to which the SCP applies. This data excludes the
   *                     management account, because the management account is not limited by SCPs. If the
   *                     SCP is not attached to any entities in the organization, then the report will
   *                     return a list of services with no data.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>OU</b> – When you specify an OU entity and
   *                     a policy ID, the resulting report lists all of the services that are allowed by
   *                     the specified SCP. For each service, the report includes data for all accounts
   *                     in the OU or its children to which the SCP applies. This means that other
   *                     accounts outside the OU that are affected by the SCP might not be included in
   *                     the data. This data excludes the management account, because the
   *                     management account is not limited by SCPs. If the SCP is not attached to the OU
   *                     or one of its children, the report will return a list of services with no
   *                     data.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>management account</b> – When you specify the
   *                     management account, the resulting report lists all AWS services, because the
   *                     management account is not limited by SCPs. If you specify a policy ID in the CLI
   *                     or API, the policy is ignored. For each service, the report includes data for
   *                     only the management account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Account</b> – When you specify another
   *                     account entity and a policy ID, the resulting report lists all of the services
   *                     that are allowed by the specified SCP. For each service, the report includes
   *                     data for only the specified account. This means that other accounts in the
   *                     organization that are affected by the SCP might not be included in the data. If
   *                     the SCP is not attached to the account, the report will return a list of
   *                     services with no data.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Service last accessed data does not use other policy types when determining
   *                 whether a principal could access a service. These other policy types include
   *                 identity-based policies, resource-based policies, access control lists, IAM
   *                 permissions boundaries, and STS assume role policies. It only applies SCP logic.
   *                 For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *         </note>
   *         <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by
   *                 viewing user activity</a> in the <i>IAM User Guide</i>.</p>
   */
  public generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateOrganizationsAccessReportCommandOutput>;
  public generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    cb: (err: any, data?: GenerateOrganizationsAccessReportCommandOutput) => void
  ): void;
  public generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateOrganizationsAccessReportCommandOutput) => void
  ): void;
  public generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateOrganizationsAccessReportCommandOutput) => void),
    cb?: (err: any, data?: GenerateOrganizationsAccessReportCommandOutput) => void
  ): Promise<GenerateOrganizationsAccessReportCommandOutput> | void {
    const command = new GenerateOrganizationsAccessReportCommand(args);
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
   * <p>Generates a report that includes details about when an IAM resource (user, group,
   *             role, or policy) was last used in an attempt to access AWS services. Recent activity
   *             usually appears within four hours. IAM reports activity for the last 365 days, or less
   *             if your Region began supporting this feature within the last year. For more information,
   *             see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p>
   *         <important>
   *             <p>The service last accessed data includes all attempts to access an AWS API, not
   *                 just the successful ones. This includes all attempts that were made using the
   *                 AWS Management Console, the AWS API through any of the SDKs, or any of the command line tools.
   *                 An unexpected entry in the service last accessed data does not mean that your
   *                 account has been compromised, because the request might have been denied. Refer to
   *                 your CloudTrail logs as the authoritative source for information about all API calls
   *                 and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging
   *                     IAM events with CloudTrail</a> in the
   *                     <i>IAM User Guide</i>.</p>
   *         </important>
   *         <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a
   *                 <code>JobId</code>. Use this parameter in the following operations to retrieve the
   *             following details from your report: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a>GetServiceLastAccessedDetails</a> – Use this operation
   *                     for users, groups, roles, or policies to list every AWS service that the
   *                     resource could access using permissions policies. For each service, the response
   *                     includes information about the most recent access attempt.</p>
   *                 <p>The <code>JobId</code> returned by
   *                         <code>GenerateServiceLastAccessedDetail</code> must be used by the same role
   *                     within a session, or by the same user when used to call
   *                         <code>GetServiceLastAccessedDetail</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this
   *                     operation for groups and policies to list information about the associated
   *                     entities (users or roles) that attempted to access a specific AWS service.
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request,
   *             use the <code>JobId</code> parameter in the same operations and test the
   *                 <code>JobStatus</code> response parameter.</p>
   *         <p>For additional information about the permissions policies that allow an identity
   *             (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
   *         <note>
   *             <p>Service last accessed data does not use other policy types when determining
   *                 whether a resource could access a service. These other policy types include
   *                 resource-based policies, access control lists, AWS Organizations policies, IAM
   *                 permissions boundaries, and AWS STS assume role policies. It only applies
   *                 permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *         </note>
   *         <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the
   *                 <i>IAM User Guide</i>.</p>
   */
  public generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateServiceLastAccessedDetailsCommandOutput>;
  public generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    cb: (err: any, data?: GenerateServiceLastAccessedDetailsCommandOutput) => void
  ): void;
  public generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateServiceLastAccessedDetailsCommandOutput) => void
  ): void;
  public generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateServiceLastAccessedDetailsCommandOutput) => void),
    cb?: (err: any, data?: GenerateServiceLastAccessedDetailsCommandOutput) => void
  ): Promise<GenerateServiceLastAccessedDetailsCommandOutput> | void {
    const command = new GenerateServiceLastAccessedDetailsCommand(args);
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
   * <p>Retrieves information about when the specified access key was last used. The
   *             information includes the date and time of last use, along with the AWS service and
   *             Region that were specified in the last request made with that key.</p>
   */
  public getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessKeyLastUsedCommandOutput>;
  public getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    cb: (err: any, data?: GetAccessKeyLastUsedCommandOutput) => void
  ): void;
  public getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessKeyLastUsedCommandOutput) => void
  ): void;
  public getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccessKeyLastUsedCommandOutput) => void),
    cb?: (err: any, data?: GetAccessKeyLastUsedCommandOutput) => void
  ): Promise<GetAccessKeyLastUsedCommandOutput> | void {
    const command = new GetAccessKeyLastUsedCommand(args);
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
   * <p>Retrieves information about all IAM users, groups, roles, and policies in your AWS
   *             account, including their relationships to one another. Use this operation to obtain a
   *             snapshot of the configuration of IAM permissions (users, groups, roles, and policies)
   *             in your account.</p>
   *         <note>
   *             <p>Policies returned by this operation are URL-encoded compliant
   *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
   *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
   *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
   *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
   *          </note>
   *         <p>You can optionally filter the results using the <code>Filter</code> parameter. You can
   *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   */
  public getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountAuthorizationDetailsCommandOutput>;
  public getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    cb: (err: any, data?: GetAccountAuthorizationDetailsCommandOutput) => void
  ): void;
  public getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountAuthorizationDetailsCommandOutput) => void
  ): void;
  public getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountAuthorizationDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetAccountAuthorizationDetailsCommandOutput) => void
  ): Promise<GetAccountAuthorizationDetailsCommandOutput> | void {
    const command = new GetAccountAuthorizationDetailsCommand(args);
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
   * <p>Retrieves the password policy for the AWS account. This tells you the complexity
   *             requirements and mandatory rotation periods for the IAM user passwords in your account.
   *             For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password
   *                 policy</a>.</p>
   */
  public getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountPasswordPolicyCommandOutput>;
  public getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    cb: (err: any, data?: GetAccountPasswordPolicyCommandOutput) => void
  ): void;
  public getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountPasswordPolicyCommandOutput) => void
  ): void;
  public getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountPasswordPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetAccountPasswordPolicyCommandOutput) => void
  ): Promise<GetAccountPasswordPolicyCommandOutput> | void {
    const command = new GetAccountPasswordPolicyCommand(args);
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
   * <p>Retrieves information about IAM entity usage and IAM quotas in the AWS
   *             account.</p>
   *         <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the
   *                 <i>IAM User Guide</i>.</p>
   */
  public getAccountSummary(
    args: GetAccountSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSummaryCommandOutput>;
  public getAccountSummary(
    args: GetAccountSummaryCommandInput,
    cb: (err: any, data?: GetAccountSummaryCommandOutput) => void
  ): void;
  public getAccountSummary(
    args: GetAccountSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSummaryCommandOutput) => void
  ): void;
  public getAccountSummary(
    args: GetAccountSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetAccountSummaryCommandOutput) => void
  ): Promise<GetAccountSummaryCommandOutput> | void {
    const command = new GetAccountSummaryCommand(args);
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
   * <p>Gets a list of all of the context keys referenced in the input policies. The policies
   *             are supplied as a list of one or more strings. To get the context keys from policies
   *             associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
   *         <p>Context keys are variables maintained by AWS and its services that provide details
   *             about the context of an API query request. Context keys can be evaluated by testing
   *             against a value specified in an IAM policy. Use
   *                 <code>GetContextKeysForCustomPolicy</code> to understand what key names and values
   *             you must supply when you call <a>SimulateCustomPolicy</a>. Note that all
   *             parameters are shown in unencoded form here for clarity but must be URL encoded to be
   *             included as a part of a real HTML request.</p>
   */
  public getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContextKeysForCustomPolicyCommandOutput>;
  public getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    cb: (err: any, data?: GetContextKeysForCustomPolicyCommandOutput) => void
  ): void;
  public getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContextKeysForCustomPolicyCommandOutput) => void
  ): void;
  public getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContextKeysForCustomPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetContextKeysForCustomPolicyCommandOutput) => void
  ): Promise<GetContextKeysForCustomPolicyCommandOutput> | void {
    const command = new GetContextKeysForCustomPolicyCommand(args);
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
   * <p>Gets a list of all of the context keys referenced in all the IAM policies that are
   *             attached to the specified IAM entity. The entity can be an IAM user, group, or role.
   *             If you specify a user, then the request also includes all of the policies attached to
   *             groups that the user is a member of.</p>
   *         <p>You can optionally include a list of one or more additional policies, specified as
   *             strings. If you want to include <i>only</i> a list of policies by string,
   *             use <a>GetContextKeysForCustomPolicy</a> instead.</p>
   *         <p>
   *             <b>Note:</b> This operation discloses information about the
   *             permissions granted to other users. If you do not want users to see other user's
   *             permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p>
   *         <p>Context keys are variables maintained by AWS and its services that provide details
   *             about the context of an API query request. Context keys can be evaluated by testing
   *             against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
   */
  public getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContextKeysForPrincipalPolicyCommandOutput>;
  public getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    cb: (err: any, data?: GetContextKeysForPrincipalPolicyCommandOutput) => void
  ): void;
  public getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContextKeysForPrincipalPolicyCommandOutput) => void
  ): void;
  public getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContextKeysForPrincipalPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetContextKeysForPrincipalPolicyCommandOutput) => void
  ): Promise<GetContextKeysForPrincipalPolicyCommandOutput> | void {
    const command = new GetContextKeysForPrincipalPolicyCommand(args);
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
   * <p> Retrieves a credential report for the AWS account. For more information about the
   *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
   *             the <i>IAM User Guide</i>.</p>
   */
  public getCredentialReport(
    args: GetCredentialReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCredentialReportCommandOutput>;
  public getCredentialReport(
    args: GetCredentialReportCommandInput,
    cb: (err: any, data?: GetCredentialReportCommandOutput) => void
  ): void;
  public getCredentialReport(
    args: GetCredentialReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCredentialReportCommandOutput) => void
  ): void;
  public getCredentialReport(
    args: GetCredentialReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCredentialReportCommandOutput) => void),
    cb?: (err: any, data?: GetCredentialReportCommandOutput) => void
  ): Promise<GetCredentialReportCommandOutput> | void {
    const command = new GetCredentialReportCommand(args);
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
   * <p> Returns a list of IAM users that are in the specified IAM group. You can paginate
   *             the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
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
   * <p>Retrieves the specified inline policy document that is embedded in the specified IAM
   *             group.</p>
   *         <note>
   *             <p>Policies returned by this operation are URL-encoded compliant
   *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
   *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
   *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
   *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
   *          </note>
   *         <p>An IAM group can also have managed policies attached to it. To retrieve a managed
   *             policy document that is attached to a group, use <a>GetPolicy</a> to
   *             determine the policy's default version, then use <a>GetPolicyVersion</a> to
   *             retrieve the policy document.</p>
   *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public getGroupPolicy(
    args: GetGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupPolicyCommandOutput>;
  public getGroupPolicy(
    args: GetGroupPolicyCommandInput,
    cb: (err: any, data?: GetGroupPolicyCommandOutput) => void
  ): void;
  public getGroupPolicy(
    args: GetGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupPolicyCommandOutput) => void
  ): void;
  public getGroupPolicy(
    args: GetGroupPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetGroupPolicyCommandOutput) => void
  ): Promise<GetGroupPolicyCommandOutput> | void {
    const command = new GetGroupPolicyCommand(args);
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
   * <p> Retrieves information about the specified instance profile, including the instance
   *             profile's path, GUID, ARN, and role. For more information about instance profiles, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
   *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
   */
  public getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceProfileCommandOutput>;
  public getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    cb: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): void;
  public getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): void;
  public getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): Promise<GetInstanceProfileCommandOutput> | void {
    const command = new GetInstanceProfileCommand(args);
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
   * <p>Retrieves the user name and password creation date for the specified IAM user. If
   *             the user has not been assigned a password, the operation returns a 404
   *                 (<code>NoSuchEntity</code>) error.</p>
   */
  public getLoginProfile(
    args: GetLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoginProfileCommandOutput>;
  public getLoginProfile(
    args: GetLoginProfileCommandInput,
    cb: (err: any, data?: GetLoginProfileCommandOutput) => void
  ): void;
  public getLoginProfile(
    args: GetLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoginProfileCommandOutput) => void
  ): void;
  public getLoginProfile(
    args: GetLoginProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLoginProfileCommandOutput) => void),
    cb?: (err: any, data?: GetLoginProfileCommandOutput) => void
  ): Promise<GetLoginProfileCommandOutput> | void {
    const command = new GetLoginProfileCommand(args);
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
   * <p>Returns information about the specified OpenID Connect (OIDC) provider resource object
   *             in IAM.</p>
   */
  public getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpenIDConnectProviderCommandOutput>;
  public getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: GetOpenIDConnectProviderCommandOutput) => void
  ): void;
  public getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpenIDConnectProviderCommandOutput) => void
  ): void;
  public getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOpenIDConnectProviderCommandOutput) => void),
    cb?: (err: any, data?: GetOpenIDConnectProviderCommandOutput) => void
  ): Promise<GetOpenIDConnectProviderCommandOutput> | void {
    const command = new GetOpenIDConnectProviderCommand(args);
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
   * <p>Retrieves the service last accessed data report for AWS Organizations that was previously generated
   *             using the <code>
   *                <a>GenerateOrganizationsAccessReport</a>
   *             </code> operation.
   *             This operation retrieves the status of your report job and the report contents.</p>
   *         <p>Depending on the parameters that you passed when you generated the report, the data
   *             returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p>
   *         <p>To call this operation, you must be signed in to the management account in your
   *             organization. SCPs must be enabled for your organization root. You must have permissions
   *             to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using
   *                 service last accessed data</a> in the
   *             <i>IAM User Guide</i>.</p>
   *         <p>For each service that principals in an account (root users, IAM users, or IAM
   *             roles) could access using SCPs, the operation returns details about the most recent
   *             access attempt. If there was no attempt, the service is listed without details about the
   *             most recent attempt to access the service. If the operation fails, it returns the reason
   *             that it failed.</p>
   *         <p>By default, the list is sorted by service namespace.</p>
   */
  public getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationsAccessReportCommandOutput>;
  public getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    cb: (err: any, data?: GetOrganizationsAccessReportCommandOutput) => void
  ): void;
  public getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationsAccessReportCommandOutput) => void
  ): void;
  public getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOrganizationsAccessReportCommandOutput) => void),
    cb?: (err: any, data?: GetOrganizationsAccessReportCommandOutput) => void
  ): Promise<GetOrganizationsAccessReportCommandOutput> | void {
    const command = new GetOrganizationsAccessReportCommand(args);
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
   * <p>Retrieves information about the specified managed policy, including the policy's
   *             default version and the total number of IAM users, groups, and roles to which the
   *             policy is attached. To retrieve the list of the specific users, groups, and roles that
   *             the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation
   *             returns metadata about the policy. To retrieve the actual policy document for a specific
   *             version of the policy, use <a>GetPolicyVersion</a>.</p>
   *         <p>This operation retrieves information about managed policies. To retrieve information
   *             about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p>
   *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  public getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetPolicyCommandOutput) => void
  ): Promise<GetPolicyCommandOutput> | void {
    const command = new GetPolicyCommand(args);
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
   * <p>Retrieves information about the specified version of the specified managed policy,
   *             including the policy document.</p>
   *         <note>
   *             <p>Policies returned by this operation are URL-encoded compliant
   *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
   *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
   *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
   *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
   *          </note>
   *         <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p>
   *         <p>This operation retrieves information about managed policies. To retrieve information
   *             about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p>
   *         <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   *         <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyVersionCommandOutput>;
  public getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;
  public getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;
  public getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): Promise<GetPolicyVersionCommandOutput> | void {
    const command = new GetPolicyVersionCommand(args);
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
   * <p>Retrieves information about the specified role, including the role's path, GUID, ARN,
   *             and the role's trust policy that grants permission to assume the role. For more
   *             information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p>
   *         <note>
   *             <p>Policies returned by this operation are URL-encoded compliant
   *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
   *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
   *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
   *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
   *          </note>
   */
  public getRole(args: GetRoleCommandInput, options?: __HttpHandlerOptions): Promise<GetRoleCommandOutput>;
  public getRole(args: GetRoleCommandInput, cb: (err: any, data?: GetRoleCommandOutput) => void): void;
  public getRole(
    args: GetRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoleCommandOutput) => void
  ): void;
  public getRole(
    args: GetRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRoleCommandOutput) => void),
    cb?: (err: any, data?: GetRoleCommandOutput) => void
  ): Promise<GetRoleCommandOutput> | void {
    const command = new GetRoleCommand(args);
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
   * <p>Retrieves the specified inline policy document that is embedded with the specified
   *             IAM role.</p>
   *         <note>
   *             <p>Policies returned by this operation are URL-encoded compliant
   *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
   *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
   *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
   *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
   *          </note>
   *         <p>An IAM role can also have managed policies attached to it. To retrieve a managed
   *             policy document that is attached to a role, use <a>GetPolicy</a> to determine
   *             the policy's default version, then use <a>GetPolicyVersion</a> to retrieve
   *             the policy document.</p>
   *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   *         <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and
   *                 federate identities</a>.</p>
   */
  public getRolePolicy(
    args: GetRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRolePolicyCommandOutput>;
  public getRolePolicy(
    args: GetRolePolicyCommandInput,
    cb: (err: any, data?: GetRolePolicyCommandOutput) => void
  ): void;
  public getRolePolicy(
    args: GetRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRolePolicyCommandOutput) => void
  ): void;
  public getRolePolicy(
    args: GetRolePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRolePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetRolePolicyCommandOutput) => void
  ): Promise<GetRolePolicyCommandOutput> | void {
    const command = new GetRolePolicyCommand(args);
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
   * <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider
   *             resource object was created or updated.</p>
   *         <note>
   *             <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
   *         </note>
   */
  public getSAMLProvider(
    args: GetSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSAMLProviderCommandOutput>;
  public getSAMLProvider(
    args: GetSAMLProviderCommandInput,
    cb: (err: any, data?: GetSAMLProviderCommandOutput) => void
  ): void;
  public getSAMLProvider(
    args: GetSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSAMLProviderCommandOutput) => void
  ): void;
  public getSAMLProvider(
    args: GetSAMLProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSAMLProviderCommandOutput) => void),
    cb?: (err: any, data?: GetSAMLProviderCommandOutput) => void
  ): Promise<GetSAMLProviderCommandOutput> | void {
    const command = new GetSAMLProviderCommand(args);
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
   * <p>Retrieves information about the specified server certificate stored in IAM.</p>
   *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
   *                 with server certificates</a> in the <i>IAM User Guide</i>. This
   *             topic includes a list of AWS services that can use the server certificates that you
   *             manage with IAM.</p>
   */
  public getServerCertificate(
    args: GetServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServerCertificateCommandOutput>;
  public getServerCertificate(
    args: GetServerCertificateCommandInput,
    cb: (err: any, data?: GetServerCertificateCommandOutput) => void
  ): void;
  public getServerCertificate(
    args: GetServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServerCertificateCommandOutput) => void
  ): void;
  public getServerCertificate(
    args: GetServerCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServerCertificateCommandOutput) => void),
    cb?: (err: any, data?: GetServerCertificateCommandOutput) => void
  ): Promise<GetServerCertificateCommandOutput> | void {
    const command = new GetServerCertificateCommand(args);
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
   * <p>Retrieves a service last accessed report that was created using the
   *                 <code>GenerateServiceLastAccessedDetails</code> operation. You can use the
   *                 <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to
   *             retrieve the status of your report job. When the report is complete, you can retrieve
   *             the generated report. The report includes a list of AWS services that the resource
   *             (user, group, role, or managed policy) can access.</p>
   *         <note>
   *             <p>Service last accessed data does not use other policy types when determining
   *                 whether a resource could access a service. These other policy types include
   *                 resource-based policies, access control lists, AWS Organizations policies, IAM
   *                 permissions boundaries, and AWS STS assume role policies. It only applies
   *                 permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *         </note>
   *         <p>For each service that the resource could access using permissions policies, the
   *             operation returns details about the most recent access attempt. If there was no attempt,
   *             the service is listed without details about the most recent attempt to access the
   *             service. If the operation fails, the <code>GetServiceLastAccessedDetails</code>
   *             operation returns the reason that it failed.</p>
   *         <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services.
   *             This list includes the number of entities that have attempted to access the service and
   *             the date and time of the last attempt. It also returns the ARN of the following entity,
   *             depending on the resource ARN that you used to generate the report:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>User</b> – Returns the user ARN that you
   *                     used to generate the report</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Group</b> – Returns the ARN of the group
   *                     member (user) that last attempted to access the service</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Role</b> – Returns the role ARN that you
   *                     used to generate the report</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Policy</b> – Returns the ARN of the user
   *                     or role that last used the policy to attempt to access the service</p>
   *             </li>
   *          </ul>
   *         <p>By default, the list is sorted by service namespace.</p>
   *         <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report,
   *             this operation returns service and action last accessed data. This includes the most
   *             recent access attempt for each tracked action within a service. Otherwise, this
   *             operation returns only service data.</p>
   *         <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the
   *                 <i>IAM User Guide</i>.</p>
   */
  public getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceLastAccessedDetailsCommandOutput>;
  public getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    cb: (err: any, data?: GetServiceLastAccessedDetailsCommandOutput) => void
  ): void;
  public getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceLastAccessedDetailsCommandOutput) => void
  ): void;
  public getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceLastAccessedDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetServiceLastAccessedDetailsCommandOutput) => void
  ): Promise<GetServiceLastAccessedDetailsCommandOutput> | void {
    const command = new GetServiceLastAccessedDetailsCommand(args);
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
   * <p>After you generate a group or policy report using the
   *                 <code>GenerateServiceLastAccessedDetails</code> operation, you can use the
   *                 <code>JobId</code> parameter in
   *                 <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the
   *             status of your report job and a list of entities that could have used group or policy
   *             permissions to access the specified service.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Group</b> – For a group report, this
   *                     operation returns a list of users in the group that could have used the group’s
   *                     policies in an attempt to access the service.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Policy</b> – For a policy report, this
   *                     operation returns a list of entities (users or roles) that could have used the
   *                     policy in an attempt to access the service.</p>
   *             </li>
   *          </ul>
   *         <p>You can also use this operation for user or role reports to retrieve details about
   *             those entities.</p>
   *         <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code>
   *             operation returns the reason that it failed.</p>
   *         <p>By default, the list of associated entities is sorted by date, with the most recent
   *             access listed first.</p>
   */
  public getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput>;
  public getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    cb: (err: any, data?: GetServiceLastAccessedDetailsWithEntitiesCommandOutput) => void
  ): void;
  public getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceLastAccessedDetailsWithEntitiesCommandOutput) => void
  ): void;
  public getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetServiceLastAccessedDetailsWithEntitiesCommandOutput) => void),
    cb?: (err: any, data?: GetServiceLastAccessedDetailsWithEntitiesCommandOutput) => void
  ): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput> | void {
    const command = new GetServiceLastAccessedDetailsWithEntitiesCommand(args);
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
   * <p>Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion,
   *             you can use the <code>DeletionTaskId</code> parameter in
   *                 <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion.
   *             If the deletion fails, this operation returns the reason that it failed, if that
   *             information is returned by the service.</p>
   */
  public getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput>;
  public getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    cb: (err: any, data?: GetServiceLinkedRoleDeletionStatusCommandOutput) => void
  ): void;
  public getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceLinkedRoleDeletionStatusCommandOutput) => void
  ): void;
  public getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceLinkedRoleDeletionStatusCommandOutput) => void),
    cb?: (err: any, data?: GetServiceLinkedRoleDeletionStatusCommandOutput) => void
  ): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> | void {
    const command = new GetServiceLinkedRoleDeletionStatusCommand(args);
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
   * <p>Retrieves the specified SSH public key, including metadata about the key.</p>
   *         <p>The SSH public key retrieved by this operation is used only for authenticating the
   *             associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys
   *             to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH
   *                 connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
   */
  public getSSHPublicKey(
    args: GetSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSSHPublicKeyCommandOutput>;
  public getSSHPublicKey(
    args: GetSSHPublicKeyCommandInput,
    cb: (err: any, data?: GetSSHPublicKeyCommandOutput) => void
  ): void;
  public getSSHPublicKey(
    args: GetSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSSHPublicKeyCommandOutput) => void
  ): void;
  public getSSHPublicKey(
    args: GetSSHPublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSSHPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: GetSSHPublicKeyCommandOutput) => void
  ): Promise<GetSSHPublicKeyCommandOutput> | void {
    const command = new GetSSHPublicKeyCommand(args);
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
   * <p>Retrieves information about the specified IAM user, including the user's creation
   *             date, path, unique ID, and ARN.</p>
   *         <p>If you do not specify a user name, IAM determines the user name implicitly based on
   *             the AWS access key ID used to sign the request to this operation.</p>
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
   * <p>Retrieves the specified inline policy document that is embedded in the specified IAM
   *             user.</p>
   *         <note>
   *             <p>Policies returned by this operation are URL-encoded compliant
   *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
   *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
   *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
   *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
   *          </note>
   *         <p>An IAM user can also have managed policies attached to it. To retrieve a managed
   *             policy document that is attached to a user, use <a>GetPolicy</a> to determine
   *             the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve
   *             the policy document.</p>
   *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public getUserPolicy(
    args: GetUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserPolicyCommandOutput>;
  public getUserPolicy(
    args: GetUserPolicyCommandInput,
    cb: (err: any, data?: GetUserPolicyCommandOutput) => void
  ): void;
  public getUserPolicy(
    args: GetUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserPolicyCommandOutput) => void
  ): void;
  public getUserPolicy(
    args: GetUserPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetUserPolicyCommandOutput) => void
  ): Promise<GetUserPolicyCommandOutput> | void {
    const command = new GetUserPolicyCommand(args);
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
   * <p>Returns information about the access key IDs associated with the specified IAM user.
   *             If there is none, the operation returns an empty list.</p>
   *         <p>Although each user is limited to a small number of keys, you can still paginate the
   *             results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *         <p>If the <code>UserName</code> field is not specified, the user name is determined
   *             implicitly based on the AWS access key ID used to sign the request. This operation
   *             works for access keys under the AWS account. Consequently, you can use this operation
   *             to manage AWS account root user credentials even if the AWS account has no
   *             associated users.</p>
   *         <note>
   *             <p>To ensure the security of your AWS account, the secret access key is accessible
   *                 only during key and user creation.</p>
   *         </note>
   */
  public listAccessKeys(
    args: ListAccessKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessKeysCommandOutput>;
  public listAccessKeys(
    args: ListAccessKeysCommandInput,
    cb: (err: any, data?: ListAccessKeysCommandOutput) => void
  ): void;
  public listAccessKeys(
    args: ListAccessKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessKeysCommandOutput) => void
  ): void;
  public listAccessKeys(
    args: ListAccessKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccessKeysCommandOutput) => void),
    cb?: (err: any, data?: ListAccessKeysCommandOutput) => void
  ): Promise<ListAccessKeysCommandOutput> | void {
    const command = new ListAccessKeysCommand(args);
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
   * <p>Lists the account alias associated with the AWS account (Note: you can have only
   *             one). For information about using an AWS account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your
   *                 AWS account ID</a> in the <i>IAM User Guide</i>.</p>
   */
  public listAccountAliases(
    args: ListAccountAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAliasesCommandOutput>;
  public listAccountAliases(
    args: ListAccountAliasesCommandInput,
    cb: (err: any, data?: ListAccountAliasesCommandOutput) => void
  ): void;
  public listAccountAliases(
    args: ListAccountAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAliasesCommandOutput) => void
  ): void;
  public listAccountAliases(
    args: ListAccountAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountAliasesCommandOutput) => void),
    cb?: (err: any, data?: ListAccountAliasesCommandOutput) => void
  ): Promise<ListAccountAliasesCommandOutput> | void {
    const command = new ListAccountAliasesCommand(args);
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
   * <p>Lists all managed policies that are attached to the specified IAM group.</p>
   *         <p>An IAM group can also have inline policies embedded with it. To list the inline
   *             policies for a group, use <a>ListGroupPolicies</a>. For information about
   *             policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
   *             policies to only those matching the specified path prefix. If there are no policies
   *             attached to the specified group (or none that match the specified path prefix), the
   *             operation returns an empty list.</p>
   */
  public listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedGroupPoliciesCommandOutput>;
  public listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    cb: (err: any, data?: ListAttachedGroupPoliciesCommandOutput) => void
  ): void;
  public listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedGroupPoliciesCommandOutput) => void
  ): void;
  public listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttachedGroupPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListAttachedGroupPoliciesCommandOutput) => void
  ): Promise<ListAttachedGroupPoliciesCommandOutput> | void {
    const command = new ListAttachedGroupPoliciesCommand(args);
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
   * <p>Lists all managed policies that are attached to the specified IAM role.</p>
   *         <p>An IAM role can also have inline policies embedded with it. To list the inline
   *             policies for a role, use <a>ListRolePolicies</a>. For information about
   *             policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
   *             policies to only those matching the specified path prefix. If there are no policies
   *             attached to the specified role (or none that match the specified path prefix), the
   *             operation returns an empty list.</p>
   */
  public listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedRolePoliciesCommandOutput>;
  public listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    cb: (err: any, data?: ListAttachedRolePoliciesCommandOutput) => void
  ): void;
  public listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedRolePoliciesCommandOutput) => void
  ): void;
  public listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttachedRolePoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListAttachedRolePoliciesCommandOutput) => void
  ): Promise<ListAttachedRolePoliciesCommandOutput> | void {
    const command = new ListAttachedRolePoliciesCommand(args);
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
   * <p>Lists all managed policies that are attached to the specified IAM user.</p>
   *         <p>An IAM user can also have inline policies embedded with it. To list the inline
   *             policies for a user, use <a>ListUserPolicies</a>. For information about
   *             policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
   *             policies to only those matching the specified path prefix. If there are no policies
   *             attached to the specified group (or none that match the specified path prefix), the
   *             operation returns an empty list.</p>
   */
  public listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedUserPoliciesCommandOutput>;
  public listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    cb: (err: any, data?: ListAttachedUserPoliciesCommandOutput) => void
  ): void;
  public listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedUserPoliciesCommandOutput) => void
  ): void;
  public listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttachedUserPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListAttachedUserPoliciesCommandOutput) => void
  ): Promise<ListAttachedUserPoliciesCommandOutput> | void {
    const command = new ListAttachedUserPoliciesCommand(args);
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
   * <p>Lists all IAM users, groups, and roles that the specified managed policy is attached
   *             to.</p>
   *         <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a
   *             particular type of entity (users, groups, or roles). For example, to list only the roles
   *             that are attached to the specified policy, set <code>EntityFilter</code> to
   *                 <code>Role</code>.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   */
  public listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitiesForPolicyCommandOutput>;
  public listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    cb: (err: any, data?: ListEntitiesForPolicyCommandOutput) => void
  ): void;
  public listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesForPolicyCommandOutput) => void
  ): void;
  public listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEntitiesForPolicyCommandOutput) => void),
    cb?: (err: any, data?: ListEntitiesForPolicyCommandOutput) => void
  ): Promise<ListEntitiesForPolicyCommandOutput> | void {
    const command = new ListEntitiesForPolicyCommand(args);
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
   * <p>Lists the names of the inline policies that are embedded in the specified IAM
   *             group.</p>
   *         <p>An IAM group can also have managed policies attached to it. To list the managed
   *             policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>.
   *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters. If there are no inline policies embedded with the specified group, the
   *             operation returns an empty list.</p>
   */
  public listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupPoliciesCommandOutput>;
  public listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    cb: (err: any, data?: ListGroupPoliciesCommandOutput) => void
  ): void;
  public listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupPoliciesCommandOutput) => void
  ): void;
  public listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListGroupPoliciesCommandOutput) => void
  ): Promise<ListGroupPoliciesCommandOutput> | void {
    const command = new ListGroupPoliciesCommand(args);
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
   * <p>Lists the IAM groups that have the specified path prefix.</p>
   *         <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
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
   * <p>Lists the IAM groups that the specified IAM user belongs to.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   */
  public listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsForUserCommandOutput>;
  public listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    cb: (err: any, data?: ListGroupsForUserCommandOutput) => void
  ): void;
  public listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsForUserCommandOutput) => void
  ): void;
  public listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupsForUserCommandOutput) => void),
    cb?: (err: any, data?: ListGroupsForUserCommandOutput) => void
  ): Promise<ListGroupsForUserCommandOutput> | void {
    const command = new ListGroupsForUserCommand(args);
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
   * <p>Lists the instance profiles that have the specified path prefix. If there are none,
   *             the operation returns an empty list. For more information about instance profiles, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
   *                 instance profiles</a>.</p>
   *         <note>
   *             <p>IAM resource-listing operations return a subset of the available
   *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p>
   *         </note>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   */
  public listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfilesCommandOutput>;
  public listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): void;
  public listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): void;
  public listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstanceProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): Promise<ListInstanceProfilesCommandOutput> | void {
    const command = new ListInstanceProfilesCommand(args);
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
   * <p>Lists the instance profiles that have the specified associated IAM role. If there
   *             are none, the operation returns an empty list. For more information about instance
   *             profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
   *             profiles</a>.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   */
  public listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfilesForRoleCommandOutput>;
  public listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    cb: (err: any, data?: ListInstanceProfilesForRoleCommandOutput) => void
  ): void;
  public listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfilesForRoleCommandOutput) => void
  ): void;
  public listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstanceProfilesForRoleCommandOutput) => void),
    cb?: (err: any, data?: ListInstanceProfilesForRoleCommandOutput) => void
  ): Promise<ListInstanceProfilesForRoleCommandOutput> | void {
    const command = new ListInstanceProfilesForRoleCommand(args);
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
   * <p>Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfileTagsCommandOutput>;
  public listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    cb: (err: any, data?: ListInstanceProfileTagsCommandOutput) => void
  ): void;
  public listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfileTagsCommandOutput) => void
  ): void;
  public listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstanceProfileTagsCommandOutput) => void),
    cb?: (err: any, data?: ListInstanceProfileTagsCommandOutput) => void
  ): Promise<ListInstanceProfileTagsCommandOutput> | void {
    const command = new ListInstanceProfileTagsCommand(args);
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
   * <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name,
   *             then this operation lists all the MFA devices associated with the specified user. If you
   *             do not specify a user name, IAM determines the user name implicitly based on the AWS
   *             access key ID signing the request for this operation.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   */
  public listMFADevices(
    args: ListMFADevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMFADevicesCommandOutput>;
  public listMFADevices(
    args: ListMFADevicesCommandInput,
    cb: (err: any, data?: ListMFADevicesCommandOutput) => void
  ): void;
  public listMFADevices(
    args: ListMFADevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMFADevicesCommandOutput) => void
  ): void;
  public listMFADevices(
    args: ListMFADevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMFADevicesCommandOutput) => void),
    cb?: (err: any, data?: ListMFADevicesCommandOutput) => void
  ): Promise<ListMFADevicesCommandOutput> | void {
    const command = new ListMFADevicesCommand(args);
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
   * <p>Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is
   *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMFADeviceTagsCommandOutput>;
  public listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    cb: (err: any, data?: ListMFADeviceTagsCommandOutput) => void
  ): void;
  public listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMFADeviceTagsCommandOutput) => void
  ): void;
  public listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMFADeviceTagsCommandOutput) => void),
    cb?: (err: any, data?: ListMFADeviceTagsCommandOutput) => void
  ): Promise<ListMFADeviceTagsCommandOutput> | void {
    const command = new ListMFADeviceTagsCommand(args);
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
   * <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects
   *             defined in the AWS account.</p>
   *         <note>
   *             <p>IAM resource-listing operations return a subset of the available
   *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p>
   *         </note>
   */
  public listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpenIDConnectProvidersCommandOutput>;
  public listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    cb: (err: any, data?: ListOpenIDConnectProvidersCommandOutput) => void
  ): void;
  public listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpenIDConnectProvidersCommandOutput) => void
  ): void;
  public listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOpenIDConnectProvidersCommandOutput) => void),
    cb?: (err: any, data?: ListOpenIDConnectProvidersCommandOutput) => void
  ): Promise<ListOpenIDConnectProvidersCommandOutput> | void {
    const command = new ListOpenIDConnectProvidersCommand(args);
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
   * <p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible
   *       identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity
   *       federation</a>.</p>
   *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpenIDConnectProviderTagsCommandOutput>;
  public listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    cb: (err: any, data?: ListOpenIDConnectProviderTagsCommandOutput) => void
  ): void;
  public listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpenIDConnectProviderTagsCommandOutput) => void
  ): void;
  public listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOpenIDConnectProviderTagsCommandOutput) => void),
    cb?: (err: any, data?: ListOpenIDConnectProviderTagsCommandOutput) => void
  ): Promise<ListOpenIDConnectProviderTagsCommandOutput> | void {
    const command = new ListOpenIDConnectProviderTagsCommand(args);
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
   * <p>Lists all the managed policies that are available in your AWS account, including
   *             your own customer-defined managed policies and all AWS managed policies.</p>
   *         <p>You can filter the list of policies that is returned using the optional
   *                 <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code>
   *             parameters. For example, to list only the customer managed policies in your AWS
   *             account, set <code>Scope</code> to <code>Local</code>. To list only AWS managed
   *             policies, set <code>Scope</code> to <code>AWS</code>.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   *         <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   *         <note>
   *             <p>IAM resource-listing operations return a subset of the available
   *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see
   *                     <a>GetPolicy</a>.</p>
   *         </note>
   */
  public listPolicies(
    args: ListPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesCommandOutput>;
  public listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
  public listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  public listPolicies(
    args: ListPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListPoliciesCommandOutput) => void
  ): Promise<ListPoliciesCommandOutput> | void {
    const command = new ListPoliciesCommand(args);
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
   * <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to
   *             access each specified service.</p>
   *         <note>
   *             <p>This operation does not use other policy types when determining whether a resource
   *                 could access a service. These other policy types include resource-based policies,
   *                 access control lists, AWS Organizations policies, IAM permissions boundaries, and
   *                 AWS STS assume role policies. It only applies permissions policy logic. For more
   *                 about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *         </note>
   *         <p>The list of policies returned by the operation depends on the ARN of the identity that
   *             you provide.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>User</b> – The list of policies includes
   *                     the managed and inline policies that are attached to the user directly. The list
   *                     also includes any additional managed and inline policies that are attached to
   *                     the group to which the user belongs. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Group</b> – The list of policies includes
   *                     only the managed and inline policies that are attached to the group directly.
   *                     Policies that are attached to the group’s user are not included.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Role</b> – The list of policies includes
   *                     only the managed and inline policies that are attached to the role.</p>
   *             </li>
   *          </ul>
   *         <p>For each managed policy, this operation returns the ARN and policy name. For each
   *             inline policy, it returns the policy name and the entity to which it is attached. Inline
   *             policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *         <p>Policies that are attached to users and roles as permissions boundaries are not
   *             returned. To view which managed policy is currently used to set the permissions boundary
   *             for a user or role, use the <a>GetUser</a> or <a>GetRole</a>
   *             operations.</p>
   */
  public listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesGrantingServiceAccessCommandOutput>;
  public listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    cb: (err: any, data?: ListPoliciesGrantingServiceAccessCommandOutput) => void
  ): void;
  public listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesGrantingServiceAccessCommandOutput) => void
  ): void;
  public listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPoliciesGrantingServiceAccessCommandOutput) => void),
    cb?: (err: any, data?: ListPoliciesGrantingServiceAccessCommandOutput) => void
  ): Promise<ListPoliciesGrantingServiceAccessCommandOutput> | void {
    const command = new ListPoliciesGrantingServiceAccessCommand(args);
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
   * <p>Lists the tags that are attached to the specified IAM customer managed policy.
   *       The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public listPolicyTags(
    args: ListPolicyTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyTagsCommandOutput>;
  public listPolicyTags(
    args: ListPolicyTagsCommandInput,
    cb: (err: any, data?: ListPolicyTagsCommandOutput) => void
  ): void;
  public listPolicyTags(
    args: ListPolicyTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyTagsCommandOutput) => void
  ): void;
  public listPolicyTags(
    args: ListPolicyTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPolicyTagsCommandOutput) => void),
    cb?: (err: any, data?: ListPolicyTagsCommandOutput) => void
  ): Promise<ListPolicyTagsCommandOutput> | void {
    const command = new ListPolicyTagsCommand(args);
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
   * <p>Lists information about the versions of the specified managed policy, including the
   *             version that is currently set as the policy's default version.</p>
   *         <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyVersionsCommandOutput>;
  public listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;
  public listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;
  public listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPolicyVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): Promise<ListPolicyVersionsCommandOutput> | void {
    const command = new ListPolicyVersionsCommand(args);
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
   * <p>Lists the names of the inline policies that are embedded in the specified IAM
   *             role.</p>
   *         <p>An IAM role can also have managed policies attached to it. To list the managed
   *             policies that are attached to a role, use <a>ListAttachedRolePolicies</a>.
   *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters. If there are no inline policies embedded with the specified role, the
   *             operation returns an empty list.</p>
   */
  public listRolePolicies(
    args: ListRolePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRolePoliciesCommandOutput>;
  public listRolePolicies(
    args: ListRolePoliciesCommandInput,
    cb: (err: any, data?: ListRolePoliciesCommandOutput) => void
  ): void;
  public listRolePolicies(
    args: ListRolePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRolePoliciesCommandOutput) => void
  ): void;
  public listRolePolicies(
    args: ListRolePoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRolePoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListRolePoliciesCommandOutput) => void
  ): Promise<ListRolePoliciesCommandOutput> | void {
    const command = new ListRolePoliciesCommand(args);
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
   * <p>Lists the IAM roles that have the specified path prefix. If there are none, the
   *             operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with
   *                 roles</a>.</p>
   *         <note>
   *             <p>IAM resource-listing operations return a subset of the available
   *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p>
   *         </note>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   */
  public listRoles(args: ListRolesCommandInput, options?: __HttpHandlerOptions): Promise<ListRolesCommandOutput>;
  public listRoles(args: ListRolesCommandInput, cb: (err: any, data?: ListRolesCommandOutput) => void): void;
  public listRoles(
    args: ListRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRolesCommandOutput) => void
  ): void;
  public listRoles(
    args: ListRolesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRolesCommandOutput) => void),
    cb?: (err: any, data?: ListRolesCommandOutput) => void
  ): Promise<ListRolesCommandOutput> | void {
    const command = new ListRolesCommand(args);
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
   * <p>Lists the tags that are attached to the specified role. The returned list of tags is
   *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public listRoleTags(
    args: ListRoleTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoleTagsCommandOutput>;
  public listRoleTags(args: ListRoleTagsCommandInput, cb: (err: any, data?: ListRoleTagsCommandOutput) => void): void;
  public listRoleTags(
    args: ListRoleTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoleTagsCommandOutput) => void
  ): void;
  public listRoleTags(
    args: ListRoleTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRoleTagsCommandOutput) => void),
    cb?: (err: any, data?: ListRoleTagsCommandOutput) => void
  ): Promise<ListRoleTagsCommandOutput> | void {
    const command = new ListRoleTagsCommand(args);
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
   * <p>Lists the SAML provider resource objects defined in IAM in the account.
   *             IAM resource-listing operations return a subset of the available
   *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p>
   *         <important>
   *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
   *         </important>
   */
  public listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSAMLProvidersCommandOutput>;
  public listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    cb: (err: any, data?: ListSAMLProvidersCommandOutput) => void
  ): void;
  public listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSAMLProvidersCommandOutput) => void
  ): void;
  public listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSAMLProvidersCommandOutput) => void),
    cb?: (err: any, data?: ListSAMLProvidersCommandOutput) => void
  ): Promise<ListSAMLProvidersCommandOutput> | void {
    const command = new ListSAMLProvidersCommand(args);
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
   * <p>Lists the tags that are attached to the specified Security Assertion Markup Language
   *       (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
   *       federation</a>.</p>
   *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSAMLProviderTagsCommandOutput>;
  public listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    cb: (err: any, data?: ListSAMLProviderTagsCommandOutput) => void
  ): void;
  public listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSAMLProviderTagsCommandOutput) => void
  ): void;
  public listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSAMLProviderTagsCommandOutput) => void),
    cb?: (err: any, data?: ListSAMLProviderTagsCommandOutput) => void
  ): Promise<ListSAMLProviderTagsCommandOutput> | void {
    const command = new ListSAMLProviderTagsCommand(args);
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
   * <p>Lists the server certificates stored in IAM that have the specified path prefix. If
   *             none exist, the operation returns an empty list.</p>
   *         <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
   *                 with server certificates</a> in the <i>IAM User Guide</i>. This
   *             topic also includes a list of AWS services that can use the server certificates that
   *             you manage with IAM.</p>
   *         <note>
   *             <p>IAM resource-listing operations return a subset of the available
   *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p>
   *         </note>
   */
  public listServerCertificates(
    args: ListServerCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServerCertificatesCommandOutput>;
  public listServerCertificates(
    args: ListServerCertificatesCommandInput,
    cb: (err: any, data?: ListServerCertificatesCommandOutput) => void
  ): void;
  public listServerCertificates(
    args: ListServerCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServerCertificatesCommandOutput) => void
  ): void;
  public listServerCertificates(
    args: ListServerCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServerCertificatesCommandOutput) => void),
    cb?: (err: any, data?: ListServerCertificatesCommandOutput) => void
  ): Promise<ListServerCertificatesCommandOutput> | void {
    const command = new ListServerCertificatesCommand(args);
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
   * <p>Lists the tags that are attached to the specified IAM server certificate. The
   *       returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>For certificates in a Region supported by AWS Certificate Manager (ACM), we
   *         recommend that you don't use IAM server certificates. Instead, use ACM to provision,
   *         manage, and deploy your server certificates. For more information about IAM server
   *         certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server
   *           certificates</a> in the <i>IAM User Guide</i>.</p>
   *          </note>
   */
  public listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServerCertificateTagsCommandOutput>;
  public listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    cb: (err: any, data?: ListServerCertificateTagsCommandOutput) => void
  ): void;
  public listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServerCertificateTagsCommandOutput) => void
  ): void;
  public listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServerCertificateTagsCommandOutput) => void),
    cb?: (err: any, data?: ListServerCertificateTagsCommandOutput) => void
  ): Promise<ListServerCertificateTagsCommandOutput> | void {
    const command = new ListServerCertificateTagsCommand(args);
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
   * <p>Returns information about the service-specific credentials associated with the
   *             specified IAM user. If none exists, the operation returns an empty list. The
   *             service-specific credentials returned by this operation are used only for authenticating
   *             the IAM user to a specific service. For more information about using service-specific
   *             credentials to authenticate to an AWS service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a>
   *             in the AWS CodeCommit User Guide.</p>
   */
  public listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceSpecificCredentialsCommandOutput>;
  public listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    cb: (err: any, data?: ListServiceSpecificCredentialsCommandOutput) => void
  ): void;
  public listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceSpecificCredentialsCommandOutput) => void
  ): void;
  public listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceSpecificCredentialsCommandOutput) => void),
    cb?: (err: any, data?: ListServiceSpecificCredentialsCommandOutput) => void
  ): Promise<ListServiceSpecificCredentialsCommandOutput> | void {
    const command = new ListServiceSpecificCredentialsCommand(args);
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
   * <p>Returns information about the signing certificates associated with the specified IAM
   *             user. If none exists, the operation returns an empty list.</p>
   *         <p>Although each user is limited to a small number of signing certificates, you can still
   *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   *         <p>If the <code>UserName</code> field is not specified, the user name is determined
   *             implicitly based on the AWS access key ID used to sign the request for this operation.
   *             This operation works for access keys under the AWS account. Consequently, you can use
   *             this operation to manage AWS account root user credentials even if the AWS account
   *             has no associated users.</p>
   */
  public listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSigningCertificatesCommandOutput>;
  public listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    cb: (err: any, data?: ListSigningCertificatesCommandOutput) => void
  ): void;
  public listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSigningCertificatesCommandOutput) => void
  ): void;
  public listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSigningCertificatesCommandOutput) => void),
    cb?: (err: any, data?: ListSigningCertificatesCommandOutput) => void
  ): Promise<ListSigningCertificatesCommandOutput> | void {
    const command = new ListSigningCertificatesCommand(args);
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
   * <p>Returns information about the SSH public keys associated with the specified IAM
   *             user. If none exists, the operation returns an empty list.</p>
   *         <p>The SSH public keys returned by this operation are used only for authenticating the
   *             IAM user to an AWS CodeCommit repository. For more information about using SSH keys to
   *             authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for
   *                 SSH connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
   *         <p>Although each user is limited to a small number of keys, you can still paginate the
   *             results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   */
  public listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSSHPublicKeysCommandOutput>;
  public listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    cb: (err: any, data?: ListSSHPublicKeysCommandOutput) => void
  ): void;
  public listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSSHPublicKeysCommandOutput) => void
  ): void;
  public listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSSHPublicKeysCommandOutput) => void),
    cb?: (err: any, data?: ListSSHPublicKeysCommandOutput) => void
  ): Promise<ListSSHPublicKeysCommandOutput> | void {
    const command = new ListSSHPublicKeysCommand(args);
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
   * <p>Lists the names of the inline policies embedded in the specified IAM user.</p>
   *         <p>An IAM user can also have managed policies attached to it. To list the managed
   *             policies that are attached to a user, use <a>ListAttachedUserPolicies</a>.
   *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters. If there are no inline policies embedded with the specified user, the
   *             operation returns an empty list.</p>
   */
  public listUserPolicies(
    args: ListUserPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserPoliciesCommandOutput>;
  public listUserPolicies(
    args: ListUserPoliciesCommandInput,
    cb: (err: any, data?: ListUserPoliciesCommandOutput) => void
  ): void;
  public listUserPolicies(
    args: ListUserPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserPoliciesCommandOutput) => void
  ): void;
  public listUserPolicies(
    args: ListUserPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListUserPoliciesCommandOutput) => void
  ): Promise<ListUserPoliciesCommandOutput> | void {
    const command = new ListUserPoliciesCommand(args);
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
   * <p>Lists the IAM users that have the specified path prefix. If no path prefix is
   *             specified, the operation returns all users in the AWS account. If there are none, the
   *             operation returns an empty list.</p>
   *         <note>
   *             <p>IAM resource-listing operations return a subset of the available
   *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p>
   *         </note>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
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
   * <p>Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public listUserTags(
    args: ListUserTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserTagsCommandOutput>;
  public listUserTags(args: ListUserTagsCommandInput, cb: (err: any, data?: ListUserTagsCommandOutput) => void): void;
  public listUserTags(
    args: ListUserTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserTagsCommandOutput) => void
  ): void;
  public listUserTags(
    args: ListUserTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserTagsCommandOutput) => void),
    cb?: (err: any, data?: ListUserTagsCommandOutput) => void
  ): Promise<ListUserTagsCommandOutput> | void {
    const command = new ListUserTagsCommand(args);
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
   * <p>Lists the virtual MFA devices defined in the AWS account by assignment status. If
   *             you do not specify an assignment status, the operation returns a list of all virtual MFA
   *             devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or
   *                 <code>Any</code>.</p>
   *         <note>
   *             <p>IAM resource-listing operations return a subset of the available
   *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a virtual MFA device, see
   *                     <a>ListVirtualMFADevices</a>.</p>
   *         </note>
   *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   *             parameters.</p>
   */
  public listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualMFADevicesCommandOutput>;
  public listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    cb: (err: any, data?: ListVirtualMFADevicesCommandOutput) => void
  ): void;
  public listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualMFADevicesCommandOutput) => void
  ): void;
  public listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVirtualMFADevicesCommandOutput) => void),
    cb?: (err: any, data?: ListVirtualMFADevicesCommandOutput) => void
  ): Promise<ListVirtualMFADevicesCommandOutput> | void {
    const command = new ListVirtualMFADevicesCommand(args);
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
   * <p>Adds or updates an inline policy document that is embedded in the specified IAM
   *             group.</p>
   *         <p>A user can also have managed policies attached to it. To attach a managed policy to a
   *             group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use
   *                 <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
   *                 policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   *         <p>For information about the maximum number of inline policies that you can embed in a
   *             group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
   *         <note>
   *             <p>Because policy documents can be large, you should use POST rather than GET when
   *                 calling <code>PutGroupPolicy</code>. For general information about using the Query
   *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
   *                     <i>IAM User Guide</i>.</p>
   *         </note>
   */
  public putGroupPolicy(
    args: PutGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGroupPolicyCommandOutput>;
  public putGroupPolicy(
    args: PutGroupPolicyCommandInput,
    cb: (err: any, data?: PutGroupPolicyCommandOutput) => void
  ): void;
  public putGroupPolicy(
    args: PutGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGroupPolicyCommandOutput) => void
  ): void;
  public putGroupPolicy(
    args: PutGroupPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutGroupPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutGroupPolicyCommandOutput) => void
  ): Promise<PutGroupPolicyCommandOutput> | void {
    const command = new PutGroupPolicyCommand(args);
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
   * <p>Adds or updates the policy that is specified as the IAM role's permissions boundary.
   *             You can use an AWS managed policy or a customer managed policy to set the boundary for
   *             a role. Use the boundary to control the maximum permissions that the role can have.
   *             Setting a permissions boundary is an advanced feature that can affect the permissions
   *             for the role.</p>
   *         <p>You cannot set the boundary for a service-linked role. </p>
   *         <important>
   *             <p>Policies used as permissions boundaries do not provide permissions. You must also
   *                 attach a permissions policy to the role. To learn how the effective permissions for
   *                 a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy
   *                     evaluation logic</a> in the IAM User Guide. </p>
   *         </important>
   */
  public putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRolePermissionsBoundaryCommandOutput>;
  public putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    cb: (err: any, data?: PutRolePermissionsBoundaryCommandOutput) => void
  ): void;
  public putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRolePermissionsBoundaryCommandOutput) => void
  ): void;
  public putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRolePermissionsBoundaryCommandOutput) => void),
    cb?: (err: any, data?: PutRolePermissionsBoundaryCommandOutput) => void
  ): Promise<PutRolePermissionsBoundaryCommandOutput> | void {
    const command = new PutRolePermissionsBoundaryCommand(args);
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
   * <p>Adds or updates an inline policy document that is embedded in the specified IAM
   *             role.</p>
   *         <p>When you embed an inline policy in a role, the inline policy is used as part of the
   *             role's access (permissions) policy. The role's trust policy is created at the same time
   *             as the role, using <a>CreateRole</a>. You can update a role's trust policy
   *             using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles,
   *             see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to
   *                 delegate permissions and federate identities</a>.</p>
   *         <p>A role can also have a managed policy attached to it. To attach a managed policy to a
   *             role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
   *                 policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   *         <p>For information about the maximum number of inline policies that you can embed with a
   *             role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
   *         <note>
   *             <p>Because policy documents can be large, you should use POST rather than GET when
   *                 calling <code>PutRolePolicy</code>. For general information about using the Query
   *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
   *                     <i>IAM User Guide</i>.</p>
   *         </note>
   */
  public putRolePolicy(
    args: PutRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRolePolicyCommandOutput>;
  public putRolePolicy(
    args: PutRolePolicyCommandInput,
    cb: (err: any, data?: PutRolePolicyCommandOutput) => void
  ): void;
  public putRolePolicy(
    args: PutRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRolePolicyCommandOutput) => void
  ): void;
  public putRolePolicy(
    args: PutRolePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRolePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutRolePolicyCommandOutput) => void
  ): Promise<PutRolePolicyCommandOutput> | void {
    const command = new PutRolePolicyCommand(args);
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
   * <p>Adds or updates the policy that is specified as the IAM user's permissions boundary.
   *             You can use an AWS managed policy or a customer managed policy to set the boundary for
   *             a user. Use the boundary to control the maximum permissions that the user can have.
   *             Setting a permissions boundary is an advanced feature that can affect the permissions
   *             for the user.</p>
   *         <important>
   *             <p>Policies that are used as permissions boundaries do not provide permissions. You
   *                 must also attach a permissions policy to the user. To learn how the effective
   *                 permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy
   *                     evaluation logic</a> in the IAM User Guide. </p>
   *         </important>
   */
  public putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutUserPermissionsBoundaryCommandOutput>;
  public putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    cb: (err: any, data?: PutUserPermissionsBoundaryCommandOutput) => void
  ): void;
  public putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutUserPermissionsBoundaryCommandOutput) => void
  ): void;
  public putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutUserPermissionsBoundaryCommandOutput) => void),
    cb?: (err: any, data?: PutUserPermissionsBoundaryCommandOutput) => void
  ): Promise<PutUserPermissionsBoundaryCommandOutput> | void {
    const command = new PutUserPermissionsBoundaryCommand(args);
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
   * <p>Adds or updates an inline policy document that is embedded in the specified IAM
   *             user.</p>
   *         <p>An IAM user can also have a managed policy attached to it. To attach a managed
   *             policy to a user, use <a>AttachUserPolicy</a>. To create a new managed
   *             policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
   *                 policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   *         <p>For information about the maximum number of inline policies that you can embed in a
   *             user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
   *         <note>
   *             <p>Because policy documents can be large, you should use POST rather than GET when
   *                 calling <code>PutUserPolicy</code>. For general information about using the Query
   *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
   *                     <i>IAM User Guide</i>.</p>
   *         </note>
   */
  public putUserPolicy(
    args: PutUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutUserPolicyCommandOutput>;
  public putUserPolicy(
    args: PutUserPolicyCommandInput,
    cb: (err: any, data?: PutUserPolicyCommandOutput) => void
  ): void;
  public putUserPolicy(
    args: PutUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutUserPolicyCommandOutput) => void
  ): void;
  public putUserPolicy(
    args: PutUserPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutUserPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutUserPolicyCommandOutput) => void
  ): Promise<PutUserPolicyCommandOutput> | void {
    const command = new PutUserPolicyCommand(args);
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
   * <p>Removes the specified client ID (also known as audience) from the list of client IDs
   *             registered for the specified IAM OpenID Connect (OIDC) provider resource
   *             object.</p>
   *         <p>This operation is idempotent; it does not fail or return an error if you try to remove
   *             a client ID that does not exist.</p>
   */
  public removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput>;
  public removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: RemoveClientIDFromOpenIDConnectProviderCommandOutput) => void
  ): void;
  public removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveClientIDFromOpenIDConnectProviderCommandOutput) => void
  ): void;
  public removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RemoveClientIDFromOpenIDConnectProviderCommandOutput) => void),
    cb?: (err: any, data?: RemoveClientIDFromOpenIDConnectProviderCommandOutput) => void
  ): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput> | void {
    const command = new RemoveClientIDFromOpenIDConnectProviderCommand(args);
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
   * <p>Removes the specified IAM role from the specified EC2 instance profile.</p>
   *         <important>
   *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you
   *                 are about to remove from the instance profile. Removing a role from an instance
   *                 profile that is associated with a running instance might break any applications
   *                 running on the instance.</p>
   *         </important>
   *         <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more
   *             information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
   *             profiles</a>.</p>
   */
  public removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRoleFromInstanceProfileCommandOutput>;
  public removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    cb: (err: any, data?: RemoveRoleFromInstanceProfileCommandOutput) => void
  ): void;
  public removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRoleFromInstanceProfileCommandOutput) => void
  ): void;
  public removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveRoleFromInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: RemoveRoleFromInstanceProfileCommandOutput) => void
  ): Promise<RemoveRoleFromInstanceProfileCommandOutput> | void {
    const command = new RemoveRoleFromInstanceProfileCommand(args);
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
   */
  public removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveUserFromGroupCommandOutput>;
  public removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    cb: (err: any, data?: RemoveUserFromGroupCommandOutput) => void
  ): void;
  public removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveUserFromGroupCommandOutput) => void
  ): void;
  public removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveUserFromGroupCommandOutput) => void),
    cb?: (err: any, data?: RemoveUserFromGroupCommandOutput) => void
  ): Promise<RemoveUserFromGroupCommandOutput> | void {
    const command = new RemoveUserFromGroupCommand(args);
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
   * <p>Resets the password for a service-specific credential. The new password is AWS
   *             generated and cryptographically strong. It cannot be configured by the user. Resetting
   *             the password immediately invalidates the previous password associated with this
   *             user.</p>
   */
  public resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetServiceSpecificCredentialCommandOutput>;
  public resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: ResetServiceSpecificCredentialCommandOutput) => void
  ): void;
  public resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetServiceSpecificCredentialCommandOutput) => void
  ): void;
  public resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetServiceSpecificCredentialCommandOutput) => void),
    cb?: (err: any, data?: ResetServiceSpecificCredentialCommandOutput) => void
  ): Promise<ResetServiceSpecificCredentialCommandOutput> | void {
    const command = new ResetServiceSpecificCredentialCommand(args);
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
   * <p>Synchronizes the specified MFA device with its IAM resource object on the AWS
   *             servers.</p>
   *         <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA
   *                 device</a> in the <i>IAM User Guide</i>.</p>
   */
  public resyncMFADevice(
    args: ResyncMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResyncMFADeviceCommandOutput>;
  public resyncMFADevice(
    args: ResyncMFADeviceCommandInput,
    cb: (err: any, data?: ResyncMFADeviceCommandOutput) => void
  ): void;
  public resyncMFADevice(
    args: ResyncMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResyncMFADeviceCommandOutput) => void
  ): void;
  public resyncMFADevice(
    args: ResyncMFADeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResyncMFADeviceCommandOutput) => void),
    cb?: (err: any, data?: ResyncMFADeviceCommandOutput) => void
  ): Promise<ResyncMFADeviceCommandOutput> | void {
    const command = new ResyncMFADeviceCommand(args);
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
   * <p>Sets the specified version of the specified policy as the policy's default (operative)
   *             version.</p>
   *         <p>This operation affects all users, groups, and roles that the policy is attached to. To
   *             list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p>
   *         <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   */
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultPolicyVersionCommandOutput>;
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): void;
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): void;
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetDefaultPolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): Promise<SetDefaultPolicyVersionCommandOutput> | void {
    const command = new SetDefaultPolicyVersionCommand(args);
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
   * <p>Sets the specified version of the global endpoint token as the token version used for
   *             the AWS account.</p>
   *         <p>By default, AWS Security Token Service (STS) is available as a global service, and all STS requests
   *             go to a single endpoint at <code>https://sts.amazonaws.com</code>. AWS recommends
   *             using Regional STS endpoints to reduce latency, build in redundancy, and increase
   *             session token availability. For information about Regional endpoints for STS, see
   *                 <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">AWS AWS Security Token
   *                 Service endpoints and quotas</a> in the
   *             <i>AWS General Reference</i>.</p>
   *         <p>If you make an STS call to the global endpoint, the resulting session tokens might
   *             be valid in some Regions but not others. It depends on the version that is set in this
   *             operation. Version 1 tokens are valid only in AWS Regions that are available by
   *             default. These tokens do not work in manually enabled Regions, such as Asia Pacific
   *             (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are
   *             longer and might affect systems where you temporarily store tokens. For information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                 deactivating STS in an AWS region</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *         <p>To view the current session token version, see the
   *                 <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>
   */
  public setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSecurityTokenServicePreferencesCommandOutput>;
  public setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    cb: (err: any, data?: SetSecurityTokenServicePreferencesCommandOutput) => void
  ): void;
  public setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSecurityTokenServicePreferencesCommandOutput) => void
  ): void;
  public setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetSecurityTokenServicePreferencesCommandOutput) => void),
    cb?: (err: any, data?: SetSecurityTokenServicePreferencesCommandOutput) => void
  ): Promise<SetSecurityTokenServicePreferencesCommandOutput> | void {
    const command = new SetSecurityTokenServicePreferencesCommand(args);
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
   * <p>Simulate how a set of IAM policies and optionally a resource-based policy works with
   *             a list of API operations and AWS resources to determine the policies' effective
   *             permissions. The policies are provided as strings.</p>
   *         <p>The simulation does not perform the API operations; it only checks the authorization
   *             to determine if the simulated policies allow or deny the operations. You can simulate
   *             resources that don't exist in your account.</p>
   *         <p>If you want to simulate existing policies that are attached to an IAM user, group,
   *             or role, use <a>SimulatePrincipalPolicy</a> instead.</p>
   *         <p>Context keys are variables that are maintained by AWS and its services and which
   *             provide details about the context of an API query request. You can use the
   *                 <code>Condition</code> element of an IAM policy to evaluate context keys. To get
   *             the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p>
   *         <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code>
   *             parameters to paginate the results.</p>
   *         <p>For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies
   *                 with the IAM policy simulator </a>in the
   *             <i>IAM User Guide</i>.</p>
   */
  public simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimulateCustomPolicyCommandOutput>;
  public simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    cb: (err: any, data?: SimulateCustomPolicyCommandOutput) => void
  ): void;
  public simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimulateCustomPolicyCommandOutput) => void
  ): void;
  public simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SimulateCustomPolicyCommandOutput) => void),
    cb?: (err: any, data?: SimulateCustomPolicyCommandOutput) => void
  ): Promise<SimulateCustomPolicyCommandOutput> | void {
    const command = new SimulateCustomPolicyCommand(args);
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
   * <p>Simulate how a set of IAM policies attached to an IAM entity works with a list of
   *             API operations and AWS resources to determine the policies' effective permissions. The
   *             entity can be an IAM user, group, or role. If you specify a user, then the simulation
   *             also includes all of the policies that are attached to groups that the user belongs to.
   *             You can simulate resources that don't exist in your account.</p>
   *         <p>You can optionally include a list of one or more additional policies specified as
   *             strings to include in the simulation. If you want to simulate only policies specified as
   *             strings, use <a>SimulateCustomPolicy</a> instead.</p>
   *         <p>You can also optionally include one resource-based policy to be evaluated with each of
   *             the resources included in the simulation.</p>
   *         <p>The simulation does not perform the API operations; it only checks the authorization
   *             to determine if the simulated policies allow or deny the operations.</p>
   *         <p>
   *             <b>Note:</b> This operation discloses information about the
   *             permissions granted to other users. If you do not want users to see other user's
   *             permissions, then consider allowing them to use <a>SimulateCustomPolicy</a>
   *             instead.</p>
   *         <p>Context keys are variables maintained by AWS and its services that provide details
   *             about the context of an API query request. You can use the <code>Condition</code>
   *             element of an IAM policy to evaluate context keys. To get the list of context keys
   *             that the policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
   *         <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code>
   *             parameters to paginate the results.</p>
   *         <p>For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies
   *                 with the IAM policy simulator </a>in the
   *             <i>IAM User Guide</i>.</p>
   */
  public simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimulatePrincipalPolicyCommandOutput>;
  public simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    cb: (err: any, data?: SimulatePrincipalPolicyCommandOutput) => void
  ): void;
  public simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimulatePrincipalPolicyCommandOutput) => void
  ): void;
  public simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SimulatePrincipalPolicyCommandOutput) => void),
    cb?: (err: any, data?: SimulatePrincipalPolicyCommandOutput) => void
  ): Promise<SimulatePrincipalPolicyCommandOutput> | void {
    const command = new SimulatePrincipalPolicyCommand(args);
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
   * <p>Adds one or more tags to an IAM instance profile. If a tag with the same key name
   *       already exists, then that tag is overwritten with the new value.</p>
   *          <p>Each tag consists of a key name and an associated value. By assigning tags to your resources, you can do the
   *       following:</p>
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
   *                   <b>Access control</b> - Include tags in IAM user-based
   *           and resource-based policies. You can use tags to restrict access to only an IAM instance
   *           profile that has a specified tag attached. For examples of policies that show how to use
   *           tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
   *             <i>IAM User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
   *             need to store an array, you can store comma-separated values in the string. However, you
   *             must interpret the value in your code.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagInstanceProfileCommandOutput>;
  public tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    cb: (err: any, data?: TagInstanceProfileCommandOutput) => void
  ): void;
  public tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagInstanceProfileCommandOutput) => void
  ): void;
  public tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: TagInstanceProfileCommandOutput) => void
  ): Promise<TagInstanceProfileCommandOutput> | void {
    const command = new TagInstanceProfileCommand(args);
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
   * <p>Adds one or more tags to an IAM virtual multi-factor authentication (MFA) device. If
   *       a tag with the same key name already exists, then that tag is overwritten with the new
   *       value.</p>
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
   *                   <b>Access control</b> - Include tags in IAM user-based
   *           and resource-based policies. You can use tags to restrict access to only an IAM virtual
   *           MFA device that has a specified tag attached. For examples of policies that show how to
   *           use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
   *             <i>IAM User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
   *             need to store an array, you can store comma-separated values in the string. However, you
   *             must interpret the value in your code.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public tagMFADevice(
    args: TagMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagMFADeviceCommandOutput>;
  public tagMFADevice(args: TagMFADeviceCommandInput, cb: (err: any, data?: TagMFADeviceCommandOutput) => void): void;
  public tagMFADevice(
    args: TagMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagMFADeviceCommandOutput) => void
  ): void;
  public tagMFADevice(
    args: TagMFADeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagMFADeviceCommandOutput) => void),
    cb?: (err: any, data?: TagMFADeviceCommandOutput) => void
  ): Promise<TagMFADeviceCommandOutput> | void {
    const command = new TagMFADeviceCommand(args);
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
   * <p>Adds one or more tags to an OpenID Connect (OIDC)-compatible identity provider. For
   *       more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. If
   *       a tag with the same key name already exists, then that tag is overwritten with the new
   *       value.</p>
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
   *                   <b>Access control</b> - Include tags in IAM user-based
   *           and resource-based policies. You can use tags to restrict access to only an OIDC provider
   *           that has a specified tag attached. For examples of policies that show how to use tags to
   *           control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
   *           <i>IAM User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
   *             need to store an array, you can store comma-separated values in the string. However, you
   *             must interpret the value in your code.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagOpenIDConnectProviderCommandOutput>;
  public tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: TagOpenIDConnectProviderCommandOutput) => void
  ): void;
  public tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagOpenIDConnectProviderCommandOutput) => void
  ): void;
  public tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagOpenIDConnectProviderCommandOutput) => void),
    cb?: (err: any, data?: TagOpenIDConnectProviderCommandOutput) => void
  ): Promise<TagOpenIDConnectProviderCommandOutput> | void {
    const command = new TagOpenIDConnectProviderCommand(args);
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
   * <p>Adds one or more tags to an IAM customer managed policy. If a tag with the same key
   *       name already exists, then that tag is overwritten with the new value.</p>
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
   *                   <b>Access control</b> - Include tags in IAM user-based
   *           and resource-based policies. You can use tags to restrict access to only an IAM customer
   *           managed policy that has a specified tag attached. For examples of policies that show how
   *           to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
   *             <i>IAM User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
   *             need to store an array, you can store comma-separated values in the string. However, you
   *             must interpret the value in your code.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public tagPolicy(args: TagPolicyCommandInput, options?: __HttpHandlerOptions): Promise<TagPolicyCommandOutput>;
  public tagPolicy(args: TagPolicyCommandInput, cb: (err: any, data?: TagPolicyCommandOutput) => void): void;
  public tagPolicy(
    args: TagPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagPolicyCommandOutput) => void
  ): void;
  public tagPolicy(
    args: TagPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagPolicyCommandOutput) => void),
    cb?: (err: any, data?: TagPolicyCommandOutput) => void
  ): Promise<TagPolicyCommandOutput> | void {
    const command = new TagPolicyCommand(args);
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
   *                   <b>Access control</b> - Include tags in IAM user-based
   *           and resource-based policies. You can use tags to restrict access to only an IAM role
   *           that has a specified tag attached. You can also restrict access to only those resources
   *           that have a certain tag attached. For examples of policies that show how to use tags to
   *           control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
   *           <i>IAM User Guide</i>.</p>
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
   *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
   *             need to store an array, you can store comma-separated values in the string. However, you
   *             must interpret the value in your code.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the
   *         <i>IAM User Guide</i>.</p>
   */
  public tagRole(args: TagRoleCommandInput, options?: __HttpHandlerOptions): Promise<TagRoleCommandOutput>;
  public tagRole(args: TagRoleCommandInput, cb: (err: any, data?: TagRoleCommandOutput) => void): void;
  public tagRole(
    args: TagRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagRoleCommandOutput) => void
  ): void;
  public tagRole(
    args: TagRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagRoleCommandOutput) => void),
    cb?: (err: any, data?: TagRoleCommandOutput) => void
  ): Promise<TagRoleCommandOutput> | void {
    const command = new TagRoleCommand(args);
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
   * <p>Adds one or more tags to a Security Assertion Markup Language (SAML) identity provider.
   *       For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation </a>.
   *       If a tag with the same key name already exists, then that tag is overwritten with the new
   *       value.</p>
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
   *                   <b>Access control</b> - Include tags in IAM user-based
   *           and resource-based policies. You can use tags to restrict access to only a SAML identity
   *           provider that has a specified tag attached. For examples of policies that show how to use
   *           tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
   *             <i>IAM User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
   *             need to store an array, you can store comma-separated values in the string. However, you
   *             must interpret the value in your code.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public tagSAMLProvider(
    args: TagSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagSAMLProviderCommandOutput>;
  public tagSAMLProvider(
    args: TagSAMLProviderCommandInput,
    cb: (err: any, data?: TagSAMLProviderCommandOutput) => void
  ): void;
  public tagSAMLProvider(
    args: TagSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagSAMLProviderCommandOutput) => void
  ): void;
  public tagSAMLProvider(
    args: TagSAMLProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagSAMLProviderCommandOutput) => void),
    cb?: (err: any, data?: TagSAMLProviderCommandOutput) => void
  ): Promise<TagSAMLProviderCommandOutput> | void {
    const command = new TagSAMLProviderCommand(args);
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
   * <p>Adds one or more tags to an IAM server certificate. If a tag with the same key name
   *       already exists, then that tag is overwritten with the new value.</p>
   *          <note>
   *             <p>For certificates in a Region supported by AWS Certificate Manager (ACM), we
   *         recommend that you don't use IAM server certificates. Instead, use ACM to provision,
   *         manage, and deploy your server certificates. For more information about IAM server
   *         certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server
   *           certificates</a> in the <i>IAM User Guide</i>.</p>
   *          </note>
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
   *                   <b>Access control</b> - Include tags in IAM user-based
   *           and resource-based policies. You can use tags to restrict access to only a server
   *           certificate that has a specified tag attached. For examples of policies that show how to
   *           use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
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
   *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
   *             need to store an array, you can store comma-separated values in the string. However, you
   *             must interpret the value in your code.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public tagServerCertificate(
    args: TagServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagServerCertificateCommandOutput>;
  public tagServerCertificate(
    args: TagServerCertificateCommandInput,
    cb: (err: any, data?: TagServerCertificateCommandOutput) => void
  ): void;
  public tagServerCertificate(
    args: TagServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagServerCertificateCommandOutput) => void
  ): void;
  public tagServerCertificate(
    args: TagServerCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagServerCertificateCommandOutput) => void),
    cb?: (err: any, data?: TagServerCertificateCommandOutput) => void
  ): Promise<TagServerCertificateCommandOutput> | void {
    const command = new TagServerCertificateCommand(args);
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
   * <p>Adds one or more tags to an IAM user. If a tag with the same key name already exists,
   *       then that tag is overwritten with the new value.</p>
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
   *                   <b>Access control</b> - Include tags in IAM user-based
   *           and resource-based policies. You can use tags to restrict access to only an IAM
   *           requesting user that has a specified tag attached. You can also restrict access to only
   *           those resources that have a certain tag attached. For examples of policies that show how
   *           to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
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
   *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *                </li>
   *                <li>
   *                   <p>AWS always interprets the tag <code>Value</code> as a single string. If you
   *             need to store an array, you can store comma-separated values in the string. However, you
   *             must interpret the value in your code.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the
   *         <i>IAM User Guide</i>.</p>
   */
  public tagUser(args: TagUserCommandInput, options?: __HttpHandlerOptions): Promise<TagUserCommandOutput>;
  public tagUser(args: TagUserCommandInput, cb: (err: any, data?: TagUserCommandOutput) => void): void;
  public tagUser(
    args: TagUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagUserCommandOutput) => void
  ): void;
  public tagUser(
    args: TagUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagUserCommandOutput) => void),
    cb?: (err: any, data?: TagUserCommandOutput) => void
  ): Promise<TagUserCommandOutput> | void {
    const command = new TagUserCommand(args);
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
   * <p>Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagInstanceProfileCommandOutput>;
  public untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    cb: (err: any, data?: UntagInstanceProfileCommandOutput) => void
  ): void;
  public untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagInstanceProfileCommandOutput) => void
  ): void;
  public untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: UntagInstanceProfileCommandOutput) => void
  ): Promise<UntagInstanceProfileCommandOutput> | void {
    const command = new UntagInstanceProfileCommand(args);
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
   * <p>Removes the specified tags from the IAM virtual multi-factor authentication (MFA)
   *       device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public untagMFADevice(
    args: UntagMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagMFADeviceCommandOutput>;
  public untagMFADevice(
    args: UntagMFADeviceCommandInput,
    cb: (err: any, data?: UntagMFADeviceCommandOutput) => void
  ): void;
  public untagMFADevice(
    args: UntagMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagMFADeviceCommandOutput) => void
  ): void;
  public untagMFADevice(
    args: UntagMFADeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagMFADeviceCommandOutput) => void),
    cb?: (err: any, data?: UntagMFADeviceCommandOutput) => void
  ): Promise<UntagMFADeviceCommandOutput> | void {
    const command = new UntagMFADeviceCommand(args);
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
   * <p>Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity
   *       provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagOpenIDConnectProviderCommandOutput>;
  public untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: UntagOpenIDConnectProviderCommandOutput) => void
  ): void;
  public untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagOpenIDConnectProviderCommandOutput) => void
  ): void;
  public untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagOpenIDConnectProviderCommandOutput) => void),
    cb?: (err: any, data?: UntagOpenIDConnectProviderCommandOutput) => void
  ): Promise<UntagOpenIDConnectProviderCommandOutput> | void {
    const command = new UntagOpenIDConnectProviderCommand(args);
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
   * <p>Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public untagPolicy(args: UntagPolicyCommandInput, options?: __HttpHandlerOptions): Promise<UntagPolicyCommandOutput>;
  public untagPolicy(args: UntagPolicyCommandInput, cb: (err: any, data?: UntagPolicyCommandOutput) => void): void;
  public untagPolicy(
    args: UntagPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagPolicyCommandOutput) => void
  ): void;
  public untagPolicy(
    args: UntagPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagPolicyCommandOutput) => void),
    cb?: (err: any, data?: UntagPolicyCommandOutput) => void
  ): Promise<UntagPolicyCommandOutput> | void {
    const command = new UntagPolicyCommand(args);
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
   * <p>Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public untagRole(args: UntagRoleCommandInput, options?: __HttpHandlerOptions): Promise<UntagRoleCommandOutput>;
  public untagRole(args: UntagRoleCommandInput, cb: (err: any, data?: UntagRoleCommandOutput) => void): void;
  public untagRole(
    args: UntagRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagRoleCommandOutput) => void
  ): void;
  public untagRole(
    args: UntagRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagRoleCommandOutput) => void),
    cb?: (err: any, data?: UntagRoleCommandOutput) => void
  ): Promise<UntagRoleCommandOutput> | void {
    const command = new UntagRoleCommand(args);
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
   * <p>Removes the specified tags from the specified Security Assertion Markup Language (SAML)
   *       identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity
   *         federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagSAMLProviderCommandOutput>;
  public untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    cb: (err: any, data?: UntagSAMLProviderCommandOutput) => void
  ): void;
  public untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagSAMLProviderCommandOutput) => void
  ): void;
  public untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagSAMLProviderCommandOutput) => void),
    cb?: (err: any, data?: UntagSAMLProviderCommandOutput) => void
  ): Promise<UntagSAMLProviderCommandOutput> | void {
    const command = new UntagSAMLProviderCommand(args);
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
   * <p>Removes the specified tags from the IAM server certificate.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>For certificates in a Region supported by AWS Certificate Manager (ACM), we
   *         recommend that you don't use IAM server certificates. Instead, use ACM to provision,
   *         manage, and deploy your server certificates. For more information about IAM server
   *         certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server
   *           certificates</a> in the <i>IAM User Guide</i>.</p>
   *          </note>
   */
  public untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagServerCertificateCommandOutput>;
  public untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    cb: (err: any, data?: UntagServerCertificateCommandOutput) => void
  ): void;
  public untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagServerCertificateCommandOutput) => void
  ): void;
  public untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagServerCertificateCommandOutput) => void),
    cb?: (err: any, data?: UntagServerCertificateCommandOutput) => void
  ): Promise<UntagServerCertificateCommandOutput> | void {
    const command = new UntagServerCertificateCommand(args);
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
   * <p>Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   */
  public untagUser(args: UntagUserCommandInput, options?: __HttpHandlerOptions): Promise<UntagUserCommandOutput>;
  public untagUser(args: UntagUserCommandInput, cb: (err: any, data?: UntagUserCommandOutput) => void): void;
  public untagUser(
    args: UntagUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagUserCommandOutput) => void
  ): void;
  public untagUser(
    args: UntagUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagUserCommandOutput) => void),
    cb?: (err: any, data?: UntagUserCommandOutput) => void
  ): Promise<UntagUserCommandOutput> | void {
    const command = new UntagUserCommand(args);
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
   * <p>Changes the status of the specified access key from Active to Inactive, or vice versa.
   *             This operation can be used to disable a user's key as part of a key rotation
   *             workflow.</p>
   *         <p>If the <code>UserName</code> is not specified, the user name is determined implicitly
   *             based on the AWS access key ID used to sign the request. This operation works for
   *             access keys under the AWS account. Consequently, you can use this operation to manage
   *             AWS account root user credentials even if the AWS account has no associated
   *             users.</p>
   *         <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a>
   *             in the <i>IAM User Guide</i>.</p>
   */
  public updateAccessKey(
    args: UpdateAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessKeyCommandOutput>;
  public updateAccessKey(
    args: UpdateAccessKeyCommandInput,
    cb: (err: any, data?: UpdateAccessKeyCommandOutput) => void
  ): void;
  public updateAccessKey(
    args: UpdateAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessKeyCommandOutput) => void
  ): void;
  public updateAccessKey(
    args: UpdateAccessKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccessKeyCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccessKeyCommandOutput) => void
  ): Promise<UpdateAccessKeyCommandOutput> | void {
    const command = new UpdateAccessKeyCommand(args);
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
   * <p>Updates the password policy settings for the AWS account.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>This operation does not support partial updates. No parameters are
   *                         required, but if you do not specify a parameter, that parameter's value
   *                         reverts to its default value. See the <b>Request
   *                             Parameters</b> section for each parameter's default value. Also
   *                         note that some parameters do not allow the default parameter to be
   *                         explicitly set. Instead, to invoke the default value, do not include that
   *                         parameter when you invoke the operation.</p>
   *                 </li>
   *             </ul>
   *         </note>
   *         <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password
   *                 policy</a> in the <i>IAM User Guide</i>.</p>
   */
  public updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountPasswordPolicyCommandOutput>;
  public updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    cb: (err: any, data?: UpdateAccountPasswordPolicyCommandOutput) => void
  ): void;
  public updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountPasswordPolicyCommandOutput) => void
  ): void;
  public updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountPasswordPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountPasswordPolicyCommandOutput) => void
  ): Promise<UpdateAccountPasswordPolicyCommandOutput> | void {
    const command = new UpdateAccountPasswordPolicyCommand(args);
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
   * <p>Updates the policy that grants an IAM entity permission to assume a role. This is
   *             typically referred to as the "role trust policy". For more information about roles, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to
   *                 delegate permissions and federate identities</a>.</p>
   */
  public updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssumeRolePolicyCommandOutput>;
  public updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    cb: (err: any, data?: UpdateAssumeRolePolicyCommandOutput) => void
  ): void;
  public updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssumeRolePolicyCommandOutput) => void
  ): void;
  public updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssumeRolePolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssumeRolePolicyCommandOutput) => void
  ): Promise<UpdateAssumeRolePolicyCommandOutput> | void {
    const command = new UpdateAssumeRolePolicyCommand(args);
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
   * <p>Updates the name and/or the path of the specified IAM group.</p>
   *         <important>
   *             <p> You should understand the implications of changing a group's path or name. For
   *                 more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and
   *                     groups</a> in the <i>IAM User Guide</i>.</p>
   *         </important>
   *         <note>
   *             <p>The person making the request (the principal), must have permission to change the
   *                 role group with the old name and the new name. For example, to change the group
   *                 named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy
   *                 that allows them to update both groups. If the principal has permission to update
   *                 the <code>Managers</code> group, but not the <code>MGRs</code> group, then the
   *                 update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>.
   *             </p>
   *         </note>
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
   * <p>Changes the password for the specified IAM user. You can use the AWS CLI, the
   *             AWS API, or the <b>Users</b> page in the IAM console to
   *             change the password for any IAM user. Use <a>ChangePassword</a> to change
   *             your own password in the <b>My Security Credentials</b> page
   *             in the AWS Management Console.</p>
   *         <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the
   *                 <i>IAM User Guide</i>.</p>
   */
  public updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoginProfileCommandOutput>;
  public updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    cb: (err: any, data?: UpdateLoginProfileCommandOutput) => void
  ): void;
  public updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoginProfileCommandOutput) => void
  ): void;
  public updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLoginProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateLoginProfileCommandOutput) => void
  ): Promise<UpdateLoginProfileCommandOutput> | void {
    const command = new UpdateLoginProfileCommand(args);
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
   * <p>Replaces the existing list of server certificate thumbprints associated with an OpenID
   *             Connect (OIDC) provider resource object with a new list of thumbprints.</p>
   *         <p>The list that you pass with this operation completely replaces the existing list of
   *             thumbprints. (The lists are not merged.)</p>
   *         <p>Typically, you need to update a thumbprint only when the identity provider's
   *             certificate changes, which occurs rarely. However, if the provider's certificate
   *                 <i>does</i> change, any attempt to assume an IAM role that specifies
   *             the OIDC provider as a principal fails until the certificate thumbprint is
   *             updated.</p>
   *         <note>
   *             <p>Trust for the OIDC provider is derived from the provider's certificate and is
   *                 validated by the thumbprint. Therefore, it is best to limit access to the
   *                     <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly
   *                 privileged users.</p>
   *         </note>
   */
  public updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput>;
  public updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    cb: (err: any, data?: UpdateOpenIDConnectProviderThumbprintCommandOutput) => void
  ): void;
  public updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOpenIDConnectProviderThumbprintCommandOutput) => void
  ): void;
  public updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateOpenIDConnectProviderThumbprintCommandOutput) => void),
    cb?: (err: any, data?: UpdateOpenIDConnectProviderThumbprintCommandOutput) => void
  ): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput> | void {
    const command = new UpdateOpenIDConnectProviderThumbprintCommand(args);
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
   * <p>Updates the description or maximum session duration setting of a role.</p>
   */
  public updateRole(args: UpdateRoleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoleCommandOutput>;
  public updateRole(args: UpdateRoleCommandInput, cb: (err: any, data?: UpdateRoleCommandOutput) => void): void;
  public updateRole(
    args: UpdateRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoleCommandOutput) => void
  ): void;
  public updateRole(
    args: UpdateRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoleCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoleCommandOutput) => void
  ): Promise<UpdateRoleCommandOutput> | void {
    const command = new UpdateRoleCommand(args);
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
   * <p>Use <a>UpdateRole</a> instead.</p>
   *         <p>Modifies only the description of a role. This operation performs the same function as
   *             the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
   */
  public updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoleDescriptionCommandOutput>;
  public updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    cb: (err: any, data?: UpdateRoleDescriptionCommandOutput) => void
  ): void;
  public updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoleDescriptionCommandOutput) => void
  ): void;
  public updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoleDescriptionCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoleDescriptionCommandOutput) => void
  ): Promise<UpdateRoleDescriptionCommandOutput> | void {
    const command = new UpdateRoleDescriptionCommand(args);
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
   * <p>Updates the metadata document for an existing SAML provider resource object.</p>
   *         <note>
   *             <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
   *         </note>
   */
  public updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSAMLProviderCommandOutput>;
  public updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    cb: (err: any, data?: UpdateSAMLProviderCommandOutput) => void
  ): void;
  public updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSAMLProviderCommandOutput) => void
  ): void;
  public updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSAMLProviderCommandOutput) => void),
    cb?: (err: any, data?: UpdateSAMLProviderCommandOutput) => void
  ): Promise<UpdateSAMLProviderCommandOutput> | void {
    const command = new UpdateSAMLProviderCommand(args);
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
   * <p>Updates the name and/or the path of the specified server certificate stored in
   *             IAM.</p>
   *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
   *                 with server certificates</a> in the <i>IAM User Guide</i>. This
   *             topic also includes a list of AWS services that can use the server certificates that
   *             you manage with IAM.</p>
   *         <important>
   *             <p>You should understand the implications of changing a server certificate's path or
   *                 name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the
   *                     <i>IAM User Guide</i>.</p>
   *         </important>
   *         <note>
   *             <p>The person making the request (the principal), must have permission to change the
   *                 server certificate with the old name and the new name. For example, to change the
   *                 certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the
   *                 principal must have a policy that allows them to update both certificates. If the
   *                 principal has permission to update the <code>ProductionCert</code> group, but not
   *                 the <code>ProdCert</code> certificate, then the update fails. For more information
   *                 about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p>
   *         </note>
   */
  public updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServerCertificateCommandOutput>;
  public updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    cb: (err: any, data?: UpdateServerCertificateCommandOutput) => void
  ): void;
  public updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerCertificateCommandOutput) => void
  ): void;
  public updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServerCertificateCommandOutput) => void),
    cb?: (err: any, data?: UpdateServerCertificateCommandOutput) => void
  ): Promise<UpdateServerCertificateCommandOutput> | void {
    const command = new UpdateServerCertificateCommand(args);
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
   * <p>Sets the status of a service-specific credential to <code>Active</code> or
   *                 <code>Inactive</code>. Service-specific credentials that are inactive cannot be used
   *             for authentication to the service. This operation can be used to disable a user's
   *             service-specific credential as part of a credential rotation work flow.</p>
   */
  public updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSpecificCredentialCommandOutput>;
  public updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: UpdateServiceSpecificCredentialCommandOutput) => void
  ): void;
  public updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSpecificCredentialCommandOutput) => void
  ): void;
  public updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceSpecificCredentialCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceSpecificCredentialCommandOutput) => void
  ): Promise<UpdateServiceSpecificCredentialCommandOutput> | void {
    const command = new UpdateServiceSpecificCredentialCommand(args);
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
   * <p>Changes the status of the specified user signing certificate from active to disabled,
   *             or vice versa. This operation can be used to disable an IAM user's signing certificate
   *             as part of a certificate rotation work flow.</p>
   *         <p>If the <code>UserName</code> field is not specified, the user name is determined
   *             implicitly based on the AWS access key ID used to sign the request. This operation
   *             works for access keys under the AWS account. Consequently, you can use this operation
   *             to manage AWS account root user credentials even if the AWS account has no
   *             associated users.</p>
   */
  public updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSigningCertificateCommandOutput>;
  public updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    cb: (err: any, data?: UpdateSigningCertificateCommandOutput) => void
  ): void;
  public updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSigningCertificateCommandOutput) => void
  ): void;
  public updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSigningCertificateCommandOutput) => void),
    cb?: (err: any, data?: UpdateSigningCertificateCommandOutput) => void
  ): Promise<UpdateSigningCertificateCommandOutput> | void {
    const command = new UpdateSigningCertificateCommand(args);
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
   * <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public
   *             keys that are inactive cannot be used for authentication. This operation can be used to
   *             disable a user's SSH public key as part of a key rotation work flow.</p>
   *         <p>The SSH public key affected by this operation is used only for authenticating the
   *             associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys
   *             to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for
   *                 SSH connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
   */
  public updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSSHPublicKeyCommandOutput>;
  public updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    cb: (err: any, data?: UpdateSSHPublicKeyCommandOutput) => void
  ): void;
  public updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSSHPublicKeyCommandOutput) => void
  ): void;
  public updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSSHPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: UpdateSSHPublicKeyCommandOutput) => void
  ): Promise<UpdateSSHPublicKeyCommandOutput> | void {
    const command = new UpdateSSHPublicKeyCommand(args);
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
   * <p>Updates the name and/or the path of the specified IAM user.</p>
   *         <important>
   *             <p> You should understand the implications of changing an IAM user's path or name.
   *                 For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM
   *                     user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM
   *                     group</a> in the <i>IAM User Guide</i>.</p>
   *         </important>
   *         <note>
   *             <p> To change a user name, the requester must have appropriate permissions on both
   *                 the source object and the target object. For example, to change Bob to Robert, the
   *                 entity making the request must have permission on Bob and Robert, or must have
   *                 permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p>
   *         </note>
   */
  public updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  public updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
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
   * <p>Uploads a server certificate entity for the AWS account. The server certificate
   *             entity includes a public key certificate, a private key, and an optional certificate
   *             chain, which should all be PEM-encoded.</p>
   *         <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">AWS Certificate
   *                 Manager</a> to provision, manage, and deploy your server certificates. With ACM
   *             you can request a certificate, deploy it to AWS resources, and let ACM handle
   *             certificate renewals for you. Certificates provided by ACM are free. For more
   *             information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager User Guide</a>.</p>
   *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
   *                 with server certificates</a> in the <i>IAM User Guide</i>. This
   *             topic includes a list of AWS services that can use the server certificates that you
   *             manage with IAM.</p>
   *         <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
   *                 quotas</a> in the <i>IAM User Guide</i>.</p>
   *         <note>
   *             <p>Because the body of the public key certificate, private key, and the certificate
   *                 chain can be large, you should use POST rather than GET when calling
   *                     <code>UploadServerCertificate</code>. For information about setting up
   *                 signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API
   *                     requests</a> in the <i>AWS General Reference</i>. For general
   *                 information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by making HTTP query
   *                     requests</a> in the <i>IAM User Guide</i>.</p>
   *         </note>
   */
  public uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadServerCertificateCommandOutput>;
  public uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    cb: (err: any, data?: UploadServerCertificateCommandOutput) => void
  ): void;
  public uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadServerCertificateCommandOutput) => void
  ): void;
  public uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UploadServerCertificateCommandOutput) => void),
    cb?: (err: any, data?: UploadServerCertificateCommandOutput) => void
  ): Promise<UploadServerCertificateCommandOutput> | void {
    const command = new UploadServerCertificateCommand(args);
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
   * <p>Uploads an X.509 signing certificate and associates it with the specified IAM user.
   *             Some AWS services require you to use certificates to validate requests that are signed
   *             with a corresponding private key. When you upload the certificate, its default status is
   *                 <code>Active</code>.</p>
   *         <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing
   *                 server certificates in IAM</a> in the
   *             <i>IAM User Guide</i>.</p>
   *         <p>If the <code>UserName</code> is not specified, the IAM user name is determined
   *             implicitly based on the AWS access key ID used to sign the request. This operation
   *             works for access keys under the AWS account. Consequently, you can use this operation
   *             to manage AWS account root user credentials even if the AWS account has no
   *             associated users.</p>
   *         <note>
   *             <p>Because the body of an X.509 certificate can be large, you should use POST rather
   *                 than GET when calling <code>UploadSigningCertificate</code>. For information about
   *                 setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing
   *                     AWS API requests</a> in the <i>AWS General Reference</i>. For
   *                 general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query
   *                     requests</a> in the <i>IAM User Guide</i>.</p>
   *         </note>
   */
  public uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadSigningCertificateCommandOutput>;
  public uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    cb: (err: any, data?: UploadSigningCertificateCommandOutput) => void
  ): void;
  public uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadSigningCertificateCommandOutput) => void
  ): void;
  public uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UploadSigningCertificateCommandOutput) => void),
    cb?: (err: any, data?: UploadSigningCertificateCommandOutput) => void
  ): Promise<UploadSigningCertificateCommandOutput> | void {
    const command = new UploadSigningCertificateCommand(args);
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
   * <p>Uploads an SSH public key and associates it with the specified IAM user.</p>
   *         <p>The SSH public key uploaded by this operation can be used only for authenticating the
   *             associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys
   *             to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for
   *                 SSH connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
   */
  public uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadSSHPublicKeyCommandOutput>;
  public uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    cb: (err: any, data?: UploadSSHPublicKeyCommandOutput) => void
  ): void;
  public uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadSSHPublicKeyCommandOutput) => void
  ): void;
  public uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UploadSSHPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: UploadSSHPublicKeyCommandOutput) => void
  ): Promise<UploadSSHPublicKeyCommandOutput> | void {
    const command = new UploadSSHPublicKeyCommand(args);
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
