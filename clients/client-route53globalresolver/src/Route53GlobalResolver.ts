// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateHostedZoneCommand,
  AssociateHostedZoneCommandInput,
  AssociateHostedZoneCommandOutput,
} from "./commands/AssociateHostedZoneCommand";
import {
  BatchCreateFirewallRuleCommand,
  BatchCreateFirewallRuleCommandInput,
  BatchCreateFirewallRuleCommandOutput,
} from "./commands/BatchCreateFirewallRuleCommand";
import {
  BatchDeleteFirewallRuleCommand,
  BatchDeleteFirewallRuleCommandInput,
  BatchDeleteFirewallRuleCommandOutput,
} from "./commands/BatchDeleteFirewallRuleCommand";
import {
  BatchUpdateFirewallRuleCommand,
  BatchUpdateFirewallRuleCommandInput,
  BatchUpdateFirewallRuleCommandOutput,
} from "./commands/BatchUpdateFirewallRuleCommand";
import {
  CreateAccessSourceCommand,
  CreateAccessSourceCommandInput,
  CreateAccessSourceCommandOutput,
} from "./commands/CreateAccessSourceCommand";
import {
  CreateAccessTokenCommand,
  CreateAccessTokenCommandInput,
  CreateAccessTokenCommandOutput,
} from "./commands/CreateAccessTokenCommand";
import {
  CreateDNSViewCommand,
  CreateDNSViewCommandInput,
  CreateDNSViewCommandOutput,
} from "./commands/CreateDNSViewCommand";
import {
  CreateFirewallDomainListCommand,
  CreateFirewallDomainListCommandInput,
  CreateFirewallDomainListCommandOutput,
} from "./commands/CreateFirewallDomainListCommand";
import {
  CreateFirewallRuleCommand,
  CreateFirewallRuleCommandInput,
  CreateFirewallRuleCommandOutput,
} from "./commands/CreateFirewallRuleCommand";
import {
  CreateGlobalResolverCommand,
  CreateGlobalResolverCommandInput,
  CreateGlobalResolverCommandOutput,
} from "./commands/CreateGlobalResolverCommand";
import {
  DeleteAccessSourceCommand,
  DeleteAccessSourceCommandInput,
  DeleteAccessSourceCommandOutput,
} from "./commands/DeleteAccessSourceCommand";
import {
  DeleteAccessTokenCommand,
  DeleteAccessTokenCommandInput,
  DeleteAccessTokenCommandOutput,
} from "./commands/DeleteAccessTokenCommand";
import {
  DeleteDNSViewCommand,
  DeleteDNSViewCommandInput,
  DeleteDNSViewCommandOutput,
} from "./commands/DeleteDNSViewCommand";
import {
  DeleteFirewallDomainListCommand,
  DeleteFirewallDomainListCommandInput,
  DeleteFirewallDomainListCommandOutput,
} from "./commands/DeleteFirewallDomainListCommand";
import {
  DeleteFirewallRuleCommand,
  DeleteFirewallRuleCommandInput,
  DeleteFirewallRuleCommandOutput,
} from "./commands/DeleteFirewallRuleCommand";
import {
  DeleteGlobalResolverCommand,
  DeleteGlobalResolverCommandInput,
  DeleteGlobalResolverCommandOutput,
} from "./commands/DeleteGlobalResolverCommand";
import {
  DisableDNSViewCommand,
  DisableDNSViewCommandInput,
  DisableDNSViewCommandOutput,
} from "./commands/DisableDNSViewCommand";
import {
  DisassociateHostedZoneCommand,
  DisassociateHostedZoneCommandInput,
  DisassociateHostedZoneCommandOutput,
} from "./commands/DisassociateHostedZoneCommand";
import {
  EnableDNSViewCommand,
  EnableDNSViewCommandInput,
  EnableDNSViewCommandOutput,
} from "./commands/EnableDNSViewCommand";
import {
  GetAccessSourceCommand,
  GetAccessSourceCommandInput,
  GetAccessSourceCommandOutput,
} from "./commands/GetAccessSourceCommand";
import {
  GetAccessTokenCommand,
  GetAccessTokenCommandInput,
  GetAccessTokenCommandOutput,
} from "./commands/GetAccessTokenCommand";
import { GetDNSViewCommand, GetDNSViewCommandInput, GetDNSViewCommandOutput } from "./commands/GetDNSViewCommand";
import {
  GetFirewallDomainListCommand,
  GetFirewallDomainListCommandInput,
  GetFirewallDomainListCommandOutput,
} from "./commands/GetFirewallDomainListCommand";
import {
  GetFirewallRuleCommand,
  GetFirewallRuleCommandInput,
  GetFirewallRuleCommandOutput,
} from "./commands/GetFirewallRuleCommand";
import {
  GetGlobalResolverCommand,
  GetGlobalResolverCommandInput,
  GetGlobalResolverCommandOutput,
} from "./commands/GetGlobalResolverCommand";
import {
  GetHostedZoneAssociationCommand,
  GetHostedZoneAssociationCommandInput,
  GetHostedZoneAssociationCommandOutput,
} from "./commands/GetHostedZoneAssociationCommand";
import {
  GetManagedFirewallDomainListCommand,
  GetManagedFirewallDomainListCommandInput,
  GetManagedFirewallDomainListCommandOutput,
} from "./commands/GetManagedFirewallDomainListCommand";
import {
  ImportFirewallDomainsCommand,
  ImportFirewallDomainsCommandInput,
  ImportFirewallDomainsCommandOutput,
} from "./commands/ImportFirewallDomainsCommand";
import {
  ListAccessSourcesCommand,
  ListAccessSourcesCommandInput,
  ListAccessSourcesCommandOutput,
} from "./commands/ListAccessSourcesCommand";
import {
  ListAccessTokensCommand,
  ListAccessTokensCommandInput,
  ListAccessTokensCommandOutput,
} from "./commands/ListAccessTokensCommand";
import {
  ListDNSViewsCommand,
  ListDNSViewsCommandInput,
  ListDNSViewsCommandOutput,
} from "./commands/ListDNSViewsCommand";
import {
  ListFirewallDomainListsCommand,
  ListFirewallDomainListsCommandInput,
  ListFirewallDomainListsCommandOutput,
} from "./commands/ListFirewallDomainListsCommand";
import {
  ListFirewallDomainsCommand,
  ListFirewallDomainsCommandInput,
  ListFirewallDomainsCommandOutput,
} from "./commands/ListFirewallDomainsCommand";
import {
  ListFirewallRulesCommand,
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput,
} from "./commands/ListFirewallRulesCommand";
import {
  ListGlobalResolversCommand,
  ListGlobalResolversCommandInput,
  ListGlobalResolversCommandOutput,
} from "./commands/ListGlobalResolversCommand";
import {
  ListHostedZoneAssociationsCommand,
  ListHostedZoneAssociationsCommandInput,
  ListHostedZoneAssociationsCommandOutput,
} from "./commands/ListHostedZoneAssociationsCommand";
import {
  ListManagedFirewallDomainListsCommand,
  ListManagedFirewallDomainListsCommandInput,
  ListManagedFirewallDomainListsCommandOutput,
} from "./commands/ListManagedFirewallDomainListsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccessSourceCommand,
  UpdateAccessSourceCommandInput,
  UpdateAccessSourceCommandOutput,
} from "./commands/UpdateAccessSourceCommand";
import {
  UpdateAccessTokenCommand,
  UpdateAccessTokenCommandInput,
  UpdateAccessTokenCommandOutput,
} from "./commands/UpdateAccessTokenCommand";
import {
  UpdateDNSViewCommand,
  UpdateDNSViewCommandInput,
  UpdateDNSViewCommandOutput,
} from "./commands/UpdateDNSViewCommand";
import {
  UpdateFirewallDomainsCommand,
  UpdateFirewallDomainsCommandInput,
  UpdateFirewallDomainsCommandOutput,
} from "./commands/UpdateFirewallDomainsCommand";
import {
  UpdateFirewallRuleCommand,
  UpdateFirewallRuleCommandInput,
  UpdateFirewallRuleCommandOutput,
} from "./commands/UpdateFirewallRuleCommand";
import {
  UpdateGlobalResolverCommand,
  UpdateGlobalResolverCommandInput,
  UpdateGlobalResolverCommandOutput,
} from "./commands/UpdateGlobalResolverCommand";
import {
  UpdateHostedZoneAssociationCommand,
  UpdateHostedZoneAssociationCommandInput,
  UpdateHostedZoneAssociationCommandOutput,
} from "./commands/UpdateHostedZoneAssociationCommand";
import { Route53GlobalResolverClient, Route53GlobalResolverClientConfig } from "./Route53GlobalResolverClient";

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
  createDNSView(args: CreateDNSViewCommandInput, options?: __HttpHandlerOptions): Promise<CreateDNSViewCommandOutput>;
  createDNSView(args: CreateDNSViewCommandInput, cb: (err: any, data?: CreateDNSViewCommandOutput) => void): void;
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
  deleteDNSView(args: DeleteDNSViewCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDNSViewCommandOutput>;
  deleteDNSView(args: DeleteDNSViewCommandInput, cb: (err: any, data?: DeleteDNSViewCommandOutput) => void): void;
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
  disableDNSView(args: DisableDNSViewCommandInput, cb: (err: any, data?: DisableDNSViewCommandOutput) => void): void;
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
  enableDNSView(args: EnableDNSViewCommandInput, options?: __HttpHandlerOptions): Promise<EnableDNSViewCommandOutput>;
  enableDNSView(args: EnableDNSViewCommandInput, cb: (err: any, data?: EnableDNSViewCommandOutput) => void): void;
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
  getAccessSource(args: GetAccessSourceCommandInput, cb: (err: any, data?: GetAccessSourceCommandOutput) => void): void;
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
  getAccessToken(args: GetAccessTokenCommandInput, cb: (err: any, data?: GetAccessTokenCommandOutput) => void): void;
  getAccessToken(
    args: GetAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDNSViewCommand}
   */
  getDNSView(args: GetDNSViewCommandInput, options?: __HttpHandlerOptions): Promise<GetDNSViewCommandOutput>;
  getDNSView(args: GetDNSViewCommandInput, cb: (err: any, data?: GetDNSViewCommandOutput) => void): void;
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
  getFirewallRule(args: GetFirewallRuleCommandInput, cb: (err: any, data?: GetFirewallRuleCommandOutput) => void): void;
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
  listDNSViews(args: ListDNSViewsCommandInput, options?: __HttpHandlerOptions): Promise<ListDNSViewsCommandOutput>;
  listDNSViews(args: ListDNSViewsCommandInput, cb: (err: any, data?: ListDNSViewsCommandOutput) => void): void;
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
  updateDNSView(args: UpdateDNSViewCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDNSViewCommandOutput>;
  updateDNSView(args: UpdateDNSViewCommandInput, cb: (err: any, data?: UpdateDNSViewCommandOutput) => void): void;
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
}

/**
 * <p> Amazon Route 53 Global Resolver is a global, internet-accessible DNS resolver that enables customers to resolve and forward traffic for both public and private domains while ensuring security and authenticity of queries over the internet. Route 53 Global Resolver supports DNS-over-port 53 (Do53), DNS-over-TLS (DoT), and DNS-over-HTTPS (DoH) protocols through global anycast IP addresses. </p>
 * @public
 */
export class Route53GlobalResolver extends Route53GlobalResolverClient implements Route53GlobalResolver {}
createAggregatedClient(commands, Route53GlobalResolver);
