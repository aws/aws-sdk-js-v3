import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The query key ID is not valid.</p>
 */
export interface InvalidKeyId
  extends __ServiceException__<_InvalidKeyIdDetails> {
  name: "InvalidKeyId";
}

export interface _InvalidKeyIdDetails {
  /**
   * _String shape
   */
  message?: string;
}
