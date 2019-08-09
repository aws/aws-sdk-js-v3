import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the specified custom key store name is already assigned to another custom key store in the account. Try again with a custom key store name that is unique in the account.</p>
 */
export interface CustomKeyStoreNameInUseException
  extends __ServiceException__<_CustomKeyStoreNameInUseExceptionDetails> {
  name: "CustomKeyStoreNameInUseException";
}

export interface _CustomKeyStoreNameInUseExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  message?: string;
}
