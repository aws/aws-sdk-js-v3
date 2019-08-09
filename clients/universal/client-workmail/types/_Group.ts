/**
 * <p>The representation of an Amazon WorkMail group.</p>
 */
export interface _Group {
  /**
   * <p>The identifier of the group.</p>
   */
  Id?: string;

  /**
   * <p>The email of the group.</p>
   */
  Email?: string;

  /**
   * <p>The name of the group.</p>
   */
  Name?: string;

  /**
   * <p>The state of the group, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: "ENABLED" | "DISABLED" | "DELETED" | string;

  /**
   * <p>The date indicating when the group was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date | string | number;

  /**
   * <p>The date indicating when the group was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date | string | number;
}

export interface _UnmarshalledGroup extends _Group {
  /**
   * <p>The date indicating when the group was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the group was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;
}
