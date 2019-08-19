import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The deployment group name was specified in an invalid format.</p>
 */
export interface InvalidDeploymentGroupNameException
  extends __ServiceException__<_InvalidDeploymentGroupNameExceptionDetails> {
  name: "InvalidDeploymentGroupNameException";
}

export interface _InvalidDeploymentGroupNameExceptionDetails {}
