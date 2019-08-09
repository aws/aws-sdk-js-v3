/**
 * <p>A <code>UserSummary</code> object that contains Information about a user, including ARN, Id, and user name.</p>
 */
export interface _UserSummary {
  /**
   * <p>The identifier for the user account.</p>
   */
  Id?: string;

  /**
   * <p>The ARN for the user account.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Connect user name for the user account.</p>
   */
  Username?: string;
}

export type _UnmarshalledUserSummary = _UserSummary;
