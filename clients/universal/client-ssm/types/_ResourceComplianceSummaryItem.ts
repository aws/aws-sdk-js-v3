import {
  _ComplianceExecutionSummary,
  _UnmarshalledComplianceExecutionSummary
} from "./_ComplianceExecutionSummary";
import {
  _CompliantSummary,
  _UnmarshalledCompliantSummary
} from "./_CompliantSummary";
import {
  _NonCompliantSummary,
  _UnmarshalledNonCompliantSummary
} from "./_NonCompliantSummary";

/**
 * <p>Compliance summary information for a specific resource. </p>
 */
export interface _ResourceComplianceSummaryItem {
  /**
   * <p>The compliance type.</p>
   */
  ComplianceType?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The resource ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>The compliance status for the resource.</p>
   */
  Status?: "COMPLIANT" | "NON_COMPLIANT" | string;

  /**
   * <p>The highest severity item found for the resource. The resource is compliant for this item.</p>
   */
  OverallSeverity?:
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "INFORMATIONAL"
    | "UNSPECIFIED"
    | string;

  /**
   * <p>Information about the execution.</p>
   */
  ExecutionSummary?: _ComplianceExecutionSummary;

  /**
   * <p>A list of items that are compliant for the resource.</p>
   */
  CompliantSummary?: _CompliantSummary;

  /**
   * <p>A list of items that aren't compliant for the resource.</p>
   */
  NonCompliantSummary?: _NonCompliantSummary;
}

export interface _UnmarshalledResourceComplianceSummaryItem
  extends _ResourceComplianceSummaryItem {
  /**
   * <p>Information about the execution.</p>
   */
  ExecutionSummary?: _UnmarshalledComplianceExecutionSummary;

  /**
   * <p>A list of items that are compliant for the resource.</p>
   */
  CompliantSummary?: _UnmarshalledCompliantSummary;

  /**
   * <p>A list of items that aren't compliant for the resource.</p>
   */
  NonCompliantSummary?: _UnmarshalledNonCompliantSummary;
}
