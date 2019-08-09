/**
 * <p>Returns properties of the user that you specify.</p>
 */
export interface _ListedUser {
  /**
   * <p>This property is the unique Amazon Resource Name (ARN) for the user that you wish to learn about.</p>
   */
  Arn: string;

  /**
   * <p>This value specifies the location that files are written to or read from an Amazon S3 bucket for the user you specify by their ARN.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>The role in use by this user. A <i>role</i> is an AWS Identity and Access Management (IAM) entity that in this case allows the SFTP server to act on a user's behalf. It allows the server to inherit the trust relationship that enables that user to perform file operations to their Amazon S3 bucket.</p>
   */
  Role?: string;

  /**
   * <p>This value is the number of SSH public keys stored for the user you specified.</p>
   */
  SshPublicKeyCount?: number;

  /**
   * <p>The name of the user whose ARN was specified. User names are used for authentication purposes.</p>
   */
  UserName?: string;
}

export type _UnmarshalledListedUser = _ListedUser;
