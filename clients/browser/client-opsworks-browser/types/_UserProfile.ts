/**
 * <p>Describes a user's SSH information.</p>
 */
export interface _UserProfile {
  /**
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;

  /**
   * <p>The user's name.</p>
   */
  Name?: string;

  /**
   * <p>The user's SSH user name.</p>
   */
  SshUsername?: string;

  /**
   * <p>The user's SSH public key.</p>
   */
  SshPublicKey?: string;

  /**
   * <p>Whether users can specify their own SSH public key through the My Settings page. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html">Managing User Permissions</a>.</p>
   */
  AllowSelfManagement?: boolean;
}

export type _UnmarshalledUserProfile = _UserProfile;
