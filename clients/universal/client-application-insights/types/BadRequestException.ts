import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request is not understood by the server.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * _ErrorMsg shape
   */
  Message?: string;
}
