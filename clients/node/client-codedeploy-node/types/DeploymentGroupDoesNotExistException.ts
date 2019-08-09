import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The named deployment group with the IAM user or AWS account does not exist.</p>
 */
export interface DeploymentGroupDoesNotExistException
  extends __ServiceException__<_DeploymentGroupDoesNotExistExceptionDetails> {
  name: "DeploymentGroupDoesNotExistException";
}

export interface _DeploymentGroupDoesNotExistExceptionDetails {}
