/**
 * <p>A summary of a stream.</p>
 */
export interface _StreamSummary {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;

  /**
   * <p>A description of the stream.</p>
   */
  description?: string;
}

export type _UnmarshalledStreamSummary = _StreamSummary;
