/**
 * <p>An event source type, accompanied by one or more event category names.</p>
 */
export interface _EventCategoriesMap {
  /**
   * <p>The source type that the returned categories belong to.</p>
   */
  SourceType?: string;

  /**
   * <p>The event categories for the specified source type.</p>
   */
  EventCategories?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledEventCategoriesMap extends _EventCategoriesMap {
  /**
   * <p>The event categories for the specified source type.</p>
   */
  EventCategories?: Array<string>;
}
