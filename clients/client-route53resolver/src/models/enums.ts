// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Action = {
  ALERT: "ALERT",
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
} as const;
/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * @public
 * @enum
 */
export const MutationProtectionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type MutationProtectionStatus = (typeof MutationProtectionStatus)[keyof typeof MutationProtectionStatus];

/**
 * @public
 * @enum
 */
export const FirewallRuleGroupAssociationStatus = {
  COMPLETE: "COMPLETE",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type FirewallRuleGroupAssociationStatus =
  (typeof FirewallRuleGroupAssociationStatus)[keyof typeof FirewallRuleGroupAssociationStatus];

/**
 * @public
 * @enum
 */
export const ResolverEndpointDirection = {
  Inbound: "INBOUND",
  InboundDelegation: "INBOUND_DELEGATION",
  Outbound: "OUTBOUND",
} as const;
/**
 * @public
 */
export type ResolverEndpointDirection = (typeof ResolverEndpointDirection)[keyof typeof ResolverEndpointDirection];

/**
 * @public
 * @enum
 */
export const Protocol = {
  DO53: "Do53",
  DOH: "DoH",
  DOHFIPS: "DoH-FIPS",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const ResolverEndpointType = {
  DUALSTACK: "DUALSTACK",
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type ResolverEndpointType = (typeof ResolverEndpointType)[keyof typeof ResolverEndpointType];

/**
 * @public
 * @enum
 */
export const ResolverEndpointStatus = {
  ActionNeeded: "ACTION_NEEDED",
  AutoRecovering: "AUTO_RECOVERING",
  Creating: "CREATING",
  Deleting: "DELETING",
  Operational: "OPERATIONAL",
  Updating: "UPDATING",
} as const;
/**
 * @public
 */
export type ResolverEndpointStatus = (typeof ResolverEndpointStatus)[keyof typeof ResolverEndpointStatus];

/**
 * @public
 * @enum
 */
export const ResolverQueryLogConfigAssociationError = {
  AccessDenied: "ACCESS_DENIED",
  DestinationNotFound: "DESTINATION_NOT_FOUND",
  InternalServiceError: "INTERNAL_SERVICE_ERROR",
  None: "NONE",
} as const;
/**
 * @public
 */
export type ResolverQueryLogConfigAssociationError =
  (typeof ResolverQueryLogConfigAssociationError)[keyof typeof ResolverQueryLogConfigAssociationError];

/**
 * @public
 * @enum
 */
export const ResolverQueryLogConfigAssociationStatus = {
  ActionNeeded: "ACTION_NEEDED",
  Active: "ACTIVE",
  Creating: "CREATING",
  Deleting: "DELETING",
  Failed: "FAILED",
} as const;
/**
 * @public
 */
export type ResolverQueryLogConfigAssociationStatus =
  (typeof ResolverQueryLogConfigAssociationStatus)[keyof typeof ResolverQueryLogConfigAssociationStatus];

/**
 * @public
 * @enum
 */
export const ResolverRuleAssociationStatus = {
  Complete: "COMPLETE",
  Creating: "CREATING",
  Deleting: "DELETING",
  Failed: "FAILED",
  Overridden: "OVERRIDDEN",
} as const;
/**
 * @public
 */
export type ResolverRuleAssociationStatus =
  (typeof ResolverRuleAssociationStatus)[keyof typeof ResolverRuleAssociationStatus];

/**
 * @public
 * @enum
 */
export const AutodefinedReverseFlag = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
  USE_LOCAL_RESOURCE_SETTING: "USE_LOCAL_RESOURCE_SETTING",
} as const;
/**
 * @public
 */
export type AutodefinedReverseFlag = (typeof AutodefinedReverseFlag)[keyof typeof AutodefinedReverseFlag];

/**
 * @public
 * @enum
 */
export const BlockOverrideDnsType = {
  CNAME: "CNAME",
} as const;
/**
 * @public
 */
export type BlockOverrideDnsType = (typeof BlockOverrideDnsType)[keyof typeof BlockOverrideDnsType];

/**
 * @public
 * @enum
 */
export const BlockResponse = {
  NODATA: "NODATA",
  NXDOMAIN: "NXDOMAIN",
  OVERRIDE: "OVERRIDE",
} as const;
/**
 * @public
 */
export type BlockResponse = (typeof BlockResponse)[keyof typeof BlockResponse];

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
export const FirewallDomainListStatus = {
  COMPLETE: "COMPLETE",
  COMPLETE_IMPORT_FAILED: "COMPLETE_IMPORT_FAILED",
  DELETING: "DELETING",
  IMPORTING: "IMPORTING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type FirewallDomainListStatus = (typeof FirewallDomainListStatus)[keyof typeof FirewallDomainListStatus];

/**
 * @public
 * @enum
 */
export const DnsThreatProtection = {
  DGA: "DGA",
  DICTIONARY_DGA: "DICTIONARY_DGA",
  DNS_TUNNELING: "DNS_TUNNELING",
} as const;
/**
 * @public
 */
export type DnsThreatProtection = (typeof DnsThreatProtection)[keyof typeof DnsThreatProtection];

/**
 * @public
 * @enum
 */
export const FirewallDomainRedirectionAction = {
  INSPECT_REDIRECTION_DOMAIN: "INSPECT_REDIRECTION_DOMAIN",
  TRUST_REDIRECTION_DOMAIN: "TRUST_REDIRECTION_DOMAIN",
} as const;
/**
 * @public
 */
export type FirewallDomainRedirectionAction =
  (typeof FirewallDomainRedirectionAction)[keyof typeof FirewallDomainRedirectionAction];

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  NotShared: "NOT_SHARED",
  SharedByMe: "SHARED_BY_ME",
  SharedWithMe: "SHARED_WITH_ME",
} as const;
/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * @public
 * @enum
 */
export const FirewallRuleGroupStatus = {
  COMPLETE: "COMPLETE",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type FirewallRuleGroupStatus = (typeof FirewallRuleGroupStatus)[keyof typeof FirewallRuleGroupStatus];

/**
 * @public
 * @enum
 */
export const OutpostResolverStatus = {
  ACTION_NEEDED: "ACTION_NEEDED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED_CREATION: "FAILED_CREATION",
  FAILED_DELETION: "FAILED_DELETION",
  OPERATIONAL: "OPERATIONAL",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type OutpostResolverStatus = (typeof OutpostResolverStatus)[keyof typeof OutpostResolverStatus];

/**
 * @public
 * @enum
 */
export const ResolverQueryLogConfigStatus = {
  Created: "CREATED",
  Creating: "CREATING",
  Deleting: "DELETING",
  Failed: "FAILED",
} as const;
/**
 * @public
 */
export type ResolverQueryLogConfigStatus =
  (typeof ResolverQueryLogConfigStatus)[keyof typeof ResolverQueryLogConfigStatus];

/**
 * @public
 * @enum
 */
export const RuleTypeOption = {
  Delegate: "DELEGATE",
  Forward: "FORWARD",
  Recursive: "RECURSIVE",
  System: "SYSTEM",
} as const;
/**
 * @public
 */
export type RuleTypeOption = (typeof RuleTypeOption)[keyof typeof RuleTypeOption];

/**
 * @public
 * @enum
 */
export const ResolverRuleStatus = {
  Complete: "COMPLETE",
  Deleting: "DELETING",
  Failed: "FAILED",
  Updating: "UPDATING",
} as const;
/**
 * @public
 */
export type ResolverRuleStatus = (typeof ResolverRuleStatus)[keyof typeof ResolverRuleStatus];

/**
 * @public
 * @enum
 */
export const FirewallFailOpenStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  USE_LOCAL_RESOURCE_SETTING: "USE_LOCAL_RESOURCE_SETTING",
} as const;
/**
 * @public
 */
export type FirewallFailOpenStatus = (typeof FirewallFailOpenStatus)[keyof typeof FirewallFailOpenStatus];

/**
 * @public
 * @enum
 */
export const FirewallDomainImportOperation = {
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type FirewallDomainImportOperation =
  (typeof FirewallDomainImportOperation)[keyof typeof FirewallDomainImportOperation];

/**
 * @public
 * @enum
 */
export const FirewallDomainUpdateOperation = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type FirewallDomainUpdateOperation =
  (typeof FirewallDomainUpdateOperation)[keyof typeof FirewallDomainUpdateOperation];

/**
 * @public
 * @enum
 */
export const ResolverAutodefinedReverseStatus = {
  Disabled: "DISABLED",
  Disabling: "DISABLING",
  Enabled: "ENABLED",
  Enabling: "ENABLING",
  UpdatingToUseLocalResourceSetting: "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING",
  UseLocalResourceSetting: "USE_LOCAL_RESOURCE_SETTING",
} as const;
/**
 * @public
 */
export type ResolverAutodefinedReverseStatus =
  (typeof ResolverAutodefinedReverseStatus)[keyof typeof ResolverAutodefinedReverseStatus];

/**
 * @public
 * @enum
 */
export const ResolverDNSSECValidationStatus = {
  Disabled: "DISABLED",
  Disabling: "DISABLING",
  Enabled: "ENABLED",
  Enabling: "ENABLING",
  UpdateToUseLocalResourceSetting: "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING",
  UseLocalResourceSetting: "USE_LOCAL_RESOURCE_SETTING",
} as const;
/**
 * @public
 */
export type ResolverDNSSECValidationStatus =
  (typeof ResolverDNSSECValidationStatus)[keyof typeof ResolverDNSSECValidationStatus];

/**
 * @public
 * @enum
 */
export const IpAddressStatus = {
  Attached: "ATTACHED",
  Attaching: "ATTACHING",
  Creating: "CREATING",
  DeleteFailedFasExpired: "DELETE_FAILED_FAS_EXPIRED",
  Deleting: "DELETING",
  Detaching: "DETACHING",
  FailedCreation: "FAILED_CREATION",
  FailedResourceGone: "FAILED_RESOURCE_GONE",
  Isolated: "ISOLATED",
  RemapAttaching: "REMAP_ATTACHING",
  RemapDetaching: "REMAP_DETACHING",
  UpdateFailed: "UPDATE_FAILED",
  Updating: "UPDATING",
} as const;
/**
 * @public
 */
export type IpAddressStatus = (typeof IpAddressStatus)[keyof typeof IpAddressStatus];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const Validation = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
  USE_LOCAL_RESOURCE_SETTING: "USE_LOCAL_RESOURCE_SETTING",
} as const;
/**
 * @public
 */
export type Validation = (typeof Validation)[keyof typeof Validation];
