/**
 * <p>Information about a segment that failed processing.</p>
 */
export interface _UnprocessedTraceSegment {
  /**
   * <p>The segment's ID.</p>
   */
  Id?: string;

  /**
   * <p>The error that caused processing to fail.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export type _UnmarshalledUnprocessedTraceSegment = _UnprocessedTraceSegment;
