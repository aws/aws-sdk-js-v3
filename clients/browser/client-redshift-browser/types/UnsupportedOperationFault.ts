import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation isn't supported.</p>
 */
export interface UnsupportedOperationFault
  extends __ServiceException__<_UnsupportedOperationFaultDetails> {
  name: "UnsupportedOperationFault";
}

export interface _UnsupportedOperationFaultDetails {}
