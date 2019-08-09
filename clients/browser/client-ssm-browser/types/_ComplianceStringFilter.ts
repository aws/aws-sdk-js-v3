/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 */
export interface _ComplianceStringFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key?: string;

  /**
   * <p>The value for which to search.</p>
   */
  Values?: Array<string> | Iterable<string>;

  /**
   * <p>The type of comparison that should be performed for the value: Equal, NotEqual, BeginWith, LessThan, or GreaterThan.</p>
   */
  Type?:
    | "EQUAL"
    | "NOT_EQUAL"
    | "BEGIN_WITH"
    | "LESS_THAN"
    | "GREATER_THAN"
    | string;
}

export interface _UnmarshalledComplianceStringFilter
  extends _ComplianceStringFilter {
  /**
   * <p>The value for which to search.</p>
   */
  Values?: Array<string>;
}
