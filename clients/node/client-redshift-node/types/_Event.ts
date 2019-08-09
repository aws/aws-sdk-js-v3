/**
 * <p>Describes an event.</p>
 */
export interface _Event {
  /**
   * <p>The identifier for the source of the event.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>The source type for this event.</p>
   */
  SourceType?:
    | "cluster"
    | "cluster-parameter-group"
    | "cluster-security-group"
    | "cluster-snapshot"
    | string;

  /**
   * <p>The text of this event.</p>
   */
  Message?: string;

  /**
   * <p>A list of the event categories.</p> <p>Values: Configuration, Management, Monitoring, Security</p>
   */
  EventCategories?: Array<string> | Iterable<string>;

  /**
   * <p>The severity of the event.</p> <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>The date and time of the event.</p>
   */
  Date?: Date | string | number;

  /**
   * <p>The identifier of the event.</p>
   */
  EventId?: string;
}

export interface _UnmarshalledEvent extends _Event {
  /**
   * <p>A list of the event categories.</p> <p>Values: Configuration, Management, Monitoring, Security</p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>The date and time of the event.</p>
   */
  Date?: Date;
}
