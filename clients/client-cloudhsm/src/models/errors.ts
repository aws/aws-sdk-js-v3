// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudHSMServiceException as __BaseException } from "./CloudHSMServiceException";

/**
 * <p>Indicates that an internal error occurred.</p>
 * @public
 */
export class CloudHsmInternalException extends __BaseException {
  readonly name = "CloudHsmInternalException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>Indicates if the action can be retried.</p>
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
 * <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 * @public
 */
export class CloudHsmServiceException extends __BaseException {
  readonly name = "CloudHsmServiceException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Indicates if the action can be retried.</p>
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
 * <p>Indicates that one or more of the request parameters are not valid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Indicates if the action can be retried.</p>
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
