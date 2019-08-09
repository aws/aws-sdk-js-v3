import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A dependency required to run the API is missing.</p>
 */
export interface FailedDependencyException
  extends __ServiceException__<_FailedDependencyExceptionDetails> {
  name: "FailedDependencyException";
}

export interface _FailedDependencyExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
