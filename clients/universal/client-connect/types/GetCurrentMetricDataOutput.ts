import { _UnmarshalledCurrentMetricResult } from "./_CurrentMetricResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCurrentMetricDataOutput shape
 */
export interface GetCurrentMetricDataOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A string returned in the response. Use the value returned in the response as the value of the NextToken in a subsequent request to retrieve the next set of results.</p> <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use the NextToken must use the same request parameters as the request that generated the token. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>CurrentMetricResult</code> objects organized by <code>Dimensions</code> combining with <code>CurrentMetricDataCollections</code>.</p> <p> <code>Dimensions</code> is the resourceId specified in the <code>Filters</code> of the request. </p> <p> <code>Collections</code> is a list of <code>CurrentMetricData</code> objects with corresponding values to the <code>CurrentMetrics</code> specified in the request.</p> <p>If no <code>Grouping</code> is specified in the request, <code>Collections</code> is a summary for the <code>CurrentMetric</code> returned.</p>
   */
  MetricResults?: Array<_UnmarshalledCurrentMetricResult>;

  /**
   * <p>The time at which <code>CurrentMetricData</code> was retrieved and cached for pagination.</p>
   */
  DataSnapshotTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
