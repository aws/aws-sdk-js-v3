/**
 * <p>Provides a summary of the properties of an event tracker. For a complete listing, call the <a>DescribeEventTracker</a> API.</p>
 */
export interface _EventTrackerSummary {
  /**
   * <p>The name of the event tracker.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the event tracker.</p>
   */
  eventTrackerArn?: string;

  /**
   * <p>The status of the event tracker.</p> <p>An event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the event tracker was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the event tracker was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;
}

export interface _UnmarshalledEventTrackerSummary extends _EventTrackerSummary {
  /**
   * <p>The date and time (in Unix time) that the event tracker was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the event tracker was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
