import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The requested resource does not exist.
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * ___string shape
   */
  Message?: string;
}
