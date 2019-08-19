/**
 * <p>Request parameters to use when integrating with Amazon Cognito to authenticate users.</p>
 */
export interface _AuthenticateCognitoActionConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Cognito user pool.</p>
   */
  UserPoolArn: string;

  /**
   * <p>The ID of the Amazon Cognito user pool client.</p>
   */
  UserPoolClientId: string;

  /**
   * <p>The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.</p>
   */
  UserPoolDomain: string;

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
}

export interface _UnmarshalledAuthenticateCognitoActionConfig
  extends _AuthenticateCognitoActionConfig {
  /**
   * <p>The query parameters (up to 10) to include in the redirect request to the authorization endpoint.</p>
   */
  AuthenticationRequestExtraParams?: { [key: string]: string };
}
