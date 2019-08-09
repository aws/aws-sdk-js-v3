/**
 * <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> operation.</p>
 */
export interface _SSHPublicKeyMetadata {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   */
  UserName: string;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   */
  SSHPublicKeyId: string;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for authentication with an AWS CodeCommit repository. <code>Inactive</code> means that the key cannot be used.</p>
   */
  Status: "Active" | "Inactive" | string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate: Date | string | number;
}

export interface _UnmarshalledSSHPublicKeyMetadata
  extends _SSHPublicKeyMetadata {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate: Date;
}
