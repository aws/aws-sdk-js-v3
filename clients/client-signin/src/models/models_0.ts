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

/**
 * Input for DeleteConsoleAuthorizationConfiguration operation
 * @public
 */
export interface DeleteConsoleAuthorizationConfigurationInput {
  /**
   * Target account identifier
   * @public
   */
  targetId?: string | undefined;
}

/**
 * Output for DeleteConsoleAuthorizationConfiguration operation
 * @public
 */
export interface DeleteConsoleAuthorizationConfigurationOutput {
  /**
   * Target account identifier
   * @public
   */
  targetId: string | undefined;

  /**
   * Authorization scope
   * @public
   */
  scope: string | undefined;

  /**
   * Whether console authorization is enabled
   * @public
   */
  consoleAuthorizationEnabled: boolean | undefined;
}

/**
 * Input for DeleteResourcePermissionStatement operation
 * @public
 */
export interface DeleteResourcePermissionStatementInput {
  /**
   * Unique identifier of the permission statement to delete
   * @public
   */
  statementId: string | undefined;

  /**
   * Idempotency token for the request
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Output for DeleteResourcePermissionStatement operation
 * @public
 */
export interface DeleteResourcePermissionStatementOutput {}

/**
 * Input for GetConsoleAuthorizationConfiguration operation
 * @public
 */
export interface GetConsoleAuthorizationConfigurationInput {
  /**
   * Target account identifier
   * @public
   */
  targetId?: string | undefined;
}

/**
 * Output for GetConsoleAuthorizationConfiguration operation
 * @public
 */
export interface GetConsoleAuthorizationConfigurationOutput {
  /**
   * Target account identifier
   * @public
   */
  targetId: string | undefined;

  /**
   * Authorization scope
   * @public
   */
  scope: string | undefined;

  /**
   * Whether console authorization is enabled
   * @public
   */
  consoleAuthorizationEnabled: boolean | undefined;
}

/**
 * Input for GetResourcePolicy operation
 * @public
 */
export interface GetResourcePolicyInput {}

/**
 * Individual policy statement within a resource-based policy
 * @public
 */
export interface PolicyStatement {
  /**
   * Effect of the policy statement (Allow/Deny)
   * @public
   */
  effect?: string | undefined;

  /**
   * Principal the statement applies to
   * @public
   */
  principal?: Record<string, string> | undefined;

  /**
   * Actions the statement controls
   * @public
   */
  action?: string[] | undefined;

  /**
   * Resource the statement applies to
   * @public
   */
  resource?: string | undefined;

  /**
   * Condition block for the statement
   * @public
   */
  condition?: Record<string, Record<string, string[]>> | undefined;
}

/**
 * SignIn resource-based policy document
 * @public
 */
export interface SigninResourceBasedPolicy {
  /**
   * Policy version
   * @public
   */
  version?: string | undefined;

  /**
   * Policy statements
   * @public
   */
  statement?: PolicyStatement[] | undefined;
}

/**
 * Output for GetResourcePolicy operation
 * @public
 */
export interface GetResourcePolicyOutput {
  /**
   * The account's SignIn resource-based policy
   * @public
   */
  signinResourceBasedPolicy: SigninResourceBasedPolicy | undefined;
}

/**
 * Input structure for IntrospectOAuth2TokenWithIAM operation
 *
 * RFC 7662 §2.1 introspection request. Contains the token to inspect and an
 * optional hint about the token's type.
 * @public
 */
export interface IntrospectOAuth2TokenWithIAMRequest {
  /**
   * The string value of the token to introspect.
   * May be either an access_token or a refresh_token issued by AWS Sign-In.
   * @public
   */
  token: string | undefined;

  /**
   * Optional hint about the type of the token submitted for introspection.
   * The server uses this hint to optimize lookup, but still falls back to
   * the other token type on miss. Allowed values: access_token, refresh_token.
   * @public
   */
  tokenTypeHint?: string | undefined;
}

/**
 * Output structure for IntrospectOAuth2TokenWithIAM operation
 *
 * RFC 7662 §2.2 introspection response. Only `active` is required; all other
 * claims are omitted when the token is inactive.
 * @public
 */
export interface IntrospectOAuth2TokenWithIAMResponse {
  /**
   * Indicates whether the token is currently active. `true` only when the
   * token is valid, has not expired, has not been revoked, and belongs to
   * the caller's account.
   * @public
   */
  active: boolean | undefined;

  /**
   * Client identifier for the OAuth 2.0 client that requested the token.
   * @public
   */
  clientId?: string | undefined;

  /**
   * User identifier matching sts:GetCallerIdentity's `UserId` field for the
   * token's subject principal (e.g. "AIDAEXAMPLE" for an IAM user, or
   * "AROAEXAMPLE:session-name" for an assumed role).
   * @public
   */
  userId?: string | undefined;

  /**
   * Indicates which kind of token was introspected.
   * One of "access_token" or "refresh_token".
   * @public
   */
  tokenType?: string | undefined;

  /**
   * Token expiration time as a NumericDate (Unix epoch seconds).
   * @public
   */
  exp?: number | undefined;

  /**
   * Token issuance time as a NumericDate (Unix epoch seconds).
   * @public
   */
  iat?: number | undefined;

  /**
   * Token "not before" time as a NumericDate (Unix epoch seconds).
   * @public
   */
  nbf?: number | undefined;

  /**
   * Subject of the token: the IAM principal ARN. For assumed-role sessions,
   * this is the session ARN (matches sts:GetCallerIdentity's `Arn` field),
   * e.g. arn:aws:sts::123456789012:assumed-role/MyRole/session-name.
   * @public
   */
  sub?: string | undefined;

  /**
   * Audience of the token: the OAuth resource the token is scoped to
   * (for example, "aws-mcp.amazonaws.com"). Omitted for refresh tokens.
   * @public
   */
  aud?: string | undefined;

  /**
   * Issuer of the token. Always "signin.amazonaws.com" for AWS Sign-In.
   * @public
   */
  iss?: string | undefined;

  /**
   * Unique identifier for the token.
   * @public
   */
  jti?: string | undefined;

  /**
   * 12-digit AWS account ID of the token's subject principal.
   * @public
   */
  accountId?: string | undefined;

  /**
   * AWS Sign-In session ARN bound to the token, of the form
   * arn:aws:signin:\{region\}:\{account\}:session/\{uuid\}.
   * @public
   */
  signinSession?: string | undefined;

  /**
   * The OAuth resource the token is scoped to during Human OAuth flow.
   * Only present for refresh token introspection.
   * @public
   */
  resource?: string | undefined;
}

/**
 * Input for ListResourcePermissionStatements operation
 * @public
 */
export interface ListResourcePermissionStatementsInput {
  /**
   * Maximum number of results to return
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary of a permission statement
 * @public
 */
export interface PermissionStatementSummary {
  /**
   * Unique identifier for the permission statement
   * @public
   */
  sid: string | undefined;

  /**
   * Condition block for the permission statement
   * @public
   */
  condition?: Record<string, Record<string, string[]>> | undefined;
}

/**
 * Output for ListResourcePermissionStatements operation
 * @public
 */
export interface ListResourcePermissionStatementsOutput {
  /**
   * List of permission statement summaries
   * @public
   */
  permissionStatements: PermissionStatementSummary[] | undefined;

  /**
   * Token for next page of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for PutConsoleAuthorizationConfiguration operation
 * @public
 */
export interface PutConsoleAuthorizationConfigurationInput {
  /**
   * Target account identifier
   * @public
   */
  targetId?: string | undefined;
}

/**
 * Output for PutConsoleAuthorizationConfiguration operation
 * @public
 */
export interface PutConsoleAuthorizationConfigurationOutput {
  /**
   * Target account identifier
   * @public
   */
  targetId: string | undefined;

  /**
   * Authorization scope
   * @public
   */
  scope: string | undefined;

  /**
   * Whether console authorization is enabled
   * @public
   */
  consoleAuthorizationEnabled: boolean | undefined;
}

/**
 * Input for PutResourcePermissionStatement operation
 * @public
 */
export interface PutResourcePermissionStatementInput {
  /**
   * VPC identifier to restrict console access
   * @public
   */
  sourceVpc?: string | undefined;

  /**
   * SignIn VPC endpoint identifier
   * @public
   */
  signinSourceVpce?: string | undefined;

  /**
   * Console VPC endpoint identifier
   * @public
   */
  consoleSourceVpce?: string | undefined;

  /**
   * Source IP address within VPC
   * @public
   */
  vpcSourceIp?: string | undefined;

  /**
   * Source IP address
   * @public
   */
  sourceIp?: string | undefined;

  /**
   * AWS region where the VPC and VPC endpoint reside
   * Required when sourceVpc or signinSourceVpce/consoleSourceVpce is provided
   * @public
   */
  requestedRegion?: string | undefined;

  /**
   * Principal to exclude from the permission statement
   * @public
   */
  excludedPrincipal?: string | undefined;

  /**
   * Idempotency token for the request
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Output for PutResourcePermissionStatement operation
 * @public
 */
export interface PutResourcePermissionStatementOutput {
  /**
   * Unique identifier for the created permission statement
   * @public
   */
  statementId: string | undefined;
}

/**
 * Input structure for RevokeOAuth2TokenWithIAM operation
 *
 * RFC 7009 §2.1 revocation request. Contains the refresh_token to revoke.
 * @public
 */
export interface RevokeOAuth2TokenWithIAMRequest {
  /**
   * The refresh_token to revoke. Must be a refresh_token issued by AWS
   * Sign-In (prefix "ASOR"); access_tokens are not accepted for revocation.
   * @public
   */
  token: string | undefined;
}

/**
 * Output structure for RevokeOAuth2TokenWithIAM operation
 *
 * RFC 7009 §2.2 revocation response. The endpoint returns 200 OK with an
 * empty body on success; there are no response fields.
 * @public
 */
export interface RevokeOAuth2TokenWithIAMResponse {}
