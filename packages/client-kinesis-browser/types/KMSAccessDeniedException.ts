import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The ciphertext references a key that doesn't exist or that you don't have access to.</p>
 */
export interface KMSAccessDeniedException
  extends __ServiceException__<_KMSAccessDeniedExceptionDetails> {
  name: "KMSAccessDeniedException";
}

export interface _KMSAccessDeniedExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
