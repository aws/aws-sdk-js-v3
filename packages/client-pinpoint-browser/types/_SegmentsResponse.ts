import {_SegmentResponse, _UnmarshalledSegmentResponse} from './_SegmentResponse';

/**
 * Segments in your account.
 */
export interface _SegmentsResponse {
    /**
     * The list of segments.
     */
    Item?: Array<_SegmentResponse>|Iterable<_SegmentResponse>;

    /**
     * An identifier used to retrieve the next page of results. The token is null if no additional pages exist.
     */
    NextToken?: string;
}

export interface _UnmarshalledSegmentsResponse extends _SegmentsResponse {
    /**
     * The list of segments.
     */
    Item?: Array<_UnmarshalledSegmentResponse>;
}