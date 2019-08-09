import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployment group name was not specified.</p>
 */
export interface DeploymentGroupNameRequiredException
  extends __ServiceException__<_DeploymentGroupNameRequiredExceptionDetails> {
  name: "DeploymentGroupNameRequiredException";
}

export interface _DeploymentGroupNameRequiredExceptionDetails {}
