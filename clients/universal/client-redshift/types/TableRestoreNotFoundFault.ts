import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified <code>TableRestoreRequestId</code> value was not found.</p>
 */
export interface TableRestoreNotFoundFault
  extends __ServiceException__<_TableRestoreNotFoundFaultDetails> {
  name: "TableRestoreNotFoundFault";
}

export interface _TableRestoreNotFoundFaultDetails {}
