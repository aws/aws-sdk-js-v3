import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The query is invalid.</p>
 */
export interface InvalidQueryException
  extends __ServiceException__<_InvalidQueryExceptionDetails> {
  name: "InvalidQueryException";
}

export interface _InvalidQueryExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
