import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A deployment group with the specified name with the IAM user or AWS account already exists.</p>
 */
export interface DeploymentGroupAlreadyExistsException
  extends __ServiceException__<_DeploymentGroupAlreadyExistsExceptionDetails> {
  name: "DeploymentGroupAlreadyExistsException";
}

export interface _DeploymentGroupAlreadyExistsExceptionDetails {}
