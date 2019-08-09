import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB instance.</p>
 */
export interface InvalidRestoreFault
  extends __ServiceException__<_InvalidRestoreFaultDetails> {
  name: "InvalidRestoreFault";
}

export interface _InvalidRestoreFaultDetails {}
