import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided token is invalid.</p>
 */
export interface InvalidToken
  extends __ServiceException__<_InvalidTokenDetails> {
  name: "InvalidToken";
}

export interface _InvalidTokenDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
