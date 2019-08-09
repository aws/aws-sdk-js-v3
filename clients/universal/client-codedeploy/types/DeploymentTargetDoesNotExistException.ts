import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The provided target ID does not belong to the attempted deployment. </p>
 */
export interface DeploymentTargetDoesNotExistException
  extends __ServiceException__<_DeploymentTargetDoesNotExistExceptionDetails> {
  name: "DeploymentTargetDoesNotExistException";
}

export interface _DeploymentTargetDoesNotExistExceptionDetails {}
