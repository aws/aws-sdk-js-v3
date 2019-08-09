import {
  _ComplianceSummary,
  _UnmarshalledComplianceSummary
} from "./_ComplianceSummary";

/**
 * <p>The number of AWS resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.</p>
 */
export interface _ComplianceSummaryByResourceType {
  /**
   * <p>The type of AWS resource.</p>
   */
  ResourceType?: string;

  /**
   * <p>The number of AWS resources that are compliant or noncompliant, up to a maximum of 100 for each.</p>
   */
  ComplianceSummary?: _ComplianceSummary;
}

export interface _UnmarshalledComplianceSummaryByResourceType
  extends _ComplianceSummaryByResourceType {
  /**
   * <p>The number of AWS resources that are compliant or noncompliant, up to a maximum of 100 for each.</p>
   */
  ComplianceSummary?: _UnmarshalledComplianceSummary;
}
