/**
 * <p>Metadata about a type of event that is reported by AWS Health. Data consists of the category (for example, <code>issue</code>), the service (for example, <code>EC2</code>), and the event type code (for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>).</p>
 */
export interface _EventType {
  /**
   * <p>The AWS service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  service?: string;

  /**
   * <p>The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i> </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   */
  code?: string;

  /**
   * <p>A list of event type category codes (<code>issue</code>, <code>scheduledChange</code>, or <code>accountNotification</code>).</p>
   */
  category?:
    | "issue"
    | "accountNotification"
    | "scheduledChange"
    | "investigation"
    | string;
}

export type _UnmarshalledEventType = _EventType;
