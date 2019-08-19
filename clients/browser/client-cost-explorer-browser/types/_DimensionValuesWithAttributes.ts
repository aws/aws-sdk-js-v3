/**
 * <p>The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.</p>
 */
export interface _DimensionValuesWithAttributes {
  /**
   * <p>The value of a dimension with a specific attribute.</p>
   */
  Value?: string;

  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledDimensionValuesWithAttributes
  extends _DimensionValuesWithAttributes {
  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: { [key: string]: string };
}
