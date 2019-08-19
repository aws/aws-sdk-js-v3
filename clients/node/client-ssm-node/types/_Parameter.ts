/**
 * <p>An Amazon EC2 Systems Manager parameter in Parameter Store.</p>
 */
export interface _Parameter {
  /**
   * <p>The name of the parameter.</p>
   */
  Name?: string;

  /**
   * <p>The type of parameter. Valid values include the following: String, String list, Secure string.</p>
   */
  Type?: "String" | "StringList" | "SecureString" | string;

  /**
   * <p>The parameter value.</p>
   */
  Value?: string;

  /**
   * <p>The parameter version.</p>
   */
  Version?: number;

  /**
   * <p>Either the version number or the label used to retrieve the parameter value. Specify selectors by using one of the following formats:</p> <p>parameter_name:version</p> <p>parameter_name:label</p>
   */
  Selector?: string;

  /**
   * <p>Applies to parameters that reference information in other AWS services. SourceResult is the raw result or response from the source.</p>
   */
  SourceResult?: string;

  /**
   * <p>Date the parameter was last changed or updated and the parameter version was created.</p>
   */
  LastModifiedDate?: Date | string | number;

  /**
   * <p>The Amazon Resource Name (ARN) of the parameter.</p>
   */
  ARN?: string;
}

export interface _UnmarshalledParameter extends _Parameter {
  /**
   * <p>Date the parameter was last changed or updated and the parameter version was created.</p>
   */
  LastModifiedDate?: Date;
}
