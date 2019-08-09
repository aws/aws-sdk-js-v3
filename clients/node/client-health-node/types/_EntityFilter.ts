import { _DateTimeRange, _UnmarshalledDateTimeRange } from "./_DateTimeRange";

/**
 * <p>The values to use to filter results from the <a>DescribeAffectedEntities</a> operation.</p>
 */
export interface _EntityFilter {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code> </p>
   */
  eventArns: Array<string> | Iterable<string>;

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   */
  entityArns?: Array<string> | Iterable<string>;

  /**
   * <p>A list of IDs for affected entities.</p>
   */
  entityValues?: Array<string> | Iterable<string>;

  /**
   * <p>A list of the most recent dates and times that the entity was updated.</p>
   */
  lastUpdatedTimes?: Array<_DateTimeRange> | Iterable<_DateTimeRange>;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   */
  tags?:
    | Array<{ [key: string]: string } | Iterable<[string, string]>>
    | Iterable<{ [key: string]: string } | Iterable<[string, string]>>;

  /**
   * <p>A list of entity status codes (<code>IMPAIRED</code>, <code>UNIMPAIRED</code>, or <code>UNKNOWN</code>).</p>
   */
  statusCodes?:
    | Array<"IMPAIRED" | "UNIMPAIRED" | "UNKNOWN" | string>
    | Iterable<"IMPAIRED" | "UNIMPAIRED" | "UNKNOWN" | string>;
}

export interface _UnmarshalledEntityFilter extends _EntityFilter {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code> </p>
   */
  eventArns: Array<string>;

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   */
  entityArns?: Array<string>;

  /**
   * <p>A list of IDs for affected entities.</p>
   */
  entityValues?: Array<string>;

  /**
   * <p>A list of the most recent dates and times that the entity was updated.</p>
   */
  lastUpdatedTimes?: Array<_UnmarshalledDateTimeRange>;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   */
  tags?: Array<{ [key: string]: string }>;

  /**
   * <p>A list of entity status codes (<code>IMPAIRED</code>, <code>UNIMPAIRED</code>, or <code>UNKNOWN</code>).</p>
   */
  statusCodes?: Array<"IMPAIRED" | "UNIMPAIRED" | "UNKNOWN" | string>;
}
