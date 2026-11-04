// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  DeletionProtectionType,
  DeviceRememberedStatusType,
  ExplicitAuthFlowsType,
  FeedbackValueType,
  OAuthFlowType,
  PreventUserExistenceErrorTypes,
  TermsEnforcementType,
  TermsSourceType,
  UpdateReplicaStatusType,
  UserPoolMfaType,
  UserPoolTierType,
  VerifiedAttributeType,
  VerifySoftwareTokenResponseType,
} from "./enums";
import type {
  AccountRecoverySettingType,
  AcrLevelConfigType,
  AdminCreateUserConfigType,
  AnalyticsConfigurationType,
  AnalyticsMetadataType,
  AssetType,
  AttributeType,
  CodeDeliveryDetailsType,
  CustomDomainConfigType,
  DeviceConfigurationType,
  EmailConfigurationType,
  EmailMfaConfigType,
  GroupType,
  IdentityProviderType,
  IssuerConfigurationType,
  KeyConfigurationType,
  LambdaConfigType,
  LimitDefinitionType,
  LimitType,
  ManagedLoginBrandingType,
  MFAOptionType,
  RefreshTokenRotationType,
  ResourceServerScopeType,
  ResourceServerType,
  RoutingType,
  SmsConfigurationType,
  SmsMfaConfigType,
  SoftwareTokenMfaConfigType,
  TermsType,
  TokenValidityUnitsType,
  UserAttributeUpdateSettingsType,
  UserContextDataType,
  UserImportJobType,
  UserPoolAddOnsType,
  UserPoolClientType,
  UserPoolPolicyType,
  UserPoolReplicaType,
  VerificationMessageTemplateType,
  WebAuthnConfigurationType,
} from "./models_0";

/**
 * @public
 */
export interface SetUserPoolMfaConfigRequest {
  /**
   * The user pool ID.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * Configures user pool SMS messages for MFA. Sets the message template and the SMS message sending configuration for Amazon SNS.
   *
   * @public
   */
  SmsMfaConfiguration?: SmsMfaConfigType | undefined;

  /**
   * Configures a user pool for time-based one-time password (TOTP) MFA. Enables or disables TOTP.
   *
   * @public
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType | undefined;

  /**
   * Sets configuration for user pool email message MFA and sign-in with one-time passwords (OTPs). Includes the subject and body of the email message template for sign-in and MFA messages. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  EmailMfaConfiguration?: EmailMfaConfigType | undefined;

  /**
   * Sets multi-factor authentication (MFA) to be on, off, or optional. When `ON`, all users must set up MFA before they can sign in. When `OPTIONAL`, your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose `OPTIONAL`.
   *
   * When `MfaConfiguration` is `OPTIONAL`, managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor.
   *
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * The configuration of your user pool for passkey, or WebAuthn, authentication and registration. Includes relying-party configuration, user-verification requirements, and whether passkeys can satisfy MFA requirements.
   *
   * @public
   */
  WebAuthnConfiguration?: WebAuthnConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetUserPoolMfaConfigResponse {
  /**
   * Shows user pool SMS message configuration for MFA and sign-in with SMS-message OTPs. Includes the message template and the SMS message sending configuration for Amazon SNS.
   *
   * @public
   */
  SmsMfaConfiguration?: SmsMfaConfigType | undefined;

  /**
   * Shows user pool configuration for time-based one-time password (TOTP) MFA. Includes TOTP enabled or disabled state.
   *
   * @public
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType | undefined;

  /**
   * Shows configuration for user pool email message MFA and sign-in with one-time passwords (OTPs). Includes the subject and body of the email message template for sign-in and MFA messages. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  EmailMfaConfiguration?: EmailMfaConfigType | undefined;

  /**
   * Displays multi-factor authentication (MFA) as on, off, or optional. When `ON`, all users must set up MFA before they can sign in. When `OPTIONAL`, your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose `OPTIONAL`.
   *
   * When `MfaConfiguration` is `OPTIONAL`, managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor.
   *
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * The configuration of your user pool for passkey, or WebAuthn, sign-in with authenticators such as biometric and security-key devices. Includes relying-party configuration and settings for user-verification requirements.
   *
   * @public
   */
  WebAuthnConfiguration?: WebAuthnConfigurationType | undefined;
}

/**
 * Represents the request to set user settings.
 *
 * @public
 */
export interface SetUserSettingsRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;

  /**
   * You can use this parameter only to set an SMS configuration that uses SMS for delivery.
   *
   * @public
   */
  MFAOptions: MFAOptionType[] | undefined;
}

/**
 * The response from the server for a set user settings request.
 *
 * @public
 */
export interface SetUserSettingsResponse {}

/**
 * Represents the request to register a user.
 *
 * @public
 */
export interface SignUpRequest {
  /**
   * The ID of the app client where the user wants to sign up.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about `SecretHash`, see [Computing secret hash values](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash).
   *
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * The username of the user that you want to sign up. The value of this parameter is typically a username, but can be any alias attribute in your user pool.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The user's proposed password. The password must comply with the [password requirements](https://docs.aws.amazon.com/cognito/latest/developerguide/managing-users-passwords.html) of your user pool.
   *
   * Users can sign up without a password when your user pool supports passwordless sign-in with email or SMS OTPs. To create a user with no password, omit this parameter or submit a blank value. You can only create a passwordless user when passwordless sign-in is available.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * An array of name-value pairs representing user attributes.
   *
   * For custom attributes, include a `custom:` prefix in the attribute name, for example `custom:department`.
   *
   * @public
   */
  UserAttributes?: AttributeType[] | undefined;

  /**
   * Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda trigger. This set of key-value pairs are for custom validation of information that you collect from your users but don't need to retain.
   *
   * Your Lambda function can analyze this additional data and act on it. Your function can automatically confirm and verify select users or perform external API operations like logging user attributes and validation data to Amazon CloudWatch Logs.
   *
   * For more information about the pre sign-up Lambda trigger, see [Pre sign-up Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html).
   *
   * @public
   */
  ValidationData?: AttributeType[] | undefined;

  /**
   * Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number.
   *
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.
   *
   * For more information, see [Collecting data for threat protection in applications](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html).
   *
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * The response from the server for a registration request.
 *
 * @public
 */
export interface SignUpResponse {
  /**
   * Indicates whether the user was automatically confirmed. You can auto-confirm users with a [pre sign-up Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html).
   *
   * @public
   */
  UserConfirmed: boolean | undefined;

  /**
   * In user pools that automatically verify and confirm new users, Amazon Cognito sends users a message with a code or link that confirms ownership of the phone number or email address that they entered. The `CodeDeliveryDetails` object is information about the delivery destination for that link or code.
   *
   * @public
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType | undefined;

  /**
   * The unique identifier of the new user, for example `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  UserSub: string | undefined;

  /**
   * A session Id that you can pass to `ConfirmSignUp` when you want to immediately sign in your user with the `USER_AUTH` flow after they complete sign-up.
   *
   * @public
   */
  Session?: string | undefined;
}

/**
 * Represents the request to start the user import job.
 *
 * @public
 */
export interface StartUserImportJobRequest {
  /**
   * The ID of the user pool that you want to start importing users into.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of a user import job that you previously created.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Represents the response from the server to the request to start the user import job.
 *
 * @public
 */
export interface StartUserImportJobResponse {
  /**
   * The details of the user import job. Includes logging destination, status, and the Amazon S3 pre-signed URL for CSV upload.
   *
   * @public
   */
  UserImportJob?: UserImportJobType | undefined;
}

/**
 * @public
 */
export interface StartWebAuthnRegistrationRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * @public
 */
export interface StartWebAuthnRegistrationResponse {
  /**
   * The information that a user can provide in their request to register with their passkey provider.
   *
   * @public
   */
  CredentialCreationOptions: __DocumentType | undefined;
}

/**
 * Represents the request to stop the user import job.
 *
 * @public
 */
export interface StopUserImportJobRequest {
  /**
   * The ID of the user pool that you want to stop.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of a running user import job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Represents the response from the server to the request to stop the user import job.
 *
 * @public
 */
export interface StopUserImportJobResponse {
  /**
   * The details of the user import job. Includes logging destination, status, and the Amazon S3 pre-signed URL for CSV upload.
   *
   * @public
   */
  UserImportJob?: UserImportJobType | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the user pool to assign the tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys and values that you want to assign to the user pool.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys that you want to remove from the user pool.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAuthEventFeedbackRequest {
  /**
   * The ID of the user pool where you want to update auth event feedback.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The ID of the authentication event that you want to submit feedback for.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The feedback token, an encrypted object generated by Amazon Cognito and passed to your user in the notification email message from the event.
   *
   * @public
   */
  FeedbackToken: string | undefined;

  /**
   * Your feedback to the authentication event. When you provide a `FeedbackValue` value of `valid`, you tell Amazon Cognito that you trust a user session where Amazon Cognito has evaluated some level of risk. When you provide a `FeedbackValue` value of `invalid`, you tell Amazon Cognito that you don't trust a user session, or you don't believe that Amazon Cognito evaluated a high-enough risk level.
   *
   * @public
   */
  FeedbackValue: FeedbackValueType | undefined;
}

/**
 * @public
 */
export interface UpdateAuthEventFeedbackResponse {}

/**
 * Represents the request to update the device status.
 *
 * @public
 */
export interface UpdateDeviceStatusRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;

  /**
   * The device key of the device you want to update, for example `us-west-2_a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * To enable device authentication with the specified device, set to `remembered`.To disable, set to `not_remembered`.
   *
   * @public
   */
  DeviceRememberedStatus?: DeviceRememberedStatusType | undefined;
}

/**
 * The response to the request to update the device status.
 *
 * @public
 */
export interface UpdateDeviceStatusResponse {}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * The name of the group that you want to update.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The ID of the user pool that contains the group you want to update.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A new description of the existing group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that you want to associate with the group. The role assignment contributes to the `cognito:roles` and `cognito:preferred_role` claims in group members' tokens.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower `Precedence` values take precedence over groups with higher or null `Precedence` values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN is given in the user's tokens for the `cognito:roles` and `cognito:preferred_role` claims.
   *
   * Two groups can have the same `Precedence` value. If this happens, neither group takes precedence over the other. If two groups with the same `Precedence` have the same role ARN, that role is used in the `cognito:preferred_role` claim in tokens for users in each group. If the two groups have different role ARNs, the `cognito:preferred_role` claim isn't set in users' tokens.
   *
   * The default `Precedence` value is null. The maximum `Precedence` value is `2^31-1`.
   *
   * @public
   */
  Precedence?: number | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResponse {
  /**
   * Contains the updated details of the group, including precedence, IAM role, and description.
   *
   * @public
   */
  Group?: GroupType | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderRequest {
  /**
   * The Id of the user pool where you want to update your IdP.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the IdP that you want to update. You can pass the identity provider name in the `identity_provider` query parameter of requests to the [Authorize endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html) to silently redirect to sign-in with the associated IdP.
   *
   * @public
   */
  ProviderName: string | undefined;

  /**
   * The scopes, URLs, and identifiers for your external identity provider. The following examples describe the provider detail keys for each IdP type. These values and their schema are subject to change. Social IdP `authorize_scopes` values must match the values listed here.
   *
   * - **OpenID Connect (OIDC)**
   *
   *   Amazon Cognito accepts the following elements when it can't discover endpoint URLs from `oidc_issuer`: `attributes_url`, `authorize_url`, `jwks_uri`, `token_url`.
   *
   *   Create or update request: `"ProviderDetails": \{ "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "attributes_url_add_attributes": "false", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" \}`
   *
   * - **SAML**
   *
   *   Create or update request with Metadata URL: `"ProviderDetails": \{ "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256" \}`
   *
   *   Create or update request with Metadata file: `"ProviderDetails": \{ "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm": "rsa-sha256" \}`
   *
   *   The value of `MetadataFile` must be the plaintext metadata document with all quote (") characters escaped by backslashes.
   *
   *   Describe response: `"ProviderDetails": \{ "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256", "SLORedirectBindingURI": "https://auth.example.com/slo/saml", "SSORedirectBindingURI": "https://auth.example.com/sso/saml" \}`
   *
   * - **LoginWithAmazon**
   *
   *   Create or update request: `"ProviderDetails": \{ "authorize_scopes": "profile postal_code", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret"`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_url": "https://api.amazon.com/user/profile", "attributes_url_add_attributes": "false", "authorize_scopes": "profile postal_code", "authorize_url": "https://www.amazon.com/ap/oa", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "POST", "token_url": "https://api.amazon.com/auth/o2/token" \}`
   *
   * - **Google**
   *
   *   Create or update request: `"ProviderDetails": \{ "authorize_scopes": "email profile openid", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_url": "https://people.googleapis.com/v1/people/me?personFields=", "attributes_url_add_attributes": "true", "authorize_scopes": "email profile openid", "authorize_url": "https://accounts.google.com/o/oauth2/v2/auth", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret", "oidc_issuer": "https://accounts.google.com", "token_request_method": "POST", "token_url": "https://www.googleapis.com/oauth2/v4/token" \}`
   *
   * - **SignInWithApple**
   *
   *   Create or update request: `"ProviderDetails": \{ "authorize_scopes": "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE", "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_url_add_attributes": "false", "authorize_scopes": "email name", "authorize_url": "https://appleid.apple.com/auth/authorize", "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer": "https://appleid.apple.com", "team_id": "2EXAMPLE", "token_request_method": "POST", "token_url": "https://appleid.apple.com/auth/token" \}`
   *
   * - **Facebook**
   *
   *   Create or update request: `"ProviderDetails": \{ "api_version": "v17.0", "authorize_scopes": "public_profile, email", "client_id": "1example23456789", "client_secret": "provider-app-client-secret" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=", "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email", "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" \}`
   *
   * @public
   */
  ProviderDetails?: Record<string, string> | undefined;

  /**
   * A mapping of IdP attributes to standard and custom user pool attributes. Specify a user pool attribute as the key of the key-value pair, and the IdP attribute claim name as the value.
   *
   * @public
   */
  AttributeMapping?: Record<string, string> | undefined;

  /**
   * An array of IdP identifiers, for example `"IdPIdentifiers": [ "MyIdP", "MyIdP2" ]`. Identifiers are friendly names that you can pass in the `idp_identifier` query parameter of requests to the [Authorize endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html) to silently redirect to sign-in with the associated IdP. Identifiers in a domain format also enable the use of [email-address matching with SAML providers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managing-saml-idp-naming.html).
   *
   * @public
   */
  IdpIdentifiers?: string[] | undefined;

  /**
   * A mapping between the authentication context class reference (ACR) levels of your user pool and the ACR values of the external OpenID Connect (OIDC) identity provider (IdP). This mapping has the same behavior as it does when you create an identity provider. Only OIDC IdPs support ACR mapping.
   *
   * Setting `AcrMapping` is available in all feature plans. It isn't restricted to the Essentials or Plus feature plan.
   *
   * @public
   */
  AcrMapping?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderResponse {
  /**
   * The identity provider details.
   *
   * @public
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface UpdateManagedLoginBrandingRequest {
  /**
   * The ID of the user pool that contains the managed login branding style that you want to update.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * The ID of the managed login branding style that you want to update.
   *
   * @public
   */
  ManagedLoginBrandingId?: string | undefined;

  /**
   * When `true`, applies the default branding style options. This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding editor.
   *
   * When you specify `true` for this option, you must also omit values for `Settings` and `Assets` in the request.
   *
   * @public
   */
  UseCognitoProvidedValues?: boolean | undefined;

  /**
   * A JSON file, encoded as a `Document` type, with the the settings that you want to apply to your style.
   *
   * The following components are not currently implemented and reserved for future use:
   *
   * - `signUp`
   * - `instructions`
   * - `sessionTimerDisplay`
   * - `languageSelector` (for localization, see [Managed login localization)](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-localization)
   *
   * @public
   */
  Settings?: __DocumentType | undefined;

  /**
   * An array of image files that you want to apply to roles like backgrounds, logos, and icons. Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode.
   *
   * @public
   */
  Assets?: AssetType[] | undefined;
}

/**
 * @public
 */
export interface UpdateManagedLoginBrandingResponse {
  /**
   * The details of the branding style that you updated.
   *
   * @public
   */
  ManagedLoginBranding?: ManagedLoginBrandingType | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedLimitRequest {
  /**
   * The limit to update. Specify the limit class and the attributes that identify the limit.
   *
   * @public
   */
  LimitDefinition: LimitDefinitionType | undefined;

  /**
   * The provisioned rate to set, in requests per second (RPS).
   *
   * @public
   */
  RequestedLimitValue: number | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedLimitResponse {
  /**
   * The updated provisioned and default limit values.
   *
   * @public
   */
  Limit: LimitType | undefined;
}

/**
 * @public
 */
export interface UpdateResourceServerRequest {
  /**
   * The ID of the user pool that contains the resource server that you want to update.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A unique resource server identifier for the resource server. The identifier can be an API friendly name like `solar-system-data`. You can also set an API URL like `https://solar-system-data-api.example.com` as your identifier.
   *
   * Amazon Cognito represents scopes in the access token in the format `$resource-server-identifier/$scope`. Longer scope-identifier strings increase the size of your access tokens.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The updated name of the resource server.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An array of updated custom scope names and descriptions that you want to associate with your resource server.
   *
   * @public
   */
  Scopes?: ResourceServerScopeType[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceServerResponse {
  /**
   * The updated details of the requested resource server.
   *
   * @public
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * @public
 */
export interface UpdateTermsRequest {
  /**
   * The ID of the terms document that you want to update.
   *
   * @public
   */
  TermsId: string | undefined;

  /**
   * The ID of the user pool that contains the terms that you want to update.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The new name that you want to apply to the requested terms documents.
   *
   * @public
   */
  TermsName?: string | undefined;

  /**
   * This parameter is reserved for future use and currently accepts only one value.
   *
   * @public
   */
  TermsSource?: TermsSourceType | undefined;

  /**
   * This parameter is reserved for future use and currently accepts only one value.
   *
   * @public
   */
  Enforcement?: TermsEnforcementType | undefined;

  /**
   * A map of URLs to languages. For each localized language that will view the requested `TermsName`, assign a URL. A selection of `cognito:default` displays for all languages that don't have a language-specific URL.
   *
   * For example, `"cognito:default": "https://terms.example.com", "cognito:spanish": "https://terms.example.com/es"`.
   *
   * @public
   */
  Links?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateTermsResponse {
  /**
   * A summary of the updates to your terms documents.
   *
   * @public
   */
  Terms?: TermsType | undefined;
}

/**
 * Represents the request to update user attributes.
 *
 * @public
 */
export interface UpdateUserAttributesRequest {
  /**
   * An array of name-value pairs representing user attributes.
   *
   * For custom attributes, you must add a `custom:` prefix to the attribute name.
   *
   * If you have set an attribute to require verification before Amazon Cognito updates its value, this request doesn’t immediately update the value of that attribute. After your user receives and responds to a verification message to verify the new value, Amazon Cognito updates the attribute value. Your user can sign in and receive messages with the original attribute value until they verify the new value.
   *
   * @public
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * Represents the response from the server for the request to update user attributes.
 *
 * @public
 */
export interface UpdateUserAttributesResponse {
  /**
   * When the attribute-update request includes an email address or phone number attribute, Amazon Cognito sends a message to users with a code that confirms ownership of the new value that they entered. The `CodeDeliveryDetails` object is information about the delivery destination for that link or code. This behavior happens in user pools configured to automatically verify changes to those attributes. For more information, see [Verifying when users change their email or phone number](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#verifying-when-users-change-their-email-or-phone-number).
   *
   * @public
   */
  CodeDeliveryDetailsList?: CodeDeliveryDetailsType[] | undefined;
}

/**
 * Represents the request to update the user pool.
 *
 * @public
 */
export interface UpdateUserPoolRequest {
  /**
   * The ID of the user pool you want to update.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The password policy and sign-in policy in the user pool. The password policy sets options like password complexity requirements and password history. The sign-in policy sets the options available to applications in [choice-based authentication](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice).
   *
   * @public
   */
  Policies?: UserPoolPolicyType | undefined;

  /**
   * When active, `DeletionProtection` prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature.
   *
   * When you try to delete a protected user pool in a `DeleteUserPool` API request, Amazon Cognito returns an `InvalidParameterException` error. To delete a protected user pool, send a new `DeleteUserPool` request after you deactivate deletion protection in an `UpdateUserPool` API request.
   *
   * @public
   */
  DeletionProtection?: DeletionProtectionType | undefined;

  /**
   * A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of authentication operations. Triggers can modify the outcome of the operations that invoked them.
   *
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * The attributes that you want your user pool to automatically verify. Possible values: **email**, **phone_number**. For more information see [Verifying contact information at sign-up](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#allowing-users-to-sign-up-and-confirm-themselves).
   *
   * @public
   */
  AutoVerifiedAttributes?: VerifiedAttributeType[] | undefined;

  /**
   * This parameter is no longer used.
   *
   * @public
   */
  SmsVerificationMessage?: string | undefined;

  /**
   * This parameter is no longer used.
   *
   * @public
   */
  EmailVerificationMessage?: string | undefined;

  /**
   * This parameter is no longer used.
   *
   * @public
   */
  EmailVerificationSubject?: string | undefined;

  /**
   * The template for the verification message that your user pool delivers to users who set an email address or phone number attribute.
   *
   * Set the email message type that corresponds to your `DefaultEmailOption` selection. For `CONFIRM_WITH_LINK`, specify an `EmailMessageByLink` and leave `EmailMessage` blank. For `CONFIRM_WITH_CODE`, specify an `EmailMessage` and leave `EmailMessageByLink` blank. When you supply both parameters with either choice, Amazon Cognito returns an error.
   *
   * @public
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType | undefined;

  /**
   * The contents of the SMS message that your user pool sends to users in SMS authentication.
   *
   * @public
   */
  SmsAuthenticationMessage?: string | undefined;

  /**
   * The settings for updates to user attributes. These settings include the property `AttributesRequireVerificationBeforeUpdate`, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see [Verifying updates to email addresses and phone numbers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates).
   *
   * @public
   */
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType | undefined;

  /**
   * Sets multi-factor authentication (MFA) to be on, off, or optional. When `ON`, all users must set up MFA before they can sign in. When `OPTIONAL`, your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose `OPTIONAL`.
   *
   * When `MfaConfiguration` is `OPTIONAL`, managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor.
   *
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * The device-remembering configuration for a user pool. Device remembering or device tracking is a "Remember me on this device" option for user pools that perform authentication with the device key of a trusted device in the back end, instead of a user-provided MFA code. For more information about device authentication, see [Working with user devices in your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html). A null value indicates that you have deactivated device remembering in your user pool.
   *
   * > **Note:** When you provide a value for any `DeviceConfiguration` field, you activate the Amazon Cognito device-remembering feature. For more information, see [Working with devices](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html).
   *
   * @public
   */
  DeviceConfiguration?: DeviceConfigurationType | undefined;

  /**
   * The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for email invitation and verification messages from your user pool.
   *
   * @public
   */
  EmailConfiguration?: EmailConfigurationType | undefined;

  /**
   * The SMS configuration with the settings for your Amazon Cognito user pool to send SMS message with Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account. For more information see [SMS message settings](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html).
   *
   * @public
   */
  SmsConfiguration?: SmsConfigurationType | undefined;

  /**
   * The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.
   *
   * @public
   */
  UserPoolTags?: Record<string, string> | undefined;

  /**
   * The configuration for administrative creation of users. Includes the template for the invitation message for new users, the duration of temporary passwords, and permitting self-service sign-up.
   *
   * @public
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType | undefined;

  /**
   * Contains settings for activation of threat protection, including the operating mode and additional authentication types. To log user security information but take no action, set to `AUDIT`. To configure automatic security responses to potentially unwanted traffic to your user pool, set to `ENFORCED`.
   *
   * For more information, see [Adding advanced security to a user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html). To activate this setting, your user pool must be on the [Plus tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html).
   *
   * @public
   */
  UserPoolAddOns?: UserPoolAddOnsType | undefined;

  /**
   * The available verified method a user can use to recover their password when they call `ForgotPassword`. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email.
   *
   * @public
   */
  AccountRecoverySetting?: AccountRecoverySettingType | undefined;

  /**
   * The updated name of your user pool.
   *
   * @public
   */
  PoolName?: string | undefined;

  /**
   * The user pool [feature plan](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html), or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to `ESSENTIALS`.
   *
   * @public
   */
  UserPoolTier?: UserPoolTierType | undefined;

  /**
   * The key configuration for the user pool. In secondary regions, this parameter must match the existing configuration and cannot be modified.
   *
   * @public
   */
  KeyConfiguration?: KeyConfigurationType | undefined;

  /**
   * The issuer configuration for the user pool. In secondary regions, this parameter must match the existing configuration and cannot be modified.
   *
   * @public
   */
  IssuerConfiguration?: IssuerConfigurationType | undefined;

  /**
   * The custom names for the authentication context class reference (ACR) levels in your user pool. This configuration has the same behavior as it does when you create a user pool: you customize only the URI name that Amazon Cognito reports for each of the four fixed ACR levels, and any level that you don't specify keeps its default name. Each name must be unique across all four levels, including default names.
   *
   * Configuring custom ACR level names requires the Essentials or Plus feature plan. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  AcrConfiguration?: Record<string, AcrLevelConfigType> | undefined;
}

/**
 * Represents the response from the server when you make a request to update the user pool.
 *
 * @public
 */
export interface UpdateUserPoolResponse {}

/**
 * Represents the request to update the user pool client.
 *
 * @public
 */
export interface UpdateUserPoolClientRequest {
  /**
   * The ID of the user pool where you want to update the app client.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client that you want to update.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * A friendly name for the app client.
   *
   * @public
   */
  ClientName?: string | undefined;

  /**
   * The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for `RefreshTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `RefreshTokenValidity` as `10` and `TokenValidityUnits` as `days`, your user can refresh their session and retrieve new access and ID tokens for 10 days.
   *
   * The default time unit for `RefreshTokenValidity` in an API request is days. You can't set `RefreshTokenValidity` to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. *Valid range* is displayed below in seconds.
   *
   * If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days.
   *
   * @public
   */
  RefreshTokenValidity?: number | undefined;

  /**
   * The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for `AccessTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `AccessTokenValidity` to `10` and `TokenValidityUnits` to `hours`, your user can authorize access with their access token for 10 hours.
   *
   * The default time unit for `AccessTokenValidity` in an API request is hours. *Valid range* is displayed below in seconds.
   *
   * If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour.
   *
   * @public
   */
  AccessTokenValidity?: number | undefined;

  /**
   * The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for `IdTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `IdTokenValidity` as `10` and `TokenValidityUnits` as `hours`, your user can authenticate their session with their ID token for 10 hours.
   *
   * The default time unit for `IdTokenValidity` in an API request is hours. *Valid range* is displayed below in seconds.
   *
   * If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour.
   *
   * @public
   */
  IdTokenValidity?: number | undefined;

  /**
   * The units that validity times are represented in. The default unit for refresh tokens is days, and the default for ID and access tokens are hours.
   *
   * @public
   */
  TokenValidityUnits?: TokenValidityUnitsType | undefined;

  /**
   * The list of user attributes that you want your app client to have read access to. After your user authenticates in your app, their access token authorizes them to read their own attribute value for any attribute in this list.
   *
   * When you don't specify the `ReadAttributes` for your app client, your app can read the values of `email_verified`, `phone_number_verified`, and the standard attributes of your user pool. When your user pool app client has read access to these default attributes, `ReadAttributes` doesn't return any information. Amazon Cognito only populates `ReadAttributes` in the API response if you have specified your own custom set of read attributes.
   *
   * @public
   */
  ReadAttributes?: string[] | undefined;

  /**
   * The list of user attributes that you want your app client to have write access to. After your user authenticates in your app, their access token authorizes them to set or modify their own attribute value for any attribute in this list.
   *
   * When you don't specify the `WriteAttributes` for your app client, your app can write the values of the Standard attributes of your user pool. When your user pool has write access to these default attributes, `WriteAttributes` doesn't return any information. Amazon Cognito only populates `WriteAttributes` in the API response if you have specified your own custom set of write attributes.
   *
   * If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see [Specifying IdP Attribute Mappings for Your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html).
   *
   * @public
   */
  WriteAttributes?: string[] | undefined;

  /**
   * The [authentication flows](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow-methods.html) that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.
   *
   * > **Note:** If you don't specify a value for `ExplicitAuthFlows`, your app client supports `ALLOW_REFRESH_TOKEN_AUTH`, `ALLOW_USER_SRP_AUTH`, and `ALLOW_CUSTOM_AUTH`.
   *
   * The values for authentication flow options include the following.
   *
   * - `ALLOW_USER_AUTH`: Enable selection-based sign-in with `USER_AUTH`. This setting covers username-password, secure remote password (SRP), passwordless, and passkey authentication. This authentiation flow can do username-password and SRP authentication without other `ExplicitAuthFlows` permitting them. For example users can complete an SRP challenge through `USER_AUTH` without the flow `USER_SRP_AUTH` being active for the app client. This flow doesn't include `CUSTOM_AUTH`.
   *
   *   To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   * - `ALLOW_ADMIN_USER_PASSWORD_AUTH`: Enable admin based user password authentication flow `ADMIN_USER_PASSWORD_AUTH`. This setting replaces the `ADMIN_NO_SRP_AUTH` setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.
   * - `ALLOW_CUSTOM_AUTH`: Enable Lambda trigger based authentication.
   * - `ALLOW_USER_PASSWORD_AUTH`: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.
   * - `ALLOW_USER_SRP_AUTH`: Enable SRP-based authentication.
   * - `ALLOW_REFRESH_TOKEN_AUTH`: Enable authflow to refresh tokens.
   *
   * In some environments, you will see the values `ADMIN_NO_SRP_AUTH`, `CUSTOM_AUTH_FLOW_ONLY`, or `USER_PASSWORD_AUTH`. You can't assign these legacy `ExplicitAuthFlows` values to user pool clients at the same time as values that begin with `ALLOW_`, like `ALLOW_USER_SRP_AUTH`.
   *
   * @public
   */
  ExplicitAuthFlows?: ExplicitAuthFlowsType[] | undefined;

  /**
   * A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: `COGNITO`, `Facebook`, `Google`, `SignInWithApple`, and `LoginWithAmazon`. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example `MySAMLIdP` or `MyOIDCIdP`.
   *
   * This parameter sets the IdPs that [managed login](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html) will display on the login page for your app client. The removal of `COGNITO` from this list doesn't prevent authentication operations for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent SDK-based authentication is to block access with a [WAF rule](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-waf.html).
   *
   * @public
   */
  SupportedIdentityProviders?: string[] | undefined;

  /**
   * A list of allowed redirect, or callback, URLs for managed login authentication. These URLs are the paths where you want to send your users' browsers after they complete authentication with managed login or a third-party IdP. Typically, callback URLs are the home of an application that uses OAuth or OIDC libraries to process authentication outcomes.
   *
   * A redirect URI must meet the following requirements:
   *
   * - Be an absolute URI.
   * - Be registered with the authorization server. Amazon Cognito doesn't accept authorization requests with `redirect_uri` values that aren't in the list of `CallbackURLs` that you provide in this parameter.
   * - Not include a fragment component.
   *
   * See [OAuth 2.0 - Redirection Endpoint](https://tools.ietf.org/html/rfc6749#section-3.1.2).
   *
   * Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only.
   *
   * App callback URLs such as `myapp://example` are also supported.
   *
   * @public
   */
  CallbackURLs?: string[] | undefined;

  /**
   * A list of allowed logout URLs for managed login authentication. When you pass `logout_uri` and `client_id` parameters to `/logout`, Amazon Cognito signs out your user and redirects them to the logout URL. This parameter describes the URLs that you want to be the permitted targets of `logout_uri`. A typical use of these URLs is when a user selects "Sign out" and you redirect them to your public homepage. For more information, see [Logout endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/logout-endpoint.html).
   *
   * @public
   */
  LogoutURLs?: string[] | undefined;

  /**
   * The default redirect URI. In app clients with one assigned IdP, replaces `redirect_uri` in authentication requests. Must be in the `CallbackURLs` list.
   *
   * @public
   */
  DefaultRedirectURI?: string | undefined;

  /**
   * The OAuth grant types that you want your app client to generate. To create an app client that generates client credentials grants, you must add `client_credentials` as the only allowed OAuth flow.
   *
   * - **code**
   *
   *   Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the `/oauth2/token` endpoint.
   *
   * - **implicit**
   *
   *   Issue the access token (and, optionally, ID token, based on scopes) directly to your user.
   *
   * - **client_credentials**
   *
   *   Issue the access token from the `/oauth2/token` endpoint directly to a non-person user using a combination of the client ID and client secret.
   *
   * @public
   */
  AllowedOAuthFlows?: OAuthFlowType[] | undefined;

  /**
   * The OAuth, OpenID Connect (OIDC), and custom scopes that you want to permit your app client to authorize access with. Scopes govern access control to user pool self-service API operations, user data from the `userInfo` endpoint, and third-party APIs. Scope values include `phone`, `email`, `openid`, and `profile`. The `aws.cognito.signin.user.admin` scope authorizes user self-service operations. Custom scopes with resource servers authorize access to external APIs.
   *
   * @public
   */
  AllowedOAuthScopes?: string[] | undefined;

  /**
   * Set to `true` to use OAuth 2.0 authorization server features in your app client.
   *
   * This parameter must have a value of `true` before you can configure the following features in your app client.
   *
   * - `CallBackURLs`: Callback URLs.
   * - `LogoutURLs`: Sign-out redirect URLs.
   * - `AllowedOAuthScopes`: OAuth 2.0 scopes.
   * - `AllowedOAuthFlows`: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.
   *
   * To use authorization server features, configure one of these features in the Amazon Cognito console or set `AllowedOAuthFlowsUserPoolClient` to `true` in a `CreateUserPoolClient` or `UpdateUserPoolClient` API request. If you don't set a value for `AllowedOAuthFlowsUserPoolClient` in a request with the CLI or SDKs, it defaults to `false`. When `false`, only SDK-based API sign-in is permitted.
   *
   * @public
   */
  AllowedOAuthFlowsUserPoolClient?: boolean | undefined;

  /**
   * The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign.
   *
   * In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools might not have access to analytics or might be configurable with campaigns in the US East (N. Virginia) Region. For more information, see [Using Amazon Pinpoint analytics](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html).
   *
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType | undefined;

  /**
   * When `ENABLED`, suppresses messages that might indicate a valid user exists when someone attempts sign-in. This parameters sets your preference for the errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to `ENABLED` and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to `LEGACY`, those APIs return a `UserNotFoundException` exception if the user doesn't exist in the user pool.
   *
   * Defaults to `LEGACY`.
   *
   * @public
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | undefined;

  /**
   * Activates or deactivates [token revocation](https://docs.aws.amazon.com/cognito/latest/developerguide/token-revocation.html) in the target app client.
   *
   * @public
   */
  EnableTokenRevocation?: boolean | undefined;

  /**
   * When `true`, your application can include additional `UserContextData` in authentication requests. This data includes the IP address, and contributes to analysis by threat protection features. For more information about propagation of user context data, see [Adding session data to API requests](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint). If you don’t include this parameter, you can't send the source IP address to Amazon Cognito threat protection features. You can only activate `EnablePropagateAdditionalUserContextData` in an app client that has a client secret.
   *
   * @public
   */
  EnablePropagateAdditionalUserContextData?: boolean | undefined;

  /**
   * Amazon Cognito creates a session token for each API request in an authentication flow. `AuthSessionValidity` is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.
   *
   * @public
   */
  AuthSessionValidity?: number | undefined;

  /**
   * The configuration of your app client for refresh token rotation. When enabled, your app client issues new ID, access, and refresh tokens when users renew their sessions with refresh tokens. When disabled, token refresh issues only ID and access tokens.
   *
   * @public
   */
  RefreshTokenRotation?: RefreshTokenRotationType | undefined;
}

/**
 * Represents the response from the server to the request to update the user pool client.
 *
 * @public
 */
export interface UpdateUserPoolClientResponse {
  /**
   * The updated details of your app client.
   *
   * @public
   */
  UserPoolClient?: UserPoolClientType | undefined;
}

/**
 * The UpdateUserPoolDomain request input.
 *
 * @public
 */
export interface UpdateUserPoolDomainRequest {
  /**
   * The name of the domain that you want to update. For custom domains, this is the fully-qualified domain name, for example `auth.example.com`. For prefix domains, this is the prefix alone, such as `myprefix`.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The ID of the user pool that is associated with the domain you're updating.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A version number that indicates the state of managed login for your domain. Version `1` is hosted UI (classic). Version `2` is the newer managed login with the branding editor. For more information, see [Managed login](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html).
   *
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * The configuration for a custom domain that hosts managed login for your application. In an `UpdateUserPoolDomain` request, this parameter specifies an SSL certificate for the managed login hosted webserver. The certificate must be an ACM ARN in `us-east-1`.
   *
   * When you create a custom domain, the passkey RP ID defaults to the custom domain. If you had a prefix domain active, this will cause passkey integration for your prefix domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey integration working, you can explicitly set RP ID to the prefix domain.
   *
   * @public
   */
  CustomDomainConfig?: CustomDomainConfigType | undefined;

  /**
   * The routing configuration for the user pool domain. Specifies failover settings for multi-region deployments.
   *
   * @public
   */
  Routing?: RoutingType | undefined;
}

/**
 * The UpdateUserPoolDomain response output.
 *
 * @public
 */
export interface UpdateUserPoolDomainResponse {
  /**
   * A version number that indicates the state of managed login for your domain. Version `1` is hosted UI (classic). Version `2` is the newer managed login with the branding editor. For more information, see [Managed login](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html).
   *
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * The fully-qualified domain name (FQDN) of the Amazon CloudFront distribution that hosts your managed login or classic hosted UI pages. You domain-name authority must have an alias record that points requests for your custom domain to this FQDN. Amazon Cognito returns this value if you set a custom domain with `CustomDomainConfig`. If you set an Amazon Cognito prefix domain, this operation returns a blank response.
   *
   * @public
   */
  CloudFrontDomain?: string | undefined;

  /**
   * The updated routing configuration for the user pool domain.
   *
   * @public
   */
  Routing?: RoutingType | undefined;
}

/**
 * @public
 */
export interface UpdateUserPoolReplicaRequest {
  /**
   * The ID of the user pool that contains the replica to update.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The Amazon Web Services Region of the replica to update.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The status to set for the replica. Valid values are ACTIVE and INACTIVE.
   *
   * @public
   */
  Status: UpdateReplicaStatusType | undefined;
}

/**
 * @public
 */
export interface UpdateUserPoolReplicaResponse {
  /**
   * Information about the updated user pool replica.
   *
   * @public
   */
  UserPoolReplica?: UserPoolReplicaType | undefined;
}

/**
 * @public
 */
export interface VerifySoftwareTokenRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * The session ID from an `AssociateSoftwareToken` request.
   *
   * @public
   */
  Session?: string | undefined;

  /**
   * A TOTP that the user generated in their configured authenticator app.
   *
   * @public
   */
  UserCode: string | undefined;

  /**
   * A friendly name for the device that's running the TOTP authenticator.
   *
   * @public
   */
  FriendlyDeviceName?: string | undefined;
}

/**
 * @public
 */
export interface VerifySoftwareTokenResponse {
  /**
   * Amazon Cognito can accept or reject the code that you provide. This response parameter indicates the success of TOTP verification. Some reasons that this operation might return an error are clock skew on the user's device and excessive retries.
   *
   * @public
   */
  Status?: VerifySoftwareTokenResponseType | undefined;

  /**
   * This session ID satisfies an `MFA_SETUP` challenge. Supply the session ID in your challenge response.
   *
   * @public
   */
  Session?: string | undefined;
}

/**
 * Represents the request to verify user attributes.
 *
 * @public
 */
export interface VerifyUserAttributeRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;

  /**
   * The name of the attribute that you want to verify.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The verification code that your user pool sent to the added or changed attribute, for example the user's email address.
   *
   * @public
   */
  Code: string | undefined;
}

/**
 * A container representing the response from the server from the request to verify user attributes.
 *
 * @public
 */
export interface VerifyUserAttributeResponse {}
