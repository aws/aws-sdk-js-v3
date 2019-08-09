import {
  _ComplianceContributorCount,
  _UnmarshalledComplianceContributorCount
} from "./_ComplianceContributorCount";

/**
 * <p>The number of AWS Config rules or AWS resources that are compliant and noncompliant.</p>
 */
export interface _ComplianceSummary {
  /**
   * <p>The number of AWS Config rules or AWS resources that are compliant, up to a maximum of 25 for rules and 100 for resources.</p>
   */
  CompliantResourceCount?: _ComplianceContributorCount;

  /**
   * <p>The number of AWS Config rules or AWS resources that are noncompliant, up to a maximum of 25 for rules and 100 for resources.</p>
   */
  NonCompliantResourceCount?: _ComplianceContributorCount;

  /**
   * <p>The time that AWS Config created the compliance summary.</p>
   */
  ComplianceSummaryTimestamp?: Date | string | number;
}

export interface _UnmarshalledComplianceSummary extends _ComplianceSummary {
  /**
   * <p>The number of AWS Config rules or AWS resources that are compliant, up to a maximum of 25 for rules and 100 for resources.</p>
   */
  CompliantResourceCount?: _UnmarshalledComplianceContributorCount;

  /**
   * <p>The number of AWS Config rules or AWS resources that are noncompliant, up to a maximum of 25 for rules and 100 for resources.</p>
   */
  NonCompliantResourceCount?: _UnmarshalledComplianceContributorCount;

  /**
   * <p>The time that AWS Config created the compliance summary.</p>
   */
  ComplianceSummaryTimestamp?: Date;
}
