// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AmplifyBackendServiceException as __BaseException } from "./AmplifyBackendServiceException";

/**
 * @public
 * @enum
 */
export const AdditionalConstraintsElement = {
  REQUIRE_DIGIT: "REQUIRE_DIGIT",
  REQUIRE_LOWERCASE: "REQUIRE_LOWERCASE",
  REQUIRE_SYMBOL: "REQUIRE_SYMBOL",
  REQUIRE_UPPERCASE: "REQUIRE_UPPERCASE",
} as const;

/**
 * @public
 */
export type AdditionalConstraintsElement =
  (typeof AdditionalConstraintsElement)[keyof typeof AdditionalConstraintsElement];

/**
 * @public
 * <p>An error returned if a request is not formed properly.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>An error message to inform that the request failed.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request body for CloneBackend.</p>
 */
export interface CloneBackendRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The name of the destination backend environment to be created.</p>
   */
  TargetEnvironmentName: string | undefined;
}

/**
 * @public
 */
export interface CloneBackendResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>An error returned if there's a temporary issue with the service.</p>
 */
export class GatewayTimeoutException extends __BaseException {
  readonly name: "GatewayTimeoutException" = "GatewayTimeoutException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>An error message to inform that the request failed.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GatewayTimeoutException, __BaseException>) {
    super({
      name: "GatewayTimeoutException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, GatewayTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>An error returned when a specific resource type is not found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>An error message to inform that the request has failed.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The type of resource that is not found.</p>
   */
  ResourceType?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 * <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The type of limit that was exceeded.</p>
   */
  LimitType?: string;

  /**
   * @public
   * <p>An error message to inform that the request has failed.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.LimitType = opts.LimitType;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Defines the resource configuration for the data model in your Amplify project.</p>
 */
export interface ResourceConfig {}

/**
 * @public
 * <p>The request body for CreateBackend.</p>
 */
export interface CreateBackendRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The resource configuration for creating a backend.</p>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface CreateBackendResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * @enum
 */
export const Mode = {
  AMAZON_COGNITO_USER_POOLS: "AMAZON_COGNITO_USER_POOLS",
  API_KEY: "API_KEY",
  AWS_IAM: "AWS_IAM",
  OPENID_CONNECT: "OPENID_CONNECT",
} as const;

/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * @public
 * <p>The authentication settings for accessing provisioned data models in your Amplify project.</p>
 */
export interface BackendAPIAppSyncAuthSettings {
  /**
   * @public
   * <p>The Amazon Cognito user pool ID, if Amazon Cognito was used as an authentication setting to access your data models.</p>
   */
  CognitoUserPoolId?: string;

  /**
   * @public
   * <p>The API key description for API_KEY, if it was used as an authentication mechanism to access your data models.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The API key expiration time for API_KEY, if it was used as an authentication mechanism to access your data models.</p>
   */
  ExpirationTime?: number;

  /**
   * @public
   * <p>The expiry time for the OpenID authentication mechanism.</p>
   */
  OpenIDAuthTTL?: string;

  /**
   * @public
   * <p>The clientID for openID, if openID was used as an authentication setting to access your data models.</p>
   */
  OpenIDClientId?: string;

  /**
   * @public
   * <p>The expiry time for the OpenID authentication mechanism.</p>
   */
  OpenIDIatTTL?: string;

  /**
   * @public
   * <p>The openID issuer URL, if openID was used as an authentication setting to access your data models.</p>
   */
  OpenIDIssueURL?: string;

  /**
   * @public
   * <p>The OpenID provider name, if OpenID was used as an authentication mechanism to access your data models.</p>
   */
  OpenIDProviderName?: string;
}

/**
 * @public
 * <p>Describes the auth types for your configured data models.</p>
 */
export interface BackendAPIAuthType {
  /**
   * @public
   * <p>Describes the authentication mode.</p>
   */
  Mode?: Mode | string;

  /**
   * @public
   * <p>Describes settings for the authentication mode.</p>
   */
  Settings?: BackendAPIAppSyncAuthSettings;
}

/**
 * @public
 * @enum
 */
export const ResolutionStrategy = {
  AUTOMERGE: "AUTOMERGE",
  LAMBDA: "LAMBDA",
  NONE: "NONE",
  OPTIMISTIC_CONCURRENCY: "OPTIMISTIC_CONCURRENCY",
} as const;

/**
 * @public
 */
export type ResolutionStrategy = (typeof ResolutionStrategy)[keyof typeof ResolutionStrategy];

/**
 * @public
 * <p>Describes the conflict resolution configuration for your data model configured in your Amplify project.</p>
 */
export interface BackendAPIConflictResolution {
  /**
   * @public
   * <p>The strategy for conflict resolution.</p>
   */
  ResolutionStrategy?: ResolutionStrategy | string;
}

/**
 * @public
 * <p>The resource config for the data model, configured as a part of the Amplify project.</p>
 */
export interface BackendAPIResourceConfig {
  /**
   * @public
   * <p>Additional authentication methods used to interact with your data models.</p>
   */
  AdditionalAuthTypes?: BackendAPIAuthType[];

  /**
   * @public
   * <p>The API name used to interact with the data model, configured as a part of your Amplify project.</p>
   */
  ApiName?: string;

  /**
   * @public
   * <p>The conflict resolution strategy for your data stored in the data models.</p>
   */
  ConflictResolution?: BackendAPIConflictResolution;

  /**
   * @public
   * <p>The default authentication type for interacting with the configured data models in your Amplify project.</p>
   */
  DefaultAuthType?: BackendAPIAuthType;

  /**
   * @public
   * <p>The service used to provision and interact with the data model.</p>
   */
  Service?: string;

  /**
   * @public
   * <p>The definition of the data model in the annotated transform of the GraphQL schema.</p>
   */
  TransformSchema?: string;
}

/**
 * @public
 * <p>The request body for CreateBackendAPI.</p>
 */
export interface CreateBackendAPIRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The resource configuration for this request.</p>
   */
  ResourceConfig: BackendAPIResourceConfig | undefined;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendAPIResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * @enum
 */
export const AuthResources = {
  IDENTITY_POOL_AND_USER_POOL: "IDENTITY_POOL_AND_USER_POOL",
  USER_POOL_ONLY: "USER_POOL_ONLY",
} as const;

/**
 * @public
 */
export type AuthResources = (typeof AuthResources)[keyof typeof AuthResources];

/**
 * @public
 * <p>Describes authorization configurations for the auth resources, configured as a part of your Amplify project.</p>
 */
export interface CreateBackendAuthIdentityPoolConfig {
  /**
   * @public
   * <p>Name of the Amazon Cognito identity pool used for authorization.</p>
   */
  IdentityPoolName: string | undefined;

  /**
   * @public
   * <p>Set to true or false based on whether you want to enable guest authorization to your Amplify app.</p>
   */
  UnauthenticatedLogin: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const Service = {
  COGNITO: "COGNITO",
} as const;

/**
 * @public
 */
export type Service = (typeof Service)[keyof typeof Service];

/**
 * @public
 * @enum
 */
export const DeliveryMethod = {
  EMAIL: "EMAIL",
  SMS: "SMS",
} as const;

/**
 * @public
 */
export type DeliveryMethod = (typeof DeliveryMethod)[keyof typeof DeliveryMethod];

/**
 * @public
 * <p>The configuration for the email sent when an app user forgets their password.</p>
 */
export interface EmailSettings {
  /**
   * @public
   * <p>The contents of the email message.</p>
   */
  EmailMessage?: string;

  /**
   * @public
   * <p>The contents of the subject line of the email message.</p>
   */
  EmailSubject?: string;
}

/**
 * @public
 * <p>SMS settings for authentication.</p>
 */
export interface SmsSettings {
  /**
   * @public
   * <p>The contents of the SMS message.</p>
   */
  SmsMessage?: string;
}

/**
 * @public
 * <p><b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app.</p>
 */
export interface CreateBackendAuthForgotPasswordConfig {
  /**
   * @public
   * <p><b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users who want to recover their password.</p>
   */
  DeliveryMethod: DeliveryMethod | string | undefined;

  /**
   * @public
   * <p><b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.</p>
   */
  EmailSettings?: EmailSettings;

  /**
   * @public
   * <p><b>(DEPRECATED)</b> The configuration for the SMS message sent when an app user forgets their password.</p>
   */
  SmsSettings?: SmsSettings;
}

/**
 * @public
 * @enum
 */
export const MFAMode = {
  OFF: "OFF",
  ON: "ON",
  OPTIONAL: "OPTIONAL",
} as const;

/**
 * @public
 */
export type MFAMode = (typeof MFAMode)[keyof typeof MFAMode];

/**
 * @public
 * @enum
 */
export const MfaTypesElement = {
  SMS: "SMS",
  TOTP: "TOTP",
} as const;

/**
 * @public
 */
export type MfaTypesElement = (typeof MfaTypesElement)[keyof typeof MfaTypesElement];

/**
 * @public
 * <p>The settings of your MFA configuration for the backend of your Amplify project.</p>
 */
export interface Settings {
  /**
   * @public
   * <p>The supported MFA types.</p>
   */
  MfaTypes?: (MfaTypesElement | string)[];

  /**
   * @public
   * <p>The body of the SMS message.</p>
   */
  SmsMessage?: string;
}

/**
 * @public
 * <p>Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
 */
export interface CreateBackendAuthMFAConfig {
  /**
   * @public
   * <p>Describes whether MFA should be [ON, OFF, or OPTIONAL] for authentication in your Amplify project.</p>
   */
  MFAMode: MFAMode | string | undefined;

  /**
   * @public
   * <p>Describes the configuration settings and methods for your Amplify app users to use MFA.</p>
   */
  Settings?: Settings;
}

/**
 * @public
 * @enum
 */
export const OAuthGrantType = {
  CODE: "CODE",
  IMPLICIT: "IMPLICIT",
} as const;

/**
 * @public
 */
export type OAuthGrantType = (typeof OAuthGrantType)[keyof typeof OAuthGrantType];

/**
 * @public
 * @enum
 */
export const OAuthScopesElement = {
  AWS_COGNITO_SIGNIN_USER_ADMIN: "AWS_COGNITO_SIGNIN_USER_ADMIN",
  EMAIL: "EMAIL",
  OPENID: "OPENID",
  PHONE: "PHONE",
  PROFILE: "PROFILE",
} as const;

/**
 * @public
 */
export type OAuthScopesElement = (typeof OAuthScopesElement)[keyof typeof OAuthScopesElement];

/**
 * @public
 * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
 */
export interface BackendAuthSocialProviderConfig {
  /**
   * @public
   * <p>Describes the client_id, which can be obtained from the third-party social federation provider.</p>
   */
  ClientId?: string;

  /**
   * @public
   * <p>Describes the client_secret, which can be obtained from third-party social federation providers.</p>
   */
  ClientSecret?: string;
}

/**
 * @public
 * <p>Describes Apple social federation configurations for allowing your app users to sign in using OAuth.</p>
 */
export interface BackendAuthAppleProviderConfig {
  /**
   * @public
   * <p>Describes the client_id (also called Services ID) that comes from Apple.</p>
   */
  ClientId?: string;

  /**
   * @public
   * <p>Describes the key_id that comes from Apple.</p>
   */
  KeyId?: string;

  /**
   * @public
   * <p>Describes the private_key that comes from Apple.</p>
   */
  PrivateKey?: string;

  /**
   * @public
   * <p>Describes the team_id that comes from Apple.</p>
   */
  TeamId?: string;
}

/**
 * @public
 * <p>The settings for using the social identity providers for access to your Amplify app.</p>
 */
export interface SocialProviderSettings {
  /**
   * @public
   * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
   */
  Facebook?: BackendAuthSocialProviderConfig;

  /**
   * @public
   * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
   */
  Google?: BackendAuthSocialProviderConfig;

  /**
   * @public
   * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
   */
  LoginWithAmazon?: BackendAuthSocialProviderConfig;

  /**
   * @public
   * <p>Describes Apple social federation configurations for allowing your app users to sign in using OAuth.</p>
   */
  SignInWithApple?: BackendAuthAppleProviderConfig;
}

/**
 * @public
 * <p>Creates the OAuth configuration for your Amplify project.</p>
 */
export interface CreateBackendAuthOAuthConfig {
  /**
   * @public
   * <p>The domain prefix for your Amplify app.</p>
   */
  DomainPrefix?: string;

  /**
   * @public
   * <p>The OAuth grant type that you use to allow app users to authenticate from your Amplify app.</p>
   */
  OAuthGrantType: OAuthGrantType | string | undefined;

  /**
   * @public
   * <p>List of OAuth-related flows used to allow your app users to authenticate from your Amplify app.</p>
   */
  OAuthScopes: (OAuthScopesElement | string)[] | undefined;

  /**
   * @public
   * <p>The redirected URI for signing in to your Amplify app.</p>
   */
  RedirectSignInURIs: string[] | undefined;

  /**
   * @public
   * <p>Redirect URLs that OAuth uses when a user signs out of an Amplify app.</p>
   */
  RedirectSignOutURIs: string[] | undefined;

  /**
   * @public
   * <p>The settings for using social providers to access your Amplify app.</p>
   */
  SocialProviderSettings?: SocialProviderSettings;
}

/**
 * @public
 * <p>The password policy configuration for the backend to your Amplify project.</p>
 */
export interface CreateBackendAuthPasswordPolicyConfig {
  /**
   * @public
   * <p>Additional constraints for the password used to access the backend of your Amplify project.</p>
   */
  AdditionalConstraints?: (AdditionalConstraintsElement | string)[];

  /**
   * @public
   * <p>The minimum length of the password used to access the backend of your Amplify project.</p>
   */
  MinimumLength: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RequiredSignUpAttributesElement = {
  ADDRESS: "ADDRESS",
  BIRTHDATE: "BIRTHDATE",
  EMAIL: "EMAIL",
  FAMILY_NAME: "FAMILY_NAME",
  GENDER: "GENDER",
  GIVEN_NAME: "GIVEN_NAME",
  LOCALE: "LOCALE",
  MIDDLE_NAME: "MIDDLE_NAME",
  NAME: "NAME",
  NICKNAME: "NICKNAME",
  PHONE_NUMBER: "PHONE_NUMBER",
  PICTURE: "PICTURE",
  PREFERRED_USERNAME: "PREFERRED_USERNAME",
  PROFILE: "PROFILE",
  UPDATED_AT: "UPDATED_AT",
  WEBSITE: "WEBSITE",
  ZONE_INFO: "ZONE_INFO",
} as const;

/**
 * @public
 */
export type RequiredSignUpAttributesElement =
  (typeof RequiredSignUpAttributesElement)[keyof typeof RequiredSignUpAttributesElement];

/**
 * @public
 * @enum
 */
export const SignInMethod = {
  EMAIL: "EMAIL",
  EMAIL_AND_PHONE_NUMBER: "EMAIL_AND_PHONE_NUMBER",
  PHONE_NUMBER: "PHONE_NUMBER",
  USERNAME: "USERNAME",
} as const;

/**
 * @public
 */
export type SignInMethod = (typeof SignInMethod)[keyof typeof SignInMethod];

/**
 * @public
 * <p>Creates an email or SMS verification message for the auth resource configured for your Amplify project.</p>
 */
export interface CreateBackendAuthVerificationMessageConfig {
  /**
   * @public
   * <p>The type of verification message to send.</p>
   */
  DeliveryMethod: DeliveryMethod | string | undefined;

  /**
   * @public
   * <p>The settings for the email message.</p>
   */
  EmailSettings?: EmailSettings;

  /**
   * @public
   * <p>The settings for the SMS message.</p>
   */
  SmsSettings?: SmsSettings;
}

/**
 * @public
 * <p>Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.</p>
 */
export interface CreateBackendAuthUserPoolConfig {
  /**
   * @public
   * <p><b>(DEPRECATED)</b> Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  ForgotPassword?: CreateBackendAuthForgotPasswordConfig;

  /**
   * @public
   * <p>Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
   */
  Mfa?: CreateBackendAuthMFAConfig;

  /**
   * @public
   * <p>Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  OAuth?: CreateBackendAuthOAuthConfig;

  /**
   * @public
   * <p>Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  PasswordPolicy?: CreateBackendAuthPasswordPolicyConfig;

  /**
   * @public
   * <p>The required attributes to sign up new users in the user pool.</p>
   */
  RequiredSignUpAttributes: (RequiredSignUpAttributesElement | string)[] | undefined;

  /**
   * @public
   * <p>Describes the sign-in methods that your Amplify app users use to log in using the Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  SignInMethod: SignInMethod | string | undefined;

  /**
   * @public
   * <p>The Amazon Cognito user pool name.</p>
   */
  UserPoolName: string | undefined;

  /**
   * @public
   * <p>Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  VerificationMessage?: CreateBackendAuthVerificationMessageConfig;
}

/**
 * @public
 * <p>Defines the resource configuration when creating an auth resource in your Amplify project.</p>
 */
export interface CreateBackendAuthResourceConfig {
  /**
   * @public
   * <p>Defines whether you want to configure only authentication or both authentication and authorization settings.</p>
   */
  AuthResources: AuthResources | string | undefined;

  /**
   * @public
   * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.</p>
   */
  IdentityPoolConfigs?: CreateBackendAuthIdentityPoolConfig;

  /**
   * @public
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   */
  Service: Service | string | undefined;

  /**
   * @public
   * <p>Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.</p>
   */
  UserPoolConfigs: CreateBackendAuthUserPoolConfig | undefined;
}

/**
 * @public
 * <p>The request body for CreateBackendAuth.</p>
 */
export interface CreateBackendAuthRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The resource configuration for this request object.</p>
   */
  ResourceConfig: CreateBackendAuthResourceConfig | undefined;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendAuthResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The request body for CreateBackendConfig.</p>
 */
export interface CreateBackendConfigRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The app ID for the backend manager.</p>
   */
  BackendManagerAppId?: string;
}

/**
 * @public
 */
export interface CreateBackendConfigResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * @enum
 */
export const AuthenticatedElement = {
  CREATE_AND_UPDATE: "CREATE_AND_UPDATE",
  DELETE: "DELETE",
  READ: "READ",
} as const;

/**
 * @public
 */
export type AuthenticatedElement = (typeof AuthenticatedElement)[keyof typeof AuthenticatedElement];

/**
 * @public
 * @enum
 */
export const UnAuthenticatedElement = {
  CREATE_AND_UPDATE: "CREATE_AND_UPDATE",
  DELETE: "DELETE",
  READ: "READ",
} as const;

/**
 * @public
 */
export type UnAuthenticatedElement = (typeof UnAuthenticatedElement)[keyof typeof UnAuthenticatedElement];

/**
 * @public
 * <p>Describes the read, write, and delete permissions users have against your storage S3 bucket.</p>
 */
export interface BackendStoragePermissions {
  /**
   * @public
   * <p>Lists all authenticated user read, write, and delete permissions for your S3 bucket.</p>
   */
  Authenticated: (AuthenticatedElement | string)[] | undefined;

  /**
   * @public
   * <p>Lists all unauthenticated user read, write, and delete permissions for your S3 bucket.</p>
   */
  UnAuthenticated?: (UnAuthenticatedElement | string)[];
}

/**
 * @public
 * @enum
 */
export const ServiceName = {
  S3: "S3",
} as const;

/**
 * @public
 */
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName];

/**
 * @public
 * <p>The resource configuration for creating backend storage.</p>
 */
export interface CreateBackendStorageResourceConfig {
  /**
   * @public
   * <p>The name of the S3 bucket.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>The authorization configuration for the storage S3 bucket.</p>
   */
  Permissions: BackendStoragePermissions | undefined;

  /**
   * @public
   * <p>The name of the storage service.</p>
   */
  ServiceName: ServiceName | string | undefined;
}

/**
 * @public
 * <p>The request body for CreateBackendStorage.</p>
 */
export interface CreateBackendStorageRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The resource configuration for creating backend storage.</p>
   */
  ResourceConfig: CreateBackendStorageResourceConfig | undefined;

  /**
   * @public
   * <p>The name of the storage resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendStorageResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 */
export interface CreateTokenRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;
}

/**
 * @public
 */
export interface CreateTokenResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>One-time challenge code for authenticating into the Amplify Admin UI.</p>
   */
  ChallengeCode?: string;

  /**
   * @public
   * <p>A unique ID provided when creating a new challenge token.</p>
   */
  SessionId?: string;

  /**
   * @public
   * <p>The expiry time for the one-time generated token code.</p>
   */
  Ttl?: string;
}

/**
 * @public
 */
export interface DeleteBackendRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The request body for DeleteBackendAPI.</p>
 */
export interface DeleteBackendAPIRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>Defines the resource configuration for the data model in your Amplify project.</p>
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendAPIResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The request body for DeleteBackendAuth.</p>
 */
export interface DeleteBackendAuthRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendAuthResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The request body for DeleteBackendStorage.</p>
 */
export interface DeleteBackendStorageRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The name of the storage resource.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The name of the storage service.</p>
   */
  ServiceName: ServiceName | string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendStorageResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 */
export interface DeleteTokenRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTokenResponse {
  /**
   * @public
   * <p>Indicates whether the request succeeded or failed.</p>
   */
  IsSuccess?: boolean;
}

/**
 * @public
 * <p>The request body for GenerateBackendAPIModels.</p>
 */
export interface GenerateBackendAPIModelsRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GenerateBackendAPIModelsResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The request body for GetBackend.</p>
 */
export interface GetBackendRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;
}

/**
 * @public
 */
export interface GetBackendResponse {
  /**
   * @public
   * <p>A stringified version of the cli.json file for your Amplify project.</p>
   */
  AmplifyFeatureFlags?: string;

  /**
   * @public
   * <p>A stringified version of the current configs for your Amplify project.</p>
   */
  AmplifyMetaConfig?: string;

  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the app.</p>
   */
  AppName?: string;

  /**
   * @public
   * <p>A list of backend environments in an array.</p>
   */
  BackendEnvironmentList?: string[];

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request failed, this is the returned error.</p>
   */
  Error?: string;
}

/**
 * @public
 * <p>The request body for GetBackendAPI.</p>
 */
export interface GetBackendAPIRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>Defines the resource configuration for the data model in your Amplify project.</p>
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GetBackendAPIResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The resource configuration for this response object.</p>
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 * <p>The request body for GetBackendAPIModels.</p>
 */
export interface GetBackendAPIModelsRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  LATEST: "LATEST",
  STALE: "STALE",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface GetBackendAPIModelsResponse {
  /**
   * @public
   * <p>Stringified JSON of the datastore model.</p>
   */
  Models?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: Status | string;

  /**
   * @public
   * <p>Stringified JSON of the model introspection schema for an existing backend API resource.</p>
   */
  ModelIntrospectionSchema?: string;
}

/**
 * @public
 * <p>The request body for GetBackendAuth.</p>
 */
export interface GetBackendAuthRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GetBackendAuthResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The resource configuration for authorization requests to the backend of your Amplify project.</p>
   */
  ResourceConfig?: CreateBackendAuthResourceConfig;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface GetBackendJobRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetBackendJobResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>The time when the job was created.</p>
   */
  CreateTime?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The time when the job was last updated.</p>
   */
  UpdateTime?: string;
}

/**
 * @public
 * <p>The request body for GetBackendStorage.</p>
 */
export interface GetBackendStorageRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The name of the storage resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 * <p>The details for a backend storage resource.</p>
 */
export interface GetBackendStorageResourceConfig {
  /**
   * @public
   * <p>The name of the S3 bucket.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>Returns True if the storage resource has been imported.</p>
   */
  Imported: boolean | undefined;

  /**
   * @public
   * <p>The authorization configuration for the storage S3 bucket.</p>
   */
  Permissions?: BackendStoragePermissions;

  /**
   * @public
   * <p>The name of the storage service.</p>
   */
  ServiceName: ServiceName | string | undefined;
}

/**
 * @public
 */
export interface GetBackendStorageResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>The resource configuration for the backend storage resource.</p>
   */
  ResourceConfig?: GetBackendStorageResourceConfig;

  /**
   * @public
   * <p>The name of the storage resource.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface GetTokenRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface GetTokenResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The one-time challenge code for authenticating into the Amplify Admin UI.</p>
   */
  ChallengeCode?: string;

  /**
   * @public
   * <p>A unique ID provided when creating a new challenge token.</p>
   */
  SessionId?: string;

  /**
   * @public
   * <p>The expiry time for the one-time generated token code.</p>
   */
  Ttl?: string;
}

/**
 * @public
 * <p>The request body for ImportBackendAuth.</p>
 */
export interface ImportBackendAuthRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Cognito identity pool.</p>
   */
  IdentityPoolId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Cognito native client.</p>
   */
  NativeClientId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Cognito user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Cognito web client.</p>
   */
  WebClientId: string | undefined;
}

/**
 * @public
 */
export interface ImportBackendAuthResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The request body for ImportBackendStorage.</p>
 */
export interface ImportBackendStorageRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The name of the S3 bucket.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>The name of the storage service.</p>
   */
  ServiceName: ServiceName | string | undefined;
}

/**
 * @public
 */
export interface ImportBackendStorageResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The request body for ListBackendJobs.</p>
 */
export interface ListBackendJobsRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The maximum number of results that you want in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Filters the list of response objects to include only those with the specified operation name.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>Filters the list of response objects to include only those with the specified status.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The response object for this operation.</p>
 */
export interface BackendJobRespObj {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The time when the job was created.</p>
   */
  CreateTime?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The time when the job was last updated.</p>
   */
  UpdateTime?: string;
}

/**
 * @public
 */
export interface ListBackendJobsResponse {
  /**
   * @public
   * <p>An array of jobs and their properties.</p>
   */
  Jobs?: BackendJobRespObj[];

  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The request body for S3Buckets.</p>
 */
export interface ListS3BucketsRequest {
  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the metadata of the S3 bucket.</p>
 */
export interface S3BucketInfo {
  /**
   * @public
   * <p>The creation date of the S3 bucket.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The name of the S3 bucket.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListS3BucketsResponse {
  /**
   * @public
   * <p>The list of S3 buckets.</p>
   */
  Buckets?: S3BucketInfo[];

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The request body for RemoveAllBackends.</p>
 */
export interface RemoveAllBackendsRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>Cleans up the Amplify Console app if this value is set to true.</p>
   */
  CleanAmplifyApp?: boolean;
}

/**
 * @public
 */
export interface RemoveAllBackendsResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 */
export interface RemoveBackendConfigRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;
}

/**
 * @public
 */
export interface RemoveBackendConfigResponse {
  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;
}

/**
 * @public
 * <p>The request body for UpdateBackendAPI.</p>
 */
export interface UpdateBackendAPIRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>Defines the resource configuration for the data model in your Amplify project.</p>
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBackendAPIResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.</p>
 */
export interface UpdateBackendAuthIdentityPoolConfig {
  /**
   * @public
   * <p>A boolean value that can be set to allow or disallow guest-level authorization into your Amplify app.</p>
   */
  UnauthenticatedLogin?: boolean;
}

/**
 * @public
 * <p><b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app.</p>
 */
export interface UpdateBackendAuthForgotPasswordConfig {
  /**
   * @public
   * <p><b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users that want to recover their password.</p>
   */
  DeliveryMethod?: DeliveryMethod | string;

  /**
   * @public
   * <p><b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.</p>
   */
  EmailSettings?: EmailSettings;

  /**
   * @public
   * <p><b>(DEPRECATED)</b> The configuration for the SMS message sent when an Amplify app user forgets their password.</p>
   */
  SmsSettings?: SmsSettings;
}

/**
 * @public
 * <p>Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.</p>
 */
export interface UpdateBackendAuthMFAConfig {
  /**
   * @public
   * <p>The MFA mode for the backend of your Amplify project.</p>
   */
  MFAMode?: MFAMode | string;

  /**
   * @public
   * <p>The settings of your MFA configuration for the backend of your Amplify project.</p>
   */
  Settings?: Settings;
}

/**
 * @public
 * <p>The OAuth configurations for authenticating users into your Amplify app.</p>
 */
export interface UpdateBackendAuthOAuthConfig {
  /**
   * @public
   * <p>The Amazon Cognito domain prefix used to create a hosted UI for authentication.</p>
   */
  DomainPrefix?: string;

  /**
   * @public
   * <p>The OAuth grant type to allow app users to authenticate from your Amplify app.</p>
   */
  OAuthGrantType?: OAuthGrantType | string;

  /**
   * @public
   * <p>The list of OAuth-related flows that can allow users to authenticate from your Amplify app.</p>
   */
  OAuthScopes?: (OAuthScopesElement | string)[];

  /**
   * @public
   * <p>Redirect URLs that OAuth uses when a user signs in to an Amplify app.</p>
   */
  RedirectSignInURIs?: string[];

  /**
   * @public
   * <p>Redirect URLs that OAuth uses when a user signs out of an Amplify app.</p>
   */
  RedirectSignOutURIs?: string[];

  /**
   * @public
   * <p>Describes third-party social federation configurations for allowing your users to sign in with OAuth.</p>
   */
  SocialProviderSettings?: SocialProviderSettings;
}

/**
 * @public
 * <p>Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
 */
export interface UpdateBackendAuthPasswordPolicyConfig {
  /**
   * @public
   * <p>Describes additional constraints on password requirements to sign in to the auth resource, configured as a part of your Amplify project.</p>
   */
  AdditionalConstraints?: (AdditionalConstraintsElement | string)[];

  /**
   * @public
   * <p>Describes the minimum length of the password required to sign in to the auth resource, configured as a part of your Amplify project.</p>
   */
  MinimumLength?: number;
}

/**
 * @public
 * <p>Updates the configuration of the email or SMS message for the auth resource configured for your Amplify project.</p>
 */
export interface UpdateBackendAuthVerificationMessageConfig {
  /**
   * @public
   * <p>The type of verification message to send.</p>
   */
  DeliveryMethod: DeliveryMethod | string | undefined;

  /**
   * @public
   * <p>The settings for the email message.</p>
   */
  EmailSettings?: EmailSettings;

  /**
   * @public
   * <p>The settings for the SMS message.</p>
   */
  SmsSettings?: SmsSettings;
}

/**
 * @public
 * <p>Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.</p>
 */
export interface UpdateBackendAuthUserPoolConfig {
  /**
   * @public
   * <p><b>(DEPRECATED)</b> Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  ForgotPassword?: UpdateBackendAuthForgotPasswordConfig;

  /**
   * @public
   * <p>Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
   */
  Mfa?: UpdateBackendAuthMFAConfig;

  /**
   * @public
   * <p>Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  OAuth?: UpdateBackendAuthOAuthConfig;

  /**
   * @public
   * <p>Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  PasswordPolicy?: UpdateBackendAuthPasswordPolicyConfig;

  /**
   * @public
   * <p>Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  VerificationMessage?: UpdateBackendAuthVerificationMessageConfig;
}

/**
 * @public
 * <p>Defines the resource configuration when updating an authentication resource in your Amplify project.</p>
 */
export interface UpdateBackendAuthResourceConfig {
  /**
   * @public
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   */
  AuthResources: AuthResources | string | undefined;

  /**
   * @public
   * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.</p>
   */
  IdentityPoolConfigs?: UpdateBackendAuthIdentityPoolConfig;

  /**
   * @public
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   */
  Service: Service | string | undefined;

  /**
   * @public
   * <p>Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.</p>
   */
  UserPoolConfigs: UpdateBackendAuthUserPoolConfig | undefined;
}

/**
 * @public
 * <p>The request body for UpdateBackendAuth.</p>
 */
export interface UpdateBackendAuthRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The resource configuration for this request object.</p>
   */
  ResourceConfig: UpdateBackendAuthResourceConfig | undefined;

  /**
   * @public
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBackendAuthResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The request object for this operation.</p>
 */
export interface LoginAuthConfigReqObj {
  /**
   * @public
   * <p>The Amazon Cognito identity pool ID used for the Amplify Admin UI login authorization.</p>
   */
  AwsCognitoIdentityPoolId?: string;

  /**
   * @public
   * <p>The AWS Region for the Amplify Admin UI login.</p>
   */
  AwsCognitoRegion?: string;

  /**
   * @public
   * <p>The Amazon Cognito user pool ID used for Amplify Admin UI login authentication.</p>
   */
  AwsUserPoolsId?: string;

  /**
   * @public
   * <p>The web client ID for the Amazon Cognito user pools.</p>
   */
  AwsUserPoolsWebClientId?: string;
}

/**
 * @public
 * <p>The request body for UpdateBackendConfig.</p>
 */
export interface UpdateBackendConfigRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>Describes the Amazon Cognito configuration for Admin UI access.</p>
   */
  LoginAuthConfig?: LoginAuthConfigReqObj;
}

/**
 * @public
 */
export interface UpdateBackendConfigResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The app ID for the backend manager.</p>
   */
  BackendManagerAppId?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.</p>
   */
  LoginAuthConfig?: LoginAuthConfigReqObj;
}

/**
 * @public
 * <p>The request body for GetBackendJob.</p>
 */
export interface UpdateBackendJobRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>Filters the list of response objects to include only those with the specified operation name.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>Filters the list of response objects to include only those with the specified status.</p>
   */
  Status?: string;
}

/**
 * @public
 */
export interface UpdateBackendJobResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>The time when the job was created.</p>
   */
  CreateTime?: string;

  /**
   * @public
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The time when the job was last updated.</p>
   */
  UpdateTime?: string;
}

/**
 * @public
 * <p>The resource configuration for updating backend storage.</p>
 */
export interface UpdateBackendStorageResourceConfig {
  /**
   * @public
   * <p>The authorization configuration for the storage S3 bucket.</p>
   */
  Permissions: BackendStoragePermissions | undefined;

  /**
   * @public
   * <p>The name of the storage service.</p>
   */
  ServiceName: ServiceName | string | undefined;
}

/**
 * @public
 * <p>The request body for UpdateBackendStorage.</p>
 */
export interface UpdateBackendStorageRequest {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * @public
   * <p>The resource configuration for updating backend storage.</p>
   */
  ResourceConfig: UpdateBackendStorageResourceConfig | undefined;

  /**
   * @public
   * <p>The name of the storage resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBackendStorageResponse {
  /**
   * @public
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * @public
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * @public
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @internal
 */
export const EmailSettingsFilterSensitiveLog = (obj: EmailSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SmsSettingsFilterSensitiveLog = (obj: SmsSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAuthForgotPasswordConfigFilterSensitiveLog = (
  obj: CreateBackendAuthForgotPasswordConfig
): any => ({
  ...obj,
  ...(obj.EmailSettings && { EmailSettings: SENSITIVE_STRING }),
  ...(obj.SmsSettings && { SmsSettings: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BackendAuthSocialProviderConfigFilterSensitiveLog = (obj: BackendAuthSocialProviderConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackendAuthAppleProviderConfigFilterSensitiveLog = (obj: BackendAuthAppleProviderConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SocialProviderSettingsFilterSensitiveLog = (obj: SocialProviderSettings): any => ({
  ...obj,
  ...(obj.Facebook && { Facebook: SENSITIVE_STRING }),
  ...(obj.Google && { Google: SENSITIVE_STRING }),
  ...(obj.LoginWithAmazon && { LoginWithAmazon: SENSITIVE_STRING }),
  ...(obj.SignInWithApple && { SignInWithApple: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBackendAuthOAuthConfigFilterSensitiveLog = (obj: CreateBackendAuthOAuthConfig): any => ({
  ...obj,
  ...(obj.SocialProviderSettings && {
    SocialProviderSettings: SocialProviderSettingsFilterSensitiveLog(obj.SocialProviderSettings),
  }),
});

/**
 * @internal
 */
export const CreateBackendAuthVerificationMessageConfigFilterSensitiveLog = (
  obj: CreateBackendAuthVerificationMessageConfig
): any => ({
  ...obj,
  ...(obj.EmailSettings && { EmailSettings: SENSITIVE_STRING }),
  ...(obj.SmsSettings && { SmsSettings: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBackendAuthUserPoolConfigFilterSensitiveLog = (obj: CreateBackendAuthUserPoolConfig): any => ({
  ...obj,
  ...(obj.ForgotPassword && {
    ForgotPassword: CreateBackendAuthForgotPasswordConfigFilterSensitiveLog(obj.ForgotPassword),
  }),
  ...(obj.OAuth && { OAuth: CreateBackendAuthOAuthConfigFilterSensitiveLog(obj.OAuth) }),
  ...(obj.VerificationMessage && {
    VerificationMessage: CreateBackendAuthVerificationMessageConfigFilterSensitiveLog(obj.VerificationMessage),
  }),
});

/**
 * @internal
 */
export const CreateBackendAuthResourceConfigFilterSensitiveLog = (obj: CreateBackendAuthResourceConfig): any => ({
  ...obj,
  ...(obj.UserPoolConfigs && {
    UserPoolConfigs: CreateBackendAuthUserPoolConfigFilterSensitiveLog(obj.UserPoolConfigs),
  }),
});

/**
 * @internal
 */
export const CreateBackendAuthRequestFilterSensitiveLog = (obj: CreateBackendAuthRequest): any => ({
  ...obj,
  ...(obj.ResourceConfig && { ResourceConfig: CreateBackendAuthResourceConfigFilterSensitiveLog(obj.ResourceConfig) }),
});

/**
 * @internal
 */
export const GetBackendAuthResponseFilterSensitiveLog = (obj: GetBackendAuthResponse): any => ({
  ...obj,
  ...(obj.ResourceConfig && { ResourceConfig: CreateBackendAuthResourceConfigFilterSensitiveLog(obj.ResourceConfig) }),
});

/**
 * @internal
 */
export const UpdateBackendAuthForgotPasswordConfigFilterSensitiveLog = (
  obj: UpdateBackendAuthForgotPasswordConfig
): any => ({
  ...obj,
  ...(obj.EmailSettings && { EmailSettings: SENSITIVE_STRING }),
  ...(obj.SmsSettings && { SmsSettings: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateBackendAuthOAuthConfigFilterSensitiveLog = (obj: UpdateBackendAuthOAuthConfig): any => ({
  ...obj,
  ...(obj.SocialProviderSettings && {
    SocialProviderSettings: SocialProviderSettingsFilterSensitiveLog(obj.SocialProviderSettings),
  }),
});

/**
 * @internal
 */
export const UpdateBackendAuthVerificationMessageConfigFilterSensitiveLog = (
  obj: UpdateBackendAuthVerificationMessageConfig
): any => ({
  ...obj,
  ...(obj.EmailSettings && { EmailSettings: SENSITIVE_STRING }),
  ...(obj.SmsSettings && { SmsSettings: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateBackendAuthUserPoolConfigFilterSensitiveLog = (obj: UpdateBackendAuthUserPoolConfig): any => ({
  ...obj,
  ...(obj.ForgotPassword && {
    ForgotPassword: UpdateBackendAuthForgotPasswordConfigFilterSensitiveLog(obj.ForgotPassword),
  }),
  ...(obj.OAuth && { OAuth: UpdateBackendAuthOAuthConfigFilterSensitiveLog(obj.OAuth) }),
  ...(obj.VerificationMessage && {
    VerificationMessage: UpdateBackendAuthVerificationMessageConfigFilterSensitiveLog(obj.VerificationMessage),
  }),
});

/**
 * @internal
 */
export const UpdateBackendAuthResourceConfigFilterSensitiveLog = (obj: UpdateBackendAuthResourceConfig): any => ({
  ...obj,
  ...(obj.UserPoolConfigs && {
    UserPoolConfigs: UpdateBackendAuthUserPoolConfigFilterSensitiveLog(obj.UserPoolConfigs),
  }),
});

/**
 * @internal
 */
export const UpdateBackendAuthRequestFilterSensitiveLog = (obj: UpdateBackendAuthRequest): any => ({
  ...obj,
  ...(obj.ResourceConfig && { ResourceConfig: UpdateBackendAuthResourceConfigFilterSensitiveLog(obj.ResourceConfig) }),
});
