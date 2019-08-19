import { _HashKeyRange, _UnmarshalledHashKeyRange } from "./_HashKeyRange";
import {
  _SequenceNumberRange,
  _UnmarshalledSequenceNumberRange
} from "./_SequenceNumberRange";

/**
 * <p>A uniquely identified group of data records in a Kinesis data stream.</p>
 */
export interface _Shard {
  /**
   * <p>The unique identifier of the shard within the stream.</p>
   */
  ShardId: string;

  /**
   * <p>The shard ID of the shard's parent.</p>
   */
  ParentShardId?: string;

  /**
   * <p>The shard ID of the shard adjacent to the shard's parent.</p>
   */
  AdjacentParentShardId?: string;

  /**
   * <p>The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.</p>
   */
  HashKeyRange: _HashKeyRange;

  /**
   * <p>The range of possible sequence numbers for the shard.</p>
   */
  SequenceNumberRange: _SequenceNumberRange;
}

export interface _UnmarshalledShard extends _Shard {
  /**
   * <p>The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.</p>
   */
  HashKeyRange: _UnmarshalledHashKeyRange;

  /**
   * <p>The range of possible sequence numbers for the shard.</p>
   */
  SequenceNumberRange: _UnmarshalledSequenceNumberRange;
}
