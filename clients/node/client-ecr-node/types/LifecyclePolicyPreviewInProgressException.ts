import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The previous lifecycle policy preview request has not completed. Please try again later.</p>
 */
export interface LifecyclePolicyPreviewInProgressException
  extends __ServiceException__<
    _LifecyclePolicyPreviewInProgressExceptionDetails
  > {
  name: "LifecyclePolicyPreviewInProgressException";
}

export interface _LifecyclePolicyPreviewInProgressExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
