/**
 * Dimension specification of a segment.
 */
export interface _SetDimension {
  /**
   * The type of dimension:
   *
   * INCLUSIVE - Endpoints that match the criteria are included in the segment.
   *
   * EXCLUSIVE - Endpoints that match the criteria are excluded from the segment.
   */
  DimensionType?: "INCLUSIVE" | "EXCLUSIVE" | string;

  /**
   * The criteria values for the segment dimension. Endpoints with matching attribute values are included or excluded from the segment, depending on the setting for Type.
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSetDimension extends _SetDimension {
  /**
   * The criteria values for the segment dimension. Endpoints with matching attribute values are included or excluded from the segment, depending on the setting for Type.
   */
  Values?: Array<string>;
}
