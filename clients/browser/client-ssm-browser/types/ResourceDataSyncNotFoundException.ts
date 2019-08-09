import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified sync name was not found.</p>
 */
export interface ResourceDataSyncNotFoundException
  extends __ServiceException__<_ResourceDataSyncNotFoundExceptionDetails> {
  name: "ResourceDataSyncNotFoundException";
}

export interface _ResourceDataSyncNotFoundExceptionDetails {
  /**
   * _ResourceDataSyncName shape
   */
  SyncName?: string;
}
