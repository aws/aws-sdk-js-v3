import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ConflictErrorException
  extends __ServiceException__<_ConflictErrorExceptionDetails> {
  name: "ConflictErrorException";
}

export interface _ConflictErrorExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
