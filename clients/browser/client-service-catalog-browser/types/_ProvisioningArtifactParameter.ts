import {
  _ParameterConstraints,
  _UnmarshalledParameterConstraints
} from "./_ParameterConstraints";

/**
 * <p>Information about a parameter used to provision a product.</p>
 */
export interface _ProvisioningArtifactParameter {
  /**
   * <p>The parameter key.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The default value.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The parameter type.</p>
   */
  ParameterType?: string;

  /**
   * <p>If this value is true, the value for this parameter is obfuscated from view when the parameter is retrieved. This parameter is used to hide sensitive information.</p>
   */
  IsNoEcho?: boolean;

  /**
   * <p>The description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>Constraints that the administrator has put on a parameter.</p>
   */
  ParameterConstraints?: _ParameterConstraints;
}

export interface _UnmarshalledProvisioningArtifactParameter
  extends _ProvisioningArtifactParameter {
  /**
   * <p>Constraints that the administrator has put on a parameter.</p>
   */
  ParameterConstraints?: _UnmarshalledParameterConstraints;
}
