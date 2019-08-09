import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The lifecycle policy could not be found, and no policy is set to the repository.</p>
 */
export interface LifecyclePolicyNotFoundException
  extends __ServiceException__<_LifecyclePolicyNotFoundExceptionDetails> {
  name: "LifecyclePolicyNotFoundException";
}

export interface _LifecyclePolicyNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
