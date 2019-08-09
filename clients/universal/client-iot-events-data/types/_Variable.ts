/**
 * <p>The current state of the variable.</p>
 */
export interface _Variable {
  /**
   * <p>The name of the variable.</p>
   */
  name: string;

  /**
   * <p>The current value of the variable.</p>
   */
  value: string;
}

export type _UnmarshalledVariable = _Variable;
