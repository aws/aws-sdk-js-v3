import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A service resource associated with the request could not be found. Clients should not retry such requests.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
