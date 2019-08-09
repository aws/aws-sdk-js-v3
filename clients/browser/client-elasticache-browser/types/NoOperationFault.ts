import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation was not performed because no changes were required.</p>
 */
export interface NoOperationFault
  extends __ServiceException__<_NoOperationFaultDetails> {
  name: "NoOperationFault";
}

export interface _NoOperationFaultDetails {}
