import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of allowed deployments was exceeded.</p>
 */
export interface DeploymentLimitExceededException
  extends __ServiceException__<_DeploymentLimitExceededExceptionDetails> {
  name: "DeploymentLimitExceededException";
}

export interface _DeploymentLimitExceededExceptionDetails {}
