/**
 * <p>An array of descriptions and aggregated values for each dimension within a dimension group.</p>
 */
export interface _DimensionKeyDescription {
  /**
   * <p>A map of name-value pairs for the dimensions in the group.</p>
   */
  Dimensions?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The aggregated metric value for the dimension(s), over the requested time range.</p>
   */
  Total?: number;

  /**
   * <p>If <code>PartitionBy</code> was specified, <code>PartitionKeys</code> contains the dimensions that were.</p>
   */
  Partitions?: Array<number> | Iterable<number>;
}

export interface _UnmarshalledDimensionKeyDescription
  extends _DimensionKeyDescription {
  /**
   * <p>A map of name-value pairs for the dimensions in the group.</p>
   */
  Dimensions?: { [key: string]: string };

  /**
   * <p>If <code>PartitionBy</code> was specified, <code>PartitionKeys</code> contains the dimensions that were.</p>
   */
  Partitions?: Array<number>;
}
