import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployment configuration is still in use.</p>
 */
export interface DeploymentConfigInUseException
  extends __ServiceException__<_DeploymentConfigInUseExceptionDetails> {
  name: "DeploymentConfigInUseException";
}

export interface _DeploymentConfigInUseExceptionDetails {}
