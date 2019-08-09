import { _UnmarshalledMetric } from "./_Metric";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMetricsOutput shape
 */
export interface ListMetricsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The metrics.</p>
   */
  Metrics?: Array<_UnmarshalledMetric>;

  /**
   * <p>The token that marks the start of the next batch of returned results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
