/**
 * <p>Describes event information.</p>
 */
export interface _EventInfoMap {
  /**
   * <p>The identifier of an Amazon Redshift event.</p>
   */
  EventId?: string;

  /**
   * <p>The category of an Amazon Redshift event.</p>
   */
  EventCategories?: Array<string> | Iterable<string>;

  /**
   * <p>The description of an Amazon Redshift event.</p>
   */
  EventDescription?: string;

  /**
   * <p>The severity of the event.</p> <p>Values: ERROR, INFO</p>
   */
  Severity?: string;
}

export interface _UnmarshalledEventInfoMap extends _EventInfoMap {
  /**
   * <p>The category of an Amazon Redshift event.</p>
   */
  EventCategories?: Array<string>;
}
