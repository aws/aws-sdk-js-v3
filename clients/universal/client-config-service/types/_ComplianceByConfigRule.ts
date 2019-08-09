import { _Compliance, _UnmarshalledCompliance } from "./_Compliance";

/**
 * <p>Indicates whether an AWS Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.</p>
 */
export interface _ComplianceByConfigRule {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>Indicates whether the AWS Config rule is compliant.</p>
   */
  Compliance?: _Compliance;
}

export interface _UnmarshalledComplianceByConfigRule
  extends _ComplianceByConfigRule {
  /**
   * <p>Indicates whether the AWS Config rule is compliant.</p>
   */
  Compliance?: _UnmarshalledCompliance;
}
