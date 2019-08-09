/**
 * <p>A structure that contains information about the quota period.</p>
 */
export interface _QuotaPeriod {
  /**
   * <p>The value of a period.</p>
   */
  PeriodValue?: number;

  /**
   * <p>The time unit of a period.</p>
   */
  PeriodUnit?:
    | "MICROSECOND"
    | "MILLISECOND"
    | "SECOND"
    | "MINUTE"
    | "HOUR"
    | "DAY"
    | "WEEK"
    | string;
}

export type _UnmarshalledQuotaPeriod = _QuotaPeriod;
