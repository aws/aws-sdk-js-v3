import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The tag does not exist.</p>
 */
export interface TagNotFoundFault
  extends __ServiceException__<_TagNotFoundFaultDetails> {
  name: "TagNotFoundFault";
}

export interface _TagNotFoundFaultDetails {}
