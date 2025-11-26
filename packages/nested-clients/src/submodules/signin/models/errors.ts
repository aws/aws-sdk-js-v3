// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { OAuth2ErrorCode } from "./enums";
import { SigninServiceException as __BaseException } from "./SigninServiceException";

/**
 * Error thrown for access denied scenarios with flexible HTTP status mapping
 *
 * Runtime HTTP Status Code Mapping:
 * - HTTP 401 (Unauthorized): TOKEN_EXPIRED, AUTHCODE_EXPIRED
 * - HTTP 403 (Forbidden): USER_CREDENTIALS_CHANGED, INSUFFICIENT_PERMISSIONS
 *
 * The specific HTTP status code is determined at runtime based on the error enum value.
 * Consumers should use the error field to determine the specific access denial reason.
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * OAuth 2.0 error code indicating the specific type of access denial
   * Can be TOKEN_EXPIRED, AUTHCODE_EXPIRED, USER_CREDENTIALS_CHANGED, or INSUFFICIENT_PERMISSIONS
   * @public
   */
  error: OAuth2ErrorCode | undefined;

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
  }
}

/**
 * Error thrown when an internal server error occurs
 *
 * HTTP Status Code: 500 Internal Server Error
 *
 * Used for unexpected server-side errors that prevent request processing.
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * OAuth 2.0 error code indicating server error
   * Will be SERVER_ERROR for internal server errors
   * @public
   */
  error: OAuth2ErrorCode | undefined;

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
  }
}

/**
 * Error thrown when rate limit is exceeded
 *
 * HTTP Status Code: 429 Too Many Requests
 *
 * Possible OAuth2ErrorCode values:
 * - INVALID_REQUEST: Rate limiting, too many requests, abuse prevention
 *
 * Possible causes:
 * - Too many token requests from the same client
 * - Rate limiting based on client_id or IP address
 * - Abuse prevention mechanisms triggered
 * - Service protection against excessive token generation
 * @public
 */
export class TooManyRequestsError extends __BaseException {
  readonly name = "TooManyRequestsError" as const;
  readonly $fault = "client" as const;
  /**
   * OAuth 2.0 error code indicating the specific type of error
   * Will be INVALID_REQUEST for rate limiting scenarios
   * @public
   */
  error: OAuth2ErrorCode | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsError, __BaseException>) {
    super({
      name: "TooManyRequestsError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsError.prototype);
    this.error = opts.error;
  }
}

/**
 * Error thrown when request validation fails
 *
 * HTTP Status Code: 400 Bad Request
 *
 * Used for request validation errors such as malformed parameters,
 * missing required fields, or invalid parameter values.
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * OAuth 2.0 error code indicating validation failure
   * Will be INVALID_REQUEST for validation errors
   * @public
   */
  error: OAuth2ErrorCode | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.error = opts.error;
  }
}
