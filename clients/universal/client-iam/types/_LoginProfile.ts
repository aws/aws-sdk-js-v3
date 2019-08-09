/**
 * <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
 */
export interface _LoginProfile {
  /**
   * <p>The name of the user, which can be used for signing in to the AWS Management Console.</p>
   */
  UserName: string;

  /**
   * <p>The date when the password for the user was created.</p>
   */
  CreateDate: Date | string | number;

  /**
   * <p>Specifies whether the user is required to set a new password on next sign-in.</p>
   */
  PasswordResetRequired?: boolean;
}

export interface _UnmarshalledLoginProfile extends _LoginProfile {
  /**
   * <p>The date when the password for the user was created.</p>
   */
  CreateDate: Date;
}
