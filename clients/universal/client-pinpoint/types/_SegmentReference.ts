/**
 * <p>Specifies the segment identifier and version of a segment.</p>
 */
export interface _SegmentReference {
  /**
   * <p>The unique identifier for the segment.</p>
   */
  Id: string;

  /**
   * <p>The version number of the segment.</p>
   */
  Version?: number;
}

export type _UnmarshalledSegmentReference = _SegmentReference;
