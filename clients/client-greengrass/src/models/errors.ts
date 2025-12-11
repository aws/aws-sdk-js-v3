// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GreengrassServiceException as __BaseException } from "./GreengrassServiceException";
import { ErrorDetail } from "./models_0";

/**
 * General error information.
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * Details about the error.
   * @public
   */
  ErrorDetails?: ErrorDetail[] | undefined;

  /**
   * A message containing information about the error.
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.ErrorDetails = opts.ErrorDetails;
    this.Message = opts.Message;
  }
}

/**
 * General error information.
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * Details about the error.
   * @public
   */
  ErrorDetails?: ErrorDetail[] | undefined;

  /**
   * A message containing information about the error.
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.ErrorDetails = opts.ErrorDetails;
    this.Message = opts.Message;
  }
}
