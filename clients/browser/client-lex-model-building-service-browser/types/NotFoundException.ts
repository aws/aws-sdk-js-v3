import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource specified in the request was not found. Check the resource and try again.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
