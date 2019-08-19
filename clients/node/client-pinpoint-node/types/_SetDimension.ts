/**
 * <p>Specifies the dimension type and values for a segment dimension.</p>
 */
export interface _SetDimension {
  /**
   * <p>The type of segment dimension to use. Valid values are: INCLUSIVE, endpoints that match the criteria are included in the segment; and, EXCLUSIVE, endpoints that match the criteria are excluded from the segment.</p>
   */
  DimensionType?: "INCLUSIVE" | "EXCLUSIVE" | string;

  /**
   * <p>The criteria values to use for the segment dimension. Depending on the value of the DimensionType property, endpoints are included or excluded from the segment if their values match the criteria values.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSetDimension extends _SetDimension {
  /**
   * <p>The criteria values to use for the segment dimension. Depending on the value of the DimensionType property, endpoints are included or excluded from the segment if their values match the criteria values.</p>
   */
  Values: Array<string>;
}
