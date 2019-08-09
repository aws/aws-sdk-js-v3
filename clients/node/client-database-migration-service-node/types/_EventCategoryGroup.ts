/**
 * <p/>
 */
export interface _EventCategoryGroup {
  /**
   * <p> The type of AWS DMS resource that generates events. </p> <p>Valid values: replication-instance | replication-server | security-group | replication-task</p>
   */
  SourceType?: string;

  /**
   * <p> A list of event categories from a source type that you've chosen.</p>
   */
  EventCategories?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledEventCategoryGroup extends _EventCategoryGroup {
  /**
   * <p> A list of event categories from a source type that you've chosen.</p>
   */
  EventCategories?: Array<string>;
}
