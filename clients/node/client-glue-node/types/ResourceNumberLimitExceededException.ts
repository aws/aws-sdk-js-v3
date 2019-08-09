import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resource numerical limit was exceeded.</p>
 */
export interface ResourceNumberLimitExceededException
  extends __ServiceException__<_ResourceNumberLimitExceededExceptionDetails> {
  name: "ResourceNumberLimitExceededException";
}

export interface _ResourceNumberLimitExceededExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
