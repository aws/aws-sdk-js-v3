// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { OAuth2ErrorCode } from "./enums";
import { SigninServiceException as __BaseException } from "./SigninServiceException";

/**
 * You do not have sufficient access to perform this action.
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.signin#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * One of TOKEN_EXPIRED, AUTHCODE_EXPIRED, USER_CREDENTIALS_CHANGED, or INSUFFICIENT_PERMISSIONS.
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
 * The request failed because of an internal server error.
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.signin#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * Will be server_error.
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
 * The request failed because you exceeded the request rate limit for this operation.
 * @public
 */
export class TooManyRequestsError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.signin#TooManyRequestsError";
  readonly name = "TooManyRequestsError" as const;
  readonly $fault = "client" as const;
  /**
   * Will be rate_exceeded.
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
 * The request failed because it contains a malformed, missing, or invalid parameter.
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.signin#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * The specific code depends on which validation failed.
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
