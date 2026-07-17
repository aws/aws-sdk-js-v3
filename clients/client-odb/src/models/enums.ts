// smithy-typescript generated code
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
export const Access = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Access = (typeof Access)[keyof typeof Access];

/**
 * @public
 * @enum
 */
export const AdminPasswordSource = {
  API_REQUEST_PARAMETER: "API_REQUEST_PARAMETER",
  CUSTOMER_MANAGED_AWS_SECRET: "CUSTOMER_MANAGED_AWS_SECRET",
} as const;
/**
 * @public
 */
export type AdminPasswordSource = (typeof AdminPasswordSource)[keyof typeof AdminPasswordSource];

/**
 * @public
 * @enum
 */
export const ExternalIdType = {
  COMPARTMENT_OCID: "compartment_ocid",
  DATABASE_OCID: "database_ocid",
  TENANT_OCID: "tenant_ocid",
} as const;
/**
 * @public
 */
export type ExternalIdType = (typeof ExternalIdType)[keyof typeof ExternalIdType];

/**
 * @public
 * @enum
 */
export const SupportedAwsIntegration = {
  KmsTde: "KmsTde",
} as const;
/**
 * @public
 */
export type SupportedAwsIntegration = (typeof SupportedAwsIntegration)[keyof typeof SupportedAwsIntegration];

/**
 * @public
 * @enum
 */
export const AutonomousMaintenanceScheduleType = {
  EARLY: "EARLY",
  REGULAR: "REGULAR",
} as const;
/**
 * @public
 */
export type AutonomousMaintenanceScheduleType =
  (typeof AutonomousMaintenanceScheduleType)[keyof typeof AutonomousMaintenanceScheduleType];

/**
 * @public
 * @enum
 */
export const ComputeModel = {
  ECPU: "ECPU",
  OCPU: "OCPU",
} as const;
/**
 * @public
 */
export type ComputeModel = (typeof ComputeModel)[keyof typeof ComputeModel];

/**
 * @public
 * @enum
 */
export const DatabaseEdition = {
  ENTERPRISE_EDITION: "ENTERPRISE_EDITION",
  STANDARD_EDITION: "STANDARD_EDITION",
} as const;
/**
 * @public
 */
export type DatabaseEdition = (typeof DatabaseEdition)[keyof typeof DatabaseEdition];

/**
 * @public
 * @enum
 */
export const DatabaseManagementStatus = {
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  FAILED_DISABLING: "FAILED_DISABLING",
  FAILED_ENABLING: "FAILED_ENABLING",
  NOT_ENABLED: "NOT_ENABLED",
} as const;
/**
 * @public
 */
export type DatabaseManagementStatus = (typeof DatabaseManagementStatus)[keyof typeof DatabaseManagementStatus];

/**
 * @public
 * @enum
 */
export const DatabaseType = {
  CLONE: "CLONE",
  REGULAR: "REGULAR",
} as const;
/**
 * @public
 */
export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType];

/**
 * @public
 * @enum
 */
export const DataSafeStatus = {
  DEREGISTERING: "DEREGISTERING",
  FAILED: "FAILED",
  NOT_REGISTERED: "NOT_REGISTERED",
  REGISTERED: "REGISTERED",
  REGISTERING: "REGISTERING",
} as const;
/**
 * @public
 */
export type DataSafeStatus = (typeof DataSafeStatus)[keyof typeof DataSafeStatus];

/**
 * @public
 * @enum
 */
export const DbWorkload = {
  AJD: "AJD",
  APEX: "APEX",
  LH: "LH",
  OLTP: "OLTP",
} as const;
/**
 * @public
 */
export type DbWorkload = (typeof DbWorkload)[keyof typeof DbWorkload];

/**
 * @public
 * @enum
 */
export const EncryptionKeyProvider = {
  AWS_KMS: "AWS_KMS",
  OCI: "OCI",
  OKV: "OKV",
  ORACLE_MANAGED: "ORACLE_MANAGED",
} as const;
/**
 * @public
 */
export type EncryptionKeyProvider = (typeof EncryptionKeyProvider)[keyof typeof EncryptionKeyProvider];

/**
 * @public
 * @enum
 */
export const LicenseModel = {
  BRING_YOUR_OWN_LICENSE: "BRING_YOUR_OWN_LICENSE",
  LICENSE_INCLUDED: "LICENSE_INCLUDED",
} as const;
/**
 * @public
 */
export type LicenseModel = (typeof LicenseModel)[keyof typeof LicenseModel];

/**
 * @public
 * @enum
 */
export const DisasterRecoveryType = {
  ADG: "ADG",
  BACKUP_BASED: "BACKUP_BASED",
} as const;
/**
 * @public
 */
export type DisasterRecoveryType = (typeof DisasterRecoveryType)[keyof typeof DisasterRecoveryType];

/**
 * @public
 * @enum
 */
export const AutonomousDatabaseResourceStatus = {
  AVAILABLE: "AVAILABLE",
  AVAILABLE_NEEDS_ATTENTION: "AVAILABLE_NEEDS_ATTENTION",
  BACKUP_IN_PROGRESS: "BACKUP_IN_PROGRESS",
  FAILED: "FAILED",
  INACCESSIBLE: "INACCESSIBLE",
  MAINTENANCE_IN_PROGRESS: "MAINTENANCE_IN_PROGRESS",
  PROVISIONING: "PROVISIONING",
  RECREATING: "RECREATING",
  RESTARTING: "RESTARTING",
  RESTORE_FAILED: "RESTORE_FAILED",
  RESTORE_IN_PROGRESS: "RESTORE_IN_PROGRESS",
  ROLE_CHANGE_IN_PROGRESS: "ROLE_CHANGE_IN_PROGRESS",
  SCALE_IN_PROGRESS: "SCALE_IN_PROGRESS",
  STANDBY: "STANDBY",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UNAVAILABLE: "UNAVAILABLE",
  UPDATING: "UPDATING",
  UPGRADING: "UPGRADING",
} as const;
/**
 * @public
 */
export type AutonomousDatabaseResourceStatus =
  (typeof AutonomousDatabaseResourceStatus)[keyof typeof AutonomousDatabaseResourceStatus];

/**
 * @public
 * @enum
 */
export const RepeatCadence = {
  MONTHLY: "MONTHLY",
  ONE_TIME: "ONE_TIME",
  WEEKLY: "WEEKLY",
  YEARLY: "YEARLY",
} as const;
/**
 * @public
 */
export type RepeatCadence = (typeof RepeatCadence)[keyof typeof RepeatCadence];

/**
 * @public
 * @enum
 */
export const NetServicesArchitecture = {
  DEDICATED: "DEDICATED",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type NetServicesArchitecture = (typeof NetServicesArchitecture)[keyof typeof NetServicesArchitecture];

/**
 * @public
 * @enum
 */
export const OpenMode = {
  READ_ONLY: "READ_ONLY",
  READ_WRITE: "READ_WRITE",
} as const;
/**
 * @public
 */
export type OpenMode = (typeof OpenMode)[keyof typeof OpenMode];

/**
 * @public
 * @enum
 */
export const OperationsInsightsStatus = {
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  FAILED_DISABLING: "FAILED_DISABLING",
  FAILED_ENABLING: "FAILED_ENABLING",
  NOT_ENABLED: "NOT_ENABLED",
} as const;
/**
 * @public
 */
export type OperationsInsightsStatus = (typeof OperationsInsightsStatus)[keyof typeof OperationsInsightsStatus];

/**
 * @public
 * @enum
 */
export const PermissionLevel = {
  RESTRICTED: "RESTRICTED",
  UNRESTRICTED: "UNRESTRICTED",
} as const;
/**
 * @public
 */
export type PermissionLevel = (typeof PermissionLevel)[keyof typeof PermissionLevel];

/**
 * @public
 * @enum
 */
export const RefreshableMode = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type RefreshableMode = (typeof RefreshableMode)[keyof typeof RefreshableMode];

/**
 * @public
 * @enum
 */
export const RefreshableStatus = {
  NOT_REFRESHING: "NOT_REFRESHING",
  REFRESHING: "REFRESHING",
} as const;
/**
 * @public
 */
export type RefreshableStatus = (typeof RefreshableStatus)[keyof typeof RefreshableStatus];

/**
 * @public
 * @enum
 */
export const DataGuardRole = {
  BACKUP_COPY: "BACKUP_COPY",
  DISABLED_STANDBY: "DISABLED_STANDBY",
  PRIMARY: "PRIMARY",
  SNAPSHOT_STANDBY: "SNAPSHOT_STANDBY",
  STANDBY: "STANDBY",
} as const;
/**
 * @public
 */
export type DataGuardRole = (typeof DataGuardRole)[keyof typeof DataGuardRole];

/**
 * @public
 * @enum
 */
export const DayOfWeekName = {
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
export type DayOfWeekName = (typeof DayOfWeekName)[keyof typeof DayOfWeekName];

/**
 * @public
 * @enum
 */
export const StandbyAllowlistedIpsSource = {
  NOT_APPLICABLE: "NOT_APPLICABLE",
  PRIMARY: "PRIMARY",
  SEPARATE: "SEPARATE",
} as const;
/**
 * @public
 */
export type StandbyAllowlistedIpsSource =
  (typeof StandbyAllowlistedIpsSource)[keyof typeof StandbyAllowlistedIpsSource];

/**
 * @public
 * @enum
 */
export const AutonomousDatabaseBackupStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AutonomousDatabaseBackupStatus =
  (typeof AutonomousDatabaseBackupStatus)[keyof typeof AutonomousDatabaseBackupStatus];

/**
 * @public
 * @enum
 */
export const AutonomousDatabaseBackupType = {
  CUMULATIVE_INCREMENTAL: "CUMULATIVE_INCREMENTAL",
  FULL: "FULL",
  INCREMENTAL: "INCREMENTAL",
  LONGTERM: "LONGTERM",
  ROLL_FORWARD_IMAGE_COPY: "ROLL_FORWARD_IMAGE_COPY",
  VIRTUAL_FULL: "VIRTUAL_FULL",
} as const;
/**
 * @public
 */
export type AutonomousDatabaseBackupType =
  (typeof AutonomousDatabaseBackupType)[keyof typeof AutonomousDatabaseBackupType];

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  AVAILABLE: "AVAILABLE",
  FAILED: "FAILED",
  MAINTENANCE_IN_PROGRESS: "MAINTENANCE_IN_PROGRESS",
  PROVISIONING: "PROVISIONING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * @public
 * @enum
 */
export const EncryptionKeyProviderInput = {
  AWS_KMS: "AWS_KMS",
  ORACLE_MANAGED: "ORACLE_MANAGED",
} as const;
/**
 * @public
 */
export type EncryptionKeyProviderInput = (typeof EncryptionKeyProviderInput)[keyof typeof EncryptionKeyProviderInput];

/**
 * @public
 * @enum
 */
export const SourceType = {
  BACKUP_FROM_ID: "BACKUP_FROM_ID",
  BACKUP_FROM_TIMESTAMP: "BACKUP_FROM_TIMESTAMP",
  CLONE_TO_REFRESHABLE: "CLONE_TO_REFRESHABLE",
  CROSS_REGION_DATAGUARD: "CROSS_REGION_DATAGUARD",
  CROSS_REGION_DISASTER_RECOVERY: "CROSS_REGION_DISASTER_RECOVERY",
  DATABASE: "DATABASE",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const CloneType = {
  FULL: "FULL",
  METADATA: "METADATA",
  PARTIAL: "PARTIAL",
} as const;
/**
 * @public
 */
export type CloneType = (typeof CloneType)[keyof typeof CloneType];

/**
 * @public
 * @enum
 */
export const WalletPasswordSource = {
  API_REQUEST_PARAMETER: "API_REQUEST_PARAMETER",
  CUSTOMER_MANAGED_AWS_SECRET: "CUSTOMER_MANAGED_AWS_SECRET",
} as const;
/**
 * @public
 */
export type WalletPasswordSource = (typeof WalletPasswordSource)[keyof typeof WalletPasswordSource];

/**
 * @public
 * @enum
 */
export const WalletType = {
  INSTANCE: "INSTANCE",
  REGIONAL: "REGIONAL",
} as const;
/**
 * @public
 */
export type WalletType = (typeof WalletType)[keyof typeof WalletType];

/**
 * @public
 * @enum
 */
export const AutonomousDatabaseWalletStatus = {
  ACTIVE: "ACTIVE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AutonomousDatabaseWalletStatus =
  (typeof AutonomousDatabaseWalletStatus)[keyof typeof AutonomousDatabaseWalletStatus];

/**
 * @public
 * @enum
 */
export const CharacterSetType = {
  DATABASE: "DATABASE",
  NATIONAL: "NATIONAL",
} as const;
/**
 * @public
 */
export type CharacterSetType = (typeof CharacterSetType)[keyof typeof CharacterSetType];

/**
 * @public
 * @enum
 */
export const IamRoleStatus = {
  ASSOCIATING: "ASSOCIATING",
  CONNECTED: "CONNECTED",
  DISASSOCIATING: "DISASSOCIATING",
  DISCONNECTED: "DISCONNECTED",
  FAILED: "FAILED",
  PARTIALLY_CONNECTED: "PARTIALLY_CONNECTED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type IamRoleStatus = (typeof IamRoleStatus)[keyof typeof IamRoleStatus];

/**
 * @public
 * @enum
 */
export const MonthName = {
  APRIL: "APRIL",
  AUGUST: "AUGUST",
  DECEMBER: "DECEMBER",
  FEBRUARY: "FEBRUARY",
  JANUARY: "JANUARY",
  JULY: "JULY",
  JUNE: "JUNE",
  MARCH: "MARCH",
  MAY: "MAY",
  NOVEMBER: "NOVEMBER",
  OCTOBER: "OCTOBER",
  SEPTEMBER: "SEPTEMBER",
} as const;
/**
 * @public
 */
export type MonthName = (typeof MonthName)[keyof typeof MonthName];

/**
 * @public
 * @enum
 */
export const PatchingModeType = {
  NONROLLING: "NONROLLING",
  ROLLING: "ROLLING",
} as const;
/**
 * @public
 */
export type PatchingModeType = (typeof PatchingModeType)[keyof typeof PatchingModeType];

/**
 * @public
 * @enum
 */
export const PreferenceType = {
  CUSTOM_PREFERENCE: "CUSTOM_PREFERENCE",
  NO_PREFERENCE: "NO_PREFERENCE",
} as const;
/**
 * @public
 */
export type PreferenceType = (typeof PreferenceType)[keyof typeof PreferenceType];

/**
 * @public
 * @enum
 */
export const DbServerPatchingStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  MAINTENANCE_IN_PROGRESS: "MAINTENANCE_IN_PROGRESS",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type DbServerPatchingStatus = (typeof DbServerPatchingStatus)[keyof typeof DbServerPatchingStatus];

/**
 * @public
 * @enum
 */
export const DiskRedundancy = {
  HIGH: "HIGH",
  NORMAL: "NORMAL",
} as const;
/**
 * @public
 */
export type DiskRedundancy = (typeof DiskRedundancy)[keyof typeof DiskRedundancy];

/**
 * @public
 * @enum
 */
export const IormLifecycleState = {
  BOOTSTRAPPING: "BOOTSTRAPPING",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type IormLifecycleState = (typeof IormLifecycleState)[keyof typeof IormLifecycleState];

/**
 * @public
 * @enum
 */
export const Objective = {
  AUTO: "AUTO",
  BALANCED: "BALANCED",
  BASIC: "BASIC",
  HIGH_THROUGHPUT: "HIGH_THROUGHPUT",
  LOW_LATENCY: "LOW_LATENCY",
} as const;
/**
 * @public
 */
export type Objective = (typeof Objective)[keyof typeof Objective];

/**
 * @public
 * @enum
 */
export const ManagedResourceStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;
/**
 * @public
 */
export type ManagedResourceStatus = (typeof ManagedResourceStatus)[keyof typeof ManagedResourceStatus];

/**
 * @public
 * @enum
 */
export const DbNodeMaintenanceType = {
  VMDB_REBOOT_MIGRATION: "VMDB_REBOOT_MIGRATION",
} as const;
/**
 * @public
 */
export type DbNodeMaintenanceType = (typeof DbNodeMaintenanceType)[keyof typeof DbNodeMaintenanceType];

/**
 * @public
 * @enum
 */
export const DbNodeResourceStatus = {
  AVAILABLE: "AVAILABLE",
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DbNodeResourceStatus = (typeof DbNodeResourceStatus)[keyof typeof DbNodeResourceStatus];

/**
 * @public
 * @enum
 */
export const ShapeType = {
  AMD: "AMD",
  AMPERE_FLEX_A1: "AMPERE_FLEX_A1",
  INTEL: "INTEL",
  INTEL_FLEX_X9: "INTEL_FLEX_X9",
} as const;
/**
 * @public
 */
export type ShapeType = (typeof ShapeType)[keyof typeof ShapeType];

/**
 * @public
 * @enum
 */
export const OciAwsIntegration = {
  KmsTde: "KmsTde",
  SecretsManager: "SecretsManager",
} as const;
/**
 * @public
 */
export type OciAwsIntegration = (typeof OciAwsIntegration)[keyof typeof OciAwsIntegration];

/**
 * @public
 * @enum
 */
export const OciIamRoleStatus = {
  AVAILABLE: "AVAILABLE",
  PROVISIONING: "PROVISIONING",
  PROVISION_FAILED: "PROVISION_FAILED",
  TERMINATE_FAILED: "TERMINATE_FAILED",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type OciIamRoleStatus = (typeof OciIamRoleStatus)[keyof typeof OciIamRoleStatus];

/**
 * @public
 * @enum
 */
export const OciOnboardingStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ACTIVE_IN_HOME_REGION: "ACTIVE_IN_HOME_REGION",
  ACTIVE_LIMITED: "ACTIVE_LIMITED",
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED",
  PENDING_CUSTOMER_ACTION: "PENDING_CUSTOMER_ACTION",
  PENDING_INITIALIZATION: "PENDING_INITIALIZATION",
  PENDING_LINK_GENERATION: "PENDING_LINK_GENERATION",
  PUBLIC_OFFER_UNSUPPORTED: "PUBLIC_OFFER_UNSUPPORTED",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type OciOnboardingStatus = (typeof OciOnboardingStatus)[keyof typeof OciOnboardingStatus];

/**
 * @public
 * @enum
 */
export const VpcEndpointType = {
  SERVICENETWORK: "SERVICENETWORK",
} as const;
/**
 * @public
 */
export type VpcEndpointType = (typeof VpcEndpointType)[keyof typeof VpcEndpointType];
