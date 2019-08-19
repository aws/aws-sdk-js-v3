import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An encryption operation failed.</p>
 */
export interface GlueEncryptionException
  extends __ServiceException__<_GlueEncryptionExceptionDetails> {
  name: "GlueEncryptionException";
}

export interface _GlueEncryptionExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
