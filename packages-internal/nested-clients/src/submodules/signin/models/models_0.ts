// smithy-typescript generated code
/**
 * Contains the scoped, temporary AWS credentials used to sign requests with SigV4. Valid for 15 minutes.
 * @public
 */
export interface AccessToken {
  /**
   * The AWS access key ID for the temporary credentials.
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * The AWS secret access key used to sign requests.
   * @public
   */
  secretAccessKey: string | undefined;

  /**
   * The session token that validates the temporary security credentials.
   * @public
   */
  sessionToken: string | undefined;
}

/**
 * The request body for creating an OAuth 2.0 token. Supports both the authorization code and
 * refresh token flows, selected by the "grant_type" parameter.
 * @public
 */
export interface CreateOAuth2TokenRequestBody {
  /**
   * The OAuth 2.0 client identifier. Expected values: "arn:aws:signin:::devtools/same-device"
   * or "arn:aws:signin:::devtools/cross-device".
   * @public
   */
  clientId: string | undefined;

  /**
   * The OAuth 2.0 grant type. Supported values:
   * - "authorization_code" - Exchange an authorization code for tokens.
   * - "refresh_token" - Use a refresh token to obtain a new access token.
   * @public
   */
  grantType: string | undefined;

  /**
   * The authorization code received from the "/v1/authorize" endpoint.
   * Required when "grant_type=authorization_code".
   * @public
   */
  code?: string | undefined;

  /**
   * The redirect URI that was used in the original authorization request. Must match exactly.
   * Required when "grant_type=authorization_code".
   * @public
   */
  redirectUri?: string | undefined;

  /**
   * The PKCE code verifier that proves possession of the original code challenge.
   * Required when "grant_type=authorization_code".
   * @public
   */
  codeVerifier?: string | undefined;

  /**
   * The refresh token issued by a previous token response.
   * Required when "grant_type=refresh_token".
   * @public
   */
  refreshToken?: string | undefined;
}

/**
 * Input structure for CreateOAuth2Token operation
 *
 * Contains flattened token operation inputs for both authorization code and refresh token flows.
 * The operation type is determined by the grant_type parameter in the request body.
 * @public
 */
export interface CreateOAuth2TokenRequest {
  /**
   * Flattened token operation inputs. The "grant_type" in the request body determines the specific operation.
   * @public
   */
  tokenInput: CreateOAuth2TokenRequestBody | undefined;
}

/**
 * The response body for an OAuth 2.0 token request. The fields returned depend on the "grant_type".
 * The authorization code flow returns "refresh_token" and "id_token". The refresh token flow omits "id_token".
 * @public
 */
export interface CreateOAuth2TokenResponseBody {
  /**
   * The access token issued by the authorization server. The token contains temporary
   * AWS security credentials that you use to sign requests with SigV4.
   * @public
   */
  accessToken: AccessToken | undefined;

  /**
   * The type of token issued. Value is "aws_sigv4".
   * @public
   */
  tokenType: string | undefined;

  /**
   * The number of seconds until the access token expires. Maximum value is 900 seconds (15 minutes).
   * @public
   */
  expiresIn: number | undefined;

  /**
   * A refresh token that can be used to obtain new access tokens without re-authenticating.
   * @public
   */
  refreshToken: string | undefined;

  /**
   * A JSON Web Token (JWT) containing user identity claims. Present only when
   * "grant_type=authorization_code". Not included in refresh token responses.
   * @public
   */
  idToken?: string | undefined;
}

/**
 * Output structure for CreateOAuth2Token operation
 *
 * Contains flattened token operation outputs for both authorization code and refresh token flows.
 * The response content depends on the grant_type from the original request.
 * @public
 */
export interface CreateOAuth2TokenResponse {
  /**
   * Flattened token operation outputs.
   * The specific response fields depend on the grant_type used in the request.
   * @public
   */
  tokenOutput: CreateOAuth2TokenResponseBody | undefined;
}

/**
 * Input structure for CreateOAuth2TokenWithIAM operation
 * @public
 */
export interface CreateOAuth2TokenWithIAMRequest {
  /**
   * The OAuth 2.0 grant type. Must be "client_credentials".
   * @public
   */
  grantType: string | undefined;

  /**
   * The OAuth resource for which the access token is requested.
   * Example: "aws-mcp.amazonaws.com".
   * @public
   */
  resource: string | undefined;
}

/**
 * Output structure for CreateOAuth2TokenWithIAM operation
 *
 * Contains the access token, token type, and expiration as defined in RFC 6749 §5.1.
 * @public
 */
export interface CreateOAuth2TokenWithIAMResponse {
  /**
   * Access token containing principal identity, resource scope, and session metadata.
   * @public
   */
  accessToken: string | undefined;

  /**
   * The token type. Always "Bearer" as defined in RFC 6749.
   * @public
   */
  tokenType: string | undefined;

  /**
   * Token lifetime in seconds. Value is the minimum of the caller's session validity and 1 hour (3600 seconds).
   * @public
   */
  expiresIn: number | undefined;
}
