import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request is not valid, for example, the input is incomplete or incorrect. See
 *  the accompanying error message for details.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * <p>Describes the error encountered.</p>
   */
  Message?: string;
}
