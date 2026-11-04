// smithy-typescript generated code
import type {
  Action,
  AutodefinedReverseFlag,
  BlockOverrideDnsType,
  BlockResponse,
  ConfidenceThreshold,
  DnsThreatProtection,
  DomainListType,
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
 * One tag that you want to add to the specified resource. A tag consists of a `Key` (a name for the tag) and a `Value`.
 *
 * @public
 */
export interface Tag {
  /**
   * The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of `Key` might be `account-id`.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value for the tag. For example, if `Key` is `account-id`, then `Value` might be the ID of the customer account that you're creating the resource for.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AssociateFirewallRuleGroupRequest {
  /**
   * A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. `CreatorRequestId` can be any unique string, for example, a date/time stamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The unique identifier of the firewall rule group.
   *
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * The unique identifier of the VPC that you want to associate with the rule group.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The setting that determines the processing order of the rule group among the rule groups that you associate with the specified VPC. DNS Firewall filters VPC traffic starting from the rule group with the lowest numeric priority setting.
   *
   * You must specify a unique priority for each rule group that you associate with a single VPC. To make it easier to insert rule groups later, leave space between the numbers, for example, use 101, 200, and so on. You can change the priority setting for a rule group association after you create it.
   *
   * The allowed values for `Priority` are between 100 and 9900.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * A name that lets you identify the association, to manage and use it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. When you create the association, the default setting is `DISABLED`.
   *
   * @public
   */
  MutationProtection?: MutationProtectionStatus | undefined;

  /**
   * A list of the tag keys and values that you want to associate with the rule group association.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC.
 *
 * @public
 */
export interface FirewallRuleGroupAssociation {
  /**
   * The identifier for the association.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall rule group association.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique identifier of the firewall rule group.
   *
   * @public
   */
  FirewallRuleGroupId?: string | undefined;

  /**
   * The unique identifier of the VPC that is associated with the rule group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The name of the association.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC. DNS Firewall filters VPC traffic starting from rule group with the lowest numeric priority setting.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections.
   *
   * @public
   */
  MutationProtection?: MutationProtectionStatus | undefined;

  /**
   * The owner of the association, used only for associations that are not managed by you. If you use Firewall Manager to manage your DNS Firewalls, then this reports Firewall Manager as the managed owner.
   *
   * @public
   */
  ManagedOwnerName?: string | undefined;

  /**
   * The current status of the association.
   *
   * @public
   */
  Status?: FirewallRuleGroupAssociationStatus | undefined;

  /**
   * Additional information about the status of the response, if available.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The date and time that the association was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time that the association was last modified, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: string | undefined;
}

/**
 * @public
 */
export interface AssociateFirewallRuleGroupResponse {
  /**
   * The association that you just created. The association has an ID that you can use to identify it in other requests, like update and delete.
   *
   * @public
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation | undefined;
}

/**
 * In an [UpdateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html) request, information about an IP address to update.
 *
 * @public
 */
export interface IpAddressUpdate {
  /**
   * *Only when removing an IP address from a Resolver endpoint*: The ID of the IP address that you want to remove. To get this ID, use [GetResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html).
   *
   * @public
   */
  IpId?: string | undefined;

  /**
   * The ID of the subnet that includes the IP address that you want to update. To get this ID, use [GetResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html).
   *
   * We recommend using [VPC Resolver on Outposts](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/outpost-resolver-getting-started.html) to create endpoints on Outposts Racks.
   *
   * > **Important:** Outposts subnets with [Local Network Interface (LNI)](https://docs.aws.amazon.com/outposts/latest/server-userguide/local-network-interface.html) enabled are not compatible with Route 53 Resolver endpoints. If you enable LNI on a subnet that contains Route 53 Resolver endpoint elastic network interfaces (ENIs), those ENIs will stop functioning. For more information, see [Subnet compatibility for Resolver endpoints](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/best-practices-resolver.html#best-practices-resolver-subnet-compatibility) in the *Amazon Route 53 Developer Guide*.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The new IPv4 address.
   *
   * @public
   */
  Ip?: string | undefined;

  /**
   * The new IPv6 address.
   *
   * @public
   */
  Ipv6?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResolverEndpointIpAddressRequest {
  /**
   * The ID of the Resolver endpoint that you want to associate IP addresses with.
   *
   * @public
   */
  ResolverEndpointId: string | undefined;

  /**
   * Either the IPv4 address that you want to add to a Resolver endpoint or a subnet ID. If you specify a subnet ID, Resolver chooses an IP address for you from the available IPs in the specified subnet.
   *
   * @public
   */
  IpAddress: IpAddressUpdate | undefined;
}

/**
 * In the response to a [CreateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html), [DeleteResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html), [GetResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html), Updates the name, or ResolverEndpointType for an endpoint, or [UpdateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html) request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
 *
 * @public
 */
export interface ResolverEndpoint {
  /**
   * The ID of the Resolver endpoint.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A unique string that identifies the request that created the Resolver endpoint. The `CreatorRequestId` allows failed requests to be retried without the risk of running the operation twice.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) for the Resolver endpoint.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name that you assigned to the Resolver endpoint when you submitted a [CreateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html) request.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:
   *
   * - `INBOUND`: allows DNS queries to your VPC from your network
   * - `OUTBOUND`: allows DNS queries from your VPC to your network
   * - `INBOUND_DELEGATION`: Resolver delegates queries to Route 53 private hosted zones from your network.
   *
   * @public
   */
  Direction?: ResolverEndpointDirection | undefined;

  /**
   * The number of IP addresses that the Resolver endpoint can use for DNS queries.
   *
   * @public
   */
  IpAddressCount?: number | undefined;

  /**
   * The ID of the VPC that you want to create the Resolver endpoint in.
   *
   * @public
   */
  HostVPCId?: string | undefined;

  /**
   * A code that specifies the current status of the Resolver endpoint. Valid values include the following:
   *
   * - `CREATING`: Resolver is creating and configuring one or more Amazon VPC network interfaces for this endpoint.
   * - `OPERATIONAL`: The Amazon VPC network interfaces for this endpoint are correctly configured and able to pass inbound or outbound DNS queries between your network and Resolver.
   * - `UPDATING`: Resolver is associating or disassociating one or more network interfaces with this endpoint.
   * - `AUTO_RECOVERING`: Resolver is trying to recover one or more of the network interfaces that are associated with this endpoint. During the recovery process, the endpoint functions with limited capacity because of the limit on the number of DNS queries per IP address (per network interface). For the current limit, see [Limits on Route 53 Resolver](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities-resolver).
   * - `ACTION_NEEDED`: This endpoint is unhealthy, and Resolver can't automatically recover it. To resolve the problem, we recommend that you check each IP address that you associated with the endpoint. For each IP address that isn't available, add another IP address and then delete the IP address that isn't available. (An endpoint must always include at least two IP addresses.) A status of `ACTION_NEEDED` can have a variety of causes. Here are two common causes:
   *
   *   - One or more of the network interfaces that are associated with the endpoint were deleted using Amazon VPC.
   *   - The network interface couldn't be created for some reason that's outside the control of Resolver.
   * - `DELETING`: Resolver is deleting this endpoint and the associated network interfaces.
   *
   * @public
   */
  Status?: ResolverEndpointStatus | undefined;

  /**
   * A detailed description of the status of the Resolver endpoint.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) for the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The Amazon EC2 instance type.
   *
   * @public
   */
  PreferredInstanceType?: string | undefined;

  /**
   * The Resolver endpoint IP address type.
   *
   * @public
   */
  ResolverEndpointType?: ResolverEndpointType | undefined;

  /**
   * Protocols used for the endpoint. DoH-FIPS is applicable for a default inbound endpoints only.
   *
   * For an inbound endpoint you can apply the protocols as follows:
   *
   * - Do53 and DoH in combination.
   * - Do53 and DoH-FIPS in combination.
   * - Do53 alone.
   * - DoH alone.
   * - DoH-FIPS alone.
   * - None, which is treated as Do53.
   *
   * For a delegation inbound endpoint you can use Do53 only.
   *
   * For an outbound endpoint you can apply the protocols as follows:
   *
   * - Do53 and DoH in combination.
   * - Do53 alone.
   * - DoH alone.
   * - None, which is treated as Do53.
   *
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * Indicates whether RNI enhanced metrics are enabled for the Resolver endpoint. When enabled, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When disabled, these metrics are not published.
   *
   * @public
   */
  RniEnhancedMetricsEnabled?: boolean | undefined;

  /**
   * Indicates whether target name server metrics are enabled for the outbound Resolver endpoint. When enabled, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When disabled, these metrics are not published. This feature is not supported for inbound Resolver endpoint.
   *
   * @public
   */
  TargetNameServerMetricsEnabled?: boolean | undefined;

  /**
   * Indicates whether DNS64 is enabled for the inbound Resolver endpoint. When `true`, Route 53 Resolver synthesizes AAAA (IPv6) records for IPv4-only services by prepending the `64:ff9b::/96` prefix to the IPv4 address.
   *
   * @public
   */
  Dns64Enabled?: boolean | undefined;

  /**
   * Indicates whether IPv6 internet access is enabled for the outbound Resolver endpoint. When `true`, the endpoint elastic network interfaces (ENIs) can forward DNS queries to public IPv6 targets through an internet gateway.
   *
   * @public
   */
  Ipv6InternetAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateResolverEndpointIpAddressResponse {
  /**
   * The response to an `AssociateResolverEndpointIpAddress` request.
   *
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface AssociateResolverQueryLogConfigRequest {
  /**
   * The ID of the query logging configuration that you want to associate a VPC with.
   *
   * @public
   */
  ResolverQueryLogConfigId: string | undefined;

  /**
   * The ID of an Amazon VPC that you want this query logging configuration to log queries for.
   *
   * > **Note:** The VPCs and the query logging configuration must be in the same Region.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * In the response to an [AssociateResolverQueryLogConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html), [DisassociateResolverQueryLogConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html), [GetResolverQueryLogConfigAssociation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html), or [ListResolverQueryLogConfigAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html), request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.
 *
 * @public
 */
export interface ResolverQueryLogConfigAssociation {
  /**
   * The ID of the query logging association.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the query logging configuration that a VPC is associated with.
   *
   * @public
   */
  ResolverQueryLogConfigId?: string | undefined;

  /**
   * The ID of the Amazon VPC that is associated with the query logging configuration.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The status of the specified query logging association. Valid values include the following:
   *
   * - `CREATING`: Resolver is creating an association between an Amazon VPC and a query logging configuration.
   * - `ACTIVE`: The association between an Amazon VPC and a query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.
   * - `DELETING`: Resolver is deleting this query logging association.
   * - `FAILED`: Resolver either couldn't create or couldn't delete the query logging association.
   *
   * @public
   */
  Status?: ResolverQueryLogConfigAssociationStatus | undefined;

  /**
   * If the value of `Status` is `FAILED`, the value of `Error` indicates the cause:
   *
   * - `DESTINATION_NOT_FOUND`: The specified destination (for example, an Amazon S3 bucket) was deleted.
   * - `ACCESS_DENIED`: Permissions don't allow sending logs to the destination.
   *
   * If the value of `Status` is a value other than `FAILED`, `Error` is null.
   *
   * @public
   */
  Error?: ResolverQueryLogConfigAssociationError | undefined;

  /**
   * Contains additional information about the error. If the value or `Error` is null, the value of `ErrorMessage` also is null.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResolverQueryLogConfigResponse {
  /**
   * A complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.
   *
   * @public
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateResolverRuleRequest {
  /**
   * The ID of the Resolver rule that you want to associate with the VPC. To list the existing Resolver rules, use [ListResolverRules](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html).
   *
   * @public
   */
  ResolverRuleId: string | undefined;

  /**
   * A name for the association that you're creating between a Resolver rule and a VPC.
   *
   * The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the VPC that you want to associate the Resolver rule with.
   *
   * @public
   */
  VPCId: string | undefined;
}

/**
 * In the response to an [AssociateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html), [DisassociateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html), or [ListResolverRuleAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html) request, provides information about an association between a Resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.
 *
 * @public
 */
export interface ResolverRuleAssociation {
  /**
   * The ID of the association between a Resolver rule and a VPC. Resolver assigns this value when you submit an [AssociateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html) request.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the Resolver rule that you associated with the VPC that is specified by `VPCId`.
   *
   * @public
   */
  ResolverRuleId?: string | undefined;

  /**
   * The name of an association between a Resolver rule and a VPC.
   *
   * The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the VPC that you associated the Resolver rule with.
   *
   * @public
   */
  VPCId?: string | undefined;

  /**
   * A code that specifies the current status of the association between a Resolver rule and a VPC.
   *
   * @public
   */
  Status?: ResolverRuleAssociationStatus | undefined;

  /**
   * A detailed description of the status of the association between a Resolver rule and a VPC.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResolverRuleResponse {
  /**
   * Information about the `AssociateResolverRule` request, including the status of the request.
   *
   * @public
   */
  ResolverRuleAssociation?: ResolverRuleAssociation | undefined;
}

/**
 * The configuration for a DNS threat protection rule type within the rule type framework.
 *
 * @public
 */
export interface DnsThreatProtectionRuleTypeConfig {
  /**
   * The type of DNS threat protection. Valid values are:
   *
   * - `DGA`: Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains to launch malware attacks.
   * - `DNS_TUNNELING`: DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without making a network connection to the client.
   * - `DICTIONARY_DGA`: Dictionary-based domain generation algorithms detection. Dictionary DGAs use wordlists to generate domains that appear more legitimate, making them harder to detect than traditional DGAs.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The confidence threshold for DNS Firewall Advanced. You must provide this value when you create or update a DNS Firewall Advanced rule. The confidence level values mean:
   *
   * - `LOW`: Provides the highest detection rate for threats, but also increases false positives.
   * - `MEDIUM`: Provides a balance between detecting threats and false positives.
   * - `HIGH`: Detects only the most well corroborated threats with a low rate of false positives.
   *
   * @public
   */
  ConfidenceThreshold: ConfidenceThreshold | undefined;
}

/**
 * The configuration for a content category-based filtering rule. This specifies which content category to use for DNS query evaluation.
 *
 * @public
 */
export interface FirewallAdvancedContentCategoryConfig {
  /**
   * The content category identifier. To retrieve the list of available content categories, call ListFirewallRuleTypes with `RuleType` set to `FirewallAdvancedContentCategory`.
   *
   * @public
   */
  Category: string | undefined;
}

/**
 * The configuration for a threat category-based filtering rule. This specifies which threat category to use for DNS query evaluation.
 *
 * @public
 */
export interface FirewallAdvancedThreatCategoryConfig {
  /**
   * The threat category identifier. To retrieve the list of available threat categories, call ListFirewallRuleTypes with `RuleType` set to `FirewallAdvancedThreatCategory`.
   *
   * @public
   */
  Category: string | undefined;
}

/**
 * The configuration for a partner threat-protection rule. To enumerate the partners available in your account, call ListFirewallRuleTypes with `RuleType` set to `PartnerThreatProtection` — each returned FirewallRuleTypeDefinition includes a SubscriptionInfo identifying the Amazon Web Services Marketplace product that backs it.
 *
 * @public
 */
export interface PartnerThreatProtectionConfig {
  /**
   * The identifier of the partner threat-protection product, exactly as returned in the `Value` field of a FirewallRuleTypeDefinition with `RuleType` set to `PartnerThreatProtection`. The calling account must hold an active Amazon Web Services Marketplace subscription to this product.
   *
   * @public
   */
  Partner: string | undefined;
}

/**
 * The rule-type configuration for a DNS Firewall rule. `FirewallRuleType` is a tagged union — exactly one member must be set per rule, and the member determines what the rule matches against. This shape is mutually exclusive with the top-level `FirewallDomainListId` and `DnsThreatProtection` fields on CreateFirewallRule and UpdateFirewallRule.
 *
 * Call ListFirewallRuleTypes to discover which rule-type variants and which values within each variant are available in your account and Region.
 *
 * @public
 */
export interface FirewallRuleType {
  /**
   * Configures the rule to match a third-party threat feed delivered through Amazon Web Services Marketplace. The calling account must hold an active subscription to the partner product named in `Partner`; if the subscription is missing or revoked, the rule is created with `Status` `CREATION_FAILED` and cannot be modified — only deleted. See PartnerThreatProtectionConfig.
   *
   * @public
   */
  PartnerThreatProtection?: PartnerThreatProtectionConfig | undefined;

  /**
   * Configures the rule to match an Amazon Web Services-managed content category (for example, `VIOLENCE_AND_HATE_SPEECH`). See FirewallAdvancedContentCategoryConfig.
   *
   * @public
   */
  FirewallAdvancedContentCategory?: FirewallAdvancedContentCategoryConfig | undefined;

  /**
   * Configures the rule to match an Amazon Web Services-managed advanced threat category (for example, `PHISHING`). See FirewallAdvancedThreatCategoryConfig.
   *
   * @public
   */
  FirewallAdvancedThreatCategory?: FirewallAdvancedThreatCategoryConfig | undefined;

  /**
   * Configures the rule to match a built-in DNS Firewall Advanced threat detector — `DGA`, `DNS_TUNNELING`, or `DICTIONARY_DGA`. See DnsThreatProtectionRuleTypeConfig.
   *
   * @public
   */
  DnsThreatProtection?: DnsThreatProtectionRuleTypeConfig | undefined;
}

/**
 * The details for creating a single firewall rule in a batch operation.
 *
 * @public
 */
export interface CreateFirewallRuleEntry {
  /**
   * A unique string that identifies the request and that allows you to retry failed requests without the risk of running the operation twice. `CreatorRequestId` can be any unique string, for example, a date/time stamp.
   *
   * @public
   */
  CreatorRequestId: string | undefined;

  /**
   * The unique identifier of the firewall rule group where you want to create the rule.
   *
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * The ID of the domain list that you want to use in the rule. This setting is mutually exclusive with `DnsThreatProtection` and `FirewallRuleType`.
   *
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule:
   *
   * - `ALLOW` - Permit the request to go through. Not available for DNS Firewall Advanced rules.
   * - `ALERT` - Permit the request and send metrics and logs to CloudWatch.
   * - `BLOCK` - Disallow the request. This option requires additional details in the rule's `BlockResponse`.
   *
   * @public
   */
  Action: Action | undefined;

  /**
   * The way that you want DNS Firewall to block the request, used with the rule action setting `BLOCK`.
   *
   * - `NODATA` - Respond indicating that the query was successful, but no response is available for it.
   * - `NXDOMAIN` - Respond indicating that the domain name that's in the query doesn't exist.
   * - `OVERRIDE` - Provide a custom override in the response. This option requires custom handling details in the rule's `BlockOverride*` settings.
   *
   * @public
   */
  BlockResponse?: BlockResponse | undefined;

  /**
   * The custom DNS record to send back in response to the query. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideDomain?: string | undefined;

  /**
   * The DNS record's type. This determines the format of the record value that you provided in `BlockOverrideDomain`. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | undefined;

  /**
   * The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * This setting is required if the `BlockResponse` setting is `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideTtl?: number | undefined;

  /**
   * A name that lets you identify the rule in the rule group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * How you want the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME or DNAME.
   *
   * `INSPECT_REDIRECTION_DOMAIN`: (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be added to the domain list.
   *
   * `TRUST_REDIRECTION_DOMAIN`: Inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the redirection list to the domain list.
   *
   * @public
   */
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction | undefined;

  /**
   * The DNS query type you want the rule to evaluate. Allowed values are:
   *
   * - A: Returns an IPv4 address.
   * - AAAA: Returns an IPv6 address.
   * - CAA: Restricts CAs that can create SSL/TLS certifications for the domain.
   * - CNAME: Returns another domain name.
   * - DS: Record that identifies the DNSSEC signing key of a delegated zone.
   * - MX: Specifies mail servers.
   * - NAPTR: Regular-expression-based rewriting of domain names.
   * - NS: Authoritative name servers.
   * - PTR: Maps an IP address to a domain name.
   * - SOA: Start of authority record for the zone.
   * - SPF: Lists the servers authorized to send emails from a domain.
   * - SRV: Application specific values that identify servers.
   * - TXT: Verifies email senders and application-specific values.
   * - A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be defined as TYPENUMBER, where the NUMBER can be 1-65534, for example, TYPE28. For more information, see [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types).
   *
   * @public
   */
  Qtype?: string | undefined;

  /**
   * The type of the DNS Firewall Advanced rule. This setting is mutually exclusive with `FirewallDomainListId` and `FirewallRuleType`. Valid values are:
   *
   * - `DGA`: Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains to launch malware attacks.
   * - `DNS_TUNNELING`: DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without making a network connection to the client.
   * - `DICTIONARY_DGA`: Dictionary-based domain generation algorithms detection. Dictionary DGAs use wordlists to generate domains that appear more legitimate, making them harder to detect than traditional DGAs.
   *
   * @public
   */
  DnsThreatProtection?: DnsThreatProtection | undefined;

  /**
   * The confidence threshold for DNS Firewall Advanced. You must provide this value when you create or update a DNS Firewall Advanced rule. The confidence level values mean:
   *
   * - `LOW`: Provides the highest detection rate for threats, but also increases false positives.
   * - `MEDIUM`: Provides a balance between detecting threats and false positives.
   * - `HIGH`: Detects only the most well corroborated threats with a low rate of false positives.
   *
   * @public
   */
  ConfidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The rule type configuration for the firewall rule. This is a tagged union — set exactly one of its members. This setting is mutually exclusive with the top-level `FirewallDomainListId` and `DnsThreatProtection` fields. Use one of:
   *
   * - `FirewallAdvancedContentCategory` — match an Amazon Web Services-managed content category (for example, `VIOLENCE_AND_HATE_SPEECH`).
   * - `FirewallAdvancedThreatCategory` — match an Amazon Web Services-managed advanced threat category (for example, `PHISHING`).
   * - `DnsThreatProtection` — match a built-in DNS Firewall Advanced threat detector (`DGA`, `DNS_TUNNELING`, or `DICTIONARY_DGA`).
   * - `PartnerThreatProtection` — match a third-party threat feed delivered through Amazon Web Services Marketplace. The selected partner must be an active subscription on the calling account.
   *
   * To enumerate the values supported in your account, call ListFirewallRuleTypes.
   *
   * @public
   */
  FirewallRuleType?: FirewallRuleType | undefined;
}

/**
 * @public
 */
export interface BatchCreateFirewallRuleRequest {
  /**
   * The list of firewall rules to create.
   *
   * @public
   */
  CreateFirewallRuleEntries: CreateFirewallRuleEntry[] | undefined;
}

/**
 * A single firewall rule in a rule group.
 *
 * @public
 */
export interface FirewallRule {
  /**
   * The unique identifier of the Firewall rule group of the rule.
   *
   * @public
   */
  FirewallRuleGroupId?: string | undefined;

  /**
   * The ID of the domain list that's used in the rule.
   *
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * ID of the DNS Firewall Advanced rule.
   *
   * @public
   */
  FirewallThreatProtectionId?: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The priority of the rule in the rule group. This value must be unique within the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule:
   *
   * - `ALLOW` - Permit the request to go through. Not available for DNS Firewall Advanced rules.
   * - `ALERT` - Permit the request to go through but send an alert to the logs.
   * - `BLOCK` - Disallow the request. If this is specified, additional handling details are provided in the rule's `BlockResponse` setting.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The way that you want DNS Firewall to block the request. Used for the rule action setting `BLOCK`.
   *
   * - `NODATA` - Respond indicating that the query was successful, but no response is available for it.
   * - `NXDOMAIN` - Respond indicating that the domain name that's in the query doesn't exist.
   * - `OVERRIDE` - Provide a custom override in the response. This option requires custom handling details in the rule's `BlockOverride*` settings.
   *
   * @public
   */
  BlockResponse?: BlockResponse | undefined;

  /**
   * The custom DNS record to send back in response to the query. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideDomain?: string | undefined;

  /**
   * The DNS record's type. This determines the format of the record value that you provided in `BlockOverrideDomain`. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | undefined;

  /**
   * The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideTtl?: number | undefined;

  /**
   * A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of executing the operation twice. This can be any unique string, for example, a timestamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The date and time that the rule was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time that the rule was last modified, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: string | undefined;

  /**
   * How you want the the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME or DNAME.
   *
   * `INSPECT_REDIRECTION_DOMAIN`: (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be added to the domain list.
   *
   * `TRUST_REDIRECTION_DOMAIN`: Inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the domain in the redirection list to the domain list.
   *
   * @public
   */
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction | undefined;

  /**
   * The DNS query type you want the rule to evaluate. Allowed values are;
   *
   * - A: Returns an IPv4 address.
   * - AAAA: Returns an Ipv6 address.
   * - CAA: Restricts CAs that can create SSL/TLS certifications for the domain.
   * - CNAME: Returns another domain name.
   * - DS: Record that identifies the DNSSEC signing key of a delegated zone.
   * - MX: Specifies mail servers.
   * - NAPTR: Regular-expression-based rewriting of domain names.
   * - NS: Authoritative name servers.
   * - PTR: Maps an IP address to a domain name.
   * - SOA: Start of authority record for the zone.
   * - SPF: Lists the servers authorized to send emails from a domain.
   * - SRV: Application specific values that identify servers.
   * - TXT: Verifies email senders and application-specific values.
   * - A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be defined as TYPENUMBER, where the NUMBER can be 1-65534, for example, TYPE28. For more information, see [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types).
   *
   * @public
   */
  Qtype?: string | undefined;

  /**
   * The type of the DNS Firewall Advanced rule. Valid values are:
   *
   * - `DGA`: Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains to launch malware attacks.
   * - `DNS_TUNNELING`: DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without making a network connection to the client.
   * - `DICTIONARY_DGA`: Dictionary-based domain generation algorithms detection. Dictionary DGAs use wordlists to generate domains that appear more legitimate, making them harder to detect than traditional DGAs.
   *
   * @public
   */
  DnsThreatProtection?: DnsThreatProtection | undefined;

  /**
   * The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule. The confidence level values mean:
   *
   * - `LOW`: Provides the highest detection rate for threats, but also increases false positives.
   * - `MEDIUM`: Provides a balance between detecting threats and false positives.
   * - `HIGH`: Detects only the most well corroborated threats with a low rate of false positives.
   *
   * @public
   */
  ConfidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The rule type configuration for the firewall rule. This is a tagged union — exactly one of its members will be populated. Possible members are:
   *
   * - `FirewallAdvancedContentCategory` — an Amazon Web Services-managed content category (for example, `VIOLENCE_AND_HATE_SPEECH`).
   * - `FirewallAdvancedThreatCategory` — an Amazon Web Services-managed advanced threat category (for example, `PHISHING`).
   * - `DnsThreatProtection` — a built-in DNS Firewall Advanced threat detector (`DGA`, `DNS_TUNNELING`, or `DICTIONARY_DGA`).
   * - `PartnerThreatProtection` — a third-party threat feed delivered through Amazon Web Services Marketplace.
   *
   * To enumerate the values supported in your account, call ListFirewallRuleTypes.
   *
   * @public
   */
  FirewallRuleType?: FirewallRuleType | undefined;

  /**
   * The lifecycle state of the firewall rule. Possible values:
   *
   * - `CREATING` — DNS Firewall is provisioning the rule. Rules created with the `PartnerThreatProtection` rule type begin in this state while DNS Firewall verifies the calling account's Amazon Web Services Marketplace entitlement.
   * - `COMPLETE` — The rule is provisioned and enforcing matches.
   * - `CREATION_FAILED` — Provisioning failed. `StatusMessage` contains a human-readable reason. A rule in this state is immutable: UpdateFirewallRule rejects the request, and the rule must be removed with DeleteFirewallRule.
   *
   * For rules that do not require asynchronous provisioning, this field may be absent.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * An additional message about the rule's lifecycle state. Populated when `Status` is `CREATION_FAILED` to describe why provisioning failed.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * An error that occurred while creating a firewall rule in a batch operation.
 *
 * @public
 */
export interface BatchCreateFirewallRuleError {
  /**
   * The firewall rule entry that caused the error.
   *
   * @public
   */
  FirewallRule?: CreateFirewallRuleEntry | undefined;

  /**
   * The error code for the failure.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A message that provides details about the error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateFirewallRuleResponse {
  /**
   * The firewall rules that were successfully created by the request.
   *
   * @public
   */
  CreatedFirewallRules?: FirewallRule[] | undefined;

  /**
   * A list of errors that occurred while creating the firewall rules.
   *
   * @public
   */
  CreateErrors?: BatchCreateFirewallRuleError[] | undefined;
}

/**
 * The details for deleting a single firewall rule in a batch operation.
 *
 * @public
 */
export interface DeleteFirewallRuleEntry {
  /**
   * The unique identifier of the firewall rule group for the rule.
   *
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * The ID of the domain list that's used in the rule.
   *
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * The ID of the DNS Firewall Advanced rule.
   *
   * @public
   */
  FirewallThreatProtectionId?: string | undefined;

  /**
   * The DNS query type that the rule evaluates.
   *
   * @public
   */
  Qtype?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteFirewallRuleRequest {
  /**
   * The list of firewall rules to delete.
   *
   * @public
   */
  DeleteFirewallRuleEntries: DeleteFirewallRuleEntry[] | undefined;
}

/**
 * An error that occurred while deleting a firewall rule in a batch operation.
 *
 * @public
 */
export interface BatchDeleteFirewallRuleError {
  /**
   * The firewall rule entry that caused the error.
   *
   * @public
   */
  FirewallRule?: DeleteFirewallRuleEntry | undefined;

  /**
   * The error code for the failure.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A message that provides details about the error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteFirewallRuleResponse {
  /**
   * The firewall rules that were successfully deleted by the request.
   *
   * @public
   */
  DeletedFirewallRules?: FirewallRule[] | undefined;

  /**
   * A list of errors that occurred while deleting the firewall rules.
   *
   * @public
   */
  DeleteErrors?: BatchDeleteFirewallRuleError[] | undefined;
}

/**
 * The details for updating a single firewall rule in a batch operation.
 *
 * @public
 */
export interface UpdateFirewallRuleEntry {
  /**
   * The unique identifier of the firewall rule group for the rule.
   *
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * The ID of the domain list to use in the rule. This setting is mutually exclusive with `DnsThreatProtection` and `FirewallRuleType`.
   *
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * The ID of the DNS Firewall Advanced rule.
   *
   * @public
   */
  FirewallThreatProtectionId?: string | undefined;

  /**
   * The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule:
   *
   * - `ALLOW` - Permit the request to go through. Not available for DNS Firewall Advanced rules.
   * - `ALERT` - Permit the request and send metrics and logs to CloudWatch.
   * - `BLOCK` - Disallow the request. This option requires additional details in the rule's `BlockResponse`.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The way that you want DNS Firewall to block the request, used with the rule action setting `BLOCK`.
   *
   * - `NODATA` - Respond indicating that the query was successful, but no response is available for it.
   * - `NXDOMAIN` - Respond indicating that the domain name that's in the query doesn't exist.
   * - `OVERRIDE` - Provide a custom override in the response. This option requires custom handling details in the rule's `BlockOverride*` settings.
   *
   * @public
   */
  BlockResponse?: BlockResponse | undefined;

  /**
   * The custom DNS record to send back in response to the query. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideDomain?: string | undefined;

  /**
   * The DNS record's type. This determines the format of the record value that you provided in `BlockOverrideDomain`. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | undefined;

  /**
   * The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * This setting is required if the `BlockResponse` setting is `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideTtl?: number | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * How you want the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME or DNAME.
   *
   * `INSPECT_REDIRECTION_DOMAIN`: (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be added to the domain list.
   *
   * `TRUST_REDIRECTION_DOMAIN`: Inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the redirection list to the domain list.
   *
   * @public
   */
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction | undefined;

  /**
   * The DNS query type you want the rule to evaluate. Allowed values are:
   *
   * - A: Returns an IPv4 address.
   * - AAAA: Returns an IPv6 address.
   * - CAA: Restricts CAs that can create SSL/TLS certifications for the domain.
   * - CNAME: Returns another domain name.
   * - DS: Record that identifies the DNSSEC signing key of a delegated zone.
   * - MX: Specifies mail servers.
   * - NAPTR: Regular-expression-based rewriting of domain names.
   * - NS: Authoritative name servers.
   * - PTR: Maps an IP address to a domain name.
   * - SOA: Start of authority record for the zone.
   * - SPF: Lists the servers authorized to send emails from a domain.
   * - SRV: Application specific values that identify servers.
   * - TXT: Verifies email senders and application-specific values.
   * - A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be defined as TYPENUMBER, where the NUMBER can be 1-65534, for example, TYPE28. For more information, see [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types).
   *
   * @public
   */
  Qtype?: string | undefined;

  /**
   * The type of the DNS Firewall Advanced rule. This setting is mutually exclusive with `FirewallDomainListId` and `FirewallRuleType`. Valid values are:
   *
   * - `DGA`: Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains to launch malware attacks.
   * - `DNS_TUNNELING`: DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without making a network connection to the client.
   * - `DICTIONARY_DGA`: Dictionary-based domain generation algorithms detection. Dictionary DGAs use wordlists to generate domains that appear more legitimate, making them harder to detect than traditional DGAs.
   *
   * @public
   */
  DnsThreatProtection?: DnsThreatProtection | undefined;

  /**
   * The confidence threshold for DNS Firewall Advanced. You must provide this value when you create or update a DNS Firewall Advanced rule. The confidence level values mean:
   *
   * - `LOW`: Provides the highest detection rate for threats, but also increases false positives.
   * - `MEDIUM`: Provides a balance between detecting threats and false positives.
   * - `HIGH`: Detects only the most well corroborated threats with a low rate of false positives.
   *
   * @public
   */
  ConfidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The rule type configuration for the firewall rule. This is a tagged union — set exactly one of its members. This setting is mutually exclusive with the top-level `FirewallDomainListId` and `DnsThreatProtection` fields. Use one of:
   *
   * - `FirewallAdvancedContentCategory` — match an Amazon Web Services-managed content category (for example, `VIOLENCE_AND_HATE_SPEECH`).
   * - `FirewallAdvancedThreatCategory` — match an Amazon Web Services-managed advanced threat category (for example, `PHISHING`).
   * - `DnsThreatProtection` — match a built-in DNS Firewall Advanced threat detector (`DGA`, `DNS_TUNNELING`, or `DICTIONARY_DGA`).
   * - `PartnerThreatProtection` — match a third-party threat feed delivered through Amazon Web Services Marketplace. The selected partner must be an active subscription on the calling account.
   *
   * To enumerate the values supported in your account, call ListFirewallRuleTypes.
   *
   * @public
   */
  FirewallRuleType?: FirewallRuleType | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFirewallRuleRequest {
  /**
   * The list of firewall rules to update.
   *
   * @public
   */
  UpdateFirewallRuleEntries: UpdateFirewallRuleEntry[] | undefined;
}

/**
 * An error that occurred while updating a firewall rule in a batch operation.
 *
 * @public
 */
export interface BatchUpdateFirewallRuleError {
  /**
   * The firewall rule entry that caused the error.
   *
   * @public
   */
  FirewallRule?: UpdateFirewallRuleEntry | undefined;

  /**
   * The error code for the failure.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A message that provides details about the error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFirewallRuleResponse {
  /**
   * The firewall rules that were successfully updated by the request.
   *
   * @public
   */
  UpdatedFirewallRules?: FirewallRule[] | undefined;

  /**
   * A list of errors that occurred while updating the firewall rules.
   *
   * @public
   */
  UpdateErrors?: BatchUpdateFirewallRuleError[] | undefined;
}

/**
 * @public
 */
export interface CreateFirewallDomainListRequest {
  /**
   * A unique string that identifies the request and that allows you to retry failed requests without the risk of running the operation twice. `CreatorRequestId` can be any unique string, for example, a date/time stamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A name that lets you identify the domain list to manage and use it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the tag keys and values that you want to associate with the domain list.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * High-level information about a list of firewall domains for use in a FirewallRule. This is returned by GetFirewallDomainList.
 *
 * To retrieve the domains that are defined for this domain list, call ListFirewallDomains.
 *
 * @public
 */
export interface FirewallDomainList {
  /**
   * The ID of the domain list.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall domain list.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the domain list.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of domain names that are specified in the domain list.
   *
   * @public
   */
  DomainCount?: number | undefined;

  /**
   * The status of the domain list.
   *
   * @public
   */
  Status?: FirewallDomainListStatus | undefined;

  /**
   * Additional information about the status of the list, if available.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The owner of the list, used only for lists that are not managed by you. For example, the managed domain list `AWSManagedDomainsMalwareDomainList` has the managed owner name `Route 53 Resolver DNS Firewall`.
   *
   * @public
   */
  ManagedOwnerName?: string | undefined;

  /**
   * A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The date and time that the domain list was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time that the domain list was last modified, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: string | undefined;

  /**
   * The category of the domain list.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * The type of the managed domain list, for example `THREAT`.
   *
   * @public
   */
  ManagedListType?: DomainListType | undefined;
}

/**
 * @public
 */
export interface CreateFirewallDomainListResponse {
  /**
   * The domain list that you just created.
   *
   * @public
   */
  FirewallDomainList?: FirewallDomainList | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleRequest {
  /**
   * A unique string that identifies the request and that allows you to retry failed requests without the risk of running the operation twice. `CreatorRequestId` can be any unique string, for example, a date/time stamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The unique identifier of the firewall rule group where you want to create the rule.
   *
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * The ID of the domain list that you want to use in the rule. Can't be used together with `DnsThreatProtecton`.
   *
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
   *
   * You must specify a unique priority for each rule in a rule group. To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You can change the priority setting for the rules in a rule group at any time.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule:
   *
   * - `ALLOW` - Permit the request to go through. Not available for DNS Firewall Advanced rules.
   * - `ALERT` - Permit the request and send metrics and logs to Cloud Watch.
   * - `BLOCK` - Disallow the request. This option requires additional details in the rule's `BlockResponse`.
   *
   * @public
   */
  Action: Action | undefined;

  /**
   * The way that you want DNS Firewall to block the request, used with the rule action setting `BLOCK`.
   *
   * - `NODATA` - Respond indicating that the query was successful, but no response is available for it.
   * - `NXDOMAIN` - Respond indicating that the domain name that's in the query doesn't exist.
   * - `OVERRIDE` - Provide a custom override in the response. This option requires custom handling details in the rule's `BlockOverride*` settings.
   *
   * This setting is required if the rule action setting is `BLOCK`.
   *
   * @public
   */
  BlockResponse?: BlockResponse | undefined;

  /**
   * The custom DNS record to send back in response to the query. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * This setting is required if the `BlockResponse` setting is `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideDomain?: string | undefined;

  /**
   * The DNS record's type. This determines the format of the record value that you provided in `BlockOverrideDomain`. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * This setting is required if the `BlockResponse` setting is `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | undefined;

  /**
   * The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * This setting is required if the `BlockResponse` setting is `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideTtl?: number | undefined;

  /**
   * A name that lets you identify the rule in the rule group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * How you want the the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME or DNAME.
   *
   * `INSPECT_REDIRECTION_DOMAIN`: (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be added to the domain list.
   *
   * `TRUST_REDIRECTION_DOMAIN`: Inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the domain in the redirection list to the domain list.
   *
   * @public
   */
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction | undefined;

  /**
   * The DNS query type you want the rule to evaluate. Allowed values are;
   *
   * - A: Returns an IPv4 address.
   * - AAAA: Returns an Ipv6 address.
   * - CAA: Restricts CAs that can create SSL/TLS certifications for the domain.
   * - CNAME: Returns another domain name.
   * - DS: Record that identifies the DNSSEC signing key of a delegated zone.
   * - MX: Specifies mail servers.
   * - NAPTR: Regular-expression-based rewriting of domain names.
   * - NS: Authoritative name servers.
   * - PTR: Maps an IP address to a domain name.
   * - SOA: Start of authority record for the zone.
   * - SPF: Lists the servers authorized to send emails from a domain.
   * - SRV: Application specific values that identify servers.
   * - TXT: Verifies email senders and application-specific values.
   * - A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be defined as TYPENUMBER, where the NUMBER can be 1-65534, for example, TYPE28. For more information, see [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types).
   *
   * @public
   */
  Qtype?: string | undefined;

  /**
   * The type of the DNS Firewall Advanced rule. This setting is mutually exclusive with `FirewallDomainListId` and `FirewallRuleType`. Valid values are:
   *
   * - `DGA`: Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains to launch malware attacks.
   * - `DNS_TUNNELING`: DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without making a network connection to the client.
   * - `DICTIONARY_DGA`: Dictionary-based domain generation algorithms detection. Dictionary DGAs use wordlists to generate domains that appear more legitimate, making them harder to detect than traditional DGAs.
   *
   * @public
   */
  DnsThreatProtection?: DnsThreatProtection | undefined;

  /**
   * The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule. The confidence level values mean:
   *
   * - `LOW`: Provides the highest detection rate for threats, but also increases false positives.
   * - `MEDIUM`: Provides a balance between detecting threats and false positives.
   * - `HIGH`: Detects only the most well corroborated threats with a low rate of false positives.
   *
   * @public
   */
  ConfidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The rule type configuration for the firewall rule. This is a tagged union — set exactly one of its members. This setting is mutually exclusive with the top-level `FirewallDomainListId` and `DnsThreatProtection` fields. Use one of:
   *
   * - `FirewallAdvancedContentCategory` — match an Amazon Web Services-managed content category (for example, `VIOLENCE_AND_HATE_SPEECH`).
   * - `FirewallAdvancedThreatCategory` — match an Amazon Web Services-managed advanced threat category (for example, `PHISHING`).
   * - `DnsThreatProtection` — match a built-in DNS Firewall Advanced threat detector (`DGA`, `DNS_TUNNELING`, or `DICTIONARY_DGA`).
   * - `PartnerThreatProtection` — match a third-party threat feed delivered through Amazon Web Services Marketplace. The selected partner must be an active subscription on the calling account.
   *
   * To enumerate the values supported in your account, call ListFirewallRuleTypes.
   *
   * @public
   */
  FirewallRuleType?: FirewallRuleType | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleResponse {
  /**
   * The firewall rule that you just created.
   *
   * @public
   */
  FirewallRule?: FirewallRule | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleGroupRequest {
  /**
   * A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A name that lets you identify the rule group, to manage and use it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the tag keys and values that you want to associate with the rule group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call ListFirewallRules.
 *
 * @public
 */
export interface FirewallRuleGroup {
  /**
   * The ID of the rule group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the rule group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the rule group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of rules in the rule group.
   *
   * @public
   */
  RuleCount?: number | undefined;

  /**
   * The status of the domain list.
   *
   * @public
   */
  Status?: FirewallRuleGroupStatus | undefined;

  /**
   * Additional information about the status of the rule group, if available.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account, this is the account that has shared the rule group with you.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).
   *
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * The date and time that the rule group was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time that the rule group was last modified, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: string | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleGroupResponse {
  /**
   * A collection of rules used to filter DNS network traffic.
   *
   * @public
   */
  FirewallRuleGroup?: FirewallRuleGroup | undefined;
}

/**
 * @public
 */
export interface CreateOutpostResolverRequest {
  /**
   * A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice.
   *
   * `CreatorRequestId` can be any unique string, for example, a date/time stamp.
   *
   * @public
   */
  CreatorRequestId: string | undefined;

  /**
   * A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Number of Amazon EC2 instances for the Resolver on Outpost. The default and minimal value is 4.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The Amazon EC2 instance type. If you specify this, you must also specify a value for the `OutpostArn`.
   *
   * @public
   */
  PreferredInstanceType: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost. If you specify this, you must also specify a value for the `PreferredInstanceType`.
   *
   * @public
   */
  OutpostArn: string | undefined;

  /**
   * A string that helps identify the Route 53 Resolvers on Outpost.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A complex type that contains settings for an existing Resolver on an Outpost.
 *
 * @public
 */
export interface OutpostResolver {
  /**
   * The ARN (Amazon Resource Name) for the Resolver on an Outpost.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time that the Outpost Resolver was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time that the Outpost Resolver was modified, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: string | undefined;

  /**
   * A unique string that identifies the request that created the Resolver endpoint. The `CreatorRequestId` allows failed requests to be retried without the risk of running the operation twice.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The ID of the Resolver on Outpost.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Amazon EC2 instance count for the Resolver on the Outpost.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The Amazon EC2 instance type.
   *
   * @public
   */
  PreferredInstanceType?: string | undefined;

  /**
   * Name of the Resolver.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Status of the Resolver.
   *
   * @public
   */
  Status?: OutpostResolverStatus | undefined;

  /**
   * A detailed description of the Resolver.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) for the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateOutpostResolverResponse {
  /**
   * Information about the `CreateOutpostResolver` request, including the status of the request.
   *
   * @public
   */
  OutpostResolver?: OutpostResolver | undefined;
}

/**
 * In a [CreateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html) request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). `IpAddressRequest` also includes the ID of the subnet that contains the IP address.
 *
 * @public
 */
export interface IpAddressRequest {
  /**
   * The ID of the subnet that contains the IP address.
   *
   * We recommend using [VPC Resolver on Outposts](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/outpost-resolver-getting-started.html) to create endpoints on Outposts Racks.
   *
   * > **Important:** Outposts subnets with [Local Network Interface (LNI)](https://docs.aws.amazon.com/outposts/latest/server-userguide/local-network-interface.html) enabled are not compatible with Route 53 Resolver endpoints. If you enable LNI on a subnet that contains Route 53 Resolver endpoint elastic network interfaces (ENIs), those ENIs will stop functioning. For more information, see [Subnet compatibility for Resolver endpoints](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/best-practices-resolver.html#best-practices-resolver-subnet-compatibility) in the *Amazon Route 53 Developer Guide*.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * The IPv4 address that you want to use for DNS queries.
   *
   * @public
   */
  Ip?: string | undefined;

  /**
   * The IPv6 address that you want to use for DNS queries.
   *
   * @public
   */
  Ipv6?: string | undefined;
}

/**
 * @public
 */
export interface CreateResolverEndpointRequest {
  /**
   * A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. `CreatorRequestId` can be any unique string, for example, a date/time stamp.
   *
   * @public
   */
  CreatorRequestId: string | undefined;

  /**
   * A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify must include one or more inbound rules (for inbound Resolver endpoints) or outbound rules (for outbound Resolver endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
   *
   * Some security group rules will cause your connection to be tracked. For outbound resolver endpoint, it can potentially impact the maximum queries per second from outbound endpoint to your target name server. For inbound resolver endpoint, it can bring down the overall maximum queries per second per IP address to as low as 1500. To avoid connection tracking caused by security group, see [Untracked connections](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#untracked-connectionsl).
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * Specify the applicable value:
   *
   * - `INBOUND`: Resolver forwards DNS queries to the DNS service for a VPC from your network.
   * - `OUTBOUND`: Resolver forwards DNS queries from the DNS service for a VPC to your network.
   * - `INBOUND_DELEGATION`: Resolver delegates queries to Route 53 private hosted zones from your network.
   *
   * @public
   */
  Direction: ResolverEndpointDirection | undefined;

  /**
   * The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC.
   *
   * > **Note:** Even though the minimum is 1, Route 53 requires that you create at least two.
   *
   * We recommend using [VPC Resolver on Outposts](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/outpost-resolver-getting-started.html) to create endpoints on Outposts Racks.
   *
   * > **Important:** Outposts subnets with [Local Network Interface (LNI)](https://docs.aws.amazon.com/outposts/latest/server-userguide/local-network-interface.html) enabled are not compatible with Route 53 Resolver endpoints. If you enable LNI on a subnet that contains Route 53 Resolver endpoint elastic network interfaces (ENIs), those ENIs will stop functioning. For more information, see [Subnet compatibility for Resolver endpoints](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/best-practices-resolver.html#best-practices-resolver-subnet-compatibility) in the *Amazon Route 53 Developer Guide*.
   *
   * @public
   */
  IpAddresses: IpAddressRequest[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost. If you specify this, you must also specify a value for the `PreferredInstanceType`.
   *
   * > **Note:** Resolver endpoints on Outposts are supported on first-generation Outposts only. Inbound and outbound Resolver endpoints aren't supported on second-generation Outposts.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The instance type. If you specify this, you must also specify a value for the `OutpostArn`.
   *
   * @public
   */
  PreferredInstanceType?: string | undefined;

  /**
   * A list of the tag keys and values that you want to associate with the endpoint.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * For the endpoint type you can choose either IPv4, IPv6, or dual-stack. A dual-stack endpoint means that it will resolve via both IPv4 and IPv6. This endpoint type is applied to all IP addresses.
   *
   * @public
   */
  ResolverEndpointType?: ResolverEndpointType | undefined;

  /**
   * The protocols you want to use for the endpoint. DoH-FIPS is applicable for default inbound endpoints only.
   *
   * For a default inbound endpoint you can apply the protocols as follows:
   *
   * - Do53 and DoH in combination.
   * - Do53 and DoH-FIPS in combination.
   * - Do53 alone.
   * - DoH alone.
   * - DoH-FIPS alone.
   * - None, which is treated as Do53.
   *
   * For a delegation inbound endpoint you can use Do53 only.
   *
   * For an outbound endpoint you can apply the protocols as follows:
   *
   * - Do53 and DoH in combination.
   * - Do53 alone.
   * - DoH alone.
   * - None, which is treated as Do53.
   *
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * Specifies whether RNI enhanced metrics are enabled for the Resolver endpoints. When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published. Default is false.
   *
   * > **Note:** Standard CloudWatch pricing and charges are applied for using the Route 53 Resolver endpoint RNI enhanced metrics. For more information, see [Detailed metrics](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-resolver-with-cloudwatch.html).
   *
   * @public
   */
  RniEnhancedMetricsEnabled?: boolean | undefined;

  /**
   * Specifies whether target name server metrics are enabled for the outbound Resolver endpoints. When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. Default is false. This is not supported for inbound Resolver endpoints.
   *
   * > **Note:** Standard CloudWatch pricing and charges are applied for using the Route 53 Resolver endpoint target name server metrics. For more information, see [Detailed metrics](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-resolver-with-cloudwatch.html).
   *
   * @public
   */
  TargetNameServerMetricsEnabled?: boolean | undefined;

  /**
   * Specifies whether DNS64 is enabled for the inbound Resolver endpoint. When set to `true`, Route 53 Resolver synthesizes AAAA (IPv6) records for IPv4-only services by prepending the `64:ff9b::/96` prefix to the IPv4 address. This enables IPv6-only clients that send queries through the inbound endpoint to reach IPv4-only services. DNS64 works with NAT64 to provide complete IPv6-to-IPv4 translation. Default is false.
   *
   * @public
   */
  Dns64Enabled?: boolean | undefined;

  /**
   * Specifies whether IPv6 internet access is enabled for the outbound Resolver endpoint. When set to `true`, the endpoint elastic network interfaces (ENIs) can forward DNS queries to public IPv6 targets through an internet gateway. Default is false.
   *
   * > **Important:** When you enable IPv6 internet access, use network controls like security groups, NACLs, or egress-only internet gateways to protect the endpoint ENIs from unsolicited ingress traffic. Be aware that some network controls can affect DNS query throughput due to connection tracking. For more information, see [Amazon EC2 security group connection tracking](https://docs.aws.amazon.com/ec2/latest/userguide/security-group-connection-tracking.html) and [Resolver endpoint scaling](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/best-practices-resolver-endpoint-scaling.html).
   *
   * @public
   */
  Ipv6InternetAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateResolverEndpointResponse {
  /**
   * Information about the `CreateResolverEndpoint` request, including the status of the request.
   *
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface CreateResolverQueryLogConfigRequest {
  /**
   * The name that you want to give the query logging configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN of the resource that you want Resolver to send query logs. You can send query logs to an S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream. Examples of valid values include the following:
   *
   * - **S3 bucket**:
   *
   *   `arn:aws:s3:::amzn-s3-demo-bucket`
   *
   *   You can optionally append a file prefix to the end of the ARN.
   *
   *   `arn:aws:s3:::amzn-s3-demo-bucket/development/`
   * - **CloudWatch Logs log group**:
   *
   *   `arn:aws:logs:us-west-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*`
   * - **Kinesis Data Firehose delivery stream**:
   *
   *   `arn:aws:kinesis:us-east-2:0123456789:stream/my_stream_name`
   *
   * @public
   */
  DestinationArn: string | undefined;

  /**
   * A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. `CreatorRequestId` can be any unique string, for example, a date/time stamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * A list of the tag keys and values that you want to associate with the query logging configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * In the response to a [CreateResolverQueryLogConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html), [DeleteResolverQueryLogConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html), [GetResolverQueryLogConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html), or [ListResolverQueryLogConfigs](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html) request, a complex type that contains settings for one query logging configuration.
 *
 * @public
 */
export interface ResolverQueryLogConfig {
  /**
   * The ID for the query logging configuration.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Web Services account ID for the account that created the query logging configuration.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The status of the specified query logging configuration. Valid values include the following:
   *
   * - `CREATING`: Resolver is creating the query logging configuration.
   * - `CREATED`: The query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.
   * - `DELETING`: Resolver is deleting this query logging configuration.
   * - `FAILED`: Resolver can't deliver logs to the location that is specified in the query logging configuration. Here are two common causes:
   *
   *   - The specified destination (for example, an Amazon S3 bucket) was deleted.
   *   - Permissions don't allow sending logs to the destination.
   *
   * @public
   */
  Status?: ResolverQueryLogConfigStatus | undefined;

  /**
   * An indication of whether the query logging configuration is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).
   *
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * The number of VPCs that are associated with the query logging configuration.
   *
   * @public
   */
  AssociationCount?: number | undefined;

  /**
   * The ARN for the query logging configuration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the query logging configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * A unique string that identifies the request that created the query logging configuration. The `CreatorRequestId` allows failed requests to be retried without the risk of running the operation twice.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: string | undefined;
}

/**
 * @public
 */
export interface CreateResolverQueryLogConfigResponse {
  /**
   * Information about the `CreateResolverQueryLogConfig` request, including the status of the request.
   *
   * @public
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig | undefined;
}

/**
 * In a [CreateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html) request, an array of the IPs that you want to forward DNS queries to.
 *
 * @public
 */
export interface TargetAddress {
  /**
   * One IPv4 address that you want to forward DNS queries to.
   *
   * @public
   */
  Ip?: string | undefined;

  /**
   * The port at `Ip` that you want to forward DNS queries to.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * One IPv6 address that you want to forward DNS queries to.
   *
   * @public
   */
  Ipv6?: string | undefined;

  /**
   * The protocols for the target address. The protocol you choose needs to be supported by the outbound endpoint of the Resolver rule.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The Server Name Indication of the DoH server that you want to forward queries to. This is only used if the Protocol of the `TargetAddress` is `DoH`.
   *
   * @public
   */
  ServerNameIndication?: string | undefined;
}

/**
 * @public
 */
export interface CreateResolverRuleRequest {
  /**
   * A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. `CreatorRequestId` can be any unique string, for example, a date/time stamp.
   *
   * @public
   */
  CreatorRequestId: string | undefined;

  /**
   * A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.
   *
   * The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * When you want to forward DNS queries for specified domain name to resolvers on your network, specify `FORWARD` or `DELEGATE`.
   *
   * When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify `SYSTEM`.
   *
   * For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify `FORWARD` for `RuleType`. To then have Resolver process queries for apex.example.com, you create a rule and specify `SYSTEM` for `RuleType`.
   *
   * Currently, only Resolver can create rules that have a value of `RECURSIVE` for `RuleType`.
   *
   * @public
   */
  RuleType: RuleTypeOption | undefined;

  /**
   * DNS queries for this domain name are forwarded to the IP addresses that you specify in `TargetIps`. If a query matches multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains the most specific domain name (www.example.com).
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The IPs that you want Resolver to forward DNS queries to. You can specify either Ipv4 or Ipv6 addresses but not both in the same rule. Separate IP addresses with a space.
   *
   * `TargetIps` is available only when the value of `Rule type` is `FORWARD`. You should not provide TargetIps when the Rule type is `DELEGATE`.
   *
   * > **Note:** when creating a DELEGATE rule, you must not provide the `TargetIps` parameter. If you provide the `TargetIps`, you may receive an ERROR message similar to "Delegate resolver rules need to specify a nameserver name". This error means you should not provide `TargetIps`.
   *
   * @public
   */
  TargetIps?: TargetAddress[] | undefined;

  /**
   * The ID of the outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in `TargetIps`.
   *
   * @public
   */
  ResolverEndpointId?: string | undefined;

  /**
   * A list of the tag keys and values that you want to associate with the endpoint.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * DNS queries with the delegation records that match this domain name are forwarded to the resolvers on your network.
   *
   * @public
   */
  DelegationRecord?: string | undefined;
}

/**
 * For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The `ResolverRule` parameter appears in the response to a [CreateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html), [DeleteResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html), [GetResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html), [ListResolverRules](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html), or [UpdateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html) request.
 *
 * @public
 */
export interface ResolverRule {
  /**
   * The ID that Resolver assigned to the Resolver rule when you created it.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A unique string that you specified when you created the Resolver rule. `CreatorRequestId` identifies the request and allows failed requests to be retried without the risk of running the operation twice.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) for the Resolver rule specified by `Id`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * DNS queries for this domain name are forwarded to the IP addresses that are specified in `TargetIps`. If a query matches multiple Resolver rules (example.com and www.example.com), the query is routed using the Resolver rule that contains the most specific domain name (www.example.com).
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * A code that specifies the current status of the Resolver rule.
   *
   * @public
   */
  Status?: ResolverRuleStatus | undefined;

  /**
   * A detailed description of the status of a Resolver rule.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * When you want to forward DNS queries for specified domain name to resolvers on your network, specify `FORWARD` or `DELEGATE`. If a query matches multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains the most specific domain name (www.example.com).
   *
   * When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify `SYSTEM`.
   *
   * For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify `FORWARD` for `RuleType`. To then have Resolver process queries for apex.example.com, you create a rule and specify `SYSTEM` for `RuleType`.
   *
   * Currently, only Resolver can create rules that have a value of `RECURSIVE` for `RuleType`.
   *
   * @public
   */
  RuleType?: RuleTypeOption | undefined;

  /**
   * The name for the Resolver rule, which you specified when you created the Resolver rule.
   *
   * The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network.
   *
   * @public
   */
  TargetIps?: TargetAddress[] | undefined;

  /**
   * The ID of the endpoint that the rule is associated with.
   *
   * @public
   */
  ResolverEndpointId?: string | undefined;

  /**
   * When a rule is shared with another Amazon Web Services account, the account ID of the account that the rule is shared with.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Whether the rule is shared and, if so, whether the current account is sharing the rule with another account, or another account is sharing the rule with the current account.
   *
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * The date and time that the Resolver rule was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time that the Resolver rule was last updated, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: string | undefined;

  /**
   * DNS queries with delegation records that point to this domain name are forwarded to resolvers on your network.
   *
   * @public
   */
  DelegationRecord?: string | undefined;
}

/**
 * @public
 */
export interface CreateResolverRuleResponse {
  /**
   * Information about the `CreateResolverRule` request, including the status of the request.
   *
   * @public
   */
  ResolverRule?: ResolverRule | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallDomainListRequest {
  /**
   * The ID of the domain list that you want to delete.
   *
   * @public
   */
  FirewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallDomainListResponse {
  /**
   * The domain list that you just deleted.
   *
   * @public
   */
  FirewallDomainList?: FirewallDomainList | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleRequest {
  /**
   * The unique identifier of the firewall rule group that you want to delete the rule from.
   *
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * The ID of the domain list that's used in the rule.
   *
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * The ID that is created for a DNS Firewall Advanced rule.
   *
   * @public
   */
  FirewallThreatProtectionId?: string | undefined;

  /**
   * The DNS query type that the rule you are deleting evaluates. Allowed values are;
   *
   * - A: Returns an IPv4 address.
   * - AAAA: Returns an Ipv6 address.
   * - CAA: Restricts CAs that can create SSL/TLS certifications for the domain.
   * - CNAME: Returns another domain name.
   * - DS: Record that identifies the DNSSEC signing key of a delegated zone.
   * - MX: Specifies mail servers.
   * - NAPTR: Regular-expression-based rewriting of domain names.
   * - NS: Authoritative name servers.
   * - PTR: Maps an IP address to a domain name.
   * - SOA: Start of authority record for the zone.
   * - SPF: Lists the servers authorized to send emails from a domain.
   * - SRV: Application specific values that identify servers.
   * - TXT: Verifies email senders and application-specific values.
   * - A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be defined as TYPENUMBER, where the NUMBER can be 1-65534, for example, TYPE28. For more information, see [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types).
   *
   * @public
   */
  Qtype?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleResponse {
  /**
   * The specification for the firewall rule that you just deleted.
   *
   * @public
   */
  FirewallRule?: FirewallRule | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleGroupRequest {
  /**
   * The unique identifier of the firewall rule group that you want to delete.
   *
   * @public
   */
  FirewallRuleGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleGroupResponse {
  /**
   * A collection of rules used to filter DNS network traffic.
   *
   * @public
   */
  FirewallRuleGroup?: FirewallRuleGroup | undefined;
}

/**
 * @public
 */
export interface DeleteOutpostResolverRequest {
  /**
   * A unique string that identifies the Resolver on the Outpost.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteOutpostResolverResponse {
  /**
   * Information about the `DeleteOutpostResolver` request, including the status of the request.
   *
   * @public
   */
  OutpostResolver?: OutpostResolver | undefined;
}

/**
 * @public
 */
export interface DeleteResolverEndpointRequest {
  /**
   * The ID of the Resolver endpoint that you want to delete.
   *
   * @public
   */
  ResolverEndpointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResolverEndpointResponse {
  /**
   * Information about the `DeleteResolverEndpoint` request, including the status of the request.
   *
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteResolverQueryLogConfigRequest {
  /**
   * The ID of the query logging configuration that you want to delete.
   *
   * @public
   */
  ResolverQueryLogConfigId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResolverQueryLogConfigResponse {
  /**
   * Information about the query logging configuration that you deleted, including the status of the request.
   *
   * @public
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig | undefined;
}

/**
 * @public
 */
export interface DeleteResolverRuleRequest {
  /**
   * The ID of the Resolver rule that you want to delete.
   *
   * @public
   */
  ResolverRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResolverRuleResponse {
  /**
   * Information about the `DeleteResolverRule` request, including the status of the request.
   *
   * @public
   */
  ResolverRule?: ResolverRule | undefined;
}

/**
 * @public
 */
export interface DisassociateFirewallRuleGroupRequest {
  /**
   * The identifier of the FirewallRuleGroupAssociation.
   *
   * @public
   */
  FirewallRuleGroupAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFirewallRuleGroupResponse {
  /**
   * The firewall rule group association that you just removed.
   *
   * @public
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverEndpointIpAddressRequest {
  /**
   * The ID of the Resolver endpoint that you want to disassociate an IP address from.
   *
   * @public
   */
  ResolverEndpointId: string | undefined;

  /**
   * The IPv4 address that you want to remove from a Resolver endpoint.
   *
   * @public
   */
  IpAddress: IpAddressUpdate | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverEndpointIpAddressResponse {
  /**
   * The response to an `DisassociateResolverEndpointIpAddress` request.
   *
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverQueryLogConfigRequest {
  /**
   * The ID of the query logging configuration that you want to disassociate a specified VPC from.
   *
   * @public
   */
  ResolverQueryLogConfigId: string | undefined;

  /**
   * The ID of the Amazon VPC that you want to disassociate from a specified query logging configuration.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverQueryLogConfigResponse {
  /**
   * A complex type that contains settings for the association that you deleted between an Amazon VPC and a query logging configuration.
   *
   * @public
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverRuleRequest {
  /**
   * The ID of the VPC that you want to disassociate the Resolver rule from.
   *
   * @public
   */
  VPCId: string | undefined;

  /**
   * The ID of the Resolver rule that you want to disassociate from the specified VPC.
   *
   * @public
   */
  ResolverRuleId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResolverRuleResponse {
  /**
   * Information about the `DisassociateResolverRule` request, including the status of the request.
   *
   * @public
   */
  ResolverRuleAssociation?: ResolverRuleAssociation | undefined;
}

/**
 * For Resolver list operations ([ListResolverEndpoints](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html), [ListResolverRules](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html), [ListResolverRuleAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html), [ListResolverQueryLogConfigs](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html), [ListResolverQueryLogConfigAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html)), and [ListResolverDnssecConfigs](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html)), an optional specification to return a subset of objects.
 *
 * To filter objects, such as Resolver endpoints or Resolver rules, you specify `Name` and `Values`. For example, to list only inbound Resolver endpoints, specify `Direction` for `Name` and specify `INBOUND` for `Values`.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the parameter that you want to use to filter objects.
   *
   * The valid values for `Name` depend on the action that you're including the filter in, [ListResolverEndpoints](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html), [ListResolverRules](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html), [ListResolverRuleAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html), [ListResolverQueryLogConfigs](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html), or [ListResolverQueryLogConfigAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html).
   *
   * > **Note:** In early versions of Resolver, values for `Name` were listed as uppercase, with underscore (_) delimiters. For example, `CreatorRequestId` was originally listed as `CREATOR_REQUEST_ID`. Uppercase values for `Name` are still supported.
   *
   * **ListResolverEndpoints**
   *
   * Valid values for `Name` include the following:
   *
   * - `CreatorRequestId`: The value that you specified when you created the Resolver endpoint.
   * - `Direction`: Whether you want to return inbound or outbound Resolver endpoints. If you specify `DIRECTION` for `Name`, specify `INBOUND` or `OUTBOUND` for `Values`.
   * - `HostVPCId`: The ID of the VPC that inbound DNS queries pass through on the way from your network to your VPCs in a region, or the VPC that outbound queries pass through on the way from your VPCs to your network. In a [CreateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html) request, `SubnetId` indirectly identifies the VPC. In a [GetResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html) request, the VPC ID for a Resolver endpoint is returned in the `HostVPCId` element.
   * - `IpAddressCount`: The number of IP addresses that you have associated with the Resolver endpoint.
   * - `Name`: The name of the Resolver endpoint.
   * - `SecurityGroupIds`: The IDs of the VPC security groups that you specified when you created the Resolver endpoint.
   * - `Status`: The status of the Resolver endpoint. If you specify `Status` for `Name`, specify one of the following status codes for `Values`: `CREATING`, `OPERATIONAL`, `UPDATING`, `AUTO_RECOVERING`, `ACTION_NEEDED`, or `DELETING`. For more information, see `Status` in [ResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverEndpoint.html).
   *
   * **ListResolverRules**
   *
   * Valid values for `Name` include the following:
   *
   * - `CreatorRequestId`: The value that you specified when you created the Resolver rule.
   * - `DomainName`: The domain name for which Resolver is forwarding DNS queries to your network. In the value that you specify for `Values`, include a trailing dot (.) after the domain name. For example, if the domain name is example.com, specify the following value. Note the "." after `com`:
   *
   *   `example.com.`
   * - `Name`: The name of the Resolver rule.
   * - `ResolverEndpointId`: The ID of the Resolver endpoint that the Resolver rule is associated with.
   *
   *   > **Note:** You can filter on the Resolver endpoint only for rules that have a value of `FORWARD` for `RuleType`.
   * - `Status`: The status of the Resolver rule. If you specify `Status` for `Name`, specify one of the following status codes for `Values`: `COMPLETE`, `DELETING`, `UPDATING`, or `FAILED`.
   * - `Type`: The type of the Resolver rule. If you specify `TYPE` for `Name`, specify `FORWARD` or `SYSTEM` for `Values`.
   *
   * **ListResolverRuleAssociations**
   *
   * Valid values for `Name` include the following:
   *
   * - `Name`: The name of the Resolver rule association.
   * - `ResolverRuleId`: The ID of the Resolver rule that is associated with one or more VPCs.
   * - `Status`: The status of the Resolver rule association. If you specify `Status` for `Name`, specify one of the following status codes for `Values`: `CREATING`, `COMPLETE`, `DELETING`, or `FAILED`.
   * - `VPCId`: The ID of the VPC that the Resolver rule is associated with.
   *
   * **ListResolverQueryLogConfigs**
   *
   * Valid values for `Name` include the following:
   *
   * - `Arn`: The ARN for the query logging configuration.
   * - `AssociationCount`: The number of VPCs that are associated with the query logging configuration.
   * - `CreationTime`: The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).
   * - `CreatorRequestId`: A unique string that identifies the request that created the query logging configuration.
   * - `Destination`: The Amazon Web Services service that you want to forward query logs to. Valid values include the following:
   *
   *   - `S3`
   *   - `CloudWatchLogs`
   *   - `KinesisFirehose`
   * - `DestinationArn`: The ARN of the location that Resolver is sending query logs to. This value can be the ARN for an S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.
   * - `Id`: The ID of the query logging configuration
   * - `Name`: The name of the query logging configuration
   * - `OwnerId`: The Amazon Web Services account ID for the account that created the query logging configuration.
   * - `ShareStatus`: An indication of whether the query logging configuration is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Valid values include: `NOT_SHARED`, `SHARED_WITH_ME`, or `SHARED_BY_ME`.
   * - `Status`: The status of the query logging configuration. If you specify `Status` for `Name`, specify the applicable status code for `Values`: `CREATING`, `CREATED`, `DELETING`, or `FAILED`. For more information, see [Status](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverQueryLogConfig.html#Route53Resolver-Type-route53resolver_ResolverQueryLogConfig-Status).
   *
   * **ListResolverQueryLogConfigAssociations**
   *
   * Valid values for `Name` include the following:
   *
   * - `CreationTime`: The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).
   * - `Error`: If the value of `Status` is `FAILED`, specify the cause: `DESTINATION_NOT_FOUND` or `ACCESS_DENIED`.
   * - `Id`: The ID of the query logging association.
   * - `ResolverQueryLogConfigId`: The ID of the query logging configuration that a VPC is associated with.
   * - `ResourceId`: The ID of the Amazon VPC that is associated with the query logging configuration.
   * - `Status`: The status of the query logging association. If you specify `Status` for `Name`, specify the applicable status code for `Values`: `CREATING`, `CREATED`, `DELETING`, or `FAILED`. For more information, see [Status](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverQueryLogConfigAssociation.html#Route53Resolver-Type-route53resolver_ResolverQueryLogConfigAssociation-Status).
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * When you're using a `List` operation and you want the operation to return a subset of objects, such as Resolver endpoints or Resolver rules, the value of the parameter that you want to use to filter objects. For example, to list only inbound Resolver endpoints, specify `Direction` for `Name` and specify `INBOUND` for `Values`.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).
 *
 * @public
 */
export interface FirewallConfig {
  /**
   * The ID of the firewall configuration.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the VPC that this firewall configuration applies to.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the VPC that this firewall configuration applies to.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Determines how DNS Firewall operates during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply.
   *
   * - By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall returns a failure error when it is unable to properly evaluate a query.
   * - If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it is unable to properly evaluate them.
   *
   * This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association.
   *
   * @public
   */
  FirewallFailOpen?: FirewallFailOpenStatus | undefined;
}

/**
 * Minimal high-level information for a firewall domain list. The action ListFirewallDomainLists returns an array of these objects.
 *
 * To retrieve full information for a firewall domain list, call GetFirewallDomainList and ListFirewallDomains.
 *
 * @public
 */
export interface FirewallDomainListMetadata {
  /**
   * The ID of the domain list.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the firewall domain list metadata.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the domain list.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The owner of the list, used only for lists that are not managed by you. For example, the managed domain list `AWSManagedDomainsMalwareDomainList` has the managed owner name `Route 53 Resolver DNS Firewall`.
   *
   * @public
   */
  ManagedOwnerName?: string | undefined;

  /**
   * The type of the managed domain list, for example `THREAT`.
   *
   * @public
   */
  ManagedListType?: DomainListType | undefined;

  /**
   * The category of the domain list.
   *
   * @public
   */
  Category?: string | undefined;
}

/**
 * Minimal high-level information for a firewall rule group. The action ListFirewallRuleGroups returns an array of these objects.
 *
 * To retrieve full information for a firewall rule group, call GetFirewallRuleGroup and ListFirewallRules.
 *
 * @public
 */
export interface FirewallRuleGroupMetadata {
  /**
   * The ID of the rule group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the rule group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the rule group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account, this is the account that has shared the rule group with you.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).
   *
   * @public
   */
  ShareStatus?: ShareStatus | undefined;
}

/**
 * Identifies the Amazon Web Services Marketplace product that backs a partner-managed rule type. Returned as part of FirewallRuleTypeDefinition when the rule type variant requires an active customer subscription to the named product.
 *
 * @public
 */
export interface SubscriptionInfo {
  /**
   * The name of the Amazon Web Services Marketplace seller (vendor) that publishes the partner threat-protection product (for example, `Palo Alto Networks`).
   *
   * @public
   */
  VendorName?: string | undefined;

  /**
   * The Amazon Web Services Marketplace product identifier of the partner threat-protection product. Use this value to verify or manage the calling account's subscription in Amazon Web Services Marketplace.
   *
   * @public
   */
  ProductId?: string | undefined;
}

/**
 * The definition of an available rule type that can be used in DNS Firewall rules. This is returned by ListFirewallRuleTypes.
 *
 * @public
 */
export interface FirewallRuleTypeDefinition {
  /**
   * The category or class of the rule type, such as `FirewallAdvancedContentCategory` or `FirewallAdvancedThreatCategory`.
   *
   * @public
   */
  RuleType?: string | undefined;

  /**
   * The specific identifier within the rule type category, such as `VIOLENCE_AND_HATE_SPEECH` or `PHISHING`.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The display name of the rule type.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A description of the rule type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * For rule types that require an external subscription (today, only the `PartnerThreatProtection` variant), describes the Amazon Web Services Marketplace product that backs the rule type. Absent for rule types that are managed by Amazon Web Services and do not require a separate subscription. See SubscriptionInfo.
   *
   * @public
   */
  SubscriptionInfo?: SubscriptionInfo | undefined;
}

/**
 * @public
 */
export interface GetFirewallConfigRequest {
  /**
   * The ID of the VPC from Amazon VPC that the configuration is for.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallConfigResponse {
  /**
   * Configuration of the firewall behavior provided by DNS Firewall for a single VPC from AmazonVPC.
   *
   * @public
   */
  FirewallConfig?: FirewallConfig | undefined;
}

/**
 * @public
 */
export interface GetFirewallDomainListRequest {
  /**
   * The ID of the domain list.
   *
   * @public
   */
  FirewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallDomainListResponse {
  /**
   * The domain list that you requested.
   *
   * @public
   */
  FirewallDomainList?: FirewallDomainList | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupRequest {
  /**
   * The unique identifier of the firewall rule group.
   *
   * @public
   */
  FirewallRuleGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupResponse {
  /**
   * A collection of rules used to filter DNS network traffic.
   *
   * @public
   */
  FirewallRuleGroup?: FirewallRuleGroup | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupAssociationRequest {
  /**
   * The identifier of the FirewallRuleGroupAssociation.
   *
   * @public
   */
  FirewallRuleGroupAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupAssociationResponse {
  /**
   * The association that you requested.
   *
   * @public
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupPolicyRequest {
  /**
   * The ARN (Amazon Resource Name) for the rule group.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleGroupPolicyResponse {
  /**
   * The Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM).
   *
   * @public
   */
  FirewallRuleGroupPolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostResolverRequest {
  /**
   * The ID of the Resolver on the Outpost.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOutpostResolverResponse {
  /**
   * Information about the `GetOutpostResolver` request, including the status of the request.
   *
   * @public
   */
  OutpostResolver?: OutpostResolver | undefined;
}

/**
 * @public
 */
export interface GetResolverConfigRequest {
  /**
   * Resource ID of the Amazon VPC that you want to get information about.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * A complex type that contains information about a Resolver configuration for a VPC.
 *
 * @public
 */
export interface ResolverConfig {
  /**
   * ID for the Resolver configuration.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the Amazon Virtual Private Cloud VPC or a Route 53 Profile that you're configuring Resolver for.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The owner account ID of the Amazon Virtual Private Cloud VPC.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The status of whether or not the Resolver will create autodefined rules for reverse DNS lookups. This is enabled by default. The status can be one of following:
   *
   * - **ENABLING:** Autodefined rules for reverse DNS lookups are being enabled but are not complete.
   * - **ENABLED:** Autodefined rules for reverse DNS lookups are enabled.
   * - **DISABLING:** Autodefined rules for reverse DNS lookups are being disabled but are not complete.
   * - **DISABLED:** Autodefined rules for reverse DNS lookups are disabled.
   *
   * @public
   */
  AutodefinedReverse?: ResolverAutodefinedReverseStatus | undefined;
}

/**
 * @public
 */
export interface GetResolverConfigResponse {
  /**
   * Information about the behavior configuration of Route 53 Resolver behavior for the VPC you specified in the `GetResolverConfig` request.
   *
   * @public
   */
  ResolverConfig?: ResolverConfig | undefined;
}

/**
 * @public
 */
export interface GetResolverDnssecConfigRequest {
  /**
   * The ID of the virtual private cloud (VPC) for the DNSSEC validation status.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * A complex type that contains information about a configuration for DNSSEC validation.
 *
 * @public
 */
export interface ResolverDnssecConfig {
  /**
   * The ID for a configuration for DNSSEC validation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The owner account ID of the virtual private cloud (VPC) for a configuration for DNSSEC validation.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The ID of the virtual private cloud (VPC) that you're configuring the DNSSEC validation status for.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The validation status for a DNSSEC configuration. The status can be one of the following:
   *
   * - **ENABLING:** DNSSEC validation is being enabled but is not complete.
   * - **ENABLED:** DNSSEC validation is enabled.
   * - **DISABLING:** DNSSEC validation is being disabled but is not complete.
   * - **DISABLED** DNSSEC validation is disabled.
   *
   * @public
   */
  ValidationStatus?: ResolverDNSSECValidationStatus | undefined;
}

/**
 * @public
 */
export interface GetResolverDnssecConfigResponse {
  /**
   * The information about a configuration for DNSSEC validation.
   *
   * @public
   */
  ResolverDNSSECConfig?: ResolverDnssecConfig | undefined;
}

/**
 * @public
 */
export interface GetResolverEndpointRequest {
  /**
   * The ID of the Resolver endpoint that you want to get information about.
   *
   * @public
   */
  ResolverEndpointId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverEndpointResponse {
  /**
   * Information about the Resolver endpoint that you specified in a `GetResolverEndpoint` request.
   *
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigRequest {
  /**
   * The ID of the Resolver query logging configuration that you want to get information about.
   *
   * @public
   */
  ResolverQueryLogConfigId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigResponse {
  /**
   * Information about the Resolver query logging configuration that you specified in a `GetQueryLogConfig` request.
   *
   * @public
   */
  ResolverQueryLogConfig?: ResolverQueryLogConfig | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigAssociationRequest {
  /**
   * The ID of the Resolver query logging configuration association that you want to get information about.
   *
   * @public
   */
  ResolverQueryLogConfigAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigAssociationResponse {
  /**
   * Information about the Resolver query logging configuration association that you specified in a `GetQueryLogConfigAssociation` request.
   *
   * @public
   */
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigPolicyRequest {
  /**
   * The ARN of the query logging configuration that you want to get the query logging policy for.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetResolverQueryLogConfigPolicyResponse {
  /**
   * Information about the query logging policy for the query logging configuration that you specified in a `GetResolverQueryLogConfigPolicy` request.
   *
   * @public
   */
  ResolverQueryLogConfigPolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRuleRequest {
  /**
   * The ID of the Resolver rule that you want to get information about.
   *
   * @public
   */
  ResolverRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRuleResponse {
  /**
   * Information about the Resolver rule that you specified in a `GetResolverRule` request.
   *
   * @public
   */
  ResolverRule?: ResolverRule | undefined;
}

/**
 * @public
 */
export interface GetResolverRuleAssociationRequest {
  /**
   * The ID of the Resolver rule association that you want to get information about.
   *
   * @public
   */
  ResolverRuleAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRuleAssociationResponse {
  /**
   * Information about the Resolver rule association that you specified in a `GetResolverRuleAssociation` request.
   *
   * @public
   */
  ResolverRuleAssociation?: ResolverRuleAssociation | undefined;
}

/**
 * @public
 */
export interface GetResolverRulePolicyRequest {
  /**
   * The ID of the Resolver rule that you want to get the Resolver rule policy for.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetResolverRulePolicyResponse {
  /**
   * The Resolver rule policy for the rule that you specified in a `GetResolverRulePolicy` request.
   *
   * @public
   */
  ResolverRulePolicy?: string | undefined;
}

/**
 * @public
 */
export interface ImportFirewallDomainsRequest {
  /**
   * The ID of the domain list that you want to modify with the import operation.
   *
   * @public
   */
  FirewallDomainListId: string | undefined;

  /**
   * What you want DNS Firewall to do with the domains that are listed in the file. This must be set to `REPLACE`, which updates the domain list to exactly match the list in the file.
   *
   * @public
   */
  Operation: FirewallDomainImportOperation | undefined;

  /**
   * The fully qualified URL or URI of the file stored in Amazon Simple Storage Service (Amazon S3) that contains the list of domains to import.
   *
   * The file must be in an S3 bucket that's in the same Region as your DNS Firewall. The file must be a text file and must contain a single domain per line.
   *
   * @public
   */
  DomainFileUrl: string | undefined;
}

/**
 * @public
 */
export interface ImportFirewallDomainsResponse {
  /**
   * The Id of the firewall domain list that DNS Firewall just updated.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the domain list.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Status of the import request.
   *
   * @public
   */
  Status?: FirewallDomainListStatus | undefined;

  /**
   * Additional information about the status of the list, if available.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * In the response to a [GetResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html) request, information about the IP addresses that the Resolver endpoint uses for DNS queries.
 *
 * @public
 */
export interface IpAddressResponse {
  /**
   * The ID of one IP address.
   *
   * @public
   */
  IpId?: string | undefined;

  /**
   * The ID of one subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * One IPv4 address that the Resolver endpoint uses for DNS queries.
   *
   * @public
   */
  Ip?: string | undefined;

  /**
   * One IPv6 address that the Resolver endpoint uses for DNS queries.
   *
   * @public
   */
  Ipv6?: string | undefined;

  /**
   * A status code that gives the current status of the request.
   *
   * @public
   */
  Status?: IpAddressStatus | undefined;

  /**
   * A message that provides additional information about the status of the request.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The date and time that the IP address was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The date and time that the IP address was last modified, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallConfigsRequest {
  /**
   * The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * If you don't specify a value for `MaxResults`, Resolver returns up to 100 objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first call to this list request, omit this value.
   *
   * When you request a list of objects, Resolver returns at most the number of objects specified in `MaxResults`. If more objects are available for retrieval, Resolver returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallConfigsResponse {
  /**
   * If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The configurations for the firewall behavior provided by DNS Firewall for VPCs from Amazon Virtual Private Cloud (Amazon VPC).
   *
   * @public
   */
  FirewallConfigs?: FirewallConfig[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainListsRequest {
  /**
   * The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * If you don't specify a value for `MaxResults`, Resolver returns up to 100 objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first call to this list request, omit this value.
   *
   * When you request a list of objects, Resolver returns at most the number of objects specified in `MaxResults`. If more objects are available for retrieval, Resolver returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainListsResponse {
  /**
   * If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the domain lists that you have defined.
   *
   * This might be a partial list of the domain lists that you've defined. For information, see `MaxResults`.
   *
   * @public
   */
  FirewallDomainLists?: FirewallDomainListMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainsRequest {
  /**
   * The ID of the domain list whose domains you want to retrieve.
   *
   * @public
   */
  FirewallDomainListId: string | undefined;

  /**
   * The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * If you don't specify a value for `MaxResults`, Resolver returns up to 100 objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first call to this list request, omit this value.
   *
   * When you request a list of objects, Resolver returns at most the number of objects specified in `MaxResults`. If more objects are available for retrieval, Resolver returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainsResponse {
  /**
   * If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the domains in the firewall domain list.
   *
   * This might be a partial list of the domains that you've defined in the domain list. For information, see `MaxResults`.
   *
   * @public
   */
  Domains?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallRuleGroupAssociationsRequest {
  /**
   * The unique identifier of the firewall rule group that you want to retrieve the associations for. Leave this blank to retrieve associations for any rule group.
   *
   * @public
   */
  FirewallRuleGroupId?: string | undefined;

  /**
   * The unique identifier of the VPC that you want to retrieve the associations for. Leave this blank to retrieve associations for any VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC. DNS Firewall filters VPC traffic starting from the rule group with the lowest numeric priority setting.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The association `Status` setting that you want DNS Firewall to filter on for the list. If you don't specify this, then DNS Firewall returns all associations, regardless of status.
   *
   * @public
   */
  Status?: FirewallRuleGroupAssociationStatus | undefined;

  /**
   * The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * If you don't specify a value for `MaxResults`, Resolver returns up to 100 objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first call to this list request, omit this value.
   *
   * When you request a list of objects, Resolver returns at most the number of objects specified in `MaxResults`. If more objects are available for retrieval, Resolver returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallRuleGroupAssociationsResponse {
  /**
   * If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of your firewall rule group associations.
   *
   * This might be a partial list of the associations that you have defined. For information, see `MaxResults`.
   *
   * @public
   */
  FirewallRuleGroupAssociations?: FirewallRuleGroupAssociation[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallRuleGroupsRequest {
  /**
   * The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * If you don't specify a value for `MaxResults`, Resolver returns up to 100 objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first call to this list request, omit this value.
   *
   * When you request a list of objects, Resolver returns at most the number of objects specified in `MaxResults`. If more objects are available for retrieval, Resolver returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallRuleGroupsResponse {
  /**
   * If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of your firewall rule groups.
   *
   * This might be a partial list of the rule groups that you have defined. For information, see `MaxResults`.
   *
   * @public
   */
  FirewallRuleGroups?: FirewallRuleGroupMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallRulesRequest {
  /**
   * The unique identifier of the firewall rule group that you want to retrieve the rules for.
   *
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * Optional additional filter for the rules to retrieve.
   *
   * The setting that determines the processing order of the rules in a rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * Optional additional filter for the rules to retrieve.
   *
   * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule:
   *
   * - `ALLOW` - Permit the request to go through. Not availabe for DNS Firewall Advanced rules.
   * - `ALERT` - Permit the request to go through but send an alert to the logs.
   * - `BLOCK` - Disallow the request. If this is specified, additional handling details are provided in the rule's `BlockResponse` setting.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * If you don't specify a value for `MaxResults`, Resolver returns up to 100 objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first call to this list request, omit this value.
   *
   * When you request a list of objects, Resolver returns at most the number of objects specified in `MaxResults`. If more objects are available for retrieval, Resolver returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallRulesResponse {
  /**
   * If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the rules that you have defined.
   *
   * This might be a partial list of the firewall rules that you've defined. For information, see `MaxResults`.
   *
   * @public
   */
  FirewallRules?: FirewallRule[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallRuleTypesRequest {
  /**
   * An optional filter that restricts the response to a single FirewallRuleType variant. Supported values: `FirewallAdvancedContentCategory`, `FirewallAdvancedThreatCategory`, `DnsThreatProtection`, and `PartnerThreatProtection`. If omitted, definitions across all variants are returned.
   *
   * @public
   */
  RuleType?: string | undefined;

  /**
   * The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first call to this list request, omit this value. When you request a list of objects, Resolver returns at most the number of objects specified in `MaxResults`. If more objects are available for retrieval, Resolver provides a `NextToken` value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallRuleTypesResponse {
  /**
   * A list of the available rule type definitions.
   *
   * @public
   */
  FirewallRuleTypes?: FirewallRuleTypeDefinition[] | undefined;

  /**
   * If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutpostResolversRequest {
  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The maximum number of Resolvers on the Outpost that you want to return in the response to a `ListOutpostResolver` request. If you don't specify a value for `MaxResults`, the request returns up to 100 Resolvers.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first `ListOutpostResolver` request, omit this value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutpostResolversResponse {
  /**
   * The Resolvers on Outposts that were created by using the current Amazon Web Services account, and that match the specified filters, if any.
   *
   * @public
   */
  OutpostResolvers?: OutpostResolver[] | undefined;

  /**
   * If more than `MaxResults` Resolvers match the specified criteria, you can submit another `ListOutpostResolver` request to get the next group of results. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolverConfigsRequest {
  /**
   * The maximum number of Resolver configurations that you want to return in the response to a `ListResolverConfigs` request. If you don't specify a value for `MaxResults`, up to 100 Resolver configurations are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) If the current Amazon Web Services account has more than `MaxResults` Resolver configurations, use `NextToken` to get the second and subsequent pages of results.
   *
   * For the first `ListResolverConfigs` request, omit this value.
   *
   * For the second and subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolverConfigsResponse {
  /**
   * If a response includes the last of the Resolver configurations that are associated with the current Amazon Web Services account, `NextToken` doesn't appear in the response.
   *
   * If a response doesn't include the last of the configurations, you can get more configurations by submitting another `ListResolverConfigs` request. Get the value of `NextToken` that Amazon Route 53 returned in the previous response and include it in `NextToken` in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array that contains one `ResolverConfigs` element for each Resolver configuration that is associated with the current Amazon Web Services account.
   *
   * @public
   */
  ResolverConfigs?: ResolverConfig[] | undefined;
}

/**
 * @public
 */
export interface ListResolverDnssecConfigsRequest {
  /**
   * *Optional*: An integer that specifies the maximum number of DNSSEC configuration results that you want Amazon Route 53 to return. If you don't specify a value for `MaxResults`, Route 53 returns up to 100 configuration per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) If the current Amazon Web Services account has more than `MaxResults` DNSSEC configurations, use `NextToken` to get the second and subsequent pages of results.
   *
   * For the first `ListResolverDnssecConfigs` request, omit this value.
   *
   * For the second and subsequent requests, get the value of `NextToken` from the previous response and specify that value for `NextToken` in the request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional specification to return a subset of objects.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListResolverDnssecConfigsResponse {
  /**
   * If a response includes the last of the DNSSEC configurations that are associated with the current Amazon Web Services account, `NextToken` doesn't appear in the response.
   *
   * If a response doesn't include the last of the configurations, you can get more configurations by submitting another [ListResolverDnssecConfigs](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResolverDnssecConfigs.html) request. Get the value of `NextToken` that Amazon Route 53 returned in the previous response and include it in `NextToken` in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array that contains one [ResolverDnssecConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResolverDnssecConfig.html) element for each configuration for DNSSEC validation that is associated with the current Amazon Web Services account. It doesn't contain disabled DNSSEC configurations for the resource.
   *
   * @public
   */
  ResolverDnssecConfigs?: ResolverDnssecConfig[] | undefined;
}

/**
 * @public
 */
export interface ListResolverEndpointIpAddressesRequest {
  /**
   * The ID of the Resolver endpoint that you want to get IP addresses for.
   *
   * @public
   */
  ResolverEndpointId: string | undefined;

  /**
   * The maximum number of IP addresses that you want to return in the response to a `ListResolverEndpointIpAddresses` request. If you don't specify a value for `MaxResults`, Resolver returns up to 100 IP addresses.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first `ListResolverEndpointIpAddresses` request, omit this value.
   *
   * If the specified Resolver endpoint has more than `MaxResults` IP addresses, you can submit another `ListResolverEndpointIpAddresses` request to get the next group of IP addresses. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolverEndpointIpAddressesResponse {
  /**
   * If the specified endpoint has more than `MaxResults` IP addresses, you can submit another `ListResolverEndpointIpAddresses` request to get the next group of IP addresses. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The value that you specified for `MaxResults` in the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Information about the IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).
   *
   * @public
   */
  IpAddresses?: IpAddressResponse[] | undefined;
}

/**
 * @public
 */
export interface ListResolverEndpointsRequest {
  /**
   * The maximum number of Resolver endpoints that you want to return in the response to a `ListResolverEndpoints` request. If you don't specify a value for `MaxResults`, Resolver returns up to 100 Resolver endpoints.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first `ListResolverEndpoints` request, omit this value.
   *
   * If you have more than `MaxResults` Resolver endpoints, you can submit another `ListResolverEndpoints` request to get the next group of Resolver endpoints. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional specification to return a subset of Resolver endpoints, such as all inbound Resolver endpoints.
   *
   * > **Note:** If you submit a second or subsequent `ListResolverEndpoints` request and specify the `NextToken` parameter, you must use the same values for `Filters`, if any, as in the previous request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListResolverEndpointsResponse {
  /**
   * If more than `MaxResults` IP addresses match the specified criteria, you can submit another `ListResolverEndpoint` request to get the next group of results. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The value that you specified for `MaxResults` in the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Resolver endpoints that were created by using the current Amazon Web Services account, and that match the specified filters, if any.
   *
   * @public
   */
  ResolverEndpoints?: ResolverEndpoint[] | undefined;
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigAssociationsRequest {
  /**
   * The maximum number of query logging associations that you want to return in the response to a `ListResolverQueryLogConfigAssociations` request. If you don't specify a value for `MaxResults`, Resolver returns up to 100 query logging associations.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first `ListResolverQueryLogConfigAssociations` request, omit this value.
   *
   * If there are more than `MaxResults` query logging associations that match the values that you specify for `Filters`, you can submit another `ListResolverQueryLogConfigAssociations` request to get the next group of associations. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional specification to return a subset of query logging associations.
   *
   * > **Note:** If you submit a second or subsequent `ListResolverQueryLogConfigAssociations` request and specify the `NextToken` parameter, you must use the same values for `Filters`, if any, as in the previous request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The element that you want Resolver to sort query logging associations by.
   *
   * > **Note:** If you submit a second or subsequent `ListResolverQueryLogConfigAssociations` request and specify the `NextToken` parameter, you must use the same value for `SortBy`, if any, as in the previous request.
   *
   * Valid values include the following elements:
   *
   * - `CreationTime`: The ID of the query logging association.
   * - `Error`: If the value of `Status` is `FAILED`, the value of `Error` indicates the cause:
   *
   *   - `DESTINATION_NOT_FOUND`: The specified destination (for example, an Amazon S3 bucket) was deleted.
   *   - `ACCESS_DENIED`: Permissions don't allow sending logs to the destination.
   *
   *   If `Status` is a value other than `FAILED`, `ERROR` is null.
   * - `Id`: The ID of the query logging association
   * - `ResolverQueryLogConfigId`: The ID of the query logging configuration
   * - `ResourceId`: The ID of the VPC that is associated with the query logging configuration
   * - `Status`: The current status of the configuration. Valid values include the following:
   *
   *   - `CREATING`: Resolver is creating an association between an Amazon VPC and a query logging configuration.
   *   - `CREATED`: The association between an Amazon VPC and a query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.
   *   - `DELETING`: Resolver is deleting this query logging association.
   *   - `FAILED`: Resolver either couldn't create or couldn't delete the query logging association. Here are two common causes:
   *
   *     - The specified destination (for example, an Amazon S3 bucket) was deleted.
   *     - Permissions don't allow sending logs to the destination.
   *
   * @public
   */
  SortBy?: string | undefined;

  /**
   * If you specified a value for `SortBy`, the order that you want query logging associations to be listed in, `ASCENDING` or `DESCENDING`.
   *
   * > **Note:** If you submit a second or subsequent `ListResolverQueryLogConfigAssociations` request and specify the `NextToken` parameter, you must use the same value for `SortOrder`, if any, as in the previous request.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigAssociationsResponse {
  /**
   * If there are more than `MaxResults` query logging associations, you can submit another `ListResolverQueryLogConfigAssociations` request to get the next group of associations. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of query logging associations that were created by the current account in the specified Region. This count can differ from the number of associations that are returned in a `ListResolverQueryLogConfigAssociations` response, depending on the values that you specify in the request.
   *
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * The total number of query logging associations that were created by the current account in the specified Region and that match the filters that were specified in the `ListResolverQueryLogConfigAssociations` request. For the total number of associations that were created by the current account in the specified Region, see `TotalCount`.
   *
   * @public
   */
  TotalFilteredCount?: number | undefined;

  /**
   * A list that contains one `ResolverQueryLogConfigAssociations` element for each query logging association that matches the values that you specified for `Filter`.
   *
   * @public
   */
  ResolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociation[] | undefined;
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigsRequest {
  /**
   * The maximum number of query logging configurations that you want to return in the response to a `ListResolverQueryLogConfigs` request. If you don't specify a value for `MaxResults`, Resolver returns up to 100 query logging configurations.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first `ListResolverQueryLogConfigs` request, omit this value.
   *
   * If there are more than `MaxResults` query logging configurations that match the values that you specify for `Filters`, you can submit another `ListResolverQueryLogConfigs` request to get the next group of configurations. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional specification to return a subset of query logging configurations.
   *
   * > **Note:** If you submit a second or subsequent `ListResolverQueryLogConfigs` request and specify the `NextToken` parameter, you must use the same values for `Filters`, if any, as in the previous request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The element that you want Resolver to sort query logging configurations by.
   *
   * > **Note:** If you submit a second or subsequent `ListResolverQueryLogConfigs` request and specify the `NextToken` parameter, you must use the same value for `SortBy`, if any, as in the previous request.
   *
   * Valid values include the following elements:
   *
   * - `Arn`: The ARN of the query logging configuration
   * - `AssociationCount`: The number of VPCs that are associated with the specified configuration
   * - `CreationTime`: The date and time that Resolver returned when the configuration was created
   * - `CreatorRequestId`: The value that was specified for `CreatorRequestId` when the configuration was created
   * - `DestinationArn`: The location that logs are sent to
   * - `Id`: The ID of the configuration
   * - `Name`: The name of the configuration
   * - `OwnerId`: The Amazon Web Services account number of the account that created the configuration
   * - `ShareStatus`: Whether the configuration is shared with other Amazon Web Services accounts or shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).
   * - `Status`: The current status of the configuration. Valid values include the following:
   *
   *   - `CREATING`: Resolver is creating the query logging configuration.
   *   - `CREATED`: The query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.
   *   - `DELETING`: Resolver is deleting this query logging configuration.
   *   - `FAILED`: Resolver either couldn't create or couldn't delete the query logging configuration. Here are two common causes:
   *
   *     - The specified destination (for example, an Amazon S3 bucket) was deleted.
   *     - Permissions don't allow sending logs to the destination.
   *
   * @public
   */
  SortBy?: string | undefined;

  /**
   * If you specified a value for `SortBy`, the order that you want query logging configurations to be listed in, `ASCENDING` or `DESCENDING`.
   *
   * > **Note:** If you submit a second or subsequent `ListResolverQueryLogConfigs` request and specify the `NextToken` parameter, you must use the same value for `SortOrder`, if any, as in the previous request.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListResolverQueryLogConfigsResponse {
  /**
   * If there are more than `MaxResults` query logging configurations, you can submit another `ListResolverQueryLogConfigs` request to get the next group of configurations. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of query logging configurations that were created by the current account in the specified Region. This count can differ from the number of query logging configurations that are returned in a `ListResolverQueryLogConfigs` response, depending on the values that you specify in the request.
   *
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * The total number of query logging configurations that were created by the current account in the specified Region and that match the filters that were specified in the `ListResolverQueryLogConfigs` request. For the total number of query logging configurations that were created by the current account in the specified Region, see `TotalCount`.
   *
   * @public
   */
  TotalFilteredCount?: number | undefined;

  /**
   * A list that contains one `ResolverQueryLogConfig` element for each query logging configuration that matches the values that you specified for `Filter`.
   *
   * @public
   */
  ResolverQueryLogConfigs?: ResolverQueryLogConfig[] | undefined;
}

/**
 * @public
 */
export interface ListResolverRuleAssociationsRequest {
  /**
   * The maximum number of rule associations that you want to return in the response to a `ListResolverRuleAssociations` request. If you don't specify a value for `MaxResults`, Resolver returns up to 100 rule associations.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first `ListResolverRuleAssociation` request, omit this value.
   *
   * If you have more than `MaxResults` rule associations, you can submit another `ListResolverRuleAssociation` request to get the next group of rule associations. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional specification to return a subset of Resolver rules, such as Resolver rules that are associated with the same VPC ID.
   *
   * > **Note:** If you submit a second or subsequent `ListResolverRuleAssociations` request and specify the `NextToken` parameter, you must use the same values for `Filters`, if any, as in the previous request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListResolverRuleAssociationsResponse {
  /**
   * If more than `MaxResults` rule associations match the specified criteria, you can submit another `ListResolverRuleAssociation` request to get the next group of results. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The value that you specified for `MaxResults` in the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The associations that were created between Resolver rules and VPCs using the current Amazon Web Services account, and that match the specified filters, if any.
   *
   * @public
   */
  ResolverRuleAssociations?: ResolverRuleAssociation[] | undefined;
}

/**
 * @public
 */
export interface ListResolverRulesRequest {
  /**
   * The maximum number of Resolver rules that you want to return in the response to a `ListResolverRules` request. If you don't specify a value for `MaxResults`, Resolver returns up to 100 Resolver rules.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first `ListResolverRules` request, omit this value.
   *
   * If you have more than `MaxResults` Resolver rules, you can submit another `ListResolverRules` request to get the next group of Resolver rules. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional specification to return a subset of Resolver rules, such as all Resolver rules that are associated with the same Resolver endpoint.
   *
   * > **Note:** If you submit a second or subsequent `ListResolverRules` request and specify the `NextToken` parameter, you must use the same values for `Filters`, if any, as in the previous request.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListResolverRulesResponse {
  /**
   * If more than `MaxResults` Resolver rules match the specified criteria, you can submit another `ListResolverRules` request to get the next group of results. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The value that you specified for `MaxResults` in the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Resolver rules that were created using the current Amazon Web Services account and that match the specified filters, if any.
   *
   * @public
   */
  ResolverRules?: ResolverRule[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource that you want to list tags for.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The maximum number of tags that you want to return in the response to a `ListTagsForResource` request. If you don't specify a value for `MaxResults`, Resolver returns up to 100 tags.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first `ListTagsForResource` request, omit this value.
   *
   * If you have more than `MaxResults` tags, you can submit another `ListTagsForResource` request to get the next group of tags for the resource. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags that are associated with the resource that you specified in the `ListTagsForResource` request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If more than `MaxResults` tags match the specified criteria, you can submit another `ListTagsForResource` request to get the next group of results. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutFirewallRuleGroupPolicyRequest {
  /**
   * The ARN (Amazon Resource Name) for the rule group that you want to share.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The Identity and Access Management (Amazon Web Services IAM) policy to attach to the rule group.
   *
   * @public
   */
  FirewallRuleGroupPolicy: string | undefined;
}

/**
 * @public
 */
export interface PutFirewallRuleGroupPolicyResponse {
  /**
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface PutResolverQueryLogConfigPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the account that you want to share rules with.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * An Identity and Access Management policy statement that lists the query logging configurations that you want to share with another Amazon Web Services account and the operations that you want the account to be able to perform. You can specify the following operations in the `Actions` section of the statement:
   *
   * - `route53resolver:AssociateResolverQueryLogConfig`
   * - `route53resolver:DisassociateResolverQueryLogConfig`
   * - `route53resolver:ListResolverQueryLogConfigs`
   *
   * In the `Resource` section of the statement, you specify the ARNs for the query logging configurations that you want to share with the account that you specified in `Arn`.
   *
   * @public
   */
  ResolverQueryLogConfigPolicy: string | undefined;
}

/**
 * The response to a `PutResolverQueryLogConfigPolicy` request.
 *
 * @public
 */
export interface PutResolverQueryLogConfigPolicyResponse {
  /**
   * Whether the `PutResolverQueryLogConfigPolicy` request was successful.
   *
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface PutResolverRulePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the rule that you want to share with another account.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * An Identity and Access Management policy statement that lists the rules that you want to share with another Amazon Web Services account and the operations that you want the account to be able to perform. You can specify the following operations in the `Action` section of the statement:
   *
   * - `route53resolver:GetResolverRule`
   * - `route53resolver:AssociateResolverRule`
   * - `route53resolver:DisassociateResolverRule`
   * - `route53resolver:ListResolverRules`
   * - `route53resolver:ListResolverRuleAssociations`
   *
   * In the `Resource` section of the statement, specify the ARN for the rule that you want to share with another account. Specify the same ARN that you specified in `Arn`.
   *
   * @public
   */
  ResolverRulePolicy: string | undefined;
}

/**
 * The response to a `PutResolverRulePolicy` request.
 *
 * @public
 */
export interface PutResolverRulePolicyResponse {
  /**
   * Whether the `PutResolverRulePolicy` request was successful.
   *
   * @public
   */
  ReturnValue?: boolean | undefined;
}

/**
 * In an [UpdateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html) request, information about the changes that you want to make.
 *
 * @public
 */
export interface ResolverRuleConfig {
  /**
   * The new name for the Resolver rule. The name that you specify appears in the Resolver dashboard in the Route 53 console.
   *
   * The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.
   *
   * @public
   */
  TargetIps?: TargetAddress[] | undefined;

  /**
   * The ID of the new outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in `TargetIps`.
   *
   * @public
   */
  ResolverEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource that you want to add tags to. To get the ARN for a resource, use the applicable `Get` or `List` command:
   *
   * - [GetResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html)
   * - [GetResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html)
   * - [GetResolverRuleAssociation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html)
   * - [ListResolverEndpoints](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html)
   * - [ListResolverRuleAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html)
   * - [ListResolverRules](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html)
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags that you want to add to the specified resource.
   *
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
   * The Amazon Resource Name (ARN) for the resource that you want to remove tags from. To get the ARN for a resource, use the applicable `Get` or `List` command:
   *
   * - [GetResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html)
   * - [GetResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html)
   * - [GetResolverRuleAssociation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html)
   * - [ListResolverEndpoints](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html)
   * - [ListResolverRuleAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html)
   * - [ListResolverRules](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html)
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags that you want to remove to the specified resource.
   *
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
   * The ID of the VPC that the configuration is for.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Determines how Route 53 Resolver handles queries during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply.
   *
   * - By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall blocks queries that it is unable to evaluate properly.
   * - If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it is unable to properly evaluate them.
   *
   * This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association.
   *
   * @public
   */
  FirewallFailOpen: FirewallFailOpenStatus | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallConfigResponse {
  /**
   * Configuration of the firewall behavior provided by DNS Firewall for a single VPC.
   *
   * @public
   */
  FirewallConfig?: FirewallConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDomainsRequest {
  /**
   * The ID of the domain list whose domains you want to update.
   *
   * @public
   */
  FirewallDomainListId: string | undefined;

  /**
   * What you want DNS Firewall to do with the domains that you are providing:
   *
   * - `ADD` - Add the domains to the ones that are already in the domain list.
   * - `REMOVE` - Search the domain list for the domains and remove them from the list.
   * - `REPLACE` - Update the domain list to exactly match the list that you are providing.
   *
   * @public
   */
  Operation: FirewallDomainUpdateOperation | undefined;

  /**
   * A list of domains to use in the update operation.
   *
   * > **Important:** There is a limit of 1000 domains per request.
   *
   * Each domain specification in your domain list must satisfy the following requirements:
   *
   * - It can optionally start with `*` (asterisk).
   * - With the exception of the optional starting asterisk, it must only contain the following characters: `A-Z`, `a-z`, `0-9`, `-` (hyphen).
   * - It must be from 1-255 characters in length.
   *
   * @public
   */
  Domains: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDomainsResponse {
  /**
   * The ID of the firewall domain list that DNS Firewall just updated.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the domain list.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Status of the `UpdateFirewallDomains` request.
   *
   * @public
   */
  Status?: FirewallDomainListStatus | undefined;

  /**
   * Additional information about the status of the list, if available.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleRequest {
  /**
   * The unique identifier of the firewall rule group for the rule.
   *
   * @public
   */
  FirewallRuleGroupId: string | undefined;

  /**
   * The ID of the domain list to use in the rule.
   *
   * @public
   */
  FirewallDomainListId?: string | undefined;

  /**
   * The DNS Firewall Advanced rule ID.
   *
   * @public
   */
  FirewallThreatProtectionId?: string | undefined;

  /**
   * The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
   *
   * You must specify a unique priority for each rule in a rule group. To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You can change the priority setting for the rules in a rule group at any time.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule:
   *
   * - `ALLOW` - Permit the request to go through. Not available for DNS Firewall Advanced rules.
   * - `ALERT` - Permit the request to go through but send an alert to the logs.
   * - `BLOCK` - Disallow the request. This option requires additional details in the rule's `BlockResponse`.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The way that you want DNS Firewall to block the request. Used for the rule action setting `BLOCK`.
   *
   * - `NODATA` - Respond indicating that the query was successful, but no response is available for it.
   * - `NXDOMAIN` - Respond indicating that the domain name that's in the query doesn't exist.
   * - `OVERRIDE` - Provide a custom override in the response. This option requires custom handling details in the rule's `BlockOverride*` settings.
   *
   * @public
   */
  BlockResponse?: BlockResponse | undefined;

  /**
   * The custom DNS record to send back in response to the query. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideDomain?: string | undefined;

  /**
   * The DNS record's type. This determines the format of the record value that you provided in `BlockOverrideDomain`. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideDnsType?: BlockOverrideDnsType | undefined;

  /**
   * The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  BlockOverrideTtl?: number | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * How you want the the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME or DNAME.
   *
   * `INSPECT_REDIRECTION_DOMAIN`: (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be added to the domain list.
   *
   * `TRUST_REDIRECTION_DOMAIN`: Inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the domain in the redirection list to the domain list.
   *
   * @public
   */
  FirewallDomainRedirectionAction?: FirewallDomainRedirectionAction | undefined;

  /**
   * The DNS query type you want the rule to evaluate. Allowed values are;
   *
   * - A: Returns an IPv4 address.
   * - AAAA: Returns an Ipv6 address.
   * - CAA: Restricts CAs that can create SSL/TLS certifications for the domain.
   * - CNAME: Returns another domain name.
   * - DS: Record that identifies the DNSSEC signing key of a delegated zone.
   * - MX: Specifies mail servers.
   * - NAPTR: Regular-expression-based rewriting of domain names.
   * - NS: Authoritative name servers.
   * - PTR: Maps an IP address to a domain name.
   * - SOA: Start of authority record for the zone.
   * - SPF: Lists the servers authorized to send emails from a domain.
   * - SRV: Application specific values that identify servers.
   * - TXT: Verifies email senders and application-specific values.
   * - A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be defined as TYPENUMBER, where the NUMBER can be 1-65534, for example, TYPE28. For more information, see [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types).
   *
   *   > **Note:** If you set up a firewall BLOCK rule with action NXDOMAIN on query type equals AAAA, this action will not be applied to synthetic IPv6 addresses generated when DNS64 is enabled.
   *
   * @public
   */
  Qtype?: string | undefined;

  /**
   * The type of the DNS Firewall Advanced rule. This setting is mutually exclusive with `FirewallDomainListId` and `FirewallRuleType`. Valid values are:
   *
   * - `DGA`: Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains to launch malware attacks.
   * - `DNS_TUNNELING`: DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without making a network connection to the client.
   * - `DICTIONARY_DGA`: Dictionary-based domain generation algorithms detection. Dictionary DGAs use wordlists to generate domains that appear more legitimate, making them harder to detect than traditional DGAs.
   *
   * @public
   */
  DnsThreatProtection?: DnsThreatProtection | undefined;

  /**
   * The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule. The confidence level values mean:
   *
   * - `LOW`: Provides the highest detection rate for threats, but also increases false positives.
   * - `MEDIUM`: Provides a balance between detecting threats and false positives.
   * - `HIGH`: Detects only the most well corroborated threats with a low rate of false positives.
   *
   * @public
   */
  ConfidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The rule type configuration for the firewall rule. This is a tagged union — set exactly one of its members. This setting is mutually exclusive with the top-level `FirewallDomainListId` and `DnsThreatProtection` fields. Use one of:
   *
   * - `FirewallAdvancedContentCategory` — match an Amazon Web Services-managed content category (for example, `VIOLENCE_AND_HATE_SPEECH`).
   * - `FirewallAdvancedThreatCategory` — match an Amazon Web Services-managed advanced threat category (for example, `PHISHING`).
   * - `DnsThreatProtection` — match a built-in DNS Firewall Advanced threat detector (`DGA`, `DNS_TUNNELING`, or `DICTIONARY_DGA`).
   * - `PartnerThreatProtection` — match a third-party threat feed delivered through Amazon Web Services Marketplace. The selected partner must be an active subscription on the calling account.
   *
   * To enumerate the values supported in your account, call ListFirewallRuleTypes.
   *
   * @public
   */
  FirewallRuleType?: FirewallRuleType | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleResponse {
  /**
   * The firewall rule that you just updated.
   *
   * @public
   */
  FirewallRule?: FirewallRule | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleGroupAssociationRequest {
  /**
   * The identifier of the FirewallRuleGroupAssociation.
   *
   * @public
   */
  FirewallRuleGroupAssociationId: string | undefined;

  /**
   * The setting that determines the processing order of the rule group among the rule groups that you associate with the specified VPC. DNS Firewall filters VPC traffic starting from the rule group with the lowest numeric priority setting.
   *
   * You must specify a unique priority for each rule group that you associate with a single VPC. To make it easier to insert rule groups later, leave space between the numbers, for example, use 100, 200, and so on. You can change the priority setting for a rule group association after you create it.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections.
   *
   * @public
   */
  MutationProtection?: MutationProtectionStatus | undefined;

  /**
   * The name of the rule group association.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleGroupAssociationResponse {
  /**
   * The association that you just updated.
   *
   * @public
   */
  FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation | undefined;
}

/**
 * @public
 */
export interface UpdateOutpostResolverRequest {
  /**
   * A unique string that identifies Resolver on an Outpost.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Name of the Resolver on the Outpost.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon EC2 instance count for a Resolver on the Outpost.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * Amazon EC2 instance type.
   *
   * @public
   */
  PreferredInstanceType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOutpostResolverResponse {
  /**
   * The response to an `UpdateOutpostResolver` request.
   *
   * @public
   */
  OutpostResolver?: OutpostResolver | undefined;
}

/**
 * @public
 */
export interface UpdateResolverConfigRequest {
  /**
   * The ID of the Amazon Virtual Private Cloud VPC or a Route 53 Profile that you're configuring Resolver for.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Indicates whether or not the Resolver will create autodefined rules for reverse DNS lookups. This is enabled by default. Disabling this option will also affect EC2-Classic instances using ClassicLink. For more information, see [ClassicLink](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html) in the *Amazon EC2 guide*.
   *
   * > **Important:** We are retiring EC2-Classic on August 15, 2022. We recommend that you migrate from EC2-Classic to a VPC. For more information, see [Migrate from EC2-Classic to a VPC](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html) in the *Amazon EC2 guide* and the blog [EC2-Classic Networking is Retiring – Here’s How to Prepare](http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/).
   *
   * > **Note:** It can take some time for the status change to be completed.
   *
   * @public
   */
  AutodefinedReverseFlag: AutodefinedReverseFlag | undefined;
}

/**
 * @public
 */
export interface UpdateResolverConfigResponse {
  /**
   * An array that contains settings for the specified Resolver configuration.
   *
   * @public
   */
  ResolverConfig?: ResolverConfig | undefined;
}

/**
 * @public
 */
export interface UpdateResolverDnssecConfigRequest {
  /**
   * The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The new value that you are specifying for DNSSEC validation for the VPC. The value can be `ENABLE` or `DISABLE`. Be aware that it can take time for a validation status change to be completed.
   *
   * @public
   */
  Validation: Validation | undefined;
}

/**
 * @public
 */
export interface UpdateResolverDnssecConfigResponse {
  /**
   * A complex type that contains settings for the specified DNSSEC configuration.
   *
   * @public
   */
  ResolverDNSSECConfig?: ResolverDnssecConfig | undefined;
}

/**
 * Provides information about the IP address type in response to [UpdateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html).
 *
 * @public
 */
export interface UpdateIpAddress {
  /**
   * The ID of the IP address, specified by the `ResolverEndpointId`.
   *
   * @public
   */
  IpId: string | undefined;

  /**
   * The IPv6 address that you want to use for DNS queries.
   *
   * @public
   */
  Ipv6: string | undefined;
}

/**
 * @public
 */
export interface UpdateResolverEndpointRequest {
  /**
   * The ID of the Resolver endpoint that you want to update.
   *
   * @public
   */
  ResolverEndpointId: string | undefined;

  /**
   * The name of the Resolver endpoint that you want to update.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the endpoint type for what type of IP address the endpoint uses to forward DNS queries.
   *
   * Updating to `IPV6` type isn't currently supported.
   *
   * @public
   */
  ResolverEndpointType?: ResolverEndpointType | undefined;

  /**
   * Specifies the IPv6 address when you update the Resolver endpoint from IPv4 to dual-stack. If you don't specify an IPv6 address, one will be automatically chosen from your subnet.
   *
   * @public
   */
  UpdateIpAddresses?: UpdateIpAddress[] | undefined;

  /**
   * The protocols you want to use for the endpoint. DoH-FIPS is applicable for default inbound endpoints only.
   *
   * For a default inbound endpoint you can apply the protocols as follows:
   *
   * - Do53 and DoH in combination.
   * - Do53 and DoH-FIPS in combination.
   * - Do53 alone.
   * - DoH alone.
   * - DoH-FIPS alone.
   * - None, which is treated as Do53.
   *
   * For a delegation inbound endpoint you can use Do53 only.
   *
   * For an outbound endpoint you can apply the protocols as follows:
   *
   * - Do53 and DoH in combination.
   * - Do53 alone.
   * - DoH alone.
   * - None, which is treated as Do53.
   *
   * > **Important:** You can't change the protocol of an inbound endpoint directly from only Do53 to only DoH, or DoH-FIPS. This is to prevent a sudden disruption to incoming traffic that relies on Do53. To change the protocol from Do53 to DoH, or DoH-FIPS, you must first enable both Do53 and DoH, or Do53 and DoH-FIPS, to make sure that all incoming traffic has transferred to using the DoH protocol, or DoH-FIPS, and then remove the Do53.
   *
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * Updates whether RNI enhanced metrics are enabled for the Resolver endpoints. When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published.
   *
   * > **Note:** Standard CloudWatch pricing and charges are applied for using the Route 53 Resolver endpoint RNI enhanced metrics. For more information, see [Detailed metrics](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-resolver-with-cloudwatch.html).
   *
   * @public
   */
  RniEnhancedMetricsEnabled?: boolean | undefined;

  /**
   * Updates whether target name server metrics are enabled for the outbound Resolver endpoints. When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. This setting is not supported for inbound Resolver endpoints.
   *
   * > **Note:** Standard CloudWatch pricing and charges are applied for using the Route 53 Resolver endpoint target name server metrics. For more information, see [Detailed metrics](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-resolver-with-cloudwatch.html).
   *
   * @public
   */
  TargetNameServerMetricsEnabled?: boolean | undefined;

  /**
   * Specifies whether DNS64 is enabled for the inbound Resolver endpoint. When set to `true`, Route 53 Resolver synthesizes AAAA (IPv6) records for IPv4-only services by prepending the `64:ff9b::/96` prefix to the IPv4 address. This enables IPv6-only clients that send queries through the inbound endpoint to reach IPv4-only services. DNS64 works with NAT64 to provide complete IPv6-to-IPv4 translation.
   *
   * @public
   */
  Dns64Enabled?: boolean | undefined;

  /**
   * Specifies whether IPv6 internet access is enabled for the outbound Resolver endpoint. When set to `true`, the endpoint elastic network interfaces (ENIs) can forward DNS queries to public IPv6 targets through an internet gateway.
   *
   * > **Important:** When you enable IPv6 internet access, use network controls like security groups, NACLs, or egress-only internet gateways to protect the endpoint ENIs from unsolicited ingress traffic. Be aware that some network controls can affect DNS query throughput due to connection tracking. For more information, see [Amazon EC2 security group connection tracking](https://docs.aws.amazon.com/ec2/latest/userguide/security-group-connection-tracking.html) and [Resolver endpoint scaling](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/best-practices-resolver-endpoint-scaling.html).
   *
   * @public
   */
  Ipv6InternetAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateResolverEndpointResponse {
  /**
   * The response to an `UpdateResolverEndpoint` request.
   *
   * @public
   */
  ResolverEndpoint?: ResolverEndpoint | undefined;
}

/**
 * @public
 */
export interface UpdateResolverRuleRequest {
  /**
   * The ID of the Resolver rule that you want to update.
   *
   * @public
   */
  ResolverRuleId: string | undefined;

  /**
   * The new settings for the Resolver rule.
   *
   * @public
   */
  Config: ResolverRuleConfig | undefined;
}

/**
 * @public
 */
export interface UpdateResolverRuleResponse {
  /**
   * The response to an `UpdateResolverRule` request.
   *
   * @public
   */
  ResolverRule?: ResolverRule | undefined;
}
