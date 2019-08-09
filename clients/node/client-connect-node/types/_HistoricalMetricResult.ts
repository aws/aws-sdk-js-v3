import { _Dimensions, _UnmarshalledDimensions } from "./_Dimensions";
import {
  _HistoricalMetricData,
  _UnmarshalledHistoricalMetricData
} from "./_HistoricalMetricData";

/**
 * <p>The metrics data returned from a <code>GetMetricData</code> operation.</p>
 */
export interface _HistoricalMetricResult {
  /**
   * <p>The <code>Dimensions</code> for the metrics.</p>
   */
  Dimensions?: _Dimensions;

  /**
   * <p>A list of <code>HistoricalMetricData</code> objects.</p>
   */
  Collections?: Array<_HistoricalMetricData> | Iterable<_HistoricalMetricData>;
}

export interface _UnmarshalledHistoricalMetricResult
  extends _HistoricalMetricResult {
  /**
   * <p>The <code>Dimensions</code> for the metrics.</p>
   */
  Dimensions?: _UnmarshalledDimensions;

  /**
   * <p>A list of <code>HistoricalMetricData</code> objects.</p>
   */
  Collections?: Array<_UnmarshalledHistoricalMetricData>;
}
