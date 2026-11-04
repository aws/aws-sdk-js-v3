// smithy-typescript generated code
import type {
  CertificateAssociationStatus,
  ClientRoutingPolicy,
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
 * Describes the masking for HTTP error codes.
 *
 * @public
 */
export interface ResponderErrorMaskingForHttpCode {
  /**
   * The HTTP error code.
   *
   * @public
   */
  httpCode: string | undefined;

  /**
   * The action for the error..
   *
   * @public
   */
  action: ResponderErrorMaskingAction | undefined;

  /**
   * The error log type.
   *
   * @public
   */
  loggingTypes: ResponderErrorMaskingLoggingType[] | undefined;

  /**
   * The percentage of response logging.
   *
   * @public
   */
  responseLoggingPercentage?: number | undefined;
}

/**
 * Describes the attributes of a link.
 *
 * @public
 */
export interface LinkAttributes {
  /**
   * Describes the masking for HTTP error codes.
   *
   * @public
   */
  responderErrorMasking?: ResponderErrorMaskingForHttpCode[] | undefined;

  /**
   * The customer-provided unique identifier of the link.
   *
   * @public
   */
  customerProvidedId?: string | undefined;
}

/**
 * Describes a link application log sample.
 *
 * @public
 */
export interface LinkApplicationLogSampling {
  /**
   * An error log entry.
   *
   * @public
   */
  errorLog: number | undefined;

  /**
   * A filter log entry.
   *
   * @public
   */
  filterLog: number | undefined;
}

/**
 * Describes the configuration of a link application log.
 *
 * @public
 */
export interface LinkApplicationLogConfiguration {
  /**
   * Describes a link application log sample.
   *
   * @public
   */
  sampling: LinkApplicationLogSampling | undefined;
}

/**
 * Describes the settings for a link log.
 *
 * @public
 */
export interface LinkLogSettings {
  /**
   * Describes the configuration of a link application log.
   *
   * @public
   */
  applicationLogs: LinkApplicationLogConfiguration | undefined;
}

/**
 * @public
 */
export interface AcceptLinkRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * Attributes of the link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * Settings for the application logs.
   *
   * @public
   */
  logSettings: LinkLogSettings | undefined;

  /**
   * The timeout value in milliseconds.
   *
   * @public
   */
  timeoutInMillis?: number | undefined;
}

/**
 * Describes the parameters of a no bid module.
 *
 * @public
 */
export interface NoBidModuleParameters {
  /**
   * The reason description.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The reason code.
   *
   * @public
   */
  reasonCode?: number | undefined;

  /**
   * The pass through percentage.
   *
   * @public
   */
  passThroughPercentage?: number | undefined;
}

/**
 * Describes the header tag for a bid action.
 *
 * @public
 */
export interface HeaderTagAction {
  /**
   * The name of the bid action.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value of the bid action.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Describes a no bid action.
 *
 * @public
 */
export interface NoBidAction {
  /**
   * The reason code for the no bid action.
   *
   * @public
   */
  noBidReasonCode?: number | undefined;
}

/**
 * Describes a bid action.
 *
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
   * Describes a no bid action.
   *
   * @public
   */
  export interface NoBidMember {
    noBid: NoBidAction;
    headerTag?: never;
    $unknown?: never;
  }

  /**
   * Describes the header tag for a bid action.
   *
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
 * Describes the criteria for a filter.
 *
 * @public
 */
export interface FilterCriterion {
  /**
   * The path to filter.
   *
   * @public
   */
  path: string | undefined;

  /**
   * The value to filter.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Describes the configuration of a filter.
 *
 * @public
 */
export interface Filter {
  /**
   * Describes the criteria for a filter.
   *
   * @public
   */
  criteria: FilterCriterion[] | undefined;
}

/**
 * Describes the parameters of an open RTB attribute module.
 *
 * @public
 */
export interface OpenRtbAttributeModuleParameters {
  /**
   * The filter type.
   *
   * @public
   */
  filterType: FilterType | undefined;

  /**
   * Describes the configuration of a filter.
   *
   * @public
   */
  filterConfiguration: Filter[] | undefined;

  /**
   * Describes a bid action.
   *
   * @public
   */
  action: Action | undefined;

  /**
   * The hold back percentage.
   *
   * @public
   */
  holdbackPercentage: number | undefined;
}

/**
 * Describes the parameters of a rate limit.
 *
 * @public
 */
export interface RateLimiterModuleParameters {
  /**
   * The transactions per second rate limit.
   *
   * @public
   */
  tps?: number | undefined;
}

/**
 * Describes the parameters of a module.
 *
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
   * Describes the parameters of a no bid module.
   *
   * @public
   */
  export interface NoBidMember {
    noBid: NoBidModuleParameters;
    openRtbAttribute?: never;
    rateLimiter?: never;
    $unknown?: never;
  }

  /**
   * Describes the parameters of an open RTB attribute module.
   *
   * @public
   */
  export interface OpenRtbAttributeMember {
    noBid?: never;
    openRtbAttribute: OpenRtbAttributeModuleParameters;
    rateLimiter?: never;
    $unknown?: never;
  }

  /**
   * Describes the parameters of a rate limit.
   *
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
 * Describes the configuration of a module.
 *
 * @public
 */
export interface ModuleConfiguration {
  /**
   * The version of the module.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The name of the module.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The dependencies of the module.
   *
   * @public
   */
  dependsOn?: string[] | undefined;

  /**
   * Describes the parameters of a module.
   *
   * @public
   */
  moduleParameters?: ModuleParameters | undefined;
}

/**
 * @public
 */
export interface AcceptLinkResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the peer gateway.
   *
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * The status of the link.
   *
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * The timestamp of when the link was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the link was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The direction of the link.
   *
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * The configuration of flow modules.
   *
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * The configuration of pending flow modules.
   *
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * Attributes of the link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * Describes the settings for a link log.
   *
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * The connectivity type of the link.
   *
   * @public
   */
  connectivityType?: ConnectivityType | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface AssociateCertificateRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACM certificate to associate.
   *
   * @public
   */
  acmCertificateArn: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `clientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateCertificateResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   *
   * @public
   */
  acmCertificateArn: string | undefined;

  /**
   * The status of the certificate association.
   *
   * @public
   */
  status: CertificateAssociationStatus | undefined;
}

/**
 * The health check configuration for a managed endpoint. Defines how the service probes instances in the Auto Scaling group to determine their health status.
 *
 * @public
 */
export interface HealthCheckConfig {
  /**
   * The port to use for health check probes. Valid range is 80 to 65535.
   *
   * @public
   */
  port: number | undefined;

  /**
   * The destination path for the health check request. Must start with `/`.
   *
   * @public
   */
  path: string | undefined;

  /**
   * The protocol to use for health check probes.
   *
   * @public
   */
  protocol?: Protocol | undefined;

  /**
   * The timeout for each health check probe, in milliseconds. Valid range is 100 to 5000.
   *
   * @public
   */
  timeoutMs?: number | undefined;

  /**
   * The interval between health check probes, in seconds. Valid range is 5 to 60.
   *
   * @public
   */
  intervalSeconds?: number | undefined;

  /**
   * The expected HTTP status code or status code pattern from healthy instances. Supports a single code (for example, `200`), a range (for example, `200-299`), or a comma-separated list (for example, `200,204`).
   *
   * @public
   */
  statusCodeMatcher?: string | undefined;

  /**
   * The number of consecutive successful health checks required before an instance is considered healthy. Valid range is 2 to 10.
   *
   * @public
   */
  healthyThresholdCount?: number | undefined;

  /**
   * The number of consecutive failed health checks required before an instance is considered unhealthy. Valid range is 2 to 10.
   *
   * @public
   */
  unhealthyThresholdCount?: number | undefined;
}

/**
 * Describes the configuration of an auto scaling group.
 *
 * @public
 */
export interface AutoScalingGroupsConfiguration {
  /**
   * The names of the auto scaling group.
   *
   * @public
   */
  autoScalingGroupNames: string[] | undefined;

  /**
   * The role ARN of the auto scaling group.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The health check configuration for the Auto Scaling group managed endpoint.
   *
   * @public
   */
  healthCheckConfig?: HealthCheckConfig | undefined;
}

/**
 * Describes a summary of a certificate association.
 *
 * @public
 */
export interface CertificateAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   *
   * @public
   */
  acmCertificateArn: string | undefined;

  /**
   * The status of the certificate association.
   *
   * @public
   */
  status: CertificateAssociationStatus | undefined;

  /**
   * The timestamp of when the certificate was associated.
   *
   * @public
   */
  associatedAt?: Date | undefined;

  /**
   * The timestamp of when the certificate association was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateInboundExternalLinkRequest {
  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `clientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * Attributes of the link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * Settings for the application logs.
   *
   * @public
   */
  logSettings: LinkLogSettings | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateInboundExternalLinkResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface CreateLinkRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the peer gateway.
   *
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * Attributes of the link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * Boolean to specify if an HTTP responder is allowed.
   *
   * @public
   */
  httpResponderAllowed?: boolean | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Application log settings for the link. This value is required. Under `applicationLogs.sampling`, the `errorLog` and `filterLog` fields set the percentage of eligible events to log. Valid values range from `0` through `100`. To turn off application logs, set both fields to `0`, as in `\{"applicationLogs":\{"sampling":\{"errorLog":0,"filterLog":0\}\}\}`.
   *
   * @public
   */
  logSettings: LinkLogSettings | undefined;

  /**
   * The timeout value in milliseconds.
   *
   * @public
   */
  timeoutInMillis?: number | undefined;
}

/**
 * @public
 */
export interface CreateLinkResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the peer gateway.
   *
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * The timestamp of when the link was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the link was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The direction of the link.
   *
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * The configuration of flow modules.
   *
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * The configuration of pending flow modules.
   *
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * Attributes of the link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * Describes the settings for a link log.
   *
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * The connectivity type of the link.
   *
   * @public
   */
  connectivityType?: ConnectivityType | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The customer-provided unique identifier of the link.
   *
   * @public
   */
  customerProvidedId?: string | undefined;
}

/**
 * A key-value pair for query string matching in a routing rule condition.
 *
 * @public
 */
export interface QueryStringKeyValuePair {
  /**
   * The key of the query string parameter to match. Must contain only RFC 3986 unreserved characters.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the query string parameter to match. Must contain only RFC 3986 unreserved characters.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The conditions for a routing rule. All specified fields must match for the rule to apply (AND logic). At least one condition field must be set.
 *
 * @public
 */
export interface RuleCondition {
  /**
   * The exact host header value to match.
   *
   * @public
   */
  hostHeader?: string | undefined;

  /**
   * A wildcard pattern for host header matching (for example, `*.example.com`).
   *
   * @public
   */
  hostHeaderWildcard?: string | undefined;

  /**
   * The path prefix to match. The request path must start with this value. Must start with `/`.
   *
   * @public
   */
  pathPrefix?: string | undefined;

  /**
   * The exact path to match. Must start with `/`.
   *
   * @public
   */
  pathExact?: string | undefined;

  /**
   * A query string key-value pair that must be present and match exactly.
   *
   * @public
   */
  queryStringEquals?: QueryStringKeyValuePair | undefined;

  /**
   * A query string key that must be present in the request (any value is accepted).
   *
   * @public
   */
  queryStringExists?: string | undefined;
}

/**
 * @public
 */
export interface CreateLinkRoutingRuleRequest {
  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `clientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The priority of the routing rule. Lower numbers are evaluated first. Valid values are 1 to 1000. Priority must be unique among non-deleted rules within a link.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The conditions for the routing rule. All specified fields must match for the rule to apply. At least one condition field must be set.
   *
   * @public
   */
  conditions: RuleCondition | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLinkRoutingRuleResponse {
  /**
   * The unique identifier of the routing rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The status of the routing rule.
   *
   * @public
   */
  status: RuleStatus | undefined;

  /**
   * The timestamp of when the routing rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateOutboundExternalLinkRequest {
  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `clientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * Attributes of the link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * The public endpoint of the link.
   *
   * @public
   */
  publicEndpoint: string | undefined;

  /**
   * Settings for the application logs.
   *
   * @public
   */
  logSettings: LinkLogSettings | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateOutboundExternalLinkResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface CreateRequesterGatewayRequest {
  /**
   * The unique identifier of the Virtual Private Cloud (VPC).
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The unique identifiers of the subnets.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The unique identifiers of the security groups.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `clientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An optional description for the requester gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRequesterGatewayResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The domain name of the requester gateway.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: RequesterGatewayStatus | undefined;
}

/**
 * Listener configuration for the protocols (HTTP, HTTPS, or both) accepted by the gateway.
 *
 * @public
 */
export interface ListenerConfig {
  /**
   * The protocol for connections from clients to the gateway
   *
   * @public
   */
  protocols: Protocol[] | undefined;
}

/**
 * Describes the configuration of an Amazon Elastic Kubernetes Service endpoint.
 *
 * @public
 */
export interface EksEndpointsConfiguration {
  /**
   * The name of the endpoint resource.
   *
   * @public
   */
  endpointsResourceName: string | undefined;

  /**
   * The namespace of the endpoint resource.
   *
   * @public
   */
  endpointsResourceNamespace: string | undefined;

  /**
   * The URI of the cluster API server endpoint.
   *
   * @public
   */
  clusterApiServerEndpointUri: string | undefined;

  /**
   * The CA certificate chain of the cluster API server.
   *
   * @public
   */
  clusterApiServerCaCertificateChain: string | undefined;

  /**
   * The name of the cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The role ARN for the cluster.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Describes the configuration of a managed endpoint.
 *
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
   * Describes the configuration of an auto scaling group.
   *
   * @public
   */
  export interface AutoScalingGroupsMember {
    autoScalingGroups: AutoScalingGroupsConfiguration;
    eksEndpoints?: never;
    $unknown?: never;
  }

  /**
   * Describes the configuration of an Amazon Elastic Kubernetes Service endpoint.
   *
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
 * Describes the configuration of a trust store.
 *
 * @public
 */
export interface TrustStoreConfiguration {
  /**
   * The certificate authority certificate.
   *
   * @public
   */
  certificateAuthorityCertificates: string[] | undefined;
}

/**
 * @public
 */
export interface CreateResponderGatewayRequest {
  /**
   * The unique identifier of the Virtual Private Cloud (VPC).
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * Unique identifiers of the subnets. A service quota for your account sets the number of Availability Zones that your subnets can span. By default, this quota is one Availability Zone. To span more Availability Zones, request a quota increase.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The unique identifiers of the security groups.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * The domain name for the responder gateway.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The networking port to use.
   *
   * @public
   */
  port: number | undefined;

  /**
   * The networking protocol to use.
   *
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * Listener configuration for the protocols (HTTP, HTTPS, or both) accepted by the gateway.
   *
   * @public
   */
  listenerConfig?: ListenerConfig | undefined;

  /**
   * The configuration of the trust store.
   *
   * @public
   */
  trustStoreConfiguration?: TrustStoreConfiguration | undefined;

  /**
   * The configuration for the managed endpoint.
   *
   * @public
   */
  managedEndpointConfiguration?: ManagedEndpointConfiguration | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `clientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An optional description for the responder gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The type of gateway. Valid values are `EXTERNAL` or `INTERNAL`.
   *
   * @public
   */
  gatewayType?: GatewayType | undefined;

  /**
   * The client routing policy of the gateway. This policy controls which Availability Zones RTB Fabric uses to reach the gateway for the requester gateways that send traffic to it. Valid values are the following:
   *
   * - `AVAILABILITY_ZONE_AFFINITY`: RTB Fabric routes each requester's traffic to gateway capacity in the requester's own Availability Zone when the gateway has capacity available there. Otherwise, RTB Fabric routes the traffic to gateway capacity in the other Availability Zones of the gateway.
   * - `ANY_AVAILABILITY_ZONE`: RTB Fabric routes each requester's traffic to gateway capacity in every Availability Zone that the subnets of the gateway span. The Availability Zone that the requester is in does not change this.
   *
   * If you don't specify a value, RTB Fabric uses `AVAILABILITY_ZONE_AFFINITY`. To get the behavior of `ANY_AVAILABILITY_ZONE`, create the gateway with subnets in more than one Availability Zone. RTB Fabric does not support partial Availability Zone affinity, so `PARTIAL_AVAILABILITY_ZONE_AFFINITY` is not a valid value. For more information, see [Configuring Availability Zone affinity](https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-gateways.html#configuring-availability-zone-affinity) in the *Amazon Web Services RTB Fabric User Guide*.
   *
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;
}

/**
 * @public
 */
export interface CreateResponderGatewayResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: ResponderGatewayStatus | undefined;

  /**
   * The listener configuration for the responder gateway.
   *
   * @public
   */
  listenerConfig?: ListenerConfig | undefined;

  /**
   * The external inbound endpoint for the responder gateway.
   *
   * @public
   */
  externalInboundEndpoint?: string | undefined;

  /**
   * The client routing policy of the gateway. This policy controls which Availability Zones RTB Fabric uses to reach the gateway for the requester gateways that send traffic to it. For more information, see [Configuring Availability Zone affinity](https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-gateways.html#configuring-availability-zone-affinity) in the *Amazon Web Services RTB Fabric User Guide*.
   *
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;
}

/**
 * @public
 */
export interface DeleteInboundExternalLinkRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInboundExternalLinkResponse {
  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface DeleteLinkRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLinkResponse {
  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The status of the link.
   *
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface DeleteLinkRoutingRuleRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The unique identifier of the routing rule.
   *
   * @public
   */
  ruleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLinkRoutingRuleResponse {
  /**
   * The unique identifier of the routing rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The status of the routing rule.
   *
   * @public
   */
  status: RuleStatus | undefined;
}

/**
 * @public
 */
export interface DeleteOutboundExternalLinkRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOutboundExternalLinkResponse {
  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface DeleteRequesterGatewayRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRequesterGatewayResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: RequesterGatewayStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResponderGatewayRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResponderGatewayResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: ResponderGatewayStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACM certificate to disassociate.
   *
   * @public
   */
  acmCertificateArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   *
   * @public
   */
  acmCertificateArn: string | undefined;

  /**
   * The status of the certificate association.
   *
   * @public
   */
  status: CertificateAssociationStatus | undefined;
}

/**
 * @public
 */
export interface GetLinkRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface GetLinkResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the peer gateway.
   *
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * The status of the link.
   *
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * The timestamp of when the link was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the link was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The direction of the link.
   *
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * The configuration of flow modules.
   *
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * The configuration of pending flow modules.
   *
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * Attributes of the link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * Settings for the application logs.
   *
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * The connectivity type of the link.
   *
   * @public
   */
  connectivityType?: ConnectivityType | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * A map of the key-value pairs for the tag or tags assigned to the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Boolean to specify if an HTTP responder is allowed.
   *
   * @public
   */
  httpResponderAllowed?: boolean | undefined;

  /**
   * The timeout value in milliseconds.
   *
   * @public
   */
  timeoutInMillis?: number | undefined;
}

/**
 * @public
 */
export interface GetLinkRoutingRuleRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The unique identifier of the routing rule.
   *
   * @public
   */
  ruleId: string | undefined;
}

/**
 * @public
 */
export interface GetLinkRoutingRuleResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The unique identifier of the routing rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The priority of the routing rule.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The conditions for the routing rule.
   *
   * @public
   */
  conditions: RuleCondition | undefined;

  /**
   * The status of the routing rule.
   *
   * @public
   */
  status: RuleStatus | undefined;

  /**
   * The timestamp of when the routing rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the routing rule was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * A map of the key-value pairs for the tag or tags assigned to the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListLinkRoutingRulesRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of a link routing rule.
 *
 * @public
 */
export interface LinkRoutingRuleSummary {
  /**
   * The unique identifier of the routing rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The priority of the routing rule.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The conditions for the routing rule.
   *
   * @public
   */
  conditions: RuleCondition | undefined;

  /**
   * The status of the routing rule.
   *
   * @public
   */
  status: RuleStatus | undefined;

  /**
   * The timestamp of when the routing rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the routing rule was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListLinkRoutingRulesResponse {
  /**
   * The list of routing rules for the link.
   *
   * @public
   */
  rules?: LinkRoutingRuleSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLinkRoutingRuleRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The unique identifier of the routing rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The updated priority of the routing rule. Lower numbers are evaluated first. Valid values are 1 to 1000. Priority must be unique among non-deleted rules within a link.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The updated conditions for the routing rule. All specified fields must match for the rule to apply. At least one condition field must be set.
   *
   * @public
   */
  conditions: RuleCondition | undefined;
}

/**
 * @public
 */
export interface UpdateLinkRoutingRuleResponse {
  /**
   * The unique identifier of the routing rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The status of the routing rule.
   *
   * @public
   */
  status: RuleStatus | undefined;

  /**
   * The timestamp of when the routing rule was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListLinksRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes a link.
 *
 * @public
 */
export interface ListLinksResponseStructure {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the peer gateway.
   *
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * The status of the link.
   *
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * The timestamp of when the link was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the link was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The direction of the link.
   *
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * Describes the configuration of flow modules.
   *
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * Describes the configuration of pending flow modules.
   *
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * Describes attributes of a link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * Describes the settings for a link log.
   *
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * The connectivity type of the link.
   *
   * @public
   */
  connectivityType?: ConnectivityType | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The public endpoint of the outbound link.
   *
   * @public
   */
  publicEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface ListLinksResponse {
  /**
   * Information about created links.
   *
   * @public
   */
  links?: ListLinksResponseStructure[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectLinkRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface RejectLinkResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the peer gateway.
   *
   * @public
   */
  peerGatewayId: string | undefined;

  /**
   * The status of the link.
   *
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * The timestamp of when the link was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the link was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The direction of the link.
   *
   * @public
   */
  direction?: LinkDirection | undefined;

  /**
   * The configuration of flow modules.
   *
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * The configuration of pending flow modules.
   *
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * Attributes of the link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * Describes the settings for a link log.
   *
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * The connectivity type of the link.
   *
   * @public
   */
  connectivityType?: ConnectivityType | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface UpdateLinkRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * Settings for the application logs.
   *
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * The timeout value in milliseconds.
   *
   * @public
   */
  timeoutInMillis?: number | undefined;
}

/**
 * @public
 */
export interface UpdateLinkResponse {
  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface UpdateLinkModuleFlowRequest {
  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `clientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The configuration of a module.
   *
   * @public
   */
  modules: ModuleConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateLinkModuleFlowResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: LinkStatus | undefined;
}

/**
 * @public
 */
export interface GetCertificateAssociationRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   *
   * @public
   */
  acmCertificateArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateAssociationResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   *
   * @public
   */
  acmCertificateArn: string | undefined;

  /**
   * The status of the certificate association.
   *
   * @public
   */
  status: CertificateAssociationStatus | undefined;

  /**
   * The timestamp of when the certificate was associated.
   *
   * @public
   */
  associatedAt?: Date | undefined;

  /**
   * The timestamp of when the certificate association was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetInboundExternalLinkRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface GetInboundExternalLinkResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The configuration of flow modules.
   *
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * The configuration of pending flow modules.
   *
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * Attributes of the link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * The timestamp of when the inbound external link was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the inbound external link was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * A map of the key-value pairs for the tag or tags assigned to the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Settings for the application logs.
   *
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * The connectivity type of the link.
   *
   * @public
   */
  connectivityType?: ConnectivityType | undefined;
}

/**
 * @public
 */
export interface GetOutboundExternalLinkRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;
}

/**
 * @public
 */
export interface GetOutboundExternalLinkResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The unique identifier of the link.
   *
   * @public
   */
  linkId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * The public endpoint for the link.
   *
   * @public
   */
  publicEndpoint: string | undefined;

  /**
   * The configuration of flow modules.
   *
   * @public
   */
  flowModules?: ModuleConfiguration[] | undefined;

  /**
   * The configuration of pending flow modules.
   *
   * @public
   */
  pendingFlowModules?: ModuleConfiguration[] | undefined;

  /**
   * Describes the attributes of a link.
   *
   * @public
   */
  attributes?: LinkAttributes | undefined;

  /**
   * The timestamp of when the outbound external link was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the outbound external link was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * A map of the key-value pairs for the tag or tags assigned to the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Settings for the application logs.
   *
   * @public
   */
  logSettings?: LinkLogSettings | undefined;

  /**
   * The connectivity type of the link.
   *
   * @public
   */
  connectivityType?: ConnectivityType | undefined;
}

/**
 * @public
 */
export interface GetRequesterGatewayRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface GetRequesterGatewayResponse {
  /**
   * The status of the request.
   *
   * @public
   */
  status: RequesterGatewayStatus | undefined;

  /**
   * The domain name of the requester gateway.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The description of the requester gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the requester gateway was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the requester gateway was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The unique identifier of the Virtual Private Cloud (VPC).
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The unique identifiers of the subnets.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The unique identifiers of the security groups.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * A map of the key-value pairs for the tag or tags assigned to the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The count of active links for the requester gateway.
   *
   * @public
   */
  activeLinksCount?: number | undefined;

  /**
   * The total count of links for the requester gateway.
   *
   * @public
   */
  totalLinksCount?: number | undefined;
}

/**
 * @public
 */
export interface GetResponderGatewayRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface GetResponderGatewayResponse {
  /**
   * The unique identifier of the Virtual Private Cloud (VPC).
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The unique identifiers of the subnets.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The unique identifiers of the security groups.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: ResponderGatewayStatus | undefined;

  /**
   * The description of the responder gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp of when the responder gateway was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the responder gateway was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The domain name of the responder gateway.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The networking port.
   *
   * @public
   */
  port: number | undefined;

  /**
   * The networking protocol.
   *
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * The listener configuration for the responder gateway.
   *
   * @public
   */
  listenerConfig?: ListenerConfig | undefined;

  /**
   * The configuration of the trust store.
   *
   * @public
   */
  trustStoreConfiguration?: TrustStoreConfiguration | undefined;

  /**
   * The configuration of the managed endpoint.
   *
   * @public
   */
  managedEndpointConfiguration?: ManagedEndpointConfiguration | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * A map of the key-value pairs for the tag or tags assigned to the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The count of active links for the responder gateway.
   *
   * @public
   */
  activeLinksCount?: number | undefined;

  /**
   * The total count of links for the responder gateway.
   *
   * @public
   */
  totalLinksCount?: number | undefined;

  /**
   * The count of requested links waiting for the responder gateway to accept or reject.
   *
   * @public
   */
  linksRequestedCount?: number | undefined;

  /**
   * The type of gateway. Valid values are `EXTERNAL` or `INTERNAL`.
   *
   * @public
   */
  gatewayType?: GatewayType | undefined;

  /**
   * The external inbound endpoint for the responder gateway.
   *
   * @public
   */
  externalInboundEndpoint?: string | undefined;

  /**
   * The client routing policy of the gateway. This policy controls which Availability Zones RTB Fabric uses to reach the gateway for the requester gateways that send traffic to it. RTB Fabric omits this member if the gateway has never had a client routing policy. An omitted value means that the gateway uses `AVAILABILITY_ZONE_AFFINITY`. For more information, see [Configuring Availability Zone affinity](https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-gateways.html#configuring-availability-zone-affinity) in the *Amazon Web Services RTB Fabric User Guide*.
   *
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;
}

/**
 * @public
 */
export interface ListCertificateAssociationsRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCertificateAssociationsResponse {
  /**
   * The list of certificate associations for the gateway.
   *
   * @public
   */
  certificateAssociations: CertificateAssociationSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRequesterGatewaysRequest {
  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRequesterGatewaysResponse {
  /**
   * The unique identifier of the gateways.
   *
   * @public
   */
  gatewayIds?: string[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResponderGatewaysRequest {
  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResponderGatewaysResponse {
  /**
   * The unique identifier of the gateways.
   *
   * @public
   */
  gatewayIds?: string[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
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
   * The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags.
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
   * A map of the key-value pairs for the tag or tags assigned to the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateRequesterGatewayRequest {
  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `clientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * An optional description for the requester gateway.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRequesterGatewayResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: RequesterGatewayStatus | undefined;
}

/**
 * @public
 */
export interface UpdateResponderGatewayRequest {
  /**
   * Domain name for the responder gateway. This operation does not change the domain name of an existing gateway. To use a different domain name, delete the gateway and create a new one.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * Networking port to use. This operation does not change the port of an existing gateway. To use a different port, delete the gateway and create a new one.
   *
   * @public
   */
  port: number | undefined;

  /**
   * Networking protocol to use. This operation does not change the protocol of an existing gateway. To use a different protocol, delete the gateway and create a new one.
   *
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * The listener configuration for the responder gateway.
   *
   * @public
   */
  listenerConfig?: ListenerConfig | undefined;

  /**
   * The configuration of the trust store.
   *
   * @public
   */
  trustStoreConfiguration?: TrustStoreConfiguration | undefined;

  /**
   * The configuration for the managed endpoint.
   *
   * @public
   */
  managedEndpointConfiguration?: ManagedEndpointConfiguration | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `clientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * An optional description for the responder gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The client routing policy of the gateway. This policy controls which Availability Zones RTB Fabric uses to reach the gateway for the requester gateways that send traffic to it. Valid values are the following:
   *
   * - `AVAILABILITY_ZONE_AFFINITY`: RTB Fabric routes each requester's traffic to gateway capacity in the requester's own Availability Zone when the gateway has capacity available there. Otherwise, RTB Fabric routes the traffic to gateway capacity in the other Availability Zones of the gateway.
   * - `ANY_AVAILABILITY_ZONE`: RTB Fabric routes each requester's traffic to gateway capacity in every Availability Zone that the subnets of the gateway span. The Availability Zone that the requester is in does not change this.
   *
   * If you don't specify a value, the gateway keeps its current client routing policy. Changing the policy sets the gateway status to `PENDING_UPDATE` until the change is complete. RTB Fabric does not support partial Availability Zone affinity, so `PARTIAL_AVAILABILITY_ZONE_AFFINITY` is not a valid value. For more information, see [Configuring Availability Zone affinity](https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-gateways.html#configuring-availability-zone-affinity) in the *Amazon Web Services RTB Fabric User Guide*.
   *
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;
}

/**
 * @public
 */
export interface UpdateResponderGatewayResponse {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  status: ResponderGatewayStatus | undefined;

  /**
   * The client routing policy of the gateway. If the operation changed this policy, the gateway uses the new policy after its status returns to `ACTIVE`. For more information, see [Configuring Availability Zone affinity](https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-gateways.html#configuring-availability-zone-affinity) in the *Amazon Web Services RTB Fabric User Guide*.
   *
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
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
   * The Amazon Resource Name (ARN) of the resource that you want to untag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
