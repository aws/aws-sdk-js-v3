/**
 * <p>The content range of the report.</p>
 */
export interface _BusinessReportContentRange {
  /**
   * <p>The interval of the content range.</p>
   */
  Interval?: "ONE_DAY" | "ONE_WEEK" | string;
}

export type _UnmarshalledBusinessReportContentRange = _BusinessReportContentRange;
