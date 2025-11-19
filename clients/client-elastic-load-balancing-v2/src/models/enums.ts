// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AuthenticateCognitoActionConditionalBehaviorEnum = {
  ALLOW: "allow",
  AUTHENTICATE: "authenticate",
  DENY: "deny",
} as const;
/**
 * @public
 */
export type AuthenticateCognitoActionConditionalBehaviorEnum =
  (typeof AuthenticateCognitoActionConditionalBehaviorEnum)[keyof typeof AuthenticateCognitoActionConditionalBehaviorEnum];

/**
 * @public
 * @enum
 */
export const AuthenticateOidcActionConditionalBehaviorEnum = {
  ALLOW: "allow",
  AUTHENTICATE: "authenticate",
  DENY: "deny",
} as const;
/**
 * @public
 */
export type AuthenticateOidcActionConditionalBehaviorEnum =
  (typeof AuthenticateOidcActionConditionalBehaviorEnum)[keyof typeof AuthenticateOidcActionConditionalBehaviorEnum];

/**
 * @public
 * @enum
 */
export const JwtValidationActionAdditionalClaimFormatEnum = {
  SINGLE_STRING: "single-string",
  SPACE_SEPARATED_VALUES: "space-separated-values",
  STRING_ARRAY: "string-array",
} as const;
/**
 * @public
 */
export type JwtValidationActionAdditionalClaimFormatEnum =
  (typeof JwtValidationActionAdditionalClaimFormatEnum)[keyof typeof JwtValidationActionAdditionalClaimFormatEnum];

/**
 * @public
 * @enum
 */
export const RedirectActionStatusCodeEnum = {
  HTTP_301: "HTTP_301",
  HTTP_302: "HTTP_302",
} as const;
/**
 * @public
 */
export type RedirectActionStatusCodeEnum =
  (typeof RedirectActionStatusCodeEnum)[keyof typeof RedirectActionStatusCodeEnum];

/**
 * @public
 * @enum
 */
export const ActionTypeEnum = {
  AUTHENTICATE_COGNITO: "authenticate-cognito",
  AUTHENTICATE_OIDC: "authenticate-oidc",
  FIXED_RESPONSE: "fixed-response",
  FORWARD: "forward",
  JWT_VALIDATION: "jwt-validation",
  REDIRECT: "redirect",
} as const;
/**
 * @public
 */
export type ActionTypeEnum = (typeof ActionTypeEnum)[keyof typeof ActionTypeEnum];

/**
 * @public
 * @enum
 */
export const RevocationType = {
  CRL: "CRL",
} as const;
/**
 * @public
 */
export type RevocationType = (typeof RevocationType)[keyof typeof RevocationType];

/**
 * @public
 * @enum
 */
export const TargetAdministrativeOverrideReasonEnum = {
  INTERNAL_ERROR: "AdministrativeOverride.Unknown",
  NO_OVERRIDE_ENGAGED: "AdministrativeOverride.NoOverride",
  ZONAL_SHIFT_DELEGATED_TO_DNS: "AdministrativeOverride.ZonalShiftDelegatedToDns",
  ZONAL_SHIFT_ENGAGED: "AdministrativeOverride.ZonalShiftActive",
} as const;
/**
 * @public
 */
export type TargetAdministrativeOverrideReasonEnum =
  (typeof TargetAdministrativeOverrideReasonEnum)[keyof typeof TargetAdministrativeOverrideReasonEnum];

/**
 * @public
 * @enum
 */
export const TargetAdministrativeOverrideStateEnum = {
  NO_OVERRIDE: "no_override",
  UNKNOWN: "unknown",
  ZONAL_SHIFT_ACTIVE: "zonal_shift_active",
  ZONAL_SHIFT_DELEGATED_TO_DNS: "zonal_shift_delegated_to_dns",
} as const;
/**
 * @public
 */
export type TargetAdministrativeOverrideStateEnum =
  (typeof TargetAdministrativeOverrideStateEnum)[keyof typeof TargetAdministrativeOverrideStateEnum];

/**
 * @public
 * @enum
 */
export const AdvertiseTrustStoreCaNamesEnum = {
  off: "off",
  on: "on",
} as const;
/**
 * @public
 */
export type AdvertiseTrustStoreCaNamesEnum =
  (typeof AdvertiseTrustStoreCaNamesEnum)[keyof typeof AdvertiseTrustStoreCaNamesEnum];

/**
 * @public
 * @enum
 */
export const MitigationInEffectEnum = {
  NO: "no",
  YES: "yes",
} as const;
/**
 * @public
 */
export type MitigationInEffectEnum = (typeof MitigationInEffectEnum)[keyof typeof MitigationInEffectEnum];

/**
 * @public
 * @enum
 */
export const AnomalyResultEnum = {
  ANOMALOUS: "anomalous",
  NORMAL: "normal",
} as const;
/**
 * @public
 */
export type AnomalyResultEnum = (typeof AnomalyResultEnum)[keyof typeof AnomalyResultEnum];

/**
 * @public
 * @enum
 */
export const CapacityReservationStateEnum = {
  FAILED: "failed",
  PENDING: "pending",
  PROVISIONED: "provisioned",
  REBALANCING: "rebalancing",
} as const;
/**
 * @public
 */
export type CapacityReservationStateEnum =
  (typeof CapacityReservationStateEnum)[keyof typeof CapacityReservationStateEnum];

/**
 * @public
 * @enum
 */
export const TrustStoreAssociationStatusEnum = {
  ACTIVE: "active",
  REMOVED: "removed",
} as const;
/**
 * @public
 */
export type TrustStoreAssociationStatusEnum =
  (typeof TrustStoreAssociationStatusEnum)[keyof typeof TrustStoreAssociationStatusEnum];

/**
 * @public
 * @enum
 */
export const ProtocolEnum = {
  GENEVE: "GENEVE",
  HTTP: "HTTP",
  HTTPS: "HTTPS",
  QUIC: "QUIC",
  TCP: "TCP",
  TCP_QUIC: "TCP_QUIC",
  TCP_UDP: "TCP_UDP",
  TLS: "TLS",
  UDP: "UDP",
} as const;
/**
 * @public
 */
export type ProtocolEnum = (typeof ProtocolEnum)[keyof typeof ProtocolEnum];

/**
 * @public
 * @enum
 */
export const EnablePrefixForIpv6SourceNatEnum = {
  OFF: "off",
  ON: "on",
} as const;
/**
 * @public
 */
export type EnablePrefixForIpv6SourceNatEnum =
  (typeof EnablePrefixForIpv6SourceNatEnum)[keyof typeof EnablePrefixForIpv6SourceNatEnum];

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUALSTACK: "dualstack",
  DUALSTACK_WITHOUT_PUBLIC_IPV4: "dualstack-without-public-ipv4",
  IPV4: "ipv4",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const LoadBalancerSchemeEnum = {
  INTERNAL: "internal",
  INTERNET_FACING: "internet-facing",
} as const;
/**
 * @public
 */
export type LoadBalancerSchemeEnum = (typeof LoadBalancerSchemeEnum)[keyof typeof LoadBalancerSchemeEnum];

/**
 * @public
 * @enum
 */
export const LoadBalancerTypeEnum = {
  APPLICATION: "application",
  GATEWAY: "gateway",
  NETWORK: "network",
} as const;
/**
 * @public
 */
export type LoadBalancerTypeEnum = (typeof LoadBalancerTypeEnum)[keyof typeof LoadBalancerTypeEnum];

/**
 * @public
 * @enum
 */
export const LoadBalancerStateEnum = {
  ACTIVE: "active",
  ACTIVE_IMPAIRED: "active_impaired",
  FAILED: "failed",
  PROVISIONING: "provisioning",
} as const;
/**
 * @public
 */
export type LoadBalancerStateEnum = (typeof LoadBalancerStateEnum)[keyof typeof LoadBalancerStateEnum];

/**
 * @public
 * @enum
 */
export const TransformTypeEnum = {
  HOST_HEADER_REWRITE: "host-header-rewrite",
  URL_REWRITE: "url-rewrite",
} as const;
/**
 * @public
 */
export type TransformTypeEnum = (typeof TransformTypeEnum)[keyof typeof TransformTypeEnum];

/**
 * @public
 * @enum
 */
export const TargetGroupIpAddressTypeEnum = {
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;
/**
 * @public
 */
export type TargetGroupIpAddressTypeEnum =
  (typeof TargetGroupIpAddressTypeEnum)[keyof typeof TargetGroupIpAddressTypeEnum];

/**
 * @public
 * @enum
 */
export const TargetTypeEnum = {
  ALB: "alb",
  INSTANCE: "instance",
  IP: "ip",
  LAMBDA: "lambda",
} as const;
/**
 * @public
 */
export type TargetTypeEnum = (typeof TargetTypeEnum)[keyof typeof TargetTypeEnum];

/**
 * @public
 * @enum
 */
export const TrustStoreStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
} as const;
/**
 * @public
 */
export type TrustStoreStatus = (typeof TrustStoreStatus)[keyof typeof TrustStoreStatus];

/**
 * @public
 * @enum
 */
export const DescribeTargetHealthInputIncludeEnum = {
  ALL: "All",
  ANOMALY: "AnomalyDetection",
} as const;
/**
 * @public
 */
export type DescribeTargetHealthInputIncludeEnum =
  (typeof DescribeTargetHealthInputIncludeEnum)[keyof typeof DescribeTargetHealthInputIncludeEnum];

/**
 * @public
 * @enum
 */
export const TargetHealthReasonEnum = {
  DEREGISTRATION_IN_PROGRESS: "Target.DeregistrationInProgress",
  FAILED_HEALTH_CHECKS: "Target.FailedHealthChecks",
  HEALTH_CHECK_DISABLED: "Target.HealthCheckDisabled",
  INITIAL_HEALTH_CHECKING: "Elb.InitialHealthChecking",
  INTERNAL_ERROR: "Elb.InternalError",
  INVALID_STATE: "Target.InvalidState",
  IP_UNUSABLE: "Target.IpUnusable",
  NOT_IN_USE: "Target.NotInUse",
  NOT_REGISTERED: "Target.NotRegistered",
  REGISTRATION_IN_PROGRESS: "Elb.RegistrationInProgress",
  RESPONSE_CODE_MISMATCH: "Target.ResponseCodeMismatch",
  TIMEOUT: "Target.Timeout",
} as const;
/**
 * @public
 */
export type TargetHealthReasonEnum = (typeof TargetHealthReasonEnum)[keyof typeof TargetHealthReasonEnum];

/**
 * @public
 * @enum
 */
export const TargetHealthStateEnum = {
  DRAINING: "draining",
  HEALTHY: "healthy",
  INITIAL: "initial",
  UNAVAILABLE: "unavailable",
  UNHEALTHY: "unhealthy",
  UNHEALTHY_DRAINING: "unhealthy.draining",
  UNUSED: "unused",
} as const;
/**
 * @public
 */
export type TargetHealthStateEnum = (typeof TargetHealthStateEnum)[keyof typeof TargetHealthStateEnum];

/**
 * @public
 * @enum
 */
export const RemoveIpamPoolEnum = {
  ipv4: "ipv4",
} as const;
/**
 * @public
 */
export type RemoveIpamPoolEnum = (typeof RemoveIpamPoolEnum)[keyof typeof RemoveIpamPoolEnum];

/**
 * @public
 * @enum
 */
export const EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum = {
  off: "off",
  on: "on",
} as const;
/**
 * @public
 */
export type EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum =
  (typeof EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum)[keyof typeof EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum];
