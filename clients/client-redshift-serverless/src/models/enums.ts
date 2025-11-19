// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ManagedWorkgroupStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  MODIFYING: "MODIFYING",
  NOT_AVAILABLE: "NOT_AVAILABLE",
} as const;
/**
 * @public
 */
export type ManagedWorkgroupStatus = (typeof ManagedWorkgroupStatus)[keyof typeof ManagedWorkgroupStatus];
