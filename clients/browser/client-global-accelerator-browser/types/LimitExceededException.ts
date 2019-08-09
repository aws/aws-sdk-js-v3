import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Processing your request would cause you to exceed an AWS Global Accelerator limit.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
