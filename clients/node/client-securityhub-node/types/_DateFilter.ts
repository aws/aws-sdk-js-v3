import { _DateRange, _UnmarshalledDateRange } from "./_DateRange";

/**
 * <p>A date filter for querying findings.</p>
 */
export interface _DateFilter {
  /**
   * <p>A start date for the date filter.</p>
   */
  Start?: string;

  /**
   * <p>An end date for the date filter.</p>
   */
  End?: string;

  /**
   * <p>A date range for the date filter.</p>
   */
  DateRange?: _DateRange;
}

export interface _UnmarshalledDateFilter extends _DateFilter {
  /**
   * <p>A date range for the date filter.</p>
   */
  DateRange?: _UnmarshalledDateRange;
}
