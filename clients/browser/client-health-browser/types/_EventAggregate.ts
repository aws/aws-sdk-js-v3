/**
 * <p>The number of events of each issue type. Returned by the <a>DescribeEventAggregates</a> operation.</p>
 */
export interface _EventAggregate {
  /**
   * <p>The issue type for the associated count.</p>
   */
  aggregateValue?: string;

  /**
   * <p>The number of events of the associated issue type.</p>
   */
  count?: number;
}

export type _UnmarshalledEventAggregate = _EventAggregate;
