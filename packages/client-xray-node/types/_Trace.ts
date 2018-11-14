import {_Segment, _UnmarshalledSegment} from './_Segment';

/**
 * _Trace shape
 */
export interface _Trace {
    /**
     * _TraceId shape
     */
    Id?: string;

    /**
     * _NullableDouble shape
     */
    Duration?: number;

    /**
     * _SegmentList shape
     */
    Segments?: Array<_Segment>|Iterable<_Segment>;
}

export interface _UnmarshalledTrace extends _Trace {
    /**
     * _SegmentList shape
     */
    Segments?: Array<_UnmarshalledSegment>;
}