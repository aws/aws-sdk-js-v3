import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The size of the input text exceeds the limit. Use a smaller document.</p>
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
