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
 * <p>An error returned if a request is not formed properly.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>An error message to inform that the request failed.</p>
   * @public
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
 * <p>The request body for CloneBackend.</p>
 * @public
 */
export interface CloneBackendRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of the destination backend environment to be created.</p>
   * @public
   */
  TargetEnvironmentName: string | undefined;
}

/**
 * @public
 */
export interface CloneBackendResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>An error returned if there's a temporary issue with the service.</p>
 * @public
 */
export class GatewayTimeoutException extends __BaseException {
  readonly name: "GatewayTimeoutException" = "GatewayTimeoutException";
  readonly $fault: "server" = "server";
  /**
   * <p>An error message to inform that the request failed.</p>
   * @public
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
 * <p>An error returned when a specific resource type is not found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>An error message to inform that the request has failed.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The type of resource that is not found.</p>
   * @public
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
 * <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The type of limit that was exceeded.</p>
   * @public
   */
  LimitType?: string;

  /**
   * <p>An error message to inform that the request has failed.</p>
   * @public
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
 * <p>Defines the resource configuration for the data model in your Amplify project.</p>
 * @public
 */
export interface ResourceConfig {}

/**
 * <p>The request body for CreateBackend.</p>
 * @public
 */
export interface CreateBackendRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  AppName: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for creating a backend.</p>
   * @public
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface CreateBackendResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
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
 * <p>The authentication settings for accessing provisioned data models in your Amplify project.</p>
 * @public
 */
export interface BackendAPIAppSyncAuthSettings {
  /**
   * <p>The Amazon Cognito user pool ID, if Amazon Cognito was used as an authentication setting to access your data models.</p>
   * @public
   */
  CognitoUserPoolId?: string;

  /**
   * <p>The API key description for API_KEY, if it was used as an authentication mechanism to access your data models.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The API key expiration time for API_KEY, if it was used as an authentication mechanism to access your data models.</p>
   * @public
   */
  ExpirationTime?: number;

  /**
   * <p>The expiry time for the OpenID authentication mechanism.</p>
   * @public
   */
  OpenIDAuthTTL?: string;

  /**
   * <p>The clientID for openID, if openID was used as an authentication setting to access your data models.</p>
   * @public
   */
  OpenIDClientId?: string;

  /**
   * <p>The expiry time for the OpenID authentication mechanism.</p>
   * @public
   */
  OpenIDIatTTL?: string;

  /**
   * <p>The openID issuer URL, if openID was used as an authentication setting to access your data models.</p>
   * @public
   */
  OpenIDIssueURL?: string;

  /**
   * <p>The OpenID provider name, if OpenID was used as an authentication mechanism to access your data models.</p>
   * @public
   */
  OpenIDProviderName?: string;
}

/**
 * <p>Describes the auth types for your configured data models.</p>
 * @public
 */
export interface BackendAPIAuthType {
  /**
   * <p>Describes the authentication mode.</p>
   * @public
   */
  Mode?: Mode;

  /**
   * <p>Describes settings for the authentication mode.</p>
   * @public
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
 * <p>Describes the conflict resolution configuration for your data model configured in your Amplify project.</p>
 * @public
 */
export interface BackendAPIConflictResolution {
  /**
   * <p>The strategy for conflict resolution.</p>
   * @public
   */
  ResolutionStrategy?: ResolutionStrategy;
}

/**
 * <p>The resource config for the data model, configured as a part of the Amplify project.</p>
 * @public
 */
export interface BackendAPIResourceConfig {
  /**
   * <p>Additional authentication methods used to interact with your data models.</p>
   * @public
   */
  AdditionalAuthTypes?: BackendAPIAuthType[];

  /**
   * <p>The API name used to interact with the data model, configured as a part of your Amplify project.</p>
   * @public
   */
  ApiName?: string;

  /**
   * <p>The conflict resolution strategy for your data stored in the data models.</p>
   * @public
   */
  ConflictResolution?: BackendAPIConflictResolution;

  /**
   * <p>The default authentication type for interacting with the configured data models in your Amplify project.</p>
   * @public
   */
  DefaultAuthType?: BackendAPIAuthType;

  /**
   * <p>The service used to provision and interact with the data model.</p>
   * @public
   */
  Service?: string;

  /**
   * <p>The definition of the data model in the annotated transform of the GraphQL schema.</p>
   * @public
   */
  TransformSchema?: string;
}

/**
 * <p>The request body for CreateBackendAPI.</p>
 * @public
 */
export interface CreateBackendAPIRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for this request.</p>
   * @public
   */
  ResourceConfig: BackendAPIResourceConfig | undefined;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendAPIResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
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
 * <p>Describes authorization configurations for the auth resources, configured as a part of your Amplify project.</p>
 * @public
 */
export interface CreateBackendAuthIdentityPoolConfig {
  /**
   * <p>Name of the Amazon Cognito identity pool used for authorization.</p>
   * @public
   */
  IdentityPoolName: string | undefined;

  /**
   * <p>Set to true or false based on whether you want to enable guest authorization to your Amplify app.</p>
   * @public
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
 * <p>The configuration for the email sent when an app user forgets their password.</p>
 * @public
 */
export interface EmailSettings {
  /**
   * <p>The contents of the email message.</p>
   * @public
   */
  EmailMessage?: string;

  /**
   * <p>The contents of the subject line of the email message.</p>
   * @public
   */
  EmailSubject?: string;
}

/**
 * <p>SMS settings for authentication.</p>
 * @public
 */
export interface SmsSettings {
  /**
   * <p>The contents of the SMS message.</p>
   * @public
   */
  SmsMessage?: string;
}

/**
 * <p><b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app.</p>
 * @public
 */
export interface CreateBackendAuthForgotPasswordConfig {
  /**
   * <p><b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users who want to recover their password.</p>
   * @public
   */
  DeliveryMethod: DeliveryMethod | undefined;

  /**
   * <p><b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.</p>
   * @public
   */
  EmailSettings?: EmailSettings;

  /**
   * <p><b>(DEPRECATED)</b> The configuration for the SMS message sent when an app user forgets their password.</p>
   * @public
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
 * <p>The settings of your MFA configuration for the backend of your Amplify project.</p>
 * @public
 */
export interface Settings {
  /**
   * <p>The supported MFA types.</p>
   * @public
   */
  MfaTypes?: MfaTypesElement[];

  /**
   * <p>The body of the SMS message.</p>
   * @public
   */
  SmsMessage?: string;
}

/**
 * <p>Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
 * @public
 */
export interface CreateBackendAuthMFAConfig {
  /**
   * <p>Describes whether MFA should be [ON, OFF, or OPTIONAL] for authentication in your Amplify project.</p>
   * @public
   */
  MFAMode: MFAMode | undefined;

  /**
   * <p>Describes the configuration settings and methods for your Amplify app users to use MFA.</p>
   * @public
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
 * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
 * @public
 */
export interface BackendAuthSocialProviderConfig {
  /**
   * <p>Describes the client_id, which can be obtained from the third-party social federation provider.</p>
   * @public
   */
  ClientId?: string;

  /**
   * <p>Describes the client_secret, which can be obtained from third-party social federation providers.</p>
   * @public
   */
  ClientSecret?: string;
}

/**
 * <p>Describes Apple social federation configurations for allowing your app users to sign in using OAuth.</p>
 * @public
 */
export interface BackendAuthAppleProviderConfig {
  /**
   * <p>Describes the client_id (also called Services ID) that comes from Apple.</p>
   * @public
   */
  ClientId?: string;

  /**
   * <p>Describes the key_id that comes from Apple.</p>
   * @public
   */
  KeyId?: string;

  /**
   * <p>Describes the private_key that comes from Apple.</p>
   * @public
   */
  PrivateKey?: string;

  /**
   * <p>Describes the team_id that comes from Apple.</p>
   * @public
   */
  TeamId?: string;
}

/**
 * <p>The settings for using the social identity providers for access to your Amplify app.</p>
 * @public
 */
export interface SocialProviderSettings {
  /**
   * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
   * @public
   */
  Facebook?: BackendAuthSocialProviderConfig;

  /**
   * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
   * @public
   */
  Google?: BackendAuthSocialProviderConfig;

  /**
   * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
   * @public
   */
  LoginWithAmazon?: BackendAuthSocialProviderConfig;

  /**
   * <p>Describes Apple social federation configurations for allowing your app users to sign in using OAuth.</p>
   * @public
   */
  SignInWithApple?: BackendAuthAppleProviderConfig;
}

/**
 * <p>Creates the OAuth configuration for your Amplify project.</p>
 * @public
 */
export interface CreateBackendAuthOAuthConfig {
  /**
   * <p>The domain prefix for your Amplify app.</p>
   * @public
   */
  DomainPrefix?: string;

  /**
   * <p>The OAuth grant type that you use to allow app users to authenticate from your Amplify app.</p>
   * @public
   */
  OAuthGrantType: OAuthGrantType | undefined;

  /**
   * <p>List of OAuth-related flows used to allow your app users to authenticate from your Amplify app.</p>
   * @public
   */
  OAuthScopes: OAuthScopesElement[] | undefined;

  /**
   * <p>The redirected URI for signing in to your Amplify app.</p>
   * @public
   */
  RedirectSignInURIs: string[] | undefined;

  /**
   * <p>Redirect URLs that OAuth uses when a user signs out of an Amplify app.</p>
   * @public
   */
  RedirectSignOutURIs: string[] | undefined;

  /**
   * <p>The settings for using social providers to access your Amplify app.</p>
   * @public
   */
  SocialProviderSettings?: SocialProviderSettings;
}

/**
 * <p>The password policy configuration for the backend to your Amplify project.</p>
 * @public
 */
export interface CreateBackendAuthPasswordPolicyConfig {
  /**
   * <p>Additional constraints for the password used to access the backend of your Amplify project.</p>
   * @public
   */
  AdditionalConstraints?: AdditionalConstraintsElement[];

  /**
   * <p>The minimum length of the password used to access the backend of your Amplify project.</p>
   * @public
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
 * <p>Creates an email or SMS verification message for the auth resource configured for your Amplify project.</p>
 * @public
 */
export interface CreateBackendAuthVerificationMessageConfig {
  /**
   * <p>The type of verification message to send.</p>
   * @public
   */
  DeliveryMethod: DeliveryMethod | undefined;

  /**
   * <p>The settings for the email message.</p>
   * @public
   */
  EmailSettings?: EmailSettings;

  /**
   * <p>The settings for the SMS message.</p>
   * @public
   */
  SmsSettings?: SmsSettings;
}

/**
 * <p>Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.</p>
 * @public
 */
export interface CreateBackendAuthUserPoolConfig {
  /**
   * <p><b>(DEPRECATED)</b> Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   * @public
   */
  ForgotPassword?: CreateBackendAuthForgotPasswordConfig;

  /**
   * <p>Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
   * @public
   */
  Mfa?: CreateBackendAuthMFAConfig;

  /**
   * <p>Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   * @public
   */
  OAuth?: CreateBackendAuthOAuthConfig;

  /**
   * <p>Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   * @public
   */
  PasswordPolicy?: CreateBackendAuthPasswordPolicyConfig;

  /**
   * <p>The required attributes to sign up new users in the user pool.</p>
   * @public
   */
  RequiredSignUpAttributes: RequiredSignUpAttributesElement[] | undefined;

  /**
   * <p>Describes the sign-in methods that your Amplify app users use to log in using the Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   * @public
   */
  SignInMethod: SignInMethod | undefined;

  /**
   * <p>The Amazon Cognito user pool name.</p>
   * @public
   */
  UserPoolName: string | undefined;

  /**
   * <p>Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   * @public
   */
  VerificationMessage?: CreateBackendAuthVerificationMessageConfig;
}

/**
 * <p>Defines the resource configuration when creating an auth resource in your Amplify project.</p>
 * @public
 */
export interface CreateBackendAuthResourceConfig {
  /**
   * <p>Defines whether you want to configure only authentication or both authentication and authorization settings.</p>
   * @public
   */
  AuthResources: AuthResources | undefined;

  /**
   * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.</p>
   * @public
   */
  IdentityPoolConfigs?: CreateBackendAuthIdentityPoolConfig;

  /**
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   * @public
   */
  Service: Service | undefined;

  /**
   * <p>Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.</p>
   * @public
   */
  UserPoolConfigs: CreateBackendAuthUserPoolConfig | undefined;
}

/**
 * <p>The request body for CreateBackendAuth.</p>
 * @public
 */
export interface CreateBackendAuthRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for this request object.</p>
   * @public
   */
  ResourceConfig: CreateBackendAuthResourceConfig | undefined;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendAuthResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>The request body for CreateBackendConfig.</p>
 * @public
 */
export interface CreateBackendConfigRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The app ID for the backend manager.</p>
   * @public
   */
  BackendManagerAppId?: string;
}

/**
 * @public
 */
export interface CreateBackendConfigResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
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
 * <p>Describes the read, write, and delete permissions users have against your storage S3 bucket.</p>
 * @public
 */
export interface BackendStoragePermissions {
  /**
   * <p>Lists all authenticated user read, write, and delete permissions for your S3 bucket.</p>
   * @public
   */
  Authenticated: AuthenticatedElement[] | undefined;

  /**
   * <p>Lists all unauthenticated user read, write, and delete permissions for your S3 bucket.</p>
   * @public
   */
  UnAuthenticated?: UnAuthenticatedElement[];
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
 * <p>The resource configuration for creating backend storage.</p>
 * @public
 */
export interface CreateBackendStorageResourceConfig {
  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  BucketName?: string;

  /**
   * <p>The authorization configuration for the storage S3 bucket.</p>
   * @public
   */
  Permissions: BackendStoragePermissions | undefined;

  /**
   * <p>The name of the storage service.</p>
   * @public
   */
  ServiceName: ServiceName | undefined;
}

/**
 * <p>The request body for CreateBackendStorage.</p>
 * @public
 */
export interface CreateBackendStorageRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for creating backend storage.</p>
   * @public
   */
  ResourceConfig: CreateBackendStorageResourceConfig | undefined;

  /**
   * <p>The name of the storage resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendStorageResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * @public
 */
export interface CreateTokenRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;
}

/**
 * @public
 */
export interface CreateTokenResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>One-time challenge code for authenticating into the Amplify Admin UI.</p>
   * @public
   */
  ChallengeCode?: string;

  /**
   * <p>A unique ID provided when creating a new challenge token.</p>
   * @public
   */
  SessionId?: string;

  /**
   * <p>The expiry time for the one-time generated token code.</p>
   * @public
   */
  Ttl?: string;
}

/**
 * @public
 */
export interface DeleteBackendRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>The request body for DeleteBackendAPI.</p>
 * @public
 */
export interface DeleteBackendAPIRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>Defines the resource configuration for the data model in your Amplify project.</p>
   * @public
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendAPIResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>The request body for DeleteBackendAuth.</p>
 * @public
 */
export interface DeleteBackendAuthRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendAuthResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>The request body for DeleteBackendStorage.</p>
 * @public
 */
export interface DeleteBackendStorageRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of the storage resource.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The name of the storage service.</p>
   * @public
   */
  ServiceName: ServiceName | undefined;
}

/**
 * @public
 */
export interface DeleteBackendStorageResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * @public
 */
export interface DeleteTokenRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTokenResponse {
  /**
   * <p>Indicates whether the request succeeded or failed.</p>
   * @public
   */
  IsSuccess?: boolean;
}

/**
 * <p>The request body for GenerateBackendAPIModels.</p>
 * @public
 */
export interface GenerateBackendAPIModelsRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GenerateBackendAPIModelsResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>The request body for GetBackend.</p>
 * @public
 */
export interface GetBackendRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;
}

/**
 * @public
 */
export interface GetBackendResponse {
  /**
   * <p>A stringified version of the cli.json file for your Amplify project.</p>
   * @public
   */
  AmplifyFeatureFlags?: string;

  /**
   * <p>A stringified version of the current configs for your Amplify project.</p>
   * @public
   */
  AmplifyMetaConfig?: string;

  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  AppName?: string;

  /**
   * <p>A list of backend environments in an array.</p>
   * @public
   */
  BackendEnvironmentList?: string[];

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request failed, this is the returned error.</p>
   * @public
   */
  Error?: string;
}

/**
 * <p>The request body for GetBackendAPI.</p>
 * @public
 */
export interface GetBackendAPIRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>Defines the resource configuration for the data model in your Amplify project.</p>
   * @public
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GetBackendAPIResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The resource configuration for this response object.</p>
   * @public
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName?: string;
}

/**
 * <p>The request body for GetBackendAPIModels.</p>
 * @public
 */
export interface GetBackendAPIModelsRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of this resource.</p>
   * @public
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
   * <p>Stringified JSON of the datastore model.</p>
   * @public
   */
  Models?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: Status;

  /**
   * <p>Stringified JSON of the model introspection schema for an existing backend API resource.</p>
   * @public
   */
  ModelIntrospectionSchema?: string;
}

/**
 * <p>The request body for GetBackendAuth.</p>
 * @public
 */
export interface GetBackendAuthRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GetBackendAuthResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The resource configuration for authorization requests to the backend of your Amplify project.</p>
   * @public
   */
  ResourceConfig?: CreateBackendAuthResourceConfig;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface GetBackendJobRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetBackendJobResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The time when the job was created.</p>
   * @public
   */
  CreateTime?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The time when the job was last updated.</p>
   * @public
   */
  UpdateTime?: string;
}

/**
 * <p>The request body for GetBackendStorage.</p>
 * @public
 */
export interface GetBackendStorageRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of the storage resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * <p>The details for a backend storage resource.</p>
 * @public
 */
export interface GetBackendStorageResourceConfig {
  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  BucketName?: string;

  /**
   * <p>Returns True if the storage resource has been imported.</p>
   * @public
   */
  Imported: boolean | undefined;

  /**
   * <p>The authorization configuration for the storage S3 bucket.</p>
   * @public
   */
  Permissions?: BackendStoragePermissions;

  /**
   * <p>The name of the storage service.</p>
   * @public
   */
  ServiceName: ServiceName | undefined;
}

/**
 * @public
 */
export interface GetBackendStorageResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The resource configuration for the backend storage resource.</p>
   * @public
   */
  ResourceConfig?: GetBackendStorageResourceConfig;

  /**
   * <p>The name of the storage resource.</p>
   * @public
   */
  ResourceName?: string;
}

/**
 * @public
 */
export interface GetTokenRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface GetTokenResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The one-time challenge code for authenticating into the Amplify Admin UI.</p>
   * @public
   */
  ChallengeCode?: string;

  /**
   * <p>A unique ID provided when creating a new challenge token.</p>
   * @public
   */
  SessionId?: string;

  /**
   * <p>The expiry time for the one-time generated token code.</p>
   * @public
   */
  Ttl?: string;
}

/**
 * <p>The request body for ImportBackendAuth.</p>
 * @public
 */
export interface ImportBackendAuthRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The ID of the Amazon Cognito identity pool.</p>
   * @public
   */
  IdentityPoolId?: string;

  /**
   * <p>The ID of the Amazon Cognito native client.</p>
   * @public
   */
  NativeClientId: string | undefined;

  /**
   * <p>The ID of the Amazon Cognito user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the Amazon Cognito web client.</p>
   * @public
   */
  WebClientId: string | undefined;
}

/**
 * @public
 */
export interface ImportBackendAuthResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>The request body for ImportBackendStorage.</p>
 * @public
 */
export interface ImportBackendStorageRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  BucketName?: string;

  /**
   * <p>The name of the storage service.</p>
   * @public
   */
  ServiceName: ServiceName | undefined;
}

/**
 * @public
 */
export interface ImportBackendStorageResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>The request body for ListBackendJobs.</p>
 * @public
 */
export interface ListBackendJobsRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The maximum number of results that you want in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Filters the list of response objects to include only those with the specified operation name.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>Filters the list of response objects to include only those with the specified status.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>The response object for this operation.</p>
 * @public
 */
export interface BackendJobRespObj {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The time when the job was created.</p>
   * @public
   */
  CreateTime?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The time when the job was last updated.</p>
   * @public
   */
  UpdateTime?: string;
}

/**
 * @public
 */
export interface ListBackendJobsResponse {
  /**
   * <p>An array of jobs and their properties.</p>
   * @public
   */
  Jobs?: BackendJobRespObj[];

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The request body for S3Buckets.</p>
 * @public
 */
export interface ListS3BucketsRequest {
  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Describes the metadata of the S3 bucket.</p>
 * @public
 */
export interface S3BucketInfo {
  /**
   * <p>The creation date of the S3 bucket.</p>
   * @public
   */
  CreationDate?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListS3BucketsResponse {
  /**
   * <p>The list of S3 buckets.</p>
   * @public
   */
  Buckets?: S3BucketInfo[];

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The request body for RemoveAllBackends.</p>
 * @public
 */
export interface RemoveAllBackendsRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>Cleans up the Amplify Console app if this value is set to true.</p>
   * @public
   */
  CleanAmplifyApp?: boolean;
}

/**
 * @public
 */
export interface RemoveAllBackendsResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * @public
 */
export interface RemoveBackendConfigRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;
}

/**
 * @public
 */
export interface RemoveBackendConfigResponse {
  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;
}

/**
 * <p>The request body for UpdateBackendAPI.</p>
 * @public
 */
export interface UpdateBackendAPIRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>Defines the resource configuration for the data model in your Amplify project.</p>
   * @public
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBackendAPIResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.</p>
 * @public
 */
export interface UpdateBackendAuthIdentityPoolConfig {
  /**
   * <p>A boolean value that can be set to allow or disallow guest-level authorization into your Amplify app.</p>
   * @public
   */
  UnauthenticatedLogin?: boolean;
}

/**
 * <p><b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app.</p>
 * @public
 */
export interface UpdateBackendAuthForgotPasswordConfig {
  /**
   * <p><b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users that want to recover their password.</p>
   * @public
   */
  DeliveryMethod?: DeliveryMethod;

  /**
   * <p><b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.</p>
   * @public
   */
  EmailSettings?: EmailSettings;

  /**
   * <p><b>(DEPRECATED)</b> The configuration for the SMS message sent when an Amplify app user forgets their password.</p>
   * @public
   */
  SmsSettings?: SmsSettings;
}

/**
 * <p>Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.</p>
 * @public
 */
export interface UpdateBackendAuthMFAConfig {
  /**
   * <p>The MFA mode for the backend of your Amplify project.</p>
   * @public
   */
  MFAMode?: MFAMode;

  /**
   * <p>The settings of your MFA configuration for the backend of your Amplify project.</p>
   * @public
   */
  Settings?: Settings;
}

/**
 * <p>The OAuth configurations for authenticating users into your Amplify app.</p>
 * @public
 */
export interface UpdateBackendAuthOAuthConfig {
  /**
   * <p>The Amazon Cognito domain prefix used to create a hosted UI for authentication.</p>
   * @public
   */
  DomainPrefix?: string;

  /**
   * <p>The OAuth grant type to allow app users to authenticate from your Amplify app.</p>
   * @public
   */
  OAuthGrantType?: OAuthGrantType;

  /**
   * <p>The list of OAuth-related flows that can allow users to authenticate from your Amplify app.</p>
   * @public
   */
  OAuthScopes?: OAuthScopesElement[];

  /**
   * <p>Redirect URLs that OAuth uses when a user signs in to an Amplify app.</p>
   * @public
   */
  RedirectSignInURIs?: string[];

  /**
   * <p>Redirect URLs that OAuth uses when a user signs out of an Amplify app.</p>
   * @public
   */
  RedirectSignOutURIs?: string[];

  /**
   * <p>Describes third-party social federation configurations for allowing your users to sign in with OAuth.</p>
   * @public
   */
  SocialProviderSettings?: SocialProviderSettings;
}

/**
 * <p>Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
 * @public
 */
export interface UpdateBackendAuthPasswordPolicyConfig {
  /**
   * <p>Describes additional constraints on password requirements to sign in to the auth resource, configured as a part of your Amplify project.</p>
   * @public
   */
  AdditionalConstraints?: AdditionalConstraintsElement[];

  /**
   * <p>Describes the minimum length of the password required to sign in to the auth resource, configured as a part of your Amplify project.</p>
   * @public
   */
  MinimumLength?: number;
}

/**
 * <p>Updates the configuration of the email or SMS message for the auth resource configured for your Amplify project.</p>
 * @public
 */
export interface UpdateBackendAuthVerificationMessageConfig {
  /**
   * <p>The type of verification message to send.</p>
   * @public
   */
  DeliveryMethod: DeliveryMethod | undefined;

  /**
   * <p>The settings for the email message.</p>
   * @public
   */
  EmailSettings?: EmailSettings;

  /**
   * <p>The settings for the SMS message.</p>
   * @public
   */
  SmsSettings?: SmsSettings;
}

/**
 * <p>Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.</p>
 * @public
 */
export interface UpdateBackendAuthUserPoolConfig {
  /**
   * <p><b>(DEPRECATED)</b> Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   * @public
   */
  ForgotPassword?: UpdateBackendAuthForgotPasswordConfig;

  /**
   * <p>Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
   * @public
   */
  Mfa?: UpdateBackendAuthMFAConfig;

  /**
   * <p>Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   * @public
   */
  OAuth?: UpdateBackendAuthOAuthConfig;

  /**
   * <p>Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   * @public
   */
  PasswordPolicy?: UpdateBackendAuthPasswordPolicyConfig;

  /**
   * <p>Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   * @public
   */
  VerificationMessage?: UpdateBackendAuthVerificationMessageConfig;
}

/**
 * <p>Defines the resource configuration when updating an authentication resource in your Amplify project.</p>
 * @public
 */
export interface UpdateBackendAuthResourceConfig {
  /**
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   * @public
   */
  AuthResources: AuthResources | undefined;

  /**
   * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.</p>
   * @public
   */
  IdentityPoolConfigs?: UpdateBackendAuthIdentityPoolConfig;

  /**
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   * @public
   */
  Service: Service | undefined;

  /**
   * <p>Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.</p>
   * @public
   */
  UserPoolConfigs: UpdateBackendAuthUserPoolConfig | undefined;
}

/**
 * <p>The request body for UpdateBackendAuth.</p>
 * @public
 */
export interface UpdateBackendAuthRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for this request object.</p>
   * @public
   */
  ResourceConfig: UpdateBackendAuthResourceConfig | undefined;

  /**
   * <p>The name of this resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBackendAuthResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;
}

/**
 * <p>The request object for this operation.</p>
 * @public
 */
export interface LoginAuthConfigReqObj {
  /**
   * <p>The Amazon Cognito identity pool ID used for the Amplify Admin UI login authorization.</p>
   * @public
   */
  AwsCognitoIdentityPoolId?: string;

  /**
   * <p>The AWS Region for the Amplify Admin UI login.</p>
   * @public
   */
  AwsCognitoRegion?: string;

  /**
   * <p>The Amazon Cognito user pool ID used for Amplify Admin UI login authentication.</p>
   * @public
   */
  AwsUserPoolsId?: string;

  /**
   * <p>The web client ID for the Amazon Cognito user pools.</p>
   * @public
   */
  AwsUserPoolsWebClientId?: string;
}

/**
 * <p>The request body for UpdateBackendConfig.</p>
 * @public
 */
export interface UpdateBackendConfigRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>Describes the Amazon Cognito configuration for Admin UI access.</p>
   * @public
   */
  LoginAuthConfig?: LoginAuthConfigReqObj;
}

/**
 * @public
 */
export interface UpdateBackendConfigResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The app ID for the backend manager.</p>
   * @public
   */
  BackendManagerAppId?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.</p>
   * @public
   */
  LoginAuthConfig?: LoginAuthConfigReqObj;
}

/**
 * <p>The request body for GetBackendJob.</p>
 * @public
 */
export interface UpdateBackendJobRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Filters the list of response objects to include only those with the specified operation name.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>Filters the list of response objects to include only those with the specified status.</p>
   * @public
   */
  Status?: string;
}

/**
 * @public
 */
export interface UpdateBackendJobResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The time when the job was created.</p>
   * @public
   */
  CreateTime?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   * @public
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   * @public
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The time when the job was last updated.</p>
   * @public
   */
  UpdateTime?: string;
}

/**
 * <p>The resource configuration for updating backend storage.</p>
 * @public
 */
export interface UpdateBackendStorageResourceConfig {
  /**
   * <p>The authorization configuration for the storage S3 bucket.</p>
   * @public
   */
  Permissions: BackendStoragePermissions | undefined;

  /**
   * <p>The name of the storage service.</p>
   * @public
   */
  ServiceName: ServiceName | undefined;
}

/**
 * <p>The request body for UpdateBackendStorage.</p>
 * @public
 */
export interface UpdateBackendStorageRequest {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for updating backend storage.</p>
   * @public
   */
  ResourceConfig: UpdateBackendStorageResourceConfig | undefined;

  /**
   * <p>The name of the storage resource.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBackendStorageResponse {
  /**
   * <p>The app ID.</p>
   * @public
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   * @public
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The ID for the job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The current status of the request.</p>
   * @public
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
