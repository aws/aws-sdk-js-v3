import {
  _ComplianceContributorCount,
  _UnmarshalledComplianceContributorCount
} from "./_ComplianceContributorCount";

/**
 * <p>Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.</p>
 */
export interface _Compliance {
  /**
   * <p>Indicates whether an AWS resource or AWS Config rule is compliant.</p> <p>A resource is compliant if it complies with all of the AWS Config rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.</p> <p>A rule is compliant if all of the resources that the rule evaluates comply with it. A rule is noncompliant if any of these resources do not comply.</p> <p>AWS Config returns the <code>INSUFFICIENT_DATA</code> value when no evaluation results are available for the AWS resource or AWS Config rule.</p> <p>For the <code>Compliance</code> data type, AWS Config supports only <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>INSUFFICIENT_DATA</code> values. AWS Config does not support the <code>NOT_APPLICABLE</code> value for the <code>Compliance</code> data type.</p>
   */
  ComplianceType?:
    | "COMPLIANT"
    | "NON_COMPLIANT"
    | "NOT_APPLICABLE"
    | "INSUFFICIENT_DATA"
    | string;

  /**
   * <p>The number of AWS resources or AWS Config rules that cause a result of <code>NON_COMPLIANT</code>, up to a maximum number.</p>
   */
  ComplianceContributorCount?: _ComplianceContributorCount;
}

export interface _UnmarshalledCompliance extends _Compliance {
  /**
   * <p>The number of AWS resources or AWS Config rules that cause a result of <code>NON_COMPLIANT</code>, up to a maximum number.</p>
   */
  ComplianceContributorCount?: _UnmarshalledComplianceContributorCount;
}
