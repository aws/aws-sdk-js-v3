import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The target filter name is invalid. </p>
 */
export interface InvalidTargetFilterNameException
  extends __ServiceException__<_InvalidTargetFilterNameExceptionDetails> {
  name: "InvalidTargetFilterNameException";
}

export interface _InvalidTargetFilterNameExceptionDetails {}
