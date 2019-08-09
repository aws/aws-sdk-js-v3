import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested cache node offering does not exist.</p>
 */
export interface ReservedCacheNodesOfferingNotFoundFault
  extends __ServiceException__<
    _ReservedCacheNodesOfferingNotFoundFaultDetails
  > {
  name: "ReservedCacheNodesOfferingNotFoundFault";
}

export interface _ReservedCacheNodesOfferingNotFoundFaultDetails {}
