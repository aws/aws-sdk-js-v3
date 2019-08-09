import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployment does not have a status of Ready and can't continue yet.</p>
 */
export interface DeploymentIsNotInReadyStateException
  extends __ServiceException__<_DeploymentIsNotInReadyStateExceptionDetails> {
  name: "DeploymentIsNotInReadyStateException";
}

export interface _DeploymentIsNotInReadyStateExceptionDetails {}
