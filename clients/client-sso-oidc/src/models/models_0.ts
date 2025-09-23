// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SSOOIDCServiceException as __BaseException } from "./SSOOIDCServiceException";

/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  KMS_ACCESS_DENIED: "KMS_AccessDeniedException",
} as const;

/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be <code>access_denied</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>A string that uniquely identifies a reason for the error.</p>
   * @public
   */
  reason?: AccessDeniedExceptionReason | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.error = opts.error;
    this.reason = opts.reason;
    this.error_description = opts.error_description;
  }
}

/**
 * <p>Indicates that a request to authorize a client with an access user session token is
 *       pending.</p>
 * @public
 */
export class AuthorizationPendingException extends __BaseException {
  readonly name: "AuthorizationPendingException" = "AuthorizationPendingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be
   *       <code>authorization_pending</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationPendingException, __BaseException>) {
    super({
      name: "AuthorizationPendingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * <p>This structure contains Amazon Web Services-specific parameter extensions and the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-overview.html">identity context</a>.</p>
 * @public
 */
export interface AwsAdditionalDetails {
  /**
   * <p>The trusted context assertion is signed and encrypted by STS. It provides access to
   *         <code>sts:identity_context</code> claim in the <code>idToken</code> without JWT
   *       parsing</p>
   *          <p>Identity context comprises information that Amazon Web Services services use to make authorization
   *       decisions when they receive requests.</p>
   * @public
   */
  identityContext?: string | undefined;
}

/**
 * @public
 */
export interface CreateTokenRequest {
  /**
   * <p>The unique identifier string for the client or application. This value comes from the
   *       result of the <a>RegisterClient</a> API.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>A secret string generated for the client. This value should come from the persisted result
   *       of the <a>RegisterClient</a> API.</p>
   * @public
   */
  clientSecret: string | undefined;

  /**
   * <p>Supports the following OAuth grant types: Authorization Code, Device Code, and Refresh
   *       Token. Specify one of the following values, depending on the grant type that you want:</p>
   *          <p>* Authorization Code - <code>authorization_code</code>
   *          </p>
   *          <p>* Device Code - <code>urn:ietf:params:oauth:grant-type:device_code</code>
   *          </p>
   *          <p>* Refresh Token - <code>refresh_token</code>
   *          </p>
   * @public
   */
  grantType: string | undefined;

  /**
   * <p>Used only when calling this API for the Device Code grant type. This short-lived code is
   *       used to identify this authorization request. This comes from the result of the <a>StartDeviceAuthorization</a> API.</p>
   * @public
   */
  deviceCode?: string | undefined;

  /**
   * <p>Used only when calling this API for the Authorization Code grant type. The short-lived
   *       code is used to identify this authorization request.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>Used only when calling this API for the Refresh Token grant type. This token is used to
   *       refresh short-lived tokens, such as the access token, that might expire.</p>
   *          <p>For more information about the features and limitations of the current IAM Identity Center OIDC
   *       implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p>The list of scopes for which authorization is requested. This parameter has no effect; the access token will always include all scopes configured during client registration.</p>
   * @public
   */
  scope?: string[] | undefined;

  /**
   * <p>Used only when calling this API for the Authorization Code grant type. This value
   *       specifies the location of the client or application that has registered to receive the
   *       authorization code.</p>
   * @public
   */
  redirectUri?: string | undefined;

  /**
   * <p>Used only when calling this API for the Authorization Code grant type. This value is
   *       generated by the client and presented to validate the original code challenge value the client
   *       passed at authorization time.</p>
   * @public
   */
  codeVerifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateTokenResponse {
  /**
   * <p>A bearer token to access Amazon Web Services accounts and applications assigned to a user.</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>Used to notify the client that the returned token is an access token. The supported token
   *       type is <code>Bearer</code>.</p>
   * @public
   */
  tokenType?: string | undefined;

  /**
   * <p>Indicates the time in seconds when an access token will expire.</p>
   * @public
   */
  expiresIn?: number | undefined;

  /**
   * <p>A token that, if present, can be used to refresh a previously issued access token that
   *       might have expired.</p>
   *          <p>For more information about the features and limitations of the current IAM Identity Center OIDC
   *       implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p>The <code>idToken</code> is not implemented or supported. For more information about the
   *       features and limitations of the current IAM Identity Center OIDC implementation, see
   *         <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   *          <p>A JSON Web Token (JWT) that identifies who is associated with the issued access token.
   *     </p>
   * @public
   */
  idToken?: string | undefined;
}

/**
 * <p>Indicates that the token issued by the service is expired and is no longer valid.</p>
 * @public
 */
export class ExpiredTokenException extends __BaseException {
  readonly name: "ExpiredTokenException" = "ExpiredTokenException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be <code>expired_token</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredTokenException, __BaseException>) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * <p>Indicates that an error from the service occurred while trying to process a
 *       request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>Single error code. For this exception the value will be <code>server_error</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * <p>Indicates that the <code>clientId</code> or <code>clientSecret</code> in the request is
 *       invalid. For example, this can occur when a client sends an incorrect <code>clientId</code> or
 *       an expired <code>clientSecret</code>.</p>
 * @public
 */
export class InvalidClientException extends __BaseException {
  readonly name: "InvalidClientException" = "InvalidClientException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be
   *       <code>invalid_client</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientException, __BaseException>) {
    super({
      name: "InvalidClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * <p>Indicates that a request contains an invalid grant. This can occur if a client makes a
 *         <a>CreateToken</a> request with an invalid grant type.</p>
 * @public
 */
export class InvalidGrantException extends __BaseException {
  readonly name: "InvalidGrantException" = "InvalidGrantException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be <code>invalid_grant</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGrantException, __BaseException>) {
    super({
      name: "InvalidGrantException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGrantException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 * @enum
 */
export const InvalidRequestExceptionReason = {
  KMS_DISABLED_KEY: "KMS_DisabledException",
  KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
  KMS_INVALID_STATE: "KMS_InvalidStateException",
  KMS_KEY_NOT_FOUND: "KMS_NotFoundException",
} as const;

/**
 * @public
 */
export type InvalidRequestExceptionReason =
  (typeof InvalidRequestExceptionReason)[keyof typeof InvalidRequestExceptionReason];

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be
   *       <code>invalid_request</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>A string that uniquely identifies a reason for the error.</p>
   * @public
   */
  reason?: InvalidRequestExceptionReason | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.error = opts.error;
    this.reason = opts.reason;
    this.error_description = opts.error_description;
  }
}

/**
 * <p>Indicates that the scope provided in the request is invalid.</p>
 * @public
 */
export class InvalidScopeException extends __BaseException {
  readonly name: "InvalidScopeException" = "InvalidScopeException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be <code>invalid_scope</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidScopeException, __BaseException>) {
    super({
      name: "InvalidScopeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidScopeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * <p>Indicates that the client is making the request too frequently and is more than the
 *       service can handle. </p>
 * @public
 */
export class SlowDownException extends __BaseException {
  readonly name: "SlowDownException" = "SlowDownException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be <code>slow_down</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SlowDownException, __BaseException>) {
    super({
      name: "SlowDownException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SlowDownException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * <p>Indicates that the client is not currently authorized to make the request. This can happen
 *       when a <code>clientId</code> is not issued for a public client.</p>
 * @public
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be
   *       <code>unauthorized_client</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedClientException, __BaseException>) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * <p>Indicates that the grant type in the request is not supported by the service.</p>
 * @public
 */
export class UnsupportedGrantTypeException extends __BaseException {
  readonly name: "UnsupportedGrantTypeException" = "UnsupportedGrantTypeException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be
   *         <code>unsupported_grant_type</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedGrantTypeException, __BaseException>) {
    super({
      name: "UnsupportedGrantTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 */
export interface CreateTokenWithIAMRequest {
  /**
   * <p>The unique identifier string for the client or application. This value is an application
   *       ARN that has OAuth grants configured.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>Supports the following OAuth grant types: Authorization Code, Refresh Token, JWT Bearer,
   *       and Token Exchange. Specify one of the following values, depending on the grant type that you
   *       want:</p>
   *          <p>* Authorization Code - <code>authorization_code</code>
   *          </p>
   *          <p>* Refresh Token - <code>refresh_token</code>
   *          </p>
   *          <p>* JWT Bearer - <code>urn:ietf:params:oauth:grant-type:jwt-bearer</code>
   *          </p>
   *          <p>* Token Exchange - <code>urn:ietf:params:oauth:grant-type:token-exchange</code>
   *          </p>
   * @public
   */
  grantType: string | undefined;

  /**
   * <p>Used only when calling this API for the Authorization Code grant type. This short-lived
   *       code is used to identify this authorization request. The code is obtained through a redirect
   *       from IAM Identity Center to a redirect URI persisted in the Authorization Code GrantOptions for the
   *       application.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>Used only when calling this API for the Refresh Token grant type. This token is used to
   *       refresh short-lived tokens, such as the access token, that might expire.</p>
   *          <p>For more information about the features and limitations of the current IAM Identity Center OIDC
   *       implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p>Used only when calling this API for the JWT Bearer grant type. This value specifies the
   *       JSON Web Token (JWT) issued by a trusted token issuer. To authorize a trusted token issuer,
   *       configure the JWT Bearer GrantOptions for the application.</p>
   * @public
   */
  assertion?: string | undefined;

  /**
   * <p>The list of scopes for which authorization is requested. The access token that is issued
   *       is limited to the scopes that are granted. If the value is not specified, IAM Identity Center authorizes all
   *       scopes configured for the application, including the following default scopes:
   *         <code>openid</code>, <code>aws</code>, <code>sts:identity_context</code>.</p>
   * @public
   */
  scope?: string[] | undefined;

  /**
   * <p>Used only when calling this API for the Authorization Code grant type. This value
   *       specifies the location of the client or application that has registered to receive the
   *       authorization code. </p>
   * @public
   */
  redirectUri?: string | undefined;

  /**
   * <p>Used only when calling this API for the Token Exchange grant type. This value specifies
   *       the subject of the exchange. The value of the subject token must be an access token issued by
   *       IAM Identity Center to a different client or application. The access token must have authorized scopes that
   *       indicate the requested application as a target audience.</p>
   * @public
   */
  subjectToken?: string | undefined;

  /**
   * <p>Used only when calling this API for the Token Exchange grant type. This value specifies
   *       the type of token that is passed as the subject of the exchange. The following value is
   *       supported:</p>
   *          <p>* Access Token - <code>urn:ietf:params:oauth:token-type:access_token</code>
   *          </p>
   * @public
   */
  subjectTokenType?: string | undefined;

  /**
   * <p>Used only when calling this API for the Token Exchange grant type. This value specifies
   *       the type of token that the requester can receive. The following values are supported:</p>
   *          <p>* Access Token - <code>urn:ietf:params:oauth:token-type:access_token</code>
   *          </p>
   *          <p>* Refresh Token - <code>urn:ietf:params:oauth:token-type:refresh_token</code>
   *          </p>
   * @public
   */
  requestedTokenType?: string | undefined;

  /**
   * <p>Used only when calling this API for the Authorization Code grant type. This value is
   *       generated by the client and presented to validate the original code challenge value the client
   *       passed at authorization time.</p>
   * @public
   */
  codeVerifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateTokenWithIAMResponse {
  /**
   * <p>A bearer token to access Amazon Web Services accounts and applications assigned to a user.</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>Used to notify the requester that the returned token is an access token. The supported
   *       token type is <code>Bearer</code>.</p>
   * @public
   */
  tokenType?: string | undefined;

  /**
   * <p>Indicates the time in seconds when an access token will expire.</p>
   * @public
   */
  expiresIn?: number | undefined;

  /**
   * <p>A token that, if present, can be used to refresh a previously issued access token that
   *       might have expired.</p>
   *          <p>For more information about the features and limitations of the current IAM Identity Center OIDC
   *       implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p>A JSON Web Token (JWT) that identifies the user associated with the issued access token.
   *     </p>
   * @public
   */
  idToken?: string | undefined;

  /**
   * <p>Indicates the type of tokens that are issued by IAM Identity Center. The following values are supported: </p>
   *          <p>* Access Token - <code>urn:ietf:params:oauth:token-type:access_token</code>
   *          </p>
   *          <p>* Refresh Token - <code>urn:ietf:params:oauth:token-type:refresh_token</code>
   *          </p>
   * @public
   */
  issuedTokenType?: string | undefined;

  /**
   * <p>The list of scopes for which authorization is granted. The access token that is issued is
   *       limited to the scopes that are granted.</p>
   * @public
   */
  scope?: string[] | undefined;

  /**
   * <p>A structure containing information from IAM Identity Center managed user and group
   *       information.</p>
   * @public
   */
  awsAdditionalDetails?: AwsAdditionalDetails | undefined;
}

/**
 * <p>Indicates that a token provided as input to the request was issued by and is only usable
 *       by calling IAM Identity Center endpoints in another region.</p>
 * @public
 */
export class InvalidRequestRegionException extends __BaseException {
  readonly name: "InvalidRequestRegionException" = "InvalidRequestRegionException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be
   *       <code>invalid_request</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;

  /**
   * <p>Indicates the IAM Identity Center endpoint which the requester may call with this token.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>Indicates the region which the requester may call with this token.</p>
   * @public
   */
  region?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestRegionException, __BaseException>) {
    super({
      name: "InvalidRequestRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestRegionException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
    this.endpoint = opts.endpoint;
    this.region = opts.region;
  }
}

/**
 * <p>Indicates that the client information sent in the request during registration is
 *       invalid.</p>
 * @public
 */
export class InvalidClientMetadataException extends __BaseException {
  readonly name: "InvalidClientMetadataException" = "InvalidClientMetadataException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be
   *         <code>invalid_client_metadata</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientMetadataException, __BaseException>) {
    super({
      name: "InvalidClientMetadataException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientMetadataException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * <p>Indicates that one or more redirect URI in the request is not supported for this
 *       operation.</p>
 * @public
 */
export class InvalidRedirectUriException extends __BaseException {
  readonly name: "InvalidRedirectUriException" = "InvalidRedirectUriException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code. For this exception the value will be
   *       <code>invalid_redirect_uri</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the client developer
   *       in understanding the error that occurred.</p>
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRedirectUriException, __BaseException>) {
    super({
      name: "InvalidRedirectUriException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRedirectUriException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 */
export interface RegisterClientRequest {
  /**
   * <p>The friendly name of the client.</p>
   * @public
   */
  clientName: string | undefined;

  /**
   * <p>The type of client. The service supports only <code>public</code> as a client type.
   *       Anything other than public will be rejected by the service.</p>
   * @public
   */
  clientType: string | undefined;

  /**
   * <p>The list of scopes that are defined by the client. Upon authorization, this list is used
   *       to restrict permissions when granting an access token.</p>
   * @public
   */
  scopes?: string[] | undefined;

  /**
   * <p>The list of redirect URI that are defined by the client. At completion of authorization,
   *       this list is used to restrict what locations the user agent can be redirected back to.</p>
   * @public
   */
  redirectUris?: string[] | undefined;

  /**
   * <p>The list of OAuth 2.0 grant types that are defined by the client. This list is used to
   *       restrict the token granting flows available to the client. Supports the following OAuth 2.0
   *       grant types: Authorization Code, Device Code, and Refresh Token. </p>
   *          <p>* Authorization Code - <code>authorization_code</code>
   *          </p>
   *          <p>* Device Code - <code>urn:ietf:params:oauth:grant-type:device_code</code>
   *          </p>
   *          <p>* Refresh Token - <code>refresh_token</code>
   *          </p>
   * @public
   */
  grantTypes?: string[] | undefined;

  /**
   * <p>The IAM Identity Center Issuer URL associated with an instance of IAM Identity Center. This value is needed for user
   *       access to resources through the client.</p>
   * @public
   */
  issuerUrl?: string | undefined;

  /**
   * <p>This IAM Identity Center application ARN is used to define administrator-managed configuration for
   *       public client access to resources. At authorization, the scopes, grants, and redirect URI
   *       available to this client will be restricted by this application resource.</p>
   * @public
   */
  entitledApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface RegisterClientResponse {
  /**
   * <p>The unique identifier string for each client. This client uses this identifier to get
   *       authenticated by the service in subsequent calls.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>A secret string generated for the client. The client will use this string to get
   *       authenticated by the service in subsequent calls.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>Indicates the time at which the <code>clientId</code> and <code>clientSecret</code> were
   *       issued.</p>
   * @public
   */
  clientIdIssuedAt?: number | undefined;

  /**
   * <p>Indicates the time at which the <code>clientId</code> and <code>clientSecret</code> will
   *       become invalid.</p>
   * @public
   */
  clientSecretExpiresAt?: number | undefined;

  /**
   * <p>An endpoint that the client can use to request authorization.</p>
   * @public
   */
  authorizationEndpoint?: string | undefined;

  /**
   * <p>An endpoint that the client can use to create tokens.</p>
   * @public
   */
  tokenEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface StartDeviceAuthorizationRequest {
  /**
   * <p>The unique identifier string for the client that is registered with IAM Identity Center. This value
   *       should come from the persisted result of the <a>RegisterClient</a> API
   *       operation.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>A secret string that is generated for the client. This value should come from the
   *       persisted result of the <a>RegisterClient</a> API operation.</p>
   * @public
   */
  clientSecret: string | undefined;

  /**
   * <p>The URL for the Amazon Web Services access portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using
   *         the Amazon Web Services access portal</a> in the <i>IAM Identity Center User Guide</i>.</p>
   * @public
   */
  startUrl: string | undefined;
}

/**
 * @public
 */
export interface StartDeviceAuthorizationResponse {
  /**
   * <p>The short-lived code that is used by the device when polling for a session token.</p>
   * @public
   */
  deviceCode?: string | undefined;

  /**
   * <p>A one-time user verification code. This is needed to authorize an in-use device.</p>
   * @public
   */
  userCode?: string | undefined;

  /**
   * <p>The URI of the verification page that takes the <code>userCode</code> to authorize the
   *       device.</p>
   * @public
   */
  verificationUri?: string | undefined;

  /**
   * <p>An alternate URL that the client can use to automatically launch a browser. This process
   *       skips the manual step in which the user visits the verification page and enters their
   *       code.</p>
   * @public
   */
  verificationUriComplete?: string | undefined;

  /**
   * <p>Indicates the number of seconds in which the verification code will become invalid.</p>
   * @public
   */
  expiresIn?: number | undefined;

  /**
   * <p>Indicates the number of seconds the client must wait between attempts when polling for a
   *       session.</p>
   * @public
   */
  interval?: number | undefined;
}

/**
 * @internal
 */
export const CreateTokenRequestFilterSensitiveLog = (obj: CreateTokenRequest): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
  ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
  ...(obj.codeVerifier && { codeVerifier: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTokenResponseFilterSensitiveLog = (obj: CreateTokenResponse): any => ({
  ...obj,
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
  ...(obj.idToken && { idToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTokenWithIAMRequestFilterSensitiveLog = (obj: CreateTokenWithIAMRequest): any => ({
  ...obj,
  ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
  ...(obj.assertion && { assertion: SENSITIVE_STRING }),
  ...(obj.subjectToken && { subjectToken: SENSITIVE_STRING }),
  ...(obj.codeVerifier && { codeVerifier: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTokenWithIAMResponseFilterSensitiveLog = (obj: CreateTokenWithIAMResponse): any => ({
  ...obj,
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
  ...(obj.idToken && { idToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RegisterClientResponseFilterSensitiveLog = (obj: RegisterClientResponse): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartDeviceAuthorizationRequestFilterSensitiveLog = (obj: StartDeviceAuthorizationRequest): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});
