// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ConnectionState = {
  AVAILABLE: "available",
  DELETED: "deleted",
  DELETING: "deleting",
  DOWN: "down",
  FAILED: "failed",
  PENDING: "pending",
  REQUESTED: "requested",
  UPDATING: "updating",
} as const;
/**
 * @public
 */
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState];

/**
 * @public
 * @enum
 */
export const AttachPointType = {
  DirectConnectGateway: "DirectConnectGateway",
} as const;
/**
 * @public
 */
export type AttachPointType = (typeof AttachPointType)[keyof typeof AttachPointType];

/**
 * @public
 * @enum
 */
export const RemoteAccountIdentifierType = {
  ACCOUNT: "account",
  EMAIL: "email",
} as const;
/**
 * @public
 */
export type RemoteAccountIdentifierType =
  (typeof RemoteAccountIdentifierType)[keyof typeof RemoteAccountIdentifierType];

/**
 * @public
 * @enum
 */
export const EnvironmentState = {
  AVAILABLE: "available",
  LIMITED: "limited",
  UNAVAILABLE: "unavailable",
} as const;
/**
 * @public
 */
export type EnvironmentState = (typeof EnvironmentState)[keyof typeof EnvironmentState];
