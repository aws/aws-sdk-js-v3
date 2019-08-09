import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested resource is not found. Make sure that the request URI is correct.</p>
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
