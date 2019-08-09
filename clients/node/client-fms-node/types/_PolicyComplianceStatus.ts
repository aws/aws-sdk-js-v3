import {
  _EvaluationResult,
  _UnmarshalledEvaluationResult
} from "./_EvaluationResult";

/**
 * <p>Indicates whether the account is compliant with the specified policy. An account is considered non-compliant if it includes resources that are not protected by the policy.</p>
 */
export interface _PolicyComplianceStatus {
  /**
   * <p>The AWS account that created the AWS Firewall Manager policy.</p>
   */
  PolicyOwner?: string;

  /**
   * <p>The ID of the AWS Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The friendly name of the AWS Firewall Manager policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The member account ID.</p>
   */
  MemberAccount?: string;

  /**
   * <p>An array of <code>EvaluationResult</code> objects.</p>
   */
  EvaluationResults?: Array<_EvaluationResult> | Iterable<_EvaluationResult>;

  /**
   * <p>Time stamp of the last update to the <code>EvaluationResult</code> objects.</p>
   */
  LastUpdated?: Date | string | number;

  /**
   * <p>Details about problems with dependent services, such as AWS WAF or AWS Config, that are causing a resource to be non-compliant. The details include the name of the dependent service and the error message received that indicates the problem with the service.</p>
   */
  IssueInfoMap?:
    | {
        [key in "AWSCONFIG" | "AWSWAF" | "AWSSHIELD_ADVANCED" | string]: string
      }
    | Iterable<
        ["AWSCONFIG" | "AWSWAF" | "AWSSHIELD_ADVANCED" | string, string]
      >;
}

export interface _UnmarshalledPolicyComplianceStatus
  extends _PolicyComplianceStatus {
  /**
   * <p>An array of <code>EvaluationResult</code> objects.</p>
   */
  EvaluationResults?: Array<_UnmarshalledEvaluationResult>;

  /**
   * <p>Time stamp of the last update to the <code>EvaluationResult</code> objects.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>Details about problems with dependent services, such as AWS WAF or AWS Config, that are causing a resource to be non-compliant. The details include the name of the dependent service and the error message received that indicates the problem with the service.</p>
   */
  IssueInfoMap?: {
    [key in "AWSCONFIG" | "AWSWAF" | "AWSSHIELD_ADVANCED" | string]: string
  };
}
