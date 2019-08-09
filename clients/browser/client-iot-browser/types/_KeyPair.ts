/**
 * <p>Describes a key pair.</p>
 */
export interface _KeyPair {
  /**
   * <p>The public key.</p>
   */
  PublicKey?: string;

  /**
   * <p>The private key.</p>
   */
  PrivateKey?: string;
}

export type _UnmarshalledKeyPair = _KeyPair;
