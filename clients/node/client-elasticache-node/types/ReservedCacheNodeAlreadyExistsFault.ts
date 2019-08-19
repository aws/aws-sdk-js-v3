import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You already have a reservation with the given identifier.</p>
 */
export interface ReservedCacheNodeAlreadyExistsFault
  extends __ServiceException__<_ReservedCacheNodeAlreadyExistsFaultDetails> {
  name: "ReservedCacheNodeAlreadyExistsFault";
}

export interface _ReservedCacheNodeAlreadyExistsFaultDetails {}
