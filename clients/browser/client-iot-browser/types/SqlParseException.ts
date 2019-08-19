import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Rule-SQL expression can't be parsed correctly.</p>
 */
export interface SqlParseException
  extends __ServiceException__<_SqlParseExceptionDetails> {
  name: "SqlParseException";
}

export interface _SqlParseExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
