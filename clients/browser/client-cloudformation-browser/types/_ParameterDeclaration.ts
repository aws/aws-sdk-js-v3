import {
  _ParameterConstraints,
  _UnmarshalledParameterConstraints
} from "./_ParameterConstraints";

/**
 * <p>The ParameterDeclaration data type.</p>
 */
export interface _ParameterDeclaration {
  /**
   * <p>The name that is associated with the parameter.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The default value of the parameter.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The type of parameter.</p>
   */
  ParameterType?: string;

  /**
   * <p>Flag that indicates whether the parameter value is shown as plain text in logs and in the AWS Management Console.</p>
   */
  NoEcho?: boolean;

  /**
   * <p>The description that is associate with the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The criteria that AWS CloudFormation uses to validate parameter values.</p>
   */
  ParameterConstraints?: _ParameterConstraints;
}

export interface _UnmarshalledParameterDeclaration
  extends _ParameterDeclaration {
  /**
   * <p>The criteria that AWS CloudFormation uses to validate parameter values.</p>
   */
  ParameterConstraints?: _UnmarshalledParameterConstraints;
}
