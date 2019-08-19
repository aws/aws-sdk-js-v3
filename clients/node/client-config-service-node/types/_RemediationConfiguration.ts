import {
  _RemediationParameterValue,
  _UnmarshalledRemediationParameterValue
} from "./_RemediationParameterValue";

/**
 * <p>An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.</p>
 */
export interface _RemediationConfiguration {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName: string;

  /**
   * <p>The type of the target. Target executes remediation. For example, SSM document.</p>
   */
  TargetType: "SSM_DOCUMENT" | string;

  /**
   * <p>Target ID is the name of the public document.</p>
   */
  TargetId: string;

  /**
   * <p>Version of the target. For example, version of the SSM document.</p>
   */
  TargetVersion?: string;

  /**
   * <p>An object of the RemediationParameterValue.</p>
   */
  Parameters?:
    | { [key: string]: _RemediationParameterValue }
    | Iterable<[string, _RemediationParameterValue]>;

  /**
   * <p>The type of a resource. </p>
   */
  ResourceType?: string;
}

export interface _UnmarshalledRemediationConfiguration
  extends _RemediationConfiguration {
  /**
   * <p>An object of the RemediationParameterValue.</p>
   */
  Parameters?: { [key: string]: _UnmarshalledRemediationParameterValue };
}
