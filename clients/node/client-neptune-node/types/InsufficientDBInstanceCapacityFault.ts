import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Specified DB instance class is not available in the specified Availability Zone.</p>
 */
export interface InsufficientDBInstanceCapacityFault
  extends __ServiceException__<_InsufficientDBInstanceCapacityFaultDetails> {
  name: "InsufficientDBInstanceCapacityFault";
}

export interface _InsufficientDBInstanceCapacityFaultDetails {}
