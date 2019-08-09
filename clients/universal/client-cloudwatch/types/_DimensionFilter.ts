/**
 * <p>Represents filters for a dimension.</p>
 */
export interface _DimensionFilter {
  /**
   * <p>The dimension name to be matched.</p>
   */
  Name: string;

  /**
   * <p>The value of the dimension to be matched.</p>
   */
  Value?: string;
}

export type _UnmarshalledDimensionFilter = _DimensionFilter;
