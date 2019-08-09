import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>User already has a reservation with the given identifier.</p>
 */
export interface ReservedNodeAlreadyExistsFault
  extends __ServiceException__<_ReservedNodeAlreadyExistsFaultDetails> {
  name: "ReservedNodeAlreadyExistsFault";
}

export interface _ReservedNodeAlreadyExistsFaultDetails {}
