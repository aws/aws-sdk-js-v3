/**
 * <p>The range of possible sequence numbers for the shard.</p>
 */
export interface _SequenceNumberRange {
  /**
   * <p>The starting sequence number for the range.</p>
   */
  StartingSequenceNumber: string;

  /**
   * <p>The ending sequence number for the range. Shards that are in the OPEN state have an ending sequence number of <code>null</code>.</p>
   */
  EndingSequenceNumber?: string;
}

export type _UnmarshalledSequenceNumberRange = _SequenceNumberRange;
