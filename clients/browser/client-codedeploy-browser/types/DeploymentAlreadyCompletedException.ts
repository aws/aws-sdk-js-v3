import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployment is already complete.</p>
 */
export interface DeploymentAlreadyCompletedException
  extends __ServiceException__<_DeploymentAlreadyCompletedExceptionDetails> {
  name: "DeploymentAlreadyCompletedException";
}

export interface _DeploymentAlreadyCompletedExceptionDetails {}
