// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const GatewayType = {
  BACKUP_VM: "BACKUP_VM",
} as const;
/**
 * @public
 */
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

/**
 * @public
 * @enum
 */
export const SyncMetadataStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  PARTIALLY_FAILED: "PARTIALLY_FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type SyncMetadataStatus = (typeof SyncMetadataStatus)[keyof typeof SyncMetadataStatus];

/**
 * @public
 * @enum
 */
export const HypervisorState = {
  ERROR: "ERROR",
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type HypervisorState = (typeof HypervisorState)[keyof typeof HypervisorState];
