import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A request option was specified that is not supported.</p>
 */
export interface UnsupportedOptionFault
  extends __ServiceException__<_UnsupportedOptionFaultDetails> {
  name: "UnsupportedOptionFault";
}

export interface _UnsupportedOptionFaultDetails {}
