// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const HandshakeStatus = {
  ACCEPTED: "ACCEPTED",
  CANCELED: "CANCELED",
  EXPIRED: "EXPIRED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type HandshakeStatus = (typeof HandshakeStatus)[keyof typeof HandshakeStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  BUSINESS_VALIDATION_FAILED: "BUSINESS_VALIDATION_FAILED",
  REQUEST_VALIDATION_FAILED: "REQUEST_VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const AccountScope = {
  ENTIRE_ORGANIZATION: "ENTIRE_ORGANIZATION",
  SPECIFIC_MEMBER_ACCOUNTS: "SPECIFIC_MEMBER_ACCOUNTS",
} as const;
/**
 * @public
 */
export type AccountScope = (typeof AccountScope)[keyof typeof AccountScope];

/**
 * @public
 * @enum
 */
export const AssociationType = {
  DOWNSTREAM_SELLER: "DOWNSTREAM_SELLER",
  END_CUSTOMER: "END_CUSTOMER",
  INTERNAL: "INTERNAL",
  MANAGED_SERVICES_END_CUSTOMER: "MANAGED_SERVICES_END_CUSTOMER",
} as const;
/**
 * @public
 */
export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];

/**
 * @public
 * @enum
 */
export const ChannelContractStatus = {
  ACCEPTED: "ACCEPTED",
  CANCELED: "CANCELED",
  EXPIRED: "EXPIRED",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ChannelContractStatus = (typeof ChannelContractStatus)[keyof typeof ChannelContractStatus];

/**
 * @public
 * @enum
 */
export const ChannelContractType = {
  MANAGED_SERVICES_ATTESTATION: "MANAGED_SERVICES_ATTESTATION",
} as const;
/**
 * @public
 */
export type ChannelContractType = (typeof ChannelContractType)[keyof typeof ChannelContractType];

/**
 * @public
 * @enum
 */
export const ManagedServicesSupportedService = {
  ARTIFICIAL_INTELLIGENCE_AND_MACHINE_LEARNING_OPERATIONS: "ARTIFICIAL_INTELLIGENCE_AND_MACHINE_LEARNING_OPERATIONS",
  BACKUP_AND_DISASTER_RECOVERY: "BACKUP_AND_DISASTER_RECOVERY",
  FINANCIAL_OPERATIONS: "FINANCIAL_OPERATIONS",
  INFRASTRUCTURE_AS_CODE_AND_AUTOMATION: "INFRASTRUCTURE_AS_CODE_AND_AUTOMATION",
  MONITORING: "MONITORING",
  PATCHING: "PATCHING",
  SECURITY: "SECURITY",
  WELL_ARCHITECTED: "WELL_ARCHITECTED",
} as const;
/**
 * @public
 */
export type ManagedServicesSupportedService =
  (typeof ManagedServicesSupportedService)[keyof typeof ManagedServicesSupportedService];

/**
 * @public
 * @enum
 */
export const ManagedServicesAttestationTypeSortName = {
  UPDATED_AT: "UpdatedAt",
} as const;
/**
 * @public
 */
export type ManagedServicesAttestationTypeSortName =
  (typeof ManagedServicesAttestationTypeSortName)[keyof typeof ManagedServicesAttestationTypeSortName];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const ServicePeriodType = {
  FIXED_COMMITMENT_PERIOD: "FIXED_COMMITMENT_PERIOD",
  MINIMUM_NOTICE_PERIOD: "MINIMUM_NOTICE_PERIOD",
} as const;
/**
 * @public
 */
export type ServicePeriodType = (typeof ServicePeriodType)[keyof typeof ServicePeriodType];

/**
 * @public
 * @enum
 */
export const HandshakeType = {
  PROGRAM_MANAGEMENT_ACCOUNT: "PROGRAM_MANAGEMENT_ACCOUNT",
  REVOKE_SERVICE_PERIOD: "REVOKE_SERVICE_PERIOD",
  START_SERVICE_PERIOD: "START_SERVICE_PERIOD",
} as const;
/**
 * @public
 */
export type HandshakeType = (typeof HandshakeType)[keyof typeof HandshakeType];

/**
 * @public
 * @enum
 */
export const Program = {
  DISTRIBUTION: "DISTRIBUTION",
  DISTRIBUTION_SELLER: "DISTRIBUTION_SELLER",
  MANAGED_SERVICES_PROVIDER: "MANAGED_SERVICES_PROVIDER",
  SOLUTION_PROVIDER: "SOLUTION_PROVIDER",
} as const;
/**
 * @public
 */
export type Program = (typeof Program)[keyof typeof Program];

/**
 * @public
 * @enum
 */
export const ProgramManagementAccountTypeSortName = {
  UPDATED_AT: "UpdatedAt",
} as const;
/**
 * @public
 */
export type ProgramManagementAccountTypeSortName =
  (typeof ProgramManagementAccountTypeSortName)[keyof typeof ProgramManagementAccountTypeSortName];

/**
 * @public
 * @enum
 */
export const RevokeServicePeriodTypeSortName = {
  UPDATED_AT: "UpdatedAt",
} as const;
/**
 * @public
 */
export type RevokeServicePeriodTypeSortName =
  (typeof RevokeServicePeriodTypeSortName)[keyof typeof RevokeServicePeriodTypeSortName];

/**
 * @public
 * @enum
 */
export const StartServicePeriodTypeSortName = {
  UPDATED_AT: "UpdatedAt",
} as const;
/**
 * @public
 */
export type StartServicePeriodTypeSortName =
  (typeof StartServicePeriodTypeSortName)[keyof typeof StartServicePeriodTypeSortName];

/**
 * @public
 * @enum
 */
export const ParticipantType = {
  RECEIVER: "RECEIVER",
  SENDER: "SENDER",
} as const;
/**
 * @public
 */
export type ParticipantType = (typeof ParticipantType)[keyof typeof ParticipantType];

/**
 * @public
 * @enum
 */
export const Coverage = {
  ENTIRE_ORGANIZATION: "ENTIRE_ORGANIZATION",
  MANAGEMENT_ACCOUNT_ONLY: "MANAGEMENT_ACCOUNT_ONLY",
} as const;
/**
 * @public
 */
export type Coverage = (typeof Coverage)[keyof typeof Coverage];

/**
 * @public
 * @enum
 */
export const ProgramManagementAccountType = {
  MANAGED_SERVICES: "MANAGED_SERVICES",
  RESALE_BILLING_TRANSFER: "RESALE_BILLING_TRANSFER",
} as const;
/**
 * @public
 */
export type ProgramManagementAccountType =
  (typeof ProgramManagementAccountType)[keyof typeof ProgramManagementAccountType];

/**
 * @public
 * @enum
 */
export const Provider = {
  DISTRIBUTION_SELLER: "DISTRIBUTION_SELLER",
  DISTRIBUTOR: "DISTRIBUTOR",
} as const;
/**
 * @public
 */
export type Provider = (typeof Provider)[keyof typeof Provider];

/**
 * @public
 * @enum
 */
export const ResaleAccountModel = {
  DISTRIBUTOR: "DISTRIBUTOR",
  END_CUSTOMER: "END_CUSTOMER",
  SOLUTION_PROVIDER: "SOLUTION_PROVIDER",
} as const;
/**
 * @public
 */
export type ResaleAccountModel = (typeof ResaleAccountModel)[keyof typeof ResaleAccountModel];

/**
 * @public
 * @enum
 */
export const Sector = {
  COMMERCIAL: "COMMERCIAL",
  GOVERNMENT: "GOVERNMENT",
  GOVERNMENT_EXCEPTION: "GOVERNMENT_EXCEPTION",
} as const;
/**
 * @public
 */
export type Sector = (typeof Sector)[keyof typeof Sector];

/**
 * @public
 * @enum
 */
export const ListProgramManagementAccountsSortName = {
  UPDATED_AT: "UpdatedAt",
} as const;
/**
 * @public
 */
export type ListProgramManagementAccountsSortName =
  (typeof ListProgramManagementAccountsSortName)[keyof typeof ListProgramManagementAccountsSortName];

/**
 * @public
 * @enum
 */
export const ProgramManagementAccountStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ProgramManagementAccountStatus =
  (typeof ProgramManagementAccountStatus)[keyof typeof ProgramManagementAccountStatus];

/**
 * @public
 * @enum
 */
export const ListRelationshipsSortName = {
  UPDATED_AT: "UpdatedAt",
} as const;
/**
 * @public
 */
export type ListRelationshipsSortName = (typeof ListRelationshipsSortName)[keyof typeof ListRelationshipsSortName];
