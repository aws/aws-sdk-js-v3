import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
