import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the allowed maximum sync configurations.</p>
 */
export interface ResourceDataSyncCountExceededException
  extends __ServiceException__<_ResourceDataSyncCountExceededExceptionDetails> {
  name: "ResourceDataSyncCountExceededException";
}

export interface _ResourceDataSyncCountExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
