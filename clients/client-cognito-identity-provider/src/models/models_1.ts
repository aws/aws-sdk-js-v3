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
  EmailMfaConfigType,
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
  ResourceServerScopeType,
  ResourceServerType,
  RiskConfigurationType,
  RiskConfigurationTypeFilterSensitiveLog,
  RiskExceptionConfigurationType,
  SmsConfigurationType,
  SmsMfaConfigType,
  SMSMfaSettingsType,
  SoftwareTokenMfaConfigType,
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
  UserVerificationType,
  VerificationMessageTemplateType,
  VerifiedAttributeType,
} from "./models_0";

/**
 * <p>Settings for multi-factor authentication (MFA) with passkey, or webauthN, biometric
 *             and security-key devices in a user pool. Configures the following:</p>
 *          <ul>
 *             <li>
 *                <p>Configuration at the user-pool level for whether you want to require passkey
 *                     configuration as an MFA factor, or include it as a choice.</p>
 *             </li>
 *             <li>
 *                <p>The user pool relying-party ID. This is the user pool domain that user's
 *                     passkey providers should trust as a receiver of passkey authentication.</p>
 *             </li>
 *             <li>
 *                <p>The providers that you want to allow as origins for passkey
 *                     authentication.</p>
 *             </li>
 *          </ul>
 *          <p>This data type is a request parameter of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html">SetUserPoolMfaConfig</a> and a response parameter of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserPoolMfaConfig.html">GetUserPoolMfaConfig</a>. </p>
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
   * <p>Sets or displays your user-pool treatment for MFA with a passkey. You can override
   *             other MFA options and require passkey MFA, or you can set it as preferred. When passkey
   *             MFA is preferred, the hosted UI encourages users to register a passkey at
   *             sign-in.</p>
   * @public
   */
  UserVerification?: UserVerificationType | undefined;
}

/**
 * @public
 */
export interface GetUserPoolMfaConfigResponse {
  /**
   * <p>Shows user pool SMS message configuration for MFA. Includes the message template and
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
   * <p>Shows user pool email message configuration for MFA. Includes the subject and body of
   *             the email message template for MFA messages. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
   *                      advanced security features</a> must be active in your user pool.</p>
   * @public
   */
  EmailMfaConfiguration?: EmailMfaConfigType | undefined;

  /**
   * <p>The multi-factor authentication (MFA) configuration. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OFF</code> MFA won't be used for any users.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON</code> MFA is required for all users to sign in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIONAL</code> MFA will be required only for individual users who have
   *                     an MFA factor activated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * <p>Shows user pool configuration for MFA with passkeys from biometric devices and
   *             security keys.</p>
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
   * <p>A valid access token that Amazon Cognito issued to the user who you want to sign out.</p>
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
   * <p>The authentication flow that you want to initiate. The <code>AuthParameters</code>
   *             that you must submit are linked to the flow that you submit. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>USER_AUTH</code>: Request a preferred authentication type or review
   *                     available authentication types. From the offered authentication types, select
   *                     one in a challenge response and then authenticate with that method in an
   *                     additional challenge response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REFRESH_TOKEN_AUTH</code>: Receive new ID and access tokens when you
   *                     pass a <code>REFRESH_TOKEN</code> parameter with a valid refresh token as the
   *                     value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_SRP_AUTH</code>: Receive secure remote password (SRP) variables for
   *                     the next challenge, <code>PASSWORD_VERIFIER</code>, when you pass
   *                         <code>USERNAME</code> and <code>SRP_A</code> parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_PASSWORD_AUTH</code>: Receive new tokens or the next challenge, for
   *                     example <code>SOFTWARE_TOKEN_MFA</code>, when you pass <code>USERNAME</code> and
   *                         <code>PASSWORD</code> parameters.</p>
   *             </li>
   *          </ul>
   *          <p>Valid values include the following:</p>
   *          <dl>
   *             <dt>USER_AUTH</dt>
   *             <dd>
   *                <p>The entry point for sign-in with passwords, one-time passwords, biometric
   *                         devices, and security keys.</p>
   *             </dd>
   *             <dt>USER_SRP_AUTH</dt>
   *             <dd>
   *                <p>Username-password authentication with the Secure Remote Password (SRP)
   *                         protocol. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow.html#Using-SRP-password-verification-in-custom-authentication-flow">Use SRP password verification in custom
   *                             authentication flow</a>.</p>
   *             </dd>
   *             <dt>REFRESH_TOKEN_AUTH and REFRESH_TOKEN</dt>
   *             <dd>
   *                <p>Provide a valid refresh token and receive new ID and access tokens. For
   *                         more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-refresh-token.html">Using the refresh token</a>.</p>
   *             </dd>
   *             <dt>CUSTOM_AUTH</dt>
   *             <dd>
   *                <p>Custom authentication with Lambda triggers. For more information, see
   *                             <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html">Custom authentication challenge Lambda
   *                             triggers</a>.</p>
   *             </dd>
   *             <dt>USER_PASSWORD_AUTH</dt>
   *             <dd>
   *                <p>Username-password authentication with the password sent directly in the
   *                         request. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow.html#Built-in-authentication-flow-and-challenges">Admin authentication flow</a>.</p>
   *             </dd>
   *          </dl>
   *          <p>
   *             <code>ADMIN_USER_PASSWORD_AUTH</code> is a flow type of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a> and isn't valid for InitiateAuth.
   *                 <code>ADMIN_NO_SRP_AUTH</code> is a legacy server-side username-password flow and
   *             isn't valid for InitiateAuth.</p>
   * @public
   */
  AuthFlow: AuthFlowType | undefined;

  /**
   * <p>The authentication parameters. These are inputs corresponding to the
   *                 <code>AuthFlow</code> that you're invoking. The required values depend on the value
   *             of <code>AuthFlow</code>:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>USER_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>PREFERRED_CHALLENGE</code>. If you don't provide a value for
   *                         <code>PREFERRED_CHALLENGE</code>, Amazon Cognito responds with the
   *                         <code>AvailableChallenges</code> parameter that specifies the available
   *                     sign-in methods.</p>
   *             </li>
   *             <li>
   *                <p>For <code>USER_SRP_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SRP_A</code> (required), <code>SECRET_HASH</code> (required if the app
   *                     client is configured with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>USER_PASSWORD_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>PASSWORD</code> (required), <code>SECRET_HASH</code> (required if the
   *                     app client is configured with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>REFRESH_TOKEN_AUTH/REFRESH_TOKEN</code>: <code>REFRESH_TOKEN</code>
   *                     (required), <code>SECRET_HASH</code> (required if the app client is configured
   *                     with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>CUSTOM_AUTH</code>: <code>USERNAME</code> (required),
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
   *             When you use the InitiateAuth API action, Amazon Cognito invokes the Lambda functions that are
   *             specified for various triggers. The ClientMetadata value is passed as input to the
   *             functions for only the following triggers:</p>
   *          <ul>
   *             <li>
   *                <p>Pre signup</p>
   *             </li>
   *             <li>
   *                <p>Pre authentication</p>
   *             </li>
   *             <li>
   *                <p>User migration</p>
   *             </li>
   *          </ul>
   *          <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which
   *             the function receives as input. This payload contains a <code>validationData</code>
   *             attribute, which provides the data that you assigned to the ClientMetadata parameter in
   *             your InitiateAuth request. In your function code in Lambda, you can process the
   *                 <code>validationData</code> value to enhance your workflow for your specific
   *             needs.</p>
   *          <p>When you use the InitiateAuth API action, Amazon Cognito also invokes the functions for the
   *             following triggers, but it doesn't provide the ClientMetadata value as input:</p>
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
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;

  /**
   * <p>The app client ID.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>InitiateAuth</code> calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>The optional session ID from a <code>ConfirmSignUp</code> API request. You can sign in
   *             a user directly from the sign-up process with the <code>USER_AUTH</code> authentication
   *             flow.</p>
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
   * <p>The name of the challenge that you're responding to with this call. This name is
   *             returned in the <code>InitiateAuth</code> response if you must pass another
   *             challenge.</p>
   *          <p>Valid values include the following:</p>
   *          <note>
   *             <p>All of the following challenges require <code>USERNAME</code> and
   *                     <code>SECRET_HASH</code> (if applicable) in the parameters.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WEB_AUTHN</code>: Respond to the challenge with the results of a
   *                     successful authentication with a passkey, or webauthN, factor. These are
   *                     typically biometric devices or security keys.</p>
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
   *                   <code>SMS_MFA</code>: Next challenge is to supply an
   *                     <code>SMS_MFA_CODE</code>that your user pool delivered in an SMS message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_OTP</code>: Next challenge is to supply an
   *                         <code>EMAIL_OTP_CODE</code> that your user pool delivered in an email
   *                     message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_VERIFIER</code>: Next challenge is to supply
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     the client-side SRP calculations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_SRP_AUTH</code>: If device tracking was activated on your user
   *                     pool and the previous challenges were passed, this challenge is returned so that
   *                     Amazon Cognito can start tracking this device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to
   *                         <code>PASSWORD_VERIFIER</code>, but for devices only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login.</p>
   *                <p>Respond to this challenge with <code>NEW_PASSWORD</code> and any required
   *                     attributes that Amazon Cognito returned in the <code>requiredAttributes</code> parameter.
   *                     You can also set values for attributes that aren't required by your user pool
   *                     and that your app client can write. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html">RespondToAuthChallenge</a>.</p>
   *                <p>Amazon Cognito only returns this challenge for users who have temporary passwords.
   *                     Because of this, and because in some cases you can create users who don't have
   *                     values for required attributes, take care to collect and submit
   *                     required-attribute values for all users who don't have passwords. You can create
   *                     a user in the Amazon Cognito console without, for example, a required
   *                         <code>birthdate</code> attribute. The API response from Amazon Cognito won't prompt
   *                     you to submit a birthdate for the user if they don't have a password.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter,
   * then use the <code>UpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_SETUP</code>: For users who are required to setup an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFAS_CAN_SETUP</code> value. </p>
   *                <p> To set up software token MFA, use the session returned here from
   *                         <code>InitiateAuth</code> as an input to
   *                     <code>AssociateSoftwareToken</code>. Use the session returned by
   *                         <code>VerifySoftwareToken</code> as an input to
   *                         <code>RespondToAuthChallenge</code> with challenge name
   *                         <code>MFA_SETUP</code> to complete sign-in. To set up SMS MFA, an
   *                     administrator should help the user to add a phone number to their account, and
   *                     then the user should call <code>InitiateAuth</code> again to restart
   *                     sign-in.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * <p>The session that should pass both ways in challenge-response calls to the service. If
   *             the caller must pass another challenge, they return a session with other challenge
   *             parameters. Include this session identifier in a <code>RespondToAuthChallenge</code> API
   *             request.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The challenge parameters. These are returned in the <code>InitiateAuth</code> response
   *             if you must pass another challenge. The responses in this parameter should be used to
   *             compute inputs to the next call (<code>RespondToAuthChallenge</code>). </p>
   *          <p>All challenges require <code>USERNAME</code>. They also require
   *                 <code>SECRET_HASH</code> if your app client has a client secret.</p>
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * <p>The result of the authentication response. This result is only returned if the caller
   *             doesn't need to pass another challenge. If the caller does need to pass another
   *             challenge before it gets tokens, <code>ChallengeName</code>,
   *                 <code>ChallengeParameters</code>, and <code>Session</code> are returned.</p>
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;

  /**
   * <p>This response parameter prompts a user to select from multiple available challenges
   *             that they can complete authentication with. For example, they might be able to continue
   *             with passwordless authentication or with a one-time password from an SMS message.</p>
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
   * <p>A valid access token that Amazon Cognito issued to the user whose list of devices you want to
   *             view.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The limit of the device request.</p>
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
   * <p>The devices returned in the list devices response.</p>
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
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The limit of the request to list groups.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>The group objects for the groups.</p>
   * @public
   */
  Groups?: GroupType[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of IdPs to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The details of a user pool identity provider (IdP), including name and type.</p>
 *          <p>This data type is a response parameter of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListIdentityProviders.html">ListIdentityProviders</a>.</p>
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
   * <p>A list of IdP objects.</p>
   * @public
   */
  Providers: ProviderDescription[] | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceServersRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of resource servers to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceServersResponse {
  /**
   * <p>The resource servers.</p>
   * @public
   */
  ResourceServers: ResourceServerType[] | undefined;

  /**
   * <p>A pagination token.</p>
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
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of import jobs you want the request to return.</p>
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
   * <p>The user import jobs.</p>
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
   * <p>The user pool ID for the user pool where you want to list user pool clients.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of results you want the request to return when listing the user
   *             pool clients.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A short description of a user pool app client.</p>
 *          <p>This data type is a response parameter of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPoolClients.html">ListUserPoolClients</a>. </p>
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
   * <p>The user pool clients in the response that lists user pool clients.</p>
   * @public
   */
  UserPoolClients?: UserPoolClientDescription[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
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
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results you want the request to return when listing the user
   *             pools.</p>
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * <p>A short description of a user pool.</p>
 *          <p>This data type is a response parameter of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html">ListUserPools</a>. </p>
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
   * @deprecated
   *
   * <p>The user pool status.</p>
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
   * <p>The user pools from the response to list users.</p>
   * @public
   */
  UserPools?: UserPoolDescriptionType[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
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
   * <p>The user pool ID for the user pool on which the search should be performed.</p>
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
   * <p>Maximum number of users to be returned.</p>
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
   * <p>A list of the user pool users, and their attributes, that match your query.</p>
   *          <note>
   *             <p>Amazon Cognito creates a profile in your user pool for each native user in your user pool,
   *                 and each unique user ID from your third-party identity providers (IdPs). When you
   *                 link users with the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a> API operation, the output of
   *                     <code>ListUsers</code> displays both the IdP user and the native user that you
   *                 linked. You can identify IdP users in the <code>Users</code> object of this API
   *                 response by the IdP prefix that Amazon Cognito appends to <code>Username</code>.</p>
   *          </note>
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
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The maximum number of users that you want to retrieve before pagination.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersInGroupResponse {
  /**
   * <p>A list of users in the group, and their attributes.</p>
   * @public
   */
  Users?: UserType[] | undefined;

  /**
   * <p>An identifier that you can use in a later request to return the next set of items in
   *             the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWebAuthnCredentialsRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose registered passkeys you want
   *             to list.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
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
 *          <p>This data type is a response parameter of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListWebAuthnCredentials.html">ListWebAuthnCredentials</a>.</p>
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
   * <p>An identifier that you can use in a later request to return the next set of items in
   *             the list.</p>
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
   * <p>The ID of the client associated with the user pool.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>ResendConfirmationCode</code> calls.</p>
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
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
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
   * <p>The code delivery details returned by the server in response to the request to resend
   *             the confirmation code.</p>
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
   * <p>The app client ID.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
   *          <p>
   *             <code>ADMIN_NO_SRP_AUTH</code> isn't a valid value.</p>
   * @public
   */
  ChallengeName: ChallengeNameType | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call
   *             determines that the caller must pass another challenge, they return a session with other
   *             challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
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
   *                      <p>See <a href="https://www.w3.org/TR/webauthn-3/#dictdef-authenticationresponsejson">
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
   * In <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter,
   * then use the <code>UpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p>
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
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>RespondToAuthChallenge</code> calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
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
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
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
   * <p>The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If the caller must pass another challenge, they return a session with other
   *             challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The challenge parameters. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * <p>The result returned by the server in response to the request to respond to the
   *             authentication challenge.</p>
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
   * <p>The client ID for the token that you want to revoke.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The secret for the client ID. This is required only if the client ID has a
   *             secret.</p>
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
 * <p>Exception that is thrown when you attempt to perform an operation that isn't enabled
 *             for the user pool client.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
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
   * <p>The detailed activity logging configuration that you applied to the requested user
   *             pool.</p>
   * @public
   */
  LogDeliveryConfiguration?: LogDeliveryConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetRiskConfigurationRequest {
  /**
   * <p>The user pool ID. </p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID. If <code>ClientId</code> is null, then the risk configuration is
   *             mapped to <code>userPoolId</code>. When the client ID is null, the same risk
   *             configuration is applied to all the clients in the userPool.</p>
   *          <p>Otherwise, <code>ClientId</code> is mapped to the client. When the client ID isn't
   *             null, the user pool configuration is overridden and the risk configuration for the
   *             client is used instead.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The compromised credentials risk configuration.</p>
   * @public
   */
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType | undefined;

  /**
   * <p>The account takeover risk configuration.</p>
   * @public
   */
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType | undefined;

  /**
   * <p>The configuration to override the risk decision.</p>
   * @public
   */
  RiskExceptionConfiguration?: RiskExceptionConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetRiskConfigurationResponse {
  /**
   * <p>The risk configuration.</p>
   * @public
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetUICustomizationRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The client ID for the client app.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The CSS values in the UI customization.</p>
   * @public
   */
  CSS?: string | undefined;

  /**
   * <p>The uploaded logo image for the UI customization.</p>
   * @public
   */
  ImageFile?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SetUICustomizationResponse {
  /**
   * <p>The UI customization information.</p>
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
   *             TOTP MFA and sets it as the preferred MFA method when multiple methods are
   *             available.</p>
   * @public
   */
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType | undefined;

  /**
   * <p>User preferences for email message MFA. Activates or deactivates email MFA and sets it
   *             as the preferred MFA method when multiple methods are available. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
   *                      advanced security features</a> must be active in your user pool.</p>
   * @public
   */
  EmailMfaSettings?: EmailMfaSettingsType | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose MFA preference you want to
   *             set.</p>
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
   * <p>Configures user pool email messages for MFA. Sets the subject and body of the email
   *             message template for MFA messages. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
   *                      advanced security features</a> must be active in your user pool.</p>
   * @public
   */
  EmailMfaConfiguration?: EmailMfaConfigType | undefined;

  /**
   * <p>The MFA configuration. If you set the MfaConfiguration value to ‘ON’, only users who
   *             have set up an MFA factor can sign in. To learn more, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-mfa.html">Adding Multi-Factor
   *                 Authentication (MFA) to a user pool</a>. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OFF</code> MFA won't be used for any users.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON</code> MFA is required for all users to sign in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIONAL</code> MFA will be required only for individual users who have
   *                     an MFA factor activated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * <p>The configuration of your user pool for passkey, or webauthN, authentication and
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
   * <p>Shows user pool SMS message configuration for MFA. Includes the message template and
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
   * <p>Shows user pool email message configuration for MFA. Includes the subject and body of
   *             the email message template for MFA messages. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
   *                      advanced security features</a> must be active in your user pool.</p>
   * @public
   */
  EmailMfaConfiguration?: EmailMfaConfigType | undefined;

  /**
   * <p>The MFA configuration. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OFF</code> MFA won't be used for any users.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON</code> MFA is required for all users to sign in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIONAL</code> MFA will be required only for individual users who have
   *                     an MFA factor enabled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * <p>The configuration of your user pool for passkey, or webauthN, biometric and
   *             security-key devices.</p>
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
   * <p>A valid access token that Amazon Cognito issued to the user whose user settings you want to
   *             configure.</p>
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
   * <p>The ID of the client associated with the user pool.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
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
   * <p>The password of the user you want to register.</p>
   *          <p>Users can sign up without a password when your user pool supports passwordless sign-in
   *             with email or SMS OTPs. To create a user with no password, omit this parameter or submit
   *             a blank value. You can only create a passwordless user when passwordless sign-in is
   *             available. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignInPolicyType.html">the SignInPolicyType</a> property of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html">CreateUserPool</a> and <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPool.html">UpdateUserPool</a>.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *          <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   * @public
   */
  UserAttributes?: AttributeType[] | undefined;

  /**
   * <p>Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda
   *     trigger. This set of key-value pairs are for custom validation of information that you
   *     collect from your users but don't need to retain.</p>
   *          <p>Your Lambda function can analyze this additional data and act on it. Your function
   *     might perform external API operations like logging user attributes and validation data
   *     to Amazon CloudWatch Logs. Validation data might also affect the response that your function returns
   *     to Amazon Cognito, like automatically confirming the user if they sign up from within your
   *     network.</p>
   *          <p>For more information about the pre sign-up Lambda trigger, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html">Pre sign-up Lambda trigger</a>.</p>
   * @public
   */
  ValidationData?: AttributeType[] | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>SignUp</code> calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
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
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
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
   * <p>A response from the server indicating that a user registration has been
   *             confirmed.</p>
   * @public
   */
  UserConfirmed: boolean | undefined;

  /**
   * <p>The code delivery details returned by the server response to the user registration
   *             request.</p>
   * @public
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType | undefined;

  /**
   * <p>The 128-bit ID of the authenticated user. This isn't the same as
   *             <code>username</code>.</p>
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
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The job ID for the user import job.</p>
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
   * <p>The job object that represents the user import job.</p>
   * @public
   */
  UserImportJob?: UserImportJobType | undefined;
}

/**
 * @public
 */
export interface StartWebAuthnRegistrationRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose passkey metadata you want to
   *             generate.</p>
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
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The job ID for the user import job.</p>
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
   * <p>The job object that represents the user import job.</p>
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
   * <p>The tags to assign to the user pool.</p>
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
   * <p>The keys of the tags to remove from the user pool.</p>
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
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The event ID.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>The feedback token.</p>
   * @public
   */
  FeedbackToken: string | undefined;

  /**
   * <p>The authentication event feedback value. When you provide a <code>FeedbackValue</code>
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
   * <p>A valid access token that Amazon Cognito issued to the user whose device status you want to
   *             update.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The device key.</p>
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * <p>The status of whether a device is remembered.</p>
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
   * <p>The name of the group.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A string containing the new description of the group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The new role Amazon Resource Name (ARN) for the group. This is used for setting the
   *                 <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims in the
   *             token.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The new precedence value for the group. For more information about this parameter, see
   *                 <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html">CreateGroup</a>.</p>
   * @public
   */
  Precedence?: number | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResponse {
  /**
   * <p>The group object for the group.</p>
   * @public
   */
  Group?: GroupType | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The IdP name.</p>
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
   * <p>The IdP attribute mapping to be changed.</p>
   * @public
   */
  AttributeMapping?: Record<string, string> | undefined;

  /**
   * <p>A list of IdP identifiers.</p>
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
   * <p>When true, applies the default branding style options. This option reverts to default
   *             style options that are managed by Amazon Cognito. You can modify them later in the branding
   *             designer.</p>
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
   * <p>The user pool ID for the user pool.</p>
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
   * <p>The name of the resource server.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The scope values to be set for the resource server.</p>
   * @public
   */
  Scopes?: ResourceServerScopeType[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceServerResponse {
  /**
   * <p>The resource server.</p>
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
   *          <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   *          <p>If you have set an attribute to require verification before Amazon Cognito updates its value,
   *             this request doesn’t immediately update the value of that attribute. After your user
   *             receives and responds to a verification message to verify the new value, Amazon Cognito updates
   *             the attribute value. Your user can sign in and receive messages with the original
   *             attribute value until they verify the new value.</p>
   * @public
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose user attributes you want to
   *             update.</p>
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
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
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
   * <p>The code delivery details list from the server for the request to update user
   *             attributes.</p>
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
   * <p>The user pool ID for the user pool you want to update.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A container with the policies you want to update in a user pool.</p>
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
   * <p>The Lambda configuration information from the request to update the user pool.</p>
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * <p>The attributes that are automatically verified when Amazon Cognito requests to update user
   *             pools.</p>
   * @public
   */
  AutoVerifiedAttributes?: VerifiedAttributeType[] | undefined;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   * @public
   */
  SmsVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   * @public
   */
  EmailVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   * @public
   */
  EmailVerificationSubject?: string | undefined;

  /**
   * <p>The template for verification messages.</p>
   * @public
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType | undefined;

  /**
   * <p>The contents of the SMS authentication message.</p>
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
   * <p>Possible values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OFF</code> - MFA tokens aren't required and can't be specified during user
   *                     registration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON</code> - MFA tokens are required for all user registrations. You can
   *                     only specify ON when you're initially creating a user pool. You can use the
   *                         <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html">SetUserPoolMfaConfig</a> API operation to turn MFA "ON" for existing
   *                     user pools. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIONAL</code> - Users have the option when registering to create an MFA
   *                     token.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * <p>The device-remembering configuration for a user pool. A null value indicates that you
   *             have deactivated device remembering in your user pool.</p>
   *          <note>
   *             <p>When you provide a value for any <code>DeviceConfiguration</code> field, you
   *                 activate the Amazon Cognito device-remembering feature.</p>
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
   * <p>The SMS configuration with the settings that your Amazon Cognito user pool must use to send an
   *             SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages
   *             with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management
   *             (IAM) role in your Amazon Web Services account.</p>
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
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   * @public
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType | undefined;

  /**
   * <p>User pool add-ons. Contains settings for activation of advanced security features. To
   *     log user security information but take no action, set to <code>AUDIT</code>. To
   *     configure automatic security responses to risky traffic to your user pool, set to
   *         <code>ENFORCED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p>
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
   * <p>The user pool ID for the user pool where you want to update the user pool
   *             client.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the client associated with the user pool.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The client name from the update user pool client request.</p>
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
   * <p>The time units you use when you set the duration of ID, access, and refresh tokens.
   *             The default unit for RefreshToken is days, and the default for ID and access tokens is
   *             hours.</p>
   * @public
   */
  TokenValidityUnits?: TokenValidityUnitsType | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have read access to.
   *     After your user authenticates in your app, their access token authorizes them to read
   *     their own attribute value for any attribute in this list. An example of this kind of
   *     activity is when your user selects a link to view their profile information. Your app
   *     makes a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html">GetUser</a> API request to retrieve and display your user's profile
   *     data.</p>
   *          <p>When you don't specify the <code>ReadAttributes</code> for your app client, your
   *     app can read the values of <code>email_verified</code>,
   *         <code>phone_number_verified</code>, and the Standard attributes of your user pool.
   *     When your user pool app client has read access to these default attributes,
   *         <code>ReadAttributes</code> doesn't return any information. Amazon Cognito only
   *     populates <code>ReadAttributes</code> in the API response if you have specified your own
   *     custom set of read attributes.</p>
   * @public
   */
  ReadAttributes?: string[] | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have write access to.
   *     After your user authenticates in your app, their access token authorizes them to set or
   *     modify their own attribute value for any attribute in this list. An example of this kind
   *     of activity is when you present your user with a form to update their profile
   *     information and they change their last name. Your app then makes an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html">UpdateUserAttributes</a> API request and sets <code>family_name</code> to the
   *     new value. </p>
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
   * <p>The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in
   * your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and
   * password, or a custom authentication process that you define with Lambda functions.</p>
   *          <note>
   *             <p>If you don't specify a value for <code>ExplicitAuthFlows</code>, your user client supports <code>ALLOW_REFRESH_TOKEN_AUTH</code>, <code>ALLOW_USER_SRP_AUTH</code>, and <code>ALLOW_CUSTOM_AUTH</code>.</p>
   *          </note>
   *          <p>Valid values include:</p>
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
   *                 <code>Google</code>, <code>SignInWithApple</code>, and <code>LoginWithAmazon</code>.
   *             You can also specify the names that you configured for the SAML and OIDC IdPs in your
   *             user pool, for example <code>MySAMLIdP</code> or <code>MyOIDCIdP</code>.</p>
   *          <p>This setting applies to providers that you can access with the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html">hosted
   *                 UI and OAuth 2.0 authorization server</a>. The removal of <code>COGNITO</code>
   *             from this list doesn't prevent authentication operations for local users with the
   *             user pools API in an Amazon Web Services SDK. The only way to prevent API-based authentication is to
   *             block access with a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-waf.html">WAF rule</a>.</p>
   * @public
   */
  SupportedIdentityProviders?: string[] | undefined;

  /**
   * <p>A list of allowed redirect (callback) URLs for the IdPs.</p>
   *          <p>A redirect URI must:</p>
   *          <ul>
   *             <li>
   *                <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                <p>Be registered with the authorization server.</p>
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
   * <p>A list of allowed logout URLs for the IdPs.</p>
   * @public
   */
  LogoutURLs?: string[] | undefined;

  /**
   * <p>The default redirect URI. Must be in the <code>CallbackURLs</code> list.</p>
   *          <p>A redirect URI must:</p>
   *          <ul>
   *             <li>
   *                <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *          <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *          <p>Amazon Cognito requires HTTPS over HTTP except for <code>http://localhost</code> for testing
   *             purposes only.</p>
   *          <p>App callback URLs such as <code>myapp://example</code> are also supported.</p>
   * @public
   */
  DefaultRedirectURI?: string | undefined;

  /**
   * <p>The allowed OAuth flows.</p>
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
   * <p>The allowed OAuth scopes. Possible values provided by OAuth are <code>phone</code>,
   *                 <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values
   *             provided by Amazon Web Services are <code>aws.cognito.signin.user.admin</code>. Custom scopes created
   *             in Resource Servers are also supported.</p>
   * @public
   */
  AllowedOAuthScopes?: string[] | undefined;

  /**
   * <p>Set to <code>true</code> to use OAuth 2.0 features in your user pool app client.</p>
   *          <p>
   *             <code>AllowedOAuthFlowsUserPoolClient</code> must be <code>true</code> before you can configure
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
   *          <p>To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set
   * <code>AllowedOAuthFlowsUserPoolClient</code> to <code>true</code> in a <code>CreateUserPoolClient</code> or
   * <code>UpdateUserPoolClient</code> API request. If you don't set a value for
   * <code>AllowedOAuthFlowsUserPoolClient</code> in a request with the CLI or SDKs, it defaults
   * to <code>false</code>.</p>
   * @public
   */
  AllowedOAuthFlowsUserPoolClient?: boolean | undefined;

  /**
   * <p>The Amazon Pinpoint analytics configuration necessary to collect metrics for this user
   *             pool.</p>
   *          <note>
   *             <p>In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending
   *                 events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user
   *                 pools support sending events to Amazon Pinpoint projects within that same Region.</p>
   *          </note>
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType | undefined;

  /**
   * <p>Errors and responses that you want Amazon Cognito APIs to return during authentication, account
   *             confirmation, and password recovery when the user doesn't exist in the user pool. When
   *             set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error
   *             indicating either the username or password was incorrect. Account confirmation and
   *             password recovery return a response indicating a code was sent to a simulated
   *             destination. When set to <code>LEGACY</code>, those APIs return a
   *                 <code>UserNotFoundException</code> exception if the user doesn't exist in the user
   *             pool.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - This prevents user existence-related errors.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LEGACY</code> - This represents the early behavior of Amazon Cognito where user
   *                     existence related errors aren't prevented.</p>
   *             </li>
   *          </ul>
   *          <p>Defaults to <code>LEGACY</code> when you don't provide a value.</p>
   * @public
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | undefined;

  /**
   * <p>Activates or deactivates token revocation. For more information about revoking tokens,
   *             see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
   * @public
   */
  EnableTokenRevocation?: boolean | undefined;

  /**
   * <p>Activates the propagation of additional user context data. For more information about
   *             propagation of user context data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-threat-protection.html"> Adding advanced security to a user pool</a>. If you don’t include this
   *             parameter, you can't send device fingerprint information, including source IP address,
   *             to Amazon Cognito advanced security. You can only activate
   *                 <code>EnablePropagateAdditionalUserContextData</code> in an app client that has a
   *             client secret.</p>
   * @public
   */
  EnablePropagateAdditionalUserContextData?: boolean | undefined;

  /**
   * <p>Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration,
   * in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.</p>
   * @public
   */
  AuthSessionValidity?: number | undefined;
}

/**
 * <p>Represents the response from the server to the request to update the user pool
 *             client.</p>
 * @public
 */
export interface UpdateUserPoolClientResponse {
  /**
   * <p>The user pool client value from the response from the server when you request to
   *             update the user pool client.</p>
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
   * <p>The domain name for the custom domain that hosts the sign-up and sign-in pages for
   *             your application. One example might be <code>auth.example.com</code>. </p>
   *          <p>This string can include only lowercase letters, numbers, and hyphens. Don't use a
   *             hyphen for the first or last character. Use periods to separate subdomain names.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The ID of the user pool that is associated with the custom domain whose certificate
   *             you're updating.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A version number that indicates the state of managed login for your domain. Version
   *                 <code>1</code> is hosted UI (classic). Version <code>2</code> is the newer managed
   *             login with the branding designer. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">Managed login</a>.</p>
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in pages for
   *             your application. Use this object to specify an SSL certificate that is managed by
   *             ACM.</p>
   *          <p>When you create a custom domain, the passkey RP ID defaults to the custom domain. If
   *             you had a prefix domain active, this will cause passkey integration for your prefix
   *             domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey
   *             integration working, you can explicitly set RP ID to the prefix domain. Update the RP ID
   *             in a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html">SetUserPoolMfaConfig</a> request.</p>
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
   *                 <code>1</code> is hosted UI (classic). Version <code>2</code> is the newer managed
   *             login with the branding designer. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">Managed login</a>.</p>
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * <p>The Amazon CloudFront endpoint that Amazon Cognito set up when you added the custom domain to your user
   *             pool.</p>
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
   * <p>A valid access token that Amazon Cognito issued to the user whose software token you want to
   *             verify.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The one- time password computed using the secret code returned by <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html">AssociateSoftwareToken</a>.</p>
   * @public
   */
  UserCode: string | undefined;

  /**
   * <p>The friendly device name.</p>
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
   * <p>The status of the verify software token.</p>
   * @public
   */
  Status?: VerifySoftwareTokenResponseType | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service.</p>
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
   * <p>A valid access token that Amazon Cognito issued to the user whose user attributes you want to
   *             verify.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The attribute name in the request to verify user attributes.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The verification code in the request to verify user attributes.</p>
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
