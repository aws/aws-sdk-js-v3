// smithy-typescript generated code
import type {
  AuthPolicyState,
  AuthType,
  HealthCheckProtocolVersion,
  IpAddressType,
  LambdaEventStructureVersion,
  ListenerProtocol,
  PayerResponsibilityPayer,
  PayerResponsibilityScope,
  PrivateDnsPreference,
  ProtocolType,
  ResourceConfigDnsResolution,
  ResourceConfigurationIpAddressType,
  ResourceConfigurationStatus,
  ResourceConfigurationType,
  ResourceGatewayIpAddressType,
  ResourceGatewayStatus,
  ServiceNetworkLogType,
  ServiceNetworkResourceAssociationStatus,
  ServiceNetworkServiceAssociationStatus,
  ServiceNetworkVpcAssociationStatus,
  ServiceStatus,
  TargetGroupProtocol,
  TargetGroupProtocolVersion,
  TargetGroupStatus,
  TargetGroupType,
  TargetStatus,
  VerificationStatus,
} from "./enums";

/**
 * @public
 */
export interface CreateAccessLogSubscriptionRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID or ARN of the service network or service.
   *
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination. The supported destination types are CloudWatch Log groups, Kinesis Data Firehose delivery streams, and Amazon S3 buckets.
   *
   * @public
   */
  destinationArn: string | undefined;

  /**
   * The type of log that monitors your Amazon VPC Lattice service networks.
   *
   * @public
   */
  serviceNetworkLogType?: ServiceNetworkLogType | undefined;

  /**
   * The tags for the access log subscription.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAccessLogSubscriptionResponse {
  /**
   * The ID of the access log subscription.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access log subscription.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the service network or service.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network or service.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The type of log that monitors your Amazon VPC Lattice service networks.
   *
   * @public
   */
  serviceNetworkLogType?: ServiceNetworkLogType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the log destination.
   *
   * @public
   */
  destinationArn: string | undefined;
}

/**
 * Describes a validation failure.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the validation exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Additional information about why the validation failed.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessLogSubscriptionRequest {
  /**
   * The ID or ARN of the access log subscription.
   *
   * @public
   */
  accessLogSubscriptionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessLogSubscriptionResponse {}

/**
 * @public
 */
export interface GetAccessLogSubscriptionRequest {
  /**
   * The ID or ARN of the access log subscription.
   *
   * @public
   */
  accessLogSubscriptionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAccessLogSubscriptionResponse {
  /**
   * The ID of the access log subscription.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access log subscription.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the service network or service.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network or service.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access log destination.
   *
   * @public
   */
  destinationArn: string | undefined;

  /**
   * The log type for the service network.
   *
   * @public
   */
  serviceNetworkLogType?: ServiceNetworkLogType | undefined;

  /**
   * The date and time that the access log subscription was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the access log subscription was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessLogSubscriptionsRequest {
  /**
   * The ID or ARN of the service network or service.
   *
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about an access log subscription.
 *
 * @public
 */
export interface AccessLogSubscriptionSummary {
  /**
   * The ID of the access log subscription.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access log subscription
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the service or service network.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service or service network.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination.
   *
   * @public
   */
  destinationArn: string | undefined;

  /**
   * Log type of the service network.
   *
   * @public
   */
  serviceNetworkLogType?: ServiceNetworkLogType | undefined;

  /**
   * The date and time that the access log subscription was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the access log subscription was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessLogSubscriptionsResponse {
  /**
   * Information about the access log subscriptions.
   *
   * @public
   */
  items: AccessLogSubscriptionSummary[] | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessLogSubscriptionRequest {
  /**
   * The ID or ARN of the access log subscription.
   *
   * @public
   */
  accessLogSubscriptionIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access log destination.
   *
   * @public
   */
  destinationArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessLogSubscriptionResponse {
  /**
   * The ID of the access log subscription.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access log subscription.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access log subscription.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access log destination.
   *
   * @public
   */
  destinationArn: string | undefined;
}

/**
 * The Amazon Resource Name (ARN) of the resource.
 *
 * @public
 */
export interface ArnResource {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * Describes an action that returns a custom HTTP response.
 *
 * @public
 */
export interface FixedResponseAction {
  /**
   * The HTTP response code. Only `404` and `500` status codes are supported.
   *
   * @public
   */
  statusCode: number | undefined;
}

/**
 * Describes the weight of a target group.
 *
 * @public
 */
export interface WeightedTargetGroup {
  /**
   * The ID or ARN of the target group.
   *
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * Only required if you specify multiple target groups for a forward action. The weight determines how requests are distributed to the target group. For example, if you specify two target groups, each with a weight of 10, each target group receives half the requests. If you specify two target groups, one with a weight of 10 and the other with a weight of 20, the target group with a weight of 20 receives twice as many requests as the other target group. If there's only one target group specified, then the default value is 100.
   *
   * @public
   */
  weight?: number | undefined;
}

/**
 * Describes a forward action. You can use forward actions to route requests to one or more target groups.
 *
 * @public
 */
export interface ForwardAction {
  /**
   * The target groups. Traffic matching the rule is forwarded to the specified target groups. With forward actions, you can assign a weight that controls the prioritization and selection of each target group. This means that requests are distributed to individual target groups based on their weights. For example, if two target groups have the same weight, each target group receives half of the traffic.
   *
   * The default value is 1. This means that if only one target group is provided, there is no need to set the weight; 100% of the traffic goes to that target group.
   *
   * @public
   */
  targetGroups: WeightedTargetGroup[] | undefined;
}

/**
 * Describes the action for a rule.
 *
 * @public
 */
export type RuleAction =
  | RuleAction.FixedResponseMember
  | RuleAction.ForwardMember
  | RuleAction.$UnknownMember;

/**
 * @public
 */
export namespace RuleAction {
  /**
   * The forward action. Traffic that matches the rule is forwarded to the specified target groups.
   *
   * @public
   */
  export interface ForwardMember {
    forward: ForwardAction;
    fixedResponse?: never;
    $unknown?: never;
  }

  /**
   * The fixed response action. The rule returns a custom HTTP response.
   *
   * @public
   */
  export interface FixedResponseMember {
    forward?: never;
    fixedResponse: FixedResponseAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    forward?: never;
    fixedResponse?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    forward: (value: ForwardAction) => T;
    fixedResponse: (value: FixedResponseAction) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Describes a header match type.
 *
 * @public
 */
export type HeaderMatchType =
  | HeaderMatchType.ContainsMember
  | HeaderMatchType.ExactMember
  | HeaderMatchType.PrefixMember
  | HeaderMatchType.$UnknownMember;

/**
 * @public
 */
export namespace HeaderMatchType {
  /**
   * An exact type match.
   *
   * @public
   */
  export interface ExactMember {
    exact: string;
    prefix?: never;
    contains?: never;
    $unknown?: never;
  }

  /**
   * A prefix type match. Matches the value with the prefix.
   *
   * @public
   */
  export interface PrefixMember {
    exact?: never;
    prefix: string;
    contains?: never;
    $unknown?: never;
  }

  /**
   * A contains type match.
   *
   * @public
   */
  export interface ContainsMember {
    exact?: never;
    prefix?: never;
    contains: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    exact?: never;
    prefix?: never;
    contains?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    exact: (value: string) => T;
    prefix: (value: string) => T;
    contains: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Describes the constraints for a header match. Matches incoming requests with rule based on request header value before applying rule action.
 *
 * @public
 */
export interface HeaderMatch {
  /**
   * The name of the header.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The header match type.
   *
   * @public
   */
  match: HeaderMatchType | undefined;

  /**
   * Indicates whether the match is case sensitive.
   *
   * @public
   */
  caseSensitive?: boolean | undefined;
}

/**
 * Describes a path match type. Each rule can include only one of the following types of paths.
 *
 * @public
 */
export type PathMatchType =
  | PathMatchType.ExactMember
  | PathMatchType.PrefixMember
  | PathMatchType.$UnknownMember;

/**
 * @public
 */
export namespace PathMatchType {
  /**
   * An exact match of the path.
   *
   * @public
   */
  export interface ExactMember {
    exact: string;
    prefix?: never;
    $unknown?: never;
  }

  /**
   * A prefix match of the path.
   *
   * @public
   */
  export interface PrefixMember {
    exact?: never;
    prefix: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    exact?: never;
    prefix?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    exact: (value: string) => T;
    prefix: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Describes the conditions that can be applied when matching a path for incoming requests.
 *
 * @public
 */
export interface PathMatch {
  /**
   * The type of path match.
   *
   * @public
   */
  match: PathMatchType | undefined;

  /**
   * Indicates whether the match is case sensitive.
   *
   * @public
   */
  caseSensitive?: boolean | undefined;
}

/**
 * Describes criteria that can be applied to incoming requests.
 *
 * @public
 */
export interface HttpMatch {
  /**
   * The HTTP method type.
   *
   * @public
   */
  method?: string | undefined;

  /**
   * The path match.
   *
   * @public
   */
  pathMatch?: PathMatch | undefined;

  /**
   * The header matches. Matches incoming requests with rule based on request header value before applying rule action.
   *
   * @public
   */
  headerMatches?: HeaderMatch[] | undefined;
}

/**
 * Describes a rule match.
 *
 * @public
 */
export type RuleMatch =
  | RuleMatch.HttpMatchMember
  | RuleMatch.$UnknownMember;

/**
 * @public
 */
export namespace RuleMatch {
  /**
   * The HTTP criteria that a rule must match.
   *
   * @public
   */
  export interface HttpMatchMember {
    httpMatch: HttpMatch;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    httpMatch?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    httpMatch: (value: HttpMatch) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Describes a rule update.
 *
 * @public
 */
export interface RuleUpdate {
  /**
   * The ID or ARN of the rule.
   *
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * The rule match.
   *
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * The rule priority. A listener can't have multiple rules with the same priority.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The rule action.
   *
   * @public
   */
  action?: RuleAction | undefined;
}

/**
 * @public
 */
export interface BatchUpdateRuleRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The ID or ARN of the listener.
   *
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * The rules for the specified listener.
   *
   * @public
   */
  rules: RuleUpdate[] | undefined;
}

/**
 * Describes a successful rule update.
 *
 * @public
 */
export interface RuleUpdateSuccess {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the listener.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the listener.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Indicates whether this is the default rule.
   *
   * @public
   */
  isDefault?: boolean | undefined;

  /**
   * The rule match.
   *
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * The rule priority.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The action for the rule.
   *
   * @public
   */
  action?: RuleAction | undefined;
}

/**
 * Describes a rule update that failed.
 *
 * @public
 */
export interface RuleUpdateFailure {
  /**
   * The ID or ARN of the rule.
   *
   * @public
   */
  ruleIdentifier?: string | undefined;

  /**
   * The failure code.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * The failure message.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateRuleResponse {
  /**
   * The rules that were successfully updated.
   *
   * @public
   */
  successful?: RuleUpdateSuccess[] | undefined;

  /**
   * The rules that the operation couldn't update.
   *
   * @public
   */
  unsuccessful?: RuleUpdateFailure[] | undefined;
}

/**
 * Describes a CIDR resource, which represents a network segment as one or more CIDR ranges.
 *
 * @public
 */
export interface CidrResource {
  /**
   * The CIDR ranges of the network segment, for example, `10.0.0.0/16`.
   *
   * @public
   */
  cidrRanges?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateListenerRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The name of the listener. A listener name must be unique within a service. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The listener protocol.
   *
   * @public
   */
  protocol: ListenerProtocol | undefined;

  /**
   * The listener port. You can specify a value from 1 to 65535. For HTTP, the default is 80. For HTTPS, the default is 443.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The action for the default rule. Each listener has a default rule. The default rule is used if no other rules match.
   *
   * @public
   */
  defaultAction: RuleAction | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags for the listener.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateListenerResponse {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the listener.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the listener.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The protocol of the listener.
   *
   * @public
   */
  protocol?: ListenerProtocol | undefined;

  /**
   * The port number of the listener.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  serviceId?: string | undefined;

  /**
   * The action for the default rule.
   *
   * @public
   */
  defaultAction?: RuleAction | undefined;
}

/**
 * The DNS name of the resource.
 *
 * @public
 */
export interface DnsResource {
  /**
   * The domain name of the resource.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The type of IP address. Dualstack is currently not supported.
   *
   * @public
   */
  ipAddressType?: ResourceConfigurationIpAddressType | undefined;
}

/**
 * Describes an IP resource.
 *
 * @public
 */
export interface IpResource {
  /**
   * The IP address of the IP resource.
   *
   * @public
   */
  ipAddress?: string | undefined;
}

/**
 * Describes a resource configuration.
 *
 * @public
 */
export type ResourceConfigurationDefinition =
  | ResourceConfigurationDefinition.ArnResourceMember
  | ResourceConfigurationDefinition.CidrResourceMember
  | ResourceConfigurationDefinition.DnsResourceMember
  | ResourceConfigurationDefinition.IpResourceMember
  | ResourceConfigurationDefinition.$UnknownMember;

/**
 * @public
 */
export namespace ResourceConfigurationDefinition {
  /**
   * The DNS name of the resource.
   *
   * @public
   */
  export interface DnsResourceMember {
    dnsResource: DnsResource;
    ipResource?: never;
    arnResource?: never;
    cidrResource?: never;
    $unknown?: never;
  }

  /**
   * The IP resource.
   *
   * @public
   */
  export interface IpResourceMember {
    dnsResource?: never;
    ipResource: IpResource;
    arnResource?: never;
    cidrResource?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  export interface ArnResourceMember {
    dnsResource?: never;
    ipResource?: never;
    arnResource: ArnResource;
    cidrResource?: never;
    $unknown?: never;
  }

  /**
   * The network segment for a resource configuration of type CIDR, specified as one or more CIDR ranges (`cidrRanges`). Resources whose IP addresses fall within these ranges are reachable through a `Tunnel` VPC endpoint.
   *
   * @public
   */
  export interface CidrResourceMember {
    dnsResource?: never;
    ipResource?: never;
    arnResource?: never;
    cidrResource: CidrResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dnsResource?: never;
    ipResource?: never;
    arnResource?: never;
    cidrResource?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    dnsResource: (value: DnsResource) => T;
    ipResource: (value: IpResource) => T;
    arnResource: (value: ArnResource) => T;
    cidrResource: (value: CidrResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateResourceConfigurationRequest {
  /**
   * The name of the resource configuration. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of resource configuration. A resource configuration can be one of the following types:
   *
   * - **SINGLE** - A single resource.
   * - **GROUP** - A group of resources. You must create a group resource configuration before you create a child resource configuration.
   * - **CHILD** - A single resource that is part of a group resource configuration.
   * - **ARN** - An Amazon Web Services resource.
   * - **CIDR** - A network segment, expressed as a range of IP addresses (a CIDR block). Use this type to share a portion of your network rather than an individual resource. A consumer accesses the resources within the CIDR range through a `Tunnel` VPC endpoint. You can't add a CIDR resource configuration to a service network. A CIDR resource configuration must be associated with a resource gateway whose DNS resolution is set to `IN_VPC`.
   *
   * @public
   */
  type: ResourceConfigurationType | undefined;

  /**
   * (SINGLE, GROUP, CHILD, CIDR) The port ranges that a consumer can use to access a resource configuration (for example: 1-65535). You can separate port ranges using commas (for example: 1,2,22-30). To resolve DNS through a CIDR resource configuration, include port 53 in the port ranges.
   *
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * (SINGLE, GROUP, CIDR) The protocol accepted by the resource configuration. The default is `TCP`. `TCP_UDP` is supported only for CIDR resource configurations; specify it for a CIDR resource configuration to allow DNS resolution, which uses UDP.
   *
   * @public
   */
  protocol?: ProtocolType | undefined;

  /**
   * (SINGLE, GROUP, ARN, CIDR) The ID or ARN of the resource gateway used to connect to the resource configuration. For a child resource configuration, this value is inherited from the parent resource configuration. For a CIDR resource configuration, the associated resource gateway must have its DNS resolution set to `IN_VPC` so that DNS queries resolve in the context of your VPC.
   *
   * @public
   */
  resourceGatewayIdentifier?: string | undefined;

  /**
   * (CHILD) The ID or ARN of the parent resource configuration of type `GROUP`. This is used to associate a child resource configuration with a group resource configuration.
   *
   * @public
   */
  resourceConfigurationGroupIdentifier?: string | undefined;

  /**
   * Identifies the resource configuration in one of the following ways:
   *
   * - **Amazon Resource Name (ARN)** - Supported resource-types that are provisioned by Amazon Web Services services, such as RDS databases, can be identified by their ARN.
   * - **Domain name** - Any domain name that is publicly resolvable.
   * - **IP address** - For IPv4 and IPv6, only IP addresses in the VPC are supported.
   * - **CIDR range** - For a resource configuration of type CIDR, specify a `cidrResource` with one or more `cidrRanges` (for example, `10.0.0.0/16`) that cover the IP addresses of the resources you want to make accessible. You can specify up to 10 ranges, using IPv4, IPv6, or both, and each range must include a prefix length. To represent your entire network, specify `0.0.0.0/0` (IPv4) or `::/0` (IPv6) as the only range. You can't use reserved ranges such as `169.254.0.0/16`, `100.64.0.0/10`, `224.0.0.0/4`, `fe80::/10`, or `ff00::/8`.
   *
   * @public
   */
  resourceConfigurationDefinition?: ResourceConfigurationDefinition | undefined;

  /**
   * (SINGLE, GROUP, ARN) Specifies whether the resource configuration can be associated with a sharable service network. The default is false.
   *
   * @public
   */
  allowAssociationToShareableServiceNetwork?: boolean | undefined;

  /**
   * A custom domain name for your resource configuration. Additionally, provide a DomainVerificationID to prove your ownership of a domain.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * (GROUP) The group domain for a group resource configuration. Any domains that you create for the child resource are subdomains of the group domain. Child resources inherit the verification status of the domain.
   *
   * @public
   */
  groupDomain?: string | undefined;

  /**
   * The domain verification ID of your verified custom domain name. If you don't provide an ID, you must configure the DNS settings yourself.
   *
   * @public
   */
  domainVerificationIdentifier?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags for the resource configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateResourceConfigurationResponse {
  /**
   * The ID of the resource configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the resource configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the resource gateway associated with the resource configuration.
   *
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * The ID of the parent resource configuration of type `GROUP`.
   *
   * @public
   */
  resourceConfigurationGroupId?: string | undefined;

  /**
   * The type of resource configuration. A resource configuration can be one of the following types:
   *
   * - **SINGLE** - A single resource.
   * - **GROUP** - A group of resources. You must create a group resource configuration before you create a child resource configuration.
   * - **CHILD** - A single resource that is part of a group resource configuration.
   * - **ARN** - An Amazon Web Services resource.
   * - **CIDR** - A network segment, expressed as a range of IP addresses (a CIDR block). A consumer accesses the resources within the CIDR range through a `Tunnel` VPC endpoint. A CIDR resource configuration must be associated with a resource gateway whose DNS resolution is set to `IN_VPC`.
   *
   * @public
   */
  type?: ResourceConfigurationType | undefined;

  /**
   * The port range.
   *
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * The protocol.
   *
   * @public
   */
  protocol?: ProtocolType | undefined;

  /**
   * The current status of the resource configuration.
   *
   * @public
   */
  status?: ResourceConfigurationStatus | undefined;

  /**
   * Identifies the resource configuration in one of the following ways:
   *
   * - **Amazon Resource Name (ARN)** - Supported resource-types that are provisioned by Amazon Web Services services, such as RDS databases, can be identified by their ARN.
   * - **Domain name** - Any domain name that is publicly resolvable.
   * - **IP address** - For IPv4 and IPv6, only IP addresses in the VPC are supported.
   *
   * @public
   */
  resourceConfigurationDefinition?: ResourceConfigurationDefinition | undefined;

  /**
   * Specifies whether the resource configuration can be associated with a sharable service network.
   *
   * @public
   */
  allowAssociationToShareableServiceNetwork?: boolean | undefined;

  /**
   * The date and time that the resource configuration was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The reason that the request failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The custom domain name for your resource configuration.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The domain name verification ID.
   *
   * @public
   */
  domainVerificationId?: string | undefined;

  /**
   * (GROUP) The group domain for a group resource configuration. Any domains that you create for the child resource are subdomains of the group domain. Child resources inherit the verification status of the domain.
   *
   * @public
   */
  groupDomain?: string | undefined;

  /**
   * The verification ID ARN
   *
   * @public
   */
  domainVerificationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceGatewayRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the resource gateway.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the VPC for the resource gateway.
   *
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * The IDs of the VPC subnets in which to create the resource gateway.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The IDs of the security groups to apply to the resource gateway. The security groups must be in the same VPC.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * A resource gateway can have IPv4, IPv6 or dualstack addresses. The IP address type of a resource gateway must be compatible with the subnets of the resource gateway and the IP address type of the resource, as described here:
   *
   * - **IPv4**Assign IPv4 addresses to your resource gateway network interfaces. This option is supported only if all selected subnets have IPv4 address ranges, and the resource also has an IPv4 address.
   * - **IPv6**Assign IPv6 addresses to your resource gateway network interfaces. This option is supported only if all selected subnets are IPv6 only subnets, and the resource also has an IPv6 address.
   * - **Dualstack**Assign both IPv4 and IPv6 addresses to your resource gateway network interfaces. This option is supported only if all selected subnets have both IPv4 and IPv6 address ranges, and the resource either has an IPv4 or IPv6 address.
   *
   * The IP address type of the resource gateway is independent of the IP address type of the client or the VPC endpoint through which the resource is accessed.
   *
   * @public
   */
  ipAddressType?: ResourceGatewayIpAddressType | undefined;

  /**
   * The number of IPv4 addresses in each ENI for the resource gateway.
   *
   * @public
   */
  ipv4AddressesPerEni?: number | undefined;

  /**
   * Indicates how DNS is resolved for resource configurations associated with this resource gateway. This value is set when you create the resource gateway and can't be changed afterward. The default is `PUBLIC`.
   *
   * - `IN_VPC` - DNS resolution occurs privately within the resource gateway's VPC. DNS queries for resources behind this resource gateway resolve using the DNS resolvers defined in the VPC's DHCP option sets. Use this when your resource domain names are hosted in private Route 53 hosted zones or on-premises DNS servers reachable from the VPC. A CIDR resource configuration requires a resource gateway that uses `IN_VPC`, and an `IN_VPC` resource gateway can't be used for ARN resource configurations, so a single resource gateway can't serve both ARN and CIDR resource configurations.
   * - `PUBLIC` - DNS resolution occurs against public DNS resolvers. DNS queries for resources behind this resource gateway resolve using standard public DNS. Use this when your resource domain names are publicly resolvable.
   *
   * @public
   */
  resourceConfigDnsResolution?: ResourceConfigDnsResolution | undefined;

  /**
   * The tags for the resource gateway.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateResourceGatewayResponse {
  /**
   * The name of the resource gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the resource gateway.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource gateway.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the resource gateway.
   *
   * @public
   */
  status?: ResourceGatewayStatus | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * The IDs of the resource gateway subnets.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The IDs of the security groups for the resource gateway.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The type of IP address for the resource gateway.
   *
   * @public
   */
  ipAddressType?: ResourceGatewayIpAddressType | undefined;

  /**
   * The number of IPv4 addresses in each ENI for the resource gateway.
   *
   * @public
   */
  ipv4AddressesPerEni?: number | undefined;

  /**
   * The DNS resolution type for resource configurations that are associated with this resource gateway.
   *
   * @public
   */
  resourceConfigDnsResolution?: ResourceConfigDnsResolution | undefined;
}

/**
 * @public
 */
export interface CreateRuleRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The ID or ARN of the listener.
   *
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * The name of the rule. The name must be unique within the listener. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The rule match.
   *
   * @public
   */
  match: RuleMatch | undefined;

  /**
   * The priority assigned to the rule. Each rule for a specific listener must have a unique priority. The lower the priority number the higher the priority.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The action for the default rule.
   *
   * @public
   */
  action: RuleAction | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags for the rule.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the rule.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The rule match. The `RuleMatch` must be an `HttpMatch`. This means that the rule should be an exact match on HTTP constraints which are made up of the HTTP method, path, and header.
   *
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * The priority assigned to the rule. The lower the priority number the higher the priority.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The rule action.
   *
   * @public
   */
  action?: RuleAction | undefined;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the service. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The tags for the service.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The custom domain name of the service.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The type of IAM policy.
   *
   * - `NONE`: The resource does not use an IAM policy. This is the default.
   * - `AWS_IAM`: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.
   *
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * The amount of time, in seconds, that a connection can remain idle (no data sent) before VPC Lattice closes it. The valid range is 60 to 600 seconds. If you don't specify a value, the default is 60 seconds. This setting does not change the maximum connection duration of 10 minutes; connections are still closed when they reach that limit.
   *
   * @public
   */
  idleTimeoutSeconds?: number | undefined;
}

/**
 * Describes the DNS information of a service.
 *
 * @public
 */
export interface DnsEntry {
  /**
   * The domain name of the service.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The ID of the hosted zone.
   *
   * @public
   */
  hostedZoneId?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceResponse {
  /**
   * The ID of the service.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The custom domain name of the service.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The status. If the status is `CREATE_FAILED`, you must delete and recreate the service.
   *
   * @public
   */
  status?: ServiceStatus | undefined;

  /**
   * The type of IAM policy.
   *
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * The amount of time, in seconds, that a connection can remain idle before VPC Lattice closes it.
   *
   * @public
   */
  idleTimeoutSeconds?: number | undefined;

  /**
   * The public DNS name of the service.
   *
   * @public
   */
  dnsEntry?: DnsEntry | undefined;
}

/**
 * Specifies if the service network should be enabled for sharing.
 *
 * @public
 */
export interface SharingConfig {
  /**
   * Specifies if the service network is enabled for sharing.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the service network. The name must be unique to the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of IAM policy.
   *
   * - `NONE`: The resource does not use an IAM policy. This is the default.
   * - `AWS_IAM`: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.
   *
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * The tags for the service network.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specify if the service network should be enabled for sharing.
   *
   * @public
   */
  sharingConfig?: SharingConfig | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkResponse {
  /**
   * The ID of the service network.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the service network.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Specifies if the service network is enabled for sharing.
   *
   * @public
   */
  sharingConfig?: SharingConfig | undefined;

  /**
   * The type of IAM policy.
   *
   * @public
   */
  authType?: AuthType | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkResourceAssociationRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID of the resource configuration to associate with the service network.
   *
   * @public
   */
  resourceConfigurationIdentifier: string | undefined;

  /**
   * The ID of the service network to associate with the resource configuration.
   *
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * Indicates if private DNS is enabled for the service network resource association.
   *
   * @public
   */
  privateDnsEnabled?: boolean | undefined;

  /**
   * A key-value pair to associate with a resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkResourceAssociationResponse {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the association.
   *
   * @public
   */
  status?: ServiceNetworkResourceAssociationStatus | undefined;

  /**
   * The ID of the account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * Indicates if private DNS is is enabled for the service network resource association.
   *
   * @public
   */
  privateDnsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkServiceAssociationRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The ID or ARN of the service network. You must use an ARN if the resources are in different accounts.
   *
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * The tags for the association.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkServiceAssociationResponse {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The association status.
   *
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The custom domain name of the service.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The DNS name of the service.
   *
   * @public
   */
  dnsEntry?: DnsEntry | undefined;
}

/**
 * The DNS configuration options.
 *
 * @public
 */
export interface DnsOptions {
  /**
   * The preference for which private domains have a private hosted zone created for and associated with the specified VPC. Only supported when private DNS is enabled and when the VPC endpoint type is ServiceNetwork or Resource.
   *
   * - `ALL_DOMAINS` - VPC Lattice provisions private hosted zones for all custom domain names.
   * - `VERIFIED_DOMAINS_ONLY` - VPC Lattice provisions a private hosted zone only if custom domain name has been verified by the provider.
   * - `VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS` - VPC Lattice provisions private hosted zones for all verified custom domain names and other domain names that the resource consumer specifies. The resource consumer specifies the domain names in the privateDnsSpecifiedDomains parameter.
   * - `SPECIFIED_DOMAINS_ONLY` - VPC Lattice provisions a private hosted zone for domain names specified by the resource consumer. The resource consumer specifies the domain names in the privateDnsSpecifiedDomains parameter.
   *
   * @public
   */
  privateDnsPreference?: PrivateDnsPreference | undefined;

  /**
   * Indicates which of the private domains to create private hosted zones for and associate with the specified VPC. Only supported when private DNS is enabled and the private DNS preference is `VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS` or `SPECIFIED_DOMAINS_ONLY`.
   *
   * @public
   */
  privateDnsSpecifiedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkVpcAssociationRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID or ARN of the service network. You must use an ARN if the resources are in different accounts.
   *
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  vpcIdentifier: string | undefined;

  /**
   * Indicates if private DNS is enabled for the VPC association.
   *
   * @public
   */
  privateDnsEnabled?: boolean | undefined;

  /**
   * The IDs of the security groups. Security groups aren't added by default. You can add a security group to apply network level controls to control which resources in a VPC are allowed to access the service network and its services. For more information, see [Control traffic to resources using security groups](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the *Amazon VPC User Guide*.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The tags for the association.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * DNS options for the service network VPC association.
   *
   * @public
   */
  dnsOptions?: DnsOptions | undefined;
}

/**
 * @public
 */
export interface CreateServiceNetworkVpcAssociationResponse {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The association status.
   *
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The IDs of the security groups.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * Indicates if private DNS is enabled for the VPC association.
   *
   * @public
   */
  privateDnsEnabled?: boolean | undefined;

  /**
   * The DNS configuration options.
   *
   * @public
   */
  dnsOptions?: DnsOptions | undefined;
}

/**
 * Describes the codes to use when checking for a successful response from a target for health checks.
 *
 * @public
 */
export type Matcher =
  | Matcher.HttpCodeMember
  | Matcher.$UnknownMember;

/**
 * @public
 */
export namespace Matcher {
  /**
   * The HTTP code to use when checking for a successful response from a target.
   *
   * @public
   */
  export interface HttpCodeMember {
    httpCode: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    httpCode?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    httpCode: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Describes the health check configuration of a target group. Health check configurations aren't used for target groups of type `LAMBDA` or `ALB`.
 *
 * @public
 */
export interface HealthCheckConfig {
  /**
   * Indicates whether health checking is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The protocol used when performing health checks on targets. The possible protocols are `HTTP` and `HTTPS`. The default is `HTTP`.
   *
   * @public
   */
  protocol?: TargetGroupProtocol | undefined;

  /**
   * The protocol version used when performing health checks on targets. The possible protocol versions are `HTTP1` and `HTTP2`.
   *
   * @public
   */
  protocolVersion?: HealthCheckProtocolVersion | undefined;

  /**
   * The port used when performing health checks on targets. The default setting is the port that a target receives traffic on.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The destination for health checks on the targets. If the protocol version is `HTTP/1.1` or `HTTP/2`, specify a valid URI (for example, `/path?query`). The default path is `/`. Health checks are not supported if the protocol version is `gRPC`, however, you can choose `HTTP/1.1` or `HTTP/2` and specify a valid URI.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The approximate amount of time, in seconds, between health checks of an individual target. The range is 5–300 seconds. The default is 30 seconds.
   *
   * @public
   */
  healthCheckIntervalSeconds?: number | undefined;

  /**
   * The amount of time, in seconds, to wait before reporting a target as unhealthy. The range is 1–120 seconds. The default is 5 seconds.
   *
   * @public
   */
  healthCheckTimeoutSeconds?: number | undefined;

  /**
   * The number of consecutive successful health checks required before considering an unhealthy target healthy. The range is 2–10. The default is 5.
   *
   * @public
   */
  healthyThresholdCount?: number | undefined;

  /**
   * The number of consecutive failed health checks required before considering a target unhealthy. The range is 2–10. The default is 2.
   *
   * @public
   */
  unhealthyThresholdCount?: number | undefined;

  /**
   * The codes to use when checking for a successful response from a target.
   *
   * @public
   */
  matcher?: Matcher | undefined;
}

/**
 * Describes the configuration of a target group.
 *
 * For more information, see [Target groups](https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html) in the *Amazon VPC Lattice User Guide*.
 *
 * @public
 */
export interface TargetGroupConfig {
  /**
   * The port on which the targets are listening. For HTTP, the default is 80. For HTTPS, the default is 443. Not supported if the target group type is `LAMBDA`.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The protocol to use for routing traffic to the targets. The default is the protocol of the target group. Not supported if the target group type is `LAMBDA`.
   *
   * @public
   */
  protocol?: TargetGroupProtocol | undefined;

  /**
   * The protocol version. The default is `HTTP1`. Not supported if the target group type is `LAMBDA`.
   *
   * @public
   */
  protocolVersion?: TargetGroupProtocolVersion | undefined;

  /**
   * The type of IP address used for the target group. Supported only if the target group type is `IP`. The default is `IPV4`.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * The ID of the VPC. Not supported if the target group type is `LAMBDA`.
   *
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * The health check configuration. Not supported if the target group type is `LAMBDA` or `ALB`.
   *
   * @public
   */
  healthCheck?: HealthCheckConfig | undefined;

  /**
   * The version of the event structure that your Lambda function receives. Supported only if the target group type is `LAMBDA`. The default is `V1`.
   *
   * @public
   */
  lambdaEventStructureVersion?: LambdaEventStructureVersion | undefined;
}

/**
 * @public
 */
export interface CreateTargetGroupRequest {
  /**
   * The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of target group.
   *
   * @public
   */
  type: TargetGroupType | undefined;

  /**
   * The target group configuration.
   *
   * @public
   */
  config?: TargetGroupConfig | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags for the target group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTargetGroupResponse {
  /**
   * The ID of the target group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the target group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of target group.
   *
   * @public
   */
  type?: TargetGroupType | undefined;

  /**
   * The target group configuration.
   *
   * @public
   */
  config?: TargetGroupConfig | undefined;

  /**
   * The status. You can retry the operation if the status is `CREATE_FAILED`. However, if you retry it while the status is `CREATE_IN_PROGRESS`, there is no change in the status.
   *
   * @public
   */
  status?: TargetGroupStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAuthPolicyRequest {
  /**
   * The ID or ARN of the resource.
   *
   * @public
   */
  resourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAuthPolicyResponse {}

/**
 * @public
 */
export interface DeleteDomainVerificationRequest {
  /**
   * The ID of the domain verification to delete.
   *
   * @public
   */
  domainVerificationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainVerificationResponse {}

/**
 * @public
 */
export interface DeleteListenerRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The ID or ARN of the listener.
   *
   * @public
   */
  listenerIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteListenerResponse {}

/**
 * @public
 */
export interface DeleteResourceConfigurationRequest {
  /**
   * The ID or ARN of the resource configuration.
   *
   * @public
   */
  resourceConfigurationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceConfigurationResponse {}

/**
 * @public
 */
export interface DeleteResourceEndpointAssociationRequest {
  /**
   * The ID or ARN of the association.
   *
   * @public
   */
  resourceEndpointAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceEndpointAssociationResponse {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the resource configuration.
   *
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource configuration associated with the VPC endpoint of type resource.
   *
   * @public
   */
  resourceConfigurationArn?: string | undefined;

  /**
   * The ID of the resource VPC endpoint that is associated with the resource configuration.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceGatewayRequest {
  /**
   * The ID or ARN of the resource gateway.
   *
   * @public
   */
  resourceGatewayIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceGatewayResponse {
  /**
   * The ID of the resource gateway.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource gateway.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the resource gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of the resource gateway.
   *
   * @public
   */
  status?: ResourceGatewayStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The ID or ARN of the listener.
   *
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * The ID or ARN of the rule.
   *
   * @public
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleResponse {}

/**
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceResponse {
  /**
   * The ID of the service.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status. You can retry the operation if the status is `DELETE_FAILED`. However, if you retry it while the status is `DELETE_IN_PROGRESS`, the status doesn't change.
   *
   * @public
   */
  status?: ServiceStatus | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkRequest {
  /**
   * The ID or ARN of the service network.
   *
   * @public
   */
  serviceNetworkIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkResponse {}

/**
 * @public
 */
export interface DeleteServiceNetworkResourceAssociationRequest {
  /**
   * The ID of the association.
   *
   * @public
   */
  serviceNetworkResourceAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkResourceAssociationResponse {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the association.
   *
   * @public
   */
  status?: ServiceNetworkResourceAssociationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkServiceAssociationRequest {
  /**
   * The ID or ARN of the association.
   *
   * @public
   */
  serviceNetworkServiceAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkServiceAssociationResponse {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status. You can retry the operation if the status is `DELETE_FAILED`. However, if you retry it when the status is `DELETE_IN_PROGRESS`, there is no change in the status.
   *
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkVpcAssociationRequest {
  /**
   * The ID or ARN of the association.
   *
   * @public
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceNetworkVpcAssociationResponse {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status. You can retry the operation if the status is `DELETE_FAILED`. However, if you retry it while the status is `DELETE_IN_PROGRESS`, there is no change in the status.
   *
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTargetGroupRequest {
  /**
   * The ID or ARN of the target group.
   *
   * @public
   */
  targetGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTargetGroupResponse {
  /**
   * The ID of the target group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status. You can retry the operation if the status is `DELETE_FAILED`. However, if you retry it while the status is `DELETE_IN_PROGRESS`, the status doesn't change.
   *
   * @public
   */
  status?: TargetGroupStatus | undefined;
}

/**
 * Describes a target.
 *
 * @public
 */
export interface Target {
  /**
   * The ID of the target. If the target group type is `INSTANCE`, this is an instance ID. If the target group type is `IP`, this is an IP address. If the target group type is `LAMBDA`, this is the ARN of a Lambda function. If the target group type is `ALB`, this is the ARN of an Application Load Balancer.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The port on which the target is listening. For HTTP, the default is 80. For HTTPS, the default is 443.
   *
   * @public
   */
  port?: number | undefined;
}

/**
 * @public
 */
export interface DeregisterTargetsRequest {
  /**
   * The ID or ARN of the target group.
   *
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * The targets to deregister.
   *
   * @public
   */
  targets: Target[] | undefined;
}

/**
 * Describes a target failure.
 *
 * @public
 */
export interface TargetFailure {
  /**
   * The ID of the target. If the target group type is `INSTANCE`, this is an instance ID. If the target group type is `IP`, this is an IP address. If the target group type is `LAMBDA`, this is the ARN of a Lambda function. If the target group type is `ALB`, this is the ARN of an Application Load Balancer.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The port on which the target is listening. This parameter doesn't apply if the target is a Lambda function.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The failure code.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * The failure message.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTargetsResponse {
  /**
   * The targets that were successfully deregistered.
   *
   * @public
   */
  successful?: Target[] | undefined;

  /**
   * The targets that the operation couldn't deregister.
   *
   * @public
   */
  unsuccessful?: TargetFailure[] | undefined;
}

/**
 * @public
 */
export interface GetDomainVerificationRequest {
  /**
   * The ID or ARN of the domain verification to retrieve.
   *
   * @public
   */
  domainVerificationIdentifier: string | undefined;
}

/**
 * Configuration for TXT record-based domain verification method.
 *
 * @public
 */
export interface TxtMethodConfig {
  /**
   * The value that must be added to the TXT record for domain verification.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The name of the TXT record that must be created for domain verification.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDomainVerificationResponse {
  /**
   * The ID of the domain verification.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain verification.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The domain name being verified.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The current status of the domain verification process.
   *
   * @public
   */
  status: VerificationStatus | undefined;

  /**
   * The TXT record configuration used for domain verification.
   *
   * @public
   */
  txtMethodConfig?: TxtMethodConfig | undefined;

  /**
   * The date and time that the domain verification was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the domain was last successfully verified, in ISO-8601 format.
   *
   * @public
   */
  lastVerifiedTime?: Date | undefined;

  /**
   * The tags associated with the domain verification.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDomainVerificationsRequest {
  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a domain verification.
 *
 * @public
 */
export interface DomainVerificationSummary {
  /**
   * The ID of the domain verification.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain verification.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The domain name being verified.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The current status of the domain verification process.
   *
   * @public
   */
  status: VerificationStatus | undefined;

  /**
   * The TXT record configuration used for domain verification.
   *
   * @public
   */
  txtMethodConfig?: TxtMethodConfig | undefined;

  /**
   * The date and time that the domain verification was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the domain was last successfully verified, in ISO-8601 format.
   *
   * @public
   */
  lastVerifiedTime?: Date | undefined;

  /**
   * The tags associated with the domain verification.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDomainVerificationsResponse {
  /**
   * Information about the domain verifications.
   *
   * @public
   */
  items: DomainVerificationSummary[] | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDomainVerificationRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The domain name to verify ownership for.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The tags for the domain verification.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartDomainVerificationResponse {
  /**
   * The ID of the domain verification.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain verification.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The domain name being verified.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The current status of the domain verification process.
   *
   * @public
   */
  status: VerificationStatus | undefined;

  /**
   * The TXT record configuration used for domain verification.
   *
   * @public
   */
  txtMethodConfig?: TxtMethodConfig | undefined;
}

/**
 * @public
 */
export interface GetAuthPolicyRequest {
  /**
   * The ID or ARN of the service network or service.
   *
   * @public
   */
  resourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAuthPolicyResponse {
  /**
   * The auth policy.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * The state of the auth policy. The auth policy is only active when the auth type is set to `AWS_IAM`. If you provide a policy, then authentication and authorization decisions are made based on this policy and the client's IAM policy. If the auth type is `NONE`, then any auth policy that you provide remains inactive. For more information, see [Create a service network](https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#create-service-network) in the *Amazon VPC Lattice User Guide*.
   *
   * @public
   */
  state?: AuthPolicyState | undefined;

  /**
   * The date and time that the auth policy was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the auth policy was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetListenerRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The ID or ARN of the listener.
   *
   * @public
   */
  listenerIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetListenerResponse {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the listener.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the listener.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The listener protocol.
   *
   * @public
   */
  protocol?: ListenerProtocol | undefined;

  /**
   * The listener port.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  serviceId?: string | undefined;

  /**
   * The actions for the default listener rule.
   *
   * @public
   */
  defaultAction?: RuleAction | undefined;

  /**
   * The date and time that the listener was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the listener was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourceConfigurationRequest {
  /**
   * The ID of the resource configuration.
   *
   * @public
   */
  resourceConfigurationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourceConfigurationResponse {
  /**
   * The ID of the resource configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the resource configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the resource gateway used to connect to the resource configuration in a given VPC. You can specify the resource gateway identifier only for resource configurations with type SINGLE, GROUP, ARN, or CIDR.
   *
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * The ID of the group resource configuration.
   *
   * @public
   */
  resourceConfigurationGroupId?: string | undefined;

  /**
   * The type of resource configuration.
   *
   * - `SINGLE` - A single resource.
   * - `GROUP` - A group of resources.
   * - `CHILD` - A single resource that is part of a group resource configuration.
   * - `ARN` - An Amazon Web Services resource.
   * - `CIDR` - A network segment (a range of IP addresses) accessed through a `Tunnel` VPC endpoint.
   *
   * @public
   */
  type?: ResourceConfigurationType | undefined;

  /**
   * Specifies whether the resource configuration is associated with a sharable service network.
   *
   * @public
   */
  allowAssociationToShareableServiceNetwork?: boolean | undefined;

  /**
   * The TCP port ranges that a consumer can use to access a resource configuration. You can separate port ranges with a comma. Example: 1-65535 or 1,2,22-30
   *
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * The TCP protocol accepted by the specified resource configuration.
   *
   * @public
   */
  protocol?: ProtocolType | undefined;

  /**
   * The custom domain name of the resource configuration.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The status of the resource configuration.
   *
   * @public
   */
  status?: ResourceConfigurationStatus | undefined;

  /**
   * The resource configuration.
   *
   * @public
   */
  resourceConfigurationDefinition?: ResourceConfigurationDefinition | undefined;

  /**
   * The date and time that the resource configuration was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Indicates whether the resource configuration was created and is managed by Amazon.
   *
   * @public
   */
  amazonManaged?: boolean | undefined;

  /**
   * The reason the create-resource-configuration request failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The most recent date and time that the resource configuration was updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The domain verification ID.
   *
   * @public
   */
  domainVerificationId?: string | undefined;

  /**
   * The ARN of the domain verification.
   *
   * @public
   */
  domainVerificationArn?: string | undefined;

  /**
   * The domain verification status.
   *
   * @public
   */
  domainVerificationStatus?: VerificationStatus | undefined;

  /**
   * (GROUP) The group domain for a group resource configuration. Any domains that you create for the child resource are subdomains of the group domain. Child resources inherit the verification status of the domain.
   *
   * @public
   */
  groupDomain?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceGatewayRequest {
  /**
   * The ID of the resource gateway.
   *
   * @public
   */
  resourceGatewayIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourceGatewayResponse {
  /**
   * The name of the resource gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the resource gateway.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource gateway.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status for the resource gateway.
   *
   * @public
   */
  status?: ResourceGatewayStatus | undefined;

  /**
   * The ID of the VPC for the resource gateway.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The IDs of the VPC subnets for resource gateway.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * Indicates whether the resource gateway is managed by an Amazon Web Services service.
   *
   * @public
   */
  serviceManaged?: boolean | undefined;

  /**
   * The Amazon Web Services service that manages the resource gateway.
   *
   * @public
   */
  managedBy?: string | undefined;

  /**
   * The security group IDs associated with the resource gateway.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The type of IP address for the resource gateway.
   *
   * @public
   */
  ipAddressType?: ResourceGatewayIpAddressType | undefined;

  /**
   * The number of IPv4 addresses in each ENI for the resource gateway.
   *
   * @public
   */
  ipv4AddressesPerEni?: number | undefined;

  /**
   * The DNS resolution type for resource configurations that are associated with this resource gateway.
   *
   * @public
   */
  resourceConfigDnsResolution?: ResourceConfigDnsResolution | undefined;

  /**
   * The date and time that the resource gateway was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the resource gateway was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the service network or service.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * An IAM policy.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetRuleRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The ID or ARN of the listener.
   *
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * The ID or ARN of the listener rule.
   *
   * @public
   */
  ruleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetRuleResponse {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the listener.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the listener.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Indicates whether this is the default rule.
   *
   * @public
   */
  isDefault?: boolean | undefined;

  /**
   * The rule match.
   *
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * The priority level for the specified rule.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The action for the default rule.
   *
   * @public
   */
  action?: RuleAction | undefined;

  /**
   * The date and time that the listener rule was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the listener rule was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetServiceRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceResponse {
  /**
   * The ID of the service.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time that the service was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the service was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The DNS name of the service.
   *
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * The custom domain name of the service.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The status of the service.
   *
   * @public
   */
  status?: ServiceStatus | undefined;

  /**
   * The type of IAM policy.
   *
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * The amount of time, in seconds, that a connection can remain idle before VPC Lattice closes it.
   *
   * @public
   */
  idleTimeoutSeconds?: number | undefined;

  /**
   * The failure code.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * The failure message.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkRequest {
  /**
   * The ID or ARN of the service network.
   *
   * @public
   */
  serviceNetworkIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkResponse {
  /**
   * The ID of the service network.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the service network.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The date and time that the service network was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time of the last update, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type of IAM policy.
   *
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * Specifies if the service network is enabled for sharing.
   *
   * @public
   */
  sharingConfig?: SharingConfig | undefined;

  /**
   * The number of VPCs associated with the service network.
   *
   * @public
   */
  numberOfAssociatedVPCs?: number | undefined;

  /**
   * The number of services associated with the service network.
   *
   * @public
   */
  numberOfAssociatedServices?: number | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkResourceAssociationRequest {
  /**
   * The ID of the association.
   *
   * @public
   */
  serviceNetworkResourceAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkResourceAssociationResponse {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the association.
   *
   * @public
   */
  status?: ServiceNetworkResourceAssociationStatus | undefined;

  /**
   * The account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time that the association was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ID of the resource configuration that is associated with the service network.
   *
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  resourceConfigurationArn?: string | undefined;

  /**
   * The name of the resource configuration that is associated with the service network.
   *
   * @public
   */
  resourceConfigurationName?: string | undefined;

  /**
   * The ID of the service network that is associated with the resource configuration.
   *
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network that is associated with the resource configuration.
   *
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * The name of the service network that is associated with the resource configuration.
   *
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * The reason the association request failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The failure code.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * The most recent date and time that the association was updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The private DNS entry for the service. This entry includes only the domain name.
   *
   * @public
   */
  privateDnsEntry?: DnsEntry | undefined;

  /**
   * Indicates if private DNS is enabled in the service network resource association.
   *
   * @public
   */
  privateDnsEnabled?: boolean | undefined;

  /**
   * The DNS entry for the service.
   *
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * Indicates whether the association is managed by Amazon.
   *
   * @public
   */
  isManagedAssociation?: boolean | undefined;

  /**
   * The domain verification status in the service network resource association.
   *
   * @public
   */
  domainVerificationStatus?: VerificationStatus | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkServiceAssociationRequest {
  /**
   * The ID or ARN of the association.
   *
   * @public
   */
  serviceNetworkServiceAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkServiceAssociationResponse {
  /**
   * The ID of the service network and service association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status of the association.
   *
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time that the association was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  serviceId?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The ID of the service network.
   *
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * The name of the service network.
   *
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * The DNS name of the service.
   *
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * The custom domain name of the service.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The failure message.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The failure code.
   *
   * @public
   */
  failureCode?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkVpcAssociationRequest {
  /**
   * The ID or ARN of the association.
   *
   * @public
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetServiceNetworkVpcAssociationResponse {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status of the association.
   *
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time that the association was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ID of the service network.
   *
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * The name of the service network.
   *
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The IDs of the security groups.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * Indicates if private DNS is enabled in the VPC association.
   *
   * @public
   */
  privateDnsEnabled?: boolean | undefined;

  /**
   * The failure message.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The failure code.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * The date and time that the association was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * DNS options for the service network VPC association.
   *
   * @public
   */
  dnsOptions?: DnsOptions | undefined;
}

/**
 * @public
 */
export interface GetTargetGroupRequest {
  /**
   * The ID or ARN of the target group.
   *
   * @public
   */
  targetGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTargetGroupResponse {
  /**
   * The ID of the target group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the target group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The target group type.
   *
   * @public
   */
  type?: TargetGroupType | undefined;

  /**
   * The target group configuration.
   *
   * @public
   */
  config?: TargetGroupConfig | undefined;

  /**
   * The date and time that the target group was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the target group was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The status.
   *
   * @public
   */
  status?: TargetGroupStatus | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the service.
   *
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * The failure message.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The failure code.
   *
   * @public
   */
  failureCode?: string | undefined;
}

/**
 * @public
 */
export interface ListListenersRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a listener.
 *
 * @public
 */
export interface ListenerSummary {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the listener.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the listener.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The listener protocol.
   *
   * @public
   */
  protocol?: ListenerProtocol | undefined;

  /**
   * The listener port.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The date and time that the listener was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the listener was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListListenersResponse {
  /**
   * Information about the listeners.
   *
   * @public
   */
  items: ListenerSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateListenerRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The ID or ARN of the listener.
   *
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * The action for the default rule.
   *
   * @public
   */
  defaultAction: RuleAction | undefined;
}

/**
 * @public
 */
export interface UpdateListenerResponse {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the listener.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the listener.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The protocol of the listener.
   *
   * @public
   */
  protocol?: ListenerProtocol | undefined;

  /**
   * The listener port.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  serviceId?: string | undefined;

  /**
   * The action for the default rule.
   *
   * @public
   */
  defaultAction?: RuleAction | undefined;
}

/**
 * @public
 */
export interface ListResourceConfigurationsRequest {
  /**
   * The ID of the resource gateway for the resource configuration.
   *
   * @public
   */
  resourceGatewayIdentifier?: string | undefined;

  /**
   * The ID of the resource configuration of type `Group`.
   *
   * @public
   */
  resourceConfigurationGroupIdentifier?: string | undefined;

  /**
   * The domain verification ID.
   *
   * @public
   */
  domainVerificationIdentifier?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a resource configuration.
 *
 * @public
 */
export interface ResourceConfigurationSummary {
  /**
   * The ID of the resource configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the resource configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the resource gateway.
   *
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * The ID of the group resource configuration.
   *
   * @public
   */
  resourceConfigurationGroupId?: string | undefined;

  /**
   * The type of resource configuration.
   *
   * - `SINGLE` - A single resource.
   * - `GROUP` - A group of resources. You must create a group resource configuration before you create a child resource configuration.
   * - `CHILD` - A single resource that is part of a group resource configuration.
   * - `ARN` - An Amazon Web Services resource.
   * - `CIDR` - A network segment (a range of IP addresses) accessed through a `Tunnel` VPC endpoint.
   *
   * @public
   */
  type?: ResourceConfigurationType | undefined;

  /**
   * The status of the resource configuration.
   *
   * @public
   */
  status?: ResourceConfigurationStatus | undefined;

  /**
   * Indicates whether the resource configuration was created and is managed by Amazon.
   *
   * @public
   */
  amazonManaged?: boolean | undefined;

  /**
   * The date and time that the resource configuration was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The most recent date and time that the resource configuration was updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The custom domain name.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The domain verification ID.
   *
   * @public
   */
  domainVerificationId?: string | undefined;

  /**
   * (GROUP) The group domain for a group resource configuration. Any domains that you create for the child resource are subdomains of the group domain. Child resources inherit the verification status of the domain.
   *
   * @public
   */
  groupDomain?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceConfigurationsResponse {
  /**
   * Information about the resource configurations.
   *
   * @public
   */
  items?: ResourceConfigurationSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceEndpointAssociationsRequest {
  /**
   * The ID for the resource configuration associated with the VPC endpoint.
   *
   * @public
   */
  resourceConfigurationIdentifier: string | undefined;

  /**
   * The ID of the association.
   *
   * @public
   */
  resourceEndpointAssociationIdentifier?: string | undefined;

  /**
   * The ID of the VPC endpoint in the association.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;

  /**
   * The owner of the VPC endpoint in the association.
   *
   * @public
   */
  vpcEndpointOwner?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies which account pays for a category of charges on a VPC endpoint association.
 *
 * @public
 */
export interface PayerResponsibilityEntry {
  /**
   * The category of charges that this entry applies to. `ResourceGatewayCharges` covers the resource gateway's data processing charge.
   *
   * @public
   */
  scope?: PayerResponsibilityScope | undefined;

  /**
   * The account that pays this category of charges. `VpcEndpointAccount` owns the VPC endpoint. `ResourceGatewayAccount` owns the resource gateway.
   *
   * @public
   */
  payerResponsibilityType?: PayerResponsibilityPayer | undefined;
}

/**
 * Summary information about a VPC endpoint association.
 *
 * @public
 */
export interface ResourceEndpointAssociationSummary {
  /**
   * The ID of the VPC endpoint association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the VPC endpoint association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the resource configuration.
   *
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource configuration.
   *
   * @public
   */
  resourceConfigurationArn?: string | undefined;

  /**
   * The name of the resource configuration.
   *
   * @public
   */
  resourceConfigurationName?: string | undefined;

  /**
   * The ID of the VPC endpoint.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;

  /**
   * The owner of the VPC endpoint.
   *
   * @public
   */
  vpcEndpointOwner?: string | undefined;

  /**
   * The account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time that the VPC endpoint association was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Who pays for each category of charges on the VPC endpoint association.
   *
   * @public
   */
  payerResponsibility?: PayerResponsibilityEntry[] | undefined;
}

/**
 * @public
 */
export interface ListResourceEndpointAssociationsResponse {
  /**
   * Information about the VPC endpoint associations.
   *
   * @public
   */
  items: ResourceEndpointAssociationSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceGatewaysRequest {
  /**
   * The maximum page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a resource gateway.
 *
 * @public
 */
export interface ResourceGatewaySummary {
  /**
   * The name of the resource gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the resource gateway.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource gateway.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the resource gateway.
   *
   * @public
   */
  status?: ResourceGatewayStatus | undefined;

  /**
   * The ID of the VPC for the resource gateway.
   *
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * The IDs of the VPC subnets for the resource gateway.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The IDs of the security groups applied to the resource gateway.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The type of IP address used by the resource gateway.
   *
   * @public
   */
  ipAddressType?: ResourceGatewayIpAddressType | undefined;

  /**
   * The number of IPv4 addresses in each ENI for the resource gateway.
   *
   * @public
   */
  ipv4AddressesPerEni?: number | undefined;

  /**
   * The DNS resolution type for resource configurations that are associated with this resource gateway.
   *
   * @public
   */
  resourceConfigDnsResolution?: ResourceConfigDnsResolution | undefined;

  /**
   * The date and time that the VPC endpoint association was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The most recent date and time that the resource gateway was updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceGatewaysResponse {
  /**
   * Information about the resource gateways.
   *
   * @public
   */
  items?: ResourceGatewaySummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The ID or ARN of the listener.
   *
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a listener rule.
 *
 * @public
 */
export interface RuleSummary {
  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the rule.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Indicates whether this is the default listener rule.
   *
   * @public
   */
  isDefault?: boolean | undefined;

  /**
   * The priority of the rule.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The date and time that the listener rule was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the listener rule was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * Information about the rules.
   *
   * @public
   */
  items: RuleSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkResourceAssociationsRequest {
  /**
   * The ID of the service network.
   *
   * @public
   */
  serviceNetworkIdentifier?: string | undefined;

  /**
   * The ID of the resource configuration.
   *
   * @public
   */
  resourceConfigurationIdentifier?: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Include service network resource associations of the child resource configuration with the grouped resource configuration.
   *
   * The type is boolean and the default value is false.
   *
   * @public
   */
  includeChildren?: boolean | undefined;
}

/**
 * Summary information about an association between a service network and a resource configuration.
 *
 * @public
 */
export interface ServiceNetworkResourceAssociationSummary {
  /**
   * The ID of the association between the service network and resource configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the service network’s association with the resource configuration. If the deletion fails, try to delete again.
   *
   * @public
   */
  status?: ServiceNetworkResourceAssociationStatus | undefined;

  /**
   * The account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time that the association was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ID of the resource configuration associated with the service network.
   *
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  resourceConfigurationArn?: string | undefined;

  /**
   * The name of the resource configuration associated with the service network.
   *
   * @public
   */
  resourceConfigurationName?: string | undefined;

  /**
   * The ID of the service network associated with the resource configuration.
   *
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network associated with the resource configuration.
   *
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * The name of the service network associated with the resource configuration.
   *
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * The DNS entry for the service.
   *
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * The private DNS entry for the service. This entry includes only the domain name.
   *
   * @public
   */
  privateDnsEntry?: DnsEntry | undefined;

  /**
   * Specifies whether the association is managed by Amazon.
   *
   * @public
   */
  isManagedAssociation?: boolean | undefined;

  /**
   * The failure code.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * Indicates if private DNS is enabled for the service network resource association.
   *
   * @public
   */
  privateDnsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkResourceAssociationsResponse {
  /**
   * Information about the associations.
   *
   * @public
   */
  items: ServiceNetworkResourceAssociationSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworksRequest {
  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a service network.
 *
 * @public
 */
export interface ServiceNetworkSummary {
  /**
   * The ID of the service network.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the service network.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time that the service network was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the service network was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The number of VPCs associated with the service network.
   *
   * @public
   */
  numberOfAssociatedVPCs?: number | undefined;

  /**
   * The number of services associated with the service network.
   *
   * @public
   */
  numberOfAssociatedServices?: number | undefined;

  /**
   * The number of resource configurations associated with a service network.
   *
   * @public
   */
  numberOfAssociatedResourceConfigurations?: number | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworksResponse {
  /**
   * Information about the service networks.
   *
   * @public
   */
  items: ServiceNetworkSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkServiceAssociationsRequest {
  /**
   * The ID or ARN of the service network.
   *
   * @public
   */
  serviceNetworkIdentifier?: string | undefined;

  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about an association between a service network and a service.
 *
 * @public
 */
export interface ServiceNetworkServiceAssociationSummary {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status of the service network’s association with the service. If the deletion fails, try to delete again.
   *
   * @public
   */
  status?: ServiceNetworkServiceAssociationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time that the association was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  serviceId?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The ID of the service network.
   *
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * The name of the service network.
   *
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * The DNS information.
   *
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * The custom domain name of the service.
   *
   * @public
   */
  customDomainName?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkServiceAssociationsResponse {
  /**
   * Information about the associations.
   *
   * @public
   */
  items: ServiceNetworkServiceAssociationSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcAssociationsRequest {
  /**
   * The ID or ARN of the service network.
   *
   * @public
   */
  serviceNetworkIdentifier?: string | undefined;

  /**
   * The ID or ARN of the VPC.
   *
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about an association between a service network and a VPC.
 *
 * @public
 */
export interface ServiceNetworkVpcAssociationSummary {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status.
   *
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus | undefined;

  /**
   * The account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time that the association was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ID of the service network.
   *
   * @public
   */
  serviceNetworkId?: string | undefined;

  /**
   * The name of the service network.
   *
   * @public
   */
  serviceNetworkName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * Indicates if private DNS is enabled for the service network VPC association.
   *
   * @public
   */
  privateDnsEnabled?: boolean | undefined;

  /**
   * The DNS options for the service network VPC association.
   *
   * @public
   */
  dnsOptions?: DnsOptions | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The date and time that the association was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcAssociationsResponse {
  /**
   * Information about the associations.
   *
   * @public
   */
  items: ServiceNetworkVpcAssociationSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcEndpointAssociationsRequest {
  /**
   * The ID of the service network associated with the VPC endpoint.
   *
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * The maximum page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes the association between a service network and a VPC endpoint.
 *
 * @public
 */
export interface ServiceNetworkEndpointAssociation {
  /**
   * The ID of the VPC endpoint associated with the service network.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;

  /**
   * The ID of the VPC for the association.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The owner of the VPC endpoint associated with the service network.
   *
   * @public
   */
  vpcEndpointOwnerId?: string | undefined;

  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The state of the association.
   *
   * @public
   */
  state?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  serviceNetworkArn?: string | undefined;

  /**
   * The date and time that the association was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListServiceNetworkVpcEndpointAssociationsResponse {
  /**
   * Information about the association between the VPC endpoint and service network.
   *
   * @public
   */
  items: ServiceNetworkEndpointAssociation[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a service.
 *
 * @public
 */
export interface ServiceSummary {
  /**
   * The ID of the service.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time that the service was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the service was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The DNS information.
   *
   * @public
   */
  dnsEntry?: DnsEntry | undefined;

  /**
   * The custom domain name of the service.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The status.
   *
   * @public
   */
  status?: ServiceStatus | undefined;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * Information about the services.
   *
   * @public
   */
  items?: ServiceSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
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
   * Information about the tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTargetGroupsRequest {
  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID or ARN of the VPC.
   *
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * The target group type.
   *
   * @public
   */
  targetGroupType?: TargetGroupType | undefined;
}

/**
 * Summary information about a target group.
 *
 * For more information, see [Target groups](https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html) in the *Amazon VPC Lattice User Guide*.
 *
 * @public
 */
export interface TargetGroupSummary {
  /**
   * The ID of the target group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the target group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the target group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The target group type.
   *
   * @public
   */
  type?: TargetGroupType | undefined;

  /**
   * The date and time that the target group was created, in ISO-8601 format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The port of the target group.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The protocol of the target group.
   *
   * @public
   */
  protocol?: TargetGroupProtocol | undefined;

  /**
   * The type of IP address used for the target group. The possible values are `IPV4` and `IPV6`. This is an optional parameter. If not specified, the default is `IPV4`.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * The ID of the VPC of the target group.
   *
   * @public
   */
  vpcIdentifier?: string | undefined;

  /**
   * The date and time that the target group was last updated, in ISO-8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The status.
   *
   * @public
   */
  status?: TargetGroupStatus | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the service.
   *
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * The version of the event structure that your Lambda function receives. Supported only if the target group type is `LAMBDA`.
   *
   * @public
   */
  lambdaEventStructureVersion?: LambdaEventStructureVersion | undefined;
}

/**
 * @public
 */
export interface ListTargetGroupsResponse {
  /**
   * Information about the target groups.
   *
   * @public
   */
  items?: TargetGroupSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsRequest {
  /**
   * The ID or ARN of the target group.
   *
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The targets.
   *
   * @public
   */
  targets?: Target[] | undefined;
}

/**
 * Summary information about a target.
 *
 * @public
 */
export interface TargetSummary {
  /**
   * The ID of the target. If the target group type is `INSTANCE`, this is an instance ID. If the target group type is `IP`, this is an IP address. If the target group type is `LAMBDA`, this is the ARN of a Lambda function. If the target type is `ALB`, this is the ARN of an Application Load Balancer.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The port on which the target is listening.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The status of the target.
   *
   * - `DRAINING`: The target is being deregistered. No new connections are sent to this target while current connections are being drained. The default draining time is 1 minute.
   * - `UNAVAILABLE`: Health checks are unavailable for the target group.
   * - `HEALTHY`: The target is healthy.
   * - `UNHEALTHY`: The target is unhealthy.
   * - `INITIAL`: Initial health checks on the target are being performed.
   * - `UNUSED`: Target group is not used in a service.
   *
   * @public
   */
  status?: TargetStatus | undefined;

  /**
   * The code for why the target status is what it is.
   *
   * @public
   */
  reasonCode?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsResponse {
  /**
   * Information about the targets.
   *
   * @public
   */
  items: TargetSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAuthPolicyRequest {
  /**
   * The ID or ARN of the service network or service for which the policy is created.
   *
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * The auth policy. The policy string in JSON must not contain newlines or blank lines.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutAuthPolicyResponse {
  /**
   * The auth policy. The policy string in JSON must not contain newlines or blank lines.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * The state of the auth policy. The auth policy is only active when the auth type is set to `AWS_IAM`. If you provide a policy, then authentication and authorization decisions are made based on this policy and the client's IAM policy. If the Auth type is `NONE`, then, any auth policy that you provide remains inactive. For more information, see [Create a service network](https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#create-service-network) in the *Amazon VPC Lattice User Guide*.
   *
   * @public
   */
  state?: AuthPolicyState | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The ID or ARN of the service network or service for which the policy is created.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * An IAM policy. The policy string in JSON must not contain newlines or blank lines.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {}

/**
 * @public
 */
export interface UpdateResourceConfigurationRequest {
  /**
   * The ID of the resource configuration.
   *
   * @public
   */
  resourceConfigurationIdentifier: string | undefined;

  /**
   * Identifies the resource configuration in one of the following ways:
   *
   * - **Amazon Resource Name (ARN)** - Supported resource-types that are provisioned by Amazon Web Services services, such as RDS databases, can be identified by their ARN.
   * - **Domain name** - Any domain name that is publicly resolvable.
   * - **IP address** - For IPv4 and IPv6, only IP addresses in the VPC are supported.
   *
   * @public
   */
  resourceConfigurationDefinition?: ResourceConfigurationDefinition | undefined;

  /**
   * Indicates whether to add the resource configuration to service networks that are shared with other accounts.
   *
   * @public
   */
  allowAssociationToShareableServiceNetwork?: boolean | undefined;

  /**
   * The TCP port ranges that a consumer can use to access a resource configuration. You can separate port ranges with a comma. Example: 1-65535 or 1,2,22-30
   *
   * @public
   */
  portRanges?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceConfigurationResponse {
  /**
   * The ID of the resource configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the resource configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the resource gateway associated with the resource configuration.
   *
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * The ID of the group resource configuration.
   *
   * @public
   */
  resourceConfigurationGroupId?: string | undefined;

  /**
   * The type of resource configuration.
   *
   * - `SINGLE` - A single resource.
   * - `GROUP` - A group of resources.
   * - `CHILD` - A single resource that is part of a group resource configuration.
   * - `ARN` - An Amazon Web Services resource.
   * - `CIDR` - A network segment (a range of IP addresses) accessed through a `Tunnel` VPC endpoint.
   *
   * @public
   */
  type?: ResourceConfigurationType | undefined;

  /**
   * The TCP port ranges that a consumer can use to access a resource configuration. You can separate port ranges with a comma. Example: 1-65535 or 1,2,22-30
   *
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * Indicates whether to add the resource configuration to service networks that are shared with other accounts.
   *
   * @public
   */
  allowAssociationToShareableServiceNetwork?: boolean | undefined;

  /**
   * The TCP protocol accepted by the specified resource configuration.
   *
   * @public
   */
  protocol?: ProtocolType | undefined;

  /**
   * The status of the resource configuration.
   *
   * @public
   */
  status?: ResourceConfigurationStatus | undefined;

  /**
   * The resource configuration.
   *
   * @public
   */
  resourceConfigurationDefinition?: ResourceConfigurationDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateResourceGatewayRequest {
  /**
   * The ID or ARN of the resource gateway.
   *
   * @public
   */
  resourceGatewayIdentifier: string | undefined;

  /**
   * The IDs of the security groups associated with the resource gateway.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceGatewayResponse {
  /**
   * The name of the resource gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the resource gateway.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource gateway.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the resource gateway.
   *
   * @public
   */
  status?: ResourceGatewayStatus | undefined;

  /**
   * The ID of the VPC for the resource gateway.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The IDs of the VPC subnets for the resource gateway.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The IDs of the security groups associated with the resource gateway.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The type of IP address used by the resource gateway.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;
}

/**
 * @public
 */
export interface UpdateRuleRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The ID or ARN of the listener.
   *
   * @public
   */
  listenerIdentifier: string | undefined;

  /**
   * The ID or ARN of the rule.
   *
   * @public
   */
  ruleIdentifier: string | undefined;

  /**
   * The rule match.
   *
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * The rule priority. A listener can't have multiple rules with the same priority.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * Information about the action for the specified listener rule.
   *
   * @public
   */
  action?: RuleAction | undefined;
}

/**
 * @public
 */
export interface UpdateRuleResponse {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the listener.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the listener.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Indicates whether this is the default rule.
   *
   * @public
   */
  isDefault?: boolean | undefined;

  /**
   * The rule match.
   *
   * @public
   */
  match?: RuleMatch | undefined;

  /**
   * The rule priority.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * Information about the action for the specified listener rule.
   *
   * @public
   */
  action?: RuleAction | undefined;
}

/**
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * The ID or ARN of the service.
   *
   * @public
   */
  serviceIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The type of IAM policy.
   *
   * - `NONE`: The resource does not use an IAM policy. This is the default.
   * - `AWS_IAM`: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.
   *
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * The amount of time, in seconds, that a connection can remain idle (no data sent) before VPC Lattice closes it. The valid range is 60 to 600 seconds. If you don't specify a value, the default is 60 seconds. This setting does not change the maximum connection duration of 10 minutes; connections are still closed when they reach that limit.
   *
   * @public
   */
  idleTimeoutSeconds?: number | undefined;
}

/**
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * The ID of the service.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The custom domain name of the service.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The type of IAM policy.
   *
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * The amount of time, in seconds, that a connection can remain idle before VPC Lattice closes it.
   *
   * @public
   */
  idleTimeoutSeconds?: number | undefined;
}

/**
 * @public
 */
export interface UpdateServiceNetworkRequest {
  /**
   * The ID or ARN of the service network.
   *
   * @public
   */
  serviceNetworkIdentifier: string | undefined;

  /**
   * The type of IAM policy.
   *
   * - `NONE`: The resource does not use an IAM policy. This is the default.
   * - `AWS_IAM`: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.
   *
   * @public
   */
  authType: AuthType | undefined;
}

/**
 * @public
 */
export interface UpdateServiceNetworkResponse {
  /**
   * The ID of the service network.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the service network.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service network.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type of IAM policy.
   *
   * @public
   */
  authType?: AuthType | undefined;
}

/**
 * @public
 */
export interface UpdateServiceNetworkVpcAssociationRequest {
  /**
   * The ID or ARN of the association.
   *
   * @public
   */
  serviceNetworkVpcAssociationIdentifier: string | undefined;

  /**
   * The IDs of the security groups.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * Indicates if private DNS is enabled for the VPC association.
   *
   * @public
   */
  privateDnsEnabled?: boolean | undefined;

  /**
   * DNS options for the service network VPC association.
   *
   * @public
   */
  dnsOptions?: DnsOptions | undefined;
}

/**
 * @public
 */
export interface UpdateServiceNetworkVpcAssociationResponse {
  /**
   * The ID of the association.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status. You can retry the operation if the status is `DELETE_FAILED`. However, if you retry it while the status is `DELETE_IN_PROGRESS`, there is no change in the status.
   *
   * @public
   */
  status?: ServiceNetworkVpcAssociationStatus | undefined;

  /**
   * The account that created the association.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The IDs of the security groups.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * Indicates if private DNS is enabled for the VPC association.
   *
   * @public
   */
  privateDnsEnabled?: boolean | undefined;

  /**
   * DNS options for the service network VPC association.
   *
   * @public
   */
  dnsOptions?: DnsOptions | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags for the resource.
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
export interface RegisterTargetsRequest {
  /**
   * The ID or ARN of the target group.
   *
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * The targets.
   *
   * @public
   */
  targets: Target[] | undefined;
}

/**
 * @public
 */
export interface RegisterTargetsResponse {
  /**
   * The targets that were successfully registered.
   *
   * @public
   */
  successful?: Target[] | undefined;

  /**
   * The targets that were not registered.
   *
   * @public
   */
  unsuccessful?: TargetFailure[] | undefined;
}

/**
 * @public
 */
export interface UpdateTargetGroupRequest {
  /**
   * The ID or ARN of the target group.
   *
   * @public
   */
  targetGroupIdentifier: string | undefined;

  /**
   * The health check configuration.
   *
   * @public
   */
  healthCheck: HealthCheckConfig | undefined;
}

/**
 * @public
 */
export interface UpdateTargetGroupResponse {
  /**
   * The ID of the target group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the target group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The target group type.
   *
   * @public
   */
  type?: TargetGroupType | undefined;

  /**
   * The target group configuration.
   *
   * @public
   */
  config?: TargetGroupConfig | undefined;

  /**
   * The status.
   *
   * @public
   */
  status?: TargetGroupStatus | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys of the tags to remove.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
