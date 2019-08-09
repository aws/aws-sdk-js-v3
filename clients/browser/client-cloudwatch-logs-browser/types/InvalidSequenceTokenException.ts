import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The sequence token is not valid.</p>
 */
export interface InvalidSequenceTokenException
  extends __ServiceException__<_InvalidSequenceTokenExceptionDetails> {
  name: "InvalidSequenceTokenException";
}

export interface _InvalidSequenceTokenExceptionDetails {
  /**
   * _SequenceToken shape
   */
  expectedSequenceToken?: string;
}
