/**
 * <p>The representation of an Amazon WorkMail user.</p>
 */
export interface _User {
  /**
   * <p>The identifier of the user.</p>
   */
  Id?: string;

  /**
   * <p>The email of the user.</p>
   */
  Email?: string;

  /**
   * <p>The name of the user.</p>
   */
  Name?: string;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The state of the user, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: "ENABLED" | "DISABLED" | "DELETED" | string;

  /**
   * <p>The role of the user.</p>
   */
  UserRole?: "USER" | "RESOURCE" | "SYSTEM_USER" | string;

  /**
   * <p>The date indicating when the user was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date | string | number;

  /**
   * <p>The date indicating when the user was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date | string | number;
}

export interface _UnmarshalledUser extends _User {
  /**
   * <p>The date indicating when the user was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the user was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;
}
