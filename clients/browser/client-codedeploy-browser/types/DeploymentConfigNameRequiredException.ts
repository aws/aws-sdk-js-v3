import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployment configuration name was not specified.</p>
 */
export interface DeploymentConfigNameRequiredException
  extends __ServiceException__<_DeploymentConfigNameRequiredExceptionDetails> {
  name: "DeploymentConfigNameRequiredException";
}

export interface _DeploymentConfigNameRequiredExceptionDetails {}
