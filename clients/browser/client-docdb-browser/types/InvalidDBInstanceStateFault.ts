import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The specified DB instance isn't in the <i>available</i> state. </p>
 */
export interface InvalidDBInstanceStateFault
  extends __ServiceException__<_InvalidDBInstanceStateFaultDetails> {
  name: "InvalidDBInstanceStateFault";
}

export interface _InvalidDBInstanceStateFaultDetails {}
