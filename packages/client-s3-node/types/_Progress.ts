/**
 * _Progress shape
 */
export interface _Progress {
  /**
   * <p>Current number of object bytes scanned.</p>
   */
  BytesScanned?: number;

  /**
   * <p>Current number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;

  /**
   * <p>Current number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;
}

export type _UnmarshalledProgress = _Progress;
