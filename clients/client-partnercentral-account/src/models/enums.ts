// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ConnectionType = {
  OPPORTUNITY_COLLABORATION: "OPPORTUNITY_COLLABORATION",
  SUBSIDIARY: "SUBSIDIARY",
} as const;
/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const ConnectionTypeStatus = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
} as const;
/**
 * @public
 */
export type ConnectionTypeStatus = (typeof ConnectionTypeStatus)[keyof typeof ConnectionTypeStatus];

/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INCOMPATIBLE_BENEFIT_AWS_PARTNER_STATE: "INCOMPATIBLE_BENEFIT_AWS_PARTNER_STATE",
} as const;
/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  CONFLICT_CLIENT_TOKEN: "CONFLICT_CLIENT_TOKEN",
  DUPLICATE_CONNECTION: "DUPLICATE_CONNECTION",
  DUPLICATE_CONNECTION_INVITATION: "DUPLICATE_CONNECTION_INVITATION",
  DUPLICATE_PARTNER: "DUPLICATE_PARTNER",
  INCOMPATIBLE_CONNECTION_INVITATION_RECEIVER: "INCOMPATIBLE_CONNECTION_INVITATION_RECEIVER",
  INCOMPATIBLE_CONNECTION_INVITATION_STATE: "INCOMPATIBLE_CONNECTION_INVITATION_STATE",
  INCOMPATIBLE_CONNECTION_PREFERENCES_REVISION: "INCOMPATIBLE_CONNECTION_PREFERENCES_REVISION",
  INCOMPATIBLE_CONNECTION_STATE: "INCOMPATIBLE_CONNECTION_STATE",
  INCOMPATIBLE_PARTNER_PROFILE_TASK_STATE: "INCOMPATIBLE_PARTNER_PROFILE_TASK_STATE",
  INCOMPATIBLE_PROFILE_STATE: "INCOMPATIBLE_PROFILE_STATE",
} as const;
/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * @enum
 */
export const ResourceNotFoundExceptionReason = {
  CONNECTION_INVITATION_NOT_FOUND: "CONNECTION_INVITATION_NOT_FOUND",
  CONNECTION_NOT_FOUND: "CONNECTION_NOT_FOUND",
  PARTNER_DOMAIN_NOT_FOUND: "PARTNER_DOMAIN_NOT_FOUND",
  PARTNER_NOT_FOUND: "PARTNER_NOT_FOUND",
  PARTNER_PROFILE_NOT_FOUND: "PARTNER_PROFILE_NOT_FOUND",
  PARTNER_PROFILE_TASK_NOT_FOUND: "PARTNER_PROFILE_TASK_NOT_FOUND",
  RECEIVER_PROFILE_NOT_FOUND: "RECEIVER_PROFILE_NOT_FOUND",
  SENDER_PROFILE_NOT_FOUND: "SENDER_PROFILE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type ResourceNotFoundExceptionReason =
  (typeof ResourceNotFoundExceptionReason)[keyof typeof ResourceNotFoundExceptionReason];

/**
 * @public
 * @enum
 */
export const BusinessValidationCode = {
  INCOMPATIBLE_CONNECTION_INVITATION_REQUEST: "INCOMPATIBLE_CONNECTION_INVITATION_REQUEST",
  INCOMPATIBLE_DOMAIN: "INCOMPATIBLE_DOMAIN",
  INCOMPATIBLE_IDENTITY_VERIFICATION_STATUS: "INCOMPATIBLE_IDENTITY_VERIFICATION_STATUS",
  INCOMPATIBLE_KNOW_YOUR_BUSINESS_STATUS: "INCOMPATIBLE_KNOW_YOUR_BUSINESS_STATUS",
  INCOMPATIBLE_LEGAL_NAME: "INCOMPATIBLE_LEGAL_NAME",
  INVALID_ACCOUNT_LINKING_STATUS: "INVALID_ACCOUNT_LINKING_STATUS",
  INVALID_ACCOUNT_STATE: "INVALID_ACCOUNT_STATE",
} as const;
/**
 * @public
 */
export type BusinessValidationCode = (typeof BusinessValidationCode)[keyof typeof BusinessValidationCode];

/**
 * @public
 * @enum
 */
export const FieldValidationCode = {
  ACTION_NOT_PERMITTED: "ACTION_NOT_PERMITTED",
  DUPLICATE_VALUE: "DUPLICATE_VALUE",
  INVALID_ENUM_VALUE: "INVALID_ENUM_VALUE",
  INVALID_STRING_FORMAT: "INVALID_STRING_FORMAT",
  INVALID_VALUE: "INVALID_VALUE",
  REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING",
  TOO_MANY_VALUES: "TOO_MANY_VALUES",
} as const;
/**
 * @public
 */
export type FieldValidationCode = (typeof FieldValidationCode)[keyof typeof FieldValidationCode];

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
export const AccessType = {
  ALLOW_ALL: "ALLOW_ALL",
  ALLOW_BY_DEFAULT_DENY_SOME: "ALLOW_BY_DEFAULT_DENY_SOME",
  DENY_ALL: "DENY_ALL",
} as const;
/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * @enum
 */
export const ServiceQuotaExceededExceptionReason = {
  LIMIT_EXCEEDED_NUMBER_OF_DOMAIN: "LIMIT_EXCEEDED_NUMBER_OF_DOMAIN",
  LIMIT_EXCEEDED_NUMBER_OF_EMAIL: "LIMIT_EXCEEDED_NUMBER_OF_EMAIL",
} as const;
/**
 * @public
 */
export type ServiceQuotaExceededExceptionReason =
  (typeof ServiceQuotaExceededExceptionReason)[keyof typeof ServiceQuotaExceededExceptionReason];

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
export const InvitationStatus = {
  ACCEPTED: "ACCEPTED",
  CANCELED: "CANCELED",
  EXPIRED: "EXPIRED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus];

/**
 * @public
 * @enum
 */
export const ProfileValidationErrorReason = {
  DUPLICATE_PROFILE: "DUPLICATE_PROFILE",
  INVALID_CONTENT: "INVALID_CONTENT",
  INVALID_LOGO: "INVALID_LOGO",
  INVALID_LOGO_FILE: "INVALID_LOGO_FILE",
  INVALID_LOGO_SIZE: "INVALID_LOGO_SIZE",
  INVALID_LOGO_URL: "INVALID_LOGO_URL",
  INVALID_WEBSITE_URL: "INVALID_WEBSITE_URL",
} as const;
/**
 * @public
 */
export type ProfileValidationErrorReason =
  (typeof ProfileValidationErrorReason)[keyof typeof ProfileValidationErrorReason];

/**
 * @public
 * @enum
 */
export const ProfileTaskStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ProfileTaskStatus = (typeof ProfileTaskStatus)[keyof typeof ProfileTaskStatus];

/**
 * @public
 * @enum
 */
export const IndustrySegment = {
  AGRICULTURE_MINING: "AGRICULTURE_MINING",
  BIOTECHNOLOGY: "BIOTECHNOLOGY",
  BUSINESS_CONSUMER_SERVICES: "BUSINESS_CONSUMER_SERVICES",
  BUSINESS_SERV: "BUSINESS_SERV",
  COMMUNICATIONS: "COMMUNICATIONS",
  COMPUTERS_ELECTRONICS: "COMPUTERS_ELECTRONICS",
  COMPUTER_HARDWARE: "COMPUTER_HARDWARE",
  COMPUTER_SOFTWARE: "COMPUTER_SOFTWARE",
  CONSUMER_GOODS: "CONSUMER_GOODS",
  CONSUMER_RELATED: "CONSUMER_RELATED",
  EDUCATION: "EDUCATION",
  ENERGY_UTILITIES: "ENERGY_UTILITIES",
  FINANCIAL_SERVICES: "FINANCIAL_SERVICES",
  GAMING: "GAMING",
  GOVERNMENT: "GOVERNMENT",
  GOVERNMENT_EDUCATION_PUBLIC_SERVICES: "GOVERNMENT_EDUCATION_PUBLIC_SERVICES",
  HEALTHCARE: "HEALTHCARE",
  HEALTHCARE_PHARMACEUTICALS_BIOTECH: "HEALTHCARE_PHARMACEUTICALS_BIOTECH",
  INDUSTRIAL_ENERGY: "INDUSTRIAL_ENERGY",
  INTERNET_SPECIFIC: "INTERNET_SPECIFIC",
  LIFE_SCIENCES: "LIFE_SCIENCES",
  MANUFACTURING: "MANUFACTURING",
  MEDIA_ENTERTAINMENT: "MEDIA_ENTERTAINMENT",
  MEDIA_ENTERTAINMENT_LEISURE: "MEDIA_ENTERTAINMENT_LEISURE",
  MEDICAL_HEALTH: "MEDICAL_HEALTH",
  NON_PROFIT_ORGANIZATION: "NON_PROFIT_ORGANIZATION",
  OTHER: "OTHER",
  PROFESSIONAL_SERVICES: "PROFESSIONAL_SERVICES",
  REAL_ESTATE_CONSTRUCTION: "REAL_ESTATE_CONSTRUCTION",
  RETAIL: "RETAIL",
  RETAIL_WHOLESALE_DISTRIBUTION: "RETAIL_WHOLESALE_DISTRIBUTION",
  SEMICONDUCTOR_ELECTR: "SEMICONDUCTOR_ELECTR",
  SOFTWARE_INTERNET: "SOFTWARE_INTERNET",
  TELECOMMUNICATIONS: "TELECOMMUNICATIONS",
  TRANSPORTATION_LOGISTICS: "TRANSPORTATION_LOGISTICS",
  TRAVEL_HOSPITALITY: "TRAVEL_HOSPITALITY",
  WHOLESALE_DISTRIBUTION: "WHOLESALE_DISTRIBUTION",
} as const;
/**
 * @public
 */
export type IndustrySegment = (typeof IndustrySegment)[keyof typeof IndustrySegment];

/**
 * @public
 * @enum
 */
export const PrimarySolutionType = {
  COMMUNICATION_SERVICES: "COMMUNICATION_SERVICES",
  CONSULTING_SERVICES: "CONSULTING_SERVICES",
  HARDWARE_PRODUCTS: "HARDWARE_PRODUCTS",
  MANAGED_SERVICES: "MANAGED_SERVICES",
  PROFESSIONAL_SERVICES: "PROFESSIONAL_SERVICES",
  SOFTWARE_PRODUCTS: "SOFTWARE_PRODUCTS",
  TRAINING_SERVICES: "TRAINING_SERVICES",
  VALUE_ADDED_RESALE_AWS_SERVICES: "VALUE_ADDED_RESALE_AWS_SERVICES",
} as const;
/**
 * @public
 */
export type PrimarySolutionType = (typeof PrimarySolutionType)[keyof typeof PrimarySolutionType];

/**
 * @public
 * @enum
 */
export const ProfileVisibility = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type ProfileVisibility = (typeof ProfileVisibility)[keyof typeof ProfileVisibility];
