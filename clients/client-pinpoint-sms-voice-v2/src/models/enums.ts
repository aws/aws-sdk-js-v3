// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  ACCOUNT_DISABLED: "ACCOUNT_DISABLED",
  INSUFFICIENT_ACCOUNT_REPUTATION: "INSUFFICIENT_ACCOUNT_REPUTATION",
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
export const AccountAttributeName = {
  ACCOUNT_TIER: "ACCOUNT_TIER",
  DEFAULT_PROTECT_CONFIGURATION_ID: "DEFAULT_PROTECT_CONFIGURATION_ID",
} as const;
/**
 * @public
 */
export type AccountAttributeName = (typeof AccountAttributeName)[keyof typeof AccountAttributeName];

/**
 * @public
 * @enum
 */
export const AccountLimitName = {
  CONFIGURATION_SETS: "CONFIGURATION_SETS",
  OPT_OUT_LISTS: "OPT_OUT_LISTS",
  PHONE_NUMBERS: "PHONE_NUMBERS",
  POOLS: "POOLS",
  REGISTRATIONS: "REGISTRATIONS",
  REGISTRATION_ATTACHMENTS: "REGISTRATION_ATTACHMENTS",
  SENDER_IDS: "SENDER_IDS",
  VERIFIED_DESTINATION_NUMBERS: "VERIFIED_DESTINATION_NUMBERS",
} as const;
/**
 * @public
 */
export type AccountLimitName = (typeof AccountLimitName)[keyof typeof AccountLimitName];

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  CREATE_REGISTRATION_VERSION_NOT_ALLOWED: "CREATE_REGISTRATION_VERSION_NOT_ALLOWED",
  DELETION_PROTECTION_ENABLED: "DELETION_PROTECTION_ENABLED",
  DESTINATION_COUNTRY_BLOCKED_BY_PROTECT_CONFIGURATION: "DESTINATION_COUNTRY_BLOCKED_BY_PROTECT_CONFIGURATION",
  DESTINATION_PHONE_NUMBER_BLOCKED_BY_PROTECT_NUMBER_OVERRIDE:
    "DESTINATION_PHONE_NUMBER_BLOCKED_BY_PROTECT_NUMBER_OVERRIDE",
  DESTINATION_PHONE_NUMBER_NOT_VERIFIED: "DESTINATION_PHONE_NUMBER_NOT_VERIFIED",
  DESTINATION_PHONE_NUMBER_OPTED_OUT: "DESTINATION_PHONE_NUMBER_OPTED_OUT",
  DISASSOCIATE_REGISTRATION_NOT_ALLOWED: "DISASSOCIATE_REGISTRATION_NOT_ALLOWED",
  DISCARD_REGISTRATION_VERSION_NOT_ALLOWED: "DISCARD_REGISTRATION_VERSION_NOT_ALLOWED",
  EDIT_REGISTRATION_FIELD_VALUES_NOT_ALLOWED: "EDIT_REGISTRATION_FIELD_VALUES_NOT_ALLOWED",
  EVENT_DESTINATION_MISMATCH: "EVENT_DESTINATION_MISMATCH",
  KEYWORD_MISMATCH: "KEYWORD_MISMATCH",
  LAST_PHONE_NUMBER: "LAST_PHONE_NUMBER",
  MESSAGE_TYPE_MISMATCH: "MESSAGE_TYPE_MISMATCH",
  NO_ORIGINATION_IDENTITIES_FOUND: "NO_ORIGINATION_IDENTITIES_FOUND",
  NUMBER_CAPABILITIES_MISMATCH: "NUMBER_CAPABILITIES_MISMATCH",
  OPT_OUT_LIST_MISMATCH: "OPT_OUT_LIST_MISMATCH",
  PHONE_NUMBER_ASSOCIATED_TO_POOL: "PHONE_NUMBER_ASSOCIATED_TO_POOL",
  PHONE_NUMBER_ASSOCIATED_TO_REGISTRATION: "PHONE_NUMBER_ASSOCIATED_TO_REGISTRATION",
  PHONE_NUMBER_NOT_ASSOCIATED_TO_POOL: "PHONE_NUMBER_NOT_ASSOCIATED_TO_POOL",
  PHONE_NUMBER_NOT_IN_REGISTRATION_REGION: "PHONE_NUMBER_NOT_IN_REGISTRATION_REGION",
  PROTECT_CONFIGURATION_ASSOCIATED_WITH_CONFIGURATION_SET: "PROTECT_CONFIGURATION_ASSOCIATED_WITH_CONFIGURATION_SET",
  PROTECT_CONFIGURATION_IS_ACCOUNT_DEFAULT: "PROTECT_CONFIGURATION_IS_ACCOUNT_DEFAULT",
  PROTECT_CONFIGURATION_NOT_ASSOCIATED_WITH_CONFIGURATION_SET:
    "PROTECT_CONFIGURATION_NOT_ASSOCIATED_WITH_CONFIGURATION_SET",
  REGISTRATION_ALREADY_SUBMITTED: "REGISTRATION_ALREADY_SUBMITTED",
  REGISTRATION_NOT_COMPLETE: "REGISTRATION_NOT_COMPLETE",
  RESOURCE_ALREADY_EXISTS: "RESOURCE_ALREADY_EXISTS",
  RESOURCE_DELETION_NOT_ALLOWED: "RESOURCE_DELETION_NOT_ALLOWED",
  RESOURCE_MODIFICATION_NOT_ALLOWED: "RESOURCE_MODIFICATION_NOT_ALLOWED",
  RESOURCE_NOT_ACTIVE: "RESOURCE_NOT_ACTIVE",
  RESOURCE_NOT_EMPTY: "RESOURCE_NOT_EMPTY",
  SELF_MANAGED_OPT_OUTS_MISMATCH: "SELF_MANAGED_OPT_OUTS_MISMATCH",
  SENDER_ID_ASSOCIATED_TO_POOL: "SENDER_ID_ASSOCIATED_TO_POOL",
  SUBMIT_REGISTRATION_VERSION_NOT_ALLOWED: "SUBMIT_REGISTRATION_VERSION_NOT_ALLOWED",
  TWO_WAY_CONFIG_MISMATCH: "TWO_WAY_CONFIG_MISMATCH",
  VERIFICATION_ALREADY_COMPLETE: "VERIFICATION_ALREADY_COMPLETE",
  VERIFICATION_CODE_EXPIRED: "VERIFICATION_CODE_EXPIRED",
} as const;
/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ACCOUNT: "account",
  CONFIGURATION_SET: "configuration-set",
  EVENT_DESTINATION: "event-destination",
  KEYWORD: "keyword",
  MESSAGE: "message",
  MESSAGE_TEMPLATE: "message-template",
  OPTED_OUT_NUMBER: "opted-out-number",
  OPT_OUT_LIST: "opt-out-list",
  PHONE_NUMBER: "phone-number",
  POLICY: "policy",
  POOL: "pool",
  PROTECT_CONFIGURATION: "protect-configuration",
  REGISTRATION: "registration",
  REGISTRATION_ATTACHMENT: "registration-attachment",
  SENDER_ID: "sender-id",
  VERIFIED_DESTINATION_NUMBER: "verified-destination-number",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ServiceQuotaExceededExceptionReason = {
  ASSOCIATIONS_PER_REGISTRATION: "ASSOCIATIONS_PER_REGISTRATION",
  CONFIGURATION_SETS_PER_ACCOUNT: "CONFIGURATION_SETS_PER_ACCOUNT",
  DAILY_DESTINATION_CALL_LIMIT: "DAILY_DESTINATION_CALL_LIMIT",
  EVENT_DESTINATIONS_PER_CONFIGURATION_SET: "EVENT_DESTINATIONS_PER_CONFIGURATION_SET",
  KEYWORDS_PER_PHONE_NUMBER: "KEYWORDS_PER_PHONE_NUMBER",
  KEYWORDS_PER_POOL: "KEYWORDS_PER_POOL",
  MONTHLY_SPEND_LIMIT_REACHED_FOR_MEDIA: "MONTHLY_SPEND_LIMIT_REACHED_FOR_MEDIA",
  MONTHLY_SPEND_LIMIT_REACHED_FOR_TEXT: "MONTHLY_SPEND_LIMIT_REACHED_FOR_TEXT",
  MONTHLY_SPEND_LIMIT_REACHED_FOR_VOICE: "MONTHLY_SPEND_LIMIT_REACHED_FOR_VOICE",
  OPT_OUT_LISTS_PER_ACCOUNT: "OPT_OUT_LISTS_PER_ACCOUNT",
  ORIGINATION_IDENTITIES_PER_POOL: "ORIGINATION_IDENTITIES_PER_POOL",
  PHONE_NUMBERS_PER_ACCOUNT: "PHONE_NUMBERS_PER_ACCOUNT",
  PHONE_NUMBERS_PER_REGISTRATION: "PHONE_NUMBERS_PER_REGISTRATION",
  POOLS_PER_ACCOUNT: "POOLS_PER_ACCOUNT",
  PROTECT_CONFIGURATIONS_PER_ACCOUNT: "PROTECT_CONFIGURATIONS_PER_ACCOUNT",
  REGISTRATIONS_PER_ACCOUNT: "REGISTRATIONS_PER_ACCOUNT",
  REGISTRATION_ATTACHMENTS_CREATED_PER_DAY: "REGISTRATION_ATTACHMENTS_CREATED_PER_DAY",
  REGISTRATION_ATTACHMENTS_PER_ACCOUNT: "REGISTRATION_ATTACHMENTS_PER_ACCOUNT",
  REGISTRATION_VERSIONS_CREATED_PER_DAY: "REGISTRATION_VERSIONS_CREATED_PER_DAY",
  SENDER_IDS_PER_ACCOUNT: "SENDER_IDS_PER_ACCOUNT",
  TAGS_PER_RESOURCE: "TAGS_PER_RESOURCE",
  VERIFICATION_ATTEMPTS_PER_DAY: "VERIFICATION_ATTEMPTS_PER_DAY",
  VERIFIED_DESTINATION_NUMBERS_PER_ACCOUNT: "VERIFIED_DESTINATION_NUMBERS_PER_ACCOUNT",
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
export const ValidationExceptionReason = {
  ATTACHMENT_TYPE_NOT_SUPPORTED: "ATTACHMENT_TYPE_NOT_SUPPORTED",
  CANNOT_ADD_OPTED_OUT_NUMBER: "CANNOT_ADD_OPTED_OUT_NUMBER",
  CANNOT_PARSE: "CANNOT_PARSE",
  COUNTRY_CODE_MISMATCH: "COUNTRY_CODE_MISMATCH",
  DESTINATION_COUNTRY_BLOCKED: "DESTINATION_COUNTRY_BLOCKED",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  INTERNATIONAL_SENDING_NOT_SUPPORTED: "INTERNATIONAL_SENDING_NOT_SUPPORTED",
  INVALID_ARN: "INVALID_ARN",
  INVALID_FILTER_VALUES: "INVALID_FILTER_VALUES",
  INVALID_IDENTITY_FOR_DESTINATION_COUNTRY: "INVALID_IDENTITY_FOR_DESTINATION_COUNTRY",
  INVALID_NEXT_TOKEN: "INVALID_NEXT_TOKEN",
  INVALID_PARAMETER: "INVALID_PARAMETER",
  INVALID_REGISTRATION_ASSOCIATION: "INVALID_REGISTRATION_ASSOCIATION",
  INVALID_REQUEST: "INVALID_REQUEST",
  MAXIMUM_SIZE_EXCEEDED: "MAXIMUM_SIZE_EXCEEDED",
  MEDIA_TYPE_NOT_SUPPORTED: "MEDIA_TYPE_NOT_SUPPORTED",
  MISSING_PARAMETER: "MISSING_PARAMETER",
  OTHER: "OTHER",
  PARAMETERS_CANNOT_BE_USED_TOGETHER: "PARAMETERS_CANNOT_BE_USED_TOGETHER",
  PHONE_NUMBER_CANNOT_BE_OPTED_IN: "PHONE_NUMBER_CANNOT_BE_OPTED_IN",
  PHONE_NUMBER_CANNOT_BE_RELEASED: "PHONE_NUMBER_CANNOT_BE_RELEASED",
  PRICE_OVER_THRESHOLD: "PRICE_OVER_THRESHOLD",
  REGISTRATION_FIELD_CANNOT_BE_DELETED: "REGISTRATION_FIELD_CANNOT_BE_DELETED",
  REQUESTED_SPEND_LIMIT_HIGHER_THAN_SERVICE_LIMIT: "REQUESTED_SPEND_LIMIT_HIGHER_THAN_SERVICE_LIMIT",
  RESOURCE_NOT_ACCESSIBLE: "RESOURCE_NOT_ACCESSIBLE",
  SENDER_ID_NOT_REGISTERED: "SENDER_ID_NOT_REGISTERED",
  SENDER_ID_NOT_SUPPORTED: "SENDER_ID_NOT_SUPPORTED",
  SENDER_ID_REQUIRES_REGISTRATION: "SENDER_ID_REQUIRES_REGISTRATION",
  TWO_WAY_CHANNEL_NOT_PRESENT: "TWO_WAY_CHANNEL_NOT_PRESENT",
  TWO_WAY_NOT_ENABLED: "TWO_WAY_NOT_ENABLED",
  TWO_WAY_NOT_SUPPORTED_IN_COUNTRY: "TWO_WAY_NOT_SUPPORTED_IN_COUNTRY",
  TWO_WAY_NOT_SUPPORTED_IN_REGION: "TWO_WAY_NOT_SUPPORTED_IN_REGION",
  TWO_WAY_TOPIC_NOT_PRESENT: "TWO_WAY_TOPIC_NOT_PRESENT",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
  UNKNOWN_REGISTRATION_FIELD: "UNKNOWN_REGISTRATION_FIELD",
  UNKNOWN_REGISTRATION_SECTION: "UNKNOWN_REGISTRATION_SECTION",
  UNKNOWN_REGISTRATION_TYPE: "UNKNOWN_REGISTRATION_TYPE",
  UNKNOWN_REGISTRATION_VERSION: "UNKNOWN_REGISTRATION_VERSION",
  UNSPECIFIED_PARAMETER_NOT_SUPPORTED: "UNSPECIFIED_PARAMETER_NOT_SUPPORTED",
  VERIFICATION_CODE_MISMATCH: "VERIFICATION_CODE_MISMATCH",
  VOICE_CAPABILITY_NOT_AVAILABLE: "VOICE_CAPABILITY_NOT_AVAILABLE",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const AttachmentStatus = {
  DELETED: "DELETED",
  UPLOAD_COMPLETE: "UPLOAD_COMPLETE",
  UPLOAD_FAILED: "UPLOAD_FAILED",
  UPLOAD_IN_PROGRESS: "UPLOAD_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type AttachmentStatus = (typeof AttachmentStatus)[keyof typeof AttachmentStatus];

/**
 * @public
 * @enum
 */
export const AttachmentUploadErrorReason = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;
/**
 * @public
 */
export type AttachmentUploadErrorReason =
  (typeof AttachmentUploadErrorReason)[keyof typeof AttachmentUploadErrorReason];

/**
 * @public
 * @enum
 */
export const PhoneNumberType = {
  INVALID: "INVALID",
  LANDLINE: "LANDLINE",
  MOBILE: "MOBILE",
  OTHER: "OTHER",
} as const;
/**
 * @public
 */
export type PhoneNumberType = (typeof PhoneNumberType)[keyof typeof PhoneNumberType];

/**
 * @public
 * @enum
 */
export const ConfigurationSetFilterName = {
  DEFAULT_MESSAGE_FEEDBACK_ENABLED: "default-message-feedback-enabled",
  DEFAULT_MESSAGE_TYPE: "default-message-type",
  DEFAULT_SENDER_ID: "default-sender-id",
  EVENT_DESTINATION_NAME: "event-destination-name",
  MATCHING_EVENT_TYPES: "matching-event-types",
  PROTECT_CONFIGURATION_ID: "protect-configuration-id",
} as const;
/**
 * @public
 */
export type ConfigurationSetFilterName = (typeof ConfigurationSetFilterName)[keyof typeof ConfigurationSetFilterName];

/**
 * @public
 * @enum
 */
export const MessageType = {
  PROMOTIONAL: "PROMOTIONAL",
  TRANSACTIONAL: "TRANSACTIONAL",
} as const;
/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 * @enum
 */
export const EventType = {
  ALL: "ALL",
  MEDIA_ALL: "MEDIA_ALL",
  MEDIA_BLOCKED: "MEDIA_BLOCKED",
  MEDIA_CARRIER_BLOCKED: "MEDIA_CARRIER_BLOCKED",
  MEDIA_CARRIER_UNREACHABLE: "MEDIA_CARRIER_UNREACHABLE",
  MEDIA_DELIVERED: "MEDIA_DELIVERED",
  MEDIA_FILE_INACCESSIBLE: "MEDIA_FILE_INACCESSIBLE",
  MEDIA_FILE_SIZE_EXCEEDED: "MEDIA_FILE_SIZE_EXCEEDED",
  MEDIA_FILE_TYPE_UNSUPPORTED: "MEDIA_FILE_TYPE_UNSUPPORTED",
  MEDIA_INVALID: "MEDIA_INVALID",
  MEDIA_INVALID_MESSAGE: "MEDIA_INVALID_MESSAGE",
  MEDIA_PENDING: "MEDIA_PENDING",
  MEDIA_QUEUED: "MEDIA_QUEUED",
  MEDIA_SPAM: "MEDIA_SPAM",
  MEDIA_SUCCESSFUL: "MEDIA_SUCCESSFUL",
  MEDIA_TTL_EXPIRED: "MEDIA_TTL_EXPIRED",
  MEDIA_UNKNOWN: "MEDIA_UNKNOWN",
  MEDIA_UNREACHABLE: "MEDIA_UNREACHABLE",
  TEXT_ALL: "TEXT_ALL",
  TEXT_BLOCKED: "TEXT_BLOCKED",
  TEXT_CARRIER_BLOCKED: "TEXT_CARRIER_BLOCKED",
  TEXT_CARRIER_UNREACHABLE: "TEXT_CARRIER_UNREACHABLE",
  TEXT_DELIVERED: "TEXT_DELIVERED",
  TEXT_INVALID: "TEXT_INVALID",
  TEXT_INVALID_MESSAGE: "TEXT_INVALID_MESSAGE",
  TEXT_PENDING: "TEXT_PENDING",
  TEXT_PROTECT_BLOCKED: "TEXT_PROTECT_BLOCKED",
  TEXT_QUEUED: "TEXT_QUEUED",
  TEXT_SENT: "TEXT_SENT",
  TEXT_SPAM: "TEXT_SPAM",
  TEXT_SUCCESSFUL: "TEXT_SUCCESSFUL",
  TEXT_TTL_EXPIRED: "TEXT_TTL_EXPIRED",
  TEXT_UNKNOWN: "TEXT_UNKNOWN",
  TEXT_UNREACHABLE: "TEXT_UNREACHABLE",
  VOICE_ALL: "VOICE_ALL",
  VOICE_ANSWERED: "VOICE_ANSWERED",
  VOICE_BUSY: "VOICE_BUSY",
  VOICE_COMPLETED: "VOICE_COMPLETED",
  VOICE_FAILED: "VOICE_FAILED",
  VOICE_INITIATED: "VOICE_INITIATED",
  VOICE_NO_ANSWER: "VOICE_NO_ANSWER",
  VOICE_RINGING: "VOICE_RINGING",
  VOICE_TTL_EXPIRED: "VOICE_TTL_EXPIRED",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const PoolStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type PoolStatus = (typeof PoolStatus)[keyof typeof PoolStatus];

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  CLOSED: "CLOSED",
  COMPLETE: "COMPLETE",
  CREATED: "CREATED",
  DELETED: "DELETED",
  PROVISIONING: "PROVISIONING",
  REQUIRES_AUTHENTICATION: "REQUIRES_AUTHENTICATION",
  REQUIRES_UPDATES: "REQUIRES_UPDATES",
  REVIEWING: "REVIEWING",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * @public
 * @enum
 */
export const RegistrationVersionStatus = {
  APPROVED: "APPROVED",
  ARCHIVED: "ARCHIVED",
  DENIED: "DENIED",
  DISCARDED: "DISCARDED",
  DRAFT: "DRAFT",
  REQUIRES_AUTHENTICATION: "REQUIRES_AUTHENTICATION",
  REVIEWING: "REVIEWING",
  REVOKED: "REVOKED",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type RegistrationVersionStatus = (typeof RegistrationVersionStatus)[keyof typeof RegistrationVersionStatus];

/**
 * @public
 * @enum
 */
export const VerificationStatus = {
  PENDING: "PENDING",
  VERIFIED: "VERIFIED",
} as const;
/**
 * @public
 */
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];

/**
 * @public
 * @enum
 */
export const KeywordAction = {
  AUTOMATIC_RESPONSE: "AUTOMATIC_RESPONSE",
  OPT_IN: "OPT_IN",
  OPT_OUT: "OPT_OUT",
} as const;
/**
 * @public
 */
export type KeywordAction = (typeof KeywordAction)[keyof typeof KeywordAction];

/**
 * @public
 * @enum
 */
export const ProtectConfigurationRuleOverrideAction = {
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
} as const;
/**
 * @public
 */
export type ProtectConfigurationRuleOverrideAction =
  (typeof ProtectConfigurationRuleOverrideAction)[keyof typeof ProtectConfigurationRuleOverrideAction];

/**
 * @public
 * @enum
 */
export const KeywordFilterName = {
  KEYWORD_ACTION: "keyword-action",
} as const;
/**
 * @public
 */
export type KeywordFilterName = (typeof KeywordFilterName)[keyof typeof KeywordFilterName];

/**
 * @public
 * @enum
 */
export const OptedOutFilterName = {
  END_USER_OPTED_OUT: "end-user-opted-out",
} as const;
/**
 * @public
 */
export type OptedOutFilterName = (typeof OptedOutFilterName)[keyof typeof OptedOutFilterName];

/**
 * @public
 * @enum
 */
export const Owner = {
  SELF: "SELF",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type Owner = (typeof Owner)[keyof typeof Owner];

/**
 * @public
 * @enum
 */
export const PhoneNumberFilterName = {
  DELETION_PROTECTION_ENABLED: "deletion-protection-enabled",
  ISO_COUNTRY_CODE: "iso-country-code",
  MESSAGE_TYPE: "message-type",
  NUMBER_CAPABILITY: "number-capability",
  NUMBER_TYPE: "number-type",
  OPT_OUT_LIST_NAME: "opt-out-list-name",
  SELF_MANAGED_OPT_OUTS_ENABLED: "self-managed-opt-outs-enabled",
  STATUS: "status",
  TWO_WAY_CHANNEL_ARN: "two-way-channel-arn",
  TWO_WAY_ENABLED: "two-way-enabled",
} as const;
/**
 * @public
 */
export type PhoneNumberFilterName = (typeof PhoneNumberFilterName)[keyof typeof PhoneNumberFilterName];

/**
 * @public
 * @enum
 */
export const NumberCapability = {
  MMS: "MMS",
  SMS: "SMS",
  VOICE: "VOICE",
} as const;
/**
 * @public
 */
export type NumberCapability = (typeof NumberCapability)[keyof typeof NumberCapability];

/**
 * @public
 * @enum
 */
export const NumberType = {
  LONG_CODE: "LONG_CODE",
  SHORT_CODE: "SHORT_CODE",
  SIMULATOR: "SIMULATOR",
  TEN_DLC: "TEN_DLC",
  TOLL_FREE: "TOLL_FREE",
} as const;
/**
 * @public
 */
export type NumberType = (typeof NumberType)[keyof typeof NumberType];

/**
 * @public
 * @enum
 */
export const NumberStatus = {
  ACTIVE: "ACTIVE",
  ASSOCIATING: "ASSOCIATING",
  DELETED: "DELETED",
  DISASSOCIATING: "DISASSOCIATING",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type NumberStatus = (typeof NumberStatus)[keyof typeof NumberStatus];

/**
 * @public
 * @enum
 */
export const PoolFilterName = {
  DELETION_PROTECTION_ENABLED: "deletion-protection-enabled",
  MESSAGE_TYPE: "message-type",
  OPT_OUT_LIST_NAME: "opt-out-list-name",
  SELF_MANAGED_OPT_OUTS_ENABLED: "self-managed-opt-outs-enabled",
  SHARED_ROUTES_ENABLED: "shared-routes-enabled",
  STATUS: "status",
  TWO_WAY_CHANNEL_ARN: "two-way-channel-arn",
  TWO_WAY_ENABLED: "two-way-enabled",
} as const;
/**
 * @public
 */
export type PoolFilterName = (typeof PoolFilterName)[keyof typeof PoolFilterName];

/**
 * @public
 * @enum
 */
export const ProtectConfigurationFilterName = {
  ACCOUNT_DEFAULT: "account-default",
  DELETION_PROTECTION_ENABLED: "deletion-protection-enabled",
} as const;
/**
 * @public
 */
export type ProtectConfigurationFilterName =
  (typeof ProtectConfigurationFilterName)[keyof typeof ProtectConfigurationFilterName];

/**
 * @public
 * @enum
 */
export const RegistrationAttachmentFilterName = {
  ATTACHMENT_STATUS: "attachment-status",
} as const;
/**
 * @public
 */
export type RegistrationAttachmentFilterName =
  (typeof RegistrationAttachmentFilterName)[keyof typeof RegistrationAttachmentFilterName];

/**
 * @public
 * @enum
 */
export const FieldRequirement = {
  CONDITIONAL: "CONDITIONAL",
  OPTIONAL: "OPTIONAL",
  REQUIRED: "REQUIRED",
} as const;
/**
 * @public
 */
export type FieldRequirement = (typeof FieldRequirement)[keyof typeof FieldRequirement];

/**
 * @public
 * @enum
 */
export const FieldType = {
  ATTACHMENT: "ATTACHMENT",
  SELECT: "SELECT",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type FieldType = (typeof FieldType)[keyof typeof FieldType];

/**
 * @public
 * @enum
 */
export const RegistrationFilterName = {
  REGISTRATION_STATUS: "registration-status",
  REGISTRATION_TYPE: "registration-type",
} as const;
/**
 * @public
 */
export type RegistrationFilterName = (typeof RegistrationFilterName)[keyof typeof RegistrationFilterName];

/**
 * @public
 * @enum
 */
export const RegistrationTypeFilterName = {
  SUPPORTED_ASSOCIATION_ISO_COUNTRY_CODE: "supported-association-iso-country-code",
  SUPPORTED_ASSOCIATION_RESOURCE_TYPE: "supported-association-resource-type",
} as const;
/**
 * @public
 */
export type RegistrationTypeFilterName = (typeof RegistrationTypeFilterName)[keyof typeof RegistrationTypeFilterName];

/**
 * @public
 * @enum
 */
export const RegistrationAssociationBehavior = {
  ASSOCIATE_AFTER_COMPLETE: "ASSOCIATE_AFTER_COMPLETE",
  ASSOCIATE_BEFORE_SUBMIT: "ASSOCIATE_BEFORE_SUBMIT",
  ASSOCIATE_ON_APPROVAL: "ASSOCIATE_ON_APPROVAL",
} as const;
/**
 * @public
 */
export type RegistrationAssociationBehavior =
  (typeof RegistrationAssociationBehavior)[keyof typeof RegistrationAssociationBehavior];

/**
 * @public
 * @enum
 */
export const RegistrationDisassociationBehavior = {
  DELETE_REGISTRATION_DISASSOCIATES: "DELETE_REGISTRATION_DISASSOCIATES",
  DISASSOCIATE_ALL_ALLOWS_DELETE_REGISTRATION: "DISASSOCIATE_ALL_ALLOWS_DELETE_REGISTRATION",
  DISASSOCIATE_ALL_CLOSES_REGISTRATION: "DISASSOCIATE_ALL_CLOSES_REGISTRATION",
} as const;
/**
 * @public
 */
export type RegistrationDisassociationBehavior =
  (typeof RegistrationDisassociationBehavior)[keyof typeof RegistrationDisassociationBehavior];

/**
 * @public
 * @enum
 */
export const RegistrationVersionFilterName = {
  REGISTRATION_VERSION_STATUS: "registration-version-status",
} as const;
/**
 * @public
 */
export type RegistrationVersionFilterName =
  (typeof RegistrationVersionFilterName)[keyof typeof RegistrationVersionFilterName];

/**
 * @public
 * @enum
 */
export const SenderIdFilterName = {
  DELETION_PROTECTION_ENABLED: "deletion-protection-enabled",
  ISO_COUNTRY_CODE: "iso-country-code",
  MESSAGE_TYPE: "message-type",
  REGISTERED: "registered",
  SENDER_ID: "sender-id",
} as const;
/**
 * @public
 */
export type SenderIdFilterName = (typeof SenderIdFilterName)[keyof typeof SenderIdFilterName];

/**
 * @public
 * @enum
 */
export const SpendLimitName = {
  MEDIA_MESSAGE_MONTHLY_SPEND_LIMIT: "MEDIA_MESSAGE_MONTHLY_SPEND_LIMIT",
  TEXT_MESSAGE_MONTHLY_SPEND_LIMIT: "TEXT_MESSAGE_MONTHLY_SPEND_LIMIT",
  VOICE_MESSAGE_MONTHLY_SPEND_LIMIT: "VOICE_MESSAGE_MONTHLY_SPEND_LIMIT",
} as const;
/**
 * @public
 */
export type SpendLimitName = (typeof SpendLimitName)[keyof typeof SpendLimitName];

/**
 * @public
 * @enum
 */
export const VerifiedDestinationNumberFilterName = {
  STATUS: "status",
} as const;
/**
 * @public
 */
export type VerifiedDestinationNumberFilterName =
  (typeof VerifiedDestinationNumberFilterName)[keyof typeof VerifiedDestinationNumberFilterName];

/**
 * @public
 * @enum
 */
export const DestinationCountryParameterKey = {
  IN_ENTITY_ID: "IN_ENTITY_ID",
  IN_TEMPLATE_ID: "IN_TEMPLATE_ID",
} as const;
/**
 * @public
 */
export type DestinationCountryParameterKey =
  (typeof DestinationCountryParameterKey)[keyof typeof DestinationCountryParameterKey];

/**
 * @public
 * @enum
 */
export const ProtectStatus = {
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
  FILTER: "FILTER",
  MONITOR: "MONITOR",
} as const;
/**
 * @public
 */
export type ProtectStatus = (typeof ProtectStatus)[keyof typeof ProtectStatus];

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  DE_DE: "DE_DE",
  EN_GB: "EN_GB",
  EN_US: "EN_US",
  ES_419: "ES_419",
  ES_ES: "ES_ES",
  FR_CA: "FR_CA",
  FR_FR: "FR_FR",
  IT_IT: "IT_IT",
  JA_JP: "JA_JP",
  KO_KR: "KO_KR",
  PT_BR: "PT_BR",
  ZH_CN: "ZH_CN",
  ZH_TW: "ZH_TW",
} as const;
/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * @enum
 */
export const PoolOriginationIdentitiesFilterName = {
  ISO_COUNTRY_CODE: "iso-country-code",
  NUMBER_CAPABILITY: "number-capability",
} as const;
/**
 * @public
 */
export type PoolOriginationIdentitiesFilterName =
  (typeof PoolOriginationIdentitiesFilterName)[keyof typeof PoolOriginationIdentitiesFilterName];

/**
 * @public
 * @enum
 */
export const ProtectConfigurationRuleSetNumberOverrideFilterName = {
  ACTION: "action",
  CREATED_AFTER: "created-after",
  CREATED_BEFORE: "created-before",
  DESTINATION_PHONE_NUMBER_BEGINS_WITH: "destination-phone-number-begins-with",
  EXPIRES_AFTER: "expires-after",
  EXPIRES_BEFORE: "expires-before",
  ISO_COUNTRY_CODE: "iso-country-code",
} as const;
/**
 * @public
 */
export type ProtectConfigurationRuleSetNumberOverrideFilterName =
  (typeof ProtectConfigurationRuleSetNumberOverrideFilterName)[keyof typeof ProtectConfigurationRuleSetNumberOverrideFilterName];

/**
 * @public
 * @enum
 */
export const RegistrationAssociationFilterName = {
  ISO_COUNTRY_CODE: "iso-country-code",
  RESOURCE_TYPE: "resource-type",
} as const;
/**
 * @public
 */
export type RegistrationAssociationFilterName =
  (typeof RegistrationAssociationFilterName)[keyof typeof RegistrationAssociationFilterName];

/**
 * @public
 * @enum
 */
export const MessageFeedbackStatus = {
  FAILED: "FAILED",
  RECEIVED: "RECEIVED",
} as const;
/**
 * @public
 */
export type MessageFeedbackStatus = (typeof MessageFeedbackStatus)[keyof typeof MessageFeedbackStatus];

/**
 * @public
 * @enum
 */
export const RequestableNumberType = {
  LONG_CODE: "LONG_CODE",
  SIMULATOR: "SIMULATOR",
  TEN_DLC: "TEN_DLC",
  TOLL_FREE: "TOLL_FREE",
} as const;
/**
 * @public
 */
export type RequestableNumberType = (typeof RequestableNumberType)[keyof typeof RequestableNumberType];

/**
 * @public
 * @enum
 */
export const VerificationChannel = {
  TEXT: "TEXT",
  VOICE: "VOICE",
} as const;
/**
 * @public
 */
export type VerificationChannel = (typeof VerificationChannel)[keyof typeof VerificationChannel];

/**
 * @public
 * @enum
 */
export const VoiceMessageBodyTextType = {
  SSML: "SSML",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type VoiceMessageBodyTextType = (typeof VoiceMessageBodyTextType)[keyof typeof VoiceMessageBodyTextType];

/**
 * @public
 * @enum
 */
export const VoiceId = {
  AMY: "AMY",
  ASTRID: "ASTRID",
  BIANCA: "BIANCA",
  BRIAN: "BRIAN",
  CAMILA: "CAMILA",
  CARLA: "CARLA",
  CARMEN: "CARMEN",
  CELINE: "CELINE",
  CHANTAL: "CHANTAL",
  CONCHITA: "CONCHITA",
  CRISTIANO: "CRISTIANO",
  DORA: "DORA",
  EMMA: "EMMA",
  ENRIQUE: "ENRIQUE",
  EWA: "EWA",
  FILIZ: "FILIZ",
  GERAINT: "GERAINT",
  GIORGIO: "GIORGIO",
  GWYNETH: "GWYNETH",
  HANS: "HANS",
  INES: "INES",
  IVY: "IVY",
  JACEK: "JACEK",
  JAN: "JAN",
  JOANNA: "JOANNA",
  JOEY: "JOEY",
  JUSTIN: "JUSTIN",
  KARL: "KARL",
  KENDRA: "KENDRA",
  KIMBERLY: "KIMBERLY",
  LEA: "LEA",
  LIV: "LIV",
  LOTTE: "LOTTE",
  LUCIA: "LUCIA",
  LUPE: "LUPE",
  MADS: "MADS",
  MAJA: "MAJA",
  MARLENE: "MARLENE",
  MATHIEU: "MATHIEU",
  MATTHEW: "MATTHEW",
  MAXIM: "MAXIM",
  MIA: "MIA",
  MIGUEL: "MIGUEL",
  MIZUKI: "MIZUKI",
  NAJA: "NAJA",
  NICOLE: "NICOLE",
  PENELOPE: "PENELOPE",
  RAVEENA: "RAVEENA",
  RICARDO: "RICARDO",
  RUBEN: "RUBEN",
  RUSSELL: "RUSSELL",
  SALLI: "SALLI",
  SEOYEON: "SEOYEON",
  TAKUMI: "TAKUMI",
  TATYANA: "TATYANA",
  VICKI: "VICKI",
  VITORIA: "VITORIA",
  ZEINA: "ZEINA",
  ZHIYU: "ZHIYU",
} as const;
/**
 * @public
 */
export type VoiceId = (typeof VoiceId)[keyof typeof VoiceId];
