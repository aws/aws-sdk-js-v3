import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> No entity can be found with the specified identifier. </p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * <p> The Exception Error Message. </p>
   */
  message?: string;
}
