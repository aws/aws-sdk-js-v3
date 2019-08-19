/**
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that AWS account can receive events from the partner's applications or services.</p>
 */
export interface _EventSource {
  /**
   * <p>The ARN of the event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the partner that created the event source.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time when the event source was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The date and time when the event source will expire if the AWS account doesn't create a matching event bus for it.</p>
   */
  ExpirationTime?: Date | string | number;

  /**
   * <p>The name of the event source.</p>
   */
  Name?: string;

  /**
   * <p>The state of the event source. If it's <code>ACTIVE</code>, you have already created a matching event bus for this event source, and that event bus is active. If it's <code>PENDING</code>, either you haven't yet created a matching event bus, or that event bus is deactivated. If it's <code>DELETED</code>, you have created a matching event bus, but the event source has since been deleted.</p>
   */
  State?: "PENDING" | "ACTIVE" | "DELETED" | string;
}

export interface _UnmarshalledEventSource extends _EventSource {
  /**
   * <p>The date and time when the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time when the event source will expire if the AWS account doesn't create a matching event bus for it.</p>
   */
  ExpirationTime?: Date;
}
