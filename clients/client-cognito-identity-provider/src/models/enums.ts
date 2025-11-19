// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RecoveryOptionNameType = {
  ADMIN_ONLY: "admin_only",
  VERIFIED_EMAIL: "verified_email",
  VERIFIED_PHONE_NUMBER: "verified_phone_number",
} as const;
/**
 * @public
 */
export type RecoveryOptionNameType = (typeof RecoveryOptionNameType)[keyof typeof RecoveryOptionNameType];

/**
 * @public
 * @enum
 */
export const AccountTakeoverEventActionType = {
  BLOCK: "BLOCK",
  MFA_IF_CONFIGURED: "MFA_IF_CONFIGURED",
  MFA_REQUIRED: "MFA_REQUIRED",
  NO_ACTION: "NO_ACTION",
} as const;
/**
 * @public
 */
export type AccountTakeoverEventActionType =
  (typeof AccountTakeoverEventActionType)[keyof typeof AccountTakeoverEventActionType];

/**
 * @public
 * @enum
 */
export const AttributeDataType = {
  BOOLEAN: "Boolean",
  DATETIME: "DateTime",
  NUMBER: "Number",
  STRING: "String",
} as const;
/**
 * @public
 */
export type AttributeDataType = (typeof AttributeDataType)[keyof typeof AttributeDataType];

/**
 * @public
 * @enum
 */
export const DeliveryMediumType = {
  EMAIL: "EMAIL",
  SMS: "SMS",
} as const;
/**
 * @public
 */
export type DeliveryMediumType = (typeof DeliveryMediumType)[keyof typeof DeliveryMediumType];

/**
 * @public
 * @enum
 */
export const MessageActionType = {
  RESEND: "RESEND",
  SUPPRESS: "SUPPRESS",
} as const;
/**
 * @public
 */
export type MessageActionType = (typeof MessageActionType)[keyof typeof MessageActionType];

/**
 * @public
 * @enum
 */
export const UserStatusType = {
  ARCHIVED: "ARCHIVED",
  COMPROMISED: "COMPROMISED",
  CONFIRMED: "CONFIRMED",
  EXTERNAL_PROVIDER: "EXTERNAL_PROVIDER",
  FORCE_CHANGE_PASSWORD: "FORCE_CHANGE_PASSWORD",
  RESET_REQUIRED: "RESET_REQUIRED",
  UNCONFIRMED: "UNCONFIRMED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type UserStatusType = (typeof UserStatusType)[keyof typeof UserStatusType];

/**
 * @public
 * @enum
 */
export const AuthFlowType = {
  ADMIN_NO_SRP_AUTH: "ADMIN_NO_SRP_AUTH",
  ADMIN_USER_PASSWORD_AUTH: "ADMIN_USER_PASSWORD_AUTH",
  CUSTOM_AUTH: "CUSTOM_AUTH",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  REFRESH_TOKEN_AUTH: "REFRESH_TOKEN_AUTH",
  USER_AUTH: "USER_AUTH",
  USER_PASSWORD_AUTH: "USER_PASSWORD_AUTH",
  USER_SRP_AUTH: "USER_SRP_AUTH",
} as const;
/**
 * @public
 */
export type AuthFlowType = (typeof AuthFlowType)[keyof typeof AuthFlowType];

/**
 * @public
 * @enum
 */
export const ChallengeNameType = {
  ADMIN_NO_SRP_AUTH: "ADMIN_NO_SRP_AUTH",
  CUSTOM_CHALLENGE: "CUSTOM_CHALLENGE",
  DEVICE_PASSWORD_VERIFIER: "DEVICE_PASSWORD_VERIFIER",
  DEVICE_SRP_AUTH: "DEVICE_SRP_AUTH",
  EMAIL_OTP: "EMAIL_OTP",
  MFA_SETUP: "MFA_SETUP",
  NEW_PASSWORD_REQUIRED: "NEW_PASSWORD_REQUIRED",
  PASSWORD: "PASSWORD",
  PASSWORD_SRP: "PASSWORD_SRP",
  PASSWORD_VERIFIER: "PASSWORD_VERIFIER",
  SELECT_CHALLENGE: "SELECT_CHALLENGE",
  SELECT_MFA_TYPE: "SELECT_MFA_TYPE",
  SMS_MFA: "SMS_MFA",
  SMS_OTP: "SMS_OTP",
  SOFTWARE_TOKEN_MFA: "SOFTWARE_TOKEN_MFA",
  WEB_AUTHN: "WEB_AUTHN",
} as const;
/**
 * @public
 */
export type ChallengeNameType = (typeof ChallengeNameType)[keyof typeof ChallengeNameType];

/**
 * @public
 * @enum
 */
export const ChallengeName = {
  Mfa: "Mfa",
  Password: "Password",
} as const;
/**
 * @public
 */
export type ChallengeName = (typeof ChallengeName)[keyof typeof ChallengeName];

/**
 * @public
 * @enum
 */
export const ChallengeResponse = {
  Failure: "Failure",
  Success: "Success",
} as const;
/**
 * @public
 */
export type ChallengeResponse = (typeof ChallengeResponse)[keyof typeof ChallengeResponse];

/**
 * @public
 * @enum
 */
export const FeedbackValueType = {
  INVALID: "Invalid",
  VALID: "Valid",
} as const;
/**
 * @public
 */
export type FeedbackValueType = (typeof FeedbackValueType)[keyof typeof FeedbackValueType];

/**
 * @public
 * @enum
 */
export const EventResponseType = {
  Fail: "Fail",
  InProgress: "InProgress",
  Pass: "Pass",
} as const;
/**
 * @public
 */
export type EventResponseType = (typeof EventResponseType)[keyof typeof EventResponseType];

/**
 * @public
 * @enum
 */
export const RiskDecisionType = {
  AccountTakeover: "AccountTakeover",
  Block: "Block",
  NoRisk: "NoRisk",
} as const;
/**
 * @public
 */
export type RiskDecisionType = (typeof RiskDecisionType)[keyof typeof RiskDecisionType];

/**
 * @public
 * @enum
 */
export const RiskLevelType = {
  High: "High",
  Low: "Low",
  Medium: "Medium",
} as const;
/**
 * @public
 */
export type RiskLevelType = (typeof RiskLevelType)[keyof typeof RiskLevelType];

/**
 * @public
 * @enum
 */
export const EventType = {
  ForgotPassword: "ForgotPassword",
  PasswordChange: "PasswordChange",
  ResendCode: "ResendCode",
  SignIn: "SignIn",
  SignUp: "SignUp",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const DeviceRememberedStatusType = {
  NOT_REMEMBERED: "not_remembered",
  REMEMBERED: "remembered",
} as const;
/**
 * @public
 */
export type DeviceRememberedStatusType = (typeof DeviceRememberedStatusType)[keyof typeof DeviceRememberedStatusType];

/**
 * @public
 * @enum
 */
export const AdvancedSecurityEnabledModeType = {
  AUDIT: "AUDIT",
  ENFORCED: "ENFORCED",
} as const;
/**
 * @public
 */
export type AdvancedSecurityEnabledModeType =
  (typeof AdvancedSecurityEnabledModeType)[keyof typeof AdvancedSecurityEnabledModeType];

/**
 * @public
 * @enum
 */
export const AdvancedSecurityModeType = {
  AUDIT: "AUDIT",
  ENFORCED: "ENFORCED",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type AdvancedSecurityModeType = (typeof AdvancedSecurityModeType)[keyof typeof AdvancedSecurityModeType];

/**
 * @public
 * @enum
 */
export const AliasAttributeType = {
  EMAIL: "email",
  PHONE_NUMBER: "phone_number",
  PREFERRED_USERNAME: "preferred_username",
} as const;
/**
 * @public
 */
export type AliasAttributeType = (typeof AliasAttributeType)[keyof typeof AliasAttributeType];

/**
 * @public
 * @enum
 */
export const AuthFactorType = {
  EMAIL_OTP: "EMAIL_OTP",
  PASSWORD: "PASSWORD",
  SMS_OTP: "SMS_OTP",
  WEB_AUTHN: "WEB_AUTHN",
} as const;
/**
 * @public
 */
export type AuthFactorType = (typeof AuthFactorType)[keyof typeof AuthFactorType];

/**
 * @public
 * @enum
 */
export const AssetCategoryType = {
  AUTH_APP_GRAPHIC: "AUTH_APP_GRAPHIC",
  EMAIL_GRAPHIC: "EMAIL_GRAPHIC",
  FAVICON_ICO: "FAVICON_ICO",
  FAVICON_SVG: "FAVICON_SVG",
  FORM_BACKGROUND: "FORM_BACKGROUND",
  FORM_LOGO: "FORM_LOGO",
  IDP_BUTTON_ICON: "IDP_BUTTON_ICON",
  PAGE_BACKGROUND: "PAGE_BACKGROUND",
  PAGE_FOOTER_BACKGROUND: "PAGE_FOOTER_BACKGROUND",
  PAGE_FOOTER_LOGO: "PAGE_FOOTER_LOGO",
  PAGE_HEADER_BACKGROUND: "PAGE_HEADER_BACKGROUND",
  PAGE_HEADER_LOGO: "PAGE_HEADER_LOGO",
  PASSKEY_GRAPHIC: "PASSKEY_GRAPHIC",
  PASSWORD_GRAPHIC: "PASSWORD_GRAPHIC",
  SMS_GRAPHIC: "SMS_GRAPHIC",
} as const;
/**
 * @public
 */
export type AssetCategoryType = (typeof AssetCategoryType)[keyof typeof AssetCategoryType];

/**
 * @public
 * @enum
 */
export const AssetExtensionType = {
  ICO: "ICO",
  JPEG: "JPEG",
  PNG: "PNG",
  SVG: "SVG",
  WEBP: "WEBP",
} as const;
/**
 * @public
 */
export type AssetExtensionType = (typeof AssetExtensionType)[keyof typeof AssetExtensionType];

/**
 * @public
 * @enum
 */
export const ColorSchemeModeType = {
  DARK: "DARK",
  DYNAMIC: "DYNAMIC",
  LIGHT: "LIGHT",
} as const;
/**
 * @public
 */
export type ColorSchemeModeType = (typeof ColorSchemeModeType)[keyof typeof ColorSchemeModeType];

/**
 * @public
 * @enum
 */
export const VerifiedAttributeType = {
  EMAIL: "email",
  PHONE_NUMBER: "phone_number",
} as const;
/**
 * @public
 */
export type VerifiedAttributeType = (typeof VerifiedAttributeType)[keyof typeof VerifiedAttributeType];

/**
 * @public
 * @enum
 */
export const IdentityProviderTypeType = {
  Facebook: "Facebook",
  Google: "Google",
  LoginWithAmazon: "LoginWithAmazon",
  OIDC: "OIDC",
  SAML: "SAML",
  SignInWithApple: "SignInWithApple",
} as const;
/**
 * @public
 */
export type IdentityProviderTypeType = (typeof IdentityProviderTypeType)[keyof typeof IdentityProviderTypeType];

/**
 * @public
 * @enum
 */
export const TermsEnforcementType = {
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type TermsEnforcementType = (typeof TermsEnforcementType)[keyof typeof TermsEnforcementType];

/**
 * @public
 * @enum
 */
export const TermsSourceType = {
  LINK: "LINK",
} as const;
/**
 * @public
 */
export type TermsSourceType = (typeof TermsSourceType)[keyof typeof TermsSourceType];

/**
 * @public
 * @enum
 */
export const UserImportJobStatusType = {
  Created: "Created",
  Expired: "Expired",
  Failed: "Failed",
  InProgress: "InProgress",
  Pending: "Pending",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type UserImportJobStatusType = (typeof UserImportJobStatusType)[keyof typeof UserImportJobStatusType];

/**
 * @public
 * @enum
 */
export const DeletionProtectionType = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type DeletionProtectionType = (typeof DeletionProtectionType)[keyof typeof DeletionProtectionType];

/**
 * @public
 * @enum
 */
export const EmailSendingAccountType = {
  COGNITO_DEFAULT: "COGNITO_DEFAULT",
  DEVELOPER: "DEVELOPER",
} as const;
/**
 * @public
 */
export type EmailSendingAccountType = (typeof EmailSendingAccountType)[keyof typeof EmailSendingAccountType];

/**
 * @public
 * @enum
 */
export const CustomEmailSenderLambdaVersionType = {
  V1_0: "V1_0",
} as const;
/**
 * @public
 */
export type CustomEmailSenderLambdaVersionType =
  (typeof CustomEmailSenderLambdaVersionType)[keyof typeof CustomEmailSenderLambdaVersionType];

/**
 * @public
 * @enum
 */
export const CustomSMSSenderLambdaVersionType = {
  V1_0: "V1_0",
} as const;
/**
 * @public
 */
export type CustomSMSSenderLambdaVersionType =
  (typeof CustomSMSSenderLambdaVersionType)[keyof typeof CustomSMSSenderLambdaVersionType];

/**
 * @public
 * @enum
 */
export const PreTokenGenerationLambdaVersionType = {
  V1_0: "V1_0",
  V2_0: "V2_0",
  V3_0: "V3_0",
} as const;
/**
 * @public
 */
export type PreTokenGenerationLambdaVersionType =
  (typeof PreTokenGenerationLambdaVersionType)[keyof typeof PreTokenGenerationLambdaVersionType];

/**
 * @public
 * @enum
 */
export const UserPoolMfaType = {
  OFF: "OFF",
  ON: "ON",
  OPTIONAL: "OPTIONAL",
} as const;
/**
 * @public
 */
export type UserPoolMfaType = (typeof UserPoolMfaType)[keyof typeof UserPoolMfaType];

/**
 * @public
 * @enum
 */
export const UsernameAttributeType = {
  EMAIL: "email",
  PHONE_NUMBER: "phone_number",
} as const;
/**
 * @public
 */
export type UsernameAttributeType = (typeof UsernameAttributeType)[keyof typeof UsernameAttributeType];

/**
 * @public
 * @enum
 */
export const UserPoolTierType = {
  ESSENTIALS: "ESSENTIALS",
  LITE: "LITE",
  PLUS: "PLUS",
} as const;
/**
 * @public
 */
export type UserPoolTierType = (typeof UserPoolTierType)[keyof typeof UserPoolTierType];

/**
 * @public
 * @enum
 */
export const DefaultEmailOptionType = {
  CONFIRM_WITH_CODE: "CONFIRM_WITH_CODE",
  CONFIRM_WITH_LINK: "CONFIRM_WITH_LINK",
} as const;
/**
 * @public
 */
export type DefaultEmailOptionType = (typeof DefaultEmailOptionType)[keyof typeof DefaultEmailOptionType];

/**
 * @public
 * @enum
 */
export const StatusType = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * @public
 * @enum
 */
export const OAuthFlowType = {
  client_credentials: "client_credentials",
  code: "code",
  implicit: "implicit",
} as const;
/**
 * @public
 */
export type OAuthFlowType = (typeof OAuthFlowType)[keyof typeof OAuthFlowType];

/**
 * @public
 * @enum
 */
export const ExplicitAuthFlowsType = {
  ADMIN_NO_SRP_AUTH: "ADMIN_NO_SRP_AUTH",
  ALLOW_ADMIN_USER_PASSWORD_AUTH: "ALLOW_ADMIN_USER_PASSWORD_AUTH",
  ALLOW_CUSTOM_AUTH: "ALLOW_CUSTOM_AUTH",
  ALLOW_REFRESH_TOKEN_AUTH: "ALLOW_REFRESH_TOKEN_AUTH",
  ALLOW_USER_AUTH: "ALLOW_USER_AUTH",
  ALLOW_USER_PASSWORD_AUTH: "ALLOW_USER_PASSWORD_AUTH",
  ALLOW_USER_SRP_AUTH: "ALLOW_USER_SRP_AUTH",
  CUSTOM_AUTH_FLOW_ONLY: "CUSTOM_AUTH_FLOW_ONLY",
  USER_PASSWORD_AUTH: "USER_PASSWORD_AUTH",
} as const;
/**
 * @public
 */
export type ExplicitAuthFlowsType = (typeof ExplicitAuthFlowsType)[keyof typeof ExplicitAuthFlowsType];

/**
 * @public
 * @enum
 */
export const PreventUserExistenceErrorTypes = {
  ENABLED: "ENABLED",
  LEGACY: "LEGACY",
} as const;
/**
 * @public
 */
export type PreventUserExistenceErrorTypes =
  (typeof PreventUserExistenceErrorTypes)[keyof typeof PreventUserExistenceErrorTypes];

/**
 * @public
 * @enum
 */
export const FeatureType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

/**
 * @public
 * @enum
 */
export const TimeUnitsType = {
  DAYS: "days",
  HOURS: "hours",
  MINUTES: "minutes",
  SECONDS: "seconds",
} as const;
/**
 * @public
 */
export type TimeUnitsType = (typeof TimeUnitsType)[keyof typeof TimeUnitsType];

/**
 * @public
 * @enum
 */
export const CompromisedCredentialsEventActionType = {
  BLOCK: "BLOCK",
  NO_ACTION: "NO_ACTION",
} as const;
/**
 * @public
 */
export type CompromisedCredentialsEventActionType =
  (typeof CompromisedCredentialsEventActionType)[keyof typeof CompromisedCredentialsEventActionType];

/**
 * @public
 * @enum
 */
export const EventFilterType = {
  PASSWORD_CHANGE: "PASSWORD_CHANGE",
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
} as const;
/**
 * @public
 */
export type EventFilterType = (typeof EventFilterType)[keyof typeof EventFilterType];

/**
 * @public
 * @enum
 */
export const DomainStatusType = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DomainStatusType = (typeof DomainStatusType)[keyof typeof DomainStatusType];

/**
 * @public
 * @enum
 */
export const EventSourceName = {
  USER_AUTH_EVENTS: "userAuthEvents",
  USER_NOTIFICATION: "userNotification",
} as const;
/**
 * @public
 */
export type EventSourceName = (typeof EventSourceName)[keyof typeof EventSourceName];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const UserVerificationType = {
  PREFERRED: "preferred",
  REQUIRED: "required",
} as const;
/**
 * @public
 */
export type UserVerificationType = (typeof UserVerificationType)[keyof typeof UserVerificationType];

/**
 * @public
 * @enum
 */
export const VerifySoftwareTokenResponseType = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type VerifySoftwareTokenResponseType =
  (typeof VerifySoftwareTokenResponseType)[keyof typeof VerifySoftwareTokenResponseType];
