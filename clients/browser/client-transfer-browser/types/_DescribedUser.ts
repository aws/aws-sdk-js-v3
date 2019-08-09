import { _SshPublicKey, _UnmarshalledSshPublicKey } from "./_SshPublicKey";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Returns properties of the user that you wish to describe.</p>
 */
export interface _DescribedUser {
  /**
   * <p>This property contains the unique Amazon Resource Name (ARN) for the user that was requested to be described.</p>
   */
  Arn: string;

  /**
   * <p>This property specifies the landing directory (or folder) which is the location that files are written to or read from in an Amazon S3 bucket for the described user. An example would be: <code>/<i>bucket_name</i>/home/<i>username</i> </code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>Specifies the name of the policy in use for the described user.</p>
   */
  Policy?: string;

  /**
   * <p>This property specifies the IAM role that controls your user's access to your Amazon S3 bucket. The policies attached to this role will determine the level of access you want to provide your users when transferring files into and out of your Amazon S3 bucket or buckets. The IAM role should also contain a trust relationship that allows the SFTP server to access your resources when servicing your SFTP user's transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>This property contains the public key portion of the Secure Shell (SSH) keys stored for the described user.</p>
   */
  SshPublicKeys?: Array<_SshPublicKey> | Iterable<_SshPublicKey>;

  /**
   * <p>This property contains the key-value pairs for the user requested. Tag can be used to search for and group users for a variety of purposes.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>This property is the name of the user that was requested to be described. User names are used for authentication purposes. This is the string that will be used by your user when they log in to your SFTP server.</p>
   */
  UserName?: string;
}

export interface _UnmarshalledDescribedUser extends _DescribedUser {
  /**
   * <p>This property contains the public key portion of the Secure Shell (SSH) keys stored for the described user.</p>
   */
  SshPublicKeys?: Array<_UnmarshalledSshPublicKey>;

  /**
   * <p>This property contains the key-value pairs for the user requested. Tag can be used to search for and group users for a variety of purposes.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
