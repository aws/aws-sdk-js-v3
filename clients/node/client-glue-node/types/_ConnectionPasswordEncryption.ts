/**
 * <p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set AWS KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only admin users to have decrypt permission on the password key.</p>
 */
export interface _ConnectionPasswordEncryption {
  /**
   * <p>When the <code>ReturnConnectionPasswordEncrypted</code> flag is set to "true", passwords remain encrypted in the responses of <code>GetConnection</code> and <code>GetConnections</code>. This encryption takes effect independently from catalog encryption. </p>
   */
  ReturnConnectionPasswordEncrypted: boolean;

  /**
   * <p>An AWS KMS key that is used to encrypt the connection password. </p> <p>If connection password protection is enabled, the caller of <code>CreateConnection</code> and <code>UpdateConnection</code> needs at least <code>kms:Encrypt</code> permission on the specified AWS KMS key, to encrypt passwords before storing them in the Data Catalog. </p> <p>You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.</p>
   */
  AwsKmsKeyId?: string;
}

export type _UnmarshalledConnectionPasswordEncryption = _ConnectionPasswordEncryption;
