import {
  _SequenceNumberRange,
  _UnmarshalledSequenceNumberRange
} from "./_SequenceNumberRange";

/**
 * <p>A uniquely identified group of stream records within a stream.</p>
 */
export interface _Shard {
  /**
   * <p>The system-generated identifier for this shard.</p>
   */
  ShardId?: string;

  /**
   * <p>The range of possible sequence numbers for the shard.</p>
   */
  SequenceNumberRange?: _SequenceNumberRange;

  /**
   * <p>The shard ID of the current shard's parent.</p>
   */
  ParentShardId?: string;
}

export interface _UnmarshalledShard extends _Shard {
  /**
   * <p>The range of possible sequence numbers for the shard.</p>
   */
  SequenceNumberRange?: _UnmarshalledSequenceNumberRange;
}
