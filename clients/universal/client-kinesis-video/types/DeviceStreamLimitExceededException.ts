import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Not implemented. </p>
 */
export interface DeviceStreamLimitExceededException
  extends __ServiceException__<_DeviceStreamLimitExceededExceptionDetails> {
  name: "DeviceStreamLimitExceededException";
}

export interface _DeviceStreamLimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
