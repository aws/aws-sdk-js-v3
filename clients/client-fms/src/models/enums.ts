// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccountRoleStatus = {
  Creating: "CREATING",
  Deleted: "DELETED",
  Deleting: "DELETING",
  PendingDeletion: "PENDING_DELETION",
  Ready: "READY",
} as const;
/**
 * @public
 */
export type AccountRoleStatus = (typeof AccountRoleStatus)[keyof typeof AccountRoleStatus];

/**
 * @public
 * @enum
 */
export const OrganizationStatus = {
  Offboarding: "OFFBOARDING",
  OffboardingComplete: "OFFBOARDING_COMPLETE",
  Onboarding: "ONBOARDING",
  OnboardingComplete: "ONBOARDING_COMPLETE",
} as const;
/**
 * @public
 */
export type OrganizationStatus = (typeof OrganizationStatus)[keyof typeof OrganizationStatus];

/**
 * @public
 * @enum
 */
export const SecurityServiceType = {
  DNS_FIREWALL: "DNS_FIREWALL",
  IMPORT_NETWORK_FIREWALL: "IMPORT_NETWORK_FIREWALL",
  NETWORK_ACL_COMMON: "NETWORK_ACL_COMMON",
  NETWORK_FIREWALL: "NETWORK_FIREWALL",
  SECURITY_GROUPS_COMMON: "SECURITY_GROUPS_COMMON",
  SECURITY_GROUPS_CONTENT_AUDIT: "SECURITY_GROUPS_CONTENT_AUDIT",
  SECURITY_GROUPS_USAGE_AUDIT: "SECURITY_GROUPS_USAGE_AUDIT",
  SHIELD_ADVANCED: "SHIELD_ADVANCED",
  THIRD_PARTY_FIREWALL: "THIRD_PARTY_FIREWALL",
  WAF: "WAF",
  WAFV2: "WAFV2",
} as const;
/**
 * @public
 */
export type SecurityServiceType = (typeof SecurityServiceType)[keyof typeof SecurityServiceType];

/**
 * @public
 * @enum
 */
export const ThirdPartyFirewall = {
  FORTIGATE_CLOUD_NATIVE_FIREWALL: "FORTIGATE_CLOUD_NATIVE_FIREWALL",
  PALO_ALTO_NETWORKS_CLOUD_NGFW: "PALO_ALTO_NETWORKS_CLOUD_NGFW",
} as const;
/**
 * @public
 */
export type ThirdPartyFirewall = (typeof ThirdPartyFirewall)[keyof typeof ThirdPartyFirewall];

/**
 * @public
 * @enum
 */
export const ThirdPartyFirewallAssociationStatus = {
  NOT_EXIST: "NOT_EXIST",
  OFFBOARDING: "OFFBOARDING",
  OFFBOARD_COMPLETE: "OFFBOARD_COMPLETE",
  ONBOARDING: "ONBOARDING",
  ONBOARD_COMPLETE: "ONBOARD_COMPLETE",
} as const;
/**
 * @public
 */
export type ThirdPartyFirewallAssociationStatus =
  (typeof ThirdPartyFirewallAssociationStatus)[keyof typeof ThirdPartyFirewallAssociationStatus];

/**
 * @public
 * @enum
 */
export const FailedItemReason = {
  NotValidAccountId: "NOT_VALID_ACCOUNT_ID",
  NotValidArn: "NOT_VALID_ARN",
  NotValidPartition: "NOT_VALID_PARTITION",
  NotValidRegion: "NOT_VALID_REGION",
  NotValidResourceType: "NOT_VALID_RESOURCE_TYPE",
  NotValidService: "NOT_VALID_SERVICE",
} as const;
/**
 * @public
 */
export type FailedItemReason = (typeof FailedItemReason)[keyof typeof FailedItemReason];

/**
 * @public
 * @enum
 */
export const DependentServiceName = {
  AWSConfig: "AWSCONFIG",
  AWSShieldAdvanced: "AWSSHIELD_ADVANCED",
  AWSVirtualPrivateCloud: "AWSVPC",
  AWSWAF: "AWSWAF",
} as const;
/**
 * @public
 */
export type DependentServiceName = (typeof DependentServiceName)[keyof typeof DependentServiceName];

/**
 * @public
 * @enum
 */
export const ViolationReason = {
  BlackHoleRouteDetected: "BLACK_HOLE_ROUTE_DETECTED",
  BlackHoleRouteDetectedInFirewallSubnet: "BLACK_HOLE_ROUTE_DETECTED_IN_FIREWALL_SUBNET",
  FMSCreatedSecurityGroupEdited: "FMS_CREATED_SECURITY_GROUP_EDITED",
  FirewallSubnetIsOutOfScope: "FIREWALL_SUBNET_IS_OUT_OF_SCOPE",
  FirewallSubnetMissingExpectedRoute: "FIREWALL_SUBNET_MISSING_EXPECTED_ROUTE",
  FirewallSubnetMissingVPCEndpoint: "FIREWALL_SUBNET_MISSING_VPCE_ENDPOINT",
  InternetGatewayMissingExpectedRoute: "INTERNET_GATEWAY_MISSING_EXPECTED_ROUTE",
  InternetTrafficNotInspected: "INTERNET_TRAFFIC_NOT_INSPECTED",
  InvalidNetworkAclEntry: "INVALID_NETWORK_ACL_ENTRY",
  InvalidRouteConfiguration: "INVALID_ROUTE_CONFIGURATION",
  MissingExpectedRouteTable: "MISSING_EXPECTED_ROUTE_TABLE",
  MissingFirewall: "MISSING_FIREWALL",
  MissingFirewallSubnetInAZ: "MISSING_FIREWALL_SUBNET_IN_AZ",
  MissingTargetGateway: "MISSING_TARGET_GATEWAY",
  NetworkFirewallPolicyModified: "NETWORK_FIREWALL_POLICY_MODIFIED",
  ResourceIncorrectWebAcl: "RESOURCE_INCORRECT_WEB_ACL",
  ResourceMissingDnsFirewall: "RESOURCE_MISSING_DNS_FIREWALL",
  ResourceMissingSecurityGroup: "RESOURCE_MISSING_SECURITY_GROUP",
  ResourceMissingShieldProtection: "RESOURCE_MISSING_SHIELD_PROTECTION",
  ResourceMissingWebAcl: "RESOURCE_MISSING_WEB_ACL",
  ResourceMissingWebaclOrShieldProtection: "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION",
  ResourceViolatesAuditSecurityGroup: "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP",
  RouteHasOutOfScopeEndpoint: "ROUTE_HAS_OUT_OF_SCOPE_ENDPOINT",
  SecurityGroupRedundant: "SECURITY_GROUP_REDUNDANT",
  SecurityGroupUnused: "SECURITY_GROUP_UNUSED",
  TrafficInspectionCrossesAZBoundary: "TRAFFIC_INSPECTION_CROSSES_AZ_BOUNDARY",
  UnexpectedFirewallRoutes: "UNEXPECTED_FIREWALL_ROUTES",
  UnexpectedTargetGatewayRoutes: "UNEXPECTED_TARGET_GATEWAY_ROUTES",
  WebACLConfigurationOrScopeOfUse: "WEB_ACL_CONFIGURATION_OR_SCOPE_OF_USE",
  WebAclMissingRuleGroup: "WEB_ACL_MISSING_RULE_GROUP",
} as const;
/**
 * @public
 */
export type ViolationReason = (typeof ViolationReason)[keyof typeof ViolationReason];

/**
 * @public
 * @enum
 */
export const CustomerPolicyScopeIdType = {
  ACCOUNT: "ACCOUNT",
  ORG_UNIT: "ORG_UNIT",
} as const;
/**
 * @public
 */
export type CustomerPolicyScopeIdType = (typeof CustomerPolicyScopeIdType)[keyof typeof CustomerPolicyScopeIdType];

/**
 * @public
 * @enum
 */
export const CustomerPolicyStatus = {
  ACTIVE: "ACTIVE",
  OUT_OF_ADMIN_SCOPE: "OUT_OF_ADMIN_SCOPE",
} as const;
/**
 * @public
 */
export type CustomerPolicyStatus = (typeof CustomerPolicyStatus)[keyof typeof CustomerPolicyStatus];

/**
 * @public
 * @enum
 */
export const ResourceTagLogicalOperator = {
  AND: "AND",
  OR: "OR",
} as const;
/**
 * @public
 */
export type ResourceTagLogicalOperator = (typeof ResourceTagLogicalOperator)[keyof typeof ResourceTagLogicalOperator];

/**
 * @public
 * @enum
 */
export const NetworkAclRuleAction = {
  ALLOW: "allow",
  DENY: "deny",
} as const;
/**
 * @public
 */
export type NetworkAclRuleAction = (typeof NetworkAclRuleAction)[keyof typeof NetworkAclRuleAction];

/**
 * @public
 * @enum
 */
export const FirewallDeploymentModel = {
  CENTRALIZED: "CENTRALIZED",
  DISTRIBUTED: "DISTRIBUTED",
} as const;
/**
 * @public
 */
export type FirewallDeploymentModel = (typeof FirewallDeploymentModel)[keyof typeof FirewallDeploymentModel];

/**
 * @public
 * @enum
 */
export const ResourceSetStatus = {
  ACTIVE: "ACTIVE",
  OUT_OF_ADMIN_SCOPE: "OUT_OF_ADMIN_SCOPE",
} as const;
/**
 * @public
 */
export type ResourceSetStatus = (typeof ResourceSetStatus)[keyof typeof ResourceSetStatus];

/**
 * @public
 * @enum
 */
export const MarketplaceSubscriptionOnboardingStatus = {
  COMPLETE: "COMPLETE",
  NOT_COMPLETE: "NOT_COMPLETE",
  NO_SUBSCRIPTION: "NO_SUBSCRIPTION",
} as const;
/**
 * @public
 */
export type MarketplaceSubscriptionOnboardingStatus =
  (typeof MarketplaceSubscriptionOnboardingStatus)[keyof typeof MarketplaceSubscriptionOnboardingStatus];

/**
 * @public
 * @enum
 */
export const RemediationActionType = {
  Modify: "MODIFY",
  Remove: "REMOVE",
} as const;
/**
 * @public
 */
export type RemediationActionType = (typeof RemediationActionType)[keyof typeof RemediationActionType];

/**
 * @public
 * @enum
 */
export const EntryType = {
  CustomEntry: "CUSTOM_ENTRY",
  FMSManagedFirstEntry: "FMS_MANAGED_FIRST_ENTRY",
  FMSManagedLastEntry: "FMS_MANAGED_LAST_ENTRY",
} as const;
/**
 * @public
 */
export type EntryType = (typeof EntryType)[keyof typeof EntryType];

/**
 * @public
 * @enum
 */
export const EntryViolationReason = {
  EntryConflict: "ENTRY_CONFLICT",
  IncorrectEntryOrder: "INCORRECT_ENTRY_ORDER",
  MissingExpectedEntry: "MISSING_EXPECTED_ENTRY",
} as const;
/**
 * @public
 */
export type EntryViolationReason = (typeof EntryViolationReason)[keyof typeof EntryViolationReason];

/**
 * @public
 * @enum
 */
export const DestinationType = {
  IPV4: "IPV4",
  IPV6: "IPV6",
  PrefixList: "PREFIX_LIST",
} as const;
/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 * @enum
 */
export const TargetType = {
  CarrierGateway: "CARRIER_GATEWAY",
  EgressOnlyInternetGateway: "EGRESS_ONLY_INTERNET_GATEWAY",
  Gateway: "GATEWAY",
  Instance: "INSTANCE",
  LocalGateway: "LOCAL_GATEWAY",
  NatGateway: "NAT_GATEWAY",
  NetworkInterface: "NETWORK_INTERFACE",
  TransitGateway: "TRANSIT_GATEWAY",
  VPCEndpoint: "VPC_ENDPOINT",
  VPCPeeringConnection: "VPC_PEERING_CONNECTION",
} as const;
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * @enum
 */
export const RuleOrder = {
  DEFAULT_ACTION_ORDER: "DEFAULT_ACTION_ORDER",
  STRICT_ORDER: "STRICT_ORDER",
} as const;
/**
 * @public
 */
export type RuleOrder = (typeof RuleOrder)[keyof typeof RuleOrder];

/**
 * @public
 * @enum
 */
export const StreamExceptionPolicy = {
  CONTINUE: "CONTINUE",
  DROP: "DROP",
  FMS_IGNORE: "FMS_IGNORE",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type StreamExceptionPolicy = (typeof StreamExceptionPolicy)[keyof typeof StreamExceptionPolicy];

/**
 * @public
 * @enum
 */
export const NetworkFirewallOverrideAction = {
  DROP_TO_ALERT: "DROP_TO_ALERT",
} as const;
/**
 * @public
 */
export type NetworkFirewallOverrideAction =
  (typeof NetworkFirewallOverrideAction)[keyof typeof NetworkFirewallOverrideAction];

/**
 * @public
 * @enum
 */
export const PolicyComplianceStatusType = {
  Compliant: "COMPLIANT",
  NonCompliant: "NON_COMPLIANT",
} as const;
/**
 * @public
 */
export type PolicyComplianceStatusType = (typeof PolicyComplianceStatusType)[keyof typeof PolicyComplianceStatusType];
