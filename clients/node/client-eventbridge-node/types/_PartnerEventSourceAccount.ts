/**
 * <p>The AWS account that a partner event source has been offered to.</p>
 */
export interface _PartnerEventSourceAccount {
  /**
   * <p>The AWS account ID that the partner event source was offered to.</p>
   */
  Account?: string;

  /**
   * <p>The date and time when the event source was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The date and time when the event source will expire if the AWS account doesn't create a matching event bus for it.</p>
   */
  ExpirationTime?: Date | string | number;

  /**
   * <p>The state of the event source. If it's <code>ACTIVE</code>, you have already created a matching event bus for this event source, and that event bus is active. If it's <code>PENDING</code>, either you haven't yet created a matching event bus, or that event bus is deactivated. If it's <code>DELETED</code>, you have created a matching event bus, but the event source has since been deleted.</p>
   */
  State?: "PENDING" | "ACTIVE" | "DELETED" | string;
}

export interface _UnmarshalledPartnerEventSourceAccount
  extends _PartnerEventSourceAccount {
  /**
   * <p>The date and time when the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time when the event source will expire if the AWS account doesn't create a matching event bus for it.</p>
   */
  ExpirationTime?: Date;
}
