import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because AWS KMS cannot find a custom key store with the specified key store name or ID.</p>
 */
export interface CustomKeyStoreNotFoundException
  extends __ServiceException__<_CustomKeyStoreNotFoundExceptionDetails> {
  name: "CustomKeyStoreNotFoundException";
}

export interface _CustomKeyStoreNotFoundExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  message?: string;
}
