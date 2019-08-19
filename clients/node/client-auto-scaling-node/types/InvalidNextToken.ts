import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The <code>NextToken</code> value is not valid.</p>
 */
export interface InvalidNextToken
  extends __ServiceException__<_InvalidNextTokenDetails> {
  name: "InvalidNextToken";
}

export interface _InvalidNextTokenDetails {
  /**
   * <p/>
   */
  message?: string;
}
