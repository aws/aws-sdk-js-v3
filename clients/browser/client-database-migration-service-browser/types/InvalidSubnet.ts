import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The subnet provided is invalid.</p>
 */
export interface InvalidSubnet
  extends __ServiceException__<_InvalidSubnetDetails> {
  name: "InvalidSubnet";
}

export interface _InvalidSubnetDetails {
  /**
   * <p/>
   */
  message?: string;
}
