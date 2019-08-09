/**
 * <p>A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription can't contain more than 20 million users.</p>
 */
export interface _User {
  /**
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   */
  Arn?: string;

  /**
   * <p>The user's user name.</p>
   */
  UserName?: string;

  /**
   * <p>The user's email address.</p>
   */
  Email?: string;

  /**
   * <p>The Amazon QuickSight role for the user.</p>
   */
  Role?:
    | "ADMIN"
    | "AUTHOR"
    | "READER"
    | "RESTRICTED_AUTHOR"
    | "RESTRICTED_READER"
    | string;

  /**
   * <p>The type of identity authentication used by the user.</p>
   */
  IdentityType?: "IAM" | "QUICKSIGHT" | string;

  /**
   * <p>Active status of user. When you create an Amazon QuickSight user that’s not an IAM user or an AD user, that user is inactive until they sign in and provide a password</p>
   */
  Active?: boolean;

  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;
}

export type _UnmarshalledUser = _User;
