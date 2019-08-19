import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request uses too many filters or too many filter values.</p>
 */
export interface FilterLimitExceededException
  extends __ServiceException__<_FilterLimitExceededExceptionDetails> {
  name: "FilterLimitExceededException";
}

export interface _FilterLimitExceededExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
