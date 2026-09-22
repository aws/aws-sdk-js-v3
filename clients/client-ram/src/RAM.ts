// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AcceptResourceShareInvitationCommandInput,
  type AcceptResourceShareInvitationCommandOutput,
  AcceptResourceShareInvitationCommand,
} from "./commands/AcceptResourceShareInvitationCommand";
import {
  type AssociateResourceShareCommandInput,
  type AssociateResourceShareCommandOutput,
  AssociateResourceShareCommand,
} from "./commands/AssociateResourceShareCommand";
import {
  type AssociateResourceSharePermissionCommandInput,
  type AssociateResourceSharePermissionCommandOutput,
  AssociateResourceSharePermissionCommand,
} from "./commands/AssociateResourceSharePermissionCommand";
import {
  type CreatePermissionCommandInput,
  type CreatePermissionCommandOutput,
  CreatePermissionCommand,
} from "./commands/CreatePermissionCommand";
import {
  type CreatePermissionVersionCommandInput,
  type CreatePermissionVersionCommandOutput,
  CreatePermissionVersionCommand,
} from "./commands/CreatePermissionVersionCommand";
import {
  type CreateResourceShareCommandInput,
  type CreateResourceShareCommandOutput,
  CreateResourceShareCommand,
} from "./commands/CreateResourceShareCommand";
import {
  type DeletePermissionCommandInput,
  type DeletePermissionCommandOutput,
  DeletePermissionCommand,
} from "./commands/DeletePermissionCommand";
import {
  type DeletePermissionVersionCommandInput,
  type DeletePermissionVersionCommandOutput,
  DeletePermissionVersionCommand,
} from "./commands/DeletePermissionVersionCommand";
import {
  type DeleteResourceShareCommandInput,
  type DeleteResourceShareCommandOutput,
  DeleteResourceShareCommand,
} from "./commands/DeleteResourceShareCommand";
import {
  type DisassociateResourceShareCommandInput,
  type DisassociateResourceShareCommandOutput,
  DisassociateResourceShareCommand,
} from "./commands/DisassociateResourceShareCommand";
import {
  type DisassociateResourceSharePermissionCommandInput,
  type DisassociateResourceSharePermissionCommandOutput,
  DisassociateResourceSharePermissionCommand,
} from "./commands/DisassociateResourceSharePermissionCommand";
import {
  type EnableSharingWithAwsOrganizationCommandInput,
  type EnableSharingWithAwsOrganizationCommandOutput,
  EnableSharingWithAwsOrganizationCommand,
} from "./commands/EnableSharingWithAwsOrganizationCommand";
import {
  type GetPermissionCommandInput,
  type GetPermissionCommandOutput,
  GetPermissionCommand,
} from "./commands/GetPermissionCommand";
import {
  type GetResourcePoliciesCommandInput,
  type GetResourcePoliciesCommandOutput,
  GetResourcePoliciesCommand,
} from "./commands/GetResourcePoliciesCommand";
import {
  type GetResourceShareAssociationsCommandInput,
  type GetResourceShareAssociationsCommandOutput,
  GetResourceShareAssociationsCommand,
} from "./commands/GetResourceShareAssociationsCommand";
import {
  type GetResourceShareInvitationsCommandInput,
  type GetResourceShareInvitationsCommandOutput,
  GetResourceShareInvitationsCommand,
} from "./commands/GetResourceShareInvitationsCommand";
import {
  type GetResourceSharesCommandInput,
  type GetResourceSharesCommandOutput,
  GetResourceSharesCommand,
} from "./commands/GetResourceSharesCommand";
import {
  type ListPendingInvitationResourcesCommandInput,
  type ListPendingInvitationResourcesCommandOutput,
  ListPendingInvitationResourcesCommand,
} from "./commands/ListPendingInvitationResourcesCommand";
import {
  type ListPermissionAssociationsCommandInput,
  type ListPermissionAssociationsCommandOutput,
  ListPermissionAssociationsCommand,
} from "./commands/ListPermissionAssociationsCommand";
import {
  type ListPermissionsCommandInput,
  type ListPermissionsCommandOutput,
  ListPermissionsCommand,
} from "./commands/ListPermissionsCommand";
import {
  type ListPermissionVersionsCommandInput,
  type ListPermissionVersionsCommandOutput,
  ListPermissionVersionsCommand,
} from "./commands/ListPermissionVersionsCommand";
import {
  type ListPrincipalsCommandInput,
  type ListPrincipalsCommandOutput,
  ListPrincipalsCommand,
} from "./commands/ListPrincipalsCommand";
import {
  type ListReplacePermissionAssociationsWorkCommandInput,
  type ListReplacePermissionAssociationsWorkCommandOutput,
  ListReplacePermissionAssociationsWorkCommand,
} from "./commands/ListReplacePermissionAssociationsWorkCommand";
import {
  type ListResourcesCommandInput,
  type ListResourcesCommandOutput,
  ListResourcesCommand,
} from "./commands/ListResourcesCommand";
import {
  type ListResourceSharePermissionsCommandInput,
  type ListResourceSharePermissionsCommandOutput,
  ListResourceSharePermissionsCommand,
} from "./commands/ListResourceSharePermissionsCommand";
import {
  type ListResourceTypesCommandInput,
  type ListResourceTypesCommandOutput,
  ListResourceTypesCommand,
} from "./commands/ListResourceTypesCommand";
import {
  type ListSourceAssociationsCommandInput,
  type ListSourceAssociationsCommandOutput,
  ListSourceAssociationsCommand,
} from "./commands/ListSourceAssociationsCommand";
import {
  type PromotePermissionCreatedFromPolicyCommandInput,
  type PromotePermissionCreatedFromPolicyCommandOutput,
  PromotePermissionCreatedFromPolicyCommand,
} from "./commands/PromotePermissionCreatedFromPolicyCommand";
import {
  type PromoteResourceShareCreatedFromPolicyCommandInput,
  type PromoteResourceShareCreatedFromPolicyCommandOutput,
  PromoteResourceShareCreatedFromPolicyCommand,
} from "./commands/PromoteResourceShareCreatedFromPolicyCommand";
import {
  type RejectResourceShareInvitationCommandInput,
  type RejectResourceShareInvitationCommandOutput,
  RejectResourceShareInvitationCommand,
} from "./commands/RejectResourceShareInvitationCommand";
import {
  type ReplacePermissionAssociationsCommandInput,
  type ReplacePermissionAssociationsCommandOutput,
  ReplacePermissionAssociationsCommand,
} from "./commands/ReplacePermissionAssociationsCommand";
import {
  type SetDefaultPermissionVersionCommandInput,
  type SetDefaultPermissionVersionCommandOutput,
  SetDefaultPermissionVersionCommand,
} from "./commands/SetDefaultPermissionVersionCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateResourceShareCommandInput,
  type UpdateResourceShareCommandOutput,
  UpdateResourceShareCommand,
} from "./commands/UpdateResourceShareCommand";
import { paginateGetResourcePolicies } from "./pagination/GetResourcePoliciesPaginator";
import { paginateGetResourceShareAssociations } from "./pagination/GetResourceShareAssociationsPaginator";
import { paginateGetResourceShareInvitations } from "./pagination/GetResourceShareInvitationsPaginator";
import { paginateGetResourceShares } from "./pagination/GetResourceSharesPaginator";
import { paginateListPendingInvitationResources } from "./pagination/ListPendingInvitationResourcesPaginator";
import { paginateListPermissionAssociations } from "./pagination/ListPermissionAssociationsPaginator";
import { paginateListPermissions } from "./pagination/ListPermissionsPaginator";
import { paginateListPermissionVersions } from "./pagination/ListPermissionVersionsPaginator";
import { paginateListPrincipals } from "./pagination/ListPrincipalsPaginator";
import {
  paginateListReplacePermissionAssociationsWork,
} from "./pagination/ListReplacePermissionAssociationsWorkPaginator";
import { paginateListResourceSharePermissions } from "./pagination/ListResourceSharePermissionsPaginator";
import { paginateListResources } from "./pagination/ListResourcesPaginator";
import { paginateListResourceTypes } from "./pagination/ListResourceTypesPaginator";
import { paginateListSourceAssociations } from "./pagination/ListSourceAssociationsPaginator";
import { RAMClient } from "./RAMClient";

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
  ListSourceAssociationsCommand,
  PromotePermissionCreatedFromPolicyCommand,
  PromoteResourceShareCreatedFromPolicyCommand,
  RejectResourceShareInvitationCommand,
  ReplacePermissionAssociationsCommand,
  SetDefaultPermissionVersionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateResourceShareCommand,
};
const paginators = {
  paginateGetResourcePolicies,
  paginateGetResourceShareAssociations,
  paginateGetResourceShareInvitations,
  paginateGetResourceShares,
  paginateListPendingInvitationResources,
  paginateListPermissionAssociations,
  paginateListPermissions,
  paginateListPermissionVersions,
  paginateListPrincipals,
  paginateListReplacePermissionAssociationsWork,
  paginateListResources,
  paginateListResourceSharePermissions,
  paginateListResourceTypes,
  paginateListSourceAssociations,
};

/**
 * @public
 */
export interface RAMRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface RAM {
  /**
   * @see {@link AcceptResourceShareInvitationCommand}
   */
  acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationCommandInput,
    options?: RAMRequestOptions
  ): Promise<AcceptResourceShareInvitationCommandOutput>;
  acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationCommandInput,
    cb: (err: any, data?: AcceptResourceShareInvitationCommandOutput) => void
  ): void;
  acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: AcceptResourceShareInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResourceShareCommand}
   */
  associateResourceShare(
    args: AssociateResourceShareCommandInput,
    options?: RAMRequestOptions
  ): Promise<AssociateResourceShareCommandOutput>;
  associateResourceShare(
    args: AssociateResourceShareCommandInput,
    cb: (err: any, data?: AssociateResourceShareCommandOutput) => void
  ): void;
  associateResourceShare(
    args: AssociateResourceShareCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: AssociateResourceShareCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResourceSharePermissionCommand}
   */
  associateResourceSharePermission(
    args: AssociateResourceSharePermissionCommandInput,
    options?: RAMRequestOptions
  ): Promise<AssociateResourceSharePermissionCommandOutput>;
  associateResourceSharePermission(
    args: AssociateResourceSharePermissionCommandInput,
    cb: (err: any, data?: AssociateResourceSharePermissionCommandOutput) => void
  ): void;
  associateResourceSharePermission(
    args: AssociateResourceSharePermissionCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: AssociateResourceSharePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePermissionCommand}
   */
  createPermission(
    args: CreatePermissionCommandInput,
    options?: RAMRequestOptions
  ): Promise<CreatePermissionCommandOutput>;
  createPermission(
    args: CreatePermissionCommandInput,
    cb: (err: any, data?: CreatePermissionCommandOutput) => void
  ): void;
  createPermission(
    args: CreatePermissionCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: CreatePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePermissionVersionCommand}
   */
  createPermissionVersion(
    args: CreatePermissionVersionCommandInput,
    options?: RAMRequestOptions
  ): Promise<CreatePermissionVersionCommandOutput>;
  createPermissionVersion(
    args: CreatePermissionVersionCommandInput,
    cb: (err: any, data?: CreatePermissionVersionCommandOutput) => void
  ): void;
  createPermissionVersion(
    args: CreatePermissionVersionCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: CreatePermissionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceShareCommand}
   */
  createResourceShare(
    args: CreateResourceShareCommandInput,
    options?: RAMRequestOptions
  ): Promise<CreateResourceShareCommandOutput>;
  createResourceShare(
    args: CreateResourceShareCommandInput,
    cb: (err: any, data?: CreateResourceShareCommandOutput) => void
  ): void;
  createResourceShare(
    args: CreateResourceShareCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: CreateResourceShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePermissionCommand}
   */
  deletePermission(
    args: DeletePermissionCommandInput,
    options?: RAMRequestOptions
  ): Promise<DeletePermissionCommandOutput>;
  deletePermission(
    args: DeletePermissionCommandInput,
    cb: (err: any, data?: DeletePermissionCommandOutput) => void
  ): void;
  deletePermission(
    args: DeletePermissionCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: DeletePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePermissionVersionCommand}
   */
  deletePermissionVersion(
    args: DeletePermissionVersionCommandInput,
    options?: RAMRequestOptions
  ): Promise<DeletePermissionVersionCommandOutput>;
  deletePermissionVersion(
    args: DeletePermissionVersionCommandInput,
    cb: (err: any, data?: DeletePermissionVersionCommandOutput) => void
  ): void;
  deletePermissionVersion(
    args: DeletePermissionVersionCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: DeletePermissionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceShareCommand}
   */
  deleteResourceShare(
    args: DeleteResourceShareCommandInput,
    options?: RAMRequestOptions
  ): Promise<DeleteResourceShareCommandOutput>;
  deleteResourceShare(
    args: DeleteResourceShareCommandInput,
    cb: (err: any, data?: DeleteResourceShareCommandOutput) => void
  ): void;
  deleteResourceShare(
    args: DeleteResourceShareCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: DeleteResourceShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResourceShareCommand}
   */
  disassociateResourceShare(
    args: DisassociateResourceShareCommandInput,
    options?: RAMRequestOptions
  ): Promise<DisassociateResourceShareCommandOutput>;
  disassociateResourceShare(
    args: DisassociateResourceShareCommandInput,
    cb: (err: any, data?: DisassociateResourceShareCommandOutput) => void
  ): void;
  disassociateResourceShare(
    args: DisassociateResourceShareCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: DisassociateResourceShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResourceSharePermissionCommand}
   */
  disassociateResourceSharePermission(
    args: DisassociateResourceSharePermissionCommandInput,
    options?: RAMRequestOptions
  ): Promise<DisassociateResourceSharePermissionCommandOutput>;
  disassociateResourceSharePermission(
    args: DisassociateResourceSharePermissionCommandInput,
    cb: (err: any, data?: DisassociateResourceSharePermissionCommandOutput) => void
  ): void;
  disassociateResourceSharePermission(
    args: DisassociateResourceSharePermissionCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: DisassociateResourceSharePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableSharingWithAwsOrganizationCommand}
   */
  enableSharingWithAwsOrganization(): Promise<EnableSharingWithAwsOrganizationCommandOutput>;
  enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationCommandInput,
    options?: RAMRequestOptions
  ): Promise<EnableSharingWithAwsOrganizationCommandOutput>;
  enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationCommandInput,
    cb: (err: any, data?: EnableSharingWithAwsOrganizationCommandOutput) => void
  ): void;
  enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: EnableSharingWithAwsOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPermissionCommand}
   */
  getPermission(
    args: GetPermissionCommandInput,
    options?: RAMRequestOptions
  ): Promise<GetPermissionCommandOutput>;
  getPermission(
    args: GetPermissionCommandInput,
    cb: (err: any, data?: GetPermissionCommandOutput) => void
  ): void;
  getPermission(
    args: GetPermissionCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: GetPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePoliciesCommand}
   */
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: RAMRequestOptions
  ): Promise<GetResourcePoliciesCommandOutput>;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceShareAssociationsCommand}
   */
  getResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    options?: RAMRequestOptions
  ): Promise<GetResourceShareAssociationsCommandOutput>;
  getResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    cb: (err: any, data?: GetResourceShareAssociationsCommandOutput) => void
  ): void;
  getResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: GetResourceShareAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceShareInvitationsCommand}
   */
  getResourceShareInvitations(): Promise<GetResourceShareInvitationsCommandOutput>;
  getResourceShareInvitations(
    args: GetResourceShareInvitationsCommandInput,
    options?: RAMRequestOptions
  ): Promise<GetResourceShareInvitationsCommandOutput>;
  getResourceShareInvitations(
    args: GetResourceShareInvitationsCommandInput,
    cb: (err: any, data?: GetResourceShareInvitationsCommandOutput) => void
  ): void;
  getResourceShareInvitations(
    args: GetResourceShareInvitationsCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: GetResourceShareInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceSharesCommand}
   */
  getResourceShares(
    args: GetResourceSharesCommandInput,
    options?: RAMRequestOptions
  ): Promise<GetResourceSharesCommandOutput>;
  getResourceShares(
    args: GetResourceSharesCommandInput,
    cb: (err: any, data?: GetResourceSharesCommandOutput) => void
  ): void;
  getResourceShares(
    args: GetResourceSharesCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: GetResourceSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPendingInvitationResourcesCommand}
   */
  listPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    options?: RAMRequestOptions
  ): Promise<ListPendingInvitationResourcesCommandOutput>;
  listPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    cb: (err: any, data?: ListPendingInvitationResourcesCommandOutput) => void
  ): void;
  listPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ListPendingInvitationResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionAssociationsCommand}
   */
  listPermissionAssociations(): Promise<ListPermissionAssociationsCommandOutput>;
  listPermissionAssociations(
    args: ListPermissionAssociationsCommandInput,
    options?: RAMRequestOptions
  ): Promise<ListPermissionAssociationsCommandOutput>;
  listPermissionAssociations(
    args: ListPermissionAssociationsCommandInput,
    cb: (err: any, data?: ListPermissionAssociationsCommandOutput) => void
  ): void;
  listPermissionAssociations(
    args: ListPermissionAssociationsCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ListPermissionAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionsCommand}
   */
  listPermissions(): Promise<ListPermissionsCommandOutput>;
  listPermissions(
    args: ListPermissionsCommandInput,
    options?: RAMRequestOptions
  ): Promise<ListPermissionsCommandOutput>;
  listPermissions(
    args: ListPermissionsCommandInput,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;
  listPermissions(
    args: ListPermissionsCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionVersionsCommand}
   */
  listPermissionVersions(
    args: ListPermissionVersionsCommandInput,
    options?: RAMRequestOptions
  ): Promise<ListPermissionVersionsCommandOutput>;
  listPermissionVersions(
    args: ListPermissionVersionsCommandInput,
    cb: (err: any, data?: ListPermissionVersionsCommandOutput) => void
  ): void;
  listPermissionVersions(
    args: ListPermissionVersionsCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ListPermissionVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrincipalsCommand}
   */
  listPrincipals(
    args: ListPrincipalsCommandInput,
    options?: RAMRequestOptions
  ): Promise<ListPrincipalsCommandOutput>;
  listPrincipals(
    args: ListPrincipalsCommandInput,
    cb: (err: any, data?: ListPrincipalsCommandOutput) => void
  ): void;
  listPrincipals(
    args: ListPrincipalsCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ListPrincipalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReplacePermissionAssociationsWorkCommand}
   */
  listReplacePermissionAssociationsWork(): Promise<ListReplacePermissionAssociationsWorkCommandOutput>;
  listReplacePermissionAssociationsWork(
    args: ListReplacePermissionAssociationsWorkCommandInput,
    options?: RAMRequestOptions
  ): Promise<ListReplacePermissionAssociationsWorkCommandOutput>;
  listReplacePermissionAssociationsWork(
    args: ListReplacePermissionAssociationsWorkCommandInput,
    cb: (err: any, data?: ListReplacePermissionAssociationsWorkCommandOutput) => void
  ): void;
  listReplacePermissionAssociationsWork(
    args: ListReplacePermissionAssociationsWorkCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ListReplacePermissionAssociationsWorkCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesCommand}
   */
  listResources(
    args: ListResourcesCommandInput,
    options?: RAMRequestOptions
  ): Promise<ListResourcesCommandOutput>;
  listResources(
    args: ListResourcesCommandInput,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;
  listResources(
    args: ListResourcesCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceSharePermissionsCommand}
   */
  listResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    options?: RAMRequestOptions
  ): Promise<ListResourceSharePermissionsCommandOutput>;
  listResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    cb: (err: any, data?: ListResourceSharePermissionsCommandOutput) => void
  ): void;
  listResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ListResourceSharePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceTypesCommand}
   */
  listResourceTypes(): Promise<ListResourceTypesCommandOutput>;
  listResourceTypes(
    args: ListResourceTypesCommandInput,
    options?: RAMRequestOptions
  ): Promise<ListResourceTypesCommandOutput>;
  listResourceTypes(
    args: ListResourceTypesCommandInput,
    cb: (err: any, data?: ListResourceTypesCommandOutput) => void
  ): void;
  listResourceTypes(
    args: ListResourceTypesCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ListResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceAssociationsCommand}
   */
  listSourceAssociations(): Promise<ListSourceAssociationsCommandOutput>;
  listSourceAssociations(
    args: ListSourceAssociationsCommandInput,
    options?: RAMRequestOptions
  ): Promise<ListSourceAssociationsCommandOutput>;
  listSourceAssociations(
    args: ListSourceAssociationsCommandInput,
    cb: (err: any, data?: ListSourceAssociationsCommandOutput) => void
  ): void;
  listSourceAssociations(
    args: ListSourceAssociationsCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ListSourceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PromotePermissionCreatedFromPolicyCommand}
   */
  promotePermissionCreatedFromPolicy(
    args: PromotePermissionCreatedFromPolicyCommandInput,
    options?: RAMRequestOptions
  ): Promise<PromotePermissionCreatedFromPolicyCommandOutput>;
  promotePermissionCreatedFromPolicy(
    args: PromotePermissionCreatedFromPolicyCommandInput,
    cb: (err: any, data?: PromotePermissionCreatedFromPolicyCommandOutput) => void
  ): void;
  promotePermissionCreatedFromPolicy(
    args: PromotePermissionCreatedFromPolicyCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: PromotePermissionCreatedFromPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PromoteResourceShareCreatedFromPolicyCommand}
   */
  promoteResourceShareCreatedFromPolicy(
    args: PromoteResourceShareCreatedFromPolicyCommandInput,
    options?: RAMRequestOptions
  ): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput>;
  promoteResourceShareCreatedFromPolicy(
    args: PromoteResourceShareCreatedFromPolicyCommandInput,
    cb: (err: any, data?: PromoteResourceShareCreatedFromPolicyCommandOutput) => void
  ): void;
  promoteResourceShareCreatedFromPolicy(
    args: PromoteResourceShareCreatedFromPolicyCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: PromoteResourceShareCreatedFromPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectResourceShareInvitationCommand}
   */
  rejectResourceShareInvitation(
    args: RejectResourceShareInvitationCommandInput,
    options?: RAMRequestOptions
  ): Promise<RejectResourceShareInvitationCommandOutput>;
  rejectResourceShareInvitation(
    args: RejectResourceShareInvitationCommandInput,
    cb: (err: any, data?: RejectResourceShareInvitationCommandOutput) => void
  ): void;
  rejectResourceShareInvitation(
    args: RejectResourceShareInvitationCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: RejectResourceShareInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplacePermissionAssociationsCommand}
   */
  replacePermissionAssociations(
    args: ReplacePermissionAssociationsCommandInput,
    options?: RAMRequestOptions
  ): Promise<ReplacePermissionAssociationsCommandOutput>;
  replacePermissionAssociations(
    args: ReplacePermissionAssociationsCommandInput,
    cb: (err: any, data?: ReplacePermissionAssociationsCommandOutput) => void
  ): void;
  replacePermissionAssociations(
    args: ReplacePermissionAssociationsCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: ReplacePermissionAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDefaultPermissionVersionCommand}
   */
  setDefaultPermissionVersion(
    args: SetDefaultPermissionVersionCommandInput,
    options?: RAMRequestOptions
  ): Promise<SetDefaultPermissionVersionCommandOutput>;
  setDefaultPermissionVersion(
    args: SetDefaultPermissionVersionCommandInput,
    cb: (err: any, data?: SetDefaultPermissionVersionCommandOutput) => void
  ): void;
  setDefaultPermissionVersion(
    args: SetDefaultPermissionVersionCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: SetDefaultPermissionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: RAMRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: RAMRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceShareCommand}
   */
  updateResourceShare(
    args: UpdateResourceShareCommandInput,
    options?: RAMRequestOptions
  ): Promise<UpdateResourceShareCommandOutput>;
  updateResourceShare(
    args: UpdateResourceShareCommandInput,
    cb: (err: any, data?: UpdateResourceShareCommandOutput) => void
  ): void;
  updateResourceShare(
    args: UpdateResourceShareCommandInput,
    options: RAMRequestOptions,
    cb: (err: any, data?: UpdateResourceShareCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetResourcePoliciesCommandOutput}.
   */
  paginateGetResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetResourcePoliciesCommandOutput>;

  /**
   * @see {@link GetResourceShareAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetResourceShareAssociationsCommandOutput}.
   */
  paginateGetResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetResourceShareAssociationsCommandOutput>;

  /**
   * @see {@link GetResourceShareInvitationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetResourceShareInvitationsCommandOutput}.
   */
  paginateGetResourceShareInvitations(
    args?: GetResourceShareInvitationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetResourceShareInvitationsCommandOutput>;

  /**
   * @see {@link GetResourceSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetResourceSharesCommandOutput}.
   */
  paginateGetResourceShares(
    args: GetResourceSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetResourceSharesCommandOutput>;

  /**
   * @see {@link ListPendingInvitationResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPendingInvitationResourcesCommandOutput}.
   */
  paginateListPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPendingInvitationResourcesCommandOutput>;

  /**
   * @see {@link ListPermissionAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPermissionAssociationsCommandOutput}.
   */
  paginateListPermissionAssociations(
    args?: ListPermissionAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPermissionAssociationsCommandOutput>;

  /**
   * @see {@link ListPermissionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPermissionsCommandOutput}.
   */
  paginateListPermissions(
    args?: ListPermissionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPermissionsCommandOutput>;

  /**
   * @see {@link ListPermissionVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPermissionVersionsCommandOutput}.
   */
  paginateListPermissionVersions(
    args: ListPermissionVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPermissionVersionsCommandOutput>;

  /**
   * @see {@link ListPrincipalsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPrincipalsCommandOutput}.
   */
  paginateListPrincipals(
    args: ListPrincipalsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPrincipalsCommandOutput>;

  /**
   * @see {@link ListReplacePermissionAssociationsWorkCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReplacePermissionAssociationsWorkCommandOutput}.
   */
  paginateListReplacePermissionAssociationsWork(
    args?: ListReplacePermissionAssociationsWorkCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReplacePermissionAssociationsWorkCommandOutput>;

  /**
   * @see {@link ListResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourcesCommandOutput}.
   */
  paginateListResources(
    args: ListResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourcesCommandOutput>;

  /**
   * @see {@link ListResourceSharePermissionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceSharePermissionsCommandOutput}.
   */
  paginateListResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceSharePermissionsCommandOutput>;

  /**
   * @see {@link ListResourceTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceTypesCommandOutput}.
   */
  paginateListResourceTypes(
    args?: ListResourceTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceTypesCommandOutput>;

  /**
   * @see {@link ListSourceAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSourceAssociationsCommandOutput}.
   */
  paginateListSourceAssociations(
    args?: ListSourceAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSourceAssociationsCommandOutput>;
}

/**
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
 * @public
 */
export class RAM extends RAMClient implements RAM {}
createAggregatedClient(commands, RAM, { paginators });
