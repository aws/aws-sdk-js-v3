import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested tag was not found on this resource.</p>
 */
export interface TagNotFoundFault
  extends __ServiceException__<_TagNotFoundFaultDetails> {
  name: "TagNotFoundFault";
}

export interface _TagNotFoundFaultDetails {}
