/**
 * <p>Quotas configured for a usage plan.</p>
 */
export interface _QuotaSettings {
  /**
   * <p>The maximum number of requests that can be made in a given time period.</p>
   */
  limit?: number;

  /**
   * <p>The number of requests subtracted from the given limit in the initial time period.</p>
   */
  offset?: number;

  /**
   * <p>The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".</p>
   */
  period?: "DAY" | "WEEK" | "MONTH" | string;
}

export type _UnmarshalledQuotaSettings = _QuotaSettings;
