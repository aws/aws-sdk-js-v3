/**
 * <p>Specifies the use of SSE-KMS to encrypt delivered Inventory reports.</p>
 */
export interface _SSEKMS {
  /**
   * <p>Specifies the ID of the AWS Key Management Service (KMS) master encryption key to use for encrypting Inventory reports.</p>
   */
  KeyId: string;
}

export type _UnmarshalledSSEKMS = _SSEKMS;
