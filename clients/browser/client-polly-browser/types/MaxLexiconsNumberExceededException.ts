import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of lexicons would be exceeded by this operation.</p>
 */
export interface MaxLexiconsNumberExceededException
  extends __ServiceException__<_MaxLexiconsNumberExceededExceptionDetails> {
  name: "MaxLexiconsNumberExceededException";
}

export interface _MaxLexiconsNumberExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
