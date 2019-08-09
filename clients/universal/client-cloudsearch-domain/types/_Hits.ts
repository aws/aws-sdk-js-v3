import { _Hit, _UnmarshalledHit } from "./_Hit";

/**
 * <p>The collection of documents that match the search request.</p>
 */
export interface _Hits {
  /**
   * <p>The total number of documents that match the search request.</p>
   */
  found?: number;

  /**
   * <p>The index of the first matching document.</p>
   */
  start?: number;

  /**
   * <p>A cursor that can be used to retrieve the next set of matching documents when you want to page through a large result set.</p>
   */
  cursor?: string;

  /**
   * <p>A document that matches the search request.</p>
   */
  hit?: Array<_Hit> | Iterable<_Hit>;
}

export interface _UnmarshalledHits extends _Hits {
  /**
   * <p>A document that matches the search request.</p>
   */
  hit?: Array<_UnmarshalledHit>;
}
