/**
 * <p>Error information returned when a <a>DescribeEventDetails</a> operation cannot find a specified event.</p>
 */
export interface _EventDetailsErrorItem {
  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>
   */
  eventArn?: string;

  /**
   * <p>The name of the error.</p>
   */
  errorName?: string;

  /**
   * <p>A message that describes the error.</p>
   */
  errorMessage?: string;
}

export type _UnmarshalledEventDetailsErrorItem = _EventDetailsErrorItem;
