import { _EventInfoMap, _UnmarshalledEventInfoMap } from "./_EventInfoMap";

/**
 * <p>Describes event categories.</p>
 */
export interface _EventCategoriesMap {
  /**
   * <p>The source type, such as cluster or cluster-snapshot, that the returned categories belong to.</p>
   */
  SourceType?: string;

  /**
   * <p>The events in the event category.</p>
   */
  Events?: Array<_EventInfoMap> | Iterable<_EventInfoMap>;
}

export interface _UnmarshalledEventCategoriesMap extends _EventCategoriesMap {
  /**
   * <p>The events in the event category.</p>
   */
  Events?: Array<_UnmarshalledEventInfoMap>;
}
