import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid instance type was specified for instances in a blue/green deployment. Valid values include "Blue" for an original environment and "Green" for a replacement environment.</p>
 */
export interface InvalidInstanceTypeException
  extends __ServiceException__<_InvalidInstanceTypeExceptionDetails> {
  name: "InvalidInstanceTypeException";
}

export interface _InvalidInstanceTypeExceptionDetails {}
