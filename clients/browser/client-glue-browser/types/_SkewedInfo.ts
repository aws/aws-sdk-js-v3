/**
 * <p>Specifies skewed values in a table. Skewed are ones that occur with very high frequency.</p>
 */
export interface _SkewedInfo {
  /**
   * <p>A list of names of columns that contain skewed values.</p>
   */
  SkewedColumnNames?: Array<string> | Iterable<string>;

  /**
   * <p>A list of values that appear so frequently as to be considered skewed.</p>
   */
  SkewedColumnValues?: Array<string> | Iterable<string>;

  /**
   * <p>A mapping of skewed values to the columns that contain them.</p>
   */
  SkewedColumnValueLocationMaps?:
    | { [key: string]: string }
    | Iterable<[string, string]>;
}

export interface _UnmarshalledSkewedInfo extends _SkewedInfo {
  /**
   * <p>A list of names of columns that contain skewed values.</p>
   */
  SkewedColumnNames?: Array<string>;

  /**
   * <p>A list of values that appear so frequently as to be considered skewed.</p>
   */
  SkewedColumnValues?: Array<string>;

  /**
   * <p>A mapping of skewed values to the columns that contain them.</p>
   */
  SkewedColumnValueLocationMaps?: { [key: string]: string };
}
