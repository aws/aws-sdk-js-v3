import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified entity was not found.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * <p>Any additional information about the exception.</p>
   */
  message?: string;
}
