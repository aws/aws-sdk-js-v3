import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.</p>
 */
export interface InvalidArgumentException
  extends __ServiceException__<_InvalidArgumentExceptionDetails> {
  name: "InvalidArgumentException";
}

export interface _InvalidArgumentExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
