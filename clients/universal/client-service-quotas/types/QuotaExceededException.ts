import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use Service Quotas to request a service quota increase.</p>
 */
export interface QuotaExceededException
  extends __ServiceException__<_QuotaExceededExceptionDetails> {
  name: "QuotaExceededException";
}

export interface _QuotaExceededExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
