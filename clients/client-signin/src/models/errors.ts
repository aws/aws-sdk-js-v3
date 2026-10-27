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
 * Error thrown when request conflicts with current state
 *
 * HTTP Status Code: 409 Conflict
 *
 * Used when the request conflicts with the current state of the resource
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.signin#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * OAuth 2.0 error code indicating conflict
   * Will be CONFLICT
   * @public
   */
  error: OAuth2ErrorCode | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
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

/**
 * The request failed because the provided grant is invalid or expired.
 * @public
 */
export class InvalidGrantException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.signin#InvalidGrantException";
  readonly name = "InvalidGrantException" as const;
  readonly $fault = "client" as const;
  /**
   * Will be invalid_grant.
   * @public
   */
  error: OAuth2ErrorCode | undefined;

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
  }
}

/**
 * The request failed because the requested scope is invalid or exceeds the scope that can be granted.
 * @public
 */
export class InvalidScopeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.signin#InvalidScopeException";
  readonly name = "InvalidScopeException" as const;
  readonly $fault = "client" as const;
  /**
   * Will be invalid_scope.
   * @public
   */
  error: OAuth2ErrorCode | undefined;

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
  }
}

/**
 * The request failed because a dependency is temporarily unavailable. You can retry the request.
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.signin#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * Will be service_unavailable.
   * @public
   */
  error: OAuth2ErrorCode | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.error = opts.error;
  }
}

/**
 * Error thrown when requested resource is not found
 *
 * HTTP Status Code: 404 Not Found
 *
 * Used when the specified resource does not exist
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.signin#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * OAuth 2.0 error code indicating resource not found
   * Will be RESOURCE_NOT_FOUND
   * @public
   */
  error: OAuth2ErrorCode | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.error = opts.error;
  }
}

/**
 * Error thrown when service quota is exceeded
 *
 * HTTP Status Code: 402 Payment Required (used as quota exceeded indicator)
 *
 * Used when the request would cause a service quota to be exceeded
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.signin#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * OAuth 2.0 error code indicating service quota exceeded
   * Will be SERVICE_QUOTA_EXCEEDED
   * @public
   */
  error: OAuth2ErrorCode | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.error = opts.error;
  }
}
