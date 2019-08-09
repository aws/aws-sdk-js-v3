import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 */
export interface InvalidPaginationToken
  extends __ServiceException__<_InvalidPaginationTokenDetails> {
  name: "InvalidPaginationToken";
}

export interface _InvalidPaginationTokenDetails {
  /**
   * _string shape
   */
  message?: string;
}
