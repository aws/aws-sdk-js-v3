/**
 * <p>A set of criteria that AWS CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, AWS CloudFormation returns only the <code>AllowedValues</code> property.</p>
 */
export interface _ParameterConstraints {
  /**
   * <p>A list of values that are permitted for a parameter.</p>
   */
  AllowedValues?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledParameterConstraints
  extends _ParameterConstraints {
  /**
   * <p>A list of values that are permitted for a parameter.</p>
   */
  AllowedValues?: Array<string>;
}
