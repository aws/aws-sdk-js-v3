// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * @enum
 */
export const ResourceAttributeType = {
  BIOS_ID: "BIOS_ID",
  FQDN: "FQDN",
  IPV4_ADDRESS: "IPV4_ADDRESS",
  IPV6_ADDRESS: "IPV6_ADDRESS",
  MAC_ADDRESS: "MAC_ADDRESS",
  MOTHERBOARD_SERIAL_NUMBER: "MOTHERBOARD_SERIAL_NUMBER",
  VM_MANAGED_OBJECT_REFERENCE: "VM_MANAGED_OBJECT_REFERENCE",
  VM_MANAGER_ID: "VM_MANAGER_ID",
  VM_NAME: "VM_NAME",
  VM_PATH: "VM_PATH",
} as const;
/**
 * @public
 */
export type ResourceAttributeType = (typeof ResourceAttributeType)[keyof typeof ResourceAttributeType];

/**
 * @public
 * @enum
 */
export const Status = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const UpdateType = {
  MigrationTaskStateUpdated: "MIGRATION_TASK_STATE_UPDATED",
} as const;
/**
 * @public
 */
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];
