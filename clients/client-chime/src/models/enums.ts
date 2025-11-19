// smithy-typescript generated code
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

/**
 * @public
 * @enum
 */
export const AccountStatus = {
  Active: "Active",
  Suspended: "Suspended",
} as const;
/**
 * @public
 */
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];

/**
 * @public
 * @enum
 */
export const AccountType = {
  EnterpriseDirectory: "EnterpriseDirectory",
  EnterpriseLWA: "EnterpriseLWA",
  EnterpriseOIDC: "EnterpriseOIDC",
  Team: "Team",
} as const;
/**
 * @public
 */
export type AccountType = (typeof AccountType)[keyof typeof AccountType];

/**
 * @public
 * @enum
 */
export const License = {
  Basic: "Basic",
  Plus: "Plus",
  Pro: "Pro",
  ProTrial: "ProTrial",
} as const;
/**
 * @public
 */
export type License = (typeof License)[keyof typeof License];

/**
 * @public
 * @enum
 */
export const RoomMembershipRole = {
  Administrator: "Administrator",
  Member: "Member",
} as const;
/**
 * @public
 */
export type RoomMembershipRole = (typeof RoomMembershipRole)[keyof typeof RoomMembershipRole];

/**
 * @public
 * @enum
 */
export const PhoneNumberProductType = {
  BusinessCalling: "BusinessCalling",
  SipMediaApplicationDialIn: "SipMediaApplicationDialIn",
  VoiceConnector: "VoiceConnector",
} as const;
/**
 * @public
 */
export type PhoneNumberProductType = (typeof PhoneNumberProductType)[keyof typeof PhoneNumberProductType];

/**
 * @public
 * @enum
 */
export const UserType = {
  PrivateUser: "PrivateUser",
  SharedDevice: "SharedDevice",
} as const;
/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 * @enum
 */
export const BotType = {
  ChatBot: "ChatBot",
} as const;
/**
 * @public
 */
export type BotType = (typeof BotType)[keyof typeof BotType];

/**
 * @public
 * @enum
 */
export const CallingNameStatus = {
  Unassigned: "Unassigned",
  UpdateFailed: "UpdateFailed",
  UpdateInProgress: "UpdateInProgress",
  UpdateSucceeded: "UpdateSucceeded",
} as const;
/**
 * @public
 */
export type CallingNameStatus = (typeof CallingNameStatus)[keyof typeof CallingNameStatus];

/**
 * @public
 * @enum
 */
export const OrderedPhoneNumberStatus = {
  Acquired: "Acquired",
  Failed: "Failed",
  Processing: "Processing",
} as const;
/**
 * @public
 */
export type OrderedPhoneNumberStatus = (typeof OrderedPhoneNumberStatus)[keyof typeof OrderedPhoneNumberStatus];

/**
 * @public
 * @enum
 */
export const PhoneNumberOrderStatus = {
  Failed: "Failed",
  Partial: "Partial",
  Processing: "Processing",
  Successful: "Successful",
} as const;
/**
 * @public
 */
export type PhoneNumberOrderStatus = (typeof PhoneNumberOrderStatus)[keyof typeof PhoneNumberOrderStatus];

/**
 * @public
 * @enum
 */
export const MemberType = {
  Bot: "Bot",
  User: "User",
  Webhook: "Webhook",
} as const;
/**
 * @public
 */
export type MemberType = (typeof MemberType)[keyof typeof MemberType];

/**
 * @public
 * @enum
 */
export const InviteStatus = {
  Accepted: "Accepted",
  Failed: "Failed",
  Pending: "Pending",
} as const;
/**
 * @public
 */
export type InviteStatus = (typeof InviteStatus)[keyof typeof InviteStatus];

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  Registered: "Registered",
  Suspended: "Suspended",
  Unregistered: "Unregistered",
} as const;
/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * @public
 * @enum
 */
export const EmailStatus = {
  Failed: "Failed",
  NotSent: "NotSent",
  Sent: "Sent",
} as const;
/**
 * @public
 */
export type EmailStatus = (typeof EmailStatus)[keyof typeof EmailStatus];

/**
 * @public
 * @enum
 */
export const PhoneNumberAssociationName = {
  AccountId: "AccountId",
  SipRuleId: "SipRuleId",
  UserId: "UserId",
  VoiceConnectorGroupId: "VoiceConnectorGroupId",
  VoiceConnectorId: "VoiceConnectorId",
} as const;
/**
 * @public
 */
export type PhoneNumberAssociationName = (typeof PhoneNumberAssociationName)[keyof typeof PhoneNumberAssociationName];

/**
 * @public
 * @enum
 */
export const PhoneNumberStatus = {
  AcquireFailed: "AcquireFailed",
  AcquireInProgress: "AcquireInProgress",
  Assigned: "Assigned",
  DeleteFailed: "DeleteFailed",
  DeleteInProgress: "DeleteInProgress",
  ReleaseFailed: "ReleaseFailed",
  ReleaseInProgress: "ReleaseInProgress",
  Unassigned: "Unassigned",
} as const;
/**
 * @public
 */
export type PhoneNumberStatus = (typeof PhoneNumberStatus)[keyof typeof PhoneNumberStatus];

/**
 * @public
 * @enum
 */
export const PhoneNumberType = {
  Local: "Local",
  TollFree: "TollFree",
} as const;
/**
 * @public
 */
export type PhoneNumberType = (typeof PhoneNumberType)[keyof typeof PhoneNumberType];
