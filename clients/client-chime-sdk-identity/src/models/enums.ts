// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AllowMessages = {
  ALL: "ALL",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AllowMessages = (typeof AllowMessages)[keyof typeof AllowMessages];

/**
 * @public
 * @enum
 */
export const StandardMessages = {
  ALL: "ALL",
  AUTO: "AUTO",
  MENTIONS: "MENTIONS",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type StandardMessages = (typeof StandardMessages)[keyof typeof StandardMessages];

/**
 * @public
 * @enum
 */
export const TargetedMessages = {
  ALL: "ALL",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type TargetedMessages = (typeof TargetedMessages)[keyof typeof TargetedMessages];

/**
 * @public
 * @enum
 */
export const RespondsTo = {
  STANDARD_MESSAGES: "STANDARD_MESSAGES",
} as const;
/**
 * @public
 */
export type RespondsTo = (typeof RespondsTo)[keyof typeof RespondsTo];

/**
 * @public
 * @enum
 */
export const ExpirationCriterion = {
  CREATED_TIMESTAMP: "CREATED_TIMESTAMP",
} as const;
/**
 * @public
 */
export type ExpirationCriterion = (typeof ExpirationCriterion)[keyof typeof ExpirationCriterion];

/**
 * @public
 * @enum
 */
export const EndpointStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/**
 * @public
 * @enum
 */
export const EndpointStatusReason = {
  INVALID_DEVICE_TOKEN: "INVALID_DEVICE_TOKEN",
  INVALID_PINPOINT_ARN: "INVALID_PINPOINT_ARN",
} as const;
/**
 * @public
 */
export type EndpointStatusReason = (typeof EndpointStatusReason)[keyof typeof EndpointStatusReason];

/**
 * @public
 * @enum
 */
export const AppInstanceUserEndpointType = {
  APNS: "APNS",
  APNS_SANDBOX: "APNS_SANDBOX",
  GCM: "GCM",
} as const;
/**
 * @public
 */
export type AppInstanceUserEndpointType =
  (typeof AppInstanceUserEndpointType)[keyof typeof AppInstanceUserEndpointType];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  AccessDenied: "AccessDenied",
  BadRequest: "BadRequest",
  Conflict: "Conflict",
  Forbidden: "Forbidden",
  NotFound: "NotFound",
  PhoneNumberAssociationsExist: "PhoneNumberAssociationsExist",
  PreconditionFailed: "PreconditionFailed",
  ResourceLimitExceeded: "ResourceLimitExceeded",
  ServiceFailure: "ServiceFailure",
  ServiceUnavailable: "ServiceUnavailable",
  Throttled: "Throttled",
  Throttling: "Throttling",
  Unauthorized: "Unauthorized",
  Unprocessable: "Unprocessable",
  VoiceConnectorGroupAssociationsExist: "VoiceConnectorGroupAssociationsExist",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];
