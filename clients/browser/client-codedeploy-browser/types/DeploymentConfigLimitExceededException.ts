import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployment configurations limit was exceeded.</p>
 */
export interface DeploymentConfigLimitExceededException
  extends __ServiceException__<_DeploymentConfigLimitExceededExceptionDetails> {
  name: "DeploymentConfigLimitExceededException";
}

export interface _DeploymentConfigLimitExceededExceptionDetails {}
