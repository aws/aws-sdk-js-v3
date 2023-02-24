// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { AmplifyBackendServiceException as __BaseException } from "./AmplifyBackendServiceException";

export enum AdditionalConstraintsElement {
  REQUIRE_DIGIT = "REQUIRE_DIGIT",
  REQUIRE_LOWERCASE = "REQUIRE_LOWERCASE",
  REQUIRE_SYMBOL = "REQUIRE_SYMBOL",
  REQUIRE_UPPERCASE = "REQUIRE_UPPERCASE",
}

/**
 * <p>An error returned if a request is not formed properly.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>The request body for CloneBackend.</p>
 */
export interface CloneBackendRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of the destination backend environment to be created.</p>
   */
  TargetEnvironmentName: string | undefined;
}

export interface CloneBackendResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * <p>An error returned if there's a temporary issue with the service.</p>
 */
export class GatewayTimeoutException extends __BaseException {
  readonly name: "GatewayTimeoutException" = "GatewayTimeoutException";
  readonly $fault: "server" = "server";
  /**
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
 * <p>An error returned when a specific resource type is not found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>An error message to inform that the request has failed.</p>
   */
  Message?: string;

  /**
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
 * <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The type of limit that was exceeded.</p>
   */
  LimitType?: string;

  /**
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
 * <p>Defines the resource configuration for the data model in your Amplify project.</p>
 */
export interface ResourceConfig {}

/**
 * <p>The request body for CreateBackend.</p>
 */
export interface CreateBackendRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for creating a backend.</p>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;
}

export interface CreateBackendResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

export enum Mode {
  AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS",
  API_KEY = "API_KEY",
  AWS_IAM = "AWS_IAM",
  OPENID_CONNECT = "OPENID_CONNECT",
}

/**
 * <p>The authentication settings for accessing provisioned data models in your Amplify project.</p>
 */
export interface BackendAPIAppSyncAuthSettings {
  /**
   * <p>The Amazon Cognito user pool ID, if Amazon Cognito was used as an authentication setting to access your data models.</p>
   */
  CognitoUserPoolId?: string;

  /**
   * <p>The API key description for API_KEY, if it was used as an authentication mechanism to access your data models.</p>
   */
  Description?: string;

  /**
   * <p>The API key expiration time for API_KEY, if it was used as an authentication mechanism to access your data models.</p>
   */
  ExpirationTime?: number;

  /**
   * <p>The expiry time for the OpenID authentication mechanism.</p>
   */
  OpenIDAuthTTL?: string;

  /**
   * <p>The clientID for openID, if openID was used as an authentication setting to access your data models.</p>
   */
  OpenIDClientId?: string;

  /**
   * <p>The expiry time for the OpenID authentication mechanism.</p>
   */
  OpenIDIatTTL?: string;

  /**
   * <p>The openID issuer URL, if openID was used as an authentication setting to access your data models.</p>
   */
  OpenIDIssueURL?: string;

  /**
   * <p>The OpenID provider name, if OpenID was used as an authentication mechanism to access your data models.</p>
   */
  OpenIDProviderName?: string;
}

/**
 * <p>Describes the auth types for your configured data models.</p>
 */
export interface BackendAPIAuthType {
  /**
   * <p>Describes the authentication mode.</p>
   */
  Mode?: Mode | string;

  /**
   * <p>Describes settings for the authentication mode.</p>
   */
  Settings?: BackendAPIAppSyncAuthSettings;
}

export enum ResolutionStrategy {
  AUTOMERGE = "AUTOMERGE",
  LAMBDA = "LAMBDA",
  NONE = "NONE",
  OPTIMISTIC_CONCURRENCY = "OPTIMISTIC_CONCURRENCY",
}

/**
 * <p>Describes the conflict resolution configuration for your data model configured in your Amplify project.</p>
 */
export interface BackendAPIConflictResolution {
  /**
   * <p>The strategy for conflict resolution.</p>
   */
  ResolutionStrategy?: ResolutionStrategy | string;
}

/**
 * <p>The resource config for the data model, configured as a part of the Amplify project.</p>
 */
export interface BackendAPIResourceConfig {
  /**
   * <p>Additional authentication methods used to interact with your data models.</p>
   */
  AdditionalAuthTypes?: BackendAPIAuthType[];

  /**
   * <p>The API name used to interact with the data model, configured as a part of your Amplify project.</p>
   */
  ApiName?: string;

  /**
   * <p>The conflict resolution strategy for your data stored in the data models.</p>
   */
  ConflictResolution?: BackendAPIConflictResolution;

  /**
   * <p>The default authentication type for interacting with the configured data models in your Amplify project.</p>
   */
  DefaultAuthType?: BackendAPIAuthType;

  /**
   * <p>The service used to provision and interact with the data model.</p>
   */
  Service?: string;

  /**
   * <p>The definition of the data model in the annotated transform of the GraphQL schema.</p>
   */
  TransformSchema?: string;
}

/**
 * <p>The request body for CreateBackendAPI.</p>
 */
export interface CreateBackendAPIRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for this request.</p>
   */
  ResourceConfig: BackendAPIResourceConfig | undefined;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

export interface CreateBackendAPIResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

export enum AuthResources {
  IDENTITY_POOL_AND_USER_POOL = "IDENTITY_POOL_AND_USER_POOL",
  USER_POOL_ONLY = "USER_POOL_ONLY",
}

/**
 * <p>Describes authorization configurations for the auth resources, configured as a part of your Amplify project.</p>
 */
export interface CreateBackendAuthIdentityPoolConfig {
  /**
   * <p>Name of the Amazon Cognito identity pool used for authorization.</p>
   */
  IdentityPoolName: string | undefined;

  /**
   * <p>Set to true or false based on whether you want to enable guest authorization to your Amplify app.</p>
   */
  UnauthenticatedLogin: boolean | undefined;
}

export enum Service {
  COGNITO = "COGNITO",
}

export enum DeliveryMethod {
  EMAIL = "EMAIL",
  SMS = "SMS",
}

/**
 * <p>The configuration for the email sent when an app user forgets their password.</p>
 */
export interface EmailSettings {
  /**
   * <p>The contents of the email message.</p>
   */
  EmailMessage?: string;

  /**
   * <p>The contents of the subject line of the email message.</p>
   */
  EmailSubject?: string;
}

/**
 * <p>SMS settings for authentication.</p>
 */
export interface SmsSettings {
  /**
   * <p>The contents of the SMS message.</p>
   */
  SmsMessage?: string;
}

/**
 * <p><b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app.</p>
 */
export interface CreateBackendAuthForgotPasswordConfig {
  /**
   * <p><b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users who want to recover their password.</p>
   */
  DeliveryMethod: DeliveryMethod | string | undefined;

  /**
   * <p><b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.</p>
   */
  EmailSettings?: EmailSettings;

  /**
   * <p><b>(DEPRECATED)</b> The configuration for the SMS message sent when an app user forgets their password.</p>
   */
  SmsSettings?: SmsSettings;
}

export enum MFAMode {
  OFF = "OFF",
  ON = "ON",
  OPTIONAL = "OPTIONAL",
}

export enum MfaTypesElement {
  SMS = "SMS",
  TOTP = "TOTP",
}

/**
 * <p>The settings of your MFA configuration for the backend of your Amplify project.</p>
 */
export interface Settings {
  /**
   * <p>The supported MFA types.</p>
   */
  MfaTypes?: (MfaTypesElement | string)[];

  /**
   * <p>The body of the SMS message.</p>
   */
  SmsMessage?: string;
}

/**
 * <p>Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
 */
export interface CreateBackendAuthMFAConfig {
  /**
   * <p>Describes whether MFA should be [ON, OFF, or OPTIONAL] for authentication in your Amplify project.</p>
   */
  MFAMode: MFAMode | string | undefined;

  /**
   * <p>Describes the configuration settings and methods for your Amplify app users to use MFA.</p>
   */
  Settings?: Settings;
}

export enum OAuthGrantType {
  CODE = "CODE",
  IMPLICIT = "IMPLICIT",
}

export enum OAuthScopesElement {
  AWS_COGNITO_SIGNIN_USER_ADMIN = "AWS_COGNITO_SIGNIN_USER_ADMIN",
  EMAIL = "EMAIL",
  OPENID = "OPENID",
  PHONE = "PHONE",
  PROFILE = "PROFILE",
}

/**
 * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
 */
export interface BackendAuthSocialProviderConfig {
  /**
   * <p>Describes the client_id, which can be obtained from the third-party social federation provider.</p>
   */
  ClientId?: string;

  /**
   * <p>Describes the client_secret, which can be obtained from third-party social federation providers.</p>
   */
  ClientSecret?: string;
}

/**
 * <p>Describes Apple social federation configurations for allowing your app users to sign in using OAuth.</p>
 */
export interface BackendAuthAppleProviderConfig {
  /**
   * <p>Describes the client_id (also called Services ID) that comes from Apple.</p>
   */
  ClientId?: string;

  /**
   * <p>Describes the key_id that comes from Apple.</p>
   */
  KeyId?: string;

  /**
   * <p>Describes the private_key that comes from Apple.</p>
   */
  PrivateKey?: string;

  /**
   * <p>Describes the team_id that comes from Apple.</p>
   */
  TeamId?: string;
}

/**
 * <p>The settings for using the social identity providers for access to your Amplify app.</p>
 */
export interface SocialProviderSettings {
  /**
   * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
   */
  Facebook?: BackendAuthSocialProviderConfig;

  /**
   * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
   */
  Google?: BackendAuthSocialProviderConfig;

  /**
   * <p>Describes third-party social federation configurations for allowing your app users to sign in using OAuth.</p>
   */
  LoginWithAmazon?: BackendAuthSocialProviderConfig;

  /**
   * <p>Describes Apple social federation configurations for allowing your app users to sign in using OAuth.</p>
   */
  SignInWithApple?: BackendAuthAppleProviderConfig;
}

/**
 * <p>Creates the OAuth configuration for your Amplify project.</p>
 */
export interface CreateBackendAuthOAuthConfig {
  /**
   * <p>The domain prefix for your Amplify app.</p>
   */
  DomainPrefix?: string;

  /**
   * <p>The OAuth grant type that you use to allow app users to authenticate from your Amplify app.</p>
   */
  OAuthGrantType: OAuthGrantType | string | undefined;

  /**
   * <p>List of OAuth-related flows used to allow your app users to authenticate from your Amplify app.</p>
   */
  OAuthScopes: (OAuthScopesElement | string)[] | undefined;

  /**
   * <p>The redirected URI for signing in to your Amplify app.</p>
   */
  RedirectSignInURIs: string[] | undefined;

  /**
   * <p>Redirect URLs that OAuth uses when a user signs out of an Amplify app.</p>
   */
  RedirectSignOutURIs: string[] | undefined;

  /**
   * <p>The settings for using social providers to access your Amplify app.</p>
   */
  SocialProviderSettings?: SocialProviderSettings;
}

/**
 * <p>The password policy configuration for the backend to your Amplify project.</p>
 */
export interface CreateBackendAuthPasswordPolicyConfig {
  /**
   * <p>Additional constraints for the password used to access the backend of your Amplify project.</p>
   */
  AdditionalConstraints?: (AdditionalConstraintsElement | string)[];

  /**
   * <p>The minimum length of the password used to access the backend of your Amplify project.</p>
   */
  MinimumLength: number | undefined;
}

export enum RequiredSignUpAttributesElement {
  ADDRESS = "ADDRESS",
  BIRTHDATE = "BIRTHDATE",
  EMAIL = "EMAIL",
  FAMILY_NAME = "FAMILY_NAME",
  GENDER = "GENDER",
  GIVEN_NAME = "GIVEN_NAME",
  LOCALE = "LOCALE",
  MIDDLE_NAME = "MIDDLE_NAME",
  NAME = "NAME",
  NICKNAME = "NICKNAME",
  PHONE_NUMBER = "PHONE_NUMBER",
  PICTURE = "PICTURE",
  PREFERRED_USERNAME = "PREFERRED_USERNAME",
  PROFILE = "PROFILE",
  UPDATED_AT = "UPDATED_AT",
  WEBSITE = "WEBSITE",
  ZONE_INFO = "ZONE_INFO",
}

export enum SignInMethod {
  EMAIL = "EMAIL",
  EMAIL_AND_PHONE_NUMBER = "EMAIL_AND_PHONE_NUMBER",
  PHONE_NUMBER = "PHONE_NUMBER",
  USERNAME = "USERNAME",
}

/**
 * <p>Creates an email or SMS verification message for the auth resource configured for your Amplify project.</p>
 */
export interface CreateBackendAuthVerificationMessageConfig {
  /**
   * <p>The type of verification message to send.</p>
   */
  DeliveryMethod: DeliveryMethod | string | undefined;

  /**
   * <p>The settings for the email message.</p>
   */
  EmailSettings?: EmailSettings;

  /**
   * <p>The settings for the SMS message.</p>
   */
  SmsSettings?: SmsSettings;
}

/**
 * <p>Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.</p>
 */
export interface CreateBackendAuthUserPoolConfig {
  /**
   * <p><b>(DEPRECATED)</b> Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  ForgotPassword?: CreateBackendAuthForgotPasswordConfig;

  /**
   * <p>Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
   */
  Mfa?: CreateBackendAuthMFAConfig;

  /**
   * <p>Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  OAuth?: CreateBackendAuthOAuthConfig;

  /**
   * <p>Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  PasswordPolicy?: CreateBackendAuthPasswordPolicyConfig;

  /**
   * <p>The required attributes to sign up new users in the user pool.</p>
   */
  RequiredSignUpAttributes: (RequiredSignUpAttributesElement | string)[] | undefined;

  /**
   * <p>Describes the sign-in methods that your Amplify app users use to log in using the Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  SignInMethod: SignInMethod | string | undefined;

  /**
   * <p>The Amazon Cognito user pool name.</p>
   */
  UserPoolName: string | undefined;

  /**
   * <p>Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  VerificationMessage?: CreateBackendAuthVerificationMessageConfig;
}

/**
 * <p>Defines the resource configuration when creating an auth resource in your Amplify project.</p>
 */
export interface CreateBackendAuthResourceConfig {
  /**
   * <p>Defines whether you want to configure only authentication or both authentication and authorization settings.</p>
   */
  AuthResources: AuthResources | string | undefined;

  /**
   * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.</p>
   */
  IdentityPoolConfigs?: CreateBackendAuthIdentityPoolConfig;

  /**
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   */
  Service: Service | string | undefined;

  /**
   * <p>Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.</p>
   */
  UserPoolConfigs: CreateBackendAuthUserPoolConfig | undefined;
}

/**
 * <p>The request body for CreateBackendAuth.</p>
 */
export interface CreateBackendAuthRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for this request object.</p>
   */
  ResourceConfig: CreateBackendAuthResourceConfig | undefined;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

export interface CreateBackendAuthResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * <p>The request body for CreateBackendConfig.</p>
 */
export interface CreateBackendConfigRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The app ID for the backend manager.</p>
   */
  BackendManagerAppId?: string;
}

export interface CreateBackendConfigResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

export enum AuthenticatedElement {
  CREATE_AND_UPDATE = "CREATE_AND_UPDATE",
  DELETE = "DELETE",
  READ = "READ",
}

export enum UnAuthenticatedElement {
  CREATE_AND_UPDATE = "CREATE_AND_UPDATE",
  DELETE = "DELETE",
  READ = "READ",
}

/**
 * <p>Describes the read, write, and delete permissions users have against your storage S3 bucket.</p>
 */
export interface BackendStoragePermissions {
  /**
   * <p>Lists all authenticated user read, write, and delete permissions for your S3 bucket.</p>
   */
  Authenticated: (AuthenticatedElement | string)[] | undefined;

  /**
   * <p>Lists all unauthenticated user read, write, and delete permissions for your S3 bucket.</p>
   */
  UnAuthenticated?: (UnAuthenticatedElement | string)[];
}

export enum ServiceName {
  S3 = "S3",
}

/**
 * <p>The resource configuration for creating backend storage.</p>
 */
export interface CreateBackendStorageResourceConfig {
  /**
   * <p>The name of the S3 bucket.</p>
   */
  BucketName?: string;

  /**
   * <p>The authorization configuration for the storage S3 bucket.</p>
   */
  Permissions: BackendStoragePermissions | undefined;

  /**
   * <p>The name of the storage service.</p>
   */
  ServiceName: ServiceName | string | undefined;
}

/**
 * <p>The request body for CreateBackendStorage.</p>
 */
export interface CreateBackendStorageRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for creating backend storage.</p>
   */
  ResourceConfig: CreateBackendStorageResourceConfig | undefined;

  /**
   * <p>The name of the storage resource.</p>
   */
  ResourceName: string | undefined;
}

export interface CreateBackendStorageResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

export interface CreateTokenRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;
}

export interface CreateTokenResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>One-time challenge code for authenticating into the Amplify Admin UI.</p>
   */
  ChallengeCode?: string;

  /**
   * <p>A unique ID provided when creating a new challenge token.</p>
   */
  SessionId?: string;

  /**
   * <p>The expiry time for the one-time generated token code.</p>
   */
  Ttl?: string;
}

export interface DeleteBackendRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;
}

export interface DeleteBackendResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * <p>The request body for DeleteBackendAPI.</p>
 */
export interface DeleteBackendAPIRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>Defines the resource configuration for the data model in your Amplify project.</p>
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

export interface DeleteBackendAPIResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * <p>The request body for DeleteBackendAuth.</p>
 */
export interface DeleteBackendAuthRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

export interface DeleteBackendAuthResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * <p>The request body for DeleteBackendStorage.</p>
 */
export interface DeleteBackendStorageRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of the storage resource.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The name of the storage service.</p>
   */
  ServiceName: ServiceName | string | undefined;
}

export interface DeleteBackendStorageResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

export interface DeleteTokenRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

export interface DeleteTokenResponse {
  /**
   * <p>Indicates whether the request succeeded or failed.</p>
   */
  IsSuccess?: boolean;
}

/**
 * <p>The request body for GenerateBackendAPIModels.</p>
 */
export interface GenerateBackendAPIModelsRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

export interface GenerateBackendAPIModelsResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * <p>The request body for GetBackend.</p>
 */
export interface GetBackendRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;
}

export interface GetBackendResponse {
  /**
   * <p>A stringified version of the cli.json file for your Amplify project.</p>
   */
  AmplifyFeatureFlags?: string;

  /**
   * <p>A stringified version of the current configs for your Amplify project.</p>
   */
  AmplifyMetaConfig?: string;

  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the app.</p>
   */
  AppName?: string;

  /**
   * <p>A list of backend environments in an array.</p>
   */
  BackendEnvironmentList?: string[];

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request failed, this is the returned error.</p>
   */
  Error?: string;
}

/**
 * <p>The request body for GetBackendAPI.</p>
 */
export interface GetBackendAPIRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>Defines the resource configuration for the data model in your Amplify project.</p>
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

export interface GetBackendAPIResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The resource configuration for this response object.</p>
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName?: string;
}

/**
 * <p>The request body for GetBackendAPIModels.</p>
 */
export interface GetBackendAPIModelsRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

export enum Status {
  LATEST = "LATEST",
  STALE = "STALE",
}

export interface GetBackendAPIModelsResponse {
  /**
   * <p>Stringified JSON of the datastore model.</p>
   */
  Models?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: Status | string;

  /**
   * <p>Stringified JSON of the model introspection schema for an existing backend API resource.</p>
   */
  ModelIntrospectionSchema?: string;
}

/**
 * <p>The request body for GetBackendAuth.</p>
 */
export interface GetBackendAuthRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

export interface GetBackendAuthResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The resource configuration for authorization requests to the backend of your Amplify project.</p>
   */
  ResourceConfig?: CreateBackendAuthResourceConfig;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName?: string;
}

export interface GetBackendJobRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The ID for the job.</p>
   */
  JobId: string | undefined;
}

export interface GetBackendJobResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The time when the job was created.</p>
   */
  CreateTime?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;

  /**
   * <p>The time when the job was last updated.</p>
   */
  UpdateTime?: string;
}

/**
 * <p>The request body for GetBackendStorage.</p>
 */
export interface GetBackendStorageRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of the storage resource.</p>
   */
  ResourceName: string | undefined;
}

/**
 * <p>The details for a backend storage resource.</p>
 */
export interface GetBackendStorageResourceConfig {
  /**
   * <p>The name of the S3 bucket.</p>
   */
  BucketName?: string;

  /**
   * <p>Returns True if the storage resource has been imported.</p>
   */
  Imported: boolean | undefined;

  /**
   * <p>The authorization configuration for the storage S3 bucket.</p>
   */
  Permissions?: BackendStoragePermissions;

  /**
   * <p>The name of the storage service.</p>
   */
  ServiceName: ServiceName | string | undefined;
}

export interface GetBackendStorageResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The resource configuration for the backend storage resource.</p>
   */
  ResourceConfig?: GetBackendStorageResourceConfig;

  /**
   * <p>The name of the storage resource.</p>
   */
  ResourceName?: string;
}

export interface GetTokenRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

export interface GetTokenResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The one-time challenge code for authenticating into the Amplify Admin UI.</p>
   */
  ChallengeCode?: string;

  /**
   * <p>A unique ID provided when creating a new challenge token.</p>
   */
  SessionId?: string;

  /**
   * <p>The expiry time for the one-time generated token code.</p>
   */
  Ttl?: string;
}

/**
 * <p>The request body for ImportBackendAuth.</p>
 */
export interface ImportBackendAuthRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The ID of the Amazon Cognito identity pool.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>The ID of the Amazon Cognito native client.</p>
   */
  NativeClientId: string | undefined;

  /**
   * <p>The ID of the Amazon Cognito user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the Amazon Cognito web client.</p>
   */
  WebClientId: string | undefined;
}

export interface ImportBackendAuthResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * <p>The request body for ImportBackendStorage.</p>
 */
export interface ImportBackendStorageRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  BucketName?: string;

  /**
   * <p>The name of the storage service.</p>
   */
  ServiceName: ServiceName | string | undefined;
}

export interface ImportBackendStorageResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * <p>The request body for ListBackendJobs.</p>
 */
export interface ListBackendJobsRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The maximum number of results that you want in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters the list of response objects to include only those with the specified operation name.</p>
   */
  Operation?: string;

  /**
   * <p>Filters the list of response objects to include only those with the specified status.</p>
   */
  Status?: string;
}

/**
 * <p>The response object for this operation.</p>
 */
export interface BackendJobRespObj {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The time when the job was created.</p>
   */
  CreateTime?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;

  /**
   * <p>The time when the job was last updated.</p>
   */
  UpdateTime?: string;
}

export interface ListBackendJobsResponse {
  /**
   * <p>An array of jobs and their properties.</p>
   */
  Jobs?: BackendJobRespObj[];

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The request body for S3Buckets.</p>
 */
export interface ListS3BucketsRequest {
  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the metadata of the S3 bucket.</p>
 */
export interface S3BucketInfo {
  /**
   * <p>The creation date of the S3 bucket.</p>
   */
  CreationDate?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  Name?: string;
}

export interface ListS3BucketsResponse {
  /**
   * <p>The list of S3 buckets.</p>
   */
  Buckets?: S3BucketInfo[];

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

/**
 * <p>The request body for RemoveAllBackends.</p>
 */
export interface RemoveAllBackendsRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>Cleans up the Amplify Console app if this value is set to true.</p>
   */
  CleanAmplifyApp?: boolean;
}

export interface RemoveAllBackendsResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

export interface RemoveBackendConfigRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;
}

export interface RemoveBackendConfigResponse {
  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;
}

/**
 * <p>The request body for UpdateBackendAPI.</p>
 */
export interface UpdateBackendAPIRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>Defines the resource configuration for the data model in your Amplify project.</p>
   */
  ResourceConfig?: BackendAPIResourceConfig;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

export interface UpdateBackendAPIResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.</p>
 */
export interface UpdateBackendAuthIdentityPoolConfig {
  /**
   * <p>A boolean value that can be set to allow or disallow guest-level authorization into your Amplify app.</p>
   */
  UnauthenticatedLogin?: boolean;
}

/**
 * <p><b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app.</p>
 */
export interface UpdateBackendAuthForgotPasswordConfig {
  /**
   * <p><b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users that want to recover their password.</p>
   */
  DeliveryMethod?: DeliveryMethod | string;

  /**
   * <p><b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.</p>
   */
  EmailSettings?: EmailSettings;

  /**
   * <p><b>(DEPRECATED)</b> The configuration for the SMS message sent when an Amplify app user forgets their password.</p>
   */
  SmsSettings?: SmsSettings;
}

/**
 * <p>Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.</p>
 */
export interface UpdateBackendAuthMFAConfig {
  /**
   * <p>The MFA mode for the backend of your Amplify project.</p>
   */
  MFAMode?: MFAMode | string;

  /**
   * <p>The settings of your MFA configuration for the backend of your Amplify project.</p>
   */
  Settings?: Settings;
}

/**
 * <p>The OAuth configurations for authenticating users into your Amplify app.</p>
 */
export interface UpdateBackendAuthOAuthConfig {
  /**
   * <p>The Amazon Cognito domain prefix used to create a hosted UI for authentication.</p>
   */
  DomainPrefix?: string;

  /**
   * <p>The OAuth grant type to allow app users to authenticate from your Amplify app.</p>
   */
  OAuthGrantType?: OAuthGrantType | string;

  /**
   * <p>The list of OAuth-related flows that can allow users to authenticate from your Amplify app.</p>
   */
  OAuthScopes?: (OAuthScopesElement | string)[];

  /**
   * <p>Redirect URLs that OAuth uses when a user signs in to an Amplify app.</p>
   */
  RedirectSignInURIs?: string[];

  /**
   * <p>Redirect URLs that OAuth uses when a user signs out of an Amplify app.</p>
   */
  RedirectSignOutURIs?: string[];

  /**
   * <p>Describes third-party social federation configurations for allowing your users to sign in with OAuth.</p>
   */
  SocialProviderSettings?: SocialProviderSettings;
}

/**
 * <p>Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
 */
export interface UpdateBackendAuthPasswordPolicyConfig {
  /**
   * <p>Describes additional constraints on password requirements to sign in to the auth resource, configured as a part of your Amplify project.</p>
   */
  AdditionalConstraints?: (AdditionalConstraintsElement | string)[];

  /**
   * <p>Describes the minimum length of the password required to sign in to the auth resource, configured as a part of your Amplify project.</p>
   */
  MinimumLength?: number;
}

/**
 * <p>Updates the configuration of the email or SMS message for the auth resource configured for your Amplify project.</p>
 */
export interface UpdateBackendAuthVerificationMessageConfig {
  /**
   * <p>The type of verification message to send.</p>
   */
  DeliveryMethod: DeliveryMethod | string | undefined;

  /**
   * <p>The settings for the email message.</p>
   */
  EmailSettings?: EmailSettings;

  /**
   * <p>The settings for the SMS message.</p>
   */
  SmsSettings?: SmsSettings;
}

/**
 * <p>Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.</p>
 */
export interface UpdateBackendAuthUserPoolConfig {
  /**
   * <p><b>(DEPRECATED)</b> Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  ForgotPassword?: UpdateBackendAuthForgotPasswordConfig;

  /**
   * <p>Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.</p>
   */
  Mfa?: UpdateBackendAuthMFAConfig;

  /**
   * <p>Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  OAuth?: UpdateBackendAuthOAuthConfig;

  /**
   * <p>Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  PasswordPolicy?: UpdateBackendAuthPasswordPolicyConfig;

  /**
   * <p>Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  VerificationMessage?: UpdateBackendAuthVerificationMessageConfig;
}

/**
 * <p>Defines the resource configuration when updating an authentication resource in your Amplify project.</p>
 */
export interface UpdateBackendAuthResourceConfig {
  /**
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   */
  AuthResources: AuthResources | string | undefined;

  /**
   * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.</p>
   */
  IdentityPoolConfigs?: UpdateBackendAuthIdentityPoolConfig;

  /**
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   */
  Service: Service | string | undefined;

  /**
   * <p>Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.</p>
   */
  UserPoolConfigs: UpdateBackendAuthUserPoolConfig | undefined;
}

/**
 * <p>The request body for UpdateBackendAuth.</p>
 */
export interface UpdateBackendAuthRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for this request object.</p>
   */
  ResourceConfig: UpdateBackendAuthResourceConfig | undefined;

  /**
   * <p>The name of this resource.</p>
   */
  ResourceName: string | undefined;
}

export interface UpdateBackendAuthResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * <p>The request object for this operation.</p>
 */
export interface LoginAuthConfigReqObj {
  /**
   * <p>The Amazon Cognito identity pool ID used for the Amplify Admin UI login authorization.</p>
   */
  AwsCognitoIdentityPoolId?: string;

  /**
   * <p>The AWS Region for the Amplify Admin UI login.</p>
   */
  AwsCognitoRegion?: string;

  /**
   * <p>The Amazon Cognito user pool ID used for Amplify Admin UI login authentication.</p>
   */
  AwsUserPoolsId?: string;

  /**
   * <p>The web client ID for the Amazon Cognito user pools.</p>
   */
  AwsUserPoolsWebClientId?: string;
}

/**
 * <p>The request body for UpdateBackendConfig.</p>
 */
export interface UpdateBackendConfigRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>Describes the Amazon Cognito configuration for Admin UI access.</p>
   */
  LoginAuthConfig?: LoginAuthConfigReqObj;
}

export interface UpdateBackendConfigResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The app ID for the backend manager.</p>
   */
  BackendManagerAppId?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.</p>
   */
  LoginAuthConfig?: LoginAuthConfigReqObj;
}

/**
 * <p>The request body for GetBackendJob.</p>
 */
export interface UpdateBackendJobRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The ID for the job.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Filters the list of response objects to include only those with the specified operation name.</p>
   */
  Operation?: string;

  /**
   * <p>Filters the list of response objects to include only those with the specified status.</p>
   */
  Status?: string;
}

export interface UpdateBackendJobResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The time when the job was created.</p>
   */
  CreateTime?: string;

  /**
   * <p>If the request fails, this error is returned.</p>
   */
  Error?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the operation.</p>
   */
  Operation?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;

  /**
   * <p>The time when the job was last updated.</p>
   */
  UpdateTime?: string;
}

/**
 * <p>The resource configuration for updating backend storage.</p>
 */
export interface UpdateBackendStorageResourceConfig {
  /**
   * <p>The authorization configuration for the storage S3 bucket.</p>
   */
  Permissions: BackendStoragePermissions | undefined;

  /**
   * <p>The name of the storage service.</p>
   */
  ServiceName: ServiceName | string | undefined;
}

/**
 * <p>The request body for UpdateBackendStorage.</p>
 */
export interface UpdateBackendStorageRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName: string | undefined;

  /**
   * <p>The resource configuration for updating backend storage.</p>
   */
  ResourceConfig: UpdateBackendStorageResourceConfig | undefined;

  /**
   * <p>The name of the storage resource.</p>
   */
  ResourceName: string | undefined;
}

export interface UpdateBackendStorageResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The name of the backend environment.</p>
   */
  BackendEnvironmentName?: string;

  /**
   * <p>The ID for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: string;
}

/**
 * @internal
 */
export const CloneBackendRequestFilterSensitiveLog = (obj: CloneBackendRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloneBackendResponseFilterSensitiveLog = (obj: CloneBackendResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceConfigFilterSensitiveLog = (obj: ResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendRequestFilterSensitiveLog = (obj: CreateBackendRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendResponseFilterSensitiveLog = (obj: CreateBackendResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackendAPIAppSyncAuthSettingsFilterSensitiveLog = (obj: BackendAPIAppSyncAuthSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackendAPIAuthTypeFilterSensitiveLog = (obj: BackendAPIAuthType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackendAPIConflictResolutionFilterSensitiveLog = (obj: BackendAPIConflictResolution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackendAPIResourceConfigFilterSensitiveLog = (obj: BackendAPIResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAPIRequestFilterSensitiveLog = (obj: CreateBackendAPIRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAPIResponseFilterSensitiveLog = (obj: CreateBackendAPIResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAuthIdentityPoolConfigFilterSensitiveLog = (
  obj: CreateBackendAuthIdentityPoolConfig
): any => ({
  ...obj,
});

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
});

/**
 * @internal
 */
export const SettingsFilterSensitiveLog = (obj: Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAuthMFAConfigFilterSensitiveLog = (obj: CreateBackendAuthMFAConfig): any => ({
  ...obj,
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
});

/**
 * @internal
 */
export const CreateBackendAuthOAuthConfigFilterSensitiveLog = (obj: CreateBackendAuthOAuthConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAuthPasswordPolicyConfigFilterSensitiveLog = (
  obj: CreateBackendAuthPasswordPolicyConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAuthVerificationMessageConfigFilterSensitiveLog = (
  obj: CreateBackendAuthVerificationMessageConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAuthUserPoolConfigFilterSensitiveLog = (obj: CreateBackendAuthUserPoolConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAuthResourceConfigFilterSensitiveLog = (obj: CreateBackendAuthResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAuthRequestFilterSensitiveLog = (obj: CreateBackendAuthRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendAuthResponseFilterSensitiveLog = (obj: CreateBackendAuthResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendConfigRequestFilterSensitiveLog = (obj: CreateBackendConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendConfigResponseFilterSensitiveLog = (obj: CreateBackendConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackendStoragePermissionsFilterSensitiveLog = (obj: BackendStoragePermissions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendStorageResourceConfigFilterSensitiveLog = (obj: CreateBackendStorageResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendStorageRequestFilterSensitiveLog = (obj: CreateBackendStorageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackendStorageResponseFilterSensitiveLog = (obj: CreateBackendStorageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTokenRequestFilterSensitiveLog = (obj: CreateTokenRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTokenResponseFilterSensitiveLog = (obj: CreateTokenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackendRequestFilterSensitiveLog = (obj: DeleteBackendRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackendResponseFilterSensitiveLog = (obj: DeleteBackendResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackendAPIRequestFilterSensitiveLog = (obj: DeleteBackendAPIRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackendAPIResponseFilterSensitiveLog = (obj: DeleteBackendAPIResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackendAuthRequestFilterSensitiveLog = (obj: DeleteBackendAuthRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackendAuthResponseFilterSensitiveLog = (obj: DeleteBackendAuthResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackendStorageRequestFilterSensitiveLog = (obj: DeleteBackendStorageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackendStorageResponseFilterSensitiveLog = (obj: DeleteBackendStorageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTokenRequestFilterSensitiveLog = (obj: DeleteTokenRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTokenResponseFilterSensitiveLog = (obj: DeleteTokenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateBackendAPIModelsRequestFilterSensitiveLog = (obj: GenerateBackendAPIModelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateBackendAPIModelsResponseFilterSensitiveLog = (obj: GenerateBackendAPIModelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendRequestFilterSensitiveLog = (obj: GetBackendRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendResponseFilterSensitiveLog = (obj: GetBackendResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendAPIRequestFilterSensitiveLog = (obj: GetBackendAPIRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendAPIResponseFilterSensitiveLog = (obj: GetBackendAPIResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendAPIModelsRequestFilterSensitiveLog = (obj: GetBackendAPIModelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendAPIModelsResponseFilterSensitiveLog = (obj: GetBackendAPIModelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendAuthRequestFilterSensitiveLog = (obj: GetBackendAuthRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendAuthResponseFilterSensitiveLog = (obj: GetBackendAuthResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendJobRequestFilterSensitiveLog = (obj: GetBackendJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendJobResponseFilterSensitiveLog = (obj: GetBackendJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendStorageRequestFilterSensitiveLog = (obj: GetBackendStorageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendStorageResourceConfigFilterSensitiveLog = (obj: GetBackendStorageResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBackendStorageResponseFilterSensitiveLog = (obj: GetBackendStorageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTokenRequestFilterSensitiveLog = (obj: GetTokenRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTokenResponseFilterSensitiveLog = (obj: GetTokenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportBackendAuthRequestFilterSensitiveLog = (obj: ImportBackendAuthRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportBackendAuthResponseFilterSensitiveLog = (obj: ImportBackendAuthResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportBackendStorageRequestFilterSensitiveLog = (obj: ImportBackendStorageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportBackendStorageResponseFilterSensitiveLog = (obj: ImportBackendStorageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackendJobsRequestFilterSensitiveLog = (obj: ListBackendJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackendJobRespObjFilterSensitiveLog = (obj: BackendJobRespObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBackendJobsResponseFilterSensitiveLog = (obj: ListBackendJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListS3BucketsRequestFilterSensitiveLog = (obj: ListS3BucketsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3BucketInfoFilterSensitiveLog = (obj: S3BucketInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListS3BucketsResponseFilterSensitiveLog = (obj: ListS3BucketsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveAllBackendsRequestFilterSensitiveLog = (obj: RemoveAllBackendsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveAllBackendsResponseFilterSensitiveLog = (obj: RemoveAllBackendsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveBackendConfigRequestFilterSensitiveLog = (obj: RemoveBackendConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveBackendConfigResponseFilterSensitiveLog = (obj: RemoveBackendConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAPIRequestFilterSensitiveLog = (obj: UpdateBackendAPIRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAPIResponseFilterSensitiveLog = (obj: UpdateBackendAPIResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAuthIdentityPoolConfigFilterSensitiveLog = (
  obj: UpdateBackendAuthIdentityPoolConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAuthForgotPasswordConfigFilterSensitiveLog = (
  obj: UpdateBackendAuthForgotPasswordConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAuthMFAConfigFilterSensitiveLog = (obj: UpdateBackendAuthMFAConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAuthOAuthConfigFilterSensitiveLog = (obj: UpdateBackendAuthOAuthConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAuthPasswordPolicyConfigFilterSensitiveLog = (
  obj: UpdateBackendAuthPasswordPolicyConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAuthVerificationMessageConfigFilterSensitiveLog = (
  obj: UpdateBackendAuthVerificationMessageConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAuthUserPoolConfigFilterSensitiveLog = (obj: UpdateBackendAuthUserPoolConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAuthResourceConfigFilterSensitiveLog = (obj: UpdateBackendAuthResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAuthRequestFilterSensitiveLog = (obj: UpdateBackendAuthRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendAuthResponseFilterSensitiveLog = (obj: UpdateBackendAuthResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoginAuthConfigReqObjFilterSensitiveLog = (obj: LoginAuthConfigReqObj): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendConfigRequestFilterSensitiveLog = (obj: UpdateBackendConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendConfigResponseFilterSensitiveLog = (obj: UpdateBackendConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendJobRequestFilterSensitiveLog = (obj: UpdateBackendJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendJobResponseFilterSensitiveLog = (obj: UpdateBackendJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendStorageResourceConfigFilterSensitiveLog = (obj: UpdateBackendStorageResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendStorageRequestFilterSensitiveLog = (obj: UpdateBackendStorageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBackendStorageResponseFilterSensitiveLog = (obj: UpdateBackendStorageResponse): any => ({
  ...obj,
});
