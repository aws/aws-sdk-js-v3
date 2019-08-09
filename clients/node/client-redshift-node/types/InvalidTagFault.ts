import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The tag is invalid.</p>
 */
export interface InvalidTagFault
  extends __ServiceException__<_InvalidTagFaultDetails> {
  name: "InvalidTagFault";
}

export interface _InvalidTagFaultDetails {}
