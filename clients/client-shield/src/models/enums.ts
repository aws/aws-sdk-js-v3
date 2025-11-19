// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApplicationLayerAutomaticResponseStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ApplicationLayerAutomaticResponseStatus =
  (typeof ApplicationLayerAutomaticResponseStatus)[keyof typeof ApplicationLayerAutomaticResponseStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const AttackLayer = {
  APPLICATION: "APPLICATION",
  NETWORK: "NETWORK",
} as const;
/**
 * @public
 */
export type AttackLayer = (typeof AttackLayer)[keyof typeof AttackLayer];

/**
 * @public
 * @enum
 */
export const AttackPropertyIdentifier = {
  DESTINATION_URL: "DESTINATION_URL",
  REFERRER: "REFERRER",
  SOURCE_ASN: "SOURCE_ASN",
  SOURCE_COUNTRY: "SOURCE_COUNTRY",
  SOURCE_IP_ADDRESS: "SOURCE_IP_ADDRESS",
  SOURCE_USER_AGENT: "SOURCE_USER_AGENT",
  WORDPRESS_PINGBACK_REFLECTOR: "WORDPRESS_PINGBACK_REFLECTOR",
  WORDPRESS_PINGBACK_SOURCE: "WORDPRESS_PINGBACK_SOURCE",
} as const;
/**
 * @public
 */
export type AttackPropertyIdentifier = (typeof AttackPropertyIdentifier)[keyof typeof AttackPropertyIdentifier];

/**
 * @public
 * @enum
 */
export const Unit = {
  BITS: "BITS",
  BYTES: "BYTES",
  PACKETS: "PACKETS",
  REQUESTS: "REQUESTS",
} as const;
/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * @enum
 */
export const SubResourceType = {
  IP: "IP",
  URL: "URL",
} as const;
/**
 * @public
 */
export type SubResourceType = (typeof SubResourceType)[keyof typeof SubResourceType];

/**
 * @public
 * @enum
 */
export const AutoRenew = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutoRenew = (typeof AutoRenew)[keyof typeof AutoRenew];

/**
 * @public
 * @enum
 */
export const ProtectionGroupAggregation = {
  MAX: "MAX",
  MEAN: "MEAN",
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type ProtectionGroupAggregation = (typeof ProtectionGroupAggregation)[keyof typeof ProtectionGroupAggregation];

/**
 * @public
 * @enum
 */
export const ProtectionGroupPattern = {
  ALL: "ALL",
  ARBITRARY: "ARBITRARY",
  BY_RESOURCE_TYPE: "BY_RESOURCE_TYPE",
} as const;
/**
 * @public
 */
export type ProtectionGroupPattern = (typeof ProtectionGroupPattern)[keyof typeof ProtectionGroupPattern];

/**
 * @public
 * @enum
 */
export const ProtectedResourceType = {
  APPLICATION_LOAD_BALANCER: "APPLICATION_LOAD_BALANCER",
  CLASSIC_LOAD_BALANCER: "CLASSIC_LOAD_BALANCER",
  CLOUDFRONT_DISTRIBUTION: "CLOUDFRONT_DISTRIBUTION",
  ELASTIC_IP_ALLOCATION: "ELASTIC_IP_ALLOCATION",
  GLOBAL_ACCELERATOR: "GLOBAL_ACCELERATOR",
  ROUTE_53_HOSTED_ZONE: "ROUTE_53_HOSTED_ZONE",
} as const;
/**
 * @public
 */
export type ProtectedResourceType = (typeof ProtectedResourceType)[keyof typeof ProtectedResourceType];

/**
 * @public
 * @enum
 */
export const ProactiveEngagementStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ProactiveEngagementStatus = (typeof ProactiveEngagementStatus)[keyof typeof ProactiveEngagementStatus];

/**
 * @public
 * @enum
 */
export const SubscriptionState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type SubscriptionState = (typeof SubscriptionState)[keyof typeof SubscriptionState];
