/**
 * <p>Information about the variable and its new value.</p>
 */
export interface _SetVariableAction {
  /**
   * <p>The name of the variable.</p>
   */
  variableName: string;

  /**
   * <p>The new value of the variable.</p>
   */
  value: string;
}

export type _UnmarshalledSetVariableAction = _SetVariableAction;
