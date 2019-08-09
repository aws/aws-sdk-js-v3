import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The wait type is invalid. </p>
 */
export interface InvalidDeploymentWaitTypeException
  extends __ServiceException__<_InvalidDeploymentWaitTypeExceptionDetails> {
  name: "InvalidDeploymentWaitTypeException";
}

export interface _InvalidDeploymentWaitTypeExceptionDetails {}
