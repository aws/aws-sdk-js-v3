import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB instance isn't in a valid state.</p>
 */
export interface InvalidDBInstanceStateFault
  extends __ServiceException__<_InvalidDBInstanceStateFaultDetails> {
  name: "InvalidDBInstanceStateFault";
}

export interface _InvalidDBInstanceStateFaultDetails {}
