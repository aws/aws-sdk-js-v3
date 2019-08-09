import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
 */
export interface InsufficientDBInstanceCapacityFault
  extends __ServiceException__<_InsufficientDBInstanceCapacityFaultDetails> {
  name: "InsufficientDBInstanceCapacityFault";
}

export interface _InsufficientDBInstanceCapacityFaultDetails {}
