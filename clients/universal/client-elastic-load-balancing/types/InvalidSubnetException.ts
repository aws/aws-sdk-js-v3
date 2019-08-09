import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified VPC has no associated Internet gateway.</p>
 */
export interface InvalidSubnetException
  extends __ServiceException__<_InvalidSubnetExceptionDetails> {
  name: "InvalidSubnetException";
}

export interface _InvalidSubnetExceptionDetails {}
