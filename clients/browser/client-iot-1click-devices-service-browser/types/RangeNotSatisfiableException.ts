import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * RangeNotSatisfiableException shape
 */
export interface RangeNotSatisfiableException
  extends __ServiceException__<_RangeNotSatisfiableExceptionDetails> {
  name: "RangeNotSatisfiableException";
}

export interface _RangeNotSatisfiableExceptionDetails {
  /**
   * <p>416</p>
   */
  Code?: string;

  /**
   * <p>The requested number of results specified by nextToken cannot be
   *  satisfied.</p>
   */
  Message?: string;
}
