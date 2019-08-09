import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMetricWidgetImageOutput shape
 */
export interface GetMetricWidgetImageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The image of the graph, in the output format specified.</p>
   */
  MetricWidgetImage?: Uint8Array;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
