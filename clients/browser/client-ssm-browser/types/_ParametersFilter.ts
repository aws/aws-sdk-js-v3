/**
 * <p>This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.</p>
 */
export interface _ParametersFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key: "Name" | "Type" | "KeyId" | string;

  /**
   * <p>The filter values.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledParametersFilter extends _ParametersFilter {
  /**
   * <p>The filter values.</p>
   */
  Values: Array<string>;
}
