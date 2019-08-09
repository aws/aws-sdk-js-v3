import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The most likely cause is an invalid AWS access key ID or secret key.</p>
 */
export interface UnrecognizedClientException
  extends __ServiceException__<_UnrecognizedClientExceptionDetails> {
  name: "UnrecognizedClientException";
}

export interface _UnrecognizedClientExceptionDetails {}
