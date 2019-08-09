/**
 * <p>Specifies attribute-based criteria for including or excluding endpoints from a segment.</p>
 */
export interface _AttributeDimension {
  /**
   * <p>The type of segment dimension to use. Valid values are: INCLUSIVE, endpoints that match the criteria are included in the segment; and, EXCLUSIVE, endpoints that match the criteria are excluded from the segment.</p>
   */
  AttributeType?: "INCLUSIVE" | "EXCLUSIVE" | string;

  /**
   * <p>The criteria values to use for the segment dimension. Depending on the value of the AttributeType property, endpoints are included or excluded from the segment if their attribute values match the criteria values.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAttributeDimension extends _AttributeDimension {
  /**
   * <p>The criteria values to use for the segment dimension. Depending on the value of the AttributeType property, endpoints are included or excluded from the segment if their attribute values match the criteria values.</p>
   */
  Values: Array<string>;
}
