import { Route53ResolverClient } from "./Route53ResolverClient";
import {
  AssociateResolverEndpointIpAddressCommand,
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput
} from "./commands/AssociateResolverEndpointIpAddressCommand";
import {
  AssociateResolverRuleCommand,
  AssociateResolverRuleCommandInput,
  AssociateResolverRuleCommandOutput
} from "./commands/AssociateResolverRuleCommand";
import {
  CreateResolverEndpointCommand,
  CreateResolverEndpointCommandInput,
  CreateResolverEndpointCommandOutput
} from "./commands/CreateResolverEndpointCommand";
import {
  CreateResolverRuleCommand,
  CreateResolverRuleCommandInput,
  CreateResolverRuleCommandOutput
} from "./commands/CreateResolverRuleCommand";
import {
  DeleteResolverEndpointCommand,
  DeleteResolverEndpointCommandInput,
  DeleteResolverEndpointCommandOutput
} from "./commands/DeleteResolverEndpointCommand";
import {
  DeleteResolverRuleCommand,
  DeleteResolverRuleCommandInput,
  DeleteResolverRuleCommandOutput
} from "./commands/DeleteResolverRuleCommand";
import {
  DisassociateResolverEndpointIpAddressCommand,
  DisassociateResolverEndpointIpAddressCommandInput,
  DisassociateResolverEndpointIpAddressCommandOutput
} from "./commands/DisassociateResolverEndpointIpAddressCommand";
import {
  DisassociateResolverRuleCommand,
  DisassociateResolverRuleCommandInput,
  DisassociateResolverRuleCommandOutput
} from "./commands/DisassociateResolverRuleCommand";
import {
  GetResolverEndpointCommand,
  GetResolverEndpointCommandInput,
  GetResolverEndpointCommandOutput
} from "./commands/GetResolverEndpointCommand";
import {
  GetResolverRuleAssociationCommand,
  GetResolverRuleAssociationCommandInput,
  GetResolverRuleAssociationCommandOutput
} from "./commands/GetResolverRuleAssociationCommand";
import {
  GetResolverRuleCommand,
  GetResolverRuleCommandInput,
  GetResolverRuleCommandOutput
} from "./commands/GetResolverRuleCommand";
import {
  GetResolverRulePolicyCommand,
  GetResolverRulePolicyCommandInput,
  GetResolverRulePolicyCommandOutput
} from "./commands/GetResolverRulePolicyCommand";
import {
  ListResolverEndpointIpAddressesCommand,
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput
} from "./commands/ListResolverEndpointIpAddressesCommand";
import {
  ListResolverEndpointsCommand,
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput
} from "./commands/ListResolverEndpointsCommand";
import {
  ListResolverRuleAssociationsCommand,
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput
} from "./commands/ListResolverRuleAssociationsCommand";
import {
  ListResolverRulesCommand,
  ListResolverRulesCommandInput,
  ListResolverRulesCommandOutput
} from "./commands/ListResolverRulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  PutResolverRulePolicyCommand,
  PutResolverRulePolicyCommandInput,
  PutResolverRulePolicyCommandOutput
} from "./commands/PutResolverRulePolicyCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateResolverEndpointCommand,
  UpdateResolverEndpointCommandInput,
  UpdateResolverEndpointCommandOutput
} from "./commands/UpdateResolverEndpointCommand";
import {
  UpdateResolverRuleCommand,
  UpdateResolverRuleCommandInput,
  UpdateResolverRuleCommandOutput
} from "./commands/UpdateResolverRuleCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Here's how you set up to query an Amazon Route 53 private hosted zone from your network:</p>
 *
 * 		       <ol>
 *             <li>
 *                <p>Connect your network to a VPC using AWS Direct Connect or a VPN.</p>
 *             </li>
 *             <li>
 *                <p>Run the following AWS CLI command to create a Resolver endpoint:</p>
 * 				           <p>
 *                   <code>create-resolver-endpoint --name [endpoint_name] --direction INBOUND
 * 					--creator-request-id [unique_string] --security-group-ids [security_group_with_inbound_rules]
 * 					--ip-addresses SubnetId=[subnet_id] SubnetId=[subnet_id_in_different_AZ]</code>
 *                </p>
 * 				           <p>Note the resolver endpoint ID that appears in the response. You'll use it in step 3.</p>
 * 			         </li>
 *             <li>
 *                <p>Get the IP addresses for the Resolver endpoints:</p>
 * 				           <p>
 *                   <code>get-resolver-endpoint --resolver-endpoint-id [resolver_endpoint_id]</code>
 *                </p>
 * 			         </li>
 *             <li>
 *                <p>In your network configuration, define the IP addresses that you got in step 3 as DNS servers.</p>
 * 				           <p>You can now query instance names in your VPCs and the names of records in your private hosted zone.</p>
 * 			         </li>
 *          </ol>
 *
 * 		       <p>You can also perform the following operations using the AWS CLI:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <code>list-resolver-endpoints</code>: List all endpoints. The syntax includes options for pagination and filtering.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>update-resolver-endpoints</code>: Add IP addresses to an endpoint or remove IP addresses from an endpoint. </p>
 *             </li>
 *          </ul>
 *
 * 		       <p>To delete an endpoint, use the following AWS CLI command:</p>
 * 		       <p>
 *             <code>delete-resolver-endpoint --resolver-endpoint-id [resolver_endpoint_id]</code>
 *          </p>
 */
export class Route53Resolver extends Route53ResolverClient {
  /**
   * <p>Adds IP addresses to an inbound or an outbound resolver endpoint. If you want to adding more than one IP address,
   * 			submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p>
   * 		       <p>To remove an IP address from an endpoint, see <a>DisassociateResolverEndpointIpAddress</a>.</p>
   */
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResolverEndpointIpAddressCommandOutput>;
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    cb: (
      err: any,
      data?: AssociateResolverEndpointIpAddressCommandOutput
    ) => void
  ): void;
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: AssociateResolverEndpointIpAddressCommandOutput
    ) => void
  ): void;
  public associateResolverEndpointIpAddress(
    args: AssociateResolverEndpointIpAddressCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: AssociateResolverEndpointIpAddressCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: AssociateResolverEndpointIpAddressCommandOutput
    ) => void
  ): Promise<AssociateResolverEndpointIpAddressCommandOutput> | void {
    const command = new AssociateResolverEndpointIpAddressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries
   * 			for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the
   * 			IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see
   * 			<a>CreateResolverRule</a>. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: AssociateResolverRuleCommandOutput) => void
  ): Promise<AssociateResolverRuleCommandOutput> | void {
    const command = new AssociateResolverRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a resolver endpoint. There are two types of resolver endpoints, inbound and outbound:</p>
   * 		       <ul>
   *             <li>
   *                <p>An <i>inbound resolver endpoint</i> forwards DNS queries to the DNS service for a VPC
   * 				from your network or another VPC.</p>
   *             </li>
   *             <li>
   *                <p>An <i>outbound resolver endpoint</i> forwards DNS queries from the DNS service for a VPC
   * 				to your network or another VPC.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateResolverEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateResolverEndpointCommandOutput) => void
  ): Promise<CreateResolverEndpointCommandOutput> | void {
    const command = new CreateResolverEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For DNS queries that originate in your VPCs, specifies which resolver endpoint the queries pass through,
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateResolverRuleCommandOutput) => void
  ): Promise<CreateResolverRuleCommandOutput> | void {
    const command = new CreateResolverRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a resolver endpoint. The effect of deleting a resolver endpoint depends on whether it's an inbound or an outbound
   * 			resolver endpoint:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>Inbound</b>: DNS queries from your network or another VPC are no longer routed
   * 				to the DNS service for the specified VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network or
   * 				to another VPC.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteResolverEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteResolverEndpointCommandOutput) => void
  ): Promise<DeleteResolverEndpointCommandOutput> | void {
    const command = new DeleteResolverEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a resolver rule. Before you can delete a resolver rule, you must disassociate it from all the VPCs that you
   * 			associated the resolver rule with. For more infomation, see <a>DisassociateResolverRule</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteResolverRuleCommandOutput) => void
  ): Promise<DeleteResolverRuleCommandOutput> | void {
    const command = new DeleteResolverRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes IP addresses from an inbound or an outbound resolver endpoint. If you want to remove more than one IP address,
   * 			submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p>
   * 		       <p>To add an IP address to an endpoint, see <a>AssociateResolverEndpointIpAddress</a>.</p>
   */
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResolverEndpointIpAddressCommandOutput>;
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    cb: (
      err: any,
      data?: DisassociateResolverEndpointIpAddressCommandOutput
    ) => void
  ): void;
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DisassociateResolverEndpointIpAddressCommandOutput
    ) => void
  ): void;
  public disassociateResolverEndpointIpAddress(
    args: DisassociateResolverEndpointIpAddressCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DisassociateResolverEndpointIpAddressCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DisassociateResolverEndpointIpAddressCommandOutput
    ) => void
  ): Promise<DisassociateResolverEndpointIpAddressCommandOutput> | void {
    const command = new DisassociateResolverEndpointIpAddressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the association between a specified resolver rule and a specified VPC.</p>
   * 		       <important>
   * 			         <p>If you disassociate a resolver rule from a VPC, Resolver stops forwarding DNS queries for the
   * 				domain name that you specified in the resolver rule. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: DisassociateResolverRuleCommandOutput) => void
  ): Promise<DisassociateResolverRuleCommandOutput> | void {
    const command = new DisassociateResolverRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a specified resolver endpoint, such as whether it's an inbound or an outbound resolver endpoint, and the
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetResolverEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetResolverEndpointCommandOutput) => void
  ): Promise<GetResolverEndpointCommandOutput> | void {
    const command = new GetResolverEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a specified resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the
   * 			outbound resolver endpoint that the rule is associated with.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: GetResolverRuleCommandOutput) => void
  ): Promise<GetResolverRuleCommandOutput> | void {
    const command = new GetResolverRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about an association between a specified resolver rule and a VPC. You associate a resolver rule and a VPC using
   * 			<a>AssociateResolverRule</a>. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetResolverRuleAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void
  ): Promise<GetResolverRuleAssociationCommandOutput> | void {
    const command = new GetResolverRuleAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a resolver rule policy. A resolver rule policy specifies the Resolver operations and resources
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetResolverRulePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResolverRulePolicyCommandOutput) => void
  ): Promise<GetResolverRulePolicyCommandOutput> | void {
    const command = new GetResolverRulePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the IP addresses for a specified resolver endpoint.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListResolverEndpointIpAddressesCommandOutput
        ) => void),
    cb?: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void
  ): Promise<ListResolverEndpointIpAddressesCommandOutput> | void {
    const command = new ListResolverEndpointIpAddressesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the resolver endpoints that were created using the current AWS account.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListResolverEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListResolverEndpointsCommandOutput) => void
  ): Promise<ListResolverEndpointsCommandOutput> | void {
    const command = new ListResolverEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the associations that were created between resolver rules and VPCs using the current AWS account.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListResolverRuleAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void
  ): Promise<ListResolverRuleAssociationsCommandOutput> | void {
    const command = new ListResolverRuleAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the resolver rules that were created using the current AWS account.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListResolverRulesCommandOutput) => void),
    cb?: (err: any, data?: ListResolverRulesCommandOutput) => void
  ): Promise<ListResolverRulesCommandOutput> | void {
    const command = new ListResolverRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Specifies the Resolver operations and resources that you want to allow another AWS account to be able to use.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutResolverRulePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResolverRulePolicyCommandOutput) => void
  ): Promise<PutResolverRulePolicyCommandOutput> | void {
    const command = new PutResolverRulePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds one or more tags to a specified resource.</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the name of an inbound or an outbound resolver endpoint.  </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateResolverEndpointCommandOutput) => void),
    cb?: (err: any, data?: UpdateResolverEndpointCommandOutput) => void
  ): Promise<UpdateResolverEndpointCommandOutput> | void {
    const command = new UpdateResolverEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates settings for a specified resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional.
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateResolverRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateResolverRuleCommandOutput) => void
  ): Promise<UpdateResolverRuleCommandOutput> | void {
    const command = new UpdateResolverRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
