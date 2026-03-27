// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateHostedZoneCommandInput,
  type AssociateHostedZoneCommandOutput,
  AssociateHostedZoneCommand,
} from "./commands/AssociateHostedZoneCommand";
import {
  type BatchCreateFirewallRuleCommandInput,
  type BatchCreateFirewallRuleCommandOutput,
  BatchCreateFirewallRuleCommand,
} from "./commands/BatchCreateFirewallRuleCommand";
import {
  type BatchDeleteFirewallRuleCommandInput,
  type BatchDeleteFirewallRuleCommandOutput,
  BatchDeleteFirewallRuleCommand,
} from "./commands/BatchDeleteFirewallRuleCommand";
import {
  type BatchUpdateFirewallRuleCommandInput,
  type BatchUpdateFirewallRuleCommandOutput,
  BatchUpdateFirewallRuleCommand,
} from "./commands/BatchUpdateFirewallRuleCommand";
import {
  type CreateAccessSourceCommandInput,
  type CreateAccessSourceCommandOutput,
  CreateAccessSourceCommand,
} from "./commands/CreateAccessSourceCommand";
import {
  type CreateAccessTokenCommandInput,
  type CreateAccessTokenCommandOutput,
  CreateAccessTokenCommand,
} from "./commands/CreateAccessTokenCommand";
import {
  type CreateDNSViewCommandInput,
  type CreateDNSViewCommandOutput,
  CreateDNSViewCommand,
} from "./commands/CreateDNSViewCommand";
import {
  type CreateFirewallDomainListCommandInput,
  type CreateFirewallDomainListCommandOutput,
  CreateFirewallDomainListCommand,
} from "./commands/CreateFirewallDomainListCommand";
import {
  type CreateFirewallRuleCommandInput,
  type CreateFirewallRuleCommandOutput,
  CreateFirewallRuleCommand,
} from "./commands/CreateFirewallRuleCommand";
import {
  type CreateGlobalResolverCommandInput,
  type CreateGlobalResolverCommandOutput,
  CreateGlobalResolverCommand,
} from "./commands/CreateGlobalResolverCommand";
import {
  type DeleteAccessSourceCommandInput,
  type DeleteAccessSourceCommandOutput,
  DeleteAccessSourceCommand,
} from "./commands/DeleteAccessSourceCommand";
import {
  type DeleteAccessTokenCommandInput,
  type DeleteAccessTokenCommandOutput,
  DeleteAccessTokenCommand,
} from "./commands/DeleteAccessTokenCommand";
import {
  type DeleteDNSViewCommandInput,
  type DeleteDNSViewCommandOutput,
  DeleteDNSViewCommand,
} from "./commands/DeleteDNSViewCommand";
import {
  type DeleteFirewallDomainListCommandInput,
  type DeleteFirewallDomainListCommandOutput,
  DeleteFirewallDomainListCommand,
} from "./commands/DeleteFirewallDomainListCommand";
import {
  type DeleteFirewallRuleCommandInput,
  type DeleteFirewallRuleCommandOutput,
  DeleteFirewallRuleCommand,
} from "./commands/DeleteFirewallRuleCommand";
import {
  type DeleteGlobalResolverCommandInput,
  type DeleteGlobalResolverCommandOutput,
  DeleteGlobalResolverCommand,
} from "./commands/DeleteGlobalResolverCommand";
import {
  type DisableDNSViewCommandInput,
  type DisableDNSViewCommandOutput,
  DisableDNSViewCommand,
} from "./commands/DisableDNSViewCommand";
import {
  type DisassociateHostedZoneCommandInput,
  type DisassociateHostedZoneCommandOutput,
  DisassociateHostedZoneCommand,
} from "./commands/DisassociateHostedZoneCommand";
import {
  type EnableDNSViewCommandInput,
  type EnableDNSViewCommandOutput,
  EnableDNSViewCommand,
} from "./commands/EnableDNSViewCommand";
import {
  type GetAccessSourceCommandInput,
  type GetAccessSourceCommandOutput,
  GetAccessSourceCommand,
} from "./commands/GetAccessSourceCommand";
import {
  type GetAccessTokenCommandInput,
  type GetAccessTokenCommandOutput,
  GetAccessTokenCommand,
} from "./commands/GetAccessTokenCommand";
import {
  type GetDNSViewCommandInput,
  type GetDNSViewCommandOutput,
  GetDNSViewCommand,
} from "./commands/GetDNSViewCommand";
import {
  type GetFirewallDomainListCommandInput,
  type GetFirewallDomainListCommandOutput,
  GetFirewallDomainListCommand,
} from "./commands/GetFirewallDomainListCommand";
import {
  type GetFirewallRuleCommandInput,
  type GetFirewallRuleCommandOutput,
  GetFirewallRuleCommand,
} from "./commands/GetFirewallRuleCommand";
import {
  type GetGlobalResolverCommandInput,
  type GetGlobalResolverCommandOutput,
  GetGlobalResolverCommand,
} from "./commands/GetGlobalResolverCommand";
import {
  type GetHostedZoneAssociationCommandInput,
  type GetHostedZoneAssociationCommandOutput,
  GetHostedZoneAssociationCommand,
} from "./commands/GetHostedZoneAssociationCommand";
import {
  type GetManagedFirewallDomainListCommandInput,
  type GetManagedFirewallDomainListCommandOutput,
  GetManagedFirewallDomainListCommand,
} from "./commands/GetManagedFirewallDomainListCommand";
import {
  type ImportFirewallDomainsCommandInput,
  type ImportFirewallDomainsCommandOutput,
  ImportFirewallDomainsCommand,
} from "./commands/ImportFirewallDomainsCommand";
import {
  type ListAccessSourcesCommandInput,
  type ListAccessSourcesCommandOutput,
  ListAccessSourcesCommand,
} from "./commands/ListAccessSourcesCommand";
import {
  type ListAccessTokensCommandInput,
  type ListAccessTokensCommandOutput,
  ListAccessTokensCommand,
} from "./commands/ListAccessTokensCommand";
import {
  type ListDNSViewsCommandInput,
  type ListDNSViewsCommandOutput,
  ListDNSViewsCommand,
} from "./commands/ListDNSViewsCommand";
import {
  type ListFirewallDomainListsCommandInput,
  type ListFirewallDomainListsCommandOutput,
  ListFirewallDomainListsCommand,
} from "./commands/ListFirewallDomainListsCommand";
import {
  type ListFirewallDomainsCommandInput,
  type ListFirewallDomainsCommandOutput,
  ListFirewallDomainsCommand,
} from "./commands/ListFirewallDomainsCommand";
import {
  type ListFirewallRulesCommandInput,
  type ListFirewallRulesCommandOutput,
  ListFirewallRulesCommand,
} from "./commands/ListFirewallRulesCommand";
import {
  type ListGlobalResolversCommandInput,
  type ListGlobalResolversCommandOutput,
  ListGlobalResolversCommand,
} from "./commands/ListGlobalResolversCommand";
import {
  type ListHostedZoneAssociationsCommandInput,
  type ListHostedZoneAssociationsCommandOutput,
  ListHostedZoneAssociationsCommand,
} from "./commands/ListHostedZoneAssociationsCommand";
import {
  type ListManagedFirewallDomainListsCommandInput,
  type ListManagedFirewallDomainListsCommandOutput,
  ListManagedFirewallDomainListsCommand,
} from "./commands/ListManagedFirewallDomainListsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
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
  type UpdateAccessSourceCommandInput,
  type UpdateAccessSourceCommandOutput,
  UpdateAccessSourceCommand,
} from "./commands/UpdateAccessSourceCommand";
import {
  type UpdateAccessTokenCommandInput,
  type UpdateAccessTokenCommandOutput,
  UpdateAccessTokenCommand,
} from "./commands/UpdateAccessTokenCommand";
import {
  type UpdateDNSViewCommandInput,
  type UpdateDNSViewCommandOutput,
  UpdateDNSViewCommand,
} from "./commands/UpdateDNSViewCommand";
import {
  type UpdateFirewallDomainsCommandInput,
  type UpdateFirewallDomainsCommandOutput,
  UpdateFirewallDomainsCommand,
} from "./commands/UpdateFirewallDomainsCommand";
import {
  type UpdateFirewallRuleCommandInput,
  type UpdateFirewallRuleCommandOutput,
  UpdateFirewallRuleCommand,
} from "./commands/UpdateFirewallRuleCommand";
import {
  type UpdateGlobalResolverCommandInput,
  type UpdateGlobalResolverCommandOutput,
  UpdateGlobalResolverCommand,
} from "./commands/UpdateGlobalResolverCommand";
import {
  type UpdateHostedZoneAssociationCommandInput,
  type UpdateHostedZoneAssociationCommandOutput,
  UpdateHostedZoneAssociationCommand,
} from "./commands/UpdateHostedZoneAssociationCommand";
import { paginateListAccessSources } from "./pagination/ListAccessSourcesPaginator";
import { paginateListAccessTokens } from "./pagination/ListAccessTokensPaginator";
import { paginateListDNSViews } from "./pagination/ListDNSViewsPaginator";
import { paginateListFirewallDomainLists } from "./pagination/ListFirewallDomainListsPaginator";
import { paginateListFirewallDomains } from "./pagination/ListFirewallDomainsPaginator";
import { paginateListFirewallRules } from "./pagination/ListFirewallRulesPaginator";
import { paginateListGlobalResolvers } from "./pagination/ListGlobalResolversPaginator";
import { paginateListHostedZoneAssociations } from "./pagination/ListHostedZoneAssociationsPaginator";
import { paginateListManagedFirewallDomainLists } from "./pagination/ListManagedFirewallDomainListsPaginator";
import { Route53GlobalResolverClient } from "./Route53GlobalResolverClient";

const commands = {
  AssociateHostedZoneCommand,
  BatchCreateFirewallRuleCommand,
  BatchDeleteFirewallRuleCommand,
  BatchUpdateFirewallRuleCommand,
  CreateAccessSourceCommand,
  CreateAccessTokenCommand,
  CreateDNSViewCommand,
  CreateFirewallDomainListCommand,
  CreateFirewallRuleCommand,
  CreateGlobalResolverCommand,
  DeleteAccessSourceCommand,
  DeleteAccessTokenCommand,
  DeleteDNSViewCommand,
  DeleteFirewallDomainListCommand,
  DeleteFirewallRuleCommand,
  DeleteGlobalResolverCommand,
  DisableDNSViewCommand,
  DisassociateHostedZoneCommand,
  EnableDNSViewCommand,
  GetAccessSourceCommand,
  GetAccessTokenCommand,
  GetDNSViewCommand,
  GetFirewallDomainListCommand,
  GetFirewallRuleCommand,
  GetGlobalResolverCommand,
  GetHostedZoneAssociationCommand,
  GetManagedFirewallDomainListCommand,
  ImportFirewallDomainsCommand,
  ListAccessSourcesCommand,
  ListAccessTokensCommand,
  ListDNSViewsCommand,
  ListFirewallDomainListsCommand,
  ListFirewallDomainsCommand,
  ListFirewallRulesCommand,
  ListGlobalResolversCommand,
  ListHostedZoneAssociationsCommand,
  ListManagedFirewallDomainListsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessSourceCommand,
  UpdateAccessTokenCommand,
  UpdateDNSViewCommand,
  UpdateFirewallDomainsCommand,
  UpdateFirewallRuleCommand,
  UpdateGlobalResolverCommand,
  UpdateHostedZoneAssociationCommand,
};
const paginators = {
  paginateListAccessSources,
  paginateListAccessTokens,
  paginateListDNSViews,
  paginateListFirewallDomainLists,
  paginateListFirewallDomains,
  paginateListFirewallRules,
  paginateListGlobalResolvers,
  paginateListHostedZoneAssociations,
  paginateListManagedFirewallDomainLists,
};

export interface Route53GlobalResolver {
  /**
   * @see {@link AssociateHostedZoneCommand}
   */
  associateHostedZone(
    args: AssociateHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateHostedZoneCommandOutput>;
  associateHostedZone(
    args: AssociateHostedZoneCommandInput,
    cb: (err: any, data?: AssociateHostedZoneCommandOutput) => void
  ): void;
  associateHostedZone(
    args: AssociateHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateFirewallRuleCommand}
   */
  batchCreateFirewallRule(
    args: BatchCreateFirewallRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateFirewallRuleCommandOutput>;
  batchCreateFirewallRule(
    args: BatchCreateFirewallRuleCommandInput,
    cb: (err: any, data?: BatchCreateFirewallRuleCommandOutput) => void
  ): void;
  batchCreateFirewallRule(
    args: BatchCreateFirewallRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteFirewallRuleCommand}
   */
  batchDeleteFirewallRule(
    args: BatchDeleteFirewallRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteFirewallRuleCommandOutput>;
  batchDeleteFirewallRule(
    args: BatchDeleteFirewallRuleCommandInput,
    cb: (err: any, data?: BatchDeleteFirewallRuleCommandOutput) => void
  ): void;
  batchDeleteFirewallRule(
    args: BatchDeleteFirewallRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateFirewallRuleCommand}
   */
  batchUpdateFirewallRule(
    args: BatchUpdateFirewallRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateFirewallRuleCommandOutput>;
  batchUpdateFirewallRule(
    args: BatchUpdateFirewallRuleCommandInput,
    cb: (err: any, data?: BatchUpdateFirewallRuleCommandOutput) => void
  ): void;
  batchUpdateFirewallRule(
    args: BatchUpdateFirewallRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessSourceCommand}
   */
  createAccessSource(
    args: CreateAccessSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessSourceCommandOutput>;
  createAccessSource(
    args: CreateAccessSourceCommandInput,
    cb: (err: any, data?: CreateAccessSourceCommandOutput) => void
  ): void;
  createAccessSource(
    args: CreateAccessSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessTokenCommand}
   */
  createAccessToken(
    args: CreateAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessTokenCommandOutput>;
  createAccessToken(
    args: CreateAccessTokenCommandInput,
    cb: (err: any, data?: CreateAccessTokenCommandOutput) => void
  ): void;
  createAccessToken(
    args: CreateAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDNSViewCommand}
   */
  createDNSView(
    args: CreateDNSViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDNSViewCommandOutput>;
  createDNSView(
    args: CreateDNSViewCommandInput,
    cb: (err: any, data?: CreateDNSViewCommandOutput) => void
  ): void;
  createDNSView(
    args: CreateDNSViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDNSViewCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFirewallDomainListCommand}
   */
  createFirewallDomainList(
    args: CreateFirewallDomainListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallDomainListCommandOutput>;
  createFirewallDomainList(
    args: CreateFirewallDomainListCommandInput,
    cb: (err: any, data?: CreateFirewallDomainListCommandOutput) => void
  ): void;
  createFirewallDomainList(
    args: CreateFirewallDomainListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFirewallDomainListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFirewallRuleCommand}
   */
  createFirewallRule(
    args: CreateFirewallRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallRuleCommandOutput>;
  createFirewallRule(
    args: CreateFirewallRuleCommandInput,
    cb: (err: any, data?: CreateFirewallRuleCommandOutput) => void
  ): void;
  createFirewallRule(
    args: CreateFirewallRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlobalResolverCommand}
   */
  createGlobalResolver(
    args: CreateGlobalResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlobalResolverCommandOutput>;
  createGlobalResolver(
    args: CreateGlobalResolverCommandInput,
    cb: (err: any, data?: CreateGlobalResolverCommandOutput) => void
  ): void;
  createGlobalResolver(
    args: CreateGlobalResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlobalResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessSourceCommand}
   */
  deleteAccessSource(
    args: DeleteAccessSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessSourceCommandOutput>;
  deleteAccessSource(
    args: DeleteAccessSourceCommandInput,
    cb: (err: any, data?: DeleteAccessSourceCommandOutput) => void
  ): void;
  deleteAccessSource(
    args: DeleteAccessSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessTokenCommand}
   */
  deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessTokenCommandOutput>;
  deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    cb: (err: any, data?: DeleteAccessTokenCommandOutput) => void
  ): void;
  deleteAccessToken(
    args: DeleteAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDNSViewCommand}
   */
  deleteDNSView(
    args: DeleteDNSViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDNSViewCommandOutput>;
  deleteDNSView(
    args: DeleteDNSViewCommandInput,
    cb: (err: any, data?: DeleteDNSViewCommandOutput) => void
  ): void;
  deleteDNSView(
    args: DeleteDNSViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDNSViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallDomainListCommand}
   */
  deleteFirewallDomainList(
    args: DeleteFirewallDomainListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallDomainListCommandOutput>;
  deleteFirewallDomainList(
    args: DeleteFirewallDomainListCommandInput,
    cb: (err: any, data?: DeleteFirewallDomainListCommandOutput) => void
  ): void;
  deleteFirewallDomainList(
    args: DeleteFirewallDomainListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallDomainListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallRuleCommand}
   */
  deleteFirewallRule(
    args: DeleteFirewallRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallRuleCommandOutput>;
  deleteFirewallRule(
    args: DeleteFirewallRuleCommandInput,
    cb: (err: any, data?: DeleteFirewallRuleCommandOutput) => void
  ): void;
  deleteFirewallRule(
    args: DeleteFirewallRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlobalResolverCommand}
   */
  deleteGlobalResolver(
    args: DeleteGlobalResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlobalResolverCommandOutput>;
  deleteGlobalResolver(
    args: DeleteGlobalResolverCommandInput,
    cb: (err: any, data?: DeleteGlobalResolverCommandOutput) => void
  ): void;
  deleteGlobalResolver(
    args: DeleteGlobalResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlobalResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableDNSViewCommand}
   */
  disableDNSView(
    args: DisableDNSViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableDNSViewCommandOutput>;
  disableDNSView(
    args: DisableDNSViewCommandInput,
    cb: (err: any, data?: DisableDNSViewCommandOutput) => void
  ): void;
  disableDNSView(
    args: DisableDNSViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableDNSViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateHostedZoneCommand}
   */
  disassociateHostedZone(
    args: DisassociateHostedZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateHostedZoneCommandOutput>;
  disassociateHostedZone(
    args: DisassociateHostedZoneCommandInput,
    cb: (err: any, data?: DisassociateHostedZoneCommandOutput) => void
  ): void;
  disassociateHostedZone(
    args: DisassociateHostedZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateHostedZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableDNSViewCommand}
   */
  enableDNSView(
    args: EnableDNSViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableDNSViewCommandOutput>;
  enableDNSView(
    args: EnableDNSViewCommandInput,
    cb: (err: any, data?: EnableDNSViewCommandOutput) => void
  ): void;
  enableDNSView(
    args: EnableDNSViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableDNSViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessSourceCommand}
   */
  getAccessSource(
    args: GetAccessSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessSourceCommandOutput>;
  getAccessSource(
    args: GetAccessSourceCommandInput,
    cb: (err: any, data?: GetAccessSourceCommandOutput) => void
  ): void;
  getAccessSource(
    args: GetAccessSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessTokenCommand}
   */
  getAccessToken(
    args: GetAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessTokenCommandOutput>;
  getAccessToken(
    args: GetAccessTokenCommandInput,
    cb: (err: any, data?: GetAccessTokenCommandOutput) => void
  ): void;
  getAccessToken(
    args: GetAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDNSViewCommand}
   */
  getDNSView(
    args: GetDNSViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDNSViewCommandOutput>;
  getDNSView(
    args: GetDNSViewCommandInput,
    cb: (err: any, data?: GetDNSViewCommandOutput) => void
  ): void;
  getDNSView(
    args: GetDNSViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDNSViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFirewallDomainListCommand}
   */
  getFirewallDomainList(
    args: GetFirewallDomainListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallDomainListCommandOutput>;
  getFirewallDomainList(
    args: GetFirewallDomainListCommandInput,
    cb: (err: any, data?: GetFirewallDomainListCommandOutput) => void
  ): void;
  getFirewallDomainList(
    args: GetFirewallDomainListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallDomainListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFirewallRuleCommand}
   */
  getFirewallRule(
    args: GetFirewallRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallRuleCommandOutput>;
  getFirewallRule(
    args: GetFirewallRuleCommandInput,
    cb: (err: any, data?: GetFirewallRuleCommandOutput) => void
  ): void;
  getFirewallRule(
    args: GetFirewallRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlobalResolverCommand}
   */
  getGlobalResolver(
    args: GetGlobalResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGlobalResolverCommandOutput>;
  getGlobalResolver(
    args: GetGlobalResolverCommandInput,
    cb: (err: any, data?: GetGlobalResolverCommandOutput) => void
  ): void;
  getGlobalResolver(
    args: GetGlobalResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlobalResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostedZoneAssociationCommand}
   */
  getHostedZoneAssociation(
    args: GetHostedZoneAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostedZoneAssociationCommandOutput>;
  getHostedZoneAssociation(
    args: GetHostedZoneAssociationCommandInput,
    cb: (err: any, data?: GetHostedZoneAssociationCommandOutput) => void
  ): void;
  getHostedZoneAssociation(
    args: GetHostedZoneAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostedZoneAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedFirewallDomainListCommand}
   */
  getManagedFirewallDomainList(
    args: GetManagedFirewallDomainListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedFirewallDomainListCommandOutput>;
  getManagedFirewallDomainList(
    args: GetManagedFirewallDomainListCommandInput,
    cb: (err: any, data?: GetManagedFirewallDomainListCommandOutput) => void
  ): void;
  getManagedFirewallDomainList(
    args: GetManagedFirewallDomainListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedFirewallDomainListCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportFirewallDomainsCommand}
   */
  importFirewallDomains(
    args: ImportFirewallDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportFirewallDomainsCommandOutput>;
  importFirewallDomains(
    args: ImportFirewallDomainsCommandInput,
    cb: (err: any, data?: ImportFirewallDomainsCommandOutput) => void
  ): void;
  importFirewallDomains(
    args: ImportFirewallDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportFirewallDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessSourcesCommand}
   */
  listAccessSources(): Promise<ListAccessSourcesCommandOutput>;
  listAccessSources(
    args: ListAccessSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessSourcesCommandOutput>;
  listAccessSources(
    args: ListAccessSourcesCommandInput,
    cb: (err: any, data?: ListAccessSourcesCommandOutput) => void
  ): void;
  listAccessSources(
    args: ListAccessSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessTokensCommand}
   */
  listAccessTokens(
    args: ListAccessTokensCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessTokensCommandOutput>;
  listAccessTokens(
    args: ListAccessTokensCommandInput,
    cb: (err: any, data?: ListAccessTokensCommandOutput) => void
  ): void;
  listAccessTokens(
    args: ListAccessTokensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessTokensCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDNSViewsCommand}
   */
  listDNSViews(
    args: ListDNSViewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDNSViewsCommandOutput>;
  listDNSViews(
    args: ListDNSViewsCommandInput,
    cb: (err: any, data?: ListDNSViewsCommandOutput) => void
  ): void;
  listDNSViews(
    args: ListDNSViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDNSViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallDomainListsCommand}
   */
  listFirewallDomainLists(): Promise<ListFirewallDomainListsCommandOutput>;
  listFirewallDomainLists(
    args: ListFirewallDomainListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallDomainListsCommandOutput>;
  listFirewallDomainLists(
    args: ListFirewallDomainListsCommandInput,
    cb: (err: any, data?: ListFirewallDomainListsCommandOutput) => void
  ): void;
  listFirewallDomainLists(
    args: ListFirewallDomainListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallDomainListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallDomainsCommand}
   */
  listFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallDomainsCommandOutput>;
  listFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    cb: (err: any, data?: ListFirewallDomainsCommandOutput) => void
  ): void;
  listFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallRulesCommand}
   */
  listFirewallRules(
    args: ListFirewallRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallRulesCommandOutput>;
  listFirewallRules(
    args: ListFirewallRulesCommandInput,
    cb: (err: any, data?: ListFirewallRulesCommandOutput) => void
  ): void;
  listFirewallRules(
    args: ListFirewallRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGlobalResolversCommand}
   */
  listGlobalResolvers(): Promise<ListGlobalResolversCommandOutput>;
  listGlobalResolvers(
    args: ListGlobalResolversCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGlobalResolversCommandOutput>;
  listGlobalResolvers(
    args: ListGlobalResolversCommandInput,
    cb: (err: any, data?: ListGlobalResolversCommandOutput) => void
  ): void;
  listGlobalResolvers(
    args: ListGlobalResolversCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGlobalResolversCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostedZoneAssociationsCommand}
   */
  listHostedZoneAssociations(
    args: ListHostedZoneAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostedZoneAssociationsCommandOutput>;
  listHostedZoneAssociations(
    args: ListHostedZoneAssociationsCommandInput,
    cb: (err: any, data?: ListHostedZoneAssociationsCommandOutput) => void
  ): void;
  listHostedZoneAssociations(
    args: ListHostedZoneAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostedZoneAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedFirewallDomainListsCommand}
   */
  listManagedFirewallDomainLists(
    args: ListManagedFirewallDomainListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedFirewallDomainListsCommandOutput>;
  listManagedFirewallDomainLists(
    args: ListManagedFirewallDomainListsCommandInput,
    cb: (err: any, data?: ListManagedFirewallDomainListsCommandOutput) => void
  ): void;
  listManagedFirewallDomainLists(
    args: ListManagedFirewallDomainListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedFirewallDomainListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessSourceCommand}
   */
  updateAccessSource(
    args: UpdateAccessSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessSourceCommandOutput>;
  updateAccessSource(
    args: UpdateAccessSourceCommandInput,
    cb: (err: any, data?: UpdateAccessSourceCommandOutput) => void
  ): void;
  updateAccessSource(
    args: UpdateAccessSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessTokenCommand}
   */
  updateAccessToken(
    args: UpdateAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessTokenCommandOutput>;
  updateAccessToken(
    args: UpdateAccessTokenCommandInput,
    cb: (err: any, data?: UpdateAccessTokenCommandOutput) => void
  ): void;
  updateAccessToken(
    args: UpdateAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDNSViewCommand}
   */
  updateDNSView(
    args: UpdateDNSViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDNSViewCommandOutput>;
  updateDNSView(
    args: UpdateDNSViewCommandInput,
    cb: (err: any, data?: UpdateDNSViewCommandOutput) => void
  ): void;
  updateDNSView(
    args: UpdateDNSViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDNSViewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallDomainsCommand}
   */
  updateFirewallDomains(
    args: UpdateFirewallDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallDomainsCommandOutput>;
  updateFirewallDomains(
    args: UpdateFirewallDomainsCommandInput,
    cb: (err: any, data?: UpdateFirewallDomainsCommandOutput) => void
  ): void;
  updateFirewallDomains(
    args: UpdateFirewallDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallRuleCommand}
   */
  updateFirewallRule(
    args: UpdateFirewallRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallRuleCommandOutput>;
  updateFirewallRule(
    args: UpdateFirewallRuleCommandInput,
    cb: (err: any, data?: UpdateFirewallRuleCommandOutput) => void
  ): void;
  updateFirewallRule(
    args: UpdateFirewallRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalResolverCommand}
   */
  updateGlobalResolver(
    args: UpdateGlobalResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalResolverCommandOutput>;
  updateGlobalResolver(
    args: UpdateGlobalResolverCommandInput,
    cb: (err: any, data?: UpdateGlobalResolverCommandOutput) => void
  ): void;
  updateGlobalResolver(
    args: UpdateGlobalResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHostedZoneAssociationCommand}
   */
  updateHostedZoneAssociation(
    args: UpdateHostedZoneAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHostedZoneAssociationCommandOutput>;
  updateHostedZoneAssociation(
    args: UpdateHostedZoneAssociationCommandInput,
    cb: (err: any, data?: UpdateHostedZoneAssociationCommandOutput) => void
  ): void;
  updateHostedZoneAssociation(
    args: UpdateHostedZoneAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHostedZoneAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessSourcesCommandOutput}.
   */
  paginateListAccessSources(
    args?: ListAccessSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessSourcesCommandOutput>;

  /**
   * @see {@link ListAccessTokensCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessTokensCommandOutput}.
   */
  paginateListAccessTokens(
    args: ListAccessTokensCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessTokensCommandOutput>;

  /**
   * @see {@link ListDNSViewsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDNSViewsCommandOutput}.
   */
  paginateListDNSViews(
    args: ListDNSViewsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDNSViewsCommandOutput>;

  /**
   * @see {@link ListFirewallDomainListsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFirewallDomainListsCommandOutput}.
   */
  paginateListFirewallDomainLists(
    args?: ListFirewallDomainListsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFirewallDomainListsCommandOutput>;

  /**
   * @see {@link ListFirewallDomainsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFirewallDomainsCommandOutput}.
   */
  paginateListFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFirewallDomainsCommandOutput>;

  /**
   * @see {@link ListFirewallRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFirewallRulesCommandOutput}.
   */
  paginateListFirewallRules(
    args: ListFirewallRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFirewallRulesCommandOutput>;

  /**
   * @see {@link ListGlobalResolversCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGlobalResolversCommandOutput}.
   */
  paginateListGlobalResolvers(
    args?: ListGlobalResolversCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGlobalResolversCommandOutput>;

  /**
   * @see {@link ListHostedZoneAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHostedZoneAssociationsCommandOutput}.
   */
  paginateListHostedZoneAssociations(
    args: ListHostedZoneAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHostedZoneAssociationsCommandOutput>;

  /**
   * @see {@link ListManagedFirewallDomainListsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedFirewallDomainListsCommandOutput}.
   */
  paginateListManagedFirewallDomainLists(
    args: ListManagedFirewallDomainListsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedFirewallDomainListsCommandOutput>;
}

/**
 * <p>Amazon Route 53 Global Resolver is a global, internet-accessible DNS resolver that enables customers to resolve and forward traffic for both public and private domains while ensuring security and authenticity of queries over the internet. Route 53 Global Resolver supports DNS-over-port 53 (Do53), DNS-over-TLS (DoT), and DNS-over-HTTPS (DoH) protocols through global anycast IP addresses.</p> <important> <p>Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify <code>--region us-east-2</code> on Amazon Web Services CLI commands.</p> </important>
 * @public
 */
export class Route53GlobalResolver extends Route53GlobalResolverClient implements Route53GlobalResolver {}
createAggregatedClient(commands, Route53GlobalResolver, { paginators });
