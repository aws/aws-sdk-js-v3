import {
  _ComplianceSummary,
  _UnmarshalledComplianceSummary
} from "./_ComplianceSummary";

/**
 * <p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p>
 */
export interface _AggregateComplianceCount {
  /**
   * <p>The 12-digit account ID or region based on the GroupByKey value.</p>
   */
  GroupName?: string;

  /**
   * <p>The number of compliant and noncompliant AWS Config rules.</p>
   */
  ComplianceSummary?: _ComplianceSummary;
}

export interface _UnmarshalledAggregateComplianceCount
  extends _AggregateComplianceCount {
  /**
   * <p>The number of compliant and noncompliant AWS Config rules.</p>
   */
  ComplianceSummary?: _UnmarshalledComplianceSummary;
}
