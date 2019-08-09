import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified deployment has not started.</p>
 */
export interface DeploymentNotStartedException
  extends __ServiceException__<_DeploymentNotStartedExceptionDetails> {
  name: "DeploymentNotStartedException";
}

export interface _DeploymentNotStartedExceptionDetails {}
