/**
 * <p>Statistics for the checks performed during the audit.</p>
 */
export interface _TaskStatistics {
  /**
   * <p>The number of checks in this audit.</p>
   */
  totalChecks?: number;

  /**
   * <p>The number of checks in progress.</p>
   */
  inProgressChecks?: number;

  /**
   * <p>The number of checks waiting for data collection.</p>
   */
  waitingForDataCollectionChecks?: number;

  /**
   * <p>The number of checks that found compliant resources.</p>
   */
  compliantChecks?: number;

  /**
   * <p>The number of checks that found noncompliant resources.</p>
   */
  nonCompliantChecks?: number;

  /**
   * <p>The number of checks.</p>
   */
  failedChecks?: number;

  /**
   * <p>The number of checks that did not run because the audit was canceled.</p>
   */
  canceledChecks?: number;
}

export type _UnmarshalledTaskStatistics = _TaskStatistics;
