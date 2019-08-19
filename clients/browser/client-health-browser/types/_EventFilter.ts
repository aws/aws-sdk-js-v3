import { _DateTimeRange, _UnmarshalledDateTimeRange } from "./_DateTimeRange";

/**
 * <p>The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations.</p>
 */
export interface _EventFilter {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code> </p>
   */
  eventArns?: Array<string> | Iterable<string>;

  /**
   * <p>A list of unique identifiers for event types. For example, <code>"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED"</code> </p>
   */
  eventTypeCodes?: Array<string> | Iterable<string>;

  /**
   * <p>The AWS services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  services?: Array<string> | Iterable<string>;

  /**
   * <p>A list of AWS regions.</p>
   */
  regions?: Array<string> | Iterable<string>;

  /**
   * <p>A list of AWS availability zones.</p>
   */
  availabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>A list of dates and times that the event began.</p>
   */
  startTimes?: Array<_DateTimeRange> | Iterable<_DateTimeRange>;

  /**
   * <p>A list of dates and times that the event ended.</p>
   */
  endTimes?: Array<_DateTimeRange> | Iterable<_DateTimeRange>;

  /**
   * <p>A list of dates and times that the event was last updated.</p>
   */
  lastUpdatedTimes?: Array<_DateTimeRange> | Iterable<_DateTimeRange>;

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   */
  entityArns?: Array<string> | Iterable<string>;

  /**
   * <p>A list of entity identifiers, such as EC2 instance IDs (<code>i-34ab692e</code>) or EBS volumes (<code>vol-426ab23e</code>).</p>
   */
  entityValues?: Array<string> | Iterable<string>;

  /**
   * <p>A list of event type category codes (<code>issue</code>, <code>scheduledChange</code>, or <code>accountNotification</code>).</p>
   */
  eventTypeCategories?:
    | Array<
        | "issue"
        | "accountNotification"
        | "scheduledChange"
        | "investigation"
        | string
      >
    | Iterable<
        | "issue"
        | "accountNotification"
        | "scheduledChange"
        | "investigation"
        | string
      >;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   */
  tags?:
    | Array<{ [key: string]: string } | Iterable<[string, string]>>
    | Iterable<{ [key: string]: string } | Iterable<[string, string]>>;

  /**
   * <p>A list of event status codes.</p>
   */
  eventStatusCodes?:
    | Array<"open" | "closed" | "upcoming" | string>
    | Iterable<"open" | "closed" | "upcoming" | string>;
}

export interface _UnmarshalledEventFilter extends _EventFilter {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code> </p>
   */
  eventArns?: Array<string>;

  /**
   * <p>A list of unique identifiers for event types. For example, <code>"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED"</code> </p>
   */
  eventTypeCodes?: Array<string>;

  /**
   * <p>The AWS services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  services?: Array<string>;

  /**
   * <p>A list of AWS regions.</p>
   */
  regions?: Array<string>;

  /**
   * <p>A list of AWS availability zones.</p>
   */
  availabilityZones?: Array<string>;

  /**
   * <p>A list of dates and times that the event began.</p>
   */
  startTimes?: Array<_UnmarshalledDateTimeRange>;

  /**
   * <p>A list of dates and times that the event ended.</p>
   */
  endTimes?: Array<_UnmarshalledDateTimeRange>;

  /**
   * <p>A list of dates and times that the event was last updated.</p>
   */
  lastUpdatedTimes?: Array<_UnmarshalledDateTimeRange>;

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   */
  entityArns?: Array<string>;

  /**
   * <p>A list of entity identifiers, such as EC2 instance IDs (<code>i-34ab692e</code>) or EBS volumes (<code>vol-426ab23e</code>).</p>
   */
  entityValues?: Array<string>;

  /**
   * <p>A list of event type category codes (<code>issue</code>, <code>scheduledChange</code>, or <code>accountNotification</code>).</p>
   */
  eventTypeCategories?: Array<
    | "issue"
    | "accountNotification"
    | "scheduledChange"
    | "investigation"
    | string
  >;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   */
  tags?: Array<{ [key: string]: string }>;

  /**
   * <p>A list of event status codes.</p>
   */
  eventStatusCodes?: Array<"open" | "closed" | "upcoming" | string>;
}
