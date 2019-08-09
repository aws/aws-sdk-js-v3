import {
  _SeveritySummary,
  _UnmarshalledSeveritySummary
} from "./_SeveritySummary";

/**
 * <p>A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type.</p>
 */
export interface _CompliantSummary {
  /**
   * <p>The total number of resources that are compliant.</p>
   */
  CompliantCount?: number;

  /**
   * <p>A summary of the compliance severity by compliance type.</p>
   */
  SeveritySummary?: _SeveritySummary;
}

export interface _UnmarshalledCompliantSummary extends _CompliantSummary {
  /**
   * <p>A summary of the compliance severity by compliance type.</p>
   */
  SeveritySummary?: _UnmarshalledSeveritySummary;
}
