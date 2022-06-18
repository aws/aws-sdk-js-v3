// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { LambdaConfigType } from "./models_0";

export enum RecoveryOptionNameType {
  ADMIN_ONLY = "admin_only",
  VERIFIED_EMAIL = "verified_email",
  VERIFIED_PHONE_NUMBER = "verified_phone_number",
}

export enum AccountTakeoverEventActionType {
  BLOCK = "BLOCK",
  MFA_IF_CONFIGURED = "MFA_IF_CONFIGURED",
  MFA_REQUIRED = "MFA_REQUIRED",
  NO_ACTION = "NO_ACTION",
}

export enum AttributeDataType {
  BOOLEAN = "Boolean",
  DATETIME = "DateTime",
  NUMBER = "Number",
  STRING = "String",
}

export enum MessageActionType {
  RESEND = "RESEND",
  SUPPRESS = "SUPPRESS",
}

export enum UserStatusType {
  ARCHIVED = "ARCHIVED",
  COMPROMISED = "COMPROMISED",
  CONFIRMED = "CONFIRMED",
  FORCE_CHANGE_PASSWORD = "FORCE_CHANGE_PASSWORD",
  RESET_REQUIRED = "RESET_REQUIRED",
  UNCONFIRMED = "UNCONFIRMED",
  UNKNOWN = "UNKNOWN",
}

export enum AuthFlowType {
  ADMIN_NO_SRP_AUTH = "ADMIN_NO_SRP_AUTH",
  ADMIN_USER_PASSWORD_AUTH = "ADMIN_USER_PASSWORD_AUTH",
  CUSTOM_AUTH = "CUSTOM_AUTH",
  REFRESH_TOKEN = "REFRESH_TOKEN",
  REFRESH_TOKEN_AUTH = "REFRESH_TOKEN_AUTH",
  USER_PASSWORD_AUTH = "USER_PASSWORD_AUTH",
  USER_SRP_AUTH = "USER_SRP_AUTH",
}

export enum ChallengeNameType {
  ADMIN_NO_SRP_AUTH = "ADMIN_NO_SRP_AUTH",
  CUSTOM_CHALLENGE = "CUSTOM_CHALLENGE",
  DEVICE_PASSWORD_VERIFIER = "DEVICE_PASSWORD_VERIFIER",
  DEVICE_SRP_AUTH = "DEVICE_SRP_AUTH",
  MFA_SETUP = "MFA_SETUP",
  NEW_PASSWORD_REQUIRED = "NEW_PASSWORD_REQUIRED",
  PASSWORD_VERIFIER = "PASSWORD_VERIFIER",
  SELECT_MFA_TYPE = "SELECT_MFA_TYPE",
  SMS_MFA = "SMS_MFA",
  SOFTWARE_TOKEN_MFA = "SOFTWARE_TOKEN_MFA",
}

export enum ChallengeName {
  Mfa = "Mfa",
  Password = "Password",
}

export enum ChallengeResponse {
  Failure = "Failure",
  Success = "Success",
}

export enum FeedbackValueType {
  INVALID = "Invalid",
  VALID = "Valid",
}

export enum EventResponseType {
  Failure = "Failure",
  Success = "Success",
}

export enum RiskDecisionType {
  AccountTakeover = "AccountTakeover",
  Block = "Block",
  NoRisk = "NoRisk",
}

export enum RiskLevelType {
  High = "High",
  Low = "Low",
  Medium = "Medium",
}

export enum EventType {
  ForgotPassword = "ForgotPassword",
  SignIn = "SignIn",
  SignUp = "SignUp",
}

export enum DeviceRememberedStatusType {
  NOT_REMEMBERED = "not_remembered",
  REMEMBERED = "remembered",
}

export enum AdvancedSecurityModeType {
  AUDIT = "AUDIT",
  ENFORCED = "ENFORCED",
  OFF = "OFF",
}

export enum IdentityProviderTypeType {
  Facebook = "Facebook",
  Google = "Google",
  LoginWithAmazon = "LoginWithAmazon",
  OIDC = "OIDC",
  SAML = "SAML",
  SignInWithApple = "SignInWithApple",
}

export enum UserImportJobStatusType {
  Created = "Created",
  Expired = "Expired",
  Failed = "Failed",
  InProgress = "InProgress",
  Pending = "Pending",
  Stopped = "Stopped",
  Stopping = "Stopping",
  Succeeded = "Succeeded",
}

export enum EmailSendingAccountType {
  COGNITO_DEFAULT = "COGNITO_DEFAULT",
  DEVELOPER = "DEVELOPER",
}

export enum CustomEmailSenderLambdaVersionType {
  V1_0 = "V1_0",
}

export enum CustomSMSSenderLambdaVersionType {
  V1_0 = "V1_0",
}

export enum UserPoolMfaType {
  OFF = "OFF",
  ON = "ON",
  OPTIONAL = "OPTIONAL",
}

export enum DefaultEmailOptionType {
  CONFIRM_WITH_CODE = "CONFIRM_WITH_CODE",
  CONFIRM_WITH_LINK = "CONFIRM_WITH_LINK",
}

export enum StatusType {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

export enum PreventUserExistenceErrorTypes {
  ENABLED = "ENABLED",
  LEGACY = "LEGACY",
}

export enum TimeUnitsType {
  DAYS = "days",
  HOURS = "hours",
  MINUTES = "minutes",
  SECONDS = "seconds",
}

export enum CompromisedCredentialsEventActionType {
  BLOCK = "BLOCK",
  NO_ACTION = "NO_ACTION",
}

export enum DomainStatusType {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>A container for IdP details.</p>
 */
export interface ProviderDescription {
  /**
   * <p>The IdP name.</p>
   */
  ProviderName?: string;

  /**
   * <p>The IdP type.</p>
   */
  ProviderType?: IdentityProviderTypeType | string;

  /**
   * <p>The date the provider was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the provider was added to the user pool.</p>
   */
  CreationDate?: Date;
}

export namespace ProviderDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProviderDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The description of the user pool client.</p>
 */
export interface UserPoolClientDescription {
  /**
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId?: string;

  /**
   * <p>The user pool ID for the user pool where you want to describe the user pool
   *             client.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The client name from the user pool client description.</p>
   */
  ClientName?: string;
}

export namespace UserPoolClientDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserPoolClientDescription): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
}

/**
 * <p>A user pool description.</p>
 */
export interface UserPoolDescriptionType {
  /**
   * <p>The ID in a user pool description.</p>
   */
  Id?: string;

  /**
   * <p>The name in a user pool description.</p>
   */
  Name?: string;

  /**
   * <p>The Lambda configuration information in a user pool description.</p>
   */
  LambdaConfig?: LambdaConfigType;

  /**
   * <p>The user pool status in a user pool description.</p>
   */
  Status?: StatusType | string;

  /**
   * <p>The date the user pool description was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the user pool description was created.</p>
   */
  CreationDate?: Date;
}

export namespace UserPoolDescriptionType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserPoolDescriptionType): any => ({
    ...obj,
  });
}

export enum VerifySoftwareTokenResponseType {
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}
