import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployed state filter was specified in an invalid format.</p>
 */
export interface InvalidDeployedStateFilterException
  extends __ServiceException__<_InvalidDeployedStateFilterExceptionDetails> {
  name: "InvalidDeployedStateFilterException";
}

export interface _InvalidDeployedStateFilterExceptionDetails {}
