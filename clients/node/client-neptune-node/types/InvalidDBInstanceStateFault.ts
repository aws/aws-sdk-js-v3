import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified DB instance is not in the <i>available</i> state.</p>
 */
export interface InvalidDBInstanceStateFault
  extends __ServiceException__<_InvalidDBInstanceStateFaultDetails> {
  name: "InvalidDBInstanceStateFault";
}

export interface _InvalidDBInstanceStateFaultDetails {}
