import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>User already has a reservation with the given identifier.</p>
 */
export interface ReservedDBInstanceAlreadyExistsFault
  extends __ServiceException__<_ReservedDBInstanceAlreadyExistsFaultDetails> {
  name: "ReservedDBInstanceAlreadyExistsFault";
}

export interface _ReservedDBInstanceAlreadyExistsFaultDetails {}
