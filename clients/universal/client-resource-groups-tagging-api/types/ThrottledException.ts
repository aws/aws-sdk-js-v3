import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was denied to limit the frequency of submitted requests.</p>
 */
export interface ThrottledException
  extends __ServiceException__<_ThrottledExceptionDetails> {
  name: "ThrottledException";
}

export interface _ThrottledExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
