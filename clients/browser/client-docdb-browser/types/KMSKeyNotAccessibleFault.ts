import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An error occurred when accessing an AWS KMS key.</p>
 */
export interface KMSKeyNotAccessibleFault
  extends __ServiceException__<_KMSKeyNotAccessibleFaultDetails> {
  name: "KMSKeyNotAccessibleFault";
}

export interface _KMSKeyNotAccessibleFaultDetails {}
