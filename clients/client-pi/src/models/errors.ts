// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { PIServiceException as __BaseException } from "./PIServiceException";

/**
 * <p>The request failed due to an unknown error.</p>
 * @public
 */
export class InternalServiceError extends __BaseException {
  readonly name = "InternalServiceError" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceError, __BaseException>) {
    super({
      name: "InternalServiceError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One of the arguments provided is invalid for this request.</p>
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  readonly name = "InvalidArgumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The user is not authorized to perform this request.</p>
 * @public
 */
export class NotAuthorizedException extends __BaseException {
  readonly name = "NotAuthorizedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    this.Message = opts.Message;
  }
}
