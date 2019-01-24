import {_Segment, _UnmarshalledSegment} from './_Segment';

/**
 * <p>A collection of segment documents with matching trace IDs.</p>
 */
export interface _Trace {
    /**
     * <p>The unique identifier for the request that generated the trace's segments and subsegments.</p>
     */
    Id?: string;

    /**
     * <p>The length of time in seconds between the start time of the root segment and the end time of the last segment that completed.</p>
     */
    Duration?: number;

    /**
     * <p>Segment documents for the segments and subsegments that comprise the trace.</p>
     */
    Segments?: Array<_Segment>|Iterable<_Segment>;
}

export interface _UnmarshalledTrace extends _Trace {
    /**
     * <p>Segment documents for the segments and subsegments that comprise the trace.</p>
     */
    Segments?: Array<_UnmarshalledSegment>;
}