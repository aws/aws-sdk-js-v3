import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The file size or duration of the supplied media is too large. The maximum file size is 8GB. The maximum duration is 2 hours. </p>
 */
export interface VideoTooLargeException
  extends __ServiceException__<_VideoTooLargeExceptionDetails> {
  name: "VideoTooLargeException";
}

export interface _VideoTooLargeExceptionDetails {}
