/**
 * <p>Parameters supported by the application.</p>
 */
export interface _ParameterDefinition {
  /**
   * <p>A regular expression that represents the patterns to allow for String types.</p>
   */
  AllowedPattern?: string;

  /**
   * <p>An array containing the list of values allowed for the parameter.</p>
   */
  AllowedValues?: Array<string> | Iterable<string>;

  /**
   * <p>A string that explains a constraint when the constraint is violated. For example, without a constraint description,
   *  a parameter that has an allowed pattern of [A-Za-z0-9]+ displays the following error message when the user
   *  specifies an invalid value:</p><p>
   *  Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+
   *  </p><p>By adding a constraint description, such as "must contain only uppercase and lowercase letters and numbers," you can display
   *  the following customized error message:</p><p>
   *  Malformed input-Parameter MyParameter must contain only uppercase and lowercase letters and numbers.
   *  </p>
   */
  ConstraintDescription?: string;

  /**
   * <p>A value of the appropriate type for the template to use if no value is specified when a stack is created.
   *  If you define constraints for the parameter, you must specify a value that adheres to those constraints.</p>
   */
  DefaultValue?: string;

  /**
   * <p>A string of up to 4,000 characters that describes the parameter.</p>
   */
  Description?: string;

  /**
   * <p>An integer value that determines the largest number of characters that you want to allow for String types.</p>
   */
  MaxLength?: number;

  /**
   * <p>A numeric value that determines the largest numeric value that you want to allow for Number types.</p>
   */
  MaxValue?: number;

  /**
   * <p>An integer value that determines the smallest number of characters that you want to allow for String types.</p>
   */
  MinLength?: number;

  /**
   * <p>A numeric value that determines the smallest numeric value that you want to allow for Number types.</p>
   */
  MinValue?: number;

  /**
   * <p>The name of the parameter.</p>
   */
  Name: string;

  /**
   * <p>Whether to mask the parameter value whenever anyone makes a call that describes the stack. If you set the
   *  value to true, the parameter value is masked with asterisks (*****).</p>
   */
  NoEcho?: boolean;

  /**
   * <p>A list of AWS SAM resources that use this parameter.</p>
   */
  ReferencedByResources: Array<string> | Iterable<string>;

  /**
   * <p>The type of the parameter.</p><p>Valid values: String | Number | List&lt;Number> | CommaDelimitedList
   *  </p><p>
   *  String: A literal string.</p><p>For example, users can specify "MyUserName".</p><p>
   *  Number: An integer or float. AWS CloudFormation validates the parameter value as a number. However, when you use the
   *  parameter elsewhere in your template (for example, by using the Ref intrinsic function), the parameter value becomes a string.</p><p>For example, users might specify "8888".</p><p>
   *  List&lt;Number>: An array of integers or floats that are separated by commas. AWS CloudFormation validates the parameter value as numbers. However, when
   *  you use the parameter elsewhere in your template (for example, by using the Ref intrinsic function), the parameter value becomes a list of strings.</p><p>For example, users might specify "80,20", and then Ref results in ["80","20"].</p><p>
   *  CommaDelimitedList: An array of literal strings that are separated by commas. The total number of strings should be one more than the total number of commas.
   *  Also, each member string is space-trimmed.</p><p>For example, users might specify "test,dev,prod", and then Ref results in ["test","dev","prod"].</p>
   */
  Type?: string;
}

export interface _UnmarshalledParameterDefinition extends _ParameterDefinition {
  /**
   * <p>An array containing the list of values allowed for the parameter.</p>
   */
  AllowedValues?: Array<string>;

  /**
   * <p>A list of AWS SAM resources that use this parameter.</p>
   */
  ReferencedByResources: Array<string>;
}
