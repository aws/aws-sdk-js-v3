// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const GrantStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  FAILED_WORKFLOW: "FAILED_WORKFLOW",
  PENDING_ACCEPT: "PENDING_ACCEPT",
  PENDING_DELETE: "PENDING_DELETE",
  PENDING_WORKFLOW: "PENDING_WORKFLOW",
  REJECTED: "REJECTED",
  WORKFLOW_COMPLETED: "WORKFLOW_COMPLETED",
} as const;
/**
 * @public
 */
export type GrantStatus = (typeof GrantStatus)[keyof typeof GrantStatus];

/**
 * @public
 * @enum
 */
export const ActivationOverrideBehavior = {
  ALL_GRANTS_PERMITTED_BY_ISSUER: "ALL_GRANTS_PERMITTED_BY_ISSUER",
  DISTRIBUTED_GRANTS_ONLY: "DISTRIBUTED_GRANTS_ONLY",
} as const;
/**
 * @public
 */
export type ActivationOverrideBehavior = (typeof ActivationOverrideBehavior)[keyof typeof ActivationOverrideBehavior];

/**
 * @public
 * @enum
 */
export const AllowedOperation = {
  CHECKOUT_BORROW_LICENSE: "CheckoutBorrowLicense",
  CHECKOUT_LICENSE: "CheckoutLicense",
  CHECK_IN_LICENSE: "CheckInLicense",
  CREATE_GRANT: "CreateGrant",
  CREATE_TOKEN: "CreateToken",
  EXTEND_CONSUMPTION_LICENSE: "ExtendConsumptionLicense",
  LIST_PURCHASED_LICENSES: "ListPurchasedLicenses",
} as const;
/**
 * @public
 */
export type AllowedOperation = (typeof AllowedOperation)[keyof typeof AllowedOperation];

/**
 * @public
 * @enum
 */
export const DigitalSignatureMethod = {
  JWT_PS384: "JWT_PS384",
} as const;
/**
 * @public
 */
export type DigitalSignatureMethod = (typeof DigitalSignatureMethod)[keyof typeof DigitalSignatureMethod];

/**
 * @public
 * @enum
 */
export const EntitlementDataUnit = {
  BITS: "Bits",
  BITS_PER_SECOND: "Bits/Second",
  BYTES: "Bytes",
  BYTES_PER_SECOND: "Bytes/Second",
  COUNT: "Count",
  COUNT_PER_SECOND: "Count/Second",
  GIGABITS: "Gigabits",
  GIGABITS_PER_SECOND: "Gigabits/Second",
  GIGABYTES: "Gigabytes",
  GIGABYTES_PER_SECOND: "Gigabytes/Second",
  KILOBITS: "Kilobits",
  KILOBITS_PER_SECOND: "Kilobits/Second",
  KILOBYTES: "Kilobytes",
  KILOBYTES_PER_SECOND: "Kilobytes/Second",
  MEGABITS: "Megabits",
  MEGABITS_PER_SECOND: "Megabits/Second",
  MEGABYTES: "Megabytes",
  MEGABYTES_PER_SECOND: "Megabytes/Second",
  MICROSECONDS: "Microseconds",
  MILLISECONDS: "Milliseconds",
  NONE: "None",
  PERCENT: "Percent",
  SECONDS: "Seconds",
  TERABITS: "Terabits",
  TERABITS_PER_SECOND: "Terabits/Second",
  TERABYTES: "Terabytes",
  TERABYTES_PER_SECOND: "Terabytes/Second",
} as const;
/**
 * @public
 */
export type EntitlementDataUnit = (typeof EntitlementDataUnit)[keyof typeof EntitlementDataUnit];

/**
 * @public
 * @enum
 */
export const CheckoutType = {
  PERPETUAL: "PERPETUAL",
  PROVISIONAL: "PROVISIONAL",
} as const;
/**
 * @public
 */
export type CheckoutType = (typeof CheckoutType)[keyof typeof CheckoutType];

/**
 * @public
 * @enum
 */
export const RenewType = {
  MONTHLY: "Monthly",
  NONE: "None",
  WEEKLY: "Weekly",
} as const;
/**
 * @public
 */
export type RenewType = (typeof RenewType)[keyof typeof RenewType];

/**
 * @public
 * @enum
 */
export const EntitlementUnit = {
  BITS: "Bits",
  BITS_PER_SECOND: "Bits/Second",
  BYTES: "Bytes",
  BYTES_PER_SECOND: "Bytes/Second",
  COUNT: "Count",
  COUNT_PER_SECOND: "Count/Second",
  GIGABITS: "Gigabits",
  GIGABITS_PER_SECOND: "Gigabits/Second",
  GIGABYTES: "Gigabytes",
  GIGABYTES_PER_SECOND: "Gigabytes/Second",
  KILOBITS: "Kilobits",
  KILOBITS_PER_SECOND: "Kilobits/Second",
  KILOBYTES: "Kilobytes",
  KILOBYTES_PER_SECOND: "Kilobytes/Second",
  MEGABITS: "Megabits",
  MEGABITS_PER_SECOND: "Megabits/Second",
  MEGABYTES: "Megabytes",
  MEGABYTES_PER_SECOND: "Megabytes/Second",
  MICROSECONDS: "Microseconds",
  MILLISECONDS: "Milliseconds",
  NONE: "None",
  PERCENT: "Percent",
  SECONDS: "Seconds",
  TERABITS: "Terabits",
  TERABITS_PER_SECOND: "Terabits/Second",
  TERABYTES: "Terabytes",
  TERABYTES_PER_SECOND: "Terabytes/Second",
} as const;
/**
 * @public
 */
export type EntitlementUnit = (typeof EntitlementUnit)[keyof typeof EntitlementUnit];

/**
 * @public
 * @enum
 */
export const LicenseStatus = {
  AVAILABLE: "AVAILABLE",
  DEACTIVATED: "DEACTIVATED",
  DELETED: "DELETED",
  EXPIRED: "EXPIRED",
  PENDING_AVAILABLE: "PENDING_AVAILABLE",
  PENDING_DELETE: "PENDING_DELETE",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type LicenseStatus = (typeof LicenseStatus)[keyof typeof LicenseStatus];

/**
 * @public
 * @enum
 */
export const LicenseCountingType = {
  CORE: "Core",
  INSTANCE: "Instance",
  SOCKET: "Socket",
  VCPU: "vCPU",
} as const;
/**
 * @public
 */
export type LicenseCountingType = (typeof LicenseCountingType)[keyof typeof LicenseCountingType];

/**
 * @public
 * @enum
 */
export const ProductCodeType = {
  MARKETPLACE: "marketplace",
} as const;
/**
 * @public
 */
export type ProductCodeType = (typeof ProductCodeType)[keyof typeof ProductCodeType];

/**
 * @public
 * @enum
 */
export const ReportFrequencyType = {
  DAY: "DAY",
  MONTH: "MONTH",
  ONE_TIME: "ONE_TIME",
  WEEK: "WEEK",
} as const;
/**
 * @public
 */
export type ReportFrequencyType = (typeof ReportFrequencyType)[keyof typeof ReportFrequencyType];

/**
 * @public
 * @enum
 */
export const ReportType = {
  LICENSE_ASSET_GROUP_USAGE_REPORT: "LicenseAssetGroupUsageReport",
  LICENSE_CONFIGURATION_SUMMARY_REPORT: "LicenseConfigurationSummaryReport",
  LICENSE_CONFIGURATION_USAGE_REPORT: "LicenseConfigurationUsageReport",
} as const;
/**
 * @public
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

/**
 * @public
 * @enum
 */
export const TokenType = {
  REFRESH_TOKEN: "REFRESH_TOKEN",
} as const;
/**
 * @public
 */
export type TokenType = (typeof TokenType)[keyof typeof TokenType];

/**
 * @public
 * @enum
 */
export const LicenseDeletionStatus = {
  DELETED: "DELETED",
  PENDING_DELETE: "PENDING_DELETE",
} as const;
/**
 * @public
 */
export type LicenseDeletionStatus = (typeof LicenseDeletionStatus)[keyof typeof LicenseDeletionStatus];

/**
 * @public
 * @enum
 */
export const LicenseAssetGroupStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type LicenseAssetGroupStatus = (typeof LicenseAssetGroupStatus)[keyof typeof LicenseAssetGroupStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  EC2_AMI: "EC2_AMI",
  EC2_HOST: "EC2_HOST",
  EC2_INSTANCE: "EC2_INSTANCE",
  RDS: "RDS",
  SYSTEMS_MANAGER_MANAGED_INSTANCE: "SYSTEMS_MANAGER_MANAGED_INSTANCE",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const LicenseConversionTaskStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type LicenseConversionTaskStatus =
  (typeof LicenseConversionTaskStatus)[keyof typeof LicenseConversionTaskStatus];

/**
 * @public
 * @enum
 */
export const ReceivedStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  FAILED_WORKFLOW: "FAILED_WORKFLOW",
  PENDING_ACCEPT: "PENDING_ACCEPT",
  PENDING_WORKFLOW: "PENDING_WORKFLOW",
  REJECTED: "REJECTED",
  WORKFLOW_COMPLETED: "WORKFLOW_COMPLETED",
} as const;
/**
 * @public
 */
export type ReceivedStatus = (typeof ReceivedStatus)[keyof typeof ReceivedStatus];

/**
 * @public
 * @enum
 */
export const InventoryFilterCondition = {
  BEGINS_WITH: "BEGINS_WITH",
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type InventoryFilterCondition = (typeof InventoryFilterCondition)[keyof typeof InventoryFilterCondition];

/**
 * @public
 * @enum
 */
export const LicenseConfigurationStatus = {
  AVAILABLE: "AVAILABLE",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type LicenseConfigurationStatus = (typeof LicenseConfigurationStatus)[keyof typeof LicenseConfigurationStatus];
