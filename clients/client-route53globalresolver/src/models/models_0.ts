// smithy-typescript generated code
import type {
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
  GlobalResolverIpAddressType,
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
   * The IP address or CIDR range that is allowed to send DNS queries to the Route 53 Global Resolver.
   *
   * @public
   */
  cidr: string | undefined;

  /**
   * A unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The IP address type for this access source. Valid values are IPv4 and IPv6 (if the Route 53 Global Resolver supports dual-stack).
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * A descriptive name for the access source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the DNS view to associate with this access source.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS protocol that is permitted for this access source. Valid values are Do53 (DNS over port 53), DoT (DNS over TLS), and DoH (DNS over HTTPS).
   *
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * Tags to associate with the access source.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAccessSourceOutput {
  /**
   * The Amazon Resource Name (ARN) of the access source.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The IP address or CIDR range that is allowed to send DNS queries to the Route 53 Global Resolver.
   *
   * @public
   */
  cidr: string | undefined;

  /**
   * The date and time when the access source was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The unique identifier for the access source.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The IP address type for this access source (IPv4 or IPv6).
   *
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * The descriptive name of the access source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the DNS view associated with this access source.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS protocol that is permitted for this access source (Do53, DoT, or DoH).
   *
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * The operational status of the access source.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The date and time when the access source was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Information about a field that failed validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The validation error message for the field.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessSourceInput {
  /**
   * The unique identifier of the access source to delete.
   *
   * @public
   */
  accessSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessSourceOutput {
  /**
   * The Amazon Resource Name (ARN) of the deleted access source.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The IP address or CIDR range of the deleted access source.
   *
   * @public
   */
  cidr: string | undefined;

  /**
   * The date and time when the access source was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The unique identifier of the deleted access source.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The IP address type of the deleted access source (IPv4 or IPv6).
   *
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * The name of the deleted access source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the DNS view that was associated with the deleted access source.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS protocol that was permitted for the deleted access source.
   *
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * The final status of the deleted access source.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The date and time when the access source was last updated before deletion.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAccessSourceInput {
  /**
   * The unique identifier of the access source to retrieve.
   *
   * @public
   */
  accessSourceId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessSourceOutput {
  /**
   * The Amazon Resource Name (ARN) of the access source.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The IP range for the rule's parameters in CIDR notation.
   *
   * @public
   */
  cidr: string | undefined;

  /**
   * The time and date the rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * ID for the rule.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The IP address type.
   *
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * Name for the access source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * ID for the DNS view that the rule is associated to.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The protocol determines how data is transmitted to a Global Resolver instance.
   *
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * Information about the status of the rule.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The time and date the access source was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessSourcesInput {
  /**
   * The maximum number of results to retrieve in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used for large sets of results that can't be returned in a single response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Values to filter the results.
   *
   * @public
   */
  filters?: Record<string, string[]> | undefined;
}

/**
 * Summary information about an access source.
 *
 * @public
 */
export interface AccessSourcesItem {
  /**
   * The Amazon Resource Name (ARN) of the access source.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The CIDR block that defines the IP address range for the access source.
   *
   * @public
   */
  cidr: string | undefined;

  /**
   * The date and time when the access source was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The unique identifier of the access source.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The IP address type of the access source.
   *
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * The name of the access source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the DNS view that the access source is associated with.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The protocol used by the access source.
   *
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * The current status of the access source.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The date and time when the access source was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessSourcesOutput {
  /**
   * A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array containing information about the access sources, such as the ID, CIDR etc.
   *
   * @public
   */
  accessSources: AccessSourcesItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccessSourceInput {
  /**
   * The unique identifier of the access source to update.
   *
   * @public
   */
  accessSourceId: string | undefined;

  /**
   * The CIDR block for the access source.
   *
   * @public
   */
  cidr?: string | undefined;

  /**
   * The IP address type for the access source.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * The name of the access source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The protocol for the access source.
   *
   * @public
   */
  protocol?: DnsProtocol | undefined;
}

/**
 * @public
 */
export interface UpdateAccessSourceOutput {
  /**
   * The Amazon Resource Name (ARN) of the updated access source.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The CIDR block of the updated access source.
   *
   * @public
   */
  cidr: string | undefined;

  /**
   * The date and time when the access source was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The unique identifier of the updated access source.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The IP address type of the updated access source.
   *
   * @public
   */
  ipAddressType: IpAddressType | undefined;

  /**
   * The name of the updated access source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the DNS view associated with the updated access source.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The protocol of the updated access source.
   *
   * @public
   */
  protocol: DnsProtocol | undefined;

  /**
   * The current status of the updated access source.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The date and time when the access source was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateAccessTokenInput {
  /**
   * A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same `clientToken` has the same result every time.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID of the DNS view to associate with this token.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The date and time when the token expires. Tokens can have a minimum expiration of 30 days and maximum of 365 days from creation.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * A descriptive name for the access token.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * An array of user-defined keys and optional values. These tags can be used for categorization and organization.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAccessTokenOutput {
  /**
   * The unique identifier for the access token.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access token.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The date and time when the access token was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The ID of the DNS view associated with this access token.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The date and time when the access token expires.
   *
   * @public
   */
  expiresAt: Date | undefined;

  /**
   * The name of the access token.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The operational status of the access token.
   *
   * @public
   */
  status: TokenStatus | undefined;

  /**
   * The access token value. This token should be included in DoH and DoT requests for authentication. Keep this value secure as it provides access to your Route 53 Global Resolver.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessTokenInput {
  /**
   * The unique identifier of the access token to delete.
   *
   * @public
   */
  accessTokenId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessTokenOutput {
  /**
   * The unique identifier of the deleted access token.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The final status of the deleted access token.
   *
   * @public
   */
  status: TokenStatus | undefined;

  /**
   * The date and time when the access token was deleted.
   *
   * @public
   */
  deletedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAccessTokenInput {
  /**
   * ID of the token.
   *
   * @public
   */
  accessTokenId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessTokenOutput {
  /**
   * ID of the token.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the token.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same `clientToken` has the same result every time.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The time and date the token was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * ID of the DNS view the token is associated to.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The token's expiration time and date.
   *
   * @public
   */
  expiresAt: Date | undefined;

  /**
   * ID of the Global Resolver.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * Name of the token.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The operational status of the token.
   *
   * @public
   */
  status: TokenStatus | undefined;

  /**
   * The time and date the token was created.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The value of the token.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ListAccessTokensInput {
  /**
   * The maximum number of results to retrieve in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used for large sets of results that can't be returned in a single response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the DNS view to list the tokens for.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * Filtering parameters.
   *
   * @public
   */
  filters?: Record<string, string[]> | undefined;
}

/**
 * Summary information about a token.
 *
 * @public
 */
export interface AccessTokenItem {
  /**
   * The unique identifier of the token.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the token.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time when the token was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The ID of the DNS view associated with the token.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The date and time when the token expires.
   *
   * @public
   */
  expiresAt: Date | undefined;

  /**
   * The ID of the global resolver associated with the token.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The name of the token.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the token.
   *
   * @public
   */
  status: TokenStatus | undefined;

  /**
   * The date and time when the token was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessTokensOutput {
  /**
   * A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of the tokens.
   *
   * @public
   */
  accessTokens?: AccessTokenItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccessTokenInput {
  /**
   * The ID of the token.
   *
   * @public
   */
  accessTokenId: string | undefined;

  /**
   * The new name of the token.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessTokenOutput {
  /**
   * The ID of the token.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the token.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface AssociateHostedZoneInput {
  /**
   * The ID of the Route 53 private hosted zone to associate with the Route 53 Global Resolver resource.
   *
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * An Amazon Resource Name (ARN) of the Route 53 Global Resolver the private hosted zone will be associated to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Name for the private hosted zone association.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface AssociateHostedZoneOutput {
  /**
   * ID of the association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * An Amazon Resource Name (ARN) of the Route 53 Global Resolver the private hosted zone is associated to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * ID of the private hosted zone.
   *
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * Name of the hosted zone (also the domain associated with the hosted zone).
   *
   * @public
   */
  hostedZoneName: string | undefined;

  /**
   * Name for the private hosted zone association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The date and time the private hosted zone association was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the private hosted zone association was modified.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Aggregate status for all the Amazon Web Services Regions in which the Route 53 Global Resolver exists.
   *
   * @public
   */
  status: HostedZoneAssociationStatus | undefined;
}

/**
 * Information about a DNS Firewall rule to create in a batch operation.
 *
 * @public
 */
export interface BatchCreateFirewallRuleInputItem {
  /**
   * The action to take when a DNS query matches the firewall rule.
   *
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * The DNS record type for the custom response when the action is BLOCK.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom domain name for the BLOCK response.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The TTL value for the custom response when the action is BLOCK.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The type of block response to return when the action is BLOCK.
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * A unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * The confidence threshold for advanced threat detection.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * A description of the firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether to enable advanced DNS threat protection for the firewall rule.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The ID of the firewall domain list to associate with the rule.
   *
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * A name for the firewall rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The priority of the firewall rule.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The ID of the DNS view to associate the firewall rule with.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS query type that the firewall rule should match.
   *
   * @public
   */
  qType?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateFirewallRuleInput {
  /**
   * The `BatchCreateFirewallRuleInputItem` objects contain the information for each Firewall rule.
   *
   * @public
   */
  firewallRules: BatchCreateFirewallRuleInputItem[] | undefined;
}

/**
 * The result of creating a firewall rule in a batch operation.
 *
 * @public
 */
export interface BatchCreateFirewallRuleResult {
  /**
   * The action configured for the created firewall rule.
   *
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * The DNS record type configured for the created firewall rule's custom response.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom domain name configured for the created firewall rule's BLOCK response.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The TTL value configured for the created firewall rule's custom response.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The type of block response configured for the created firewall rule.
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * The unique string that identified the request and ensured idempotency.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * The confidence threshold configured for the created firewall rule's advanced threat detection.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The date and time when the firewall rule was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The description of the created firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether advanced DNS threat protection is enabled for the created firewall rule.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The ID of the firewall domain list associated with the created firewall rule.
   *
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * The unique identifier of the created firewall rule.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the managed domain list associated with the created firewall rule.
   *
   * @public
   */
  managedDomainListName?: string | undefined;

  /**
   * The name of the created firewall rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The priority of the created firewall rule.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The ID of the DNS view associated with the created firewall rule.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS query type that the created firewall rule matches.
   *
   * @public
   */
  queryType?: string | undefined;

  /**
   * The current status of the created firewall rule.
   *
   * @public
   */
  status?: CRResourceStatus | undefined;

  /**
   * The date and time when the firewall rule was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Information about the result of creating a DNS Firewall rule in a batch operation.
 *
 * @public
 */
export interface BatchCreateFirewallRuleOutputItem {
  /**
   * The firewall rule that was created in the batch operation.
   *
   * @public
   */
  firewallRule: BatchCreateFirewallRuleResult | undefined;

  /**
   * The HTTP response code for the batch operation result.
   *
   * @public
   */
  code: number | undefined;

  /**
   * A message describing the result of the batch operation, including error details if applicable.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateFirewallRuleOutput {
  /**
   * High level information about the DNS Firewall rules that failed to create.
   *
   * @public
   */
  failures: BatchCreateFirewallRuleOutputItem[] | undefined;

  /**
   * High level information about the DNS Firewall rules that were created.
   *
   * @public
   */
  successes: BatchCreateFirewallRuleOutputItem[] | undefined;
}

/**
 * Information about a DNS Firewall rule to delete in a batch operation.
 *
 * @public
 */
export interface BatchDeleteFirewallRuleInputItem {
  /**
   * The ID of the DNS Firewall rule to delete.
   *
   * @public
   */
  firewallRuleId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteFirewallRuleInput {
  /**
   * An array of the DNS Firewall IDs to be deleted.
   *
   * @public
   */
  firewallRules: BatchDeleteFirewallRuleInputItem[] | undefined;
}

/**
 * Information about a firewall rule that was deleted in a batch operation.
 *
 * @public
 */
export interface BatchDeleteFirewallRuleResult {
  /**
   * The unique string that identified the request and ensured idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the deleted firewall rule.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the deleted firewall rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The final status of the deleted firewall rule.
   *
   * @public
   */
  status?: CRResourceStatus | undefined;
}

/**
 * The result of deleting a firewall rule in a batch operation.
 *
 * @public
 */
export interface BatchDeleteFirewallRuleOutputItem {
  /**
   * The firewall rule that was deleted in the batch operation.
   *
   * @public
   */
  firewallRule: BatchDeleteFirewallRuleResult | undefined;

  /**
   * The response code for the delete operation.
   *
   * @public
   */
  code: number | undefined;

  /**
   * The response message for the delete operation.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteFirewallRuleOutput {
  /**
   * High level information about the DNS Firewall rules that failed to delete.
   *
   * @public
   */
  failures: BatchDeleteFirewallRuleOutputItem[] | undefined;

  /**
   * High level information about the DNS Firewall rules that were deleted successfully.
   *
   * @public
   */
  successes: BatchDeleteFirewallRuleOutputItem[] | undefined;
}

/**
 * Information for updating a firewall rule in a batch operation.
 *
 * @public
 */
export interface BatchUpdateFirewallRuleInputItem {
  /**
   * The action to take when a DNS query matches the firewall rule.
   *
   * @public
   */
  action?: FirewallRuleAction | undefined;

  /**
   * The DNS record type for the custom response when the action is BLOCK.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom domain name for the BLOCK response.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The TTL value for the custom response when the action is BLOCK.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The type of block response to return when the action is BLOCK.
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * The confidence threshold for advanced threat detection.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * A description of the firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether to enable advanced DNS threat protection for the firewall rule.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The unique identifier of the firewall rule to update.
   *
   * @public
   */
  firewallRuleId: string | undefined;

  /**
   * A name for the firewall rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The priority of the firewall rule.
   *
   * @public
   */
  priority?: number | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFirewallRuleInput {
  /**
   * The DNS Firewall rule IDs to be updated.
   *
   * @public
   */
  firewallRules: BatchUpdateFirewallRuleInputItem[] | undefined;
}

/**
 * Information about a firewall rule that was updated in a batch operation.
 *
 * @public
 */
export interface BatchUpdateFirewallRuleResult {
  /**
   * The action configured for the updated firewall rule.
   *
   * @public
   */
  action?: FirewallRuleAction | undefined;

  /**
   * The DNS record type configured for the updated firewall rule's custom response.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom domain name configured for the updated firewall rule's BLOCK response.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The TTL value configured for the updated firewall rule's custom response.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The type of block response configured for the updated firewall rule.
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * The unique string that identified the request and ensured idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The confidence threshold configured for the updated firewall rule's advanced threat detection.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The date and time when the firewall rule was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The description of the updated firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether advanced DNS threat protection is enabled for the updated firewall rule.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The ID of the firewall domain list associated with the updated firewall rule.
   *
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * The unique identifier of the updated firewall rule.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the updated firewall rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The priority of the updated firewall rule.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The ID of the DNS view associated with the updated firewall rule.
   *
   * @public
   */
  dnsViewId?: string | undefined;

  /**
   * The DNS query type that the updated firewall rule matches.
   *
   * @public
   */
  queryType?: string | undefined;

  /**
   * The current status of the updated firewall rule.
   *
   * @public
   */
  status?: CRResourceStatus | undefined;

  /**
   * The date and time when the firewall rule was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * The result of updating a firewall rule in a batch operation.
 *
 * @public
 */
export interface BatchUpdateFirewallRuleOutputItem {
  /**
   * The firewall rule that was updated in the batch operation.
   *
   * @public
   */
  firewallRule: BatchUpdateFirewallRuleResult | undefined;

  /**
   * The response code for the update operation.
   *
   * @public
   */
  code: number | undefined;

  /**
   * The response message for the update operation.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFirewallRuleOutput {
  /**
   * High level information about the DNS Firewall rules that failed to update.
   *
   * @public
   */
  failures: BatchUpdateFirewallRuleOutputItem[] | undefined;

  /**
   * High level information about the DNS Firewall rules that were successfully updated.
   *
   * @public
   */
  successes: BatchUpdateFirewallRuleOutputItem[] | undefined;
}

/**
 * @public
 */
export interface CreateDNSViewInput {
  /**
   * The ID of the Route 53 Global Resolver to associate with this DNS view.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * A unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A descriptive name for the DNS view.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Whether to enable DNSSEC validation for DNS queries in this DNS view. When enabled, the resolver verifies the authenticity and integrity of DNS responses from public name servers for DNSSEC-signed domains.
   *
   * @public
   */
  dnssecValidation?: DnsSecValidationType | undefined;

  /**
   * Whether to enable EDNS Client Subnet injection for DNS queries in this DNS view. When enabled, client subnet information is forwarded to provide more accurate geographic-based DNS responses.
   *
   * @public
   */
  ednsClientSubnet?: EdnsClientSubnetType | undefined;

  /**
   * Determines the behavior when Route 53 Global Resolver cannot apply DNS firewall rules due to service impairment. When enabled, DNS queries are allowed through; when disabled, queries are blocked.
   *
   * @public
   */
  firewallRulesFailOpen?: FirewallRulesFailOpenType | undefined;

  /**
   * An optional description for the DNS view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Tags to associate with the DNS view.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDNSViewOutput {
  /**
   * The unique identifier for the DNS view.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DNS view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Whether DNSSEC validation is enabled for DNS queries in this DNS view.
   *
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * Whether EDNS Client Subnet injection is enabled for DNS queries in this DNS view.
   *
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * The behavior when Route 53 Global Resolver cannot apply DNS firewall rules due to service impairment.
   *
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * The descriptive name of the DNS view.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the DNS view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the Route 53 Global Resolver instance the DNS view is created for.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The date and time when the DNS view was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the DNS view was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The operational status of the DNS view.
   *
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface CreateFirewallDomainListInput {
  /**
   * A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same `clientToken` has the same result every time.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID of the Route 53 Global Resolver that the domain list will be associated with.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * An optional description for the firewall domain list.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A descriptive name for the firewall domain list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An array of user-defined keys and optional values. These tags can be used for categorization and organization.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFirewallDomainListOutput {
  /**
   * An Amazon Resource Name (ARN) for the domain list.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the Route 53 Global Resolver that the domain list is associated with.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The time and date the domain list was created on.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Description for the domain list.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Number of domains in the domain list.
   *
   * @public
   */
  domainCount: number | undefined;

  /**
   * ID of the domain list.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Name of the domain list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Creation status of the domain list.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The time and date the domain list was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleInput {
  /**
   * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list:
   *
   * - `ALLOW` - Permit the request to go through.
   * - `ALERT` - Permit the request and send metrics and logs to CloudWatch.
   * - `BLOCK` - Disallow the request. This option requires additional details in the rule's `BlockResponse`.
   *
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * The DNS record's type. This determines the format of the record value that you provided in `BlockOverrideDomain`. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * This setting is required if the `BlockResponse` setting is `OVERRIDE`.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom DNS record to send back in response to the query. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * This setting is required if the `BlockResponse` setting is `OVERRIDE`.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * This setting is required if the `BlockResponse` setting is `OVERRIDE`.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The response to return when the action is BLOCK. Valid values are NXDOMAIN (domain does not exist), NODATA (domain exists but no records), or OVERRIDE (return custom response).
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same `clientToken` has the same result every time.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The confidence threshold for advanced threat detection. Valid values are HIGH, MEDIUM, or LOW, indicating the accuracy level required for threat detection.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * An optional description for the firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether to enable advanced DNS threat protection for this rule. Advanced protection can detect and block DNS tunneling and Domain Generation Algorithm (DGA) threats.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The ID of the firewall domain list to use in this rule.
   *
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * A descriptive name for the firewall rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The priority of this rule. Rules are evaluated in priority order, with lower numbers having higher priority. When a DNS query matches multiple rules, the rule with the highest priority (lowest number) is applied.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The ID of the DNS view to associate with this firewall rule.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS query type to match for this rule. Examples include A (IPv4 address), AAAA (IPv6 address), MX (mail exchange), or TXT (text record).
   *
   * @public
   */
  qType?: string | undefined;
}

/**
 * @public
 */
export interface CreateFirewallRuleOutput {
  /**
   * The action that DNS Firewall takes on DNS queries that match this rule.
   *
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * The DNS record type for the custom response when blockResponse is OVERRIDE.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom domain to return when the action is BLOCK and blockResponse is OVERRIDE.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The time-to-live (TTL) value for the custom response when blockResponse is OVERRIDE.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The response to return when the action is BLOCK.
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * The confidence threshold for advanced threat detection.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The date and time when the firewall rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether advanced DNS threat protection is enabled for this rule.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The ID of the firewall domain list used in this rule.
   *
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * The unique identifier for the firewall rule.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the firewall rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The priority of the firewall rule.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The ID of the DNS view associated with this firewall rule.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS query type that this rule matches.
   *
   * @public
   */
  queryType?: string | undefined;

  /**
   * The operational status of the firewall rule.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The date and time when the firewall rule was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateGlobalResolverInput {
  /**
   * A unique string that identifies the request and ensures idempotency. If you make multiple requests with the same client token, only one Route 53 Global Resolver is created.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An optional description for the Route 53 Global Resolver instance. Maximum length of 1024 characters.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The IP address type for the Route 53 Global Resolver. Valid values are IPV4 (default) or DUAL_STACK for both IPv4 and IPv6 support.
   *
   * @public
   */
  ipAddressType?: GlobalResolverIpAddressType | undefined;

  /**
   * A descriptive name for the Route 53 Global Resolver instance. Maximum length of 64 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Web Services Region where query resolution logs and metrics will be aggregated and delivered. If not specified, logging is not enabled.
   *
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * List of Amazon Web Services Regions where the Route 53 Global Resolver will operate. The resolver will be distributed across these Regions to provide global availability and low-latency DNS resolution.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * Tags to associate with the Route 53 Global Resolver. Tags are key-value pairs that help you organize and identify your resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGlobalResolverOutput {
  /**
   * The unique identifier for the Route 53 Global Resolver.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Route 53 Global Resolver.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * The date and time when the Route 53 Global Resolver was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the Route 53 Global Resolver.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The hostname that DNS clients should use for TLS certificate validation when connecting to the Route 53 Global Resolver. This value resolves to the global anycast IP addresses for the resolver.
   *
   * @public
   */
  dnsName: string | undefined;

  /**
   * The IP address type configured for the Route 53 Global Resolver (IPV4 or DUAL_STACK).
   *
   * @public
   */
  ipAddressType?: GlobalResolverIpAddressType | undefined;

  /**
   * The global anycast IPv4 addresses associated with the Route 53 Global Resolver. DNS clients can send queries to these addresses from anywhere on the internet.
   *
   * @public
   */
  ipv4Addresses: string[] | undefined;

  /**
   * The global anycast IPv6 addresses associated with the Route 53 Global Resolver. This field is only populated when ipAddressType is DUAL_STACK. DNS clients can send queries to these addresses from anywhere on the internet.
   *
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * The name of the Route 53 Global Resolver.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Web Services Region where observability data for the Route 53 Global Resolver is stored.
   *
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * The Amazon Web Services Regions where the Route 53 Global Resolver is deployed and operational.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The current status of the Route 53 Global Resolver. Possible values are CREATING (being provisioned), UPDATING (being modified), OPERATIONAL (ready to serve queries), or DELETING (being removed).
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The date and time when the Route 53 Global Resolver was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDNSViewInput {
  /**
   * The unique identifier of the DNS view to delete.
   *
   * @public
   */
  dnsViewId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDNSViewOutput {
  /**
   * The unique identifier of the deleted DNS view.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted DNS view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Whether DNSSEC validation was enabled for the deleted DNS view.
   *
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * Whether EDNS Client Subnet injection was enabled for the deleted DNS view.
   *
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * The firewall rules fail-open behavior that was configured for the deleted DNS view.
   *
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * The name of the deleted DNS view.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the deleted DNS view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the Route 53 Global Resolver that the deleted DNS view was associated with.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The date and time when the DNS view was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the DNS view was last updated before deletion.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The final status of the deleted DNS view.
   *
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallDomainListInput {
  /**
   * The unique identifier of the firewall domain list to delete.
   *
   * @public
   */
  firewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallDomainListOutput {
  /**
   * The Amazon Resource Name (ARN) of the deleted firewall domain list.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique identifier of the deleted firewall domain list.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the deleted firewall domain list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The final status of the deleted firewall domain list.
   *
   * @public
   */
  status: CRResourceStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleInput {
  /**
   * The unique identifier of the firewall rule to delete.
   *
   * @public
   */
  firewallRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallRuleOutput {
  /**
   * The action that was configured for the deleted firewall rule.
   *
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * The DNS record type that was configured for the deleted firewall rule's custom response.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom domain that was configured for the deleted firewall rule's BLOCK response.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The TTL value that was configured for the deleted firewall rule's custom response.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The block response type that was configured for the deleted firewall rule.
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * The confidence threshold that was configured for the deleted firewall rule's advanced threat detection.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The date and time when the firewall rule was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the deleted firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether advanced DNS threat protection was enabled for the deleted firewall rule.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The ID of the firewall domain list that was associated with the deleted firewall rule.
   *
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * The unique identifier of the deleted firewall rule.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the deleted firewall rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The priority that was configured for the deleted firewall rule.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The ID of the DNS view that was associated with the deleted firewall rule.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS query type that the deleted firewall rule was configured to match.
   *
   * @public
   */
  queryType?: string | undefined;

  /**
   * The final status of the deleted firewall rule.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The date and time when the firewall rule was last updated before deletion.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalResolverInput {
  /**
   * The unique identifier of the Route 53 Global Resolver to delete.
   *
   * @public
   */
  globalResolverId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalResolverOutput {
  /**
   * The unique identifier of the deleted Route 53 Global Resolver.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted Route 53 Global Resolver.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * The hostname that DNS clients used for TLS certificate validation when connecting to the deleted Route 53 Global Resolver.
   *
   * @public
   */
  dnsName: string | undefined;

  /**
   * The Amazon Web Services Region where observability data for the deleted Route 53 Global Resolver was stored.
   *
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * The name of the deleted Route 53 Global Resolver.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the deleted Route 53 Global Resolver.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Web Services Regions where the deleted Route 53 Global Resolver was deployed and operational.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The date and time when the Route 53 Global Resolver was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the Route 53 Global Resolver was last updated before deletion.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The final status of the deleted Route 53 Global Resolver.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The global anycast IPv4 addresses that were associated with the deleted Route 53 Global Resolver.
   *
   * @public
   */
  ipv4Addresses: string[] | undefined;

  /**
   * The global anycast IPv6 addresses that were associated with the deleted Route 53 Global Resolver.
   *
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * The IP address type that was configured for the deleted Route 53 Global Resolver.
   *
   * @public
   */
  ipAddressType?: GlobalResolverIpAddressType | undefined;
}

/**
 * @public
 */
export interface DisableDNSViewInput {
  /**
   * The unique identifier of the DNS view to disable.
   *
   * @public
   */
  dnsViewId: string | undefined;
}

/**
 * @public
 */
export interface DisableDNSViewOutput {
  /**
   * The unique identifier of the disabled DNS view.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the disabled DNS view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Whether DNSSEC validation is enabled for the disabled DNS view.
   *
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * Whether EDNS Client Subnet injection is enabled for the disabled DNS view.
   *
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * The firewall rules fail-open behavior configured for the disabled DNS view.
   *
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * The name of the disabled DNS view.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the disabled DNS view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the Route 53 Global Resolver that the disabled DNS view is associated with.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The date and time when the DNS view was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the DNS view was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the disabled DNS view.
   *
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateHostedZoneInput {
  /**
   * The ID of the Route 53 private hosted zone to disassociate.
   *
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Route 53 Global Resolver resource to disassociate the hosted zone from.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateHostedZoneOutput {
  /**
   * The unique identifier of the disassociation.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Route 53 Global Resolver resource that the hosted zone was disassociated from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The ID of the Route 53 private hosted zone that was disassociated.
   *
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * The name of the Route 53 private hosted zone that was disassociated.
   *
   * @public
   */
  hostedZoneName: string | undefined;

  /**
   * The name of the association that was removed.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The date and time when the association was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the association was last updated before disassociation.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The final status of the disassociation.
   *
   * @public
   */
  status: HostedZoneAssociationStatus | undefined;
}

/**
 * @public
 */
export interface EnableDNSViewInput {
  /**
   * The unique identifier of the DNS view to enable.
   *
   * @public
   */
  dnsViewId: string | undefined;
}

/**
 * @public
 */
export interface EnableDNSViewOutput {
  /**
   * The unique identifier of the enabled DNS view.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the enabled DNS view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Whether DNSSEC validation is enabled for the enabled DNS view.
   *
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * Whether EDNS Client Subnet injection is enabled for the enabled DNS view.
   *
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * The firewall rules fail-open behavior configured for the enabled DNS view.
   *
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * The name of the enabled DNS view.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the enabled DNS view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the Route 53 Global Resolver that the enabled DNS view is associated with.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The date and time when the DNS view was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the DNS view was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the enabled DNS view.
   *
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface GetDNSViewInput {
  /**
   * The ID of the DNS view to retrieve information about.
   *
   * @public
   */
  dnsViewId: string | undefined;
}

/**
 * @public
 */
export interface GetDNSViewOutput {
  /**
   * ID of the DNS view.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the DNS view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same `clientToken` has the same result every time.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies whether DNSSEC is enabled or disabled for the DNS view.
   *
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * Specifies whether edns0 client subnet is enabled.
   *
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * Specifies the DNS Firewall failure mode configuration. When enabled, the DNS Firewall allows DNS queries to proceed if it's unable to properly evaluate them. When disabled, the DNS Firewall blocks DNS queries it's unable to evaluate.
   *
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * Name of the DNS view.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Description of the DNS view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * ID of the Global Resolver the DNS view is associated to.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The time and date the DNS view was creates on.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time and date the DNS view was updated on.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Operational status of the DNS view.
   *
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface ListDNSViewsInput {
  /**
   * The maximum number of results to retrieve in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used for large sets of results that can't be returned in a single response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Global Resolver ID.
   *
   * @public
   */
  globalResolverId: string | undefined;
}

/**
 * Summary information about a DNS view.
 *
 * @public
 */
export interface DNSViewSummary {
  /**
   * The unique identifier of the DNS view.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DNS view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * Whether DNSSEC validation is enabled for the DNS view.
   *
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * Whether EDNS Client Subnet injection is enabled for the DNS view.
   *
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * Whether firewall rules fail open when they cannot be evaluated.
   *
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * The name of the DNS view.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the DNS view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the global resolver that the DNS view is associated with.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The date and time when the DNS view was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the DNS view was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the DNS view.
   *
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface ListDNSViewsOutput {
  /**
   * A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of information about the DNS views, such as whether DNSSEC is enabled, creation time, etc.
   *
   * @public
   */
  dnsViews: DNSViewSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateDNSViewInput {
  /**
   * The unique identifier of the DNS view to update.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The name of the DNS view.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the DNS view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether to enable DNSSEC validation for the DNS view.
   *
   * @public
   */
  dnssecValidation?: DnsSecValidationType | undefined;

  /**
   * Whether to enable EDNS Client Subnet injection for the DNS view.
   *
   * @public
   */
  ednsClientSubnet?: EdnsClientSubnetType | undefined;

  /**
   * Whether firewall rules should fail open when they cannot be evaluated.
   *
   * @public
   */
  firewallRulesFailOpen?: FirewallRulesFailOpenType | undefined;
}

/**
 * @public
 */
export interface UpdateDNSViewOutput {
  /**
   * The unique identifier of the updated DNS view.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated DNS view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Whether DNSSEC validation is enabled for the updated DNS view.
   *
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * Whether EDNS Client Subnet injection is enabled for the updated DNS view.
   *
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * Whether firewall rules fail open when they cannot be evaluated for the updated DNS view.
   *
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * The name of the updated DNS view.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the updated DNS view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the global resolver associated with the updated DNS view.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The date and time when the DNS view was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the DNS view was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the updated DNS view.
   *
   * @public
   */
  status: ProfileResourceStatus | undefined;
}

/**
 * @public
 */
export interface GetFirewallDomainListInput {
  /**
   * ID of the domain list.
   *
   * @public
   */
  firewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallDomainListOutput {
  /**
   * Amazon Resource Name (ARN) of the domain list.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * ID of the Global Resolver that the domain list is associated to.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same `clientToken` has the same result every time.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The time and date the domain list was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the domain list.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Number of domains in the domain list.
   *
   * @public
   */
  domainCount: number | undefined;

  /**
   * ID of the domain list.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Name of the domain list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Operational status of the domain list.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * Additional information about the status of the domain list.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The date and time the domain list was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ImportFirewallDomainsInput {
  /**
   * The fully qualified URL of the file in Amazon S3 that contains the list of domains to import. The file should contain one domain per line.
   *
   * @public
   */
  domainFileUrl: string | undefined;

  /**
   * ID of the DNS Firewall domain list that you want to import the domain list to.
   *
   * @public
   */
  firewallDomainListId: string | undefined;

  /**
   * This value is `REPLACE`, and it updates the domain list to match the list of domains in the imported file.
   *
   * @public
   */
  operation: string | undefined;
}

/**
 * @public
 */
export interface ImportFirewallDomainsOutput {
  /**
   * ID of the DNS Firewall domain list that you imported the domain list to.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Name of the DNS Firewall domain list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Operational status of the DNS Firewall domain list.
   *
   * @public
   */
  status: CRResourceStatus | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainListsInput {
  /**
   * The maximum number of results to retrieve in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used for large sets of results that can't be returned in a single response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the Global Resolver that contains the DNS view the domain lists are associated to.
   *
   * @public
   */
  globalResolverId?: string | undefined;
}

/**
 * Summary information about a firewall domain list.
 *
 * @public
 */
export interface FirewallDomainListsItem {
  /**
   * The Amazon Resource Name (ARN) of the firewall domain list.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the global resolver that the firewall domain list is associated with.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The date and time when the firewall domain list was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * A description of the firewall domain list.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the firewall domain list.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the firewall domain list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the firewall domain list.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The date and time when the firewall domain list was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainListsOutput {
  /**
   * A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of the DNS Firewall domain lists.
   *
   * @public
   */
  firewallDomainLists: FirewallDomainListsItem[] | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainsInput {
  /**
   * The maximum number of results to retrieve in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used for large sets of results that can't be returned in a single response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * ID of the DNS Firewall domain list.
   *
   * @public
   */
  firewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface ListFirewallDomainsOutput {
  /**
   * A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of domains in the specified domain list.
   *
   * @public
   */
  domains: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDomainsInput {
  /**
   * A list of the domains. You can add up to 1000 domains per request.
   *
   * @public
   */
  domains: string[] | undefined;

  /**
   * The ID of the DNS Firewall domain list to which you want to add the domains.
   *
   * @public
   */
  firewallDomainListId: string | undefined;

  /**
   * The operation for updating the domain list. The allowed values are ADD, REMOVE, and REPLACE.
   *
   * @public
   */
  operation: string | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallDomainsOutput {
  /**
   * The ID of the DNS Firewall domain list.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the domain list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The operational status of the domain list.
   *
   * @public
   */
  status: CRResourceStatus | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleInput {
  /**
   * ID of the DNS Firewall rule.
   *
   * @public
   */
  firewallRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetFirewallRuleOutput {
  /**
   * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule.
   *
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * The DNS record's type. This determines the format of the record value that you provided in `BlockOverrideDomain`. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom DNS record to send back in response to the query. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The way that you want DNS Firewall to block the request. Used for the rule action setting `BLOCK`.
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The time and date the DNS Firewall rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the DNS Firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the DNS Firewall Advanced rule. Valid values are DGA, DNS_TUNNELING, and DICTIONARY_DGA.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The ID of a DNS Firewall domain list.
   *
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * ID of the DNS Firewall rule.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the DNS Firewall rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The DNS view ID the DNS Firewall is associated with.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS query type you want the rule to evaluate.
   *
   * @public
   */
  queryType?: string | undefined;

  /**
   * The operational status of the DNS Firewall rule.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The date and time the DNS Firewall rule was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListFirewallRulesInput {
  /**
   * The maximum number of results to retrieve in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used for large sets of results that can't be returned in a single response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * ID of the DNS view.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * Values to filter the results.
   *
   * @public
   */
  filters?: Record<string, string[]> | undefined;
}

/**
 * Summary information about a firewall rule.
 *
 * @public
 */
export interface FirewallRulesItem {
  /**
   * The action configured for the firewall rule.
   *
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * The DNS record type configured for the firewall rule's custom response.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom domain name configured for the firewall rule's BLOCK response.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The TTL value configured for the firewall rule's custom response.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The type of block response configured for the firewall rule.
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * The confidence threshold configured for the firewall rule's advanced threat detection.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The date and time when the firewall rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether advanced DNS threat protection is enabled for the firewall rule.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The ID of the firewall domain list associated with the firewall rule.
   *
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * The unique identifier of the firewall rule.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the firewall rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The priority of the firewall rule.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The ID of the DNS view associated with the firewall rule.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS query type that the firewall rule matches.
   *
   * @public
   */
  queryType?: string | undefined;

  /**
   * The current status of the firewall rule.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The date and time when the firewall rule was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListFirewallRulesOutput {
  /**
   * A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of the firewall rules and information about them.
   *
   * @public
   */
  firewallRules: FirewallRulesItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleInput {
  /**
   * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule.
   *
   * @public
   */
  action?: FirewallRuleAction | undefined;

  /**
   * The DNS record's type. This determines the format of the record value that you provided in `BlockOverrideDomain`. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom DNS record to send back in response to the query. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The way that you want DNS Firewall to block the request. Used for the rule action setting `BLOCK`.
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same `clientToken` has the same result every time.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The description for the Firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the DNS Firewall Advanced rule. Valid values are DGA, DNS_TUNNELING, and DICTIONARY_DGA.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The ID of the DNS Firewall rule.
   *
   * @public
   */
  firewallRuleId: string | undefined;

  /**
   * The name of the DNS Firewall rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
   *
   * @public
   */
  priority?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFirewallRuleOutput {
  /**
   * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule.
   *
   * @public
   */
  action: FirewallRuleAction | undefined;

  /**
   * The DNS record's type. This determines the format of the record value that you provided in `BlockOverrideDomain`. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  blockOverrideDnsType?: BlockOverrideDnsQueryType | undefined;

  /**
   * The custom DNS record to send back in response to the query. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  blockOverrideDomain?: string | undefined;

  /**
   * The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE`.
   *
   * @public
   */
  blockOverrideTtl?: number | undefined;

  /**
   * The way that you want DNS Firewall to block the request. Used for the rule action setting `BLOCK`.
   *
   * @public
   */
  blockResponse?: FirewallBlockResponse | undefined;

  /**
   * The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule.
   *
   * @public
   */
  confidenceThreshold?: ConfidenceThreshold | undefined;

  /**
   * The time and date the Firewall rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the Firewall rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the DNS Firewall Advanced rule. Valid values are DGA, DNS_TUNNELING, and DICTIONARY_DGA.
   *
   * @public
   */
  dnsAdvancedProtection?: DnsAdvancedProtection | undefined;

  /**
   * The ID of the domain list associated with the Firewall rule.
   *
   * @public
   */
  firewallDomainListId?: string | undefined;

  /**
   * The ID of the Firewall rule.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the Firewall rule.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The ID of the DNS view the Firewall rule is associated with.
   *
   * @public
   */
  dnsViewId: string | undefined;

  /**
   * The DNS query type you want the rule to evaluate.
   *
   * @public
   */
  queryType?: string | undefined;

  /**
   * The operational status of the firewall rule.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The time and date the rule was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetGlobalResolverInput {
  /**
   * The ID of the Route 53 Global Resolver to retrieve information about.
   *
   * @public
   */
  globalResolverId: string | undefined;
}

/**
 * @public
 */
export interface GetGlobalResolverOutput {
  /**
   * The ID of the Global Resolver.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Global Resolver.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same `clientToken` has the same result every time.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * The hostname used by the customers' DNS clients for certification validation.
   *
   * @public
   */
  dnsName: string | undefined;

  /**
   * The Amazon Web Services Regions in which the users' Global Resolver query resolution logs will be propagated.
   *
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * The name of the Global Resolver.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the Global Resolver.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Web Services Regions in which the Global Resolver operate.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The date and time the Global Resolver was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the Global Resolver was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The operational status of the Global Resolver.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * List of anycast IPv4 addresses associated with the Global Resolver instance.
   *
   * @public
   */
  ipv4Addresses: string[] | undefined;

  /**
   * List of anycast IPv6 addresses associated with the Global Resolver instance. This field is only populated when ipAddressType is DUAL_STACK.
   *
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * The IP address type configured for the Global Resolver.
   *
   * @public
   */
  ipAddressType?: GlobalResolverIpAddressType | undefined;
}

/**
 * @public
 */
export interface ListGlobalResolversInput {
  /**
   * The maximum number of Route 53 Global Resolver instances to return in the response. Valid range is 1-100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. This value is returned in the response if there are more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a global resolver.
 *
 * @public
 */
export interface GlobalResolversItem {
  /**
   * The unique identifier of the global resolver.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the global resolver.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * The DNS name of the global resolver.
   *
   * @public
   */
  dnsName: string | undefined;

  /**
   * The Amazon Web Services Region where observability data is collected for the global resolver.
   *
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * The name of the global resolver.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the global resolver.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Web Services Regions where the global resolver is deployed.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The date and time when the global resolver was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the global resolver was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the global resolver.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * The IPv4 addresses assigned to the global resolver.
   *
   * @public
   */
  ipv4Addresses: string[] | undefined;

  /**
   * The IPv6 addresses assigned to the global resolver. This field is only populated when ipAddressType is DUAL_STACK.
   *
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * The IP address type configured for the global resolver.
   *
   * @public
   */
  ipAddressType?: GlobalResolverIpAddressType | undefined;
}

/**
 * @public
 */
export interface ListGlobalResolversOutput {
  /**
   * A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Paginated list of Global Resolvers.
   *
   * @public
   */
  globalResolvers: GlobalResolversItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalResolverInput {
  /**
   * The ID of the Global Resolver.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The name of the Global Resolver.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Web Services Regions in which the users' Global Resolver query resolution logs will be propagated.
   *
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * The description of the Global Resolver.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The IP address type for the Global Resolver. Valid values are IPV4 or DUAL_STACK for both IPv4 and IPv6 support.
   *
   * @public
   */
  ipAddressType?: GlobalResolverIpAddressType | undefined;

  /**
   * The list of Amazon Web Services Regions where the Global Resolver will operate. The resolver will be distributed across these Regions to provide global availability and low-latency DNS resolution.
   *
   * @public
   */
  regions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalResolverOutput {
  /**
   * The ID of the Global Resolver.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Global Resolver.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same `clientToken` has the same result every time.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * The hostname to be used by the customers' DNS clients for certification validation.
   *
   * @public
   */
  dnsName: string | undefined;

  /**
   * The Amazon Web Services Regions in which the users' Global Resolver query resolution logs will be propagated.
   *
   * @public
   */
  observabilityRegion?: string | undefined;

  /**
   * Name of the Global Resolver.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Description of the Global Resolver.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Web Services Regions in which the Global Resolver will operate.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The time and date the Global Resolverwas created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time and date the Global Resolver was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The operational status of the Global Resolver.
   *
   * @public
   */
  status: CRResourceStatus | undefined;

  /**
   * List of anycast IPv4 addresses associated with the Global Resolver instance.
   *
   * @public
   */
  ipv4Addresses: string[] | undefined;

  /**
   * List of anycast IPv6 addresses associated with the updated Global Resolver instance. This field is only populated when ipAddressType is DUAL_STACK.
   *
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * The IP address type configured for the updated Global Resolver.
   *
   * @public
   */
  ipAddressType?: GlobalResolverIpAddressType | undefined;
}

/**
 * @public
 */
export interface GetHostedZoneAssociationInput {
  /**
   * ID of the private hosted zone association.
   *
   * @public
   */
  hostedZoneAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetHostedZoneAssociationOutput {
  /**
   * ID of the private hosted zone association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the DNS view the private hosted zone is associated to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * ID of the hosted zone associated to the DNS view.
   *
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * Name of the domain associated with the private hosted zone.
   *
   * @public
   */
  hostedZoneName: string | undefined;

  /**
   * Name of the private hosted zone association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The time and date the private hosted zone association was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time and date the private hosted zone association was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The operational status of the private hosted zone association.
   *
   * @public
   */
  status: HostedZoneAssociationStatus | undefined;
}

/**
 * @public
 */
export interface ListHostedZoneAssociationsInput {
  /**
   * The maximum number of results to retrieve in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used for large sets of results that can't be returned in a single response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DNS view to list hosted zone associations for. This parameter is optional; if you omit it, all hosted zone associations in your Amazon Web Services account are returned.
   *
   * @public
   */
  resourceArn?: string | undefined;
}

/**
 * Summary information about a hosted zone association.
 *
 * @public
 */
export interface HostedZoneAssociationSummary {
  /**
   * The unique identifier of the hosted zone association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource associated with the hosted zone.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The ID of the hosted zone.
   *
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * The name of the hosted zone.
   *
   * @public
   */
  hostedZoneName: string | undefined;

  /**
   * The name of the hosted zone association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The date and time when the hosted zone association was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the hosted zone association was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the hosted zone association.
   *
   * @public
   */
  status: HostedZoneAssociationStatus | undefined;
}

/**
 * @public
 */
export interface ListHostedZoneAssociationsOutput {
  /**
   * A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of the private hosted zone associations.
   *
   * @public
   */
  hostedZoneAssociations: HostedZoneAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateHostedZoneAssociationInput {
  /**
   * The ID of the private hosted zone association.
   *
   * @public
   */
  hostedZoneAssociationId: string | undefined;

  /**
   * The name you want to update the hosted zone association to.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHostedZoneAssociationOutput {
  /**
   * The ID of the private hosted zone association.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the private hosted zone association.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The ID of the private hosted zone.
   *
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * The name of the domain associated with the private hosted zone.
   *
   * @public
   */
  hostedZoneName: string | undefined;

  /**
   * The name of the private hosted zone association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The time and date the private hosted zone association was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time and date the private hosted zone association was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The operational status of the private hosted zone association.
   *
   * @public
   */
  status: HostedZoneAssociationStatus | undefined;
}

/**
 * @public
 */
export interface ListSharedDNSViewsInput {
  /**
   * The maximum number of results to retrieve in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used for large sets of results that can't be returned in a single response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a DNS view that has been shared with your Amazon Web Services account through Amazon Web Services RAM.
 *
 * @public
 */
export interface SharedDNSViewSummary {
  /**
   * The unique identifier of the DNS view.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DNS view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique string that identifies the request and ensures idempotency.
   *
   * @public
   */
  clientToken: string | undefined;

  /**
   * Whether DNSSEC validation is enabled for the DNS view.
   *
   * @public
   */
  dnssecValidation: DnsSecValidationType | undefined;

  /**
   * Whether EDNS Client Subnet injection is enabled for the DNS view.
   *
   * @public
   */
  ednsClientSubnet: EdnsClientSubnetType | undefined;

  /**
   * Whether firewall rules fail open when they cannot be evaluated.
   *
   * @public
   */
  firewallRulesFailOpen: FirewallRulesFailOpenType | undefined;

  /**
   * The name of the DNS view.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the DNS view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the global resolver that the DNS view is associated with.
   *
   * @public
   */
  globalResolverId: string | undefined;

  /**
   * The date and time when the DNS view was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the DNS view was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the DNS view.
   *
   * @public
   */
  status: ProfileResourceStatus | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the DNS view and shared it with your Amazon Web Services account.
   *
   * @public
   */
  ownerAccountId: string | undefined;
}

/**
 * @public
 */
export interface ListSharedDNSViewsOutput {
  /**
   * A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of information about the DNS views shared with your Amazon Web Services account, including the Amazon Web Services account that owns each DNS view.
   *
   * @public
   */
  dnsViews: SharedDNSViewSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Amazon Resource Name (ARN) for the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * An array of user-defined keys and optional values. These tags can be used for categorization and organization.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetManagedFirewallDomainListInput {
  /**
   * ID of the Managed Domain List.
   *
   * @public
   */
  managedFirewallDomainListId: string | undefined;
}

/**
 * @public
 */
export interface GetManagedFirewallDomainListOutput {
  /**
   * Description of the Managed Domain List.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * ID of the Managed Domain List.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Name of the Managed Domain List.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Type of the managed category. This is either `THREAT` or `CONTENT`.
   *
   * @public
   */
  managedListType: string | undefined;
}

/**
 * @public
 */
export interface ListManagedFirewallDomainListsInput {
  /**
   * The maximum number of results to retrieve in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used for large sets of results that can't be returned in a single response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The category of the Manage DNS list either `THREAT` or `CONTENT`.
   *
   * @public
   */
  managedFirewallDomainListType: string | undefined;
}

/**
 * Summary information about a managed firewall domain list.
 *
 * @public
 */
export interface ManagedFirewallDomainListsItem {
  /**
   * A description of the managed firewall domain list.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the managed firewall domain list.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the managed firewall domain list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the managed firewall domain list.
   *
   * @public
   */
  managedListType: string | undefined;
}

/**
 * @public
 */
export interface ListManagedFirewallDomainListsOutput {
  /**
   * A pagination token used for large sets of results that can't be returned in a single response. Provide this token in the next call to get the results not returned in this call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of the Managed Domain Lists.
   *
   * @public
   */
  managedFirewallDomainLists: ManagedFirewallDomainListsItem[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the resource to be tagged.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * An array of user-defined keys and optional values. These tags can be used for categorization and organization.
   *
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
   * Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys associated with the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
