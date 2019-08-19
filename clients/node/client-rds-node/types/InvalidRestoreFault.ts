import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
 */
export interface InvalidRestoreFault
  extends __ServiceException__<_InvalidRestoreFaultDetails> {
  name: "InvalidRestoreFault";
}

export interface _InvalidRestoreFaultDetails {}
