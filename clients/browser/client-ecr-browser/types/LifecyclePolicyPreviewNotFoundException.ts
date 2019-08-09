import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no dry run for this repository.</p>
 */
export interface LifecyclePolicyPreviewNotFoundException
  extends __ServiceException__<
    _LifecyclePolicyPreviewNotFoundExceptionDetails
  > {
  name: "LifecyclePolicyPreviewNotFoundException";
}

export interface _LifecyclePolicyPreviewNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
