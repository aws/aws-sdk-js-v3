// smithy-typescript generated code
import type {
  CertificateAssociationStatus,
  ClientRoutingPolicy,
  ConfigurableAction,
  ConnectivityType,
  ErrorCode,
  FailureMode,
  FilterType,
  GatewayType,
  LinkDirection,
  LinkStatus,
  ModulePermission,
  ModuleVersionStatus,
  Protocol,
  RequesterGatewayStatus,
  ResponderErrorMaskingAction,
  ResponderErrorMaskingLoggingType,
  ResponderGatewayStatus,
  RuleStatus,
  SubscriptionStatus,
  SubscriptionType,
  UpdateStatus,
  UpdateType,
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
 * <p>Describes one cause of a failure of a resource or an update, with an error code, a description, and the IDs of the resources involved.</p>
 * @public
 */
export interface ErrorDetail {
  /**
   * <p>The error code for what failed.</p>
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * <p>A description of the failure.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>The IDs of the resources involved, such as a subnet or security group.</p>
   * @public
   */
  resourceIds?: string[] | undefined;
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
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;

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
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>clientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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
 * <p>A module that you can attach, as ListAvailableModules returns it. ListAvailableModules and GetAvailableModule never return how a module is implemented.</p>
 * @public
 */
export interface AvailableModuleSummary {
  /**
   * <p>The module's ID.</p>
   * @public
   */
  moduleId: string | undefined;

  /**
   * <p>The module's ARN.</p>
   * @public
   */
  moduleArn: string | undefined;

  /**
   * <p>A label, not unique: modules can share a name.</p>
   * @public
   */
  moduleName: string | undefined;

  /**
   * <p>The type of access that you have to the module.</p>
   * @public
   */
  subscriptionType: SubscriptionType | undefined;

  /**
   * <p>Specifies whether your access to the module is current.</p>
   * @public
   */
  subscriptionStatus: SubscriptionStatus | undefined;

  /**
   * <p>The Marketplace product the module is sold under. Present only when subscriptionType is MARKETPLACE.</p>
   * @public
   */
  marketplaceProductId?: string | undefined;
}

/**
 * <p>A version of a module that you can attach, as ListAvailableModuleVersions returns it. ListAvailableModuleVersions and GetAvailableModuleVersion never return how a version is implemented.</p>
 * @public
 */
export interface AvailableModuleVersionSummary {
  /**
   * <p>The version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The version's ARN.</p>
   * @public
   */
  moduleVersionArn: string | undefined;

  /**
   * <p>ACTIVE or DEPRECATED.</p>
   * @public
   */
  status: ModuleVersionStatus | undefined;

  /**
   * <p>The time when the version was created.</p>
   * @public
   */
  createdAt: Date | undefined;
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
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>clientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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
   * <p>Application log settings for the link. This value is required. Under <code>applicationLogs.sampling</code>, the <code>errorLog</code> and <code>filterLog</code> fields set the percentage of eligible events to log. Valid values range from <code>0</code> through <code>100</code>. To turn off application logs, set both fields to <code>0</code>, as in <code>\{"applicationLogs":\{"sampling":\{"errorLog":0,"filterLog":0\}\}\}</code>.</p>
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
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;

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
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>clientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>clientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>clientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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
   * <p>Unique identifiers of the subnets. A service quota for your account sets the number of Availability Zones that your subnets can span. By default, this quota is one Availability Zone. To span more Availability Zones, request a quota increase.</p>
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
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>clientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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

  /**
   * <p>The client routing policy of the gateway. This policy controls which Availability Zones RTB Fabric uses to reach the gateway for the requester gateways that send traffic to it. Valid values are the following:</p> <ul> <li> <p> <code>AVAILABILITY_ZONE_AFFINITY</code>: RTB Fabric routes each requester's traffic to gateway capacity in the requester's own Availability Zone when the gateway has capacity available there. Otherwise, RTB Fabric routes the traffic to gateway capacity in the other Availability Zones of the gateway.</p> </li> <li> <p> <code>ANY_AVAILABILITY_ZONE</code>: RTB Fabric routes each requester's traffic to gateway capacity in every Availability Zone that the subnets of the gateway span. The Availability Zone that the requester is in does not change this.</p> </li> </ul> <p>If you don't specify a value, RTB Fabric uses <code>AVAILABILITY_ZONE_AFFINITY</code>. To get the behavior of <code>ANY_AVAILABILITY_ZONE</code>, create the gateway with subnets in more than one Availability Zone. RTB Fabric does not support partial Availability Zone affinity, so <code>PARTIAL_AVAILABILITY_ZONE_AFFINITY</code> is not a valid value. For more information, see <a href="https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-gateways.html#configuring-availability-zone-affinity">Configuring Availability Zone affinity</a> in the <i>Amazon Web Services RTB Fabric User Guide</i>.</p>
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;
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

  /**
   * <p>The client routing policy of the gateway. This policy controls which Availability Zones RTB Fabric uses to reach the gateway for the requester gateways that send traffic to it. For more information, see <a href="https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-gateways.html#configuring-availability-zone-affinity">Configuring Availability Zone affinity</a> in the <i>Amazon Web Services RTB Fabric User Guide</i>.</p>
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;
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
 * <p>A version attached to a flow, with its settings.</p>
 * @public
 */
export interface FlowModule {
  /**
   * <p>The module's name, unique within the flow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version to attach. It must be ACTIVE and available to you (see ListAvailableModuleVersions). You can keep a version that's already in the link's flows after it's deprecated, but you can't give it a higher share of traffic.</p>
   * @public
   */
  moduleVersionArn: string | undefined;

  /**
   * <p>The capabilities to turn on, chosen from the version's <code>configurableActions</code>. If the version exposes one, it's the default. If the version exposes more than one, this field is required. If it exposes none, omit this field.</p>
   * @public
   */
  selectedActions?: ConfigurableAction[] | undefined;

  /**
   * <p>Specifies what happens when the module fails – when its call fails or times out, or when an express module's dataset is stale. The default is OPEN.</p>
   * @public
   */
  failureMode?: FailureMode | undefined;

  /**
   * <p>The percentage of the flow's requests that the module runs on. The flow skips the module on the rest of the requests. The default is 100.</p>
   * @public
   */
  activationPercentage?: number | undefined;

  /**
   * <p>RTB Fabric validates the value against the version's <code>configurationSchema</code> and rejects a value that fails with ValidationException. Omit it when the schema is empty or fully defaulted.</p>
   * @public
   */
  configurationValues?: string | undefined;
}

/**
 * <p>One phase of a phased pipeline. Its modules run concurrently on the previous phase's output.</p>
 * @public
 */
export interface FlowPhase {
  /**
   * <p>At most one MUTATE_REQUEST_BODY module.</p>
   * @public
   */
  modules: FlowModule[] | undefined;
}

/**
 * <p>Phases that run in order; each starts after the previous one completes.</p>
 * @public
 */
export interface PhasedPipeline {
  /**
   * <p>At most 8 modules in total across the phases; more fails with ValidationException.</p>
   * @public
   */
  phases: FlowPhase[] | undefined;
}

/**
 * <p>Modules that run one after another, each on the previous module's output.</p>
 * @public
 */
export interface SequentialPipeline {
  /**
   * <p>In execution order.</p>
   * @public
   */
  modules: FlowModule[] | undefined;
}

/**
 * <p>How a flow's modules run. In <code>sequential</code>, each module sees the previous module's output; in <code>phased</code>, a phase's modules see the prior phase's output, not each other's. Set exactly one. New members can be added, so handle an unknown one.</p>
 * @public
 */
export type FlowPipeline =
  | FlowPipeline.PhasedMember
  | FlowPipeline.SequentialMember
  | FlowPipeline.$UnknownMember;

/**
 * @public
 */
export namespace FlowPipeline {
  /**
   * <p>Modules run in list order. Use it when each module needs the previous module's output.</p>
   * @public
   */
  export interface SequentialMember {
    sequential: SequentialPipeline;
    phased?: never;
    $unknown?: never;
  }

  /**
   * <p>Phases run in order; a phase's modules run concurrently on the same input. Use it when a phase's modules don't depend on each other.</p>
   * @public
   */
  export interface PhasedMember {
    sequential?: never;
    phased: PhasedPipeline;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sequential?: never;
    phased?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sequential: (value: SequentialPipeline) => T;
    phased: (value: PhasedPipeline) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>One flow on a link: a set of modules that runs on the link's bid requests.</p>
 * @public
 */
export interface Flow {
  /**
   * <p>The flow's name, unique within the link.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The pipeline that the flow's modules run in. In a sequential pipeline, each module sees the previous module's output. In a phased pipeline, a phase's modules see the prior phase's output, not each other's.</p>
   * @public
   */
  pipeline: FlowPipeline | undefined;
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
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;

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

  /**
   * <p>The link's concurrency token. Pass it to PutLinkFlows unchanged; it changes whenever the link does.</p>
   * @public
   */
  lockToken?: string | undefined;

  /**
   * <p>The link's active flows, in the form PutLinkFlows takes. Empty when the link has no modules, and absent when its modules were set with UpdateLinkModuleFlow.</p>
   * @public
   */
  flows?: Flow[] | undefined;
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

  /**
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;
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

  /**
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;
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

  /**
   * <p>A unique, case-sensitive identifier for the request. The SDK generates one when you don't.</p>
   * @public
   */
  clientToken?: string | undefined;
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

  /**
   * <p>The ID of the update this call started.</p>
   * @public
   */
  updateId: string | undefined;
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
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;

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
export interface PutLinkFlowsRequest {
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
   * <p>A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry with the same token and parameters, you get the original response without an error. If you retry with the same token but different parameters, the call fails with ValidationException. If you don't provide a token, the SDK generates one, and RTB Fabric remembers it for 8 hours. A retry returns the original <code>updateId</code> before <code>lockToken</code> is checked.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The concurrency token that you read from GetLink. If the link changed since that read, by any operation, the call fails with ConflictException.</p>
   * @public
   */
  lockToken: string | undefined;

  /**
   * <p>The link's flows, replacing the current ones. An empty list removes every flow.</p>
   * @public
   */
  flows: Flow[] | undefined;
}

/**
 * @public
 */
export interface PutLinkFlowsResponse {
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
   * <p>The link's status. A successful call returns PENDING_UPDATE, and the link serves its prior flows until the change completes.</p>
   * @public
   */
  status: LinkStatus | undefined;

  /**
   * <p>The ID of the update this call started.</p>
   * @public
   */
  updateId: string | undefined;
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
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;

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

  /**
   * <p>A unique, case-sensitive identifier for the request. The SDK generates one when you don't.</p>
   * @public
   */
  clientToken?: string | undefined;
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

  /**
   * <p>The ID of the update this call started.</p>
   * @public
   */
  updateId: string | undefined;
}

/**
 * @public
 */
export interface UpdateLinkModuleFlowRequest {
  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>clientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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

  /**
   * <p>The ID of the update this call started.</p>
   * @public
   */
  updateId: string | undefined;
}

/**
 * @public
 */
export interface GetUpdateRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The unique identifier of the update.</p>
   * @public
   */
  updateId: string | undefined;
}

/**
 * <p>A requested link configuration.</p>
 * @public
 */
export interface LinkConfigParameters {
  /**
   * <p>Describes the settings for a link log.</p>
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
 * <p>A requested link flow.</p>
 * @public
 */
export type LinkFlowParameters =
  | LinkFlowParameters.FlowsMember
  | LinkFlowParameters.ModulesMember
  | LinkFlowParameters.$UnknownMember;

/**
 * @public
 */
export namespace LinkFlowParameters {
  /**
   * <p>The requested modules.</p>
   * @public
   */
  export interface ModulesMember {
    modules: ModuleConfiguration[];
    flows?: never;
    $unknown?: never;
  }

  /**
   * <p>A link's flows: at most one.</p>
   * @public
   */
  export interface FlowsMember {
    modules?: never;
    flows: Flow[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    modules?: never;
    flows?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    modules: (value: ModuleConfiguration[]) => T;
    flows: (value: Flow[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A requested responder gateway configuration.</p>
 * @public
 */
export interface ResponderGatewayConfigParameters {
  /**
   * <p>The gateway's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The gateway's client routing policy.</p>
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;

  /**
   * <p>The gateway's domain name.</p>
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
   * <p>Listener configuration for the protocols (HTTP, HTTPS, or both) accepted by the gateway.</p>
   * @public
   */
  listenerConfig?: ListenerConfig | undefined;

  /**
   * <p>Describes the configuration of a trust store.</p>
   * @public
   */
  trustStoreConfiguration?: TrustStoreConfiguration | undefined;

  /**
   * <p>Describes the configuration of a managed endpoint.</p>
   * @public
   */
  managedEndpointConfiguration?: ManagedEndpointConfiguration | undefined;
}

/**
 * <p>A requested routing rule.</p>
 * @public
 */
export interface RoutingRuleParameters {
  /**
   * <p>WAF-style evaluation priority. Lower number = evaluated first (priority 1 before 10). Gaps are allowed (1, 10, 20 is valid). Must be between 1 and 1000 inclusive. Uniqueness per link among non-deleted rules is enforced at the API layer (HTTP 409 on conflict).</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The conditions for a routing rule. All specified fields must match for the rule to apply (AND logic). At least one condition field must be set.</p>
   * @public
   */
  conditions: RuleCondition | undefined;
}

/**
 * <p>What an update requested.</p>
 * @public
 */
export type UpdateParameters =
  | UpdateParameters.LinkConfigMember
  | UpdateParameters.LinkFlowMember
  | UpdateParameters.ResponderGatewayConfigMember
  | UpdateParameters.RoutingRuleMember
  | UpdateParameters.$UnknownMember;

/**
 * @public
 */
export namespace UpdateParameters {
  /**
   * <p>The requested responder gateway configuration.</p>
   * @public
   */
  export interface ResponderGatewayConfigMember {
    responderGatewayConfig: ResponderGatewayConfigParameters;
    linkConfig?: never;
    linkFlow?: never;
    routingRule?: never;
    $unknown?: never;
  }

  /**
   * <p>The requested link configuration.</p>
   * @public
   */
  export interface LinkConfigMember {
    responderGatewayConfig?: never;
    linkConfig: LinkConfigParameters;
    linkFlow?: never;
    routingRule?: never;
    $unknown?: never;
  }

  /**
   * <p>The requested link flow.</p>
   * @public
   */
  export interface LinkFlowMember {
    responderGatewayConfig?: never;
    linkConfig?: never;
    linkFlow: LinkFlowParameters;
    routingRule?: never;
    $unknown?: never;
  }

  /**
   * <p>The requested routing rule.</p>
   * @public
   */
  export interface RoutingRuleMember {
    responderGatewayConfig?: never;
    linkConfig?: never;
    linkFlow?: never;
    routingRule: RoutingRuleParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    responderGatewayConfig?: never;
    linkConfig?: never;
    linkFlow?: never;
    routingRule?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    responderGatewayConfig: (value: ResponderGatewayConfigParameters) => T;
    linkConfig: (value: LinkConfigParameters) => T;
    linkFlow: (value: LinkFlowParameters) => T;
    routingRule: (value: RoutingRuleParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface Unit {}

/**
 * <p>The link an update targeted.</p>
 * @public
 */
export interface LinkTarget {
  /**
   * <p>The unique identifier of the link.</p>
   * @public
   */
  linkId: string | undefined;
}

/**
 * <p>The routing rule an update targeted.</p>
 * @public
 */
export interface RoutingRuleTarget {
  /**
   * <p>The unique identifier of the rule's link.</p>
   * @public
   */
  linkId: string | undefined;

  /**
   * <p>Identifier for a routing rule</p>
   * @public
   */
  ruleId: string | undefined;
}

/**
 * <p>What an update targeted.</p>
 * @public
 */
export type UpdateTarget =
  | UpdateTarget.GatewayMember
  | UpdateTarget.LinkMember
  | UpdateTarget.RoutingRuleMember
  | UpdateTarget.$UnknownMember;

/**
 * @public
 */
export namespace UpdateTarget {
  /**
   * <p>The gateway itself.</p>
   * @public
   */
  export interface GatewayMember {
    gateway: Unit;
    link?: never;
    routingRule?: never;
    $unknown?: never;
  }

  /**
   * <p>A link on the gateway.</p>
   * @public
   */
  export interface LinkMember {
    gateway?: never;
    link: LinkTarget;
    routingRule?: never;
    $unknown?: never;
  }

  /**
   * <p>A routing rule on one of the gateway's links.</p>
   * @public
   */
  export interface RoutingRuleMember {
    gateway?: never;
    link?: never;
    routingRule: RoutingRuleTarget;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    gateway?: never;
    link?: never;
    routingRule?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    gateway: (value: Unit) => T;
    link: (value: LinkTarget) => T;
    routingRule: (value: RoutingRuleTarget) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>An accepted configuration change and its status.</p>
 * @public
 */
export interface Update {
  /**
   * <p>The unique identifier of the update.</p>
   * @public
   */
  updateId: string | undefined;

  /**
   * <p>The type of change.</p>
   * @public
   */
  type: UpdateType | undefined;

  /**
   * <p>The status of the update.</p>
   * @public
   */
  status: UpdateStatus | undefined;

  /**
   * <p>The resource that the update targeted.</p>
   * @public
   */
  target: UpdateTarget | undefined;

  /**
   * <p>The timestamp of when the update was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The changes that the update requested.</p>
   * @public
   */
  parameters?: UpdateParameters | undefined;

  /**
   * <p>The causes of the failure. Present only when the update has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface GetUpdateResponse {
  /**
   * <p>The update.</p>
   * @public
   */
  update: Update | undefined;
}

/**
 * @public
 */
export interface ListUpdatesRequest {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The ID of a link on this gateway, to list only that link's updates. Omit both <code>linkId</code> and <code>ruleId</code> to list the gateway's own updates.</p>
   * @public
   */
  linkId?: string | undefined;

  /**
   * <p>The ID of a routing rule, to list only that rule's updates. Requires <code>linkId</code>, because you address a rule through its link. A <code>ruleId</code> without <code>linkId</code> fails with ValidationException.</p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p>Lists only updates of this type.</p>
   * @public
   */
  type?: UpdateType | undefined;

  /**
   * <p>Lists only updates in this status.</p>
   * @public
   */
  status?: UpdateStatus | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of an update.</p>
 * @public
 */
export interface UpdateSummary {
  /**
   * <p>The unique identifier of the update.</p>
   * @public
   */
  updateId: string | undefined;

  /**
   * <p>The type of change.</p>
   * @public
   */
  type: UpdateType | undefined;

  /**
   * <p>The status of the update.</p>
   * @public
   */
  status: UpdateStatus | undefined;

  /**
   * <p>The timestamp of when the update was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListUpdatesResponse {
  /**
   * <p>The updates on this page.</p>
   * @public
   */
  updates: UpdateSummary[] | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAvailableModuleRequest {
  /**
   * <p>The module's ID.</p>
   * @public
   */
  moduleId: string | undefined;
}

/**
 * @public
 */
export interface GetAvailableModuleResponse {
  /**
   * <p>The module's ID.</p>
   * @public
   */
  moduleId: string | undefined;

  /**
   * <p>The module's ARN.</p>
   * @public
   */
  moduleArn: string | undefined;

  /**
   * <p>A label, not unique: modules can share a name.</p>
   * @public
   */
  moduleName: string | undefined;

  /**
   * <p>The module's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of access that you have to the module.</p>
   * @public
   */
  subscriptionType: SubscriptionType | undefined;

  /**
   * <p>Specifies whether your access to the module is current.</p>
   * @public
   */
  subscriptionStatus: SubscriptionStatus | undefined;

  /**
   * <p>The Marketplace product the module is sold under. Present only when subscriptionType is MARKETPLACE.</p>
   * @public
   */
  marketplaceProductId?: string | undefined;

  /**
   * <p>The time when the module was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAvailableModuleVersionRequest {
  /**
   * <p>The module's ID.</p>
   * @public
   */
  moduleId: string | undefined;

  /**
   * <p>The version.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface GetAvailableModuleVersionResponse {
  /**
   * <p>The module's ID.</p>
   * @public
   */
  moduleId: string | undefined;

  /**
   * <p>The version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The version's ARN.</p>
   * @public
   */
  moduleVersionArn: string | undefined;

  /**
   * <p>ACTIVE or DEPRECATED.</p>
   * @public
   */
  status: ModuleVersionStatus | undefined;

  /**
   * <p>The data-access grants the version holds.</p>
   * @public
   */
  permissions: ModulePermission[] | undefined;

  /**
   * <p>The capabilities that you can turn on when you attach the version.</p>
   * @public
   */
  configurableActions: ConfigurableAction[] | undefined;

  /**
   * <p>The JSON Schema for the parameters that you can set in <code>configurationValues</code> when you attach the version.</p>
   * @public
   */
  configurationSchema?: string | undefined;

  /**
   * <p>The vendor's release notes.</p>
   * @public
   */
  releaseNotes?: string | undefined;

  /**
   * <p>The time when the version was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the version last changed.</p>
   * @public
   */
  updatedAt: Date | undefined;
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

  /**
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;
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

  /**
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;

  /**
   * <p>The link's concurrency token. Pass it to PutLinkFlows unchanged; it changes whenever the link does.</p>
   * @public
   */
  lockToken?: string | undefined;

  /**
   * <p>The link's active flows, in the form PutLinkFlows takes. Empty when the link has no modules, and absent when its modules were set with UpdateLinkModuleFlow.</p>
   * @public
   */
  flows?: Flow[] | undefined;
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

  /**
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;

  /**
   * <p>The link's concurrency token. Pass it to PutLinkFlows unchanged; it changes whenever the link does.</p>
   * @public
   */
  lockToken?: string | undefined;

  /**
   * <p>The link's active flows, in the form PutLinkFlows takes. Empty when the link has no modules, and absent when its modules were set with UpdateLinkModuleFlow.</p>
   * @public
   */
  flows?: Flow[] | undefined;
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
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;

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
   * <p>The causes of the failure, such as a deleted subnet. Present only when the resource has failed.</p>
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;

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

  /**
   * <p>The client routing policy of the gateway. This policy controls which Availability Zones RTB Fabric uses to reach the gateway for the requester gateways that send traffic to it. RTB Fabric omits this member if the gateway has never had a client routing policy. An omitted value means that the gateway uses <code>AVAILABILITY_ZONE_AFFINITY</code>. For more information, see <a href="https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-gateways.html#configuring-availability-zone-affinity">Configuring Availability Zone affinity</a> in the <i>Amazon Web Services RTB Fabric User Guide</i>.</p>
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;
}

/**
 * @public
 */
export interface ListAvailableModulesRequest {
  /**
   * <p>Lists only modules that you have access to this way.</p>
   * @public
   */
  subscriptionType?: SubscriptionType | undefined;

  /**
   * <p>The maximum number of results for each page, from 1 to 10. The default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours; using an expired token fails with ValidationException.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableModulesResponse {
  /**
   * <p>The modules on this page, newest first.</p>
   * @public
   */
  modules: AvailableModuleSummary[] | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours; using an expired token fails with ValidationException.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableModuleVersionsRequest {
  /**
   * <p>The module's ID.</p>
   * @public
   */
  moduleId: string | undefined;

  /**
   * <p>Lists only versions in this status. Only ACTIVE and DEPRECATED versions are listed, so another value returns an empty list.</p>
   * @public
   */
  status?: ModuleVersionStatus | undefined;

  /**
   * <p>The maximum number of results for each page, from 1 to 10. The default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours; using an expired token fails with ValidationException.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableModuleVersionsResponse {
  /**
   * <p>The module's ID.</p>
   * @public
   */
  moduleId: string | undefined;

  /**
   * <p>The versions on this page, highest version first.</p>
   * @public
   */
  versions: AvailableModuleVersionSummary[] | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours; using an expired token fails with ValidationException.</p>
   * @public
   */
  nextToken?: string | undefined;
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
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>clientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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
   * <p>Domain name for the responder gateway. This operation does not change the domain name of an existing gateway. To use a different domain name, delete the gateway and create a new one.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>Networking port to use. This operation does not change the port of an existing gateway. To use a different port, delete the gateway and create a new one.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>Networking protocol to use. This operation does not change the protocol of an existing gateway. To use a different protocol, delete the gateway and create a new one.</p>
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
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>clientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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

  /**
   * <p>The client routing policy of the gateway. This policy controls which Availability Zones RTB Fabric uses to reach the gateway for the requester gateways that send traffic to it. Valid values are the following:</p> <ul> <li> <p> <code>AVAILABILITY_ZONE_AFFINITY</code>: RTB Fabric routes each requester's traffic to gateway capacity in the requester's own Availability Zone when the gateway has capacity available there. Otherwise, RTB Fabric routes the traffic to gateway capacity in the other Availability Zones of the gateway.</p> </li> <li> <p> <code>ANY_AVAILABILITY_ZONE</code>: RTB Fabric routes each requester's traffic to gateway capacity in every Availability Zone that the subnets of the gateway span. The Availability Zone that the requester is in does not change this.</p> </li> </ul> <p>If you don't specify a value, the gateway keeps its current client routing policy. Changing the policy sets the gateway status to <code>PENDING_UPDATE</code> until the change is complete. RTB Fabric does not support partial Availability Zone affinity, so <code>PARTIAL_AVAILABILITY_ZONE_AFFINITY</code> is not a valid value. For more information, see <a href="https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-gateways.html#configuring-availability-zone-affinity">Configuring Availability Zone affinity</a> in the <i>Amazon Web Services RTB Fabric User Guide</i>.</p>
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;
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

  /**
   * <p>The client routing policy of the gateway. If the operation changed this policy, the gateway uses the new policy after its status returns to <code>ACTIVE</code>. For more information, see <a href="https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-gateways.html#configuring-availability-zone-affinity">Configuring Availability Zone affinity</a> in the <i>Amazon Web Services RTB Fabric User Guide</i>.</p>
   * @public
   */
  clientRoutingPolicy?: ClientRoutingPolicy | undefined;

  /**
   * <p>The ID of the update this call started.</p>
   * @public
   */
  updateId: string | undefined;
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
