import { Route53ResolverClient } from "./Route53ResolverClient";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC
 * 			from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names
 * 			such as domain names for EC2 instances or Elastic Load Balancing load balancers.
 * 			Resolver performs recursive lookups against public name servers for all other domain
 * 			names.</p>
 *
 * 		       <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p>
 *
 * 		       <p>
 *             <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b>
 *          </p>
 *
 * 		       <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers
 * 			to easily resolve domain names for Amazon Web Services resources such as EC2 instances or records in a Route 53 private hosted zone.
 * 			For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers
 * 			on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *
 * 		       <p>
 *             <b>Conditionally forward queries from a VPC to resolvers on your network</b>
 *          </p>
 *
 * 		       <p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network.
 * 			To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward
 * 			(such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to.
 * 			If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match
 * 			(acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver
 * 			Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *
 * 		       <p>Like Amazon VPC, Resolver is Regional. In each Region where you have VPCs, you can choose
 * 			whether to forward queries from your VPCs to your network (outbound queries), from your
 * 			network to your VPCs (inbound queries), or both.</p>
 */
export class Route53Resolver extends Route53ResolverClient {
  /**
   * <p>Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. </p>
   */
  public associateFirewallRuleGroup(
    args: AssociateFirewallRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFirewallRuleGroupCommandOutput>;
  public associateFirewallRuleGroup(
    args: AssociateFirewallRuleGroupCommandInput,
    cb: (err: any, data?: AssociateFirewallRuleGroupCommandOutput) => void
  ): void;
  public associateFirewallRuleGroup(
    args: AssociateFirewallRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFirewallRuleGroupCommandOutput) => void
  ): void;
  public associateFirewallRuleGroup(
    args: AssociateFirewallRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateFirewallRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: AssociateFirewallRuleGroupCommandOutput) => void
  ): Promise<AssociateFirewallRuleGroupCommandOutput> | void {
    const command = new AssociateFirewallRuleGroupCommand(args);
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
   * <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address,
   * 			submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p>
   * 		       <p>To remove an IP address from an endpoint, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>.
   * 		</p>
   */
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResolverEndpointIpAddressCommandOutput>;
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    cb: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void
  ): void;
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void
  ): void;
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void),
    cb?: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void
  ): Promise<AssociateResolverEndpointIpAddressCommandOutput> | void {
    const command = new AssociateResolverEndpointIpAddressCommand(args);
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
   * <p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs
   * 			that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code>
   * 			request for each VPC.</p>
   *
   * 		       <note>
   *             <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p>
   *          </note>
   *
   * 		       <p>To remove a VPC from a query logging configuration, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.
   * 			</p>
   */
  public associateResolverQueryLogConfig(
    args: AssociateResolverQueryLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResolverQueryLogConfigCommandOutput>;
  public associateResolverQueryLogConfig(
    args: AssociateResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: AssociateResolverQueryLogConfigCommandOutput) => void
  ): void;
  public associateResolverQueryLogConfig(
    args: AssociateResolverQueryLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResolverQueryLogConfigCommandOutput) => void
  ): void;
  public associateResolverQueryLogConfig(
    args: AssociateResolverQueryLogConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateResolverQueryLogConfigCommandOutput) => void),
    cb?: (err: any, data?: AssociateResolverQueryLogConfigCommandOutput) => void
  ): Promise<AssociateResolverQueryLogConfigCommandOutput> | void {
    const command = new AssociateResolverQueryLogConfigCommand(args);
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
   * <p>Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries
   * 			for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the
   * 			IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. </p>
   */
  public associateResolverRule(
    args: AssociateResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResolverRuleCommandOutput>;
  public associateResolverRule(
    args: AssociateResolverRuleCommandInput,
    cb: (err: any, data?: AssociateResolverRuleCommandOutput) => void
  ): void;
  public associateResolverRule(
    args: AssociateResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResolverRuleCommandOutput) => void
  ): void;
  public associateResolverRule(
    args: AssociateResolverRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: AssociateResolverRuleCommandOutput) => void
  ): Promise<AssociateResolverRuleCommandOutput> | void {
    const command = new AssociateResolverRuleCommand(args);
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
   * <p>Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. </p>
   */
  public createFirewallDomainList(
    args: CreateFirewallDomainListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallDomainListCommandOutput>;
  public createFirewallDomainList(
    args: CreateFirewallDomainListCommandInput,
    cb: (err: any, data?: CreateFirewallDomainListCommandOutput) => void
  ): void;
  public createFirewallDomainList(
    args: CreateFirewallDomainListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFirewallDomainListCommandOutput) => void
  ): void;
  public createFirewallDomainList(
    args: CreateFirewallDomainListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFirewallDomainListCommandOutput) => void),
    cb?: (err: any, data?: CreateFirewallDomainListCommandOutput) => void
  ): Promise<CreateFirewallDomainListCommandOutput> | void {
    const command = new CreateFirewallDomainListCommand(args);
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
   * <p>Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.</p>
   */
  public createFirewallRule(
    args: CreateFirewallRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallRuleCommandOutput>;
  public createFirewallRule(
    args: CreateFirewallRuleCommandInput,
    cb: (err: any, data?: CreateFirewallRuleCommandOutput) => void
  ): void;
  public createFirewallRule(
    args: CreateFirewallRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFirewallRuleCommandOutput) => void
  ): void;
  public createFirewallRule(
    args: CreateFirewallRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFirewallRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateFirewallRuleCommandOutput) => void
  ): Promise<CreateFirewallRuleCommandOutput> | void {
    const command = new CreateFirewallRuleCommand(args);
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
   * <p>Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group
   *            by calling <a>CreateFirewallRule</a>. </p>
   */
  public createFirewallRuleGroup(
    args: CreateFirewallRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallRuleGroupCommandOutput>;
  public createFirewallRuleGroup(
    args: CreateFirewallRuleGroupCommandInput,
    cb: (err: any, data?: CreateFirewallRuleGroupCommandOutput) => void
  ): void;
  public createFirewallRuleGroup(
    args: CreateFirewallRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFirewallRuleGroupCommandOutput) => void
  ): void;
  public createFirewallRuleGroup(
    args: CreateFirewallRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFirewallRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateFirewallRuleGroupCommandOutput) => void
  ): Promise<CreateFirewallRuleGroupCommandOutput> | void {
    const command = new CreateFirewallRuleGroupCommand(args);
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
   * <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p>
   * 		       <ul>
   *             <li>
   *                <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC
   * 				from your network.</p>
   *             </li>
   *             <li>
   *                <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC
   * 				to your network.</p>
   *             </li>
   *          </ul>
   */
  public createResolverEndpoint(
    args: CreateResolverEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResolverEndpointCommandOutput>;
  public createResolverEndpoint(
    args: CreateResolverEndpointCommandInput,
    cb: (err: any, data?: CreateResolverEndpointCommandOutput) => void
  ): void;
  public createResolverEndpoint(
    args: CreateResolverEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResolverEndpointCommandOutput) => void
  ): void;
  public createResolverEndpoint(
    args: CreateResolverEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResolverEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateResolverEndpointCommandOutput) => void
  ): Promise<CreateResolverEndpointCommandOutput> | void {
    const command = new CreateResolverEndpointCommand(args);
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
   * <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs.
   * 			Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p>
   *
   * 		       <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p>
   *
   * 		       <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts
   * 			can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all
   * 			VPCs that are associated with the configuration.</p>
   */
  public createResolverQueryLogConfig(
    args: CreateResolverQueryLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResolverQueryLogConfigCommandOutput>;
  public createResolverQueryLogConfig(
    args: CreateResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: CreateResolverQueryLogConfigCommandOutput) => void
  ): void;
  public createResolverQueryLogConfig(
    args: CreateResolverQueryLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResolverQueryLogConfigCommandOutput) => void
  ): void;
  public createResolverQueryLogConfig(
    args: CreateResolverQueryLogConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResolverQueryLogConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateResolverQueryLogConfigCommandOutput) => void
  ): Promise<CreateResolverQueryLogConfigCommandOutput> | void {
    const command = new CreateResolverQueryLogConfigCommand(args);
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
   * <p>For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through,
   * 			one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.</p>
   */
  public createResolverRule(
    args: CreateResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResolverRuleCommandOutput>;
  public createResolverRule(
    args: CreateResolverRuleCommandInput,
    cb: (err: any, data?: CreateResolverRuleCommandOutput) => void
  ): void;
  public createResolverRule(
    args: CreateResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResolverRuleCommandOutput) => void
  ): void;
  public createResolverRule(
    args: CreateResolverRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateResolverRuleCommandOutput) => void
  ): Promise<CreateResolverRuleCommandOutput> | void {
    const command = new CreateResolverRuleCommand(args);
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
   * <p>Deletes the specified domain list. </p>
   */
  public deleteFirewallDomainList(
    args: DeleteFirewallDomainListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallDomainListCommandOutput>;
  public deleteFirewallDomainList(
    args: DeleteFirewallDomainListCommandInput,
    cb: (err: any, data?: DeleteFirewallDomainListCommandOutput) => void
  ): void;
  public deleteFirewallDomainList(
    args: DeleteFirewallDomainListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallDomainListCommandOutput) => void
  ): void;
  public deleteFirewallDomainList(
    args: DeleteFirewallDomainListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFirewallDomainListCommandOutput) => void),
    cb?: (err: any, data?: DeleteFirewallDomainListCommandOutput) => void
  ): Promise<DeleteFirewallDomainListCommandOutput> | void {
    const command = new DeleteFirewallDomainListCommand(args);
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
   * <p>Deletes the specified firewall rule.</p>
   */
  public deleteFirewallRule(
    args: DeleteFirewallRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallRuleCommandOutput>;
  public deleteFirewallRule(
    args: DeleteFirewallRuleCommandInput,
    cb: (err: any, data?: DeleteFirewallRuleCommandOutput) => void
  ): void;
  public deleteFirewallRule(
    args: DeleteFirewallRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallRuleCommandOutput) => void
  ): void;
  public deleteFirewallRule(
    args: DeleteFirewallRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFirewallRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteFirewallRuleCommandOutput) => void
  ): Promise<DeleteFirewallRuleCommandOutput> | void {
    const command = new DeleteFirewallRuleCommand(args);
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
   * <p>Deletes the specified firewall rule group. </p>
   */
  public deleteFirewallRuleGroup(
    args: DeleteFirewallRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallRuleGroupCommandOutput>;
  public deleteFirewallRuleGroup(
    args: DeleteFirewallRuleGroupCommandInput,
    cb: (err: any, data?: DeleteFirewallRuleGroupCommandOutput) => void
  ): void;
  public deleteFirewallRuleGroup(
    args: DeleteFirewallRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallRuleGroupCommandOutput) => void
  ): void;
  public deleteFirewallRuleGroup(
    args: DeleteFirewallRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFirewallRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteFirewallRuleGroupCommandOutput) => void
  ): Promise<DeleteFirewallRuleGroupCommandOutput> | void {
    const command = new DeleteFirewallRuleGroupCommand(args);
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
   * <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound
   * 			Resolver endpoint:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>Inbound</b>: DNS queries from your network are no longer routed
   * 				to the DNS service for the specified VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p>
   *             </li>
   *          </ul>
   */
  public deleteResolverEndpoint(
    args: DeleteResolverEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResolverEndpointCommandOutput>;
  public deleteResolverEndpoint(
    args: DeleteResolverEndpointCommandInput,
    cb: (err: any, data?: DeleteResolverEndpointCommandOutput) => void
  ): void;
  public deleteResolverEndpoint(
    args: DeleteResolverEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResolverEndpointCommandOutput) => void
  ): void;
  public deleteResolverEndpoint(
    args: DeleteResolverEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResolverEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteResolverEndpointCommandOutput) => void
  ): Promise<DeleteResolverEndpointCommandOutput> | void {
    const command = new DeleteResolverEndpointCommand(args);
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
   * <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are
   * 			associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and
   * 			the other accounts have associated VPCs with the shared configuration.</p>
   *
   * 		       <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p>
   *
   * 		       <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing
   * 			the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs
   * 			that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically
   * 			disassociated from the configuration.</p>
   */
  public deleteResolverQueryLogConfig(
    args: DeleteResolverQueryLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResolverQueryLogConfigCommandOutput>;
  public deleteResolverQueryLogConfig(
    args: DeleteResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: DeleteResolverQueryLogConfigCommandOutput) => void
  ): void;
  public deleteResolverQueryLogConfig(
    args: DeleteResolverQueryLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResolverQueryLogConfigCommandOutput) => void
  ): void;
  public deleteResolverQueryLogConfig(
    args: DeleteResolverQueryLogConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResolverQueryLogConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteResolverQueryLogConfigCommandOutput) => void
  ): Promise<DeleteResolverQueryLogConfigCommandOutput> | void {
    const command = new DeleteResolverQueryLogConfigCommand(args);
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
   * <p>Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you
   * 			associated the Resolver rule with. For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.</p>
   */
  public deleteResolverRule(
    args: DeleteResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResolverRuleCommandOutput>;
  public deleteResolverRule(
    args: DeleteResolverRuleCommandInput,
    cb: (err: any, data?: DeleteResolverRuleCommandOutput) => void
  ): void;
  public deleteResolverRule(
    args: DeleteResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResolverRuleCommandOutput) => void
  ): void;
  public deleteResolverRule(
    args: DeleteResolverRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteResolverRuleCommandOutput) => void
  ): Promise<DeleteResolverRuleCommandOutput> | void {
    const command = new DeleteResolverRuleCommand(args);
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
   * <p>Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. </p>
   */
  public disassociateFirewallRuleGroup(
    args: DisassociateFirewallRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFirewallRuleGroupCommandOutput>;
  public disassociateFirewallRuleGroup(
    args: DisassociateFirewallRuleGroupCommandInput,
    cb: (err: any, data?: DisassociateFirewallRuleGroupCommandOutput) => void
  ): void;
  public disassociateFirewallRuleGroup(
    args: DisassociateFirewallRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFirewallRuleGroupCommandOutput) => void
  ): void;
  public disassociateFirewallRuleGroup(
    args: DisassociateFirewallRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateFirewallRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: DisassociateFirewallRuleGroupCommandOutput) => void
  ): Promise<DisassociateFirewallRuleGroupCommandOutput> | void {
    const command = new DisassociateFirewallRuleGroupCommand(args);
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
   * <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address,
   * 			submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p>
   * 		       <p>To add an IP address to an endpoint, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>.
   * 		</p>
   */
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResolverEndpointIpAddressCommandOutput>;
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    cb: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void
  ): void;
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void
  ): void;
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void),
    cb?: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void
  ): Promise<DisassociateResolverEndpointIpAddressCommandOutput> | void {
    const command = new DisassociateResolverEndpointIpAddressCommand(args);
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
   * <p>Disassociates a VPC from a query logging configuration.</p>
   *
   * 		       <note>
   * 			         <p>Before you can delete a query logging configuration, you must first disassociate all VPCs
   * 				from the configuration. If you used Resource Access Manager (RAM) to share a
   * 				query logging configuration with other accounts, VPCs can be disassociated from the
   * 				configuration in the following ways:</p>
   * 			         <ul>
   *                <li>
   *                   <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p>
   *                </li>
   *                <li>
   *                   <p>You can stop sharing the configuration.</p>
   *                </li>
   *             </ul>
   * 		       </note>
   */
  public disassociateResolverQueryLogConfig(
    args: DisassociateResolverQueryLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResolverQueryLogConfigCommandOutput>;
  public disassociateResolverQueryLogConfig(
    args: DisassociateResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: DisassociateResolverQueryLogConfigCommandOutput) => void
  ): void;
  public disassociateResolverQueryLogConfig(
    args: DisassociateResolverQueryLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResolverQueryLogConfigCommandOutput) => void
  ): void;
  public disassociateResolverQueryLogConfig(
    args: DisassociateResolverQueryLogConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateResolverQueryLogConfigCommandOutput) => void),
    cb?: (err: any, data?: DisassociateResolverQueryLogConfigCommandOutput) => void
  ): Promise<DisassociateResolverQueryLogConfigCommandOutput> | void {
    const command = new DisassociateResolverQueryLogConfigCommand(args);
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
   * <p>Removes the association between a specified Resolver rule and a specified VPC.</p>
   * 		       <important>
   * 			         <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the
   * 				domain name that you specified in the Resolver rule. </p>
   * 		       </important>
   */
  public disassociateResolverRule(
    args: DisassociateResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResolverRuleCommandOutput>;
  public disassociateResolverRule(
    args: DisassociateResolverRuleCommandInput,
    cb: (err: any, data?: DisassociateResolverRuleCommandOutput) => void
  ): void;
  public disassociateResolverRule(
    args: DisassociateResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResolverRuleCommandOutput) => void
  ): void;
  public disassociateResolverRule(
    args: DisassociateResolverRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: DisassociateResolverRuleCommandOutput) => void
  ): Promise<DisassociateResolverRuleCommandOutput> | void {
    const command = new DisassociateResolverRuleCommand(args);
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
   * <p>Retrieves the configuration of the firewall behavior provided by DNS Firewall for a
   * 			single VPC from Amazon Virtual Private Cloud (Amazon VPC). </p>
   */
  public getFirewallConfig(
    args: GetFirewallConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallConfigCommandOutput>;
  public getFirewallConfig(
    args: GetFirewallConfigCommandInput,
    cb: (err: any, data?: GetFirewallConfigCommandOutput) => void
  ): void;
  public getFirewallConfig(
    args: GetFirewallConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallConfigCommandOutput) => void
  ): void;
  public getFirewallConfig(
    args: GetFirewallConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFirewallConfigCommandOutput) => void),
    cb?: (err: any, data?: GetFirewallConfigCommandOutput) => void
  ): Promise<GetFirewallConfigCommandOutput> | void {
    const command = new GetFirewallConfigCommand(args);
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
   * <p>Retrieves the specified firewall domain list.</p>
   */
  public getFirewallDomainList(
    args: GetFirewallDomainListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallDomainListCommandOutput>;
  public getFirewallDomainList(
    args: GetFirewallDomainListCommandInput,
    cb: (err: any, data?: GetFirewallDomainListCommandOutput) => void
  ): void;
  public getFirewallDomainList(
    args: GetFirewallDomainListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallDomainListCommandOutput) => void
  ): void;
  public getFirewallDomainList(
    args: GetFirewallDomainListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFirewallDomainListCommandOutput) => void),
    cb?: (err: any, data?: GetFirewallDomainListCommandOutput) => void
  ): Promise<GetFirewallDomainListCommandOutput> | void {
    const command = new GetFirewallDomainListCommand(args);
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
   * <p>Retrieves the specified firewall rule group. </p>
   */
  public getFirewallRuleGroup(
    args: GetFirewallRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallRuleGroupCommandOutput>;
  public getFirewallRuleGroup(
    args: GetFirewallRuleGroupCommandInput,
    cb: (err: any, data?: GetFirewallRuleGroupCommandOutput) => void
  ): void;
  public getFirewallRuleGroup(
    args: GetFirewallRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallRuleGroupCommandOutput) => void
  ): void;
  public getFirewallRuleGroup(
    args: GetFirewallRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFirewallRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: GetFirewallRuleGroupCommandOutput) => void
  ): Promise<GetFirewallRuleGroupCommandOutput> | void {
    const command = new GetFirewallRuleGroupCommand(args);
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
   * <p>Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.</p>
   */
  public getFirewallRuleGroupAssociation(
    args: GetFirewallRuleGroupAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallRuleGroupAssociationCommandOutput>;
  public getFirewallRuleGroupAssociation(
    args: GetFirewallRuleGroupAssociationCommandInput,
    cb: (err: any, data?: GetFirewallRuleGroupAssociationCommandOutput) => void
  ): void;
  public getFirewallRuleGroupAssociation(
    args: GetFirewallRuleGroupAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallRuleGroupAssociationCommandOutput) => void
  ): void;
  public getFirewallRuleGroupAssociation(
    args: GetFirewallRuleGroupAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFirewallRuleGroupAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetFirewallRuleGroupAssociationCommandOutput) => void
  ): Promise<GetFirewallRuleGroupAssociationCommandOutput> | void {
    const command = new GetFirewallRuleGroupAssociationCommand(args);
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
   * <p>Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the
   *        	specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). </p>
   */
  public getFirewallRuleGroupPolicy(
    args: GetFirewallRuleGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFirewallRuleGroupPolicyCommandOutput>;
  public getFirewallRuleGroupPolicy(
    args: GetFirewallRuleGroupPolicyCommandInput,
    cb: (err: any, data?: GetFirewallRuleGroupPolicyCommandOutput) => void
  ): void;
  public getFirewallRuleGroupPolicy(
    args: GetFirewallRuleGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFirewallRuleGroupPolicyCommandOutput) => void
  ): void;
  public getFirewallRuleGroupPolicy(
    args: GetFirewallRuleGroupPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFirewallRuleGroupPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetFirewallRuleGroupPolicyCommandOutput) => void
  ): Promise<GetFirewallRuleGroupPolicyCommandOutput> | void {
    const command = new GetFirewallRuleGroupPolicyCommand(args);
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
   * <p>Gets DNSSEC validation information for a specified resource.</p>
   */
  public getResolverDnssecConfig(
    args: GetResolverDnssecConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverDnssecConfigCommandOutput>;
  public getResolverDnssecConfig(
    args: GetResolverDnssecConfigCommandInput,
    cb: (err: any, data?: GetResolverDnssecConfigCommandOutput) => void
  ): void;
  public getResolverDnssecConfig(
    args: GetResolverDnssecConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverDnssecConfigCommandOutput) => void
  ): void;
  public getResolverDnssecConfig(
    args: GetResolverDnssecConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResolverDnssecConfigCommandOutput) => void),
    cb?: (err: any, data?: GetResolverDnssecConfigCommandOutput) => void
  ): Promise<GetResolverDnssecConfigCommandOutput> | void {
    const command = new GetResolverDnssecConfigCommand(args);
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
   * <p>Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the
   * 			current status of the endpoint.</p>
   */
  public getResolverEndpoint(
    args: GetResolverEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverEndpointCommandOutput>;
  public getResolverEndpoint(
    args: GetResolverEndpointCommandInput,
    cb: (err: any, data?: GetResolverEndpointCommandOutput) => void
  ): void;
  public getResolverEndpoint(
    args: GetResolverEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverEndpointCommandOutput) => void
  ): void;
  public getResolverEndpoint(
    args: GetResolverEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResolverEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetResolverEndpointCommandOutput) => void
  ): Promise<GetResolverEndpointCommandOutput> | void {
    const command = new GetResolverEndpointCommand(args);
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
   * <p>Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration
   * 			is logging queries for and the location that logs are sent to. </p>
   */
  public getResolverQueryLogConfig(
    args: GetResolverQueryLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverQueryLogConfigCommandOutput>;
  public getResolverQueryLogConfig(
    args: GetResolverQueryLogConfigCommandInput,
    cb: (err: any, data?: GetResolverQueryLogConfigCommandOutput) => void
  ): void;
  public getResolverQueryLogConfig(
    args: GetResolverQueryLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverQueryLogConfigCommandOutput) => void
  ): void;
  public getResolverQueryLogConfig(
    args: GetResolverQueryLogConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResolverQueryLogConfigCommandOutput) => void),
    cb?: (err: any, data?: GetResolverQueryLogConfigCommandOutput) => void
  ): Promise<GetResolverQueryLogConfigCommandOutput> | void {
    const command = new GetResolverQueryLogConfigCommand(args);
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
   * <p>Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC
   * 			with a query logging configuration, Resolver logs DNS queries that originate in that VPC.</p>
   */
  public getResolverQueryLogConfigAssociation(
    args: GetResolverQueryLogConfigAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverQueryLogConfigAssociationCommandOutput>;
  public getResolverQueryLogConfigAssociation(
    args: GetResolverQueryLogConfigAssociationCommandInput,
    cb: (err: any, data?: GetResolverQueryLogConfigAssociationCommandOutput) => void
  ): void;
  public getResolverQueryLogConfigAssociation(
    args: GetResolverQueryLogConfigAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverQueryLogConfigAssociationCommandOutput) => void
  ): void;
  public getResolverQueryLogConfigAssociation(
    args: GetResolverQueryLogConfigAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResolverQueryLogConfigAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetResolverQueryLogConfigAssociationCommandOutput) => void
  ): Promise<GetResolverQueryLogConfigAssociationCommandOutput> | void {
    const command = new GetResolverQueryLogConfigAssociationCommand(args);
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
   * <p>Gets information about a query logging policy. A query logging policy specifies the Resolver query logging
   * 			operations and resources that you want to allow another Amazon Web Services account to be able to use.</p>
   */
  public getResolverQueryLogConfigPolicy(
    args: GetResolverQueryLogConfigPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverQueryLogConfigPolicyCommandOutput>;
  public getResolverQueryLogConfigPolicy(
    args: GetResolverQueryLogConfigPolicyCommandInput,
    cb: (err: any, data?: GetResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;
  public getResolverQueryLogConfigPolicy(
    args: GetResolverQueryLogConfigPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;
  public getResolverQueryLogConfigPolicy(
    args: GetResolverQueryLogConfigPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResolverQueryLogConfigPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResolverQueryLogConfigPolicyCommandOutput) => void
  ): Promise<GetResolverQueryLogConfigPolicyCommandOutput> | void {
    const command = new GetResolverQueryLogConfigPolicyCommand(args);
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
   * <p>Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the
   * 			outbound Resolver endpoint that the rule is associated with.</p>
   */
  public getResolverRule(
    args: GetResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverRuleCommandOutput>;
  public getResolverRule(
    args: GetResolverRuleCommandInput,
    cb: (err: any, data?: GetResolverRuleCommandOutput) => void
  ): void;
  public getResolverRule(
    args: GetResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverRuleCommandOutput) => void
  ): void;
  public getResolverRule(
    args: GetResolverRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: GetResolverRuleCommandOutput) => void
  ): Promise<GetResolverRuleCommandOutput> | void {
    const command = new GetResolverRuleCommand(args);
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
   * <p>Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. </p>
   */
  public getResolverRuleAssociation(
    args: GetResolverRuleAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverRuleAssociationCommandOutput>;
  public getResolverRuleAssociation(
    args: GetResolverRuleAssociationCommandInput,
    cb: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void
  ): void;
  public getResolverRuleAssociation(
    args: GetResolverRuleAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void
  ): void;
  public getResolverRuleAssociation(
    args: GetResolverRuleAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResolverRuleAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void
  ): Promise<GetResolverRuleAssociationCommandOutput> | void {
    const command = new GetResolverRuleAssociationCommand(args);
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
   * <p>Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share
   * 			with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. </p>
   */
  public getResolverRulePolicy(
    args: GetResolverRulePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResolverRulePolicyCommandOutput>;
  public getResolverRulePolicy(
    args: GetResolverRulePolicyCommandInput,
    cb: (err: any, data?: GetResolverRulePolicyCommandOutput) => void
  ): void;
  public getResolverRulePolicy(
    args: GetResolverRulePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverRulePolicyCommandOutput) => void
  ): void;
  public getResolverRulePolicy(
    args: GetResolverRulePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResolverRulePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResolverRulePolicyCommandOutput) => void
  ): Promise<GetResolverRulePolicyCommandOutput> | void {
    const command = new GetResolverRulePolicyCommand(args);
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
   * <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p>
   *          <p>Each domain specification in your domain list must satisfy the following
   * 	requirements: </p>
   *          <ul>
   *             <li>
   *       	        <p>It can optionally start with <code>*</code> (asterisk).</p>
   *       	     </li>
   *             <li>
   *       	        <p>With the exception of the optional starting asterisk, it must only contain
   *       	   the following characters: <code>A-Z</code>, <code>a-z</code>,
   *       	   <code>0-9</code>, <code>-</code> (hyphen).</p>
   *       	     </li>
   *             <li>
   *       	        <p>It must be from 1-255 characters in length. </p>
   *       	     </li>
   *          </ul>
   */
  public importFirewallDomains(
    args: ImportFirewallDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportFirewallDomainsCommandOutput>;
  public importFirewallDomains(
    args: ImportFirewallDomainsCommandInput,
    cb: (err: any, data?: ImportFirewallDomainsCommandOutput) => void
  ): void;
  public importFirewallDomains(
    args: ImportFirewallDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportFirewallDomainsCommandOutput) => void
  ): void;
  public importFirewallDomains(
    args: ImportFirewallDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportFirewallDomainsCommandOutput) => void),
    cb?: (err: any, data?: ImportFirewallDomainsCommandOutput) => void
  ): Promise<ImportFirewallDomainsCommandOutput> | void {
    const command = new ImportFirewallDomainsCommand(args);
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
   * <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p>
   *          <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
   */
  public listFirewallConfigs(
    args: ListFirewallConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallConfigsCommandOutput>;
  public listFirewallConfigs(
    args: ListFirewallConfigsCommandInput,
    cb: (err: any, data?: ListFirewallConfigsCommandOutput) => void
  ): void;
  public listFirewallConfigs(
    args: ListFirewallConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallConfigsCommandOutput) => void
  ): void;
  public listFirewallConfigs(
    args: ListFirewallConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFirewallConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListFirewallConfigsCommandOutput) => void
  ): Promise<ListFirewallConfigsCommandOutput> | void {
    const command = new ListFirewallConfigsCommand(args);
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
   * <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p>
   *          <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
   */
  public listFirewallDomainLists(
    args: ListFirewallDomainListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallDomainListsCommandOutput>;
  public listFirewallDomainLists(
    args: ListFirewallDomainListsCommandInput,
    cb: (err: any, data?: ListFirewallDomainListsCommandOutput) => void
  ): void;
  public listFirewallDomainLists(
    args: ListFirewallDomainListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallDomainListsCommandOutput) => void
  ): void;
  public listFirewallDomainLists(
    args: ListFirewallDomainListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFirewallDomainListsCommandOutput) => void),
    cb?: (err: any, data?: ListFirewallDomainListsCommandOutput) => void
  ): Promise<ListFirewallDomainListsCommandOutput> | void {
    const command = new ListFirewallDomainListsCommand(args);
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
   * <p>Retrieves the domains that you have defined for the specified firewall domain list.  </p>
   *          <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
   */
  public listFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallDomainsCommandOutput>;
  public listFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    cb: (err: any, data?: ListFirewallDomainsCommandOutput) => void
  ): void;
  public listFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallDomainsCommandOutput) => void
  ): void;
  public listFirewallDomains(
    args: ListFirewallDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFirewallDomainsCommandOutput) => void),
    cb?: (err: any, data?: ListFirewallDomainsCommandOutput) => void
  ): Promise<ListFirewallDomainsCommandOutput> | void {
    const command = new ListFirewallDomainsCommand(args);
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
   * <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p>
   *          <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
   */
  public listFirewallRuleGroupAssociations(
    args: ListFirewallRuleGroupAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallRuleGroupAssociationsCommandOutput>;
  public listFirewallRuleGroupAssociations(
    args: ListFirewallRuleGroupAssociationsCommandInput,
    cb: (err: any, data?: ListFirewallRuleGroupAssociationsCommandOutput) => void
  ): void;
  public listFirewallRuleGroupAssociations(
    args: ListFirewallRuleGroupAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallRuleGroupAssociationsCommandOutput) => void
  ): void;
  public listFirewallRuleGroupAssociations(
    args: ListFirewallRuleGroupAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFirewallRuleGroupAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListFirewallRuleGroupAssociationsCommandOutput) => void
  ): Promise<ListFirewallRuleGroupAssociationsCommandOutput> | void {
    const command = new ListFirewallRuleGroupAssociationsCommand(args);
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
   * <p>Retrieves the minimal high-level information for the rule groups that you have defined.  </p>
   *          <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>
   */
  public listFirewallRuleGroups(
    args: ListFirewallRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallRuleGroupsCommandOutput>;
  public listFirewallRuleGroups(
    args: ListFirewallRuleGroupsCommandInput,
    cb: (err: any, data?: ListFirewallRuleGroupsCommandOutput) => void
  ): void;
  public listFirewallRuleGroups(
    args: ListFirewallRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallRuleGroupsCommandOutput) => void
  ): void;
  public listFirewallRuleGroups(
    args: ListFirewallRuleGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFirewallRuleGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListFirewallRuleGroupsCommandOutput) => void
  ): Promise<ListFirewallRuleGroupsCommandOutput> | void {
    const command = new ListFirewallRuleGroupsCommand(args);
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
   * <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p>
   *          <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
   */
  public listFirewallRules(
    args: ListFirewallRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallRulesCommandOutput>;
  public listFirewallRules(
    args: ListFirewallRulesCommandInput,
    cb: (err: any, data?: ListFirewallRulesCommandOutput) => void
  ): void;
  public listFirewallRules(
    args: ListFirewallRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallRulesCommandOutput) => void
  ): void;
  public listFirewallRules(
    args: ListFirewallRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFirewallRulesCommandOutput) => void),
    cb?: (err: any, data?: ListFirewallRulesCommandOutput) => void
  ): Promise<ListFirewallRulesCommandOutput> | void {
    const command = new ListFirewallRulesCommand(args);
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
   * <p>Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.</p>
   */
  public listResolverDnssecConfigs(
    args: ListResolverDnssecConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverDnssecConfigsCommandOutput>;
  public listResolverDnssecConfigs(
    args: ListResolverDnssecConfigsCommandInput,
    cb: (err: any, data?: ListResolverDnssecConfigsCommandOutput) => void
  ): void;
  public listResolverDnssecConfigs(
    args: ListResolverDnssecConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverDnssecConfigsCommandOutput) => void
  ): void;
  public listResolverDnssecConfigs(
    args: ListResolverDnssecConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResolverDnssecConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListResolverDnssecConfigsCommandOutput) => void
  ): Promise<ListResolverDnssecConfigsCommandOutput> | void {
    const command = new ListResolverDnssecConfigsCommand(args);
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
   * <p>Gets the IP addresses for a specified Resolver endpoint.</p>
   */
  public listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverEndpointIpAddressesCommandOutput>;
  public listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    cb: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void
  ): void;
  public listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void
  ): void;
  public listResolverEndpointIpAddresses(
    args: ListResolverEndpointIpAddressesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void),
    cb?: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void
  ): Promise<ListResolverEndpointIpAddressesCommandOutput> | void {
    const command = new ListResolverEndpointIpAddressesCommand(args);
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
   * <p>Lists all the Resolver endpoints that were created using the current Amazon Web Services account.</p>
   */
  public listResolverEndpoints(
    args: ListResolverEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverEndpointsCommandOutput>;
  public listResolverEndpoints(
    args: ListResolverEndpointsCommandInput,
    cb: (err: any, data?: ListResolverEndpointsCommandOutput) => void
  ): void;
  public listResolverEndpoints(
    args: ListResolverEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverEndpointsCommandOutput) => void
  ): void;
  public listResolverEndpoints(
    args: ListResolverEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResolverEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListResolverEndpointsCommandOutput) => void
  ): Promise<ListResolverEndpointsCommandOutput> | void {
    const command = new ListResolverEndpointsCommand(args);
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
   * <p>Lists information about associations between Amazon VPCs and query logging configurations.</p>
   */
  public listResolverQueryLogConfigAssociations(
    args: ListResolverQueryLogConfigAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverQueryLogConfigAssociationsCommandOutput>;
  public listResolverQueryLogConfigAssociations(
    args: ListResolverQueryLogConfigAssociationsCommandInput,
    cb: (err: any, data?: ListResolverQueryLogConfigAssociationsCommandOutput) => void
  ): void;
  public listResolverQueryLogConfigAssociations(
    args: ListResolverQueryLogConfigAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverQueryLogConfigAssociationsCommandOutput) => void
  ): void;
  public listResolverQueryLogConfigAssociations(
    args: ListResolverQueryLogConfigAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListResolverQueryLogConfigAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListResolverQueryLogConfigAssociationsCommandOutput) => void
  ): Promise<ListResolverQueryLogConfigAssociationsCommandOutput> | void {
    const command = new ListResolverQueryLogConfigAssociationsCommand(args);
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
   * <p>Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save
   * 			DNS query logs and specifies the VPCs that you want to log queries for.</p>
   */
  public listResolverQueryLogConfigs(
    args: ListResolverQueryLogConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverQueryLogConfigsCommandOutput>;
  public listResolverQueryLogConfigs(
    args: ListResolverQueryLogConfigsCommandInput,
    cb: (err: any, data?: ListResolverQueryLogConfigsCommandOutput) => void
  ): void;
  public listResolverQueryLogConfigs(
    args: ListResolverQueryLogConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverQueryLogConfigsCommandOutput) => void
  ): void;
  public listResolverQueryLogConfigs(
    args: ListResolverQueryLogConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResolverQueryLogConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListResolverQueryLogConfigsCommandOutput) => void
  ): Promise<ListResolverQueryLogConfigsCommandOutput> | void {
    const command = new ListResolverQueryLogConfigsCommand(args);
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
   * <p>Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.</p>
   */
  public listResolverRuleAssociations(
    args: ListResolverRuleAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverRuleAssociationsCommandOutput>;
  public listResolverRuleAssociations(
    args: ListResolverRuleAssociationsCommandInput,
    cb: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void
  ): void;
  public listResolverRuleAssociations(
    args: ListResolverRuleAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void
  ): void;
  public listResolverRuleAssociations(
    args: ListResolverRuleAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResolverRuleAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void
  ): Promise<ListResolverRuleAssociationsCommandOutput> | void {
    const command = new ListResolverRuleAssociationsCommand(args);
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
   * <p>Lists the Resolver rules that were created using the current Amazon Web Services account.</p>
   */
  public listResolverRules(
    args: ListResolverRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolverRulesCommandOutput>;
  public listResolverRules(
    args: ListResolverRulesCommandInput,
    cb: (err: any, data?: ListResolverRulesCommandOutput) => void
  ): void;
  public listResolverRules(
    args: ListResolverRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolverRulesCommandOutput) => void
  ): void;
  public listResolverRules(
    args: ListResolverRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResolverRulesCommandOutput) => void),
    cb?: (err: any, data?: ListResolverRulesCommandOutput) => void
  ): Promise<ListResolverRulesCommandOutput> | void {
    const command = new ListResolverRulesCommand(args);
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
   * <p>Lists the tags that you associated with the specified resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule
   * 			group. You can use the policy to share the rule group using Resource Access Manager
   * 			(RAM). </p>
   */
  public putFirewallRuleGroupPolicy(
    args: PutFirewallRuleGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFirewallRuleGroupPolicyCommandOutput>;
  public putFirewallRuleGroupPolicy(
    args: PutFirewallRuleGroupPolicyCommandInput,
    cb: (err: any, data?: PutFirewallRuleGroupPolicyCommandOutput) => void
  ): void;
  public putFirewallRuleGroupPolicy(
    args: PutFirewallRuleGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFirewallRuleGroupPolicyCommandOutput) => void
  ): void;
  public putFirewallRuleGroupPolicy(
    args: PutFirewallRuleGroupPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutFirewallRuleGroupPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutFirewallRuleGroupPolicyCommandOutput) => void
  ): Promise<PutFirewallRuleGroupPolicyCommandOutput> | void {
    const command = new PutFirewallRuleGroupPolicyCommand(args);
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
   * <p>Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share,
   * 			and the operations that you want the account to be able to perform on the configuration.</p>
   */
  public putResolverQueryLogConfigPolicy(
    args: PutResolverQueryLogConfigPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResolverQueryLogConfigPolicyCommandOutput>;
  public putResolverQueryLogConfigPolicy(
    args: PutResolverQueryLogConfigPolicyCommandInput,
    cb: (err: any, data?: PutResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;
  public putResolverQueryLogConfigPolicy(
    args: PutResolverQueryLogConfigPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResolverQueryLogConfigPolicyCommandOutput) => void
  ): void;
  public putResolverQueryLogConfigPolicy(
    args: PutResolverQueryLogConfigPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResolverQueryLogConfigPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResolverQueryLogConfigPolicyCommandOutput) => void
  ): Promise<PutResolverQueryLogConfigPolicyCommandOutput> | void {
    const command = new PutResolverQueryLogConfigPolicyCommand(args);
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
   * <p>Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with,
   * 			and the operations that you want the account to be able to perform on the rule.</p>
   */
  public putResolverRulePolicy(
    args: PutResolverRulePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResolverRulePolicyCommandOutput>;
  public putResolverRulePolicy(
    args: PutResolverRulePolicyCommandInput,
    cb: (err: any, data?: PutResolverRulePolicyCommandOutput) => void
  ): void;
  public putResolverRulePolicy(
    args: PutResolverRulePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResolverRulePolicyCommandOutput) => void
  ): void;
  public putResolverRulePolicy(
    args: PutResolverRulePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResolverRulePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResolverRulePolicyCommandOutput) => void
  ): Promise<PutResolverRulePolicyCommandOutput> | void {
    const command = new PutResolverRulePolicyCommand(args);
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
   * <p>Adds one or more tags to a specified resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes one or more tags from a specified resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates the configuration of the firewall behavior provided by DNS Firewall for a single
   * 			VPC from Amazon Virtual Private Cloud (Amazon VPC). </p>
   */
  public updateFirewallConfig(
    args: UpdateFirewallConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallConfigCommandOutput>;
  public updateFirewallConfig(
    args: UpdateFirewallConfigCommandInput,
    cb: (err: any, data?: UpdateFirewallConfigCommandOutput) => void
  ): void;
  public updateFirewallConfig(
    args: UpdateFirewallConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallConfigCommandOutput) => void
  ): void;
  public updateFirewallConfig(
    args: UpdateFirewallConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFirewallConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateFirewallConfigCommandOutput) => void
  ): Promise<UpdateFirewallConfigCommandOutput> | void {
    const command = new UpdateFirewallConfigCommand(args);
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
   * <p>Updates the firewall domain list from an array of domain specifications. </p>
   */
  public updateFirewallDomains(
    args: UpdateFirewallDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallDomainsCommandOutput>;
  public updateFirewallDomains(
    args: UpdateFirewallDomainsCommandInput,
    cb: (err: any, data?: UpdateFirewallDomainsCommandOutput) => void
  ): void;
  public updateFirewallDomains(
    args: UpdateFirewallDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallDomainsCommandOutput) => void
  ): void;
  public updateFirewallDomains(
    args: UpdateFirewallDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFirewallDomainsCommandOutput) => void),
    cb?: (err: any, data?: UpdateFirewallDomainsCommandOutput) => void
  ): Promise<UpdateFirewallDomainsCommandOutput> | void {
    const command = new UpdateFirewallDomainsCommand(args);
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
   * <p>Updates the specified firewall rule. </p>
   */
  public updateFirewallRule(
    args: UpdateFirewallRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallRuleCommandOutput>;
  public updateFirewallRule(
    args: UpdateFirewallRuleCommandInput,
    cb: (err: any, data?: UpdateFirewallRuleCommandOutput) => void
  ): void;
  public updateFirewallRule(
    args: UpdateFirewallRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallRuleCommandOutput) => void
  ): void;
  public updateFirewallRule(
    args: UpdateFirewallRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFirewallRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateFirewallRuleCommandOutput) => void
  ): Promise<UpdateFirewallRuleCommandOutput> | void {
    const command = new UpdateFirewallRuleCommand(args);
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
   * <p>Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. </p>
   */
  public updateFirewallRuleGroupAssociation(
    args: UpdateFirewallRuleGroupAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallRuleGroupAssociationCommandOutput>;
  public updateFirewallRuleGroupAssociation(
    args: UpdateFirewallRuleGroupAssociationCommandInput,
    cb: (err: any, data?: UpdateFirewallRuleGroupAssociationCommandOutput) => void
  ): void;
  public updateFirewallRuleGroupAssociation(
    args: UpdateFirewallRuleGroupAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallRuleGroupAssociationCommandOutput) => void
  ): void;
  public updateFirewallRuleGroupAssociation(
    args: UpdateFirewallRuleGroupAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFirewallRuleGroupAssociationCommandOutput) => void),
    cb?: (err: any, data?: UpdateFirewallRuleGroupAssociationCommandOutput) => void
  ): Promise<UpdateFirewallRuleGroupAssociationCommandOutput> | void {
    const command = new UpdateFirewallRuleGroupAssociationCommand(args);
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
   * <p>Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.</p>
   */
  public updateResolverDnssecConfig(
    args: UpdateResolverDnssecConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverDnssecConfigCommandOutput>;
  public updateResolverDnssecConfig(
    args: UpdateResolverDnssecConfigCommandInput,
    cb: (err: any, data?: UpdateResolverDnssecConfigCommandOutput) => void
  ): void;
  public updateResolverDnssecConfig(
    args: UpdateResolverDnssecConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverDnssecConfigCommandOutput) => void
  ): void;
  public updateResolverDnssecConfig(
    args: UpdateResolverDnssecConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResolverDnssecConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateResolverDnssecConfigCommandOutput) => void
  ): Promise<UpdateResolverDnssecConfigCommandOutput> | void {
    const command = new UpdateResolverDnssecConfigCommand(args);
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
   * <p>Updates the name of an inbound or an outbound Resolver endpoint.  </p>
   */
  public updateResolverEndpoint(
    args: UpdateResolverEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverEndpointCommandOutput>;
  public updateResolverEndpoint(
    args: UpdateResolverEndpointCommandInput,
    cb: (err: any, data?: UpdateResolverEndpointCommandOutput) => void
  ): void;
  public updateResolverEndpoint(
    args: UpdateResolverEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverEndpointCommandOutput) => void
  ): void;
  public updateResolverEndpoint(
    args: UpdateResolverEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResolverEndpointCommandOutput) => void),
    cb?: (err: any, data?: UpdateResolverEndpointCommandOutput) => void
  ): Promise<UpdateResolverEndpointCommandOutput> | void {
    const command = new UpdateResolverEndpointCommand(args);
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
   * <p>Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional.
   * 			If you don't specify a parameter, it retains its current value.</p>
   */
  public updateResolverRule(
    args: UpdateResolverRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverRuleCommandOutput>;
  public updateResolverRule(
    args: UpdateResolverRuleCommandInput,
    cb: (err: any, data?: UpdateResolverRuleCommandOutput) => void
  ): void;
  public updateResolverRule(
    args: UpdateResolverRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverRuleCommandOutput) => void
  ): void;
  public updateResolverRule(
    args: UpdateResolverRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateResolverRuleCommandOutput) => void
  ): Promise<UpdateResolverRuleCommandOutput> | void {
    const command = new UpdateResolverRuleCommand(args);
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
