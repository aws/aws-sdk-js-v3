/**
 * <p>The refresh status of a Trusted Advisor check.</p>
 */
export interface _TrustedAdvisorCheckRefreshStatus {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  checkId: string;

  /**
   * <p>The status of the Trusted Advisor check for which a refresh has been requested: "none", "enqueued", "processing", "success", or "abandoned".</p>
   */
  status: string;

  /**
   * <p>The amount of time, in milliseconds, until the Trusted Advisor check is eligible for refresh.</p>
   */
  millisUntilNextRefreshable: number;
}

export type _UnmarshalledTrustedAdvisorCheckRefreshStatus = _TrustedAdvisorCheckRefreshStatus;
