import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The execution of the SQL statement timed out.</p>
 */
export interface StatementTimeoutException
  extends __ServiceException__<_StatementTimeoutExceptionDetails> {
  name: "StatementTimeoutException";
}

export interface _StatementTimeoutExceptionDetails {
  /**
   * <p>The database connection ID that executed the SQL statement.</p>
   */
  dbConnectionId?: number;

  /**
   * <p>The error message returned by this <code>StatementTimeoutException</code> error.</p>
   */
  message?: string;
}
