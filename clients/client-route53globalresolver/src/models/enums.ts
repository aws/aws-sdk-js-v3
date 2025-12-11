// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const IpAddressType = {
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const DnsProtocol = {
  DO53: "DO53",
  DOH: "DOH",
  DOT: "DOT",
} as const;
/**
 * @public
 */
export type DnsProtocol = (typeof DnsProtocol)[keyof typeof DnsProtocol];

/**
 * @public
 * @enum
 */
export const CRResourceStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  OPERATIONAL: "OPERATIONAL",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type CRResourceStatus = (typeof CRResourceStatus)[keyof typeof CRResourceStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const TokenStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  OPERATIONAL: "OPERATIONAL",
} as const;
/**
 * @public
 */
export type TokenStatus = (typeof TokenStatus)[keyof typeof TokenStatus];

/**
 * @public
 * @enum
 */
export const HostedZoneAssociationStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  OPERATIONAL: "OPERATIONAL",
} as const;
/**
 * @public
 */
export type HostedZoneAssociationStatus =
  (typeof HostedZoneAssociationStatus)[keyof typeof HostedZoneAssociationStatus];

/**
 * @public
 * @enum
 */
export const FirewallRuleAction = {
  ALERT: "ALERT",
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
} as const;
/**
 * @public
 */
export type FirewallRuleAction = (typeof FirewallRuleAction)[keyof typeof FirewallRuleAction];

/**
 * @public
 * @enum
 */
export const BlockOverrideDnsQueryType = {
  CNAME: "CNAME",
} as const;
/**
 * @public
 */
export type BlockOverrideDnsQueryType = (typeof BlockOverrideDnsQueryType)[keyof typeof BlockOverrideDnsQueryType];

/**
 * @public
 * @enum
 */
export const FirewallBlockResponse = {
  NODATA: "NODATA",
  NXDOMAIN: "NXDOMAIN",
  OVERRIDE: "OVERRIDE",
} as const;
/**
 * @public
 */
export type FirewallBlockResponse = (typeof FirewallBlockResponse)[keyof typeof FirewallBlockResponse];

/**
 * @public
 * @enum
 */
export const ConfidenceThreshold = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type ConfidenceThreshold = (typeof ConfidenceThreshold)[keyof typeof ConfidenceThreshold];

/**
 * @public
 * @enum
 */
export const DnsAdvancedProtection = {
  DGA: "DGA",
  DNS_TUNNELING: "DNS_TUNNELING",
} as const;
/**
 * @public
 */
export type DnsAdvancedProtection = (typeof DnsAdvancedProtection)[keyof typeof DnsAdvancedProtection];

/**
 * @public
 * @enum
 */
export const DnsSecValidationType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DnsSecValidationType = (typeof DnsSecValidationType)[keyof typeof DnsSecValidationType];

/**
 * @public
 * @enum
 */
export const EdnsClientSubnetType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EdnsClientSubnetType = (typeof EdnsClientSubnetType)[keyof typeof EdnsClientSubnetType];

/**
 * @public
 * @enum
 */
export const FirewallRulesFailOpenType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type FirewallRulesFailOpenType = (typeof FirewallRulesFailOpenType)[keyof typeof FirewallRulesFailOpenType];

/**
 * @public
 * @enum
 */
export const ProfileResourceStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLING: "ENABLING",
  OPERATIONAL: "OPERATIONAL",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ProfileResourceStatus = (typeof ProfileResourceStatus)[keyof typeof ProfileResourceStatus];
