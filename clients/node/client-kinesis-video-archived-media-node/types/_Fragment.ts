/**
 * <p>Represents a segment of video or other time-delimited data.</p>
 */
export interface _Fragment {
  /**
   * <p>The unique identifier of the fragment. This value monotonically increases based on the ingestion order.</p>
   */
  FragmentNumber?: string;

  /**
   * <p>The total fragment size, including information about the fragment and contained media data.</p>
   */
  FragmentSizeInBytes?: number;

  /**
   * <p>The timestamp from the producer corresponding to the fragment.</p>
   */
  ProducerTimestamp?: Date | string | number;

  /**
   * <p>The timestamp from the AWS server corresponding to the fragment.</p>
   */
  ServerTimestamp?: Date | string | number;

  /**
   * <p>The playback duration or other time value associated with the fragment.</p>
   */
  FragmentLengthInMilliseconds?: number;
}

export interface _UnmarshalledFragment extends _Fragment {
  /**
   * <p>The timestamp from the producer corresponding to the fragment.</p>
   */
  ProducerTimestamp?: Date;

  /**
   * <p>The timestamp from the AWS server corresponding to the fragment.</p>
   */
  ServerTimestamp?: Date;
}
