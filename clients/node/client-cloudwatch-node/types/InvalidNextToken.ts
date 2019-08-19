import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The next token specified is invalid.</p>
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
