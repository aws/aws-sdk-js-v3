import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The failure percentage threshold percentage was met.</p>
 */
export interface ConcurrentDeploymentException
  extends __ServiceException__<_ConcurrentDeploymentExceptionDetails> {
  name: "ConcurrentDeploymentException";
}

export interface _ConcurrentDeploymentExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
