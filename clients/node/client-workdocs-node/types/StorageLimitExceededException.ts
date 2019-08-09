import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The storage limit has been exceeded.</p>
 */
export interface StorageLimitExceededException
  extends __ServiceException__<_StorageLimitExceededExceptionDetails> {
  name: "StorageLimitExceededException";
}

export interface _StorageLimitExceededExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
