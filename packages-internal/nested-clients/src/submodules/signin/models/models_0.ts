// smithy-typescript generated code
/**
 * AWS credentials structure containing temporary access credentials
 *
 * Scoped, temporary AWS credentials with a 15-minute duration.
 * @public
 */
export interface AccessToken {
  /**
   * AWS access key ID for temporary credentials
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * AWS secret access key for temporary credentials
   * @public
   */
  secretAccessKey: string | undefined;

  /**
   * AWS session token for temporary credentials
   * @public
   */
  sessionToken: string | undefined;
}

/**
 * Request body payload for CreateOAuth2Token operation
 *
 * The operation type is determined by the grant_type parameter:
 * - grant_type=authorization_code: Requires code, redirect_uri, code_verifier
 * - grant_type=refresh_token: Requires refresh_token
 * @public
 */
export interface CreateOAuth2TokenRequestBody {
  /**
   * The client identifier (ARN) used during Sign-In onboarding
   * Required for both authorization code and refresh token flows
   * @public
   */
  clientId: string | undefined;

  /**
   * OAuth 2.0 grant type - determines which flow is used
   * Must be "authorization_code" or "refresh_token"
   * @public
   */
  grantType: string | undefined;

  /**
   * The authorization code received from /v1/authorize
   * Required only when grant_type=authorization_code
   * @public
   */
  code?: string | undefined;

  /**
   * The redirect URI that must match the original authorization request
   * Required only when grant_type=authorization_code
   * @public
   */
  redirectUri?: string | undefined;

  /**
   * PKCE code verifier to prove possession of the original code challenge
   * Required only when grant_type=authorization_code
   * @public
   */
  codeVerifier?: string | undefined;

  /**
   * The refresh token returned from auth_code redemption
   * Required only when grant_type=refresh_token
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
   * Flattened token operation inputs
   * The specific operation is determined by grant_type in the request body
   * @public
   */
  tokenInput: CreateOAuth2TokenRequestBody | undefined;
}

/**
 * Response body payload for CreateOAuth2Token operation
 *
 * The response content depends on the grant_type from the request:
 * - grant_type=authorization_code: Returns all fields including refresh_token and id_token
 * - grant_type=refresh_token: Returns access_token, token_type, expires_in, refresh_token (no id_token)
 * @public
 */
export interface CreateOAuth2TokenResponseBody {
  /**
   * Scoped-down AWS credentials (15 minute duration)
   * Present for both authorization code redemption and token refresh
   * @public
   */
  accessToken: AccessToken | undefined;

  /**
   * Token type indicating this is AWS SigV4 credentials
   * Value is "aws_sigv4" for both flows
   * @public
   */
  tokenType: string | undefined;

  /**
   * Time to expiry in seconds (maximum 900)
   * Present for both authorization code redemption and token refresh
   * @public
   */
  expiresIn: number | undefined;

  /**
   * Encrypted refresh token with cnf.jkt (SHA-256 thumbprint of presented jwk)
   * Always present in responses (required for both flows)
   * @public
   */
  refreshToken: string | undefined;

  /**
   * ID token containing user identity information
   * Present only in authorization code redemption response (grant_type=authorization_code)
   * Not included in token refresh responses
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
   * Flattened token operation outputs
   * The specific response fields depend on the grant_type used in the request
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
   * OAuth 2.0 grant type. Must be "client_credentials".
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
 * Contains the JWT access token, token type, and expiration per RFC 6749 §5.1.
 * @public
 */
export interface CreateOAuth2TokenWithIAMResponse {
  /**
   * JWT access token containing principal identity, resource scope, and session metadata
   * @public
   */
  accessToken: string | undefined;

  /**
   * Always "Bearer" per OAuth 2.1 specification
   * @public
   */
  tokenType: string | undefined;

  /**
   * Token lifetime in seconds. Value is the minimum of session validity and 1 hour.
   * @public
   */
  expiresIn: number | undefined;
}
