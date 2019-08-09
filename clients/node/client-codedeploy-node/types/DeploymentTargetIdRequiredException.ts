import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> A deployment target ID was not provided. </p>
 */
export interface DeploymentTargetIdRequiredException
  extends __ServiceException__<_DeploymentTargetIdRequiredExceptionDetails> {
  name: "DeploymentTargetIdRequiredException";
}

export interface _DeploymentTargetIdRequiredExceptionDetails {}
