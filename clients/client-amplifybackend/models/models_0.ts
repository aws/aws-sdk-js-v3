import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AdditionalConstraintsElement {
  REQUIRE_DIGIT = "REQUIRE_DIGIT",
  REQUIRE_LOWERCASE = "REQUIRE_LOWERCASE",
  REQUIRE_SYMBOL = "REQUIRE_SYMBOL",
  REQUIRE_UPPERCASE = "REQUIRE_UPPERCASE",
}

/**
 * <p>An error returned if a request is not formed properly.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>An error message to inform that the request failed.</p>
   */
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
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

export namespace CloneBackendRequest {
  export const filterSensitiveLog = (obj: CloneBackendRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace CloneBackendResponse {
  export const filterSensitiveLog = (obj: CloneBackendResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An error returned if there's a temporary issue with the service.</p>
 */
export interface GatewayTimeoutException extends __SmithyException, $MetadataBearer {
  name: "GatewayTimeoutException";
  $fault: "server";
  /**
   * <p>An error message to inform that the request failed.</p>
   */
  Message?: string;
}

export namespace GatewayTimeoutException {
  export const filterSensitiveLog = (obj: GatewayTimeoutException): any => ({
    ...obj,
  });
}

/**
 * <p>An error returned when a specific resource type is not found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>An error message to inform that the request failed.</p>
   */
  Message?: string;

  /**
   * <p>The type of resource that wasn't found.</p>
   */
  ResourceType?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>An error that is returned when a limit of a specific type is exceeded.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The type of limit that was exceeded.</p>
   */
  LimitType?: string;

  /**
   * <p>An error message to inform that the request failed.</p>
   */
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the resource configuration for the data model in your Amplify project.</p>
 */
export interface ResourceConfig {}

export namespace ResourceConfig {
  export const filterSensitiveLog = (obj: ResourceConfig): any => ({
    ...obj,
  });
}

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
   * <p>The resource configuration for the backend creation request.</p>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;
}

export namespace CreateBackendRequest {
  export const filterSensitiveLog = (obj: CreateBackendRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace CreateBackendResponse {
  export const filterSensitiveLog = (obj: CreateBackendResponse): any => ({
    ...obj,
  });
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
   * <p>The Amazon Cognito user pool ID, if Amazon Cognito is used as an authentication setting to access your data models.</p>
   */
  CognitoUserPoolId?: string;

  /**
   * <p>The API key description for API_KEY, if it is used as an authentication mechanism to access your data models.</p>
   */
  Description?: string;

  /**
   * <p>The API key expiration time for API_KEY, if it is used as an authentication mechanism to access your data models.</p>
   */
  ExpirationTime?: number;

  /**
   * <p>The expiry time for the OpenID authentication mechanism.</p>
   */
  OpenIDAuthTTL?: string;

  /**
   * <p>The clientID for openID, if openID is used as an authentication setting to access your data models.</p>
   */
  OpenIDClientId?: string;

  /**
   * <p>The expiry time for the OpenID authentication mechanism.</p>
   */
  OpenIDIatTTL?: string;

  /**
   * <p>The openID issuer URL, if openID is used as an authentication setting to access your data models.</p>
   */
  OpenIDIssueURL?: string;

  /**
   * <p>The openID provider name, if openID is used as an authentication mechanism to access your data models.</p>
   */
  OpenIDProviderName?: string;
}

export namespace BackendAPIAppSyncAuthSettings {
  export const filterSensitiveLog = (obj: BackendAPIAppSyncAuthSettings): any => ({
    ...obj,
  });
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

export namespace BackendAPIAuthType {
  export const filterSensitiveLog = (obj: BackendAPIAuthType): any => ({
    ...obj,
  });
}

export enum ResolutionStrategy {
  AUTOMERGE = "AUTOMERGE",
  LAMBDA = "LAMBDA",
  NONE = "NONE",
  OPTIMISTIC_CONCURRENCY = "OPTIMISTIC_CONCURRENCY",
}

/**
 * <p>Describes the conflict resolution configuration for the data model configured in your Amplify project.</p>
 */
export interface BackendAPIConflictResolution {
  /**
   * <p>The strategy for conflict resolution.</p>
   */
  ResolutionStrategy?: ResolutionStrategy | string;
}

export namespace BackendAPIConflictResolution {
  export const filterSensitiveLog = (obj: BackendAPIConflictResolution): any => ({
    ...obj,
  });
}

/**
 * <p>The resource configuration for the data model, configured as a part of the Amplify project.</p>
 */
export interface BackendAPIResourceConfig {
  /**
   * <p>Additional authentication methods used to interact with your data models.</p>
   */
  AdditionalAuthTypes?: BackendAPIAuthType[];

  /**
   * <p>The API name used to interact with the data model, configured as a part of the Amplify project.</p>
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

export namespace BackendAPIResourceConfig {
  export const filterSensitiveLog = (obj: BackendAPIResourceConfig): any => ({
    ...obj,
  });
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

export namespace CreateBackendAPIRequest {
  export const filterSensitiveLog = (obj: CreateBackendAPIRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace CreateBackendAPIResponse {
  export const filterSensitiveLog = (obj: CreateBackendAPIResponse): any => ({
    ...obj,
  });
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
   * <p>Name of the identity pool used for authorization.</p>
   */
  IdentityPoolName: string | undefined;

  /**
   * <p>Set to true or false based on whether you want to enable guest authorization to your Amplify app.</p>
   */
  UnauthenticatedLogin: boolean | undefined;
}

export namespace CreateBackendAuthIdentityPoolConfig {
  export const filterSensitiveLog = (obj: CreateBackendAuthIdentityPoolConfig): any => ({
    ...obj,
  });
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
   * <p>The body of the email.</p>
   */
  EmailMessage?: string;

  /**
   * <p>The subject of the email.</p>
   */
  EmailSubject?: string;
}

export namespace EmailSettings {
  export const filterSensitiveLog = (obj: EmailSettings): any => ({
    ...obj,
  });
}

/**
 * <p>SMS settings for authentication.</p>
 */
export interface SmsSettings {
  /**
   * <p>The body of the SMS message.</p>
   */
  SmsMessage?: string;
}

export namespace SmsSettings {
  export const filterSensitiveLog = (obj: SmsSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the forgot password policy for authenticating into the Amplify app.</p>
 */
export interface CreateBackendAuthForgotPasswordConfig {
  /**
   * <p>Describes which method to use (either SMS or email) to deliver messages to app users that want to recover their password.</p>
   */
  DeliveryMethod: DeliveryMethod | string | undefined;

  /**
   * <p>The configuration for the email sent when an app user forgets their password.</p>
   */
  EmailSettings?: EmailSettings;

  /**
   * <p>The configuration for the SMS message sent when an app user forgets their password.</p>
   */
  SmsSettings?: SmsSettings;
}

export namespace CreateBackendAuthForgotPasswordConfig {
  export const filterSensitiveLog = (obj: CreateBackendAuthForgotPasswordConfig): any => ({
    ...obj,
  });
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

export namespace Settings {
  export const filterSensitiveLog = (obj: Settings): any => ({
    ...obj,
  });
}

/**
 * <p>Describes whether to apply multi-factor authentication (MFA) policies for your Amazon Cognito user pool that's configured as a part of your Amplify project.</p>
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

export namespace CreateBackendAuthMFAConfig {
  export const filterSensitiveLog = (obj: CreateBackendAuthMFAConfig): any => ({
    ...obj,
  });
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
   * <p>Describes the client_id that can be obtained from the third-party social federation provider.</p>
   */
  ClientId?: string;

  /**
   * <p>Describes the client_secret that can be obtained from third-party social federation providers.</p>
   */
  ClientSecret?: string;
}

export namespace BackendAuthSocialProviderConfig {
  export const filterSensitiveLog = (obj: BackendAuthSocialProviderConfig): any => ({
    ...obj,
  });
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
}

export namespace SocialProviderSettings {
  export const filterSensitiveLog = (obj: SocialProviderSettings): any => ({
    ...obj,
  });
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
   * <p>List of OAuth-related flows that allow your app users to authenticate from your Amplify app.</p>
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
   * <p>The settings for using social identity providers for access to your Amplify app.</p>
   */
  SocialProviderSettings?: SocialProviderSettings;
}

export namespace CreateBackendAuthOAuthConfig {
  export const filterSensitiveLog = (obj: CreateBackendAuthOAuthConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The password policy configuration for the backend of your Amplify project.</p>
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

export namespace CreateBackendAuthPasswordPolicyConfig {
  export const filterSensitiveLog = (obj: CreateBackendAuthPasswordPolicyConfig): any => ({
    ...obj,
  });
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
 * <p>Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.</p>
 */
export interface CreateBackendAuthUserPoolConfig {
  /**
   * <p>Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  ForgotPassword?: CreateBackendAuthForgotPasswordConfig;

  /**
   * <p>Describes whether to apply multi-factor authentication (MFA) policies for your Amazon Cognito user pool that's configured as a part of your Amplify project.</p>
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
   * <p>The required attributes to sign up new users in the Amazon Cognito user pool.</p>
   */
  RequiredSignUpAttributes: (RequiredSignUpAttributesElement | string)[] | undefined;

  /**
   * <p>Describes the sign-in methods that your Amplify app users to log in using the Amazon Cognito user pool that's configured as a part of your Amplify project.</p>
   */
  SignInMethod: SignInMethod | string | undefined;

  /**
   * <p>The Amazon Cognito user pool name.</p>
   */
  UserPoolName: string | undefined;
}

export namespace CreateBackendAuthUserPoolConfig {
  export const filterSensitiveLog = (obj: CreateBackendAuthUserPoolConfig): any => ({
    ...obj,
  });
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
   * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of the auth resource in your Amplify project.</p>
   */
  IdentityPoolConfigs?: CreateBackendAuthIdentityPoolConfig;

  /**
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   */
  Service: Service | string | undefined;

  /**
   * <p>Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of the auth resource in your Amplify project.</p>
   */
  UserPoolConfigs: CreateBackendAuthUserPoolConfig | undefined;
}

export namespace CreateBackendAuthResourceConfig {
  export const filterSensitiveLog = (obj: CreateBackendAuthResourceConfig): any => ({
    ...obj,
  });
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

export namespace CreateBackendAuthRequest {
  export const filterSensitiveLog = (obj: CreateBackendAuthRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace CreateBackendAuthResponse {
  export const filterSensitiveLog = (obj: CreateBackendAuthResponse): any => ({
    ...obj,
  });
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

export namespace CreateBackendConfigRequest {
  export const filterSensitiveLog = (obj: CreateBackendConfigRequest): any => ({
    ...obj,
  });
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

export namespace CreateBackendConfigResponse {
  export const filterSensitiveLog = (obj: CreateBackendConfigResponse): any => ({
    ...obj,
  });
}

export interface CreateTokenRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;
}

export namespace CreateTokenRequest {
  export const filterSensitiveLog = (obj: CreateTokenRequest): any => ({
    ...obj,
  });
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

export namespace CreateTokenResponse {
  export const filterSensitiveLog = (obj: CreateTokenResponse): any => ({
    ...obj,
  });
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

export namespace DeleteBackendRequest {
  export const filterSensitiveLog = (obj: DeleteBackendRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace DeleteBackendResponse {
  export const filterSensitiveLog = (obj: DeleteBackendResponse): any => ({
    ...obj,
  });
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

export namespace DeleteBackendAPIRequest {
  export const filterSensitiveLog = (obj: DeleteBackendAPIRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace DeleteBackendAPIResponse {
  export const filterSensitiveLog = (obj: DeleteBackendAPIResponse): any => ({
    ...obj,
  });
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

export namespace DeleteBackendAuthRequest {
  export const filterSensitiveLog = (obj: DeleteBackendAuthRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace DeleteBackendAuthResponse {
  export const filterSensitiveLog = (obj: DeleteBackendAuthResponse): any => ({
    ...obj,
  });
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

export namespace DeleteTokenRequest {
  export const filterSensitiveLog = (obj: DeleteTokenRequest): any => ({
    ...obj,
  });
}

export interface DeleteTokenResponse {
  /**
   * <p>Indicates whether the request succeeded or failed.</p>
   */
  IsSuccess?: boolean;
}

export namespace DeleteTokenResponse {
  export const filterSensitiveLog = (obj: DeleteTokenResponse): any => ({
    ...obj,
  });
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

export namespace GenerateBackendAPIModelsRequest {
  export const filterSensitiveLog = (obj: GenerateBackendAPIModelsRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace GenerateBackendAPIModelsResponse {
  export const filterSensitiveLog = (obj: GenerateBackendAPIModelsResponse): any => ({
    ...obj,
  });
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

export namespace GetBackendRequest {
  export const filterSensitiveLog = (obj: GetBackendRequest): any => ({
    ...obj,
  });
}

export interface GetBackendResponse {
  /**
   * <p>A stringified version of the current configurations for your Amplify project.</p>
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

export namespace GetBackendResponse {
  export const filterSensitiveLog = (obj: GetBackendResponse): any => ({
    ...obj,
  });
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

export namespace GetBackendAPIRequest {
  export const filterSensitiveLog = (obj: GetBackendAPIRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace GetBackendAPIResponse {
  export const filterSensitiveLog = (obj: GetBackendAPIResponse): any => ({
    ...obj,
  });
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

export namespace GetBackendAPIModelsRequest {
  export const filterSensitiveLog = (obj: GetBackendAPIModelsRequest): any => ({
    ...obj,
  });
}

export enum Status {
  LATEST = "LATEST",
  STALE = "STALE",
}

export interface GetBackendAPIModelsResponse {
  /**
   * <p>Stringified JSON of the DataStore model.</p>
   */
  Models?: string;

  /**
   * <p>The current status of the request.</p>
   */
  Status?: Status | string;
}

export namespace GetBackendAPIModelsResponse {
  export const filterSensitiveLog = (obj: GetBackendAPIModelsResponse): any => ({
    ...obj,
  });
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

export namespace GetBackendAuthRequest {
  export const filterSensitiveLog = (obj: GetBackendAuthRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace GetBackendAuthResponse {
  export const filterSensitiveLog = (obj: GetBackendAuthResponse): any => ({
    ...obj,
  });
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

export namespace GetBackendJobRequest {
  export const filterSensitiveLog = (obj: GetBackendJobRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace GetBackendJobResponse {
  export const filterSensitiveLog = (obj: GetBackendJobResponse): any => ({
    ...obj,
  });
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

export namespace GetTokenRequest {
  export const filterSensitiveLog = (obj: GetTokenRequest): any => ({
    ...obj,
  });
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

export namespace GetTokenResponse {
  export const filterSensitiveLog = (obj: GetTokenResponse): any => ({
    ...obj,
  });
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

export namespace ListBackendJobsRequest {
  export const filterSensitiveLog = (obj: ListBackendJobsRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace BackendJobRespObj {
  export const filterSensitiveLog = (obj: BackendJobRespObj): any => ({
    ...obj,
  });
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

export namespace ListBackendJobsResponse {
  export const filterSensitiveLog = (obj: ListBackendJobsResponse): any => ({
    ...obj,
  });
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

export namespace RemoveAllBackendsRequest {
  export const filterSensitiveLog = (obj: RemoveAllBackendsRequest): any => ({
    ...obj,
  });
}

export interface RemoveAllBackendsResponse {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>If the request failed, this is the returned error.</p>
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

export namespace RemoveAllBackendsResponse {
  export const filterSensitiveLog = (obj: RemoveAllBackendsResponse): any => ({
    ...obj,
  });
}

export interface RemoveBackendConfigRequest {
  /**
   * <p>The app ID.</p>
   */
  AppId: string | undefined;
}

export namespace RemoveBackendConfigRequest {
  export const filterSensitiveLog = (obj: RemoveBackendConfigRequest): any => ({
    ...obj,
  });
}

export interface RemoveBackendConfigResponse {
  /**
   * <p>If the request failed, this is the returned error.</p>
   */
  Error?: string;
}

export namespace RemoveBackendConfigResponse {
  export const filterSensitiveLog = (obj: RemoveBackendConfigResponse): any => ({
    ...obj,
  });
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

export namespace UpdateBackendAPIRequest {
  export const filterSensitiveLog = (obj: UpdateBackendAPIRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace UpdateBackendAPIResponse {
  export const filterSensitiveLog = (obj: UpdateBackendAPIResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.</p>
 */
export interface UpdateBackendAuthIdentityPoolConfig {
  /**
   * <p>A Boolean value that you can set to allow or disallow guest-level authorization into your Amplify app.</p>
   */
  UnauthenticatedLogin?: boolean;
}

export namespace UpdateBackendAuthIdentityPoolConfig {
  export const filterSensitiveLog = (obj: UpdateBackendAuthIdentityPoolConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the forgot password policy for authenticating into the Amplify app.</p>
 */
export interface UpdateBackendAuthForgotPasswordConfig {
  /**
   * <p>Describes which method to use (either SMS or email) to deliver messages to app users that want to recover their password.</p>
   */
  DeliveryMethod?: DeliveryMethod | string;

  /**
   * <p>The configuration for the email sent when an app user forgets their password.</p>
   */
  EmailSettings?: EmailSettings;

  /**
   * <p>The configuration for the SMS message sent when an Amplify app user forgets their password.</p>
   */
  SmsSettings?: SmsSettings;
}

export namespace UpdateBackendAuthForgotPasswordConfig {
  export const filterSensitiveLog = (obj: UpdateBackendAuthForgotPasswordConfig): any => ({
    ...obj,
  });
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

export namespace UpdateBackendAuthMFAConfig {
  export const filterSensitiveLog = (obj: UpdateBackendAuthMFAConfig): any => ({
    ...obj,
  });
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

export namespace UpdateBackendAuthOAuthConfig {
  export const filterSensitiveLog = (obj: UpdateBackendAuthOAuthConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the password policy for your Amazon Cognito user pool that's configured as a part of your Amplify project.</p>
 */
export interface UpdateBackendAuthPasswordPolicyConfig {
  /**
   * <p>Describes additional constrains on the password requirements to sign in to the auth resource, configured as a part of your Amplify project.</p>
   */
  AdditionalConstraints?: (AdditionalConstraintsElement | string)[];

  /**
   * <p>Describes the minimum length of the password required to sign in to the auth resource, configured as a part of your Amplify project.</p>
   */
  MinimumLength?: number;
}

export namespace UpdateBackendAuthPasswordPolicyConfig {
  export const filterSensitiveLog = (obj: UpdateBackendAuthPasswordPolicyConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon Cognito user pool configuration to configure the authorization resource for your Amplify project on an update.</p>
 */
export interface UpdateBackendAuthUserPoolConfig {
  /**
   * <p>Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.</p>
   */
  ForgotPassword?: UpdateBackendAuthForgotPasswordConfig;

  /**
   * <p>Describes whether to apply multi-factor authentication (MFA) policies for your Amazon Cognito user pool that's configured as a part of your Amplify project.</p>
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
}

export namespace UpdateBackendAuthUserPoolConfig {
  export const filterSensitiveLog = (obj: UpdateBackendAuthUserPoolConfig): any => ({
    ...obj,
  });
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
   * <p>Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of the auth resource in your Amplify project.</p>
   */
  IdentityPoolConfigs?: UpdateBackendAuthIdentityPoolConfig;

  /**
   * <p>Defines the service name to use when configuring an authentication resource in your Amplify project.</p>
   */
  Service: Service | string | undefined;

  /**
   * <p>Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of the auth resource in your Amplify project.</p>
   */
  UserPoolConfigs: UpdateBackendAuthUserPoolConfig | undefined;
}

export namespace UpdateBackendAuthResourceConfig {
  export const filterSensitiveLog = (obj: UpdateBackendAuthResourceConfig): any => ({
    ...obj,
  });
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

export namespace UpdateBackendAuthRequest {
  export const filterSensitiveLog = (obj: UpdateBackendAuthRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace UpdateBackendAuthResponse {
  export const filterSensitiveLog = (obj: UpdateBackendAuthResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for this operation.</p>
 */
export interface LoginAuthConfigReqObj {
  /**
   * <p>The Amazon Cognito identity pool ID used for Amplify Admin UI login authorization.</p>
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

export namespace LoginAuthConfigReqObj {
  export const filterSensitiveLog = (obj: LoginAuthConfigReqObj): any => ({
    ...obj,
  });
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

export namespace UpdateBackendConfigRequest {
  export const filterSensitiveLog = (obj: UpdateBackendConfigRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
   */
  Error?: string;

  /**
   * <p>Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.</p>
   */
  LoginAuthConfig?: LoginAuthConfigReqObj;
}

export namespace UpdateBackendConfigResponse {
  export const filterSensitiveLog = (obj: UpdateBackendConfigResponse): any => ({
    ...obj,
  });
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

export namespace UpdateBackendJobRequest {
  export const filterSensitiveLog = (obj: UpdateBackendJobRequest): any => ({
    ...obj,
  });
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
   * <p>If the request failed, this is the returned error.</p>
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

export namespace UpdateBackendJobResponse {
  export const filterSensitiveLog = (obj: UpdateBackendJobResponse): any => ({
    ...obj,
  });
}
