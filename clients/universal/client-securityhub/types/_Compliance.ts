/**
 * <p>Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard (for example, CIS AWS Foundations). Contains compliance-related finding details.</p>
 */
export interface _Compliance {
  /**
   * <p>The result of a compliance check.</p>
   */
  Status?: "PASSED" | "WARNING" | "FAILED" | "NOT_AVAILABLE" | string;
}

export type _UnmarshalledCompliance = _Compliance;
