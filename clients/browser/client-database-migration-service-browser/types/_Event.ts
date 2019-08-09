/**
 * <p/>
 */
export interface _Event {
  /**
   * <p> The identifier of an event source.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p> The type of AWS DMS resource that generates events. </p> <p>Valid values: replication-instance | endpoint | replication-task</p>
   */
  SourceType?: "replication-instance" | string;

  /**
   * <p>The event message.</p>
   */
  Message?: string;

  /**
   * <p>The event categories available for the specified source type.</p>
   */
  EventCategories?: Array<string> | Iterable<string>;

  /**
   * <p>The date of the event.</p>
   */
  Date?: Date | string | number;
}

export interface _UnmarshalledEvent extends _Event {
  /**
   * <p>The event categories available for the specified source type.</p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>The date of the event.</p>
   */
  Date?: Date;
}
