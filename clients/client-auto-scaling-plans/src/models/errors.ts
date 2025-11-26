// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AutoScalingPlansServiceException as __BaseException } from "./AutoScalingPlansServiceException";

/**
 * <p>Concurrent updates caused an exception, for example, if you request an update to a
 *          scaling plan that already has a pending update.</p>
 * @public
 */
export class ConcurrentUpdateException extends __BaseException {
  readonly name = "ConcurrentUpdateException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentUpdateException, __BaseException>) {
    super({
      name: "ConcurrentUpdateException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentUpdateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The service encountered an internal error.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your account exceeded a limit. This exception is thrown when a per-account resource
 *          limit is exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>The specified object could not be found.</p>
 * @public
 */
export class ObjectNotFoundException extends __BaseException {
  readonly name = "ObjectNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectNotFoundException, __BaseException>) {
    super({
      name: "ObjectNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The token provided is not valid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}
