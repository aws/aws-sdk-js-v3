import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified SSL policy does not exist.</p>
 */
export interface SSLPolicyNotFoundException
  extends __ServiceException__<_SSLPolicyNotFoundExceptionDetails> {
  name: "SSLPolicyNotFoundException";
}

export interface _SSLPolicyNotFoundExceptionDetails {}
