// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptResourceShareInvitationCommand,
  AcceptResourceShareInvitationCommandInput,
  AcceptResourceShareInvitationCommandOutput,
} from "./commands/AcceptResourceShareInvitationCommand";
import {
  AssociateResourceShareCommand,
  AssociateResourceShareCommandInput,
  AssociateResourceShareCommandOutput,
} from "./commands/AssociateResourceShareCommand";
import {
  AssociateResourceSharePermissionCommand,
  AssociateResourceSharePermissionCommandInput,
  AssociateResourceSharePermissionCommandOutput,
} from "./commands/AssociateResourceSharePermissionCommand";
import {
  CreatePermissionCommand,
  CreatePermissionCommandInput,
  CreatePermissionCommandOutput,
} from "./commands/CreatePermissionCommand";
import {
  CreatePermissionVersionCommand,
  CreatePermissionVersionCommandInput,
  CreatePermissionVersionCommandOutput,
} from "./commands/CreatePermissionVersionCommand";
import {
  CreateResourceShareCommand,
  CreateResourceShareCommandInput,
  CreateResourceShareCommandOutput,
} from "./commands/CreateResourceShareCommand";
import {
  DeletePermissionCommand,
  DeletePermissionCommandInput,
  DeletePermissionCommandOutput,
} from "./commands/DeletePermissionCommand";
import {
  DeletePermissionVersionCommand,
  DeletePermissionVersionCommandInput,
  DeletePermissionVersionCommandOutput,
} from "./commands/DeletePermissionVersionCommand";
import {
  DeleteResourceShareCommand,
  DeleteResourceShareCommandInput,
  DeleteResourceShareCommandOutput,
} from "./commands/DeleteResourceShareCommand";
import {
  DisassociateResourceShareCommand,
  DisassociateResourceShareCommandInput,
  DisassociateResourceShareCommandOutput,
} from "./commands/DisassociateResourceShareCommand";
import {
  DisassociateResourceSharePermissionCommand,
  DisassociateResourceSharePermissionCommandInput,
  DisassociateResourceSharePermissionCommandOutput,
} from "./commands/DisassociateResourceSharePermissionCommand";
import {
  EnableSharingWithAwsOrganizationCommand,
  EnableSharingWithAwsOrganizationCommandInput,
  EnableSharingWithAwsOrganizationCommandOutput,
} from "./commands/EnableSharingWithAwsOrganizationCommand";
import {
  GetPermissionCommand,
  GetPermissionCommandInput,
  GetPermissionCommandOutput,
} from "./commands/GetPermissionCommand";
import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import {
  GetResourceShareAssociationsCommand,
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
} from "./commands/GetResourceShareAssociationsCommand";
import {
  GetResourceShareInvitationsCommand,
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput,
} from "./commands/GetResourceShareInvitationsCommand";
import {
  GetResourceSharesCommand,
  GetResourceSharesCommandInput,
  GetResourceSharesCommandOutput,
} from "./commands/GetResourceSharesCommand";
import {
  ListPendingInvitationResourcesCommand,
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
} from "./commands/ListPendingInvitationResourcesCommand";
import {
  ListPermissionAssociationsCommand,
  ListPermissionAssociationsCommandInput,
  ListPermissionAssociationsCommandOutput,
} from "./commands/ListPermissionAssociationsCommand";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "./commands/ListPermissionsCommand";
import {
  ListPermissionVersionsCommand,
  ListPermissionVersionsCommandInput,
  ListPermissionVersionsCommandOutput,
} from "./commands/ListPermissionVersionsCommand";
import {
  ListPrincipalsCommand,
  ListPrincipalsCommandInput,
  ListPrincipalsCommandOutput,
} from "./commands/ListPrincipalsCommand";
import {
  ListReplacePermissionAssociationsWorkCommand,
  ListReplacePermissionAssociationsWorkCommandInput,
  ListReplacePermissionAssociationsWorkCommandOutput,
} from "./commands/ListReplacePermissionAssociationsWorkCommand";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "./commands/ListResourcesCommand";
import {
  ListResourceSharePermissionsCommand,
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput,
} from "./commands/ListResourceSharePermissionsCommand";
import {
  ListResourceTypesCommand,
  ListResourceTypesCommandInput,
  ListResourceTypesCommandOutput,
} from "./commands/ListResourceTypesCommand";
import {
  PromotePermissionCreatedFromPolicyCommand,
  PromotePermissionCreatedFromPolicyCommandInput,
  PromotePermissionCreatedFromPolicyCommandOutput,
} from "./commands/PromotePermissionCreatedFromPolicyCommand";
import {
  PromoteResourceShareCreatedFromPolicyCommand,
  PromoteResourceShareCreatedFromPolicyCommandInput,
  PromoteResourceShareCreatedFromPolicyCommandOutput,
} from "./commands/PromoteResourceShareCreatedFromPolicyCommand";
import {
  RejectResourceShareInvitationCommand,
  RejectResourceShareInvitationCommandInput,
  RejectResourceShareInvitationCommandOutput,
} from "./commands/RejectResourceShareInvitationCommand";
import {
  ReplacePermissionAssociationsCommand,
  ReplacePermissionAssociationsCommandInput,
  ReplacePermissionAssociationsCommandOutput,
} from "./commands/ReplacePermissionAssociationsCommand";
import {
  SetDefaultPermissionVersionCommand,
  SetDefaultPermissionVersionCommandInput,
  SetDefaultPermissionVersionCommandOutput,
} from "./commands/SetDefaultPermissionVersionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateResourceShareCommand,
  UpdateResourceShareCommandInput,
  UpdateResourceShareCommandOutput,
} from "./commands/UpdateResourceShareCommand";
import { RAMClient, RAMClientConfig } from "./RAMClient";

const commands = {
  AcceptResourceShareInvitationCommand,
  AssociateResourceShareCommand,
  AssociateResourceSharePermissionCommand,
  CreatePermissionCommand,
  CreatePermissionVersionCommand,
  CreateResourceShareCommand,
  DeletePermissionCommand,
  DeletePermissionVersionCommand,
  DeleteResourceShareCommand,
  DisassociateResourceShareCommand,
  DisassociateResourceSharePermissionCommand,
  EnableSharingWithAwsOrganizationCommand,
  GetPermissionCommand,
  GetResourcePoliciesCommand,
  GetResourceShareAssociationsCommand,
  GetResourceShareInvitationsCommand,
  GetResourceSharesCommand,
  ListPendingInvitationResourcesCommand,
  ListPermissionAssociationsCommand,
  ListPermissionsCommand,
  ListPermissionVersionsCommand,
  ListPrincipalsCommand,
  ListReplacePermissionAssociationsWorkCommand,
  ListResourcesCommand,
  ListResourceSharePermissionsCommand,
  ListResourceTypesCommand,
  PromotePermissionCreatedFromPolicyCommand,
  PromoteResourceShareCreatedFromPolicyCommand,
  RejectResourceShareInvitationCommand,
  ReplacePermissionAssociationsCommand,
  SetDefaultPermissionVersionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateResourceShareCommand,
};

export interface RAM {
  /**
   * @see {@link AcceptResourceShareInvitationCommand}
   */
  acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptResourceShareInvitationCommandOutput>;
  acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationCommandInput,
    cb: (err: any, data?: AcceptResourceShareInvitationCommandOutput) => void
  ): void;
  acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptResourceShareInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResourceShareCommand}
   */
  associateResourceShare(
    args: AssociateResourceShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResourceShareCommandOutput>;
  associateResourceShare(
    args: AssociateResourceShareCommandInput,
    cb: (err: any, data?: AssociateResourceShareCommandOutput) => void
  ): void;
  associateResourceShare(
    args: AssociateResourceShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResourceShareCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResourceSharePermissionCommand}
   */
  associateResourceSharePermission(
    args: AssociateResourceSharePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResourceSharePermissionCommandOutput>;
  associateResourceSharePermission(
    args: AssociateResourceSharePermissionCommandInput,
    cb: (err: any, data?: AssociateResourceSharePermissionCommandOutput) => void
  ): void;
  associateResourceSharePermission(
    args: AssociateResourceSharePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResourceSharePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePermissionCommand}
   */
  createPermission(
    args: CreatePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePermissionCommandOutput>;
  createPermission(
    args: CreatePermissionCommandInput,
    cb: (err: any, data?: CreatePermissionCommandOutput) => void
  ): void;
  createPermission(
    args: CreatePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePermissionVersionCommand}
   */
  createPermissionVersion(
    args: CreatePermissionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePermissionVersionCommandOutput>;
  createPermissionVersion(
    args: CreatePermissionVersionCommandInput,
    cb: (err: any, data?: CreatePermissionVersionCommandOutput) => void
  ): void;
  createPermissionVersion(
    args: CreatePermissionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePermissionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceShareCommand}
   */
  createResourceShare(
    args: CreateResourceShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceShareCommandOutput>;
  createResourceShare(
    args: CreateResourceShareCommandInput,
    cb: (err: any, data?: CreateResourceShareCommandOutput) => void
  ): void;
  createResourceShare(
    args: CreateResourceShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePermissionCommand}
   */
  deletePermission(
    args: DeletePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionCommandOutput>;
  deletePermission(
    args: DeletePermissionCommandInput,
    cb: (err: any, data?: DeletePermissionCommandOutput) => void
  ): void;
  deletePermission(
    args: DeletePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePermissionVersionCommand}
   */
  deletePermissionVersion(
    args: DeletePermissionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionVersionCommandOutput>;
  deletePermissionVersion(
    args: DeletePermissionVersionCommandInput,
    cb: (err: any, data?: DeletePermissionVersionCommandOutput) => void
  ): void;
  deletePermissionVersion(
    args: DeletePermissionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceShareCommand}
   */
  deleteResourceShare(
    args: DeleteResourceShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceShareCommandOutput>;
  deleteResourceShare(
    args: DeleteResourceShareCommandInput,
    cb: (err: any, data?: DeleteResourceShareCommandOutput) => void
  ): void;
  deleteResourceShare(
    args: DeleteResourceShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResourceShareCommand}
   */
  disassociateResourceShare(
    args: DisassociateResourceShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResourceShareCommandOutput>;
  disassociateResourceShare(
    args: DisassociateResourceShareCommandInput,
    cb: (err: any, data?: DisassociateResourceShareCommandOutput) => void
  ): void;
  disassociateResourceShare(
    args: DisassociateResourceShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResourceShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResourceSharePermissionCommand}
   */
  disassociateResourceSharePermission(
    args: DisassociateResourceSharePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResourceSharePermissionCommandOutput>;
  disassociateResourceSharePermission(
    args: DisassociateResourceSharePermissionCommandInput,
    cb: (err: any, data?: DisassociateResourceSharePermissionCommandOutput) => void
  ): void;
  disassociateResourceSharePermission(
    args: DisassociateResourceSharePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResourceSharePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableSharingWithAwsOrganizationCommand}
   */
  enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableSharingWithAwsOrganizationCommandOutput>;
  enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationCommandInput,
    cb: (err: any, data?: EnableSharingWithAwsOrganizationCommandOutput) => void
  ): void;
  enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSharingWithAwsOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPermissionCommand}
   */
  getPermission(args: GetPermissionCommandInput, options?: __HttpHandlerOptions): Promise<GetPermissionCommandOutput>;
  getPermission(args: GetPermissionCommandInput, cb: (err: any, data?: GetPermissionCommandOutput) => void): void;
  getPermission(
    args: GetPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePoliciesCommand}
   */
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePoliciesCommandOutput>;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceShareAssociationsCommand}
   */
  getResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceShareAssociationsCommandOutput>;
  getResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    cb: (err: any, data?: GetResourceShareAssociationsCommandOutput) => void
  ): void;
  getResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceShareAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceShareInvitationsCommand}
   */
  getResourceShareInvitations(
    args: GetResourceShareInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceShareInvitationsCommandOutput>;
  getResourceShareInvitations(
    args: GetResourceShareInvitationsCommandInput,
    cb: (err: any, data?: GetResourceShareInvitationsCommandOutput) => void
  ): void;
  getResourceShareInvitations(
    args: GetResourceShareInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceShareInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceSharesCommand}
   */
  getResourceShares(
    args: GetResourceSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceSharesCommandOutput>;
  getResourceShares(
    args: GetResourceSharesCommandInput,
    cb: (err: any, data?: GetResourceSharesCommandOutput) => void
  ): void;
  getResourceShares(
    args: GetResourceSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPendingInvitationResourcesCommand}
   */
  listPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPendingInvitationResourcesCommandOutput>;
  listPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    cb: (err: any, data?: ListPendingInvitationResourcesCommandOutput) => void
  ): void;
  listPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPendingInvitationResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionAssociationsCommand}
   */
  listPermissionAssociations(
    args: ListPermissionAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionAssociationsCommandOutput>;
  listPermissionAssociations(
    args: ListPermissionAssociationsCommandInput,
    cb: (err: any, data?: ListPermissionAssociationsCommandOutput) => void
  ): void;
  listPermissionAssociations(
    args: ListPermissionAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionsCommand}
   */
  listPermissions(
    args: ListPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionsCommandOutput>;
  listPermissions(args: ListPermissionsCommandInput, cb: (err: any, data?: ListPermissionsCommandOutput) => void): void;
  listPermissions(
    args: ListPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionVersionsCommand}
   */
  listPermissionVersions(
    args: ListPermissionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionVersionsCommandOutput>;
  listPermissionVersions(
    args: ListPermissionVersionsCommandInput,
    cb: (err: any, data?: ListPermissionVersionsCommandOutput) => void
  ): void;
  listPermissionVersions(
    args: ListPermissionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrincipalsCommand}
   */
  listPrincipals(
    args: ListPrincipalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrincipalsCommandOutput>;
  listPrincipals(args: ListPrincipalsCommandInput, cb: (err: any, data?: ListPrincipalsCommandOutput) => void): void;
  listPrincipals(
    args: ListPrincipalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrincipalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReplacePermissionAssociationsWorkCommand}
   */
  listReplacePermissionAssociationsWork(
    args: ListReplacePermissionAssociationsWorkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReplacePermissionAssociationsWorkCommandOutput>;
  listReplacePermissionAssociationsWork(
    args: ListReplacePermissionAssociationsWorkCommandInput,
    cb: (err: any, data?: ListReplacePermissionAssociationsWorkCommandOutput) => void
  ): void;
  listReplacePermissionAssociationsWork(
    args: ListReplacePermissionAssociationsWorkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReplacePermissionAssociationsWorkCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesCommand}
   */
  listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
  listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
  listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceSharePermissionsCommand}
   */
  listResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceSharePermissionsCommandOutput>;
  listResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    cb: (err: any, data?: ListResourceSharePermissionsCommandOutput) => void
  ): void;
  listResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceSharePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceTypesCommand}
   */
  listResourceTypes(
    args: ListResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceTypesCommandOutput>;
  listResourceTypes(
    args: ListResourceTypesCommandInput,
    cb: (err: any, data?: ListResourceTypesCommandOutput) => void
  ): void;
  listResourceTypes(
    args: ListResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link PromotePermissionCreatedFromPolicyCommand}
   */
  promotePermissionCreatedFromPolicy(
    args: PromotePermissionCreatedFromPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PromotePermissionCreatedFromPolicyCommandOutput>;
  promotePermissionCreatedFromPolicy(
    args: PromotePermissionCreatedFromPolicyCommandInput,
    cb: (err: any, data?: PromotePermissionCreatedFromPolicyCommandOutput) => void
  ): void;
  promotePermissionCreatedFromPolicy(
    args: PromotePermissionCreatedFromPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PromotePermissionCreatedFromPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PromoteResourceShareCreatedFromPolicyCommand}
   */
  promoteResourceShareCreatedFromPolicy(
    args: PromoteResourceShareCreatedFromPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput>;
  promoteResourceShareCreatedFromPolicy(
    args: PromoteResourceShareCreatedFromPolicyCommandInput,
    cb: (err: any, data?: PromoteResourceShareCreatedFromPolicyCommandOutput) => void
  ): void;
  promoteResourceShareCreatedFromPolicy(
    args: PromoteResourceShareCreatedFromPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PromoteResourceShareCreatedFromPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectResourceShareInvitationCommand}
   */
  rejectResourceShareInvitation(
    args: RejectResourceShareInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectResourceShareInvitationCommandOutput>;
  rejectResourceShareInvitation(
    args: RejectResourceShareInvitationCommandInput,
    cb: (err: any, data?: RejectResourceShareInvitationCommandOutput) => void
  ): void;
  rejectResourceShareInvitation(
    args: RejectResourceShareInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectResourceShareInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplacePermissionAssociationsCommand}
   */
  replacePermissionAssociations(
    args: ReplacePermissionAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplacePermissionAssociationsCommandOutput>;
  replacePermissionAssociations(
    args: ReplacePermissionAssociationsCommandInput,
    cb: (err: any, data?: ReplacePermissionAssociationsCommandOutput) => void
  ): void;
  replacePermissionAssociations(
    args: ReplacePermissionAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplacePermissionAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDefaultPermissionVersionCommand}
   */
  setDefaultPermissionVersion(
    args: SetDefaultPermissionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultPermissionVersionCommandOutput>;
  setDefaultPermissionVersion(
    args: SetDefaultPermissionVersionCommandInput,
    cb: (err: any, data?: SetDefaultPermissionVersionCommandOutput) => void
  ): void;
  setDefaultPermissionVersion(
    args: SetDefaultPermissionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultPermissionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceShareCommand}
   */
  updateResourceShare(
    args: UpdateResourceShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceShareCommandOutput>;
  updateResourceShare(
    args: UpdateResourceShareCommandInput,
    cb: (err: any, data?: UpdateResourceShareCommandOutput) => void
  ): void;
  updateResourceShare(
    args: UpdateResourceShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceShareCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This is the <i>Resource Access Manager API Reference</i>. This documentation provides
 *             descriptions and syntax for each of the actions and data types in RAM. RAM is a
 *             service that helps you securely share your Amazon Web Services resources to other Amazon Web Services accounts. If
 *             you use Organizations to manage your accounts, then you can share your resources with your
 *             entire organization or to organizational units (OUs). For supported resource types, you
 *             can also share resources with individual Identity and Access Management (IAM) roles and users. </p>
 *          <p>To learn more about RAM, see the following resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/ram">Resource Access Manager product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/ram/latest/userguide/">Resource Access Manager User
 *                         Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class RAM extends RAMClient implements RAM {}
createAggregatedClient(commands, RAM);
