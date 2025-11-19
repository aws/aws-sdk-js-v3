// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MTurkServiceException as __BaseException } from "./MTurkServiceException";

/**
 * <p>Your request is invalid.</p>
 * @public
 */
export class RequestError extends __BaseException {
  readonly name = "RequestError" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  TurkErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestError, __BaseException>) {
    super({
      name: "RequestError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestError.prototype);
    this.Message = opts.Message;
    this.TurkErrorCode = opts.TurkErrorCode;
  }
}

/**
 * <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 * @public
 */
export class ServiceFault extends __BaseException {
  readonly name = "ServiceFault" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  TurkErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFault, __BaseException>) {
    super({
      name: "ServiceFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFault.prototype);
    this.Message = opts.Message;
    this.TurkErrorCode = opts.TurkErrorCode;
  }
}
