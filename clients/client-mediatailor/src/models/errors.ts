// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MediaTailorServiceException as __BaseException } from "./MediaTailorServiceException";

/**
 * <p>A request contains unexpected data.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
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
    this.Message = opts.Message;
  }
}
