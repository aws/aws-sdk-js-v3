// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AccessDeniedExceptionReason, InvalidRequestExceptionReason } from "./enums";
import { SSOOIDCServiceException as __BaseException } from "./SSOOIDCServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "AuthorizationPendingException" as const;
  readonly $fault = "client" as const;
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
 * <p>Indicates that the token issued by the service is expired and is no longer valid.</p>
 * @public
 */
export class ExpiredTokenException extends __BaseException {
  readonly name = "ExpiredTokenException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
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
  readonly name = "InvalidClientException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidGrantException" as const;
  readonly $fault = "client" as const;
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
 * <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidScopeException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "SlowDownException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "UnauthorizedClientException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "UnsupportedGrantTypeException" as const;
  readonly $fault = "client" as const;
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
