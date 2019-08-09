import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>At least one of the deployment IDs was specified in an invalid format.</p>
 */
export interface InvalidDeploymentIdException
  extends __ServiceException__<_InvalidDeploymentIdExceptionDetails> {
  name: "InvalidDeploymentIdException";
}

export interface _InvalidDeploymentIdExceptionDetails {}
