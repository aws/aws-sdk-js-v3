// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BehaviorOnMXFailure = {
  RejectMessage: "RejectMessage",
  UseDefaultValue: "UseDefaultValue",
} as const;
/**
 * @public
 */
export type BehaviorOnMXFailure = (typeof BehaviorOnMXFailure)[keyof typeof BehaviorOnMXFailure];

/**
 * @public
 * @enum
 */
export const BounceType = {
  ContentRejected: "ContentRejected",
  DoesNotExist: "DoesNotExist",
  ExceededQuota: "ExceededQuota",
  MessageTooLarge: "MessageTooLarge",
  TemporaryFailure: "TemporaryFailure",
  Undefined: "Undefined",
} as const;
/**
 * @public
 */
export type BounceType = (typeof BounceType)[keyof typeof BounceType];

/**
 * @public
 * @enum
 */
export const DsnAction = {
  DELAYED: "delayed",
  DELIVERED: "delivered",
  EXPANDED: "expanded",
  FAILED: "failed",
  RELAYED: "relayed",
} as const;
/**
 * @public
 */
export type DsnAction = (typeof DsnAction)[keyof typeof DsnAction];

/**
 * @public
 * @enum
 */
export const BulkEmailStatus = {
  AccountDailyQuotaExceeded: "AccountDailyQuotaExceeded",
  AccountSendingPaused: "AccountSendingPaused",
  AccountSuspended: "AccountSuspended",
  AccountThrottled: "AccountThrottled",
  ConfigurationSetDoesNotExist: "ConfigurationSetDoesNotExist",
  ConfigurationSetSendingPaused: "ConfigurationSetSendingPaused",
  Failed: "Failed",
  InvalidParameterValue: "InvalidParameterValue",
  InvalidSendingPoolName: "InvalidSendingPoolName",
  MailFromDomainNotVerified: "MailFromDomainNotVerified",
  MessageRejected: "MessageRejected",
  Success: "Success",
  TemplateDoesNotExist: "TemplateDoesNotExist",
  TransientFailure: "TransientFailure",
} as const;
/**
 * @public
 */
export type BulkEmailStatus = (typeof BulkEmailStatus)[keyof typeof BulkEmailStatus];

/**
 * @public
 * @enum
 */
export const DimensionValueSource = {
  EMAIL_HEADER: "emailHeader",
  LINK_TAG: "linkTag",
  MESSAGE_TAG: "messageTag",
} as const;
/**
 * @public
 */
export type DimensionValueSource = (typeof DimensionValueSource)[keyof typeof DimensionValueSource];

/**
 * @public
 * @enum
 */
export const ConfigurationSetAttribute = {
  DELIVERY_OPTIONS: "deliveryOptions",
  EVENT_DESTINATIONS: "eventDestinations",
  REPUTATION_OPTIONS: "reputationOptions",
  TRACKING_OPTIONS: "trackingOptions",
} as const;
/**
 * @public
 */
export type ConfigurationSetAttribute = (typeof ConfigurationSetAttribute)[keyof typeof ConfigurationSetAttribute];

/**
 * @public
 * @enum
 */
export const EventType = {
  BOUNCE: "bounce",
  CLICK: "click",
  COMPLAINT: "complaint",
  DELIVERY: "delivery",
  OPEN: "open",
  REJECT: "reject",
  RENDERING_FAILURE: "renderingFailure",
  SEND: "send",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const ReceiptFilterPolicy = {
  Allow: "Allow",
  Block: "Block",
} as const;
/**
 * @public
 */
export type ReceiptFilterPolicy = (typeof ReceiptFilterPolicy)[keyof typeof ReceiptFilterPolicy];

/**
 * @public
 * @enum
 */
export const InvocationType = {
  Event: "Event",
  RequestResponse: "RequestResponse",
} as const;
/**
 * @public
 */
export type InvocationType = (typeof InvocationType)[keyof typeof InvocationType];

/**
 * @public
 * @enum
 */
export const SNSActionEncoding = {
  Base64: "Base64",
  UTF8: "UTF-8",
} as const;
/**
 * @public
 */
export type SNSActionEncoding = (typeof SNSActionEncoding)[keyof typeof SNSActionEncoding];

/**
 * @public
 * @enum
 */
export const StopScope = {
  RULE_SET: "RuleSet",
} as const;
/**
 * @public
 */
export type StopScope = (typeof StopScope)[keyof typeof StopScope];

/**
 * @public
 * @enum
 */
export const TlsPolicy = {
  Optional: "Optional",
  Require: "Require",
} as const;
/**
 * @public
 */
export type TlsPolicy = (typeof TlsPolicy)[keyof typeof TlsPolicy];

/**
 * @public
 * @enum
 */
export const CustomMailFromStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TemporaryFailure: "TemporaryFailure",
} as const;
/**
 * @public
 */
export type CustomMailFromStatus = (typeof CustomMailFromStatus)[keyof typeof CustomMailFromStatus];

/**
 * @public
 * @enum
 */
export const VerificationStatus = {
  Failed: "Failed",
  NotStarted: "NotStarted",
  Pending: "Pending",
  Success: "Success",
  TemporaryFailure: "TemporaryFailure",
} as const;
/**
 * @public
 */
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];

/**
 * @public
 * @enum
 */
export const IdentityType = {
  Domain: "Domain",
  EmailAddress: "EmailAddress",
} as const;
/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 * @enum
 */
export const NotificationType = {
  Bounce: "Bounce",
  Complaint: "Complaint",
  Delivery: "Delivery",
} as const;
/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
