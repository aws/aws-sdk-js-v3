import {
  _SeveritySummary,
  _UnmarshalledSeveritySummary
} from "./_SeveritySummary";

/**
 * <p>A summary of resources that are not compliant. The summary is organized according to resource type.</p>
 */
export interface _NonCompliantSummary {
  /**
   * <p>The total number of compliance items that are not compliant.</p>
   */
  NonCompliantCount?: number;

  /**
   * <p>A summary of the non-compliance severity by compliance type</p>
   */
  SeveritySummary?: _SeveritySummary;
}

export interface _UnmarshalledNonCompliantSummary extends _NonCompliantSummary {
  /**
   * <p>A summary of the non-compliance severity by compliance type</p>
   */
  SeveritySummary?: _UnmarshalledSeveritySummary;
}
