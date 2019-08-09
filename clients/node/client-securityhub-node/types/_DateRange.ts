/**
 * <p>A date range for the date filter.</p>
 */
export interface _DateRange {
  /**
   * <p>A date range value for the date filter.</p>
   */
  Value?: number;

  /**
   * <p>A date range unit for the date filter.</p>
   */
  Unit?: "DAYS" | string;
}

export type _UnmarshalledDateRange = _DateRange;
