import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request exceeds the maximum number of requests per second.</p>
 */
export interface ThrottledException
  extends __ServiceException__<_ThrottledExceptionDetails> {
  name: "ThrottledException";
}

export interface _ThrottledExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
