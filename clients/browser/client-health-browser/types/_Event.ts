/**
 * <p>Summary information about an event, returned by the <a>DescribeEvents</a> operation. The <a>DescribeEventDetails</a> operation also returns this information, as well as the <a>EventDescription</a> and additional event metadata.</p>
 */
export interface _Event {
  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>
   */
  arn?: string;

  /**
   * <p>The AWS service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  service?: string;

  /**
   * <p>The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i> </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   */
  eventTypeCode?: string;

  /**
   * <p>The category of the event. Possible values are <code>issue</code>, <code>scheduledChange</code>, and <code>accountNotification</code>.</p>
   */
  eventTypeCategory?:
    | "issue"
    | "accountNotification"
    | "scheduledChange"
    | "investigation"
    | string;

  /**
   * <p>The AWS region name of the event.</p>
   */
  region?: string;

  /**
   * <p>The AWS Availability Zone of the event. For example, us-east-1a.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The date and time that the event began.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>The date and time that the event ended.</p>
   */
  endTime?: Date | string | number;

  /**
   * <p>The most recent date and time that the event was updated.</p>
   */
  lastUpdatedTime?: Date | string | number;

  /**
   * <p>The most recent status of the event. Possible values are <code>open</code>, <code>closed</code>, and <code>upcoming</code>.</p>
   */
  statusCode?: "open" | "closed" | "upcoming" | string;
}

export interface _UnmarshalledEvent extends _Event {
  /**
   * <p>The date and time that the event began.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time that the event ended.</p>
   */
  endTime?: Date;

  /**
   * <p>The most recent date and time that the event was updated.</p>
   */
  lastUpdatedTime?: Date;
}
