// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateFirewallRuleGroupCommand,
  AssociateFirewallRuleGroupCommandInput,
  AssociateFirewallRuleGroupCommandOutput,
} from "./commands/AssociateFirewallRuleGroupCommand";
import {
  AssociateResolverEndpointIpAddressCommand,
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput,
} from "./commands/AssociateResolverEndpointIpAddressCommand";
import {
  AssociateResolverQueryLogConfigCommand,
  AssociateResolverQueryLogConfigCommandInput,
  AssociateResolverQueryLogConfigCommandOutput,
} from "./commands/AssociateResolverQueryLogConfigCommand";
import {
  AssociateResolverRuleCommand,
  AssociateResolverRuleCommandInput,
  AssociateResolverRuleCommandOutput,
} from "./commands/AssociateResolverRuleCommand";
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
  CreateFirewallRuleGroupCommand,
  CreateFirewallRuleGroupCommandInput,
  CreateFirewallRuleGroupCommandOutput,
} from "./commands/CreateFirewallRuleGroupCommand";
import {
  CreateResolverEndpointCommand,
  CreateResolverEndpointCommandInput,
  CreateResolverEndpointCommandOutput,
} from "./commands/CreateResolverEndpointCommand";
import {
  CreateResolverQueryLogConfigCommand,
  CreateResolverQueryLogConfigCommandInput,
  CreateResolverQueryLogConfigCommandOutput,
} from "./commands/CreateResolverQueryLogConfigCommand";
import {
  CreateResolverRuleCommand,
  CreateResolverRuleCommandInput,
  CreateResolverRuleCommandOutput,
} from "./commands/CreateResolverRuleCommand";
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
  DeleteFirewallRuleGroupCommand,
  DeleteFirewallRuleGroupCommandInput,
  DeleteFirewallRuleGroupCommandOutput,
} from "./commands/DeleteFirewallRuleGroupCommand";
import {
  DeleteResolverEndpointCommand,
  DeleteResolverEndpointCommandInput,
  DeleteResolverEndpointCommandOutput,
} from "./commands/DeleteResolverEndpointCommand";
import {
  DeleteResolverQueryLogConfigCommand,
  DeleteResolverQueryLogConfigCommandInput,
  DeleteResolverQueryLogConfigCommandOutput,
} from "./commands/DeleteResolverQueryLogConfigCommand";
import {
  DeleteResolverRuleCommand,
  DeleteResolverRuleCommandInput,
  DeleteResolverRuleCommandOutput,
} from "./commands/DeleteResolverRuleCommand";
import {
  DisassociateFirewallRuleGroupCommand,
  DisassociateFirewallRuleGroupCommandInput,
  DisassociateFirewallRuleGroupCommandOutput,
} from "./commands/DisassociateFirewallRuleGroupCommand";
import {
  DisassociateResolverEndpointIpAddressCommand,
  DisassociateResolverEndpointIpAddressCommandInput,
  DisassociateResolverEndpointIpAddressCommandOutput,
} from "./commands/DisassociateResolverEndpointIpAddressCommand";
import {
  DisassociateResolverQueryLogConfigCommand,
  DisassociateResolverQueryLogConfigCommandInput,
  DisassociateResolverQueryLogConfigCommandOutput,
} from "./commands/DisassociateResolverQueryLogConfigCommand";
import {
  DisassociateResolverRuleCommand,
  DisassociateResolverRuleCommandInput,
  DisassociateResolverRuleCommandOutput,
} from "./commands/DisassociateResolverRuleCommand";
import {
  GetFirewallConfigCommand,
  GetFirewallConfigCommandInput,
  GetFirewallConfigCommandOutput,
} from "./commands/GetFirewallConfigCommand";
import {
  GetFirewallDomainListCommand,
  GetFirewallDomainListCommandInput,
  GetFirewallDomainListCommandOutput,
} from "./commands/GetFirewallDomainListCommand";
import {
  GetFirewallRuleGroupAssociationCommand,
  GetFirewallRuleGroupAssociationCommandInput,
  GetFirewallRuleGroupAssociationCommandOutput,
} from "./commands/GetFirewallRuleGroupAssociationCommand";
import {
  GetFirewallRuleGroupCommand,
  GetFirewallRuleGroupCommandInput,
  GetFirewallRuleGroupCommandOutput,
} from "./commands/GetFirewallRuleGroupCommand";
import {
  GetFirewallRuleGroupPolicyCommand,
  GetFirewallRuleGroupPolicyCommandInput,
  GetFirewallRuleGroupPolicyCommandOutput,
} from "./commands/GetFirewallRuleGroupPolicyCommand";
import {
  GetResolverConfigCommand,
  GetResolverConfigCommandInput,
  GetResolverConfigCommandOutput,
} from "./commands/GetResolverConfigCommand";
import {
  GetResolverDnssecConfigCommand,
  GetResolverDnssecConfigCommandInput,
  GetResolverDnssecConfigCommandOutput,
} from "./commands/GetResolverDnssecConfigCommand";
import {
  GetResolverEndpointCommand,
  GetResolverEndpointCommandInput,
  GetResolverEndpointCommandOutput,
} from "./commands/GetResolverEndpointCommand";
import {
  GetResolverQueryLogConfigAssociationCommand,
  GetResolverQueryLogConfigAssociationCommandInput,
  GetResolverQueryLogConfigAssociationCommandOutput,
} from "./commands/GetResolverQueryLogConfigAssociationCommand";
import {
  GetResolverQueryLogConfigCommand,
  GetResolverQueryLogConfigCommandInput,
  GetResolverQueryLogConfigCommandOutput,
} from "./commands/GetResolverQueryLogConfigCommand";
import {
  GetResolverQueryLogConfigPolicyCommand,
  GetResolverQueryLogConfigPolicyCommandInput,
  GetResolverQueryLogConfigPolicyCommandOutput,
} from "./commands/GetResolverQueryLogConfigPolicyCommand";
import {
  GetResolverRuleAssociationCommand,
  GetResolverRuleAssociationCommandInput,
  GetResolverRuleAssociationCommandOutput,
} from "./commands/GetResolverRuleAssociationCommand";
import {
  GetResolverRuleCommand,
  GetResolverRuleCommandInput,
  GetResolverRuleCommandOutput,
} from "./commands/GetResolverRuleCommand";
import {
  GetResolverRulePolicyCommand,
  GetResolverRulePolicyCommandInput,
  GetResolverRulePolicyCommandOutput,
} from "./commands/GetResolverRulePolicyCommand";
import {
  ImportFirewallDomainsCommand,
  ImportFirewallDomainsCommandInput,
  ImportFirewallDomainsCommandOutput,
} from "./commands/ImportFirewallDomainsCommand";
import {
  ListFirewallConfigsCommand,
  ListFirewallConfigsCommandInput,
  ListFirewallConfigsCommandOutput,
} from "./commands/ListFirewallConfigsCommand";
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
  ListFirewallRuleGroupAssociationsCommand,
  ListFirewallRuleGroupAssociationsCommandInput,
  ListFirewallRuleGroupAssociationsCommandOutput,
} from "./commands/ListFirewallRuleGroupAssociationsCommand";
import {
  ListFirewallRuleGroupsCommand,
  ListFirewallRuleGroupsCommandInput,
  ListFirewallRuleGroupsCommandOutput,
} from "./commands/ListFirewallRuleGroupsCommand";
import {
  ListFirewallRulesCommand,
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput,
} from "./commands/ListFirewallRulesCommand";
import {
  ListResolverConfigsCommand,
  ListResolverConfigsCommandInput,
  ListResolverConfigsCommandOutput,
} from "./commands/ListResolverConfigsCommand";
import {
  ListResolverDnssecConfigsCommand,
  ListResolverDnssecConfigsCommandInput,
  ListResolverDnssecConfigsCommandOutput,
} from "./commands/ListResolverDnssecConfigsCommand";
import {
  ListResolverEndpointIpAddressesCommand,
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput,
} from "./commands/ListResolverEndpointIpAddressesCommand";
import {
  ListResolverEndpointsCommand,
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput,
} from "./commands/ListResolverEndpointsCommand";
import {
  ListResolverQueryLogConfigAssociationsCommand,
  ListResolverQueryLogConfigAssociationsCommandInput,
  ListResolverQueryLogConfigAssociationsCommandOutput,
} from "./commands/ListResolverQueryLogConfigAssociationsCommand";
import {
  ListResolverQueryLogConfigsCommand,
  ListResolverQueryLogConfigsCommandInput,
  ListResolverQueryLogConfigsCommandOutput,
} from "./commands/ListResolverQueryLogConfigsCommand";
import {
  ListResolverRuleAssociationsCommand,
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput,
} from "./commands/ListResolverRuleAssociationsCommand";
import {
  ListResolverRulesCommand,
  ListResolverRulesCommandInput,
  ListResolverRulesCommandOutput,
} from "./commands/ListResolverRulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutFirewallRuleGroupPolicyCommand,
  PutFirewallRuleGroupPolicyCommandInput,
  PutFirewallRuleGroupPolicyCommandOutput,
} from "./commands/PutFirewallRuleGroupPolicyCommand";
import {
  PutResolverQueryLogConfigPolicyCommand,
  PutResolverQueryLogConfigPolicyCommandInput,
  PutResolverQueryLogConfigPolicyCommandOutput,
} from "./commands/PutResolverQueryLogConfigPolicyCommand";
import {
  PutResolverRulePolicyCommand,
  PutResolverRulePolicyCommandInput,
  PutResolverRulePolicyCommandOutput,
} from "./commands/PutResolverRulePolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateFirewallConfigCommand,
  UpdateFirewallConfigCommandInput,
  UpdateFirewallConfigCommandOutput,
} from "./commands/UpdateFirewallConfigCommand";
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
  UpdateFirewallRuleGroupAssociationCommand,
  UpdateFirewallRuleGroupAssociationCommandInput,
  UpdateFirewallRuleGroupAssociationCommandOutput,
} from "./commands/UpdateFirewallRuleGroupAssociationCommand";
import {
  UpdateResolverConfigCommand,
  UpdateResolverConfigCommandInput,
  UpdateResolverConfigCommandOutput,
} from "./commands/UpdateResolverConfigCommand";
import {
  UpdateResolverDnssecConfigCommand,
  UpdateResolverDnssecConfigCommandInput,
  UpdateResolverDnssecConfigCommandOutput,
} from "./commands/UpdateResolverDnssecConfigCommand";
import {
  UpdateResolverEndpointCommand,
  UpdateResolverEndpointCommandInput,
  UpdateResolverEndpointCommandOutput,
} from "./commands/UpdateResolverEndpointCommand";
import {
  UpdateResolverRuleCommand,
  UpdateResolverRuleCommandInput,
  UpdateResolverRuleCommandOutput,
} from "./commands/UpdateResolverRuleCommand";
import { Route53ResolverClient, Route53ResolverClientConfig } from "./Route53ResolverClient";

const commands = {
  AssociateFirewallRuleGroupCommand,
  AssociateResolverEndpointIpAddressCommand,
  AssociateResolverQueryLogConfigCommand,
  AssociateResolverRuleCommand,
  CreateFirewallDomainListCommand,
  CreateFirewallRuleCommand,
  CreateFirewallRuleGroupCommand,
  CreateResolverEndpointCommand,
  CreateResolverQueryLogConfigCommand,
  CreateResolverRuleCommand,
  DeleteFirewallDomainListCommand,
  DeleteFirewallRuleCommand,
  DeleteFirewallRuleGroupCommand,
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
  UpdateResolverConfigCommand,
  UpdateResolverDnssecConfigCommand,
  UpdateResolverEndpointCommand,
  UpdateResolverRuleCommand,
};

export interface Route53Resolver {
  /**
   * @see {@link AssociateFirewallRuleGroupCommand}
   */
  associateFirewallRuleGroup(
    args: AssociateFirewallRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFirewallRuleGroupCommandOutput>;
  associateFirewallRuleGroup(
    args: AssociateFirewallRuleGroupCommandInput,
    cb: (err: any, data?: AssociateFirewallRuleGroupCommandOutput) => void
  ): void;
  associateFirewallRuleGroup(
    args: AssociateFirewallRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFirewallRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResolverEndpointIpAddressCommand}
   */
  associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResolverEndpointIpAddressCommandOutput>;
  associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    cb: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void
  ): void;
  associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResolverQueryLogConfigCommand}
   */
  associateResolverQueryLogConfig(
    args: AssociateResolverQueryLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResolverQueryLogConfigCommandOutput>;
  associateResolverQueryLogConfig(
    args: AssociateResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: AssociateResolverQueryLogConfigCommandOutput) => void
  ): void;
  associateResolverQueryLogConfig(
    args: AssociateResolverQueryLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResolverQueryLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResolverRuleCommand}
   */
  associateResolverRule(
    args: AssociateResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResolverRuleCommandOutput>;
  associateResolverRule(
    args: AssociateResolverRuleCommandInput,
    cb: (err: any, data?: AssociateResolverRuleCommandOutput) => void
  ): void;
  associateResolverRule(
    args: AssociateResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResolverRuleCommandOutput) => void
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
   * @see {@link CreateFirewallRuleGroupCommand}
   */
  createFirewallRuleGroup(
    args: CreateFirewallRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallRuleGroupCommandOutput>;
  createFirewallRuleGroup(
    args: CreateFirewallRuleGroupCommandInput,
    cb: (err: any, data?: CreateFirewallRuleGroupCommandOutput) => void
  ): void;
  createFirewallRuleGroup(
    args: CreateFirewallRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFirewallRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResolverEndpointCommand}
   */
  createResolverEndpoint(
    args: CreateResolverEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResolverEndpointCommandOutput>;
  createResolverEndpoint(
    args: CreateResolverEndpointCommandInput,
    cb: (err: any, data?: CreateResolverEndpointCommandOutput) => void
  ): void;
  createResolverEndpoint(
    args: CreateResolverEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResolverEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResolverQueryLogConfigCommand}
   */
  createResolverQueryLogConfig(
    args: CreateResolverQueryLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResolverQueryLogConfigCommandOutput>;
  createResolverQueryLogConfig(
    args: CreateResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: CreateResolverQueryLogConfigCommandOutput) => void
  ): void;
  createResolverQueryLogConfig(
    args: CreateResolverQueryLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResolverQueryLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResolverRuleCommand}
   */
  createResolverRule(
    args: CreateResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResolverRuleCommandOutput>;
  createResolverRule(
    args: CreateResolverRuleCommandInput,
    cb: (err: any, data?: CreateResolverRuleCommandOutput) => void
  ): void;
  createResolverRule(
    args: CreateResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResolverRuleCommandOutput) => void
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
   * @see {@link DeleteFirewallRuleGroupCommand}
   */
  deleteFirewallRuleGroup(
    args: DeleteFirewallRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallRuleGroupCommandOutput>;
  deleteFirewallRuleGroup(
    args: DeleteFirewallRuleGroupCommandInput,
    cb: (err: any, data?: DeleteFirewallRuleGroupCommandOutput) => void
  ): void;
  deleteFirewallRuleGroup(
    args: DeleteFirewallRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResolverEndpointCommand}
   */
  deleteResolverEndpoint(
    args: DeleteResolverEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResolverEndpointCommandOutput>;
  deleteResolverEndpoint(
    args: DeleteResolverEndpointCommandInput,
    cb: (err: any, data?: DeleteResolverEndpointCommandOutput) => void
  ): void;
  deleteResolverEndpoint(
    args: DeleteResolverEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResolverEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResolverQueryLogConfigCommand}
   */
  deleteResolverQueryLogConfig(
    args: DeleteResolverQueryLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResolverQueryLogConfigCommandOutput>;
  deleteResolverQueryLogConfig(
    args: DeleteResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: DeleteResolverQueryLogConfigCommandOutput) => void
  ): void;
  deleteResolverQueryLogConfig(
    args: DeleteResolverQueryLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResolverQueryLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResolverRuleCommand}
   */
  deleteResolverRule(
    args: DeleteResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResolverRuleCommandOutput>;
  deleteResolverRule(
    args: DeleteResolverRuleCommandInput,
    cb: (err: any, data?: DeleteResolverRuleCommandOutput) => void
  ): void;
  deleteResolverRule(
    args: DeleteResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResolverRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFirewallRuleGroupCommand}
   */
  disassociateFirewallRuleGroup(
    args: DisassociateFirewallRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFirewallRuleGroupCommandOutput>;
  disassociateFirewallRuleGroup(
    args: DisassociateFirewallRuleGroupCommandInput,
    cb: (err: any, data?: DisassociateFirewallRuleGroupCommandOutput) => void
  ): void;
  disassociateFirewallRuleGroup(
    args: DisassociateFirewallRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFirewallRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResolverEndpointIpAddressCommand}
   */
  disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResolverEndpointIpAddressCommandOutput>;
  disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    cb: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void
  ): void;
  disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResolverQueryLogConfigCommand}
   */
  disassociateResolverQueryLogConfig(
    args: DisassociateResolverQueryLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResolverQueryLogConfigCommandOutput>;
  disassociateResolverQueryLogConfig(
    args: DisassociateResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: DisassociateResolverQueryLogConfigCommandOutput) => void
  ): void;
  disassociateResolverQueryLogConfig(
    args: DisassociateResolverQueryLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResolverQueryLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResolverRuleCommand}
   */
  disassociateResolverRule(
    args: DisassociateResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResolverRuleCommandOutput>;
  disassociateResolverRule(
    args: DisassociateResolverRuleCommandInput,
    cb: (err: any, data?: DisassociateResolverRuleCommandOutput) => void
  ): void;
  disassociateResolverRule(
    args: DisassociateResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResolverRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFirewallConfigCommand}
   */
  getFirewallConfig(
    args: GetFirewallConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallConfigCommandOutput>;
  getFirewallConfig(
    args: GetFirewallConfigCommandInput,
    cb: (err: any, data?: GetFirewallConfigCommandOutput) => void
  ): void;
  getFirewallConfig(
    args: GetFirewallConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallConfigCommandOutput) => void
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
   * @see {@link GetFirewallRuleGroupCommand}
   */
  getFirewallRuleGroup(
    args: GetFirewallRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallRuleGroupCommandOutput>;
  getFirewallRuleGroup(
    args: GetFirewallRuleGroupCommandInput,
    cb: (err: any, data?: GetFirewallRuleGroupCommandOutput) => void
  ): void;
  getFirewallRuleGroup(
    args: GetFirewallRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFirewallRuleGroupAssociationCommand}
   */
  getFirewallRuleGroupAssociation(
    args: GetFirewallRuleGroupAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallRuleGroupAssociationCommandOutput>;
  getFirewallRuleGroupAssociation(
    args: GetFirewallRuleGroupAssociationCommandInput,
    cb: (err: any, data?: GetFirewallRuleGroupAssociationCommandOutput) => void
  ): void;
  getFirewallRuleGroupAssociation(
    args: GetFirewallRuleGroupAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallRuleGroupAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFirewallRuleGroupPolicyCommand}
   */
  getFirewallRuleGroupPolicy(
    args: GetFirewallRuleGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallRuleGroupPolicyCommandOutput>;
  getFirewallRuleGroupPolicy(
    args: GetFirewallRuleGroupPolicyCommandInput,
    cb: (err: any, data?: GetFirewallRuleGroupPolicyCommandOutput) => void
  ): void;
  getFirewallRuleGroupPolicy(
    args: GetFirewallRuleGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallRuleGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverConfigCommand}
   */
  getResolverConfig(
    args: GetResolverConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverConfigCommandOutput>;
  getResolverConfig(
    args: GetResolverConfigCommandInput,
    cb: (err: any, data?: GetResolverConfigCommandOutput) => void
  ): void;
  getResolverConfig(
    args: GetResolverConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverDnssecConfigCommand}
   */
  getResolverDnssecConfig(
    args: GetResolverDnssecConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverDnssecConfigCommandOutput>;
  getResolverDnssecConfig(
    args: GetResolverDnssecConfigCommandInput,
    cb: (err: any, data?: GetResolverDnssecConfigCommandOutput) => void
  ): void;
  getResolverDnssecConfig(
    args: GetResolverDnssecConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverDnssecConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverEndpointCommand}
   */
  getResolverEndpoint(
    args: GetResolverEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverEndpointCommandOutput>;
  getResolverEndpoint(
    args: GetResolverEndpointCommandInput,
    cb: (err: any, data?: GetResolverEndpointCommandOutput) => void
  ): void;
  getResolverEndpoint(
    args: GetResolverEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverQueryLogConfigCommand}
   */
  getResolverQueryLogConfig(
    args: GetResolverQueryLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverQueryLogConfigCommandOutput>;
  getResolverQueryLogConfig(
    args: GetResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: GetResolverQueryLogConfigCommandOutput) => void
  ): void;
  getResolverQueryLogConfig(
    args: GetResolverQueryLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverQueryLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverQueryLogConfigAssociationCommand}
   */
  getResolverQueryLogConfigAssociation(
    args: GetResolverQueryLogConfigAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverQueryLogConfigAssociationCommandOutput>;
  getResolverQueryLogConfigAssociation(
    args: GetResolverQueryLogConfigAssociationCommandInput,
    cb: (err: any, data?: GetResolverQueryLogConfigAssociationCommandOutput) => void
  ): void;
  getResolverQueryLogConfigAssociation(
    args: GetResolverQueryLogConfigAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverQueryLogConfigAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverQueryLogConfigPolicyCommand}
   */
  getResolverQueryLogConfigPolicy(
    args: GetResolverQueryLogConfigPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverQueryLogConfigPolicyCommandOutput>;
  getResolverQueryLogConfigPolicy(
    args: GetResolverQueryLogConfigPolicyCommandInput,
    cb: (err: any, data?: GetResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;
  getResolverQueryLogConfigPolicy(
    args: GetResolverQueryLogConfigPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverRuleCommand}
   */
  getResolverRule(
    args: GetResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverRuleCommandOutput>;
  getResolverRule(args: GetResolverRuleCommandInput, cb: (err: any, data?: GetResolverRuleCommandOutput) => void): void;
  getResolverRule(
    args: GetResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverRuleAssociationCommand}
   */
  getResolverRuleAssociation(
    args: GetResolverRuleAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverRuleAssociationCommandOutput>;
  getResolverRuleAssociation(
    args: GetResolverRuleAssociationCommandInput,
    cb: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void
  ): void;
  getResolverRuleAssociation(
    args: GetResolverRuleAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverRulePolicyCommand}
   */
  getResolverRulePolicy(
    args: GetResolverRulePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverRulePolicyCommandOutput>;
  getResolverRulePolicy(
    args: GetResolverRulePolicyCommandInput,
    cb: (err: any, data?: GetResolverRulePolicyCommandOutput) => void
  ): void;
  getResolverRulePolicy(
    args: GetResolverRulePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverRulePolicyCommandOutput) => void
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
   * @see {@link ListFirewallConfigsCommand}
   */
  listFirewallConfigs(
    args: ListFirewallConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallConfigsCommandOutput>;
  listFirewallConfigs(
    args: ListFirewallConfigsCommandInput,
    cb: (err: any, data?: ListFirewallConfigsCommandOutput) => void
  ): void;
  listFirewallConfigs(
    args: ListFirewallConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallDomainListsCommand}
   */
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
   * @see {@link ListFirewallRuleGroupAssociationsCommand}
   */
  listFirewallRuleGroupAssociations(
    args: ListFirewallRuleGroupAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallRuleGroupAssociationsCommandOutput>;
  listFirewallRuleGroupAssociations(
    args: ListFirewallRuleGroupAssociationsCommandInput,
    cb: (err: any, data?: ListFirewallRuleGroupAssociationsCommandOutput) => void
  ): void;
  listFirewallRuleGroupAssociations(
    args: ListFirewallRuleGroupAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallRuleGroupAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallRuleGroupsCommand}
   */
  listFirewallRuleGroups(
    args: ListFirewallRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallRuleGroupsCommandOutput>;
  listFirewallRuleGroups(
    args: ListFirewallRuleGroupsCommandInput,
    cb: (err: any, data?: ListFirewallRuleGroupsCommandOutput) => void
  ): void;
  listFirewallRuleGroups(
    args: ListFirewallRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallRuleGroupsCommandOutput) => void
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
   * @see {@link ListResolverConfigsCommand}
   */
  listResolverConfigs(
    args: ListResolverConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverConfigsCommandOutput>;
  listResolverConfigs(
    args: ListResolverConfigsCommandInput,
    cb: (err: any, data?: ListResolverConfigsCommandOutput) => void
  ): void;
  listResolverConfigs(
    args: ListResolverConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverDnssecConfigsCommand}
   */
  listResolverDnssecConfigs(
    args: ListResolverDnssecConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverDnssecConfigsCommandOutput>;
  listResolverDnssecConfigs(
    args: ListResolverDnssecConfigsCommandInput,
    cb: (err: any, data?: ListResolverDnssecConfigsCommandOutput) => void
  ): void;
  listResolverDnssecConfigs(
    args: ListResolverDnssecConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverDnssecConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverEndpointIpAddressesCommand}
   */
  listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverEndpointIpAddressesCommandOutput>;
  listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    cb: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void
  ): void;
  listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverEndpointsCommand}
   */
  listResolverEndpoints(
    args: ListResolverEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverEndpointsCommandOutput>;
  listResolverEndpoints(
    args: ListResolverEndpointsCommandInput,
    cb: (err: any, data?: ListResolverEndpointsCommandOutput) => void
  ): void;
  listResolverEndpoints(
    args: ListResolverEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverQueryLogConfigAssociationsCommand}
   */
  listResolverQueryLogConfigAssociations(
    args: ListResolverQueryLogConfigAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverQueryLogConfigAssociationsCommandOutput>;
  listResolverQueryLogConfigAssociations(
    args: ListResolverQueryLogConfigAssociationsCommandInput,
    cb: (err: any, data?: ListResolverQueryLogConfigAssociationsCommandOutput) => void
  ): void;
  listResolverQueryLogConfigAssociations(
    args: ListResolverQueryLogConfigAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverQueryLogConfigAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverQueryLogConfigsCommand}
   */
  listResolverQueryLogConfigs(
    args: ListResolverQueryLogConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverQueryLogConfigsCommandOutput>;
  listResolverQueryLogConfigs(
    args: ListResolverQueryLogConfigsCommandInput,
    cb: (err: any, data?: ListResolverQueryLogConfigsCommandOutput) => void
  ): void;
  listResolverQueryLogConfigs(
    args: ListResolverQueryLogConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverQueryLogConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverRuleAssociationsCommand}
   */
  listResolverRuleAssociations(
    args: ListResolverRuleAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverRuleAssociationsCommandOutput>;
  listResolverRuleAssociations(
    args: ListResolverRuleAssociationsCommandInput,
    cb: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void
  ): void;
  listResolverRuleAssociations(
    args: ListResolverRuleAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolverRulesCommand}
   */
  listResolverRules(
    args: ListResolverRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverRulesCommandOutput>;
  listResolverRules(
    args: ListResolverRulesCommandInput,
    cb: (err: any, data?: ListResolverRulesCommandOutput) => void
  ): void;
  listResolverRules(
    args: ListResolverRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverRulesCommandOutput) => void
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
   * @see {@link PutFirewallRuleGroupPolicyCommand}
   */
  putFirewallRuleGroupPolicy(
    args: PutFirewallRuleGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFirewallRuleGroupPolicyCommandOutput>;
  putFirewallRuleGroupPolicy(
    args: PutFirewallRuleGroupPolicyCommandInput,
    cb: (err: any, data?: PutFirewallRuleGroupPolicyCommandOutput) => void
  ): void;
  putFirewallRuleGroupPolicy(
    args: PutFirewallRuleGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFirewallRuleGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResolverQueryLogConfigPolicyCommand}
   */
  putResolverQueryLogConfigPolicy(
    args: PutResolverQueryLogConfigPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResolverQueryLogConfigPolicyCommandOutput>;
  putResolverQueryLogConfigPolicy(
    args: PutResolverQueryLogConfigPolicyCommandInput,
    cb: (err: any, data?: PutResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;
  putResolverQueryLogConfigPolicy(
    args: PutResolverQueryLogConfigPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResolverRulePolicyCommand}
   */
  putResolverRulePolicy(
    args: PutResolverRulePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResolverRulePolicyCommandOutput>;
  putResolverRulePolicy(
    args: PutResolverRulePolicyCommandInput,
    cb: (err: any, data?: PutResolverRulePolicyCommandOutput) => void
  ): void;
  putResolverRulePolicy(
    args: PutResolverRulePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResolverRulePolicyCommandOutput) => void
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
   * @see {@link UpdateFirewallConfigCommand}
   */
  updateFirewallConfig(
    args: UpdateFirewallConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallConfigCommandOutput>;
  updateFirewallConfig(
    args: UpdateFirewallConfigCommandInput,
    cb: (err: any, data?: UpdateFirewallConfigCommandOutput) => void
  ): void;
  updateFirewallConfig(
    args: UpdateFirewallConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallConfigCommandOutput) => void
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
   * @see {@link UpdateFirewallRuleGroupAssociationCommand}
   */
  updateFirewallRuleGroupAssociation(
    args: UpdateFirewallRuleGroupAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallRuleGroupAssociationCommandOutput>;
  updateFirewallRuleGroupAssociation(
    args: UpdateFirewallRuleGroupAssociationCommandInput,
    cb: (err: any, data?: UpdateFirewallRuleGroupAssociationCommandOutput) => void
  ): void;
  updateFirewallRuleGroupAssociation(
    args: UpdateFirewallRuleGroupAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallRuleGroupAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverConfigCommand}
   */
  updateResolverConfig(
    args: UpdateResolverConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverConfigCommandOutput>;
  updateResolverConfig(
    args: UpdateResolverConfigCommandInput,
    cb: (err: any, data?: UpdateResolverConfigCommandOutput) => void
  ): void;
  updateResolverConfig(
    args: UpdateResolverConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverDnssecConfigCommand}
   */
  updateResolverDnssecConfig(
    args: UpdateResolverDnssecConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverDnssecConfigCommandOutput>;
  updateResolverDnssecConfig(
    args: UpdateResolverDnssecConfigCommandInput,
    cb: (err: any, data?: UpdateResolverDnssecConfigCommandOutput) => void
  ): void;
  updateResolverDnssecConfig(
    args: UpdateResolverDnssecConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverDnssecConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverEndpointCommand}
   */
  updateResolverEndpoint(
    args: UpdateResolverEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverEndpointCommandOutput>;
  updateResolverEndpoint(
    args: UpdateResolverEndpointCommandInput,
    cb: (err: any, data?: UpdateResolverEndpointCommandOutput) => void
  ): void;
  updateResolverEndpoint(
    args: UpdateResolverEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverRuleCommand}
   */
  updateResolverRule(
    args: UpdateResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverRuleCommandOutput>;
  updateResolverRule(
    args: UpdateResolverRuleCommandInput,
    cb: (err: any, data?: UpdateResolverRuleCommandOutput) => void
  ): void;
  updateResolverRule(
    args: UpdateResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverRuleCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class Route53Resolver extends Route53ResolverClient implements Route53Resolver {}
createAggregatedClient(commands, Route53Resolver);
