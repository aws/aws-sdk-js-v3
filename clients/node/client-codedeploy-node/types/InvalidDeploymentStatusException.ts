import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified deployment status doesn't exist or cannot be determined.</p>
 */
export interface InvalidDeploymentStatusException
  extends __ServiceException__<_InvalidDeploymentStatusExceptionDetails> {
  name: "InvalidDeploymentStatusException";
}

export interface _InvalidDeploymentStatusExceptionDetails {}
