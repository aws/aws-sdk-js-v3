import {
  _InsightResultValue,
  _UnmarshalledInsightResultValue
} from "./_InsightResultValue";

/**
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface _InsightResults {
  /**
   * <p>The ARN of the insight whose results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  InsightArn: string;

  /**
   * <p>The attribute that the findings are grouped by for the insight whose results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttribute: string;

  /**
   * <p>The list of insight result values returned by the <code>GetInsightResults</code> operation.</p>
   */
  ResultValues: Array<_InsightResultValue> | Iterable<_InsightResultValue>;
}

export interface _UnmarshalledInsightResults extends _InsightResults {
  /**
   * <p>The list of insight result values returned by the <code>GetInsightResults</code> operation.</p>
   */
  ResultValues: Array<_UnmarshalledInsightResultValue>;
}
