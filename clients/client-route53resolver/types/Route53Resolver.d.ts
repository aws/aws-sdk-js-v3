import { Route53ResolverClient } from "./Route53ResolverClient";
import { AssociateResolverEndpointIpAddressCommandInput, AssociateResolverEndpointIpAddressCommandOutput } from "./commands/AssociateResolverEndpointIpAddressCommand";
import { AssociateResolverRuleCommandInput, AssociateResolverRuleCommandOutput } from "./commands/AssociateResolverRuleCommand";
import { CreateResolverEndpointCommandInput, CreateResolverEndpointCommandOutput } from "./commands/CreateResolverEndpointCommand";
import { CreateResolverRuleCommandInput, CreateResolverRuleCommandOutput } from "./commands/CreateResolverRuleCommand";
import { DeleteResolverEndpointCommandInput, DeleteResolverEndpointCommandOutput } from "./commands/DeleteResolverEndpointCommand";
import { DeleteResolverRuleCommandInput, DeleteResolverRuleCommandOutput } from "./commands/DeleteResolverRuleCommand";
import { DisassociateResolverEndpointIpAddressCommandInput, DisassociateResolverEndpointIpAddressCommandOutput } from "./commands/DisassociateResolverEndpointIpAddressCommand";
import { DisassociateResolverRuleCommandInput, DisassociateResolverRuleCommandOutput } from "./commands/DisassociateResolverRuleCommand";
import { GetResolverEndpointCommandInput, GetResolverEndpointCommandOutput } from "./commands/GetResolverEndpointCommand";
import { GetResolverRuleAssociationCommandInput, GetResolverRuleAssociationCommandOutput } from "./commands/GetResolverRuleAssociationCommand";
import { GetResolverRuleCommandInput, GetResolverRuleCommandOutput } from "./commands/GetResolverRuleCommand";
import { GetResolverRulePolicyCommandInput, GetResolverRulePolicyCommandOutput } from "./commands/GetResolverRulePolicyCommand";
import { ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput } from "./commands/ListResolverEndpointIpAddressesCommand";
import { ListResolverEndpointsCommandInput, ListResolverEndpointsCommandOutput } from "./commands/ListResolverEndpointsCommand";
import { ListResolverRuleAssociationsCommandInput, ListResolverRuleAssociationsCommandOutput } from "./commands/ListResolverRuleAssociationsCommand";
import { ListResolverRulesCommandInput, ListResolverRulesCommandOutput } from "./commands/ListResolverRulesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutResolverRulePolicyCommandInput, PutResolverRulePolicyCommandOutput } from "./commands/PutResolverRulePolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateResolverEndpointCommandInput, UpdateResolverEndpointCommandOutput } from "./commands/UpdateResolverEndpointCommand";
import { UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput } from "./commands/UpdateResolverRuleCommand";
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
export declare class Route53Resolver extends Route53ResolverClient {
    /**
     * <p>Adds IP addresses to an inbound or an outbound resolver endpoint. If you want to adding more than one IP address,
     * 			submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p>
     * 		       <p>To remove an IP address from an endpoint, see <a>DisassociateResolverEndpointIpAddress</a>.</p>
     */
    associateResolverEndpointIpAddress(args: AssociateResolverEndpointIpAddressCommandInput, options?: __HttpHandlerOptions): Promise<AssociateResolverEndpointIpAddressCommandOutput>;
    associateResolverEndpointIpAddress(args: AssociateResolverEndpointIpAddressCommandInput, cb: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void): void;
    associateResolverEndpointIpAddress(args: AssociateResolverEndpointIpAddressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void): void;
    /**
     * <p>Associates a resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries
     * 			for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the
     * 			IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see
     * 			<a>CreateResolverRule</a>. </p>
     */
    associateResolverRule(args: AssociateResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<AssociateResolverRuleCommandOutput>;
    associateResolverRule(args: AssociateResolverRuleCommandInput, cb: (err: any, data?: AssociateResolverRuleCommandOutput) => void): void;
    associateResolverRule(args: AssociateResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateResolverRuleCommandOutput) => void): void;
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
    createResolverEndpoint(args: CreateResolverEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateResolverEndpointCommandOutput>;
    createResolverEndpoint(args: CreateResolverEndpointCommandInput, cb: (err: any, data?: CreateResolverEndpointCommandOutput) => void): void;
    createResolverEndpoint(args: CreateResolverEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResolverEndpointCommandOutput) => void): void;
    /**
     * <p>For DNS queries that originate in your VPCs, specifies which resolver endpoint the queries pass through,
     * 			one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.</p>
     */
    createResolverRule(args: CreateResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateResolverRuleCommandOutput>;
    createResolverRule(args: CreateResolverRuleCommandInput, cb: (err: any, data?: CreateResolverRuleCommandOutput) => void): void;
    createResolverRule(args: CreateResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResolverRuleCommandOutput) => void): void;
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
    deleteResolverEndpoint(args: DeleteResolverEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResolverEndpointCommandOutput>;
    deleteResolverEndpoint(args: DeleteResolverEndpointCommandInput, cb: (err: any, data?: DeleteResolverEndpointCommandOutput) => void): void;
    deleteResolverEndpoint(args: DeleteResolverEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResolverEndpointCommandOutput) => void): void;
    /**
     * <p>Deletes a resolver rule. Before you can delete a resolver rule, you must disassociate it from all the VPCs that you
     * 			associated the resolver rule with. For more infomation, see <a>DisassociateResolverRule</a>.</p>
     */
    deleteResolverRule(args: DeleteResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResolverRuleCommandOutput>;
    deleteResolverRule(args: DeleteResolverRuleCommandInput, cb: (err: any, data?: DeleteResolverRuleCommandOutput) => void): void;
    deleteResolverRule(args: DeleteResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResolverRuleCommandOutput) => void): void;
    /**
     * <p>Removes IP addresses from an inbound or an outbound resolver endpoint. If you want to remove more than one IP address,
     * 			submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p>
     * 		       <p>To add an IP address to an endpoint, see <a>AssociateResolverEndpointIpAddress</a>.</p>
     */
    disassociateResolverEndpointIpAddress(args: DisassociateResolverEndpointIpAddressCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateResolverEndpointIpAddressCommandOutput>;
    disassociateResolverEndpointIpAddress(args: DisassociateResolverEndpointIpAddressCommandInput, cb: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void): void;
    disassociateResolverEndpointIpAddress(args: DisassociateResolverEndpointIpAddressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void): void;
    /**
     * <p>Removes the association between a specified resolver rule and a specified VPC.</p>
     * 		       <important>
     * 			         <p>If you disassociate a resolver rule from a VPC, Resolver stops forwarding DNS queries for the
     * 				domain name that you specified in the resolver rule. </p>
     * 		       </important>
     */
    disassociateResolverRule(args: DisassociateResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateResolverRuleCommandOutput>;
    disassociateResolverRule(args: DisassociateResolverRuleCommandInput, cb: (err: any, data?: DisassociateResolverRuleCommandOutput) => void): void;
    disassociateResolverRule(args: DisassociateResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateResolverRuleCommandOutput) => void): void;
    /**
     * <p>Gets information about a specified resolver endpoint, such as whether it's an inbound or an outbound resolver endpoint, and the
     * 			current status of the endpoint.</p>
     */
    getResolverEndpoint(args: GetResolverEndpointCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverEndpointCommandOutput>;
    getResolverEndpoint(args: GetResolverEndpointCommandInput, cb: (err: any, data?: GetResolverEndpointCommandOutput) => void): void;
    getResolverEndpoint(args: GetResolverEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverEndpointCommandOutput) => void): void;
    /**
     * <p>Gets information about a specified resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the
     * 			outbound resolver endpoint that the rule is associated with.</p>
     */
    getResolverRule(args: GetResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverRuleCommandOutput>;
    getResolverRule(args: GetResolverRuleCommandInput, cb: (err: any, data?: GetResolverRuleCommandOutput) => void): void;
    getResolverRule(args: GetResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverRuleCommandOutput) => void): void;
    /**
     * <p>Gets information about an association between a specified resolver rule and a VPC. You associate a resolver rule and a VPC using
     * 			<a>AssociateResolverRule</a>. </p>
     */
    getResolverRuleAssociation(args: GetResolverRuleAssociationCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverRuleAssociationCommandOutput>;
    getResolverRuleAssociation(args: GetResolverRuleAssociationCommandInput, cb: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void): void;
    getResolverRuleAssociation(args: GetResolverRuleAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void): void;
    /**
     * <p>Gets information about a resolver rule policy. A resolver rule policy specifies the Resolver operations and resources
     * 			that you want to allow another AWS account to be able to use. </p>
     */
    getResolverRulePolicy(args: GetResolverRulePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverRulePolicyCommandOutput>;
    getResolverRulePolicy(args: GetResolverRulePolicyCommandInput, cb: (err: any, data?: GetResolverRulePolicyCommandOutput) => void): void;
    getResolverRulePolicy(args: GetResolverRulePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverRulePolicyCommandOutput) => void): void;
    /**
     * <p>Gets the IP addresses for a specified resolver endpoint.</p>
     */
    listResolverEndpointIpAddresses(args: ListResolverEndpointIpAddressesCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverEndpointIpAddressesCommandOutput>;
    listResolverEndpointIpAddresses(args: ListResolverEndpointIpAddressesCommandInput, cb: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void): void;
    listResolverEndpointIpAddresses(args: ListResolverEndpointIpAddressesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void): void;
    /**
     * <p>Lists all the resolver endpoints that were created using the current AWS account.</p>
     */
    listResolverEndpoints(args: ListResolverEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverEndpointsCommandOutput>;
    listResolverEndpoints(args: ListResolverEndpointsCommandInput, cb: (err: any, data?: ListResolverEndpointsCommandOutput) => void): void;
    listResolverEndpoints(args: ListResolverEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverEndpointsCommandOutput) => void): void;
    /**
     * <p>Lists the associations that were created between resolver rules and VPCs using the current AWS account.</p>
     */
    listResolverRuleAssociations(args: ListResolverRuleAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverRuleAssociationsCommandOutput>;
    listResolverRuleAssociations(args: ListResolverRuleAssociationsCommandInput, cb: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void): void;
    listResolverRuleAssociations(args: ListResolverRuleAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void): void;
    /**
     * <p>Lists the resolver rules that were created using the current AWS account.</p>
     */
    listResolverRules(args: ListResolverRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverRulesCommandOutput>;
    listResolverRules(args: ListResolverRulesCommandInput, cb: (err: any, data?: ListResolverRulesCommandOutput) => void): void;
    listResolverRules(args: ListResolverRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverRulesCommandOutput) => void): void;
    /**
     * <p>Lists the tags that you associated with the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Specifies the Resolver operations and resources that you want to allow another AWS account to be able to use.</p>
     */
    putResolverRulePolicy(args: PutResolverRulePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutResolverRulePolicyCommandOutput>;
    putResolverRulePolicy(args: PutResolverRulePolicyCommandInput, cb: (err: any, data?: PutResolverRulePolicyCommandOutput) => void): void;
    putResolverRulePolicy(args: PutResolverRulePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutResolverRulePolicyCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to a specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from a specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the name of an inbound or an outbound resolver endpoint.  </p>
     */
    updateResolverEndpoint(args: UpdateResolverEndpointCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResolverEndpointCommandOutput>;
    updateResolverEndpoint(args: UpdateResolverEndpointCommandInput, cb: (err: any, data?: UpdateResolverEndpointCommandOutput) => void): void;
    updateResolverEndpoint(args: UpdateResolverEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResolverEndpointCommandOutput) => void): void;
    /**
     * <p>Updates settings for a specified resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional.
     * 			If you don't specify a parameter, it retains its current value.</p>
     */
    updateResolverRule(args: UpdateResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResolverRuleCommandOutput>;
    updateResolverRule(args: UpdateResolverRuleCommandInput, cb: (err: any, data?: UpdateResolverRuleCommandOutput) => void): void;
    updateResolverRule(args: UpdateResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResolverRuleCommandOutput) => void): void;
}
