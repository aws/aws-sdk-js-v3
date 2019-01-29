/**
 * Segment reference.
 */
export interface _SegmentReference {
    /**
     * A unique identifier for the segment.
     */
    Id?: string;

    /**
     * If specified contains a specific version of the segment included.
     */
    Version?: number;
}

export type _UnmarshalledSegmentReference = _SegmentReference;