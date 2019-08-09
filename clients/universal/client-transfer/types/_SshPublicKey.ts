/**
 * <p>Provides information about the public Secure Shell (SSH) key that is associated with a user account for a specific server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific SFTP server.</p>
 */
export interface _SshPublicKey {
  /**
   * <p>The date that the public key was added to the user account.</p>
   */
  DateImported: Date | string | number;

  /**
   * <p>The content of the SSH public key as specified by the <code>PublicKeyId</code>.</p>
   */
  SshPublicKeyBody: string;

  /**
   * <p>The <code>SshPublicKeyId</code> parameter contains the identifier of the public key.</p>
   */
  SshPublicKeyId: string;
}

export interface _UnmarshalledSshPublicKey extends _SshPublicKey {
  /**
   * <p>The date that the public key was added to the user account.</p>
   */
  DateImported: Date;
}
