import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployment configuration name was specified in an invalid format.</p>
 */
export interface InvalidDeploymentConfigNameException
  extends __ServiceException__<_InvalidDeploymentConfigNameExceptionDetails> {
  name: "InvalidDeploymentConfigNameException";
}

export interface _InvalidDeploymentConfigNameExceptionDetails {}
