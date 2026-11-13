// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ComputeResourceType = {
  /**
   * MicroVm compute resource type
   */
  MicroVm: "MicroVm",
  /**
   * WebFunction compute resource type
   */
  WebFunction: "WebFunction",
} as const;
/**
 * @public
 */
export type ComputeResourceType = (typeof ComputeResourceType)[keyof typeof ComputeResourceType];

/**
 * @public
 * @enum
 */
export const RuntimeArchitecture = {
  /**
   * 64-bit ARM architecture.
   */
  arm64: "arm64",
  /**
   * 64-bit x86 architecture.
   */
  x86_64: "x86_64",
} as const;
/**
 * @public
 */
export type RuntimeArchitecture = (typeof RuntimeArchitecture)[keyof typeof RuntimeArchitecture];

/**
 * @public
 * @enum
 */
export const IntegrationModel = {
  /**
   * (Functions) / Standard Lambda Runtime API integration
   */
  RUNTIME_API: "RuntimeAPI",
} as const;
/**
 * @public
 */
export type IntegrationModel = (typeof IntegrationModel)[keyof typeof IntegrationModel];

/**
 * @public
 * @enum
 */
export const CompatibilityPolicy = {
  /**
   * The feature is not supported by the runtime
   */
  NOT_SUPPORTED: "NotSupported",
  /**
   * The feature is supported by the runtime
   */
  SUPPORTED: "Supported",
} as const;
/**
 * @public
 */
export type CompatibilityPolicy = (typeof CompatibilityPolicy)[keyof typeof CompatibilityPolicy];

/**
 * @public
 * @enum
 */
export const NetworkProtocol = {
  /**
   * DualStack
   */
  DualStack: "DualStack",
  /**
   * IPv4
   */
  IPv4: "IPv4",
} as const;
/**
 * @public
 */
export type NetworkProtocol = (typeof NetworkProtocol)[keyof typeof NetworkProtocol];

/**
 * @public
 * @enum
 */
export const NetworkConnectorState = {
  /**
   * Active and ready for use
   */
  ACTIVE: "ACTIVE",
  /**
   * Deletion failed
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * Being deleted, cleaning up resources
   */
  DELETING: "DELETING",
  /**
   * Creation or update failed
   */
  FAILED: "FAILED",
  /**
   * Temporarily inactive
   */
  INACTIVE: "INACTIVE",
  /**
   * Being created, resources provisioning
   */
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type NetworkConnectorState = (typeof NetworkConnectorState)[keyof typeof NetworkConnectorState];

/**
 * @public
 * @enum
 */
export const ThrottleReason = {
  CallerRateLimitExceeded: "CallerRateLimitExceeded",
  ConcurrentInvocationLimitExceeded: "ConcurrentInvocationLimitExceeded",
  ConcurrentSnapshotCreateLimitExceeded: "ConcurrentSnapshotCreateLimitExceeded",
  FunctionInvocationRateLimitExceeded: "FunctionInvocationRateLimitExceeded",
  ReservedFunctionConcurrentInvocationLimitExceeded: "ReservedFunctionConcurrentInvocationLimitExceeded",
  ReservedFunctionInvocationRateLimitExceeded: "ReservedFunctionInvocationRateLimitExceeded",
} as const;
/**
 * @public
 */
export type ThrottleReason = (typeof ThrottleReason)[keyof typeof ThrottleReason];

/**
 * @public
 * @enum
 */
export const RuntimeReleaseState = {
  /**
   * The runtime is deprecated.
   */
  DEPRECATED: "DEPRECATED",
  /**
   * The runtime is generally available.
   */
  GA: "GA",
  /**
   * The runtime is in preview and not generally available.
   */
  PREVIEW: "PREVIEW",
} as const;
/**
 * @public
 */
export type RuntimeReleaseState = (typeof RuntimeReleaseState)[keyof typeof RuntimeReleaseState];

/**
 * @public
 * @enum
 */
export const RuntimeAliasState = {
  /**
   * The runtime alias is active and available for use.
   */
  ACTIVE: "ACTIVE",
  /**
   * The runtime alias is being created and is not yet available for use.
   */
  CREATING: "CREATING",
  /**
   * The runtime alias is being deleted.
   */
  DELETING: "DELETING",
  /**
   * The runtime alias is scheduled for deletion. It can be restored to ACTIVE state until the date and time specified in PendingDeletionAt. Function invokes fail for functions using the alias, and functions cannot be assigned to the alias.
   */
  PENDING_DELETION: "PENDING_DELETION",
  /**
   * The runtime alias is being updated to point to a new runtime version.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RuntimeAliasState = (typeof RuntimeAliasState)[keyof typeof RuntimeAliasState];

/**
 * @public
 * @enum
 */
export const RuntimeVersionState = {
  /**
   * The runtime version is active and available for use.
   */
  ACTIVE: "ACTIVE",
  /**
   * The runtime version is being created.
   */
  CREATING: "CREATING",
  /**
   * The runtime version is being deleted
   */
  DELETING: "DELETING",
  /**
   * The runtime version creation failed.
   */
  FAILED: "FAILED",
  /**
   * The runtime version is scheduled for deletion. It can be restored to ACTIVE state until the date and time specified in PendingDeletionAt. Function invokes fail for functions using the runtime version, and functions cannot be assigned to the runtime version.
   */
  PENDING_DELETION: "PENDING_DELETION",
} as const;
/**
 * @public
 */
export type RuntimeVersionState = (typeof RuntimeVersionState)[keyof typeof RuntimeVersionState];

/**
 * @public
 * @enum
 */
export const NetworkConnectorLastUpdateStatus = {
  Failed: "Failed",
  InProgress: "InProgress",
  Successful: "Successful",
} as const;
/**
 * @public
 */
export type NetworkConnectorLastUpdateStatus =
  (typeof NetworkConnectorLastUpdateStatus)[keyof typeof NetworkConnectorLastUpdateStatus];

/**
 * @public
 * @enum
 */
export const NetworkConnectorLastUpdateStatusReasonCode = {
  DisallowedByVpcEncryptionControl: "DisallowedByVpcEncryptionControl",
  Ec2RequestLimitExceeded: "Ec2RequestLimitExceeded",
  InsufficientRolePermissions: "InsufficientRolePermissions",
  InternalError: "InternalError",
  InvalidSecurityGroup: "InvalidSecurityGroup",
  InvalidSubnet: "InvalidSubnet",
  SecurityGroupsPerInterfaceLimitExceeded: "SecurityGroupsPerInterfaceLimitExceeded",
  SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
} as const;
/**
 * @public
 */
export type NetworkConnectorLastUpdateStatusReasonCode =
  (typeof NetworkConnectorLastUpdateStatusReasonCode)[keyof typeof NetworkConnectorLastUpdateStatusReasonCode];

/**
 * @public
 * @enum
 */
export const NetworkConnectorStateReasonCode = {
  DisallowedByVpcEncryptionControl: "DisallowedByVpcEncryptionControl",
  Ec2RequestLimitExceeded: "Ec2RequestLimitExceeded",
  InsufficientRolePermissions: "InsufficientRolePermissions",
  InternalError: "InternalError",
  InvalidSecurityGroup: "InvalidSecurityGroup",
  InvalidSubnet: "InvalidSubnet",
  SecurityGroupsPerInterfaceLimitExceeded: "SecurityGroupsPerInterfaceLimitExceeded",
  SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
} as const;
/**
 * @public
 */
export type NetworkConnectorStateReasonCode =
  (typeof NetworkConnectorStateReasonCode)[keyof typeof NetworkConnectorStateReasonCode];

/**
 * @public
 * @enum
 */
export const RuntimeState = {
  /**
   * The runtime is active and available for use.
   */
  ACTIVE: "ACTIVE",
  /**
   * The runtime is being deleted and can no longer be restored.
   */
  DELETING: "DELETING",
  /**
   * The runtime deletion failed to complete because the runtime's versions were not removed in time. The runtime is no longer scheduled for deletion.
   */
  FAILED: "FAILED",
  /**
   * The runtime is scheduled for deletion. It can be restored to ACTIVE state until the date and time specified in PendingDeletionAt.
   */
  PENDING_DELETION: "PENDING_DELETION",
} as const;
/**
 * @public
 */
export type RuntimeState = (typeof RuntimeState)[keyof typeof RuntimeState];

/**
 * @public
 * @enum
 */
export const NetworkConnectorType = {
  /**
   * VPC egress connectivity
   */
  VPC_EGRESS: "VPC_EGRESS",
} as const;
/**
 * @public
 */
export type NetworkConnectorType = (typeof NetworkConnectorType)[keyof typeof NetworkConnectorType];
