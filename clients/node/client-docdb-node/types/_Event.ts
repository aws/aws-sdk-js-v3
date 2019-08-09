/**
 * <p>Detailed information about an event.</p>
 */
export interface _Event {
  /**
   * <p>Provides the identifier for the source of the event.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>Specifies the source type for this event.</p>
   */
  SourceType?:
    | "db-instance"
    | "db-parameter-group"
    | "db-security-group"
    | "db-snapshot"
    | "db-cluster"
    | "db-cluster-snapshot"
    | string;

  /**
   * <p>Provides the text of this event.</p>
   */
  Message?: string;

  /**
   * <p>Specifies the category for the event.</p>
   */
  EventCategories?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies the date and time of the event.</p>
   */
  Date?: Date | string | number;

  /**
   * <p>The Amazon Resource Name (ARN) for the event.</p>
   */
  SourceArn?: string;
}

export interface _UnmarshalledEvent extends _Event {
  /**
   * <p>Specifies the category for the event.</p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>Specifies the date and time of the event.</p>
   */
  Date?: Date;
}
