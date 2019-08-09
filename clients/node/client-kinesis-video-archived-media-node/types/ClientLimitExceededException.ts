import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
 */
export interface ClientLimitExceededException
  extends __ServiceException__<_ClientLimitExceededExceptionDetails> {
  name: "ClientLimitExceededException";
}

export interface _ClientLimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
