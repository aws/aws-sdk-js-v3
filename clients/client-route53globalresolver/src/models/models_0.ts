// smithy-typescript generated code
import {
  BlockOverrideDnsQueryType,
  ConfidenceThreshold,
  CRResourceStatus,
  DnsAdvancedProtection,
  DnsProtocol,
  DnsSecValidationType,
  EdnsClientSubnetType,
  FirewallBlockResponse,
  FirewallRuleAction,
  FirewallRulesFailOpenType,
  HostedZoneAssociationStatus,
  IpAddressType,
  ProfileResourceStatus,
  TokenStatus,
} from "./enums";

/**
 * @public
 */
export interface CreateAccessSourceInput {
  /**
   * <p>The IP address or CIDR range that is allowed to send DNS queries to the Route 53 Global Resolver.</p>
   * @public
   */
  cidr: string | undefined;

  /**
   * <p>A unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The IP address type for this access source. Valid values are IPv4 and IPv6 (if the Route 53 Global Resolver supports dual-stack).</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * <p>A descriptive name for the access source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the DNS view to associate with this access source.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS protocol that is permitted for this access source. Valid values are Do53 (DNS over port 53), DoT (DNS over TLS), and DoH (DNS over HTTPS).</p>
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * <p>Tags to associate with the access source.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAccessSourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the access source.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The IP address or CIDR range that is allowed to send DNS queries to the Route 53 Global Resolver.</p>
   * @public
   */
  cidr: string | undefined;

  /**
   * <p>The date and time when the access source was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The unique identifier for the access source.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The IP address type for this access source (IPv4 or IPv6).</p>
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * <p>The descriptive name of the access source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the DNS view associated with this access source.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS protocol that is permitted for this access source (Do53, DoT, or DoH).</p>
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * <p>The operational status of the access source.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the access source was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Information about a field that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The validation error message for the field.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessSourceInput {
  /**
   * <p>The unique identifier of the access source to delete.</p>
   * @public
   */
  accessSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessSourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted access source.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The IP address or CIDR range of the deleted access source.</p>
   * @public
   */
  cidr: string | undefined;

  /**
   * <p>The date and time when the access source was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The unique identifier of the deleted access source.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The IP address type of the deleted access source (IPv4 or IPv6).</p>
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * <p>The name of the deleted access source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the DNS view that was associated with the deleted access source.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS protocol that was permitted for the deleted access source.</p>
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * <p>The final status of the deleted access source.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the access source was last updated before deletion.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAccessSourceInput {
  /**
   * <p>The unique identifier of the access source to retrieve.</p>
   * @public
   */
  accessSourceId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessSourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the access source.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The IP range for the rule's parameters in CIDR notation.</p>
   * @public
   */
  cidr: string | undefined;

  /**
   * <p>The time and date the rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>ID for the rule.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The IP address type.</p>
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * <p>Name for the access source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>ID for the DNS view that the rule is associated to.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The protocol determines how data is transmitted to a Global Resolver instance.</p>
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * <p>Information about the status of the rule.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The time and date the access source was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessSourcesInput {
  /**
   * <p>The maximum number of results to retrieve in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Values to filter the results.</p>
   * @public
   */
  filters?: Record<string, string[]> | undefined;
}

/**
 * <p>Summary information about an access source.</p>
 * @public
 */
export interface AccessSourcesItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the access source.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The CIDR block that defines the IP address range for the access source.</p>
   * @public
   */
  cidr: string | undefined;

  /**
   * <p>The date and time when the access source was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The unique identifier of the access source.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The IP address type of the access source.</p>
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * <p>The name of the access source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the DNS view that the access source is associated with.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The protocol used by the access source.</p>
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * <p>The current status of the access source.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the access source was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessSourcesOutput {
  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array containing information about the access sources, such as the ID, CIDR etc.</p>
   * @public
   */
  accessSources: AccessSourcesItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccessSourceInput {
  /**
   * <p>The unique identifier of the access source to update.</p>
   * @public
   */
  accessSourceId: string | undefined;

  /**
   * <p>The CIDR block for the access source.</p>
   * @public
   */
  cidr?: string | undefined;

  /**
   * <p>The IP address type for the access source.</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * <p>The name of the access source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The protocol for the access source.</p>
   * @public
   */
  protocol?: DnsProtocol | undefined;
}

/**
 * @public
 */
export interface UpdateAccessSourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated access source.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The CIDR block of the updated access source.</p>
   * @public
   */
  cidr: string | undefined;

  /**
   * <p>The date and time when the access source was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The unique identifier of the updated access source.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The IP address type of the updated access source.</p>
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * <p>The name of the updated access source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the DNS view associated with the updated access source.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The protocol of the updated access source.</p>
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * <p>The current status of the updated access source.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the access source was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateAccessTokenInput {
  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same <code>clientToken</code> has the same result every time.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID of the DNS view to associate with this token.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The date and time when the token expires. Tokens can have a minimum expiration of 30 days and maximum of 365 days from creation.</p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>A descriptive name for the access token.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>An array of user-defined keys and optional values. These tags can be used for categorization and organization.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAccessTokenOutput {
  /**
   * <p>The unique identifier for the access token.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access token.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The date and time when the access token was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The ID of the DNS view associated with this access token.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The date and time when the access token expires.</p>
   * @public
   */
  expiresAt: Date | undefined;

  /**
   * <p>The name of the access token.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The operational status of the access token.</p>
   * @public
   */
  status: TokenStatus | undefined;

  /**
   * <p>The access token value. This token should be included in DoH and DoT requests for authentication. Keep this value secure as it provides access to your Route 53 Global Resolver.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessTokenInput {
  /**
   * <p>The unique identifier of the access token to delete.</p>
   * @public
   */
  accessTokenId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessTokenOutput {
  /**
   * <p>The unique identifier of the deleted access token.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The final status of the deleted access token.</p>
   * @public
   */
  status: TokenStatus | undefined;

  /**
   * <p>The date and time when the access token was deleted.</p>
   * @public
   */
  deletedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAccessTokenInput {
  /**
   * <p>ID of the token.</p>
   * @public
   */
  accessTokenId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessTokenOutput {
  /**
   * <p>ID of the token.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the token.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same <code>clientToken</code> has the same result every time.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The time and date the token was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>ID of the DNS view the token is associated to.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The token's expiration time and date.</p>
   * @public
   */
  expiresAt: Date | undefined;

  /**
   * <p>ID of the Global Resolver.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>Name of the token.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The operational status of the token.</p>
   * @public
   */
  status: TokenStatus | undefined;

  /**
   * <p>The time and date the token was created.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The value of the token.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ListAccessTokensInput {
  /**
   * <p>The maximum number of results to retrieve in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the DNS view to list the tokens for.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>Filtering parameters.</p>
   * @public
   */
  filters?: Record<string, string[]> | undefined;
}

/**
 * <p>Summary information about a token.</p>
 * @public
 */
export interface AccessTokenItem {
  /**
   * <p>The unique identifier of the token.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the token.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time when the token was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The ID of the DNS view associated with the token.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The date and time when the token expires.</p>
   * @public
   */
  expiresAt: Date | undefined;

  /**
   * <p>The ID of the global resolver associated with the token.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The name of the token.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the token.</p>
   * @public
   */
  status: TokenStatus | undefined;

  /**
   * <p>The date and time when the token was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessTokensOutput {
  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of the tokens.</p>
   * @public
   */
  accessTokens?: AccessTokenItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccessTokenInput {
  /**
   * <p>The ID of the token.</p>
   * @public
   */
  accessTokenId: string | undefined;

  /**
   * <p>The new name of the token.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessTokenOutput {
  /**
   * <p>The ID of the token.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the token.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface AssociateHostedZoneInput {
  /**
   * <p>The ID of the Route 53 private hosted zone to associate with the Route 53 Global Resolver resource.</p>
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) of the Route 53 Global Resolver the private hosted zone will be associated to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Name for the private hosted zone association.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface AssociateHostedZoneOutput {
  /**
   * <p>ID of the association.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) of the Route 53 Global Resolver the private hosted zone is associated to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>ID of the private hosted zone.</p>
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * <p>Name of the hosted zone (also the domain associated with the hosted zone).</p>
   * @public
   */
  hostedZoneName: string | undefined;

  /**
   * <p>Name for the private hosted zone association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The date and time the private hosted zone association was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the private hosted zone association was modified.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Aggregate status for all the AWS Regions in which the Route 53 Global Resolver exists.</p>
   * @public
   */
  status: HostedZoneAssociationStatus | undefined;
}

/**
 * <p>Information about a DNS Firewall rule to create in a batch operation.</p>
 * @public
 */
export interface BatchCreateFirewallRuleInputItem {
  /**
   * <p>The action to take when a DNS query matches the firewall rule.</p>
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record type for the custom response when the action is BLOCK.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom domain name for the BLOCK response.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The TTL value for the custom response when the action is BLOCK.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The type of block response to return when the action is BLOCK.</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>A unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>The confidence threshold for advanced threat detection.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>A description of the firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether to enable advanced DNS threat protection for the firewall rule.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The ID of the firewall domain list to associate with the rule.</p>
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * <p>A name for the firewall rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The priority of the firewall rule.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The ID of the DNS view to associate the firewall rule with.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS query type that the firewall rule should match.</p>
   * @public
   */
  qType?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateFirewallRuleInput {
  /**
   * <p>The <code>BatchCreateFirewallRuleInputItem</code> objects contain the information for each Firewall rule.</p>
   * @public
   */
  firewallRules: BatchCreateFirewallRuleInputItem[] | undefined;
}

/**
 * <p>The result of creating a firewall rule in a batch operation.</p>
 * @public
 */
export interface BatchCreateFirewallRuleResult {
  /**
   * <p>The action configured for the created firewall rule.</p>
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record type configured for the created firewall rule's custom response.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom domain name configured for the created firewall rule's BLOCK response.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The TTL value configured for the created firewall rule's custom response.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The type of block response configured for the created firewall rule.</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>The unique string that identified the request and ensured idempotency.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>The confidence threshold configured for the created firewall rule's advanced threat detection.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>The date and time when the firewall rule was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The description of the created firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether advanced DNS threat protection is enabled for the created firewall rule.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The ID of the firewall domain list associated with the created firewall rule.</p>
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * <p>The unique identifier of the created firewall rule.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the managed domain list associated with the created firewall rule.</p>
   * @public
   */
  managedDomainListName?: string | undefined;

  /**
   * <p>The name of the created firewall rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The priority of the created firewall rule.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The ID of the DNS view associated with the created firewall rule.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS query type that the created firewall rule matches.</p>
   * @public
   */
  queryType?: string | undefined;

  /**
   * <p>The current status of the created firewall rule.</p>
   * @public
   */
  status?: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the firewall rule was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Information about the result of creating a DNS Firewall rule in a batch operation.</p>
 * @public
 */
export interface BatchCreateFirewallRuleOutputItem {
  /**
   * <p>The firewall rule that was created in the batch operation.</p>
   * @public
   */
  firewallRule: BatchCreateFirewallRuleResult | undefined;

  /**
   * <p>The HTTP response code for the batch operation result.</p>
   * @public
   */
  code: number | undefined;

  /**
   * <p>A message describing the result of the batch operation, including error details if applicable.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateFirewallRuleOutput {
  /**
   * <p>High level information about the DNS Firewall rules that failed to create.</p>
   * @public
   */
  failures: BatchCreateFirewallRuleOutputItem[] | undefined;

  /**
   * <p>High level information about the DNS Firewall rules that were created.</p>
   * @public
   */
  successes: BatchCreateFirewallRuleOutputItem[] | undefined;
}

/**
 * <p>Information about a DNS Firewall rule to delete in a batch operation.</p>
 * @public
 */
export interface BatchDeleteFirewallRuleInputItem {
  /**
   * <p>The ID of the DNS Firewall rule to delete.</p>
   * @public
   */
  firewallRuleId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteFirewallRuleInput {
  /**
   * <p>An array of the DNS Firewall IDs to be deleted.</p>
   * @public
   */
  firewallRules: BatchDeleteFirewallRuleInputItem[] | undefined;
}

/**
 * <p>Information about a firewall rule that was deleted in a batch operation.</p>
 * @public
 */
export interface BatchDeleteFirewallRuleResult {
  /**
   * <p>The unique string that identified the request and ensured idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the deleted firewall rule.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the deleted firewall rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The final status of the deleted firewall rule.</p>
   * @public
   */
  status?: CRResourceStatus | undefined;
}

/**
 * <p>The result of deleting a firewall rule in a batch operation.</p>
 * @public
 */
export interface BatchDeleteFirewallRuleOutputItem {
  /**
   * <p>The firewall rule that was deleted in the batch operation.</p>
   * @public
   */
  firewallRule: BatchDeleteFirewallRuleResult | undefined;

  /**
   * <p>The response code for the delete operation.</p>
   * @public
   */
  code: number | undefined;

  /**
   * <p>The response message for the delete operation.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteFirewallRuleOutput {
  /**
   * <p>High level information about the DNS Firewall rules that failed to delete.</p>
   * @public
   */
  failures: BatchDeleteFirewallRuleOutputItem[] | undefined;

  /**
   * <p>High level information about the DNS Firewall rules that were deleted successfully.</p>
   * @public
   */
  successes: BatchDeleteFirewallRuleOutputItem[] | undefined;
}

/**
 * <p>Information for updating a firewall rule in a batch operation.</p>
 * @public
 */
export interface BatchUpdateFirewallRuleInputItem {
  /**
   * <p>The action to take when a DNS query matches the firewall rule.</p>
   * @public
   */
  action?: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record type for the custom response when the action is BLOCK.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom domain name for the BLOCK response.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The TTL value for the custom response when the action is BLOCK.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The type of block response to return when the action is BLOCK.</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>The confidence threshold for advanced threat detection.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>A description of the firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether to enable advanced DNS threat protection for the firewall rule.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The unique identifier of the firewall rule to update.</p>
   * @public
   */
  firewallRuleId: string | undefined;

  /**
   * <p>A name for the firewall rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The priority of the firewall rule.</p>
   * @public
   */
  priority?: number | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFirewallRuleInput {
  /**
   * <p>The DNS Firewall rule IDs to be updated.</p>
   * @public
   */
  firewallRules: BatchUpdateFirewallRuleInputItem[] | undefined;
}

/**
 * <p>Information about a firewall rule that was updated in a batch operation.</p>
 * @public
 */
export interface BatchUpdateFirewallRuleResult {
  /**
   * <p>The action configured for the updated firewall rule.</p>
   * @public
   */
  action?: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record type configured for the updated firewall rule's custom response.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom domain name configured for the updated firewall rule's BLOCK response.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The TTL value configured for the updated firewall rule's custom response.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The type of block response configured for the updated firewall rule.</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>The unique string that identified the request and ensured idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The confidence threshold configured for the updated firewall rule's advanced threat detection.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>The date and time when the firewall rule was originally created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The description of the updated firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether advanced DNS threat protection is enabled for the updated firewall rule.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The ID of the firewall domain list associated with the updated firewall rule.</p>
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * <p>The unique identifier of the updated firewall rule.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the updated firewall rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The priority of the updated firewall rule.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The ID of the DNS view associated with the updated firewall rule.</p>
   * @public
   */
  dnsViewId?: string | undefined;

  /**
   * <p>The DNS query type that the updated firewall rule matches.</p>
   * @public
   */
  queryType?: string | undefined;

  /**
   * <p>The current status of the updated firewall rule.</p>
   * @public
   */
  status?: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the firewall rule was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>The result of updating a firewall rule in a batch operation.</p>
 * @public
 */
export interface BatchUpdateFirewallRuleOutputItem {
  /**
   * <p>The firewall rule that was updated in the batch operation.</p>
   * @public
   */
  firewallRule: BatchUpdateFirewallRuleResult | undefined;

  /**
   * <p>The response code for the update operation.</p>
   * @public
   */
  code: number | undefined;

  /**
   * <p>The response message for the update operation.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFirewallRuleOutput {
  /**
   * <p>High level information about the DNS Firewall rules that failed to update.</p>
   * @public
   */
  failures: BatchUpdateFirewallRuleOutputItem[] | undefined;

  /**
   * <p>High level information about the DNS Firewall rules that were successfully updated.</p>
   * @public
   */
  successes: BatchUpdateFirewallRuleOutputItem[] | undefined;
}

/**
 * @public
 */
export interface CreateDNSViewInput {
  /**
   * <p>The ID of the Route 53 Global Resolver to associate with this DNS view.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>A unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A descriptive name for the DNS view.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Whether to enable DNSSEC validation for DNS queries in this DNS view. When enabled, the resolver verifies the authenticity and integrity of DNS responses from public name servers for DNSSEC-signed domains.</p>
   * @public
   */
  dnssecValidation?: DnsSecValidationType | undefined;

  /**
   * <p>Whether to enable EDNS Client Subnet injection for DNS queries in this DNS view. When enabled, client subnet information is forwarded to provide more accurate geographic-based DNS responses.</p>
   * @public
   */
  ednsClientSubnet?: EdnsClientSubnetType | undefined;

  /**
   * <p>Determines the behavior when Route 53 Global Resolver cannot apply DNS firewall rules due to service impairment. When enabled, DNS queries are allowed through; when disabled, queries are blocked.</p>
   * @public
   */
  firewallRulesFailOpen?: FirewallRulesFailOpenType | undefined;

  /**
   * <p>An optional description for the DNS view.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Tags to associate with the DNS view.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDNSViewOutput {
  /**
   * <p>The unique identifier for the DNS view.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DNS view.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Whether DNSSEC validation is enabled for DNS queries in this DNS view.</p>
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * <p>Whether EDNS Client Subnet injection is enabled for DNS queries in this DNS view.</p>
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * <p>The behavior when Route 53 Global Resolver cannot apply DNS firewall rules due to service impairment.</p>
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * <p>The descriptive name of the DNS view.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the DNS view.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the Route 53 Global Resolver instance the DNS view is created for.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The date and time when the DNS view was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the DNS view was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The operational status of the DNS view.</p>
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface CreateFirewallDomainListInput {
  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same <code>clientToken</code> has the same result every time.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID of the Route 53 Global Resolver that the domain list will be associated with.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>An optional description for the firewall domain list.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A descriptive name for the firewall domain list.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An array of user-defined keys and optional values. These tags can be used for categorization and organization.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFirewallDomainListOutput {
  /**
   * <p>An Amazon Resource Name (ARN) for the domain list.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the Route 53 Global Resolver that the domain list is associated with.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The time and date the domain list was created on.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Description for the domain list.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Number of domains in the domain list.</p>
   * @public
   */
  domainCount: number | undefined;

  /**
   * <p>ID of the domain list.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Name of the domain list.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Creation status of the domain list.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The time and date the domain list was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleInput {
  /**
   * <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list:</p> <ul> <li> <p> <code>ALLOW</code> - Permit the request to go through.</p> </li> <li> <p> <code>ALERT</code> - Permit the request and send metrics and logs to CloudWatch.</p> </li> <li> <p> <code>BLOCK</code> - Disallow the request. This option requires additional details in the rule's <code>BlockResponse</code>.</p> </li> </ul>
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p> <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p> <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p> <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The response to return when the action is BLOCK. Valid values are NXDOMAIN (domain does not exist), NODATA (domain exists but no records), or OVERRIDE (return custom response).</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same <code>clientToken</code> has the same result every time.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The confidence threshold for advanced threat detection. Valid values are HIGH, MEDIUM, or LOW, indicating the accuracy level required for threat detection.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>An optional description for the firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether to enable advanced DNS threat protection for this rule. Advanced protection can detect and block DNS tunneling and Domain Generation Algorithm (DGA) threats.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The ID of the firewall domain list to use in this rule.</p>
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * <p>A descriptive name for the firewall rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The priority of this rule. Rules are evaluated in priority order, with lower numbers having higher priority. When a DNS query matches multiple rules, the rule with the highest priority (lowest number) is applied.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The ID of the DNS view to associate with this firewall rule.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS query type to match for this rule. Examples include A (IPv4 address), AAAA (IPv6 address), MX (mail exchange), or TXT (text record).</p>
   * @public
   */
  qType?: string | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleOutput {
  /**
   * <p>The action that DNS Firewall takes on DNS queries that match this rule.</p>
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record type for the custom response when blockResponse is OVERRIDE.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom domain to return when the action is BLOCK and blockResponse is OVERRIDE.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The time-to-live (TTL) value for the custom response when blockResponse is OVERRIDE.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The response to return when the action is BLOCK.</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>The confidence threshold for advanced threat detection.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>The date and time when the firewall rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The description of the firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether advanced DNS threat protection is enabled for this rule.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The ID of the firewall domain list used in this rule.</p>
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * <p>The unique identifier for the firewall rule.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the firewall rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The priority of the firewall rule.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The ID of the DNS view associated with this firewall rule.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS query type that this rule matches.</p>
   * @public
   */
  queryType?: string | undefined;

  /**
   * <p>The operational status of the firewall rule.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the firewall rule was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateGlobalResolverInput {
  /**
   * <p>A unique string that identifies the request and ensures idempotency. If you make multiple requests with the same client token, only one Route 53 Global Resolver is created.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An optional description for the Route 53 Global Resolver instance. Maximum length of 1024 characters.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A descriptive name for the Route 53 Global Resolver instance. Maximum length of 64 characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The AWS region where query resolution logs and metrics will be aggregated and delivered. If not specified, logging is not enabled.</p>
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * <p>List of AWS regions where the Route 53 Global Resolver will operate. The resolver will be distributed across these regions to provide global availability and low-latency DNS resolution.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>Tags to associate with the Route 53 Global Resolver. Tags are key-value pairs that help you organize and identify your resources.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGlobalResolverOutput {
  /**
   * <p>The unique identifier for the Route 53 Global Resolver.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Route 53 Global Resolver.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>The date and time when the Route 53 Global Resolver was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The description of the Route 53 Global Resolver.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The hostname that DNS clients should use for TLS certificate validation when connecting to the Route 53 Global Resolver. This value resolves to the global anycast IP addresses for the resolver.</p>
   * @public
   */
  dnsName: string | undefined;

  /**
   * <p>The global anycast IPv4 addresses associated with the Route 53 Global Resolver. DNS clients can send queries to these addresses from anywhere on the internet.</p>
   * @public
   */
  ipv4Addresses: string[] | undefined;

  /**
   * <p>The name of the Route 53 Global Resolver.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The AWS Region where observability data for the Route 53 Global Resolver is stored.</p>
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * <p>The AWS Regions where the Route 53 Global Resolver is deployed and operational.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The current status of the Route 53 Global Resolver. Possible values are CREATING (being provisioned), UPDATING (being modified), OPERATIONAL (ready to serve queries), or DELETING (being removed).</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the Route 53 Global Resolver was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDNSViewInput {
  /**
   * <p>The unique identifier of the DNS view to delete.</p>
   * @public
   */
  dnsViewId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDNSViewOutput {
  /**
   * <p>The unique identifier of the deleted DNS view.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted DNS view.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Whether DNSSEC validation was enabled for the deleted DNS view.</p>
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * <p>Whether EDNS Client Subnet injection was enabled for the deleted DNS view.</p>
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * <p>The firewall rules fail-open behavior that was configured for the deleted DNS view.</p>
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * <p>The name of the deleted DNS view.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the deleted DNS view.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the Route 53 Global Resolver that the deleted DNS view was associated with.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The date and time when the DNS view was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the DNS view was last updated before deletion.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The final status of the deleted DNS view.</p>
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallDomainListInput {
  /**
   * <p>The unique identifier of the firewall domain list to delete.</p>
   * @public
   */
  firewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallDomainListOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted firewall domain list.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the deleted firewall domain list.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the deleted firewall domain list.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The final status of the deleted firewall domain list.</p>
   * @public
   */
  status: CRResourceStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleInput {
  /**
   * <p>The unique identifier of the firewall rule to delete.</p>
   * @public
   */
  firewallRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleOutput {
  /**
   * <p>The action that was configured for the deleted firewall rule.</p>
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record type that was configured for the deleted firewall rule's custom response.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom domain that was configured for the deleted firewall rule's BLOCK response.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The TTL value that was configured for the deleted firewall rule's custom response.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The block response type that was configured for the deleted firewall rule.</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>The confidence threshold that was configured for the deleted firewall rule's advanced threat detection.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>The date and time when the firewall rule was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The description of the deleted firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether advanced DNS threat protection was enabled for the deleted firewall rule.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The ID of the firewall domain list that was associated with the deleted firewall rule.</p>
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * <p>The unique identifier of the deleted firewall rule.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the deleted firewall rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The priority that was configured for the deleted firewall rule.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The ID of the DNS view that was associated with the deleted firewall rule.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS query type that the deleted firewall rule was configured to match.</p>
   * @public
   */
  queryType?: string | undefined;

  /**
   * <p>The final status of the deleted firewall rule.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the firewall rule was last updated before deletion.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalResolverInput {
  /**
   * <p>The unique identifier of the Route 53 Global Resolver to delete.</p>
   * @public
   */
  globalResolverId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalResolverOutput {
  /**
   * <p>The unique identifier of the deleted Route 53 Global Resolver.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted Route 53 Global Resolver.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>The hostname that DNS clients used for TLS certificate validation when connecting to the deleted Route 53 Global Resolver.</p>
   * @public
   */
  dnsName: string | undefined;

  /**
   * <p>The AWS Region where observability data for the deleted Route 53 Global Resolver was stored.</p>
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * <p>The name of the deleted Route 53 Global Resolver.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the deleted Route 53 Global Resolver.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The AWS Regions where the deleted Route 53 Global Resolver was deployed and operational.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The date and time when the Route 53 Global Resolver was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the Route 53 Global Resolver was last updated before deletion.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The final status of the deleted Route 53 Global Resolver.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The global anycast IPv4 addresses that were associated with the deleted Route 53 Global Resolver.</p>
   * @public
   */
  ipv4Addresses: string[] | undefined;
}

/**
 * @public
 */
export interface DisableDNSViewInput {
  /**
   * <p>The unique identifier of the DNS view to disable.</p>
   * @public
   */
  dnsViewId: string | undefined;
}

/**
 * @public
 */
export interface DisableDNSViewOutput {
  /**
   * <p>The unique identifier of the disabled DNS view.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the disabled DNS view.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Whether DNSSEC validation is enabled for the disabled DNS view.</p>
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * <p>Whether EDNS Client Subnet injection is enabled for the disabled DNS view.</p>
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * <p>The firewall rules fail-open behavior configured for the disabled DNS view.</p>
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * <p>The name of the disabled DNS view.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the disabled DNS view.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the Route 53 Global Resolver that the disabled DNS view is associated with.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The date and time when the DNS view was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the DNS view was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the disabled DNS view.</p>
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateHostedZoneInput {
  /**
   * <p>The ID of the Route 53 private hosted zone to disassociate.</p>
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Route 53 Global Resolver resource to disassociate the hosted zone from.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateHostedZoneOutput {
  /**
   * <p>The unique identifier of the disassociation.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Route 53 Global Resolver resource that the hosted zone was disassociated from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The ID of the Route 53 private hosted zone that was disassociated.</p>
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * <p>The name of the Route 53 private hosted zone that was disassociated.</p>
   * @public
   */
  hostedZoneName: string | undefined;

  /**
   * <p>The name of the association that was removed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The date and time when the association was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the association was last updated before disassociation.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The final status of the disassociation.</p>
   * @public
   */
  status: HostedZoneAssociationStatus | undefined;
}

/**
 * @public
 */
export interface EnableDNSViewInput {
  /**
   * <p>The unique identifier of the DNS view to enable.</p>
   * @public
   */
  dnsViewId: string | undefined;
}

/**
 * @public
 */
export interface EnableDNSViewOutput {
  /**
   * <p>The unique identifier of the enabled DNS view.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the enabled DNS view.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Whether DNSSEC validation is enabled for the enabled DNS view.</p>
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * <p>Whether EDNS Client Subnet injection is enabled for the enabled DNS view.</p>
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * <p>The firewall rules fail-open behavior configured for the enabled DNS view.</p>
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * <p>The name of the enabled DNS view.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the enabled DNS view.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the Route 53 Global Resolver that the enabled DNS view is associated with.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The date and time when the DNS view was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the DNS view was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the enabled DNS view.</p>
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface GetDNSViewInput {
  /**
   * <p>The ID of the DNS view to retrieve information about.</p>
   * @public
   */
  dnsViewId: string | undefined;
}

/**
 * @public
 */
export interface GetDNSViewOutput {
  /**
   * <p>ID of the DNS view.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the DNS view.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same <code>clientToken</code> has the same result every time.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies whether DNSSEC is enabled or disabled for the DNS view.</p>
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * <p>Specifies whether edns0 client subnet is enabled.</p>
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * <p>Specifies the DNS Firewall failure mode configuration. When enabled, the DNS Firewall allows DNS queries to proceed if it's unable to properly evaluate them. When disabled, the DNS Firewall blocks DNS queries it's unable to evaluate.</p>
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * <p>Name of the DNS view.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Description of the DNS view.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>ID of the Global Resolver the DNS view is associated to.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The time and date the DNS view was creates on.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time and date the DNS view was updated on.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Operational status of the DNS view.</p>
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface ListDNSViewsInput {
  /**
   * <p>The maximum number of results to retrieve in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Global Resolver ID.</p>
   * @public
   */
  globalResolverId: string | undefined;
}

/**
 * <p>Summary information about a DNS view.</p>
 * @public
 */
export interface DNSViewSummary {
  /**
   * <p>The unique identifier of the DNS view.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DNS view.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>Whether DNSSEC validation is enabled for the DNS view.</p>
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * <p>Whether EDNS Client Subnet injection is enabled for the DNS view.</p>
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * <p>Whether firewall rules fail open when they cannot be evaluated.</p>
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * <p>The name of the DNS view.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the DNS view.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the global resolver that the DNS view is associated with.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The date and time when the DNS view was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the DNS view was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the DNS view.</p>
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface ListDNSViewsOutput {
  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of information about the DNS views, such as whether DNSSEC is enabled, creation time, etc.</p>
   * @public
   */
  dnsViews: DNSViewSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateDNSViewInput {
  /**
   * <p>The unique identifier of the DNS view to update.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The name of the DNS view.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the DNS view.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether to enable DNSSEC validation for the DNS view.</p>
   * @public
   */
  dnssecValidation?: DnsSecValidationType | undefined;

  /**
   * <p>Whether to enable EDNS Client Subnet injection for the DNS view.</p>
   * @public
   */
  ednsClientSubnet?: EdnsClientSubnetType | undefined;

  /**
   * <p>Whether firewall rules should fail open when they cannot be evaluated.</p>
   * @public
   */
  firewallRulesFailOpen?: FirewallRulesFailOpenType | undefined;
}

/**
 * @public
 */
export interface UpdateDNSViewOutput {
  /**
   * <p>The unique identifier of the updated DNS view.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated DNS view.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Whether DNSSEC validation is enabled for the updated DNS view.</p>
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * <p>Whether EDNS Client Subnet injection is enabled for the updated DNS view.</p>
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * <p>Whether firewall rules fail open when they cannot be evaluated for the updated DNS view.</p>
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * <p>The name of the updated DNS view.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the updated DNS view.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the global resolver associated with the updated DNS view.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The date and time when the DNS view was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the DNS view was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the updated DNS view.</p>
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface GetFirewallDomainListInput {
  /**
   * <p>ID of the domain list.</p>
   * @public
   */
  firewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallDomainListOutput {
  /**
   * <p>Amazon Resource Name (ARN) of the domain list.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>ID of the Global Resolver that the domain list is associated to.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same <code>clientToken</code> has the same result every time.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The time and date the domain list was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The description of the domain list.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Number of domains in the domain list.</p>
   * @public
   */
  domainCount: number | undefined;

  /**
   * <p>ID of the domain list.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Name of the domain list.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Operational status of the domain list.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>Additional information about the status of the domain list.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The date and time the domain list was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ImportFirewallDomainsInput {
  /**
   * <p>The fully qualified URL of the file in Amazon S3 that contains the list of domains to import. The file should contain one domain per line.</p>
   * @public
   */
  domainFileUrl: string | undefined;

  /**
   * <p>ID of the DNS Firewall domain list that you want to import the domain list to.</p>
   * @public
   */
  firewallDomainListId: string | undefined;

  /**
   * <p>This value is <code>REPLACE</code>, and it updates the domain list to match the list of domains in the imported file.</p>
   * @public
   */
  operation: string | undefined;
}

/**
 * @public
 */
export interface ImportFirewallDomainsOutput {
  /**
   * <p>ID of the DNS Firewall domain list that you imported the domain list to.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Name of the DNS Firewall domain list.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Operational status of the DNS Firewall domain list.</p>
   * @public
   */
  status: CRResourceStatus | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainListsInput {
  /**
   * <p>The maximum number of results to retrieve in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the Global Resolver that contains the DNS view the domain lists are associated to.</p>
   * @public
   */
  globalResolverId?: string | undefined;
}

/**
 * <p>Summary information about a firewall domain list.</p>
 * @public
 */
export interface FirewallDomainListsItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the firewall domain list.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the global resolver that the firewall domain list is associated with.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The date and time when the firewall domain list was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>A description of the firewall domain list.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the firewall domain list.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the firewall domain list.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current status of the firewall domain list.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the firewall domain list was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainListsOutput {
  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of the DNS Firewall domain lists.</p>
   * @public
   */
  firewallDomainLists: FirewallDomainListsItem[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainsInput {
  /**
   * <p>The maximum number of results to retrieve in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>ID of the DNS Firewall domain list.</p>
   * @public
   */
  firewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainsOutput {
  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of domains in the specified domain list.</p>
   * @public
   */
  domains: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDomainsInput {
  /**
   * <p>A list of the domains. You can add up to 1000 domains per request.</p>
   * @public
   */
  domains: string[] | undefined;

  /**
   * <p>The ID of the DNS Firewall domain list to which you want to add the domains.</p>
   * @public
   */
  firewallDomainListId: string | undefined;

  /**
   * <p>The operation for updating the domain list. The allowed values are ADD, REMOVE, and REPLACE.</p>
   * @public
   */
  operation: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDomainsOutput {
  /**
   * <p>The ID of the DNS Firewall domain list.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the domain list.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The operational status of the domain list.</p>
   * @public
   */
  status: CRResourceStatus | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleInput {
  /**
   * <p>ID of the DNS Firewall rule.</p>
   * @public
   */
  firewallRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleOutput {
  /**
   * <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule.</p>
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The way that you want DNS Firewall to block the request. Used for the rule action setting <code>BLOCK</code>.</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>The time and date the DNS Firewall rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The description of the DNS Firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the DNS Firewall Advanced rule. Valid values are DGA and DNS_TUNNELING.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The ID of a DNS Firewall domain list.</p>
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * <p>ID of the DNS Firewall rule.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the DNS Firewall rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The DNS view ID the DNS Firewall is associated with.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS query type you want the rule to evaluate.</p>
   * @public
   */
  queryType?: string | undefined;

  /**
   * <p>The operational status of the DNS Firewall rule.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The date and time the DNS Firewall rule was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListFirewallRulesInput {
  /**
   * <p>The maximum number of results to retrieve in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>ID of the DNS view.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>Values to filter the results.</p>
   * @public
   */
  filters?: Record<string, string[]> | undefined;
}

/**
 * <p>Summary information about a firewall rule.</p>
 * @public
 */
export interface FirewallRulesItem {
  /**
   * <p>The action configured for the firewall rule.</p>
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record type configured for the firewall rule's custom response.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom domain name configured for the firewall rule's BLOCK response.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The TTL value configured for the firewall rule's custom response.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The type of block response configured for the firewall rule.</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>The confidence threshold configured for the firewall rule's advanced threat detection.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>The date and time when the firewall rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The description of the firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether advanced DNS threat protection is enabled for the firewall rule.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The ID of the firewall domain list associated with the firewall rule.</p>
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * <p>The unique identifier of the firewall rule.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the firewall rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The priority of the firewall rule.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The ID of the DNS view associated with the firewall rule.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS query type that the firewall rule matches.</p>
   * @public
   */
  queryType?: string | undefined;

  /**
   * <p>The current status of the firewall rule.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The date and time when the firewall rule was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListFirewallRulesOutput {
  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of the firewall rules and information about them.</p>
   * @public
   */
  firewallRules: FirewallRulesItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleInput {
  /**
   * <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule.</p>
   * @public
   */
  action?: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The way that you want DNS Firewall to block the request. Used for the rule action setting <code>BLOCK</code>.</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same <code>clientToken</code> has the same result every time.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>The description for the Firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the DNS Firewall Advanced rule. Valid values are DGA and DNS_TUNNELING.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The ID of the DNS Firewall rule.</p>
   * @public
   */
  firewallRuleId: string | undefined;

  /**
   * <p>The name of the DNS Firewall rule.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   * @public
   */
  priority?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleOutput {
  /**
   * <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule.</p>
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * <p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * <p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * <p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p>
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * <p>The way that you want DNS Firewall to block the request. Used for the rule action setting <code>BLOCK</code>.</p>
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * <p>The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule.</p>
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * <p>The time and date the Firewall rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The description of the Firewall rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the DNS Firewall Advanced rule. Valid values are DGA and DNS_TUNNELING.</p>
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * <p>The ID of the domain list associated with the Firewall rule.</p>
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * <p>The ID of the Firewall rule.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the Firewall rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The ID of the DNS view the Firewall rule is associated with.</p>
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * <p>The DNS query type you want the rule to evaluate.</p>
   * @public
   */
  queryType?: string | undefined;

  /**
   * <p>The operational status of the firewall rule.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The time and date the rule was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetGlobalResolverInput {
  /**
   * <p>The ID of the Route 53 Global Resolver to retrieve information about.</p>
   * @public
   */
  globalResolverId: string | undefined;
}

/**
 * @public
 */
export interface GetGlobalResolverOutput {
  /**
   * <p>The ID of the Global Resolver.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Global Resolver.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same <code>clientToken</code> has the same result every time.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>The hostname used by the customers' DNS clients for certification validation.</p>
   * @public
   */
  dnsName: string | undefined;

  /**
   * <p>The AWS Regions in which the users' Global Resolver query resolution logs will be propagated.</p>
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * <p>The name of the Global Resolver.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Global Resolver.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The AWS Regions in which the Global Resolver operate.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The date and time the Global Resolver was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the Global Resolver was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The operational status of the Global Resolver.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>List of anycast IPv4 addresses associated with the Global Resolver instance.</p>
   * @public
   */
  ipv4Addresses: string[] | undefined;
}

/**
 * @public
 */
export interface ListGlobalResolversInput {
  /**
   * <p>The maximum number of Route 53 Global Resolver instances to return in the response. Valid range is 1-100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. This value is returned in the response if there are more results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a global resolver.</p>
 * @public
 */
export interface GlobalResolversItem {
  /**
   * <p>The unique identifier of the global resolver.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the global resolver.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique string that identifies the request and ensures idempotency.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>The DNS name of the global resolver.</p>
   * @public
   */
  dnsName: string | undefined;

  /**
   * <p>The AWS Region where observability data is collected for the global resolver.</p>
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * <p>The name of the global resolver.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the global resolver.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The AWS Regions where the global resolver is deployed.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The date and time when the global resolver was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the global resolver was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the global resolver.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>The IPv4 addresses assigned to the global resolver.</p>
   * @public
   */
  ipv4Addresses: string[] | undefined;
}

/**
 * @public
 */
export interface ListGlobalResolversOutput {
  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Paginated list of Global Resolvers.</p>
   * @public
   */
  globalResolvers: GlobalResolversItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalResolverInput {
  /**
   * <p>The ID of the Global Resolver.</p>
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * <p>The name of the Global Resolver.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The AWS Regions in which the users' Global Resolver query resolution logs will be propagated.</p>
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * <p>The description of the Global Resolver.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalResolverOutput {
  /**
   * <p>The ID of the Global Resolver.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Global Resolver.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same <code>clientToken</code> has the same result every time.</p>
   * @public
   */
  clientToken: string | undefined;

  /**
   * <p>The hostname to be used by the customers' DNS clients for certification validation.</p>
   * @public
   */
  dnsName: string | undefined;

  /**
   * <p>The AWS Regions in which the users' Global Resolver query resolution logs will be propagated.</p>
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * <p>Name of the Global Resolver.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Description of the Global Resolver.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The AWS Regions in which the Global Resolver will operate.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The time and date the Global Resolverwas created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time and date the Global Resolver was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The operational status of the Global Resolver.</p>
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * <p>List of anycast IPv4 addresses associated with the Global Resolver instance.</p>
   * @public
   */
  ipv4Addresses: string[] | undefined;
}

/**
 * @public
 */
export interface GetHostedZoneAssociationInput {
  /**
   * <p>ID of the private hosted zone association.</p>
   * @public
   */
  hostedZoneAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetHostedZoneAssociationOutput {
  /**
   * <p>ID of the private hosted zone association.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the DNS view the private hosted zone is associated to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>ID of the hosted zone associated to the DNS view.</p>
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * <p>Name of the domain associated with the private hosted zone.</p>
   * @public
   */
  hostedZoneName: string | undefined;

  /**
   * <p>Name of the private hosted zone association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The time and date the private hosted zone association was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time and date the private hosted zone association was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The operational status of the private hosted zone association.</p>
   * @public
   */
  status: HostedZoneAssociationStatus | undefined;
}

/**
 * @public
 */
export interface ListHostedZoneAssociationsInput {
  /**
   * <p>The maximum number of results to retrieve in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the DNS view.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>Summary information about a hosted zone association.</p>
 * @public
 */
export interface HostedZoneAssociationSummary {
  /**
   * <p>The unique identifier of the hosted zone association.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource associated with the hosted zone.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The ID of the hosted zone.</p>
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * <p>The name of the hosted zone.</p>
   * @public
   */
  hostedZoneName: string | undefined;

  /**
   * <p>The name of the hosted zone association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The date and time when the hosted zone association was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the hosted zone association was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the hosted zone association.</p>
   * @public
   */
  status: HostedZoneAssociationStatus | undefined;
}

/**
 * @public
 */
export interface ListHostedZoneAssociationsOutput {
  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of the private hosted zone associations.</p>
   * @public
   */
  hostedZoneAssociations: HostedZoneAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateHostedZoneAssociationInput {
  /**
   * <p>The ID of the private hosted zone association.</p>
   * @public
   */
  hostedZoneAssociationId: string | undefined;

  /**
   * <p>The name you want to update the hosted zone association to.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHostedZoneAssociationOutput {
  /**
   * <p>The ID of the private hosted zone association.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private hosted zone association.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The ID of the private hosted zone.</p>
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * <p>The name of the domain associated with the private hosted zone.</p>
   * @public
   */
  hostedZoneName: string | undefined;

  /**
   * <p>The name of the private hosted zone association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The time and date the private hosted zone association was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time and date the private hosted zone association was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The operational status of the private hosted zone association.</p>
   * @public
   */
  status: HostedZoneAssociationStatus | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An array of user-defined keys and optional values. These tags can be used for categorization and organization.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetManagedFirewallDomainListInput {
  /**
   * <p>ID of the Managed Domain List.</p>
   * @public
   */
  managedFirewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface GetManagedFirewallDomainListOutput {
  /**
   * <p>Description of the Managed Domain List.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>ID of the Managed Domain List.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Name of the Managed Domain List.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Type of the managed category. This is either <code>THREAT</code> or <code>CONTENT</code>.</p>
   * @public
   */
  managedListType: string | undefined;
}

/**
 * @public
 */
export interface ListManagedFirewallDomainListsInput {
  /**
   * <p>The maximum number of results to retrieve in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The category of the Manage DNS list either <code>THREAT</code> or <code>CONTENT</code>.</p>
   * @public
   */
  managedFirewallDomainListType: string | undefined;
}

/**
 * <p>Summary information about a managed firewall domain list.</p>
 * @public
 */
export interface ManagedFirewallDomainListsItem {
  /**
   * <p>A description of the managed firewall domain list.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the managed firewall domain list.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the managed firewall domain list.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the managed firewall domain list.</p>
   * @public
   */
  managedListType: string | undefined;
}

/**
 * @public
 */
export interface ListManagedFirewallDomainListsOutput {
  /**
   * <p>A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of the Managed Domain Lists.</p>
   * @public
   */
  managedFirewallDomainLists: ManagedFirewallDomainListsItem[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource to be tagged.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An array of user-defined keys and optional values. These tags can be used for categorization and organization.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
