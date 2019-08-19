/**
 * <p>The representation of a resource.</p>
 */
export interface _Resource {
  /**
   * <p>The identifier of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The email of the resource.</p>
   */
  Email?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The type of the resource: equipment or room.</p>
   */
  Type?: "ROOM" | "EQUIPMENT" | string;

  /**
   * <p>The state of the resource, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: "ENABLED" | "DISABLED" | "DELETED" | string;

  /**
   * <p>The date indicating when the resource was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date | string | number;

  /**
   * <p>The date indicating when the resource was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date | string | number;
}

export interface _UnmarshalledResource extends _Resource {
  /**
   * <p>The date indicating when the resource was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the resource was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;
}
