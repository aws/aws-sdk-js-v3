import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number for a batch delete of snapshots has been reached. The limit is 100. </p>
 */
export interface BatchDeleteRequestSizeExceededFault
  extends __ServiceException__<_BatchDeleteRequestSizeExceededFaultDetails> {
  name: "BatchDeleteRequestSizeExceededFault";
}

export interface _BatchDeleteRequestSizeExceededFaultDetails {}
