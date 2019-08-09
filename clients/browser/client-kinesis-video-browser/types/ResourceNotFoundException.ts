import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
