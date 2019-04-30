import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Error code 400. Unsupported operation.</p>
 */
export interface UnsupportedOperation
  extends __ServiceException__<_UnsupportedOperationDetails> {
  name: "UnsupportedOperation";
}

export interface _UnsupportedOperationDetails {}
