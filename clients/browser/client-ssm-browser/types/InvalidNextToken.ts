import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified token is not valid.</p>
 */
export interface InvalidNextToken
  extends __ServiceException__<_InvalidNextTokenDetails> {
  name: "InvalidNextToken";
}

export interface _InvalidNextTokenDetails {
  /**
   * _String shape
   */
  Message?: string;
}
