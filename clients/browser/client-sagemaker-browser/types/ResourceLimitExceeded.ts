import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
 */
export interface ResourceLimitExceeded
  extends __ServiceException__<_ResourceLimitExceededDetails> {
  name: "ResourceLimitExceeded";
}

export interface _ResourceLimitExceededDetails {
  /**
   * _FailureReason shape
   */
  Message?: string;
}
