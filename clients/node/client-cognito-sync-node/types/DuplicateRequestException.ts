import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool.
 */
export interface DuplicateRequestException
  extends __ServiceException__<_DuplicateRequestExceptionDetails> {
  name: "DuplicateRequestException";
}

export interface _DuplicateRequestExceptionDetails {
  /**
   * The message associated with the DuplicateRequestException exception.
   */
  message: string;
}
