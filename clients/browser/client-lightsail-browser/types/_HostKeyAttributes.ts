/**
 * <p>Describes the public SSH host keys or the RDP certificate.</p>
 */
export interface _HostKeyAttributes {
  /**
   * <p>The SSH host key algorithm or the RDP certificate format.</p> <p>For SSH host keys, the algorithm may be <code>ssh-rsa</code>, <code>ecdsa-sha2-nistp256</code>, <code>ssh-ed25519</code>, etc. For RDP certificates, the algorithm is always <code>x509-cert</code>.</p>
   */
  algorithm?: string;

  /**
   * <p>The public SSH host key or the RDP certificate.</p>
   */
  publicKey?: string;

  /**
   * <p>The time that the SSH host key or RDP certificate was recorded by Lightsail.</p>
   */
  witnessedAt?: Date | string | number;

  /**
   * <p>The SHA-1 fingerprint of the returned SSH host key or RDP certificate.</p> <ul> <li> <p>Example of an SHA-1 SSH fingerprint:</p> <p> <code>SHA1:1CHH6FaAaXjtFOsR/t83vf91SR0</code> </p> </li> <li> <p>Example of an SHA-1 RDP fingerprint:</p> <p> <code>af:34:51:fe:09:f0:e0:da:b8:4e:56:ca:60:c2:10:ff:38:06:db:45</code> </p> </li> </ul>
   */
  fingerprintSHA1?: string;

  /**
   * <p>The SHA-256 fingerprint of the returned SSH host key or RDP certificate.</p> <ul> <li> <p>Example of an SHA-256 SSH fingerprint:</p> <p> <code>SHA256:KTsMnRBh1IhD17HpdfsbzeGA4jOijm5tyXsMjKVbB8o</code> </p> </li> <li> <p>Example of an SHA-256 RDP fingerprint:</p> <p> <code>03:9b:36:9f:4b:de:4e:61:70:fc:7c:c9:78:e7:d2:1a:1c:25:a8:0c:91:f6:7c:e4:d6:a0:85:c8:b4:53:99:68</code> </p> </li> </ul>
   */
  fingerprintSHA256?: string;

  /**
   * <p>The returned RDP certificate is valid after this point in time.</p> <p>This value is listed only for RDP certificates.</p>
   */
  notValidBefore?: Date | string | number;

  /**
   * <p>The returned RDP certificate is not valid after this point in time.</p> <p>This value is listed only for RDP certificates.</p>
   */
  notValidAfter?: Date | string | number;
}

export interface _UnmarshalledHostKeyAttributes extends _HostKeyAttributes {
  /**
   * <p>The time that the SSH host key or RDP certificate was recorded by Lightsail.</p>
   */
  witnessedAt?: Date;

  /**
   * <p>The returned RDP certificate is valid after this point in time.</p> <p>This value is listed only for RDP certificates.</p>
   */
  notValidBefore?: Date;

  /**
   * <p>The returned RDP certificate is not valid after this point in time.</p> <p>This value is listed only for RDP certificates.</p>
   */
  notValidAfter?: Date;
}
