import {
  AccountRecoverySettingType,
  AdminCreateUserConfigType,
  AnalyticsConfigurationType,
  AttributeType,
  CodeDeliveryDetailsType,
  CustomDomainConfigType,
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
  UserPoolAddOnsType,
  UserPoolClientType,
  UserPoolMfaType,
  UserPoolPolicyType,
  VerificationMessageTemplateType,
  VerifiedAttributeType,
} from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateAuthEventFeedbackRequest {
  export const filterSensitiveLog = (obj: UpdateAuthEventFeedbackRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.FeedbackToken && { FeedbackToken: SENSITIVE_STRING }),
  });
}

export interface UpdateAuthEventFeedbackResponse {}

export namespace UpdateAuthEventFeedbackResponse {
  export const filterSensitiveLog = (obj: UpdateAuthEventFeedbackResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to update the device status.</p>
 */
export interface UpdateDeviceStatusRequest {
  /**
   * <p>The access token.</p>
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

export namespace UpdateDeviceStatusRequest {
  export const filterSensitiveLog = (obj: UpdateDeviceStatusRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The response to the request to update the device status.</p>
 */
export interface UpdateDeviceStatusResponse {}

export namespace UpdateDeviceStatusResponse {
  export const filterSensitiveLog = (obj: UpdateDeviceStatusResponse): any => ({
    ...obj,
  });
}

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
   * <p>The new role ARN for the group. This is used for setting the
   *                 <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims in the
   *             token.</p>
   */
  RoleArn?: string;

  /**
   * <p>The new precedence value for the group. For more information about this parameter, see
   *             <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html">CreateGroup</a>.</p>
   */
  Precedence?: number;
}

export namespace UpdateGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupResponse {
  /**
   * <p>The group object for the group.</p>
   */
  Group?: GroupType;
}

export namespace UpdateGroupResponse {
  export const filterSensitiveLog = (obj: UpdateGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The identity provider name.</p>
   */
  ProviderName: string | undefined;

  /**
   * <p>The identity provider details to be updated, such as <code>MetadataURL</code> and
   *                 <code>MetadataFile</code>.</p>
   */
  ProviderDetails?: { [key: string]: string };

  /**
   * <p>The identity provider attribute mapping to be changed.</p>
   */
  AttributeMapping?: { [key: string]: string };

  /**
   * <p>A list of identity provider identifiers.</p>
   */
  IdpIdentifiers?: string[];
}

export namespace UpdateIdentityProviderRequest {
  export const filterSensitiveLog = (obj: UpdateIdentityProviderRequest): any => ({
    ...obj,
  });
}

export interface UpdateIdentityProviderResponse {
  /**
   * <p>The identity provider object.</p>
   */
  IdentityProvider: IdentityProviderType | undefined;
}

export namespace UpdateIdentityProviderResponse {
  export const filterSensitiveLog = (obj: UpdateIdentityProviderResponse): any => ({
    ...obj,
  });
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

export namespace UpdateResourceServerRequest {
  export const filterSensitiveLog = (obj: UpdateResourceServerRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceServerResponse {
  /**
   * <p>The resource server.</p>
   */
  ResourceServer: ResourceServerType | undefined;
}

export namespace UpdateResourceServerResponse {
  export const filterSensitiveLog = (obj: UpdateResourceServerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to update user attributes.</p>
 */
export interface UpdateUserAttributesRequest {
  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * <p>The access token for the request to update user attributes.</p>
   */
  AccessToken: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the UpdateUserAttributes API action, Amazon Cognito invokes the function
   *             that is assigned to the <i>custom message</i> trigger. When Amazon Cognito
   *             invokes this function, it passes a JSON payload, which the function receives as input.
   *             This payload contains a <code>clientMetadata</code> attribute, which provides the data
   *             that you assigned to the ClientMetadata parameter in your UpdateUserAttributes request.
   *             In your function code in AWS Lambda, you can process the <code>clientMetadata</code>
   *             value to enhance your workflow for your specific needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace UpdateUserAttributesRequest {
  export const filterSensitiveLog = (obj: UpdateUserAttributesRequest): any => ({
    ...obj,
    ...(obj.UserAttributes && {
      UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
    }),
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
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

export namespace UpdateUserAttributesResponse {
  export const filterSensitiveLog = (obj: UpdateUserAttributesResponse): any => ({
    ...obj,
  });
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
   * <p>A container with the policies you wish to update in a user pool.</p>
   */
  Policies?: UserPoolPolicyType;

  /**
   * <p>The AWS Lambda configuration information from the request to update the user
   *             pool.</p>
   */
  LambdaConfig?: LambdaConfigType;

  /**
   * <p>The attributes that are automatically verified when the Amazon Cognito service makes a
   *             request to update user pools.</p>
   */
  AutoVerifiedAttributes?: (VerifiedAttributeType | string)[];

  /**
   * <p>A container with information about the SMS verification message.</p>
   */
  SmsVerificationMessage?: string;

  /**
   * <p>The contents of the email verification message.</p>
   */
  EmailVerificationMessage?: string;

  /**
   * <p>The subject of the email verification message.</p>
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
   * <p>Can be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>OFF</code> - MFA tokens are not required and cannot be specified during
   *                     user registration.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ON</code> - MFA tokens are required for all user registrations. You can
   *                     only specify required when you are initially creating a user pool.</p>
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
   * <p>Device configuration.</p>
   */
  DeviceConfiguration?: DeviceConfigurationType;

  /**
   * <p>Email configuration.</p>
   */
  EmailConfiguration?: EmailConfigurationType;

  /**
   * <p>SMS configuration.</p>
   */
  SmsConfiguration?: SmsConfigurationType;

  /**
   * <p>The tag keys and values to assign to the user pool. A tag is a label that you can use
   *             to categorize and manage user pools in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   */
  UserPoolTags?: { [key: string]: string };

  /**
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType;

  /**
   * <p>Used to enable advanced security risk detection. Set the key
   *                 <code>AdvancedSecurityMode</code> to the value "AUDIT".</p>
   */
  UserPoolAddOns?: UserPoolAddOnsType;

  /**
   * <p>Use this setting to define which verified available method a user can use to recover
   *             their password when they call <code>ForgotPassword</code>. It allows you to define a
   *             preferred method when a user has more than one method available. With this setting, SMS
   *             does not qualify for a valid password recovery mechanism if the user also has SMS MFA
   *             enabled. In the absence of this setting, Cognito uses the legacy behavior to determine
   *             the recovery method where SMS is preferred over email.</p>
   */
  AccountRecoverySetting?: AccountRecoverySettingType;
}

export namespace UpdateUserPoolRequest {
  export const filterSensitiveLog = (obj: UpdateUserPoolRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response from the server when you make a request to update the user
 *             pool.</p>
 */
export interface UpdateUserPoolResponse {}

export namespace UpdateUserPoolResponse {
  export const filterSensitiveLog = (obj: UpdateUserPoolResponse): any => ({
    ...obj,
  });
}

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
   * <p>The time limit, in days, after which the refresh token is no longer valid and cannot
   *             be used.</p>
   */
  RefreshTokenValidity?: number;

  /**
   * <p>The time limit, after which the access token is no longer valid and cannot be used.</p>
   */
  AccessTokenValidity?: number;

  /**
   * <p>The time limit, after which the ID token is no longer valid and cannot be used.</p>
   */
  IdTokenValidity?: number;

  /**
   * <p>The units in which the validity times are represented in. Default for RefreshToken is days, and default for ID and access tokens are hours.</p>
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
   * <p>The authentication flows that are supported by the user pool clients. Flow names
   *             without the <code>ALLOW_</code> prefix are deprecated in favor of new names with the
   *                 <code>ALLOW_</code> prefix. Note that values with <code>ALLOW_</code> prefix cannot
   *             be used along with values without <code>ALLOW_</code> prefix.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_ADMIN_USER_PASSWORD_AUTH</code>: Enable admin based user password
   *                     authentication flow <code>ADMIN_USER_PASSWORD_AUTH</code>. This setting replaces
   *                     the <code>ADMIN_NO_SRP_AUTH</code> setting. With this authentication flow,
   *                     Cognito receives the password in the request instead of using the SRP (Secure
   *                     Remote Password protocol) protocol to verify passwords.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_CUSTOM_AUTH</code>: Enable Lambda trigger based
   *                     authentication.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_USER_PASSWORD_AUTH</code>: Enable user password-based
   *                     authentication. In this flow, Cognito receives the password in the request
   *                     instead of using the SRP protocol to verify passwords.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_USER_SRP_AUTH</code>: Enable SRP based authentication.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_REFRESH_TOKEN_AUTH</code>: Enable authflow to refresh
   *                     tokens.</p>
   *             </li>
   *          </ul>
   */
  ExplicitAuthFlows?: (ExplicitAuthFlowsType | string)[];

  /**
   * <p>A list of provider names for the identity providers that are supported on this
   *             client.</p>
   */
  SupportedIdentityProviders?: string[];

  /**
   * <p>A list of allowed redirect (callback) URLs for the identity providers.</p>
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
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing
   *             purposes only.</p>
   *         <p>App callback URLs such as myapp://example are also supported.</p>
   */
  CallbackURLs?: string[];

  /**
   * <p>A list of allowed logout URLs for the identity providers.</p>
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
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing
   *             purposes only.</p>
   *         <p>App callback URLs such as myapp://example are also supported.</p>
   */
  DefaultRedirectURI?: string;

  /**
   * <p>The allowed OAuth flows.</p>
   *         <p>Set to <code>code</code> to initiate a code grant flow, which provides an
   *             authorization code as the response. This code can be exchanged for access tokens with
   *             the token endpoint.</p>
   *         <p>Set to <code>implicit</code> to specify that the client should get the access token
   *             (and, optionally, ID token, based on scopes) directly.</p>
   *         <p>Set to <code>client_credentials</code> to specify that the client should get the
   *             access token (and, optionally, ID token, based on scopes) from the token endpoint using
   *             a combination of client and client_secret.</p>
   */
  AllowedOAuthFlows?: (OAuthFlowType | string)[];

  /**
   * <p>The allowed OAuth scopes. Possible values provided by OAuth are: <code>phone</code>,
   *                 <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values
   *             provided by AWS are: <code>aws.cognito.signin.user.admin</code>. Custom scopes created
   *             in Resource Servers are also supported.</p>
   */
  AllowedOAuthScopes?: string[];

  /**
   * <p>Set to true if the client is allowed to follow the OAuth protocol when interacting
   *             with Cognito user pools.</p>
   */
  AllowedOAuthFlowsUserPoolClient?: boolean;

  /**
   * <p>The Amazon Pinpoint analytics configuration for collecting metrics for this user
   *             pool.</p>
   *         <note>
   *             <p>In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1.
   *                 In regions where Pinpoint is available, Cognito User Pools will
   *                 support sending events to Amazon Pinpoint projects within that same region.
   *             </p>
   *         </note>
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType;

  /**
   * <p>Use this setting to choose which errors and responses are returned by Cognito APIs
   *             during authentication, account confirmation, and password recovery when the user does
   *             not exist in the user pool. When set to <code>ENABLED</code> and the user does not
   *             exist, authentication returns an error indicating either the username or password was
   *             incorrect, and account confirmation and password recovery return a response indicating a
   *             code was sent to a simulated destination. When set to <code>LEGACY</code>, those APIs
   *             will return a <code>UserNotFoundException</code> exception if the user does not exist in
   *             the user pool.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> - This prevents user existence-related errors.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LEGACY</code> - This represents the old behavior of Cognito where user
   *                     existence related errors are not prevented.</p>
   *             </li>
   *          </ul>
   *
   *
   *         <note>
   *             <p>After February 15th 2020, the value of <code>PreventUserExistenceErrors</code>
   *                 will default to <code>ENABLED</code> for newly created user pool clients if no value
   *                 is provided.</p>
   *         </note>
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | string;
}

export namespace UpdateUserPoolClientRequest {
  export const filterSensitiveLog = (obj: UpdateUserPoolClientRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response from the server to the request to update the user pool
 *             client.</p>
 */
export interface UpdateUserPoolClientResponse {
  /**
   * <p>The user pool client value from the response from the server when an update user pool
   *             client request is made.</p>
   */
  UserPoolClient?: UserPoolClientType;
}

export namespace UpdateUserPoolClientResponse {
  export const filterSensitiveLog = (obj: UpdateUserPoolClientResponse): any => ({
    ...obj,
    ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientType.filterSensitiveLog(obj.UserPoolClient) }),
  });
}

/**
 * <p>The UpdateUserPoolDomain request input.</p>
 */
export interface UpdateUserPoolDomainRequest {
  /**
   * <p>The domain name for the custom domain that hosts the sign-up and sign-in pages for
   *             your application. For example: <code>auth.example.com</code>. </p>
   *         <p>This string can include only lowercase letters, numbers, and hyphens. Do not use a
   *             hyphen for the first or last character. Use periods to separate subdomain names.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The ID of the user pool that is associated with the custom domain that you are
   *             updating the certificate for.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in pages for
   *             your application. Use this object to specify an SSL certificate that is managed by
   *             ACM.</p>
   */
  CustomDomainConfig: CustomDomainConfigType | undefined;
}

export namespace UpdateUserPoolDomainRequest {
  export const filterSensitiveLog = (obj: UpdateUserPoolDomainRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The UpdateUserPoolDomain response output.</p>
 */
export interface UpdateUserPoolDomainResponse {
  /**
   * <p>The Amazon CloudFront endpoint that Amazon Cognito set up when you added the custom
   *             domain to your user pool.</p>
   */
  CloudFrontDomain?: string;
}

export namespace UpdateUserPoolDomainResponse {
  export const filterSensitiveLog = (obj: UpdateUserPoolDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when there is a code mismatch and the service fails to
 *             configure the software token TOTP multi-factor authentication (MFA).</p>
 */
export interface EnableSoftwareTokenMFAException extends __SmithyException, $MetadataBearer {
  name: "EnableSoftwareTokenMFAException";
  $fault: "client";
  message?: string;
}

export namespace EnableSoftwareTokenMFAException {
  export const filterSensitiveLog = (obj: EnableSoftwareTokenMFAException): any => ({
    ...obj,
  });
}

export interface VerifySoftwareTokenRequest {
  /**
   * <p>The access token.</p>
   */
  AccessToken?: string;

  /**
   * <p>The session which should be passed both ways in challenge-response calls to the
   *             service.</p>
   */
  Session?: string;

  /**
   * <p>The one time password computed using the secret code returned by <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html">AssociateSoftwareToken"</a>.</p>
   */
  UserCode: string | undefined;

  /**
   * <p>The friendly device name.</p>
   */
  FriendlyDeviceName?: string;
}

export namespace VerifySoftwareTokenRequest {
  export const filterSensitiveLog = (obj: VerifySoftwareTokenRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
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
   * <p>The session which should be passed both ways in challenge-response calls to the
   *             service.</p>
   */
  Session?: string;
}

export namespace VerifySoftwareTokenResponse {
  export const filterSensitiveLog = (obj: VerifySoftwareTokenResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to verify user attributes.</p>
 */
export interface VerifyUserAttributeRequest {
  /**
   * <p>Represents the access token of the request to verify user attributes.</p>
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

export namespace VerifyUserAttributeRequest {
  export const filterSensitiveLog = (obj: VerifyUserAttributeRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>A container representing the response from the server from the request to verify user
 *             attributes.</p>
 */
export interface VerifyUserAttributeResponse {}

export namespace VerifyUserAttributeResponse {
  export const filterSensitiveLog = (obj: VerifyUserAttributeResponse): any => ({
    ...obj,
  });
}
