import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A call was submitted that is not supported for the specified deployment type.</p>
 */
export interface UnsupportedActionForDeploymentTypeException
  extends __ServiceException__<
    _UnsupportedActionForDeploymentTypeExceptionDetails
  > {
  name: "UnsupportedActionForDeploymentTypeException";
}

export interface _UnsupportedActionForDeploymentTypeExceptionDetails {}
