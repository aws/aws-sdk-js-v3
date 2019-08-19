import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of documents in the request exceeds the limit of 25. Try your request again with fewer documents.</p>
 */
export interface BatchSizeLimitExceededException
  extends __ServiceException__<_BatchSizeLimitExceededExceptionDetails> {
  name: "BatchSizeLimitExceededException";
}

export interface _BatchSizeLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
