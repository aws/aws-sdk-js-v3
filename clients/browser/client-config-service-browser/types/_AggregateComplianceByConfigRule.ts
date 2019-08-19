import { _Compliance, _UnmarshalledCompliance } from "./_Compliance";

/**
 * <p>Indicates whether an AWS Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p>
 */
export interface _AggregateComplianceByConfigRule {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.</p>
   */
  Compliance?: _Compliance;

  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId?: string;

  /**
   * <p>The source region from where the data is aggregated.</p>
   */
  AwsRegion?: string;
}

export interface _UnmarshalledAggregateComplianceByConfigRule
  extends _AggregateComplianceByConfigRule {
  /**
   * <p>Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.</p>
   */
  Compliance?: _UnmarshalledCompliance;
}
