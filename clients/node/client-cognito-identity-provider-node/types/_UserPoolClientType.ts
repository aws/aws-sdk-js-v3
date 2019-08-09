import {
  _AnalyticsConfigurationType,
  _UnmarshalledAnalyticsConfigurationType
} from "./_AnalyticsConfigurationType";

/**
 * <p>Contains information about a user pool client.</p>
 */
export interface _UserPoolClientType {
  /**
   * <p>The user pool ID for the user pool client.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The client name from the user pool request of the client type.</p>
   */
  ClientName?: string;

  /**
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId?: string;

  /**
   * <p>The client secret from the user pool request of the client type.</p>
   */
  ClientSecret?: string;

  /**
   * <p>The date the user pool client was last modified.</p>
   */
  LastModifiedDate?: Date | string | number;

  /**
   * <p>The date the user pool client was created.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>The time limit, in days, after which the refresh token is no longer valid and cannot be used.</p>
   */
  RefreshTokenValidity?: number;

  /**
   * <p>The Read-only attributes.</p>
   */
  ReadAttributes?: Array<string> | Iterable<string>;

  /**
   * <p>The writeable attributes.</p>
   */
  WriteAttributes?: Array<string> | Iterable<string>;

  /**
   * <p>The explicit authentication flows.</p>
   */
  ExplicitAuthFlows?:
    | Array<
        | "ADMIN_NO_SRP_AUTH"
        | "CUSTOM_AUTH_FLOW_ONLY"
        | "USER_PASSWORD_AUTH"
        | string
      >
    | Iterable<
        | "ADMIN_NO_SRP_AUTH"
        | "CUSTOM_AUTH_FLOW_ONLY"
        | "USER_PASSWORD_AUTH"
        | string
      >;

  /**
   * <p>A list of provider names for the identity providers that are supported on this client.</p>
   */
  SupportedIdentityProviders?: Array<string> | Iterable<string>;

  /**
   * <p>A list of allowed redirect (callback) URLs for the identity providers.</p> <p>A redirect URI must:</p> <ul> <li> <p>Be an absolute URI.</p> </li> <li> <p>Be registered with the authorization server.</p> </li> <li> <p>Not include a fragment component.</p> </li> </ul> <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 - Redirection Endpoint</a>.</p> <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only.</p> <p>App callback URLs such as myapp://example are also supported.</p>
   */
  CallbackURLs?: Array<string> | Iterable<string>;

  /**
   * <p>A list of allowed logout URLs for the identity providers.</p>
   */
  LogoutURLs?: Array<string> | Iterable<string>;

  /**
   * <p>The default redirect URI. Must be in the <code>CallbackURLs</code> list.</p> <p>A redirect URI must:</p> <ul> <li> <p>Be an absolute URI.</p> </li> <li> <p>Be registered with the authorization server.</p> </li> <li> <p>Not include a fragment component.</p> </li> </ul> <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 - Redirection Endpoint</a>.</p> <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only.</p> <p>App callback URLs such as myapp://example are also supported.</p>
   */
  DefaultRedirectURI?: string;

  /**
   * <p>Set to <code>code</code> to initiate a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the token endpoint.</p> <p>Set to <code>token</code> to specify that the client should get the access token (and, optionally, ID token, based on scopes) directly.</p>
   */
  AllowedOAuthFlows?:
    | Array<"code" | "implicit" | "client_credentials" | string>
    | Iterable<"code" | "implicit" | "client_credentials" | string>;

  /**
   * <p>A list of allowed <code>OAuth</code> scopes. Currently supported values are <code>"phone"</code>, <code>"email"</code>, <code>"openid"</code>, and <code>"Cognito"</code>.</p>
   */
  AllowedOAuthScopes?: Array<string> | Iterable<string>;

  /**
   * <p>Set to TRUE if the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.</p>
   */
  AllowedOAuthFlowsUserPoolClient?: boolean;

  /**
   * <p>The Amazon Pinpoint analytics configuration for the user pool client.</p>
   */
  AnalyticsConfiguration?: _AnalyticsConfigurationType;
}

export interface _UnmarshalledUserPoolClientType extends _UserPoolClientType {
  /**
   * <p>The date the user pool client was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the user pool client was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The Read-only attributes.</p>
   */
  ReadAttributes?: Array<string>;

  /**
   * <p>The writeable attributes.</p>
   */
  WriteAttributes?: Array<string>;

  /**
   * <p>The explicit authentication flows.</p>
   */
  ExplicitAuthFlows?: Array<
    | "ADMIN_NO_SRP_AUTH"
    | "CUSTOM_AUTH_FLOW_ONLY"
    | "USER_PASSWORD_AUTH"
    | string
  >;

  /**
   * <p>A list of provider names for the identity providers that are supported on this client.</p>
   */
  SupportedIdentityProviders?: Array<string>;

  /**
   * <p>A list of allowed redirect (callback) URLs for the identity providers.</p> <p>A redirect URI must:</p> <ul> <li> <p>Be an absolute URI.</p> </li> <li> <p>Be registered with the authorization server.</p> </li> <li> <p>Not include a fragment component.</p> </li> </ul> <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 - Redirection Endpoint</a>.</p> <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only.</p> <p>App callback URLs such as myapp://example are also supported.</p>
   */
  CallbackURLs?: Array<string>;

  /**
   * <p>A list of allowed logout URLs for the identity providers.</p>
   */
  LogoutURLs?: Array<string>;

  /**
   * <p>Set to <code>code</code> to initiate a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the token endpoint.</p> <p>Set to <code>token</code> to specify that the client should get the access token (and, optionally, ID token, based on scopes) directly.</p>
   */
  AllowedOAuthFlows?: Array<
    "code" | "implicit" | "client_credentials" | string
  >;

  /**
   * <p>A list of allowed <code>OAuth</code> scopes. Currently supported values are <code>"phone"</code>, <code>"email"</code>, <code>"openid"</code>, and <code>"Cognito"</code>.</p>
   */
  AllowedOAuthScopes?: Array<string>;

  /**
   * <p>The Amazon Pinpoint analytics configuration for the user pool client.</p>
   */
  AnalyticsConfiguration?: _UnmarshalledAnalyticsConfigurationType;
}
