import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified version does not match the version of the document.</p>
 */
export interface ConflictException
  extends __ServiceException__<_ConflictExceptionDetails> {
  name: "ConflictException";
}

export interface _ConflictExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
