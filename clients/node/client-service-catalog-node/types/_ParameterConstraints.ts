/**
 * <p>The constraints that the administrator has put on the parameter.</p>
 */
export interface _ParameterConstraints {
  /**
   * <p>The values that the administrator has allowed for the parameter.</p>
   */
  AllowedValues?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledParameterConstraints
  extends _ParameterConstraints {
  /**
   * <p>The values that the administrator has allowed for the parameter.</p>
   */
  AllowedValues?: Array<string>;
}
