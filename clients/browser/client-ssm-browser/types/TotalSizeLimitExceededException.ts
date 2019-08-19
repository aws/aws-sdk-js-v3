import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The size of inventory data has exceeded the total size limit for the resource.</p>
 */
export interface TotalSizeLimitExceededException
  extends __ServiceException__<_TotalSizeLimitExceededExceptionDetails> {
  name: "TotalSizeLimitExceededException";
}

export interface _TotalSizeLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
