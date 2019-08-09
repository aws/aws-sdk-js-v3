/**
 * <p>Describes stack or user permissions.</p>
 */
export interface _Permission {
  /**
   * <p>A stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for an AWS Identity and Access Management (IAM) role. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.</p>
   */
  IamUserArn?: string;

  /**
   * <p>Whether the user can use SSH.</p>
   */
  AllowSsh?: boolean;

  /**
   * <p>Whether the user can use <b>sudo</b>.</p>
   */
  AllowSudo?: boolean;

  /**
   * <p>The user's permission level, which must be the following:</p> <ul> <li> <p> <code>deny</code> </p> </li> <li> <p> <code>show</code> </p> </li> <li> <p> <code>deploy</code> </p> </li> <li> <p> <code>manage</code> </p> </li> <li> <p> <code>iam_only</code> </p> </li> </ul> <p>For more information on the permissions associated with these levels, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a> </p>
   */
  Level?: string;
}

export type _UnmarshalledPermission = _Permission;
