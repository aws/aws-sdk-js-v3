import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployment configuration does not exist with the IAM user or AWS account.</p>
 */
export interface DeploymentConfigDoesNotExistException
  extends __ServiceException__<_DeploymentConfigDoesNotExistExceptionDetails> {
  name: "DeploymentConfigDoesNotExistException";
}

export interface _DeploymentConfigDoesNotExistExceptionDetails {}
