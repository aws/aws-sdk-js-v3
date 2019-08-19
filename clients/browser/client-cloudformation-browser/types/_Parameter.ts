/**
 * <p>The Parameter data type.</p>
 */
export interface _Parameter {
  /**
   * <p>The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The input value associated with the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>During a stack update, use the existing parameter value that the stack is using for a given parameter key. If you specify <code>true</code>, do not specify a parameter value.</p>
   */
  UsePreviousValue?: boolean;

  /**
   * <p>Read-only. The value that corresponds to a Systems Manager parameter key. This field is returned only for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html#aws-ssm-parameter-types"> <code>SSM</code> parameter types</a> in the template.</p>
   */
  ResolvedValue?: string;
}

export type _UnmarshalledParameter = _Parameter;
