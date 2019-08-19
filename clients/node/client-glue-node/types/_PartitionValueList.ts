/**
 * <p>Contains a list of values defining partitions.</p>
 */
export interface _PartitionValueList {
  /**
   * <p>The list of values.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPartitionValueList extends _PartitionValueList {
  /**
   * <p>The list of values.</p>
   */
  Values: Array<string>;
}
