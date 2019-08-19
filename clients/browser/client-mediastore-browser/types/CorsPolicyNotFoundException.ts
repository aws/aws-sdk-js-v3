import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The CORS policy that you specified in the request does not exist.</p>
 */
export interface CorsPolicyNotFoundException
  extends __ServiceException__<_CorsPolicyNotFoundExceptionDetails> {
  name: "CorsPolicyNotFoundException";
}

export interface _CorsPolicyNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
