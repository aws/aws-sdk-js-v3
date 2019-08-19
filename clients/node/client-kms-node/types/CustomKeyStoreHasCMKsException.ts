import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the custom key store contains AWS KMS customer master keys (CMKs). After verifying that you do not need to use the CMKs, use the <a>ScheduleKeyDeletion</a> operation to delete the CMKs. After they are deleted, you can delete the custom key store.</p>
 */
export interface CustomKeyStoreHasCMKsException
  extends __ServiceException__<_CustomKeyStoreHasCMKsExceptionDetails> {
  name: "CustomKeyStoreHasCMKsException";
}

export interface _CustomKeyStoreHasCMKsExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  message?: string;
}
