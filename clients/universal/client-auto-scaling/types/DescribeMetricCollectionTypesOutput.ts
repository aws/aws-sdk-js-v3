import { _UnmarshalledMetricCollectionType } from "./_MetricCollectionType";
import { _UnmarshalledMetricGranularityType } from "./_MetricGranularityType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMetricCollectionTypesOutput shape
 */
export interface DescribeMetricCollectionTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>One or more metrics.</p>
   */
  Metrics?: Array<_UnmarshalledMetricCollectionType>;

  /**
   * <p>The granularities for the metrics.</p>
   */
  Granularities?: Array<_UnmarshalledMetricGranularityType>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
