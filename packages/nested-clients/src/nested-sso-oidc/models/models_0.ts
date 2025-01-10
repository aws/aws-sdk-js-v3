// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SSOOIDCServiceException as __BaseException } from "./SSOOIDCServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code.
   *       For this exception the value will be <code>access_denied</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
   * <p>Single error code.
   *       For this exception the value will be <code>authorization_pending</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
   * <p>Supports the following OAuth grant types: Device Code and Refresh Token.
   *       Specify either of the following values, depending on the grant type that you want:</p>
   *          <p>* Device Code - <code>urn:ietf:params:oauth:grant-type:device_code</code>
   *          </p>
   *          <p>* Refresh Token - <code>refresh_token</code>
   *          </p>
   *          <p>For information about how to obtain the device code, see the <a>StartDeviceAuthorization</a> topic.</p>
   * @public
   */
  grantType: string | undefined;

  /**
   * <p>Used only when calling this API for the Device Code grant type. This short-term code is
   *       used to identify this authorization request. This comes from the result of the
   *       <a>StartDeviceAuthorization</a> API.</p>
   * @public
   */
  deviceCode?: string | undefined;

  /**
   * <p>Used only when calling this API for the Authorization Code grant type. The short-term code is
   *       used to identify this authorization request. This grant type is currently unsupported for the
   *       <a>CreateToken</a> API.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>Used only when calling this API for the Refresh Token grant type. This token is used to
   *       refresh short-term tokens, such as the access token, that might expire.</p>
   *          <p>For more information about the features and limitations of the current IAM Identity Center OIDC
   *       implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *       OIDC API Reference</a>.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p>The list of scopes for which authorization is requested. The access token that is issued
   *       is limited to the scopes that are granted. If this value is not specified, IAM Identity Center authorizes
   *       all scopes that are configured for the client during the call to
   *       <a>RegisterClient</a>.</p>
   * @public
   */
  scope?: string[] | undefined;

  /**
   * <p>Used only when calling this API for the Authorization Code grant type. This value specifies
   *       the location of the client or application that has registered to receive the authorization
   *         code.</p>
   * @public
   */
  redirectUri?: string | undefined;

  /**
   * <p>Used only when calling this API for the Authorization Code grant type. This value is generated
   *       by the client and presented to validate the original code challenge value the client passed at
   *       authorization time.</p>
   * @public
   */
  codeVerifier?: string | undefined;
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
   *          <p>For more
   *       information about the features and limitations of the current IAM Identity Center OIDC implementation,
   *       see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p>The <code>idToken</code> is not implemented or supported. For more information about the
   *       features and limitations of the current IAM Identity Center OIDC implementation, see <i>Considerations
   *       for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *       OIDC API Reference</a>.</p>
   *          <p>A JSON Web Token (JWT) that identifies who is associated with the issued access token.
   *       </p>
   * @public
   */
  idToken?: string | undefined;
}

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
 * <p>Indicates that the token issued by the service is expired and is no longer valid.</p>
 * @public
 */
export class ExpiredTokenException extends __BaseException {
  readonly name: "ExpiredTokenException" = "ExpiredTokenException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code.
   *       For this exception the value will be <code>expired_token</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
   * <p>Single error code.
   *       For this exception the value will be <code>server_error</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
   * <p>Single error code.
   *       For this exception the value will be <code>invalid_client</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
   * <p>Single error code.
   *       For this exception the value will be <code>invalid_grant</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
 * <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>Single error code.
   *       For this exception the value will be <code>invalid_request</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
   * <p>Single error code.
   *       For this exception the value will be <code>invalid_scope</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
   * <p>Single error code.
   *       For this exception the value will be <code>slow_down</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
   * <p>Single error code.
   *       For this exception the value will be <code>unauthorized_client</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
   * <p>Single error code.
   *       For this exception the value will be <code>unsupported_grant_type</code>.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
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
