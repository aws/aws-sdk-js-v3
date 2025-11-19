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
  Gone: "Gone",
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
export const AlexaSkillStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type AlexaSkillStatus = (typeof AlexaSkillStatus)[keyof typeof AlexaSkillStatus];

/**
 * @public
 * @enum
 */
export const PhoneNumberProductType = {
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
export const CallLegType = {
  CALLEE: "Callee",
  CALLER: "Caller",
} as const;
/**
 * @public
 */
export type CallLegType = (typeof CallLegType)[keyof typeof CallLegType];

/**
 * @public
 * @enum
 */
export const Capability = {
  SMS: "SMS",
  Voice: "Voice",
} as const;
/**
 * @public
 */
export type Capability = (typeof Capability)[keyof typeof Capability];

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
export const PhoneNumberOrderType = {
  New: "New",
  Porting: "Porting",
} as const;
/**
 * @public
 */
export type PhoneNumberOrderType = (typeof PhoneNumberOrderType)[keyof typeof PhoneNumberOrderType];

/**
 * @public
 * @enum
 */
export const PhoneNumberOrderStatus = {
  CancelRequested: "CancelRequested",
  Cancelled: "Cancelled",
  ChangeRequested: "ChangeRequested",
  Exception: "Exception",
  FOC: "FOC",
  Failed: "Failed",
  Partial: "Partial",
  PendingDocuments: "PendingDocuments",
  Processing: "Processing",
  Submitted: "Submitted",
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
export const GeoMatchLevel = {
  AreaCode: "AreaCode",
  Country: "Country",
} as const;
/**
 * @public
 */
export type GeoMatchLevel = (typeof GeoMatchLevel)[keyof typeof GeoMatchLevel];

/**
 * @public
 * @enum
 */
export const NumberSelectionBehavior = {
  AvoidSticky: "AvoidSticky",
  PreferSticky: "PreferSticky",
} as const;
/**
 * @public
 */
export type NumberSelectionBehavior = (typeof NumberSelectionBehavior)[keyof typeof NumberSelectionBehavior];

/**
 * @public
 * @enum
 */
export const ProxySessionStatus = {
  Closed: "Closed",
  InProgress: "InProgress",
  Open: "Open",
} as const;
/**
 * @public
 */
export type ProxySessionStatus = (typeof ProxySessionStatus)[keyof typeof ProxySessionStatus];

/**
 * @public
 * @enum
 */
export const SipRuleTriggerType = {
  RequestUriHostname: "RequestUriHostname",
  ToPhoneNumber: "ToPhoneNumber",
} as const;
/**
 * @public
 */
export type SipRuleTriggerType = (typeof SipRuleTriggerType)[keyof typeof SipRuleTriggerType];

/**
 * @public
 * @enum
 */
export const VoiceConnectorAwsRegion = {
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_SOUTHEAST_1: "ap-southeast-1",
  AP_SOUTHEAST_2: "ap-southeast-2",
  CA_CENTRAL_1: "ca-central-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  US_EAST_1: "us-east-1",
  US_WEST_2: "us-west-2",
} as const;
/**
 * @public
 */
export type VoiceConnectorAwsRegion = (typeof VoiceConnectorAwsRegion)[keyof typeof VoiceConnectorAwsRegion];

/**
 * @public
 * @enum
 */
export const VoiceConnectorIntegrationType = {
  CONNECT_ANALYTICS_CONNECTOR: "CONNECT_ANALYTICS_CONNECTOR",
  CONNECT_CALL_TRANSFER_CONNECTOR: "CONNECT_CALL_TRANSFER_CONNECTOR",
} as const;
/**
 * @public
 */
export type VoiceConnectorIntegrationType =
  (typeof VoiceConnectorIntegrationType)[keyof typeof VoiceConnectorIntegrationType];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL_STACK: "DUAL_STACK",
  IPV4_ONLY: "IPV4_ONLY",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const PhoneNumberAssociationName = {
  SipRuleId: "SipRuleId",
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
  Cancelled: "Cancelled",
  DeleteFailed: "DeleteFailed",
  DeleteInProgress: "DeleteInProgress",
  PortinCancelRequested: "PortinCancelRequested",
  PortinInProgress: "PortinInProgress",
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

/**
 * @public
 * @enum
 */
export const ContactCenterSystemType = {
  AVAYA_AURA_CALL_CENTER_ELITE: "AVAYA_AURA_CALL_CENTER_ELITE",
  AVAYA_AURA_CONTACT_CENTER: "AVAYA_AURA_CONTACT_CENTER",
  CISCO_UNIFIED_CONTACT_CENTER_ENTERPRISE: "CISCO_UNIFIED_CONTACT_CENTER_ENTERPRISE",
  GENESYS_ENGAGE_ON_PREMISES: "GENESYS_ENGAGE_ON_PREMISES",
} as const;
/**
 * @public
 */
export type ContactCenterSystemType = (typeof ContactCenterSystemType)[keyof typeof ContactCenterSystemType];

/**
 * @public
 * @enum
 */
export const SessionBorderControllerType = {
  AUDIOCODES_MEDIANT_SBC: "AUDIOCODES_MEDIANT_SBC",
  AVAYA_SBCE: "AVAYA_SBCE",
  CISCO_UNIFIED_BORDER_ELEMENT: "CISCO_UNIFIED_BORDER_ELEMENT",
  ORACLE_ACME_PACKET_SBC: "ORACLE_ACME_PACKET_SBC",
  RIBBON_SBC: "RIBBON_SBC",
} as const;
/**
 * @public
 */
export type SessionBorderControllerType =
  (typeof SessionBorderControllerType)[keyof typeof SessionBorderControllerType];

/**
 * @public
 * @enum
 */
export const OriginationRouteProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;
/**
 * @public
 */
export type OriginationRouteProtocol = (typeof OriginationRouteProtocol)[keyof typeof OriginationRouteProtocol];

/**
 * @public
 * @enum
 */
export const NotificationTarget = {
  EventBridge: "EventBridge",
  SNS: "SNS",
  SQS: "SQS",
} as const;
/**
 * @public
 */
export type NotificationTarget = (typeof NotificationTarget)[keyof typeof NotificationTarget];

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  EN_US: "en-US",
} as const;
/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];
