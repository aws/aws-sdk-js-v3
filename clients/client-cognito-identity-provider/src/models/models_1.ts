// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { CognitoIdentityProviderServiceException as __BaseException } from "./CognitoIdentityProviderServiceException";

import {
  AccountRecoverySettingType,
  AccountTakeoverRiskConfigurationType,
  AdminCreateUserConfigType,
  AnalyticsConfigurationType,
  AnalyticsMetadataType,
  AssetType,
  AttributeType,
  AttributeTypeFilterSensitiveLog,
  AuthenticationResultType,
  AuthenticationResultTypeFilterSensitiveLog,
  AuthFactorType,
  AuthFlowType,
  ChallengeNameType,
  CodeDeliveryDetailsType,
  CompromisedCredentialsRiskConfigurationType,
  CustomDomainConfigType,
  DeletionProtectionType,
  DeviceConfigurationType,
  DeviceRememberedStatusType,
  DeviceType,
  EmailConfigurationType,
  EmailMfaSettingsType,
  ExplicitAuthFlowsType,
  FeedbackValueType,
  GroupType,
  IdentityProviderType,
  IdentityProviderTypeType,
  LambdaConfigType,
  LogConfigurationType,
  LogDeliveryConfigurationType,
  ManagedLoginBrandingType,
  MFAOptionType,
  OAuthFlowType,
  PreventUserExistenceErrorTypes,
  RefreshTokenRotationType,
  ResourceServerScopeType,
  ResourceServerType,
  RiskConfigurationType,
  RiskConfigurationTypeFilterSensitiveLog,
  RiskExceptionConfigurationType,
  SmsConfigurationType,
  SMSMfaSettingsType,
  SoftwareTokenMfaSettingsType,
  StatusType,
  TokenValidityUnitsType,
  UICustomizationType,
  UICustomizationTypeFilterSensitiveLog,
  UserAttributeUpdateSettingsType,
  UserContextDataType,
  UserImportJobType,
  UserPoolAddOnsType,
  UserPoolClientType,
  UserPoolClientTypeFilterSensitiveLog,
  UserPoolMfaType,
  UserPoolPolicyType,
  UserPoolTierType,
  UserType,
  UserTypeFilterSensitiveLog,
  VerificationMessageTemplateType,
  VerifiedAttributeType,
} from "./models_0";

/**
 * @public
 */
export interface GetUserAuthFactorsRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * @public
 */
export interface GetUserAuthFactorsResponse {
  /**
   * <p>The name of the user who is eligible for the authentication factors in the
   *             response.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The challenge method that Amazon Cognito returns to the user in response to sign-in requests.
   *             Users can prefer SMS message, email message, or TOTP MFA.</p>
   * @public
   */
  PreferredMfaSetting?: string | undefined;

  /**
   * <p>The MFA options that are activated for the user. The possible values in this list are
   *                 <code>SMS_MFA</code>, <code>EMAIL_OTP</code>, and
   *             <code>SOFTWARE_TOKEN_MFA</code>.</p>
   * @public
   */
  UserMFASettingList?: string[] | undefined;

  /**
   * <p>The authentication types that are available to the user with <code>USER_AUTH</code>
   *             sign-in, for example <code>["PASSWORD", "WEB_AUTHN"]</code>.</p>
   * @public
   */
  ConfiguredUserAuthFactors?: AuthFactorType[] | undefined;
}

/**
 * @public
 */
export interface GetUserPoolMfaConfigRequest {
  /**
   * <p>The ID of the user pool where you want to query WebAuthn and MFA configuration.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Sets or shows configuration for user pool email message MFA and sign-in with one-time
 *             passwords (OTPs). Includes the subject and body of the email message template for
 *             sign-in and MFA messages. To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
 *                      Essentials tier</a> or higher.</p>
 * @public
 */
export interface EmailMfaConfigType {
  /**
   * <p>The template for the email messages that your user pool sends to users with codes for
   *             MFA and sign-in with email OTPs. The message must contain the <code>\{####\}</code>
   *             placeholder. In the message, Amazon Cognito replaces this placeholder with the code. If you
   *             don't provide this parameter, Amazon Cognito sends messages in the default format.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The subject of the email messages that your user pool sends to users with codes for
   *             MFA and email OTP sign-in.</p>
   * @public
   */
  Subject?: string | undefined;
}

/**
 * <p>The configuration of multi-factor authentication (MFA) with SMS messages in a user
 *             pool.</p>
 * @public
 */
export interface SmsMfaConfigType {
  /**
   * <p>The SMS authentication message that will be sent to users with the code they must sign
   *             in with. The message must contain the <code>\{####\}</code> placeholder. Your user pool
   *             replaces the placeholder with the MFA code. If this parameter isn't provided, your user
   *             pool sends a default message.</p>
   * @public
   */
  SmsAuthenticationMessage?: string | undefined;

  /**
   * <p>User pool configuration for delivery of SMS messages with Amazon Simple Notification Service. To send SMS
   *             messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an
   *             Identity and Access Management (IAM) role in your Amazon Web Services account.</p>
   *          <p>You can set <code>SmsConfiguration</code> in <code>CreateUserPool</code> and <code>
   *                 UpdateUserPool</code>, or in <code>SetUserPoolMfaConfig</code>.</p>
   * @public
   */
  SmsConfiguration?: SmsConfigurationType | undefined;
}

/**
 * <p>Settings for time-based one-time password (TOTP) multi-factor authentication (MFA) in
 *             a user pool. Enables and disables availability of this feature.</p>
 * @public
 */
export interface SoftwareTokenMfaConfigType {
  /**
   * <p>The activation state of TOTP MFA.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

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
 * <p>Settings for authentication (MFA) with passkey, or webauthN, biometric and
 *             security-key devices in a user pool. Configures the following:</p>
 *          <ul>
 *             <li>
 *                <p>Configuration for requiring user-verification support in passkeys.</p>
 *             </li>
 *             <li>
 *                <p>The user pool relying-party ID. This is the domain, typically your user pool
 *                     domain, that user's passkey providers should trust as a receiver of passkey
 *                     authentication.</p>
 *             </li>
 *             <li>
 *                <p>The providers that you want to allow as origins for passkey
 *                     authentication.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface WebAuthnConfigurationType {
  /**
   * <p>Sets or displays the authentication domain, typically your user pool domain, that
   *             passkey providers must use as a relying party (RP) in their configuration.</p>
   *          <p>Under the following conditions, the passkey relying party ID must be the
   *             fully-qualified domain name of your custom domain:</p>
   *          <ul>
   *             <li>
   *                <p>The user pool is configured for passkey authentication.</p>
   *             </li>
   *             <li>
   *                <p>The user pool has a custom domain, whether or not it also has a prefix
   *                     domain.</p>
   *             </li>
   *             <li>
   *                <p>Your application performs authentication with managed login or the classic
   *                     hosted UI.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RelyingPartyId?: string | undefined;

  /**
   * <p>When <code>required</code>, users can only register and sign in users with passkeys
   *             that are capable of <a href="https://www.w3.org/TR/webauthn-2/#enum-userVerificationRequirement">user
   *                 verification</a>. When <code>preferred</code>, your user pool doesn't
   *             require the use of authenticators with user verification but encourages it.</p>
   * @public
   */
  UserVerification?: UserVerificationType | undefined;
}

/**
 * @public
 */
export interface GetUserPoolMfaConfigResponse {
  /**
   * <p>Shows user pool configuration for SMS message MFA. Includes the message template and
   *             the SMS message sending configuration for Amazon SNS.</p>
   * @public
   */
  SmsMfaConfiguration?: SmsMfaConfigType | undefined;

  /**
   * <p>Shows user pool configuration for time-based one-time password (TOTP) MFA. Includes
   *             TOTP enabled or disabled state.</p>
   * @public
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType | undefined;

  /**
   * <p>Shows configuration for user pool email message MFA and sign-in with one-time
   *             passwords (OTPs). Includes the subject and body of the email message template for
   *             sign-in and MFA messages. To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
   *                      Essentials tier</a> or higher.</p>
   * @public
   */
  EmailMfaConfiguration?: EmailMfaConfigType | undefined;

  /**
   * <p>Displays the state of multi-factor authentication (MFA) as on, off, or optional. When
   *                 <code>ON</code>, all users must set up MFA before they can sign in. When
   *                 <code>OPTIONAL</code>, your application must make a client-side determination of
   *             whether a user wants to register an MFA device. For user pools with adaptive
   *             authentication with threat protection, choose <code>OPTIONAL</code>.</p>
   *          <p>When <code>MfaConfiguration</code> is <code>OPTIONAL</code>, managed login
   *             doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in
   *             API responses and in managed login for users who have chosen and configured a preferred
   *             MFA factor.</p>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * <p>Shows user pool configuration for sign-in with passkey authenticators like biometric
   *             devices and security keys. Passkeys are not eligible MFA factors. They are instead an
   *             eligible primary sign-in factor for <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice">choice-based authentication</a>, or the
   *                 <code>USER_AUTH</code> flow.</p>
   * @public
   */
  WebAuthnConfiguration?: WebAuthnConfigurationType | undefined;
}

/**
 * <p>Represents the request to sign out all devices.</p>
 * @public
 */
export interface GlobalSignOutRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * <p>The response to the request to sign out all devices.</p>
 * @public
 */
export interface GlobalSignOutResponse {}

/**
 * <p>Initiates the authentication request.</p>
 * @public
 */
export interface InitiateAuthRequest {
  /**
   * <p>The authentication flow that you want to initiate. Each <code>AuthFlow</code> has
   *             linked <code>AuthParameters</code> that you must submit. The following are some example
   *             flows.</p>
   *          <dl>
   *             <dt>USER_AUTH</dt>
   *             <dd>
   *                <p>The entry point for <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice">choice-based authentication</a> with passwords,
   *                         one-time passwords, and WebAuthn authenticators. Request a preferred
   *                         authentication type or review available authentication types. From the
   *                         offered authentication types, select one in a challenge response and then
   *                         authenticate with that method in an additional challenge response.
   *                         To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
   *                      Essentials tier</a> or higher.</p>
   *             </dd>
   *             <dt>USER_SRP_AUTH</dt>
   *             <dd>
   *                <p>Username-password authentication with the Secure Remote Password (SRP)
   *                         protocol. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow.html#Using-SRP-password-verification-in-custom-authentication-flow">Use SRP password verification in custom
   *                             authentication flow</a>.</p>
   *             </dd>
   *             <dt>REFRESH_TOKEN_AUTH and REFRESH_TOKEN</dt>
   *             <dd>
   *                <p>Receive new ID and access tokens when you pass a
   *                             <code>REFRESH_TOKEN</code> parameter with a valid refresh token as the
   *                         value. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-refresh-token.html">Using the refresh token</a>.</p>
   *             </dd>
   *             <dt>CUSTOM_AUTH</dt>
   *             <dd>
   *                <p>Custom authentication with Lambda triggers. For more information, see
   *                             <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html">Custom authentication challenge Lambda
   *                             triggers</a>.</p>
   *             </dd>
   *             <dt>USER_PASSWORD_AUTH</dt>
   *             <dd>
   *                <p>Client-side username-password authentication with the password sent
   *                         directly in the request. For more information about client-side and
   *                         server-side authentication, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-public-server-side.html">SDK authorization models</a>.</p>
   *             </dd>
   *          </dl>
   *          <p>
   *             <code>ADMIN_USER_PASSWORD_AUTH</code> is a flow type of <code>AdminInitiateAuth</code>
   *             and isn't valid for InitiateAuth. <code>ADMIN_NO_SRP_AUTH</code> is a legacy server-side
   *             username-password flow and isn't valid for InitiateAuth.</p>
   * @public
   */
  AuthFlow: AuthFlowType | undefined;

  /**
   * <p>The authentication parameters. These are inputs corresponding to the
   *                 <code>AuthFlow</code> that you're invoking.</p>
   *          <p>The required values are specific to the <a>InitiateAuthRequest$AuthFlow</a>.</p>
   *          <p>The following are some authentication flows and their parameters. Add a
   *                 <code>SECRET_HASH</code> parameter if your app client has a client secret.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>USER_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>PREFERRED_CHALLENGE</code>. If you don't provide a value for
   *                         <code>PREFERRED_CHALLENGE</code>, Amazon Cognito responds with the
   *                         <code>AvailableChallenges</code> parameter that specifies the available
   *                     sign-in methods.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_SRP_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SRP_A</code> (required), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_PASSWORD_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>PASSWORD</code> (required), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REFRESH_TOKEN_AUTH/REFRESH_TOKEN</code>: <code>REFRESH_TOKEN</code>
   *                     (required), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SECRET_HASH</code> (if app client is configured with client secret),
   *                         <code>DEVICE_KEY</code>. To start the authentication flow with password
   *                     verification, include <code>ChallengeName: SRP_A</code> and <code>SRP_A: (The
   *                         SRP_A Value)</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about
   *             <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>
   * @public
   */
  AuthParameters?: Record<string, string> | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for certain custom
   *             workflows that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you send an <code>InitiateAuth</code> request, Amazon Cognito invokes the Lambda functions
   *             that are specified for various triggers. The <code>ClientMetadata</code> value is passed
   *             as input to the functions for only the following triggers.</p>
   *          <ul>
   *             <li>
   *                <p>Pre sign-up</p>
   *             </li>
   *             <li>
   *                <p>Pre authentication</p>
   *             </li>
   *             <li>
   *                <p>User migration</p>
   *             </li>
   *          </ul>
   *          <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload as input
   *             to the function. This payload contains a <code>validationData</code> attribute with the
   *             data that you assigned to the <code>ClientMetadata</code> parameter in your
   *                 <code>InitiateAuth</code> request. In your function, <code>validationData</code> can
   *             contribute to operations that require data that isn't in the default
   *             payload.</p>
   *          <p>
   *             <code>InitiateAuth</code> requests invokes the following triggers without
   *                 <code>ClientMetadata</code> as input.</p>
   *          <ul>
   *             <li>
   *                <p>Post authentication</p>
   *             </li>
   *             <li>
   *                <p>Custom message</p>
   *             </li>
   *             <li>
   *                <p>Pre token generation</p>
   *             </li>
   *             <li>
   *                <p>Create auth challenge</p>
   *             </li>
   *             <li>
   *                <p>Define auth challenge</p>
   *             </li>
   *             <li>
   *                <p>Custom email sender</p>
   *             </li>
   *             <li>
   *                <p>Custom SMS sender</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;

  /**
   * <p>The ID of the app client that your user wants to sign in to.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>Information that supports analytics outcomes with Amazon Pinpoint, including the
   * user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier,
   * email address, or phone number.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat
   * protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html">Collecting data for threat protection in
   * applications</a>.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>The optional session ID from a <code>ConfirmSignUp</code> API request. You can sign in
   *             a user directly from the sign-up process with the <code>USER_AUTH</code> authentication
   *             flow. When you pass the session ID to <code>InitiateAuth</code>, Amazon Cognito assumes the SMS
   *             or email message one-time verification password from <code>ConfirmSignUp</code> as the
   *             primary authentication factor. You're not required to submit this code a second
   *             time. This option is only valid for users who have confirmed their sign-up and are
   *             signing in for the first time within the authentication flow session duration of the
   *             session ID.</p>
   * @public
   */
  Session?: string | undefined;
}

/**
 * <p>Initiates the authentication response.</p>
 * @public
 */
export interface InitiateAuthResponse {
  /**
   * <p>The name of an additional authentication challenge that you must respond to.</p>
   *          <p>Possible challenges include the following:</p>
   *          <note>
   *             <p>All of the following challenges require <code>USERNAME</code> and, when the app
   *                 client has a client secret, <code>SECRET_HASH</code> in the parameters.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WEB_AUTHN</code>: Respond to the challenge with the results of a
   *                     successful authentication with a WebAuthn authenticator, or passkey. Examples
   *                     of WebAuthn authenticators include biometric devices and security keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD</code>: Respond with <code>USER_PASSWORD_AUTH</code>
   *                     parameters: <code>USERNAME</code> (required), <code>PASSWORD</code> (required),
   *                         <code>SECRET_HASH</code> (required if the app client is configured with a
   *                     client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_SRP</code>: Respond with <code>USER_SRP_AUTH</code> parameters:
   *                         <code>USERNAME</code> (required), <code>SRP_A</code> (required),
   *                         <code>SECRET_HASH</code> (required if the app client is configured with a
   *                     client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SELECT_CHALLENGE</code>: Respond to the challenge with
   *                         <code>USERNAME</code> and an <code>ANSWER</code> that matches one of the
   *                     challenge types in the <code>AvailableChallenges</code> response
   *                     parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMS_MFA</code>: Respond with an
   *                     <code>SMS_MFA_CODE</code> that your user pool delivered in an SMS message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_OTP</code>: Respond with an
   *                         <code>EMAIL_OTP_CODE</code> that your user pool delivered in an email
   *                     message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_VERIFIER</code>: Respond with
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     client-side SRP calculations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued. The parameters of the challenge are determined by your Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_SRP_AUTH</code>: Respond with the initial parameters of device SRP
   *                 authentication. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Respond with
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     client-side SRP calculations. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login. Respond to this challenge with
   *                     <code>NEW_PASSWORD</code> and any required attributes that Amazon Cognito returned in
   *                     the <code>requiredAttributes</code> parameter. You can also set values for
   *                     attributes that aren't required by your user pool and that your app client
   *                     can write.</p>
   *                <p>Amazon Cognito only returns this challenge for users who have temporary passwords.
   *                     When you create passwordless users, you must provide values for all required
   *                     attributes.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>AdminRespondToAuthChallenge</code> or <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the
   * <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> or <code>UpdateUserAttributes</code> API
   * operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_SETUP</code>: For users who are required to setup an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFAS_CAN_SETUP</code> value. </p>
   *                <p>To set up time-based one-time password (TOTP) MFA, use the session returned
   *                     in this challenge from <code>InitiateAuth</code> or <code>AdminInitiateAuth</code>
   *                     as an input to <code>AssociateSoftwareToken</code>. Then, use the session returned
   *                     by <code>VerifySoftwareToken</code> as an input to
   *                     <code>RespondToAuthChallenge</code> or <code>AdminRespondToAuthChallenge</code>
   *                 with challenge name <code>MFA_SETUP</code> to complete sign-in.
   *                 </p>
   *                <p>To set up SMS or email MFA, collect a <code>phone_number</code> or
   *                     <code>email</code> attribute for the user. Then restart the authentication
   *                     flow with an <code>InitiateAuth</code> or <code>AdminInitiateAuth</code> request.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * <p>The session identifier that links a challenge response to the initial authentication
   *             request. If the user must pass another challenge, Amazon Cognito returns a session ID and
   *             challenge parameters.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The required parameters of the <code>ChallengeName</code> challenge.</p>
   *          <p>All challenges require <code>USERNAME</code>. They also require
   *                 <code>SECRET_HASH</code> if your app client has a client secret.</p>
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * <p>The result of a successful and complete authentication request. This result is only
   *             returned if the user doesn't need to pass another challenge. If they must pass another
   *             challenge before they get tokens, Amazon Cognito returns a challenge in
   *                 <code>ChallengeName</code>, <code>ChallengeParameters</code>, and
   *                 <code>Session</code> response parameters.</p>
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;

  /**
   * <p>This response parameter lists the available authentication challenges that users can
   *             select from in <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice">choice-based authentication</a>. For example, they might be
   *             able to choose between passkey authentication, a one-time password from an SMS message,
   *             and a traditional password.</p>
   * @public
   */
  AvailableChallenges?: ChallengeNameType[] | undefined;
}

/**
 * <p>Represents the request to list the devices.</p>
 * @public
 */
export interface ListDevicesRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The maximum number of devices that you want Amazon Cognito to return in the response.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * <p>Represents the response to list devices.</p>
 * @public
 */
export interface ListDevicesResponse {
  /**
   * <p>An array of devices and their details. Each entry that's returned includes device
   *             information, last-accessed and created dates, and the device key.</p>
   * @public
   */
  Devices?: DeviceType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * <p>The ID of the user pool where you want to list user groups.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of groups that you want Amazon Cognito to return in the response.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>An array of groups and their details. Each entry that's returned includes
   *             description, precedence, and IAM role values.</p>
   * @public
   */
  Groups?: GroupType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * <p>The ID of the user pool where you want to list IdPs.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of IdPs that you want Amazon Cognito to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The details of a user pool identity provider (IdP), including name and type.</p>
 * @public
 */
export interface ProviderDescription {
  /**
   * <p>The name of the IdP, for example <code>MySAMLProvider</code>.</p>
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * <p>The type of the provider, for example <code>SAML</code>. Amazon Cognito supports SAML 2.0,
   *             OIDC, and social IdPs. User pools list supported social IdPs by name in this response
   *             parameter: Facebook, Google, Login with Amazon, and Sign in with Apple.</p>
   * @public
   */
  ProviderType?: IdentityProviderTypeType | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersResponse {
  /**
   * <p>An array of the IdPs in your user pool. For each, the response includes identifiers,
   *             the IdP name and type, and trust-relationship details like the issuer URL.</p>
   * @public
   */
  Providers: ProviderDescription[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceServersRequest {
  /**
   * <p>The ID of the user pool where you want to list resource servers.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of resource servers that you want Amazon Cognito to return in the
   *             response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceServersResponse {
  /**
   * <p>An array of resource servers and the details of their configuration. For each, the
   *             response includes names, identifiers, and custom scopes.</p>
   * @public
   */
  ResourceServers: ResourceServerType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are assigned to the user pool.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents the request to list the user import jobs.</p>
 * @public
 */
export interface ListUserImportJobsRequest {
  /**
   * <p>The ID of the user pool where you want to list import jobs.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of import jobs that you want Amazon Cognito to return in the
   *             response.</p>
   * @public
   */
  MaxResults: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to list the user import
 *             jobs.</p>
 * @public
 */
export interface ListUserImportJobsResponse {
  /**
   * <p>An array of user import jobs from the requested user pool. For each, the response
   *             includes logging destination, status, and the Amazon S3 pre-signed URL for CSV upload.</p>
   * @public
   */
  UserImportJobs?: UserImportJobType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * <p>Represents the request to list the user pool clients.</p>
 * @public
 */
export interface ListUserPoolClientsRequest {
  /**
   * <p>The ID of the user pool where you want to list user pool clients.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of app clients that you want Amazon Cognito to return in the
   *             response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A short description of a user pool app client.</p>
 * @public
 */
export interface UserPoolClientDescription {
  /**
   * <p>The app client ID.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The ID of the user pool that's associated with the app client.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The app client name.</p>
   * @public
   */
  ClientName?: string | undefined;
}

/**
 * <p>Represents the response from the server that lists user pool clients.</p>
 * @public
 */
export interface ListUserPoolClientsResponse {
  /**
   * <p>An array of app clients and their details. Includes app client ID and name.</p>
   * @public
   */
  UserPoolClients?: UserPoolClientDescription[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the request to list user pools.</p>
 * @public
 */
export interface ListUserPoolsRequest {
  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of user pools that you want Amazon Cognito to return in the response.</p>
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * <p>A short description of a user pool.</p>
 * @public
 */
export interface UserPoolDescriptionType {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The user pool name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible
   *             stages of user pool operations. Triggers can modify the outcome of the operations that
   *             invoked them.</p>
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * <p>The user pool status.</p>
   *
   * @deprecated
   * @public
   */
  Status?: StatusType | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * <p>Represents the response to list user pools.</p>
 * @public
 */
export interface ListUserPoolsResponse {
  /**
   * <p>An array of user pools and their configuration details.</p>
   * @public
   */
  UserPools?: UserPoolDescriptionType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the request to list users.</p>
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The ID of the user pool where you want to display or search for users.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A JSON array of user attribute names, for example <code>given_name</code>, that you
   *             want Amazon Cognito to include in the response for each user. When you don't provide an
   *                 <code>AttributesToGet</code> parameter, Amazon Cognito returns all attributes for each
   *             user.</p>
   *          <p>Use <code>AttributesToGet</code> with required attributes in your user pool, or in
   *             conjunction with <code>Filter</code>. Amazon Cognito returns an error if not all users in the
   *             results have set a value for the attribute you request. Attributes that you can't
   *             filter on, including custom attributes, must have a value set in every user profile
   *             before an <code>AttributesToGet</code> parameter returns results.</p>
   * @public
   */
  AttributesToGet?: string[] | undefined;

  /**
   * <p>The maximum number of users that you want Amazon Cognito to return in the response.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * <p>A filter string of the form <code>"AttributeName Filter-Type "AttributeValue"</code>.
   *             Quotation marks within the filter string must be escaped using the backslash
   *                 (<code>\</code>) character. For example, <code>"family_name =
   *             \"Reddy\""</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>AttributeName</i>: The name of the attribute to search for.
   *                     You can only search for one attribute at a time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Filter-Type</i>: For an exact match, use <code>=</code>, for
   *                     example, "<code>given_name = \"Jon\"</code>". For a prefix ("starts with")
   *                     match, use <code>^=</code>, for example, "<code>given_name ^= \"Jon\"</code>".
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>AttributeValue</i>: The attribute value that must be matched
   *                     for each user.</p>
   *             </li>
   *          </ul>
   *          <p>If the filter string is empty, <code>ListUsers</code> returns all users in the user
   *             pool.</p>
   *          <p>You can only search for the following standard attributes:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>username</code> (case-sensitive)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>email</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>phone_number</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>given_name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>family_name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>preferred_username</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cognito:user_status</code> (called <b>Status</b> in the Console) (case-insensitive)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status (called <b>Enabled</b> in the Console)
   *                         (case-sensitive)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sub</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Custom attributes aren't searchable.</p>
   *          <note>
   *             <p>You can also list users with a client-side filter. The server-side filter matches
   *                 no more than one attribute. For an advanced search, use a client-side filter with
   *                 the <code>--query</code> parameter of the <code>list-users</code> action in the
   *                 CLI. When you use a client-side filter, ListUsers returns a paginated list of zero
   *                 or more users. You can receive multiple pages in a row with zero results. Repeat the
   *                 query with each pagination token that is returned until you receive a null
   *                 pagination token value, and then review the combined result. </p>
   *             <p>For more information about server-side and client-side filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">FilteringCLI output</a> in the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Command Line Interface
   *                     User Guide</a>. </p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-using-listusers-api">Searching for Users Using the ListUsers API</a> and <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-listusers-api-examples">Examples of Using the ListUsers API</a> in the <i>Amazon Cognito Developer
   *                 Guide</i>.</p>
   * @public
   */
  Filter?: string | undefined;
}

/**
 * <p>The response from the request to list users.</p>
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>An array of user pool users who match your query, and their attributes.</p>
   * @public
   */
  Users?: UserType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersInGroupRequest {
  /**
   * <p>The ID of the user pool where you want to view the membership of the requested
   *             group.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the group that you want to query for user membership.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The maximum number of groups that you want Amazon Cognito to return in the response.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersInGroupResponse {
  /**
   * <p>An array of users who are members in the group, and their attributes.</p>
   * @public
   */
  Users?: UserType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWebAuthnCredentialsRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of the user's passkey credentials that you want to
   *             return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The details of a passkey, or webauthN, biometric or security-key authentication factor
 *             for a user.</p>
 * @public
 */
export interface WebAuthnCredentialDescription {
  /**
   * <p>The unique identifier of the passkey credential.</p>
   * @public
   */
  CredentialId: string | undefined;

  /**
   * <p>An automatically-generated friendly name for the passkey credential.</p>
   * @public
   */
  FriendlyCredentialName: string | undefined;

  /**
   * <p>The relying-party ID of the provider for the passkey credential.</p>
   * @public
   */
  RelyingPartyId: string | undefined;

  /**
   * <p>The general category of the passkey authenticator. Can be a platform, or on-device
   *             authenticator like a built-in fingerprint scanner, or a cross-platform device that's not
   *             attached to the device like a Bluetooth security key.</p>
   * @public
   */
  AuthenticatorAttachment?: string | undefined;

  /**
   * <p>Information about the transport methods of the passkey credential, for example USB or
   *             Bluetooth Low Energy.</p>
   * @public
   */
  AuthenticatorTransports: string[] | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListWebAuthnCredentialsResponse {
  /**
   * <p>A list of registered passkeys for a user.</p>
   * @public
   */
  Credentials: WebAuthnCredentialDescription[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the request to resend the confirmation code.</p>
 * @public
 */
export interface ResendConfirmationCodeRequest {
  /**
   * <p>The ID of the user pool app client where the user signed up.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message. For more information
   *             about <code>SecretHash</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>.</p>
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * <p>Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat
   * protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html">Collecting data for threat protection in
   * applications</a>.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>Information that supports analytics outcomes with Amazon Pinpoint, including the
   * user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier,
   * email address, or phone number.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the ResendConfirmationCode API action, Amazon Cognito invokes the function that is
   *             assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this
   *             function, it passes a JSON payload, which the function receives as input. This payload
   *             contains a <code>clientMetadata</code> attribute, which provides the data that you
   *             assigned to the ClientMetadata parameter in your ResendConfirmationCode request. In your
   *             function code in Lambda, you can process the <code>clientMetadata</code> value to enhance
   *             your workflow for your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>The response from the server when Amazon Cognito makes the request to resend a confirmation
 *             code.</p>
 * @public
 */
export interface ResendConfirmationCodeResponse {
  /**
   * <p>Information about the phone number or email address that Amazon Cognito sent the confirmation
   *             code to.</p>
   * @public
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType | undefined;
}

/**
 * <p>The request to respond to an authentication challenge.</p>
 * @public
 */
export interface RespondToAuthChallengeRequest {
  /**
   * <p>The ID of the app client where the user is signing in.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The name of the challenge that you are responding to.</p>
   *          <note>
   *             <p>You can't respond to an <code>ADMIN_NO_SRP_AUTH</code> challenge with this
   *                 operation.</p>
   *          </note>
   *          <p>Possible challenges include the following:</p>
   *          <note>
   *             <p>All of the following challenges require <code>USERNAME</code> and, when the app
   *                 client has a client secret, <code>SECRET_HASH</code> in the parameters.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WEB_AUTHN</code>: Respond to the challenge with the results of a
   *                     successful authentication with a WebAuthn authenticator, or passkey. Examples
   *                     of WebAuthn authenticators include biometric devices and security keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD</code>: Respond with <code>USER_PASSWORD_AUTH</code>
   *                     parameters: <code>USERNAME</code> (required), <code>PASSWORD</code> (required),
   *                         <code>SECRET_HASH</code> (required if the app client is configured with a
   *                     client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_SRP</code>: Respond with <code>USER_SRP_AUTH</code> parameters:
   *                         <code>USERNAME</code> (required), <code>SRP_A</code> (required),
   *                         <code>SECRET_HASH</code> (required if the app client is configured with a
   *                     client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SELECT_CHALLENGE</code>: Respond to the challenge with
   *                         <code>USERNAME</code> and an <code>ANSWER</code> that matches one of the
   *                     challenge types in the <code>AvailableChallenges</code> response
   *                     parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMS_MFA</code>: Respond with an
   *                     <code>SMS_MFA_CODE</code> that your user pool delivered in an SMS message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_OTP</code>: Respond with an
   *                         <code>EMAIL_OTP_CODE</code> that your user pool delivered in an email
   *                     message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_VERIFIER</code>: Respond with
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     client-side SRP calculations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued. The parameters of the challenge are determined by your Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_SRP_AUTH</code>: Respond with the initial parameters of device SRP
   *                 authentication. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Respond with
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     client-side SRP calculations. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login. Respond to this challenge with
   *                     <code>NEW_PASSWORD</code> and any required attributes that Amazon Cognito returned in
   *                     the <code>requiredAttributes</code> parameter. You can also set values for
   *                     attributes that aren't required by your user pool and that your app client
   *                     can write.</p>
   *                <p>Amazon Cognito only returns this challenge for users who have temporary passwords.
   *                     When you create passwordless users, you must provide values for all required
   *                     attributes.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>AdminRespondToAuthChallenge</code> or <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the
   * <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> or <code>UpdateUserAttributes</code> API
   * operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_SETUP</code>: For users who are required to setup an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFAS_CAN_SETUP</code> value. </p>
   *                <p>To set up time-based one-time password (TOTP) MFA, use the session returned
   *                     in this challenge from <code>InitiateAuth</code> or <code>AdminInitiateAuth</code>
   *                     as an input to <code>AssociateSoftwareToken</code>. Then, use the session returned
   *                     by <code>VerifySoftwareToken</code> as an input to
   *                     <code>RespondToAuthChallenge</code> or <code>AdminRespondToAuthChallenge</code>
   *                 with challenge name <code>MFA_SETUP</code> to complete sign-in.
   *                 </p>
   *                <p>To set up SMS or email MFA, collect a <code>phone_number</code> or
   *                     <code>email</code> attribute for the user. Then restart the authentication
   *                     flow with an <code>InitiateAuth</code> or <code>AdminInitiateAuth</code> request.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  ChallengeName: ChallengeNameType | undefined;

  /**
   * <p>The session identifier that maintains the state of authentication requests and
   *             challenge responses. If an <code>AdminInitiateAuth</code> or
   *                 <code>AdminRespondToAuthChallenge</code> API request results in a determination that
   *             your application must pass another challenge, Amazon Cognito returns a session with other
   *             challenge parameters. Send this session identifier, unmodified, to the next
   *                 <code>AdminRespondToAuthChallenge</code> request.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The responses to the challenge that you received in the previous request. Each
   *     challenge has its own required response parameters. The following examples are partial
   *     JSON request bodies that highlight challenge-response parameters.</p>
   *          <important>
   *             <p>You must provide a SECRET_HASH parameter in all challenge responses to an app
   *         client that has a client secret. Include a <code>DEVICE_KEY</code> for device
   *         authentication.</p>
   *          </important>
   *          <dl>
   *             <dt>SELECT_CHALLENGE</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *             "USERNAME": "[username]",
   *             "ANSWER": "[Challenge name]"\}</code>
   *                </p>
   *                <p>Available challenges are <code>PASSWORD</code>, <code>PASSWORD_SRP</code>,
   *             <code>EMAIL_OTP</code>, <code>SMS_OTP</code>, and <code>WEB_AUTHN</code>.</p>
   *                <p>Complete authentication in the <code>SELECT_CHALLENGE</code> response for
   *             <code>PASSWORD</code>, <code>PASSWORD_SRP</code>, and <code>WEB_AUTHN</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *                   "ANSWER": "WEB_AUTHN",
   *                   "USERNAME": "[username]",
   *                   "CREDENTIAL": "[AuthenticationResponseJSON]"\}</code>
   *                      </p>
   *                      <p>See <a href="https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson">
   *                   AuthenticationResponseJSON</a>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *                   "ANSWER": "PASSWORD",
   *                   "USERNAME": "[username]",
   *                   "PASSWORD": "[password]"\}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *                   "ANSWER": "PASSWORD_SRP",
   *                   "USERNAME": "[username]",
   *                   "SRP_A": "[SRP_A]"\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For <code>SMS_OTP</code> and <code>EMAIL_OTP</code>, respond with the
   *             username and answer. Your user pool will send a code for the user to submit in
   *             the next challenge response.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *                   "ANSWER": "SMS_OTP",
   *                   "USERNAME": "[username]"\}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *                   "ANSWER": "EMAIL_OTP",
   *                   "USERNAME": "[username]"\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>SMS_OTP</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SMS_OTP", "ChallengeResponses":
   *             \{"SMS_OTP_CODE": "[code]", "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>EMAIL_OTP</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "EMAIL_OTP", "ChallengeResponses": \{"EMAIL_OTP_CODE":
   *                     "[code]", "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>SMS_MFA</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SMS_MFA", "ChallengeResponses": \{"SMS_MFA_CODE":
   *                     "[code]", "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>PASSWORD_VERIFIER</dt>
   *             <dd>
   *                <p>This challenge response is part of the SRP flow. Amazon Cognito requires
   *             that your application respond to this challenge within a few seconds. When
   *             the response time exceeds this period, your user pool returns a
   *             <code>NotAuthorizedException</code> error.</p>
   *                <p>
   *                   <code>"ChallengeName": "PASSWORD_VERIFIER", "ChallengeResponses":
   *                     \{"PASSWORD_CLAIM_SIGNATURE": "[claim_signature]",
   *                     "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP":
   *                     [timestamp], "USERNAME": "[username]"\}</code>
   *                </p>
   *                <p>Add <code>"DEVICE_KEY"</code> when you sign in with a remembered
   *                 device.</p>
   *             </dd>
   *             <dt>CUSTOM_CHALLENGE</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses":
   *                     \{"USERNAME": "[username]", "ANSWER": "[challenge_answer]"\}</code>
   *                </p>
   *                <p>Add <code>"DEVICE_KEY"</code> when you sign in with a remembered
   *                 device.</p>
   *             </dd>
   *             <dt>NEW_PASSWORD_REQUIRED</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "NEW_PASSWORD_REQUIRED", "ChallengeResponses":
   *                     \{"NEW_PASSWORD": "[new_password]", "USERNAME":
   *                 "[username]"\}</code>
   *                </p>
   *                <p>To set any required attributes that <code>InitiateAuth</code> returned in
   *                 an <code>requiredAttributes</code> parameter, add
   *                     <code>"userAttributes.[attribute_name]": "[attribute_value]"</code>.
   *                 This parameter can also set values for writable attributes that aren't
   *                 required by your user pool.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>AdminRespondToAuthChallenge</code> or <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the
   * <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> or <code>UpdateUserAttributes</code> API
   * operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </dd>
   *             <dt>SOFTWARE_TOKEN_MFA</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SOFTWARE_TOKEN_MFA", "ChallengeResponses":
   *                     \{"USERNAME": "[username]", "SOFTWARE_TOKEN_MFA_CODE":
   *                     [authenticator_code]\}</code>
   *                </p>
   *             </dd>
   *             <dt>DEVICE_SRP_AUTH</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "DEVICE_SRP_AUTH", "ChallengeResponses": \{"USERNAME":
   *                 "[username]", "DEVICE_KEY": "[device_key]", "SRP_A":
   *                 "[srp_a]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>DEVICE_PASSWORD_VERIFIER</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "DEVICE_PASSWORD_VERIFIER", "ChallengeResponses":
   *                 \{"DEVICE_KEY": "[device_key]", "PASSWORD_CLAIM_SIGNATURE":
   *                 "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]",
   *                 "TIMESTAMP": [timestamp], "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>MFA_SETUP</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "MFA_SETUP", "ChallengeResponses": \{"USERNAME":
   *                 "[username]"\}, "SESSION": "[Session ID from
   *                 VerifySoftwareToken]"</code>
   *                </p>
   *             </dd>
   *             <dt>SELECT_MFA_TYPE</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SELECT_MFA_TYPE", "ChallengeResponses": \{"USERNAME":
   *                 "[username]", "ANSWER": "[SMS_MFA or SOFTWARE_TOKEN_MFA]"\}</code>
   *                </p>
   *             </dd>
   *          </dl>
   *          <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about
   *     <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>
   * @public
   */
  ChallengeResponses?: Record<string, string> | undefined;

  /**
   * <p>Information that supports analytics outcomes with Amazon Pinpoint, including the
   * user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier,
   * email address, or phone number.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat
   * protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html">Collecting data for threat protection in
   * applications</a>.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the RespondToAuthChallenge API action, Amazon Cognito invokes any
   *             functions that are assigned to the following triggers: <i>post
   *                 authentication</i>, <i>pre token generation</i>,
   *                 <i>define auth challenge</i>, <i>create auth
   *                 challenge</i>, and <i>verify auth challenge</i>. When Amazon Cognito
   *             invokes any of these functions, it passes a JSON payload, which the function receives as
   *             input. This payload contains a <code>clientMetadata</code> attribute, which provides the
   *             data that you assigned to the ClientMetadata parameter in your RespondToAuthChallenge
   *             request. In your function code in Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>The response to respond to the authentication challenge.</p>
 * @public
 */
export interface RespondToAuthChallengeResponse {
  /**
   * <p>The name of the next challenge that you must respond to.</p>
   *          <p>Possible challenges include the following:</p>
   *          <note>
   *             <p>All of the following challenges require <code>USERNAME</code> and, when the app
   *                 client has a client secret, <code>SECRET_HASH</code> in the parameters.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WEB_AUTHN</code>: Respond to the challenge with the results of a
   *                     successful authentication with a WebAuthn authenticator, or passkey. Examples
   *                     of WebAuthn authenticators include biometric devices and security keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD</code>: Respond with <code>USER_PASSWORD_AUTH</code>
   *                     parameters: <code>USERNAME</code> (required), <code>PASSWORD</code> (required),
   *                         <code>SECRET_HASH</code> (required if the app client is configured with a
   *                     client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_SRP</code>: Respond with <code>USER_SRP_AUTH</code> parameters:
   *                         <code>USERNAME</code> (required), <code>SRP_A</code> (required),
   *                         <code>SECRET_HASH</code> (required if the app client is configured with a
   *                     client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SELECT_CHALLENGE</code>: Respond to the challenge with
   *                         <code>USERNAME</code> and an <code>ANSWER</code> that matches one of the
   *                     challenge types in the <code>AvailableChallenges</code> response
   *                     parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMS_MFA</code>: Respond with an
   *                     <code>SMS_MFA_CODE</code> that your user pool delivered in an SMS message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_OTP</code>: Respond with an
   *                         <code>EMAIL_OTP_CODE</code> that your user pool delivered in an email
   *                     message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_VERIFIER</code>: Respond with
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     client-side SRP calculations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued. The parameters of the challenge are determined by your Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_SRP_AUTH</code>: Respond with the initial parameters of device SRP
   *                 authentication. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Respond with
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     client-side SRP calculations. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login. Respond to this challenge with
   *                     <code>NEW_PASSWORD</code> and any required attributes that Amazon Cognito returned in
   *                     the <code>requiredAttributes</code> parameter. You can also set values for
   *                     attributes that aren't required by your user pool and that your app client
   *                     can write.</p>
   *                <p>Amazon Cognito only returns this challenge for users who have temporary passwords.
   *                     When you create passwordless users, you must provide values for all required
   *                     attributes.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>AdminRespondToAuthChallenge</code> or <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the
   * <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> or <code>UpdateUserAttributes</code> API
   * operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_SETUP</code>: For users who are required to setup an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFAS_CAN_SETUP</code> value. </p>
   *                <p>To set up time-based one-time password (TOTP) MFA, use the session returned
   *                     in this challenge from <code>InitiateAuth</code> or <code>AdminInitiateAuth</code>
   *                     as an input to <code>AssociateSoftwareToken</code>. Then, use the session returned
   *                     by <code>VerifySoftwareToken</code> as an input to
   *                     <code>RespondToAuthChallenge</code> or <code>AdminRespondToAuthChallenge</code>
   *                 with challenge name <code>MFA_SETUP</code> to complete sign-in.
   *                 </p>
   *                <p>To set up SMS or email MFA, collect a <code>phone_number</code> or
   *                     <code>email</code> attribute for the user. Then restart the authentication
   *                     flow with an <code>InitiateAuth</code> or <code>AdminInitiateAuth</code> request.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * <p>The session identifier that maintains the state of authentication requests and
   *             challenge responses. If an <code>InitiateAuth</code> or
   *                 <code>RespondToAuthChallenge</code> API request results in a determination that your
   *             application must pass another challenge, Amazon Cognito returns a session with other challenge
   *             parameters. Send this session identifier, unmodified, to the next
   *                 <code>RespondToAuthChallenge</code> request.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The parameters that define your response to the next challenge.</p>
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * <p>The outcome of a successful authentication process. After your application has passed
   *             all challenges, Amazon Cognito returns an <code>AuthenticationResult</code> with the JSON web
   *             tokens (JWTs) that indicate successful sign-in.</p>
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;
}

/**
 * @public
 */
export interface RevokeTokenRequest {
  /**
   * <p>The refresh token that you want to revoke.</p>
   * @public
   */
  Token: string | undefined;

  /**
   * <p>The ID of the app client where the token that you want to revoke was issued.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The client secret of the requested app client, if the client has a secret.</p>
   * @public
   */
  ClientSecret?: string | undefined;
}

/**
 * @public
 */
export interface RevokeTokenResponse {}

/**
 * <p>Exception that is thrown when the request isn't authorized. This can happen due to an
 *             invalid access token in the request.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>Exception that is thrown when an unsupported token is passed to an operation.</p>
 * @public
 */
export class UnsupportedTokenTypeException extends __BaseException {
  readonly name: "UnsupportedTokenTypeException" = "UnsupportedTokenTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedTokenTypeException, __BaseException>) {
    super({
      name: "UnsupportedTokenTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedTokenTypeException.prototype);
  }
}

/**
 * @public
 */
export interface SetLogDeliveryConfigurationRequest {
  /**
   * <p>The ID of the user pool where you want to configure logging.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A collection of the logging configurations for a user pool.</p>
   * @public
   */
  LogConfigurations: LogConfigurationType[] | undefined;
}

/**
 * @public
 */
export interface SetLogDeliveryConfigurationResponse {
  /**
   * <p>The logging configuration that you applied to the requested user pool.</p>
   * @public
   */
  LogDeliveryConfiguration?: LogDeliveryConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetRiskConfigurationRequest {
  /**
   * <p>The ID of the user pool where you want to set a risk configuration. If you include
   *                 <code>UserPoolId</code> in your request, don't include <code>ClientId</code>.
   *             When the client ID is null, the same risk configuration is applied to all the clients in
   *             the userPool. When you include both <code>ClientId</code> and <code>UserPoolId</code>,
   *             Amazon Cognito maps the configuration to the app client only.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the app client where you want to set a risk configuration. If
   *                 <code>ClientId</code> is null, then the risk configuration is mapped to
   *                 <code>UserPoolId</code>. When the client ID is null, the same risk configuration is
   *             applied to all the clients in the userPool.</p>
   *          <p>When you include a <code>ClientId</code> parameter, Amazon Cognito maps the configuration to
   *             the app client. When you include both <code>ClientId</code> and <code>UserPoolId</code>,
   *             Amazon Cognito maps the configuration to the app client only.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The configuration of automated reactions to detected compromised credentials. Includes
   *             settings for blocking future sign-in requests and for the types of password-submission
   *             events you want to monitor.</p>
   * @public
   */
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType | undefined;

  /**
   * <p>The settings for automated responses and notification templates for adaptive
   *             authentication with threat protection.</p>
   * @public
   */
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType | undefined;

  /**
   * <p>A set of IP-address overrides to threat protection. You can set up IP-address
   *             always-block and always-allow lists.</p>
   * @public
   */
  RiskExceptionConfiguration?: RiskExceptionConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetRiskConfigurationResponse {
  /**
   * <p>The API response that contains the risk configuration that you set and the timestamp
   *             of the most recent change.</p>
   * @public
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetUICustomizationRequest {
  /**
   * <p>The ID of the user pool where you want to apply branding to the classic hosted
   *             UI.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the app client that you want to customize. To apply a default style to all
   *             app clients not configured with client-level branding, set this parameter value to
   *                 <code>ALL</code>.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>A plaintext CSS file that contains the custom fields that you want to apply to your
   *             user pool or app client. To download a template, go to the Amazon Cognito console. Navigate to
   *             your user pool <i>App clients</i> tab, select <i>Login
   *                 pages</i>, edit <i>Hosted UI (classic) style</i>, and select
   *             the link to <code>CSS template.css</code>.</p>
   * @public
   */
  CSS?: string | undefined;

  /**
   * <p>The image that you want to set as your login in the classic hosted UI, as a
   *             Base64-formatted binary object.</p>
   * @public
   */
  ImageFile?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SetUICustomizationResponse {
  /**
   * <p>Information about the hosted UI branding that you applied.</p>
   * @public
   */
  UICustomization: UICustomizationType | undefined;
}

/**
 * @public
 */
export interface SetUserMFAPreferenceRequest {
  /**
   * <p>User preferences for SMS message MFA. Activates or deactivates SMS MFA and sets it as
   *             the preferred MFA method when multiple methods are available.</p>
   * @public
   */
  SMSMfaSettings?: SMSMfaSettingsType | undefined;

  /**
   * <p>User preferences for time-based one-time password (TOTP) MFA. Activates or deactivates
   *             TOTP MFA and sets it as the preferred MFA method when multiple methods are available.
   *             Users must register a TOTP authenticator before they set this as their preferred MFA
   *             method.</p>
   * @public
   */
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType | undefined;

  /**
   * <p>User preferences for email message MFA. Activates or deactivates email MFA and sets it
   *             as the preferred MFA method when multiple methods are available.
   *             To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
   *                      Essentials tier</a> or higher.</p>
   * @public
   */
  EmailMfaSettings?: EmailMfaSettingsType | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * @public
 */
export interface SetUserMFAPreferenceResponse {}

/**
 * @public
 */
export interface SetUserPoolMfaConfigRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>Configures user pool SMS messages for MFA. Sets the message template and the SMS
   *             message sending configuration for Amazon SNS.</p>
   * @public
   */
  SmsMfaConfiguration?: SmsMfaConfigType | undefined;

  /**
   * <p>Configures a user pool for time-based one-time password (TOTP) MFA. Enables or
   *             disables TOTP.</p>
   * @public
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType | undefined;

  /**
   * <p>Sets configuration for user pool email message MFA and sign-in with one-time passwords
   *             (OTPs). Includes the subject and body of the email message template for sign-in and MFA
   *             messages. To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
   *                      Essentials tier</a> or higher.</p>
   * @public
   */
  EmailMfaConfiguration?: EmailMfaConfigType | undefined;

  /**
   * <p>Sets multi-factor authentication (MFA) to be on, off, or optional. When
   *                 <code>ON</code>, all users must set up MFA before they can sign in. When
   *                 <code>OPTIONAL</code>, your application must make a client-side determination of
   *             whether a user wants to register an MFA device. For user pools with adaptive
   *             authentication with threat protection, choose <code>OPTIONAL</code>.</p>
   *          <p>When <code>MfaConfiguration</code> is <code>OPTIONAL</code>, managed login
   *             doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in
   *             API responses and in managed login for users who have chosen and configured a preferred
   *             MFA factor.</p>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * <p>The configuration of your user pool for passkey, or WebAuthn, authentication and
   *             registration. You can set this configuration independent of the MFA configuration
   *             options in this operation.</p>
   * @public
   */
  WebAuthnConfiguration?: WebAuthnConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetUserPoolMfaConfigResponse {
  /**
   * <p>Shows user pool SMS message configuration for MFA and sign-in with SMS-message OTPs.
   *             Includes the message template and the SMS message sending configuration for
   *             Amazon SNS.</p>
   * @public
   */
  SmsMfaConfiguration?: SmsMfaConfigType | undefined;

  /**
   * <p>Shows user pool configuration for time-based one-time password (TOTP) MFA. Includes
   *             TOTP enabled or disabled state.</p>
   * @public
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType | undefined;

  /**
   * <p>Shows configuration for user pool email message MFA and sign-in with one-time
   *             passwords (OTPs). Includes the subject and body of the email message template for
   *             sign-in and MFA messages. To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
   *                      Essentials tier</a> or higher.</p>
   * @public
   */
  EmailMfaConfiguration?: EmailMfaConfigType | undefined;

  /**
   * <p>Displays multi-factor authentication (MFA) as on, off, or optional. When
   *                 <code>ON</code>, all users must set up MFA before they can sign in. When
   *                 <code>OPTIONAL</code>, your application must make a client-side determination of
   *             whether a user wants to register an MFA device. For user pools with adaptive
   *             authentication with threat protection, choose <code>OPTIONAL</code>.</p>
   *          <p>When <code>MfaConfiguration</code> is <code>OPTIONAL</code>, managed login
   *             doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in
   *             API responses and in managed login for users who have chosen and configured a preferred
   *             MFA factor.</p>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * <p>The configuration of your user pool for passkey, or WebAuthn, sign-in with
   *             authenticators like biometric and security-key devices. Includes relying-party
   *             configuration and settings for user-verification requirements.</p>
   * @public
   */
  WebAuthnConfiguration?: WebAuthnConfigurationType | undefined;
}

/**
 * <p>Represents the request to set user settings.</p>
 * @public
 */
export interface SetUserSettingsRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>You can use this parameter only to set an SMS configuration that uses SMS for
   *             delivery.</p>
   * @public
   */
  MFAOptions: MFAOptionType[] | undefined;
}

/**
 * <p>The response from the server for a set user settings request.</p>
 * @public
 */
export interface SetUserSettingsResponse {}

/**
 * <p>Represents the request to register a user.</p>
 * @public
 */
export interface SignUpRequest {
  /**
   * <p>The ID of the app client where the user wants to sign up.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message. For more information
   *             about <code>SecretHash</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>.</p>
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * <p>The username of the user that you want to sign up. The value of this parameter is
   *             typically a username, but can be any alias attribute in your user pool.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The user's proposed password. The password must comply with the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/managing-users-passwords.html">password requirements</a> of your user pool.</p>
   *          <p>Users can sign up without a password when your user pool supports passwordless sign-in
   *             with email or SMS OTPs. To create a user with no password, omit this parameter or submit
   *             a blank value. You can only create a passwordless user when passwordless sign-in is
   *             available.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *          <p>For custom attributes, include a <code>custom:</code> prefix in the attribute name,
   *             for example <code>custom:department</code>.</p>
   * @public
   */
  UserAttributes?: AttributeType[] | undefined;

  /**
   * <p>Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda
   *     trigger. This set of key-value pairs are for custom validation of information that you
   *     collect from your users but don't need to retain.</p>
   *          <p>Your Lambda function can analyze this additional data and act on it. Your function
   *     can automatically confirm and verify select users or perform external API operations
   *     like logging user attributes and validation data to Amazon CloudWatch Logs.</p>
   *          <p>For more information about the pre sign-up Lambda trigger, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html">Pre sign-up Lambda trigger</a>.</p>
   * @public
   */
  ValidationData?: AttributeType[] | undefined;

  /**
   * <p>Information that supports analytics outcomes with Amazon Pinpoint, including the
   * user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier,
   * email address, or phone number.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat
   * protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html">Collecting data for threat protection in
   * applications</a>.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the SignUp API action, Amazon Cognito invokes any functions that are assigned to the
   *             following triggers: <i>pre sign-up</i>, <i>custom
   *                 message</i>, and <i>post confirmation</i>. When Amazon Cognito invokes
   *             any of these functions, it passes a JSON payload, which the function receives as input.
   *             This payload contains a <code>clientMetadata</code> attribute, which provides the data
   *             that you assigned to the ClientMetadata parameter in your SignUp request. In your
   *             function code in Lambda, you can process the <code>clientMetadata</code> value to enhance
   *             your workflow for your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>The response from the server for a registration request.</p>
 * @public
 */
export interface SignUpResponse {
  /**
   * <p>Indicates whether the user was automatically confirmed. You can auto-confirm users
   *             with a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html">pre sign-up Lambda trigger</a>.</p>
   * @public
   */
  UserConfirmed: boolean | undefined;

  /**
   * <p>In user pools that automatically verify and confirm new users, Amazon Cognito sends users a
   *             message with a code or link that confirms ownership of the phone number or email address
   *             that they entered. The <code>CodeDeliveryDetails</code> object is information about the
   *             delivery destination for that link or code.</p>
   * @public
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType | undefined;

  /**
   * <p>The unique identifier of the new user, for example
   *                 <code>a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>.</p>
   * @public
   */
  UserSub: string | undefined;

  /**
   * <p>A session Id that you can pass to <code>ConfirmSignUp</code> when you want to
   *             immediately sign in your user with the <code>USER_AUTH</code> flow after they complete
   *             sign-up.</p>
   * @public
   */
  Session?: string | undefined;
}

/**
 * <p>Represents the request to start the user import job.</p>
 * @public
 */
export interface StartUserImportJobRequest {
  /**
   * <p>The ID of the user pool that you want to start importing users into.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of a user import job that you previously created.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to start the user import
 *             job.</p>
 * @public
 */
export interface StartUserImportJobResponse {
  /**
   * <p>The details of the user import job. Includes logging destination, status, and the Amazon S3
   *             pre-signed URL for CSV upload.</p>
   * @public
   */
  UserImportJob?: UserImportJobType | undefined;
}

/**
 * @public
 */
export interface StartWebAuthnRegistrationRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * @public
 */
export interface StartWebAuthnRegistrationResponse {
  /**
   * <p>The information that a user can provide in their request to register with their
   *             passkey provider.</p>
   * @public
   */
  CredentialCreationOptions: __DocumentType | undefined;
}

/**
 * <p>This exception is thrown when a user pool doesn't have a configured relying party
 *             id or a user pool domain.</p>
 * @public
 */
export class WebAuthnConfigurationMissingException extends __BaseException {
  readonly name: "WebAuthnConfigurationMissingException" = "WebAuthnConfigurationMissingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnConfigurationMissingException, __BaseException>) {
    super({
      name: "WebAuthnConfigurationMissingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnConfigurationMissingException.prototype);
  }
}

/**
 * <p>Represents the request to stop the user import job.</p>
 * @public
 */
export interface StopUserImportJobRequest {
  /**
   * <p>The ID of the user pool that you want to stop.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of a running user import job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to stop the user import
 *             job.</p>
 * @public
 */
export interface StopUserImportJobResponse {
  /**
   * <p>The details of the user import job. Includes logging destination, status, and the Amazon S3
   *             pre-signed URL for CSV upload.</p>
   * @public
   */
  UserImportJob?: UserImportJobType | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user pool to assign the tags to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of tag keys and values that you want to assign to the user pool.</p>
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
   * <p>The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of tag keys that you want to remove from the user pool.</p>
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
   * <p>The ID of the user pool where you want to update auth event feedback.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The ID of the authentication event that you want to submit feedback for.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>The feedback token, an encrypted object generated by Amazon Cognito and passed to your user in
   *             the notification email message from the event.</p>
   * @public
   */
  FeedbackToken: string | undefined;

  /**
   * <p>Your feedback to the authentication event. When you provide a <code>FeedbackValue</code>
   * value of <code>valid</code>, you tell Amazon Cognito that you trust a user session where Amazon Cognito
   * has evaluated some level of risk. When you provide a <code>FeedbackValue</code> value of
   * <code>invalid</code>, you tell Amazon Cognito that you don't trust a user session, or you
   * don't believe that Amazon Cognito evaluated a high-enough risk level.</p>
   * @public
   */
  FeedbackValue: FeedbackValueType | undefined;
}

/**
 * @public
 */
export interface UpdateAuthEventFeedbackResponse {}

/**
 * <p>Represents the request to update the device status.</p>
 * @public
 */
export interface UpdateDeviceStatusRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The device key of the device you want to update, for example
   *                 <code>us-west-2_a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>.</p>
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * <p>To enable device authentication with the specified device, set to
   *                 <code>remembered</code>.To disable, set to <code>not_remembered</code>.</p>
   * @public
   */
  DeviceRememberedStatus?: DeviceRememberedStatusType | undefined;
}

/**
 * <p>The response to the request to update the device status.</p>
 * @public
 */
export interface UpdateDeviceStatusResponse {}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * <p>The name of the group that you want to update.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID of the user pool that contains the group you want to update.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A new description of the existing group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that you want to associate with the
   *             group. The role assignment contributes to the <code>cognito:roles</code> and
   *                 <code>cognito:preferred_role</code> claims in group members' tokens.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A non-negative integer value that specifies the precedence of this group relative to
   *             the other groups that a user can belong to in the user pool. Zero is the highest
   *             precedence value. Groups with lower <code>Precedence</code> values take precedence over
   *             groups with higher or null <code>Precedence</code> values. If a user belongs to two or
   *             more groups, it is the group with the lowest precedence value whose role ARN is given in
   *             the user's tokens for the <code>cognito:roles</code> and
   *                 <code>cognito:preferred_role</code> claims.</p>
   *          <p>Two groups can have the same <code>Precedence</code> value. If this happens, neither
   *             group takes precedence over the other. If two groups with the same
   *                 <code>Precedence</code> have the same role ARN, that role is used in the
   *                 <code>cognito:preferred_role</code> claim in tokens for users in each group. If the
   *             two groups have different role ARNs, the <code>cognito:preferred_role</code> claim isn't
   *             set in users' tokens.</p>
   *          <p>The default <code>Precedence</code> value is null. The maximum <code>Precedence</code>
   *             value is <code>2^31-1</code>.</p>
   * @public
   */
  Precedence?: number | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResponse {
  /**
   * <p>Contains the updated details of the group, including precedence, IAM role, and
   *             description.</p>
   * @public
   */
  Group?: GroupType | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderRequest {
  /**
   * <p>The Id of the user pool where you want to update your IdP.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the IdP that you want to update. You can pass the identity provider name
   *             in the <code>identity_provider</code> query parameter of requests to the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html">Authorize endpoint</a> to silently redirect to sign-in with the associated
   *             IdP.</p>
   * @public
   */
  ProviderName: string | undefined;

  /**
   * <p>The scopes, URLs, and identifiers for your external identity provider. The following
   * examples describe the provider detail keys for each IdP type. These values and their
   * schema are subject to change. Social IdP <code>authorize_scopes</code> values must match
   * the values listed here.</p>
   *          <dl>
   *             <dt>OpenID Connect (OIDC)</dt>
   *             <dd>
   *                <p>Amazon Cognito accepts the following elements when it can't discover endpoint
   *                 URLs from <code>oidc_issuer</code>: <code>attributes_url</code>,
   *                     <code>authorize_url</code>, <code>jwks_uri</code>,
   *                     <code>token_url</code>.</p>
   *                <p>Create or update request: <code>"ProviderDetails": \{
   *                     "attributes_request_method": "GET", "attributes_url":
   *                     "https://auth.example.com/userInfo", "authorize_scopes": "openid profile
   *                     email", "authorize_url": "https://auth.example.com/authorize",
   *                     "client_id": "1example23456789", "client_secret":
   *                     "provider-app-client-secret", "jwks_uri":
   *                     "https://auth.example.com/.well-known/jwks.json", "oidc_issuer":
   *                     "https://auth.example.com", "token_url": "https://example.com/token"
   *                     \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_request_method":
   *                     "GET", "attributes_url": "https://auth.example.com/userInfo",
   *                     "attributes_url_add_attributes": "false", "authorize_scopes": "openid
   *                     profile email", "authorize_url": "https://auth.example.com/authorize",
   *                     "client_id": "1example23456789", "client_secret":
   *                     "provider-app-client-secret", "jwks_uri":
   *                     "https://auth.example.com/.well-known/jwks.json", "oidc_issuer":
   *                     "https://auth.example.com", "token_url": "https://example.com/token"
   *                     \}</code>
   *                </p>
   *             </dd>
   *             <dt>SAML</dt>
   *             <dd>
   *                <p>Create or update request with Metadata URL: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL":
   *                     "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm":
   *                     "rsa-sha256" \}</code>
   *                </p>
   *                <p>Create or update request with Metadata file: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true",
   *                     "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm":
   *                     "rsa-sha256" \}</code>
   *                </p>
   *                <p>The value of <code>MetadataFile</code> must be the plaintext metadata document with all
   *                 quote (") characters escaped by backslashes.</p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]",
   *                     "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm":
   *                     "rsa-sha256", "SLORedirectBindingURI":
   *                     "https://auth.example.com/slo/saml", "SSORedirectBindingURI":
   *                     "https://auth.example.com/sso/saml" \}</code>
   *                </p>
   *             </dd>
   *             <dt>LoginWithAmazon</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "profile postal_code", "client_id":
   *                     "amzn1.application-oa2-client.1example23456789", "client_secret":
   *                     "provider-app-client-secret"</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_url":
   *                     "https://api.amazon.com/user/profile", "attributes_url_add_attributes":
   *                     "false", "authorize_scopes": "profile postal_code", "authorize_url":
   *                     "https://www.amazon.com/ap/oa", "client_id":
   *                     "amzn1.application-oa2-client.1example23456789", "client_secret":
   *                     "provider-app-client-secret", "token_request_method": "POST",
   *                     "token_url": "https://api.amazon.com/auth/o2/token" \}</code>
   *                </p>
   *             </dd>
   *             <dt>Google</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "email profile openid", "client_id":
   *                     "1example23456789.apps.googleusercontent.com", "client_secret":
   *                     "provider-app-client-secret" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_url":
   *                     "https://people.googleapis.com/v1/people/me?personFields=",
   *                     "attributes_url_add_attributes": "true", "authorize_scopes": "email
   *                     profile openid", "authorize_url":
   *                     "https://accounts.google.com/o/oauth2/v2/auth", "client_id":
   *                     "1example23456789.apps.googleusercontent.com", "client_secret":
   *                     "provider-app-client-secret", "oidc_issuer":
   *                     "https://accounts.google.com", "token_request_method": "POST",
   *                     "token_url": "https://www.googleapis.com/oauth2/v4/token"
   *                 \}</code>
   *                </p>
   *             </dd>
   *             <dt>SignInWithApple</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE",
   *                     "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{
   *                     "attributes_url_add_attributes": "false", "authorize_scopes": "email
   *                     name", "authorize_url": "https://appleid.apple.com/auth/authorize",
   *                     "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer":
   *                     "https://appleid.apple.com", "team_id": "2EXAMPLE",
   *                     "token_request_method": "POST", "token_url":
   *                     "https://appleid.apple.com/auth/token" \}</code>
   *                </p>
   *             </dd>
   *             <dt>Facebook</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "api_version": "v17.0",
   *             "authorize_scopes": "public_profile, email", "client_id": "1example23456789",
   *             "client_secret": "provider-app-client-secret" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails":
   *             \{ "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=",
   *             "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email",
   *             "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id":
   *             "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method":
   *             "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" \}</code>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  ProviderDetails?: Record<string, string> | undefined;

  /**
   * <p>A mapping of IdP attributes to standard and custom user pool attributes. Specify a
   *             user pool attribute as the key of the key-value pair, and the IdP attribute claim name
   *             as the value.</p>
   * @public
   */
  AttributeMapping?: Record<string, string> | undefined;

  /**
   * <p>An array of IdP identifiers, for example <code>"IdPIdentifiers": [ "MyIdP", "MyIdP2"
   *                 ]</code>. Identifiers are friendly names that you can pass in the
   *                 <code>idp_identifier</code> query parameter of requests to the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html">Authorize endpoint</a> to silently redirect to sign-in with the associated IdP.
   *             Identifiers in a domain format also enable the use of <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managing-saml-idp-naming.html">email-address matching with SAML providers</a>. </p>
   * @public
   */
  IdpIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderResponse {
  /**
   * <p>The identity provider details.</p>
   * @public
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface UpdateManagedLoginBrandingRequest {
  /**
   * <p>The ID of the user pool that contains the managed login branding style that you want
   *             to update.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The ID of the managed login branding style that you want to update.</p>
   * @public
   */
  ManagedLoginBrandingId?: string | undefined;

  /**
   * <p>When <code>true</code>, applies the default branding style options. This option
   *             reverts to default style options that are managed by Amazon Cognito. You can modify them later in
   *             the branding designer.</p>
   *          <p>When you specify <code>true</code> for this option, you must also omit values for
   *                 <code>Settings</code> and <code>Assets</code> in the request.</p>
   * @public
   */
  UseCognitoProvidedValues?: boolean | undefined;

  /**
   * <p>A JSON file, encoded as a <code>Document</code> type, with the the settings that you
   *             want to apply to your style.</p>
   * @public
   */
  Settings?: __DocumentType | undefined;

  /**
   * <p>An array of image files that you want to apply to roles like backgrounds, logos, and
   *             icons. Each object must also indicate whether it is for dark mode, light mode, or
   *             browser-adaptive mode.</p>
   * @public
   */
  Assets?: AssetType[] | undefined;
}

/**
 * @public
 */
export interface UpdateManagedLoginBrandingResponse {
  /**
   * <p>The details of the branding style that you updated.</p>
   * @public
   */
  ManagedLoginBranding?: ManagedLoginBrandingType | undefined;
}

/**
 * @public
 */
export interface UpdateResourceServerRequest {
  /**
   * <p>The ID of the user pool that contains the resource server that you want to
   *             update.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A unique resource server identifier for the resource server. The identifier can be an
   *             API friendly name like <code>solar-system-data</code>. You can also set an API URL like
   *                 <code>https://solar-system-data-api.example.com</code> as your identifier.</p>
   *          <p>Amazon Cognito represents scopes in the access token in the format
   *                 <code>$resource-server-identifier/$scope</code>. Longer scope-identifier strings
   *             increase the size of your access tokens.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The updated name of the resource server.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An array of updated custom scope names and descriptions that you want to associate
   *             with your resource server.</p>
   * @public
   */
  Scopes?: ResourceServerScopeType[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceServerResponse {
  /**
   * <p>The updated details of the requested resource server.</p>
   * @public
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * <p>Represents the request to update user attributes.</p>
 * @public
 */
export interface UpdateUserAttributesRequest {
  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *          <p>For custom attributes, you must add a <code>custom:</code> prefix to the attribute
   *             name.</p>
   *          <p>If you have set an attribute to require verification before Amazon Cognito updates its value,
   *             this request doesn’t immediately update the value of that attribute. After your user
   *             receives and responds to a verification message to verify the new value, Amazon Cognito updates
   *             the attribute value. Your user can sign in and receive messages with the original
   *             attribute value until they verify the new value.</p>
   * @public
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action initiates. </p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers. When
   *             you use the UpdateUserAttributes API action, Amazon Cognito invokes the function that is assigned
   *             to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it
   *             passes a JSON payload, which the function receives as input. This payload contains a
   *                 <code>clientMetadata</code> attribute, which provides the data that you assigned to
   *             the ClientMetadata parameter in your UpdateUserAttributes request. In your function code
   *             in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow
   *             for your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>Represents the response from the server for the request to update user
 *             attributes.</p>
 * @public
 */
export interface UpdateUserAttributesResponse {
  /**
   * <p>When the attribute-update request includes an email address or phone number attribute,
   *             Amazon Cognito sends a message to users with a code that confirms ownership of the new value that
   *             they entered. The <code>CodeDeliveryDetails</code> object is information about the
   *             delivery destination for that link or code. This behavior happens in user pools
   *             configured to automatically verify changes to those attributes. For more information,
   *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#verifying-when-users-change-their-email-or-phone-number">Verifying when users change their email or phone
   *             number</a>.</p>
   * @public
   */
  CodeDeliveryDetailsList?: CodeDeliveryDetailsType[] | undefined;
}

/**
 * <p>Represents the request to update the user pool.</p>
 * @public
 */
export interface UpdateUserPoolRequest {
  /**
   * <p>The ID of the user pool you want to update.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The password policy and sign-in policy in the user pool. The password policy sets
   *             options like password complexity requirements and password history. The sign-in policy
   *             sets the options available to applications in <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice">choice-based authentication</a>.</p>
   * @public
   */
  Policies?: UserPoolPolicyType | undefined;

  /**
   * <p>When active, <code>DeletionProtection</code> prevents accidental deletion of your user
   * pool. Before you can delete a user pool that you have protected against deletion, you
   * must deactivate this feature.</p>
   *          <p>When you try to delete a protected user pool in a <code>DeleteUserPool</code> API request,
   * Amazon Cognito returns an <code>InvalidParameterException</code> error. To delete a protected user pool,
   * send a new <code>DeleteUserPool</code> request after you deactivate deletion protection in an
   * <code>UpdateUserPool</code> API request.</p>
   * @public
   */
  DeletionProtection?: DeletionProtectionType | undefined;

  /**
   * <p>A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible
   *             stages of authentication operations. Triggers can modify the outcome of the operations
   *             that invoked them.</p>
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * <p>The attributes that you want your user pool to automatically verify. Possible values:
   *                 <b>email</b>, <b>phone_number</b>. For more information see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#allowing-users-to-sign-up-and-confirm-themselves">Verifying contact information at sign-up</a>.</p>
   * @public
   */
  AutoVerifiedAttributes?: VerifiedAttributeType[] | undefined;

  /**
   * <p>This parameter is no longer used.</p>
   * @public
   */
  SmsVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used.</p>
   * @public
   */
  EmailVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used.</p>
   * @public
   */
  EmailVerificationSubject?: string | undefined;

  /**
   * <p>The template for the verification message that your user pool delivers to users who
   *             set an email address or phone number attribute.</p>
   *          <p>Set the email message type that corresponds to your <code>DefaultEmailOption</code>
   *             selection. For <code>CONFIRM_WITH_LINK</code>, specify an
   *                 <code>EmailMessageByLink</code> and leave <code>EmailMessage</code> blank. For
   *                 <code>CONFIRM_WITH_CODE</code>, specify an <code>EmailMessage</code> and leave
   *                 <code>EmailMessageByLink</code> blank. When you supply both parameters with either
   *             choice, Amazon Cognito returns an error.</p>
   * @public
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType | undefined;

  /**
   * <p>The contents of the SMS message that your user pool sends to users in SMS
   *             authentication.</p>
   * @public
   */
  SmsAuthenticationMessage?: string | undefined;

  /**
   * <p>The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>,
   * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
   * more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates">
   * Verifying updates to email addresses and phone numbers</a>.</p>
   * @public
   */
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType | undefined;

  /**
   * <p>Sets multi-factor authentication (MFA) to be on, off, or optional. When
   *                 <code>ON</code>, all users must set up MFA before they can sign in. When
   *                 <code>OPTIONAL</code>, your application must make a client-side determination of
   *             whether a user wants to register an MFA device. For user pools with adaptive
   *             authentication with threat protection, choose <code>OPTIONAL</code>.</p>
   *          <p>When <code>MfaConfiguration</code> is <code>OPTIONAL</code>, managed login
   *             doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in
   *             API responses and in managed login for users who have chosen and configured a preferred
   *             MFA factor.</p>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * <p>The device-remembering configuration for a user pool. Device remembering or device
   *             tracking is a "Remember me on this device" option for user pools that perform
   *             authentication with the device key of a trusted device in the back end, instead of a
   *             user-provided MFA code. For more information about device authentication, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>. A null value indicates that
   *             you have deactivated device remembering in your user pool.</p>
   *          <note>
   *             <p>When you provide a value for any <code>DeviceConfiguration</code> field, you
   *                 activate the Amazon Cognito device-remembering feature. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with devices</a>.</p>
   *          </note>
   * @public
   */
  DeviceConfiguration?: DeviceConfigurationType | undefined;

  /**
   * <p>The email configuration of your user pool. The email configuration type sets your
   *             preferred sending method, Amazon Web Services Region, and sender for email invitation and verification
   *             messages from your user pool.</p>
   * @public
   */
  EmailConfiguration?: EmailConfigurationType | undefined;

  /**
   * <p>The SMS configuration with the settings for your Amazon Cognito user pool to send SMS message
   *             with Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the
   *             Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account. For
   *             more information see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html">SMS message settings</a>.</p>
   * @public
   */
  SmsConfiguration?: SmsConfigurationType | undefined;

  /**
   * <p>The tag keys and values to assign to the user pool. A tag is a label that you can use
   *             to categorize and manage user pools in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   * @public
   */
  UserPoolTags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for administrative creation of users. Includes the template for the
   *             invitation message for new users, the duration of temporary passwords, and permitting
   *             self-service sign-up.</p>
   * @public
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType | undefined;

  /**
   * <p>Contains settings for activation of threat protection, including the operating
   * mode and additional authentication types. To log user security information but take
   * no action, set to <code>AUDIT</code>. To configure automatic security responses to
   * potentially unwanted traffic to your user pool, set to <code>ENFORCED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>. To activate this setting, your user pool must be on the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html">
   *                      Plus tier</a>.</p>
   * @public
   */
  UserPoolAddOns?: UserPoolAddOnsType | undefined;

  /**
   * <p>The available verified method a user can use to recover their password when they call
   *                 <code>ForgotPassword</code>. You can use this setting to define a preferred method
   *             when a user has more than one method available. With this setting, SMS doesn't qualify
   *             for a valid password recovery mechanism if the user also has SMS multi-factor
   *             authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy
   *             behavior to determine the recovery method where SMS is preferred through email.</p>
   * @public
   */
  AccountRecoverySetting?: AccountRecoverySettingType | undefined;

  /**
   * <p>The updated name of your user pool.</p>
   * @public
   */
  PoolName?: string | undefined;

  /**
   * <p>The user pool <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html">feature plan</a>, or tier. This parameter determines the
   *             eligibility of the user pool for features like managed login, access-token
   *             customization, and threat protection. Defaults to <code>ESSENTIALS</code>.</p>
   * @public
   */
  UserPoolTier?: UserPoolTierType | undefined;
}

/**
 * <p>Represents the response from the server when you make a request to update the user
 *             pool.</p>
 * @public
 */
export interface UpdateUserPoolResponse {}

/**
 * <p>Represents the request to update the user pool client.</p>
 * @public
 */
export interface UpdateUserPoolClientRequest {
  /**
   * <p>The ID of the user pool where you want to update the app client.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the app client that you want to update.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>A friendly name for the app client.</p>
   * @public
   */
  ClientName?: string | undefined;

  /**
   * <p>The refresh token time limit. After this limit expires, your user can't use
   * their refresh token. To specify the time unit for <code>RefreshTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>RefreshTokenValidity</code> as <code>10</code> and
   * <code>TokenValidityUnits</code> as <code>days</code>, your user can refresh their session
   * and retrieve new access and ID tokens for 10 days.</p>
   *          <p>The default time unit for <code>RefreshTokenValidity</code> in an API request is days.
   * You can't set <code>RefreshTokenValidity</code> to 0. If you do, Amazon Cognito overrides the
   * value with the default value of 30 days. <i>Valid range</i> is displayed below
   * in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your refresh
   * tokens are valid for 30 days.</p>
   * @public
   */
  RefreshTokenValidity?: number | undefined;

  /**
   * <p>The access token time limit. After this limit expires, your user can't use
   * their access token. To specify the time unit for <code>AccessTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>AccessTokenValidity</code> to <code>10</code> and
   * <code>TokenValidityUnits</code> to <code>hours</code>, your user can authorize access with
   * their access token for 10 hours.</p>
   *          <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours.
   * <i>Valid range</i> is displayed below in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your access
   * tokens are valid for one hour.</p>
   * @public
   */
  AccessTokenValidity?: number | undefined;

  /**
   * <p>The ID token time limit. After this limit expires, your user can't use
   * their ID token. To specify the time unit for <code>IdTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>IdTokenValidity</code> as <code>10</code> and
   * <code>TokenValidityUnits</code> as <code>hours</code>, your user can authenticate their
   * session with their ID token for 10 hours.</p>
   *          <p>The default time unit for <code>IdTokenValidity</code> in an API request is hours.
   * <i>Valid range</i> is displayed below in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your ID
   * tokens are valid for one hour.</p>
   * @public
   */
  IdTokenValidity?: number | undefined;

  /**
   * <p>The units that validity times are represented in. The default unit for refresh tokens
   *             is days, and the default for ID and access tokens are hours.</p>
   * @public
   */
  TokenValidityUnits?: TokenValidityUnitsType | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have read access to.
   *     After your user authenticates in your app, their access token authorizes them to read
   *     their own attribute value for any attribute in this list.</p>
   *          <p>When you don't specify the <code>ReadAttributes</code> for your app client, your
   *     app can read the values of <code>email_verified</code>,
   *     <code>phone_number_verified</code>, and the standard attributes of your user pool.
   *     When your user pool app client has read access to these default attributes,
   *     <code>ReadAttributes</code> doesn't return any information. Amazon Cognito only
   *     populates <code>ReadAttributes</code> in the API response if you have specified your own
   *     custom set of read attributes.</p>
   * @public
   */
  ReadAttributes?: string[] | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have write access to.
   *     After your user authenticates in your app, their access token authorizes them to set or
   *     modify their own attribute value for any attribute in this list.</p>
   *          <p>When you don't specify the <code>WriteAttributes</code> for your app client, your
   *     app can write the values of the Standard attributes of your user pool. When your user
   *     pool has write access to these default attributes, <code>WriteAttributes</code>
   *     doesn't return any information. Amazon Cognito only populates
   *         <code>WriteAttributes</code> in the API response if you have specified your own
   *     custom set of write attributes.</p>
   *          <p>If your app client allows users to sign in through an IdP, this array must include all
   *     attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when
   *     users sign in to your application through an IdP. If your app client does not have write
   *     access to a mapped attribute, Amazon Cognito throws an error when it tries to update the
   *     attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying IdP Attribute Mappings for Your user
   *     pool</a>.</p>
   * @public
   */
  WriteAttributes?: string[] | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow-methods.html">authentication flows</a> that you want your user pool client to support. For each app
   * client in your user pool, you can sign in your users with any combination of one or more flows, including with
   * a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that
   * you define with Lambda functions.</p>
   *          <note>
   *             <p>If you don't specify a value for <code>ExplicitAuthFlows</code>, your app client supports
   * <code>ALLOW_REFRESH_TOKEN_AUTH</code>, <code>ALLOW_USER_SRP_AUTH</code>, and <code>ALLOW_CUSTOM_AUTH</code>.
   * </p>
   *          </note>
   *          <p>The values for authentication flow options include the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_AUTH</code>: Enable selection-based sign-in
   *             with <code>USER_AUTH</code>. This setting covers username-password,
   *             secure remote password (SRP), passwordless, and passkey authentication.
   *             This authentiation flow can do username-password and SRP authentication
   *             without other <code>ExplicitAuthFlows</code> permitting them. For example
   *             users can complete an SRP challenge through <code>USER_AUTH</code>
   *             without the flow <code>USER_SRP_AUTH</code> being active for the app
   *             client. This flow doesn't include <code>CUSTOM_AUTH</code>.
   *         </p>
   *                <p>To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
   *                      Essentials tier</a> or higher.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_ADMIN_USER_PASSWORD_AUTH</code>: Enable admin based user password
   *             authentication flow <code>ADMIN_USER_PASSWORD_AUTH</code>. This setting replaces
   *             the <code>ADMIN_NO_SRP_AUTH</code> setting. With this authentication flow, your app
   *             passes a user name and password to Amazon Cognito in the request, instead of using the Secure
   *             Remote Password (SRP) protocol to securely transmit the password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_CUSTOM_AUTH</code>: Enable Lambda trigger based
   *             authentication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_PASSWORD_AUTH</code>: Enable user password-based
   *             authentication. In this flow, Amazon Cognito receives the password in the request instead
   *             of using the SRP protocol to verify passwords.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_SRP_AUTH</code>: Enable SRP-based authentication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_REFRESH_TOKEN_AUTH</code>: Enable authflow to refresh
   *             tokens.</p>
   *             </li>
   *          </ul>
   *          <p>In some environments, you will see the values <code>ADMIN_NO_SRP_AUTH</code>, <code>CUSTOM_AUTH_FLOW_ONLY</code>, or <code>USER_PASSWORD_AUTH</code>.
   * You can't assign these legacy <code>ExplicitAuthFlows</code> values to user pool clients at the same time as values that begin with <code>ALLOW_</code>,
   * like <code>ALLOW_USER_SRP_AUTH</code>.</p>
   * @public
   */
  ExplicitAuthFlows?: ExplicitAuthFlowsType[] | undefined;

  /**
   * <p>A list of provider names for the identity providers (IdPs) that are supported on this
   *             client. The following are supported: <code>COGNITO</code>, <code>Facebook</code>,
   *             <code>Google</code>, <code>SignInWithApple</code>, and <code>LoginWithAmazon</code>.
   *             You can also specify the names that you configured for the SAML and OIDC IdPs in your
   *             user pool, for example <code>MySAMLIdP</code> or <code>MyOIDCIdP</code>.</p>
   *          <p>This parameter sets the IdPs that <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">managed
   *             login</a> will display on the login page for your app client. The removal of
   *             <code>COGNITO</code> from this list doesn't prevent authentication operations
   *             for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent
   *             SDK-based authentication is to block access with a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-waf.html">WAF rule</a>.
   *         </p>
   * @public
   */
  SupportedIdentityProviders?: string[] | undefined;

  /**
   * <p>A list of allowed redirect, or callback, URLs for managed login authentication. These
   *             URLs are the paths where you want to send your users' browsers after they complete
   *             authentication with managed login or a third-party IdP. Typically, callback URLs are the
   *             home of an application that uses OAuth or OIDC libraries to process authentication
   *             outcomes.</p>
   *          <p>A redirect URI must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                <p>Be registered with the authorization server. Amazon Cognito doesn't accept
   *                     authorization requests with <code>redirect_uri</code> values that aren't in
   *                     the list of <code>CallbackURLs</code> that you provide in this parameter.</p>
   *             </li>
   *             <li>
   *                <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *          <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *          <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *          <p>App callback URLs such as <code>myapp://example</code> are also supported.</p>
   * @public
   */
  CallbackURLs?: string[] | undefined;

  /**
   * <p>A list of allowed logout URLs for managed login authentication. When you pass
   *                 <code>logout_uri</code> and <code>client_id</code> parameters to
   *                 <code>/logout</code>, Amazon Cognito signs out your user and redirects them to the logout
   *             URL. This parameter describes the URLs that you want to be the permitted targets of
   *                 <code>logout_uri</code>. A typical use of these URLs is when a user selects "Sign
   *             out" and you redirect them to your public homepage. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/logout-endpoint.html">Logout
   *                 endpoint</a>.</p>
   * @public
   */
  LogoutURLs?: string[] | undefined;

  /**
   * <p>The default redirect URI. In app clients with one assigned IdP, replaces
   *                 <code>redirect_uri</code> in authentication requests. Must be in the
   *                 <code>CallbackURLs</code> list.</p>
   * @public
   */
  DefaultRedirectURI?: string | undefined;

  /**
   * <p>The OAuth grant types that you want your app client to generate. To create an app
   *             client that generates client credentials grants, you must add
   *                 <code>client_credentials</code> as the only allowed OAuth flow.</p>
   *          <dl>
   *             <dt>code</dt>
   *             <dd>
   *                <p>Use a code grant flow, which provides an authorization code as the
   *                         response. This code can be exchanged for access tokens with the
   *                             <code>/oauth2/token</code> endpoint.</p>
   *             </dd>
   *             <dt>implicit</dt>
   *             <dd>
   *                <p>Issue the access token (and, optionally, ID token, based on scopes)
   *                         directly to your user.</p>
   *             </dd>
   *             <dt>client_credentials</dt>
   *             <dd>
   *                <p>Issue the access token from the <code>/oauth2/token</code> endpoint
   *                         directly to a non-person user using a combination of the client ID and
   *                         client secret.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  AllowedOAuthFlows?: OAuthFlowType[] | undefined;

  /**
   * <p>The OAuth, OpenID Connect (OIDC), and custom scopes that you want to permit your app
   *             client to authorize access with. Scopes govern access control to user pool self-service
   *             API operations, user data from the <code>userInfo</code> endpoint, and third-party APIs.
   *             Scope values include <code>phone</code>, <code>email</code>, <code>openid</code>, and
   *                 <code>profile</code>. The <code>aws.cognito.signin.user.admin</code> scope
   *             authorizes user self-service operations. Custom scopes with resource servers authorize
   *             access to external APIs.</p>
   * @public
   */
  AllowedOAuthScopes?: string[] | undefined;

  /**
   * <p>Set to <code>true</code> to use OAuth 2.0 authorization server features in your app client.</p>
   *          <p>This parameter must have a value of <code>true</code> before you can configure
   * the following features in your app client.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CallBackURLs</code>: Callback URLs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LogoutURLs</code>: Sign-out redirect URLs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllowedOAuthScopes</code>: OAuth 2.0 scopes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllowedOAuthFlows</code>: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.</p>
   *             </li>
   *          </ul>
   *          <p>To use authorization server features, configure one of these features in the Amazon Cognito console or set
   * <code>AllowedOAuthFlowsUserPoolClient</code> to <code>true</code> in a <code>CreateUserPoolClient</code> or
   * <code>UpdateUserPoolClient</code> API request. If you don't set a value for
   * <code>AllowedOAuthFlowsUserPoolClient</code> in a request with the CLI or SDKs, it defaults
   * to <code>false</code>. When <code>false</code>, only SDK-based API sign-in is permitted.</p>
   * @public
   */
  AllowedOAuthFlowsUserPoolClient?: boolean | undefined;

  /**
   * <p>The user pool analytics configuration for collecting metrics and sending them to your
   *             Amazon Pinpoint campaign.</p>
   *          <p>In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools might not have access to
   *             analytics or might be configurable with campaigns in the US East (N. Virginia) Region.
   *             For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html">Using Amazon Pinpoint analytics</a>.</p>
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType | undefined;

  /**
   * <p>When <code>ENABLED</code>, suppresses messages that might indicate a valid user exists
   *             when someone attempts sign-in. This parameters sets your preference for the errors and
   *             responses that you want Amazon Cognito APIs to return during authentication, account
   *             confirmation, and password recovery when the user doesn't exist in the user pool. When
   *             set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error
   *             indicating either the username or password was incorrect. Account confirmation and
   *             password recovery return a response indicating a code was sent to a simulated
   *             destination. When set to <code>LEGACY</code>, those APIs return a
   *             <code>UserNotFoundException</code> exception if the user doesn't exist in the user
   *             pool.</p>
   *          <p>Defaults to <code>LEGACY</code>.</p>
   * @public
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | undefined;

  /**
   * <p>Activates or deactivates <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/token-revocation.html">token
   *                 revocation</a> in the target app client.</p>
   * @public
   */
  EnableTokenRevocation?: boolean | undefined;

  /**
   * <p>When <code>true</code>, your application can include additional
   *                 <code>UserContextData</code> in authentication requests. This data includes the IP
   *             address, and contributes to analysis by threat protection features. For more information
   *             about propagation of user context data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint">Adding session data to API requests</a>. If you don’t include this parameter,
   *             you can't send the source IP address to Amazon Cognito threat protection features. You can only
   *             activate <code>EnablePropagateAdditionalUserContextData</code> in an app client that has
   *             a client secret.</p>
   * @public
   */
  EnablePropagateAdditionalUserContextData?: boolean | undefined;

  /**
   * <p>Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration,
   * in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.</p>
   * @public
   */
  AuthSessionValidity?: number | undefined;

  /**
   * <p>The configuration of your app client for refresh token rotation. When enabled, your
   *             app client issues new ID, access, and refresh tokens when users renew their sessions
   *             with refresh tokens. When disabled, token refresh issues only ID and access
   *             tokens.</p>
   * @public
   */
  RefreshTokenRotation?: RefreshTokenRotationType | undefined;
}

/**
 * <p>Represents the response from the server to the request to update the user pool
 *             client.</p>
 * @public
 */
export interface UpdateUserPoolClientResponse {
  /**
   * <p>The updated details of your app client.</p>
   * @public
   */
  UserPoolClient?: UserPoolClientType | undefined;
}

/**
 * <p>The UpdateUserPoolDomain request input.</p>
 * @public
 */
export interface UpdateUserPoolDomainRequest {
  /**
   * <p>The name of the domain that you want to update. For custom domains, this is the
   *             fully-qualified domain name, for example <code>auth.example.com</code>. For prefix
   *             domains, this is the prefix alone, such as <code>myprefix</code>.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The ID of the user pool that is associated with the domain you're updating.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A version number that indicates the state of managed login for your domain. Version
   *             <code>1</code> is hosted UI (classic). Version <code>2</code> is the newer managed
   *             login with the branding designer. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">Managed login</a>.</p>
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * <p>The configuration for a custom domain that hosts managed login for your application.
   *             In an <code>UpdateUserPoolDomain</code> request, this parameter specifies an SSL
   *             certificate for the managed login hosted webserver. The certificate must be an ACM ARN
   *             in <code>us-east-1</code>.</p>
   *          <p>When you create a custom domain, the passkey RP ID defaults to the custom domain. If
   *             you had a prefix domain active, this will cause passkey integration for your prefix
   *             domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey
   *             integration working, you can explicitly set RP ID to the prefix domain.</p>
   * @public
   */
  CustomDomainConfig?: CustomDomainConfigType | undefined;
}

/**
 * <p>The UpdateUserPoolDomain response output.</p>
 * @public
 */
export interface UpdateUserPoolDomainResponse {
  /**
   * <p>A version number that indicates the state of managed login for your domain. Version
   *             <code>1</code> is hosted UI (classic). Version <code>2</code> is the newer managed
   *             login with the branding designer. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">Managed login</a>.</p>
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * <p>The fully-qualified domain name (FQDN) of the Amazon CloudFront distribution that hosts your
   *             managed login or classic hosted UI pages. You domain-name authority must have an alias
   *             record that points requests for your custom domain to this FQDN. Amazon Cognito returns this
   *             value if you set a custom domain with <code>CustomDomainConfig</code>. If you set an
   *             Amazon Cognito prefix domain, this operation returns a blank response.</p>
   * @public
   */
  CloudFrontDomain?: string | undefined;
}

/**
 * <p>This exception is thrown when there is a code mismatch and the service fails to
 *             configure the software token TOTP multi-factor authentication (MFA).</p>
 * @public
 */
export class EnableSoftwareTokenMFAException extends __BaseException {
  readonly name: "EnableSoftwareTokenMFAException" = "EnableSoftwareTokenMFAException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EnableSoftwareTokenMFAException, __BaseException>) {
    super({
      name: "EnableSoftwareTokenMFAException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EnableSoftwareTokenMFAException.prototype);
  }
}

/**
 * @public
 */
export interface VerifySoftwareTokenRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>The session ID from an <code>AssociateSoftwareToken</code> request.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>A TOTP that the user generated in their configured authenticator app.</p>
   * @public
   */
  UserCode: string | undefined;

  /**
   * <p>A friendly name for the device that's running the TOTP authenticator.</p>
   * @public
   */
  FriendlyDeviceName?: string | undefined;
}

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

/**
 * @public
 */
export interface VerifySoftwareTokenResponse {
  /**
   * <p>Amazon Cognito can accept or reject the code that you provide. This response parameter
   *             indicates the success of TOTP verification. Some reasons that this operation might
   *             return an error are clock skew on the user's device and excessive retries.</p>
   * @public
   */
  Status?: VerifySoftwareTokenResponseType | undefined;

  /**
   * <p>This session ID satisfies an <code>MFA_SETUP</code> challenge. Supply the session ID
   *             in your challenge response.</p>
   * @public
   */
  Session?: string | undefined;
}

/**
 * <p>Represents the request to verify user attributes.</p>
 * @public
 */
export interface VerifyUserAttributeRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The name of the attribute that you want to verify.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The verification code that your user pool sent to the added or changed attribute, for
   *             example the user's email address.</p>
   * @public
   */
  Code: string | undefined;
}

/**
 * <p>A container representing the response from the server from the request to verify user
 *             attributes.</p>
 * @public
 */
export interface VerifyUserAttributeResponse {}

/**
 * @internal
 */
export const GetUserAuthFactorsRequestFilterSensitiveLog = (obj: GetUserAuthFactorsRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetUserAuthFactorsResponseFilterSensitiveLog = (obj: GetUserAuthFactorsResponse): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GlobalSignOutRequestFilterSensitiveLog = (obj: GlobalSignOutRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InitiateAuthRequestFilterSensitiveLog = (obj: InitiateAuthRequest): any => ({
  ...obj,
  ...(obj.AuthParameters && { AuthParameters: SENSITIVE_STRING }),
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
  ...(obj.Session && { Session: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InitiateAuthResponseFilterSensitiveLog = (obj: InitiateAuthResponse): any => ({
  ...obj,
  ...(obj.Session && { Session: SENSITIVE_STRING }),
  ...(obj.AuthenticationResult && {
    AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
  }),
});

/**
 * @internal
 */
export const ListDevicesRequestFilterSensitiveLog = (obj: ListDevicesRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDevicesResponseFilterSensitiveLog = (obj: ListDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserPoolClientDescriptionFilterSensitiveLog = (obj: UserPoolClientDescription): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListUserPoolClientsResponseFilterSensitiveLog = (obj: ListUserPoolClientsResponse): any => ({
  ...obj,
  ...(obj.UserPoolClients && {
    UserPoolClients: obj.UserPoolClients.map((item) => UserPoolClientDescriptionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListUsersResponseFilterSensitiveLog = (obj: ListUsersResponse): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserTypeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListUsersInGroupResponseFilterSensitiveLog = (obj: ListUsersInGroupResponse): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserTypeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListWebAuthnCredentialsRequestFilterSensitiveLog = (obj: ListWebAuthnCredentialsRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResendConfirmationCodeRequestFilterSensitiveLog = (obj: ResendConfirmationCodeRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RespondToAuthChallengeRequestFilterSensitiveLog = (obj: RespondToAuthChallengeRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.Session && { Session: SENSITIVE_STRING }),
  ...(obj.ChallengeResponses && { ChallengeResponses: SENSITIVE_STRING }),
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RespondToAuthChallengeResponseFilterSensitiveLog = (obj: RespondToAuthChallengeResponse): any => ({
  ...obj,
  ...(obj.Session && { Session: SENSITIVE_STRING }),
  ...(obj.AuthenticationResult && {
    AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
  }),
});

/**
 * @internal
 */
export const RevokeTokenRequestFilterSensitiveLog = (obj: RevokeTokenRequest): any => ({
  ...obj,
  ...(obj.Token && { Token: SENSITIVE_STRING }),
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetRiskConfigurationRequestFilterSensitiveLog = (obj: SetRiskConfigurationRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetRiskConfigurationResponseFilterSensitiveLog = (obj: SetRiskConfigurationResponse): any => ({
  ...obj,
  ...(obj.RiskConfiguration && { RiskConfiguration: RiskConfigurationTypeFilterSensitiveLog(obj.RiskConfiguration) }),
});

/**
 * @internal
 */
export const SetUICustomizationRequestFilterSensitiveLog = (obj: SetUICustomizationRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetUICustomizationResponseFilterSensitiveLog = (obj: SetUICustomizationResponse): any => ({
  ...obj,
  ...(obj.UICustomization && { UICustomization: UICustomizationTypeFilterSensitiveLog(obj.UICustomization) }),
});

/**
 * @internal
 */
export const SetUserMFAPreferenceRequestFilterSensitiveLog = (obj: SetUserMFAPreferenceRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetUserSettingsRequestFilterSensitiveLog = (obj: SetUserSettingsRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SignUpRequestFilterSensitiveLog = (obj: SignUpRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.UserAttributes && {
    UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
  ...(obj.ValidationData && {
    ValidationData: obj.ValidationData.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SignUpResponseFilterSensitiveLog = (obj: SignUpResponse): any => ({
  ...obj,
  ...(obj.Session && { Session: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartWebAuthnRegistrationRequestFilterSensitiveLog = (obj: StartWebAuthnRegistrationRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAuthEventFeedbackRequestFilterSensitiveLog = (obj: UpdateAuthEventFeedbackRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.FeedbackToken && { FeedbackToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDeviceStatusRequestFilterSensitiveLog = (obj: UpdateDeviceStatusRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserAttributesRequestFilterSensitiveLog = (obj: UpdateUserAttributesRequest): any => ({
  ...obj,
  ...(obj.UserAttributes && {
    UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserPoolClientRequestFilterSensitiveLog = (obj: UpdateUserPoolClientRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserPoolClientResponseFilterSensitiveLog = (obj: UpdateUserPoolClientResponse): any => ({
  ...obj,
  ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientTypeFilterSensitiveLog(obj.UserPoolClient) }),
});

/**
 * @internal
 */
export const VerifySoftwareTokenRequestFilterSensitiveLog = (obj: VerifySoftwareTokenRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  ...(obj.Session && { Session: SENSITIVE_STRING }),
  ...(obj.UserCode && { UserCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VerifySoftwareTokenResponseFilterSensitiveLog = (obj: VerifySoftwareTokenResponse): any => ({
  ...obj,
  ...(obj.Session && { Session: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VerifyUserAttributeRequestFilterSensitiveLog = (obj: VerifyUserAttributeRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});
