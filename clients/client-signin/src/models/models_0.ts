// smithy-typescript generated code
import type { ClientType, SessionStatus } from "./enums";

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
 * A session that could not be revoked
 * @public
 */
export interface BatchRevokeSessionError {
  /**
   * The session ARN
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The error code
   * @public
   */
  code: string | undefined;

  /**
   * The error message
   * @public
   */
  message: string | undefined;
}

/**
 * Input for BatchRevokeSessions operation
 * @public
 */
export interface BatchRevokeSessionsInput {
  /**
   * The identity that owns the sessions. Omit to use the caller. Specify arn:aws:iam::\{account-id\}:* to revoke
   * any session in the account.
   * @public
   */
  principalArn?: string | undefined;

  /**
   * The ARNs of the sessions to revoke
   * @public
   */
  sessionArns: string[] | undefined;

  /**
   * The reason for revoking the sessions
   * @public
   */
  reason?: string | undefined;
}

/**
 * A session that was revoked
 * @public
 */
export interface RevokedSession {
  /**
   * The revoked session ARN
   * @public
   */
  sessionArn: string | undefined;
}

/**
 * Output for BatchRevokeSessions operation
 * @public
 */
export interface BatchRevokeSessionsOutput {
  /**
   * Sessions that were revoked
   * @public
   */
  revokedSessions: RevokedSession[] | undefined;

  /**
   * Sessions that could not be revoked
   * @public
   */
  errors: BatchRevokeSessionError[] | undefined;
}

/**
 * Input structure for CreateBearerToken operation
 * @public
 */
export interface CreateBearerTokenRequest {
  /**
   * The grant type. Must be "client_credentials".
   * @public
   */
  grantType: string | undefined;

  /**
   * The AWS service the bearer token is for.
   * Example: "ecr.amazonaws.com".
   * @public
   */
  resource: string | undefined;

  /**
   * The requested token lifetime in seconds, from 300 (5 minutes) up to the maximum allowed for the service, currently 43200 (12 hours). If omitted, the token is valid for 12 hours.
   * @public
   */
  durationSeconds?: number | undefined;
}

/**
 * Output structure for CreateBearerToken operation
 *
 * Contains the bearer token, its type, and its lifetime.
 * @public
 */
export interface CreateBearerTokenResponse {
  /**
   * The bearer token. Present it to the AWS service named in the request.
   * @public
   */
  accessToken: string | undefined;

  /**
   * The token type. Always "Bearer".
   * @public
   */
  tokenType: string | undefined;

  /**
   * Token lifetime in seconds.
   * @public
   */
  expiresIn: number | undefined;
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
   * The access token containing principal identity, resource scope, and session metadata.
   * @public
   */
  accessToken: string | undefined;

  /**
   * The token type. Always "Bearer" as defined in RFC 6749.
   * @public
   */
  tokenType: string | undefined;

  /**
   * The token lifetime in seconds. Value is the minimum of the caller's session validity and 1 hour (3600 seconds).
   * @public
   */
  expiresIn: number | undefined;
}

/**
 * Input structure for CreateOAuth2TokenWithTokenExchange operation
 * @public
 */
export interface CreateOAuth2TokenWithTokenExchangeRequest {
  /**
   * The OAuth 2.0 grant type. Currently supports "urn:ietf:params:oauth:grant-type:token-exchange"
   * and "urn:ietf:params:oauth:grant-type:jwt-bearer".
   * @public
   */
  grantType: string | undefined;

  /**
   * The subject token that represents the identity of the party on whose behalf the request is made.
   * Required when "grant_type=urn:ietf:params:oauth:grant-type:token-exchange".
   * @public
   */
  subjectToken?: string | undefined;

  /**
   * The token type of the subject token. Currently only supports "urn:ietf:params:oauth:token-type:jwt".
   * Required when "grant_type=urn:ietf:params:oauth:grant-type:token-exchange".
   * @public
   */
  subjectTokenType?: string | undefined;

  /**
   * The JWT authorization grant, as defined in RFC 7523.
   * Required when "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer".
   * @public
   */
  assertion?: string | undefined;

  /**
   * The OAuth 2.0 client identifier.
   * If provided with "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer", must match the assertion's "client_id" claim.
   * @public
   */
  clientId?: string | undefined;

  /**
   * The OAuth resource for which the access token is requested:
   *
   * - "grant_type=urn:ietf:params:oauth:grant-type:token-exchange": Required. Must be a service principal. Example: "glue.amazonaws.com".
   * - "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer": Required when the assertion has no "resource" claim, otherwise must match it. Must be a URI. Example: "https://aws-mcp.us-east-1.api.aws/mcp".
   * @public
   */
  resource?: string | undefined;

  /**
   * The IAM managed policy Amazon Resource Names (ARNs) to apply as session policies that further
   * scope down the permissions of the issued access token, provided as a space-delimited list.
   * Example: "arn:aws:iam::444455556666:policy/MyPolicy".
   *
   * If provided with "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer", must match the assertion's "scope" claim.
   * @public
   */
  scope?: string | undefined;
}

/**
 * Output structure for CreateOAuth2TokenWithTokenExchange operation.
 *
 * Contains the access token, token type, and expiration as defined in RFC 6749 §5.1, plus fields specific to the grant type.
 * @public
 */
export interface CreateOAuth2TokenWithTokenExchangeResponse {
  /**
   * The access token containing principal identity, resource scope, and session metadata.
   * @public
   */
  accessToken: string | undefined;

  /**
   * The token type of the issued token. Returned when "grant_type=urn:ietf:params:oauth:grant-type:token-exchange".
   * Value is "urn:ietf:params:oauth:token-type:access_token" as defined in RFC 8693 §2.2.1.
   * @public
   */
  issuedTokenType?: string | undefined;

  /**
   * The token type. Currently only supports "Bearer" as defined in RFC 6749.
   * @public
   */
  tokenType: string | undefined;

  /**
   * The token lifetime in seconds. Value is the minimum of the provided token's validity and 1 hour (3600 seconds).
   * @public
   */
  expiresIn: number | undefined;

  /**
   * The resource the access token is scoped to.
   * Returned when "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer".
   * @public
   */
  resource?: string | undefined;

  /**
   * The IAM managed policy ARNs applied as session policies, as a space-delimited list.
   * Returned when "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer" and the assertion has a scope.
   * @public
   */
  scope?: string | undefined;
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
 * Input for GetSession operation
 * @public
 */
export interface GetSessionInput {
  /**
   * The ARN of the session to retrieve
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The identity that owns the session. Omit to use the caller. Specify arn:aws:iam::\{account-id\}:* to retrieve
   * any session in the account.
   * @public
   */
  principalArn?: string | undefined;
}

/**
 * Output for GetSession operation
 * @public
 */
export interface GetSessionOutput {
  /**
   * The session ARN
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The IAM identity that owns the session
   * @public
   */
  principalArn: string | undefined;

  /**
   * The IAM role for the session, when the owner is a role
   * @public
   */
  role?: string | undefined;

  /**
   * The session status
   * @public
   */
  status?: SessionStatus | undefined;

  /**
   * The OAuth client that created the session
   * @public
   */
  clientId?: string | undefined;

  /**
   * The type of OAuth client that created the session
   * @public
   */
  clientType?: ClientType | undefined;

  /**
   * The resource that the session's tokens are bound to
   * @public
   */
  resource?: string | undefined;

  /**
   * The time the session was created, in Unix epoch seconds
   * @public
   */
  issuedAt: number | undefined;

  /**
   * The time the session expires, in Unix epoch seconds
   * @public
   */
  expiresAt: number | undefined;

  /**
   * The time the session was last refreshed, in Unix epoch seconds
   * @public
   */
  lastUsedAt?: number | undefined;

  /**
   * The AWS Region where the session was created
   * @public
   */
  issuedInRegion?: string | undefined;

  /**
   * The ARN of the session this session originated from
   * @public
   */
  originSessionArn?: string | undefined;

  /**
   * The user agent captured when the session was created or last refreshed
   * @public
   */
  userAgent?: string | undefined;
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
   * The access token or refresh token issued by AWS Sign-In.
   * @public
   */
  token: string | undefined;

  /**
   * An optional hint about the type of the token submitted for introspection, as defined in RFC 7662 §2.1.
   * The server checks both token types regardless of the hint. Allowed values: "access_token", "refresh_token".
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
   * Indicates whether the token is currently active. Returns "true" only when the token is valid,
   * has not expired, has not been revoked, and belongs to the caller's account.
   * @public
   */
  active: boolean | undefined;

  /**
   * Client identifier for the OAuth 2.0 client that requested the token.
   * @public
   */
  clientId?: string | undefined;

  /**
   * User identifier matching the "UserId" field from "sts:GetCallerIdentity" for the token's subject principal.
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
   * The IAM principal Amazon Resource Name (ARN). For assumed-role sessions, this is the session ARN.
   * @public
   */
  sub?: string | undefined;

  /**
   * The OAuth resource the token is scoped to. Omitted for refresh tokens.
   * Example: "aws-mcp.amazonaws.com".
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
   * The OAuth resource the token is scoped to. Only present for refresh token introspection.
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
 * Input for ListSessions operation
 * @public
 */
export interface ListSessionsInput {
  /**
   * The identity whose sessions to list. Omit to list the caller's own sessions. Specify
   * arn:aws:iam::\{account-id\}:* to list all sessions in the account.
   * @public
   */
  principalArn?: string | undefined;

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

  /**
   * Returns only sessions with this status
   * @public
   */
  status?: SessionStatus | undefined;

  /**
   * Returns only sessions created by this OAuth client
   * @public
   */
  clientId?: string | undefined;

  /**
   * Returns only sessions created at or after this time, in Unix epoch seconds
   * @public
   */
  issuedAfter?: number | undefined;

  /**
   * Returns only sessions created before this time, in Unix epoch seconds
   * @public
   */
  issuedBefore?: number | undefined;
}

/**
 * Summary of a sign-in session
 * @public
 */
export interface Session {
  /**
   * The session ARN
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The IAM identity that owns the session
   * @public
   */
  principalArn: string | undefined;

  /**
   * The IAM role for the session, when the owner is a role
   * @public
   */
  role?: string | undefined;

  /**
   * The session status
   * @public
   */
  status?: SessionStatus | undefined;

  /**
   * The time the session was created, in Unix epoch seconds
   * @public
   */
  issuedAt: number | undefined;

  /**
   * The time the session expires, in Unix epoch seconds
   * @public
   */
  expiresAt: number | undefined;

  /**
   * The OAuth client that created the session
   * @public
   */
  clientId?: string | undefined;

  /**
   * The type of OAuth client that created the session
   * @public
   */
  clientType?: ClientType | undefined;

  /**
   * The resource that the session's tokens are bound to
   * @public
   */
  resource?: string | undefined;
}

/**
 * Output for ListSessions operation
 * @public
 */
export interface ListSessionsOutput {
  /**
   * List of session summaries
   * @public
   */
  items: Session[] | undefined;

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
   * The refresh token to revoke. Must be a refresh token issued by AWS Sign-In.
   * Access tokens are not accepted for revocation.
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
