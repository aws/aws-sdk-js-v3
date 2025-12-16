// smithy-typescript generated code
import {
  Action,
  AutodefinedReverseFlag,
  BlockOverrideDnsType,
  BlockResponse,
  ConfidenceThreshold,
  DnsThreatProtection,
  FirewallDomainImportOperation,
  FirewallDomainListStatus,
  FirewallDomainRedirectionAction,
  FirewallDomainUpdateOperation,
  FirewallFailOpenStatus,
  FirewallRuleGroupAssociationStatus,
  FirewallRuleGroupStatus,
  IpAddressStatus,
  MutationProtectionStatus,
  OutpostResolverStatus,
  Protocol,
  ResolverAutodefinedReverseStatus,
  ResolverDNSSECValidationStatus,
  ResolverEndpointDirection,
  ResolverEndpointStatus,
  ResolverEndpointType,
  ResolverQueryLogConfigAssociationError,
  ResolverQueryLogConfigAssociationStatus,
  ResolverQueryLogConfigStatus,
  ResolverRuleAssociationStatus,
  ResolverRuleStatus,
  RuleTypeOption,
  ShareStatus,
  SortOrder,
  Validation,
} from "./enums";

/**
 * <p>One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes,
   * 			the value of <code>Key</code> might be <code>account-id</code>.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for the tag. For example, if <code>Key</code> is <code>account-id</code>, then <code>Value</code> might be the ID of the
   * 			customer account that you're creating the resource for.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AssociateFirewallRuleGroupRequest {
  /**
   * <p>A unique string that identifies the request and that allows failed requests to be
   * 			retried without the risk of running the operation twice. <code>CreatorRequestId</code>
   * 			can be any unique string, for example, a date/time stamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The unique identifier of the firewall rule group. </p>
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * <p>The unique identifier of the VPC that you want to associate with the rule group. </p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule group among the rule
   * 			groups that you associate with the specified VPC. DNS Firewall filters VPC traffic
   * 			starting from the rule group with the lowest numeric priority setting. </p>
   *          <p>You must specify a unique priority for each rule group that you associate with a single VPC.
   *            To make it easier to insert rule groups later, leave space between the numbers, for example, use 101, 200, and so on. You
   *    can change the priority setting for a rule group association after you create it.</p>
   *          <p>The allowed values for <code>Priority</code> are between 100 and 9900.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>A name that lets you identify the association, to manage and use it.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections.
   *        When you create the association, the default setting is <code>DISABLED</code>. </p>
   * @public
   */
  MutationProtection?: MutationProtectionStatus | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the rule group association. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>An association between a firewall rule group and a VPC, which enables DNS filtering for
 * 			the VPC. </p>
 * @public
 */
export interface FirewallRuleGroupAssociation {
  /**
   * <p>The identifier for the association.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall rule group association.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique identifier of the firewall rule group. </p>
   * @public
   */
  FirewallRuleGroupId?: string | undefined;

  /**
   * <p>The unique identifier of the VPC that is associated with the rule group. </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The name of the association.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC. DNS Firewall
   *            filters VPC traffic starting from rule group with the lowest numeric priority setting. </p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. </p>
   * @public
   */
  MutationProtection?: MutationProtectionStatus | undefined;

  /**
   * <p>The owner of the association, used only for associations that are not managed by you. If you use Firewall Manager to
   *    manage your DNS Firewalls, then this reports Firewall Manager as the managed owner.</p>
   * @public
   */
  ManagedOwnerName?: string | undefined;

  /**
   * <p>The current status of the association.</p>
   * @public
   */
  Status?: FirewallRuleGroupAssociationStatus | undefined;

  /**
   * <p>Additional information about the status of the response, if available.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The date and time that the association was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The date and time that the association was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  ModificationTime?: string | undefined;
}

/**
 * @public
 */
export interface AssociateFirewallRuleGroupResponse {
  /**
   * <p>The association that you just created. The association has an ID that you can use to
   * 			identify it in other requests, like update and delete.</p>
   * @public
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation | undefined;
}

/**
 * <p>In an
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>
 * 			request, information about an IP address to update.</p>
 * @public
 */
export interface IpAddressUpdate {
  /**
   * <p>
   *             <i>Only when removing an IP address from a Resolver endpoint</i>: The ID of the IP address that you want to remove.
   * 			To get this ID, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>.</p>
   * @public
   */
  IpId?: string | undefined;

  /**
   * <p>The ID of the subnet that includes the IP address that you want to update. To get this ID, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The new IPv4 address.</p>
   * @public
   */
  Ip?: string | undefined;

  /**
   * <p>
   * 			The new IPv6 address.
   * 		</p>
   * @public
   */
  Ipv6?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResolverEndpointIpAddressRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to associate IP addresses with.</p>
   * @public
   */
  ResolverEndpointId: string | undefined;

  /**
   * <p>Either the IPv4 address that you want to add to a Resolver endpoint or a subnet ID. If you specify a subnet ID,
   * 			Resolver chooses an IP address for you from the available IPs in the specified subnet.</p>
   * @public
   */
  IpAddress: IpAddressUpdate | undefined;
}

/**
 * <p>In the response to a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>,
 * 			Updates the name, or ResolverEndpointType for an endpoint,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>
 * 			request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.</p>
 * @public
 */
export interface ResolverEndpoint {
  /**
   * <p>The ID of the Resolver endpoint.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>A unique string that identifies the request that created the Resolver endpoint. The
   * 				<code>CreatorRequestId</code> allows failed requests to be retried without the risk
   * 			of running the operation twice.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the Resolver endpoint.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name that you assigned to the Resolver endpoint when you submitted a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>
   * 			request.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules
   * 			(for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access.
   * 			For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INBOUND</code>: allows DNS queries to your VPC from your network</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTBOUND</code>: allows DNS queries from your VPC to your network</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INBOUND_DELEGATION</code>: Resolver delegates queries to Route 53 private hosted zones from your network.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Direction?: ResolverEndpointDirection | undefined;

  /**
   * <p>The number of IP addresses that the Resolver endpoint can use for DNS queries.</p>
   * @public
   */
  IpAddressCount?: number | undefined;

  /**
   * <p>The ID of the VPC that you want to create the Resolver endpoint in.</p>
   * @public
   */
  HostVPCId?: string | undefined;

  /**
   * <p>A code that specifies the current status of the Resolver endpoint. Valid values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>: Resolver is creating and configuring one or more Amazon VPC network interfaces
   * 				for this endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPERATIONAL</code>: The Amazon VPC network interfaces for this endpoint are correctly configured and
   * 				able to pass inbound or outbound DNS queries between your network and Resolver.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code>: Resolver is associating or disassociating one or more network interfaces
   * 				with this endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTO_RECOVERING</code>: Resolver is trying to recover one or more of the network interfaces
   * 				that are associated with this endpoint. During the recovery process, the endpoint functions with limited capacity because of the
   * 				limit on the number of DNS queries per IP address (per network interface). For the current limit, see
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities-resolver">Limits on Route 53 Resolver</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTION_NEEDED</code>: This endpoint is unhealthy, and Resolver can't automatically recover it.
   * 				To resolve the problem, we recommend that you check each IP address that you associated with the endpoint. For each IP address
   * 				that isn't available, add another IP address and then delete the IP address that isn't available. (An endpoint must always include
   * 				at least two IP addresses.) A status of <code>ACTION_NEEDED</code> can have a variety of causes. Here are two common causes:</p>
   *                <ul>
   *                   <li>
   *                      <p>One or more of the network interfaces that are associated with the endpoint were deleted using Amazon VPC.</p>
   *                   </li>
   *                   <li>
   *                      <p>The network interface couldn't be created for some reason that's outside the control of Resolver.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>: Resolver is deleting this endpoint and the associated network interfaces.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ResolverEndpointStatus | undefined;

  /**
   * <p>A detailed description of the status of the Resolver endpoint.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  ModificationTime?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>
   * 			The Amazon EC2 instance type.
   * 		</p>
   * @public
   */
  PreferredInstanceType?: string | undefined;

  /**
   * <p>
   * 			The Resolver endpoint IP address type.
   * 		</p>
   * @public
   */
  ResolverEndpointType?: ResolverEndpointType | undefined;

  /**
   * <p>
   * 			Protocols used for the endpoint. DoH-FIPS is applicable for a default inbound endpoints only.
   * 		</p>
   *          <p>For an inbound endpoint you can apply the protocols as follows:</p>
   *          <ul>
   *             <li>
   *                <p> Do53  and DoH in combination.</p>
   *             </li>
   *             <li>
   *                <p>Do53  and DoH-FIPS in combination.</p>
   *             </li>
   *             <li>
   *                <p>Do53 alone.</p>
   *             </li>
   *             <li>
   *                <p>DoH alone.</p>
   *             </li>
   *             <li>
   *                <p>DoH-FIPS alone.</p>
   *             </li>
   *             <li>
   *                <p>None, which is treated as Do53.</p>
   *             </li>
   *          </ul>
   *          <p>For a delegation inbound endpoint you can use Do53 only.</p>
   *          <p>For an outbound endpoint you can apply the protocols as follows:</p>
   *          <ul>
   *             <li>
   *                <p> Do53  and DoH in combination.</p>
   *             </li>
   *             <li>
   *                <p>Do53 alone.</p>
   *             </li>
   *             <li>
   *                <p>DoH alone.</p>
   *             </li>
   *             <li>
   *                <p>None, which is treated as Do53.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * <p>Indicates whether RNI enhanced metrics are enabled for the Resolver endpoint.
   * 		When enabled, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint.
   * 		When disabled, these metrics are not published.</p>
   * @public
   */
  RniEnhancedMetricsEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether target name server metrics are enabled for the outbound Resolver endpoint.
   * 		When enabled, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint.
   * 		When disabled, these metrics are not published. This feature is not supported for inbound Resolver endpoint.</p>
   * @public
   */
  TargetNameServerMetricsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateResolverEndpointIpAddressResponse {
  /**
   * <p>The response to an <code>AssociateResolverEndpointIpAddress</code> request.</p>
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface AssociateResolverQueryLogConfigRequest {
  /**
   * <p>The ID of the query logging configuration that you want to associate a VPC with.</p>
   * @public
   */
  ResolverQueryLogConfigId: string | undefined;

  /**
   * <p>The ID of an Amazon VPC that you want this query logging configuration to log queries for.</p>
   *          <note>
   *             <p>The VPCs and the query logging configuration must be in the same Region.</p>
   *          </note>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * <p>In the response to an
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html">GetResolverQueryLogConfigAssociation</a>,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>,
 * 			request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.</p>
 * @public
 */
export interface ResolverQueryLogConfigAssociation {
  /**
   * <p>The ID of the query logging association.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the query logging configuration that a VPC is associated with.</p>
   * @public
   */
  ResolverQueryLogConfigId?: string | undefined;

  /**
   * <p>The ID of the Amazon VPC that is associated with the query logging configuration.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The status of the specified query logging association. Valid values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>: Resolver is creating an association between an Amazon VPC and a query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>: The association between an Amazon VPC and a query logging configuration
   * 				was successfully created. Resolver is logging queries that originate in the specified VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>: Resolver is deleting this query logging association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: Resolver either couldn't create or couldn't delete the query logging association.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ResolverQueryLogConfigAssociationStatus | undefined;

  /**
   * <p>If the value of <code>Status</code> is <code>FAILED</code>, the value of <code>Error</code> indicates the cause:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DESTINATION_NOT_FOUND</code>: The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code>: Permissions don't allow sending logs to the destination.</p>
   *             </li>
   *          </ul>
   *          <p>If the value of <code>Status</code> is a value other than <code>FAILED</code>, <code>Error</code> is null. </p>
   * @public
   */
  Error?: ResolverQueryLogConfigAssociationError | undefined;

  /**
   * <p>Contains additional information about the error. If the value or <code>Error</code> is null, the value of <code>ErrorMessage</code> also is null.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  CreationTime?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResolverQueryLogConfigResponse {
  /**
   * <p>A complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.</p>
   * @public
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateResolverRuleRequest {
  /**
   * <p>The ID of the Resolver rule that you want to associate with the VPC. To list the existing Resolver rules, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>.</p>
   * @public
   */
  ResolverRuleId: string | undefined;

  /**
   * <p>A name for the association that you're creating between a Resolver rule and a VPC.</p>
   *          <p>The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the VPC that you want to associate the Resolver rule with.</p>
   * @public
   */
  VPCId: string | undefined;
}

/**
 * <p>In the response to an
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>
 * 			request, provides information about an association between a Resolver rule and a VPC.
 * 			The association determines which DNS queries that originate in the VPC are forwarded to your network. </p>
 * @public
 */
export interface ResolverRuleAssociation {
  /**
   * <p>The ID of the association between a Resolver rule and a VPC. Resolver assigns this value when you submit an
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>
   * 			request.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the Resolver rule that you associated with the VPC that is specified by <code>VPCId</code>.</p>
   * @public
   */
  ResolverRuleId?: string | undefined;

  /**
   * <p>The name of an association between a Resolver rule and a VPC.</p>
   *          <p>The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the VPC that you associated the Resolver rule with.</p>
   * @public
   */
  VPCId?: string | undefined;

  /**
   * <p>A code that specifies the current status of the association between a Resolver rule and a VPC.</p>
   * @public
   */
  Status?: ResolverRuleAssociationStatus | undefined;

  /**
   * <p>A detailed description of the status of the association between a Resolver rule and a VPC.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResolverRuleResponse {
  /**
   * <p>Information about the <code>AssociateResolverRule</code> request, including the status of the request.</p>
   * @public
   */
  ResolverRuleAssociation?: ResolverRuleAssociation | undefined;
}

/**
 * @public
 */
export interface CreateFirewallDomainListRequest {
  /**
   * <p>A unique string that identifies the request and that allows you to retry failed requests
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>A name that lets you identify the domain list to manage and use it.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the domain list. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p>
 *          <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p>
 * @public
 */
export interface FirewallDomainList {
  /**
   * <p>The ID of the domain list. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall domain list.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the domain list. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The number of domain names that are specified in the domain list.</p>
   * @public
   */
  DomainCount?: number | undefined;

  /**
   * <p>The status of the domain list.  </p>
   * @public
   */
  Status?: FirewallDomainListStatus | undefined;

  /**
   * <p>Additional information about the status of the list, if available.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The owner of the list, used only for lists that are not managed by you. For example, the managed domain list <code>AWSManagedDomainsMalwareDomainList</code> has the managed owner name <code>Route 53 Resolver DNS Firewall</code>.</p>
   * @public
   */
  ManagedOwnerName?: string | undefined;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The date and time that the domain list was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The date and time that the domain list was last modified, in Unix time format and Coordinated Universal Time (UTC). </p>
   * @public
   */
  ModificationTime?: string | undefined;
}

/**
 * @public
 */
export interface CreateFirewallDomainListResponse {
  /**
   * <p>The domain list that you just created.</p>
   * @public
   */
  FirewallDomainList?: FirewallDomainList | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleRequest {
  /**
   * <p>A unique string that identifies the request and that allows you to retry failed requests
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The unique identifier of the firewall rule group where you want to create the rule. </p>
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * <p>The ID of the domain list that you want to use in the rule. Can't be used together with <code>DnsThreatProtecton</code>.</p>
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule in the rule group. DNS Firewall
   *            processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   *          <p>You must specify a unique priority for each rule in a rule group.
   *            To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You
   *    can change the priority setting for the rules in a rule group at any time.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - Permit the request to go through. Not available for DNS Firewall Advanced rules.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> - Permit the request and send metrics and logs to Cloud Watch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - Disallow the request. This option requires additional details in the rule's <code>BlockResponse</code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Action: Action | undefined;

  /**
   * <p>The way that you want DNS Firewall to block the request, used with the rule action
   * 			setting <code>BLOCK</code>. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NODATA</code> - Respond indicating that the query was successful, but no response is available for it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NXDOMAIN</code> - Respond indicating that the domain name that's in the query doesn't exist.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERRIDE</code> - Provide a custom override in the response. This option requires custom handling details in the rule's <code>BlockOverride*</code> settings. </p>
   *             </li>
   *          </ul>
   *          <p>This setting is required if the rule action setting is <code>BLOCK</code>.</p>
   * @public
   */
  BlockResponse?: BlockResponse | undefined;

  /**
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   *          <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   * @public
   */
  BlockOverrideDomain?: string | undefined;

  /**
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   *          <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   * @public
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | undefined;

  /**
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   *          <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   * @public
   */
  BlockOverrideTtl?: number | undefined;

  /**
   * <p>A name that lets you identify the rule in the rule group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   * 			How you want the the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME or DNAME.
   * 		</p>
   *          <p>
   *             <code>INSPECT_REDIRECTION_DOMAIN</code>: (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be
   * 			added to the domain list.</p>
   *          <p>
   *             <code>TRUST_REDIRECTION_DOMAIN</code>: Inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the domain in the redirection list to
   * 			the domain list.</p>
   * @public
   */
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction | undefined;

  /**
   * <p>
   * 			The DNS query type you want the rule to evaluate. Allowed values are;
   * 		</p>
   *          <ul>
   *             <li>
   *                <p>
   * 				A: Returns an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>AAAA: Returns an Ipv6 address.</p>
   *             </li>
   *             <li>
   *                <p>CAA: Restricts CAs that can create SSL/TLS certifications for the domain.</p>
   *             </li>
   *             <li>
   *                <p>CNAME: Returns another domain name.</p>
   *             </li>
   *             <li>
   *                <p>DS: Record that identifies the DNSSEC signing key of a delegated zone.</p>
   *             </li>
   *             <li>
   *                <p>MX: Specifies mail servers.</p>
   *             </li>
   *             <li>
   *                <p>NAPTR: Regular-expression-based rewriting of domain names.</p>
   *             </li>
   *             <li>
   *                <p>NS: Authoritative name servers.</p>
   *             </li>
   *             <li>
   *                <p>PTR: Maps an IP address to a domain name.</p>
   *             </li>
   *             <li>
   *                <p>SOA: Start of authority record for the zone.</p>
   *             </li>
   *             <li>
   *                <p>SPF: Lists the servers authorized to send emails from a domain.</p>
   *             </li>
   *             <li>
   *                <p>SRV: Application specific values that identify servers.</p>
   *             </li>
   *             <li>
   *                <p>TXT: Verifies email senders and application-specific values.</p>
   *             </li>
   *             <li>
   *                <p>A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be
   * 				defined as TYPENUMBER, where the
   * 				NUMBER can be 1-65334, for
   * 				example, TYPE28. For more information, see
   * 				<a href="https://en.wikipedia.org/wiki/List_of_DNS_record_types">List of DNS record types</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Qtype?: string | undefined;

  /**
   * <p>
   * 			Use to create a DNS Firewall Advanced rule.
   * 		</p>
   * @public
   */
  DnsThreatProtection?: DnsThreatProtection | undefined;

  /**
   * <p>
   * 			The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule. The confidence
   * 			level values mean:
   * 		</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LOW</code>: Provides the highest detection rate for threats, but also increases false positives.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>: Provides a balance between detecting threats and false positives.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code>: Detects only the most well corroborated threats with a low rate of false positives. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ConfidenceThreshold?: ConfidenceThreshold | undefined;
}

/**
 * <p>A single firewall rule in a rule group.</p>
 * @public
 */
export interface FirewallRule {
  /**
   * <p>The unique identifier of the Firewall rule group of the rule. </p>
   * @public
   */
  FirewallRuleGroupId?: string | undefined;

  /**
   * <p>The ID of the domain list that's used in the rule. </p>
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * <p>
   * 			ID of the DNS Firewall Advanced rule.
   * 		</p>
   * @public
   */
  FirewallThreatProtectionId?: string | undefined;

  /**
   * <p>The name of the rule. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The priority of the rule in the rule group. This value must be unique within the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - Permit the request to go through. Not available for DNS Firewall Advanced rules.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> - Permit the request to go through but send an alert to the logs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - Disallow the request. If this is specified, additional handling details are provided in the rule's <code>BlockResponse</code> setting. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The way that you want DNS Firewall to block the request. Used for the rule action setting <code>BLOCK</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NODATA</code> - Respond indicating that the query was successful, but no response is available for it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NXDOMAIN</code> - Respond indicating that the domain name that's in the query doesn't exist.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERRIDE</code> - Provide a custom override in the response. This option requires custom handling details in the rule's <code>BlockOverride*</code> settings. </p>
   *             </li>
   *          </ul>
   * @public
   */
  BlockResponse?: BlockResponse | undefined;

  /**
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  BlockOverrideDomain?: string | undefined;

  /**
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | undefined;

  /**
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  BlockOverrideTtl?: number | undefined;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed requests
   *            without the risk of executing the operation twice. This can be any unique string, for example, a timestamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The date and time that the rule was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The date and time that the rule was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  ModificationTime?: string | undefined;

  /**
   * <p>
   * 			How you want the the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME or DNAME.
   * 		</p>
   *          <p>
   *             <code>INSPECT_REDIRECTION_DOMAIN</code>: (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be
   * 			added to the domain list.</p>
   *          <p>
   *             <code>TRUST_REDIRECTION_DOMAIN</code>: Inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the domain in the redirection list to
   * 			the domain list.</p>
   * @public
   */
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction | undefined;

  /**
   * <p>
   * 			The DNS query type you want the rule to evaluate. Allowed values are;
   * 		</p>
   *          <ul>
   *             <li>
   *                <p>
   * 				A: Returns an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>AAAA: Returns an Ipv6 address.</p>
   *             </li>
   *             <li>
   *                <p>CAA: Restricts CAs that can create SSL/TLS certifications for the domain.</p>
   *             </li>
   *             <li>
   *                <p>CNAME: Returns another domain name.</p>
   *             </li>
   *             <li>
   *                <p>DS: Record that identifies the DNSSEC signing key of a delegated zone.</p>
   *             </li>
   *             <li>
   *                <p>MX: Specifies mail servers.</p>
   *             </li>
   *             <li>
   *                <p>NAPTR: Regular-expression-based rewriting of domain names.</p>
   *             </li>
   *             <li>
   *                <p>NS: Authoritative name servers.</p>
   *             </li>
   *             <li>
   *                <p>PTR: Maps an IP address to a domain name.</p>
   *             </li>
   *             <li>
   *                <p>SOA: Start of authority record for the zone.</p>
   *             </li>
   *             <li>
   *                <p>SPF: Lists the servers authorized to send emails from a domain.</p>
   *             </li>
   *             <li>
   *                <p>SRV: Application specific values that identify servers.</p>
   *             </li>
   *             <li>
   *                <p>TXT: Verifies email senders and application-specific values.</p>
   *             </li>
   *             <li>
   *                <p>A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be
   * 				defined as TYPENUMBER, where the
   * 				NUMBER can be 1-65334, for
   * 				example, TYPE28. For more information, see
   * 				<a href="https://en.wikipedia.org/wiki/List_of_DNS_record_types">List of DNS record types</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Qtype?: string | undefined;

  /**
   * <p>
   * 			The type of the DNS Firewall Advanced rule. Valid values are:
   * 		</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DGA</code>: Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains
   * 				to to launch malware attacks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DNS_TUNNELING</code>: DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without
   * 				making a network connection to the client.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DnsThreatProtection?: DnsThreatProtection | undefined;

  /**
   * <p>
   * 			The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule. The confidence
   * 			level values mean:
   * 		</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LOW</code>: Provides the highest detection rate for threats, but also increases false positives.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>: Provides a balance between detecting threats and false positives.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code>: Detects only the most well corroborated threats with a low rate of false positives. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ConfidenceThreshold?: ConfidenceThreshold | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleResponse {
  /**
   * <p>The firewall rule that you just created. </p>
   * @public
   */
  FirewallRule?: FirewallRule | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleGroupRequest {
  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>A name that lets you identify the rule group, to manage and use it.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the rule group. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call <a>ListFirewallRules</a>.</p>
 * @public
 */
export interface FirewallRuleGroup {
  /**
   * <p>The ID of the rule group. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the rule group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the rule group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The number of rules in the rule group.</p>
   * @public
   */
  RuleCount?: number | undefined;

  /**
   * <p>The status of the domain list.  </p>
   * @public
   */
  Status?: FirewallRuleGroupStatus | undefined;

  /**
   * <p>Additional information about the status of the rule group, if available.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account,
   *        this is the account that has shared the rule group with you.  </p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another
   *               Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * <p>The date and time that the rule group was created, in Unix time format and Coordinated Universal Time (UTC). </p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The date and time that the rule group was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  ModificationTime?: string | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleGroupResponse {
  /**
   * <p>A collection of rules used to filter DNS network traffic. </p>
   * @public
   */
  FirewallRuleGroup?: FirewallRuleGroup | undefined;
}

/**
 * @public
 */
export interface CreateOutpostResolverRequest {
  /**
   * <p>A unique string that identifies the request
   * 		and that allows failed requests to be retried without the risk of running the operation twice. </p>
   *          <p>
   *             <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   * @public
   */
  CreatorRequestId: string | undefined;

  /**
   * <p>A friendly name that lets you easily find a configuration in the
   * 		Resolver dashboard in the Route 53 console.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Number of Amazon EC2 instances for the
   * 		Resolver on Outpost.
   * 		The default and minimal value is 4.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>
   * 		The Amazon EC2 instance type. If you specify this, you must also specify a value for the <code>OutpostArn</code>.
   * 	</p>
   * @public
   */
  PreferredInstanceType: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost. If you specify this, you must also specify a value for the <code>PreferredInstanceType</code>.</p>
   * @public
   */
  OutpostArn: string | undefined;

  /**
   * <p>
   * 			A string that helps identify the Route 53 Resolvers on Outpost.
   * 		</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A complex type that contains settings for an existing Resolver on an Outpost.</p>
 * @public
 */
export interface OutpostResolver {
  /**
   * <p>The ARN (Amazon Resource Name) for the Resolver on an Outpost.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time that the Outpost Resolver was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The date and time that the Outpost Resolver was modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  ModificationTime?: string | undefined;

  /**
   * <p>A unique string that identifies the request that created the Resolver endpoint.
   * 		The <code>CreatorRequestId</code> allows failed requests to be retried without the risk of running the operation twice.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The ID of the Resolver on Outpost.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Amazon EC2 instance count for the Resolver on the Outpost.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>
   * 			The Amazon EC2 instance type.
   * 		</p>
   * @public
   */
  PreferredInstanceType?: string | undefined;

  /**
   * <p>Name of the Resolver.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Status of the Resolver.</p>
   * @public
   */
  Status?: OutpostResolverStatus | undefined;

  /**
   * <p>A detailed description of the Resolver.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateOutpostResolverResponse {
  /**
   * <p>Information about the <code>CreateOutpostResolver</code>
   * 		request, including the status of the request.</p>
   * @public
   */
  OutpostResolver?: OutpostResolver | undefined;
}

/**
 * <p>In a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>
 * 			request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).
 * 			<code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address.</p>
 * @public
 */
export interface IpAddressRequest {
  /**
   * <p>The ID of the subnet that contains the IP address. </p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>The IPv4 address that you want to use for DNS queries.</p>
   * @public
   */
  Ip?: string | undefined;

  /**
   * <p>
   * 			The IPv6 address that you want to use for DNS queries.
   * 		</p>
   * @public
   */
  Ipv6?: string | undefined;
}

/**
 * @public
 */
export interface CreateResolverEndpointRequest {
  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   * @public
   */
  CreatorRequestId: string | undefined;

  /**
   * <p>A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify
   * 			must include one or more inbound rules (for inbound Resolver endpoints) or outbound rules (for outbound Resolver endpoints).
   * 			Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port
   * 			that you're using for DNS queries on your network.</p>
   *          <p>Some security group rules will cause your connection to be tracked. For outbound resolver endpoint, it can potentially impact the
   * 			maximum queries per second from outbound endpoint to your target name server. For inbound resolver endpoint, it can bring down the overall maximum queries per second per IP address to as low as 1500.
   * 			To avoid connection tracking caused by security group, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#untracked-connectionsl">Untracked connections</a>.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>Specify the applicable value:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INBOUND</code>: Resolver forwards DNS queries to the DNS service for a VPC from your network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTBOUND</code>: Resolver forwards DNS queries from the DNS service for a VPC to your network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INBOUND_DELEGATION</code>: Resolver delegates queries to Route 53 private hosted zones from your network.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Direction: ResolverEndpointDirection | undefined;

  /**
   * <p>The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward
   * 			DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC. </p>
   *          <note>
   *             <p>Even though the minimum is 1, Route 53 requires that you create at least two.</p>
   *          </note>
   * @public
   */
  IpAddresses: IpAddressRequest[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost. If you specify this, you must also specify a
   * 			value for the <code>PreferredInstanceType</code>. </p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The  instance type. If you specify this, you must also specify a value for the <code>OutpostArn</code>.</p>
   * @public
   */
  PreferredInstanceType?: string | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>
   * 			For the endpoint type you can choose either IPv4, IPv6, or dual-stack.
   * 			A dual-stack endpoint means that it will resolve via both IPv4 and IPv6. This
   * 			endpoint type is applied to all IP addresses.
   * 		</p>
   * @public
   */
  ResolverEndpointType?: ResolverEndpointType | undefined;

  /**
   * <p>
   * 			The protocols you want to use for the endpoint. DoH-FIPS is applicable for default inbound endpoints only.
   * 		</p>
   *          <p>For a default inbound endpoint you can apply the protocols as follows:</p>
   *          <ul>
   *             <li>
   *                <p> Do53  and DoH in combination.</p>
   *             </li>
   *             <li>
   *                <p>Do53  and DoH-FIPS in combination.</p>
   *             </li>
   *             <li>
   *                <p>Do53 alone.</p>
   *             </li>
   *             <li>
   *                <p>DoH alone.</p>
   *             </li>
   *             <li>
   *                <p>DoH-FIPS alone.</p>
   *             </li>
   *             <li>
   *                <p>None, which is treated as Do53.</p>
   *             </li>
   *          </ul>
   *          <p>For a delegation inbound endpoint you can use Do53 only.</p>
   *          <p>For an outbound endpoint you can apply the protocols as follows:</p>
   *          <ul>
   *             <li>
   *                <p> Do53  and DoH in combination.</p>
   *             </li>
   *             <li>
   *                <p>Do53 alone.</p>
   *             </li>
   *             <li>
   *                <p>DoH alone.</p>
   *             </li>
   *             <li>
   *                <p>None, which is treated as Do53.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * <p>Specifies whether RNI enhanced metrics are enabled for the Resolver endpoints.
   * 		When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint.
   * 		When set to false, metrics are not published. Default is false.</p>
   *          <note>
   *             <p>Standard CloudWatch pricing and charges are applied for using the Route 53 Resolver
   * 	endpoint RNI enhanced metrics. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-resolver-with-cloudwatch.html">Detailed metrics</a>.</p>
   *          </note>
   * @public
   */
  RniEnhancedMetricsEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether target name server metrics are enabled for the outbound Resolver endpoints.
   * 		When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint.
   * 		When set to false, metrics are not published. Default is false. This is not supported for inbound Resolver endpoints.</p>
   *          <note>
   *             <p>Standard CloudWatch pricing and charges are applied for using the Route 53 Resolver
   * 	endpoint target name server metrics. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-resolver-with-cloudwatch.html">Detailed metrics</a>.</p>
   *          </note>
   * @public
   */
  TargetNameServerMetricsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateResolverEndpointResponse {
  /**
   * <p>Information about the <code>CreateResolverEndpoint</code> request, including the status of the request.</p>
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface CreateResolverQueryLogConfigRequest {
  /**
   * <p>The name that you want to give the query logging configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ARN of the resource that you want Resolver to send query logs. You can send query logs to an S3 bucket, a CloudWatch Logs log group,
   * 			or a Kinesis Data Firehose delivery stream. Examples of valid values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>S3 bucket</b>: </p>
   *                <p>
   *                   <code>arn:aws:s3:::amzn-s3-demo-bucket</code>
   *                </p>
   *                <p>You can optionally append a file prefix to the end of the ARN.</p>
   *                <p>
   *                   <code>arn:aws:s3:::amzn-s3-demo-bucket/development/</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CloudWatch Logs log group</b>: </p>
   *                <p>
   *                   <code>arn:aws:logs:us-west-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Kinesis Data Firehose delivery stream</b>:</p>
   *                <p>
   *                   <code>arn:aws:kinesis:us-east-2:0123456789:stream/my_stream_name</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  DestinationArn: string | undefined;

  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the query logging configuration.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>In the response to a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html">CreateResolverQueryLogConfig</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html">DeleteResolverQueryLogConfig</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html">GetResolverQueryLogConfig</a>,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>
 * 			request, a complex type that contains settings for one query logging configuration.</p>
 * @public
 */
export interface ResolverQueryLogConfig {
  /**
   * <p>The ID for the query logging configuration.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID for the account that created the query logging configuration. </p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The status of the specified query logging configuration. Valid values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>: Resolver is creating the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATED</code>: The query logging configuration was successfully created.
   * 				Resolver is logging queries that originate in the specified VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>: Resolver is deleting this query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: Resolver can't deliver logs to the location that is specified in the query logging configuration.
   * 				Here are two common causes:</p>
   *                <ul>
   *                   <li>
   *                      <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                   </li>
   *                   <li>
   *                      <p>Permissions don't allow sending logs to the destination.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ResolverQueryLogConfigStatus | undefined;

  /**
   * <p>An indication of whether the query logging configuration is shared with other Amazon Web Services accounts, or was shared with the current account by another
   * 			Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * <p>The number of VPCs that are associated with the query logging configuration.</p>
   * @public
   */
  AssociationCount?: number | undefined;

  /**
   * <p>The ARN for the query logging configuration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the query logging configuration. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group, or
   * 			a Kinesis Data Firehose delivery stream.</p>
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * <p>A unique string that identifies the request that created the query logging configuration.
   * 			The <code>CreatorRequestId</code> allows failed requests to be retried without the risk
   * 			of running the operation twice.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  CreationTime?: string | undefined;
}

/**
 * @public
 */
export interface CreateResolverQueryLogConfigResponse {
  /**
   * <p>Information about the <code>CreateResolverQueryLogConfig</code> request, including the status of the request.</p>
   * @public
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig | undefined;
}

/**
 * <p>In a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>
 * 			request, an array of the IPs that you want to forward DNS queries to.</p>
 * @public
 */
export interface TargetAddress {
  /**
   * <p>One IPv4 address that you want to forward DNS queries to.</p>
   * @public
   */
  Ip?: string | undefined;

  /**
   * <p>The port at <code>Ip</code> that you want to forward DNS queries to.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>
   * 			One IPv6 address that you want to forward DNS queries to.
   * 		</p>
   * @public
   */
  Ipv6?: string | undefined;

  /**
   * <p>
   * 			The protocols for the target address. The protocol you choose needs to be supported by the outbound endpoint of the Resolver rule.</p>
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * <p>
   * 			The Server Name Indication of the DoH server that you want to forward queries to.
   * 			This is only used if the Protocol of the <code>TargetAddress</code> is <code>DoH</code>.
   * 		</p>
   * @public
   */
  ServerNameIndication?: string | undefined;
}

/**
 * @public
 */
export interface CreateResolverRuleRequest {
  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried
   * 			without the risk of running the operation twice. <code>CreatorRequestId</code> can be
   * 			any unique string, for example, a date/time stamp. </p>
   * @public
   */
  CreatorRequestId: string | undefined;

  /**
   * <p>A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.</p>
   *          <p>The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>When you want to forward DNS queries for specified domain name to resolvers on your network, specify <code>FORWARD</code> or <code>DELEGATE</code>.</p>
   *          <p>When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for
   * 			a subdomain of that domain, specify <code>SYSTEM</code>.</p>
   *          <p>For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify <code>FORWARD</code>
   * 			for <code>RuleType</code>. To then have Resolver process queries for apex.example.com, you create a rule and specify
   * 			<code>SYSTEM</code> for <code>RuleType</code>.</p>
   *          <p>Currently, only Resolver can create rules that have a value of <code>RECURSIVE</code> for <code>RuleType</code>.</p>
   * @public
   */
  RuleType: RuleTypeOption | undefined;

  /**
   * <p>DNS queries for this domain name are forwarded to the IP addresses that you specify in <code>TargetIps</code>. If a query matches
   * 			multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains
   * 			the most specific domain name (www.example.com).</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The IPs that you want Resolver to forward DNS queries to. You can specify either Ipv4 or Ipv6 addresses but not both in the same rule. Separate IP addresses with a space.</p>
   *          <p>
   *             <code>TargetIps</code> is available only when the value of <code>Rule type</code> is <code>FORWARD</code>.
   * 			You should not provide TargetIps when the Rule type is <code>DELEGATE</code>.</p>
   *          <note>
   *             <p>when creating a DELEGATE rule, you must not provide the <code>TargetIps</code> parameter. If you provide the <code>TargetIps</code>,
   * 			you may receive an ERROR message similar to "Delegate resolver rules need to specify a nameserver name".
   * 			This error means you should not provide <code>TargetIps</code>.</p>
   *          </note>
   * @public
   */
  TargetIps?: TargetAddress[] | undefined;

  /**
   * <p>The ID of the outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify
   * 			in <code>TargetIps</code>.</p>
   * @public
   */
  ResolverEndpointId?: string | undefined;

  /**
   * <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>
   * 			DNS queries with the delegation records that match this domain name are forwarded to the resolvers on your
   * 			network.
   * 		</p>
   * @public
   */
  DelegationRecord?: string | undefined;
}

/**
 * <p>For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries
 * 			out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>,
 * 			or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.</p>
 * @public
 */
export interface ResolverRule {
  /**
   * <p>The ID that Resolver assigned to the Resolver rule when you created it.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>A unique string that you specified when you created the Resolver rule.
   * 				<code>CreatorRequestId</code> identifies the request and allows failed requests to
   * 			be retried without the risk of running the operation twice. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the Resolver rule specified by <code>Id</code>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>DNS queries for this domain name are forwarded to the IP addresses that are specified in <code>TargetIps</code>. If a query matches
   * 			multiple Resolver rules (example.com and www.example.com), the query is routed using the Resolver rule that contains the most specific domain name
   * 			(www.example.com).</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>A code that specifies the current status of the Resolver rule.</p>
   * @public
   */
  Status?: ResolverRuleStatus | undefined;

  /**
   * <p>A detailed description of the status of a Resolver rule.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>When you want to forward DNS queries for specified domain name to resolvers on your network, specify <code>FORWARD</code> or <code>DELEGATE</code>.
   * 			If a query matches multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains
   * 			the most specific domain name (www.example.com).</p>
   *          <p>When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for
   * 			a subdomain of that domain, specify <code>SYSTEM</code>.</p>
   *          <p>For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify <code>FORWARD</code>
   * 			for <code>RuleType</code>. To then have Resolver process queries for apex.example.com, you create a rule and specify
   * 			<code>SYSTEM</code> for <code>RuleType</code>.</p>
   *          <p>Currently, only Resolver can create rules that have a value of <code>RECURSIVE</code> for <code>RuleType</code>.</p>
   * @public
   */
  RuleType?: RuleTypeOption | undefined;

  /**
   * <p>The name for the Resolver rule, which you specified when you created the Resolver rule.</p>
   *          <p>The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically,
   * 			these are the IP addresses of DNS resolvers on your network. </p>
   * @public
   */
  TargetIps?: TargetAddress[] | undefined;

  /**
   * <p>The ID of the endpoint that the rule is associated with.</p>
   * @public
   */
  ResolverEndpointId?: string | undefined;

  /**
   * <p>When a rule is shared with another Amazon Web Services account, the account ID of the account that the rule is shared with.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Whether the rule is shared and, if so, whether the current account is sharing the rule with
   * 			another account, or another account is sharing the rule with the current account.</p>
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * <p>The date and time that the Resolver rule was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The date and time that the Resolver rule was last updated, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  ModificationTime?: string | undefined;

  /**
   * <p>
   * 			DNS queries with delegation records that point to this domain name are forwarded to resolvers on your network.
   * 		</p>
   * @public
   */
  DelegationRecord?: string | undefined;
}

/**
 * @public
 */
export interface CreateResolverRuleResponse {
  /**
   * <p>Information about the <code>CreateResolverRule</code> request, including the status of the request.</p>
   * @public
   */
  ResolverRule?: ResolverRule | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallDomainListRequest {
  /**
   * <p>The ID of the domain list that you want to delete. </p>
   * @public
   */
  FirewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallDomainListResponse {
  /**
   * <p>The domain list that you just deleted. </p>
   * @public
   */
  FirewallDomainList?: FirewallDomainList | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleRequest {
  /**
   * <p>The unique identifier of the firewall rule group that you want to delete the rule from. </p>
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * <p>The ID of the domain list that's used in the rule.  </p>
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * <p>
   * 			The ID that is created for a DNS Firewall Advanced rule.
   * 		</p>
   * @public
   */
  FirewallThreatProtectionId?: string | undefined;

  /**
   * <p>
   * 			The DNS query type that the rule you are deleting evaluates. Allowed values are;
   * 		</p>
   *          <ul>
   *             <li>
   *                <p>
   * 				A: Returns an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>AAAA: Returns an Ipv6 address.</p>
   *             </li>
   *             <li>
   *                <p>CAA: Restricts CAs that can create SSL/TLS certifications for the domain.</p>
   *             </li>
   *             <li>
   *                <p>CNAME: Returns another domain name.</p>
   *             </li>
   *             <li>
   *                <p>DS: Record that identifies the DNSSEC signing key of a delegated zone.</p>
   *             </li>
   *             <li>
   *                <p>MX: Specifies mail servers.</p>
   *             </li>
   *             <li>
   *                <p>NAPTR: Regular-expression-based rewriting of domain names.</p>
   *             </li>
   *             <li>
   *                <p>NS: Authoritative name servers.</p>
   *             </li>
   *             <li>
   *                <p>PTR: Maps an IP address to a domain name.</p>
   *             </li>
   *             <li>
   *                <p>SOA: Start of authority record for the zone.</p>
   *             </li>
   *             <li>
   *                <p>SPF: Lists the servers authorized to send emails from a domain.</p>
   *             </li>
   *             <li>
   *                <p>SRV: Application specific values that identify servers.</p>
   *             </li>
   *             <li>
   *                <p>TXT: Verifies email senders and application-specific values.</p>
   *             </li>
   *             <li>
   *                <p>A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be
   * 				defined as TYPENUMBER, where the
   * 				NUMBER can be 1-65334, for
   * 				example, TYPE28. For more information, see
   * 				<a href="https://en.wikipedia.org/wiki/List_of_DNS_record_types">List of DNS record types</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Qtype?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleResponse {
  /**
   * <p>The specification for the firewall rule that you just deleted.</p>
   * @public
   */
  FirewallRule?: FirewallRule | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleGroupRequest {
  /**
   * <p>The unique identifier of the firewall rule group that you want to delete. </p>
   * @public
   */
  FirewallRuleGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleGroupResponse {
  /**
   * <p>A collection of rules used to filter DNS network traffic. </p>
   * @public
   */
  FirewallRuleGroup?: FirewallRuleGroup | undefined;
}

/**
 * @public
 */
export interface DeleteOutpostResolverRequest {
  /**
   * <p>A unique string that identifies the Resolver on the Outpost.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteOutpostResolverResponse {
  /**
   * <p>Information about the <code>DeleteOutpostResolver</code>
   * 		request, including the status of the request.</p>
   * @public
   */
  OutpostResolver?: OutpostResolver | undefined;
}

/**
 * @public
 */
export interface DeleteResolverEndpointRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to delete.</p>
   * @public
   */
  ResolverEndpointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResolverEndpointResponse {
  /**
   * <p>Information about the <code>DeleteResolverEndpoint</code> request, including the status of the request.</p>
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteResolverQueryLogConfigRequest {
  /**
   * <p>The ID of the query logging configuration that you want to delete.</p>
   * @public
   */
  ResolverQueryLogConfigId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResolverQueryLogConfigResponse {
  /**
   * <p>Information about the query logging configuration that you deleted, including the status of the request.</p>
   * @public
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig | undefined;
}

/**
 * @public
 */
export interface DeleteResolverRuleRequest {
  /**
   * <p>The ID of the Resolver rule that you want to delete.</p>
   * @public
   */
  ResolverRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResolverRuleResponse {
  /**
   * <p>Information about the <code>DeleteResolverRule</code> request, including the status of the request.</p>
   * @public
   */
  ResolverRule?: ResolverRule | undefined;
}

/**
 * @public
 */
export interface DisassociateFirewallRuleGroupRequest {
  /**
   * <p>The identifier of the <a>FirewallRuleGroupAssociation</a>. </p>
   * @public
   */
  FirewallRuleGroupAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFirewallRuleGroupResponse {
  /**
   * <p>The firewall rule group association that you just removed. </p>
   * @public
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverEndpointIpAddressRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to disassociate an IP address from.</p>
   * @public
   */
  ResolverEndpointId: string | undefined;

  /**
   * <p>The IPv4 address that you want to remove from a Resolver endpoint.</p>
   * @public
   */
  IpAddress: IpAddressUpdate | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverEndpointIpAddressResponse {
  /**
   * <p>The response to an <code>DisassociateResolverEndpointIpAddress</code> request.</p>
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverQueryLogConfigRequest {
  /**
   * <p>The ID of the query logging configuration that you want to disassociate a specified VPC from.</p>
   * @public
   */
  ResolverQueryLogConfigId: string | undefined;

  /**
   * <p>The ID of the Amazon VPC that you want to disassociate from a specified query logging configuration.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverQueryLogConfigResponse {
  /**
   * <p>A complex type that contains settings for the association that you deleted between an Amazon VPC and a query logging configuration.</p>
   * @public
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverRuleRequest {
  /**
   * <p>The ID of the VPC that you want to disassociate the Resolver rule from.</p>
   * @public
   */
  VPCId: string | undefined;

  /**
   * <p>The ID of the Resolver rule that you want to disassociate from the specified VPC.</p>
   * @public
   */
  ResolverRuleId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverRuleResponse {
  /**
   * <p>Information about the <code>DisassociateResolverRule</code> request, including the status of the request.</p>
   * @public
   */
  ResolverRuleAssociation?: ResolverRuleAssociation | undefined;
}

/**
 * <p>For Resolver list operations
 * 			(<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>,
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>),
 * 			and
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>),
 * 			an optional specification to return a subset of objects.</p>
 *          <p>To filter objects, such as Resolver endpoints or Resolver rules, you specify <code>Name</code> and <code>Values</code>. For example,
 * 			to list only inbound Resolver endpoints, specify <code>Direction</code> for <code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>. </p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the parameter that you want to use to filter objects.</p>
   *          <p>The valid values for <code>Name</code> depend on the action that you're including the filter in,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>,
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>,
   * 			or
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>.</p>
   *          <note>
   *             <p>In early versions of Resolver, values for <code>Name</code> were listed as uppercase, with underscore (_) delimiters. For example,
   * 				<code>CreatorRequestId</code> was originally listed as <code>CREATOR_REQUEST_ID</code>. Uppercase values for <code>Name</code> are still supported.</p>
   *          </note>
   *          <p>
   *             <b>ListResolverEndpoints</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreatorRequestId</code>: The value that you specified when you created the Resolver endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Direction</code>: Whether you want to return inbound or outbound Resolver endpoints. If you specify <code>DIRECTION</code>
   * 				for <code>Name</code>, specify <code>INBOUND</code> or <code>OUTBOUND</code> for <code>Values</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HostVPCId</code>: The ID of the VPC that inbound DNS queries pass through on the way from your network to your VPCs in a region, or
   * 				the VPC that outbound queries pass through on the way from your VPCs to your network. In a
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>
   * 				request, <code>SubnetId</code> indirectly identifies the VPC. In a
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
   * 				request, the VPC ID for a Resolver endpoint
   * 				is returned in the <code>HostVPCId</code> element. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IpAddressCount</code>: The number of IP addresses that you have associated with the Resolver endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the Resolver endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SecurityGroupIds</code>: The IDs of the VPC security groups that you specified when you created the
   * 				Resolver endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The status of the Resolver endpoint. If you specify <code>Status</code> for <code>Name</code>,
   * 				specify one of the following status codes for <code>Values</code>: <code>CREATING</code>, <code>OPERATIONAL</code>, <code>UPDATING</code>,
   * 				<code>AUTO_RECOVERING</code>, <code>ACTION_NEEDED</code>, or <code>DELETING</code>. For more information, see <code>Status</code> in
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverEndpoint.html">ResolverEndpoint</a>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>ListResolverRules</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreatorRequestId</code>: The value that you specified when you created the Resolver rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DomainName</code>: The domain name for which Resolver is forwarding DNS queries to your network. In the value that
   * 				you specify for <code>Values</code>, include a trailing dot (.) after the domain name. For example, if the domain name is example.com,
   * 				specify the following value. Note the "." after <code>com</code>:</p>
   *                <p>
   *                   <code>example.com.</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the Resolver rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResolverEndpointId</code>: The ID of the Resolver endpoint that the Resolver rule is associated with.</p>
   *                <note>
   *                   <p>You can filter on the Resolver endpoint only for rules that have a value of <code>FORWARD</code> for
   * 					<code>RuleType</code>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The status of the Resolver rule. If you specify <code>Status</code> for <code>Name</code>,
   * 				specify one of the following status codes for <code>Values</code>: <code>COMPLETE</code>, <code>DELETING</code>, <code>UPDATING</code>,
   * 				or <code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Type</code>: The type of the Resolver rule. If you specify <code>TYPE</code>
   * 				for <code>Name</code>, specify <code>FORWARD</code> or <code>SYSTEM</code> for <code>Values</code>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>ListResolverRuleAssociations</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the Resolver rule association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResolverRuleId</code>: The ID of the Resolver rule that is associated with one or more VPCs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The status of the Resolver rule association. If you specify <code>Status</code> for <code>Name</code>,
   * 				specify one of the following status codes for <code>Values</code>: <code>CREATING</code>, <code>COMPLETE</code>, <code>DELETING</code>, or
   * 				<code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VPCId</code>: The ID of the VPC that the Resolver rule is associated with.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>ListResolverQueryLogConfigs</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Arn</code>: The ARN for the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AssociationCount</code>: The number of VPCs that are associated with the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>: The date and time that the query logging configuration was created, in Unix time format and
   * 				Coordinated Universal Time (UTC). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreatorRequestId</code>: A unique string that identifies the request that created the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Destination</code>: The Amazon Web Services service that you want to forward query logs to. Valid values include the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>S3</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CloudWatchLogs</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>KinesisFirehose</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationArn</code>: The ARN of the location that Resolver is sending query logs to. This value can be the ARN for an
   * 				S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Id</code>: The ID of the query logging configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the query logging configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OwnerId</code>: The Amazon Web Services account ID for the account that created the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShareStatus</code>: An indication of whether the query logging configuration is shared with other Amazon Web Services accounts,
   * 				or was shared with the current account by another Amazon Web Services account. Valid values include: <code>NOT_SHARED</code>, <code>SHARED_WITH_ME</code>,
   * 				or <code>SHARED_BY_ME</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The status of the query logging configuration. If you specify <code>Status</code> for <code>Name</code>,
   * 				specify the applicable status code for <code>Values</code>: <code>CREATING</code>, <code>CREATED</code>,
   * 				<code>DELETING</code>, or <code>FAILED</code>. For more information, see
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverQueryLogConfig.html#Route53Resolver-Type-route53resolver_ResolverQueryLogConfig-Status">Status</a>.
   * 				</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>ListResolverQueryLogConfigAssociations</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>: The date and time that the VPC was associated with the query logging configuration, in Unix time format and
   * 				Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Error</code>: If the value of <code>Status</code> is <code>FAILED</code>, specify the cause:
   * 				<code>DESTINATION_NOT_FOUND</code> or <code>ACCESS_DENIED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Id</code>: The ID of the query logging association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResolverQueryLogConfigId</code>: The ID of the query logging configuration that a VPC is associated with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceId</code>: The ID of the Amazon VPC that is associated with the query logging configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The status of the query logging association. If you specify <code>Status</code> for <code>Name</code>,
   * 				specify the applicable status code for <code>Values</code>: <code>CREATING</code>, <code>CREATED</code>,
   * 				<code>DELETING</code>, or <code>FAILED</code>. For more information, see
   * 			    <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverQueryLogConfigAssociation.html#Route53Resolver-Type-route53resolver_ResolverQueryLogConfigAssociation-Status">Status</a>.
   * 				</p>
   *             </li>
   *          </ul>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as Resolver endpoints or Resolver rules,
   * 			the value of the parameter that you want to use to filter objects. For example, to list only inbound Resolver endpoints, specify <code>Direction</code> for
   * 			<code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>Configuration of the firewall behavior provided by DNS Firewall for a single VPC from
 * 			Amazon Virtual Private Cloud (Amazon VPC). </p>
 * @public
 */
export interface FirewallConfig {
  /**
   * <p>The ID of the firewall configuration.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the VPC that this firewall configuration applies to.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the VPC that this firewall configuration applies to.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Determines how DNS Firewall operates during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. </p>
   *          <ul>
   *             <li>
   *                <p>By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall returns
   *            a failure error when it is unable to properly evaluate a query. </p>
   *             </li>
   *             <li>
   *                <p>If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it
   *        is unable to properly evaluate them. </p>
   *             </li>
   *          </ul>
   *          <p>This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association. </p>
   * @public
   */
  FirewallFailOpen?: FirewallFailOpenStatus | undefined;
}

/**
 * <p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p>
 *          <p>To retrieve full information for a firewall domain list, call  <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p>
 * @public
 */
export interface FirewallDomainListMetadata {
  /**
   * <p>The ID of the domain list. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the firewall domain list metadata.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the domain list. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The owner of the list, used only for lists that are not managed by you. For example, the managed domain list <code>AWSManagedDomainsMalwareDomainList</code> has the managed owner name <code>Route 53 Resolver DNS Firewall</code>.</p>
   * @public
   */
  ManagedOwnerName?: string | undefined;
}

/**
 * <p>Minimal high-level information for a firewall rule group. The action <a>ListFirewallRuleGroups</a> returns an array of these objects. </p>
 *          <p>To retrieve full information for a firewall rule group, call <a>GetFirewallRuleGroup</a> and <a>ListFirewallRules</a>.</p>
 * @public
 */
export interface FirewallRuleGroupMetadata {
  /**
   * <p>The ID of the rule group. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the rule group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the rule group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account,
   *        this is the account that has shared the rule group with you.  </p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>A unique string defined by you to identify the request. This allows you to retry failed
   * 			requests without the risk of running the operation twice. This can be any unique string,
   * 			for example, a timestamp. </p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another
   *               Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   * @public
   */
  ShareStatus?: ShareStatus | undefined;
}

/**
 * @public
 */
export interface GetFirewallConfigRequest {
  /**
   * <p>The ID of the VPC from Amazon VPC that the configuration is for.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallConfigResponse {
  /**
   * <p>Configuration of the firewall behavior provided by DNS Firewall for a single VPC from
   * 			AmazonVPC. </p>
   * @public
   */
  FirewallConfig?: FirewallConfig | undefined;
}

/**
 * @public
 */
export interface GetFirewallDomainListRequest {
  /**
   * <p>The ID of the domain list.  </p>
   * @public
   */
  FirewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallDomainListResponse {
  /**
   * <p>The domain list that you requested.  </p>
   * @public
   */
  FirewallDomainList?: FirewallDomainList | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupRequest {
  /**
   * <p>The unique identifier of the firewall rule group. </p>
   * @public
   */
  FirewallRuleGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupResponse {
  /**
   * <p>A collection of rules used to filter DNS network traffic. </p>
   * @public
   */
  FirewallRuleGroup?: FirewallRuleGroup | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupAssociationRequest {
  /**
   * <p>The identifier of the <a>FirewallRuleGroupAssociation</a>. </p>
   * @public
   */
  FirewallRuleGroupAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupAssociationResponse {
  /**
   * <p>The association that you requested. </p>
   * @public
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupPolicyRequest {
  /**
   * <p>The ARN (Amazon Resource Name) for the rule group.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupPolicyResponse {
  /**
   * <p>The Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule
   * 			group. You can use the policy to share the rule group using Resource Access Manager
   * 			(RAM). </p>
   * @public
   */
  FirewallRuleGroupPolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostResolverRequest {
  /**
   * <p>The ID of the Resolver on the Outpost.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostResolverResponse {
  /**
   * <p>Information about the <code>GetOutpostResolver</code>
   * 		request, including the status of the request.</p>
   * @public
   */
  OutpostResolver?: OutpostResolver | undefined;
}

/**
 * @public
 */
export interface GetResolverConfigRequest {
  /**
   * <p>Resource ID of the Amazon VPC that you want to get information about.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * <p>A complex type that contains information about a Resolver configuration for a VPC.</p>
 * @public
 */
export interface ResolverConfig {
  /**
   * <p>ID for the Resolver configuration.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud VPC or a Route 53 Profile that you're configuring Resolver for.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The owner account ID of the Amazon Virtual Private Cloud VPC.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p> The status of whether or not the Resolver will create autodefined rules for reverse DNS
   * 			lookups. This is enabled by default. The status can be one of following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ENABLING:</b> Autodefined rules for reverse DNS lookups are being
   * 					enabled but are not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ENABLED:</b> Autodefined rules for reverse DNS lookups are
   * 					enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DISABLING:</b> Autodefined rules for reverse DNS lookups are
   * 					being disabled but are not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DISABLED:</b> Autodefined rules for reverse DNS lookups are
   * 					disabled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AutodefinedReverse?: ResolverAutodefinedReverseStatus | undefined;
}

/**
 * @public
 */
export interface GetResolverConfigResponse {
  /**
   * <p>Information about the behavior configuration of Route 53 Resolver behavior for the VPC you
   * 			specified in the <code>GetResolverConfig</code> request.</p>
   * @public
   */
  ResolverConfig?: ResolverConfig | undefined;
}

/**
 * @public
 */
export interface GetResolverDnssecConfigRequest {
  /**
   * <p>The ID of the virtual private cloud (VPC) for the DNSSEC validation status.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * <p>A complex type that contains information about a configuration for DNSSEC validation.</p>
 * @public
 */
export interface ResolverDnssecConfig {
  /**
   * <p>The ID for a configuration for DNSSEC validation.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The owner account ID of the virtual private cloud (VPC) for a configuration for DNSSEC validation.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The ID of the virtual private cloud (VPC) that you're configuring the DNSSEC validation status for.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The validation status for a DNSSEC configuration. The status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ENABLING:</b> DNSSEC validation is being enabled but is not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ENABLED:</b> DNSSEC validation is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DISABLING:</b> DNSSEC validation is being disabled but is not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DISABLED</b> DNSSEC validation is disabled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidationStatus?: ResolverDNSSECValidationStatus | undefined;
}

/**
 * @public
 */
export interface GetResolverDnssecConfigResponse {
  /**
   * <p>The information about a configuration for DNSSEC validation.</p>
   * @public
   */
  ResolverDNSSECConfig?: ResolverDnssecConfig | undefined;
}

/**
 * @public
 */
export interface GetResolverEndpointRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to get information about.</p>
   * @public
   */
  ResolverEndpointId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverEndpointResponse {
  /**
   * <p>Information about the Resolver endpoint that you specified in a <code>GetResolverEndpoint</code> request.</p>
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigRequest {
  /**
   * <p>The ID of the Resolver query logging configuration that you want to get information about.</p>
   * @public
   */
  ResolverQueryLogConfigId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigResponse {
  /**
   * <p>Information about the Resolver query logging configuration that you specified in a <code>GetQueryLogConfig</code> request.</p>
   * @public
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigAssociationRequest {
  /**
   * <p>The ID of the Resolver query logging configuration association that you want to get information about.</p>
   * @public
   */
  ResolverQueryLogConfigAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigAssociationResponse {
  /**
   * <p>Information about the Resolver query logging configuration association that you specified in a <code>GetQueryLogConfigAssociation</code> request.</p>
   * @public
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigPolicyRequest {
  /**
   * <p>The ARN of the query logging configuration that you want to get the query logging policy for.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigPolicyResponse {
  /**
   * <p>Information about the query logging policy for the query logging configuration that you specified in a
   * 			<code>GetResolverQueryLogConfigPolicy</code> request.</p>
   * @public
   */
  ResolverQueryLogConfigPolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRuleRequest {
  /**
   * <p>The ID of the Resolver rule that you want to get information about.</p>
   * @public
   */
  ResolverRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRuleResponse {
  /**
   * <p>Information about the Resolver rule that you specified in a <code>GetResolverRule</code> request.</p>
   * @public
   */
  ResolverRule?: ResolverRule | undefined;
}

/**
 * @public
 */
export interface GetResolverRuleAssociationRequest {
  /**
   * <p>The ID of the Resolver rule association that you want to get information about.</p>
   * @public
   */
  ResolverRuleAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRuleAssociationResponse {
  /**
   * <p>Information about the Resolver rule association that you specified in a <code>GetResolverRuleAssociation</code> request.</p>
   * @public
   */
  ResolverRuleAssociation?: ResolverRuleAssociation | undefined;
}

/**
 * @public
 */
export interface GetResolverRulePolicyRequest {
  /**
   * <p>The ID of the Resolver rule that you want to get the Resolver rule policy for.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRulePolicyResponse {
  /**
   * <p>The Resolver rule policy for the rule that you specified in a <code>GetResolverRulePolicy</code> request.</p>
   * @public
   */
  ResolverRulePolicy?: string | undefined;
}

/**
 * @public
 */
export interface ImportFirewallDomainsRequest {
  /**
   * <p>The ID of the domain list that you want to modify with the import operation.</p>
   * @public
   */
  FirewallDomainListId: string | undefined;

  /**
   * <p>What you want DNS Firewall to do with the domains that are listed in the file. This must be set to <code>REPLACE</code>, which updates the domain list to exactly match the list in the file. </p>
   * @public
   */
  Operation: FirewallDomainImportOperation | undefined;

  /**
   * <p>The fully qualified URL or URI of the file stored in Amazon Simple Storage Service
   * 			(Amazon S3) that contains the list of domains to import.</p>
   *          <p>The file must be in an S3 bucket that's in the same Region
   *        as your DNS Firewall. The file must be a text file and must contain a single domain per line.</p>
   * @public
   */
  DomainFileUrl: string | undefined;
}

/**
 * @public
 */
export interface ImportFirewallDomainsResponse {
  /**
   * <p>The Id of the firewall domain list that DNS Firewall just updated.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the domain list. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Status of the import request.</p>
   * @public
   */
  Status?: FirewallDomainListStatus | undefined;

  /**
   * <p>Additional information about the status of the list, if available.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>In the response to a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
 * 			request, information about the IP addresses that the Resolver endpoint uses for DNS queries.</p>
 * @public
 */
export interface IpAddressResponse {
  /**
   * <p>The ID of one IP address.</p>
   * @public
   */
  IpId?: string | undefined;

  /**
   * <p>The ID of one subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>One IPv4 address that the Resolver endpoint uses for DNS queries.</p>
   * @public
   */
  Ip?: string | undefined;

  /**
   * <p>
   * 			One IPv6 address that the Resolver endpoint uses for DNS queries.
   * 		</p>
   * @public
   */
  Ipv6?: string | undefined;

  /**
   * <p>A status code that gives the current status of the request.</p>
   * @public
   */
  Status?: IpAddressStatus | undefined;

  /**
   * <p>A message that provides additional information about the status of the request.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The date and time that the IP address was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The date and time that the IP address was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   * @public
   */
  ModificationTime?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallConfigsRequest {
  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallConfigsResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The configurations for the firewall behavior provided by DNS Firewall for VPCs from
   * 			Amazon Virtual Private Cloud (Amazon VPC). </p>
   * @public
   */
  FirewallConfigs?: FirewallConfig[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainListsRequest {
  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainListsResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of the domain lists that you have defined.   </p>
   *          <p>This might be a partial list of the domain lists that you've defined. For information,
   * 			see <code>MaxResults</code>. </p>
   * @public
   */
  FirewallDomainLists?: FirewallDomainListMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainsRequest {
  /**
   * <p>The ID of the domain list whose domains you want to retrieve. </p>
   * @public
   */
  FirewallDomainListId: string | undefined;

  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainsResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of the domains in the firewall domain list.  </p>
   *          <p>This might be a partial list of the domains that you've defined in the domain list. For
   * 			information, see <code>MaxResults</code>. </p>
   * @public
   */
  Domains?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallRuleGroupAssociationsRequest {
  /**
   * <p>The unique identifier of the firewall rule group that you want to retrieve the associations
   *            for. Leave this blank to retrieve associations for any rule group. </p>
   * @public
   */
  FirewallRuleGroupId?: string | undefined;

  /**
   * <p>The unique identifier of the VPC that you want to retrieve the associations
   *            for. Leave this blank to retrieve associations for any VPC. </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule group among the rule
   * 			groups that are associated with a single VPC. DNS Firewall filters VPC traffic starting
   * 			from the rule group with the lowest numeric priority setting. </p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The association <code>Status</code> setting that you want DNS Firewall to filter on for the list. If you don't specify this, then DNS Firewall returns all associations, regardless of status.</p>
   * @public
   */
  Status?: FirewallRuleGroupAssociationStatus | undefined;

  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallRuleGroupAssociationsResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of your firewall rule group associations.</p>
   *          <p>This might be a partial list of the associations that you have defined. For information, see <code>MaxResults</code>. </p>
   * @public
   */
  FirewallRuleGroupAssociations?: FirewallRuleGroupAssociation[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallRuleGroupsRequest {
  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallRuleGroupsResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of your firewall rule groups.</p>
   *          <p>This might be a partial list of the rule groups that you have defined. For information, see <code>MaxResults</code>. </p>
   * @public
   */
  FirewallRuleGroups?: FirewallRuleGroupMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallRulesRequest {
  /**
   * <p>The unique identifier of the firewall rule group that you want to retrieve the rules for. </p>
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * <p>Optional additional filter for the rules to retrieve.</p>
   *          <p>The setting that determines the processing order of the rules in a rule group. DNS Firewall
   *            processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>Optional additional filter for the rules to retrieve.</p>
   *          <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - Permit the request to go through. Not availabe for DNS Firewall Advanced rules.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> - Permit the request to go through but send an alert to the logs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - Disallow the request. If this is specified, additional handling details are provided in the rule's <code>BlockResponse</code> setting. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The maximum number of objects that you want Resolver to return for this request. If more
   *             objects are available, in the response, Resolver provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first call to this list request, omit this value.</p>
   *          <p>When you request a list of objects, Resolver returns at most the number of objects
   *        specified in <code>MaxResults</code>. If more objects are available for retrieval,
   *            Resolver returns a <code>NextToken</code> value in the response. To retrieve the next
   *                batch of objects, use the token that was returned for the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallRulesResponse {
  /**
   * <p>If objects are still available for retrieval, Resolver returns this token in the response.
   *            To retrieve the next batch of objects, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of the rules that you have defined.  </p>
   *          <p>This might be a partial list of the firewall rules that you've defined. For information,
   * 			see <code>MaxResults</code>. </p>
   * @public
   */
  FirewallRules?: FirewallRule[] | undefined;
}

/**
 * @public
 */
export interface ListOutpostResolversRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The maximum number of Resolvers on the Outpost that you want to return in the response to a
   * 				<code>ListOutpostResolver</code> request. If you don't specify a value for
   * 				<code>MaxResults</code>, the request returns up to 100 Resolvers.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first <code>ListOutpostResolver</code> request, omit this value.</p>
   *          <p></p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutpostResolversResponse {
  /**
   * <p>The Resolvers on Outposts that were created by using the current Amazon Web Services account,
   * 		and that match the specified filters, if any.</p>
   * @public
   */
  OutpostResolvers?: OutpostResolver[] | undefined;

  /**
   * <p>If more than <code>MaxResults</code> Resolvers match the specified criteria, you can submit another
   * 		<code>ListOutpostResolver</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolverConfigsRequest {
  /**
   * <p>The maximum number of Resolver configurations that you want to return in the response to
   * 			a <code>ListResolverConfigs</code> request. If you don't specify a value for <code>MaxResults</code>,
   * 			up to 100 Resolver configurations are returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> Resolver configurations, use
   * 			<code>NextToken</code> to get the second and subsequent pages of results.</p>
   *          <p>For the first <code>ListResolverConfigs</code> request, omit this value.</p>
   *          <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and
   * 			specify that value for <code>NextToken</code> in the request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolverConfigsResponse {
  /**
   * <p>If a response includes the last of the Resolver configurations that are associated with the current Amazon Web Services account,
   * 			<code>NextToken</code> doesn't appear in the response.</p>
   *          <p>If a response doesn't include the last of the configurations, you can get more configurations by submitting another
   * 			<code>ListResolverConfigs</code> request.
   * 			Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in
   * 			<code>NextToken</code> in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array that contains one <code>ResolverConfigs</code> element for each Resolver configuration that is associated
   * 			with the current Amazon Web Services account.</p>
   * @public
   */
  ResolverConfigs?: ResolverConfig[] | undefined;
}

/**
 * @public
 */
export interface ListResolverDnssecConfigsRequest {
  /**
   * <p>
   *             <i>Optional</i>: An integer that specifies the maximum number of DNSSEC configuration results that you want Amazon Route 53 to return.
   * 			If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 100 configuration per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> DNSSEC configurations, use <code>NextToken</code>
   * 			to get the second and subsequent pages of results.</p>
   *          <p>For the first <code>ListResolverDnssecConfigs</code> request, omit this value.</p>
   *          <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value
   * 			for <code>NextToken</code> in the request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional specification to return a subset of objects.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListResolverDnssecConfigsResponse {
  /**
   * <p>If a response includes the last of the DNSSEC configurations that are associated with the current Amazon Web Services account,
   * 			<code>NextToken</code> doesn't appear in the response.</p>
   *          <p>If a response doesn't include the last of the configurations, you can get more configurations by submitting another
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>
   * 			request. Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in
   * 			<code>NextToken</code> in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array that contains one
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResolverDnssecConfig.html">ResolverDnssecConfig</a> element
   * 			for each configuration for DNSSEC validation that is associated with the current Amazon Web Services account.
   * 			 It doesn't contain disabled DNSSEC configurations for the resource.</p>
   * @public
   */
  ResolverDnssecConfigs?: ResolverDnssecConfig[] | undefined;
}

/**
 * @public
 */
export interface ListResolverEndpointIpAddressesRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to get IP addresses for.</p>
   * @public
   */
  ResolverEndpointId: string | undefined;

  /**
   * <p>The maximum number of IP addresses that you want to return in the response to a <code>ListResolverEndpointIpAddresses</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 IP addresses. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first <code>ListResolverEndpointIpAddresses</code> request, omit this value.</p>
   *          <p>If the specified Resolver endpoint has more than <code>MaxResults</code> IP addresses, you can submit another
   * 			<code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolverEndpointIpAddressesResponse {
  /**
   * <p>If the specified endpoint has more than <code>MaxResults</code> IP addresses, you can submit another
   * 			<code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request,
   * 			specify the value of <code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Information about the IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward
   * 			DNS queries to (for inbound endpoints).</p>
   * @public
   */
  IpAddresses?: IpAddressResponse[] | undefined;
}

/**
 * @public
 */
export interface ListResolverEndpointsRequest {
  /**
   * <p>The maximum number of Resolver endpoints that you want to return in the response to a <code>ListResolverEndpoints</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 Resolver endpoints. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first <code>ListResolverEndpoints</code> request, omit this value.</p>
   *          <p>If you have more than <code>MaxResults</code> Resolver endpoints, you can submit another <code>ListResolverEndpoints</code> request
   * 			to get the next group of Resolver endpoints. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional specification to return a subset of Resolver endpoints, such as all inbound Resolver endpoints.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverEndpoints</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListResolverEndpointsResponse {
  /**
   * <p>If more than <code>MaxResults</code> IP addresses match the specified criteria, you can submit another <code>ListResolverEndpoint</code> request
   * 			to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Resolver endpoints that were created by using the current Amazon Web Services account, and that match the specified filters, if any.</p>
   * @public
   */
  ResolverEndpoints?: ResolverEndpoint[] | undefined;
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigAssociationsRequest {
  /**
   * <p>The maximum number of query logging associations that you want to return in the response to a <code>ListResolverQueryLogConfigAssociations</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 query logging associations. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first <code>ListResolverQueryLogConfigAssociations</code> request, omit this value.</p>
   *          <p>If there are more than <code>MaxResults</code> query logging associations that match the values that you specify for <code>Filters</code>,
   * 			you can submit another <code>ListResolverQueryLogConfigAssociations</code> request to get the next group of associations. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional specification to return a subset of query logging associations.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The element that you want Resolver to sort query logging associations by. </p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortBy</code>, if any, as in the previous request.</p>
   *          </note>
   *          <p>Valid values include the following elements:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>: The ID of the query logging association.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Error</code>: If the value of <code>Status</code> is <code>FAILED</code>, the value of <code>Error</code>
   * 				indicates the cause: </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>DESTINATION_NOT_FOUND</code>: The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ACCESS_DENIED</code>: Permissions don't allow sending logs to the destination.</p>
   *                   </li>
   *                </ul>
   *                <p>If <code>Status</code> is a value other than <code>FAILED</code>, <code>ERROR</code> is null.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Id</code>: The ID of the query logging association</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResolverQueryLogConfigId</code>: The ID of the query logging configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceId</code>: The ID of the VPC that is associated with the query logging configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The current status of the configuration. Valid values include the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>CREATING</code>: Resolver is creating an association between an Amazon VPC and a query logging configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CREATED</code>: The association between an Amazon VPC and a query logging configuration
   * 						was successfully created. Resolver is logging queries that originate in the specified VPC.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DELETING</code>: Resolver is deleting this query logging association.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FAILED</code>: Resolver either couldn't create or couldn't delete the query logging association.
   * 						Here are two common causes:</p>
   *                      <ul>
   *                         <li>
   *                            <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                         </li>
   *                         <li>
   *                            <p>Permissions don't allow sending logs to the destination.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  SortBy?: string | undefined;

  /**
   * <p>If you specified a value for <code>SortBy</code>, the order that you want query logging associations to be listed in,
   * 			<code>ASCENDING</code> or <code>DESCENDING</code>.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortOrder</code>, if any, as in the previous request.</p>
   *          </note>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigAssociationsResponse {
  /**
   * <p>If there are more than <code>MaxResults</code> query logging associations, you can submit another <code>ListResolverQueryLogConfigAssociations</code> request
   * 			to get the next group of associations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of query logging associations that were created by the current account in the specified Region. This count can differ from the
   * 			number of associations that are returned in a <code>ListResolverQueryLogConfigAssociations</code> response, depending on the values that you specify
   * 			in the request.</p>
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * <p>The total number of query logging associations that were created by the current account in the specified Region and that match the filters
   * 			that were specified in the <code>ListResolverQueryLogConfigAssociations</code> request. For the total number of associations that were created by the
   * 			current account in the specified Region, see <code>TotalCount</code>.</p>
   * @public
   */
  TotalFilteredCount?: number | undefined;

  /**
   * <p>A list that contains one <code>ResolverQueryLogConfigAssociations</code> element for each query logging association that matches the
   * 			values that you specified for <code>Filter</code>.</p>
   * @public
   */
  ResolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociation[] | undefined;
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigsRequest {
  /**
   * <p>The maximum number of query logging configurations that you want to return in the response to a <code>ListResolverQueryLogConfigs</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 query logging configurations. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first <code>ListResolverQueryLogConfigs</code> request, omit this value.</p>
   *          <p>If there are more than <code>MaxResults</code> query logging configurations that match the values that you specify for <code>Filters</code>,
   * 			you can submit another <code>ListResolverQueryLogConfigs</code> request to get the next group of configurations. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional specification to return a subset of query logging configurations.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The element that you want Resolver to sort query logging configurations by. </p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortBy</code>, if any, as in the previous request.</p>
   *          </note>
   *          <p>Valid values include the following elements:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Arn</code>: The ARN of the query logging configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AssociationCount</code>: The number of VPCs that are associated with the specified configuration </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>: The date and time that Resolver returned when the configuration was created</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreatorRequestId</code>: The value that was specified for <code>CreatorRequestId</code> when the configuration was created</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationArn</code>: The location that logs are sent to</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Id</code>: The ID of the configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code>: The name of the configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OwnerId</code>: The Amazon Web Services account number of the account that created the configuration</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ShareStatus</code>: Whether the configuration is shared with other Amazon Web Services accounts or shared with the current account by
   * 				another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>: The current status of the configuration. Valid values include the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>CREATING</code>: Resolver is creating the query logging configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CREATED</code>: The query logging configuration was successfully created.
   * 						Resolver is logging queries that originate in the specified VPC.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DELETING</code>: Resolver is deleting this query logging configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FAILED</code>: Resolver either couldn't create or couldn't delete the query logging configuration.
   * 						Here are two common causes:</p>
   *                      <ul>
   *                         <li>
   *                            <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p>
   *                         </li>
   *                         <li>
   *                            <p>Permissions don't allow sending logs to the destination.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  SortBy?: string | undefined;

  /**
   * <p>If you specified a value for <code>SortBy</code>, the order that you want query logging configurations to be listed in,
   * 			<code>ASCENDING</code> or <code>DESCENDING</code>.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter,
   * 				you must use the same value for <code>SortOrder</code>, if any, as in the previous request.</p>
   *          </note>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigsResponse {
  /**
   * <p>If there are more than <code>MaxResults</code> query logging configurations, you can submit another <code>ListResolverQueryLogConfigs</code> request
   * 			to get the next group of configurations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of query logging configurations that were created by the current account in the specified Region. This count can differ from the
   * 			number of query logging configurations that are returned in a <code>ListResolverQueryLogConfigs</code> response, depending on the values that you specify
   * 			in the request.</p>
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * <p>The total number of query logging configurations that were created by the current account in the specified Region and that match the filters
   * 			that were specified in the <code>ListResolverQueryLogConfigs</code> request. For the total number of query logging configurations that were created by the
   * 			current account in the specified Region, see <code>TotalCount</code>.</p>
   * @public
   */
  TotalFilteredCount?: number | undefined;

  /**
   * <p>A list that contains one <code>ResolverQueryLogConfig</code> element for each query logging configuration that matches the
   * 			values that you specified for <code>Filter</code>.</p>
   * @public
   */
  ResolverQueryLogConfigs?: ResolverQueryLogConfig[] | undefined;
}

/**
 * @public
 */
export interface ListResolverRuleAssociationsRequest {
  /**
   * <p>The maximum number of rule associations that you want to return in the response to a <code>ListResolverRuleAssociations</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 rule associations. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first <code>ListResolverRuleAssociation</code> request, omit this value.</p>
   *          <p>If you have more than <code>MaxResults</code> rule associations, you can submit another <code>ListResolverRuleAssociation</code> request
   * 			to get the next group of rule associations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional specification to return a subset of Resolver rules, such as Resolver rules that are associated with the same VPC ID.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverRuleAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListResolverRuleAssociationsResponse {
  /**
   * <p>If more than <code>MaxResults</code> rule associations match the specified criteria, you can submit another
   * 			<code>ListResolverRuleAssociation</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The associations that were created between Resolver rules and VPCs using the current Amazon Web Services account, and that match the
   * 			specified filters, if any.</p>
   * @public
   */
  ResolverRuleAssociations?: ResolverRuleAssociation[] | undefined;
}

/**
 * @public
 */
export interface ListResolverRulesRequest {
  /**
   * <p>The maximum number of Resolver rules that you want to return in the response to a <code>ListResolverRules</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 Resolver rules.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first <code>ListResolverRules</code> request, omit this value.</p>
   *          <p>If you have more than <code>MaxResults</code> Resolver rules, you can submit another <code>ListResolverRules</code> request
   * 			to get the next group of Resolver rules. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional specification to return a subset of Resolver rules, such as all Resolver rules that are associated with the same Resolver endpoint.</p>
   *          <note>
   *             <p>If you submit a second or subsequent <code>ListResolverRules</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListResolverRulesResponse {
  /**
   * <p>If more than <code>MaxResults</code> Resolver rules match the specified criteria, you can submit another
   * 			<code>ListResolverRules</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Resolver rules that were created using the current Amazon Web Services account and that match the specified filters, if any.</p>
   * @public
   */
  ResolverRules?: ResolverRule[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that you want to list tags for.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The maximum number of tags that you want to return in the response to a <code>ListTagsForResource</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 tags.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>For the first <code>ListTagsForResource</code> request, omit this value.</p>
   *          <p>If you have more than <code>MaxResults</code> tags, you can submit another <code>ListTagsForResource</code> request
   * 			to get the next group of tags for the resource. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are associated with the resource that you specified in the <code>ListTagsForResource</code> request.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>If more than <code>MaxResults</code> tags match the specified criteria, you can submit another
   * 			<code>ListTagsForResource</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutFirewallRuleGroupPolicyRequest {
  /**
   * <p>The ARN (Amazon Resource Name) for the rule group that you want to share.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The Identity and Access Management (Amazon Web Services IAM) policy to attach to the rule group.</p>
   * @public
   */
  FirewallRuleGroupPolicy: string | undefined;
}

/**
 * @public
 */
export interface PutFirewallRuleGroupPolicyResponse {
  /**
   * <p></p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface PutResolverQueryLogConfigPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that you want to share rules with.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>An Identity and Access Management policy statement that lists the query logging configurations that you want to share with another Amazon Web Services account
   * 			and the operations that you want the account to be able to perform. You can specify the following operations in the <code>Actions</code> section
   * 			of the statement:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>route53resolver:AssociateResolverQueryLogConfig</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:DisassociateResolverQueryLogConfig</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:ListResolverQueryLogConfigs</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>In the <code>Resource</code> section of the statement, you specify the ARNs for the query logging configurations that you want to share
   * 			with the account that you specified in <code>Arn</code>. </p>
   * @public
   */
  ResolverQueryLogConfigPolicy: string | undefined;
}

/**
 * <p>The response to a <code>PutResolverQueryLogConfigPolicy</code> request.</p>
 * @public
 */
export interface PutResolverQueryLogConfigPolicyResponse {
  /**
   * <p>Whether the <code>PutResolverQueryLogConfigPolicy</code> request was successful.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface PutResolverRulePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule that you want to share with another account.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>An Identity and Access Management policy statement that lists the rules that you want to share with another Amazon Web Services account and the operations that you want the account
   * 			to be able to perform. You can specify the following operations in the <code>Action</code> section of the statement:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>route53resolver:GetResolverRule</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:AssociateResolverRule</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:DisassociateResolverRule</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:ListResolverRules</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>route53resolver:ListResolverRuleAssociations</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>In the <code>Resource</code> section of the statement, specify the ARN for the rule that you want to share with another account. Specify the same ARN
   * 			that you specified in <code>Arn</code>.</p>
   * @public
   */
  ResolverRulePolicy: string | undefined;
}

/**
 * <p>The response to a <code>PutResolverRulePolicy</code> request.</p>
 * @public
 */
export interface PutResolverRulePolicyResponse {
  /**
   * <p>Whether the <code>PutResolverRulePolicy</code> request was successful.</p>
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * <p>In an
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a>
 * 			request, information about the changes that you want to make.</p>
 * @public
 */
export interface ResolverRuleConfig {
  /**
   * <p>The new name for the Resolver rule. The name that you specify appears in the Resolver dashboard in the Route 53 console. </p>
   *          <p>The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.</p>
   * @public
   */
  TargetIps?: TargetAddress[] | undefined;

  /**
   * <p>The ID of the new outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in
   * 			<code>TargetIps</code>.</p>
   * @public
   */
  ResolverEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that you want to add tags to. To get the ARN for a resource, use the applicable
   * 			<code>Get</code> or <code>List</code> command: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html">GetResolverRuleAssociation</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags that you want to add to the specified resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that you want to remove tags from. To get the ARN for a resource, use the applicable
   * 			<code>Get</code> or <code>List</code> command: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html">GetResolverRuleAssociation</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags that you want to remove to the specified resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateFirewallConfigRequest {
  /**
   * <p>The ID of the VPC that the configuration is for.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Determines how Route 53 Resolver handles queries during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. </p>
   *          <ul>
   *             <li>
   *                <p>By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability.
   *        DNS Firewall blocks queries that it is unable to evaluate properly. </p>
   *             </li>
   *             <li>
   *                <p>If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it
   *        is unable to properly evaluate them. </p>
   *             </li>
   *          </ul>
   *          <p>This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association. </p>
   * @public
   */
  FirewallFailOpen: FirewallFailOpenStatus | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallConfigResponse {
  /**
   * <p>Configuration of the firewall behavior provided by DNS Firewall for a single VPC. </p>
   * @public
   */
  FirewallConfig?: FirewallConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDomainsRequest {
  /**
   * <p>The ID of the domain list whose domains you want to update. </p>
   * @public
   */
  FirewallDomainListId: string | undefined;

  /**
   * <p>What you want DNS Firewall to do with the domains that you are providing: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADD</code> - Add the domains to the ones that are already in the domain list. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVE</code> - Search the domain list for the domains and remove them from the list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REPLACE</code> - Update the domain list to exactly match the list that you are providing. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Operation: FirewallDomainUpdateOperation | undefined;

  /**
   * <p>A list of domains to use in the update operation.</p>
   *          <important>
   *             <p>There is a limit of 1000 domains per request.</p>
   *          </important>
   *          <p>Each domain specification in your domain list must satisfy the following
   * 	requirements: </p>
   *          <ul>
   *             <li>
   *                <p>It can optionally start with <code>*</code> (asterisk).</p>
   *             </li>
   *             <li>
   *                <p>With the exception of the optional starting asterisk, it must only contain
   *       	   the following characters: <code>A-Z</code>, <code>a-z</code>,
   *       	   <code>0-9</code>, <code>-</code> (hyphen).</p>
   *             </li>
   *             <li>
   *                <p>It must be from 1-255 characters in length. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Domains: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDomainsResponse {
  /**
   * <p>The ID of the firewall domain list that DNS Firewall just updated.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the domain list. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Status of the <code>UpdateFirewallDomains</code> request.</p>
   * @public
   */
  Status?: FirewallDomainListStatus | undefined;

  /**
   * <p>Additional information about the status of the list, if available.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleRequest {
  /**
   * <p>The unique identifier of the firewall rule group for the rule. </p>
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * <p>The ID of the domain list to use in the rule.  </p>
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * <p>
   * 			The DNS Firewall Advanced rule ID.
   * 		</p>
   * @public
   */
  FirewallThreatProtectionId?: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule in the rule group. DNS Firewall
   *            processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   *          <p>You must specify a unique priority for each rule in a rule group.
   *            To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You
   *    can change the priority setting for the rules in a rule group at any time.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - Permit the request to go through. Not available for DNS Firewall Advanced rules.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALERT</code> - Permit the request to go through but send an alert to the logs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - Disallow the request. This option requires additional details in the rule's <code>BlockResponse</code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The way that you want DNS Firewall to block the request. Used for the rule action setting <code>BLOCK</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NODATA</code> - Respond indicating that the query was successful, but no response is available for it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NXDOMAIN</code> - Respond indicating that the domain name that's in the query doesn't exist.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERRIDE</code> - Provide a custom override in the response. This option requires custom handling details in the rule's <code>BlockOverride*</code> settings. </p>
   *             </li>
   *          </ul>
   * @public
   */
  BlockResponse?: BlockResponse | undefined;

  /**
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  BlockOverrideDomain?: string | undefined;

  /**
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | undefined;

  /**
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  BlockOverrideTtl?: number | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   * 			How you want the the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME or DNAME.
   * 		</p>
   *          <p>
   *             <code>INSPECT_REDIRECTION_DOMAIN</code>: (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be
   * 			added to the domain list.</p>
   *          <p>
   *             <code>TRUST_REDIRECTION_DOMAIN</code>: Inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the domain in the redirection list to
   * 			the domain list.</p>
   * @public
   */
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction | undefined;

  /**
   * <p>
   * 			The DNS query type you want the rule to evaluate. Allowed values are;
   * 		</p>
   *          <ul>
   *             <li>
   *                <p>
   * 				A: Returns an IPv4 address.</p>
   *             </li>
   *             <li>
   *                <p>AAAA: Returns an Ipv6 address.</p>
   *             </li>
   *             <li>
   *                <p>CAA: Restricts CAs that can create SSL/TLS certifications for the domain.</p>
   *             </li>
   *             <li>
   *                <p>CNAME: Returns another domain name.</p>
   *             </li>
   *             <li>
   *                <p>DS: Record that identifies the DNSSEC signing key of a delegated zone.</p>
   *             </li>
   *             <li>
   *                <p>MX: Specifies mail servers.</p>
   *             </li>
   *             <li>
   *                <p>NAPTR: Regular-expression-based rewriting of domain names.</p>
   *             </li>
   *             <li>
   *                <p>NS: Authoritative name servers.</p>
   *             </li>
   *             <li>
   *                <p>PTR: Maps an IP address to a domain name.</p>
   *             </li>
   *             <li>
   *                <p>SOA: Start of authority record for the zone.</p>
   *             </li>
   *             <li>
   *                <p>SPF: Lists the servers authorized to send emails from a domain.</p>
   *             </li>
   *             <li>
   *                <p>SRV: Application specific values that identify servers.</p>
   *             </li>
   *             <li>
   *                <p>TXT: Verifies email senders and application-specific values.</p>
   *             </li>
   *             <li>
   *                <p>A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be
   * 				defined as TYPENUMBER, where the
   * 				NUMBER can be 1-65334, for
   * 				example, TYPE28. For more information, see
   * 				<a href="https://en.wikipedia.org/wiki/List_of_DNS_record_types">List of DNS record types</a>.</p>
   *                <note>
   *                   <p>If you set up a firewall BLOCK rule with action NXDOMAIN on query type equals AAAA,
   * 					this action will not be applied to synthetic IPv6 addresses generated when DNS64 is enabled. </p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  Qtype?: string | undefined;

  /**
   * <p>
   * 			The type of the DNS Firewall Advanced rule. Valid values are:
   * 		</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DGA</code>: Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains
   * 				to to launch malware attacks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DNS_TUNNELING</code>: DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without
   * 				making a network connection to the client.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DnsThreatProtection?: DnsThreatProtection | undefined;

  /**
   * <p>
   * 			The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule. The confidence
   * 			level values mean:
   * 		</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LOW</code>: Provides the highest detection rate for threats, but also increases false positives.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>: Provides a balance between detecting threats and false positives.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code>: Detects only the most well corroborated threats with a low rate of false positives. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ConfidenceThreshold?: ConfidenceThreshold | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleResponse {
  /**
   * <p>The firewall rule that you just updated. </p>
   * @public
   */
  FirewallRule?: FirewallRule | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleGroupAssociationRequest {
  /**
   * <p>The identifier of the <a>FirewallRuleGroupAssociation</a>. </p>
   * @public
   */
  FirewallRuleGroupAssociationId: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule group among the rule
   * 			groups that you associate with the specified VPC. DNS Firewall filters VPC traffic
   * 			starting from the rule group with the lowest numeric priority setting. </p>
   *          <p>You must specify a unique priority for each rule group that you associate with a single VPC.
   *            To make it easier to insert rule groups later, leave space between the numbers, for example, use 100, 200, and so on. You
   *    can change the priority setting for a rule group association after you create it.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. </p>
   * @public
   */
  MutationProtection?: MutationProtectionStatus | undefined;

  /**
   * <p>The name of the rule group association.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleGroupAssociationResponse {
  /**
   * <p>The association that you just updated. </p>
   * @public
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation | undefined;
}

/**
 * @public
 */
export interface UpdateOutpostResolverRequest {
  /**
   * <p>A unique string that identifies Resolver on an Outpost.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Name of the Resolver on the Outpost.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon EC2 instance count for a Resolver on the Outpost.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>
   * 			Amazon EC2 instance type.
   * 		</p>
   * @public
   */
  PreferredInstanceType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOutpostResolverResponse {
  /**
   * <p>The response to an <code>UpdateOutpostResolver</code> request.</p>
   * @public
   */
  OutpostResolver?: OutpostResolver | undefined;
}

/**
 * @public
 */
export interface UpdateResolverConfigRequest {
  /**
   * <p>The ID of the Amazon Virtual Private Cloud VPC or a Route 53 Profile that you're configuring Resolver for.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Indicates whether or not the Resolver will create autodefined rules for reverse DNS
   * 			lookups. This is enabled by default. Disabling this option will also affect EC2-Classic
   * 			instances using ClassicLink. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
   * 					<i>Amazon EC2 guide</i>.</p>
   *          <important>
   *             <p>We are retiring EC2-Classic on August 15, 2022. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
   * 			<i>Amazon EC2 guide</i> and the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>.</p>
   *          </important>
   *          <note>
   *             <p>It can take some time for the status change to be completed.</p>
   *          </note>
   *          <p></p>
   * @public
   */
  AutodefinedReverseFlag: AutodefinedReverseFlag | undefined;
}

/**
 * @public
 */
export interface UpdateResolverConfigResponse {
  /**
   * <p>An array that contains settings for the specified Resolver configuration.</p>
   * @public
   */
  ResolverConfig?: ResolverConfig | undefined;
}

/**
 * @public
 */
export interface UpdateResolverDnssecConfigRequest {
  /**
   * <p>The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The new value that you are specifying for DNSSEC validation for the VPC. The value can be <code>ENABLE</code>
   * 			or <code>DISABLE</code>. Be aware that it can take time for a validation status change to be completed.</p>
   * @public
   */
  Validation: Validation | undefined;
}

/**
 * @public
 */
export interface UpdateResolverDnssecConfigResponse {
  /**
   * <p>A complex type that contains settings for the specified DNSSEC configuration.</p>
   * @public
   */
  ResolverDNSSECConfig?: ResolverDnssecConfig | undefined;
}

/**
 * <p>
 * 			Provides information about the IP address type in response to <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>.
 * 		</p>
 * @public
 */
export interface UpdateIpAddress {
  /**
   * <p> The ID of the IP address, specified by the <code>ResolverEndpointId</code>. </p>
   * @public
   */
  IpId: string | undefined;

  /**
   * <p>
   * 			The IPv6 address that you want to use for DNS queries.
   * 		</p>
   * @public
   */
  Ipv6: string | undefined;
}

/**
 * @public
 */
export interface UpdateResolverEndpointRequest {
  /**
   * <p>The ID of the Resolver endpoint that you want to update.</p>
   * @public
   */
  ResolverEndpointId: string | undefined;

  /**
   * <p>The name of the Resolver endpoint that you want to update.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   * 			Specifies the endpoint type for what type of IP address the endpoint uses to forward DNS queries.
   * 		</p>
   *          <p>Updating to <code>IPV6</code> type isn't currently supported.</p>
   * @public
   */
  ResolverEndpointType?: ResolverEndpointType | undefined;

  /**
   * <p>
   * 			Specifies the IPv6 address when you update the Resolver endpoint from IPv4 to dual-stack.
   * 			If you don't specify an IPv6 address, one will be automatically chosen from your subnet.
   * 		</p>
   * @public
   */
  UpdateIpAddresses?: UpdateIpAddress[] | undefined;

  /**
   * <p>
   * 			The protocols you want to use for the endpoint. DoH-FIPS is applicable for default inbound endpoints only.
   * 		</p>
   *          <p>For a default inbound endpoint you can apply the protocols as follows:</p>
   *          <ul>
   *             <li>
   *                <p> Do53  and DoH in combination.</p>
   *             </li>
   *             <li>
   *                <p>Do53  and DoH-FIPS in combination.</p>
   *             </li>
   *             <li>
   *                <p>Do53 alone.</p>
   *             </li>
   *             <li>
   *                <p>DoH alone.</p>
   *             </li>
   *             <li>
   *                <p>DoH-FIPS alone.</p>
   *             </li>
   *             <li>
   *                <p>None, which is treated as Do53.</p>
   *             </li>
   *          </ul>
   *          <p>For a delegation inbound endpoint you can use Do53 only.</p>
   *          <p>For an outbound endpoint you can apply the protocols as follows:</p>
   *          <ul>
   *             <li>
   *                <p> Do53  and DoH in combination.</p>
   *             </li>
   *             <li>
   *                <p>Do53 alone.</p>
   *             </li>
   *             <li>
   *                <p>DoH alone.</p>
   *             </li>
   *             <li>
   *                <p>None, which is treated as Do53.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p> You can't change the protocol of an inbound endpoint directly from only Do53 to only DoH, or DoH-FIPS.
   * 			This is to prevent a sudden disruption to incoming traffic that
   * 			relies on Do53. To change the protocol from Do53 to DoH, or DoH-FIPS, you must
   * 			first enable both Do53 and DoH, or Do53 and DoH-FIPS, to make sure that all incoming traffic
   * 			has transferred to using the DoH protocol, or DoH-FIPS, and then remove the
   * 			Do53.</p>
   *          </important>
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * <p>Updates whether RNI enhanced metrics are enabled for the Resolver endpoints.
   * 		When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint.
   * 		When set to false, metrics are not published.</p>
   *          <note>
   *             <p>Standard CloudWatch pricing and charges are applied for using the Route 53 Resolver
   * 	endpoint RNI enhanced metrics. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-resolver-with-cloudwatch.html">Detailed metrics</a>.</p>
   *          </note>
   * @public
   */
  RniEnhancedMetricsEnabled?: boolean | undefined;

  /**
   * <p>Updates whether target name server metrics are enabled for the outbound Resolver endpoints.
   * 		When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint.
   * 		When set to false, metrics are not published. This setting is not supported for inbound Resolver endpoints.</p>
   *          <note>
   *             <p>Standard CloudWatch pricing and charges are applied for using the Route 53 Resolver
   * 	endpoint target name server metrics. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-resolver-with-cloudwatch.html">Detailed metrics</a>.</p>
   *          </note>
   * @public
   */
  TargetNameServerMetricsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateResolverEndpointResponse {
  /**
   * <p>The response to an <code>UpdateResolverEndpoint</code> request.</p>
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface UpdateResolverRuleRequest {
  /**
   * <p>The ID of the Resolver rule that you want to update.</p>
   * @public
   */
  ResolverRuleId: string | undefined;

  /**
   * <p>The new settings for the Resolver rule.</p>
   * @public
   */
  Config: ResolverRuleConfig | undefined;
}

/**
 * @public
 */
export interface UpdateResolverRuleResponse {
  /**
   * <p>The response to an <code>UpdateResolverRule</code> request.</p>
   * @public
   */
  ResolverRule?: ResolverRule | undefined;
}
