// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CloudHSMServiceException as __BaseException } from "./CloudHSMServiceException";

/**
 * Indicates that an internal error occurred.
 *
 * @public
 */
export class CloudHsmInternalException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudhsm#CloudHsmInternalException";
  readonly name = "CloudHsmInternalException" as const;
  readonly $fault = "server" as const;
  /**
   * Indicates if the action can be retried.
   *
   * @public
   */
  retryable?: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmInternalException, __BaseException>) {
    super({
      name: "CloudHsmInternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmInternalException.prototype);
    this.retryable = opts.retryable;
  }
}

/**
 * Indicates that an exception occurred in the AWS CloudHSM service.
 *
 * @public
 */
export class CloudHsmServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudhsm#CloudHsmServiceException";
  readonly name = "CloudHsmServiceException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates if the action can be retried.
   *
   * @public
   */
  retryable?: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmServiceException, __BaseException>) {
    super({
      name: "CloudHsmServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmServiceException.prototype);
    this.retryable = opts.retryable;
  }
}

/**
 * Indicates that one or more of the request parameters are not valid.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudhsm#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates if the action can be retried.
   *
   * @public
   */
  retryable?: boolean | undefined;

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
    this.retryable = opts.retryable;
  }
}
