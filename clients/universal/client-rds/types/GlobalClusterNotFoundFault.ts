import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GlobalClusterNotFoundFault
  extends __ServiceException__<_GlobalClusterNotFoundFaultDetails> {
  name: "GlobalClusterNotFoundFault";
}

export interface _GlobalClusterNotFoundFaultDetails {}
