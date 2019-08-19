import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The storage limit will be exceeded.</p>
 */
export interface StorageLimitWillExceedException
  extends __ServiceException__<_StorageLimitWillExceedExceptionDetails> {
  name: "StorageLimitWillExceedException";
}

export interface _StorageLimitWillExceedExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
