import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or use a smaller document and then retry your request. </p>
 */
export interface TextSizeLimitExceededException
  extends __ServiceException__<_TextSizeLimitExceededExceptionDetails> {
  name: "TextSizeLimitExceededException";
}

export interface _TextSizeLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
