/**
 * <p>Information about a cipher used in a policy.</p>
 */
export interface _Cipher {
  /**
   * <p>The name of the cipher.</p>
   */
  Name?: string;

  /**
   * <p>The priority of the cipher.</p>
   */
  Priority?: number;
}

export type _UnmarshalledCipher = _Cipher;
