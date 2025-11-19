// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CA_CERT_VALIDITY_TOO_SHORT: "CA_CERT_VALIDITY_TOO_SHORT",
  INVALID_CA_USAGE_MODE: "INVALID_CA_USAGE_MODE",
  INVALID_CONNECTOR_TYPE: "INVALID_CONNECTOR_TYPE",
  INVALID_STATE: "INVALID_STATE",
  NO_CLIENT_TOKEN: "NO_CLIENT_TOKEN",
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
export const ConnectorStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

/**
 * @public
 * @enum
 */
export const ConnectorStatusReason = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  PRIVATECA_ACCESS_DENIED: "PRIVATECA_ACCESS_DENIED",
  PRIVATECA_INVALID_STATE: "PRIVATECA_INVALID_STATE",
  PRIVATECA_RESOURCE_NOT_FOUND: "PRIVATECA_RESOURCE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type ConnectorStatusReason = (typeof ConnectorStatusReason)[keyof typeof ConnectorStatusReason];

/**
 * @public
 * @enum
 */
export const ConnectorType = {
  GENERAL_PURPOSE: "GENERAL_PURPOSE",
  INTUNE: "INTUNE",
} as const;
/**
 * @public
 */
export type ConnectorType = (typeof ConnectorType)[keyof typeof ConnectorType];
