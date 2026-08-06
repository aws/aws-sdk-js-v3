// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RegistryRecordOAuthGrantType = {
  CLIENT_CREDENTIALS: "CLIENT_CREDENTIALS",
} as const;
/**
 * @public
 */
export type RegistryRecordOAuthGrantType =
  (typeof RegistryRecordOAuthGrantType)[keyof typeof RegistryRecordOAuthGrantType];

/**
 * @public
 * @enum
 */
export const RegistryRecordCredentialProviderType = {
  IAM: "IAM",
  OAUTH: "OAUTH",
} as const;
/**
 * @public
 */
export type RegistryRecordCredentialProviderType =
  (typeof RegistryRecordCredentialProviderType)[keyof typeof RegistryRecordCredentialProviderType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CannotParse",
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  IDEMPOTENT_PARAMETER_MISMATCH_EXCEPTION: "IdempotentParameterMismatchException",
  RESOURCE_CONFLICT: "ResourceConflict",
  ROOT_EVENT_IN_OTHER_SESSION: "EventInOtherSession",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const RecordType = {
  AGENT: "AGENT",
  CUSTOM: "CUSTOM",
  MCP: "MCP",
  SKILL: "SKILL",
} as const;
/**
 * @public
 */
export type RecordType = (typeof RecordType)[keyof typeof RecordType];

/**
 * @public
 * @enum
 */
export const RegistryRecordStatus = {
  APPROVED: "APPROVED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DEPRECATED: "DEPRECATED",
  DRAFT: "DRAFT",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  REJECTED: "REJECTED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RegistryRecordStatus = (typeof RegistryRecordStatus)[keyof typeof RegistryRecordStatus];

/**
 * @public
 * @enum
 */
export const RegistryRecordFilterName = {
  NAME: "name",
  RECORD_TYPE: "recordType",
  STATUS: "status",
} as const;
/**
 * @public
 */
export type RegistryRecordFilterName = (typeof RegistryRecordFilterName)[keyof typeof RegistryRecordFilterName];

/**
 * @public
 * @enum
 */
export const AutoApprovalRule = {
  APPROVE_ALL: "APPROVE_ALL",
} as const;
/**
 * @public
 */
export type AutoApprovalRule = (typeof AutoApprovalRule)[keyof typeof AutoApprovalRule];

/**
 * @public
 * @enum
 */
export const ClaimMatchOperatorType = {
  CONTAINS: "CONTAINS",
  CONTAINS_ANY: "CONTAINS_ANY",
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type ClaimMatchOperatorType = (typeof ClaimMatchOperatorType)[keyof typeof ClaimMatchOperatorType];

/**
 * @public
 * @enum
 */
export const InboundTokenClaimValueType = {
  STRING: "STRING",
  STRING_ARRAY: "STRING_ARRAY",
} as const;
/**
 * @public
 */
export type InboundTokenClaimValueType = (typeof InboundTokenClaimValueType)[keyof typeof InboundTokenClaimValueType];

/**
 * @public
 * @enum
 */
export const EndpointIpAddressType = {
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type EndpointIpAddressType = (typeof EndpointIpAddressType)[keyof typeof EndpointIpAddressType];

/**
 * @public
 * @enum
 */
export const RegistryAuthorizerType = {
  AWS_IAM: "AWS_IAM",
  CUSTOM_JWT: "CUSTOM_JWT",
} as const;
/**
 * @public
 */
export type RegistryAuthorizerType = (typeof RegistryAuthorizerType)[keyof typeof RegistryAuthorizerType];

/**
 * @public
 * @enum
 */
export const RegistryStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RegistryStatus = (typeof RegistryStatus)[keyof typeof RegistryStatus];

/**
 * @public
 * @enum
 */
export const RegistryFilterName = {
  DISCOVERY_CONFIGURATION_AUTHORIZER_TYPE: "discoveryConfiguration.authorizerType",
  STATUS: "status",
} as const;
/**
 * @public
 */
export type RegistryFilterName = (typeof RegistryFilterName)[keyof typeof RegistryFilterName];
