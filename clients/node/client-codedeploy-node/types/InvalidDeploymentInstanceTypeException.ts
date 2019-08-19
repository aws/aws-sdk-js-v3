import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An instance type was specified for an in-place deployment. Instance types are supported for blue/green deployments only.</p>
 */
export interface InvalidDeploymentInstanceTypeException
  extends __ServiceException__<_InvalidDeploymentInstanceTypeExceptionDetails> {
  name: "InvalidDeploymentInstanceTypeException";
}

export interface _InvalidDeploymentInstanceTypeExceptionDetails {}
