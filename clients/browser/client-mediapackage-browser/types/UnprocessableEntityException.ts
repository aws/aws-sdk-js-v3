import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The parameters sent in the request are not valid.
 */
export interface UnprocessableEntityException
  extends __ServiceException__<_UnprocessableEntityExceptionDetails> {
  name: "UnprocessableEntityException";
}

export interface _UnprocessableEntityExceptionDetails {
  /**
   * ___string shape
   */
  Message?: string;
}
