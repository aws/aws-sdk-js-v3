import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The resource you attempted to access doesn't exist.
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
