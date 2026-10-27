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

/**
 * Input structure for CreateOAuth2TokenWithTokenExchange operation
 * @public
 */
export interface CreateOAuth2TokenWithTokenExchangeRequest {
  /**
   * The OAuth 2.0 grant type. Currently only supports "urn:ietf:params:oauth:grant-type:token-exchange".
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
   * The OAuth resource for which the access token is requested.
   * Required when "grant_type=urn:ietf:params:oauth:grant-type:token-exchange".
   * Example: "glue.amazonaws.com".
   * @public
   */
  resource?: string | undefined;

  /**
   * IAM managed policy Amazon Resource Names (ARNs) to apply as session policies that further
   * scope down the permissions of the issued access token, provided as a space-delimited list.
   * Example: "arn:aws:iam::444455556666:policy/MyPolicy".
   * @public
   */
  scope?: string | undefined;
}

/**
 * Output structure for CreateOAuth2TokenWithTokenExchange operation.
 *
 * Contains the access token, issued token type, token type, and expiration as defined in RFC 6749 §5.1 and RFC 8693 §2.2.1.
 * @public
 */
export interface CreateOAuth2TokenWithTokenExchangeResponse {
  /**
   * Access token containing principal identity, resource scope, and session metadata.
   * @public
   */
  accessToken: string | undefined;

  /**
   * The token type of the issued token. Always "urn:ietf:params:oauth:token-type:access_token" as defined in RFC 8693 §2.2.1.
   * @public
   */
  issuedTokenType?: string | undefined;

  /**
   * The token type. Currently only supports "Bearer" as defined in RFC 6749.
   * @public
   */
  tokenType: string | undefined;

  /**
   * Token lifetime in seconds. Value is the minimum of the subject token's validity and 1 hour (3600 seconds).
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
