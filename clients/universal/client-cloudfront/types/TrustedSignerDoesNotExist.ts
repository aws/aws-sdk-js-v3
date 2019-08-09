import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more of your trusted signers don't exist.</p>
 */
export interface TrustedSignerDoesNotExist
  extends __ServiceException__<_TrustedSignerDoesNotExistDetails> {
  name: "TrustedSignerDoesNotExist";
}

export interface _TrustedSignerDoesNotExistDetails {
  /**
   * _string shape
   */
  Message?: string;
}
