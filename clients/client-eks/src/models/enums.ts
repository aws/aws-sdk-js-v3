// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AuthenticationMode = {
  API: "API",
  API_AND_CONFIG_MAP: "API_AND_CONFIG_MAP",
  CONFIG_MAP: "CONFIG_MAP",
} as const;
/**
 * @public
 */
export type AuthenticationMode = (typeof AuthenticationMode)[keyof typeof AuthenticationMode];

/**
 * @public
 * @enum
 */
export const AccessScopeType = {
  cluster: "cluster",
  namespace: "namespace",
} as const;
/**
 * @public
 */
export type AccessScopeType = (typeof AccessScopeType)[keyof typeof AccessScopeType];

/**
 * @public
 * @enum
 */
export const AddonIssueCode = {
  ACCESS_DENIED: "AccessDenied",
  ADDON_PERMISSION_FAILURE: "AddonPermissionFailure",
  ADDON_SUBSCRIPTION_NEEDED: "AddonSubscriptionNeeded",
  ADMISSION_REQUEST_DENIED: "AdmissionRequestDenied",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
  CONFIGURATION_CONFLICT: "ConfigurationConflict",
  INSUFFICIENT_NUMBER_OF_REPLICAS: "InsufficientNumberOfReplicas",
  INTERNAL_FAILURE: "InternalFailure",
  K8S_RESOURCE_NOT_FOUND: "K8sResourceNotFound",
  UNSUPPORTED_ADDON_MODIFICATION: "UnsupportedAddonModification",
} as const;
/**
 * @public
 */
export type AddonIssueCode = (typeof AddonIssueCode)[keyof typeof AddonIssueCode];

/**
 * @public
 * @enum
 */
export const AddonStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DEGRADED: "DEGRADED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AddonStatus = (typeof AddonStatus)[keyof typeof AddonStatus];

/**
 * @public
 * @enum
 */
export const AMITypes = {
  AL2023_ARM_64_NVIDIA: "AL2023_ARM_64_NVIDIA",
  AL2023_ARM_64_STANDARD: "AL2023_ARM_64_STANDARD",
  AL2023_x86_64_NEURON: "AL2023_x86_64_NEURON",
  AL2023_x86_64_NVIDIA: "AL2023_x86_64_NVIDIA",
  AL2023_x86_64_STANDARD: "AL2023_x86_64_STANDARD",
  AL2_ARM_64: "AL2_ARM_64",
  AL2_x86_64: "AL2_x86_64",
  AL2_x86_64_GPU: "AL2_x86_64_GPU",
  BOTTLEROCKET_ARM_64: "BOTTLEROCKET_ARM_64",
  BOTTLEROCKET_ARM_64_FIPS: "BOTTLEROCKET_ARM_64_FIPS",
  BOTTLEROCKET_ARM_64_NVIDIA: "BOTTLEROCKET_ARM_64_NVIDIA",
  BOTTLEROCKET_x86_64: "BOTTLEROCKET_x86_64",
  BOTTLEROCKET_x86_64_FIPS: "BOTTLEROCKET_x86_64_FIPS",
  BOTTLEROCKET_x86_64_NVIDIA: "BOTTLEROCKET_x86_64_NVIDIA",
  CUSTOM: "CUSTOM",
  WINDOWS_CORE_2019_x86_64: "WINDOWS_CORE_2019_x86_64",
  WINDOWS_CORE_2022_x86_64: "WINDOWS_CORE_2022_x86_64",
  WINDOWS_FULL_2019_x86_64: "WINDOWS_FULL_2019_x86_64",
  WINDOWS_FULL_2022_x86_64: "WINDOWS_FULL_2022_x86_64",
} as const;
/**
 * @public
 */
export type AMITypes = (typeof AMITypes)[keyof typeof AMITypes];

/**
 * @public
 * @enum
 */
export const SsoIdentityType = {
  SSO_GROUP: "SSO_GROUP",
  SSO_USER: "SSO_USER",
} as const;
/**
 * @public
 */
export type SsoIdentityType = (typeof SsoIdentityType)[keyof typeof SsoIdentityType];

/**
 * @public
 * @enum
 */
export const ArgoCdRole = {
  ADMIN: "ADMIN",
  EDITOR: "EDITOR",
  VIEWER: "VIEWER",
} as const;
/**
 * @public
 */
export type ArgoCdRole = (typeof ArgoCdRole)[keyof typeof ArgoCdRole];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  ACCESS_DENIED: "AccessDenied",
  ADMISSION_REQUEST_DENIED: "AdmissionRequestDenied",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
  CONFIGURATION_CONFLICT: "ConfigurationConflict",
  ENI_LIMIT_REACHED: "EniLimitReached",
  INSUFFICIENT_FREE_ADDRESSES: "InsufficientFreeAddresses",
  INSUFFICIENT_NUMBER_OF_REPLICAS: "InsufficientNumberOfReplicas",
  IP_NOT_AVAILABLE: "IpNotAvailable",
  K8S_RESOURCE_NOT_FOUND: "K8sResourceNotFound",
  NODE_CREATION_FAILURE: "NodeCreationFailure",
  OPERATION_NOT_PERMITTED: "OperationNotPermitted",
  POD_EVICTION_FAILURE: "PodEvictionFailure",
  SECURITY_GROUP_NOT_FOUND: "SecurityGroupNotFound",
  SUBNET_NOT_FOUND: "SubnetNotFound",
  UNKNOWN: "Unknown",
  UNSUPPORTED_ADDON_MODIFICATION: "UnsupportedAddonModification",
  VPC_ID_NOT_FOUND: "VpcIdNotFound",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const UpdateParamType = {
  ADDON_VERSION: "AddonVersion",
  AUTHENTICATION_MODE: "AuthenticationMode",
  CLUSTER_LOGGING: "ClusterLogging",
  COMPUTE_CONFIG: "ComputeConfig",
  CONFIGURATION_VALUES: "ConfigurationValues",
  DELETION_PROTECTION: "DeletionProtection",
  DESIRED_SIZE: "DesiredSize",
  ENCRYPTION_CONFIG: "EncryptionConfig",
  ENDPOINT_PRIVATE_ACCESS: "EndpointPrivateAccess",
  ENDPOINT_PUBLIC_ACCESS: "EndpointPublicAccess",
  IDENTITY_PROVIDER_CONFIG: "IdentityProviderConfig",
  KUBERNETES_NETWORK_CONFIG: "KubernetesNetworkConfig",
  LABELS_TO_ADD: "LabelsToAdd",
  LABELS_TO_REMOVE: "LabelsToRemove",
  LAUNCH_TEMPLATE_NAME: "LaunchTemplateName",
  LAUNCH_TEMPLATE_VERSION: "LaunchTemplateVersion",
  MAX_SIZE: "MaxSize",
  MAX_UNAVAILABLE: "MaxUnavailable",
  MAX_UNAVAILABLE_PERCENTAGE: "MaxUnavailablePercentage",
  MIN_SIZE: "MinSize",
  NODE_REPAIR_CONFIG: "NodeRepairConfig",
  NODE_REPAIR_ENABLED: "NodeRepairEnabled",
  PLATFORM_VERSION: "PlatformVersion",
  POD_IDENTITY_ASSOCIATIONS: "PodIdentityAssociations",
  PREVIOUS_TIER: "PreviousTier",
  PUBLIC_ACCESS_CIDRS: "PublicAccessCidrs",
  RELEASE_VERSION: "ReleaseVersion",
  REMOTE_NETWORK_CONFIG: "RemoteNetworkConfig",
  RESOLVE_CONFLICTS: "ResolveConflicts",
  SECURITY_GROUPS: "SecurityGroups",
  SERVICE_ACCOUNT_ROLE_ARN: "ServiceAccountRoleArn",
  STORAGE_CONFIG: "StorageConfig",
  SUBNETS: "Subnets",
  TAINTS_TO_ADD: "TaintsToAdd",
  TAINTS_TO_REMOVE: "TaintsToRemove",
  UPDATED_TIER: "UpdatedTier",
  UPDATE_STRATEGY: "UpdateStrategy",
  UPGRADE_POLICY: "UpgradePolicy",
  VERSION: "Version",
  ZONAL_SHIFT_CONFIG: "ZonalShiftConfig",
} as const;
/**
 * @public
 */
export type UpdateParamType = (typeof UpdateParamType)[keyof typeof UpdateParamType];

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  CANCELLED: "Cancelled",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;
/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * @public
 * @enum
 */
export const UpdateType = {
  ACCESS_CONFIG_UPDATE: "AccessConfigUpdate",
  ADDON_UPDATE: "AddonUpdate",
  ASSOCIATE_ENCRYPTION_CONFIG: "AssociateEncryptionConfig",
  ASSOCIATE_IDENTITY_PROVIDER_CONFIG: "AssociateIdentityProviderConfig",
  AUTO_MODE_UPDATE: "AutoModeUpdate",
  CONFIG_UPDATE: "ConfigUpdate",
  CONTROL_PLANE_SCALING_CONFIG_UPDATE: "ControlPlaneScalingConfigUpdate",
  DELETION_PROTECTION_UPDATE: "DeletionProtectionUpdate",
  DISASSOCIATE_IDENTITY_PROVIDER_CONFIG: "DisassociateIdentityProviderConfig",
  ENDPOINT_ACCESS_UPDATE: "EndpointAccessUpdate",
  LOGGING_UPDATE: "LoggingUpdate",
  REMOTE_NETWORK_CONFIG_UPDATE: "RemoteNetworkConfigUpdate",
  UPGRADE_POLICY_UPDATE: "UpgradePolicyUpdate",
  VERSION_UPDATE: "VersionUpdate",
  VPC_CONFIG_UPDATE: "VpcConfigUpdate",
  ZONAL_SHIFT_CONFIG_UPDATE: "ZonalShiftConfigUpdate",
} as const;
/**
 * @public
 */
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];

/**
 * @public
 * @enum
 */
export const ResolveConflicts = {
  NONE: "NONE",
  OVERWRITE: "OVERWRITE",
  PRESERVE: "PRESERVE",
} as const;
/**
 * @public
 */
export type ResolveConflicts = (typeof ResolveConflicts)[keyof typeof ResolveConflicts];

/**
 * @public
 * @enum
 */
export const CapabilityDeletePropagationPolicy = {
  RETAIN: "RETAIN",
} as const;
/**
 * @public
 */
export type CapabilityDeletePropagationPolicy =
  (typeof CapabilityDeletePropagationPolicy)[keyof typeof CapabilityDeletePropagationPolicy];

/**
 * @public
 * @enum
 */
export const CapabilityType = {
  ACK: "ACK",
  ARGOCD: "ARGOCD",
  KRO: "KRO",
} as const;
/**
 * @public
 */
export type CapabilityType = (typeof CapabilityType)[keyof typeof CapabilityType];

/**
 * @public
 * @enum
 */
export const CapabilityIssueCode = {
  ACCESS_DENIED: "AccessDenied",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
} as const;
/**
 * @public
 */
export type CapabilityIssueCode = (typeof CapabilityIssueCode)[keyof typeof CapabilityIssueCode];

/**
 * @public
 * @enum
 */
export const CapabilityStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DEGRADED: "DEGRADED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type CapabilityStatus = (typeof CapabilityStatus)[keyof typeof CapabilityStatus];

/**
 * @public
 * @enum
 */
export const ProvisionedControlPlaneTier = {
  STANDARD: "standard",
  TIER_2XL: "tier-2xl",
  TIER_4XL: "tier-4xl",
  TIER_XL: "tier-xl",
} as const;
/**
 * @public
 */
export type ProvisionedControlPlaneTier =
  (typeof ProvisionedControlPlaneTier)[keyof typeof ProvisionedControlPlaneTier];

/**
 * @public
 * @enum
 */
export const IpFamily = {
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;
/**
 * @public
 */
export type IpFamily = (typeof IpFamily)[keyof typeof IpFamily];

/**
 * @public
 * @enum
 */
export const LogType = {
  API: "api",
  AUDIT: "audit",
  AUTHENTICATOR: "authenticator",
  CONTROLLER_MANAGER: "controllerManager",
  SCHEDULER: "scheduler",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const SupportType = {
  EXTENDED: "EXTENDED",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type SupportType = (typeof SupportType)[keyof typeof SupportType];

/**
 * @public
 * @enum
 */
export const ClusterIssueCode = {
  ACCESS_DENIED: "AccessDenied",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
  CONFIGURATION_CONFLICT: "ConfigurationConflict",
  EC2_SECURITY_GROUP_NOT_FOUND: "Ec2SecurityGroupNotFound",
  EC2_SERVICE_NOT_SUBSCRIBED: "Ec2ServiceNotSubscribed",
  EC2_SUBNET_NOT_FOUND: "Ec2SubnetNotFound",
  IAM_ROLE_NOT_FOUND: "IamRoleNotFound",
  INSUFFICIENT_FREE_ADDRESSES: "InsufficientFreeAddresses",
  INTERNAL_FAILURE: "InternalFailure",
  KMS_GRANT_REVOKED: "KmsGrantRevoked",
  KMS_KEY_DISABLED: "KmsKeyDisabled",
  KMS_KEY_MARKED_FOR_DELETION: "KmsKeyMarkedForDeletion",
  KMS_KEY_NOT_FOUND: "KmsKeyNotFound",
  OTHER: "Other",
  RESOURCE_LIMIT_EXCEEDED: "ResourceLimitExceeded",
  RESOURCE_NOT_FOUND: "ResourceNotFound",
  STS_REGIONAL_ENDPOINT_DISABLED: "StsRegionalEndpointDisabled",
  UNSUPPORTED_VERSION: "UnsupportedVersion",
  VPC_NOT_FOUND: "VpcNotFound",
} as const;
/**
 * @public
 */
export type ClusterIssueCode = (typeof ClusterIssueCode)[keyof typeof ClusterIssueCode];

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * @public
 * @enum
 */
export const EksAnywhereSubscriptionLicenseType = {
  Cluster: "Cluster",
} as const;
/**
 * @public
 */
export type EksAnywhereSubscriptionLicenseType =
  (typeof EksAnywhereSubscriptionLicenseType)[keyof typeof EksAnywhereSubscriptionLicenseType];

/**
 * @public
 * @enum
 */
export const EksAnywhereSubscriptionTermUnit = {
  MONTHS: "MONTHS",
} as const;
/**
 * @public
 */
export type EksAnywhereSubscriptionTermUnit =
  (typeof EksAnywhereSubscriptionTermUnit)[keyof typeof EksAnywhereSubscriptionTermUnit];

/**
 * @public
 * @enum
 */
export const FargateProfileIssueCode = {
  ACCESS_DENIED: "AccessDenied",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
  INTERNAL_FAILURE: "InternalFailure",
  POD_EXECUTION_ROLE_ALREADY_IN_USE: "PodExecutionRoleAlreadyInUse",
} as const;
/**
 * @public
 */
export type FargateProfileIssueCode = (typeof FargateProfileIssueCode)[keyof typeof FargateProfileIssueCode];

/**
 * @public
 * @enum
 */
export const FargateProfileStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type FargateProfileStatus = (typeof FargateProfileStatus)[keyof typeof FargateProfileStatus];

/**
 * @public
 * @enum
 */
export const CapacityTypes = {
  CAPACITY_BLOCK: "CAPACITY_BLOCK",
  ON_DEMAND: "ON_DEMAND",
  SPOT: "SPOT",
} as const;
/**
 * @public
 */
export type CapacityTypes = (typeof CapacityTypes)[keyof typeof CapacityTypes];

/**
 * @public
 * @enum
 */
export const RepairAction = {
  NoAction: "NoAction",
  Reboot: "Reboot",
  Replace: "Replace",
} as const;
/**
 * @public
 */
export type RepairAction = (typeof RepairAction)[keyof typeof RepairAction];

/**
 * @public
 * @enum
 */
export const TaintEffect = {
  NO_EXECUTE: "NO_EXECUTE",
  NO_SCHEDULE: "NO_SCHEDULE",
  PREFER_NO_SCHEDULE: "PREFER_NO_SCHEDULE",
} as const;
/**
 * @public
 */
export type TaintEffect = (typeof TaintEffect)[keyof typeof TaintEffect];

/**
 * @public
 * @enum
 */
export const NodegroupUpdateStrategies = {
  DEFAULT: "DEFAULT",
  MINIMAL: "MINIMAL",
} as const;
/**
 * @public
 */
export type NodegroupUpdateStrategies = (typeof NodegroupUpdateStrategies)[keyof typeof NodegroupUpdateStrategies];

/**
 * @public
 * @enum
 */
export const NodegroupIssueCode = {
  ACCESS_DENIED: "AccessDenied",
  AMI_ID_NOT_FOUND: "AmiIdNotFound",
  ASG_INSTANCE_LAUNCH_FAILURES: "AsgInstanceLaunchFailures",
  AUTO_SCALING_GROUP_INSTANCE_REFRESH_ACTIVE: "AutoScalingGroupInstanceRefreshActive",
  AUTO_SCALING_GROUP_INVALID_CONFIGURATION: "AutoScalingGroupInvalidConfiguration",
  AUTO_SCALING_GROUP_NOT_FOUND: "AutoScalingGroupNotFound",
  AUTO_SCALING_GROUP_OPT_IN_REQUIRED: "AutoScalingGroupOptInRequired",
  AUTO_SCALING_GROUP_RATE_LIMIT_EXCEEDED: "AutoScalingGroupRateLimitExceeded",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
  EC2_INSTANCE_TYPE_DOES_NOT_EXIST: "Ec2InstanceTypeDoesNotExist",
  EC2_LAUNCH_TEMPLATE_DELETION_FAILURE: "Ec2LaunchTemplateDeletionFailure",
  EC2_LAUNCH_TEMPLATE_INVALID_CONFIGURATION: "Ec2LaunchTemplateInvalidConfiguration",
  EC2_LAUNCH_TEMPLATE_MAX_LIMIT_EXCEEDED: "Ec2LaunchTemplateMaxLimitExceeded",
  EC2_LAUNCH_TEMPLATE_NOT_FOUND: "Ec2LaunchTemplateNotFound",
  EC2_LAUNCH_TEMPLATE_VERSION_MAX_LIMIT_EXCEEDED: "Ec2LaunchTemplateVersionMaxLimitExceeded",
  EC2_LAUNCH_TEMPLATE_VERSION_MISMATCH: "Ec2LaunchTemplateVersionMismatch",
  EC2_SECURITY_GROUP_DELETION_FAILURE: "Ec2SecurityGroupDeletionFailure",
  EC2_SECURITY_GROUP_NOT_FOUND: "Ec2SecurityGroupNotFound",
  EC2_SUBNET_INVALID_CONFIGURATION: "Ec2SubnetInvalidConfiguration",
  EC2_SUBNET_LIST_TOO_LONG: "Ec2SubnetListTooLong",
  EC2_SUBNET_MISSING_IPV6_ASSIGNMENT: "Ec2SubnetMissingIpv6Assignment",
  EC2_SUBNET_NOT_FOUND: "Ec2SubnetNotFound",
  IAM_INSTANCE_PROFILE_NOT_FOUND: "IamInstanceProfileNotFound",
  IAM_LIMIT_EXCEEDED: "IamLimitExceeded",
  IAM_NODE_ROLE_NOT_FOUND: "IamNodeRoleNotFound",
  IAM_THROTTLING: "IamThrottling",
  INSTANCE_LIMIT_EXCEEDED: "InstanceLimitExceeded",
  INSUFFICIENT_FREE_ADDRESSES: "InsufficientFreeAddresses",
  INTERNAL_FAILURE: "InternalFailure",
  KUBERNETES_LABEL_INVALID: "KubernetesLabelInvalid",
  LIMIT_EXCEEDED: "LimitExceeded",
  NODE_CREATION_FAILURE: "NodeCreationFailure",
  NODE_TERMINATION_FAILURE: "NodeTerminationFailure",
  POD_EVICTION_FAILURE: "PodEvictionFailure",
  SOURCE_EC2_LAUNCH_TEMPLATE_NOT_FOUND: "SourceEc2LaunchTemplateNotFound",
  UNKNOWN: "Unknown",
} as const;
/**
 * @public
 */
export type NodegroupIssueCode = (typeof NodegroupIssueCode)[keyof typeof NodegroupIssueCode];

/**
 * @public
 * @enum
 */
export const NodegroupStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DEGRADED: "DEGRADED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type NodegroupStatus = (typeof NodegroupStatus)[keyof typeof NodegroupStatus];

/**
 * @public
 * @enum
 */
export const ClusterVersionStatus = {
  extended_support: "extended-support",
  standard_support: "standard-support",
  unsupported: "unsupported",
} as const;
/**
 * @public
 */
export type ClusterVersionStatus = (typeof ClusterVersionStatus)[keyof typeof ClusterVersionStatus];

/**
 * @public
 * @enum
 */
export const VersionStatus = {
  EXTENDED_SUPPORT: "EXTENDED_SUPPORT",
  STANDARD_SUPPORT: "STANDARD_SUPPORT",
  UNSUPPORTED: "UNSUPPORTED",
} as const;
/**
 * @public
 */
export type VersionStatus = (typeof VersionStatus)[keyof typeof VersionStatus];

/**
 * @public
 * @enum
 */
export const ConfigStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ConfigStatus = (typeof ConfigStatus)[keyof typeof ConfigStatus];

/**
 * @public
 * @enum
 */
export const Category = {
  MISCONFIGURATION: "MISCONFIGURATION",
  UPGRADE_READINESS: "UPGRADE_READINESS",
} as const;
/**
 * @public
 */
export type Category = (typeof Category)[keyof typeof Category];

/**
 * @public
 * @enum
 */
export const InsightStatusValue = {
  ERROR: "ERROR",
  PASSING: "PASSING",
  UNKNOWN: "UNKNOWN",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type InsightStatusValue = (typeof InsightStatusValue)[keyof typeof InsightStatusValue];

/**
 * @public
 * @enum
 */
export const InsightsRefreshStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type InsightsRefreshStatus = (typeof InsightsRefreshStatus)[keyof typeof InsightsRefreshStatus];

/**
 * @public
 * @enum
 */
export const EksAnywhereSubscriptionStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  EXPIRED: "EXPIRED",
  EXPIRING: "EXPIRING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type EksAnywhereSubscriptionStatus =
  (typeof EksAnywhereSubscriptionStatus)[keyof typeof EksAnywhereSubscriptionStatus];

/**
 * @public
 * @enum
 */
export const ConnectorConfigProvider = {
  AKS: "AKS",
  ANTHOS: "ANTHOS",
  EC2: "EC2",
  EKS_ANYWHERE: "EKS_ANYWHERE",
  GKE: "GKE",
  OPENSHIFT: "OPENSHIFT",
  OTHER: "OTHER",
  RANCHER: "RANCHER",
  TANZU: "TANZU",
} as const;
/**
 * @public
 */
export type ConnectorConfigProvider = (typeof ConnectorConfigProvider)[keyof typeof ConnectorConfigProvider];
