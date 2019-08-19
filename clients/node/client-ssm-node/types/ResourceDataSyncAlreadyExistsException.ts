import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A sync configuration with the same name already exists.</p>
 */
export interface ResourceDataSyncAlreadyExistsException
  extends __ServiceException__<_ResourceDataSyncAlreadyExistsExceptionDetails> {
  name: "ResourceDataSyncAlreadyExistsException";
}

export interface _ResourceDataSyncAlreadyExistsExceptionDetails {
  /**
   * _ResourceDataSyncName shape
   */
  SyncName?: string;
}
