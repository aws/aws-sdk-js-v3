import {
  _ComplianceViolator,
  _UnmarshalledComplianceViolator
} from "./_ComplianceViolator";

/**
 * <p>Describes the non-compliant resources in a member account for a specific AWS Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are non-compliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.</p>
 */
export interface _PolicyComplianceDetail {
  /**
   * <p>The AWS account that created the AWS Firewall Manager policy.</p>
   */
  PolicyOwner?: string;

  /**
   * <p>The ID of the AWS Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The AWS account ID.</p>
   */
  MemberAccount?: string;

  /**
   * <p>An array of resources that are not protected by the policy.</p>
   */
  Violators?: Array<_ComplianceViolator> | Iterable<_ComplianceViolator>;

  /**
   * <p>Indicates if over 100 resources are non-compliant with the AWS Firewall Manager policy.</p>
   */
  EvaluationLimitExceeded?: boolean;

  /**
   * <p>A time stamp that indicates when the returned information should be considered out-of-date.</p>
   */
  ExpiredAt?: Date | string | number;

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

export interface _UnmarshalledPolicyComplianceDetail
  extends _PolicyComplianceDetail {
  /**
   * <p>An array of resources that are not protected by the policy.</p>
   */
  Violators?: Array<_UnmarshalledComplianceViolator>;

  /**
   * <p>A time stamp that indicates when the returned information should be considered out-of-date.</p>
   */
  ExpiredAt?: Date;

  /**
   * <p>Details about problems with dependent services, such as AWS WAF or AWS Config, that are causing a resource to be non-compliant. The details include the name of the dependent service and the error message received that indicates the problem with the service.</p>
   */
  IssueInfoMap?: {
    [key in "AWSCONFIG" | "AWSWAF" | "AWSSHIELD_ADVANCED" | string]: string
  };
}
