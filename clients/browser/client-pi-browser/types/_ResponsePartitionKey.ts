/**
 * <p>If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension. </p>
 */
export interface _ResponsePartitionKey {
  /**
   * <p>A dimension map that contains the dimension(s) for this partition.</p>
   */
  Dimensions: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledResponsePartitionKey
  extends _ResponsePartitionKey {
  /**
   * <p>A dimension map that contains the dimension(s) for this partition.</p>
   */
  Dimensions: { [key: string]: string };
}
