/**
 * <p>The number of entities that are affected by one or more events. Returned by the <a>DescribeEntityAggregates</a> operation.</p>
 */
export interface _EntityAggregate {
  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>
   */
  eventArn?: string;

  /**
   * <p>The number entities that match the criteria for the specified events.</p>
   */
  count?: number;
}

export type _UnmarshalledEntityAggregate = _EntityAggregate;
