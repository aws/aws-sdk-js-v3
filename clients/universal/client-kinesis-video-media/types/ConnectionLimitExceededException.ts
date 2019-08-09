import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client connections.</p>
 */
export interface ConnectionLimitExceededException
  extends __ServiceException__<_ConnectionLimitExceededExceptionDetails> {
  name: "ConnectionLimitExceededException";
}

export interface _ConnectionLimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
