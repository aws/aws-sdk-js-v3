import { _UnmarshalledMetricDataResult } from "./_MetricDataResult";
import { _UnmarshalledMessageData } from "./_MessageData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMetricDataOutput shape
 */
export interface GetMetricDataOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The metrics that are returned, including the metric name, namespace, and dimensions.</p>
   */
  MetricDataResults?: Array<_UnmarshalledMetricDataResult>;

  /**
   * <p>A token that marks the next batch of returned results.</p>
   */
  NextToken?: string;

  /**
   * <p>Contains a message about this <code>GetMetricData</code> operation, if the operation results in such a message. An example of a message that may be returned is <code>Maximum number of allowed metrics exceeded</code>. If there is a message, as much of the operation as possible is still executed.</p> <p>A message appears here only if it is related to the global <code>GetMetricData</code> operation. Any message about a specific metric returned by the operation appears in the <code>MetricDataResult</code> object returned for that metric.</p>
   */
  Messages?: Array<_UnmarshalledMessageData>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
