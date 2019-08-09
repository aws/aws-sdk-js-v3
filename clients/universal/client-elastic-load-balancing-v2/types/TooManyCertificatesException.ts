import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of certificates per load balancer.</p>
 */
export interface TooManyCertificatesException
  extends __ServiceException__<_TooManyCertificatesExceptionDetails> {
  name: "TooManyCertificatesException";
}

export interface _TooManyCertificatesExceptionDetails {}
