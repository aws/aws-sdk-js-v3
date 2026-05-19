// smithy-typescript generated code
import type {
  CertificateAssociationStatus,
  ConnectivityType,
  FilterType,
  GatewayType,
  LinkDirection,
  LinkStatus,
  Protocol,
  RequesterGatewayStatus,
  ResponderErrorMaskingAction,
  ResponderErrorMaskingLoggingType,
  ResponderGatewayStatus,
  RuleStatus,
} from "./enums";

/**
 * <p>Describes the masking for HTTP error codes.</p>
 * @public
 */
export interface ResponderErrorMaskingForHttpCode {
  /**
   * <p>The HTTP error code.</p>
   * @public
   */
  httpCode: string | undefined;

  /**
   * <p>The action for the error..</p>
   * @public
   */
  action: ResponderErrorMaskingAction | undefined;

  /**
   * <p>The error log type.</p>
   * @public
   */
  loggingTypes: ResponderErrorMaskingLoggingType[] | undefined;

  /**
   * <p>The percentage of response logging.</p>
   * @public
   */
  responseLoggingPercentage?: number | undefined;
}

/**
 * <p>Describes the attributes of a link.</p>
 * @public
 */
export interface LinkAttributes {
  /**
   * <p>Describes the masking for HTTP error codes.</p>
   * @public
   */
  responderErrorMasking?: ResponderErrorMaskingForHttpCode[] | undefined;

  /**
   * <p>The customer-provided unique identifier of the link.</p>
   * @public
   */
  customerProvidedId?: string | undefined;
}

/**
 * <p>Describes a link application log sample.</p>
 * @public
 */
export interface LinkApplicationLogSampling {
  /**
   * <p>An error log entry.</p>
   * @public
   */
  errorLog: number | undefined;

  /**
   * <p>A filter log entry.</p>
   * @public
   */
  filterLog: number | undefined;
}

/**
 * <p>Describes the configuration of a link application log.</p>
 * @public
 */
export interface LinkApplicationLogConfiguration {
  /**
   * <p>Describes a link application log sample.</p>
   * @public
   */
  sampling: LinkApplicationLogSampling | undefined;
}

/**
 * <p>Describes the settings for a link log.</p>
 * @public
 */
export interface LinkLogSettings {
  /**
   * <p>Describes the configuration of a link application log.</p>
   * @public
   */
  applicationLogs: LinkApplicationLogConfiguration | undefined;
}

/**
 * @public
 */
export interface AcceptLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings: LinkLogSettings | undefined;

  /**
   * <p>The timeout value in milliseconds.</p>
   * @public
   */
  timeoutInMillis?: number | undefined;
}

/**
 * <p>Describes the parameters of a no bid module.</p>
 * @public
 */
export interface NoBidModuleParameters {
  /**
   * <p>The reason description.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The reason code.</p>
   * @public
   */
  reasonCode?: number | undefined;

  /**
   * <p>The pass through percentage.</p>
   * @public
   */
  passThroughPercentage?: number | undefined;
}

/**
 * <p>Describes the header tag for a bid action.</p>
 * @public
 */
export interface HeaderTagAction {
  /**
   * <p>The name of the bid action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the bid action.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Describes a no bid action.</p>
 * @public
 */
export interface NoBidAction {
  /**
   * <p>The reason code for the no bid action.</p>
   * @public
   */
  noBidReasonCode?: number | undefined;
}

/**
 * <p>Describes a bid action.</p>
 * @public
 */
export type Action =
  | Action.HeaderTagMember
  | Action.NoBidMember
  | Action.$UnknownMember;

/**
 * @public
 */
export namespace Action {
  /**
   * <p>Describes a no bid action.</p>
   * @public
   */
  export interface NoBidMember {
    noBid: NoBidAction;
    headerTag?: never;
    $unknown?: never;
  }

  /**
   * <p>Describes the header tag for a bid action.</p>
   * @public
   */
  export interface HeaderTagMember {
    noBid?: never;
    headerTag: HeaderTagAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    noBid?: never;
    headerTag?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    noBid: (value: NoBidAction) => T;
    headerTag: (value: HeaderTagAction) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Describes the criteria for a filter.</p>
 * @public
 */
export interface FilterCriterion {
  /**
   * <p>The path to filter.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The value to filter.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Describes the configuration of a filter.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>Describes the criteria for a filter.</p>
   * @public
   */
  criteria: FilterCriterion[] | undefined;
}

/**
 * <p>Describes the parameters of an open RTB attribute module.</p>
 * @public
 */
export interface OpenRtbAttributeModuleParameters {
  /**
   * <p>The filter type.</p>
   * @public
   */
  filterType: FilterType | undefined;

  /**
   * <p>Describes the configuration of a filter.</p>
   * @public
   */
  filterConfiguration: Filter[] | undefined;

  /**
   * <p>Describes a bid action.</p>
   * @public
   */
  action: Action | undefined;

  /**
   * <p>The hold back percentage.</p>
   * @public
   */
  holdbackPercentage: number | undefined;
}

/**
 * <p>Describes the parameters of a rate limit.</p>
 * @public
 */
export interface RateLimiterModuleParameters {
  /**
   * <p>The transactions per second rate limit.</p>
   * @public
   */
  tps?: number | undefined;
}

/**
 * <p>Describes the parameters of a module.</p>
 * @public
 */
export type ModuleParameters =
  | ModuleParameters.NoBidMember
  | ModuleParameters.OpenRtbAttributeMember
  | ModuleParameters.RateLimiterMember
  | ModuleParameters.$UnknownMember;

/**
 * @public
 */
export namespace ModuleParameters {
  /**
   * <p>Describes the parameters of a no bid module.</p>
   * @public
   */
  export interface NoBidMember {
    noBid: NoBidModuleParameters;
    openRtbAttribute?: never;
    rateLimiter?: never;
    $unknown?: never;
  }

  /**
   * <p>Describes the parameters of an open RTB attribute module.</p>
   * @public
   */
  export interface OpenRtbAttributeMember {
    noBid?: never;
    openRtbAttribute: OpenRtbAttributeModuleParameters;
    rateLimiter?: never;
    $unknown?: never;
  }

  /**
   * <p>Describes the parameters of a rate limit.</p>
   * @public
   */
  export interface RateLimiterMember {
    noBid?: never;
    openRtbAttribute?: never;
    rateLimiter: RateLimiterModuleParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    noBid?: never;
    openRtbAttribute?: never;
    rateLimiter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    noBid: (value: NoBidModuleParameters) => T;
    openRtbAttribute: (value: OpenRtbAttributeModuleParameters) => T;
    rateLimiter: (value: RateLimiterModuleParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Describes the configuration of a module.</p>
 * @public
 */
export interface ModuleConfiguration {
  /**
   * <p>The version of the module.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The name of the module.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The dependencies of the module.</p>
   * @public
   */
  dependsOn?: string[] | undefined;

  /**
   * <p>Describes the parameters of a module.</p>
   * @public
   */
  moduleParameters?: ModuleParameters | undefined;
}

/**
 * @public
 */
export interface AcceptLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>The status of the link.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The timestamp of when the link was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the link was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The direction of the link.</p>
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Describes the settings for a link log.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * <p>The connectivity type of the link.</p>
   * @public
   */
  connectivityType?: ConnectivityType | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface AssociateCertificateRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate to associate.</p>
   * @public
   */
  acmCertificateArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateCertificateResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate.</p>
   * @public
   */
  acmCertificateArn: string | undefined;

  /**
   * <p>The status of the certificate association.</p>
   * @public
   */
  status: CertificateAssociationStatus | undefined;
}

/**
 * <p>The health check configuration for a managed endpoint. Defines how the service probes instances in the Auto Scaling group to determine their health status.</p>
 * @public
 */
export interface HealthCheckConfig {
  /**
   * <p>The port to use for health check probes. Valid range is 80 to 65535.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>The destination path for the health check request. Must start with <code>/</code>.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The protocol to use for health check probes.</p>
   * @public
   */
  protocol?: Protocol | undefined;

  /**
   * <p>The timeout for each health check probe, in milliseconds. Valid range is 100 to 5000.</p>
   * @public
   */
  timeoutMs?: number | undefined;

  /**
   * <p>The interval between health check probes, in seconds. Valid range is 5 to 60.</p>
   * @public
   */
  intervalSeconds?: number | undefined;

  /**
   * <p>The expected HTTP status code or status code pattern from healthy instances. Supports a single code (for example, <code>200</code>), a range (for example, <code>200-299</code>), or a comma-separated list (for example, <code>200,204</code>).</p>
   * @public
   */
  statusCodeMatcher?: string | undefined;

  /**
   * <p>The number of consecutive successful health checks required before an instance is considered healthy. Valid range is 2 to 10.</p>
   * @public
   */
  healthyThresholdCount?: number | undefined;

  /**
   * <p>The number of consecutive failed health checks required before an instance is considered unhealthy. Valid range is 2 to 10.</p>
   * @public
   */
  unhealthyThresholdCount?: number | undefined;
}

/**
 * <p>Describes the configuration of an auto scaling group.</p>
 * @public
 */
export interface AutoScalingGroupsConfiguration {
  /**
   * <p>The names of the auto scaling group.</p>
   * @public
   */
  autoScalingGroupNames: string[] | undefined;

  /**
   * <p>The role ARN of the auto scaling group.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The health check configuration for the Auto Scaling group managed endpoint.</p>
   * @public
   */
  healthCheckConfig?: HealthCheckConfig | undefined;
}

/**
 * <p>Describes a summary of a certificate association.</p>
 * @public
 */
export interface CertificateAssociationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate.</p>
   * @public
   */
  acmCertificateArn: string | undefined;

  /**
   * <p>The status of the certificate association.</p>
   * @public
   */
  status: CertificateAssociationStatus | undefined;

  /**
   * <p>The timestamp of when the certificate was associated.</p>
   * @public
   */
  associatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the certificate association was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateInboundExternalLinkRequest {
  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings: LinkLogSettings | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateInboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface CreateLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Boolean to specify if an HTTP responder is allowed.</p>
   * @public
   */
  httpResponderAllowed?: boolean | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings: LinkLogSettings | undefined;

  /**
   * <p>The timeout value in milliseconds.</p>
   * @public
   */
  timeoutInMillis?: number | undefined;
}

/**
 * @public
 */
export interface CreateLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The timestamp of when the link was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the link was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The direction of the link.</p>
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Describes the settings for a link log.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * <p>The connectivity type of the link.</p>
   * @public
   */
  connectivityType?: ConnectivityType | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The customer-provided unique identifier of the link.</p>
   * @public
   */
  customerProvidedId?: string | undefined;
}

/**
 * <p>A key-value pair for query string matching in a routing rule condition.</p>
 * @public
 */
export interface QueryStringKeyValuePair {
  /**
   * <p>The key of the query string parameter to match. Must contain only RFC 3986 unreserved characters.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the query string parameter to match. Must contain only RFC 3986 unreserved characters.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The conditions for a routing rule. All specified fields must match for the rule to apply (AND logic). At least one condition field must be set.</p>
 * @public
 */
export interface RuleCondition {
  /**
   * <p>The exact host header value to match.</p>
   * @public
   */
  hostHeader?: string | undefined;

  /**
   * <p>A wildcard pattern for host header matching (for example, <code>*.example.com</code>).</p>
   * @public
   */
  hostHeaderWildcard?: string | undefined;

  /**
   * <p>The path prefix to match. The request path must start with this value. Must start with <code>/</code>.</p>
   * @public
   */
  pathPrefix?: string | undefined;

  /**
   * <p>The exact path to match. Must start with <code>/</code>.</p>
   * @public
   */
  pathExact?: string | undefined;

  /**
   * <p>A query string key-value pair that must be present and match exactly.</p>
   * @public
   */
  queryStringEquals?: QueryStringKeyValuePair | undefined;

  /**
   * <p>A query string key that must be present in the request (any value is accepted).</p>
   * @public
   */
  queryStringExists?: string | undefined;
}

/**
 * @public
 */
export interface CreateLinkRoutingRuleRequest {
  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The priority of the routing rule. Lower numbers are evaluated first. Valid values are 1 to 1000. Priority must be unique among non-deleted rules within a link.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The conditions for the routing rule. All specified fields must match for the rule to apply. At least one condition field must be set.</p>
   * @public
   */
  conditions: RuleCondition | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLinkRoutingRuleResponse {
  /**
   * <p>The unique identifier of the routing rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The status of the routing rule.</p>
   * @public
   */
  status: RuleStatus | undefined;

  /**
   * <p>The timestamp of when the routing rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateOutboundExternalLinkRequest {
  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>The public endpoint of the link.</p>
   * @public
   */
  publicEndpoint: string | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings: LinkLogSettings | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateOutboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface CreateRequesterGatewayRequest {
  /**
   * <p>The unique identifier of the Virtual Private Cloud (VPC).</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The unique identifiers of the subnets.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An optional description for the requester gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRequesterGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The domain name of the requester gateway.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: RequesterGatewayStatus | undefined;
}

/**
 * <p>Listener configuration for the protocols (HTTP, HTTPS, or both) accepted by the gateway.</p>
 * @public
 */
export interface ListenerConfig {
  /**
   * <p>The protocol for connections from clients to the gateway</p>
   * @public
   */
  protocols: Protocol[] | undefined;
}

/**
 * <p>Describes the configuration of an Amazon Elastic Kubernetes Service endpoint.</p>
 * @public
 */
export interface EksEndpointsConfiguration {
  /**
   * <p>The name of the endpoint resource.</p>
   * @public
   */
  endpointsResourceName: string | undefined;

  /**
   * <p>The namespace of the endpoint resource.</p>
   * @public
   */
  endpointsResourceNamespace: string | undefined;

  /**
   * <p>The URI of the cluster API server endpoint.</p>
   * @public
   */
  clusterApiServerEndpointUri: string | undefined;

  /**
   * <p>The CA certificate chain of the cluster API server.</p>
   * @public
   */
  clusterApiServerCaCertificateChain: string | undefined;

  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The role ARN for the cluster.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Describes the configuration of a managed endpoint.</p>
 * @public
 */
export type ManagedEndpointConfiguration =
  | ManagedEndpointConfiguration.AutoScalingGroupsMember
  | ManagedEndpointConfiguration.EksEndpointsMember
  | ManagedEndpointConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ManagedEndpointConfiguration {
  /**
   * <p>Describes the configuration of an auto scaling group.</p>
   * @public
   */
  export interface AutoScalingGroupsMember {
    autoScalingGroups: AutoScalingGroupsConfiguration;
    eksEndpoints?: never;
    $unknown?: never;
  }

  /**
   * <p>Describes the configuration of an Amazon Elastic Kubernetes Service endpoint.</p>
   * @public
   */
  export interface EksEndpointsMember {
    autoScalingGroups?: never;
    eksEndpoints: EksEndpointsConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    autoScalingGroups?: never;
    eksEndpoints?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    autoScalingGroups: (value: AutoScalingGroupsConfiguration) => T;
    eksEndpoints: (value: EksEndpointsConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Describes the configuration of a trust store.</p>
 * @public
 */
export interface TrustStoreConfiguration {
  /**
   * <p>The certificate authority certificate.</p>
   * @public
   */
  certificateAuthorityCertificates: string[] | undefined;
}

/**
 * @public
 */
export interface CreateResponderGatewayRequest {
  /**
   * <p>The unique identifier of the Virtual Private Cloud (VPC).</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The unique identifiers of the subnets.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The domain name for the responder gateway.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The networking port to use.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>The networking protocol to use.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>Listener configuration for the protocols (HTTP, HTTPS, or both) accepted by the gateway.</p>
   * @public
   */
  listenerConfig?: ListenerConfig | undefined;

  /**
   * <p>The configuration of the trust store.</p>
   * @public
   */
  trustStoreConfiguration?: TrustStoreConfiguration | undefined;

  /**
   * <p>The configuration for the managed endpoint.</p>
   * @public
   */
  managedEndpointConfiguration?: ManagedEndpointConfiguration | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An optional description for the responder gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The type of gateway. Valid values are <code>EXTERNAL</code> or <code>INTERNAL</code>.</p>
   * @public
   */
  gatewayType?: GatewayType | undefined;
}

/**
 * @public
 */
export interface CreateResponderGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: ResponderGatewayStatus | undefined;

  /**
   * <p>The listener configuration for the responder gateway.</p>
   * @public
   */
  listenerConfig?: ListenerConfig | undefined;

  /**
   * <p>The external inbound endpoint for the responder gateway.</p>
   * @public
   */
  externalInboundEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInboundExternalLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface DeleteLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLinkResponse {
  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the link.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface DeleteLinkRoutingRuleRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The unique identifier of the routing rule.</p>
   * @public
   */
  ruleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLinkRoutingRuleResponse {
  /**
   * <p>The unique identifier of the routing rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The status of the routing rule.</p>
   * @public
   */
  status: RuleStatus | undefined;
}

/**
 * @public
 */
export interface DeleteOutboundExternalLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOutboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface DeleteRequesterGatewayRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRequesterGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: RequesterGatewayStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResponderGatewayRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResponderGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: ResponderGatewayStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate to disassociate.</p>
   * @public
   */
  acmCertificateArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate.</p>
   * @public
   */
  acmCertificateArn: string | undefined;

  /**
   * <p>The status of the certificate association.</p>
   * @public
   */
  status: CertificateAssociationStatus | undefined;
}

/**
 * @public
 */
export interface GetLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface GetLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>The status of the link.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The timestamp of when the link was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the link was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The direction of the link.</p>
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * <p>The connectivity type of the link.</p>
   * @public
   */
  connectivityType?: ConnectivityType | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Boolean to specify if an HTTP responder is allowed.</p>
   * @public
   */
  httpResponderAllowed?: boolean | undefined;

  /**
   * <p>The timeout value in milliseconds.</p>
   * @public
   */
  timeoutInMillis?: number | undefined;
}

/**
 * @public
 */
export interface GetLinkRoutingRuleRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The unique identifier of the routing rule.</p>
   * @public
   */
  ruleId: string | undefined;
}

/**
 * @public
 */
export interface GetLinkRoutingRuleResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The unique identifier of the routing rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The priority of the routing rule.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The conditions for the routing rule.</p>
   * @public
   */
  conditions: RuleCondition | undefined;

  /**
   * <p>The status of the routing rule.</p>
   * @public
   */
  status: RuleStatus | undefined;

  /**
   * <p>The timestamp of when the routing rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the routing rule was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListLinkRoutingRulesRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of a link routing rule.</p>
 * @public
 */
export interface LinkRoutingRuleSummary {
  /**
   * <p>The unique identifier of the routing rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The priority of the routing rule.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The conditions for the routing rule.</p>
   * @public
   */
  conditions: RuleCondition | undefined;

  /**
   * <p>The status of the routing rule.</p>
   * @public
   */
  status: RuleStatus | undefined;

  /**
   * <p>The timestamp of when the routing rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the routing rule was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListLinkRoutingRulesResponse {
  /**
   * <p>The list of routing rules for the link.</p>
   * @public
   */
  rules?: LinkRoutingRuleSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLinkRoutingRuleRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The unique identifier of the routing rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The updated priority of the routing rule. Lower numbers are evaluated first. Valid values are 1 to 1000. Priority must be unique among non-deleted rules within a link.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The updated conditions for the routing rule. All specified fields must match for the rule to apply. At least one condition field must be set.</p>
   * @public
   */
  conditions: RuleCondition | undefined;
}

/**
 * @public
 */
export interface UpdateLinkRoutingRuleResponse {
  /**
   * <p>The unique identifier of the routing rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The status of the routing rule.</p>
   * @public
   */
  status: RuleStatus | undefined;

  /**
   * <p>The timestamp of when the routing rule was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListLinksRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Describes a link.</p>
 * @public
 */
export interface ListLinksResponseStructure {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>The status of the link.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The timestamp of when the link was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the link was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The direction of the link.</p>
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * <p>Describes the configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Describes the configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Describes attributes of a link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Describes the settings for a link log.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * <p>The connectivity type of the link.</p>
   * @public
   */
  connectivityType?: ConnectivityType | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The public endpoint of the outbound link.</p>
   * @public
   */
  publicEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface ListLinksResponse {
  /**
   * <p>Information about created links.</p>
   * @public
   */
  links?: ListLinksResponseStructure[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface RejectLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the peer gateway.</p>
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * <p>The status of the link.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The timestamp of when the link was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the link was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The direction of the link.</p>
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>Describes the settings for a link log.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * <p>The connectivity type of the link.</p>
   * @public
   */
  connectivityType?: ConnectivityType | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface UpdateLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * <p>The timeout value in milliseconds.</p>
   * @public
   */
  timeoutInMillis?: number | undefined;
}

/**
 * @public
 */
export interface UpdateLinkResponse {
  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface UpdateLinkModuleFlowRequest {
  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The configuration of a module.</p>
   * @public
   */
  modules: ModuleConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateLinkModuleFlowResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface GetCertificateAssociationRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate.</p>
   * @public
   */
  acmCertificateArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateAssociationResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate.</p>
   * @public
   */
  acmCertificateArn: string | undefined;

  /**
   * <p>The status of the certificate association.</p>
   * @public
   */
  status: CertificateAssociationStatus | undefined;

  /**
   * <p>The timestamp of when the certificate was associated.</p>
   * @public
   */
  associatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the certificate association was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetInboundExternalLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface GetInboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Attributes of the link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>The timestamp of when the inbound external link was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the inbound external link was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * <p>The connectivity type of the link.</p>
   * @public
   */
  connectivityType?: ConnectivityType | undefined;
}

/**
 * @public
 */
export interface GetOutboundExternalLinkRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface GetOutboundExternalLinkResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The public endpoint for the link.</p>
   * @public
   */
  publicEndpoint: string | undefined;

  /**
   * <p>The configuration of flow modules.</p>
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>The configuration of pending flow modules.</p>
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * <p>Describes the attributes of a link.</p>
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * <p>The timestamp of when the outbound external link was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the outbound external link was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Settings for the application logs.</p>
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * <p>The connectivity type of the link.</p>
   * @public
   */
  connectivityType?: ConnectivityType | undefined;
}

/**
 * @public
 */
export interface GetRequesterGatewayRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface GetRequesterGatewayResponse {
  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: RequesterGatewayStatus | undefined;

  /**
   * <p>The domain name of the requester gateway.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The description of the requester gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the requester gateway was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the requester gateway was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The unique identifier of the Virtual Private Cloud (VPC).</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The unique identifiers of the subnets.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The count of active links for the requester gateway.</p>
   * @public
   */
  activeLinksCount?: number | undefined;

  /**
   * <p>The total count of links for the requester gateway.</p>
   * @public
   */
  totalLinksCount?: number | undefined;
}

/**
 * @public
 */
export interface GetResponderGatewayRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface GetResponderGatewayResponse {
  /**
   * <p>The unique identifier of the Virtual Private Cloud (VPC).</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The unique identifiers of the subnets.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The unique identifiers of the security groups.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: ResponderGatewayStatus | undefined;

  /**
   * <p>The description of the responder gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp of when the responder gateway was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the responder gateway was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The domain name of the responder gateway.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The networking port.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>The networking protocol.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The listener configuration for the responder gateway.</p>
   * @public
   */
  listenerConfig?: ListenerConfig | undefined;

  /**
   * <p>The configuration of the trust store.</p>
   * @public
   */
  trustStoreConfiguration?: TrustStoreConfiguration | undefined;

  /**
   * <p>The configuration of the managed endpoint.</p>
   * @public
   */
  managedEndpointConfiguration?: ManagedEndpointConfiguration | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The count of active links for the responder gateway.</p>
   * @public
   */
  activeLinksCount?: number | undefined;

  /**
   * <p>The total count of links for the responder gateway.</p>
   * @public
   */
  totalLinksCount?: number | undefined;

  /**
   * <p>Deprecated. Use 'linksRequestedCount' instead.</p>
   *
   * @deprecated (since 2026-05-11) Use linksRequestedCount instead.
   * @public
   */
  inboundLinksCount?: number | undefined;

  /**
   * <p>The count of requested links waiting for the responder gateway to accept or reject.</p>
   * @public
   */
  linksRequestedCount?: number | undefined;

  /**
   * <p>The type of gateway. Valid values are <code>EXTERNAL</code> or <code>INTERNAL</code>.</p>
   * @public
   */
  gatewayType?: GatewayType | undefined;

  /**
   * <p>The external inbound endpoint for the responder gateway.</p>
   * @public
   */
  externalInboundEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateAssociationsRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCertificateAssociationsResponse {
  /**
   * <p>The list of certificate associations for the gateway.</p>
   * @public
   */
  certificateAssociations: CertificateAssociationSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRequesterGatewaysRequest {
  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRequesterGatewaysResponse {
  /**
   * <p>The unique identifier of the gateways.</p>
   * @public
   */
  gatewayIds?: string[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResponderGatewaysRequest {
  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResponderGatewaysResponse {
  /**
   * <p>The unique identifier of the gateways.</p>
   * @public
   */
  gatewayIds?: string[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateRequesterGatewayRequest {
  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>An optional description for the requester gateway.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRequesterGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: RequesterGatewayStatus | undefined;
}

/**
 * @public
 */
export interface UpdateResponderGatewayRequest {
  /**
   * <p>The domain name for the responder gateway.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The networking port to use.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>The networking protocol to use.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The listener configuration for the responder gateway.</p>
   * @public
   */
  listenerConfig?: ListenerConfig | undefined;

  /**
   * <p>The configuration of the trust store.</p>
   * @public
   */
  trustStoreConfiguration?: TrustStoreConfiguration | undefined;

  /**
   * <p>The configuration for the managed endpoint.</p>
   * @public
   */
  managedEndpointConfiguration?: ManagedEndpointConfiguration | undefined;

  /**
   * <p>The unique client token.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>An optional description for the responder gateway.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResponderGatewayResponse {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  status: ResponderGatewayStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
