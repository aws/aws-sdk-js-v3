import { _UnmarshalledHistoricalMetricResult } from "./_HistoricalMetricResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMetricDataOutput shape
 */
export interface GetMetricDataOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.</p> <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use the NextToken must use the same request parameters as the request that generated the token. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>HistoricalMetricResult</code> objects, organized by <code>Dimensions</code>, which is the ID of the resource specified in the <code>Filters</code> used for the request. The metrics are combined with the metrics included in <code>Collections</code>, which is a list of <code>HisotricalMetricData</code> objects.</p> <p>If no <code>Grouping</code> is specified in the request, <code>Collections</code> includes summary data for the <code>HistoricalMetrics</code>.</p>
   */
  MetricResults?: Array<_UnmarshalledHistoricalMetricResult>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
