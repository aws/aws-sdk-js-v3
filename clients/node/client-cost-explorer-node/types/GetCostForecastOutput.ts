import { _UnmarshalledMetricValue } from "./_MetricValue";
import { _UnmarshalledForecastResult } from "./_ForecastResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCostForecastOutput shape
 */
export interface GetCostForecastOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>How much you are forecasted to spend over the forecast period, in <code>USD</code>.</p>
   */
  Total?: _UnmarshalledMetricValue;

  /**
   * <p>The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a list of days. For <code>MONTHLY</code> forecasts, this is a list of months.</p>
   */
  ForecastResultsByTime?: Array<_UnmarshalledForecastResult>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
