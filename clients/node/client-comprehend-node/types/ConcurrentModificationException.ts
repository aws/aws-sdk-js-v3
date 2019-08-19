import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Concurrent modification of the tags associated with an Amazon Comprehend resource is not supported. </p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
