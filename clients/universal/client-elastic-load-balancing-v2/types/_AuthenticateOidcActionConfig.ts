/**
 * <p>Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.</p>
 */
export interface _AuthenticateOidcActionConfig {
  /**
   * <p>The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  Issuer: string;

  /**
   * <p>The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  AuthorizationEndpoint: string;

  /**
   * <p>The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  TokenEndpoint: string;

  /**
   * <p>The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  UserInfoEndpoint: string;

  /**
   * <p>The OAuth 2.0 client identifier.</p>
   */
  ClientId: string;

  /**
   * <p>The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.</p>
   */
  ClientSecret?: string;

  /**
   * <p>The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.</p>
   */
  SessionCookieName?: string;

  /**
   * <p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>
   */
  Scope?: string;

  /**
   * <p>The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).</p>
   */
  SessionTimeout?: number;

  /**
   * <p>The query parameters (up to 10) to include in the redirect request to the authorization endpoint.</p>
   */
  AuthenticationRequestExtraParams?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>
   */
  OnUnauthenticatedRequest?: "deny" | "allow" | "authenticate" | string;

  /**
   * <p>Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.</p>
   */
  UseExistingClientSecret?: boolean;
}

export interface _UnmarshalledAuthenticateOidcActionConfig
  extends _AuthenticateOidcActionConfig {
  /**
   * <p>The query parameters (up to 10) to include in the redirect request to the authorization endpoint.</p>
   */
  AuthenticationRequestExtraParams?: { [key: string]: string };
}
