import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>At least one deployment ID must be specified.</p>
 */
export interface DeploymentIdRequiredException
  extends __ServiceException__<_DeploymentIdRequiredExceptionDetails> {
  name: "DeploymentIdRequiredException";
}

export interface _DeploymentIdRequiredExceptionDetails {}
