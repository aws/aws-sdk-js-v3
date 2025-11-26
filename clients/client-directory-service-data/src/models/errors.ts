// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DirectoryServiceDataServiceException as __BaseException } from "./DirectoryServiceDataServiceException";
import { AccessDeniedReason, DirectoryUnavailableReason, ValidationExceptionReason } from "./enums";

/**
 * <p> You don't have permission to perform the request or access the directory. It can also
 *       occur when the <code>DirectoryId</code> doesn't exist or the user, member, or group might be
 *       outside of your organizational unit (OU). </p>
 *          <p> Make sure that you have the authentication and authorization to perform the action.
 *       Review the directory information in the request, and make sure that the object isn't outside
 *       of your OU. </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p> Reason the request was unauthorized. </p>
   * @public
   */
  Reason?: AccessDeniedReason | undefined;
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
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p> This error will occur when you try to create a resource that conflicts with an existing
 *       object. It can also occur when adding a member to a group that the member is already
 *       in.</p>
 *          <p> This error can be caused by a request sent within the 8-hour idempotency window with the
 *       same client token but different input parameters. Client tokens should not be re-used across
 *       different requests. After 8 hours, any request with the same client token is treated as a new
 *       request. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p> The request could not be completed due to a problem in the configuration or current state
 *       of the specified directory. </p>
 * @public
 */
export class DirectoryUnavailableException extends __BaseException {
  readonly name = "DirectoryUnavailableException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  Message?: string | undefined;
  /**
   * <p> Reason the request failed for the specified directory. </p>
   * @public
   */
  Reason?: DirectoryUnavailableReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryUnavailableException, __BaseException>) {
    super({
      name: "DirectoryUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryUnavailableException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p> The operation didn't succeed because an internal error occurred. Try again later. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p> The resource couldn't be found. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p> The limit on the number of requests per second has been exceeded. </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  Message: string | undefined;
  /**
   * <p> The recommended amount of seconds to retry after a throttling exception. </p>
   * @public
   */
  RetryAfterSeconds?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p> The request isn't valid. Review the details in the error message to update the invalid
 *       parameters or values in your request. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p> Reason the request failed validation. </p>
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;
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
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}
