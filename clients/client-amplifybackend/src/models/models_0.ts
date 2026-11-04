// smithy-typescript generated code
import type {
  AdditionalConstraintsElement,
  AuthenticatedElement,
  AuthResources,
  DeliveryMethod,
  MFAMode,
  MfaTypesElement,
  Mode,
  OAuthGrantType,
  OAuthScopesElement,
  RequiredSignUpAttributesElement,
  ResolutionStrategy,
  Service,
  ServiceName,
  SignInMethod,
  Status,
  UnAuthenticatedElement,
} from "./enums";

/**
 * The request body for CloneBackend.
 *
 * @public
 */
export interface CloneBackendRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The name of the destination backend environment to be created.
   *
   * @public
   */
  TargetEnvironmentName: string | undefined;
}

/**
 * @public
 */
export interface CloneBackendResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Defines the resource configuration for the data model in your Amplify project.
 *
 * @public
 */
export interface ResourceConfig {}

/**
 * The request body for CreateBackend.
 *
 * @public
 */
export interface CreateBackendRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the app.
   *
   * @public
   */
  AppName: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The resource configuration for creating a backend.
   *
   * @public
   */
  ResourceConfig?: ResourceConfig | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The authentication settings for accessing provisioned data models in your Amplify project.
 *
 * @public
 */
export interface BackendAPIAppSyncAuthSettings {
  /**
   * The Amazon Cognito user pool ID, if Amazon Cognito was used as an authentication setting to access your data models.
   *
   * @public
   */
  CognitoUserPoolId?: string | undefined;

  /**
   * The API key description for API_KEY, if it was used as an authentication mechanism to access your data models.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The API key expiration time for API_KEY, if it was used as an authentication mechanism to access your data models.
   *
   * @public
   */
  ExpirationTime?: number | undefined;

  /**
   * The expiry time for the OpenID authentication mechanism.
   *
   * @public
   */
  OpenIDAuthTTL?: string | undefined;

  /**
   * The clientID for openID, if openID was used as an authentication setting to access your data models.
   *
   * @public
   */
  OpenIDClientId?: string | undefined;

  /**
   * The expiry time for the OpenID authentication mechanism.
   *
   * @public
   */
  OpenIDIatTTL?: string | undefined;

  /**
   * The openID issuer URL, if openID was used as an authentication setting to access your data models.
   *
   * @public
   */
  OpenIDIssueURL?: string | undefined;

  /**
   * The OpenID provider name, if OpenID was used as an authentication mechanism to access your data models.
   *
   * @public
   */
  OpenIDProviderName?: string | undefined;
}

/**
 * Describes the auth types for your configured data models.
 *
 * @public
 */
export interface BackendAPIAuthType {
  /**
   * Describes the authentication mode.
   *
   * @public
   */
  Mode?: Mode | undefined;

  /**
   * Describes settings for the authentication mode.
   *
   * @public
   */
  Settings?: BackendAPIAppSyncAuthSettings | undefined;
}

/**
 * Describes the conflict resolution configuration for your data model configured in your Amplify project.
 *
 * @public
 */
export interface BackendAPIConflictResolution {
  /**
   * The strategy for conflict resolution.
   *
   * @public
   */
  ResolutionStrategy?: ResolutionStrategy | undefined;
}

/**
 * The resource config for the data model, configured as a part of the Amplify project.
 *
 * @public
 */
export interface BackendAPIResourceConfig {
  /**
   * Additional authentication methods used to interact with your data models.
   *
   * @public
   */
  AdditionalAuthTypes?: BackendAPIAuthType[] | undefined;

  /**
   * The API name used to interact with the data model, configured as a part of your Amplify project.
   *
   * @public
   */
  ApiName?: string | undefined;

  /**
   * The conflict resolution strategy for your data stored in the data models.
   *
   * @public
   */
  ConflictResolution?: BackendAPIConflictResolution | undefined;

  /**
   * The default authentication type for interacting with the configured data models in your Amplify project.
   *
   * @public
   */
  DefaultAuthType?: BackendAPIAuthType | undefined;

  /**
   * The service used to provision and interact with the data model.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * The definition of the data model in the annotated transform of the GraphQL schema.
   *
   * @public
   */
  TransformSchema?: string | undefined;
}

/**
 * The request body for CreateBackendAPI.
 *
 * @public
 */
export interface CreateBackendAPIRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The resource configuration for this request.
   *
   * @public
   */
  ResourceConfig: BackendAPIResourceConfig | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendAPIResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Describes authorization configurations for the auth resources, configured as a part of your Amplify project.
 *
 * @public
 */
export interface CreateBackendAuthIdentityPoolConfig {
  /**
   * Name of the Amazon Cognito identity pool used for authorization.
   *
   * @public
   */
  IdentityPoolName: string | undefined;

  /**
   * Set to true or false based on whether you want to enable guest authorization to your Amplify app.
   *
   * @public
   */
  UnauthenticatedLogin: boolean | undefined;
}

/**
 * The configuration for the email sent when an app user forgets their password.
 *
 * @public
 */
export interface EmailSettings {
  /**
   * The contents of the email message.
   *
   * @public
   */
  EmailMessage?: string | undefined;

  /**
   * The contents of the subject line of the email message.
   *
   * @public
   */
  EmailSubject?: string | undefined;
}

/**
 * SMS settings for authentication.
 *
 * @public
 */
export interface SmsSettings {
  /**
   * The contents of the SMS message.
   *
   * @public
   */
  SmsMessage?: string | undefined;
}

/**
 * **(DEPRECATED)** Describes the forgot password policy for authenticating into the Amplify app.
 *
 * @public
 */
export interface CreateBackendAuthForgotPasswordConfig {
  /**
   * **(DEPRECATED)** Describes which mode to use (either SMS or email) to deliver messages to app users who want to recover their password.
   *
   * @public
   */
  DeliveryMethod: DeliveryMethod | undefined;

  /**
   * **(DEPRECATED)** The configuration for the email sent when an app user forgets their password.
   *
   * @public
   */
  EmailSettings?: EmailSettings | undefined;

  /**
   * **(DEPRECATED)** The configuration for the SMS message sent when an app user forgets their password.
   *
   * @public
   */
  SmsSettings?: SmsSettings | undefined;
}

/**
 * The settings of your MFA configuration for the backend of your Amplify project.
 *
 * @public
 */
export interface Settings {
  /**
   * The supported MFA types.
   *
   * @public
   */
  MfaTypes?: MfaTypesElement[] | undefined;

  /**
   * The body of the SMS message.
   *
   * @public
   */
  SmsMessage?: string | undefined;
}

/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
 *
 * @public
 */
export interface CreateBackendAuthMFAConfig {
  /**
   * Describes whether MFA should be [ON, OFF, or OPTIONAL] for authentication in your Amplify project.
   *
   * @public
   */
  MFAMode: MFAMode | undefined;

  /**
   * Describes the configuration settings and methods for your Amplify app users to use MFA.
   *
   * @public
   */
  Settings?: Settings | undefined;
}

/**
 * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
 *
 * @public
 */
export interface BackendAuthSocialProviderConfig {
  /**
   * Describes the client_id, which can be obtained from the third-party social federation provider.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * Describes the client_secret, which can be obtained from third-party social federation providers.
   *
   * @public
   */
  ClientSecret?: string | undefined;
}

/**
 * Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
 *
 * @public
 */
export interface BackendAuthAppleProviderConfig {
  /**
   * Describes the client_id (also called Services ID) that comes from Apple.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * Describes the key_id that comes from Apple.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Describes the private_key that comes from Apple.
   *
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * Describes the team_id that comes from Apple.
   *
   * @public
   */
  TeamId?: string | undefined;
}

/**
 * The settings for using the social identity providers for access to your Amplify app.
 *
 * @public
 */
export interface SocialProviderSettings {
  /**
   * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
   *
   * @public
   */
  Facebook?: BackendAuthSocialProviderConfig | undefined;

  /**
   * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
   *
   * @public
   */
  Google?: BackendAuthSocialProviderConfig | undefined;

  /**
   * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
   *
   * @public
   */
  LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined;

  /**
   * Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
   *
   * @public
   */
  SignInWithApple?: BackendAuthAppleProviderConfig | undefined;
}

/**
 * Creates the OAuth configuration for your Amplify project.
 *
 * @public
 */
export interface CreateBackendAuthOAuthConfig {
  /**
   * The domain prefix for your Amplify app.
   *
   * @public
   */
  DomainPrefix?: string | undefined;

  /**
   * The OAuth grant type that you use to allow app users to authenticate from your Amplify app.
   *
   * @public
   */
  OAuthGrantType: OAuthGrantType | undefined;

  /**
   * List of OAuth-related flows used to allow your app users to authenticate from your Amplify app.
   *
   * @public
   */
  OAuthScopes: OAuthScopesElement[] | undefined;

  /**
   * The redirected URI for signing in to your Amplify app.
   *
   * @public
   */
  RedirectSignInURIs: string[] | undefined;

  /**
   * Redirect URLs that OAuth uses when a user signs out of an Amplify app.
   *
   * @public
   */
  RedirectSignOutURIs: string[] | undefined;

  /**
   * The settings for using social providers to access your Amplify app.
   *
   * @public
   */
  SocialProviderSettings?: SocialProviderSettings | undefined;
}

/**
 * The password policy configuration for the backend to your Amplify project.
 *
 * @public
 */
export interface CreateBackendAuthPasswordPolicyConfig {
  /**
   * Additional constraints for the password used to access the backend of your Amplify project.
   *
   * @public
   */
  AdditionalConstraints?: AdditionalConstraintsElement[] | undefined;

  /**
   * The minimum length of the password used to access the backend of your Amplify project.
   *
   * @public
   */
  MinimumLength: number | undefined;
}

/**
 * Creates an email or SMS verification message for the auth resource configured for your Amplify project.
 *
 * @public
 */
export interface CreateBackendAuthVerificationMessageConfig {
  /**
   * The type of verification message to send.
   *
   * @public
   */
  DeliveryMethod: DeliveryMethod | undefined;

  /**
   * The settings for the email message.
   *
   * @public
   */
  EmailSettings?: EmailSettings | undefined;

  /**
   * The settings for the SMS message.
   *
   * @public
   */
  SmsSettings?: SmsSettings | undefined;
}

/**
 * Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.
 *
 * @public
 */
export interface CreateBackendAuthUserPoolConfig {
  /**
   * **(DEPRECATED)** Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
   *
   * @public
   */
  ForgotPassword?: CreateBackendAuthForgotPasswordConfig | undefined;

  /**
   * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
   *
   * @public
   */
  Mfa?: CreateBackendAuthMFAConfig | undefined;

  /**
   * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
   *
   * @public
   */
  OAuth?: CreateBackendAuthOAuthConfig | undefined;

  /**
   * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
   *
   * @public
   */
  PasswordPolicy?: CreateBackendAuthPasswordPolicyConfig | undefined;

  /**
   * The required attributes to sign up new users in the user pool.
   *
   * @public
   */
  RequiredSignUpAttributes: RequiredSignUpAttributesElement[] | undefined;

  /**
   * Describes the sign-in methods that your Amplify app users use to log in using the Amazon Cognito user pool, configured as a part of your Amplify project.
   *
   * @public
   */
  SignInMethod: SignInMethod | undefined;

  /**
   * The Amazon Cognito user pool name.
   *
   * @public
   */
  UserPoolName: string | undefined;

  /**
   * Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.
   *
   * @public
   */
  VerificationMessage?: CreateBackendAuthVerificationMessageConfig | undefined;
}

/**
 * Defines the resource configuration when creating an auth resource in your Amplify project.
 *
 * @public
 */
export interface CreateBackendAuthResourceConfig {
  /**
   * Defines whether you want to configure only authentication or both authentication and authorization settings.
   *
   * @public
   */
  AuthResources: AuthResources | undefined;

  /**
   * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
   *
   * @public
   */
  IdentityPoolConfigs?: CreateBackendAuthIdentityPoolConfig | undefined;

  /**
   * Defines the service name to use when configuring an authentication resource in your Amplify project.
   *
   * @public
   */
  Service: Service | undefined;

  /**
   * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
   *
   * @public
   */
  UserPoolConfigs: CreateBackendAuthUserPoolConfig | undefined;
}

/**
 * The request body for CreateBackendAuth.
 *
 * @public
 */
export interface CreateBackendAuthRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The resource configuration for this request object.
   *
   * @public
   */
  ResourceConfig: CreateBackendAuthResourceConfig | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendAuthResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The request body for CreateBackendConfig.
 *
 * @public
 */
export interface CreateBackendConfigRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The app ID for the backend manager.
   *
   * @public
   */
  BackendManagerAppId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendConfigResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Describes the read, write, and delete permissions users have against your storage S3 bucket.
 *
 * @public
 */
export interface BackendStoragePermissions {
  /**
   * Lists all authenticated user read, write, and delete permissions for your S3 bucket.
   *
   * @public
   */
  Authenticated: AuthenticatedElement[] | undefined;

  /**
   * Lists all unauthenticated user read, write, and delete permissions for your S3 bucket.
   *
   * @public
   */
  UnAuthenticated?: UnAuthenticatedElement[] | undefined;
}

/**
 * The resource configuration for creating backend storage.
 *
 * @public
 */
export interface CreateBackendStorageResourceConfig {
  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The authorization configuration for the storage S3 bucket.
   *
   * @public
   */
  Permissions: BackendStoragePermissions | undefined;

  /**
   * The name of the storage service.
   *
   * @public
   */
  ServiceName: ServiceName | undefined;
}

/**
 * The request body for CreateBackendStorage.
 *
 * @public
 */
export interface CreateBackendStorageRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The resource configuration for creating backend storage.
   *
   * @public
   */
  ResourceConfig: CreateBackendStorageResourceConfig | undefined;

  /**
   * The name of the storage resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface CreateBackendStorageResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface CreateTokenRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;
}

/**
 * @public
 */
export interface CreateTokenResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * One-time challenge code for authenticating into the Amplify Admin UI.
   *
   * @public
   */
  ChallengeCode?: string | undefined;

  /**
   * A unique ID provided when creating a new challenge token.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The expiry time for the one-time generated token code.
   *
   * @public
   */
  Ttl?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The request body for DeleteBackendAPI.
 *
 * @public
 */
export interface DeleteBackendAPIRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * Defines the resource configuration for the data model in your Amplify project.
   *
   * @public
   */
  ResourceConfig?: BackendAPIResourceConfig | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendAPIResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The request body for DeleteBackendAuth.
 *
 * @public
 */
export interface DeleteBackendAuthRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackendAuthResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The request body for DeleteBackendStorage.
 *
 * @public
 */
export interface DeleteBackendStorageRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The name of the storage resource.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The name of the storage service.
   *
   * @public
   */
  ServiceName: ServiceName | undefined;
}

/**
 * @public
 */
export interface DeleteBackendStorageResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTokenRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTokenResponse {
  /**
   * Indicates whether the request succeeded or failed.
   *
   * @public
   */
  IsSuccess?: boolean | undefined;
}

/**
 * The request body for GenerateBackendAPIModels.
 *
 * @public
 */
export interface GenerateBackendAPIModelsRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GenerateBackendAPIModelsResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The request body for GetBackend.
 *
 * @public
 */
export interface GetBackendRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;
}

/**
 * @public
 */
export interface GetBackendResponse {
  /**
   * A stringified version of the cli.json file for your Amplify project.
   *
   * @public
   */
  AmplifyFeatureFlags?: string | undefined;

  /**
   * A stringified version of the current configs for your Amplify project.
   *
   * @public
   */
  AmplifyMetaConfig?: string | undefined;

  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the app.
   *
   * @public
   */
  AppName?: string | undefined;

  /**
   * A list of backend environments in an array.
   *
   * @public
   */
  BackendEnvironmentList?: string[] | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request failed, this is the returned error.
   *
   * @public
   */
  Error?: string | undefined;
}

/**
 * The request body for GetBackendAPI.
 *
 * @public
 */
export interface GetBackendAPIRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * Defines the resource configuration for the data model in your Amplify project.
   *
   * @public
   */
  ResourceConfig?: BackendAPIResourceConfig | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GetBackendAPIResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The resource configuration for this response object.
   *
   * @public
   */
  ResourceConfig?: BackendAPIResourceConfig | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * The request body for GetBackendAPIModels.
 *
 * @public
 */
export interface GetBackendAPIModelsRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GetBackendAPIModelsResponse {
  /**
   * Stringified JSON of the datastore model.
   *
   * @public
   */
  Models?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * Stringified JSON of the model introspection schema for an existing backend API resource.
   *
   * @public
   */
  ModelIntrospectionSchema?: string | undefined;
}

/**
 * The request body for GetBackendAuth.
 *
 * @public
 */
export interface GetBackendAuthRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface GetBackendAuthResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The resource configuration for authorization requests to the backend of your Amplify project.
   *
   * @public
   */
  ResourceConfig?: CreateBackendAuthResourceConfig | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * @public
 */
export interface GetBackendJobRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetBackendJobResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * The time when the job was created.
   *
   * @public
   */
  CreateTime?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The time when the job was last updated.
   *
   * @public
   */
  UpdateTime?: string | undefined;
}

/**
 * The request body for GetBackendStorage.
 *
 * @public
 */
export interface GetBackendStorageRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The name of the storage resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * The details for a backend storage resource.
 *
 * @public
 */
export interface GetBackendStorageResourceConfig {
  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * Returns True if the storage resource has been imported.
   *
   * @public
   */
  Imported: boolean | undefined;

  /**
   * The authorization configuration for the storage S3 bucket.
   *
   * @public
   */
  Permissions?: BackendStoragePermissions | undefined;

  /**
   * The name of the storage service.
   *
   * @public
   */
  ServiceName: ServiceName | undefined;
}

/**
 * @public
 */
export interface GetBackendStorageResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * The resource configuration for the backend storage resource.
   *
   * @public
   */
  ResourceConfig?: GetBackendStorageResourceConfig | undefined;

  /**
   * The name of the storage resource.
   *
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * @public
 */
export interface GetTokenRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface GetTokenResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The one-time challenge code for authenticating into the Amplify Admin UI.
   *
   * @public
   */
  ChallengeCode?: string | undefined;

  /**
   * A unique ID provided when creating a new challenge token.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The expiry time for the one-time generated token code.
   *
   * @public
   */
  Ttl?: string | undefined;
}

/**
 * The request body for ImportBackendAuth.
 *
 * @public
 */
export interface ImportBackendAuthRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The ID of the Amazon Cognito identity pool.
   *
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * The ID of the Amazon Cognito native client.
   *
   * @public
   */
  NativeClientId: string | undefined;

  /**
   * The ID of the Amazon Cognito user pool.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the Amazon Cognito web client.
   *
   * @public
   */
  WebClientId: string | undefined;
}

/**
 * @public
 */
export interface ImportBackendAuthResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The request body for ImportBackendStorage.
 *
 * @public
 */
export interface ImportBackendStorageRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The name of the storage service.
   *
   * @public
   */
  ServiceName: ServiceName | undefined;
}

/**
 * @public
 */
export interface ImportBackendStorageResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The request body for ListBackendJobs.
 *
 * @public
 */
export interface ListBackendJobsRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The maximum number of results that you want in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters the list of response objects to include only those with the specified operation name.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * Filters the list of response objects to include only those with the specified status.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The response object for this operation.
 *
 * @public
 */
export interface BackendJobRespObj {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The time when the job was created.
   *
   * @public
   */
  CreateTime?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The time when the job was last updated.
   *
   * @public
   */
  UpdateTime?: string | undefined;
}

/**
 * @public
 */
export interface ListBackendJobsResponse {
  /**
   * An array of jobs and their properties.
   *
   * @public
   */
  Jobs?: BackendJobRespObj[] | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request body for S3Buckets.
 *
 * @public
 */
export interface ListS3BucketsRequest {
  /**
   * Reserved for future use.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the metadata of the S3 bucket.
 *
 * @public
 */
export interface S3BucketInfo {
  /**
   * The creation date of the S3 bucket.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListS3BucketsResponse {
  /**
   * The list of S3 buckets.
   *
   * @public
   */
  Buckets?: S3BucketInfo[] | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request body for RemoveAllBackends.
 *
 * @public
 */
export interface RemoveAllBackendsRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * Cleans up the Amplify Console app if this value is set to true.
   *
   * @public
   */
  CleanAmplifyApp?: boolean | undefined;
}

/**
 * @public
 */
export interface RemoveAllBackendsResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface RemoveBackendConfigRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;
}

/**
 * @public
 */
export interface RemoveBackendConfigResponse {
  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;
}

/**
 * The request body for UpdateBackendAPI.
 *
 * @public
 */
export interface UpdateBackendAPIRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * Defines the resource configuration for the data model in your Amplify project.
   *
   * @public
   */
  ResourceConfig?: BackendAPIResourceConfig | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBackendAPIResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
 *
 * @public
 */
export interface UpdateBackendAuthIdentityPoolConfig {
  /**
   * A boolean value that can be set to allow or disallow guest-level authorization into your Amplify app.
   *
   * @public
   */
  UnauthenticatedLogin?: boolean | undefined;
}

/**
 * **(DEPRECATED)** Describes the forgot password policy for authenticating into the Amplify app.
 *
 * @public
 */
export interface UpdateBackendAuthForgotPasswordConfig {
  /**
   * **(DEPRECATED)** Describes which mode to use (either SMS or email) to deliver messages to app users that want to recover their password.
   *
   * @public
   */
  DeliveryMethod?: DeliveryMethod | undefined;

  /**
   * **(DEPRECATED)** The configuration for the email sent when an app user forgets their password.
   *
   * @public
   */
  EmailSettings?: EmailSettings | undefined;

  /**
   * **(DEPRECATED)** The configuration for the SMS message sent when an Amplify app user forgets their password.
   *
   * @public
   */
  SmsSettings?: SmsSettings | undefined;
}

/**
 * Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.
 *
 * @public
 */
export interface UpdateBackendAuthMFAConfig {
  /**
   * The MFA mode for the backend of your Amplify project.
   *
   * @public
   */
  MFAMode?: MFAMode | undefined;

  /**
   * The settings of your MFA configuration for the backend of your Amplify project.
   *
   * @public
   */
  Settings?: Settings | undefined;
}

/**
 * The OAuth configurations for authenticating users into your Amplify app.
 *
 * @public
 */
export interface UpdateBackendAuthOAuthConfig {
  /**
   * The Amazon Cognito domain prefix used to create a hosted UI for authentication.
   *
   * @public
   */
  DomainPrefix?: string | undefined;

  /**
   * The OAuth grant type to allow app users to authenticate from your Amplify app.
   *
   * @public
   */
  OAuthGrantType?: OAuthGrantType | undefined;

  /**
   * The list of OAuth-related flows that can allow users to authenticate from your Amplify app.
   *
   * @public
   */
  OAuthScopes?: OAuthScopesElement[] | undefined;

  /**
   * Redirect URLs that OAuth uses when a user signs in to an Amplify app.
   *
   * @public
   */
  RedirectSignInURIs?: string[] | undefined;

  /**
   * Redirect URLs that OAuth uses when a user signs out of an Amplify app.
   *
   * @public
   */
  RedirectSignOutURIs?: string[] | undefined;

  /**
   * Describes third-party social federation configurations for allowing your users to sign in with OAuth.
   *
   * @public
   */
  SocialProviderSettings?: SocialProviderSettings | undefined;
}

/**
 * Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.
 *
 * @public
 */
export interface UpdateBackendAuthPasswordPolicyConfig {
  /**
   * Describes additional constraints on password requirements to sign in to the auth resource, configured as a part of your Amplify project.
   *
   * @public
   */
  AdditionalConstraints?: AdditionalConstraintsElement[] | undefined;

  /**
   * Describes the minimum length of the password required to sign in to the auth resource, configured as a part of your Amplify project.
   *
   * @public
   */
  MinimumLength?: number | undefined;
}

/**
 * Updates the configuration of the email or SMS message for the auth resource configured for your Amplify project.
 *
 * @public
 */
export interface UpdateBackendAuthVerificationMessageConfig {
  /**
   * The type of verification message to send.
   *
   * @public
   */
  DeliveryMethod: DeliveryMethod | undefined;

  /**
   * The settings for the email message.
   *
   * @public
   */
  EmailSettings?: EmailSettings | undefined;

  /**
   * The settings for the SMS message.
   *
   * @public
   */
  SmsSettings?: SmsSettings | undefined;
}

/**
 * Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.
 *
 * @public
 */
export interface UpdateBackendAuthUserPoolConfig {
  /**
   * **(DEPRECATED)** Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
   *
   * @public
   */
  ForgotPassword?: UpdateBackendAuthForgotPasswordConfig | undefined;

  /**
   * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
   *
   * @public
   */
  Mfa?: UpdateBackendAuthMFAConfig | undefined;

  /**
   * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
   *
   * @public
   */
  OAuth?: UpdateBackendAuthOAuthConfig | undefined;

  /**
   * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
   *
   * @public
   */
  PasswordPolicy?: UpdateBackendAuthPasswordPolicyConfig | undefined;

  /**
   * Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.
   *
   * @public
   */
  VerificationMessage?: UpdateBackendAuthVerificationMessageConfig | undefined;
}

/**
 * Defines the resource configuration when updating an authentication resource in your Amplify project.
 *
 * @public
 */
export interface UpdateBackendAuthResourceConfig {
  /**
   * Defines the service name to use when configuring an authentication resource in your Amplify project.
   *
   * @public
   */
  AuthResources: AuthResources | undefined;

  /**
   * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
   *
   * @public
   */
  IdentityPoolConfigs?: UpdateBackendAuthIdentityPoolConfig | undefined;

  /**
   * Defines the service name to use when configuring an authentication resource in your Amplify project.
   *
   * @public
   */
  Service: Service | undefined;

  /**
   * Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
   *
   * @public
   */
  UserPoolConfigs: UpdateBackendAuthUserPoolConfig | undefined;
}

/**
 * The request body for UpdateBackendAuth.
 *
 * @public
 */
export interface UpdateBackendAuthRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The resource configuration for this request object.
   *
   * @public
   */
  ResourceConfig: UpdateBackendAuthResourceConfig | undefined;

  /**
   * The name of this resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBackendAuthResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The request object for this operation.
 *
 * @public
 */
export interface LoginAuthConfigReqObj {
  /**
   * The Amazon Cognito identity pool ID used for the Amplify Admin UI login authorization.
   *
   * @public
   */
  AwsCognitoIdentityPoolId?: string | undefined;

  /**
   * The AWS Region for the Amplify Admin UI login.
   *
   * @public
   */
  AwsCognitoRegion?: string | undefined;

  /**
   * The Amazon Cognito user pool ID used for Amplify Admin UI login authentication.
   *
   * @public
   */
  AwsUserPoolsId?: string | undefined;

  /**
   * The web client ID for the Amazon Cognito user pools.
   *
   * @public
   */
  AwsUserPoolsWebClientId?: string | undefined;
}

/**
 * The request body for UpdateBackendConfig.
 *
 * @public
 */
export interface UpdateBackendConfigRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * Describes the Amazon Cognito configuration for Admin UI access.
   *
   * @public
   */
  LoginAuthConfig?: LoginAuthConfigReqObj | undefined;
}

/**
 * @public
 */
export interface UpdateBackendConfigResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The app ID for the backend manager.
   *
   * @public
   */
  BackendManagerAppId?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.
   *
   * @public
   */
  LoginAuthConfig?: LoginAuthConfigReqObj | undefined;
}

/**
 * The request body for GetBackendJob.
 *
 * @public
 */
export interface UpdateBackendJobRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Filters the list of response objects to include only those with the specified operation name.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * Filters the list of response objects to include only those with the specified status.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBackendJobResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * The time when the job was created.
   *
   * @public
   */
  CreateTime?: string | undefined;

  /**
   * If the request fails, this error is returned.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The time when the job was last updated.
   *
   * @public
   */
  UpdateTime?: string | undefined;
}

/**
 * The resource configuration for updating backend storage.
 *
 * @public
 */
export interface UpdateBackendStorageResourceConfig {
  /**
   * The authorization configuration for the storage S3 bucket.
   *
   * @public
   */
  Permissions: BackendStoragePermissions | undefined;

  /**
   * The name of the storage service.
   *
   * @public
   */
  ServiceName: ServiceName | undefined;
}

/**
 * The request body for UpdateBackendStorage.
 *
 * @public
 */
export interface UpdateBackendStorageRequest {
  /**
   * The app ID.
   *
   * @public
   */
  AppId: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName: string | undefined;

  /**
   * The resource configuration for updating backend storage.
   *
   * @public
   */
  ResourceConfig: UpdateBackendStorageResourceConfig | undefined;

  /**
   * The name of the storage resource.
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBackendStorageResponse {
  /**
   * The app ID.
   *
   * @public
   */
  AppId?: string | undefined;

  /**
   * The name of the backend environment.
   *
   * @public
   */
  BackendEnvironmentName?: string | undefined;

  /**
   * The ID for the job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  Status?: string | undefined;
}
