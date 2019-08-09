/**
 * <p>Describes a user's SSH information.</p>
 */
export interface _SelfUserProfile {
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
}

export type _UnmarshalledSelfUserProfile = _SelfUserProfile;
