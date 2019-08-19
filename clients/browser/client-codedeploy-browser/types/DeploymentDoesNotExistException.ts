import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployment with the IAM user or AWS account does not exist.</p>
 */
export interface DeploymentDoesNotExistException
  extends __ServiceException__<_DeploymentDoesNotExistExceptionDetails> {
  name: "DeploymentDoesNotExistException";
}

export interface _DeploymentDoesNotExistExceptionDetails {}
