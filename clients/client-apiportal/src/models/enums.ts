// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DiscoverySource = {
  API_GATEWAY: "API_GATEWAY",
  CLOUDFRONT: "CLOUDFRONT",
  ELB: "ELB",
} as const;
/**
 * @public
 */
export type DiscoverySource = (typeof DiscoverySource)[keyof typeof DiscoverySource];

/**
 * @public
 * @enum
 */
export const Classification = {
  MANAGED: "MANAGED",
  MANAGED_ORPHANED: "MANAGED_ORPHANED",
  MANAGED_ZOMBIE: "MANAGED_ZOMBIE",
  SHADOW: "SHADOW",
} as const;
/**
 * @public
 */
export type Classification = (typeof Classification)[keyof typeof Classification];

/**
 * @public
 * @enum
 */
export const ManagedBy = {
  ORGANIZATION: "ORGANIZATION",
  SELF: "SELF",
} as const;
/**
 * @public
 */
export type ManagedBy = (typeof ManagedBy)[keyof typeof ManagedBy];

/**
 * @public
 * @enum
 */
export const HttpMethod = {
  ANY: "ANY",
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

/**
 * @public
 * @enum
 */
export const Visibility = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type Visibility = (typeof Visibility)[keyof typeof Visibility];

/**
 * @public
 * @enum
 */
export const WafStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type WafStatus = (typeof WafStatus)[keyof typeof WafStatus];

/**
 * @public
 * @enum
 */
export const Workload = {
  A2A: "A2A",
  LLM: "LLM",
  MCP: "MCP",
} as const;
/**
 * @public
 */
export type Workload = (typeof Workload)[keyof typeof Workload];

/**
 * @public
 * @enum
 */
export const DiscoveryFeature = {
  AI_DISCOVERY: "AI_DISCOVERY",
} as const;
/**
 * @public
 */
export type DiscoveryFeature = (typeof DiscoveryFeature)[keyof typeof DiscoveryFeature];

/**
 * @public
 * @enum
 */
export const DiscoveryConfigurationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DiscoveryConfigurationStatus =
  (typeof DiscoveryConfigurationStatus)[keyof typeof DiscoveryConfigurationStatus];

/**
 * @public
 * @enum
 */
export const DiscoveryFailureReason = {
  /**
   * Discovery is not permitted for the target account/resource (e.g. missing or insufficient
   * cross-account permissions, SLR not provisioned, or a denied assume-role).
   */
  ACCESS_DENIED: "ACCESS_DENIED",
  /**
   * A required dependency or upstream service was unavailable or returned an error.
   */
  DEPENDENCY_ERROR: "DEPENDENCY_ERROR",
  /**
   * An unexpected internal error occurred while running discovery.
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * The account or resource configuration is invalid for discovery (e.g. unsupported region,
   * account not in the organization, or an invalid exclusion filter).
   */
  INVALID_CONFIGURATION: "INVALID_CONFIGURATION",
  /**
   * Discovery was throttled by a downstream service or an account/service quota was exceeded.
   */
  THROTTLED: "THROTTLED",
} as const;
/**
 * @public
 */
export type DiscoveryFailureReason = (typeof DiscoveryFailureReason)[keyof typeof DiscoveryFailureReason];

/**
 * @public
 * @enum
 */
export const DiscoveryStatusValue = {
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type DiscoveryStatusValue = (typeof DiscoveryStatusValue)[keyof typeof DiscoveryStatusValue];

/**
 * @public
 * @enum
 */
export const PostureStatus = {
  /**
   * The posture is not satisfied. See reason.
   */
  FALSE: "FALSE",
  /**
   * No verdict could be reached. See reason.
   */
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  /**
   * The posture does not describe this resource, so it was not evaluated. Carries no reason.
   */
  NOT_APPLICABLE: "NOT_APPLICABLE",
  /**
   * The posture is satisfied.
   */
  TRUE: "TRUE",
} as const;
/**
 * @public
 */
export type PostureStatus = (typeof PostureStatus)[keyof typeof PostureStatus];

/**
 * @public
 * @enum
 */
export const FindingReason = {
  API_KEY_NOT_CONFIGURED: "API_KEY_NOT_CONFIGURED",
  AUTHENTICATION_NOT_CONFIGURED: "AUTHENTICATION_NOT_CONFIGURED",
  DISTRIBUTION_ACCESS_LOGGING_NOT_ENABLED: "DISTRIBUTION_ACCESS_LOGGING_NOT_ENABLED",
  DISTRIBUTION_SERVES_PLAINTEXT_HTTP: "DISTRIBUTION_SERVES_PLAINTEXT_HTTP",
  DISTRIBUTION_TLS_BELOW_1_2: "DISTRIBUTION_TLS_BELOW_1_2",
  DISTRIBUTION_WAF_NOT_ASSOCIATED: "DISTRIBUTION_WAF_NOT_ASSOCIATED",
  GEO_RESTRICTION_NOT_CONFIGURED: "GEO_RESTRICTION_NOT_CONFIGURED",
  LISTENER_TLS_BELOW_1_2: "LISTENER_TLS_BELOW_1_2",
  LOAD_BALANCER_WAF_NOT_ASSOCIATED: "LOAD_BALANCER_WAF_NOT_ASSOCIATED",
  PRIVATE_API_RESOURCE_POLICY_MISSING: "PRIVATE_API_RESOURCE_POLICY_MISSING",
  REQUEST_VALIDATION_NOT_ENABLED: "REQUEST_VALIDATION_NOT_ENABLED",
  RESPONSE_CACHING_NOT_ENABLED: "RESPONSE_CACHING_NOT_ENABLED",
  REST_API_TLS_BELOW_1_2: "REST_API_TLS_BELOW_1_2",
  STAGE_ACCESS_LOGGING_NOT_ENABLED: "STAGE_ACCESS_LOGGING_NOT_ENABLED",
  STAGE_WAF_NOT_ASSOCIATED: "STAGE_WAF_NOT_ASSOCIATED",
  THROTTLING_BURST_LIMIT_NOT_SET: "THROTTLING_BURST_LIMIT_NOT_SET",
  THROTTLING_NOT_ENABLED: "THROTTLING_NOT_ENABLED",
  THROTTLING_RATE_LIMIT_NOT_SET: "THROTTLING_RATE_LIMIT_NOT_SET",
  /**
   * A reason was recorded but has no more specific value.
   */
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type FindingReason = (typeof FindingReason)[keyof typeof FindingReason];

/**
 * @public
 * @enum
 */
export const EventType = {
  WAF_API_SECURITY: "WAF_API_SECURITY",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const EventStatus = {
  EVENT_ENDED: "EVENT_ENDED",
  EVENT_IN_PROGRESS: "EVENT_IN_PROGRESS",
  EVENT_STARTED: "EVENT_STARTED",
} as const;
/**
 * @public
 */
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];

/**
 * @public
 * @enum
 */
export const Confidence = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type Confidence = (typeof Confidence)[keyof typeof Confidence];

/**
 * @public
 * @enum
 */
export const FineGrainedAccessControl = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type FineGrainedAccessControl = (typeof FineGrainedAccessControl)[keyof typeof FineGrainedAccessControl];

/**
 * @public
 * @enum
 */
export const PublishStatus = {
  DISABLED: "DISABLED",
  DISABLE_FAILED: "DISABLE_FAILED",
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  PUBLISHED: "PUBLISHED",
  PUBLISH_FAILED: "PUBLISH_FAILED",
  PUBLISH_IN_PROGRESS: "PUBLISH_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type PublishStatus = (typeof PublishStatus)[keyof typeof PublishStatus];

/**
 * @public
 * @enum
 */
export const PortalStatusExceptionType = {
  CLOUDFRONT_DOMAIN_IN_USE: "CLOUDFRONT_DOMAIN_IN_USE",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  MISSING_CLOUDFRONT_PERMISSIONS: "MISSING_CLOUDFRONT_PERMISSIONS",
  UNSHARED_PRODUCT_EXCEPTION: "UNSHARED_PRODUCT_EXCEPTION",
} as const;
/**
 * @public
 */
export type PortalStatusExceptionType = (typeof PortalStatusExceptionType)[keyof typeof PortalStatusExceptionType];

/**
 * @public
 * @enum
 */
export const PreviewStatus = {
  PREVIEW_FAILED: "PREVIEW_FAILED",
  PREVIEW_IN_PROGRESS: "PREVIEW_IN_PROGRESS",
  PREVIEW_READY: "PREVIEW_READY",
} as const;
/**
 * @public
 */
export type PreviewStatus = (typeof PreviewStatus)[keyof typeof PreviewStatus];

/**
 * @public
 * @enum
 */
export const DesiredPublishStatus = {
  DISABLED: "DISABLED",
  PUBLISHED: "PUBLISHED",
} as const;
/**
 * @public
 */
export type DesiredPublishStatus = (typeof DesiredPublishStatus)[keyof typeof DesiredPublishStatus];

/**
 * @public
 * @enum
 */
export const FailedItemErrorCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  MANAGED_API_NOT_FOUND: "MANAGED_API_NOT_FOUND",
} as const;
/**
 * @public
 */
export type FailedItemErrorCode = (typeof FailedItemErrorCode)[keyof typeof FailedItemErrorCode];

/**
 * @public
 * @enum
 */
export const ApiSelectionMode = {
  CUSTOM: "CUSTOM",
  RULE_BASED: "RULE_BASED",
} as const;
/**
 * @public
 */
export type ApiSelectionMode = (typeof ApiSelectionMode)[keyof typeof ApiSelectionMode];

/**
 * @public
 * @enum
 */
export const RuleFilterKey = {
  ACCOUNT: "ACCOUNT",
  HOST: "HOST",
  METHOD: "METHOD",
  PATH: "PATH",
  PORT: "PORT",
  RESOURCE_ARN: "RESOURCE_ARN",
} as const;
/**
 * @public
 */
export type RuleFilterKey = (typeof RuleFilterKey)[keyof typeof RuleFilterKey];

/**
 * @public
 * @enum
 */
export const ProductFailureReason = {
  /**
   * A Managed API that stopped matching was left associated because it still has an API page.
   * Delete the page and update the product to retry.
   */
  API_PAGE_ATTACHED: "API_PAGE_ATTACHED",
  /**
   * An unexpected error occurred while applying the rules. Update the product to retry.
   */
  EVALUATION_ERROR: "EVALUATION_ERROR",
} as const;
/**
 * @public
 */
export type ProductFailureReason = (typeof ProductFailureReason)[keyof typeof ProductFailureReason];

/**
 * @public
 * @enum
 */
export const ProductStatus = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];

/**
 * @public
 * @enum
 */
export const ResourceOwner = {
  ALL: "ALL",
  OTHER_ACCOUNTS: "OTHER_ACCOUNTS",
  SELF: "SELF",
} as const;
/**
 * @public
 */
export type ResourceOwner = (typeof ResourceOwner)[keyof typeof ResourceOwner];

/**
 * @public
 * @enum
 */
export const TryItState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TryItState = (typeof TryItState)[keyof typeof TryItState];

/**
 * @public
 * @enum
 */
export const Status = {
  AVAILABLE: "AVAILABLE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const ProductApiPageStatusExceptionType = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  MEMBER_LEFT_ORG: "MEMBER_LEFT_ORG",
  RESOURCE_DELETED: "RESOURCE_DELETED",
} as const;
/**
 * @public
 */
export type ProductApiPageStatusExceptionType =
  (typeof ProductApiPageStatusExceptionType)[keyof typeof ProductApiPageStatusExceptionType];
