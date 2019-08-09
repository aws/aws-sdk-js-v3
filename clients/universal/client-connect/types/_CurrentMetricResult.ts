import { _Dimensions, _UnmarshalledDimensions } from "./_Dimensions";
import {
  _CurrentMetricData,
  _UnmarshalledCurrentMetricData
} from "./_CurrentMetricData";

/**
 * <p>A <code>CurrentMetricResult</code> object.</p>
 */
export interface _CurrentMetricResult {
  /**
   * <p>The <code>Dimensions</code> for the <code>CurrentMetricResult</code> object.</p>
   */
  Dimensions?: _Dimensions;

  /**
   * <p>The <code>Collections</code> for the <code>CurrentMetricResult</code> object.</p>
   */
  Collections?: Array<_CurrentMetricData> | Iterable<_CurrentMetricData>;
}

export interface _UnmarshalledCurrentMetricResult extends _CurrentMetricResult {
  /**
   * <p>The <code>Dimensions</code> for the <code>CurrentMetricResult</code> object.</p>
   */
  Dimensions?: _UnmarshalledDimensions;

  /**
   * <p>The <code>Collections</code> for the <code>CurrentMetricResult</code> object.</p>
   */
  Collections?: Array<_UnmarshalledCurrentMetricData>;
}
