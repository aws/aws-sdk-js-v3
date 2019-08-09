import { _SSES3, _UnmarshalledSSES3 } from "./_SSES3";
import { _SSEKMS, _UnmarshalledSSEKMS } from "./_SSEKMS";

/**
 * <p>Contains the type of server-side encryption used to encrypt the inventory results.</p>
 */
export interface _InventoryEncryption {
  /**
   * <p>Specifies the use of SSE-S3 to encrypt delivered Inventory reports.</p>
   */
  SSES3?: _SSES3;

  /**
   * <p>Specifies the use of SSE-KMS to encrypt delivered Inventory reports.</p>
   */
  SSEKMS?: _SSEKMS;
}

export interface _UnmarshalledInventoryEncryption extends _InventoryEncryption {
  /**
   * <p>Specifies the use of SSE-S3 to encrypt delivered Inventory reports.</p>
   */
  SSES3?: _UnmarshalledSSES3;

  /**
   * <p>Specifies the use of SSE-KMS to encrypt delivered Inventory reports.</p>
   */
  SSEKMS?: _UnmarshalledSSEKMS;
}
