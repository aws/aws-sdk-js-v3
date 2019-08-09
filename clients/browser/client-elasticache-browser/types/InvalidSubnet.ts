import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid subnet identifier was specified.</p>
 */
export interface InvalidSubnet
  extends __ServiceException__<_InvalidSubnetDetails> {
  name: "InvalidSubnet";
}

export interface _InvalidSubnetDetails {}
