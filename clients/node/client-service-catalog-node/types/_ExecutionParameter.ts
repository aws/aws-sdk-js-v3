/**
 * _ExecutionParameter shape
 */
export interface _ExecutionParameter {
  /**
   * _ExecutionParameterKey shape
   */
  Name?: string;

  /**
   * _ExecutionParameterType shape
   */
  Type?: string;

  /**
   * _ExecutionParameterValueList shape
   */
  DefaultValues?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledExecutionParameter extends _ExecutionParameter {
  /**
   * _ExecutionParameterValueList shape
   */
  DefaultValues?: Array<string>;
}
