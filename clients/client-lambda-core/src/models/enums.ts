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
} as const;
/**
 * @public
 */
export type ComputeResourceType = (typeof ComputeResourceType)[keyof typeof ComputeResourceType];

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
