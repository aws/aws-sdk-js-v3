import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is not found.</p>
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
