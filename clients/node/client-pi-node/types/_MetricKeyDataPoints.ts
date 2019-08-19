import {
  _ResponseResourceMetricKey,
  _UnmarshalledResponseResourceMetricKey
} from "./_ResponseResourceMetricKey";
import { _DataPoint, _UnmarshalledDataPoint } from "./_DataPoint";

/**
 * <p>A time-ordered series of data points, correpsonding to a dimension of a Performance Insights metric.</p>
 */
export interface _MetricKeyDataPoints {
  /**
   * <p>The dimension(s) to which the data points apply.</p>
   */
  Key?: _ResponseResourceMetricKey;

  /**
   * <p>An array of timestamp-value pairs, representing measurements over a period of time.</p>
   */
  DataPoints?: Array<_DataPoint> | Iterable<_DataPoint>;
}

export interface _UnmarshalledMetricKeyDataPoints extends _MetricKeyDataPoints {
  /**
   * <p>The dimension(s) to which the data points apply.</p>
   */
  Key?: _UnmarshalledResponseResourceMetricKey;

  /**
   * <p>An array of timestamp-value pairs, representing measurements over a period of time.</p>
   */
  DataPoints?: Array<_UnmarshalledDataPoint>;
}
