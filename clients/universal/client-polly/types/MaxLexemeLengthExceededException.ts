import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum size of the lexeme would be exceeded by this operation.</p>
 */
export interface MaxLexemeLengthExceededException
  extends __ServiceException__<_MaxLexemeLengthExceededExceptionDetails> {
  name: "MaxLexemeLengthExceededException";
}

export interface _MaxLexemeLengthExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
