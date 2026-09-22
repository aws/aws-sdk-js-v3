// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateFirewallRuleGroupCommandInput,
  type AssociateFirewallRuleGroupCommandOutput,
  AssociateFirewallRuleGroupCommand,
} from "./commands/AssociateFirewallRuleGroupCommand";
import {
  type AssociateResolverEndpointIpAddressCommandInput,
  type AssociateResolverEndpointIpAddressCommandOutput,
  AssociateResolverEndpointIpAddressCommand,
} from "./commands/AssociateResolverEndpointIpAddressCommand";
import {
  type AssociateResolverQueryLogConfigCommandInput,
  type AssociateResolverQueryLogConfigCommandOutput,
  AssociateResolverQueryLogConfigCommand,
} from "./commands/AssociateResolverQueryLogConfigCommand";
import {
  type AssociateResolverRuleCommandInput,
  type AssociateResolverRuleCommandOutput,
  AssociateResolverRuleCommand,
} from "./commands/AssociateResolverRuleCommand";
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
  type CreateFirewallRuleGroupCommandInput,
  type CreateFirewallRuleGroupCommandOutput,
  CreateFirewallRuleGroupCommand,
} from "./commands/CreateFirewallRuleGroupCommand";
import {
  type CreateOutpostResolverCommandInput,
  type CreateOutpostResolverCommandOutput,
  CreateOutpostResolverCommand,
} from "./commands/CreateOutpostResolverCommand";
import {
  type CreateResolverEndpointCommandInput,
  type CreateResolverEndpointCommandOutput,
  CreateResolverEndpointCommand,
} from "./commands/CreateResolverEndpointCommand";
import {
  type CreateResolverQueryLogConfigCommandInput,
  type CreateResolverQueryLogConfigCommandOutput,
  CreateResolverQueryLogConfigCommand,
} from "./commands/CreateResolverQueryLogConfigCommand";
import {
  type CreateResolverRuleCommandInput,
  type CreateResolverRuleCommandOutput,
  CreateResolverRuleCommand,
} from "./commands/CreateResolverRuleCommand";
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
  type DeleteFirewallRuleGroupCommandInput,
  type DeleteFirewallRuleGroupCommandOutput,
  DeleteFirewallRuleGroupCommand,
} from "./commands/DeleteFirewallRuleGroupCommand";
import {
  type DeleteOutpostResolverCommandInput,
  type DeleteOutpostResolverCommandOutput,
  DeleteOutpostResolverCommand,
} from "./commands/DeleteOutpostResolverCommand";
import {
  type DeleteResolverEndpointCommandInput,
  type DeleteResolverEndpointCommandOutput,
  DeleteResolverEndpointCommand,
} from "./commands/DeleteResolverEndpointCommand";
import {
  type DeleteResolverQueryLogConfigCommandInput,
  type DeleteResolverQueryLogConfigCommandOutput,
  DeleteResolverQueryLogConfigCommand,
} from "./commands/DeleteResolverQueryLogConfigCommand";
import {
  type DeleteResolverRuleCommandInput,
  type DeleteResolverRuleCommandOutput,
  DeleteResolverRuleCommand,
} from "./commands/DeleteResolverRuleCommand";
import {
  type DisassociateFirewallRuleGroupCommandInput,
  type DisassociateFirewallRuleGroupCommandOutput,
  DisassociateFirewallRuleGroupCommand,
} from "./commands/DisassociateFirewallRuleGroupCommand";
import {
  type DisassociateResolverEndpointIpAddressCommandInput,
  type DisassociateResolverEndpointIpAddressCommandOutput,
  DisassociateResolverEndpointIpAddressCommand,
} from "./commands/DisassociateResolverEndpointIpAddressCommand";
import {
  type DisassociateResolverQueryLogConfigCommandInput,
  type DisassociateResolverQueryLogConfigCommandOutput,
  DisassociateResolverQueryLogConfigCommand,
} from "./commands/DisassociateResolverQueryLogConfigCommand";
import {
  type DisassociateResolverRuleCommandInput,
  type DisassociateResolverRuleCommandOutput,
  DisassociateResolverRuleCommand,
} from "./commands/DisassociateResolverRuleCommand";
import {
  type GetFirewallConfigCommandInput,
  type GetFirewallConfigCommandOutput,
  GetFirewallConfigCommand,
} from "./commands/GetFirewallConfigCommand";
import {
  type GetFirewallDomainListCommandInput,
  type GetFirewallDomainListCommandOutput,
  GetFirewallDomainListCommand,
} from "./commands/GetFirewallDomainListCommand";
import {
  type GetFirewallRuleGroupAssociationCommandInput,
  type GetFirewallRuleGroupAssociationCommandOutput,
  GetFirewallRuleGroupAssociationCommand,
} from "./commands/GetFirewallRuleGroupAssociationCommand";
import {
  type GetFirewallRuleGroupCommandInput,
  type GetFirewallRuleGroupCommandOutput,
  GetFirewallRuleGroupCommand,
} from "./commands/GetFirewallRuleGroupCommand";
import {
  type GetFirewallRuleGroupPolicyCommandInput,
  type GetFirewallRuleGroupPolicyCommandOutput,
  GetFirewallRuleGroupPolicyCommand,
} from "./commands/GetFirewallRuleGroupPolicyCommand";
import {
  type GetOutpostResolverCommandInput,
  type GetOutpostResolverCommandOutput,
  GetOutpostResolverCommand,
} from "./commands/GetOutpostResolverCommand";
import {
  type GetResolverConfigCommandInput,
  type GetResolverConfigCommandOutput,
  GetResolverConfigCommand,
} from "./commands/GetResolverConfigCommand";
import {
  type GetResolverDnssecConfigCommandInput,
  type GetResolverDnssecConfigCommandOutput,
  GetResolverDnssecConfigCommand,
} from "./commands/GetResolverDnssecConfigCommand";
import {
  type GetResolverEndpointCommandInput,
  type GetResolverEndpointCommandOutput,
  GetResolverEndpointCommand,
} from "./commands/GetResolverEndpointCommand";
import {
  type GetResolverQueryLogConfigAssociationCommandInput,
  type GetResolverQueryLogConfigAssociationCommandOutput,
  GetResolverQueryLogConfigAssociationCommand,
} from "./commands/GetResolverQueryLogConfigAssociationCommand";
import {
  type GetResolverQueryLogConfigCommandInput,
  type GetResolverQueryLogConfigCommandOutput,
  GetResolverQueryLogConfigCommand,
} from "./commands/GetResolverQueryLogConfigCommand";
import {
  type GetResolverQueryLogConfigPolicyCommandInput,
  type GetResolverQueryLogConfigPolicyCommandOutput,
  GetResolverQueryLogConfigPolicyCommand,
} from "./commands/GetResolverQueryLogConfigPolicyCommand";
import {
  type GetResolverRuleAssociationCommandInput,
  type GetResolverRuleAssociationCommandOutput,
  GetResolverRuleAssociationCommand,
} from "./commands/GetResolverRuleAssociationCommand";
import {
  type GetResolverRuleCommandInput,
  type GetResolverRuleCommandOutput,
  GetResolverRuleCommand,
} from "./commands/GetResolverRuleCommand";
import {
  type GetResolverRulePolicyCommandInput,
  type GetResolverRulePolicyCommandOutput,
  GetResolverRulePolicyCommand,
} from "./commands/GetResolverRulePolicyCommand";
import {
  type ImportFirewallDomainsCommandInput,
  type ImportFirewallDomainsCommandOutput,
  ImportFirewallDomainsCommand,
} from "./commands/ImportFirewallDomainsCommand";
import {
  type ListFirewallConfigsCommandInput,
  type ListFirewallConfigsCommandOutput,
  ListFirewallConfigsCommand,
} from "./commands/ListFirewallConfigsCommand";
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
  type ListFirewallRuleGroupAssociationsCommandInput,
  type ListFirewallRuleGroupAssociationsCommandOutput,
  ListFirewallRuleGroupAssociationsCommand,
} from "./commands/ListFirewallRuleGroupAssociationsCommand";
import {
  type ListFirewallRuleGroupsCommandInput,
  type ListFirewallRuleGroupsCommandOutput,
  ListFirewallRuleGroupsCommand,
} from "./commands/ListFirewallRuleGroupsCommand";
import {
  type ListFirewallRulesCommandInput,
  type ListFirewallRulesCommandOutput,
  ListFirewallRulesCommand,
} from "./commands/ListFirewallRulesCommand";
import {
  type ListFirewallRuleTypesCommandInput,
  type ListFirewallRuleTypesCommandOutput,
  ListFirewallRuleTypesCommand,
} from "./commands/ListFirewallRuleTypesCommand";
import {
  type ListOutpostResolversCommandInput,
  type ListOutpostResolversCommandOutput,
  ListOutpostResolversCommand,
} from "./commands/ListOutpostResolversCommand";
import {
  type ListResolverConfigsCommandInput,
  type ListResolverConfigsCommandOutput,
  ListResolverConfigsCommand,
} from "./commands/ListResolverConfigsCommand";
import {
  type ListResolverDnssecConfigsCommandInput,
  type ListResolverDnssecConfigsCommandOutput,
  ListResolverDnssecConfigsCommand,
} from "./commands/ListResolverDnssecConfigsCommand";
import {
  type ListResolverEndpointIpAddressesCommandInput,
  type ListResolverEndpointIpAddressesCommandOutput,
  ListResolverEndpointIpAddressesCommand,
} from "./commands/ListResolverEndpointIpAddressesCommand";
import {
  type ListResolverEndpointsCommandInput,
  type ListResolverEndpointsCommandOutput,
  ListResolverEndpointsCommand,
} from "./commands/ListResolverEndpointsCommand";
import {
  type ListResolverQueryLogConfigAssociationsCommandInput,
  type ListResolverQueryLogConfigAssociationsCommandOutput,
  ListResolverQueryLogConfigAssociationsCommand,
} from "./commands/ListResolverQueryLogConfigAssociationsCommand";
import {
  type ListResolverQueryLogConfigsCommandInput,
  type ListResolverQueryLogConfigsCommandOutput,
  ListResolverQueryLogConfigsCommand,
} from "./commands/ListResolverQueryLogConfigsCommand";
import {
  type ListResolverRuleAssociationsCommandInput,
  type ListResolverRuleAssociationsCommandOutput,
  ListResolverRuleAssociationsCommand,
} from "./commands/ListResolverRuleAssociationsCommand";
import {
  type ListResolverRulesCommandInput,
  type ListResolverRulesCommandOutput,
  ListResolverRulesCommand,
} from "./commands/ListResolverRulesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutFirewallRuleGroupPolicyCommandInput,
  type PutFirewallRuleGroupPolicyCommandOutput,
  PutFirewallRuleGroupPolicyCommand,
} from "./commands/PutFirewallRuleGroupPolicyCommand";
import {
  type PutResolverQueryLogConfigPolicyCommandInput,
  type PutResolverQueryLogConfigPolicyCommandOutput,
  PutResolverQueryLogConfigPolicyCommand,
} from "./commands/PutResolverQueryLogConfigPolicyCommand";
import {
  type PutResolverRulePolicyCommandInput,
  type PutResolverRulePolicyCommandOutput,
  PutResolverRulePolicyCommand,
} from "./commands/PutResolverRulePolicyCommand";
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
  type UpdateFirewallConfigCommandInput,
  type UpdateFirewallConfigCommandOutput,
  UpdateFirewallConfigCommand,
} from "./commands/UpdateFirewallConfigCommand";
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
  type UpdateFirewallRuleGroupAssociationCommandInput,
  type UpdateFirewallRuleGroupAssociationCommandOutput,
  UpdateFirewallRuleGroupAssociationCommand,
} from "./commands/UpdateFirewallRuleGroupAssociationCommand";
import {
  type UpdateOutpostResolverCommandInput,
  type UpdateOutpostResolverCommandOutput,
  UpdateOutpostResolverCommand,
} from "./commands/UpdateOutpostResolverCommand";
import {
  type UpdateResolverConfigCommandInput,
  type UpdateResolverConfigCommandOutput,
  UpdateResolverConfigCommand,
} from "./commands/UpdateResolverConfigCommand";
import {
  type UpdateResolverDnssecConfigCommandInput,
  type UpdateResolverDnssecConfigCommandOutput,
  UpdateResolverDnssecConfigCommand,
} from "./commands/UpdateResolverDnssecConfigCommand";
import {
  type UpdateResolverEndpointCommandInput,
  type UpdateResolverEndpointCommandOutput,
  UpdateResolverEndpointCommand,
} from "./commands/UpdateResolverEndpointCommand";
import {
  type UpdateResolverRuleCommandInput,
  type UpdateResolverRuleCommandOutput,
  UpdateResolverRuleCommand,
} from "./commands/UpdateResolverRuleCommand";
import { paginateListFirewallConfigs } from "./pagination/ListFirewallConfigsPaginator";
import { paginateListFirewallDomainLists } from "./pagination/ListFirewallDomainListsPaginator";
import { paginateListFirewallDomains } from "./pagination/ListFirewallDomainsPaginator";
import { paginateListFirewallRuleGroupAssociations } from "./pagination/ListFirewallRuleGroupAssociationsPaginator";
import { paginateListFirewallRuleGroups } from "./pagination/ListFirewallRuleGroupsPaginator";
import { paginateListFirewallRules } from "./pagination/ListFirewallRulesPaginator";
import { paginateListFirewallRuleTypes } from "./pagination/ListFirewallRuleTypesPaginator";
import { paginateListOutpostResolvers } from "./pagination/ListOutpostResolversPaginator";
import { paginateListResolverConfigs } from "./pagination/ListResolverConfigsPaginator";
import { paginateListResolverDnssecConfigs } from "./pagination/ListResolverDnssecConfigsPaginator";
import { paginateListResolverEndpointIpAddresses } from "./pagination/ListResolverEndpointIpAddressesPaginator";
import { paginateListResolverEndpoints } from "./pagination/ListResolverEndpointsPaginator";
import {
  paginateListResolverQueryLogConfigAssociations,
} from "./pagination/ListResolverQueryLogConfigAssociationsPaginator";
import { paginateListResolverQueryLogConfigs } from "./pagination/ListResolverQueryLogConfigsPaginator";
import { paginateListResolverRuleAssociations } from "./pagination/ListResolverRuleAssociationsPaginator";
import { paginateListResolverRules } from "./pagination/ListResolverRulesPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { Route53ResolverClient } from "./Route53ResolverClient";

const commands = {
  AssociateFirewallRuleGroupCommand,
  AssociateResolverEndpointIpAddressCommand,
  AssociateResolverQueryLogConfigCommand,
  AssociateResolverRuleCommand,
  BatchCreateFirewallRuleCommand,
  BatchDeleteFirewallRuleCommand,
  BatchUpdateFirewallRuleCommand,
  CreateFirewallDomainListCommand,
  CreateFirewallRuleCommand,
  CreateFirewallRuleGroupCommand,
  CreateOutpostResolverCommand,
  CreateResolverEndpointCommand,
  CreateResolverQueryLogConfigCommand,
  CreateResolverRuleCommand,
  DeleteFirewallDomainListCommand,
  DeleteFirewallRuleCommand,
  DeleteFirewallRuleGroupCommand,
  DeleteOutpostResolverCommand,
  DeleteResolverEndpointCommand,
  DeleteResolverQueryLogConfigCommand,
  DeleteResolverRuleCommand,
  DisassociateFirewallRuleGroupCommand,
  DisassociateResolverEndpointIpAddressCommand,
  DisassociateResolverQueryLogConfigCommand,
  DisassociateResolverRuleCommand,
  GetFirewallConfigCommand,
  GetFirewallDomainListCommand,
  GetFirewallRuleGroupCommand,
  GetFirewallRuleGroupAssociationCommand,
  GetFirewallRuleGroupPolicyCommand,
  GetOutpostResolverCommand,
  GetResolverConfigCommand,
  GetResolverDnssecConfigCommand,
  GetResolverEndpointCommand,
  GetResolverQueryLogConfigCommand,
  GetResolverQueryLogConfigAssociationCommand,
  GetResolverQueryLogConfigPolicyCommand,
  GetResolverRuleCommand,
  GetResolverRuleAssociationCommand,
  GetResolverRulePolicyCommand,
  ImportFirewallDomainsCommand,
  ListFirewallConfigsCommand,
  ListFirewallDomainListsCommand,
  ListFirewallDomainsCommand,
  ListFirewallRuleGroupAssociationsCommand,
  ListFirewallRuleGroupsCommand,
  ListFirewallRulesCommand,
  ListFirewallRuleTypesCommand,
  ListOutpostResolversCommand,
  ListResolverConfigsCommand,
  ListResolverDnssecConfigsCommand,
  ListResolverEndpointIpAddressesCommand,
  ListResolverEndpointsCommand,
  ListResolverQueryLogConfigAssociationsCommand,
  ListResolverQueryLogConfigsCommand,
  ListResolverRuleAssociationsCommand,
  ListResolverRulesCommand,
  ListTagsForResourceCommand,
  PutFirewallRuleGroupPolicyCommand,
  PutResolverQueryLogConfigPolicyCommand,
  PutResolverRulePolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateFirewallConfigCommand,
  UpdateFirewallDomainsCommand,
  UpdateFirewallRuleCommand,
  UpdateFirewallRuleGroupAssociationCommand,
  UpdateOutpostResolverCommand,
  UpdateResolverConfigCommand,
  UpdateResolverDnssecConfigCommand,
  UpdateResolverEndpointCommand,
  UpdateResolverRuleCommand,
};
const paginators = {
  paginateListFirewallConfigs,
  paginateListFirewallDomainLists,
  paginateListFirewallDomains,
  paginateListFirewallRuleGroupAssociations,
  paginateListFirewallRuleGroups,
  paginateListFirewallRules,
  paginateListFirewallRuleTypes,
  paginateListOutpostResolvers,
  paginateListResolverConfigs,
  paginateListResolverDnssecConfigs,
  paginateListResolverEndpointIpAddresses,
  paginateListResolverEndpoints,
  paginateListResolverQueryLogConfigAssociations,
  paginateListResolverQueryLogConfigs,
  paginateListResolverRuleAssociations,
  paginateListResolverRules,
  paginateListTagsForResource,
};

/**
 * @public
 */
export interface Route53ResolverRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Route53Resolver {
  /**
   * @see {@link AssociateFirewallRuleGroupCommand}
   */
  associateFirewallRuleGroup(
    args: AssociateFirewallRuleGroupCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<AssociateFirewallRuleGroupCommandOutput>;
  associateFirewallRuleGroup(
    args: AssociateFirewallRuleGroupCommandInput,
    cb: (err: any, data?: AssociateFirewallRuleGroupCommandOutput) => void
  ): void;
  associateFirewallRuleGroup(
    args: AssociateFirewallRuleGroupCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: AssociateFirewallRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResolverEndpointIpAddressCommand}
   */
  associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<AssociateResolverEndpointIpAddressCommandOutput>;
  associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    cb: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void
  ): void;
  associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResolverQueryLogConfigCommand}
   */
  associateResolverQueryLogConfig(
    args: AssociateResolverQueryLogConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<AssociateResolverQueryLogConfigCommandOutput>;
  associateResolverQueryLogConfig(
    args: AssociateResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: AssociateResolverQueryLogConfigCommandOutput) => void
  ): void;
  associateResolverQueryLogConfig(
    args: AssociateResolverQueryLogConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: AssociateResolverQueryLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResolverRuleCommand}
   */
  associateResolverRule(
    args: AssociateResolverRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<AssociateResolverRuleCommandOutput>;
  associateResolverRule(
    args: AssociateResolverRuleCommandInput,
    cb: (err: any, data?: AssociateResolverRuleCommandOutput) => void
  ): void;
  associateResolverRule(
    args: AssociateResolverRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: AssociateResolverRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateFirewallRuleCommand}
   */
  batchCreateFirewallRule(
    args: BatchCreateFirewallRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<BatchCreateFirewallRuleCommandOutput>;
  batchCreateFirewallRule(
    args: BatchCreateFirewallRuleCommandInput,
    cb: (err: any, data?: BatchCreateFirewallRuleCommandOutput) => void
  ): void;
  batchCreateFirewallRule(
    args: BatchCreateFirewallRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: BatchCreateFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteFirewallRuleCommand}
   */
  batchDeleteFirewallRule(
    args: BatchDeleteFirewallRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<BatchDeleteFirewallRuleCommandOutput>;
  batchDeleteFirewallRule(
    args: BatchDeleteFirewallRuleCommandInput,
    cb: (err: any, data?: BatchDeleteFirewallRuleCommandOutput) => void
  ): void;
  batchDeleteFirewallRule(
    args: BatchDeleteFirewallRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: BatchDeleteFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateFirewallRuleCommand}
   */
  batchUpdateFirewallRule(
    args: BatchUpdateFirewallRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<BatchUpdateFirewallRuleCommandOutput>;
  batchUpdateFirewallRule(
    args: BatchUpdateFirewallRuleCommandInput,
    cb: (err: any, data?: BatchUpdateFirewallRuleCommandOutput) => void
  ): void;
  batchUpdateFirewallRule(
    args: BatchUpdateFirewallRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: BatchUpdateFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFirewallDomainListCommand}
   */
  createFirewallDomainList(
    args: CreateFirewallDomainListCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<CreateFirewallDomainListCommandOutput>;
  createFirewallDomainList(
    args: CreateFirewallDomainListCommandInput,
    cb: (err: any, data?: CreateFirewallDomainListCommandOutput) => void
  ): void;
  createFirewallDomainList(
    args: CreateFirewallDomainListCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: CreateFirewallDomainListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFirewallRuleCommand}
   */
  createFirewallRule(
    args: CreateFirewallRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<CreateFirewallRuleCommandOutput>;
  createFirewallRule(
    args: CreateFirewallRuleCommandInput,
    cb: (err: any, data?: CreateFirewallRuleCommandOutput) => void
  ): void;
  createFirewallRule(
    args: CreateFirewallRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: CreateFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFirewallRuleGroupCommand}
   */
  createFirewallRuleGroup(
    args: CreateFirewallRuleGroupCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<CreateFirewallRuleGroupCommandOutput>;
  createFirewallRuleGroup(
    args: CreateFirewallRuleGroupCommandInput,
    cb: (err: any, data?: CreateFirewallRuleGroupCommandOutput) => void
  ): void;
  createFirewallRuleGroup(
    args: CreateFirewallRuleGroupCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: CreateFirewallRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOutpostResolverCommand}
   */
  createOutpostResolver(
    args: CreateOutpostResolverCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<CreateOutpostResolverCommandOutput>;
  createOutpostResolver(
    args: CreateOutpostResolverCommandInput,
    cb: (err: any, data?: CreateOutpostResolverCommandOutput) => void
  ): void;
  createOutpostResolver(
    args: CreateOutpostResolverCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: CreateOutpostResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResolverEndpointCommand}
   */
  createResolverEndpoint(
    args: CreateResolverEndpointCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<CreateResolverEndpointCommandOutput>;
  createResolverEndpoint(
    args: CreateResolverEndpointCommandInput,
    cb: (err: any, data?: CreateResolverEndpointCommandOutput) => void
  ): void;
  createResolverEndpoint(
    args: CreateResolverEndpointCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: CreateResolverEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResolverQueryLogConfigCommand}
   */
  createResolverQueryLogConfig(
    args: CreateResolverQueryLogConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<CreateResolverQueryLogConfigCommandOutput>;
  createResolverQueryLogConfig(
    args: CreateResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: CreateResolverQueryLogConfigCommandOutput) => void
  ): void;
  createResolverQueryLogConfig(
    args: CreateResolverQueryLogConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: CreateResolverQueryLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResolverRuleCommand}
   */
  createResolverRule(
    args: CreateResolverRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<CreateResolverRuleCommandOutput>;
  createResolverRule(
    args: CreateResolverRuleCommandInput,
    cb: (err: any, data?: CreateResolverRuleCommandOutput) => void
  ): void;
  createResolverRule(
    args: CreateResolverRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: CreateResolverRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallDomainListCommand}
   */
  deleteFirewallDomainList(
    args: DeleteFirewallDomainListCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DeleteFirewallDomainListCommandOutput>;
  deleteFirewallDomainList(
    args: DeleteFirewallDomainListCommandInput,
    cb: (err: any, data?: DeleteFirewallDomainListCommandOutput) => void
  ): void;
  deleteFirewallDomainList(
    args: DeleteFirewallDomainListCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DeleteFirewallDomainListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallRuleCommand}
   */
  deleteFirewallRule(
    args: DeleteFirewallRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DeleteFirewallRuleCommandOutput>;
  deleteFirewallRule(
    args: DeleteFirewallRuleCommandInput,
    cb: (err: any, data?: DeleteFirewallRuleCommandOutput) => void
  ): void;
  deleteFirewallRule(
    args: DeleteFirewallRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DeleteFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallRuleGroupCommand}
   */
  deleteFirewallRuleGroup(
    args: DeleteFirewallRuleGroupCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DeleteFirewallRuleGroupCommandOutput>;
  deleteFirewallRuleGroup(
    args: DeleteFirewallRuleGroupCommandInput,
    cb: (err: any, data?: DeleteFirewallRuleGroupCommandOutput) => void
  ): void;
  deleteFirewallRuleGroup(
    args: DeleteFirewallRuleGroupCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DeleteFirewallRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOutpostResolverCommand}
   */
  deleteOutpostResolver(
    args: DeleteOutpostResolverCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DeleteOutpostResolverCommandOutput>;
  deleteOutpostResolver(
    args: DeleteOutpostResolverCommandInput,
    cb: (err: any, data?: DeleteOutpostResolverCommandOutput) => void
  ): void;
  deleteOutpostResolver(
    args: DeleteOutpostResolverCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DeleteOutpostResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResolverEndpointCommand}
   */
  deleteResolverEndpoint(
    args: DeleteResolverEndpointCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DeleteResolverEndpointCommandOutput>;
  deleteResolverEndpoint(
    args: DeleteResolverEndpointCommandInput,
    cb: (err: any, data?: DeleteResolverEndpointCommandOutput) => void
  ): void;
  deleteResolverEndpoint(
    args: DeleteResolverEndpointCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DeleteResolverEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResolverQueryLogConfigCommand}
   */
  deleteResolverQueryLogConfig(
    args: DeleteResolverQueryLogConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DeleteResolverQueryLogConfigCommandOutput>;
  deleteResolverQueryLogConfig(
    args: DeleteResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: DeleteResolverQueryLogConfigCommandOutput) => void
  ): void;
  deleteResolverQueryLogConfig(
    args: DeleteResolverQueryLogConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DeleteResolverQueryLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResolverRuleCommand}
   */
  deleteResolverRule(
    args: DeleteResolverRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DeleteResolverRuleCommandOutput>;
  deleteResolverRule(
    args: DeleteResolverRuleCommandInput,
    cb: (err: any, data?: DeleteResolverRuleCommandOutput) => void
  ): void;
  deleteResolverRule(
    args: DeleteResolverRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DeleteResolverRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFirewallRuleGroupCommand}
   */
  disassociateFirewallRuleGroup(
    args: DisassociateFirewallRuleGroupCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DisassociateFirewallRuleGroupCommandOutput>;
  disassociateFirewallRuleGroup(
    args: DisassociateFirewallRuleGroupCommandInput,
    cb: (err: any, data?: DisassociateFirewallRuleGroupCommandOutput) => void
  ): void;
  disassociateFirewallRuleGroup(
    args: DisassociateFirewallRuleGroupCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DisassociateFirewallRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResolverEndpointIpAddressCommand}
   */
  disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DisassociateResolverEndpointIpAddressCommandOutput>;
  disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    cb: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void
  ): void;
  disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResolverQueryLogConfigCommand}
   */
  disassociateResolverQueryLogConfig(
    args: DisassociateResolverQueryLogConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DisassociateResolverQueryLogConfigCommandOutput>;
  disassociateResolverQueryLogConfig(
    args: DisassociateResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: DisassociateResolverQueryLogConfigCommandOutput) => void
  ): void;
  disassociateResolverQueryLogConfig(
    args: DisassociateResolverQueryLogConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DisassociateResolverQueryLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResolverRuleCommand}
   */
  disassociateResolverRule(
    args: DisassociateResolverRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<DisassociateResolverRuleCommandOutput>;
  disassociateResolverRule(
    args: DisassociateResolverRuleCommandInput,
    cb: (err: any, data?: DisassociateResolverRuleCommandOutput) => void
  ): void;
  disassociateResolverRule(
    args: DisassociateResolverRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: DisassociateResolverRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFirewallConfigCommand}
   */
  getFirewallConfig(
    args: GetFirewallConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetFirewallConfigCommandOutput>;
  getFirewallConfig(
    args: GetFirewallConfigCommandInput,
    cb: (err: any, data?: GetFirewallConfigCommandOutput) => void
  ): void;
  getFirewallConfig(
    args: GetFirewallConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetFirewallConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFirewallDomainListCommand}
   */
  getFirewallDomainList(
    args: GetFirewallDomainListCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetFirewallDomainListCommandOutput>;
  getFirewallDomainList(
    args: GetFirewallDomainListCommandInput,
    cb: (err: any, data?: GetFirewallDomainListCommandOutput) => void
  ): void;
  getFirewallDomainList(
    args: GetFirewallDomainListCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetFirewallDomainListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFirewallRuleGroupCommand}
   */
  getFirewallRuleGroup(
    args: GetFirewallRuleGroupCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetFirewallRuleGroupCommandOutput>;
  getFirewallRuleGroup(
    args: GetFirewallRuleGroupCommandInput,
    cb: (err: any, data?: GetFirewallRuleGroupCommandOutput) => void
  ): void;
  getFirewallRuleGroup(
    args: GetFirewallRuleGroupCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetFirewallRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFirewallRuleGroupAssociationCommand}
   */
  getFirewallRuleGroupAssociation(
    args: GetFirewallRuleGroupAssociationCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetFirewallRuleGroupAssociationCommandOutput>;
  getFirewallRuleGroupAssociation(
    args: GetFirewallRuleGroupAssociationCommandInput,
    cb: (err: any, data?: GetFirewallRuleGroupAssociationCommandOutput) => void
  ): void;
  getFirewallRuleGroupAssociation(
    args: GetFirewallRuleGroupAssociationCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetFirewallRuleGroupAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFirewallRuleGroupPolicyCommand}
   */
  getFirewallRuleGroupPolicy(
    args: GetFirewallRuleGroupPolicyCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetFirewallRuleGroupPolicyCommandOutput>;
  getFirewallRuleGroupPolicy(
    args: GetFirewallRuleGroupPolicyCommandInput,
    cb: (err: any, data?: GetFirewallRuleGroupPolicyCommandOutput) => void
  ): void;
  getFirewallRuleGroupPolicy(
    args: GetFirewallRuleGroupPolicyCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetFirewallRuleGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOutpostResolverCommand}
   */
  getOutpostResolver(
    args: GetOutpostResolverCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetOutpostResolverCommandOutput>;
  getOutpostResolver(
    args: GetOutpostResolverCommandInput,
    cb: (err: any, data?: GetOutpostResolverCommandOutput) => void
  ): void;
  getOutpostResolver(
    args: GetOutpostResolverCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetOutpostResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverConfigCommand}
   */
  getResolverConfig(
    args: GetResolverConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetResolverConfigCommandOutput>;
  getResolverConfig(
    args: GetResolverConfigCommandInput,
    cb: (err: any, data?: GetResolverConfigCommandOutput) => void
  ): void;
  getResolverConfig(
    args: GetResolverConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetResolverConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverDnssecConfigCommand}
   */
  getResolverDnssecConfig(
    args: GetResolverDnssecConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetResolverDnssecConfigCommandOutput>;
  getResolverDnssecConfig(
    args: GetResolverDnssecConfigCommandInput,
    cb: (err: any, data?: GetResolverDnssecConfigCommandOutput) => void
  ): void;
  getResolverDnssecConfig(
    args: GetResolverDnssecConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetResolverDnssecConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverEndpointCommand}
   */
  getResolverEndpoint(
    args: GetResolverEndpointCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetResolverEndpointCommandOutput>;
  getResolverEndpoint(
    args: GetResolverEndpointCommandInput,
    cb: (err: any, data?: GetResolverEndpointCommandOutput) => void
  ): void;
  getResolverEndpoint(
    args: GetResolverEndpointCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetResolverEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverQueryLogConfigCommand}
   */
  getResolverQueryLogConfig(
    args: GetResolverQueryLogConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetResolverQueryLogConfigCommandOutput>;
  getResolverQueryLogConfig(
    args: GetResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: GetResolverQueryLogConfigCommandOutput) => void
  ): void;
  getResolverQueryLogConfig(
    args: GetResolverQueryLogConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetResolverQueryLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverQueryLogConfigAssociationCommand}
   */
  getResolverQueryLogConfigAssociation(
    args: GetResolverQueryLogConfigAssociationCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetResolverQueryLogConfigAssociationCommandOutput>;
  getResolverQueryLogConfigAssociation(
    args: GetResolverQueryLogConfigAssociationCommandInput,
    cb: (err: any, data?: GetResolverQueryLogConfigAssociationCommandOutput) => void
  ): void;
  getResolverQueryLogConfigAssociation(
    args: GetResolverQueryLogConfigAssociationCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetResolverQueryLogConfigAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverQueryLogConfigPolicyCommand}
   */
  getResolverQueryLogConfigPolicy(
    args: GetResolverQueryLogConfigPolicyCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetResolverQueryLogConfigPolicyCommandOutput>;
  getResolverQueryLogConfigPolicy(
    args: GetResolverQueryLogConfigPolicyCommandInput,
    cb: (err: any, data?: GetResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;
  getResolverQueryLogConfigPolicy(
    args: GetResolverQueryLogConfigPolicyCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverRuleCommand}
   */
  getResolverRule(
    args: GetResolverRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetResolverRuleCommandOutput>;
  getResolverRule(
    args: GetResolverRuleCommandInput,
    cb: (err: any, data?: GetResolverRuleCommandOutput) => void
  ): void;
  getResolverRule(
    args: GetResolverRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetResolverRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverRuleAssociationCommand}
   */
  getResolverRuleAssociation(
    args: GetResolverRuleAssociationCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetResolverRuleAssociationCommandOutput>;
  getResolverRuleAssociation(
    args: GetResolverRuleAssociationCommandInput,
    cb: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void
  ): void;
  getResolverRuleAssociation(
    args: GetResolverRuleAssociationCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverRulePolicyCommand}
   */
  getResolverRulePolicy(
    args: GetResolverRulePolicyCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<GetResolverRulePolicyCommandOutput>;
  getResolverRulePolicy(
    args: GetResolverRulePolicyCommandInput,
    cb: (err: any, data?: GetResolverRulePolicyCommandOutput) => void
  ): void;
  getResolverRulePolicy(
    args: GetResolverRulePolicyCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: GetResolverRulePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportFirewallDomainsCommand}
   */
  importFirewallDomains(
    args: ImportFirewallDomainsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ImportFirewallDomainsCommandOutput>;
  importFirewallDomains(
    args: ImportFirewallDomainsCommandInput,
    cb: (err: any, data?: ImportFirewallDomainsCommandOutput) => void
  ): void;
  importFirewallDomains(
    args: ImportFirewallDomainsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ImportFirewallDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallConfigsCommand}
   */
  listFirewallConfigs(): Promise<ListFirewallConfigsCommandOutput>;
  listFirewallConfigs(
    args: ListFirewallConfigsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListFirewallConfigsCommandOutput>;
  listFirewallConfigs(
    args: ListFirewallConfigsCommandInput,
    cb: (err: any, data?: ListFirewallConfigsCommandOutput) => void
  ): void;
  listFirewallConfigs(
    args: ListFirewallConfigsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListFirewallConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallDomainListsCommand}
   */
  listFirewallDomainLists(): Promise<ListFirewallDomainListsCommandOutput>;
  listFirewallDomainLists(
    args: ListFirewallDomainListsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListFirewallDomainListsCommandOutput>;
  listFirewallDomainLists(
    args: ListFirewallDomainListsCommandInput,
    cb: (err: any, data?: ListFirewallDomainListsCommandOutput) => void
  ): void;
  listFirewallDomainLists(
    args: ListFirewallDomainListsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListFirewallDomainListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallDomainsCommand}
   */
  listFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListFirewallDomainsCommandOutput>;
  listFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    cb: (err: any, data?: ListFirewallDomainsCommandOutput) => void
  ): void;
  listFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListFirewallDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallRuleGroupAssociationsCommand}
   */
  listFirewallRuleGroupAssociations(): Promise<ListFirewallRuleGroupAssociationsCommandOutput>;
  listFirewallRuleGroupAssociations(
    args: ListFirewallRuleGroupAssociationsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListFirewallRuleGroupAssociationsCommandOutput>;
  listFirewallRuleGroupAssociations(
    args: ListFirewallRuleGroupAssociationsCommandInput,
    cb: (err: any, data?: ListFirewallRuleGroupAssociationsCommandOutput) => void
  ): void;
  listFirewallRuleGroupAssociations(
    args: ListFirewallRuleGroupAssociationsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListFirewallRuleGroupAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallRuleGroupsCommand}
   */
  listFirewallRuleGroups(): Promise<ListFirewallRuleGroupsCommandOutput>;
  listFirewallRuleGroups(
    args: ListFirewallRuleGroupsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListFirewallRuleGroupsCommandOutput>;
  listFirewallRuleGroups(
    args: ListFirewallRuleGroupsCommandInput,
    cb: (err: any, data?: ListFirewallRuleGroupsCommandOutput) => void
  ): void;
  listFirewallRuleGroups(
    args: ListFirewallRuleGroupsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListFirewallRuleGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallRulesCommand}
   */
  listFirewallRules(
    args: ListFirewallRulesCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListFirewallRulesCommandOutput>;
  listFirewallRules(
    args: ListFirewallRulesCommandInput,
    cb: (err: any, data?: ListFirewallRulesCommandOutput) => void
  ): void;
  listFirewallRules(
    args: ListFirewallRulesCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListFirewallRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallRuleTypesCommand}
   */
  listFirewallRuleTypes(): Promise<ListFirewallRuleTypesCommandOutput>;
  listFirewallRuleTypes(
    args: ListFirewallRuleTypesCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListFirewallRuleTypesCommandOutput>;
  listFirewallRuleTypes(
    args: ListFirewallRuleTypesCommandInput,
    cb: (err: any, data?: ListFirewallRuleTypesCommandOutput) => void
  ): void;
  listFirewallRuleTypes(
    args: ListFirewallRuleTypesCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListFirewallRuleTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOutpostResolversCommand}
   */
  listOutpostResolvers(): Promise<ListOutpostResolversCommandOutput>;
  listOutpostResolvers(
    args: ListOutpostResolversCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListOutpostResolversCommandOutput>;
  listOutpostResolvers(
    args: ListOutpostResolversCommandInput,
    cb: (err: any, data?: ListOutpostResolversCommandOutput) => void
  ): void;
  listOutpostResolvers(
    args: ListOutpostResolversCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListOutpostResolversCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverConfigsCommand}
   */
  listResolverConfigs(): Promise<ListResolverConfigsCommandOutput>;
  listResolverConfigs(
    args: ListResolverConfigsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListResolverConfigsCommandOutput>;
  listResolverConfigs(
    args: ListResolverConfigsCommandInput,
    cb: (err: any, data?: ListResolverConfigsCommandOutput) => void
  ): void;
  listResolverConfigs(
    args: ListResolverConfigsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListResolverConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverDnssecConfigsCommand}
   */
  listResolverDnssecConfigs(): Promise<ListResolverDnssecConfigsCommandOutput>;
  listResolverDnssecConfigs(
    args: ListResolverDnssecConfigsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListResolverDnssecConfigsCommandOutput>;
  listResolverDnssecConfigs(
    args: ListResolverDnssecConfigsCommandInput,
    cb: (err: any, data?: ListResolverDnssecConfigsCommandOutput) => void
  ): void;
  listResolverDnssecConfigs(
    args: ListResolverDnssecConfigsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListResolverDnssecConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverEndpointIpAddressesCommand}
   */
  listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListResolverEndpointIpAddressesCommandOutput>;
  listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    cb: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void
  ): void;
  listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverEndpointsCommand}
   */
  listResolverEndpoints(): Promise<ListResolverEndpointsCommandOutput>;
  listResolverEndpoints(
    args: ListResolverEndpointsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListResolverEndpointsCommandOutput>;
  listResolverEndpoints(
    args: ListResolverEndpointsCommandInput,
    cb: (err: any, data?: ListResolverEndpointsCommandOutput) => void
  ): void;
  listResolverEndpoints(
    args: ListResolverEndpointsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListResolverEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverQueryLogConfigAssociationsCommand}
   */
  listResolverQueryLogConfigAssociations(): Promise<ListResolverQueryLogConfigAssociationsCommandOutput>;
  listResolverQueryLogConfigAssociations(
    args: ListResolverQueryLogConfigAssociationsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListResolverQueryLogConfigAssociationsCommandOutput>;
  listResolverQueryLogConfigAssociations(
    args: ListResolverQueryLogConfigAssociationsCommandInput,
    cb: (err: any, data?: ListResolverQueryLogConfigAssociationsCommandOutput) => void
  ): void;
  listResolverQueryLogConfigAssociations(
    args: ListResolverQueryLogConfigAssociationsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListResolverQueryLogConfigAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverQueryLogConfigsCommand}
   */
  listResolverQueryLogConfigs(): Promise<ListResolverQueryLogConfigsCommandOutput>;
  listResolverQueryLogConfigs(
    args: ListResolverQueryLogConfigsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListResolverQueryLogConfigsCommandOutput>;
  listResolverQueryLogConfigs(
    args: ListResolverQueryLogConfigsCommandInput,
    cb: (err: any, data?: ListResolverQueryLogConfigsCommandOutput) => void
  ): void;
  listResolverQueryLogConfigs(
    args: ListResolverQueryLogConfigsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListResolverQueryLogConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverRuleAssociationsCommand}
   */
  listResolverRuleAssociations(): Promise<ListResolverRuleAssociationsCommandOutput>;
  listResolverRuleAssociations(
    args: ListResolverRuleAssociationsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListResolverRuleAssociationsCommandOutput>;
  listResolverRuleAssociations(
    args: ListResolverRuleAssociationsCommandInput,
    cb: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void
  ): void;
  listResolverRuleAssociations(
    args: ListResolverRuleAssociationsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverRulesCommand}
   */
  listResolverRules(): Promise<ListResolverRulesCommandOutput>;
  listResolverRules(
    args: ListResolverRulesCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListResolverRulesCommandOutput>;
  listResolverRules(
    args: ListResolverRulesCommandInput,
    cb: (err: any, data?: ListResolverRulesCommandOutput) => void
  ): void;
  listResolverRules(
    args: ListResolverRulesCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListResolverRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFirewallRuleGroupPolicyCommand}
   */
  putFirewallRuleGroupPolicy(
    args: PutFirewallRuleGroupPolicyCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<PutFirewallRuleGroupPolicyCommandOutput>;
  putFirewallRuleGroupPolicy(
    args: PutFirewallRuleGroupPolicyCommandInput,
    cb: (err: any, data?: PutFirewallRuleGroupPolicyCommandOutput) => void
  ): void;
  putFirewallRuleGroupPolicy(
    args: PutFirewallRuleGroupPolicyCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: PutFirewallRuleGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResolverQueryLogConfigPolicyCommand}
   */
  putResolverQueryLogConfigPolicy(
    args: PutResolverQueryLogConfigPolicyCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<PutResolverQueryLogConfigPolicyCommandOutput>;
  putResolverQueryLogConfigPolicy(
    args: PutResolverQueryLogConfigPolicyCommandInput,
    cb: (err: any, data?: PutResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;
  putResolverQueryLogConfigPolicy(
    args: PutResolverQueryLogConfigPolicyCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: PutResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResolverRulePolicyCommand}
   */
  putResolverRulePolicy(
    args: PutResolverRulePolicyCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<PutResolverRulePolicyCommandOutput>;
  putResolverRulePolicy(
    args: PutResolverRulePolicyCommandInput,
    cb: (err: any, data?: PutResolverRulePolicyCommandOutput) => void
  ): void;
  putResolverRulePolicy(
    args: PutResolverRulePolicyCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: PutResolverRulePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallConfigCommand}
   */
  updateFirewallConfig(
    args: UpdateFirewallConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<UpdateFirewallConfigCommandOutput>;
  updateFirewallConfig(
    args: UpdateFirewallConfigCommandInput,
    cb: (err: any, data?: UpdateFirewallConfigCommandOutput) => void
  ): void;
  updateFirewallConfig(
    args: UpdateFirewallConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: UpdateFirewallConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallDomainsCommand}
   */
  updateFirewallDomains(
    args: UpdateFirewallDomainsCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<UpdateFirewallDomainsCommandOutput>;
  updateFirewallDomains(
    args: UpdateFirewallDomainsCommandInput,
    cb: (err: any, data?: UpdateFirewallDomainsCommandOutput) => void
  ): void;
  updateFirewallDomains(
    args: UpdateFirewallDomainsCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: UpdateFirewallDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallRuleCommand}
   */
  updateFirewallRule(
    args: UpdateFirewallRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<UpdateFirewallRuleCommandOutput>;
  updateFirewallRule(
    args: UpdateFirewallRuleCommandInput,
    cb: (err: any, data?: UpdateFirewallRuleCommandOutput) => void
  ): void;
  updateFirewallRule(
    args: UpdateFirewallRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: UpdateFirewallRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallRuleGroupAssociationCommand}
   */
  updateFirewallRuleGroupAssociation(
    args: UpdateFirewallRuleGroupAssociationCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<UpdateFirewallRuleGroupAssociationCommandOutput>;
  updateFirewallRuleGroupAssociation(
    args: UpdateFirewallRuleGroupAssociationCommandInput,
    cb: (err: any, data?: UpdateFirewallRuleGroupAssociationCommandOutput) => void
  ): void;
  updateFirewallRuleGroupAssociation(
    args: UpdateFirewallRuleGroupAssociationCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: UpdateFirewallRuleGroupAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOutpostResolverCommand}
   */
  updateOutpostResolver(
    args: UpdateOutpostResolverCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<UpdateOutpostResolverCommandOutput>;
  updateOutpostResolver(
    args: UpdateOutpostResolverCommandInput,
    cb: (err: any, data?: UpdateOutpostResolverCommandOutput) => void
  ): void;
  updateOutpostResolver(
    args: UpdateOutpostResolverCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: UpdateOutpostResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverConfigCommand}
   */
  updateResolverConfig(
    args: UpdateResolverConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<UpdateResolverConfigCommandOutput>;
  updateResolverConfig(
    args: UpdateResolverConfigCommandInput,
    cb: (err: any, data?: UpdateResolverConfigCommandOutput) => void
  ): void;
  updateResolverConfig(
    args: UpdateResolverConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: UpdateResolverConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverDnssecConfigCommand}
   */
  updateResolverDnssecConfig(
    args: UpdateResolverDnssecConfigCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<UpdateResolverDnssecConfigCommandOutput>;
  updateResolverDnssecConfig(
    args: UpdateResolverDnssecConfigCommandInput,
    cb: (err: any, data?: UpdateResolverDnssecConfigCommandOutput) => void
  ): void;
  updateResolverDnssecConfig(
    args: UpdateResolverDnssecConfigCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: UpdateResolverDnssecConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverEndpointCommand}
   */
  updateResolverEndpoint(
    args: UpdateResolverEndpointCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<UpdateResolverEndpointCommandOutput>;
  updateResolverEndpoint(
    args: UpdateResolverEndpointCommandInput,
    cb: (err: any, data?: UpdateResolverEndpointCommandOutput) => void
  ): void;
  updateResolverEndpoint(
    args: UpdateResolverEndpointCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: UpdateResolverEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverRuleCommand}
   */
  updateResolverRule(
    args: UpdateResolverRuleCommandInput,
    options?: Route53ResolverRequestOptions
  ): Promise<UpdateResolverRuleCommandOutput>;
  updateResolverRule(
    args: UpdateResolverRuleCommandInput,
    cb: (err: any, data?: UpdateResolverRuleCommandOutput) => void
  ): void;
  updateResolverRule(
    args: UpdateResolverRuleCommandInput,
    options: Route53ResolverRequestOptions,
    cb: (err: any, data?: UpdateResolverRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallConfigsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFirewallConfigsCommandOutput}.
   */
  paginateListFirewallConfigs(
    args?: ListFirewallConfigsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFirewallConfigsCommandOutput>;

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
   * @see {@link ListFirewallRuleGroupAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFirewallRuleGroupAssociationsCommandOutput}.
   */
  paginateListFirewallRuleGroupAssociations(
    args?: ListFirewallRuleGroupAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFirewallRuleGroupAssociationsCommandOutput>;

  /**
   * @see {@link ListFirewallRuleGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFirewallRuleGroupsCommandOutput}.
   */
  paginateListFirewallRuleGroups(
    args?: ListFirewallRuleGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFirewallRuleGroupsCommandOutput>;

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
   * @see {@link ListFirewallRuleTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFirewallRuleTypesCommandOutput}.
   */
  paginateListFirewallRuleTypes(
    args?: ListFirewallRuleTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFirewallRuleTypesCommandOutput>;

  /**
   * @see {@link ListOutpostResolversCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOutpostResolversCommandOutput}.
   */
  paginateListOutpostResolvers(
    args?: ListOutpostResolversCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOutpostResolversCommandOutput>;

  /**
   * @see {@link ListResolverConfigsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResolverConfigsCommandOutput}.
   */
  paginateListResolverConfigs(
    args?: ListResolverConfigsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResolverConfigsCommandOutput>;

  /**
   * @see {@link ListResolverDnssecConfigsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResolverDnssecConfigsCommandOutput}.
   */
  paginateListResolverDnssecConfigs(
    args?: ListResolverDnssecConfigsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResolverDnssecConfigsCommandOutput>;

  /**
   * @see {@link ListResolverEndpointIpAddressesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResolverEndpointIpAddressesCommandOutput}.
   */
  paginateListResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResolverEndpointIpAddressesCommandOutput>;

  /**
   * @see {@link ListResolverEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResolverEndpointsCommandOutput}.
   */
  paginateListResolverEndpoints(
    args?: ListResolverEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResolverEndpointsCommandOutput>;

  /**
   * @see {@link ListResolverQueryLogConfigAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResolverQueryLogConfigAssociationsCommandOutput}.
   */
  paginateListResolverQueryLogConfigAssociations(
    args?: ListResolverQueryLogConfigAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResolverQueryLogConfigAssociationsCommandOutput>;

  /**
   * @see {@link ListResolverQueryLogConfigsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResolverQueryLogConfigsCommandOutput}.
   */
  paginateListResolverQueryLogConfigs(
    args?: ListResolverQueryLogConfigsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResolverQueryLogConfigsCommandOutput>;

  /**
   * @see {@link ListResolverRuleAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResolverRuleAssociationsCommandOutput}.
   */
  paginateListResolverRuleAssociations(
    args?: ListResolverRuleAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResolverRuleAssociationsCommandOutput>;

  /**
   * @see {@link ListResolverRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResolverRulesCommandOutput}.
   */
  paginateListResolverRules(
    args?: ListResolverRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResolverRulesCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;
}

/**
 * <p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC
 * 			from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names
 * 			such as domain names for EC2 instances or Elastic Load Balancing load balancers.
 * 			Resolver performs recursive lookups against public name servers for all other domain
 * 			names.</p>
 *          <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p>
 *          <p>
 *             <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b>
 *          </p>
 *          <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers
 * 			to easily resolve domain names for Amazon Web Services resources such as EC2 instances or records in a Route 53 private hosted zone.
 * 			For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers
 * 			on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>
 *             <b>Conditionally forward queries from a VPC to resolvers on your network</b>
 *          </p>
 *          <p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network.
 * 			To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward
 * 			(such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to.
 * 			If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match
 * 			(acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver
 * 			Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>Like Amazon VPC, Resolver is Regional. In each Region where you have VPCs, you can choose
 * 			whether to forward queries from your VPCs to your network (outbound queries), from your
 * 			network to your VPCs (inbound queries), or both.</p>
 * @public
 */
export class Route53Resolver extends Route53ResolverClient implements Route53Resolver {}
createAggregatedClient(commands, Route53Resolver, { paginators });
