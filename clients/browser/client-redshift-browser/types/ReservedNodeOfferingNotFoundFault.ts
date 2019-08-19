import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Specified offering does not exist.</p>
 */
export interface ReservedNodeOfferingNotFoundFault
  extends __ServiceException__<_ReservedNodeOfferingNotFoundFaultDetails> {
  name: "ReservedNodeOfferingNotFoundFault";
}

export interface _ReservedNodeOfferingNotFoundFaultDetails {}
