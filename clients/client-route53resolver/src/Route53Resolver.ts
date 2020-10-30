import { Route53ResolverClient } from "./Route53ResolverClient";
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
 * <p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC from Route 53 Resolver.
 * 			By default, Resolver answers DNS queries for VPC domain names such as domain names for EC2 instances or ELB load balancers.
 * 			Resolver performs recursive lookups against public name servers for all other domain names.</p>
 *
 * 		       <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p>
 *
 * 		       <p>
 *             <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b>
 *          </p>
 *
 * 		       <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers
 * 			to easily resolve domain names for AWS resources such as EC2 instances or records in a Route 53 private hosted zone.
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
 * 		       <p>Like Amazon VPC, Resolver is regional. In each region where you have VPCs, you can choose whether to forward queries from your VPCs
 * 			to your network (outbound queries), from your network to your VPCs (inbound queries), or both.</p>
 */
export class Route53Resolver extends Route53ResolverClient {
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
   * 		       <p>You can optionally use AWS Resource Access Manager (AWS RAM) to share a query logging configuration with other AWS accounts. The other accounts
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
   * 			associated with the configuration. This also applies if the query logging configuration is shared with other AWS accounts, and
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
   * 			         <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used
   * 				Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration
   * 				in the following ways:</p>
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
   * 			operations and resources that you want to allow another AWS account to be able to use.</p>
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
   * <p>Gets information about a Resolver rule policy. A Resolver rule policy specifies the Resolver operations and resources
   * 			that you want to allow another AWS account to be able to use. </p>
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
   * <p>Lists all the Resolver endpoints that were created using the current AWS account.</p>
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
   * <p>Lists the associations that were created between Resolver rules and VPCs using the current AWS account.</p>
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
   * <p>Lists the Resolver rules that were created using the current AWS account.</p>
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
   * <p>Specifies an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share,
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
   * <p>Specifies an AWS account that you want to share rules with, the Resolver rules that you want to share, and the operations that you want
   * 			the account to be able to perform on those rules.</p>
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
