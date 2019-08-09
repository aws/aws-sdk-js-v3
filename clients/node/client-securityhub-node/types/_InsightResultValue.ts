/**
 * <p>The insight result values returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface _InsightResultValue {
  /**
   * <p>The value of the attribute that the findings are grouped by for the insight whose results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttributeValue: string;

  /**
   * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
   */
  Count: number;
}

export type _UnmarshalledInsightResultValue = _InsightResultValue;
