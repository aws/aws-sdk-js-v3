/**
 * <p>Describes a user in the user pool.</p>
 */
export interface _User {
  /**
   * <p>The ARN of the user.</p>
   */
  Arn?: string;

  /**
   * <p>The email address of the user.</p> <note> <p>Users' email addresses are case-sensitive.</p> </note>
   */
  UserName?: string;

  /**
   * <p>Specifies whether the user in the user pool is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The status of the user in the user pool. The status can be one of the following:</p> <ul> <li> <p>UNCONFIRMED – The user is created but not confirmed.</p> </li> <li> <p>CONFIRMED – The user is confirmed.</p> </li> <li> <p>ARCHIVED – The user is no longer active.</p> </li> <li> <p>COMPROMISED – The user is disabled because of a potential security threat.</p> </li> <li> <p>UNKNOWN – The user status is not known.</p> </li> </ul>
   */
  Status?: string;

  /**
   * <p>The first name, or given name, of the user.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name, or surname, of the user.</p>
   */
  LastName?: string;

  /**
   * <p>The date and time the user was created in the user pool.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The authentication type for the user.</p>
   */
  AuthenticationType: "API" | "SAML" | "USERPOOL" | string;
}

export interface _UnmarshalledUser extends _User {
  /**
   * <p>The date and time the user was created in the user pool.</p>
   */
  CreatedTime?: Date;
}
