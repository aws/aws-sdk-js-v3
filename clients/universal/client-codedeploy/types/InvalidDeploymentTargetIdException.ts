import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The target ID provided was not valid. </p>
 */
export interface InvalidDeploymentTargetIdException
  extends __ServiceException__<_InvalidDeploymentTargetIdExceptionDetails> {
  name: "InvalidDeploymentTargetIdException";
}

export interface _InvalidDeploymentTargetIdExceptionDetails {}
