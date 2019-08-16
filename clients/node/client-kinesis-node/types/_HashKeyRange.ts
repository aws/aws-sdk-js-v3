/**
 * <p>The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.</p>
 */
export interface _HashKeyRange {
  /**
   * <p>The starting hash key of the hash key range.</p>
   */
  StartingHashKey: string;

  /**
   * <p>The ending hash key of the hash key range.</p>
   */
  EndingHashKey: string;
}

export type _UnmarshalledHashKeyRange = _HashKeyRange;
