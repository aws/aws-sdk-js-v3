import {
  _CompliantSummary,
  _UnmarshalledCompliantSummary
} from "./_CompliantSummary";
import {
  _NonCompliantSummary,
  _UnmarshalledNonCompliantSummary
} from "./_NonCompliantSummary";

/**
 * <p>A summary of compliance information by compliance type.</p>
 */
export interface _ComplianceSummaryItem {
  /**
   * <p>The type of compliance item. For example, the compliance type can be Association, Patch, or Custom:string.</p>
   */
  ComplianceType?: string;

  /**
   * <p>A list of COMPLIANT items for the specified compliance type.</p>
   */
  CompliantSummary?: _CompliantSummary;

  /**
   * <p>A list of NON_COMPLIANT items for the specified compliance type.</p>
   */
  NonCompliantSummary?: _NonCompliantSummary;
}

export interface _UnmarshalledComplianceSummaryItem
  extends _ComplianceSummaryItem {
  /**
   * <p>A list of COMPLIANT items for the specified compliance type.</p>
   */
  CompliantSummary?: _UnmarshalledCompliantSummary;

  /**
   * <p>A list of NON_COMPLIANT items for the specified compliance type.</p>
   */
  NonCompliantSummary?: _UnmarshalledNonCompliantSummary;
}
