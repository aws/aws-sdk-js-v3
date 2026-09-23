// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const PolicyFirewallType = {
  SHIELD_ADVANCED: "SHIELD_ADVANCED",
  WAF: "WAF",
} as const;
/**
 * @public
 */
export type PolicyFirewallType = (typeof PolicyFirewallType)[keyof typeof PolicyFirewallType];

/**
 * @public
 * @enum
 */
export const AdminAccountStatus = {
  OFFBOARDED: "OFFBOARDED",
  ONBOARDED: "ONBOARDED",
} as const;
/**
 * @public
 */
export type AdminAccountStatus = (typeof AdminAccountStatus)[keyof typeof AdminAccountStatus];

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
export const Scheme = {
  INTERNAL: "internal",
  INTERNET_FACING: "internet-facing",
} as const;
/**
 * @public
 */
export type Scheme = (typeof Scheme)[keyof typeof Scheme];

/**
 * @public
 * @enum
 */
export const ScopeResourceType = {
  ALB: "AWS::ElasticLoadBalancingV2::LoadBalancer::application",
  APIGW: "AWS::ApiGateway::Stage",
  CFD: "AWS::CloudFront::Distribution",
  CLB: "AWS::ElasticLoadBalancing::LoadBalancer",
  EIP: "AWS::EC2::EIP",
} as const;
/**
 * @public
 */
export type ScopeResourceType = (typeof ScopeResourceType)[keyof typeof ScopeResourceType];

/**
 * @public
 * @enum
 */
export const EntityStatus = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  DRAFT: "DRAFT",
} as const;
/**
 * @public
 */
export type EntityStatus = (typeof EntityStatus)[keyof typeof EntityStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  ACCOUNT_NOT_ONBOARDED: "ACCOUNT_NOT_ONBOARDED",
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
export const WAFConflictResolutionOptions = {
  MERGE_WHERE_APPLICABLE: "MERGE_WHERE_APPLICABLE",
} as const;
/**
 * @public
 */
export type WAFConflictResolutionOptions =
  (typeof WAFConflictResolutionOptions)[keyof typeof WAFConflictResolutionOptions];

/**
 * @public
 * @enum
 */
export const ExistingCustomerWebACLResolution = {
  NO_REMEDIATION: "NO_REMEDIATION",
  OVERRIDE_ASSOCIATION: "OVERRIDE_ASSOCIATION",
  RETROFIT: "RETROFIT",
} as const;
/**
 * @public
 */
export type ExistingCustomerWebACLResolution =
  (typeof ExistingCustomerWebACLResolution)[keyof typeof ExistingCustomerWebACLResolution];

/**
 * @public
 * @enum
 */
export const RuleFirewallType = {
  WAF: "WAF",
} as const;
/**
 * @public
 */
export type RuleFirewallType = (typeof RuleFirewallType)[keyof typeof RuleFirewallType];

/**
 * @public
 * @enum
 */
export const RuleType = {
  CONFIGURATION: "CONFIGURATION",
  INSPECTION: "INSPECTION",
} as const;
/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * @enum
 */
export const TemplateFirewallType = {
  WAF: "WAF",
} as const;
/**
 * @public
 */
export type TemplateFirewallType = (typeof TemplateFirewallType)[keyof typeof TemplateFirewallType];

/**
 * @public
 * @enum
 */
export const EntityStatusFilter = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  DRAFT: "DRAFT",
} as const;
/**
 * @public
 */
export type EntityStatusFilter = (typeof EntityStatusFilter)[keyof typeof EntityStatusFilter];

/**
 * @public
 * @enum
 */
export const SynchronizationStatus = {
  IN_SYNC: "IN_SYNC",
  NOT_APPLICABLE: "NOT_APPLICABLE",
  OUT_OF_SYNC: "OUT_OF_SYNC",
} as const;
/**
 * @public
 */
export type SynchronizationStatus = (typeof SynchronizationStatus)[keyof typeof SynchronizationStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ALB: "AWS::ElasticLoadBalancingV2::LoadBalancer::application",
  APIGW: "AWS::ApiGateway::Stage",
  CFD: "AWS::CloudFront::Distribution",
  CLB: "AWS::ElasticLoadBalancing::LoadBalancer",
  EIP: "AWS::EC2::EIP",
  SHIELDREGIONAL_PROTECTION: "AWS::ShieldRegional::Protection",
  SHIELD_PROTECTION: "AWS::Shield::Protection",
  WAF_V2_WEBACL: "AWS::WAFv2::WebACL",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const WAFConfigDataType = {
  ASSOCIATION_CONFIG: "AssociationConfig",
  CAPTCHA_CONFIG: "CaptchaConfig",
  CHALLENGE_CONFIG: "ChallengeConfig",
  CUSTOM_RESPONSE_BODIES: "CustomResponseBodies",
  DATA_PROTECTION_CONFIG: "DataProtectionConfig",
  DEFAULT_ACTION: "DefaultAction",
  LOGGING_CONFIGURATION: "LoggingConfiguration",
  ON_SOURCE_DDOS_PROTECTION_CONFIG: "OnSourceDDoSProtectionConfig",
  TOKEN_DOMAINS: "TokenDomains",
  VISIBILITY_CONFIG: "VisibilityConfig",
} as const;
/**
 * @public
 */
export type WAFConfigDataType = (typeof WAFConfigDataType)[keyof typeof WAFConfigDataType];

/**
 * @public
 * @enum
 */
export const ServiceResourceType = {
  DEPLOYMENT: "Deployment",
  POLICY: "Policy",
  RULE: "Rule",
  SCOPE: "Scope",
  TEMPLATE: "Template",
} as const;
/**
 * @public
 */
export type ServiceResourceType = (typeof ServiceResourceType)[keyof typeof ServiceResourceType];
