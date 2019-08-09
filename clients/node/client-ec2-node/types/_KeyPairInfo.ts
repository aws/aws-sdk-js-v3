/**
 * <p>Describes a key pair.</p>
 */
export interface _KeyPairInfo {
  /**
   * <p>If you used <a>CreateKeyPair</a> to create the key pair, this is the SHA-1 digest of the DER encoded private key. If you used <a>ImportKeyPair</a> to provide AWS the public key, this is the MD5 public key fingerprint as specified in section 4 of RFC4716.</p>
   */
  KeyFingerprint?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;
}

export type _UnmarshalledKeyPairInfo = _KeyPairInfo;
