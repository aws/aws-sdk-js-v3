import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A deployment configuration with the specified name with the IAM user or AWS account already exists .</p>
 */
export interface DeploymentConfigAlreadyExistsException
  extends __ServiceException__<_DeploymentConfigAlreadyExistsExceptionDetails> {
  name: "DeploymentConfigAlreadyExistsException";
}

export interface _DeploymentConfigAlreadyExistsExceptionDetails {}
