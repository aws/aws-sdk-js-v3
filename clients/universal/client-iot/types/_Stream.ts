/**
 * <p>Describes a group of files that can be streamed.</p>
 */
export interface _Stream {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The ID of a file associated with a stream.</p>
   */
  fileId?: number;
}

export type _UnmarshalledStream = _Stream;
