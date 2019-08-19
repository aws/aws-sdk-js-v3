import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource ID was not found.</p>
 */
export interface ResourceNotFoundFault
  extends __ServiceException__<_ResourceNotFoundFaultDetails> {
  name: "ResourceNotFoundFault";
}

export interface _ResourceNotFoundFaultDetails {}
