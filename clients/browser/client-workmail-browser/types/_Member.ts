/**
 * <p>The representation of a user or group.</p>
 */
export interface _Member {
  /**
   * <p>The identifier of the member.</p>
   */
  Id?: string;

  /**
   * <p>The name of the member.</p>
   */
  Name?: string;

  /**
   * <p>A member can be a user or group.</p>
   */
  Type?: "GROUP" | "USER" | string;

  /**
   * <p>The state of the member, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: "ENABLED" | "DISABLED" | "DELETED" | string;

  /**
   * <p>The date indicating when the member was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date | string | number;

  /**
   * <p>The date indicating when the member was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date | string | number;
}

export interface _UnmarshalledMember extends _Member {
  /**
   * <p>The date indicating when the member was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the member was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;
}
