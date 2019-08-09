/**
 * <p>Describes the compliance status for the account. An account is considered non-compliant if it includes resources that are not protected by the specified policy.</p>
 */
export interface _EvaluationResult {
  /**
   * <p>Describes an AWS account's compliance with the AWS Firewall Manager policy.</p>
   */
  ComplianceStatus?: "COMPLIANT" | "NON_COMPLIANT" | string;

  /**
   * <p>Number of resources that are non-compliant with the specified policy. A resource is considered non-compliant if it is not associated with the specified policy.</p>
   */
  ViolatorCount?: number;

  /**
   * <p>Indicates that over 100 resources are non-compliant with the AWS Firewall Manager policy.</p>
   */
  EvaluationLimitExceeded?: boolean;
}

export type _UnmarshalledEvaluationResult = _EvaluationResult;
