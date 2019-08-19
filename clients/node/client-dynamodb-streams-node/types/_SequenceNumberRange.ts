/**
 * <p>The beginning and ending sequence numbers for the stream records contained within a shard.</p>
 */
export interface _SequenceNumberRange {
  /**
   * <p>The first sequence number.</p>
   */
  StartingSequenceNumber?: string;

  /**
   * <p>The last sequence number.</p>
   */
  EndingSequenceNumber?: string;
}

export type _UnmarshalledSequenceNumberRange = _SequenceNumberRange;
