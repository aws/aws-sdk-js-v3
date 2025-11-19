// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { EMRServiceException as __BaseException } from "./EMRServiceException";

/**
 * <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The message associated with the exception.</p>
   * @public
   */
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
 * <p>This exception occurs when there is something wrong with user input.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code associated with the exception.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The message associated with the exception.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}
