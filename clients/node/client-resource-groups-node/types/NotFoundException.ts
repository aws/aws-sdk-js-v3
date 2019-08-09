import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more resources specified in the request do not exist.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
