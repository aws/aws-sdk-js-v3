import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Request would exceed the user's DB Instance quota.</p>
 */
export interface ReservedDBInstanceQuotaExceededFault
  extends __ServiceException__<_ReservedDBInstanceQuotaExceededFaultDetails> {
  name: "ReservedDBInstanceQuotaExceededFault";
}

export interface _ReservedDBInstanceQuotaExceededFaultDetails {}
