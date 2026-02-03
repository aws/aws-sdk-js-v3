// smithy-typescript generated code
import {
  ExplicitAuthFlowsType,
  OAuthFlowType,
  PreventUserExistenceErrorTypes,
  VerifySoftwareTokenResponseType,
} from "./enums";
import type {
  AnalyticsConfigurationType,
  CustomDomainConfigType,
  RefreshTokenRotationType,
  TokenValidityUnitsType,
  UserPoolClientType,
} from "./models_0";

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
   *             login with the branding editor. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">Managed login</a>.</p>
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
   *             login with the branding editor. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">Managed login</a>.</p>
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
