import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified reserved DB Instance not found.</p>
 */
export interface ReservedDBInstanceNotFoundFault
  extends __ServiceException__<_ReservedDBInstanceNotFoundFaultDetails> {
  name: "ReservedDBInstanceNotFoundFault";
}

export interface _ReservedDBInstanceNotFoundFaultDetails {}
