/**
 * <p>Parameter value of the application.</p>
 */
export interface _ParameterValue {
  /**
   * <p>The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation
   *  uses the default value that is specified in your template.</p>
   */
  Name: string;

  /**
   * <p>The input value associated with the parameter.</p>
   */
  Value: string;
}

export type _UnmarshalledParameterValue = _ParameterValue;
