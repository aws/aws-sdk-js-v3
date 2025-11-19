// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApplyTimeOf = {
  DEVICE: "DEVICE",
  UTC: "UTC",
} as const;
/**
 * @public
 */
export type ApplyTimeOf = (typeof ApplyTimeOf)[keyof typeof ApplyTimeOf];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const MaintenanceWindowType = {
  CUSTOM: "CUSTOM",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type MaintenanceWindowType = (typeof MaintenanceWindowType)[keyof typeof MaintenanceWindowType];

/**
 * @public
 * @enum
 */
export const SoftwareSetUpdateMode = {
  USE_DESIRED: "USE_DESIRED",
  USE_LATEST: "USE_LATEST",
} as const;
/**
 * @public
 */
export type SoftwareSetUpdateMode = (typeof SoftwareSetUpdateMode)[keyof typeof SoftwareSetUpdateMode];

/**
 * @public
 * @enum
 */
export const SoftwareSetUpdateSchedule = {
  APPLY_IMMEDIATELY: "APPLY_IMMEDIATELY",
  USE_MAINTENANCE_WINDOW: "USE_MAINTENANCE_WINDOW",
} as const;
/**
 * @public
 */
export type SoftwareSetUpdateSchedule = (typeof SoftwareSetUpdateSchedule)[keyof typeof SoftwareSetUpdateSchedule];

/**
 * @public
 * @enum
 */
export const DesktopType = {
  APPSTREAM: "appstream",
  WORKSPACES: "workspaces",
  WORKSPACES_WEB: "workspaces-web",
} as const;
/**
 * @public
 */
export type DesktopType = (typeof DesktopType)[keyof typeof DesktopType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const TargetDeviceStatus = {
  ARCHIVED: "ARCHIVED",
  DEREGISTERED: "DEREGISTERED",
} as const;
/**
 * @public
 */
export type TargetDeviceStatus = (typeof TargetDeviceStatus)[keyof typeof TargetDeviceStatus];

/**
 * @public
 * @enum
 */
export const DeviceSoftwareSetComplianceStatus = {
  COMPLIANT: "COMPLIANT",
  NONE: "NONE",
  NOT_COMPLIANT: "NOT_COMPLIANT",
} as const;
/**
 * @public
 */
export type DeviceSoftwareSetComplianceStatus =
  (typeof DeviceSoftwareSetComplianceStatus)[keyof typeof DeviceSoftwareSetComplianceStatus];

/**
 * @public
 * @enum
 */
export const SoftwareSetUpdateStatus = {
  AVAILABLE: "AVAILABLE",
  IN_PROGRESS: "IN_PROGRESS",
  UP_TO_DATE: "UP_TO_DATE",
} as const;
/**
 * @public
 */
export type SoftwareSetUpdateStatus = (typeof SoftwareSetUpdateStatus)[keyof typeof SoftwareSetUpdateStatus];

/**
 * @public
 * @enum
 */
export const DeviceStatus = {
  ARCHIVED: "ARCHIVED",
  DEREGISTERED: "DEREGISTERED",
  DEREGISTERING: "DEREGISTERING",
  REGISTERED: "REGISTERED",
} as const;
/**
 * @public
 */
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];

/**
 * @public
 * @enum
 */
export const EnvironmentSoftwareSetComplianceStatus = {
  COMPLIANT: "COMPLIANT",
  NOT_COMPLIANT: "NOT_COMPLIANT",
  NO_REGISTERED_DEVICES: "NO_REGISTERED_DEVICES",
} as const;
/**
 * @public
 */
export type EnvironmentSoftwareSetComplianceStatus =
  (typeof EnvironmentSoftwareSetComplianceStatus)[keyof typeof EnvironmentSoftwareSetComplianceStatus];

/**
 * @public
 * @enum
 */
export const SoftwareSetValidationStatus = {
  NOT_VALIDATED: "NOT_VALIDATED",
  VALIDATED: "VALIDATED",
} as const;
/**
 * @public
 */
export type SoftwareSetValidationStatus =
  (typeof SoftwareSetValidationStatus)[keyof typeof SoftwareSetValidationStatus];
