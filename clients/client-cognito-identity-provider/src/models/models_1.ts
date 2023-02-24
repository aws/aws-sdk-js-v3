// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { CognitoIdentityProviderServiceException as __BaseException } from "./CognitoIdentityProviderServiceException";
import {
  AccountRecoverySettingType,
  AdminCreateUserConfigType,
  AnalyticsConfigurationType,
  AnalyticsMetadataType,
  AttributeType,
  AttributeTypeFilterSensitiveLog,
  CodeDeliveryDetailsType,
  CustomDomainConfigType,
  DeletionProtectionType,
  DeviceConfigurationType,
  DeviceRememberedStatusType,
  EmailConfigurationType,
  ExplicitAuthFlowsType,
  FeedbackValueType,
  GroupType,
  IdentityProviderType,
  LambdaConfigType,
  OAuthFlowType,
  PreventUserExistenceErrorTypes,
  ResourceServerScopeType,
  ResourceServerType,
  SmsConfigurationType,
  TokenValidityUnitsType,
  UserAttributeUpdateSettingsType,
  UserContextDataType,
  UserImportJobType,
  UserPoolAddOnsType,
  UserPoolClientType,
  UserPoolClientTypeFilterSensitiveLog,
  UserPoolMfaType,
  UserPoolPolicyType,
  VerificationMessageTemplateType,
  VerifiedAttributeType,
} from "./models_0";

/**
 * <p>Represents the request to register a user.</p>
 */
export interface SignUpRequest {
  /**
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
   */
  SecretHash?: string;

  /**
   * <p>The user name of the user you want to register.</p>
   */
  Username: string | undefined;

  /**
   * <p>The password of the user you want to register.</p>
   */
  Password: string | undefined;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   */
  UserAttributes?: AttributeType[];

  /**
   * <p>The validation data in the request to register a user.</p>
   */
  ValidationData?: AttributeType[];

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>SignUp</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the SignUp API action, Amazon Cognito invokes any functions that are assigned to the
   *             following triggers: <i>pre sign-up</i>, <i>custom
   *                 message</i>, and <i>post confirmation</i>. When Amazon Cognito invokes
   *             any of these functions, it passes a JSON payload, which the function receives as input.
   *             This payload contains a <code>clientMetadata</code> attribute, which provides the data
   *             that you assigned to the ClientMetadata parameter in your SignUp request. In your
   *             function code in Lambda, you can process the <code>clientMetadata</code> value to enhance
   *             your workflow for your specific needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>The response from the server for a registration request.</p>
 */
export interface SignUpResponse {
  /**
   * <p>A response from the server indicating that a user registration has been
   *             confirmed.</p>
   */
  UserConfirmed: boolean | undefined;

  /**
   * <p>The code delivery details returned by the server response to the user registration
   *             request.</p>
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType;

  /**
   * <p>The UUID of the authenticated user. This isn't the same as
   *             <code>username</code>.</p>
   */
  UserSub: string | undefined;
}

/**
 * <p>Represents the request to start the user import job.</p>
 */
export interface StartUserImportJobRequest {
  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The job ID for the user import job.</p>
   */
  JobId: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to start the user import
 *             job.</p>
 */
export interface StartUserImportJobResponse {
  /**
   * <p>The job object that represents the user import job.</p>
   */
  UserImportJob?: UserImportJobType;
}

/**
 * <p>Represents the request to stop the user import job.</p>
 */
export interface StopUserImportJobRequest {
  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The job ID for the user import job.</p>
   */
  JobId: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to stop the user import
 *             job.</p>
 */
export interface StopUserImportJobResponse {
  /**
   * <p>The job object that represents the user import job.</p>
   */
  UserImportJob?: UserImportJobType;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user pool to assign the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to assign to the user pool.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the user pool.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateAuthEventFeedbackRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user pool username.</p>
   */
  Username: string | undefined;

  /**
   * <p>The event ID.</p>
   */
  EventId: string | undefined;

  /**
   * <p>The feedback token.</p>
   */
  FeedbackToken: string | undefined;

  /**
   * <p>The authentication event feedback value.</p>
   */
  FeedbackValue: FeedbackValueType | string | undefined;
}

export interface UpdateAuthEventFeedbackResponse {}

/**
 * <p>Represents the request to update the device status.</p>
 */
export interface UpdateDeviceStatusRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose device status you want to
   *             update.</p>
   */
  AccessToken: string | undefined;

  /**
   * <p>The device key.</p>
   */
  DeviceKey: string | undefined;

  /**
   * <p>The status of whether a device is remembered.</p>
   */
  DeviceRememberedStatus?: DeviceRememberedStatusType | string;
}

/**
 * <p>The response to the request to update the device status.</p>
 */
export interface UpdateDeviceStatusResponse {}

export interface UpdateGroupRequest {
  /**
   * <p>The name of the group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>A string containing the new description of the group.</p>
   */
  Description?: string;

  /**
   * <p>The new role Amazon Resource Name (ARN) for the group. This is used for setting the
   *                 <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims in the
   *             token.</p>
   */
  RoleArn?: string;

  /**
   * <p>The new precedence value for the group. For more information about this parameter, see
   *                 <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html">CreateGroup</a>.</p>
   */
  Precedence?: number;
}

export interface UpdateGroupResponse {
  /**
   * <p>The group object for the group.</p>
   */
  Group?: GroupType;
}

export interface UpdateIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The IdP name.</p>
   */
  ProviderName: string | undefined;

  /**
   * <p>The IdP details to be updated, such as <code>MetadataURL</code> and
   *                 <code>MetadataFile</code>.</p>
   */
  ProviderDetails?: Record<string, string>;

  /**
   * <p>The IdP attribute mapping to be changed.</p>
   */
  AttributeMapping?: Record<string, string>;

  /**
   * <p>A list of IdP identifiers.</p>
   */
  IdpIdentifiers?: string[];
}

export interface UpdateIdentityProviderResponse {
  /**
   * <p>The identity provider details.</p>
   */
  IdentityProvider: IdentityProviderType | undefined;
}

export interface UpdateResourceServerRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The identifier for the resource server.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>The name of the resource server.</p>
   */
  Name: string | undefined;

  /**
   * <p>The scope values to be set for the resource server.</p>
   */
  Scopes?: ResourceServerScopeType[];
}

export interface UpdateResourceServerResponse {
  /**
   * <p>The resource server.</p>
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * <p>Represents the request to update user attributes.</p>
 */
export interface UpdateUserAttributesRequest {
  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   *         <p>If you have set an attribute to require verification before Amazon Cognito updates its value,
   *             this request doesn’t immediately update the value of that attribute. After your user
   *             receives and responds to a verification message to verify the new value, Amazon Cognito updates
   *             the attribute value. Your user can sign in and receive messages with the original
   *             attribute value until they verify the new value.</p>
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose user attributes you want to
   *             update.</p>
   */
  AccessToken: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action initiates. </p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool triggers. When
   *             you use the UpdateUserAttributes API action, Amazon Cognito invokes the function that is assigned
   *             to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it
   *             passes a JSON payload, which the function receives as input. This payload contains a
   *                 <code>clientMetadata</code> attribute, which provides the data that you assigned to
   *             the ClientMetadata parameter in your UpdateUserAttributes request. In your function code
   *             in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow
   *             for your specific needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>Represents the response from the server for the request to update user
 *             attributes.</p>
 */
export interface UpdateUserAttributesResponse {
  /**
   * <p>The code delivery details list from the server for the request to update user
   *             attributes.</p>
   */
  CodeDeliveryDetailsList?: CodeDeliveryDetailsType[];
}

/**
 * <p>Represents the request to update the user pool.</p>
 */
export interface UpdateUserPoolRequest {
  /**
   * <p>The user pool ID for the user pool you want to update.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>A container with the policies you want to update in a user pool.</p>
   */
  Policies?: UserPoolPolicyType;

  /**
   * <p>When active, <code>DeletionProtection</code> prevents accidental deletion of your user
   *         pool. Before you can delete a user pool that you have protected against deletion, you
   *         must deactivate this feature.</p>
   *         <p>When you try to delete a protected user pool in a <code>DeleteUserPool</code> API request,
   *         Amazon Cognito returns an <code>InvalidParameterException</code> error. To delete a protected user pool,
   *         send a new <code>DeleteUserPool</code> request after you deactivate deletion protection in an
   *         <code>UpdateUserPool</code> API request.</p>
   */
  DeletionProtection?: DeletionProtectionType | string;

  /**
   * <p>The Lambda configuration information from the request to update the user pool.</p>
   */
  LambdaConfig?: LambdaConfigType;

  /**
   * <p>The attributes that are automatically verified when Amazon Cognito requests to update user
   *             pools.</p>
   */
  AutoVerifiedAttributes?: (VerifiedAttributeType | string)[];

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  SmsVerificationMessage?: string;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  EmailVerificationMessage?: string;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  EmailVerificationSubject?: string;

  /**
   * <p>The template for verification messages.</p>
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType;

  /**
   * <p>The contents of the SMS authentication message.</p>
   */
  SmsAuthenticationMessage?: string;

  /**
   * <p>The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>,
   * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
   * more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates">
   * Verifying updates to email addresses and phone numbers</a>.</p>
   */
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;

  /**
   * <p>Possible values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>OFF</code> - MFA tokens aren't required and can't be specified during user
   *                     registration.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ON</code> - MFA tokens are required for all user registrations. You can
   *                     only specify ON when you're initially creating a user pool. You can use the
   *                         <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html">SetUserPoolMfaConfig</a> API operation to turn MFA "ON" for existing
   *                     user pools. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>OPTIONAL</code> - Users have the option when registering to create an MFA
   *                     token.</p>
   *             </li>
   *          </ul>
   */
  MfaConfiguration?: UserPoolMfaType | string;

  /**
   * <p>The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool.</p>
   *         <note>
   *             <p>When you provide a value for any <code>DeviceConfiguration</code> field, you activate the Amazon Cognito device-remembering feature.</p>
   *         </note>
   */
  DeviceConfiguration?: DeviceConfigurationType;

  /**
   * <p>The email configuration of your user pool. The email configuration type sets your
   *             preferred sending method, Amazon Web Services Region, and sender for email invitation and verification
   *             messages from your user pool.</p>
   */
  EmailConfiguration?: EmailConfigurationType;

  /**
   * <p>The SMS configuration with the settings that your Amazon Cognito user pool must use to send an
   *             SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages
   *             with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management
   *             (IAM) role in your Amazon Web Services account.</p>
   */
  SmsConfiguration?: SmsConfigurationType;

  /**
   * <p>The tag keys and values to assign to the user pool. A tag is a label that you can use
   *             to categorize and manage user pools in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   */
  UserPoolTags?: Record<string, string>;

  /**
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType;

  /**
   * <p>Enables advanced security risk detection. Set the key
   *                 <code>AdvancedSecurityMode</code> to the value "AUDIT".</p>
   */
  UserPoolAddOns?: UserPoolAddOnsType;

  /**
   * <p>The available verified method a user can use to recover their password when they call
   *                 <code>ForgotPassword</code>. You can use this setting to define a preferred method
   *             when a user has more than one method available. With this setting, SMS doesn't qualify
   *             for a valid password recovery mechanism if the user also has SMS multi-factor
   *             authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy
   *             behavior to determine the recovery method where SMS is preferred through email.</p>
   */
  AccountRecoverySetting?: AccountRecoverySettingType;
}

/**
 * <p>Represents the response from the server when you make a request to update the user
 *             pool.</p>
 */
export interface UpdateUserPoolResponse {}

/**
 * <p>Represents the request to update the user pool client.</p>
 */
export interface UpdateUserPoolClientRequest {
  /**
   * <p>The user pool ID for the user pool where you want to update the user pool
   *             client.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The client name from the update user pool client request.</p>
   */
  ClientName?: string;

  /**
   * <p>The refresh token time limit. After this limit expires, your user can't use
   *         their refresh token. To specify the time unit for <code>RefreshTokenValidity</code> as
   *         <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   *         set a <code>TokenValidityUnits</code> value in your API request.</p>
   *         <p>For example, when you set <code>RefreshTokenValidity</code> as <code>10</code> and
   *         <code>TokenValidityUnits</code> as <code>days</code>, your user can refresh their session
   *         and retrieve new access and ID tokens for 10 days.</p>
   *         <p>The default time unit for <code>RefreshTokenValidity</code> in an API request is days.
   *         You can't set <code>RefreshTokenValidity</code> to 0. If you do, Amazon Cognito overrides the
   *         value with the default value of 30 days. <i>Valid range</i> is displayed below
   *         in seconds.</p>
   *         <p>If you don't specify otherwise in the configuration of your app client, your refresh
   *         tokens are valid for 30 days.</p>
   */
  RefreshTokenValidity?: number;

  /**
   * <p>The access token time limit. After this limit expires, your user can't use
   *         their access token. To specify the time unit for <code>AccessTokenValidity</code> as
   *         <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   *         set a <code>TokenValidityUnits</code> value in your API request.</p>
   *         <p>For example, when you set <code>AccessTokenValidity</code> to <code>10</code> and
   *         <code>TokenValidityUnits</code> to <code>hours</code>, your user can authorize access with
   *         their access token for 10 hours.</p>
   *         <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours.
   *         <i>Valid range</i> is displayed below in seconds.</p>
   *         <p>If you don't specify otherwise in the configuration of your app client, your access
   *         tokens are valid for one hour.</p>
   */
  AccessTokenValidity?: number;

  /**
   * <p>The ID token time limit. After this limit expires, your user can't use
   *         their ID token. To specify the time unit for <code>IdTokenValidity</code> as
   *         <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   *         set a <code>TokenValidityUnits</code> value in your API request.</p>
   *         <p>For example, when you set <code>IdTokenValidity</code> as <code>10</code> and
   *         <code>TokenValidityUnits</code> as <code>hours</code>, your user can authenticate their
   *         session with their ID token for 10 hours.</p>
   *         <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours.
   *         <i>Valid range</i> is displayed below in seconds.</p>
   *         <p>If you don't specify otherwise in the configuration of your app client, your ID
   *         tokens are valid for one hour.</p>
   */
  IdTokenValidity?: number;

  /**
   * <p>The units in which the validity times are represented. The default unit for
   *             RefreshToken is days, and the default for ID and access tokens is hours.</p>
   */
  TokenValidityUnits?: TokenValidityUnitsType;

  /**
   * <p>The read-only attributes of the user pool.</p>
   */
  ReadAttributes?: string[];

  /**
   * <p>The writeable attributes of the user pool.</p>
   */
  WriteAttributes?: string[];

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
   */
  ExplicitAuthFlows?: (ExplicitAuthFlowsType | string)[];

  /**
   * <p>A list of provider names for the IdPs that this client supports. The following are
   *             supported: <code>COGNITO</code>, <code>Facebook</code>, <code>Google</code>, <code>SignInWithApple</code>,
   *             <code>LoginWithAmazon</code>, and the names of your own SAML and OIDC providers.</p>
   */
  SupportedIdentityProviders?: string[];

  /**
   * <p>A list of allowed redirect (callback) URLs for the IdPs.</p>
   *         <p>A redirect URI must:</p>
   *         <ul>
   *             <li>
   *                 <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                 <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                 <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *         <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *         <p>App callback URLs such as <code>myapp://example</code> are also supported.</p>
   */
  CallbackURLs?: string[];

  /**
   * <p>A list of allowed logout URLs for the IdPs.</p>
   */
  LogoutURLs?: string[];

  /**
   * <p>The default redirect URI. Must be in the <code>CallbackURLs</code> list.</p>
   *         <p>A redirect URI must:</p>
   *         <ul>
   *             <li>
   *                 <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                 <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                 <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *         <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *         <p>Amazon Cognito requires HTTPS over HTTP except for <code>http://localhost</code> for testing
   *             purposes only.</p>
   *         <p>App callback URLs such as <code>myapp://example</code> are also supported.</p>
   */
  DefaultRedirectURI?: string;

  /**
   * <p>The allowed OAuth flows.</p>
   *         <dl>
   *             <dt>code</dt>
   *             <dd>
   *                     <p>Use a code grant flow, which provides an authorization code as the
   *                         response. This code can be exchanged for access tokens with the
   *                             <code>/oauth2/token</code> endpoint.</p>
   *                 </dd>
   *             <dt>implicit</dt>
   *             <dd>
   *                     <p>Issue the access token (and, optionally, ID token, based on scopes)
   *                         directly to your user.</p>
   *                 </dd>
   *             <dt>client_credentials</dt>
   *             <dd>
   *                     <p>Issue the access token from the <code>/oauth2/token</code> endpoint
   *                         directly to a non-person user using a combination of the client ID and
   *                         client secret.</p>
   *                 </dd>
   *          </dl>
   */
  AllowedOAuthFlows?: (OAuthFlowType | string)[];

  /**
   * <p>The allowed OAuth scopes. Possible values provided by OAuth are <code>phone</code>,
   *                 <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values
   *             provided by Amazon Web Services are <code>aws.cognito.signin.user.admin</code>. Custom scopes created
   *             in Resource Servers are also supported.</p>
   */
  AllowedOAuthScopes?: string[];

  /**
   * <p>Set to true if the client is allowed to follow the OAuth protocol when interacting
   *             with Amazon Cognito user pools.</p>
   */
  AllowedOAuthFlowsUserPoolClient?: boolean;

  /**
   * <p>The Amazon Pinpoint analytics configuration necessary to collect metrics for this user
   *             pool.</p>
   *         <note>
   *             <p>In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending
   *                 events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user
   *                 pools support sending events to Amazon Pinpoint projects within that same Region.</p>
   *         </note>
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType;

  /**
   * <p>Errors and responses that you want Amazon Cognito APIs to return during authentication, account
   *             confirmation, and password recovery when the user doesn't exist in the user pool. When
   *             set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error
   *             indicating either the username or password was incorrect. Account confirmation and
   *             password recovery return a response indicating a code was sent to a simulated
   *             destination. When set to <code>LEGACY</code>, those APIs return a
   *                 <code>UserNotFoundException</code> exception if the user doesn't exist in the user
   *             pool.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> - This prevents user existence-related errors.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LEGACY</code> - This represents the early behavior of Amazon Cognito where user
   *                     existence related errors aren't prevented.</p>
   *             </li>
   *          </ul>
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | string;

  /**
   * <p>Activates or deactivates token revocation. For more information about revoking tokens,
   *             see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
   */
  EnableTokenRevocation?: boolean;

  /**
   * <p>Activates the propagation of additional user context data. For more information about
   *             propagation of user context data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html"> Adding advanced security to a user pool</a>. If you don’t include this
   *             parameter, you can't send device fingerprint information, including source IP address,
   *             to Amazon Cognito advanced security. You can only activate
   *             <code>EnablePropagateAdditionalUserContextData</code> in an app client that has a
   *             client secret.</p>
   */
  EnablePropagateAdditionalUserContextData?: boolean;

  /**
   * <p>Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration,
   * in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.</p>
   */
  AuthSessionValidity?: number;
}

/**
 * <p>Represents the response from the server to the request to update the user pool
 *             client.</p>
 */
export interface UpdateUserPoolClientResponse {
  /**
   * <p>The user pool client value from the response from the server when you request to
   *             update the user pool client.</p>
   */
  UserPoolClient?: UserPoolClientType;
}

/**
 * <p>The UpdateUserPoolDomain request input.</p>
 */
export interface UpdateUserPoolDomainRequest {
  /**
   * <p>The domain name for the custom domain that hosts the sign-up and sign-in pages for
   *             your application. One example might be <code>auth.example.com</code>. </p>
   *         <p>This string can include only lowercase letters, numbers, and hyphens. Don't use a
   *             hyphen for the first or last character. Use periods to separate subdomain names.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The ID of the user pool that is associated with the custom domain whose certificate
   *             you're updating.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in pages for
   *             your application. Use this object to specify an SSL certificate that is managed by
   *             ACM.</p>
   */
  CustomDomainConfig: CustomDomainConfigType | undefined;
}

/**
 * <p>The UpdateUserPoolDomain response output.</p>
 */
export interface UpdateUserPoolDomainResponse {
  /**
   * <p>The Amazon CloudFront endpoint that Amazon Cognito set up when you added the custom domain to your user
   *             pool.</p>
   */
  CloudFrontDomain?: string;
}

/**
 * <p>This exception is thrown when there is a code mismatch and the service fails to
 *             configure the software token TOTP multi-factor authentication (MFA).</p>
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

export interface VerifySoftwareTokenRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose software token you want to
   *             verify.</p>
   */
  AccessToken?: string;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service.</p>
   */
  Session?: string;

  /**
   * <p>The one- time password computed using the secret code returned by <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html">AssociateSoftwareToken</a>.</p>
   */
  UserCode: string | undefined;

  /**
   * <p>The friendly device name.</p>
   */
  FriendlyDeviceName?: string;
}

export enum VerifySoftwareTokenResponseType {
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

export interface VerifySoftwareTokenResponse {
  /**
   * <p>The status of the verify software token.</p>
   */
  Status?: VerifySoftwareTokenResponseType | string;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service.</p>
   */
  Session?: string;
}

/**
 * <p>Represents the request to verify user attributes.</p>
 */
export interface VerifyUserAttributeRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose user attributes you want to
   *             verify.</p>
   */
  AccessToken: string | undefined;

  /**
   * <p>The attribute name in the request to verify user attributes.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The verification code in the request to verify user attributes.</p>
   */
  Code: string | undefined;
}

/**
 * <p>A container representing the response from the server from the request to verify user
 *             attributes.</p>
 */
export interface VerifyUserAttributeResponse {}

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
});

/**
 * @internal
 */
export const SignUpResponseFilterSensitiveLog = (obj: SignUpResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartUserImportJobRequestFilterSensitiveLog = (obj: StartUserImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartUserImportJobResponseFilterSensitiveLog = (obj: StartUserImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopUserImportJobRequestFilterSensitiveLog = (obj: StopUserImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopUserImportJobResponseFilterSensitiveLog = (obj: StopUserImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
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
export const UpdateAuthEventFeedbackResponseFilterSensitiveLog = (obj: UpdateAuthEventFeedbackResponse): any => ({
  ...obj,
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
export const UpdateDeviceStatusResponseFilterSensitiveLog = (obj: UpdateDeviceStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupRequestFilterSensitiveLog = (obj: UpdateGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupResponseFilterSensitiveLog = (obj: UpdateGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIdentityProviderRequestFilterSensitiveLog = (obj: UpdateIdentityProviderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIdentityProviderResponseFilterSensitiveLog = (obj: UpdateIdentityProviderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceServerRequestFilterSensitiveLog = (obj: UpdateResourceServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceServerResponseFilterSensitiveLog = (obj: UpdateResourceServerResponse): any => ({
  ...obj,
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
export const UpdateUserAttributesResponseFilterSensitiveLog = (obj: UpdateUserAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserPoolRequestFilterSensitiveLog = (obj: UpdateUserPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserPoolResponseFilterSensitiveLog = (obj: UpdateUserPoolResponse): any => ({
  ...obj,
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
export const UpdateUserPoolDomainRequestFilterSensitiveLog = (obj: UpdateUserPoolDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserPoolDomainResponseFilterSensitiveLog = (obj: UpdateUserPoolDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifySoftwareTokenRequestFilterSensitiveLog = (obj: VerifySoftwareTokenRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VerifySoftwareTokenResponseFilterSensitiveLog = (obj: VerifySoftwareTokenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifyUserAttributeRequestFilterSensitiveLog = (obj: VerifyUserAttributeRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VerifyUserAttributeResponseFilterSensitiveLog = (obj: VerifyUserAttributeResponse): any => ({
  ...obj,
});
