import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS DMS cannot access the AWS KMS key.</p>
 */
export interface KMSKeyNotAccessibleFault
  extends __ServiceException__<_KMSKeyNotAccessibleFaultDetails> {
  name: "KMSKeyNotAccessibleFault";
}

export interface _KMSKeyNotAccessibleFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
