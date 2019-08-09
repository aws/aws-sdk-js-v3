/**
 * <p>The static value of the resource.</p>
 */
export interface _StaticValue {
  /**
   * <p>A list of values. For example, the ARN of the assumed role. </p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledStaticValue extends _StaticValue {
  /**
   * <p>A list of values. For example, the ARN of the assumed role. </p>
   */
  Values?: Array<string>;
}
