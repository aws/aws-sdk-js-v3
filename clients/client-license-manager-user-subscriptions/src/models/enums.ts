// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActiveDirectoryType = {
  /**
   * AWS_MANAGED type of Active Directory
   */
  AWS_MANAGED: "AWS_MANAGED",
  /**
   * SELF_MANAGED type of Active Directory
   */
  SELF_MANAGED: "SELF_MANAGED",
} as const;
/**
 * @public
 */
export type ActiveDirectoryType = (typeof ActiveDirectoryType)[keyof typeof ActiveDirectoryType];

/**
 * @public
 * @enum
 */
export const ServerType = {
  /**
   *
   */
  RDS_SAL: "RDS_SAL",
} as const;
/**
 * @public
 */
export type ServerType = (typeof ServerType)[keyof typeof ServerType];

/**
 * @public
 * @enum
 */
export const LicenseServerEndpointProvisioningStatus = {
  /**
   *
   */
  DELETED: "DELETED",
  /**
   *
   */
  DELETING: "DELETING",
  /**
   *
   */
  DELETION_FAILED: "DELETION_FAILED",
  /**
   *
   */
  PROVISIONED: "PROVISIONED",
  /**
   *
   */
  PROVISIONING: "PROVISIONING",
  /**
   *
   */
  PROVISIONING_FAILED: "PROVISIONING_FAILED",
} as const;
/**
 * @public
 */
export type LicenseServerEndpointProvisioningStatus =
  (typeof LicenseServerEndpointProvisioningStatus)[keyof typeof LicenseServerEndpointProvisioningStatus];

/**
 * @public
 * @enum
 */
export const LicenseServerHealthStatus = {
  /**
   *
   */
  HEALTHY: "HEALTHY",
  /**
   *
   */
  NOT_APPLICABLE: "NOT_APPLICABLE",
  /**
   *
   */
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type LicenseServerHealthStatus = (typeof LicenseServerHealthStatus)[keyof typeof LicenseServerHealthStatus];
