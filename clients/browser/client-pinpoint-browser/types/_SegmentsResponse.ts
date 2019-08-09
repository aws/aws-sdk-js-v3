import {
  _SegmentResponse,
  _UnmarshalledSegmentResponse
} from "./_SegmentResponse";

/**
 * <p>Provides information about all the segments that are associated with an application.</p>
 */
export interface _SegmentsResponse {
  /**
   * <p>An array of responses, one for each segment that's associated with the application (Segments resource) or each version of a segment that's associated with the application (Segment Versions resource).</p>
   */
  Item: Array<_SegmentResponse> | Iterable<_SegmentResponse>;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledSegmentsResponse extends _SegmentsResponse {
  /**
   * <p>An array of responses, one for each segment that's associated with the application (Segments resource) or each version of a segment that's associated with the application (Segment Versions resource).</p>
   */
  Item: Array<_UnmarshalledSegmentResponse>;
}
