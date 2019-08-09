/**
 * <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p>
 */
export interface _SSHPublicKey {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   */
  UserName: string;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   */
  SSHPublicKeyId: string;

  /**
   * <p>The MD5 message digest of the SSH public key.</p>
   */
  Fingerprint: string;

  /**
   * <p>The SSH public key.</p>
   */
  SSHPublicKeyBody: string;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for authentication with an AWS CodeCommit repository. <code>Inactive</code> means that the key cannot be used.</p>
   */
  Status: "Active" | "Inactive" | string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate?: Date | string | number;
}

export interface _UnmarshalledSSHPublicKey extends _SSHPublicKey {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate?: Date;
}
