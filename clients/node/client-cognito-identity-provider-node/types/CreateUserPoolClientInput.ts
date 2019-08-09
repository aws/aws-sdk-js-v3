import { _AnalyticsConfigurationType } from "./_AnalyticsConfigurationType";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to create a user pool client.</p>
 */
export interface CreateUserPoolClientInput {
  /**
   * <p>The user pool ID for the user pool where you want to create a user pool client.</p>
   */
  UserPoolId: string;

  /**
   * <p>The client name for the user pool client you would like to create.</p>
   */
  ClientName: string;

  /**
   * <p>Boolean to specify whether you want to generate a secret for the user pool client being created.</p>
   */
  GenerateSecret?: boolean;

  /**
   * <p>The time limit, in days, after which the refresh token is no longer valid and cannot be used.</p>
   */
  RefreshTokenValidity?: number;

  /**
   * <p>The read attributes.</p>
   */
  ReadAttributes?: Array<string> | Iterable<string>;

  /**
   * <p>The user pool attributes that the app client can write to.</p> <p>If your app client allows users to sign in through an identity provider, this array must include all attributes that are mapped to identity provider attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an identity provider. If your app client lacks write access to a mapped attribute, Amazon Cognito throws an error when it attempts to update the attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying Identity Provider Attribute Mappings for Your User Pool</a>.</p>
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
   * <p>A list of provider names for the identity providers that are supported on this client. The following are supported: <code>COGNITO</code>, <code>Facebook</code>, <code>Google</code> and <code>LoginWithAmazon</code>.</p>
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
   * <p>Set to <code>True</code> if the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.</p>
   */
  AllowedOAuthFlowsUserPoolClient?: boolean;

  /**
   * <p>The Amazon Pinpoint analytics configuration for collecting metrics for this user pool.</p>
   */
  AnalyticsConfiguration?: _AnalyticsConfigurationType;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
