import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resize operation for the specified cluster is not found.</p>
 */
export interface ResizeNotFoundFault
  extends __ServiceException__<_ResizeNotFoundFaultDetails> {
  name: "ResizeNotFoundFault";
}

export interface _ResizeNotFoundFaultDetails {}
